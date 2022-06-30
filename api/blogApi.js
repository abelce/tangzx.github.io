import http from "../http";

export async function getBlogAPI(id, params) {
  return await http({
    method: "get",
    url: "/articles/" + id,
    params: params,
  });
}

export async function getBlogsAPI(params) {
  return await http({
    method: "get",
    url: "/articles",
    params,
  });
}

export async function getBlogsListAPI(params) {
  return await http({
    method: "get",
    url: "/articles/list",
    params,
  });
}
