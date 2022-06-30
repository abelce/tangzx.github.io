import React, { createRef } from "react";
import Card from "~/components/card";
import { FormatListBlog } from "~/domain/blog";

import { Request } from "~/http/request";
import NoMoreData from "~/components/NoMoreData";
import { message } from "antd";
import _uniqBy from "lodash/uniqBy";
import _debouce from "lodash/debounce";
import Style from "./style.module.scss";
import {LatestArticles} from "./components/LatestArticles";

class Home extends React.Component {
  contentRef = createRef();
  listRef = createRef();

  constructor(props) {
    super(props);
    this.state = {
      blogs: this.props.blogs || [],
      count: this.props.count || 0,
      pageSize: this.props.pageSize || 10,
      pageNo: this.props.pageNo || 0,
      loading: false,
      current: this.props.current || 0,
    };
  }

  componentDidMount() {
    // this.handlePageChange();
    // window.addEventListener("scroll", this.handleScroll, true);
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll, true);
  }

  // 滚动加载数据
  handleScroll = _debouce((e) => {
    const { loading, count, blogs = [] } = this.state;
    let layout = document.getElementById("layout");
    if (loading || blogs.length === count) {
      return;
    }

    if (Math.ceil(layout.clientHeight + layout.scrollTop) >= layout.scrollHeight) {
      this.handlePageChange();
    }
  }, 100);

  handlePageChange = async () => {
    this.setState({
      loading: true,
    });
    try {
      const { pageSize } = this.state;
      const current = this.state.current + 1;
      const res = await Request.getArticleList({
        pageNo: current,
        pageSize: pageSize,
      });

      const blogs = res.data["Article"].data.map((dt) => FormatListBlog(dt));
      this.setState({
        blogs: _uniqBy([...this.state.blogs, ...blogs], "id"),
        current,
        pageNo: res.data["Article"].pageNo,
        count: res.data["Article"].count,
        pageSize: res.data["Article"].pageSize,
      });
    } catch (err) {
      console.log(err);
      message.error(err.toString());
    } finally {
      this.setState({
        loading: false,
      });
    }
  };

  render() {
    const { blogs = [], count, latestBlogs = [] } = this.props;
    return (
      <div className={Style.blog}>
        <div className={Style["blog-content"]} ref={this.contentRef}>
          {blogs.map((blog) => (
            <Card key={blog.id} data={blog} />
          ))}
          <NoMoreData show={blogs.length && blogs.length === count} />
        </div>
        <div className={Style["blog-sidebar"]}>
          <LatestArticles list={latestBlogs}/>
        </div>
      </div>
    );
  }
}

export async function getStaticProps(context) {
  const res = await Request.getArticleList({
    pageNo: 0,
    pageSize: 9999,
  });

  const blogs = res.data["Article"].data.map((dt) => FormatListBlog(dt));
  const latestResponse = await Request.getLatestArticleList({
    pageNo: 0,
    pageSize: 10,
  });
  const latestBlogs = latestResponse.data["Article"].data.map((dt) => FormatListBlog(dt));

  console.log("blogs:", blogs)
  return {
    props: {
      blogs: blogs,
      pageNo: res.data["Article"].pageNo,
      count: res.data["Article"].count,
      pageSize: res.data["Article"].pageSize,
      latestBlogs: latestBlogs,
    }
  }
}

export default Home;
export const Base = Home;
