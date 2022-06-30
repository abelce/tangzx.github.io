// import {
//     action,
//     observable,
//     runInAction
//   } from "mobx";
//   import Base from "./base";
//   import {
//     getProductByName,
//     postProduct,
//     productLike,
//     getProducts,
//     productComments,
//     updateProduct,
//     getProductByUser,
//     deleteProduct,
//     getProductByLikes,
//   } from "../http";
//   import {
//     FormatProduct,
//     NewProduct
//   } from "../domain/product";
//   import _ from "lodash";
//   export const TAB_ALL = "all";
//   export const TAB_TODAY = "today";
//   export const TAB_YESTERDY = "yesterday";
//   export const TAB_HISTORY = "history";
//   const SORT = "-createdTime";

//   export default class BaseEntityStore extends Base {

//     @observable products = [];
//     @observable total = 0;
//     @observable type = "";
//     @observable url = "";
//     @observable current = 1;
//     @observable product = null;
//     // 是否点赞map， sourceID -- value
//     @observable likesMap = {};
//     @observable tabpane = TAB_ALL;
//     @observable token = "";
//     @observable loading = false;
//     @observable todayHunters = [];
//     @observable today = [];
//     @observable yesterday = [];
//     @observable relatedProducts = [];
//     // 搜索的字段
//     @observable search = "";

//     @action resetData = () => {
//       this.products = [];
//       this.total = 0;
//       this.product = null;
//     }

//     // @action async setTabpane(data) {
//     //   this.tabpane = data;
//     //   await this.getProducts();
//     // }

//     @action setToken(data) {
//       this.token = data;
//     }

//     @action setName(name) {
//       this.name = name;
//     }

//     @action setProducts(data = []) {
//       this.products = data;
//     }

//     @action setTotal(total = 0) {
//       this.total = total;
//     }

//     @action setType(type = "") {
//       this.type = type;
//     }

//     @action setUrl(url = "") {
//       this.url = url;
//     }

//     @action setCurrent(current = 1) {
//       this.current = current;
//     }

//     @action setProduct(data = {}) {
//       if (data) {
//         const index = this.products.findIndex(p => p.id === data.id);
//         if (index !== -1) {
//           this.products[index] = data;
//         } else {
//           this.products.push(data);
//         }
//       }
//       this.product = data;
//     }

//     @action setData({
//       products = [],
//       total,
//       type,
//       url,
//       current
//     }) {
//       this.setProducts(products);
//       this.setTotal(total);
//       this.setType(type);
//       this.setUrl(url);
//       this.setCurrent(current);
//     }

//     @action getToday = async () => {
//       let filterStr = [];
//       filterStr.push("time eq 'today'");
//       filterStr = [...filterStr].filter(f => !!f).join(" and ");
//       const res = await getProducts({
//         sort: SORT,
//         filter: filterStr,
//         "page[offset]": 0,
//         "page[limit]": 999,
//         token: this.token || "",
//       }).catch((err) => {
//         console.log(err);
//       });

//       const products = res.data.map(dt => FormatProduct(dt));
//       this.today = [...products];
//       return Promise.resolve();
//     }

//     @action getYesterday = async () => {
//       let filterStr = [];
//       filterStr.push("time eq 'yesterday'");
//       filterStr = [...filterStr].filter(f => !!f).join(" and ");
//       const res = await getProducts({
//         sort: SORT,
//         filter: filterStr,
//         "page[offset]": 0,
//         "page[limit]": 10,
//         token: this.token || "",
//       }).catch((err) => {
//         console.log(err);
//       });

//       const products = res.data.map(dt => FormatProduct(dt));
//       this.yesterday = [...products];
//       return Promise.resolve();
//     }

//     @action getHistory = async (params = {}) => {
//       try {
//         const {
//           query = {}, filter = ""
//         } = params;
//         let filterStr = [];
//         filterStr.push("time eq 'history'");
//         filterStr = [...filterStr, filter].filter(f => !!f).join(" and ");
//         const res = await getProducts({
//           sort: SORT,
//           filter: filterStr,
//           "page[offset]": query["page[offset]"] || 0,
//           "page[limit]": query["page[limit]"] || 10,
//           token: this.token || "",
//         }).catch((err) => {
//           console.log(err);
//         });

//         const products = res.data.map(dt => FormatProduct(dt));
//         const total = res.total;
//         const current = parseInt(query["current"]) || 1;

//         this.setData({
//           products: [...this.products, ...products],
//           total,
//           current,
//         });
//         return Promise.resolve();
//       } catch {
//         console.log("has error on get history products");
//       }
//     }

//     /**
//      * type: 1:获取首页产品， 2: 用户的产品，3: 投票的产品
//      */
//     @action getProducts = async (params = {}, type = 1) => {
//       try {
//         const {
//           query = {}, filter = ""
//         } = params;
//         let filterStr = [];
//         filterStr = [...filterStr, filter].filter(f => !!f).join(" and ");

//         let fn = null;
//         switch (type) {
//           case 2:
//             fn = getProductByUser;
//             break;
//           case 3:
//             fn = getProductByLikes;
//             break;
//           case 1:
//           default:
//             fn = getProducts;
//             break;
//         }
//         const res = await fn({
//           sort: SORT,
//           filter: filterStr,
//           "page[offset]": query["page[offset]"] || 0,
//           "page[limit]": query["page[limit]"] || 10,
//           token: this.token || "",
//         }).catch((err) => {
//           console.log(err);
//         });

//         const products = res.data.map(dt => FormatProduct(dt));
//         const total = res.total;
//         const current = parseInt(query["current"]) || 1;

//         this.setData({
//           products: [...this.products, ...products],
//           total,
//           current,
//         });
//       } catch {
//         console.log("has error on get products");
//       }
//     }

//     @action async getProductByName(data) {
//       // 先从本地查找数据
//       if (this.products) {
//         const product = this.products.find(p => p.name === data.name);
//         if (product) {
//           this.setProduct(product);
//           return Promise.resolve(product);
//         }
//       }
//       const res = await getProductByName({
//         ...data,
//         token: this.token,
//       });

//       const product = res.data ? FormatProduct(res.data) : null;
//       runInAction(() => {
//         this.setProduct(product);
//       });
//       return Promise.resolve(product);
//     }

//     @action newProduct() {
//       this.product = NewProduct();
//     }

//     @action changeProductField(filed, value) {
//       if (this.product) {
//         this.product = Object.assign({}, this.product, {
//           [filed]: value,
//         });
//       }
//     }

//     @action async createProduct(data) {
//       const res = await postProduct({
//         ...data,
//         token: this.token,
//       });
//       const product = FormatProduct(res.data);
//       runInAction(() => {
//         this.setProduct(product);
//       });
//       return Promise.resolve(product);
//     }

//     @action async updateProduct(data) {
//       const res = await updateProduct({
//         ...data,
//       });
//       const product = FormatProduct(res.data);
//       runInAction(() => {
//         this.setProduct(product);
//       });
//     }

//     @action productLike = async (data) => {
//       let res = await productLike({
//         ...data,
//         token: this.token,
//       });
//       this.updateUpvotes({
//         ...res,
//         id: data.id,
//       });
//     }

//     @action updateUpvotes = ({
//       count,
//       isLiked,
//       id: productID,
//     }) => {
//       this.products = [...this.products.map(p => {
//         if (p.id === productID) {
//           p.upvotes = count;
//         }
//         return p;
//       })];
//       this.today = [...this.today.map(p => {
//         if (p.id === productID) {
//           p.upvotes = count;
//         }
//         return p;
//       })];
//       this.yesterday = [...this.yesterday.map(p => {
//         if (p.id === productID) {
//           p.upvotes = count;
//         }
//         return p;
//       })];
//       if (this.product && this.product.id === productID) {
//         this.product = {
//           ...this.product,
//           upvotes: count,
//         };
//       }
//       this.likesMap = {
//         ...this.likesMap,
//         [productID]: isLiked,
//       };
//     }

//     @action changePage = (type=1, params={}) => {
//       this.getProducts({
//         ...params,
//         query: {
//           "page[offset]": this.products.length,
//         }
//       }, type);
//     }

//     @action updateCommets = (data) => {
//       productComments(data);
//     }

//     @action getTodatHunter = async () => {
//       const res = await getProducts({
//         sort: SORT,
//         filter: `time eq ${TAB_TODAY}`,
//         "page[offset]": 0,
//         "page[limit]": 999,
//         token: this.token || "",
//       }).catch((err) => {
//         console.log(err);
//       });

//       if (res) {
//         const products = res.data.map(dt => FormatProduct(dt));
//         const hunters = products.map(product => product.hunter);
//         const existHunters = {};
//         hunters.map(hunter => {
//           if (!existHunters[hunter.id]) {
//             this.todayHunters.push(hunter);
//             existHunters[hunter.id] = hunter;
//           }
//         });
//       }
//     }

//     @action async init() {
//       await this.getToday();
//       await this.getYesterday();
//       await this.getHistory();
//     }

//     // 删除后直接从列表删除即可，不需要重新拉取数据
//     @action async deleteProduct(id) {
//       const res = await deleteProduct({
//         token: this.token || "",
//         id,
//       });
//       if (_.get(res, "responseStatus.success")) {
//         this.products = this.products.filter(product => product.id !== id);
//       }
//     }

//     @action getRelatedProducts = async (params = {}) => {
//       try {
//         const {
//           filter = ""
//         } = params;
//         let filterStr = [];
//         filterStr = [...filterStr, filter].filter(f => !!f).join(" and ");
//         const res = await getProducts({
//           sort: SORT,
//           filter: filterStr,
//           "page[offset]": 0,
//           "page[limit]": 10,
//           token: this.token || "",
//         }).catch((err) => {
//           console.log(err);
//         });

//         this.relatedProducts = res.data.map(dt => FormatProduct(dt));
//       } catch {
//         console.log("has error on get related products");
//       }
//     }

//     @action setSearch = data => {
//       this.search = data;
//     }
//   }
