import React from "react";
import Link from "next/link";
import dayjs from "dayjs";
import Style from "./style.module.scss";
import { Divider } from "antd";

class Card extends React.Component {
  handleConfirm = () => {
    const { onDelete, data } = this.props;
    if (onDelete) {
      onDelete(data.id);
    }
  };

  renderMetaInfo = () => {
    const { data } = this.props;
    const metas = [];
    metas.push(`发布于: ${dayjs(data.createTime).format("YYYY-MM-DD")}`);
    if (Array.isArray(data.tags) && data.tags.length) {
      metas.push(`标签: ${data.tags.join("，")}`);
    }

    return metas.map((meta, index) => {
      if (index === metas.length - 1) {
        return meta;
      }
      return (
        <>
          {meta}
          <Divider type="vertical" />
        </>
      );
    });
  };

  render() {
    const { data } = this.props;
    return (
      <div className={Style.card} style={this.props.style || {}}>
        <Link href={`/blogs/${data.id}`} passHref prefetch>
          <a target="_blank" title={data.name} rel="bookmark">
            <div className={Style["repo-header"]}>
              <h1 className={Style["repo-title"]}>{data.name}</h1>
            </div>
              <p className={Style["repo-desc"]}>{data.description || data.content.substr(0, 400)}...</p>
            <div className={Style["repo-meta"]}>
              <span className={Style["info-block"]}>{this.renderMetaInfo()}</span>
              <div>
                <span className={Style["info-block"]}>
                  {/* <LikeOutlined /> */}
                  {/* <span>{data.likeCount || 0}</span> */}
                </span>
              </div>
            </div>
          </a>
        </Link>
      </div>
    );
  }
}

export default Card;
