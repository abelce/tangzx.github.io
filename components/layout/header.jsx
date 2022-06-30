import React, { useState, useCallback } from "react";
import Navs from "../nav";
import Modal from "../modal";
import Login from "../login";
import { PlusOutlined } from "@ant-design/icons";
import { Avatar, Input, Button, Dropdown, Menu, notification } from "antd";
import { observer, inject } from "mobx-react";
import Router from "next/router";
import Style from "./style.module.scss";
import { imagePath } from "../../utils";

const Header = ({ userStore, productStore }) => {
  const [open, setOpen] = useState(false);
  const currentUser = userStore.currentUser;

  const handleLogin = () => {
    setOpen(!open);
  };

  const hanleMenu = (data) => {
    switch (data.key) {
      case "logout":
        userStore.logout();
        break;
      case "settings":
        window.location.href = "/settings";
        break;
    }
  };

  const overlay = () => {
    return (
      <Menu onClick={hanleMenu}>
        {/* <Menu.Item key="settings">
                个人中心
            </Menu.Item> */}
        <Menu.Item key="logout">退出</Menu.Item>
      </Menu>
    );
  };

  const handleLogoModelClose = () => {
    setOpen(false);
  };

  const handleCreate = () => {
    if (currentUser) {
      Router.push("/blogEdit/new");
    } else {
      notification.warn({
        message: "请登陆",
        duration: 1,
      });
    }
  };

  const handleSearch = (e) => {
    const val = e.target.value.trim();
    if (!val) {
      return;
    }
    window.location.href = "/search?q=" + val;
  };

  return (
    <div className={Style.header}>
      <nav className={Style.header_left}>
        <a className={Style["logo-container"]} href="/">
          {/* <h2 className={cn(Style["header-logo"], Style.flow)}>VWOOD</h2> */}
          <img alt="vwood" src="/images/logo.png" />
        </a>
        <Navs />
        {/* <div  className={Style.search}>
                    <Input.Search defaultValue={productStore.search} placeholder="搜索" onPressEnter={handleSearch}/>
                </div> */}
      </nav>
      <nav className={Style.header_right}>
        {/* <a>
          <Button type="primary" ghost onClick={handleCreate}>
            <PlusOutlined />
            写文章
          </Button>
        </a> */}
        {/* {currentUser ? (
          <Dropdown overlay={overlay()} trigger={["click"]}>
            <Avatar className={Style.avatar} src={imagePath(currentUser.avatar)} />
          </Dropdown>
        ) : (
          <Button type="primary" onClick={handleLogin}>
            登陆
          </Button>
        )} */}
      </nav>
      {open ? (
        <Modal onClose={handleLogoModelClose}>
          <Login />
        </Modal>
      ) : null}
    </div>
  );
};

export default inject("userStore", "productStore")(observer(Header));
