import qs from "qs";
export function getHost() {
  console.log(process.env)
  if (process.env.isDev) {
    return "http://localhost:3000";
  }
  return "https://vwood.xyz";
}

export const getTimeage = (time) => {
  var diff = Math.floor(+new Date() - time) / 1000; //.getTime();//时间差的秒数
  // 计算年数
  var years = Math.floor(diff / (3600 * 24 * 365));
  if (years > 0) {
    return years + "年前";
  }
  //计算出相差天数
  var days = Math.floor(diff / (24 * 3600));
  if (days > 0) {
    return days + "天前";
  }

  //计算出小时数
  // var leave1 = diff % (24 * 3600); //计算天数后剩余的毫秒数
  var hours = Math.floor(diff / 3600);
  if (hours > 0) {
    return hours + "小时前"; // + returnStr;
  }
  //计算相差分钟数
  // var leave2 = diff % (3600); //计算小时数后剩余的毫秒数
  var minutes = Math.floor(diff / 60);
  if (minutes > 0) {
    return minutes + "分钟前"; //+ returnStr;
  }
  //计算相差秒数
  // var leave3 = leave2 % (60 * 1000); //计算分钟数后剩余的毫秒数
  // var seconds = Math.round(diff / 1);
  var seconds = Math.round(diff);
  seconds = seconds <= 0 ? 1 : seconds;

  return seconds + "秒前";
};

export const topics = [
  "开发工具",
  "教育",
  "娱乐",
  "生活",
  "旅游",
  "出行",
  "IT",
  "医疗",
  "视频",
  "社区",
  "设计",
  "社交",
  "IOS",
  "APP",
  "博客",
  "图片",
  "人工智能",
  "导航",
  "科技",
  "写作",
  "游戏",
  "理财",
  "自媒体",
  "测评",
  "小程序",
  "阅读",
  "小说",
  "GitHub",
  "网站应用",
  "安卓",
  "办公",
  "协作",
  "时间管理",
  "邮箱",
  "插件",
  "电影",
  "健康",
  "开源",
  "音乐",
  "自由职业",
  "加密货币",
  "电子商务",
  "工具",
  "Mac",
  "远程办公",
  "效率",
  "生产力",
  "英语",
  "学习",
  "截屏",
  "咨询",
  "购物",
  "专题",
  "笔记",
  "区块链",
  "在线",
  "刷题网站",
  "截图",
  "毒鸡汤",
  "记帐",
  "段子",
  "咖啡",
  "PS",
  "政治",
  "名人",
  "统计分析",
  "数据库",
  "Execl",
  "面试",
  "求职",
  "PDF",
  "Markdown",
  "Golang",
  "Javascript",
  "React",
  "Css",
  "Webpack",
  "设计工具",
  "汽车",
  "交通工具",
  "体育",
  "足球",
  "比特币",
  "房地产",
  "餐饮",
  "美容",
  "养生",
  "机械",
  "航空",
  "船舶",
  "飞机",
  "坦克",
  "语言",
  "技术",
  "招聘",
  "Slack",
  "隐私",
  "健身",
  "Email",
  "硬件",
  "芯片",
  "半导体",
  "流体力学",
  "空气动力学",
  "机床",
  "QQ",
  "Spotify",
  "营销",
  "烹饪",
  "用户体验",
  "金融",
  "艺术",
  "社交媒体",
  "SaaS",
  "管理工具",
  "Airbnb",
  "旅行",
  "VUE",
  "编程",
  "Iphone",
  "软件服务",
  "病毒",
  "图标",
  "翻译",
  "摄影",
  "YouTuBe",
  "物联网",
  "写作工具",
  "协作",
  "分析",
  "思维导图",
  "创业",
  "引流",
  "绿色科技",
  "APIs",
  "新闻",
  "播客",
  "SDK",
  "扫描仪",
  "订阅",
  "Gitlab",
  "Web应用",
  "客户端",
  "软件",
  "LOL",
  "Goole",
  "在线表格",
  "密码",
  "竞赛",
  "AI",
];

export const platforms = ["pc", "安卓", "ios", "单片机", "其他"];

export const getFormateTime = (data) => {
  const date = new Date(data);
  const year = date.getFullYear();
  const month = date.getMonth() + 1 + "";
  const day = date.getDate() + "";
  // const hour = date.getHours()+'';
  // const minutes = date.getMinutes()+'';
  // return `${year}-${month.padStart(2, '0')}-${day.padStart(2, '0')} ${hour.padStart(2, '0')}-${minutes.padStart(2, '0')}`;
  return `${year}-${month.padStart(2, "0")}-${day.padStart(2, "0")}`;
};

export const getEditorPluginPath = function () {
  return "/static/plugins/editor/lib/";
};

export function createEditormd({ content, onload = () => {}, params = {} }) {
  // try {
  return editormd("test-editormd", {
    width: "100%",
    height: "100%",
    path: getEditorPluginPath(),
    toolbarIcons: function () {
      // Or return editormd.toolbarModes[name]; // full, simple, mini
      // Using "||" set icons align right.
      return [
        "undo",
        "redo",
        "bold",
        "del",
        "hr",
        "italic",
        "h1",
        "h2",
        "h3",
        "h4",
        "link",
        "image",
        "table",
        "datetime",
        "emoji",
        "||",
        "watch",
        "fullscreen",
        "preview",
      ];
    },
    theme: "light",
    // previewTheme: 'light',
    editorTheme: "default",
    markdown: content,
    codeFold: true,
    //syncScrolling : false,
    saveHTMLToTextarea: true, // 保存 HTML 到 Textarea
    searchReplace: true,
    watch: false, // 关闭实时预览
    htmlDecode: true, // 开启 HTML 标签解析，为了安全性，默认不开启
    //toolbar  : false,             //关闭工具栏
    //previewCodeHighlight : false, // 关闭预览 HTML 的代码块高亮，默认开启
    emoji: true,
    taskList: true,
    tocm: true, // Using [TOCM]
    tex: true, // 开启科学公式TeX语言支持，默认关闭
    flowChart: true, // 开启流程图支持，默认关闭
    sequenceDiagram: true, // 开启时序/序列图支持，默认关闭,
    //dialogLockScreen : false,   // 设置弹出层对话框不锁屏，全局通用，默认为true
    //dialogShowMask : false,     // 设置弹出层对话框显示透明遮罩层，全局通用，默认为true
    //dialogDraggable : false,    // 设置弹出层对话框不可拖动，全局通用，默认为true
    //dialogMaskOpacity : 0.4,    // 设置透明遮罩层的透明度，全局通用，默认值为0.1
    //dialogMaskBgColor : "#000", // 设置透明遮罩层的背景颜色，全局通用，默认为#fff
    imageUpload: true,
    imageFormats: ["jpg", "jpeg", "gif", "png", "bmp", "webp"],
    imageUploadURL: "https://up-z2.qiniup.com",
    crossDomainUpload: true,
    uploadCallbackURL: "http://localhost:3000/notes",
    placeholder: "",
    imageParams: params,
    onload: () => {
      // console.log('onload', this);
      //this.fullscreen();
      //this.unwatch();
      // this.watch().fullscreen();
      if (typeof onload === "function") {
        onload();
      }
    },
    onpreviewing: function () {
      this.watch();
    },
    onpreviewed: function () {
      this.unwatch();
    },
  });
  // } catch (e) {

  // }
}

export const getQueries = () => {
  if (typeof window === "undefined") {
    return {};
  }
  return qs.parse(window.location.search.slice(1));
};

export const imagePath = (src) => {
  if (!src) {
    return "";
  }
  return src.replace("http://cdn.vwood.xyz", "https://image.vwood.xyz");
};

// 检查图片类型
var pngMagic = [0x89, 0x50, 0x4e, 0x47, 0x0d, 0x0a, 0x1a, 0x0a];
var jpeg_jfif = [0x4a, 0x46, 0x49, 0x46];
var jpeg_exif = [0x45, 0x78, 0x69, 0x66];
var jpegMagic = [0xff, 0xd8, 0xff, 0xe0];
var gifMagic0 = [0x47, 0x49, 0x46, 0x38, 0x37, 0x61];
var getGifMagic1 = [0x47, 0x49, 0x46, 0x38, 0x39, 0x61];

function arraycopy(src, index, dist, distIndex, size) {
  for (let i = 0; i < size; i++) {
    dist[distIndex + i] = src[index + i];
  }
}

function arrayEquals(arr1, arr2) {
  console.log(arr1);
  console.log(arr2);
  if (arr1 == "undefined" || arr2 == "undefined") {
    return false;
  }
  if (arr1 instanceof Array && arr2 instanceof Array) {
    if (arr1.length != arr2.length) {
      return false;
    }
    for (let i = 0; i < arr1.length; i++) {
      if (arr1[i] != arr2[i]) {
        return false;
      }
    }
    return true;
  }
  return false;
}

export function isImage(buf) {
  if (buf == null || buf == "undefined" || buf.length < 8) {
    return null;
  }
  var bytes = [];
  arraycopy(buf, 0, bytes, 0, 6);
  if (isGif(bytes)) {
    return "image/gif";
  }
  bytes = [];
  arraycopy(buf, 6, bytes, 0, 4);
  if (isJpeg(bytes)) {
    return "image/jpeg";
  }
  bytes = [];
  arraycopy(buf, 0, bytes, 0, 8);
  if (isPng(bytes)) {
    return "image/png";
  }
  return null;
}

/**
 * @param data first 6 bytes of file
 * @return gif image file true,other false
 */
function isGif(data) {
  console.log("GIF");
  return arrayEquals(data, gifMagic0) || arrayEquals(data, getGifMagic1);
}

/**
 * @param data first 4 bytes of file
 * @return jpeg image file true,other false
 */
function isJpeg(data) {
  console.log("JPEG");
  return arrayEquals(data, jpegMagic) || arrayEquals(data, jpeg_jfif) || arrayEquals(data, jpeg_exif);
}

/**
 * @param data first 8 bytes of file
 * @return png image file true,other false
 */
function isPng(data) {
  console.log("PNG");
  return arrayEquals(data, pngMagic);
}

export function addRef(data) {
  if (!data) {
    return;
  }
  const arr = data.split("?");
  if (arr.length === 1) {
    return `${data}?ref=vwood`;
  }
  return `${data}&ref=vwood`;
}

export function isUrl(data) {
  const urlReg = /^(https?:\/\/(([a-zA-Z0-9]+-?)+[a-zA-Z0-9]+\.)+[a-zA-Z]+)(:\d+)?(\/.*)?(\?.*)?(#.*)?$/;
  return urlReg.test(data);
}

// 获取url的search查询对象
export function getQueryObj(asPath = "") {
  const searchArr = asPath.split("?");
  if (searchArr.length < 2) {
    return {};
  }
  return qs.parse(searchArr[1]);
}

export const SITE_NAME = "文钦的个人日志";
