import axios from "axios";
import HandleError from "./error";

// export const baseURL = process.env.NODE_ENV === 'development' ? 'http://localhost:10443/v1' : 'https://api.vwood.xyz/v1';
export const baseURL = "https://api.vwood.xyz/v1";
export const cdnURL = process.env.NODE_ENV === "development" ? "http://cdn.vwood.xyz" : "http://cdn.vwood.xyz";

export function httpBase(url) {
  const token = typeof window !== "undefined" ? localStorage.getItem("token") : "";
  return axios.create({
    baseURL: url || baseURL,
    timeout: 60000,
    headers: {
      "content-type": "application/json",
      token,
    },
  });
}

function http(data) {
  const instance = httpBase();

  instance.interceptors.response.use(
    function (response) {
      return response.data;
    },
    function (error) {
      HandleError(error.response);
      return Promise.reject(error);
    }
  );

  return instance(data);
}

export function localHttp(data) {
  const instance = httpBase("http://127.0.0.1:3604/v1");

  instance.interceptors.response.use(
    function (response) {
      return response.data;
    },
    function (error) {
      return Promise.reject(error);
    }
  );

  return instance(data);
}

export default http;
