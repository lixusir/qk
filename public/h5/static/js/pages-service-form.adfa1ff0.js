(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-service-form"],{"00d8":function(t,e,n){"use strict";function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{},i=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(i=i.concat(Object.getOwnPropertySymbols(n).filter(function(t){return Object.getOwnPropertyDescriptor(n,t).enumerable}))),i.forEach(function(e){a(t,e,n[e])})}return t}function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var o="USER_KEY",r="TOKEN_KEY",c=function(){var t="";return t=uni.getStorageSync(o),t||{avatar:"../../static/img/avatar.png",bottom_text:"广州锐合技术支持QQ：8396048",level_name:"普通会员",nickname:"锐合网络",uid:0,icode:"18024553545"}},s=function(t){uni.setStorage({key:o,data:t})},u=function(t){uni.setStorageSync(r,t)},d=function(){return uni.getStorageSync(r)},l=function(){uni.clearStorage()},f=function(t){uni.setStorageSync("uid",t)},g=function(){return uni.getStorageSync("uid")},v=function(t){uni.setStorageSync("logid",t)},m=function(){return uni.getStorageSync("logid")},p="http://blockcat.8396048.com/",h={index:p+"default/index",home:{info:p+"port/member/info"},main:{bazaar:p+"port/index/index",order:p+"port/index/appointment"},center:{code:p+"port/member/verifycode",password:p+"port/member/changePwd",passtwo:p+"port/member/changePwd2",pid:p+"port/member/realname",close:p+"port/member/changeMethodStatus",card:p+"port/member/myPaymentMethod",type:p+"port/member/getPaymentType",submit:p+"port/member/submitMethod",message:p+"port/member/systemMessage",team:p+"port/member/myTeam"},service:{insert:p+"port/server_center/workorder",submit:p+"port/server_center/submitWorkorder",order:p+"port/server_center/submitWorkorder"},login:{login:p+"port/login",logo:p+"port/login/get_enter_logo",forget:p+"port/login/forgetpwd"},reg:{register:p+"port/login/register",code:p+"port/login/verifycode"},interests:{integral:p+"port/member/integralLog",roll:p+"port/member/givingIntegral"},record:{pay:p+"port/order/pay",adopt:p+"port/order/index",make:p+"port/member/appointment",update:p+"port/order/pay",passtwo:p+"record/payment",submit:p+"record/payment",complaint:p+"record/payment"}},b=function(t,e,n,a){var o=this,r=uni.getStorageSync("token");""==r&&uni.reLaunch({url:"/pages/login/login"});n=i({token:uni.getStorageSync("token")},n);uni.request({url:e,method:"GET",data:n,success:function(e){e=e.data;1==e.code?a(t,e):400==e.code?(uni.setStorageSync("token",""),setTimeout(function(){uni.reLaunch({url:"/pages/login/login"})},2e3)):uni.showToast({icon:"none",title:e.msg})},fail:function(t){uni.showToast({icon:"none",title:"网站消息获取错误"})},complete:function(t){t=t.data;13==t.code&&(uni.showToast({icon:"none",title:t.msg}),o.removeToken(),uni.reLaunch({url:"/pages/login/login"})),uni.hideLoading()}})},_={api:h,auth:b,setToken:u,getToken:d,removeToken:l,getUserInfo:c,setUserInfo:s,setId:f,getId:g,setLogid:v,getLogid:m};e.default=_},"02c9":function(t,e,n){var i=n("d388");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var a=n("4f06").default;a("314555c4",i,!0,{sourceMap:!1,shadowMode:!1})},"06a4":function(t,e,n){"use strict";var i=n("02c9"),a=n.n(i);a.a},2884:function(t,e,n){var i=n("3f7b");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var a=n("4f06").default;a("1ce482d2",i,!0,{sourceMap:!1,shadowMode:!1})},"3f7b":function(t,e,n){e=t.exports=n("2350")(!1),e.push([t.i,".footer[data-v-2d5235dc]{left:0;bottom:0;width:100%;color:#fff;height:%?100?%;position:fixed;background-color:#fff}.footer_item[data-v-2d5235dc]{float:left;width:33.3%;height:%?100?%;font-size:%?24?%;text-align:center;color:#7a7e83}.footer_item uni-image[data-v-2d5235dc]{top:%?10?%;width:%?46?%;height:%?46?%}.footer_item.big_item[data-v-2d5235dc]{top:%?-40?%;position:relative}.footer_item.big_item uni-image[data-v-2d5235dc]{width:%?100?%;height:%?100?%}.active[data-v-2d5235dc]{color:#5d8afc}.tab_text[data-v-2d5235dc]{width:100%;font-size:%?20?%;line-height:%?40?%;margin-top:%?-14?%;text-align:center}.tab_text1[data-v-2d5235dc]{width:100%;color:#fdb513;font-size:%?20?%;line-height:%?40?%;margin-top:%?-14?%;text-align:center}",""])},7059:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i={methods:{jump:function(t,e){uni.navigateTo({url:t})},change_nav:function(t){this.$store.commit("change_page",t)}},computed:{tabBar:function(){return this.$store.state.footer_store.tabBars},now_index:function(){return uni.getStorageSync("tab")}}};e.default=i},"7a50":function(t,e,n){"use strict";var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",[n("v-uni-view",{staticClass:"footer"},[t._l(t.tabBar,function(e,i){return n("v-uni-view",{key:i,staticClass:"footer_item",staticStyle:{width:"33.3%"},on:{click:function(e){e=t.$handleEvent(e),t.change_nav(i)}}},[n("v-uni-view",{on:{click:function(n){n=t.$handleEvent(n),t.jump(e.pagePath,e.id)}}},[n("v-uni-image",{attrs:{src:i==t.now_index?e.selectedIconPath:e.iconPath,mode:""}}),n("v-uni-view",{class:"tab_text "+(i==t.now_index?"active":"")},[t._v(t._s(e.text))])],1)],1)}),n("v-uni-view",{staticClass:"footer_item",staticStyle:{width:"33.3%"}},[n("v-uni-view",{on:{click:function(e){e=t.$handleEvent(e),t.jump("/pages/main/service")}}},[n("v-uni-image",{attrs:{src:"/static/tabbar/main.png",mode:""}}),n("v-uni-view",{staticClass:"tab_text1"},[t._v("返回鱼窝")])],1)],1)],2)],1)},a=[];n.d(e,"a",function(){return i}),n.d(e,"b",function(){return a})},"80fe":function(t,e,n){"use strict";n.r(e);var i=n("7059"),a=n.n(i);for(var o in i)"default"!==o&&function(t){n.d(e,t,function(){return i[t]})}(o);e["default"]=a.a},"8bcb":function(module,exports,__webpack_require__){"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var _service=_interopRequireDefault(__webpack_require__("00d8")),_tabBar=_interopRequireDefault(__webpack_require__("8c07"));function _interopRequireDefault(t){return t&&t.__esModule?t:{default:t}}var _default={components:{tabBar:_tabBar.default},data:function(){return{id:"",contact:"",title:"",status:"",content:"",imageSrc:"",token:uni.getStorageSync("token")}},methods:{chooseImage:function(){var t=this;uni.chooseImage({count:1,sizeType:["compressed"],sourceType:["album"],success:function(e){var n=e.tempFilePaths[0];t.imageSrc=n},fail:function(t){console.log("chooseImage fail",t)}})},present:function present(){var url=_service.default.api.service.submit+"?token="+this.token;if(""!=this.contact)if(""!=this.title)if(""!=this.content)if(1!=this.status||""!=this.imageSrc){var data={type:this.id,title:this.title,contact:this.contact,content:this.content};uni.showLoading({title:"提交工单中..."});var uploadTask=uni.uploadFile({url:url,filePath:this.imageSrc,name:"file",formData:data,success:function success(res){res=res.data,res=eval("("+res+")"),1==res.code?(uni.showToast({icon:"none",title:res.msg}),setTimeout(function(){uni.navigateTo({url:"/pages/service/order"})},1e3)):uni.showToast({icon:"none",title:res.msg})}})}else uni.showToast({icon:"none",title:"请上传截图"});else uni.showToast({icon:"none",title:"简要描述不能为空"});else uni.showToast({icon:"none",title:"工单标题不能为空"});else uni.showToast({icon:"none",title:"联系信息不能为空"})}},onLoad:function(){var t=uni.getStorageSync("status");this.id=t.id,this.status=t.status,this.typs=t.type}};exports.default=_default},"8c07":function(t,e,n){"use strict";n.r(e);var i=n("7a50"),a=n("80fe");for(var o in a)"default"!==o&&function(t){n.d(e,t,function(){return a[t]})}(o);n("ad4c");var r=n("2877"),c=Object(r["a"])(a["default"],i["a"],i["b"],!1,null,"2d5235dc",null);e["default"]=c.exports},a4d7:function(t,e,n){"use strict";n.r(e);var i=n("8bcb"),a=n.n(i);for(var o in i)"default"!==o&&function(t){n.d(e,t,function(){return i[t]})}(o);e["default"]=a.a},ad4c:function(t,e,n){"use strict";var i=n("2884"),a=n.n(i);a.a},d2a6:function(t,e,n){"use strict";n.r(e);var i=n("edb4"),a=n("a4d7");for(var o in a)"default"!==o&&function(t){n.d(e,t,function(){return a[t]})}(o);n("06a4");var r=n("2877"),c=Object(r["a"])(a["default"],i["a"],i["b"],!1,null,"1c81aba4",null);e["default"]=c.exports},d388:function(t,e,n){e=t.exports=n("2350")(!1),e.push([t.i,".content[data-v-1c81aba4]{padding:%?30?% 5%}.text[data-v-1c81aba4]{color:#333;font-size:%?26?%}.num[data-v-1c81aba4]{color:red;font-size:%?32?%;margin-top:%?-68?%;text-indent:%?120?%}uni-input[data-v-1c81aba4]{height:%?64?%;font-size:%?26?%;line-height:%?68?%;background:#fff;padding-left:%?32?%;border:%?2?% solid #5d8afc}.img[data-v-1c81aba4]{width:%?160?%;height:%?160?%;background-color:#fff;border:%?2?% solid #5d8afc}.img uni-image[data-v-1c81aba4]{width:80%;height:80%;margin:10%}.image[data-v-1c81aba4]{width:100%}.textarea uni-textarea[data-v-1c81aba4]{width:90%;height:%?200?%;line-height:%?50?%;background:#fff;padding:%?0?% %?32?%;border:%?2?% solid #5d8afc}.btn-area[data-v-1c81aba4]{margin-top:%?200?%}uni-view[data-v-1c81aba4]{height:%?70?%;display:block;font-size:%?30?%;line-height:%?70?%}",""])},edb4:function(t,e,n){"use strict";var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",{staticClass:"content"},[n("v-uni-view",{staticClass:"text"},[t._v("联系信息"),n("v-uni-view",{staticClass:"num"},[t._v("*")])],1),n("v-uni-input",{attrs:{type:"text",maxlength:"20",placeholder:"请填写您注册的手机号"},model:{value:t.contact,callback:function(e){t.contact=e},expression:"contact"}}),n("v-uni-view",{staticClass:"text"},[t._v("工单标题"),n("v-uni-view",{staticClass:"num"},[t._v("*")])],1),n("v-uni-input",{attrs:{type:"text",maxlength:"20",placeholder:"请简单扼要描述本次工单遇到的问题"},model:{value:t.title,callback:function(e){t.title=e},expression:"title"}}),1==t.status?[n("v-uni-view",{staticClass:"text"},[t._v("上传截图"),n("v-uni-view",{staticClass:"num"},[t._v("*")])],1),t.imageSrc?[n("v-uni-image",{staticClass:"image",attrs:{src:t.imageSrc,mode:"widthFix"},on:{click:function(e){e=t.$handleEvent(e),t.chooseImage(e)}}})]:[n("v-uni-view",{staticClass:"img",on:{click:function(e){e=t.$handleEvent(e),t.chooseImage(e)}}},[n("v-uni-image",{attrs:{src:"/static/tabbar/image.png",mode:""}})],1)]]:t._e(),n("v-uni-view",{staticClass:"text"},[t._v("简要描述")]),n("v-uni-view",{staticClass:"textarea"},[n("v-uni-textarea",{attrs:{placeholder:"简要描述",maxlength:"200"},model:{value:t.content,callback:function(e){t.content=e},expression:"content"}})],1),n("v-uni-button",{staticClass:"btn-area",on:{click:function(e){e=t.$handleEvent(e),t.present(e)}}},[t._v("确认添加")]),n("tabBar")],2)},a=[];n.d(e,"a",function(){return i}),n.d(e,"b",function(){return a})}}]);