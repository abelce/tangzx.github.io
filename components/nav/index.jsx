import React, { useMemo } from "react";
import { Menu } from "antd";
import Router, { withRouter } from "next/router";
import Style from "./style.module.scss";

const links = [
  { href: "/", label: "文章", id: "home" },
  { href: "/updates", label: "更新日志", id: "updates" },
];

function switchRouter({ key, item }) {
  if (item.props.target) {
    window.open(key, "_blank");
    return;
  }
  Router.push(key);
}

function Nav({ router }) {
  return (
    <Menu mode="horizontal" defaultSelectedKeys={[router.pathname]} onSelect={switchRouter} className={Style.navs}>
      {links.map(({ href, label, target, id }) => (
        <Menu.Item key={href} className={Style["nav-item"]} value={target}>
          {label}
        </Menu.Item>
      ))}
    </Menu>
  );
}

export default withRouter(Nav);
