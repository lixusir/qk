(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-user-seting"],{"00d8":function(t,e,n){"use strict";function o(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{},o=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(o=o.concat(Object.getOwnPropertySymbols(n).filter(function(t){return Object.getOwnPropertyDescriptor(n,t).enumerable}))),o.forEach(function(e){r(t,e,n[e])})}return t}function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i="USER_KEY",a="TOKEN_KEY",c=function(){var t="";return t=uni.getStorageSync(i),t||{avatar:"../../static/img/avatar.png",bottom_text:"广州锐合技术支持QQ：8396048",level_name:"普通会员",nickname:"锐合网络",uid:0,icode:"18024553545"}},u=function(t){uni.setStorage({key:i,data:t})},s=function(t){uni.setStorageSync(a,t)},d=function(){return uni.getStorageSync(a)},l=function(){uni.clearStorage()},f=function(t){uni.setStorageSync("uid",t)},g=function(){return uni.getStorageSync("uid")},p=function(t){uni.setStorageSync("logid",t)},m=function(){return uni.getStorageSync("logid")},v="http://blockcat.8396048.com/",b={index:v+"default/index",home:{info:v+"port/member/info"},main:{bazaar:v+"port/index/index",order:v+"port/index/appointment",adopt:v+"port/index/adopt",result:v+"port/index/adoptResult",info:v+"port/index/confInfo",notice:v+"port/index/notice"},center:{code:v+"port/member/verifycode",password:v+"port/member/changePwd",passtwo:v+"port/member/changePwd2",pid:v+"port/member/realname",close:v+"port/member/changeMethodStatus",card:v+"port/member/myPaymentMethod",type:v+"port/member/getPaymentType",submit:v+"port/member/submitMethod",message:v+"port/member/systemMessage",team:v+"port/member/myTeam",friends:v+"port/member/inviteFriends"},service:{insert:v+"port/server_center/workorder",submit:v+"port/server_center/submitWorkorder",order:v+"port/server_center/workorderList"},login:{login:v+"port/login",logo:v+"port/login/get_enter_logo",forget:v+"port/login/forgetpwd"},reg:{register:v+"port/login/register",code:v+"port/login/verifycode",agree:v+"port/login/get_user_regagree"},interests:{qrcode:v+"port/member/recharge",integral:v+"port/member/integralLog",roll:v+"port/member/givingIntegral",sell:v+"port/member/assetSale",submit:v+"port/member/rechargeSubmit",earnings:v+"port/member/incomeLog"},record:{pay:v+"port/order/pay",adopt:v+"port/order/index",make:v+"port/member/appointment",update:v+"port/order/pay",passtwo:v+"port/order/auditPass",submit:v+"port/order/complaint",complaint:v+"record/payment",transfer:v+"port/order/transfer",details:v+"port/order/detail",undo:v+"port/order/detail"}},h=function(t,e,n,r){var i=this,a=uni.getStorageSync("token");""==a&&(uni.setStorageSync("token",""),uni.reLaunch({url:"/pages/login/login"}));n=o({token:uni.getStorageSync("token")},n);uni.request({url:e,method:"GET",data:n,success:function(e){e=e.data;1==e.code?r(t,e):400==e.code?(uni.setStorageSync("token",""),setTimeout(function(){uni.reLaunch({url:"/pages/login/login"})},2e3)):uni.showToast({icon:"none",title:e.msg})},fail:function(t){console.log(t),uni.showToast({icon:"none",title:"网站消息获取错误"})},complete:function(t){t=t.data;13==t.code&&(uni.showToast({icon:"none",title:t.msg}),i.removeToken(),uni.reLaunch({url:"/pages/login/login"})),uni.hideLoading()}})},_={api:b,auth:h,setToken:s,getToken:d,removeToken:l,getUserInfo:c,setUserInfo:u,setId:f,getId:g,setLogid:p,getLogid:m};e.default=_},"0118":function(t,e,n){e=t.exports=n("2350")(!1),e.push([t.i,".footer[data-v-a41350ac]{left:0;bottom:0;width:100%;color:#fff;z-index:1000;height:%?100?%;position:fixed;background:#181e30}.footer1[data-v-a41350ac]{left:0;bottom:0;width:100%;color:#fff;height:%?100?%;position:fixed;background-color:#fff}.footer_item[data-v-a41350ac]{float:left;width:33.3%;height:%?100?%;font-size:%?24?%;text-align:center;color:#7a7e83}.footer_item uni-image[data-v-a41350ac]{margin-top:%?10?%;width:%?46?%;height:%?46?%;margin-bottom:%?0?%}.footer_item.big_item[data-v-a41350ac]{top:%?-40?%;position:relative}.footer_item.big_item uni-image[data-v-a41350ac]{width:%?100?%;height:%?100?%}.actives[data-v-a41350ac]{color:#5d8afc}.actives1[data-v-a41350ac]{color:#5d8afc}",""])},"0d09":function(t,e,n){"use strict";var o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",[t.now_index<3?void 0:[n("v-uni-view",{staticClass:"footer1"},t._l(t.tabBar,function(e,o){return n("v-uni-view",{key:o,staticClass:"footer_item",staticStyle:{width:"50%"}},[n("v-uni-view",{on:{click:function(n){n=t.$handleEvent(n),t.jump(e.pagePath,e.id)}}},[n("v-uni-image",{attrs:{src:e.id==t.now_index?e.selectedIconPath:e.iconPath,mode:""}}),n("v-uni-view",{class:"tab_text "+(e.id==t.now_index?"actives1":"")},[t._v(t._s(e.text))])],1)],1)}),1)]],2)},r=[];n.d(e,"a",function(){return o}),n.d(e,"b",function(){return r})},"22c1":function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var o={data:function(){return{tabBar:[{id:3,iconPath:"/static/tabbar/refer.png",selectedIconPath:"/static/tabbar/referHL.png",pagePath:"/pages/service/repair",text:"提交工單"},{id:4,iconPath:"/static/tabbar/order.png",selectedIconPath:"/static/tabbar/orderHL.png",pagePath:"/pages/service/order",text:"我的工單"}],footer_nav:[{id:0,name:"貓貓集市",icon:"/static/tabbar/template.png",select_icon:"/static/tabbar/templateHL.png",pagePath:"/pages/main/bazaar"},{id:1,name:"服務中心",icon:"/static/tabbar/api.png",select_icon:"/static/tabbar/apiHL.png",pagePath:"/pages/main/service"},{id:2,name:"我的貓窩",icon:"/static/tabbar/component.png",select_icon:"/static/tabbar/componentHL.png",pagePath:"/pages/main/shack"}],now_index:uni.getStorageSync("css")}},methods:{jump:function(t,e){uni.setStorageSync("css",e),this.now_index=e,uni.navigateTo({url:t})}}};e.default=o},"2bde":function(t,e,n){"use strict";n.r(e);var o=n("7869"),r=n("8a4c");for(var i in r)"default"!==i&&function(t){n.d(e,t,function(){return r[t]})}(i);var a=n("2877"),c=Object(a["a"])(r["default"],o["a"],o["b"],!1,null,null,null);e["default"]=c.exports},"305f":function(t,e,n){"use strict";var o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",{staticClass:"content"},[n("v-uni-view",{staticClass:"list"},[t._v("用戶名"),n("v-uni-view",{staticClass:"list_right"},[t._v(t._s(t.user.nickname))])],1),n("v-uni-view",{staticClass:"list"},[t._v("手機號碼"),n("v-uni-view",{staticClass:"list_right"},[t._v(t._s(t.user.account))])],1),n("v-uni-view",{staticClass:"list"},[t._v("客服中心")]),n("v-uni-view",{staticClass:"list"},[t._v("幫助中心")]),n("v-uni-button",{staticClass:"btn-area",on:{click:function(e){e=t.$handleEvent(e),t.bindLogout(e)}}},[t._v("退出登錄")]),n("footerNav")],1)},r=[];n.d(e,"a",function(){return o}),n.d(e,"b",function(){return r})},3444:function(t,e,n){"use strict";n.r(e);var o=n("0d09"),r=n("d96f");for(var i in r)"default"!==i&&function(t){n.d(e,t,function(){return r[t]})}(i);n("5e46");var a=n("2877"),c=Object(a["a"])(r["default"],o["a"],o["b"],!1,null,"a41350ac",null);e["default"]=c.exports},"45fd":function(t,e,n){"use strict";var o=n("e319"),r=n.n(o);r.a},"4d95":function(t,e,n){"use strict";n.r(e);var o=n("305f"),r=n("ebb5");for(var i in r)"default"!==i&&function(t){n.d(e,t,function(){return r[t]})}(i);n("45fd");var a=n("2877"),c=Object(a["a"])(r["default"],o["a"],o["b"],!1,null,"2e97b05a",null);e["default"]=c.exports},5034:function(t,e,n){e=t.exports=n("2350")(!1),e.push([t.i,".list[data-v-2e97b05a]{width:100%;height:%?100?%;font-size:%?30?%;text-indent:%?40?%;line-height:%?100?%;background-color:#fff;border-bottom:%?3?% solid #f1f1f1}.list_right[data-v-2e97b05a]{text-align:right;margin-right:%?40?%;margin-top:%?-100?%}.btn-area[data-v-2e97b05a]{margin:%?100?% %?40?%}",""])},"5e46":function(t,e,n){"use strict";var o=n("d7e4"),r=n.n(o);r.a},7869:function(t,e,n){"use strict";var o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",{staticClass:"uni-icon",class:["uni-icon-"+t.type],style:{color:t.color,"font-size":t.fontSize},on:{click:function(e){e=t.$handleEvent(e),t.onClick()}}})},r=[];n.d(e,"a",function(){return o}),n.d(e,"b",function(){return r})},"8a4c":function(t,e,n){"use strict";n.r(e);var o=n("ceb8"),r=n.n(o);for(var i in o)"default"!==i&&function(t){n.d(e,t,function(){return o[t]})}(i);e["default"]=r.a},ceb8:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var o={props:{type:String,color:String,size:[Number,String]},computed:{fontSize:function(){return"".concat(this.size,"px")}},methods:{onClick:function(){this.$emit("click")}}};e.default=o},d7e4:function(t,e,n){var o=n("0118");"string"===typeof o&&(o=[[t.i,o,""]]),o.locals&&(t.exports=o.locals);var r=n("4f06").default;r("42aac8f7",o,!0,{sourceMap:!1,shadowMode:!1})},d96f:function(t,e,n){"use strict";n.r(e);var o=n("22c1"),r=n.n(o);for(var i in o)"default"!==i&&function(t){n.d(e,t,function(){return o[t]})}(i);e["default"]=r.a},dd8c:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var o=i(n("2bde")),r=i(n("3444"));i(n("00d8"));function i(t){return t&&t.__esModule?t:{default:t}}var a={components:{uniIcon:o.default,footerNav:r.default},data:function(){return{user:uni.getStorageSync("user"),nickname:"",account:""}},onNavigationBarButtonTap:function(t){uni.navigateTo({url:"/pages/user/update"})},methods:{bindLogout:function(){uni.setStorageSync("token",""),uni.setStorageSync("logo",""),uni.reLaunch({url:"/pages/login/login"})}}};e.default=a},e319:function(t,e,n){var o=n("5034");"string"===typeof o&&(o=[[t.i,o,""]]),o.locals&&(t.exports=o.locals);var r=n("4f06").default;r("15098844",o,!0,{sourceMap:!1,shadowMode:!1})},ebb5:function(t,e,n){"use strict";n.r(e);var o=n("dd8c"),r=n.n(o);for(var i in o)"default"!==i&&function(t){n.d(e,t,function(){return o[t]})}(i);e["default"]=r.a}}]);