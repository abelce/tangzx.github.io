import React, { useState, useMemo } from "react";
import Modal from "../modal";
import Dayjs from "dayjs";
import { Divider } from "antd";
import Style from "./style.module.scss";

const START_DATE = "2020-01-21";

const contacts = [
  {
    id: "email",
    value: (
      <div>
        <a href="mailto:1061225829@qq.com">邮箱：1061225829@qq.com</a>
      </div>
    ),
  },
  // {
  //     id: 'wechat',
  //     value: <a>微信：tzx1061225829</a>
  // }
];
const vwoods = [
  {
    id: "aboutus",
    value: (
      <div className={Style.about}>
        <span>©2020 vwood</span>
        <Divider type="vertical" />
        <a href="/about">关于</a>
      </div>
    ),
  },
  {
    id: "beian",
    value: (
      <div className={Style.beian}>
        <span></span>
        <a href="http://beian.miit.gov.cn/" target="_blank">
          蜀ICP备19030923号-1
        </a>
      </div>
    ),
  },
];

function Item(props) {
  return (
    <div className={Style.item}>
      <h2>{props.title}</h2>
      <div>
        {props.data.map((item, index) => (
          <div key={item.id}>{item.value}</div>
        ))}
      </div>
    </div>
  );
}

const Footer = () => {
  const [wechat, setWechat] = useState(false);
  const days = useMemo(() => {
    return Dayjs().diff(Dayjs(START_DATE), "day");
  });

  return (
    <div className={Style.footer}>
      <Item key="contact" title="联系" data={contacts} />

      <Item key="vwood" title="vwood" data={vwoods} />

      {/* 
        <div className={Style.metaInfo}>
            <div className={Style.about}>
                <span>©2020 vwood - 一个软件作品交流的地方</span>
                <Divider type="vertical"/>
                <a href="/about">关于</a>
            </div>
            <div className={Style.beian}>
                <span></span>
                <a href="http://beian.miit.gov.cn/" target="_blank">蜀ICP备19030923号-1</a>
            </div>
        </div>
        <div className={Style.footer_contact}>
            <div>
                <div className={Style.contact_item} onClick={() => setWechat(true)}>
                    邮箱：1061225829@qq.com
                </div>
            </div>
            <div>
                <span>本站已运行{days}天</span>
            </div>
            {/* <a href="https://soul.vwood.xyz" target="_blank">毒鸡汤</a> */}
      {/* </div>
        {wechat 
            ? <Modal size="small" onClose={() => setWechat(false)}>
                <img style={{width: '100%'}} src="http://cdn.vwood.xyz/WechatIMG181.jpeg"></img>
            </Modal>
            : null} */}
    </div>
  );
};

export default Footer;
