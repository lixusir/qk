(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-main-bazaar~pages-record-adopt"],{"0fe8":function(e,t,n){"use strict";n.r(t);var o=n("a67f"),i=n.n(o);for(var a in o)"default"!==a&&function(e){n.d(t,e,function(){return o[e]})}(a);t["default"]=i.a},1424:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o={name:"uni-countdown",props:{bgrColor:{type:String,default:"#FFFFFF"},borderColor:{type:String,default:"#000000"},fontColor:{type:String,value:"#000000"},splitorColor:{type:String,default:"#000000"},timer:{type:String,default:""}},data:function(){return{time:uni.getStorageSync("time"),setTime:null,h:"00",i:"00",s:"00",leftTime:0}},created:function(e){var t=/^([0-9]{4})-([0-9]{2})-([0-9]{2}) ([0-9]{2}):([0-9]{2}):([0-9]{2})$/,n=this.timer.match(t);if(null==n)return console.log("時間格式錯誤"),!1;var o=parseInt(n[1]);if(o<1e3)return console.log("時間格式錯誤"),!1;var i=parseInt(n[2]),a=parseInt(n[3]),r=parseInt(n[4]);if(r<0||r>24)return console.log("時間格式錯誤"),!1;var d=parseInt(n[5]);if(d<0||d>60)return console.log("時間格式錯誤"),!1;var s=parseInt(n[6]);if(s<0||s>60)return console.log("時間格式錯誤"),!1;var c=new Date(o,i-1,a,r,d,s);this.leftTime=c,this.countDown(this),this.setInterValFunc(this)},beforeDestroy:function(){clearInterval(this.setTime)},methods:{setInterValFunc:function(e){this.setTime=setInterval(function(){e.countDown(e)},1e3)},countDown:function(e){var t=e.leftTime-new Date;if(1==e.time){if(t>0)var n=parseInt(t/1e3/60/60,10),o=parseInt(t/1e3/60%60,10),i=parseInt(t/1e3%60,10);else n=0,o=0,i=0;n<10&&(n="0"+n),o<10&&(o="0"+o),e.h=n,e.i=o}else if(t>0)i=parseInt(t/1e3,10);else{i=0;uni.setStorageSync("sec",1)}i<10&&(i="0"+i),e.s=i}}};t.default=o},2302:function(e,t,n){"use strict";var o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-uni-view",{staticClass:"load-more"},[n("v-uni-view",{directives:[{name:"show",rawName:"v-show",value:1===e.loadingType&&e.showImage,expression:"loadingType === 1 && showImage"}],staticClass:"loading-img"},[n("v-uni-view",{staticClass:"load1"},[n("v-uni-view",{style:{background:e.color}}),n("v-uni-view",{style:{background:e.color}}),n("v-uni-view",{style:{background:e.color}}),n("v-uni-view",{style:{background:e.color}})],1),n("v-uni-view",{staticClass:"load2"},[n("v-uni-view",{style:{background:e.color}}),n("v-uni-view",{style:{background:e.color}}),n("v-uni-view",{style:{background:e.color}}),n("v-uni-view",{style:{background:e.color}})],1),n("v-uni-view",{staticClass:"load3"},[n("v-uni-view",{style:{background:e.color}}),n("v-uni-view",{style:{background:e.color}}),n("v-uni-view",{style:{background:e.color}}),n("v-uni-view",{style:{background:e.color}})],1)],1),n("v-uni-text",{staticClass:"loading-text",style:{color:e.color}},[e._v(e._s(0===e.loadingType?e.contentText.contentdown:1===e.loadingType?e.contentText.contentrefresh:e.contentText.contentnomore))])],1)},i=[];n.d(t,"a",function(){return o}),n.d(t,"b",function(){return i})},"2c1e":function(e,t,n){t=e.exports=n("2350")(!1),t.push([e.i,".uni-countdown[data-v-3211a225]{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;padding:%?2?% 0;-webkit-flex-wrap:nowrap;-ms-flex-wrap:nowrap;flex-wrap:nowrap;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center}.uni-countdown-splitor[data-v-3211a225]{width:auto!important;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;line-height:%?44?%;padding:0 %?5?%}.uni-countdown-numbers[data-v-3211a225]{line-height:%?44?%;width:auto!important;padding:0 %?10?%;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;height:%?44?%;border-radius:%?8?%;margin:0 %?5?%;border:1px solid #000;font-size:%?22?%}",""])},"4b56":function(e,t,n){"use strict";var o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-uni-view",{staticClass:"uni-countdown"},[1==e.time?[e._v(e._s(e.h)+"時"+e._s(e.i)+"分"+e._s(e.s)+"秒")]:[e._v(e._s(e.s)+"秒")]],2)},i=[];n.d(t,"a",function(){return o}),n.d(t,"b",function(){return i})},"527f":function(e,t,n){t=e.exports=n("2350")(!1),t.push([e.i,".load-more[data-v-553de63f]{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;height:%?80?%;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center}.loading-img[data-v-553de63f]{height:24px;width:24px;margin-right:10px}.loading-text[data-v-553de63f]{font-size:%?28?%;color:#777}.loading-img>uni-view[data-v-553de63f]{position:absolute}.load1[data-v-553de63f],.load2[data-v-553de63f],.load3[data-v-553de63f]{height:24px;width:24px}.load2[data-v-553de63f]{-webkit-transform:rotate(30deg);-ms-transform:rotate(30deg);transform:rotate(30deg)}.load3[data-v-553de63f]{-webkit-transform:rotate(60deg);-ms-transform:rotate(60deg);transform:rotate(60deg)}.loading-img>uni-view uni-view[data-v-553de63f]{width:6px;height:2px;border-top-left-radius:1px;border-bottouni-left-radius:1px;background:#777;position:absolute;opacity:.2;transforuni-origin:50%;-webkit-animation:load-data-v-553de63f 1.56s ease infinite}.loading-img>uni-view uni-view[data-v-553de63f]:first-child{-webkit-transform:rotate(90deg);-ms-transform:rotate(90deg);transform:rotate(90deg);top:2px;left:9px}.loading-img>uni-view uni-view[data-v-553de63f]:nth-child(2){-webkit-transform:rotate(180deg);top:11px;right:0}.loading-img>uni-view uni-view[data-v-553de63f]:nth-child(3){-webkit-transform:rotate(270deg);-ms-transform:rotate(270deg);transform:rotate(270deg);bottom:2px;left:9px}.loading-img>uni-view uni-view[data-v-553de63f]:nth-child(4){top:11px;left:0}.load1 uni-view[data-v-553de63f]:first-child{-webkit-animation-delay:0s;animation-delay:0s}.load2 uni-view[data-v-553de63f]:first-child{-webkit-animation-delay:.13s;animation-delay:.13s}.load3 uni-view[data-v-553de63f]:first-child{-webkit-animation-delay:.26s;animation-delay:.26s}.load1 uni-view[data-v-553de63f]:nth-child(2){-webkit-animation-delay:.39s;animation-delay:.39s}.load2 uni-view[data-v-553de63f]:nth-child(2){-webkit-animation-delay:.52s;animation-delay:.52s}.load3 uni-view[data-v-553de63f]:nth-child(2){-webkit-animation-delay:.65s;animation-delay:.65s}.load1 uni-view[data-v-553de63f]:nth-child(3){-webkit-animation-delay:.78s;animation-delay:.78s}.load2 uni-view[data-v-553de63f]:nth-child(3){-webkit-animation-delay:.91s;animation-delay:.91s}.load3 uni-view[data-v-553de63f]:nth-child(3){-webkit-animation-delay:1.04s;animation-delay:1.04s}.load1 uni-view[data-v-553de63f]:nth-child(4){-webkit-animation-delay:1.17s;animation-delay:1.17s}.load2 uni-view[data-v-553de63f]:nth-child(4){-webkit-animation-delay:1.3s;animation-delay:1.3s}.load3 uni-view[data-v-553de63f]:nth-child(4){-webkit-animation-delay:1.43s;animation-delay:1.43s}@-webkit-keyframes load-data-v-553de63f{0%{opacity:1}to{opacity:.2}}",""])},"992d":function(e,t,n){var o=n("2c1e");"string"===typeof o&&(o=[[e.i,o,""]]),o.locals&&(e.exports=o.locals);var i=n("4f06").default;i("4e7a82c2",o,!0,{sourceMap:!1,shadowMode:!1})},a67f:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o={props:{type:String,color:String,size:[Number,String]},computed:{fontSize:function(){return"".concat(this.size,"px")}},methods:{onClick:function(){this.$emit("click")}}};t.default=o},b463:function(e,t,n){"use strict";n.r(t);var o=n("fc8b"),i=n("0fe8");for(var a in i)"default"!==a&&function(e){n.d(t,e,function(){return i[e]})}(a);var r=n("2877"),d=Object(r["a"])(i["default"],o["a"],o["b"],!1,null,null,null);t["default"]=d.exports},bb6d:function(e,t,n){"use strict";n.r(t);var o=n("2302"),i=n("cab7");for(var a in i)"default"!==a&&function(e){n.d(t,e,function(){return i[e]})}(a);n("c79e");var r=n("2877"),d=Object(r["a"])(i["default"],o["a"],o["b"],!1,null,"553de63f",null);t["default"]=d.exports},bc12:function(e,t,n){"use strict";n.r(t);var o=n("1424"),i=n.n(o);for(var a in o)"default"!==a&&function(e){n.d(t,e,function(){return o[e]})}(a);t["default"]=i.a},c172:function(e,t,n){"use strict";n.r(t);var o=n("4b56"),i=n("bc12");for(var a in i)"default"!==a&&function(e){n.d(t,e,function(){return i[e]})}(a);n("c885");var r=n("2877"),d=Object(r["a"])(i["default"],o["a"],o["b"],!1,null,"3211a225",null);t["default"]=d.exports},c79e:function(e,t,n){"use strict";var o=n("f38e"),i=n.n(o);i.a},c885:function(e,t,n){"use strict";var o=n("992d"),i=n.n(o);i.a},cab7:function(e,t,n){"use strict";n.r(t);var o=n("cbf7"),i=n.n(o);for(var a in o)"default"!==a&&function(e){n.d(t,e,function(){return o[e]})}(a);t["default"]=i.a},cbf7:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o={name:"load-more",props:{loadingType:{type:Number,default:0},showImage:{type:Boolean,default:!0},color:{type:String,default:"#777777"},contentText:{type:Object,default:function(){return{contentdown:"上拉顯示更多",contentrefresh:"正在加載...",contentnomore:"沒有更多數據了"}}}},data:function(){return{}}};t.default=o},cedc:function(e,t,n){"use strict";function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},o=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(o=o.concat(Object.getOwnPropertySymbols(n).filter(function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),o.forEach(function(t){i(e,t,n[t])})}return e}function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a="USER_KEY",r="TOKEN_KEY",d=function(){var e="";return e=uni.getStorageSync(a),e||{avatar:"../../static/img/avatar.png",bottom_text:"广州锐合技术支持QQ：8396048",level_name:"普通会员",nickname:"锐合网络",uid:0,icode:"18024553545"}},s=function(e){uni.setStorage({key:a,data:e})},c=function(e){uni.setStorageSync(r,e)},l=function(){return uni.getStorageSync(r)},u=function(){uni.clearStorage()},f=function(e){uni.setStorageSync("uid",e)},p=function(){return uni.getStorageSync("uid")},m=function(e){uni.setStorageSync("logid",e)},g=function(){return uni.getStorageSync("logid")},v="http://bc.hhwl168.com/",b={index:v+"default/index",home:{info:v+"port/member/info"},main:{bazaar:v+"port/index/index",order:v+"port/index/appointment",adopt:v+"port/index/adopt",result:v+"port/index/adoptResult",info:v+"port/index/confInfo",notice:v+"port/index/notice"},center:{code:v+"port/member/verifycode",password:v+"port/member/changePwd",passtwo:v+"port/member/changePwd2",pid:v+"port/member/realname",close:v+"port/member/changeMethodStatus",card:v+"port/member/myPaymentMethod",type:v+"port/member/getPaymentType",submit:v+"port/member/submitMethod",message:v+"port/member/systemMessage",team:v+"port/member/myTeam",friends:v+"port/member/inviteFriends"},service:{insert:v+"port/server_center/workorder",submit:v+"port/server_center/submitWorkorder",order:v+"port/server_center/workorderList"},login:{login:v+"port/login",logo:v+"port/login/get_enter_logo",forget:v+"port/login/forgetpwd"},reg:{register:v+"port/login/register",code:v+"port/login/verifycode",agree:v+"port/login/get_user_regagree"},interests:{qrcode:v+"port/member/recharge",integral:v+"port/member/integralLog",roll:v+"port/member/givingIntegral",sell:v+"port/member/assetSale",submit:v+"port/member/rechargeSubmit",earnings:v+"port/member/incomeLog",assets:v+"port/member/myAssets"},record:{pay:v+"port/order/pay",adopt:v+"port/order/index",make:v+"port/member/appointment",update:v+"port/order/pay",passtwo:v+"port/order/auditPass",submit:v+"port/order/complaint",complaint:v+"record/payment",transfer:v+"port/order/transfer",details:v+"port/order/detail",undo:v+"port/order/revoke"}},w=function(e,t,n,i){var a=this,r=uni.getStorageSync("token");""==r&&(uni.setStorageSync("token",""),uni.reLaunch({url:"/pages/login/login"}));n=o({token:uni.getStorageSync("token")},n);uni.request({url:t,method:"GET",data:n,success:function(t){t=t.data;1==t.code?i(e,t):400==t.code?(uni.setStorageSync("token",""),setTimeout(function(){uni.reLaunch({url:"/pages/login/login"})},2e3)):uni.showToast({icon:"none",title:t.msg})},fail:function(e){console.log(e),uni.showToast({icon:"none",title:"网站消息获取错误"})},complete:function(e){e=e.data;13==e.code&&(uni.showToast({icon:"none",title:e.msg}),a.removeToken(),uni.reLaunch({url:"/pages/login/login"})),uni.hideLoading()}})},y={api:b,auth:w,setToken:c,getToken:l,removeToken:u,getUserInfo:d,setUserInfo:s,setId:f,getId:p,setLogid:m,getLogid:g};t.default=y},f38e:function(e,t,n){var o=n("527f");"string"===typeof o&&(o=[[e.i,o,""]]),o.locals&&(e.exports=o.locals);var i=n("4f06").default;i("40ed0ad4",o,!0,{sourceMap:!1,shadowMode:!1})},fc8b:function(e,t,n){"use strict";var o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-uni-view",{staticClass:"uni-icon",class:["uni-icon-"+e.type],style:{color:e.color,"font-size":e.fontSize},on:{click:function(t){t=e.$handleEvent(t),e.onClick()}}})},i=[];n.d(t,"a",function(){return o}),n.d(t,"b",function(){return i})}}]);