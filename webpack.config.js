const path = require("path");
const ROOT_PATH = path.resolve(__dirname + "/");

module.exports = {
  resolve: {
    root: path.resolve(ROOT_PATH),
    alias: {
      "~": ROOT_PATH,
      "@": ROOT_PATH,
    },
  },
};
