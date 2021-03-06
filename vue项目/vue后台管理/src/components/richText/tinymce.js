// 4.7.4 (2017-12-05)
! function () {
    
    var a = {},
        b = function (b) {
            for (var c = a[b], e = c.deps, f = c.defn, g = e.length, h = new Array(g), i = 0; i < g; ++i) h[i] = d(e[i]);
            var j = f.apply(null, h);
            if (void 0 === j) throw "module [" + b + "] returned undefined";
            c.instance = j
        },
        c = function (b, c, d) {
            if ("string" != typeof b) throw "module id must be a string";
            if (void 0 === c) throw "no dependencies for " + b;
            if (void 0 === d) throw "no definition function for " + b;
            a[b] = {
                deps: c,
                defn: d,
                instance: void 0
            }
        },
        d = function (c) {
            var d = a[c];
            if (void 0 === d) throw "module [" + c + "] was undefined";
            return void 0 === d.instance && b(c), d.instance
        },
        e = function (a, b) {
            for (var c = a.length, e = new Array(c), f = 0; f < c; ++f) e[f] = d(a[f]);
            b.apply(null, e)
        },
        f = {};
    f.bolt = {
        module: {
            api: {
                define: c,
                require: e,
                demand: d
            }
        }
    };
    var g = c,
        h = function (a, b) {
            g(a, [], function () {
                return b
            })
        };
    h("4", Array), h("5", Error), g("1", ["4", "5"], function (a, b) {
        var c = function () {},
            d = function (a) {
                return function () {
                    return a()
                }
            },
            e = function (a, b) {
                return function () {
                    return a(b.apply(null, arguments))
                }
            },
            f = function (a) {
                return function () {
                    return a
                }
            },
            g = function (a) {
                return a
            },
            h = function (a, b) {
                return a === b
            },
            i = function (b) {
                for (var c = new a(arguments.length - 1), d = 1; d < arguments.length; d++) c[d - 1] = arguments[d];
                return function () {
                    for (var d = new a(arguments.length), e = 0; e < d.length; e++) d[e] = arguments[e];
                    var f = c.concat(d);
                    return b.apply(null, f)
                }
            },
            j = function (a) {
                return function () {
                    return !a.apply(null, arguments)
                }
            },
            k = function (a) {
                return function () {
                    throw new b(a)
                }
            },
            l = function (a) {
                return a()
            },
            m = function (a) {
                a()
            },
            n = f(!1),
            o = f(!0);
        return {
            noop: c,
            noarg: d,
            compose: e,
            constant: f,
            identity: g,
            tripleEquals: h,
            curry: i,
            not: j,
            die: k,
            apply: l,
            call: m,
            never: n,
            always: o
        }
    }), h("2", window), h("3a", Object), g("2n", ["1", "3a"], function (a, b) {
        var c = a.never,
            d = a.always,
            e = function () {
                return f
            },
            f = function () {
                var f = function (a) {
                        return a.isNone()
                    },
                    g = function (a) {
                        return a()
                    },
                    h = function (a) {
                        return a
                    },
                    i = function () {},
                    j = {
                        fold: function (a, b) {
                            return a()
                        },
                        is: c,
                        isSome: c,
                        isNone: d,
                        getOr: h,
                        getOrThunk: g,
                        getOrDie: function (a) {
                            throw new Error(a || "error: getOrDie called on none.")
                        },
                        or: h,
                        orThunk: g,
                        map: e,
                        ap: e,
                        each: i,
                        bind: e,
                        flatten: e,
                        exists: c,
                        forall: d,
                        filter: e,
                        equals: f,
                        equals_: f,
                        toArray: function () {
                            return []
                        },
                        toString: a.constant("none()")
                    };
                return b.freeze && b.freeze(j), j
            }(),
            g = function (a) {
                var b = function () {
                        return a
                    },
                    h = function () {
                        return k
                    },
                    i = function (b) {
                        return g(b(a))
                    },
                    j = function (b) {
                        return b(a)
                    },
                    k = {
                        fold: function (b, c) {
                            return c(a)
                        },
                        is: function (b) {
                            return a === b
                        },
                        isSome: d,
                        isNone: c,
                        getOr: b,
                        getOrThunk: b,
                        getOrDie: b,
                        or: h,
                        orThunk: h,
                        map: i,
                        ap: function (b) {
                            return b.fold(e, function (b) {
                                return g(b(a))
                            })
                        },
                        each: function (b) {
                            b(a)
                        },
                        bind: j,
                        flatten: b,
                        exists: j,
                        forall: j,
                        filter: function (b) {
                            return b(a) ? k : f
                        },
                        equals: function (b) {
                            return b.is(a)
                        },
                        equals_: function (b, d) {
                            return b.fold(c, function (b) {
                                return d(a, b)
                            })
                        },
                        toArray: function () {
                            return [a]
                        },
                        toString: function () {
                            return "some(" + a + ")"
                        }
                    };
                return k
            },
            h = function (a) {
                return null === a || void 0 === a ? f : g(a)
            };
        return {
            some: g,
            none: e,
            from: h
        }
    }), h("3b", String), g("1i", ["2n", "4", "5", "3b"], function (a, b, c, d) {
        var e = function () {
                var a = b.prototype.indexOf,
                    c = function (b, c) {
                        return a.call(b, c)
                    },
                    d = function (a, b) {
                        return u(a, b)
                    };
                return void 0 === a ? d : c
            }(),
            f = function (b, c) {
                var d = e(b, c);
                return d === -1 ? a.none() : a.some(d)
            },
            g = function (a, b) {
                return e(a, b) > -1
            },
            h = function (a, b) {
                return t(a, b).isSome()
            },
            i = function (a, b) {
                for (var c = [], d = 0; d < a; d++) c.push(b(d));
                return c
            },
            j = function (a, b) {
                for (var c = [], d = 0; d < a.length; d += b) {
                    var e = a.slice(d, d + b);
                    c.push(e)
                }
                return c
            },
            k = function (a, c) {
                for (var d = a.length, e = new b(d), f = 0; f < d; f++) {
                    var g = a[f];
                    e[f] = c(g, f, a)
                }
                return e
            },
            l = function (a, b) {
                for (var c = 0, d = a.length; c < d; c++) {
                    var e = a[c];
                    b(e, c, a)
                }
            },
            m = function (a, b) {
                for (var c = a.length - 1; c >= 0; c--) {
                    var d = a[c];
                    b(d, c, a)
                }
            },
            n = function (a, b) {
                for (var c = [], d = [], e = 0, f = a.length; e < f; e++) {
                    var g = a[e],
                        h = b(g, e, a) ? c : d;
                    h.push(g)
                }
                return {
                    pass: c,
                    fail: d
                }
            },
            o = function (a, b) {
                for (var c = [], d = 0, e = a.length; d < e; d++) {
                    var f = a[d];
                    b(f, d, a) && c.push(f)
                }
                return c
            },
            p = function (a, b) {
                if (0 === a.length) return [];
                for (var c = b(a[0]), d = [], e = [], f = 0, g = a.length; f < g; f++) {
                    var h = a[f],
                        i = b(h);
                    i !== c && (d.push(e), e = []), c = i, e.push(h)
                }
                return 0 !== e.length && d.push(e), d
            },
            q = function (a, b, c) {
                return m(a, function (a) {
                    c = b(c, a)
                }), c
            },
            r = function (a, b, c) {
                return l(a, function (a) {
                    c = b(c, a)
                }), c
            },
            s = function (b, c) {
                for (var d = 0, e = b.length; d < e; d++) {
                    var f = b[d];
                    if (c(f, d, b)) return a.some(f)
                }
                return a.none()
            },
            t = function (b, c) {
                for (var d = 0, e = b.length; d < e; d++) {
                    var f = b[d];
                    if (c(f, d, b)) return a.some(d)
                }
                return a.none()
            },
            u = function (a, b) {
                for (var c = 0, d = a.length; c < d; ++c)
                    if (a[c] === b) return c;
                return -1
            },
            v = b.prototype.push,
            w = function (a) {
                for (var d = [], e = 0, f = a.length; e < f; ++e) {
                    if (!b.prototype.isPrototypeOf(a[e])) throw new c("Arr.flatten item " + e + " was not an array, input: " + a);
                    v.apply(d, a[e])
                }
                return d
            },
            x = function (a, b) {
                var c = k(a, b);
                return w(c)
            },
            y = function (a, b) {
                for (var c = 0, d = a.length; c < d; ++c) {
                    var e = a[c];
                    if (b(e, c, a) !== !0) return !1
                }
                return !0
            },
            z = function (a, b) {
                return a.length === b.length && y(a, function (a, c) {
                    return a === b[c]
                })
            },
            A = b.prototype.slice,
            B = function (a) {
                var b = A.call(a, 0);
                return b.reverse(), b
            },
            C = function (a, b) {
                return o(a, function (a) {
                    return !g(b, a)
                })
            },
            D = function (a, b) {
                for (var c = {}, e = 0, f = a.length; e < f; e++) {
                    var g = a[e];
                    c[d(g)] = b(g, e)
                }
                return c
            },
            E = function (a) {
                return [a]
            },
            F = function (a, b) {
                var c = A.call(a, 0);
                return c.sort(b), c
            },
            G = function (b) {
                return 0 === b.length ? a.none() : a.some(b[0])
            },
            H = function (b) {
                return 0 === b.length ? a.none() : a.some(b[b.length - 1])
            };
        return {
            map: k,
            each: l,
            eachr: m,
            partition: n,
            filter: o,
            groupBy: p,
            indexOf: f,
            foldr: q,
            foldl: r,
            find: s,
            findIndex: t,
            flatten: w,
            bind: x,
            forall: y,
            exists: h,
            contains: g,
            equal: z,
            reverse: B,
            chunk: j,
            difference: C,
            mapToObject: D,
            pure: E,
            sort: F,
            range: i,
            head: G,
            last: H
        }
    }), h("1j", document), g("65", [], function () {
        var a = "undefined" != typeof window ? window : Function("return this;")();
        return a
    }), g("4y", ["65"], function (a) {
        var b = function (b, c) {
                for (var d = void 0 !== c ? c : a, e = 0; e < b.length && void 0 !== d && null !== d; ++e) d = d[b[e]];
                return d
            },
            c = function (a, c) {
                var d = a.split(".");
                return b(d, c)
            },
            d = function (a, b) {
                return void 0 !== a[b] && null !== a[b] || (a[b] = {}), a[b]
            },
            e = function (b, c) {
                for (var e = void 0 !== c ? c : a, f = 0; f < b.length; ++f) e = d(e, b[f]);
                return e
            },
            f = function (a, b) {
                var c = a.split(".");
                return e(c, b)
            };
        return {
            path: b,
            resolve: c,
            forge: e,
            namespace: f
        }
    }), g("3c", ["4y"], function (a) {
        var b = function (b, c) {
                return a.resolve(b, c)
            },
            c = function (a, c) {
                var d = b(a, c);
                if (void 0 === d) throw a + " not available on this browser";
                return d
            };
        return {
            getOrDie: c
        }
    }), g("1k", ["3c"], function (a) {
        var b = function () {
                return a.getOrDie("URL")
            },
            c = function (a) {
                return b().createObjectURL(a)
            },
            d = function (a) {
                b().revokeObjectURL(a)
            };
        return {
            createObjectURL: c,
            revokeObjectURL: d
        }
    }), h("1l", matchMedia), h("1m", navigator), g("b", ["1k", "1j", "1l", "1m", "2"], function (a, b, c, d, e) {
        var f, g, h, i, j, k, l, m, n, o, p, q, r, s = d,
            t = s.userAgent,
            u = function (a) {
                return "matchMedia" in e && c(a).matches
            };
        f = e.opera && e.opera.buildNumber, n = /Android/.test(t), g = /WebKit/.test(t), h = !g && !f && /MSIE/gi.test(t) && /Explorer/gi.test(s.appName), h = h && /MSIE (\w+)\./.exec(t)[1], i = t.indexOf("Trident/") != -1 && (t.indexOf("rv:") != -1 || s.appName.indexOf("Netscape") != -1) && 11, j = t.indexOf("Edge/") != -1 && !h && !i && 12, h = h || i || j, k = !g && !i && /Gecko/.test(t), l = t.indexOf("Mac") != -1, m = /(iPad|iPhone)/.test(t), o = "FormData" in e && "FileReader" in e && "URL" in e && !!a.createObjectURL, p = u("only screen and (max-device-width: 480px)") && (n || m), q = u("only screen and (min-width: 800px)") && (n || m), r = t.indexOf("Windows Phone") != -1, j && (g = !1);
        var v = !m || o || t.match(/AppleWebKit\/(\d*)/)[1] >= 534;
        return {
            opera: f,
            webkit: g,
            ie: h,
            gecko: k,
            mac: l,
            iOS: m,
            android: n,
            contentEditable: v,
            transparentSrc: "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7",
            caretAfter: 8 != h,
            range: e.getSelection && "Range" in e,
            documentMode: h && !j ? b.documentMode || 7 : 10,
            fileApi: o,
            ceFalse: h === !1 || h > 8,
            canHaveCSP: h === !1 || h > 11,
            desktop: !p && !q,
            windowsPhone: r
        }
    }), h("1n", clearInterval), h("1o", clearTimeout), h("1p", setInterval), h("1q", setTimeout), g("1d", [], function () {
        function a(a, b) {
            return function () {
                a.apply(b, arguments)
            }
        }

        function b(b) {
            if ("object" != typeof this) throw new TypeError("Promises must be constructed via new");
            if ("function" != typeof b) throw new TypeError("not a function");
            this._state = null, this._value = null, this._deferreds = [], h(b, a(d, this), a(e, this))
        }

        function c(a) {
            var b = this;
            return null === this._state ? void this._deferreds.push(a) : void i(function () {
                var c = b._state ? a.onFulfilled : a.onRejected;
                if (null === c) return void(b._state ? a.resolve : a.reject)(b._value);
                var d;
                try {
                    d = c(b._value)
                } catch (b) {
                    return void a.reject(b)
                }
                a.resolve(d)
            })
        }

        function d(b) {
            try {
                if (b === this) throw new TypeError("A promise cannot be resolved with itself.");
                if (b && ("object" == typeof b || "function" == typeof b)) {
                    var c = b.then;
                    if ("function" == typeof c) return void h(a(c, b), a(d, this), a(e, this))
                }
                this._state = !0, this._value = b, f.call(this)
            } catch (a) {
                e.call(this, a)
            }
        }

        function e(a) {
            this._state = !1, this._value = a, f.call(this)
        }

        function f() {
            for (var a = 0, b = this._deferreds.length; a < b; a++) c.call(this, this._deferreds[a]);
            this._deferreds = null
        }

        function g(a, b, c, d) {
            this.onFulfilled = "function" == typeof a ? a : null, this.onRejected = "function" == typeof b ? b : null, this.resolve = c, this.reject = d
        }

        function h(a, b, c) {
            var d = !1;
            try {
                a(function (a) {
                    d || (d = !0, b(a))
                }, function (a) {
                    d || (d = !0, c(a))
                })
            } catch (a) {
                if (d) return;
                d = !0, c(a)
            }
        }
        if (window.Promise) return window.Promise;
        var i = b.immediateFn || "function" == typeof setImmediate && setImmediate || function (a) {
                setTimeout(a, 1)
            },
            j = Array.isArray || function (a) {
                return "[object Array]" === Object.prototype.toString.call(a)
            };
        return b.prototype["catch"] = function (a) {
            return this.then(null, a)
        }, b.prototype.then = function (a, d) {
            var e = this;
            return new b(function (b, f) {
                c.call(e, new g(a, d, b, f))
            })
        }, b.all = function () {
            var a = Array.prototype.slice.call(1 === arguments.length && j(arguments[0]) ? arguments[0] : arguments);
            return new b(function (b, c) {
                function d(f, g) {
                    try {
                        if (g && ("object" == typeof g || "function" == typeof g)) {
                            var h = g.then;
                            if ("function" == typeof h) return void h.call(g, function (a) {
                                d(f, a)
                            }, c)
                        }
                        a[f] = g, 0 === --e && b(a)
                    } catch (a) {
                        c(a)
                    }
                }
                if (0 === a.length) return b([]);
                for (var e = a.length, f = 0; f < a.length; f++) d(f, a[f])
            })
        }, b.resolve = function (a) {
            return a && "object" == typeof a && a.constructor === b ? a : new b(function (b) {
                b(a)
            })
        }, b.reject = function (a) {
            return new b(function (b, c) {
                c(a)
            })
        }, b.race = function (a) {
            return new b(function (b, c) {
                for (var d = 0, e = a.length; d < e; d++) a[d].then(b, c)
            })
        }, b
    }), g("15", ["1n", "1o", "1j", "1p", "1q", "2", "1d"], function (a, b, c, d, e, f, g) {
        var h, i = function (a, b) {
                var c, d = f.requestAnimationFrame,
                    e = ["ms", "moz", "webkit"],
                    g = function (a) {
                        f.setTimeout(a, 0)
                    };
                for (c = 0; c < e.length && !d; c++) d = f[e[c] + "RequestAnimationFrame"];
                d || (d = g), d(a, b)
            },
            j = function (a, b) {
                return "number" != typeof b && (b = 0), e(a, b)
            },
            k = function (a, b) {
                return "number" != typeof b && (b = 1), d(a, b)
            },
            l = function (a) {
                return b(a)
            },
            m = function (b) {
                return a(b)
            },
            n = function (a, c) {
                var d, e;
                return e = function () {
                    var e = arguments;
                    b(d), d = j(function () {
                        a.apply(this, e)
                    }, c)
                }, e.stop = function () {
                    b(d)
                }, e
            };
        return {
            requestAnimationFrame: function (a, b) {
                return h ? void h.then(a) : void(h = new g(function (a) {
                    b || (b = c.body), i(a, b)
                }).then(a))
            },
            setTimeout: j,
            setInterval: k,
            setEditorTimeout: function (a, b, c) {
                return j(function () {
                    a.removed || b()
                }, c)
            },
            setEditorInterval: function (b, c, d) {
                var e;
                return e = k(function () {
                    b.removed ? a(e) : c()
                }, d)
            },
            debounce: n,
            throttle: n,
            clearInterval: m,
            clearTimeout: l
        }
    }), g("o", ["1j", "2", "b", "15"], function (a, b, c, d) {
        "use strict";
        var e = "mce-data-",
            f = /^(?:mouse|contextmenu)|click/,
            g = {
                keyLocation: 1,
                layerX: 1,
                layerY: 1,
                returnValue: 1,
                webkitMovementX: 1,
                webkitMovementY: 1,
                keyIdentifier: 1
            },
            h = function (a) {
                return a.isDefaultPrevented === j || a.isDefaultPrevented === i
            },
            i = function () {
                return !1
            },
            j = function () {
                return !0
            },
            k = function (a, b, c, d) {
                a.addEventListener ? a.addEventListener(b, c, d || !1) : a.attachEvent && a.attachEvent("on" + b, c)
            },
            l = function (a, b, c, d) {
                a.removeEventListener ? a.removeEventListener(b, c, d || !1) : a.detachEvent && a.detachEvent("on" + b, c)
            },
            m = function (a, b) {
                var c, d = b;
                return c = a.path, c && c.length > 0 && (d = c[0]), a.deepPath && (c = a.deepPath(), c && c.length > 0 && (d = c[0])), d
            },
            n = function (b, d) {
                var e, k, l = d || {};
                for (e in b) g[e] || (l[e] = b[e]);
                if (l.target || (l.target = l.srcElement || a), c.experimentalShadowDom && (l.target = m(b, l.target)), b && f.test(b.type) && b.pageX === k && b.clientX !== k) {
                    var n = l.target.ownerDocument || a,
                        o = n.documentElement,
                        p = n.body;
                    l.pageX = b.clientX + (o && o.scrollLeft || p && p.scrollLeft || 0) - (o && o.clientLeft || p && p.clientLeft || 0), l.pageY = b.clientY + (o && o.scrollTop || p && p.scrollTop || 0) - (o && o.clientTop || p && p.clientTop || 0)
                }
                return l.preventDefault = function () {
                    l.isDefaultPrevented = j, b && (b.preventDefault ? b.preventDefault() : b.returnValue = !1)
                }, l.stopPropagation = function () {
                    l.isPropagationStopped = j, b && (b.stopPropagation ? b.stopPropagation() : b.cancelBubble = !0)
                }, l.stopImmediatePropagation = function () {
                    l.isImmediatePropagationStopped = j, l.stopPropagation()
                }, h(l) === !1 && (l.isDefaultPrevented = i, l.isPropagationStopped = i, l.isImmediatePropagationStopped = i), "undefined" == typeof l.metaKey && (l.metaKey = !1), l
            },
            o = function (a, b, e) {
                var f = a.document,
                    g = {
                        type: "ready"
                    };
                if (e.domLoaded) return void b(g);
                var h = function () {
                        return "complete" === f.readyState || "interactive" === f.readyState && f.body
                    },
                    i = function () {
                        e.domLoaded || (e.domLoaded = !0, b(g))
                    },
                    j = function () {
                        h() && (l(f, "readystatechange", j), i())
                    },
                    m = function () {
                        try {
                            f.documentElement.doScroll("left")
                        } catch (a) {
                            return void d.setTimeout(m)
                        }
                        i()
                    };
                !f.addEventListener || c.ie && c.ie < 11 ? (k(f, "readystatechange", j), f.documentElement.doScroll && a.self === a.top && m()) : h() ? i() : k(a, "DOMContentLoaded", i), k(a, "load", i)
            },
            p = function () {
                var c, d, f, g, h, i = this,
                    j = {};
                d = e + (+new Date).toString(32), g = "onmouseenter" in a.documentElement, f = "onfocusin" in a.documentElement, h = {
                    mouseenter: "mouseover",
                    mouseleave: "mouseout"
                }, c = 1, i.domLoaded = !1, i.events = j;
                var m = function (a, b) {
                    var c, d, e, f, g = j[b];
                    if (c = g && g[a.type])
                        for (d = 0, e = c.length; d < e; d++)
                            if (f = c[d], f && f.func.call(f.scope, a) === !1 && a.preventDefault(), a.isImmediatePropagationStopped()) return
                };
                i.bind = function (a, e, l, p) {
                    var q, r, s, t, u, v, w, x = b,
                        y = function (a) {
                            m(n(a || x.event), q)
                        };
                    if (a && 3 !== a.nodeType && 8 !== a.nodeType) {
                        for (a[d] ? q = a[d] : (q = c++, a[d] = q, j[q] = {}), p = p || a, e = e.split(" "), s = e.length; s--;) t = e[s], v = y, u = w = !1, "DOMContentLoaded" === t && (t = "ready"), i.domLoaded && "ready" === t && "complete" == a.readyState ? l.call(p, n({
                            type: t
                        })) : (g || (u = h[t], u && (v = function (a) {
                            var b, c;
                            if (b = a.currentTarget, c = a.relatedTarget, c && b.contains) c = b.contains(c);
                            else
                                for (; c && c !== b;) c = c.parentNode;
                            c || (a = n(a || x.event), a.type = "mouseout" === a.type ? "mouseleave" : "mouseenter", a.target = b, m(a, q))
                        })), f || "focusin" !== t && "focusout" !== t || (w = !0, u = "focusin" === t ? "focus" : "blur", v = function (a) {
                            a = n(a || x.event), a.type = "focus" === a.type ? "focusin" : "focusout", m(a, q)
                        }), r = j[q][t], r ? "ready" === t && i.domLoaded ? l({
                            type: t
                        }) : r.push({
                            func: l,
                            scope: p
                        }) : (j[q][t] = r = [{
                            func: l,
                            scope: p
                        }], r.fakeName = u, r.capture = w, r.nativeHandler = v, "ready" === t ? o(a, v, i) : k(a, u || t, v, w)));
                        return a = r = 0, l
                    }
                }, i.unbind = function (a, b, c) {
                    var e, f, g, h, k, m;
                    if (!a || 3 === a.nodeType || 8 === a.nodeType) return i;
                    if (e = a[d]) {
                        if (m = j[e], b) {
                            for (b = b.split(" "), g = b.length; g--;)
                                if (k = b[g], f = m[k]) {
                                    if (c)
                                        for (h = f.length; h--;)
                                            if (f[h].func === c) {
                                                var n = f.nativeHandler,
                                                    o = f.fakeName,
                                                    p = f.capture;
                                                f = f.slice(0, h).concat(f.slice(h + 1)), f.nativeHandler = n, f.fakeName = o, f.capture = p, m[k] = f
                                            } c && 0 !== f.length || (delete m[k], l(a, f.fakeName || k, f.nativeHandler, f.capture))
                                }
                        } else {
                            for (k in m) f = m[k], l(a, f.fakeName || k, f.nativeHandler, f.capture);
                            m = {}
                        }
                        for (k in m) return i;
                        delete j[e];
                        try {
                            delete a[d]
                        } catch (b) {
                            a[d] = null
                        }
                    }
                    return i
                }, i.fire = function (a, b, c) {
                    var e;
                    if (!a || 3 === a.nodeType || 8 === a.nodeType) return i;
                    c = n(null, c), c.type = b, c.target = a;
                    do e = a[d], e && m(c, e), a = a.parentNode || a.ownerDocument || a.defaultView || a.parentWindow; while (a && !c.isPropagationStopped());
                    return i
                }, i.clean = function (a) {
                    var b, c, e = i.unbind;
                    if (!a || 3 === a.nodeType || 8 === a.nodeType) return i;
                    if (a[d] && e(a), a.getElementsByTagName || (a = a.document), a && a.getElementsByTagName)
                        for (e(a), c = a.getElementsByTagName("*"), b = c.length; b--;) a = c[b], a[d] && e(a);
                    return i
                }, i.destroy = function () {
                    j = {}
                }, i.cancel = function (a) {
                    return a && (a.preventDefault(), a.stopImmediatePropagation()), !1
                }
            };
        return p.Event = new p, p.Event.bind(b, "ready", function () {}), p
    }), g("r", [], function () {
        function a(a, b, c, d) {
            var e, f, g, i, k, l, m, n, o, p;
            if ((b ? b.ownerDocument || b : L) !== D && C(b), b = b || D, c = c || [], !a || "string" != typeof a) return c;
            if (1 !== (i = b.nodeType) && 9 !== i) return [];
            if (F && !d) {
                if (e = oa.exec(a))
                    if (g = e[1]) {
                        if (9 === i) {
                            if (f = b.getElementById(g), !f || !f.parentNode) return c;
                            if (f.id === g) return c.push(f), c
                        } else if (b.ownerDocument && (f = b.ownerDocument.getElementById(g)) && J(b, f) && f.id === g) return c.push(f), c
                    } else {
                        if (e[2]) return Y.apply(c, b.getElementsByTagName(a)), c;
                        if ((g = e[3]) && s.getElementsByClassName) return Y.apply(c, b.getElementsByClassName(g)), c
                    } if (s.qsa && (!G || !G.test(a))) {
                    if (n = m = K, o = b, p = 9 === i && a, 1 === i && "object" !== b.nodeName.toLowerCase()) {
                        for (l = w(a), (m = b.getAttribute("id")) ? n = m.replace(qa, "\\$&") : b.setAttribute("id", n), n = "[id='" + n + "'] ", k = l.length; k--;) l[k] = n + j(l[k]);
                        o = pa.test(a) && h(b.parentNode) || b, p = l.join(",")
                    }
                    if (p) try {
                        return Y.apply(c, o.querySelectorAll(p)), c
                    } catch (a) {} finally {
                        m || b.removeAttribute("id")
                    }
                }
            }
            return y(a.replace(ea, "$1"), b, c, d)
        }

        function b() {
            function a(c, d) {
                return b.push(c + " ") > t.cacheLength && delete a[b.shift()], a[c + " "] = d
            }
            var b = [];
            return a
        }

        function c(a) {
            return a[K] = !0, a
        }

        function d(a, b) {
            var c = b && a,
                d = c && 1 === a.nodeType && 1 === b.nodeType && (~b.sourceIndex || T) - (~a.sourceIndex || T);
            if (d) return d;
            if (c)
                for (; c = c.nextSibling;)
                    if (c === b) return -1;
            return a ? 1 : -1
        }

        function e(a) {
            return function (b) {
                var c = b.nodeName.toLowerCase();
                return "input" === c && b.type === a
            }
        }

        function f(a) {
            return function (b) {
                var c = b.nodeName.toLowerCase();
                return ("input" === c || "button" === c) && b.type === a
            }
        }

        function g(a) {
            return c(function (b) {
                return b = +b, c(function (c, d) {
                    for (var e, f = a([], c.length, b), g = f.length; g--;) c[e = f[g]] && (c[e] = !(d[e] = c[e]))
                })
            })
        }

        function h(a) {
            return a && typeof a.getElementsByTagName !== S && a
        }

        function i() {}

        function j(a) {
            for (var b = 0, c = a.length, d = ""; b < c; b++) d += a[b].value;
            return d
        }

        function k(a, b, c) {
            var d = b.dir,
                e = c && "parentNode" === d,
                f = N++;
            return b.first ? function (b, c, f) {
                for (; b = b[d];)
                    if (1 === b.nodeType || e) return a(b, c, f)
            } : function (b, c, g) {
                var h, i, j = [M, f];
                if (g) {
                    for (; b = b[d];)
                        if ((1 === b.nodeType || e) && a(b, c, g)) return !0
                } else
                    for (; b = b[d];)
                        if (1 === b.nodeType || e) {
                            if (i = b[K] || (b[K] = {}), (h = i[d]) && h[0] === M && h[1] === f) return j[2] = h[2];
                            if (i[d] = j, j[2] = a(b, c, g)) return !0
                        }
            }
        }

        function l(a) {
            return a.length > 1 ? function (b, c, d) {
                for (var e = a.length; e--;)
                    if (!a[e](b, c, d)) return !1;
                return !0
            } : a[0]
        }

        function m(b, c, d) {
            for (var e = 0, f = c.length; e < f; e++) a(b, c[e], d);
            return d
        }

        function n(a, b, c, d, e) {
            for (var f, g = [], h = 0, i = a.length, j = null != b; h < i; h++)(f = a[h]) && (c && !c(f, d, e) || (g.push(f), j && b.push(h)));
            return g
        }

        function o(a, b, d, e, f, g) {
            return e && !e[K] && (e = o(e)), f && !f[K] && (f = o(f, g)), c(function (c, g, h, i) {
                var j, k, l, o = [],
                    p = [],
                    q = g.length,
                    r = c || m(b || "*", h.nodeType ? [h] : h, []),
                    s = !a || !c && b ? r : n(r, o, a, h, i),
                    t = d ? f || (c ? a : q || e) ? [] : g : s;
                if (d && d(s, t, h, i), e)
                    for (j = n(t, p), e(j, [], h, i), k = j.length; k--;)(l = j[k]) && (t[p[k]] = !(s[p[k]] = l));
                if (c) {
                    if (f || a) {
                        if (f) {
                            for (j = [], k = t.length; k--;)(l = t[k]) && j.push(s[k] = l);
                            f(null, t = [], j, i)
                        }
                        for (k = t.length; k--;)(l = t[k]) && (j = f ? $.call(c, l) : o[k]) > -1 && (c[j] = !(g[j] = l))
                    }
                } else t = n(t === g ? t.splice(q, t.length) : t), f ? f(null, g, t, i) : Y.apply(g, t)
            })
        }

        function p(a) {
            for (var b, c, d, e = a.length, f = t.relative[a[0].type], g = f || t.relative[" "], h = f ? 1 : 0, i = k(function (a) {
                    return a === b
                }, g, !0), m = k(function (a) {
                    return $.call(b, a) > -1
                }, g, !0), n = [function (a, c, d) {
                    return !f && (d || c !== z) || ((b = c).nodeType ? i(a, c, d) : m(a, c, d))
                }]; h < e; h++)
                if (c = t.relative[a[h].type]) n = [k(l(n), c)];
                else {
                    if (c = t.filter[a[h].type].apply(null, a[h].matches), c[K]) {
                        for (d = ++h; d < e && !t.relative[a[d].type]; d++);
                        return o(h > 1 && l(n), h > 1 && j(a.slice(0, h - 1).concat({
                            value: " " === a[h - 2].type ? "*" : ""
                        })).replace(ea, "$1"), c, h < d && p(a.slice(h, d)), d < e && p(a = a.slice(d)), d < e && j(a))
                    }
                    n.push(c)
                } return l(n)
        }

        function q(b, d) {
            var e = d.length > 0,
                f = b.length > 0,
                g = function (c, g, h, i, j) {
                    var k, l, m, o = 0,
                        p = "0",
                        q = c && [],
                        r = [],
                        s = z,
                        u = c || f && t.find.TAG("*", j),
                        v = M += null == s ? 1 : Math.random() || .1,
                        w = u.length;
                    for (j && (z = g !== D && g); p !== w && null != (k = u[p]); p++) {
                        if (f && k) {
                            for (l = 0; m = b[l++];)
                                if (m(k, g, h)) {
                                    i.push(k);
                                    break
                                } j && (M = v)
                        }
                        e && ((k = !m && k) && o--, c && q.push(k))
                    }
                    if (o += p, e && p !== o) {
                        for (l = 0; m = d[l++];) m(q, r, g, h);
                        if (c) {
                            if (o > 0)
                                for (; p--;) q[p] || r[p] || (r[p] = W.call(i));
                            r = n(r)
                        }
                        Y.apply(i, r), j && !c && r.length > 0 && o + d.length > 1 && a.uniqueSort(i)
                    }
                    return j && (M = v, z = s), q
                };
            return e ? c(g) : g
        }
        var r, s, t, u, v, w, x, y, z, A, B, C, D, E, F, G, H, I, J, K = "sizzle" + -new Date,
            L = window.document,
            M = 0,
            N = 0,
            O = b(),
            P = b(),
            Q = b(),
            R = function (a, b) {
                return a === b && (B = !0), 0
            },
            S = "undefined",
            T = 1 << 31,
            U = {}.hasOwnProperty,
            V = [],
            W = V.pop,
            X = V.push,
            Y = V.push,
            Z = V.slice,
            $ = V.indexOf || function (a) {
                for (var b = 0, c = this.length; b < c; b++)
                    if (this[b] === a) return b;
                return -1
            },
            _ = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
            aa = "[\\x20\\t\\r\\n\\f]",
            ba = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",
            ca = "\\[" + aa + "*(" + ba + ")(?:" + aa + "*([*^$|!~]?=)" + aa + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + ba + "))|)" + aa + "*\\]",
            da = ":(" + ba + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + ca + ")*)|.*)\\)|)",
            ea = new RegExp("^" + aa + "+|((?:^|[^\\\\])(?:\\\\.)*)" + aa + "+$", "g"),
            fa = new RegExp("^" + aa + "*," + aa + "*"),
            ga = new RegExp("^" + aa + "*([>+~]|" + aa + ")" + aa + "*"),
            ha = new RegExp("=" + aa + "*([^\\]'\"]*?)" + aa + "*\\]", "g"),
            ia = new RegExp(da),
            ja = new RegExp("^" + ba + "$"),
            ka = {
                ID: new RegExp("^#(" + ba + ")"),
                CLASS: new RegExp("^\\.(" + ba + ")"),
                TAG: new RegExp("^(" + ba + "|[*])"),
                ATTR: new RegExp("^" + ca),
                PSEUDO: new RegExp("^" + da),
                CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + aa + "*(even|odd|(([+-]|)(\\d*)n|)" + aa + "*(?:([+-]|)" + aa + "*(\\d+)|))" + aa + "*\\)|)", "i"),
                bool: new RegExp("^(?:" + _ + ")$", "i"),
                needsContext: new RegExp("^" + aa + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + aa + "*((?:-\\d)?\\d*)" + aa + "*\\)|)(?=[^-]|$)", "i")
            },
            la = /^(?:input|select|textarea|button)$/i,
            ma = /^h\d$/i,
            na = /^[^{]+\{\s*\[native \w/,
            oa = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
            pa = /[+~]/,
            qa = /'|\\/g,
            ra = new RegExp("\\\\([\\da-f]{1,6}" + aa + "?|(" + aa + ")|.)", "ig"),
            sa = function (a, b, c) {
                var d = "0x" + b - 65536;
                return d !== d || c ? b : d < 0 ? String.fromCharCode(d + 65536) : String.fromCharCode(d >> 10 | 55296, 1023 & d | 56320)
            };
        try {
            Y.apply(V = Z.call(L.childNodes), L.childNodes), V[L.childNodes.length].nodeType
        } catch (a) {
            Y = {
                apply: V.length ? function (a, b) {
                    X.apply(a, Z.call(b))
                } : function (a, b) {
                    for (var c = a.length, d = 0; a[c++] = b[d++];);
                    a.length = c - 1
                }
            }
        }
        s = a.support = {}, v = a.isXML = function (a) {
            var b = a && (a.ownerDocument || a).documentElement;
            return !!b && "HTML" !== b.nodeName
        }, C = a.setDocument = function (a) {
            function b(a) {
                try {
                    return a.top
                } catch (a) {}
                return null
            }
            var c, e = a ? a.ownerDocument || a : L,
                f = e.defaultView;
            return e !== D && 9 === e.nodeType && e.documentElement ? (D = e, E = e.documentElement, F = !v(e), f && f !== b(f) && (f.addEventListener ? f.addEventListener("unload", function () {
                C()
            }, !1) : f.attachEvent && f.attachEvent("onunload", function () {
                C()
            })), s.attributes = !0, s.getElementsByTagName = !0, s.getElementsByClassName = na.test(e.getElementsByClassName), s.getById = !0, t.find.ID = function (a, b) {
                if (typeof b.getElementById !== S && F) {
                    var c = b.getElementById(a);
                    return c && c.parentNode ? [c] : []
                }
            }, t.filter.ID = function (a) {
                var b = a.replace(ra, sa);
                return function (a) {
                    return a.getAttribute("id") === b
                }
            }, t.find.TAG = s.getElementsByTagName ? function (a, b) {
                if (typeof b.getElementsByTagName !== S) return b.getElementsByTagName(a)
            } : function (a, b) {
                var c, d = [],
                    e = 0,
                    f = b.getElementsByTagName(a);
                if ("*" === a) {
                    for (; c = f[e++];) 1 === c.nodeType && d.push(c);
                    return d
                }
                return f
            }, t.find.CLASS = s.getElementsByClassName && function (a, b) {
                if (F) return b.getElementsByClassName(a)
            }, H = [], G = [], s.disconnectedMatch = !0, G = G.length && new RegExp(G.join("|")), H = H.length && new RegExp(H.join("|")), c = na.test(E.compareDocumentPosition), J = c || na.test(E.contains) ? function (a, b) {
                var c = 9 === a.nodeType ? a.documentElement : a,
                    d = b && b.parentNode;
                return a === d || !(!d || 1 !== d.nodeType || !(c.contains ? c.contains(d) : a.compareDocumentPosition && 16 & a.compareDocumentPosition(d)))
            } : function (a, b) {
                if (b)
                    for (; b = b.parentNode;)
                        if (b === a) return !0;
                return !1
            }, R = c ? function (a, b) {
                if (a === b) return B = !0, 0;
                var c = !a.compareDocumentPosition - !b.compareDocumentPosition;
                return c ? c : (c = (a.ownerDocument || a) === (b.ownerDocument || b) ? a.compareDocumentPosition(b) : 1, 1 & c || !s.sortDetached && b.compareDocumentPosition(a) === c ? a === e || a.ownerDocument === L && J(L, a) ? -1 : b === e || b.ownerDocument === L && J(L, b) ? 1 : A ? $.call(A, a) - $.call(A, b) : 0 : 4 & c ? -1 : 1)
            } : function (a, b) {
                if (a === b) return B = !0, 0;
                var c, f = 0,
                    g = a.parentNode,
                    h = b.parentNode,
                    i = [a],
                    j = [b];
                if (!g || !h) return a === e ? -1 : b === e ? 1 : g ? -1 : h ? 1 : A ? $.call(A, a) - $.call(A, b) : 0;
                if (g === h) return d(a, b);
                for (c = a; c = c.parentNode;) i.unshift(c);
                for (c = b; c = c.parentNode;) j.unshift(c);
                for (; i[f] === j[f];) f++;
                return f ? d(i[f], j[f]) : i[f] === L ? -1 : j[f] === L ? 1 : 0
            }, e) : D
        }, a.matches = function (b, c) {
            return a(b, null, null, c)
        }, a.matchesSelector = function (b, c) {
            if ((b.ownerDocument || b) !== D && C(b), c = c.replace(ha, "='$1']"), s.matchesSelector && F && (!H || !H.test(c)) && (!G || !G.test(c))) try {
                var d = I.call(b, c);
                if (d || s.disconnectedMatch || b.document && 11 !== b.document.nodeType) return d
            } catch (a) {}
            return a(c, D, null, [b]).length > 0
        }, a.contains = function (a, b) {
            return (a.ownerDocument || a) !== D && C(a), J(a, b)
        }, a.attr = function (a, b) {
            (a.ownerDocument || a) !== D && C(a);
            var c = t.attrHandle[b.toLowerCase()],
                d = c && U.call(t.attrHandle, b.toLowerCase()) ? c(a, b, !F) : void 0;
            return void 0 !== d ? d : s.attributes || !F ? a.getAttribute(b) : (d = a.getAttributeNode(b)) && d.specified ? d.value : null
        }, a.error = function (a) {
            throw new Error("Syntax error, unrecognized expression: " + a)
        }, a.uniqueSort = function (a) {
            var b, c = [],
                d = 0,
                e = 0;
            if (B = !s.detectDuplicates, A = !s.sortStable && a.slice(0), a.sort(R), B) {
                for (; b = a[e++];) b === a[e] && (d = c.push(e));
                for (; d--;) a.splice(c[d], 1)
            }
            return A = null, a
        }, u = a.getText = function (a) {
            var b, c = "",
                d = 0,
                e = a.nodeType;
            if (e) {
                if (1 === e || 9 === e || 11 === e) {
                    if ("string" == typeof a.textContent) return a.textContent;
                    for (a = a.firstChild; a; a = a.nextSibling) c += u(a)
                } else if (3 === e || 4 === e) return a.nodeValue
            } else
                for (; b = a[d++];) c += u(b);
            return c
        }, t = a.selectors = {
            cacheLength: 50,
            createPseudo: c,
            match: ka,
            attrHandle: {},
            find: {},
            relative: {
                ">": {
                    dir: "parentNode",
                    first: !0
                },
                " ": {
                    dir: "parentNode"
                },
                "+": {
                    dir: "previousSibling",
                    first: !0
                },
                "~": {
                    dir: "previousSibling"
                }
            },
            preFilter: {
                ATTR: function (a) {
                    return a[1] = a[1].replace(ra, sa), a[3] = (a[3] || a[4] || a[5] || "").replace(ra, sa), "~=" === a[2] && (a[3] = " " + a[3] + " "), a.slice(0, 4)
                },
                CHILD: function (b) {
                    return b[1] = b[1].toLowerCase(), "nth" === b[1].slice(0, 3) ? (b[3] || a.error(b[0]), b[4] = +(b[4] ? b[5] + (b[6] || 1) : 2 * ("even" === b[3] || "odd" === b[3])), b[5] = +(b[7] + b[8] || "odd" === b[3])) : b[3] && a.error(b[0]), b
                },
                PSEUDO: function (a) {
                    var b, c = !a[6] && a[2];
                    return ka.CHILD.test(a[0]) ? null : (a[3] ? a[2] = a[4] || a[5] || "" : c && ia.test(c) && (b = w(c, !0)) && (b = c.indexOf(")", c.length - b) - c.length) && (a[0] = a[0].slice(0, b), a[2] = c.slice(0, b)), a.slice(0, 3))
                }
            },
            filter: {
                TAG: function (a) {
                    var b = a.replace(ra, sa).toLowerCase();
                    return "*" === a ? function () {
                        return !0
                    } : function (a) {
                        return a.nodeName && a.nodeName.toLowerCase() === b
                    }
                },
                CLASS: function (a) {
                    var b = O[a + " "];
                    return b || (b = new RegExp("(^|" + aa + ")" + a + "(" + aa + "|$)")) && O(a, function (a) {
                        return b.test("string" == typeof a.className && a.className || typeof a.getAttribute !== S && a.getAttribute("class") || "")
                    })
                },
                ATTR: function (b, c, d) {
                    return function (e) {
                        var f = a.attr(e, b);
                        return null == f ? "!=" === c : !c || (f += "", "=" === c ? f === d : "!=" === c ? f !== d : "^=" === c ? d && 0 === f.indexOf(d) : "*=" === c ? d && f.indexOf(d) > -1 : "$=" === c ? d && f.slice(-d.length) === d : "~=" === c ? (" " + f + " ").indexOf(d) > -1 : "|=" === c && (f === d || f.slice(0, d.length + 1) === d + "-"))
                    }
                },
                CHILD: function (a, b, c, d, e) {
                    var f = "nth" !== a.slice(0, 3),
                        g = "last" !== a.slice(-4),
                        h = "of-type" === b;
                    return 1 === d && 0 === e ? function (a) {
                        return !!a.parentNode
                    } : function (b, c, i) {
                        var j, k, l, m, n, o, p = f !== g ? "nextSibling" : "previousSibling",
                            q = b.parentNode,
                            r = h && b.nodeName.toLowerCase(),
                            s = !i && !h;
                        if (q) {
                            if (f) {
                                for (; p;) {
                                    for (l = b; l = l[p];)
                                        if (h ? l.nodeName.toLowerCase() === r : 1 === l.nodeType) return !1;
                                    o = p = "only" === a && !o && "nextSibling"
                                }
                                return !0
                            }
                            if (o = [g ? q.firstChild : q.lastChild], g && s) {
                                for (k = q[K] || (q[K] = {}), j = k[a] || [], n = j[0] === M && j[1], m = j[0] === M && j[2], l = n && q.childNodes[n]; l = ++n && l && l[p] || (m = n = 0) || o.pop();)
                                    if (1 === l.nodeType && ++m && l === b) {
                                        k[a] = [M, n, m];
                                        break
                                    }
                            } else if (s && (j = (b[K] || (b[K] = {}))[a]) && j[0] === M) m = j[1];
                            else
                                for (;
                                    (l = ++n && l && l[p] || (m = n = 0) || o.pop()) && ((h ? l.nodeName.toLowerCase() !== r : 1 !== l.nodeType) || !++m || (s && ((l[K] || (l[K] = {}))[a] = [M, m]), l !== b)););
                            return m -= e, m === d || m % d === 0 && m / d >= 0
                        }
                    }
                },
                PSEUDO: function (b, d) {
                    var e, f = t.pseudos[b] || t.setFilters[b.toLowerCase()] || a.error("unsupported pseudo: " + b);
                    return f[K] ? f(d) : f.length > 1 ? (e = [b, b, "", d], t.setFilters.hasOwnProperty(b.toLowerCase()) ? c(function (a, b) {
                        for (var c, e = f(a, d), g = e.length; g--;) c = $.call(a, e[g]), a[c] = !(b[c] = e[g])
                    }) : function (a) {
                        return f(a, 0, e)
                    }) : f
                }
            },
            pseudos: {
                not: c(function (a) {
                    var b = [],
                        d = [],
                        e = x(a.replace(ea, "$1"));
                    return e[K] ? c(function (a, b, c, d) {
                        for (var f, g = e(a, null, d, []), h = a.length; h--;)(f = g[h]) && (a[h] = !(b[h] = f))
                    }) : function (a, c, f) {
                        return b[0] = a, e(b, null, f, d), !d.pop()
                    }
                }),
                has: c(function (b) {
                    return function (c) {
                        return a(b, c).length > 0
                    }
                }),
                contains: c(function (a) {
                    return a = a.replace(ra, sa),
                        function (b) {
                            return (b.textContent || b.innerText || u(b)).indexOf(a) > -1
                        }
                }),
                lang: c(function (b) {
                    return ja.test(b || "") || a.error("unsupported lang: " + b), b = b.replace(ra, sa).toLowerCase(),
                        function (a) {
                            var c;
                            do
                                if (c = F ? a.lang : a.getAttribute("xml:lang") || a.getAttribute("lang")) return c = c.toLowerCase(), c === b || 0 === c.indexOf(b + "-"); while ((a = a.parentNode) && 1 === a.nodeType);
                            return !1
                        }
                }),
                target: function (a) {
                    var b = window.location && window.location.hash;
                    return b && b.slice(1) === a.id
                },
                root: function (a) {
                    return a === E
                },
                focus: function (a) {
                    return a === D.activeElement && (!D.hasFocus || D.hasFocus()) && !!(a.type || a.href || ~a.tabIndex)
                },
                enabled: function (a) {
                    return a.disabled === !1
                },
                disabled: function (a) {
                    return a.disabled === !0
                },
                checked: function (a) {
                    var b = a.nodeName.toLowerCase();
                    return "input" === b && !!a.checked || "option" === b && !!a.selected
                },
                selected: function (a) {
                    return a.parentNode && a.parentNode.selectedIndex, a.selected === !0
                },
                empty: function (a) {
                    for (a = a.firstChild; a; a = a.nextSibling)
                        if (a.nodeType < 6) return !1;
                    return !0
                },
                parent: function (a) {
                    return !t.pseudos.empty(a)
                },
                header: function (a) {
                    return ma.test(a.nodeName)
                },
                input: function (a) {
                    return la.test(a.nodeName)
                },
                button: function (a) {
                    var b = a.nodeName.toLowerCase();
                    return "input" === b && "button" === a.type || "button" === b
                },
                text: function (a) {
                    var b;
                    return "input" === a.nodeName.toLowerCase() && "text" === a.type && (null == (b = a.getAttribute("type")) || "text" === b.toLowerCase())
                },
                first: g(function () {
                    return [0]
                }),
                last: g(function (a, b) {
                    return [b - 1]
                }),
                eq: g(function (a, b, c) {
                    return [c < 0 ? c + b : c]
                }),
                even: g(function (a, b) {
                    for (var c = 0; c < b; c += 2) a.push(c);
                    return a
                }),
                odd: g(function (a, b) {
                    for (var c = 1; c < b; c += 2) a.push(c);
                    return a
                }),
                lt: g(function (a, b, c) {
                    for (var d = c < 0 ? c + b : c; --d >= 0;) a.push(d);
                    return a
                }),
                gt: g(function (a, b, c) {
                    for (var d = c < 0 ? c + b : c; ++d < b;) a.push(d);
                    return a
                })
            }
        }, t.pseudos.nth = t.pseudos.eq;
        for (r in {
                radio: !0,
                checkbox: !0,
                file: !0,
                password: !0,
                image: !0
            }) t.pseudos[r] = e(r);
        for (r in {
                submit: !0,
                reset: !0
            }) t.pseudos[r] = f(r);
        return i.prototype = t.filters = t.pseudos, t.setFilters = new i, w = a.tokenize = function (b, c) {
            var d, e, f, g, h, i, j, k = P[b + " "];
            if (k) return c ? 0 : k.slice(0);
            for (h = b, i = [], j = t.preFilter; h;) {
                d && !(e = fa.exec(h)) || (e && (h = h.slice(e[0].length) || h), i.push(f = [])), d = !1, (e = ga.exec(h)) && (d = e.shift(), f.push({
                    value: d,
                    type: e[0].replace(ea, " ")
                }), h = h.slice(d.length));
                for (g in t.filter) !(e = ka[g].exec(h)) || j[g] && !(e = j[g](e)) || (d = e.shift(), f.push({
                    value: d,
                    type: g,
                    matches: e
                }), h = h.slice(d.length));
                if (!d) break
            }
            return c ? h.length : h ? a.error(b) : P(b, i).slice(0)
        }, x = a.compile = function (a, b) {
            var c, d = [],
                e = [],
                f = Q[a + " "];
            if (!f) {
                for (b || (b = w(a)), c = b.length; c--;) f = p(b[c]), f[K] ? d.push(f) : e.push(f);
                f = Q(a, q(e, d)), f.selector = a
            }
            return f
        }, y = a.select = function (a, b, c, d) {
            var e, f, g, i, k, l = "function" == typeof a && a,
                m = !d && w(a = l.selector || a);
            if (c = c || [], 1 === m.length) {
                if (f = m[0] = m[0].slice(0), f.length > 2 && "ID" === (g = f[0]).type && s.getById && 9 === b.nodeType && F && t.relative[f[1].type]) {
                    if (b = (t.find.ID(g.matches[0].replace(ra, sa), b) || [])[0], !b) return c;
                    l && (b = b.parentNode), a = a.slice(f.shift().value.length)
                }
                for (e = ka.needsContext.test(a) ? 0 : f.length; e-- && (g = f[e], !t.relative[i = g.type]);)
                    if ((k = t.find[i]) && (d = k(g.matches[0].replace(ra, sa), pa.test(f[0].type) && h(b.parentNode) || b))) {
                        if (f.splice(e, 1), a = d.length && j(f), !a) return Y.apply(c, d), c;
                        break
                    }
            }
            return (l || x(a, m))(d, b, !F, c, pa.test(a) && h(b.parentNode) || b), c
        }, s.sortStable = K.split("").sort(R).join("") === K, s.detectDuplicates = !!B, C(), s.sortDetached = !0, a
    }), g("1r", [], function () {
        var a = Array.isArray || function (a) {
                return "[object Array]" === Object.prototype.toString.call(a)
            },
            b = function (b) {
                var c, d, e = b;
                if (!a(b))
                    for (e = [], c = 0, d = b.length; c < d; c++) e[c] = b[c];
                return e
            },
            c = function (a, b, c) {
                var d, e;
                if (!a) return 0;
                if (c = c || a, void 0 !== a.length) {
                    for (d = 0, e = a.length; d < e; d++)
                        if (b.call(c, a[d], d, a) === !1) return 0
                } else
                    for (d in a)
                        if (a.hasOwnProperty(d) && b.call(c, a[d], d, a) === !1) return 0;
                return 1
            },
            d = function (a, b) {
                var d = [];
                return c(a, function (c, e) {
                    d.push(b(c, e, a))
                }), d
            },
            e = function (a, b) {
                var d = [];
                return c(a, function (c, e) {
                    b && !b(c, e, a) || d.push(c)
                }), d
            },
            f = function (a, b) {
                var c, d;
                if (a)
                    for (c = 0,
                        d = a.length; c < d; c++)
                        if (a[c] === b) return c;
                return -1
            },
            g = function (a, b, c, d) {
                var e = 0;
                for (arguments.length < 3 && (c = a[0]); e < a.length; e++) c = b.call(d, c, a[e], e);
                return c
            },
            h = function (a, b, c) {
                var d, e;
                for (d = 0, e = a.length; d < e; d++)
                    if (b.call(c, a[d], d, a)) return d;
                return -1
            },
            i = function (a, b, c) {
                var d = h(a, b, c);
                if (d !== -1) return a[d]
            },
            j = function (a) {
                return a[a.length - 1]
            };
        return {
            isArray: a,
            toArray: b,
            each: c,
            map: d,
            filter: e,
            indexOf: f,
            reduce: g,
            findIndex: h,
            find: i,
            last: j
        }
    }), g("1e", ["2", "b", "1r"], function (a, b, c) {
        var d = /^\s*|\s*$/g,
            e = function (a) {
                return null === a || void 0 === a ? "" : ("" + a).replace(d, "")
            },
            f = function (a, b) {
                return b ? !("array" != b || !c.isArray(a)) || typeof a == b : void 0 !== a
            },
            g = function (a, b, c) {
                var d;
                for (a = a || [], b = b || ",", "string" == typeof a && (a = a.split(b)), c = c || {}, d = a.length; d--;) c[a[d]] = {};
                return c
            },
            h = function (a, b) {
                return Object.prototype.hasOwnProperty.call(a, b)
            },
            i = function (a, b, c) {
                var d, e, f, g, h, i = this,
                    j = 0;
                if (a = /^((static) )?([\w.]+)(:([\w.]+))?/.exec(a), f = a[3].match(/(^|\.)(\w+)$/i)[2], e = i.createNS(a[3].replace(/\.\w+$/, ""), c), !e[f]) {
                    if ("static" == a[2]) return e[f] = b, void(this.onCreate && this.onCreate(a[2], a[3], e[f]));
                    b[f] || (b[f] = function () {}, j = 1), e[f] = b[f], i.extend(e[f].prototype, b), a[5] && (d = i.resolve(a[5]).prototype, g = a[5].match(/\.(\w+)$/i)[1], h = e[f], j ? e[f] = function () {
                        return d[g].apply(this, arguments)
                    } : e[f] = function () {
                        return this.parent = d[g], h.apply(this, arguments)
                    }, e[f].prototype[f] = e[f], i.each(d, function (a, b) {
                        e[f].prototype[b] = d[b]
                    }), i.each(b, function (a, b) {
                        d[b] ? e[f].prototype[b] = function () {
                            return this.parent = d[b], a.apply(this, arguments)
                        } : b != f && (e[f].prototype[b] = a)
                    })), i.each(b["static"], function (a, b) {
                        e[f][b] = a
                    })
                }
            },
            j = function (a, b) {
                var c, d, e, f, g = arguments;
                for (c = 1, d = g.length; c < d; c++) {
                    b = g[c];
                    for (e in b) b.hasOwnProperty(e) && (f = b[e], void 0 !== f && (a[e] = f))
                }
                return a
            },
            k = function (a, b, d, e) {
                e = e || this, a && (d && (a = a[d]), c.each(a, function (a, c) {
                    return b.call(e, a, c, d) !== !1 && void k(a, b, d, e)
                }))
            },
            l = function (b, c) {
                var d, e;
                for (c = c || a, b = b.split("."), d = 0; d < b.length; d++) e = b[d], c[e] || (c[e] = {}), c = c[e];
                return c
            },
            m = function (b, c) {
                var d, e;
                for (c = c || a, b = b.split("."), d = 0, e = b.length; d < e && (c = c[b[d]], c); d++);
                return c
            },
            n = function (a, b) {
                return !a || f(a, "array") ? a : c.map(a.split(b || ","), e)
            },
            o = function (a) {
                var c = b.cacheSuffix;
                return c && (a += (a.indexOf("?") === -1 ? "?" : "&") + c), a
            };
        return {
            trim: e,
            isArray: c.isArray,
            is: f,
            toArray: c.toArray,
            makeMap: g,
            each: c.each,
            map: c.map,
            grep: c.filter,
            inArray: c.indexOf,
            hasOwn: h,
            extend: j,
            create: i,
            walk: k,
            createNS: l,
            resolve: m,
            explode: n,
            _addCacheSuffix: o
        }
    }), g("n", ["1j", "o", "r", "b", "1e"], function (a, b, c, d, e) {
        var f, g = a,
            h = Array.prototype.push,
            i = Array.prototype.slice,
            j = /^(?:[^#<]*(<[\w\W]+>)[^>]*$|#([\w\-]*)$)/,
            k = b.Event,
            l = e.makeMap("children,contents,next,prev"),
            m = function (a) {
                return "undefined" != typeof a
            },
            n = function (a) {
                return "string" == typeof a
            },
            o = function (a) {
                return a && a == a.window
            },
            p = function (a, b) {
                var c, d, e;
                for (b = b || g, e = b.createElement("div"), c = b.createDocumentFragment(), e.innerHTML = a; d = e.firstChild;) c.appendChild(d);
                return c
            },
            q = function (a, b, c, d) {
                var e;
                if (n(b)) b = p(b, F(a[0]));
                else if (b.length && !b.nodeType) {
                    if (b = z.makeArray(b), d)
                        for (e = b.length - 1; e >= 0; e--) q(a, b[e], c, d);
                    else
                        for (e = 0; e < b.length; e++) q(a, b[e], c, d);
                    return a
                }
                if (b.nodeType)
                    for (e = a.length; e--;) c.call(a[e], b);
                return a
            },
            r = function (a, b) {
                return a && b && (" " + a.className + " ").indexOf(" " + b + " ") !== -1
            },
            s = function (a, b, c) {
                var d, e;
                return b = z(b)[0], a.each(function () {
                    var a = this;
                    c && d == a.parentNode ? e.appendChild(a) : (d = a.parentNode, e = b.cloneNode(!1), a.parentNode.insertBefore(e, a), e.appendChild(a))
                }), a
            },
            t = e.makeMap("fillOpacity fontWeight lineHeight opacity orphans widows zIndex zoom", " "),
            u = e.makeMap("checked compact declare defer disabled ismap multiple nohref noshade nowrap readonly selected", " "),
            v = {
                "for": "htmlFor",
                "class": "className",
                readonly: "readOnly"
            },
            w = {
                "float": "cssFloat"
            },
            x = {},
            y = {},
            z = function (a, b) {
                return new z.fn.init(a, b)
            },
            A = function (a, b) {
                var c;
                if (b.indexOf) return b.indexOf(a);
                for (c = b.length; c--;)
                    if (b[c] === a) return c;
                return -1
            },
            B = /^\s*|\s*$/g,
            C = function (a) {
                return null === a || a === f ? "" : ("" + a).replace(B, "")
            },
            D = function (a, b) {
                var c, d, e, f, g;
                if (a)
                    if (c = a.length, c === f) {
                        for (d in a)
                            if (a.hasOwnProperty(d) && (g = a[d], b.call(g, d, g) === !1)) break
                    } else
                        for (e = 0; e < c && (g = a[e], b.call(g, e, g) !== !1); e++);
                return a
            },
            E = function (a, b) {
                var c = [];
                return D(a, function (a, d) {
                    b(d, a) && c.push(d)
                }), c
            },
            F = function (a) {
                return a ? 9 == a.nodeType ? a : a.ownerDocument : g
            };
        z.fn = z.prototype = {
            constructor: z,
            selector: "",
            context: null,
            length: 0,
            init: function (b, c) {
                var d, e, f = this;
                if (!b) return f;
                if (b.nodeType) return f.context = f[0] = b, f.length = 1, f;
                if (c && c.nodeType) f.context = c;
                else {
                    if (c) return z(b).attr(c);
                    f.context = c = a
                }
                if (n(b)) {
                    if (f.selector = b, d = "<" === b.charAt(0) && ">" === b.charAt(b.length - 1) && b.length >= 3 ? [null, b, null] : j.exec(b), !d) return z(c).find(b);
                    if (d[1])
                        for (e = p(b, F(c)).firstChild; e;) h.call(f, e), e = e.nextSibling;
                    else {
                        if (e = F(c).getElementById(d[2]), !e) return f;
                        if (e.id !== d[2]) return f.find(b);
                        f.length = 1, f[0] = e
                    }
                } else this.add(b, !1);
                return f
            },
            toArray: function () {
                return e.toArray(this)
            },
            add: function (a, b) {
                var c, d, e = this;
                if (n(a)) return e.add(z(a));
                if (b !== !1)
                    for (c = z.unique(e.toArray().concat(z.makeArray(a))), e.length = c.length, d = 0; d < c.length; d++) e[d] = c[d];
                else h.apply(e, z.makeArray(a));
                return e
            },
            attr: function (a, b) {
                var c, d = this;
                if ("object" == typeof a) D(a, function (a, b) {
                    d.attr(a, b)
                });
                else {
                    if (!m(b)) {
                        if (d[0] && 1 === d[0].nodeType) {
                            if (c = x[a], c && c.get) return c.get(d[0], a);
                            if (u[a]) return d.prop(a) ? a : f;
                            b = d[0].getAttribute(a, 2), null === b && (b = f)
                        }
                        return b
                    }
                    this.each(function () {
                        var c;
                        if (1 === this.nodeType) {
                            if (c = x[a], c && c.set) return void c.set(this, b);
                            null === b ? this.removeAttribute(a, 2) : this.setAttribute(a, b, 2)
                        }
                    })
                }
                return d
            },
            removeAttr: function (a) {
                return this.attr(a, null)
            },
            prop: function (a, b) {
                var c = this;
                if (a = v[a] || a, "object" == typeof a) D(a, function (a, b) {
                    c.prop(a, b)
                });
                else {
                    if (!m(b)) return c[0] && c[0].nodeType && a in c[0] ? c[0][a] : b;
                    this.each(function () {
                        1 == this.nodeType && (this[a] = b)
                    })
                }
                return c
            },
            css: function (a, b) {
                var c, d, e = this,
                    g = function (a) {
                        return a.replace(/-(\D)/g, function (a, b) {
                            return b.toUpperCase()
                        })
                    },
                    h = function (a) {
                        return a.replace(/[A-Z]/g, function (a) {
                            return "-" + a
                        })
                    };
                if ("object" == typeof a) D(a, function (a, b) {
                    e.css(a, b)
                });
                else if (m(b)) a = g(a), "number" != typeof b || t[a] || (b += "px"), e.each(function () {
                    var c = this.style;
                    if (d = y[a], d && d.set) return void d.set(this, b);
                    try {
                        this.style[w[a] || a] = b
                    } catch (a) {}
                    null !== b && "" !== b || (c.removeProperty ? c.removeProperty(h(a)) : c.removeAttribute(a))
                });
                else {
                    if (c = e[0], d = y[a], d && d.get) return d.get(c);
                    if (c.ownerDocument.defaultView) try {
                        return c.ownerDocument.defaultView.getComputedStyle(c, null).getPropertyValue(h(a))
                    } catch (a) {
                        return f
                    } else if (c.currentStyle) return c.currentStyle[g(a)]
                }
                return e
            },
            remove: function () {
                for (var a, b = this, c = this.length; c--;) a = b[c], k.clean(a), a.parentNode && a.parentNode.removeChild(a);
                return this
            },
            empty: function () {
                for (var a, b = this, c = this.length; c--;)
                    for (a = b[c]; a.firstChild;) a.removeChild(a.firstChild);
                return this
            },
            html: function (a) {
                var b, c = this;
                if (m(a)) {
                    b = c.length;
                    try {
                        for (; b--;) c[b].innerHTML = a
                    } catch (d) {
                        z(c[b]).empty().append(a)
                    }
                    return c
                }
                return c[0] ? c[0].innerHTML : ""
            },
            text: function (a) {
                var b, c = this;
                if (m(a)) {
                    for (b = c.length; b--;) "innerText" in c[b] ? c[b].innerText = a : c[0].textContent = a;
                    return c
                }
                return c[0] ? c[0].innerText || c[0].textContent : ""
            },
            append: function () {
                return q(this, arguments, function (a) {
                    (1 === this.nodeType || this.host && 1 === this.host.nodeType) && this.appendChild(a)
                })
            },
            prepend: function () {
                return q(this, arguments, function (a) {
                    (1 === this.nodeType || this.host && 1 === this.host.nodeType) && this.insertBefore(a, this.firstChild)
                }, !0)
            },
            before: function () {
                var a = this;
                return a[0] && a[0].parentNode ? q(a, arguments, function (a) {
                    this.parentNode.insertBefore(a, this)
                }) : a
            },
            after: function () {
                var a = this;
                return a[0] && a[0].parentNode ? q(a, arguments, function (a) {
                    this.parentNode.insertBefore(a, this.nextSibling)
                }, !0) : a
            },
            appendTo: function (a) {
                return z(a).append(this), this
            },
            prependTo: function (a) {
                return z(a).prepend(this), this
            },
            replaceWith: function (a) {
                return this.before(a).remove()
            },
            wrap: function (a) {
                return s(this, a)
            },
            wrapAll: function (a) {
                return s(this, a, !0)
            },
            wrapInner: function (a) {
                return this.each(function () {
                    z(this).contents().wrapAll(a)
                }), this
            },
            unwrap: function () {
                return this.parent().each(function () {
                    z(this).replaceWith(this.childNodes)
                })
            },
            clone: function () {
                var a = [];
                return this.each(function () {
                    a.push(this.cloneNode(!0))
                }), z(a)
            },
            addClass: function (a) {
                return this.toggleClass(a, !0)
            },
            removeClass: function (a) {
                return this.toggleClass(a, !1)
            },
            toggleClass: function (a, b) {
                var c = this;
                return "string" != typeof a ? c : (a.indexOf(" ") !== -1 ? D(a.split(" "), function () {
                    c.toggleClass(this, b)
                }) : c.each(function (c, d) {
                    var e, f;
                    f = r(d, a), f !== b && (e = d.className, f ? d.className = C((" " + e + " ").replace(" " + a + " ", " ")) : d.className += e ? " " + a : a)
                }), c)
            },
            hasClass: function (a) {
                return r(this[0], a)
            },
            each: function (a) {
                return D(this, a)
            },
            on: function (a, b) {
                return this.each(function () {
                    k.bind(this, a, b)
                })
            },
            off: function (a, b) {
                return this.each(function () {
                    k.unbind(this, a, b)
                })
            },
            trigger: function (a) {
                return this.each(function () {
                    "object" == typeof a ? k.fire(this, a.type, a) : k.fire(this, a)
                })
            },
            show: function () {
                return this.css("display", "")
            },
            hide: function () {
                return this.css("display", "none")
            },
            slice: function () {
                return new z(i.apply(this, arguments))
            },
            eq: function (a) {
                return a === -1 ? this.slice(a) : this.slice(a, +a + 1)
            },
            first: function () {
                return this.eq(0)
            },
            last: function () {
                return this.eq(-1)
            },
            find: function (a) {
                var b, c, d = [];
                for (b = 0, c = this.length; b < c; b++) z.find(a, this[b], d);
                return z(d)
            },
            filter: function (a) {
                return z("function" == typeof a ? E(this.toArray(), function (b, c) {
                    return a(c, b)
                }) : z.filter(a, this.toArray()))
            },
            closest: function (a) {
                var b = [];
                return a instanceof z && (a = a[0]), this.each(function (c, d) {
                    for (; d;) {
                        if ("string" == typeof a && z(d).is(a)) {
                            b.push(d);
                            break
                        }
                        if (d == a) {
                            b.push(d);
                            break
                        }
                        d = d.parentNode
                    }
                }), z(b)
            },
            offset: function (a) {
                var b, c, d, e, f = 0,
                    g = 0;
                return a ? this.css(a) : (b = this[0], b && (c = b.ownerDocument, d = c.documentElement, b.getBoundingClientRect && (e = b.getBoundingClientRect(), f = e.left + (d.scrollLeft || c.body.scrollLeft) - d.clientLeft, g = e.top + (d.scrollTop || c.body.scrollTop) - d.clientTop)), {
                    left: f,
                    top: g
                })
            },
            push: h,
            sort: [].sort,
            splice: [].splice
        }, e.extend(z, {
            extend: e.extend,
            makeArray: function (a) {
                return o(a) || a.nodeType ? [a] : e.toArray(a)
            },
            inArray: A,
            isArray: e.isArray,
            each: D,
            trim: C,
            grep: E,
            find: c,
            expr: c.selectors,
            unique: c.uniqueSort,
            text: c.getText,
            contains: c.contains,
            filter: function (a, b, c) {
                var d = b.length;
                for (c && (a = ":not(" + a + ")"); d--;) 1 != b[d].nodeType && b.splice(d, 1);
                return b = 1 === b.length ? z.find.matchesSelector(b[0], a) ? [b[0]] : [] : z.find.matches(a, b)
            }
        });
        var G = function (a, b, c) {
                var d = [],
                    e = a[b];
                for ("string" != typeof c && c instanceof z && (c = c[0]); e && 9 !== e.nodeType;) {
                    if (void 0 !== c) {
                        if (e === c) break;
                        if ("string" == typeof c && z(e).is(c)) break
                    }
                    1 === e.nodeType && d.push(e), e = e[b]
                }
                return d
            },
            H = function (a, b, c, d) {
                var e = [];
                for (d instanceof z && (d = d[0]); a; a = a[b])
                    if (!c || a.nodeType === c) {
                        if (void 0 !== d) {
                            if (a === d) break;
                            if ("string" == typeof d && z(a).is(d)) break
                        }
                        e.push(a)
                    } return e
            },
            I = function (a, b, c) {
                for (a = a[b]; a; a = a[b])
                    if (a.nodeType == c) return a;
                return null
            };
        D({
            parent: function (a) {
                var b = a.parentNode;
                return b && 11 !== b.nodeType ? b : null
            },
            parents: function (a) {
                return G(a, "parentNode")
            },
            next: function (a) {
                return I(a, "nextSibling", 1)
            },
            prev: function (a) {
                return I(a, "previousSibling", 1)
            },
            children: function (a) {
                return H(a.firstChild, "nextSibling", 1)
            },
            contents: function (a) {
                return e.toArray(("iframe" === a.nodeName ? a.contentDocument || a.contentWindow.document : a).childNodes)
            }
        }, function (a, b) {
            z.fn[a] = function (c) {
                var d = this,
                    e = [];
                return d.each(function () {
                    var a = b.call(e, this, c, e);
                    a && (z.isArray(a) ? e.push.apply(e, a) : e.push(a))
                }), this.length > 1 && (l[a] || (e = z.unique(e)), 0 === a.indexOf("parents") && (e = e.reverse())), e = z(e), c ? e.filter(c) : e
            }
        }), D({
            parentsUntil: function (a, b) {
                return G(a, "parentNode", b)
            },
            nextUntil: function (a, b) {
                return H(a, "nextSibling", 1, b).slice(1)
            },
            prevUntil: function (a, b) {
                return H(a, "previousSibling", 1, b).slice(1)
            }
        }, function (a, b) {
            z.fn[a] = function (c, d) {
                var e = this,
                    f = [];
                return e.each(function () {
                    var a = b.call(f, this, c, f);
                    a && (z.isArray(a) ? f.push.apply(f, a) : f.push(a))
                }), this.length > 1 && (f = z.unique(f), 0 !== a.indexOf("parents") && "prevUntil" !== a || (f = f.reverse())), f = z(f), d ? f.filter(d) : f
            }
        }), z.fn.is = function (a) {
            return !!a && this.filter(a).length > 0
        }, z.fn.init.prototype = z.fn, z.overrideDefaults = function (a) {
            var b, c = function (d, e) {
                return b = b || a(), 0 === arguments.length && (d = b.element), e || (e = b.context), new c.fn.init(d, e)
            };
            return z.extend(c, this), c
        };
        var J = function (a, b, c) {
            D(c, function (c, d) {
                a[c] = a[c] || {}, a[c][b] = d
            })
        };
        return d.ie && d.ie < 8 && (J(x, "get", {
            maxlength: function (a) {
                var b = a.maxLength;
                return 2147483647 === b ? f : b
            },
            size: function (a) {
                var b = a.size;
                return 20 === b ? f : b
            },
            "class": function (a) {
                return a.className
            },
            style: function (a) {
                var b = a.style.cssText;
                return 0 === b.length ? f : b
            }
        }), J(x, "set", {
            "class": function (a, b) {
                a.className = b
            },
            style: function (a, b) {
                a.style.cssText = b
            }
        })), d.ie && d.ie < 9 && (w["float"] = "styleFloat", J(y, "set", {
            opacity: function (a, b) {
                var c = a.style;
                null === b || "" === b ? c.removeAttribute("filter") : (c.zoom = 1, c.filter = "alpha(opacity=" + 100 * b + ")")
            }
        })), z.attrHooks = x, z.cssHooks = y, z
    }), g("4z", [], function () {
        var a = function (a) {
            var b, c = !1;
            return function () {
                return c || (c = !0, b = a.apply(null, arguments)), b
            }
        };
        return {
            cached: a
        }
    }), h("74", Number), g("6q", ["1i", "74", "3b"], function (a, b, c) {
        var d = function (a, b) {
                for (var c = 0; c < a.length; c++) {
                    var d = a[c];
                    if (d.test(b)) return d
                }
            },
            e = function (a, c) {
                var e = d(a, c);
                if (!e) return {
                    major: 0,
                    minor: 0
                };
                var f = function (a) {
                    return b(c.replace(e, "$" + a))
                };
                return h(f(1), f(2))
            },
            f = function (a, b) {
                var d = c(b).toLowerCase();
                return 0 === a.length ? g() : e(a, d)
            },
            g = function () {
                return h(0, 0)
            },
            h = function (a, b) {
                return {
                    major: a,
                    minor: b
                }
            };
        return {
            nu: h,
            detect: f,
            unknown: g
        }
    }), g("66", ["1", "6q"], function (a, b) {
        var c = "Edge",
            d = "Chrome",
            e = "IE",
            f = "Opera",
            g = "Firefox",
            h = "Safari",
            i = function (a, b) {
                return function () {
                    return b === a
                }
            },
            j = function () {
                return k({
                    current: void 0,
                    version: b.unknown()
                })
            },
            k = function (a) {
                var b = a.current,
                    j = a.version;
                return {
                    current: b,
                    version: j,
                    isEdge: i(c, b),
                    isChrome: i(d, b),
                    isIE: i(e, b),
                    isOpera: i(f, b),
                    isFirefox: i(g, b),
                    isSafari: i(h, b)
                }
            };
        return {
            unknown: j,
            nu: k,
            edge: a.constant(c),
            chrome: a.constant(d),
            ie: a.constant(e),
            opera: a.constant(f),
            firefox: a.constant(g),
            safari: a.constant(h)
        }
    }), g("67", ["1", "6q"], function (a, b) {
        var c = "Windows",
            d = "iOS",
            e = "Android",
            f = "Linux",
            g = "OSX",
            h = "Solaris",
            i = "FreeBSD",
            j = function (a, b) {
                return function () {
                    return b === a
                }
            },
            k = function () {
                return l({
                    current: void 0,
                    version: b.unknown()
                })
            },
            l = function (a) {
                var b = a.current,
                    k = a.version;
                return {
                    current: b,
                    version: k,
                    isWindows: j(c, b),
                    isiOS: j(d, b),
                    isAndroid: j(e, b),
                    isOSX: j(g, b),
                    isLinux: j(f, b),
                    isSolaris: j(h, b),
                    isFreeBSD: j(i, b)
                }
            };
        return {
            unknown: k,
            nu: l,
            windows: a.constant(c),
            ios: a.constant(d),
            android: a.constant(e),
            linux: a.constant(f),
            osx: a.constant(g),
            solaris: a.constant(h),
            freebsd: a.constant(i)
        }
    }), g("68", ["1"], function (a) {
        return function (b, c, d) {
            var e = b.isiOS() && /ipad/i.test(d) === !0,
                f = b.isiOS() && !e,
                g = b.isAndroid() && 3 === b.version.major,
                h = b.isAndroid() && 4 === b.version.major,
                i = e || g || h && /mobile/i.test(d) === !0,
                j = b.isiOS() || b.isAndroid(),
                k = j && !i,
                l = c.isSafari() && b.isiOS() && /safari/i.test(d) === !1;
            return {
                isiPad: a.constant(e),
                isiPhone: a.constant(f),
                isTablet: a.constant(i),
                isPhone: a.constant(k),
                isTouch: a.constant(j),
                isAndroid: b.isAndroid,
                isiOS: b.isiOS,
                isWebView: a.constant(l)
            }
        }
    }), g("69", ["1i", "6q", "3b"], function (a, b, c) {
        var d = function (b, d) {
                var e = c(d).toLowerCase();
                return a.find(b, function (a) {
                    return a.search(e)
                })
            },
            e = function (a, c) {
                return d(a, c).map(function (a) {
                    var d = b.detect(a.versionRegexes, c);
                    return {
                        current: a.name,
                        version: d
                    }
                })
            },
            f = function (a, c) {
                return d(a, c).map(function (a) {
                    var d = b.detect(a.versionRegexes, c);
                    return {
                        current: a.name,
                        version: d
                    }
                })
            };
        return {
            detectBrowser: e,
            detectOs: f
        }
    }), g("53", [], function () {
        var a = function (a, b) {
                return b + a
            },
            b = function (a, b) {
                return a + b
            },
            c = function (a, b) {
                return a.substring(b)
            },
            d = function (a, b) {
                return a.substring(0, a.length - b)
            };
        return {
            addToStart: a,
            addToEnd: b,
            removeFromStart: c,
            removeFromEnd: d
        }
    }), g("54", ["2n", "5"], function (a, b) {
        var c = function (a, b) {
                return a.substr(0, b)
            },
            d = function (a, b) {
                return a.substr(a.length - b, a.length)
            },
            e = function (b) {
                return "" === b ? a.none() : a.some(b.substr(0, 1))
            },
            f = function (b) {
                return "" === b ? a.none() : a.some(b.substring(1))
            };
        return {
            first: c,
            last: d,
            head: e,
            tail: f
        }
    }), g("4h", ["53", "54", "5"], function (a, b, c) {
        var d = function (a, b, c) {
                if ("" === b) return !0;
                if (a.length < b.length) return !1;
                var d = a.substr(c, c + b.length);
                return d === b
            },
            e = function (a, b) {
                var c = function (a) {
                    var b = typeof a;
                    return "string" === b || "number" === b
                };
                return a.replace(/\${([^{}]*)}/g, function (a, d) {
                    var e = b[d];
                    return c(e) ? e : a
                })
            },
            f = function (b, c) {
                return l(b, c) ? a.removeFromStart(b, c.length) : b
            },
            g = function (b, c) {
                return m(b, c) ? a.removeFromEnd(b, c.length) : b
            },
            h = function (b, c) {
                return l(b, c) ? b : a.addToStart(b, c)
            },
            i = function (b, c) {
                return m(b, c) ? b : a.addToEnd(b, c)
            },
            j = function (a, b) {
                return a.indexOf(b) !== -1
            },
            k = function (a) {
                return b.head(a).bind(function (c) {
                    return b.tail(a).map(function (a) {
                        return c.toUpperCase() + a
                    })
                }).getOr(a)
            },
            l = function (a, b) {
                return d(a, b, 0)
            },
            m = function (a, b) {
                return d(a, b, a.length - b.length)
            },
            n = function (a) {
                return a.replace(/^\s+|\s+$/g, "")
            },
            o = function (a) {
                return a.replace(/^\s+/g, "")
            },
            p = function (a) {
                return a.replace(/\s+$/g, "")
            };
        return {
            supplant: e,
            startsWith: l,
            removeLeading: f,
            removeTrailing: g,
            ensureLeading: h,
            ensureTrailing: i,
            endsWith: m,
            contains: j,
            trim: n,
            lTrim: o,
            rTrim: p,
            capitalize: k
        }
    }), g("6a", ["1", "4h"], function (a, b) {
        var c = /.*?version\/\ ?([0-9]+)\.([0-9]+).*/,
            d = function (a) {
                return function (c) {
                    return b.contains(c, a)
                }
            },
            e = [{
                name: "Edge",
                versionRegexes: [/.*?edge\/ ?([0-9]+)\.([0-9]+)$/],
                search: function (a) {
                    var c = b.contains(a, "edge/") && b.contains(a, "chrome") && b.contains(a, "safari") && b.contains(a, "applewebkit");
                    return c
                }
            }, {
                name: "Chrome",
                versionRegexes: [/.*?chrome\/([0-9]+)\.([0-9]+).*/, c],
                search: function (a) {
                    return b.contains(a, "chrome") && !b.contains(a, "chromeframe")
                }
            }, {
                name: "IE",
                versionRegexes: [/.*?msie\ ?([0-9]+)\.([0-9]+).*/, /.*?rv:([0-9]+)\.([0-9]+).*/],
                search: function (a) {
                    return b.contains(a, "msie") || b.contains(a, "trident")
                }
            }, {
                name: "Opera",
                versionRegexes: [c, /.*?opera\/([0-9]+)\.([0-9]+).*/],
                search: d("opera")
            }, {
                name: "Firefox",
                versionRegexes: [/.*?firefox\/\ ?([0-9]+)\.([0-9]+).*/],
                search: d("firefox")
            }, {
                name: "Safari",
                versionRegexes: [c, /.*?cpu os ([0-9]+)_([0-9]+).*/],
                search: function (a) {
                    return (b.contains(a, "safari") || b.contains(a, "mobile/")) && b.contains(a, "applewebkit")
                }
            }],
            f = [{
                name: "Windows",
                search: d("win"),
                versionRegexes: [/.*?windows\ nt\ ?([0-9]+)\.([0-9]+).*/]
            }, {
                name: "iOS",
                search: function (a) {
                    return b.contains(a, "iphone") || b.contains(a, "ipad")
                },
                versionRegexes: [/.*?version\/\ ?([0-9]+)\.([0-9]+).*/, /.*cpu os ([0-9]+)_([0-9]+).*/, /.*cpu iphone os ([0-9]+)_([0-9]+).*/]
            }, {
                name: "Android",
                search: d("android"),
                versionRegexes: [/.*?android\ ?([0-9]+)\.([0-9]+).*/]
            }, {
                name: "OSX",
                search: d("os x"),
                versionRegexes: [/.*?os\ x\ ?([0-9]+)_([0-9]+).*/]
            }, {
                name: "Linux",
                search: d("linux"),
                versionRegexes: []
            }, {
                name: "Solaris",
                search: d("sunos"),
                versionRegexes: []
            }, {
                name: "FreeBSD",
                search: d("freebsd"),
                versionRegexes: []
            }];
        return {
            browsers: a.constant(e),
            oses: a.constant(f)
        }
    }), g("50", ["66", "67", "68", "69", "6a"], function (a, b, c, d, e) {
        var f = function (f) {
            var g = e.browsers(),
                h = e.oses(),
                i = d.detectBrowser(g, f).fold(a.unknown, a.nu),
                j = d.detectOs(h, f).fold(b.unknown, b.nu),
                k = c(j, i, f);
            return {
                browser: i,
                os: j,
                deviceType: k
            }
        };
        return {
            detect: f
        }
    }), g("3d", ["4z", "50", "1m"], function (a, b, c) {
        var d = a.cached(function () {
            var a = c.userAgent;
            return b.detect(a)
        });
        return {
            detect: d
        }
    }), g("3e", [], function () {
        return "undefined" == typeof console && (console = {
            log: function () {}
        }), console
    }), g("1v", ["1", "2n", "5", "3e", "1j"], function (a, b, c, d, e) {
        var f = function (a, b) {
                var c = b || e,
                    f = c.createElement("div");
                if (f.innerHTML = a, !f.hasChildNodes() || f.childNodes.length > 1) throw d.error("HTML does not have a single root node", a), "HTML must have a single root node";
                return i(f.childNodes[0])
            },
            g = function (a, b) {
                var c = b || e,
                    d = c.createElement(a);
                return i(d)
            },
            h = function (a, b) {
                var c = b || e,
                    d = c.createTextNode(a);
                return i(d)
            },
            i = function (b) {
                if (null === b || void 0 === b) throw new c("Node cannot be null or undefined");
                return {
                    dom: a.constant(b)
                }
            },
            j = function (a, c, d) {
                return b.from(a.dom().elementFromPoint(c, d)).map(i)
            };
        return {
            fromHtml: f,
            fromTag: g,
            fromText: h,
            fromDom: i,
            fromPoint: j
        }
    }), g("4d", [], function () {
        return {
            ATTRIBUTE: 2,
            CDATA_SECTION: 4,
            COMMENT: 8,
            DOCUMENT: 9,
            DOCUMENT_TYPE: 10,
            DOCUMENT_FRAGMENT: 11,
            ELEMENT: 1,
            TEXT: 3,
            PROCESSING_INSTRUCTION: 7,
            ENTITY_REFERENCE: 5,
            ENTITY: 6,
            NOTATION: 12
        }
    }), g("3f", ["4d"], function (a) {
        var b = function (a) {
                var b = a.dom().nodeName;
                return b.toLowerCase()
            },
            c = function (a) {
                return a.dom().nodeType
            },
            d = function (a) {
                return a.dom().nodeValue
            },
            e = function (a) {
                return function (b) {
                    return c(b) === a
                }
            },
            f = function (d) {
                return c(d) === a.COMMENT || "#comment" === b(d)
            },
            g = e(a.ELEMENT),
            h = e(a.TEXT),
            i = e(a.DOCUMENT);
        return {
            name: b,
            type: c,
            value: d,
            isElement: g,
            isText: h,
            isDocument: i,
            isComment: f
        }
    }), g("28", ["4", "3b"], function (a, b) {
        var c = function (c) {
                if (null === c) return "null";
                var d = typeof c;
                return "object" === d && a.prototype.isPrototypeOf(c) ? "array" : "object" === d && b.prototype.isPrototypeOf(c) ? "string" : d
            },
            d = function (a) {
                return function (b) {
                    return c(b) === a
                }
            };
        return {
            isString: d("string"),
            isObject: d("object"),
            isArray: d("array"),
            isNull: d("null"),
            isBoolean: d("boolean"),
            isUndefined: d("undefined"),
            isFunction: d("function"),
            isNumber: d("number")
        }
    }), g("4g", ["2n", "3a"], function (a, b) {
        var c = function () {
                var a = b.keys,
                    c = function (a) {
                        var b = [];
                        for (var c in a) a.hasOwnProperty(c) && b.push(c);
                        return b
                    };
                return void 0 === a ? c : a
            }(),
            d = function (a, b) {
                for (var d = c(a), e = 0, f = d.length; e < f; e++) {
                    var g = d[e],
                        h = a[g];
                    b(h, g, a)
                }
            },
            e = function (a, b) {
                return f(a, function (a, c, d) {
                    return {
                        k: c,
                        v: b(a, c, d)
                    }
                })
            },
            f = function (a, b) {
                var c = {};
                return d(a, function (d, e) {
                    var f = b(d, e, a);
                    c[f.k] = f.v
                }), c
            },
            g = function (a, b) {
                var c = {},
                    e = {};
                return d(a, function (a, d) {
                    var f = b(a, d) ? c : e;
                    f[d] = a
                }), {
                    t: c,
                    f: e
                }
            },
            h = function (a, b) {
                var c = [];
                return d(a, function (a, d) {
                    c.push(b(a, d))
                }), c
            },
            i = function (b, d) {
                for (var e = c(b), f = 0, g = e.length; f < g; f++) {
                    var h = e[f],
                        i = b[h];
                    if (d(i, h, b)) return a.some(i)
                }
                return a.none()
            },
            j = function (a) {
                return h(a, function (a) {
                    return a
                })
            },
            k = function (a) {
                return j(a).length
            };
        return {
            bifilter: g,
            each: d,
            map: e,
            mapToArray: h,
            tupleMap: f,
            find: i,
            keys: c,
            values: j,
            size: k
        }
    }), g("48", ["28", "1i", "4g", "3f", "5", "3e"], function (a, b, c, d, e, f) {
        var g = function (b, c, d) {
                if (!(a.isString(d) || a.isBoolean(d) || a.isNumber(d))) throw f.error("Invalid call to Attr.set. Key ", c, ":: Value ", d, ":: Element ", b), new e("Attribute value was not simple");
                b.setAttribute(c, d + "")
            },
            h = function (a, b, c) {
                g(a.dom(), b, c)
            },
            i = function (a, b) {
                var d = a.dom();
                c.each(b, function (a, b) {
                    g(d, b, a)
                })
            },
            j = function (a, b) {
                var c = a.dom().getAttribute(b);
                return null === c ? void 0 : c
            },
            k = function (a, b) {
                var c = a.dom();
                return !(!c || !c.hasAttribute) && c.hasAttribute(b)
            },
            l = function (a, b) {
                a.dom().removeAttribute(b)
            },
            m = function (a) {
                var b = a.dom().attributes;
                return void 0 === b || null === b || 0 === b.length
            },
            n = function (a) {
                return b.foldl(a.dom().attributes, function (a, b) {
                    return a[b.name] = b.value, a
                }, {})
            },
            o = function (a, b, c) {
                k(a, c) && !k(b, c) && h(b, c, j(a, c))
            },
            p = function (a, c, e) {
                d.isElement(a) && d.isElement(c) && b.each(e, function (b) {
                    o(a, c, b)
                })
            };
        return {
            clone: n,
            set: h,
            setAll: i,
            get: j,
            has: k,
            remove: l,
            hasNone: m,
            transfer: p
        }
    }), g("51", ["4z", "1v", "3f", "1j"], function (a, b, c, d) {
        var e = function (a) {
                var b = c.isText(a) ? a.dom().parentNode : a.dom();
                return void 0 !== b && null !== b && b.ownerDocument.body.contains(b)
            },
            f = a.cached(function () {
                return g(b.fromDom(d))
            }),
            g = function (a) {
                var c = a.dom().body;
                if (null === c || void 0 === c) throw "Body is not available yet";
                return b.fromDom(c)
            };
        return {
            body: f,
            getBody: g,
            inBody: e
        }
    }), g("52", [], function () {
        var a = function (a) {
            return void 0 !== a.style
        };
        return {
            isSupported: a
        }
    }), g("3g", ["28", "1i", "4g", "2n", "48", "51", "1v", "3f", "52", "4h", "5", "3e", "2"], function (a, b, c, d, e, f, g, h, i, j, k, l, m) {
        var n = function (b, c, d) {
                if (!a.isString(d)) throw l.error("Invalid call to CSS.set. Property ", c, ":: Value ", d, ":: Element ", b), new k("CSS value must be a string: " + d);
                i.isSupported(b) && b.style.setProperty(c, d)
            },
            o = function (a, b) {
                i.isSupported(a) && a.style.removeProperty(b)
            },
            p = function (a, b, c) {
                var d = a.dom();
                n(d, b, c)
            },
            q = function (a, b) {
                var d = a.dom();
                c.each(b, function (a, b) {
                    n(d, b, a)
                })
            },
            r = function (a, b) {
                var d = a.dom();
                c.each(b, function (a, b) {
                    a.fold(function () {
                        o(d, b)
                    }, function (a) {
                        n(d, b, a)
                    })
                })
            },
            s = function (a, b) {
                var c = a.dom(),
                    d = m.getComputedStyle(c),
                    e = d.getPropertyValue(b),
                    g = "" !== e || f.inBody(a) ? e : t(c, b);
                return null === g ? void 0 : g
            },
            t = function (a, b) {
                return i.isSupported(a) ? a.style.getPropertyValue(b) : ""
            },
            u = function (a, b) {
                var c = a.dom(),
                    e = t(c, b);
                return d.from(e).filter(function (a) {
                    return a.length > 0
                })
            },
            v = function (a) {
                var b = {},
                    c = a.dom();
                if (i.isSupported(c))
                    for (var d = 0; d < c.style.length; d++) {
                        var e = c.style.item(d);
                        b[e] = c.style[e]
                    }
                return b
            },
            w = function (a, b, c) {
                var d = g.fromTag(a);
                p(d, b, c);
                var e = u(d, b);
                return e.isSome()
            },
            x = function (a, b) {
                var c = a.dom();
                o(c, b), e.has(a, "style") && "" === j.trim(e.get(a, "style")) && e.remove(a, "style")
            },
            y = function (a, b) {
                var c = e.get(a, "style"),
                    d = b(a),
                    f = void 0 === c ? e.remove : e.set;
                return f(a, "style", c), d
            },
            z = function (a, b) {
                var c = a.dom(),
                    d = b.dom();
                i.isSupported(c) && i.isSupported(d) && (d.style.cssText = c.style.cssText)
            },
            A = function (a) {
                return a.dom().offsetWidth
            },
            B = function (a, b, c) {
                u(a, c).each(function (a) {
                    u(b, c).isNone() && p(b, c, a)
                })
            },
            C = function (a, c, d) {
                h.isElement(a) && h.isElement(c) && b.each(d, function (b) {
                    B(a, c, b)
                })
            };
        return {
            copy: z,
            set: p,
            preserve: y,
            setAll: q,
            setOptions: r,
            remove: x,
            get: s,
            getRaw: u,
            getAllRaw: v,
            isValidValue: w,
            reflow: A,
            transfer: C
        }
    }), g("55", ["1i", "1", "4", "5"], function (a, b, c, d) {
        return function () {
            var e = arguments;
            return function () {
                for (var f = new c(arguments.length), g = 0; g < f.length; g++) f[g] = arguments[g];
                if (e.length !== f.length) throw new d('Wrong number of arguments to struct. Expected "[' + e.length + ']", got ' + f.length + " arguments");
                var h = {};
                return a.each(e, function (a, c) {
                    h[a] = b.constant(f[c])
                }), h
            }
        }
    }), g("6b", ["1i", "28", "5"], function (a, b, c) {
        var d = function (a) {
                return a.slice(0).sort()
            },
            e = function (a, b) {
                throw new c("All required keys (" + d(a).join(", ") + ") were not specified. Specified keys were: " + d(b).join(", ") + ".")
            },
            f = function (a) {
                throw new c("Unsupported keys for object: " + d(a).join(", "))
            },
            g = function (d, e) {
                if (!b.isArray(e)) throw new c("The " + d + " fields must be an array. Was: " + e + ".");
                a.each(e, function (a) {
                    if (!b.isString(a)) throw new c("The value " + a + " in the " + d + " fields was not a string.")
                })
            },
            h = function (a, b) {
                throw new c("All values need to be of type: " + b + ". Keys (" + d(a).join(", ") + ") were not.")
            },
            i = function (b) {
                var e = d(b),
                    f = a.find(e, function (a, b) {
                        return b < e.length - 1 && a === e[b + 1]
                    });
                f.each(function (a) {
                    throw new c("The field: " + a + " occurs more than once in the combined fields: [" + e.join(", ") + "].")
                })
            };
        return {
            sort: d,
            reqMessage: e,
            unsuppMessage: f,
            validateStrArr: g,
            invalidTypeMessage: h,
            checkDupes: i
        }
    }), g("56", ["1i", "1", "4g", "2n", "6b", "5", "3a"], function (a, b, c, d, e, f, g) {
        return function (h, i) {
            var j = h.concat(i);
            if (0 === j.length) throw new f("You must specify at least one required or optional field.");
            return e.validateStrArr("required", h), e.validateStrArr("optional", i), e.checkDupes(j),
                function (f) {
                    var k = c.keys(f),
                        l = a.forall(h, function (b) {
                            return a.contains(k, b)
                        });
                    l || e.reqMessage(h, k);
                    var m = a.filter(k, function (b) {
                        return !a.contains(j, b)
                    });
                    m.length > 0 && e.unsuppMessage(m);
                    var n = {};
                    return a.each(h, function (a) {
                        n[a] = b.constant(f[a])
                    }), a.each(i, function (a) {
                        n[a] = b.constant(g.prototype.hasOwnProperty.call(f, a) ? d.some(f[a]) : d.none())
                    }), n
                }
        }
    }), g("45", ["55", "56"], function (a, b) {
        return {
            immutable: a,
            immutableBag: b
        }
    }), g("57", [], function () {
        var a = function (a, b) {
            var c = [],
                d = function (a) {
                    return c.push(a), b(a)
                },
                e = b(a);
            do e = e.bind(d); while (e.isSome());
            return c
        };
        return {
            toArray: a
        }
    }), g("4c", ["3c"], function (a) {
        var b = function () {
                var b = a.getOrDie("Node");
                return b
            },
            c = function (a, b, c) {
                return 0 !== (a.compareDocumentPosition(b) & c)
            },
            d = function (a, d) {
                return c(a, d, b().DOCUMENT_POSITION_PRECEDING)
            },
            e = function (a, d) {
                return c(a, d, b().DOCUMENT_POSITION_CONTAINED_BY)
            };
        return {
            documentPositionPreceding: d,
            documentPositionContainedBy: e
        }
    }), g("2z", ["1i", "2n", "1v", "4d", "5", "1j"], function (a, b, c, d, e, f) {
        var g = d.ELEMENT,
            h = d.DOCUMENT,
            i = function (a, b) {
                var c = a.dom();
                if (c.nodeType !== g) return !1;
                if (void 0 !== c.matches) return c.matches(b);
                if (void 0 !== c.msMatchesSelector) return c.msMatchesSelector(b);
                if (void 0 !== c.webkitMatchesSelector) return c.webkitMatchesSelector(b);
                if (void 0 !== c.mozMatchesSelector) return c.mozMatchesSelector(b);
                throw new e("Browser lacks native selectors")
            },
            j = function (a) {
                return a.nodeType !== g && a.nodeType !== h || 0 === a.childElementCount
            },
            k = function (b, d) {
                var e = void 0 === d ? f : d.dom();
                return j(e) ? [] : a.map(e.querySelectorAll(b), c.fromDom)
            },
            l = function (a, d) {
                var e = void 0 === d ? f : d.dom();
                return j(e) ? b.none() : b.from(e.querySelector(a)).map(c.fromDom)
            };
        return {
            all: k,
            is: i,
            one: l
        }
    }), g("31", ["1i", "1", "4c", "3d", "2z"], function (a, b, c, d, e) {
        var f = function (a, b) {
                return a.dom() === b.dom()
            },
            g = function (a, b) {
                return a.dom().isEqualNode(b.dom())
            },
            h = function (c, d) {
                return a.exists(d, b.curry(f, c))
            },
            i = function (a, b) {
                var c = a.dom(),
                    d = b.dom();
                return c !== d && c.contains(d)
            },
            j = function (a, b) {
                return c.documentPositionContainedBy(a.dom(), b.dom())
            },
            k = d.detect().browser,
            l = k.isIE() ? j : i;
        return {
            eq: f,
            isEqualNode: g,
            member: h,
            contains: l,
            is: e.is
        }
    }), g("3h", ["28", "1i", "1", "2n", "45", "57", "31", "1v"], function (a, b, c, d, e, f, g, h) {
        var i = function (a) {
                return h.fromDom(a.dom().ownerDocument)
            },
            j = function (a) {
                var b = i(a);
                return h.fromDom(b.dom().documentElement)
            },
            k = function (a) {
                var b = a.dom(),
                    c = b.ownerDocument.defaultView;
                return h.fromDom(c)
            },
            l = function (a) {
                var b = a.dom();
                return d.from(b.parentNode).map(h.fromDom)
            },
            m = function (a) {
                return l(a).bind(function (c) {
                    var d = u(c);
                    return b.findIndex(d, function (b) {
                        return g.eq(a, b)
                    })
                })
            },
            n = function (b, d) {
                for (var e = a.isFunction(d) ? d : c.constant(!1), f = b.dom(), g = []; null !== f.parentNode && void 0 !== f.parentNode;) {
                    var i = f.parentNode,
                        j = h.fromDom(i);
                    if (g.push(j), e(j) === !0) break;
                    f = i
                }
                return g
            },
            o = function (a) {
                var c = function (c) {
                    return b.filter(c, function (b) {
                        return !g.eq(a, b)
                    })
                };
                return l(a).map(u).map(c).getOr([])
            },
            p = function (a) {
                var b = a.dom();
                return d.from(b.offsetParent).map(h.fromDom)
            },
            q = function (a) {
                var b = a.dom();
                return d.from(b.previousSibling).map(h.fromDom)
            },
            r = function (a) {
                var b = a.dom();
                return d.from(b.nextSibling).map(h.fromDom)
            },
            s = function (a) {
                return b.reverse(f.toArray(a, q))
            },
            t = function (a) {
                return f.toArray(a, r)
            },
            u = function (a) {
                var c = a.dom();
                return b.map(c.childNodes, h.fromDom)
            },
            v = function (a, b) {
                var c = a.dom().childNodes;
                return d.from(c[b]).map(h.fromDom)
            },
            w = function (a) {
                return v(a, 0)
            },
            x = function (a) {
                return v(a, a.dom().childNodes.length - 1)
            },
            y = function (a) {
                return a.dom().childNodes.length
            },
            z = function (a) {
                return a.dom().hasChildNodes()
            },
            A = e.immutable("element", "offset"),
            B = function (a, b) {
                var c = u(a);
                return c.length > 0 && b < c.length ? A(c[b], 0) : A(a, b)
            };
        return {
            owner: i,
            defaultView: k,
            documentElement: j,
            parent: l,
            findIndex: m,
            parents: n,
            siblings: o,
            prevSibling: q,
            offsetParent: p,
            prevSiblings: s,
            nextSibling: r,
            nextSiblings: t,
            children: u,
            child: v,
            firstChild: w,
            lastChild: x,
            childNodesCount: y,
            hasChildNodes: z,
            leaf: B
        }
    }), g("1s", ["1i", "3d", "1v", "3f", "3g", "3h"], function (a, b, c, d, e, f) {
        var g = b.detect().browser,
            h = function (b) {
                return a.find(b, d.isElement)
            },
            i = function (a) {
                return g.isFirefox() && "table" === d.name(a) ? h(f.children(a)).filter(function (a) {
                    return "caption" === d.name(a)
                }).bind(function (a) {
                    return h(f.nextSiblings(a)).map(function (b) {
                        var c = b.dom().offsetTop,
                            d = a.dom().offsetTop,
                            e = a.dom().offsetHeight;
                        return c <= d ? -e : 0
                    })
                }).getOr(0) : 0
            },
            j = function (a, b, d) {
                var f, g, h = 0,
                    j = 0,
                    k = a.ownerDocument;
                if (d = d ? d : a, b) {
                    if (d === a && b.getBoundingClientRect && "static" === e.get(c.fromDom(a), "position")) return g = b.getBoundingClientRect(), h = g.left + (k.documentElement.scrollLeft || a.scrollLeft) - k.documentElement.clientLeft, j = g.top + (k.documentElement.scrollTop || a.scrollTop) - k.documentElement.clientTop, {
                        x: h,
                        y: j
                    };
                    for (f = b; f && f !== d && f.nodeType;) h += f.offsetLeft || 0, j += f.offsetTop || 0, f = f.offsetParent;
                    for (f = b.parentNode; f && f !== d && f.nodeType;) h -= f.scrollLeft || 0, j -= f.scrollTop || 0, f = f.parentNode;
                    j += i(c.fromDom(b))
                }
                return {
                    x: h,
                    y: j
                }
            };
        return {
            getPos: j
        }
    }), g("58", ["1i", "2n", "1q"], function (a, b, c) {
        var d = function (e) {
                var f = b.none(),
                    g = [],
                    h = function (a) {
                        return d(function (b) {
                            i(function (c) {
                                b(a(c))
                            })
                        })
                    },
                    i = function (a) {
                        k() ? m(a) : g.push(a)
                    },
                    j = function (a) {
                        f = b.some(a), l(g), g = []
                    },
                    k = function () {
                        return f.isSome()
                    },
                    l = function (b) {
                        a.each(b, m)
                    },
                    m = function (a) {
                        f.each(function (b) {
                            c(function () {
                                a(b)
                            }, 0)
                        })
                    };
                return e(j), {
                    get: i,
                    map: h,
                    isReady: k
                }
            },
            e = function (a) {
                return d(function (b) {
                    b(a)
                })
            };
        return {
            nu: d,
            pure: e
        }
    }), g("59", ["4", "1q"], function (a, b) {
        var c = function (c) {
            return function () {
                var d = a.prototype.slice.call(arguments),
                    e = this;
                b(function () {
                    c.apply(e, d)
                }, 0)
            }
        };
        return {
            bounce: c
        }
    }), g("3i", ["58", "59"], function (a, b) {
        var c = function (d) {
                var e = function (a) {
                        d(b.bounce(a))
                    },
                    f = function (a) {
                        return c(function (b) {
                            e(function (c) {
                                var d = a(c);
                                b(d)
                            })
                        })
                    },
                    g = function (a) {
                        return c(function (b) {
                            e(function (c) {
                                a(c).get(b)
                            })
                        })
                    },
                    h = function (a) {
                        return c(function (b) {
                            e(function (c) {
                                a.get(b)
                            })
                        })
                    },
                    i = function () {
                        return a.nu(e)
                    };
                return {
                    map: f,
                    bind: g,
                    anonBind: h,
                    toLazy: i,
                    get: e
                }
            },
            d = function (a) {
                return c(function (b) {
                    b(a)
                })
            };
        return {
            nu: c,
            pure: d
        }
    }), g("5a", ["1i"], function (a) {
        var b = function (b, c) {
            return c(function (c) {
                var d = [],
                    e = 0,
                    f = function (a) {
                        return function (f) {
                            d[a] = f, e++, e >= b.length && c(d)
                        }
                    };
                0 === b.length ? c([]) : a.each(b, function (a, b) {
                    a.get(f(b))
                })
            })
        };
        return {
            par: b
        }
    }), g("3j", ["1i", "3i", "5a"], function (a, b, c) {
        var d = function (a) {
                return c.par(a, b.nu)
            },
            e = function (b, c) {
                var e = a.map(b, c);
                return d(e)
            },
            f = function (a, b) {
                return function (c) {
                    return b(c).bind(a)
                }
            };
        return {
            par: d,
            mapM: e,
            compose: f
        }
    }), g("3k", ["1", "2n"], function (a, b) {
        var c = function (d) {
                var e = function (a) {
                        return d === a
                    },
                    f = function (a) {
                        return c(d)
                    },
                    g = function (a) {
                        return c(d)
                    },
                    h = function (a) {
                        return c(a(d))
                    },
                    i = function (a) {
                        a(d)
                    },
                    j = function (a) {
                        return a(d)
                    },
                    k = function (a, b) {
                        return b(d)
                    },
                    l = function (a) {
                        return a(d)
                    },
                    m = function (a) {
                        return a(d)
                    },
                    n = function () {
                        return b.some(d)
                    };
                return {
                    is: e,
                    isValue: a.constant(!0),
                    isError: a.constant(!1),
                    getOr: a.constant(d),
                    getOrThunk: a.constant(d),
                    getOrDie: a.constant(d),
                    or: f,
                    orThunk: g,
                    fold: k,
                    map: h,
                    each: i,
                    bind: j,
                    exists: l,
                    forall: m,
                    toOption: n
                }
            },
            d = function (c) {
                var e = function (a) {
                        return a()
                    },
                    f = function () {
                        return a.die(c)()
                    },
                    g = function (a) {
                        return a
                    },
                    h = function (a) {
                        return a()
                    },
                    i = function (a) {
                        return d(c)
                    },
                    j = function (a) {
                        return d(c)
                    },
                    k = function (a, b) {
                        return a(c)
                    };
                return {
                    is: a.constant(!1),
                    isValue: a.constant(!1),
                    isError: a.constant(!0),
                    getOr: a.identity,
                    getOrThunk: e,
                    getOrDie: f,
                    or: g,
                    orThunk: h,
                    fold: k,
                    map: i,
                    each: a.noop,
                    bind: j,
                    exists: a.constant(!1),
                    forall: a.constant(!0),
                    toOption: b.none
                }
            };
        return {
            value: c,
            error: d
        }
    }), g("1t", ["1i", "1", "3i", "3j", "3k", "1m", "15", "1e"], function (a, b, c, d, e, f, g, h) {
        "use strict";
        return function (i, j) {
            var k, l = 0,
                m = {};
            j = j || {}, k = j.maxLoadTime || 5e3;
            var n = function (a) {
                    i.getElementsByTagName("head")[0].appendChild(a)
                },
                o = function (a, b, c) {
                    var d, e, j, o, p = function () {
                            for (var a = o.passed, b = a.length; b--;) a[b]();
                            o.status = 2, o.passed = [], o.failed = []
                        },
                        q = function () {
                            for (var a = o.failed, b = a.length; b--;) a[b]();
                            o.status = 3, o.passed = [], o.failed = []
                        },
                        r = function () {
                            var a = f.userAgent.match(/WebKit\/(\d*)/);
                            return !!(a && a[1] < 536)
                        },
                        s = function (a, b) {
                            a() || ((new Date).getTime() - j < k ? g.setTimeout(b) : q())
                        },
                        t = function () {
                            s(function () {
                                for (var a, b, c = i.styleSheets, e = c.length; e--;)
                                    if (a = c[e], b = a.ownerNode ? a.ownerNode : a.owningElement, b && b.id === d.id) return p(), !0
                            }, t)
                        },
                        u = function () {
                            s(function () {
                                try {
                                    var a = e.sheet.cssRules;
                                    return p(), !!a
                                } catch (a) {}
                            }, u)
                        };
                    if (a = h._addCacheSuffix(a), m[a] ? o = m[a] : (o = {
                            passed: [],
                            failed: []
                        }, m[a] = o), b && o.passed.push(b), c && o.failed.push(c), 1 != o.status) {
                        if (2 == o.status) return void p();
                        if (3 == o.status) return void q();
                        if (o.status = 1, d = i.createElement("link"), d.rel = "stylesheet", d.type = "text/css", d.id = "u" + l++, d.async = !1, d.defer = !1, j = (new Date).getTime(), "onload" in d && !r()) d.onload = t, d.onerror = q;
                        else {
                            if (f.userAgent.indexOf("Firefox") > 0) return e = i.createElement("style"), e.textContent = '@import "' + a + '"', u(), void n(e);
                            t()
                        }
                        n(d), d.href = a
                    }
                },
                p = function (a) {
                    return c.nu(function (c) {
                        o(a, b.compose(c, b.constant(e.value(a))), b.compose(c, b.constant(e.error(a))))
                    })
                },
                q = function (a) {
                    return a.fold(b.identity, b.identity)
                },
                r = function (b, c, e) {
                    d.par(a.map(b, p)).get(function (b) {
                        var d = a.partition(b, function (a) {
                            return a.isValue()
                        });
                        d.fail.length > 0 ? e(d.fail.map(q)) : c(d.pass.map(q))
                    })
                };
            return {
                load: o,
                loadAll: r
            }
        }
    }), g("s", [], function () {
        return function (a, b) {
            var c = a,
                d = function (a, c, d, e) {
                    var f, g;
                    if (a) {
                        if (!e && a[c]) return a[c];
                        if (a != b) {
                            if (f = a[d]) return f;
                            for (g = a.parentNode; g && g != b; g = g.parentNode)
                                if (f = g[d]) return f
                        }
                    }
                },
                e = function (a, c, d, e) {
                    var f, g, h;
                    if (a) {
                        if (f = a[d], b && f === b) return;
                        if (f) {
                            if (!e)
                                for (h = f[c]; h; h = h[c])
                                    if (!h[c]) return h;
                            return f
                        }
                        if (g = a.parentNode, g && g !== b) return g
                    }
                };
            this.current = function () {
                return c
            }, this.next = function (a) {
                return c = d(c, "firstChild", "nextSibling", a)
            }, this.prev = function (a) {
                return c = d(c, "lastChild", "previousSibling", a)
            }, this.prev2 = function (a) {
                return c = e(c, "lastChild", "previousSibling", a)
            }
        }
    }), g("3l", ["1i", "1", "3f"], function (a, b, c) {
        var d = ["article", "aside", "details", "div", "dt", "figcaption", "footer", "form", "fieldset", "header", "hgroup", "html", "main", "nav", "section", "summary", "body", "p", "dl", "multicol", "dd", "figure", "address", "center", "blockquote", "h1", "h2", "h3", "h4", "h5", "h6", "listing", "xmp", "pre", "plaintext", "menu", "dir", "ul", "ol", "li", "hr", "table", "tbody", "thead", "tfoot", "th", "tr", "td", "caption"],
            e = ["area", "base", "basefont", "br", "col", "frame", "hr", "img", "input", "isindex", "link", "meta", "param", "embed", "source", "wbr", "track"],
            f = ["td", "th"],
            g = ["thead", "tbody", "tfoot"],
            h = ["h1", "h2", "h3", "h4", "h5", "h6", "p", "div", "address", "pre", "form", "blockquote", "center", "dir", "fieldset", "header", "footer", "article", "section", "hgroup", "aside", "nav", "figure"],
            i = ["h1", "h2", "h3", "h4", "h5", "h6"],
            j = ["li", "dd", "dt"],
            k = ["ul", "ol", "dl"],
            l = function (d) {
                var e;
                return function (f) {
                    return e = e ? e : a.mapToObject(d, b.constant(!0)), e.hasOwnProperty(c.name(f))
                }
            },
            m = l(i),
            n = l(d),
            o = function (a) {
                return c.isElement(a) && !n(a)
            },
            p = function (a) {
                return c.isElement(a) && "br" === c.name(a)
            };
        return {
            isBlock: n,
            isInline: o,
            isHeading: m,
            isTextBlock: l(h),
            isList: l(k),
            isListItem: l(j),
            isVoid: l(e),
            isTableSection: l(g),
            isTableCell: l(f),
            isBr: p
        }
    }), g("1y", [], function () {
        var a = function (a) {
                return function (b) {
                    return !!b && b.nodeType == a
                }
            },
            b = a(1),
            c = function (a) {
                return a = a.toLowerCase().split(" "),
                    function (b) {
                        var c, d;
                        if (b && b.nodeType)
                            for (d = b.nodeName.toLowerCase(), c = 0; c < a.length; c++)
                                if (d === a[c]) return !0;
                        return !1
                    }
            },
            d = function (a, c) {
                return c = c.toLowerCase().split(" "),
                    function (d) {
                        var e, f;
                        if (b(d))
                            for (e = 0; e < c.length; e++)
                                if (f = d.ownerDocument.defaultView.getComputedStyle(d, null).getPropertyValue(a), f === c[e]) return !0;
                        return !1
                    }
            },
            e = function (a, c) {
                return function (d) {
                    return b(d) && d[a] === c
                }
            },
            f = function (a, c) {
                return function (c) {
                    return b(c) && c.hasAttribute(a)
                }
            },
            g = function (a, c) {
                return function (d) {
                    return b(d) && d.getAttribute(a) === c
                }
            },
            h = function (a) {
                return b(a) && a.hasAttribute("data-mce-bogus")
            },
            i = function (a) {
                return function (c) {
                    if (b(c)) {
                        if (c.contentEditable === a) return !0;
                        if (c.getAttribute("data-mce-contenteditable") === a) return !0
                    }
                    return !1
                }
            };
        return {
            isText: a(3),
            isElement: b,
            isComment: a(8),
            isDocument: a(9),
            isBr: c("br"),
            isContentEditableTrue: i("true"),
            isContentEditableFalse: i("false"),
            matchNodeNames: c,
            hasPropValue: e,
            hasAttribute: f,
            hasAttributeValue: g,
            matchStyleValues: d,
            isBogus: h
        }
    }), g("1u", ["1v", "3l", "1y", "1e"], function (a, b, c, d) {
        var e = function (a) {
                var b = a.previousSibling && "SPAN" === a.previousSibling.nodeName,
                    c = a.nextSibling && "SPAN" === a.nextSibling.nodeName;
                return b && c
            },
            f = function (a) {
                return a && "SPAN" === a.tagName && "bookmark" === a.getAttribute("data-mce-type")
            },
            g = function (h, i) {
                var j, k = i.childNodes;
                if (!c.isElement(i) || !f(i)) {
                    for (j = k.length - 1; j >= 0; j--) g(h, k[j]);
                    if (c.isDocument(i) === !1) {
                        if (c.isText(i) && i.nodeValue.length > 0) {
                            var l = d.trim(i.nodeValue).length;
                            if (h.isBlock(i.parentNode) || l > 0) return;
                            if (0 === l && e(i)) return
                        } else if (c.isElement(i) && (k = i.childNodes, 1 === k.length && f(k[0]) && i.parentNode.insertBefore(k[0], i), k.length || b.isVoid(a.fromDom(i)))) return;
                        h.remove(i)
                    }
                    return i
                }
            };
        return {
            trimNode: g
        }
    }), g("v", ["1v", "1e"], function (a, b) {
        var c, d, e, f = b.makeMap,
            g = /[&<>\"\u0060\u007E-\uD7FF\uE000-\uFFEF]|[\uD800-\uDBFF][\uDC00-\uDFFF]/g,
            h = /[<>&\u007E-\uD7FF\uE000-\uFFEF]|[\uD800-\uDBFF][\uDC00-\uDFFF]/g,
            i = /[<>&\"\']/g,
            j = /&#([a-z0-9]+);?|&([a-z0-9]+);/gi,
            k = {
                128: "\u20ac",
                130: "\u201a",
                131: "\u0192",
                132: "\u201e",
                133: "\u2026",
                134: "\u2020",
                135: "\u2021",
                136: "\u02c6",
                137: "\u2030",
                138: "\u0160",
                139: "\u2039",
                140: "\u0152",
                142: "\u017d",
                145: "\u2018",
                146: "\u2019",
                147: "\u201c",
                148: "\u201d",
                149: "\u2022",
                150: "\u2013",
                151: "\u2014",
                152: "\u02dc",
                153: "\u2122",
                154: "\u0161",
                155: "\u203a",
                156: "\u0153",
                158: "\u017e",
                159: "\u0178"
            };
        d = {
            '"': "&quot;",
            "'": "&#39;",
            "<": "&lt;",
            ">": "&gt;",
            "&": "&amp;",
            "`": "&#96;"
        }, e = {
            "&lt;": "<",
            "&gt;": ">",
            "&amp;": "&",
            "&quot;": '"',
            "&apos;": "'"
        };
        var l = function (b) {
                var c;
                return c = a.fromTag("div").dom(), c.innerHTML = b, c.textContent || c.innerText || b
            },
            m = function (a, b) {
                var c, e, f, g = {};
                if (a) {
                    for (a = a.split(","), b = b || 10, c = 0; c < a.length; c += 2) e = String.fromCharCode(parseInt(a[c], b)), d[e] || (f = "&" + a[c + 1] + ";", g[e] = f, g[f] = e);
                    return g
                }
            };
        c = m("50,nbsp,51,iexcl,52,cent,53,pound,54,curren,55,yen,56,brvbar,57,sect,58,uml,59,copy,5a,ordf,5b,laquo,5c,not,5d,shy,5e,reg,5f,macr,5g,deg,5h,plusmn,5i,sup2,5j,sup3,5k,acute,5l,micro,5m,para,5n,middot,5o,cedil,5p,sup1,5q,ordm,5r,raquo,5s,frac14,5t,frac12,5u,frac34,5v,iquest,60,Agrave,61,Aacute,62,Acirc,63,Atilde,64,Auml,65,Aring,66,AElig,67,Ccedil,68,Egrave,69,Eacute,6a,Ecirc,6b,Euml,6c,Igrave,6d,Iacute,6e,Icirc,6f,Iuml,6g,ETH,6h,Ntilde,6i,Ograve,6j,Oacute,6k,Ocirc,6l,Otilde,6m,Ouml,6n,times,6o,Oslash,6p,Ugrave,6q,Uacute,6r,Ucirc,6s,Uuml,6t,Yacute,6u,THORN,6v,szlig,70,agrave,71,aacute,72,acirc,73,atilde,74,auml,75,aring,76,aelig,77,ccedil,78,egrave,79,eacute,7a,ecirc,7b,euml,7c,igrave,7d,iacute,7e,icirc,7f,iuml,7g,eth,7h,ntilde,7i,ograve,7j,oacute,7k,ocirc,7l,otilde,7m,ouml,7n,divide,7o,oslash,7p,ugrave,7q,uacute,7r,ucirc,7s,uuml,7t,yacute,7u,thorn,7v,yuml,ci,fnof,sh,Alpha,si,Beta,sj,Gamma,sk,Delta,sl,Epsilon,sm,Zeta,sn,Eta,so,Theta,sp,Iota,sq,Kappa,sr,Lambda,ss,Mu,st,Nu,su,Xi,sv,Omicron,t0,Pi,t1,Rho,t3,Sigma,t4,Tau,t5,Upsilon,t6,Phi,t7,Chi,t8,Psi,t9,Omega,th,alpha,ti,beta,tj,gamma,tk,delta,tl,epsilon,tm,zeta,tn,eta,to,theta,tp,iota,tq,kappa,tr,lambda,ts,mu,tt,nu,tu,xi,tv,omicron,u0,pi,u1,rho,u2,sigmaf,u3,sigma,u4,tau,u5,upsilon,u6,phi,u7,chi,u8,psi,u9,omega,uh,thetasym,ui,upsih,um,piv,812,bull,816,hellip,81i,prime,81j,Prime,81u,oline,824,frasl,88o,weierp,88h,image,88s,real,892,trade,89l,alefsym,8cg,larr,8ch,uarr,8ci,rarr,8cj,darr,8ck,harr,8dl,crarr,8eg,lArr,8eh,uArr,8ei,rArr,8ej,dArr,8ek,hArr,8g0,forall,8g2,part,8g3,exist,8g5,empty,8g7,nabla,8g8,isin,8g9,notin,8gb,ni,8gf,prod,8gh,sum,8gi,minus,8gn,lowast,8gq,radic,8gt,prop,8gu,infin,8h0,ang,8h7,and,8h8,or,8h9,cap,8ha,cup,8hb,int,8hk,there4,8hs,sim,8i5,cong,8i8,asymp,8j0,ne,8j1,equiv,8j4,le,8j5,ge,8k2,sub,8k3,sup,8k4,nsub,8k6,sube,8k7,supe,8kl,oplus,8kn,otimes,8l5,perp,8m5,sdot,8o8,lceil,8o9,rceil,8oa,lfloor,8ob,rfloor,8p9,lang,8pa,rang,9ea,loz,9j0,spades,9j3,clubs,9j5,hearts,9j6,diams,ai,OElig,aj,oelig,b0,Scaron,b1,scaron,bo,Yuml,m6,circ,ms,tilde,802,ensp,803,emsp,809,thinsp,80c,zwnj,80d,zwj,80e,lrm,80f,rlm,80j,ndash,80k,mdash,80o,lsquo,80p,rsquo,80q,sbquo,80s,ldquo,80t,rdquo,80u,bdquo,810,dagger,811,Dagger,81g,permil,81p,lsaquo,81q,rsaquo,85c,euro", 32);
        var n = {
            encodeRaw: function (a, b) {
                return a.replace(b ? g : h, function (a) {
                    return d[a] || a
                })
            },
            encodeAllRaw: function (a) {
                return ("" + a).replace(i, function (a) {
                    return d[a] || a
                })
            },
            encodeNumeric: function (a, b) {
                return a.replace(b ? g : h, function (a) {
                    return a.length > 1 ? "&#" + (1024 * (a.charCodeAt(0) - 55296) + (a.charCodeAt(1) - 56320) + 65536) + ";" : d[a] || "&#" + a.charCodeAt(0) + ";"
                })
            },
            encodeNamed: function (a, b, e) {
                return e = e || c, a.replace(b ? g : h, function (a) {
                    return d[a] || e[a] || a
                })
            },
            getEncodeFunc: function (a, b) {
                b = m(b) || c;
                var e = function (a, c) {
                        return a.replace(c ? g : h, function (a) {
                            return void 0 !== d[a] ? d[a] : void 0 !== b[a] ? b[a] : a.length > 1 ? "&#" + (1024 * (a.charCodeAt(0) - 55296) + (a.charCodeAt(1) - 56320) + 65536) + ";" : "&#" + a.charCodeAt(0) + ";"
                        })
                    },
                    i = function (a, c) {
                        return n.encodeNamed(a, c, b)
                    };
                return a = f(a.replace(/\+/g, ",")), a.named && a.numeric ? e : a.named ? b ? i : n.encodeNamed : a.numeric ? n.encodeNumeric : n.encodeRaw
            },
            decode: function (a) {
                return a.replace(j, function (a, b) {
                    return b ? (b = "x" === b.charAt(0).toLowerCase() ? parseInt(b.substr(1), 16) : parseInt(b, 10), b > 65535 ? (b -= 65536, String.fromCharCode(55296 + (b >> 10), 56320 + (1023 & b))) : k[b] || String.fromCharCode(b)) : e[a] || c[a] || l(a)
                })
            }
        };
        return n
    }), g("y", ["1e"], function (a) {
        var b = {},
            c = {},
            d = a.makeMap,
            e = a.each,
            f = a.extend,
            g = a.explode,
            h = a.inArray,
            i = function (b, c) {
                return b = a.trim(b), b ? b.split(c || " ") : []
            },
            j = function (a) {
                var d, f, g, h, j, k, l = {},
                    m = function (a, b, e) {
                        var f, g, h, j = function (a, b) {
                            var c, d, e = {};
                            for (c = 0, d = a.length; c < d; c++) e[a[c]] = b || {};
                            return e
                        };
                        for (e = e || [], b = b || "", "string" == typeof e && (e = i(e)), a = i(a), f = a.length; f--;) g = i([d, b].join(" ")), h = {
                            attributes: j(g),
                            attributesOrder: g,
                            children: j(e, c)
                        }, l[a[f]] = h
                    },
                    n = function (a, b) {
                        var c, d, e, f;
                        for (a = i(a), c = a.length, b = i(b); c--;)
                            for (d = l[a[c]], e = 0, f = b.length; e < f; e++) d.attributes[b[e]] = {}, d.attributesOrder.push(b[e])
                    };
                return b[a] ? b[a] : (d = "id accesskey class dir lang style tabindex title role", f = "address blockquote div dl fieldset form h1 h2 h3 h4 h5 h6 hr menu ol p pre table ul", g = "a abbr b bdo br button cite code del dfn em embed i iframe img input ins kbd label map noscript object q s samp script select small span strong sub sup textarea u var #text #comment", "html4" != a && (d += " contenteditable contextmenu draggable dropzone hidden spellcheck translate", f += " article aside details dialog figure header footer hgroup section nav", g += " audio canvas command datalist mark meter output picture progress time wbr video ruby bdi keygen"), "html5-strict" != a && (d += " xml:lang", k = "acronym applet basefont big font strike tt", g = [g, k].join(" "), e(i(k), function (a) {
                    m(a, "", g)
                }), j = "center dir isindex noframes", f = [f, j].join(" "), h = [f, g].join(" "), e(i(j), function (a) {
                    m(a, "", h)
                })), h = h || [f, g].join(" "), m("html", "manifest", "head body"), m("head", "", "base command link meta noscript script style title"), m("title hr noscript br"), m("base", "href target"), m("link", "href rel media hreflang type sizes hreflang"), m("meta", "name http-equiv content charset"), m("style", "media type scoped"), m("script", "src async defer type charset"), m("body", "onafterprint onbeforeprint onbeforeunload onblur onerror onfocus onhashchange onload onmessage onoffline ononline onpagehide onpageshow onpopstate onresize onscroll onstorage onunload", h), m("address dt dd div caption", "", h), m("h1 h2 h3 h4 h5 h6 pre p abbr code var samp kbd sub sup i b u bdo span legend em strong small s cite dfn", "", g), m("blockquote", "cite", h), m("ol", "reversed start type", "li"), m("ul", "", "li"), m("li", "value", h), m("dl", "", "dt dd"), m("a", "href target rel media hreflang type", g), m("q", "cite", g), m("ins del", "cite datetime", h), m("img", "src sizes srcset alt usemap ismap width height"), m("iframe", "src name width height", h), m("embed", "src type width height"), m("object", "data type typemustmatch name usemap form width height", [h, "param"].join(" ")), m("param", "name value"), m("map", "name", [h, "area"].join(" ")), m("area", "alt coords shape href target rel media hreflang type"), m("table", "border", "caption colgroup thead tfoot tbody tr" + ("html4" == a ? " col" : "")), m("colgroup", "span", "col"), m("col", "span"), m("tbody thead tfoot", "", "tr"), m("tr", "", "td th"), m("td", "colspan rowspan headers", h), m("th", "colspan rowspan headers scope abbr", h), m("form", "accept-charset action autocomplete enctype method name novalidate target", h), m("fieldset", "disabled form name", [h, "legend"].join(" ")), m("label", "form for", g), m("input", "accept alt autocomplete checked dirname disabled form formaction formenctype formmethod formnovalidate formtarget height list max maxlength min multiple name pattern readonly required size src step type value width"), m("button", "disabled form formaction formenctype formmethod formnovalidate formtarget name type value", "html4" == a ? h : g), m("select", "disabled form multiple name required size", "option optgroup"), m("optgroup", "disabled label", "option"), m("option", "disabled label selected value"), m("textarea", "cols dirname disabled form maxlength name readonly required rows wrap"), m("menu", "type label", [h, "li"].join(" ")), m("noscript", "", h), "html4" != a && (m("wbr"), m("ruby", "", [g, "rt rp"].join(" ")), m("figcaption", "", h), m("mark rt rp summary bdi", "", g), m("canvas", "width height", h), m("video", "src crossorigin poster preload autoplay mediagroup loop muted controls width height buffered", [h, "track source"].join(" ")), m("audio", "src crossorigin preload autoplay mediagroup loop muted controls buffered volume", [h, "track source"].join(" ")), m("picture", "", "img source"), m("source", "src srcset type media sizes"), m("track", "kind src srclang label default"), m("datalist", "", [g, "option"].join(" ")), m("article section nav aside header footer", "", h), m("hgroup", "", "h1 h2 h3 h4 h5 h6"), m("figure", "", [h, "figcaption"].join(" ")), m("time", "datetime", g), m("dialog", "open", h), m("command", "type label icon disabled checked radiogroup command"), m("output", "for form name", g), m("progress", "value max", g), m("meter", "value min max low high optimum", g), m("details", "open", [h, "summary"].join(" ")), m("keygen", "autofocus challenge disabled form keytype name")), "html5-strict" != a && (n("script", "language xml:space"), n("style", "xml:space"), n("object", "declare classid code codebase codetype archive standby align border hspace vspace"), n("embed", "align name hspace vspace"), n("param", "valuetype type"), n("a", "charset name rev shape coords"), n("br", "clear"), n("applet", "codebase archive code object alt name width height align hspace vspace"), n("img", "name longdesc align border hspace vspace"), n("iframe", "longdesc frameborder marginwidth marginheight scrolling align"), n("font basefont", "size color face"), n("input", "usemap align"), n("select", "onchange"), n("textarea"), n("h1 h2 h3 h4 h5 h6 div p legend caption", "align"), n("ul", "type compact"), n("li", "type"), n("ol dl menu dir", "compact"), n("pre", "width xml:space"), n("hr", "align noshade size width"), n("isindex", "prompt"), n("table", "summary width frame rules cellspacing cellpadding align bgcolor"), n("col", "width align char charoff valign"), n("colgroup", "width align char charoff valign"), n("thead", "align char charoff valign"), n("tr", "align char charoff valign bgcolor"), n("th", "axis align char charoff valign nowrap bgcolor width height"), n("form", "accept"), n("td", "abbr axis scope align char charoff valign nowrap bgcolor width height"), n("tfoot", "align char charoff valign"), n("tbody", "align char charoff valign"), n("area", "nohref"), n("body", "background bgcolor text link vlink alink")), "html4" != a && (n("input button select textarea", "autofocus"), n("input textarea", "placeholder"), n("a", "download"), n("link script img", "crossorigin"), n("iframe", "sandbox seamless allowfullscreen")), e(i("a form meter progress dfn"), function (a) {
                    l[a] && delete l[a].children[a]
                }), delete l.caption.children.table, delete l.script, b[a] = l, l)
            },
            k = function (a, b) {
                var c;
                return a && (c = {}, "string" == typeof a && (a = {
                    "*": a
                }), e(a, function (a, e) {
                    c[e] = c[e.toUpperCase()] = "map" == b ? d(a, /[, ]/) : g(a, /[, ]/)
                })), c
            };
        return function (a) {
            var c, l, m, n, o, p, q, r, s, t, u, v, w, x = this,
                y = {},
                z = {},
                A = [],
                B = {},
                C = {},
                D = function (c, e, g) {
                    var h = a[c];
                    return h ? h = d(h, /[, ]/, d(h.toUpperCase(), /[, ]/)) : (h = b[c], h || (h = d(e, " ", d(e.toUpperCase(), " ")), h = f(h, g), b[c] = h)), h
                };
            a = a || {}, m = j(a.schema), a.verify_html === !1 && (a.valid_elements = "*[*]"), c = k(a.valid_styles), l = k(a.invalid_styles, "map"), r = k(a.valid_classes, "map"), n = D("whitespace_elements", "pre script noscript style textarea video audio iframe object code"), o = D("self_closing_elements", "colgroup dd dt li option p td tfoot th thead tr"), p = D("short_ended_elements", "area base basefont br col frame hr img input isindex link meta param embed source wbr track"), q = D("boolean_attributes", "checked compact declare defer disabled ismap multiple nohref noresize noshade nowrap readonly selected autoplay loop controls"), t = D("non_empty_elements", "td th iframe video audio object script pre code", p), u = D("move_caret_before_on_enter_elements", "table", t), v = D("text_block_elements", "h1 h2 h3 h4 h5 h6 p div address pre form blockquote center dir fieldset header footer article section hgroup aside nav figure"), s = D("block_elements", "hr table tbody thead tfoot th tr td li ol ul caption dl dt dd noscript menu isindex option datalist select optgroup figcaption", v), w = D("text_inline_elements", "span strong b em i font strike u var cite dfn code mark q sup sub samp"), e((a.special || "script noscript noframes noembed title style textarea xmp").split(" "), function (a) {
                C[a] = new RegExp("</" + a + "[^>]*>", "gi")
            });
            var E = function (a) {
                    return new RegExp("^" + a.replace(/([?+*])/g, ".$1") + "$")
                },
                F = function (a) {
                    var b, c, e, f, g, j, k, l, m, n, o, p, q, r, s, t, u, v, w, x = /^([#+\-])?([^\[!\/]+)(?:\/([^\[!]+))?(?:(!?)\[([^\]]+)\])?$/,
                        z = /^([!\-])?(\w+[\\:]:\w+|[^=:<]+)?(?:([=:<])(.*))?$/,
                        B = /[*?+]/;
                    if (a)
                        for (a = i(a, ","), y["@"] && (t = y["@"].attributes, u = y["@"].attributesOrder), b = 0, c = a.length; b < c; b++)
                            if (g = x.exec(a[b])) {
                                if (r = g[1], m = g[2], s = g[3], l = g[5], p = {}, q = [], j = {
                                        attributes: p,
                                        attributesOrder: q
                                    }, "#" === r && (j.paddEmpty = !0), "-" === r && (j.removeEmpty = !0), "!" === g[4] && (j.removeEmptyAttrs = !0), t) {
                                    for (v in t) p[v] = t[v];
                                    q.push.apply(q, u)
                                }
                                if (l)
                                    for (l = i(l, "|"), e = 0, f = l.length; e < f; e++)
                                        if (g = z.exec(l[e])) {
                                            if (k = {}, o = g[1], n = g[2].replace(/[\\:]:/g, ":"), r = g[3], w = g[4], "!" === o && (j.attributesRequired = j.attributesRequired || [], j.attributesRequired.push(n), k.required = !0), "-" === o) {
                                                delete p[n], q.splice(h(q, n), 1);
                                                continue
                                            }
                                            r && ("=" === r && (j.attributesDefault = j.attributesDefault || [], j.attributesDefault.push({
                                                name: n,
                                                value: w
                                            }), k.defaultValue = w), ":" === r && (j.attributesForced = j.attributesForced || [], j.attributesForced.push({
                                                name: n,
                                                value: w
                                            }), k.forcedValue = w), "<" === r && (k.validValues = d(w, "?"))), B.test(n) ? (j.attributePatterns = j.attributePatterns || [], k.pattern = E(n), j.attributePatterns.push(k)) : (p[n] || q.push(n), p[n] = k)
                                        } t || "@" != m || (t = p, u = q), s && (j.outputName = m, y[s] = j), B.test(m) ? (j.pattern = E(m), A.push(j)) : y[m] = j
                            }
                },
                G = function (a) {
                    y = {}, A = [], F(a), e(m, function (a, b) {
                        z[b] = a.children
                    })
                },
                H = function (a) {
                    var c = /^(~)?(.+)$/;
                    a && (b.text_block_elements = b.block_elements = null, e(i(a, ","), function (a) {
                        var b = c.exec(a),
                            d = "~" === b[1],
                            g = d ? "span" : "div",
                            h = b[2];
                        if (z[h] = z[g], B[h] = g, d || (s[h.toUpperCase()] = {}, s[h] = {}), !y[h]) {
                            var i = y[g];
                            i = f({}, i), delete i.removeEmptyAttrs, delete i.removeEmpty, y[h] = i
                        }
                        e(z, function (a, b) {
                            a[g] && (z[b] = a = f({}, z[b]), a[h] = a[g])
                        })
                    }))
                },
                I = function (c) {
                    var d = /^([+\-]?)(\w+)\[([^\]]+)\]$/;
                    b[a.schema] = null, c && e(i(c, ","), function (a) {
                        var b, c, f = d.exec(a);
                        f && (c = f[1], b = c ? z[f[2]] : z[f[2]] = {
                            "#comment": {}
                        }, b = z[f[2]], e(i(f[3], "|"), function (a) {
                            "-" === c ? delete b[a] : b[a] = {}
                        }))
                    })
                },
                J = function (a) {
                    var b, c = y[a];
                    if (c) return c;
                    for (b = A.length; b--;)
                        if (c = A[b], c.pattern.test(a)) return c
                };
            a.valid_elements ? G(a.valid_elements) : (e(m, function (a, b) {
                y[b] = {
                    attributes: a.attributes,
                    attributesOrder: a.attributesOrder
                }, z[b] = a.children
            }), "html5" != a.schema && e(i("strong/b em/i"), function (a) {
                a = i(a, "/"), y[a[1]].outputName = a[0]
            }), e(i("ol ul sub sup blockquote span font a table tbody tr strong em b i"), function (a) {
                y[a] && (y[a].removeEmpty = !0)
            }), e(i("p h1 h2 h3 h4 h5 h6 th td pre div address caption li"), function (a) {
                y[a].paddEmpty = !0
            }), e(i("span"), function (a) {
                y[a].removeEmptyAttrs = !0
            })), H(a.custom_elements), I(a.valid_children), F(a.extended_valid_elements), I("+ol[ul|ol],+ul[ul|ol]"), e({
                dd: "dl",
                dt: "dl",
                li: "ul ol",
                td: "tr",
                th: "tr",
                tr: "tbody thead tfoot",
                tbody: "table",
                thead: "table",
                tfoot: "table",
                legend: "fieldset",
                area: "map",
                param: "video audio object"
            }, function (a, b) {
                y[b] && (y[b].parentsRequired = i(a))
            }), a.invalid_elements && e(g(a.invalid_elements), function (a) {
                y[a] && delete y[a]
            }), J("span") || F("span[!data-mce-type|*]"), x.children = z, x.getValidStyles = function () {
                return c
            }, x.getInvalidStyles = function () {
                return l
            }, x.getValidClasses = function () {
                return r
            }, x.getBoolAttrs = function () {
                return q
            }, x.getBlockElements = function () {
                return s
            }, x.getTextBlockElements = function () {
                return v
            }, x.getTextInlineElements = function () {
                return w
            }, x.getShortEndedElements = function () {
                return p
            }, x.getSelfClosingElements = function () {
                return o
            }, x.getNonEmptyElements = function () {
                return t
            }, x.getMoveCaretBeforeOnEnterElements = function () {
                return u
            }, x.getWhiteSpaceElements = function () {
                return n
            }, x.getSpecialElements = function () {
                return C
            }, x.isValidChild = function (a, b) {
                var c = z[a.toLowerCase()];
                return !(!c || !c[b.toLowerCase()])
            }, x.isValid = function (a, b) {
                var c, d, e = J(a);
                if (e) {
                    if (!b) return !0;
                    if (e.attributes[b]) return !0;
                    if (c = e.attributePatterns)
                        for (d = c.length; d--;)
                            if (c[d].pattern.test(a)) return !0
                }
                return !1
            }, x.getElementRule = J, x.getCustomElements = function () {
                return B
            }, x.addValidElements = F, x.setValidElements = G, x.addCustomElements = H, x.addValidChildren = I, x.elements = y
        }
    }), g("10", [], function () {
        return function (a, b) {
            var c, d, e, f, g = /rgb\s*\(\s*([0-9]+)\s*,\s*([0-9]+)\s*,\s*([0-9]+)\s*\)/gi,
                h = /(?:url(?:(?:\(\s*\"([^\"]+)\"\s*\))|(?:\(\s*\'([^\']+)\'\s*\))|(?:\(\s*([^)\s]+)\s*\))))|(?:\'([^\']+)\')|(?:\"([^\"]+)\")/gi,
                i = /\s*([^:]+):\s*([^;]+);?/g,
                j = /\s+$/,
                k = {},
                l = "\ufeff";
            for (a = a || {}, b && (e = b.getValidStyles(), f = b.getInvalidStyles()), d = ("\\\" \\' \\; \\: ; : " + l).split(" "), c = 0; c < d.length; c++) k[d[c]] = l + c, k[l + c] = d[c];
            var m = function (a, b, c, d) {
                var e = function (a) {
                    return a = parseInt(a, 10).toString(16), a.length > 1 ? a : "0" + a
                };
                return "#" + e(b) + e(c) + e(d)
            };
            return {
                toHex: function (a) {
                    return a.replace(g, m)
                },
                parse: function (b) {
                    var d, e, f, n, o = {},
                        p = a.url_converter,
                        q = a.url_converter_scope || this,
                        r = function (a, b, d) {
                            var e, f, g, h;
                            if (e = o[a + "-top" + b], e && (f = o[a + "-right" + b], f && (g = o[a + "-bottom" + b], g && (h = o[a + "-left" + b])))) {
                                var i = [e, f, g, h];
                                for (c = i.length - 1; c-- && i[c] === i[c + 1];);
                                c > -1 && d || (o[a + b] = c == -1 ? i[0] : i.join(" "), delete o[a + "-top" + b], delete o[a + "-right" + b], delete o[a + "-bottom" + b], delete o[a + "-left" + b])
                            }
                        },
                        s = function (a) {
                            var b, c = o[a];
                            if (c) {
                                for (c = c.split(" "), b = c.length; b--;)
                                    if (c[b] !== c[0]) return !1;
                                return o[a] = c[0], !0
                            }
                        },
                        t = function (a, b, c, d) {
                            s(b) && s(c) && s(d) && (o[a] = o[b] + " " + o[c] + " " + o[d], delete o[b], delete o[c], delete o[d])
                        },
                        u = function (a) {
                            return n = !0, k[a]
                        },
                        v = function (a, b) {
                            return n && (a = a.replace(/\uFEFF[0-9]/g, function (a) {
                                return k[a]
                            })), b || (a = a.replace(/\\([\'\";:])/g, "$1")), a
                        },
                        w = function (a) {
                            return String.fromCharCode(parseInt(a.slice(1), 16))
                        },
                        x = function (a) {
                            return a.replace(/\\[0-9a-f]+/gi, w)
                        },
                        y = function (b, c, d, e, f, g) {
                            if (f = f || g) return f = v(f), "'" + f.replace(/\'/g, "\\'") + "'";
                            if (c = v(c || d || e), !a.allow_script_urls) {
                                var h = c.replace(/[\s\r\n]+/g, "");
                                if (/(java|vb)script:/i.test(h)) return "";
                                if (!a.allow_svg_data_urls && /^data:image\/svg/i.test(h)) return ""
                            }
                            return p && (c = p.call(q, c, "style")), "url('" + c.replace(/\'/g, "\\'") + "')"
                        };
                    if (b) {
                        for (b = b.replace(/[\u0000-\u001F]/g, ""), b = b.replace(/\\[\"\';:\uFEFF]/g, u).replace(/\"[^\"]+\"|\'[^\']+\'/g, function (a) {
                                return a.replace(/[;:]/g, u)
                            }); d = i.exec(b);)
                            if (i.lastIndex = d.index + d[0].length, e = d[1].replace(j, "").toLowerCase(), f = d[2].replace(j, ""), e && f) {
                                if (e = x(e), f = x(f), e.indexOf(l) !== -1 || e.indexOf('"') !== -1) continue;
                                if (!a.allow_script_urls && ("behavior" == e || /expression\s*\(|\/\*|\*\//.test(f))) continue;
                                "font-weight" === e && "700" === f ? f = "bold" : "color" !== e && "background-color" !== e || (f = f.toLowerCase()), f = f.replace(g, m), f = f.replace(h, y), o[e] = n ? v(f, !0) : f
                            } r("border", "", !0), r("border", "-width"), r("border", "-color"), r("border", "-style"), r("padding", ""), r("margin", ""), t("border", "border-width", "border-style", "border-color"), "medium none" === o.border && delete o.border, "none" === o["border-image"] && delete o["border-image"]
                    }
                    return o
                },
                serialize: function (a, b) {
                    var c, d, g = "",
                        h = function (b) {
                            var c, d, f, h;
                            if (c = e[b])
                                for (d = 0, f = c.length; d < f; d++) b = c[d], h = a[b], h && (g += (g.length > 0 ? " " : "") + b + ": " + h + ";")
                        },
                        i = function (a, b) {
                            var c;
                            return c = f["*"], (!c || !c[a]) && (c = f[b], !c || !c[a])
                        };
                    if (b && e) h("*"), h(b);
                    else
                        for (c in a) d = a[c], !d || f && !i(c, b) || (g += (g.length > 0 ? " " : "") + c + ": " + d + ";");
                    return g
                }
            }
        }
    }), g("m", ["1j", "2", "b", "n", "o", "1s", "r", "1t", "s", "1u", "v", "y", "10", "1e"], function (a, b, c, d, e, f, g, h, i, j, k, l, m, n) {
        var o = n.each,
            p = n.is,
            q = n.grep,
            r = c.ie,
            s = /^([a-z0-9],?)+$/i,
            t = /^[ \t\r\n]*$/,
            u = function (a, b) {
                var c, d = {},
                    e = b.keep_values;
                return c = {
                    set: function (c, d, e) {
                        b.url_converter && (d = b.url_converter.call(b.url_converter_scope || a, d, e, c[0])), c.attr("data-mce-" + e, d).attr(e, d)
                    },
                    get: function (a, b) {
                        return a.attr("data-mce-" + b) || a.attr(b)
                    }
                }, d = {
                    style: {
                        set: function (a, b) {
                            return null !== b && "object" == typeof b ? void a.css(b) : (e && a.attr("data-mce-style", b), void a.attr("style", b))
                        },
                        get: function (b) {
                            var c = b.attr("data-mce-style") || b.attr("style");
                            return c = a.serializeStyle(a.parseStyle(c), b[0].nodeName)
                        }
                    }
                }, e && (d.href = d.src = c), d
            },
            v = function (a, b) {
                var c = b.attr("style");
                c = a.serializeStyle(a.parseStyle(c), b[0].nodeName), c || (c = null), b.attr("data-mce-style", c)
            },
            w = function (a, b) {
                var c, d, e = 0;
                if (a)
                    for (c = a.nodeType, a = a.previousSibling; a; a = a.previousSibling) d = a.nodeType, (!b || 3 != d || d != c && a.nodeValue.length) && (e++, c = d);
                return e
            },
            x = function (a, c) {
                var f, g = this;
                g.doc = a, g.win = b, g.files = {}, g.counter = 0, g.stdMode = !r || a.documentMode >= 8, g.boxModel = !r || "CSS1Compat" == a.compatMode || g.stdMode, g.styleSheetLoader = new h(a), g.boundEvents = [], g.settings = c = c || {}, g.schema = c.schema ? c.schema : new l({}), g.styles = new m({
                    url_converter: c.url_converter,
                    url_converter_scope: c.url_converter_scope
                }, c.schema), g.fixDoc(a), g.events = c.ownEvents ? new e(c.proxy) : e.Event, g.attrHooks = u(g, c), f = g.schema.getBlockElements(), g.$ = d.overrideDefaults(function () {
                    return {
                        context: a,
                        element: g.getRoot()
                    }
                }), g.isBlock = function (a) {
                    if (!a) return !1;
                    var b = a.nodeType;
                    return b ? !(1 !== b || !f[a.nodeName]) : !!f[a]
                }
            };
        return x.prototype = {
            $$: function (a) {
                return "string" == typeof a && (a = this.get(a)), this.$(a)
            },
            root: null,
            fixDoc: function (a) {
                var b, c = this.settings;
                if (r && c.schema) {
                    "abbr article aside audio canvas details figcaption figure footer header hgroup mark menu meter nav output progress section summary time video".replace(/\w+/g, function (b) {
                        a.createElement(b)
                    });
                    for (b in c.schema.getCustomElements()) a.createElement(b)
                }
            },
            clone: function (a, b) {
                var c, d, e = this;
                return !r || 1 !== a.nodeType || b ? a.cloneNode(b) : (d = e.doc, b ? c.firstChild : (c = d.createElement(a.nodeName), o(e.getAttribs(a), function (b) {
                    e.setAttrib(c, b.nodeName, e.getAttrib(a, b.nodeName))
                }), c))
            },
            getRoot: function () {
                var a = this;
                return a.settings.root_element || a.doc.body
            },
            getViewPort: function (a) {
                var b, c;
                return a = a ? a : this.win, b = a.document, c = this.boxModel ? b.documentElement : b.body, {
                    x: a.pageXOffset || c.scrollLeft,
                    y: a.pageYOffset || c.scrollTop,
                    w: a.innerWidth || c.clientWidth,
                    h: a.innerHeight || c.clientHeight
                }
            },
            getRect: function (a) {
                var b, c, d = this;
                return a = d.get(a), b = d.getPos(a), c = d.getSize(a), {
                    x: b.x,
                    y: b.y,
                    w: c.w,
                    h: c.h
                }
            },
            getSize: function (a) {
                var b, c, d = this;
                return a = d.get(a), b = d.getStyle(a, "width"), c = d.getStyle(a, "height"), b.indexOf("px") === -1 && (b = 0), c.indexOf("px") === -1 && (c = 0), {
                    w: parseInt(b, 10) || a.offsetWidth || a.clientWidth,
                    h: parseInt(c, 10) || a.offsetHeight || a.clientHeight
                }
            },
            getParent: function (a, b, c) {
                return this.getParents(a, b, c, !1)
            },
            getParents: function (a, b, c, d) {
                var e, f = this,
                    g = [];
                for (a = f.get(a), d = void 0 === d, c = c || ("BODY" != f.getRoot().nodeName ? f.getRoot().parentNode : null), p(b, "string") && (e = b, b = "*" === b ? function (a) {
                        return 1 == a.nodeType
                    } : function (a) {
                        return f.is(a, e)
                    }); a && a != c && a.nodeType && 9 !== a.nodeType;) {
                    if (!b || b(a)) {
                        if (!d) return a;
                        g.push(a)
                    }
                    a = a.parentNode
                }
                return d ? g : null
            },
            get: function (a) {
                var b;
                return a && this.doc && "string" == typeof a && (b = a, a = this.doc.getElementById(a), a && a.id !== b) ? this.doc.getElementsByName(b)[1] : a
            },
            getNext: function (a, b) {
                return this._findSib(a, b, "nextSibling")
            },
            getPrev: function (a, b) {
                return this._findSib(a, b, "previousSibling")
            },
            select: function (a, b) {
                var c = this;
                return g(a, c.get(b) || c.settings.root_element || c.doc, [])
            },
            is: function (a, b) {
                var c;
                if (!a) return !1;
                if (void 0 === a.length) {
                    if ("*" === b) return 1 == a.nodeType;
                    if (s.test(b)) {
                        for (b = b.toLowerCase().split(/,/), a = a.nodeName.toLowerCase(), c = b.length - 1; c >= 0; c--)
                            if (b[c] == a) return !0;
                        return !1
                    }
                }
                if (a.nodeType && 1 != a.nodeType) return !1;
                var d = a.nodeType ? [a] : a;
                return g(b, d[0].ownerDocument || d[0], null, d).length > 0
            },
            add: function (a, b, c, d, e) {
                var f = this;
                return this.run(a, function (a) {
                    var g;
                    return g = p(b, "string") ? f.doc.createElement(b) : b, f.setAttribs(g, c), d && (d.nodeType ? g.appendChild(d) : f.setHTML(g, d)), e ? g : a.appendChild(g)
                })
            },
            create: function (a, b, c) {
                return this.add(this.doc.createElement(a), a, b, c, 1)
            },
            createHTML: function (a, b, c) {
                var d, e = "";
                e += "<" + a;
                for (d in b) b.hasOwnProperty(d) && null !== b[d] && "undefined" != typeof b[d] && (e += " " + d + '="' + this.encode(b[d]) + '"');
                return "undefined" != typeof c ? e + ">" + c + "</" + a + ">" : e + " />"
            },
            createFragment: function (a) {
                var b, c, d, e = this.doc;
                for (d = e.createElement("div"), b = e.createDocumentFragment(), a && (d.innerHTML = a); c = d.firstChild;) b.appendChild(c);
                return b
            },
            remove: function (a, b) {
                return a = this.$$(a), b ? a.each(function () {
                    for (var a; a = this.firstChild;) 3 == a.nodeType && 0 === a.data.length ? this.removeChild(a) : this.parentNode.insertBefore(a, this)
                }).remove() : a.remove(), a.length > 1 ? a.toArray() : a[0]
            },
            setStyle: function (a, b, c) {
                a = this.$$(a).css(b, c), this.settings.update_styles && v(this, a)
            },
            getStyle: function (a, b, d) {
                return a = this.$$(a), d ? a.css(b) : (b = b.replace(/-(\D)/g, function (a, b) {
                    return b.toUpperCase()
                }), "float" == b && (b = c.ie && c.ie < 12 ? "styleFloat" : "cssFloat"), a[0] && a[0].style ? a[0].style[b] : void 0)
            },
            setStyles: function (a, b) {
                a = this.$$(a).css(b), this.settings.update_styles && v(this, a)
            },
            removeAllAttribs: function (a) {
                return this.run(a, function (a) {
                    var b, c = a.attributes;
                    for (b = c.length - 1; b >= 0; b--) a.removeAttributeNode(c.item(b))
                })
            },
            setAttrib: function (a, b, c) {
                var d, e, f = this,
                    g = f.settings;
                "" === c && (c = null), a = f.$$(a), d = a.attr(b), a.length && (e = f.attrHooks[b], e && e.set ? e.set(a, c, b) : a.attr(b, c),
                    d != c && g.onSetAttrib && g.onSetAttrib({
                        attrElm: a,
                        attrName: b,
                        attrValue: c
                    }))
            },
            setAttribs: function (a, b) {
                var c = this;
                c.$$(a).each(function (a, d) {
                    o(b, function (a, b) {
                        c.setAttrib(d, b, a)
                    })
                })
            },
            getAttrib: function (a, b, c) {
                var d, e, f = this;
                return a = f.$$(a), a.length && (d = f.attrHooks[b], e = d && d.get ? d.get(a, b) : a.attr(b)), "undefined" == typeof e && (e = c || ""), e
            },
            getPos: function (a, b) {
                return f.getPos(this.doc.body, this.get(a), b)
            },
            parseStyle: function (a) {
                return this.styles.parse(a)
            },
            serializeStyle: function (a, b) {
                return this.styles.serialize(a, b)
            },
            addStyle: function (b) {
                var c, d, e = this,
                    f = e.doc;
                if (e !== x.DOM && f === a) {
                    var g = x.DOM.addedStyles;
                    if (g = g || [], g[b]) return;
                    g[b] = !0, x.DOM.addedStyles = g
                }
                d = f.getElementById("mceDefaultStyles"), d || (d = f.createElement("style"), d.id = "mceDefaultStyles", d.type = "text/css", c = f.getElementsByTagName("head")[0], c.firstChild ? c.insertBefore(d, c.firstChild) : c.appendChild(d)), d.styleSheet ? d.styleSheet.cssText += b : d.appendChild(f.createTextNode(b))
            },
            loadCSS: function (b) {
                var c, d = this,
                    e = d.doc;
                return d !== x.DOM && e === a ? void x.DOM.loadCSS(b) : (b || (b = ""), c = e.getElementsByTagName("head")[0], void o(b.split(","), function (a) {
                    var b;
                    a = n._addCacheSuffix(a), d.files[a] || (d.files[a] = !0, b = d.create("link", {
                        rel: "stylesheet",
                        href: a
                    }), r && e.documentMode && e.recalc && (b.onload = function () {
                        e.recalc && e.recalc(), b.onload = null
                    }), c.appendChild(b))
                }))
            },
            addClass: function (a, b) {
                this.$$(a).addClass(b)
            },
            removeClass: function (a, b) {
                this.toggleClass(a, b, !1)
            },
            hasClass: function (a, b) {
                return this.$$(a).hasClass(b)
            },
            toggleClass: function (a, b, c) {
                this.$$(a).toggleClass(b, c).each(function () {
                    "" === this.className && d(this).attr("class", null)
                })
            },
            show: function (a) {
                this.$$(a).show()
            },
            hide: function (a) {
                this.$$(a).hide()
            },
            isHidden: function (a) {
                return "none" == this.$$(a).css("display")
            },
            uniqueId: function (a) {
                return (a ? a : "mce_") + this.counter++
            },
            setHTML: function (a, b) {
                a = this.$$(a), r ? a.each(function (a, c) {
                    if (c.canHaveHTML !== !1) {
                        for (; c.firstChild;) c.removeChild(c.firstChild);
                        try {
                            c.innerHTML = "<br>" + b, c.removeChild(c.firstChild)
                        } catch (a) {
                            d("<div></div>").html("<br>" + b).contents().slice(1).appendTo(c)
                        }
                        return b
                    }
                }) : a.html(b)
            },
            getOuterHTML: function (a) {
                return a = this.get(a), 1 == a.nodeType && "outerHTML" in a ? a.outerHTML : d("<div></div>").append(d(a).clone()).html()
            },
            setOuterHTML: function (a, b) {
                var c = this;
                c.$$(a).each(function () {
                    try {
                        if ("outerHTML" in this) return void(this.outerHTML = b)
                    } catch (a) {}
                    c.remove(d(this).html(b), !0)
                })
            },
            decode: k.decode,
            encode: k.encodeAllRaw,
            insertAfter: function (a, b) {
                return b = this.get(b), this.run(a, function (a) {
                    var c, d;
                    return c = b.parentNode, d = b.nextSibling, d ? c.insertBefore(a, d) : c.appendChild(a), a
                })
            },
            replace: function (a, b, c) {
                var d = this;
                return d.run(b, function (b) {
                    return p(b, "array") && (a = a.cloneNode(!0)), c && o(q(b.childNodes), function (b) {
                        a.appendChild(b)
                    }), b.parentNode.replaceChild(a, b)
                })
            },
            rename: function (a, b) {
                var c, d = this;
                return a.nodeName != b.toUpperCase() && (c = d.create(b), o(d.getAttribs(a), function (b) {
                    d.setAttrib(c, b.nodeName, d.getAttrib(a, b.nodeName))
                }), d.replace(c, a, 1)), c || a
            },
            findCommonAncestor: function (a, b) {
                for (var c, d = a; d;) {
                    for (c = b; c && d != c;) c = c.parentNode;
                    if (d == c) break;
                    d = d.parentNode
                }
                return !d && a.ownerDocument ? a.ownerDocument.documentElement : d
            },
            toHex: function (a) {
                return this.styles.toHex(n.trim(a))
            },
            run: function (a, b, c) {
                var d, e = this;
                return "string" == typeof a && (a = e.get(a)), !!a && (c = c || this, a.nodeType || !a.length && 0 !== a.length ? b.call(c, a) : (d = [], o(a, function (a, f) {
                    a && ("string" == typeof a && (a = e.get(a)), d.push(b.call(c, a, f)))
                }), d))
            },
            getAttribs: function (a) {
                var b;
                if (a = this.get(a), !a) return [];
                if (r) {
                    if (b = [], "OBJECT" == a.nodeName) return a.attributes;
                    "OPTION" === a.nodeName && this.getAttrib(a, "selected") && b.push({
                        specified: 1,
                        nodeName: "selected"
                    });
                    var c = /<\/?[\w:\-]+ ?|=[\"][^\"]+\"|=\'[^\']+\'|=[\w\-]+|>/gi;
                    return a.cloneNode(!1).outerHTML.replace(c, "").replace(/[\w:\-]+/gi, function (a) {
                        b.push({
                            specified: 1,
                            nodeName: a
                        })
                    }), b
                }
                return a.attributes
            },
            isEmpty: function (a, b) {
                var c, d, e, f, g, h, j = this,
                    k = 0;
                if (a = a.firstChild) {
                    g = new i(a, a.parentNode), b = b || (j.schema ? j.schema.getNonEmptyElements() : null), f = j.schema ? j.schema.getWhiteSpaceElements() : {};
                    do {
                        if (e = a.nodeType, 1 === e) {
                            var l = a.getAttribute("data-mce-bogus");
                            if (l) {
                                a = g.next("all" === l);
                                continue
                            }
                            if (h = a.nodeName.toLowerCase(), b && b[h]) {
                                if ("br" === h) {
                                    k++, a = g.next();
                                    continue
                                }
                                return !1
                            }
                            for (d = j.getAttribs(a), c = d.length; c--;)
                                if (h = d[c].nodeName, "name" === h || "data-mce-bookmark" === h) return !1
                        }
                        if (8 == e) return !1;
                        if (3 === e && !t.test(a.nodeValue)) return !1;
                        if (3 === e && a.parentNode && f[a.parentNode.nodeName] && t.test(a.nodeValue)) return !1;
                        a = g.next()
                    } while (a)
                }
                return k <= 1
            },
            createRng: function () {
                return this.doc.createRange()
            },
            nodeIndex: w,
            split: function (a, b, c) {
                var d, e, f, g = this,
                    h = g.createRng();
                if (a && b) return h.setStart(a.parentNode, g.nodeIndex(a)), h.setEnd(b.parentNode, g.nodeIndex(b)), d = h.extractContents(), h = g.createRng(), h.setStart(b.parentNode, g.nodeIndex(b) + 1), h.setEnd(a.parentNode, g.nodeIndex(a) + 1), e = h.extractContents(), f = a.parentNode, f.insertBefore(j.trimNode(g, d), a), c ? f.insertBefore(c, a) : f.insertBefore(b, a), f.insertBefore(j.trimNode(g, e), a), g.remove(a), c || b
            },
            bind: function (a, b, c, d) {
                var e = this;
                if (n.isArray(a)) {
                    for (var f = a.length; f--;) a[f] = e.bind(a[f], b, c, d);
                    return a
                }
                return !e.settings.collect || a !== e.doc && a !== e.win || e.boundEvents.push([a, b, c, d]), e.events.bind(a, b, c, d || e)
            },
            unbind: function (a, b, c) {
                var d, e = this;
                if (n.isArray(a)) {
                    for (d = a.length; d--;) a[d] = e.unbind(a[d], b, c);
                    return a
                }
                if (e.boundEvents && (a === e.doc || a === e.win))
                    for (d = e.boundEvents.length; d--;) {
                        var f = e.boundEvents[d];
                        a != f[0] || b && b != f[1] || c && c != f[2] || this.events.unbind(f[0], f[1], f[2])
                    }
                return this.events.unbind(a, b, c)
            },
            fire: function (a, b, c) {
                return this.events.fire(a, b, c)
            },
            getContentEditable: function (a) {
                var b;
                return a && 1 == a.nodeType ? (b = a.getAttribute("data-mce-contenteditable"), b && "inherit" !== b ? b : "inherit" !== a.contentEditable ? a.contentEditable : null) : null
            },
            getContentEditableParent: function (a) {
                for (var b = this.getRoot(), c = null; a && a !== b && (c = this.getContentEditable(a), null === c); a = a.parentNode);
                return c
            },
            destroy: function () {
                var a = this;
                if (a.boundEvents) {
                    for (var b = a.boundEvents.length; b--;) {
                        var c = a.boundEvents[b];
                        this.events.unbind(c[0], c[1], c[2])
                    }
                    a.boundEvents = null
                }
                g.setDocument && g.setDocument(), a.win = a.doc = a.root = a.events = a.frag = null
            },
            isChildOf: function (a, b) {
                for (; a;) {
                    if (b === a) return !0;
                    a = a.parentNode
                }
                return !1
            },
            dumpRng: function (a) {
                return "startContainer: " + a.startContainer.nodeName + ", startOffset: " + a.startOffset + ", endContainer: " + a.endContainer.nodeName + ", endOffset: " + a.endOffset
            },
            _findSib: function (a, b, c) {
                var d = this,
                    e = b;
                if (a)
                    for ("string" == typeof e && (e = function (a) {
                            return d.is(a, b)
                        }), a = a[c]; a; a = a[c])
                        if (e(a)) return a;
                return null
            }
        }, x.DOM = new x(a), x.nodeIndex = w, x
    }), g("p", ["1j", "m", "1e"], function (a, b, c) {
        var d = b.DOM,
            e = c.each,
            f = c.grep,
            g = function (a) {
                return "function" == typeof a
            },
            h = function () {
                var b, h = 0,
                    i = 1,
                    j = 2,
                    k = 3,
                    l = {},
                    m = [],
                    n = {},
                    o = [],
                    p = 0,
                    q = function (b, e, f) {
                        var h, i, j = d,
                            k = function () {
                                j.remove(i), h && (h.onreadystatechange = h.onload = h = null), e()
                            },
                            l = function () {
                                g(f) ? f() : "undefined" != typeof console && console.log && console.log("Failed to load script: " + b)
                            };
                        i = j.uniqueId(), h = a.createElement("script"), h.id = i, h.type = "text/javascript", h.src = c._addCacheSuffix(b), "onreadystatechange" in h ? h.onreadystatechange = function () {
                            /loaded|complete/.test(h.readyState) && k()
                        } : h.onload = k, h.onerror = l, (a.getElementsByTagName("head")[0] || a.body).appendChild(h)
                    };
                this.isDone = function (a) {
                    return l[a] == j
                }, this.markDone = function (a) {
                    l[a] = j
                }, this.add = this.load = function (a, c, d, e) {
                    var f = l[a];
                    f == b && (m.push(a), l[a] = h), c && (n[a] || (n[a] = []), n[a].push({
                        success: c,
                        failure: e,
                        scope: d || this
                    }))
                }, this.remove = function (a) {
                    delete l[a], delete n[a]
                }, this.loadQueue = function (a, b, c) {
                    this.loadScripts(m, a, b, c)
                }, this.loadScripts = function (a, c, d, h) {
                    var m, r = [],
                        s = function (a, c) {
                            e(n[c], function (b) {
                                g(b[a]) && b[a].call(b.scope)
                            }), n[c] = b
                        };
                    o.push({
                        success: c,
                        failure: h,
                        scope: d || this
                    }), (m = function () {
                        var b = f(a);
                        if (a.length = 0, e(b, function (a) {
                                return l[a] === j ? void s("success", a) : l[a] === k ? void s("failure", a) : void(l[a] !== i && (l[a] = i, p++, q(a, function () {
                                    l[a] = j, p--, s("success", a), m()
                                }, function () {
                                    l[a] = k, p--, r.push(a), s("failure", a), m()
                                })))
                            }), !p) {
                            var c = o.slice(0);
                            o.length = 0, e(c, function (a) {
                                0 === r.length ? g(a.success) && a.success.call(a.scope) : g(a.failure) && a.failure.call(a.scope, r)
                            })
                        }
                    })()
                }
            };
        return h.ScriptLoader = new h, h
    }), g("6", ["1i", "p", "1e"], function (a, b, c) {
        var d = c.each,
            e = function () {
                var a = this;
                a.items = [], a.urls = {}, a.lookup = {}, a._listeners = []
            };
        return e.prototype = {
            get: function (a) {
                if (this.lookup[a]) return this.lookup[a].instance
            },
            dependencies: function (a) {
                var b;
                return this.lookup[a] && (b = this.lookup[a].dependencies), b || []
            },
            requireLangPack: function (a, c) {
                var d = e.language;
                if (d && e.languageLoad !== !1) {
                    if (c)
                        if (c = "," + c + ",", c.indexOf("," + d.substr(0, 2) + ",") != -1) d = d.substr(0, 2);
                        else if (c.indexOf("," + d + ",") == -1) return;
                    b.ScriptLoader.add(this.urls[a] + "/langs/" + d + ".js")
                }
            },
            add: function (b, c, e) {
                this.items.push(c), this.lookup[b] = {
                    instance: c,
                    dependencies: e
                };
                var f = a.partition(this._listeners, function (a) {
                    return a.name === b
                });
                return this._listeners = f.fail, d(f.pass, function (a) {
                    a.callback()
                }), c
            },
            remove: function (a) {
                delete this.urls[a], delete this.lookup[a]
            },
            createUrl: function (a, b) {
                return "object" == typeof b ? b : {
                    prefix: a.prefix,
                    resource: b,
                    suffix: a.suffix
                }
            },
            addComponents: function (a, c) {
                var e = this.urls[a];
                d(c, function (a) {
                    b.ScriptLoader.add(e + "/" + a)
                })
            },
            load: function (a, c, f, g, h) {
                var i = this,
                    j = c,
                    k = function () {
                        var e = i.dependencies(a);
                        d(e, function (a) {
                            var b = i.createUrl(c, a);
                            i.load(b.resource, b, void 0, void 0)
                        }), f && (g ? f.call(g) : f.call(b))
                    };
                i.urls[a] || ("object" == typeof c && (j = c.prefix + c.resource + c.suffix), 0 !== j.indexOf("/") && j.indexOf("://") == -1 && (j = e.baseURL + "/" + j), i.urls[a] = j.substring(0, j.lastIndexOf("/")), i.lookup[a] ? k() : b.ScriptLoader.add(j, k, g, h))
            },
            waitFor: function (a, b) {
                this.lookup.hasOwnProperty(a) ? b() : this._listeners.push({
                    name: a,
                    callback: b
                })
            }
        }, e.PluginManager = new e, e.ThemeManager = new e, e
    }), g("4b", [], function () {
        var a = "\ufeff",
            b = function (b) {
                return b === a
            },
            c = function (b) {
                return b.replace(new RegExp(a, "g"), "")
            };
        return {
            isZwsp: b,
            ZWSP: a,
            trim: c
        }
    }), g("46", ["1j", "1y", "4b"], function (a, b, c) {
        var d = b.isElement,
            e = b.isText,
            f = function (a) {
                return e(a) && (a = a.parentNode), d(a) && a.hasAttribute("data-mce-caret")
            },
            g = function (a) {
                return e(a) && c.isZwsp(a.data)
            },
            h = function (a) {
                return f(a) || g(a)
            },
            i = function (a) {
                return a.firstChild !== a.lastChild || !b.isBr(a.firstChild)
            },
            j = function (a, b) {
                var d, f, g, i;
                if (d = a.ownerDocument, g = d.createTextNode(c.ZWSP), i = a.parentNode, b) {
                    if (f = a.previousSibling, e(f)) {
                        if (h(f)) return f;
                        if (r(f)) return f.splitText(f.data.length - 1)
                    }
                    i.insertBefore(g, a)
                } else {
                    if (f = a.nextSibling, e(f)) {
                        if (h(f)) return f;
                        if (q(f)) return f.splitText(1), f
                    }
                    a.nextSibling ? i.insertBefore(g, a.nextSibling) : i.appendChild(g)
                }
                return g
            },
            k = function (a) {
                if (b.isText(a)) {
                    var d = a.data;
                    return d.length > 0 && d.charAt(0) !== c.ZWSP && a.insertData(0, c.ZWSP), a
                }
                return null
            },
            l = function (a) {
                if (b.isText(a)) {
                    var d = a.data;
                    return d.length > 0 && d.charAt(d.length - 1) !== c.ZWSP && a.insertData(d.length, c.ZWSP), a
                }
                return null
            },
            m = function (a) {
                return a && b.isText(a.container()) && a.container().data.charAt(a.offset()) === c.ZWSP
            },
            n = function (a) {
                return a && b.isText(a.container()) && a.container().data.charAt(a.offset() - 1) === c.ZWSP
            },
            o = function () {
                var b = a.createElement("br");
                return b.setAttribute("data-mce-bogus", "1"), b
            },
            p = function (a, b, c) {
                var d, e, f;
                return d = b.ownerDocument, e = d.createElement(a), e.setAttribute("data-mce-caret", c ? "before" : "after"), e.setAttribute("data-mce-bogus", "all"), e.appendChild(o()), f = b.parentNode, c ? f.insertBefore(e, b) : b.nextSibling ? f.insertBefore(e, b.nextSibling) : f.appendChild(e), e
            },
            q = function (a) {
                return e(a) && a.data[0] == c.ZWSP
            },
            r = function (a) {
                return e(a) && a.data[a.data.length - 1] == c.ZWSP
            },
            s = function (a) {
                var c = a.getElementsByTagName("br"),
                    d = c[c.length - 1];
                b.isBogus(d) && d.parentNode.removeChild(d)
            },
            t = function (a) {
                return a && a.hasAttribute("data-mce-caret") ? (s(a), a.removeAttribute("data-mce-caret"), a.removeAttribute("data-mce-bogus"), a.removeAttribute("style"), a.removeAttribute("_moz_abspos"), a) : null
            };
        return {
            isCaretContainer: h,
            isCaretContainerBlock: f,
            isCaretContainerInline: g,
            showCaretContainerBlock: t,
            insertInline: j,
            prependInline: k,
            appendInline: l,
            isBeforeInline: m,
            isAfterInline: n,
            insertBlock: p,
            hasContent: i,
            startsWithCaretContainer: q,
            endsWithCaretContainer: r
        }
    }), g("3n", ["1y", "1r", "46"], function (a, b, c) {
        var d = a.isContentEditableTrue,
            e = a.isContentEditableFalse,
            f = a.isBr,
            g = a.isText,
            h = a.matchNodeNames("script style textarea"),
            i = a.matchNodeNames("img input textarea hr iframe video audio object"),
            j = a.matchNodeNames("table"),
            k = c.isCaretContainer,
            l = function (a) {
                return !k(a) && (g(a) ? !h(a.parentNode) : i(a) || f(a) || j(a) || e(a))
            },
            m = function (a, b) {
                for (a = a.parentNode; a && a != b; a = a.parentNode) {
                    if (e(a)) return !1;
                    if (d(a)) return !0
                }
                return !0
            },
            n = function (a) {
                return !!e(a) && b.reduce(a.getElementsByTagName("*"), function (a, b) {
                    return a || d(b)
                }, !1) !== !0
            },
            o = function (a) {
                return i(a) || n(a)
            },
            p = function (a, b) {
                return l(a) && m(a, b)
            };
        return {
            isCaretCandidate: l,
            isInEditable: m,
            isAtomic: o,
            isEditableCaretCandidate: p
        }
    }), g("3o", [], function () {
        var a = Math.round,
            b = function (b) {
                return b ? {
                    left: a(b.left),
                    top: a(b.top),
                    bottom: a(b.bottom),
                    right: a(b.right),
                    width: a(b.width),
                    height: a(b.height)
                } : {
                    left: 0,
                    top: 0,
                    bottom: 0,
                    right: 0,
                    width: 0,
                    height: 0
                }
            },
            c = function (a, c) {
                return a = b(a), c ? a.right = a.left : (a.left = a.left + a.width, a.right = a.left), a.width = 0, a
            },
            d = function (a, b) {
                return a.left === b.left && a.top === b.top && a.bottom === b.bottom && a.right === b.right
            },
            e = function (a, b, c) {
                return a >= 0 && a <= Math.min(b.height, c.height) / 2
            },
            f = function (a, b) {
                return a.bottom - a.height / 2 < b.top || !(a.top > b.bottom) && e(b.top - a.bottom, a, b)
            },
            g = function (a, b) {
                return a.top > b.bottom || !(a.bottom < b.top) && e(b.bottom - a.top, a, b)
            },
            h = function (a, b) {
                return a.left < b.left
            },
            i = function (a, b) {
                return a.right > b.right
            },
            j = function (a, b) {
                return f(a, b) ? -1 : g(a, b) ? 1 : h(a, b) ? -1 : i(a, b) ? 1 : 0
            },
            k = function (a, b, c) {
                return b >= a.left && b <= a.right && c >= a.top && c <= a.bottom
            };
        return {
            clone: b,
            collapse: c,
            isEqual: d,
            isAbove: f,
            isBelow: g,
            isLeft: h,
            isRight: i,
            compare: j,
            containsXY: k
        }
    }), g("2v", [], function () {
        var a = function (a) {
                var b = a.startContainer,
                    c = a.startOffset;
                return b.hasChildNodes() && a.endOffset == c + 1 ? b.childNodes[c] : null
            },
            b = function (a, b) {
                return 1 === a.nodeType && a.hasChildNodes() && (b >= a.childNodes.length && (b = a.childNodes.length - 1), a = a.childNodes[b]), a
            };
        return {
            getSelectedNode: a,
            getNode: b
        }
    }), g("3p", [], function () {
        var a = new RegExp("[\u0300-\u036f\u0483-\u0487\u0488-\u0489\u0591-\u05bd\u05bf\u05c1-\u05c2\u05c4-\u05c5\u05c7\u0610-\u061a\u064b-\u065f\u0670\u06d6-\u06dc\u06df-\u06e4\u06e7-\u06e8\u06ea-\u06ed\u0711\u0730-\u074a\u07a6-\u07b0\u07eb-\u07f3\u0816-\u0819\u081b-\u0823\u0825-\u0827\u0829-\u082d\u0859-\u085b\u08e3-\u0902\u093a\u093c\u0941-\u0948\u094d\u0951-\u0957\u0962-\u0963\u0981\u09bc\u09be\u09c1-\u09c4\u09cd\u09d7\u09e2-\u09e3\u0a01-\u0a02\u0a3c\u0a41-\u0a42\u0a47-\u0a48\u0a4b-\u0a4d\u0a51\u0a70-\u0a71\u0a75\u0a81-\u0a82\u0abc\u0ac1-\u0ac5\u0ac7-\u0ac8\u0acd\u0ae2-\u0ae3\u0b01\u0b3c\u0b3e\u0b3f\u0b41-\u0b44\u0b4d\u0b56\u0b57\u0b62-\u0b63\u0b82\u0bbe\u0bc0\u0bcd\u0bd7\u0c00\u0c3e-\u0c40\u0c46-\u0c48\u0c4a-\u0c4d\u0c55-\u0c56\u0c62-\u0c63\u0c81\u0cbc\u0cbf\u0cc2\u0cc6\u0ccc-\u0ccd\u0cd5-\u0cd6\u0ce2-\u0ce3\u0d01\u0d3e\u0d41-\u0d44\u0d4d\u0d57\u0d62-\u0d63\u0dca\u0dcf\u0dd2-\u0dd4\u0dd6\u0ddf\u0e31\u0e34-\u0e3a\u0e47-\u0e4e\u0eb1\u0eb4-\u0eb9\u0ebb-\u0ebc\u0ec8-\u0ecd\u0f18-\u0f19\u0f35\u0f37\u0f39\u0f71-\u0f7e\u0f80-\u0f84\u0f86-\u0f87\u0f8d-\u0f97\u0f99-\u0fbc\u0fc6\u102d-\u1030\u1032-\u1037\u1039-\u103a\u103d-\u103e\u1058-\u1059\u105e-\u1060\u1071-\u1074\u1082\u1085-\u1086\u108d\u109d\u135d-\u135f\u1712-\u1714\u1732-\u1734\u1752-\u1753\u1772-\u1773\u17b4-\u17b5\u17b7-\u17bd\u17c6\u17c9-\u17d3\u17dd\u180b-\u180d\u18a9\u1920-\u1922\u1927-\u1928\u1932\u1939-\u193b\u1a17-\u1a18\u1a1b\u1a56\u1a58-\u1a5e\u1a60\u1a62\u1a65-\u1a6c\u1a73-\u1a7c\u1a7f\u1ab0-\u1abd\u1abe\u1b00-\u1b03\u1b34\u1b36-\u1b3a\u1b3c\u1b42\u1b6b-\u1b73\u1b80-\u1b81\u1ba2-\u1ba5\u1ba8-\u1ba9\u1bab-\u1bad\u1be6\u1be8-\u1be9\u1bed\u1bef-\u1bf1\u1c2c-\u1c33\u1c36-\u1c37\u1cd0-\u1cd2\u1cd4-\u1ce0\u1ce2-\u1ce8\u1ced\u1cf4\u1cf8-\u1cf9\u1dc0-\u1df5\u1dfc-\u1dff\u200c-\u200d\u20d0-\u20dc\u20dd-\u20e0\u20e1\u20e2-\u20e4\u20e5-\u20f0\u2cef-\u2cf1\u2d7f\u2de0-\u2dff\u302a-\u302d\u302e-\u302f\u3099-\u309a\ua66f\ua670-\ua672\ua674-\ua67d\ua69e-\ua69f\ua6f0-\ua6f1\ua802\ua806\ua80b\ua825-\ua826\ua8c4\ua8e0-\ua8f1\ua926-\ua92d\ua947-\ua951\ua980-\ua982\ua9b3\ua9b6-\ua9b9\ua9bc\ua9e5\uaa29-\uaa2e\uaa31-\uaa32\uaa35-\uaa36\uaa43\uaa4c\uaa7c\uaab0\uaab2-\uaab4\uaab7-\uaab8\uaabe-\uaabf\uaac1\uaaec-\uaaed\uaaf6\uabe5\uabe8\uabed\ufb1e\ufe00-\ufe0f\ufe20-\ufe2f\uff9e-\uff9f]"),
            b = function (b) {
                return "string" == typeof b && b.charCodeAt(0) >= 768 && a.test(b)
            };
        return {
            isExtendingChar: b
        }
    }), g("3q", [], function () {
        var a = [].slice,
            b = function (a) {
                return function () {
                    return a
                }
            },
            c = function (a) {
                return function (b) {
                    return !a(b)
                }
            },
            d = function (a, b) {
                return function (c) {
                    return a(b(c))
                }
            },
            e = function () {
                var b = a.call(arguments);
                return function (a) {
                    for (var c = 0; c < b.length; c++)
                        if (b[c](a)) return !0;
                    return !1
                }
            },
            f = function () {
                var b = a.call(arguments);
                return function (a) {
                    for (var c = 0; c < b.length; c++)
                        if (!b[c](a)) return !1;
                    return !0
                }
            },
            g = function (b) {
                var c = a.call(arguments);
                return c.length - 1 >= b.length ? b.apply(this, c.slice(1)) : function () {
                    var a = c.concat([].slice.call(arguments));
                    return g.apply(this, a)
                }
            },
            h = function () {};
        return {
            constant: b,
            negate: c,
            and: f,
            or: e,
            curry: g,
            compose: d,
            noop: h
        }
    }), g("32", ["3n", "m", "1y", "3o", "2v", "3p", "3q"], function (a, b, c, d, e, f, g) {
        var h = c.isElement,
            i = a.isCaretCandidate,
            j = c.matchStyleValues("display", "block table"),
            k = c.matchStyleValues("float", "left right"),
            l = g.and(h, i, g.negate(k)),
            m = g.negate(c.matchStyleValues("white-space", "pre pre-line pre-wrap")),
            n = c.isText,
            o = c.isBr,
            p = b.nodeIndex,
            q = e.getNode,
            r = function (a) {
                return "createRange" in a ? a.createRange() : b.DOM.createRng()
            },
            s = function (a) {
                return a && /[\r\n\t ]/.test(a)
            },
            t = function (a) {
                var b, c = a.startContainer,
                    d = a.startOffset;
                return !!(s(a.toString()) && m(c.parentNode) && (b = c.data, s(b[d - 1]) || s(b[d + 1])))
            },
            u = function (a) {
                var b, c, e = [],
                    g = function (a) {
                        var b, c = a.ownerDocument,
                            e = r(c),
                            f = c.createTextNode("\xa0"),
                            g = a.parentNode;
                        return g.insertBefore(f, a), e.setStart(f, 0), e.setEnd(f, 1), b = d.clone(e.getBoundingClientRect()), g.removeChild(f), b
                    },
                    i = function (a) {
                        var b, c;
                        return c = a.getClientRects(), b = c.length > 0 ? d.clone(c[0]) : d.clone(a.getBoundingClientRect()), o(a) && 0 === b.left ? g(a) : b
                    },
                    k = function (a, b) {
                        return a = d.collapse(a, b), a.width = 1, a.right = a.left + 1, a
                    },
                    m = function (a) {
                        0 !== a.height && (e.length > 0 && d.isEqual(a, e[e.length - 1]) || e.push(a))
                    },
                    p = function (a, b) {
                        var c = r(a.ownerDocument);
                        if (b < a.data.length) {
                            if (f.isExtendingChar(a.data[b])) return e;
                            if (f.isExtendingChar(a.data[b - 1]) && (c.setStart(a, b), c.setEnd(a, b + 1), !t(c))) return m(k(i(c), !1)), e
                        }
                        b > 0 && (c.setStart(a, b - 1), c.setEnd(a, b), t(c) || m(k(i(c), !1))), b < a.data.length && (c.setStart(a, b), c.setEnd(a, b + 1), t(c) || m(k(i(c), !0)))
                    };
                if (n(a.container())) return p(a.container(), a.offset()), e;
                if (h(a.container()))
                    if (a.isAtEnd()) c = q(a.container(), a.offset()), n(c) && p(c, c.data.length), l(c) && !o(c) && m(k(i(c), !1));
                    else {
                        if (c = q(a.container(), a.offset()), n(c) && p(c, 0), l(c) && a.isAtEnd()) return m(k(i(c), !1)), e;
                        b = q(a.container(), a.offset() - 1), l(b) && !o(b) && (j(b) || j(c) || !l(c)) && m(k(i(b), !1)), l(c) && m(k(i(c), !0))
                    } return e
            },
            v = function (a, b, c) {
                var d = function () {
                        return n(a) ? 0 === b : 0 === b
                    },
                    e = function () {
                        return n(a) ? b >= a.data.length : b >= a.childNodes.length
                    },
                    f = function () {
                        var c;
                        return c = r(a.ownerDocument), c.setStart(a, b), c.setEnd(a, b), c
                    },
                    h = function () {
                        return c || (c = u(new v(a, b))), c
                    },
                    i = function () {
                        return h().length > 0
                    },
                    j = function (c) {
                        return c && a === c.container() && b === c.offset()
                    },
                    k = function (c) {
                        return q(a, c ? b - 1 : b)
                    };
                return {
                    container: g.constant(a),
                    offset: g.constant(b),
                    toRange: f,
                    getClientRects: h,
                    isVisible: i,
                    isAtStart: d,
                    isAtEnd: e,
                    isEqual: j,
                    getNode: k
                }
            };
        return v.fromRangeStart = function (a) {
            return new v(a.startContainer, a.startOffset)
        }, v.fromRangeEnd = function (a) {
            return new v(a.endContainer, a.endOffset)
        }, v.after = function (a) {
            return new v(a.parentNode, p(a) + 1)
        }, v.before = function (a) {
            return new v(a.parentNode, p(a))
        }, v.isAtStart = function (a) {
            return !!a && a.isAtStart()
        }, v.isAtEnd = function (a) {
            return !!a && a.isAtEnd()
        }, v.isTextPosition = function (a) {
            return !!a && c.isText(a.container())
        }, v
    }), g("5b", ["3q", "s", "1y", "32", "46", "3n"], function (a, b, c, d, e, f) {
        var g = c.isContentEditableTrue,
            h = c.isContentEditableFalse,
            i = c.matchStyleValues("display", "block table table-cell table-caption list-item"),
            j = e.isCaretContainer,
            k = e.isCaretContainerBlock,
            l = a.curry,
            m = c.isElement,
            n = f.isCaretCandidate,
            o = function (a) {
                return a > 0
            },
            p = function (a) {
                return a < 0
            },
            q = function (a, b) {
                for (var c; c = a(b);)
                    if (!k(c)) return c;
                return null
            },
            r = function (a, c, d, e, f) {
                var g = new b(a, e);
                if (p(c)) {
                    if ((h(a) || k(a)) && (a = q(g.prev, !0), d(a))) return a;
                    for (; a = q(g.prev, f);)
                        if (d(a)) return a
                }
                if (o(c)) {
                    if ((h(a) || k(a)) && (a = q(g.next, !0), d(a))) return a;
                    for (; a = q(g.next, f);)
                        if (d(a)) return a
                }
                return null
            },
            s = function (a, b) {
                for (a = a.parentNode; a && a != b; a = a.parentNode)
                    if (g(a)) return a;
                return b
            },
            t = function (a, b) {
                for (; a && a != b;) {
                    if (i(a)) return a;
                    a = a.parentNode
                }
                return null
            },
            u = function (a, b, c) {
                return t(a.container(), c) == t(b.container(), c)
            },
            v = function (a, b, c) {
                return s(a.container(), c) == s(b.container(), c)
            },
            w = function (a, b) {
                var c, d;
                return b ? (c = b.container(), d = b.offset(), m(c) ? c.childNodes[d + a] : null) : null
            },
            x = function (a, b) {
                var c = b.ownerDocument.createRange();
                return a ? (c.setStartBefore(b), c.setEndBefore(b)) : (c.setStartAfter(b), c.setEndAfter(b)), c
            },
            y = function (a, b, c) {
                return t(b, a) == t(c, a)
            },
            z = function (a, b, c) {
                var d, e;
                for (e = a ? "previousSibling" : "nextSibling"; c && c != b;) {
                    if (d = c[e], j(d) && (d = d[e]), h(d)) {
                        if (y(b, d, c)) return d;
                        break
                    }
                    if (n(d)) break;
                    c = c.parentNode
                }
                return null
            },
            A = l(x, !0),
            B = l(x, !1),
            C = function (a, b, d) {
                var f, g, i, k, n = l(z, !0, b),
                    o = l(z, !1, b);
                if (g = d.startContainer, i = d.startOffset, e.isCaretContainerBlock(g)) {
                    if (m(g) || (g = g.parentNode), k = g.getAttribute("data-mce-caret"), "before" == k && (f = g.nextSibling, h(f))) return A(f);
                    if ("after" == k && (f = g.previousSibling, h(f))) return B(f)
                }
                if (!d.collapsed) return d;
                if (c.isText(g)) {
                    if (j(g)) {
                        if (1 === a) {
                            if (f = o(g)) return A(f);
                            if (f = n(g)) return B(f)
                        }
                        if (a === -1) {
                            if (f = n(g)) return B(f);
                            if (f = o(g)) return A(f)
                        }
                        return d
                    }
                    if (e.endsWithCaretContainer(g) && i >= g.data.length - 1) return 1 === a && (f = o(g)) ? A(f) : d;
                    if (e.startsWithCaretContainer(g) && i <= 1) return a === -1 && (f = n(g)) ? B(f) : d;
                    if (i === g.data.length) return f = o(g), f ? A(f) : d;
                    if (0 === i) return f = n(g), f ? B(f) : d
                }
                return d
            },
            D = function (a, b) {
                return h(w(a, b))
            };
        return {
            isForwards: o,
            isBackwards: p,
            findNode: r,
            getEditingHost: s,
            getParentBlock: t,
            isInSameBlock: u,
            isInSameEditingHost: v,
            isBeforeContentEditableFalse: l(D, 0),
            isAfterContentEditableFalse: l(D, -1),
            normalizeRange: C
        }
    }), g("3r", ["1y", "3n", "32", "5b", "1r", "3q"], function (a, b, c, d, e, f) {
        var g = a.isContentEditableFalse,
            h = a.isText,
            i = a.isElement,
            j = a.isBr,
            k = d.isForwards,
            l = d.isBackwards,
            m = b.isCaretCandidate,
            n = b.isAtomic,
            o = b.isEditableCaretCandidate,
            p = function (a, b) {
                for (var c = []; a && a != b;) c.push(a), a = a.parentNode;
                return c
            },
            q = function (a, b) {
                return a.hasChildNodes() && b < a.childNodes.length ? a.childNodes[b] : null
            },
            r = function (a, b) {
                if (k(a)) {
                    if (m(b.previousSibling) && !h(b.previousSibling)) return c.before(b);
                    if (h(b)) return c(b, 0)
                }
                if (l(a)) {
                    if (m(b.nextSibling) && !h(b.nextSibling)) return c.after(b);
                    if (h(b)) return c(b, b.data.length)
                }
                return l(a) ? j(b) ? c.before(b) : c.after(b) : c.before(b)
            },
            s = function (b, e) {
                var f;
                return !!a.isBr(b) && (f = t(1, c.after(b), e), !!f && !d.isInSameBlock(c.before(b), c.before(f), e))
            },
            t = function (a, b, u) {
                var v, w, x, y, z, A, B;
                if (!i(u) || !b) return null;
                if (b.isEqual(c.after(u)) && u.lastChild) {
                    if (B = c.after(u.lastChild), l(a) && m(u.lastChild) && i(u.lastChild)) return j(u.lastChild) ? c.before(u.lastChild) : B
                } else B = b;
                if (v = B.container(), w = B.offset(), h(v)) {
                    if (l(a) && w > 0) return c(v, --w);
                    if (k(a) && w < v.length) return c(v, ++w);
                    x = v
                } else {
                    if (l(a) && w > 0 && (y = q(v, w - 1), m(y))) return !n(y) && (z = d.findNode(y, a, o, y)) ? h(z) ? c(z, z.data.length) : c.after(z) : h(y) ? c(y, y.data.length) : c.before(y);
                    if (k(a) && w < v.childNodes.length && (y = q(v, w), m(y))) return s(y, u) ? t(a, c.after(y), u) : !n(y) && (z = d.findNode(y, a, o, y)) ? h(z) ? c(z, 0) : c.before(z) : h(y) ? c(y, 0) : c.after(y);
                    x = B.getNode()
                }
                return (k(a) && B.isAtEnd() || l(a) && B.isAtStart()) && (x = d.findNode(x, a, f.constant(!0), u, !0), o(x)) ? r(a, x) : (y = d.findNode(x, a, o, u), A = e.last(e.filter(p(v, u), g)), !A || y && A.contains(y) ? y ? r(a, y) : null : B = k(a) ? c.after(A) : c.before(A))
            };
        return function (a) {
            return {
                next: function (b) {
                    return t(1, b, a)
                },
                prev: function (b) {
                    return t(-1, b, a)
                }
            }
        }
    }), g("3m", ["32", "3r", "1y", "1e"], function (a, b, c, d) {
        var e = function (a) {
                return a.firstChild && a.firstChild === a.lastChild
            },
            f = function (a) {
                return "br" === a.name || "\xa0" === a.value
            },
            g = function (a, b) {
                var c = a.getBlockElements();
                return c[b.name] && e(b) && f(b.firstChild)
            },
            h = function (a, b) {
                var c = a.getNonEmptyElements();
                return b && (b.isEmpty(c) || g(a, b))
            },
            i = function (a, b) {
                var c = b.firstChild,
                    d = b.lastChild;
                return c && "meta" === c.name && (c = c.next), d && "mce_marker" === d.attr("id") && (d = d.prev), h(a, d) && (d = d.prev), !(!c || c !== d) && ("ul" === c.name || "ol" === c.name)
            },
            j = function (a) {
                var b = a.firstChild,
                    c = a.lastChild;
                return b && "META" === b.nodeName && b.parentNode.removeChild(b), c && "mce_marker" === c.id && c.parentNode.removeChild(c), a
            },
            k = function (a, b, c) {
                var d = b.serialize(c),
                    e = a.createFragment(d);
                return j(e)
            },
            l = function (a) {
                return d.grep(a.childNodes, function (a) {
                    return "LI" === a.nodeName
                })
            },
            m = function (a) {
                return "\xa0" === a.data || c.isBr(a)
            },
            n = function (a) {
                return a && a.firstChild && a.firstChild === a.lastChild && m(a.firstChild)
            },
            o = function (a) {
                return !a.firstChild || n(a)
            },
            p = function (a) {
                return a.length > 0 && o(a[a.length - 1]) ? a.slice(0, -1) : a
            },
            q = function (a, b) {
                var c = a.getParent(b, a.isBlock);
                return c && "LI" === c.nodeName ? c : null
            },
            r = function (a, b) {
                return !!q(a, b)
            },
            s = function (a, b) {
                var c = b.cloneRange(),
                    d = b.cloneRange();
                return c.setStartBefore(a), d.setEndAfter(a), [c.cloneContents(), d.cloneContents()]
            },
            t = function (c, d) {
                var e = a.before(c),
                    f = new b(d),
                    g = f.next(e);
                return g ? g.toRange() : null
            },
            u = function (c, d) {
                var e = a.after(c),
                    f = new b(d),
                    g = f.prev(e);
                return g ? g.toRange() : null
            },
            v = function (a, b, c, e) {
                var f = s(a, e),
                    g = a.parentNode;
                return g.insertBefore(f[0], a), d.each(b, function (b) {
                    g.insertBefore(b, a)
                }), g.insertBefore(f[1], a), g.removeChild(a), u(b[b.length - 1], c)
            },
            w = function (a, b, c) {
                var e = a.parentNode;
                return d.each(b, function (b) {
                    e.insertBefore(b, a)
                }), t(a, c)
            },
            x = function (a, b, c, d) {
                return d.insertAfter(b.reverse(), a), u(b[0], c)
            },
            y = function (c, d, e, f) {
                var g = k(d, c, f),
                    h = q(d, e.startContainer),
                    i = p(l(g.firstChild)),
                    j = 1,
                    m = 2,
                    n = d.getRoot(),
                    o = function (c) {
                        var f = a.fromRangeStart(e),
                            g = new b(d.getRoot()),
                            i = c === j ? g.prev(f) : g.next(f);
                        return !i || q(d, i.getNode()) !== h
                    };
                return o(j) ? w(h, i, n) : o(m) ? x(h, i, n, d) : v(h, i, n, e)
            };
        return {
            isListFragment: i,
            insertAtCaret: y,
            isParentBlockLi: r,
            trimListItems: p,
            listItems: l
        }
    }), g("4n", ["1y", "m", "3q", "1r", "32"], function (a, b, c, d, e) {
        var f = a.isText,
            g = a.isBogus,
            h = b.nodeIndex,
            i = function (a) {
                var b = a.parentNode;
                return g(b) ? i(b) : b
            },
            j = function (a) {
                return a ? d.reduce(a.childNodes, function (a, b) {
                    return g(b) && "BR" != b.nodeName ? a = a.concat(j(b)) : a.push(b), a
                }, []) : []
            },
            k = function (a, b) {
                for (;
                    (a = a.previousSibling) && f(a);) b += a.data.length;
                return b
            },
            l = function (a) {
                return function (b) {
                    return a === b
                }
            },
            m = function (b) {
                var c, e, g;
                return c = j(i(b)), e = d.findIndex(c, l(b), b), c = c.slice(0, e + 1), g = d.reduce(c, function (a, b, d) {
                    return f(b) && f(c[d - 1]) && a++, a
                }, 0), c = d.filter(c, a.matchNodeNames(b.nodeName)), e = d.findIndex(c, l(b), b), e - g
            },
            n = function (a) {
                var b;
                return b = f(a) ? "text()" : a.nodeName.toLowerCase(), b + "[" + m(a) + "]"
            },
            o = function (a, b, c) {
                var d = [];
                for (b = b.parentNode; b != a && (!c || !c(b)); b = b.parentNode) d.push(b);
                return d
            },
            p = function (b, e) {
                var g, h, i, j, l, m = [];
                return g = e.container(), h = e.offset(), f(g) ? i = k(g, h) : (j = g.childNodes, h >= j.length ? (i = "after", h = j.length - 1) : i = "before", g = j[h]), m.push(n(g)), l = o(b, g), l = d.filter(l, c.negate(a.isBogus)), m = m.concat(d.map(l, function (a) {
                    return n(a)
                })), m.reverse().join("/") + "," + i
            },
            q = function (b, c, e) {
                var g = j(b);
                return g = d.filter(g, function (a, b) {
                    return !f(a) || !f(g[b - 1])
                }), g = d.filter(g, a.matchNodeNames(c)), g[e]
            },
            r = function (a, b) {
                for (var c, d = a, g = 0; f(d);) {
                    if (c = d.data.length, b >= g && b <= g + c) {
                        a = d, b -= g;
                        break
                    }
                    if (!f(d.nextSibling)) {
                        a = d, b = c;
                        break
                    }
                    g += c, d = d.nextSibling
                }
                return b > a.data.length && (b = a.data.length), new e(a, b)
            },
            s = function (a, b) {
                var c, g, i;
                return b ? (c = b.split(","), b = c[0].split("/"), i = c.length > 1 ? c[1] : "before", g = d.reduce(b, function (a, b) {
                    return (b = /([\w\-\(\)]+)\[([0-9]+)\]/.exec(b)) ? ("text()" === b[1] && (b[1] = "#text"), q(a, b[1], parseInt(b[2], 10))) : null
                }, a), g ? f(g) ? r(g, parseInt(i, 10)) : (i = "after" === i ? h(g) + 1 : h(g), new e(g.parentNode, i)) : null) : null
            };
        return {
            create: p,
            resolve: s
        }
    }), g("2b", ["1", "4n", "46", "32", "1y", "2v", "4b", "1e"], function (a, b, c, d, e, f, g, h) {
        var i = e.isContentEditableFalse,
            j = function (a, b, c) {
                var d, f;
                for (f = a(b.data.slice(0, c)).length, d = b.previousSibling; d && e.isText(d); d = d.previousSibling) f += a(d.data).length;
                return f
            },
            k = function (a, b, c, d, f) {
                var g, h = d[f ? "startContainer" : "endContainer"],
                    i = d[f ? "startOffset" : "endOffset"],
                    k = [],
                    l = 0,
                    m = a.getRoot();
                for (e.isText(h) ? k.push(c ? j(b, h, i) : i) : (g = h.childNodes, i >= g.length && g.length && (l = 1, i = Math.max(0, g.length - 1)), k.push(a.nodeIndex(g[i], c) + l)); h && h !== m; h = h.parentNode) k.push(a.nodeIndex(h, c));
                return k
            },
            l = function (a, b, c, d) {
                var e = b.dom,
                    f = {};
                return f.start = k(e, a, c, d, !0), b.isCollapsed() || (f.end = k(e, a, c, d, !1)), f
            },
            m = function (a) {
                e.isText(a) && 0 === a.data.length && a.parentNode.removeChild(a)
            },
            n = function (a, b, c) {
                var d = 0;
                return h.each(a.select(b), function (a) {
                    if ("all" !== a.getAttribute("data-mce-bogus")) return a !== c && void d++
                }), d
            },
            o = function (a, b) {
                var c, d, f, g = b ? "start" : "end";
                c = a[g + "Container"], d = a[g + "Offset"], e.isElement(c) && "TR" === c.nodeName && (f = c.childNodes, c = f[Math.min(b ? d : d - 1, f.length - 1)], c && (d = b ? 0 : c.childNodes.length, a["set" + (b ? "Start" : "End")](c, d)))
            },
            p = function (a) {
                return o(a, !0), o(a, !1), a
            },
            q = function (a, b) {
                var d;
                if (e.isElement(a) && (a = f.getNode(a, b), i(a))) return a;
                if (c.isCaretContainer(a)) {
                    if (e.isText(a) && c.isCaretContainerBlock(a) && (a = a.parentNode), d = a.previousSibling, i(d)) return d;
                    if (d = a.nextSibling, i(d)) return d
                }
            },
            r = function (a) {
                return q(a.startContainer, a.startOffset) || q(a.endContainer, a.endOffset)
            },
            s = function (a, b, c) {
                var d = c.getNode(),
                    e = d ? d.nodeName : null,
                    f = c.getRng();
                return i(d) || "IMG" === e ? {
                    name: e,
                    index: n(c.dom, e, d)
                } : (d = r(f), d ? (e = d.tagName, {
                    name: e,
                    index: n(c.dom, e, d)
                }) : l(a, c, b, f))
            },
            t = function (a) {
                var c = a.getRng();
                return {
                    start: b.create(a.dom.getRoot(), d.fromRangeStart(c)),
                    end: b.create(a.dom.getRoot(), d.fromRangeEnd(c))
                }
            },
            u = function (a) {
                return {
                    rng: a.getRng()
                }
            },
            v = function (a) {
                var b = a.dom,
                    c = a.getRng(),
                    d = b.uniqueId(),
                    e = a.isCollapsed(),
                    f = "overflow:hidden;line-height:0px",
                    g = a.getNode(),
                    h = g.nodeName,
                    i = "&#xFEFF;";
                if ("IMG" === h) return {
                    name: h,
                    index: n(b, h, g)
                };
                var j = p(c.cloneRange());
                if (!e) {
                    j.collapse(!1);
                    var k = b.create("span", {
                        "data-mce-type": "bookmark",
                        id: d + "_end",
                        style: f
                    }, i);
                    j.insertNode(k), m(k.nextSibling)
                }
                c = p(c), c.collapse(!0);
                var l = b.create("span", {
                    "data-mce-type": "bookmark",
                    id: d + "_start",
                    style: f
                }, i);
                return c.insertNode(l), m(l.previousSibling), a.moveToBookmark({
                    id: d,
                    keep: 1
                }), {
                    id: d
                }
            },
            w = function (a, b, c) {
                return 2 === b ? s(g.trim, c, a) : 3 === b ? t(a) : b ? u(a) : v(a)
            };
        return {
            getBookmark: w,
            getUndoBookmark: a.curry(s, a.identity, !0)
        }
    }), g("5c", ["2n"], function (a) {
        var b = function (a) {
                for (var b = [], c = function (a) {
                        b.push(a)
                    }, d = 0; d < a.length; d++) a[d].each(c);
                return b
            },
            c = function (b, c) {
                for (var d = 0; d < b.length; d++) {
                    var e = c(b[d], d);
                    if (e.isSome()) return e
                }
                return a.none()
            },
            d = function (b, c) {
                for (var d = [], e = 0; e < b.length; e++) {
                    var f = b[e];
                    if (!f.isSome()) return a.none();
                    d.push(f.getOrDie())
                }
                return a.some(c.apply(null, d))
            };
        return {
            cat: b,
            findMap: c,
            liftN: d
        }
    }), g("4p", ["2n", "5c", "b", "4n", "32", "1y", "1e"], function (a, b, c, d, e, f, g) {
        var h = function (a, b) {
                return !a.isBlock(b) || b.innerHTML || c.ie || (b.innerHTML = '<br data-mce-bogus="1" />'), b
            },
            i = function (a, b) {
                var c, e;
                return c = a.createRng(), e = d.resolve(a.getRoot(), b.start), c.setStart(e.container(), e.offset()), e = d.resolve(a.getRoot(), b.end), c.setEnd(e.container(), e.offset()), c
            },
            j = function (a, b, c, d) {
                var e, f, g, h, i = c[b ? "start" : "end"],
                    j = a.getRoot();
                if (i) {
                    for (g = i[0], f = j, e = i.length - 1; e >= 1; e--) {
                        if (h = f.childNodes, i[e] > h.length - 1) return;
                        f = h[i[e]]
                    }
                    3 === f.nodeType && (g = Math.min(i[0], f.nodeValue.length)), 1 === f.nodeType && (g = Math.min(i[0], f.childNodes.length)), b ? d.setStart(f, g) : d.setEnd(f, g)
                }
                return !0
            },
            k = function (b, d, h) {
                var i, j, k, l, m, n, o = b.get(h.id + "_" + d),
                    p = h.keep;
                if (o) {
                    if (i = o.parentNode, "start" === d ? (p ? (i = o.firstChild, j = 1) : j = b.nodeIndex(o), m = i, n = j) : (p ? (i = o.firstChild, j = 1) : j = b.nodeIndex(o), m = i, n = j), !p) {
                        for (l = o.previousSibling, k = o.nextSibling, g.each(g.grep(o.childNodes), function (a) {
                                f.isText(a) && (a.nodeValue = a.nodeValue.replace(/\uFEFF/g, ""))
                            }); o = b.get(h.id + "_" + d);) b.remove(o, 1);
                        l && k && l.nodeType === k.nodeType && f.isText(l) && !c.opera && (j = l.nodeValue.length, l.appendData(k.nodeValue), b.remove(k), "start" === d ? (m = l, n = j) : (m = l, n = j))
                    }
                    return a.some(e(m, n))
                }
                return a.none()
            },
            l = function (a, b) {
                return a.isSome() ? a : b
            },
            m = function (b, c) {
                var d = b.createRng();
                return j(b, !0, c, d) && j(b, !1, c, d) ? a.some(d) : a.none();
            },
            n = function (a, c) {
                var d = k(a, "start", c),
                    e = k(a, "end", c);
                return b.liftN([d, l(e, d)], function (b, c) {
                    var d = a.createRng();
                    return d.setStart(h(a, b.container()), b.offset()), d.setEnd(h(a, c.container()), c.offset()), d
                })
            },
            o = function (b, c) {
                return a.from(b.select(c.name)[c.index]).map(function (a) {
                    var c = b.createRng();
                    return c.selectNode(a), c
                })
            },
            p = function (b, c) {
                var d = b.dom;
                if (c) {
                    if (g.isArray(c.start)) return m(d, c);
                    if ("string" == typeof c.start) return a.some(i(d, c));
                    if (c.id) return n(d, c);
                    if (c.name) return o(d, c);
                    if (c.rng) return a.some(c.rng)
                }
                return a.none()
            };
        return {
            resolve: p
        }
    }), g("2r", ["2b", "4p"], function (a, b) {
        var c = function (b, c, d) {
                return a.getBookmark(b, c, d)
            },
            d = function (a, c) {
                b.resolve(a, c).each(function (b) {
                    a.setRng(b)
                })
            },
            e = function (a) {
                return a && "SPAN" === a.tagName && "bookmark" === a.getAttribute("data-mce-type")
            };
        return {
            getBookmark: c,
            moveToBookmark: d,
            isBookmarkNode: e
        }
    }), g("3s", ["2r", "1e"], function (a, b) {
        var c = b.each,
            d = function (b) {
                this.compare = function (d, e) {
                    if (d.nodeName != e.nodeName) return !1;
                    var f = function (a) {
                            var d = {};
                            return c(b.getAttribs(a), function (c) {
                                var e = c.nodeName.toLowerCase();
                                0 !== e.indexOf("_") && "style" !== e && 0 !== e.indexOf("data-") && (d[e] = b.getAttrib(a, e))
                            }), d
                        },
                        g = function (a, b) {
                            var c, d;
                            for (d in a)
                                if (a.hasOwnProperty(d)) {
                                    if (c = b[d], "undefined" == typeof c) return !1;
                                    if (a[d] != c) return !1;
                                    delete b[d]
                                } for (d in b)
                                if (b.hasOwnProperty(d)) return !1;
                            return !0
                        };
                    return !!g(f(d), f(e)) && (!!g(b.parseStyle(b.getAttrib(d, "style")), b.parseStyle(b.getAttrib(e, "style"))) && (!a.isBookmarkNode(d) && !a.isBookmarkNode(e)))
                }
            };
        return d
    }), g("41", ["3h"], function (a) {
        var b = function (b, c) {
                var d = a.parent(b);
                d.each(function (a) {
                    a.dom().insertBefore(c.dom(), b.dom())
                })
            },
            c = function (c, d) {
                var f = a.nextSibling(c);
                f.fold(function () {
                    var b = a.parent(c);
                    b.each(function (a) {
                        e(a, d)
                    })
                }, function (a) {
                    b(a, d)
                })
            },
            d = function (b, c) {
                var d = a.firstChild(b);
                d.fold(function () {
                    e(b, c)
                }, function (a) {
                    b.dom().insertBefore(c.dom(), a.dom())
                })
            },
            e = function (a, b) {
                a.dom().appendChild(b.dom())
            },
            f = function (c, d, f) {
                a.child(c, f).fold(function () {
                    e(c, d)
                }, function (a) {
                    b(a, d)
                })
            },
            g = function (a, c) {
                b(a, c), e(c, a)
            };
        return {
            before: b,
            after: c,
            prepend: d,
            append: e,
            appendAt: f,
            wrap: g
        }
    }), g("5d", ["1i", "41"], function (a, b) {
        var c = function (c, d) {
                a.each(d, function (a) {
                    b.before(c, a)
                })
            },
            d = function (c, d) {
                a.each(d, function (a, e) {
                    var f = 0 === e ? c : d[e - 1];
                    b.after(f, a)
                })
            },
            e = function (c, d) {
                a.each(d.slice().reverse(), function (a) {
                    b.prepend(c, a)
                })
            },
            f = function (c, d) {
                a.each(d, function (a) {
                    b.append(c, a)
                })
            };
        return {
            before: c,
            after: d,
            prepend: e,
            append: f
        }
    }), g("47", ["1i", "5d", "3h"], function (a, b, c) {
        var d = function (b) {
                b.dom().textContent = "", a.each(c.children(b), function (a) {
                    e(a)
                })
            },
            e = function (a) {
                var b = a.dom();
                null !== b.parentNode && b.parentNode.removeChild(b)
            },
            f = function (a) {
                var d = c.children(a);
                d.length > 0 && b.before(a, d), e(a)
            };
        return {
            empty: d,
            remove: e,
            unwrap: f
        }
    }), g("5e", ["3d", "2n", "5"], function (a, b, c) {
        return function (d, e) {
            var f = function (a) {
                    if (!d(a)) throw new c("Can only get " + e + " value of a " + e + " node");
                    return j(a).getOr("")
                },
                g = function (a) {
                    try {
                        return h(a)
                    } catch (a) {
                        return b.none()
                    }
                },
                h = function (a) {
                    return d(a) ? b.from(a.dom().nodeValue) : b.none()
                },
                i = a.detect().browser,
                j = i.isIE() && 10 === i.version.major ? g : h,
                k = function (a, b) {
                    if (!d(a)) throw new c("Can only set raw " + e + " value of a " + e + " node");
                    a.dom().nodeValue = b
                };
            return {
                get: f,
                getOption: j,
                set: k
            }
        }
    }), g("4e", ["3f", "5e"], function (a, b) {
        var c = b(a.isText, "text"),
            d = function (a) {
                return c.get(a)
            },
            e = function (a) {
                return c.getOption(a)
            },
            f = function (a, b) {
                c.set(a, b)
            };
        return {
            get: d,
            getOption: e,
            set: f
        }
    }), g("6c", ["1i", "51", "3h"], function (a, b, c) {
        var d = function (a) {
                return h(b.body(), a)
            },
            e = function (b, d, e) {
                return a.filter(c.parents(b, e), d)
            },
            f = function (b, d) {
                return a.filter(c.siblings(b), d)
            },
            g = function (b, d) {
                return a.filter(c.children(b), d)
            },
            h = function (b, d) {
                var e = [];
                return a.each(c.children(b), function (a) {
                    d(a) && (e = e.concat([a])), e = e.concat(h(a, d))
                }), e
            };
        return {
            all: d,
            ancestors: e,
            siblings: f,
            children: g,
            descendants: h
        }
    }), g("5f", ["6c", "2z"], function (a, b) {
        var c = function (a) {
                return b.all(a)
            },
            d = function (c, d, e) {
                return a.ancestors(c, function (a) {
                    return b.is(a, d)
                }, e)
            },
            e = function (c, d) {
                return a.siblings(c, function (a) {
                    return b.is(a, d)
                })
            },
            f = function (c, d) {
                return a.children(c, function (a) {
                    return b.is(a, d)
                })
            },
            g = function (a, c) {
                return b.all(c, a)
            };
        return {
            all: c,
            ancestors: d,
            siblings: e,
            children: f,
            descendants: g
        }
    }), g("3t", ["1i", "41", "47", "1v", "3f", "4e", "5f", "3h", "3l"], function (a, b, c, d, e, f, g, h, i) {
        var j = function (a) {
                for (var b = [], c = a.dom(); c;) b.push(d.fromDom(c)), c = c.lastChild;
                return b
            },
            k = function (b) {
                var d = g.descendants(b, "br"),
                    e = a.filter(j(b).slice(-1), i.isBr);
                d.length === e.length && a.each(e, c.remove)
            },
            l = function (a) {
                c.empty(a), b.append(a, d.fromHtml('<br data-mce-bogus="1">'))
            },
            m = function (a) {
                return e.isText(a) ? "\xa0" === f.get(a) : i.isBr(a)
            },
            n = function (b) {
                return 1 === a.filter(h.children(b), m).length
            },
            o = function (a) {
                h.lastChild(a).each(function (b) {
                    h.prevSibling(b).each(function (d) {
                        i.isBlock(a) && i.isBr(b) && i.isBlock(d) && c.remove(b)
                    })
                })
            };
        return {
            removeTrailingBr: k,
            fillWithPaddingBr: l,
            isPaddedElement: n,
            trimBlockTrailingBr: o
        }
    }), g("11", ["v", "1e"], function (a, b) {
        var c = b.makeMap;
        return function (b) {
            var d, e, f, g, h, i = [];
            return b = b || {}, d = b.indent, e = c(b.indent_before || ""), f = c(b.indent_after || ""), g = a.getEncodeFunc(b.entity_encoding || "raw", b.entities), h = "html" == b.element_format, {
                start: function (a, b, c) {
                    var j, k, l, m;
                    if (d && e[a] && i.length > 0 && (m = i[i.length - 1], m.length > 0 && "\n" !== m && i.push("\n")), i.push("<", a), b)
                        for (j = 0, k = b.length; j < k; j++) l = b[j], i.push(" ", l.name, '="', g(l.value, !0), '"');
                    !c || h ? i[i.length] = ">" : i[i.length] = " />", c && d && f[a] && i.length > 0 && (m = i[i.length - 1], m.length > 0 && "\n" !== m && i.push("\n"))
                },
                end: function (a) {
                    var b;
                    i.push("</", a, ">"), d && f[a] && i.length > 0 && (b = i[i.length - 1], b.length > 0 && "\n" !== b && i.push("\n"))
                },
                text: function (a, b) {
                    a.length > 0 && (i[i.length] = b ? a : g(a))
                },
                cdata: function (a) {
                    i.push("<![CDATA[", a, "]]>")
                },
                comment: function (a) {
                    i.push("<!--", a, "-->")
                },
                pi: function (a, b) {
                    b ? i.push("<?", a, " ", g(b), "?>") : i.push("<?", a, "?>"), d && i.push("\n")
                },
                doctype: function (a) {
                    i.push("<!DOCTYPE", a, ">", d ? "\n" : "")
                },
                reset: function () {
                    i.length = 0
                },
                getContent: function () {
                    return i.join("").replace(/\n$/, "")
                }
            }
        }
    }), g("z", ["11", "y"], function (a, b) {
        return function (c, d) {
            var e = this,
                f = new a(c);
            c = c || {}, c.validate = !("validate" in c) || c.validate, e.schema = d = d || new b, e.writer = f, e.serialize = function (a) {
                var b, e;
                e = c.validate, b = {
                    3: function (a) {
                        f.text(a.value, a.raw)
                    },
                    8: function (a) {
                        f.comment(a.value)
                    },
                    7: function (a) {
                        f.pi(a.name, a.value)
                    },
                    10: function (a) {
                        f.doctype(a.value)
                    },
                    4: function (a) {
                        f.cdata(a.value)
                    },
                    11: function (a) {
                        if (a = a.firstChild)
                            do g(a); while (a = a.next)
                    }
                }, f.reset();
                var g = function (a) {
                    var c, h, i, j, k, l, m, n, o, p = b[a.type];
                    if (p) p(a);
                    else {
                        if (c = a.name, h = a.shortEnded, i = a.attributes, e && i && i.length > 1 && (l = [], l.map = {}, o = d.getElementRule(a.name))) {
                            for (m = 0, n = o.attributesOrder.length; m < n; m++) j = o.attributesOrder[m], j in i.map && (k = i.map[j], l.map[j] = k, l.push({
                                name: j,
                                value: k
                            }));
                            for (m = 0, n = i.length; m < n; m++) j = i[m].name, j in l.map || (k = i.map[j], l.map[j] = k, l.push({
                                name: j,
                                value: k
                            }));
                            i = l
                        }
                        if (f.start(a.name, i, h), !h) {
                            if (a = a.firstChild)
                                do g(a); while (a = a.next);
                            f.end(c)
                        }
                    }
                };
                return 1 != a.type || c.inner ? b[11](a) : g(a), f.getContent()
            }
        }
    }), g("42", ["1", "2n", "3n", "32", "5b", "3r", "1y"], function (a, b, c, d, e, f, g) {
        var h = function (a, b, c) {
                var e = a ? d.before(c) : d.after(c);
                return o(a, b, e)
            },
            i = function (a) {
                return g.isBr(a) ? d.before(a) : d.after(a)
            },
            j = function (a) {
                return d.isTextPosition(a) ? 0 === a.offset() : c.isCaretCandidate(a.getNode())
            },
            k = function (a) {
                return d.isTextPosition(a) ? a.offset() === a.container().data.length : c.isCaretCandidate(a.getNode(!0))
            },
            l = function (a, b) {
                return !d.isTextPosition(a) && !d.isTextPosition(b) && a.getNode() === b.getNode(!0)
            },
            m = function (a) {
                return !d.isTextPosition(a) && g.isBr(a.getNode())
            },
            n = function (a, b, c) {
                return a ? !l(b, c) && !m(b) && k(b) && j(c) : !l(c, b) && j(b) && k(c)
            },
            o = function (a, c, d) {
                var e = new f(c);
                return b.from(a ? e.next(d) : e.prev(d))
            },
            p = function (a, c, d) {
                return o(a, c, d).bind(function (f) {
                    return e.isInSameBlock(d, f, c) && n(a, d, f) ? o(a, c, f) : b.some(f)
                })
            },
            q = function (a, e) {
                var f = a ? e.firstChild : e.lastChild;
                return g.isText(f) ? b.some(new d(f, a ? 0 : f.data.length)) : f ? c.isCaretCandidate(f) ? b.some(a ? d.before(f) : i(f)) : h(a, e, f) : b.none()
            };
        return {
            fromPosition: o,
            nextPosition: a.curry(o, !0),
            prevPosition: a.curry(o, !1),
            navigate: p,
            positionIn: q,
            firstPositionIn: a.curry(q, !0),
            lastPositionIn: a.curry(q, !1)
        }
    }), g("3u", ["1j", "42", "32", "5b"], function (a, b, c, d) {
        var e = function (b, c, d, e) {
                var f = a.createRange();
                return f.setStart(b, c), f.setEnd(d, e), f
            },
            f = function (a) {
                var f = c.fromRangeStart(a),
                    g = c.fromRangeEnd(a),
                    h = a.commonAncestorContainer;
                return b.fromPosition(!1, h, g).map(function (b) {
                    return !d.isInSameBlock(f, g, h) && d.isInSameBlock(f, b, h) ? e(f.container(), f.offset(), b.container(), b.offset()) : a
                }).getOr(a)
            },
            g = function (a) {
                return a.collapsed ? a : f(a)
            },
            h = function (a) {
                return g(a)
            };
        return {
            normalize: h
        }
    }), g("1w", ["2n", "1v", "b", "3m", "32", "3r", "3s", "1y", "3t", "z", "3u", "1e"], function (a, b, c, d, e, f, g, h, i, j, k, l) {
        var m = h.matchNodeNames("td th"),
            n = function (a, b, c) {
                if ("all" === c.getAttribute("data-mce-bogus")) c.parentNode.insertBefore(a.dom.createFragment(b), c);
                else {
                    var d = c.firstChild,
                        e = c.lastChild;
                    !d || d === e && "BR" === d.nodeName ? a.dom.setHTML(c, b) : a.selection.setContent(b)
                }
            },
            o = function (c, d) {
                a.from(c.getParent(d, "td,th")).map(b.fromDom).each(i.trimBlockTrailingBr)
            },
            p = function (a, b, h) {
                var i, p, q, r, s, t, u, v, w, x, y, z, A = a.schema.getTextInlineElements(),
                    B = a.selection,
                    C = a.dom,
                    D = function (a) {
                        var b, c, d;
                        b = B.getRng(!0), c = b.startContainer, d = b.startOffset;
                        var e = function (a) {
                            return c[a] && 3 == c[a].nodeType
                        };
                        return 3 == c.nodeType && (d > 0 ? a = a.replace(/^&nbsp;/, " ") : e("previousSibling") || (a = a.replace(/^ /, "&nbsp;")), d < c.length ? a = a.replace(/&nbsp;(<br>|)$/, " ") : e("nextSibling") || (a = a.replace(/(&nbsp;| )(<br>|)$/, "&nbsp;"))), a
                    },
                    E = function () {
                        var a, c, d;
                        a = B.getRng(!0), c = a.startContainer, d = a.startOffset, 3 == c.nodeType && a.collapsed && ("\xa0" === c.data[d] ? (c.deleteData(d, 1), /[\u00a0| ]$/.test(b) || (b += " ")) : "\xa0" === c.data[d - 1] && (c.deleteData(d - 1, 1), /[\u00a0| ]$/.test(b) || (b = " " + b)))
                    },
                    F = function () {
                        if (z) {
                            var b = a.getBody(),
                                c = new g(C);
                            l.each(C.select("*[data-mce-fragment]"), function (a) {
                                for (var d = a.parentNode; d && d != b; d = d.parentNode) A[a.nodeName.toLowerCase()] && c.compare(d, a) && C.remove(a, !0)
                            })
                        }
                    },
                    G = function (a) {
                        for (var b = a; b = b.walk();) 1 === b.type && b.attr("data-mce-fragment", "1")
                    },
                    H = function (a) {
                        l.each(a.getElementsByTagName("*"), function (a) {
                            a.removeAttribute("data-mce-fragment")
                        })
                    },
                    I = function (a) {
                        return !!a.getAttribute("data-mce-fragment")
                    },
                    J = function (b) {
                        return b && !a.schema.getShortEndedElements()[b.nodeName]
                    },
                    K = function (b) {
                        var d, g, h, i = function (b) {
                            for (var c = a.getBody(); b && b !== c; b = b.parentNode)
                                if ("false" === a.dom.getContentEditable(b)) return b;
                            return null
                        };
                        if (b) {
                            if (B.scrollIntoView(b), d = i(b)) return C.remove(b), void B.select(d);
                            v = C.createRng(), w = b.previousSibling, w && 3 == w.nodeType ? (v.setStart(w, w.nodeValue.length), c.ie || (x = b.nextSibling, x && 3 == x.nodeType && (w.appendData(x.data), x.parentNode.removeChild(x)))) : (v.setStartBefore(b), v.setEndBefore(b));
                            var j = function (b) {
                                var c = e.fromRangeStart(b),
                                    d = new f(a.getBody());
                                if (c = d.next(c)) return c.toRange()
                            };
                            g = C.getParent(b, C.isBlock), C.remove(b), g && C.isEmpty(g) && (a.$(g).empty(), v.setStart(g, 0), v.setEnd(g, 0), m(g) || I(g) || !(h = j(v)) ? C.add(g, C.create("br", {
                                "data-mce-bogus": "1"
                            })) : (v = h, C.remove(g))), B.setRng(v)
                        }
                    };
                if (/^ | $/.test(b) && (b = D(b)), i = a.parser, z = h.merge, p = new j({
                        validate: a.settings.validate
                    }, a.schema), y = '<span id="mce_marker" data-mce-type="bookmark">&#xFEFF;&#x200B;</span>', t = {
                        content: b,
                        format: "html",
                        selection: !0,
                        paste: h.paste
                    }, t = a.fire("BeforeSetContent", t), t.isDefaultPrevented()) return void a.fire("SetContent", {
                    content: t.content,
                    format: "html",
                    selection: !0,
                    paste: h.paste
                });
                b = t.content, b.indexOf("{$caret}") == -1 && (b += "{$caret}"), b = b.replace(/\{\$caret\}/, y), v = B.getRng();
                var L = v.startContainer || (v.parentElement ? v.parentElement() : null),
                    M = a.getBody();
                L === M && B.isCollapsed() && C.isBlock(M.firstChild) && J(M.firstChild) && C.isEmpty(M.firstChild) && (v = C.createRng(), v.setStart(M.firstChild, 0), v.setEnd(M.firstChild, 0), B.setRng(v)), B.isCollapsed() || (a.selection.setRng(k.normalize(a.selection.getRng())), a.getDoc().execCommand("Delete", !1, null), E()), q = B.getNode();
                var N = {
                    context: q.nodeName.toLowerCase(),
                    data: h.data,
                    insert: !0
                };
                if (s = i.parse(b, N), h.paste === !0 && d.isListFragment(a.schema, s) && d.isParentBlockLi(C, q)) return v = d.insertAtCaret(p, C, a.selection.getRng(!0), s), a.selection.setRng(v), void a.fire("SetContent", t);
                if (G(s), w = s.lastChild, "mce_marker" == w.attr("id"))
                    for (u = w, w = w.prev; w; w = w.walk(!0))
                        if (3 == w.type || !C.isBlock(w.name)) {
                            a.schema.isValidChild(w.parent.name, "span") && w.parent.insert(u, w, "br" === w.name);
                            break
                        } if (a._selectionOverrides.showBlockCaretContainer(q), N.invalid) {
                    for (B.setContent(y), q = B.getNode(), r = a.getBody(), 9 == q.nodeType ? q = w = r : w = q; w !== r;) q = w, w = w.parentNode;
                    b = q == r ? r.innerHTML : C.getOuterHTML(q), b = p.serialize(i.parse(b.replace(/<span (id="mce_marker"|id=mce_marker).+?<\/span>/i, function () {
                        return p.serialize(s)
                    }))), q == r ? C.setHTML(r, b) : C.setOuterHTML(q, b)
                } else b = p.serialize(s), n(a, b, q);
                F(), K(C.get("mce_marker")), H(a.getBody()), o(a.dom, a.selection.getStart()), a.fire("SetContent", t), a.addVisual()
            },
            q = function (a) {
                var b;
                return "string" != typeof a ? (b = l.extend({
                    paste: a.paste,
                    data: {
                        paste: a.paste
                    }
                }, a), {
                    content: a.content,
                    details: b
                }) : {
                    content: a,
                    details: {}
                }
            },
            r = function (a, b) {
                var c = q(b);
                p(a, c.content, c.details)
            };
        return {
            insertAtCaret: r
        }
    }), g("6d", ["28", "2n"], function (a, b) {
        return function (c, d, e, f, g) {
            return c(e, f) ? b.some(e) : a.isFunction(g) && g(e) ? b.none() : d(e, f, g)
        }
    }), g("5i", ["28", "1i", "1", "2n", "51", "31", "1v", "6d"], function (a, b, c, d, e, f, g, h) {
        var i = function (a) {
                return n(e.body(), a)
            },
            j = function (b, e, f) {
                for (var h = b.dom(), i = a.isFunction(f) ? f : c.constant(!1); h.parentNode;) {
                    h = h.parentNode;
                    var j = g.fromDom(h);
                    if (e(j)) return d.some(j);
                    if (i(j)) break
                }
                return d.none()
            },
            k = function (a, b, c) {
                var d = function (a) {
                    return b(a)
                };
                return h(d, j, a, b, c)
            },
            l = function (a, b) {
                var c = a.dom();
                return c.parentNode ? m(g.fromDom(c.parentNode), function (c) {
                    return !f.eq(a, c) && b(c)
                }) : d.none()
            },
            m = function (a, d) {
                var e = b.find(a.dom().childNodes, c.compose(d, g.fromDom));
                return e.map(g.fromDom)
            },
            n = function (a, b) {
                var c = function (a) {
                    for (var e = 0; e < a.childNodes.length; e++) {
                        if (b(g.fromDom(a.childNodes[e]))) return d.some(g.fromDom(a.childNodes[e]));
                        var f = c(a.childNodes[e]);
                        if (f.isSome()) return f
                    }
                    return d.none()
                };
                return c(a.dom())
            };
        return {
            first: i,
            ancestor: j,
            closest: k,
            sibling: l,
            child: m,
            descendant: n
        }
    }), g("21", ["1i", "1", "4g", "2n", "4h", "45", "28", "3d", "1e"], function (a, b, c, d, e, f, g, h, i) {
        var j = f.immutable("sections", "settings"),
            k = h.detect(),
            l = k.deviceType.isTouch(),
            m = ["lists", "autolink", "autosave"],
            n = {
                theme: "mobile"
            },
            o = function (b) {
                var c = g.isArray(b) ? b.join(" ") : b,
                    d = a.map(g.isString(c) ? c.split(" ") : [], e.trim);
                return a.filter(d, function (a) {
                    return a.length > 0
                })
            },
            p = function (c) {
                return a.filter(c, b.curry(a.contains, m))
            },
            q = function (b, d) {
                var e = c.bifilter(d, function (c, d) {
                    return a.contains(b, d)
                });
                return j(e.t, e.f)
            },
            r = function (a, b, c) {
                var d = a.sections(),
                    e = d.hasOwnProperty(b) ? d[b] : {};
                return i.extend({}, c, e)
            },
            s = function (a, b) {
                return a.sections().hasOwnProperty(b)
            },
            t = function (a, b, c) {
                return {
                    id: a,
                    theme: "modern",
                    delta_width: 0,
                    delta_height: 0,
                    popup_css: "",
                    plugins: "",
                    document_base_url: b,
                    add_form_submit_trigger: !0,
                    submit_patch: !0,
                    add_unload_trigger: !0,
                    convert_urls: !0,
                    relative_urls: !0,
                    remove_script_host: !0,
                    object_resizing: !0,
                    doctype: "<!DOCTYPE html>",
                    visual: !0,
                    font_size_style_values: "xx-small,x-small,small,medium,large,x-large,xx-large",
                    font_size_legacy_values: "xx-small,small,medium,large,x-large,xx-large,300%",
                    forced_root_block: "p",
                    hidden_input: !0,
                    padd_empty_editor: !0,
                    render_ui: !0,
                    indentation: "30px",
                    inline_styles: !0,
                    convert_fonts_to_spans: !0,
                    indent: "simple",
                    indent_before: "p,h1,h2,h3,h4,h5,h6,blockquote,div,title,style,pre,script,td,th,ul,ol,li,dl,dt,dd,area,table,thead,tfoot,tbody,tr,section,article,hgroup,aside,figure,figcaption,option,optgroup,datalist",
                    indent_after: "p,h1,h2,h3,h4,h5,h6,blockquote,div,title,style,pre,script,td,th,ul,ol,li,dl,dt,dd,area,table,thead,tfoot,tbody,tr,section,article,hgroup,aside,figure,figcaption,option,optgroup,datalist",
                    entity_encoding: "named",
                    url_converter: c.convertURL,
                    url_converter_scope: c,
                    ie7_compat: !0
                }
            },
            u = function (a, b) {
                var c = b.external_plugins ? b.external_plugins : {};
                return a && a.external_plugins ? i.extend({}, a.external_plugins, c) : c
            },
            v = function (a, b) {
                return [].concat(o(a)).concat(o(b))
            },
            w = function (a, b, c, d) {
                var e = o(c.forced_plugins),
                    f = o(d.plugins),
                    g = a && s(b, "mobile") ? p(f) : f,
                    h = v(e, g);
                return i.extend(d, {
                    plugins: h.join(" ")
                })
            },
            x = function (a, b) {
                var c = b.settings().inline;
                return a && s(b, "mobile") && !c
            },
            y = function (a, b, c, d) {
                var e = q(["mobile"], d),
                    f = i.extend(b, c, e.settings(), x(a, e) ? r(e, "mobile", n) : {}, {
                        validate: !0,
                        content_editable: e.settings().inline,
                        external_plugins: u(c, e.settings())
                    });
                return w(a, e, c, f)
            },
            z = function (a, b, c, d, e) {
                var f = t(b, c, a);
                return y(l, f, d, e)
            },
            A = function (a, b) {
                return d.from(a.settings[b])
            },
            B = function (a, b, c) {
                return d.from(b.settings[c]).filter(a)
            };
        return {
            getEditorSettings: z,
            get: A,
            getString: b.curry(B, g.isString),
            combineSettings: y
        }
    }), g("5j", [], function () {
        var a = /[\u0591-\u07FF\uFB1D-\uFDFF\uFE70-\uFEFC]/,
            b = function (b) {
                return a.test(b)
            };
        return {
            hasStrongRtl: b
        }
    }), g("44", ["1i", "1", "2n", "1v", "2z", "21", "46", "32", "5b", "m", "1y", "5j"], function (a, b, c, d, e, f, g, h, i, j, k, l) {
        var m = function (a, b) {
                var c = f.getString(a, "inline_boundaries_selector").getOr("a[href],code");
                return e.is(d.fromDom(b), c)
            },
            n = function (a) {
                return "rtl" === j.DOM.getStyle(a, "direction", !0) || l.hasStrongRtl(a.textContent)
            },
            o = function (b, c, d) {
                return a.filter(j.DOM.getParents(d.container(), "*", c), b)
            },
            p = function (a, b, d) {
                var e = o(a, b, d);
                return c.from(e[e.length - 1])
            },
            q = function (a, b, c) {
                var d = i.getParentBlock(b, a),
                    e = i.getParentBlock(c, a);
                return d && d === e
            },
            r = function (a) {
                return g.isBeforeInline(a) || g.isAfterInline(a)
            },
            s = function (a, b) {
                var c = b.container(),
                    d = b.offset();
                return a ? g.isCaretContainerInline(c) ? k.isText(c.nextSibling) ? new h(c.nextSibling, 0) : h.after(c) : g.isBeforeInline(b) ? new h(c, d + 1) : b : g.isCaretContainerInline(c) ? k.isText(c.previousSibling) ? new h(c.previousSibling, c.previousSibling.data.length) : h.before(c) : g.isAfterInline(b) ? new h(c, d - 1) : b
            },
            t = b.curry(s, !0),
            u = b.curry(s, !1);
        return {
            isInlineTarget: m,
            findRootInline: p,
            isRtl: n,
            isAtZwsp: r,
            normalizePosition: s,
            normalizeForwards: t,
            normalizeBackwards: u,
            hasSameParentBlock: q
        }
    }), g("3y", ["2n", "5c", "31", "1v", "5i", "42", "3l", "44"], function (a, b, c, d, e, f, g, h) {
        var i = function (a) {
                return function (b) {
                    return c.eq(a, d.fromDom(b.dom().parentNode))
                }
            },
            j = function (b, d) {
                return c.contains(b, d) ? e.closest(d, function (a) {
                    return g.isTextBlock(a) || g.isListItem(a)
                }, i(b)) : a.none()
            },
            k = function (a) {
                var b = a.getBody(),
                    c = b.firstChild && a.dom.isBlock(b.firstChild) ? b.firstChild : b;
                a.selection.setCursorLocation(c, 0)
            },
            l = function (a) {
                a.dom.isEmpty(a.getBody()) && (a.setContent(""), k(a))
            },
            m = function (a, c, d) {
                return b.liftN([f.firstPositionIn(d), f.lastPositionIn(d)], function (b, e) {
                    var g = h.normalizePosition(!0, b),
                        i = h.normalizePosition(!1, e),
                        j = h.normalizePosition(!1, c);
                    return a ? f.nextPosition(d, j).map(function (a) {
                        return a.isEqual(i) && c.isEqual(g)
                    }).getOr(!1) : f.prevPosition(d, j).map(function (a) {
                        return a.isEqual(g) && c.isEqual(i)
                    }).getOr(!1)
                }).getOr(!0)
            };
        return {
            getParentBlock: j,
            paddEmptyBody: l,
            willDeleteLastPositionInElement: m
        }
    }), g("62", ["5i", "2z", "6d"], function (a, b, c) {
        var d = function (a) {
                return b.one(a)
            },
            e = function (c, d, e) {
                return a.ancestor(c, function (a) {
                    return b.is(a, d)
                }, e)
            },
            f = function (c, d) {
                return a.sibling(c, function (a) {
                    return b.is(a, d)
                })
            },
            g = function (c, d) {
                return a.child(c, function (a) {
                    return b.is(a, d)
                })
            },
            h = function (a, c) {
                return b.one(c, a)
            },
            i = function (a, d, f) {
                return c(b.is, e, a, d, f)
            };
        return {
            first: d,
            ancestor: e,
            sibling: f,
            child: g,
            descendant: h,
            closest: i
        }
    }), g("6e", ["62"], function (a) {
        var b = function (b) {
                return a.first(b).isSome()
            },
            c = function (b, c, d) {
                return a.ancestor(b, c, d).isSome()
            },
            d = function (b, c) {
                return a.sibling(b, c).isSome()
            },
            e = function (b, c) {
                return a.child(b, c).isSome()
            },
            f = function (b, c) {
                return a.descendant(b, c).isSome()
            },
            g = function (b, c, d) {
                return a.closest(b, c, d).isSome()
            };
        return {
            any: b,
            ancestor: c,
            sibling: d,
            child: e,
            descendant: f,
            closest: g
        }
    }), g("5r", ["1", "31", "1v", "6e", "3n", "1y", "s"], function (a, b, c, d, e, f, g) {
        var h = function (e, f) {
                var g = c.fromDom(e),
                    h = c.fromDom(f);
                return d.ancestor(h, "pre,code", a.curry(b.eq, g))
            },
            i = function (a, b) {
                return f.isText(b) && /^[ \t\r\n]*$/.test(b.data) && h(a, b) === !1
            },
            j = function (a) {
                return f.isElement(a) && "A" === a.nodeName && a.hasAttribute("name")
            },
            k = function (a, b) {
                return e.isCaretCandidate(b) && i(a, b) === !1 || j(b) || l(b)
            },
            l = f.hasAttribute("data-mce-bookmark"),
            m = f.hasAttribute("data-mce-bogus"),
            n = f.hasAttributeValue("data-mce-bogus", "all"),
            o = function (a) {
                var b, c, d = 0;
                if (k(a, a)) return !1;
                if (c = a.firstChild, !c) return !0;
                b = new g(c, a);
                do
                    if (n(c)) c = b.next(!0);
                    else if (m(c)) c = b.next();
                else if (f.isBr(c)) d++, c = b.next();
                else {
                    if (k(a, c)) return !1;
                    c = b.next()
                }
                while (c);
                return d <= 1
            },
            p = function (a) {
                return o(a.dom())
            };
        return {
            isEmpty: p
        }
    }), g("5g", ["1i", "1", "2n", "5c", "45", "31", "1v", "3f", "5i", "3h", "42", "32", "3y", "5r", "1y"], function (a, b, c, d, e, f, g, h, i, j, k, l, m, n, o) {
        var p = e.immutable("block", "position"),
            q = e.immutable("from", "to"),
            r = function (a, b) {
                var c = g.fromDom(a),
                    d = g.fromDom(b.container());
                return m.getParentBlock(c, d).map(function (a) {
                    return p(a, b)
                })
            },
            s = function (a) {
                return f.eq(a.from().block(), a.to().block()) === !1
            },
            t = function (a) {
                return j.parent(a.from().block()).bind(function (b) {
                    return j.parent(a.to().block()).filter(function (a) {
                        return f.eq(b, a)
                    })
                }).isSome()
            },
            u = function (a) {
                return o.isContentEditableFalse(a.from().block()) === !1 && o.isContentEditableFalse(a.to().block()) === !1
            },
            v = function (a, b, d) {
                return o.isBr(d.position().getNode()) && n.isEmpty(d.block()) === !1 ? k.positionIn(!1, d.block().dom()).bind(function (e) {
                    return e.isEqual(d.position()) ? k.fromPosition(b, a, e).bind(function (b) {
                        return r(a, b)
                    }) : c.some(d)
                }).getOr(d) : d
            },
            w = function (a, b, c) {
                var e = r(a, l.fromRangeStart(c)),
                    f = e.bind(function (c) {
                        return k.fromPosition(b, a, c.position()).bind(function (c) {
                            return r(a, c).map(function (c) {
                                return v(a, b, c)
                            })
                        })
                    });
                return d.liftN([e, f], q).filter(function (a) {
                    return s(a) && t(a) && u(a)
                })
            },
            x = function (a, b, d) {
                return d.collapsed ? w(a, b, d) : c.none()
            };
        return {
            read: x
        }
    }), g("5s", ["1", "31", "3h"], function (a, b, c) {
        var d = function (a) {
                return a.slice(0, -1)
            },
            e = function (a, e, f) {
                return b.contains(e, a) ? d(c.parents(a, function (a) {
                    return f(a) || b.eq(a, e)
                })) : []
            },
            f = function (b, c) {
                return e(b, c, a.constant(!1))
            },
            g = function (a, b) {
                return [a].concat(f(a, b))
            };
        return {
            parentsUntil: e,
            parents: f,
            parentsAndSelf: g
        }
    }), g("5h", ["1i", "2n", "31", "41", "47", "1v", "3h", "42", "32", "3l", "5r", "1y", "3t", "5s"], function (a, b, c, d, e, f, g, h, i, j, k, l, m, n) {
        var o = function (b) {
                var c = g.children(b);
                return a.findIndex(c, j.isBlock).fold(function () {
                    return c
                }, function (a) {
                    return c.slice(0, a)
                })
            },
            p = function (b) {
                var c = o(b);
                return a.each(c, function (a) {
                    e.remove(a)
                }), c
            },
            q = function (a, b) {
                h.positionIn(a, b.dom()).each(function (a) {
                    var b = a.getNode();
                    l.isBr(b) && e.remove(f.fromDom(b))
                })
            },
            r = function (b, c) {
                var d = n.parentsAndSelf(c, b);
                return a.find(d.reverse(), k.isEmpty).each(e.remove)
            },
            s = function (a, d) {
                var e = g.parents(d, function (b) {
                    return c.eq(b, a)
                });
                return b.from(e[e.length - 2])
            },
            t = function (a, d) {
                return c.contains(d, a) ? g.parent(a).bind(function (e) {
                    return c.eq(e, d) ? b.some(a) : s(d, a)
                }) : b.none()
            },
            u = function (b, c, f) {
                if (k.isEmpty(f)) return e.remove(f), k.isEmpty(c) && m.fillWithPaddingBr(c), h.firstPositionIn(c.dom());
                q(!0, c), q(!1, f);
                var g = p(c);
                return t(c, f).fold(function () {
                    r(b, c);
                    var e = h.lastPositionIn(f.dom());
                    return a.each(g, function (a) {
                        d.append(f, a)
                    }), e
                }, function (e) {
                    var j = h.prevPosition(f.dom(), i.before(e.dom()));
                    return a.each(g, function (a) {
                        d.before(e, a)
                    }), r(b, c), j
                })
            },
            v = function (a, b, c, d) {
                return b ? u(a, d, c) : u(a, c, d)
            };
        return {
            mergeBlocks: v
        }
    }), g("3v", ["1v", "5g", "5h"], function (a, b, c) {
        var d = function (d, e) {
            var f, g = a.fromDom(d.getBody());
            return f = b.read(g.dom(), e, d.selection.getRng()).bind(function (a) {
                return c.mergeBlocks(g, e, a.from().block(), a.to().block())
            }), f.each(function (a) {
                d.selection.setRng(a.toRange())
            }), f.isSome()
        };
        return {
            backspaceDelete: d
        }
    }), g("3w", ["1", "5c", "31", "1v", "5i", "42", "32", "3y", "5h", "3l"], function (a, b, c, d, e, f, g, h, i, j) {
        var k = function (a, e) {
                var f = e.getRng();
                return b.liftN([h.getParentBlock(a, d.fromDom(f.startContainer)), h.getParentBlock(a, d.fromDom(f.endContainer))], function (b, d) {
                    return c.eq(b, d) === !1 && (f.deleteContents(), i.mergeBlocks(a, !0, b, d).each(function (a) {
                        e.setRng(a.toRange())
                    }), !0)
                }).getOr(!1)
            },
            l = function (b, f) {
                var g = d.fromDom(f),
                    h = a.curry(c.eq, b);
                return e.ancestor(g, j.isTableCell, h).isSome()
            },
            m = function (a, b) {
                return l(a, b.startContainer) || l(a, b.endContainer)
            },
            n = function (a, b) {
                var c = f.prevPosition(a.dom(), g.fromRangeStart(b)).isNone(),
                    d = f.nextPosition(a.dom(), g.fromRangeEnd(b)).isNone();
                return !m(a, b) && c && d
            },
            o = function (a) {
                return a.setContent(""), a.selection.setCursorLocation(), !0
            },
            p = function (a) {
                var b = d.fromDom(a.getBody()),
                    c = a.selection.getRng();
                return n(b, c) ? o(a) : k(b, a.selection)
            },
            q = function (a, b) {
                return !a.selection.isCollapsed() && p(a, a.selection.getRng())
            };
        return {
            backspaceDelete: q
        }
    }), g("5n", ["1i", "4g", "28", "4", "5", "3e"], function (a, b, c, d, e, f) {
        var g = function (g) {
            if (!c.isArray(g)) throw new e("cases must be an array");
            if (0 === g.length) throw new e("there must be at least one case");
            var h = [],
                i = {};
            return a.each(g, function (j, k) {
                var l = b.keys(j);
                if (1 !== l.length) throw new e("one and only one name per case");
                var m = l[0],
                    n = j[m];
                if (void 0 !== i[m]) throw new e("duplicate key detected:" + m);
                if ("cata" === m) throw new e("cannot have a case named cata (sorry)");
                if (!c.isArray(n)) throw new e("case arguments must be an array");
                h.push(m), i[m] = function () {
                    var c = arguments.length;
                    if (c !== n.length) throw new e("Wrong number of arguments to case " + m + ". Expected " + n.length + " (" + n + "), got " + c);
                    for (var i = new d(c), j = 0; j < i.length; j++) i[j] = arguments[j];
                    var l = function (c) {
                        var d = b.keys(c);
                        if (h.length !== d.length) throw new e("Wrong number of arguments to match. Expected: " + h.join(",") + "\nActual: " + d.join(","));
                        var f = a.forall(h, function (b) {
                            return a.contains(d, b)
                        });
                        if (!f) throw new e("Not all branches were specified when using match. Specified: " + d.join(", ") + "\nRequired: " + h.join(", "));
                        return c[m].apply(null, i)
                    };
                    return {
                        fold: function () {
                            if (arguments.length !== g.length) throw new e("Wrong number of arguments to fold. Expected " + g.length + ", got " + arguments.length);
                            var a = arguments[k];
                            return a.apply(null, i)
                        },
                        match: l,
                        log: function (a) {
                            f.log(a, {
                                constructors: h,
                                constructor: m,
                                params: i
                            })
                        }
                    }
                }
            }), i
        };
        return {
            generate: g
        }
    }), g("5k", ["5n", "2n", "1v", "42", "32", "5b", "3y", "5r", "1y"], function (a, b, c, d, e, f, g, h, i) {
        var j = a.generate([{
                remove: ["element"]
            }, {
                moveToElement: ["element"]
            }, {
                moveToPosition: ["position"]
            }]),
            k = function (a, b) {
                var c = b.getNode(a === !1),
                    d = a ? "after" : "before";
                return i.isElement(c) && c.getAttribute("data-mce-caret") === d
            },
            l = function (a, d, e, f) {
                var i = f.getNode(d === !1);
                return g.getParentBlock(c.fromDom(a), c.fromDom(e.getNode())).map(function (a) {
                    return h.isEmpty(a) ? j.remove(a.dom()) : j.moveToElement(i)
                }).orThunk(function () {
                    return b.some(j.moveToElement(i))
                })
            },
            m = function (a, c, e) {
                return d.fromPosition(c, a, e).bind(function (d) {
                    return c && i.isContentEditableFalse(d.getNode()) ? l(a, c, e, d) : c === !1 && i.isContentEditableFalse(d.getNode(!0)) ? l(a, c, e, d) : c && f.isAfterContentEditableFalse(e) ? b.some(j.moveToPosition(d)) : c === !1 && f.isBeforeContentEditableFalse(e) ? b.some(j.moveToPosition(d)) : b.none()
                })
            },
            n = function (a, c) {
                return a && i.isContentEditableFalse(c.nextSibling) ? b.some(j.moveToElement(c.nextSibling)) : a === !1 && i.isContentEditableFalse(c.previousSibling) ? b.some(j.moveToElement(c.previousSibling)) : b.none()
            },
            o = function (a, c, d) {
                return d.fold(function (a) {
                    return b.some(j.remove(a))
                }, function (a) {
                    return b.some(j.moveToElement(a))
                }, function (d) {
                    return f.isInSameBlock(c, d, a) ? b.none() : b.some(j.moveToPosition(d))
                })
            },
            p = function (a, c, d) {
                return k(c, d) ? n(c, d.getNode(c === !1)).fold(function () {
                    return m(a, c, d)
                }, b.some) : m(a, c, d).bind(function (b) {
                    return o(a, d, b)
                })
            },
            q = function (a, c, d) {
                var g = f.normalizeRange(c ? 1 : -1, a, d),
                    h = e.fromRangeStart(g);
                return c === !1 && f.isAfterContentEditableFalse(h) ? b.some(j.remove(h.getNode(!0))) : c && f.isBeforeContentEditableFalse(h) ? b.some(j.remove(h.getNode())) : p(a, c, h)
            };
        return {
            read: q
        }
    }), g("5l", ["1", "2n", "5c", "41", "47", "1v", "3f", "5i", "3h", "3n", "42", "32", "5r", "1y"], function (a, b, c, d, e, f, g, h, i, j, k, l, m, n) {
        var o = function (a, b) {
                var c = a.container(),
                    d = a.offset();
                return l.isTextPosition(a) === !1 && c === b.parentNode && d > l.before(b).offset()
            },
            p = function (a, b) {
                return o(b, a) ? new l(b.container(), b.offset() - 1) : b
            },
            q = function (a) {
                return n.isText(a) ? new l(a, 0) : l.before(a)
            },
            r = function (a) {
                return n.isText(a) ? new l(a, a.data.length) : l.after(a)
            },
            s = function (a) {
                return j.isCaretCandidate(a.previousSibling) ? b.some(r(a.previousSibling)) : a.previousSibling ? k.lastPositionIn(a.previousSibling) : b.none()
            },
            t = function (a) {
                return j.isCaretCandidate(a.nextSibling) ? b.some(q(a.nextSibling)) : a.nextSibling ? k.firstPositionIn(a.nextSibling) : b.none()
            },
            u = function (a, c) {
                var d = l.before(c.previousSibling ? c.previousSibling : c.parentNode);
                return k.prevPosition(a, d).fold(function () {
                    return k.nextPosition(a, l.after(c))
                }, b.some)
            },
            v = function (a, c) {
                return k.nextPosition(a, l.after(c)).fold(function () {
                    return k.prevPosition(a, l.before(c))
                }, b.some)
            },
            w = function (a, b) {
                return s(b).orThunk(function () {
                    return t(b)
                }).orThunk(function () {
                    return u(a, b)
                })
            },
            x = function (a, b) {
                return t(b).orThunk(function () {
                    return s(b)
                }).orThunk(function () {
                    return v(a, b)
                })
            },
            y = function (a, b, c) {
                return a ? x(b, c) : w(b, c)
            },
            z = function (b, c, d) {
                return y(b, c, d).map(a.curry(p, d))
            },
            A = function (a, b, c) {
                c.fold(function () {
                    a.focus()
                }, function (c) {
                    a.selection.setRng(c.toRange(), b)
                })
            },
            B = function (a) {
                return function (b) {
                    return b.dom() === a
                }
            },
            C = function (a, b) {
                return b && a.schema.getBlockElements().hasOwnProperty(g.name(b))
            },
            D = function (a) {
                if (m.isEmpty(a)) {
                    var c = f.fromHtml('<br data-mce-bogus="1">');
                    return e.empty(a), d.append(a, c), b.some(l.before(c.dom()))
                }
                return b.none()
            },
            E = function (a, b) {
                return c.liftN([i.prevSibling(a), i.nextSibling(a), b], function (b, c, d) {
                    var f, g = b.dom(),
                        h = c.dom();
                    return n.isText(g) && n.isText(h) ? (f = g.data.length, g.appendData(h.data), e.remove(c), e.remove(a), d.container() === h ? new l(g, f) : d) : (e.remove(a), d)
                }).orThunk(function () {
                    return e.remove(a), b
                })
            },
            F = function (c, d, e) {
                var f = z(d, c.getBody(), e.dom()),
                    g = h.ancestor(e, a.curry(C, c), B(c.getBody())),
                    i = E(e, f);
                c.dom.isEmpty(c.getBody()) ? (c.setContent(""), c.selection.setCursorLocation()) : g.bind(D).fold(function () {
                    A(c, d, i)
                }, function (a) {
                    A(c, d, b.some(a))
                })
            };
        return {
            deleteElement: F
        }
    }), g("3x", ["1i", "47", "1v", "5f", "32", "5k", "5l", "3y", "1y"], function (a, b, c, d, e, f, g, h, i) {
        var j = function (a, b) {
                return function (d) {
                    return a._selectionOverrides.hideFakeCaret(), g.deleteElement(a, b, c.fromDom(d)), !0
                }
            },
            k = function (a, b) {
                return function (c) {
                    var d = b ? e.before(c) : e.after(c);
                    return a.selection.setRng(d.toRange()), !0
                }
            },
            l = function (a) {
                return function (b) {
                    return a.selection.setRng(b.toRange()), !0
                }
            },
            m = function (a, b) {
                var c = f.read(a.getBody(), b, a.selection.getRng()).map(function (c) {
                    return c.fold(j(a, b), k(a, b), l(a))
                });
                return c.getOr(!1)
            },
            n = function (c) {
                a.each(d.descendants(c, ".mce-offscreen-selection"), b.remove)
            },
            o = function (a, b) {
                var d = a.selection.getNode();
                return !!i.isContentEditableFalse(d) && (n(c.fromDom(a.getBody())), g.deleteElement(a, b, c.fromDom(a.selection.getNode())), h.paddEmptyBody(a), !0)
            },
            p = function (a, b) {
                for (; b && b !== a;) {
                    if (i.isContentEditableTrue(b) || i.isContentEditableFalse(b)) return b;
                    b = b.parentNode
                }
                return null
            },
            q = function (a) {
                var b, c = p(a.getBody(), a.selection.getNode());
                return i.isContentEditableTrue(c) && a.dom.isBlock(c) && a.dom.isEmpty(c) && (b = a.dom.create("br", {
                    "data-mce-bogus": "1"
                }), a.dom.setHTML(c, ""), c.appendChild(b), a.selection.setRng(e.before(b).toRange())), !0
            },
            r = function (a, b) {
                return a.selection.isCollapsed() ? m(a, b) : o(a, b)
            };
        return {
            backspaceDelete: r,
            paddEmptyElement: q
        }
    }), g("6f", ["1", "1y", "4b"], function (a, b, c) {
        var d = b.isText,
            e = function (a) {
                return d(a) && a.data[0] === c.ZWSP
            },
            f = function (a) {
                return d(a) && a.data[a.data.length - 1] === c.ZWSP
            },
            g = function (a) {
                return a.ownerDocument.createTextNode(c.ZWSP)
            },
            h = function (a) {
                if (d(a.previousSibling)) return f(a.previousSibling) ? a.previousSibling : (a.previousSibling.appendData(c.ZWSP), a.previousSibling);
                if (d(a)) return e(a) ? a : (a.insertData(0, c.ZWSP), a);
                var b = g(a);
                return a.parentNode.insertBefore(b, a), b
            },
            i = function (a) {
                if (d(a.nextSibling)) return e(a.nextSibling) ? a.nextSibling : (a.nextSibling.insertData(0, c.ZWSP), a.nextSibling);
                if (d(a)) return f(a) ? a : (a.appendData(c.ZWSP), a);
                var b = g(a);
                return a.nextSibling ? a.parentNode.insertBefore(b, a.nextSibling) : a.parentNode.appendChild(b), b
            },
            j = function (a, b) {
                return a ? h(b) : i(b)
            };
        return {
            insertInline: j,
            insertInlineBefore: a.curry(j, !0),
            insertInlineAfter: a.curry(j, !1)
        }
    }), g("6g", ["1i", "46", "32", "1y", "4b"], function (a, b, c, d, e) {
        var f = d.isElement,
            g = d.isText,
            h = function (a) {
                var b = a.parentNode;
                b && b.removeChild(a)
            },
            i = function (a) {
                try {
                    return a.nodeValue
                } catch (a) {
                    return ""
                }
            },
            j = function (a, b) {
                0 === b.length ? h(a) : a.nodeValue = b
            },
            k = function (a) {
                var b = e.trim(a);
                return {
                    count: a.length - b.length,
                    text: b
                }
            },
            l = function (a, b) {
                return r(a), b
            },
            m = function (a, b) {
                var d = k(a.data.substr(0, b.offset())),
                    e = k(a.data.substr(b.offset())),
                    f = d.text + e.text;
                return f.length > 0 ? (j(a, f), new c(a, b.offset() - d.count)) : b
            },
            n = function (b, d) {
                var e = d.container(),
                    f = a.indexOf(e.childNodes, b).map(function (a) {
                        return a < d.offset() ? new c(e, d.offset() - 1) : d
                    }).getOr(d);
                return r(b), f
            },
            o = function (a, b) {
                return b.container() === a ? m(a, b) : l(a, b)
            },
            p = function (a, b) {
                return b.container() === a.parentNode ? n(a, b) : l(a, b)
            },
            q = function (a, b) {
                return c.isTextPosition(b) ? o(a, b) : p(a, b)
            },
            r = function (a) {
                if (f(a) && b.isCaretContainer(a) && (b.hasContent(a) ? a.removeAttribute("data-mce-caret") : h(a)), g(a)) {
                    var c = e.trim(i(a));
                    j(a, c)
                }
            };
        return {
            removeAndReposition: q,
            remove: r
        }
    }), g("5m", ["2n", "46", "6f", "6g", "42", "32", "1y", "44"], function (a, b, c, d, e, f, g, h) {
        var i = function (a, b) {
                return g.isText(a.container()) ? c.insertInline(b, a.container()) : c.insertInline(b, a.getNode())
            },
            j = function (a, c) {
                var d = c.get();
                return d && a.container() === d && b.isCaretContainerInline(d)
            },
            k = function (b, g) {
                return g.fold(function (e) {
                    d.remove(b.get());
                    var g = c.insertInlineBefore(e);
                    return b.set(g), a.some(new f(g, g.length - 1))
                }, function (a) {
                    return e.firstPositionIn(a).map(function (a) {
                        if (j(a, b)) return new f(b.get(), 1);
                        d.remove(b.get());
                        var c = i(a, !0);
                        return b.set(c), new f(c, 1)
                    })
                }, function (a) {
                    return e.lastPositionIn(a).map(function (a) {
                        if (j(a, b)) return new f(b.get(), b.get().length - 1);
                        d.remove(b.get());
                        var c = i(a, !1);
                        return b.set(c), new f(c, c.length - 1)
                    })
                }, function (e) {
                    d.remove(b.get());
                    var g = c.insertInlineAfter(e);
                    return b.set(g), a.some(new f(g, 1))
                })
            };
        return {
            renderCaret: k
        }
    }), g("4a", ["s"], function (a) {
        var b = function (a) {
                return a && /^(IMG)$/.test(a.nodeName)
            },
            c = function (c, d, e) {
                var f, h, i, j = e.startContainer,
                    k = e.startOffset;
                if ((e.startContainer !== e.endContainer || !b(e.startContainer.childNodes[e.startOffset])) && (3 === j.nodeType && k >= j.nodeValue.length && (k = c.nodeIndex(j), j = j.parentNode), 1 === j.nodeType))
                    for (i = j.childNodes, k < i.length ? (j = i[k], f = new a(j, c.getParent(j, c.isBlock))) : (j = i[i.length - 1], f = new a(j, c.getParent(j, c.isBlock)), f.next(!0)), h = f.current(); h; h = f.next())
                        if (3 === h.nodeType && !g(h)) return e.setStart(h, 0), void d.setRng(e)
            },
            d = function (a, b, c) {
                if (a)
                    for (b = b ? "nextSibling" : "previousSibling", a = c ? a : a[b]; a; a = a[b])
                        if (1 === a.nodeType || !g(a)) return a
            },
            e = function (a, b) {
                return b.nodeType && (b = b.nodeName), !!a.schema.getTextBlockElements()[b.toLowerCase()]
            },
            f = function (a, b, c) {
                return a.schema.isValidChild(b, c)
            },
            g = function (a) {
                return a && 3 === a.nodeType && /^([\t \r\n]+|)$/.test(a.nodeValue)
            },
            h = function (a, b) {
                return "string" != typeof a ? a = a(b) : b && (a = a.replace(/%(\w+)/g, function (a, c) {
                    return b[c] || a
                })), a
            },
            i = function (a, b) {
                return a = a || "", b = b || "", a = "" + (a.nodeName || a), b = "" + (b.nodeName || b), a.toLowerCase() === b.toLowerCase()
            },
            j = function (a, b, c) {
                return "color" !== c && "backgroundColor" !== c || (b = a.toHex(b)), "fontWeight" === c && 700 === b && (b = "bold"), "fontFamily" === c && (b = b.replace(/[\'\"]/g, "").replace(/,\s+/g, ",")), "" + b
            },
            k = function (a, b, c) {
                return j(a, a.getStyle(b, c), c)
            },
            l = function (a, b) {
                var c;
                return a.getParent(b, function (b) {
                    return c = a.getStyle(b, "text-decoration"), c && "none" !== c
                }), c
            },
            m = function (a, b, c) {
                return a.getParents(b, c, a.getRoot())
            };
        return {
            isInlineBlock: b,
            moveStart: c,
            getNonWhiteSpaceSibling: d,
            isTextBlock: e,
            isValid: f,
            isWhiteSpaceNode: g,
            replaceVars: h,
            isEq: i,
            normalizeStyleValue: j,
            getStyle: k,
            getTextDecoration: l,
            getParents: m
        }
    }), g("49", ["2r", "s", "4a", "2v"], function (a, b, c, d) {
        var e = a.isBookmarkNode,
            f = c.getParents,
            g = c.isWhiteSpaceNode,
            h = c.isTextBlock,
            i = function (a, b) {
                for ("undefined" == typeof b && (b = 3 === a.nodeType ? a.length : a.childNodes.length); a && a.hasChildNodes();) a = a.childNodes[b], a && (b = 3 === a.nodeType ? a.length : a.childNodes.length);
                return {
                    node: a,
                    offset: b
                }
            },
            j = function (a, b) {
                var c = i(a, b);
                if (c.node) {
                    for (; c.node && 0 === c.offset && c.node.previousSibling;) c = i(c.node.previousSibling);
                    c.node && c.offset > 0 && 3 === c.node.nodeType && " " === c.node.nodeValue.charAt(c.offset - 1) && c.offset > 1 && (a = c.node, a.splitText(c.offset - 1))
                }
                return a
            },
            k = function (a) {
                return "BR" === a.nodeName && a.getAttribute("data-mce-bogus") && !a.nextSibling
            },
            l = function (a, b) {
                for (var c = b; c;) {
                    if (1 === c.nodeType && a.getContentEditable(c)) return "false" === a.getContentEditable(c) ? c : b;
                    c = c.parentNode
                }
                return b
            },
            m = function (a, b, c, d) {
                var e, f, g = c.nodeValue;
                return "undefined" == typeof d && (d = a ? g.length : 0), a ? (e = g.lastIndexOf(" ", d), f = g.lastIndexOf("\xa0", d), e = e > f ? e : f, e === -1 || b || e++) : (e = g.indexOf(" ", d), f = g.indexOf("\xa0", d), e = e !== -1 && (f === -1 || e < f) ? e : f), e
            },
            n = function (a, c, d, e, f, g) {
                var h, i, j, k;
                if (3 === d.nodeType) {
                    if (j = m(f, g, d, e), j !== -1) return {
                        container: d,
                        offset: j
                    };
                    k = d
                }
                for (h = new b(d, a.getParent(d, a.isBlock) || c); i = h[f ? "prev" : "next"]();)
                    if (3 === i.nodeType) {
                        if (k = i, j = m(f, g, i), j !== -1) return {
                            container: i,
                            offset: j
                        }
                    } else if (a.isBlock(i)) break;
                if (k) return e = f ? 0 : k.length, {
                    container: k,
                    offset: e
                }
            },
            o = function (a, b, c, d, e) {
                var g, h, i, j;
                for (3 === d.nodeType && 0 === d.nodeValue.length && d[e] && (d = d[e]), g = f(a, d), h = 0; h < g.length; h++)
                    for (i = 0; i < b.length; i++)
                        if (j = b[i], !("collapsed" in j && j.collapsed !== c.collapsed) && a.is(g[h], j.selector)) return g[h];
                return d
            },
            p = function (a, b, d, e) {
                var g, i = a.dom,
                    j = i.getRoot();
                if (b[0].wrapper || (g = i.getParent(d, b[0].block, j)), !g) {
                    var k = i.getParent(d, "LI,TD,TH");
                    g = i.getParent(3 === d.nodeType ? d.parentNode : d, function (b) {
                        return b !== j && h(a, b)
                    }, k)
                }
                if (g && b[0].wrapper && (g = f(i, g, "ul,ol").reverse()[0] || g), !g)
                    for (g = d; g[e] && !i.isBlock(g[e]) && (g = g[e], !c.isEq(g, "br")););
                return g || d
            },
            q = function (a, b, c, d, f, h, i) {
                var j, l, m, n, o;
                if (j = l = i ? c : f, n = i ? "previousSibling" : "nextSibling", o = a.getRoot(), 3 === j.nodeType && !g(j) && (i ? d > 0 : h < j.nodeValue.length)) return j;
                for (;;) {
                    if (!b[0].block_expand && a.isBlock(l)) return l;
                    for (m = l[n]; m; m = m[n])
                        if (!e(m) && !g(m) && !k(m)) return l;
                    if (l === o || l.parentNode === o) {
                        j = l;
                        break
                    }
                    l = l.parentNode
                }
                return j
            },
            r = function (a, b, c, f) {
                var g, h = b.startContainer,
                    i = b.startOffset,
                    k = b.endContainer,
                    m = b.endOffset,
                    r = a.dom;
                return 1 === h.nodeType && h.hasChildNodes() && (h = d.getNode(h, i), 3 === h.nodeType && (i = 0)), 1 === k.nodeType && k.hasChildNodes() && (k = d.getNode(k, b.collapsed ? m : m - 1), 3 === k.nodeType && (m = k.nodeValue.length)), h = l(r, h), k = l(r, k), (e(h.parentNode) || e(h)) && (h = e(h) ? h : h.parentNode, h = h.nextSibling || h, 3 === h.nodeType && (i = 0)), (e(k.parentNode) || e(k)) && (k = e(k) ? k : k.parentNode, k = k.previousSibling || k, 3 === k.nodeType && (m = k.length)), c[0].inline && (b.collapsed && (g = n(r, a.getBody(), h, i, !0, f), g && (h = g.container, i = g.offset), g = n(r, a.getBody(), k, m, !1, f), g && (k = g.container, m = g.offset)), k = f ? k : j(k, m)), (c[0].inline || c[0].block_expand) && (c[0].inline && 3 === h.nodeType && 0 !== i || (h = q(r, c, h, i, k, m, !0)), c[0].inline && 3 === k.nodeType && m !== k.nodeValue.length || (k = q(r, c, h, i, k, m, !1))), c[0].selector && c[0].expand !== !1 && !c[0].inline && (h = o(r, c, b, h, "previousSibling"), k = o(r, c, b, k, "nextSibling")), (c[0].block || c[0].selector) && (h = p(a, c, h, "previousSibling"), k = p(a, c, k, "nextSibling"), c[0].block && (r.isBlock(h) || (h = q(r, c, h, i, k, m, !0)), r.isBlock(k) || (k = q(r, c, h, i, k, m, !1)))), 1 === h.nodeType && (i = r.nodeIndex(h), h = h.parentNode), 1 === k.nodeType && (m = r.nodeIndex(k) + 1, k = k.parentNode), {
                    startContainer: h,
                    startOffset: i,
                    endContainer: k,
                    endOffset: m
                }
            };
        return {
            expandRng: r
        }
    }), g("2i", ["4a"], function (a) {
        var b = a.isEq,
            c = function (a, b, c) {
                var d = a.formatter.get(c);
                if (d)
                    for (var e = 0; e < d.length; e++)
                        if (d[e].inherit === !1 && a.dom.is(b, d[e].selector)) return !0;
                return !1
            },
            d = function (a, b, d, e) {
                var f = a.dom.getRoot();
                return b !== f && (b = a.dom.getParent(b, function (b) {
                    return !!c(a, b, d) || (b.parentNode === f || !!g(a, b, d, e, !0))
                }), g(a, b, d, e))
            },
            e = function (a, c, d) {
                return !!b(c, d.inline) || (!!b(c, d.block) || (d.selector ? 1 === c.nodeType && a.is(c, d.selector) : void 0))
            },
            f = function (c, d, e, f, g, h) {
                var i, j, k, l = e[f];
                if (e.onmatch) return e.onmatch(d, e, f);
                if (l)
                    if ("undefined" == typeof l.length) {
                        for (i in l)
                            if (l.hasOwnProperty(i)) {
                                if (j = "attributes" === f ? c.getAttrib(d, i) : a.getStyle(c, d, i), g && !j && !e.exact) return;
                                if ((!g || e.exact) && !b(j, a.normalizeStyleValue(c, a.replaceVars(l[i], h), i))) return
                            }
                    } else
                        for (k = 0; k < l.length; k++)
                            if ("attributes" === f ? c.getAttrib(d, l[k]) : a.getStyle(c, d, l[k])) return e;
                return e
            },
            g = function (a, b, c, d, g) {
                var h, i, j, k, l = a.formatter.get(c),
                    m = a.dom;
                if (l && b)
                    for (i = 0; i < l.length; i++)
                        if (h = l[i], e(a.dom, b, h) && f(m, b, h, "attributes", g, d) && f(m, b, h, "styles", g, d)) {
                            if (k = h.classes)
                                for (j = 0; j < k.length; j++)
                                    if (!a.dom.hasClass(b, k[j])) return;
                            return h
                        }
            },
            h = function (a, b, c, e) {
                var f;
                return e ? d(a, e, b, c) : (e = a.selection.getNode(), !!d(a, e, b, c) || (f = a.selection.getStart(), !(f === e || !d(a, f, b, c))))
            },
            i = function (a, b, c) {
                var d, e = [],
                    f = {};
                return d = a.selection.getStart(), a.dom.getParent(d, function (d) {
                    var h, i;
                    for (h = 0; h < b.length; h++) i = b[h], !f[i] && g(a, d, i, c) && (f[i] = !0, e.push(i))
                }, a.dom.getRoot()), e
            },
            j = function (b, c) {
                var d, e, f, g, h, i = b.formatter.get(c),
                    j = b.dom;
                if (i)
                    for (d = b.selection.getStart(), e = a.getParents(j, d), g = i.length - 1; g >= 0; g--) {
                        if (h = i[g].selector, !h || i[g].defaultBlock) return !0;
                        for (f = e.length - 1; f >= 0; f--)
                            if (j.is(e[f], h)) return !0
                    }
                return !1
            };
        return {
            matchNode: g,
            matchName: e,
            match: h,
            matchAll: i,
            canApply: j,
            matchesUnInheritedFormatSelector: c
        }
    }), g("2x", ["1y"], function (a) {
        var b = function (a, b) {
                return a.splitText(b)
            },
            c = function (c) {
                var d = c.startContainer,
                    e = c.startOffset,
                    f = c.endContainer,
                    g = c.endOffset;
                return d === f && a.isText(d) ? e > 0 && e < d.nodeValue.length && (f = b(d, e), d = f.previousSibling, g > e ? (g -= e, d = f = b(f, g).previousSibling, g = f.nodeValue.length, e = 0) : g = 0) : (a.isText(d) && e > 0 && e < d.nodeValue.length && (d = b(d, e), e = 0), a.isText(f) && g > 0 && g < f.nodeValue.length && (f = b(f, g).previousSibling, g = f.nodeValue.length)), {
                    startContainer: d,
                    startOffset: e,
                    endContainer: f,
                    endOffset: g
                }
            };
        return {
            split: c
        }
    }), g("2f", ["1i", "41", "47", "1v", "3f", "48", "32", "1y", "3t", "s", "49", "4a", "2i", "2x", "4b", "3q"], function (a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p) {
        var q = o.ZWSP,
            r = "_mce_caret",
            s = function (a, b) {
                return a.importNode(b, !0)
            },
            t = function (a) {
                return 1 === a.nodeType && a.id === r
            },
            u = function (a) {
                for (var b = []; a;) {
                    if (3 === a.nodeType && a.nodeValue !== q || a.childNodes.length > 1) return [];
                    1 === a.nodeType && b.push(a), a = a.firstChild
                }
                return b
            },
            v = function (a) {
                return u(a).length > 0
            },
            w = function (a) {
                var b;
                if (a)
                    for (b = new j(a, a), a = b.current(); a; a = b.next())
                        if (3 === a.nodeType) return a;
                return null
            },
            x = function (a) {
                var c = d.fromTag("span");
                return f.setAll(c, {
                    id: r,
                    "data-mce-bogus": "1",
                    "data-mce-type": "format-caret"
                }), a && b.append(c, d.fromText(q)), c
            },
            y = function (a, b) {
                for (; b && b !== a;) {
                    if (b.id === r) return b;
                    b = b.parentNode
                }
                return null
            },
            z = function (a) {
                var b = w(a);
                return b && b.nodeValue.charAt(0) === q && b.deleteData(0, 1), b
            },
            A = function (a, b, c, e) {
                var f, g, h;
                f = b.getRng(!0), g = a.getParent(c, a.isBlock), v(c) ? (e !== !1 && (f.setStartBefore(c), f.setEndBefore(c)), a.remove(c)) : (h = z(c), f.startContainer === h && f.startOffset > 0 && f.setStart(h, f.startOffset - 1), f.endContainer === h && f.endOffset > 0 && f.setEnd(h, f.endOffset - 1), a.remove(c, !0)), g && a.isEmpty(g) && i.fillWithPaddingBr(d.fromDom(g)), b.setRng(f)
            },
            B = function (a, b, c, d, e) {
                if (d) A(b, c, d, e);
                else if (d = y(a, c.getStart()), !d)
                    for (; d = b.get(r);) A(b, c, d, !1)
            },
            C = function (a, b, c) {
                var e = a.dom,
                    f = e.getParent(c, p.curry(l.isTextBlock, a));
                f && e.isEmpty(f) ? c.parentNode.replaceChild(b, c) : (i.removeTrailingBr(d.fromDom(c)), e.isEmpty(c) ? c.parentNode.replaceChild(b, c) : e.insertAfter(b, c))
            },
            D = function (a, b) {
                return a.appendChild(b), b
            },
            E = function (b, c) {
                var d = a.foldr(b, function (a, b) {
                    return D(a, b.cloneNode(!1))
                }, c);
                return D(d, d.ownerDocument.createTextNode(q))
            },
            F = function (a, b, c) {
                var d, e, f, g, h, i, j, l = a.selection;
                d = l.getRng(!0), g = d.startOffset, i = d.startContainer, j = i.nodeValue, e = y(a.getBody(), l.getStart()), e && (f = w(e));
                var m = /[^\s\u00a0\u00ad\u200b\ufeff]/;
                j && g > 0 && g < j.length && m.test(j.charAt(g)) && m.test(j.charAt(g - 1)) ? (h = l.getBookmark(), d.collapse(!0), d = k.expandRng(a, d, a.formatter.get(b)), d = n.split(d), a.formatter.apply(b, c, d), l.moveToBookmark(h)) : (e && f.nodeValue === q ? a.formatter.apply(b, c, e) : (e = s(a.getDoc(), x(!0).dom()), f = e.firstChild, d.insertNode(e), g = 1, a.formatter.apply(b, c, e)), l.setCursorLocation(f, g))
            },
            G = function (a, b, c, d) {
                var e, f, g, h, i, j, l, o = a.dom,
                    p = a.selection,
                    q = p.getRng(!0),
                    r = [];
                for (e = q.startContainer, f = q.startOffset, i = e, 3 === e.nodeType && (f !== e.nodeValue.length && (h = !0), i = i.parentNode); i;) {
                    if (m.matchNode(a, i, b, c, d)) {
                        j = i;
                        break
                    }
                    i.nextSibling && (h = !0), r.push(i), i = i.parentNode
                }
                if (j)
                    if (h) g = p.getBookmark(), q.collapse(!0), q = k.expandRng(a, q, a.formatter.get(b), !0), q = n.split(q), a.formatter.remove(b, c, q), p.moveToBookmark(g);
                    else {
                        l = y(a.getBody(), j);
                        var s = x(!1).dom(),
                            t = E(r, s);
                        l ? C(a, s, l) : C(a, s, j), A(o, p, l, !1), p.setCursorLocation(t, 1), o.isEmpty(j) && o.remove(j)
                    }
            },
            H = function (a, b, c, d) {
                B(a, b, c, null, !1), 8 === d && c.isCollapsed() && c.getStart().innerHTML === q && B(a, b, c, y(a, c.getStart())), 37 !== d && 39 !== d || B(a, b, c, y(a, c.getStart()))
            },
            I = function (a) {
                var b = a.dom,
                    c = a.selection,
                    d = a.getBody();
                a.on("mouseup keydown", function (a) {
                    H(d, b, c, a.keyCode)
                })
            },
            J = function (a, e) {
                var f = x(!1),
                    h = E(e, f.dom());
                return b.before(d.fromDom(a), f), c.remove(d.fromDom(a)), g(h, 0)
            },
            K = function (a, b) {
                var c = a.schema.getTextInlineElements();
                return c.hasOwnProperty(e.name(b)) && !t(b.dom()) && !h.isBogus(b.dom())
            };
        return {
            setup: I,
            applyCaretFormat: F,
            removeCaretFormat: G,
            isCaretNode: t,
            getParentCaretContainer: y,
            replaceWithCaretFormat: J,
            isFormatElement: K
        }
    }), g("5o", ["2n"], function (a) {
        var b = function (b, c) {
            for (var d = 0; d < b.length; d++) {
                var e = b[d].apply(null, c);
                if (e.isSome()) return e
            }
            return a.none()
        };
        return {
            evaluateUntil: b
        }
    }), g("43", ["5n", "1", "2n", "5c", "42", "5b", "2f", "44", "5o"], function (a, b, c, d, e, f, g, h, i) {
        var j = a.generate([{
                before: ["element"]
            }, {
                start: ["element"]
            }, {
                end: ["element"]
            }, {
                after: ["element"]
            }]),
            k = function (a, b) {
                var c = f.getParentBlock(b, a);
                return c ? c : a
            },
            l = function (a, d, f) {
                var g = h.normalizeForwards(f),
                    i = k(d, g.container());
                return h.findRootInline(a, i, g).fold(function () {
                    return e.nextPosition(i, g).bind(b.curry(h.findRootInline, a, i)).map(function (a) {
                        return j.before(a)
                    })
                }, c.none)
            },
            m = function (a, b) {
                return null === g.getParentCaretContainer(a, b)
            },
            n = function (a, c, d) {
                return h.findRootInline(a, c, d).filter(b.curry(m, c))
            },
            o = function (a, b, d) {
                var f = h.normalizeBackwards(d);
                return n(a, b, f).bind(function (a) {
                    var b = e.prevPosition(a, f);
                    return b.isNone() ? c.some(j.start(a)) : c.none()
                })
            },
            p = function (a, b, d) {
                var f = h.normalizeForwards(d);
                return n(a, b, f).bind(function (a) {
                    var b = e.nextPosition(a, f);
                    return b.isNone() ? c.some(j.end(a)) : c.none()
                })
            },
            q = function (a, d, f) {
                var g = h.normalizeBackwards(f),
                    i = k(d, g.container());
                return h.findRootInline(a, i, g).fold(function () {
                    return e.prevPosition(i, g).bind(b.curry(h.findRootInline, a, i)).map(function (a) {
                        return j.after(a)
                    })
                }, c.none)
            },
            r = function (a) {
                return h.isRtl(t(a)) === !1
            },
            s = function (a, b, c) {
                var d = i.evaluateUntil([l, o, p, q], [a, b, c]);
                return d.filter(r)
            },
            t = function (a) {
                return a.fold(b.identity, b.identity, b.identity, b.identity)
            },
            u = function (a) {
                return a.fold(b.constant("before"), b.constant("start"), b.constant("end"), b.constant("after"))
            },
            v = function (a) {
                return a.fold(j.before, j.before, j.after, j.after)
            },
            w = function (a) {
                return a.fold(j.start, j.start, j.end, j.end)
            },
            x = function (a, b) {
                return u(a) === u(b) && t(a) === t(b)
            },
            y = function (a, b, c, e, f, g) {
                return d.liftN([h.findRootInline(b, c, e), h.findRootInline(b, c, f)], function (b, d) {
                    return b !== d && h.hasSameParentBlock(c, b, d) ? j.after(a ? b : d) : g
                }).getOr(g)
            },
            z = function (a, c) {
                return a.fold(b.constant(!0), function (a) {
                    return !x(a, c)
                })
            },
            A = function (a, c, d, f, g) {
                var i = h.normalizePosition(a, g),
                    j = e.fromPosition(a, d, i).map(b.curry(h.normalizePosition, a)),
                    k = j.fold(function () {
                        return f.map(v)
                    }, function (e) {
                        return s(c, d, e).map(b.curry(y, a, c, d, i, e)).filter(b.curry(z, f))
                    });
                return k.filter(r)
            },
            B = function (a, d) {
                return a ? d.fold(b.compose(c.some, j.start), c.none, b.compose(c.some, j.after), c.none) : d.fold(c.none, b.compose(c.some, j.before), c.none, b.compose(c.some, j.end))
            },
            C = function (a, c, d, e) {
                var f = h.normalizePosition(a, e),
                    g = s(c, d, f);
                return s(c, d, f).bind(b.curry(B, a)).orThunk(function () {
                    return A(a, c, d, g, e)
                })
            };
        return {
            readLocation: s,
            findLocation: C,
            prevLocation: b.curry(C, !1),
            nextLocation: b.curry(C, !0),
            getElement: t,
            outside: v,
            inside: w
        }
    }), g("2d", [], function () {
        var a = function (b) {
            var c = b,
                d = function () {
                    return c
                },
                e = function (a) {
                    c = a
                },
                f = function () {
                    return a(d())
                };
            return {
                get: d,
                set: e,
                clone: f
            }
        };
        return a
    }), g("6h", ["28", "46", "32"], function (a, b, c) {
        var d = function (b) {
                return a.isFunction(b.selection.getSel().modify)
            },
            e = function (a, b, d) {
                var e = a ? 1 : -1;
                return b.setRng(c(d.container(), d.offset() + e).toRange()), b.getSel().modify("move", a ? "forward" : "backward", "word"), !0
            },
            f = function (a, f) {
                var g = f.selection.getRng(),
                    h = a ? c.fromRangeEnd(g) : c.fromRangeStart(g);
                return !!d(f) && (a && b.isBeforeInline(h) ? e(!0, f.selection, h) : !(a || !b.isAfterInline(h)) && e(!1, f.selection, h))
            };
        return {
            hasSelectionModifyApi: d,
            moveByWord: f
        }
    }), g("5p", ["1i", "2d", "1", "6g", "32", "5m", "43", "44", "6h"], function (a, b, c, d, e, f, g, h, i) {
        var j = function (a, b) {
                var c = a.dom.createRng();
                c.setStart(b.container(), b.offset()), c.setEnd(b.container(), b.offset()), a.selection.setRng(c)
            },
            k = function (a) {
                return a.settings.inline_boundaries !== !1
            },
            l = function (a, b) {
                a ? b.setAttribute("data-mce-selected", "inline-boundary") : b.removeAttribute("data-mce-selected")
            },
            m = function (a, b, c) {
                return f.renderCaret(b, c).map(function (b) {
                    return j(a, b), c
                })
            },
            n = function (a, b, d) {
                var f = a.getBody(),
                    i = e.fromRangeStart(a.selection.getRng()),
                    j = c.curry(h.isInlineTarget, a),
                    k = g.findLocation(d, j, f, i);
                return k.bind(function (c) {
                    return m(a, b, c)
                })
            },
            o = function (b, d, e) {
                var f = a.filter(d.select('*[data-mce-selected="inline-boundary"]'), b),
                    g = a.filter(e, b);
                a.each(a.difference(f, g), c.curry(l, !1)), a.each(a.difference(g, f), c.curry(l, !0))
            },
            p = function (a, b) {
                if (a.selection.isCollapsed() && a.composing !== !0 && b.get()) {
                    var c = e.fromRangeStart(a.selection.getRng());
                    e.isTextPosition(c) && h.isAtZwsp(c) === !1 && (j(a, d.removeAndReposition(b.get(), c)), b.set(null))
                }
            },
            q = function (b, c, d, f) {
                if (c.selection.isCollapsed()) {
                    var h = a.filter(f, b);
                    a.each(h, function (a) {
                        var f = e.fromRangeStart(c.selection.getRng());
                        g.readLocation(b, c.getBody(), f).bind(function (a) {
                            return m(c, d, a)
                        })
                    })
                }
            },
            r = function (a, b, c) {
                return function () {
                    return !!k(a) && n(a, b, c).isSome()
                }
            },
            s = function (a, b, c) {
                return function () {
                    return !!k(b) && i.moveByWord(a, b)
                }
            },
            t = function (a) {
                var d = new b(null),
                    e = c.curry(h.isInlineTarget, a);
                return a.on("NodeChange", function (b) {
                    k(a) && (o(e, a.dom, b.parents), p(a, d), q(e, a, d, b.parents))
                }), d
            };
        return {
            move: r,
            moveNextWord: c.curry(s, !0),
            movePrevWord: c.curry(s, !1),
            setupSelectedState: t,
            setCaretPosition: j
        }
    }), g("3z", ["1", "2n", "5c", "1v", "1j", "46", "42", "32", "5b", "5l", "5m", "43", "5p", "44"], function (a, b, c, d, e, f, g, h, i, j, k, l, m, n) {
        var o = function (a) {
                return a.settings.inline_boundaries !== !1
            },
            p = function (a, b) {
                var c = e.createRange();
                return c.setStart(a.container(), a.offset()), c.setEnd(b.container(), b.offset()), c
            },
            q = function (a) {
                return c.liftN([g.firstPositionIn(a), g.lastPositionIn(a)], function (b, c) {
                    var d = n.normalizePosition(!0, b),
                        e = n.normalizePosition(!1, c);
                    return g.nextPosition(a, d).map(function (a) {
                        return a.isEqual(e)
                    }).getOr(!0)
                }).getOr(!0)
            },
            r = function (a, b) {
                return function (c) {
                    return k.renderCaret(b, c).map(function (b) {
                        return m.setCaretPosition(a, b), !0
                    }).getOr(!1)
                }
            },
            s = function (b, c, d, e) {
                var f = b.getBody(),
                    g = a.curry(n.isInlineTarget, b);
                b.undoManager.ignore(function () {
                    b.selection.setRng(p(d, e)), b.execCommand("Delete"), l.readLocation(g, f, h.fromRangeStart(b.selection.getRng())).map(l.inside).map(r(b, c))
                }), b.nodeChanged()
            },
            t = function (a, b) {
                var c = i.getParentBlock(b, a);
                return c ? c : a
            },
            u = function (c, e, f, h) {
                var i = t(c.getBody(), h.container()),
                    k = a.curry(n.isInlineTarget, c),
                    m = l.readLocation(k, i, h);
                return m.bind(function (c) {
                    return f ? c.fold(a.constant(b.some(l.inside(c))), b.none, a.constant(b.some(l.outside(c))), b.none) : c.fold(b.none, a.constant(b.some(l.outside(c))), b.none, a.constant(b.some(l.inside(c))))
                }).map(r(c, e)).getOrThunk(function () {
                    var a = g.navigate(f, i, h),
                        b = a.bind(function (a) {
                            return l.readLocation(k, i, a)
                        });
                    return m.isSome() && b.isSome() ? n.findRootInline(k, i, h).map(function (a) {
                        return !!q(a) && (j.deleteElement(c, f, d.fromDom(a)), !0)
                    }).getOr(!1) : b.bind(function (b) {
                        return a.map(function (a) {
                            return f ? s(c, e, h, a) : s(c, e, a, h), !0
                        })
                    }).getOr(!1)
                })
            },
            v = function (a, b, c) {
                if (a.selection.isCollapsed() && o(a)) {
                    var d = h.fromRangeStart(a.selection.getRng());
                    return u(a, b, c, d)
                }
                return !1
            };
        return {
            backspaceDelete: v
        }
    }), g("5q", ["5n", "1i", "1", "2n", "5c", "45", "31", "1v", "5f", "62"], function (a, b, c, d, e, f, g, h, i, j) {
        var k = f.immutable("start", "end"),
            l = f.immutable("rng", "table", "cells"),
            m = a.generate([{
                removeTable: ["element"]
            }, {
                emptyCells: ["cells"]
            }]),
            n = function (a, b) {
                return j.closest(h.fromDom(a), "td,th", b)
            },
            o = function (a, b) {
                return j.ancestor(a, "table", b)
            },
            p = function (a) {
                return g.eq(a.start(), a.end()) === !1
            },
            q = function (a, b) {
                return o(a.start(), b).bind(function (c) {
                    return o(a.end(), b).bind(function (a) {
                        return g.eq(c, a) ? d.some(c) : d.none()
                    })
                })
            },
            r = function (a, b) {
                return e.liftN([n(a.startContainer, b), n(a.endContainer, b)], k).filter(p)
            },
            s = function (a, b) {
                return q(a, b).bind(function (b) {
                    var c = i.descendants(b, "td,th");
                    return l(a, b, c)
                })
            },
            t = function (a, b) {
                var d = c.curry(g.eq, a);
                return r(b, d).map(function (a) {
                    return s(a, d)
                })
            },
            u = function (a, c) {
                return b.findIndex(a, function (a) {
                    return g.eq(a, c)
                })
            },
            v = function (a) {
                return e.liftN([u(a.cells(), a.rng().start()), u(a.cells(), a.rng().end())], function (b, c) {
                    return a.cells().slice(b, c + 1)
                })
            },
            w = function (a) {
                return v(a).bind(function (b) {
                    var c = a.cells();
                    return b.length === c.length ? m.removeTable(a.table()) : m.emptyCells(b)
                })
            },
            x = function (a) {
                return m.emptyCells(a)
            },
            y = function (a, b) {
                return t(a, b).map(w)
            };
        return {
            getActionFromRange: y,
            getActionFromCells: x
        }
    }), g("36", ["1i", "1v", "2v"], function (a, b, c) {
        var d = function (a) {
                var b = [];
                if (a)
                    for (var c = 0; c < a.rangeCount; c++) b.push(a.getRangeAt(c));
                return b
            },
            e = function (d) {
                return a.bind(d, function (a) {
                    var d = c.getSelectedNode(a);
                    return d ? [b.fromDom(d)] : []
                })
            },
            f = function (a) {
                return d(a).length > 1
            };
        return {
            getRanges: d,
            getSelectedNodes: e,
            hasMultipleRanges: f
        }
    }), g("5t", ["1i", "1v", "5f", "3l", "36"], function (a, b, c, d, e) {
        var f = function (b) {
                return a.filter(e.getSelectedNodes(b), d.isTableCell)
            },
            g = function (a) {
                var b = c.descendants(a, "td[data-mce-selected],th[data-mce-selected]");
                return b
            },
            h = function (a, b) {
                var c = g(b),
                    d = f(a);
                return c.length > 0 ? c : d
            },
            i = function (a) {
                return h(e.getRanges(a.selection.getSel()), b.fromDom(a.getBody()))
            };
        return {
            getCellsFromRanges: f,
            getCellsFromElement: g,
            getCellsFromElementOrRanges: h,
            getCellsFromEditor: i
        }
    }), g("40", ["1i", "1", "2n", "31", "1v", "3f", "42", "32", "5l", "5q", "3l", "5r", "3t", "5s", "5t"], function (a, b, c, d, e, f, g, h, i, j, k, l, m, n, o) {
        var p = function (b, c) {
                return a.each(c, m.fillWithPaddingBr), b.selection.setCursorLocation(c[0].dom(), 0), !0
            },
            q = function (a, b) {
                return i.deleteElement(a, !1, b), !0
            },
            r = function (a, c, d) {
                return j.getActionFromRange(c, d).map(function (c) {
                    return c.fold(b.curry(q, a), b.curry(p, a))
                })
            },
            s = function (a, b) {
                return y(a, b)
            },
            t = function (a, b, c, d) {
                return w(b, d).fold(function () {
                    return r(a, b, c)
                }, function (b) {
                    return s(a, b)
                }).getOr(!1)
            },
            u = function (a, b) {
                var c = e.fromDom(a.getBody()),
                    d = a.selection.getRng(),
                    f = o.getCellsFromEditor(a);
                return 0 !== f.length ? p(a, f) : t(a, c, d, b)
            },
            v = function (b, c) {
                return a.find(n.parentsAndSelf(c, b), k.isTableCell)
            },
            w = function (b, c) {
                return a.find(n.parentsAndSelf(c, b), function (a) {
                    return "caption" === f.name(a)
                })
            },
            x = function (a, b, c, f, h) {
                return g.navigate(c, a.getBody(), h).bind(function (a) {
                    return v(b, e.fromDom(a.getNode())).map(function (a) {
                        return d.eq(a, f) === !1
                    })
                })
            },
            y = function (a, b) {
                return m.fillWithPaddingBr(b), a.selection.setCursorLocation(b.dom(), 0), c.some(!0)
            },
            z = function (a, b, c, d) {
                return g.firstPositionIn(a.dom()).bind(function (e) {
                    return g.lastPositionIn(a.dom()).map(function (a) {
                        return b ? c.isEqual(e) && d.isEqual(a) : c.isEqual(a) && d.isEqual(e)
                    })
                }).getOr(!0)
            },
            A = function (a, b) {
                return y(a, b)
            },
            B = function (a, b, c) {
                return w(a, e.fromDom(c.getNode())).map(function (a) {
                    return d.eq(a, b) === !1
                })
            },
            C = function (a, b, d, e, f) {
                return g.navigate(d, a.getBody(), f).bind(function (c) {
                    return z(e, d, f, c) ? A(a, e) : B(b, e, c)
                }).or(c.some(!0))
            },
            D = function (a, b, c, d) {
                var e = h.fromRangeStart(a.selection.getRng());
                return v(c, d).bind(function (d) {
                    return l.isEmpty(d) ? y(a, d) : x(a, c, b, d, e)
                })
            },
            E = function (a, b, c, d) {
                var e = h.fromRangeStart(a.selection.getRng());
                return l.isEmpty(d) ? y(a, d) : C(a, c, b, d, e)
            },
            F = function (a, b, c) {
                var d = e.fromDom(a.getBody());
                return w(d, c).fold(function () {
                    return D(a, b, d, c)
                }, function (c) {
                    return E(a, b, d, c)
                }).getOr(!1)
            },
            G = function (a, b) {
                var c = e.fromDom(a.selection.getStart(!0));
                return a.selection.isCollapsed() ? F(a, b, c) : u(a, c)
            };
        return {
            backspaceDelete: G
        }
    }), g("1x", ["3v", "3w", "3x", "3y", "3z", "40"], function (a, b, c, d, e, f) {
        var g = function (a, b) {
                a.getDoc().execCommand(b, !1, null)
            },
            h = function (h) {
                c.backspaceDelete(h, !1) || e.backspaceDelete(h, !1) || a.backspaceDelete(h, !1) || f.backspaceDelete(h) || b.backspaceDelete(h, !1) || (g(h, "Delete"), d.paddEmptyBody(h))
            },
            i = function (d) {
                c.backspaceDelete(d, !0) || e.backspaceDelete(d, !0) || a.backspaceDelete(d, !0) || f.backspaceDelete(d) || b.backspaceDelete(d, !0) || g(d, "ForwardDelete")
            };
        return {
            deleteCommand: h,
            forwardDeleteCommand: i
        }
    }), g("2u", [], function () {
        var a = function (a, b) {
            return a && b && a.startContainer === b.startContainer && a.startOffset === b.startOffset && a.endContainer === b.endContainer && a.endOffset === b.endOffset
        };
        return {
            isEq: a
        }
    }), g("2t", ["2n", "45", "46", "1y", "s", "2f", "2u"], function (a, b, c, d, e, f, g) {
        var h = b.immutable("container", "offset"),
            i = function (a, b, c) {
                for (; a && a !== b;) {
                    if (c(a)) return a;
                    a = a.parentNode
                }
                return null
            },
            j = function (a, b, c) {
                return null !== i(a, b, c)
            },
            k = function (a, b, c) {
                return j(a, b, function (a) {
                    return a.nodeName === c
                })
            },
            l = function (a) {
                return a && "TABLE" === a.nodeName
            },
            m = function (a) {
                return a && /^(TD|TH|CAPTION)$/.test(a.nodeName)
            },
            n = function (a, b) {
                return c.isCaretContainer(a) && j(a, b, f.isCaretNode) === !1
            },
            o = function (a, b, c) {
                for (var f = new e(b, a.getParent(b.parentNode, a.isBlock) || a.getRoot()); b = f[c ? "prev" : "next"]();)
                    if (d.isBr(b)) return !0
            },
            p = function (a, b) {
                return a.previousSibling && a.previousSibling.nodeName === b
            },
            q = function (a, b) {
                for (; b && b !== a;) {
                    if (d.isContentEditableFalse(b)) return !0;
                    b = b.parentNode
                }
                return !1
            },
            r = function (b, c, f, g, i) {
                var j, l, m, o, p = b.getRoot(),
                    q = b.schema.getNonEmptyElements();
                if (m = b.getParent(i.parentNode, b.isBlock) || p, g && d.isBr(i) && c && b.isEmpty(m)) return a.some(h(i.parentNode, b.nodeIndex(i)));
                for (j = new e(i, m); o = j[g ? "prev" : "next"]();) {
                    if ("false" === b.getContentEditableParent(o) || n(o, p)) return a.none();
                    if (d.isText(o) && o.nodeValue.length > 0) return k(o, p, "A") === !1 ? a.some(h(o, g ? o.nodeValue.length : 0)) : a.none();
                    if (b.isBlock(o) || q[o.nodeName.toLowerCase()]) return a.none();
                    l = o
                }
                return f && l ? a.some(h(l, 0)) : a.none()
            },
            s = function (b, f, g, i) {
                var j, k, n, s, t, u, v, w = b.getRoot(),
                    x = !1;
                if (j = i[(g ? "start" : "end") + "Container"], k = i[(g ? "start" : "end") + "Offset"], v = d.isElement(j) && k === j.childNodes.length, t = b.schema.getNonEmptyElements(), u = g, c.isCaretContainer(j)) return a.none();
                if (d.isElement(j) && k > j.childNodes.length - 1 && (u = !1), d.isDocument(j) && (j = w, k = 0), j === w) {
                    if (u && (s = j.childNodes[k > 0 ? k - 1 : 0])) {
                        if (c.isCaretContainer(s)) return a.none();
                        if (t[s.nodeName] || l(s)) return a.none()
                    }
                    if (j.hasChildNodes()) {
                        if (k = Math.min(!u && k > 0 ? k - 1 : k, j.childNodes.length - 1), j = j.childNodes[k], k = d.isText(j) && v ? j.data.length : 0, !f && j === w.lastChild && l(j)) return a.none();
                        if (q(w, j) || c.isCaretContainer(j)) return a.none();
                        if (j.hasChildNodes() && l(j) === !1) {
                            s = j, n = new e(j, w);
                            do {
                                if (d.isContentEditableFalse(s) || c.isCaretContainer(s)) {
                                    x = !1;
                                    break
                                }
                                if (d.isText(s) && s.nodeValue.length > 0) {
                                    k = u ? 0 : s.nodeValue.length, j = s, x = !0;
                                    break
                                }
                                if (t[s.nodeName.toLowerCase()] && !m(s)) {
                                    k = b.nodeIndex(s), j = s.parentNode, "IMG" !== s.nodeName && "PRE" !== s.nodeName || u || k++, x = !0;
                                    break
                                }
                            } while (s = u ? n.next() : n.prev())
                        }
                    }
                }
                return f && (d.isText(j) && 0 === k && r(b, v, f, !0, j).each(function (a) {
                    j = a.container(), k = a.offset(), x = !0
                }), d.isElement(j) && (s = j.childNodes[k], s || (s = j.childNodes[k - 1]), !s || !d.isBr(s) || p(s, "A") || o(b, s, !1) || o(b, s, !0) || r(b, v, f, !0, s).each(function (a) {
                    j = a.container(), k = a.offset(), x = !0
                }))), u && !f && d.isText(j) && k === j.nodeValue.length && r(b, v, f, !1, j).each(function (a) {
                    j = a.container(), k = a.offset(), x = !0
                }), x ? a.some(h(j, k)) : a.none()
            },
            t = function (b, c) {
                var d = c.collapsed,
                    e = c.cloneRange();
                return s(b, d, !0, e).each(function (a) {
                    e.setStart(a.container(), a.offset())
                }), d || s(b, d, !1, e).each(function (a) {
                    e.setEnd(a.container(), a.offset())
                }), d && e.collapse(!0), g.isEq(c, e) ? a.none() : a.some(e)
            };
        return {
            normalize: t
        }
    }), g("1z", ["1", "41", "1v", "42", "32", "1y", "s", "43", "44", "2t"], function (a, b, c, d, e, f, g, h, i, j) {
        var k = function (a, b, c) {
                for (var d, e = new g(b, c), f = a.getNonEmptyElements(); d = e.next();)
                    if (f[d.nodeName.toLowerCase()] || d.length > 0) return !0
            },
            l = function (a, b, c) {
                var d = a.create("span", {}, "&nbsp;");
                c.parentNode.insertBefore(d, c), b.scrollIntoView(d), a.remove(d)
            },
            m = function (a, b, c, d) {
                var e = a.createRng();
                d ? (e.setStartBefore(c), e.setEndBefore(c)) : (e.setStartAfter(c), e.setEndAfter(c)), b.setRng(e)
            },
            n = function (a, b) {
                var c, d, e = a.selection,
                    f = a.dom,
                    g = e.getRng(!0);
                j.normalize(f, g).each(function (a) {
                    g.setStart(a.startContainer, a.startOffset), g.setEnd(a.endContainer, a.endOffset)
                });
                var h = g.startOffset,
                    i = g.startContainer;
                if (1 === i.nodeType && i.hasChildNodes()) {
                    var n = h > i.childNodes.length - 1;
                    i = i.childNodes[Math.min(h, i.childNodes.length - 1)] || i, h = n && 3 === i.nodeType ? i.nodeValue.length : 0
                }
                var o = f.getParent(i, f.isBlock),
                    p = o ? f.getParent(o.parentNode, f.isBlock) : null,
                    q = p ? p.nodeName.toUpperCase() : "",
                    r = b && b.ctrlKey;
                "LI" !== q || r || (o = p), i && 3 === i.nodeType && h >= i.nodeValue.length && (k(a.schema, i, o) || (c = f.create("br"), g.insertNode(c), g.setStartAfter(c), g.setEndAfter(c), d = !0)), c = f.create("br"), g.insertNode(c), l(f, e, c), m(f, e, c, d), a.undoManager.add()
            },
            o = function (a, d) {
                var e = c.fromTag("br");
                b.before(c.fromDom(d), e), a.undoManager.add()
            },
            p = function (a, d) {
                r(a.getBody(), d) || b.after(c.fromDom(d), c.fromTag("br"));
                var e = c.fromTag("br");
                b.after(c.fromDom(d), e), l(a.dom, a.selection, e.dom()), m(a.dom, a.selection, e.dom(), !1), a.undoManager.add()
            },
            q = function (a) {
                return f.isBr(a.getNode())
            },
            r = function (a, b) {
                return !!q(e.after(b)) || d.nextPosition(a, e.after(b)).map(function (a) {
                    return f.isBr(a.getNode())
                }).getOr(!1)
            },
            s = function (a) {
                return a && "A" === a.nodeName && "href" in a
            },
            t = function (b) {
                return b.fold(a.constant(!1), s, s, a.constant(!1))
            },
            u = function (b) {
                var c = a.curry(i.isInlineTarget, b),
                    d = e.fromRangeStart(b.selection.getRng());
                return h.readLocation(c, b.getBody(), d).filter(t)
            },
            v = function (b, c) {
                c.fold(a.noop, a.curry(o, b), a.curry(p, b), a.noop)
            },
            w = function (b, c) {
                var d = u(b);
                d.isSome() ? d.each(a.curry(v, b)) : n(b, c)
            };
        return {
            insert: w
        }
    }), g("5u", ["5n", "1"], function (a, b) {
        var c = a.generate([{
                before: ["element"]
            }, {
                on: ["element", "offset"]
            }, {
                after: ["element"]
            }]),
            d = function (a, b, c, d) {
                return a.fold(b, c, d)
            },
            e = function (a) {
                return a.fold(b.identity, b.identity, b.identity)
            };
        return {
            before: c.before,
            on: c.on,
            after: c.after,
            cata: d,
            getStart: e
        }
    }), g("4f", ["5n", "45", "1v", "3h", "5u"], function (a, b, c, d, e) {
        var f = a.generate([{
                domRange: ["rng"]
            }, {
                relative: ["startSitu", "finishSitu"]
            }, {
                exact: ["start", "soffset", "finish", "foffset"]
            }]),
            g = b.immutable("start", "soffset", "finish", "foffset"),
            h = function (a) {
                return f.exact(a.start(), a.soffset(), a.finish(), a.foffset())
            },
            i = function (a) {
                return a.match({
                    domRange: function (a) {
                        return c.fromDom(a.startContainer)
                    },
                    relative: function (a, b) {
                        return e.getStart(a)
                    },
                    exact: function (a, b, c, d) {
                        return a
                    }
                })
            },
            j = function (a) {
                var b = i(a);
                return d.defaultView(b)
            };
        return {
            domRange: f.domRange,
            relative: f.relative,
            exact: f.exact,
            exactFromRange: h,
            range: g,
            getWin: j
        }
    }), g("20", ["1", "2n", "3d", "31", "1v", "3f", "4e", "3h", "4f", "1j"], function (a, b, c, d, e, f, g, h, i, j) {
        var k = c.detect().browser,
            l = function (a, b) {
                var c = f.isText(b) ? g.get(b).length : h.children(b).length + 1;
                return a > c ? c : a < 0 ? 0 : a
            },
            m = function (a) {
                return i.range(a.start(), l(a.soffset(), a.start()), a.finish(), l(a.foffset(), a.finish()))
            },
            n = function (a, b) {
                return d.contains(a, b) || d.eq(a, b)
            },
            o = function (a) {
                return function (b) {
                    return n(a, b.start()) && n(a, b.finish())
                }
            },
            p = function (a) {
                return a.inline === !0 || k.isIE()
            },
            q = function (a) {
                return i.range(e.fromDom(a.startContainer), a.startOffset, e.fromDom(a.endContainer), a.endOffset)
            },
            r = function (a) {
                var c = a.getSelection(),
                    d = c && 0 !== c.rangeCount ? b.from(c.getRangeAt(0)) : b.none();
                return d.map(q)
            },
            s = function (a) {
                var b = h.defaultView(a);
                return r(b.dom()).filter(o(a))
            },
            t = function (a, c) {
                return b.from(c).filter(o(a)).map(m)
            },
            u = function (a) {
                var c = j.createRange();
                return c.setStart(a.start().dom(), a.soffset()), c.setEnd(a.finish().dom(), a.foffset()), b.some(c)
            },
            v = function (a) {
                var c = p(a) ? s(e.fromDom(a.getBody())) : b.none();
                a.bookmark = c.isSome() ? c : a.bookmark
            },
            w = function (a, c) {
                var d = e.fromDom(a.getBody()),
                    f = p(a) ? b.from(c) : b.none(),
                    g = f.map(q).filter(o(d));
                a.bookmark = g.isSome() ? g : a.bookmark
            },
            x = function (c) {
                var d = c.bookmark ? c.bookmark : b.none();
                return d.bind(a.curry(t, e.fromDom(c.getBody()))).bind(u)
            },
            y = function (a) {
                x(a).each(function (b) {
                    a.selection.setRng(b)
                })
            };
        return {
            store: v,
            storeNative: w,
            readRange: r,
            restore: y,
            getRng: x,
            getBookmark: s,
            validate: t
        }
    }), g("8", ["b", "1w", "1x", "1y", "1z", "20", "1e"], function (a, b, c, d, e, f, g) {
        var h = g.each,
            i = g.extend,
            j = g.map,
            k = g.inArray,
            l = g.explode,
            m = !0,
            n = !1;
        return function (g) {
            var o, p, q, r, s = {
                    state: {},
                    exec: {},
                    value: {}
                },
                t = g.settings;
            g.on("PreInit", function () {
                o = g.dom, p = g.selection, t = g.settings, q = g.formatter
            });
            var u = function (a, b, c, d) {
                    var e, i, j = 0;
                    if (!g.removed) {
                        if (/^(mceAddUndoLevel|mceEndUndoLevel|mceBeginUndoLevel|mceRepaint)$/.test(a) || d && d.skip_focus ? f.restore(g) : g.focus(), d = g.fire("BeforeExecCommand", {
                                command: a,
                                ui: b,
                                value: c
                            }), d.isDefaultPrevented()) return !1;
                        if (i = a.toLowerCase(), e = s.exec[i]) return e(i, b, c), g.fire("ExecCommand", {
                            command: a,
                            ui: b,
                            value: c
                        }), !0;
                        if (h(g.plugins, function (d) {
                                if (d.execCommand && d.execCommand(a, b, c)) return g.fire("ExecCommand", {
                                    command: a,
                                    ui: b,
                                    value: c
                                }), j = !0, !1
                            }), j) return j;
                        if (g.theme && g.theme.execCommand && g.theme.execCommand(a, b, c)) return g.fire("ExecCommand", {
                            command: a,
                            ui: b,
                            value: c
                        }), !0;
                        try {
                            j = g.getDoc().execCommand(a, b, c)
                        } catch (a) {}
                        return !!j && (g.fire("ExecCommand", {
                            command: a,
                            ui: b,
                            value: c
                        }), !0)
                    }
                },
                v = function (a) {
                    var b;
                    if (!g.quirks.isHidden() && !g.removed) {
                        if (a = a.toLowerCase(), b = s.state[a]) return b(a);
                        try {
                            return g.getDoc().queryCommandState(a)
                        } catch (a) {}
                        return !1
                    }
                },
                w = function (a) {
                    var b;
                    if (!g.quirks.isHidden() && !g.removed) {
                        if (a = a.toLowerCase(), b = s.value[a]) return b(a);
                        try {
                            return g.getDoc().queryCommandValue(a)
                        } catch (a) {}
                    }
                },
                x = function (a, b) {
                    b = b || "exec", h(a, function (a, c) {
                        h(c.toLowerCase().split(","), function (c) {
                            s[b][c] = a
                        })
                    })
                },
                y = function (a, b, c) {
                    a = a.toLowerCase(), s.exec[a] = function (a, d, e, f) {
                        return b.call(c || g, d, e, f)
                    }
                },
                z = function (a) {
                    if (a = a.toLowerCase(), s.exec[a]) return !0;
                    try {
                        return g.getDoc().queryCommandSupported(a)
                    } catch (a) {}
                    return !1
                },
                A = function (a, b, c) {
                    a = a.toLowerCase(), s.state[a] = function () {
                        return b.call(c || g)
                    }
                },
                B = function (a, b, c) {
                    a = a.toLowerCase(), s.value[a] = function () {
                        return b.call(c || g)
                    }
                },
                C = function (a) {
                    return a = a.toLowerCase(), !!s.exec[a]
                };
            i(this, {
                execCommand: u,
                queryCommandState: v,
                queryCommandValue: w,
                queryCommandSupported: z,
                addCommands: x,
                addCommand: y,
                addQueryStateHandler: A,
                addQueryValueHandler: B,
                hasCustomCommand: C
            });
            var D = function (a, b, c) {
                    return void 0 === b && (b = n), void 0 === c && (c = null), g.getDoc().execCommand(a, b, c)
                },
                E = function (a) {
                    return q.match(a)
                },
                F = function (a, b) {
                    q.toggle(a, b ? {
                        value: b
                    } : void 0), g.nodeChanged()
                },
                G = function (a) {
                    r = p.getBookmark(a)
                },
                H = function () {
                    p.moveToBookmark(r)
                };
            x({
                "mceResetDesignMode,mceBeginUndoLevel": function () {},
                "mceEndUndoLevel,mceAddUndoLevel": function () {
                    g.undoManager.add()
                },
                "Cut,Copy,Paste": function (b) {
                    var c, d = g.getDoc();
                    try {
                        D(b)
                    } catch (a) {
                        c = m
                    }
                    if ("paste" !== b || d.queryCommandEnabled(b) || (c = !0), c || !d.queryCommandSupported(b)) {
                        var e = g.translate("Your browser doesn't support direct access to the clipboard. Please use the Ctrl+X/C/V keyboard shortcuts instead.");
                        a.mac && (e = e.replace(/Ctrl\+/g, "\u2318+")), g.notificationManager.open({
                            text: e,
                            type: "error"
                        })
                    }
                },
                unlink: function () {
                    if (p.isCollapsed()) {
                        var a = g.dom.getParent(g.selection.getStart(), "a");
                        return void(a && g.dom.remove(a, !0))
                    }
                    q.remove("link")
                },
                "JustifyLeft,JustifyCenter,JustifyRight,JustifyFull,JustifyNone": function (a) {
                    var b = a.substring(7);
                    "full" == b && (b = "justify"), h("left,center,right,justify".split(","), function (a) {
                        b != a && q.remove("align" + a)
                    }), "none" != b && F("align" + b)
                },
                "InsertUnorderedList,InsertOrderedList": function (a) {
                    var b, c;
                    D(a), b = o.getParent(p.getNode(), "ol,ul"), b && (c = b.parentNode, /^(H[1-6]|P|ADDRESS|PRE)$/.test(c.nodeName) && (G(), o.split(c, b), H()))
                },
                "Bold,Italic,Underline,Strikethrough,Superscript,Subscript": function (a) {
                    F(a)
                },
                "ForeColor,HiliteColor,FontName": function (a, b, c) {
                    F(a, c)
                },
                FontSize: function (a, b, c) {
                    var d, e;
                    c >= 1 && c <= 7 && (e = l(t.font_size_style_values), d = l(t.font_size_classes), c = d ? d[c - 1] || c : e[c - 1] || c), F(a, c)
                },
                RemoveFormat: function (a) {
                    q.remove(a)
                },
                mceBlockQuote: function () {
                    F("blockquote")
                },
                FormatBlock: function (a, b, c) {
                    return F(c || "p")
                },
                mceCleanup: function () {
                    var a = p.getBookmark();
                    g.setContent(g.getContent({
                        cleanup: m
                    }), {
                        cleanup: m
                    }), p.moveToBookmark(a)
                },
                mceRemoveNode: function (a, b, c) {
                    var d = c || p.getNode();
                    d != g.getBody() && (G(), g.dom.remove(d, m), H())
                },
                mceSelectNodeDepth: function (a, b, c) {
                    var d = 0;
                    o.getParent(p.getNode(), function (a) {
                        if (1 == a.nodeType && d++ == c) return p.select(a), n
                    }, g.getBody())
                },
                mceSelectNode: function (a, b, c) {
                    p.select(c)
                },
                mceInsertContent: function (a, c, d) {
                    b.insertAtCaret(g, d)
                },
                mceInsertRawHTML: function (a, b, c) {
                    p.setContent("tiny_mce_marker"), g.setContent(g.getContent().replace(/tiny_mce_marker/g, function () {
                        return c
                    }))
                },
                mceToggleFormat: function (a, b, c) {
                    F(c)
                },
                mceSetContent: function (a, b, c) {
                    g.setContent(c)
                },
                "Indent,Outdent": function (a) {
                    var b, c, d;
                    b = t.indentation, c = /[a-z%]+$/i.exec(b), b = parseInt(b, 10), v("InsertUnorderedList") || v("InsertOrderedList") ? D(a) : (t.forced_root_block || o.getParent(p.getNode(), o.isBlock) || q.apply("div"), h(p.getSelectedBlocks(), function (e) {
                        if ("false" !== o.getContentEditable(e) && "LI" !== e.nodeName) {
                            var f = g.getParam("indent_use_margin", !1) ? "margin" : "padding";
                            f = "TABLE" === e.nodeName ? "margin" : f, f += "rtl" == o.getStyle(e, "direction", !0) ? "Right" : "Left", "outdent" == a ? (d = Math.max(0, parseInt(e.style[f] || 0, 10) - b), o.setStyle(e, f, d ? d + c : "")) : (d = parseInt(e.style[f] || 0, 10) + b + c, o.setStyle(e, f, d))
                        }
                    }))
                },
                mceRepaint: function () {},
                InsertHorizontalRule: function () {
                    g.execCommand("mceInsertContent", !1, "<hr />")
                },
                mceToggleVisualAid: function () {
                    g.hasVisual = !g.hasVisual, g.addVisual()
                },
                mceReplaceContent: function (a, b, c) {
                    g.execCommand("mceInsertContent", !1, c.replace(/\{\$selection\}/g, p.getContent({
                        format: "text"
                    })))
                },
                mceInsertLink: function (a, b, c) {
                    var d;
                    "string" == typeof c && (c = {
                        href: c
                    }), d = o.getParent(p.getNode(), "a"), c.href = c.href.replace(" ", "%20"), d && c.href || q.remove("link"), c.href && q.apply("link", c, d)
                },
                selectAll: function () {
                    var a = o.getParent(p.getStart(), d.isContentEditableTrue);
                    if (a) {
                        var b = o.createRng();
                        b.selectNodeContents(a), p.setRng(b)
                    }
                },
                "delete": function () {
                    c.deleteCommand(g)
                },
                forwardDelete: function () {
                    c.forwardDeleteCommand(g)
                },
                mceNewDocument: function () {
                    g.setContent("")
                },
                InsertLineBreak: function (a, b, c) {
                    return e.insert(g, c), !0
                }
            }), x({
                "JustifyLeft,JustifyCenter,JustifyRight,JustifyFull": function (a) {
                    var b = "align" + a.substring(7),
                        c = p.isCollapsed() ? [o.getParent(p.getNode(), o.isBlock)] : p.getSelectedBlocks(),
                        d = j(c, function (a) {
                            return !!q.matchNode(a, b)
                        });
                    return k(d, m) !== -1
                },
                "Bold,Italic,Underline,Strikethrough,Superscript,Subscript": function (a) {
                    return E(a)
                },
                mceBlockQuote: function () {
                    return E("blockquote")
                },
                Outdent: function () {
                    var a;
                    if (t.inline_styles) {
                        if ((a = o.getParent(p.getStart(), o.isBlock)) && parseInt(a.style.paddingLeft, 10) > 0) return m;
                        if ((a = o.getParent(p.getEnd(), o.isBlock)) && parseInt(a.style.paddingLeft, 10) > 0) return m
                    }
                    return v("InsertUnorderedList") || v("InsertOrderedList") || !t.inline_styles && !!o.getParent(p.getNode(), "BLOCKQUOTE")
                },
                "InsertUnorderedList,InsertOrderedList": function (a) {
                    var b = o.getParent(p.getNode(), "ul,ol");
                    return b && ("insertunorderedlist" === a && "UL" === b.tagName || "insertorderedlist" === a && "OL" === b.tagName)
                }
            }, "state"), x({
                "FontSize,FontName": function (a) {
                    var b, c = 0;
                    return (b = o.getParent(p.getNode(), "span")) && (c = "fontsize" == a ? b.style.fontSize : b.style.fontFamily.replace(/, /g, ",").replace(/[\'\"]/g, "").toLowerCase()), c
                }
            }, "value"), x({
                Undo: function () {
                    g.undoManager.undo()
                },
                Redo: function () {
                    g.undoManager.redo()
                }
            })
        }
    }), g("16", ["1e"], function (a) {
        var b = a.makeMap("focus blur focusin focusout click dblclick mousedown mouseup mousemove mouseover beforepaste paste cut copy selectionchange mouseout mouseenter mouseleave wheel keydown keypress keyup input contextmenu dragstart dragend dragover draggesture dragdrop drop drag submit compositionstart compositionend compositionupdate touchstart touchmove touchend", " "),
            c = function (b) {
                var c, d, e = this,
                    f = {},
                    g = function () {
                        return !1
                    },
                    h = function () {
                        return !0
                    };
                b = b || {}, c = b.scope || e, d = b.toggleEvent || g;
                var i = function (a, d) {
                        var e, i, j, l;
                        if (a = a.toLowerCase(), d = d || {}, d.type = a, d.target || (d.target = c), d.preventDefault || (d.preventDefault = function () {
                                d.isDefaultPrevented = h
                            }, d.stopPropagation = function () {
                                d.isPropagationStopped = h
                            }, d.stopImmediatePropagation = function () {
                                d.isImmediatePropagationStopped = h
                            }, d.isDefaultPrevented = g, d.isPropagationStopped = g, d.isImmediatePropagationStopped = g), b.beforeFire && b.beforeFire(d), e = f[a])
                            for (i = 0, j = e.length; i < j; i++) {
                                if (l = e[i], l.once && k(a, l.func), d.isImmediatePropagationStopped()) return d.stopPropagation(), d;
                                if (l.func.call(c, d) === !1) return d.preventDefault(), d
                            }
                        return d
                    },
                    j = function (b, c, h, i) {
                        var j, k, l;
                        if (c === !1 && (c = g), c)
                            for (c = {
                                    func: c
                                }, i && a.extend(c, i), k = b.toLowerCase().split(" "), l = k.length; l--;) b = k[l], j = f[b], j || (j = f[b] = [], d(b, !0)), h ? j.unshift(c) : j.push(c);
                        return e
                    },
                    k = function (a, b) {
                        var c, g, h, i, j;
                        if (a)
                            for (i = a.toLowerCase().split(" "), c = i.length; c--;) {
                                if (a = i[c], g = f[a], !a) {
                                    for (h in f) d(h, !1), delete f[h];
                                    return e
                                }
                                if (g) {
                                    if (b)
                                        for (j = g.length; j--;) g[j].func === b && (g = g.slice(0, j).concat(g.slice(j + 1)), f[a] = g);
                                    else g.length = 0;
                                    g.length || (d(a, !1), delete f[a])
                                }
                            } else {
                                for (a in f) d(a, !1);
                                f = {}
                            }
                        return e
                    },
                    l = function (a, b, c) {
                        return j(a, b, c, {
                            once: !0
                        })
                    },
                    m = function (a) {
                        return a = a.toLowerCase(), !(!f[a] || 0 === f[a].length)
                    };
                e.fire = i, e.on = j, e.off = k, e.once = l, e.has = m
            };
        return c.isNative = function (a) {
            return !!b[a.toLowerCase()]
        }, c
    }), g("1c", ["16"], function (a) {
        var b = function (b) {
            return b._eventDispatcher || (b._eventDispatcher = new a({
                scope: b,
                toggleEvent: function (c, d) {
                    a.isNative(c) && b.toggleNativeEvent && b.toggleNativeEvent(c, d)
                }
            })), b._eventDispatcher
        };
        return {
            fire: function (a, c, d) {
                var e = this;
                if (e.removed && "remove" !== a) return c;
                if (c = b(e).fire(a, c, d), d !== !1 && e.parent)
                    for (var f = e.parent(); f && !c.isPropagationStopped();) f.fire(a, c, !1), f = f.parent();
                return c
            },
            on: function (a, c, d) {
                return b(this).on(a, c, d)
            },
            off: function (a, c) {
                return b(this).off(a, c)
            },
            once: function (a, c) {
                return b(this).once(a, c)
            },
            hasEventListeners: function (a) {
                return b(this).has(a)
            }
        }
    }), g("a", ["1c", "m", "1e"], function (a, b, c) {
        var d, e = b.DOM,
            f = function (a, b) {
                return "selectionchange" == b ? a.getDoc() : !a.inline && /^mouse|touch|click|contextmenu|drop|dragover|dragend/.test(b) ? a.getDoc().documentElement : a.settings.event_root ? (a.eventRoot || (a.eventRoot = e.select(a.settings.event_root)[0]), a.eventRoot) : a.getBody()
            },
            g = function (a, b) {
                var c, g, h = function (a) {
                    return !a.hidden && !a.readonly
                };
                if (a.delegates || (a.delegates = {}), !a.delegates[b] && !a.removed)
                    if (c = f(a, b), a.settings.event_root) {
                        if (d || (d = {}, a.editorManager.on("removeEditor", function () {
                                var b;
                                if (!a.editorManager.activeEditor && d) {
                                    for (b in d) a.dom.unbind(f(a, b));
                                    d = null
                                }
                            })), d[b]) return;
                        g = function (c) {
                            for (var d = c.target, f = a.editorManager.get(), g = f.length; g--;) {
                                var i = f[g].getBody();
                                (i === d || e.isChildOf(d, i)) && h(f[g]) && f[g].fire(b, c)
                            }
                        }, d[b] = g, e.bind(c, b, g)
                    } else g = function (c) {
                        h(a) && a.fire(b, c)
                    }, e.bind(c, b, g), a.delegates[b] = g
            },
            h = {
                bindPendingEventDelegates: function () {
                    var a = this;
                    c.each(a._pendingNativeEvents, function (b) {
                        g(a, b)
                    })
                },
                toggleNativeEvent: function (a, b) {
                    var c = this;
                    "focus" != a && "blur" != a && (b ? c.initialized ? g(c, a) : c._pendingNativeEvents ? c._pendingNativeEvents.push(a) : c._pendingNativeEvents = [a] : c.initialized && (c.dom.unbind(f(c, a), a, c.delegates[a]), delete c.delegates[a]))
                },
                unbindAllNativeEvents: function () {
                    var a, b = this;
                    if (b.delegates) {
                        for (a in b.delegates) b.dom.unbind(f(b, a), a, b.delegates[a]);
                        delete b.delegates
                    }
                    b.inline || (b.getBody().onload = null, b.dom.unbind(b.getWin()), b.dom.unbind(b.getDoc())), b.dom.unbind(b.getBody()), b.dom.unbind(b.getContainer())
                }
            };
        return h = c.extend({}, a, h)
    }), g("22", [], function () {
        var a = function (a, b, c) {
                try {
                    a.getDoc().execCommand(b, !1, c)
                } catch (a) {}
            },
            b = function (a) {
                var b, c;
                return b = a.getBody(), c = function (b) {
                    a.dom.getParents(b.target, "a").length > 0 && b.preventDefault()
                }, a.dom.bind(b, "click", c), {
                    unbind: function () {
                        a.dom.unbind(b, "click", c)
                    }
                }
            },
            c = function (c, d) {
                c._clickBlocker && (c._clickBlocker.unbind(), c._clickBlocker = null), d ? (c._clickBlocker = b(c), c.selection.controlSelection.hideResizeRect(), c.readonly = !0, c.getBody().contentEditable = !1) : (c.readonly = !1, c.getBody().contentEditable = !0, a(c, "StyleWithCSS", !1), a(c, "enableInlineTableEditing", !1), a(c, "enableObjectResizing", !1), c.focus(), c.nodeChanged())
            },
            d = function (a, b) {
                var d = a.readonly ? "readonly" : "design";
                b != d && (a.initialized ? c(a, "readonly" == b) : a.on("init", function () {
                    c(a, "readonly" == b)
                }), a.fire("SwitchMode", {
                    mode: b
                }))
            };
        return {
            setMode: d
        }
    }), g("c", ["1e", "b"], function (a, b) {
        var c = a.each,
            d = a.explode,
            e = {
                f9: 120,
                f10: 121,
                f11: 122
            },
            f = a.makeMap("alt,ctrl,shift,meta,access");
        return function (g) {
            var h = this,
                i = {},
                j = [],
                k = function (a) {
                    var g, h, i = {};
                    c(d(a, "+"), function (a) {
                        a in f ? i[a] = !0 : /^[0-9]{2,}$/.test(a) ? i.keyCode = parseInt(a, 10) : (i.charCode = a.charCodeAt(0), i.keyCode = e[a] || a.toUpperCase().charCodeAt(0))
                    }), g = [i.keyCode];
                    for (h in f) i[h] ? g.push(h) : i[h] = !1;
                    return i.id = g.join(","), i.access && (i.alt = !0, b.mac ? i.ctrl = !0 : i.shift = !0), i.meta && (b.mac ? i.meta = !0 : (i.ctrl = !0, i.meta = !1)), i
                },
                l = function (b, c, e, f) {
                    var h;
                    return h = a.map(d(b, ">"), k), h[h.length - 1] = a.extend(h[h.length - 1], {
                        func: e,
                        scope: f || g
                    }), a.extend(h[0], {
                        desc: g.translate(c),
                        subpatterns: h.slice(1)
                    })
                },
                m = function (a) {
                    return a.altKey || a.ctrlKey || a.metaKey
                },
                n = function (a) {
                    return "keydown" === a.type && a.keyCode >= 112 && a.keyCode <= 123
                },
                o = function (a, b) {
                    return !!b && (b.ctrl == a.ctrlKey && b.meta == a.metaKey && (b.alt == a.altKey && b.shift == a.shiftKey && (!!(a.keyCode == b.keyCode || a.charCode && a.charCode == b.charCode) && (a.preventDefault(), !0))))
                },
                p = function (a) {
                    return a.func ? a.func.call(a.scope) : null
                };
            g.on("keyup keypress keydown", function (a) {
                !m(a) && !n(a) || a.isDefaultPrevented() || (c(i, function (b) {
                    if (o(a, b)) return j = b.subpatterns.slice(0), "keydown" == a.type && p(b), !0
                }), o(a, j[0]) && (1 === j.length && "keydown" == a.type && p(j[0]), j.shift()))
            }), h.add = function (b, e, f, h) {
                var j;
                return j = f, "string" == typeof f ? f = function () {
                    g.execCommand(j, !1, null)
                } : a.isArray(j) && (f = function () {
                    g.execCommand(j[0], j[1], j[2])
                }), c(d(a.trim(b.toLowerCase())), function (a) {
                    var b = l(a, e, f, h);
                    i[b.id] = b
                }), !0
            }, h.remove = function (a) {
                var b = l(a);
                return !!i[b.id] && (delete i[b.id], !0)
            }
        }
    }), g("x", ["y", "v", "1e"], function (a, b, c) {
        var d = c.each,
            e = function (a) {
                return 0 === a.indexOf("data-") || 0 === a.indexOf("aria-")
            },
            f = function (a) {
                return a.replace(/<!--|-->/g, "")
            },
            g = function (a, b, c) {
                var d, e, f, g, h = 1;
                for (g = a.getShortEndedElements(), f = /<([!?\/])?([A-Za-z0-9\-_\:\.]+)((?:\s+[^"\'>]+(?:(?:"[^"]*")|(?:\'[^\']*\')|[^>]*))*|\/|\s+)>/g, f.lastIndex = d = c; e = f.exec(b);) {
                    if (d = f.lastIndex, "/" === e[1]) h--;
                    else if (!e[1]) {
                        if (e[2] in g) continue;
                        h++
                    }
                    if (0 === h) break
                }
                return d
            },
            h = function (h, i) {
                var j = this,
                    k = function () {};
                h = h || {}, j.schema = i = i || new a, h.fix_self_closing !== !1 && (h.fix_self_closing = !0), d("comment cdata text start end pi doctype".split(" "), function (a) {
                    a && (j[a] = h[a] || k)
                }), j.parse = function (a) {
                    var d, j, k, l, m, n, o, p, q, r, s, t, u, v, w, x, y, z, A, B, C, D, E, F, G, H, I, J, K, L, M = this,
                        N = 0,
                        O = [],
                        P = 0,
                        Q = b.decode,
                        R = c.makeMap("src,href,data,background,formaction,poster"),
                        S = /((java|vb)script|mhtml):/i,
                        T = /^data:/i,
                        U = function (a) {
                            var b, c;
                            for (b = O.length; b-- && O[b].name !== a;);
                            if (b >= 0) {
                                for (c = O.length - 1; c >= b; c--) a = O[c], a.valid && M.end(a.name);
                                O.length = b
                            }
                        },
                        V = function (a, b, c, d, f) {
                            var g, i, j = /[\s\u0000-\u001F]+/g;
                            if (b = b.toLowerCase(), c = b in s ? b : Q(c || d || f || ""), u && !p && e(b) === !1) {
                                if (g = z[b], !g && A) {
                                    for (i = A.length; i-- && (g = A[i], !g.pattern.test(b)););
                                    i === -1 && (g = null)
                                }
                                if (!g) return;
                                if (g.validValues && !(c in g.validValues)) return
                            }
                            if (R[b] && !h.allow_script_urls) {
                                var k = c.replace(j, "");
                                try {
                                    k = decodeURIComponent(k)
                                } catch (a) {
                                    k = unescape(k)
                                }
                                if (S.test(k)) return;
                                if (!h.allow_html_data_urls && T.test(k) && !/^data:image\//i.test(k)) return
                            }
                            p && (b in R || 0 === b.indexOf("on")) || (l.map[b] = c, l.push({
                                name: b,
                                value: c
                            }))
                        };
                    for (H = new RegExp("<(?:(?:!--([\\w\\W]*?)-->)|(?:!\\[CDATA\\[([\\w\\W]*?)\\]\\]>)|(?:!DOCTYPE([\\w\\W]*?)>)|(?:\\?([^\\s\\/<>]+) ?([\\w\\W]*?)[?/]>)|(?:\\/([A-Za-z][A-Za-z0-9\\-_\\:\\.]*)>)|(?:([A-Za-z][A-Za-z0-9\\-_\\:\\.]*)((?:\\s+[^\"'>]+(?:(?:\"[^\"]*\")|(?:'[^']*')|[^>]*))*|\\/|\\s+)>))", "g"), I = /([\w:\-]+)(?:\s*=\s*(?:(?:\"((?:[^\"])*)\")|(?:\'((?:[^\'])*)\')|([^>\s]+)))?/g, r = i.getShortEndedElements(), G = h.self_closing_elements || i.getSelfClosingElements(), s = i.getBoolAttrs(), u = h.validate, q = h.remove_internals, L = h.fix_self_closing, J = i.getSpecialElements(), E = a + ">"; d = H.exec(E);) {
                        if (N < d.index && M.text(Q(a.substr(N, d.index - N))), j = d[6]) j = j.toLowerCase(), ":" === j.charAt(0) && (j = j.substr(1)), U(j);
                        else if (j = d[7]) {
                            if (d.index + d[0].length > a.length) {
                                M.text(Q(a.substr(d.index))), N = d.index + d[0].length;
                                continue
                            }
                            if (j = j.toLowerCase(), ":" === j.charAt(0) && (j = j.substr(1)), t = j in r, L && G[j] && O.length > 0 && O[O.length - 1].name === j && U(j), !u || (v = i.getElementRule(j))) {
                                if (w = !0, u && (z = v.attributes, A = v.attributePatterns), (y = d[8]) ? (p = y.indexOf("data-mce-type") !== -1, p && q && (w = !1), l = [], l.map = {}, y.replace(I, V)) : (l = [], l.map = {}), u && !p) {
                                    if (B = v.attributesRequired, C = v.attributesDefault, D = v.attributesForced, F = v.removeEmptyAttrs, F && !l.length && (w = !1), D)
                                        for (m = D.length; m--;) x = D[m], o = x.name, K = x.value, "{$uid}" === K && (K = "mce_" + P++), l.map[o] = K, l.push({
                                            name: o,
                                            value: K
                                        });
                                    if (C)
                                        for (m = C.length; m--;) x = C[m], o = x.name, o in l.map || (K = x.value, "{$uid}" === K && (K = "mce_" + P++), l.map[o] = K, l.push({
                                            name: o,
                                            value: K
                                        }));
                                    if (B) {
                                        for (m = B.length; m-- && !(B[m] in l.map););
                                        m === -1 && (w = !1)
                                    }
                                    if (x = l.map["data-mce-bogus"]) {
                                        if ("all" === x) {
                                            N = g(i, a, H.lastIndex), H.lastIndex = N;
                                            continue
                                        }
                                        w = !1
                                    }
                                }
                                w && M.start(j, l, t)
                            } else w = !1;
                            if (k = J[j]) {
                                k.lastIndex = N = d.index + d[0].length, (d = k.exec(a)) ? (w && (n = a.substr(N, d.index - N)), N = d.index + d[0].length) : (n = a.substr(N), N = a.length), w && (n.length > 0 && M.text(n, !0), M.end(j)), H.lastIndex = N;
                                continue
                            }
                            t || (y && y.indexOf("/") == y.length - 1 ? w && M.end(j) : O.push({
                                name: j,
                                valid: w
                            }))
                        } else(j = d[1]) ? (">" === j.charAt(0) && (j = " " + j), h.allow_conditional_comments || "[if" !== j.substr(0, 3).toLowerCase() || (j = " " + j), M.comment(j)) : (j = d[2]) ? M.cdata(f(j)) : (j = d[3]) ? M.doctype(j) : (j = d[4]) && M.pi(j, d[5]);
                        N = d.index + d[0].length
                    }
                    for (N < a.length && M.text(Q(a.substr(N))), m = O.length - 1; m >= 0; m--) j = O[m], j.valid && M.end(j.name)
                }
            };
        return h.findEndTag = g, h
    }), g("23", ["x", "4b"], function (a, b) {
        var c = function (a, b) {
                var c = new RegExp(["\\s?(" + a.join("|") + ')="[^"]+"'].join("|"), "gi");
                return b.replace(c, "")
            },
            d = function (b, d) {
                var e, f, g, h, i, j = d,
                    k = /<(\w+) [^>]*data-mce-bogus="all"[^>]*>/g,
                    l = b.schema;
                for (j = c(b.getTempAttrs(), j), i = l.getShortEndedElements(); h = k.exec(j);) f = k.lastIndex, g = h[0].length, e = i[h[1]] ? f : a.findEndTag(l, j, f), j = j.substring(0, f - g) + j.substring(e), k.lastIndex = f - g;
                return j
            },
            e = function (a, c) {
                return b.trim(d(a, c))
            };
        return {
            trimExternal: e,
            trimInternal: d
        }
    }), g("5v", ["5i"], function (a) {
        var b = function (b) {
                return a.first(b).isSome()
            },
            c = function (b, c, d) {
                return a.ancestor(b, c, d).isSome()
            },
            d = function (b, c, d) {
                return a.closest(b, c, d).isSome()
            },
            e = function (b, c) {
                return a.sibling(b, c).isSome()
            },
            f = function (b, c) {
                return a.child(b, c).isSome()
            },
            g = function (b, c) {
                return a.descendant(b, c).isSome()
            };
        return {
            any: b,
            ancestor: c,
            closest: d,
            sibling: e,
            child: f,
            descendant: g
        }
    }), g("4i", ["1", "2n", "31", "1v", "5v", "3h", "1j"], function (a, b, c, d, e, f, g) {
        var h = function (a) {
                a.dom().focus()
            },
            i = function (a) {
                a.dom().blur()
            },
            j = function (a) {
                var b = f.owner(a).dom();
                return a.dom() === b.activeElement
            },
            k = function (a) {
                var c = void 0 !== a ? a.dom() : g;
                return b.from(c.activeElement).map(d.fromDom)
            },
            l = function (b) {
                var d = f.owner(b),
                    g = k(d).filter(function (d) {
                        return e.closest(d, a.curry(c.eq, b))
                    });
                g.fold(function () {
                    h(b)
                }, a.noop)
            },
            m = function (a) {
                return k(f.owner(a)).filter(function (b) {
                    return a.dom().contains(b.dom())
                })
            };
        return {
            hasFocus: j,
            focus: h,
            blur: i,
            active: k,
            search: m,
            focusInside: l
        }
    }), g("24", ["2n", "31", "4i", "1v", "b", "42", "3l", "2v", "20"], function (a, b, c, d, e, f, g, h, i) {
        var j = function (a, b) {
                return a.dom.getParent(b, function (b) {
                    return "true" === a.dom.getContentEditable(b)
                })
            },
            k = function (b) {
                return b.collapsed ? a.from(h.getNode(b.startContainer, b.startOffset)).map(d.fromDom) : a.none()
            },
            l = function (c, d) {
                return k(d).bind(function (d) {
                    return g.isTableSection(d) ? a.some(d) : b.contains(c, d) === !1 ? a.some(c) : a.none()
                })
            },
            m = function (a, b) {
                l(d.fromDom(a.getBody()), b).bind(function (a) {
                    return f.firstPositionIn(a.dom())
                }).fold(function () {
                    a.selection.normalize()
                }, function (b) {
                    a.selection.setRng(b.toRange())
                })
            },
            n = function (a) {
                if (a.setActive) try {
                    a.setActive()
                } catch (b) {
                    a.focus()
                } else a.focus()
            },
            o = function (a) {
                return c.hasFocus(a) || c.search(a).isSome()
            },
            p = function (a) {
                return a.iframeElement && c.hasFocus(d.fromDom(a.iframeElement))
            },
            q = function (a) {
                var b = a.getBody();
                return b && o(d.fromDom(b))
            },
            r = function (a) {
                return a.inline ? q(a) : p(a)
            },
            s = function (a) {
                var b, c = a.selection,
                    d = a.settings.content_editable,
                    f = a.getBody(),
                    g = c.getRng();
                return a.quirks.refreshContentEditable(), b = j(a, c.getNode()), a.$.contains(f, b) ? (n(b), m(a, g), void t(a)) : (void 0 !== a.bookmark && r(a) === !1 && i.getRng(a).each(function (b) {
                    a.selection.setRng(b), g = b
                }), d || (e.opera || n(f), a.getWin().focus()), (e.gecko || d) && (n(f), m(a, g)), void t(a))
            },
            t = function (a) {
                a.editorManager.setActive(a)
            },
            u = function (a, b) {
                a.removed || (b ? t(a) : s(a))
            };
        return {
            focus: u,
            hasFocus: r
        }
    }), g("2o", ["1", "2n", "31", "1v", "3g", "3h"], function (a, b, c, d, e, f) {
        var g = function (a, b) {
                var c = b.dom();
                return c[a]
            },
            h = function (a, b) {
                return parseInt(e.get(b, a), 10)
            },
            i = a.curry(g, "clientWidth"),
            j = a.curry(g, "clientHeight"),
            k = a.curry(h, "margin-top"),
            l = a.curry(h, "margin-left"),
            m = function (a) {
                return a.dom().getBoundingClientRect()
            },
            n = function (a, b, c) {
                var d = i(a),
                    e = j(a);
                return b >= 0 && c >= 0 && b <= d && c <= e
            },
            o = function (a, b, c, d) {
                var e = m(b),
                    f = a ? e.left + b.dom().clientLeft + l(b) : 0,
                    g = a ? e.top + b.dom().clientTop + k(b) : 0,
                    h = c - f,
                    i = d - g;
                return {
                    x: h,
                    y: i
                }
            },
            p = function (a, b, c) {
                var e = d.fromDom(a.getBody()),
                    g = a.inline ? e : f.documentElement(e),
                    h = o(a.inline, g, b, c);
                return n(g, h.x, h.y)
            },
            q = function (a) {
                return b.from(a).map(d.fromDom)
            },
            r = function (a) {
                var b = a.inline ? a.getBody() : a.getContentAreaContainer();
                return q(b).map(function (a) {
                    return c.contains(f.owner(a), a)
                }).getOr(!1)
            };
        return {
            isXYInContentArea: p,
            isEditorAttachedToDom: r
        }
    }), g("2p", [], function () {
        return function () {
            var a = function () {
                throw new Error("Theme did not provide a NotificationManager implementation.")
            };
            return {
                open: a,
                close: a,
                reposition: a,
                getArgs: a
            }
        }
    }), g("g", ["1i", "2n", "2o", "2p", "15"], function (a, b, c, d, e) {
        return function (f) {
            var g = [],
                h = function () {
                    var a = f.theme;
                    return a && a.getNotificationManagerImpl ? a.getNotificationManagerImpl() : d()
                },
                i = function () {
                    return b.from(g[0])
                },
                j = function (a, b) {
                    return !(a.type !== b.type || a.text !== b.text || a.progressBar || a.timeout || b.progressBar || b.timeout)
                },
                k = function () {
                    g.length > 0 && h().reposition(g)
                },
                l = function (a) {
                    g.push(a)
                },
                m = function (b) {
                    a.findIndex(g, function (a) {
                        return a === b
                    }).each(function (a) {
                        g.splice(a, 1)
                    })
                },
                n = function (b) {
                    if (!f.removed && c.isEditorAttachedToDom(f)) return a.find(g, function (a) {
                        return j(h().getArgs(a), b)
                    }).getOrThunk(function () {
                        f.editorManager.setActive(f);
                        var a = h().open(b, function () {
                            m(a), k()
                        });
                        return l(a), k(), a
                    })
                },
                o = function () {
                    i().each(function (a) {
                        h().close(a), m(a), k()
                    })
                },
                p = function () {
                    return g
                },
                q = function (b) {
                    b.on("SkinLoaded", function () {
                        var a = b.settings.service_message;
                        a && n({
                            text: a,
                            type: "warning",
                            timeout: 0,
                            icon: ""
                        })
                    }), b.on("ResizeEditor ResizeWindow", function () {
                        e.requestAnimationFrame(k)
                    }), b.on("remove", function () {
                        a.each(g, function (a) {
                            h().close(a)
                        })
                    })
                };
            return q(f), {
                open: n,
                close: o,
                getNotifications: p
            }
        }
    }), g("2q", [], function () {
        return function () {
            var a = function () {
                throw new Error("Theme did not provide a WindowManager implementation.")
            };
            return {
                open: a,
                alert: a,
                confirm: a,
                close: a,
                getParams: a,
                setParams: a
            }
        }
    }), g("h", ["1i", "2n", "20", "2q"], function (a, b, c, d) {
        return function (e) {
            var f = [],
                g = function () {
                    var a = e.theme;
                    return a && a.getWindowManagerImpl ? a.getWindowManagerImpl() : d()
                },
                h = function (a, b) {
                    return function () {
                        return b ? b.apply(a, arguments) : void 0
                    }
                },
                i = function (a) {
                    e.fire("OpenWindow", {
                        win: a
                    })
                },
                j = function (a) {
                    e.fire("CloseWindow", {
                        win: a
                    })
                },
                k = function (a) {
                    f.push(a), i(a)
                },
                l = function (b) {
                    a.findIndex(f, function (a) {
                        return a === b
                    }).each(function (a) {
                        f.splice(a, 1), j(b), 0 === f.length && e.focus()
                    })
                },
                m = function () {
                    return b.from(f[f.length - 1])
                },
                n = function (a, b) {
                    e.editorManager.setActive(e), c.store(e);
                    var d = g().open(a, b, l);
                    return k(d), d
                },
                o = function (a, b, c) {
                    var d = g().alert(a, h(c ? c : this, b), l);
                    k(d)
                },
                p = function (a, b, c) {
                    var d = g().confirm(a, h(c ? c : this, b), l);
                    k(d)
                },
                q = function () {
                    m().each(function (a) {
                        g().close(a), l(a)
                    })
                },
                r = function () {
                    return m().map(g().getParams).getOr(null)
                },
                s = function (a) {
                    m().each(function (b) {
                        g().setParams(b, a)
                    })
                },
                t = function () {
                    return f
                };
            return e.on("remove", function () {
                a.each(f.slice(0), function (a) {
                    g().close(a)
                })
            }), {
                windows: f,
                open: n,
                alert: o,
                confirm: p,
                close: q,
                getParams: r,
                setParams: s,
                getWindows: t
            }
        }
    }), g("29", ["2", "6"], function (a, b) {
        var c = b.PluginManager,
            d = function (a, b) {
                for (var d in c.urls) {
                    var e = c.urls[d] + "/plugin" + b + ".js";
                    if (e === a) return d
                }
                return null
            },
            e = function (a, b) {
                var c = d(b, a.suffix);
                return c ? "Failed to load plugin: " + c + " from url " + b : "Failed to load plugin url: " + b
            },
            f = function (a, b) {
                a.notificationManager.open({
                    type: "error",
                    text: b
                })
            },
            g = function (a, b) {
                a._skinLoaded ? f(a, b) : a.on("SkinLoaded", function () {
                    f(a, b)
                })
            },
            h = function (a, b) {
                g(a, "Failed to upload image: " + b)
            },
            i = function (a, b) {
                g(a, e(a, b))
            },
            j = function (b) {
                var c = a.console;
                c && !a.test && (c.error ? c.error.apply(c, arguments) : c.log.apply(c, arguments))
            };
        return {
            pluginLoadError: i,
            uploadError: h,
            displayError: g,
            initError: j
        }
    }), g("4k", ["6"], function (a) {
        return a.PluginManager
    }), g("4l", ["6"], function (a) {
        return a.ThemeManager
    }), g("39", ["3c"], function (a) {
        return function () {
            var b = a.getOrDie("XMLHttpRequest");
            return new b
        }
    }), g("6r", ["39", "2", "3q", "1d", "1e"], function (a, b, c, d, e) {
        return function (c, f) {
            var g = {},
                h = function (a, b) {
                    return a ? a.replace(/\/$/, "") + "/" + b.replace(/^\//, "") : b
                },
                i = function (c, d, e, g) {
                    var i, j;
                    i = new a, i.open("POST", f.url), i.withCredentials = f.credentials, i.upload.onprogress = function (a) {
                        g(a.loaded / a.total * 100)
                    }, i.onerror = function () {
                        e("Image upload failed due to a XHR Transport error. Code: " + i.status)
                    }, i.onload = function () {
                        var a;
                        return i.status < 200 || i.status >= 300 ? void e("HTTP Error: " + i.status) : (a = JSON.parse(i.responseText), a && "string" == typeof a.location ? void d(h(f.basePath, a.location)) : void e("Invalid JSON: " + i.responseText))
                    }, j = new b.FormData, j.append("file", c.blob(), c.filename()), i.send(j)
                },
                j = function () {
                    return new d(function (a) {
                        a([])
                    })
                },
                k = function (a, b) {
                    return {
                        url: b,
                        blobInfo: a,
                        status: !0
                    }
                },
                l = function (a, b) {
                    return {
                        url: "",
                        blobInfo: a,
                        status: !1,
                        error: b
                    }
                },
                m = function (a, b) {
                    e.each(g[a], function (a) {
                        a(b)
                    }), delete g[a]
                },
                n = function (a, b, e) {
                    return c.markPending(a.blobUri()), new d(function (d) {
                        var f, g, h = function () {};
                        try {
                            var i = function () {
                                    f && (f.close(), g = h)
                                },
                                j = function (b) {
                                    i(), c.markUploaded(a.blobUri(), b), m(a.blobUri(), k(a, b)), d(k(a, b))
                                },
                                n = function (b) {
                                    i(), c.removeFailed(a.blobUri()), m(a.blobUri(), l(a, b)), d(l(a, b))
                                };
                            g = function (a) {
                                a < 0 || a > 100 || (f || (f = e()), f.progressBar.value(a))
                            }, b(a, j, n, g)
                        } catch (b) {
                            d(l(a, b.message))
                        }
                    })
                },
                o = function (a) {
                    return a === i
                },
                p = function (a) {
                    var b = a.blobUri();
                    return new d(function (a) {
                        g[b] = g[b] || [], g[b].push(a)
                    })
                },
                q = function (a, b) {
                    return a = e.grep(a, function (a) {
                        return !c.isUploaded(a.blobUri())
                    }), d.all(e.map(a, function (a) {
                        return c.isPending(a.blobUri()) ? p(a) : n(a, f.handler, b)
                    }))
                },
                r = function (a, b) {
                    return !f.url && o(f.handler) ? j() : q(a, b)
                };
            return f = e.extend({
                credentials: !1,
                handler: i
            }, f), {
                upload: r
            }
        }
    }), g("7d", ["3c"], function (a) {
        return function (b, c) {
            var d = a.getOrDie("Blob");
            return new d(b, c)
        }
    }), g("7e", ["3c"], function (a) {
        return function () {
            var b = a.getOrDie("FileReader");
            return new b
        }
    }), g("7f", ["3c"], function (a) {
        return function (b) {
            var c = a.getOrDie("Uint8Array");
            return new c(b)
        }
    }), g("7g", ["3c"], function (a) {
        var b = function (b) {
                var c = a.getOrDie("requestAnimationFrame");
                c(b)
            },
            c = function (b) {
                var c = a.getOrDie("atob");
                return c(b)
            };
        return {
            atob: c,
            requestAnimationFrame: b
        }
    }), g("75", ["7d", "7e", "7f", "7g", "39", "1d"], function (a, b, c, d, e, f) {
        var g = function (a) {
                return new f(function (b, c) {
                    var d = function () {
                        c("Cannot convert " + a + " to Blob. Resource might not exist or is inaccessible.")
                    };
                    try {
                        var f = new e;
                        f.open("GET", a, !0), f.responseType = "blob", f.onload = function () {
                            200 == this.status ? b(this.response) : d()
                        }, f.onerror = d, f.send()
                    } catch (a) {
                        d()
                    }
                })
            },
            h = function (a) {
                var b, c;
                return a = decodeURIComponent(a).split(","), c = /data:([^;]+)/.exec(a[0]), c && (b = c[1]), {
                    type: b,
                    data: a[1]
                }
            },
            i = function (b) {
                return new f(function (e) {
                    var f, g, i;
                    b = h(b);
                    try {
                        f = d.atob(b.data)
                    } catch (b) {
                        return void e(new a([]))
                    }
                    for (g = new c(f.length), i = 0; i < g.length; i++) g[i] = f.charCodeAt(i);
                    e(new a([g], {
                        type: b.type
                    }))
                })
            },
            j = function (a) {
                return 0 === a.indexOf("blob:") ? g(a) : 0 === a.indexOf("data:") ? i(a) : null
            },
            k = function (a) {
                return new f(function (c) {
                    var d = new b;
                    d.onloadend = function () {
                        c(d.result)
                    }, d.readAsDataURL(a)
                })
            };
        return {
            uriToBlob: j,
            blobToDataUri: k,
            parseDataUri: h
        }
    }), g("6s", ["1d", "1r", "3q", "75", "b"], function (a, b, c, d, e) {
        var f = 0,
            g = function (a) {
                return (a || "blobid") + f++
            },
            h = function (a, b, c, e) {
                var f, h;
                return 0 === b.src.indexOf("blob:") ? (h = a.getByUri(b.src), void(h ? c({
                    image: b,
                    blobInfo: h
                }) : d.uriToBlob(b.src).then(function (e) {
                    d.blobToDataUri(e).then(function (i) {
                        f = d.parseDataUri(i).data, h = a.create(g(), e, f), a.add(h), c({
                            image: b,
                            blobInfo: h
                        })
                    })
                }, function (a) {
                    e(a)
                }))) : (f = d.parseDataUri(b.src).data, h = a.findFirst(function (a) {
                    return a.base64() === f
                }), void(h ? c({
                    image: b,
                    blobInfo: h
                }) : d.uriToBlob(b.src).then(function (d) {
                    h = a.create(g(), d, f), a.add(h), c({
                        image: b,
                        blobInfo: h
                    })
                }, function (a) {
                    e(a)
                })))
            },
            i = function (a) {
                return a ? a.getElementsByTagName("img") : []
            };
        return function (d, f) {
            var g = {},
                j = function (j, k) {
                    var l, m;
                    return k || (k = c.constant(!0)), l = b.filter(i(j), function (a) {
                        var b = a.src;
                        return !!e.fileApi && (!a.hasAttribute("data-mce-bogus") && (!a.hasAttribute("data-mce-placeholder") && (!(!b || b == e.transparentSrc) && (0 === b.indexOf("blob:") ? !d.isUploaded(b) : 0 === b.indexOf("data:") && k(a)))))
                    }), m = b.map(l, function (b) {
                        var c;
                        return g[b.src] ? new a(function (a) {
                            g[b.src].then(function (c) {
                                return "string" == typeof c ? c : void a({
                                    image: b,
                                    blobInfo: c.blobInfo
                                })
                            })
                        }) : (c = new a(function (a, c) {
                            h(f, b, a, c)
                        }).then(function (a) {
                            return delete g[a.image.src], a
                        })["catch"](function (a) {
                            return delete g[b.src], a
                        }), g[b.src] = c, c)
                    }), a.all(m)
                };
            return {
                findAll: j
            }
        }
    }), g("27", [], function () {
        var a = 0,
            b = function () {
                var a = function () {
                        return Math.round(4294967295 * Math.random()).toString(36)
                    },
                    b = (new Date).getTime();
                return "s" + b.toString(36) + a() + a() + a()
            },
            c = function (c) {
                return c + a++ + b()
            };
        return {
            uuid: c
        }
    }), g("6t", ["1k", "1r", "3q", "27"], function (a, b, c, d) {
        return function () {
            var e = [],
                f = c.constant,
                g = function (a) {
                    var b = {
                        "image/jpeg": "jpg",
                        "image/jpg": "jpg",
                        "image/gif": "gif",
                        "image/png": "png"
                    };
                    return b[a.toLowerCase()] || "dat"
                },
                h = function (a, b, c, d) {
                    return i("object" == typeof a ? a : {
                        id: a,
                        name: d,
                        blob: b,
                        base64: c
                    })
                },
                i = function (b) {
                    var c, e;
                    if (!b.blob || !b.base64) throw "blob and base64 representations of the image are required for BlobInfo to be created";
                    return c = b.id || d.uuid("blobid"), e = b.name || c, {
                        id: f(c),
                        name: f(e),
                        filename: f(e + "." + g(b.blob.type)),
                        blob: f(b.blob),
                        base64: f(b.base64),
                        blobUri: f(b.blobUri || a.createObjectURL(b.blob)),
                        uri: f(b.uri)
                    }
                },
                j = function (a) {
                    k(a.id()) || e.push(a)
                },
                k = function (a) {
                    return l(function (b) {
                        return b.id() === a
                    })
                },
                l = function (a) {
                    return b.filter(e, a)[0]
                },
                m = function (a) {
                    return l(function (b) {
                        return b.blobUri() == a
                    })
                },
                n = function (c) {
                    e = b.filter(e, function (b) {
                        return b.blobUri() !== c || (a.revokeObjectURL(b.blobUri()), !1)
                    })
                },
                o = function () {
                    b.each(e, function (b) {
                        a.revokeObjectURL(b.blobUri())
                    }), e = []
                };
            return {
                create: h,
                add: j,
                get: k,
                getByUri: m,
                findFirst: l,
                removeByUri: n,
                destroy: o
            }
        }
    }), g("6u", [], function () {
        return function () {
            var a = 1,
                b = 2,
                c = {},
                d = function (a, b) {
                    return {
                        status: a,
                        resultUri: b
                    }
                },
                e = function (a) {
                    return a in c
                },
                f = function (a) {
                    var b = c[a];
                    return b ? b.resultUri : null
                },
                g = function (b) {
                    return !!e(b) && c[b].status === a
                },
                h = function (a) {
                    return !!e(a) && c[a].status === b
                },
                i = function (b) {
                    c[b] = d(a, null)
                },
                j = function (a, e) {
                    c[a] = d(b, e)
                },
                k = function (a) {
                    delete c[a]
                },
                l = function () {
                    c = {}
                };
            return {
                hasBlobUri: e,
                getResultUri: f,
                isPending: g,
                isUploaded: h,
                markPending: i,
                markUploaded: j,
                removeFailed: k,
                destroy: l
            }
        }
    }), g("6i", ["1r", "6r", "6s", "6t", "6u", "29"], function (a, b, c, d, e, f) {
        return function (g) {
            var h, i, j = new d,
                k = g.settings,
                l = new e,
                m = function (a) {
                    return function (b) {
                        return g.selection ? a(b) : []
                    }
                },
                n = function () {
                    return "?" + (new Date).getTime()
                },
                o = function (a, b, c) {
                    var d = 0;
                    do d = a.indexOf(b, d), d !== -1 && (a = a.substring(0, d) + c + a.substr(d + b.length), d += c.length - b.length + 1); while (d !== -1);
                    return a
                },
                p = function (a, b, c) {
                    return a = o(a, 'src="' + b + '"', 'src="' + c + '"'), a = o(a, 'data-mce-src="' + b + '"', 'data-mce-src="' + c + '"')
                },
                q = function (b, c) {
                    a.each(g.undoManager.data, function (d) {
                        "fragmented" === d.type ? d.fragments = a.map(d.fragments, function (a) {
                            return p(a, b, c)
                        }) : d.content = p(d.content, b, c)
                    })
                },
                r = function () {
                    return g.notificationManager.open({
                        text: g.translate("Image uploading..."),
                        type: "info",
                        timeout: -1,
                        progressBar: !0
                    })
                },
                s = function (a, b) {
                    j.removeByUri(a.src), q(a.src, b), g.$(a).attr({
                        src: k.images_reuse_filename ? b + n() : b,
                        "data-mce-src": g.convertURL(b, "src")
                    })
                },
                t = function (c) {
                    return h || (h = new b(l, {
                        url: k.images_upload_url,
                        basePath: k.images_upload_base_path,
                        credentials: k.images_upload_credentials,
                        handler: k.images_upload_handler
                    })), w().then(m(function (b) {
                        var d;
                        return d = a.map(b, function (a) {
                            return a.blobInfo
                        }), h.upload(d, r).then(m(function (d) {
                            var e = a.map(d, function (a, c) {
                                var d = b[c].image;
                                return a.status && g.settings.images_replace_blob_uris !== !1 ? s(d, a.url) : a.error && f.uploadError(g, a.error), {
                                    element: d,
                                    status: a.status
                                }
                            });
                            return c && c(e), e
                        }))
                    }))
                },
                u = function (a) {
                    if (k.automatic_uploads !== !1) return t(a);
                },
                v = function (a) {
                    return !k.images_dataimg_filter || k.images_dataimg_filter(a)
                },
                w = function () {
                    return i || (i = new c(l, j)), i.findAll(g.getBody(), v).then(m(function (b) {
                        return b = a.filter(b, function (a) {
                            return "string" != typeof a || (f.displayError(g, a), !1)
                        }), a.each(b, function (a) {
                            q(a.image.src, a.blobInfo.blobUri()), a.image.src = a.blobInfo.blobUri(), a.image.removeAttribute("data-mce-src")
                        }), b
                    }))
                },
                x = function () {
                    j.destroy(), l.destroy(), i = h = null
                },
                y = function (b) {
                    return b.replace(/src="(blob:[^"]+)"/g, function (b, c) {
                        var d = l.getResultUri(c);
                        if (d) return 'src="' + d + '"';
                        var e = j.getByUri(c);
                        return e || (e = a.reduce(g.editorManager.get(), function (a, b) {
                            return a || b.editorUpload && b.editorUpload.blobCache.getByUri(c)
                        }, null)), e ? 'src="data:' + e.blob().type + ";base64," + e.base64() + '"' : b
                    })
                };
            return g.on("setContent", function () {
                g.settings.automatic_uploads !== !1 ? u() : w()
            }), g.on("RawSaveContent", function (a) {
                a.content = y(a.content)
            }), g.on("getContent", function (a) {
                a.source_view || "raw" == a.format || (a.content = y(a.content))
            }), g.on("PostRender", function () {
                g.parser.addNodeFilter("img", function (b) {
                    a.each(b, function (a) {
                        var b = a.attr("src");
                        if (!j.getByUri(b)) {
                            var c = l.getResultUri(b);
                            c && a.attr("src", c)
                        }
                    })
                })
            }), {
                blobCache: j,
                uploadImages: t,
                uploadImagesAuto: u,
                scanForImages: w,
                destroy: x
            }
        }
    }), g("6j", ["1i", "1", "1v", "2r", "1y", "5s", "24"], function (a, b, c, d, e, f, g) {
        var h = function (a, b) {
                return a.hasOwnProperty(b.nodeName)
            },
            i = function (a, b) {
                return !!e.isText(b) || !!e.isElement(b) && (!h(a, b) && !d.isBookmarkNode(b))
            },
            j = function (b, d, e) {
                return a.exists(f.parents(c.fromDom(e), c.fromDom(d)), function (a) {
                    return h(b, a.dom())
                })
            },
            k = function (a) {
                var b, c, d, f, h, k, l, m, n, o, p, q = a.settings,
                    r = a.dom,
                    s = a.selection,
                    t = a.schema,
                    u = t.getBlockElements(),
                    v = s.getStart(),
                    w = a.getBody();
                if (p = q.forced_root_block, v && e.isElement(v) && p && (o = w.nodeName.toLowerCase(), t.isValidChild(o, p.toLowerCase()) && !j(u, w, v))) {
                    for (b = s.getRng(), c = b.startContainer, d = b.startOffset, f = b.endContainer, h = b.endOffset, n = g.hasFocus(a), v = w.firstChild; v;)
                        if (i(u, v)) {
                            if (e.isText(v) && 0 === v.nodeValue.length) {
                                l = v, v = v.nextSibling, r.remove(l);
                                continue
                            }
                            k || (k = r.create(p, a.settings.forced_root_block_attrs), v.parentNode.insertBefore(k, v), m = !0), l = v, v = v.nextSibling, k.appendChild(l)
                        } else k = null, v = v.nextSibling;
                    m && n && (b.setStart(c, d), b.setEnd(f, h), s.setRng(b), a.nodeChanged())
                }
            },
            l = function (a) {
                a.settings.forced_root_block && a.on("NodeChange", b.curry(k, a))
            };
        return {
            setup: l
        }
    }), g("6k", ["b", "2u", "15"], function (a, b, c) {
        return function (d) {
            var e, f = [],
                g = function (a) {
                    var b, c;
                    if (c = d.$(a).parentsUntil(d.getBody()).add(a), c.length === f.length) {
                        for (b = c.length; b >= 0 && c[b] === f[b]; b--);
                        if (b === -1) return f = c, !0
                    }
                    return f = c, !1
                };
            "onselectionchange" in d.getDoc() || d.on("NodeChange Click MouseUp KeyUp Focus", function (a) {
                var c, f;
                c = d.selection.getRng(), f = {
                    startContainer: c.startContainer,
                    startOffset: c.startOffset,
                    endContainer: c.endContainer,
                    endOffset: c.endOffset
                }, "nodechange" != a.type && b.isEq(f, e) || d.fire("SelectionChange"), e = f
            }), d.on("contextmenu", function () {
                d.fire("SelectionChange")
            }), d.on("SelectionChange", function () {
                var b = d.selection.getStart(!0);
                !b || !a.range && d.selection.isCollapsed() || !g(b) && d.dom.isChildOf(b, d.getBody()) && d.nodeChanged({
                    selectionChange: !0
                })
            }), d.on("MouseUp", function (a) {
                a.isDefaultPrevented() || ("IMG" == d.selection.getNode().nodeName ? c.setEditorTimeout(d, function () {
                    d.nodeChanged()
                }) : d.nodeChanged())
            }), this.nodeChanged = function (a) {
                var b, c, e, f = d.selection;
                d.initialized && f && !d.settings.disable_nodechange && !d.readonly && (e = d.getBody(), b = f.getStart(!0) || e, b.ownerDocument == d.getDoc() && d.dom.isChildOf(b, e) || (b = e), c = [], d.dom.getParent(b, function (a) {
                    return a === e || void c.push(a)
                }), a = a || {}, a.element = b, a.parents = c, d.fire("NodeChange", a))
            }
        }
    }), g("76", [], function () {
        var a = function (a) {
                var b, c, d, e;
                return e = a.getBoundingClientRect(), b = a.ownerDocument, c = b.documentElement, d = b.defaultView, {
                    top: e.top + d.pageYOffset - c.clientTop,
                    left: e.left + d.pageXOffset - c.clientLeft
                }
            },
            b = function (b) {
                return b.inline ? a(b.getBody()) : {
                    left: 0,
                    top: 0
                }
            },
            c = function (a) {
                var b = a.getBody();
                return a.inline ? {
                    left: b.scrollLeft,
                    top: b.scrollTop
                } : {
                    left: 0,
                    top: 0
                }
            },
            d = function (a) {
                var b = a.getBody(),
                    c = a.getDoc().documentElement,
                    d = {
                        left: b.scrollLeft,
                        top: b.scrollTop
                    },
                    e = {
                        left: b.scrollLeft || c.scrollLeft,
                        top: b.scrollTop || c.scrollTop
                    };
                return a.inline ? d : e
            },
            e = function (b, c) {
                if (c.target.ownerDocument !== b.getDoc()) {
                    var e = a(b.getContentAreaContainer()),
                        f = d(b);
                    return {
                        left: c.pageX - e.left + f.left,
                        top: c.pageY - e.top + f.top
                    }
                }
                return {
                    left: c.pageX,
                    top: c.pageY
                }
            },
            f = function (a, b, c) {
                return {
                    pageX: c.left - a.left + b.left,
                    pageY: c.top - a.top + b.top
                }
            },
            g = function (a, d) {
                return f(b(a), c(a), e(a, d))
            };
        return {
            calc: g
        }
    }), g("6v", ["1j", "m", "76", "1y", "1r", "15", "3q"], function (a, b, c, d, e, f, g) {
        var h = d.isContentEditableFalse,
            i = d.isContentEditableTrue,
            j = function (a, b) {
                return h(b) && b !== a
            },
            k = function (a, b, c) {
                return b !== c && !a.dom.isChildOf(b, c) && !h(b)
            },
            l = function (a) {
                var b = a.cloneNode(!0);
                return b.removeAttribute("data-mce-selected"), b
            },
            m = function (a, b, c, d) {
                var e = b.cloneNode(!0);
                a.dom.setStyles(e, {
                    width: c,
                    height: d
                }), a.dom.setAttrib(e, "data-mce-selected", null);
                var f = a.dom.create("div", {
                    "class": "mce-drag-container",
                    "data-mce-bogus": "all",
                    unselectable: "on",
                    contenteditable: "false"
                });
                return a.dom.setStyles(f, {
                    position: "absolute",
                    opacity: .5,
                    overflow: "hidden",
                    border: 0,
                    padding: 0,
                    margin: 0,
                    width: c,
                    height: d
                }), a.dom.setStyles(e, {
                    margin: 0,
                    boxSizing: "border-box"
                }), f.appendChild(e), f
            },
            n = function (a, b) {
                a.parentNode !== b && b.appendChild(a)
            },
            o = function (a, b, c, d, e, f) {
                var g = 0,
                    h = 0;
                a.style.left = b.pageX + "px", a.style.top = b.pageY + "px", b.pageX + c > e && (g = b.pageX + c - e), b.pageY + d > f && (h = b.pageY + d - f), a.style.width = c - g + "px", a.style.height = d - h + "px"
            },
            p = function (a) {
                a && a.parentNode && a.parentNode.removeChild(a)
            },
            q = function (a) {
                return 0 === a.button
            },
            r = function (a) {
                return a.element
            },
            s = function (a, b) {
                return {
                    pageX: b.pageX - a.relX,
                    pageY: b.pageY + 5
                }
            },
            t = function (a, b) {
                return function (c) {
                    if (q(c)) {
                        var d = e.find(b.dom.getParents(c.target), g.or(h, i));
                        if (j(b.getBody(), d)) {
                            var f = b.dom.getPos(d),
                                k = b.getBody(),
                                l = b.getDoc().documentElement;
                            a.element = d, a.screenX = c.screenX, a.screenY = c.screenY, a.maxX = (b.inline ? k.scrollWidth : l.offsetWidth) - 2, a.maxY = (b.inline ? k.scrollHeight : l.offsetHeight) - 2, a.relX = c.pageX - f.x, a.relY = c.pageY - f.y, a.width = d.offsetWidth, a.height = d.offsetHeight, a.ghost = m(b, d, a.width, a.height)
                        }
                    }
                }
            },
            u = function (a, b) {
                var d = f.throttle(function (a, c) {
                    b._selectionOverrides.hideFakeCaret(), b.selection.placeCaretAt(a, c)
                }, 0);
                return function (e) {
                    var f = Math.max(Math.abs(e.screenX - a.screenX), Math.abs(e.screenY - a.screenY));
                    if (r(a) && !a.dragging && f > 10) {
                        var g = b.fire("dragstart", {
                            target: a.element
                        });
                        if (g.isDefaultPrevented()) return;
                        a.dragging = !0, b.focus()
                    }
                    if (a.dragging) {
                        var h = s(a, c.calc(b, e));
                        n(a.ghost, b.getBody()), o(a.ghost, h, a.width, a.height, a.maxX, a.maxY), d(e.clientX, e.clientY)
                    }
                }
            },
            v = function (a) {
                var b = a.getSel().getRangeAt(0),
                    c = b.startContainer;
                return 3 === c.nodeType ? c.parentNode : c
            },
            w = function (a, b) {
                return function (c) {
                    if (a.dragging && k(b, v(b.selection), a.element)) {
                        var d = l(a.element),
                            e = b.fire("drop", {
                                targetClone: d,
                                clientX: c.clientX,
                                clientY: c.clientY
                            });
                        e.isDefaultPrevented() || (d = e.targetClone, b.undoManager.transact(function () {
                            p(a.element), b.insertContent(b.dom.getOuterHTML(d)), b._selectionOverrides.hideFakeCaret()
                        }))
                    }
                    y(a)
                }
            },
            x = function (a, b) {
                return function () {
                    y(a), a.dragging && b.fire("dragend")
                }
            },
            y = function (a) {
                a.dragging = !1, a.element = null, p(a.ghost)
            },
            z = function (c) {
                var d, e, f, g, h, i, j = {};
                d = b.DOM, i = a, e = t(j, c), f = u(j, c), g = w(j, c), h = x(j, c), c.on("mousedown", e), c.on("mousemove", f), c.on("mouseup", g), d.bind(i, "mousemove", f), d.bind(i, "mouseup", h), c.on("remove", function () {
                    d.unbind(i, "mousemove", f), d.unbind(i, "mouseup", h)
                })
            },
            A = function (a) {
                a.on("drop", function (b) {
                    var c = "undefined" != typeof b.clientX ? a.getDoc().elementFromPoint(b.clientX, b.clientY) : null;
                    (h(c) || h(a.dom.getContentEditableParent(c))) && b.preventDefault()
                })
            },
            B = function (a) {
                z(a), A(a)
            };
        return {
            init: B
        }
    }), g("6w", ["1n", "46", "6g", "n", "1y", "3o", "15"], function (a, b, c, d, e, f, g) {
        var h = e.isContentEditableFalse,
            i = function (a) {
                return a && /^(TD|TH)$/i.test(a.nodeName)
            };
        return function (e, j) {
            var k, l, m = null,
                n = function (a, b) {
                    var c, d, g, h, i, j = f.collapse(a.getBoundingClientRect(), b);
                    return "BODY" == e.tagName ? (c = e.ownerDocument.documentElement, d = e.scrollLeft || c.scrollLeft, g = e.scrollTop || c.scrollTop) : (i = e.getBoundingClientRect(), d = e.scrollLeft - i.left, g = e.scrollTop - i.top), j.left += d, j.right += d, j.top += g, j.bottom += g, j.width = 1, h = a.offsetWidth - a.clientWidth, h > 0 && (b && (h *= -1), j.left += h, j.right += h), j
                },
                o = function () {
                    var a, c, f, g, h;
                    for (a = d("*[contentEditable=false]", e), g = 0; g < a.length; g++) c = a[g], f = c.previousSibling, b.endsWithCaretContainer(f) && (h = f.data, 1 == h.length ? f.parentNode.removeChild(f) : f.deleteData(h.length - 1, 1)), f = c.nextSibling, b.startsWithCaretContainer(f) && (h = f.data, 1 == h.length ? f.parentNode.removeChild(f) : f.deleteData(0, 1));
                    return null
                },
                p = function (a, c) {
                    var f, g;
                    return q(), i(c) ? null : j(c) ? (l = b.insertBlock("p", c, a), f = n(c, a), d(l).css("top", f.top), m = d('<div class="mce-visual-caret" data-mce-bogus="all"></div>').css(f).appendTo(e), a && m.addClass("mce-visual-caret-before"), s(), g = c.ownerDocument.createRange(), g.setStart(l, 0), g.setEnd(l, 0), g) : (l = b.insertInline(c, a), g = c.ownerDocument.createRange(), h(l.nextSibling) ? (g.setStart(l, 0), g.setEnd(l, 0)) : (g.setStart(l, 1), g.setEnd(l, 1)), g)
                },
                q = function () {
                    o(), l && (c.remove(l), l = null), m && (m.remove(), m = null), a(k)
                },
                r = function () {
                    return e.ownerDocument.activeElement === e
                },
                s = function () {
                    k = g.setInterval(function () {
                        r() ? d("div.mce-visual-caret", e).toggleClass("mce-visual-caret-hidden") : d("div.mce-visual-caret", e).addClass("mce-visual-caret-hidden")
                    }, 500)
                },
                t = function () {
                    g.clearInterval(k)
                },
                u = function () {
                    return ".mce-visual-caret {position: absolute;background-color: black;background-color: currentcolor;}.mce-visual-caret-hidden {display: none;}*[data-mce-caret] {position: absolute;left: -1000px;right: auto;top: 0;margin: 0;padding: 0;}"
                };
            return {
                show: p,
                hide: q,
                getCss: u,
                destroy: t
            }
        }
    }), g("77", ["1r", "1y", "3o"], function (a, b, c) {
        var d = function (e) {
            var f = function (b) {
                return a.map(b, function (a) {
                    return a = c.clone(a), a.node = e, a
                })
            };
            if (a.isArray(e)) return a.reduce(e, function (a, b) {
                return a.concat(d(b))
            }, []);
            if (b.isElement(e)) return f(e.getClientRects());
            if (b.isText(e)) {
                var g = e.ownerDocument.createRange();
                return g.setStart(e, 0), g.setEnd(e, e.data.length), f(g.getClientRects())
            }
        };
        return {
            getClientRects: d
        }
    }), g("6x", ["3q", "1r", "1y", "77", "3o", "5b", "3n"], function (a, b, c, d, e, f, g) {
        var h = c.isContentEditableFalse,
            i = f.findNode,
            j = a.curry,
            k = function (a, b) {
                return Math.abs(a.left - b)
            },
            l = function (a, b) {
                return Math.abs(a.right - b)
            },
            m = function (a, c) {
                var d = function (a, b) {
                    return a >= b.left && a <= b.right
                };
                return b.reduce(a, function (a, b) {
                    var e, f;
                    return e = Math.min(k(a, c), l(a, c)), f = Math.min(k(b, c), l(b, c)), d(c, b) ? b : d(c, a) ? a : f == e && h(b.node) ? b : f < e ? b : a
                })
            },
            n = function (a, b, c, d) {
                for (; d = i(d, a, g.isEditableCaretCandidate, b);)
                    if (c(d)) return
            },
            o = function (a, c) {
                var f = [],
                    g = function (a, e) {
                        var g;
                        return g = b.filter(d.getClientRects(e), function (b) {
                            return !a(b, c)
                        }), f = f.concat(g), 0 === g.length
                    };
                return f.push(c), n(-1, a, j(g, e.isAbove), c.node), n(1, a, j(g, e.isBelow), c.node), f
            },
            p = function (a) {
                return b.filter(b.toArray(a.getElementsByTagName("*")), h)
            },
            q = function (a, b) {
                return {
                    node: a.node,
                    before: k(a, b) < l(a, b)
                }
            },
            r = function (a, c, e) {
                var f, g;
                return f = d.getClientRects(p(a)), f = b.filter(f, function (a) {
                    return e >= a.top && e <= a.bottom
                }), g = m(f, c), g && (g = m(o(a, g), c), g && h(g.node)) ? q(g, c) : null
            };
        return {
            findClosestClientRect: m,
            findLineNodeRects: o,
            closestCaret: r
        }
    }), g("30", ["1i", "3o"], function (a, b) {
        var c = function (c, d, e) {
            return !e.collapsed && a.foldl(e.getClientRects(), function (a, e) {
                return a || b.containsXY(e, c, d)
            }, !1)
        };
        return {
            isXYWithinRange: c
        }
    }), g("5y", ["1o", "1q"], function (a, b) {
        var c = function (c, d) {
                var e = null,
                    f = null,
                    g = function () {
                        null !== e && (a(e), e = null, f = null)
                    },
                    h = function () {
                        f = arguments, null === e && (e = b(function () {
                            c.apply(null, f), e = null, f = null
                        }, d))
                    };
                return {
                    cancel: g,
                    throttle: h
                }
            },
            d = function (c, d) {
                var e = null,
                    f = function () {
                        null !== e && (a(e), e = null)
                    },
                    g = function () {
                        var a = arguments;
                        null === e && (e = b(function () {
                            c.apply(null, a), e = null, a = null
                        }, d))
                    };
                return {
                    cancel: f,
                    throttle: g
                }
            },
            e = function (c, d) {
                var e = null,
                    f = function () {
                        null !== e && (a(e), e = null)
                    },
                    g = function () {
                        var f = arguments;
                        null !== e && a(e), e = b(function () {
                            c.apply(null, f), e = null, f = null
                        }, d)
                    };
                return {
                    cancel: f,
                    throttle: g
                }
            };
        return {
            adaptable: c,
            first: d,
            last: e
        }
    }), g("6z", ["32", "5b", "1y", "3q"], function (a, b, c, d) {
        var e = c.isContentEditableTrue,
            f = c.isContentEditableFalse,
            g = function (a, b, c, d) {
                return b._selectionOverrides.showCaret(a, c, d)
            },
            h = function (a) {
                var b = a.ownerDocument.createRange();
                return b.selectNode(a), b
            },
            i = function (a, b) {
                var c;
                return c = a.fire("BeforeObjectSelected", {
                    target: b
                }), c.isDefaultPrevented() ? null : h(b)
            },
            j = function (c, h) {
                var i, j;
                return h = b.normalizeRange(1, c.getBody(), h), i = a.fromRangeStart(h), f(i.getNode()) ? g(1, c, i.getNode(), !i.isAtEnd()) : f(i.getNode(!0)) ? g(1, c, i.getNode(!0), !1) : (j = c.dom.getParent(i.getNode(), d.or(f, e)), f(j) ? g(1, c, j, !1) : null)
            },
            k = function (a, b) {
                var c;
                return b && b.collapsed ? (c = j(a, b), c ? c : b) : b
            };
        return {
            showCaret: g,
            selectNode: i,
            renderCaretAtRange: j,
            renderRangeCaret: k
        }
    }), g("6y", ["5y", "6z"], function (a, b) {
        var c = function (c) {
            var d = a.first(function () {
                if (!c.removed) {
                    var a = b.renderRangeCaret(c, c.selection.getRng());
                    c.selection.setRng(a)
                }
            }, 0);
            c.on("focus", function () {
                d.throttle()
            }), c.on("blur", function () {
                d.cancel()
            })
        };
        return {
            setup: c
        }
    }), g("1g", ["b"], function (a) {
        return {
            BACKSPACE: 8,
            DELETE: 46,
            DOWN: 40,
            ENTER: 13,
            LEFT: 37,
            RIGHT: 39,
            SPACEBAR: 32,
            TAB: 9,
            UP: 38,
            modifierPressed: function (a) {
                return a.shiftKey || a.ctrlKey || a.altKey || this.metaKeyPressed(a)
            },
            metaKeyPressed: function (b) {
                return a.mac ? b.metaKey : b.ctrlKey && !b.altKey
            }
        }
    }), g("6l", ["1i", "47", "1v", "48", "5f", "62", "6v", "2o", "b", "46", "32", "5b", "3r", "6w", "6x", "1y", "30", "6y", "6z", "1g"], function (a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t) {
        var u = p.isContentEditableTrue,
            v = p.isContentEditableFalse,
            w = l.isAfterContentEditableFalse,
            x = l.isBeforeContentEditableFalse,
            y = function (p) {
                var y, z = function (a) {
                        return p.dom.isBlock(a)
                    },
                    A = p.getBody(),
                    B = new n(p.getBody(), z),
                    C = "sel-" + p.dom.uniqueId(),
                    D = function (a) {
                        return p.dom.hasClass(a, "mce-offscreen-selection")
                    },
                    E = function () {
                        var a = p.dom.get(C);
                        return a ? a.getElementsByTagName("*")[0] : a
                    },
                    F = function (a) {
                        a && p.selection.setRng(a)
                    },
                    G = function () {
                        return p.selection.getRng()
                    },
                    H = function (a, b) {
                        p.selection.scrollIntoView(a, b)
                    },
                    I = function (a, b, c) {
                        var d;
                        return d = p.fire("ShowCaret", {
                            target: b,
                            direction: a,
                            before: c
                        }), d.isDefaultPrevented() ? null : (H(b, a === -1), B.show(c, b))
                    },
                    J = function (a, b) {
                        return b = l.normalizeRange(a, A, b), a == -1 ? k.fromRangeStart(b) : k.fromRangeEnd(b)
                    },
                    K = function (a) {
                        a.hasAttribute("data-mce-caret") && (j.showCaretContainerBlock(a), F(G()), H(a[0]))
                    },
                    L = function () {
                        var a = function (a) {
                            for (var b = p.getBody(); a && a != b;) {
                                if (u(a) || v(a)) return a;
                                a = a.parentNode
                            }
                            return null
                        };
                        p.on("mouseup", function (a) {
                            var b = G();
                            b.collapsed && h.isXYInContentArea(p, a.clientX, a.clientY) && F(s.renderCaretAtRange(p, b))
                        }), p.on("click", function (b) {
                            var c;
                            c = a(b.target), c && (v(c) && (b.preventDefault(), p.focus()), u(c) && p.dom.isChildOf(c, p.selection.getNode()) && Q())
                        }), p.on("blur NewBlock", function () {
                            Q()
                        });
                        var b = function (b) {
                                var c = !1;
                                b.on("touchstart", function () {
                                    c = !1
                                }), b.on("touchmove", function () {
                                    c = !0
                                }), b.on("touchend", function (d) {
                                    var e = a(d.target);
                                    v(e) && (c || (d.preventDefault(), P(s.selectNode(b, e))))
                                })
                            },
                            c = function (a) {
                                var b = new m(a);
                                if (!a.firstChild) return !1;
                                var c = k.before(a.firstChild),
                                    d = b.next(c);
                                return d && !x(d) && !w(d)
                            },
                            d = function (a, b) {
                                var c = p.dom.getParent(a, p.dom.isBlock),
                                    d = p.dom.getParent(b, p.dom.isBlock);
                                return c === d
                            },
                            e = function (a, b) {
                                var e = p.dom.getParent(a, p.dom.isBlock),
                                    f = p.dom.getParent(b, p.dom.isBlock);
                                return e && !d(e, f) && c(e)
                            };
                        b(p), p.on("mousedown", function (b) {
                            var c;
                            if (h.isXYInContentArea(p, b.clientX, b.clientY) !== !1)
                                if (c = a(b.target)) v(c) ? (b.preventDefault(), P(s.selectNode(p, c))) : (Q(), u(c) && b.shiftKey || q.isXYWithinRange(b.clientX, b.clientY, p.selection.getRng()) || p.selection.placeCaretAt(b.clientX, b.clientY));
                                else {
                                    Q(), S();
                                    var d = o.closestCaret(A, b.clientX, b.clientY);
                                    d && (e(b.target, d.node) || (b.preventDefault(), p.getBody().focus(), F(I(1, d.node, d.before))))
                                }
                        }), p.on("keypress", function (a) {
                            if (!t.modifierPressed(a)) switch (a.keyCode) {
                                default:
                                    v(p.selection.getNode()) && a.preventDefault()
                            }
                        }), p.on("getSelectionRange", function (a) {
                            var b = a.range;
                            if (y) {
                                if (!y.parentNode) return void(y = null);
                                b = b.cloneRange(), b.selectNode(y), a.range = b
                            }
                        }), p.on("setSelectionRange", function (a) {
                            var b;
                            b = P(a.range, a.forward), b && (a.range = b)
                        }), p.on("AfterSetSelectionRange", function (a) {
                            var b = a.range;
                            O(b) || S(), D(b.startContainer.parentNode) || Q()
                        }), p.on("copy", function (a) {
                            var b = a.clipboardData;
                            if (!a.isDefaultPrevented() && a.clipboardData && !i.ie) {
                                var c = E();
                                c && (a.preventDefault(), b.clearData(), b.setData("text/html", c.outerHTML), b.setData("text/plain", c.outerText))
                            }
                        }), g.init(p), r.setup(p)
                    },
                    M = function () {
                        var a = p.contentStyles,
                            b = ".mce-content-body";
                        a.push(B.getCss()), a.push(b + " .mce-offscreen-selection {position: absolute;left: -9999999999px;max-width: 1000000px;}" + b + " *[contentEditable=false] {cursor: default;}" + b + " *[contentEditable=true] {cursor: text;}")
                    },
                    N = function (a) {
                        return j.isCaretContainer(a) || j.startsWithCaretContainer(a) || j.endsWithCaretContainer(a)
                    },
                    O = function (a) {
                        return N(a.startContainer) || N(a.endContainer)
                    },
                    P = function (b, g) {
                        var h, j, k, l, m, n, o, q, r, s, t = p.$,
                            u = p.dom;
                        if (!b) return null;
                        if (b.collapsed) {
                            if (!O(b))
                                if (g === !1) {
                                    if (q = J(-1, b), v(q.getNode(!0))) return I(-1, q.getNode(!0), !1);
                                    if (v(q.getNode())) return I(-1, q.getNode(), !q.isAtEnd())
                                } else {
                                    if (q = J(1, b), v(q.getNode())) return I(1, q.getNode(), !q.isAtEnd());
                                    if (v(q.getNode(!0))) return I(1, q.getNode(!0), !1)
                                } return null
                        }
                        return l = b.startContainer, m = b.startOffset, n = b.endOffset, 3 === l.nodeType && 0 === m && v(l.parentNode) && (l = l.parentNode, m = u.nodeIndex(l), l = l.parentNode), 1 != l.nodeType ? null : (n == m + 1 && (h = l.childNodes[m]), v(h) ? (r = s = h.cloneNode(!0), o = p.fire("ObjectSelected", {
                            target: h,
                            targetClone: r
                        }), o.isDefaultPrevented() ? null : (j = f.descendant(c.fromDom(p.getBody()), "#" + C).fold(function () {
                            return t([])
                        }, function (a) {
                            return t([a.dom()])
                        }), r = o.targetClone, 0 === j.length && (j = t('<div data-mce-bogus="all" class="mce-offscreen-selection"></div>').attr("id", C), j.appendTo(p.getBody())), b = p.dom.createRng(), r === s && i.ie ? (j.empty().append('<p style="font-size: 0" data-mce-bogus="all">\xa0</p>').append(r), b.setStartAfter(j[0].firstChild.firstChild), b.setEndAfter(r)) : (j.empty().append("\xa0").append(r).append("\xa0"), b.setStart(j[0].firstChild, 1), b.setEnd(j[0].lastChild, 0)), j.css({
                            top: u.getPos(h, p.getBody()).y
                        }), j[0].focus(), k = p.selection.getSel(), k.removeAllRanges(), k.addRange(b), a.each(e.descendants(c.fromDom(p.getBody()), "*[data-mce-selected]"), function (a) {
                            d.remove(a, "data-mce-selected")
                        }), h.setAttribute("data-mce-selected", 1), y = h, S(), b)) : null)
                    },
                    Q = function () {
                        y && (y.removeAttribute("data-mce-selected"), f.descendant(c.fromDom(p.getBody()), "#" + C).each(b.remove), y = null)
                    },
                    R = function () {
                        B.destroy(), y = null
                    },
                    S = function () {
                        B.hide()
                    };
                return i.ceFalse && (L(), M()), {
                    showCaret: I,
                    showBlockCaretContainer: K,
                    hideFakeCaret: S,
                    destroy: R
                }
            };
        return y
    }), g("5z", [], function () {
        var a = 0,
            b = 1,
            c = 2,
            d = function (d, e) {
                var f = d.length + e.length + 2,
                    g = new Array(f),
                    h = new Array(f),
                    i = function (a, b, c) {
                        return {
                            start: a,
                            end: b,
                            diag: c
                        }
                    },
                    j = function (f, g, h, i, k) {
                        var m = l(f, g, h, i);
                        if (null === m || m.start === g && m.diag === g - i || m.end === f && m.diag === f - h)
                            for (var n = f, o = h; n < g || o < i;) n < g && o < i && d[n] === e[o] ? (k.push([a, d[n]]), ++n, ++o) : g - f > i - h ? (k.push([c, d[n]]), ++n) : (k.push([b, e[o]]), ++o);
                        else {
                            j(f, m.start, h, m.start - m.diag, k);
                            for (var p = m.start; p < m.end; ++p) k.push([a, d[p]]);
                            j(m.end, g, m.end - m.diag, i, k)
                        }
                    },
                    k = function (a, b, c, f) {
                        for (var g = a; g - b < f && g < c && d[g] === e[g - b];) ++g;
                        return i(a, g, b)
                    },
                    l = function (a, b, c, f) {
                        var i = b - a,
                            j = f - c;
                        if (0 === i || 0 === j) return null;
                        var l = i - j,
                            m = j + i,
                            n = (m % 2 === 0 ? m : m + 1) / 2;
                        g[1 + n] = a, h[1 + n] = b + 1;
                        for (var o = 0; o <= n; ++o) {
                            for (var p = -o; p <= o; p += 2) {
                                var q = p + n;
                                p === -o || p != o && g[q - 1] < g[q + 1] ? g[q] = g[q + 1] : g[q] = g[q - 1] + 1;
                                for (var r = g[q], s = r - a + c - p; r < b && s < f && d[r] === e[s];) g[q] = ++r, ++s;
                                if (l % 2 != 0 && l - o <= p && p <= l + o && h[q - l] <= g[q]) return k(h[q - l], p + a - c, b, f)
                            }
                            for (p = l - o; p <= l + o; p += 2) {
                                for (q = p + n - l, p === l - o || p != l + o && h[q + 1] <= h[q - 1] ? h[q] = h[q + 1] - 1 : h[q] = h[q - 1], r = h[q] - 1, s = r - a + c - p; r >= a && s >= c && d[r] === e[s];) h[q] = r--, s--;
                                if (l % 2 === 0 && -o <= p && p <= o && h[q] <= g[q + l]) return k(h[q], p + a - c, b, f)
                            }
                        }
                    },
                    m = [];
                return j(0, d.length, 0, e.length, m), m
            };
        return {
            KEEP: a,
            DELETE: c,
            INSERT: b,
            diff: d
        }
    }), g("4o", ["1j", "v", "5z", "1r"], function (a, b, c, d) {
        var e = function (a) {
                return 1 === a.nodeType ? a.outerHTML : 3 === a.nodeType ? b.encodeRaw(a.data, !1) : 8 === a.nodeType ? "<!--" + a.data + "-->" : ""
            },
            f = function (b) {
                var c, d, e;
                for (e = a.createElement("div"), c = a.createDocumentFragment(), b && (e.innerHTML = b); d = e.firstChild;) c.appendChild(d);
                return c
            },
            g = function (a, b, c) {
                var d = f(b);
                if (a.hasChildNodes() && c < a.childNodes.length) {
                    var e = a.childNodes[c];
                    e.parentNode.insertBefore(d, e)
                } else a.appendChild(d)
            },
            h = function (a, b) {
                if (a.hasChildNodes() && b < a.childNodes.length) {
                    var c = a.childNodes[b];
                    c.parentNode.removeChild(c)
                }
            },
            i = function (a, b) {
                var e = 0;
                d.each(a, function (a) {
                    a[0] === c.KEEP ? e++ : a[0] === c.INSERT ? (g(b, a[1], e), e++) : a[0] === c.DELETE && h(b, e)
                })
            },
            j = function (a) {
                return d.filter(d.map(a.childNodes, e), function (a) {
                    return a.length > 0
                })
            },
            k = function (a, b) {
                var f = d.map(b.childNodes, e);
                return i(c.diff(f, a), b), b
            };
        return {
            read: j,
            write: k
        }
    }), g("2c", ["1i", "23", "4o"], function (a, b, c) {
        var d = function (a) {
                return a.indexOf("</iframe>") !== -1
            },
            e = function (a) {
                return {
                    type: "fragmented",
                    fragments: a,
                    content: "",
                    bookmark: null,
                    beforeBookmark: null
                }
            },
            f = function (a) {
                return {
                    type: "complete",
                    fragments: null,
                    content: a,
                    bookmark: null,
                    beforeBookmark: null
                }
            },
            g = function (g) {
                var h, i, j;
                return h = c.read(g.getBody()), j = a.bind(h, function (a) {
                    var c = b.trimInternal(g.serializer, a);
                    return c.length > 0 ? [c] : []
                }), i = j.join(""), d(i) ? e(j) : f(i)
            },
            h = function (a, b, d) {
                "fragmented" === b.type ? c.write(b.fragments, a.getBody()) : a.setContent(b.content, {
                    format: "raw"
                }), a.selection.moveToBookmark(d ? b.beforeBookmark : b.bookmark)
            },
            i = function (a) {
                return "fragmented" === a.type ? a.fragments.join("") : a.content
            },
            j = function (a, b) {
                return !!a && !!b && i(a) === i(b)
            };
        return {
            createFragmentedLevel: e,
            createCompleteLevel: f,
            createFromEditor: g,
            applyToEditor: h,
            isEq: j
        }
    }), g("d", ["2b", "2c", "1e"], function (a, b, c) {
        return function (d) {
            var e, f, g = this,
                h = 0,
                i = [],
                j = 0,
                k = function () {
                    return 0 === j
                },
                l = function (a) {
                    k() && (g.typing = a)
                },
                m = function (a) {
                    d.setDirty(a)
                },
                n = function (a) {
                    l(!1), g.add({}, a)
                },
                o = function () {
                    g.typing && (l(!1), g.add())
                };
            return d.on("init", function () {
                g.add()
            }), d.on("BeforeExecCommand", function (a) {
                var b = a.command;
                "Undo" !== b && "Redo" !== b && "mceRepaint" !== b && (o(), g.beforeChange())
            }), d.on("ExecCommand", function (a) {
                var b = a.command;
                "Undo" !== b && "Redo" !== b && "mceRepaint" !== b && n(a)
            }), d.on("ObjectResizeStart Cut", function () {
                g.beforeChange()
            }), d.on("SaveContent ObjectResized blur", n), d.on("DragEnd", n), d.on("KeyUp", function (a) {
                var c = a.keyCode;
                a.isDefaultPrevented() || ((c >= 33 && c <= 36 || c >= 37 && c <= 40 || 45 === c || a.ctrlKey) && (n(), d.nodeChanged()), 46 !== c && 8 !== c || d.nodeChanged(), f && g.typing && b.isEq(b.createFromEditor(d), i[0]) === !1 && (d.isDirty() === !1 && (m(!0), d.fire("change", {
                    level: i[0],
                    lastLevel: null
                })), d.fire("TypingUndo"), f = !1, d.nodeChanged()))
            }), d.on("KeyDown", function (a) {
                var b = a.keyCode;
                if (!a.isDefaultPrevented()) {
                    if (b >= 33 && b <= 36 || b >= 37 && b <= 40 || 45 === b) return void(g.typing && n(a));
                    var c = a.ctrlKey && !a.altKey || a.metaKey;
                    !(b < 16 || b > 20) || 224 === b || 91 === b || g.typing || c || (g.beforeChange(), l(!0), g.add({}, a), f = !0)
                }
            }), d.on("MouseDown", function (a) {
                g.typing && n(a)
            }), d.addShortcut("meta+z", "", "Undo"), d.addShortcut("meta+y,meta+shift+z", "", "Redo"), d.on("AddUndo Undo Redo ClearUndos", function (a) {
                a.isDefaultPrevented() || d.nodeChanged()
            }), g = {
                data: i,
                typing: !1,
                beforeChange: function () {
                    k() && (e = a.getUndoBookmark(d.selection))
                },
                add: function (f, g) {
                    var j, l, n, o = d.settings;
                    if (n = b.createFromEditor(d), f = f || {}, f = c.extend(f, n), k() === !1 || d.removed) return null;
                    if (l = i[h], d.fire("BeforeAddUndo", {
                            level: f,
                            lastLevel: l,
                            originalEvent: g
                        }).isDefaultPrevented()) return null;
                    if (l && b.isEq(l, f)) return null;
                    if (i[h] && (i[h].beforeBookmark = e), o.custom_undo_redo_levels && i.length > o.custom_undo_redo_levels) {
                        for (j = 0; j < i.length - 1; j++) i[j] = i[j + 1];
                        i.length--, h = i.length
                    }
                    f.bookmark = a.getUndoBookmark(d.selection), h < i.length - 1 && (i.length = h + 1), i.push(f), h = i.length - 1;
                    var p = {
                        level: f,
                        lastLevel: l,
                        originalEvent: g
                    };
                    return d.fire("AddUndo", p), h > 0 && (m(!0), d.fire("change", p)), f
                },
                undo: function () {
                    var a;
                    return g.typing && (g.add(), g.typing = !1, l(!1)), h > 0 && (a = i[--h], b.applyToEditor(d, a, !0), m(!0), d.fire("undo", {
                        level: a
                    })), a
                },
                redo: function () {
                    var a;
                    return h < i.length - 1 && (a = i[++h], b.applyToEditor(d, a, !1), m(!0), d.fire("redo", {
                        level: a
                    })), a
                },
                clear: function () {
                    i = [], h = 0, g.typing = !1, g.data = i, d.fire("ClearUndos")
                },
                hasUndo: function () {
                    return h > 0 || g.typing && i[0] && !b.isEq(b.createFromEditor(d), i[0])
                },
                hasRedo: function () {
                    return h < i.length - 1 && !g.typing
                },
                transact: function (a) {
                    return o(), g.beforeChange(), g.ignore(a), g.add()
                },
                ignore: function (a) {
                    try {
                        j++, a()
                    } finally {
                        j--
                    }
                },
                extra: function (a, c) {
                    var e, f;
                    g.transact(a) && (f = i[h].bookmark, e = i[h - 1], b.applyToEditor(d, e, !0), g.transact(c) && (i[h - 1].beforeBookmark = f))
                }
            }
        }
    }), g("4q", ["1r", "1y", "n"], function (a, b, c) {
        var d = {},
            e = a.filter,
            f = a.each,
            g = function (a, b) {
                var c = d[a];
                c || (d[a] = c = []), d[a].push(b)
            },
            h = function (a, b) {
                f(d[a], function (a) {
                    a(b)
                })
            };
        return g("pre", function (d) {
            var g, h, i = d.selection.getRng(),
                j = function (b) {
                    return g(b.previousSibling) && a.indexOf(h, b.previousSibling) !== -1
                },
                k = function (a, b) {
                    c(b).remove(), c(a).append("<br><br>").append(b.childNodes)
                };
            g = b.matchNodeNames("pre"), i.collapsed || (h = d.selection.getSelectedBlocks(), f(e(e(h, g), j), function (a) {
                k(a.previousSibling, a)
            }))
        }), {
            postProcess: h
        }
    }), g("2w", ["1e"], function (a) {
        var b = a.each,
            c = function (a, b) {
                var c = a.childNodes;
                return b--, b > c.length - 1 ? b = c.length - 1 : b < 0 && (b = 0), c[b] || a
            },
            d = function (a, d, e) {
                var f, g, h, i, j, k, l, m = d.startContainer,
                    n = d.startOffset,
                    o = d.endContainer,
                    p = d.endOffset;
                if (l = a.select("td[data-mce-selected],th[data-mce-selected]"), l.length > 0) return void b(l, function (a) {
                    e([a])
                });
                var q = function (a) {
                        var b;
                        return b = a[0], 3 === b.nodeType && b === m && n >= b.nodeValue.length && a.splice(0, 1), b = a[a.length - 1], 0 === p && a.length > 0 && b === o && 3 === b.nodeType && a.splice(a.length - 1, 1), a
                    },
                    r = function (a, b, c) {
                        for (var d = []; a && a != c; a = a[b]) d.push(a);
                        return d
                    },
                    s = function (a, b) {
                        do {
                            if (a.parentNode === b) return a;
                            a = a.parentNode
                        } while (a)
                    },
                    t = function (a, b, c) {
                        var d = c ? "nextSibling" : "previousSibling";
                        for (i = a, j = i.parentNode; i && i != b; i = j) j = i.parentNode, k = r(i === a ? i : i[d], d), k.length && (c || k.reverse(), e(q(k)))
                    };
                if (1 === m.nodeType && m.hasChildNodes() && (m = m.childNodes[n]), 1 === o.nodeType && o.hasChildNodes() && (o = c(o, p)), m === o) return e(q([m]));
                for (f = a.findCommonAncestor(m, o), i = m; i; i = i.parentNode) {
                    if (i === o) return t(m, f, !0);
                    if (i === f) break
                }
                for (i = o; i; i = i.parentNode) {
                    if (i === m) return t(o, f);
                    if (i === f) break
                }
                g = s(m, f) || m, h = s(o, f) || o, t(m, g, !0), k = r(g === m ? g : g.nextSibling, "nextSibling", h === o ? h.nextSibling : h), k.length && e(q(k)), t(o, h)
            };
        return {
            walk: d
        }
    });
    g("2k", ["2r", "1y", "s", "2f", "49", "4a", "2i", "2w", "1e"], function (a, b, c, d, e, f, g, h, i) {
        var j = /^(src|href|style)$/,
            k = i.each,
            l = f.isEq,
            m = function (a) {
                return /^(TH|TD)$/.test(a.nodeName)
            },
            n = function (a, d, e) {
                var f, g, h;
                return f = d[e ? "startContainer" : "endContainer"], g = d[e ? "startOffset" : "endOffset"], b.isElement(f) && (h = f.childNodes.length - 1, !e && g && g--, f = f.childNodes[g > h ? h : g]), b.isText(f) && e && g >= f.nodeValue.length && (f = new c(f, a.getBody()).next() || f), b.isText(f) && !e && 0 === g && (f = new c(f, a.getBody()).prev() || f), f
            },
            o = function (a, b, c, d) {
                var e = a.create(c, d);
                return b.parentNode.insertBefore(e, b), e.appendChild(b), e
            },
            p = function (a, c, d) {
                return !!l(c, d.inline) || (!!l(c, d.block) || (d.selector ? b.isElement(c) && a.is(c, d.selector) : void 0))
            },
            q = function (a, b) {
                return b.links && "A" === a.tagName
            },
            r = function (a, b, c, d) {
                return b = f.getNonWhiteSpaceSibling(b, c, d), !b || "BR" === b.nodeName || a.isBlock(b)
            },
            s = function (a, b, c) {
                var d, e = b.parentNode,
                    g = a.dom,
                    h = a.settings.forced_root_block;
                c.block && (h ? e === g.getRoot() && (c.list_block && l(b, c.list_block) || k(i.grep(b.childNodes), function (b) {
                    f.isValid(a, h, b.nodeName.toLowerCase()) ? d ? d.appendChild(b) : (d = o(g, b, h), g.setAttribs(d, a.settings.forced_root_block_attrs)) : d = 0
                })) : g.isBlock(b) && !g.isBlock(e) && (r(g, b, !1) || r(g, b.firstChild, !0, 1) || b.insertBefore(g.create("br"), b.firstChild), r(g, b, !0) || r(g, b.lastChild, !1, 1) || b.appendChild(g.create("br")))), c.selector && c.inline && !l(c.inline, b) || g.remove(b, 1)
            },
            t = function (a, b, c, d, e) {
                var g, h, i, m = a.dom;
                if (!p(m, d, b) && !q(d, b)) return !1;
                if ("all" !== b.remove)
                    for (k(b.styles, function (a, g) {
                            a = f.normalizeStyleValue(m, f.replaceVars(a, c), g), "number" == typeof g && (g = a, e = 0), (b.remove_similar || !e || l(f.getStyle(m, e, g), a)) && m.setStyle(d, g, ""), i = 1
                        }), i && "" === m.getAttrib(d, "style") && (d.removeAttribute("style"), d.removeAttribute("data-mce-style")), k(b.attributes, function (a, b) {
                            var g;
                            if (a = f.replaceVars(a, c), "number" == typeof b && (b = a, e = 0), !e || l(m.getAttrib(e, b), a)) {
                                if ("class" === b && (a = m.getAttrib(d, b), a && (g = "", k(a.split(/\s+/), function (a) {
                                        /mce\-\w+/.test(a) && (g += (g ? " " : "") + a)
                                    }), g))) return void m.setAttrib(d, b, g);
                                "class" === b && d.removeAttribute("className"), j.test(b) && d.removeAttribute("data-mce-" + b), d.removeAttribute(b)
                            }
                        }), k(b.classes, function (a) {
                            a = f.replaceVars(a, c), e && !m.hasClass(e, a) || m.removeClass(d, a)
                        }), h = m.getAttribs(d), g = 0; g < h.length; g++) {
                        var n = h[g].nodeName;
                        if (0 !== n.indexOf("_") && 0 !== n.indexOf("data-")) return !1
                    }
                return "none" !== b.remove ? (s(a, d, b), !0) : void 0
            },
            u = function (a, b, c, d, e) {
                var h;
                return k(f.getParents(a.dom, b.parentNode).reverse(), function (b) {
                    var f;
                    h || "_start" === b.id || "_end" === b.id || (f = g.matchNode(a, b, c, d, e), f && f.split !== !1 && (h = b))
                }), h
            },
            v = function (a, b, c, d, e, f, g, h) {
                var i, j, k, l, m, n, o = a.dom;
                if (c) {
                    for (n = c.parentNode, i = d.parentNode; i && i !== n; i = i.parentNode) {
                        for (j = o.clone(i, !1), m = 0; m < b.length; m++)
                            if (t(a, b[m], h, j, j)) {
                                j = 0;
                                break
                            } j && (k && j.appendChild(k), l || (l = j), k = j)
                    }!f || g.mixed && o.isBlock(c) || (d = o.split(c, d)), k && (e.parentNode.insertBefore(k, e), l.appendChild(e))
                }
                return d
            },
            w = function (c, j, l, p, q) {
                var r, s, w = c.formatter.get(j),
                    x = w[0],
                    y = !0,
                    z = c.dom,
                    A = c.selection,
                    B = function (a) {
                        var b = u(c, a, j, l, q);
                        return v(c, w, b, a, a, !0, x, l)
                    },
                    C = function (a) {
                        var d, e, f, g, h;
                        if (b.isElement(a) && z.getContentEditable(a) && (g = y, y = "true" === z.getContentEditable(a), h = !0), d = i.grep(a.childNodes), y && !h)
                            for (e = 0, f = w.length; e < f && !t(c, w[e], l, a, a); e++);
                        if (x.deep && d.length) {
                            for (e = 0, f = d.length; e < f; e++) C(d[e]);
                            h && (y = g)
                        }
                    },
                    D = function (c) {
                        var d = z.get(c ? "_start" : "_end"),
                            e = d[c ? "firstChild" : "lastChild"];
                        return a.isBookmarkNode(e) && (e = e[c ? "firstChild" : "lastChild"]), b.isText(e) && 0 === e.data.length && (e = c ? d.previousSibling || d.nextSibling : d.nextSibling || d.previousSibling), z.remove(d, !0), e
                    },
                    E = function (a) {
                        var d, g, i = a.commonAncestorContainer;
                        if (a = e.expandRng(c, a, w, !0), x.split) {
                            if (d = n(c, a, !0), g = n(c, a), d !== g) {
                                if (/^(TR|TH|TD)$/.test(d.nodeName) && d.firstChild && (d = "TR" === d.nodeName ? d.firstChild.firstChild || d : d.firstChild || d), i && /^T(HEAD|BODY|FOOT|R)$/.test(i.nodeName) && m(g) && g.firstChild && (g = g.firstChild || g), z.isChildOf(d, g) && d !== g && !z.isBlock(g) && !m(d) && !m(g)) return d = o(z, d, "span", {
                                    id: "_start",
                                    "data-mce-type": "bookmark"
                                }), B(d), void(d = D(!0));
                                d = o(z, d, "span", {
                                    id: "_start",
                                    "data-mce-type": "bookmark"
                                }), g = o(z, g, "span", {
                                    id: "_end",
                                    "data-mce-type": "bookmark"
                                }), B(d), B(g), d = D(!0), g = D()
                            } else d = g = B(d);
                            a.startContainer = d.parentNode ? d.parentNode : d, a.startOffset = z.nodeIndex(d), a.endContainer = g.parentNode ? g.parentNode : g, a.endOffset = z.nodeIndex(g) + 1
                        }
                        h.walk(z, a, function (a) {
                            k(a, function (a) {
                                C(a), b.isElement(a) && "underline" === c.dom.getStyle(a, "text-decoration") && a.parentNode && "underline" === f.getTextDecoration(z, a.parentNode) && t(c, {
                                    deep: !1,
                                    exact: !0,
                                    inline: "span",
                                    styles: {
                                        textDecoration: "underline"
                                    }
                                }, null, a)
                            })
                        })
                    };
                if (p) return void(p.nodeType ? (s = z.createRng(), s.setStartBefore(p), s.setEndAfter(p), E(s)) : E(p));
                if ("false" !== z.getContentEditable(A.getNode())) A.isCollapsed() && x.inline && !z.select("td[data-mce-selected],th[data-mce-selected]").length ? d.removeCaretFormat(c, j, l, q) : (r = A.getBookmark(), E(A.getRng(!0)), A.moveToBookmark(r), x.inline && g.match(c, j, l, A.getStart()) && f.moveStart(z, A, A.getRng(!0)), c.nodeChanged());
                else {
                    p = A.getNode();
                    for (var F = 0, G = w.length; F < G && (!w[F].ceFalseOverride || !t(c, w[F], l, p, p)); F++);
                }
            };
        return {
            removeFormat: t,
            remove: w
        }
    });
    g("4r", ["1", "2r", "3s", "1y", "2f", "4a", "2i", "2k", "1e"], function (a, b, c, d, e, f, g, h, i) {
        var j = i.each,
            k = function (a) {
                return a && 1 === a.nodeType && !b.isBookmarkNode(a) && !e.isCaretNode(a) && !d.isBogus(a)
            },
            l = function (a, c) {
                var d;
                for (d = a; d; d = d[c]) {
                    if (3 === d.nodeType && 0 !== d.nodeValue.length) return a;
                    if (1 === d.nodeType && !b.isBookmarkNode(d)) return d
                }
                return a
            },
            m = function (a, b, d) {
                var e, f, g = new c(a);
                if (b && d && (b = l(b, "previousSibling"), d = l(d, "nextSibling"), g.compare(b, d))) {
                    for (e = b.nextSibling; e && e !== d;) f = e, e = e.nextSibling, b.appendChild(f);
                    return a.remove(d), i.each(i.grep(d.childNodes), function (a) {
                        b.appendChild(a)
                    }), b
                }
                return d
            },
            n = function (a, b, c) {
                j(a.childNodes, function (a) {
                    k(a) && (b(a) && c(a), a.hasChildNodes() && n(a, b, c))
                })
            },
            o = function (b, c) {
                return a.curry(function (a, c) {
                    return !(!c || !f.getStyle(b, c, a))
                }, c)
            },
            p = function (b, c, d) {
                return a.curry(function (a, c, d) {
                    b.setStyle(d, a, c), "" === d.getAttribute("style") && d.removeAttribute("style"), q(b, d)
                }, c, d)
            },
            q = function (a, b) {
                "SPAN" === b.nodeName && 0 === a.getAttribs(b).length && a.remove(b, !0)
            },
            r = function (a, b) {
                var c;
                1 === b.nodeType && b.parentNode && 1 === b.parentNode.nodeType && (c = f.getTextDecoration(a, b.parentNode), a.getStyle(b, "color") && c ? a.setStyle(b, "text-decoration", c) : a.getStyle(b, "text-decoration") === c && a.setStyle(b, "text-decoration", null))
            },
            s = function (b, c, d, e) {
                (c.styles.color || c.styles.textDecoration) && (i.walk(e, a.curry(r, b), "childNodes"), r(b, e))
            },
            t = function (a, b, c, d) {
                b.styles && b.styles.backgroundColor && n(d, o(a, "fontSize"), p(a, "backgroundColor", f.replaceVars(b.styles.backgroundColor, c)))
            },
            u = function (a, b, c, d) {
                "sub" !== b.inline && "sup" !== b.inline || (n(d, o(a, "fontSize"), p(a, "fontSize", "")), a.remove(a.select("sup" === b.inline ? "sub" : "sup", d), !0))
            },
            v = function (a, b, c, d) {
                d && b.merge_siblings !== !1 && (d = m(a, f.getNonWhiteSpaceSibling(d), d), d = m(a, d, f.getNonWhiteSpaceSibling(d, !0)))
            },
            w = function (a, b, c) {
                if (b.clear_child_styles) {
                    var d = b.links ? "*:not(a)" : "*";
                    j(a.select(d, c), function (c) {
                        k(c) && j(b.styles, function (b, d) {
                            a.setStyle(c, d, "")
                        })
                    })
                }
            },
            x = function (a, b, c, d) {
                j(b, function (b) {
                    j(a.dom.select(b.inline, d), function (d) {
                        k(d) && h.removeFormat(a, b, c, d, b.exact ? d : null)
                    }), w(a.dom, b, d)
                })
            },
            y = function (a, b, c, d, e) {
                g.matchNode(a, e.parentNode, c, d) && h.removeFormat(a, b, d, e) || b.merge_with_parents && a.dom.getParent(e.parentNode, function (f) {
                    if (g.matchNode(a, f, c, d)) return h.removeFormat(a, b, d, e), !0
                })
            };
        return {
            mergeWithChildren: x,
            mergeUnderlineAndColor: s,
            mergeBackgroundColorAndFontSize: t,
            mergeSubSup: u,
            mergeSiblings: v,
            mergeWithParents: y
        }
    }), g("2e", ["2r", "1y", "2f", "49", "4a", "4q", "2i", "4r", "3u", "2w", "1e"], function (a, b, c, d, e, f, g, h, i, j, k) {
        var l = k.each,
            m = function (d) {
                return d && 1 === d.nodeType && !a.isBookmarkNode(d) && !c.isCaretNode(d) && !b.isBogus(d)
            },
            n = function (b, o, p, q) {
                var r, s, t = b.formatter.get(o),
                    u = t[0],
                    v = !q && b.selection.isCollapsed(),
                    w = b.dom,
                    x = b.selection,
                    y = function (a, b) {
                        if (b = b || u, a) {
                            if (b.onformat && b.onformat(a, b, p, q), l(b.styles, function (b, c) {
                                    w.setStyle(a, c, e.replaceVars(b, p))
                                }), b.styles) {
                                var c = w.getAttrib(a, "style");
                                c && a.setAttribute("data-mce-style", c)
                            }
                            l(b.attributes, function (b, c) {
                                w.setAttrib(a, c, e.replaceVars(b, p))
                            }), l(b.classes, function (b) {
                                b = e.replaceVars(b, p), w.hasClass(a, b) || w.addClass(a, b)
                            })
                        }
                    },
                    z = function (a, b) {
                        var d = !1;
                        return !!u.selector && (l(a, function (a) {
                            if (!("collapsed" in a && a.collapsed !== v)) return w.is(b, a.selector) && !c.isCaretNode(b) ? (y(b, a), d = !0, !1) : void 0
                        }), d)
                    },
                    A = function (d, f, i, n) {
                        var q, r, s = [],
                            v = !0;
                        q = u.inline || u.block, r = d.create(q), y(r), j.walk(d, f, function (a) {
                            var f, h = function (a) {
                                var i, j, m, w;
                                if (w = v, i = a.nodeName.toLowerCase(), j = a.parentNode.nodeName.toLowerCase(), 1 === a.nodeType && d.getContentEditable(a) && (w = v, v = "true" === d.getContentEditable(a), m = !0), e.isEq(i, "br")) return f = 0, void(u.block && d.remove(a));
                                if (u.wrapper && g.matchNode(b, a, o, p)) return void(f = 0);
                                if (v && !m && u.block && !u.wrapper && e.isTextBlock(b, i) && e.isValid(b, j, q)) return a = d.rename(a, q), y(a), s.push(a), void(f = 0);
                                if (u.selector) {
                                    var x = z(t, a);
                                    if (!u.inline || x) return void(f = 0)
                                }!v || m || !e.isValid(b, q, i) || !e.isValid(b, j, q) || !n && 3 === a.nodeType && 1 === a.nodeValue.length && 65279 === a.nodeValue.charCodeAt(0) || c.isCaretNode(a) || u.inline && d.isBlock(a) ? (f = 0, l(k.grep(a.childNodes), h), m && (v = w), f = 0) : (f || (f = d.clone(r, !1), a.parentNode.insertBefore(f, a), s.push(f)), f.appendChild(a))
                            };
                            l(a, h)
                        }), u.links === !0 && l(s, function (a) {
                            var b = function (a) {
                                "A" === a.nodeName && y(a, u), l(k.grep(a.childNodes), b)
                            };
                            b(a)
                        }), l(s, function (c) {
                            var f, i = function (b) {
                                    var c = 0;
                                    return l(b.childNodes, function (b) {
                                        e.isWhiteSpaceNode(b) || a.isBookmarkNode(b) || c++
                                    }), c
                                },
                                j = function (a) {
                                    var b = !1;
                                    return l(a.childNodes, function (a) {
                                        if (m(a)) return b = a, !1
                                    }), b
                                },
                                k = function (b) {
                                    var c, e;
                                    return c = j(b), c && !a.isBookmarkNode(c) && g.matchName(d, c, u) && (e = d.clone(c, !1), y(e), d.replace(e, b, !0), d.remove(c, 1)), e || b
                                };
                            return f = i(c), (s.length > 1 || !d.isBlock(c)) && 0 === f ? void d.remove(c, 1) : void((u.inline || u.wrapper) && (u.exact || 1 !== f || (c = k(c)), h.mergeWithChildren(b, t, p, c), h.mergeWithParents(b, u, o, p, c), h.mergeBackgroundColorAndFontSize(d, u, p, c), h.mergeSubSup(d, u, p, c), h.mergeSiblings(d, u, p, c)))
                        })
                    };
                if ("false" !== w.getContentEditable(x.getNode())) {
                    if (u) {
                        if (q) q.nodeType ? z(t, q) || (s = w.createRng(), s.setStartBefore(q), s.setEndAfter(q), A(w, d.expandRng(b, s, t), null, !0)) : A(w, q, null, !0);
                        else if (v && u.inline && !w.select("td[data-mce-selected],th[data-mce-selected]").length) c.applyCaretFormat(b, o, p);
                        else {
                            var B = b.selection.getNode();
                            b.settings.forced_root_block || !t[0].defaultBlock || w.getParent(B, w.isBlock) || n(b, t[0].defaultBlock), b.selection.setRng(i.normalize(b.selection.getRng())), r = x.getBookmark(), A(w, d.expandRng(b, x.getRng(!0), t), r), u.styles && h.mergeUnderlineAndColor(w, u, p, B), x.moveToBookmark(r), e.moveStart(w, x, x.getRng(!0)), b.nodeChanged()
                        }
                        f.postProcess(o, b)
                    }
                } else {
                    q = x.getNode();
                    for (var C = 0, D = t.length; C < D; C++)
                        if (t[C].ceFalseOverride && w.is(q, t[C].selector)) return void y(q, t[C])
                }
            };
        return {
            applyFormat: n
        }
    }), g("2g", ["2d", "4a", "2i", "1e"], function (a, b, c, d) {
        var e = d.each,
            f = function (a, f) {
                var g = {};
                a.set({}), f.on("NodeChange", function (h) {
                    var i = b.getParents(f.dom, h.element),
                        j = {};
                    i = d.grep(i, function (a) {
                        return 1 === a.nodeType && !a.getAttribute("data-mce-bogus")
                    }), e(a.get(), function (a, b) {
                        e(i, function (d) {
                            return f.formatter.matchNode(d, b, {}, a.similar) ? (g[b] || (e(a, function (a) {
                                a(!0, {
                                    node: d,
                                    format: b,
                                    parents: i
                                })
                            }), g[b] = a), j[b] = a, !1) : !c.matchesUnInheritedFormatSelector(f, d, b) && void 0
                        })
                    }), e(g, function (a, b) {
                        j[b] || (delete g[b], e(a, function (a) {
                            a(!1, {
                                node: h.element,
                                format: b,
                                parents: i
                            })
                        }))
                    })
                })
            },
            g = function (a, b, c, d) {
                var f = a.get();
                e(b.split(","), function (a) {
                    f[a] || (f[a] = [], f[a].similar = d), f[a].push(c)
                }), a.set(f)
            },
            h = function (a, b, c, d, e) {
                null === b.get() && f(b, a), g(b, c, d, e)
            };
        return {
            formatChanged: h
        }
    }), g("4s", ["1e"], function (a) {
        var b = function (b) {
            var c = {
                valigntop: [{
                    selector: "td,th",
                    styles: {
                        verticalAlign: "top"
                    }
                }],
                valignmiddle: [{
                    selector: "td,th",
                    styles: {
                        verticalAlign: "middle"
                    }
                }],
                valignbottom: [{
                    selector: "td,th",
                    styles: {
                        verticalAlign: "bottom"
                    }
                }],
                alignleft: [{
                    selector: "figure.image",
                    collapsed: !1,
                    classes: "align-left",
                    ceFalseOverride: !0,
                    preview: "font-family font-size"
                }, {
                    selector: "figure,p,h1,h2,h3,h4,h5,h6,td,th,tr,div,ul,ol,li",
                    styles: {
                        textAlign: "left"
                    },
                    inherit: !1,
                    preview: !1,
                    defaultBlock: "div"
                }, {
                    selector: "img,table",
                    collapsed: !1,
                    styles: {
                        "float": "left"
                    },
                    preview: "font-family font-size"
                }],
                aligncenter: [{
                    selector: "figure,p,h1,h2,h3,h4,h5,h6,td,th,tr,div,ul,ol,li",
                    styles: {
                        textAlign: "center"
                    },
                    inherit: !1,
                    preview: "font-family font-size",
                    defaultBlock: "div"
                }, {
                    selector: "figure.image",
                    collapsed: !1,
                    classes: "align-center",
                    ceFalseOverride: !0,
                    preview: "font-family font-size"
                }, {
                    selector: "img",
                    collapsed: !1,
                    styles: {
                        display: "block",
                        marginLeft: "auto",
                        marginRight: "auto"
                    },
                    preview: !1
                }, {
                    selector: "table",
                    collapsed: !1,
                    styles: {
                        marginLeft: "auto",
                        marginRight: "auto"
                    },
                    preview: "font-family font-size"
                }],
                alignright: [{
                    selector: "figure.image",
                    collapsed: !1,
                    classes: "align-right",
                    ceFalseOverride: !0,
                    preview: "font-family font-size"
                }, {
                    selector: "figure,p,h1,h2,h3,h4,h5,h6,td,th,tr,div,ul,ol,li",
                    styles: {
                        textAlign: "right"
                    },
                    inherit: !1,
                    preview: "font-family font-size",
                    defaultBlock: "div"
                }, {
                    selector: "img,table",
                    collapsed: !1,
                    styles: {
                        "float": "right"
                    },
                    preview: "font-family font-size"
                }],
                alignjustify: [{
                    selector: "figure,p,h1,h2,h3,h4,h5,h6,td,th,tr,div,ul,ol,li",
                    styles: {
                        textAlign: "justify"
                    },
                    inherit: !1,
                    defaultBlock: "div",
                    preview: "font-family font-size"
                }],
                bold: [{
                    inline: "strong",
                    remove: "all"
                }, {
                    inline: "span",
                    styles: {
                        fontWeight: "bold"
                    }
                }, {
                    inline: "b",
                    remove: "all"
                }],
                italic: [{
                    inline: "em",
                    remove: "all"
                }, {
                    inline: "span",
                    styles: {
                        fontStyle: "italic"
                    }
                }, {
                    inline: "i",
                    remove: "all"
                }],
                underline: [{
                    inline: "span",
                    styles: {
                        textDecoration: "underline"
                    },
                    exact: !0
                }, {
                    inline: "u",
                    remove: "all"
                }],
                strikethrough: [{
                    inline: "span",
                    styles: {
                        textDecoration: "line-through"
                    },
                    exact: !0
                }, {
                    inline: "strike",
                    remove: "all"
                }],
                forecolor: {
                    inline: "span",
                    styles: {
                        color: "%value"
                    },
                    links: !0,
                    remove_similar: !0,
                    clear_child_styles: !0
                },
                hilitecolor: {
                    inline: "span",
                    styles: {
                        backgroundColor: "%value"
                    },
                    links: !0,
                    remove_similar: !0,
                    clear_child_styles: !0
                },
                fontname: {
                    inline: "span",
                    styles: {
                        fontFamily: "%value"
                    },
                    clear_child_styles: !0
                },
                fontsize: {
                    inline: "span",
                    styles: {
                        fontSize: "%value"
                    },
                    clear_child_styles: !0
                },
                fontsize_class: {
                    inline: "span",
                    attributes: {
                        "class": "%value"
                    }
                },
                blockquote: {
                    block: "blockquote",
                    wrapper: 1,
                    remove: "all"
                },
                subscript: {
                    inline: "sub"
                },
                superscript: {
                    inline: "sup"
                },
                code: {
                    inline: "code"
                },
                link: {
                    inline: "a",
                    selector: "a",
                    remove: "all",
                    split: !0,
                    deep: !0,
                    onmatch: function () {
                        return !0
                    },
                    onformat: function (c, d, e) {
                        a.each(e, function (a, d) {
                            b.setAttrib(c, d, a)
                        })
                    }
                },
                removeformat: [{
                    selector: "b,strong,em,i,font,u,strike,sub,sup,dfn,code,samp,kbd,var,cite,mark,q,del,ins",
                    remove: "all",
                    split: !0,
                    expand: !1,
                    block_expand: !0,
                    deep: !0
                }, {
                    selector: "span",
                    attributes: ["style", "class"],
                    remove: "empty",
                    split: !0,
                    expand: !1,
                    deep: !0
                }, {
                    selector: "*",
                    attributes: ["style", "class"],
                    split: !1,
                    expand: !1,
                    deep: !0
                }]
            };
            return a.each("p h1 h2 h3 h4 h5 h6 div address pre div dt dd samp".split(/\s/), function (a) {
                c[a] = {
                    block: a,
                    remove: "all"
                }
            }), c
        };
        return {
            get: b
        }
    }), g("2h", ["4s", "1e"], function (a, b) {
        return function (c) {
            var d = {},
                e = function (a) {
                    return a ? d[a] : d
                },
                f = function (a, c) {
                    a && ("string" != typeof a ? b.each(a, function (a, b) {
                        f(b, a)
                    }) : (c = c.length ? c : [c], b.each(c, function (a) {
                        "undefined" == typeof a.deep && (a.deep = !a.selector), "undefined" == typeof a.split && (a.split = !a.selector || a.inline), "undefined" == typeof a.remove && a.selector && !a.inline && (a.remove = "none"), a.selector && a.inline && (a.mixed = !0, a.block_expand = !0), "string" == typeof a.classes && (a.classes = a.classes.split(/\s+/))
                    }), d[a] = c))
                },
                g = function (a) {
                    return a && d[a] && delete d[a], d
                };
            return f(a.get(c.dom)), f(c.settings.formats), {
                get: e,
                register: f,
                unregister: g
            }
        }
    }), g("2j", ["m", "1e", "y"], function (a, b, c) {
        var d = b.each,
            e = a.DOM,
            f = function (a, d) {
                var f, g, h, i = d && d.schema || new c({}),
                    j = function (a, b) {
                        b.classes.length && e.addClass(a, b.classes.join(" ")), e.setAttribs(a, b.attrs)
                    },
                    k = function (a) {
                        var b;
                        return g = "string" == typeof a ? {
                            name: a,
                            classes: [],
                            attrs: {}
                        } : a, b = e.create(g.name), j(b, g), b
                    },
                    l = function (a, c) {
                        var d = "string" != typeof a ? a.nodeName.toLowerCase() : a,
                            e = i.getElementRule(d),
                            f = e && e.parentsRequired;
                        return !(!f || !f.length) && (c && b.inArray(f, c) !== -1 ? c : f[0])
                    },
                    m = function (a, c, d) {
                        var f, g, h, i = c.length > 0 && c[0],
                            j = i && i.name;
                        if (h = l(a, j)) j === h ? (g = c[0], c = c.slice(1)) : g = h;
                        else if (i) g = c[0], c = c.slice(1);
                        else if (!d) return a;
                        return g && (f = k(g), f.appendChild(a)), d && (f || (f = e.create("div"), f.appendChild(a)), b.each(d, function (b) {
                            var c = k(b);
                            f.insertBefore(c, a)
                        })), m(f, c, g && g.siblings)
                    };
                return a && a.length ? (g = a[0], f = k(g), h = e.create("div"), h.appendChild(m(f, a.slice(1), g.siblings)), h) : ""
            },
            g = function (a, b) {
                return f(i(a), b)
            },
            h = function (a) {
                var c, d = {
                    classes: [],
                    attrs: {}
                };
                return a = d.selector = b.trim(a), "*" !== a && (c = a.replace(/(?:([#\.]|::?)([\w\-]+)|(\[)([^\]]+)\]?)/g, function (a, c, e, f, g) {
                    switch (c) {
                        case "#":
                            d.attrs.id = e;
                            break;
                        case ".":
                            d.classes.push(e);
                            break;
                        case ":":
                            b.inArray("checked disabled enabled read-only required".split(" "), e) !== -1 && (d.attrs[e] = e)
                    }
                    if ("[" === f) {
                        var h = g.match(/([\w\-]+)(?:\=\"([^\"]+))?/);
                        h && (d.attrs[h[1]] = h[2])
                    }
                    return ""
                })), d.name = c || "div", d
            },
            i = function (a) {
                return a && "string" == typeof a ? (a = a.split(/\s*,\s*/)[0], a = a.replace(/\s*(~\+|~|\+|>)\s*/g, "$1"), b.map(a.split(/(?:>|\s+(?![^\[\]]+\]))/), function (a) {
                    var c = b.map(a.split(/(?:~\+|~|\+)/), h),
                        d = c.pop();
                    return c.length && (d.siblings = c), d
                }).reverse()) : []
            },
            j = function (a, b) {
                var c, g, h, j, k, l, m = "";
                if (l = a.settings.preview_styles, l === !1) return "";
                "string" != typeof l && (l = "font-family font-size font-weight font-style text-decoration text-transform color background-color border border-radius outline text-shadow");
                var n = function (a) {
                    return a.replace(/%(\w+)/g, "")
                };
                if ("string" == typeof b) {
                    if (b = a.formatter.get(b), !b) return;
                    b = b[0]
                }
                return "preview" in b && (l = b.preview, l === !1) ? "" : (c = b.block || b.inline || "span", j = i(b.selector), j.length ? (j[0].name || (j[0].name = c), c = b.selector, g = f(j, a)) : g = f([c], a), h = e.select(c, g)[0] || g.firstChild, d(b.styles, function (a, b) {
                    a = n(a), a && e.setStyle(h, b, a)
                }), d(b.attributes, function (a, b) {
                    a = n(a), a && e.setAttrib(h, b, a)
                }), d(b.classes, function (a) {
                    a = n(a), e.hasClass(h, a) || e.addClass(h, a)
                }), a.fire("PreviewFormats"), e.setStyles(g, {
                    position: "absolute",
                    left: -65535
                }), a.getBody().appendChild(g), k = e.getStyle(a.getBody(), "fontSize", !0), k = /px$/.test(k) ? parseInt(k, 10) : 0, d(l.split(" "), function (b) {
                    var c = e.getStyle(h, b, !0);
                    if (!("background-color" === b && /transparent|rgba\s*\([^)]+,\s*0\)/.test(c) && (c = e.getStyle(a.getBody(), b, !0), "#ffffff" === e.toHex(c).toLowerCase()) || "color" === b && "#000000" === e.toHex(c).toLowerCase())) {
                        if ("font-size" === b && /em|%$/.test(c)) {
                            if (0 === k) return;
                            c = parseFloat(c, 10) / (/%$/.test(c) ? 100 : 1), c = c * k + "px"
                        }
                        "border" === b && c && (m += "padding:0 2px;"), m += b + ":" + c + ";"
                    }
                }), a.fire("AfterPreviewFormats"), e.remove(g), m)
            };
        return {
            getCssText: j,
            parseSelector: i,
            selectorToHtml: g
        }
    }), g("2l", ["2e", "2i", "2k"], function (a, b, c) {
        var d = function (d, e, f, g, h) {
            var i = e.get(f);
            !b.match(d, f, g, h) || "toggle" in i[0] && !i[0].toggle ? a.applyFormat(d, f, g, h) : c.remove(d, f, g, h)
        };
        return {
            toggle: d
        }
    }), g("2m", [], function () {
        var a = function (a) {
            a.addShortcut("meta+b", "", "Bold"), a.addShortcut("meta+i", "", "Italic"), a.addShortcut("meta+u", "", "Underline");
            for (var b = 1; b <= 6; b++) a.addShortcut("access+" + b, "", ["FormatBlock", !1, "h" + b]);
            a.addShortcut("access+7", "", ["FormatBlock", !1, "p"]), a.addShortcut("access+8", "", ["FormatBlock", !1, "div"]), a.addShortcut("access+9", "", ["FormatBlock", !1, "address"])
        };
        return {
            setup: a
        }
    }), g("f", ["2d", "1", "2e", "2f", "2g", "2h", "2i", "2j", "2k", "2l", "2m"], function (a, b, c, d, e, f, g, h, i, j, k) {
        return function (l) {
            var m = f(l),
                n = a(null);
            return k.setup(l), d.setup(l), {
                get: m.get,
                register: m.register,
                unregister: m.unregister,
                apply: b.curry(c.applyFormat, l),
                remove: b.curry(i.remove, l),
                toggle: b.curry(j.toggle, l, m),
                match: b.curry(g.match, l),
                matchAll: b.curry(g.matchAll, l),
                matchNode: b.curry(g.matchNode, l),
                canApply: b.curry(g.canApply, l),
                formatChanged: b.curry(e.formatChanged, l, n),
                getCssText: b.curry(h.getCssText, l)
            }
        }
    }), g("4t", ["28", "4", "5"], function (a, b, c) {
        var d = function (a, b) {
                return b
            },
            e = function (b, c) {
                var d = a.isObject(b) && a.isObject(c);
                return d ? g(b, c) : c
            },
            f = function (a) {
                return function () {
                    for (var d = new b(arguments.length), e = 0; e < d.length; e++) d[e] = arguments[e];
                    if (0 === d.length) throw new c("Can't merge zero objects");
                    for (var f = {}, g = 0; g < d.length; g++) {
                        var h = d[g];
                        for (var i in h) h.hasOwnProperty(i) && (f[i] = a(f[i], h[i]))
                    }
                    return f
                }
            },
            g = f(e),
            h = f(d);
        return {
            deepMerge: g,
            merge: h
        }
    }), g("4u", [], function () {
        var a = function (a, b) {
                return a.fire("PreProcess", b)
            },
            b = function (a, b) {
                return a.fire("PostProcess", b)
            };
        return {
            firePreProcess: a,
            firePostProcess: b
        }
    }), g("4v", ["1i", "v"], function (a, b) {
        var c = function (c, d, e) {
                c.addAttributeFilter("data-mce-tabindex", function (a, b) {
                    for (var c, d = a.length; d--;) c = a[d], c.attr("tabindex", c.attributes.map["data-mce-tabindex"]), c.attr(b, null)
                }), c.addAttributeFilter("src,href,style", function (a, b) {
                    for (var c, f, g, h = a.length, i = "data-mce-" + b, j = d.url_converter, k = d.url_converter_scope; h--;) c = a[h], f = c.attributes.map[i], f !== g ? (c.attr(b, f.length > 0 ? f : null), c.attr(i, null)) : (f = c.attributes.map[b], "style" === b ? f = e.serializeStyle(e.parseStyle(f), c.name) : j && (f = j.call(k, f, b, c.name)), c.attr(b, f.length > 0 ? f : null))
                }), c.addAttributeFilter("class", function (a) {
                    for (var b, c, d = a.length; d--;) b = a[d], c = b.attr("class"), c && (c = b.attr("class").replace(/(?:^|\s)mce-item-\w+(?!\S)/g, ""), b.attr("class", c.length > 0 ? c : null))
                }), c.addAttributeFilter("data-mce-type", function (a, b, c) {
                    for (var d, e = a.length; e--;) d = a[e], "bookmark" !== d.attributes.map["data-mce-type"] || c.cleanup || d.remove()
                }), c.addNodeFilter("noscript", function (a) {
                    for (var c, d = a.length; d--;) c = a[d].firstChild, c && (c.value = b.decode(c.value))
                }), c.addNodeFilter("script,style", function (a, b) {
                    for (var c, e, f, g = a.length, h = function (a) {
                            return a.replace(/(<!--\[CDATA\[|\]\]-->)/g, "\n").replace(/^[\r\n]*|[\r\n]*$/g, "").replace(/^\s*((<!--)?(\s*\/\/)?\s*<!\[CDATA\[|(<!--\s*)?\/\*\s*<!\[CDATA\[\s*\*\/|(\/\/)?\s*<!--|\/\*\s*<!--\s*\*\/)\s*[\r\n]*/gi, "").replace(/\s*(\/\*\s*\]\]>\s*\*\/(-->)?|\s*\/\/\s*\]\]>(-->)?|\/\/\s*(-->)?|\]\]>|\/\*\s*-->\s*\*\/|\s*-->\s*)\s*$/g, "")
                        }; g--;) c = a[g], e = c.firstChild ? c.firstChild.value : "", "script" === b ? (f = c.attr("type"), f && c.attr("type", "mce-no/type" === f ? null : f.replace(/^mce\-/, "")), "xhtml" === d.element_format && e.length > 0 && (c.firstChild.value = "// <![CDATA[\n" + h(e) + "\n// ]]>")) : "xhtml" === d.element_format && e.length > 0 && (c.firstChild.value = "<!--\n" + h(e) + "\n-->")
                }), c.addNodeFilter("#comment", function (a) {
                    for (var b, c = a.length; c--;) b = a[c], 0 === b.value.indexOf("[CDATA[") ? (b.name = "#cdata", b.type = 4, b.value = b.value.replace(/^\[CDATA\[|\]\]$/g, "")) : 0 === b.value.indexOf("mce:protected ") && (b.name = "#text", b.type = 3, b.raw = !0, b.value = unescape(b.value).substr(14))
                }), c.addNodeFilter("xml:namespace,input", function (a, b) {
                    for (var c, d = a.length; d--;) c = a[d], 7 === c.type ? c.remove() : 1 === c.type && ("input" !== b || "type" in c.attributes.map || c.attr("type", "text"))
                }), c.addAttributeFilter("data-mce-type", function (b) {
                    a.each(b, function (a) {
                        "format-caret" === a.attr("data-mce-type") && (a.isEmpty(c.schema.getNonEmptyElements()) ? a.remove() : a.unwrap())
                    })
                }), c.addAttributeFilter("data-mce-src,data-mce-href,data-mce-style,data-mce-selected,data-mce-expando,data-mce-type,data-mce-resize", function (a, b) {
                    for (var c = a.length; c--;) a[c].attr(b, null)
                })
            },
            d = function (a) {
                var b, c, d = function (a) {
                    return a && "br" === a.name
                };
                b = a.lastChild, d(b) && (c = b.prev, d(c) && (b.remove(), c.remove()))
            };
        return {
            register: c,
            trimTrailingBr: d
        }
    }), g("4w", ["4t", "1j", "4u", "1e"], function (a, b, c, d) {
        var e = function (e, f, g) {
                var h, i, j, k = e.dom;
                return f = f.cloneNode(!0), h = b.implementation, h.createHTMLDocument && (i = h.createHTMLDocument(""), d.each("BODY" === f.nodeName ? f.childNodes : [f], function (a) {
                    i.body.appendChild(i.importNode(a, !0))
                }), f = "BODY" !== f.nodeName ? i.body.firstChild : i.body, j = k.doc, k.doc = i), c.firePreProcess(e, a.merge(g, {
                    node: f
                })), j && (k.doc = j), f
            },
            f = function (a, b) {
                return a && a.hasEventListeners("PreProcess") && !b.no_events
            },
            g = function (a, b, c) {
                return f(a, c) ? e(a, b, c) : b
            };
        return {
            process: g
        }
    }), g("38", ["1i", "10", "1e"], function (a, b, c) {
        var d = function (b, c) {
                a.each(c, function (a) {
                    b.attr(a, null)
                })
            },
            e = function (b, c, e) {
                b.addNodeFilter("font", function (b) {
                    a.each(b, function (a) {
                        var b = c.parse(a.attr("style")),
                            f = a.attr("color"),
                            g = a.attr("face"),
                            h = a.attr("size");
                        f && (b.color = f), g && (b["font-family"] = g), h && (b["font-size"] = e[parseInt(a.attr("size"), 10) - 1]), a.name = "span", a.attr("style", c.serialize(b)), d(a, ["color", "face", "size"])
                    })
                })
            },
            f = function (b, c) {
                b.addNodeFilter("strike", function (b) {
                    a.each(b, function (a) {
                        var b = c.parse(a.attr("style"));
                        b["text-decoration"] = "line-through", a.name = "span", a.attr("style", c.serialize(b))
                    })
                })
            },
            g = function (a, d) {
                var g = b();
                d.convert_fonts_to_spans && e(a, g, c.explode(d.font_size_legacy_values)), f(a, g)
            },
            h = function (a, b) {
                b.inline_styles && g(a, b)
            };
        return {
            register: h
        }
    }), g("w", [], function () {
        var a = /^[ \t\r\n]*$/,
            b = {
                "#text": 3,
                "#comment": 8,
                "#cdata": 4,
                "#pi": 7,
                "#doctype": 10,
                "#document-fragment": 11
            },
            c = function (a, b, c) {
                var d, e, f = c ? "lastChild" : "firstChild",
                    g = c ? "prev" : "next";
                if (a[f]) return a[f];
                if (a !== b) {
                    if (d = a[g]) return d;
                    for (e = a.parent; e && e !== b; e = e.parent)
                        if (d = e[g]) return d
                }
            },
            d = function (a, b) {
                this.name = a, this.type = b, 1 === b && (this.attributes = [], this.attributes.map = {})
            };
        return d.prototype = {
            replace: function (a) {
                var b = this;
                return a.parent && a.remove(), b.insert(a, b), b.remove(), b
            },
            attr: function (a, b) {
                var c, d, e, f = this;
                if ("string" != typeof a) {
                    for (d in a) f.attr(d, a[d]);
                    return f
                }
                if (c = f.attributes) {
                    if (b !== e) {
                        if (null === b) {
                            if (a in c.map)
                                for (delete c.map[a], d = c.length; d--;)
                                    if (c[d].name === a) return c = c.splice(d, 1), f;
                            return f
                        }
                        if (a in c.map) {
                            for (d = c.length; d--;)
                                if (c[d].name === a) {
                                    c[d].value = b;
                                    break
                                }
                        } else c.push({
                            name: a,
                            value: b
                        });
                        return c.map[a] = b, f
                    }
                    return c.map[a]
                }
            },
            clone: function () {
                var a, b, c, e, f, g = this,
                    h = new d(g.name, g.type);
                if (c = g.attributes) {
                    for (f = [], f.map = {}, a = 0, b = c.length; a < b; a++) e = c[a], "id" !== e.name && (f[f.length] = {
                        name: e.name,
                        value: e.value
                    }, f.map[e.name] = e.value);
                    h.attributes = f
                }
                return h.value = g.value, h.shortEnded = g.shortEnded, h
            },
            wrap: function (a) {
                var b = this;
                return b.parent.insert(a, b), a.append(b), b
            },
            unwrap: function () {
                var a, b, c = this;
                for (a = c.firstChild; a;) b = a.next, c.insert(a, c, !0), a = b;
                c.remove()
            },
            remove: function () {
                var a = this,
                    b = a.parent,
                    c = a.next,
                    d = a.prev;
                return b && (b.firstChild === a ? (b.firstChild = c, c && (c.prev = null)) : d.next = c, b.lastChild === a ? (b.lastChild = d, d && (d.next = null)) : c.prev = d, a.parent = a.next = a.prev = null), a
            },
            append: function (a) {
                var b, c = this;
                return a.parent && a.remove(), b = c.lastChild, b ? (b.next = a, a.prev = b, c.lastChild = a) : c.lastChild = c.firstChild = a, a.parent = c, a
            },
            insert: function (a, b, c) {
                var d;
                return a.parent && a.remove(), d = b.parent || this, c ? (b === d.firstChild ? d.firstChild = a : b.prev.next = a, a.prev = b.prev, a.next = b, b.prev = a) : (b === d.lastChild ? d.lastChild = a : b.next.prev = a, a.next = b.next, a.prev = b, b.next = a), a.parent = d, a
            },
            getAll: function (a) {
                var b, d = this,
                    e = [];
                for (b = d.firstChild; b; b = c(b, d)) b.name === a && e.push(b);
                return e
            },
            empty: function () {
                var a, b, d, e = this;
                if (e.firstChild) {
                    for (a = [], d = e.firstChild; d; d = c(d, e)) a.push(d);
                    for (b = a.length; b--;) d = a[b], d.parent = d.firstChild = d.lastChild = d.next = d.prev = null
                }
                return e.firstChild = e.lastChild = null, e
            },
            isEmpty: function (b, d, e) {
                var f, g, h = this,
                    i = h.firstChild;
                if (d = d || {}, i)
                    do {
                        if (1 === i.type) {
                            if (i.attributes.map["data-mce-bogus"]) continue;
                            if (b[i.name]) return !1;
                            for (f = i.attributes.length; f--;)
                                if (g = i.attributes[f].name, "name" === g || 0 === g.indexOf("data-mce-bookmark")) return !1
                        }
                        if (8 === i.type) return !1;
                        if (3 === i.type && !a.test(i.value)) return !1;
                        if (3 === i.type && i.parent && d[i.parent.name] && a.test(i.value)) return !1;
                        if (e && e(i)) return !1
                    } while (i = c(i, h));
                return !0
            },
            walk: function (a) {
                return c(this, null, a)
            }
        }, d.create = function (a, c) {
            var e, f;
            if (e = new d(a, b[a] || 1), c)
                for (f in c) e.attr(f, c[f]);
            return e
        }, d
    }), g("u", ["38", "w", "x", "y", "1e"], function (a, b, c, d, e) {
        var f = e.makeMap,
            g = e.each,
            h = e.explode,
            i = e.extend,
            j = function (a, c, d, e) {
                var f = a.padd_empty_with_br || c.insert;
                f && d[e.name] ? e.empty().append(new b("br", "1")).shortEnded = !0 : e.empty().append(new b("#text", "3")).value = "\xa0"
            },
            k = function (a) {
                return l(a, "#text") && "\xa0" === a.firstChild.value
            },
            l = function (a, b) {
                return a && a.firstChild && a.firstChild === a.lastChild && a.firstChild.name === b
            },
            m = function (a, b) {
                var c = a.getElementRule(b.name);
                return c && c.paddEmpty
            },
            n = function (a, b, c, d) {
                return d.isEmpty(b, c, function (b) {
                    return m(a, b)
                })
            };
        return function (m, o) {
            var p = this,
                q = {},
                r = [],
                s = {},
                t = {};
            m = m || {}, m.validate = !("validate" in m) || m.validate, m.root_name = m.root_name || "body", p.schema = o = o || new d;
            var u = function (a) {
                var c, d, e, g, h, i, j, k, m, q, r, s, t, u, v, w;
                for (s = f("tr,td,th,tbody,thead,tfoot,table"), q = o.getNonEmptyElements(), r = o.getWhiteSpaceElements(), t = o.getTextBlockElements(), u = o.getSpecialElements(), c = 0; c < a.length; c++)
                    if (d = a[c], d.parent && !d.fixed)
                        if (t[d.name] && "li" == d.parent.name) {
                            for (v = d.next; v && t[v.name];) v.name = "li", v.fixed = !0, d.parent.insert(v, d.parent), v = v.next;
                            d.unwrap(d)
                        } else {
                            for (g = [d], e = d.parent; e && !o.isValidChild(e.name, d.name) && !s[e.name]; e = e.parent) g.push(e);
                            if (e && g.length > 1) {
                                for (g.reverse(), h = i = p.filterNode(g[0].clone()), m = 0; m < g.length - 1; m++) {
                                    for (o.isValidChild(i.name, g[m].name) ? (j = p.filterNode(g[m].clone()), i.append(j)) : j = i, k = g[m].firstChild; k && k != g[m + 1];) w = k.next, j.append(k), k = w;
                                    i = j
                                }
                                n(o, q, r, h) ? e.insert(d, g[0], !0) : (e.insert(h, g[0], !0), e.insert(d, h)), e = g[0], (n(o, q, r, e) || l(e, "br")) && e.empty().remove()
                            } else if (d.parent) {
                                if ("li" === d.name) {
                                    if (v = d.prev, v && ("ul" === v.name || "ul" === v.name)) {
                                        v.append(d);
                                        continue
                                    }
                                    if (v = d.next, v && ("ul" === v.name || "ul" === v.name)) {
                                        v.insert(d, v.firstChild, !0);
                                        continue
                                    }
                                    d.wrap(p.filterNode(new b("ul", 1)));
                                    continue
                                }
                                o.isValidChild(d.parent.name, "div") && o.isValidChild("div", d.name) ? d.wrap(p.filterNode(new b("div", 1))) : u[d.name] ? d.empty().remove() : d.unwrap()
                            }
                        }
            };
            p.filterNode = function (a) {
                var b, c, d;
                c in q && (d = s[c], d ? d.push(a) : s[c] = [a]), b = r.length;
                for (; b--;) c = r[b].name, c in a.attributes.map && (d = t[c], d ? d.push(a) : t[c] = [a]);
                return a
            }, p.addNodeFilter = function (a, b) {
                g(h(a), function (a) {
                    var c = q[a];
                    c || (q[a] = c = []), c.push(b)
                })
            }, p.addAttributeFilter = function (a, b) {
                g(h(a), function (a) {
                    var c;
                    for (c = 0; c < r.length; c++)
                        if (r[c].name === a) return void r[c].callbacks.push(b);
                    r.push({
                        name: a,
                        callbacks: [b]
                    })
                })
            }, p.parse = function (a, d) {
                var e, g, h, l, p, v, w, x, y, z, A, B, C, D, E, F, G, H, I, J, K, L = [];
                d = d || {}, s = {}, t = {}, B = i(f("script,style,head,html,body,title,meta,param"), o.getBlockElements()), J = o.getNonEmptyElements(), I = o.children, A = m.validate, K = "forced_root_block" in d ? d.forced_root_block : m.forced_root_block, H = o.getWhiteSpaceElements(), C = /^[ \t\r\n]+/, E = /[ \t\r\n]+$/, F = /[ \t\r\n]+/g, G = /^[ \t\r\n]+$/;
                var M = function () {
                        var a, b, c = g.firstChild,
                            d = function (a) {
                                a && (c = a.firstChild, c && 3 == c.type && (c.value = c.value.replace(C, "")), c = a.lastChild, c && 3 == c.type && (c.value = c.value.replace(E, "")))
                            };
                        if (o.isValidChild(g.name, K.toLowerCase())) {
                            for (; c;) a = c.next, 3 == c.type || 1 == c.type && "p" !== c.name && !B[c.name] && !c.attr("data-mce-type") ? b ? b.append(c) : (b = N(K, 1), b.attr(m.forced_root_block_attrs), g.insert(b, c), b.append(c)) : (d(b), b = null), c = a;
                            d(b)
                        }
                    },
                    N = function (a, c) {
                        var d, e = new b(a, c);
                        return a in q && (d = s[a], d ? d.push(e) : s[a] = [e]), e
                    },
                    O = function (a) {
                        var b, c, d, e, f = o.getBlockElements();
                        for (b = a.prev; b && 3 === b.type;) {
                            if (d = b.value.replace(E, ""), d.length > 0) return void(b.value = d);
                            if (c = b.next) {
                                if (3 == c.type && c.value.length) {
                                    b = b.prev;
                                    continue
                                }
                                if (!f[c.name] && "script" != c.name && "style" != c.name) {
                                    b = b.prev;
                                    continue
                                }
                            }
                            e = b.prev, b.remove(), b = e
                        }
                    },
                    P = function (a) {
                        var b, c = {};
                        for (b in a) "li" !== b && "p" != b && (c[b] = a[b]);
                        return c
                    };
                if (e = new c({
                        validate: A,
                        allow_script_urls: m.allow_script_urls,
                        allow_conditional_comments: m.allow_conditional_comments,
                        self_closing_elements: P(o.getSelfClosingElements()),
                        cdata: function (a) {
                            h.append(N("#cdata", 4)).value = a
                        },
                        text: function (a, b) {
                            var c;
                            D || (a = a.replace(F, " "), h.lastChild && B[h.lastChild.name] && (a = a.replace(C, ""))), 0 !== a.length && (c = N("#text", 3), c.raw = !!b, h.append(c).value = a)
                        },
                        comment: function (a) {
                            h.append(N("#comment", 8)).value = a
                        },
                        pi: function (a, b) {
                            h.append(N(a, 7)).value = b, O(h)
                        },
                        doctype: function (a) {
                            var b;
                            b = h.append(N("#doctype", 10)), b.value = a, O(h)
                        },
                        start: function (a, b, c) {
                            var d, e, f, g, i;
                            if (f = A ? o.getElementRule(a) : {}) {
                                for (d = N(f.outputName || a, 1), d.attributes = b, d.shortEnded = c, h.append(d), i = I[h.name], i && I[d.name] && !i[d.name] && L.push(d), e = r.length; e--;) g = r[e].name, g in b.map && (y = t[g], y ? y.push(d) : t[g] = [d]);
                                B[a] && O(d), c || (h = d), !D && H[a] && (D = !0)
                            }
                        },
                        end: function (a) {
                            var b, c, e, f, g;
                            if (c = A ? o.getElementRule(a) : {}) {
                                if (B[a] && !D) {
                                    if (b = h.firstChild, b && 3 === b.type)
                                        if (e = b.value.replace(C, ""), e.length > 0) b.value = e, b = b.next;
                                        else
                                            for (f = b.next, b.remove(), b = f; b && 3 === b.type;) e = b.value, f = b.next, (0 === e.length || G.test(e)) && (b.remove(), b = f), b = f;
                                    if (b = h.lastChild, b && 3 === b.type)
                                        if (e = b.value.replace(E, ""), e.length > 0) b.value = e, b = b.prev;
                                        else
                                            for (f = b.prev, b.remove(), b = f; b && 3 === b.type;) e = b.value, f = b.prev, (0 === e.length || G.test(e)) && (b.remove(), b = f), b = f
                                }
                                if (D && H[a] && (D = !1), c.removeEmpty && n(o, J, H, h) && !h.attributes.map.name && !h.attributes.map.id) return g = h.parent, B[h.name] ? h.empty().remove() : h.unwrap(), void(h = g);
                                c.paddEmpty && (k(h) || n(o, J, H, h)) && j(m, d, B, h), h = h.parent
                            }
                        }
                    }, o), g = h = new b(d.context || m.root_name, 11), e.parse(a), A && L.length && (d.context ? d.invalid = !0 : u(L)), K && ("body" == g.name || d.isRootContent) && M(), !d.invalid) {
                    for (z in s) {
                        for (y = q[z], l = s[z], w = l.length; w--;) l[w].parent || l.splice(w, 1);
                        for (p = 0, v = y.length; p < v; p++) y[p](l, z, d)
                    }
                    for (p = 0, v = r.length; p < v; p++)
                        if (y = r[p], y.name in t) {
                            for (l = t[y.name], w = l.length; w--;) l[w].parent || l.splice(w, 1);
                            for (w = 0, x = y.callbacks.length; w < x; w++) y.callbacks[w](l, y.name, d)
                        }
                }
                return g
            }, m.remove_trailing_brs && p.addNodeFilter("br", function (a, c, d) {
                var e, f, g, h, k, l, p, q, r = a.length,
                    s = i({}, o.getBlockElements()),
                    t = o.getNonEmptyElements(),
                    u = o.getNonEmptyElements();
                for (s.body = 1, e = 0; e < r; e++)
                    if (f = a[e], g = f.parent, s[f.parent.name] && f === g.lastChild) {
                        for (k = f.prev; k;) {
                            if (l = k.name, "span" !== l || "bookmark" !== k.attr("data-mce-type")) {
                                if ("br" !== l) break;
                                if ("br" === l) {
                                    f = null;
                                    break
                                }
                            }
                            k = k.prev
                        }
                        f && (f.remove(), n(o, t, u, g) && (p = o.getElementRule(g.name), p && (p.removeEmpty ? g.remove() : p.paddEmpty && j(m, d, s, g))))
                    } else {
                        for (h = f; g && g.firstChild === h && g.lastChild === h && (h = g, !s[g.name]);) g = g.parent;
                        h === g && m.padd_empty_with_br !== !0 && (q = new b("#text", 3), q.value = "\xa0", f.replace(q))
                    }
            }), p.addAttributeFilter("href", function (a) {
                var b, c = a.length,
                    d = function (a) {
                        var b = a.split(" ").filter(function (a) {
                            return a.length > 0
                        });
                        return b.concat(["noopener"]).sort().join(" ")
                    },
                    f = function (a) {
                        var b = a ? e.trim(a) : "";
                        return /\b(noopener)\b/g.test(b) ? b : d(b)
                    };
                if (!m.allow_unsafe_link_target)
                    for (; c--;) b = a[c], "a" === b.name && "_blank" === b.attr("target") && b.attr("rel", f(b.attr("rel")))
            }), m.allow_html_in_named_anchor || p.addAttributeFilter("id,name", function (a) {
                for (var b, c, d, e, f = a.length; f--;)
                    if (e = a[f], "a" === e.name && e.firstChild && !e.attr("href")) {
                        d = e.parent, b = e.lastChild;
                        do c = b.prev, d.insert(b, e), b = c; while (b)
                    }
            }), m.fix_list_elements && p.addNodeFilter("ul,ol", function (a) {
                for (var c, d, e = a.length; e--;)
                    if (c = a[e], d = c.parent, "ul" === d.name || "ol" === d.name)
                        if (c.prev && "li" === c.prev.name) c.prev.append(c);
                        else {
                            var f = new b("li", 1);
                            f.attr("style", "list-style-type: none"), c.wrap(f)
                        }
            }), m.validate && o.getValidClasses() && p.addAttributeFilter("class", function (a) {
                for (var b, c, d, e, f, g, h, i = a.length, j = o.getValidClasses(); i--;) {
                    for (b = a[i], c = b.attr("class").split(" "), f = "", d = 0; d < c.length; d++) e = c[d], h = !1, g = j["*"], g && g[e] && (h = !0), g = j[b.name], !h && g && g[e] && (h = !0), h && (f && (f += " "), f += e);
                    f.length || (f = null), b.attr("class", f)
                }
            }), a.register(this, m)
        }
    }), g("2y", ["1", "4t", "4u", "m", "4v", "4w", "u", "y", "z", "4b", "1e"], function (a, b, c, d, e, f, g, h, i, j, k) {
        var l = function (a, b, c) {
                k.inArray(b, c) === -1 && (a.addAttributeFilter(c, function (a, b) {
                    for (var c = a.length; c--;) a[c].attr(b, null)
                }), b.push(c))
            },
            m = function (a, d, e) {
                if (!d.no_events && a) {
                    var f = c.firePostProcess(a, b.merge(d, {
                        content: e
                    }));
                    return f.content
                }
                return e
            },
            n = function (a, b, c) {
                var d = j.trim(c.getInner ? b.innerHTML : a.getOuterHTML(b));
                return c.selection ? d : k.trim(d)
            },
            o = function (a, c, d, f) {
                var g = f.selection ? b.merge({
                        forced_root_block: !1
                    }, f) : f,
                    h = a.parse(d, g);
                return e.trimTrailingBr(h), h
            },
            p = function (a, b, c) {
                var d = new i(a, b);
                return d.serialize(c)
            },
            q = function (a, b, c, d, e) {
                var f = p(b, c, d);
                return m(a, e, f)
            };
        return function (c, i) {
            var j, k, m, p = ["data-mce-selected"];
            j = i && i.dom ? i.dom : d.DOM, k = i && i.schema ? i.schema : new h(c), c.entity_encoding = c.entity_encoding || "named", c.remove_trailing_brs = !("remove_trailing_brs" in c) || c.remove_trailing_brs, m = new g(c, k), e.register(m, c, j);
            var r = function (a, d) {
                var e = b.merge({
                        format: "html"
                    }, d ? d : {}),
                    g = f.process(i, a, e),
                    h = n(j, g, e),
                    l = o(m, j, h, e);
                return "tree" === e.format ? l : q(i, c, k, l, e)
            };
            return {
                schema: k,
                addNodeFilter: m.addNodeFilter,
                addAttributeFilter: m.addAttributeFilter,
                serialize: r,
                addRules: function (a) {
                    k.addValidElements(a)
                },
                setRules: function (a) {
                    k.setValidElements(a)
                },
                addTempAttr: a.curry(l, m, p),
                getTempAttrs: function () {
                    return p
                }
            }
        }
    }), g("k", ["2y"], function (a) {
        return function (b, c) {
            var d = new a(b, c);
            return {
                schema: d.schema,
                addNodeFilter: d.addNodeFilter,
                addAttributeFilter: d.addAttributeFilter,
                serialize: d.serialize,
                addRules: d.addRules,
                setRules: d.setRules,
                addTempAttr: d.addTempAttr,
                getTempAttrs: d.getTempAttrs
            }
        }
    }), g("6m", ["1", "1v", "62", "46"], function (a, b, c, d) {
        var e = function (d) {
                return c.descendant(b.fromDom(d.getBody()), "*[data-mce-caret]").fold(a.constant(null), function (a) {
                    return a.dom()
                })
            },
            f = function (a) {
                a.selection.setRng(a.selection.getRng())
            },
            g = function (a, b) {
                b.hasAttribute("data-mce-caret") && (d.showCaretContainerBlock(b), f(a), a.selection.scrollIntoView(b))
            },
            h = function (a, b) {
                var c = e(a);
                if (c) return "compositionstart" === b.type ? (b.preventDefault(), b.stopPropagation(), void g(c)) : void(d.hasContent(c) && g(a, c))
            },
            i = function (b) {
                b.on("keyup compositionstart", a.curry(h, b))
            };
        return {
            setup: i
        }
    }), g("i", ["1", "2r"], function (a, b) {
        var c = function (c) {
            return {
                getBookmark: a.curry(b.getBookmark, c),
                moveToBookmark: a.curry(b.moveToBookmark, c)
            }
        };
        return c.isBookmarkNode = b.isBookmarkNode, c
    }), g("l", ["1", "1v", "2z", "1j", "1y", "30", "b", "15", "1e", "1g"], function (a, b, c, d, e, f, g, h, i, j) {
        var k = e.isContentEditableFalse,
            l = e.isContentEditableTrue,
            m = function (a, b) {
                for (; b && b != a;) {
                    if (l(b) || k(b)) return b;
                    b = b.parentNode
                }
                return null
            };
        return function (a, e) {
            var l, n, o, p, q, r, s, t, u, v, w, x, y, z, A, B, C, D = e.dom,
                E = i.each,
                F = e.getDoc(),
                G = d,
                H = Math.abs,
                I = Math.round,
                J = e.getBody();
            p = {
                nw: [0, 0, -1, -1],
                ne: [1, 0, 1, -1],
                se: [1, 1, 1, 1],
                sw: [0, 1, -1, 1]
            };
            var K = ".mce-content-body";
            e.contentStyles.push(K + " div.mce-resizehandle {position: absolute;border: 1px solid black;box-sizing: content-box;background: #FFF;width: 7px;height: 7px;z-index: 10000}" + K + " .mce-resizehandle:hover {background: #000}" + K + " img[data-mce-selected]," + K + " hr[data-mce-selected] {outline: 1px solid black;resize: none}" + K + " .mce-clonedresizable {position: absolute;" + (g.gecko ? "" : "outline: 1px dashed black;") + "opacity: .5;filter: alpha(opacity=50);z-index: 10000}" + K + " .mce-resize-helper {background: #555;background: rgba(0,0,0,0.75);border-radius: 3px;border: 1px;color: white;display: none;font-family: sans-serif;font-size: 12px;white-space: nowrap;line-height: 14px;margin: 5px 10px;padding: 5px;position: absolute;z-index: 10001}");
            var L = function (a) {
                    return a && ("IMG" === a.nodeName || e.dom.is(a, "figure.image"))
                },
                M = function (a, b) {
                    return L(a.target) && !f.isXYWithinRange(a.clientX, a.clientY, b)
                },
                N = function (a) {
                    var b = a.target;
                    M(a, e.selection.getRng()) && !a.isDefaultPrevented() && (a.preventDefault(), e.selection.select(b))
                },
                O = function (a) {
                    return e.dom.is(a, "figure.image") ? a.querySelector("img") : a
                },
                P = function (a) {
                    var d = e.settings.object_resizing;
                    return d !== !1 && !g.iOS && ("string" != typeof d && (d = "table,img,figure.image,div"), "false" !== a.getAttribute("data-mce-resize") && (a != e.getBody() && c.is(b.fromDom(a), d)))
                },
                Q = function (a) {
                    var b, c, d, f, g;
                    b = a.screenX - r, c = a.screenY - s, z = b * q[2] + v, A = c * q[3] + w, z = z < 5 ? 5 : z, A = A < 5 ? 5 : A, d = L(l) && e.settings.resize_img_proportional !== !1 ? !j.modifierPressed(a) : j.modifierPressed(a) || L(l) && q[2] * q[3] !== 0, d && (H(b) > H(c) ? (A = I(z * x), z = I(A / x)) : (z = I(A / x), A = I(z * x))), D.setStyles(O(n), {
                        width: z,
                        height: A
                    }), f = q.startPos.x + b, g = q.startPos.y + c, f = f > 0 ? f : 0, g = g > 0 ? g : 0, D.setStyles(o, {
                        left: f,
                        top: g,
                        display: "block"
                    }), o.innerHTML = z + " &times; " + A, q[2] < 0 && n.clientWidth <= z && D.setStyle(n, "left", t + (v - z)), q[3] < 0 && n.clientHeight <= A && D.setStyle(n, "top", u + (w - A)), b = J.scrollWidth - B, c = J.scrollHeight - C, b + c !== 0 && D.setStyles(o, {
                        left: f - b,
                        top: g - c
                    }), y || (e.fire("ObjectResizeStart", {
                        target: l,
                        width: v,
                        height: w
                    }), y = !0)
                },
                R = function () {
                    y = !1;
                    var a = function (a, b) {
                        b && (l.style[a] || !e.schema.isValid(l.nodeName.toLowerCase(), a) ? D.setStyle(O(l), a, b) : D.setAttrib(O(l), a, b))
                    };
                    a("width", z), a("height", A), D.unbind(F, "mousemove", Q), D.unbind(F, "mouseup", R), G != F && (D.unbind(G, "mousemove", Q), D.unbind(G, "mouseup", R)), D.remove(n), D.remove(o), S(l), e.fire("ObjectResized", {
                        target: l,
                        width: z,
                        height: A
                    }), D.setAttrib(l, "style", D.getAttrib(l, "style")), e.nodeChanged()
                },
                S = function (a) {
                    var b, c, d, f, h;
                    T(), W(), b = D.getPos(a, J), t = b.x, u = b.y, h = a.getBoundingClientRect(), c = h.width || h.right - h.left, d = h.height || h.bottom - h.top, l != a && (l = a, z = A = 0), f = e.fire("ObjectSelected", {
                        target: a
                    }), P(a) && !f.isDefaultPrevented() ? E(p, function (a, b) {
                        var e, f = function (b) {
                            r = b.screenX, s = b.screenY, v = O(l).clientWidth, w = O(l).clientHeight, x = w / v, q = a, a.startPos = {
                                x: c * a[0] + t,
                                y: d * a[1] + u
                            }, B = J.scrollWidth, C = J.scrollHeight, n = l.cloneNode(!0), D.addClass(n, "mce-clonedresizable"), D.setAttrib(n, "data-mce-bogus", "all"), n.contentEditable = !1, n.unSelectabe = !0, D.setStyles(n, {
                                left: t,
                                top: u,
                                margin: 0
                            }), n.removeAttribute("data-mce-selected"), J.appendChild(n), D.bind(F, "mousemove", Q), D.bind(F, "mouseup", R), G != F && (D.bind(G, "mousemove", Q), D.bind(G, "mouseup", R)), o = D.add(J, "div", {
                                "class": "mce-resize-helper",
                                "data-mce-bogus": "all"
                            }, v + " &times; " + w)
                        };
                        e = D.get("mceResizeHandle" + b), e && D.remove(e), e = D.add(J, "div", {
                            id: "mceResizeHandle" + b,
                            "data-mce-bogus": "all",
                            "class": "mce-resizehandle",
                            unselectable: !0,
                            style: "cursor:" + b + "-resize; margin:0; padding:0"
                        }), g.ie && (e.contentEditable = !1), D.bind(e, "mousedown", function (a) {
                            a.stopImmediatePropagation(), a.preventDefault(), f(a)
                        }), a.elm = e, D.setStyles(e, {
                            left: c * a[0] + t - e.offsetWidth / 2,
                            top: d * a[1] + u - e.offsetHeight / 2
                        })
                    }) : T(), l.setAttribute("data-mce-selected", "1")
                },
                T = function () {
                    var a, b;
                    W(), l && l.removeAttribute("data-mce-selected");
                    for (a in p) b = D.get("mceResizeHandle" + a), b && (D.unbind(b), D.remove(b))
                },
                U = function (b) {
                    var c, d, f = function (a, b) {
                        if (a)
                            do
                                if (a === b) return !0; while (a = a.parentNode)
                    };
                    if (!y && !e.removed) return E(D.select("img[data-mce-selected],hr[data-mce-selected]"), function (a) {
                        a.removeAttribute("data-mce-selected")
                    }), d = "mousedown" == b.type ? b.target : a.getNode(), d = D.$(d).closest("table,img,figure.image,hr")[0], f(d, J) && (X(), c = a.getStart(!0), f(c, d) && f(a.getEnd(!0), d)) ? void S(d) : void T()
                },
                V = function (a) {
                    return k(m(e.getBody(), a))
                },
                W = function () {
                    for (var a in p) {
                        var b = p[a];
                        b.elm && (D.unbind(b.elm), delete b.elm)
                    }
                },
                X = function () {
                    try {
                        e.getDoc().execCommand("enableObjectResizing", !1, !1)
                    } catch (a) {}
                };
            e.on("init", function () {
                X(), g.ie && g.ie >= 11 && (e.on("mousedown click", function (a) {
                    var b = a.target,
                        c = b.nodeName;
                    y || !/^(TABLE|IMG|HR)$/.test(c) || V(b) || (2 !== a.button && e.selection.select(b, "TABLE" == c), "mousedown" == a.type && e.nodeChanged())
                }), e.dom.bind(J, "mscontrolselect", function (a) {
                    var b = function (a) {
                        h.setEditorTimeout(e, function () {
                            e.selection.select(a)
                        })
                    };
                    return V(a.target) ? (a.preventDefault(), void b(a.target)) : void(/^(TABLE|IMG|HR)$/.test(a.target.nodeName) && (a.preventDefault(), "IMG" == a.target.tagName && b(a.target)))
                }));
                var a = h.throttle(function (a) {
                    e.composing || U(a)
                });
                e.on("nodechange ResizeEditor ResizeWindow drop", a), e.on("keyup compositionend", function (b) {
                    l && "TABLE" == l.nodeName && a(b)
                }), e.on("hide blur", T), e.on("contextmenu", N)
            }), e.on("remove", W);
            var Y = function () {
                l = n = null
            };
            return {
                isResizable: P,
                showResizeRect: S,
                hideResizeRect: T,
                updateResizeRect: U,
                destroy: Y
            }
        }
    }), g("33", ["1y"], function (a) {
        var b = function (a) {
                for (var b = 0, c = 0, d = a; d && d.nodeType;) b += d.offsetLeft || 0, c += d.offsetTop || 0, d = d.offsetParent;
                return {
                    x: b,
                    y: c
                }
            },
            c = function (a, b, c) {
                var d = {
                    elm: b,
                    alignToTop: c
                };
                return a.fire("scrollIntoView", d), d.isDefaultPrevented()
            },
            d = function (d, e, f) {
                var g, h, i, j, k = d.dom,
                    l = k.getRoot(),
                    m = 0;
                if (!c(d, e, f) && a.isElement(e)) {
                    if (f === !1 && (m = e.offsetHeight), "BODY" !== l.nodeName) {
                        var n = d.selection.getScrollContainer();
                        if (n) return g = b(e).y - b(n).y + m, j = n.clientHeight, i = n.scrollTop, void((g < i || g + 25 > i + j) && (n.scrollTop = g < i ? g : g - j + 25))
                    }
                    h = k.getViewPort(d.getWin()), g = k.getPos(e).y + m, i = h.y, j = h.h, (g < h.y || g + 25 > i + j) && d.getWin().scrollTo(0, g < i ? g : g - j + 25)
                }
            };
        return {
            scrollIntoView: d
        }
    }), g("2s", ["1y", "1e"], function (a, b) {
        var c = function (b) {
                return a.isContentEditableTrue(b) || a.isContentEditableFalse(b)
            },
            d = function (a, b, c) {
                for (; a && a !== b;) {
                    if (c(a)) return a;
                    a = a.parentNode
                }
                return null
            },
            e = function (a, c, d) {
                var e, f, g;
                if (e = d.elementFromPoint(a, c), f = d.body.createTextRange(), e && "HTML" !== e.tagName || (e = d.body), f.moveToElementText(e), g = b.toArray(f.getClientRects()), g = g.sort(function (a, b) {
                        return a = Math.abs(Math.max(a.top - c, a.bottom - c)), b = Math.abs(Math.max(b.top - c, b.bottom - c)), a - b
                    }), g.length > 0) {
                    c = (g[0].bottom + g[0].top) / 2;
                    try {
                        return f.moveToPoint(a, c), f.collapse(!0), f
                    } catch (a) {}
                }
                return null
            },
            f = function (b, e) {
                var f = b && b.parentElement ? b.parentElement() : null;
                return a.isContentEditableFalse(d(f, e, c)) ? null : b
            },
            g = function (a, b, c) {
                var d, g;
                if (c.caretPositionFromPoint) g = c.caretPositionFromPoint(a, b), g && (d = c.createRange(), d.setStart(g.offsetNode, g.offset), d.collapse(!0));
                else if (c.caretRangeFromPoint) d = c.caretRangeFromPoint(a, b);
                else if (c.body.createTextRange) {
                    d = c.body.createTextRange();
                    try {
                        d.moveToPoint(a, b), d.collapse(!0)
                    } catch (f) {
                        d = e(a, b, c)
                    }
                    return f(d, c.body)
                }
                return d
            };
        return {
            fromPoint: g
        }
    }), g("34", ["1i"], function (a) {
        var b = function (b, c) {
            return a.map(c, function (a) {
                var c = b.fire("GetSelectionRange", {
                    range: a
                });
                return c.range !== a ? c.range : a
            })
        };
        return {
            processRanges: b
        }
    }), g("60", ["48", "1v", "41", "5d", "47", "3h"], function (a, b, c, d, e, f) {
        var g = function (a, c) {
                return b.fromDom(a.dom().cloneNode(c))
            },
            h = function (a) {
                return g(a, !1)
            },
            i = function (a) {
                return g(a, !0)
            },
            j = function (c, d) {
                var e = b.fromTag(d),
                    f = a.clone(c);
                return a.setAll(e, f), e
            },
            k = function (a, b) {
                var c = j(a, b),
                    e = f.children(i(a));
                return d.append(c, e), c
            },
            l = function (a, b) {
                var g = j(a, b);
                c.before(a, g);
                var h = f.children(a);
                return d.append(g, h), e.remove(a), g
            };
        return {
            shallow: h,
            shallowAs: j,
            deep: i,
            copy: k,
            mutate: l
        }
    }), g("61", ["1i", "1v", "1j"], function (a, b, c) {
        var d = function (d, e) {
            var f = e || c,
                g = f.createDocumentFragment();
            return a.each(d, function (a) {
                g.appendChild(a.dom())
            }), b.fromDom(g)
        };
        return {
            fromElements: d
        }
    }), g("63", ["1i", "1", "2n", "5c", "31", "1v", "3f", "3h", "1y"], function (a, b, c, d, e, f, g, h, i) {
        var j = function (a) {
                var b = a.startContainer,
                    d = a.startOffset;
                return i.isText(b) ? 0 === d ? c.some(f.fromDom(b)) : c.none() : c.from(b.childNodes[d]).map(f.fromDom)
            },
            k = function (a) {
                var b = a.endContainer,
                    d = a.endOffset;
                return i.isText(b) ? d === b.data.length ? c.some(f.fromDom(b)) : c.none() : c.from(b.childNodes[d - 1]).map(f.fromDom)
            },
            l = function (a) {
                return h.firstChild(a).fold(b.constant([a]), function (b) {
                    return [a].concat(l(b))
                })
            },
            m = function (a) {
                return h.lastChild(a).fold(b.constant([a]), function (b) {
                    return "br" === g.name(b) ? h.prevSibling(b).map(function (b) {
                        return [a].concat(m(b))
                    }).getOr([]) : [a].concat(m(b))
                })
            },
            n = function (c, f) {
                return d.liftN([j(f), k(f)], function (d, f) {
                    var g = a.find(l(c), b.curry(e.eq, d)),
                        h = a.find(m(c), b.curry(e.eq, f));
                    return g.isSome() && h.isSome()
                }).getOr(!1)
            };
        return {
            hasAllContentsSelected: n
        }
    }), g("64", ["1i", "2n", "45", "31", "41", "5d", "60", "1v", "48", "5f"], function (a, b, c, d, e, f, g, h, i, j) {
        var k = c.immutable("element", "width", "rows"),
            l = c.immutable("element", "cells"),
            m = c.immutable("x", "y"),
            n = function (a, b) {
                var c = parseInt(i.get(a, b), 10);
                return isNaN(c) ? 1 : c
            },
            o = function (a, b, c, d, e) {
                for (var f = n(e, "rowspan"), h = n(e, "colspan"), i = a.rows(), j = c; j < c + f; j++) {
                    i[j] || (i[j] = l(g.deep(d), []));
                    for (var k = b; k < b + h; k++) {
                        var m = i[j].cells();
                        m[k] = j == c && k == b ? e : g.shallow(e)
                    }
                }
            },
            p = function (a, b, c) {
                var d = a.rows(),
                    e = d[c] ? d[c].cells() : [];
                return !!e[b]
            },
            q = function (a, b, c) {
                for (; p(a, b, c);) b++;
                return b
            },
            r = function (b) {
                return a.foldl(b, function (a, b) {
                    return b.cells().length > a ? b.cells().length : a
                }, 0)
            },
            s = function (a, c) {
                for (var e = a.rows(), f = 0; f < e.length; f++)
                    for (var g = e[f].cells(), h = 0; h < g.length; h++)
                        if (d.eq(g[h], c)) return b.some(m(h, f));
                return b.none()
            },
            t = function (a, b, c, d, e) {
                for (var f = [], g = a.rows(), h = c; h <= e; h++) {
                    var i = g[h].cells(),
                        j = b < d ? i.slice(b, d + 1) : i.slice(d, b + 1);
                    f.push(l(g[h].element(), j))
                }
                return f
            },
            u = function (a, b, c) {
                var d = b.x(),
                    e = b.y(),
                    f = c.x(),
                    g = c.y(),
                    h = e < g ? t(a, d, e, f, g) : t(a, d, g, f, e);
                return k(a.element(), r(h), h)
            },
            v = function (a, b) {
                var c = g.shallow(a.element()),
                    d = h.fromTag("tbody");
                return f.append(d, b), e.append(c, d), c
            },
            w = function (b) {
                return a.map(b.rows(), function (b) {
                    var c = a.map(b.cells(), function (a) {
                            var b = g.deep(a);
                            return i.remove(b, "colspan"), i.remove(b, "rowspan"), b
                        }),
                        d = g.shallow(b.element());
                    return f.append(d, c), d
                })
            },
            x = function (b) {
                var c = k(g.shallow(b), 0, []);
                return a.each(j.descendants(b, "tr"), function (b, d) {
                    a.each(j.descendants(b, "td,th"), function (a, e) {
                        o(c, q(c, e, d), d, b, a)
                    })
                }), k(c.element(), r(c.rows()), c.rows())
            },
            y = function (a) {
                return v(a, w(a))
            },
            z = function (a, b, c) {
                return s(a, b).bind(function (b) {
                    return s(a, c).map(function (c) {
                        return u(a, b, c)
                    })
                })
            };
        return {
            fromDom: x,
            toDom: y,
            subsection: z
        }
    }), g("4x", ["1i", "1", "31", "41", "60", "1v", "61", "3f", "62", "3h", "3l", "5s", "63", "64", "5t"], function (a, b, c, d, e, f, g, h, i, j, k, l, m, n, o) {
        var p = function (b) {
                return a.find(b, function (a) {
                    return "ul" === h.name(a) || "ol" === h.name(a)
                })
            },
            q = function (c, d) {
                return a.find(c, function (a) {
                    return "li" === h.name(a) && m.hasAllContentsSelected(a, d)
                }).fold(b.constant([]), function (a) {
                    return p(c).map(function (a) {
                        return [f.fromTag("li"), f.fromTag(h.name(a))]
                    }).getOr([])
                })
            },
            r = function (b, c) {
                var e = a.foldl(c, function (a, b) {
                    return d.append(b, a), b
                }, b);
                return c.length > 0 ? g.fromElements([e]) : e
            },
            s = function (a) {
                return k.isListItem(a) ? j.parent(a).filter(k.isList).fold(b.constant([]), function (b) {
                    return [a, b]
                }) : k.isList(a) ? [a] : []
            },
            t = function (b, c) {
                var d = f.fromDom(c.commonAncestorContainer),
                    g = l.parentsAndSelf(d, b),
                    h = a.filter(g, function (a) {
                        return k.isInline(a) || k.isHeading(a)
                    }),
                    i = q(g, c),
                    j = h.concat(i.length ? i : s(d));
                return a.map(j, e.shallow)
            },
            u = function () {
                return g.fromElements([])
            },
            v = function (a, b) {
                return r(f.fromDom(b.cloneContents()), t(a, b))
            },
            w = function (a, d) {
                return i.ancestor(d, "table", b.curry(c.eq, a))
            },
            x = function (a, b) {
                return w(a, b[0]).bind(function (a) {
                    var c = b[0],
                        d = b[b.length - 1],
                        e = n.fromDom(a);
                    return n.subsection(e, c, d).map(function (a) {
                        return g.fromElements([n.toDom(a)])
                    })
                }).getOrThunk(u)
            },
            y = function (a, b) {
                return b.length > 0 && b[0].collapsed ? u() : v(a, b[0])
            },
            z = function (a, b) {
                var c = o.getCellsFromElementOrRanges(b, a);
                return c.length > 0 ? x(a, c) : y(a, b)
            };
        return {
            read: z
        }
    }), g("35", ["1v", "34", "4x", "36", "4b"], function (a, b, c, d, e) {
        var f = function (f, g) {
            var h, i = f.selection.getRng(),
                j = f.dom.create("body"),
                k = f.selection.getSel(),
                l = b.processRanges(f, d.getRanges(k));
            if (g = g || {}, g.get = !0, g.format = g.format || "html", g.selection = !0, g = f.fire("BeforeGetContent", g), g.isDefaultPrevented()) return f.fire("GetContent", g), g.content;
            if ("text" === g.format) return f.selection.isCollapsed() ? "" : e.trim(i.text || (k.toString ? k.toString() : ""));
            i.cloneContents ? (h = g.contextual ? c.read(a.fromDom(f.getBody()), l).dom() : i.cloneContents(), h && j.appendChild(h)) : void 0 !== i.item || void 0 !== i.htmlText ? (j.innerHTML = "<br>" + (i.item ? i.item(0).outerHTML : i.htmlText), j.removeChild(j.firstChild)) : j.innerHTML = i.toString(), g.getInner = !0;
            var m = f.selection.serializer.serialize(j, g);
            return "tree" === g.format ? m : (g.content = f.selection.isCollapsed() ? "" : m, f.fire("GetContent", g), g.content)
        };
        return {
            getContent: f
        }
    }), g("37", [], function () {
        var a = function (a, b, c) {
            var d, e, f, g = a.selection.getRng(),
                h = a.getDoc();
            if (c = c || {
                    format: "html"
                }, c.set = !0, c.selection = !0, c.content = b, !c.no_events && (c = a.fire("BeforeSetContent", c), c.isDefaultPrevented())) return void a.fire("SetContent", c);
            if (b = c.content, g.insertNode) {
                b += '<span id="__caret">_</span>', g.startContainer == h && g.endContainer == h ? h.body.innerHTML = b : (g.deleteContents(), 0 === h.body.childNodes.length ? h.body.innerHTML = b : g.createContextualFragment ? g.insertNode(g.createContextualFragment(b)) : (e = h.createDocumentFragment(), f = h.createElement("div"), e.appendChild(f), f.outerHTML = b, g.insertNode(e))), d = a.dom.get("__caret"), g = h.createRange(), g.setStartBefore(d), g.setEndBefore(d), a.selection.setRng(g), a.dom.remove("__caret");
                try {
                    a.selection.setRng(g)
                } catch (a) {}
            } else g.item && (h.execCommand("Delete", !1, null), g = a.getRng()), /^\s+/.test(b) ? (g.pasteHTML('<span id="__mce_tmp">_</span>' + b), a.dom.remove("__mce_tmp")) : g.pasteHTML(b);
            c.no_events || a.fire("SetContent", c)
        };
        return {
            setContent: a
        }
    }), g("q", ["31", "1v", "b", "i", "32", "l", "33", "s", "24", "2s", "34", "35", "36", "2t", "20", "37", "1e"], function (a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q) {
        var r = q.each,
            s = q.trim,
            t = function (c) {
                return !(!c || !c.ownerDocument) && a.contains(b.fromDom(c.ownerDocument), b.fromDom(c))
            },
            u = function (a) {
                return !!a && (!!a.select || t(a.startContainer) && t(a.endContainer))
            },
            v = function (a, b, c, e) {
                var g = this;
                g.dom = a, g.win = b, g.serializer = c, g.editor = e, g.bookmarkManager = new d(g), g.controlSelection = new f(g, e)
            };
        return v.prototype = {
            setCursorLocation: function (a, b) {
                var c = this,
                    d = c.dom.createRng();
                a ? (d.setStart(a, b), d.setEnd(a, b), c.setRng(d), c.collapse(!1)) : (c._moveEndPoint(d, c.editor.getBody(), !0), c.setRng(d))
            },
            getContent: function (a) {
                return l.getContent(this.editor, a)
            },
            setContent: function (a, b) {
                p.setContent(this.editor, a, b)
            },
            getStart: function (a) {
                var b, c = this,
                    d = c.getRng();
                return b = d.startContainer, 1 == b.nodeType && b.hasChildNodes() && (a && d.collapsed || (b = b.childNodes[Math.min(b.childNodes.length - 1, d.startOffset)])), b && 3 == b.nodeType ? b.parentNode : b
            },
            getEnd: function (a) {
                var b, c, d = this,
                    e = d.getRng();
                return b = e.endContainer, c = e.endOffset, 1 == b.nodeType && b.hasChildNodes() && (a && e.collapsed || (b = b.childNodes[c > 0 ? c - 1 : c])), b && 3 == b.nodeType ? b.parentNode : b
            },
            getBookmark: function (a, b) {
                return this.bookmarkManager.getBookmark(a, b)
            },
            moveToBookmark: function (a) {
                return this.bookmarkManager.moveToBookmark(a)
            },
            select: function (a, b) {
                var c, d = this,
                    e = d.dom,
                    f = e.createRng();
                return a && (c = e.nodeIndex(a), f.setStart(a.parentNode, c), f.setEnd(a.parentNode, c + 1), b && (d._moveEndPoint(f, a, !0), d._moveEndPoint(f, a)), d.setRng(f)), a
            },
            isCollapsed: function () {
                var a = this,
                    b = a.getRng(),
                    c = a.getSel();
                return !(!b || b.item) && (b.compareEndPoints ? 0 === b.compareEndPoints("StartToEnd", b) : !c || b.collapsed)
            },
            collapse: function (a) {
                var b = this,
                    c = b.getRng();
                c.collapse(!!a), b.setRng(c)
            },
            getSel: function () {
                var a = this.win;
                return a.getSelection ? a.getSelection() : a.document.selection
            },
            getRng: function (a) {
                var b, c, d, e, f = this,
                    g = function (a, b, c) {
                        try {
                            return b.compareBoundaryPoints(a, c)
                        } catch (a) {
                            return -1
                        }
                    };
                if (!f.win) return null;
                if (e = f.win.document, "undefined" == typeof e || null === e) return null;
                if (void 0 !== f.editor.bookmark && i.hasFocus(f.editor) === !1) {
                    var h = o.getRng(f.editor);
                    if (h.isSome()) return h.getOr(e.createRange())
                }
                try {
                    (b = f.getSel()) && (c = b.rangeCount > 0 ? b.getRangeAt(0) : b.createRange ? b.createRange() : e.createRange())
                } catch (a) {}
                return c = k.processRanges(f.editor, [c])[0], c || (c = e.createRange ? e.createRange() : e.body.createTextRange()), c.setStart && 9 === c.startContainer.nodeType && c.collapsed && (d = f.dom.getRoot(), c.setStart(d, 0), c.setEnd(d, 0)), f.selectedRange && f.explicitRange && (0 === g(c.START_TO_START, c, f.selectedRange) && 0 === g(c.END_TO_END, c, f.selectedRange) ? c = f.explicitRange : (f.selectedRange = null, f.explicitRange = null)), c
            },
            setRng: function (a, b) {
                var d, e, f, g = this;
                if (u(a))
                    if (a.select) {
                        g.explicitRange = null;
                        try {
                            a.select()
                        } catch (a) {}
                    } else {
                        if (d = g.getSel(), f = g.editor.fire("SetSelectionRange", {
                                range: a,
                                forward: b
                            }), a = f.range, d) {
                            g.explicitRange = a;
                            try {
                                d.removeAllRanges(), d.addRange(a)
                            } catch (a) {}
                            b === !1 && d.extend && (d.collapse(a.endContainer, a.endOffset), d.extend(a.startContainer, a.startOffset)), g.selectedRange = d.rangeCount > 0 ? d.getRangeAt(0) : null
                        }
                        a.collapsed || a.startContainer !== a.endContainer || !d.setBaseAndExtent || c.ie || a.endOffset - a.startOffset < 2 && a.startContainer.hasChildNodes() && (e = a.startContainer.childNodes[a.startOffset], e && "IMG" === e.tagName && (d.setBaseAndExtent(a.startContainer, a.startOffset, a.endContainer, a.endOffset), d.anchorNode === a.startContainer && d.focusNode === a.endContainer || d.setBaseAndExtent(e, 0, e, 1))), g.editor.fire("AfterSetSelectionRange", {
                            range: a,
                            forward: b
                        })
                    }
            },
            setNode: function (a) {
                var b = this;
                return b.setContent(b.dom.getOuterHTML(a)), a
            },
            getNode: function () {
                var a, b, c, d, e, f = this,
                    g = f.getRng(),
                    h = f.dom.getRoot(),
                    i = function (a, b) {
                        for (var c = a; a && 3 === a.nodeType && 0 === a.length;) a = b ? a.nextSibling : a.previousSibling;
                        return a || c
                    };
                return g ? (b = g.startContainer, c = g.endContainer, d = g.startOffset, e = g.endOffset, a = g.commonAncestorContainer, !g.collapsed && (b == c && e - d < 2 && b.hasChildNodes() && (a = b.childNodes[d]), 3 === b.nodeType && 3 === c.nodeType && (b = b.length === d ? i(b.nextSibling, !0) : b.parentNode, c = 0 === e ? i(c.previousSibling, !1) : c.parentNode, b && b === c)) ? b : a && 3 == a.nodeType ? a.parentNode : a) : h
            },
            getSelectedBlocks: function (a, b) {
                var c, d, e = this,
                    f = e.dom,
                    g = [];
                if (d = f.getRoot(), a = f.getParent(a || e.getStart(), f.isBlock), b = f.getParent(b || e.getEnd(), f.isBlock), a && a != d && g.push(a), a && b && a != b) {
                    c = a;
                    for (var i = new h(a, d);
                        (c = i.next()) && c != b;) f.isBlock(c) && g.push(c)
                }
                return b && a != b && b != d && g.push(b), g
            },
            isForward: function () {
                var a, b, c = this.dom,
                    d = this.getSel();
                return !(d && d.anchorNode && d.focusNode) || (a = c.createRng(), a.setStart(d.anchorNode, d.anchorOffset), a.collapse(!0), b = c.createRng(), b.setStart(d.focusNode, d.focusOffset), b.collapse(!0), a.compareBoundaryPoints(a.START_TO_START, b) <= 0)
            },
            normalize: function () {
                var a = this,
                    b = a.getRng();
                if (!m.hasMultipleRanges(a.getSel())) {
                    var c = n.normalize(a.dom, b);
                    return c.each(function (b) {
                        a.setRng(b, a.isForward())
                    }), c.getOr(b)
                }
                return b
            },
            selectorChanged: function (a, b) {
                var c, d = this;
                return d.selectorChangedData || (d.selectorChangedData = {}, c = {}, d.editor.on("NodeChange", function (a) {
                    var b = a.element,
                        e = d.dom,
                        f = e.getParents(b, null, e.getRoot()),
                        g = {};
                    r(d.selectorChangedData, function (a, b) {
                        r(f, function (d) {
                            if (e.is(d, b)) return c[b] || (r(a, function (a) {
                                a(!0, {
                                    node: d,
                                    selector: b,
                                    parents: f
                                })
                            }), c[b] = a), g[b] = a, !1
                        })
                    }), r(c, function (a, d) {
                        g[d] || (delete c[d], r(a, function (a) {
                            a(!1, {
                                node: b,
                                selector: d,
                                parents: f
                            })
                        }))
                    })
                })), d.selectorChangedData[a] || (d.selectorChangedData[a] = []), d.selectorChangedData[a].push(b), d
            },
            getScrollContainer: function () {
                for (var a, b = this.dom.getRoot(); b && "BODY" != b.nodeName;) {
                    if (b.scrollHeight > b.clientHeight) {
                        a = b;
                        break
                    }
                    b = b.parentNode
                }
                return a
            },
            scrollIntoView: function (a, b) {
                g.scrollIntoView(this.editor, a, b)
            },
            placeCaretAt: function (a, b) {
                this.setRng(j.fromPoint(a, b, this.editor.getDoc()))
            },
            _moveEndPoint: function (a, b, d) {
                var e = b,
                    f = new h(b, e),
                    g = this.dom.schema.getNonEmptyElements();
                do {
                    if (3 == b.nodeType && 0 !== s(b.nodeValue).length) return void(d ? a.setStart(b, 0) : a.setEnd(b, b.nodeValue.length));
                    if (g[b.nodeName] && !/^(TD|TH)$/.test(b.nodeName)) return void(d ? a.setStartBefore(b) : "BR" == b.nodeName ? a.setEndBefore(b) : a.setEndAfter(b));
                    if (c.ie && c.ie < 11 && this.dom.isBlock(b) && this.dom.isEmpty(b)) return void(d ? a.setStart(b, 0) : a.setEnd(b, 0))
                } while (b = d ? f.next() : f.prev());
                "BODY" == e.nodeName && (d ? a.setStart(e, 0) : a.setEnd(e, e.childNodes.length))
            },
            getBoundingClientRect: function () {
                var a = this.getRng();
                return a.collapsed ? e.fromRangeStart(a).getClientRects()[0] : a.getBoundingClientRect()
            },
            destroy: function () {
                this.win = null, this.controlSelection.destroy()
            }
        }, v
    }), g("7h", ["3q", "1r", "77", "3n", "5b", "3r", "32", "3o"], function (a, b, c, d, e, f, g, h) {
        var i = a.curry,
            j = function (a, b, c, f) {
                for (; f = e.findNode(f, a, d.isEditableCaretCandidate, b);)
                    if (c(f)) return
            },
            k = function (a, d, e, f, g, h) {
                var i, k, l = 0,
                    m = [],
                    n = function (f) {
                        var h, i, j;
                        for (j = c.getClientRects(f), a == -1 && (j = j.reverse()), h = 0; h < j.length; h++)
                            if (i = j[h], !e(i, k)) {
                                if (m.length > 0 && d(i, b.last(m)) && l++, i.line = l, g(i)) return !0;
                                m.push(i)
                            }
                    };
                return (k = b.last(h.getClientRects())) ? (i = h.getNode(), n(i), j(a, f, n, i), m) : m
            },
            l = function (a, b) {
                return b.line > a
            },
            m = function (a, b) {
                return b.line === a
            },
            n = i(k, -1, h.isAbove, h.isBelow),
            o = i(k, 1, h.isBelow, h.isAbove),
            p = function (a, c, d, e) {
                var i, j, k, l, m, n, o = new f(c),
                    p = [],
                    q = 0,
                    r = function (c) {
                        return 1 == a ? b.last(c.getClientRects()) : b.last(c.getClientRects())
                    };
                1 == a ? (i = o.next, j = h.isBelow, k = h.isAbove, l = g.after(e)) : (i = o.prev, j = h.isAbove, k = h.isBelow, l = g.before(e)), n = r(l);
                do
                    if (l.isVisible() && (m = r(l), !k(m, n))) {
                        if (p.length > 0 && j(m, b.last(p)) && q++, m = h.clone(m), m.position = l, m.line = q, d(m)) return p;
                        p.push(m)
                    } while (l = i(l));
                return p
            };
        return {
            upUntil: n,
            downUntil: o,
            positionsUntil: p,
            isAboveLine: i(l),
            isLine: i(m)
        }
    }), g("78", ["b", "46", "32", "5b", "3r", "6x", "7h", "1y", "6z", "2v", "1r", "3q"], function (a, b, c, d, e, f, g, h, i, j, k, l) {
        var m = h.isContentEditableFalse,
            n = j.getSelectedNode,
            o = d.isAfterContentEditableFalse,
            p = d.isBeforeContentEditableFalse,
            q = function (a, b) {
                for (; b = a(b);)
                    if (b.isVisible()) return b;
                return b
            },
            r = function (a, b) {
                var c = d.isInSameBlock(a, b);
                return !(c || !h.isBr(a.getNode())) || c
            },
            s = function (a) {
                return b.isCaretContainerBlock(a.startContainer)
            },
            t = function (a, b, e) {
                return e = d.normalizeRange(a, b, e), a === -1 ? c.fromRangeStart(e) : c.fromRangeEnd(e)
            },
            u = function (a, b, c, d, e) {
                var f, g, h, j;
                return !e.collapsed && (f = n(e), m(f)) ? i.showCaret(a, b, f, a === -1) : (j = s(e), g = t(a, b.getBody(), e), d(g) ? i.selectNode(b, g.getNode(a === -1)) : (g = c(g)) ? d(g) ? i.showCaret(a, b, g.getNode(a === -1), 1 === a) : (h = c(g), d(h) && r(g, h) ? i.showCaret(a, b, h.getNode(a === -1), 1 === a) : j ? i.renderRangeCaret(b, g.toRange()) : null) : j ? e : null)
            },
            v = function (a, b, c, d) {
                var e, h, j, l, q, r, s, u, v;
                if (v = n(d), e = t(a, b.getBody(), d), h = c(b.getBody(), g.isAboveLine(1), e), j = k.filter(h, g.isLine(1)), q = k.last(e.getClientRects()), p(e) && (v = e.getNode()), o(e) && (v = e.getNode(!0)), !q) return null;
                if (r = q.left, l = f.findClosestClientRect(j, r), l && m(l.node)) return s = Math.abs(r - l.left), u = Math.abs(r - l.right), i.showCaret(a, b, l.node, s < u);
                if (v) {
                    var w = g.positionsUntil(a, b.getBody(), g.isAboveLine(1), v);
                    if (l = f.findClosestClientRect(k.filter(w, g.isLine(1)), r)) return i.renderRangeCaret(b, l.position.toRange());
                    if (l = k.last(k.filter(w, g.isLine(0)))) return i.renderRangeCaret(b, l.position.toRange())
                }
            },
            w = function (b) {
                var c = b.dom.create(b.settings.forced_root_block);
                return (!a.ie || a.ie >= 11) && (c.innerHTML = '<br data-mce-bogus="1">'), c
            },
            x = function (a, b, d) {
                var f, g, h, i = new e(a.getBody()),
                    j = l.curry(q, i.next),
                    k = l.curry(q, i.prev);
                if (d.collapsed && a.settings.forced_root_block) {
                    if (f = a.dom.getParent(d.startContainer, "PRE"), !f) return;
                    g = 1 === b ? j(c.fromRangeStart(d)) : k(c.fromRangeStart(d)), g || (h = w(a), 1 === b ? a.$(f).after(h) : a.$(f).before(h), a.selection.select(h, !0), a.selection.collapse())
                }
            },
            y = function (a, b) {
                var c, d = new e(a.getBody()),
                    f = l.curry(q, d.next),
                    g = l.curry(q, d.prev),
                    h = b ? 1 : -1,
                    i = b ? f : g,
                    j = b ? p : o,
                    k = a.selection.getRng();
                return (c = u(h, a, i, j, k)) ? c : (c = x(a, h, k), c ? c : null)
            },
            z = function (a, b) {
                var c, d = b ? 1 : -1,
                    e = b ? g.downUntil : g.upUntil,
                    f = a.selection.getRng();
                return (c = v(d, a, e, f)) ? c : (c = x(a, d, f), c ? c : null)
            },
            A = function (a, b) {
                return function () {
                    var c = y(a, b);
                    return !!c && (a.selection.setRng(c), !0)
                }
            },
            B = function (a, b) {
                return function () {
                    var c = z(a, b);
                    return !!c && (a.selection.setRng(c), !0)
                }
            };
        return {
            moveH: A,
            moveV: B
        }
    }), g("79", ["1i", "1", "4t"], function (a, b, c) {
        var d = function (d) {
                return a.map(d, function (a) {
                    return c.merge({
                        shiftKey: !1,
                        altKey: !1,
                        ctrlKey: !1,
                        metaKey: !1,
                        keyCode: 0,
                        action: b.noop
                    }, a)
                })
            },
            e = function (a, b) {
                return b.keyCode === a.keyCode && b.shiftKey === a.shiftKey && b.altKey === a.altKey && b.ctrlKey === a.ctrlKey && b.metaKey === a.metaKey
            },
            f = function (b, c) {
                return a.bind(d(b), function (a) {
                    return e(a, c) ? [a] : []
                })
            },
            g = function (a) {
                var b = Array.prototype.slice.call(arguments, 1);
                return function () {
                    return a.apply(null, b)
                }
            },
            h = function (b, c) {
                return a.find(f(b, c), function (a) {
                    return a.action()
                })
            };
        return {
            match: f,
            action: g,
            execute: h
        }
    }), g("70", ["3d", "5p", "78", "79", "1g"], function (a, b, c, d, e) {
        var f = function (f, g, h) {
                var i = a.detect().os;
                d.execute([{
                    keyCode: e.RIGHT,
                    action: c.moveH(f, !0)
                }, {
                    keyCode: e.LEFT,
                    action: c.moveH(f, !1)
                }, {
                    keyCode: e.UP,
                    action: c.moveV(f, !1)
                }, {
                    keyCode: e.DOWN,
                    action: c.moveV(f, !0)
                }, {
                    keyCode: e.RIGHT,
                    action: b.move(f, g, !0)
                }, {
                    keyCode: e.LEFT,
                    action: b.move(f, g, !1)
                }, {
                    keyCode: e.RIGHT,
                    ctrlKey: !i.isOSX(),
                    altKey: i.isOSX(),
                    action: b.moveNextWord(f, g)
                }, {
                    keyCode: e.LEFT,
                    ctrlKey: !i.isOSX(),
                    altKey: i.isOSX(),
                    action: b.movePrevWord(f, g)
                }], h).each(function (a) {
                    h.preventDefault()
                })
            },
            g = function (a, b) {
                a.on("keydown", function (c) {
                    c.isDefaultPrevented() === !1 && f(a, b, c)
                })
            };
        return {
            setup: g
        }
    }), g("7a", ["1i", "1", "1v", "3h", "32", "5l", "3y", "3l", "5s", "2f"], function (a, b, c, d, e, f, g, h, i, j) {
        var k = function (c, d) {
                var e = i.parentsAndSelf(d, c);
                return a.findIndex(e, h.isBlock).fold(b.constant(e), function (a) {
                    return e.slice(0, a)
                })
            },
            l = function (a) {
                return 1 === d.children(a).length
            },
            m = function (c, d, e, g) {
                var h = b.curry(j.isFormatElement, d),
                    i = a.map(a.filter(g, h), function (a) {
                        return a.dom()
                    });
                if (0 === i.length) f.deleteElement(d, c, e);
                else {
                    var k = j.replaceWithCaretFormat(e.dom(), i);
                    d.selection.setRng(k.toRange())
                }
            },
            n = function (b, d) {
                var f = c.fromDom(b.getBody()),
                    h = c.fromDom(b.selection.getStart()),
                    i = a.filter(k(f, h), l);
                return a.last(i).map(function (a) {
                    var c = e.fromRangeStart(b.selection.getRng());
                    return !!g.willDeleteLastPositionInElement(d, c, a.dom()) && (m(d, b, a, i), !0)
                }).getOr(!1)
            },
            o = function (a, b) {
                return !!a.selection.isCollapsed() && n(a, b)
            };
        return {
            backspaceDelete: o
        }
    }), g("71", ["3v", "3w", "3x", "3z", "7a", "40", "79", "1g"], function (a, b, c, d, e, f, g, h) {
        var i = function (i, j, k) {
                g.execute([{
                    keyCode: h.BACKSPACE,
                    action: g.action(c.backspaceDelete, i, !1)
                }, {
                    keyCode: h.DELETE,
                    action: g.action(c.backspaceDelete, i, !0)
                }, {
                    keyCode: h.BACKSPACE,
                    action: g.action(d.backspaceDelete, i, j, !1)
                }, {
                    keyCode: h.DELETE,
                    action: g.action(d.backspaceDelete, i, j, !0)
                }, {
                    keyCode: h.BACKSPACE,
                    action: g.action(b.backspaceDelete, i, !1)
                }, {
                    keyCode: h.DELETE,
                    action: g.action(b.backspaceDelete, i, !0)
                }, {
                    keyCode: h.BACKSPACE,
                    action: g.action(a.backspaceDelete, i, !1)
                }, {
                    keyCode: h.DELETE,
                    action: g.action(a.backspaceDelete, i, !0)
                }, {
                    keyCode: h.BACKSPACE,
                    action: g.action(f.backspaceDelete, i, !1)
                }, {
                    keyCode: h.DELETE,
                    action: g.action(f.backspaceDelete, i, !0)
                }, {
                    keyCode: h.BACKSPACE,
                    action: g.action(e.backspaceDelete, i, !1)
                }, {
                    keyCode: h.DELETE,
                    action: g.action(e.backspaceDelete, i, !0)
                }], k).each(function (a) {
                    k.preventDefault()
                })
            },
            j = function (a, b) {
                g.execute([{
                    keyCode: h.BACKSPACE,
                    action: g.action(c.paddEmptyElement, a)
                }, {
                    keyCode: h.DELETE,
                    action: g.action(c.paddEmptyElement, a)
                }], b)
            },
            k = function (a, b) {
                a.on("keydown", function (c) {
                    c.isDefaultPrevented() === !1 && i(a, b, c)
                }), a.on("keyup", function (b) {
                    b.isDefaultPrevented() === !1 && j(a, b)
                })
            };
        return {
            setup: k
        }
    }), g("6p", [], function () {
        var a = function (a, b, c) {
                var d = a.getParam(b, c);
                if (d.indexOf("=") !== -1) {
                    var e = a.getParam(b, "", "hash");
                    return e.hasOwnProperty(a.id) ? e[a.id] : c
                }
                return d
            },
            b = function (a) {
                return a.getParam("iframe_attrs", {})
            },
            c = function (a) {
                return a.getParam("doctype", "<!DOCTYPE html>")
            },
            d = function (a) {
                return a.getParam("document_base_url", "")
            },
            e = function (b) {
                return a(b, "body_id", "tinymce")
            },
            f = function (b) {
                return a(b, "body_class", "")
            },
            g = function (a) {
                return a.getParam("content_security_policy", "")
            },
            h = function (a) {
                return a.getParam("br_in_pre", !0)
            },
            i = function (a) {
                if (a.getParam("force_p_newlines", !1)) return "p";
                var b = a.getParam("forced_root_block", "p");
                return b === !1 ? "" : b
            },
            j = function (a) {
                return a.getParam("forced_root_block_attrs", {})
            },
            k = function (a) {
                return a.getParam("br_newline_selector", ".mce-toc h2,figcaption,caption")
            },
            l = function (a) {
                return a.getParam("no_newline_selector", "")
            },
            m = function (a) {
                return a.getParam("keep_styles", !0)
            },
            n = function (a) {
                return a.getParam("end_container_on_empty_block", !1)
            };
        return {
            getIframeAttrs: b,
            getDocType: c,
            getDocumentBaseUrl: d,
            getBodyId: e,
            getBodyClass: f,
            getContentSecurityPolicy: g,
            shouldPutBrInPre: h,
            getForcedRootBlock: i,
            getForcedRootBlockAttrs: j,
            getBrNewLineSelector: k,
            getNoNewLineSelector: l,
            shouldKeepStyles: m,
            shouldEndContainerOnEmtpyBlock: n
        }
    }), g("7l", ["1", "2n", "1v", "3l", "1y", "s"], function (a, b, c, d, e, f) {
        var g = function (a) {
                for (; a;) {
                    if (1 === a.nodeType || 3 === a.nodeType && a.data && /[\r\n\s]/.test(a.data)) return a;
                    a = a.nextSibling
                }
            },
            h = function (a, b) {
                var c, d, h, i, j = b,
                    k = a.dom,
                    l = a.schema.getMoveCaretBeforeOnEnterElements();
                if (b) {
                    if (/^(LI|DT|DD)$/.test(b.nodeName)) {
                        var m = g(b.firstChild);
                        m && /^(UL|OL|DL)$/.test(m.nodeName) && b.insertBefore(k.doc.createTextNode("\xa0"), b.firstChild)
                    }
                    if (h = k.createRng(), b.normalize(), b.hasChildNodes()) {
                        for (c = new f(b, b); d = c.current();) {
                            if (e.isText(d)) {
                                h.setStart(d, 0), h.setEnd(d, 0);
                                break
                            }
                            if (l[d.nodeName.toLowerCase()]) {
                                h.setStartBefore(d), h.setEndBefore(d);
                                break
                            }
                            j = d, d = c.next()
                        }
                        d || (h.setStart(j, 0), h.setEnd(j, 0))
                    } else e.isBr(b) ? b.nextSibling && k.isBlock(b.nextSibling) ? (h.setStartBefore(b), h.setEndBefore(b)) : (h.setStartAfter(b), h.setEndAfter(b)) : (h.setStart(b, 0), h.setEnd(b, 0));
                    a.selection.setRng(h), k.remove(i), a.selection.scrollIntoView(b)
                }
            },
            i = function (a, b) {
                var c, d, e = a.getRoot();
                for (c = b; c !== e && "false" !== a.getContentEditable(c);) "true" === a.getContentEditable(c) && (d = c), c = c.parentNode;
                return c !== e ? d : e
            },
            j = function (a) {
                return b.from(a.dom.getParent(a.selection.getStart(!0), a.dom.isBlock))
            },
            k = function (b) {
                return j(b).fold(a.constant(""), function (a) {
                    return a.nodeName.toUpperCase()
                })
            },
            l = function (a) {
                return j(a).filter(function (a) {
                    return d.isListItem(c.fromDom(a))
                }).isSome()
            };
        return {
            moveToCaretPosition: h,
            getEditableRoot: i,
            getParentBlock: j,
            getParentBlockName: k,
            isListItemParentBlock: l
        }
    }), g("7k", ["1y", "7l"], function (a, b) {
        var c = function (a, b) {
                return a.firstChild && a.firstChild.nodeName === b
            },
            d = function (a, b) {
                return a && a.parentNode && a.parentNode.nodeName === b
            },
            e = function (a) {
                return a && /^(OL|UL|LI)$/.test(a.nodeName)
            },
            f = function (a) {
                return e(a) && e(a.parentNode)
            },
            g = function (a) {
                var b = a.parentNode;
                return /^(LI|DT|DD)$/.test(b.nodeName) ? b : a
            },
            h = function (b, c, d) {
                for (var e = b[d ? "firstChild" : "lastChild"]; e && !a.isElement(e);) e = e[d ? "nextSibling" : "previousSibling"];
                return e === c
            },
            i = function (a, e, i, j, k) {
                var l = a.dom,
                    m = a.selection.getRng();
                if (i !== a.getBody()) {
                    f(i) && (k = "LI");
                    var n = k ? e(k) : l.create("BR");
                    if (h(i, j, !0) && h(i, j, !1)) d(i, "LI") ? l.insertAfter(n, g(i)) : l.replace(n, i);
                    else if (h(i, j, !0)) d(i, "LI") ? (l.insertAfter(n, g(i)), n.appendChild(l.doc.createTextNode(" ")), n.appendChild(i)) : i.parentNode.insertBefore(n, i);
                    else if (h(i, j, !1)) l.insertAfter(n, g(i));
                    else {
                        i = g(i);
                        var o = m.cloneRange();
                        o.setStartAfter(j), o.setEndAfter(i);
                        var p = o.extractContents();
                        "LI" === k && c(p, "LI") ? (n = p.firstChild, l.insertAfter(p, i)) : (l.insertAfter(p, i), l.insertAfter(n, i))
                    }
                    l.remove(j), b.moveToCaretPosition(a, n)
                }
            };
        return {
            insert: i
        }
    }), g("7i", ["6p", "46", "1y", "s", "2f", "7k", "7l", "2t", "4b", "1e"], function (a, b, c, d, e, f, g, h, i, j) {
        var k = function (a) {
                return a && "A" === a.nodeName && 0 === j.trim(i.trim(a.innerText || a.textContent)).length
            },
            l = function (a) {
                return a && /^(TD|TH|CAPTION)$/.test(a.nodeName)
            },
            m = function (a) {
                a.innerHTML = '<br data-mce-bogus="1">'
            },
            n = function (a, b) {
                return a.nodeName === b || a.previousSibling && a.previousSibling.nodeName === b
            },
            o = function (a, b) {
                return b && a.isBlock(b) && !/^(TD|TH|CAPTION|FORM)$/.test(b.nodeName) && !/^(fixed|absolute)/i.test(b.style.position) && "true" !== a.getContentEditable(b)
            },
            p = function (a, b, d) {
                var e, f = d,
                    g = [];
                if (f) {
                    for (; f = f.firstChild;) {
                        if (a.isBlock(f)) return;
                        c.isElement(f) && !b[f.nodeName.toLowerCase()] && g.push(f)
                    }
                    for (e = g.length; e--;) f = g[e], !f.hasChildNodes() || f.firstChild === f.lastChild && "" === f.firstChild.nodeValue ? a.remove(f) : k(f) && a.remove(f)
                }
            },
            q = function (a, b, d) {
                return c.isText(b) === !1 ? d : a ? 1 === d && b.data.charAt(d - 1) === i.ZWSP ? 0 : d : d === b.data.length - 1 && b.data.charAt(d) === i.ZWSP ? b.data.length : d
            },
            r = function (a) {
                var b = a.cloneRange();
                return b.setStart(a.startContainer, q(!0, a.startContainer, a.startOffset)), b.setEnd(a.endContainer, q(!1, a.endContainer, a.endOffset)), b
            },
            s = function (a) {
                do c.isText(a) && (a.nodeValue = a.nodeValue.replace(/^[\r\n]+/, "")), a = a.firstChild; while (a)
            },
            t = function (a, b) {
                var c, d, e = a.getRoot();
                for (c = b; c !== e && "false" !== a.getContentEditable(c);) "true" === a.getContentEditable(c) && (d = c), c = c.parentNode;
                return c !== e ? d : e
            },
            u = function (b, c) {
                var d = a.getForcedRootBlock(b);
                d && d.toLowerCase() === c.tagName.toLowerCase() && b.dom.setAttribs(c, a.getForcedRootBlockAttrs(b))
            },
            v = function (a, b, c, d, e) {
                var f, g, h, i, j, k, m = b || "P",
                    n = a.dom,
                    p = t(n, d);
                if (g = n.getParent(d, n.isBlock), !g || !o(n, g)) {
                    if (g = g || p, k = g === a.getBody() || l(g) ? g.nodeName.toLowerCase() : g.parentNode.nodeName.toLowerCase(),
                        !g.hasChildNodes()) return f = n.create(m), u(a, f), g.appendChild(f), c.setStart(f, 0), c.setEnd(f, 0), f;
                    for (i = d; i.parentNode !== g;) i = i.parentNode;
                    for (; i && !n.isBlock(i);) h = i, i = i.previousSibling;
                    if (h && a.schema.isValidChild(k, m.toLowerCase())) {
                        for (f = n.create(m), u(a, f), h.parentNode.insertBefore(f, h), i = h; i && !n.isBlock(i);) j = i.nextSibling, f.appendChild(i), i = j;
                        c.setStart(d, e), c.setEnd(d, e)
                    }
                }
                return d
            },
            w = function (a, b) {
                var c;
                b.normalize(), c = b.lastChild, c && !/^(left|right)$/gi.test(a.getStyle(c, "float", !0)) || a.add(b, "br")
            },
            x = function (i, j) {
                var k, l, x, y, z, A, B, C, D, E, F, G, H, I = i.dom,
                    J = i.schema,
                    K = J.getNonEmptyElements(),
                    L = i.selection.getRng(),
                    M = function (b) {
                        var c, d, f, g = x,
                            h = J.getTextInlineElements();
                        if (b || "TABLE" === E || "HR" === E ? (c = I.create(b || G), u(i, c)) : c = z.cloneNode(!1), f = c, a.shouldKeepStyles(i) === !1) I.setAttrib(c, "style", null), I.setAttrib(c, "class", null);
                        else
                            do
                                if (h[g.nodeName]) {
                                    if (e.isCaretNode(g)) continue;
                                    d = g.cloneNode(!1), I.setAttrib(d, "id", ""), c.hasChildNodes() ? (d.appendChild(c.firstChild), c.appendChild(d)) : (f = d, c.appendChild(d))
                                } while ((g = g.parentNode) && g !== l);
                        return m(f), c
                    },
                    N = function (a) {
                        var b, e, f, g;
                        if (g = q(a, x, y), c.isText(x) && (a ? g > 0 : g < x.nodeValue.length)) return !1;
                        if (x.parentNode === z && H && !a) return !0;
                        if (a && c.isElement(x) && x === z.firstChild) return !0;
                        if (n(x, "TABLE") || n(x, "HR")) return H && !a || !H && a;
                        for (b = new d(x, z), c.isText(x) && (a && 0 === g ? b.prev() : a || g !== x.nodeValue.length || b.next()); e = b.current();) {
                            if (c.isElement(e)) {
                                if (!e.getAttribute("data-mce-bogus") && (f = e.nodeName.toLowerCase(), K[f] && "br" !== f)) return !1
                            } else if (c.isText(e) && !/^[ \t\r\n]*$/.test(e.nodeValue)) return !1;
                            a ? b.prev() : b.next()
                        }
                        return !0
                    },
                    O = function () {
                        B = /^(H[1-6]|PRE|FIGURE)$/.test(E) && "HGROUP" !== F ? M(G) : M(), a.shouldEndContainerOnEmtpyBlock(i) && o(I, D) && I.isEmpty(z) ? B = I.split(D, z) : I.insertAfter(B, z), g.moveToCaretPosition(i, B)
                    };
                if (h.normalize(I, L).each(function (a) {
                        L.setStart(a.startContainer, a.startOffset), L.setEnd(a.endContainer, a.endOffset)
                    }), x = L.startContainer, y = L.startOffset, G = a.getForcedRootBlock(i), A = j.shiftKey, c.isElement(x) && x.hasChildNodes() && (H = y > x.childNodes.length - 1, x = x.childNodes[Math.min(y, x.childNodes.length - 1)] || x, y = H && c.isText(x) ? x.nodeValue.length : 0), l = t(I, x)) return (G && !A || !G && A) && (x = v(i, G, L, x, y)), z = I.getParent(x, I.isBlock), D = z ? I.getParent(z.parentNode, I.isBlock) : null, E = z ? z.nodeName.toUpperCase() : "", F = D ? D.nodeName.toUpperCase() : "", "LI" !== F || j.ctrlKey || (z = D, D = D.parentNode, E = F), /^(LI|DT|DD)$/.test(E) && I.isEmpty(z) ? void f.insert(i, M, D, z, G) : void(G && z === i.getBody() || (G = G || "P", b.isCaretContainerBlock(z) ? (B = b.showCaretContainerBlock(z), I.isEmpty(z) && m(z), g.moveToCaretPosition(i, B)) : N() ? O() : N(!0) ? (B = z.parentNode.insertBefore(M(), z), g.moveToCaretPosition(i, n(z, "HR") ? B : z)) : (k = r(L).cloneRange(), k.setEndAfter(z), C = k.extractContents(), s(C), B = C.firstChild, I.insertAfter(C, z), p(I, K, B), w(I, z), I.isEmpty(z) && m(z), B.normalize(), I.isEmpty(B) ? (I.remove(B), O()) : g.moveToCaretPosition(i, B)), I.setAttrib(B, "id", ""), i.fire("NewBlock", {
                    newBlock: B
                })))
            };
        return {
            insert: x
        }
    }), g("7m", ["1v", "2z", "6p", "7l"], function (a, b, c, d) {
        var e = function (c, e) {
                return d.getParentBlock(c).filter(function (c) {
                    return e.length > 0 && b.is(a.fromDom(c), e)
                }).isSome()
            },
            f = function (a) {
                return e(a, c.getBrNewLineSelector(a))
            },
            g = function (a) {
                return e(a, c.getNoNewLineSelector(a))
            };
        return {
            shouldInsertBr: f,
            shouldBlockNewLine: g
        }
    }), g("7j", ["5n", "1i", "2n", "6p", "7m", "7l", "5o"], function (a, b, c, d, e, f, g) {
        var h = a.generate([{
                br: []
            }, {
                block: []
            }, {
                none: []
            }]),
            i = function (a, b) {
                return e.shouldBlockNewLine(a)
            },
            j = function (a) {
                return function (b, c) {
                    var e = "" === d.getForcedRootBlock(b);
                    return e === a
                }
            },
            k = function (a) {
                return function (b, c) {
                    return f.isListItemParentBlock(b) === a
                }
            },
            l = function (a) {
                return function (b, c) {
                    var d = "PRE" === f.getParentBlockName(b);
                    return d === a
                }
            },
            m = function (a) {
                return function (b, c) {
                    return d.shouldPutBrInPre(b) === a
                }
            },
            n = function (a, b) {
                return e.shouldInsertBr(a)
            },
            o = function (a, b) {
                return b
            },
            p = function (a) {
                var b = d.getForcedRootBlock(a),
                    c = f.getEditableRoot(a.dom, a.selection.getStart());
                return c && a.schema.isValidChild(c.nodeName, b ? b : "P")
            },
            q = function (a, d) {
                return function (e, f) {
                    var g = b.foldl(a, function (a, b) {
                        return a && b(e, f)
                    }, !0);
                    return g ? c.some(d) : c.none()
                }
            },
            r = function (a, b) {
                return g.evaluateUntil([q([i], h.none()), q([l(!0), m(!1), o], h.br()), q([l(!0), m(!1)], h.block()), q([l(!0), m(!0), o], h.block()), q([l(!0), m(!0)], h.br()), q([k(!0), o], h.br()), q([k(!0)], h.block()), q([j(!0), o, p], h.block()), q([j(!0)], h.br()), q([n], h.br()), q([j(!1), o], h.br()), q([p], h.block())], [a, b.shiftKey]).getOr(h.none())
            };
        return {
            getAction: r
        }
    }), g("7b", ["1", "7i", "1z", "7j"], function (a, b, c, d) {
        var e = function (e, f) {
            d.getAction(e, f).fold(function () {
                c.insert(e, f)
            }, function () {
                b.insert(e, f)
            }, a.noop)
        };
        return {
            insert: e
        }
    }), g("72", ["7b", "1g"], function (a, b) {
        var c = function (a) {
                a.typing && (a.typing = !1, a.add())
            },
            d = function (b, d) {
                d.isDefaultPrevented() || (d.preventDefault(), c(b.undoManager), b.undoManager.transact(function () {
                    b.selection.isCollapsed() === !1 && b.execCommand("Delete"), a.insert(b, d)
                }))
            },
            e = function (a) {
                a.on("keydown", function (c) {
                    c.keyCode === b.ENTER && d(a, c)
                })
            };
        return {
            setup: e
        }
    }), g("7c", ["1", "32", "1y", "43", "44"], function (a, b, c, d, e) {
        var f = function (a, b) {
                return j(a) && c.isText(b.container())
            },
            g = function (a, b) {
                var c = b.container(),
                    d = b.offset();
                c.insertData(d, "\xa0"), a.selection.setCursorLocation(c, d + 1)
            },
            h = function (a, b, c) {
                return !!f(c, b) && (g(a, b), !0)
            },
            i = function (c) {
                var f = a.curry(e.isInlineTarget, c),
                    g = b.fromRangeStart(c.selection.getRng()),
                    i = d.readLocation(f, c.getBody(), g);
                return i.map(a.curry(h, c, g)).getOr(!1)
            },
            j = function (b) {
                return b.fold(a.constant(!1), a.constant(!0), a.constant(!0), a.constant(!1))
            },
            k = function (a) {
                return !!a.selection.isCollapsed() && i(a)
            };
        return {
            insertAtSelection: k
        }
    }), g("73", ["7c", "79", "1g"], function (a, b, c) {
        var d = function (d, e) {
                b.execute([{
                    keyCode: c.SPACEBAR,
                    action: b.action(a.insertAtSelection, d)
                }], e).each(function (a) {
                    e.preventDefault()
                })
            },
            e = function (a) {
                a.on("keydown", function (b) {
                    b.isDefaultPrevented() === !1 && d(a, b)
                })
            };
        return {
            setup: e
        }
    }), g("6n", ["70", "5p", "71", "72", "73"], function (a, b, c, d, e) {
        var f = function (f) {
            var g = b.setupSelectedState(f);
            a.setup(f, g), c.setup(f, g), d.setup(f), e.setup(f)
        };
        return {
            setup: f
        }
    }), g("6o", ["1j", "2", "b", "46", "2s", "15", "1e", "1g"], function (a, b, c, d, e, f, g, h) {
        return function (i) {
            var j = g.each,
                k = h.BACKSPACE,
                l = h.DELETE,
                m = i.dom,
                n = i.selection,
                o = i.settings,
                p = i.parser,
                q = c.gecko,
                r = c.ie,
                s = c.webkit,
                t = "data:text/mce-internal,",
                u = r ? "Text" : "URL",
                v = function (a, b) {
                    try {
                        i.getDoc().execCommand(a, !1, b)
                    } catch (a) {}
                },
                w = function (a) {
                    return a.isDefaultPrevented()
                },
                x = function (a) {
                    var b, c;
                    a.dataTransfer && (i.selection.isCollapsed() && "IMG" == a.target.tagName && n.select(a.target), b = i.selection.getContent(), b.length > 0 && (c = t + escape(i.id) + "," + escape(b), a.dataTransfer.setData(u, c)))
                },
                y = function (a) {
                    var b;
                    return a.dataTransfer && (b = a.dataTransfer.getData(u), b && b.indexOf(t) >= 0) ? (b = b.substr(t.length).split(","), {
                        id: unescape(b[0]),
                        html: unescape(b[1])
                    }) : null
                },
                z = function (a, b) {
                    i.queryCommandSupported("mceInsertClipboardContent") ? i.execCommand("mceInsertClipboardContent", !1, {
                        content: a,
                        internal: b
                    }) : i.execCommand("mceInsertContent", !1, a)
                },
                A = function () {
                    var a = function (a) {
                            var b = m.create("body"),
                                c = a.cloneContents();
                            return b.appendChild(c), n.serializer.serialize(b, {
                                format: "html"
                            })
                        },
                        b = function (b) {
                            var c = a(b),
                                d = m.createRng();
                            d.selectNode(i.getBody());
                            var e = a(d);
                            return c === e
                        };
                    i.on("keydown", function (a) {
                        var c, d, e = a.keyCode;
                        if (!w(a) && (e == l || e == k)) {
                            if (c = i.selection.isCollapsed(), d = i.getBody(), c && !m.isEmpty(d)) return;
                            if (!c && !b(i.selection.getRng())) return;
                            a.preventDefault(), i.setContent(""), d.firstChild && m.isBlock(d.firstChild) ? i.selection.setCursorLocation(d.firstChild, 0) : i.selection.setCursorLocation(d, 0), i.nodeChanged()
                        }
                    })
                },
                B = function () {
                    i.shortcuts.add("meta+a", null, "SelectAll")
                },
                C = function () {
                    i.settings.content_editable || m.bind(i.getDoc(), "mousedown mouseup", function (a) {
                        var b;
                        if (a.target == i.getDoc().documentElement)
                            if (b = n.getRng(), i.getBody().focus(), "mousedown" == a.type) {
                                if (d.isCaretContainer(b.startContainer)) return;
                                n.placeCaretAt(a.clientX, a.clientY)
                            } else n.setRng(b)
                    })
                },
                D = function () {
                    i.on("keydown", function (a) {
                        if (!w(a) && a.keyCode === k) {
                            if (!i.getBody().getElementsByTagName("hr").length) return;
                            if (n.isCollapsed() && 0 === n.getRng(!0).startOffset) {
                                var b = n.getNode(),
                                    c = b.previousSibling;
                                if ("HR" == b.nodeName) return m.remove(b), void a.preventDefault();
                                c && c.nodeName && "hr" === c.nodeName.toLowerCase() && (m.remove(c), a.preventDefault())
                            }
                        }
                    })
                },
                E = function () {
                    b.Range.prototype.getClientRects || i.on("mousedown", function (a) {
                        if (!w(a) && "HTML" === a.target.nodeName) {
                            var b = i.getBody();
                            b.blur(), f.setEditorTimeout(i, function () {
                                b.focus()
                            })
                        }
                    })
                },
                F = function () {
                    i.on("click", function (a) {
                        var b = a.target;
                        /^(IMG|HR)$/.test(b.nodeName) && "false" !== m.getContentEditableParent(b) && (a.preventDefault(), i.selection.select(b), i.nodeChanged()), "A" == b.nodeName && m.hasClass(b, "mce-item-anchor") && (a.preventDefault(), n.select(b))
                    })
                },
                G = function () {
                    var a = function () {
                            var a = m.getAttribs(n.getStart().cloneNode(!1));
                            return function () {
                                var b = n.getStart();
                                b !== i.getBody() && (m.setAttrib(b, "style", null), j(a, function (a) {
                                    b.setAttributeNode(a.cloneNode(!0))
                                }))
                            }
                        },
                        b = function () {
                            return !n.isCollapsed() && m.getParent(n.getStart(), m.isBlock) != m.getParent(n.getEnd(), m.isBlock)
                        };
                    i.on("keypress", function (c) {
                        var d;
                        if (!w(c) && (8 == c.keyCode || 46 == c.keyCode) && b()) return d = a(), i.getDoc().execCommand("delete", !1, null), d(), c.preventDefault(), !1
                    }), m.bind(i.getDoc(), "cut", function (c) {
                        var d;
                        !w(c) && b() && (d = a(), f.setEditorTimeout(i, function () {
                            d()
                        }))
                    })
                },
                H = function () {
                    i.on("keydown", function (a) {
                        if (!w(a) && a.keyCode === k && n.isCollapsed() && 0 === n.getRng(!0).startOffset) {
                            var b = n.getNode().previousSibling;
                            if (b && b.nodeName && "table" === b.nodeName.toLowerCase()) return a.preventDefault(), !1
                        }
                    })
                },
                I = function () {
                    i.on("keydown", function (a) {
                        var b, c, d, e, f;
                        if (!w(a) && a.keyCode == h.BACKSPACE && (b = n.getRng(), c = b.startContainer, d = b.startOffset, e = m.getRoot(), f = c, b.collapsed && 0 === d)) {
                            for (; f && f.parentNode && f.parentNode.firstChild == f && f.parentNode != e;) f = f.parentNode;
                            "BLOCKQUOTE" === f.tagName && (i.formatter.toggle("blockquote", null, f), b = m.createRng(), b.setStart(c, 0), b.setEnd(c, 0), n.setRng(b))
                        }
                    })
                },
                J = function () {
                    var a = function () {
                        W(), v("StyleWithCSS", !1), v("enableInlineTableEditing", !1), o.object_resizing || v("enableObjectResizing", !1)
                    };
                    o.readonly || i.on("BeforeExecCommand MouseDown", a)
                },
                K = function () {
                    var a = function () {
                        j(m.select("a"), function (a) {
                            var b = a.parentNode,
                                c = m.getRoot();
                            if (b.lastChild === a) {
                                for (; b && !m.isBlock(b);) {
                                    if (b.parentNode.lastChild !== b || b === c) return;
                                    b = b.parentNode
                                }
                                m.add(b, "br", {
                                    "data-mce-bogus": 1
                                })
                            }
                        })
                    };
                    i.on("SetContent ExecCommand", function (b) {
                        "setcontent" != b.type && "mceInsertLink" !== b.command || a()
                    })
                },
                L = function () {
                    o.forced_root_block && i.on("init", function () {
                        v("DefaultParagraphSeparator", o.forced_root_block)
                    })
                },
                M = function () {
                    i.on("keyup focusin mouseup", function (a) {
                        h.modifierPressed(a) || n.normalize()
                    }, !0)
                },
                N = function () {
                    i.contentStyles.push("img:-moz-broken {-moz-force-broken-image-icon:1;min-width:24px;min-height:24px}")
                },
                O = function () {
                    i.inline || i.on("keydown", function () {
                        a.activeElement == a.body && i.getWin().focus()
                    })
                },
                P = function () {
                    i.inline || (i.contentStyles.push("body {min-height: 150px}"), i.on("click", function (a) {
                        var b;
                        if ("HTML" == a.target.nodeName) {
                            if (c.ie > 11) return void i.getBody().focus();
                            b = i.selection.getRng(), i.getBody().focus(), i.selection.setRng(b), i.selection.normalize(), i.nodeChanged()
                        }
                    }))
                },
                Q = function () {
                    c.mac && i.on("keydown", function (a) {
                        !h.metaKeyPressed(a) || a.shiftKey || 37 != a.keyCode && 39 != a.keyCode || (a.preventDefault(), i.selection.getSel().modify("move", 37 == a.keyCode ? "backward" : "forward", "lineboundary"))
                    })
                },
                R = function () {
                    v("AutoUrlDetect", !1)
                },
                S = function () {
                    i.on("click", function (a) {
                        var b = a.target;
                        do
                            if ("A" === b.tagName) return void a.preventDefault(); while (b = b.parentNode)
                    }), i.contentStyles.push(".mce-content-body {-webkit-touch-callout: none}")
                },
                T = function () {
                    i.on("init", function () {
                        i.dom.bind(i.getBody(), "submit", function (a) {
                            a.preventDefault()
                        })
                    })
                },
                U = function () {
                    p.addNodeFilter("br", function (a) {
                        for (var b = a.length; b--;) "Apple-interchange-newline" == a[b].attr("class") && a[b].remove()
                    })
                },
                V = function () {
                    i.on("dragstart", function (a) {
                        x(a)
                    }), i.on("drop", function (a) {
                        if (!w(a)) {
                            var b = y(a);
                            if (b && b.id != i.id) {
                                a.preventDefault();
                                var c = e.fromPoint(a.x, a.y, i.getDoc());
                                n.setRng(c), z(b.html, !0)
                            }
                        }
                    })
                },
                W = function () {},
                X = function () {
                    var a;
                    return !q || i.removed ? 0 : (a = i.selection.getSel(), !a || !a.rangeCount || 0 === a.rangeCount)
                };
            return I(), A(), c.windowsPhone || M(), s && (C(), F(), L(), T(), H(), U(), c.iOS ? (O(), P(), S()) : B()), c.ie >= 11 && (P(), H()), c.ie && (B(), R(), V()), q && (D(), E(), G(), J(), K(), N(), Q(), H()), {
                refreshContentEditable: W,
                isHidden: X
            }
        }
    }), g("5w", ["41", "1v", "48", "1j", "2", "6i", "6j", "6k", "6l", "d", "f", "k", "6m", "m", "q", "u", "w", "y", "6n", "15", "6o", "1e"], function (a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u, v) {
        var w = n.DOM,
            x = function (d, e) {
                var f = b.fromDom(d.getDoc().head),
                    g = b.fromTag("style");
                c.set(g, "type", "text/css"), a.append(g, b.fromText(e)), a.append(f, g)
            },
            y = function (a) {
                var b = new p(a.settings, a.schema);
                return b.addAttributeFilter("src,href,style,tabindex", function (b, c) {
                    for (var d, e, f, g = b.length, h = a.dom; g--;)
                        if (d = b[g], e = d.attr(c), f = "data-mce-" + c, !d.attributes.map[f]) {
                            if (0 === e.indexOf("data:") || 0 === e.indexOf("blob:")) continue;
                            "style" === c ? (e = h.serializeStyle(h.parseStyle(e), d.name), e.length || (e = null), d.attr(f, e), d.attr(c, e)) : "tabindex" === c ? (d.attr(f, e), d.attr(c, null)) : d.attr(f, a.convertURL(e, c, d.name))
                        }
                }), b.addNodeFilter("script", function (a) {
                    for (var b, c, d = a.length; d--;) b = a[d], c = b.attr("type") || "no/type", 0 !== c.indexOf("mce-") && b.attr("type", "mce-" + c)
                }), b.addNodeFilter("#cdata", function (a) {
                    for (var b, c = a.length; c--;) b = a[c], b.type = 8, b.name = "#comment", b.value = "[CDATA[" + b.value + "]]"
                }), b.addNodeFilter("p,h1,h2,h3,h4,h5,h6,div", function (b) {
                    for (var c, d = b.length, e = a.schema.getNonEmptyElements(); d--;) c = b[d], c.isEmpty(e) && 0 === c.getAll("br").length && (c.append(new q("br", 1)).shortEnded = !0)
                }), b
            },
            z = function (a) {
                a.settings.auto_focus && t.setEditorTimeout(a, function () {
                    var b;
                    b = a.settings.auto_focus === !0 ? a : a.editorManager.get(a.settings.auto_focus), b.destroyed || b.focus()
                }, 100)
            },
            A = function (a) {
                a.bindPendingEventDelegates(), a.initialized = !0, a.fire("init"), a.focus(!0), a.nodeChanged({
                    initial: !0
                }), a.execCallback("init_instance_callback", a), z(a)
            },
            B = function (a) {
                return a.inline ? w.styleSheetLoader : a.dom.styleSheetLoader
            },
            C = function (a, b) {
                var c, p, q = a.settings,
                    t = a.getElement(),
                    z = a.getDoc();
                q.inline || (a.getElement().style.visibility = a.orgVisibility), b || q.content_editable || (z.open(), z.write(a.iframeHTML), z.close()), q.content_editable && (a.on("remove", function () {
                    var a = this.getBody();
                    w.removeClass(a, "mce-content-body"), w.removeClass(a, "mce-edit-focus"), w.setAttrib(a, "contentEditable", null)
                }), w.addClass(t, "mce-content-body"), a.contentDocument = z = q.content_document || d, a.contentWindow = q.content_window || e, a.bodyElement = t, q.content_document = q.content_window = null, q.root_name = t.nodeName.toLowerCase()), c = a.getBody(), c.disabled = !0, a.readonly = q.readonly, a.readonly || (a.inline && "static" === w.getStyle(c, "position", !0) && (c.style.position = "relative"), c.contentEditable = a.getParam("content_editable_state", !0)), c.disabled = !1, a.editorUpload = new f(a), a.schema = new r(q), a.dom = new n(z, {
                    keep_values: !0,
                    url_converter: a.convertURL,
                    url_converter_scope: a,
                    hex_colors: q.force_hex_style_colors,
                    class_filter: q.class_filter,
                    update_styles: !0,
                    root_element: a.inline ? a.getBody() : null,
                    collect: q.content_editable,
                    schema: a.schema,
                    onSetAttrib: function (b) {
                        a.fire("SetAttrib", b)
                    }
                }), a.parser = y(a), a.serializer = new l(q, a), a.selection = new o(a.dom, a.getWin(), a.serializer, a), a.formatter = new k(a), a.undoManager = new j(a), a._nodeChangeDispatcher = new h(a), a._selectionOverrides = new i(a), m.setup(a), s.setup(a), g.setup(a), a.fire("PreInit"), q.browser_spellcheck || q.gecko_spellcheck || (z.body.spellcheck = !1, w.setAttrib(c, "spellcheck", "false")), a.quirks = new u(a), a.fire("PostRender"), q.directionality && (c.dir = q.directionality), q.nowrap && (c.style.whiteSpace = "nowrap"), q.protect && a.on("BeforeSetContent", function (a) {
                    v.each(q.protect, function (b) {
                        a.content = a.content.replace(b, function (a) {
                            return "<!--mce:protected " + escape(a) + "-->"
                        })
                    })
                }), a.on("SetContent", function () {
                    a.addVisual(a.getBody())
                }), q.padd_empty_editor && a.on("PostProcess", function (a) {
                    a.content = a.content.replace(/^(<p[^>]*>(&nbsp;|&#160;|\s|\u00a0|<br \/>|)<\/p>[\r\n]*|<br \/>[\r\n]*)$/, "")
                }), a.load({
                    initial: !0,
                    format: "html"
                }), a.startContent = a.getContent({
                    format: "raw"
                }), a.on("compositionstart compositionend", function (b) {
                    a.composing = "compositionstart" === b.type
                }), a.contentStyles.length > 0 && (p = "", v.each(a.contentStyles, function (a) {
                    p += a + "\r\n"
                }), a.dom.addStyle(p)), B(a).loadAll(a.contentCSS, function (b) {
                    A(a)
                }, function (b) {
                    A(a)
                }), q.content_style && x(a, q.content_style)
            };
        return {
            initContentBody: C
        }
    }), g("5x", ["1v", "48", "3g", "1j", "2", "b", "6p", "m", "5w", "27"], function (a, b, c, d, e, f, g, h, i, j) {
        var k = h.DOM,
            l = function (a, b) {
                if (d.domain !== e.location.hostname && f.ie && f.ie < 12) {
                    var c = j.uuid("mce");
                    a[c] = function () {
                        i.initContentBody(a)
                    };
                    var g = 'javascript:(function(){document.open();document.domain="' + d.domain + '";var ed = window.parent.tinymce.get("' + a.id + '");document.write(ed.iframeHTML);document.close();ed.' + c + "(true);})()";
                    return k.setAttrib(b, "src", g), !0
                }
                return !1
            },
            m = function (a) {
                var b = "number" == typeof a ? a + "px" : a;
                return b ? b : ""
            },
            n = function (d, e, f, g) {
                var h = a.fromTag("iframe");
                return b.setAll(h, g), b.setAll(h, {
                    id: d + "_ifr",
                    frameBorder: "0",
                    allowTransparency: "true",
                    title: e
                }), c.setAll(h, {
                    width: "100%",
                    height: m(f),
                    display: "block"
                }), h
            },
            o = function (a) {
                var b, c, d;
                return d = g.getDocType(a) + "<html><head>", g.getDocumentBaseUrl(a) !== a.documentBaseUrl && (d += '<base href="' + a.documentBaseURI.getURI() + '" />'), d += '<meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />', b = g.getBodyId(a), c = g.getBodyClass(a), g.getContentSecurityPolicy(a) && (d += '<meta http-equiv="Content-Security-Policy" content="' + g.getContentSecurityPolicy(a) + '" />'), d += '</head><body id="' + b + '" class="mce-content-body ' + c + '" data-id="' + a.id + '"><br></body></html>'
            },
            p = function (a, b) {
                var c = a.editorManager.translate("Rich Text Area. Press ALT-F9 for menu. Press ALT-F10 for toolbar. Press ALT-0 for help"),
                    d = n(a.id, c, b.height, g.getIframeAttrs(a)).dom();
                d.onload = function () {
                    d.onload = null, a.fire("load")
                };
                var e = l(a, d);
                return a.contentAreaContainer = b.iframeContainer, a.iframeElement = d, a.iframeHTML = o(a), k.add(b.iframeContainer, d), e
            },
            q = function (a, b) {
                var c = p(a, b);
                b.editorContainer && (k.get(b.editorContainer).style.display = a.orgDisplay, a.hidden = k.isHidden(b.editorContainer)), a.getElement().style.display = "none", k.setAttrib(a.id, "aria-hidden", !0), c || i.initContentBody(a)
            };
        return {
            init: q
        }
    }), g("4j", ["28", "1j", "2", "4k", "4l", "m", "5w", "5x", "1e"], function (a, b, c, d, e, f, g, h, i) {
        var j = f.DOM,
            k = function (a, b, c) {
                var e, f, g = d.get(c);
                if (e = d.urls[c] || a.documentBaseUrl.replace(/\/$/, ""), c = i.trim(c), g && i.inArray(b, c) === -1) {
                    if (i.each(d.dependencies(c), function (c) {
                            k(a, b, c)
                        }), a.plugins[c]) return;
                    f = new g(a, e, a.$), a.plugins[c] = f, f.init && (f.init(a, e), b.push(c))
                }
            },
            l = function (a) {
                return a.replace(/^\-/, "")
            },
            m = function (a) {
                var b = [];
                i.each(a.settings.plugins.split(/[ ,]/), function (c) {
                    k(a, b, l(c))
                })
            },
            n = function (b) {
                var c, d = b.settings.theme;
                a.isString(d) ? (b.settings.theme = l(d), c = e.get(d), b.theme = new c(b, e.urls[d]), b.theme.init && b.theme.init(b, e.urls[d] || b.documentBaseUrl.replace(/\/$/, ""), b.$)) : b.theme = {}
            },
            o = function (a) {
                var b, c, d, e, f, g = a.settings,
                    h = a.getElement();
                return b = g.width || j.getStyle(h, "width") || "100%", c = g.height || j.getStyle(h, "height") || h.offsetHeight, d = g.min_height || 100, e = /^[0-9\.]+(|px)$/i, e.test("" + b) && (b = Math.max(parseInt(b, 10), 100)), e.test("" + c) && (c = Math.max(parseInt(c, 10), d)), f = a.theme.renderUI({
                    targetNode: h,
                    width: b,
                    height: c,
                    deltaWidth: g.delta_width,
                    deltaHeight: g.delta_height
                }), g.content_editable || (c = (f.iframeHeight || c) + ("number" == typeof c ? f.deltaHeight || 0 : ""), c < d && (c = d)), f.height = c, f
            },
            p = function (a) {
                var b, c = a.getElement();
                return b = a.settings.theme(a, c), b.editorContainer.nodeType && (b.editorContainer.id = b.editorContainer.id || a.id + "_parent"), b.iframeContainer && b.iframeContainer.nodeType && (b.iframeContainer.id = b.iframeContainer.id || a.id + "_iframecontainer"), b.height = b.iframeHeight ? b.iframeHeight : c.offsetHeight, b
            },
            q = function (a) {
                return {
                    editorContainer: a,
                    iframeContainer: a
                }
            },
            r = function (a) {
                var b = j.create("div");
                return j.insertAfter(b, a), q(b)
            },
            s = function (a) {
                var b = a.getElement();
                return a.inline ? q(null) : r(b)
            },
            t = function (b) {
                var c = b.settings,
                    d = b.getElement();
                return b.orgDisplay = d.style.display, a.isString(c.theme) ? o(b) : a.isFunction(c.theme) ? p(b) : s(b)
            },
            u = function (a) {
                var b, c = a.settings,
                    d = a.getElement();
                return a.rtl = c.rtl_ui || a.editorManager.i18n.rtl, a.editorManager.i18n.setCode(c.language), c.aria_label = c.aria_label || j.getAttrib(d, "aria-label", a.getLang("aria.rich_text_area")), a.fire("ScriptsLoaded"), n(a), m(a), b = t(a), a.editorContainer = b.editorContainer ? b.editorContainer : null, c.content_css && i.each(i.explode(c.content_css), function (b) {
                    a.contentCSS.push(a.documentBaseURI.toAbsolute(b))
                }), c.content_editable ? g.initContentBody(a) : h.init(a, b)
            };
        return {
            init: u
        }
    }), g("25", ["28", "2", "g", "h", "m", "o", "p", "b", "29", "4j", "4k", "4l", "1e"], function (a, b, c, d, e, f, g, h, i, j, k, l, m) {
        var n = e.DOM,
            o = function (a) {
                return "-" === a.charAt(0)
            },
            p = function (a, b) {
                var c = b.settings;
                c.language && "en" !== c.language && !c.language_url && (c.language_url = b.editorManager.baseURL + "/langs/" + c.language + ".js"), c.language_url && !b.editorManager.i18n.data[c.language] && a.add(c.language_url)
            },
            q = function (b, c, d, e) {
                var f = c.settings,
                    g = f.theme;
                if (a.isString(g)) {
                    if (!o(g) && !l.urls.hasOwnProperty(g)) {
                        var h = f.theme_url;
                        h ? l.load(g, c.documentBaseURI.toAbsolute(h)) : l.load(g, "themes/" + g + "/theme" + d + ".js")
                    }
                    b.loadQueue(function () {
                        l.waitFor(g, e)
                    })
                } else e()
            },
            r = function (a, b) {
                m.isArray(a.plugins) && (a.plugins = a.plugins.join(" ")), m.each(a.external_plugins, function (b, c) {
                    k.load(c, b), a.plugins += " " + c
                }), m.each(a.plugins.split(/[ ,]/), function (a) {
                    if (a = m.trim(a), a && !k.urls[a])
                        if (o(a)) {
                            a = a.substr(1, a.length);
                            var c = k.dependencies(a);
                            m.each(c, function (a) {
                                var c = {
                                    prefix: "plugins/",
                                    resource: a,
                                    suffix: "/plugin" + b + ".js"
                                };
                                a = k.createUrl(c, a), k.load(a.resource, a)
                            })
                        } else k.load(a, {
                            prefix: "plugins/",
                            resource: a,
                            suffix: "/plugin" + b + ".js"
                        })
                })
            },
            s = function (a, b) {
                var c = g.ScriptLoader;
                q(c, a, b, function () {
                    p(c, a), r(a.settings, b), c.loadQueue(function () {
                        a.removed || j.init(a)
                    }, a, function (b) {
                        i.pluginLoadError(a, b[0]), a.removed || j.init(a)
                    })
                })
            },
            t = function (a) {
                var e = a.settings,
                    g = a.id,
                    i = function () {
                        n.unbind(b, "ready", i), a.render()
                    };
                if (!f.Event.domLoaded) return void n.bind(b, "ready", i);
                if (a.getElement() && h.contentEditable) {
                    e.inline ? a.inline = !0 : (a.orgVisibility = a.getElement().style.visibility, a.getElement().style.visibility = "hidden");
                    var j = a.getElement().form || n.getParent(g, "form");
                    j && (a.formElement = j, e.hidden_input && !/TEXTAREA|INPUT/i.test(a.getElement().nodeName) && (n.insertAfter(n.create("input", {
                        type: "hidden",
                        name: g
                    }), g), a.hasHiddenInput = !0), a.formEventDelegate = function (b) {
                        a.fire(b.type, b)
                    }, n.bind(j, "submit reset", a.formEventDelegate), a.on("reset", function () {
                        a.setContent(a.startContent, {
                            format: "raw"
                        })
                    }), !e.submit_patch || j.submit.nodeType || j.submit.length || j._mceOldSubmit || (j._mceOldSubmit = j.submit, j.submit = function () {
                        return a.editorManager.triggerSave(), a.setDirty(!1), j._mceOldSubmit(j)
                    })), a.windowManager = new d(a), a.notificationManager = new c(a), "xml" === e.encoding && a.on("GetContent", function (a) {
                        a.save && (a.content = n.encode(a.content))
                    }), e.add_form_submit_trigger && a.on("submit", function () {
                        a.initialized && a.save()
                    }), e.add_unload_trigger && (a._beforeUnload = function () {
                        !a.initialized || a.destroyed || a.isHidden() || a.save({
                            format: "raw",
                            no_events: !0,
                            set_dirty: !1
                        })
                    }, a.editorManager.on("BeforeUnload", a._beforeUnload)), a.editorManager.add(a), s(a, a.suffix)
                }
            };
        return {
            render: t
        }
    }), g("26", [], function () {
        var a = function (a, b, c) {
            var d = a.sidebars ? a.sidebars : [];
            d.push({
                name: b,
                settings: c
            }), a.sidebars = d
        };
        return {
            add: a
        }
    }), g("1f", ["1j", "1e"], function (a, b) {
        var c = b.each,
            d = b.trim,
            e = "source protocol authority userInfo user password host port relative path directory file query anchor".split(" "),
            f = {
                ftp: 21,
                http: 80,
                https: 443,
                mailto: 25
            },
            g = function (b, f) {
                var h, i, j = this;
                if (b = d(b), f = j.settings = f || {}, h = f.base_uri, /^([\w\-]+):([^\/]{2})/i.test(b) || /^\s*#/.test(b)) return void(j.source = b);
                var k = 0 === b.indexOf("//");
                0 !== b.indexOf("/") || k || (b = (h ? h.protocol || "http" : "http") + "://mce_host" + b), /^[\w\-]*:?\/\//.test(b) || (i = f.base_uri ? f.base_uri.path : new g(a.location.href).directory, "" === f.base_uri.protocol ? b = "//mce_host" + j.toAbsPath(i, b) : (b = /([^#?]*)([#?]?.*)/.exec(b), b = (h && h.protocol || "http") + "://mce_host" + j.toAbsPath(i, b[1]) + b[2])), b = b.replace(/@@/g, "(mce_at)"), b = /^(?:(?![^:@]+:[^:@\/]*@)([^:\/?#.]+):)?(?:\/\/)?((?:(([^:@\/]*):?([^:@\/]*))?@)?([^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/.exec(b), c(e, function (a, c) {
                    var d = b[c];
                    d && (d = d.replace(/\(mce_at\)/g, "@@")), j[a] = d
                }), h && (j.protocol || (j.protocol = h.protocol), j.userInfo || (j.userInfo = h.userInfo), j.port || "mce_host" !== j.host || (j.port = h.port), j.host && "mce_host" !== j.host || (j.host = h.host), j.source = ""), k && (j.protocol = "")
            };
        return g.prototype = {
            setPath: function (a) {
                var b = this;
                a = /^(.*?)\/?(\w+)?$/.exec(a), b.path = a[0], b.directory = a[1], b.file = a[2], b.source = "", b.getURI()
            },
            toRelative: function (a) {
                var b, c = this;
                if ("./" === a) return a;
                if (a = new g(a, {
                        base_uri: c
                    }), "mce_host" != a.host && c.host != a.host && a.host || c.port != a.port || c.protocol != a.protocol && "" !== a.protocol) return a.getURI();
                var d = c.getURI(),
                    e = a.getURI();
                return d == e || "/" == d.charAt(d.length - 1) && d.substr(0, d.length - 1) == e ? d : (b = c.toRelPath(c.path, a.path), a.query && (b += "?" + a.query), a.anchor && (b += "#" + a.anchor), b)
            },
            toAbsolute: function (a, b) {
                return a = new g(a, {
                    base_uri: this
                }), a.getURI(b && this.isSameOrigin(a))
            },
            isSameOrigin: function (a) {
                if (this.host == a.host && this.protocol == a.protocol) {
                    if (this.port == a.port) return !0;
                    var b = f[this.protocol];
                    if (b && (this.port || b) == (a.port || b)) return !0
                }
                return !1
            },
            toRelPath: function (a, b) {
                var c, d, e, f = 0,
                    g = "";
                if (a = a.substring(0, a.lastIndexOf("/")), a = a.split("/"), c = b.split("/"), a.length >= c.length)
                    for (d = 0, e = a.length; d < e; d++)
                        if (d >= c.length || a[d] != c[d]) {
                            f = d + 1;
                            break
                        } if (a.length < c.length)
                    for (d = 0, e = c.length; d < e; d++)
                        if (d >= a.length || a[d] != c[d]) {
                            f = d + 1;
                            break
                        } if (1 === f) return b;
                for (d = 0, e = a.length - (f - 1); d < e; d++) g += "../";
                for (d = f - 1, e = c.length; d < e; d++) g += d != f - 1 ? "/" + c[d] : c[d];
                return g
            },
            toAbsPath: function (a, b) {
                var d, e, f, g = 0,
                    h = [];
                for (e = /\/$/.test(b) ? "/" : "", a = a.split("/"), b = b.split("/"), c(a, function (a) {
                        a && h.push(a)
                    }), a = h, d = b.length - 1, h = []; d >= 0; d--) 0 !== b[d].length && "." !== b[d] && (".." !== b[d] ? g > 0 ? g-- : h.push(b[d]) : g++);
                return d = a.length - g, f = d <= 0 ? h.reverse().join("/") : a.slice(0, d).join("/") + "/" + h.reverse().join("/"), 0 !== f.indexOf("/") && (f = "/" + f), e && f.lastIndexOf("/") !== f.length - 1 && (f += e), f
            },
            getURI: function (a) {
                var b, c = this;
                return c.source && !a || (b = "", a || (b += c.protocol ? c.protocol + "://" : "//", c.userInfo && (b += c.userInfo + "@"), c.host && (b += c.host), c.port && (b += ":" + c.port)), c.path && (b += c.path), c.query && (b += "?" + c.query), c.anchor && (b += "#" + c.anchor), c.source = b), c.source
            }
        }, g.parseDataUri = function (a) {
            var b, c;
            return a = decodeURIComponent(a).split(","), c = /data:([^;]+)/.exec(a[0]), c && (b = c[1]), {
                type: b,
                data: a[1]
            }
        }, g.getDocumentBaseUrl = function (a) {
            var b;
            return b = 0 !== a.protocol.indexOf("http") && "file:" !== a.protocol ? a.href : a.protocol + "//" + a.host + a.pathname, /^[^:]+:\/\/\/?[^\/]+\//.test(b) && (b = b.replace(/[\?#].*$/, "").replace(/[\/\\][^\/]+$/, ""), /[\/\\]$/.test(b) || (b += "/")), b
        }, g
    }), g("7", ["6", "8", "a", "21", "b", "22", "c", "m", "n", "23", "24", "z", "25", "26", "1e", "1f", "27"], function (a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q) {
        var r = h.DOM,
            s = o.extend,
            t = o.each,
            u = o.trim,
            v = o.resolve,
            w = e.ie,
            x = function (c, f, h) {
                var j, k, l = this;
                j = l.documentBaseUrl = h.documentBaseURL, k = h.baseURI, f = d.getEditorSettings(l, c, j, h.defaultSettings, f), l.settings = f, a.language = f.language || "en", a.languageLoad = f.language_load, a.baseURL = h.baseURL, l.id = c, l.setDirty(!1), l.plugins = {}, l.documentBaseURI = new p(f.document_base_url, {
                    base_uri: k
                }), l.baseURI = k, l.contentCSS = [], l.contentStyles = [], l.shortcuts = new g(l), l.loadedCSS = {}, l.editorCommands = new b(l), l.suffix = h.suffix, l.editorManager = h, l.inline = f.inline, l.buttons = {}, l.menuItems = {}, f.cache_suffix && (e.cacheSuffix = f.cache_suffix.replace(/^[\?\&]+/, "")), f.override_viewport === !1 && (e.overrideViewPort = !1), h.fire("SetupEditor", l), l.execCallback("setup", l), l.$ = i.overrideDefaults(function () {
                    return {
                        context: l.inline ? l.getBody() : l.getDoc(),
                        element: l.getBody()
                    }
                })
            };
        return x.prototype = {
            render: function () {
                m.render(this)
            },
            focus: function (a) {
                k.focus(this, a)
            },
            execCallback: function (a) {
                var b, c = this,
                    d = c.settings[a];
                if (d) return c.callbackLookup && (b = c.callbackLookup[a]) && (d = b.func, b = b.scope), "string" == typeof d && (b = d.replace(/\.\w+$/, ""), b = b ? v(b) : 0, d = v(d), c.callbackLookup = c.callbackLookup || {}, c.callbackLookup[a] = {
                    func: d,
                    scope: b
                }), d.apply(b || c, Array.prototype.slice.call(arguments, 1))
            },
            translate: function (a) {
                if (a && o.is(a, "string")) {
                    var b = this.settings.language || "en",
                        c = this.editorManager.i18n;
                    a = c.data[b + "." + a] || a.replace(/\{\#([^\}]+)\}/g, function (a, d) {
                        return c.data[b + "." + d] || "{#" + d + "}"
                    })
                }
                return this.editorManager.translate(a)
            },
            getLang: function (a, b) {
                return this.editorManager.i18n.data[(this.settings.language || "en") + "." + a] || (void 0 !== b ? b : "{#" + a + "}")
            },
            getParam: function (a, b, c) {
                var d, e = a in this.settings ? this.settings[a] : b;
                return "hash" === c ? (d = {}, "string" == typeof e ? t(e.indexOf("=") > 0 ? e.split(/[;,](?![^=;,]*(?:[;,]|$))/) : e.split(","), function (a) {
                    a = a.split("="), a.length > 1 ? d[u(a[0])] = u(a[1]) : d[u(a[0])] = u(a)
                }) : d = e, d) : e
            },
            nodeChanged: function (a) {
                this._nodeChangeDispatcher.nodeChanged(a)
            },
            addButton: function (a, b) {
                var c = this;
                b.cmd && (b.onclick = function () {
                    c.execCommand(b.cmd)
                }), b.stateSelector && "undefined" == typeof b.active && (b.active = !1), b.text || b.icon || (b.icon = a), c.buttons = c.buttons, b.tooltip = b.tooltip || b.title, c.buttons[a] = b
            },
            addSidebar: function (a, b) {
                return n.add(this, a, b)
            },
            addMenuItem: function (a, b) {
                var c = this;
                b.cmd && (b.onclick = function () {
                    c.execCommand(b.cmd)
                }), c.menuItems = c.menuItems, c.menuItems[a] = b
            },
            addContextToolbar: function (a, b) {
                var c, d = this;
                d.contextToolbars = d.contextToolbars || [], "string" == typeof a && (c = a, a = function (a) {
                    return d.dom.is(a, c)
                }), d.contextToolbars.push({
                    id: q.uuid("mcet"),
                    predicate: a,
                    items: b
                })
            },
            addCommand: function (a, b, c) {
                this.editorCommands.addCommand(a, b, c)
            },
            addQueryStateHandler: function (a, b, c) {
                this.editorCommands.addQueryStateHandler(a, b, c)
            },
            addQueryValueHandler: function (a, b, c) {
                this.editorCommands.addQueryValueHandler(a, b, c)
            },
            addShortcut: function (a, b, c, d) {
                this.shortcuts.add(a, b, c, d)
            },
            execCommand: function (a, b, c, d) {
                return this.editorCommands.execCommand(a, b, c, d)
            },
            queryCommandState: function (a) {
                return this.editorCommands.queryCommandState(a)
            },
            queryCommandValue: function (a) {
                return this.editorCommands.queryCommandValue(a)
            },
            queryCommandSupported: function (a) {
                return this.editorCommands.queryCommandSupported(a)
            },
            show: function () {
                var a = this;
                a.hidden && (a.hidden = !1, a.inline ? a.getBody().contentEditable = !0 : (r.show(a.getContainer()), r.hide(a.id)), a.load(), a.fire("show"))
            },
            hide: function () {
                var a = this,
                    b = a.getDoc();
                a.hidden || (w && b && !a.inline && b.execCommand("SelectAll"), a.save(), a.inline ? (a.getBody().contentEditable = !1, a == a.editorManager.focusedEditor && (a.editorManager.focusedEditor = null)) : (r.hide(a.getContainer()), r.setStyle(a.id, "display", a.orgDisplay)), a.hidden = !0, a.fire("hide"))
            },
            isHidden: function () {
                return !!this.hidden
            },
            setProgressState: function (a, b) {
                this.fire("ProgressState", {
                    state: a,
                    time: b
                })
            },
            load: function (a) {
                var b, c = this,
                    d = c.getElement();
                return c.removed ? "" : d ? (a = a || {}, a.load = !0, b = c.setContent(void 0 !== d.value ? d.value : d.innerHTML, a), a.element = d, a.no_events || c.fire("LoadContent", a), a.element = d = null, b) : void 0
            },
            save: function (a) {
                var b, c, d = this,
                    e = d.getElement();
                if (e && d.initialized && !d.removed) return a = a || {}, a.save = !0, a.element = e, b = a.content = d.getContent(a), a.no_events || d.fire("SaveContent", a), "raw" == a.format && d.fire("RawSaveContent", a), b = a.content, /TEXTAREA|INPUT/i.test(e.nodeName) ? e.value = b : (d.inline || (e.innerHTML = b), (c = r.getParent(d.id, "form")) && t(c.elements, function (a) {
                    if (a.name == d.id) return a.value = b, !1
                })), a.element = e = null, a.set_dirty !== !1 && d.setDirty(!1), b
            },
            setContent: function (a, b) {
                var c, d, e = this,
                    f = e.getBody();
                return b = b || {}, b.format = b.format || "html", b.set = !0, b.content = a, b.no_events || e.fire("BeforeSetContent", b), a = b.content, 0 === a.length || /^\s+$/.test(a) ? (d = w && w < 11 ? "" : '<br data-mce-bogus="1">', "TABLE" == f.nodeName ? a = "<tr><td>" + d + "</td></tr>" : /^(UL|OL)$/.test(f.nodeName) && (a = "<li>" + d + "</li>"), c = e.settings.forced_root_block, c && e.schema.isValidChild(f.nodeName.toLowerCase(), c.toLowerCase()) ? (a = d, a = e.dom.createHTML(c, e.settings.forced_root_block_attrs, a)) : w || a || (a = '<br data-mce-bogus="1">'),
                    e.dom.setHTML(f, a), e.fire("SetContent", b)) : ("raw" !== b.format && (a = new l({
                    validate: e.validate
                }, e.schema).serialize(e.parser.parse(a, {
                    isRootContent: !0,
                    insert: !0
                }))), b.content = u(a), e.dom.setHTML(f, b.content), b.no_events || e.fire("SetContent", b)), b.content
            },
            getContent: function (a) {
                var b, c = this,
                    d = c.getBody();
                if (c.removed) return "";
                if (a = a || {}, a.format = a.format || "html", a.get = !0, a.getInner = !0, a.no_events || c.fire("BeforeGetContent", a), "raw" === a.format) b = o.trim(j.trimExternal(c.serializer, d.innerHTML));
                else if ("text" === a.format) b = d.innerText || d.textContent;
                else {
                    if ("tree" === a.format) return c.serializer.serialize(d, a);
                    b = c.serializer.serialize(d, a)
                }
                return "text" !== a.format ? a.content = u(b) : a.content = b, a.no_events || c.fire("GetContent", a), a.content
            },
            insertContent: function (a, b) {
                b && (a = s({
                    content: a
                }, b)), this.execCommand("mceInsertContent", !1, a)
            },
            isDirty: function () {
                return !this.isNotDirty
            },
            setDirty: function (a) {
                var b = !this.isNotDirty;
                this.isNotDirty = !a, a && a != b && this.fire("dirty")
            },
            setMode: function (a) {
                f.setMode(this, a)
            },
            getContainer: function () {
                var a = this;
                return a.container || (a.container = r.get(a.editorContainer || a.id + "_parent")), a.container
            },
            getContentAreaContainer: function () {
                return this.contentAreaContainer
            },
            getElement: function () {
                return this.targetElm || (this.targetElm = r.get(this.id)), this.targetElm
            },
            getWin: function () {
                var a, b = this;
                return b.contentWindow || (a = b.iframeElement, a && (b.contentWindow = a.contentWindow)), b.contentWindow
            },
            getDoc: function () {
                var a, b = this;
                return b.contentDocument || (a = b.getWin(), a && (b.contentDocument = a.document)), b.contentDocument
            },
            getBody: function () {
                var a = this.getDoc();
                return this.bodyElement || (a ? a.body : null)
            },
            convertURL: function (a, b, c) {
                var d = this,
                    e = d.settings;
                return e.urlconverter_callback ? d.execCallback("urlconverter_callback", a, c, !0, b) : !e.convert_urls || c && "LINK" == c.nodeName || 0 === a.indexOf("file:") || 0 === a.length ? a : e.relative_urls ? d.documentBaseURI.toRelative(a) : a = d.documentBaseURI.toAbsolute(a, e.remove_script_host)
            },
            addVisual: function (a) {
                var b, c = this,
                    d = c.settings,
                    e = c.dom;
                a = a || c.getBody(), void 0 === c.hasVisual && (c.hasVisual = d.visual), t(e.select("table,a", a), function (a) {
                    var f;
                    switch (a.nodeName) {
                        case "TABLE":
                            return b = d.visual_table_class || "mce-item-table", f = e.getAttrib(a, "border"), void(f && "0" != f || !c.hasVisual ? e.removeClass(a, b) : e.addClass(a, b));
                        case "A":
                            return void(e.getAttrib(a, "href", !1) || (f = e.getAttrib(a, "name") || a.id, b = d.visual_anchor_class || "mce-item-anchor", f && c.hasVisual ? e.addClass(a, b) : e.removeClass(a, b)))
                    }
                }), c.fire("VisualAid", {
                    element: a,
                    hasVisual: c.hasVisual
                })
            },
            remove: function () {
                var a = this;
                a.removed || (a.save(), a.removed = 1, a.unbindAllNativeEvents(), a.hasHiddenInput && r.remove(a.getElement().nextSibling), a.inline || (w && w < 10 && a.getDoc().execCommand("SelectAll", !1, null), r.setStyle(a.id, "display", a.orgDisplay), a.getBody().onload = null), a.fire("remove"), a.editorManager.remove(a), r.remove(a.getContainer()), a._selectionOverrides.destroy(), a.editorUpload.destroy(), a.destroy())
            },
            destroy: function (a) {
                var b, c = this;
                if (!c.destroyed) {
                    if (!a && !c.removed) return void c.remove();
                    a || (c.editorManager.off("beforeunload", c._beforeUnload), c.theme && c.theme.destroy && c.theme.destroy(), c.selection.destroy(), c.dom.destroy()), b = c.formElement, b && (b._mceOldSubmit && (b.submit = b._mceOldSubmit, b._mceOldSubmit = null), r.unbind(b, "submit reset", c.formEventDelegate)), c.contentAreaContainer = c.formElement = c.container = c.editorContainer = null, c.bodyElement = c.contentDocument = c.contentWindow = null, c.iframeElement = c.targetElm = null, c.selection && (c.selection = c.selection.win = c.selection.dom = c.selection.dom.doc = null), c.destroyed = 1
                }
            },
            uploadImages: function (a) {
                return this.editorUpload.uploadImages(a)
            },
            _scanForImages: function () {
                return this.editorUpload.scanForImages()
            }
        }, s(x.prototype, c), x
    }), g("e", ["1j"], function (a) {
        var b = function (a) {
            return a.className.toString().indexOf("mce-") !== -1
        };
        return {
            isEditorUIElement: b
        }
    }), g("4m", ["5y", "3d", "1j", "m", "20"], function (a, b, c, d, e) {
        var f = function (a) {
                return "nodechange" === a.type && a.selectionChange
            },
            g = function (a, b) {
                var e = function () {
                    b.throttle()
                };
                d.DOM.bind(c, "mouseup", e), a.on("remove", function () {
                    d.DOM.unbind(c, "mouseup", e)
                })
            },
            h = function (a) {
                a.on("focusout", function () {
                    e.store(a)
                })
            },
            i = function (a, b) {
                a.on("mouseup touchend", function (a) {
                    b.throttle()
                })
            },
            j = function (a, c) {
                var d = b.detect().browser;
                d.isIE() || d.isEdge() ? h(a) : i(a, c), a.on("keyup nodechange", function (b) {
                    f(b) || e.store(a)
                })
            },
            k = function (b) {
                var c = a.first(function () {
                    e.store(b)
                }, 0);
                b.inline && g(b, c), b.on("init", function () {
                    j(b, c)
                }), b.on("remove", function () {
                    c.cancel()
                })
            };
        return {
            register: k
        }
    }), g("2a", ["1", "1j", "e", "m", "4m", "15"], function (a, b, c, d, e, f) {
        var g, h = d.DOM,
            i = function (a) {
                return c.isEditorUIElement(a)
            },
            j = function (a, b) {
                var c = a ? a.settings.custom_ui_selector : "",
                    d = h.getParent(b, function (b) {
                        return i(b) || !!c && a.dom.is(b, c)
                    });
                return null !== d
            },
            k = function () {
                try {
                    return b.activeElement
                } catch (a) {
                    return b.body
                }
            },
            l = function (a, c) {
                var d = c.editor;
                e.register(d), d.on("focusin", function () {
                    var b = a.focusedEditor;
                    b != d && (b && b.fire("blur", {
                        focusedEditor: d
                    }), a.setActive(d), a.focusedEditor = d, d.fire("focus", {
                        blurredEditor: b
                    }), d.focus(!0))
                }), d.on("focusout", function () {
                    f.setEditorTimeout(d, function () {
                        var b = a.focusedEditor;
                        j(d, k()) || b != d || (d.fire("blur", {
                            focusedEditor: null
                        }), a.focusedEditor = null)
                    })
                }), g || (g = function (c) {
                    var d, e = a.activeEditor;
                    d = c.target, e && d.ownerDocument === b && (d === b.body || j(e, d) || a.focusedEditor !== e || (e.fire("blur", {
                        focusedEditor: null
                    }), a.focusedEditor = null))
                }, h.bind(b, "focusin", g))
            },
            m = function (a, c) {
                a.focusedEditor == c.editor && (a.focusedEditor = null), a.activeEditor || (h.unbind(b, "focusin", g), g = null)
            },
            n = function (b) {
                b.on("AddEditor", a.curry(l, b)), b.on("RemoveEditor", a.curry(m, b))
            };
        return {
            setup: n,
            isEditorUIElement: i,
            isUIElement: j
        }
    }), g("17", ["1e"], function (a) {
        "use strict";
        var b = {},
            c = "en";
        return {
            setCode: function (a) {
                a && (c = a, this.rtl = !!this.data[a] && "rtl" === this.data[a]._dir)
            },
            getCode: function () {
                return c
            },
            rtl: !1,
            add: function (a, c) {
                var d = b[a];
                d || (b[a] = d = {});
                for (var e in c) d[e] = c[e];
                this.setCode(a)
            },
            translate: function (d) {
                var e = b[c] || {},
                    f = function (b) {
                        return a.is(b, "function") ? Object.prototype.toString.call(b) : g(b) ? "" : "" + b
                    },
                    g = function (b) {
                        return "" === b || null === b || a.is(b, "undefined")
                    },
                    h = function (b) {
                        return b = f(b), a.hasOwn(e, b) ? f(e[b]) : b
                    };
                if (g(d)) return "";
                if (a.is(d, "object") && a.hasOwn(d, "raw")) return f(d.raw);
                if (a.is(d, "array")) {
                    var i = d.slice(1);
                    d = h(d[0]).replace(/\{([0-9]+)\}/g, function (b, c) {
                        return a.hasOwn(i, c) ? f(i[c]) : b
                    })
                }
                return h(d).replace(/{context:\w+}$/, "")
            },
            data: b
        }
    }), g("9", ["1i", "28", "1j", "2", "6", "7", "b", "29", "m", "n", "2a", "17", "1c", "1d", "1e", "1f"], function (a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p) {
        var q, r, s = i.DOM,
            t = o.explode,
            u = o.each,
            v = o.extend,
            w = 0,
            x = !1,
            y = [],
            z = [],
            A = function (a) {
                return "length" !== a
            },
            B = function (a) {
                u(r.get(), function (b) {
                    "scroll" === a.type ? b.fire("ScrollWindow", a) : b.fire("ResizeWindow", a)
                })
            },
            C = function (a) {
                a !== x && (a ? j(d).on("resize scroll", B) : j(d).off("resize scroll", B), x = a)
            },
            D = function (b) {
                var c = z;
                delete y[b.id];
                for (var d = 0; d < y.length; d++)
                    if (y[d] === b) {
                        y.splice(d, 1);
                        break
                    } return z = a.filter(z, function (a) {
                    return b !== a
                }), r.activeEditor === b && (r.activeEditor = z.length > 0 ? z[0] : null), r.focusedEditor === b && (r.focusedEditor = null), c.length !== z.length
            },
            E = function (a) {
                return a && a.initialized && !(a.getContainer() || a.getBody()).parentNode && (D(a), a.unbindAllNativeEvents(), a.destroy(!0), a.removed = !0, a = null), a
            };
        return r = {
            defaultSettings: {},
            $: j,
            majorVersion: "4",
            minorVersion: "7.4",
            releaseDate: "2017-12-05",
            editors: y,
            i18n: l,
            activeEditor: null,
            settings: {},
            setup: function () {
                var a, b, e, f, g = this,
                    h = "";
                if (b = p.getDocumentBaseUrl(c.location), /^[^:]+:\/\/\/?[^\/]+\//.test(b) && (b = b.replace(/[\?#].*$/, "").replace(/[\/\\][^\/]+$/, ""), /[\/\\]$/.test(b) || (b += "/")), e = d.tinymce || d.tinyMCEPreInit) a = e.base || e.baseURL, h = e.suffix;
                else {
                    for (var i = c.getElementsByTagName("script"), j = 0; j < i.length; j++) {
                        f = i[j].src;
                        var l = f.substring(f.lastIndexOf("/"));
                        if (/tinymce(\.full|\.jquery|)(\.min|\.dev|)\.js/.test(f)) {
                            l.indexOf(".min") != -1 && (h = ".min"), a = f.substring(0, f.lastIndexOf("/"));
                            break
                        }
                    }!a && c.currentScript && (f = c.currentScript.src, f.indexOf(".min") != -1 && (h = ".min"), a = f.substring(0, f.lastIndexOf("/")))
                }
                g.baseURL = new p(b).toAbsolute(a), g.documentBaseURL = b, g.baseURI = new p(g.baseURL), g.suffix = h, k.setup(g)
            },
            overrideDefaults: function (a) {
                var b, c;
                b = a.base_url, b && (this.baseURL = new p(this.documentBaseURL).toAbsolute(b.replace(/\/+$/, "")), this.baseURI = new p(this.baseURL)), c = a.suffix, a.suffix && (this.suffix = c), this.defaultSettings = a;
                var d = a.plugin_base_urls;
                for (var f in d) e.PluginManager.urls[f] = d[f]
            },
            init: function (a) {
                var b, e, i = this;
                e = o.makeMap("area base basefont br col frame hr img input isindex link meta param embed source wbr track colgroup option tbody tfoot thead tr script noscript style textarea video audio iframe object menu", " ");
                var k = function (a, b) {
                        return a.inline && b.tagName.toLowerCase() in e
                    },
                    l = function (a) {
                        var b = a.id;
                        return b || (b = a.name, b = b && !s.get(b) ? a.name : s.uniqueId(), a.setAttribute("id", b)), b
                    },
                    m = function (b) {
                        var c = a[b];
                        if (c) return c.apply(i, Array.prototype.slice.call(arguments, 2))
                    },
                    p = function (a, b) {
                        return b.constructor === RegExp ? b.test(a.className) : s.hasClass(a, b)
                    },
                    q = function (a) {
                        var b, d = [];
                        if (g.ie && g.ie < 11) return h.initError("TinyMCE does not support the browser you are using. For a list of supported browsers please see: https://www.tinymce.com/docs/get-started/system-requirements/"), [];
                        if (a.types) return u(a.types, function (a) {
                            d = d.concat(s.select(a.selector))
                        }), d;
                        if (a.selector) return s.select(a.selector);
                        if (a.target) return [a.target];
                        switch (a.mode) {
                            case "exact":
                                b = a.elements || "", b.length > 0 && u(t(b), function (a) {
                                    var b;
                                    (b = s.get(a)) ? d.push(b): u(c.forms, function (b) {
                                        u(b.elements, function (b) {
                                            b.name === a && (a = "mce_editor_" + w++, s.setAttrib(b, "id", a), d.push(b))
                                        })
                                    })
                                });
                                break;
                            case "textareas":
                            case "specific_textareas":
                                u(s.select("textarea"), function (b) {
                                    a.editor_deselector && p(b, a.editor_deselector) || a.editor_selector && !p(b, a.editor_selector) || d.push(b)
                                })
                        }
                        return d
                    },
                    r = function (a) {
                        b = a
                    },
                    x = function () {
                        var b, c = 0,
                            e = [],
                            g = function (a, d, g) {
                                var h = new f(a, d, i);
                                e.push(h), h.on("init", function () {
                                    ++c === b.length && r(e)
                                }), h.targetElm = h.targetElm || g, h.render()
                            };
                        return s.unbind(d, "ready", x), m("onpageload"), b = j.unique(q(a)), a.types ? void u(a.types, function (c) {
                            o.each(b, function (b) {
                                return !s.is(b, c.selector) || (g(l(b), v({}, a, c), b), !1)
                            })
                        }) : (o.each(b, function (a) {
                            E(i.get(a.id))
                        }), b = o.grep(b, function (a) {
                            return !i.get(a.id)
                        }), void(0 === b.length ? r([]) : u(b, function (b) {
                            k(a, b) ? h.initError("Could not initialize inline editor on invalid inline target element", b) : g(l(b), a, b)
                        })))
                    };
                return i.settings = a, s.bind(d, "ready", x), new n(function (a) {
                    b ? a(b) : r = function (b) {
                        a(b)
                    }
                })
            },
            get: function (c) {
                return 0 === arguments.length ? z.slice(0) : b.isString(c) ? a.find(z, function (a) {
                    return a.id === c
                }).getOr(null) : b.isNumber(c) && z[c] ? z[c] : null
            },
            add: function (a) {
                var b, c = this;
                return b = y[a.id], b === a ? a : (null === c.get(a.id) && (A(a.id) && (y[a.id] = a), y.push(a), z.push(a)), C(!0), c.activeEditor = a, c.fire("AddEditor", {
                    editor: a
                }), q || (q = function () {
                    c.fire("BeforeUnload")
                }, s.bind(d, "beforeunload", q)), a)
            },
            createEditor: function (a, b) {
                return this.add(new f(a, b, this))
            },
            remove: function (a) {
                var c, e, f = this; {
                    if (a) return b.isString(a) ? (a = a.selector || a, void u(s.select(a), function (a) {
                        e = f.get(a.id), e && f.remove(e)
                    })) : (e = a, b.isNull(f.get(e.id)) ? null : (D(e) && f.fire("RemoveEditor", {
                        editor: e
                    }), 0 === z.length && s.unbind(d, "beforeunload", q), e.remove(), C(z.length > 0), e));
                    for (c = z.length - 1; c >= 0; c--) f.remove(z[c])
                }
            },
            execCommand: function (a, b, c) {
                var d = this,
                    e = d.get(c);
                switch (a) {
                    case "mceAddEditor":
                        return d.get(c) || new f(c, d.settings, d).render(), !0;
                    case "mceRemoveEditor":
                        return e && e.remove(), !0;
                    case "mceToggleEditor":
                        return e ? (e.isHidden() ? e.show() : e.hide(), !0) : (d.execCommand("mceAddEditor", 0, c), !0)
                }
                return !!d.activeEditor && d.activeEditor.execCommand(a, b, c)
            },
            triggerSave: function () {
                u(z, function (a) {
                    a.save()
                })
            },
            addI18n: function (a, b) {
                l.add(a, b)
            },
            translate: function (a) {
                return l.translate(a)
            },
            setActive: function (a) {
                var b = this.activeEditor;
                this.activeEditor != a && (b && b.fire("deactivate", {
                    relatedTarget: a
                }), a.fire("activate", {
                    relatedTarget: b
                })), this.activeEditor = a
            }
        }, v(r, m), r.setup(), r
    }), g("j", ["1", "2s", "2t", "2u", "2v", "2w", "2x"], function (a, b, c, d, e, f, g) {
        var h = function (b) {
            var d = function (a, c) {
                    return f.walk(b, a, c)
                },
                e = g.split,
                h = function (d) {
                    return c.normalize(b, d).fold(a.constant(!1), function (a) {
                        return d.setStart(a.startContainer, a.startOffset), d.setEnd(a.endContainer, a.endOffset), !0
                    })
                };
            return {
                walk: d,
                split: e,
                normalize: h
            }
        };
        return h.compareRanges = d.isEq, h.getCaretRangeFromPoint = b.fromPoint, h.getSelectedNode = e.getSelectedNode, h.getNode = e.getNode, h
    }), g("t", [], function () {
        "use strict";
        var a = Math.min,
            b = Math.max,
            c = Math.round,
            d = function (a, b, d) {
                var e, f, g, h, j, k;
                return e = b.x, f = b.y, g = a.w, h = a.h, j = b.w, k = b.h, d = (d || "").split(""), "b" === d[0] && (f += k), "r" === d[1] && (e += j), "c" === d[0] && (f += c(k / 2)), "c" === d[1] && (e += c(j / 2)), "b" === d[3] && (f -= h), "r" === d[4] && (e -= g), "c" === d[3] && (f -= c(h / 2)), "c" === d[4] && (e -= c(g / 2)), i(e, f, g, h)
            },
            e = function (a, b, c, e) {
                var f, g;
                for (g = 0; g < e.length; g++)
                    if (f = d(a, b, e[g]), f.x >= c.x && f.x + f.w <= c.w + c.x && f.y >= c.y && f.y + f.h <= c.h + c.y) return e[g];
                return null
            },
            f = function (a, b, c) {
                return i(a.x - b, a.y - c, a.w + 2 * b, a.h + 2 * c)
            },
            g = function (c, d) {
                var e, f, g, h;
                return e = b(c.x, d.x), f = b(c.y, d.y), g = a(c.x + c.w, d.x + d.w), h = a(c.y + c.h, d.y + d.h), g - e < 0 || h - f < 0 ? null : i(e, f, g - e, h - f)
            },
            h = function (a, c, d) {
                var e, f, g, h, j, k, l, m, n, o;
                return j = a.x, k = a.y, l = a.x + a.w, m = a.y + a.h, n = c.x + c.w, o = c.y + c.h, e = b(0, c.x - j), f = b(0, c.y - k), g = b(0, l - n), h = b(0, m - o), j += e, k += f, d && (l += e, m += f, j -= g, k -= h), l -= g, m -= h, i(j, k, l - j, m - k)
            },
            i = function (a, b, c, d) {
                return {
                    x: a,
                    y: b,
                    w: c,
                    h: d
                }
            },
            j = function (a) {
                return i(a.left, a.top, a.width, a.height)
            };
        return {
            inflate: f,
            relativePosition: d,
            findBestRelativePosition: e,
            intersect: g,
            clamp: h,
            create: i,
            fromClientRect: j
        }
    }), g("12", [], function () {
        "use strict";
        var a = {};
        return {
            add: function (b, c) {
                a[b.toLowerCase()] = c
            },
            has: function (b) {
                return !!a[b.toLowerCase()]
            },
            get: function (b) {
                var c = b.toLowerCase(),
                    d = a.hasOwnProperty(c) ? a[c] : null;
                if (null === d) throw new Error("Could not find module for type: " + b);
                return d
            },
            create: function (b, c) {
                var d;
                if ("string" == typeof b ? (c = c || {}, c.type = b) : (c = b, b = c.type), b = b.toLowerCase(), d = a[b], !d) throw new Error("Could not find control by type: " + b);
                return d = new d(c), d.type = b, d
            }
        }
    }), g("13", ["1e"], function (a) {
        var b, c, d = a.each,
            e = a.extend,
            f = function () {};
        return f.extend = b = function (a) {
            var f, g, h, i = this,
                j = i.prototype,
                k = function () {
                    var a, b, d, e = this;
                    if (!c && (e.init && e.init.apply(e, arguments), b = e.Mixins))
                        for (a = b.length; a--;) d = b[a], d.init && d.init.apply(e, arguments)
                },
                l = function () {
                    return this
                },
                m = function (a, b) {
                    return function () {
                        var c, d = this,
                            e = d._super;
                        return d._super = j[a], c = b.apply(d, arguments), d._super = e, c
                    }
                };
            c = !0, f = new i, c = !1, a.Mixins && (d(a.Mixins, function (b) {
                for (var c in b) "init" !== c && (a[c] = b[c])
            }), j.Mixins && (a.Mixins = j.Mixins.concat(a.Mixins))), a.Methods && d(a.Methods.split(","), function (b) {
                a[b] = l
            }), a.Properties && d(a.Properties.split(","), function (b) {
                var c = "_" + b;
                a[b] = function (a) {
                    var b, d = this;
                    return a !== b ? (d[c] = a, d) : d[c]
                }
            }), a.Statics && d(a.Statics, function (a, b) {
                k[b] = a
            }), a.Defaults && j.Defaults && (a.Defaults = e({}, j.Defaults, a.Defaults));
            for (g in a) h = a[g], "function" == typeof h && j[g] ? f[g] = m(g, h) : f[g] = h;
            return k.prototype = f, k.constructor = k, k.extend = b, k
        }, f
    }), g("14", [], function () {
        var a = Math.min,
            b = Math.max,
            c = Math.round,
            d = function (d) {
                var e = this,
                    f = 0,
                    g = 0,
                    h = 0,
                    i = function (d, e, f) {
                        var g, h, i, j, k, l;
                        return g = 0, h = 0, i = 0, d /= 255, e /= 255, f /= 255, k = a(d, a(e, f)), l = b(d, b(e, f)), k == l ? (i = k, {
                            h: 0,
                            s: 0,
                            v: 100 * i
                        }) : (j = d == k ? e - f : f == k ? d - e : f - d, g = d == k ? 3 : f == k ? 1 : 5, g = 60 * (g - j / (l - k)), h = (l - k) / l, i = l, {
                            h: c(g),
                            s: c(100 * h),
                            v: c(100 * i)
                        })
                    },
                    j = function (d, e, i) {
                        var j, k, l, m;
                        if (d = (parseInt(d, 10) || 0) % 360, e = parseInt(e, 10) / 100, i = parseInt(i, 10) / 100, e = b(0, a(e, 1)), i = b(0, a(i, 1)), 0 === e) return void(f = g = h = c(255 * i));
                        switch (j = d / 60, k = i * e, l = k * (1 - Math.abs(j % 2 - 1)), m = i - k, Math.floor(j)) {
                            case 0:
                                f = k, g = l, h = 0;
                                break;
                            case 1:
                                f = l, g = k, h = 0;
                                break;
                            case 2:
                                f = 0, g = k, h = l;
                                break;
                            case 3:
                                f = 0, g = l, h = k;
                                break;
                            case 4:
                                f = l, g = 0, h = k;
                                break;
                            case 5:
                                f = k, g = 0, h = l;
                                break;
                            default:
                                f = g = h = 0
                        }
                        f = c(255 * (f + m)), g = c(255 * (g + m)), h = c(255 * (h + m))
                    },
                    k = function () {
                        var a = function (a) {
                            return a = parseInt(a, 10).toString(16), a.length > 1 ? a : "0" + a
                        };
                        return "#" + a(f) + a(g) + a(h)
                    },
                    l = function () {
                        return {
                            r: f,
                            g: g,
                            b: h
                        }
                    },
                    m = function () {
                        return i(f, g, h)
                    },
                    n = function (a) {
                        var b;
                        return "object" == typeof a ? "r" in a ? (f = a.r, g = a.g, h = a.b) : "v" in a && j(a.h, a.s, a.v) : (b = /rgb\s*\(\s*([0-9]+)\s*,\s*([0-9]+)\s*,\s*([0-9]+)[^\)]*\)/gi.exec(a)) ? (f = parseInt(b[1], 10), g = parseInt(b[2], 10), h = parseInt(b[3], 10)) : (b = /#([0-F]{2})([0-F]{2})([0-F]{2})/gi.exec(a)) ? (f = parseInt(b[1], 16), g = parseInt(b[2], 16), h = parseInt(b[3], 16)) : (b = /#([0-F])([0-F])([0-F])/gi.exec(a)) && (f = parseInt(b[1] + b[1], 16), g = parseInt(b[2] + b[2], 16), h = parseInt(b[3] + b[3], 16)), f = f < 0 ? 0 : f > 255 ? 255 : f, g = g < 0 ? 0 : g > 255 ? 255 : g, h = h < 0 ? 0 : h > 255 ? 255 : h, e
                    };
                d && n(d), e.toRgb = l, e.toHsv = m, e.toHex = k, e.parse = n
            };
        return d
    }), g("18", ["2"], function (a) {
        var b = function (a, c) {
            var d, e, f, g;
            if (c = c || '"', null === a) return "null";
            if (f = typeof a, "string" == f) return e = "\bb\tt\nn\ff\rr\"\"''\\\\", c + a.replace(/([\u0080-\uFFFF\x00-\x1f\"\'\\])/g, function (a, b) {
                return '"' === c && "'" === a ? a : (d = e.indexOf(b), d + 1 ? "\\" + e.charAt(d + 1) : (a = b.charCodeAt().toString(16), "\\u" + "0000".substring(a.length) + a))
            }) + c;
            if ("object" == f) {
                if (a.hasOwnProperty && "[object Array]" === Object.prototype.toString.call(a)) {
                    for (d = 0, e = "["; d < a.length; d++) e += (d > 0 ? "," : "") + b(a[d], c);
                    return e + "]"
                }
                e = "{";
                for (g in a) a.hasOwnProperty(g) && (e += "function" != typeof a[g] ? (e.length > 1 ? "," + c : c) + g + c + ":" + b(a[g], c) : "");
                return e + "}"
            }
            return "" + a
        };
        return {
            serialize: b,
            parse: function (b) {
                try {
                    return a[String.fromCharCode(101) + "val"]("(" + b + ")")
                } catch (a) {}
            }
        }
    }), g("19", ["m"], function (a) {
        return {
            callbacks: {},
            count: 0,
            send: function (b) {
                var c = this,
                    d = a.DOM,
                    e = void 0 !== b.count ? b.count : c.count,
                    f = "tinymce_jsonp_" + e;
                c.callbacks[e] = function (a) {
                    d.remove(f), delete c.callbacks[e], b.callback(a)
                }, d.add(d.doc.body, "script", {
                    id: f,
                    src: b.url,
                    type: "text/javascript"
                }), c.count++
            }
        }
    }), g("1h", ["39", "1q", "1c", "1e"], function (a, b, c, d) {
        var e = {
            send: function (c) {
                var f, g = 0,
                    h = function () {
                        !c.async || 4 == f.readyState || g++ > 1e4 ? (c.success && g < 1e4 && 200 == f.status ? c.success.call(c.success_scope, "" + f.responseText, f, c) : c.error && c.error.call(c.error_scope, g > 1e4 ? "TIMED_OUT" : "GENERAL", f, c), f = null) : b(h, 10)
                    };
                if (c.scope = c.scope || this, c.success_scope = c.success_scope || c.scope, c.error_scope = c.error_scope || c.scope, c.async = c.async !== !1, c.data = c.data || "", e.fire("beforeInitialize", {
                        settings: c
                    }), f = new a) {
                    if (f.overrideMimeType && f.overrideMimeType(c.content_type), f.open(c.type || (c.data ? "POST" : "GET"), c.url, c.async), c.crossDomain && (f.withCredentials = !0), c.content_type && f.setRequestHeader("Content-Type", c.content_type), c.requestheaders && d.each(c.requestheaders, function (a) {
                            f.setRequestHeader(a.key, a.value)
                        }), f.setRequestHeader("X-Requested-With", "XMLHttpRequest"), f = e.fire("beforeSend", {
                            xhr: f,
                            settings: c
                        }).xhr, f.send(c.data), !c.async) return h();
                    b(h, 10)
                }
            }
        };
        return d.extend(e, c), e
    }), g("1a", ["18", "1h", "1e"], function (a, b, c) {
        var d = c.extend,
            e = function (a) {
                this.settings = d({}, a), this.count = 0
            };
        return e.sendRPC = function (a) {
            return (new e).send(a)
        }, e.prototype = {
            send: function (c) {
                var e = c.error,
                    f = c.success;
                c = d(this.settings, c), c.success = function (b, d) {
                    b = a.parse(b), "undefined" == typeof b && (b = {
                        error: "JSON Parse error."
                    }), b.error ? e.call(c.error_scope || c.scope, b.error, d) : f.call(c.success_scope || c.scope, b.result)
                }, c.error = function (a, b) {
                    e && e.call(c.error_scope || c.scope, a, b)
                }, c.data = a.serialize({
                    id: c.id || "c" + this.count++,
                    method: c.method,
                    params: c.params
                }), c.content_type = "application/json", b.send(c)
            }
        }, e
    }), g("1b", ["1j", "2"], function (a, b) {
        var c, d, e, f, g, h;
        try {
            if (b.localStorage) return b.localStorage
        } catch (a) {}
        g = "tinymce", d = a.documentElement, h = !!d.addBehavior, h && d.addBehavior("#default#userData");
        var i = function () {
                f = [];
                for (var a in e) f.push(a);
                c.length = f.length
            },
            j = function () {
                var a, b, c, f = 0;
                if (e = {}, h) {
                    var j = function (a) {
                        var c, d;
                        return d = void 0 !== a ? f + a : b.indexOf(",", f), d === -1 || d > b.length ? null : (c = b.substring(f, d), f = d + 1, c)
                    };
                    d.load(g), b = d.getAttribute(g) || "";
                    do {
                        var k = j();
                        if (null === k) break;
                        if (a = j(parseInt(k, 32) || 0), null !== a) {
                            if (k = j(), null === k) break;
                            c = j(parseInt(k, 32) || 0), a && (e[a] = c)
                        }
                    } while (null !== a);
                    i()
                }
            },
            k = function () {
                var a, b = "";
                if (h) {
                    for (var c in e) a = e[c], b += (b ? "," : "") + c.length.toString(32) + "," + c + "," + a.length.toString(32) + "," + a;
                    d.setAttribute(g, b);
                    try {
                        d.save(g)
                    } catch (a) {}
                    i()
                }
            };
        return c = {
            key: function (a) {
                return f[a]
            },
            getItem: function (a) {
                return a in e ? e[a] : null
            },
            setItem: function (a, b) {
                e[a] = "" + b, k()
            },
            removeItem: function (a) {
                delete e[a], k()
            },
            clear: function () {
                e = {}, k()
            }
        }, j(), c
    }), g("3", ["6", "7", "8", "9", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "1a", "1b", "1c", "1d", "1e", "1f", "1g", "1h"], function (a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u, v, w, x, y, z, A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S, T, U, V) {
        var W = d,
            X = {
                geom: {
                    Rect: x
                },
                util: {
                    Promise: R,
                    Delay: J,
                    Tools: S,
                    VK: U,
                    URI: T,
                    Class: H,
                    EventDispatcher: K,
                    Observable: Q,
                    I18n: L,
                    XHR: V,
                    JSON: M,
                    JSONRequest: O,
                    JSONP: N,
                    LocalStorage: P,
                    Color: I
                },
                dom: {
                    EventUtils: s,
                    Sizzle: v,
                    DomQuery: r,
                    TreeWalker: w,
                    DOMUtils: q,
                    ScriptLoader: t,
                    RangeUtils: n,
                    Serializer: o,
                    ControlSelection: p,
                    BookmarkManager: m,
                    Selection: u,
                    Event: s.Event
                },
                html: {
                    Styles: E,
                    Entities: z,
                    Node: A,
                    Schema: C,
                    SaxParser: B,
                    DomParser: y,
                    Writer: F,
                    Serializer: D
                },
                ui: {
                    Factory: G
                },
                Env: f,
                AddOnManager: a,
                Formatter: j,
                UndoManager: h,
                EditorCommands: c,
                WindowManager: l,
                NotificationManager: k,
                EditorObservable: e,
                Shortcuts: g,
                Editor: b,
                FocusManager: i,
                EditorManager: d,
                DOM: q.DOM,
                ScriptLoader: t.ScriptLoader,
                PluginManager: a.PluginManager,
                ThemeManager: a.ThemeManager,
                trim: S.trim,
                isArray: S.isArray,
                is: S.is,
                toArray: S.toArray,
                makeMap: S.makeMap,
                each: S.each,
                map: S.map,
                grep: S.grep,
                inArray: S.inArray,
                extend: S.extend,
                create: S.create,
                walk: S.walk,
                createNS: S.createNS,
                resolve: S.resolve,
                explode: S.explode,
                _addCacheSuffix: S._addCacheSuffix,
                isOpera: f.opera,
                isWebKit: f.webkit,
                isIE: f.ie,
                isGecko: f.gecko,
                isMac: f.mac
            };
        return W = S.extend(W, X)
    }), g("0", ["1", "2", "3"], function (a, b, c) {
        var d = this || b,
            e = function (b) {
                "function" != typeof d.define || d.define.amd || (d.define("ephox/tinymce", [], a.constant(b)), d.define("9", [], a.constant(b))), "object" == typeof module && (module.exports = b)
            },
            f = function (a) {
                b.tinymce = a, b.tinyMCE = a
            };
        return function () {
            return f(c), e(c), c
        }
    }), d("0")()
}();