import { Button } from "antd";
import React from "react";
import styles from "./index.scss";

export default function LoadMore ({loading, hasMore = false, onClick}) {
    return <div className={styles["load-more"]}>
        {
            hasMore
            ? <Button type="primary" onClick={onClick} loading={loading} className={styles["load-more-btn"]}>查看更多</Button>
             : <div>--没有更多数据了--</div>
        }
    </div>
}