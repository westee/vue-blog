webpackJsonp([10],{"Kio/":function(e,t){},NHnr:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n("/5sW"),a=n("Dd8w"),o=n.n(a),s=n("p+dL"),u="/auth/register",i="/auth/login",c="/auth/logout",l="/auth",d=function(e){var t=e.username,n=e.password;return Object(s.a)(u,"POST",{username:t,password:n})},f=function(e){var t=e.username,n=e.password;return Object(s.a)(i,"POST",{username:t,password:n})},h=function(){return Object(s.a)(c)},p=function(){return Object(s.a)(l)},m=n("NYxO"),g={data:function(){return{}},computed:o()({},Object(m.c)(["isLogin","user"])),created:function(){this.checkLogin()},methods:o()({},Object(m.b)(["checkLogin","logout"]),{onLogout:function(){this.logout()}})},v={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("header",{class:{login:e.isLogin,"no-login":!e.isLogin}},[e.isLogin?e._e():[n("router-link",{attrs:{to:"/"}},[n("h1",[e._v("来分享你的知识吧！")])]),e._v(" "),n("p",[e._v("精品博客汇聚")]),e._v(" "),n("div",{staticClass:"btns"},[n("router-link",{attrs:{to:"/login"}},[n("el-button",[e._v("立即登陆")])],1),e._v(" "),n("router-link",{attrs:{to:"/register"}},[n("el-button",[e._v("注册账号")])],1)],1)],e._v(" "),e.isLogin?[n("h1",[n("router-link",{attrs:{to:"/"}},[e._v("来分享你的知识吧！")])],1),e._v(" "),n("router-link",{attrs:{to:"/Create"}},[n("i",{staticClass:"edit el-icon-plus"})]),e._v(" "),n("div",{staticClass:"user"},[n("img",{staticClass:"avatar",attrs:{src:e.user.avatar,alt:e.user.username,title:e.user.username}}),e._v(" "),n("ul",[n("li",[n("router-link",{attrs:{to:"/my"}},[e._v("我的")])],1),e._v(" "),n("li",[n("a",{attrs:{href:"#"},on:{click:e.onLogout}},[e._v("注销")])])])])]:e._e()],2)},staticRenderFns:[]};var b={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var e=this.$createElement,t=this._self._c||e;return t("footer",[t("p",[this._v("⏱学如逆水行舟，不进则退。")])])}]};var L={name:"App",components:{Header:n("VU/8")(g,v,!1,function(e){n("Kio/")},null,null).exports,Footer:n("VU/8")(null,b,!1,function(e){n("wGnY")},null,null).exports}},w={render:function(){var e=this.$createElement,t=this._self._c||e;return t("div",{attrs:{id:"app"}},[t("Header",{attrs:{id:"header"}}),this._v(" "),t("main",{attrs:{id:"main"}},[t("router-view")],1),this._v(" "),t("Footer",{attrs:{id:"footer"}})],1)},staticRenderFns:[]};var _=n("VU/8")(L,w,!1,function(e){n("uY3m")},null,null).exports,k=n("/ocq"),x=n("Xxa5"),O=n.n(x),P=n("exGp"),y=n.n(P),U={state:{user:null,isLogin:!1},getters:{user:function(e){return e.user},isLogin:function(e){return e.isLogin}},mutations:{setUser:function(e,t){e.user=t.user},setLogin:function(e,t){e.isLogin=t.isLogin}},actions:{login:function(e,t){var n=e.commit,r=t.username,a=t.password;return f({username:r,password:a}).then(function(e){n("setUser",{user:e.data}),n("setLogin",{isLogin:!0})})},register:function(e,t){var n=this,r=e.commit,a=t.username,o=t.password;return y()(O.a.mark(function e(){var t;return O.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,d({username:a,password:o});case 2:return t=e.sent,r("setUser",{user:t.data}),r("setLogin",{isLogin:!0}),e.abrupt("return",t.data);case 5:case"end":return e.stop()}},e,n)}))()},logout:function(e){var t=this,n=e.commit;return y()(O.a.mark(function e(){return O.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,h();case 2:n("setUser",{user:null}),n("setLogin",{isLogin:!1});case 4:case"end":return e.stop()}},e,t)}))()},checkLogin:function(e){var t=this,n=e.commit,r=e.state;return y()(O.a.mark(function e(){var a;return O.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(!r.isLogin){e.next=2;break}return e.abrupt("return",!0);case 2:return e.next=4,p();case 4:if(a=e.sent,n("setLogin",{isLogin:a.isLogin}),a.isLogin){e.next=8;break}return e.abrupt("return",!1);case 8:return n("setUser",{user:a.data}),e.abrupt("return",!0);case 10:case"end":return e.stop()}},e,t)}))()}}},j=n("aWad"),q=n.n(j);r.default.use(m.a);var C=new m.a.Store({modules:{auth:U,blog:q.a}});r.default.use(k.a);var Y=new k.a({routes:[{path:"/",component:function(){return Promise.all([n.e(0),n.e(4)]).then(n.bind(null,"epW7"))}},{path:"/login",component:function(){return n.e(8).then(n.bind(null,"OpX7"))}},{path:"/detail/:blogId",component:function(){return Promise.all([n.e(0),n.e(1)]).then(n.bind(null,"YE8u"))}},{path:"/edit/:blogId",component:function(){return Promise.all([n.e(0),n.e(5)]).then(n.bind(null,"R6sS"))},meta:{requiresAuth:!0}},{path:"/create",component:function(){return Promise.all([n.e(0),n.e(3)]).then(n.bind(null,"/oBs"))},meta:{requiresAuth:!0}},{path:"/user/:userId",component:function(){return Promise.all([n.e(0),n.e(7)]).then(n.bind(null,"SQvT"))}},{path:"/my",component:function(){return Promise.all([n.e(0),n.e(2)]).then(n.bind(null,"vv7P"))},meta:{requiresAuth:!0}},{path:"/register",component:function(){return n.e(6).then(n.bind(null,"YDhy"))}}]});Y.beforeEach(function(e,t,n){e.matched.some(function(e){return e.meta.requiresAuth})?C.dispatch("checkLogin").then(function(t){t?n():n({path:"/login",query:{redirect:e.fullPath}})}):n()});var F=Y,M=n("zL8q"),R=n.n(M),A=(n("tvR6"),n("pFYg")),E=n.n(A);function T(e){var t=("object"===(void 0===e?"undefined":E()(e))?e:new Date(e)).getTime(),n=Date.now()-t,r="";switch(!0){case n<6e4:r="刚刚";break;case n<36e5:r=Math.floor(n/6e4)+"分钟前";break;case n<864e5:r=Math.floor(n/36e5)+"小时前";break;default:r=Math.floor(n/864e5)+"天前"}return r}var D={install:function(e,t){e.prototype.friendlyDate=T}};r.default.use(R.a),r.default.use(D),r.default.config.productionTip=!1,new r.default({el:"#app",router:F,store:C,components:{App:_},render:function(e){return e(_)}})},aWad:function(e,t){},"p+dL":function(e,t,n){"use strict";t.a=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"get",n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return new a.a(function(r,a){var o={url:e,method:t};"get"===t.toLowerCase()?o.params=n:o.data=n,s()(o).then(function(e){"ok"===e.data.status?r(e.data):(u.Message.error(e.data.msg),a(e.data))}).catch(function(e){u.Message.error("网络异常"),a({msg:"网络异常"})})})};var r=n("//Fk"),a=n.n(r),o=n("mtWM"),s=n.n(o),u=n("zL8q");n.n(u);s.a.defaults.headers.post["Content-Type"]="application/x-www-form-urlencoded",s.a.defaults.baseURL="https://blog-server.hunger-valley.com",s.a.defaults.withCredentials=!0},tvR6:function(e,t){},uY3m:function(e,t){},wGnY:function(e,t){}},["NHnr"]);
//# sourceMappingURL=app.1e6d647025bbfb2c4c4f.js.map