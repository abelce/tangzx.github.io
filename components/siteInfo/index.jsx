import React from "react";
import Style from "./style.scss";

export default function SiteInfo({ productCount = 0, userCount = 0, commentCount = 0 }) {
  return (
    <div className={Style.siteInfo}>
      <div className={Style.title}>统计信息</div>
      <div className={Style.item}>会员: {userCount}</div>
      <div className={Style.item}>产品数: {productCount}</div>
      <div className={Style.item}>回帖数: {commentCount}</div>
      <div className={Style.item}>
        <a href="/rss.xml">
          <img src="/static/images/rss.png" />
          <span>RSS</span>
        </a>
      </div>
    </div>
  );
}
