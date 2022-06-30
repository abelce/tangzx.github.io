import "../common/style/vars.css";
import "../common/style/reset.scss";
import App from "next/app";
import Layout from "../components/layout";
import { initializeStore } from "../stores";
import { Provider, observer } from "mobx-react";
import { FormatUser } from "../domain/user";
import { getUser } from "../http";
import { BackTop, ConfigProvider } from "antd";
import zhCN from "antd/lib/locale/zh_CN";
import 'antd/dist/antd.css'

@observer
class MyApp extends App {
  mobxStore = {};
  static async getInitialProps(appContext) {
    const ctx = appContext.ctx;
    ctx.mobxStore = initializeStore();
    const appProps = await App.getInitialProps(appContext);
    if (typeof ctx.query.authInfo === "object" && null !== ctx.query.authInfo) {
      const userResult = await getUser({
        token: ctx.query.authInfo.token,
        id: ctx.query.authInfo.id,
      });
      let user = FormatUser(userResult.data);
      ctx.mobxStore.userStore.setCurrentUser(user);
      ctx.mobxStore.userStore.setAuthInfo(ctx.query.authInfo);
    }

    return {
      ...appProps,
      initialMobxState: ctx.mobxStore,
    };
  }

  constructor(props) {
    super(props);
    const isServer = typeof window === "undefined";
    this.mobxStore = isServer ? props.initialMobxState : initializeStore(props.initialMobxState);
    if (!isServer) {
      localStorage.setItem("token", this.mobxStore.userStore.token);
    }
  }

  render() {
    const { Component, pageProps } = this.props;
    return (
      <Provider {...this.mobxStore}>
        <ConfigProvider locale={zhCN}>
          <Layout>
            <Component {...pageProps} />
          </Layout>
          <BackTop />
        </ConfigProvider>
      </Provider>
    );
  }
}
export default MyApp;
