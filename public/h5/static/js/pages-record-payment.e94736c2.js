(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-record-payment"],{"00d8":function(t,e,i){"use strict";function a(t){for(var e=1;e<arguments.length;e++){var i=null!=arguments[e]?arguments[e]:{},a=Object.keys(i);"function"===typeof Object.getOwnPropertySymbols&&(a=a.concat(Object.getOwnPropertySymbols(i).filter(function(t){return Object.getOwnPropertyDescriptor(i,t).enumerable}))),a.forEach(function(e){o(t,e,i[e])})}return t}function o(t,e,i){return e in t?Object.defineProperty(t,e,{value:i,enumerable:!0,configurable:!0,writable:!0}):t[e]=i,t}Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n="USER_KEY",r="TOKEN_KEY",s=function(){var t="";return t=uni.getStorageSync(n),t||{avatar:"../../static/img/avatar.png",bottom_text:"广州锐合技术支持QQ：8396048",level_name:"普通会员",nickname:"锐合网络",uid:0,icode:"18024553545"}},c=function(t){uni.setStorage({key:n,data:t})},d=function(t){uni.setStorageSync(r,t)},u=function(){return uni.getStorageSync(r)},l=function(){uni.clearStorage()},f=function(t){uni.setStorageSync("uid",t)},v=function(){return uni.getStorageSync("uid")},g=function(t){uni.setStorageSync("logid",t)},p=function(){return uni.getStorageSync("logid")},m="/",b={index:m+"default/index",home:{info:m+"port/member/info"},main:{bazaar:m+"port/index/index",order:m+"port/index/appointment",adopt:m+"port/index/adopt"},center:{code:m+"port/member/verifycode",password:m+"port/member/changePwd",passtwo:m+"port/member/changePwd2",pid:m+"port/member/realname",close:m+"port/member/changeMethodStatus",card:m+"port/member/myPaymentMethod",type:m+"port/member/getPaymentType",submit:m+"port/member/submitMethod",message:m+"port/member/systemMessage",team:m+"port/member/myTeam",friends:m+"port/member/inviteFriends"},service:{insert:m+"port/server_center/workorder",submit:m+"port/server_center/submitWorkorder",order:m+"port/server_center/workorderList"},login:{login:m+"port/login",logo:m+"port/login/get_enter_logo",forget:m+"port/login/forgetpwd"},reg:{register:m+"port/login/register",code:m+"port/login/verifycode",agree:m+"port/login/get_user_regagree"},interests:{qrcode:m+"port/member/integralLog",integral:m+"port/member/integralLog",roll:m+"port/member/givingIntegral",sell:m+"port/member/assetSale"},record:{pay:m+"port/order/pay",adopt:m+"port/order/index",make:m+"port/member/appointment",update:m+"port/order/pay",passtwo:m+"port/order/auditPass",submit:m+"port/order/complaint",complaint:m+"record/payment",transfer:m+"port/order/transfer",details:m+"port/order/detail",undo:m+"port/order/detail"}},h=function(t,e,i,o){var n=this,r=uni.getStorageSync("token");""==r&&uni.reLaunch({url:"/pages/login/login"});i=a({token:uni.getStorageSync("token")},i);uni.request({url:e,method:"GET",data:i,success:function(e){e=e.data;1==e.code?o(t,e):400==e.code?(uni.setStorageSync("token",""),setTimeout(function(){uni.reLaunch({url:"/pages/login/login"})},2e3)):uni.showToast({icon:"none",title:e.msg})},fail:function(t){console.log(t),uni.showToast({icon:"none",title:"网站消息获取错误"})},complete:function(t){t=t.data;13==t.code&&(uni.showToast({icon:"none",title:t.msg}),n.removeToken(),uni.reLaunch({url:"/pages/login/login"})),uni.hideLoading()}})},_={api:b,auth:h,setToken:d,getToken:u,removeToken:l,getUserInfo:s,setUserInfo:c,setId:f,getId:v,setLogid:g,getLogid:p};e.default=_},"1f64":function(t,e,i){e=t.exports=i("2350")(!1),e.push([t.i,".footer[data-v-3cddadaa]{left:0;bottom:0;width:100%;color:#fff;height:%?100?%;position:fixed;background-color:#181e30}.footer_item[data-v-3cddadaa]{float:left;width:33.3%;height:%?100?%;font-size:%?24?%;text-align:center;color:#7a7e83}.footer_item uni-image[data-v-3cddadaa]{top:%?10?%;width:%?46?%;height:%?46?%;margin-bottom:%?10?%}.footer_item.big_item[data-v-3cddadaa]{top:%?-40?%;position:relative}.footer_item.big_item uni-image[data-v-3cddadaa]{width:%?100?%;height:%?100?%}.active[data-v-3cddadaa]{color:#5d8afc}",""])},"22c1":function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a={methods:{jump:function(t){uni.navigateTo({url:t})},change_nav:function(t){this.$store.commit("change_page",t)}},computed:{footer_nav:function(){return this.$store.state.footer_store.footer_nav},now_index:function(){return uni.getStorageSync("css")}}};e.default=a},3444:function(t,e,i){"use strict";i.r(e);var a=i("d8ed"),o=i("d96f");for(var n in o)"default"!==n&&function(t){i.d(e,t,function(){return o[t]})}(n);i("94bf");var r=i("2877"),s=Object(r["a"])(o["default"],a["a"],a["b"],!1,null,"3cddadaa",null);e["default"]=s.exports},"56d0":function(t,e,i){e=t.exports=i("2350")(!1),e.push([t.i,".account[data-v-c3a0abbc],.credentials[data-v-c3a0abbc],.text[data-v-c3a0abbc]{padding:%?26?%;background:#fff;border-bottom:%?2?% solid #eee}.text[data-v-c3a0abbc]{color:#333;font-size:%?30?%;line-height:%?70?%}.title[data-v-c3a0abbc]{color:#333;font-size:%?36?%;padding-bottom:%?20?%}.uni-media-list[data-v-c3a0abbc]{width:100%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;padding:%?10?% %?20?%;-webkit-box-sizing:border-box}.uni-list-cell[data-v-c3a0abbc]{background-color:#fff;border-bottom:%?2?% solid #c8c7cc}.uni-list-cell-hover[data-v-c3a0abbc]{background-color:#ddd}.uni-media-list-logo[data-v-c3a0abbc]{width:30%;height:%?110?%}.uni-media-list-logo uni-image[data-v-c3a0abbc]{width:%?110?%;height:%?110?%}.uni-media-list-body[data-v-c3a0abbc]{flex:1;width:30%;-ms-flex:1;height:100%;-webkit-flex:1;-webkit-box-flex:1;padding-right:%?40?%;display:-webkit-flex;-webkit-flex-direction:column}.uni-media-list-text-top[data-v-c3a0abbc]{width:100%;font-size:%?28?%;line-height:%?40?%}.uni-ellipsis[data-v-c3a0abbc],.uni-media-list-text-bottom[data-v-c3a0abbc],.uni-media-list-text-top[data-v-c3a0abbc]{overflow:hidden;white-space:nowrap;text-overflow:ellipsis;-o-text-overflow:ellipsis}.list[data-v-c3a0abbc]{width:100%;height:%?100?%;font-size:%?30?%;text-indent:%?40?%;line-height:%?100?%;background-color:#fff;border-bottom:%?3?% solid #f1f1f1}.list_right[data-v-c3a0abbc]{color:#fdb513;text-align:right;margin-right:%?40?%;margin-top:%?-100?%;line-height:%?100?%}.log-input[data-v-c3a0abbc]{background:#f1f1f1}.body[data-v-c3a0abbc]{padding:%?26?%;background-color:#fff;border-bottom:%?1?% solid #eee}.img[data-v-c3a0abbc]{float:right;width:%?220?%;height:%?220?%}.img1[data-v-c3a0abbc]{color:#ddd;width:%?360?%;height:%?360?%;font-size:%?200?%;text-align:center;line-height:%?360?%;background-color:#eee;border:%?4?% solid #ddd}.image[data-v-c3a0abbc]{height:%?360?%}.text1[data-v-c3a0abbc]{font-size:%?36?%;line-height:%?65?%}",""])},"5f6f":function(t,e,i){var a=i("1f64");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var o=i("4f06").default;o("fbc8b054",a,!0,{sourceMap:!1,shadowMode:!1})},"94bf":function(t,e,i){"use strict";var a=i("5f6f"),o=i.n(a);o.a},9979:function(t,e,i){"use strict";i.r(e);var a=i("e7d9"),o=i.n(a);for(var n in a)"default"!==n&&function(t){i.d(e,t,function(){return a[t]})}(n);e["default"]=o.a},c097:function(t,e,i){var a=i("56d0");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var o=i("4f06").default;o("4d0add5a",a,!0,{sourceMap:!1,shadowMode:!1})},c707:function(t,e,i){"use strict";var a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",{staticClass:"content"},[i("v-uni-view",{staticClass:"list"},[t._v("消耗积分"),i("v-uni-view",{staticClass:"list_right"},[t._v(t._s(t.adopt.integral))])],1),i("v-uni-view",{staticClass:"list"},[t._v("转让方"),i("v-uni-view",{staticClass:"list_right"},[t._v(t._s(t.adopt.seller_nickname))])],1),i("v-uni-view",{staticClass:"list"},[t._v("转让方手机"),i("v-uni-view",{staticClass:"list_right"},[t._v(t._s(t.adopt.seller_account))])],1),i("v-uni-view",{staticClass:"list"},[t._v("区块金额"),i("v-uni-view",{staticClass:"list_right"},[t._v(t._s(t.adopt.price))])],1),i("v-uni-view",{staticClass:"account"},[i("v-uni-view",{staticClass:"title"},[t._v("转让方收款账号")]),t._l(t.card_list,function(e,a){return i("v-uni-view",{key:a,staticClass:"uni-list-cell",attrs:{"hover-class":"uni-list-cell-hover"}},[i("v-uni-view",{staticClass:"uni-list-cell-navigate uni-navigate-right uni-media-list"},[i("v-uni-view",{staticClass:"uni-media-list-logo"},[i("v-uni-image",{attrs:{src:e.logo}})],1),i("v-uni-view",{staticClass:"uni-media-list-body"},[i("v-uni-view",{staticClass:"uni-media-list-text-top"},[t._v("账户名称："+t._s(e.titleofaccount))]),i("v-uni-view",{staticClass:"uni-media-list-text-top"},[t._v("账户账号："+t._s(e.account))]),i("v-uni-view",{staticClass:"uni-media-list-text-top"},[t._v("账户类型："+t._s(e.typename))])],1)],1)],1)})],2),i("v-uni-view",{staticClass:"body"},[i("v-uni-view",{staticClass:"text1"},[t._v("上传付款凭证：")]),t.imageSrc?[i("v-uni-image",{staticClass:"image",attrs:{src:t.imageSrc,mode:"widthFix"},on:{click:function(e){e=t.$handleEvent(e),t.chooseImage(e)}}})]:[i("v-uni-view",{staticClass:"img1"},[i("v-uni-view",{staticClass:"uni-hello-addfile",on:{click:function(e){e=t.$handleEvent(e),t.chooseImage(e)}}},[t._v("+")])],1)]],2),i("v-uni-view",{staticClass:"body"},[i("v-uni-view",{staticClass:"log-input"},[i("v-uni-text",[t._v("二级密码")]),i("v-uni-input",{attrs:{type:"text",name:"passtwo",password:"true",maxlength:"6",placeholder:"输入二级密码"},model:{value:t.passtwo,callback:function(e){t.passtwo=e},expression:"passtwo"}})],1),i("v-uni-button",{staticClass:"btn-area",on:{click:function(e){e=t.$handleEvent(e),t.submit(e)}}},[t._v("确认付款")])],1),i("footerNav")],1)},o=[];i.d(e,"a",function(){return a}),i.d(e,"b",function(){return o})},d8ed:function(t,e,i){"use strict";var a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",[i("v-uni-view",{staticClass:"footer"},t._l(t.footer_nav,function(e,a){return i("v-uni-view",{key:a,class:"footer_item "+("big"==e.size?"big_item":""),staticStyle:{width:"33.3%"},on:{click:function(e){e=t.$handleEvent(e),t.change_nav(a)}}},[i("v-uni-view",{on:{click:function(i){i=t.$handleEvent(i),t.jump(e.pagePath)}}},[i("v-uni-image",{attrs:{src:a==t.now_index?e.select_icon:e.icon,mode:""}}),i("v-uni-view",{class:a==t.now_index?"active":""},[t._v(t._s(e.name))])],1)],1)}))],1)},o=[];i.d(e,"a",function(){return a}),i.d(e,"b",function(){return o})},d96f:function(t,e,i){"use strict";i.r(e);var a=i("22c1"),o=i.n(a);for(var n in a)"default"!==n&&function(t){i.d(e,t,function(){return a[t]})}(n);e["default"]=o.a},db67:function(t,e,i){"use strict";var a=i("c097"),o=i.n(a);o.a},e7d9:function(module,exports,__webpack_require__){"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var _service=_interopRequireDefault(__webpack_require__("00d8")),_footer_nav=_interopRequireDefault(__webpack_require__("3444"));function _interopRequireDefault(t){return t&&t.__esModule?t:{default:t}}var userInfo=_service.default.getUserInfo(),_default={components:{footerNav:_footer_nav.default},data:function(){return{id:uni.getStorageSync("adopt_id"),token:uni.getStorageSync("token"),user:uni.getStorageSync("user"),imageSrc:"",passtwo:"",card_list:[],adopt:""}},onShow:function(){_service.default.auth(this,_service.default.api.record.details+"?token="+this.token,{id:this.id},function(t,e){1==e.code&&(t.adopt=e.data.detail,t.card_list=e.data.detail.seller_paymentmethod)}),_service.default.auth(this,_service.default.api.center.type+"?token="+this.token,{},function(t,e){if(1==e.code){var i=e.data.typelist;t.type_list=i}})},methods:{chooseImage:function(){var t=this;uni.chooseImage({count:1,sizeType:["compressed"],sourceType:["album"],success:function(e){var i=e.tempFilePaths[0];t.imageSrc=i},fail:function(t){console.log("chooseImage fail",t)}})},submit:function submit(){if(console.log(self.passtwo),""!=this.imageSrc)if(this.passtwo.length<6)uni.showToast({icon:"none",title:"请输入六位的二级密码"});else var uploadTask=uni.uploadFile({url:_service.default.api.record.update+"?token="+this.token,filePath:this.imageSrc,name:"file",formData:{id:this.id,pwd2:this.passtwo},success:function success(res){res=res.data,res=eval("("+res+")"),console.log(res),1==res.code?uni.navigateTo({url:"/pages/record/successful"}):uni.showToast({icon:"none",title:res.msg})}});else uni.showToast({icon:"none",title:"请上传付款凭证"})}}};exports.default=_default},f267:function(t,e,i){"use strict";i.r(e);var a=i("c707"),o=i("9979");for(var n in o)"default"!==n&&function(t){i.d(e,t,function(){return o[t]})}(n);i("db67");var r=i("2877"),s=Object(r["a"])(o["default"],a["a"],a["b"],!1,null,"c3a0abbc",null);e["default"]=s.exports}}]);