(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[268],{70502:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.getRenderPropValue=void 0;t.getRenderPropValue=function(e){return e?"function"===typeof e?e():e:null}},27847:function(e,t,n){"use strict";var r=n(75263).default;Object.defineProperty(t,"__esModule",{value:!0}),t.default=t.SizeContextProvider=void 0;var a=r(n(67294)),o=a.createContext("default");t.SizeContextProvider=function(e){var t=e.children,n=e.size;return a.createElement(o.Consumer,null,(function(e){return a.createElement(o.Provider,{value:n||e},t)}))};var s=o;t.default=s},71511:function(e,t,n){"use strict";var r=n(75263).default,a=n(64836).default;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=a(n(10434)),s=a(n(38416)),i=a(n(18698)),l=a(n(27424)),c=a(n(94184)),u=a(n(48555)),d=n(75531),f=r(n(67294)),p=n(31929),m=a(n(60872)),v=n(67046),_=(a(n(13594)),a(n(27847))),y=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var a=0;for(r=Object.getOwnPropertySymbols(e);a<r.length;a++)t.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(n[r[a]]=e[r[a]])}return n},h=function(e,t){var n,r,a=f.useContext(_.default),h=f.useState(1),g=(0,l.default)(h,2),x=g[0],j=g[1],b=f.useState(!1),N=(0,l.default)(b,2),O=N[0],P=N[1],C=f.useState(!0),w=(0,l.default)(C,2),E=w[0],k=w[1],R=f.useRef(),S=f.useRef(),Z=(0,d.composeRef)(t,R),z=f.useContext(p.ConfigContext).getPrefixCls,M=function(){if(S.current&&R.current){var t=S.current.offsetWidth,n=R.current.offsetWidth;if(0!==t&&0!==n){var r=e.gap,a=void 0===r?4:r;2*a<n&&j(n-2*a<t?(n-2*a)/t:1)}}};f.useEffect((function(){P(!0)}),[]),f.useEffect((function(){k(!0),j(1)}),[e.src]),f.useEffect((function(){M()}),[e.gap]);var I,T=e.prefixCls,D=e.shape,L=e.size,Y=e.src,H=e.srcSet,X=e.icon,A=e.className,V=e.alt,W=e.draggable,G=e.children,B=e.crossOrigin,J=y(e,["prefixCls","shape","size","src","srcSet","icon","className","alt","draggable","children","crossOrigin"]),Q="default"===L?a:L,K=Object.keys("object"===(0,i.default)(Q)&&Q||{}).some((function(e){return["xs","sm","md","lg","xl","xxl"].includes(e)})),U=(0,m.default)(K),F=f.useMemo((function(){if("object"!==(0,i.default)(Q))return{};var e=v.responsiveArray.find((function(e){return U[e]})),t=Q[e];return t?{width:t,height:t,lineHeight:"".concat(t,"px"),fontSize:X?t/2:18}:{}}),[U,Q]),q=z("avatar",T),$=(0,c.default)((n={},(0,s.default)(n,"".concat(q,"-lg"),"large"===Q),(0,s.default)(n,"".concat(q,"-sm"),"small"===Q),n)),ee=f.isValidElement(Y),te=(0,c.default)(q,$,(r={},(0,s.default)(r,"".concat(q,"-").concat(D),!!D),(0,s.default)(r,"".concat(q,"-image"),ee||Y&&E),(0,s.default)(r,"".concat(q,"-icon"),!!X),r),A),ne="number"===typeof Q?{width:Q,height:Q,lineHeight:"".concat(Q,"px"),fontSize:X?Q/2:18}:{};if("string"===typeof Y&&E)I=f.createElement("img",{src:Y,draggable:W,srcSet:H,onError:function(){var t=e.onError;!1!==(t?t():void 0)&&k(!1)},alt:V,crossOrigin:B});else if(ee)I=Y;else if(X)I=X;else if(O||1!==x){var re="scale(".concat(x,") translateX(-50%)"),ae={msTransform:re,WebkitTransform:re,transform:re},oe="number"===typeof Q?{lineHeight:"".concat(Q,"px")}:{};I=f.createElement(u.default,{onResize:M},f.createElement("span",{className:"".concat(q,"-string"),ref:function(e){S.current=e},style:(0,o.default)((0,o.default)({},oe),ae)},G))}else I=f.createElement("span",{className:"".concat(q,"-string"),style:{opacity:0},ref:function(e){S.current=e}},G);return delete J.onError,delete J.gap,f.createElement("span",(0,o.default)({},J,{style:(0,o.default)((0,o.default)((0,o.default)({},ne),F),J.style),className:te,ref:Z}),I)},g=f.forwardRef(h);g.defaultProps={shape:"circle",size:"default"};var x=g;t.default=x},51289:function(e,t,n){"use strict";var r=n(75263).default,a=n(64836).default;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=a(n(38416)),s=a(n(94184)),i=a(n(45598)),l=r(n(67294)),c=n(31929),u=a(n(62443)),d=n(47419),f=a(n(71511)),p=n(27847),m=function(e){var t=l.useContext(c.ConfigContext),n=t.getPrefixCls,r=t.direction,a=e.prefixCls,m=e.className,v=void 0===m?"":m,_=e.maxCount,y=e.maxStyle,h=e.size,g=n("avatar-group",a),x=(0,s.default)(g,(0,o.default)({},"".concat(g,"-rtl"),"rtl"===r),v),j=e.children,b=e.maxPopoverPlacement,N=void 0===b?"top":b,O=e.maxPopoverTrigger,P=void 0===O?"hover":O,C=(0,i.default)(j).map((function(e,t){return(0,d.cloneElement)(e,{key:"avatar-key-".concat(t)})})),w=C.length;if(_&&_<w){var E=C.slice(0,_),k=C.slice(_,w);return E.push(l.createElement(u.default,{key:"avatar-popover-key",content:k,trigger:P,placement:N,overlayClassName:"".concat(g,"-popover")},l.createElement(f.default,{style:y},"+".concat(w-_)))),l.createElement(p.SizeContextProvider,{size:h},l.createElement("div",{className:x,style:e.style},E))}return l.createElement(p.SizeContextProvider,{size:h},l.createElement("div",{className:x,style:e.style},C))};t.default=m},84960:function(e,t,n){"use strict";var r=n(64836).default;t.ZP=void 0;var a=r(n(71511)),o=r(n(51289)),s=a.default;s.Group=o.default;var i=s;t.ZP=i},62443:function(e,t,n){"use strict";var r=n(75263).default,a=n(64836).default;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=a(n(10434)),s=r(n(67294)),i=n(31929),l=a(n(94055)),c=n(70502),u=n(53683),d=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var a=0;for(r=Object.getOwnPropertySymbols(e);a<r.length;a++)t.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(n[r[a]]=e[r[a]])}return n},f=s.forwardRef((function(e,t){var n=e.prefixCls,r=e.title,a=e.content,f=e._overlay,p=d(e,["prefixCls","title","content","_overlay"]),m=s.useContext(i.ConfigContext).getPrefixCls,v=m("popover",n),_=m();return s.createElement(l.default,(0,o.default)({},p,{prefixCls:v,ref:t,overlay:f||function(e){if(r||a)return s.createElement(s.Fragment,null,r&&s.createElement("div",{className:"".concat(e,"-title")},(0,c.getRenderPropValue)(r)),s.createElement("div",{className:"".concat(e,"-inner-content")},(0,c.getRenderPropValue)(a)))}(v),transitionName:(0,u.getTransitionName)(_,"zoom-big",p.transitionName)}))}));f.defaultProps={placement:"top",trigger:"hover",mouseEnterDelay:.1,mouseLeaveDelay:.1,overlayStyle:{}};var p=f;t.default=p},98129:function(e,t,n){"use strict";n.d(t,{K:function(){return o}});n(67294);var r=n(37870),a=n(85893),o=function(){return(0,a.jsx)(r.Z,{id:"giscus-comments",repo:"abelce/giscus-comments",repoId:"R_kgDOHWXQ-w",category:"Announcements",categoryId:"DIC_kwDOHWXQ-84CPJeQ",mapping:"url",term:"Welcome to @giscus/react component!",reactionsEnabled:"0",emitMetadata:"0",inputPosition:"top",theme:"light",lang:"zh-CN"})}},87554:function(e,t,n){"use strict";n.d(t,{Z:function(){return f}});var r=n(67294),a=n(47084),o=n.n(a),s=n(61885),i=n.n(s),l=(n(71869),n(94184)),c=n.n(l),u=n(85893),d=new(o().Renderer);function f(e){var t=e.content,n=(0,r.useRef)();return(0,u.jsx)("div",{className:c()(i().marked),children:(0,u.jsx)("div",{ref:n,className:"markdown-body",dangerouslySetInnerHTML:{__html:o().parse(t)}})})}o().setOptions({renderer:d,highlight:function(e,t){var r=n(98128),a=r.getLanguage(t)?t:"plaintext";return r.highlight(a,e).value},pedantic:!1,gfm:!0,breaks:!1,sanitize:!1,smartLists:!0,smartypants:!1,xhtml:!1})},61957:function(e,t,n){"use strict";n.r(t),n.d(t,{__N_SSG:function(){return Y},default:function(){return H}});var r=n(92777),a=n(82262),o=n(45959),s=n(63553),i=n(37247),l=n(67294),c=n(74253),u=n(87554),d=n(962),f=n.n(d),p=n(85893);function m(e){var t=e.data;return(0,p.jsxs)("span",{className:f().view,children:[(0,p.jsx)("span",{className:f()["view-title"],children:"\u9605\u8bfb\u91cf "}),(0,p.jsx)("span",{className:f()["view-count"],children:t})]})}var v=n(27484),_=n.n(v),y=n(12812),h=n.n(y),g=n(94184),x=n.n(g);function j(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=(0,i.Z)(e);if(t){var a=(0,i.Z)(this).constructor;n=Reflect.construct(r,arguments,a)}else n=r.apply(this,arguments);return(0,s.Z)(this,n)}}var b=function(e){(0,o.Z)(n,e);var t=j(n);function n(){var e;(0,r.Z)(this,n);for(var a=arguments.length,o=new Array(a),s=0;s<a;s++)o[s]=arguments[s];return(e=t.call.apply(t,[this].concat(o))).getTime=function(){var t=_()(),n=_()(e.props.data.createTime);t.diff(n,"day");return n.format("YYYY-MM-DD")},e.getContent=function(){var t=e.props.data;return t?"html"===t.type?(0,p.jsx)("div",{className:"braft-output-content",dangerouslySetInnerHTML:{__html:t.content}}):(0,p.jsx)(u.Z,{content:t.content||""}):null},e}return(0,a.Z)(n,[{key:"render",value:function(){var e=this.props,t=e.data;e.currentUser;return t?(0,p.jsx)("div",{className:h().post_container,children:(0,p.jsx)("div",{className:h().post,children:(0,p.jsxs)("div",{className:h().post_content,children:[(0,p.jsxs)("div",{className:h().post_header,children:[t.headerImg?(0,p.jsx)("img",{className:h().headerImg,src:t.headerImg,loading:"lazy"}):null,(0,p.jsx)("h1",{className:h().name,title:t.name,children:t.name}),(0,p.jsxs)("div",{className:h()["base-info"],children:[(0,p.jsxs)("span",{className:h().item,children:[(0,p.jsx)("i",{className:x()("iconfont",h()["icon-time"])}),(0,p.jsxs)("span",{children:["\u53d1\u8868\u4e8e\xa0",this.getTime()]}),(0,p.jsx)(c.Z,{type:"vertical"}),(0,p.jsxs)("span",{children:["\u66f4\u65b0\u4e8e\xa0",_()(this.props.data.updateTime).format("YYYY-MM-DD")]}),(0,p.jsx)(c.Z,{type:"vertical"}),(0,p.jsx)(m,{data:t.viewCount})]}),(0,p.jsx)("div",{})]})]}),(0,p.jsx)("div",{className:h().detail_body,children:(0,p.jsxs)("div",{className:h().content,children:[this.getContent(),t.url?(0,p.jsxs)("a",{target:"_blank",href:t.url,children:["\u539f\u6587\u5730\u5740:",t.url]}):null]})}),(0,p.jsx)("div",{className:h().operations})]})})}):(0,p.jsx)("div",{})}}]),n}(l.Component),N=b,O=n(9008),P=n.n(O),C=n(29323);n(80129),n(83454);var w,E="\u6587\u94a6\u7684\u4e2a\u4eba\u65e5\u5fd7",k=n(98129),R=n(84960),S=n(41664),Z=n.n(S),z=n(87403),M=n.n(z),I=(0,l.memo)((function(e){var t=e.operator,n=void 0===t?{}:t;return(0,p.jsxs)("div",{className:M().operator,children:[(0,p.jsxs)("div",{className:M()["operator-header"],children:[(0,p.jsx)("div",{children:(0,p.jsx)(R.ZP,{size:48,src:null===n||void 0===n?void 0:n.avatar})}),(0,p.jsxs)("div",{className:M()["operator-header-name-wrapper"],children:[(0,p.jsx)("div",{className:M()["operator-name"],children:null===n||void 0===n?void 0:n.name}),(0,p.jsx)("div",{className:M()["operator-description"],title:null===n||void 0===n?void 0:n.description,children:null===n||void 0===n?void 0:n.description})]})]}),(0,p.jsx)(c.Z,{}),(0,p.jsx)("div",{children:(0,p.jsxs)("div",{className:M().github,children:["Github:\xa0\xa0",(0,p.jsx)(Z(),{href:null===n||void 0===n?void 0:n.github,passHref:!0,children:(0,p.jsx)("a",{target:"_blank",children:null===n||void 0===n?void 0:n.github})})]})})]})})),T=n(11163);function D(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=(0,i.Z)(e);if(t){var a=(0,i.Z)(this).constructor;n=Reflect.construct(r,arguments,a)}else n=r.apply(this,arguments);return(0,s.Z)(this,n)}}var L=(0,C.f3)("productStore")(w=(0,C.Pi)(w=function(e){(0,o.Z)(n,e);var t=D(n);function n(){return(0,r.Z)(this,n),t.apply(this,arguments)}return(0,a.Z)(n,[{key:"componentDidMount",value:function(){try{(adsbygoogle=window.adsbygoogle||[]).push({})}catch(e){}}},{key:"render",value:function(){var e=this.props,t=e.data,n=e.url;return t?(0,p.jsxs)("div",{className:h().detail_container,children:[(0,p.jsxs)(P(),{children:[(0,p.jsxs)("title",{children:[t.name," - ",E]}),(0,p.jsx)("meta",{name:"keywords",content:((null===t||void 0===t?void 0:t.tags)||[]).join(",")}),(0,p.jsx)("meta",{property:"og:title",content:"".concat(t.name," - ").concat(E)}),(0,p.jsx)("meta",{property:"og:url",content:n})]}),(0,p.jsxs)("div",{className:h().content,children:[(0,p.jsx)(N,{data:t,currentUser:void 0}),(0,p.jsxs)("div",{className:h().ads,children:[(0,p.jsx)("script",{async:!0,src:"https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-6887995008287565",crossOrigin:"anonymous"}),(0,p.jsx)("ins",{className:"adsbygoogle",style:{display:"block",textAlign:"center"},"data-ad-layout":"in-article","data-ad-format":"fluid","data-ad-client":"ca-pub-6887995008287565","data-ad-slot":"2469914690"})]}),(0,p.jsx)("section",{className:h().comments,children:(0,p.jsx)(k.K,{})})]}),(0,p.jsx)("div",{className:h().sidebar,children:(0,p.jsx)(I,{operator:t.operator})})]}):null}}]),n}(l.Component))||w)||w,Y=!0,H=(0,T.withRouter)(L)},34619:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/blogs/[id]",function(){return n(61957)}])},61885:function(e){e.exports={marked:"style_marked__AZOQ3"}},962:function(e){e.exports={view:"view_view__gVK9p"}},87403:function(e){e.exports={operator:"style_operator__O3E_5","operator-header":"style_operator-header__xMk0k","operator-header-name-wrapper":"style_operator-header-name-wrapper__1BUZP","operator-name":"style_operator-name__24uvJ","operator-description":"style_operator-description___rrJ6",github:"style_github__NbLXR"}},12812:function(e){e.exports={detail_container:"style_detail_container__YiTh1",post_container:"style_post_container__xy1dg",post:"style_post__STttj",post_content:"style_post_content__LiFhd",post_header:"style_post_header__yefRf",headerImg:"style_headerImg__dTA_g",name:"style_name__IG9VL","base-info":"style_base-info__kvLMe",item:"style_item__m96GX",post_body:"style_post_body___lGg2",desc:"style_desc__aWOt0",operations:"style_operations__XtOI_",operations_list:"style_operations_list__IAkpR",operations_item:"style_operations_item__LtSca",operations_item_active:"style_operations_item_active__m_dbc",content:"style_content__kMJ4y",sidebar:"style_sidebar__1Dfg0",ads:"style_ads__d33IO"}},24654:function(){}},function(e){e.O(0,[440,216,15,774,888,179],(function(){return t=34619,e(e.s=t);var t}));var t=e.O();_N_E=t}]);