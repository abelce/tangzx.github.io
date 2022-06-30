import React from "react";
import Style from "./style.module.scss";

const FILTERS = {
  home: `type in ('blog', 'link')`,
  blogs: `type in ('blog')`,
  links: `type in ('link')`,
};

const TITLES = {
  "": `首页`,
  blogs: `笔记`,
  links: `收藏`,
};

const SORT = "-createTime";

class Latset extends React.Component {
  render() {
    const { latests = [] } = this.props;
    return (
      <div className={Style.latest}>
        <ul>
          {latests.map((blog) => (
            <li>
              <a key={blog.id} href={`/blog/${blog.id}`}>
                {blog.title}
              </a>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default Latset;
