import {
  action,
  observable,
  // runInAction
} from "mobx";
import Base from "./base";
import { getNotes, getNoteByID, saveArticle } from "../http";
import { FormatNotes, FormatNote, NewNote } from "../domain/note";

// const SORT = "-createdTime";

export default class NoteStore extends Base {
  @observable token = "";
  @observable notes = [];
  @observable total = 0;
  @observable note = null;

  @action setToken(data) {
    this.token = data;
  }

  @action setData() {}

  @action async getNotes(params = {}) {
    params.filter = "type eq 'vwood-notes'";
    const result = await getNotes(params);
    this.notes = [...this.notes, ...FormatNotes(result.data)];
    this.total = result.total;
  }

  @action async getNote(id, params) {
    const result = await getNoteByID(id, params);
    this.note = FormatNote(result.data);
    return this.note;
  }

  @action saveArticle(data) {
    saveArticle(data).then((data) => {
      this.note = data;
    });
  }

  @action newNote() {
    this.note = NewNote();
  }

  @action setField = (key, value) => {
    this.note = {
      ...this.note,
      [key]: value,
    };
  };

  @action changePage = () => {
    this.getNotes({
      "page[offset]": this.notes.length,
    });
  };
}
