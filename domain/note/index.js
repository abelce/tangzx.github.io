class Note {
  id = "";
  content = "";
  tags = [];
  title = "";
  description = "";
  type = "note";
  viewCount = 0;
  operatorID = "";
  constructor(data = {}) {
    this.id = data.id;
    this.description = data.description || "";
    this.content = data.content || "";
    this.createdTime = data.createdTime;
    this.deleted = data.deleted || false;
    this.type = data.type || "";
    this.viewCount = data.viewCount || 0;
    this.operatorID = data.operatorID || "";
    this.title = data.title || "";
  }
}

export const NewNote = () => new Note();

export const FormatNote = (data) => {
  const {
    id,
    attributes,
    relationships: { operator },
  } = data;
  return new Note({
    id,
    ...attributes,
    operatorID: operator.data.id,
  });
};

export const FormatNotes = (data) => {
  return data.map((c) => FormatNote(c));
};

export default Note;
