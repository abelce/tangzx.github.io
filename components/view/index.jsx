import React from "react";
import styles from "./index.module.scss";

export default function View({ data }) {
  return (
    <span
      className={styles["view"]}
    >
      <span className={styles["view-title"]}>阅读量 </span>
      <span className={styles["view-count"]}>{data}</span>
    </span>
  );
}
