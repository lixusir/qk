(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-login-login"],{"2ead":function(t,e,o){"use strict";var n=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("v-uni-view",{staticClass:"content"},[o("v-uni-view",{staticClass:"login"},[o("v-uni-view",{staticClass:"log-lable"},[o("v-uni-image",{staticStyle:{height:"126upx"},attrs:{src:t.logo,mode:"aspectFit"}}),o("v-uni-view",{staticClass:"log-title"},[t._v(t._s(t.title))])],1),o("v-uni-view",{staticClass:"log"},[o("v-uni-view",{staticClass:"log-input"},[o("v-uni-text",[t._v("賬   號")]),o("v-uni-input",{attrs:{type:"text",maxlength:"20",placeholder:"請輸入您的賬號"},model:{value:t.username,callback:function(e){t.username=e},expression:"username"}})],1),o("v-uni-view",{staticClass:"log-input"},[o("v-uni-text",[t._v("密   碼")]),o("v-uni-input",{attrs:{type:"text",password:"true",maxlength:"20",placeholder:"請輸入您的密碼"},model:{value:t.password,callback:function(e){t.password=e},expression:"password"}})],1),1==t.status?[o("v-uni-button",{staticClass:"btn-area",on:{click:function(e){e=t.$handleEvent(e),t.bindLogin(e)}}},[t._v("提交")])]:[o("v-uni-button",{staticClass:"btn-area"},[t._v("提交")])],o("v-uni-view",{staticClass:"log-bottom"},[o("v-uni-navigator",{staticClass:"bottom-left",attrs:{url:"../login/forget"}},[t._v("忘記密碼")]),o("v-uni-navigator",{staticClass:"bottom-right",attrs:{url:"../reg/reg"}},[t._v("我要註冊")])],1)],2)],1)],1)},a=[];o.d(e,"a",function(){return n}),o.d(e,"b",function(){return a})},"3c73":function(t,e,o){var n=o("6439");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var a=o("4f06").default;a("08204fb4",n,!0,{sourceMap:!1,shadowMode:!1})},6439:function(t,e,o){e=t.exports=o("2350")(!1),e.push([t.i,"uni-page-body[data-v-0086a25a]{background:#252831}.back_img[data-v-0086a25a]{width:100%;height:100%;position:fixed}.login[data-v-0086a25a]{z-index:998;padding-top:90%}.log[data-v-0086a25a]{padding:%?100?% %?70?% %?0?%}.log-lable[data-v-0086a25a]{font-size:%?48?%;font-weight:700;text-align:center;margin-top:%?-400?%;color:#000}.log-title[data-v-0086a25a]{height:%?90?%;color:#929292;font-size:%?32?%;line-height:%?90?%}.log-prompt[data-v-0086a25a]{width:100%;height:%?24?%;font-size:%?24?%;font-weight:500;margin-top:%?80?%;line-height:%?46?%;color:#999}.log-input[data-v-0086a25a]{height:%?90?%;line-height:%?90?%;padding-left:%?40?%;background:#fff;border-radius:%?45?%;margin-bottom:%?40?%}.log-input uni-text[data-v-0086a25a]{width:25%}uni-input[data-v-0086a25a]{width:%?400?%}.log-remark[data-v-0086a25a]{width:100%;height:%?18?%;font-size:%?19?%;font-weight:500;margin-top:%?30?%;line-height:%?46?%;color:#656565}.btn-area[data-v-0086a25a]{margin:%?60?% %?0?%}.log-bottom uni-navigator[data-v-0086a25a]{color:#fff;font-size:%?30?%;font-weight:400}.bottom-left[data-v-0086a25a]{float:left}.bottom-right[data-v-0086a25a]{float:right}body.?%PAGE?%[data-v-0086a25a]{background:#252831}",""])},"73ee":function(t,e,o){"use strict";o.r(e);var n=o("d516"),a=o.n(n);for(var r in n)"default"!==r&&function(t){o.d(e,t,function(){return n[t]})}(r);e["default"]=a.a},c99e:function(t,e,o){"use strict";var n=o("3c73"),a=o.n(n);a.a},cedc:function(t,e,o){"use strict";function n(t){for(var e=1;e<arguments.length;e++){var o=null!=arguments[e]?arguments[e]:{},n=Object.keys(o);"function"===typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(o).filter(function(t){return Object.getOwnPropertyDescriptor(o,t).enumerable}))),n.forEach(function(e){a(t,e,o[e])})}return t}function a(t,e,o){return e in t?Object.defineProperty(t,e,{value:o,enumerable:!0,configurable:!0,writable:!0}):t[e]=o,t}Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var r="USER_KEY",i="TOKEN_KEY",s=function(){var t="";return t=uni.getStorageSync(r),t||{avatar:"../../static/img/avatar.png",bottom_text:"广州锐合技术支持QQ：8396048",level_name:"普通会员",nickname:"锐合网络",uid:0,icode:"18024553545"}},u=function(t){uni.setStorage({key:r,data:t})},l=function(t){uni.setStorageSync(i,t)},c=function(){return uni.getStorageSync(i)},d=function(){uni.clearStorage()},g=function(t){uni.setStorageSync("uid",t)},p=function(){return uni.getStorageSync("uid")},f=function(t){uni.setStorageSync("logid",t)},m=function(){return uni.getStorageSync("logid")},v="http://bc.hhwl168.com/",h={index:v+"default/index",home:{info:v+"port/member/info"},main:{bazaar:v+"port/index/index",order:v+"port/index/appointment",adopt:v+"port/index/adopt",result:v+"port/index/adoptResult",info:v+"port/index/confInfo",notice:v+"port/index/notice"},center:{code:v+"port/member/verifycode",password:v+"port/member/changePwd",passtwo:v+"port/member/changePwd2",pid:v+"port/member/realname",close:v+"port/member/changeMethodStatus",card:v+"port/member/myPaymentMethod",type:v+"port/member/getPaymentType",submit:v+"port/member/submitMethod",message:v+"port/member/systemMessage",team:v+"port/member/myTeam",friends:v+"port/member/inviteFriends"},service:{insert:v+"port/server_center/workorder",submit:v+"port/server_center/submitWorkorder",order:v+"port/server_center/workorderList"},login:{login:v+"port/login",logo:v+"port/login/get_enter_logo",forget:v+"port/login/forgetpwd"},reg:{register:v+"port/login/register",code:v+"port/login/verifycode",agree:v+"port/login/get_user_regagree"},interests:{qrcode:v+"port/member/recharge",integral:v+"port/member/integralLog",roll:v+"port/member/givingIntegral",sell:v+"port/member/assetSale",submit:v+"port/member/rechargeSubmit",earnings:v+"port/member/incomeLog",assets:v+"port/member/myAssets"},record:{pay:v+"port/order/pay",adopt:v+"port/order/index",make:v+"port/member/appointment",update:v+"port/order/pay",passtwo:v+"port/order/auditPass",submit:v+"port/order/complaint",complaint:v+"record/payment",transfer:v+"port/order/transfer",details:v+"port/order/detail",undo:v+"port/order/revoke"}},b=function(t,e,o,a){var r=this,i=uni.getStorageSync("token");""==i&&(uni.setStorageSync("token",""),uni.reLaunch({url:"/pages/login/login"}));o=n({token:uni.getStorageSync("token")},o);uni.request({url:e,method:"GET",data:o,success:function(e){e=e.data;1==e.code?a(t,e):400==e.code?(uni.setStorageSync("token",""),setTimeout(function(){uni.reLaunch({url:"/pages/login/login"})},2e3)):uni.showToast({icon:"none",title:e.msg})},fail:function(t){console.log(t),uni.showToast({icon:"none",title:"网站消息获取错误"})},complete:function(t){t=t.data;13==t.code&&(uni.showToast({icon:"none",title:t.msg}),r.removeToken(),uni.reLaunch({url:"/pages/login/login"})),uni.hideLoading()}})},w={api:h,auth:b,setToken:l,getToken:c,removeToken:d,getUserInfo:s,setUserInfo:u,setId:g,getId:p,setLogid:f,getLogid:m};e.default=w},d516:function(t,e,o){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n=a(o("cedc"));function a(t){return t&&t.__esModule?t:{default:t}}var r={data:function(){return{height:"",username:"",password:"",status:1,logo:uni.getStorageSync("logo"),title:""}},methods:{bindLogin:function(){self=this,self.username.length<1?uni.showToast({icon:"none",title:"賬號最短為 1 個字符"}):self.password.length<6?uni.showToast({icon:"none",title:"密碼最短為 6 個字符"}):(self.status=0,uni.request({url:n.default.api.login.login,method:"POST",data:{account:self.username,password:self.password},success:function(t){t=t.data;if(1!=t.code)return self.status=1,self.password="",n.default.removeToken(),void uni.showToast({icon:"none",title:t.msg});uni.setStorageSync("token",t.data.token),uni.setStorageSync("pop",0),uni.setStorageSync("css",0),uni.setStorageSync("shack",1),uni.reLaunch({url:"/pages/main/bazaar"})},error:function(t){uni.showToast({icon:"none",title:"請求站點信息錯誤"})}}))}},onShow:function(){var t=this;uni.setStorageSync("token",""),uni.setStorageSync("sec",1);this.logo;uni.request({url:n.default.api.login.logo,method:"GET",success:function(e){e=e.data;1==e.code&&(t.logo=e.data.site_logo)}})}};e.default=r},f06d:function(t,e,o){"use strict";o.r(e);var n=o("2ead"),a=o("73ee");for(var r in a)"default"!==r&&function(t){o.d(e,t,function(){return a[t]})}(r);o("c99e");var i=o("2877"),s=Object(i["a"])(a["default"],n["a"],n["b"],!1,null,"0086a25a",null);e["default"]=s.exports}}]);