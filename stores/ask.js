/*
 * File: note copy.js
 * Project: vwood
 * File Created: Tuesday, 14th January 2020 11:47:39 am
 * Author: zxtang (1061225829@qq.com)
 * -----
 * Last Modified: Tuesday, 14th January 2020 11:47:39 am
 * Modified By: zxtang (1061225829@qq.com>)
 * -----
 * Copyright 2017 - 2020 Your Company, Your Company
 */
import {
  action,
  observable,
  // runInAction
} from "mobx";
import Base from "./base";
import { getNotes, getNoteByID } from "../http";
import { FormatNotes, FormatNote, NewNote } from "../domain/note";

// const SORT = "-createdTime";

export default class AskStore extends Base {
  @observable token = "";
  @observable asks = [];
  @observable total = 0;
  @observable ask = null;

  @action setToken(data) {
    this.token = data;
  }

  // @action setAsk(data = {}) {
  //   if (data) {
  //     const index = this.asks.findIndex(p => p.id === data.id);
  //     if (index !== -1) {
  //       this.asks[index] = data;
  //     } else {
  //       this.asks.push(data);
  //     }
  //   }
  //   this.product = data;
  // }

  @action async getAsks(params = {}) {
    params.filter = "type eq 'vwood-asks'";
    const result = await getNotes(params);
    this.asks = [...this.asks, ...FormatNotes(result.data)];
    this.total = result.total;
  }

  @action async getAsk(id, params) {
    const result = await getNoteByID(id, params);
    this.ask = FormatNote(result.data);
    return this.ask;
  }

  @action newAsk() {
    this.ask = NewNote();
  }

  @action setField = (key, value) => {
    this.ask = {
      ...this.ask,
      [key]: value,
    };
  };

  @action changePage = () => {
    this.getAsks({
      "page[offset]": this.asks.length,
    });
  };
}
