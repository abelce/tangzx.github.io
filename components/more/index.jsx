import React from "react";
import Style from "./style.scss";
import cn from "classnames";

function More({ total = 0, current = 0, onClick, loading = false }) {
  if (total === 0) {
    return <div className={Style.more_wrap}>{/* <span>--没有数据--</span> */}</div>;
  }

  if (total <= current) {
    return null;
  }

  return (
    <div className={Style.more_wrap}>
      <div
        className={cn(Style.more_btn, { [Style.more_btn_fetching]: loading })}
        onClick={loading ? () => {} : onClick}
      >
        {loading ? (
          <span>
            获取数据中<span class={Style.dot}></span>
          </span>
        ) : (
          <span>
            更多数据<span class={Style.dot}></span>
          </span>
        )}
      </div>
    </div>
  );
}

export default More;
