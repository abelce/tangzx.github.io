import Link from "next/link";
import React, { memo } from "react";
import { LatestArticlesProps } from "./types";
import style from "./style.module.scss";

export const LatestArticles = memo(
  (props: LatestArticlesProps): JSX.Element => {
    const { list = [] } = props;
    return (
      <div className={style["latest-article"]}>
        <h3 className={style["latest-article-header"]}>最新文章</h3>
        <div className={style["latest-article-list"]}>
          {list.map((article) => (
            <Link key={article.id} href={`/blogs/${article.id}`} passHref prefetch>
              <a target="_blank" className={style["article"]} title={article.name}>
                {article.name}
              </a>
            </Link>
          ))}
        </div>
      </div>
    );
  }
);

