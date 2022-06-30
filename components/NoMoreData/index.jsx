import React from "react";
import styles from "./index.module.scss";

export default function NoMoreData({show}) {
  if (show !== true) {
    return null;
  }
  return (
    <div className={styles["load-more"]}>
      <div>--没有更多数据了--</div>
    </div>
  );
}
