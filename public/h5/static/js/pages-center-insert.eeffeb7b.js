(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-center-insert"],{"097b":function(module,exports,__webpack_require__){"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var _service=_interopRequireDefault(__webpack_require__("db84")),_uniIcon=_interopRequireDefault(__webpack_require__("5692")),_card=_interopRequireDefault(__webpack_require__("d462")),_footer_nav=_interopRequireDefault(__webpack_require__("b807"));function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}var _default={components:{uniIcon:_uniIcon.default,mpvuePicker:_card.default,footerNav:_footer_nav.default},data:function(){return{pickerSingleArray:[],user:uni.getStorageSync("user"),token:uni.getStorageSync("token"),name:"",account:"",mobile:"",verifycode:"",code:"",type:"",image:"display:none;",countdown:62,radio:1,imageSrc:"",themeColor:"#007AFF",pickerText:"請選擇",mode:"",deepLength:1,pickerValueDefault:[0],status:1}},onShow:function(){this.mobile=this.user.account,_service.default.auth(this,_service.default.api.center.type+"?token="+this.token,{},function(e,t){if(1==t.code){var a=t.data.typelist;e.pickerSingleArray=a}})},methods:{back:function(){uni.reLaunch({url:"/pages/center/card"})},chooseImage:function(){var e=this;uni.chooseImage({count:1,sizeType:["compressed"],sourceType:["album"],success:function(t){var a=t.tempFilePaths[0];e.imageSrc=a},fail:function(e){console.log("chooseImage fail",e)}})},verification:function(){var e=this;uni.request({url:_service.default.api.center.code,method:"GET",data:{token:this.token,account:this.mobile},success:function(t){t=t.data;uni.showToast({icon:"none",title:t.msg}),1==t.code&&e.codetime(e,60)}})},codetime:function(e,t){e.countdown=t<10?"0"+t:t,t--,t<0?e.countdown=61:setTimeout(function(){e.codetime(e,t)},1e3)},showSinglePicker:function(){this.mode="selector",this.deepLength=1,this.pickerValueDefault=[0],this.$refs.mpvuePicker.show()},onConfirm:function(e){this.imageSrc="",this.pickerText=e.name,this.code=e.ispaymentcode,this.type=e.type,0==e.ispaymentcode?this.image="display:none;":this.image="display:block;"},update:function update(){6==this.verifycode.length?""!=this.type?""!=this.name?""!=this.account?1!=this.code||""!=this.imageSrc?(self=this,uni.showModal({content:"確認添加銀行卡信息嗎？",cancelText:"取消",confirmText:"確認",confirmColor:"#FFAE00",cancelColor:"#D2D2D2",success:function success(res){if(res.confirm){self.status=0;var uploadTask=uni.uploadFile({url:_service.default.api.center.submit+"?token="+self.token,filePath:self.imageSrc,name:"file",formData:{type:self.type,titleofaccount:self.name,account:self.account,verifycode:self.verifycode,ispaymentcode:self.code},success:function success(res){res=res.data,console.log(res),res=eval("("+res+")"),uni.showToast({icon:"none",title:res.msg}),1==res.code?setTimeout(function(){uni.navigateBack({delta:1})},1e3):self.status=1}})}}})):uni.showToast({icon:"none",title:"請上傳付款憑證"}):uni.showToast({icon:"none",title:"請輸入賬戶賬號"}):uni.showToast({icon:"none",title:"請輸入賬戶名稱"}):uni.showToast({icon:"none",title:"銀行未選擇"}):uni.showToast({icon:"none",title:"請輸入六位驗證碼"})}}};exports.default=_default},"1b45":function(e,t,a){"use strict";a.r(t);var i=a("8058"),n=a("adfd");for(var o in n)"default"!==o&&function(e){a.d(t,e,function(){return n[e]})}(o);a("eab5");var s=a("2877"),c=Object(s["a"])(n["default"],i["a"],i["b"],!1,null,"877cdba2",null);t["default"]=c.exports},8058:function(e,t,a){"use strict";var i=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-uni-view",{staticClass:"page"},[a("v-uni-view",{staticClass:"back"},[a("uni-icon",{attrs:{size:"28",type:"arrowleft"},on:{click:function(t){t=e.$handleEvent(t),e.back()}}})],1),a("v-uni-view",{staticClass:"pass"},[a("v-uni-view",{staticClass:"log-input"},[a("v-uni-text",[e._v("銀行")]),a("v-uni-view",{staticClass:"uni-input",attrs:{type:"default"},on:{click:function(t){t=e.$handleEvent(t),e.showSinglePicker(t)}}},[e._v(e._s(e.pickerText))])],1),a("v-uni-view",{staticClass:"log-input"},[a("v-uni-text",[e._v("賬戶名稱")]),a("v-uni-input",{attrs:{type:"text",maxlength:"20",placeholder:"請填入賬戶名稱"},model:{value:e.name,callback:function(t){e.name=t},expression:"name"}})],1),a("v-uni-view",{staticClass:"log-input"},[a("v-uni-text",[e._v("賬戶賬號")]),a("v-uni-input",{attrs:{type:"text",maxlength:"20",placeholder:"請填入賬戶賬號"},model:{value:e.account,callback:function(t){e.account=t},expression:"account"}})],1)],1),a("v-uni-view",{staticClass:"body",style:e.image},[a("v-uni-view",{staticClass:"text1"},[e._v("上傳收款二維碼：")]),e.imageSrc?[a("v-uni-image",{staticClass:"image",attrs:{src:e.imageSrc,mode:"widthFix"},on:{click:function(t){t=e.$handleEvent(t),e.chooseImage(t)}}})]:[a("v-uni-view",{staticClass:"img1"},[a("v-uni-view",{staticClass:"uni-hello-addfile",on:{click:function(t){t=e.$handleEvent(t),e.chooseImage(t)}}},[e._v("上傳收款二維碼")])],1)]],2),a("v-uni-view",{staticClass:"body"},[a("v-uni-view",{staticClass:"code"},[a("v-uni-input",{attrs:{type:"number",maxlength:"6",placeholder:"請輸入六驗證碼"},model:{value:e.verifycode,callback:function(t){e.verifycode=t},expression:"verifycode"}}),e.countdown>61?a("v-uni-button",{staticClass:"check",on:{click:function(t){t=e.$handleEvent(t),e.verification(t)}}},[e._v("獲取驗證碼")]):e._e(),61==e.countdown?a("v-uni-button",{staticClass:"check",on:{click:function(t){t=e.$handleEvent(t),e.verification(t)}}},[e._v("重新獲取")]):e._e(),e.countdown<61?a("v-uni-button",{staticClass:"check",attrs:{disabled:"true"}},[e._v(e._s(e.countdown)+"秒")]):e._e()],1),1==e.status?[a("v-uni-button",{staticClass:"btn-area",on:{click:function(t){t=e.$handleEvent(t),e.update(t)}}},[e._v("確認添加")])]:[a("v-uni-button",{staticClass:"btn-area"},[e._v("確認添加")])]],2),a("mpvue-picker",{ref:"mpvuePicker",attrs:{themeColor:e.themeColor,mode:e.mode,deepLength:e.deepLength,pickerValueDefault:e.pickerValueDefault,pickerValueArray:e.pickerSingleArray},on:{onConfirm:function(t){t=e.$handleEvent(t),e.onConfirm(t)}}}),a("footerNav")],1)},n=[];a.d(t,"a",function(){return i}),a.d(t,"b",function(){return n})},a053:function(e,t,a){var i=a("d916");"string"===typeof i&&(i=[[e.i,i,""]]),i.locals&&(e.exports=i.locals);var n=a("4f06").default;n("6c130c77",i,!0,{sourceMap:!1,shadowMode:!1})},adfd:function(e,t,a){"use strict";a.r(t);var i=a("097b"),n=a.n(i);for(var o in i)"default"!==o&&function(e){a.d(t,e,function(){return i[e]})}(o);t["default"]=n.a},d916:function(e,t,a){t=e.exports=a("2350")(!1),t.push([e.i,'uni-page-body[data-v-877cdba2]{background-color:#e5e5e5}@font-face{font-family:HMfont-home;src:url("data:application/x-font-woff2;charset=utf-8;base64,d09GMgABAAAAAAn8AAsAAAAAE1wAAAmvAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHEIGVgCFDAqWYJI9ATYCJANACyIABCAFhFUHgV8bThBRlFFWNdkXBXbDsSFQq221McNWrxUbYqGhiTju98MTeXqNh/9fo90388cEMe0bwSOJRIjavZIgESqnE5J5JqQVDZH/XdNfoHSAjqKqRsA+Tf/Ruya33E/bkdHsJtycY2XWAGbM5oenzf173A3lHrEilsmMbu74Y5VmYtxpgza9DMxkWL0gfjGbGRE54AL2f2ut3h2u8Q7RaZRCjDPLIv8cfAUR30MtEUWbSReVJkk0RB4lWWkNg7WVA1sBKmIUdr0uzibQOmxA4vrWwQXkJUweKHPfdwXkA+FSik2o1aVizyTegEKdvWINwGv59bEGY9GeTJFjW95pswIrzz3LYi//0O4JEaDrY3DZjxwXgUR8V3IfIeXARaloVRXT3mK/tsi3LubcJfese8l96Xbd1l1ve2z7eJp5lv3zB7URSdJNYd3Dfm7UUxxkGu0sLFcbVEa5pP3D6/QmokQw3OGzfJp/2kBkLJYQDYuziJbFJUSweIkoWXQRNYuEGFi0BLzFOhAjS4+InKUPRGI5I2a+kg7VSWUGoXoos2BNmGIWexwFroD8IUD6C1A9lYp8F3ClwsFgcgPdNpN08v1czkEOJ4aeieaC3QyVfb9PX2kbn9/0CwTeNAm79H1Kc2x3i9C7LcEZtMSLfE6T4aM+YWOm06dZ5cm9I+xoYw+rqGlScKKlHytu9h6Dw0E5nXK7nbTZknT1jFldR9cuzNMz9Srf7FydqpYW5mRr6Dq1OC9HqzYzoiw1cjohV2tX1Ji1K9bSdVkEbaxS1xQwpmpVpUFheyyzPyGdbXKHexkByib+vtgeK1X75xKqWl+grUNIbRZDXT31tBMiPZAyF0KmniCQhSgACkh5+gIxtvTS/si+VjbAuY6SMdCzbqInzwkjk5ENzMCkNv+ghQQ0qSSAUGmAMQoBozoAIrUe6qpzM+tma1T1jDgvVzdBWcIcLT170njGQU3cCpnUTSdkHH3ltwPHpKotTIP6HH12Lvd4czCWgbJYhY1U5ddlTCICSs1is0in8tXExk7VVRuMQhIQGgOtFcolPmMkIqDVduTGEOn1jI4gFERmSUsv3rGmoKUEQLITLUyzqpFukq8T6U+omVQsT8XHxsnipPEyBAlKNmkNMlMJgOT5Tpsoo2RGP3lOTQyk5GRBgJKw2WQsarWzSa1aLF/+UBk2PkA3wEkBM/RwOLJ0ORWiVCR3YYAAFyIlAdaNqEnmh0sTqOsAq97R85Jt+HGHrNKWgDHmxOPxumKmRGzudayPtogu9D2Zx688C3D6XJSgpgF6MJbomdtyOYBgcXOGSgMAPXqy+F11pMYHlFLCkkKM0S1T+U5SN0Ynh39SxcxmTPNHrTFIuieyxYgZXSDUAPpLLT2ZciVvihOh05k+JIAjoL7HtNsVFc5Rl+1hgAAIlNqGX3GEK0llMm0nZUdmhQzymg3Q9j6yO4FQsmqtQbXmZ+z+sOynUrt3nmbeXu3MYW9f8y38128LpWAVeyLMz4cTORbEDPYKHU19Oyx0OF12GIhfEx+/RRIm2RzPeIPE2yYRM7HBWBx+GvANWXAlMYcmWriz1/Tt2bk+jq7CdOzMu5zsn3zZXwg2Gu14YCBuh3NggN0DI8BbJpCXZb2I4xh+kdAmbU0IA6HYquya81nqYSk87Xgi35ur4HnxZWEvnoLrzbOEjHmJiY2JjV6I8c4ynSEsJTKcHxuWYPRFFleV2Sbi0Dsk4XmDSToXTMnUnW/PW9J9W4UCgP+h0rTi9tiJd6qQgk2lPI/KKeybAPx+c7vZHdimbruzyCP9iZvd0VuBuIniuXirHQ8oG2IThFIUI8QOhjfNMg86GH4Bv4ixLlr4BDi2wDDwXTYYTgfnBJur1nAw2yGngw96JhQo+48cMWVE8kWwcA55ZuzwkSP/mpp9D6wFm2e1Bc8cPVraL2Ng7y6KfSNHqQfTYByYMmbT73WNmwZs6m8sBR54XCndTHwvu6v+8N+Jze9/jeGd8bpoHePtMv0/9U6e78bTtf+aly55P40cNtJ3PH3U6xQ9DkRNos+Chp2TpNwX4lZOwkTa4nOLPxpMLc8Sm0srSwD6Y1KW7ftPZ68x3DWS8d4cJbAKE6QJEfRrhAafMLV0RoCRLhKdBaJzNtzPD7dxLIgZ7Al4006exyHEYXMewjqApFokPRIu9FvLiPf96uWlpuZmRZKiH1i0OCNj1ar7zSDqYiRbCQsMrKUXZswxBkQEbCmv2RJgKK82+UcGbpk+0woVSxekQrYCzp4Hk30E3oHhAh+4fLcOPCfzOVu3cvKkHAWzNAVyjAyOQsrJix47n0OZpbTUDKdJp8CZs+BkAKfMnDkF+kJmmrcN4OSZs8CRuwZ+N76gampCxtj83XWO5X1GYc7hIypq+N32eTe6Wr/GfXW5GukBLnvJ1gEPhlmsuUHzg3Osp/vJCZ4flGsFf27fjV18spjdTfQUuVANcgldRA3hKhSUutCGgGhDaMo0tXMHwiUq3gG5entO2xmnECa3H53AjRpKFFYIK7qrHjMJ75sEC91BPlGc0TlZY9qlsdcuZaXy0D3hfz4cmLd2WzbK3Xhhdw7c2VLCxtxsFCMEo8bArEww9ruOrc5joK9g1xp85MghQ4wyuPV71+/tMVxAMmzA1lSt+WmbjFkwL/lV6az7APzZ5qvVmmy7b1bJGrTDhmRfMBYbWMZmNOu3bJdPlLL/5WOR2XZCTJpmU4mx8lv9Fg76T8NagO4vUacJ+n/Sr0b/LYb8+1z5QCb935a0m6WWYXzwh4DO2Sa9g2jEnJ6tYwTU5jp7N2RmaHkn/gjEb/fXpmpXbkpAGaAv7pnKAfdc6bg4GZx1L3QuQ8lVC3BvXbC8f2eHQEqkBuc9aO6h9849M3oPucrgAyQY/HEv7PYJJQy23Ft3/R+xczqmsHWDgrDCyzfcl1o5ehKxnUOr5Bm6NhTGR4u1rtDEvlZ8dGgklLeNCk3ZbeKaO0bkcMfoKt+6ng/DUPPI6AAlDXlE0dzwsKPadkjqKjDXGEgg4b2CK7vx65M0xSlPmNsOA58/g1xWSDDKeq/KV5AR89+zc6OGjKSKtxUqR4NtF47VuMZemcTBDQxGqzqqrXIMCnm2xkXq1QJIIkO8EpmROcOkIyevYmhUqurWBmgCe4U5WJFHiiLKqKKOJtrooo8hxphihl6g5bGv3MAXkfBvPaFbVq6ga4Uq+wWdEfo6NVTmr1oVkYoye2NvfCWLmYQx0sjozFSxszhZ4Ctjb7QtavLQDNa0L5HRZQYJYxrNLbJR4QhZvOV46Fm/lqB428nsrJSx/OwbEgYA") format("woff2")}.icon[data-v-877cdba2]{font-family:HMfont-home!important;font-size:%?56?%;font-style:normal;color:#333}.icon.biaoqing[data-v-877cdba2]:before{content:"\\E797"}.icon.jianpan[data-v-877cdba2]:before{content:"\\E7B2"}.icon.yuyin[data-v-877cdba2]:before{content:"\\E805"}.icon.tupian[data-v-877cdba2]:before{content:"\\E639"}.icon.chehui[data-v-877cdba2]:before{content:"\\E904"}.icon.luyin[data-v-877cdba2]:before{content:"\\E905"}.icon.luyin2[data-v-877cdba2]:before{content:"\\E677"}.icon.other-voice[data-v-877cdba2]:before{content:"\\E667"}.icon.my-voice[data-v-877cdba2]:before{content:"\\E906"}.icon.hongbao[data-v-877cdba2]:before{content:"\\E626"}.icon.tupian2[data-v-877cdba2]:before{content:"\\E674"}.icon.paizhao[data-v-877cdba2]:before{content:"\\E63E"}.icon.add[data-v-877cdba2]:before{content:"\\E655"}.icon.close[data-v-877cdba2]:before{content:"\\E607"}.icon.to[data-v-877cdba2]:before{content:"\\E675"}.hidden[data-v-877cdba2]{display:none!important}.popup-layer[data-v-877cdba2]{-webkit-transition:all .15s linear;-o-transition:all .15s linear;transition:all .15s linear;width:96%;height:42vw;padding:%?20?% 2%;background-color:#f3f3f3;border-top:solid %?1?% #ddd;position:fixed;z-index:20;top:100%}.popup-layer.showLayer[data-v-877cdba2]{-webkit-transform:translate3d(0,-42vw,0);transform:translate3d(0,-42vw,0)}.popup-layer .emoji-swiper[data-v-877cdba2]{height:40vw}.popup-layer .emoji-swiper uni-swiper-item[data-v-877cdba2]{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-content:flex-start;-ms-flex-line-pack:start;align-content:flex-start;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap}.popup-layer .emoji-swiper uni-swiper-item uni-view[data-v-877cdba2]{width:12vw;height:12vw;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center}.popup-layer .emoji-swiper uni-swiper-item uni-view uni-image[data-v-877cdba2]{width:8.4vw;height:8.4vw}.popup-layer .more-layer[data-v-877cdba2]{width:100%;height:42vw}.popup-layer .more-layer .list[data-v-877cdba2]{width:100%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap}.popup-layer .more-layer .list .box[data-v-877cdba2]{width:18vw;height:18vw;border-radius:%?20?%;background-color:#fff;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;margin:0 3vw 2vw 3vw}.popup-layer .more-layer .list .box .icon[data-v-877cdba2]{font-size:%?70?%}.input-box[data-v-877cdba2]{width:98%;height:%?100?%;padding:0 1%;background-color:#f2f2f2;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;position:fixed;z-index:20;bottom:%?-2?%;-webkit-transition:all .15s linear;-o-transition:all .15s linear;transition:all .15s linear;border-bottom:solid %?1?% #ddd}.input-box.showLayer[data-v-877cdba2]{-webkit-transform:translate3d(0,-42vw,0);transform:translate3d(0,-42vw,0)}.input-box .more[data-v-877cdba2],.input-box .voice[data-v-877cdba2]{-webkit-flex-shrink:0;-ms-flex-negative:0;flex-shrink:0;width:%?90?%;height:%?100?%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center}.input-box .send[data-v-877cdba2]{\nmargin-left:%?20?%;\n-webkit-flex-shrink:0;-ms-flex-negative:0;flex-shrink:0;width:%?100?%;height:%?100?%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center}.input-box .send .btn[data-v-877cdba2]{width:%?90?%;height:%?56?%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;background:-webkit-gradient(linear,left top,right top,from(#f09b37),to(#eb632c));background:-o-linear-gradient(left,#f09b37,#eb632c);background:linear-gradient(90deg,#f09b37,#eb632c);color:#fff;border-radius:%?6?%;font-size:%?24?%}.input-box .textbox[data-v-877cdba2]{width:100%;height:%?70?%;margin-top:%?15?%}.input-box .textbox .voice-mode[data-v-877cdba2]{width:calc(100% - %?2?%);height:%?68?%;border-radius:%?70?%;border:solid %?1?% #cdcdcd;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;font-size:%?28?%;background-color:#fff;color:#555}.input-box .textbox .voice-mode.recording[data-v-877cdba2]{background-color:#e5e5e5}.input-box .textbox .text-mode[data-v-877cdba2]{width:100%;height:%?70?%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;background-color:#fff;border-radius:%?40?%}.input-box .textbox .text-mode .box[data-v-877cdba2]{width:100%;padding-left:%?30?%;height:%?70?%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center}.input-box .textbox .text-mode .box uni-textarea[data-v-877cdba2]{width:100%;height:%?70?%;line-height:%?70?%}.input-box .textbox .text-mode .em[data-v-877cdba2]{-webkit-flex-shrink:0;-ms-flex-negative:0;flex-shrink:0;width:%?80?%;padding-left:%?10?%;height:%?70?%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center}.record[data-v-877cdba2]{width:40vw;height:40vw;position:fixed;top:55%;left:30%;background-color:rgba(0,0,0,.6);border-radius:%?20?%}.record .ing[data-v-877cdba2]{width:100%;height:30vw;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center}@-webkit-keyframes volatility-data-v-877cdba2{0%{background-position:0 130%}20%{background-position:0 150%}30%{background-position:0 155%}40%{background-position:0 150%}50%{background-position:0 145%}70%{background-position:0 150%}80%{background-position:0 155%}90%{background-position:0 140%}to{background-position:0 135%}}@keyframes volatility-data-v-877cdba2{0%{background-position:0 130%}20%{background-position:0 150%}30%{background-position:0 155%}40%{background-position:0 150%}50%{background-position:0 145%}70%{background-position:0 150%}80%{background-position:0 155%}90%{background-position:0 140%}to{background-position:0 135%}}.record .ing .icon[data-v-877cdba2]{background-image:-webkit-gradient(linear,left top,left bottom,from(#f09b37),color-stop(50%,#fff));background-image:-o-linear-gradient(top,#f09b37,#fff 50%);background-image:linear-gradient(180deg,#f09b37,#fff 50%);background-size:100% 200%;-webkit-animation:volatility-data-v-877cdba2 1.5s ease-in-out -1.5s infinite alternate;animation:volatility-data-v-877cdba2 1.5s ease-in-out -1.5s infinite alternate;-webkit-background-clip:text;-webkit-text-fill-color:rgba(0,0,0,0);font-size:%?150?%;color:#f09b37}.record .cancel[data-v-877cdba2]{width:100%;height:30vw;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center}.record .cancel .icon[data-v-877cdba2]{color:#fff;font-size:%?150?%}.record .tis[data-v-877cdba2]{width:100%;height:10vw;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;font-size:%?28?%;color:#fff}.record .tis.change[data-v-877cdba2]{color:#f09b37}.content[data-v-877cdba2]{width:100%}.content .msg-list[data-v-877cdba2]{width:100%;position:absolute;top:0\n    /* bottom: 100upx; */}.content .msg-list .loading[data-v-877cdba2]{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center}@-webkit-keyframes stretchdelay-data-v-877cdba2{0%,40%,to{-webkit-transform:scaleY(.6);transform:scaleY(.6)}20%{-webkit-transform:scaleY(1);transform:scaleY(1)}}@keyframes stretchdelay-data-v-877cdba2{0%,40%,to{-webkit-transform:scaleY(.6);transform:scaleY(.6)}20%{-webkit-transform:scaleY(1);transform:scaleY(1)}}.content .msg-list .loading .spinner[data-v-877cdba2]{margin:%?20?% 0;width:%?60?%;height:%?100?%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between}.content .msg-list .loading .spinner uni-view[data-v-877cdba2]{background-color:#f06c7a;height:%?50?%;width:%?6?%;border-radius:%?6?%;-webkit-animation:stretchdelay-data-v-877cdba2 1.2s infinite ease-in-out;animation:stretchdelay-data-v-877cdba2 1.2s infinite ease-in-out}.content .msg-list .loading .spinner .rect2[data-v-877cdba2]{-webkit-animation-delay:-1.1s;animation-delay:-1.1s}.content .msg-list .loading .spinner .rect3[data-v-877cdba2]{-webkit-animation-delay:-1s;animation-delay:-1s}.content .msg-list .loading .spinner .rect4[data-v-877cdba2]{-webkit-animation-delay:-.9s;animation-delay:-.9s}.content .msg-list .loading .spinner .rect5[data-v-877cdba2]{-webkit-animation-delay:-.8s;animation-delay:-.8s}.content .msg-list .row[data-v-877cdba2]{padding:%?20?% 0}.content .msg-list .row .system[data-v-877cdba2]{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center}.content .msg-list .row .system uni-view[data-v-877cdba2]{padding:0 %?30?%;height:%?50?%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;background-color:#c9c9c9;color:#fff;font-size:%?24?%;border-radius:%?40?%}.content .msg-list .row .system .red-envelope uni-image[data-v-877cdba2]{margin-right:%?5?%;width:%?30?%;height:%?30?%}.content .msg-list .row[data-v-877cdba2]:first-child{margin-top:%?20?%}.content .msg-list .row .my .left[data-v-877cdba2],.content .msg-list .row .other .right[data-v-877cdba2]{width:100%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex}.content .msg-list .row .my .left .bubble[data-v-877cdba2],.content .msg-list .row .other .right .bubble[data-v-877cdba2]{max-width:70%;min-height:%?50?%;border-radius:%?10?%;padding:%?15?% %?20?%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;font-size:%?32?%;word-break:break-word}.content .msg-list .row .my .left .bubble.img[data-v-877cdba2],.content .msg-list .row .other .right .bubble.img[data-v-877cdba2]{background-color:rgba(0,0,0,0);padding:0;overflow:hidden}.content .msg-list .row .my .left .bubble.img uni-image[data-v-877cdba2],.content .msg-list .row .other .right .bubble.img uni-image[data-v-877cdba2]{max-width:%?350?%;max-height:%?350?%}.content .msg-list .row .my .left .bubble.red-envelope[data-v-877cdba2],.content .msg-list .row .other .right .bubble.red-envelope[data-v-877cdba2]{background-color:rgba(0,0,0,0);padding:0;overflow:hidden;position:relative;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:start;-webkit-align-items:flex-start;-ms-flex-align:start;align-items:flex-start}.content .msg-list .row .my .left .bubble.red-envelope uni-image[data-v-877cdba2],.content .msg-list .row .other .right .bubble.red-envelope uni-image[data-v-877cdba2]{width:%?250?%;height:%?313?%}.content .msg-list .row .my .left .bubble.red-envelope .tis[data-v-877cdba2],.content .msg-list .row .other .right .bubble.red-envelope .tis[data-v-877cdba2]{position:absolute;top:6%;font-size:%?26?%;color:#9c1712}.content .msg-list .row .my .left .bubble.red-envelope .blessing[data-v-877cdba2],.content .msg-list .row .other .right .bubble.red-envelope .blessing[data-v-877cdba2]{position:absolute;bottom:14%;color:#e9b874;width:80%;text-align:center;overflow:hidden;display:-webkit-box;-webkit-box-orient:vertical;-webkit-line-clamp:2}.content .msg-list .row .my .left .bubble.voice .icon[data-v-877cdba2],.content .msg-list .row .other .right .bubble.voice .icon[data-v-877cdba2]{font-size:%?40?%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center}.content .msg-list .row .my .left .bubble.voice .icon[data-v-877cdba2]:after,.content .msg-list .row .other .right .bubble.voice .icon[data-v-877cdba2]:after{content:" ";width:%?53?%;height:%?53?%;border-radius:100%;position:absolute;-webkit-box-sizing:border-box;box-sizing:border-box}.content .msg-list .row .my .left .bubble.voice .length[data-v-877cdba2],.content .msg-list .row .other .right .bubble.voice .length[data-v-877cdba2]{font-size:%?28?%}.content .msg-list .row .my .right[data-v-877cdba2],.content .msg-list .row .other .left[data-v-877cdba2]{-webkit-flex-shrink:0;-ms-flex-negative:0;flex-shrink:0;width:%?80?%;height:%?80?%}.content .msg-list .row .my .right uni-image[data-v-877cdba2],.content .msg-list .row .other .left uni-image[data-v-877cdba2]{width:%?80?%;height:%?80?%;border-radius:50%}.content .msg-list .row .my[data-v-877cdba2]{width:100%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:end;-webkit-justify-content:flex-end;-ms-flex-pack:end;justify-content:flex-end}.content .msg-list .row .my .left[data-v-877cdba2]{min-height:%?80?%;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:end;-webkit-justify-content:flex-end;-ms-flex-pack:end;justify-content:flex-end}.content .msg-list .row .my .left .bubble[data-v-877cdba2]{background-color:#f06c7a;color:#fff}.content .msg-list .row .my .left .bubble.voice .icon[data-v-877cdba2]{color:#fff}.content .msg-list .row .my .left .bubble.voice .length[data-v-877cdba2]{margin-right:%?20?%}@-webkit-keyframes my-play-data-v-877cdba2{0%{-webkit-transform:translateX(80%);transform:translateX(80%)}to{-webkit-transform:translateX(0);transform:translateX(0)}}@keyframes my-play-data-v-877cdba2{0%{-webkit-transform:translateX(80%);transform:translateX(80%)}to{-webkit-transform:translateX(0);transform:translateX(0)}}.content .msg-list .row .my .left .bubble.play .icon[data-v-877cdba2]:after{border-left:solid %?10?% rgba(240,108,122,.5);-webkit-animation:my-play-data-v-877cdba2 1s linear infinite;animation:my-play-data-v-877cdba2 1s linear infinite}.content .msg-list .row .my .right[data-v-877cdba2]{margin-left:%?15?%}.content .msg-list .row .other[data-v-877cdba2]{width:100%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex}.content .msg-list .row .other .left[data-v-877cdba2]{margin-right:%?15?%}.content .msg-list .row .other .right[data-v-877cdba2]{-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap}.content .msg-list .row .other .right .username[data-v-877cdba2]{width:100%;height:%?45?%;font-size:%?24?%;color:#999;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex}.content .msg-list .row .other .right .username .name[data-v-877cdba2]{margin-right:%?50?%}.content .msg-list .row .other .right .bubble[data-v-877cdba2]{background-color:#fff;color:#333}.content .msg-list .row .other .right .bubble.voice .icon[data-v-877cdba2]{color:#333}.content .msg-list .row .other .right .bubble.voice .length[data-v-877cdba2]{margin-left:%?20?%}@-webkit-keyframes other-play-data-v-877cdba2{0%{-webkit-transform:translateX(-80%);transform:translateX(-80%)}to{-webkit-transform:translateX(0);transform:translateX(0)}}@keyframes other-play-data-v-877cdba2{0%{-webkit-transform:translateX(-80%);transform:translateX(-80%)}to{-webkit-transform:translateX(0);transform:translateX(0)}}.content .msg-list .row .other .right .bubble.play .icon[data-v-877cdba2]:after{border-right:solid %?10?% hsla(0,0%,100%,.8);-webkit-animation:other-play-data-v-877cdba2 1s linear infinite;animation:other-play-data-v-877cdba2 1s linear infinite}.windows .mask[data-v-877cdba2]{position:fixed;top:100%;width:100%;height:100%;z-index:1000;background-color:rgba(0,0,0,.6);opacity:0;-webkit-transition:opacity .2s ease-out;-o-transition:opacity .2s ease-out;transition:opacity .2s ease-out}.windows .layer[data-v-877cdba2]{position:fixed;width:80%;height:70%;left:10%;z-index:1001;border-radius:%?20?%;overflow:hidden;top:100%;-webkit-transform:scale3d(.5,.5,1);transform:scale3d(.5,.5,1);-webkit-transition:all .2s ease-out;-o-transition:all .2s ease-out;transition:all .2s ease-out}.windows.show[data-v-877cdba2]{display:block}.windows.show .mask[data-v-877cdba2]{top:0;opacity:1}.windows.show .layer[data-v-877cdba2]{-webkit-transform:translate3d(0,-85vh,0) scaleX(1);transform:translate3d(0,-85vh,0) scaleX(1)}.windows.hide[data-v-877cdba2]{display:block}.windows.hide .mask[data-v-877cdba2]{top:0;opacity:0}.open-redenvelope[data-v-877cdba2]{width:100%;height:70vh;background-color:#cf3c35;position:relative}.open-redenvelope .top[data-v-877cdba2]{width:100%;background-color:#fe5454;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;border-radius:0 0 100% 100%;-webkit-box-shadow:inset 0 %?-20?% 0 #9c1712;box-shadow:inset 0 %?-20?% 0 #9c1712;margin-bottom:%?65?%}.open-redenvelope .top .close-btn[data-v-877cdba2]{width:100%;height:%?80?%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:end;-webkit-justify-content:flex-end;-ms-flex-pack:end;justify-content:flex-end;margin-bottom:%?30?%}.open-redenvelope .top .close-btn .icon[data-v-877cdba2]{color:#9c1712;margin-top:%?10?%;margin-right:%?10?%}.open-redenvelope .top uni-image[data-v-877cdba2]{width:%?130?%;height:%?130?%;border:solid %?12?% #cf3c35;border-radius:100%;margin-bottom:%?-65?%}.open-redenvelope .blessing[data-v-877cdba2],.open-redenvelope .from[data-v-877cdba2],.open-redenvelope .money[data-v-877cdba2],.open-redenvelope .showDetails[data-v-877cdba2]{width:90%;padding:%?5?% 5%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;font-size:%?32?%;color:#fff}.open-redenvelope .money[data-v-877cdba2]{font-size:%?100?%;color:#f8d757;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;padding-top:%?20?%}.open-redenvelope .showDetails[data-v-877cdba2]{position:absolute;bottom:%?20?%;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;font-size:%?28?%;color:#f8d757}.open-redenvelope .showDetails .icon[data-v-877cdba2]{font-size:%?26?%;color:#f8d757}uni-page-body[data-v-877cdba2]{background:#f7f7f7}.pass[data-v-877cdba2]{padding:%?40?% %?40?% %?0?%}.body[data-v-877cdba2]{padding:%?0?% %?40?%}.img1[data-v-877cdba2]{color:#ddd;height:%?300?%;font-size:%?40?%;text-align:center;line-height:%?300?%;background-color:#fff;border:%?4?% dashed #ddd}.body .image[data-v-877cdba2]{height:%?300?%}.uni-input[data-v-877cdba2]{color:#6d6d72;font-size:%?34?%}body.?%PAGE?%[data-v-877cdba2]{background-color:#e5e5e5;background:#f7f7f7}',""])},eab5:function(e,t,a){"use strict";var i=a("a053"),n=a.n(i);n.a}}]);