(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-center-message"],{"00d8":function(t,e,n){"use strict";function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{},i=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(i=i.concat(Object.getOwnPropertySymbols(n).filter(function(t){return Object.getOwnPropertyDescriptor(n,t).enumerable}))),i.forEach(function(e){a(t,e,n[e])})}return t}function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var o="USER_KEY",r="TOKEN_KEY",s=function(){var t="";return t=uni.getStorageSync(o),t||{avatar:"../../static/img/avatar.png",bottom_text:"广州锐合技术支持QQ：8396048",level_name:"普通会员",nickname:"锐合网络",uid:0,icode:"18024553545"}},c=function(t){uni.setStorage({key:o,data:t})},d=function(t){uni.setStorageSync(r,t)},l=function(){return uni.getStorageSync(r)},u=function(){uni.clearStorage()},f=function(t){uni.setStorageSync("uid",t)},v=function(){return uni.getStorageSync("uid")},g=function(t){uni.setStorageSync("logid",t)},b=function(){return uni.getStorageSync("logid")},m="/",p={index:m+"default/index",home:{info:m+"port/member/info"},main:{bazaar:m+"port/index/index",order:m+"port/index/appointment",adopt:m+"port/index/adopt",info:m+"port/index/confInfo",notice:m+"port/index/notice"},center:{code:m+"port/member/verifycode",password:m+"port/member/changePwd",passtwo:m+"port/member/changePwd2",pid:m+"port/member/realname",close:m+"port/member/changeMethodStatus",card:m+"port/member/myPaymentMethod",type:m+"port/member/getPaymentType",submit:m+"port/member/submitMethod",message:m+"port/member/systemMessage",team:m+"port/member/myTeam",friends:m+"port/member/inviteFriends"},service:{insert:m+"port/server_center/workorder",submit:m+"port/server_center/submitWorkorder",order:m+"port/server_center/workorderList"},login:{login:m+"port/login",logo:m+"port/login/get_enter_logo",forget:m+"port/login/forgetpwd"},reg:{register:m+"port/login/register",code:m+"port/login/verifycode",agree:m+"port/login/get_user_regagree"},interests:{qrcode:m+"port/member/recharge",integral:m+"port/member/integralLog",roll:m+"port/member/givingIntegral",sell:m+"port/member/assetSale",submit:m+"port/member/rechargeSubmit"},record:{pay:m+"port/order/pay",adopt:m+"port/order/index",make:m+"port/member/appointment",update:m+"port/order/pay",passtwo:m+"port/order/auditPass",submit:m+"port/order/complaint",complaint:m+"record/payment",transfer:m+"port/order/transfer",details:m+"port/order/detail",undo:m+"port/order/detail"}},h=function(t,e,n,a){var o=this,r=uni.getStorageSync("token");""==r&&uni.reLaunch({url:"/pages/login/login"});n=i({token:uni.getStorageSync("token")},n);uni.request({url:e,method:"GET",data:n,success:function(e){e=e.data;1==e.code?a(t,e):400==e.code?(uni.setStorageSync("token",""),setTimeout(function(){uni.reLaunch({url:"/pages/login/login"})},2e3)):uni.showToast({icon:"none",title:e.msg})},fail:function(t){console.log(t),uni.showToast({icon:"none",title:"网站消息获取错误"})},complete:function(t){t=t.data;13==t.code&&(uni.showToast({icon:"none",title:t.msg}),o.removeToken(),uni.reLaunch({url:"/pages/login/login"})),uni.hideLoading()}})},w={api:p,auth:h,setToken:d,getToken:l,removeToken:u,getUserInfo:s,setUserInfo:c,setId:f,getId:v,setLogid:g,getLogid:b};e.default=w},"0412":function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i=c(n("a34a")),a=c(n("00d8")),o=c(n("2bde")),r=c(n("c667")),s=c(n("3444"));function c(t){return t&&t.__esModule?t:{default:t}}function d(t,e,n,i,a,o,r){try{var s=t[o](r),c=s.value}catch(d){return void n(d)}s.done?e(c):Promise.resolve(c).then(i,a)}function l(t){return function(){var e=this,n=arguments;return new Promise(function(i,a){var o=t.apply(e,n);function r(t){d(o,i,a,r,s,"next",t)}function s(t){d(o,i,a,r,s,"throw",t)}r(void 0)})}}var u={components:{uniIcon:o.default,footerNav:s.default,uniLoadMore:r.default},data:function(){return{message:[],scrollLeft:0,isClickChange:!1,isHistoryLoading:!1,scrollAnimation:!1,scrollToView:"",pages:1,page:0,status:0,token:uni.getStorageSync("token"),tabIndex:0,tabid:1,newsitems:[],loadingType:0,contentText:{contentdown:"上拉顯示更多",contentrefresh:"正在加載...",contentnomore:"沒有更多數據了"},tabBars:[{name:"全部消息",id:"0"},{name:"系統消息",id:"1"},{name:"活動消息",id:"2"}]}},onLoad:function(){this.tabIndex=this.status,this.loadHistory()},methods:{back:function(t){uni.navigateTo({url:t})},loadHistory:function(t){if(!this.isHistoryLoading)if(this.page<this.pages){this.loadingType=1;var e=this.status;this.keywords;this.isHistoryLoading=!0,this.scrollAnimation=!1;var n=this.page+1;a.default.auth(this,a.default.api.center.message+"?token="+this.token,{type:e,page:n},function(t,e){if(1==e.code){for(var i=e.data.list.data,a=0;a<i.length;a++)t.message.push(i[a]);t.pages=e.data.list.last_page,t.page=n,t.scrollAnimation=!0,t.isHistoryLoading=!1,t.page==t.pages?t.loadingType=2:t.loadingType=0}})}else this.loadingType=2},getElSize:function(t){return new Promise(function(e,n){uni.createSelectorQuery().select("#"+t).fields({size:!0,scrollOffset:!0},function(t){e(t)}).exec()})},tapTab:function(){var t=l(i.default.mark(function t(e,n){var a,o;return i.default.wrap(function(t){while(1)switch(t.prev=t.next){case 0:if(this.status=n,this.page=0,this.pages=1,this.message=[],this.loadHistory(),this.tabid=n,this.tabIndex!==e){t.next=10;break}return t.abrupt("return",!1);case 10:return t.next=12,this.getElSize("tab-bar");case 12:a=t.sent,o=a.scrollLeft,this.scrollLeft=o,this.isClickChange=!0,this.tabIndex=e;case 17:case"end":return t.stop()}},t,this)}));function e(e,n){return t.apply(this,arguments)}return e}()}};e.default=u},"0b5e":function(t,e,n){var i=n("1dbd");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var a=n("4f06").default;a("70849e30",i,!0,{sourceMap:!1,shadowMode:!1})},"14b4":function(t,e,n){e=t.exports=n("2350")(!1),e.push([t.i,".footer[data-v-04c0d9bb]{left:0;bottom:0;width:100%;color:#fff;z-index:1000;height:%?100?%;position:fixed;background-color:#181e30}.footer_item[data-v-04c0d9bb]{float:left;width:33.3%;height:%?100?%;font-size:%?24?%;text-align:center;color:#7a7e83}.footer_item uni-image[data-v-04c0d9bb]{top:%?10?%;width:%?46?%;height:%?46?%;margin-bottom:%?10?%}.footer_item.big_item[data-v-04c0d9bb]{top:%?-40?%;position:relative}.footer_item.big_item uni-image[data-v-04c0d9bb]{width:%?100?%;height:%?100?%}.active[data-v-04c0d9bb]{color:#5d8afc}",""])},"1dbd":function(t,e,n){e=t.exports=n("2350")(!1),e.push([t.i,".uni-tab-bar[data-v-78d763dd]{width:100%}.uni-tab-bar .active[data-v-78d763dd]{color:#fdb513;border-bottom:%?6?% solid #fdb513}.uni-swiper-tab[data-v-78d763dd]{top:%?80?%;width:100%;height:%?100?%;line-height:%?90?%;white-space:nowrap;position:fixed;background-color:#fff}.uni-scroll-view[data-v-78d763dd]{width:100%;height:100%;position:relative;max-height:inherit;-webkit-overflow-scrolling:touch}div[data-v-78d763dd]{-webkit-box-sizing:border-box;box-sizing:border-box}.swiper-tab-list[data-v-78d763dd]{color:#666;width:33.3%;height:%?90?%;font-size:%?30?%;text-align:center;display:inline-block}.msg[data-v-78d763dd]{background:#fff;padding:%?30?% %?26?%;border-bottom:%?2?% solid #eee}.tltie[data-v-78d763dd]{font-size:%?36?%}.time[data-v-78d763dd],.type[data-v-78d763dd]{font-size:%?26?%;line-height:%?46?%}.detail[data-v-78d763dd]{font-size:%?32?%;text-indent:%?64?%}",""])},"22c1":function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i={methods:{jump:function(t){uni.navigateTo({url:t})},change_nav:function(t){this.$store.commit("change_page",t)}},computed:{footer_nav:function(){return this.$store.state.footer_store.footer_nav},now_index:function(){return uni.getStorageSync("css")}}};e.default=i},2460:function(t,e,n){e=t.exports=n("2350")(!1),e.push([t.i,".load-more[data-v-c5564aba]{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;height:%?80?%;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center}.loading-img[data-v-c5564aba]{height:24px;width:24px;margin-right:10px}.loading-text[data-v-c5564aba]{font-size:%?28?%;color:#777}.loading-img>uni-view[data-v-c5564aba]{position:absolute}.load1[data-v-c5564aba],.load2[data-v-c5564aba],.load3[data-v-c5564aba]{height:24px;width:24px}.load2[data-v-c5564aba]{-webkit-transform:rotate(30deg);-ms-transform:rotate(30deg);transform:rotate(30deg)}.load3[data-v-c5564aba]{-webkit-transform:rotate(60deg);-ms-transform:rotate(60deg);transform:rotate(60deg)}.loading-img>uni-view uni-view[data-v-c5564aba]{width:6px;height:2px;border-top-left-radius:1px;border-bottouni-left-radius:1px;background:#777;position:absolute;opacity:.2;transforuni-origin:50%;-webkit-animation:load-data-v-c5564aba 1.56s ease infinite}.loading-img>uni-view uni-view[data-v-c5564aba]:first-child{-webkit-transform:rotate(90deg);-ms-transform:rotate(90deg);transform:rotate(90deg);top:2px;left:9px}.loading-img>uni-view uni-view[data-v-c5564aba]:nth-child(2){-webkit-transform:rotate(180deg);top:11px;right:0}.loading-img>uni-view uni-view[data-v-c5564aba]:nth-child(3){-webkit-transform:rotate(270deg);-ms-transform:rotate(270deg);transform:rotate(270deg);bottom:2px;left:9px}.loading-img>uni-view uni-view[data-v-c5564aba]:nth-child(4){top:11px;left:0}.load1 uni-view[data-v-c5564aba]:first-child{-webkit-animation-delay:0s;animation-delay:0s}.load2 uni-view[data-v-c5564aba]:first-child{-webkit-animation-delay:.13s;animation-delay:.13s}.load3 uni-view[data-v-c5564aba]:first-child{-webkit-animation-delay:.26s;animation-delay:.26s}.load1 uni-view[data-v-c5564aba]:nth-child(2){-webkit-animation-delay:.39s;animation-delay:.39s}.load2 uni-view[data-v-c5564aba]:nth-child(2){-webkit-animation-delay:.52s;animation-delay:.52s}.load3 uni-view[data-v-c5564aba]:nth-child(2){-webkit-animation-delay:.65s;animation-delay:.65s}.load1 uni-view[data-v-c5564aba]:nth-child(3){-webkit-animation-delay:.78s;animation-delay:.78s}.load2 uni-view[data-v-c5564aba]:nth-child(3){-webkit-animation-delay:.91s;animation-delay:.91s}.load3 uni-view[data-v-c5564aba]:nth-child(3){-webkit-animation-delay:1.04s;animation-delay:1.04s}.load1 uni-view[data-v-c5564aba]:nth-child(4){-webkit-animation-delay:1.17s;animation-delay:1.17s}.load2 uni-view[data-v-c5564aba]:nth-child(4){-webkit-animation-delay:1.3s;animation-delay:1.3s}.load3 uni-view[data-v-c5564aba]:nth-child(4){-webkit-animation-delay:1.43s;animation-delay:1.43s}@-webkit-keyframes load-data-v-c5564aba{0%{opacity:1}to{opacity:.2}}",""])},"2bde":function(t,e,n){"use strict";n.r(e);var i=n("7869"),a=n("8a4c");for(var o in a)"default"!==o&&function(t){n.d(e,t,function(){return a[t]})}(o);var r=n("2877"),s=Object(r["a"])(a["default"],i["a"],i["b"],!1,null,null,null);e["default"]=s.exports},3399:function(t,e,n){"use strict";var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",{staticClass:"load-more"},[n("v-uni-view",{directives:[{name:"show",rawName:"v-show",value:1===t.loadingType&&t.showImage,expression:"loadingType === 1 && showImage"}],staticClass:"loading-img"},[n("v-uni-view",{staticClass:"load1"},[n("v-uni-view",{style:{background:t.color}}),n("v-uni-view",{style:{background:t.color}}),n("v-uni-view",{style:{background:t.color}}),n("v-uni-view",{style:{background:t.color}})],1),n("v-uni-view",{staticClass:"load2"},[n("v-uni-view",{style:{background:t.color}}),n("v-uni-view",{style:{background:t.color}}),n("v-uni-view",{style:{background:t.color}}),n("v-uni-view",{style:{background:t.color}})],1),n("v-uni-view",{staticClass:"load3"},[n("v-uni-view",{style:{background:t.color}}),n("v-uni-view",{style:{background:t.color}}),n("v-uni-view",{style:{background:t.color}}),n("v-uni-view",{style:{background:t.color}})],1)],1),n("v-uni-text",{staticClass:"loading-text",style:{color:t.color}},[t._v(t._s(0===t.loadingType?t.contentText.contentdown:1===t.loadingType?t.contentText.contentrefresh:t.contentText.contentnomore))])],1)},a=[];n.d(e,"a",function(){return i}),n.d(e,"b",function(){return a})},3444:function(t,e,n){"use strict";n.r(e);var i=n("5dbd"),a=n("d96f");for(var o in a)"default"!==o&&function(t){n.d(e,t,function(){return a[t]})}(o);n("7e0f");var r=n("2877"),s=Object(r["a"])(a["default"],i["a"],i["b"],!1,null,"04c0d9bb",null);e["default"]=s.exports},"41f5":function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i={name:"load-more",props:{loadingType:{type:Number,default:0},showImage:{type:Boolean,default:!0},color:{type:String,default:"#777777"},contentText:{type:Object,default:function(){return{contentdown:"上拉顯示更多",contentrefresh:"正在加載...",contentnomore:"沒有更多數據了"}}}},data:function(){return{}}};e.default=i},"5bf4":function(t,e,n){"use strict";var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",{staticClass:"uni-tab-bar"},[n("v-uni-view",{staticClass:"back"},[n("uni-icon",{attrs:{size:"28",type:"arrowleft"},on:{click:function(e){e=t.$handleEvent(e),t.back("/pages/main/shack")}}})],1),n("v-uni-scroll-view",{staticClass:"uni-swiper-tab",attrs:{id:"tab-bar","scroll-x":"","scroll-left":t.scrollLeft}},t._l(t.tabBars,function(e,i){return n("v-uni-view",{key:e.id,class:["swiper-tab-list",t.tabIndex==i?"active":""],attrs:{id:e.id,"data-current":i},on:{click:function(n){n=t.$handleEvent(n),t.tapTab(i,e.id)}}},[t._v(t._s(e.name))])})),n("v-uni-view",{staticStyle:{height:"96upx"}}),n("v-uni-scroll-view",{staticClass:"msg-list",attrs:{"scroll-y":"true","scroll-top":"0","scroll-into-view":t.scrollToView,"lower-threshold":"100"},on:{scrolltolower:function(e){e=t.$handleEvent(e),t.loadHistory(e)}}},[t._l(t.message,function(e,i){return n("v-uni-view",{key:i,staticClass:"uni-list-cell",attrs:{"hover-class":"uni-list-cell-hover"}},[n("v-uni-view",{staticClass:"msg"},[n("v-uni-view",{staticClass:"title"},[t._v(t._s(e.title))]),n("v-uni-view",{staticClass:"type"},[t._v("消息類別 : "+t._s(e.type))]),n("v-uni-view",{staticClass:"time"},[t._v("發送時間 : "+t._s(e.createtime))]),n("v-uni-view",{staticClass:"detail"},[n("div",{domProps:{innerHTML:t._s(e.detail)}})])],1)],1)}),n("uni-load-more",{attrs:{loadingType:t.loadingType,contentText:t.contentText}})],2),n("footerNav")],1)},a=[];n.d(e,"a",function(){return i}),n.d(e,"b",function(){return a})},"5dbd":function(t,e,n){"use strict";var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",[n("v-uni-view",{staticClass:"footer"},t._l(t.footer_nav,function(e,i){return n("v-uni-view",{key:i,class:"footer_item "+("big"==e.size?"big_item":""),staticStyle:{width:"33.3%"},on:{click:function(e){e=t.$handleEvent(e),t.change_nav(i)}}},[n("v-uni-view",{on:{click:function(n){n=t.$handleEvent(n),t.jump(e.pagePath)}}},[n("v-uni-image",{attrs:{src:i==t.now_index?e.select_icon:e.icon,mode:""}}),n("v-uni-view",{class:i==t.now_index?"active":""},[t._v(t._s(e.name))])],1)],1)}))],1)},a=[];n.d(e,"a",function(){return i}),n.d(e,"b",function(){return a})},7869:function(t,e,n){"use strict";var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",{staticClass:"uni-icon",class:["uni-icon-"+t.type],style:{color:t.color,"font-size":t.fontSize},on:{click:function(e){e=t.$handleEvent(e),t.onClick()}}})},a=[];n.d(e,"a",function(){return i}),n.d(e,"b",function(){return a})},"7c6a":function(t,e,n){"use strict";var i=n("eab0"),a=n.n(i);a.a},"7e0f":function(t,e,n){"use strict";var i=n("a465"),a=n.n(i);a.a},"848c":function(t,e,n){"use strict";n.r(e);var i=n("41f5"),a=n.n(i);for(var o in i)"default"!==o&&function(t){n.d(e,t,function(){return i[t]})}(o);e["default"]=a.a},"8a4c":function(t,e,n){"use strict";n.r(e);var i=n("ceb8"),a=n.n(i);for(var o in i)"default"!==o&&function(t){n.d(e,t,function(){return i[t]})}(o);e["default"]=a.a},a34a:function(t,e,n){t.exports=n("bbdd")},a465:function(t,e,n){var i=n("14b4");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var a=n("4f06").default;a("803dff7a",i,!0,{sourceMap:!1,shadowMode:!1})},ac50:function(t,e,n){"use strict";var i=n("0b5e"),a=n.n(i);a.a},bbdd:function(t,e,n){var i=function(){return this||"object"===typeof self&&self}()||Function("return this")(),a=i.regeneratorRuntime&&Object.getOwnPropertyNames(i).indexOf("regeneratorRuntime")>=0,o=a&&i.regeneratorRuntime;if(i.regeneratorRuntime=void 0,t.exports=n("96cf"),a)i.regeneratorRuntime=o;else try{delete i.regeneratorRuntime}catch(r){i.regeneratorRuntime=void 0}},c119:function(t,e,n){"use strict";n.r(e);var i=n("0412"),a=n.n(i);for(var o in i)"default"!==o&&function(t){n.d(e,t,function(){return i[t]})}(o);e["default"]=a.a},c667:function(t,e,n){"use strict";n.r(e);var i=n("3399"),a=n("848c");for(var o in a)"default"!==o&&function(t){n.d(e,t,function(){return a[t]})}(o);n("7c6a");var r=n("2877"),s=Object(r["a"])(a["default"],i["a"],i["b"],!1,null,"c5564aba",null);e["default"]=s.exports},c9e7:function(t,e,n){"use strict";n.r(e);var i=n("5bf4"),a=n("c119");for(var o in a)"default"!==o&&function(t){n.d(e,t,function(){return a[t]})}(o);n("ac50");var r=n("2877"),s=Object(r["a"])(a["default"],i["a"],i["b"],!1,null,"78d763dd",null);e["default"]=s.exports},ceb8:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i={props:{type:String,color:String,size:[Number,String]},computed:{fontSize:function(){return"".concat(this.size,"px")}},methods:{onClick:function(){this.$emit("click")}}};e.default=i},d96f:function(t,e,n){"use strict";n.r(e);var i=n("22c1"),a=n.n(i);for(var o in i)"default"!==o&&function(t){n.d(e,t,function(){return i[t]})}(o);e["default"]=a.a},eab0:function(t,e,n){var i=n("2460");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var a=n("4f06").default;a("1d8ec030",i,!0,{sourceMap:!1,shadowMode:!1})}}]);