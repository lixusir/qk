(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-record-details"],{"00d8":function(t,e,i){"use strict";function n(t){for(var e=1;e<arguments.length;e++){var i=null!=arguments[e]?arguments[e]:{},n=Object.keys(i);"function"===typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(i).filter(function(t){return Object.getOwnPropertyDescriptor(i,t).enumerable}))),n.forEach(function(e){a(t,e,i[e])})}return t}function a(t,e,i){return e in t?Object.defineProperty(t,e,{value:i,enumerable:!0,configurable:!0,writable:!0}):t[e]=i,t}Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var o="USER_KEY",r="TOKEN_KEY",c=function(){var t="";return t=uni.getStorageSync(o),t||{avatar:"../../static/img/avatar.png",bottom_text:"广州锐合技术支持QQ：8396048",level_name:"普通会员",nickname:"锐合网络",uid:0,icode:"18024553545"}},s=function(t){uni.setStorage({key:o,data:t})},u=function(t){uni.setStorageSync(r,t)},d=function(){return uni.getStorageSync(r)},l=function(){uni.clearStorage()},f=function(t){uni.setStorageSync("uid",t)},p=function(){return uni.getStorageSync("uid")},v=function(t){uni.setStorageSync("logid",t)},g=function(){return uni.getStorageSync("logid")},b="http://blockcat.8396048.com/",m={index:b+"default/index",home:{info:b+"port/member/info"},main:{bazaar:b+"port/index/index",order:b+"port/index/appointment",adopt:b+"port/index/adopt",result:b+"port/index/adoptResult",info:b+"port/index/confInfo",notice:b+"port/index/notice"},center:{code:b+"port/member/verifycode",password:b+"port/member/changePwd",passtwo:b+"port/member/changePwd2",pid:b+"port/member/realname",close:b+"port/member/changeMethodStatus",card:b+"port/member/myPaymentMethod",type:b+"port/member/getPaymentType",submit:b+"port/member/submitMethod",message:b+"port/member/systemMessage",team:b+"port/member/myTeam",friends:b+"port/member/inviteFriends"},service:{insert:b+"port/server_center/workorder",submit:b+"port/server_center/submitWorkorder",order:b+"port/server_center/workorderList"},login:{login:b+"port/login",logo:b+"port/login/get_enter_logo",forget:b+"port/login/forgetpwd"},reg:{register:b+"port/login/register",code:b+"port/login/verifycode",agree:b+"port/login/get_user_regagree"},interests:{qrcode:b+"port/member/recharge",integral:b+"port/member/integralLog",roll:b+"port/member/givingIntegral",sell:b+"port/member/assetSale",submit:b+"port/member/rechargeSubmit",earnings:b+"port/member/incomeLog"},record:{pay:b+"port/order/pay",adopt:b+"port/order/index",make:b+"port/member/appointment",update:b+"port/order/pay",passtwo:b+"port/order/auditPass",submit:b+"port/order/complaint",complaint:b+"record/payment",transfer:b+"port/order/transfer",details:b+"port/order/detail",undo:b+"port/order/detail"}},h=function(t,e,i,a){var o=this,r=uni.getStorageSync("token");""==r&&(uni.setStorageSync("token",""),uni.reLaunch({url:"/pages/login/login"}));i=n({token:uni.getStorageSync("token")},i);uni.request({url:e,method:"GET",data:i,success:function(e){e=e.data;1==e.code?a(t,e):400==e.code?(uni.setStorageSync("token",""),setTimeout(function(){uni.reLaunch({url:"/pages/login/login"})},2e3)):uni.showToast({icon:"none",title:e.msg})},fail:function(t){console.log(t),uni.showToast({icon:"none",title:"网站消息获取错误"})},complete:function(t){t=t.data;13==t.code&&(uni.showToast({icon:"none",title:t.msg}),o.removeToken(),uni.reLaunch({url:"/pages/login/login"})),uni.hideLoading()}})},w={api:m,auth:h,setToken:u,getToken:d,removeToken:l,getUserInfo:c,setUserInfo:s,setId:f,getId:p,setLogid:v,getLogid:g};e.default=w},"0118":function(t,e,i){e=t.exports=i("2350")(!1),e.push([t.i,".footer[data-v-a41350ac]{left:0;bottom:0;width:100%;color:#fff;z-index:1000;height:%?100?%;position:fixed;background:#181e30}.footer1[data-v-a41350ac]{left:0;bottom:0;width:100%;color:#fff;height:%?100?%;position:fixed;background-color:#fff}.footer_item[data-v-a41350ac]{float:left;width:33.3%;height:%?100?%;font-size:%?24?%;text-align:center;color:#7a7e83}.footer_item uni-image[data-v-a41350ac]{margin-top:%?10?%;width:%?46?%;height:%?46?%;margin-bottom:%?0?%}.footer_item.big_item[data-v-a41350ac]{top:%?-40?%;position:relative}.footer_item.big_item uni-image[data-v-a41350ac]{width:%?100?%;height:%?100?%}.actives[data-v-a41350ac]{color:#5d8afc}.actives1[data-v-a41350ac]{color:#5d8afc}",""])},"0d09":function(t,e,i){"use strict";var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",[t.now_index<3?void 0:[i("v-uni-view",{staticClass:"footer1"},t._l(t.tabBar,function(e,n){return i("v-uni-view",{key:n,staticClass:"footer_item",staticStyle:{width:"50%"}},[i("v-uni-view",{on:{click:function(i){i=t.$handleEvent(i),t.jump(e.pagePath,e.id)}}},[i("v-uni-image",{attrs:{src:e.id==t.now_index?e.selectedIconPath:e.iconPath,mode:""}}),i("v-uni-view",{class:"tab_text "+(e.id==t.now_index?"actives1":"")},[t._v(t._s(e.text))])],1)],1)}),1)]],2)},a=[];i.d(e,"a",function(){return n}),i.d(e,"b",function(){return a})},"0f3b":function(t,e,i){"use strict";var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",{staticClass:"content"},[i("v-uni-view",{staticClass:"text"},[t._v("區塊編號："+t._s(t.cat.ordersn)),i("br"),t._v("區塊貓："+t._s(t.cat.levelname)),i("br"),t._v("價值："+t._s(t.cat.price)),i("br"),t._v("智能合約收益："+t._s(t.cat.cycle)+" 天 / "+t._s(t.cat.figure)+" %"),i("br"),t._v("轉讓時間："+t._s(t.cat.createtime)),i("br"),t._v("轉讓方："+t._s(t.name)),i("br"),t._v("轉讓方聯系電話："+t._s(t.mobile)),i("br"),t._v("領養方："+t._s(t.cat.nickname)),i("br"),t._v("領養方聯系電話："+t._s(t.cat.account)),i("br"),t._v("區塊狀態："),1==t.cat.status?[t._v("待付款")]:2==t.cat.status?[t._v("審核中")]:[t._v("已完成")],i("br"),t._v("收益狀態：等待收益"),i("br")],2),i("v-uni-view",{staticClass:"account"},[i("v-uni-view",{staticClass:"title"},[t._v("轉讓方收款賬號")]),t._l(t.card_list,function(e,n){return i("v-uni-view",{key:n,staticClass:"uni-list-cell",attrs:{"hover-class":"uni-list-cell-hover"}},[i("v-uni-view",{staticClass:"uni-list-cell-navigate uni-navigate-right uni-media-list",on:{click:function(i){i=t.$handleEvent(i),t.popup(e.paymentcode)}}},[i("v-uni-view",{staticClass:"uni-media-list-logo"},[i("v-uni-image",{attrs:{src:e.logo}})],1),i("v-uni-view",{staticClass:"uni-media-list-body"},[i("v-uni-view",{staticClass:"uni-media-list-text-top"},[t._v("賬戶名稱："+t._s(e.titleofaccount))]),i("v-uni-view",{staticClass:"uni-media-list-text-top"},[t._v("賬戶賬號："+t._s(e.account))]),i("v-uni-view",{staticClass:"uni-media-list-text-top"},[t._v("賬戶類型："+t._s(e.typename))])],1)],1)],1)})],2),i("uni-popup",{attrs:{show:t.showPopup,type:"middle"},on:{hidePopup:function(e){e=t.$handleEvent(e),t.hidePopup(e)}}},[i("v-uni-view",{staticClass:"popup"},[i("v-uni-image",{attrs:{src:t.picture}})],1)],1),i("v-uni-view",{staticClass:"credentials"},[i("v-uni-view",{staticClass:"title1"},[t._v("付款憑證")]),t.cat.payment_voucher?[i("v-uni-image",{staticClass:"image",attrs:{src:t.cat.payment_voucher,mode:"widthFix"}})]:[i("v-uni-view",{staticClass:"img1"})]],2),i("footerNav")],1)},a=[];i.d(e,"a",function(){return n}),i.d(e,"b",function(){return a})},"22c1":function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n={data:function(){return{tabBar:[{id:3,iconPath:"/static/tabbar/refer.png",selectedIconPath:"/static/tabbar/referHL.png",pagePath:"/pages/service/repair",text:"提交工單"},{id:4,iconPath:"/static/tabbar/order.png",selectedIconPath:"/static/tabbar/orderHL.png",pagePath:"/pages/service/order",text:"我的工單"}],footer_nav:[{id:0,name:"貓貓集市",icon:"/static/tabbar/template.png",select_icon:"/static/tabbar/templateHL.png",pagePath:"/pages/main/bazaar"},{id:1,name:"服務中心",icon:"/static/tabbar/api.png",select_icon:"/static/tabbar/apiHL.png",pagePath:"/pages/main/service"},{id:2,name:"我的貓窩",icon:"/static/tabbar/component.png",select_icon:"/static/tabbar/componentHL.png",pagePath:"/pages/main/shack"}],now_index:uni.getStorageSync("css")}},methods:{jump:function(t,e){uni.setStorageSync("css",e),this.now_index=e,uni.navigateTo({url:t})}}};e.default=n},"2bde":function(t,e,i){"use strict";i.r(e);var n=i("7869"),a=i("8a4c");for(var o in a)"default"!==o&&function(t){i.d(e,t,function(){return a[t]})}(o);var r=i("2877"),c=Object(r["a"])(a["default"],n["a"],n["b"],!1,null,null,null);e["default"]=c.exports},3444:function(t,e,i){"use strict";i.r(e);var n=i("0d09"),a=i("d96f");for(var o in a)"default"!==o&&function(t){i.d(e,t,function(){return a[t]})}(o);i("5e46");var r=i("2877"),c=Object(r["a"])(a["default"],n["a"],n["b"],!1,null,"a41350ac",null);e["default"]=c.exports},"434e":function(t,e,i){"use strict";i.r(e);var n=i("b56c"),a=i("e38b");for(var o in a)"default"!==o&&function(t){i.d(e,t,function(){return a[t]})}(o);i("c2f0");var r=i("2877"),c=Object(r["a"])(a["default"],n["a"],n["b"],!1,null,"1aead418",null);e["default"]=c.exports},"5e46":function(t,e,i){"use strict";var n=i("d7e4"),a=i.n(n);a.a},"757e":function(t,e,i){e=t.exports=i("2350")(!1),e.push([t.i,".uni-mask[data-v-1aead418]{position:fixed;z-index:998;top:0;right:0;bottom:0;left:0;background-color:rgba(0,0,0,.3)}.uni-popup[data-v-1aead418]{position:fixed;z-index:999;background-color:#fff;-webkit-box-shadow:0 0 %?30?% rgba(0,0,0,.1);box-shadow:0 0 %?30?% rgba(0,0,0,.1)}.uni-popup-middle[data-v-1aead418]{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;width:70%;height:auto;border-radius:%?30?%;top:50%;left:50%;-webkit-transform:translate(-50%,-50%);-ms-transform:translate(-50%,-50%);transform:translate(-50%,-50%);-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;padding:%?30?%}.uni-popup-top[data-v-1aead418]{top:0;left:0;width:100%;height:%?100?%;line-height:%?100?%;text-align:center}.uni-popup-bottom[data-v-1aead418]{left:0;bottom:0;width:100%;height:%?100?%;line-height:%?100?%;text-align:center}",""])},"768f":function(t,e,i){"use strict";i.r(e);var n=i("8592"),a=i.n(n);for(var o in n)"default"!==o&&function(t){i.d(e,t,function(){return n[t]})}(o);e["default"]=a.a},7869:function(t,e,i){"use strict";var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",{staticClass:"uni-icon",class:["uni-icon-"+t.type],style:{color:t.color,"font-size":t.fontSize},on:{click:function(e){e=t.$handleEvent(e),t.onClick()}}})},a=[];i.d(e,"a",function(){return n}),i.d(e,"b",function(){return a})},8592:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n=c(i("00d8")),a=c(i("2bde")),o=c(i("434e")),r=c(i("3444"));function c(t){return t&&t.__esModule?t:{default:t}}n.default.getUserInfo();var s={components:{uniIcon:a.default,uniPopup:o.default,footerNav:r.default},data:function(){return{imageSrc:"",cat:"",card_list:[],name:"",mobile:"",picture:"",showPopup:!1,token:uni.getStorageSync("token"),user:uni.getStorageSync("user"),details:uni.getStorageSync("details")}},methods:{popup:function(t){""!=t&&(this.picture=t,this.showPopup=!0)}},onShow:function(){this.name=this.user.nickname,this.mobile=this.user.account,n.default.auth(this,n.default.api.record.transfer+"?token="+this.token,{type:this.details.type,page:this.details.page},function(t,e){if(1==e.code)for(var i=e.data.orderlist.data,n=0;n<i.length;n++)i[n].id==t.details.id&&(t.cat=i[n],t.card_list=i[n].seller_paymentmethod)})}};e.default=s},"8a4c":function(t,e,i){"use strict";i.r(e);var n=i("ceb8"),a=i.n(n);for(var o in n)"default"!==o&&function(t){i.d(e,t,function(){return n[t]})}(o);e["default"]=a.a},b56c:function(t,e,i){"use strict";var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",[i("v-uni-view",{directives:[{name:"show",rawName:"v-show",value:t.show,expression:"show"}],staticClass:"uni-mask",style:{top:t.offsetTop+"px"},on:{click:function(e){e=t.$handleEvent(e),t.hide(e)}}}),i("v-uni-view",{directives:[{name:"show",rawName:"v-show",value:t.show,expression:"show"}],class:["uni-popup","uni-popup-"+t.type]},[t._v(t._s(t.msg)),t._t("default")],2)],1)},a=[];i.d(e,"a",function(){return n}),i.d(e,"b",function(){return a})},b695:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n={props:{show:{type:Boolean,default:!1},type:{type:String,default:"middle"},msg:{type:String,default:""}},data:function(){var t=0;return{offsetTop:t}},methods:{hide:function(){this.$emit("hidePopup")}}};e.default=n},c038:function(t,e,i){"use strict";var n=i("e99c"),a=i.n(n);a.a},c2f0:function(t,e,i){"use strict";var n=i("d59a"),a=i.n(n);a.a},ceb8:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n={props:{type:String,color:String,size:[Number,String]},computed:{fontSize:function(){return"".concat(this.size,"px")}},methods:{onClick:function(){this.$emit("click")}}};e.default=n},d59a:function(t,e,i){var n=i("757e");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var a=i("4f06").default;a("26636524",n,!0,{sourceMap:!1,shadowMode:!1})},d7e4:function(t,e,i){var n=i("0118");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var a=i("4f06").default;a("42aac8f7",n,!0,{sourceMap:!1,shadowMode:!1})},d96f:function(t,e,i){"use strict";i.r(e);var n=i("22c1"),a=i.n(n);for(var o in n)"default"!==o&&function(t){i.d(e,t,function(){return n[t]})}(o);e["default"]=a.a},d9e9:function(t,e,i){"use strict";i.r(e);var n=i("0f3b"),a=i("768f");for(var o in a)"default"!==o&&function(t){i.d(e,t,function(){return a[t]})}(o);i("c038");var r=i("2877"),c=Object(r["a"])(a["default"],n["a"],n["b"],!1,null,"62cfb596",null);e["default"]=c.exports},e38b:function(t,e,i){"use strict";i.r(e);var n=i("b695"),a=i.n(n);for(var o in n)"default"!==o&&function(t){i.d(e,t,function(){return n[t]})}(o);e["default"]=a.a},e99c:function(t,e,i){var n=i("f50f");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var a=i("4f06").default;a("2b21ea44",n,!0,{sourceMap:!1,shadowMode:!1})},f50f:function(t,e,i){e=t.exports=i("2350")(!1),e.push([t.i,".account[data-v-62cfb596],.credentials[data-v-62cfb596],.text[data-v-62cfb596]{padding:%?26?%;background:#fff;border-bottom:%?2?% solid #bbb}.text[data-v-62cfb596]{color:#333;font-size:%?30?%;line-height:%?70?%}.title[data-v-62cfb596]{color:#333;font-size:%?36?%;padding-bottom:%?20?%}.title1[data-v-62cfb596]{color:#333;font-size:%?36?%;padding-bottom:%?20?%}.uni-media-list[data-v-62cfb596]{width:100%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;padding:%?10?% %?20?%;-webkit-box-sizing:border-box}.uni-list-cell[data-v-62cfb596]{background-color:#fff;border-bottom:%?2?% solid #c8c7cc}.uni-list-cell-hover[data-v-62cfb596]{background-color:#ddd}.uni-media-list-logo[data-v-62cfb596]{width:30%;height:%?110?%}.uni-media-list-logo uni-image[data-v-62cfb596]{width:%?110?%;height:%?110?%}.uni-media-list-body[data-v-62cfb596]{flex:1;width:30%;-ms-flex:1;height:100%;-webkit-flex:1;-webkit-box-flex:1;padding-right:%?40?%;display:-webkit-flex;-webkit-flex-direction:column}.uni-media-list-text-top[data-v-62cfb596]{width:100%;font-size:%?28?%;line-height:%?40?%}.uni-ellipsis[data-v-62cfb596],.uni-media-list-text-bottom[data-v-62cfb596],.uni-media-list-text-top[data-v-62cfb596]{overflow:hidden;white-space:nowrap;text-overflow:ellipsis;-o-text-overflow:ellipsis}.popup[data-v-62cfb596]{width:100%}.popup uni-image[data-v-62cfb596]{width:%?480?%;height:%?480?%;margin:0 5%}.img1[data-v-62cfb596]{color:#ddd;height:%?300?%;font-size:%?200?%;text-align:center;line-height:%?300?%;background-color:#eee;border:%?4?% dashed #ddd}.image[data-v-62cfb596]{height:%?360?%}",""])}}]);