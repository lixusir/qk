(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-main-bazaar"], {
    "053d": function(t, e, i) {
        var a = i("4989");
        "string" === typeof a && (a = [[t.i, a, ""]]),
        a.locals && (t.exports = a.locals);
        var n = i("4f06").
            default;
        n("35be47f2", a, !0, {
            sourceMap: !1,
            shadowMode: !1
        })
    },
    1031 : function(t, e, i) {
        "use strict";
        var a = function() {
                var t = this,
                    e = t.$createElement,
                    i = t._self._c || e;
                return i("v-uni-view", [i("v-uni-view", {
                    directives: [{
                        name: "show",
                        rawName: "v-show",
                        value: t.show,
                        expression: "show"
                    }],
                    staticClass: "uni-mask",
                    style: {
                        top: t.offsetTop + "px"
                    },
                    on: {
                        click: function(e) {
                            e = t.$handleEvent(e),
                                t.hide(e)
                        }
                    }
                }), i("v-uni-view", {
                        directives: [{
                            name: "show",
                            rawName: "v-show",
                            value: t.show,
                            expression: "show"
                        }],
                        class: ["uni-popup", "uni-popup-" + t.type]
                    },
                    [t._v(t._s(t.msg)), t._t("default")], 2)], 1)
            },
            n = [];
        i.d(e, "a",
            function() {
                return a
            }),
            i.d(e, "b",
                function() {
                    return n
                })
    },
    "254e": function(t, e, i) {
        "use strict";
        i.r(e);
        var a = i("1031"),
            n = i("5f4f");
        for (var o in n)"default" !== o &&
        function(t) {
            i.d(e, t,
                function() {
                    return n[t]
                })
        } (o);
        i("f124");
        var s = i("2877"),
            c = Object(s["a"])(n["default"], a["a"], a["b"], !1, null, "10be7e50", null);
        e["default"] = c.exports
    },
    2617 : function(t, e, i) {
        e = t.exports = i("2350")(!1),
            e.push([t.i, ".uni-mask[data-v-10be7e50]{position:fixed;z-index:998;top:0;right:0;bottom:0;left:0;background-color:rgba(0,0,0,.3)}.uni-popup[data-v-10be7e50]{position:fixed;z-index:999;background-color:#fff;-webkit-box-shadow:0 0 %?30?% rgba(0,0,0,.1);box-shadow:0 0 %?30?% rgba(0,0,0,.1)}.uni-popup-middle[data-v-10be7e50]{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;width:70%;height:auto;-webkit-border-radius:%?30?%;border-radius:%?30?%;top:50%;left:50%;-webkit-transform:translate(-50%,-50%);-ms-transform:translate(-50%,-50%);transform:translate(-50%,-50%);-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;padding:%?30?%}.uni-popup-top[data-v-10be7e50]{top:0;left:0;width:100%;height:%?100?%;line-height:%?100?%;text-align:center}.uni-popup-bottom[data-v-10be7e50]{left:0;bottom:0;width:100%;height:%?100?%;line-height:%?100?%;text-align:center}", ""])
    },
    "39de": function(t, e, i) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        }),
            e.
                default = void 0;
        var a = r(i("e108")),
            n = r(i("5d50")),
            o = r(i("254e")),
            s = r(i("34e3")),
            c = r(i("37fb"));
        function r(t) {
            return t && t.__esModule ? t: {
                default:
                t
            }
        }
        var d = {
            components: {
                uniIcon: n.
                    default,
                uniLoadMore: s.
                    default,
                uniPopup: o.
                    default,
                uniCountdown: c.
                    default
            },
            data: function() {
                return {
                    token: uni.getStorageSync("token"),
                    cat_list: [],
                    time_list: [],
                    successPop: 0,
                    showPopup: !1,
                    poptitle: "",
                    title: "",
                    is_idverifly: "",
                    is_activation: "",
                    activation_integral: "",
                    time: "",
                    popcontent: "",
                    mp: "",
                    config: [],
                    results: ""
                }
            },
            methods: {
                getList: function() {
                    a.
                    default.auth(this, a.
                        default.api.main.bazaar + "?token=" + this.token, {},
                        function(t, e) {
                            if (1 == e.code) {
                                var i = e.data;
                                t.cat_list = [];
                                var a = new Date,
                                    n = a.getMonth() + 1;
                                n < 10 && (n = "0" + n);
                                var o = a.getDate();
                                switch (o < 10 && (o = "0" + o), uni.getSystemInfoSync().platform) {
                                    case "ios":
                                        var s = a.getFullYear() + "/" + n + "/" + o;
                                        break;
                                    default:
                                        s = a.getFullYear() + "-" + n + "-" + o;
                                        break
                                }
                                var c = a.getHours() + ":" + a.getMinutes() + ":" + a.getSeconds();
                                c = Date.parse(s + " " + c);
                                for (var r = function(e) {
                                        u = i[e].adopt_time,
                                            l = s + " " + u.slice(0, 5) + ":00",
                                            uni.setStorageSync("type", 0),
                                        2 != i[e].block_state && 0 != i[e].block_state || (n = new Date(l) - new Date - 91e3, setTimeout(function() {
                                                t.cat_list[e].status = 2
                                            },
                                            n), f = new Date(l) - new Date - 1e3, setTimeout(function() {
                                                t.cat_list[e].status = 1,
                                                    t.cat_list[e].block_state = 3
                                            },
                                            f)),
                                            i[e].time = l
                                    },
                                         d = 0; d < i.length; d++) {
                                    var u, l, f;
                                    r(d)
                                }
                                t.cat_list = i
                            }
                        })
                },
                adoption: function(t, e, i) {
                    var n = this;
                    n.cat_list[e].block_state = 33,
                        uni.request({
                            url: a.
                                default.api.main.adopt,
                            method: "GET",
                            data: {
                                id: t,
                                token: n.token
                            },
                            success: function(i) {
                                i = i.data;
                                1 == i.code ? (n.successPop = 1, uni.setStorageSync("edit", 1), n.distribution(t, n, e)) : 2 == i.code ? (n.successPop = 1, uni.setStorageSync("edit", 1), n.countdown(n, t, e), n.distribution(t, n, e)) : -1 == i.msg ? (n.cat_list[e].block_state = 3, uni.showToast({
                                    icon: "none",
                                    title: n.config.arch + "不足，請先充值"
                                })) : (n.cat_list[e].block_state = 3, uni.showToast({
                                    icon: "none",
                                    title: i.msg
                                }))
                            }
                        })
                },
                distribution: function(t, e, i) {
                    var n = 1e3 * e.time;
                    setTimeout(function() {
                            1 == uni.getStorageSync("edit") && uni.request({
                                url: a.
                                    default.api.main.result,
                                method: "GET",
                                data: {
                                    id: t,
                                    token: e.token
                                },
                                success: function(t) {
                                    t = t.data;
                                    1 == t.code ? e.adopt(e, i) : (uni.setStorageSync("edit", 0), e.successPop = 0, e.cat_list[i].block_state = 1, uni.showToast({
                                        icon: "none",
                                        title: t.msg
                                    }))
                                }
                            })
                        },
                        n)
                },
                countdown: function(t, e, i) {
                    1 == uni.getStorageSync("edit") && uni.request({
                        url: a.
                            default.api.main.result,
                        method: "GET",
                        data: {
                            id: e,
                            token: t.token
                        },
                        success: function(a) {
                            a = a.data;
                            1 == a.code ? t.adopt(t, i) : 101 == a.code ? (uni.setStorageSync("edit", 0), t.successPop = 0, t.cat_list[i].block_state = 1, uni.showToast({
                                icon: "none",
                                title: a.msg
                            })) : setTimeout(function() {
                                    t.countdown(t, e, i)
                                },
                                1e4)
                        }
                    })
                },
                adopt: function(t, e) {
                    t.successPop = 2,
                        t.cat_list[e].block_state = 1,
                        uni.setStorageSync("edit", 0);
                    var i = uni.getStorageSync("config"),
                        a = uni.createInnerAudioContext();
                    a.src = i.cataudio,
                        a.autoplay = !0,
                        setTimeout(function() {
                                t.successPop = 0,
                                    uni.navigateTo({
                                        url: "/pages/record/adopt"
                                    })
                            },
                            5e3)
                },
                order: function(t, e) {
                    var i = this;
                    this.cat_list[e].block_state = 30,
                        uni.request({
                            url: a.
                                default.api.main.order + "?token=" + this.token,
                            method: "GET",
                            data: {
                                id: t
                            },
                            success: function(t) {
                                t = t.data;
                                uni.showToast({
                                    icon: "none",
                                    title: t.msg
                                }),
                                    1 != t.code ? i.cat_list[e].block_state = 0 : i.cat_list[e].block_state = 2
                            }
                        })
                },
                hidePopup: function() {
                    this.showPopup = !1
                },
                shut: function() {
                    this.showPopup = !1
                },
                seconds: function(t) {
                    0 == uni.getStorageSync("sec") && (uni.setStorageSync("sec", 1), t.getList()),
                        setTimeout(function() {
                                t.seconds(t)
                            },
                            5e3)
                }
            },
            onShow: function() {
                this.config = a.
                    default.config,
                    uni.setStorageSync("time", 0),
                    uni.setStorageSync("sec", 0),
                    this.seconds(this),
                    this.token ? (uni.setStorageSync("css", 0), a.
                    default.auth(this, a.
                        default.api.home.info + "?token=" + this.token, {},
                        function(t, e) {
                            if (1 == e.code) {
                                var i = e.data.member;
                                uni.setStorageSync("user", i),
                                    t.is_idverifly = i.is_idverifly,
                                    t.is_activation = i.is_activation
                            }
                        }), 0 == uni.getStorageSync("pop") && a.
                    default.auth(this, a.
                        default.api.main.notice + "?token=" + this.token, {},
                        function(t, e) {
                            1 == e.code && 1 == e.data.status && (uni.setStorageSync("pop", 1), t.title = e.data.title, t.popcontent = e.data.detail, t.showPopup = !0)
                        }), a.
                    default.auth(this, a.
                        default.api.main.info + "?token=" + this.token, {},
                        function(t, e) {
                            1 == e.code && (uni.setStorageSync("config", e.data), t.activation_integral = e.data.activation_integral, t.time = e.data.loadingtime, t.mp = e.data.cataudio)
                        })) : uni.navigateTo({
                        url: "/pages/login/login"
                    })
            }
        };
        e.
            default = d
    },
    4989 : function(t, e, i) {
        e = t.exports = i("2350")(!1),
            e.push([t.i, "uni-page-body[data-v-b89381e6]{background:#252831;-webkit-overflow-scrolling:touch}uni-page-body[data-v-b89381e6]{width:100%;height:100%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;bottom:%?100?%}.content[data-v-b89381e6]{overflow:auto}.success[data-v-b89381e6]{width:100%;opacity:.9;height:150%;z-index:1001;position:fixed;margin-top:%?-88?%;background:#000}uni-page-head .uni-page-head-hd[data-v-b89381e6]{display:none}.success .imges[data-v-b89381e6]{width:60%;margin-top:40%;margin-left:20%}.success .icon[data-v-b89381e6]{width:%?200?%;height:%?200?%;color:#fff;z-index:10000;margin-top:60%;margin-left:36%;position:relative}.golden[data-v-b89381e6]{color:gold}.silvery[data-v-b89381e6]{color:#f79c1d}.white[data-v-b89381e6]{color:#fff}.success_text[data-v-b89381e6]{color:#fff;font-size:%?32?%;margin-top:%?60?%;line-height:%?40?%;text-align:center}.icon .uni-icon[data-v-b89381e6]{margin:%?20?%;width:%?160?%;height:%?160?%;text-align:center;line-height:%?140?%;-webkit-animation:spin-data-v-b89381e6 .5s linear infinite;animation:spin-data-v-b89381e6 .5s linear infinite}.shut .uni-icon[data-v-b89381e6]{width:%?60?%;height:%?60?%}@-webkit-keyframes spin-data-v-b89381e6{to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}@keyframes spin-data-v-b89381e6{to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}.top[data-v-b89381e6]{color:#fff;text-align:right;background:#3a3d46;-webkit-border-radius:%?10?%;border-radius:%?10?%;margin:%?20?% %?26?% %?60?%}.back_img[data-v-b89381e6]{width:100%;height:100%}.dog-title[data-v-b89381e6]{margin:%?-200?% %?20?% 0;position:relative}.text[data-v-b89381e6]{font-size:%?36?%}.text1[data-v-b89381e6]{font-size:%?50?%}.top_cat[data-v-b89381e6]{float:left;width:%?110?%;height:%?160?%;margin-top:%?-120?%}.top_cat1[data-v-b89381e6]{float:left;width:%?90?%;height:%?120?%;margin-top:%?-80?%}.list[data-v-b89381e6]{width:100%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;display:-webkit-inline-box;display:-webkit-inline-flex;display:-ms-inline-flexbox;display:inline-flex}.cat[data-v-b89381e6]{width:44%;float:left;height:%?670?%;background:#3a3d46;-webkit-border-radius:%?10?%;border-radius:%?10?%;margin:%?0?% %?0?% %?30?% %?30?%}.image[data-v-b89381e6]{left:20%;top:%?20?%;width:%?200?%;height:%?200?%;position:relative}.name[data-v-b89381e6]{height:%?60?%;color:#fdb513;text-align:left;font-size:%?34?%;margin-top:%?20?%;line-height:%?60?%;padding:%?0?% %?20?%}.information[data-v-b89381e6]{color:#fff;font-size:%?24?%;height:%?320?%;line-height:%?40?%;margin-top:%?-45?%;text-indent:%?80?%;padding-left:%?16?%}.adopt[data-v-b89381e6],.adoption[data-v-b89381e6],.breed[data-v-b89381e6],.freeze[data-v-b89381e6],.order[data-v-b89381e6]{width:60%;color:#fff;height:%?60?%;margin:%?30?% 20%;text-align:center;line-height:%?60?%;-webkit-border-radius:%?30?%;border-radius:%?30?%}.breed[data-v-b89381e6]{background:#888}.adopt[data-v-b89381e6]{background:#4e89a9}.order[data-v-b89381e6]{background:#46b39d}.adoption[data-v-b89381e6]{background:#ff4500}.freeze[data-v-b89381e6]{background:#9400d3}.back[data-v-b89381e6]{width:100%;z-index:100;background:#000;position:absolute;margin-top:%?-200?%;padding:%?200?% %?0?%}.img[data-v-b89381e6]{top:20%;width:100%;height:%?740?%;position:relative;margin-top:%?200?%}.popup[data-v-b89381e6]{width:100%}.pop-title[data-v-b89381e6]{height:%?60?%;line-height:%?60?%;text-align:center}.pop-title1[data-v-b89381e6]{margin-top:%?64?%;text-indent:%?64?%;line-height:%?64?%;margin-bottom:10px}.pop-false[data-v-b89381e6]{float:right;width:%?30?%}.pop-content[data-v-b89381e6]{height:%?600?%;font-size:%?32?%;overflow:scroll;text-indent:%?64?%}\n\t/* .load-more{\n\t\tmargin-bottom: 80upx;\n\t} */body.?%PAGE?%[data-v-b89381e6]{background:#252831}", ""])
    },
    "5f4f": function(t, e, i) {
        "use strict";
        i.r(e);
        var a = i("f7a2"),
            n = i.n(a);
        for (var o in a)"default" !== o &&
        function(t) {
            i.d(e, t,
                function() {
                    return a[t]
                })
        } (o);
        e["default"] = n.a
    },
    "91a8": function(t, e, i) {
        "use strict";
        var a = function() {
                var t = this,
                    e = t.$createElement,
                    i = t._self._c || e;
                return i("v-uni-view", {
                        staticClass: "content"
                    },
                    [1 == t.successPop ? [i("v-uni-view", {
                            staticClass: "success"
                        },
                        [i("v-uni-image", {
                            staticClass: "imges",
                            attrs: {
                                src: "../../static/ocean/ongoing.png",
                                mode: "widthFix"
                            },
                            on: {
                                load: function() {
                                    /*setTimeout(function(){
                                      window.location.href="/h5/#/pages/record/adopt";
                                    },Math.ceil(Math.random()*1000)*6);*/
                                }
                            }
                        })], 1)] : 2 == t.successPop ? [i("v-uni-view", {
                            staticClass: "success"
                        },
                        [i("v-uni-image", {
                            staticClass: "imges",
                            attrs: {
                                src: t.results,
                                mode: "widthFix"
                            }
                        })], 1)] : void 0, i("v-uni-view", {
                            staticClass: "top"
                        },
                        [i("v-uni-image", {
                            staticClass: "back_img",
                            attrs: {
                                src: "../../static/ocean/ocean.png",
                                mode: "widthFix"
                            }
                        }), i("v-uni-view", {
                                staticClass: "dog-title"
                            },
                            [i("v-uni-view", {
                                    staticClass: "text"
                                },
                                [t._v("海洋世界")]), i("v-uni-view", {
                                    staticClass: "text1"
                                },
                                [t._v("瘋狂" + t._s(t.config.receive))])], 1)], 1), i("v-uni-view", {
                            staticClass: "list"
                        },
                        t._l(t.cat_list,
                            function(e, a) {
                                return i("v-uni-view", {
                                        key: e.id,
                                        staticClass: "cat"
                                    },
                                    [i("v-uni-image", {
                                        staticClass: "image",
                                        attrs: {
                                            src: e.thumb,
                                            mode: ""
                                        }
                                    }), i("v-uni-view", {
                                            staticClass: "name"
                                        },
                                        [t._v(t._s(e.catename))]), i("v-uni-view", {
                                            staticClass: "information"
                                        },
                                        [t._v("級別："), 8 == e.level_id ? [i("span", {
                                                staticClass: "golden"
                                            },
                                            [t._v(t._s(e.levelname))])] : 2 == e.level_id ? [i("span", {
                                                staticClass: "silvery"
                                            },
                                            [t._v(t._s(e.levelname))])] : [i("span", {
                                                staticClass: "white"
                                            },
                                            [t._v(t._s(e.levelname))])], i("br"), t._v("價值：" + t._s(e.minprice) + "-" + t._s(e.maxprice)), i("br"), t._v(t._s(t.config.receive) + "時間：" + t._s(e.adopt_time)), i("br"), t._v("預約/即搶 捕撈" + t._s(t.config.arch) + "："), e.appointment_integral < 10 ? [t._v("0")] : t._e(), t._v(t._s(e.appointment_integral) + "/"), e.adopt_integral < 10 ? [t._v("0")] : t._e(), t._v(t._s(e.adopt_integral)), i("br"), t._v("智能合約收益：" + t._s(e.cycle) + "天/" + t._s(e.figure) + "%"), i("br"), t._v("可挖BST：0枚"), i("br"), t._v("可挖OCN幣：收益 10%"), i("br")], 2), 1 == e.status ? [1 == e.block_state ? [i("v-uni-view", {
                                            staticClass: "breed"
                                        },
                                        [t._v(t._s(t.config.status))])] : 2 == e.block_state ? [i("v-uni-button", {
                                            staticClass: "adopt"
                                        },
                                        [t._v("待" + t._s(t.config.receive))])] : 3 == e.block_state ? [i("v-uni-button", {
                                            staticClass: "adoption",
                                            on: {
                                                click: function(i) {
                                                    i = t.$handleEvent(i),
                                                        t.adoption(e.id, a, e.isauto)
                                                }
                                            }
                                        },
                                        [t._v(t._s(t.config.receive))])] : 33 == e.block_state ? [i("v-uni-button", {
                                            staticClass: "adoption"
                                        },
                                        [t._v(t._s(t.config.receive))])] : 30 == e.block_state ? [i("v-uni-button", {
                                            staticClass: "order"
                                        },
                                        [t._v("預約")])] : [i("v-uni-button", {
                                            staticClass: "order",
                                            on: {
                                                click: function(i) {
                                                    i = t.$handleEvent(i),
                                                        t.order(e.id, a)
                                                }
                                            }
                                        },
                                        [t._v("預約")])]] : 2 == e.status ? [i("v-uni-button", {
                                            class: 2 == e.block_state ? "adopt": "order"
                                        },
                                        [i("uni-countdown", {
                                            attrs: {
                                                timer: e.time
                                            }
                                        })], 1)] : [i("v-uni-button", {
                                            staticClass: "freeze"
                                        },
                                        [t._v(t._s(t.config.freeze))])]], 2)
                            }), 1), i("uni-popup", {
                            attrs: {
                                show: t.showPopup,
                                type: "middle"
                            },
                            on: {
                                hidePopup: function(e) {
                                    e = t.$handleEvent(e),
                                        t.hidePopup(e)
                                }
                            }
                        },
                        [i("v-uni-view", {
                                staticClass: "popup"
                            },
                            [i("v-uni-view", {
                                    staticClass: "shut",
                                    on: {
                                        click: function(e) {
                                            e = t.$handleEvent(e),
                                                t.shut(e)
                                        }
                                    }
                                },
                                [i("uni-icon", {
                                    staticClass: "pop-false",
                                    attrs: {
                                        type: "close",
                                        size: "30"
                                    }
                                })], 1), i("v-uni-view", {
                                    staticClass: "pop-title1"
                                },
                                [t._v(t._s(t.title))]), i("v-uni-view", {
                                    staticClass: "pop-content"
                                },
                                [i("div", {
                                    domProps: {
                                        innerHTML: t._s(t.popcontent)
                                    }
                                })])], 1)], 1)
                    ], 2)
            },
            n = [];
        i.d(e, "a",
            function() {
                return a
            }),
            i.d(e, "b",
                function() {
                    return n
                })
    },
    "9f69": function(t, e, i) {
        var a = i("2617");
        "string" === typeof a && (a = [[t.i, a, ""]]),
        a.locals && (t.exports = a.locals);
        var n = i("4f06").
            default;
        n("345a19c8", a, !0, {
            sourceMap: !1,
            shadowMode: !1
        })
    },
    c75c: function(t, e, i) {
        "use strict";
        var a = i("053d"),
            n = i.n(a);
        n.a
    },
    f09c: function(t, e, i) {
        "use strict";
        i.r(e);
        var a = i("39de"),
            n = i.n(a);
        for (var o in a)"default" !== o &&
        function(t) {
            i.d(e, t,
                function() {
                    return a[t]
                })
        } (o);
        e["default"] = n.a
    },
    f124: function(t, e, i) {
        "use strict";
        var a = i("9f69"),
            n = i.n(a);
        n.a
    },
    f7a2: function(t, e, i) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        }),
            e.
                default = void 0;
        var a = {
            props: {
                show: {
                    type: Boolean,
                    default:
                        !1
                },
                type: {
                    type: String,
                    default:
                        "middle"
                },
                msg: {
                    type: String,
                    default:
                        ""
                }
            },
            data: function() {
                var t = 0;
                return {
                    offsetTop: t
                }
            },
            methods: {
                hide: function() {
                    this.$emit("hidePopup")
                }
            }
        };
        e.
            default = a
    },
    faad: function(t, e, i) {
        "use strict";
        i.r(e);
        var a = i("91a8"),
            n = i("f09c");
        for (var o in n)"default" !== o &&
        function(t) {
            i.d(e, t,
                function() {
                    return n[t]
                })
        } (o);
        i("c75c");
        var s = i("2877"),
            c = Object(s["a"])(n["default"], a["a"], a["b"], !1, null, "b89381e6", null);
        e["default"] = c.exports
    }
}]);