import { notification } from "antd";
const errorMap = {
  400: {
    NOSESSIONTOKEN: function () {
      notification.warn({
        message: "请登录后重试",
      });
    },
  },
};

export default function handleError(response) {
  if (response) {
    const {
      status,
      data: { errors = [] },
    } = response;
    const error = errors[0];
    if (error) {
      const { code, detail } = error;
      if (errorMap[code]) {
        const keys = Object.keys(errorMap[code]);
        const key = keys.find((key) => detail.indexOf(key) !== -1);
        if (key) {
          errorMap[code][key]();
        }
      }
    }
  }
}
