(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-center-friends"],{"00d8":function(e,t,n){"use strict";function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},o=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(o=o.concat(Object.getOwnPropertySymbols(n).filter(function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),o.forEach(function(t){r(e,t,n[t])})}return e}function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a="USER_KEY",i="TOKEN_KEY",c=function(){var e="";return e=uni.getStorageSync(a),e||{avatar:"../../static/img/avatar.png",bottom_text:"广州锐合技术支持QQ：8396048",level_name:"普通会员",nickname:"锐合网络",uid:0,icode:"18024553545"}},u=function(e){uni.setStorage({key:a,data:e})},s=function(e){uni.setStorageSync(i,e)},d=function(){return uni.getStorageSync(i)},f=function(){uni.clearStorage()},l=function(e){uni.setStorageSync("uid",e)},g=function(){return uni.getStorageSync("uid")},p=function(e){uni.setStorageSync("logid",e)},m=function(){return uni.getStorageSync("logid")},b="http://blockcat.8396048.com/",v={index:b+"default/index",home:{info:b+"port/member/info"},main:{bazaar:b+"port/index/index",order:b+"port/index/appointment",adopt:b+"port/index/adopt",result:b+"port/index/adoptResult",info:b+"port/index/confInfo",notice:b+"port/index/notice"},center:{code:b+"port/member/verifycode",password:b+"port/member/changePwd",passtwo:b+"port/member/changePwd2",pid:b+"port/member/realname",close:b+"port/member/changeMethodStatus",card:b+"port/member/myPaymentMethod",type:b+"port/member/getPaymentType",submit:b+"port/member/submitMethod",message:b+"port/member/systemMessage",team:b+"port/member/myTeam",friends:b+"port/member/inviteFriends"},service:{insert:b+"port/server_center/workorder",submit:b+"port/server_center/submitWorkorder",order:b+"port/server_center/workorderList"},login:{login:b+"port/login",logo:b+"port/login/get_enter_logo",forget:b+"port/login/forgetpwd"},reg:{register:b+"port/login/register",code:b+"port/login/verifycode",agree:b+"port/login/get_user_regagree"},interests:{qrcode:b+"port/member/recharge",integral:b+"port/member/integralLog",roll:b+"port/member/givingIntegral",sell:b+"port/member/assetSale",submit:b+"port/member/rechargeSubmit",earnings:b+"port/member/incomeLog"},record:{pay:b+"port/order/pay",adopt:b+"port/order/index",make:b+"port/member/appointment",update:b+"port/order/pay",passtwo:b+"port/order/auditPass",submit:b+"port/order/complaint",complaint:b+"record/payment",transfer:b+"port/order/transfer",details:b+"port/order/detail",undo:b+"port/order/detail"}},h=function(e,t,n,r){var a=this,i=uni.getStorageSync("token");""==i&&(uni.setStorageSync("token",""),uni.reLaunch({url:"/pages/login/login"}));n=o({token:uni.getStorageSync("token")},n);uni.request({url:t,method:"GET",data:n,success:function(t){t=t.data;1==t.code?r(e,t):400==t.code?(uni.setStorageSync("token",""),setTimeout(function(){uni.reLaunch({url:"/pages/login/login"})},2e3)):uni.showToast({icon:"none",title:t.msg})},fail:function(e){console.log(e),uni.showToast({icon:"none",title:"网站消息获取错误"})},complete:function(e){e=e.data;13==e.code&&(uni.showToast({icon:"none",title:e.msg}),a.removeToken(),uni.reLaunch({url:"/pages/login/login"})),uni.hideLoading()}})},w={api:v,auth:h,setToken:s,getToken:d,removeToken:f,getUserInfo:c,setUserInfo:u,setId:l,getId:g,setLogid:p,getLogid:m};t.default=w},"0118":function(e,t,n){t=e.exports=n("2350")(!1),t.push([e.i,".footer[data-v-a41350ac]{left:0;bottom:0;width:100%;color:#fff;z-index:1000;height:%?100?%;position:fixed;background:#181e30}.footer1[data-v-a41350ac]{left:0;bottom:0;width:100%;color:#fff;height:%?100?%;position:fixed;background-color:#fff}.footer_item[data-v-a41350ac]{float:left;width:33.3%;height:%?100?%;font-size:%?24?%;text-align:center;color:#7a7e83}.footer_item uni-image[data-v-a41350ac]{margin-top:%?10?%;width:%?46?%;height:%?46?%;margin-bottom:%?0?%}.footer_item.big_item[data-v-a41350ac]{top:%?-40?%;position:relative}.footer_item.big_item uni-image[data-v-a41350ac]{width:%?100?%;height:%?100?%}.actives[data-v-a41350ac]{color:#5d8afc}.actives1[data-v-a41350ac]{color:#5d8afc}",""])},"079e":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=i(n("00d8")),r=i(n("2bde")),a=i(n("3444"));function i(e){return e&&e.__esModule?e:{default:e}}var c={components:{uniIcon:r.default,footerNav:a.default},data:function(){return{token:uni.getStorageSync("token"),qrcode:""}},onLoad:function(){var e=this;uni.request({url:o.default.api.center.friends,method:"GET",data:{token:this.token},success:function(t){t=t.data;console.log(t.data.qrcode),1==t.code?e.qrcode=t.data.qrcode:uni.showModal({title:"温馨提示",content:t.msg,confirmText:"确认",confirmColor:"#FFAE00",showCancel:!1,success:function(e){uni.navigateBack({delta:1})}})}})}};t.default=c},"0aec":function(e,t,n){t=e.exports=n("2350")(!1),t.push([e.i,".content[data-v-bf6c39d0]{background:#252831;background-repeat:no-repeat;background-attachment:fixed;background-position:50%}.back_img[data-v-bf6c39d0]{width:100%;height:100%;position:fixed}.img[data-v-bf6c39d0]{width:%?1?%;margin-left:20%;width:60%}.img uni-image[data-v-bf6c39d0]{margin-top:%?300?%;width:100%;height:%?450?%}",""])},"0d09":function(e,t,n){"use strict";var o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-uni-view",[e.now_index<3?void 0:[n("v-uni-view",{staticClass:"footer1"},e._l(e.tabBar,function(t,o){return n("v-uni-view",{key:o,staticClass:"footer_item",staticStyle:{width:"50%"}},[n("v-uni-view",{on:{click:function(n){n=e.$handleEvent(n),e.jump(t.pagePath,t.id)}}},[n("v-uni-image",{attrs:{src:t.id==e.now_index?t.selectedIconPath:t.iconPath,mode:""}}),n("v-uni-view",{class:"tab_text "+(t.id==e.now_index?"actives1":"")},[e._v(e._s(t.text))])],1)],1)}),1)]],2)},r=[];n.d(t,"a",function(){return o}),n.d(t,"b",function(){return r})},"104c":function(e,t,n){var o=n("0aec");"string"===typeof o&&(o=[[e.i,o,""]]),o.locals&&(e.exports=o.locals);var r=n("4f06").default;r("f216facc",o,!0,{sourceMap:!1,shadowMode:!1})},"22c1":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o={data:function(){return{tabBar:[{id:3,iconPath:"/static/tabbar/refer.png",selectedIconPath:"/static/tabbar/referHL.png",pagePath:"/pages/service/repair",text:"提交工單"},{id:4,iconPath:"/static/tabbar/order.png",selectedIconPath:"/static/tabbar/orderHL.png",pagePath:"/pages/service/order",text:"我的工單"}],footer_nav:[{id:0,name:"貓貓集市",icon:"/static/tabbar/template.png",select_icon:"/static/tabbar/templateHL.png",pagePath:"/pages/main/bazaar"},{id:1,name:"服務中心",icon:"/static/tabbar/api.png",select_icon:"/static/tabbar/apiHL.png",pagePath:"/pages/main/service"},{id:2,name:"我的貓窩",icon:"/static/tabbar/component.png",select_icon:"/static/tabbar/componentHL.png",pagePath:"/pages/main/shack"}],now_index:uni.getStorageSync("css")}},methods:{jump:function(e,t){uni.setStorageSync("css",t),this.now_index=t,uni.navigateTo({url:e})}}};t.default=o},"2bde":function(e,t,n){"use strict";n.r(t);var o=n("7869"),r=n("8a4c");for(var a in r)"default"!==a&&function(e){n.d(t,e,function(){return r[e]})}(a);var i=n("2877"),c=Object(i["a"])(r["default"],o["a"],o["b"],!1,null,null,null);t["default"]=c.exports},3444:function(e,t,n){"use strict";n.r(t);var o=n("0d09"),r=n("d96f");for(var a in r)"default"!==a&&function(e){n.d(t,e,function(){return r[e]})}(a);n("5e46");var i=n("2877"),c=Object(i["a"])(r["default"],o["a"],o["b"],!1,null,"a41350ac",null);t["default"]=c.exports},"5e46":function(e,t,n){"use strict";var o=n("d7e4"),r=n.n(o);r.a},"6ced":function(e,t,n){"use strict";n.r(t);var o=n("b3da"),r=n("e2ba");for(var a in r)"default"!==a&&function(e){n.d(t,e,function(){return r[e]})}(a);n("d9cc");var i=n("2877"),c=Object(i["a"])(r["default"],o["a"],o["b"],!1,null,"bf6c39d0",null);t["default"]=c.exports},7869:function(e,t,n){"use strict";var o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-uni-view",{staticClass:"uni-icon",class:["uni-icon-"+e.type],style:{color:e.color,"font-size":e.fontSize},on:{click:function(t){t=e.$handleEvent(t),e.onClick()}}})},r=[];n.d(t,"a",function(){return o}),n.d(t,"b",function(){return r})},"8a4c":function(e,t,n){"use strict";n.r(t);var o=n("ceb8"),r=n.n(o);for(var a in o)"default"!==a&&function(e){n.d(t,e,function(){return o[e]})}(a);t["default"]=r.a},b3da:function(e,t,n){"use strict";var o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-uni-view",{staticClass:"content",staticStyle:{"background-image":"url('../../static/img/friends.jpg')"}},[n("v-uni-view",{staticClass:"img"},[n("v-uni-image",{attrs:{src:e.qrcode}})],1),n("footerNav")],1)},r=[];n.d(t,"a",function(){return o}),n.d(t,"b",function(){return r})},ceb8:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o={props:{type:String,color:String,size:[Number,String]},computed:{fontSize:function(){return"".concat(this.size,"px")}},methods:{onClick:function(){this.$emit("click")}}};t.default=o},d7e4:function(e,t,n){var o=n("0118");"string"===typeof o&&(o=[[e.i,o,""]]),o.locals&&(e.exports=o.locals);var r=n("4f06").default;r("42aac8f7",o,!0,{sourceMap:!1,shadowMode:!1})},d96f:function(e,t,n){"use strict";n.r(t);var o=n("22c1"),r=n.n(o);for(var a in o)"default"!==a&&function(e){n.d(t,e,function(){return o[e]})}(a);t["default"]=r.a},d9cc:function(e,t,n){"use strict";var o=n("104c"),r=n.n(o);r.a},e2ba:function(e,t,n){"use strict";n.r(t);var o=n("079e"),r=n.n(o);for(var a in o)"default"!==a&&function(e){n.d(t,e,function(){return o[e]})}(a);t["default"]=r.a}}]);