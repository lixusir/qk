(window["webpackJsonp"] = window["webpackJsonp"] || []).push([
    ["pages-main-shack"], {
        "0950": function(t, e, n) {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.default = void 0;
            var i = o(n("5d50")),
                a = o(n("e108"));

            function o(t) {
                return t && t.__esModule ? t : {
                    default: t
                }
            }
            var s = {
                components: {
                    uniIcon: i.default
                },
                data: function() {
                    return {
                        shack: "",
                        account: "",
                        nickname: "",
                        bst: 0,
                        ocn: 0,
                        integral: 0,
                        totalassets: 0,
                        is_idverifly: 0,
                        accumulated_income: 0,
                        recommend: 0,
                        adopt: 0,
                        transfer: 0,
                        make: 0,
                        message: 0,
                        level: "",
                        arch: "",
                        receive: "",
                        token: uni.getStorageSync("token")
                    }
                },
                onShow: function() {
                    this.arch = a.default.config.arch, this.receive = a.default.config.receive, uni.setStorageSync("sec", 1), uni.setStorageSync("css", 2), uni.setStorageSync("type", 0), uni.setStorageSync("tabbar", 0), uni.setStorageSync("cat_time", 0), a.default.auth(this, a.default.api.home.info + "?token=" + this.token, {}, function(t, e) {
                        if (1 == e.code) {
                            var n = e.data.member;
                            uni.setStorageSync("user", n), t.account = n.account, t.nickname = n.nickname, t.integral = n.integral, t.accumulated_income = n.accumulated_income, t.totalassets = n.totalassets, t.is_idverifly = n.is_idverifly, t.recommend = n.recommend_income, t.adopt = n.adoptcount, t.transfer = n.transfercount, t.make = n.appoicount, 0 != n.levelname.length && (t.level = n.levelname)
                        }
                    })
                },
                methods: {
                    jumpurl: function(t) {
                        uni.navigateTo({
                            url: t
                        })
                    }
                }
            };
            e.default = s
        },
        "176b": function(t, e, n) {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.default = void 0;
            var i = {
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
            e.default = i
        },
        2143: function(t, e, n) {
            "use strict";
            n.r(e);
            var i = n("0950"),
                a = n.n(i);
            for (var o in i) "default" !== o && function(t) {
                n.d(e, t, function() {
                    return i[t]
                })
            }(o);
            e["default"] = a.a
        },
        "2dc3": function(t, e, n) {
            "use strict";
            n.r(e);
            var i = n("eae5"),
                a = n("2143");
            for (var o in a) "default" !== o && function(t) {
                n.d(e, t, function() {
                    return a[t]
                })
            }(o);
            n("f9e9");
            var s = n("2877"),
                r = Object(s["a"])(a["default"], i["a"], i["b"], !1, null, "76d24a94", null);
            e["default"] = r.exports
        },
        "2ed0": function(t, e, n) {
            "use strict";
            var i = function() {
                    var t = this,
                        e = t.$createElement,
                        n = t._self._c || e;
                    return n("v-uni-view", {
                        staticClass: "uni-icon",
                        class: ["uni-icon-" + t.type],
                        style: {
                            color: t.color,
                            "font-size": t.fontSize
                        },
                        on: {
                            click: function(e) {
                                e = t.$handleEvent(e), t.onClick()
                            }
                        }
                    })
                },
                a = [];
            n.d(e, "a", function() {
                return i
            }), n.d(e, "b", function() {
                return a
            })
        },
        "3aeb": function(t, e, n) {
            "use strict";
            n.r(e);
            var i = n("176b"),
                a = n.n(i);
            for (var o in i) "default" !== o && function(t) {
                n.d(e, t, function() {
                    return i[t]
                })
            }(o);
            e["default"] = a.a
        },
        "423f": function(t, e, n) {
            var i = n("ffad");
            "string" === typeof i && (i = [
                [t.i, i, ""]
            ]), i.locals && (t.exports = i.locals);
            var a = n("4f06").default;
            a("be8f9bc0", i, !0, {
                sourceMap: !1,
                shadowMode: !1
            })
        },
        "5d50": function(t, e, n) {
            "use strict";
            n.r(e);
            var i = n("2ed0"),
                a = n("3aeb");
            for (var o in a) "default" !== o && function(t) {
                n.d(e, t, function() {
                    return a[t]
                })
            }(o);
            var s = n("2877"),
                r = Object(s["a"])(a["default"], i["a"], i["b"], !1, null, null, null);
            e["default"] = r.exports
        },
        e108: function(t, e, n) {
            "use strict";

            function i(t) {
                for (var e = 1; e < arguments.length; e++) {
                    var n = null != arguments[e] ? arguments[e] : {},
                        i = Object.keys(n);
                    "function" === typeof Object.getOwnPropertySymbols && (i = i.concat(Object.getOwnPropertySymbols(n).filter(function(t) {
                        return Object.getOwnPropertyDescriptor(n, t).enumerable
                    }))), i.forEach(function(e) {
                        a(t, e, n[e])
                    })
                }
                return t
            }

            function a(t, e, n) {
                return e in t ? Object.defineProperty(t, e, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : t[e] = n, t
            }
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.default = void 0;
            var o = "USER_KEY",
                s = "TOKEN_KEY",
                r = function() {
                    var t = "";
                    return t = uni.getStorageSync(o), t
                },
                c = function(t) {
                    uni.setStorage({
                        key: o,
                        data: t
                    })
                },
                u = function(t, e) {
                    var n = [];
                    n.push(t), n.push(e), uni.setStorageSync("User_paw", n)
                },
                l = function(t) {
                    uni.setStorageSync("memory", t)
                },
                d = function(t) {
                    uni.setStorageSync(s, t)
                },
                v = function() {
                    return uni.getStorageSync(s)
                },
                p = function() {
                    uni.clearStorage()
                },
                m = function(t) {
                    uni.setStorageSync("uid", t)
                },
                f = function() {
                    return uni.getStorageSync("uid")
                },
                g = function(t) {
                    uni.setStorageSync("logid", t)
                },
                b = function() {
                    return uni.getStorageSync("logid")
                },
                w = {
                    arch: "魚餌",
                    receive: "捕撈",
                    status: "繁殖中",
                    freeze: "凍結中",
                    species: "區塊魚"
                },
                h = "http://qk.com/",
                y = {
                    index: h + "default/index",
                    home: {
                        info: h + "port/member/info"
                    },
                    main: {
                        bazaar: h + "port/index/index",
                        order: h + "port/index/appointment",
                        adopt: h + "port/index/adopt",
                        result: h + "port/index/adoptResult",
                        info: h + "port/index/confInfo",
                        notice: h + "port/index/notice"
                    },
                    center: {
                        code: h + "port/member/verifycode",
                        password: h + "port/member/changePwd",
                        passtwo: h + "port/member/changePwd2",
                        pid: h + "port/member/realname",
                        close: h + "port/member/changeMethodStatus",
                        card: h + "port/member/myPaymentMethod",
                        type: h + "port/member/getPaymentType",
                        submit: h + "port/member/submitMethod",
                        message: h + "port/member/systemMessage",
                        team: h + "port/member/myTeam",
                        friends: h + "port/member/inviteFriends"
                    },
                    service: {
                        insert: h + "port/server_center/workorder",
                        submit: h + "port/server_center/submitWorkorder",
                        order: h + "port/server_center/workorderList",
                        weixin: h + ""
                    },
                    login: {
                        login: h + "port/login",
                        logo: h + "port/login/get_enter_logo",
                        forget: h + "port/login/forgetpwd"
                    },
                    reg: {
                        register: h + "port/login/register",
                        code: h + "port/login/verifycode",
                        agree: h + "port/login/get_user_regagree",
                        reg: h + "port/member/uploadimg"
                    },
                    interests: {
                        qrcode: h + "port/member/recharge",
                        integral: h + "port/member/integralLog",
                        roll: h + "port/member/givingIntegral",
                        sell: h + "port/member/assetSale",
                        submit: h + "port/member/rechargeSubmit",
                        earnings: h + "port/member/incomeLog",
                        assets: h + "port/member/myAssets",
                        detailed: h + "port/member/getVirtualmoneyLog"
                    },
                    record: {
                        pay: h + "port/order/pay",
                        adopt: h + "port/order/index",
                        make: h + "port/member/appointment",
                        update: h + "port/order/pay",
                        passtwo: h + "port/order/auditPass",
                        submit: h + "port/order/complaint",
                        complaint: h + "record/payment",
                        transfer: h + "port/order/transfer",
                        details: h + "port/order/detail",
                        undo: h + "port/order/revoke"
                    }
                },
                _ = function(t, e, n, a) {
                    var o = this,
                        s = uni.getStorageSync("token");
                    "" == s && (uni.setStorageSync("token", ""), uni.reLaunch({
                        url: "/pages/login/login"
                    }));
                    n = i({
                        token: uni.getStorageSync("token")
                    }, n);
                    uni.request({
                        url: e,
                        method: "GET",
                        data: n,
                        success: function(e) {
                            e = e.data;
                            1 == e.code ? a(t, e) : 400 == e.code ? (uni.setStorageSync("token", ""), setTimeout(function() {
                                uni.reLaunch({
                                    url: "/pages/login/login"
                                })
                            }, 2e3)) : uni.showToast({
                                icon: "none",
                                title: e.msg
                            })
                        },
                        fail: function(t) {
                            console.log(t), uni.showToast({
                                icon: "none",
                                title: "网站消息获取错误"
                            })
                        },
                        complete: function(t) {
                            t = t.data;
                            13 == t.code && (uni.showToast({
                                icon: "none",
                                title: t.msg
                            }), o.removeToken(), uni.reLaunch({
                                url: "/pages/login/login"
                            })), uni.hideLoading()
                        }
                    })
                },
                k = {
                    api: y,
                    auth: _,
                    setToken: d,
                    getToken: v,
                    removeToken: p,
                    getUserInfo: r,
                    setUserInfo: c,
                    setId: m,
                    getId: f,
                    setLogid: g,
                    getLogid: b,
                    config: w,
                    User_paw: u,
                    Memory: l
                };
            e.default = k
        },
        eae5: function(t, e, n) {
            "use strict";
            var i = function() {
                    var t = this,
                        e = t.$createElement,
                        n = t._self._c || e;
                    return n("v-uni-view", {
                        staticClass: "content"
                    }, [n("v-uni-view", {
                        staticClass: "top"
                    }, [n("v-uni-view", {
                        staticClass: "text-id",
                        staticStyle: {
                            widows: "20upx",
                            float: "right"
                        }
                    }, [n("uni-icon", {
                        attrs: {
                            size: "28",
                            type: "gear"
                        },
                        on: {
                            click: function(e) {
                                e = t.$handleEvent(e), t.jumpurl("/pages/user/seting")
                            }
                        }
                    })], 1), n("v-uni-view", {
                        staticClass: "mobile"
                    }, [n("span", {
                        staticClass: "name"
                    }, [t._v(t._s(t.nickname))]), n("span", {
                        staticClass: "level"
                    }, [t._v(t._s(t.level))])]), n("v-uni-view", {
                        staticClass: "id"
                    }, [t._v("ID/手機：" + t._s(t.account))])], 1), n("v-uni-view", {
                        staticClass: "recommend"
                    }, [n("v-uni-view", {
                        staticClass: "btn",
                        on: {
                            click: function(e) {
                                e = t.$handleEvent(e), t.jumpurl("/pages/interests/structure")
                            }
                        }
                    }, [n("v-uni-view", {
                        staticClass: "btn-top"
                    }, [t._v(t._s(t.bst))]), n("v-uni-view", {
                        staticClass: "btn-bottom"
                    }, [t._v("BST")])], 1), n("v-uni-view", {
                        staticClass: "btn",
                        on: {
                            click: function(e) {
                                e = t.$handleEvent(e), t.jumpurl("/pages/interests/shared")
                            }
                        }
                    }, [n("v-uni-view", {
                        staticClass: "btn-top"
                    }, [t._v(t._s(t.ocn))]), n("v-uni-view", {
                        staticClass: "btn-bottom"
                    }, [t._v("OCN幣")])], 1), n("v-uni-view", {
                        staticClass: "btn",
                        on: {
                            click: function(e) {
                                e = t.$handleEvent(e), t.jumpurl("/pages/interests/integral")
                            }
                        }
                    }, [n("v-uni-view", {
                        staticClass: "btn-top"
                    }, [t._v(t._s(t.integral))]), n("v-uni-view", {
                        staticClass: "btn-bottom"
                    }, [t._v(t._s(t.arch))])], 1), n("v-uni-view", {
                        staticClass: "btn",
                        on: {
                            click: function(e) {
                                e = t.$handleEvent(e), t.jumpurl("/pages/interests/earnings")
                            }
                        }
                    }, [n("v-uni-view", {
                        staticClass: "btn-top"
                    }, [t._v(t._s(t.accumulated_income))]), n("v-uni-view", {
                        staticClass: "btn-bottom"
                    }, [t._v("累計收益")])], 1), n("v-uni-view", {
                        staticClass: "btn",
                        on: {
                            click: function(e) {
                                e = t.$handleEvent(e), t.jumpurl("/pages/interests/assets")
                            }
                        }
                    }, [n("v-uni-view", {
                        staticClass: "btn-top"
                    }, [t._v(t._s(t.totalassets))]), n("v-uni-view", {
                        staticClass: "btn-bottom"
                    }, [t._v("總資產")])], 1), n("v-uni-view", {
                        staticClass: "btn",
                        on: {
                            click: function(e) {
                                e = t.$handleEvent(e), t.jumpurl("/pages/interests/recommend")
                            }
                        }
                    }, [n("v-uni-view", {
                        staticClass: "btn-top"
                    }, [t._v(t._s(t.recommend))]), n("v-uni-view", {
                        staticClass: "btn-bottom"
                    }, [t._v("推薦收益")])], 1)], 1), n("v-uni-view", {
                        staticStyle: {
                            height: "20upx"
                        }
                    }), n("v-uni-view", {
                        staticClass: "record"
                    }, [n("v-uni-view", {
                        staticClass: "btn1",
                        on: {
                            click: function(e) {
                                e = t.$handleEvent(e), t.jumpurl("/pages/record/adopt")
                            }
                        }
                    }, [n("v-uni-view", {
                        staticClass: "btn1-top"
                    }, [t.adopt > 0 ? n("v-uni-view", {
                        staticClass: "num"
                    }, [t._v(t._s(t.adopt))]) : t._e(), n("v-uni-image", {
                        attrs: {
                            src: "../../static/function/adopt.png"
                        }
                    })], 1), n("v-uni-view", {
                        staticClass: "btn1-bottom"
                    }, [t._v(t._s(t.receive) + "記錄")])], 1), n("v-uni-view", {
                        staticClass: "btn1",
                        on: {
                            click: function(e) {
                                e = t.$handleEvent(e), t.jumpurl("/pages/record/transfer")
                            }
                        }
                    }, [n("v-uni-view", {
                        staticClass: "btn1-top"
                    }, [t.transfer > 0 ? n("v-uni-view", {
                        staticClass: "num"
                    }, [t._v(t._s(t.transfer))]) : t._e(), n("v-uni-image", {
                        attrs: {
                            src: "../../static/function/transfer.png"
                        }
                    })], 1), n("v-uni-view", {
                        staticClass: "btn1-bottom"
                    }, [t._v("轉讓記錄")])], 1), n("v-uni-view", {
                        staticClass: "btn1",
                        on: {
                            click: function(e) {
                                e = t.$handleEvent(e), t.jumpurl("/pages/record/make")
                            }
                        }
                    }, [n("v-uni-view", {
                        staticClass: "btn1-top"
                    }, [t.make > 0 ? n("v-uni-view", {
                        staticClass: "num"
                    }, [t._v(t._s(t.make))]) : t._e(), n("v-uni-image", {
                        attrs: {
                            src: "../../static/function/make.png"
                        }
                    })], 1), n("v-uni-view", {
                        staticClass: "btn1-bottom"
                    }, [t._v("預約記錄")])], 1)], 1), n("v-uni-view", {
                        staticStyle: {
                            height: "20upx"
                        }
                    }), n("v-uni-view", {
                        staticClass: "record"
                    }, [n("v-uni-view", {
                        staticClass: "btn1",
                        on: {
                            click: function(e) {
                                e = t.$handleEvent(e), t.jumpurl("/pages/center/security")
                            }
                        }
                    }, [n("v-uni-view", {
                        staticClass: "btn1-top"
                    }, [n("v-uni-image", {
                        attrs: {
                            src: "../../static/function/security.png"
                        }
                    })], 1), n("v-uni-view", {
                        staticClass: "btn1-bottom"
                    }, [t._v("安全中心")])], 1), n("v-uni-view", {
                        staticClass: "btn1",
                        on: {
                            click: function(e) {
                                e = t.$handleEvent(e), t.jumpurl("/pages/center/name")
                            }
                        }
                    }, [n("v-uni-view", {
                        staticClass: "btn1-top"
                    }, [n("v-uni-image", {
                        attrs: {
                            src: "../../static/function/name.png"
                        }
                    })], 1), n("v-uni-view", {
                        staticClass: "btn1-bottom"
                    }, [t._v("實名驗證")])], 1), n("v-uni-view", {
                        staticClass: "btn1",
                        on: {
                            click: function(e) {
                                e = t.$handleEvent(e), t.jumpurl("/pages/center/card")
                            }
                        }
                    }, [n("v-uni-view", {
                        staticClass: "btn1-top"
                    }, [n("v-uni-image", {
                        attrs: {
                            src: "../../static/function/card.png"
                        }
                    })], 1), n("v-uni-view", {
                        staticClass: "btn1-bottom"
                    }, [t._v("我的銀行卡")])], 1), n("v-uni-view", {
                        staticClass: "btn1",
                        on: {
                            click: function(e) {
                                e = t.$handleEvent(e), t.jumpurl("/pages/center/team")
                            }
                        }
                    }, [n("v-uni-view", {
                        staticClass: "btn1-top"
                    }, [n("v-uni-image", {
                        attrs: {
                            src: "../../static/function/team.png"
                        }
                    })], 1), n("v-uni-view", {
                        staticClass: "btn1-bottom"
                    }, [t._v("我的團隊")])], 1), n("v-uni-view", {
                        staticClass: "btn1",
                        on: {
                            click: function(e) {
                                e = t.$handleEvent(e), t.jumpurl("/pages/center/friends")
                            }
                        }
                    }, [n("v-uni-view", {
                        staticClass: "btn1-top"
                    }, [n("v-uni-image", {
                        attrs: {
                            src: "../../static/function/friends.png"
                        }
                    })], 1), n("v-uni-view", {
                        staticClass: "btn1-bottom"
                    }, [t._v("邀請好友")])], 1), n("v-uni-view", {
                        staticClass: "btn1",
                        on: {
                            click: function(e) {
                                e = t.$handleEvent(e), t.jumpurl("/pages/center/message")
                            }
                        }
                    }, [n("v-uni-view", {
                        staticClass: "btn1-top"
                    }, [t.message > 0 ? n("v-uni-view", {
                        staticClass: "num"
                    }, [t._v(t._s(t.message))]) : t._e(), n("v-uni-image", {
                        attrs: {
                            src: "../../static/function/message.png"
                        }
                    })], 1), n("v-uni-view", {
                        staticClass: "btn1-bottom"
                    }, [t._v("系統消息")])], 1)], 1), n("v-uni-view", {
                        staticStyle: {
                            height: "120upx"
                        }
                    })], 1)
                },
                a = [];
            n.d(e, "a", function() {
                return i
            }), n.d(e, "b", function() {
                return a
            })
        },
        f9e9: function(t, e, n) {
            "use strict";
            var i = n("423f"),
                a = n.n(i);
            a.a
        },
        ffad: function(t, e, n) {
            e = t.exports = n("2350")(!1), e.push([t.i, "uni-page-body[data-v-76d24a94]{background:#252831}.top[data-v-76d24a94]{margin-top:%?40?%;color:#fff;text-indent:%?24?%}.text-id[data-v-76d24a94]{font-size:%?30?%;line-height:%?30?%;margin:%?35?% %?28?% %?0?% %?0?%}.mobile[data-v-76d24a94]{margin-top:%?35?%;line-height:%?64?%}.name[data-v-76d24a94]{font-size:%?40?%}.level[data-v-76d24a94]{color:#fc1;font-size:%?20?%;margin-left:%?40?%}.id[data-v-76d24a94]{font-size:%?28?%;line-height:%?40?%;margin-bottom:%?30?%}.recommend[data-v-76d24a94]{width:94%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;margin:%?0?% 3%;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;-webkit-border-radius:%?10?%;border-radius:%?10?%;display:-webkit-inline-box;display:-webkit-inline-flex;display:-ms-inline-flexbox;display:inline-flex;background-color:#1e1e2a}.btn[data-v-76d24a94]{width:33.3%;height:%?100?%;color:#f1f1f1;margin:%?14?% 0;text-align:center}.btn-top[data-v-76d24a94]{height:%?70?%;font-size:%?36?%;line-height:%?70?%}.btn-bottom[data-v-76d24a94]{font-size:%?28?%;line-height:%?30?%}.record[data-v-76d24a94]{width:94%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;margin:%?0?% 3%;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;display:-webkit-inline-box;display:-webkit-inline-flex;display:-ms-inline-flexbox;display:inline-flex;-webkit-border-radius:%?10?%;border-radius:%?10?%;background-color:#3a3d46}.btn1[data-v-76d24a94]{width:28%;height:%?160?%;margin-left:5%;text-align:center}.btn1-top[data-v-76d24a94]{height:%?100?%}.btn1-top uni-image[data-v-76d24a94]{width:%?60?%;height:%?60?%;margin-top:%?20?%}.btn1-bottom[data-v-76d24a94]{color:#fff;font-size:%?28?%;line-height:%?30?%}.num[data-v-76d24a94]{color:#fff;font-size:%?20?%;margin-top:%?8?%;position:absolute;-webkit-border-radius:40%;border-radius:40%;padding:%?2?% %?10?%;margin-left:%?120?%;background-color:#fdb513}body.?%PAGE?%[data-v-76d24a94]{background:#252831}", ""])
        }
    }
]);