(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-record-transfer"],{"00d8":function(t,e,n){"use strict";function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{},i=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(i=i.concat(Object.getOwnPropertySymbols(n).filter(function(t){return Object.getOwnPropertyDescriptor(n,t).enumerable}))),i.forEach(function(e){a(t,e,n[e])})}return t}function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var o="USER_KEY",r="TOKEN_KEY",c=function(){var t="";return t=uni.getStorageSync(o),t||{avatar:"../../static/img/avatar.png",bottom_text:"广州锐合技术支持QQ：8396048",level_name:"普通会员",nickname:"锐合网络",uid:0,icode:"18024553545"}},s=function(t){uni.setStorage({key:o,data:t})},d=function(t){uni.setStorageSync(r,t)},u=function(){return uni.getStorageSync(r)},l=function(){uni.clearStorage()},f=function(t){uni.setStorageSync("uid",t)},v=function(){return uni.getStorageSync("uid")},g=function(t){uni.setStorageSync("logid",t)},b=function(){return uni.getStorageSync("logid")},m="/",p={index:m+"default/index",home:{info:m+"port/member/info"},main:{bazaar:m+"port/index/index",order:m+"port/index/appointment",adopt:m+"port/index/adopt"},center:{code:m+"port/member/verifycode",password:m+"port/member/changePwd",passtwo:m+"port/member/changePwd2",pid:m+"port/member/realname",close:m+"port/member/changeMethodStatus",card:m+"port/member/myPaymentMethod",type:m+"port/member/getPaymentType",submit:m+"port/member/submitMethod",message:m+"port/member/systemMessage",team:m+"port/member/myTeam",friends:m+"port/member/inviteFriends"},service:{insert:m+"port/server_center/workorder",submit:m+"port/server_center/submitWorkorder",order:m+"port/server_center/submitWorkorder"},login:{login:m+"port/login",logo:m+"port/login/get_enter_logo",forget:m+"port/login/forgetpwd"},reg:{register:m+"port/login/register",code:m+"port/login/verifycode"},interests:{qrcode:m+"port/member/integralLog",integral:m+"port/member/integralLog",roll:m+"port/member/givingIntegral",sell:m+"port/member/assetSale"},record:{pay:m+"port/order/pay",adopt:m+"port/order/index",make:m+"port/member/appointment",update:m+"port/order/pay",passtwo:m+"port/order/auditPass",submit:m+"port/order/complaint",complaint:m+"record/payment",transfer:m+"port/order/transfer",details:m+"port/order/detail",undo:m+"port/order/detail"}},w=function(t,e,n,a){var o=this,r=uni.getStorageSync("token");""==r&&uni.reLaunch({url:"/pages/login/login"});n=i({token:uni.getStorageSync("token")},n);uni.request({url:e,method:"GET",data:n,success:function(e){e=e.data;1==e.code?a(t,e):400==e.code?(uni.setStorageSync("token",""),setTimeout(function(){uni.reLaunch({url:"/pages/login/login"})},2e3)):uni.showToast({icon:"none",title:e.msg})},fail:function(t){console.log(t),uni.showToast({icon:"none",title:"网站消息获取错误"})},complete:function(t){t=t.data;13==t.code&&(uni.showToast({icon:"none",title:t.msg}),o.removeToken(),uni.reLaunch({url:"/pages/login/login"})),uni.hideLoading()}})},h={api:p,auth:w,setToken:d,getToken:u,removeToken:l,getUserInfo:c,setUserInfo:s,setId:f,getId:v,setLogid:g,getLogid:b};e.default=h},"0970":function(t,e,n){"use strict";var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",{staticClass:"uni-tab-bar"},[n("v-uni-scroll-view",{staticClass:"uni-swiper-tab",attrs:{id:"tab-bar","scroll-x":"","scroll-left":t.scrollLeft}},t._l(t.tabBars,function(e,i){return n("v-uni-view",{key:e.id,class:["swiper-tab-list",t.tabIndex==i?"active":""],attrs:{id:e.id,"data-current":i},on:{click:function(n){n=t.$handleEvent(n),t.tapTab(i,e.id)}}},[t._v(t._s(e.name))])})),t._l(t.transfer_list,function(e,i){return n("v-uni-view",{key:e.id,staticClass:"card"},[n("v-uni-view",{staticClass:"card-number"},[n("v-uni-image",{staticClass:"img",attrs:{src:"../../static/function/number.png"}}),t.tabid<4?[n("v-uni-view",{staticClass:"number",on:{click:function(n){n=t.$handleEvent(n),t.details(e.id,t.tabid)}}},[t._v("区块编号："+t._s(e.ordersn))])]:[n("v-uni-view",{staticClass:"number"},[t._v("区块编号："+t._s(e.ordersn))])]],2),n("v-uni-view",{staticClass:"card-content"},[n("v-uni-view",{staticClass:"text"},[n("v-uni-view",[t._v("区块鱼：")]),n("v-uni-view",{staticClass:"array"},[t._v(t._s(e.levelname))])],1),n("v-uni-view",{staticClass:"text"},[n("v-uni-view",[t._v("价值：")]),n("v-uni-view",{staticClass:"array"},[t._v(t._s(e.price))])],1)],1),t.tabid>1?[t.tabid<4?[n("v-uni-view",{staticClass:"text"},[n("v-uni-view",[t._v("智能合约收益：")]),n("v-uni-view",{staticClass:"array"},[t._v(t._s(e.cycle)+" 天 / "+t._s(e.figure)+" %")])],1)]:t._e()]:t._e(),n("v-uni-view",{staticClass:"text"},[n("v-uni-view",[t._v("转让时间：")]),n("v-uni-view",{staticClass:"array"},[t._v(t._s(e.createtime))])],1),n("v-uni-view",{staticClass:"card-bottom"},[1==t.tabid?[n("v-uni-view",{staticClass:"card-lable"},[t._v("闲置")])]:2==t.tabid?[n("v-uni-view",{staticClass:"card-lable"},[t._v("区块写入中")]),n("v-uni-view",{staticClass:"check1",on:{click:function(n){n=t.$handleEvent(n),t.complaint(e.id)}}},[t._v("申诉")]),n("v-uni-view",{staticClass:"check1",on:{click:function(n){n=t.$handleEvent(n),t.passtwo(e.id)}}},[t._v("确认")])]:3==t.tabid?[n("v-uni-view",{staticClass:"card-lable"},[t._v("已完成（收益中）")])]:[n("v-uni-view",{staticClass:"card-lable"},[t._v("已申诉")]),n("v-uni-view",{staticClass:"check1"},[t._v("撤销申诉")])]],2)],2)}),n("uni-load-more",{attrs:{loadingType:t.loadingType,contentText:t.contentText}}),n("footerNav")],2)},a=[];n.d(e,"a",function(){return i}),n.d(e,"b",function(){return a})},"0b93":function(t,e,n){"use strict";var i=n("94fd"),a=n.n(i);a.a},"0bef":function(t,e,n){e=t.exports=n("2350")(!1),e.push([t.i,".load-more[data-v-7c68ffb0]{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;height:%?80?%;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center}.loading-img[data-v-7c68ffb0]{height:24px;width:24px;margin-right:10px}.loading-text[data-v-7c68ffb0]{font-size:%?28?%;color:#777}.loading-img>uni-view[data-v-7c68ffb0]{position:absolute}.load1[data-v-7c68ffb0],.load2[data-v-7c68ffb0],.load3[data-v-7c68ffb0]{height:24px;width:24px}.load2[data-v-7c68ffb0]{-webkit-transform:rotate(30deg);-ms-transform:rotate(30deg);transform:rotate(30deg)}.load3[data-v-7c68ffb0]{-webkit-transform:rotate(60deg);-ms-transform:rotate(60deg);transform:rotate(60deg)}.loading-img>uni-view uni-view[data-v-7c68ffb0]{width:6px;height:2px;border-top-left-radius:1px;border-bottouni-left-radius:1px;background:#777;position:absolute;opacity:.2;transforuni-origin:50%;-webkit-animation:load-data-v-7c68ffb0 1.56s ease infinite}.loading-img>uni-view uni-view[data-v-7c68ffb0]:first-child{-webkit-transform:rotate(90deg);-ms-transform:rotate(90deg);transform:rotate(90deg);top:2px;left:9px}.loading-img>uni-view uni-view[data-v-7c68ffb0]:nth-child(2){-webkit-transform:rotate(180deg);top:11px;right:0}.loading-img>uni-view uni-view[data-v-7c68ffb0]:nth-child(3){-webkit-transform:rotate(270deg);-ms-transform:rotate(270deg);transform:rotate(270deg);bottom:2px;left:9px}.loading-img>uni-view uni-view[data-v-7c68ffb0]:nth-child(4){top:11px;left:0}.load1 uni-view[data-v-7c68ffb0]:first-child{-webkit-animation-delay:0s;animation-delay:0s}.load2 uni-view[data-v-7c68ffb0]:first-child{-webkit-animation-delay:.13s;animation-delay:.13s}.load3 uni-view[data-v-7c68ffb0]:first-child{-webkit-animation-delay:.26s;animation-delay:.26s}.load1 uni-view[data-v-7c68ffb0]:nth-child(2){-webkit-animation-delay:.39s;animation-delay:.39s}.load2 uni-view[data-v-7c68ffb0]:nth-child(2){-webkit-animation-delay:.52s;animation-delay:.52s}.load3 uni-view[data-v-7c68ffb0]:nth-child(2){-webkit-animation-delay:.65s;animation-delay:.65s}.load1 uni-view[data-v-7c68ffb0]:nth-child(3){-webkit-animation-delay:.78s;animation-delay:.78s}.load2 uni-view[data-v-7c68ffb0]:nth-child(3){-webkit-animation-delay:.91s;animation-delay:.91s}.load3 uni-view[data-v-7c68ffb0]:nth-child(3){-webkit-animation-delay:1.04s;animation-delay:1.04s}.load1 uni-view[data-v-7c68ffb0]:nth-child(4){-webkit-animation-delay:1.17s;animation-delay:1.17s}.load2 uni-view[data-v-7c68ffb0]:nth-child(4){-webkit-animation-delay:1.3s;animation-delay:1.3s}.load3 uni-view[data-v-7c68ffb0]:nth-child(4){-webkit-animation-delay:1.43s;animation-delay:1.43s}@-webkit-keyframes load-data-v-7c68ffb0{0%{opacity:1}to{opacity:.2}}",""])},"1f64":function(t,e,n){e=t.exports=n("2350")(!1),e.push([t.i,".footer[data-v-3cddadaa]{left:0;bottom:0;width:100%;color:#fff;height:%?100?%;position:fixed;background-color:#181e30}.footer_item[data-v-3cddadaa]{float:left;width:33.3%;height:%?100?%;font-size:%?24?%;text-align:center;color:#7a7e83}.footer_item uni-image[data-v-3cddadaa]{top:%?10?%;width:%?46?%;height:%?46?%;margin-bottom:%?10?%}.footer_item.big_item[data-v-3cddadaa]{top:%?-40?%;position:relative}.footer_item.big_item uni-image[data-v-3cddadaa]{width:%?100?%;height:%?100?%}.active[data-v-3cddadaa]{color:#5d8afc}",""])},"22c1":function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i={methods:{jump:function(t){uni.navigateTo({url:t})},change_nav:function(t){this.$store.commit("change_page",t)}},computed:{footer_nav:function(){return this.$store.state.footer_store.footer_nav},now_index:function(){return uni.getStorageSync("css")}}};e.default=i},2369:function(t,e,n){"use strict";var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",{staticClass:"load-more"},[n("v-uni-view",{directives:[{name:"show",rawName:"v-show",value:1===t.loadingType&&t.showImage,expression:"loadingType === 1 && showImage"}],staticClass:"loading-img"},[n("v-uni-view",{staticClass:"load1"},[n("v-uni-view",{style:{background:t.color}}),n("v-uni-view",{style:{background:t.color}}),n("v-uni-view",{style:{background:t.color}}),n("v-uni-view",{style:{background:t.color}})],1),n("v-uni-view",{staticClass:"load2"},[n("v-uni-view",{style:{background:t.color}}),n("v-uni-view",{style:{background:t.color}}),n("v-uni-view",{style:{background:t.color}}),n("v-uni-view",{style:{background:t.color}})],1),n("v-uni-view",{staticClass:"load3"},[n("v-uni-view",{style:{background:t.color}}),n("v-uni-view",{style:{background:t.color}}),n("v-uni-view",{style:{background:t.color}}),n("v-uni-view",{style:{background:t.color}})],1)],1),n("v-uni-text",{staticClass:"loading-text",style:{color:t.color}},[t._v(t._s(0===t.loadingType?t.contentText.contentdown:1===t.loadingType?t.contentText.contentrefresh:t.contentText.contentnomore))])],1)},a=[];n.d(e,"a",function(){return i}),n.d(e,"b",function(){return a})},"2fac":function(t,e,n){var i=n("0bef");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var a=n("4f06").default;a("23813d2a",i,!0,{sourceMap:!1,shadowMode:!1})},3444:function(t,e,n){"use strict";n.r(e);var i=n("d8ed"),a=n("d96f");for(var o in a)"default"!==o&&function(t){n.d(e,t,function(){return a[t]})}(o);n("94bf");var r=n("2877"),c=Object(r["a"])(a["default"],i["a"],i["b"],!1,null,"3cddadaa",null);e["default"]=c.exports},"3ca8":function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i=c(n("a34a")),a=c(n("00d8")),o=c(n("c667")),r=c(n("3444"));function c(t){return t&&t.__esModule?t:{default:t}}function s(t,e,n,i,a,o,r){try{var c=t[o](r),s=c.value}catch(d){return void n(d)}c.done?e(s):Promise.resolve(s).then(i,a)}function d(t){return function(){var e=this,n=arguments;return new Promise(function(i,a){var o=t.apply(e,n);function r(t){s(o,i,a,r,c,"next",t)}function c(t){s(o,i,a,r,c,"throw",t)}r(void 0)})}}var u={components:{uniLoadMore:o.default,footerNav:r.default},data:function(){return{loadingType:0,contentText:{contentdown:"上拉显示更多",contentrefresh:"正在加载...",contentnomore:"没有更多数据了"},token:uni.getStorageSync("token"),transfer_list:[],scrollLeft:0,isClickChange:!1,tabIndex:0,tabid:1,newsitems:[],tabBars:[{name:"待转让",id:"1"},{name:"转让中",id:"2"},{name:"已完成",id:"3"},{name:"取消/申诉",id:"4"}],bannerShow:!1}},onLoad:function(){this.transfer(1)},methods:{undo:function(t){uni.request({url:a.default.api.record.undo+"?token="+this.token,method:"GET",data:{id:t},success:function(t){t=t.data;uni.showToast({icon:"none",title:t.msg}),1==t.code&&setTimeout(function(){uni.navigateTo({url:"/pages/record/transfer"})},1e3)}})},transfer:function(t){a.default.auth(this,a.default.api.record.transfer+"?token="+this.token,{type:t},function(t,e){console.log(e),1==e.code&&(t.transfer_list=e.data.orderlist)})},passtwo:function(t){uni.setStorageSync("number",t),uni.navigateTo({url:"/pages/record/passtwo"})},complaint:function(t){uni.setStorageSync("number",t),uni.navigateTo({url:"/pages/record/complaint"})},details:function(t,e){var n={type:e,id:t};console.log(n),uni.setStorageSync("type",n),uni.navigateTo({url:"/pages/record/details"})},exchange:function(){this.bannerShow=!0,setTimeout(function(){uni.navigateTo({url:"/pages/record/transfer"})},1e3)},getElSize:function(t){return new Promise(function(e,n){uni.createSelectorQuery().select("#"+t).fields({size:!0,scrollOffset:!0},function(t){e(t)}).exec()})},tapTab:function(){var t=d(i.default.mark(function t(e,n){var a,o;return i.default.wrap(function(t){while(1)switch(t.prev=t.next){case 0:if(this.transfer_list=[],this.transfer(n),this.tabid=n,this.tabIndex!==e){t.next=7;break}return t.abrupt("return",!1);case 7:return t.next=9,this.getElSize("tab-bar");case 9:a=t.sent,o=a.scrollLeft,this.scrollLeft=o,this.isClickChange=!0,this.tabIndex=e;case 14:case"end":return t.stop()}},t,this)}));function e(e,n){return t.apply(this,arguments)}return e}()}};e.default=u},"41f5":function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i={name:"load-more",props:{loadingType:{type:Number,default:0},showImage:{type:Boolean,default:!0},color:{type:String,default:"#777777"},contentText:{type:Object,default:function(){return{contentdown:"上拉显示更多",contentrefresh:"正在加载...",contentnomore:"没有更多数据了"}}}},data:function(){return{}}};e.default=i},"4b7d":function(t,e,n){"use strict";n.r(e);var i=n("0970"),a=n("d38f");for(var o in a)"default"!==o&&function(t){n.d(e,t,function(){return a[t]})}(o);n("0b93");var r=n("2877"),c=Object(r["a"])(a["default"],i["a"],i["b"],!1,null,"3c53459a",null);e["default"]=c.exports},5670:function(t,e,n){e=t.exports=n("2350")(!1),e.push([t.i,".uni-tab-bar[data-v-3c53459a]{width:100%}.uni-tab-bar .active[data-v-3c53459a]{color:#fdb513;border-bottom:%?6?% solid #fdb513}.uni-swiper-tab[data-v-3c53459a]{width:100%;height:%?100?%;line-height:%?90?%;white-space:nowrap;background-color:#fff}.uni-scroll-view[data-v-3c53459a]{width:100%;height:100%;position:relative;max-height:inherit;-webkit-overflow-scrolling:touch}div[data-v-3c53459a]{-webkit-box-sizing:border-box;box-sizing:border-box}.swiper-tab-list[data-v-3c53459a]{width:25%;color:#666;height:%?90?%;font-size:%?30?%;text-align:center;display:inline-block}.card[data-v-3c53459a]{width:100%;margin-top:%?4?%;background-color:#fff}.img[data-v-3c53459a]{width:%?40?%;height:%?40?%;margin:%?30?% %?20?%}.number[data-v-3c53459a]{font-size:%?36?%;margin-top:%?-80?%;text-indent:%?80?%}.text[data-v-3c53459a]{height:%?60?%;font-size:%?30?%;line-height:%?60?%;text-indent:%?24?%}.check1[data-v-3c53459a]{margin-left:%?20?%}.text uni-view[data-v-3c53459a]{float:left}.array[data-v-3c53459a]{color:#fdb513}.card-bottom[data-v-3c53459a]{height:%?100?%;padding:%?20?% %?40?%}.body[data-v-3c53459a]{width:100%;height:100%;opacity:.7;position:absolute;margin-top:%?-100?%;background-color:#000}.banner[data-v-3c53459a]{top:45%;left:20%;width:60%;color:#333;font-size:%?30?%;text-align:center;position:absolute;padding:%?50?% %?0?%;border-radius:%?10?%;background-color:#fff}",""])},"5f6f":function(t,e,n){var i=n("1f64");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var a=n("4f06").default;a("fbc8b054",i,!0,{sourceMap:!1,shadowMode:!1})},"848c":function(t,e,n){"use strict";n.r(e);var i=n("41f5"),a=n.n(i);for(var o in i)"default"!==o&&function(t){n.d(e,t,function(){return i[t]})}(o);e["default"]=a.a},"8bc8":function(t,e,n){"use strict";var i=n("2fac"),a=n.n(i);a.a},"94bf":function(t,e,n){"use strict";var i=n("5f6f"),a=n.n(i);a.a},"94fd":function(t,e,n){var i=n("5670");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var a=n("4f06").default;a("529548aa",i,!0,{sourceMap:!1,shadowMode:!1})},a34a:function(t,e,n){t.exports=n("bbdd")},bbdd:function(t,e,n){var i=function(){return this||"object"===typeof self&&self}()||Function("return this")(),a=i.regeneratorRuntime&&Object.getOwnPropertyNames(i).indexOf("regeneratorRuntime")>=0,o=a&&i.regeneratorRuntime;if(i.regeneratorRuntime=void 0,t.exports=n("96cf"),a)i.regeneratorRuntime=o;else try{delete i.regeneratorRuntime}catch(r){i.regeneratorRuntime=void 0}},c667:function(t,e,n){"use strict";n.r(e);var i=n("2369"),a=n("848c");for(var o in a)"default"!==o&&function(t){n.d(e,t,function(){return a[t]})}(o);n("8bc8");var r=n("2877"),c=Object(r["a"])(a["default"],i["a"],i["b"],!1,null,"7c68ffb0",null);e["default"]=c.exports},d38f:function(t,e,n){"use strict";n.r(e);var i=n("3ca8"),a=n.n(i);for(var o in i)"default"!==o&&function(t){n.d(e,t,function(){return i[t]})}(o);e["default"]=a.a},d8ed:function(t,e,n){"use strict";var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",[n("v-uni-view",{staticClass:"footer"},t._l(t.footer_nav,function(e,i){return n("v-uni-view",{key:i,class:"footer_item "+("big"==e.size?"big_item":""),staticStyle:{width:"33.3%"},on:{click:function(e){e=t.$handleEvent(e),t.change_nav(i)}}},[n("v-uni-view",{on:{click:function(n){n=t.$handleEvent(n),t.jump(e.pagePath)}}},[n("v-uni-image",{attrs:{src:i==t.now_index?e.select_icon:e.icon,mode:""}}),n("v-uni-view",{class:i==t.now_index?"active":""},[t._v(t._s(e.name))])],1)],1)}))],1)},a=[];n.d(e,"a",function(){return i}),n.d(e,"b",function(){return a})},d96f:function(t,e,n){"use strict";n.r(e);var i=n("22c1"),a=n.n(i);for(var o in i)"default"!==o&&function(t){n.d(e,t,function(){return i[t]})}(o);e["default"]=a.a}}]);