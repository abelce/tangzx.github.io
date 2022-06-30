import React from "react";
import { Select } from "antd";
import { inject, observer } from "mobx-react";
import Style from "./style.scss";

@inject("stypeStore", "userStore")
@observer
class Stype extends React.Component {
  componentDidMount() {
    const { type, operatorID } = this.props;
    this.props.stypeStore.getTypes({
      filter: `type eq '${type}' and operatorID eq '${operatorID}'`,
      "page[offset]": 0,
      "page[limit]": 999,
    });
  }

  handleChange = (value = []) => {
    const { stypeStore } = this.props;
    if (typeof this.props.onChange === "function") {
      this.props.onChange(value);
    }
    const stypes = stypeStore.getStypes;
    const newVal = value.find((val) => !stypes.some((dt) => dt.name === val));
    if (newVal) {
      this.createStype(newVal);
    }
  };

  createStype = (name) => {
    this.props.stypeStore
      .saveType({
        type: this.props.type,
        operatorID: this.props.operatorID,
        name,
        token: this.props.userStore.token,
      })
      .then((data) => {});
  };

  render() {
    const { value = [], stypeStore } = this.props;
    return (
      <Select
        mode="tags"
        value={value}
        onChange={this.handleChange}
        style={{ width: "100%" }}
        placeholder="选择标签(回车添加新标签)"
      >
        {stypeStore.getStypes.map((tp) => (
          <Select.Option key={tp.id} value={tp.name}>
            {tp.name}
          </Select.Option>
        ))}
      </Select>
    );
  }
}

export default Stype;
