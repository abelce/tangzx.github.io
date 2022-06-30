import React from "react";
import Giscus from "@giscus/react";

export const GiscusComment = () => {
  return (
    <Giscus
      id="giscus-comments"
      repo="abelce/giscus-comments"
      repoId="R_kgDOHWXQ-w"
      category="Announcements"
      categoryId="DIC_kwDOHWXQ-84CPJeQ"
      mapping="url"
      term="Welcome to @giscus/react component!"
      reactionsEnabled="1"
      emitMetadata="0"
      inputPosition="top"
      theme="light"
      lang="zh-CN"
    />
  );
};

{
  /* <script src="https://giscus.app/client.js"
        data-repo="abelce/giscus-comments"
        data-repo-id="R_kgDOHWXQ-w"
        data-category="Announcements"
        data-category-id="DIC_kwDOHWXQ-84CPJeQ"
        data-mapping="url"
        data-reactions-enabled="1"
        data-emit-metadata="0"
        data-input-position="top"
        data-theme="light"
        data-lang="zh-CN"
        data-loading="lazy"
        crossorigin="anonymous"
        async>
</script>  */
}
