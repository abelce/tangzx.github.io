import React from "react";
import { Tag } from "antd";
import Style from "./style.scss";

function Topics({ data }) {
  return (
    <div className={Style.topics}>
      {data.map((topic, index) => (
        <a className={Style.topic} key={index} href={`/topics/${topic}`}>
          <Tag color="green">{topic}</Tag>
        </a>
      ))}
    </div>
  );
}
export default Topics;
