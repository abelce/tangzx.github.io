import { action, observable } from "mobx";
import Base from "./base";
import {
  logout,
  getProductsCount,
  getUserCount,
  getCommentCount,
  auth,
  registry,
  checkUserName,
  checkUserEmail,
  updateUserAvatar,
  updateUser,
} from "../http";
import { FormatUser } from "../domain/user";

export default class UserStore extends Base {
  // constructor(data={}) {
  // super(data);
  // this.token = data.token;
  // this.httpClient =
  // }

  @observable currentUser = null;
  @observable users = [];
  @observable token = "";
  @observable qiniuToken = "";
  @observable userCount = 0;
  @observable productCount = 0;
  @observable commentCount = 0;
  @observable settingType = "products";

  @action setCurrentUser(data) {
    this.currentUser = data;
  }
  @action setToken(data) {
    this.token = data || "";
  }
  @action setQiniuToken(data) {
    this.qiniuToken = data || "";
  }
  @action setAuthInfo(data) {
    this.token = data.token;
    this.qiniuToken = data.qiniuToken;
  }

  get uploadData() {
    return {
      token: this.qiniuToken,
    };
  }

  @action logout() {
    logout().then(() => {
      window.location.reload();
    });
  }

  @action async getMetaInfo() {
    const result = await Promise.all([getProductsCount(), getUserCount(), getCommentCount()]);
    const [productData, userData, commentData] = result;
    this.userCount = userData.total;
    this.productCount = productData.total;
    this.commentCount = commentData.count;
  }

  @action auth(data) {
    return auth(data).then(() => {
      window.location.reload();
    });
  }

  @action async registry(data) {
    return await registry(data);
  }

  @action async checkUserName(name) {
    return await checkUserName({
      name,
    });
  }

  @action async checkUserEmail(email) {
    return await checkUserEmail({
      email,
    });
  }

  @action setSettingType(data) {
    this.settingType = data || "products";
  }

  @action async updateUserAvatar(avatar) {
    const res = await updateUserAvatar({
      token: this.token,
      id: this.currentUser.id,
      avatar,
    });
    this.currentUser = FormatUser(res.data);
  }

  @action async updateUser(data) {
    const res = await updateUser({
      token: this.token,
      ...data,
    });
    this.currentUser = FormatUser(res.data);
  }
}
