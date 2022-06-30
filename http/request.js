import http from "./http";

export const Request = {
  getArticleList: async ({ pageNo = 1, pageSize = 10 } = {}) => {
    return await http({
      method: "post",
      url: "graphql/checkless/list",
      data: {
        query: `{
                Article(pageNo: ${pageNo}, pageSize: ${pageSize}, sorts: "-updateTime,-createTime") {
                  data {
                    id
                    name
                    description
                    content
                    isDeleted
                    createTime
                    updateTime
                    likeCount
                    viewCount
                    operatorID
                    tags
                    operator {
                      id
                      name
                    }
                  }
                  count
                  pageSize,
                  pageNo
                }
              }
              `,
      },
    });
  },
  getLatestArticleList: async ({ pageNo = 1, pageSize = 10 } = {}) => {
    return await http({
      method: "post",
      url: "graphql/checkless/list",
      data: {
        query: `{
                Article(pageNo: ${pageNo}, pageSize: ${pageSize}, sorts: "-createTime") {
                  data {
                    id
                    name
                  }
                }
              }
              `,
      },
    });
  },
};
