import React from "react";
import { createPortal } from "react-dom";
import Style from "./style.module.scss";
import { CloseOutlined } from "@ant-design/icons";
import cn from "classnames";

class Modal extends React.Component {
  node = null;
  constructor(props) {
    super(props);
    this.id = `dialog_${+new Date()}`;
    this.ref = React.createRef();
  }

  handleClose = () => {
    this.props.onClose && this.props.onClose();
    const node = this.ref.current;
    if (node) {
      const parent = node.parentNode;
      parent && parent.removeChild(node);
    }
  };

  render() {
    const { size = "large" } = this.props;
    return createPortal(
      <div className={Style.dialog} id={this.id}>
        <div className={Style.close}>
          <div className={Style.close_btn} onClick={this.handleClose}>
            <CloseOutlined />
          </div>
        </div>
        <div className={Style.dialog_content_wrap}>
          <div className={cn(Style.dialog_content, Style[size])}>{this.props.children}</div>
        </div>
      </div>,
      document.getElementById("__next")
    );
  }
}

export default Modal;
