import React, { useState } from "react";
import Modal from "../modal";
import cn from "classnames";
import Style from "./style.scss";

export default function Contacts() {
  const [wechat, setWechat] = useState(false);

  return (
    <div className={Style.contacts}>
      <ul className={Style.list}>
        <li className={cn(Style.item, Style.title)}>联系信息</li>
        <li className={Style.item}>
          <div className={Style.contact_item} onClick={() => setWechat(true)}>
            微信
          </div>
        </li>
      </ul>
      {wechat ? (
        <Modal size="small" onClose={() => setWechat(false)}>
          <img style={{ width: "100%" }} src="http://cdn.vwood.xyz/WechatIMG181.jpeg"></img>
        </Modal>
      ) : null}
    </div>
  );
}
