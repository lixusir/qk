(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-record-details"],{"05d7":function(t,e,i){"use strict";var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",[i("v-uni-view",{directives:[{name:"show",rawName:"v-show",value:t.show,expression:"show"}],staticClass:"uni-mask",style:{top:t.offsetTop+"px"},on:{click:function(e){e=t.$handleEvent(e),t.hide(e)}}}),i("v-uni-view",{directives:[{name:"show",rawName:"v-show",value:t.show,expression:"show"}],class:["uni-popup","uni-popup-"+t.type]},[t._v(t._s(t.msg)),t._t("default")],2)],1)},o=[];i.d(e,"a",function(){return n}),i.d(e,"b",function(){return o})},"08dd":function(t,e,i){"use strict";var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",[t.now_index<3?void 0:[i("v-uni-view",{staticClass:"footer1"},[t._l(t.tabBar,function(e,n){return i("v-uni-view",{key:n,staticClass:"footer_item",staticStyle:{width:"33.3%"}},[i("v-uni-view",{on:{click:function(i){i=t.$handleEvent(i),t.jump(e.pagePath,e.id)}}},[i("v-uni-image",{attrs:{src:e.id==t.now_index?e.selectedIconPath:e.iconPath,mode:""}}),i("v-uni-view",{class:"tab_text "+(e.id==t.now_index?"actives1":"")},[t._v(t._s(e.text))])],1)],1)}),i("v-uni-view",{staticClass:"footer_item",staticStyle:{width:"33.3%"}},[i("v-uni-view",{on:{click:function(e){e=t.$handleEvent(e),t.order()}}},[i("v-uni-image",{attrs:{src:"/static/tabbar/main.png",mode:""}}),i("v-uni-view",{staticClass:"tab_text1"},[t._v("返回貓窩")])],1)],1)],2)]],2)},o=[];i.d(e,"a",function(){return n}),i.d(e,"b",function(){return o})},"0df7":function(t,e,i){"use strict";i.r(e);var n=i("8e89"),o=i.n(n);for(var a in n)"default"!==a&&function(t){i.d(e,t,function(){return n[t]})}(a);e["default"]=o.a},"0ea1":function(t,e,i){"use strict";i.r(e);var n=i("1716"),o=i.n(n);for(var a in n)"default"!==a&&function(t){i.d(e,t,function(){return n[t]})}(a);e["default"]=o.a},1716:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n={data:function(){return{tabBar:[{id:3,iconPath:"/static/tabbar/refer.png",selectedIconPath:"/static/tabbar/referHL.png",pagePath:"/pages/service/repair",text:"提交工單"},{id:4,iconPath:"/static/tabbar/order.png",selectedIconPath:"/static/tabbar/orderHL.png",pagePath:"/pages/service/order",text:"我的工單"}],footer_nav:[{id:0,name:"貓貓集市",icon:"/static/tabbar/template.png",select_icon:"/static/tabbar/templateHL.png",pagePath:"/pages/main/bazaar"},{id:1,name:"服務中心",icon:"/static/tabbar/api.png",select_icon:"/static/tabbar/apiHL.png",pagePath:"/pages/main/service"},{id:2,name:"我的貓窩",icon:"/static/tabbar/component.png",select_icon:"/static/tabbar/componentHL.png",pagePath:"/pages/main/shack"}],now_index:uni.getStorageSync("css")}},methods:{jump:function(t,e){uni.setStorageSync("css",e),this.now_index=e,uni.reLaunch({url:t})},order:function(){uni.switchTab({url:"/pages/main/shack"})}}};e.default=n},"1b6e":function(t,e,i){e=t.exports=i("2350")(!1),e.push([t.i,".footer[data-v-5f7461c0]{left:0;bottom:0;width:100%;color:#fff;z-index:1000;height:%?100?%;position:fixed;background:#181e30}.footer1[data-v-5f7461c0]{left:0;bottom:0;width:100%;color:#fff;height:%?100?%;position:fixed;background-color:#fff}.footer_item[data-v-5f7461c0]{float:left;width:33.3%;height:%?100?%;font-size:%?24?%;text-align:center;color:#7a7e83}.footer_item uni-image[data-v-5f7461c0]{margin-top:%?10?%;width:%?46?%;height:%?46?%;margin-bottom:%?0?%}.footer_item.big_item[data-v-5f7461c0]{top:%?-40?%;position:relative}.footer_item.big_item uni-image[data-v-5f7461c0]{width:%?100?%;height:%?100?%}.actives[data-v-5f7461c0]{color:#5d8afc}.actives1[data-v-5f7461c0]{color:#5d8afc}.tab_text1[data-v-5f7461c0]{color:#fdb513}",""])},"1eae":function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n={props:{show:{type:Boolean,default:!1},type:{type:String,default:"middle"},msg:{type:String,default:""}},data:function(){var t=0;return{offsetTop:t}},methods:{hide:function(){this.$emit("hidePopup")}}};e.default=n},2598:function(t,e,i){e=t.exports=i("2350")(!1),e.push([t.i,".account[data-v-7fd39f09],.credentials[data-v-7fd39f09],.text[data-v-7fd39f09]{padding:%?26?%;background:#fff;border-bottom:%?2?% solid #bbb}.text[data-v-7fd39f09]{color:#333;font-size:%?30?%;line-height:%?70?%}.title[data-v-7fd39f09]{color:#333;font-size:%?36?%;padding-bottom:%?20?%}.title1[data-v-7fd39f09]{color:#333;font-size:%?36?%;padding-bottom:%?20?%}.uni-media-list[data-v-7fd39f09]{width:100%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;padding:%?10?% %?20?%;-webkit-box-sizing:border-box}.uni-list-cell[data-v-7fd39f09]{background-color:#fff;border-bottom:%?2?% solid #c8c7cc}.uni-list-cell-hover[data-v-7fd39f09]{background-color:#ddd}.uni-media-list-logo[data-v-7fd39f09]{width:30%;height:%?110?%}.uni-media-list-logo uni-image[data-v-7fd39f09]{width:%?110?%;height:%?110?%}.uni-media-list-body[data-v-7fd39f09]{flex:1;width:30%;-ms-flex:1;height:100%;-webkit-flex:1;-webkit-box-flex:1;padding-right:%?40?%;display:-webkit-flex;-webkit-flex-direction:column}.uni-media-list-text-top[data-v-7fd39f09]{width:100%;font-size:%?28?%;line-height:%?40?%}.uni-ellipsis[data-v-7fd39f09],.uni-media-list-text-bottom[data-v-7fd39f09],.uni-media-list-text-top[data-v-7fd39f09]{overflow:hidden;white-space:nowrap;text-overflow:ellipsis;-o-text-overflow:ellipsis}.img1[data-v-7fd39f09]{color:#ddd;height:%?300?%;font-size:%?200?%;text-align:center;line-height:%?300?%;background-color:#eee;border:%?4?% dashed #ddd}.image[data-v-7fd39f09]{height:%?360?%}",""])},"26c5":function(t,e,i){"use strict";i.r(e);var n=i("4219"),o=i.n(n);for(var a in n)"default"!==a&&function(t){i.d(e,t,function(){return n[t]})}(a);e["default"]=o.a},3696:function(t,e,i){var n=i("b94b");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var o=i("4f06").default;o("3b4d5a8f",n,!0,{sourceMap:!1,shadowMode:!1})},"3bae":function(t,e,i){"use strict";var n=i("3696"),o=i.n(n);o.a},"3bd0":function(t,e,i){var n=i("2598");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var o=i("4f06").default;o("3fb47e5e",n,!0,{sourceMap:!1,shadowMode:!1})},4219:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n={props:{type:String,color:String,size:[Number,String]},computed:{fontSize:function(){return"".concat(this.size,"px")}},methods:{onClick:function(){this.$emit("click")}}};e.default=n},"4d7d":function(t,e,i){"use strict";i.r(e);var n=i("1eae"),o=i.n(n);for(var a in n)"default"!==a&&function(t){i.d(e,t,function(){return n[t]})}(a);e["default"]=o.a},5572:function(t,e,i){"use strict";var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",{staticClass:"uni-icon",class:["uni-icon-"+t.type],style:{color:t.color,"font-size":t.fontSize},on:{click:function(e){e=t.$handleEvent(e),t.onClick()}}})},o=[];i.d(e,"a",function(){return n}),i.d(e,"b",function(){return o})},5692:function(t,e,i){"use strict";i.r(e);var n=i("5572"),o=i("26c5");for(var a in o)"default"!==a&&function(t){i.d(e,t,function(){return o[t]})}(a);var r=i("2877"),s=Object(r["a"])(o["default"],n["a"],n["b"],!1,null,null,null);e["default"]=s.exports},"8ae6":function(t,e,i){"use strict";i.r(e);var n=i("05d7"),o=i("4d7d");for(var a in o)"default"!==a&&function(t){i.d(e,t,function(){return o[t]})}(a);i("3bae");var r=i("2877"),s=Object(r["a"])(o["default"],n["a"],n["b"],!1,null,"d782c096",null);e["default"]=s.exports},"8e89":function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n=s(i("db84")),o=s(i("5692")),a=s(i("8ae6")),r=s(i("b807"));function s(t){return t&&t.__esModule?t:{default:t}}n.default.getUserInfo();var c={components:{uniIcon:o.default,uniPopup:a.default,footerNav:r.default},data:function(){return{imageSrc:"",cat:"",card_list:[],name:"",mobile:"",picture:"",showPopup:!1,token:uni.getStorageSync("token"),user:uni.getStorageSync("user"),details:uni.getStorageSync("details")}},methods:{back:function(){uni.reLaunch({url:"/pages/record/transfer"})},hidePopup:function(){this.showPopup=!1},shut:function(){this.showPopup=!1},popup:function(t){""!=t&&(this.picture=t,this.showPopup=!0)}},onShow:function(){this.name=this.user.nickname,this.mobile=this.user.account,n.default.auth(this,n.default.api.record.transfer+"?token="+this.token,{type:this.details.type,page:this.details.page},function(t,e){if(1==e.code)for(var i=e.data.orderlist.data,n=0;n<i.length;n++)i[n].id==t.details.id&&(t.cat=i[n],t.card_list=i[n].seller_paymentmethod)})}};e.default=c},a2da:function(t,e,i){"use strict";i.r(e);var n=i("b08e"),o=i("0df7");for(var a in o)"default"!==a&&function(t){i.d(e,t,function(){return o[t]})}(a);i("a5e1");var r=i("2877"),s=Object(r["a"])(o["default"],n["a"],n["b"],!1,null,"7fd39f09",null);e["default"]=s.exports},a5e1:function(t,e,i){"use strict";var n=i("3bd0"),o=i.n(n);o.a},b08e:function(t,e,i){"use strict";var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",{staticClass:"content"},[i("v-uni-view",{staticClass:"back"},[i("uni-icon",{attrs:{size:"28",type:"arrowleft"},on:{click:function(e){e=t.$handleEvent(e),t.back()}}})],1),i("v-uni-view",{staticClass:"text"},[t._v("區塊編號："+t._s(t.cat.ordersn)),i("br"),t._v("區塊貓："+t._s(t.cat.levelname)),i("br"),t._v("價值："+t._s(t.cat.price)),i("br"),t._v("智能合約收益："+t._s(t.cat.cycle)+" 天 / "+t._s(t.cat.figure)+" %"),i("br"),t._v("轉讓時間："+t._s(t.cat.createtime)),i("br"),t._v("轉讓方："+t._s(t.name)),i("br"),t._v("轉讓方聯系電話："+t._s(t.mobile)),i("br"),t._v("領養方："+t._s(t.cat.nickname)),i("br"),t._v("領養方聯系電話："+t._s(t.cat.account)),i("br"),t._v("區塊狀態："),0==t.cat.status?[t._v("待轉讓")]:1==t.cat.status?[t._v("轉讓中")]:[t._v("已完成")],i("br"),t._v("收益狀態："),0==t.cat.income_status?[t._v("等待收益")]:1==t.cat.income_status?[t._v("收益中")]:[t._v("收益已完成")],i("br")],2),i("v-uni-view",{staticClass:"account"},[i("v-uni-view",{staticClass:"title"},[t._v("轉讓方收款賬號")]),t._l(t.card_list,function(e,n){return i("v-uni-view",{key:n,staticClass:"uni-list-cell",attrs:{"hover-class":"uni-list-cell-hover"}},[i("v-uni-view",{staticClass:"uni-list-cell-navigate uni-navigate-right uni-media-list",on:{click:function(i){i=t.$handleEvent(i),t.popup(e.paymentcode)}}},[i("v-uni-view",{staticClass:"uni-media-list-logo"},[i("v-uni-image",{attrs:{src:e.logo}})],1),i("v-uni-view",{staticClass:"uni-media-list-body"},[i("v-uni-view",{staticClass:"uni-media-list-text-top"},[t._v("賬戶名稱："+t._s(e.titleofaccount))]),i("v-uni-view",{staticClass:"uni-media-list-text-top"},[t._v("賬戶賬號："+t._s(e.account))]),i("v-uni-view",{staticClass:"uni-media-list-text-top"},[t._v("賬戶類型："+t._s(e.typename))])],1)],1)],1)})],2),i("uni-popup",{attrs:{show:t.showPopup,type:"middle"},on:{hidePopup:function(e){e=t.$handleEvent(e),t.hidePopup(e)}}},[i("v-uni-view",{staticClass:"popup"},[i("v-uni-view",{staticClass:"shut",on:{click:function(e){e=t.$handleEvent(e),t.shut(e)}}},[i("uni-icon",{staticClass:"pop-false",attrs:{type:"close",size:"30"}})],1),i("v-uni-image",{attrs:{src:t.picture}})],1)],1),i("v-uni-view",{staticClass:"credentials"},[i("v-uni-view",{staticClass:"title1"},[t._v("付款憑證")]),t.cat.payment_voucher?[i("v-uni-image",{staticClass:"image",attrs:{src:t.cat.payment_voucher,mode:"widthFix"}})]:[i("v-uni-view",{staticClass:"img1"})]],2),i("footerNav")],1)},o=[];i.d(e,"a",function(){return n}),i.d(e,"b",function(){return o})},b807:function(t,e,i){"use strict";i.r(e);var n=i("08dd"),o=i("0ea1");for(var a in o)"default"!==a&&function(t){i.d(e,t,function(){return o[t]})}(a);i("ef44");var r=i("2877"),s=Object(r["a"])(o["default"],n["a"],n["b"],!1,null,"5f7461c0",null);e["default"]=s.exports},b94b:function(t,e,i){e=t.exports=i("2350")(!1),e.push([t.i,".uni-mask[data-v-d782c096]{position:fixed;z-index:998;top:0;right:0;bottom:0;left:0;background-color:rgba(0,0,0,.3)}.uni-popup[data-v-d782c096]{position:fixed;z-index:999;background-color:#fff;-webkit-box-shadow:0 0 %?30?% rgba(0,0,0,.1);box-shadow:0 0 %?30?% rgba(0,0,0,.1)}.uni-popup-middle[data-v-d782c096]{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;width:70%;height:auto;border-radius:%?30?%;top:50%;left:50%;-webkit-transform:translate(-50%,-50%);-ms-transform:translate(-50%,-50%);transform:translate(-50%,-50%);-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;padding:%?30?%}.uni-popup-top[data-v-d782c096]{top:0;left:0;width:100%;height:%?100?%;line-height:%?100?%;text-align:center}.uni-popup-bottom[data-v-d782c096]{left:0;bottom:0;width:100%;height:%?100?%;line-height:%?100?%;text-align:center}",""])},db84:function(t,e,i){"use strict";function n(t){for(var e=1;e<arguments.length;e++){var i=null!=arguments[e]?arguments[e]:{},n=Object.keys(i);"function"===typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(i).filter(function(t){return Object.getOwnPropertyDescriptor(i,t).enumerable}))),n.forEach(function(e){o(t,e,i[e])})}return t}function o(t,e,i){return e in t?Object.defineProperty(t,e,{value:i,enumerable:!0,configurable:!0,writable:!0}):t[e]=i,t}Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a="USER_KEY",r="TOKEN_KEY",s=function(){var t="";return t=uni.getStorageSync(a),t||{avatar:"../../static/img/avatar.png",bottom_text:"广州锐合技术支持QQ：8396048",level_name:"普通会员",nickname:"锐合网络",uid:0,icode:"18024553545"}},c=function(t){uni.setStorage({key:a,data:t})},u=function(t){uni.setStorageSync(r,t)},d=function(){return uni.getStorageSync(r)},l=function(){uni.clearStorage()},f=function(t){uni.setStorageSync("uid",t)},p=function(){return uni.getStorageSync("uid")},v=function(t){uni.setStorageSync("logid",t)},g=function(){return uni.getStorageSync("logid")},m="http://blockcat.8396048.com/",b={index:m+"default/index",home:{info:m+"port/member/info"},main:{bazaar:m+"port/index/index",order:m+"port/index/appointment",adopt:m+"port/index/adopt",result:m+"port/index/adoptResult",info:m+"port/index/confInfo",notice:m+"port/index/notice"},center:{code:m+"port/member/verifycode",password:m+"port/member/changePwd",passtwo:m+"port/member/changePwd2",pid:m+"port/member/realname",close:m+"port/member/changeMethodStatus",card:m+"port/member/myPaymentMethod",type:m+"port/member/getPaymentType",submit:m+"port/member/submitMethod",message:m+"port/member/systemMessage",team:m+"port/member/myTeam",friends:m+"port/member/inviteFriends"},service:{insert:m+"port/server_center/workorder",submit:m+"port/server_center/submitWorkorder",order:m+"port/server_center/workorderList"},login:{login:m+"port/login",logo:m+"port/login/get_enter_logo",forget:m+"port/login/forgetpwd"},reg:{register:m+"port/login/register",code:m+"port/login/verifycode",agree:m+"port/login/get_user_regagree"},interests:{qrcode:m+"port/member/recharge",integral:m+"port/member/integralLog",roll:m+"port/member/givingIntegral",sell:m+"port/member/assetSale",submit:m+"port/member/rechargeSubmit",earnings:m+"port/member/incomeLog"},record:{pay:m+"port/order/pay",adopt:m+"port/order/index",make:m+"port/member/appointment",update:m+"port/order/pay",passtwo:m+"port/order/auditPass",submit:m+"port/order/complaint",complaint:m+"record/payment",transfer:m+"port/order/transfer",details:m+"port/order/detail",undo:m+"port/order/revoke"}},h=function(t,e,i,o){var a=this,r=uni.getStorageSync("token");""==r&&(uni.setStorageSync("token",""),uni.navigateTo({url:"/pages/login/login"}));i=n({token:uni.getStorageSync("token")},i);uni.request({url:e,method:"GET",data:i,success:function(e){e=e.data;1==e.code?o(t,e):400==e.code?(uni.setStorageSync("token",""),setTimeout(function(){uni.navigateTo({url:"/pages/login/login"})},2e3)):uni.showToast({icon:"none",title:e.msg})},fail:function(t){console.log(t),uni.showToast({icon:"none",title:"网站消息获取错误"})},complete:function(t){t=t.data;13==t.code&&(uni.showToast({icon:"none",title:t.msg}),a.removeToken(),uni.reLaunch({url:"/pages/login/login"})),uni.hideLoading()}})},w={api:b,auth:h,setToken:u,getToken:d,removeToken:l,getUserInfo:s,setUserInfo:c,setId:f,getId:p,setLogid:v,getLogid:g};e.default=w},e82f:function(t,e,i){var n=i("1b6e");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var o=i("4f06").default;o("3bdf2f52",n,!0,{sourceMap:!1,shadowMode:!1})},ef44:function(t,e,i){"use strict";var n=i("e82f"),o=i.n(n);o.a}}]);