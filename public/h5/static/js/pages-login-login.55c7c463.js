(window["webpackJsonp"] = window["webpackJsonp"] || []).push([
    ["pages-login-login"], {
        "020c": function(e, t, n) {
            "use strict";
            n.r(t);
            var o = n("c1be"),
                i = n.n(o);
            for (var r in o) "default" !== r && function(e) {
                n.d(t, e, function() {
                    return o[e]
                })
            }(r);
            t["default"] = i.a
        },
        "176b": function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var o = {
                props: {
                    type: String,
                    color: String,
                    size: [Number, String]
                },
                computed: {
                    fontSize: function() {
                        return "".concat(this.size, "px")
                    }
                },
                methods: {
                    onClick: function() {
                        this.$emit("click")
                    }
                }
            };
            t.default = o
        },
        "29a1": function(e, t, n) {
            "use strict";
            n.r(t);
            var o = n("b1e8"),
                i = n("020c");
            for (var r in i) "default" !== r && function(e) {
                n.d(t, e, function() {
                    return i[e]
                })
            }(r);
            n("63ff");
            var a = n("2877"),
                s = Object(a["a"])(i["default"], o["a"], o["b"], !1, null, "bbd785de", null);
            t["default"] = s.exports
        },
        "2bd1": function(e, t, n) {
            var o = n("782c");
            "string" === typeof o && (o = [
                [e.i, o, ""]
            ]), o.locals && (e.exports = o.locals);
            var i = n("4f06").default;
            i("98020aec", o, !0, {
                sourceMap: !1,
                shadowMode: !1
            })
        },
        "2ed0": function(e, t, n) {
            "use strict";
            var o = function() {
                    var e = this,
                        t = e.$createElement,
                        n = e._self._c || t;
                    return n("v-uni-view", {
                        staticClass: "uni-icon",
                        class: ["uni-icon-" + e.type],
                        style: {
                            color: e.color,
                            "font-size": e.fontSize
                        },
                        on: {
                            click: function(t) {
                                t = e.$handleEvent(t), e.onClick()
                            }
                        }
                    })
                },
                i = [];
            n.d(t, "a", function() {
                return o
            }), n.d(t, "b", function() {
                return i
            })
        },
        "3aeb": function(e, t, n) {
            "use strict";
            n.r(t);
            var o = n("176b"),
                i = n.n(o);
            for (var r in o) "default" !== r && function(e) {
                n.d(t, e, function() {
                    return o[e]
                })
            }(r);
            t["default"] = i.a
        },
        "5d50": function(e, t, n) {
            "use strict";
            n.r(t);
            var o = n("2ed0"),
                i = n("3aeb");
            for (var r in i) "default" !== r && function(e) {
                n.d(t, e, function() {
                    return i[e]
                })
            }(r);
            var a = n("2877"),
                s = Object(a["a"])(i["default"], o["a"], o["b"], !1, null, null, null);
            t["default"] = s.exports
        },
        "63ff": function(e, t, n) {
            "use strict";
            var o = n("2bd1"),
                i = n.n(o);
            i.a
        },
        "782c": function(e, t, n) {
            t = e.exports = n("2350")(!1), t.push([e.i, "uni-page-body[data-v-bbd785de]{background:#000}.content[data-v-bbd785de]{height:100%}.back_img[data-v-bbd785de]{top:0;left:0;z-index:1;width:100%;height:100%;position:absolute}.login[data-v-bbd785de]{z-index:998;width:100%;height:100%}.log[data-v-bbd785de]{z-index:2;position:relative;padding:%?100?% %?70?% %?0?%}.log-lable[data-v-bbd785de]{z-index:2;position:relative;font-size:%?48?%;font-weight:700;text-align:center;padding-top:%?200?%;color:#000}.log-title[data-v-bbd785de]{height:%?90?%;color:#929292;font-size:%?32?%;line-height:%?90?%}.log-prompt[data-v-bbd785de]{width:100%;height:%?24?%;font-size:%?24?%;font-weight:500;margin-top:%?80?%;line-height:%?46?%;color:#999}.log-input[data-v-bbd785de]{height:%?90?%;line-height:%?90?%;padding-left:%?40?%;background:#fff;-webkit-border-radius:%?45?%;border-radius:%?45?%;margin-bottom:%?40?%}.log-input uni-text[data-v-bbd785de]{width:25%}uni-input[data-v-bbd785de]{width:%?400?%}.log-remark[data-v-bbd785de]{width:100%;height:%?18?%;font-size:%?19?%;font-weight:500;margin-top:%?30?%;line-height:%?46?%;color:#656565}.btn-area[data-v-bbd785de]{margin:%?60?% %?0?%}.log-bottom uni-navigator[data-v-bbd785de]{color:#fff;font-size:%?30?%;font-weight:400;height:%?100?%}.bottom-left[data-v-bbd785de]{float:left}.bottom-right[data-v-bbd785de]{float:right}.popup[data-v-bbd785de]{width:100%;height:100%;position:fixed;top:0;left:0;background:rgba(0,0,0,.8);z-index:1000}.popup .popup_img[data-v-bbd785de]{position:relative;top:%?400?%;margin:auto;width:80%}.popup .uni-icon[data-v-bbd785de]{position:fixed;color:#fff;z-index:1000;padding:%?10?%;font-weight:200}.popup .popup_img div[data-v-bbd785de]{color:#fff;text-align:center;width:%?600?%;margin-top:%?20?%;font-size:%?36?%}body.?%PAGE?%[data-v-bbd785de]{background:#000}", ""])
        },
        b1e8: function(e, t, n) {
            "use strict";
            var o = function() {
                    var e = this,
                        t = e.$createElement,
                        n = e._self._c || t;
                    return n("v-uni-view", {
                        staticClass: "content"
                    }, [n("v-uni-view", {
                        staticClass: "login"
                    }, [n("v-uni-view", {
                        staticClass: "log-lable"
                    }, [n("v-uni-image", {
                        staticStyle: {
                            height: "250upx"
                        },
                        attrs: {
                            src: e.logo,
                            mode: "aspectFit"
                        }
                    })], 1), n("v-uni-view", {
                        staticClass: "log"
                    }, [n("v-uni-view", {
                        staticClass: "log-input"
                    }, [n("v-uni-text", [e._v("賬   號")]), n("v-uni-input", {
                        attrs: {
                            type: "text",
                            maxlength: "20",
                            placeholder: "請輸入您的賬號"
                        },
                        model: {
                            value: e.username,
                            callback: function(t) {
                                e.username = t
                            },
                            expression: "username"
                        }
                    })], 1), n("v-uni-view", {
                        staticClass: "log-input"
                    }, [n("v-uni-text", [e._v("密   碼")]), n("v-uni-input", {
                        attrs: {
                            type: "text",
                            password: "true",
                            maxlength: "20",
                            placeholder: "請輸入您的密碼"
                        },
                        model: {
                            value: e.password,
                            callback: function(t) {
                                e.password = t
                            },
                            expression: "password"
                        }
                    })], 1), n("v-uni-view", {
                        directives: [{
                            name: "show",
                            rawName: "v-show",
                            value: e.popup,
                            expression: "popup"
                        }],
                        staticClass: "popup"
                    }, [n("v-uni-view", {
                        staticClass: "popup_img"
                    }, [n("uni-icon", {
                        staticClass: "pop-false",
                        attrs: {
                            type: "close",
                            size: "28"
                        },
                        on: {
                            click: function(t) {
                                t = e.$handleEvent(t), e.shut(t)
                            }
                        }
                    }), n("slide-verify", {
                        attrs: {
                            l: 42,
                            r: 10,
                            w: 300,
                            h: 155,
                            "slider-text": e.text
                        },
                        on: {
                            success: function(t) {
                                t = e.$handleEvent(t), e.onSuccess(t)
                            },
                            fail: function(t) {
                                t = e.$handleEvent(t), e.onFail(t)
                            },
                            refresh: function(t) {
                                t = e.$handleEvent(t), e.onRefresh(t)
                            }
                        }
                    }), n("div", [e._v(e._s(e.msg))])], 1)], 1), 1 == e.status ? [n("v-uni-button", {
                        staticClass: "btn-area",
                        on: {
                            click: function(t) {
                                t = e.$handleEvent(t), e.bindLogin(t)
                            }
                        }
                    }, [e._v("提交")])] : [n("v-uni-button", {
                        staticClass: "btn-area"
                    }, [e._v("提交")])], n("v-uni-view", {
                        staticClass: "log-bottom"
                    }, [n("v-uni-navigator", {
                        staticClass: "bottom-left",
                        attrs: {
                            url: "../login/forget"
                        }
                    }, [e._v("忘記密碼")]), n("v-uni-navigator", {
                        staticClass: "bottom-right",
                        attrs: {
                            url: "../reg/reg"
                        }
                    }, [e._v("我要註冊")])], 1)], 2)], 1), n("v-uni-image", {
                        staticClass: "back_img",
                        attrs: {
                            src: "../../static/dog/login.png",
                            mode: e.more
                        }
                    })], 1)
                },
                i = [];
            n.d(t, "a", function() {
                return o
            }), n.d(t, "b", function() {
                return i
            })
        },
        c1be: function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var o = a(n("e108")),
                i = a(n("5d50")),
                r = a(n("0af8"));

            function a(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }
            var s = {
                components: {
                    uniIcon: i.default,
                    slidVverify: r.default
                },
                data: function() {
                    return {
                        height: "",
                        username: "",
                        password: "",
                        status: 1,
                        logo: uni.getStorageSync("logo"),
                        title: "",
                        checked: !1,
                        msg: "",
                        text: "向右滑動完成驗證",
                        popup_if: !0,
                        popup: !1,
                        more: ""
                    }
                },
                methods: {
                    onSuccess: function() {
                        uni.request({
                            url: o.default.api.login.login,
                            method: "POST",
                            data: {
                                account: self.username,
                                password: self.password
                            },
                            success: function(e) {
                                e = e.data;
                                setTimeout(function() {
                                    if (1 != e.code) return self.popup = !1, self.status = 1, self.password = "", o.default.removeToken(), void uni.showToast({
                                        icon: "none",
                                        title: e.msg
                                    });
                                    uni.setStorageSync("token", e.data.token), uni.setStorageSync("pop", 0), uni.setStorageSync("css", 0), uni.setStorageSync("shack", 1), uni.reLaunch({
                                        url: "/pages/main/bazaar"
                                    })
                                }, 1e3)
                            },
                            error: function(e) {
                                uni.showToast({
                                    icon: "none",
                                    title: "請求站點信息錯誤"
                                })
                            }
                        })
                    },
                    shut: function() {
                        this.status = 1, this.popup = !1
                    },
                    onFail: function() {
                        this.msg = ""
                    },
                    onRefresh: function() {
                        this.msg = ""
                    },
                    bindLogin: function() {
                        self = this, self.status = 0, self.username.length < 1 ? uni.showToast({
                            icon: "none",
                            title: "賬號最短為 1 個字符"
                        }) : self.password.length < 6 ? uni.showToast({
                            icon: "none",
                            title: "密碼最短為 6 個字符"
                        }) : self.popup = !0
                    }
                },
                onShow: function() {
                    var e = this;
                    switch (uni.getSystemInfoSync().platform) {
                        case "android":
                            this.more = "widthFix";
                            break;
                        default:
                            this.more = "";
                            break
                    }
                    uni.setStorageSync("token", ""), uni.setStorageSync("sec", 1);
                    this.logo;
                    uni.request({
                        url: o.default.api.login.logo,
                        method: "GET",
                        success: function(t) {
                            t = t.data;
                            1 == t.code && (e.logo = t.data.site_logo)
                        }
                    })
                }
            };
            t.default = s
        },
        e108: function(e, t, n) {
            "use strict";

            function o(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {},
                        o = Object.keys(n);
                    "function" === typeof Object.getOwnPropertySymbols && (o = o.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
                        return Object.getOwnPropertyDescriptor(n, e).enumerable
                    }))), o.forEach(function(t) {
                        i(e, t, n[t])
                    })
                }
                return e
            }

            function i(e, t, n) {
                return t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n, e
            }
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var r = "USER_KEY",
                a = "TOKEN_KEY",
                s = function() {
                    var e = "";
                    return e = uni.getStorageSync(r), e
                },
                u = function(e) {
                    uni.setStorage({
                        key: r,
                        data: e
                    })
                },
                d = function(e, t) {
                    var n = [];
                    n.push(e), n.push(t), uni.setStorageSync("User_paw", n)
                },
                c = function(e) {
                    uni.setStorageSync("memory", e)
                },
                l = function(e) {
                    uni.setStorageSync(a, e)
                },
                p = function() {
                    return uni.getStorageSync(a)
                },
                g = function() {
                    uni.clearStorage()
                },
                f = function(e) {
                    uni.setStorageSync("uid", e)
                },
                m = function() {
                    return uni.getStorageSync("uid")
                },
                b = function(e) {
                    uni.setStorageSync("logid", e)
                },
                v = function() {
                    return uni.getStorageSync("logid")
                },
                h = {
                    arch: "魚餌",
                    receive: "捕撈",
                    status: "繁殖中",
                    freeze: "凍結中",
                    species: "區塊魚"
                },
                w = "http://qk.com/",
                y = {
                    index: w + "default/index",
                    home: {
                        info: w + "port/member/info"
                    },
                    main: {
                        bazaar: w + "port/index/index",
                        order: w + "port/index/appointment",
                        adopt: w + "port/index/adopt",
                        result: w + "port/index/adoptResult",
                        info: w + "port/index/confInfo",
                        notice: w + "port/index/notice"
                    },
                    center: {
                        code: w + "port/member/verifycode",
                        password: w + "port/member/changePwd",
                        passtwo: w + "port/member/changePwd2",
                        pid: w + "port/member/realname",
                        close: w + "port/member/changeMethodStatus",
                        card: w + "port/member/myPaymentMethod",
                        type: w + "port/member/getPaymentType",
                        submit: w + "port/member/submitMethod",
                        message: w + "port/member/systemMessage",
                        team: w + "port/member/myTeam",
                        friends: w + "port/member/inviteFriends"
                    },
                    service: {
                        insert: w + "port/server_center/workorder",
                        submit: w + "port/server_center/submitWorkorder",
                        order: w + "port/server_center/workorderList",
                        weixin: w + ""
                    },
                    login: {
                        login: w + "port/login",
                        logo: w + "port/login/get_enter_logo",
                        forget: w + "port/login/forgetpwd"
                    },
                    reg: {
                        register: w + "port/login/register",
                        code: w + "port/login/verifycode",
                        agree: w + "port/login/get_user_regagree",
                        reg: w + "port/member/uploadimg"
                    },
                    interests: {
                        qrcode: w + "port/member/recharge",
                        integral: w + "port/member/integralLog",
                        roll: w + "port/member/givingIntegral",
                        sell: w + "port/member/assetSale",
                        submit: w + "port/member/rechargeSubmit",
                        earnings: w + "port/member/incomeLog",
                        assets: w + "port/member/myAssets",
                        detailed: w + "port/member/getVirtualmoneyLog"
                    },
                    record: {
                        pay: w + "port/order/pay",
                        adopt: w + "port/order/index",
                        make: w + "port/member/appointment",
                        update: w + "port/order/pay",
                        passtwo: w + "port/order/auditPass",
                        submit: w + "port/order/complaint",
                        complaint: w + "record/payment",
                        transfer: w + "port/order/transfer",
                        details: w + "port/order/detail",
                        undo: w + "port/order/revoke"
                    }
                },
                S = function(e, t, n, i) {
                    var r = this,
                        a = uni.getStorageSync("token");
                    "" == a && (uni.setStorageSync("token", ""), uni.reLaunch({
                        url: "/pages/login/login"
                    }));
                    n = o({
                        token: uni.getStorageSync("token")
                    }, n);
                    uni.request({
                        url: t,
                        method: "GET",
                        data: n,
                        success: function(t) {
                            t = t.data;
                            1 == t.code ? i(e, t) : 400 == t.code ? (uni.setStorageSync("token", ""), setTimeout(function() {
                                uni.reLaunch({
                                    url: "/pages/login/login"
                                })
                            }, 2e3)) : uni.showToast({
                                icon: "none",
                                title: t.msg
                            })
                        },
                        fail: function(e) {
                            console.log(e), uni.showToast({
                                icon: "none",
                                title: "网站消息获取错误"
                            })
                        },
                        complete: function(e) {
                            e = e.data;
                            13 == e.code && (uni.showToast({
                                icon: "none",
                                title: e.msg
                            }), r.removeToken(), uni.reLaunch({
                                url: "/pages/login/login"
                            })), uni.hideLoading()
                        }
                    })
                },
                k = {
                    api: y,
                    auth: S,
                    setToken: l,
                    getToken: p,
                    removeToken: g,
                    getUserInfo: s,
                    setUserInfo: u,
                    setId: f,
                    getId: m,
                    setLogid: b,
                    getLogid: v,
                    config: h,
                    User_paw: d,
                    Memory: c
                };
            t.default = k
        }
    }
]);