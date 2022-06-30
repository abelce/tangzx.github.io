import { useStaticRendering } from "mobx-react";
import config from "./config";

const isServer = typeof window === "undefined";
// 避免在服务器端内存泄漏，服务端只需要渲染一次， 不需要组件监听模型的状态
useStaticRendering(isServer);

export class Store {
  constructor(initialState = {}) {
    for (const k in config) {
      if (Object.prototype.hasOwnProperty.call(config, k)) {
        this[k] = new config[k](initialState[k]);
      }
    }
  }
}

let store = null;
export function initializeStore(initialState = {}) {
  // 服务端每次生成新的store，不能缓存
  if (isServer) {
    return new Store(initialState);
  }
  // 客户端缓存store
  if (store === null) {
    store = new Store(initialState);
  }

  return store;
}
