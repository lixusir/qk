(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-center-passtwo"],{"05e6":function(t,e,n){"use strict";n.r(e);var o=n("9a6d"),i=n.n(o);for(var a in o)"default"!==a&&function(t){n.d(e,t,function(){return o[t]})}(a);e["default"]=i.a},"062a":function(t,e,n){"use strict";var o=n("7048"),i=n.n(o);i.a},"08dd":function(t,e,n){"use strict";var o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",[t.now_index<3?void 0:[n("v-uni-view",{staticClass:"footer1"},[t._l(t.tabBar,function(e,o){return n("v-uni-view",{key:o,staticClass:"footer_item",staticStyle:{width:"33.3%"}},[n("v-uni-view",{on:{click:function(n){n=t.$handleEvent(n),t.jump(e.pagePath,e.id)}}},[n("v-uni-image",{attrs:{src:e.id==t.now_index?e.selectedIconPath:e.iconPath,mode:""}}),n("v-uni-view",{class:"tab_text "+(e.id==t.now_index?"actives1":"")},[t._v(t._s(e.text))])],1)],1)}),n("v-uni-view",{staticClass:"footer_item",staticStyle:{width:"33.3%"}},[n("v-uni-view",{on:{click:function(e){e=t.$handleEvent(e),t.order()}}},[n("v-uni-image",{attrs:{src:"/static/tabbar/main.png",mode:""}}),n("v-uni-view",{staticClass:"tab_text1"},[t._v("返回貓窩")])],1)],1)],2)]],2)},i=[];n.d(e,"a",function(){return o}),n.d(e,"b",function(){return i})},"0ea1":function(t,e,n){"use strict";n.r(e);var o=n("38be"),i=n.n(o);for(var a in o)"default"!==a&&function(t){n.d(e,t,function(){return o[t]})}(a);e["default"]=i.a},"1b6e":function(t,e,n){e=t.exports=n("2350")(!1),e.push([t.i,".footer[data-v-5f7461c0]{left:0;bottom:0;width:100%;color:#fff;z-index:1000;height:%?100?%;position:fixed;background:#181e30}.footer1[data-v-5f7461c0]{left:0;bottom:0;width:100%;color:#fff;height:%?100?%;position:fixed;background-color:#fff}.footer_item[data-v-5f7461c0]{float:left;width:33.3%;height:%?100?%;font-size:%?24?%;text-align:center;color:#7a7e83}.footer_item uni-image[data-v-5f7461c0]{margin-top:%?10?%;width:%?46?%;height:%?46?%;margin-bottom:%?0?%}.footer_item.big_item[data-v-5f7461c0]{top:%?-40?%;position:relative}.footer_item.big_item uni-image[data-v-5f7461c0]{width:%?100?%;height:%?100?%}.actives[data-v-5f7461c0]{color:#5d8afc}.actives1[data-v-5f7461c0]{color:#5d8afc}.tab_text1[data-v-5f7461c0]{color:#fdb513}",""])},"26c5":function(t,e,n){"use strict";n.r(e);var o=n("b722"),i=n.n(o);for(var a in o)"default"!==a&&function(t){n.d(e,t,function(){return o[t]})}(a);e["default"]=i.a},2978:function(t,e,n){"use strict";n.r(e);var o=n("8195"),i=n("05e6");for(var a in i)"default"!==a&&function(t){n.d(e,t,function(){return i[t]})}(a);n("062a");var r=n("2877"),c=Object(r["a"])(i["default"],o["a"],o["b"],!1,null,"6c290a80",null);e["default"]=c.exports},"38be":function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var o={data:function(){return{tabBar:[{id:3,iconPath:"/static/tabbar/refer.png",selectedIconPath:"/static/tabbar/referHL.png",pagePath:"/pages/service/repair",text:"提交工單"},{id:4,iconPath:"/static/tabbar/order.png",selectedIconPath:"/static/tabbar/orderHL.png",pagePath:"/pages/service/order",text:"我的工單"}],footer_nav:[{id:0,name:"貓貓集市",icon:"/static/tabbar/template.png",select_icon:"/static/tabbar/templateHL.png",pagePath:"/pages/main/bazaar"},{id:1,name:"服務中心",icon:"/static/tabbar/api.png",select_icon:"/static/tabbar/apiHL.png",pagePath:"/pages/main/service"},{id:2,name:"我的貓窩",icon:"/static/tabbar/component.png",select_icon:"/static/tabbar/componentHL.png",pagePath:"/pages/main/shack"}],now_index:uni.getStorageSync("css")}},methods:{jump:function(t,e){uni.setStorageSync("css",e),this.now_index=e,uni.reLaunch({url:t})},order:function(){uni.switchTab({url:"/pages/main/shack"})}}};e.default=o},5308:function(t,e,n){e=t.exports=n("2350")(!1),e.push([t.i,"uni-page-body[data-v-6c290a80]{background:#f7f7f7}.pass[data-v-6c290a80]{padding:%?0?% %?40?%}.body[data-v-6c290a80]{padding:%?40?%}body.?%PAGE?%[data-v-6c290a80]{background:#f7f7f7}",""])},5572:function(t,e,n){"use strict";var o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",{staticClass:"uni-icon",class:["uni-icon-"+t.type],style:{color:t.color,"font-size":t.fontSize},on:{click:function(e){e=t.$handleEvent(e),t.onClick()}}})},i=[];n.d(e,"a",function(){return o}),n.d(e,"b",function(){return i})},5692:function(t,e,n){"use strict";n.r(e);var o=n("5572"),i=n("26c5");for(var a in i)"default"!==a&&function(t){n.d(e,t,function(){return i[t]})}(a);var r=n("2877"),c=Object(r["a"])(i["default"],o["a"],o["b"],!1,null,null,null);e["default"]=c.exports},7048:function(t,e,n){var o=n("5308");"string"===typeof o&&(o=[[t.i,o,""]]),o.locals&&(t.exports=o.locals);var i=n("4f06").default;i("210f2a8b",o,!0,{sourceMap:!1,shadowMode:!1})},8195:function(t,e,n){"use strict";var o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",{staticClass:"page"},[n("v-uni-view",{staticClass:"back"},[n("uni-icon",{attrs:{size:"28",type:"arrowleft"},on:{click:function(e){e=t.$handleEvent(e),t.back()}}})],1),n("v-uni-view",{staticClass:"pass"},[n("v-uni-view",{staticClass:"code"},[n("v-uni-input",{attrs:{type:"number",maxlength:"6",placeholder:"請輸入六驗證碼"},model:{value:t.verifycode,callback:function(e){t.verifycode=e},expression:"verifycode"}}),t.countdown>61?n("v-uni-button",{staticClass:"check",on:{click:function(e){e=t.$handleEvent(e),t.verification(e)}}},[t._v("獲取驗證碼")]):t._e(),61==t.countdown?n("v-uni-button",{staticClass:"check",on:{click:function(e){e=t.$handleEvent(e),t.verification(e)}}},[t._v("重新獲取")]):t._e(),t.countdown<61?n("v-uni-button",{staticClass:"check",attrs:{disabled:"true"}},[t._v(t._s(t.countdown)+"秒")]):t._e()],1)],1),n("v-uni-view",{staticClass:"body"},[n("v-uni-view",{staticClass:"log-input"},[n("v-uni-text",[t._v("新二級密碼")]),n("v-uni-input",{attrs:{type:"text",password:"true",maxlength:"6",placeholder:"必須填六位數字的二級密碼"},model:{value:t.pwd2,callback:function(e){t.pwd2=e},expression:"pwd2"}})],1),n("v-uni-view",{staticClass:"log-input"},[n("v-uni-text",[t._v("確認二級密碼")]),n("v-uni-input",{attrs:{type:"text",password:"true",maxlength:"6",placeholder:"確認您的二級密碼"},model:{value:t.repwd2,callback:function(e){t.repwd2=e},expression:"repwd2"}})],1),1==t.status?[n("v-uni-button",{staticClass:"btn-area",on:{click:function(e){e=t.$handleEvent(e),t.update(e)}}},[t._v("確認修改")])]:[n("v-uni-button",{staticClass:"btn-area"},[t._v("確認修改")])]],2),n("footerNav")],1)},i=[];n.d(e,"a",function(){return o}),n.d(e,"b",function(){return i})},"9a6d":function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var o=r(n("db84")),i=r(n("5692")),a=r(n("b807"));function r(t){return t&&t.__esModule?t:{default:t}}var c={components:{uniIcon:i.default,footerNav:a.default},data:function(){return{pwd2:"",repwd2:"",status:1,verifycode:"",countdown:62,user:uni.getStorageSync("user"),token:uni.getStorageSync("token")}},methods:{back:function(){uni.reLaunch({url:"/pages/center/security"})},verification:function(){var t=this;uni.request({url:o.default.api.center.code,method:"GET",data:{token:this.token,account:this.user.account},success:function(e){e=e.data;uni.showToast({icon:"none",title:e.msg}),1==e.code&&t.codetime(t,60)}})},codetime:function(t,e){t.countdown=e<10?"0"+e:e,e--,e<0?t.countdown=61:setTimeout(function(){t.codetime(t,e)},1e3)},update:function(){var t=this;6==this.verifycode.length?6==this.pwd2.length?this.pwd2==this.repwd2?(this.status=0,uni.request({url:o.default.api.center.passtwo+"?token="+this.token,method:"GET",data:{pwd2:this.pwd2,repwd2:this.repwd2,verifycode:this.verifycode},success:function(e){e=e.data;uni.showToast({icon:"none",title:e.msg}),1==e.code?setTimeout(function(){uni.navigateBack({delta:1})},1e3):(t.status=1,t.pwd="",t.repwd="",t.verifycode="")}})):uni.showToast({icon:"none",title:"新二級密碼不壹致"}):uni.showToast({icon:"none",title:"二級密碼必須是六位"}):uni.showToast({icon:"none",title:"請輸入六位驗證碼"})}}};e.default=c},b722:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var o={props:{type:String,color:String,size:[Number,String]},computed:{fontSize:function(){return"".concat(this.size,"px")}},methods:{onClick:function(){this.$emit("click")}}};e.default=o},b807:function(t,e,n){"use strict";n.r(e);var o=n("08dd"),i=n("0ea1");for(var a in i)"default"!==a&&function(t){n.d(e,t,function(){return i[t]})}(a);n("ef44");var r=n("2877"),c=Object(r["a"])(i["default"],o["a"],o["b"],!1,null,"5f7461c0",null);e["default"]=c.exports},db84:function(t,e,n){"use strict";function o(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{},o=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(o=o.concat(Object.getOwnPropertySymbols(n).filter(function(t){return Object.getOwnPropertyDescriptor(n,t).enumerable}))),o.forEach(function(e){i(t,e,n[e])})}return t}function i(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a="USER_KEY",r="TOKEN_KEY",c=function(){var t="";return t=uni.getStorageSync(a),t||{avatar:"../../static/img/avatar.png",bottom_text:"广州锐合技术支持QQ：8396048",level_name:"普通会员",nickname:"锐合网络",uid:0,icode:"18024553545"}},u=function(t){uni.setStorage({key:a,data:t})},s=function(t){uni.setStorageSync(r,t)},d=function(){return uni.getStorageSync(r)},l=function(){uni.clearStorage()},f=function(t){uni.setStorageSync("uid",t)},p=function(){return uni.getStorageSync("uid")},v=function(t){uni.setStorageSync("logid",t)},g=function(){return uni.getStorageSync("logid")},m="http://bc.hhwl168.com/",b={index:m+"default/index",home:{info:m+"port/member/info"},main:{bazaar:m+"port/index/index",order:m+"port/index/appointment",adopt:m+"port/index/adopt",result:m+"port/index/adoptResult",info:m+"port/index/confInfo",notice:m+"port/index/notice"},center:{code:m+"port/member/verifycode",password:m+"port/member/changePwd",passtwo:m+"port/member/changePwd2",pid:m+"port/member/realname",close:m+"port/member/changeMethodStatus",card:m+"port/member/myPaymentMethod",type:m+"port/member/getPaymentType",submit:m+"port/member/submitMethod",message:m+"port/member/systemMessage",team:m+"port/member/myTeam",friends:m+"port/member/inviteFriends"},service:{insert:m+"port/server_center/workorder",submit:m+"port/server_center/submitWorkorder",order:m+"port/server_center/workorderList"},login:{login:m+"port/login",logo:m+"port/login/get_enter_logo",forget:m+"port/login/forgetpwd"},reg:{register:m+"port/login/register",code:m+"port/login/verifycode",agree:m+"port/login/get_user_regagree"},interests:{qrcode:m+"port/member/recharge",integral:m+"port/member/integralLog",roll:m+"port/member/givingIntegral",sell:m+"port/member/assetSale",submit:m+"port/member/rechargeSubmit",earnings:m+"port/member/incomeLog",assets:m+"port/member/myAssets"},record:{pay:m+"port/order/pay",adopt:m+"port/order/index",make:m+"port/member/appointment",update:m+"port/order/pay",passtwo:m+"port/order/auditPass",submit:m+"port/order/complaint",complaint:m+"record/payment",transfer:m+"port/order/transfer",details:m+"port/order/detail",undo:m+"port/order/revoke"}},h=function(t,e,n,i){var a=this,r=uni.getStorageSync("token");""==r&&(uni.setStorageSync("token",""),uni.reLaunch({url:"/pages/login/login"}));n=o({token:uni.getStorageSync("token")},n);uni.request({url:e,method:"GET",data:n,success:function(e){e=e.data;1==e.code?i(t,e):400==e.code?(uni.setStorageSync("token",""),setTimeout(function(){uni.reLaunch({url:"/pages/login/login"})},2e3)):uni.showToast({icon:"none",title:e.msg})},fail:function(t){console.log(t),uni.showToast({icon:"none",title:"网站消息获取错误"})},complete:function(t){t=t.data;13==t.code&&(uni.showToast({icon:"none",title:t.msg}),a.removeToken(),uni.reLaunch({url:"/pages/login/login"})),uni.hideLoading()}})},w={api:b,auth:h,setToken:s,getToken:d,removeToken:l,getUserInfo:c,setUserInfo:u,setId:f,getId:p,setLogid:v,getLogid:g};e.default=w},e82f:function(t,e,n){var o=n("1b6e");"string"===typeof o&&(o=[[t.i,o,""]]),o.locals&&(t.exports=o.locals);var i=n("4f06").default;i("3bdf2f52",o,!0,{sourceMap:!1,shadowMode:!1})},ef44:function(t,e,n){"use strict";var o=n("e82f"),i=n.n(o);i.a}}]);