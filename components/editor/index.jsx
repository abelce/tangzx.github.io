import React from "react";
import { inject, observer } from "mobx-react";
import Style from "./style.scss";

@inject("userStore")
@observer
export default class Editor extends React.Component {

  static defaultProps = {
    content: "",
    type: "html",
    onChange: () => {},
  };

  state = {};

  markdownState = null;

  constructor(props) {
    super(props);
  }

  componentDidMount() {}
  // data.content = this.markdownState.getMarkdown();

  render() {
    return (
      <div className={Style.editor}>
        <div id="test-editormd"></div>
      </div>
    );
  }
}
