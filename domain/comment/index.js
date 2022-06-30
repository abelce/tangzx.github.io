class Comment {
  children = {
    data: [],
    total: 0,
  };
  id = "";
  content = "";
  from = undefined;
  to = undefined;
  toAvatar = "";
  toName = "";
  parentID = "";
  deleted = false;
  sourceID = "";
  replyID = "";
  createdTime = "";
  updateTime = "";
  constructor(data = {}) {
    this.id = data.id;
    this.content = data.content;
    this.from = data.from;
    this.to = data.to;
    this.parentID = data.parentID;
    this.createTime = data.createTime ;
    this.children = data.children || {};
    this.sourceID = data.sourceID;
    this.replyID = data.replyID;
  }

  // get children() {
  //     return this.children;
  // }
}

export function FormatComment(data) {
  const aComment = new Comment({
    ...data,
  });
  if (data.children && data.children.total > 0) {
    aComment.children.total = data.attributes.children.total;
    aComment.children.data = data.attributes.children.data.map((ct) => new Comment(ct));
  }
  return aComment;
}
export function FromatComments(data = []) {
  return data.map((ct) => FormatComment(ct));
}

export const NewComment = () => new Comment();

export default Comment;
