(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-interests-recharge"],{"05d7":function(e,t,n){"use strict";var i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-uni-view",[n("v-uni-view",{directives:[{name:"show",rawName:"v-show",value:e.show,expression:"show"}],staticClass:"uni-mask",style:{top:e.offsetTop+"px"},on:{click:function(t){t=e.$handleEvent(t),e.hide(t)}}}),n("v-uni-view",{directives:[{name:"show",rawName:"v-show",value:e.show,expression:"show"}],class:["uni-popup","uni-popup-"+e.type]},[e._v(e._s(e.msg)),e._t("default")],2)],1)},o=[];n.d(t,"a",function(){return i}),n.d(t,"b",function(){return o})},"08dd":function(e,t,n){"use strict";var i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-uni-view",[e.now_index<3?void 0:[n("v-uni-view",{staticClass:"footer1"},[e._l(e.tabBar,function(t,i){return n("v-uni-view",{key:i,staticClass:"footer_item",staticStyle:{width:"33.3%"}},[n("v-uni-view",{on:{click:function(n){n=e.$handleEvent(n),e.jump(t.pagePath,t.id)}}},[n("v-uni-image",{attrs:{src:t.id==e.now_index?t.selectedIconPath:t.iconPath,mode:""}}),n("v-uni-view",{class:"tab_text "+(t.id==e.now_index?"actives1":"")},[e._v(e._s(t.text))])],1)],1)}),n("v-uni-view",{staticClass:"footer_item",staticStyle:{width:"33.3%"}},[n("v-uni-view",{on:{click:function(t){t=e.$handleEvent(t),e.order()}}},[n("v-uni-image",{attrs:{src:"/static/tabbar/main.png",mode:""}}),n("v-uni-view",{staticClass:"tab_text1"},[e._v("返回貓窩")])],1)],1)],2)]],2)},o=[];n.d(t,"a",function(){return i}),n.d(t,"b",function(){return o})},"0ea1":function(e,t,n){"use strict";n.r(t);var i=n("1716"),o=n.n(i);for(var a in i)"default"!==a&&function(e){n.d(t,e,function(){return i[e]})}(a);t["default"]=o.a},1716:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i={data:function(){return{tabBar:[{id:3,iconPath:"/static/tabbar/refer.png",selectedIconPath:"/static/tabbar/referHL.png",pagePath:"/pages/service/repair",text:"提交工單"},{id:4,iconPath:"/static/tabbar/order.png",selectedIconPath:"/static/tabbar/orderHL.png",pagePath:"/pages/service/order",text:"我的工單"}],footer_nav:[{id:0,name:"貓貓集市",icon:"/static/tabbar/template.png",select_icon:"/static/tabbar/templateHL.png",pagePath:"/pages/main/bazaar"},{id:1,name:"服務中心",icon:"/static/tabbar/api.png",select_icon:"/static/tabbar/apiHL.png",pagePath:"/pages/main/service"},{id:2,name:"我的貓窩",icon:"/static/tabbar/component.png",select_icon:"/static/tabbar/componentHL.png",pagePath:"/pages/main/shack"}],now_index:uni.getStorageSync("css")}},methods:{jump:function(e,t){uni.setStorageSync("css",t),this.now_index=t,uni.reLaunch({url:e})},order:function(){uni.switchTab({url:"/pages/main/shack"})}}};t.default=i},"1b6e":function(e,t,n){t=e.exports=n("2350")(!1),t.push([e.i,".footer[data-v-5f7461c0]{left:0;bottom:0;width:100%;color:#fff;z-index:1000;height:%?100?%;position:fixed;background:#181e30}.footer1[data-v-5f7461c0]{left:0;bottom:0;width:100%;color:#fff;height:%?100?%;position:fixed;background-color:#fff}.footer_item[data-v-5f7461c0]{float:left;width:33.3%;height:%?100?%;font-size:%?24?%;text-align:center;color:#7a7e83}.footer_item uni-image[data-v-5f7461c0]{margin-top:%?10?%;width:%?46?%;height:%?46?%;margin-bottom:%?0?%}.footer_item.big_item[data-v-5f7461c0]{top:%?-40?%;position:relative}.footer_item.big_item uni-image[data-v-5f7461c0]{width:%?100?%;height:%?100?%}.actives[data-v-5f7461c0]{color:#5d8afc}.actives1[data-v-5f7461c0]{color:#5d8afc}.tab_text1[data-v-5f7461c0]{color:#fdb513}",""])},"1eae":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i={props:{show:{type:Boolean,default:!1},type:{type:String,default:"middle"},msg:{type:String,default:""}},data:function(){var e=0;return{offsetTop:e}},methods:{hide:function(){this.$emit("hidePopup")}}};t.default=i},"26c5":function(e,t,n){"use strict";n.r(t);var i=n("4219"),o=n.n(i);for(var a in i)"default"!==a&&function(e){n.d(t,e,function(){return i[e]})}(a);t["default"]=o.a},3696:function(e,t,n){var i=n("b94b");"string"===typeof i&&(i=[[e.i,i,""]]),i.locals&&(e.exports=i.locals);var o=n("4f06").default;o("3b4d5a8f",i,!0,{sourceMap:!1,shadowMode:!1})},"3bae":function(e,t,n){"use strict";var i=n("3696"),o=n.n(i);o.a},4219:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i={props:{type:String,color:String,size:[Number,String]},computed:{fontSize:function(){return"".concat(this.size,"px")}},methods:{onClick:function(){this.$emit("click")}}};t.default=i},"4d7d":function(e,t,n){"use strict";n.r(t);var i=n("1eae"),o=n.n(i);for(var a in i)"default"!==a&&function(e){n.d(t,e,function(){return i[e]})}(a);t["default"]=o.a},5572:function(e,t,n){"use strict";var i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-uni-view",{staticClass:"uni-icon",class:["uni-icon-"+e.type],style:{color:e.color,"font-size":e.fontSize},on:{click:function(t){t=e.$handleEvent(t),e.onClick()}}})},o=[];n.d(t,"a",function(){return i}),n.d(t,"b",function(){return o})},5692:function(e,t,n){"use strict";n.r(t);var i=n("5572"),o=n("26c5");for(var a in o)"default"!==a&&function(e){n.d(t,e,function(){return o[e]})}(a);var r=n("2877"),s=Object(r["a"])(o["default"],i["a"],i["b"],!1,null,null,null);t["default"]=s.exports},7902:function(e,t,n){var i=n("a3f1");"string"===typeof i&&(i=[[e.i,i,""]]),i.locals&&(e.exports=i.locals);var o=n("4f06").default;o("82069e80",i,!0,{sourceMap:!1,shadowMode:!1})},"79f5":function(e,t,n){"use strict";n.r(t);var i=n("cd08"),o=n.n(i);for(var a in i)"default"!==a&&function(e){n.d(t,e,function(){return i[e]})}(a);t["default"]=o.a},"8ae6":function(e,t,n){"use strict";n.r(t);var i=n("05d7"),o=n("4d7d");for(var a in o)"default"!==a&&function(e){n.d(t,e,function(){return o[e]})}(a);n("3bae");var r=n("2877"),s=Object(r["a"])(o["default"],i["a"],i["b"],!1,null,"d782c096",null);t["default"]=s.exports},a3f1:function(e,t,n){t=e.exports=n("2350")(!1),t.push([e.i,"uni-page-body[data-v-6d360052]{background:#f7f7f7}.qrcode[data-v-6d360052]{top:%?40?%;width:60%;margin:0 20%}.qrcode uni-image[data-v-6d360052]{width:100%;height:%?600?%}.text1[data-v-6d360052]{font-size:%?32?%;margin-top:%?40?%;text-align:center;line-height:%?50?%}.uni-list-cell[data-v-6d360052]{-webkit-box-pack:start;-webkit-justify-content:flex-start;-ms-flex-pack:start;justify-content:flex-start}.uni-padding-wrap[data-v-6d360052]{overflow:auto;padding:%?40?% 5%}.radio[data-v-6d360052]{width:33.3%;float:left}.radio span[data-v-6d360052]{white-space:nowrap}.body[data-v-6d360052]{margin:%?0?% 5%}.text2[data-v-6d360052]{margin:%?0?% 5%;font-size:%?32?%}.text[data-v-6d360052]{font-size:%?32?%}.img[data-v-6d360052]{color:#ddd;height:%?300?%;font-size:%?40?%;text-align:center;line-height:%?300?%;background-color:#fff;border:%?4?% dashed #ddd}.body .image[data-v-6d360052]{height:%?300?%}.btn-area[data-v-6d360052]{margin:%?30?% 5% %?110?%}body.?%PAGE?%[data-v-6d360052]{background:#f7f7f7}",""])},b807:function(e,t,n){"use strict";n.r(t);var i=n("08dd"),o=n("0ea1");for(var a in o)"default"!==a&&function(e){n.d(t,e,function(){return o[e]})}(a);n("ef44");var r=n("2877"),s=Object(r["a"])(o["default"],i["a"],i["b"],!1,null,"5f7461c0",null);t["default"]=s.exports},b94b:function(e,t,n){t=e.exports=n("2350")(!1),t.push([e.i,".uni-mask[data-v-d782c096]{position:fixed;z-index:998;top:0;right:0;bottom:0;left:0;background-color:rgba(0,0,0,.3)}.uni-popup[data-v-d782c096]{position:fixed;z-index:999;background-color:#fff;-webkit-box-shadow:0 0 %?30?% rgba(0,0,0,.1);box-shadow:0 0 %?30?% rgba(0,0,0,.1)}.uni-popup-middle[data-v-d782c096]{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;width:70%;height:auto;border-radius:%?30?%;top:50%;left:50%;-webkit-transform:translate(-50%,-50%);-ms-transform:translate(-50%,-50%);transform:translate(-50%,-50%);-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;padding:%?30?%}.uni-popup-top[data-v-d782c096]{top:0;left:0;width:100%;height:%?100?%;line-height:%?100?%;text-align:center}.uni-popup-bottom[data-v-d782c096]{left:0;bottom:0;width:100%;height:%?100?%;line-height:%?100?%;text-align:center}",""])},b9b9:function(e,t,n){"use strict";var i=n("7902"),o=n.n(i);o.a},ba92b:function(e,t,n){"use strict";n.r(t);var i=n("e19e"),o=n("79f5");for(var a in o)"default"!==a&&function(e){n.d(t,e,function(){return o[e]})}(a);n("b9b9");var r=n("2877"),s=Object(r["a"])(o["default"],i["a"],i["b"],!1,null,"6d360052",null);t["default"]=s.exports},cd08:function(module,exports,__webpack_require__){"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var _service=_interopRequireDefault(__webpack_require__("db84")),_uniIcon=_interopRequireDefault(__webpack_require__("5692")),_uniPopup=_interopRequireDefault(__webpack_require__("8ae6")),_footer_nav=_interopRequireDefault(__webpack_require__("b807"));function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}var _default={components:{uniIcon:_uniIcon.default,uniPopup:_uniPopup.default,footerNav:_footer_nav.default},data:function(){return{config:uni.getStorageSync("config"),user:uni.getStorageSync("user"),token:uni.getStorageSync("token"),showPopup:!1,imageSrc:"",qrcode:"",number:"",radio:{},actual:0,lines:"",sale:"",current:0,status:1}},onLoad:function(){this.lines=this.config.min_recharge,this.sale=this.config.recharge_discount,_service.default.auth(this,_service.default.api.interests.qrcode+"?token="+this.token,{},function(e,t){1==t.code&&(e.qrcode=t.data.rechargecode,e.radio=t.data.amountlist)})},methods:{back:function(){uni.reLaunch({url:"/pages/interests/integral"})},hidePopup:function(){this.showPopup=!1},shut:function(){this.showPopup=!1},popup:function(){this.showPopup=!0},chooseImage:function(){var e=this;uni.chooseImage({count:1,sizeType:["compressed"],sourceType:["album"],success:function(t){var n=t.tempFilePaths[0];e.imageSrc=n},fail:function(e){console.log("chooseImage fail",e)}})},submit:function(e){var t=this.radio[e];if(this.number=t,this.sale>0){var n=t-this.lines;if(n>=0){var i=this.sale/10;t*=i}}this.actual=t},insert:function insert(){this.actual<=0?uni.showToast({icon:"none",title:"積分充值數量未選擇"}):""!=this.imageSrc?(self=this,uni.showModal({content:"確認充值M分嗎？",cancelText:"取消",confirmText:"確認",confirmColor:"#FFAE00",cancelColor:"#D2D2D2",success:function success(res){if(res.confirm){self.status=0;var uploadTask=uni.uploadFile({url:_service.default.api.interests.submit+"?token="+self.token,filePath:self.imageSrc,name:"file",formData:{integral:self.number},success:function success(res){res=res.data,res=eval("("+res+")"),uni.showToast({icon:"none",title:res.msg}),1==res.code?setTimeout(function(){uni.navigateBack({delta:1})},1e3):self.status=1}})}}})):uni.showToast({icon:"none",title:"請上傳付款截圖"})}}};exports.default=_default},db84:function(e,t,n){"use strict";function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},i=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(i=i.concat(Object.getOwnPropertySymbols(n).filter(function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),i.forEach(function(t){o(e,t,n[t])})}return e}function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a="USER_KEY",r="TOKEN_KEY",s=function(){var e="";return e=uni.getStorageSync(a),e||{avatar:"../../static/img/avatar.png",bottom_text:"广州锐合技术支持QQ：8396048",level_name:"普通会员",nickname:"锐合网络",uid:0,icode:"18024553545"}},c=function(e){uni.setStorage({key:a,data:e})},u=function(e){uni.setStorageSync(r,e)},d=function(){return uni.getStorageSync(r)},l=function(){uni.clearStorage()},f=function(e){uni.setStorageSync("uid",e)},p=function(){return uni.getStorageSync("uid")},v=function(e){uni.setStorageSync("logid",e)},g=function(){return uni.getStorageSync("logid")},m="http://bc.hhwl168.com/",h={index:m+"default/index",home:{info:m+"port/member/info"},main:{bazaar:m+"port/index/index",order:m+"port/index/appointment",adopt:m+"port/index/adopt",result:m+"port/index/adoptResult",info:m+"port/index/confInfo",notice:m+"port/index/notice"},center:{code:m+"port/member/verifycode",password:m+"port/member/changePwd",passtwo:m+"port/member/changePwd2",pid:m+"port/member/realname",close:m+"port/member/changeMethodStatus",card:m+"port/member/myPaymentMethod",type:m+"port/member/getPaymentType",submit:m+"port/member/submitMethod",message:m+"port/member/systemMessage",team:m+"port/member/myTeam",friends:m+"port/member/inviteFriends"},service:{insert:m+"port/server_center/workorder",submit:m+"port/server_center/submitWorkorder",order:m+"port/server_center/workorderList"},login:{login:m+"port/login",logo:m+"port/login/get_enter_logo",forget:m+"port/login/forgetpwd"},reg:{register:m+"port/login/register",code:m+"port/login/verifycode",agree:m+"port/login/get_user_regagree"},interests:{qrcode:m+"port/member/recharge",integral:m+"port/member/integralLog",roll:m+"port/member/givingIntegral",sell:m+"port/member/assetSale",submit:m+"port/member/rechargeSubmit",earnings:m+"port/member/incomeLog",assets:m+"port/member/myAssets"},record:{pay:m+"port/order/pay",adopt:m+"port/order/index",make:m+"port/member/appointment",update:m+"port/order/pay",passtwo:m+"port/order/auditPass",submit:m+"port/order/complaint",complaint:m+"record/payment",transfer:m+"port/order/transfer",details:m+"port/order/detail",undo:m+"port/order/revoke"}},b=function(e,t,n,o){var a=this,r=uni.getStorageSync("token");""==r&&(uni.setStorageSync("token",""),uni.reLaunch({url:"/pages/login/login"}));n=i({token:uni.getStorageSync("token")},n);uni.request({url:t,method:"GET",data:n,success:function(t){t=t.data;1==t.code?o(e,t):400==t.code?(uni.setStorageSync("token",""),setTimeout(function(){uni.reLaunch({url:"/pages/login/login"})},2e3)):uni.showToast({icon:"none",title:t.msg})},fail:function(e){console.log(e),uni.showToast({icon:"none",title:"网站消息获取错误"})},complete:function(e){e=e.data;13==e.code&&(uni.showToast({icon:"none",title:e.msg}),a.removeToken(),uni.reLaunch({url:"/pages/login/login"})),uni.hideLoading()}})},w={api:h,auth:b,setToken:u,getToken:d,removeToken:l,getUserInfo:s,setUserInfo:c,setId:f,getId:p,setLogid:v,getLogid:g};t.default=w},e19e:function(e,t,n){"use strict";var i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-uni-view",{staticClass:"page"},[n("v-uni-view",{staticClass:"back"},[n("uni-icon",{attrs:{size:"28",type:"arrowleft"},on:{click:function(t){t=e.$handleEvent(t),e.back()}}})],1),n("v-uni-view",{staticClass:"qrcode"},[n("v-uni-view",{staticClass:"text1"},[e._v("掃碼付款")]),n("v-uni-image",{attrs:{src:e.qrcode},on:{click:function(t){t=e.$handleEvent(t),e.popup()}}})],1),n("v-uni-form",[n("v-uni-view",{staticClass:"uni-padding-wrap"},[n("v-uni-radio-group",{staticClass:"uni-flex",attrs:{name:"gender"}},[n("v-uni-view",{staticClass:"uni-title"},[e._v("數量")]),e._l(e.radio,function(t,i){return n("v-uni-view",{key:t.id,staticClass:"radio"},[n("v-uni-radio",{on:{click:function(t){t=e.$handleEvent(t),e.submit(i)}}}),n("span",[e._v(e._s(t))])],1)})],2)],1),n("v-uni-view",{staticClass:"text2"},[e._v("實際支付金額:"+e._s(e.actual))]),n("v-uni-view",{staticClass:"body"},[n("v-uni-view",{staticClass:"text"},[e._v("上傳付款截圖：")]),e.imageSrc?[n("v-uni-image",{staticClass:"image",attrs:{src:e.imageSrc,mode:"widthFix"},on:{click:function(t){t=e.$handleEvent(t),e.chooseImage(t)}}})]:[n("v-uni-view",{staticClass:"img"},[n("v-uni-view",{staticClass:"uni-hello-addfile",on:{click:function(t){t=e.$handleEvent(t),e.chooseImage(t)}}},[e._v("上傳付款截圖")])],1)]],2),n("v-uni-view",[1==e.status?[n("v-uni-button",{staticClass:"btn-area",on:{click:function(t){t=e.$handleEvent(t),e.insert(t)}}},[e._v("確認")])]:[n("v-uni-button",{staticClass:"btn-area"},[e._v("確認")])]],2)],1),n("uni-popup",{attrs:{show:e.showPopup,type:"middle"},on:{hidePopup:function(t){t=e.$handleEvent(t),e.hidePopup(t)}}},[n("v-uni-view",{staticClass:"popup"},[n("v-uni-view",{staticClass:"shut",on:{click:function(t){t=e.$handleEvent(t),e.shut(t)}}},[n("uni-icon",{staticClass:"pop-false",attrs:{type:"close",size:"30"}})],1),n("v-uni-image",{attrs:{src:e.qrcode}})],1)],1),n("footerNav")],1)},o=[];n.d(t,"a",function(){return i}),n.d(t,"b",function(){return o})},e82f:function(e,t,n){var i=n("1b6e");"string"===typeof i&&(i=[[e.i,i,""]]),i.locals&&(e.exports=i.locals);var o=n("4f06").default;o("3bdf2f52",i,!0,{sourceMap:!1,shadowMode:!1})},ef44:function(e,t,n){"use strict";var i=n("e82f"),o=n.n(i);o.a}}]);