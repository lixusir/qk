(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-record-passtwo"],{"0f5e":function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var o=a(n("cedc")),r=a(n("b463")),i=a(n("ebf1"));function a(t){return t&&t.__esModule?t:{default:t}}var c={components:{uniIcon:r.default,footerNav:i.default},data:function(){return{pwd2:"",status:1,id:uni.getStorageSync("details").id,token:uni.getStorageSync("token")}},methods:{back:function(){uni.setStorageSync("tabbar",2),uni.reLaunch({url:"/pages/record/transfer"})},update:function(){self=this,6==self.pwd2.length?uni.showModal({content:"確認此操作嗎？",cancelText:"取消",confirmText:"確認",confirmColor:"#FFAE00",cancelColor:"#D2D2D2",success:function(t){var e=this;t.confirm&&(self.status=0,uni.request({url:o.default.api.record.passtwo,method:"GET",data:{token:self.token,pwd2:self.pwd2,id:self.id},success:function(t){t=t.data;uni.showToast({icon:"none",title:t.msg}),1==t.code?(uni.setStorageSync("tabbar",2),setTimeout(function(){uni.setStorageSync("cat_time",1),uni.navigateBack({delta:1})},1e3)):(self.status=1,e.pwd2="")}}))}}):uni.showToast({icon:"none",title:"二級密碼必須是六位"})}}};e.default=c},"0fe8":function(t,e,n){"use strict";n.r(e);var o=n("a67f"),r=n.n(o);for(var i in o)"default"!==i&&function(t){n.d(e,t,function(){return o[t]})}(i);e["default"]=r.a},"17de":function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var o={data:function(){return{tabBar:[{id:3,iconPath:"/static/tabbar/refer.png",selectedIconPath:"/static/tabbar/referHL.png",pagePath:"/pages/service/repair",text:"提交工單"},{id:4,iconPath:"/static/tabbar/order.png",selectedIconPath:"/static/tabbar/orderHL.png",pagePath:"/pages/service/order",text:"我的工單"}],footer_nav:[{id:0,name:"鱼鱼集市",icon:"/static/tabbar/template.png",select_icon:"/static/tabbar/templateHL.png",pagePath:"/pages/main/bazaar"},{id:1,name:"服務中心",icon:"/static/tabbar/api.png",select_icon:"/static/tabbar/apiHL.png",pagePath:"/pages/main/service"},{id:2,name:"我的鱼窩",icon:"/static/tabbar/component.png",select_icon:"/static/tabbar/componentHL.png",pagePath:"/pages/main/shack"}],now_index:uni.getStorageSync("css")}},methods:{jump:function(t,e){uni.setStorageSync("css",e),this.now_index=e,uni.reLaunch({url:t})},order:function(){uni.switchTab({url:"/pages/main/shack"})}}};e.default=o},"19ad":function(t,e,n){"use strict";n.r(e);var o=n("0f5e"),r=n.n(o);for(var i in o)"default"!==i&&function(t){n.d(e,t,function(){return o[t]})}(i);e["default"]=r.a},"23c9":function(t,e,n){"use strict";n.r(e);var o=n("17de"),r=n.n(o);for(var i in o)"default"!==i&&function(t){n.d(e,t,function(){return o[t]})}(i);e["default"]=r.a},4879:function(t,e,n){"use strict";n.r(e);var o=n("586b"),r=n("19ad");for(var i in r)"default"!==i&&function(t){n.d(e,t,function(){return r[t]})}(i);n("a99e");var a=n("2877"),c=Object(a["a"])(r["default"],o["a"],o["b"],!1,null,"31b55fd4",null);e["default"]=c.exports},"586b":function(t,e,n){"use strict";var o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",{staticClass:"page"},[n("v-uni-view",{staticClass:"back"},[n("uni-icon",{attrs:{size:"28",type:"arrowleft"},on:{click:function(e){e=t.$handleEvent(e),t.back()}}})],1),n("v-uni-view",{staticClass:"body"},[n("v-uni-view",{staticClass:"log-input"},[n("v-uni-text",[t._v("二級密碼")]),n("v-uni-input",{attrs:{type:"text",password:"true",maxlength:"6",placeholder:"輸入您的二級密碼"},model:{value:t.pwd2,callback:function(e){t.pwd2=e},expression:"pwd2"}})],1),1==t.status?[n("v-uni-button",{staticClass:"btn-area",on:{click:function(e){e=t.$handleEvent(e),t.update(e)}}},[t._v("確認訂單")])]:[n("v-uni-button",{staticClass:"btn-area"},[t._v("確認訂單")])]],2),n("footerNav")],1)},r=[];n.d(e,"a",function(){return o}),n.d(e,"b",function(){return r})},"84e5":function(t,e,n){var o=n("f143");"string"===typeof o&&(o=[[t.i,o,""]]),o.locals&&(t.exports=o.locals);var r=n("4f06").default;r("78fb3877",o,!0,{sourceMap:!1,shadowMode:!1})},a67f:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var o={props:{type:String,color:String,size:[Number,String]},computed:{fontSize:function(){return"".concat(this.size,"px")}},methods:{onClick:function(){this.$emit("click")}}};e.default=o},a90b:function(t,e,n){"use strict";var o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",[t.now_index<3?void 0:[n("v-uni-view",{staticClass:"footer1"},[t._l(t.tabBar,function(e,o){return n("v-uni-view",{key:o,staticClass:"footer_item",staticStyle:{width:"33.3%"}},[n("v-uni-view",{on:{click:function(n){n=t.$handleEvent(n),t.jump(e.pagePath,e.id)}}},[n("v-uni-image",{attrs:{src:e.id==t.now_index?e.selectedIconPath:e.iconPath,mode:""}}),n("v-uni-view",{class:"tab_text "+(e.id==t.now_index?"actives1":"")},[t._v(t._s(e.text))])],1)],1)}),n("v-uni-view",{staticClass:"footer_item",staticStyle:{width:"33.3%"}},[n("v-uni-view",{on:{click:function(e){e=t.$handleEvent(e),t.order()}}},[n("v-uni-image",{attrs:{src:"/static/tabbar/main.png",mode:""}}),n("v-uni-view",{staticClass:"tab_text1"},[t._v("返回鱼窩")])],1)],1)],2)]],2)},r=[];n.d(e,"a",function(){return o}),n.d(e,"b",function(){return r})},a99e:function(t,e,n){"use strict";var o=n("84e5"),r=n.n(o);r.a},b463:function(t,e,n){"use strict";n.r(e);var o=n("fc8b"),r=n("0fe8");for(var i in r)"default"!==i&&function(t){n.d(e,t,function(){return r[t]})}(i);var a=n("2877"),c=Object(a["a"])(r["default"],o["a"],o["b"],!1,null,null,null);e["default"]=c.exports},c370:function(t,e,n){"use strict";var o=n("d25e"),r=n.n(o);r.a},cedc:function(t,e,n){"use strict";function o(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{},o=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(o=o.concat(Object.getOwnPropertySymbols(n).filter(function(t){return Object.getOwnPropertyDescriptor(n,t).enumerable}))),o.forEach(function(e){r(t,e,n[e])})}return t}function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i="USER_KEY",a="TOKEN_KEY",c=function(){var t="";return t=uni.getStorageSync(i),t||{avatar:"../../static/img/avatar.png",bottom_text:"广州锐合技术支持QQ：8396048",level_name:"普通会员",nickname:"锐合网络",uid:0,icode:"18024553545"}},s=function(t){uni.setStorage({key:i,data:t})},u=function(t){uni.setStorageSync(a,t)},d=function(){return uni.getStorageSync(a)},f=function(){uni.clearStorage()},l=function(t){uni.setStorageSync("uid",t)},p=function(){return uni.getStorageSync("uid")},g=function(t){uni.setStorageSync("logid",t)},m=function(){return uni.getStorageSync("logid")},v="http://bc.hhwl168.com/",b={index:v+"default/index",home:{info:v+"port/member/info"},main:{bazaar:v+"port/index/index",order:v+"port/index/appointment",adopt:v+"port/index/adopt",result:v+"port/index/adoptResult",info:v+"port/index/confInfo",notice:v+"port/index/notice"},center:{code:v+"port/member/verifycode",password:v+"port/member/changePwd",passtwo:v+"port/member/changePwd2",pid:v+"port/member/realname",close:v+"port/member/changeMethodStatus",card:v+"port/member/myPaymentMethod",type:v+"port/member/getPaymentType",submit:v+"port/member/submitMethod",message:v+"port/member/systemMessage",team:v+"port/member/myTeam",friends:v+"port/member/inviteFriends"},service:{insert:v+"port/server_center/workorder",submit:v+"port/server_center/submitWorkorder",order:v+"port/server_center/workorderList"},login:{login:v+"port/login",logo:v+"port/login/get_enter_logo",forget:v+"port/login/forgetpwd"},reg:{register:v+"port/login/register",code:v+"port/login/verifycode",agree:v+"port/login/get_user_regagree"},interests:{qrcode:v+"port/member/recharge",integral:v+"port/member/integralLog",roll:v+"port/member/givingIntegral",sell:v+"port/member/assetSale",submit:v+"port/member/rechargeSubmit",earnings:v+"port/member/incomeLog",assets:v+"port/member/myAssets"},record:{pay:v+"port/order/pay",adopt:v+"port/order/index",make:v+"port/member/appointment",update:v+"port/order/pay",passtwo:v+"port/order/auditPass",submit:v+"port/order/complaint",complaint:v+"record/payment",transfer:v+"port/order/transfer",details:v+"port/order/detail",undo:v+"port/order/revoke"}},h=function(t,e,n,r){var i=this,a=uni.getStorageSync("token");""==a&&(uni.setStorageSync("token",""),uni.reLaunch({url:"/pages/login/login"}));n=o({token:uni.getStorageSync("token")},n);uni.request({url:e,method:"GET",data:n,success:function(e){e=e.data;1==e.code?r(t,e):400==e.code?(uni.setStorageSync("token",""),setTimeout(function(){uni.reLaunch({url:"/pages/login/login"})},2e3)):uni.showToast({icon:"none",title:e.msg})},fail:function(t){console.log(t),uni.showToast({icon:"none",title:"网站消息获取错误"})},complete:function(t){t=t.data;13==t.code&&(uni.showToast({icon:"none",title:t.msg}),i.removeToken(),uni.reLaunch({url:"/pages/login/login"})),uni.hideLoading()}})},w={api:b,auth:h,setToken:u,getToken:d,removeToken:f,getUserInfo:c,setUserInfo:s,setId:l,getId:p,setLogid:g,getLogid:m};e.default=w},cfd7:function(t,e,n){e=t.exports=n("2350")(!1),e.push([t.i,".footer[data-v-41fe7893]{left:0;bottom:0;width:100%;color:#fff;z-index:1000;height:%?100?%;position:fixed;background:#181e30}.footer1[data-v-41fe7893]{left:0;bottom:0;width:100%;color:#fff;height:%?100?%;position:fixed;background-color:#fff}.footer_item[data-v-41fe7893]{float:left;width:33.3%;height:%?100?%;font-size:%?24?%;text-align:center;color:#7a7e83}.footer_item uni-image[data-v-41fe7893]{margin-top:%?10?%;width:%?46?%;height:%?46?%;margin-bottom:%?0?%}.footer_item.big_item[data-v-41fe7893]{top:%?-40?%;position:relative}.footer_item.big_item uni-image[data-v-41fe7893]{width:%?100?%;height:%?100?%}.actives[data-v-41fe7893]{color:#5d8afc}.actives1[data-v-41fe7893]{color:#5d8afc}.tab_text1[data-v-41fe7893]{color:#fdb513}",""])},d25e:function(t,e,n){var o=n("cfd7");"string"===typeof o&&(o=[[t.i,o,""]]),o.locals&&(t.exports=o.locals);var r=n("4f06").default;r("68b29e16",o,!0,{sourceMap:!1,shadowMode:!1})},ebf1:function(t,e,n){"use strict";n.r(e);var o=n("a90b"),r=n("23c9");for(var i in r)"default"!==i&&function(t){n.d(e,t,function(){return r[t]})}(i);n("c370");var a=n("2877"),c=Object(a["a"])(r["default"],o["a"],o["b"],!1,null,"41fe7893",null);e["default"]=c.exports},f143:function(t,e,n){e=t.exports=n("2350")(!1),e.push([t.i,".body[data-v-31b55fd4]{padding:%?40?%}",""])},fc8b:function(t,e,n){"use strict";var o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",{staticClass:"uni-icon",class:["uni-icon-"+t.type],style:{color:t.color,"font-size":t.fontSize},on:{click:function(e){e=t.$handleEvent(e),t.onClick()}}})},r=[];n.d(e,"a",function(){return o}),n.d(e,"b",function(){return r})}}]);