import { message } from "antd";
import http from "./http";

export async function gqlListPost({ data: postData }) {
  try {
    const { data, errors } = await http({
      method: "post",
      url: "/graphql/checkless/list",
      data: postData,
    });
    if (errors) {
      throw new Error("gql error");
    }
    return data;
  } catch (err) {
    message.error("系统错误");
    return null;
  }
}
