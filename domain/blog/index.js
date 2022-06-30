class Blog {
  content = "";
  tags = "";
  title = "";
  description = "";
  url = "";
  type = "blog";
  constructor(data = {}) {
    this.id = data.id;
    this.name = data.name;
    this.description = data.description;
    this.content = data.content;
    this.createTime = data.createTime;
    this.isDeleted = data.isDeleted;
    this.operatorID = data.operatorID;
    this.url = data.url;
    this.type = data.type;
    this.viewCount = data.viewCount;
    this.tags = data.tags || [];
    this.likeCount = data.likeCount || 0;
  }
}

export const NewBlog = () => new Blog();

export const FormatBlog = (data) => {
  if (!data) {
    return {};
  }
  return {
    ...data,
    tags: data?.tags ?? [],
    description: data.description ? data.description : formateDesciption(data.content ? data.content.substr(0, 200) : ""),
  }
};

export const FormatListBlog = (data) => {
  const res = FormatBlog(data);
  res.content = "";
  return res;
};

export default Blog;

function formateDesciption(data = "") {
  data = data || "";
  data = data
    .replace(/```/g, "")
    .replace(/`/g, "")
    .replace(/#/g, "")
    .replace(/\/\//g, "")
    .replace("> ", "")
    .replace(/\*\*/g, "");
  return data;
}
