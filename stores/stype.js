import { action, observable } from "mobx";
import Base from "./base";
import { getTypesList, saveType } from "../http";
import { FormatStype } from "../domain/stype";

export default class StypeStore extends Base {
  @observable data = [];

  get getStypes() {
    return this.data;
  }

  @action
  getTypes(params) {
    this.data = [];
    getTypesList(params).then((data) => {
      const tmp = [];
      data.data.map((dt) => {
        tmp.push(FormatStype(dt));
      });
      this.data = tmp;
    });
  }

  @action
  saveType(data) {
    return saveType(data).then((data) => {
      const newType = FormatStype(data.data);
      this.data = [...this.data, newType];
      return newType;
    });
  }
}
