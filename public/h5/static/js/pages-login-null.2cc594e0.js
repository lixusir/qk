(window["webpackJsonp"] = window["webpackJsonp"] || []).push([
    ["pages-login-null"], {
        "0d19": function(e, t, r) {
            "use strict";
            r.r(t);
            var n = r("4044"),
                o = r.n(n);
            for (var i in n) "default" !== i && function(e) {
                r.d(t, e, function() {
                    return n[e]
                })
            }(i);
            t["default"] = o.a
        },
        "262c": function(e, t, r) {
            "use strict";
            r.r(t);
            var n = r("4573"),
                o = r("0d19");
            for (var i in o) "default" !== i && function(e) {
                r.d(t, e, function() {
                    return o[e]
                })
            }(i);
            var a = r("2877"),
                u = Object(a["a"])(o["default"], n["a"], n["b"], !1, null, null, null);
            t["default"] = u.exports
        },
        4044: function(e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var n = o(r("e108"));

            function o(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }
            var i = {
                onLoad: function() {
                    uni.request({
                        url: n.default.api.center.friends,
                        method: "GET",
                        data: {
                            token: uni.getStorageSync("token")
                        },
                        success: function(e) {
                            e = e.data;
                            1 == e.code ? uni.reLaunch({
                                url: "/pages/main/bazaar"
                            }) : uni.reLaunch({
                                url: "/pages/login/login"
                            })
                        }
                    })
                }
            };
            t.default = i
        },
        4573: function(e, t, r) {
            "use strict";
            var n = function() {
                    var e = this,
                        t = e.$createElement,
                        r = e._self._c || t;
                    return r("v-uni-view")
                },
                o = [];
            r.d(t, "a", function() {
                return n
            }), r.d(t, "b", function() {
                return o
            })
        },
        e108: function(e, t, r) {
            "use strict";

            function n(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var r = null != arguments[t] ? arguments[t] : {},
                        n = Object.keys(r);
                    "function" === typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(r).filter(function(e) {
                        return Object.getOwnPropertyDescriptor(r, e).enumerable
                    }))), n.forEach(function(t) {
                        o(e, t, r[t])
                    })
                }
                return e
            }

            function o(e, t, r) {
                return t in e ? Object.defineProperty(e, t, {
                    value: r,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = r, e
            }
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var i = "USER_KEY",
                a = "TOKEN_KEY",
                u = function() {
                    var e = "";
                    return e = uni.getStorageSync(i), e
                },
                c = function(e) {
                    uni.setStorage({
                        key: i,
                        data: e
                    })
                },
                s = function(e, t) {
                    var r = [];
                    r.push(e), r.push(t), uni.setStorageSync("User_paw", r)
                },
                d = function(e) {
                    uni.setStorageSync("memory", e)
                },
                p = function(e) {
                    uni.setStorageSync(a, e)
                },
                g = function() {
                    return uni.getStorageSync(a)
                },
                l = function() {
                    uni.clearStorage()
                },
                m = function(e) {
                    uni.setStorageSync("uid", e)
                },
                f = function() {
                    return uni.getStorageSync("uid")
                },
                b = function(e) {
                    uni.setStorageSync("logid", e)
                },
                y = function() {
                    return uni.getStorageSync("logid")
                },
                S = {
                    arch: "魚餌",
                    receive: "捕撈",
                    status: "繁殖中",
                    freeze: "凍結中",
                    species: "區塊魚"
                },
                v = "http://qk.com/",
                h = {
                    index: v + "default/index",
                    home: {
                        info: v + "port/member/info"
                    },
                    main: {
                        bazaar: v + "port/index/index",
                        order: v + "port/index/appointment",
                        adopt: v + "port/index/adopt",
                        result: v + "port/index/adoptResult",
                        info: v + "port/index/confInfo",
                        notice: v + "port/index/notice"
                    },
                    center: {
                        code: v + "port/member/verifycode",
                        password: v + "port/member/changePwd",
                        passtwo: v + "port/member/changePwd2",
                        pid: v + "port/member/realname",
                        close: v + "port/member/changeMethodStatus",
                        card: v + "port/member/myPaymentMethod",
                        type: v + "port/member/getPaymentType",
                        submit: v + "port/member/submitMethod",
                        message: v + "port/member/systemMessage",
                        team: v + "port/member/myTeam",
                        friends: v + "port/member/inviteFriends"
                    },
                    service: {
                        insert: v + "port/server_center/workorder",
                        submit: v + "port/server_center/submitWorkorder",
                        order: v + "port/server_center/workorderList",
                        weixin: v + ""
                    },
                    login: {
                        login: v + "port/login",
                        logo: v + "port/login/get_enter_logo",
                        forget: v + "port/login/forgetpwd"
                    },
                    reg: {
                        register: v + "port/login/register",
                        code: v + "port/login/verifycode",
                        agree: v + "port/login/get_user_regagree",
                        reg: v + "port/member/uploadimg"
                    },
                    interests: {
                        qrcode: v + "port/member/recharge",
                        integral: v + "port/member/integralLog",
                        roll: v + "port/member/givingIntegral",
                        sell: v + "port/member/assetSale",
                        submit: v + "port/member/rechargeSubmit",
                        earnings: v + "port/member/incomeLog",
                        assets: v + "port/member/myAssets",
                        detailed: v + "port/member/getVirtualmoneyLog"
                    },
                    record: {
                        pay: v + "port/order/pay",
                        adopt: v + "port/order/index",
                        make: v + "port/member/appointment",
                        update: v + "port/order/pay",
                        passtwo: v + "port/order/auditPass",
                        submit: v + "port/order/complaint",
                        complaint: v + "record/payment",
                        transfer: v + "port/order/transfer",
                        details: v + "port/order/detail",
                        undo: v + "port/order/revoke"
                    }
                },
                w = function(e, t, r, o) {
                    var i = this,
                        a = uni.getStorageSync("token");
                    "" == a && (uni.setStorageSync("token", ""), uni.reLaunch({
                        url: "/pages/login/login"
                    }));
                    r = n({
                        token: uni.getStorageSync("token")
                    }, r);
                    uni.request({
                        url: t,
                        method: "GET",
                        data: r,
                        success: function(t) {
                            t = t.data;
                            1 == t.code ? o(e, t) : 400 == t.code ? (uni.setStorageSync("token", ""), setTimeout(function() {
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
                            }), i.removeToken(), uni.reLaunch({
                                url: "/pages/login/login"
                            })), uni.hideLoading()
                        }
                    })
                },
                k = {
                    api: h,
                    auth: w,
                    setToken: p,
                    getToken: g,
                    removeToken: l,
                    getUserInfo: u,
                    setUserInfo: c,
                    setId: m,
                    getId: f,
                    setLogid: b,
                    getLogid: y,
                    config: S,
                    User_paw: s,
                    Memory: d
                };
            t.default = k
        }
    }
]);