(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-service-form"],{"00d8":function(e,t,n){"use strict";function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},i=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(i=i.concat(Object.getOwnPropertySymbols(n).filter(function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),i.forEach(function(t){a(e,t,n[t])})}return e}function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o="USER_KEY",r="TOKEN_KEY",c=function(){var e="";return e=uni.getStorageSync(o),e||{avatar:"../../static/img/avatar.png",bottom_text:"广州锐合技术支持QQ：8396048",level_name:"普通会员",nickname:"锐合网络",uid:0,icode:"18024553545"}},s=function(e){uni.setStorage({key:o,data:e})},u=function(e){uni.setStorageSync(r,e)},d=function(){return uni.getStorageSync(r)},l=function(){uni.clearStorage()},f=function(e){uni.setStorageSync("uid",e)},g=function(){return uni.getStorageSync("uid")},p=function(e){uni.setStorageSync("logid",e)},v=function(){return uni.getStorageSync("logid")},m="http://blockcat.8396048.com/",h={index:m+"default/index",home:{info:m+"port/member/info"},main:{bazaar:m+"port/index/index",order:m+"port/index/appointment",adopt:m+"port/index/adopt",result:m+"port/index/adoptResult",info:m+"port/index/confInfo",notice:m+"port/index/notice"},center:{code:m+"port/member/verifycode",password:m+"port/member/changePwd",passtwo:m+"port/member/changePwd2",pid:m+"port/member/realname",close:m+"port/member/changeMethodStatus",card:m+"port/member/myPaymentMethod",type:m+"port/member/getPaymentType",submit:m+"port/member/submitMethod",message:m+"port/member/systemMessage",team:m+"port/member/myTeam",friends:m+"port/member/inviteFriends"},service:{insert:m+"port/server_center/workorder",submit:m+"port/server_center/submitWorkorder",order:m+"port/server_center/workorderList"},login:{login:m+"port/login",logo:m+"port/login/get_enter_logo",forget:m+"port/login/forgetpwd"},reg:{register:m+"port/login/register",code:m+"port/login/verifycode",agree:m+"port/login/get_user_regagree"},interests:{qrcode:m+"port/member/recharge",integral:m+"port/member/integralLog",roll:m+"port/member/givingIntegral",sell:m+"port/member/assetSale",submit:m+"port/member/rechargeSubmit",earnings:m+"port/member/incomeLog"},record:{pay:m+"port/order/pay",adopt:m+"port/order/index",make:m+"port/member/appointment",update:m+"port/order/pay",passtwo:m+"port/order/auditPass",submit:m+"port/order/complaint",complaint:m+"record/payment",transfer:m+"port/order/transfer",details:m+"port/order/detail",undo:m+"port/order/detail"}},b=function(e,t,n,a){var o=this,r=uni.getStorageSync("token");""==r&&(uni.setStorageSync("token",""),uni.reLaunch({url:"/pages/login/login"}));n=i({token:uni.getStorageSync("token")},n);uni.request({url:t,method:"GET",data:n,success:function(t){t=t.data;1==t.code?a(e,t):400==t.code?(uni.setStorageSync("token",""),setTimeout(function(){uni.reLaunch({url:"/pages/login/login"})},2e3)):uni.showToast({icon:"none",title:t.msg})},fail:function(e){console.log(e),uni.showToast({icon:"none",title:"网站消息获取错误"})},complete:function(e){e=e.data;13==e.code&&(uni.showToast({icon:"none",title:e.msg}),o.removeToken(),uni.reLaunch({url:"/pages/login/login"})),uni.hideLoading()}})},_={api:h,auth:b,setToken:u,getToken:d,removeToken:l,getUserInfo:c,setUserInfo:s,setId:f,getId:g,setLogid:p,getLogid:v};t.default=_},"0118":function(e,t,n){t=e.exports=n("2350")(!1),t.push([e.i,".footer[data-v-a41350ac]{left:0;bottom:0;width:100%;color:#fff;z-index:1000;height:%?100?%;position:fixed;background:#181e30}.footer1[data-v-a41350ac]{left:0;bottom:0;width:100%;color:#fff;height:%?100?%;position:fixed;background-color:#fff}.footer_item[data-v-a41350ac]{float:left;width:33.3%;height:%?100?%;font-size:%?24?%;text-align:center;color:#7a7e83}.footer_item uni-image[data-v-a41350ac]{margin-top:%?10?%;width:%?46?%;height:%?46?%;margin-bottom:%?0?%}.footer_item.big_item[data-v-a41350ac]{top:%?-40?%;position:relative}.footer_item.big_item uni-image[data-v-a41350ac]{width:%?100?%;height:%?100?%}.actives[data-v-a41350ac]{color:#5d8afc}.actives1[data-v-a41350ac]{color:#5d8afc}",""])},"0d09":function(e,t,n){"use strict";var i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-uni-view",[e.now_index<3?void 0:[n("v-uni-view",{staticClass:"footer1"},e._l(e.tabBar,function(t,i){return n("v-uni-view",{key:i,staticClass:"footer_item",staticStyle:{width:"50%"}},[n("v-uni-view",{on:{click:function(n){n=e.$handleEvent(n),e.jump(t.pagePath,t.id)}}},[n("v-uni-image",{attrs:{src:t.id==e.now_index?t.selectedIconPath:t.iconPath,mode:""}}),n("v-uni-view",{class:"tab_text "+(t.id==e.now_index?"actives1":"")},[e._v(e._s(t.text))])],1)],1)}),1)]],2)},a=[];n.d(t,"a",function(){return i}),n.d(t,"b",function(){return a})},"22c1":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i={data:function(){return{tabBar:[{id:3,iconPath:"/static/tabbar/refer.png",selectedIconPath:"/static/tabbar/referHL.png",pagePath:"/pages/service/repair",text:"提交工單"},{id:4,iconPath:"/static/tabbar/order.png",selectedIconPath:"/static/tabbar/orderHL.png",pagePath:"/pages/service/order",text:"我的工單"}],footer_nav:[{id:0,name:"貓貓集市",icon:"/static/tabbar/template.png",select_icon:"/static/tabbar/templateHL.png",pagePath:"/pages/main/bazaar"},{id:1,name:"服務中心",icon:"/static/tabbar/api.png",select_icon:"/static/tabbar/apiHL.png",pagePath:"/pages/main/service"},{id:2,name:"我的貓窩",icon:"/static/tabbar/component.png",select_icon:"/static/tabbar/componentHL.png",pagePath:"/pages/main/shack"}],now_index:uni.getStorageSync("css")}},methods:{jump:function(e,t){uni.setStorageSync("css",t),this.now_index=t,uni.navigateTo({url:e})}}};t.default=i},"2bde":function(e,t,n){"use strict";n.r(t);var i=n("7869"),a=n("8a4c");for(var o in a)"default"!==o&&function(e){n.d(t,e,function(){return a[e]})}(o);var r=n("2877"),c=Object(r["a"])(a["default"],i["a"],i["b"],!1,null,null,null);t["default"]=c.exports},3444:function(e,t,n){"use strict";n.r(t);var i=n("0d09"),a=n("d96f");for(var o in a)"default"!==o&&function(e){n.d(t,e,function(){return a[e]})}(o);n("5e46");var r=n("2877"),c=Object(r["a"])(a["default"],i["a"],i["b"],!1,null,"a41350ac",null);t["default"]=c.exports},"5e46":function(e,t,n){"use strict";var i=n("d7e4"),a=n.n(i);a.a},7869:function(e,t,n){"use strict";var i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-uni-view",{staticClass:"uni-icon",class:["uni-icon-"+e.type],style:{color:e.color,"font-size":e.fontSize},on:{click:function(t){t=e.$handleEvent(t),e.onClick()}}})},a=[];n.d(t,"a",function(){return i}),n.d(t,"b",function(){return a})},"7ebe":function(e,t,n){var i=n("cf4d");"string"===typeof i&&(i=[[e.i,i,""]]),i.locals&&(e.exports=i.locals);var a=n("4f06").default;a("b0ed8930",i,!0,{sourceMap:!1,shadowMode:!1})},"8a4c":function(e,t,n){"use strict";n.r(t);var i=n("ceb8"),a=n.n(i);for(var o in i)"default"!==o&&function(e){n.d(t,e,function(){return i[e]})}(o);t["default"]=a.a},"8bcb":function(module,exports,__webpack_require__){"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var _service=_interopRequireDefault(__webpack_require__("00d8")),_uniIcon=_interopRequireDefault(__webpack_require__("2bde")),_footer_nav=_interopRequireDefault(__webpack_require__("3444"));function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}var _default={components:{uniIcon:_uniIcon.default,footerNav:_footer_nav.default},data:function(){return{id:"",contact:"",title:"",status:"",content:"",imageSrc:"",token:uni.getStorageSync("token")}},methods:{chooseImage:function(){var e=this;uni.chooseImage({count:1,sizeType:["compressed"],sourceType:["album"],success:function(t){var n=t.tempFilePaths[0];e.imageSrc=n},fail:function(e){console.log("chooseImage fail",e)}})},present:function present(){var url=_service.default.api.service.submit+"?token="+this.token;if(""!=this.contact)if(""!=this.title)if(""!=this.content)if(1!=this.status||""!=this.imageSrc){var data={type:this.id,title:this.title,contact:this.contact,content:this.content};uni.showLoading({title:"提交工單中..."});var uploadTask=uni.uploadFile({url:url,filePath:this.imageSrc,name:"file",formData:data,success:function success(res){res=res.data,res=eval("("+res+")"),1==res.code?(uni.showToast({icon:"none",title:res.msg}),setTimeout(function(){uni.navigateTo({url:"/pages/service/order"})},1e3)):uni.showToast({icon:"none",title:res.msg})}})}else uni.showToast({icon:"none",title:"請上傳截圖"});else uni.showToast({icon:"none",title:"簡要描述不能為空"});else uni.showToast({icon:"none",title:"工單標題不能為空"});else uni.showToast({icon:"none",title:"聯系信息不能為空"})}},onLoad:function(){var e=uni.getStorageSync("status");this.id=e.id,this.status=e.status,this.typs=e.type}};exports.default=_default},a4d7:function(e,t,n){"use strict";n.r(t);var i=n("8bcb"),a=n.n(i);for(var o in i)"default"!==o&&function(e){n.d(t,e,function(){return i[e]})}(o);t["default"]=a.a},c7a6:function(e,t,n){"use strict";var i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-uni-view",{staticClass:"content"},[n("v-uni-view",{staticClass:"text"},[e._v("聯系信息"),n("v-uni-view",{staticClass:"num"},[e._v("*")])],1),n("v-uni-input",{attrs:{type:"text",maxlength:"20",placeholder:"請填寫您註冊的手機號"},model:{value:e.contact,callback:function(t){e.contact=t},expression:"contact"}}),n("v-uni-view",{staticClass:"text"},[e._v("工單標題"),n("v-uni-view",{staticClass:"num"},[e._v("*")])],1),n("v-uni-input",{attrs:{type:"text",maxlength:"20",placeholder:"請簡單扼要描述本次工單遇到的問題"},model:{value:e.title,callback:function(t){e.title=t},expression:"title"}}),n("v-uni-view",{staticClass:"text"},[e._v("簡要描述")]),n("v-uni-view",{staticClass:"textarea"},[n("v-uni-textarea",{attrs:{placeholder:"簡要描述",maxlength:"200"},model:{value:e.content,callback:function(t){e.content=t},expression:"content"}})],1),1==e.status?[n("v-uni-view",{staticClass:"body"},[n("v-uni-view",{staticClass:"text"},[e._v("上傳截圖"),n("v-uni-view",{staticClass:"num"},[e._v("*")])],1),e.imageSrc?[n("v-uni-image",{staticClass:"image",attrs:{src:e.imageSrc,mode:"widthFix"},on:{click:function(t){t=e.$handleEvent(t),e.chooseImage(t)}}})]:[n("v-uni-view",{staticClass:"img1"},[n("v-uni-view",{staticClass:"addfile",on:{click:function(t){t=e.$handleEvent(t),e.chooseImage(t)}}},[e._v("上傳截圖")])],1)]],2)]:e._e(),n("v-uni-view",{staticClass:"button"},[n("v-uni-button",{staticClass:"btn-area",on:{click:function(t){t=e.$handleEvent(t),e.present(t)}}},[e._v("確認添加")])],1),n("footerNav")],2)},a=[];n.d(t,"a",function(){return i}),n.d(t,"b",function(){return a})},ceb8:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i={props:{type:String,color:String,size:[Number,String]},computed:{fontSize:function(){return"".concat(this.size,"px")}},methods:{onClick:function(){this.$emit("click")}}};t.default=i},cf4d:function(e,t,n){t=e.exports=n("2350")(!1),t.push([e.i,".content[data-v-3187bec8]{padding:%?30?% 5%}.back[data-v-3187bec8]{height:0;display:block;font-size:15px;line-height:0;margin-top:%?-36?%;margin-left:%?-36?%}.text[data-v-3187bec8]{color:#333;font-size:%?26?%}.num[data-v-3187bec8]{color:red;font-size:%?32?%;margin-top:%?-68?%;text-indent:%?120?%}uni-input[data-v-3187bec8]{height:%?64?%;font-size:%?26?%;line-height:%?68?%;background:#fff;padding-left:%?32?%;border:%?2?% solid #5d8afc}.img[data-v-3187bec8]{background-color:#fff;border:%?2?% solid #5d8afc}.img1[data-v-3187bec8]{color:#ddd;height:%?300?%;font-size:%?40?%;text-align:center;line-height:%?300?%;background-color:#fff;border:%?4?% dashed #ddd}.addfile[data-v-3187bec8]{height:100%;height:100%;line-height:%?300?%}.img uni-image[data-v-3187bec8]{margin:10%;width:%?160?%;height:%?160?%}.textarea[data-v-3187bec8]{height:%?200?%}.textarea uni-textarea[data-v-3187bec8]{width:90%;height:%?200?%;line-height:%?50?%;background:#fff;padding:%?0?% %?32?%;border:%?2?% solid #5d8afc}.btn-area[data-v-3187bec8]{width:100%;height:%?90?%;margin:%?20?% %?0?% %?120?%}uni-view[data-v-3187bec8]{height:%?70?%;display:block;font-size:%?30?%;line-height:%?70?%}",""])},d015:function(e,t,n){"use strict";var i=n("7ebe"),a=n.n(i);a.a},d2a6:function(e,t,n){"use strict";n.r(t);var i=n("c7a6"),a=n("a4d7");for(var o in a)"default"!==o&&function(e){n.d(t,e,function(){return a[e]})}(o);n("d015");var r=n("2877"),c=Object(r["a"])(a["default"],i["a"],i["b"],!1,null,"3187bec8",null);t["default"]=c.exports},d7e4:function(e,t,n){var i=n("0118");"string"===typeof i&&(i=[[e.i,i,""]]),i.locals&&(e.exports=i.locals);var a=n("4f06").default;a("42aac8f7",i,!0,{sourceMap:!1,shadowMode:!1})},d96f:function(e,t,n){"use strict";n.r(t);var i=n("22c1"),a=n.n(i);for(var o in i)"default"!==o&&function(e){n.d(t,e,function(){return i[e]})}(o);t["default"]=a.a}}]);