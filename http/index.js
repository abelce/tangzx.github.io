import axios from "axios";
import http from "./http";
import { gqlListPost } from "./gql";

export default http;

export const getCommentAccesskey = function () {
  if (process.env.NODE_ENV === "development") {
    return "e84e5603-3a1b-49ee-b4bb-97c18be9f8c0";
  }
  return "175d9560-abc3-4dac-8806-499e2853ccd9";
};

export const originUrl = process.env.NODE_ENV !== "production" ? "http://localhost:3000" : "https://vwood.xyz";

export const urlExcludeProtocal = () => {
  const { search, host, pathname } = window.location;
  let domain = host.replace(/www\./, "");
  return search ? `${domain}${pathname}?${search}` : domain + pathname;
};

export async function auth(data) {
  return await axios.post("/auth", data);
}

export function githubAuth(params) {
  return http({
    method: "get",
    url: "/Operator/github/callback",
    params,
  });
}

export async function registry(data) {
  return http({
    url: "/registry",
    method: "post",
    data,
  });
}

export async function checkUserName(data) {
  return http({
    url: "/Operator/check/name",
    method: "post",
    data,
  });
}

export async function checkUserEmail(data) {
  return http({
    url: "/Operator/check/email",
    method: "post",
    data,
  });
}

export async function logout() {
  return await axios.get("/logout");
}

export function getUserCount(params = {}) {
  return http({
    url: "/Operator/count",
    method: "get",
    params,
  });
}

export function getUser({ token, id }) {
  return http({
    headers: {
      token,
    },
    url: `/Operator/${id}`,
    method: "get",
  });
}
export function updateUser({ token, ...others }) {
  return http({
    headers: {
      token,
    },
    url: "/Operator",
    method: "put",
    data: others,
  });
}
export function updateUserAvatar({ token, ...others }) {
  return http({
    headers: {
      token,
    },
    url: "/Operator/avatar",
    method: "put",
    data: others,
  });
}
//product
export function checkName(data = {}) {
  return http({
    method: "post",
    url: "/productapi/check",
    data,
  });
}
export function getProductsCount(params = {}) {
  return http({
    method: "get",
    url: "/productapi/count",
    params,
  });
}
export function getProducts({ token, ...others }) {
  return http({
    headers: {
      token: token,
    },
    method: "get",
    url: "/productapi",
    params: others,
  });
}
export function getProductByName({ name, token }) {
  return http({
    headers: {
      token,
    },
    method: "get",
    url: "/productapi/name/" + name,
  });
}
export function getProductByLikes({ token, others }) {
  return http({
    headers: {
      token,
    },
    method: "get",
    url: "/productapi/likes/get",
    params: others,
  });
}
export function getProductByUser({ token, ...others }) {
  return http({
    headers: {
      token,
    },
    method: "get",
    url: "/productapi/user/get",
    params: others,
  });
}
export function postProduct({ token, ...others }) {
  return http({
    headers: {
      token: token,
    },
    method: "post",
    url: "/productapi",
    data: others,
  });
}
export function updateProduct({ token, ...others }) {
  return http({
    headers: {
      token: token,
    },
    method: "put",
    url: "/productapi",
    data: others,
  });
}
export function deleteProduct({ token, ...others }) {
  return http({
    headers: {
      token: token,
    },
    method: "delete",
    url: "/productapi",
    data: others,
  });
}
//点赞
export function productLike({ token, ...others }) {
  return http({
    headers: {
      token: token,
    },
    method: "post",
    url: "/productapi/upvotes",
    data: others,
  });
}

export function productComments({ token, ...others }) {
  return http({
    headers: {
      token: token,
    },
    method: "post",
    url: "/productapi/comments",
    data: others,
  });
}

//comment
export function getComments({ sourceID }) {
  return gqlListPost({
    data: {
      query: `{
        Comment(queryStr: "sourceID ValueType.eq '${sourceID}' and accessKey ValueType.eq '${getCommentAccesskey()}' and parentID ValueType.eq ''") {
          data {
            id
            content
            createTime
            parentID
            from {
              id
              name
              avatar
            }
            to {
              id
              name
              avatar
            }
            children {
              id
              content
              createTime
              parentID
              from {
                id
                name
                avatar
              }
              to {
                id
                name
                avatar
              }
            }
            childrenCount
          }
        }
      }`,
    },
  });
}

//comment
export function getComment(id) {
  return http({
    method: "post",
    url: "/graphql/checkless",
    data: {
      query: `{
        Comment(id: "${id}") {
          id
          content
          createTime
          parentID
          from {
            id
            name
            avatar
          }
          to {
            id
            name
            avatar
          }
        }
      }`,
    },
  });
}

export function createComment({ token, ...others }) {
  return http({
    headers: {
      token,
    },
    method: "post",
    url: "/Comment",
    data: {
      ...others,
      accessKey: getCommentAccesskey(),
      url: urlExcludeProtocal(),
    },
  });
}
export function getCommentCount() {
  return http({
    method: "get",
    url: "/comment/count/" + getCommentAccesskey(),
  });
}
// notes
export function getNotes(params) {
  return http({
    method: "get",
    url: "/articles/list",
    params,
  });
}

export function getNoteByID(id, params) {
  return http({
    method: "get",
    url: "/articles/" + id,
    params: params,
  });
}

//stype
export function saveType({ token, ...others }) {
  return http({
    headers: {
      token: token,
    },
    method: "post",
    url: "/stypes",
    data: others,
  });
}

export function getTypesList(params) {
  return http({
    method: "get",
    url: "/stypes",
    params,
  });
}
// article
export function saveArticle({ token, ...others }) {
  return http({
    headers: {
      token: token,
    },
    method: "post",
    url: "/articles",
    data: others,
  });
}
export function updateArticle({ token, ...others }) {
  return http({
    headers: {
      token: token,
    },
    method: "put",
    url: `/articles/${others.id}`,
    data: others,
  });
}

export const deleteArticle = function (id) {
  return http({
    headers: {
      token: token,
    },
    method: "delete",
    url: "/article",
    data: {
      id,
    },
  });
};

export function getArticle(id) {
  return http({
    method: "get",
    url: "/articles/" + id,
  });
}
