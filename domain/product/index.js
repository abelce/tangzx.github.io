const LINKS_TYPE = [
  {
    name: "github",
    label: "Github",
  },
  {
    name: "twitter",
    label: "Twitter",
  },
  {
    name: "weibo",
    label: "微博",
  },
  {
    name: "appstore",
    label: "AppStore",
  },
  {
    name: "youtube",
    label: "YouTube",
  },
  {
    name: "playstore",
    label: "PlayStore",
  },
  {
    name: "chrome",
    label: "chrome插件",
  },
  // {
  //     name: "others",
  //     label: "其他",
  // }
];

class Product {
  content = "";
  tags = [];
  name = "";
  description = "";
  images = [];
  makers = [];
  type = "products";
  hunter = "";
  overview = "";
  website = "";
  logo = "";
  comments = 0;
  links = [];
  constructor(data = {}) {
    this.id = data.id;
    this.name = data.name || "";
    this.description = data.description || "";
    this.content = data.content || "";
    this.createdTime = data.createTime;
    this.deleted = data.deleted || false;
    this.hunter = data.hunter || "";
    this.images = data.images || [];
    this.makers = data.makers || [];
    this.type = data.type || "";
    this.upvotes = data.upvotes || 0;
    this.tags = data.tags || [];
    this.likeCount = data.likeCount || 0;
    this.overview = data.overview || "";
    this.website = data.website || "";
    this.logo = data.logo || "";
    this.comments = data.comments || 0;
    this.updateTime = data.updateTime || 0;
    this.links = LINKS_TYPE.map((link) => {
      return (
        (data.links || []).find((item) => {
          if (item.name === link.name) {
            item.label = link.label;
            return true;
          }
          return false;
        }) || {
          ...link,
          src: "",
        }
      );
    });
    this.platform = data.platform || ["pc"];
  }
}

export const NewProduct = () => new Product();

export const FormatProduct = (data) => {
  const { id, attributes } = data;
  return new Product({
    id,
    ...attributes,
  });
};

export default Product;
