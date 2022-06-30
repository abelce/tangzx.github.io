import React, { useState } from "react";
import { getTimeage, imagePath } from "../../utils";
import cn from "classnames";
import { inject, observer } from "mobx-react";
import { Tag, Button, notification, Input } from "antd";
import Markdown from "../../components/markdown";
import _get from "lodash/get";
import Style from "./style.scss";

function processContent(data = "") {
  return data.split('\n').filter(c => !!c).map(c => c.trimRight()).join("<br>");
  // return <Markdown content={data} />;
}

class TextArea extends React.Component {
  state = {
    value: "",
    loading: false,
  };
  handleValueChange = (e) => {
    this.setState({
      value: e.target.value,
    });
  };
  handleSend = async () => {
    try {
      if (!this.props.userStore.currentUser) {
        notification.warn({
          message: "请登陆",
        });
        return;
      }
      if (this.state.value.trim() === "") {
        return;
      }
      this.setState({
        loading: true,
      });
      await this.props.commentStore.addComment({
        token: this.props.userStore.token,
        content: this.state.value,
        // 资源id
        sourceID: this.props.source.id,
        // 顶级评论id
        parentID: this.props.parentID,
        // 回复的评论的用户id
        toID: this.props.toID,
        // 回复的评论的id
        replyID: this.props.replyID,
        title: this.props.source.title,
      });
      this.props.onSuccess && this.props.onSuccess();
      this.setState({
        loading: false,
        value: "",
      });
      if (this.props.onSuccess) {
        this.props.onSuccess();
      }
    } catch {
      this.setState({
        loading: false,
      });
    }
  };
}

@inject("commentStore", "userStore")
class New extends TextArea {
  render() {
    const {
      userStore: { currentUser = {} },
    } = this.props;
    const { loading } = this.state;
    return (
      <div className={Style.comment_review}>
        <div className={Style.container}>
          <div className={Style.userImage}>
            {currentUser ? (
              <img src={imagePath(currentUser.avatar)} lazy={"true"} />
            ) : (
              <div className={Style.tmp}>V</div>
            )}
          </div>
          <div className={Style.replay}>
            <Input.TextArea
              value={this.state.value}
              className={Style.editor}
              autoSize={{ maxRows: 40 }}
              onChange={this.handleValueChange}
            />
          </div>
          <Button type="primary" onClick={this.handleSend} disabled={loading}>
            {!loading ? "发送" : "发送中"}
          </Button>
        </div>
        {/* <div className={Style.notice}>
          <small className={Style.md}>支持markdown语法</small>
        </div> */}
      </div>
    );
  }
}

@inject("commentStore", "userStore")
class Reply extends TextArea {
  render() {
    const { loading } = this.state;
    return (
      <div className={Style.comment_review}>
        <div className={Style.container}>
          <div className={Style.replay}>
            {/* <pre className={Style.place}>{this.state.value}</pre> */}
            {/* <textarea value={this.state.value} className={Style.editor} rows={1} onChange={this.handleValueChange} /> */}
            <Input.TextArea
              value={this.state.value}
              className={Style.editor}
              autoSize={{ maxRows: 40 }}
              onChange={this.handleValueChange}
            />
            {/* <div className={Style.editor} contentEditable={true}></div> */}
          </div>
          <Button className={cn("noBorder", "button")} onClick={this.handleSend} disabled={loading}>
            {!loading ? "发送" : "发送中"}
          </Button>
        </div>
      </div>
    );
  }
}

function Card({ data, source, user, parentID, onSuccess }) {
  const [reply, setReply] = useState(false);
  const { children } = data;

  const handleReplay = () => {
    if (!user) {
      notification.warn({
        message: "请登陆",
      });
      return;
    }
    setReply(!reply);
  };
  const handleReplySuccess = () => {
    setReply(false);
    onSuccess && onSuccess();
  };

  return (
    <div id={`comment-card_${data.id}`} className={Style["comment_item"]}>
      <div className={Style["container"]}>
        <div className={Style.userDetail}>
          <div className={Style.userInfo}>
            <div className={Style.userAvatar}>
              <img src={_get(data, "from.avatar")} />
            </div>
            <div className={Style.userName}>{_get(data, "from.name")}</div>
          </div>
          {source.owner === _get(data, "from.id") ? (
            <div className={Style.hunter}>
              <Tag color="green">作者</Tag>
            </div>
          ) : null}
        </div>
        <div className={Style["comment-container"]}>
          <div className={Style["from-container"]}>
            <div className={Style.text} dangerouslySetInnerHTML={{__html: processContent(data.content)}}>
              {/* {processContent(data.content).map((c, index) => <p key={index} className={Style.comment_prograph}>{c}</p>)} */}
              {/* {processContent(data.content)} */}
            </div>
          </div>
          <div className={Style.metaInfo}>
            <a className={Style.optionItem} onClick={handleReplay}>
              <small>回复</small>
            </a>
            <span className={Style.optionItem}>
              <small>{getTimeage(data.createTime)}</small>
            </span>
          </div>
          {reply ? (
            <Reply
              parentID={parentID ? parentID : data.id}
              toID={_get(data, "from.id")}
              fromID={user.id}
              replyID={data.id}
              source={source}
              onSuccess={handleReplySuccess}
            />
          ) : null}
        </div>
      </div>
      {children && children.total > 0 ? (
        <div className={Style.replyContainer}>
          {children.data.map((c) => (
            <Card key={c.id} data={c} parentID={data.id} source={source} user={user} onSuccess={onSuccess} />
          ))}
        </div>
      ) : null}
    </div>
  );
}

// 评论由评论组件自己请求数据，不在服务器端与渲染
@inject("commentStore", "userStore")
@observer
class Comment extends React.Component {
  componentDidMount() {
    const { source, commentStore } = this.props;
    if (source) {
      commentStore.getComments({
        sourceID: source.id,
        sort: "-createTime",
      });
    }
  }

  handleOnSuccess = () => {};

  render() {
    const {
      commentStore: { comments },
      userStore: { currentUser },
      source,
    } = this.props;
    return (
      <div className={Style.comment_wrap}>
        <div className={Style.comment_title}>
          <h3>
            <strong>评论</strong>
          </h3>
        </div>
        {comments.length ? (
          <div className={Style.comment_list}>
            {comments.map((dt) => (
              <Card key={dt.id} data={dt} source={source} user={currentUser} onSuccess={this.handleOnSuccess} />
            ))}
          </div>
        ) : null}
        <New 
        onSuccess={this.handleOnSuccess} 
        source={source} 
        // fromID={user.id}
        />
      </div>
    );
  }
}

export default Comment;
