import React from "react";
import { Pagination } from "antd";
import Style from "./style.scss";

export default function MyPagination(props) {
  return (
    <div className={Style.pagination}>
      <Pagination {...props} />
    </div>
  );
}
