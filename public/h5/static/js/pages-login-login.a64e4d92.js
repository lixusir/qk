(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-login-login"],{"00d8":function(t,e,n){"use strict";function o(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{},o=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(o=o.concat(Object.getOwnPropertySymbols(n).filter(function(t){return Object.getOwnPropertyDescriptor(n,t).enumerable}))),o.forEach(function(e){i(t,e,n[e])})}return t}function i(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var r="USER_KEY",a="TOKEN_KEY",u=function(){var t="";return t=uni.getStorageSync(r),t||{avatar:"../../static/img/avatar.png",bottom_text:"广州锐合技术支持QQ：8396048",level_name:"普通会员",nickname:"锐合网络",uid:0,icode:"18024553545"}},s=function(t){uni.setStorage({key:r,data:t})},c=function(t){uni.setStorageSync(a,t)},d=function(){return uni.getStorageSync(a)},l=function(){uni.clearStorage()},g=function(t){uni.setStorageSync("uid",t)},f=function(){return uni.getStorageSync("uid")},p=function(t){uni.setStorageSync("logid",t)},m=function(){return uni.getStorageSync("logid")},b="http://blockcat.8396048.com/",v={index:b+"default/index",home:{info:b+"port/member/info"},main:{bazaar:b+"port/index/index",order:b+"port/index/appointment"},center:{code:b+"port/member/verifycode",password:b+"port/member/changePwd",passtwo:b+"port/member/changePwd2",pid:b+"port/member/realname",close:b+"port/member/changeMethodStatus",card:b+"port/member/myPaymentMethod",type:b+"port/member/getPaymentType",submit:b+"port/member/submitMethod",message:b+"port/member/systemMessage",team:b+"port/member/myTeam"},service:{insert:b+"port/server_center/workorder",submit:b+"port/server_center/submitWorkorder",order:b+"port/server_center/submitWorkorder"},login:{login:b+"port/login",logo:b+"port/login/get_enter_logo",forget:b+"port/login/forgetpwd"},reg:{register:b+"port/login/register",code:b+"port/login/verifycode"},interests:{integral:b+"port/member/integralLog",roll:b+"port/member/givingIntegral"},record:{pay:b+"port/order/pay",adopt:b+"port/order/index",make:b+"port/member/appointment",update:b+"port/order/pay",passtwo:b+"record/payment",submit:b+"record/payment",complaint:b+"record/payment"}},h=function(t,e,n,i){var r=this,a=uni.getStorageSync("token");""==a&&uni.reLaunch({url:"/pages/login/login"});n=o({token:uni.getStorageSync("token")},n);uni.request({url:e,method:"GET",data:n,success:function(e){e=e.data;1==e.code?i(t,e):400==e.code?(uni.setStorageSync("token",""),setTimeout(function(){uni.reLaunch({url:"/pages/login/login"})},2e3)):uni.showToast({icon:"none",title:e.msg})},fail:function(t){uni.showToast({icon:"none",title:"网站消息获取错误"})},complete:function(t){t=t.data;13==t.code&&(uni.showToast({icon:"none",title:t.msg}),r.removeToken(),uni.reLaunch({url:"/pages/login/login"})),uni.hideLoading()}})},w={api:v,auth:h,setToken:c,getToken:d,removeToken:l,getUserInfo:u,setUserInfo:s,setId:g,getId:f,setLogid:p,getLogid:m};e.default=w},"65eb":function(t,e,n){"use strict";n.r(e);var o=n("8b6c"),i=n("91fc");for(var r in i)"default"!==r&&function(t){n.d(e,t,function(){return i[t]})}(r);n("8ae8");var a=n("2877"),u=Object(a["a"])(i["default"],o["a"],o["b"],!1,null,"7711db50",null);e["default"]=u.exports},"8ae8":function(t,e,n){"use strict";var o=n("af5b"),i=n.n(o);i.a},"8b6c":function(t,e,n){"use strict";var o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",{staticClass:"content"},[n("v-uni-view",[n("v-uni-view",{staticClass:"log-lable"},[n("v-uni-image",{staticStyle:{height:"126upx"},attrs:{src:t.logo,mode:"aspectFit"}})],1)],1),n("v-uni-view",{staticClass:"login"},[n("v-uni-view",{staticClass:"log-input"},[n("v-uni-text",[t._v("账   号")]),n("v-uni-input",{attrs:{type:"text",maxlength:"20",placeholder:"请输入您的账号"},model:{value:t.username,callback:function(e){t.username=e},expression:"username"}})],1),n("v-uni-view",{staticClass:"log-input"},[n("v-uni-text",[t._v("密   码")]),n("v-uni-input",{attrs:{type:"text",password:"true",maxlength:"20",placeholder:"请输入您的密码"},model:{value:t.password,callback:function(e){t.password=e},expression:"password"}})],1),n("v-uni-button",{staticClass:"btn-area",on:{click:function(e){e=t.$handleEvent(e),t.bindLogin(e)}}},[t._v("提交")]),n("v-uni-view",{staticClass:"log-bottom"},[n("v-uni-navigator",{staticClass:"bottom-left",attrs:{url:"../login/forget"}},[t._v("忘记密码")]),n("v-uni-navigator",{staticClass:"bottom-right",attrs:{url:"../reg/reg"}},[t._v("我要注册")])],1)],1)],1)},i=[];n.d(e,"a",function(){return o}),n.d(e,"b",function(){return i})},"91fc":function(t,e,n){"use strict";n.r(e);var o=n("efc3"),i=n.n(o);for(var r in o)"default"!==r&&function(t){n.d(e,t,function(){return o[t]})}(r);e["default"]=i.a},af5b:function(t,e,n){var o=n("bce8");"string"===typeof o&&(o=[[t.i,o,""]]),o.locals&&(t.exports=o.locals);var i=n("4f06").default;i("381e34b6",o,!0,{sourceMap:!1,shadowMode:!1})},bce8:function(t,e,n){e=t.exports=n("2350")(!1),e.push([t.i,".content[data-v-7711db50]{padding:%?40?%;background:-webkit-gradient(linear,left top,right bottom,from(#33b7e3),color-stop(50%,#2777e9),to(#5d8afd));background:-o-linear-gradient(left top,#33b7e3 0,#2777e9 50%,#5d8afd 100%);background:linear-gradient(to right bottom,#33b7e3 0,#2777e9 50%,#5d8afd)}.login[data-v-7711db50]{background:#fff;padding:%?80?% %?32?%}.log-lable[data-v-7711db50]{width:100%;font-size:%?48?%;font-weight:700;text-align:center;margin:%?100?% %?0?%;color:#000}.log-prompt[data-v-7711db50]{width:100%;height:%?24?%;font-size:%?24?%;font-weight:500;margin-top:%?80?%;line-height:%?46?%;color:#999}.log-input[data-v-7711db50]{height:%?90?%;line-height:%?90?%;padding-left:%?40?%;background:#f1f1f1;border-radius:%?45?%;margin-bottom:%?40?%}.log-input uni-text[data-v-7711db50]{width:25%}uni-input[data-v-7711db50]{width:%?400?%}.log-remark[data-v-7711db50]{width:100%;height:%?18?%;font-size:%?19?%;font-weight:500;margin-top:%?30?%;line-height:%?46?%;color:#656565}.btn-area[data-v-7711db50]{margin:%?60?% %?0?%}.log-bottom uni-navigator[data-v-7711db50]{font-size:%?30?%;font-weight:400;color:#6d6b6b}.bottom-left[data-v-7711db50]{float:left}.bottom-right[data-v-7711db50]{float:right}",""])},efc3:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var o=i(n("00d8"));function i(t){return t&&t.__esModule?t:{default:t}}var r={data:function(){return{username:"",password:"",logo:""}},methods:{checkLogin:function(){var t=this;uni.request({url:o.default.api.login.logo,method:"GET",success:function(e){e=e.data;1==e.code&&(t.logo=e.data.site_logo)},error:function(t){uni.showToast({icon:"none",title:"请求站点信息错误"})}});var e=o.default.getToken();""!==e&&uni.request({url:o.default.api.login.check,method:"GET",data:{token:e},success:function(t){t=t.data;if(1!=t.code)return o.default.removeToken(),void uni.showToast({icon:"none",title:t.msg});o.default.setToken(t.data.token),uni.reLaunch({url:"/pages/main/bazaar"})},error:function(t){uni.showToast({icon:"none",title:"请求站点信息错误"})}})},initPosition:function(){this.positionTop=uni.getSystemInfoSync().windowHeight-100},bindLogin:function(){self=this,self.username.length<1?uni.showToast({icon:"none",title:"账号最短为 1 个字符"}):self.password.length<6?uni.showToast({icon:"none",title:"密码最短为 6 个字符"}):(uni.showLoading({title:"登录中..."}),uni.request({url:o.default.api.login.login,method:"POST",data:{account:self.username,password:self.password},success:function(t){t=t.data;if(1!=t.code)return self.password="",o.default.removeToken(),void uni.showToast({icon:"none",title:t.msg});uni.setStorageSync("token",t.data.token),uni.reLaunch({url:"/pages/main/bazaar"})},error:function(t){uni.showToast({icon:"none",title:"请求站点信息错误"})}}))}},onLoad:function(){this.checkLogin(),this.initPosition()}};e.default=r}}]);