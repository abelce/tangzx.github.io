(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{13836:function(e,t,n){"use strict";n.r(t),n.d(t,{Base:function(){return L},__N_SSG:function(){return q},default:function(){return G}});var r=n(11187),a=n(27812),s=n(50029),o=n(92777),c=n(82262),i=n(45959),l=n(63553),u=n(37247),d=n(87794),f=n.n(d),p=n(67294),h=n(74253),_=n(41664),g=n.n(_),m=n(27484),v=n.n(m),y=n(13632),b=n.n(y),x=n(85893);function j(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=(0,u.Z)(e);if(t){var a=(0,u.Z)(this).constructor;n=Reflect.construct(r,arguments,a)}else n=r.apply(this,arguments);return(0,l.Z)(this,n)}}var N=function(e){(0,i.Z)(n,e);var t=j(n);function n(){var e;(0,o.Z)(this,n);for(var r=arguments.length,a=new Array(r),s=0;s<r;s++)a[s]=arguments[s];return(e=t.call.apply(t,[this].concat(a))).handleConfirm=function(){var t=e.props,n=t.onDelete,r=t.data;n&&n(r.id)},e.renderMetaInfo=function(){var t=e.props.data,n=[];return n.push("\u53d1\u5e03\u4e8e: ".concat(v()(t.createTime).format("YYYY-MM-DD"))),Array.isArray(t.tags)&&t.tags.length&&n.push("\u6807\u7b7e: ".concat(t.tags.join("\uff0c"))),n.map((function(e,t){return t===n.length-1?e:(0,x.jsxs)(x.Fragment,{children:[e,(0,x.jsx)(h.Z,{type:"vertical"})]})}))},e}return(0,c.Z)(n,[{key:"render",value:function(){var e=this.props.data;return(0,x.jsx)("div",{className:b().card,style:this.props.style||{},children:(0,x.jsx)(g(),{href:"/blogs/".concat(e.id),passHref:!0,prefetch:!0,children:(0,x.jsxs)("a",{target:"_blank",title:e.name,rel:"bookmark",children:[(0,x.jsx)("div",{className:b()["repo-header"],children:(0,x.jsx)("h1",{className:b()["repo-title"],children:e.name})}),(0,x.jsxs)("p",{className:b()["repo-desc"],children:[e.description||e.content.substr(0,400),"..."]}),(0,x.jsxs)("div",{className:b()["repo-meta"],children:[(0,x.jsx)("div",{className:b()["info-block"],children:this.renderMetaInfo()}),(0,x.jsx)("div",{children:(0,x.jsx)("span",{className:b()["info-block"]})})]})]})})})}}]),n}(p.Component),k=N,w=n(47353),S=n(90538),R=n(35500),Z=n.n(R);function I(e){return!0!==e.show?null:(0,x.jsx)("div",{className:Z()["load-more"],children:(0,x.jsx)("div",{children:"--\u6ca1\u6709\u66f4\u591a\u6570\u636e\u4e86--"})})}var A=n(45578),B=n.n(A),C=n(23279),M=n.n(C),D=n(85747),E=n.n(D),z=n(67457),O=n.n(z),P=(0,p.memo)((function(e){var t=e.list,n=void 0===t?[]:t;return(0,x.jsxs)("div",{className:O()["latest-article"],children:[(0,x.jsx)("h3",{className:O()["latest-article-header"],children:"\u6700\u65b0\u6587\u7ae0"}),(0,x.jsx)("div",{className:O()["latest-article-list"],children:n.map((function(e){return(0,x.jsx)(g(),{href:"/blogs/".concat(e.id),passHref:!0,children:(0,x.jsx)("a",{target:"_blank",className:O().article,title:e.name,children:e.name})},e.id)}))})]})})),T=n(20615),H=n.n(T),X=(0,p.memo)((function(){return(0,x.jsxs)("div",{className:H().siteInfo,children:[(0,x.jsx)("div",{className:H()["siteInfo-item"],children:"\u90ae\u7bb1\uff1a1061225829@qq.com"}),(0,x.jsx)("div",{className:H()["siteInfo-item"],children:"\u8700ICP\u590719030923\u53f7-1"}),(0,x.jsx)("div",{className:H()["siteInfo-item"],children:"Copyright \xa9 2022 All Rights Reserved."})]})}));function Y(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=(0,u.Z)(e);if(t){var a=(0,u.Z)(this).constructor;n=Reflect.construct(r,arguments,a)}else n=r.apply(this,arguments);return(0,l.Z)(this,n)}}var J=function(e){(0,i.Z)(n,e);var t=Y(n);function n(e){var c;return(0,o.Z)(this,n),(c=t.call(this,e)).contentRef=(0,p.createRef)(),c.listRef=(0,p.createRef)(),c.handleScroll=M()((function(e){var t=c.state,n=t.loading,r=t.count,a=t.blogs,s=void 0===a?[]:a,o=document.getElementById("layout");n||s.length===r||Math.ceil(o.clientHeight+o.scrollTop)>=o.scrollHeight&&c.handlePageChange()}),100),c.handlePageChange=(0,s.Z)(f().mark((function e(){var t,n,s,o;return f().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c.setState({loading:!0}),e.prev=1,t=c.state.pageSize,n=c.state.current+1,e.next=6,S.c.getArticleList({pageNo:n,pageSize:t});case 6:s=e.sent,o=s.data.Article.data.map((function(e){return(0,w.WD)(e)})),c.setState({blogs:B()([].concat((0,a.Z)(c.state.blogs),(0,a.Z)(o)),"id"),current:n,pageNo:s.data.Article.pageNo,count:s.data.Article.count,pageSize:s.data.Article.pageSize}),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(1),r.default.error(e.t0.toString());case 14:return e.prev=14,c.setState({loading:!1}),e.finish(14);case 17:case"end":return e.stop()}}),e,null,[[1,11,14,17]])}))),c.state={blogs:c.props.blogs||[],count:c.props.count||0,pageSize:c.props.pageSize||10,pageNo:c.props.pageNo||0,loading:!1,current:c.props.current||0},c}return(0,c.Z)(n,[{key:"componentDidMount",value:function(){}},{key:"componentWillUnmount",value:function(){window.removeEventListener("scroll",this.handleScroll,!0)}},{key:"render",value:function(){var e=this.props,t=e.blogs,n=void 0===t?[]:t,r=e.count,a=e.latestBlogs,s=void 0===a?[]:a;return(0,x.jsxs)("div",{className:E().blog,children:[(0,x.jsxs)("div",{className:E()["blog-content"],ref:this.contentRef,children:[(0,x.jsx)("script",{async:!0,src:"https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-6887995008287565",crossOrigin:"anonymous"}),(0,x.jsx)("ins",{className:"adsbygoogle",style:{display:"block"},"data-ad-format":"fluid","data-ad-layout-key":"-fb+5w+4e-db+86","data-ad-client":"ca-pub-6887995008287565","data-ad-slot":"7687416506"}),(0,x.jsxs)("script",{children:["(adsbygoogle = window.adsbygoogle || []).push(",");"]}),n.map((function(e){return(0,x.jsx)(k,{data:e},e.id)})),(0,x.jsx)(I,{show:n.length&&n.length===r})]}),(0,x.jsxs)("div",{className:E()["blog-sidebar"],children:[(0,x.jsx)(P,{list:s}),(0,x.jsx)(X,{})]})]})}}]),n}(p.Component),q=!0,G=J,L=J},36324:function(e,t,n){"use strict";n.r(t),n.d(t,{__N_SSG:function(){return a}});var r=n(13836),a=!0;t.default=r.default},43916:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return n(36324)}])},35500:function(e){e.exports={"load-more":"NoMoreData_load-more__pr52Z"}},13632:function(e){e.exports={card:"style_card__JoJfp","repo-pic":"style_repo-pic__oNii0","repo-header":"style_repo-header__897pc","repo-type":"style_repo-type__jORkS","repo-title":"style_repo-title__2TdDF","repo-desc":"style_repo-desc__lVuzw","repo-meta":"style_repo-meta__12Inj","info-block":"style_info-block__WSuVj",actions:"style_actions__XU5_j"}},67457:function(e){e.exports={"latest-article":"style_latest-article__5TcrY","latest-article-header":"style_latest-article-header__fhJqn","latest-article-list":"style_latest-article-list__hBA_N",article:"style_article__GwEJM"}},20615:function(e){e.exports={siteInfo:"style_siteInfo__yCwtp","siteInfo-item":"style_siteInfo-item__bXDHI",beian:"style_beian__KABOj"}},85747:function(e){e.exports={blog:"style_blog__LBgeM","blog-content":"style_blog-content__Q9Sod","blog-sidebar":"style_blog-sidebar__jXdoM"}}},function(e){e.O(0,[571,274,774,888,179],(function(){return t=43916,e(e.s=t);var t}));var t=e.O();_N_E=t}]);