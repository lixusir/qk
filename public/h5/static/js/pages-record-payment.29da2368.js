(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-record-payment"],{"00d8":function(e,t,i){"use strict";function a(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{},a=Object.keys(i);"function"===typeof Object.getOwnPropertySymbols&&(a=a.concat(Object.getOwnPropertySymbols(i).filter(function(e){return Object.getOwnPropertyDescriptor(i,e).enumerable}))),a.forEach(function(t){o(e,t,i[t])})}return e}function o(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n="USER_KEY",r="TOKEN_KEY",s=function(){var e="";return e=uni.getStorageSync(n),e||{avatar:"../../static/img/avatar.png",bottom_text:"广州锐合技术支持QQ：8396048",level_name:"普通会员",nickname:"锐合网络",uid:0,icode:"18024553545"}},c=function(e){uni.setStorage({key:n,data:e})},u=function(e){uni.setStorageSync(r,e)},d=function(){return uni.getStorageSync(r)},l=function(){uni.clearStorage()},f=function(e){uni.setStorageSync("uid",e)},v=function(){return uni.getStorageSync("uid")},g=function(e){uni.setStorageSync("logid",e)},p=function(){return uni.getStorageSync("logid")},m="/",h={index:m+"default/index",home:{info:m+"port/member/info"},main:{bazaar:m+"port/index/index",order:m+"port/index/appointment",adopt:m+"port/index/adopt"},center:{code:m+"port/member/verifycode",password:m+"port/member/changePwd",passtwo:m+"port/member/changePwd2",pid:m+"port/member/realname",close:m+"port/member/changeMethodStatus",card:m+"port/member/myPaymentMethod",type:m+"port/member/getPaymentType",submit:m+"port/member/submitMethod",message:m+"port/member/systemMessage",team:m+"port/member/myTeam",friends:m+"port/member/inviteFriends"},service:{insert:m+"port/server_center/workorder",submit:m+"port/server_center/submitWorkorder",order:m+"port/server_center/submitWorkorder"},login:{login:m+"port/login",logo:m+"port/login/get_enter_logo",forget:m+"port/login/forgetpwd"},reg:{register:m+"port/login/register",code:m+"port/login/verifycode"},interests:{integral:m+"port/member/integralLog",roll:m+"port/member/givingIntegral",sell:m+"port/member/assetSale"},record:{pay:m+"port/order/pay",adopt:m+"port/order/index",make:m+"port/member/appointment",update:m+"port/order/pay",passtwo:m+"port/order/auditPass",submit:m+"port/order/complaint",complaint:m+"record/payment",transfer:m+"port/order/transfer",details:m+"port/order/detail",undo:m+"port/order/detail"}},b=function(e,t,i,o){var n=this,r=uni.getStorageSync("token");""==r&&uni.reLaunch({url:"/pages/login/login"});i=a({token:uni.getStorageSync("token")},i);uni.request({url:t,method:"GET",data:i,success:function(t){t=t.data;1==t.code?o(e,t):400==t.code?(uni.setStorageSync("token",""),setTimeout(function(){uni.reLaunch({url:"/pages/login/login"})},2e3)):uni.showToast({icon:"none",title:t.msg})},fail:function(e){uni.showToast({icon:"none",title:"网站消息获取错误"})},complete:function(e){e=e.data;13==e.code&&(uni.showToast({icon:"none",title:e.msg}),n.removeToken(),uni.reLaunch({url:"/pages/login/login"})),uni.hideLoading()}})},_={api:h,auth:b,setToken:u,getToken:d,removeToken:l,getUserInfo:s,setUserInfo:c,setId:f,getId:v,setLogid:g,getLogid:p};t.default=_},"0534":function(e,t,i){t=e.exports=i("2350")(!1),t.push([e.i,".account[data-v-6e84243a],.credentials[data-v-6e84243a],.text[data-v-6e84243a]{padding:%?26?%;background:#fff;border-bottom:%?2?% solid #bbb}.text[data-v-6e84243a]{color:#333;font-size:%?30?%;line-height:%?70?%}.title[data-v-6e84243a]{color:#333;font-size:%?36?%;padding-bottom:%?20?%}.uni-media-list[data-v-6e84243a]{width:100%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;padding:%?10?% %?20?%;-webkit-box-sizing:border-box}.uni-list-cell[data-v-6e84243a]{background-color:#fff;border-bottom:%?2?% solid #c8c7cc}.uni-list-cell-hover[data-v-6e84243a]{background-color:#ddd}.uni-media-list-logo[data-v-6e84243a]{width:30%;height:%?110?%}.uni-media-list-logo uni-image[data-v-6e84243a]{width:%?110?%;height:%?110?%}.uni-media-list-body[data-v-6e84243a]{flex:1;width:30%;-ms-flex:1;height:100%;-webkit-flex:1;-webkit-box-flex:1;padding-right:%?40?%;display:-webkit-flex;-webkit-flex-direction:column}.uni-media-list-text-top[data-v-6e84243a]{width:100%;font-size:%?28?%;line-height:%?40?%}.uni-ellipsis[data-v-6e84243a],.uni-media-list-text-bottom[data-v-6e84243a],.uni-media-list-text-top[data-v-6e84243a]{overflow:hidden;white-space:nowrap;text-overflow:ellipsis;-o-text-overflow:ellipsis}.list[data-v-6e84243a]{width:100%;height:%?100?%;font-size:%?30?%;text-indent:%?40?%;line-height:%?100?%;background-color:#fff;border-bottom:%?3?% solid #f1f1f1}.list_right[data-v-6e84243a]{color:#fdb513;text-align:right;margin-right:%?40?%;margin-top:%?-100?%}.log-input[data-v-6e84243a]{background:#f1f1f1}.body[data-v-6e84243a]{padding:%?40?%;background-color:#fff;border-bottom:%?1?% solid #eee}.img[data-v-6e84243a]{float:right;width:%?220?%;height:%?220?%}.img1[data-v-6e84243a]{color:#ddd;width:%?360?%;height:%?360?%;font-size:%?200?%;text-align:center;line-height:%?360?%;background-color:#eee;border:%?4?% solid #ddd}.image[data-v-6e84243a]{height:%?360?%}.text1[data-v-6e84243a]{font-size:%?36?%;line-height:%?65?%}",""])},"1f64":function(e,t,i){t=e.exports=i("2350")(!1),t.push([e.i,".footer[data-v-3cddadaa]{left:0;bottom:0;width:100%;color:#fff;height:%?100?%;position:fixed;background-color:#181e30}.footer_item[data-v-3cddadaa]{float:left;width:33.3%;height:%?100?%;font-size:%?24?%;text-align:center;color:#7a7e83}.footer_item uni-image[data-v-3cddadaa]{top:%?10?%;width:%?46?%;height:%?46?%;margin-bottom:%?10?%}.footer_item.big_item[data-v-3cddadaa]{top:%?-40?%;position:relative}.footer_item.big_item uni-image[data-v-3cddadaa]{width:%?100?%;height:%?100?%}.active[data-v-3cddadaa]{color:#5d8afc}",""])},"22c1":function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a={methods:{jump:function(e){uni.navigateTo({url:e})},change_nav:function(e){this.$store.commit("change_page",e)}},computed:{footer_nav:function(){return this.$store.state.footer_store.footer_nav},now_index:function(){return uni.getStorageSync("css")}}};t.default=a},"2a95":function(e,t,i){"use strict";var a=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("v-uni-view",{staticClass:"content"},[i("v-uni-view",{staticClass:"list"},[e._v("消耗积分"),i("v-uni-view",{staticClass:"list_right"},[e._v(e._s(e.adopt.integral))])],1),i("v-uni-view",{staticClass:"list"},[e._v("转让方"),i("v-uni-view",{staticClass:"list_right"},[e._v(e._s(e.adopt.nickname))])],1),i("v-uni-view",{staticClass:"list"},[e._v("转让方手机"),i("v-uni-view",{staticClass:"list_right"},[e._v(e._s(e.adopt.account))])],1),i("v-uni-view",{staticClass:"list"},[e._v("区块金额"),i("v-uni-view",{staticClass:"list_right"},[e._v(e._s(e.adopt.price))])],1),i("v-uni-view",{staticStyle:{padding:"10upx"}}),i("v-uni-view",{staticClass:"account"},[i("v-uni-view",{staticClass:"title"},[e._v("转让方收款账号")]),e._l(e.card_list,function(t,a){return i("v-uni-view",{key:a,staticClass:"uni-list-cell",attrs:{"hover-class":"uni-list-cell-hover"}},[i("v-uni-view",{staticClass:"uni-list-cell-navigate uni-navigate-right uni-media-list"},[i("v-uni-view",{staticClass:"uni-media-list-logo"},[i("v-uni-image",{attrs:{src:t.logo}})],1),i("v-uni-view",{staticClass:"uni-media-list-body"},[i("v-uni-view",{staticClass:"uni-media-list-text-top"},[e._v("账户名称："+e._s(t.titleofaccount))]),i("v-uni-view",{staticClass:"uni-media-list-text-top"},[e._v("账户账号："+e._s(t.account))]),i("v-uni-view",{staticClass:"uni-media-list-text-top"},[e._v("账户类型："+e._s(t.typename))])],1)],1)],1)})],2),i("v-uni-view",{staticClass:"body"},[i("v-uni-view",{staticClass:"text1"},[e._v("上传付款凭证：")]),e.imageSrc?[i("v-uni-image",{staticClass:"image",attrs:{src:e.imageSrc,mode:"widthFix"},on:{click:function(t){t=e.$handleEvent(t),e.chooseImage(t)}}})]:[i("v-uni-view",{staticClass:"img1"},[i("v-uni-view",{staticClass:"uni-hello-addfile",on:{click:function(t){t=e.$handleEvent(t),e.chooseImage(t)}}},[e._v("+")])],1)]],2),i("v-uni-view",{staticClass:"body"},[i("v-uni-view",{staticClass:"log-input"},[i("v-uni-text",[e._v("二级密码")]),i("v-uni-input",{attrs:{type:"text",name:"passtwo",password:"true",maxlength:"6",placeholder:"输入二级密码"},model:{value:e.passtwo,callback:function(t){e.passtwo=t},expression:"passtwo"}})],1),i("v-uni-button",{staticClass:"btn-area",on:{click:function(t){t=e.$handleEvent(t),e.submit(t)}}},[e._v("确认付款")])],1),i("footerNav")],1)},o=[];i.d(t,"a",function(){return a}),i.d(t,"b",function(){return o})},"2b07":function(e,t,i){"use strict";var a=i("377b"),o=i.n(a);o.a},3444:function(e,t,i){"use strict";i.r(t);var a=i("d8ed"),o=i("d96f");for(var n in o)"default"!==n&&function(e){i.d(t,e,function(){return o[e]})}(n);i("94bf");var r=i("2877"),s=Object(r["a"])(o["default"],a["a"],a["b"],!1,null,"3cddadaa",null);t["default"]=s.exports},"377b":function(e,t,i){var a=i("0534");"string"===typeof a&&(a=[[e.i,a,""]]),a.locals&&(e.exports=a.locals);var o=i("4f06").default;o("55c48f60",a,!0,{sourceMap:!1,shadowMode:!1})},"5f6f":function(e,t,i){var a=i("1f64");"string"===typeof a&&(a=[[e.i,a,""]]),a.locals&&(e.exports=a.locals);var o=i("4f06").default;o("fbc8b054",a,!0,{sourceMap:!1,shadowMode:!1})},"94bf":function(e,t,i){"use strict";var a=i("5f6f"),o=i.n(a);o.a},9979:function(e,t,i){"use strict";i.r(t);var a=i("e7d9"),o=i.n(a);for(var n in a)"default"!==n&&function(e){i.d(t,e,function(){return a[e]})}(n);t["default"]=o.a},d8ed:function(e,t,i){"use strict";var a=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("v-uni-view",[i("v-uni-view",{staticClass:"footer"},e._l(e.footer_nav,function(t,a){return i("v-uni-view",{key:a,class:"footer_item "+("big"==t.size?"big_item":""),staticStyle:{width:"33.3%"},on:{click:function(t){t=e.$handleEvent(t),e.change_nav(a)}}},[i("v-uni-view",{on:{click:function(i){i=e.$handleEvent(i),e.jump(t.pagePath)}}},[i("v-uni-image",{attrs:{src:a==e.now_index?t.select_icon:t.icon,mode:""}}),i("v-uni-view",{class:a==e.now_index?"active":""},[e._v(e._s(t.name))])],1)],1)}))],1)},o=[];i.d(t,"a",function(){return a}),i.d(t,"b",function(){return o})},d96f:function(e,t,i){"use strict";i.r(t);var a=i("22c1"),o=i.n(a);for(var n in a)"default"!==n&&function(e){i.d(t,e,function(){return a[e]})}(n);t["default"]=o.a},e7d9:function(module,exports,__webpack_require__){"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var _service=_interopRequireDefault(__webpack_require__("00d8")),_footer_nav=_interopRequireDefault(__webpack_require__("3444"));function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}var userInfo=_service.default.getUserInfo(),_default={components:{footerNav:_footer_nav.default},data:function(){return{id:uni.getStorageSync("adopt_id"),token:uni.getStorageSync("token"),user:uni.getStorageSync("user"),imageSrc:"",passtwo:"",card_list:[],adopt:""}},onShow:function(){_service.default.auth(this,_service.default.api.record.details+"?token="+this.token,{id:this.id},function(e,t){1==t.code&&(e.adopt=t.data.detail,e.card_list=t.data.detail.seller_paymentmethod)}),_service.default.auth(this,_service.default.api.center.type+"?token="+this.token,{},function(e,t){if(1==t.code){var i=t.data.typelist;e.type_list=i}})},methods:{chooseImage:function(){var e=this;uni.chooseImage({count:1,sizeType:["compressed"],sourceType:["album"],success:function(t){var i=t.tempFilePaths[0];e.imageSrc=i},fail:function(e){console.log("chooseImage fail",e)}})},submit:function submit(){if(console.log(self.passtwo),""!=this.imageSrc)if(this.passtwo.length<6)uni.showToast({icon:"none",title:"请输入六位的二级密码"});else var uploadTask=uni.uploadFile({url:_service.default.api.record.update+"?token="+this.token,filePath:this.imageSrc,name:"file",formData:{id:this.id,pwd2:this.passtwo},success:function success(res){res=res.data,res=eval("("+res+")"),console.log(res),1==res.code?uni.navigateTo({url:"/pages/record/successful"}):uni.showToast({icon:"none",title:res.msg})}});else uni.showToast({icon:"none",title:"请上传付款凭证"})}}};exports.default=_default},f267:function(e,t,i){"use strict";i.r(t);var a=i("2a95"),o=i("9979");for(var n in o)"default"!==n&&function(e){i.d(t,e,function(){return o[e]})}(n);i("2b07");var r=i("2877"),s=Object(r["a"])(o["default"],a["a"],a["b"],!1,null,"6e84243a",null);t["default"]=s.exports}}]);