webpackJsonp([10],{11:function(e,t,n){"use strict";var o=n(4),r=n(129);o.a.use(r.a);var s=function(e){return n.e(5).then(function(){var t=[n(138)];e.apply(null,t)}.bind(this)).catch(n.oe)},a=function(e){return n.e(2).then(function(){var t=[n(141)];e.apply(null,t)}.bind(this)).catch(n.oe)},c=function(e){return n.e(0).then(function(){var t=[n(143)];e.apply(null,t)}.bind(this)).catch(n.oe)},u=function(e){return n.e(3).then(function(){var t=[n(140)];e.apply(null,t)}.bind(this)).catch(n.oe)},i=function(e){return n.e(1).then(function(){var t=[n(142)];e.apply(null,t)}.bind(this)).catch(n.oe)},p=function(e){return n.e(8).then(function(){var t=[n(135)];e.apply(null,t)}.bind(this)).catch(n.oe)},l=function(e){return n.e(7).then(function(){var t=[n(136)];e.apply(null,t)}.bind(this)).catch(n.oe)},f=function(e){return n.e(6).then(function(){var t=[n(137)];e.apply(null,t)}.bind(this)).catch(n.oe)},m=function(e){return n.e(4).then(function(){var t=[n(139)];e.apply(null,t)}.bind(this)).catch(n.oe)};o.a.component("navbar",n(126));var h=new r.a({mode:"history",routes:[{path:"*",component:m,name:"notFound"},{path:"/",component:s,name:"home"},{path:"/user/login",component:a,name:"login"},{path:"/user/signup",component:c,name:"signup"},{path:"/user/forgot",component:u,name:"forgot"},{path:"/user/reset",component:i,name:"reset"},{path:"/account",component:p,name:"account",meta:{requiresAuth:!0}},{path:"/createNote",component:l,name:"createNote",meta:{requiresAuth:!0}},{path:"/editNote",component:f,name:"editNote",meta:{requiresAuth:!0}}],scrollBehavior:function(e,t,n){return n||{x:0,y:0}}});h.beforeEach(function(e,t,n){var o=localStorage.getItem("accessToken")?localStorage.getItem("accessToken"):null,r=localStorage.getItem("refreshToken")?localStorage.getItem("refreshToken"):null;o&&h.app.$options.store.dispatch("user/setUserAndTokens",{accessToken:o,refreshToken:r}),e.meta.requiresAuth&&!h.app.$options.store.getters["user/user"]&&n({name:"home"}),n()}),t.a=h},12:function(e,t,n){"use strict";var o=n(4),r=n(5),s=n(83),a=n(82);o.a.use(r.b);var c=new r.b.Store({modules:{user:s.a,note:a.a}});t.a=c},121:function(e,t){},122:function(e,t){},126:function(e,t,n){function o(e){n(122)}var r=n(30)(n(80),n(128),o,"data-v-59aa962b",null);e.exports=r.exports},127:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("navbar"),e._v(" "),n("keep-alive",{attrs:{include:"account"}},[n("router-view")],1)],1)},staticRenderFns:[]}},128:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"panel"},[n("router-link",{staticClass:"btn btn-primary",attrs:{to:{name:"home"}}},[e._v("Home")]),e._v(" "),e.user?e._e():n("router-link",{staticClass:"btn btn-primary",attrs:{to:{name:"signup"}}},[e._v("Signup")]),e._v(" "),e.user?e._e():n("router-link",{staticClass:"btn btn-primary",attrs:{to:{name:"login"}}},[e._v("Login")]),e._v(" "),e.user?e._e():n("router-link",{staticClass:"btn btn-primary",attrs:{to:{name:"forgot"}}},[e._v("Forgot")]),e._v(" "),e.user?n("span",[e._v("|")]):e._e(),e._v(" "),e.user?n("router-link",{staticClass:"btn btn-primary",attrs:{to:{name:"account"}}},[e._v("Account")]):e._e(),e._v(" "),e.user?n("router-link",{staticClass:"btn btn-primary",attrs:{to:{name:"createNote"}}},[e._v("Create Note")]):e._e(),e._v(" "),e.user?n("a",{staticClass:"btn btn-primary",attrs:{href:"javascript:void(0)"},on:{click:function(t){e.logout()}}},[e._v("Logout")]):e._e()],1)},staticRenderFns:[]}},31:function(e,t,n){"use strict";function o(e){return i.a.defaults.headers.common.Authorization="Bearer "+e}function r(e){return!!e.response&&(401===e.response.status&&"TOKEN_EXPIRED"===e.response.data.message?new a.a(function(e,t){p.a.dispatch("user/refreshUserTokens").then(function(t){p.a.dispatch("user/setUserAndTokens",{accessToken:t.data.accessToken,refreshToken:t.data.refreshToken}).then(function(t){return e(!0)})}).catch(function(e){p.a.dispatch("user/userLogout"),l.a.replace({name:"login"}),c.a.toasted.error("To verify your session, please login.")})}):void 0)}n.d(t,"b",function(){return o}),n.d(t,"a",function(){return r});var s=n(21),a=n.n(s),c=n(4),u=n(19),i=n.n(u),p=n(12),l=n(11)},55:function(e,t){},57:function(e,t,n){function o(e){n(121)}var r=n(30)(n(79),n(127),o,null,null);e.exports=r.exports},79:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={name:"app"}},80:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=n(60),r=n.n(o),s=n(5);t.default={name:"navbar",methods:{logout:function(){this.$store.dispatch("user/userLogout",this.$router)}},computed:r()({},n.i(s.a)({user:function(e){return e.user.user}}))}},81:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=n(4),r=n(57),s=n.n(r),a=n(11),c=n(12),u=(n(5),n(59)),i=n.n(u),p=n(58),l=n.n(p),f=n(56),m=n.n(f),h=n(55);n.n(h);o.a.use(i.a),o.a.use(l.a,{theme:"bubble",position:"top-right",duration:2300}),window.jQuery=window.$=m.a,window.Tether={},n(54),o.a.config.productionTip=!1,new o.a({el:"#app",store:c.a,router:a.a,template:"<App/>",components:{App:s.a},computed:{},mounted:function(){}})},82:function(e,t,n){"use strict";var o=n(21),r=n.n(o),s=n(4),a=n(5),c=n(19),u=n.n(c),i=(n(12),n(11),n(53)),p=(n.n(i),n(31));s.a.use(a.b),u.a.defaults.baseURL="https://koa-vue-notes-api.innermonkdesign.com";var l={namespaced:!0,state:{notes:[]},mutations:{ADD_NOTES:function(e,t){e.notes=e.notes.concat(t)}},getters:{notes:function(e){return e.notes}},actions:{getUsersNotes:function(e,t){var o=(e.dispatch,e.commit),s=(e.getters,e.rootGetters);return new r.a(function(e,r){n.i(p.b)(s["user/accessToken"]),u.a.get("/api/v1/notes",{params:{sort:t.sort,order:t.order,page:t.page,limit:t.limit}}).then(function(t){o("ADD_NOTES",t.data),e(t.data)}).catch(function(e){r(e)})})},getNote:function(e,t){var o=(e.dispatch,e.commit,e.getters,e.rootGetters);return new r.a(function(e,r){n.i(p.b)(o["user/accessToken"]),u.a.get("/api/v1/notes/"+t).then(function(t){e(t.data)}).catch(function(e){r(e)})})},createNote:function(e,t){var o=(e.dispatch,e.commit,e.getters,e.rootGetters);return new r.a(function(e,r){n.i(p.b)(o["user/accessToken"]),u.a.post("/api/v1/notes/",{title:t.title,content:t.content}).then(function(t){e(t)}).catch(function(e){r(e)})})},saveNote:function(e,t){var o=(e.dispatch,e.commit,e.getters,e.rootGetters);return new r.a(function(e,r){n.i(p.b)(o["user/accessToken"]),u.a.put("/api/v1/notes/"+t.id,{title:t.title,content:t.content}).then(function(t){e(t)}).catch(function(e){r(e)})})},deleteNote:function(e,t){var o=(e.dispatch,e.commit,e.getters,e.rootGetters);return new r.a(function(e,r){n.i(p.b)(o["user/accessToken"]),u.a.delete("/api/v1/notes/"+t.id).then(function(t){e(t)}).catch(function(e){r(e)})})}}};t.a=l},83:function(e,t,n){"use strict";var o=n(21),r=n.n(o),s=n(4),a=n(5),c=n(53),u=n.n(c),i=(n(12),n(11),n(31)),p=n(19),l=n.n(p);s.a.use(a.b),l.a.defaults.baseURL="https://koa-vue-notes-api.innermonkdesign.com";var f={namespaced:!0,state:{user:null,accessToken:null,refreshToken:null},mutations:{SET_USER:function(e,t){e.user=t},STORE_ACCESS_TOKEN:function(e,t){e.accessToken=t,localStorage.setItem("accessToken",t)},STORE_REFRESH_TOKEN:function(e,t){e.refreshToken=t,localStorage.setItem("refreshToken",t)},LOGOUT_USER:function(e){e.user=null,e.accessToken=null,e.refreshToken=null,localStorage.removeItem("accessToken"),localStorage.removeItem("refreshToken")}},getters:{user:function(e){return e.user},accessToken:function(e){return e.accessToken},refreshToken:function(e){return e.refreshToken}},actions:{setUserAndTokens:function(e,t){var n=(e.dispatch,e.commit);e.getters,e.rootGetters;return new r.a(function(e,o){var r=u()(t.accessToken);return n("SET_USER",r.data[0]),n("STORE_ACCESS_TOKEN",t.accessToken),n("STORE_REFRESH_TOKEN",t.refreshToken),e(!0)})},userLogin:function(e,t){var n=e.dispatch;e.commit,e.getters,e.rootGetters;return new r.a(function(e,o){l.a.post("/api/v1/user/authenticate",{username:t.username,password:t.password}).then(function(t){return n("setUserAndTokens",{accessToken:t.data.accessToken,refreshToken:t.data.refreshToken}),e()}).catch(function(e){return s.a.toasted.error("Hmm, those details don't seem right."),o()})})},refreshUserTokens:function(e){var t=(e.dispatch,e.commit,e.getters),o=e.rootGetters;return new r.a(function(e,r){n.i(i.b)(o["user/accessToken"]),l.a.post("/api/v1/user/refreshAccessToken",{username:t.user.username,refreshToken:t.refreshToken}).then(function(t){return e(t)}).catch(function(e){return r(e)})})},userLogout:function(e,t){var n=(e.dispatch,e.commit);e.getters,e.rootGetters;return new r.a(function(e,o){return n("LOGOUT_USER"),t&&t.push({name:"home"}),e()})},userSignup:function(e,t){e.dispatch,e.commit,e.getters,e.rootGetters;return new r.a(function(e,n){l.a.post("/api/v1/user/signup",{firstName:t.firstName,lastName:t.lastName,username:t.username,email:t.email,password:t.password}).then(function(t){return s.a.toasted.success("Successfully signed up. Please login."),e()}).catch(function(e){return s.a.toasted.error("Hmm, something you entered doesn't seem right."),n()})})},userForgot:function(e,t){e.dispatch,e.commit,e.getters,e.rootGetters;return new r.a(function(e,n){l.a.post("/api/v1/user/forgot",{email:t.email,url:"https://koa-vue-notes-web.innermonkdesign.com/user/reset",type:"web"}).then(function(t){s.a.toasted.success("Please check your email."),e()}).catch(function(t){s.a.toasted.success("Please check your email."),e()})})},userReset:function(e,t){e.dispatch,e.commit,e.getters,e.rootGetters;return new r.a(function(e,n){console.log("here"),l.a.post("/api/v1/user/resetPassword",{password:t.password,passwordResetToken:t.passwordResetToken,email:t.email}).then(function(t){return s.a.toasted.success("Successfully reset password. Please login."),e()}).catch(function(e){return console.log(e),s.a.toasted.error("Your reset link has expired or is incorrect. Please reset your password again."),n()})})}}};t.a=f}},[81]);
//# sourceMappingURL=app.c7c9106e0cf1b0e94718.js.map