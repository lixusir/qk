(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-center-detail"],{"03d7":function(module,exports,__webpack_require__){"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var _service=_interopRequireDefault(__webpack_require__("cedc")),_uniIcon=_interopRequireDefault(__webpack_require__("b463")),_card=_interopRequireDefault(__webpack_require__("faf2")),_footer_nav=_interopRequireDefault(__webpack_require__("ebf1"));function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}var _default={components:{uniIcon:_uniIcon.default,mpvuePicker:_card.default,footerNav:_footer_nav.default},data:function(){return{pickerSingleArray:[],user:uni.getStorageSync("user"),id:uni.getStorageSync("card_id"),token:uni.getStorageSync("token"),titleofaccount:"",account:"",mobile:"",verifycode:"",imageSrc:"",countdown:62,radio:1,themeColor:"#007AFF",pickerText:"",mode:"",type:"",image:"display:none;",deepLength:1,pickerValueDefault:[0],status:1}},onShow:function(){this.mobile=this.user.account,_service.default.auth(this,_service.default.api.center.type+"?token="+this.token,{},function(e,t){if(1==t.code){var i=t.data.typelist;e.pickerSingleArray=i}}),_service.default.auth(this,_service.default.api.center.card+"?token="+this.token,{},function(e,t){if(1==t.code)for(var i=t.data.methodlist,n=0;n<i.length;n++)i[n].id==e.id&&(e.titleofaccount=i[n].titleofaccount,e.account=i[n].account,e.type=i[n].type,e.pickerText=i[n].typename,e.imageSrc=i[n].paymentcode,""==i[n].paymentcode?e.image="display:none;":e.image="display:block;")})},methods:{back:function(){uni.reLaunch({url:"/pages/center/card"})},chooseImage:function(){var e=this;uni.chooseImage({count:1,sizeType:["compressed"],sourceType:["album"],success:function(t){var i=t.tempFilePaths[0];e.imageSrc=i},fail:function(e){console.log("chooseImage fail",e)}})},verification:function(){var e=this;uni.request({url:_service.default.api.center.code,method:"GET",data:{token:this.token,account:this.mobile},success:function(t){t=t.data;uni.showToast({icon:"none",title:t.msg}),1==t.code&&e.codetime(e,60)}})},codetime:function(e,t){e.countdown=t<10?"0"+t:t,t--,t<0?e.countdown=61:setTimeout(function(){e.codetime(e,t)},1e3)},showSinglePicker:function(){this.mode="selector",this.deepLength=1,this.pickerValueDefault=[0],this.$refs.mpvuePicker.show()},onConfirm:function(e){this.imageSrc="",this.pickerText=e.name,this.code=e.ispaymentcode,this.type=e.type,0==e.ispaymentcode?this.image="display:none;":this.image="display:block;"},update:function update(){6==this.verifycode.length?""!=this.type?""!=this.name?""!=this.account?1!=this.code||""!=this.imageSrc?(self=this,uni.showModal({content:"確認修改銀行卡信息嗎？",cancelText:"取消",confirmText:"確認",confirmColor:"#FFAE00",cancelColor:"#D2D2D2",success:function success(res){if(res.confirm){self.status=0;var uploadTask=uni.uploadFile({url:_service.default.api.center.submit,filePath:self.imageSrc,name:"file",formData:{id:self.id,type:self.type,titleofaccount:self.titleofaccount,account:self.account,verifycode:self.verifycode,ispaymentcode:self.type,paymentcode:self.imageSrc,token:self.token},success:function success(res){res=res.data,res=eval("("+res+")"),uni.showToast({icon:"none",title:res.msg}),1==res.code?setTimeout(function(){uni.navigateBack({delta:1})},1e3):self.status=1}})}}})):uni.showToast({icon:"none",title:"請上傳付款憑證"}):uni.showToast({icon:"none",title:"請輸入賬戶賬號"}):uni.showToast({icon:"none",title:"請輸入賬戶名稱"}):uni.showToast({icon:"none",title:"銀行未選擇"}):uni.showToast({icon:"none",title:"請輸入六位驗證碼"})}}};exports.default=_default},"0ca0":function(e,t,i){t=e.exports=i("2350")(!1),t.push([e.i,"uni-page-body[data-v-9c869b62]{background:#f2f2f2}.pass[data-v-9c869b62]{padding:%?40?% %?40?% %?0?%}.body[data-v-9c869b62]{padding:%?0?% %?40?%}.img1[data-v-9c869b62]{color:#ddd;height:%?300?%;font-size:%?40?%;text-align:center;line-height:%?300?%;background-color:#fff;border:%?4?% dashed #ddd}.body .image[data-v-9c869b62]{height:%?300?%}.uni-input[data-v-9c869b62]{color:#6d6d72;font-size:%?34?%}body.?%PAGE?%[data-v-9c869b62]{background:#f2f2f2}",""])},"33a2":function(e,t,i){"use strict";i.r(t);var n=i("03d7"),a=i.n(n);for(var o in n)"default"!==o&&function(e){i.d(t,e,function(){return n[e]})}(o);t["default"]=a.a},"5ce7":function(e,t,i){"use strict";i.r(t);var n=i("8b60"),a=i("33a2");for(var o in a)"default"!==o&&function(e){i.d(t,e,function(){return a[e]})}(o);i("6b53");var c=i("2877"),s=Object(c["a"])(a["default"],n["a"],n["b"],!1,null,"9c869b62",null);t["default"]=s.exports},"6b53":function(e,t,i){"use strict";var n=i("e193"),a=i.n(n);a.a},"8b60":function(e,t,i){"use strict";var n=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("v-uni-view",{staticClass:"page"},[i("v-uni-view",{staticClass:"back"},[i("uni-icon",{attrs:{size:"28",type:"arrowleft"},on:{click:function(t){t=e.$handleEvent(t),e.back()}}})],1),i("v-uni-view",{staticClass:"pass"},[i("v-uni-view",{staticClass:"log-input"},[i("v-uni-text",[e._v("銀行")]),i("v-uni-view",{staticClass:"uni-input",attrs:{type:"default"},on:{click:function(t){t=e.$handleEvent(t),e.showSinglePicker(t)}}},[e._v(e._s(e.pickerText))])],1),i("v-uni-view",{staticClass:"log-input"},[i("v-uni-text",[e._v("賬戶名稱")]),i("v-uni-input",{attrs:{type:"text",maxlength:"20",placeholder:"請填入賬戶名稱"},model:{value:e.titleofaccount,callback:function(t){e.titleofaccount=t},expression:"titleofaccount"}})],1),i("v-uni-view",{staticClass:"log-input"},[i("v-uni-text",[e._v("賬戶賬號")]),i("v-uni-input",{attrs:{type:"text",maxlength:"20",placeholder:"請填入賬戶賬號"},model:{value:e.account,callback:function(t){e.account=t},expression:"account"}})],1)],1),i("v-uni-view",{staticClass:"body",style:e.image},[i("v-uni-view",{staticClass:"text1"},[e._v("上傳收款二維碼：")]),e.imageSrc?[i("v-uni-image",{staticClass:"image",attrs:{src:e.imageSrc,mode:"widthFix"},on:{click:function(t){t=e.$handleEvent(t),e.chooseImage(t)}}})]:[i("v-uni-view",{staticClass:"img1"},[i("v-uni-view",{staticClass:"uni-hello-addfile",on:{click:function(t){t=e.$handleEvent(t),e.chooseImage(t)}}},[e._v("上傳收款二維碼")])],1)]],2),i("v-uni-view",{staticClass:"body"},[i("v-uni-view",{staticClass:"code"},[i("v-uni-input",{attrs:{type:"number",maxlength:"6",placeholder:"請輸入六位驗證碼"},model:{value:e.verifycode,callback:function(t){e.verifycode=t},expression:"verifycode"}}),e.countdown>61?i("v-uni-button",{staticClass:"check",on:{click:function(t){t=e.$handleEvent(t),e.verification(t)}}},[e._v("獲取驗證碼")]):e._e(),61==e.countdown?i("v-uni-button",{staticClass:"check",on:{click:function(t){t=e.$handleEvent(t),e.verification(t)}}},[e._v("重新獲取")]):e._e(),e.countdown<61?i("v-uni-button",{staticClass:"check",attrs:{disabled:"true"}},[e._v(e._s(e.countdown)+"秒")]):e._e()],1),1==e.status?[i("v-uni-button",{staticClass:"btn-area",on:{click:function(t){t=e.$handleEvent(t),e.update(t)}}},[e._v("確認修改")])]:[i("v-uni-button",{staticClass:"btn-area"},[e._v("確認修改")])]],2),i("mpvue-picker",{ref:"mpvuePicker",attrs:{themeColor:e.themeColor,mode:e.mode,deepLength:e.deepLength,pickerValueDefault:e.pickerValueDefault,pickerValueArray:e.pickerSingleArray},on:{onConfirm:function(t){t=e.$handleEvent(t),e.onConfirm(t)}}}),i("footerNav")],1)},a=[];i.d(t,"a",function(){return n}),i.d(t,"b",function(){return a})},e193:function(e,t,i){var n=i("0ca0");"string"===typeof n&&(n=[[e.i,n,""]]),n.locals&&(e.exports=n.locals);var a=i("4f06").default;a("e1c27250",n,!0,{sourceMap:!1,shadowMode:!1})}}]);