(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-service-form"],{"176b":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o={props:{type:String,color:String,size:[Number,String]},computed:{fontSize:function(){return"".concat(this.size,"px")}},methods:{onClick:function(){this.$emit("click")}}};t.default=o},"2ed0":function(e,t,n){"use strict";var o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-uni-view",{staticClass:"uni-icon",class:["uni-icon-"+e.type],style:{color:e.color,"font-size":e.fontSize},on:{click:function(t){t=e.$handleEvent(t),e.onClick()}}})},i=[];n.d(t,"a",function(){return o}),n.d(t,"b",function(){return i})},"3aeb":function(e,t,n){"use strict";n.r(t);var o=n("176b"),i=n.n(o);for(var r in o)"default"!==r&&function(e){n.d(t,e,function(){return o[e]})}(r);t["default"]=i.a},"47e2":function(e,t,n){"use strict";n.r(t);var o=n("c3a3"),i=n("a021");for(var r in i)"default"!==r&&function(e){n.d(t,e,function(){return i[e]})}(r);n("6833");var a=n("2877"),s=Object(a["a"])(i["default"],o["a"],o["b"],!1,null,"bc5bed12",null);t["default"]=s.exports},4884:function(e,t,n){t=e.exports=n("2350")(!1),t.push([e.i,"uni-page-body[data-v-bc5bed12]{background:#f2f2f2}.form[data-v-bc5bed12]{margin:0 5%}.text[data-v-bc5bed12]{color:#333;font-size:%?26?%}.num[data-v-bc5bed12]{color:red;font-size:%?32?%;margin-top:%?-68?%;text-indent:%?120?%}uni-input[data-v-bc5bed12]{height:%?64?%;font-size:%?26?%;line-height:%?68?%;background:#fff;padding-left:%?32?%;border:%?2?% solid #5d8afc}.img[data-v-bc5bed12]{background-color:#fff;border:%?2?% solid #5d8afc}.img1[data-v-bc5bed12]{color:#ddd;height:%?300?%;font-size:%?40?%;text-align:center;line-height:%?300?%;background-color:#fff;border:%?4?% dashed #ddd}.addfile[data-v-bc5bed12]{height:100%;height:100%;line-height:%?300?%}.img uni-image[data-v-bc5bed12]{margin:10%;width:%?160?%;height:%?160?%}.textarea[data-v-bc5bed12]{height:%?200?%}.textarea uni-textarea[data-v-bc5bed12]{width:90%;height:%?200?%;line-height:%?50?%;background:#fff;padding:%?0?% %?32?%;border:%?2?% solid #5d8afc}.btn-area[data-v-bc5bed12]{width:100%;height:%?90?%;margin:%?20?% 0}.text[data-v-bc5bed12]{height:%?70?%;display:block;font-size:%?30?%;line-height:%?70?%}body.?%PAGE?%[data-v-bc5bed12]{background:#f2f2f2}",""])},"5d50":function(e,t,n){"use strict";n.r(t);var o=n("2ed0"),i=n("3aeb");for(var r in i)"default"!==r&&function(e){n.d(t,e,function(){return i[e]})}(r);var a=n("2877"),s=Object(a["a"])(i["default"],o["a"],o["b"],!1,null,null,null);t["default"]=s.exports},6833:function(e,t,n){"use strict";var o=n("f9e6"),i=n.n(o);i.a},"8a33":function(module,exports,__webpack_require__){"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var _service=_interopRequireDefault(__webpack_require__("e108")),_uniIcon=_interopRequireDefault(__webpack_require__("5d50"));function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}var _default={components:{uniIcon:_uniIcon.default},data:function(){return{id:"",type:1,contact:"",title:"",status:"",content:"",imageSrc:"",token:uni.getStorageSync("token")}},methods:{back:function(){uni.reLaunch({url:"/pages/service/repair"})},chooseImage:function(){var e=this;uni.chooseImage({count:1,sizeType:["compressed"],sourceType:["album"],success:function(t){var n=t.tempFilePaths[0];e.imageSrc=n},fail:function(e){console.log("chooseImage fail",e)}})},present:function present(){self=this;var url=_service.default.api.service.submit+"?token="+self.token;""!=self.contact?""!=self.title?""!=self.content?1!=self.status||""!=self.imageSrc?uni.showModal({content:"確認提交工單嗎？",cancelText:"取消",confirmText:"確認",confirmColor:"#FFAE00",cancelColor:"#D2D2D2",success:function success(res){if(res.confirm){self.type=0;var uploadTask=uni.uploadFile({url:url,filePath:self.imageSrc,name:"file",formData:{type:self.id,title:self.title,contact:self.contact,content:self.content},success:function success(res){if(res=res.data,res=eval("("+res+")"),1!=res.code)return self.type=1,void uni.showToast({icon:"none",title:res.msg});uni.showToast({icon:"none",title:res.msg}),uni.setStorageSync("css",4),setTimeout(function(){uni.reLaunch({url:"/pages/service/order"})},1e3)}})}}}):uni.showToast({icon:"none",title:"請上傳截圖"}):uni.showToast({icon:"none",title:"簡要描述不能為空"}):uni.showToast({icon:"none",title:"工單標題不能為空"}):uni.showToast({icon:"none",title:"聯系信息不能為空"})}},onLoad:function(){var e=uni.getStorageSync("status");this.id=e.id,this.status=e.status,this.typs=e.type}};exports.default=_default},a021:function(e,t,n){"use strict";n.r(t);var o=n("8a33"),i=n.n(o);for(var r in o)"default"!==r&&function(e){n.d(t,e,function(){return o[e]})}(r);t["default"]=i.a},c3a3:function(e,t,n){"use strict";var o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-uni-view",{staticClass:"page"},[n("v-uni-view",{staticClass:"back"},[n("uni-icon",{attrs:{size:"28",type:"arrowleft"},on:{click:function(t){t=e.$handleEvent(t),e.back()}}})],1),n("v-uni-view",{staticClass:"form"},[n("v-uni-view",{staticClass:"text"},[e._v("聯系信息"),n("v-uni-view",{staticClass:"num"},[e._v("*")])],1),n("v-uni-input",{attrs:{type:"text",maxlength:"20",placeholder:"請填寫您註冊的手機號"},model:{value:e.contact,callback:function(t){e.contact=t},expression:"contact"}}),n("v-uni-view",{staticClass:"text"},[e._v("工單標題"),n("v-uni-view",{staticClass:"num"},[e._v("*")])],1),n("v-uni-input",{attrs:{type:"text",maxlength:"20",placeholder:"請簡單扼要描述本次工單遇到的問題"},model:{value:e.title,callback:function(t){e.title=t},expression:"title"}}),n("v-uni-view",{staticClass:"text"},[e._v("簡要描述")]),n("v-uni-view",{staticClass:"textarea"},[n("v-uni-textarea",{attrs:{placeholder:"簡要描述",maxlength:"200"},model:{value:e.content,callback:function(t){e.content=t},expression:"content"}})],1),1==e.status?[n("v-uni-view",{staticClass:"body"},[n("v-uni-view",{staticClass:"text"},[e._v("上傳截圖"),n("v-uni-view",{staticClass:"num"},[e._v("*")])],1),e.imageSrc?[n("v-uni-image",{staticClass:"image",attrs:{src:e.imageSrc,mode:"widthFix"},on:{click:function(t){t=e.$handleEvent(t),e.chooseImage(t)}}})]:[n("v-uni-view",{staticClass:"img1"},[n("v-uni-view",{staticClass:"addfile",on:{click:function(t){t=e.$handleEvent(t),e.chooseImage(t)}}},[e._v("上傳截圖")])],1)]],2)]:e._e(),n("v-uni-view",{staticClass:"button"},[1==e.type?[n("v-uni-button",{staticClass:"btn-area",on:{click:function(t){t=e.$handleEvent(t),e.present(t)}}},[e._v("確認添加")])]:[n("v-uni-button",{staticClass:"btn-area"},[e._v("確認添加")])]],2)],2)],1)},i=[];n.d(t,"a",function(){return o}),n.d(t,"b",function(){return i})},e108:function(e,t,n){"use strict";function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},o=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(o=o.concat(Object.getOwnPropertySymbols(n).filter(function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),o.forEach(function(t){i(e,t,n[t])})}return e}function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r="USER_KEY",a="TOKEN_KEY",s=function(){var e="";return e=uni.getStorageSync(r),e},c=function(e){uni.setStorage({key:r,data:e})},u=function(e,t){var n=[];n.push(e),n.push(t),uni.setStorageSync("User_paw",n)},l=function(e){uni.setStorageSync("memory",e)},d=function(e){uni.setStorageSync(a,e)},f=function(){return uni.getStorageSync(a)},p=function(){uni.clearStorage()},g=function(e){uni.setStorageSync("uid",e)},m=function(){return uni.getStorageSync("uid")},v=function(e){uni.setStorageSync("logid",e)},b=function(){return uni.getStorageSync("logid")},h={arch:"魚餌",receive:"捕撈",status:"繁殖中",freeze:"凍結中",species:"區塊魚"},y="http://202.53.139.53/",w={index:y+"default/index",home:{info:y+"port/member/info"},main:{bazaar:y+"port/index/index",order:y+"port/index/appointment",adopt:y+"port/index/adopt",result:y+"port/index/adoptResult",info:y+"port/index/confInfo",notice:y+"port/index/notice"},center:{code:y+"port/member/verifycode",password:y+"port/member/changePwd",passtwo:y+"port/member/changePwd2",pid:y+"port/member/realname",close:y+"port/member/changeMethodStatus",card:y+"port/member/myPaymentMethod",type:y+"port/member/getPaymentType",submit:y+"port/member/submitMethod",message:y+"port/member/systemMessage",team:y+"port/member/myTeam",friends:y+"port/member/inviteFriends"},service:{insert:y+"port/server_center/workorder",submit:y+"port/server_center/submitWorkorder",order:y+"port/server_center/workorderList",weixin:y+""},login:{login:y+"port/login",logo:y+"port/login/get_enter_logo",forget:y+"port/login/forgetpwd"},reg:{register:y+"port/login/register",code:y+"port/login/verifycode",agree:y+"port/login/get_user_regagree",reg:y+"port/member/uploadimg"},interests:{qrcode:y+"port/member/recharge",integral:y+"port/member/integralLog",roll:y+"port/member/givingIntegral",sell:y+"port/member/assetSale",submit:y+"port/member/rechargeSubmit",earnings:y+"port/member/incomeLog",assets:y+"port/member/myAssets",detailed:y+"port/member/getVirtualmoneyLog"},record:{pay:y+"port/order/pay",adopt:y+"port/order/index",make:y+"port/member/appointment",update:y+"port/order/pay",passtwo:y+"port/order/auditPass",submit:y+"port/order/complaint",complaint:y+"record/payment",transfer:y+"port/order/transfer",details:y+"port/order/detail",undo:y+"port/order/revoke"}},_=function(e,t,n,i){var r=this,a=uni.getStorageSync("token");""==a&&(uni.setStorageSync("token",""),uni.reLaunch({url:"/pages/login/login"}));n=o({token:uni.getStorageSync("token")},n);uni.request({url:t,method:"GET",data:n,success:function(t){t=t.data;1==t.code?i(e,t):400==t.code?(uni.setStorageSync("token",""),setTimeout(function(){uni.reLaunch({url:"/pages/login/login"})},2e3)):uni.showToast({icon:"none",title:t.msg})},fail:function(e){console.log(e),uni.showToast({icon:"none",title:"网站消息获取错误"})},complete:function(e){e=e.data;13==e.code&&(uni.showToast({icon:"none",title:e.msg}),r.removeToken(),uni.reLaunch({url:"/pages/login/login"})),uni.hideLoading()}})},S={api:w,auth:_,setToken:d,getToken:f,removeToken:p,getUserInfo:s,setUserInfo:c,setId:g,getId:m,setLogid:v,getLogid:b,config:h,User_paw:u,Memory:l};t.default=S},f9e6:function(e,t,n){var o=n("4884");"string"===typeof o&&(o=[[e.i,o,""]]),o.locals&&(e.exports=o.locals);var i=n("4f06").default;i("89c5654a",o,!0,{sourceMap:!1,shadowMode:!1})}}]);