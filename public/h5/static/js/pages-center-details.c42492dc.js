(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-center-details"],{"13f4":function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a=i(n("5d50"));function i(t){return t&&t.__esModule?t:{default:t}}var r={components:{uniIcon:a.default},data:function(){return{}},onShow:function(){var t=uni.getStorageSync("config");this.url=t.customer_service},methods:{back:function(t){uni.reLaunch({url:"/pages/center/team"})}}};e.default=r},"176b":function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a={props:{type:String,color:String,size:[Number,String]},computed:{fontSize:function(){return"".concat(this.size,"px")}},methods:{onClick:function(){this.$emit("click")}}};e.default=a},"2ed0":function(t,e,n){"use strict";var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",{staticClass:"uni-icon",class:["uni-icon-"+t.type],style:{color:t.color,"font-size":t.fontSize},on:{click:function(e){e=t.$handleEvent(e),t.onClick()}}})},i=[];n.d(e,"a",function(){return a}),n.d(e,"b",function(){return i})},"3aeb":function(t,e,n){"use strict";n.r(e);var a=n("176b"),i=n.n(a);for(var r in a)"default"!==r&&function(t){n.d(e,t,function(){return a[t]})}(r);e["default"]=i.a},"535a":function(t,e,n){"use strict";var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",{staticClass:"page"},[n("v-uni-view",{staticClass:"back"},[n("uni-icon",{attrs:{size:"28",type:"arrowleft"},on:{click:function(e){e=t.$handleEvent(e),t.back()}}})],1),n("v-uni-view",{staticClass:"textarea"},[t._v("團隊總人數："),n("br"),t._v("直推："),t._v("二代：")]),n("v-uni-view",{staticClass:"textarea"},[t._v("上月有效用戶"),n("br"),t._v("直推："),t._v("二代："),n("br"),t._v("(有效用戶是指捕撈成功的用戶)")]),n("v-uni-view",{staticClass:"textarea"},[t._v("本月新增有效用戶"),n("br"),t._v("直推："),t._v("二代：")]),n("v-uni-view",{staticClass:"textarea"},[t._v("直推總人數："),n("br"),t._v("有效："),t._v("無效：")]),n("v-uni-view",{staticClass:"textarea"},[t._v("二代總人數："),n("br"),t._v("有效："),t._v("12   無效：10")])],1)},i=[];n.d(e,"a",function(){return a}),n.d(e,"b",function(){return i})},"5a42":function(t,e,n){"use strict";n.r(e);var a=n("535a"),i=n("a094");for(var r in i)"default"!==r&&function(t){n.d(e,t,function(){return i[t]})}(r);n("de2f");var u=n("2877"),c=Object(u["a"])(i["default"],a["a"],a["b"],!1,null,"6e1c37da",null);e["default"]=c.exports},"5d50":function(t,e,n){"use strict";n.r(e);var a=n("2ed0"),i=n("3aeb");for(var r in i)"default"!==r&&function(t){n.d(e,t,function(){return i[t]})}(r);var u=n("2877"),c=Object(u["a"])(i["default"],a["a"],a["b"],!1,null,null,null);e["default"]=c.exports},"7cba":function(t,e,n){e=t.exports=n("2350")(!1),e.push([t.i,"uni-page-body[data-v-6e1c37da]{background:#f2f2f2}.textarea[data-v-6e1c37da]{width:auto;font-size:%?32?%;text-align:center;line-height:%?60?%;margin:%?50?% auto 0;padding:%?20?% %?30?%;border:%?4?% solid #585858}body.?%PAGE?%[data-v-6e1c37da]{background:#f2f2f2}",""])},9809:function(t,e,n){var a=n("7cba");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var i=n("4f06").default;i("bc09352e",a,!0,{sourceMap:!1,shadowMode:!1})},a094:function(t,e,n){"use strict";n.r(e);var a=n("13f4"),i=n.n(a);for(var r in a)"default"!==r&&function(t){n.d(e,t,function(){return a[t]})}(r);e["default"]=i.a},de2f:function(t,e,n){"use strict";var a=n("9809"),i=n.n(a);i.a}}]);