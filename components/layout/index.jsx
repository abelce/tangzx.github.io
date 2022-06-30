import React from "react";
import { Layout, BackTop } from "antd";
import Header from "./header";
import Footer from "./footer";
import Style from "./style.module.scss";

export default function AppLayout(props) {
  const { children } = props;
  return (
    <Layout id="layout" className={Style.layout} hasSider>
      <Layout.Header>
        <Header />
      </Layout.Header>
      <Layout.Content className={Style["layout-content"]}>{children}</Layout.Content>
      <Layout.Footer>
        <Footer />
      </Layout.Footer>
      <BackTop target={() => document.getElementById("layout")} />
    </Layout>
  );
}
