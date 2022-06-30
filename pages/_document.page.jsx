import Document, { Head, Main, NextScript, Html } from "next/document";
import { SITE_NAME } from "../utils";
export default class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html lang="zh-Hans">
        <Head>
          <meta name="baidu-site-verification" content="code-qLvQxBZOZA" />
          <meta name="google-site-verification" content="LE9f0-2YGlWDKgo5955hV_-oeN3Uq74EN_6gcKaJ60U" />
          <title>{SITE_NAME}</title>
          <meta httpEquiv="Content-Type" content="text/html;charset=UTF-8" />
          <meta httpEquiv="X-UA-Compatible" content="IE=edge,chrome=1" />
          <meta httpEquiv="Cache-Control" content="no-siteapp" />
          <meta name="viewport" content="width=device-width,initial-scale=1,user-scalable=no,viewport-fit=cover" />
          <link rel="icon" href="/favicon.ico" />
          <meta name="author" content="1061225829@qq.com" />
          <meta property="og:type" content="website" />
          <meta property="site_name" content={SITE_NAME} />
          <meta property="og:site_name" content={SITE_NAME} />
          <link rel="dns-prefetch" href="cdn.vwood.xyz" />
          <link rel="dns-prefetch" href="cloud.vwood.xyz" />
        </Head>
        <body className="custom_class">
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
