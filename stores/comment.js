import { action, observable, runInAction } from "mobx";
import Base from "./base";
import { createComment, getComments, getComment } from "../http";
import { FormatComment, FromatComments } from "../domain/comment";

export default class CommentStore extends Base {
  @observable comments = [];
  @observable total = 0;
  @observable current = 0;

  @action
  setComments(data = []) {
    this.comments = data;
  }

  @action
  setComment(data) {
    if (typeof data === "object") {
      const index = this.comments.findIndex((ct) => ct.id === data.id);
      if (index !== -1) {
        this.comments[index] = data;
      } else {
        this.comments.push(data);
      }
      this.comments = [...this.comments];
    }
  }

  @action
  setTotal(data) {
    this.total = data;
  }

  @action
  setCurrent(data) {
    this.current = data;
  }

  @action
  async addComment(data) {
    const createResult = await createComment(data);
    const getResult = await getComment(createResult.id);
    const comment = FormatComment(getResult.data.Comment);
    if (comment.parentID) {
      const index = this.comments.findIndex((ct) => ct.id === comment.parentID);
      if (index !== -1) {
        const { data } = this.comments[index].children;
        this.comments[index].children.data = [...data, comment];
        this.comments[index].children.total++;
      }
    } else {
      this.comments.unshift(comment);
    }
    runInAction(() => {
      this.comments = [...this.comments];
    });
    return comment;
  }

  @action
  async getComments(data) {
    const commentResult = await getComments(data);
    if (commentResult) {
      const comments = FromatComments(commentResult.Comment.data);
      runInAction(() => {
        this.setComments(comments);
        this.setTotal(commentResult.total);
      });
    }
  }

  @action
  async getComment(id) {
    const commentResult = await getComment(id);
    const comments = FromatComment(commentResult.data.Comment);
    runInAction(() => {
      this.setComments(comments);
      this.setTotal(commentResult.total);
    });
  }
}
