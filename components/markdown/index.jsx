import React, { useEffect, useRef } from "react";
import Marked from "marked";
import Style from "./style.module.scss";
import "highlight.js/styles/atom-one-light.css";
import cn from "classnames";

//自定义标签信息文档： https://marked.js.org/using_pro#renderer
const rendererMD = new Marked.Renderer();
// rendererMD.image = function (href, title, text) {
//   return `<img src="${href}" alt="${text}" title="${title}"></img>`;
// };

Marked.setOptions({
  renderer: rendererMD,
  highlight: function (code, language) {
    const hljs = require("highlight.js");
    const validLanguage = hljs.getLanguage(language) ? language : "plaintext";
    return hljs.highlight(validLanguage, code).value;
  },
  pedantic: false,
  gfm: true,
  breaks: false,
  sanitize: false,
  smartLists: true,
  smartypants: false,
  xhtml: false,
});

export default function Index({ content }) {
  const _ref = useRef();
  return (
    <div className={cn(Style.marked)}>
      <div ref={_ref} className={"markdown-body"} dangerouslySetInnerHTML={{ __html: Marked.parse(content) }} />
    </div>
  );
}
