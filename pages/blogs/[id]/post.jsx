import React from "react";
import Markdown from "~/components/markdown";
import View from "~/components/view";
import dayjs from "dayjs";
import Style from "./style.module.scss";
import cn from "classnames";
import { Divider } from "antd";
class Post extends React.Component {
  getTime = () => {
    // 相差一天的显示日期， 否则显示n小时前
    let now = dayjs();
    let createDay = dayjs(this.props.data.createTime);
    let diffDay = now.diff(createDay, "day");
    // 超过一天
    // if (diffDay > 0) {
      return createDay.format("YYYY-MM-DD");
    // }
    // // 超过一小时
    // let diffHour = now.diff(createDay, "hour");
    // if (diffHour > 0) {
    //   return `${diffHour}小时前`;
    // }
    // // 默认一分钟前
    // let diffMin = now.diff(createDay, "minutes") || 1;
    // return `${diffMin}分钟前`;
  };

  getContent = () => {
    const { data } = this.props;
    if (!data) {
      return null;
    }
    if (data.type === "html") {
      return <div className="braft-output-content" dangerouslySetInnerHTML={{ __html: data.content }}></div>;
    }
    return <Markdown content={data.content || ""} />;
  };

  render() {
    const { data, currentUser } = this.props;
    if (!data) {
      return <div />;
    }
    return (
      <div className={Style.post_container}>
        <div className={Style.post}>
          <div className={Style.post_content}>
            <div className={Style.post_header}>
              <h1 className={Style.name}>{data.name}</h1>
              <div className={Style["base-info"]}>
                <span className={Style.item}>
                  <i className={cn("iconfont", Style["icon-time"])}></i>
                  <span>发表于&nbsp;{this.getTime()}</span>
                  <Divider type="vertical"/>
                  <span>更新于&nbsp;{dayjs(this.props.data.updateTime).format("YYYY-MM-DD")}</span>
                  <Divider type="vertical"/>
                  <View data={data.viewCount} />
                </span>
                <div>
                  {/* <a
                    style={{ display: currentUser && currentUser.id === data.operatorID ? "block" : "none" }}
                    href={`/blogEdit/${data.id}`}
                  >
                    编辑
                  </a> */}
                </div>
              </div>
            </div>
            <div className={Style.detail_body}>
              <div className={Style.content}>
                {this.getContent()}
                {data.url ? (
                  <a target="_blank" href={data.url}>
                    原文地址:{data.url}
                  </a>
                ) : null}
              </div>
            </div>
            <div className={Style.operations}>{/* <Operations likeCount={data.likeCount} sourceID={data.id} /> */}</div>
          </div>
          {/* <Comments sourceID={data.id}/> */}
        </div>
      </div>
    );
  }
}

export default Post;
