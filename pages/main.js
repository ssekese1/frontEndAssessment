(window.webpackJsonp = window.webpackJsonp || []).push([
    [3],
    {
        2: function (t, e, n) {
            t.exports = n("zUnb");
        },
        crnd: function (t, e) {
            function n(t) {
                return Promise.resolve().then(function () {
                    var e = new Error('Cannot find module "' + t + '".');
                    throw ((e.code = "MODULE_NOT_FOUND"), e);
                });
            }
            (n.keys = function () {
                return [];
            }),
                (n.resolve = n),
                (t.exports = n),
                (n.id = "crnd");
        },
        yLV6: function (t, e, n) {
            var r;
            !(function (o, i, a, s) {
                "use strict";
                var u,
                    l = ["", "webkit", "Moz", "MS", "ms", "o"],
                    c = i.createElement("div"),
                    h = "function",
                    p = Math.round,
                    f = Math.abs,
                    d = Date.now;
                function v(t, e, n) {
                    return setTimeout(C(t, n), e);
                }
                function y(t, e, n) {
                    return !!Array.isArray(t) && (g(t, n[e], n), !0);
                }
                function g(t, e, n) {
                    var r;
                    if (t)
                        if (t.forEach) t.forEach(e, n);
                        else if (t.length !== s) for (r = 0; r < t.length; ) e.call(n, t[r], r, t), r++;
                        else for (r in t) t.hasOwnProperty(r) && e.call(n, t[r], r, t);
                }
                function m(t, e, n) {
                    var r = "DEPRECATED METHOD: " + e + "\n" + n + " AT \n";
                    return function () {
                        var e = new Error("get-stack-trace"),
                            n =
                                e && e.stack
                                    ? e.stack
                                          .replace(/^[^\(]+?[\n$]/gm, "")
                                          .replace(/^\s+at\s+/gm, "")
                                          .replace(/^Object.<anonymous>\s*\(/gm, "{anonymous}()@")
                                    : "Unknown Stack Trace",
                            i = o.console && (o.console.warn || o.console.log);
                        return i && i.call(o.console, r, n), t.apply(this, arguments);
                    };
                }
                u =
                    "function" != typeof Object.assign
                        ? function (t) {
                              if (t === s || null === t) throw new TypeError("Cannot convert undefined or null to object");
                              for (var e = Object(t), n = 1; n < arguments.length; n++) {
                                  var r = arguments[n];
                                  if (r !== s && null !== r) for (var o in r) r.hasOwnProperty(o) && (e[o] = r[o]);
                              }
                              return e;
                          }
                        : Object.assign;
                var b = m(
                        function (t, e, n) {
                            for (var r = Object.keys(e), o = 0; o < r.length; ) (!n || (n && t[r[o]] === s)) && (t[r[o]] = e[r[o]]), o++;
                            return t;
                        },
                        "extend",
                        "Use `assign`."
                    ),
                    w = m(
                        function (t, e) {
                            return b(t, e, !0);
                        },
                        "merge",
                        "Use `assign`."
                    );
                function _(t, e, n) {
                    var r,
                        o = e.prototype;
                    ((r = t.prototype = Object.create(o)).constructor = t), (r._super = o), n && u(r, n);
                }
                function C(t, e) {
                    return function () {
                        return t.apply(e, arguments);
                    };
                }
                function E(t, e) {
                    return typeof t == h ? t.apply((e && e[0]) || s, e) : t;
                }
                function S(t, e) {
                    return t === s ? e : t;
                }
                function x(t, e, n) {
                    g(I(e), function (e) {
                        t.addEventListener(e, n, !1);
                    });
                }
                function T(t, e, n) {
                    g(I(e), function (e) {
                        t.removeEventListener(e, n, !1);
                    });
                }
                function k(t, e) {
                    for (; t; ) {
                        if (t == e) return !0;
                        t = t.parentNode;
                    }
                    return !1;
                }
                function A(t, e) {
                    return t.indexOf(e) > -1;
                }
                function I(t) {
                    return t.trim().split(/\s+/g);
                }
                function P(t, e, n) {
                    if (t.indexOf && !n) return t.indexOf(e);
                    for (var r = 0; r < t.length; ) {
                        if ((n && t[r][n] == e) || (!n && t[r] === e)) return r;
                        r++;
                    }
                    return -1;
                }
                function N(t) {
                    return Array.prototype.slice.call(t, 0);
                }
                function R(t, e, n) {
                    for (var r = [], o = [], i = 0; i < t.length; ) {
                        var a = e ? t[i][e] : t[i];
                        P(o, a) < 0 && r.push(t[i]), (o[i] = a), i++;
                    }
                    return (
                        n &&
                            (r = e
                                ? r.sort(function (t, n) {
                                      return t[e] > n[e];
                                  })
                                : r.sort()),
                        r
                    );
                }
                function D(t, e) {
                    for (var n, r, o = e[0].toUpperCase() + e.slice(1), i = 0; i < l.length; ) {
                        if ((r = (n = l[i]) ? n + o : e) in t) return r;
                        i++;
                    }
                    return s;
                }
                var O = 1;
                function M(t) {
                    var e = t.ownerDocument || t;
                    return e.defaultView || e.parentWindow || o;
                }
                var V = "ontouchstart" in o,
                    j = D(o, "PointerEvent") !== s,
                    U = V && /mobile|tablet|ip(ad|hone|od)|android/i.test(navigator.userAgent),
                    L = 25,
                    H = 1,
                    F = 4,
                    z = 8,
                    B = 1,
                    q = 2,
                    G = 4,
                    Z = 8,
                    W = 16,
                    Q = q | G,
                    Y = Z | W,
                    K = Q | Y,
                    X = ["x", "y"],
                    $ = ["clientX", "clientY"];
                function J(t, e) {
                    var n = this;
                    (this.manager = t),
                        (this.callback = e),
                        (this.element = t.element),
                        (this.target = t.options.inputTarget),
                        (this.domHandler = function (e) {
                            E(t.options.enable, [t]) && n.handler(e);
                        }),
                        this.init();
                }
                function tt(t, e, n) {
                    var r = n.pointers.length,
                        o = n.changedPointers.length,
                        i = e & H && r - o == 0,
                        a = e & (F | z) && r - o == 0;
                    (n.isFirst = !!i),
                        (n.isFinal = !!a),
                        i && (t.session = {}),
                        (n.eventType = e),
                        (function (t, e) {
                            var n = t.session,
                                r = e.pointers,
                                o = r.length;
                            n.firstInput || (n.firstInput = et(e)), o > 1 && !n.firstMultiple ? (n.firstMultiple = et(e)) : 1 === o && (n.firstMultiple = !1);
                            var i = n.firstInput,
                                a = n.firstMultiple,
                                u = a ? a.center : i.center,
                                l = (e.center = nt(r));
                            (e.timeStamp = d()),
                                (e.deltaTime = e.timeStamp - i.timeStamp),
                                (e.angle = at(u, l)),
                                (e.distance = it(u, l)),
                                (function (t, e) {
                                    var n = e.center,
                                        r = t.offsetDelta || {},
                                        o = t.prevDelta || {},
                                        i = t.prevInput || {};
                                    (e.eventType !== H && i.eventType !== F) || ((o = t.prevDelta = { x: i.deltaX || 0, y: i.deltaY || 0 }), (r = t.offsetDelta = { x: n.x, y: n.y })),
                                        (e.deltaX = o.x + (n.x - r.x)),
                                        (e.deltaY = o.y + (n.y - r.y));
                                })(n, e),
                                (e.offsetDirection = ot(e.deltaX, e.deltaY));
                            var c,
                                h,
                                p = rt(e.deltaTime, e.deltaX, e.deltaY);
                            (e.overallVelocityX = p.x),
                                (e.overallVelocityY = p.y),
                                (e.overallVelocity = f(p.x) > f(p.y) ? p.x : p.y),
                                (e.scale = a ? ((c = a.pointers), it((h = r)[0], h[1], $) / it(c[0], c[1], $)) : 1),
                                (e.rotation = a
                                    ? (function (t, e) {
                                          return at(r[1], r[0], $) + at(t[1], t[0], $);
                                      })(a.pointers)
                                    : 0),
                                (e.maxPointers = n.prevInput ? (e.pointers.length > n.prevInput.maxPointers ? e.pointers.length : n.prevInput.maxPointers) : e.pointers.length),
                                (function (t, e) {
                                    var n,
                                        r,
                                        o,
                                        i,
                                        a = t.lastInterval || e,
                                        u = e.timeStamp - a.timeStamp;
                                    if (e.eventType != z && (u > L || a.velocity === s)) {
                                        var l = e.deltaX - a.deltaX,
                                            c = e.deltaY - a.deltaY,
                                            h = rt(u, l, c);
                                        (r = h.x), (o = h.y), (n = f(h.x) > f(h.y) ? h.x : h.y), (i = ot(l, c)), (t.lastInterval = e);
                                    } else (n = a.velocity), (r = a.velocityX), (o = a.velocityY), (i = a.direction);
                                    (e.velocity = n), (e.velocityX = r), (e.velocityY = o), (e.direction = i);
                                })(n, e);
                            var v = t.element;
                            k(e.srcEvent.target, v) && (v = e.srcEvent.target), (e.target = v);
                        })(t, n),
                        t.emit("hammer.input", n),
                        t.recognize(n),
                        (t.session.prevInput = n);
                }
                function et(t) {
                    for (var e = [], n = 0; n < t.pointers.length; ) (e[n] = { clientX: p(t.pointers[n].clientX), clientY: p(t.pointers[n].clientY) }), n++;
                    return { timeStamp: d(), pointers: e, center: nt(e), deltaX: t.deltaX, deltaY: t.deltaY };
                }
                function nt(t) {
                    var e = t.length;
                    if (1 === e) return { x: p(t[0].clientX), y: p(t[0].clientY) };
                    for (var n = 0, r = 0, o = 0; o < e; ) (n += t[o].clientX), (r += t[o].clientY), o++;
                    return { x: p(n / e), y: p(r / e) };
                }
                function rt(t, e, n) {
                    return { x: e / t || 0, y: n / t || 0 };
                }
                function ot(t, e) {
                    return t === e ? B : f(t) >= f(e) ? (t < 0 ? q : G) : e < 0 ? Z : W;
                }
                function it(t, e, n) {
                    n || (n = X);
                    var r = e[n[0]] - t[n[0]],
                        o = e[n[1]] - t[n[1]];
                    return Math.sqrt(r * r + o * o);
                }
                function at(t, e, n) {
                    return n || (n = X), (180 * Math.atan2(e[n[1]] - t[n[1]], e[n[0]] - t[n[0]])) / Math.PI;
                }
                J.prototype = {
                    handler: function () {},
                    init: function () {
                        this.evEl && x(this.element, this.evEl, this.domHandler), this.evTarget && x(this.target, this.evTarget, this.domHandler), this.evWin && x(M(this.element), this.evWin, this.domHandler);
                    },
                    destroy: function () {
                        this.evEl && T(this.element, this.evEl, this.domHandler), this.evTarget && T(this.target, this.evTarget, this.domHandler), this.evWin && T(M(this.element), this.evWin, this.domHandler);
                    },
                };
                var st = { mousedown: H, mousemove: 2, mouseup: F },
                    ut = "mousedown",
                    lt = "mousemove mouseup";
                function ct() {
                    (this.evEl = ut), (this.evWin = lt), (this.pressed = !1), J.apply(this, arguments);
                }
                _(ct, J, {
                    handler: function (t) {
                        var e = st[t.type];
                        e & H && 0 === t.button && (this.pressed = !0),
                            2 & e && 1 !== t.which && (e = F),
                            this.pressed && (e & F && (this.pressed = !1), this.callback(this.manager, e, { pointers: [t], changedPointers: [t], pointerType: "mouse", srcEvent: t }));
                    },
                });
                var ht = { pointerdown: H, pointermove: 2, pointerup: F, pointercancel: z, pointerout: z },
                    pt = { 2: "touch", 3: "pen", 4: "mouse", 5: "kinect" },
                    ft = "pointerdown",
                    dt = "pointermove pointerup pointercancel";
                function vt() {
                    (this.evEl = ft), (this.evWin = dt), J.apply(this, arguments), (this.store = this.manager.session.pointerEvents = []);
                }
                o.MSPointerEvent && !o.PointerEvent && ((ft = "MSPointerDown"), (dt = "MSPointerMove MSPointerUp MSPointerCancel")),
                    _(vt, J, {
                        handler: function (t) {
                            var e = this.store,
                                n = !1,
                                r = t.type.toLowerCase().replace("ms", ""),
                                o = ht[r],
                                i = pt[t.pointerType] || t.pointerType,
                                a = "touch" == i,
                                s = P(e, t.pointerId, "pointerId");
                            o & H && (0 === t.button || a) ? s < 0 && (e.push(t), (s = e.length - 1)) : o & (F | z) && (n = !0),
                                s < 0 || ((e[s] = t), this.callback(this.manager, o, { pointers: e, changedPointers: [t], pointerType: i, srcEvent: t }), n && e.splice(s, 1));
                        },
                    });
                var yt = { touchstart: H, touchmove: 2, touchend: F, touchcancel: z },
                    gt = "touchstart",
                    mt = "touchstart touchmove touchend touchcancel";
                function bt() {
                    (this.evTarget = gt), (this.evWin = mt), (this.started = !1), J.apply(this, arguments);
                }
                _(bt, J, {
                    handler: function (t) {
                        var e = yt[t.type];
                        if ((e === H && (this.started = !0), this.started)) {
                            var n = function (t, e) {
                                var n = N(t.touches),
                                    r = N(t.changedTouches);
                                return e & (F | z) && (n = R(n.concat(r), "identifier", !0)), [n, r];
                            }.call(this, t, e);
                            e & (F | z) && n[0].length - n[1].length == 0 && (this.started = !1), this.callback(this.manager, e, { pointers: n[0], changedPointers: n[1], pointerType: "touch", srcEvent: t });
                        }
                    },
                });
                var wt = { touchstart: H, touchmove: 2, touchend: F, touchcancel: z },
                    _t = "touchstart touchmove touchend touchcancel";
                function Ct() {
                    (this.evTarget = _t), (this.targetIds = {}), J.apply(this, arguments);
                }
                _(Ct, J, {
                    handler: function (t) {
                        var e = wt[t.type],
                            n = function (t, e) {
                                var n = N(t.touches),
                                    r = this.targetIds;
                                if (e & (2 | H) && 1 === n.length) return (r[n[0].identifier] = !0), [n, n];
                                var o,
                                    i,
                                    a = N(t.changedTouches),
                                    s = [],
                                    u = this.target;
                                if (
                                    ((i = n.filter(function (t) {
                                        return k(t.target, u);
                                    })),
                                    e === H)
                                )
                                    for (o = 0; o < i.length; ) (r[i[o].identifier] = !0), o++;
                                for (o = 0; o < a.length; ) r[a[o].identifier] && s.push(a[o]), e & (F | z) && delete r[a[o].identifier], o++;
                                return s.length ? [R(i.concat(s), "identifier", !0), s] : void 0;
                            }.call(this, t, e);
                        n && this.callback(this.manager, e, { pointers: n[0], changedPointers: n[1], pointerType: "touch", srcEvent: t });
                    },
                });
                var Et = 2500;
                function St() {
                    J.apply(this, arguments);
                    var t = C(this.handler, this);
                    (this.touch = new Ct(this.manager, t)), (this.mouse = new ct(this.manager, t)), (this.primaryTouch = null), (this.lastTouches = []);
                }
                function xt(t) {
                    var e = t.changedPointers[0];
                    if (e.identifier === this.primaryTouch) {
                        var n = { x: e.clientX, y: e.clientY };
                        this.lastTouches.push(n);
                        var r = this.lastTouches;
                        setTimeout(function () {
                            var t = r.indexOf(n);
                            t > -1 && r.splice(t, 1);
                        }, Et);
                    }
                }
                _(St, J, {
                    handler: function (t, e, n) {
                        var r = "mouse" == n.pointerType;
                        if (!(r && n.sourceCapabilities && n.sourceCapabilities.firesTouchEvents)) {
                            if ("touch" == n.pointerType)
                                (function (t, e) {
                                    t & H ? ((this.primaryTouch = e.changedPointers[0].identifier), xt.call(this, e)) : t & (F | z) && xt.call(this, e);
                                }.call(this, e, n));
                            else if (
                                r &&
                                function (t) {
                                    for (var e = t.srcEvent.clientX, n = t.srcEvent.clientY, r = 0; r < this.lastTouches.length; r++) {
                                        var o = this.lastTouches[r],
                                            i = Math.abs(e - o.x),
                                            a = Math.abs(n - o.y);
                                        if (i <= 25 && a <= 25) return !0;
                                    }
                                    return !1;
                                }.call(this, n)
                            )
                                return;
                            this.callback(t, e, n);
                        }
                    },
                    destroy: function () {
                        this.touch.destroy(), this.mouse.destroy();
                    },
                });
                var Tt = D(c.style, "touchAction"),
                    kt = Tt !== s,
                    At = (function () {
                        if (!kt) return !1;
                        var t = {},
                            e = o.CSS && o.CSS.supports;
                        return (
                            ["auto", "manipulation", "pan-y", "pan-x", "pan-x pan-y", "none"].forEach(function (n) {
                                t[n] = !e || o.CSS.supports("touch-action", n);
                            }),
                            t
                        );
                    })();
                function It(t, e) {
                    (this.manager = t), this.set(e);
                }
                It.prototype = {
                    set: function (t) {
                        "compute" == t && (t = this.compute()), kt && this.manager.element.style && At[t] && (this.manager.element.style[Tt] = t), (this.actions = t.toLowerCase().trim());
                    },
                    update: function () {
                        this.set(this.manager.options.touchAction);
                    },
                    compute: function () {
                        var t = [];
                        return (
                            g(this.manager.recognizers, function (e) {
                                E(e.options.enable, [e]) && (t = t.concat(e.getTouchAction()));
                            }),
                            (function (t) {
                                if (A(t, "none")) return "none";
                                var e = A(t, "pan-x"),
                                    n = A(t, "pan-y");
                                return e && n ? "none" : e || n ? (e ? "pan-x" : "pan-y") : A(t, "manipulation") ? "manipulation" : "auto";
                            })(t.join(" "))
                        );
                    },
                    preventDefaults: function (t) {
                        var e = t.srcEvent,
                            n = t.offsetDirection;
                        if (this.manager.session.prevented) e.preventDefault();
                        else {
                            var r = this.actions,
                                o = A(r, "none") && !At.none,
                                i = A(r, "pan-y") && !At["pan-y"],
                                a = A(r, "pan-x") && !At["pan-x"];
                            if (o && 1 === t.pointers.length && t.distance < 2 && t.deltaTime < 250) return;
                            if (!a || !i) return o || (i && n & Q) || (a && n & Y) ? this.preventSrc(e) : void 0;
                        }
                    },
                    preventSrc: function (t) {
                        (this.manager.session.prevented = !0), t.preventDefault();
                    },
                };
                var Pt = 1,
                    Nt = 2,
                    Rt = 4,
                    Dt = 8,
                    Ot = Dt,
                    Mt = 16;
                function Vt(t) {
                    (this.options = u({}, this.defaults, t || {})), (this.id = O++), (this.manager = null), (this.options.enable = S(this.options.enable, !0)), (this.state = Pt), (this.simultaneous = {}), (this.requireFail = []);
                }
                function jt(t) {
                    return t & Mt ? "cancel" : t & Dt ? "end" : t & Rt ? "move" : t & Nt ? "start" : "";
                }
                function Ut(t) {
                    return t == W ? "down" : t == Z ? "up" : t == q ? "left" : t == G ? "right" : "";
                }
                function Lt(t, e) {
                    var n = e.manager;
                    return n ? n.get(t) : t;
                }
                function Ht() {
                    Vt.apply(this, arguments);
                }
                function Ft() {
                    Ht.apply(this, arguments), (this.pX = null), (this.pY = null);
                }
                function zt() {
                    Ht.apply(this, arguments);
                }
                function Bt() {
                    Vt.apply(this, arguments), (this._timer = null), (this._input = null);
                }
                function qt() {
                    Ht.apply(this, arguments);
                }
                function Gt() {
                    Ht.apply(this, arguments);
                }
                function Zt() {
                    Vt.apply(this, arguments), (this.pTime = !1), (this.pCenter = !1), (this._timer = null), (this._input = null), (this.count = 0);
                }
                function Wt(t, e) {
                    return ((e = e || {}).recognizers = S(e.recognizers, Wt.defaults.preset)), new Qt(t, e);
                }
                function Qt(t, e) {
                    var n;
                    (this.options = u({}, Wt.defaults, e || {})),
                        (this.options.inputTarget = this.options.inputTarget || t),
                        (this.handlers = {}),
                        (this.session = {}),
                        (this.recognizers = []),
                        (this.oldCssProps = {}),
                        (this.element = t),
                        (this.input = new ((n = this).options.inputClass || (j ? vt : U ? Ct : V ? St : ct))(n, tt)),
                        (this.touchAction = new It(this, this.options.touchAction)),
                        Yt(this, !0),
                        g(
                            this.options.recognizers,
                            function (t) {
                                var e = this.add(new t[0](t[1]));
                                t[2] && e.recognizeWith(t[2]), t[3] && e.requireFailure(t[3]);
                            },
                            this
                        );
                }
                function Yt(t, e) {
                    var n,
                        r = t.element;
                    r.style &&
                        (g(t.options.cssProps, function (o, i) {
                            (n = D(r.style, i)), e ? ((t.oldCssProps[n] = r.style[n]), (r.style[n] = o)) : (r.style[n] = t.oldCssProps[n] || "");
                        }),
                        e || (t.oldCssProps = {}));
                }
                (Vt.prototype = {
                    defaults: {},
                    set: function (t) {
                        return u(this.options, t), this.manager && this.manager.touchAction.update(), this;
                    },
                    recognizeWith: function (t) {
                        if (y(t, "recognizeWith", this)) return this;
                        var e = this.simultaneous;
                        return e[(t = Lt(t, this)).id] || ((e[t.id] = t), t.recognizeWith(this)), this;
                    },
                    dropRecognizeWith: function (t) {
                        return y(t, "dropRecognizeWith", this) ? this : ((t = Lt(t, this)), delete this.simultaneous[t.id], this);
                    },
                    requireFailure: function (t) {
                        if (y(t, "requireFailure", this)) return this;
                        var e = this.requireFail;
                        return -1 === P(e, (t = Lt(t, this))) && (e.push(t), t.requireFailure(this)), this;
                    },
                    dropRequireFailure: function (t) {
                        if (y(t, "dropRequireFailure", this)) return this;
                        t = Lt(t, this);
                        var e = P(this.requireFail, t);
                        return e > -1 && this.requireFail.splice(e, 1), this;
                    },
                    hasRequireFailures: function () {
                        return this.requireFail.length > 0;
                    },
                    canRecognizeWith: function (t) {
                        return !!this.simultaneous[t.id];
                    },
                    emit: function (t) {
                        var e = this,
                            n = this.state;
                        function r(n) {
                            e.manager.emit(n, t);
                        }
                        n < Dt && r(e.options.event + jt(n)), r(e.options.event), t.additionalEvent && r(t.additionalEvent), n >= Dt && r(e.options.event + jt(n));
                    },
                    tryEmit: function (t) {
                        if (this.canEmit()) return this.emit(t);
                        this.state = 32;
                    },
                    canEmit: function () {
                        for (var t = 0; t < this.requireFail.length; ) {
                            if (!(this.requireFail[t].state & (32 | Pt))) return !1;
                            t++;
                        }
                        return !0;
                    },
                    recognize: function (t) {
                        var e = u({}, t);
                        if (!E(this.options.enable, [this, e])) return this.reset(), void (this.state = 32);
                        this.state & (Ot | Mt | 32) && (this.state = Pt), (this.state = this.process(e)), this.state & (Nt | Rt | Dt | Mt) && this.tryEmit(e);
                    },
                    process: function (t) {},
                    getTouchAction: function () {},
                    reset: function () {},
                }),
                    _(Ht, Vt, {
                        defaults: { pointers: 1 },
                        attrTest: function (t) {
                            var e = this.options.pointers;
                            return 0 === e || t.pointers.length === e;
                        },
                        process: function (t) {
                            var e = this.state,
                                n = t.eventType,
                                r = e & (Nt | Rt),
                                o = this.attrTest(t);
                            return r && (n & z || !o) ? e | Mt : r || o ? (n & F ? e | Dt : e & Nt ? e | Rt : Nt) : 32;
                        },
                    }),
                    _(Ft, Ht, {
                        defaults: { event: "pan", threshold: 10, pointers: 1, direction: K },
                        getTouchAction: function () {
                            var t = this.options.direction,
                                e = [];
                            return t & Q && e.push("pan-y"), t & Y && e.push("pan-x"), e;
                        },
                        directionTest: function (t) {
                            var e = this.options,
                                n = !0,
                                r = t.distance,
                                o = t.direction,
                                i = t.deltaX,
                                a = t.deltaY;
                            return (
                                o & e.direction || (e.direction & Q ? ((o = 0 === i ? B : i < 0 ? q : G), (n = i != this.pX), (r = Math.abs(t.deltaX))) : ((o = 0 === a ? B : a < 0 ? Z : W), (n = a != this.pY), (r = Math.abs(t.deltaY)))),
                                (t.direction = o),
                                n && r > e.threshold && o & e.direction
                            );
                        },
                        attrTest: function (t) {
                            return Ht.prototype.attrTest.call(this, t) && (this.state & Nt || (!(this.state & Nt) && this.directionTest(t)));
                        },
                        emit: function (t) {
                            (this.pX = t.deltaX), (this.pY = t.deltaY);
                            var e = Ut(t.direction);
                            e && (t.additionalEvent = this.options.event + e), this._super.emit.call(this, t);
                        },
                    }),
                    _(zt, Ht, {
                        defaults: { event: "pinch", threshold: 0, pointers: 2 },
                        getTouchAction: function () {
                            return ["none"];
                        },
                        attrTest: function (t) {
                            return this._super.attrTest.call(this, t) && (Math.abs(t.scale - 1) > this.options.threshold || this.state & Nt);
                        },
                        emit: function (t) {
                            1 !== t.scale && (t.additionalEvent = this.options.event + (t.scale < 1 ? "in" : "out")), this._super.emit.call(this, t);
                        },
                    }),
                    _(Bt, Vt, {
                        defaults: { event: "press", pointers: 1, time: 251, threshold: 9 },
                        getTouchAction: function () {
                            return ["auto"];
                        },
                        process: function (t) {
                            var e = this.options,
                                n = t.pointers.length === e.pointers,
                                r = t.distance < e.threshold,
                                o = t.deltaTime > e.time;
                            if (((this._input = t), !r || !n || (t.eventType & (F | z) && !o))) this.reset();
                            else if (t.eventType & H)
                                this.reset(),
                                    (this._timer = v(
                                        function () {
                                            (this.state = Ot), this.tryEmit();
                                        },
                                        e.time,
                                        this
                                    ));
                            else if (t.eventType & F) return Ot;
                            return 32;
                        },
                        reset: function () {
                            clearTimeout(this._timer);
                        },
                        emit: function (t) {
                            this.state === Ot && (t && t.eventType & F ? this.manager.emit(this.options.event + "up", t) : ((this._input.timeStamp = d()), this.manager.emit(this.options.event, this._input)));
                        },
                    }),
                    _(qt, Ht, {
                        defaults: { event: "rotate", threshold: 0, pointers: 2 },
                        getTouchAction: function () {
                            return ["none"];
                        },
                        attrTest: function (t) {
                            return this._super.attrTest.call(this, t) && (Math.abs(t.rotation) > this.options.threshold || this.state & Nt);
                        },
                    }),
                    _(Gt, Ht, {
                        defaults: { event: "swipe", threshold: 10, velocity: 0.3, direction: Q | Y, pointers: 1 },
                        getTouchAction: function () {
                            return Ft.prototype.getTouchAction.call(this);
                        },
                        attrTest: function (t) {
                            var e,
                                n = this.options.direction;
                            return (
                                n & (Q | Y) ? (e = t.overallVelocity) : n & Q ? (e = t.overallVelocityX) : n & Y && (e = t.overallVelocityY),
                                this._super.attrTest.call(this, t) && n & t.offsetDirection && t.distance > this.options.threshold && t.maxPointers == this.options.pointers && f(e) > this.options.velocity && t.eventType & F
                            );
                        },
                        emit: function (t) {
                            var e = Ut(t.offsetDirection);
                            e && this.manager.emit(this.options.event + e, t), this.manager.emit(this.options.event, t);
                        },
                    }),
                    _(Zt, Vt, {
                        defaults: { event: "tap", pointers: 1, taps: 1, interval: 300, time: 250, threshold: 9, posThreshold: 10 },
                        getTouchAction: function () {
                            return ["manipulation"];
                        },
                        process: function (t) {
                            var e = this.options,
                                n = t.pointers.length === e.pointers,
                                r = t.distance < e.threshold,
                                o = t.deltaTime < e.time;
                            if ((this.reset(), t.eventType & H && 0 === this.count)) return this.failTimeout();
                            if (r && o && n) {
                                if (t.eventType != F) return this.failTimeout();
                                var i = !this.pTime || t.timeStamp - this.pTime < e.interval,
                                    a = !this.pCenter || it(this.pCenter, t.center) < e.posThreshold;
                                if (((this.pTime = t.timeStamp), (this.pCenter = t.center), a && i ? (this.count += 1) : (this.count = 1), (this._input = t), 0 == this.count % e.taps))
                                    return this.hasRequireFailures()
                                        ? ((this._timer = v(
                                              function () {
                                                  (this.state = Ot), this.tryEmit();
                                              },
                                              e.interval,
                                              this
                                          )),
                                          Nt)
                                        : Ot;
                            }
                            return 32;
                        },
                        failTimeout: function () {
                            return (
                                (this._timer = v(
                                    function () {
                                        this.state = 32;
                                    },
                                    this.options.interval,
                                    this
                                )),
                                32
                            );
                        },
                        reset: function () {
                            clearTimeout(this._timer);
                        },
                        emit: function () {
                            this.state == Ot && ((this._input.tapCount = this.count), this.manager.emit(this.options.event, this._input));
                        },
                    }),
                    (Wt.VERSION = "2.0.7"),
                    (Wt.defaults = {
                        domEvents: !1,
                        touchAction: "compute",
                        enable: !0,
                        inputTarget: null,
                        inputClass: null,
                        preset: [[qt, { enable: !1 }], [zt, { enable: !1 }, ["rotate"]], [Gt, { direction: Q }], [Ft, { direction: Q }, ["swipe"]], [Zt], [Zt, { event: "doubletap", taps: 2 }, ["tap"]], [Bt]],
                        cssProps: { userSelect: "none", touchSelect: "none", touchCallout: "none", contentZooming: "none", userDrag: "none", tapHighlightColor: "rgba(0,0,0,0)" },
                    }),
                    (Qt.prototype = {
                        set: function (t) {
                            return u(this.options, t), t.touchAction && this.touchAction.update(), t.inputTarget && (this.input.destroy(), (this.input.target = t.inputTarget), this.input.init()), this;
                        },
                        stop: function (t) {
                            this.session.stopped = t ? 2 : 1;
                        },
                        recognize: function (t) {
                            var e = this.session;
                            if (!e.stopped) {
                                var n;
                                this.touchAction.preventDefaults(t);
                                var r = this.recognizers,
                                    o = e.curRecognizer;
                                (!o || (o && o.state & Ot)) && (o = e.curRecognizer = null);
                                for (var i = 0; i < r.length; ) (n = r[i]), 2 === e.stopped || (o && n != o && !n.canRecognizeWith(o)) ? n.reset() : n.recognize(t), !o && n.state & (Nt | Rt | Dt) && (o = e.curRecognizer = n), i++;
                            }
                        },
                        get: function (t) {
                            if (t instanceof Vt) return t;
                            for (var e = this.recognizers, n = 0; n < e.length; n++) if (e[n].options.event == t) return e[n];
                            return null;
                        },
                        add: function (t) {
                            if (y(t, "add", this)) return this;
                            var e = this.get(t.options.event);
                            return e && this.remove(e), this.recognizers.push(t), (t.manager = this), this.touchAction.update(), t;
                        },
                        remove: function (t) {
                            if (y(t, "remove", this)) return this;
                            if ((t = this.get(t))) {
                                var e = this.recognizers,
                                    n = P(e, t);
                                -1 !== n && (e.splice(n, 1), this.touchAction.update());
                            }
                            return this;
                        },
                        on: function (t, e) {
                            if (t !== s && e !== s) {
                                var n = this.handlers;
                                return (
                                    g(I(t), function (t) {
                                        (n[t] = n[t] || []), n[t].push(e);
                                    }),
                                    this
                                );
                            }
                        },
                        off: function (t, e) {
                            if (t !== s) {
                                var n = this.handlers;
                                return (
                                    g(I(t), function (t) {
                                        e ? n[t] && n[t].splice(P(n[t], e), 1) : delete n[t];
                                    }),
                                    this
                                );
                            }
                        },
                        emit: function (t, e) {
                            this.options.domEvents &&
                                (function (t, e) {
                                    var n = i.createEvent("Event");
                                    n.initEvent(t, !0, !0), (n.gesture = e), e.target.dispatchEvent(n);
                                })(t, e);
                            var n = this.handlers[t] && this.handlers[t].slice();
                            if (n && n.length) {
                                (e.type = t),
                                    (e.preventDefault = function () {
                                        e.srcEvent.preventDefault();
                                    });
                                for (var r = 0; r < n.length; ) n[r](e), r++;
                            }
                        },
                        destroy: function () {
                            this.element && Yt(this, !1), (this.handlers = {}), (this.session = {}), this.input.destroy(), (this.element = null);
                        },
                    }),
                    u(Wt, {
                        INPUT_START: H,
                        INPUT_MOVE: 2,
                        INPUT_END: F,
                        INPUT_CANCEL: z,
                        STATE_POSSIBLE: Pt,
                        STATE_BEGAN: Nt,
                        STATE_CHANGED: Rt,
                        STATE_ENDED: Dt,
                        STATE_RECOGNIZED: Ot,
                        STATE_CANCELLED: Mt,
                        STATE_FAILED: 32,
                        DIRECTION_NONE: B,
                        DIRECTION_LEFT: q,
                        DIRECTION_RIGHT: G,
                        DIRECTION_UP: Z,
                        DIRECTION_DOWN: W,
                        DIRECTION_HORIZONTAL: Q,
                        DIRECTION_VERTICAL: Y,
                        DIRECTION_ALL: K,
                        Manager: Qt,
                        Input: J,
                        TouchAction: It,
                        TouchInput: Ct,
                        MouseInput: ct,
                        PointerEventInput: vt,
                        TouchMouseInput: St,
                        SingleTouchInput: bt,
                        Recognizer: Vt,
                        AttrRecognizer: Ht,
                        Tap: Zt,
                        Pan: Ft,
                        Swipe: Gt,
                        Pinch: zt,
                        Rotate: qt,
                        Press: Bt,
                        on: x,
                        off: T,
                        each: g,
                        merge: w,
                        extend: b,
                        assign: u,
                        inherit: _,
                        bindFn: C,
                        prefixed: D,
                    }),
                    ((void 0 !== o ? o : "undefined" != typeof self ? self : {}).Hammer = Wt),
                    (r = function () {
                        return Wt;
                    }.call(e, n, e, t)) === s || (t.exports = r);
            })(window, document);
        },
        zUnb: function (t, e, n) {
            "use strict";
            n.r(e);
            var r = function (t, e) {
                return (r =
                    Object.setPrototypeOf ||
                    ({ __proto__: [] } instanceof Array &&
                        function (t, e) {
                            t.__proto__ = e;
                        }) ||
                    function (t, e) {
                        for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]);
                    })(t, e);
            };
            function o(t, e) {
                function n() {
                    this.constructor = t;
                }
                r(t, e), (t.prototype = null === e ? Object.create(e) : ((n.prototype = e.prototype), new n()));
            }
            var i = function () {
                return (i =
                    Object.assign ||
                    function (t) {
                        for (var e, n = 1, r = arguments.length; n < r; n++) for (var o in (e = arguments[n])) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
                        return t;
                    }).apply(this, arguments);
            };
            function a(t, e, n, r) {
                var o,
                    i = arguments.length,
                    a = i < 3 ? e : null === r ? (r = Object.getOwnPropertyDescriptor(e, n)) : r;
                if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(t, e, n, r);
                else for (var s = t.length - 1; s >= 0; s--) (o = t[s]) && (a = (i < 3 ? o(a) : i > 3 ? o(e, n, a) : o(e, n)) || a);
                return i > 3 && a && Object.defineProperty(e, n, a), a;
            }
            function s(t, e) {
                return function (n, r) {
                    e(n, r, t);
                };
            }
            function u(t, e) {
                if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(t, e);
            }
            function l(t) {
                var e = "function" == typeof Symbol && t[Symbol.iterator],
                    n = 0;
                return e
                    ? e.call(t)
                    : {
                          next: function () {
                              return t && n >= t.length && (t = void 0), { value: t && t[n++], done: !t };
                          },
                      };
            }
            function c(t, e) {
                var n = "function" == typeof Symbol && t[Symbol.iterator];
                if (!n) return t;
                var r,
                    o,
                    i = n.call(t),
                    a = [];
                try {
                    for (; (void 0 === e || e-- > 0) && !(r = i.next()).done; ) a.push(r.value);
                } catch (t) {
                    o = { error: t };
                } finally {
                    try {
                        r && !r.done && (n = i.return) && n.call(i);
                    } finally {
                        if (o) throw o.error;
                    }
                }
                return a;
            }
            function h() {
                for (var t = [], e = 0; e < arguments.length; e++) t = t.concat(c(arguments[e]));
                return t;
            }
            function p(t) {
                return "function" == typeof t;
            }
            var f = !1,
                d = {
                    Promise: void 0,
                    set useDeprecatedSynchronousErrorHandling(t) {
                        f = t;
                    },
                    get useDeprecatedSynchronousErrorHandling() {
                        return f;
                    },
                };
            function v(t) {
                setTimeout(function () {
                    throw t;
                });
            }
            var y = {
                    closed: !0,
                    next: function (t) {},
                    error: function (t) {
                        if (d.useDeprecatedSynchronousErrorHandling) throw t;
                        v(t);
                    },
                    complete: function () {},
                },
                g =
                    Array.isArray ||
                    function (t) {
                        return t && "number" == typeof t.length;
                    };
            function m(t) {
                return null != t && "object" == typeof t;
            }
            var b,
                w = { e: {} };
            function _() {
                try {
                    return b.apply(this, arguments);
                } catch (t) {
                    return (w.e = t), w;
                }
            }
            function C(t) {
                return (b = t), _;
            }
            function E(t) {
                return (
                    Error.call(this),
                    (this.message = t
                        ? t.length +
                          " errors occurred during unsubscription:\n" +
                          t
                              .map(function (t, e) {
                                  return e + 1 + ") " + t.toString();
                              })
                              .join("\n  ")
                        : ""),
                    (this.name = "UnsubscriptionError"),
                    (this.errors = t),
                    this
                );
            }
            E.prototype = Object.create(Error.prototype);
            var S = E,
                x = (function () {
                    function t(t) {
                        (this.closed = !1), (this._parent = null), (this._parents = null), (this._subscriptions = null), t && (this._unsubscribe = t);
                    }
                    var e;
                    return (
                        (t.prototype.unsubscribe = function () {
                            var t,
                                e = !1;
                            if (!this.closed) {
                                var n = this._parent,
                                    r = this._parents,
                                    o = this._unsubscribe,
                                    i = this._subscriptions;
                                (this.closed = !0), (this._parent = null), (this._parents = null), (this._subscriptions = null);
                                for (var a = -1, s = r ? r.length : 0; n; ) n.remove(this), (n = (++a < s && r[a]) || null);
                                if ((p(o) && C(o).call(this) === w && ((e = !0), (t = t || (w.e instanceof S ? T(w.e.errors) : [w.e]))), g(i)))
                                    for (a = -1, s = i.length; ++a < s; ) {
                                        var u = i[a];
                                        if (m(u) && C(u.unsubscribe).call(u) === w) {
                                            (e = !0), (t = t || []);
                                            var l = w.e;
                                            l instanceof S ? (t = t.concat(T(l.errors))) : t.push(l);
                                        }
                                    }
                                if (e) throw new S(t);
                            }
                        }),
                        (t.prototype.add = function (e) {
                            if (!e || e === t.EMPTY) return t.EMPTY;
                            if (e === this) return this;
                            var n = e;
                            switch (typeof e) {
                                case "function":
                                    n = new t(e);
                                case "object":
                                    if (n.closed || "function" != typeof n.unsubscribe) return n;
                                    if (this.closed) return n.unsubscribe(), n;
                                    if ("function" != typeof n._addParent) {
                                        var r = n;
                                        (n = new t())._subscriptions = [r];
                                    }
                                    break;
                                default:
                                    throw new Error("unrecognized teardown " + e + " added to Subscription.");
                            }
                            return (this._subscriptions || (this._subscriptions = [])).push(n), n._addParent(this), n;
                        }),
                        (t.prototype.remove = function (t) {
                            var e = this._subscriptions;
                            if (e) {
                                var n = e.indexOf(t);
                                -1 !== n && e.splice(n, 1);
                            }
                        }),
                        (t.prototype._addParent = function (t) {
                            var e = this._parent,
                                n = this._parents;
                            e && e !== t ? (n ? -1 === n.indexOf(t) && n.push(t) : (this._parents = [t])) : (this._parent = t);
                        }),
                        (t.EMPTY = (((e = new t()).closed = !0), e)),
                        t
                    );
                })();
            function T(t) {
                return t.reduce(function (t, e) {
                    return t.concat(e instanceof S ? e.errors : e);
                }, []);
            }
            var k = "function" == typeof Symbol ? Symbol("rxSubscriber") : "@@rxSubscriber_" + Math.random(),
                A = (function (t) {
                    function e(n, r, o) {
                        var i = t.call(this) || this;
                        switch (((i.syncErrorValue = null), (i.syncErrorThrown = !1), (i.syncErrorThrowable = !1), (i.isStopped = !1), (i._parentSubscription = null), arguments.length)) {
                            case 0:
                                i.destination = y;
                                break;
                            case 1:
                                if (!n) {
                                    i.destination = y;
                                    break;
                                }
                                if ("object" == typeof n) {
                                    n instanceof e ? ((i.syncErrorThrowable = n.syncErrorThrowable), (i.destination = n), n.add(i)) : ((i.syncErrorThrowable = !0), (i.destination = new I(i, n)));
                                    break;
                                }
                            default:
                                (i.syncErrorThrowable = !0), (i.destination = new I(i, n, r, o));
                        }
                        return i;
                    }
                    return (
                        o(e, t),
                        (e.prototype[k] = function () {
                            return this;
                        }),
                        (e.create = function (t, n, r) {
                            var o = new e(t, n, r);
                            return (o.syncErrorThrowable = !1), o;
                        }),
                        (e.prototype.next = function (t) {
                            this.isStopped || this._next(t);
                        }),
                        (e.prototype.error = function (t) {
                            this.isStopped || ((this.isStopped = !0), this._error(t));
                        }),
                        (e.prototype.complete = function () {
                            this.isStopped || ((this.isStopped = !0), this._complete());
                        }),
                        (e.prototype.unsubscribe = function () {
                            this.closed || ((this.isStopped = !0), t.prototype.unsubscribe.call(this));
                        }),
                        (e.prototype._next = function (t) {
                            this.destination.next(t);
                        }),
                        (e.prototype._error = function (t) {
                            this.destination.error(t), this.unsubscribe();
                        }),
                        (e.prototype._complete = function () {
                            this.destination.complete(), this.unsubscribe();
                        }),
                        (e.prototype._unsubscribeAndRecycle = function () {
                            var t = this._parent,
                                e = this._parents;
                            return (this._parent = null), (this._parents = null), this.unsubscribe(), (this.closed = !1), (this.isStopped = !1), (this._parent = t), (this._parents = e), (this._parentSubscription = null), this;
                        }),
                        e
                    );
                })(x),
                I = (function (t) {
                    function e(e, n, r, o) {
                        var i,
                            a = t.call(this) || this;
                        a._parentSubscriber = e;
                        var s = a;
                        return (
                            p(n) ? (i = n) : n && ((i = n.next), (r = n.error), (o = n.complete), n !== y && (p((s = Object.create(n)).unsubscribe) && a.add(s.unsubscribe.bind(s)), (s.unsubscribe = a.unsubscribe.bind(a)))),
                            (a._context = s),
                            (a._next = i),
                            (a._error = r),
                            (a._complete = o),
                            a
                        );
                    }
                    return (
                        o(e, t),
                        (e.prototype.next = function (t) {
                            if (!this.isStopped && this._next) {
                                var e = this._parentSubscriber;
                                d.useDeprecatedSynchronousErrorHandling && e.syncErrorThrowable ? this.__tryOrSetError(e, this._next, t) && this.unsubscribe() : this.__tryOrUnsub(this._next, t);
                            }
                        }),
                        (e.prototype.error = function (t) {
                            if (!this.isStopped) {
                                var e = this._parentSubscriber,
                                    n = d.useDeprecatedSynchronousErrorHandling;
                                if (this._error) n && e.syncErrorThrowable ? (this.__tryOrSetError(e, this._error, t), this.unsubscribe()) : (this.__tryOrUnsub(this._error, t), this.unsubscribe());
                                else if (e.syncErrorThrowable) n ? ((e.syncErrorValue = t), (e.syncErrorThrown = !0)) : v(t), this.unsubscribe();
                                else {
                                    if ((this.unsubscribe(), n)) throw t;
                                    v(t);
                                }
                            }
                        }),
                        (e.prototype.complete = function () {
                            var t = this;
                            if (!this.isStopped) {
                                var e = this._parentSubscriber;
                                if (this._complete) {
                                    var n = function () {
                                        return t._complete.call(t._context);
                                    };
                                    d.useDeprecatedSynchronousErrorHandling && e.syncErrorThrowable ? (this.__tryOrSetError(e, n), this.unsubscribe()) : (this.__tryOrUnsub(n), this.unsubscribe());
                                } else this.unsubscribe();
                            }
                        }),
                        (e.prototype.__tryOrUnsub = function (t, e) {
                            try {
                                t.call(this._context, e);
                            } catch (t) {
                                if ((this.unsubscribe(), d.useDeprecatedSynchronousErrorHandling)) throw t;
                                v(t);
                            }
                        }),
                        (e.prototype.__tryOrSetError = function (t, e, n) {
                            if (!d.useDeprecatedSynchronousErrorHandling) throw new Error("bad call");
                            try {
                                e.call(this._context, n);
                            } catch (e) {
                                return d.useDeprecatedSynchronousErrorHandling ? ((t.syncErrorValue = e), (t.syncErrorThrown = !0), !0) : (v(e), !0);
                            }
                            return !1;
                        }),
                        (e.prototype._unsubscribe = function () {
                            var t = this._parentSubscriber;
                            (this._context = null), (this._parentSubscriber = null), t.unsubscribe();
                        }),
                        e
                    );
                })(A),
                P = ("function" == typeof Symbol && Symbol.observable) || "@@observable";
            function N() {}
            function R() {
                for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
                return D(t);
            }
            function D(t) {
                return t
                    ? 1 === t.length
                        ? t[0]
                        : function (e) {
                              return t.reduce(function (t, e) {
                                  return e(t);
                              }, e);
                          }
                    : N;
            }
            var O = (function () {
                function t(t) {
                    (this._isScalar = !1), t && (this._subscribe = t);
                }
                return (
                    (t.prototype.lift = function (e) {
                        var n = new t();
                        return (n.source = this), (n.operator = e), n;
                    }),
                    (t.prototype.subscribe = function (t, e, n) {
                        var r = this.operator,
                            o = (function (t, e, n) {
                                if (t) {
                                    if (t instanceof A) return t;
                                    if (t[k]) return t[k]();
                                }
                                return t || e || n ? new A(t, e, n) : new A(y);
                            })(t, e, n);
                        if (
                            (r ? r.call(o, this.source) : o.add(this.source || (d.useDeprecatedSynchronousErrorHandling && !o.syncErrorThrowable) ? this._subscribe(o) : this._trySubscribe(o)),
                            d.useDeprecatedSynchronousErrorHandling && o.syncErrorThrowable && ((o.syncErrorThrowable = !1), o.syncErrorThrown))
                        )
                            throw o.syncErrorValue;
                        return o;
                    }),
                    (t.prototype._trySubscribe = function (t) {
                        try {
                            return this._subscribe(t);
                        } catch (e) {
                            d.useDeprecatedSynchronousErrorHandling && ((t.syncErrorThrown = !0), (t.syncErrorValue = e)),
                                (function (t) {
                                    for (; t; ) {
                                        var e = t.destination;
                                        if (t.closed || t.isStopped) return !1;
                                        t = e && e instanceof A ? e : null;
                                    }
                                    return !0;
                                })(t)
                                    ? t.error(e)
                                    : console.warn(e);
                        }
                    }),
                    (t.prototype.forEach = function (t, e) {
                        var n = this;
                        return new (e = M(e))(function (e, r) {
                            var o;
                            o = n.subscribe(
                                function (e) {
                                    try {
                                        t(e);
                                    } catch (t) {
                                        r(t), o && o.unsubscribe();
                                    }
                                },
                                r,
                                e
                            );
                        });
                    }),
                    (t.prototype._subscribe = function (t) {
                        var e = this.source;
                        return e && e.subscribe(t);
                    }),
                    (t.prototype[P] = function () {
                        return this;
                    }),
                    (t.prototype.pipe = function () {
                        for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
                        return 0 === t.length ? this : D(t)(this);
                    }),
                    (t.prototype.toPromise = function (t) {
                        var e = this;
                        return new (t = M(t))(function (t, n) {
                            var r;
                            e.subscribe(
                                function (t) {
                                    return (r = t);
                                },
                                function (t) {
                                    return n(t);
                                },
                                function () {
                                    return t(r);
                                }
                            );
                        });
                    }),
                    (t.create = function (e) {
                        return new t(e);
                    }),
                    t
                );
            })();
            function M(t) {
                if ((t || (t = d.Promise || Promise), !t)) throw new Error("no Promise impl found");
                return t;
            }
            function V(t) {
                return t && "function" == typeof t.schedule;
            }
            var j = (function (t) {
                    function e(e, n, r) {
                        var o = t.call(this) || this;
                        return (o.parent = e), (o.outerValue = n), (o.outerIndex = r), (o.index = 0), o;
                    }
                    return (
                        o(e, t),
                        (e.prototype._next = function (t) {
                            this.parent.notifyNext(this.outerValue, t, this.outerIndex, this.index++, this);
                        }),
                        (e.prototype._error = function (t) {
                            this.parent.notifyError(t, this), this.unsubscribe();
                        }),
                        (e.prototype._complete = function () {
                            this.parent.notifyComplete(this), this.unsubscribe();
                        }),
                        e
                    );
                })(A),
                U = function (t) {
                    return function (e) {
                        for (var n = 0, r = t.length; n < r && !e.closed; n++) e.next(t[n]);
                        e.closed || e.complete();
                    };
                },
                L = function (t) {
                    return function (e) {
                        return (
                            t
                                .then(
                                    function (t) {
                                        e.closed || (e.next(t), e.complete());
                                    },
                                    function (t) {
                                        return e.error(t);
                                    }
                                )
                                .then(null, v),
                            e
                        );
                    };
                },
                H = (function () {
                    return "function" == typeof Symbol && Symbol.iterator ? Symbol.iterator : "@@iterator";
                })(),
                F = function (t) {
                    return function (e) {
                        for (var n = t[H](); ; ) {
                            var r = n.next();
                            if (r.done) {
                                e.complete();
                                break;
                            }
                            if ((e.next(r.value), e.closed)) break;
                        }
                        return (
                            "function" == typeof n.return &&
                                e.add(function () {
                                    n.return && n.return();
                                }),
                            e
                        );
                    };
                },
                z = function (t) {
                    return function (e) {
                        var n = t[P]();
                        if ("function" != typeof n.subscribe) throw new TypeError("Provided object does not correctly implement Symbol.observable");
                        return n.subscribe(e);
                    };
                },
                B = function (t) {
                    return t && "number" == typeof t.length && "function" != typeof t;
                };
            function q(t) {
                return t && "function" != typeof t.subscribe && "function" == typeof t.then;
            }
            var G = function (t) {
                if (t instanceof O)
                    return function (e) {
                        return t._isScalar ? (e.next(t.value), void e.complete()) : t.subscribe(e);
                    };
                if (t && "function" == typeof t[P]) return z(t);
                if (B(t)) return U(t);
                if (q(t)) return L(t);
                if (t && "function" == typeof t[H]) return F(t);
                var e = m(t) ? "an invalid object" : "'" + t + "'";
                throw new TypeError("You provided " + e + " where a stream was expected. You can provide an Observable, Promise, Array, or Iterable.");
            };
            function Z(t, e, n, r, o) {
                if ((void 0 === o && (o = new j(t, n, r)), !o.closed)) return G(e)(o);
            }
            var W = (function (t) {
                function e() {
                    return (null !== t && t.apply(this, arguments)) || this;
                }
                return (
                    o(e, t),
                    (e.prototype.notifyNext = function (t, e, n, r, o) {
                        this.destination.next(e);
                    }),
                    (e.prototype.notifyError = function (t, e) {
                        this.destination.error(t);
                    }),
                    (e.prototype.notifyComplete = function (t) {
                        this.destination.complete();
                    }),
                    e
                );
            })(A);
            function Q(t, e) {
                return function (n) {
                    if ("function" != typeof t) throw new TypeError("argument is not a function. Are you looking for `mapTo()`?");
                    return n.lift(new Y(t, e));
                };
            }
            var Y = (function () {
                    function t(t, e) {
                        (this.project = t), (this.thisArg = e);
                    }
                    return (
                        (t.prototype.call = function (t, e) {
                            return e.subscribe(new K(t, this.project, this.thisArg));
                        }),
                        t
                    );
                })(),
                K = (function (t) {
                    function e(e, n, r) {
                        var o = t.call(this, e) || this;
                        return (o.project = n), (o.count = 0), (o.thisArg = r || o), o;
                    }
                    return (
                        o(e, t),
                        (e.prototype._next = function (t) {
                            var e;
                            try {
                                e = this.project.call(this.thisArg, t, this.count++);
                            } catch (t) {
                                return void this.destination.error(t);
                            }
                            this.destination.next(e);
                        }),
                        e
                    );
                })(A);
            function X(t, e) {
                return new O(
                    e
                        ? function (n) {
                              var r = new x(),
                                  o = 0;
                              return (
                                  r.add(
                                      e.schedule(function () {
                                          o !== t.length ? (n.next(t[o++]), n.closed || r.add(this.schedule())) : n.complete();
                                      })
                                  ),
                                  r
                              );
                          }
                        : U(t)
                );
            }
            function $(t, e) {
                if (!e) return t instanceof O ? t : new O(G(t));
                if (null != t) {
                    if (
                        (function (t) {
                            return t && "function" == typeof t[P];
                        })(t)
                    )
                        return (function (t, e) {
                            return new O(
                                e
                                    ? function (n) {
                                          var r = new x();
                                          return (
                                              r.add(
                                                  e.schedule(function () {
                                                      var o = t[P]();
                                                      r.add(
                                                          o.subscribe({
                                                              next: function (t) {
                                                                  r.add(
                                                                      e.schedule(function () {
                                                                          return n.next(t);
                                                                      })
                                                                  );
                                                              },
                                                              error: function (t) {
                                                                  r.add(
                                                                      e.schedule(function () {
                                                                          return n.error(t);
                                                                      })
                                                                  );
                                                              },
                                                              complete: function () {
                                                                  r.add(
                                                                      e.schedule(function () {
                                                                          return n.complete();
                                                                      })
                                                                  );
                                                              },
                                                          })
                                                      );
                                                  })
                                              ),
                                              r
                                          );
                                      }
                                    : z(t)
                            );
                        })(t, e);
                    if (q(t))
                        return (function (t, e) {
                            return new O(
                                e
                                    ? function (n) {
                                          var r = new x();
                                          return (
                                              r.add(
                                                  e.schedule(function () {
                                                      return t.then(
                                                          function (t) {
                                                              r.add(
                                                                  e.schedule(function () {
                                                                      n.next(t),
                                                                          r.add(
                                                                              e.schedule(function () {
                                                                                  return n.complete();
                                                                              })
                                                                          );
                                                                  })
                                                              );
                                                          },
                                                          function (t) {
                                                              r.add(
                                                                  e.schedule(function () {
                                                                      return n.error(t);
                                                                  })
                                                              );
                                                          }
                                                      );
                                                  })
                                              ),
                                              r
                                          );
                                      }
                                    : L(t)
                            );
                        })(t, e);
                    if (B(t)) return X(t, e);
                    if (
                        (function (t) {
                            return t && "function" == typeof t[H];
                        })(t) ||
                        "string" == typeof t
                    )
                        return (function (t, e) {
                            if (!t) throw new Error("Iterable cannot be null");
                            return new O(
                                e
                                    ? function (n) {
                                          var r,
                                              o = new x();
                                          return (
                                              o.add(function () {
                                                  r && "function" == typeof r.return && r.return();
                                              }),
                                              o.add(
                                                  e.schedule(function () {
                                                      (r = t[H]()),
                                                          o.add(
                                                              e.schedule(function () {
                                                                  if (!n.closed) {
                                                                      var t, e;
                                                                      try {
                                                                          var o = r.next();
                                                                          (t = o.value), (e = o.done);
                                                                      } catch (t) {
                                                                          return void n.error(t);
                                                                      }
                                                                      e ? n.complete() : (n.next(t), this.schedule());
                                                                  }
                                                              })
                                                          );
                                                  })
                                              ),
                                              o
                                          );
                                      }
                                    : F(t)
                            );
                        })(t, e);
                }
                throw new TypeError(((null !== t && typeof t) || t) + " is not observable");
            }
            function J(t, e, n) {
                return (
                    void 0 === n && (n = Number.POSITIVE_INFINITY),
                    "function" == typeof e
                        ? function (r) {
                              return r.pipe(
                                  J(function (n, r) {
                                      return $(t(n, r)).pipe(
                                          Q(function (t, o) {
                                              return e(n, t, r, o);
                                          })
                                      );
                                  }, n)
                              );
                          }
                        : ("number" == typeof e && (n = e),
                          function (e) {
                              return e.lift(new tt(t, n));
                          })
                );
            }
            var tt = (function () {
                    function t(t, e) {
                        void 0 === e && (e = Number.POSITIVE_INFINITY), (this.project = t), (this.concurrent = e);
                    }
                    return (
                        (t.prototype.call = function (t, e) {
                            return e.subscribe(new et(t, this.project, this.concurrent));
                        }),
                        t
                    );
                })(),
                et = (function (t) {
                    function e(e, n, r) {
                        void 0 === r && (r = Number.POSITIVE_INFINITY);
                        var o = t.call(this, e) || this;
                        return (o.project = n), (o.concurrent = r), (o.hasCompleted = !1), (o.buffer = []), (o.active = 0), (o.index = 0), o;
                    }
                    return (
                        o(e, t),
                        (e.prototype._next = function (t) {
                            this.active < this.concurrent ? this._tryNext(t) : this.buffer.push(t);
                        }),
                        (e.prototype._tryNext = function (t) {
                            var e,
                                n = this.index++;
                            try {
                                e = this.project(t, n);
                            } catch (t) {
                                return void this.destination.error(t);
                            }
                            this.active++, this._innerSub(e, t, n);
                        }),
                        (e.prototype._innerSub = function (t, e, n) {
                            var r = new j(this, void 0, void 0);
                            this.destination.add(r), Z(this, t, e, n, r);
                        }),
                        (e.prototype._complete = function () {
                            (this.hasCompleted = !0), 0 === this.active && 0 === this.buffer.length && this.destination.complete(), this.unsubscribe();
                        }),
                        (e.prototype.notifyNext = function (t, e, n, r, o) {
                            this.destination.next(e);
                        }),
                        (e.prototype.notifyComplete = function (t) {
                            var e = this.buffer;
                            this.remove(t), this.active--, e.length > 0 ? this._next(e.shift()) : 0 === this.active && this.hasCompleted && this.destination.complete();
                        }),
                        e
                    );
                })(W);
            function nt(t) {
                return t;
            }
            function rt(t) {
                return void 0 === t && (t = Number.POSITIVE_INFINITY), J(nt, t);
            }
            function ot() {
                return Error.call(this), (this.message = "object unsubscribed"), (this.name = "ObjectUnsubscribedError"), this;
            }
            ot.prototype = Object.create(Error.prototype);
            var it = ot,
                at = (function (t) {
                    function e(e, n) {
                        var r = t.call(this) || this;
                        return (r.subject = e), (r.subscriber = n), (r.closed = !1), r;
                    }
                    return (
                        o(e, t),
                        (e.prototype.unsubscribe = function () {
                            if (!this.closed) {
                                this.closed = !0;
                                var t = this.subject,
                                    e = t.observers;
                                if (((this.subject = null), e && 0 !== e.length && !t.isStopped && !t.closed)) {
                                    var n = e.indexOf(this.subscriber);
                                    -1 !== n && e.splice(n, 1);
                                }
                            }
                        }),
                        e
                    );
                })(x),
                st = (function (t) {
                    function e(e) {
                        var n = t.call(this, e) || this;
                        return (n.destination = e), n;
                    }
                    return o(e, t), e;
                })(A),
                ut = (function (t) {
                    function e() {
                        var e = t.call(this) || this;
                        return (e.observers = []), (e.closed = !1), (e.isStopped = !1), (e.hasError = !1), (e.thrownError = null), e;
                    }
                    return (
                        o(e, t),
                        (e.prototype[k] = function () {
                            return new st(this);
                        }),
                        (e.prototype.lift = function (t) {
                            var e = new lt(this, this);
                            return (e.operator = t), e;
                        }),
                        (e.prototype.next = function (t) {
                            if (this.closed) throw new it();
                            if (!this.isStopped) for (var e = this.observers, n = e.length, r = e.slice(), o = 0; o < n; o++) r[o].next(t);
                        }),
                        (e.prototype.error = function (t) {
                            if (this.closed) throw new it();
                            (this.hasError = !0), (this.thrownError = t), (this.isStopped = !0);
                            for (var e = this.observers, n = e.length, r = e.slice(), o = 0; o < n; o++) r[o].error(t);
                            this.observers.length = 0;
                        }),
                        (e.prototype.complete = function () {
                            if (this.closed) throw new it();
                            this.isStopped = !0;
                            for (var t = this.observers, e = t.length, n = t.slice(), r = 0; r < e; r++) n[r].complete();
                            this.observers.length = 0;
                        }),
                        (e.prototype.unsubscribe = function () {
                            (this.isStopped = !0), (this.closed = !0), (this.observers = null);
                        }),
                        (e.prototype._trySubscribe = function (e) {
                            if (this.closed) throw new it();
                            return t.prototype._trySubscribe.call(this, e);
                        }),
                        (e.prototype._subscribe = function (t) {
                            if (this.closed) throw new it();
                            return this.hasError ? (t.error(this.thrownError), x.EMPTY) : this.isStopped ? (t.complete(), x.EMPTY) : (this.observers.push(t), new at(this, t));
                        }),
                        (e.prototype.asObservable = function () {
                            var t = new O();
                            return (t.source = this), t;
                        }),
                        (e.create = function (t, e) {
                            return new lt(t, e);
                        }),
                        e
                    );
                })(O),
                lt = (function (t) {
                    function e(e, n) {
                        var r = t.call(this) || this;
                        return (r.destination = e), (r.source = n), r;
                    }
                    return (
                        o(e, t),
                        (e.prototype.next = function (t) {
                            var e = this.destination;
                            e && e.next && e.next(t);
                        }),
                        (e.prototype.error = function (t) {
                            var e = this.destination;
                            e && e.error && this.destination.error(t);
                        }),
                        (e.prototype.complete = function () {
                            var t = this.destination;
                            t && t.complete && this.destination.complete();
                        }),
                        (e.prototype._subscribe = function (t) {
                            return this.source ? this.source.subscribe(t) : x.EMPTY;
                        }),
                        e
                    );
                })(ut);
            function ct() {
                return function (t) {
                    return t.lift(new ht(t));
                };
            }
            var ht = (function () {
                    function t(t) {
                        this.connectable = t;
                    }
                    return (
                        (t.prototype.call = function (t, e) {
                            var n = this.connectable;
                            n._refCount++;
                            var r = new pt(t, n),
                                o = e.subscribe(r);
                            return r.closed || (r.connection = n.connect()), o;
                        }),
                        t
                    );
                })(),
                pt = (function (t) {
                    function e(e, n) {
                        var r = t.call(this, e) || this;
                        return (r.connectable = n), r;
                    }
                    return (
                        o(e, t),
                        (e.prototype._unsubscribe = function () {
                            var t = this.connectable;
                            if (t) {
                                this.connectable = null;
                                var e = t._refCount;
                                if (e <= 0) this.connection = null;
                                else if (((t._refCount = e - 1), e > 1)) this.connection = null;
                                else {
                                    var n = this.connection,
                                        r = t._connection;
                                    (this.connection = null), !r || (n && r !== n) || r.unsubscribe();
                                }
                            } else this.connection = null;
                        }),
                        e
                    );
                })(A),
                ft = (function (t) {
                    function e(e, n) {
                        var r = t.call(this) || this;
                        return (r.source = e), (r.subjectFactory = n), (r._refCount = 0), (r._isComplete = !1), r;
                    }
                    return (
                        o(e, t),
                        (e.prototype._subscribe = function (t) {
                            return this.getSubject().subscribe(t);
                        }),
                        (e.prototype.getSubject = function () {
                            var t = this._subject;
                            return (t && !t.isStopped) || (this._subject = this.subjectFactory()), this._subject;
                        }),
                        (e.prototype.connect = function () {
                            var t = this._connection;
                            return (
                                t || ((this._isComplete = !1), (t = this._connection = new x()).add(this.source.subscribe(new vt(this.getSubject(), this))), t.closed ? ((this._connection = null), (t = x.EMPTY)) : (this._connection = t)), t
                            );
                        }),
                        (e.prototype.refCount = function () {
                            return ct()(this);
                        }),
                        e
                    );
                })(O).prototype,
                dt = {
                    operator: { value: null },
                    _refCount: { value: 0, writable: !0 },
                    _subject: { value: null, writable: !0 },
                    _connection: { value: null, writable: !0 },
                    _subscribe: { value: ft._subscribe },
                    _isComplete: { value: ft._isComplete, writable: !0 },
                    getSubject: { value: ft.getSubject },
                    connect: { value: ft.connect },
                    refCount: { value: ft.refCount },
                },
                vt = (function (t) {
                    function e(e, n) {
                        var r = t.call(this, e) || this;
                        return (r.connectable = n), r;
                    }
                    return (
                        o(e, t),
                        (e.prototype._error = function (e) {
                            this._unsubscribe(), t.prototype._error.call(this, e);
                        }),
                        (e.prototype._complete = function () {
                            (this.connectable._isComplete = !0), this._unsubscribe(), t.prototype._complete.call(this);
                        }),
                        (e.prototype._unsubscribe = function () {
                            var t = this.connectable;
                            if (t) {
                                this.connectable = null;
                                var e = t._connection;
                                (t._refCount = 0), (t._subject = null), (t._connection = null), e && e.unsubscribe();
                            }
                        }),
                        e
                    );
                })(st);
            function yt() {
                return new ut();
            }
            function gt(t) {
                return { providedIn: t.providedIn || null, factory: t.factory, value: void 0 };
            }
            var mt = (function () {
                    function t(t, e) {
                        (this._desc = t), (this.ngMetadataName = "InjectionToken"), (this.ngInjectableDef = void 0 !== e ? gt({ providedIn: e.providedIn || "root", factory: e.factory }) : void 0);
                    }
                    return (
                        (t.prototype.toString = function () {
                            return "InjectionToken " + this._desc;
                        }),
                        t
                    );
                })(),
                bt = "__parameters__";
            function wt(t, e, n) {
                var r = (function (t) {
                    return function () {
                        for (var e = [], n = 0; n < arguments.length; n++) e[n] = arguments[n];
                        if (t) {
                            var r = t.apply(void 0, h(e));
                            for (var o in r) this[o] = r[o];
                        }
                    };
                })(e);
                function o() {
                    for (var t, e = [], n = 0; n < arguments.length; n++) e[n] = arguments[n];
                    if (this instanceof o) return r.apply(this, e), this;
                    var i = new ((t = o).bind.apply(t, h([void 0], e)))();
                    return (a.annotation = i), a;
                    function a(t, e, n) {
                        for (var r = t.hasOwnProperty(bt) ? t[bt] : Object.defineProperty(t, bt, { value: [] })[bt]; r.length <= n; ) r.push(null);
                        return (r[n] = r[n] || []).push(i), t;
                    }
                }
                return n && (o.prototype = Object.create(n.prototype)), (o.prototype.ngMetadataName = t), (o.annotationCls = o), o;
            }
            var _t = new mt("AnalyzeForEntryComponents"),
                Ct = wt("Attribute", function (t) {
                    return { attributeName: t };
                });
            Function;
            var Et = "undefined" != typeof window && window,
                St = "undefined" != typeof self && "undefined" != typeof WorkerGlobalScope && self instanceof WorkerGlobalScope && self,
                xt = ("undefined" != typeof global && global) || Et || St,
                Tt = Promise.resolve(0),
                kt = null;
            function At() {
                if (!kt) {
                    var t = xt.Symbol;
                    if (t && t.iterator) kt = t.iterator;
                    else
                        for (var e = Object.getOwnPropertyNames(Map.prototype), n = 0; n < e.length; ++n) {
                            var r = e[n];
                            "entries" !== r && "size" !== r && Map.prototype[r] === Map.prototype.entries && (kt = r);
                        }
                }
                return kt;
            }
            function It(t) {
                "undefined" == typeof Zone
                    ? Tt.then(function () {
                          t && t.apply(null, null);
                      })
                    : Zone.current.scheduleMicroTask("scheduleMicrotask", t);
            }
            function Pt(t, e) {
                return t === e || ("number" == typeof t && "number" == typeof e && isNaN(t) && isNaN(e));
            }
            function Nt(t) {
                if ("string" == typeof t) return t;
                if (t instanceof Array) return "[" + t.map(Nt).join(", ") + "]";
                if (null == t) return "" + t;
                if (t.overriddenName) return "" + t.overriddenName;
                if (t.name) return "" + t.name;
                var e = t.toString();
                if (null == e) return "" + e;
                var n = e.indexOf("\n");
                return -1 === n ? e : e.substring(0, n);
            }
            function Rt(t) {
                return (
                    (t.__forward_ref__ = Rt),
                    (t.toString = function () {
                        return Nt(this());
                    }),
                    t
                );
            }
            function Dt(t) {
                return "function" == typeof t && t.hasOwnProperty("__forward_ref__") && t.__forward_ref__ === Rt ? t() : t;
            }
            var Ot = wt("Inject", function (t) {
                    return { token: t };
                }),
                Mt = wt("Optional"),
                Vt = wt("Self"),
                jt = wt("SkipSelf"),
                Ut = "__source",
                Lt = new Object(),
                Ht = Lt,
                Ft = new mt("INJECTOR"),
                zt = (function () {
                    function t() {}
                    return (
                        (t.prototype.get = function (t, e) {
                            if ((void 0 === e && (e = Lt), e === Lt)) throw new Error("NullInjectorError: No provider for " + Nt(t) + "!");
                            return e;
                        }),
                        t
                    );
                })(),
                Bt = (function () {
                    function t() {}
                    return (
                        (t.create = function (t, e) {
                            return Array.isArray(t) ? new Jt(t, e) : new Jt(t.providers, t.parent, t.name || null);
                        }),
                        (t.THROW_IF_NOT_FOUND = Lt),
                        (t.NULL = new zt()),
                        (t.ngInjectableDef = gt({
                            providedIn: "any",
                            factory: function () {
                                return ie(Ft);
                            },
                        })),
                        t
                    );
                })(),
                qt = function (t) {
                    return t;
                },
                Gt = [],
                Zt = qt,
                Wt = function () {
                    return Array.prototype.slice.call(arguments);
                },
                Qt = {},
                Yt = (function (t) {
                    for (var e in t) if (t[e] === Qt) return e;
                    throw Error("!prop");
                })({ provide: String, useValue: Qt }),
                Kt = Bt.NULL,
                Xt = /\n/gm,
                $t = "\u0275",
                Jt = (function () {
                    function t(t, e, n) {
                        void 0 === e && (e = Kt), void 0 === n && (n = null), (this.parent = e), (this.source = n);
                        var r = (this._records = new Map());
                        r.set(Bt, { token: Bt, fn: qt, deps: Gt, value: this, useNew: !1 }),
                            r.set(Ft, { token: Ft, fn: qt, deps: Gt, value: this, useNew: !1 }),
                            (function t(e, n) {
                                if (n)
                                    if ((n = Dt(n)) instanceof Array) for (var r = 0; r < n.length; r++) t(e, n[r]);
                                    else {
                                        if ("function" == typeof n) throw ne("Function/Class not supported", n);
                                        if (!n || "object" != typeof n || !n.provide) throw ne("Unexpected provider", n);
                                        var o = Dt(n.provide),
                                            i = (function (t) {
                                                var e = (function (t) {
                                                        var e = Gt,
                                                            n = t.deps;
                                                        if (n && n.length) {
                                                            e = [];
                                                            for (var r = 0; r < n.length; r++) {
                                                                var o = 6;
                                                                if ((u = Dt(n[r])) instanceof Array)
                                                                    for (var i = 0, a = u; i < a.length; i++) {
                                                                        var s = a[i];
                                                                        s instanceof Mt || s == Mt ? (o |= 1) : s instanceof jt || s == jt ? (o &= -3) : s instanceof Vt || s == Vt ? (o &= -5) : (u = s instanceof Ot ? s.token : Dt(s));
                                                                    }
                                                                e.push({ token: u, options: o });
                                                            }
                                                        } else if (t.useExisting) {
                                                            var u;
                                                            e = [{ token: (u = Dt(t.useExisting)), options: 6 }];
                                                        } else if (!(n || Yt in t)) throw ne("'deps' required", t);
                                                        return e;
                                                    })(t),
                                                    n = qt,
                                                    r = Gt,
                                                    o = !1,
                                                    i = Dt(t.provide);
                                                if (Yt in t) r = t.useValue;
                                                else if (t.useFactory) n = t.useFactory;
                                                else if (t.useExisting);
                                                else if (t.useClass) (o = !0), (n = Dt(t.useClass));
                                                else {
                                                    if ("function" != typeof i) throw ne("StaticProvider does not have [useValue|useFactory|useExisting|useClass] or [provide] is not newable", t);
                                                    (o = !0), (n = i);
                                                }
                                                return { deps: e, fn: n, useNew: o, value: r };
                                            })(n);
                                        if (!0 === n.multi) {
                                            var a = e.get(o);
                                            if (a) {
                                                if (a.fn !== Wt) throw te(o);
                                            } else e.set(o, (a = { token: n.provide, deps: [], useNew: !1, fn: Wt, value: Gt }));
                                            a.deps.push({ token: (o = n), options: 6 });
                                        }
                                        var s = e.get(o);
                                        if (s && s.fn == Wt) throw te(o);
                                        e.set(o, i);
                                    }
                            })(r, t);
                    }
                    return (
                        (t.prototype.get = function (t, e, n) {
                            void 0 === n && (n = 0);
                            var r = this._records.get(t);
                            try {
                                return (function t(e, n, r, o, i, a) {
                                    try {
                                        return (function (e, n, r, o, i, a) {
                                            var s, u;
                                            if (!n || 4 & a) 2 & a || (u = o.get(e, i, 0));
                                            else {
                                                if ((u = n.value) == Zt) throw Error($t + "Circular dependency");
                                                if (u === Gt) {
                                                    n.value = Zt;
                                                    var l = n.useNew,
                                                        c = n.fn,
                                                        p = n.deps,
                                                        f = Gt;
                                                    if (p.length) {
                                                        f = [];
                                                        for (var d = 0; d < p.length; d++) {
                                                            var v = p[d],
                                                                y = v.options,
                                                                g = 2 & y ? r.get(v.token) : void 0;
                                                            f.push(t(v.token, g, r, g || 4 & y ? o : Kt, 1 & y ? null : Bt.THROW_IF_NOT_FOUND, 0));
                                                        }
                                                    }
                                                    n.value = u = l ? new ((s = c).bind.apply(s, h([void 0], f)))() : c.apply(void 0, f);
                                                }
                                            }
                                            return u;
                                        })(e, n, r, o, i, a);
                                    } catch (t) {
                                        throw (t instanceof Error || (t = new Error(t)), (t.ngTempTokenPath = t.ngTempTokenPath || []).unshift(e), n && n.value == Zt && (n.value = Gt), t);
                                    }
                                })(t, r, this._records, this.parent, e, n);
                            } catch (e) {
                                var o = e.ngTempTokenPath;
                                throw (t[Ut] && o.unshift(t[Ut]), (e.message = ee("\n" + e.message, o, this.source)), (e.ngTokenPath = o), (e.ngTempTokenPath = null), e);
                            }
                        }),
                        (t.prototype.toString = function () {
                            var t = [];
                            return (
                                this._records.forEach(function (e, n) {
                                    return t.push(Nt(n));
                                }),
                                "StaticInjector[" + t.join(", ") + "]"
                            );
                        }),
                        t
                    );
                })();
            function te(t) {
                return ne("Cannot mix multi providers and regular providers", t);
            }
            function ee(t, e, n) {
                void 0 === n && (n = null), (t = t && "\n" === t.charAt(0) && t.charAt(1) == $t ? t.substr(2) : t);
                var r = Nt(e);
                if (e instanceof Array) r = e.map(Nt).join(" -> ");
                else if ("object" == typeof e) {
                    var o = [];
                    for (var i in e)
                        if (e.hasOwnProperty(i)) {
                            var a = e[i];
                            o.push(i + ":" + ("string" == typeof a ? JSON.stringify(a) : Nt(a)));
                        }
                    r = "{" + o.join(", ") + "}";
                }
                return "StaticInjectorError" + (n ? "(" + n + ")" : "") + "[" + r + "]: " + t.replace(Xt, "\n  ");
            }
            function ne(t, e) {
                return new Error(ee(t, e));
            }
            var re = void 0;
            function oe(t) {
                var e = re;
                return (re = t), e;
            }
            function ie(t, e) {
                if ((void 0 === e && (e = 0), void 0 === re)) throw new Error("inject() must be called from an injection context");
                if (null === re) {
                    var n = t.ngInjectableDef;
                    if (n && "root" == n.providedIn) return void 0 === n.value ? (n.value = n.factory()) : n.value;
                    if (8 & e) return null;
                    throw new Error("Injector: NOT_FOUND [" + Nt(t) + "]");
                }
                return re.get(t, 8 & e ? null : void 0, e);
            }
            function ae(t) {
                for (var e = [], n = 0; n < t.length; n++) {
                    var r = t[n];
                    if (Array.isArray(r)) {
                        if (0 === r.length) throw new Error("Arguments array must have arguments.");
                        for (var o = void 0, i = 0, a = 0; a < r.length; a++) {
                            var s = r[a];
                            s instanceof Mt || "Optional" === s.ngMetadataName
                                ? (i |= 8)
                                : s instanceof jt || "SkipSelf" === s.ngMetadataName
                                ? (i |= 4)
                                : s instanceof Vt || "Self" === s.ngMetadataName
                                ? (i |= 2)
                                : (o = s instanceof Ot ? s.token : s);
                        }
                        e.push(ie(o, i));
                    } else e.push(ie(r));
                }
                return e;
            }
            String;
            var se = (function (t) {
                    return (t[(t.Emulated = 0)] = "Emulated"), (t[(t.Native = 1)] = "Native"), (t[(t.None = 2)] = "None"), (t[(t.ShadowDom = 3)] = "ShadowDom"), t;
                })({}),
                ue = new (function (t) {
                    (this.full = t), (this.major = t.split(".")[0]), (this.minor = t.split(".")[1]), (this.patch = t.split(".").slice(2).join("."));
                })("6.1.10"),
                le = "ngDebugContext",
                ce = "ngOriginalError",
                he = "ngErrorLogger";
            function pe(t) {
                return t[le];
            }
            function fe(t) {
                return t[ce];
            }
            function de(t) {
                for (var e = [], n = 1; n < arguments.length; n++) e[n - 1] = arguments[n];
                t.error.apply(t, h(e));
            }
            var ve = (function () {
                    function t() {
                        this._console = console;
                    }
                    return (
                        (t.prototype.handleError = function (t) {
                            var e = this._findOriginalError(t),
                                n = this._findContext(t),
                                r = (function (t) {
                                    return t[he] || de;
                                })(t);
                            r(this._console, "ERROR", t), e && r(this._console, "ORIGINAL ERROR", e), n && r(this._console, "ERROR CONTEXT", n);
                        }),
                        (t.prototype._findContext = function (t) {
                            return t ? (pe(t) ? pe(t) : this._findContext(fe(t))) : null;
                        }),
                        (t.prototype._findOriginalError = function (t) {
                            for (var e = fe(t); e && fe(e); ) e = fe(e);
                            return e;
                        }),
                        t
                    );
                })(),
                ye = new mt("The presence of this token marks an injector as being the root injector."),
                ge = {},
                me = {},
                be = [],
                we = void 0;
            function _e() {
                return void 0 === we && (we = new zt()), we;
            }
            var Ce = (function () {
                function t(t, e, n) {
                    var r = this;
                    (this.parent = n),
                        (this.records = new Map()),
                        (this.injectorDefTypes = new Set()),
                        (this.onDestroy = new Set()),
                        (this.destroyed = !1),
                        xe([t], function (t) {
                            return r.processInjectorType(t, new Set());
                        }),
                        e &&
                            xe(e, function (t) {
                                return r.processProvider(t);
                            }),
                        this.records.set(Ft, Se(void 0, this)),
                        (this.isRootInjector = this.records.has(ye)),
                        this.injectorDefTypes.forEach(function (t) {
                            return r.get(t);
                        });
                }
                return (
                    (t.prototype.destroy = function () {
                        this.assertNotDestroyed(), (this.destroyed = !0);
                        try {
                            this.onDestroy.forEach(function (t) {
                                return t.ngOnDestroy();
                            });
                        } finally {
                            this.records.clear(), this.onDestroy.clear(), this.injectorDefTypes.clear();
                        }
                    }),
                    (t.prototype.get = function (t, e, n) {
                        void 0 === e && (e = Ht), void 0 === n && (n = 0), this.assertNotDestroyed();
                        var r,
                            o = oe(this);
                        try {
                            if (!(4 & n)) {
                                var i = this.records.get(t);
                                if (void 0 === i) {
                                    var a = (("function" == typeof (r = t) || ("object" == typeof r && r instanceof mt)) && t.ngInjectableDef) || void 0;
                                    void 0 !== a && this.injectableDefInScope(a) && ((i = Ee(t)), this.records.set(t, i));
                                }
                                if (void 0 !== i) return this.hydrate(t, i);
                            }
                            return 2 & n && _e(), this.parent.get(t, e);
                        } finally {
                            oe(o);
                        }
                    }),
                    (t.prototype.assertNotDestroyed = function () {
                        if (this.destroyed) throw new Error("Injector has already been destroyed.");
                    }),
                    (t.prototype.processInjectorType = function (t, e) {
                        var n = this,
                            r = (t = Dt(t)).ngInjectorDef,
                            o = (null == r && t.ngModule) || void 0,
                            i = void 0 === o ? t : o,
                            a = (void 0 !== o && t.providers) || be;
                        if ((void 0 !== o && (r = o.ngInjectorDef), null != r)) {
                            if (e.has(i)) throw new Error("Circular dependency: type " + Nt(i) + " ends up importing itself.");
                            if ((this.injectorDefTypes.add(i), this.records.set(i, Se(r.factory)), null != r.imports)) {
                                e.add(i);
                                try {
                                    xe(r.imports, function (t) {
                                        return n.processInjectorType(t, e);
                                    });
                                } finally {
                                    e.delete(i);
                                }
                            }
                            null != r.providers &&
                                xe(r.providers, function (t) {
                                    return n.processProvider(t);
                                }),
                                xe(a, function (t) {
                                    return n.processProvider(t);
                                });
                        }
                    }),
                    (t.prototype.processProvider = function (t) {
                        var e = Te((t = Dt(t))) ? t : Dt(t.provide),
                            n = (function (t) {
                                var e = Dt(t),
                                    n = ge,
                                    r = void 0;
                                if (Te(t)) return Ee(t);
                                if (((e = Dt(t.provide)), Yt in t)) n = t.useValue;
                                else if (t.useExisting)
                                    r = function () {
                                        return ie(t.useExisting);
                                    };
                                else if (t.useFactory)
                                    r = function () {
                                        return t.useFactory.apply(t, h(ae(t.deps || [])));
                                    };
                                else {
                                    var o = t.useClass || e;
                                    if (!t.deps) return Ee(o);
                                    r = function () {
                                        return new (o.bind.apply(o, h([void 0], ae(t.deps))))();
                                    };
                                }
                                return Se(r, n);
                            })(t);
                        if (Te(t) || !0 !== t.multi) {
                            var r = this.records.get(e);
                            if (r && void 0 !== r.multi) throw new Error("Mixed multi-provider for " + Nt(e));
                        } else {
                            var o = this.records.get(e);
                            if (o) {
                                if (void 0 === o.multi) throw new Error("Mixed multi-provider for " + e + ".");
                            } else
                                ((o = Se(void 0, ge, !0)).factory = function () {
                                    return ae(o.multi);
                                }),
                                    this.records.set(e, o);
                            (e = t), o.multi.push(t);
                        }
                        this.records.set(e, n);
                    }),
                    (t.prototype.hydrate = function (t, e) {
                        if (e.value === me) throw new Error("Circular dep for " + Nt(t));
                        var n;
                        return (
                            e.value === ge && ((e.value = me), (e.value = e.factory())),
                            "object" == typeof e.value && e.value && "object" == typeof (n = e.value) && null != n && n.ngOnDestroy && "function" == typeof n.ngOnDestroy && this.onDestroy.add(e.value),
                            e.value
                        );
                    }),
                    (t.prototype.injectableDefInScope = function (t) {
                        return !!t.providedIn && ("string" == typeof t.providedIn ? "any" === t.providedIn || ("root" === t.providedIn && this.isRootInjector) : this.injectorDefTypes.has(t.providedIn));
                    }),
                    t
                );
            })();
            function Ee(t) {
                var e = t.ngInjectableDef;
                if (void 0 === e) {
                    if (t instanceof mt) throw new Error("Token " + Nt(t) + " is missing an ngInjectableDef definition.");
                    return Se(function () {
                        return new t();
                    });
                }
                return Se(e.factory);
            }
            function Se(t, e, n) {
                return void 0 === e && (e = ge), void 0 === n && (n = !1), { factory: t, value: e, multi: n ? [] : void 0 };
            }
            function xe(t, e) {
                t.forEach(function (t) {
                    return Array.isArray(t) ? xe(t, e) : e(t);
                });
            }
            function Te(t) {
                return "function" == typeof t;
            }
            function ke(t) {
                return !!t && "function" == typeof t.then;
            }
            function Ae(t) {
                return !!t && "function" == typeof t.subscribe;
            }
            var Ie = new mt("Application Initializer"),
                Pe = (function () {
                    function t(t) {
                        var e = this;
                        (this.appInits = t),
                            (this.initialized = !1),
                            (this.done = !1),
                            (this.donePromise = new Promise(function (t, n) {
                                (e.resolve = t), (e.reject = n);
                            }));
                    }
                    return (
                        (t.prototype.runInitializers = function () {
                            var t = this;
                            if (!this.initialized) {
                                var e = [],
                                    n = function () {
                                        (t.done = !0), t.resolve();
                                    };
                                if (this.appInits)
                                    for (var r = 0; r < this.appInits.length; r++) {
                                        var o = this.appInits[r]();
                                        ke(o) && e.push(o);
                                    }
                                Promise.all(e)
                                    .then(function () {
                                        n();
                                    })
                                    .catch(function (e) {
                                        t.reject(e);
                                    }),
                                    0 === e.length && n(),
                                    (this.initialized = !0);
                            }
                        }),
                        a([s(0, Ot(Ie)), s(0, Mt())], t)
                    );
                })(),
                Ne = new mt("AppId"),
                Re = new mt("Platform Initializer"),
                De = new mt("Platform ID"),
                Oe = new mt("appBootstrapListener"),
                Me = (function () {
                    function t() {}
                    return (
                        (t.prototype.log = function (t) {
                            console.log(t);
                        }),
                        (t.prototype.warn = function (t) {
                            console.warn(t);
                        }),
                        t
                    );
                })();
            function Ve() {
                throw new Error("Runtime compiler is not loaded");
            }
            var je = (function () {
                    function t() {}
                    return (
                        (t.prototype.compileModuleSync = function (t) {
                            throw Ve();
                        }),
                        (t.prototype.compileModuleAsync = function (t) {
                            throw Ve();
                        }),
                        (t.prototype.compileModuleAndAllComponentsSync = function (t) {
                            throw Ve();
                        }),
                        (t.prototype.compileModuleAndAllComponentsAsync = function (t) {
                            throw Ve();
                        }),
                        (t.prototype.clearCache = function () {}),
                        (t.prototype.clearCacheFor = function (t) {}),
                        (t.prototype.getModuleId = function (t) {}),
                        t
                    );
                })(),
                Ue = function () {},
                Le = function () {},
                He = function () {};
            function Fe(t) {
                var e = Error("No component factory found for " + Nt(t) + ". Did you add it to @NgModule.entryComponents?");
                return (e[qe] = t), e;
            }
            var ze,
                Be,
                qe = "ngComponent",
                Ge = (function () {
                    function t() {}
                    return (
                        (t.prototype.resolveComponentFactory = function (t) {
                            throw Fe(t);
                        }),
                        t
                    );
                })(),
                Ze = (function () {
                    function t() {}
                    return (t.NULL = new Ge()), t;
                })(),
                We = (function () {
                    function t(t, e, n) {
                        (this._parent = e), (this._ngModule = n), (this._factories = new Map());
                        for (var r = 0; r < t.length; r++) {
                            var o = t[r];
                            this._factories.set(o.componentType, o);
                        }
                    }
                    return (
                        (t.prototype.resolveComponentFactory = function (t) {
                            var e = this._factories.get(t);
                            if ((!e && this._parent && (e = this._parent.resolveComponentFactory(t)), !e)) throw Fe(t);
                            return new Qe(e, this._ngModule);
                        }),
                        t
                    );
                })(),
                Qe = (function (t) {
                    function e(e, n) {
                        var r = t.call(this) || this;
                        return (r.factory = e), (r.ngModule = n), (r.selector = e.selector), (r.componentType = e.componentType), (r.ngContentSelectors = e.ngContentSelectors), (r.inputs = e.inputs), (r.outputs = e.outputs), r;
                    }
                    return (
                        o(e, t),
                        (e.prototype.create = function (t, e, n, r) {
                            return this.factory.create(t, e, n, r || this.ngModule);
                        }),
                        e
                    );
                })(He),
                Ye = function () {},
                Ke = function () {},
                Xe = (function () {
                    var t = xt.wtf;
                    return !(!t || !(ze = t.trace) || ((Be = ze.events), 0));
                })();
            function $e(t, e) {
                return null;
            }
            var Je = Xe
                    ? function (t, e) {
                          return void 0 === e && (e = null), Be.createScope(t, e);
                      }
                    : function (t, e) {
                          return $e;
                      },
                tn = Xe
                    ? function (t, e) {
                          return ze.leaveScope(t, e), e;
                      }
                    : function (t, e) {
                          return e;
                      },
                en = (function (t) {
                    function e(e) {
                        void 0 === e && (e = !1);
                        var n = t.call(this) || this;
                        return (n.__isAsync = e), n;
                    }
                    return (
                        o(e, t),
                        (e.prototype.emit = function (e) {
                            t.prototype.next.call(this, e);
                        }),
                        (e.prototype.subscribe = function (e, n, r) {
                            var o,
                                i = function (t) {
                                    return null;
                                },
                                a = function () {
                                    return null;
                                };
                            e && "object" == typeof e
                                ? ((o = this.__isAsync
                                      ? function (t) {
                                            setTimeout(function () {
                                                return e.next(t);
                                            });
                                        }
                                      : function (t) {
                                            e.next(t);
                                        }),
                                  e.error &&
                                      (i = this.__isAsync
                                          ? function (t) {
                                                setTimeout(function () {
                                                    return e.error(t);
                                                });
                                            }
                                          : function (t) {
                                                e.error(t);
                                            }),
                                  e.complete &&
                                      (a = this.__isAsync
                                          ? function () {
                                                setTimeout(function () {
                                                    return e.complete();
                                                });
                                            }
                                          : function () {
                                                e.complete();
                                            }))
                                : ((o = this.__isAsync
                                      ? function (t) {
                                            setTimeout(function () {
                                                return e(t);
                                            });
                                        }
                                      : function (t) {
                                            e(t);
                                        }),
                                  n &&
                                      (i = this.__isAsync
                                          ? function (t) {
                                                setTimeout(function () {
                                                    return n(t);
                                                });
                                            }
                                          : function (t) {
                                                n(t);
                                            }),
                                  r &&
                                      (a = this.__isAsync
                                          ? function () {
                                                setTimeout(function () {
                                                    return r();
                                                });
                                            }
                                          : function () {
                                                r();
                                            }));
                            var s = t.prototype.subscribe.call(this, o, i, a);
                            return e instanceof x && e.add(s), s;
                        }),
                        e
                    );
                })(ut),
                nn = (function () {
                    function t(t) {
                        var e,
                            n = t.enableLongStackTrace,
                            r = void 0 !== n && n;
                        if (
                            ((this.hasPendingMicrotasks = !1),
                            (this.hasPendingMacrotasks = !1),
                            (this.isStable = !0),
                            (this.onUnstable = new en(!1)),
                            (this.onMicrotaskEmpty = new en(!1)),
                            (this.onStable = new en(!1)),
                            (this.onError = new en(!1)),
                            "undefined" == typeof Zone)
                        )
                            throw new Error("In this configuration Angular requires Zone.js");
                        Zone.assertZonePatched(),
                            (this._nesting = 0),
                            (this._outer = this._inner = Zone.current),
                            Zone.wtfZoneSpec && (this._inner = this._inner.fork(Zone.wtfZoneSpec)),
                            Zone.TaskTrackingZoneSpec && (this._inner = this._inner.fork(new Zone.TaskTrackingZoneSpec())),
                            r && Zone.longStackTraceZoneSpec && (this._inner = this._inner.fork(Zone.longStackTraceZoneSpec)),
                            ((e = this)._inner = e._inner.fork({
                                name: "angular",
                                properties: { isAngularZone: !0 },
                                onInvokeTask: function (t, n, r, o, i, a) {
                                    try {
                                        return sn(e), t.invokeTask(r, o, i, a);
                                    } finally {
                                        un(e);
                                    }
                                },
                                onInvoke: function (t, n, r, o, i, a, s) {
                                    try {
                                        return sn(e), t.invoke(r, o, i, a, s);
                                    } finally {
                                        un(e);
                                    }
                                },
                                onHasTask: function (t, n, r, o) {
                                    t.hasTask(r, o), n === r && ("microTask" == o.change ? ((e.hasPendingMicrotasks = o.microTask), an(e)) : "macroTask" == o.change && (e.hasPendingMacrotasks = o.macroTask));
                                },
                                onHandleError: function (t, n, r, o) {
                                    return (
                                        t.handleError(r, o),
                                        e.runOutsideAngular(function () {
                                            return e.onError.emit(o);
                                        }),
                                        !1
                                    );
                                },
                            }));
                    }
                    return (
                        (t.isInAngularZone = function () {
                            return !0 === Zone.current.get("isAngularZone");
                        }),
                        (t.assertInAngularZone = function () {
                            if (!t.isInAngularZone()) throw new Error("Expected to be in Angular Zone, but it is not!");
                        }),
                        (t.assertNotInAngularZone = function () {
                            if (t.isInAngularZone()) throw new Error("Expected to not be in Angular Zone, but it is!");
                        }),
                        (t.prototype.run = function (t, e, n) {
                            return this._inner.run(t, e, n);
                        }),
                        (t.prototype.runTask = function (t, e, n, r) {
                            var o = this._inner,
                                i = o.scheduleEventTask("NgZoneEvent: " + r, t, on, rn, rn);
                            try {
                                return o.runTask(i, e, n);
                            } finally {
                                o.cancelTask(i);
                            }
                        }),
                        (t.prototype.runGuarded = function (t, e, n) {
                            return this._inner.runGuarded(t, e, n);
                        }),
                        (t.prototype.runOutsideAngular = function (t) {
                            return this._outer.run(t);
                        }),
                        t
                    );
                })();
            function rn() {}
            var on = {};
            function an(t) {
                if (0 == t._nesting && !t.hasPendingMicrotasks && !t.isStable)
                    try {
                        t._nesting++, t.onMicrotaskEmpty.emit(null);
                    } finally {
                        if ((t._nesting--, !t.hasPendingMicrotasks))
                            try {
                                t.runOutsideAngular(function () {
                                    return t.onStable.emit(null);
                                });
                            } finally {
                                t.isStable = !0;
                            }
                    }
            }
            function sn(t) {
                t._nesting++, t.isStable && ((t.isStable = !1), t.onUnstable.emit(null));
            }
            function un(t) {
                t._nesting--, an(t);
            }
            var ln,
                cn = (function () {
                    function t() {
                        (this.hasPendingMicrotasks = !1), (this.hasPendingMacrotasks = !1), (this.isStable = !0), (this.onUnstable = new en()), (this.onMicrotaskEmpty = new en()), (this.onStable = new en()), (this.onError = new en());
                    }
                    return (
                        (t.prototype.run = function (t) {
                            return t();
                        }),
                        (t.prototype.runGuarded = function (t) {
                            return t();
                        }),
                        (t.prototype.runOutsideAngular = function (t) {
                            return t();
                        }),
                        (t.prototype.runTask = function (t) {
                            return t();
                        }),
                        t
                    );
                })(),
                hn = (function () {
                    function t(t) {
                        var e = this;
                        (this._ngZone = t),
                            (this._pendingCount = 0),
                            (this._isZoneStable = !0),
                            (this._didWork = !1),
                            (this._callbacks = []),
                            this._watchAngularEvents(),
                            t.run(function () {
                                e.taskTrackingZone = Zone.current.get("TaskTrackingZone");
                            });
                    }
                    return (
                        (t.prototype._watchAngularEvents = function () {
                            var t = this;
                            this._ngZone.onUnstable.subscribe({
                                next: function () {
                                    (t._didWork = !0), (t._isZoneStable = !1);
                                },
                            }),
                                this._ngZone.runOutsideAngular(function () {
                                    t._ngZone.onStable.subscribe({
                                        next: function () {
                                            nn.assertNotInAngularZone(),
                                                It(function () {
                                                    (t._isZoneStable = !0), t._runCallbacksIfReady();
                                                });
                                        },
                                    });
                                });
                        }),
                        (t.prototype.increasePendingRequestCount = function () {
                            return (this._pendingCount += 1), (this._didWork = !0), this._pendingCount;
                        }),
                        (t.prototype.decreasePendingRequestCount = function () {
                            if (((this._pendingCount -= 1), this._pendingCount < 0)) throw new Error("pending async requests below zero");
                            return this._runCallbacksIfReady(), this._pendingCount;
                        }),
                        (t.prototype.isStable = function () {
                            return this._isZoneStable && 0 === this._pendingCount && !this._ngZone.hasPendingMacrotasks;
                        }),
                        (t.prototype._runCallbacksIfReady = function () {
                            var t = this;
                            if (this.isStable())
                                It(function () {
                                    for (; 0 !== t._callbacks.length; ) {
                                        var e = t._callbacks.pop();
                                        clearTimeout(e.timeoutId), e.doneCb(t._didWork);
                                    }
                                    t._didWork = !1;
                                });
                            else {
                                var e = this.getPendingTasks();
                                (this._callbacks = this._callbacks.filter(function (t) {
                                    return !t.updateCb || !t.updateCb(e) || (clearTimeout(t.timeoutId), !1);
                                })),
                                    (this._didWork = !0);
                            }
                        }),
                        (t.prototype.getPendingTasks = function () {
                            return this.taskTrackingZone
                                ? this.taskTrackingZone.macroTasks.map(function (t) {
                                      return { source: t.source, isPeriodic: t.data.isPeriodic, delay: t.data.delay, creationLocation: t.creationLocation, xhr: t.data.target };
                                  })
                                : [];
                        }),
                        (t.prototype.addCallback = function (t, e, n) {
                            var r = this,
                                o = -1;
                            e &&
                                e > 0 &&
                                (o = setTimeout(function () {
                                    (r._callbacks = r._callbacks.filter(function (t) {
                                        return t.timeoutId !== o;
                                    })),
                                        t(r._didWork, r.getPendingTasks());
                                }, e)),
                                this._callbacks.push({ doneCb: t, timeoutId: o, updateCb: n });
                        }),
                        (t.prototype.whenStable = function (t, e, n) {
                            if (n && !this.taskTrackingZone) throw new Error('Task tracking zone is required when passing an update callback to whenStable(). Is "zone.js/dist/task-tracking.js" loaded?');
                            this.addCallback(t, e, n), this._runCallbacksIfReady();
                        }),
                        (t.prototype.getPendingRequestCount = function () {
                            return this._pendingCount;
                        }),
                        (t.prototype.findProviders = function (t, e, n) {
                            return [];
                        }),
                        t
                    );
                })(),
                pn = (function () {
                    function t() {
                        (this._applications = new Map()), fn.addToWindow(this);
                    }
                    return (
                        (t.prototype.registerApplication = function (t, e) {
                            this._applications.set(t, e);
                        }),
                        (t.prototype.unregisterApplication = function (t) {
                            this._applications.delete(t);
                        }),
                        (t.prototype.unregisterAllApplications = function () {
                            this._applications.clear();
                        }),
                        (t.prototype.getTestability = function (t) {
                            return this._applications.get(t) || null;
                        }),
                        (t.prototype.getAllTestabilities = function () {
                            return Array.from(this._applications.values());
                        }),
                        (t.prototype.getAllRootElements = function () {
                            return Array.from(this._applications.keys());
                        }),
                        (t.prototype.findTestabilityInTree = function (t, e) {
                            return void 0 === e && (e = !0), fn.findTestabilityInTree(this, t, e);
                        }),
                        a([u("design:paramtypes", [])], t)
                    );
                })(),
                fn = new ((function () {
                    function t() {}
                    return (
                        (t.prototype.addToWindow = function (t) {}),
                        (t.prototype.findTestabilityInTree = function (t, e, n) {
                            return null;
                        }),
                        t
                    );
                })())(),
                dn = !0,
                vn = !1,
                yn = new mt("AllowMultipleToken");
            function gn() {
                return (vn = !0), dn;
            }
            var mn = function (t, e) {
                (this.name = t), (this.token = e);
            };
            function bn(t, e, n) {
                void 0 === n && (n = []);
                var r = "Platform: " + e,
                    o = new mt(r);
                return function (e) {
                    void 0 === e && (e = []);
                    var i = wn();
                    if (!i || i.injector.get(yn, !1))
                        if (t) t(n.concat(e).concat({ provide: o, useValue: !0 }));
                        else {
                            var a = n.concat(e).concat({ provide: o, useValue: !0 });
                            !(function (t) {
                                if (ln && !ln.destroyed && !ln.injector.get(yn, !1)) throw new Error("There can be only one platform. Destroy the previous one to create a new one.");
                                ln = t.get(_n);
                                var e = t.get(Re, null);
                                e &&
                                    e.forEach(function (t) {
                                        return t();
                                    });
                            })(Bt.create({ providers: a, name: r }));
                        }
                    return (function (t) {
                        var e = wn();
                        if (!e) throw new Error("No platform exists!");
                        if (!e.injector.get(t, null)) throw new Error("A platform with a different configuration has been created. Please destroy it first.");
                        return e;
                    })(o);
                };
            }
            function wn() {
                return ln && !ln.destroyed ? ln : null;
            }
            var _n = (function () {
                function t(t) {
                    (this._injector = t), (this._modules = []), (this._destroyListeners = []), (this._destroyed = !1);
                }
                return (
                    (t.prototype.bootstrapModuleFactory = function (t, e) {
                        var n,
                            r = this,
                            o = "noop" === (n = e ? e.ngZone : void 0) ? new cn() : ("zone.js" === n ? void 0 : n) || new nn({ enableLongStackTrace: gn() }),
                            i = [{ provide: nn, useValue: o }];
                        return o.run(function () {
                            var e = Bt.create({ providers: i, parent: r.injector, name: t.moduleType.name }),
                                n = t.create(e),
                                a = n.injector.get(ve, null);
                            if (!a) throw new Error("No ErrorHandler. Is platform module (BrowserModule) included?");
                            return (
                                n.onDestroy(function () {
                                    return Sn(r._modules, n);
                                }),
                                o.runOutsideAngular(function () {
                                    return o.onError.subscribe({
                                        next: function (t) {
                                            a.handleError(t);
                                        },
                                    });
                                }),
                                (function (t, e, o) {
                                    try {
                                        var i =
                                            ((a = n.injector.get(Pe)).runInitializers(),
                                            a.donePromise.then(function () {
                                                return r._moduleDoBootstrap(n), n;
                                            }));
                                        return ke(i)
                                            ? i.catch(function (n) {
                                                  throw (
                                                      (e.runOutsideAngular(function () {
                                                          return t.handleError(n);
                                                      }),
                                                      n)
                                                  );
                                              })
                                            : i;
                                    } catch (n) {
                                        throw (
                                            (e.runOutsideAngular(function () {
                                                return t.handleError(n);
                                            }),
                                            n)
                                        );
                                    }
                                    var a;
                                })(a, o)
                            );
                        });
                    }),
                    (t.prototype.bootstrapModule = function (t, e) {
                        var n = this;
                        void 0 === e && (e = []);
                        var r = this.injector.get(Ue),
                            o = Cn({}, e);
                        return r
                            .createCompiler([o])
                            .compileModuleAsync(t)
                            .then(function (t) {
                                return n.bootstrapModuleFactory(t, o);
                            });
                    }),
                    (t.prototype._moduleDoBootstrap = function (t) {
                        var e = t.injector.get(En);
                        if (t._bootstrapComponents.length > 0)
                            t._bootstrapComponents.forEach(function (t) {
                                return e.bootstrap(t);
                            });
                        else {
                            if (!t.instance.ngDoBootstrap)
                                throw new Error("The module " + Nt(t.instance.constructor) + ' was bootstrapped, but it does not declare "@NgModule.bootstrap" components nor a "ngDoBootstrap" method. Please define one of these.');
                            t.instance.ngDoBootstrap(e);
                        }
                        this._modules.push(t);
                    }),
                    (t.prototype.onDestroy = function (t) {
                        this._destroyListeners.push(t);
                    }),
                    Object.defineProperty(t.prototype, "injector", {
                        get: function () {
                            return this._injector;
                        },
                        enumerable: !0,
                        configurable: !0,
                    }),
                    (t.prototype.destroy = function () {
                        if (this._destroyed) throw new Error("The platform has already been destroyed!");
                        this._modules.slice().forEach(function (t) {
                            return t.destroy();
                        }),
                            this._destroyListeners.forEach(function (t) {
                                return t();
                            }),
                            (this._destroyed = !0);
                    }),
                    Object.defineProperty(t.prototype, "destroyed", {
                        get: function () {
                            return this._destroyed;
                        },
                        enumerable: !0,
                        configurable: !0,
                    }),
                    t
                );
            })();
            function Cn(t, e) {
                return Array.isArray(e) ? e.reduce(Cn, t) : i({}, t, e);
            }
            var En = (function () {
                function t(t, e, n, r, o, i) {
                    var a = this;
                    (this._zone = t),
                        (this._console = e),
                        (this._injector = n),
                        (this._exceptionHandler = r),
                        (this._componentFactoryResolver = o),
                        (this._initStatus = i),
                        (this._bootstrapListeners = []),
                        (this._views = []),
                        (this._runningTick = !1),
                        (this._enforceNoNewChanges = !1),
                        (this._stable = !0),
                        (this.componentTypes = []),
                        (this.components = []),
                        (this._enforceNoNewChanges = gn()),
                        this._zone.onMicrotaskEmpty.subscribe({
                            next: function () {
                                a._zone.run(function () {
                                    a.tick();
                                });
                            },
                        });
                    var s = new O(function (t) {
                            (a._stable = a._zone.isStable && !a._zone.hasPendingMacrotasks && !a._zone.hasPendingMicrotasks),
                                a._zone.runOutsideAngular(function () {
                                    t.next(a._stable), t.complete();
                                });
                        }),
                        u = new O(function (t) {
                            var e;
                            a._zone.runOutsideAngular(function () {
                                e = a._zone.onStable.subscribe(function () {
                                    nn.assertNotInAngularZone(),
                                        It(function () {
                                            a._stable || a._zone.hasPendingMacrotasks || a._zone.hasPendingMicrotasks || ((a._stable = !0), t.next(!0));
                                        });
                                });
                            });
                            var n = a._zone.onUnstable.subscribe(function () {
                                nn.assertInAngularZone(),
                                    a._stable &&
                                        ((a._stable = !1),
                                        a._zone.runOutsideAngular(function () {
                                            t.next(!1);
                                        }));
                            });
                            return function () {
                                e.unsubscribe(), n.unsubscribe();
                            };
                        });
                    this.isStable = (function () {
                        for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
                        var n = Number.POSITIVE_INFINITY,
                            r = null,
                            o = t[t.length - 1];
                        return V(o) ? ((r = t.pop()), t.length > 1 && "number" == typeof t[t.length - 1] && (n = t.pop())) : "number" == typeof o && (n = t.pop()), null === r && 1 === t.length && t[0] instanceof O ? t[0] : rt(n)(X(t, r));
                    })(
                        s,
                        u.pipe(function (t) {
                            return ct()(
                                ((e = yt),
                                function (t) {
                                    var n;
                                    n =
                                        "function" == typeof e
                                            ? e
                                            : function () {
                                                  return e;
                                              };
                                    var r = Object.create(t, dt);
                                    return (r.source = t), (r.subjectFactory = n), r;
                                })(t)
                            );
                            var e;
                        })
                    );
                }
                var e;
                return (
                    (e = t),
                    (t.prototype.bootstrap = function (t, e) {
                        var n,
                            r = this;
                        if (!this._initStatus.done) throw new Error("Cannot bootstrap as there are still asynchronous initializers running. Bootstrap components in the `ngDoBootstrap` method of the root module.");
                        (n = t instanceof He ? t : this._componentFactoryResolver.resolveComponentFactory(t)), this.componentTypes.push(n.componentType);
                        var o = n instanceof Qe ? null : this._injector.get(Ye),
                            i = n.create(Bt.NULL, [], e || n.selector, o);
                        i.onDestroy(function () {
                            r._unloadComponent(i);
                        });
                        var a = i.injector.get(hn, null);
                        return (
                            a && i.injector.get(pn).registerApplication(i.location.nativeElement, a),
                            this._loadComponent(i),
                            gn() && this._console.log("Angular is running in the development mode. Call enableProdMode() to enable the production mode."),
                            i
                        );
                    }),
                    (t.prototype.tick = function () {
                        var t = this;
                        if (this._runningTick) throw new Error("ApplicationRef.tick is called recursively");
                        var n = e._tickScope();
                        try {
                            (this._runningTick = !0),
                                this._views.forEach(function (t) {
                                    return t.detectChanges();
                                }),
                                this._enforceNoNewChanges &&
                                    this._views.forEach(function (t) {
                                        return t.checkNoChanges();
                                    });
                        } catch (e) {
                            this._zone.runOutsideAngular(function () {
                                return t._exceptionHandler.handleError(e);
                            });
                        } finally {
                            (this._runningTick = !1), tn(n);
                        }
                    }),
                    (t.prototype.attachView = function (t) {
                        var e = t;
                        this._views.push(e), e.attachToAppRef(this);
                    }),
                    (t.prototype.detachView = function (t) {
                        var e = t;
                        Sn(this._views, e), e.detachFromAppRef();
                    }),
                    (t.prototype._loadComponent = function (t) {
                        this.attachView(t.hostView),
                            this.tick(),
                            this.components.push(t),
                            this._injector
                                .get(Oe, [])
                                .concat(this._bootstrapListeners)
                                .forEach(function (e) {
                                    return e(t);
                                });
                    }),
                    (t.prototype._unloadComponent = function (t) {
                        this.detachView(t.hostView), Sn(this.components, t);
                    }),
                    (t.prototype.ngOnDestroy = function () {
                        this._views.slice().forEach(function (t) {
                            return t.destroy();
                        });
                    }),
                    Object.defineProperty(t.prototype, "viewCount", {
                        get: function () {
                            return this._views.length;
                        },
                        enumerable: !0,
                        configurable: !0,
                    }),
                    (t._tickScope = Je("ApplicationRef#tick()")),
                    t
                );
            })();
            function Sn(t, e) {
                var n = t.indexOf(e);
                n > -1 && t.splice(n, 1);
            }
            var xn = function () {},
                Tn = (function (t) {
                    return (t[(t.Important = 1)] = "Important"), (t[(t.DashCase = 2)] = "DashCase"), t;
                })({}),
                kn = function () {},
                An = function (t) {
                    this.nativeElement = t;
                },
                In = function () {},
                Pn = (function () {
                    function t() {
                        (this.dirty = !0), (this._results = []), (this.changes = new en()), (this.length = 0);
                    }
                    return (
                        (t.prototype.map = function (t) {
                            return this._results.map(t);
                        }),
                        (t.prototype.filter = function (t) {
                            return this._results.filter(t);
                        }),
                        (t.prototype.find = function (t) {
                            return this._results.find(t);
                        }),
                        (t.prototype.reduce = function (t, e) {
                            return this._results.reduce(t, e);
                        }),
                        (t.prototype.forEach = function (t) {
                            this._results.forEach(t);
                        }),
                        (t.prototype.some = function (t) {
                            return this._results.some(t);
                        }),
                        (t.prototype.toArray = function () {
                            return this._results.slice();
                        }),
                        (t.prototype[At()] = function () {
                            return this._results[At()]();
                        }),
                        (t.prototype.toString = function () {
                            return this._results.toString();
                        }),
                        (t.prototype.reset = function (t) {
                            (this._results = (function t(e) {
                                return e.reduce(function (e, n) {
                                    var r = Array.isArray(n) ? t(n) : n;
                                    return e.concat(r);
                                }, []);
                            })(t)),
                                (this.dirty = !1),
                                (this.length = this._results.length),
                                (this.last = this._results[this.length - 1]),
                                (this.first = this._results[0]);
                        }),
                        (t.prototype.notifyOnChanges = function () {
                            this.changes.emit(this);
                        }),
                        (t.prototype.setDirty = function () {
                            this.dirty = !0;
                        }),
                        (t.prototype.destroy = function () {
                            this.changes.complete(), this.changes.unsubscribe();
                        }),
                        t
                    );
                })(),
                Nn = { factoryPathPrefix: "", factoryPathSuffix: ".ngfactory" },
                Rn = (function () {
                    function t(t, e) {
                        (this._compiler = t), (this._config = e || Nn);
                    }
                    return (
                        (t.prototype.load = function (t) {
                            return this._compiler instanceof je ? this.loadFactory(t) : this.loadAndCompile(t);
                        }),
                        (t.prototype.loadAndCompile = function (t) {
                            var e = this,
                                r = c(t.split("#"), 2),
                                o = r[0],
                                i = r[1];
                            return (
                                void 0 === i && (i = "default"),
                                n("crnd")(o)
                                    .then(function (t) {
                                        return t[i];
                                    })
                                    .then(function (t) {
                                        return Dn(t, o, i);
                                    })
                                    .then(function (t) {
                                        return e._compiler.compileModuleAsync(t);
                                    })
                            );
                        }),
                        (t.prototype.loadFactory = function (t) {
                            var e = c(t.split("#"), 2),
                                r = e[0],
                                o = e[1],
                                i = "NgFactory";
                            return (
                                void 0 === o && ((o = "default"), (i = "")),
                                n("crnd")(this._config.factoryPathPrefix + r + this._config.factoryPathSuffix)
                                    .then(function (t) {
                                        return t[o + i];
                                    })
                                    .then(function (t) {
                                        return Dn(t, r, o);
                                    })
                            );
                        }),
                        a([s(1, Mt())], t)
                    );
                })();
            function Dn(t, e, n) {
                if (!t) throw new Error("Cannot find '" + n + "' in '" + e + "'");
                return t;
            }
            var On = function () {},
                Mn = function () {},
                Vn = function () {},
                jn = (function () {
                    function t(t, e, n) {
                        (this._debugContext = n), (this.nativeNode = t), e && e instanceof Un ? e.addChild(this) : (this.parent = null), (this.listeners = []);
                    }
                    return (
                        Object.defineProperty(t.prototype, "injector", {
                            get: function () {
                                return this._debugContext.injector;
                            },
                            enumerable: !0,
                            configurable: !0,
                        }),
                        Object.defineProperty(t.prototype, "componentInstance", {
                            get: function () {
                                return this._debugContext.component;
                            },
                            enumerable: !0,
                            configurable: !0,
                        }),
                        Object.defineProperty(t.prototype, "context", {
                            get: function () {
                                return this._debugContext.context;
                            },
                            enumerable: !0,
                            configurable: !0,
                        }),
                        Object.defineProperty(t.prototype, "references", {
                            get: function () {
                                return this._debugContext.references;
                            },
                            enumerable: !0,
                            configurable: !0,
                        }),
                        Object.defineProperty(t.prototype, "providerTokens", {
                            get: function () {
                                return this._debugContext.providerTokens;
                            },
                            enumerable: !0,
                            configurable: !0,
                        }),
                        t
                    );
                })(),
                Un = (function (t) {
                    function e(e, n, r) {
                        var o = t.call(this, e, n, r) || this;
                        return (o.properties = {}), (o.attributes = {}), (o.classes = {}), (o.styles = {}), (o.childNodes = []), (o.nativeElement = e), o;
                    }
                    return (
                        o(e, t),
                        (e.prototype.addChild = function (t) {
                            t && (this.childNodes.push(t), (t.parent = this));
                        }),
                        (e.prototype.removeChild = function (t) {
                            var e = this.childNodes.indexOf(t);
                            -1 !== e && ((t.parent = null), this.childNodes.splice(e, 1));
                        }),
                        (e.prototype.insertChildrenAfter = function (t, e) {
                            var n,
                                r = this,
                                o = this.childNodes.indexOf(t);
                            -1 !== o &&
                                ((n = this.childNodes).splice.apply(n, h([o + 1, 0], e)),
                                e.forEach(function (t) {
                                    t.parent && t.parent.removeChild(t), (t.parent = r);
                                }));
                        }),
                        (e.prototype.insertBefore = function (t, e) {
                            var n = this.childNodes.indexOf(t);
                            -1 === n ? this.addChild(e) : (e.parent && e.parent.removeChild(e), (e.parent = this), this.childNodes.splice(n, 0, e));
                        }),
                        (e.prototype.query = function (t) {
                            return this.queryAll(t)[0] || null;
                        }),
                        (e.prototype.queryAll = function (t) {
                            var e = [];
                            return (
                                (function t(e, n, r) {
                                    e.childNodes.forEach(function (e) {
                                        e instanceof Un && (n(e) && r.push(e), t(e, n, r));
                                    });
                                })(this, t, e),
                                e
                            );
                        }),
                        (e.prototype.queryAllNodes = function (t) {
                            var e = [];
                            return (
                                (function t(e, n, r) {
                                    e instanceof Un &&
                                        e.childNodes.forEach(function (e) {
                                            n(e) && r.push(e), e instanceof Un && t(e, n, r);
                                        });
                                })(this, t, e),
                                e
                            );
                        }),
                        Object.defineProperty(e.prototype, "children", {
                            get: function () {
                                return this.childNodes.filter(function (t) {
                                    return t instanceof e;
                                });
                            },
                            enumerable: !0,
                            configurable: !0,
                        }),
                        (e.prototype.triggerEventHandler = function (t, e) {
                            this.listeners.forEach(function (n) {
                                n.name == t && n.callback(e);
                            });
                        }),
                        e
                    );
                })(jn),
                Ln = new Map();
            function Hn(t) {
                return Ln.get(t) || null;
            }
            function Fn(t) {
                Ln.set(t.nativeNode, t);
            }
            function zn(t, e) {
                var n = Gn(t),
                    r = Gn(e);
                return n && r
                    ? (function (t, e, n) {
                          for (var r = t[At()](), o = e[At()](); ; ) {
                              var i = r.next(),
                                  a = o.next();
                              if (i.done && a.done) return !0;
                              if (i.done || a.done) return !1;
                              if (!n(i.value, a.value)) return !1;
                          }
                      })(t, e, zn)
                    : !(n || !t || ("object" != typeof t && "function" != typeof t) || r || !e || ("object" != typeof e && "function" != typeof e)) || Pt(t, e);
            }
            var Bn = (function () {
                    function t(t) {
                        this.wrapped = t;
                    }
                    return (
                        (t.wrap = function (e) {
                            return new t(e);
                        }),
                        (t.unwrap = function (e) {
                            return t.isWrapped(e) ? e.wrapped : e;
                        }),
                        (t.isWrapped = function (e) {
                            return e instanceof t;
                        }),
                        t
                    );
                })(),
                qn = (function () {
                    function t(t, e, n) {
                        (this.previousValue = t), (this.currentValue = e), (this.firstChange = n);
                    }
                    return (
                        (t.prototype.isFirstChange = function () {
                            return this.firstChange;
                        }),
                        t
                    );
                })();
            function Gn(t) {
                return !!Zn(t) && (Array.isArray(t) || (!(t instanceof Map) && At() in t));
            }
            function Zn(t) {
                return null !== t && ("function" == typeof t || "object" == typeof t);
            }
            var Wn = (function () {
                    function t() {}
                    return (
                        (t.prototype.supports = function (t) {
                            return Gn(t);
                        }),
                        (t.prototype.create = function (t) {
                            return new Yn(t);
                        }),
                        t
                    );
                })(),
                Qn = function (t, e) {
                    return e;
                },
                Yn = (function () {
                    function t(t) {
                        (this.length = 0),
                            (this._linkedRecords = null),
                            (this._unlinkedRecords = null),
                            (this._previousItHead = null),
                            (this._itHead = null),
                            (this._itTail = null),
                            (this._additionsHead = null),
                            (this._additionsTail = null),
                            (this._movesHead = null),
                            (this._movesTail = null),
                            (this._removalsHead = null),
                            (this._removalsTail = null),
                            (this._identityChangesHead = null),
                            (this._identityChangesTail = null),
                            (this._trackByFn = t || Qn);
                    }
                    return (
                        (t.prototype.forEachItem = function (t) {
                            var e;
                            for (e = this._itHead; null !== e; e = e._next) t(e);
                        }),
                        (t.prototype.forEachOperation = function (t) {
                            for (var e = this._itHead, n = this._removalsHead, r = 0, o = null; e || n; ) {
                                var i = !n || (e && e.currentIndex < Jn(n, r, o)) ? e : n,
                                    a = Jn(i, r, o),
                                    s = i.currentIndex;
                                if (i === n) r--, (n = n._nextRemoved);
                                else if (((e = e._next), null == i.previousIndex)) r++;
                                else {
                                    o || (o = []);
                                    var u = a - r,
                                        l = s - r;
                                    if (u != l) {
                                        for (var c = 0; c < u; c++) {
                                            var h = c < o.length ? o[c] : (o[c] = 0),
                                                p = h + c;
                                            l <= p && p < u && (o[c] = h + 1);
                                        }
                                        o[i.previousIndex] = l - u;
                                    }
                                }
                                a !== s && t(i, a, s);
                            }
                        }),
                        (t.prototype.forEachPreviousItem = function (t) {
                            var e;
                            for (e = this._previousItHead; null !== e; e = e._nextPrevious) t(e);
                        }),
                        (t.prototype.forEachAddedItem = function (t) {
                            var e;
                            for (e = this._additionsHead; null !== e; e = e._nextAdded) t(e);
                        }),
                        (t.prototype.forEachMovedItem = function (t) {
                            var e;
                            for (e = this._movesHead; null !== e; e = e._nextMoved) t(e);
                        }),
                        (t.prototype.forEachRemovedItem = function (t) {
                            var e;
                            for (e = this._removalsHead; null !== e; e = e._nextRemoved) t(e);
                        }),
                        (t.prototype.forEachIdentityChange = function (t) {
                            var e;
                            for (e = this._identityChangesHead; null !== e; e = e._nextIdentityChange) t(e);
                        }),
                        (t.prototype.diff = function (t) {
                            if ((null == t && (t = []), !Gn(t))) throw new Error("Error trying to diff '" + Nt(t) + "'. Only arrays and iterables are allowed");
                            return this.check(t) ? this : null;
                        }),
                        (t.prototype.onDestroy = function () {}),
                        (t.prototype.check = function (t) {
                            var e = this;
                            this._reset();
                            var n,
                                r,
                                o,
                                i = this._itHead,
                                a = !1;
                            if (Array.isArray(t)) {
                                this.length = t.length;
                                for (var s = 0; s < this.length; s++)
                                    (o = this._trackByFn(s, (r = t[s]))),
                                        null !== i && Pt(i.trackById, o) ? (a && (i = this._verifyReinsertion(i, r, o, s)), Pt(i.item, r) || this._addIdentityChange(i, r)) : ((i = this._mismatch(i, r, o, s)), (a = !0)),
                                        (i = i._next);
                            } else
                                (n = 0),
                                    (function (t, e) {
                                        if (Array.isArray(t)) for (var n = 0; n < t.length; n++) e(t[n]);
                                        else for (var r = t[At()](), o = void 0; !(o = r.next()).done; ) e(o.value);
                                    })(t, function (t) {
                                        (o = e._trackByFn(n, t)),
                                            null !== i && Pt(i.trackById, o) ? (a && (i = e._verifyReinsertion(i, t, o, n)), Pt(i.item, t) || e._addIdentityChange(i, t)) : ((i = e._mismatch(i, t, o, n)), (a = !0)),
                                            (i = i._next),
                                            n++;
                                    }),
                                    (this.length = n);
                            return this._truncate(i), (this.collection = t), this.isDirty;
                        }),
                        Object.defineProperty(t.prototype, "isDirty", {
                            get: function () {
                                return null !== this._additionsHead || null !== this._movesHead || null !== this._removalsHead || null !== this._identityChangesHead;
                            },
                            enumerable: !0,
                            configurable: !0,
                        }),
                        (t.prototype._reset = function () {
                            if (this.isDirty) {
                                var t = void 0,
                                    e = void 0;
                                for (t = this._previousItHead = this._itHead; null !== t; t = t._next) t._nextPrevious = t._next;
                                for (t = this._additionsHead; null !== t; t = t._nextAdded) t.previousIndex = t.currentIndex;
                                for (this._additionsHead = this._additionsTail = null, t = this._movesHead; null !== t; t = e) (t.previousIndex = t.currentIndex), (e = t._nextMoved);
                                (this._movesHead = this._movesTail = null), (this._removalsHead = this._removalsTail = null), (this._identityChangesHead = this._identityChangesTail = null);
                            }
                        }),
                        (t.prototype._mismatch = function (t, e, n, r) {
                            var o;
                            return (
                                null === t ? (o = this._itTail) : ((o = t._prev), this._remove(t)),
                                null !== (t = null === this._linkedRecords ? null : this._linkedRecords.get(n, r))
                                    ? (Pt(t.item, e) || this._addIdentityChange(t, e), this._moveAfter(t, o, r))
                                    : null !== (t = null === this._unlinkedRecords ? null : this._unlinkedRecords.get(n, null))
                                    ? (Pt(t.item, e) || this._addIdentityChange(t, e), this._reinsertAfter(t, o, r))
                                    : (t = this._addAfter(new Kn(e, n), o, r)),
                                t
                            );
                        }),
                        (t.prototype._verifyReinsertion = function (t, e, n, r) {
                            var o = null === this._unlinkedRecords ? null : this._unlinkedRecords.get(n, null);
                            return null !== o ? (t = this._reinsertAfter(o, t._prev, r)) : t.currentIndex != r && ((t.currentIndex = r), this._addToMoves(t, r)), t;
                        }),
                        (t.prototype._truncate = function (t) {
                            for (; null !== t; ) {
                                var e = t._next;
                                this._addToRemovals(this._unlink(t)), (t = e);
                            }
                            null !== this._unlinkedRecords && this._unlinkedRecords.clear(),
                                null !== this._additionsTail && (this._additionsTail._nextAdded = null),
                                null !== this._movesTail && (this._movesTail._nextMoved = null),
                                null !== this._itTail && (this._itTail._next = null),
                                null !== this._removalsTail && (this._removalsTail._nextRemoved = null),
                                null !== this._identityChangesTail && (this._identityChangesTail._nextIdentityChange = null);
                        }),
                        (t.prototype._reinsertAfter = function (t, e, n) {
                            null !== this._unlinkedRecords && this._unlinkedRecords.remove(t);
                            var r = t._prevRemoved,
                                o = t._nextRemoved;
                            return null === r ? (this._removalsHead = o) : (r._nextRemoved = o), null === o ? (this._removalsTail = r) : (o._prevRemoved = r), this._insertAfter(t, e, n), this._addToMoves(t, n), t;
                        }),
                        (t.prototype._moveAfter = function (t, e, n) {
                            return this._unlink(t), this._insertAfter(t, e, n), this._addToMoves(t, n), t;
                        }),
                        (t.prototype._addAfter = function (t, e, n) {
                            return this._insertAfter(t, e, n), (this._additionsTail = null === this._additionsTail ? (this._additionsHead = t) : (this._additionsTail._nextAdded = t)), t;
                        }),
                        (t.prototype._insertAfter = function (t, e, n) {
                            var r = null === e ? this._itHead : e._next;
                            return (
                                (t._next = r),
                                (t._prev = e),
                                null === r ? (this._itTail = t) : (r._prev = t),
                                null === e ? (this._itHead = t) : (e._next = t),
                                null === this._linkedRecords && (this._linkedRecords = new $n()),
                                this._linkedRecords.put(t),
                                (t.currentIndex = n),
                                t
                            );
                        }),
                        (t.prototype._remove = function (t) {
                            return this._addToRemovals(this._unlink(t));
                        }),
                        (t.prototype._unlink = function (t) {
                            null !== this._linkedRecords && this._linkedRecords.remove(t);
                            var e = t._prev,
                                n = t._next;
                            return null === e ? (this._itHead = n) : (e._next = n), null === n ? (this._itTail = e) : (n._prev = e), t;
                        }),
                        (t.prototype._addToMoves = function (t, e) {
                            return t.previousIndex === e ? t : ((this._movesTail = null === this._movesTail ? (this._movesHead = t) : (this._movesTail._nextMoved = t)), t);
                        }),
                        (t.prototype._addToRemovals = function (t) {
                            return (
                                null === this._unlinkedRecords && (this._unlinkedRecords = new $n()),
                                this._unlinkedRecords.put(t),
                                (t.currentIndex = null),
                                (t._nextRemoved = null),
                                null === this._removalsTail ? ((this._removalsTail = this._removalsHead = t), (t._prevRemoved = null)) : ((t._prevRemoved = this._removalsTail), (this._removalsTail = this._removalsTail._nextRemoved = t)),
                                t
                            );
                        }),
                        (t.prototype._addIdentityChange = function (t, e) {
                            return (t.item = e), (this._identityChangesTail = null === this._identityChangesTail ? (this._identityChangesHead = t) : (this._identityChangesTail._nextIdentityChange = t)), t;
                        }),
                        t
                    );
                })(),
                Kn = function (t, e) {
                    (this.item = t),
                        (this.trackById = e),
                        (this.currentIndex = null),
                        (this.previousIndex = null),
                        (this._nextPrevious = null),
                        (this._prev = null),
                        (this._next = null),
                        (this._prevDup = null),
                        (this._nextDup = null),
                        (this._prevRemoved = null),
                        (this._nextRemoved = null),
                        (this._nextAdded = null),
                        (this._nextMoved = null),
                        (this._nextIdentityChange = null);
                },
                Xn = (function () {
                    function t() {
                        (this._head = null), (this._tail = null);
                    }
                    return (
                        (t.prototype.add = function (t) {
                            null === this._head ? ((this._head = this._tail = t), (t._nextDup = null), (t._prevDup = null)) : ((this._tail._nextDup = t), (t._prevDup = this._tail), (t._nextDup = null), (this._tail = t));
                        }),
                        (t.prototype.get = function (t, e) {
                            var n;
                            for (n = this._head; null !== n; n = n._nextDup) if ((null === e || e <= n.currentIndex) && Pt(n.trackById, t)) return n;
                            return null;
                        }),
                        (t.prototype.remove = function (t) {
                            var e = t._prevDup,
                                n = t._nextDup;
                            return null === e ? (this._head = n) : (e._nextDup = n), null === n ? (this._tail = e) : (n._prevDup = e), null === this._head;
                        }),
                        t
                    );
                })(),
                $n = (function () {
                    function t() {
                        this.map = new Map();
                    }
                    return (
                        (t.prototype.put = function (t) {
                            var e = t.trackById,
                                n = this.map.get(e);
                            n || ((n = new Xn()), this.map.set(e, n)), n.add(t);
                        }),
                        (t.prototype.get = function (t, e) {
                            var n = this.map.get(t);
                            return n ? n.get(t, e) : null;
                        }),
                        (t.prototype.remove = function (t) {
                            var e = t.trackById;
                            return this.map.get(e).remove(t) && this.map.delete(e), t;
                        }),
                        Object.defineProperty(t.prototype, "isEmpty", {
                            get: function () {
                                return 0 === this.map.size;
                            },
                            enumerable: !0,
                            configurable: !0,
                        }),
                        (t.prototype.clear = function () {
                            this.map.clear();
                        }),
                        t
                    );
                })();
            function Jn(t, e, n) {
                var r = t.previousIndex;
                if (null === r) return r;
                var o = 0;
                return n && r < n.length && (o = n[r]), r + e + o;
            }
            var tr = (function () {
                    function t() {}
                    return (
                        (t.prototype.supports = function (t) {
                            return t instanceof Map || Zn(t);
                        }),
                        (t.prototype.create = function () {
                            return new er();
                        }),
                        t
                    );
                })(),
                er = (function () {
                    function t() {
                        (this._records = new Map()),
                            (this._mapHead = null),
                            (this._appendAfter = null),
                            (this._previousMapHead = null),
                            (this._changesHead = null),
                            (this._changesTail = null),
                            (this._additionsHead = null),
                            (this._additionsTail = null),
                            (this._removalsHead = null),
                            (this._removalsTail = null);
                    }
                    return (
                        Object.defineProperty(t.prototype, "isDirty", {
                            get: function () {
                                return null !== this._additionsHead || null !== this._changesHead || null !== this._removalsHead;
                            },
                            enumerable: !0,
                            configurable: !0,
                        }),
                        (t.prototype.forEachItem = function (t) {
                            var e;
                            for (e = this._mapHead; null !== e; e = e._next) t(e);
                        }),
                        (t.prototype.forEachPreviousItem = function (t) {
                            var e;
                            for (e = this._previousMapHead; null !== e; e = e._nextPrevious) t(e);
                        }),
                        (t.prototype.forEachChangedItem = function (t) {
                            var e;
                            for (e = this._changesHead; null !== e; e = e._nextChanged) t(e);
                        }),
                        (t.prototype.forEachAddedItem = function (t) {
                            var e;
                            for (e = this._additionsHead; null !== e; e = e._nextAdded) t(e);
                        }),
                        (t.prototype.forEachRemovedItem = function (t) {
                            var e;
                            for (e = this._removalsHead; null !== e; e = e._nextRemoved) t(e);
                        }),
                        (t.prototype.diff = function (t) {
                            if (t) {
                                if (!(t instanceof Map || Zn(t))) throw new Error("Error trying to diff '" + Nt(t) + "'. Only maps and objects are allowed");
                            } else t = new Map();
                            return this.check(t) ? this : null;
                        }),
                        (t.prototype.onDestroy = function () {}),
                        (t.prototype.check = function (t) {
                            var e = this;
                            this._reset();
                            var n = this._mapHead;
                            if (
                                ((this._appendAfter = null),
                                this._forEach(t, function (t, r) {
                                    if (n && n.key === r) e._maybeAddToChanges(n, t), (e._appendAfter = n), (n = n._next);
                                    else {
                                        var o = e._getOrCreateRecordForKey(r, t);
                                        n = e._insertBeforeOrAppend(n, o);
                                    }
                                }),
                                n)
                            ) {
                                n._prev && (n._prev._next = null), (this._removalsHead = n);
                                for (var r = n; null !== r; r = r._nextRemoved)
                                    r === this._mapHead && (this._mapHead = null), this._records.delete(r.key), (r._nextRemoved = r._next), (r.previousValue = r.currentValue), (r.currentValue = null), (r._prev = null), (r._next = null);
                            }
                            return this._changesTail && (this._changesTail._nextChanged = null), this._additionsTail && (this._additionsTail._nextAdded = null), this.isDirty;
                        }),
                        (t.prototype._insertBeforeOrAppend = function (t, e) {
                            if (t) {
                                var n = t._prev;
                                return (e._next = t), (e._prev = n), (t._prev = e), n && (n._next = e), t === this._mapHead && (this._mapHead = e), (this._appendAfter = t), t;
                            }
                            return this._appendAfter ? ((this._appendAfter._next = e), (e._prev = this._appendAfter)) : (this._mapHead = e), (this._appendAfter = e), null;
                        }),
                        (t.prototype._getOrCreateRecordForKey = function (t, e) {
                            if (this._records.has(t)) {
                                var n = this._records.get(t);
                                this._maybeAddToChanges(n, e);
                                var r = n._prev,
                                    o = n._next;
                                return r && (r._next = o), o && (o._prev = r), (n._next = null), (n._prev = null), n;
                            }
                            var i = new nr(t);
                            return this._records.set(t, i), (i.currentValue = e), this._addToAdditions(i), i;
                        }),
                        (t.prototype._reset = function () {
                            if (this.isDirty) {
                                var t = void 0;
                                for (this._previousMapHead = this._mapHead, t = this._previousMapHead; null !== t; t = t._next) t._nextPrevious = t._next;
                                for (t = this._changesHead; null !== t; t = t._nextChanged) t.previousValue = t.currentValue;
                                for (t = this._additionsHead; null != t; t = t._nextAdded) t.previousValue = t.currentValue;
                                (this._changesHead = this._changesTail = null), (this._additionsHead = this._additionsTail = null), (this._removalsHead = null);
                            }
                        }),
                        (t.prototype._maybeAddToChanges = function (t, e) {
                            Pt(e, t.currentValue) || ((t.previousValue = t.currentValue), (t.currentValue = e), this._addToChanges(t));
                        }),
                        (t.prototype._addToAdditions = function (t) {
                            null === this._additionsHead ? (this._additionsHead = this._additionsTail = t) : ((this._additionsTail._nextAdded = t), (this._additionsTail = t));
                        }),
                        (t.prototype._addToChanges = function (t) {
                            null === this._changesHead ? (this._changesHead = this._changesTail = t) : ((this._changesTail._nextChanged = t), (this._changesTail = t));
                        }),
                        (t.prototype._forEach = function (t, e) {
                            t instanceof Map
                                ? t.forEach(e)
                                : Object.keys(t).forEach(function (n) {
                                      return e(t[n], n);
                                  });
                        }),
                        t
                    );
                })(),
                nr = function (t) {
                    (this.key = t),
                        (this.previousValue = null),
                        (this.currentValue = null),
                        (this._nextPrevious = null),
                        (this._next = null),
                        (this._prev = null),
                        (this._nextAdded = null),
                        (this._nextRemoved = null),
                        (this._nextChanged = null);
                },
                rr = (function () {
                    function t(t) {
                        this.factories = t;
                    }
                    return (
                        (t.create = function (e, n) {
                            if (null != n) {
                                var r = n.factories.slice();
                                e = e.concat(r);
                            }
                            return new t(e);
                        }),
                        (t.extend = function (e) {
                            return {
                                provide: t,
                                useFactory: function (n) {
                                    if (!n) throw new Error("Cannot extend IterableDiffers without a parent injector");
                                    return t.create(e, n);
                                },
                                deps: [[t, new jt(), new Mt()]],
                            };
                        }),
                        (t.prototype.find = function (t) {
                            var e,
                                n = this.factories.find(function (e) {
                                    return e.supports(t);
                                });
                            if (null != n) return n;
                            throw new Error("Cannot find a differ supporting object '" + t + "' of type '" + ((e = t).name || typeof e) + "'");
                        }),
                        (t.ngInjectableDef = gt({
                            providedIn: "root",
                            factory: function () {
                                return new t([new Wn()]);
                            },
                        })),
                        t
                    );
                })(),
                or = (function () {
                    function t(t) {
                        this.factories = t;
                    }
                    return (
                        (t.create = function (e, n) {
                            if (n) {
                                var r = n.factories.slice();
                                e = e.concat(r);
                            }
                            return new t(e);
                        }),
                        (t.extend = function (e) {
                            return {
                                provide: t,
                                useFactory: function (n) {
                                    if (!n) throw new Error("Cannot extend KeyValueDiffers without a parent injector");
                                    return t.create(e, n);
                                },
                                deps: [[t, new jt(), new Mt()]],
                            };
                        }),
                        (t.prototype.find = function (t) {
                            var e = this.factories.find(function (e) {
                                return e.supports(t);
                            });
                            if (e) return e;
                            throw new Error("Cannot find a differ supporting object '" + t + "'");
                        }),
                        t
                    );
                })(),
                ir = [new tr()],
                ar = new rr([new Wn()]),
                sr = new or(ir),
                ur = bn(null, "core", [
                    { provide: De, useValue: "unknown" },
                    { provide: _n, deps: [Bt] },
                    { provide: pn, deps: [] },
                    { provide: Me, deps: [] },
                ]),
                lr = new mt("LocaleId");
            function cr() {
                return ar;
            }
            function hr() {
                return sr;
            }
            function pr(t) {
                return t || "en-US";
            }
            var fr = function (t) {},
                dr = (function () {
                    function t(t) {
                        if (((this.defaultDoc = t), (this.inertDocument = this.defaultDoc.implementation.createHTMLDocument("sanitization-inert")), (this.inertBodyElement = this.inertDocument.body), null == this.inertBodyElement)) {
                            var e = this.inertDocument.createElement("html");
                            this.inertDocument.appendChild(e), (this.inertBodyElement = this.inertDocument.createElement("body")), e.appendChild(this.inertBodyElement);
                        }
                        (this.inertBodyElement.innerHTML = '<svg><g onload="this.parentNode.remove()"></g></svg>'),
                            !this.inertBodyElement.querySelector || this.inertBodyElement.querySelector("svg")
                                ? ((this.inertBodyElement.innerHTML = '<svg><p><style><img src="</style><img src=x onerror=alert(1)//">'),
                                  (this.getInertBodyElement =
                                      this.inertBodyElement.querySelector &&
                                      this.inertBodyElement.querySelector("svg img") &&
                                      (function () {
                                          try {
                                              return !!window.DOMParser;
                                          } catch (t) {
                                              return !1;
                                          }
                                      })()
                                          ? this.getInertBodyElement_DOMParser
                                          : this.getInertBodyElement_InertDocument))
                                : (this.getInertBodyElement = this.getInertBodyElement_XHR);
                    }
                    return (
                        (t.prototype.getInertBodyElement_XHR = function (t) {
                            t = "<body><remove></remove>" + t + "</body>";
                            try {
                                t = encodeURI(t);
                            } catch (t) {
                                return null;
                            }
                            var e = new XMLHttpRequest();
                            (e.responseType = "document"), e.open("GET", "data:text/html;charset=utf-8," + t, !1), e.send(null);
                            var n = e.response.body;
                            return n.removeChild(n.firstChild), n;
                        }),
                        (t.prototype.getInertBodyElement_DOMParser = function (t) {
                            t = "<body><remove></remove>" + t + "</body>";
                            try {
                                var e = new window.DOMParser().parseFromString(t, "text/html").body;
                                return e.removeChild(e.firstChild), e;
                            } catch (t) {
                                return null;
                            }
                        }),
                        (t.prototype.getInertBodyElement_InertDocument = function (t) {
                            var e = this.inertDocument.createElement("template");
                            return "content" in e ? ((e.innerHTML = t), e) : ((this.inertBodyElement.innerHTML = t), this.defaultDoc.documentMode && this.stripCustomNsAttrs(this.inertBodyElement), this.inertBodyElement);
                        }),
                        (t.prototype.stripCustomNsAttrs = function (t) {
                            for (var e = t.attributes, n = e.length - 1; 0 < n; n--) {
                                var r = e.item(n).name;
                                ("xmlns:ns1" !== r && 0 !== r.indexOf("ns1:")) || t.removeAttribute(r);
                            }
                            for (var o = t.firstChild; o; ) o.nodeType === Node.ELEMENT_NODE && this.stripCustomNsAttrs(o), (o = o.nextSibling);
                        }),
                        t
                    );
                })(),
                vr = /^(?:(?:https?|mailto|ftp|tel|file):|[^&:/?#]*(?:[/?#]|$))/gi,
                yr = /^data:(?:image\/(?:bmp|gif|jpeg|jpg|png|tiff|webp)|video\/(?:mpeg|mp4|ogg|webm)|audio\/(?:mp3|oga|ogg|opus));base64,[a-z0-9+\/]+=*$/i;
            function gr(t) {
                return (t = String(t)).match(vr) || t.match(yr) ? t : (gn() && console.warn("WARNING: sanitizing unsafe URL value " + t + " (see http://g.co/ng/security#xss)"), "unsafe:" + t);
            }
            function mr(t) {
                var e,
                    n,
                    r = {};
                try {
                    for (var o = l(t.split(",")), i = o.next(); !i.done; i = o.next()) r[i.value] = !0;
                } catch (t) {
                    e = { error: t };
                } finally {
                    try {
                        i && !i.done && (n = o.return) && n.call(o);
                    } finally {
                        if (e) throw e.error;
                    }
                }
                return r;
            }
            function br() {
                for (var t, e, n = [], r = 0; r < arguments.length; r++) n[r] = arguments[r];
                var o = {};
                try {
                    for (var i = l(n), a = i.next(); !a.done; a = i.next()) {
                        var s = a.value;
                        for (var u in s) s.hasOwnProperty(u) && (o[u] = !0);
                    }
                } catch (e) {
                    t = { error: e };
                } finally {
                    try {
                        a && !a.done && (e = i.return) && e.call(i);
                    } finally {
                        if (t) throw t.error;
                    }
                }
                return o;
            }
            var wr,
                _r = mr("area,br,col,hr,img,wbr"),
                Cr = mr("colgroup,dd,dt,li,p,tbody,td,tfoot,th,thead,tr"),
                Er = mr("rp,rt"),
                Sr = br(Er, Cr),
                xr = br(
                    _r,
                    br(Cr, mr("address,article,aside,blockquote,caption,center,del,details,dialog,dir,div,dl,figure,figcaption,footer,h1,h2,h3,h4,h5,h6,header,hgroup,hr,ins,main,map,menu,nav,ol,pre,section,summary,table,ul")),
                    br(Er, mr("a,abbr,acronym,audio,b,bdi,bdo,big,br,cite,code,del,dfn,em,font,i,img,ins,kbd,label,map,mark,picture,q,ruby,rp,rt,s,samp,small,source,span,strike,strong,sub,sup,time,track,tt,u,var,video")),
                    Sr
                ),
                Tr = mr("background,cite,href,itemtype,longdesc,poster,src,xlink:href"),
                kr = mr("srcset"),
                Ar = br(
                    Tr,
                    kr,
                    mr(
                        "abbr,accesskey,align,alt,autoplay,axis,bgcolor,border,cellpadding,cellspacing,class,clear,color,cols,colspan,compact,controls,coords,datetime,default,dir,download,face,headers,height,hidden,hreflang,hspace,ismap,itemscope,itemprop,kind,label,lang,language,loop,media,muted,nohref,nowrap,open,preload,rel,rev,role,rows,rowspan,rules,scope,scrolling,shape,size,sizes,span,srclang,start,summary,tabindex,target,title,translate,type,usemap,valign,value,vspace,width"
                    )
                ),
                Ir = (function () {
                    function t() {
                        (this.sanitizedSomething = !1), (this.buf = []);
                    }
                    return (
                        (t.prototype.sanitizeChildren = function (t) {
                            for (var e = t.firstChild; e; )
                                if ((e.nodeType === Node.ELEMENT_NODE ? this.startElement(e) : e.nodeType === Node.TEXT_NODE ? this.chars(e.nodeValue) : (this.sanitizedSomething = !0), e.firstChild)) e = e.firstChild;
                                else
                                    for (; e; ) {
                                        e.nodeType === Node.ELEMENT_NODE && this.endElement(e);
                                        var n = this.checkClobberedElement(e, e.nextSibling);
                                        if (n) {
                                            e = n;
                                            break;
                                        }
                                        e = this.checkClobberedElement(e, e.parentNode);
                                    }
                            return this.buf.join("");
                        }),
                        (t.prototype.startElement = function (t) {
                            var e = t.nodeName.toLowerCase();
                            if (xr.hasOwnProperty(e)) {
                                this.buf.push("<"), this.buf.push(e);
                                for (var n, r = t.attributes, o = 0; o < r.length; o++) {
                                    var i = r.item(o),
                                        a = i.name,
                                        s = a.toLowerCase();
                                    if (Ar.hasOwnProperty(s)) {
                                        var u = i.value;
                                        Tr[s] && (u = gr(u)),
                                            kr[s] &&
                                                ((n = u),
                                                (u = (n = String(n))
                                                    .split(",")
                                                    .map(function (t) {
                                                        return gr(t.trim());
                                                    })
                                                    .join(", "))),
                                            this.buf.push(" ", a, '="', Rr(u), '"');
                                    } else this.sanitizedSomething = !0;
                                }
                                this.buf.push(">");
                            } else this.sanitizedSomething = !0;
                        }),
                        (t.prototype.endElement = function (t) {
                            var e = t.nodeName.toLowerCase();
                            xr.hasOwnProperty(e) && !_r.hasOwnProperty(e) && (this.buf.push("</"), this.buf.push(e), this.buf.push(">"));
                        }),
                        (t.prototype.chars = function (t) {
                            this.buf.push(Rr(t));
                        }),
                        (t.prototype.checkClobberedElement = function (t, e) {
                            if (e && (t.compareDocumentPosition(e) & Node.DOCUMENT_POSITION_CONTAINED_BY) === Node.DOCUMENT_POSITION_CONTAINED_BY) throw new Error("Failed to sanitize html because the element is clobbered: " + t.outerHTML);
                            return e;
                        }),
                        t
                    );
                })(),
                Pr = /[\uD800-\uDBFF][\uDC00-\uDFFF]/g,
                Nr = /([^\#-~ |!])/g;
            function Rr(t) {
                return t
                    .replace(/&/g, "&amp;")
                    .replace(Pr, function (t) {
                        return "&#" + (1024 * (t.charCodeAt(0) - 55296) + (t.charCodeAt(1) - 56320) + 65536) + ";";
                    })
                    .replace(Nr, function (t) {
                        return "&#" + t.charCodeAt(0) + ";";
                    })
                    .replace(/</g, "&lt;")
                    .replace(/>/g, "&gt;");
            }
            function Dr(t) {
                return "content" in t &&
                    (function (t) {
                        return t.nodeType === Node.ELEMENT_NODE && "TEMPLATE" === t.nodeName;
                    })(t)
                    ? t.content
                    : null;
            }
            var Or = new RegExp("^([-,.\"'%_!# a-zA-Z0-9]+|(?:(?:matrix|translate|scale|rotate|skew|perspective)(?:X|Y|3d)?|(?:rgb|hsl)a?|(?:repeating-)?(?:linear|radial)-gradient|(?:calc|attr))\\([-0-9.%, #a-zA-Z]+\\))$", "g"),
                Mr = /^url\(([^)]+)\)$/,
                Vr = (function (t) {
                    return (t[(t.NONE = 0)] = "NONE"), (t[(t.HTML = 1)] = "HTML"), (t[(t.STYLE = 2)] = "STYLE"), (t[(t.SCRIPT = 3)] = "SCRIPT"), (t[(t.URL = 4)] = "URL"), (t[(t.RESOURCE_URL = 5)] = "RESOURCE_URL"), t;
                })({}),
                jr = function () {};
            function Ur(t, e, n) {
                var r = t.state,
                    o = 1792 & r;
                return o === e ? ((t.state = (-1793 & r) | n), (t.initIndex = -1), !0) : o === n;
            }
            function Lr(t, e, n) {
                return (1792 & t.state) === e && t.initIndex <= n && ((t.initIndex = n + 1), !0);
            }
            function Hr(t, e) {
                return t.nodes[e];
            }
            function Fr(t, e) {
                return t.nodes[e];
            }
            function zr(t, e) {
                return t.nodes[e];
            }
            function Br(t, e) {
                return t.nodes[e];
            }
            function qr(t, e) {
                return t.nodes[e];
            }
            var Gr = {
                setCurrentNode: void 0,
                createRootView: void 0,
                createEmbeddedView: void 0,
                createComponentView: void 0,
                createNgModuleRef: void 0,
                overrideProvider: void 0,
                overrideComponentView: void 0,
                clearOverrides: void 0,
                checkAndUpdateView: void 0,
                checkNoChangesView: void 0,
                destroyView: void 0,
                resolveDep: void 0,
                createDebugContext: void 0,
                handleEvent: void 0,
                updateDirectives: void 0,
                updateRenderer: void 0,
                dirtyParentQueries: void 0,
            };
            function Zr(t, e, n, r) {
                var o = "ExpressionChangedAfterItHasBeenCheckedError: Expression has changed after it was checked. Previous value: '" + e + "'. Current value: '" + n + "'.";
                return (
                    r && (o += " It seems like the view has been created after its parent and its children have been dirty checked. Has it been created in a change detection hook ?"),
                    (function (t, e) {
                        var n = new Error(t);
                        return Wr(n, e), n;
                    })(o, t)
                );
            }
            function Wr(t, e) {
                (t[le] = e), (t[he] = e.logError.bind(e));
            }
            function Qr(t) {
                return new Error("ViewDestroyedError: Attempt to use a destroyed view: " + t);
            }
            var Yr = function () {},
                Kr = new Map();
            function Xr(t) {
                var e = Kr.get(t);
                return e || ((e = Nt(t) + "_" + Kr.size), Kr.set(t, e)), e;
            }
            var $r = "$$undefined",
                Jr = "$$empty";
            function to(t) {
                return { id: $r, styles: t.styles, encapsulation: t.encapsulation, data: t.data };
            }
            var eo = 0;
            function no(t, e, n, r) {
                return !(!(2 & t.state) && Pt(t.oldValues[e.bindingIndex + n], r));
            }
            function ro(t, e, n, r) {
                return !!no(t, e, n, r) && ((t.oldValues[e.bindingIndex + n] = r), !0);
            }
            function oo(t, e, n, r) {
                var o = t.oldValues[e.bindingIndex + n];
                if (1 & t.state || !zn(o, r)) {
                    var i = e.bindings[n].name;
                    throw Zr(Gr.createDebugContext(t, e.nodeIndex), i + ": " + o, i + ": " + r, 0 != (1 & t.state));
                }
            }
            function io(t) {
                for (var e = t; e; ) 2 & e.def.flags && (e.state |= 8), (e = e.viewContainerParent || e.parent);
            }
            function ao(t, e) {
                for (var n = t; n && n !== e; ) (n.state |= 64), (n = n.viewContainerParent || n.parent);
            }
            function so(t, e, n, r) {
                try {
                    return io(33554432 & t.def.nodes[e].flags ? Fr(t, e).componentView : t), Gr.handleEvent(t, e, n, r);
                } catch (e) {
                    t.root.errorHandler.handleError(e);
                }
            }
            function uo(t) {
                return t.parent ? Fr(t.parent, t.parentNodeDef.nodeIndex) : null;
            }
            function lo(t) {
                return t.parent ? t.parentNodeDef.parent : null;
            }
            function co(t, e) {
                switch (201347067 & e.flags) {
                    case 1:
                        return Fr(t, e.nodeIndex).renderElement;
                    case 2:
                        return Hr(t, e.nodeIndex).renderText;
                }
            }
            function ho(t) {
                return !!t.parent && !!(32768 & t.parentNodeDef.flags);
            }
            function po(t) {
                return !(!t.parent || 32768 & t.parentNodeDef.flags);
            }
            function fo(t) {
                return 1 << t % 32;
            }
            function vo(t) {
                var e = {},
                    n = 0,
                    r = {};
                return (
                    t &&
                        t.forEach(function (t) {
                            var o = c(t, 2),
                                i = o[0],
                                a = o[1];
                            "number" == typeof i ? ((e[i] = a), (n |= fo(i))) : (r[i] = a);
                        }),
                    { matchedQueries: e, references: r, matchedQueryIds: n }
                );
            }
            function yo(t, e) {
                return t.map(function (t) {
                    var n, r, o;
                    return (
                        Array.isArray(t) ? ((o = (n = c(t, 2))[0]), (r = n[1])) : ((o = 0), (r = t)),
                        r && ("function" == typeof r || "object" == typeof r) && e && Object.defineProperty(r, Ut, { value: e, configurable: !0 }),
                        { flags: o, token: r, tokenKey: Xr(r) }
                    );
                });
            }
            function go(t, e, n) {
                var r = n.renderParent;
                return r ? (0 == (1 & r.flags) || 0 == (33554432 & r.flags) || (r.element.componentRendererType && r.element.componentRendererType.encapsulation === se.Native) ? Fr(t, n.renderParent.nodeIndex).renderElement : void 0) : e;
            }
            var mo = new WeakMap();
            function bo(t) {
                var e = mo.get(t);
                return (
                    e ||
                        (((e = t(function () {
                            return Yr;
                        })).factory = t),
                        mo.set(t, e)),
                    e
                );
            }
            function wo(t, e, n, r, o) {
                3 === e && (n = t.renderer.parentNode(co(t, t.def.lastRenderRootNode))), _o(t, e, 0, t.def.nodes.length - 1, n, r, o);
            }
            function _o(t, e, n, r, o, i, a) {
                for (var s = n; s <= r; s++) {
                    var u = t.def.nodes[s];
                    11 & u.flags && Eo(t, u, e, o, i, a), (s += u.childCount);
                }
            }
            function Co(t, e, n, r, o, i) {
                for (var a = t; a && !ho(a); ) a = a.parent;
                for (var s = a.parent, u = lo(a), l = u.nodeIndex + u.childCount, c = u.nodeIndex + 1; c <= l; c++) {
                    var h = s.def.nodes[c];
                    h.ngContentIndex === e && Eo(s, h, n, r, o, i), (c += h.childCount);
                }
                if (!s.parent) {
                    var p = t.root.projectableNodes[e];
                    if (p) for (c = 0; c < p.length; c++) So(t, p[c], n, r, o, i);
                }
            }
            function Eo(t, e, n, r, o, i) {
                if (8 & e.flags) Co(t, e.ngContent.index, n, r, o, i);
                else {
                    var a = co(t, e);
                    if (
                        (3 === n && 33554432 & e.flags && 48 & e.bindingFlags ? (16 & e.bindingFlags && So(t, a, n, r, o, i), 32 & e.bindingFlags && So(Fr(t, e.nodeIndex).componentView, a, n, r, o, i)) : So(t, a, n, r, o, i),
                        16777216 & e.flags)
                    )
                        for (var s = Fr(t, e.nodeIndex).viewContainer._embeddedViews, u = 0; u < s.length; u++) wo(s[u], n, r, o, i);
                    1 & e.flags && !e.element.name && _o(t, n, e.nodeIndex + 1, e.nodeIndex + e.childCount, r, o, i);
                }
            }
            function So(t, e, n, r, o, i) {
                var a = t.renderer;
                switch (n) {
                    case 1:
                        a.appendChild(r, e);
                        break;
                    case 2:
                        a.insertBefore(r, e, o);
                        break;
                    case 3:
                        a.removeChild(r, e);
                        break;
                    case 0:
                        i.push(e);
                }
            }
            var xo = /^:([^:]+):(.+)$/;
            function To(t) {
                if (":" === t[0]) {
                    var e = t.match(xo);
                    return [e[1], e[2]];
                }
                return ["", t];
            }
            function ko(t) {
                for (var e = 0, n = 0; n < t.length; n++) e |= t[n].flags;
                return e;
            }
            function Ao(t, e, n, r, o, i) {
                t |= 1;
                var a = vo(e);
                return {
                    nodeIndex: -1,
                    parent: null,
                    renderParent: null,
                    bindingIndex: -1,
                    outputIndex: -1,
                    flags: t,
                    checkIndex: -1,
                    childFlags: 0,
                    directChildFlags: 0,
                    childMatchedQueries: 0,
                    matchedQueries: a.matchedQueries,
                    matchedQueryIds: a.matchedQueryIds,
                    references: a.references,
                    ngContentIndex: n,
                    childCount: r,
                    bindings: [],
                    bindingFlags: 0,
                    outputs: [],
                    element: { ns: null, name: null, attrs: null, template: i ? bo(i) : null, componentProvider: null, componentView: null, componentRendererType: null, publicProviders: null, allProviders: null, handleEvent: o || Yr },
                    provider: null,
                    text: null,
                    query: null,
                    ngContent: null,
                };
            }
            function Io(t, e, n, r, o, i, a, s, u, l, h, p) {
                var f;
                void 0 === a && (a = []), l || (l = Yr);
                var d = vo(n),
                    v = d.matchedQueries,
                    y = d.references,
                    g = d.matchedQueryIds,
                    m = null,
                    b = null;
                i && ((m = (f = c(To(i), 2))[0]), (b = f[1])), (s = s || []);
                for (var w = new Array(s.length), _ = 0; _ < s.length; _++) {
                    var C = c(s[_], 3),
                        E = C[0],
                        S = C[2],
                        x = c(To(C[1]), 2),
                        T = x[0],
                        k = x[1],
                        A = void 0,
                        I = void 0;
                    switch (15 & E) {
                        case 4:
                            I = S;
                            break;
                        case 1:
                        case 8:
                            A = S;
                    }
                    w[_] = { flags: E, ns: T, name: k, nonMinifiedName: k, securityContext: A, suffix: I };
                }
                u = u || [];
                var P = new Array(u.length);
                for (_ = 0; _ < u.length; _++) {
                    var N = c(u[_], 2);
                    P[_] = { type: 0, target: N[0], eventName: N[1], propName: null };
                }
                var R = (a = a || []).map(function (t) {
                    var e = c(t, 2),
                        n = e[1],
                        r = c(To(e[0]), 2);
                    return [r[0], r[1], n];
                });
                return (
                    (p = (function (t) {
                        if (t && t.id === $r) {
                            var e = (null != t.encapsulation && t.encapsulation !== se.None) || t.styles.length || Object.keys(t.data).length;
                            t.id = e ? "c" + eo++ : Jr;
                        }
                        return t && t.id === Jr && (t = null), t || null;
                    })(p)),
                    h && (e |= 33554432),
                    {
                        nodeIndex: -1,
                        parent: null,
                        renderParent: null,
                        bindingIndex: -1,
                        outputIndex: -1,
                        checkIndex: t,
                        flags: (e |= 1),
                        childFlags: 0,
                        directChildFlags: 0,
                        childMatchedQueries: 0,
                        matchedQueries: v,
                        matchedQueryIds: g,
                        references: y,
                        ngContentIndex: r,
                        childCount: o,
                        bindings: w,
                        bindingFlags: ko(w),
                        outputs: P,
                        element: { ns: m, name: b, attrs: R, template: null, componentProvider: null, componentView: h || null, componentRendererType: p, publicProviders: null, allProviders: null, handleEvent: l || Yr },
                        provider: null,
                        text: null,
                        query: null,
                        ngContent: null,
                    }
                );
            }
            function Po(t, e, n) {
                var r,
                    o = n.element,
                    i = t.root.selectorOrNode,
                    a = t.renderer;
                if (t.parent || !i) {
                    r = o.name ? a.createElement(o.name, o.ns) : a.createComment("");
                    var s = go(t, e, n);
                    s && a.appendChild(s, r);
                } else r = a.selectRootElement(i);
                if (o.attrs)
                    for (var u = 0; u < o.attrs.length; u++) {
                        var l = c(o.attrs[u], 3);
                        a.setAttribute(r, l[1], l[2], l[0]);
                    }
                return r;
            }
            function No(t, e, n, r) {
                for (var o = 0; o < n.outputs.length; o++) {
                    var i = n.outputs[o],
                        a = Ro(t, n.nodeIndex, ((h = i.eventName), (c = i.target) ? c + ":" + h : h)),
                        s = i.target,
                        u = t;
                    "component" === i.target && ((s = null), (u = e));
                    var l = u.renderer.listen(s || r, i.eventName, a);
                    t.disposables[n.outputIndex + o] = l;
                }
                var c, h;
            }
            function Ro(t, e, n) {
                return function (r) {
                    return so(t, e, n, r);
                };
            }
            function Do(t, e, n, r) {
                if (!ro(t, e, n, r)) return !1;
                var o = e.bindings[n],
                    i = Fr(t, e.nodeIndex),
                    a = i.renderElement,
                    s = o.name;
                switch (15 & o.flags) {
                    case 1:
                        !(function (t, e, n, r, o, i) {
                            var a = e.securityContext,
                                s = a ? t.root.sanitizer.sanitize(a, i) : i;
                            s = null != s ? s.toString() : null;
                            var u = t.renderer;
                            null != i ? u.setAttribute(n, o, s, r) : u.removeAttribute(n, o, r);
                        })(t, o, a, o.ns, s, r);
                        break;
                    case 2:
                        !(function (t, e, n, r) {
                            var o = t.renderer;
                            r ? o.addClass(e, n) : o.removeClass(e, n);
                        })(t, a, s, r);
                        break;
                    case 4:
                        !(function (t, e, n, r, o) {
                            var i = t.root.sanitizer.sanitize(Vr.STYLE, o);
                            if (null != i) {
                                i = i.toString();
                                var a = e.suffix;
                                null != a && (i += a);
                            } else i = null;
                            var s = t.renderer;
                            null != i ? s.setStyle(n, r, i) : s.removeStyle(n, r);
                        })(t, o, a, s, r);
                        break;
                    case 8:
                        !(function (t, e, n, r, o) {
                            var i = e.securityContext,
                                a = i ? t.root.sanitizer.sanitize(i, o) : o;
                            t.renderer.setProperty(n, r, a);
                        })(33554432 & e.flags && 32 & o.flags ? i.componentView : t, o, a, s, r);
                }
                return !0;
            }
            var Oo = new Object(),
                Mo = Xr(Bt),
                Vo = Xr(Ft),
                jo = Xr(Ye);
            function Uo(t, e, n, r) {
                return (n = Dt(n)), { index: -1, deps: yo(r, Nt(e)), flags: t, token: e, value: n };
            }
            function Lo(t, e, n) {
                void 0 === n && (n = Bt.THROW_IF_NOT_FOUND);
                var r,
                    o,
                    i = oe(t);
                try {
                    if (8 & e.flags) return e.token;
                    if ((2 & e.flags && (n = null), 1 & e.flags)) return t._parent.get(e.token, n);
                    var a = e.tokenKey;
                    switch (a) {
                        case Mo:
                        case Vo:
                        case jo:
                            return t;
                    }
                    var s = t._def.providersByKey[a];
                    if (s) {
                        var u = t._providers[s.index];
                        return void 0 === u && (u = t._providers[s.index] = Ho(t, s)), u === Oo ? void 0 : u;
                    }
                    if (
                        e.token.ngInjectableDef &&
                        ((r = t),
                        null != (o = e.token.ngInjectableDef).providedIn &&
                            ((function (t, e) {
                                return t._def.modules.indexOf(o.providedIn) > -1;
                            })(r) ||
                                ("root" === o.providedIn && r._def.isRoot)))
                    ) {
                        var l = t._providers.length;
                        return (
                            (t._def.providersByKey[e.tokenKey] = { flags: 5120, value: e.token.ngInjectableDef.factory, deps: [], index: l, token: e.token }),
                            (t._providers[l] = Oo),
                            (t._providers[l] = Ho(t, t._def.providersByKey[e.tokenKey]))
                        );
                    }
                    return 4 & e.flags ? n : t._parent.get(e.token, n);
                } finally {
                    oe(i);
                }
            }
            function Ho(t, e) {
                var n;
                switch (201347067 & e.flags) {
                    case 512:
                        n = (function (t, e, n) {
                            var r = n.length;
                            switch (r) {
                                case 0:
                                    return new e();
                                case 1:
                                    return new e(Lo(t, n[0]));
                                case 2:
                                    return new e(Lo(t, n[0]), Lo(t, n[1]));
                                case 3:
                                    return new e(Lo(t, n[0]), Lo(t, n[1]), Lo(t, n[2]));
                                default:
                                    for (var o = new Array(r), i = 0; i < r; i++) o[i] = Lo(t, n[i]);
                                    return new (e.bind.apply(e, h([void 0], o)))();
                            }
                        })(t, e.value, e.deps);
                        break;
                    case 1024:
                        n = (function (t, e, n) {
                            var r = n.length;
                            switch (r) {
                                case 0:
                                    return e();
                                case 1:
                                    return e(Lo(t, n[0]));
                                case 2:
                                    return e(Lo(t, n[0]), Lo(t, n[1]));
                                case 3:
                                    return e(Lo(t, n[0]), Lo(t, n[1]), Lo(t, n[2]));
                                default:
                                    for (var o = Array(r), i = 0; i < r; i++) o[i] = Lo(t, n[i]);
                                    return e.apply(void 0, h(o));
                            }
                        })(t, e.value, e.deps);
                        break;
                    case 2048:
                        n = Lo(t, e.deps[0]);
                        break;
                    case 256:
                        n = e.value;
                }
                return n === Oo || null == n || "object" != typeof n || 131072 & e.flags || "function" != typeof n.ngOnDestroy || (e.flags |= 131072), void 0 === n ? Oo : n;
            }
            function Fo(t, e) {
                var n = t.viewContainer._embeddedViews;
                if (((null == e || e >= n.length) && (e = n.length - 1), e < 0)) return null;
                var r = n[e];
                return (r.viewContainerParent = null), Go(n, e), Gr.dirtyParentQueries(r), Bo(r), r;
            }
            function zo(t, e, n) {
                var r = e ? co(e, e.def.lastRenderRootNode) : t.renderElement;
                wo(n, 2, n.renderer.parentNode(r), n.renderer.nextSibling(r), void 0);
            }
            function Bo(t) {
                wo(t, 3, null, null, void 0);
            }
            function qo(t, e, n) {
                e >= t.length ? t.push(n) : t.splice(e, 0, n);
            }
            function Go(t, e) {
                e >= t.length - 1 ? t.pop() : t.splice(e, 1);
            }
            var Zo = new Object();
            function Wo(t, e, n, r, o, i) {
                return new Qo(t, e, n, r, o, i);
            }
            var Qo = (function (t) {
                    function e(e, n, r, o, i, a) {
                        var s = t.call(this) || this;
                        return (s.selector = e), (s.componentType = n), (s._inputs = o), (s._outputs = i), (s.ngContentSelectors = a), (s.viewDefFactory = r), s;
                    }
                    return (
                        o(e, t),
                        Object.defineProperty(e.prototype, "inputs", {
                            get: function () {
                                var t = [],
                                    e = this._inputs;
                                for (var n in e) t.push({ propName: n, templateName: e[n] });
                                return t;
                            },
                            enumerable: !0,
                            configurable: !0,
                        }),
                        Object.defineProperty(e.prototype, "outputs", {
                            get: function () {
                                var t = [];
                                for (var e in this._outputs) t.push({ propName: e, templateName: this._outputs[e] });
                                return t;
                            },
                            enumerable: !0,
                            configurable: !0,
                        }),
                        (e.prototype.create = function (t, e, n, r) {
                            if (!r) throw new Error("ngModule should be provided");
                            var o = bo(this.viewDefFactory),
                                i = o.nodes[0].element.componentProvider.nodeIndex,
                                a = Gr.createRootView(t, e || [], n, o, r, Zo),
                                s = zr(a, i).instance;
                            return n && a.renderer.setAttribute(Fr(a, 0).renderElement, "ng-version", ue.full), new Yo(a, new Jo(a), s);
                        }),
                        e
                    );
                })(He),
                Yo = (function (t) {
                    function e(e, n, r) {
                        var o = t.call(this) || this;
                        return (o._view = e), (o._viewRef = n), (o._component = r), (o._elDef = o._view.def.nodes[0]), (o.hostView = n), (o.changeDetectorRef = n), (o.instance = r), o;
                    }
                    return (
                        o(e, t),
                        Object.defineProperty(e.prototype, "location", {
                            get: function () {
                                return new An(Fr(this._view, this._elDef.nodeIndex).renderElement);
                            },
                            enumerable: !0,
                            configurable: !0,
                        }),
                        Object.defineProperty(e.prototype, "injector", {
                            get: function () {
                                return new ri(this._view, this._elDef);
                            },
                            enumerable: !0,
                            configurable: !0,
                        }),
                        Object.defineProperty(e.prototype, "componentType", {
                            get: function () {
                                return this._component.constructor;
                            },
                            enumerable: !0,
                            configurable: !0,
                        }),
                        (e.prototype.destroy = function () {
                            this._viewRef.destroy();
                        }),
                        (e.prototype.onDestroy = function (t) {
                            this._viewRef.onDestroy(t);
                        }),
                        e
                    );
                })(Le);
            function Ko(t, e, n) {
                return new Xo(t, e, n);
            }
            var Xo = (function () {
                function t(t, e, n) {
                    (this._view = t), (this._elDef = e), (this._data = n), (this._embeddedViews = []);
                }
                return (
                    Object.defineProperty(t.prototype, "element", {
                        get: function () {
                            return new An(this._data.renderElement);
                        },
                        enumerable: !0,
                        configurable: !0,
                    }),
                    Object.defineProperty(t.prototype, "injector", {
                        get: function () {
                            return new ri(this._view, this._elDef);
                        },
                        enumerable: !0,
                        configurable: !0,
                    }),
                    Object.defineProperty(t.prototype, "parentInjector", {
                        get: function () {
                            for (var t = this._view, e = this._elDef.parent; !e && t; ) (e = lo(t)), (t = t.parent);
                            return t ? new ri(t, e) : new ri(this._view, null);
                        },
                        enumerable: !0,
                        configurable: !0,
                    }),
                    (t.prototype.clear = function () {
                        for (var t = this._embeddedViews.length - 1; t >= 0; t--) {
                            var e = Fo(this._data, t);
                            Gr.destroyView(e);
                        }
                    }),
                    (t.prototype.get = function (t) {
                        var e = this._embeddedViews[t];
                        if (e) {
                            var n = new Jo(e);
                            return n.attachToViewContainerRef(this), n;
                        }
                        return null;
                    }),
                    Object.defineProperty(t.prototype, "length", {
                        get: function () {
                            return this._embeddedViews.length;
                        },
                        enumerable: !0,
                        configurable: !0,
                    }),
                    (t.prototype.createEmbeddedView = function (t, e, n) {
                        var r = t.createEmbeddedView(e || {});
                        return this.insert(r, n), r;
                    }),
                    (t.prototype.createComponent = function (t, e, n, r, o) {
                        var i = n || this.parentInjector;
                        o || t instanceof Qe || (o = i.get(Ye));
                        var a = t.create(i, r, void 0, o);
                        return this.insert(a.hostView, e), a;
                    }),
                    (t.prototype.insert = function (t, e) {
                        if (t.destroyed) throw new Error("Cannot insert a destroyed View in a ViewContainer!");
                        var n,
                            r,
                            o,
                            i,
                            a = t;
                        return (
                            (o = a._view),
                            (i = (n = this._data).viewContainer._embeddedViews),
                            (null !== (r = e) && void 0 !== r) || (r = i.length),
                            (o.viewContainerParent = this._view),
                            qo(i, r, o),
                            (function (t, e) {
                                var n = uo(e);
                                if (n && n !== t && !(16 & e.state)) {
                                    e.state |= 16;
                                    var r = n.template._projectedViews;
                                    r || (r = n.template._projectedViews = []),
                                        r.push(e),
                                        (function (t, n) {
                                            if (!(4 & n.flags)) {
                                                (e.parent.def.nodeFlags |= 4), (n.flags |= 4);
                                                for (var r = n.parent; r; ) (r.childFlags |= 4), (r = r.parent);
                                            }
                                        })(0, e.parentNodeDef);
                                }
                            })(n, o),
                            Gr.dirtyParentQueries(o),
                            zo(n, r > 0 ? i[r - 1] : null, o),
                            a.attachToViewContainerRef(this),
                            t
                        );
                    }),
                    (t.prototype.move = function (t, e) {
                        if (t.destroyed) throw new Error("Cannot move a destroyed View in a ViewContainer!");
                        var n,
                            r,
                            o,
                            i,
                            a,
                            s = this._embeddedViews.indexOf(t._view);
                        return (o = e), (a = (i = (n = this._data).viewContainer._embeddedViews)[(r = s)]), Go(i, r), null == o && (o = i.length), qo(i, o, a), Gr.dirtyParentQueries(a), Bo(a), zo(n, o > 0 ? i[o - 1] : null, a), t;
                    }),
                    (t.prototype.indexOf = function (t) {
                        return this._embeddedViews.indexOf(t._view);
                    }),
                    (t.prototype.remove = function (t) {
                        var e = Fo(this._data, t);
                        e && Gr.destroyView(e);
                    }),
                    (t.prototype.detach = function (t) {
                        var e = Fo(this._data, t);
                        return e ? new Jo(e) : null;
                    }),
                    t
                );
            })();
            function $o(t) {
                return new Jo(t);
            }
            var Jo = (function () {
                function t(t) {
                    (this._view = t), (this._viewContainerRef = null), (this._appRef = null);
                }
                return (
                    Object.defineProperty(t.prototype, "rootNodes", {
                        get: function () {
                            return wo(this._view, 0, void 0, void 0, (t = [])), t;
                            var t;
                        },
                        enumerable: !0,
                        configurable: !0,
                    }),
                    Object.defineProperty(t.prototype, "context", {
                        get: function () {
                            return this._view.context;
                        },
                        enumerable: !0,
                        configurable: !0,
                    }),
                    Object.defineProperty(t.prototype, "destroyed", {
                        get: function () {
                            return 0 != (128 & this._view.state);
                        },
                        enumerable: !0,
                        configurable: !0,
                    }),
                    (t.prototype.markForCheck = function () {
                        io(this._view);
                    }),
                    (t.prototype.detach = function () {
                        this._view.state &= -5;
                    }),
                    (t.prototype.detectChanges = function () {
                        var t = this._view.root.rendererFactory;
                        t.begin && t.begin();
                        try {
                            Gr.checkAndUpdateView(this._view);
                        } finally {
                            t.end && t.end();
                        }
                    }),
                    (t.prototype.checkNoChanges = function () {
                        Gr.checkNoChangesView(this._view);
                    }),
                    (t.prototype.reattach = function () {
                        this._view.state |= 4;
                    }),
                    (t.prototype.onDestroy = function (t) {
                        this._view.disposables || (this._view.disposables = []), this._view.disposables.push(t);
                    }),
                    (t.prototype.destroy = function () {
                        this._appRef ? this._appRef.detachView(this) : this._viewContainerRef && this._viewContainerRef.detach(this._viewContainerRef.indexOf(this)), Gr.destroyView(this._view);
                    }),
                    (t.prototype.detachFromAppRef = function () {
                        (this._appRef = null), Bo(this._view), Gr.dirtyParentQueries(this._view);
                    }),
                    (t.prototype.attachToAppRef = function (t) {
                        if (this._viewContainerRef) throw new Error("This view is already attached to a ViewContainer!");
                        this._appRef = t;
                    }),
                    (t.prototype.attachToViewContainerRef = function (t) {
                        if (this._appRef) throw new Error("This view is already attached directly to the ApplicationRef!");
                        this._viewContainerRef = t;
                    }),
                    t
                );
            })();
            function ti(t, e) {
                return new ei(t, e);
            }
            var ei = (function (t) {
                function e(e, n) {
                    var r = t.call(this) || this;
                    return (r._parentView = e), (r._def = n), r;
                }
                return (
                    o(e, t),
                    (e.prototype.createEmbeddedView = function (t) {
                        return new Jo(Gr.createEmbeddedView(this._parentView, this._def, this._def.element.template, t));
                    }),
                    Object.defineProperty(e.prototype, "elementRef", {
                        get: function () {
                            return new An(Fr(this._parentView, this._def.nodeIndex).renderElement);
                        },
                        enumerable: !0,
                        configurable: !0,
                    }),
                    e
                );
            })(On);
            function ni(t, e) {
                return new ri(t, e);
            }
            var ri = (function () {
                function t(t, e) {
                    (this.view = t), (this.elDef = e);
                }
                return (
                    (t.prototype.get = function (t, e) {
                        return void 0 === e && (e = Bt.THROW_IF_NOT_FOUND), Gr.resolveDep(this.view, this.elDef, !!this.elDef && 0 != (33554432 & this.elDef.flags), { flags: 0, token: t, tokenKey: Xr(t) }, e);
                    }),
                    t
                );
            })();
            function oi(t) {
                return new ii(t.renderer);
            }
            var ii = (function () {
                function t(t) {
                    this.delegate = t;
                }
                return (
                    (t.prototype.selectRootElement = function (t) {
                        return this.delegate.selectRootElement(t);
                    }),
                    (t.prototype.createElement = function (t, e) {
                        var n = c(To(e), 2),
                            r = this.delegate.createElement(n[1], n[0]);
                        return t && this.delegate.appendChild(t, r), r;
                    }),
                    (t.prototype.createViewRoot = function (t) {
                        return t;
                    }),
                    (t.prototype.createTemplateAnchor = function (t) {
                        var e = this.delegate.createComment("");
                        return t && this.delegate.appendChild(t, e), e;
                    }),
                    (t.prototype.createText = function (t, e) {
                        var n = this.delegate.createText(e);
                        return t && this.delegate.appendChild(t, n), n;
                    }),
                    (t.prototype.projectNodes = function (t, e) {
                        for (var n = 0; n < e.length; n++) this.delegate.appendChild(t, e[n]);
                    }),
                    (t.prototype.attachViewAfter = function (t, e) {
                        for (var n = this.delegate.parentNode(t), r = this.delegate.nextSibling(t), o = 0; o < e.length; o++) this.delegate.insertBefore(n, e[o], r);
                    }),
                    (t.prototype.detachView = function (t) {
                        for (var e = 0; e < t.length; e++) {
                            var n = t[e],
                                r = this.delegate.parentNode(n);
                            this.delegate.removeChild(r, n);
                        }
                    }),
                    (t.prototype.destroyView = function (t, e) {
                        for (var n = 0; n < e.length; n++) this.delegate.destroyNode(e[n]);
                    }),
                    (t.prototype.listen = function (t, e, n) {
                        return this.delegate.listen(t, e, n);
                    }),
                    (t.prototype.listenGlobal = function (t, e, n) {
                        return this.delegate.listen(t, e, n);
                    }),
                    (t.prototype.setElementProperty = function (t, e, n) {
                        this.delegate.setProperty(t, e, n);
                    }),
                    (t.prototype.setElementAttribute = function (t, e, n) {
                        var r = c(To(e), 2),
                            o = r[0],
                            i = r[1];
                        null != n ? this.delegate.setAttribute(t, i, n, o) : this.delegate.removeAttribute(t, i, o);
                    }),
                    (t.prototype.setBindingDebugInfo = function (t, e, n) {}),
                    (t.prototype.setElementClass = function (t, e, n) {
                        n ? this.delegate.addClass(t, e) : this.delegate.removeClass(t, e);
                    }),
                    (t.prototype.setElementStyle = function (t, e, n) {
                        null != n ? this.delegate.setStyle(t, e, n) : this.delegate.removeStyle(t, e);
                    }),
                    (t.prototype.invokeElementMethod = function (t, e, n) {
                        t[e].apply(t, n);
                    }),
                    (t.prototype.setText = function (t, e) {
                        this.delegate.setValue(t, e);
                    }),
                    (t.prototype.animate = function () {
                        throw new Error("Renderer.animate is no longer supported!");
                    }),
                    t
                );
            })();
            function ai(t, e, n, r) {
                return new si(t, e, n, r);
            }
            var si = (function () {
                    function t(t, e, n, r) {
                        (this._moduleType = t),
                            (this._parent = e),
                            (this._bootstrapComponents = n),
                            (this._def = r),
                            (this._destroyListeners = []),
                            (this._destroyed = !1),
                            (this.injector = this),
                            (function (t) {
                                for (var e = t._def, n = (t._providers = new Array(e.providers.length)), r = 0; r < e.providers.length; r++) {
                                    var o = e.providers[r];
                                    4096 & o.flags || (void 0 === n[r] && (n[r] = Ho(t, o)));
                                }
                            })(this);
                    }
                    return (
                        (t.prototype.get = function (t, e, n) {
                            void 0 === e && (e = Bt.THROW_IF_NOT_FOUND), void 0 === n && (n = 0);
                            var r = 0;
                            return 4 & n ? (r |= 1) : 2 & n && (r |= 4), Lo(this, { token: t, tokenKey: Xr(t), flags: r }, e);
                        }),
                        Object.defineProperty(t.prototype, "instance", {
                            get: function () {
                                return this.get(this._moduleType);
                            },
                            enumerable: !0,
                            configurable: !0,
                        }),
                        Object.defineProperty(t.prototype, "componentFactoryResolver", {
                            get: function () {
                                return this.get(Ze);
                            },
                            enumerable: !0,
                            configurable: !0,
                        }),
                        (t.prototype.destroy = function () {
                            if (this._destroyed) throw new Error("The ng module " + Nt(this.instance.constructor) + " has already been destroyed.");
                            (this._destroyed = !0),
                                (function (t, e) {
                                    for (var n = t._def, r = new Set(), o = 0; o < n.providers.length; o++)
                                        if (131072 & n.providers[o].flags) {
                                            var i = t._providers[o];
                                            if (i && i !== Oo) {
                                                var a = i.ngOnDestroy;
                                                "function" != typeof a || r.has(i) || (a.apply(i), r.add(i));
                                            }
                                        }
                                })(this),
                                this._destroyListeners.forEach(function (t) {
                                    return t();
                                });
                        }),
                        (t.prototype.onDestroy = function (t) {
                            this._destroyListeners.push(t);
                        }),
                        t
                    );
                })(),
                ui = Xr(function () {}),
                li = Xr(kn),
                ci = Xr(An),
                hi = Xr(Mn),
                pi = Xr(On),
                fi = Xr(Vn),
                di = Xr(Bt),
                vi = Xr(Ft);
            function yi(t, e, n, r, o, i, a, s) {
                var u = [];
                if (a)
                    for (var l in a) {
                        var h = c(a[l], 2);
                        u[h[0]] = { flags: 8, name: l, nonMinifiedName: h[1], ns: null, securityContext: null, suffix: null };
                    }
                var p = [];
                if (s) for (var f in s) p.push({ type: 1, propName: f, target: null, eventName: s[f] });
                return gi(t, (e |= 16384), n, r, o, o, i, u, p);
            }
            function gi(t, e, n, r, o, i, a, s, u) {
                var l = vo(n),
                    c = l.matchedQueries,
                    h = l.references,
                    p = l.matchedQueryIds;
                u || (u = []), s || (s = []), (i = Dt(i));
                var f = yo(a, Nt(o));
                return {
                    nodeIndex: -1,
                    parent: null,
                    renderParent: null,
                    bindingIndex: -1,
                    outputIndex: -1,
                    checkIndex: t,
                    flags: e,
                    childFlags: 0,
                    directChildFlags: 0,
                    childMatchedQueries: 0,
                    matchedQueries: c,
                    matchedQueryIds: p,
                    references: h,
                    ngContentIndex: -1,
                    childCount: r,
                    bindings: s,
                    bindingFlags: ko(s),
                    outputs: u,
                    element: null,
                    provider: { token: o, value: i, deps: f },
                    text: null,
                    query: null,
                    ngContent: null,
                };
            }
            function mi(t, e) {
                return Ci(t, e);
            }
            function bi(t, e) {
                for (var n = t; n.parent && !ho(n); ) n = n.parent;
                return Ei(n.parent, lo(n), !0, e.provider.value, e.provider.deps);
            }
            function wi(t, e) {
                var n = Ei(t, e.parent, (32768 & e.flags) > 0, e.provider.value, e.provider.deps);
                if (e.outputs.length)
                    for (var r = 0; r < e.outputs.length; r++) {
                        var o = e.outputs[r],
                            i = n[o.propName].subscribe(_i(t, e.parent.nodeIndex, o.eventName));
                        t.disposables[e.outputIndex + r] = i.unsubscribe.bind(i);
                    }
                return n;
            }
            function _i(t, e, n) {
                return function (r) {
                    return so(t, e, n, r);
                };
            }
            function Ci(t, e) {
                var n = (8192 & e.flags) > 0,
                    r = e.provider;
                switch (201347067 & e.flags) {
                    case 512:
                        return Ei(t, e.parent, n, r.value, r.deps);
                    case 1024:
                        return (function (t, e, n, r, o) {
                            var i = o.length;
                            switch (i) {
                                case 0:
                                    return r();
                                case 1:
                                    return r(xi(t, e, n, o[0]));
                                case 2:
                                    return r(xi(t, e, n, o[0]), xi(t, e, n, o[1]));
                                case 3:
                                    return r(xi(t, e, n, o[0]), xi(t, e, n, o[1]), xi(t, e, n, o[2]));
                                default:
                                    for (var a = Array(i), s = 0; s < i; s++) a[s] = xi(t, e, n, o[s]);
                                    return r.apply(void 0, h(a));
                            }
                        })(t, e.parent, n, r.value, r.deps);
                    case 2048:
                        return xi(t, e.parent, n, r.deps[0]);
                    case 256:
                        return r.value;
                }
            }
            function Ei(t, e, n, r, o) {
                var i = o.length;
                switch (i) {
                    case 0:
                        return new r();
                    case 1:
                        return new r(xi(t, e, n, o[0]));
                    case 2:
                        return new r(xi(t, e, n, o[0]), xi(t, e, n, o[1]));
                    case 3:
                        return new r(xi(t, e, n, o[0]), xi(t, e, n, o[1]), xi(t, e, n, o[2]));
                    default:
                        for (var a = new Array(i), s = 0; s < i; s++) a[s] = xi(t, e, n, o[s]);
                        return new (r.bind.apply(r, h([void 0], a)))();
                }
            }
            var Si = {};
            function xi(t, e, n, r, o) {
                if ((void 0 === o && (o = Bt.THROW_IF_NOT_FOUND), 8 & r.flags)) return r.token;
                var i = t;
                2 & r.flags && (o = null);
                var a = r.tokenKey;
                a === fi && (n = !(!e || !e.element.componentView)), e && 1 & r.flags && ((n = !1), (e = e.parent));
                for (var s = t; s; ) {
                    if (e)
                        switch (a) {
                            case ui:
                                return oi(Ti(s, e, n));
                            case li:
                                return Ti(s, e, n).renderer;
                            case ci:
                                return new An(Fr(s, e.nodeIndex).renderElement);
                            case hi:
                                return Fr(s, e.nodeIndex).viewContainer;
                            case pi:
                                if (e.element.template) return Fr(s, e.nodeIndex).template;
                                break;
                            case fi:
                                return $o(Ti(s, e, n));
                            case di:
                            case vi:
                                return ni(s, e);
                            default:
                                var u = (n ? e.element.allProviders : e.element.publicProviders)[a];
                                if (u) {
                                    var l = zr(s, u.nodeIndex);
                                    return l || ((l = { instance: Ci(s, u) }), (s.nodes[u.nodeIndex] = l)), l.instance;
                                }
                        }
                    (n = ho(s)), (e = lo(s)), (s = s.parent), 4 & r.flags && (s = null);
                }
                var c = i.root.injector.get(r.token, Si);
                return c !== Si || o === Si ? c : i.root.ngModule.injector.get(r.token, o);
            }
            function Ti(t, e, n) {
                var r;
                if (n) r = Fr(t, e.nodeIndex).componentView;
                else for (r = t; r.parent && !ho(r); ) r = r.parent;
                return r;
            }
            function ki(t, e, n, r, o, i) {
                if (32768 & n.flags) {
                    var a = Fr(t, n.parent.nodeIndex).componentView;
                    2 & a.def.flags && (a.state |= 8);
                }
                if (((e.instance[n.bindings[r].name] = o), 524288 & n.flags)) {
                    i = i || {};
                    var s = Bn.unwrap(t.oldValues[n.bindingIndex + r]);
                    i[n.bindings[r].nonMinifiedName] = new qn(s, o, 0 != (2 & t.state));
                }
                return (t.oldValues[n.bindingIndex + r] = o), i;
            }
            function Ai(t, e) {
                if (t.def.nodeFlags & e)
                    for (var n = t.def.nodes, r = 0, o = 0; o < n.length; o++) {
                        var i = n[o],
                            a = i.parent;
                        for (!a && i.flags & e && Pi(t, o, i.flags & e, r++), 0 == (i.childFlags & e) && (o += i.childCount); a && 1 & a.flags && o === a.nodeIndex + a.childCount; )
                            a.directChildFlags & e && (r = Ii(t, a, e, r)), (a = a.parent);
                    }
            }
            function Ii(t, e, n, r) {
                for (var o = e.nodeIndex + 1; o <= e.nodeIndex + e.childCount; o++) {
                    var i = t.def.nodes[o];
                    i.flags & n && Pi(t, o, i.flags & n, r++), (o += i.childCount);
                }
                return r;
            }
            function Pi(t, e, n, r) {
                var o = zr(t, e);
                if (o) {
                    var i = o.instance;
                    i &&
                        (Gr.setCurrentNode(t, e),
                        1048576 & n && Lr(t, 512, r) && i.ngAfterContentInit(),
                        2097152 & n && i.ngAfterContentChecked(),
                        4194304 & n && Lr(t, 768, r) && i.ngAfterViewInit(),
                        8388608 & n && i.ngAfterViewChecked(),
                        131072 & n && i.ngOnDestroy());
                }
            }
            function Ni(t) {
                for (var e = t.def.nodeMatchedQueries; t.parent && po(t); ) {
                    var n = t.parentNodeDef;
                    t = t.parent;
                    for (var r = n.nodeIndex + n.childCount, o = 0; o <= r; o++)
                        67108864 & (i = t.def.nodes[o]).flags && 536870912 & i.flags && (i.query.filterId & e) === i.query.filterId && qr(t, o).setDirty(),
                            (!(1 & i.flags && o + i.childCount < n.nodeIndex) && 67108864 & i.childFlags && 536870912 & i.childFlags) || (o += i.childCount);
                }
                if (134217728 & t.def.nodeFlags)
                    for (o = 0; o < t.def.nodes.length; o++) {
                        var i;
                        134217728 & (i = t.def.nodes[o]).flags && 536870912 & i.flags && qr(t, o).setDirty(), (o += i.childCount);
                    }
            }
            function Ri(t, e) {
                var n = qr(t, e.nodeIndex);
                if (n.dirty) {
                    var r,
                        o = void 0;
                    if (67108864 & e.flags) {
                        var i = e.parent.parent;
                        (o = Di(t, i.nodeIndex, i.nodeIndex + i.childCount, e.query, [])), (r = zr(t, e.parent.nodeIndex).instance);
                    } else 134217728 & e.flags && ((o = Di(t, 0, t.def.nodes.length - 1, e.query, [])), (r = t.component));
                    n.reset(o);
                    for (var a = e.query.bindings, s = !1, u = 0; u < a.length; u++) {
                        var l = a[u],
                            c = void 0;
                        switch (l.bindingType) {
                            case 0:
                                c = n.first;
                                break;
                            case 1:
                                (c = n), (s = !0);
                        }
                        r[l.propName] = c;
                    }
                    s && n.notifyOnChanges();
                }
            }
            function Di(t, e, n, r, o) {
                for (var i = e; i <= n; i++) {
                    var a = t.def.nodes[i],
                        s = a.matchedQueries[r.id];
                    if ((null != s && o.push(Oi(t, a, s)), 1 & a.flags && a.element.template && (a.element.template.nodeMatchedQueries & r.filterId) === r.filterId)) {
                        var u = Fr(t, i);
                        if (((a.childMatchedQueries & r.filterId) === r.filterId && (Di(t, i + 1, i + a.childCount, r, o), (i += a.childCount)), 16777216 & a.flags))
                            for (var l = u.viewContainer._embeddedViews, c = 0; c < l.length; c++) {
                                var h = l[c],
                                    p = uo(h);
                                p && p === u && Di(h, 0, h.def.nodes.length - 1, r, o);
                            }
                        var f = u.template._projectedViews;
                        if (f)
                            for (c = 0; c < f.length; c++) {
                                var d = f[c];
                                Di(d, 0, d.def.nodes.length - 1, r, o);
                            }
                    }
                    (a.childMatchedQueries & r.filterId) !== r.filterId && (i += a.childCount);
                }
                return o;
            }
            function Oi(t, e, n) {
                if (null != n)
                    switch (n) {
                        case 1:
                            return Fr(t, e.nodeIndex).renderElement;
                        case 0:
                            return new An(Fr(t, e.nodeIndex).renderElement);
                        case 2:
                            return Fr(t, e.nodeIndex).template;
                        case 3:
                            return Fr(t, e.nodeIndex).viewContainer;
                        case 4:
                            return zr(t, e.nodeIndex).instance;
                    }
            }
            function Mi(t, e, n) {
                var r = go(t, e, n);
                r && Co(t, n.ngContent.index, 1, r, null, void 0);
            }
            function Vi(t, e, n) {
                for (var r = new Array(n.length - 1), o = 1; o < n.length; o++) r[o - 1] = { flags: 8, name: null, ns: null, nonMinifiedName: null, securityContext: null, suffix: n[o] };
                return {
                    nodeIndex: -1,
                    parent: null,
                    renderParent: null,
                    bindingIndex: -1,
                    outputIndex: -1,
                    checkIndex: t,
                    flags: 2,
                    childFlags: 0,
                    directChildFlags: 0,
                    childMatchedQueries: 0,
                    matchedQueries: {},
                    matchedQueryIds: 0,
                    references: {},
                    ngContentIndex: e,
                    childCount: 0,
                    bindings: r,
                    bindingFlags: 8,
                    outputs: [],
                    element: null,
                    provider: null,
                    text: { prefix: n[0] },
                    query: null,
                    ngContent: null,
                };
            }
            function ji(t, e, n) {
                var r,
                    o = t.renderer;
                r = o.createText(n.text.prefix);
                var i = go(t, e, n);
                return i && o.appendChild(i, r), { renderText: r };
            }
            function Ui(t, e) {
                return (null != t ? t.toString() : "") + e.suffix;
            }
            function Li(t, e, n, r) {
                for (var o = 0, i = 0, a = 0, s = 0, u = 0, l = null, c = null, h = !1, p = !1, f = null, d = 0; d < e.length; d++) {
                    var v = e[d];
                    if (((v.nodeIndex = d), (v.parent = l), (v.bindingIndex = o), (v.outputIndex = i), (v.renderParent = c), (a |= v.flags), (u |= v.matchedQueryIds), v.element)) {
                        var y = v.element;
                        (y.publicProviders = l ? l.element.publicProviders : Object.create(null)), (y.allProviders = y.publicProviders), (h = !1), (p = !1), v.element.template && (u |= v.element.template.nodeMatchedQueries);
                    }
                    if ((Fi(l, v, e.length), (o += v.bindings.length), (i += v.outputs.length), !c && 3 & v.flags && (f = v), 20224 & v.flags)) {
                        h || ((h = !0), (l.element.publicProviders = Object.create(l.element.publicProviders)), (l.element.allProviders = l.element.publicProviders));
                        var g = 0 != (32768 & v.flags);
                        0 == (8192 & v.flags) || g
                            ? (l.element.publicProviders[Xr(v.provider.token)] = v)
                            : (p || ((p = !0), (l.element.allProviders = Object.create(l.element.publicProviders))), (l.element.allProviders[Xr(v.provider.token)] = v)),
                            g && (l.element.componentProvider = v);
                    }
                    if (
                        (l
                            ? ((l.childFlags |= v.flags), (l.directChildFlags |= v.flags), (l.childMatchedQueries |= v.matchedQueryIds), v.element && v.element.template && (l.childMatchedQueries |= v.element.template.nodeMatchedQueries))
                            : (s |= v.flags),
                        v.childCount > 0)
                    )
                        (l = v), Hi(v) || (c = v);
                    else
                        for (; l && d === l.nodeIndex + l.childCount; ) {
                            var m = l.parent;
                            m && ((m.childFlags |= l.childFlags), (m.childMatchedQueries |= l.childMatchedQueries)), (c = (l = m) && Hi(l) ? l.renderParent : l);
                        }
                }
                return {
                    factory: null,
                    nodeFlags: a,
                    rootNodeFlags: s,
                    nodeMatchedQueries: u,
                    flags: t,
                    nodes: e,
                    updateDirectives: n || Yr,
                    updateRenderer: r || Yr,
                    handleEvent: function (t, n, r, o) {
                        return e[n].element.handleEvent(t, r, o);
                    },
                    bindingCount: o,
                    outputCount: i,
                    lastRenderRootNode: f,
                };
            }
            function Hi(t) {
                return 0 != (1 & t.flags) && null === t.element.name;
            }
            function Fi(t, e, n) {
                var r = e.element && e.element.template;
                if (r) {
                    if (!r.lastRenderRootNode) throw new Error("Illegal State: Embedded templates without nodes are not allowed!");
                    if (r.lastRenderRootNode && 16777216 & r.lastRenderRootNode.flags) throw new Error("Illegal State: Last root node of a template can't have embedded views, at index " + e.nodeIndex + "!");
                }
                if (20224 & e.flags && 0 == (1 & (t ? t.flags : 0))) throw new Error("Illegal State: StaticProvider/Directive nodes need to be children of elements or anchors, at index " + e.nodeIndex + "!");
                if (e.query) {
                    if (67108864 & e.flags && (!t || 0 == (16384 & t.flags))) throw new Error("Illegal State: Content Query nodes need to be children of directives, at index " + e.nodeIndex + "!");
                    if (134217728 & e.flags && t) throw new Error("Illegal State: View Query nodes have to be top level nodes, at index " + e.nodeIndex + "!");
                }
                if (e.childCount) {
                    var o = t ? t.nodeIndex + t.childCount : n - 1;
                    if (e.nodeIndex <= o && e.nodeIndex + e.childCount > o) throw new Error("Illegal State: childCount of node leads outside of parent, at index " + e.nodeIndex + "!");
                }
            }
            function zi(t, e, n, r) {
                var o = Gi(t.root, t.renderer, t, e, n);
                return Zi(o, t.component, r), Wi(o), o;
            }
            function Bi(t, e, n) {
                var r = Gi(t, t.renderer, null, null, e);
                return Zi(r, n, n), Wi(r), r;
            }
            function qi(t, e, n, r) {
                var o,
                    i = e.element.componentRendererType;
                return (o = i ? t.root.rendererFactory.createRenderer(r, i) : t.root.renderer), Gi(t.root, o, t, e.element.componentProvider, n);
            }
            function Gi(t, e, n, r, o) {
                var i = new Array(o.nodes.length),
                    a = o.outputCount ? new Array(o.outputCount) : null;
                return { def: o, parent: n, viewContainerParent: null, parentNodeDef: r, context: null, component: null, nodes: i, state: 13, root: t, renderer: e, oldValues: new Array(o.bindingCount), disposables: a, initIndex: -1 };
            }
            function Zi(t, e, n) {
                (t.component = e), (t.context = n);
            }
            function Wi(t) {
                var e;
                ho(t) && (e = Fr(t.parent, t.parentNodeDef.parent.nodeIndex).renderElement);
                for (var n = t.def, r = t.nodes, o = 0; o < n.nodes.length; o++) {
                    var i = n.nodes[o];
                    Gr.setCurrentNode(t, o);
                    var a = void 0;
                    switch (201347067 & i.flags) {
                        case 1:
                            var s = Po(t, e, i),
                                u = void 0;
                            if (33554432 & i.flags) {
                                var l = bo(i.element.componentView);
                                u = Gr.createComponentView(t, i, l, s);
                            }
                            No(t, u, i, s), (a = { renderElement: s, componentView: u, viewContainer: null, template: i.element.template ? ti(t, i) : void 0 }), 16777216 & i.flags && (a.viewContainer = Ko(t, i, a));
                            break;
                        case 2:
                            a = ji(t, e, i);
                            break;
                        case 512:
                        case 1024:
                        case 2048:
                        case 256:
                            (a = r[o]) || 4096 & i.flags || (a = { instance: mi(t, i) });
                            break;
                        case 16:
                            a = { instance: bi(t, i) };
                            break;
                        case 16384:
                            (a = r[o]) || (a = { instance: wi(t, i) }), 32768 & i.flags && Zi(Fr(t, i.parent.nodeIndex).componentView, a.instance, a.instance);
                            break;
                        case 32:
                        case 64:
                        case 128:
                            a = { value: void 0 };
                            break;
                        case 67108864:
                        case 134217728:
                            a = new Pn();
                            break;
                        case 8:
                            Mi(t, e, i), (a = void 0);
                    }
                    r[o] = a;
                }
                na(t, ea.CreateViewNodes), aa(t, 201326592, 268435456, 0);
            }
            function Qi(t) {
                Xi(t), Gr.updateDirectives(t, 1), ra(t, ea.CheckNoChanges), Gr.updateRenderer(t, 1), na(t, ea.CheckNoChanges), (t.state &= -97);
            }
            function Yi(t) {
                1 & t.state ? ((t.state &= -2), (t.state |= 2)) : (t.state &= -3), Ur(t, 0, 256), Xi(t), Gr.updateDirectives(t, 0), ra(t, ea.CheckAndUpdate), aa(t, 67108864, 536870912, 0);
                var e = Ur(t, 256, 512);
                Ai(t, 2097152 | (e ? 1048576 : 0)),
                    Gr.updateRenderer(t, 0),
                    na(t, ea.CheckAndUpdate),
                    aa(t, 134217728, 536870912, 0),
                    Ai(t, 8388608 | ((e = Ur(t, 512, 768)) ? 4194304 : 0)),
                    2 & t.def.flags && (t.state &= -9),
                    (t.state &= -97),
                    Ur(t, 768, 1024);
            }
            function Ki(t, e, n, r, o, i, a, s, u, l, c, p, f) {
                return 0 === n
                    ? (function (t, e, n, r, o, i, a, s, u, l, c, h) {
                          switch (201347067 & e.flags) {
                              case 1:
                                  return (function (t, e, n, r, o, i, a, s, u, l, c, h) {
                                      var p = e.bindings.length,
                                          f = !1;
                                      return (
                                          p > 0 && Do(t, e, 0, n) && (f = !0),
                                          p > 1 && Do(t, e, 1, r) && (f = !0),
                                          p > 2 && Do(t, e, 2, o) && (f = !0),
                                          p > 3 && Do(t, e, 3, i) && (f = !0),
                                          p > 4 && Do(t, e, 4, a) && (f = !0),
                                          p > 5 && Do(t, e, 5, s) && (f = !0),
                                          p > 6 && Do(t, e, 6, u) && (f = !0),
                                          p > 7 && Do(t, e, 7, l) && (f = !0),
                                          p > 8 && Do(t, e, 8, c) && (f = !0),
                                          p > 9 && Do(t, e, 9, h) && (f = !0),
                                          f
                                      );
                                  })(t, e, n, r, o, i, a, s, u, l, c, h);
                              case 2:
                                  return (function (t, e, n, r, o, i, a, s, u, l, c, h) {
                                      var p = !1,
                                          f = e.bindings,
                                          d = f.length;
                                      if (
                                          (d > 0 && ro(t, e, 0, n) && (p = !0),
                                          d > 1 && ro(t, e, 1, r) && (p = !0),
                                          d > 2 && ro(t, e, 2, o) && (p = !0),
                                          d > 3 && ro(t, e, 3, i) && (p = !0),
                                          d > 4 && ro(t, e, 4, a) && (p = !0),
                                          d > 5 && ro(t, e, 5, s) && (p = !0),
                                          d > 6 && ro(t, e, 6, u) && (p = !0),
                                          d > 7 && ro(t, e, 7, l) && (p = !0),
                                          d > 8 && ro(t, e, 8, c) && (p = !0),
                                          d > 9 && ro(t, e, 9, h) && (p = !0),
                                          p)
                                      ) {
                                          var v = e.text.prefix;
                                          d > 0 && (v += Ui(n, f[0])),
                                              d > 1 && (v += Ui(r, f[1])),
                                              d > 2 && (v += Ui(o, f[2])),
                                              d > 3 && (v += Ui(i, f[3])),
                                              d > 4 && (v += Ui(a, f[4])),
                                              d > 5 && (v += Ui(s, f[5])),
                                              d > 6 && (v += Ui(u, f[6])),
                                              d > 7 && (v += Ui(l, f[7])),
                                              d > 8 && (v += Ui(c, f[8])),
                                              d > 9 && (v += Ui(h, f[9]));
                                          var y = Hr(t, e.nodeIndex).renderText;
                                          t.renderer.setValue(y, v);
                                      }
                                      return p;
                                  })(t, e, n, r, o, i, a, s, u, l, c, h);
                              case 16384:
                                  return (function (t, e, n, r, o, i, a, s, u, l, c, h) {
                                      var p = zr(t, e.nodeIndex),
                                          f = p.instance,
                                          d = !1,
                                          v = void 0,
                                          y = e.bindings.length;
                                      return (
                                          y > 0 && no(t, e, 0, n) && ((d = !0), (v = ki(t, p, e, 0, n, v))),
                                          y > 1 && no(t, e, 1, r) && ((d = !0), (v = ki(t, p, e, 1, r, v))),
                                          y > 2 && no(t, e, 2, o) && ((d = !0), (v = ki(t, p, e, 2, o, v))),
                                          y > 3 && no(t, e, 3, i) && ((d = !0), (v = ki(t, p, e, 3, i, v))),
                                          y > 4 && no(t, e, 4, a) && ((d = !0), (v = ki(t, p, e, 4, a, v))),
                                          y > 5 && no(t, e, 5, s) && ((d = !0), (v = ki(t, p, e, 5, s, v))),
                                          y > 6 && no(t, e, 6, u) && ((d = !0), (v = ki(t, p, e, 6, u, v))),
                                          y > 7 && no(t, e, 7, l) && ((d = !0), (v = ki(t, p, e, 7, l, v))),
                                          y > 8 && no(t, e, 8, c) && ((d = !0), (v = ki(t, p, e, 8, c, v))),
                                          y > 9 && no(t, e, 9, h) && ((d = !0), (v = ki(t, p, e, 9, h, v))),
                                          v && f.ngOnChanges(v),
                                          65536 & e.flags && Lr(t, 256, e.nodeIndex) && f.ngOnInit(),
                                          262144 & e.flags && f.ngDoCheck(),
                                          d
                                      );
                                  })(t, e, n, r, o, i, a, s, u, l, c, h);
                              case 32:
                              case 64:
                              case 128:
                                  return (function (t, e, n, r, o, i, a, s, u, l, c, h) {
                                      var p = e.bindings,
                                          f = !1,
                                          d = p.length;
                                      if (
                                          (d > 0 && ro(t, e, 0, n) && (f = !0),
                                          d > 1 && ro(t, e, 1, r) && (f = !0),
                                          d > 2 && ro(t, e, 2, o) && (f = !0),
                                          d > 3 && ro(t, e, 3, i) && (f = !0),
                                          d > 4 && ro(t, e, 4, a) && (f = !0),
                                          d > 5 && ro(t, e, 5, s) && (f = !0),
                                          d > 6 && ro(t, e, 6, u) && (f = !0),
                                          d > 7 && ro(t, e, 7, l) && (f = !0),
                                          d > 8 && ro(t, e, 8, c) && (f = !0),
                                          d > 9 && ro(t, e, 9, h) && (f = !0),
                                          f)
                                      ) {
                                          var v = Br(t, e.nodeIndex),
                                              y = void 0;
                                          switch (201347067 & e.flags) {
                                              case 32:
                                                  (y = new Array(p.length)),
                                                      d > 0 && (y[0] = n),
                                                      d > 1 && (y[1] = r),
                                                      d > 2 && (y[2] = o),
                                                      d > 3 && (y[3] = i),
                                                      d > 4 && (y[4] = a),
                                                      d > 5 && (y[5] = s),
                                                      d > 6 && (y[6] = u),
                                                      d > 7 && (y[7] = l),
                                                      d > 8 && (y[8] = c),
                                                      d > 9 && (y[9] = h);
                                                  break;
                                              case 64:
                                                  (y = {}),
                                                      d > 0 && (y[p[0].name] = n),
                                                      d > 1 && (y[p[1].name] = r),
                                                      d > 2 && (y[p[2].name] = o),
                                                      d > 3 && (y[p[3].name] = i),
                                                      d > 4 && (y[p[4].name] = a),
                                                      d > 5 && (y[p[5].name] = s),
                                                      d > 6 && (y[p[6].name] = u),
                                                      d > 7 && (y[p[7].name] = l),
                                                      d > 8 && (y[p[8].name] = c),
                                                      d > 9 && (y[p[9].name] = h);
                                                  break;
                                              case 128:
                                                  var g = n;
                                                  switch (d) {
                                                      case 1:
                                                          y = g.transform(n);
                                                          break;
                                                      case 2:
                                                          y = g.transform(r);
                                                          break;
                                                      case 3:
                                                          y = g.transform(r, o);
                                                          break;
                                                      case 4:
                                                          y = g.transform(r, o, i);
                                                          break;
                                                      case 5:
                                                          y = g.transform(r, o, i, a);
                                                          break;
                                                      case 6:
                                                          y = g.transform(r, o, i, a, s);
                                                          break;
                                                      case 7:
                                                          y = g.transform(r, o, i, a, s, u);
                                                          break;
                                                      case 8:
                                                          y = g.transform(r, o, i, a, s, u, l);
                                                          break;
                                                      case 9:
                                                          y = g.transform(r, o, i, a, s, u, l, c);
                                                          break;
                                                      case 10:
                                                          y = g.transform(r, o, i, a, s, u, l, c, h);
                                                  }
                                          }
                                          v.value = y;
                                      }
                                      return f;
                                  })(t, e, n, r, o, i, a, s, u, l, c, h);
                              default:
                                  throw "unreachable";
                          }
                      })(t, e, r, o, i, a, s, u, l, c, p, f)
                    : (function (t, e, n) {
                          switch (201347067 & e.flags) {
                              case 1:
                                  return (function (t, e, n) {
                                      for (var r = !1, o = 0; o < n.length; o++) Do(t, e, o, n[o]) && (r = !0);
                                      return r;
                                  })(t, e, n);
                              case 2:
                                  return (function (t, e, n) {
                                      for (var r = e.bindings, o = !1, i = 0; i < n.length; i++) ro(t, e, i, n[i]) && (o = !0);
                                      if (o) {
                                          var a = "";
                                          for (i = 0; i < n.length; i++) a += Ui(n[i], r[i]);
                                          a = e.text.prefix + a;
                                          var s = Hr(t, e.nodeIndex).renderText;
                                          t.renderer.setValue(s, a);
                                      }
                                      return o;
                                  })(t, e, n);
                              case 16384:
                                  return (function (t, e, n) {
                                      for (var r = zr(t, e.nodeIndex), o = r.instance, i = !1, a = void 0, s = 0; s < n.length; s++) no(t, e, s, n[s]) && ((i = !0), (a = ki(t, r, e, s, n[s], a)));
                                      return a && o.ngOnChanges(a), 65536 & e.flags && Lr(t, 256, e.nodeIndex) && o.ngOnInit(), 262144 & e.flags && o.ngDoCheck(), i;
                                  })(t, e, n);
                              case 32:
                              case 64:
                              case 128:
                                  return (function (t, e, n) {
                                      for (var r = e.bindings, o = !1, i = 0; i < n.length; i++) ro(t, e, i, n[i]) && (o = !0);
                                      if (o) {
                                          var a = Br(t, e.nodeIndex),
                                              s = void 0;
                                          switch (201347067 & e.flags) {
                                              case 32:
                                                  s = n;
                                                  break;
                                              case 64:
                                                  for (s = {}, i = 0; i < n.length; i++) s[r[i].name] = n[i];
                                                  break;
                                              case 128:
                                                  var u = n[0],
                                                      l = n.slice(1);
                                                  s = u.transform.apply(u, h(l));
                                          }
                                          a.value = s;
                                      }
                                      return o;
                                  })(t, e, n);
                              default:
                                  throw "unreachable";
                          }
                      })(t, e, r);
            }
            function Xi(t) {
                var e = t.def;
                if (4 & e.nodeFlags)
                    for (var n = 0; n < e.nodes.length; n++) {
                        var r = e.nodes[n];
                        if (4 & r.flags) {
                            var o = Fr(t, n).template._projectedViews;
                            if (o)
                                for (var i = 0; i < o.length; i++) {
                                    var a = o[i];
                                    (a.state |= 32), ao(a, t);
                                }
                        } else 0 == (4 & r.childFlags) && (n += r.childCount);
                    }
            }
            function $i(t, e, n, r, o, i, a, s, u, l, c, h, p) {
                return (
                    0 === n
                        ? (function (t, e, n, r, o, i, a, s, u, l, c, h) {
                              var p = e.bindings.length;
                              p > 0 && oo(t, e, 0, n),
                                  p > 1 && oo(t, e, 1, r),
                                  p > 2 && oo(t, e, 2, o),
                                  p > 3 && oo(t, e, 3, i),
                                  p > 4 && oo(t, e, 4, a),
                                  p > 5 && oo(t, e, 5, s),
                                  p > 6 && oo(t, e, 6, u),
                                  p > 7 && oo(t, e, 7, l),
                                  p > 8 && oo(t, e, 8, c),
                                  p > 9 && oo(t, e, 9, h);
                          })(t, e, r, o, i, a, s, u, l, c, h, p)
                        : (function (t, e, n) {
                              for (var r = 0; r < n.length; r++) oo(t, e, r, n[r]);
                          })(t, e, r),
                    !1
                );
            }
            function Ji(t, e) {
                if (qr(t, e.nodeIndex).dirty) throw Zr(Gr.createDebugContext(t, e.nodeIndex), "Query " + e.query.id + " not dirty", "Query " + e.query.id + " dirty", 0 != (1 & t.state));
            }
            function ta(t) {
                if (!(128 & t.state)) {
                    if ((ra(t, ea.Destroy), na(t, ea.Destroy), Ai(t, 131072), t.disposables)) for (var e = 0; e < t.disposables.length; e++) t.disposables[e]();
                    !(function (t) {
                        if (16 & t.state) {
                            var e = uo(t);
                            if (e) {
                                var n = e.template._projectedViews;
                                n && (Go(n, n.indexOf(t)), Gr.dirtyParentQueries(t));
                            }
                        }
                    })(t),
                        t.renderer.destroyNode &&
                            (function (t) {
                                for (var e = t.def.nodes.length, n = 0; n < e; n++) {
                                    var r = t.def.nodes[n];
                                    1 & r.flags ? t.renderer.destroyNode(Fr(t, n).renderElement) : 2 & r.flags ? t.renderer.destroyNode(Hr(t, n).renderText) : (67108864 & r.flags || 134217728 & r.flags) && qr(t, n).destroy();
                                }
                            })(t),
                        ho(t) && t.renderer.destroy(),
                        (t.state |= 128);
                }
            }
            var ea = (function (t) {
                return (
                    (t[(t.CreateViewNodes = 0)] = "CreateViewNodes"),
                    (t[(t.CheckNoChanges = 1)] = "CheckNoChanges"),
                    (t[(t.CheckNoChangesProjectedViews = 2)] = "CheckNoChangesProjectedViews"),
                    (t[(t.CheckAndUpdate = 3)] = "CheckAndUpdate"),
                    (t[(t.CheckAndUpdateProjectedViews = 4)] = "CheckAndUpdateProjectedViews"),
                    (t[(t.Destroy = 5)] = "Destroy"),
                    t
                );
            })({});
            function na(t, e) {
                var n = t.def;
                if (33554432 & n.nodeFlags)
                    for (var r = 0; r < n.nodes.length; r++) {
                        var o = n.nodes[r];
                        33554432 & o.flags ? oa(Fr(t, r).componentView, e) : 0 == (33554432 & o.childFlags) && (r += o.childCount);
                    }
            }
            function ra(t, e) {
                var n = t.def;
                if (16777216 & n.nodeFlags)
                    for (var r = 0; r < n.nodes.length; r++) {
                        var o = n.nodes[r];
                        if (16777216 & o.flags) for (var i = Fr(t, r).viewContainer._embeddedViews, a = 0; a < i.length; a++) oa(i[a], e);
                        else 0 == (16777216 & o.childFlags) && (r += o.childCount);
                    }
            }
            function oa(t, e) {
                var n = t.state;
                switch (e) {
                    case ea.CheckNoChanges:
                        0 == (128 & n) && (12 == (12 & n) ? Qi(t) : 64 & n && ia(t, ea.CheckNoChangesProjectedViews));
                        break;
                    case ea.CheckNoChangesProjectedViews:
                        0 == (128 & n) && (32 & n ? Qi(t) : 64 & n && ia(t, e));
                        break;
                    case ea.CheckAndUpdate:
                        0 == (128 & n) && (12 == (12 & n) ? Yi(t) : 64 & n && ia(t, ea.CheckAndUpdateProjectedViews));
                        break;
                    case ea.CheckAndUpdateProjectedViews:
                        0 == (128 & n) && (32 & n ? Yi(t) : 64 & n && ia(t, e));
                        break;
                    case ea.Destroy:
                        ta(t);
                        break;
                    case ea.CreateViewNodes:
                        Wi(t);
                }
            }
            function ia(t, e) {
                ra(t, e), na(t, e);
            }
            function aa(t, e, n, r) {
                if (t.def.nodeFlags & e && t.def.nodeFlags & n)
                    for (var o = t.def.nodes.length, i = 0; i < o; i++) {
                        var a = t.def.nodes[i];
                        if (a.flags & e && a.flags & n)
                            switch ((Gr.setCurrentNode(t, a.nodeIndex), r)) {
                                case 0:
                                    Ri(t, a);
                                    break;
                                case 1:
                                    Ji(t, a);
                            }
                        (a.childFlags & e && a.childFlags & n) || (i += a.childCount);
                    }
            }
            var sa = !1;
            function ua(t, e, n, r, o, i) {
                return Bi(ca(t, o, o.injector.get(xn), e, n), r, i);
            }
            function la(t, e, n, r, o, i) {
                var a = o.injector.get(xn),
                    s = ca(t, o, new qa(a), e, n),
                    u = wa(r);
                return za(Ia.create, Bi, null, [s, u, i]);
            }
            function ca(t, e, n, r, o) {
                var i = e.injector.get(jr),
                    a = e.injector.get(ve);
                return { ngModule: e, injector: t, projectableNodes: r, selectorOrNode: o, sanitizer: i, rendererFactory: n, renderer: n.createRenderer(null, null), errorHandler: a };
            }
            function ha(t, e, n, r) {
                var o = wa(n);
                return za(Ia.create, zi, null, [t, e, o, r]);
            }
            function pa(t, e, n, r) {
                return (n = ya.get(e.element.componentProvider.provider.token) || wa(n)), za(Ia.create, qi, null, [t, e, n, r]);
            }
            function fa(t, e, n, r) {
                return ai(
                    t,
                    e,
                    n,
                    (function (t) {
                        var e = (function (t) {
                                var e = !1,
                                    n = !1;
                                return 0 === da.size
                                    ? { hasOverrides: e, hasDeprecatedOverrides: n }
                                    : (t.providers.forEach(function (t) {
                                          var r = da.get(t.token);
                                          3840 & t.flags && r && ((e = !0), (n = n || r.deprecatedBehavior));
                                      }),
                                      t.modules.forEach(function (t) {
                                          va.forEach(function (r, o) {
                                              o.ngInjectableDef.providedIn === t && ((e = !0), (n = n || r.deprecatedBehavior));
                                          });
                                      }),
                                      { hasOverrides: e, hasDeprecatedOverrides: n });
                            })(t),
                            n = e.hasDeprecatedOverrides;
                        return e.hasOverrides
                            ? ((function (t) {
                                  for (var e = 0; e < t.providers.length; e++) {
                                      var r = t.providers[e];
                                      n && (r.flags |= 4096);
                                      var o = da.get(r.token);
                                      o && ((r.flags = (-3841 & r.flags) | o.flags), (r.deps = yo(o.deps)), (r.value = o.value));
                                  }
                                  if (va.size > 0) {
                                      var i = new Set(t.modules);
                                      va.forEach(function (e, r) {
                                          if (i.has(r.ngInjectableDef.providedIn)) {
                                              var o = { token: r, flags: e.flags | (n ? 4096 : 0), deps: yo(e.deps), value: e.value, index: t.providers.length };
                                              t.providers.push(o), (t.providersByKey[Xr(r)] = o);
                                          }
                                      });
                                  }
                              })(
                                  (t = t.factory(function () {
                                      return Yr;
                                  }))
                              ),
                              t)
                            : t;
                    })(r)
                );
            }
            var da = new Map(),
                va = new Map(),
                ya = new Map();
            function ga(t) {
                da.set(t.token, t), "function" == typeof t.token && t.token.ngInjectableDef && "function" == typeof t.token.ngInjectableDef.providedIn && va.set(t.token, t);
            }
            function ma(t, e) {
                var n = bo(bo(e.viewDefFactory).nodes[0].element.componentView);
                ya.set(t, n);
            }
            function ba() {
                da.clear(), va.clear(), ya.clear();
            }
            function wa(t) {
                if (0 === da.size) return t;
                var e = (function (t) {
                    for (var e = [], n = null, r = 0; r < t.nodes.length; r++) {
                        var o = t.nodes[r];
                        1 & o.flags && (n = o), n && 3840 & o.flags && da.has(o.provider.token) && (e.push(n.nodeIndex), (n = null));
                    }
                    return e;
                })(t);
                if (0 === e.length) return t;
                t = t.factory(function () {
                    return Yr;
                });
                for (var n = 0; n < e.length; n++) r(t, e[n]);
                return t;
                function r(t, e) {
                    for (var n = e + 1; n < t.nodes.length; n++) {
                        var r = t.nodes[n];
                        if (1 & r.flags) return;
                        if (3840 & r.flags) {
                            var o = r.provider,
                                i = da.get(o.token);
                            i && ((r.flags = (-3841 & r.flags) | i.flags), (o.deps = yo(i.deps)), (o.value = i.value));
                        }
                    }
                }
            }
            function _a(t, e, n, r, o, i, a, s, u, l, c, h, p) {
                var f = t.def.nodes[e];
                return Ki(t, f, n, r, o, i, a, s, u, l, c, h, p), 224 & f.flags ? Br(t, e).value : void 0;
            }
            function Ca(t, e, n, r, o, i, a, s, u, l, c, h, p) {
                var f = t.def.nodes[e];
                return $i(t, f, n, r, o, i, a, s, u, l, c, h, p), 224 & f.flags ? Br(t, e).value : void 0;
            }
            function Ea(t) {
                return za(Ia.detectChanges, Yi, null, [t]);
            }
            function Sa(t) {
                return za(Ia.checkNoChanges, Qi, null, [t]);
            }
            function xa(t) {
                return za(Ia.destroy, ta, null, [t]);
            }
            var Ta,
                ka,
                Aa,
                Ia = (function (t) {
                    return (t[(t.create = 0)] = "create"), (t[(t.detectChanges = 1)] = "detectChanges"), (t[(t.checkNoChanges = 2)] = "checkNoChanges"), (t[(t.destroy = 3)] = "destroy"), (t[(t.handleEvent = 4)] = "handleEvent"), t;
                })({});
            function Pa(t, e) {
                (ka = t), (Aa = e);
            }
            function Na(t, e, n, r) {
                return Pa(t, e), za(Ia.handleEvent, t.def.handleEvent, null, [t, e, n, r]);
            }
            function Ra(t, e) {
                if (128 & t.state) throw Qr(Ia[Ta]);
                return (
                    Pa(t, Ua(t, 0)),
                    t.def.updateDirectives(function (t, n, r) {
                        for (var o = [], i = 3; i < arguments.length; i++) o[i - 3] = arguments[i];
                        var a = t.def.nodes[n];
                        return 0 === e ? Oa(t, a, r, o) : Ma(t, a, r, o), 16384 & a.flags && Pa(t, Ua(t, n)), 224 & a.flags ? Br(t, a.nodeIndex).value : void 0;
                    }, t)
                );
            }
            function Da(t, e) {
                if (128 & t.state) throw Qr(Ia[Ta]);
                return (
                    Pa(t, La(t, 0)),
                    t.def.updateRenderer(function (t, n, r) {
                        for (var o = [], i = 3; i < arguments.length; i++) o[i - 3] = arguments[i];
                        var a = t.def.nodes[n];
                        return 0 === e ? Oa(t, a, r, o) : Ma(t, a, r, o), 3 & a.flags && Pa(t, La(t, n)), 224 & a.flags ? Br(t, a.nodeIndex).value : void 0;
                    }, t)
                );
            }
            function Oa(t, e, n, r) {
                if (Ki.apply(void 0, h([t, e, n], r))) {
                    var o = 1 === n ? r[0] : r;
                    if (16384 & e.flags) {
                        for (var i = {}, a = 0; a < e.bindings.length; a++) {
                            var s = e.bindings[a],
                                u = o[a];
                            8 & s.flags &&
                                (i[
                                    ((f = s.nonMinifiedName),
                                    "ng-reflect-" +
                                        (f = f.replace(/[$@]/g, "_").replace(Va, function () {
                                            for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
                                            return "-" + t[1].toLowerCase();
                                        })))
                                ] = ja(u));
                        }
                        var l = e.parent,
                            c = Fr(t, l.nodeIndex).renderElement;
                        if (l.element.name) for (var p in i) null != (u = i[p]) ? t.renderer.setAttribute(c, p, u) : t.renderer.removeAttribute(c, p);
                        else t.renderer.setValue(c, "bindings=" + JSON.stringify(i, null, 2));
                    }
                }
                var f;
            }
            function Ma(t, e, n, r) {
                $i.apply(void 0, h([t, e, n], r));
            }
            var Va = /([A-Z])/g;
            function ja(t) {
                try {
                    return null != t ? t.toString().slice(0, 30) : t;
                } catch (t) {
                    return "[ERROR] Exception while trying to serialize the value";
                }
            }
            function Ua(t, e) {
                for (var n = e; n < t.def.nodes.length; n++) {
                    var r = t.def.nodes[n];
                    if (16384 & r.flags && r.bindings && r.bindings.length) return n;
                }
                return null;
            }
            function La(t, e) {
                for (var n = e; n < t.def.nodes.length; n++) {
                    var r = t.def.nodes[n];
                    if (3 & r.flags && r.bindings && r.bindings.length) return n;
                }
                return null;
            }
            var Ha = (function () {
                function t(t, e) {
                    (this.view = t), (this.nodeIndex = e), null == e && (this.nodeIndex = e = 0), (this.nodeDef = t.def.nodes[e]);
                    for (var n = this.nodeDef, r = t; n && 0 == (1 & n.flags); ) n = n.parent;
                    if (!n) for (; !n && r; ) (n = lo(r)), (r = r.parent);
                    (this.elDef = n), (this.elView = r);
                }
                return (
                    Object.defineProperty(t.prototype, "elOrCompView", {
                        get: function () {
                            return Fr(this.elView, this.elDef.nodeIndex).componentView || this.view;
                        },
                        enumerable: !0,
                        configurable: !0,
                    }),
                    Object.defineProperty(t.prototype, "injector", {
                        get: function () {
                            return ni(this.elView, this.elDef);
                        },
                        enumerable: !0,
                        configurable: !0,
                    }),
                    Object.defineProperty(t.prototype, "component", {
                        get: function () {
                            return this.elOrCompView.component;
                        },
                        enumerable: !0,
                        configurable: !0,
                    }),
                    Object.defineProperty(t.prototype, "context", {
                        get: function () {
                            return this.elOrCompView.context;
                        },
                        enumerable: !0,
                        configurable: !0,
                    }),
                    Object.defineProperty(t.prototype, "providerTokens", {
                        get: function () {
                            var t = [];
                            if (this.elDef)
                                for (var e = this.elDef.nodeIndex + 1; e <= this.elDef.nodeIndex + this.elDef.childCount; e++) {
                                    var n = this.elView.def.nodes[e];
                                    20224 & n.flags && t.push(n.provider.token), (e += n.childCount);
                                }
                            return t;
                        },
                        enumerable: !0,
                        configurable: !0,
                    }),
                    Object.defineProperty(t.prototype, "references", {
                        get: function () {
                            var t = {};
                            if (this.elDef) {
                                Fa(this.elView, this.elDef, t);
                                for (var e = this.elDef.nodeIndex + 1; e <= this.elDef.nodeIndex + this.elDef.childCount; e++) {
                                    var n = this.elView.def.nodes[e];
                                    20224 & n.flags && Fa(this.elView, n, t), (e += n.childCount);
                                }
                            }
                            return t;
                        },
                        enumerable: !0,
                        configurable: !0,
                    }),
                    Object.defineProperty(t.prototype, "componentRenderElement", {
                        get: function () {
                            var t = (function (t) {
                                for (; t && !ho(t); ) t = t.parent;
                                return t.parent ? Fr(t.parent, lo(t).nodeIndex) : null;
                            })(this.elOrCompView);
                            return t ? t.renderElement : void 0;
                        },
                        enumerable: !0,
                        configurable: !0,
                    }),
                    Object.defineProperty(t.prototype, "renderNode", {
                        get: function () {
                            return 2 & this.nodeDef.flags ? co(this.view, this.nodeDef) : co(this.elView, this.elDef);
                        },
                        enumerable: !0,
                        configurable: !0,
                    }),
                    (t.prototype.logError = function (t) {
                        for (var e, n, r = [], o = 1; o < arguments.length; o++) r[o - 1] = arguments[o];
                        2 & this.nodeDef.flags ? ((e = this.view.def), (n = this.nodeDef.nodeIndex)) : ((e = this.elView.def), (n = this.elDef.nodeIndex));
                        var i = (function (t, e) {
                                for (var n = -1, r = 0; r <= e; r++) 3 & t.nodes[r].flags && n++;
                                return n;
                            })(e, n),
                            a = -1;
                        e.factory(function () {
                            var e;
                            return ++a === i ? (e = t.error).bind.apply(e, h([t], r)) : Yr;
                        }),
                            a < i && (t.error("Illegal state: the ViewDefinitionFactory did not call the logger!"), t.error.apply(t, h(r)));
                    }),
                    t
                );
            })();
            function Fa(t, e, n) {
                for (var r in e.references) n[r] = Oi(t, e, e.references[r]);
            }
            function za(t, e, n, r) {
                var o = Ta,
                    i = ka,
                    a = Aa;
                try {
                    Ta = t;
                    var s = e.apply(n, r);
                    return (ka = i), (Aa = a), (Ta = o), s;
                } catch (t) {
                    if (pe(t) || !ka) throw t;
                    throw (function (t, e) {
                        return t instanceof Error || (t = new Error(t.toString())), Wr(t, e), t;
                    })(t, Ba());
                }
            }
            function Ba() {
                return ka ? new Ha(ka, Aa) : null;
            }
            var qa = (function () {
                    function t(t) {
                        this.delegate = t;
                    }
                    return (
                        (t.prototype.createRenderer = function (t, e) {
                            return new Ga(this.delegate.createRenderer(t, e));
                        }),
                        (t.prototype.begin = function () {
                            this.delegate.begin && this.delegate.begin();
                        }),
                        (t.prototype.end = function () {
                            this.delegate.end && this.delegate.end();
                        }),
                        (t.prototype.whenRenderingDone = function () {
                            return this.delegate.whenRenderingDone ? this.delegate.whenRenderingDone() : Promise.resolve(null);
                        }),
                        t
                    );
                })(),
                Ga = (function () {
                    function t(t) {
                        (this.delegate = t), (this.data = this.delegate.data);
                    }
                    return (
                        (t.prototype.destroyNode = function (t) {
                            !(function (t) {
                                Ln.delete(t.nativeNode);
                            })(Hn(t)),
                                this.delegate.destroyNode && this.delegate.destroyNode(t);
                        }),
                        (t.prototype.destroy = function () {
                            this.delegate.destroy();
                        }),
                        (t.prototype.createElement = function (t, e) {
                            var n = this.delegate.createElement(t, e),
                                r = Ba();
                            if (r) {
                                var o = new Un(n, null, r);
                                (o.name = t), Fn(o);
                            }
                            return n;
                        }),
                        (t.prototype.createComment = function (t) {
                            var e = this.delegate.createComment(t),
                                n = Ba();
                            return n && Fn(new jn(e, null, n)), e;
                        }),
                        (t.prototype.createText = function (t) {
                            var e = this.delegate.createText(t),
                                n = Ba();
                            return n && Fn(new jn(e, null, n)), e;
                        }),
                        (t.prototype.appendChild = function (t, e) {
                            var n = Hn(t),
                                r = Hn(e);
                            n && r && n instanceof Un && n.addChild(r), this.delegate.appendChild(t, e);
                        }),
                        (t.prototype.insertBefore = function (t, e, n) {
                            var r = Hn(t),
                                o = Hn(e),
                                i = Hn(n);
                            r && o && r instanceof Un && r.insertBefore(i, o), this.delegate.insertBefore(t, e, n);
                        }),
                        (t.prototype.removeChild = function (t, e) {
                            var n = Hn(t),
                                r = Hn(e);
                            n && r && n instanceof Un && n.removeChild(r), this.delegate.removeChild(t, e);
                        }),
                        (t.prototype.selectRootElement = function (t) {
                            var e = this.delegate.selectRootElement(t),
                                n = Ba();
                            return n && Fn(new Un(e, null, n)), e;
                        }),
                        (t.prototype.setAttribute = function (t, e, n, r) {
                            var o = Hn(t);
                            o && o instanceof Un && (o.attributes[r ? r + ":" + e : e] = n), this.delegate.setAttribute(t, e, n, r);
                        }),
                        (t.prototype.removeAttribute = function (t, e, n) {
                            var r = Hn(t);
                            r && r instanceof Un && (r.attributes[n ? n + ":" + e : e] = null), this.delegate.removeAttribute(t, e, n);
                        }),
                        (t.prototype.addClass = function (t, e) {
                            var n = Hn(t);
                            n && n instanceof Un && (n.classes[e] = !0), this.delegate.addClass(t, e);
                        }),
                        (t.prototype.removeClass = function (t, e) {
                            var n = Hn(t);
                            n && n instanceof Un && (n.classes[e] = !1), this.delegate.removeClass(t, e);
                        }),
                        (t.prototype.setStyle = function (t, e, n, r) {
                            var o = Hn(t);
                            o && o instanceof Un && (o.styles[e] = n), this.delegate.setStyle(t, e, n, r);
                        }),
                        (t.prototype.removeStyle = function (t, e, n) {
                            var r = Hn(t);
                            r && r instanceof Un && (r.styles[e] = null), this.delegate.removeStyle(t, e, n);
                        }),
                        (t.prototype.setProperty = function (t, e, n) {
                            var r = Hn(t);
                            r && r instanceof Un && (r.properties[e] = n), this.delegate.setProperty(t, e, n);
                        }),
                        (t.prototype.listen = function (t, e, n) {
                            if ("string" != typeof t) {
                                var r = Hn(t);
                                r &&
                                    r.listeners.push(
                                        new (function (t, e) {
                                            (this.name = t), (this.callback = e);
                                        })(e, n)
                                    );
                            }
                            return this.delegate.listen(t, e, n);
                        }),
                        (t.prototype.parentNode = function (t) {
                            return this.delegate.parentNode(t);
                        }),
                        (t.prototype.nextSibling = function (t) {
                            return this.delegate.nextSibling(t);
                        }),
                        (t.prototype.setValue = function (t, e) {
                            return this.delegate.setValue(t, e);
                        }),
                        t
                    );
                })(),
                Za = (function (t) {
                    function e(e, n, r) {
                        var o = t.call(this) || this;
                        return (o.moduleType = e), (o._bootstrapComponents = n), (o._ngModuleDefFactory = r), o;
                    }
                    return (
                        o(e, t),
                        (e.prototype.create = function (t) {
                            !(function () {
                                if (!sa) {
                                    sa = !0;
                                    var t = gn()
                                        ? {
                                              setCurrentNode: Pa,
                                              createRootView: la,
                                              createEmbeddedView: ha,
                                              createComponentView: pa,
                                              createNgModuleRef: fa,
                                              overrideProvider: ga,
                                              overrideComponentView: ma,
                                              clearOverrides: ba,
                                              checkAndUpdateView: Ea,
                                              checkNoChangesView: Sa,
                                              destroyView: xa,
                                              createDebugContext: function (t, e) {
                                                  return new Ha(t, e);
                                              },
                                              handleEvent: Na,
                                              updateDirectives: Ra,
                                              updateRenderer: Da,
                                          }
                                        : {
                                              setCurrentNode: function () {},
                                              createRootView: ua,
                                              createEmbeddedView: zi,
                                              createComponentView: qi,
                                              createNgModuleRef: ai,
                                              overrideProvider: Yr,
                                              overrideComponentView: Yr,
                                              clearOverrides: Yr,
                                              checkAndUpdateView: Yi,
                                              checkNoChangesView: Qi,
                                              destroyView: ta,
                                              createDebugContext: function (t, e) {
                                                  return new Ha(t, e);
                                              },
                                              handleEvent: function (t, e, n, r) {
                                                  return t.def.handleEvent(t, e, n, r);
                                              },
                                              updateDirectives: function (t, e) {
                                                  return t.def.updateDirectives(0 === e ? _a : Ca, t);
                                              },
                                              updateRenderer: function (t, e) {
                                                  return t.def.updateRenderer(0 === e ? _a : Ca, t);
                                              },
                                          };
                                    (Gr.setCurrentNode = t.setCurrentNode),
                                        (Gr.createRootView = t.createRootView),
                                        (Gr.createEmbeddedView = t.createEmbeddedView),
                                        (Gr.createComponentView = t.createComponentView),
                                        (Gr.createNgModuleRef = t.createNgModuleRef),
                                        (Gr.overrideProvider = t.overrideProvider),
                                        (Gr.overrideComponentView = t.overrideComponentView),
                                        (Gr.clearOverrides = t.clearOverrides),
                                        (Gr.checkAndUpdateView = t.checkAndUpdateView),
                                        (Gr.checkNoChangesView = t.checkNoChangesView),
                                        (Gr.destroyView = t.destroyView),
                                        (Gr.resolveDep = xi),
                                        (Gr.createDebugContext = t.createDebugContext),
                                        (Gr.handleEvent = t.handleEvent),
                                        (Gr.updateDirectives = t.updateDirectives),
                                        (Gr.updateRenderer = t.updateRenderer),
                                        (Gr.dirtyParentQueries = Ni);
                                }
                            })();
                            var e = (function (t) {
                                var e = Array.from(t.providers),
                                    n = Array.from(t.modules),
                                    r = {};
                                for (var o in t.providersByKey) r[o] = t.providersByKey[o];
                                return { factory: t.factory, isRoot: t.isRoot, providers: e, modules: n, providersByKey: r };
                            })(bo(this._ngModuleDefFactory));
                            return Gr.createNgModuleRef(this.moduleType, t || Bt.NULL, this._bootstrapComponents, e);
                        }),
                        e
                    );
                })(Ke);
            function Wa(t, e, n) {
                t != e && Ya(n);
            }
            function Qa(t, e) {
                null == t && Ya(e);
            }
            function Ya(t) {
                throw new Error("ASSERTION ERROR: " + t);
            }
            var Ka = 16,
                Xa = 0,
                $a = 1,
                Ja = 2,
                ts = 3,
                es = 4,
                ns = 5,
                rs = 6,
                os = 7,
                is = 8,
                as = 9,
                ss = 10,
                us = 11,
                ls = 14;
            function cs(t, e, n) {
                t.afterContentInit && (e.contentHooks || (e.contentHooks = [])).push(n, t.afterContentInit),
                    t.afterContentChecked && ((e.contentHooks || (e.contentHooks = [])).push(n, t.afterContentChecked), (e.contentCheckHooks || (e.contentCheckHooks = [])).push(n, t.afterContentChecked));
            }
            function hs(t, e, n) {
                t.afterViewInit && (e.viewHooks || (e.viewHooks = [])).push(n, t.afterViewInit),
                    t.afterViewChecked && ((e.viewHooks || (e.viewHooks = [])).push(n, t.afterViewChecked), (e.viewCheckHooks || (e.viewCheckHooks = [])).push(n, t.afterViewChecked));
            }
            function ps(t, e, n) {
                null != t.onDestroy && (e.destroyHooks || (e.destroyHooks = [])).push(n, t.onDestroy);
            }
            function fs(t, e, n) {
                16 & t[es] && (ds(t[os], e.initHooks, e.checkHooks, n), (t[es] &= -17));
            }
            function ds(t, e, n, r) {
                var o = r ? e : n;
                o && vs(t, o);
            }
            function vs(t, e) {
                for (var n = 0; n < e.length; n += 2) e[n + 1].call(t[e[n]]);
            }
            "undefined" == typeof ngDevMode || ngDevMode;
            var ys = 0,
                gs = 4,
                ms = "ngProjectAs";
            function bs(t) {
                return !!t.listen;
            }
            var ws = {
                createRenderer: function (t, e) {
                    return document;
                },
            };
            function _s(t, e) {
                Qa(t, "should be called with a node"),
                    Wa(
                        t.tNode.type,
                        e,
                        "should be a " +
                            (function (t) {
                                return 1 == t ? "Projection" : 0 == t ? "Container" : 2 == t ? "View" : 3 == t ? "Element" : "<unknown>";
                            })(e)
                    );
            }
            function Cs(t) {
                return Array.isArray(t) ? t[0] : t;
            }
            function Es(t) {
                if (2 === t.tNode.type) {
                    var e = t.data;
                    return e[Ja] ? e[Ja][ns] : null;
                }
                return t.tNode.next ? t.view[t.tNode.next.index] : null;
            }
            function Ss(t) {
                return t.tNode.child ? Cs((2 === t.tNode.type ? t.data : t.view)[t.tNode.child.index]) : null;
            }
            function xs(t) {
                if (-1 === t.tNode.index && 2 === t.tNode.type) {
                    var e = t.data[ls];
                    return -1 === e ? null : t.view[e].dynamicLContainerNode;
                }
                var n = t.tNode.parent;
                return Cs(n ? t.view[n.index] : t.view[ns]);
            }
            var Ts = [];
            function ks(t) {
                for (var e = t[ns]; 2 === e.tNode.type; ) ngDevMode && Qa(t[$a], "lViewData.parent"), (e = (t = t[$a])[ns]);
                return ngDevMode && _s(e, 3), ngDevMode && Qa(e.data, "node.data"), e;
            }
            function As(t, e, n, r, o) {
                0 === t ? (bs(e) ? e.insertBefore(n, r, o) : n.insertBefore(r, o, !0)) : 1 === t ? (bs(e) ? e.removeChild(n, r) : n.removeChild(r)) : 2 === t && (ngDevMode && ngDevMode.rendererDestroyNode++, e.destroyNode(r));
            }
            function Is(t) {
                if (-1 === t[Xa].childIndex) return null;
                var e = t[t[Xa].childIndex];
                return e.data ? e.data : e.dynamicLContainerNode.data;
            }
            function Ps(t, e) {
                var n;
                return (n = t[ns]) && 2 === n.tNode.type ? xs(n).data : t[$a] === e ? null : t[$a];
            }
            function Ns(t) {
                if (t[Xa]) {
                    var e = t;
                    !(function (t) {
                        var e = t[Xa].cleanup;
                        if (null != e) {
                            for (var n = 0; n < e.length - 1; n += 2)
                                "string" == typeof e[n] ? (Cs(t[e[n + 1]]).native.removeEventListener(e[n], t[is][e[n + 2]], e[n + 3]), (n += 2)) : "number" == typeof e[n] ? (0, t[is][e[n]])() : e[n].call(t[is][e[n + 1]]);
                            t[is] = null;
                        }
                    })(e),
                        (function (t) {
                            var e,
                                n = t[Xa];
                            null != n && null != (e = n.destroyHooks) && vs(t[os], e);
                        })(e),
                        (r = (n = e)[Xa] && n[Xa].pipeDestroyHooks) && vs(n, r),
                        -1 === e[Xa].id && bs(e[us]) && (ngDevMode && ngDevMode.rendererDestroy++, e[us].destroy());
                }
                var n, r;
            }
            var Rs,
                Ds,
                Os,
                Ms,
                Vs,
                js,
                Us,
                Ls,
                Hs,
                Fs = "__ngHostLNode__",
                zs = Promise.resolve(null),
                Bs = [0, 0],
                qs = new Array(Ka).fill(null),
                Gs = !1,
                Zs = !0;
            function Ws(t, e) {
                var n = Ls;
                return (Hs = t && t[os]), (Vs = t && t[Xa]), (Us = t && 1 == (1 & t[es])), (Zs = t && Vs.firstTemplatePass), (Rs = t && t[us]), null != e && ((Os = e), (Ms = !0)), (Ls = t), (js = t && t[ts]), n;
            }
            function Qs(t, e) {
                e || (Gs || ds(Hs, Vs.viewHooks, Vs.viewCheckHooks, Us), (Ls[es] &= -6)), (Ls[es] |= 16), (Ls[rs] = -1), Ws(t, null);
            }
            function Ys() {
                Gs || fs(Ls, Vs, Us),
                    (function (t) {
                        for (var e = Is(Ls); null !== e; e = e[Ja])
                            if (e.length < Ka && null === e[ys])
                                for (var n = e, r = 0; r < n[gs].length; r++) {
                                    var o = n[gs][r],
                                        i = o.data;
                                    ngDevMode && Qa(i[Xa], "TView must be allocated"), Js(o, i[Xa], i[as], 2);
                                }
                    })(),
                    Gs || ds(Hs, Vs.contentHooks, Vs.contentCheckHooks, Us),
                    (Vs.firstTemplatePass = Zs = !1),
                    Ks(Vs.hostBindings),
                    (function (t) {
                        if (null != t.contentQueries)
                            for (var e = 0; e < t.contentQueries.length; e += 2) {
                                var n = t.contentQueries[e];
                                t.directives[n].contentQueriesRefresh(n, t.contentQueries[e + 1]);
                            }
                    })(Vs),
                    (function (t) {
                        if (null != t) for (var e = 0; e < t.length; e += 2) su(t[e], t[e + 1]);
                    })(Vs.components);
            }
            function Ks(t) {
                if (null != t)
                    for (var e = Vs.directives, n = 0; n < t.length; n += 2) {
                        var r = t[n],
                            o = e[r];
                        o.hostBindings && o.hostBindings(r, t[n + 1]);
                    }
            }
            function Xs(t, e, n, r, o) {
                return [e, Ls, null, null, 25 | r, null, -1, null, null, n, Ls && Ls[ss], t, o || null, null, -1, null];
            }
            function $s(t, e, n, r, o, i) {
                var a = Ms ? Os : Os && xs(Os),
                    s = a && a.view === Ls ? a.tNode : null,
                    u = (Ms ? js : Os && Os.queries) || (a && a.queries && a.queries.child()),
                    l = null != i,
                    c = (function (t, e, n, r, o, i) {
                        return { native: r, view: Ls, nodeInjector: n ? n.nodeInjector : null, data: o, queries: i, tNode: null, dynamicLContainerNode: null };
                    })(0, 0, a, n, l ? i : null, u);
                if (-1 === t || 2 === e) c.tNode = (i ? i[Xa].node : null) || au(e, t, null, null, s, null);
                else {
                    var h = t + Ka;
                    ngDevMode && du(h);
                    var p = Vs.data;
                    if (((Ls[h] = c), h >= p.length)) {
                        var f = (p[h] = au(e, h, r, o, s, null));
                        if (!Ms && Os) {
                            var d = Os.tNode;
                            (d.next = f), d.dynamicContainerNode && (d.dynamicContainerNode.next = f);
                        }
                    }
                    (c.tNode = p[h]), Ms && ((js = null), ((null == Os.tNode.child && Os.view === Ls) || 2 === Os.tNode.type) && (Os.tNode.child = c.tNode));
                }
                if (2 == (2 & e) && l) {
                    var v = i;
                    ngDevMode && null != v[ns] && Ya("lViewData[HOST_NODE] should not have been initialized"), (v[ns] = c), Zs && (v[Xa].node = c.tNode);
                }
                return (Os = c), (Ms = !0), c;
            }
            function Js(t, e, n, r) {
                var o,
                    i = Ms,
                    a = Os;
                if (null == t.data[$a] && t.data[as] && !e.template) lu(t.data[as]);
                else
                    try {
                        (Ms = !0), (Os = null), (o = Ws(t.data, t)), ru(), e.template(r, n), 2 & r ? Ys() : (t.data[Xa].firstTemplatePass = Zs = !1);
                    } finally {
                        Qs(o, 1 == (1 & r)), (Ms = i), (Os = a);
                    }
                return t;
            }
            function tu(t, e, n, r) {
                var o = Ws(e, t);
                try {
                    Ds.begin && Ds.begin(), r ? (ru(), r(eu(e), n), Ys()) : (Gs || (fs(Ls, Vs, Us), ds(Hs, Vs.contentHooks, Vs.contentCheckHooks, Us)), Ks(Bs), su(0, Ka));
                } finally {
                    Ds.end && Ds.end(), Qs(o);
                }
            }
            function eu(t) {
                return 1 & t[es] ? 3 : 2;
            }
            var nu = null;
            function ru() {
                nu = null;
            }
            function ou(t, e, n, r, o) {
                return (
                    ngDevMode && ngDevMode.tView++,
                    {
                        id: t,
                        template: e,
                        viewQuery: o,
                        node: null,
                        data: qs.slice(),
                        childIndex: -1,
                        bindingStartIndex: -1,
                        directives: null,
                        firstTemplatePass: !0,
                        initHooks: null,
                        checkHooks: null,
                        contentHooks: null,
                        contentCheckHooks: null,
                        viewHooks: null,
                        viewCheckHooks: null,
                        destroyHooks: null,
                        pipeDestroyHooks: null,
                        cleanup: null,
                        hostBindings: null,
                        contentQueries: null,
                        components: null,
                        directiveRegistry: "function" == typeof n ? n() : n,
                        pipeRegistry: "function" == typeof r ? r() : r,
                        currentMatches: null,
                    }
                );
            }
            function iu(t, e) {
                ngDevMode && fu(-1), (Ds = t);
                var n,
                    r = t.createRenderer(null, null),
                    o = "string" == typeof e ? (bs(r) ? r.selectRootElement(e) : r.querySelector(e)) : e;
                if (ngDevMode && !o)
                    throw new Error(
                        "Renderer: " + ("string" == typeof e ? "Host node with selector not found:" : "Host node is required:") + " [" + ("function" == typeof (n = e) ? n.name || n : "string" == typeof n ? n : null == n ? "" : "" + n) + "]"
                    );
                return o;
            }
            function au(t, e, n, r, o, i) {
                return (
                    ngDevMode && ngDevMode.tNode++,
                    {
                        type: t,
                        index: e,
                        flags: 0,
                        tagName: n,
                        attrs: r,
                        localNames: null,
                        initialInputs: void 0,
                        inputs: void 0,
                        outputs: void 0,
                        tViews: i,
                        next: null,
                        child: null,
                        parent: o,
                        dynamicContainerNode: null,
                        detached: null,
                        stylingTemplate: null,
                        projection: null,
                    }
                );
            }
            function su(t, e) {
                ngDevMode && fu(e);
                var n = Ls[e];
                ngDevMode && _s(n, 3), ngDevMode && Qa(n.data, "Component's host node should have an LViewData attached.");
                var r = n.data;
                uu(r) && 6 & r[es] && (ngDevMode && fu(t, Hs), pu(r, n, Hs[t]));
            }
            function uu(t) {
                return 8 == (8 & t[es]);
            }
            function lu(t) {
                for (var e = 0; e < t.components.length; e++) {
                    var n = t.components[e],
                        r = vu(n);
                    ngDevMode && Qa(r.data, "Component host node should be attached to an LView"), tu(r, cu(n), n);
                }
            }
            function cu(t) {
                ngDevMode && Qa(t, "component");
                for (var e = vu(t).view; e[$a]; ) e = e[$a];
                return e;
            }
            function hu(t) {
                var e = vu(t);
                ngDevMode && Qa(e.data, "Component host node should be attached to an LViewData instance."), pu(e.data, e, t);
            }
            function pu(t, e, n) {
                var r = Ws(t, e),
                    o = t[Xa],
                    i = o.template,
                    a = o.viewQuery;
                try {
                    ru(),
                        (function (e, n, r) {
                            e && 1 & t[es] && e(1, r);
                        })(a, 0, n),
                        i(eu(t), n),
                        Ys(),
                        (function (t, e) {
                            t && t(2, e);
                        })(a, n);
                } finally {
                    Qs(r);
                }
            }
            function fu(t, e) {
                null == e && (e = Ls),
                    (function (t, e) {
                        t >= (e ? e.length : 0) && Ya("index expected to be a valid data index");
                    })(t, e || Ls);
            }
            function du(t, e) {
                null == e && (e = Ls), Wa(e.length, t, "index " + t + " expected to be at the end of arr (length " + e.length + ")");
            }
            function vu(t) {
                ngDevMode && Qa(t, "expecting component got null");
                var e = t[Fs];
                return ngDevMode && Qa(t, "object is not a component"), e;
            }
            var yu = zs;
            function gu(t) {
                return { components: [], scheduler: t, clean: yu };
            }
            var mu = (function () {
                    function t(t, e) {
                        (this._view = t), (this._appRef = null), (this._viewContainerRef = null), (this._lViewNode = null), (this.context = e);
                    }
                    return (
                        (t.prototype._setComponentContext = function (t, e) {
                            (this._view = t), (this.context = e);
                        }),
                        Object.defineProperty(t.prototype, "destroyed", {
                            get: function () {
                                return 32 == (32 & this._view[es]);
                            },
                            enumerable: !0,
                            configurable: !0,
                        }),
                        (t.prototype.destroy = function () {
                            var t, e;
                            this._viewContainerRef && uu(this._view) && (this._viewContainerRef.detach(this._viewContainerRef.indexOf(this)), (this._viewContainerRef = null)),
                                bs((e = (t = this._view)[us])) &&
                                    e.destroyNode &&
                                    (function (e, n, r, o, i, a) {
                                        for (var s = t[ns], u = -1; s; ) {
                                            var l = null,
                                                c = s.tNode.type;
                                            if (3 === c) As(2, o, null, s.native, a), s.dynamicLContainerNode && As(2, o, null, s.dynamicLContainerNode.native, a);
                                            else if (0 === c) {
                                                As(2, o, null, s.native, a);
                                                var h = s,
                                                    p = h.dynamicLContainerNode ? h.dynamicLContainerNode.data : h.data;
                                                (l = p[gs].length ? Ss(p[gs][0]) : null) && (a = h.dynamicLContainerNode ? h.dynamicLContainerNode.native : h.native);
                                            } else if (1 === c) {
                                                var f = ks(s.view),
                                                    d = f.tNode.projection[s.tNode.projection];
                                                (Ts[++u] = s), (l = d ? f.data[$a][d.index] : null);
                                            } else l = Ss(s);
                                            if (null === l)
                                                for (null === (l = Es(s)) && 8192 & s.tNode.flags && (l = Es(Ts[u--])); s && !l; ) {
                                                    if (null === (s = xs(s)) || s === n) return null;
                                                    s.tNode.next || 0 !== c || (a = s.native), (l = Es(s));
                                                }
                                            s = l;
                                        }
                                    })(0, t[ns], 0, e),
                                (function (t) {
                                    if (-1 === t[Xa].childIndex) return Ns(t);
                                    for (var e = Is(t); e; ) {
                                        var n = null;
                                        if ((e.length >= Ka ? e[Xa].childIndex > -1 && (n = Is(e)) : e[gs].length && (n = e[gs][0].data), null == n)) {
                                            for (; e && !e[Ja] && e !== t; ) Ns(e), (e = Ps(e, t));
                                            Ns(e || t), (n = e && e[Ja]);
                                        }
                                        e = n;
                                    }
                                })(t),
                                (t[es] |= 32);
                        }),
                        (t.prototype.onDestroy = function (t) {
                            var e, n;
                            (n = t),
                                (function (t) {
                                    return t[is] || (t[is] = []);
                                })((e = this._view)).push(n),
                                e[Xa].firstTemplatePass &&
                                    (function (t) {
                                        return t[Xa].cleanup || (t[Xa].cleanup = []);
                                    })(e).push(e[is].length - 1, null);
                        }),
                        (t.prototype.markForCheck = function () {
                            !(function (t) {
                                for (var e = t; null != e[$a]; ) (e[es] |= 4), (e = e[$a]);
                                var n, r;
                                (e[es] |= 4),
                                    ngDevMode && Qa(e[as], "rootContext"),
                                    (n = e[as]).clean == zs &&
                                        ((n.clean = new Promise(function (t) {
                                            return (r = t);
                                        })),
                                        n.scheduler(function () {
                                            lu(n), r(null), (n.clean = zs);
                                        }));
                            })(this._view);
                        }),
                        (t.prototype.detach = function () {
                            this._view[es] &= -9;
                        }),
                        (t.prototype.reattach = function () {
                            this._view[es] |= 8;
                        }),
                        (t.prototype.detectChanges = function () {
                            hu(this.context);
                        }),
                        (t.prototype.checkNoChanges = function () {
                            !(function (t) {
                                Gs = !0;
                                try {
                                    hu(t);
                                } finally {
                                    Gs = !1;
                                }
                            })(this.context);
                        }),
                        (t.prototype.attachToViewContainerRef = function (t) {
                            this._viewContainerRef = t;
                        }),
                        (t.prototype.detachFromAppRef = function () {
                            this._appRef = null;
                        }),
                        (t.prototype.attachToAppRef = function (t) {
                            this._appRef = t;
                        }),
                        t
                    );
                })(),
                bu = (function (t) {
                    function e() {
                        return (null !== t && t.apply(this, arguments)) || this;
                    }
                    return (
                        o(e, t),
                        (e.prototype.resolveComponentFactory = function (t) {
                            return ngDevMode && (void 0 === e && (e = "Type passed in is not ComponentType, it does not have 'ngComponentDef' property."), t.ngComponentDef || Ya(e)), new Eu(t.ngComponentDef);
                            var e;
                        }),
                        e
                    );
                })(Ze);
            function wu(t) {
                var e = [];
                for (var n in t) t.hasOwnProperty(n) && e.push({ propName: t[n], templateName: n });
                return e;
            }
            var _u = new mt("ROOT_CONTEXT_TOKEN", {
                    providedIn: "root",
                    factory: function () {
                        return gu(ie(Cu));
                    },
                }),
                Cu = new mt("SCHEDULER_TOKEN", {
                    providedIn: "root",
                    factory: function () {
                        return requestAnimationFrame.bind(window);
                    },
                }),
                Eu = (function (t) {
                    function e(e) {
                        var n = t.call(this) || this;
                        return (n.componentDef = e), (n.componentType = e.type), (n.selector = e.selectors[0][0]), (n.ngContentSelectors = []), n;
                    }
                    return (
                        o(e, t),
                        Object.defineProperty(e.prototype, "inputs", {
                            get: function () {
                                return wu(this.componentDef.inputs);
                            },
                            enumerable: !0,
                            configurable: !0,
                        }),
                        Object.defineProperty(e.prototype, "outputs", {
                            get: function () {
                                return wu(this.componentDef.outputs);
                            },
                            enumerable: !0,
                            configurable: !0,
                        }),
                        (e.prototype.create = function (t, e, n, r) {
                            var o,
                                i,
                                a = void 0 === n,
                                s = r ? r.injector.get(xn) : ws,
                                u = a ? ((o = this.selector), bs((i = s.createRenderer(null, this.componentDef.rendererType) || Rs)) ? i.createElement(o, nu) : null === nu ? i.createElement(o) : i.createElementNS(nu, o)) : iu(s, n),
                                l = r && !a ? r.injector.get(_u) : gu(requestAnimationFrame.bind(window)),
                                c = Xs(s.createRenderer(u, this.componentDef.rendererType), ou(-1, null, null, null, null), l, this.componentDef.onPush ? 4 : 2);
                            c[ss] = (r && r.injector) || null;
                            var h,
                                p,
                                f = Ws(c, null);
                            try {
                                if (
                                    (s.begin && s.begin(),
                                    (p = (function (t, e, n, r) {
                                        (Ms = !1), (Os = null);
                                        var o,
                                            i = $s(0, 3, e, null, null, Xs(Rs, (o = n.template).ngPrivateData || (o.ngPrivateData = ou(-1, o, n.directiveDefs, n.pipeDefs, n.viewQuery)), null, n.onPush ? 4 : 2, r));
                                        return Zs && ((i.tNode.flags = 4096), n.diPublic && n.diPublic(n), (Vs.directives = [n])), i;
                                    })(0, u, this.componentDef)),
                                    l.components.push(
                                        (h = (function (t, e, n) {
                                            if (
                                                (ngDevMode && Wa(Ls[rs], -1, "directives should be created before any bindings"),
                                                ngDevMode && Wa(Ms, !0, "previousOrParentNode should be a parent"),
                                                Object.defineProperty(e, Fs, { enumerable: !1, value: Os }),
                                                null == Hs && (Ls[os] = Hs = []),
                                                ngDevMode && du(t, Hs),
                                                (Hs[t] = e),
                                                Zs)
                                            ) {
                                                var r = Os.tNode.flags;
                                                0 == (4095 & r) ? (Os.tNode.flags = (t << 14) | (4096 & r) | 1) : (ngDevMode && 4095 == (4095 & r) && Ya("Reached the max number of directives"), Os.tNode.flags++);
                                            } else {
                                                var o = n.diPublic;
                                                o && o(n);
                                            }
                                            return (
                                                null != n.attributes &&
                                                    3 == Os.tNode.type &&
                                                    (function (t, e) {
                                                        for (var n = bs(Rs), r = 0; r < e.length; ) {
                                                            var o = e[r];
                                                            if (1 === o) break;
                                                            if (o === ms) r += 2;
                                                            else if ((ngDevMode && ngDevMode.rendererSetAttribute++, 0 === o)) {
                                                                var i = e[r + 1],
                                                                    a = e[r + 2],
                                                                    s = e[r + 3];
                                                                n ? Rs.setAttribute(t, a, s, i) : t.setAttributeNS(i, a, s), (r += 4);
                                                            } else (s = e[r + 1]), n ? Rs.setAttribute(t, o, s) : t.setAttribute(o, s), (r += 2);
                                                        }
                                                    })(Os.native, n.attributes),
                                                e
                                            );
                                        })(0, this.componentDef.factory(), this.componentDef))
                                    ),
                                    (function (t, e, n) {
                                        t && null != t.changeDetectorRef && t.changeDetectorRef._setComponentContext(p.data, h);
                                    })(p.nodeInjector),
                                    (function (t, e) {
                                        var n = vu(t),
                                            r = n.view[Xa];
                                        (function (t, e, n, r) {
                                            ngDevMode && Wa(r.firstTemplatePass, !0, "Should only be called on first template pass"),
                                                e && (r.initHooks || (r.initHooks = [])).push(0, e),
                                                n && ((r.initHooks || (r.initHooks = [])).push(0, n), (r.checkHooks || (r.checkHooks = [])).push(0, n));
                                        })(0, e.onInit, e.doCheck, r),
                                            (function (t, e) {
                                                if (e.firstTemplatePass)
                                                    for (var n = t >> 14, r = n + (4095 & t), o = n; o < r; o++) {
                                                        var i = e.directives[o];
                                                        cs(i, e, o), hs(i, e, o), ps(i, e, o);
                                                    }
                                            })(n.tNode.flags, r);
                                    })(h, this.componentDef),
                                    e)
                                )
                                    for (var d = 0, v = (p.tNode.projection = []), y = 0; y < e.length; y++) {
                                        for (var g = e[y], m = null, b = null, w = 0; w < g.length; w++) {
                                            var _ = $s(++d, 3, g[w], null, null);
                                            b ? (b.next = _.tNode) : (m = _.tNode), (b = _.tNode);
                                        }
                                        v.push(m);
                                    }
                                Js(p, p.data[Xa], h, 1), (p.data[es] &= -2);
                            } finally {
                                Ws(f, null), s.end && s.end();
                            }
                            var C = new Su(this.componentType, h, c, t, u);
                            return a && (C.hostView._lViewNode.tNode.child = p.tNode), C;
                        }),
                        e
                    );
                })(He),
                Su = (function (t) {
                    function e(e, n, r, o, i) {
                        var a = t.call(this) || this;
                        return (
                            (a.destroyCbs = []),
                            (a.instance = n),
                            (a.hostView = a.changeDetectorRef = new mu(r, n)),
                            (a.hostView._lViewNode = $s(-1, 2, null, null, null, r)),
                            (a.injector = o),
                            (a.location = new An(i)),
                            (a.componentType = e),
                            a
                        );
                    }
                    return (
                        o(e, t),
                        (e.prototype.destroy = function () {
                            ngDevMode && Qa(this.destroyCbs, "NgModule already destroyed"),
                                this.destroyCbs.forEach(function (t) {
                                    return t();
                                }),
                                (this.destroyCbs = null);
                        }),
                        (e.prototype.onDestroy = function (t) {
                            ngDevMode && Qa(this.destroyCbs, "NgModule already destroyed"), this.destroyCbs.push(t);
                        }),
                        e
                    );
                })(Le),
                xu = {
                    provide: Ze,
                    useFactory: function () {
                        return new bu();
                    },
                    deps: [],
                },
                Tu = (function (t) {
                    function e(e, n) {
                        var r = t.call(this) || this;
                        (r._bootstrapComponents = []), (r.destroyCbs = []);
                        var o = e.ngModuleDef;
                        return (
                            ngDevMode && Qa(o, "NgModule '" + Nt(e) + "' is not a subtype of 'NgModuleType'."),
                            (r._bootstrapComponents = o.bootstrap),
                            (r.injector = (function (t, e, n) {
                                return void 0 === e && (e = null), void 0 === n && (n = null), (e = e || _e()), new Ce(t, n, e);
                            })(e, n, [xu, { provide: Ye, useValue: r }])),
                            (r.instance = r.injector.get(e)),
                            (r.componentFactoryResolver = new bu()),
                            r
                        );
                    }
                    return (
                        o(e, t),
                        (e.prototype.destroy = function () {
                            ngDevMode && Qa(this.destroyCbs, "NgModule already destroyed"),
                                this.destroyCbs.forEach(function (t) {
                                    return t();
                                }),
                                (this.destroyCbs = null);
                        }),
                        (e.prototype.onDestroy = function (t) {
                            ngDevMode && Qa(this.destroyCbs, "NgModule already destroyed"), this.destroyCbs.push(t);
                        }),
                        e
                    );
                })(Ye);
            !(function (t) {
                function e(e) {
                    var n = t.call(this) || this;
                    return (n.moduleType = e), n;
                }
                o(e, t),
                    (e.prototype.create = function (t) {
                        return new Tu(this.moduleType, t);
                    });
            })(Ke),
                n("yLV6");
            var ku = function () {},
                Au = function (t) {
                    this.render = t;
                },
                Iu = new O(function (t) {
                    return t.complete();
                });
            function Pu(t) {
                return t
                    ? (function (t) {
                          return new O(function (e) {
                              return t.schedule(function () {
                                  return e.complete();
                              });
                          });
                      })(t)
                    : Iu;
            }
            function Nu() {
                for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
                var n,
                    r,
                    o = t[t.length - 1];
                switch ((V(o) ? t.pop() : (o = void 0), t.length)) {
                    case 0:
                        return Pu(o);
                    case 1:
                        return o
                            ? X(t, o)
                            : ((n = t[0]),
                              ((r = new O(function (t) {
                                  t.next(n), t.complete();
                              }))._isScalar = !0),
                              (r.value = n),
                              r);
                    default:
                        return X(t, o);
                }
            }
            function Ru() {
                return Error.call(this), (this.message = "no elements in sequence"), (this.name = "EmptyError"), this;
            }
            Ru.prototype = Object.create(Error.prototype);
            var Du = Ru,
                Ou = (function (t) {
                    function e(e) {
                        var n = t.call(this) || this;
                        return (n._value = e), n;
                    }
                    return (
                        o(e, t),
                        Object.defineProperty(e.prototype, "value", {
                            get: function () {
                                return this.getValue();
                            },
                            enumerable: !0,
                            configurable: !0,
                        }),
                        (e.prototype._subscribe = function (e) {
                            var n = t.prototype._subscribe.call(this, e);
                            return n && !n.closed && e.next(this._value), n;
                        }),
                        (e.prototype.getValue = function () {
                            if (this.hasError) throw this.thrownError;
                            if (this.closed) throw new it();
                            return this._value;
                        }),
                        (e.prototype.next = function (e) {
                            t.prototype.next.call(this, (this._value = e));
                        }),
                        e
                    );
                })(ut);
            function Mu(t, e) {
                return J(t, e, 1);
            }
            function Vu(t, e) {
                return function (n) {
                    return n.lift(new ju(t, e));
                };
            }
            var ju = (function () {
                    function t(t, e) {
                        (this.predicate = t), (this.thisArg = e);
                    }
                    return (
                        (t.prototype.call = function (t, e) {
                            return e.subscribe(new Uu(t, this.predicate, this.thisArg));
                        }),
                        t
                    );
                })(),
                Uu = (function (t) {
                    function e(e, n, r) {
                        var o = t.call(this, e) || this;
                        return (o.predicate = n), (o.thisArg = r), (o.count = 0), o;
                    }
                    return (
                        o(e, t),
                        (e.prototype._next = function (t) {
                            var e;
                            try {
                                e = this.predicate.call(this.thisArg, t, this.count++);
                            } catch (t) {
                                return void this.destination.error(t);
                            }
                            e && this.destination.next(t);
                        }),
                        e
                    );
                })(A);
            function Lu() {
                return Error.call(this), (this.message = "argument out of range"), (this.name = "ArgumentOutOfRangeError"), this;
            }
            Lu.prototype = Object.create(Error.prototype);
            var Hu = Lu;
            function Fu(t) {
                return function (e) {
                    return 0 === t ? Pu() : e.lift(new zu(t));
                };
            }
            var zu = (function () {
                    function t(t) {
                        if (((this.total = t), this.total < 0)) throw new Hu();
                    }
                    return (
                        (t.prototype.call = function (t, e) {
                            return e.subscribe(new Bu(t, this.total));
                        }),
                        t
                    );
                })(),
                Bu = (function (t) {
                    function e(e, n) {
                        var r = t.call(this, e) || this;
                        return (r.total = n), (r.ring = new Array()), (r.count = 0), r;
                    }
                    return (
                        o(e, t),
                        (e.prototype._next = function (t) {
                            var e = this.ring,
                                n = this.total,
                                r = this.count++;
                            e.length < n ? e.push(t) : (e[r % n] = t);
                        }),
                        (e.prototype._complete = function () {
                            var t = this.destination,
                                e = this.count;
                            if (e > 0)
                                for (var n = this.count >= this.total ? this.total : this.count, r = this.ring, o = 0; o < n; o++) {
                                    var i = e++ % n;
                                    t.next(r[i]);
                                }
                            t.complete();
                        }),
                        e
                    );
                })(A),
                qu = (function () {
                    function t(t, e, n) {
                        (this.nextOrObserver = t), (this.error = e), (this.complete = n);
                    }
                    return (
                        (t.prototype.call = function (t, e) {
                            return e.subscribe(new Gu(t, this.nextOrObserver, this.error, this.complete));
                        }),
                        t
                    );
                })(),
                Gu = (function (t) {
                    function e(e, n, r, o) {
                        var i = t.call(this, e) || this;
                        return (
                            (i._tapNext = N),
                            (i._tapError = N),
                            (i._tapComplete = N),
                            (i._tapError = r || N),
                            (i._tapComplete = o || N),
                            p(n) ? ((i._context = i), (i._tapNext = n)) : n && ((i._context = n), (i._tapNext = n.next || N), (i._tapError = n.error || N), (i._tapComplete = n.complete || N)),
                            i
                        );
                    }
                    return (
                        o(e, t),
                        (e.prototype._next = function (t) {
                            try {
                                this._tapNext.call(this._context, t);
                            } catch (t) {
                                return void this.destination.error(t);
                            }
                            this.destination.next(t);
                        }),
                        (e.prototype._error = function (t) {
                            try {
                                this._tapError.call(this._context, t);
                            } catch (t) {
                                return void this.destination.error(t);
                            }
                            this.destination.error(t);
                        }),
                        (e.prototype._complete = function () {
                            try {
                                this._tapComplete.call(this._context);
                            } catch (t) {
                                return void this.destination.error(t);
                            }
                            return this.destination.complete();
                        }),
                        e
                    );
                })(A),
                Zu = function (t) {
                    return (
                        void 0 === t && (t = Wu),
                        (e = {
                            hasValue: !1,
                            next: function () {
                                this.hasValue = !0;
                            },
                            complete: function () {
                                if (!this.hasValue) throw t();
                            },
                        }),
                        function (t) {
                            return t.lift(new qu(e, void 0, void 0));
                        }
                    );
                    var e;
                };
            function Wu() {
                return new Du();
            }
            function Qu(t) {
                return (
                    void 0 === t && (t = null),
                    function (e) {
                        return e.lift(new Yu(t));
                    }
                );
            }
            var Yu = (function () {
                    function t(t) {
                        this.defaultValue = t;
                    }
                    return (
                        (t.prototype.call = function (t, e) {
                            return e.subscribe(new Ku(t, this.defaultValue));
                        }),
                        t
                    );
                })(),
                Ku = (function (t) {
                    function e(e, n) {
                        var r = t.call(this, e) || this;
                        return (r.defaultValue = n), (r.isEmpty = !0), r;
                    }
                    return (
                        o(e, t),
                        (e.prototype._next = function (t) {
                            (this.isEmpty = !1), this.destination.next(t);
                        }),
                        (e.prototype._complete = function () {
                            this.isEmpty && this.destination.next(this.defaultValue), this.destination.complete();
                        }),
                        e
                    );
                })(A);
            function Xu(t, e) {
                var n = arguments.length >= 2;
                return function (r) {
                    return r.pipe(
                        t
                            ? Vu(function (e, n) {
                                  return t(e, n, r);
                              })
                            : nt,
                        Fu(1),
                        n
                            ? Qu(e)
                            : Zu(function () {
                                  return new Du();
                              })
                    );
                };
            }
            function $u(t) {
                return function (e) {
                    var n = new Ju(t),
                        r = e.lift(n);
                    return (n.caught = r);
                };
            }
            var Ju = (function () {
                    function t(t) {
                        this.selector = t;
                    }
                    return (
                        (t.prototype.call = function (t, e) {
                            return e.subscribe(new tl(t, this.selector, this.caught));
                        }),
                        t
                    );
                })(),
                tl = (function (t) {
                    function e(e, n, r) {
                        var o = t.call(this, e) || this;
                        return (o.selector = n), (o.caught = r), o;
                    }
                    return (
                        o(e, t),
                        (e.prototype.error = function (e) {
                            if (!this.isStopped) {
                                var n = void 0;
                                try {
                                    n = this.selector(e, this.caught);
                                } catch (e) {
                                    return void t.prototype.error.call(this, e);
                                }
                                this._unsubscribeAndRecycle();
                                var r = new j(this, void 0, void 0);
                                this.add(r), Z(this, n, void 0, void 0, r);
                            }
                        }),
                        e
                    );
                })(W);
            function el(t, e) {
                return function (n) {
                    return n.lift(new nl(t, e, n));
                };
            }
            var nl = (function () {
                    function t(t, e, n) {
                        (this.predicate = t), (this.thisArg = e), (this.source = n);
                    }
                    return (
                        (t.prototype.call = function (t, e) {
                            return e.subscribe(new rl(t, this.predicate, this.thisArg, this.source));
                        }),
                        t
                    );
                })(),
                rl = (function (t) {
                    function e(e, n, r, o) {
                        var i = t.call(this, e) || this;
                        return (i.predicate = n), (i.thisArg = r), (i.source = o), (i.index = 0), (i.thisArg = r || i), i;
                    }
                    return (
                        o(e, t),
                        (e.prototype.notifyComplete = function (t) {
                            this.destination.next(t), this.destination.complete();
                        }),
                        (e.prototype._next = function (t) {
                            var e = !1;
                            try {
                                e = this.predicate.call(this.thisArg, t, this.index++, this.source);
                            } catch (t) {
                                return void this.destination.error(t);
                            }
                            e || this.notifyComplete(!1);
                        }),
                        (e.prototype._complete = function () {
                            this.notifyComplete(!0);
                        }),
                        e
                    );
                })(A),
                ol = (function () {
                    function t(t) {
                        if (((this.total = t), this.total < 0)) throw new Hu();
                    }
                    return (
                        (t.prototype.call = function (t, e) {
                            return e.subscribe(new il(t, this.total));
                        }),
                        t
                    );
                })(),
                il = (function (t) {
                    function e(e, n) {
                        var r = t.call(this, e) || this;
                        return (r.total = n), (r.count = 0), r;
                    }
                    return (
                        o(e, t),
                        (e.prototype._next = function (t) {
                            var e = this.total,
                                n = ++this.count;
                            n <= e && (this.destination.next(t), n === e && (this.destination.complete(), this.unsubscribe()));
                        }),
                        e
                    );
                })(A);
            function al(t, e) {
                var n = arguments.length >= 2;
                return function (r) {
                    return r.pipe(
                        t
                            ? Vu(function (e, n) {
                                  return t(e, n, r);
                              })
                            : nt,
                        (1,
                        function (t) {
                            return t.lift(new ol(1));
                        }),
                        n
                            ? Qu(e)
                            : Zu(function () {
                                  return new Du();
                              })
                    );
                };
            }
            function sl() {
                return rt(1);
            }
            function ul(t, e) {
                var n = !1;
                return (
                    arguments.length >= 2 && (n = !0),
                    function (r) {
                        return r.lift(new ll(t, e, n));
                    }
                );
            }
            var ll = (function () {
                    function t(t, e, n) {
                        void 0 === n && (n = !1), (this.accumulator = t), (this.seed = e), (this.hasSeed = n);
                    }
                    return (
                        (t.prototype.call = function (t, e) {
                            return e.subscribe(new cl(t, this.accumulator, this.seed, this.hasSeed));
                        }),
                        t
                    );
                })(),
                cl = (function (t) {
                    function e(e, n, r, o) {
                        var i = t.call(this, e) || this;
                        return (i.accumulator = n), (i._seed = r), (i.hasSeed = o), (i.index = 0), i;
                    }
                    return (
                        o(e, t),
                        Object.defineProperty(e.prototype, "seed", {
                            get: function () {
                                return this._seed;
                            },
                            set: function (t) {
                                (this.hasSeed = !0), (this._seed = t);
                            },
                            enumerable: !0,
                            configurable: !0,
                        }),
                        (e.prototype._next = function (t) {
                            if (this.hasSeed) return this._tryNext(t);
                            (this.seed = t), this.destination.next(t);
                        }),
                        (e.prototype._tryNext = function (t) {
                            var e,
                                n = this.index++;
                            try {
                                e = this.accumulator(this.seed, t, n);
                            } catch (t) {
                                this.destination.error(t);
                            }
                            (this.seed = e), this.destination.next(e);
                        }),
                        e
                    );
                })(A),
                hl = function () {},
                pl = new mt("Location Initialized"),
                fl = function () {},
                dl = new mt("appBaseHref"),
                vl = (function () {
                    function t(t) {
                        var n = this;
                        (this._subject = new en()), (this._platformStrategy = t);
                        var r = this._platformStrategy.getBaseHref();
                        (this._baseHref = e.stripTrailingSlash(yl(r))),
                            this._platformStrategy.onPopState(function (t) {
                                n._subject.emit({ url: n.path(!0), pop: !0, state: t.state, type: t.type });
                            });
                    }
                    var e;
                    return (
                        (e = t),
                        (t.prototype.path = function (t) {
                            return void 0 === t && (t = !1), this.normalize(this._platformStrategy.path(t));
                        }),
                        (t.prototype.isCurrentPathEqualTo = function (t, n) {
                            return void 0 === n && (n = ""), this.path() == this.normalize(t + e.normalizeQueryParams(n));
                        }),
                        (t.prototype.normalize = function (t) {
                            return e.stripTrailingSlash(
                                (function (t, e) {
                                    return t && e.startsWith(t) ? e.substring(t.length) : e;
                                })(this._baseHref, yl(t))
                            );
                        }),
                        (t.prototype.prepareExternalUrl = function (t) {
                            return t && "/" !== t[0] && (t = "/" + t), this._platformStrategy.prepareExternalUrl(t);
                        }),
                        (t.prototype.go = function (t, e, n) {
                            void 0 === e && (e = ""), void 0 === n && (n = null), this._platformStrategy.pushState(n, "", t, e);
                        }),
                        (t.prototype.replaceState = function (t, e, n) {
                            void 0 === e && (e = ""), void 0 === n && (n = null), this._platformStrategy.replaceState(n, "", t, e);
                        }),
                        (t.prototype.forward = function () {
                            this._platformStrategy.forward();
                        }),
                        (t.prototype.back = function () {
                            this._platformStrategy.back();
                        }),
                        (t.prototype.subscribe = function (t, e, n) {
                            return this._subject.subscribe({ next: t, error: e, complete: n });
                        }),
                        (t.normalizeQueryParams = function (t) {
                            return t && "?" !== t[0] ? "?" + t : t;
                        }),
                        (t.joinWithSlash = function (t, e) {
                            if (0 == t.length) return e;
                            if (0 == e.length) return t;
                            var n = 0;
                            return t.endsWith("/") && n++, e.startsWith("/") && n++, 2 == n ? t + e.substring(1) : 1 == n ? t + e : t + "/" + e;
                        }),
                        (t.stripTrailingSlash = function (t) {
                            var e = t.match(/#|\?|$/),
                                n = (e && e.index) || t.length;
                            return t.slice(0, n - ("/" === t[n - 1] ? 1 : 0)) + t.slice(n);
                        }),
                        t
                    );
                })();
            function yl(t) {
                return t.replace(/\/index.html$/, "");
            }
            var gl = (function (t) {
                    function e(e, n) {
                        var r = t.call(this) || this;
                        return (r._platformLocation = e), (r._baseHref = ""), null != n && (r._baseHref = n), r;
                    }
                    return (
                        o(e, t),
                        (e.prototype.onPopState = function (t) {
                            this._platformLocation.onPopState(t), this._platformLocation.onHashChange(t);
                        }),
                        (e.prototype.getBaseHref = function () {
                            return this._baseHref;
                        }),
                        (e.prototype.path = function (t) {
                            void 0 === t && (t = !1);
                            var e = this._platformLocation.hash;
                            return null == e && (e = "#"), e.length > 0 ? e.substring(1) : e;
                        }),
                        (e.prototype.prepareExternalUrl = function (t) {
                            var e = vl.joinWithSlash(this._baseHref, t);
                            return e.length > 0 ? "#" + e : e;
                        }),
                        (e.prototype.pushState = function (t, e, n, r) {
                            var o = this.prepareExternalUrl(n + vl.normalizeQueryParams(r));
                            0 == o.length && (o = this._platformLocation.pathname), this._platformLocation.pushState(t, e, o);
                        }),
                        (e.prototype.replaceState = function (t, e, n, r) {
                            var o = this.prepareExternalUrl(n + vl.normalizeQueryParams(r));
                            0 == o.length && (o = this._platformLocation.pathname), this._platformLocation.replaceState(t, e, o);
                        }),
                        (e.prototype.forward = function () {
                            this._platformLocation.forward();
                        }),
                        (e.prototype.back = function () {
                            this._platformLocation.back();
                        }),
                        a([s(1, Mt()), s(1, Ot(dl))], e)
                    );
                })(fl),
                ml = (function (t) {
                    function e(e, n) {
                        var r = t.call(this) || this;
                        if (((r._platformLocation = e), null == n && (n = r._platformLocation.getBaseHrefFromDOM()), null == n))
                            throw new Error("No base href set. Please provide a value for the APP_BASE_HREF token or add a base element to the document.");
                        return (r._baseHref = n), r;
                    }
                    return (
                        o(e, t),
                        (e.prototype.onPopState = function (t) {
                            this._platformLocation.onPopState(t), this._platformLocation.onHashChange(t);
                        }),
                        (e.prototype.getBaseHref = function () {
                            return this._baseHref;
                        }),
                        (e.prototype.prepareExternalUrl = function (t) {
                            return vl.joinWithSlash(this._baseHref, t);
                        }),
                        (e.prototype.path = function (t) {
                            void 0 === t && (t = !1);
                            var e = this._platformLocation.pathname + vl.normalizeQueryParams(this._platformLocation.search),
                                n = this._platformLocation.hash;
                            return n && t ? "" + e + n : e;
                        }),
                        (e.prototype.pushState = function (t, e, n, r) {
                            var o = this.prepareExternalUrl(n + vl.normalizeQueryParams(r));
                            this._platformLocation.pushState(t, e, o);
                        }),
                        (e.prototype.replaceState = function (t, e, n, r) {
                            var o = this.prepareExternalUrl(n + vl.normalizeQueryParams(r));
                            this._platformLocation.replaceState(t, e, o);
                        }),
                        (e.prototype.forward = function () {
                            this._platformLocation.forward();
                        }),
                        (e.prototype.back = function () {
                            this._platformLocation.back();
                        }),
                        a([s(1, Mt()), s(1, Ot(dl))], e)
                    );
                })(fl),
                bl = void 0,
                wl = [
                    "en",
                    [["a", "p"], ["AM", "PM"], bl],
                    [["AM", "PM"], bl, bl],
                    [
                        ["S", "M", "T", "W", "T", "F", "S"],
                        ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
                        ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
                        ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"],
                    ],
                    bl,
                    [
                        ["J", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"],
                        ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
                        ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
                    ],
                    bl,
                    [
                        ["B", "A"],
                        ["BC", "AD"],
                        ["Before Christ", "Anno Domini"],
                    ],
                    0,
                    [6, 0],
                    ["M/d/yy", "MMM d, y", "MMMM d, y", "EEEE, MMMM d, y"],
                    ["h:mm a", "h:mm:ss a", "h:mm:ss a z", "h:mm:ss a zzzz"],
                    ["{1}, {0}", bl, "{1} 'at' {0}", bl],
                    [".", ",", ";", "%", "+", "-", "E", "\xd7", "\u2030", "\u221e", "NaN", ":"],
                    ["#,##0.###", "#,##0%", "\xa4#,##0.00", "#E0"],
                    "$",
                    "US Dollar",
                    {},
                    function (t) {
                        var e = Math.floor(Math.abs(t)),
                            n = t.toString().replace(/^[^.]*\.?/, "").length;
                        return 1 === e && 0 === n ? 1 : 5;
                    },
                ],
                _l = {},
                Cl = (function (t) {
                    return (t[(t.Zero = 0)] = "Zero"), (t[(t.One = 1)] = "One"), (t[(t.Two = 2)] = "Two"), (t[(t.Few = 3)] = "Few"), (t[(t.Many = 4)] = "Many"), (t[(t.Other = 5)] = "Other"), t;
                })({}),
                El = (function (t) {
                    return (t[(t.Format = 0)] = "Format"), (t[(t.Standalone = 1)] = "Standalone"), t;
                })({}),
                Sl = (function (t) {
                    return (t[(t.Narrow = 0)] = "Narrow"), (t[(t.Abbreviated = 1)] = "Abbreviated"), (t[(t.Wide = 2)] = "Wide"), (t[(t.Short = 3)] = "Short"), t;
                })({}),
                xl = (function (t) {
                    return (t[(t.Short = 0)] = "Short"), (t[(t.Medium = 1)] = "Medium"), (t[(t.Long = 2)] = "Long"), (t[(t.Full = 3)] = "Full"), t;
                })({}),
                Tl = (function (t) {
                    return (
                        (t[(t.Decimal = 0)] = "Decimal"),
                        (t[(t.Group = 1)] = "Group"),
                        (t[(t.List = 2)] = "List"),
                        (t[(t.PercentSign = 3)] = "PercentSign"),
                        (t[(t.PlusSign = 4)] = "PlusSign"),
                        (t[(t.MinusSign = 5)] = "MinusSign"),
                        (t[(t.Exponential = 6)] = "Exponential"),
                        (t[(t.SuperscriptingExponent = 7)] = "SuperscriptingExponent"),
                        (t[(t.PerMille = 8)] = "PerMille"),
                        (t[(t[1 / 0] = 9)] = "Infinity"),
                        (t[(t.NaN = 10)] = "NaN"),
                        (t[(t.TimeSeparator = 11)] = "TimeSeparator"),
                        (t[(t.CurrencyDecimal = 12)] = "CurrencyDecimal"),
                        (t[(t.CurrencyGroup = 13)] = "CurrencyGroup"),
                        t
                    );
                })({});
            function kl(t, e) {
                return Rl(Ol(t)[10], e);
            }
            function Al(t, e) {
                return Rl(Ol(t)[11], e);
            }
            function Il(t, e) {
                return Rl(Ol(t)[12], e);
            }
            function Pl(t, e) {
                var n = Ol(t),
                    r = n[13][e];
                if (void 0 === r) {
                    if (e === Tl.CurrencyDecimal) return n[13][Tl.Decimal];
                    if (e === Tl.CurrencyGroup) return n[13][Tl.Group];
                }
                return r;
            }
            function Nl(t) {
                if (!t[19]) throw new Error('Missing extra locale data for the locale "' + t[0] + '". Use "registerLocaleData" to load new data. See the "I18n guide" on angular.io to know more.');
            }
            function Rl(t, e) {
                for (var n = e; n > -1; n--) if (void 0 !== t[n]) return t[n];
                throw new Error("Locale data API: locale data undefined");
            }
            function Dl(t) {
                var e = c(t.split(":"), 2);
                return { hours: +e[0], minutes: +e[1] };
            }
            function Ol(t) {
                var e = t.toLowerCase().replace(/_/g, "-"),
                    n = _l[e];
                if (n) return n;
                var r = e.split("-")[0];
                if ((n = _l[r])) return n;
                if ("en" === r) return wl;
                throw new Error('Missing locale data for the locale "' + t + '".');
            }
            var Ml = /^(\d{4})-?(\d\d)-?(\d\d)(?:T(\d\d)(?::?(\d\d)(?::?(\d\d)(?:\.(\d+))?)?)?(Z|([+-])(\d\d):?(\d\d))?)?$/,
                Vl = {},
                jl = /((?:[^GyMLwWdEabBhHmsSzZO']+)|(?:'(?:[^']|'')*')|(?:G{1,5}|y{1,4}|M{1,5}|L{1,5}|w{1,2}|W{1}|d{1,2}|E{1,6}|a{1,5}|b{1,5}|B{1,5}|h{1,2}|H{1,2}|m{1,2}|s{1,2}|S{1,3}|z{1,4}|Z{1,5}|O{1,4}))([\s\S]*)/,
                Ul = (function (t) {
                    return (t[(t.Short = 0)] = "Short"), (t[(t.ShortGMT = 1)] = "ShortGMT"), (t[(t.Long = 2)] = "Long"), (t[(t.Extended = 3)] = "Extended"), t;
                })({}),
                Ll = (function (t) {
                    return (
                        (t[(t.FullYear = 0)] = "FullYear"),
                        (t[(t.Month = 1)] = "Month"),
                        (t[(t.Date = 2)] = "Date"),
                        (t[(t.Hours = 3)] = "Hours"),
                        (t[(t.Minutes = 4)] = "Minutes"),
                        (t[(t.Seconds = 5)] = "Seconds"),
                        (t[(t.FractionalSeconds = 6)] = "FractionalSeconds"),
                        (t[(t.Day = 7)] = "Day"),
                        t
                    );
                })({}),
                Hl = (function (t) {
                    return (t[(t.DayPeriods = 0)] = "DayPeriods"), (t[(t.Days = 1)] = "Days"), (t[(t.Months = 2)] = "Months"), (t[(t.Eras = 3)] = "Eras"), t;
                })({});
            function Fl(t, e) {
                return (
                    e &&
                        (t = t.replace(/\{([^}]+)}/g, function (t, n) {
                            return null != e && n in e ? e[n] : t;
                        })),
                    t
                );
            }
            function zl(t, e, n, r, o) {
                void 0 === n && (n = "-");
                var i = "";
                (t < 0 || (o && t <= 0)) && (o ? (t = 1 - t) : ((t = -t), (i = n)));
                for (var a = String(t); a.length < e; ) a = "0" + a;
                return r && (a = a.substr(a.length - e)), i + a;
            }
            function Bl(t, e, n, r, o) {
                return (
                    void 0 === n && (n = 0),
                    void 0 === r && (r = !1),
                    void 0 === o && (o = !1),
                    function (i, a) {
                        var s,
                            u = (function (t, e) {
                                switch (t) {
                                    case Ll.FullYear:
                                        return e.getFullYear();
                                    case Ll.Month:
                                        return e.getMonth();
                                    case Ll.Date:
                                        return e.getDate();
                                    case Ll.Hours:
                                        return e.getHours();
                                    case Ll.Minutes:
                                        return e.getMinutes();
                                    case Ll.Seconds:
                                        return e.getSeconds();
                                    case Ll.FractionalSeconds:
                                        return e.getMilliseconds();
                                    case Ll.Day:
                                        return e.getDay();
                                    default:
                                        throw new Error('Unknown DateType value "' + t + '".');
                                }
                            })(t, i);
                        if (((n > 0 || u > -n) && (u += n), t === Ll.Hours)) 0 === u && -12 === n && (u = 12);
                        else if (t === Ll.FractionalSeconds) return (s = e), zl(u, 3).substr(0, s);
                        var l = Pl(a, Tl.MinusSign);
                        return zl(u, e, l, r, o);
                    }
                );
            }
            function ql(t, e, n, r) {
                return (
                    void 0 === n && (n = El.Format),
                    void 0 === r && (r = !1),
                    function (o, i) {
                        return (function (t, e, n, r, o, i) {
                            switch (n) {
                                case Hl.Months:
                                    return (function (t, e, n) {
                                        var r = Ol(t);
                                        return Rl(Rl([r[5], r[6]], e), n);
                                    })(e, o, r)[t.getMonth()];
                                case Hl.Days:
                                    return (function (t, e, n) {
                                        var r = Ol(t);
                                        return Rl(Rl([r[3], r[4]], e), n);
                                    })(e, o, r)[t.getDay()];
                                case Hl.DayPeriods:
                                    var a = t.getHours(),
                                        s = t.getMinutes();
                                    if (i) {
                                        var u,
                                            l = (function (t) {
                                                var e = Ol(t);
                                                return (
                                                    Nl(e),
                                                    (e[19][2] || []).map(function (t) {
                                                        return "string" == typeof t ? Dl(t) : [Dl(t[0]), Dl(t[1])];
                                                    })
                                                );
                                            })(e),
                                            c = (function (t, e, n) {
                                                var r = Ol(t);
                                                return Nl(r), Rl(Rl([r[19][0], r[19][1]], e) || [], n) || [];
                                            })(e, o, r);
                                        if (
                                            (l.forEach(function (t, e) {
                                                if (Array.isArray(t)) {
                                                    var n = t[0],
                                                        r = t[1],
                                                        o = r.hours;
                                                    a >= n.hours && s >= n.minutes && (a < o || (a === o && s < r.minutes)) && (u = c[e]);
                                                } else t.hours === a && t.minutes === s && (u = c[e]);
                                            }),
                                            u)
                                        )
                                            return u;
                                    }
                                    return (function (t, e, n) {
                                        var r = Ol(t);
                                        return Rl(Rl([r[1], r[2]], e), n);
                                    })(e, o, r)[a < 12 ? 0 : 1];
                                case Hl.Eras:
                                    return (function (t, e) {
                                        return Rl(Ol(t)[7], e);
                                    })(e, r)[t.getFullYear() <= 0 ? 0 : 1];
                                default:
                                    throw new Error("unexpected translation type " + n);
                            }
                        })(o, i, t, e, n, r);
                    }
                );
            }
            function Gl(t) {
                return function (e, n, r) {
                    var o = -1 * r,
                        i = Pl(n, Tl.MinusSign),
                        a = o > 0 ? Math.floor(o / 60) : Math.ceil(o / 60);
                    switch (t) {
                        case Ul.Short:
                            return (o >= 0 ? "+" : "") + zl(a, 2, i) + zl(Math.abs(o % 60), 2, i);
                        case Ul.ShortGMT:
                            return "GMT" + (o >= 0 ? "+" : "") + zl(a, 1, i);
                        case Ul.Long:
                            return "GMT" + (o >= 0 ? "+" : "") + zl(a, 2, i) + ":" + zl(Math.abs(o % 60), 2, i);
                        case Ul.Extended:
                            return 0 === r ? "Z" : (o >= 0 ? "+" : "") + zl(a, 2, i) + ":" + zl(Math.abs(o % 60), 2, i);
                        default:
                            throw new Error('Unknown zone width "' + t + '"');
                    }
                };
            }
            var Zl = 0,
                Wl = 4;
            function Ql(t, e) {
                return (
                    void 0 === e && (e = !1),
                    function (n, r) {
                        var o, i, a, s;
                        if (e) {
                            var u = new Date(n.getFullYear(), n.getMonth(), 1).getDay() - 1,
                                l = n.getDate();
                            o = 1 + Math.floor((l + u) / 7);
                        } else {
                            var c = ((a = n.getFullYear()), (s = new Date(a, Zl, 1).getDay()), new Date(a, 0, 1 + (s <= Wl ? Wl : Wl + 7) - s)),
                                h = ((i = n), new Date(i.getFullYear(), i.getMonth(), i.getDate() + (Wl - i.getDay()))).getTime() - c.getTime();
                            o = 1 + Math.round(h / 6048e5);
                        }
                        return zl(o, t, Pl(r, Tl.MinusSign));
                    }
                );
            }
            var Yl = {};
            function Kl(t, e) {
                t = t.replace(/:/g, "");
                var n = Date.parse("Jan 01, 1970 00:00:00 " + t) / 6e4;
                return isNaN(n) ? e : n;
            }
            function Xl(t) {
                return t instanceof Date && !isNaN(t.valueOf());
            }
            var $l = new mt("UseV4Plurals"),
                Jl = function () {},
                tc = (function (t) {
                    function e(e, n) {
                        var r = t.call(this) || this;
                        return (r.locale = e), (r.deprecatedPluralFn = n), r;
                    }
                    return (
                        o(e, t),
                        (e.prototype.getPluralCategory = function (t, e) {
                            switch (
                                this.deprecatedPluralFn
                                    ? this.deprecatedPluralFn(e || this.locale, t)
                                    : (function (t) {
                                          return Ol(t)[18];
                                      })(e || this.locale)(t)
                            ) {
                                case Cl.Zero:
                                    return "zero";
                                case Cl.One:
                                    return "one";
                                case Cl.Two:
                                    return "two";
                                case Cl.Few:
                                    return "few";
                                case Cl.Many:
                                    return "many";
                                default:
                                    return "other";
                            }
                        }),
                        a([s(0, Ot(lr)), s(1, Mt()), s(1, Ot($l))], e)
                    );
                })(Jl);
            function ec(t, e) {
                var n, r;
                e = encodeURIComponent(e);
                try {
                    for (var o = l(t.split(";")), i = o.next(); !i.done; i = o.next()) {
                        var a = i.value,
                            s = a.indexOf("="),
                            u = c(-1 == s ? [a, ""] : [a.slice(0, s), a.slice(s + 1)], 2),
                            h = u[1];
                        if (u[0].trim() === e) return decodeURIComponent(h);
                    }
                } catch (t) {
                    n = { error: t };
                } finally {
                    try {
                        i && !i.done && (r = o.return) && r.call(o);
                    } finally {
                        if (n) throw n.error;
                    }
                }
                return null;
            }
            var nc = (function () {
                    function t(t, e) {
                        (this._viewContainer = t), (this._context = new rc()), (this._thenTemplateRef = null), (this._elseTemplateRef = null), (this._thenViewRef = null), (this._elseViewRef = null), (this._thenTemplateRef = e);
                    }
                    return (
                        Object.defineProperty(t.prototype, "ngIf", {
                            set: function (t) {
                                (this._context.$implicit = this._context.ngIf = t), this._updateView();
                            },
                            enumerable: !0,
                            configurable: !0,
                        }),
                        Object.defineProperty(t.prototype, "ngIfThen", {
                            set: function (t) {
                                oc("ngIfThen", t), (this._thenTemplateRef = t), (this._thenViewRef = null), this._updateView();
                            },
                            enumerable: !0,
                            configurable: !0,
                        }),
                        Object.defineProperty(t.prototype, "ngIfElse", {
                            set: function (t) {
                                oc("ngIfElse", t), (this._elseTemplateRef = t), (this._elseViewRef = null), this._updateView();
                            },
                            enumerable: !0,
                            configurable: !0,
                        }),
                        (t.prototype._updateView = function () {
                            this._context.$implicit
                                ? this._thenViewRef || (this._viewContainer.clear(), (this._elseViewRef = null), this._thenTemplateRef && (this._thenViewRef = this._viewContainer.createEmbeddedView(this._thenTemplateRef, this._context)))
                                : this._elseViewRef || (this._viewContainer.clear(), (this._thenViewRef = null), this._elseTemplateRef && (this._elseViewRef = this._viewContainer.createEmbeddedView(this._elseTemplateRef, this._context)));
                        }),
                        t
                    );
                })(),
                rc = function () {
                    (this.$implicit = null), (this.ngIf = null);
                };
            function oc(t, e) {
                if (e && !e.createEmbeddedView) throw new Error(t + " must be a TemplateRef, but received '" + Nt(e) + "'.");
            }
            var ic = (function () {
                    function t(t) {
                        this.locale = t;
                    }
                    var e;
                    return (
                        (e = t),
                        (t.prototype.transform = function (t, n, r, o) {
                            if ((void 0 === n && (n = "mediumDate"), null == t || "" === t || t != t)) return null;
                            try {
                                return (function (t, e, n, r) {
                                    var o = (function (t) {
                                        if (Xl(t)) return t;
                                        if ("number" == typeof t && !isNaN(t)) return new Date(t);
                                        if ("string" == typeof t) {
                                            t = t.trim();
                                            var e,
                                                n = parseFloat(t);
                                            if (!isNaN(t - n)) return new Date(n);
                                            if (/^(\d{4}-\d{1,2}-\d{1,2})$/.test(t)) {
                                                var r = c(
                                                    t.split("-").map(function (t) {
                                                        return +t;
                                                    }),
                                                    3
                                                );
                                                return new Date(r[0], r[1] - 1, r[2]);
                                            }
                                            if ((e = t.match(Ml)))
                                                return (function (t) {
                                                    var e = new Date(0),
                                                        n = 0,
                                                        r = 0,
                                                        o = t[8] ? e.setUTCFullYear : e.setFullYear,
                                                        i = t[8] ? e.setUTCHours : e.setHours;
                                                    t[9] && ((n = Number(t[9] + t[10])), (r = Number(t[9] + t[11]))), o.call(e, Number(t[1]), Number(t[2]) - 1, Number(t[3]));
                                                    var a = Number(t[4] || 0) - n,
                                                        s = Number(t[5] || 0) - r,
                                                        u = Number(t[6] || 0),
                                                        l = Math.round(1e3 * parseFloat("0." + (t[7] || 0)));
                                                    return i.call(e, a, s, u, l), e;
                                                })(e);
                                        }
                                        var o = new Date(t);
                                        if (!Xl(o)) throw new Error('Unable to convert "' + t + '" into a date');
                                        return o;
                                    })(t);
                                    e =
                                        (function t(e, n) {
                                            var r = (function (t) {
                                                return Ol(t)[0];
                                            })(e);
                                            if (((Vl[r] = Vl[r] || {}), Vl[r][n])) return Vl[r][n];
                                            var o = "";
                                            switch (n) {
                                                case "shortDate":
                                                    o = kl(e, xl.Short);
                                                    break;
                                                case "mediumDate":
                                                    o = kl(e, xl.Medium);
                                                    break;
                                                case "longDate":
                                                    o = kl(e, xl.Long);
                                                    break;
                                                case "fullDate":
                                                    o = kl(e, xl.Full);
                                                    break;
                                                case "shortTime":
                                                    o = Al(e, xl.Short);
                                                    break;
                                                case "mediumTime":
                                                    o = Al(e, xl.Medium);
                                                    break;
                                                case "longTime":
                                                    o = Al(e, xl.Long);
                                                    break;
                                                case "fullTime":
                                                    o = Al(e, xl.Full);
                                                    break;
                                                case "short":
                                                    var i = t(e, "shortTime"),
                                                        a = t(e, "shortDate");
                                                    o = Fl(Il(e, xl.Short), [i, a]);
                                                    break;
                                                case "medium":
                                                    var s = t(e, "mediumTime"),
                                                        u = t(e, "mediumDate");
                                                    o = Fl(Il(e, xl.Medium), [s, u]);
                                                    break;
                                                case "long":
                                                    var l = t(e, "longTime"),
                                                        c = t(e, "longDate");
                                                    o = Fl(Il(e, xl.Long), [l, c]);
                                                    break;
                                                case "full":
                                                    var h = t(e, "fullTime"),
                                                        p = t(e, "fullDate");
                                                    o = Fl(Il(e, xl.Full), [h, p]);
                                            }
                                            return o && (Vl[r][n] = o), o;
                                        })(n, e) || e;
                                    for (var i, a = []; e; ) {
                                        if (!(i = jl.exec(e))) {
                                            a.push(e);
                                            break;
                                        }
                                        var s = (a = a.concat(i.slice(1))).pop();
                                        if (!s) break;
                                        e = s;
                                    }
                                    var u = o.getTimezoneOffset();
                                    r &&
                                        ((u = Kl(r, u)),
                                        (o = (function (t, e, n) {
                                            var r = t.getTimezoneOffset();
                                            return (function (t, e) {
                                                return (t = new Date(t.getTime())).setMinutes(t.getMinutes() + e), t;
                                            })(t, -1 * (Kl(e, r) - r));
                                        })(o, r)));
                                    var l = "";
                                    return (
                                        a.forEach(function (t) {
                                            var e = (function (t) {
                                                if (Yl[t]) return Yl[t];
                                                var e;
                                                switch (t) {
                                                    case "G":
                                                    case "GG":
                                                    case "GGG":
                                                        e = ql(Hl.Eras, Sl.Abbreviated);
                                                        break;
                                                    case "GGGG":
                                                        e = ql(Hl.Eras, Sl.Wide);
                                                        break;
                                                    case "GGGGG":
                                                        e = ql(Hl.Eras, Sl.Narrow);
                                                        break;
                                                    case "y":
                                                        e = Bl(Ll.FullYear, 1, 0, !1, !0);
                                                        break;
                                                    case "yy":
                                                        e = Bl(Ll.FullYear, 2, 0, !0, !0);
                                                        break;
                                                    case "yyy":
                                                        e = Bl(Ll.FullYear, 3, 0, !1, !0);
                                                        break;
                                                    case "yyyy":
                                                        e = Bl(Ll.FullYear, 4, 0, !1, !0);
                                                        break;
                                                    case "M":
                                                    case "L":
                                                        e = Bl(Ll.Month, 1, 1);
                                                        break;
                                                    case "MM":
                                                    case "LL":
                                                        e = Bl(Ll.Month, 2, 1);
                                                        break;
                                                    case "MMM":
                                                        e = ql(Hl.Months, Sl.Abbreviated);
                                                        break;
                                                    case "MMMM":
                                                        e = ql(Hl.Months, Sl.Wide);
                                                        break;
                                                    case "MMMMM":
                                                        e = ql(Hl.Months, Sl.Narrow);
                                                        break;
                                                    case "LLL":
                                                        e = ql(Hl.Months, Sl.Abbreviated, El.Standalone);
                                                        break;
                                                    case "LLLL":
                                                        e = ql(Hl.Months, Sl.Wide, El.Standalone);
                                                        break;
                                                    case "LLLLL":
                                                        e = ql(Hl.Months, Sl.Narrow, El.Standalone);
                                                        break;
                                                    case "w":
                                                        e = Ql(1);
                                                        break;
                                                    case "ww":
                                                        e = Ql(2);
                                                        break;
                                                    case "W":
                                                        e = Ql(1, !0);
                                                        break;
                                                    case "d":
                                                        e = Bl(Ll.Date, 1);
                                                        break;
                                                    case "dd":
                                                        e = Bl(Ll.Date, 2);
                                                        break;
                                                    case "E":
                                                    case "EE":
                                                    case "EEE":
                                                        e = ql(Hl.Days, Sl.Abbreviated);
                                                        break;
                                                    case "EEEE":
                                                        e = ql(Hl.Days, Sl.Wide);
                                                        break;
                                                    case "EEEEE":
                                                        e = ql(Hl.Days, Sl.Narrow);
                                                        break;
                                                    case "EEEEEE":
                                                        e = ql(Hl.Days, Sl.Short);
                                                        break;
                                                    case "a":
                                                    case "aa":
                                                    case "aaa":
                                                        e = ql(Hl.DayPeriods, Sl.Abbreviated);
                                                        break;
                                                    case "aaaa":
                                                        e = ql(Hl.DayPeriods, Sl.Wide);
                                                        break;
                                                    case "aaaaa":
                                                        e = ql(Hl.DayPeriods, Sl.Narrow);
                                                        break;
                                                    case "b":
                                                    case "bb":
                                                    case "bbb":
                                                        e = ql(Hl.DayPeriods, Sl.Abbreviated, El.Standalone, !0);
                                                        break;
                                                    case "bbbb":
                                                        e = ql(Hl.DayPeriods, Sl.Wide, El.Standalone, !0);
                                                        break;
                                                    case "bbbbb":
                                                        e = ql(Hl.DayPeriods, Sl.Narrow, El.Standalone, !0);
                                                        break;
                                                    case "B":
                                                    case "BB":
                                                    case "BBB":
                                                        e = ql(Hl.DayPeriods, Sl.Abbreviated, El.Format, !0);
                                                        break;
                                                    case "BBBB":
                                                        e = ql(Hl.DayPeriods, Sl.Wide, El.Format, !0);
                                                        break;
                                                    case "BBBBB":
                                                        e = ql(Hl.DayPeriods, Sl.Narrow, El.Format, !0);
                                                        break;
                                                    case "h":
                                                        e = Bl(Ll.Hours, 1, -12);
                                                        break;
                                                    case "hh":
                                                        e = Bl(Ll.Hours, 2, -12);
                                                        break;
                                                    case "H":
                                                        e = Bl(Ll.Hours, 1);
                                                        break;
                                                    case "HH":
                                                        e = Bl(Ll.Hours, 2);
                                                        break;
                                                    case "m":
                                                        e = Bl(Ll.Minutes, 1);
                                                        break;
                                                    case "mm":
                                                        e = Bl(Ll.Minutes, 2);
                                                        break;
                                                    case "s":
                                                        e = Bl(Ll.Seconds, 1);
                                                        break;
                                                    case "ss":
                                                        e = Bl(Ll.Seconds, 2);
                                                        break;
                                                    case "S":
                                                        e = Bl(Ll.FractionalSeconds, 1);
                                                        break;
                                                    case "SS":
                                                        e = Bl(Ll.FractionalSeconds, 2);
                                                        break;
                                                    case "SSS":
                                                        e = Bl(Ll.FractionalSeconds, 3);
                                                        break;
                                                    case "Z":
                                                    case "ZZ":
                                                    case "ZZZ":
                                                        e = Gl(Ul.Short);
                                                        break;
                                                    case "ZZZZZ":
                                                        e = Gl(Ul.Extended);
                                                        break;
                                                    case "O":
                                                    case "OO":
                                                    case "OOO":
                                                    case "z":
                                                    case "zz":
                                                    case "zzz":
                                                        e = Gl(Ul.ShortGMT);
                                                        break;
                                                    case "OOOO":
                                                    case "ZZZZ":
                                                    case "zzzz":
                                                        e = Gl(Ul.Long);
                                                        break;
                                                    default:
                                                        return null;
                                                }
                                                return (Yl[t] = e), e;
                                            })(t);
                                            l += e ? e(o, n, u) : "''" === t ? "'" : t.replace(/(^'|'$)/g, "").replace(/''/g, "'");
                                        }),
                                        l
                                    );
                                })(t, n, o || this.locale, r);
                            } catch (t) {
                                throw Error("InvalidPipeArgument: '" + t.message + "' for pipe '" + Nt(e) + "'");
                            }
                        }),
                        (e = a([s(0, Ot(lr))], t))
                    );
                })(),
                ac = function () {},
                sc = new mt("DocumentToken"),
                uc = "server",
                lc = (function () {
                    function t() {}
                    return (
                        (t.ngInjectableDef = gt({
                            providedIn: "root",
                            factory: function () {
                                return new cc(ie(sc), window);
                            },
                        })),
                        t
                    );
                })(),
                cc = (function () {
                    function t(t, e) {
                        (this.document = t),
                            (this.window = e),
                            (this.offset = function () {
                                return [0, 0];
                            });
                    }
                    return (
                        (t.prototype.setOffset = function (t) {
                            this.offset = Array.isArray(t)
                                ? function () {
                                      return t;
                                  }
                                : t;
                        }),
                        (t.prototype.getScrollPosition = function () {
                            return this.supportScrollRestoration() ? [this.window.scrollX, this.window.scrollY] : [0, 0];
                        }),
                        (t.prototype.scrollToPosition = function (t) {
                            this.supportScrollRestoration() && this.window.scrollTo(t[0], t[1]);
                        }),
                        (t.prototype.scrollToAnchor = function (t) {
                            if (this.supportScrollRestoration()) {
                                var e = this.document.querySelector("#" + t);
                                if (e) return void this.scrollToElement(e);
                                var n = this.document.querySelector("[name='" + t + "']");
                                if (n) return void this.scrollToElement(n);
                            }
                        }),
                        (t.prototype.setHistoryScrollRestoration = function (t) {
                            if (this.supportScrollRestoration()) {
                                var e = this.window.history;
                                e && e.scrollRestoration && (e.scrollRestoration = t);
                            }
                        }),
                        (t.prototype.scrollToElement = function (t) {
                            var e = t.getBoundingClientRect(),
                                n = e.left + this.window.pageXOffset,
                                r = e.top + this.window.pageYOffset,
                                o = this.offset();
                            this.window.scrollTo(n - o[0], r - o[1]);
                        }),
                        (t.prototype.supportScrollRestoration = function () {
                            try {
                                return !!this.window && !!this.window.scrollTo;
                            } catch (t) {
                                return !1;
                            }
                        }),
                        t
                    );
                })(),
                hc = null;
            function pc() {
                return hc;
            }
            var fc,
                dc = { class: "className", innerHtml: "innerHTML", readonly: "readOnly", tabindex: "tabIndex" },
                vc = {
                    "\b": "Backspace",
                    "\t": "Tab",
                    "\x7f": "Delete",
                    "\x1b": "Escape",
                    Del: "Delete",
                    Esc: "Escape",
                    Left: "ArrowLeft",
                    Right: "ArrowRight",
                    Up: "ArrowUp",
                    Down: "ArrowDown",
                    Menu: "ContextMenu",
                    Scroll: "ScrollLock",
                    Win: "OS",
                },
                yc = { A: "1", B: "2", C: "3", D: "4", E: "5", F: "6", G: "7", H: "8", I: "9", J: "*", K: "+", M: "-", N: ".", O: "/", "`": "0", "\x90": "NumLock" };
            xt.Node &&
                (fc =
                    xt.Node.prototype.contains ||
                    function (t) {
                        return !!(16 & this.compareDocumentPosition(t));
                    });
            var gc,
                mc = (function (t) {
                    function e() {
                        return (null !== t && t.apply(this, arguments)) || this;
                    }
                    return (
                        o(e, t),
                        (e.prototype.parse = function (t) {
                            throw new Error("parse not implemented");
                        }),
                        (e.makeCurrent = function () {
                            var t;
                            (t = new e()), hc || (hc = t);
                        }),
                        (e.prototype.hasProperty = function (t, e) {
                            return e in t;
                        }),
                        (e.prototype.setProperty = function (t, e, n) {
                            t[e] = n;
                        }),
                        (e.prototype.getProperty = function (t, e) {
                            return t[e];
                        }),
                        (e.prototype.invoke = function (t, e, n) {
                            var r;
                            (r = t)[e].apply(r, h(n));
                        }),
                        (e.prototype.logError = function (t) {
                            window.console && (console.error ? console.error(t) : console.log(t));
                        }),
                        (e.prototype.log = function (t) {
                            window.console && window.console.log && window.console.log(t);
                        }),
                        (e.prototype.logGroup = function (t) {
                            window.console && window.console.group && window.console.group(t);
                        }),
                        (e.prototype.logGroupEnd = function () {
                            window.console && window.console.groupEnd && window.console.groupEnd();
                        }),
                        Object.defineProperty(e.prototype, "attrToPropMap", {
                            get: function () {
                                return dc;
                            },
                            enumerable: !0,
                            configurable: !0,
                        }),
                        (e.prototype.contains = function (t, e) {
                            return fc.call(t, e);
                        }),
                        (e.prototype.querySelector = function (t, e) {
                            return t.querySelector(e);
                        }),
                        (e.prototype.querySelectorAll = function (t, e) {
                            return t.querySelectorAll(e);
                        }),
                        (e.prototype.on = function (t, e, n) {
                            t.addEventListener(e, n, !1);
                        }),
                        (e.prototype.onAndCancel = function (t, e, n) {
                            return (
                                t.addEventListener(e, n, !1),
                                function () {
                                    t.removeEventListener(e, n, !1);
                                }
                            );
                        }),
                        (e.prototype.dispatchEvent = function (t, e) {
                            t.dispatchEvent(e);
                        }),
                        (e.prototype.createMouseEvent = function (t) {
                            var e = this.getDefaultDocument().createEvent("MouseEvent");
                            return e.initEvent(t, !0, !0), e;
                        }),
                        (e.prototype.createEvent = function (t) {
                            var e = this.getDefaultDocument().createEvent("Event");
                            return e.initEvent(t, !0, !0), e;
                        }),
                        (e.prototype.preventDefault = function (t) {
                            t.preventDefault(), (t.returnValue = !1);
                        }),
                        (e.prototype.isPrevented = function (t) {
                            return t.defaultPrevented || (null != t.returnValue && !t.returnValue);
                        }),
                        (e.prototype.getInnerHTML = function (t) {
                            return t.innerHTML;
                        }),
                        (e.prototype.getTemplateContent = function (t) {
                            return "content" in t && this.isTemplateElement(t) ? t.content : null;
                        }),
                        (e.prototype.getOuterHTML = function (t) {
                            return t.outerHTML;
                        }),
                        (e.prototype.nodeName = function (t) {
                            return t.nodeName;
                        }),
                        (e.prototype.nodeValue = function (t) {
                            return t.nodeValue;
                        }),
                        (e.prototype.type = function (t) {
                            return t.type;
                        }),
                        (e.prototype.content = function (t) {
                            return this.hasProperty(t, "content") ? t.content : t;
                        }),
                        (e.prototype.firstChild = function (t) {
                            return t.firstChild;
                        }),
                        (e.prototype.nextSibling = function (t) {
                            return t.nextSibling;
                        }),
                        (e.prototype.parentElement = function (t) {
                            return t.parentNode;
                        }),
                        (e.prototype.childNodes = function (t) {
                            return t.childNodes;
                        }),
                        (e.prototype.childNodesAsList = function (t) {
                            for (var e = t.childNodes, n = new Array(e.length), r = 0; r < e.length; r++) n[r] = e[r];
                            return n;
                        }),
                        (e.prototype.clearNodes = function (t) {
                            for (; t.firstChild; ) t.removeChild(t.firstChild);
                        }),
                        (e.prototype.appendChild = function (t, e) {
                            t.appendChild(e);
                        }),
                        (e.prototype.removeChild = function (t, e) {
                            t.removeChild(e);
                        }),
                        (e.prototype.replaceChild = function (t, e, n) {
                            t.replaceChild(e, n);
                        }),
                        (e.prototype.remove = function (t) {
                            return t.parentNode && t.parentNode.removeChild(t), t;
                        }),
                        (e.prototype.insertBefore = function (t, e, n) {
                            t.insertBefore(n, e);
                        }),
                        (e.prototype.insertAllBefore = function (t, e, n) {
                            n.forEach(function (n) {
                                return t.insertBefore(n, e);
                            });
                        }),
                        (e.prototype.insertAfter = function (t, e, n) {
                            t.insertBefore(n, e.nextSibling);
                        }),
                        (e.prototype.setInnerHTML = function (t, e) {
                            t.innerHTML = e;
                        }),
                        (e.prototype.getText = function (t) {
                            return t.textContent;
                        }),
                        (e.prototype.setText = function (t, e) {
                            t.textContent = e;
                        }),
                        (e.prototype.getValue = function (t) {
                            return t.value;
                        }),
                        (e.prototype.setValue = function (t, e) {
                            t.value = e;
                        }),
                        (e.prototype.getChecked = function (t) {
                            return t.checked;
                        }),
                        (e.prototype.setChecked = function (t, e) {
                            t.checked = e;
                        }),
                        (e.prototype.createComment = function (t) {
                            return this.getDefaultDocument().createComment(t);
                        }),
                        (e.prototype.createTemplate = function (t) {
                            var e = this.getDefaultDocument().createElement("template");
                            return (e.innerHTML = t), e;
                        }),
                        (e.prototype.createElement = function (t, e) {
                            return (e = e || this.getDefaultDocument()).createElement(t);
                        }),
                        (e.prototype.createElementNS = function (t, e, n) {
                            return (n = n || this.getDefaultDocument()).createElementNS(t, e);
                        }),
                        (e.prototype.createTextNode = function (t, e) {
                            return (e = e || this.getDefaultDocument()).createTextNode(t);
                        }),
                        (e.prototype.createScriptTag = function (t, e, n) {
                            var r = (n = n || this.getDefaultDocument()).createElement("SCRIPT");
                            return r.setAttribute(t, e), r;
                        }),
                        (e.prototype.createStyleElement = function (t, e) {
                            var n = (e = e || this.getDefaultDocument()).createElement("style");
                            return this.appendChild(n, this.createTextNode(t, e)), n;
                        }),
                        (e.prototype.createShadowRoot = function (t) {
                            return t.createShadowRoot();
                        }),
                        (e.prototype.getShadowRoot = function (t) {
                            return t.shadowRoot;
                        }),
                        (e.prototype.getHost = function (t) {
                            return t.host;
                        }),
                        (e.prototype.clone = function (t) {
                            return t.cloneNode(!0);
                        }),
                        (e.prototype.getElementsByClassName = function (t, e) {
                            return t.getElementsByClassName(e);
                        }),
                        (e.prototype.getElementsByTagName = function (t, e) {
                            return t.getElementsByTagName(e);
                        }),
                        (e.prototype.classList = function (t) {
                            return Array.prototype.slice.call(t.classList, 0);
                        }),
                        (e.prototype.addClass = function (t, e) {
                            t.classList.add(e);
                        }),
                        (e.prototype.removeClass = function (t, e) {
                            t.classList.remove(e);
                        }),
                        (e.prototype.hasClass = function (t, e) {
                            return t.classList.contains(e);
                        }),
                        (e.prototype.setStyle = function (t, e, n) {
                            t.style[e] = n;
                        }),
                        (e.prototype.removeStyle = function (t, e) {
                            t.style[e] = "";
                        }),
                        (e.prototype.getStyle = function (t, e) {
                            return t.style[e];
                        }),
                        (e.prototype.hasStyle = function (t, e, n) {
                            var r = this.getStyle(t, e) || "";
                            return n ? r == n : r.length > 0;
                        }),
                        (e.prototype.tagName = function (t) {
                            return t.tagName;
                        }),
                        (e.prototype.attributeMap = function (t) {
                            for (var e = new Map(), n = t.attributes, r = 0; r < n.length; r++) {
                                var o = n.item(r);
                                e.set(o.name, o.value);
                            }
                            return e;
                        }),
                        (e.prototype.hasAttribute = function (t, e) {
                            return t.hasAttribute(e);
                        }),
                        (e.prototype.hasAttributeNS = function (t, e, n) {
                            return t.hasAttributeNS(e, n);
                        }),
                        (e.prototype.getAttribute = function (t, e) {
                            return t.getAttribute(e);
                        }),
                        (e.prototype.getAttributeNS = function (t, e, n) {
                            return t.getAttributeNS(e, n);
                        }),
                        (e.prototype.setAttribute = function (t, e, n) {
                            t.setAttribute(e, n);
                        }),
                        (e.prototype.setAttributeNS = function (t, e, n, r) {
                            t.setAttributeNS(e, n, r);
                        }),
                        (e.prototype.removeAttribute = function (t, e) {
                            t.removeAttribute(e);
                        }),
                        (e.prototype.removeAttributeNS = function (t, e, n) {
                            t.removeAttributeNS(e, n);
                        }),
                        (e.prototype.templateAwareRoot = function (t) {
                            return this.isTemplateElement(t) ? this.content(t) : t;
                        }),
                        (e.prototype.createHtmlDocument = function () {
                            return document.implementation.createHTMLDocument("fakeTitle");
                        }),
                        (e.prototype.getDefaultDocument = function () {
                            return document;
                        }),
                        (e.prototype.getBoundingClientRect = function (t) {
                            try {
                                return t.getBoundingClientRect();
                            } catch (t) {
                                return { top: 0, bottom: 0, left: 0, right: 0, width: 0, height: 0 };
                            }
                        }),
                        (e.prototype.getTitle = function (t) {
                            return t.title;
                        }),
                        (e.prototype.setTitle = function (t, e) {
                            t.title = e || "";
                        }),
                        (e.prototype.elementMatches = function (t, e) {
                            return !!this.isElementNode(t) && ((t.matches && t.matches(e)) || (t.msMatchesSelector && t.msMatchesSelector(e)) || (t.webkitMatchesSelector && t.webkitMatchesSelector(e)));
                        }),
                        (e.prototype.isTemplateElement = function (t) {
                            return this.isElementNode(t) && "TEMPLATE" === t.nodeName;
                        }),
                        (e.prototype.isTextNode = function (t) {
                            return t.nodeType === Node.TEXT_NODE;
                        }),
                        (e.prototype.isCommentNode = function (t) {
                            return t.nodeType === Node.COMMENT_NODE;
                        }),
                        (e.prototype.isElementNode = function (t) {
                            return t.nodeType === Node.ELEMENT_NODE;
                        }),
                        (e.prototype.hasShadowRoot = function (t) {
                            return null != t.shadowRoot && t instanceof HTMLElement;
                        }),
                        (e.prototype.isShadowRoot = function (t) {
                            return t instanceof DocumentFragment;
                        }),
                        (e.prototype.importIntoDoc = function (t) {
                            return document.importNode(this.templateAwareRoot(t), !0);
                        }),
                        (e.prototype.adoptNode = function (t) {
                            return document.adoptNode(t);
                        }),
                        (e.prototype.getHref = function (t) {
                            return t.getAttribute("href");
                        }),
                        (e.prototype.getEventKey = function (t) {
                            var e = t.key;
                            if (null == e) {
                                if (null == (e = t.keyIdentifier)) return "Unidentified";
                                e.startsWith("U+") && ((e = String.fromCharCode(parseInt(e.substring(2), 16))), 3 === t.location && yc.hasOwnProperty(e) && (e = yc[e]));
                            }
                            return vc[e] || e;
                        }),
                        (e.prototype.getGlobalEventTarget = function (t, e) {
                            return "window" === e ? window : "document" === e ? t : "body" === e ? t.body : null;
                        }),
                        (e.prototype.getHistory = function () {
                            return window.history;
                        }),
                        (e.prototype.getLocation = function () {
                            return window.location;
                        }),
                        (e.prototype.getBaseHref = function (t) {
                            var e,
                                n = bc || (bc = document.querySelector("base")) ? bc.getAttribute("href") : null;
                            return null == n ? null : ((e = n), gc || (gc = document.createElement("a")), gc.setAttribute("href", e), "/" === gc.pathname.charAt(0) ? gc.pathname : "/" + gc.pathname);
                        }),
                        (e.prototype.resetBaseElement = function () {
                            bc = null;
                        }),
                        (e.prototype.getUserAgent = function () {
                            return window.navigator.userAgent;
                        }),
                        (e.prototype.setData = function (t, e, n) {
                            this.setAttribute(t, "data-" + e, n);
                        }),
                        (e.prototype.getData = function (t, e) {
                            return this.getAttribute(t, "data-" + e);
                        }),
                        (e.prototype.getComputedStyle = function (t) {
                            return getComputedStyle(t);
                        }),
                        (e.prototype.supportsWebAnimation = function () {
                            return "function" == typeof Element.prototype.animate;
                        }),
                        (e.prototype.performanceNow = function () {
                            return window.performance && window.performance.now ? window.performance.now() : new Date().getTime();
                        }),
                        (e.prototype.supportsCookies = function () {
                            return !0;
                        }),
                        (e.prototype.getCookie = function (t) {
                            return ec(document.cookie, t);
                        }),
                        (e.prototype.setCookie = function (t, e) {
                            document.cookie = encodeURIComponent(t) + "=" + encodeURIComponent(e);
                        }),
                        e
                    );
                })(
                    (function (t) {
                        function e() {
                            var e = t.call(this) || this;
                            (e._animationPrefix = null), (e._transitionEnd = null);
                            try {
                                var n = e.createElement("div", document);
                                if (null != e.getStyle(n, "animationName")) e._animationPrefix = "";
                                else
                                    for (var r = ["Webkit", "Moz", "O", "ms"], o = 0; o < r.length; o++)
                                        if (null != e.getStyle(n, r[o] + "AnimationName")) {
                                            e._animationPrefix = "-" + r[o].toLowerCase() + "-";
                                            break;
                                        }
                                var i = { WebkitTransition: "webkitTransitionEnd", MozTransition: "transitionend", OTransition: "oTransitionEnd otransitionend", transition: "transitionend" };
                                Object.keys(i).forEach(function (t) {
                                    null != e.getStyle(n, t) && (e._transitionEnd = i[t]);
                                });
                            } catch (t) {
                                (e._animationPrefix = null), (e._transitionEnd = null);
                            }
                            return e;
                        }
                        return (
                            o(e, t),
                            (e.prototype.getDistributedNodes = function (t) {
                                return t.getDistributedNodes();
                            }),
                            (e.prototype.resolveAndSetHref = function (t, e, n) {
                                t.href = null == n ? e : e + "/../" + n;
                            }),
                            (e.prototype.supportsDOMEvents = function () {
                                return !0;
                            }),
                            (e.prototype.supportsNativeShadowDOM = function () {
                                return "function" == typeof document.body.createShadowRoot;
                            }),
                            (e.prototype.getAnimationPrefix = function () {
                                return this._animationPrefix ? this._animationPrefix : "";
                            }),
                            (e.prototype.getTransitionEnd = function () {
                                return this._transitionEnd ? this._transitionEnd : "";
                            }),
                            (e.prototype.supportsAnimation = function () {
                                return null != this._animationPrefix && null != this._transitionEnd;
                            }),
                            e
                        );
                    })(
                        (function () {
                            function t() {
                                this.resourceLoaderType = null;
                            }
                            return (
                                Object.defineProperty(t.prototype, "attrToPropMap", {
                                    get: function () {
                                        return this._attrToPropMap;
                                    },
                                    set: function (t) {
                                        this._attrToPropMap = t;
                                    },
                                    enumerable: !0,
                                    configurable: !0,
                                }),
                                t
                            );
                        })()
                    )
                ),
                bc = null,
                wc = sc;
            function _c() {
                return !!window.history.pushState;
            }
            var Cc = (function (t) {
                    function e(e) {
                        var n = t.call(this) || this;
                        return (n._doc = e), n._init(), n;
                    }
                    return (
                        o(e, t),
                        (e.prototype._init = function () {
                            (this.location = pc().getLocation()), (this._history = pc().getHistory());
                        }),
                        (e.prototype.getBaseHrefFromDOM = function () {
                            return pc().getBaseHref(this._doc);
                        }),
                        (e.prototype.onPopState = function (t) {
                            pc().getGlobalEventTarget(this._doc, "window").addEventListener("popstate", t, !1);
                        }),
                        (e.prototype.onHashChange = function (t) {
                            pc().getGlobalEventTarget(this._doc, "window").addEventListener("hashchange", t, !1);
                        }),
                        Object.defineProperty(e.prototype, "pathname", {
                            get: function () {
                                return this.location.pathname;
                            },
                            set: function (t) {
                                this.location.pathname = t;
                            },
                            enumerable: !0,
                            configurable: !0,
                        }),
                        Object.defineProperty(e.prototype, "search", {
                            get: function () {
                                return this.location.search;
                            },
                            enumerable: !0,
                            configurable: !0,
                        }),
                        Object.defineProperty(e.prototype, "hash", {
                            get: function () {
                                return this.location.hash;
                            },
                            enumerable: !0,
                            configurable: !0,
                        }),
                        (e.prototype.pushState = function (t, e, n) {
                            _c() ? this._history.pushState(t, e, n) : (this.location.hash = n);
                        }),
                        (e.prototype.replaceState = function (t, e, n) {
                            _c() ? this._history.replaceState(t, e, n) : (this.location.hash = n);
                        }),
                        (e.prototype.forward = function () {
                            this._history.forward();
                        }),
                        (e.prototype.back = function () {
                            this._history.back();
                        }),
                        a([s(0, Ot(wc)), u("design:paramtypes", [Object])], e)
                    );
                })(hl),
                Ec = new mt("TRANSITION_ID");
            function Sc(t, e, n) {
                return function () {
                    n.get(Pe).donePromise.then(function () {
                        var n = pc();
                        Array.prototype.slice
                            .apply(n.querySelectorAll(e, "style[ng-transition]"))
                            .filter(function (e) {
                                return n.getAttribute(e, "ng-transition") === t;
                            })
                            .forEach(function (t) {
                                return n.remove(t);
                            });
                    });
                };
            }
            var xc = [{ provide: Ie, useFactory: Sc, deps: [Ec, wc, Bt], multi: !0 }],
                Tc = (function () {
                    function t() {}
                    return (
                        (t.init = function () {
                            var e;
                            (e = new t()), (fn = e);
                        }),
                        (t.prototype.addToWindow = function (t) {
                            (xt.getAngularTestability = function (e, n) {
                                void 0 === n && (n = !0);
                                var r = t.findTestabilityInTree(e, n);
                                if (null == r) throw new Error("Could not find testability for element.");
                                return r;
                            }),
                                (xt.getAllAngularTestabilities = function () {
                                    return t.getAllTestabilities();
                                }),
                                (xt.getAllAngularRootElements = function () {
                                    return t.getAllRootElements();
                                }),
                                xt.frameworkStabilizers || (xt.frameworkStabilizers = []),
                                xt.frameworkStabilizers.push(function (t) {
                                    var e = xt.getAllAngularTestabilities(),
                                        n = e.length,
                                        r = !1,
                                        o = function (e) {
                                            (r = r || e), 0 == --n && t(r);
                                        };
                                    e.forEach(function (t) {
                                        t.whenStable(o);
                                    });
                                });
                        }),
                        (t.prototype.findTestabilityInTree = function (t, e, n) {
                            if (null == e) return null;
                            var r = t.getTestability(e);
                            return null != r ? r : n ? (pc().isShadowRoot(e) ? this.findTestabilityInTree(t, pc().getHost(e), !0) : this.findTestabilityInTree(t, pc().parentElement(e), !0)) : null;
                        }),
                        t
                    );
                })();
            function kc(t, e) {
                ("undefined" != typeof COMPILED && COMPILED) || ((xt.ng = xt.ng || {})[t] = e);
            }
            var Ac = { ApplicationRef: En, NgZone: nn };
            function Ic(t) {
                return Hn(t);
            }
            var Pc = new mt("EventManagerPlugins"),
                Nc = (function () {
                    function t(t, e) {
                        var n = this;
                        (this._zone = e),
                            (this._eventNameToPlugin = new Map()),
                            t.forEach(function (t) {
                                return (t.manager = n);
                            }),
                            (this._plugins = t.slice().reverse());
                    }
                    return (
                        (t.prototype.addEventListener = function (t, e, n) {
                            return this._findPluginFor(e).addEventListener(t, e, n);
                        }),
                        (t.prototype.addGlobalEventListener = function (t, e, n) {
                            return this._findPluginFor(e).addGlobalEventListener(t, e, n);
                        }),
                        (t.prototype.getZone = function () {
                            return this._zone;
                        }),
                        (t.prototype._findPluginFor = function (t) {
                            var e = this._eventNameToPlugin.get(t);
                            if (e) return e;
                            for (var n = this._plugins, r = 0; r < n.length; r++) {
                                var o = n[r];
                                if (o.supports(t)) return this._eventNameToPlugin.set(t, o), o;
                            }
                            throw new Error("No event manager plugin found for event " + t);
                        }),
                        a([s(0, Ot(Pc))], t)
                    );
                })(),
                Rc = (function () {
                    function t(t) {
                        this._doc = t;
                    }
                    return (
                        (t.prototype.addGlobalEventListener = function (t, e, n) {
                            var r = pc().getGlobalEventTarget(this._doc, t);
                            if (!r) throw new Error("Unsupported event target " + r + " for event " + e);
                            return this.addEventListener(r, e, n);
                        }),
                        t
                    );
                })(),
                Dc = (function () {
                    function t() {
                        this._stylesSet = new Set();
                    }
                    return (
                        (t.prototype.addStyles = function (t) {
                            var e = this,
                                n = new Set();
                            t.forEach(function (t) {
                                e._stylesSet.has(t) || (e._stylesSet.add(t), n.add(t));
                            }),
                                this.onStylesAdded(n);
                        }),
                        (t.prototype.onStylesAdded = function (t) {}),
                        (t.prototype.getAllStyles = function () {
                            return Array.from(this._stylesSet);
                        }),
                        t
                    );
                })(),
                Oc = (function (t) {
                    function e(e) {
                        var n = t.call(this) || this;
                        return (n._doc = e), (n._hostNodes = new Set()), (n._styleNodes = new Set()), n._hostNodes.add(e.head), n;
                    }
                    return (
                        o(e, t),
                        (e.prototype._addStylesToHost = function (t, e) {
                            var n = this;
                            t.forEach(function (t) {
                                var r = n._doc.createElement("style");
                                (r.textContent = t), n._styleNodes.add(e.appendChild(r));
                            });
                        }),
                        (e.prototype.addHost = function (t) {
                            this._addStylesToHost(this._stylesSet, t), this._hostNodes.add(t);
                        }),
                        (e.prototype.removeHost = function (t) {
                            this._hostNodes.delete(t);
                        }),
                        (e.prototype.onStylesAdded = function (t) {
                            var e = this;
                            this._hostNodes.forEach(function (n) {
                                return e._addStylesToHost(t, n);
                            });
                        }),
                        (e.prototype.ngOnDestroy = function () {
                            this._styleNodes.forEach(function (t) {
                                return pc().remove(t);
                            });
                        }),
                        a([s(0, Ot(wc))], e)
                    );
                })(Dc),
                Mc = { svg: "http://www.w3.org/2000/svg", xhtml: "http://www.w3.org/1999/xhtml", xlink: "http://www.w3.org/1999/xlink", xml: "http://www.w3.org/XML/1998/namespace", xmlns: "http://www.w3.org/2000/xmlns/" },
                Vc = /%COMP%/g,
                jc = "_nghost-%COMP%",
                Uc = "_ngcontent-%COMP%";
            function Lc(t, e, n) {
                for (var r = 0; r < e.length; r++) {
                    var o = e[r];
                    Array.isArray(o) ? Lc(t, o, n) : ((o = o.replace(Vc, t)), n.push(o));
                }
                return n;
            }
            function Hc(t) {
                return function (e) {
                    !1 === t(e) && (e.preventDefault(), (e.returnValue = !1));
                };
            }
            var Fc = (function () {
                    function t(t, e) {
                        (this.eventManager = t), (this.sharedStylesHost = e), (this.rendererByCompId = new Map()), (this.defaultRenderer = new zc(t));
                    }
                    return (
                        (t.prototype.createRenderer = function (t, e) {
                            if (!t || !e) return this.defaultRenderer;
                            switch (e.encapsulation) {
                                case se.Emulated:
                                    var n = this.rendererByCompId.get(e.id);
                                    return n || ((n = new Zc(this.eventManager, this.sharedStylesHost, e)), this.rendererByCompId.set(e.id, n)), n.applyToHost(t), n;
                                case se.Native:
                                case se.ShadowDom:
                                    return new Wc(this.eventManager, this.sharedStylesHost, t, e);
                                default:
                                    if (!this.rendererByCompId.has(e.id)) {
                                        var r = Lc(e.id, e.styles, []);
                                        this.sharedStylesHost.addStyles(r), this.rendererByCompId.set(e.id, this.defaultRenderer);
                                    }
                                    return this.defaultRenderer;
                            }
                        }),
                        (t.prototype.begin = function () {}),
                        (t.prototype.end = function () {}),
                        t
                    );
                })(),
                zc = (function () {
                    function t(t) {
                        (this.eventManager = t), (this.data = Object.create(null));
                    }
                    return (
                        (t.prototype.destroy = function () {}),
                        (t.prototype.createElement = function (t, e) {
                            return e ? document.createElementNS(Mc[e], t) : document.createElement(t);
                        }),
                        (t.prototype.createComment = function (t) {
                            return document.createComment(t);
                        }),
                        (t.prototype.createText = function (t) {
                            return document.createTextNode(t);
                        }),
                        (t.prototype.appendChild = function (t, e) {
                            t.appendChild(e);
                        }),
                        (t.prototype.insertBefore = function (t, e, n) {
                            t && t.insertBefore(e, n);
                        }),
                        (t.prototype.removeChild = function (t, e) {
                            t && t.removeChild(e);
                        }),
                        (t.prototype.selectRootElement = function (t) {
                            var e = "string" == typeof t ? document.querySelector(t) : t;
                            if (!e) throw new Error('The selector "' + t + '" did not match any elements');
                            return (e.textContent = ""), e;
                        }),
                        (t.prototype.parentNode = function (t) {
                            return t.parentNode;
                        }),
                        (t.prototype.nextSibling = function (t) {
                            return t.nextSibling;
                        }),
                        (t.prototype.setAttribute = function (t, e, n, r) {
                            if (r) {
                                e = r + ":" + e;
                                var o = Mc[r];
                                o ? t.setAttributeNS(o, e, n) : t.setAttribute(e, n);
                            } else t.setAttribute(e, n);
                        }),
                        (t.prototype.removeAttribute = function (t, e, n) {
                            if (n) {
                                var r = Mc[n];
                                r ? t.removeAttributeNS(r, e) : t.removeAttribute(n + ":" + e);
                            } else t.removeAttribute(e);
                        }),
                        (t.prototype.addClass = function (t, e) {
                            t.classList.add(e);
                        }),
                        (t.prototype.removeClass = function (t, e) {
                            t.classList.remove(e);
                        }),
                        (t.prototype.setStyle = function (t, e, n, r) {
                            r & Tn.DashCase ? t.style.setProperty(e, n, r & Tn.Important ? "important" : "") : (t.style[e] = n);
                        }),
                        (t.prototype.removeStyle = function (t, e, n) {
                            n & Tn.DashCase ? t.style.removeProperty(e) : (t.style[e] = "");
                        }),
                        (t.prototype.setProperty = function (t, e, n) {
                            qc(e, "property"), (t[e] = n);
                        }),
                        (t.prototype.setValue = function (t, e) {
                            t.nodeValue = e;
                        }),
                        (t.prototype.listen = function (t, e, n) {
                            return qc(e, "listener"), "string" == typeof t ? this.eventManager.addGlobalEventListener(t, e, Hc(n)) : this.eventManager.addEventListener(t, e, Hc(n));
                        }),
                        t
                    );
                })(),
                Bc = "@".charCodeAt(0);
            function qc(t, e) {
                if (t.charCodeAt(0) === Bc) throw new Error("Found the synthetic " + e + " " + t + '. Please include either "BrowserAnimationsModule" or "NoopAnimationsModule" in your application.');
            }
            var Gc,
                Zc = (function (t) {
                    function e(e, n, r) {
                        var o = t.call(this, e) || this;
                        o.component = r;
                        var i = Lc(r.id, r.styles, []);
                        return n.addStyles(i), (o.contentAttr = Uc.replace(Vc, r.id)), (o.hostAttr = jc.replace(Vc, r.id)), o;
                    }
                    return (
                        o(e, t),
                        (e.prototype.applyToHost = function (e) {
                            t.prototype.setAttribute.call(this, e, this.hostAttr, "");
                        }),
                        (e.prototype.createElement = function (e, n) {
                            var r = t.prototype.createElement.call(this, e, n);
                            return t.prototype.setAttribute.call(this, r, this.contentAttr, ""), r;
                        }),
                        e
                    );
                })(zc),
                Wc = (function (t) {
                    function e(e, n, r, o) {
                        var i = t.call(this, e) || this;
                        (i.sharedStylesHost = n), (i.hostEl = r), (i.component = o), (i.shadowRoot = o.encapsulation === se.ShadowDom ? r.attachShadow({ mode: "open" }) : r.createShadowRoot()), i.sharedStylesHost.addHost(i.shadowRoot);
                        for (var a = Lc(o.id, o.styles, []), s = 0; s < a.length; s++) {
                            var u = document.createElement("style");
                            (u.textContent = a[s]), i.shadowRoot.appendChild(u);
                        }
                        return i;
                    }
                    return (
                        o(e, t),
                        (e.prototype.nodeOrShadowRoot = function (t) {
                            return t === this.hostEl ? this.shadowRoot : t;
                        }),
                        (e.prototype.destroy = function () {
                            this.sharedStylesHost.removeHost(this.shadowRoot);
                        }),
                        (e.prototype.appendChild = function (e, n) {
                            return t.prototype.appendChild.call(this, this.nodeOrShadowRoot(e), n);
                        }),
                        (e.prototype.insertBefore = function (e, n, r) {
                            return t.prototype.insertBefore.call(this, this.nodeOrShadowRoot(e), n, r);
                        }),
                        (e.prototype.removeChild = function (e, n) {
                            return t.prototype.removeChild.call(this, this.nodeOrShadowRoot(e), n);
                        }),
                        (e.prototype.parentNode = function (e) {
                            return this.nodeOrShadowRoot(t.prototype.parentNode.call(this, this.nodeOrShadowRoot(e)));
                        }),
                        e
                    );
                })(zc),
                Qc =
                    ("undefined" != typeof Zone && Zone.__symbol__) ||
                    function (t) {
                        return "__zone_symbol__" + t;
                    },
                Yc = Qc("addEventListener"),
                Kc = Qc("removeEventListener"),
                Xc = {},
                $c = "__zone_symbol__propagationStopped";
            "undefined" != typeof Zone && Zone[Qc("BLACK_LISTED_EVENTS")] && (Gc = {});
            var Jc = function (t) {
                    return !!Gc && Gc.hasOwnProperty(t);
                },
                th = function (t) {
                    var e = Xc[t.type];
                    if (e) {
                        var n = this[e];
                        if (n) {
                            var r = [t];
                            if (1 === n.length) return (a = n[0]).zone !== Zone.current ? a.zone.run(a.handler, this, r) : a.handler.apply(this, r);
                            for (var o = n.slice(), i = 0; i < o.length && !0 !== t[$c]; i++) {
                                var a;
                                (a = o[i]).zone !== Zone.current ? a.zone.run(a.handler, this, r) : a.handler.apply(this, r);
                            }
                        }
                    }
                },
                eh = (function (t) {
                    function e(e, n, r) {
                        var o = t.call(this, e) || this;
                        return (
                            (o.ngZone = n),
                            (r &&
                                (function (t) {
                                    return t === uc;
                                })(r)) ||
                                o.patchEvent(),
                            o
                        );
                    }
                    return (
                        o(e, t),
                        (e.prototype.patchEvent = function () {
                            if ("undefined" != typeof Event && Event && Event.prototype && !Event.prototype.__zone_symbol__stopImmediatePropagation) {
                                var t = (Event.prototype.__zone_symbol__stopImmediatePropagation = Event.prototype.stopImmediatePropagation);
                                Event.prototype.stopImmediatePropagation = function () {
                                    this && (this[$c] = !0), t && t.apply(this, arguments);
                                };
                            }
                        }),
                        (e.prototype.supports = function (t) {
                            return !0;
                        }),
                        (e.prototype.addEventListener = function (t, e, n) {
                            var r = this,
                                o = n;
                            if (!t[Yc] || (nn.isInAngularZone() && !Jc(e))) t.addEventListener(e, o, !1);
                            else {
                                var i = Xc[e];
                                i || (i = Xc[e] = Qc("ANGULAR" + e + "FALSE"));
                                var a = t[i],
                                    s = a && a.length > 0;
                                a || (a = t[i] = []);
                                var u = Jc(e) ? Zone.root : Zone.current;
                                if (0 === a.length) a.push({ zone: u, handler: o });
                                else {
                                    for (var l = !1, c = 0; c < a.length; c++)
                                        if (a[c].handler === o) {
                                            l = !0;
                                            break;
                                        }
                                    l || a.push({ zone: u, handler: o });
                                }
                                s || t[Yc](e, th, !1);
                            }
                            return function () {
                                return r.removeEventListener(t, e, o);
                            };
                        }),
                        (e.prototype.removeEventListener = function (t, e, n) {
                            var r = t[Kc];
                            if (!r) return t.removeEventListener.apply(t, [e, n, !1]);
                            var o = Xc[e],
                                i = o && t[o];
                            if (!i) return t.removeEventListener.apply(t, [e, n, !1]);
                            for (var a = !1, s = 0; s < i.length; s++)
                                if (i[s].handler === n) {
                                    (a = !0), i.splice(s, 1);
                                    break;
                                }
                            a ? 0 === i.length && r.apply(t, [e, th, !1]) : t.removeEventListener.apply(t, [e, n, !1]);
                        }),
                        a([s(0, Ot(wc)), s(2, Mt()), s(2, Ot(De))], e)
                    );
                })(Rc),
                nh = {
                    pan: !0,
                    panstart: !0,
                    panmove: !0,
                    panend: !0,
                    pancancel: !0,
                    panleft: !0,
                    panright: !0,
                    panup: !0,
                    pandown: !0,
                    pinch: !0,
                    pinchstart: !0,
                    pinchmove: !0,
                    pinchend: !0,
                    pinchcancel: !0,
                    pinchin: !0,
                    pinchout: !0,
                    press: !0,
                    pressup: !0,
                    rotate: !0,
                    rotatestart: !0,
                    rotatemove: !0,
                    rotateend: !0,
                    rotatecancel: !0,
                    swipe: !0,
                    swipeleft: !0,
                    swiperight: !0,
                    swipeup: !0,
                    swipedown: !0,
                    tap: !0,
                },
                rh = new mt("HammerGestureConfig"),
                oh = new mt("HammerLoader"),
                ih = (function () {
                    function t() {
                        (this.events = []), (this.overrides = {});
                    }
                    return (
                        (t.prototype.buildHammer = function (t) {
                            var e = new Hammer(t, this.options);
                            for (var n in (e.get("pinch").set({ enable: !0 }), e.get("rotate").set({ enable: !0 }), this.overrides)) e.get(n).set(this.overrides[n]);
                            return e;
                        }),
                        t
                    );
                })(),
                ah = (function (t) {
                    function e(e, n, r, o) {
                        var i = t.call(this, e) || this;
                        return (i._config = n), (i.console = r), (i.loader = o), i;
                    }
                    return (
                        o(e, t),
                        (e.prototype.supports = function (t) {
                            return !(
                                (!nh.hasOwnProperty(t.toLowerCase()) && !this.isCustomEvent(t)) ||
                                (!window.Hammer && !this.loader && (this.console.warn('The "' + t + '" event cannot be bound because Hammer.JS is not loaded and no custom loader has been specified.'), 1))
                            );
                        }),
                        (e.prototype.addEventListener = function (t, e, n) {
                            var r = this,
                                o = this.manager.getZone();
                            if (((e = e.toLowerCase()), !window.Hammer && this.loader)) {
                                var i = !1,
                                    a = function () {
                                        i = !0;
                                    };
                                return (
                                    this.loader()
                                        .then(function () {
                                            if (!window.Hammer) return r.console.warn("The custom HAMMER_LOADER completed, but Hammer.JS is not present."), void (a = function () {});
                                            i || (a = r.addEventListener(t, e, n));
                                        })
                                        .catch(function () {
                                            r.console.warn('The "' + e + '" event cannot be bound because the custom Hammer.JS loader failed.'), (a = function () {});
                                        }),
                                    function () {
                                        a();
                                    }
                                );
                            }
                            return o.runOutsideAngular(function () {
                                var i = r._config.buildHammer(t),
                                    a = function (t) {
                                        o.runGuarded(function () {
                                            n(t);
                                        });
                                    };
                                return (
                                    i.on(e, a),
                                    function () {
                                        i.off(e, a), "function" == typeof i.destroy && i.destroy();
                                    }
                                );
                            });
                        }),
                        (e.prototype.isCustomEvent = function (t) {
                            return this._config.events.indexOf(t) > -1;
                        }),
                        a([s(0, Ot(wc)), s(1, Ot(rh)), s(3, Mt()), s(3, Ot(oh))], e)
                    );
                })(Rc),
                sh = ["alt", "control", "meta", "shift"],
                uh = {
                    alt: function (t) {
                        return t.altKey;
                    },
                    control: function (t) {
                        return t.ctrlKey;
                    },
                    meta: function (t) {
                        return t.metaKey;
                    },
                    shift: function (t) {
                        return t.shiftKey;
                    },
                },
                lh = (function (t) {
                    function e(e) {
                        return t.call(this, e) || this;
                    }
                    var n;
                    return (
                        o(e, t),
                        (n = e),
                        (e.prototype.supports = function (t) {
                            return null != n.parseEventName(t);
                        }),
                        (e.prototype.addEventListener = function (t, e, r) {
                            var o = n.parseEventName(e),
                                i = n.eventCallback(o.fullKey, r, this.manager.getZone());
                            return this.manager.getZone().runOutsideAngular(function () {
                                return pc().onAndCancel(t, o.domEventName, i);
                            });
                        }),
                        (e.parseEventName = function (t) {
                            var e = t.toLowerCase().split("."),
                                r = e.shift();
                            if (0 === e.length || ("keydown" !== r && "keyup" !== r)) return null;
                            var o = n._normalizeKey(e.pop()),
                                i = "";
                            if (
                                (sh.forEach(function (t) {
                                    var n = e.indexOf(t);
                                    n > -1 && (e.splice(n, 1), (i += t + "."));
                                }),
                                (i += o),
                                0 != e.length || 0 === o.length)
                            )
                                return null;
                            var a = {};
                            return (a.domEventName = r), (a.fullKey = i), a;
                        }),
                        (e.getEventFullKey = function (t) {
                            var e = "",
                                n = pc().getEventKey(t);
                            return (
                                " " === (n = n.toLowerCase()) ? (n = "space") : "." === n && (n = "dot"),
                                sh.forEach(function (r) {
                                    r != n && (0, uh[r])(t) && (e += r + ".");
                                }),
                                (e += n)
                            );
                        }),
                        (e.eventCallback = function (t, e, r) {
                            return function (o) {
                                n.getEventFullKey(o) === t &&
                                    r.runGuarded(function () {
                                        return e(o);
                                    });
                            };
                        }),
                        (e._normalizeKey = function (t) {
                            switch (t) {
                                case "esc":
                                    return "escape";
                                default:
                                    return t;
                            }
                        }),
                        (n = a([s(0, Ot(wc))], e))
                    );
                })(Rc),
                ch = function () {},
                hh = (function (t) {
                    function e(e) {
                        var n = t.call(this) || this;
                        return (n._doc = e), n;
                    }
                    return (
                        o(e, t),
                        (e.prototype.sanitize = function (t, e) {
                            if (null == e) return null;
                            switch (t) {
                                case Vr.NONE:
                                    return e;
                                case Vr.HTML:
                                    return e instanceof fh
                                        ? e.changingThisBreaksApplicationSecurity
                                        : (this.checkNotSafeValue(e, "HTML"),
                                          (function (t, e) {
                                              var n = null;
                                              try {
                                                  wr = wr || new dr(t);
                                                  var r = e ? String(e) : "";
                                                  n = wr.getInertBodyElement(r);
                                                  var o = 5,
                                                      i = r;
                                                  do {
                                                      if (0 === o) throw new Error("Failed to sanitize html because the input is unstable");
                                                      o--, (r = i), (i = n.innerHTML), (n = wr.getInertBodyElement(r));
                                                  } while (r !== i);
                                                  var a = new Ir(),
                                                      s = a.sanitizeChildren(Dr(n) || n);
                                                  return gn() && a.sanitizedSomething && console.warn("WARNING: sanitizing HTML stripped some content (see http://g.co/ng/security#xss)."), s;
                                              } finally {
                                                  if (n) for (var u = Dr(n) || n; u.firstChild; ) u.removeChild(u.firstChild);
                                              }
                                          })(this._doc, String(e)));
                                case Vr.STYLE:
                                    return e instanceof dh
                                        ? e.changingThisBreaksApplicationSecurity
                                        : (this.checkNotSafeValue(e, "Style"),
                                          (function (t) {
                                              if (!(t = String(t).trim())) return "";
                                              var e = t.match(Mr);
                                              return (e && gr(e[1]) === e[1]) ||
                                                  (t.match(Or) &&
                                                      (function (t) {
                                                          for (var e = !0, n = !0, r = 0; r < t.length; r++) {
                                                              var o = t.charAt(r);
                                                              "'" === o && n ? (e = !e) : '"' === o && e && (n = !n);
                                                          }
                                                          return e && n;
                                                      })(t))
                                                  ? t
                                                  : (gn() && console.warn("WARNING: sanitizing unsafe style value " + t + " (see http://g.co/ng/security#xss)."), "unsafe");
                                          })(e));
                                case Vr.SCRIPT:
                                    if (e instanceof vh) return e.changingThisBreaksApplicationSecurity;
                                    throw (this.checkNotSafeValue(e, "Script"), new Error("unsafe value used in a script context"));
                                case Vr.URL:
                                    return e instanceof gh || e instanceof yh ? e.changingThisBreaksApplicationSecurity : (this.checkNotSafeValue(e, "URL"), gr(String(e)));
                                case Vr.RESOURCE_URL:
                                    if (e instanceof gh) return e.changingThisBreaksApplicationSecurity;
                                    throw (this.checkNotSafeValue(e, "ResourceURL"), new Error("unsafe value used in a resource URL context (see http://g.co/ng/security#xss)"));
                                default:
                                    throw new Error("Unexpected SecurityContext " + t + " (see http://g.co/ng/security#xss)");
                            }
                        }),
                        (e.prototype.checkNotSafeValue = function (t, e) {
                            if (t instanceof ph) throw new Error("Required a safe " + e + ", got a " + t.getTypeName() + " (see http://g.co/ng/security#xss)");
                        }),
                        (e.prototype.bypassSecurityTrustHtml = function (t) {
                            return new fh(t);
                        }),
                        (e.prototype.bypassSecurityTrustStyle = function (t) {
                            return new dh(t);
                        }),
                        (e.prototype.bypassSecurityTrustScript = function (t) {
                            return new vh(t);
                        }),
                        (e.prototype.bypassSecurityTrustUrl = function (t) {
                            return new yh(t);
                        }),
                        (e.prototype.bypassSecurityTrustResourceUrl = function (t) {
                            return new gh(t);
                        }),
                        a([s(0, Ot(wc))], e)
                    );
                })(ch),
                ph = (function () {
                    function t(t) {
                        this.changingThisBreaksApplicationSecurity = t;
                    }
                    return (
                        (t.prototype.toString = function () {
                            return "SafeValue must use [property]=binding: " + this.changingThisBreaksApplicationSecurity + " (see http://g.co/ng/security#xss)";
                        }),
                        t
                    );
                })(),
                fh = (function (t) {
                    function e() {
                        return (null !== t && t.apply(this, arguments)) || this;
                    }
                    return (
                        o(e, t),
                        (e.prototype.getTypeName = function () {
                            return "HTML";
                        }),
                        e
                    );
                })(ph),
                dh = (function (t) {
                    function e() {
                        return (null !== t && t.apply(this, arguments)) || this;
                    }
                    return (
                        o(e, t),
                        (e.prototype.getTypeName = function () {
                            return "Style";
                        }),
                        e
                    );
                })(ph),
                vh = (function (t) {
                    function e() {
                        return (null !== t && t.apply(this, arguments)) || this;
                    }
                    return (
                        o(e, t),
                        (e.prototype.getTypeName = function () {
                            return "Script";
                        }),
                        e
                    );
                })(ph),
                yh = (function (t) {
                    function e() {
                        return (null !== t && t.apply(this, arguments)) || this;
                    }
                    return (
                        o(e, t),
                        (e.prototype.getTypeName = function () {
                            return "URL";
                        }),
                        e
                    );
                })(ph),
                gh = (function (t) {
                    function e() {
                        return (null !== t && t.apply(this, arguments)) || this;
                    }
                    return (
                        o(e, t),
                        (e.prototype.getTypeName = function () {
                            return "ResourceURL";
                        }),
                        e
                    );
                })(ph),
                mh = bn(ur, "browser", [
                    { provide: De, useValue: "browser" },
                    {
                        provide: Re,
                        useValue: function () {
                            mc.makeCurrent(), Tc.init();
                        },
                        multi: !0,
                    },
                    { provide: hl, useClass: Cc, deps: [wc] },
                    {
                        provide: wc,
                        useFactory: function () {
                            return document;
                        },
                        deps: [],
                    },
                ]);
            function bh() {
                return new ve();
            }
            var wh = (function () {
                function t(t) {
                    if (t) throw new Error("BrowserModule has already been loaded. If you need access to common directives such as NgIf and NgFor from a lazy loaded module, import CommonModule instead.");
                }
                var e;
                return (
                    (e = t),
                    (t.withServerTransition = function (t) {
                        return { ngModule: e, providers: [{ provide: Ne, useValue: t.appId }, { provide: Ec, useExisting: Ne }, xc] };
                    }),
                    (e = a([s(0, Mt()), s(0, jt()), s(0, Ot(e))], t))
                );
            })();
            "undefined" != typeof window && window;
            var _h = function (t, e) {
                    (this.id = t), (this.url = e);
                },
                Ch = (function (t) {
                    function e(e, n, r, o) {
                        void 0 === r && (r = "imperative"), void 0 === o && (o = null);
                        var i = t.call(this, e, n) || this;
                        return (i.navigationTrigger = r), (i.restoredState = o), i;
                    }
                    return (
                        o(e, t),
                        (e.prototype.toString = function () {
                            return "NavigationStart(id: " + this.id + ", url: '" + this.url + "')";
                        }),
                        e
                    );
                })(_h),
                Eh = (function (t) {
                    function e(e, n, r) {
                        var o = t.call(this, e, n) || this;
                        return (o.urlAfterRedirects = r), o;
                    }
                    return (
                        o(e, t),
                        (e.prototype.toString = function () {
                            return "NavigationEnd(id: " + this.id + ", url: '" + this.url + "', urlAfterRedirects: '" + this.urlAfterRedirects + "')";
                        }),
                        e
                    );
                })(_h),
                Sh = (function (t) {
                    function e(e, n, r) {
                        var o = t.call(this, e, n) || this;
                        return (o.reason = r), o;
                    }
                    return (
                        o(e, t),
                        (e.prototype.toString = function () {
                            return "NavigationCancel(id: " + this.id + ", url: '" + this.url + "')";
                        }),
                        e
                    );
                })(_h),
                xh = (function (t) {
                    function e(e, n, r) {
                        var o = t.call(this, e, n) || this;
                        return (o.error = r), o;
                    }
                    return (
                        o(e, t),
                        (e.prototype.toString = function () {
                            return "NavigationError(id: " + this.id + ", url: '" + this.url + "', error: " + this.error + ")";
                        }),
                        e
                    );
                })(_h),
                Th = (function (t) {
                    function e(e, n, r, o) {
                        var i = t.call(this, e, n) || this;
                        return (i.urlAfterRedirects = r), (i.state = o), i;
                    }
                    return (
                        o(e, t),
                        (e.prototype.toString = function () {
                            return "RoutesRecognized(id: " + this.id + ", url: '" + this.url + "', urlAfterRedirects: '" + this.urlAfterRedirects + "', state: " + this.state + ")";
                        }),
                        e
                    );
                })(_h),
                kh = (function (t) {
                    function e(e, n, r, o) {
                        var i = t.call(this, e, n) || this;
                        return (i.urlAfterRedirects = r), (i.state = o), i;
                    }
                    return (
                        o(e, t),
                        (e.prototype.toString = function () {
                            return "GuardsCheckStart(id: " + this.id + ", url: '" + this.url + "', urlAfterRedirects: '" + this.urlAfterRedirects + "', state: " + this.state + ")";
                        }),
                        e
                    );
                })(_h),
                Ah = (function (t) {
                    function e(e, n, r, o, i) {
                        var a = t.call(this, e, n) || this;
                        return (a.urlAfterRedirects = r), (a.state = o), (a.shouldActivate = i), a;
                    }
                    return (
                        o(e, t),
                        (e.prototype.toString = function () {
                            return "GuardsCheckEnd(id: " + this.id + ", url: '" + this.url + "', urlAfterRedirects: '" + this.urlAfterRedirects + "', state: " + this.state + ", shouldActivate: " + this.shouldActivate + ")";
                        }),
                        e
                    );
                })(_h),
                Ih = (function (t) {
                    function e(e, n, r, o) {
                        var i = t.call(this, e, n) || this;
                        return (i.urlAfterRedirects = r), (i.state = o), i;
                    }
                    return (
                        o(e, t),
                        (e.prototype.toString = function () {
                            return "ResolveStart(id: " + this.id + ", url: '" + this.url + "', urlAfterRedirects: '" + this.urlAfterRedirects + "', state: " + this.state + ")";
                        }),
                        e
                    );
                })(_h),
                Ph = (function (t) {
                    function e(e, n, r, o) {
                        var i = t.call(this, e, n) || this;
                        return (i.urlAfterRedirects = r), (i.state = o), i;
                    }
                    return (
                        o(e, t),
                        (e.prototype.toString = function () {
                            return "ResolveEnd(id: " + this.id + ", url: '" + this.url + "', urlAfterRedirects: '" + this.urlAfterRedirects + "', state: " + this.state + ")";
                        }),
                        e
                    );
                })(_h),
                Nh = (function () {
                    function t(t) {
                        this.route = t;
                    }
                    return (
                        (t.prototype.toString = function () {
                            return "RouteConfigLoadStart(path: " + this.route.path + ")";
                        }),
                        t
                    );
                })(),
                Rh = (function () {
                    function t(t) {
                        this.route = t;
                    }
                    return (
                        (t.prototype.toString = function () {
                            return "RouteConfigLoadEnd(path: " + this.route.path + ")";
                        }),
                        t
                    );
                })(),
                Dh = (function () {
                    function t(t) {
                        this.snapshot = t;
                    }
                    return (
                        (t.prototype.toString = function () {
                            return "ChildActivationStart(path: '" + ((this.snapshot.routeConfig && this.snapshot.routeConfig.path) || "") + "')";
                        }),
                        t
                    );
                })(),
                Oh = (function () {
                    function t(t) {
                        this.snapshot = t;
                    }
                    return (
                        (t.prototype.toString = function () {
                            return "ChildActivationEnd(path: '" + ((this.snapshot.routeConfig && this.snapshot.routeConfig.path) || "") + "')";
                        }),
                        t
                    );
                })(),
                Mh = (function () {
                    function t(t) {
                        this.snapshot = t;
                    }
                    return (
                        (t.prototype.toString = function () {
                            return "ActivationStart(path: '" + ((this.snapshot.routeConfig && this.snapshot.routeConfig.path) || "") + "')";
                        }),
                        t
                    );
                })(),
                Vh = (function () {
                    function t(t) {
                        this.snapshot = t;
                    }
                    return (
                        (t.prototype.toString = function () {
                            return "ActivationEnd(path: '" + ((this.snapshot.routeConfig && this.snapshot.routeConfig.path) || "") + "')";
                        }),
                        t
                    );
                })(),
                jh = (function () {
                    function t(t, e, n) {
                        (this.routerEvent = t), (this.position = e), (this.anchor = n);
                    }
                    return (
                        (t.prototype.toString = function () {
                            return "Scroll(anchor: '" + this.anchor + "', position: '" + (this.position ? this.position[0] + ", " + this.position[1] : null) + "')";
                        }),
                        t
                    );
                })(),
                Uh = function () {},
                Lh = "primary",
                Hh = (function () {
                    function t(t) {
                        this.params = t || {};
                    }
                    return (
                        (t.prototype.has = function (t) {
                            return this.params.hasOwnProperty(t);
                        }),
                        (t.prototype.get = function (t) {
                            if (this.has(t)) {
                                var e = this.params[t];
                                return Array.isArray(e) ? e[0] : e;
                            }
                            return null;
                        }),
                        (t.prototype.getAll = function (t) {
                            if (this.has(t)) {
                                var e = this.params[t];
                                return Array.isArray(e) ? e : [e];
                            }
                            return [];
                        }),
                        Object.defineProperty(t.prototype, "keys", {
                            get: function () {
                                return Object.keys(this.params);
                            },
                            enumerable: !0,
                            configurable: !0,
                        }),
                        t
                    );
                })();
            function Fh(t) {
                return new Hh(t);
            }
            function zh(t, e, n) {
                var r = n.path.split("/");
                if (r.length > t.length) return null;
                if ("full" === n.pathMatch && (e.hasChildren() || r.length < t.length)) return null;
                for (var o = {}, i = 0; i < r.length; i++) {
                    var a = r[i],
                        s = t[i];
                    if (a.startsWith(":")) o[a.substring(1)] = s;
                    else if (a !== s.path) return null;
                }
                return { consumed: t.slice(0, r.length), posParams: o };
            }
            var Bh = function (t, e) {
                (this.routes = t), (this.module = e);
            };
            function qh(t, e) {
                void 0 === e && (e = "");
                for (var n = 0; n < t.length; n++) {
                    var r = t[n];
                    Gh(r, Zh(e, r));
                }
            }
            function Gh(t, e) {
                if (!t)
                    throw new Error(
                        "\n      Invalid configuration of route '" +
                            e +
                            "': Encountered undefined route.\n      The reason might be an extra comma.\n\n      Example:\n      const routes: Routes = [\n        { path: '', redirectTo: '/dashboard', pathMatch: 'full' },\n        { path: 'dashboard',  component: DashboardComponent },, << two commas\n        { path: 'detail/:id', component: HeroDetailComponent }\n      ];\n    "
                    );
                if (Array.isArray(t)) throw new Error("Invalid configuration of route '" + e + "': Array cannot be specified");
                if (!t.component && !t.children && !t.loadChildren && t.outlet && t.outlet !== Lh)
                    throw new Error("Invalid configuration of route '" + e + "': a componentless route without children or loadChildren cannot have a named outlet set");
                if (t.redirectTo && t.children) throw new Error("Invalid configuration of route '" + e + "': redirectTo and children cannot be used together");
                if (t.redirectTo && t.loadChildren) throw new Error("Invalid configuration of route '" + e + "': redirectTo and loadChildren cannot be used together");
                if (t.children && t.loadChildren) throw new Error("Invalid configuration of route '" + e + "': children and loadChildren cannot be used together");
                if (t.redirectTo && t.component) throw new Error("Invalid configuration of route '" + e + "': redirectTo and component cannot be used together");
                if (t.path && t.matcher) throw new Error("Invalid configuration of route '" + e + "': path and matcher cannot be used together");
                if (void 0 === t.redirectTo && !t.component && !t.children && !t.loadChildren)
                    throw new Error("Invalid configuration of route '" + e + "'. One of the following must be provided: component, redirectTo, children or loadChildren");
                if (void 0 === t.path && void 0 === t.matcher) throw new Error("Invalid configuration of route '" + e + "': routes must have either a path or a matcher specified");
                if ("string" == typeof t.path && "/" === t.path.charAt(0)) throw new Error("Invalid configuration of route '" + e + "': path cannot start with a slash");
                if ("" === t.path && void 0 !== t.redirectTo && void 0 === t.pathMatch)
                    throw new Error(
                        "Invalid configuration of route '{path: \"" + e + '", redirectTo: "' + t.redirectTo + "\"}': please provide 'pathMatch'. The default value of 'pathMatch' is 'prefix', but often the intent is to use 'full'."
                    );
                if (void 0 !== t.pathMatch && "full" !== t.pathMatch && "prefix" !== t.pathMatch) throw new Error("Invalid configuration of route '" + e + "': pathMatch can only be set to 'prefix' or 'full'");
                t.children && qh(t.children, e);
            }
            function Zh(t, e) {
                return e ? (t || e.path ? (t && !e.path ? t + "/" : !t && e.path ? e.path : t + "/" + e.path) : "") : t;
            }
            function Wh(t) {
                var e = t.children && t.children.map(Wh),
                    n = e ? i({}, t, { children: e }) : i({}, t);
                return !n.component && (e || n.loadChildren) && n.outlet && n.outlet !== Lh && (n.component = Uh), n;
            }
            function Qh(t, e) {
                var n,
                    r = Object.keys(t),
                    o = Object.keys(e);
                if (r.length != o.length) return !1;
                for (var i = 0; i < r.length; i++) if (t[(n = r[i])] !== e[n]) return !1;
                return !0;
            }
            function Yh(t) {
                return Array.prototype.concat.apply([], t);
            }
            function Kh(t) {
                return t.length > 0 ? t[t.length - 1] : null;
            }
            function Xh(t, e) {
                for (var n in t) t.hasOwnProperty(n) && e(t[n], n);
            }
            function $h(t) {
                return t.pipe(
                    rt(),
                    el(function (t) {
                        return !0 === t;
                    })
                );
            }
            function Jh(t) {
                return Ae(t) ? t : ke(t) ? $(Promise.resolve(t)) : Nu(t);
            }
            function tp(t, e, n) {
                return n
                    ? (function (t, e) {
                          return Qh(t, e);
                      })(t.queryParams, e.queryParams) &&
                          (function t(e, n) {
                              if (!op(e.segments, n.segments)) return !1;
                              if (e.numberOfChildren !== n.numberOfChildren) return !1;
                              for (var r in n.children) {
                                  if (!e.children[r]) return !1;
                                  if (!t(e.children[r], n.children[r])) return !1;
                              }
                              return !0;
                          })(t.root, e.root)
                    : (function (t, e) {
                          return (
                              Object.keys(e).length <= Object.keys(t).length &&
                              Object.keys(e).every(function (n) {
                                  return e[n] === t[n];
                              })
                          );
                      })(t.queryParams, e.queryParams) &&
                          (function t(e, n) {
                              return (function e(n, r, o) {
                                  if (n.segments.length > o.length) return !!op((a = n.segments.slice(0, o.length)), o) && !r.hasChildren();
                                  if (n.segments.length === o.length) {
                                      if (!op(n.segments, o)) return !1;
                                      for (var i in r.children) {
                                          if (!n.children[i]) return !1;
                                          if (!t(n.children[i], r.children[i])) return !1;
                                      }
                                      return !0;
                                  }
                                  var a = o.slice(0, n.segments.length),
                                      s = o.slice(n.segments.length);
                                  return !!op(n.segments, a) && !!n.children[Lh] && e(n.children[Lh], r, s);
                              })(e, n, n.segments);
                          })(t.root, e.root);
            }
            var ep = (function () {
                    function t(t, e, n) {
                        (this.root = t), (this.queryParams = e), (this.fragment = n);
                    }
                    return (
                        Object.defineProperty(t.prototype, "queryParamMap", {
                            get: function () {
                                return this._queryParamMap || (this._queryParamMap = Fh(this.queryParams)), this._queryParamMap;
                            },
                            enumerable: !0,
                            configurable: !0,
                        }),
                        (t.prototype.toString = function () {
                            return up.serialize(this);
                        }),
                        t
                    );
                })(),
                np = (function () {
                    function t(t, e) {
                        var n = this;
                        (this.segments = t),
                            (this.children = e),
                            (this.parent = null),
                            Xh(e, function (t, e) {
                                return (t.parent = n);
                            });
                    }
                    return (
                        (t.prototype.hasChildren = function () {
                            return this.numberOfChildren > 0;
                        }),
                        Object.defineProperty(t.prototype, "numberOfChildren", {
                            get: function () {
                                return Object.keys(this.children).length;
                            },
                            enumerable: !0,
                            configurable: !0,
                        }),
                        (t.prototype.toString = function () {
                            return lp(this);
                        }),
                        t
                    );
                })(),
                rp = (function () {
                    function t(t, e) {
                        (this.path = t), (this.parameters = e);
                    }
                    return (
                        Object.defineProperty(t.prototype, "parameterMap", {
                            get: function () {
                                return this._parameterMap || (this._parameterMap = Fh(this.parameters)), this._parameterMap;
                            },
                            enumerable: !0,
                            configurable: !0,
                        }),
                        (t.prototype.toString = function () {
                            return vp(this);
                        }),
                        t
                    );
                })();
            function op(t, e) {
                return (
                    t.length === e.length &&
                    t.every(function (t, n) {
                        return t.path === e[n].path;
                    })
                );
            }
            function ip(t, e) {
                var n = [];
                return (
                    Xh(t.children, function (t, r) {
                        r === Lh && (n = n.concat(e(t, r)));
                    }),
                    Xh(t.children, function (t, r) {
                        r !== Lh && (n = n.concat(e(t, r)));
                    }),
                    n
                );
            }
            var ap = function () {},
                sp = (function () {
                    function t() {}
                    return (
                        (t.prototype.parse = function (t) {
                            var e = new wp(t);
                            return new ep(e.parseRootSegment(), e.parseQueryParams(), e.parseFragment());
                        }),
                        (t.prototype.serialize = function (t) {
                            var e, n;
                            return (
                                "/" +
                                (function t(e, n) {
                                    if (!e.hasChildren()) return lp(e);
                                    if (n) {
                                        var r = e.children[Lh] ? t(e.children[Lh], !1) : "",
                                            o = [];
                                        return (
                                            Xh(e.children, function (e, n) {
                                                n !== Lh && o.push(n + ":" + t(e, !1));
                                            }),
                                            o.length > 0 ? r + "(" + o.join("//") + ")" : r
                                        );
                                    }
                                    var i = ip(e, function (n, r) {
                                        return r === Lh ? [t(e.children[Lh], !1)] : [r + ":" + t(n, !1)];
                                    });
                                    return lp(e) + "/(" + i.join("//") + ")";
                                })(t.root, !0) +
                                ((e = t.queryParams),
                                (n = Object.keys(e).map(function (t) {
                                    var n = e[t];
                                    return Array.isArray(n)
                                        ? n
                                              .map(function (e) {
                                                  return hp(t) + "=" + hp(e);
                                              })
                                              .join("&")
                                        : hp(t) + "=" + hp(n);
                                })).length
                                    ? "?" + n.join("&")
                                    : "") +
                                ("string" == typeof t.fragment ? "#" + encodeURI(t.fragment) : "")
                            );
                        }),
                        t
                    );
                })(),
                up = new sp();
            function lp(t) {
                return t.segments
                    .map(function (t) {
                        return vp(t);
                    })
                    .join("/");
            }
            function cp(t) {
                return encodeURIComponent(t).replace(/%40/g, "@").replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",");
            }
            function hp(t) {
                return cp(t).replace(/%3B/gi, ";");
            }
            function pp(t) {
                return cp(t).replace(/\(/g, "%28").replace(/\)/g, "%29").replace(/%26/gi, "&");
            }
            function fp(t) {
                return decodeURIComponent(t);
            }
            function dp(t) {
                return fp(t.replace(/\+/g, "%20"));
            }
            function vp(t) {
                return (
                    "" +
                    pp(t.path) +
                    ((e = t.parameters),
                    Object.keys(e)
                        .map(function (t) {
                            return ";" + pp(t) + "=" + pp(e[t]);
                        })
                        .join(""))
                );
                var e;
            }
            var yp = /^[^\/()?;=#]+/;
            function gp(t) {
                var e = t.match(yp);
                return e ? e[0] : "";
            }
            var mp = /^[^=?&#]+/,
                bp = /^[^?&#]+/,
                wp = (function () {
                    function t(t) {
                        (this.url = t), (this.remaining = t);
                    }
                    return (
                        (t.prototype.parseRootSegment = function () {
                            return this.consumeOptional("/"), "" === this.remaining || this.peekStartsWith("?") || this.peekStartsWith("#") ? new np([], {}) : new np([], this.parseChildren());
                        }),
                        (t.prototype.parseQueryParams = function () {
                            var t = {};
                            if (this.consumeOptional("?"))
                                do {
                                    this.parseQueryParam(t);
                                } while (this.consumeOptional("&"));
                            return t;
                        }),
                        (t.prototype.parseFragment = function () {
                            return this.consumeOptional("#") ? decodeURIComponent(this.remaining) : null;
                        }),
                        (t.prototype.parseChildren = function () {
                            if ("" === this.remaining) return {};
                            this.consumeOptional("/");
                            var t = [];
                            for (this.peekStartsWith("(") || t.push(this.parseSegment()); this.peekStartsWith("/") && !this.peekStartsWith("//") && !this.peekStartsWith("/("); ) this.capture("/"), t.push(this.parseSegment());
                            var e = {};
                            this.peekStartsWith("/(") && (this.capture("/"), (e = this.parseParens(!0)));
                            var n = {};
                            return this.peekStartsWith("(") && (n = this.parseParens(!1)), (t.length > 0 || Object.keys(e).length > 0) && (n[Lh] = new np(t, e)), n;
                        }),
                        (t.prototype.parseSegment = function () {
                            var t = gp(this.remaining);
                            if ("" === t && this.peekStartsWith(";")) throw new Error("Empty path url segment cannot have parameters: '" + this.remaining + "'.");
                            return this.capture(t), new rp(fp(t), this.parseMatrixParams());
                        }),
                        (t.prototype.parseMatrixParams = function () {
                            for (var t = {}; this.consumeOptional(";"); ) this.parseParam(t);
                            return t;
                        }),
                        (t.prototype.parseParam = function (t) {
                            var e = gp(this.remaining);
                            if (e) {
                                this.capture(e);
                                var n = "";
                                if (this.consumeOptional("=")) {
                                    var r = gp(this.remaining);
                                    r && this.capture((n = r));
                                }
                                t[fp(e)] = fp(n);
                            }
                        }),
                        (t.prototype.parseQueryParam = function (t) {
                            var e,
                                n = (e = this.remaining.match(mp)) ? e[0] : "";
                            if (n) {
                                this.capture(n);
                                var r = "";
                                if (this.consumeOptional("=")) {
                                    var o = (function (t) {
                                        var e = t.match(bp);
                                        return e ? e[0] : "";
                                    })(this.remaining);
                                    o && this.capture((r = o));
                                }
                                var i = dp(n),
                                    a = dp(r);
                                if (t.hasOwnProperty(i)) {
                                    var s = t[i];
                                    Array.isArray(s) || (t[i] = s = [s]), s.push(a);
                                } else t[i] = a;
                            }
                        }),
                        (t.prototype.parseParens = function (t) {
                            var e = {};
                            for (this.capture("("); !this.consumeOptional(")") && this.remaining.length > 0; ) {
                                var n = gp(this.remaining),
                                    r = this.remaining[n.length];
                                if ("/" !== r && ")" !== r && ";" !== r) throw new Error("Cannot parse url '" + this.url + "'");
                                var o = void 0;
                                n.indexOf(":") > -1 ? ((o = n.substr(0, n.indexOf(":"))), this.capture(o), this.capture(":")) : t && (o = Lh);
                                var i = this.parseChildren();
                                (e[o] = 1 === Object.keys(i).length ? i[Lh] : new np([], i)), this.consumeOptional("//");
                            }
                            return e;
                        }),
                        (t.prototype.peekStartsWith = function (t) {
                            return this.remaining.startsWith(t);
                        }),
                        (t.prototype.consumeOptional = function (t) {
                            return !!this.peekStartsWith(t) && ((this.remaining = this.remaining.substring(t.length)), !0);
                        }),
                        (t.prototype.capture = function (t) {
                            if (!this.consumeOptional(t)) throw new Error('Expected "' + t + '".');
                        }),
                        t
                    );
                })(),
                _p = function (t) {
                    this.segmentGroup = t || null;
                },
                Cp = function (t) {
                    this.urlTree = t;
                };
            function Ep(t) {
                return new O(function (e) {
                    return e.error(new _p(t));
                });
            }
            function Sp(t) {
                return new O(function (e) {
                    return e.error(new Cp(t));
                });
            }
            function xp(t) {
                return new O(function (e) {
                    return e.error(new Error("Only absolute redirects can have named outlets. redirectTo: '" + t + "'"));
                });
            }
            var Tp = (function () {
                function t(t, e, n, r, o) {
                    (this.configLoader = e), (this.urlSerializer = n), (this.urlTree = r), (this.config = o), (this.allowRedirects = !0), (this.ngModule = t.get(Ye));
                }
                return (
                    (t.prototype.apply = function () {
                        var t = this;
                        return this.expandSegmentGroup(this.ngModule, this.config, this.urlTree.root, Lh)
                            .pipe(
                                Q(function (e) {
                                    return t.createUrlTree(e, t.urlTree.queryParams, t.urlTree.fragment);
                                })
                            )
                            .pipe(
                                $u(function (e) {
                                    if (e instanceof Cp) return (t.allowRedirects = !1), t.match(e.urlTree);
                                    if (e instanceof _p) throw t.noMatchError(e);
                                    throw e;
                                })
                            );
                    }),
                    (t.prototype.match = function (t) {
                        var e = this;
                        return this.expandSegmentGroup(this.ngModule, this.config, t.root, Lh)
                            .pipe(
                                Q(function (n) {
                                    return e.createUrlTree(n, t.queryParams, t.fragment);
                                })
                            )
                            .pipe(
                                $u(function (t) {
                                    if (t instanceof _p) throw e.noMatchError(t);
                                    throw t;
                                })
                            );
                    }),
                    (t.prototype.noMatchError = function (t) {
                        return new Error("Cannot match any routes. URL Segment: '" + t.segmentGroup + "'");
                    }),
                    (t.prototype.createUrlTree = function (t, e, n) {
                        var r,
                            o = t.segments.length > 0 ? new np([], (((r = {})[Lh] = t), r)) : t;
                        return new ep(o, e, n);
                    }),
                    (t.prototype.expandSegmentGroup = function (t, e, n, r) {
                        return 0 === n.segments.length && n.hasChildren()
                            ? this.expandChildren(t, e, n).pipe(
                                  Q(function (t) {
                                      return new np([], t);
                                  })
                              )
                            : this.expandSegment(t, n, e, n.segments, r, !0);
                    }),
                    (t.prototype.expandChildren = function (t, e, n) {
                        var r = this;
                        return (function (n, o) {
                            if (0 === Object.keys(n).length) return Nu({});
                            var i = [],
                                a = [],
                                s = {};
                            return (
                                Xh(n, function (n, o) {
                                    var u,
                                        l,
                                        c = ((u = o), (l = n), r.expandSegmentGroup(t, e, l, u)).pipe(
                                            Q(function (t) {
                                                return (s[o] = t);
                                            })
                                        );
                                    o === Lh ? i.push(c) : a.push(c);
                                }),
                                Nu.apply(null, i.concat(a)).pipe(
                                    sl(),
                                    Xu(),
                                    Q(function () {
                                        return s;
                                    })
                                )
                            );
                        })(n.children);
                    }),
                    (t.prototype.expandSegment = function (t, e, n, r, o, i) {
                        var a = this;
                        return Nu.apply(void 0, h(n)).pipe(
                            Q(function (s) {
                                return a.expandSegmentAgainstRoute(t, e, n, s, r, o, i).pipe(
                                    $u(function (t) {
                                        if (t instanceof _p) return Nu(null);
                                        throw t;
                                    })
                                );
                            }),
                            sl(),
                            al(function (t) {
                                return !!t;
                            }),
                            $u(function (t, n) {
                                if (t instanceof Du || "EmptyError" === t.name) {
                                    if (a.noLeftoversInUrl(e, r, o)) return Nu(new np([], {}));
                                    throw new _p(e);
                                }
                                throw t;
                            })
                        );
                    }),
                    (t.prototype.noLeftoversInUrl = function (t, e, n) {
                        return 0 === e.length && !t.children[n];
                    }),
                    (t.prototype.expandSegmentAgainstRoute = function (t, e, n, r, o, i, a) {
                        return Pp(r) !== i ? Ep(e) : void 0 === r.redirectTo ? this.matchSegmentAgainstRoute(t, e, r, o) : a && this.allowRedirects ? this.expandSegmentAgainstRouteUsingRedirect(t, e, n, r, o, i) : Ep(e);
                    }),
                    (t.prototype.expandSegmentAgainstRouteUsingRedirect = function (t, e, n, r, o, i) {
                        return "**" === r.path ? this.expandWildCardWithParamsAgainstRouteUsingRedirect(t, n, r, i) : this.expandRegularSegmentAgainstRouteUsingRedirect(t, e, n, r, o, i);
                    }),
                    (t.prototype.expandWildCardWithParamsAgainstRouteUsingRedirect = function (t, e, n, r) {
                        var o = this,
                            i = this.applyRedirectCommands([], n.redirectTo, {});
                        return n.redirectTo.startsWith("/")
                            ? Sp(i)
                            : this.lineralizeSegments(n, i).pipe(
                                  J(function (n) {
                                      var i = new np(n, {});
                                      return o.expandSegment(t, i, e, n, r, !1);
                                  })
                              );
                    }),
                    (t.prototype.expandRegularSegmentAgainstRouteUsingRedirect = function (t, e, n, r, o, i) {
                        var a = this,
                            s = kp(e, r, o),
                            u = s.consumedSegments,
                            l = s.lastChild,
                            c = s.positionalParamSegments;
                        if (!s.matched) return Ep(e);
                        var h = this.applyRedirectCommands(u, r.redirectTo, c);
                        return r.redirectTo.startsWith("/")
                            ? Sp(h)
                            : this.lineralizeSegments(r, h).pipe(
                                  J(function (r) {
                                      return a.expandSegment(t, e, n, r.concat(o.slice(l)), i, !1);
                                  })
                              );
                    }),
                    (t.prototype.matchSegmentAgainstRoute = function (t, e, n, r) {
                        var o = this;
                        if ("**" === n.path)
                            return n.loadChildren
                                ? this.configLoader.load(t.injector, n).pipe(
                                      Q(function (t) {
                                          return (n._loadedConfig = t), new np(r, {});
                                      })
                                  )
                                : Nu(new np(r, {}));
                        var a = kp(e, n, r),
                            s = a.consumedSegments,
                            u = a.lastChild;
                        if (!a.matched) return Ep(e);
                        var c = r.slice(u);
                        return this.getChildConfig(t, n).pipe(
                            J(function (t) {
                                var n = t.module,
                                    r = t.routes,
                                    a = (function (t, e, n, r) {
                                        return n.length > 0 &&
                                            (function (t, e, n) {
                                                return r.some(function (n) {
                                                    return Ip(t, e, n) && Pp(n) !== Lh;
                                                });
                                            })(t, n)
                                            ? {
                                                  segmentGroup: Ap(
                                                      new np(
                                                          e,
                                                          (function (t, e) {
                                                              var n,
                                                                  r,
                                                                  o = {};
                                                              o[Lh] = e;
                                                              try {
                                                                  for (var i = l(t), a = i.next(); !a.done; a = i.next()) {
                                                                      var s = a.value;
                                                                      "" === s.path && Pp(s) !== Lh && (o[Pp(s)] = new np([], {}));
                                                                  }
                                                              } catch (t) {
                                                                  n = { error: t };
                                                              } finally {
                                                                  try {
                                                                      a && !a.done && (r = i.return) && r.call(i);
                                                                  } finally {
                                                                      if (n) throw n.error;
                                                                  }
                                                              }
                                                              return o;
                                                          })(r, new np(n, t.children))
                                                      )
                                                  ),
                                                  slicedSegments: [],
                                              }
                                            : 0 === n.length &&
                                              (function (t, e, n) {
                                                  return r.some(function (n) {
                                                      return Ip(t, e, n);
                                                  });
                                              })(t, n)
                                            ? {
                                                  segmentGroup: Ap(
                                                      new np(
                                                          t.segments,
                                                          (function (t, e, n, r) {
                                                              var o,
                                                                  a,
                                                                  s = {};
                                                              try {
                                                                  for (var u = l(n), c = u.next(); !c.done; c = u.next()) {
                                                                      var h = c.value;
                                                                      Ip(t, e, h) && !r[Pp(h)] && (s[Pp(h)] = new np([], {}));
                                                                  }
                                                              } catch (t) {
                                                                  o = { error: t };
                                                              } finally {
                                                                  try {
                                                                      c && !c.done && (a = u.return) && a.call(u);
                                                                  } finally {
                                                                      if (o) throw o.error;
                                                                  }
                                                              }
                                                              return i({}, r, s);
                                                          })(t, n, r, t.children)
                                                      )
                                                  ),
                                                  slicedSegments: n,
                                              }
                                            : { segmentGroup: t, slicedSegments: n };
                                    })(e, s, c, r),
                                    u = a.segmentGroup,
                                    h = a.slicedSegments;
                                return 0 === h.length && u.hasChildren()
                                    ? o.expandChildren(n, r, u).pipe(
                                          Q(function (t) {
                                              return new np(s, t);
                                          })
                                      )
                                    : 0 === r.length && 0 === h.length
                                    ? Nu(new np(s, {}))
                                    : o.expandSegment(n, u, r, h, Lh, !0).pipe(
                                          Q(function (t) {
                                              return new np(s.concat(t.segments), t.children);
                                          })
                                      );
                            })
                        );
                    }),
                    (t.prototype.getChildConfig = function (t, e) {
                        var n = this;
                        return e.children
                            ? Nu(new Bh(e.children, t))
                            : e.loadChildren
                            ? void 0 !== e._loadedConfig
                                ? Nu(e._loadedConfig)
                                : (function (t, e) {
                                      var n = e.canLoad;
                                      return n && 0 !== n.length
                                          ? $h(
                                                $(n).pipe(
                                                    Q(function (n) {
                                                        var r = t.get(n);
                                                        return Jh(r.canLoad ? r.canLoad(e) : r(e));
                                                    })
                                                )
                                            )
                                          : Nu(!0);
                                  })(t.injector, e).pipe(
                                      J(function (r) {
                                          return r
                                              ? n.configLoader.load(t.injector, e).pipe(
                                                    Q(function (t) {
                                                        return (e._loadedConfig = t), t;
                                                    })
                                                )
                                              : (function (t) {
                                                    return new O(function (e) {
                                                        return e.error(
                                                            (((n = Error("NavigationCancelingError: Cannot load children because the guard of the route \"path: '" + t.path + "'\" returned false")).ngNavigationCancelingError = !0), n)
                                                        );
                                                        var n;
                                                    });
                                                })(e);
                                      })
                                  )
                            : Nu(new Bh([], t));
                    }),
                    (t.prototype.lineralizeSegments = function (t, e) {
                        for (var n = [], r = e.root; ; ) {
                            if (((n = n.concat(r.segments)), 0 === r.numberOfChildren)) return Nu(n);
                            if (r.numberOfChildren > 1 || !r.children[Lh]) return xp(t.redirectTo);
                            r = r.children[Lh];
                        }
                    }),
                    (t.prototype.applyRedirectCommands = function (t, e, n) {
                        return this.applyRedirectCreatreUrlTree(e, this.urlSerializer.parse(e), t, n);
                    }),
                    (t.prototype.applyRedirectCreatreUrlTree = function (t, e, n, r) {
                        var o = this.createSegmentGroup(t, e.root, n, r);
                        return new ep(o, this.createQueryParams(e.queryParams, this.urlTree.queryParams), e.fragment);
                    }),
                    (t.prototype.createQueryParams = function (t, e) {
                        var n = {};
                        return (
                            Xh(t, function (t, r) {
                                if ("string" == typeof t && t.startsWith(":")) {
                                    var o = t.substring(1);
                                    n[r] = e[o];
                                } else n[r] = t;
                            }),
                            n
                        );
                    }),
                    (t.prototype.createSegmentGroup = function (t, e, n, r) {
                        var o = this,
                            i = this.createSegments(t, e.segments, n, r),
                            a = {};
                        return (
                            Xh(e.children, function (e, i) {
                                a[i] = o.createSegmentGroup(t, e, n, r);
                            }),
                            new np(i, a)
                        );
                    }),
                    (t.prototype.createSegments = function (t, e, n, r) {
                        var o = this;
                        return e.map(function (e) {
                            return e.path.startsWith(":") ? o.findPosParam(t, e, r) : o.findOrReturn(e, n);
                        });
                    }),
                    (t.prototype.findPosParam = function (t, e, n) {
                        var r = n[e.path.substring(1)];
                        if (!r) throw new Error("Cannot redirect to '" + t + "'. Cannot find '" + e.path + "'.");
                        return r;
                    }),
                    (t.prototype.findOrReturn = function (t, e) {
                        var n,
                            r,
                            o = 0;
                        try {
                            for (var i = l(e), a = i.next(); !a.done; a = i.next()) {
                                var s = a.value;
                                if (s.path === t.path) return e.splice(o), s;
                                o++;
                            }
                        } catch (t) {
                            n = { error: t };
                        } finally {
                            try {
                                a && !a.done && (r = i.return) && r.call(i);
                            } finally {
                                if (n) throw n.error;
                            }
                        }
                        return t;
                    }),
                    t
                );
            })();
            function kp(t, e, n) {
                if ("" === e.path)
                    return "full" === e.pathMatch && (t.hasChildren() || n.length > 0)
                        ? { matched: !1, consumedSegments: [], lastChild: 0, positionalParamSegments: {} }
                        : { matched: !0, consumedSegments: [], lastChild: 0, positionalParamSegments: {} };
                var r = (e.matcher || zh)(n, t, e);
                return r ? { matched: !0, consumedSegments: r.consumed, lastChild: r.consumed.length, positionalParamSegments: r.posParams } : { matched: !1, consumedSegments: [], lastChild: 0, positionalParamSegments: {} };
            }
            function Ap(t) {
                if (1 === t.numberOfChildren && t.children[Lh]) {
                    var e = t.children[Lh];
                    return new np(t.segments.concat(e.segments), e.children);
                }
                return t;
            }
            function Ip(t, e, n) {
                return (!(t.hasChildren() || e.length > 0) || "full" !== n.pathMatch) && "" === n.path && void 0 !== n.redirectTo;
            }
            function Pp(t) {
                return t.outlet || Lh;
            }
            var Np = (function () {
                function t(t) {
                    this._root = t;
                }
                return (
                    Object.defineProperty(t.prototype, "root", {
                        get: function () {
                            return this._root.value;
                        },
                        enumerable: !0,
                        configurable: !0,
                    }),
                    (t.prototype.parent = function (t) {
                        var e = this.pathFromRoot(t);
                        return e.length > 1 ? e[e.length - 2] : null;
                    }),
                    (t.prototype.children = function (t) {
                        var e = Rp(t, this._root);
                        return e
                            ? e.children.map(function (t) {
                                  return t.value;
                              })
                            : [];
                    }),
                    (t.prototype.firstChild = function (t) {
                        var e = Rp(t, this._root);
                        return e && e.children.length > 0 ? e.children[0].value : null;
                    }),
                    (t.prototype.siblings = function (t) {
                        var e = Dp(t, this._root);
                        return e.length < 2
                            ? []
                            : e[e.length - 2].children
                                  .map(function (t) {
                                      return t.value;
                                  })
                                  .filter(function (e) {
                                      return e !== t;
                                  });
                    }),
                    (t.prototype.pathFromRoot = function (t) {
                        return Dp(t, this._root).map(function (t) {
                            return t.value;
                        });
                    }),
                    t
                );
            })();
            function Rp(t, e) {
                var n, r;
                if (t === e.value) return e;
                try {
                    for (var o = l(e.children), i = o.next(); !i.done; i = o.next()) {
                        var a = Rp(t, i.value);
                        if (a) return a;
                    }
                } catch (t) {
                    n = { error: t };
                } finally {
                    try {
                        i && !i.done && (r = o.return) && r.call(o);
                    } finally {
                        if (n) throw n.error;
                    }
                }
                return null;
            }
            function Dp(t, e) {
                var n, r;
                if (t === e.value) return [e];
                try {
                    for (var o = l(e.children), i = o.next(); !i.done; i = o.next()) {
                        var a = Dp(t, i.value);
                        if (a.length) return a.unshift(e), a;
                    }
                } catch (t) {
                    n = { error: t };
                } finally {
                    try {
                        i && !i.done && (r = o.return) && r.call(o);
                    } finally {
                        if (n) throw n.error;
                    }
                }
                return [];
            }
            var Op = (function () {
                function t(t, e) {
                    (this.value = t), (this.children = e);
                }
                return (
                    (t.prototype.toString = function () {
                        return "TreeNode(" + this.value + ")";
                    }),
                    t
                );
            })();
            function Mp(t) {
                var e = {};
                return (
                    t &&
                        t.children.forEach(function (t) {
                            return (e[t.value.outlet] = t);
                        }),
                    e
                );
            }
            var Vp = (function (t) {
                function e(e, n) {
                    var r = t.call(this, e) || this;
                    return (r.snapshot = n), zp(r, e), r;
                }
                return (
                    o(e, t),
                    (e.prototype.toString = function () {
                        return this.snapshot.toString();
                    }),
                    e
                );
            })(Np);
            function jp(t, e) {
                var n = (function (t, e) {
                        var n = new Hp([], {}, {}, "", {}, Lh, e, null, t.root, -1, {});
                        return new Fp("", new Op(n, []));
                    })(t, e),
                    r = new Ou([new rp("", {})]),
                    o = new Ou({}),
                    i = new Ou({}),
                    a = new Ou({}),
                    s = new Ou(""),
                    u = new Up(r, o, a, s, i, Lh, e, n.root);
                return (u.snapshot = n.root), new Vp(new Op(u, []), n);
            }
            var Up = (function () {
                function t(t, e, n, r, o, i, a, s) {
                    (this.url = t), (this.params = e), (this.queryParams = n), (this.fragment = r), (this.data = o), (this.outlet = i), (this.component = a), (this._futureSnapshot = s);
                }
                return (
                    Object.defineProperty(t.prototype, "routeConfig", {
                        get: function () {
                            return this._futureSnapshot.routeConfig;
                        },
                        enumerable: !0,
                        configurable: !0,
                    }),
                    Object.defineProperty(t.prototype, "root", {
                        get: function () {
                            return this._routerState.root;
                        },
                        enumerable: !0,
                        configurable: !0,
                    }),
                    Object.defineProperty(t.prototype, "parent", {
                        get: function () {
                            return this._routerState.parent(this);
                        },
                        enumerable: !0,
                        configurable: !0,
                    }),
                    Object.defineProperty(t.prototype, "firstChild", {
                        get: function () {
                            return this._routerState.firstChild(this);
                        },
                        enumerable: !0,
                        configurable: !0,
                    }),
                    Object.defineProperty(t.prototype, "children", {
                        get: function () {
                            return this._routerState.children(this);
                        },
                        enumerable: !0,
                        configurable: !0,
                    }),
                    Object.defineProperty(t.prototype, "pathFromRoot", {
                        get: function () {
                            return this._routerState.pathFromRoot(this);
                        },
                        enumerable: !0,
                        configurable: !0,
                    }),
                    Object.defineProperty(t.prototype, "paramMap", {
                        get: function () {
                            return (
                                this._paramMap ||
                                    (this._paramMap = this.params.pipe(
                                        Q(function (t) {
                                            return Fh(t);
                                        })
                                    )),
                                this._paramMap
                            );
                        },
                        enumerable: !0,
                        configurable: !0,
                    }),
                    Object.defineProperty(t.prototype, "queryParamMap", {
                        get: function () {
                            return (
                                this._queryParamMap ||
                                    (this._queryParamMap = this.queryParams.pipe(
                                        Q(function (t) {
                                            return Fh(t);
                                        })
                                    )),
                                this._queryParamMap
                            );
                        },
                        enumerable: !0,
                        configurable: !0,
                    }),
                    (t.prototype.toString = function () {
                        return this.snapshot ? this.snapshot.toString() : "Future(" + this._futureSnapshot + ")";
                    }),
                    t
                );
            })();
            function Lp(t, e) {
                void 0 === e && (e = "emptyOnly");
                var n = t.pathFromRoot,
                    r = 0;
                if ("always" !== e)
                    for (r = n.length - 1; r >= 1; ) {
                        var o = n[r],
                            a = n[r - 1];
                        if (o.routeConfig && "" === o.routeConfig.path) r--;
                        else {
                            if (a.component) break;
                            r--;
                        }
                    }
                return (function (t) {
                    return t.reduce(
                        function (t, e) {
                            return { params: i({}, t.params, e.params), data: i({}, t.data, e.data), resolve: i({}, t.resolve, e._resolvedData) };
                        },
                        { params: {}, data: {}, resolve: {} }
                    );
                })(n.slice(r));
            }
            var Hp = (function () {
                    function t(t, e, n, r, o, i, a, s, u, l, c) {
                        (this.url = t),
                            (this.params = e),
                            (this.queryParams = n),
                            (this.fragment = r),
                            (this.data = o),
                            (this.outlet = i),
                            (this.component = a),
                            (this.routeConfig = s),
                            (this._urlSegment = u),
                            (this._lastPathIndex = l),
                            (this._resolve = c);
                    }
                    return (
                        Object.defineProperty(t.prototype, "root", {
                            get: function () {
                                return this._routerState.root;
                            },
                            enumerable: !0,
                            configurable: !0,
                        }),
                        Object.defineProperty(t.prototype, "parent", {
                            get: function () {
                                return this._routerState.parent(this);
                            },
                            enumerable: !0,
                            configurable: !0,
                        }),
                        Object.defineProperty(t.prototype, "firstChild", {
                            get: function () {
                                return this._routerState.firstChild(this);
                            },
                            enumerable: !0,
                            configurable: !0,
                        }),
                        Object.defineProperty(t.prototype, "children", {
                            get: function () {
                                return this._routerState.children(this);
                            },
                            enumerable: !0,
                            configurable: !0,
                        }),
                        Object.defineProperty(t.prototype, "pathFromRoot", {
                            get: function () {
                                return this._routerState.pathFromRoot(this);
                            },
                            enumerable: !0,
                            configurable: !0,
                        }),
                        Object.defineProperty(t.prototype, "paramMap", {
                            get: function () {
                                return this._paramMap || (this._paramMap = Fh(this.params)), this._paramMap;
                            },
                            enumerable: !0,
                            configurable: !0,
                        }),
                        Object.defineProperty(t.prototype, "queryParamMap", {
                            get: function () {
                                return this._queryParamMap || (this._queryParamMap = Fh(this.queryParams)), this._queryParamMap;
                            },
                            enumerable: !0,
                            configurable: !0,
                        }),
                        (t.prototype.toString = function () {
                            return (
                                "Route(url:'" +
                                this.url
                                    .map(function (t) {
                                        return t.toString();
                                    })
                                    .join("/") +
                                "', path:'" +
                                (this.routeConfig ? this.routeConfig.path : "") +
                                "')"
                            );
                        }),
                        t
                    );
                })(),
                Fp = (function (t) {
                    function e(e, n) {
                        var r = t.call(this, n) || this;
                        return (r.url = e), zp(r, n), r;
                    }
                    return (
                        o(e, t),
                        (e.prototype.toString = function () {
                            return Bp(this._root);
                        }),
                        e
                    );
                })(Np);
            function zp(t, e) {
                (e.value._routerState = t),
                    e.children.forEach(function (e) {
                        return zp(t, e);
                    });
            }
            function Bp(t) {
                var e = t.children.length > 0 ? " { " + t.children.map(Bp).join(", ") + " } " : "";
                return "" + t.value + e;
            }
            function qp(t) {
                if (t.snapshot) {
                    var e = t.snapshot,
                        n = t._futureSnapshot;
                    (t.snapshot = n),
                        Qh(e.queryParams, n.queryParams) || t.queryParams.next(n.queryParams),
                        e.fragment !== n.fragment && t.fragment.next(n.fragment),
                        Qh(e.params, n.params) || t.params.next(n.params),
                        (function (t, e) {
                            if (t.length !== e.length) return !1;
                            for (var n = 0; n < t.length; ++n) if (!Qh(t[n], e[n])) return !1;
                            return !0;
                        })(e.url, n.url) || t.url.next(n.url),
                        Qh(e.data, n.data) || t.data.next(n.data);
                } else (t.snapshot = t._futureSnapshot), t.data.next(t._futureSnapshot.data);
            }
            function Gp(t, e) {
                var n, r;
                return (
                    Qh(t.params, e.params) &&
                    op((n = t.url), (r = e.url)) &&
                    n.every(function (t, e) {
                        return Qh(t.parameters, r[e].parameters);
                    }) &&
                    !(!t.parent != !e.parent) &&
                    (!t.parent || Gp(t.parent, e.parent))
                );
            }
            function Zp(t) {
                return "object" == typeof t && null != t && !t.outlets && !t.segmentPath;
            }
            function Wp(t, e, n, r, o) {
                var i = {};
                return (
                    r &&
                        Xh(r, function (t, e) {
                            i[e] = Array.isArray(t)
                                ? t.map(function (t) {
                                      return "" + t;
                                  })
                                : "" + t;
                        }),
                    new ep(
                        n.root === t
                            ? e
                            : (function t(e, n, r) {
                                  var o = {};
                                  return (
                                      Xh(e.children, function (e, i) {
                                          o[i] = e === n ? r : t(e, n, r);
                                      }),
                                      new np(e.segments, o)
                                  );
                              })(n.root, t, e),
                        i,
                        o
                    )
                );
            }
            var Qp = (function () {
                    function t(t, e, n) {
                        if (((this.isAbsolute = t), (this.numberOfDoubleDots = e), (this.commands = n), t && n.length > 0 && Zp(n[0]))) throw new Error("Root segment cannot have matrix parameters");
                        var r = n.find(function (t) {
                            return "object" == typeof t && null != t && t.outlets;
                        });
                        if (r && r !== Kh(n)) throw new Error("{outlets:{}} has to be the last command");
                    }
                    return (
                        (t.prototype.toRoot = function () {
                            return this.isAbsolute && 1 === this.commands.length && "/" == this.commands[0];
                        }),
                        t
                    );
                })(),
                Yp = function (t, e, n) {
                    (this.segmentGroup = t), (this.processChildren = e), (this.index = n);
                };
            function Kp(t) {
                return "object" == typeof t && null != t && t.outlets ? t.outlets[Lh] : "" + t;
            }
            function Xp(t, e, n) {
                if ((t || (t = new np([], {})), 0 === t.segments.length && t.hasChildren())) return $p(t, e, n);
                var r = (function (t, e, n) {
                        for (var r = 0, o = e, i = { match: !1, pathIndex: 0, commandIndex: 0 }; o < t.segments.length; ) {
                            if (r >= n.length) return i;
                            var a = t.segments[o],
                                s = Kp(n[r]),
                                u = r < n.length - 1 ? n[r + 1] : null;
                            if (o > 0 && void 0 === s) break;
                            if (s && u && "object" == typeof u && void 0 === u.outlets) {
                                if (!nf(s, u, a)) return i;
                                r += 2;
                            } else {
                                if (!nf(s, {}, a)) return i;
                                r++;
                            }
                            o++;
                        }
                        return { match: !0, pathIndex: o, commandIndex: r };
                    })(t, e, n),
                    o = n.slice(r.commandIndex);
                if (r.match && r.pathIndex < t.segments.length) {
                    var i = new np(t.segments.slice(0, r.pathIndex), {});
                    return (i.children[Lh] = new np(t.segments.slice(r.pathIndex), t.children)), $p(i, 0, o);
                }
                return r.match && 0 === o.length ? new np(t.segments, {}) : r.match && !t.hasChildren() ? Jp(t, e, n) : r.match ? $p(t, 0, o) : Jp(t, e, n);
            }
            function $p(t, e, n) {
                if (0 === n.length) return new np(t.segments, {});
                var r = (function (t) {
                        var e, n;
                        return "object" != typeof t[0] ? (((e = {})[Lh] = t), e) : void 0 === t[0].outlets ? (((n = {})[Lh] = t), n) : t[0].outlets;
                    })(n),
                    o = {};
                return (
                    Xh(r, function (n, r) {
                        null !== n && (o[r] = Xp(t.children[r], e, n));
                    }),
                    Xh(t.children, function (t, e) {
                        void 0 === r[e] && (o[e] = t);
                    }),
                    new np(t.segments, o)
                );
            }
            function Jp(t, e, n) {
                for (var r = t.segments.slice(0, e), o = 0; o < n.length; ) {
                    if ("object" == typeof n[o] && void 0 !== n[o].outlets) {
                        var i = tf(n[o].outlets);
                        return new np(r, i);
                    }
                    if (0 === o && Zp(n[0])) r.push(new rp(t.segments[e].path, n[0])), o++;
                    else {
                        var a = Kp(n[o]),
                            s = o < n.length - 1 ? n[o + 1] : null;
                        a && s && Zp(s) ? (r.push(new rp(a, ef(s))), (o += 2)) : (r.push(new rp(a, {})), o++);
                    }
                }
                return new np(r, {});
            }
            function tf(t) {
                var e = {};
                return (
                    Xh(t, function (t, n) {
                        null !== t && (e[n] = Jp(new np([], {}), 0, t));
                    }),
                    e
                );
            }
            function ef(t) {
                var e = {};
                return (
                    Xh(t, function (t, n) {
                        return (e[n] = "" + t);
                    }),
                    e
                );
            }
            function nf(t, e, n) {
                return t == n.path && Qh(e, n.parameters);
            }
            var rf = function (t) {
                    (this.path = t), (this.route = this.path[this.path.length - 1]);
                },
                of = function (t, e) {
                    (this.component = t), (this.route = e);
                },
                af = (function () {
                    function t(t, e, n, r) {
                        (this.future = t), (this.curr = e), (this.moduleInjector = n), (this.forwardEvent = r), (this.canActivateChecks = []), (this.canDeactivateChecks = []);
                    }
                    return (
                        (t.prototype.initialize = function (t) {
                            var e = this.future._root;
                            this.setupChildRouteGuards(e, this.curr ? this.curr._root : null, t, [e.value]);
                        }),
                        (t.prototype.checkGuards = function () {
                            var t = this;
                            return this.isDeactivating() || this.isActivating()
                                ? this.runCanDeactivateChecks().pipe(
                                      J(function (e) {
                                          return e ? t.runCanActivateChecks() : Nu(!1);
                                      })
                                  )
                                : Nu(!0);
                        }),
                        (t.prototype.resolveData = function (t) {
                            var e = this;
                            return this.isActivating()
                                ? $(this.canActivateChecks).pipe(
                                      Mu(function (n) {
                                          return e.runResolve(n.route, t);
                                      }),
                                      (function (t, e) {
                                          return arguments.length >= 2
                                              ? function (n) {
                                                    return R(ul(t, e), Fu(1), Qu(e))(n);
                                                }
                                              : function (e) {
                                                    return R(
                                                        ul(function (e, n, r) {
                                                            return t(e, n, r + 1);
                                                        }),
                                                        Fu(1)
                                                    )(e);
                                                };
                                      })(function (t, e) {
                                          return t;
                                      })
                                  )
                                : Nu(null);
                        }),
                        (t.prototype.isDeactivating = function () {
                            return 0 !== this.canDeactivateChecks.length;
                        }),
                        (t.prototype.isActivating = function () {
                            return 0 !== this.canActivateChecks.length;
                        }),
                        (t.prototype.setupChildRouteGuards = function (t, e, n, r) {
                            var o = this,
                                i = Mp(e);
                            t.children.forEach(function (t) {
                                o.setupRouteGuards(t, i[t.value.outlet], n, r.concat([t.value])), delete i[t.value.outlet];
                            }),
                                Xh(i, function (t, e) {
                                    return o.deactivateRouteAndItsChildren(t, n.getContext(e));
                                });
                        }),
                        (t.prototype.setupRouteGuards = function (t, e, n, r) {
                            var o = t.value,
                                i = e ? e.value : null,
                                a = n ? n.getContext(t.value.outlet) : null;
                            if (i && o.routeConfig === i.routeConfig) {
                                var s = this.shouldRunGuardsAndResolvers(i, o, o.routeConfig.runGuardsAndResolvers);
                                s ? this.canActivateChecks.push(new rf(r)) : ((o.data = i.data), (o._resolvedData = i._resolvedData)),
                                    this.setupChildRouteGuards(t, e, o.component ? (a ? a.children : null) : n, r),
                                    s && this.canDeactivateChecks.push(new of(a.outlet.component, i));
                            } else i && this.deactivateRouteAndItsChildren(e, a), this.canActivateChecks.push(new rf(r)), this.setupChildRouteGuards(t, null, o.component ? (a ? a.children : null) : n, r);
                        }),
                        (t.prototype.shouldRunGuardsAndResolvers = function (t, e, n) {
                            switch (n) {
                                case "always":
                                    return !0;
                                case "paramsOrQueryParamsChange":
                                    return !Gp(t, e) || !Qh(t.queryParams, e.queryParams);
                                case "paramsChange":
                                default:
                                    return !Gp(t, e);
                            }
                        }),
                        (t.prototype.deactivateRouteAndItsChildren = function (t, e) {
                            var n = this,
                                r = Mp(t),
                                o = t.value;
                            Xh(r, function (t, r) {
                                n.deactivateRouteAndItsChildren(t, o.component ? (e ? e.children.getContext(r) : null) : e);
                            }),
                                this.canDeactivateChecks.push(new of(o.component && e && e.outlet && e.outlet.isActivated ? e.outlet.component : null, o));
                        }),
                        (t.prototype.runCanDeactivateChecks = function () {
                            var t = this;
                            return $(this.canDeactivateChecks).pipe(
                                J(function (e) {
                                    return t.runCanDeactivate(e.component, e.route);
                                }),
                                el(function (t) {
                                    return !0 === t;
                                })
                            );
                        }),
                        (t.prototype.runCanActivateChecks = function () {
                            var t = this;
                            return $(this.canActivateChecks).pipe(
                                Mu(function (e) {
                                    return $h($([t.fireChildActivationStart(e.route.parent), t.fireActivationStart(e.route), t.runCanActivateChild(e.path), t.runCanActivate(e.route)]));
                                }),
                                el(function (t) {
                                    return !0 === t;
                                })
                            );
                        }),
                        (t.prototype.fireActivationStart = function (t) {
                            return null !== t && this.forwardEvent && this.forwardEvent(new Mh(t)), Nu(!0);
                        }),
                        (t.prototype.fireChildActivationStart = function (t) {
                            return null !== t && this.forwardEvent && this.forwardEvent(new Dh(t)), Nu(!0);
                        }),
                        (t.prototype.runCanActivate = function (t) {
                            var e = this,
                                n = t.routeConfig ? t.routeConfig.canActivate : null;
                            return n && 0 !== n.length
                                ? $h(
                                      $(n).pipe(
                                          Q(function (n) {
                                              var r = e.getToken(n, t);
                                              return Jh(r.canActivate ? r.canActivate(t, e.future) : r(t, e.future)).pipe(al());
                                          })
                                      )
                                  )
                                : Nu(!0);
                        }),
                        (t.prototype.runCanActivateChild = function (t) {
                            var e = this,
                                n = t[t.length - 1];
                            return $h(
                                $(
                                    t
                                        .slice(0, t.length - 1)
                                        .reverse()
                                        .map(function (t) {
                                            return e.extractCanActivateChild(t);
                                        })
                                        .filter(function (t) {
                                            return null !== t;
                                        })
                                ).pipe(
                                    Q(function (t) {
                                        return $h(
                                            $(t.guards).pipe(
                                                Q(function (r) {
                                                    var o = e.getToken(r, t.node);
                                                    return Jh(o.canActivateChild ? o.canActivateChild(n, e.future) : o(n, e.future)).pipe(al());
                                                })
                                            )
                                        );
                                    })
                                )
                            );
                        }),
                        (t.prototype.extractCanActivateChild = function (t) {
                            var e = t.routeConfig ? t.routeConfig.canActivateChild : null;
                            return e && 0 !== e.length ? { node: t, guards: e } : null;
                        }),
                        (t.prototype.runCanDeactivate = function (t, e) {
                            var n = this,
                                r = e && e.routeConfig ? e.routeConfig.canDeactivate : null;
                            return r && 0 !== r.length
                                ? $(r)
                                      .pipe(
                                          J(function (r) {
                                              var o = n.getToken(r, e);
                                              return Jh(o.canDeactivate ? o.canDeactivate(t, e, n.curr, n.future) : o(t, e, n.curr, n.future)).pipe(al());
                                          })
                                      )
                                      .pipe(
                                          el(function (t) {
                                              return !0 === t;
                                          })
                                      )
                                : Nu(!0);
                        }),
                        (t.prototype.runResolve = function (t, e) {
                            return this.resolveNode(t._resolve, t).pipe(
                                Q(function (n) {
                                    return (t._resolvedData = n), (t.data = i({}, t.data, Lp(t, e).resolve)), null;
                                })
                            );
                        }),
                        (t.prototype.resolveNode = function (t, e) {
                            var n = this,
                                r = Object.keys(t);
                            if (0 === r.length) return Nu({});
                            if (1 === r.length) {
                                var o = r[0];
                                return this.getResolver(t[o], e).pipe(
                                    Q(function (t) {
                                        var e;
                                        return ((e = {})[o] = t), e;
                                    })
                                );
                            }
                            var i = {};
                            return $(r)
                                .pipe(
                                    J(function (r) {
                                        return n.getResolver(t[r], e).pipe(
                                            Q(function (t) {
                                                return (i[r] = t), t;
                                            })
                                        );
                                    })
                                )
                                .pipe(
                                    Xu(),
                                    Q(function () {
                                        return i;
                                    })
                                );
                        }),
                        (t.prototype.getResolver = function (t, e) {
                            var n = this.getToken(t, e);
                            return Jh(n.resolve ? n.resolve(e, this.future) : n(e, this.future));
                        }),
                        (t.prototype.getToken = function (t, e) {
                            var n = (function (t) {
                                if (!t) return null;
                                for (var e = t.parent; e; e = e.parent) {
                                    var n = e.routeConfig;
                                    if (n && n._loadedConfig) return n._loadedConfig;
                                }
                                return null;
                            })(e);
                            return (n ? n.module.injector : this.moduleInjector).get(t);
                        }),
                        t
                    );
                })(),
                sf = function () {},
                uf = (function () {
                    function t(t, e, n, r, o, i) {
                        (this.rootComponentType = t), (this.config = e), (this.urlTree = n), (this.url = r), (this.paramsInheritanceStrategy = o), (this.relativeLinkResolution = i);
                    }
                    return (
                        (t.prototype.recognize = function () {
                            try {
                                var t = hf(this.urlTree.root, [], [], this.config, this.relativeLinkResolution).segmentGroup,
                                    e = this.processSegmentGroup(this.config, t, Lh),
                                    n = new Hp([], Object.freeze({}), Object.freeze(i({}, this.urlTree.queryParams)), this.urlTree.fragment, {}, Lh, this.rootComponentType, null, this.urlTree.root, -1, {}),
                                    r = new Op(n, e),
                                    o = new Fp(this.url, r);
                                return this.inheritParamsAndData(o._root), Nu(o);
                            } catch (t) {
                                return new O(function (e) {
                                    return e.error(t);
                                });
                            }
                        }),
                        (t.prototype.inheritParamsAndData = function (t) {
                            var e = this,
                                n = t.value,
                                r = Lp(n, this.paramsInheritanceStrategy);
                            (n.params = Object.freeze(r.params)),
                                (n.data = Object.freeze(r.data)),
                                t.children.forEach(function (t) {
                                    return e.inheritParamsAndData(t);
                                });
                        }),
                        (t.prototype.processSegmentGroup = function (t, e, n) {
                            return 0 === e.segments.length && e.hasChildren() ? this.processChildren(t, e) : this.processSegment(t, e, e.segments, n);
                        }),
                        (t.prototype.processChildren = function (t, e) {
                            var n,
                                r = this,
                                o = ip(e, function (e, n) {
                                    return r.processSegmentGroup(t, e, n);
                                });
                            return (
                                (n = {}),
                                o.forEach(function (t) {
                                    var e = n[t.value.outlet];
                                    if (e) {
                                        var r = e.url
                                                .map(function (t) {
                                                    return t.toString();
                                                })
                                                .join("/"),
                                            o = t.value.url
                                                .map(function (t) {
                                                    return t.toString();
                                                })
                                                .join("/");
                                        throw new Error("Two segments cannot have the same outlet name: '" + r + "' and '" + o + "'.");
                                    }
                                    n[t.value.outlet] = t.value;
                                }),
                                o.sort(function (t, e) {
                                    return t.value.outlet === Lh ? -1 : e.value.outlet === Lh ? 1 : t.value.outlet.localeCompare(e.value.outlet);
                                }),
                                o
                            );
                        }),
                        (t.prototype.processSegment = function (t, e, n, r) {
                            var o, i;
                            try {
                                for (var a = l(t), s = a.next(); !s.done; s = a.next()) {
                                    var u = s.value;
                                    try {
                                        return this.processSegmentAgainstRoute(u, e, n, r);
                                    } catch (t) {
                                        if (!(t instanceof sf)) throw t;
                                    }
                                }
                            } catch (t) {
                                o = { error: t };
                            } finally {
                                try {
                                    s && !s.done && (i = a.return) && i.call(a);
                                } finally {
                                    if (o) throw o.error;
                                }
                            }
                            if (this.noLeftoversInUrl(e, n, r)) return [];
                            throw new sf();
                        }),
                        (t.prototype.noLeftoversInUrl = function (t, e, n) {
                            return 0 === e.length && !t.children[n];
                        }),
                        (t.prototype.processSegmentAgainstRoute = function (t, e, n, r) {
                            if (t.redirectTo) throw new sf();
                            if ((t.outlet || Lh) !== r) throw new sf();
                            var o,
                                a = [],
                                s = [];
                            if ("**" === t.path) {
                                var u = n.length > 0 ? Kh(n).parameters : {};
                                o = new Hp(n, u, Object.freeze(i({}, this.urlTree.queryParams)), this.urlTree.fragment, df(t), r, t.component, t, lf(e), cf(e) + n.length, vf(t));
                            } else {
                                var l = (function (t, e, n) {
                                    if ("" === e.path) {
                                        if ("full" === e.pathMatch && (t.hasChildren() || n.length > 0)) throw new sf();
                                        return { consumedSegments: [], lastChild: 0, parameters: {} };
                                    }
                                    var r = (e.matcher || zh)(n, t, e);
                                    if (!r) throw new sf();
                                    var o = {};
                                    Xh(r.posParams, function (t, e) {
                                        o[e] = t.path;
                                    });
                                    var a = r.consumed.length > 0 ? i({}, o, r.consumed[r.consumed.length - 1].parameters) : o;
                                    return { consumedSegments: r.consumed, lastChild: r.consumed.length, parameters: a };
                                })(e, t, n);
                                (a = l.consumedSegments),
                                    (s = n.slice(l.lastChild)),
                                    (o = new Hp(a, l.parameters, Object.freeze(i({}, this.urlTree.queryParams)), this.urlTree.fragment, df(t), r, t.component, t, lf(e), cf(e) + a.length, vf(t)));
                            }
                            var c = (function (t) {
                                    return t.children ? t.children : t.loadChildren ? t._loadedConfig.routes : [];
                                })(t),
                                h = hf(e, a, s, c, this.relativeLinkResolution),
                                p = h.segmentGroup,
                                f = h.slicedSegments;
                            if (0 === f.length && p.hasChildren()) {
                                var d = this.processChildren(c, p);
                                return [new Op(o, d)];
                            }
                            if (0 === c.length && 0 === f.length) return [new Op(o, [])];
                            var v = this.processSegment(c, p, f, Lh);
                            return [new Op(o, v)];
                        }),
                        t
                    );
                })();
            function lf(t) {
                for (var e = t; e._sourceSegment; ) e = e._sourceSegment;
                return e;
            }
            function cf(t) {
                for (var e = t, n = e._segmentIndexShift ? e._segmentIndexShift : 0; e._sourceSegment; ) n += (e = e._sourceSegment)._segmentIndexShift ? e._segmentIndexShift : 0;
                return n - 1;
            }
            function hf(t, e, n, r, o) {
                if (
                    n.length > 0 &&
                    (function (t, e, n) {
                        return r.some(function (n) {
                            return pf(t, e, n) && ff(n) !== Lh;
                        });
                    })(t, n)
                ) {
                    var a = new np(
                        e,
                        (function (t, e, n, r) {
                            var o,
                                i,
                                a = {};
                            (a[Lh] = r), (r._sourceSegment = t), (r._segmentIndexShift = e.length);
                            try {
                                for (var s = l(n), u = s.next(); !u.done; u = s.next()) {
                                    var c = u.value;
                                    if ("" === c.path && ff(c) !== Lh) {
                                        var h = new np([], {});
                                        (h._sourceSegment = t), (h._segmentIndexShift = e.length), (a[ff(c)] = h);
                                    }
                                }
                            } catch (t) {
                                o = { error: t };
                            } finally {
                                try {
                                    u && !u.done && (i = s.return) && i.call(s);
                                } finally {
                                    if (o) throw o.error;
                                }
                            }
                            return a;
                        })(t, e, r, new np(n, t.children))
                    );
                    return (a._sourceSegment = t), (a._segmentIndexShift = e.length), { segmentGroup: a, slicedSegments: [] };
                }
                if (
                    0 === n.length &&
                    (function (t, e, n) {
                        return r.some(function (n) {
                            return pf(t, e, n);
                        });
                    })(t, n)
                ) {
                    var s = new np(
                        t.segments,
                        (function (t, e, n, r, o, a) {
                            var s,
                                u,
                                c = {};
                            try {
                                for (var h = l(r), p = h.next(); !p.done; p = h.next()) {
                                    var f = p.value;
                                    if (pf(t, n, f) && !o[ff(f)]) {
                                        var d = new np([], {});
                                        (d._sourceSegment = t), (d._segmentIndexShift = "legacy" === a ? t.segments.length : e.length), (c[ff(f)] = d);
                                    }
                                }
                            } catch (t) {
                                s = { error: t };
                            } finally {
                                try {
                                    p && !p.done && (u = h.return) && u.call(h);
                                } finally {
                                    if (s) throw s.error;
                                }
                            }
                            return i({}, o, c);
                        })(t, e, n, r, t.children, o)
                    );
                    return (s._sourceSegment = t), (s._segmentIndexShift = e.length), { segmentGroup: s, slicedSegments: n };
                }
                var u = new np(t.segments, t.children);
                return (u._sourceSegment = t), (u._segmentIndexShift = e.length), { segmentGroup: u, slicedSegments: n };
            }
            function pf(t, e, n) {
                return (!(t.hasChildren() || e.length > 0) || "full" !== n.pathMatch) && "" === n.path && void 0 === n.redirectTo;
            }
            function ff(t) {
                return t.outlet || Lh;
            }
            function df(t) {
                return t.data || {};
            }
            function vf(t) {
                return t.resolve || {};
            }
            var yf = (function () {
                    function t() {}
                    return (
                        (t.prototype.shouldDetach = function (t) {
                            return !1;
                        }),
                        (t.prototype.store = function (t, e) {}),
                        (t.prototype.shouldAttach = function (t) {
                            return !1;
                        }),
                        (t.prototype.retrieve = function (t) {
                            return null;
                        }),
                        (t.prototype.shouldReuseRoute = function (t, e) {
                            return t.routeConfig === e.routeConfig;
                        }),
                        t
                    );
                })(),
                gf = new mt("ROUTES"),
                mf = (function () {
                    function t(t, e, n, r) {
                        (this.loader = t), (this.compiler = e), (this.onLoadStartListener = n), (this.onLoadEndListener = r);
                    }
                    return (
                        (t.prototype.load = function (t, e) {
                            var n = this;
                            return (
                                this.onLoadStartListener && this.onLoadStartListener(e),
                                this.loadModuleFactory(e.loadChildren).pipe(
                                    Q(function (r) {
                                        n.onLoadEndListener && n.onLoadEndListener(e);
                                        var o = r.create(t);
                                        return new Bh(Yh(o.injector.get(gf)).map(Wh), o);
                                    })
                                )
                            );
                        }),
                        (t.prototype.loadModuleFactory = function (t) {
                            var e = this;
                            return "string" == typeof t
                                ? $(this.loader.load(t))
                                : Jh(t()).pipe(
                                      J(function (t) {
                                          return t instanceof Ke ? Nu(t) : $(e.compiler.compileModuleAsync(t));
                                      })
                                  );
                        }),
                        t
                    );
                })(),
                bf = (function () {
                    function t() {}
                    return (
                        (t.prototype.shouldProcessUrl = function (t) {
                            return !0;
                        }),
                        (t.prototype.extract = function (t) {
                            return t;
                        }),
                        (t.prototype.merge = function (t, e) {
                            return t;
                        }),
                        t
                    );
                })();
            function wf(t) {
                throw t;
            }
            function _f(t, e, n) {
                return e.parse("/");
            }
            function Cf(t, e) {
                return Nu(null);
            }
            var Ef = (function () {
                    function t(t, e, n, r, o, i, a, s) {
                        var u = this;
                        (this.rootComponentType = t),
                            (this.urlSerializer = e),
                            (this.rootContexts = n),
                            (this.location = r),
                            (this.config = s),
                            (this.navigations = new Ou(null)),
                            (this.navigationId = 0),
                            (this.isNgZoneEnabled = !1),
                            (this.events = new ut()),
                            (this.errorHandler = wf),
                            (this.malformedUriErrorHandler = _f),
                            (this.navigated = !1),
                            (this.lastSuccessfulId = -1),
                            (this.hooks = { beforePreactivation: Cf, afterPreactivation: Cf }),
                            (this.urlHandlingStrategy = new bf()),
                            (this.routeReuseStrategy = new yf()),
                            (this.onSameUrlNavigation = "ignore"),
                            (this.paramsInheritanceStrategy = "emptyOnly"),
                            (this.urlUpdateStrategy = "deferred"),
                            (this.relativeLinkResolution = "legacy"),
                            (this.ngModule = o.get(Ye)),
                            (this.console = o.get(Me));
                        var l = o.get(nn);
                        (this.isNgZoneEnabled = l instanceof nn),
                            this.resetConfig(s),
                            (this.currentUrlTree = new ep(new np([], {}), {}, null)),
                            (this.rawUrlTree = this.currentUrlTree),
                            (this.configLoader = new mf(
                                i,
                                a,
                                function (t) {
                                    return u.triggerEvent(new Nh(t));
                                },
                                function (t) {
                                    return u.triggerEvent(new Rh(t));
                                }
                            )),
                            (this.routerState = jp(this.currentUrlTree, this.rootComponentType)),
                            this.processNavigations();
                    }
                    return (
                        (t.prototype.resetRootComponentType = function (t) {
                            (this.rootComponentType = t), (this.routerState.root.component = this.rootComponentType);
                        }),
                        (t.prototype.initialNavigation = function () {
                            this.setUpLocationChangeListener(), 0 === this.navigationId && this.navigateByUrl(this.location.path(!0), { replaceUrl: !0 });
                        }),
                        (t.prototype.setUpLocationChangeListener = function () {
                            var t = this;
                            this.locationSubscription ||
                                (this.locationSubscription = this.location.subscribe(function (e) {
                                    var n = t.parseUrl(e.url),
                                        r = "popstate" === e.type ? "popstate" : "hashchange",
                                        o = e.state && e.state.navigationId ? { navigationId: e.state.navigationId } : null;
                                    setTimeout(function () {
                                        t.scheduleNavigation(n, r, o, { replaceUrl: !0 });
                                    }, 0);
                                }));
                        }),
                        Object.defineProperty(t.prototype, "url", {
                            get: function () {
                                return this.serializeUrl(this.currentUrlTree);
                            },
                            enumerable: !0,
                            configurable: !0,
                        }),
                        (t.prototype.triggerEvent = function (t) {
                            this.events.next(t);
                        }),
                        (t.prototype.resetConfig = function (t) {
                            qh(t), (this.config = t.map(Wh)), (this.navigated = !1), (this.lastSuccessfulId = -1);
                        }),
                        (t.prototype.ngOnDestroy = function () {
                            this.dispose();
                        }),
                        (t.prototype.dispose = function () {
                            this.locationSubscription && (this.locationSubscription.unsubscribe(), (this.locationSubscription = null));
                        }),
                        (t.prototype.createUrlTree = function (t, e) {
                            void 0 === e && (e = {});
                            var n = e.relativeTo,
                                r = e.queryParams,
                                o = e.fragment,
                                a = e.preserveQueryParams,
                                s = e.queryParamsHandling,
                                u = e.preserveFragment;
                            gn() && a && console && console.warn && console.warn("preserveQueryParams is deprecated, use queryParamsHandling instead.");
                            var l = n || this.routerState.root,
                                c = u ? this.currentUrlTree.fragment : o,
                                p = null;
                            if (s)
                                switch (s) {
                                    case "merge":
                                        p = i({}, this.currentUrlTree.queryParams, r);
                                        break;
                                    case "preserve":
                                        p = this.currentUrlTree.queryParams;
                                        break;
                                    default:
                                        p = r || null;
                                }
                            else p = a ? this.currentUrlTree.queryParams : r || null;
                            return (
                                null !== p && (p = this.removeEmptyProps(p)),
                                (function (t, e, n, r, o) {
                                    if (0 === n.length) return Wp(e.root, e.root, e, r, o);
                                    var i = (function (t) {
                                        if ("string" == typeof t[0] && 1 === t.length && "/" === t[0]) return new Qp(!0, 0, t);
                                        var e = 0,
                                            n = !1,
                                            r = t.reduce(function (t, r, o) {
                                                if ("object" == typeof r && null != r) {
                                                    if (r.outlets) {
                                                        var i = {};
                                                        return (
                                                            Xh(r.outlets, function (t, e) {
                                                                i[e] = "string" == typeof t ? t.split("/") : t;
                                                            }),
                                                            h(t, [{ outlets: i }])
                                                        );
                                                    }
                                                    if (r.segmentPath) return h(t, [r.segmentPath]);
                                                }
                                                return "string" != typeof r
                                                    ? h(t, [r])
                                                    : 0 === o
                                                    ? (r.split("/").forEach(function (r, o) {
                                                          (0 == o && "." === r) || (0 == o && "" === r ? (n = !0) : ".." === r ? e++ : "" != r && t.push(r));
                                                      }),
                                                      t)
                                                    : h(t, [r]);
                                            }, []);
                                        return new Qp(n, e, r);
                                    })(n);
                                    if (i.toRoot()) return Wp(e.root, new np([], {}), e, r, o);
                                    var a = (function (t, n, r) {
                                            if (t.isAbsolute) return new Yp(e.root, !0, 0);
                                            if (-1 === r.snapshot._lastPathIndex) return new Yp(r.snapshot._urlSegment, !0, 0);
                                            var o = Zp(t.commands[0]) ? 0 : 1;
                                            return (function (e, n, i) {
                                                for (var a = r.snapshot._urlSegment, s = r.snapshot._lastPathIndex + o, u = t.numberOfDoubleDots; u > s; ) {
                                                    if (((u -= s), !(a = a.parent))) throw new Error("Invalid number of '../'");
                                                    s = a.segments.length;
                                                }
                                                return new Yp(a, !1, s - u);
                                            })();
                                        })(i, 0, t),
                                        s = a.processChildren ? $p(a.segmentGroup, a.index, i.commands) : Xp(a.segmentGroup, a.index, i.commands);
                                    return Wp(a.segmentGroup, s, e, r, o);
                                })(l, this.currentUrlTree, t, p, c)
                            );
                        }),
                        (t.prototype.navigateByUrl = function (t, e) {
                            void 0 === e && (e = { skipLocationChange: !1 }), gn() && this.isNgZoneEnabled && !nn.isInAngularZone() && this.console.warn("Navigation triggered outside Angular zone, did you forget to call 'ngZone.run()'?");
                            var n = t instanceof ep ? t : this.parseUrl(t),
                                r = this.urlHandlingStrategy.merge(n, this.rawUrlTree);
                            return this.scheduleNavigation(r, "imperative", null, e);
                        }),
                        (t.prototype.navigate = function (t, e) {
                            return (
                                void 0 === e && (e = { skipLocationChange: !1 }),
                                (function (t) {
                                    for (var e = 0; e < t.length; e++) {
                                        var n = t[e];
                                        if (null == n) throw new Error("The requested path contains " + n + " segment at index " + e);
                                    }
                                })(t),
                                this.navigateByUrl(this.createUrlTree(t, e), e)
                            );
                        }),
                        (t.prototype.serializeUrl = function (t) {
                            return this.urlSerializer.serialize(t);
                        }),
                        (t.prototype.parseUrl = function (t) {
                            var e;
                            try {
                                e = this.urlSerializer.parse(t);
                            } catch (n) {
                                e = this.malformedUriErrorHandler(n, this.urlSerializer, t);
                            }
                            return e;
                        }),
                        (t.prototype.isActive = function (t, e) {
                            if (t instanceof ep) return tp(this.currentUrlTree, t, e);
                            var n = this.parseUrl(t);
                            return tp(this.currentUrlTree, n, e);
                        }),
                        (t.prototype.removeEmptyProps = function (t) {
                            return Object.keys(t).reduce(function (e, n) {
                                var r = t[n];
                                return null !== r && void 0 !== r && (e[n] = r), e;
                            }, {});
                        }),
                        (t.prototype.processNavigations = function () {
                            var t = this;
                            this.navigations
                                .pipe(
                                    Mu(function (e) {
                                        return e ? (t.executeScheduledNavigation(e), e.promise.catch(function () {})) : Nu(null);
                                    })
                                )
                                .subscribe(function () {});
                        }),
                        (t.prototype.scheduleNavigation = function (t, e, n, r) {
                            var o = this.navigations.value;
                            if (o && "imperative" !== e && "imperative" === o.source && o.rawUrl.toString() === t.toString()) return Promise.resolve(!0);
                            if (o && "hashchange" == e && "popstate" === o.source && o.rawUrl.toString() === t.toString()) return Promise.resolve(!0);
                            if (o && "popstate" == e && "hashchange" === o.source && o.rawUrl.toString() === t.toString()) return Promise.resolve(!0);
                            var i = null,
                                a = null,
                                s = new Promise(function (t, e) {
                                    (i = t), (a = e);
                                }),
                                u = ++this.navigationId;
                            return (
                                this.navigations.next({ id: u, source: e, state: n, rawUrl: t, extras: r, resolve: i, reject: a, promise: s }),
                                s.catch(function (t) {
                                    return Promise.reject(t);
                                })
                            );
                        }),
                        (t.prototype.executeScheduledNavigation = function (t) {
                            var e = this,
                                n = t.id,
                                r = t.rawUrl,
                                o = t.extras,
                                i = t.resolve,
                                a = t.reject,
                                s = t.source,
                                u = t.state,
                                l = this.urlHandlingStrategy.extract(r),
                                c = !this.navigated || l.toString() !== this.currentUrlTree.toString();
                            ("reload" === this.onSameUrlNavigation || c) && this.urlHandlingStrategy.shouldProcessUrl(r)
                                ? ("eager" !== this.urlUpdateStrategy || o.skipLocationChange || this.setBrowserUrl(r, !!o.replaceUrl, n),
                                  this.events.next(new Ch(n, this.serializeUrl(l), s, u)),
                                  Promise.resolve()
                                      .then(function (t) {
                                          return e.runNavigate(l, r, !!o.skipLocationChange, !!o.replaceUrl, n, null);
                                      })
                                      .then(i, a))
                                : c && this.rawUrlTree && this.urlHandlingStrategy.shouldProcessUrl(this.rawUrlTree)
                                ? (this.events.next(new Ch(n, this.serializeUrl(l), s, u)),
                                  Promise.resolve()
                                      .then(function (t) {
                                          return e.runNavigate(l, r, !1, !1, n, jp(l, e.rootComponentType).snapshot);
                                      })
                                      .then(i, a))
                                : ((this.rawUrlTree = r), i(null));
                        }),
                        (t.prototype.runNavigate = function (t, e, n, r, o, i) {
                            var a = this;
                            return o !== this.navigationId
                                ? (this.events.next(new Sh(o, this.serializeUrl(t), "Navigation ID " + o + " is not equal to the current navigation id " + this.navigationId)), Promise.resolve(!1))
                                : new Promise(function (s, u) {
                                      var c,
                                          h = (i
                                              ? Nu({ appliedUrl: t, snapshot: i })
                                              : new Tp(a.ngModule.injector, a.configLoader, a.urlSerializer, t, a.config).apply().pipe(
                                                    J(function (e) {
                                                        return (function (t, e, n, r, o, i) {
                                                            return void 0 === o && (o = "emptyOnly"), void 0 === i && (i = "legacy"), new uf(t, e, n, r, o, i).recognize();
                                                        })(a.rootComponentType, a.config, e, a.serializeUrl(e), a.paramsInheritanceStrategy, a.relativeLinkResolution).pipe(
                                                            Q(function (n) {
                                                                return a.events.next(new Th(o, a.serializeUrl(t), a.serializeUrl(e), n)), { appliedUrl: e, snapshot: n };
                                                            })
                                                        );
                                                    })
                                                )
                                          )
                                              .pipe(
                                                  J(function (i) {
                                                      return "boolean" == typeof i
                                                          ? Nu(i)
                                                          : a.hooks.beforePreactivation(i.snapshot, { navigationId: o, appliedUrlTree: t, rawUrlTree: e, skipLocationChange: n, replaceUrl: r }).pipe(
                                                                Q(function () {
                                                                    return i;
                                                                })
                                                            );
                                                  })
                                              )
                                              .pipe(
                                                  Q(function (t) {
                                                      if ("boolean" == typeof t) return t;
                                                      var e = t.appliedUrl,
                                                          n = t.snapshot;
                                                      return (
                                                          (c = new af(n, a.routerState.snapshot, a.ngModule.injector, function (t) {
                                                              return a.triggerEvent(t);
                                                          })).initialize(a.rootContexts),
                                                          { appliedUrl: e, snapshot: n }
                                                      );
                                                  })
                                              )
                                              .pipe(
                                                  J(function (e) {
                                                      if ("boolean" == typeof e || a.navigationId !== o) return Nu(!1);
                                                      var n = e.appliedUrl,
                                                          r = e.snapshot;
                                                      return (
                                                          a.triggerEvent(new kh(o, a.serializeUrl(t), a.serializeUrl(n), r)),
                                                          c.checkGuards().pipe(
                                                              Q(function (e) {
                                                                  return a.triggerEvent(new Ah(o, a.serializeUrl(t), a.serializeUrl(n), r, e)), { appliedUrl: n, snapshot: r, shouldActivate: e };
                                                              })
                                                          )
                                                      );
                                                  })
                                              )
                                              .pipe(
                                                  J(function (e) {
                                                      return "boolean" == typeof e || a.navigationId !== o
                                                          ? Nu(!1)
                                                          : e.shouldActivate && c.isActivating()
                                                          ? (a.triggerEvent(new Ih(o, a.serializeUrl(t), a.serializeUrl(e.appliedUrl), e.snapshot)),
                                                            c.resolveData(a.paramsInheritanceStrategy).pipe(
                                                                Q(function () {
                                                                    return a.triggerEvent(new Ph(o, a.serializeUrl(t), a.serializeUrl(e.appliedUrl), e.snapshot)), e;
                                                                })
                                                            ))
                                                          : Nu(e);
                                                  })
                                              )
                                              .pipe(
                                                  J(function (i) {
                                                      return "boolean" == typeof i || a.navigationId !== o
                                                          ? Nu(!1)
                                                          : a.hooks.afterPreactivation(i.snapshot, { navigationId: o, appliedUrlTree: t, rawUrlTree: e, skipLocationChange: n, replaceUrl: r }).pipe(
                                                                Q(function () {
                                                                    return i;
                                                                })
                                                            );
                                                  })
                                              )
                                              .pipe(
                                                  Q(function (t) {
                                                      if ("boolean" == typeof t || a.navigationId !== o) return !1;
                                                      var e,
                                                          n,
                                                          r,
                                                          i = t.appliedUrl,
                                                          s = t.shouldActivate;
                                                      return s
                                                          ? {
                                                                appliedUrl: i,
                                                                state:
                                                                    ((r = (function t(e, n, r) {
                                                                        if (r && e.shouldReuseRoute(n.value, r.value.snapshot)) {
                                                                            (u = r.value)._futureSnapshot = n.value;
                                                                            var o = (function (e, n, r) {
                                                                                return n.children.map(function (n) {
                                                                                    var o, i;
                                                                                    try {
                                                                                        for (var a = l(r.children), s = a.next(); !s.done; s = a.next()) {
                                                                                            var u = s.value;
                                                                                            if (e.shouldReuseRoute(u.value.snapshot, n.value)) return t(e, n, u);
                                                                                        }
                                                                                    } catch (t) {
                                                                                        o = { error: t };
                                                                                    } finally {
                                                                                        try {
                                                                                            s && !s.done && (i = a.return) && i.call(a);
                                                                                        } finally {
                                                                                            if (o) throw o.error;
                                                                                        }
                                                                                    }
                                                                                    return t(e, n);
                                                                                });
                                                                            })(e, n, r);
                                                                            return new Op(u, o);
                                                                        }
                                                                        var i = e.retrieve(n.value);
                                                                        if (i) {
                                                                            var a = i.route;
                                                                            return (
                                                                                (function t(e, n) {
                                                                                    if (e.value.routeConfig !== n.value.routeConfig) throw new Error("Cannot reattach ActivatedRouteSnapshot created from a different route");
                                                                                    if (e.children.length !== n.children.length) throw new Error("Cannot reattach ActivatedRouteSnapshot with a different number of children");
                                                                                    n.value._futureSnapshot = e.value;
                                                                                    for (var r = 0; r < e.children.length; ++r) t(e.children[r], n.children[r]);
                                                                                })(n, a),
                                                                                a
                                                                            );
                                                                        }
                                                                        var s,
                                                                            u = new Up(new Ou((s = n.value).url), new Ou(s.params), new Ou(s.queryParams), new Ou(s.fragment), new Ou(s.data), s.outlet, s.component, s);
                                                                        return (
                                                                            (o = n.children.map(function (n) {
                                                                                return t(e, n);
                                                                            })),
                                                                            new Op(u, o)
                                                                        );
                                                                    })(a.routeReuseStrategy, (e = t.snapshot)._root, (n = a.routerState) ? n._root : void 0)),
                                                                    new Vp(r, e)),
                                                                shouldActivate: s,
                                                            }
                                                          : { appliedUrl: i, state: null, shouldActivate: s };
                                                  })
                                              );
                                      a.activateRoutes(h, a.routerState, a.currentUrlTree, o, t, e, n, r, s, u);
                                  });
                        }),
                        (t.prototype.activateRoutes = function (t, e, n, r, o, i, a, s, u, l) {
                            var c,
                                h = this;
                            t.forEach(function (t) {
                                if ("boolean" != typeof t && t.shouldActivate && r === h.navigationId && t.state) {
                                    var n = t.state;
                                    (h.currentUrlTree = t.appliedUrl),
                                        (h.rawUrlTree = h.urlHandlingStrategy.merge(h.currentUrlTree, i)),
                                        (h.routerState = n),
                                        "deferred" !== h.urlUpdateStrategy || a || h.setBrowserUrl(h.rawUrlTree, s, r),
                                        new Sf(h.routeReuseStrategy, n, e, function (t) {
                                            return h.triggerEvent(t);
                                        }).activate(h.rootContexts),
                                        (c = !0);
                                } else c = !1;
                            }).then(
                                function () {
                                    c
                                        ? ((h.navigated = !0), (h.lastSuccessfulId = r), h.events.next(new Eh(r, h.serializeUrl(o), h.serializeUrl(h.currentUrlTree))), u(!0))
                                        : (h.resetUrlToCurrentUrlTree(), h.events.next(new Sh(r, h.serializeUrl(o), "")), u(!1));
                                },
                                function (t) {
                                    if ((a = t) && a.ngNavigationCancelingError) (h.navigated = !0), h.resetStateAndUrl(e, n, i), h.events.next(new Sh(r, h.serializeUrl(o), t.message)), u(!1);
                                    else {
                                        h.resetStateAndUrl(e, n, i), h.events.next(new xh(r, h.serializeUrl(o), t));
                                        try {
                                            u(h.errorHandler(t));
                                        } catch (t) {
                                            l(t);
                                        }
                                    }
                                    var a;
                                }
                            );
                        }),
                        (t.prototype.setBrowserUrl = function (t, e, n) {
                            var r = this.urlSerializer.serialize(t);
                            this.location.isCurrentPathEqualTo(r) || e ? this.location.replaceState(r, "", { navigationId: n }) : this.location.go(r, "", { navigationId: n });
                        }),
                        (t.prototype.resetStateAndUrl = function (t, e, n) {
                            (this.routerState = t), (this.currentUrlTree = e), (this.rawUrlTree = this.urlHandlingStrategy.merge(this.currentUrlTree, n)), this.resetUrlToCurrentUrlTree();
                        }),
                        (t.prototype.resetUrlToCurrentUrlTree = function () {
                            this.location.replaceState(this.urlSerializer.serialize(this.rawUrlTree), "", { navigationId: this.lastSuccessfulId });
                        }),
                        t
                    );
                })(),
                Sf = (function () {
                    function t(t, e, n, r) {
                        (this.routeReuseStrategy = t), (this.futureState = e), (this.currState = n), (this.forwardEvent = r);
                    }
                    return (
                        (t.prototype.activate = function (t) {
                            var e = this.futureState._root,
                                n = this.currState ? this.currState._root : null;
                            this.deactivateChildRoutes(e, n, t), qp(this.futureState.root), this.activateChildRoutes(e, n, t);
                        }),
                        (t.prototype.deactivateChildRoutes = function (t, e, n) {
                            var r = this,
                                o = Mp(e);
                            t.children.forEach(function (t) {
                                var e = t.value.outlet;
                                r.deactivateRoutes(t, o[e], n), delete o[e];
                            }),
                                Xh(o, function (t, e) {
                                    r.deactivateRouteAndItsChildren(t, n);
                                });
                        }),
                        (t.prototype.deactivateRoutes = function (t, e, n) {
                            var r = t.value,
                                o = e ? e.value : null;
                            if (r === o)
                                if (r.component) {
                                    var i = n.getContext(r.outlet);
                                    i && this.deactivateChildRoutes(t, e, i.children);
                                } else this.deactivateChildRoutes(t, e, n);
                            else o && this.deactivateRouteAndItsChildren(e, n);
                        }),
                        (t.prototype.deactivateRouteAndItsChildren = function (t, e) {
                            this.routeReuseStrategy.shouldDetach(t.value.snapshot) ? this.detachAndStoreRouteSubtree(t, e) : this.deactivateRouteAndOutlet(t, e);
                        }),
                        (t.prototype.detachAndStoreRouteSubtree = function (t, e) {
                            var n = e.getContext(t.value.outlet);
                            if (n && n.outlet) {
                                var r = n.outlet.detach(),
                                    o = n.children.onOutletDeactivated();
                                this.routeReuseStrategy.store(t.value.snapshot, { componentRef: r, route: t, contexts: o });
                            }
                        }),
                        (t.prototype.deactivateRouteAndOutlet = function (t, e) {
                            var n = this,
                                r = e.getContext(t.value.outlet);
                            if (r) {
                                var o = Mp(t),
                                    i = t.value.component ? r.children : e;
                                Xh(o, function (t, e) {
                                    return n.deactivateRouteAndItsChildren(t, i);
                                }),
                                    r.outlet && (r.outlet.deactivate(), r.children.onOutletDeactivated());
                            }
                        }),
                        (t.prototype.activateChildRoutes = function (t, e, n) {
                            var r = this,
                                o = Mp(e);
                            t.children.forEach(function (t) {
                                r.activateRoutes(t, o[t.value.outlet], n), r.forwardEvent(new Vh(t.value.snapshot));
                            }),
                                t.children.length && this.forwardEvent(new Oh(t.value.snapshot));
                        }),
                        (t.prototype.activateRoutes = function (t, e, n) {
                            var r = t.value,
                                o = e ? e.value : null;
                            if ((qp(r), r === o))
                                if (r.component) {
                                    var i = n.getOrCreateContext(r.outlet);
                                    this.activateChildRoutes(t, e, i.children);
                                } else this.activateChildRoutes(t, e, n);
                            else if (r.component)
                                if (((i = n.getOrCreateContext(r.outlet)), this.routeReuseStrategy.shouldAttach(r.snapshot))) {
                                    var a = this.routeReuseStrategy.retrieve(r.snapshot);
                                    this.routeReuseStrategy.store(r.snapshot, null),
                                        i.children.onOutletReAttached(a.contexts),
                                        (i.attachRef = a.componentRef),
                                        (i.route = a.route.value),
                                        i.outlet && i.outlet.attach(a.componentRef, a.route.value),
                                        xf(a.route);
                                } else {
                                    var s = (function (t) {
                                            for (var e = r.snapshot.parent; e; e = e.parent) {
                                                var n = e.routeConfig;
                                                if (n && n._loadedConfig) return n._loadedConfig;
                                                if (n && n.component) return null;
                                            }
                                            return null;
                                        })(),
                                        u = s ? s.module.componentFactoryResolver : null;
                                    (i.attachRef = null), (i.route = r), (i.resolver = u), i.outlet && i.outlet.activateWith(r, u), this.activateChildRoutes(t, null, i.children);
                                }
                            else this.activateChildRoutes(t, null, n);
                        }),
                        t
                    );
                })();
            function xf(t) {
                qp(t.value), t.children.forEach(xf);
            }
            var Tf = (function () {
                    return function () {
                        (this.outlet = null), (this.route = null), (this.resolver = null), (this.children = new kf()), (this.attachRef = null);
                    };
                })(),
                kf = (function () {
                    function t() {
                        this.contexts = new Map();
                    }
                    return (
                        (t.prototype.onChildOutletCreated = function (t, e) {
                            var n = this.getOrCreateContext(t);
                            (n.outlet = e), this.contexts.set(t, n);
                        }),
                        (t.prototype.onChildOutletDestroyed = function (t) {
                            var e = this.getContext(t);
                            e && (e.outlet = null);
                        }),
                        (t.prototype.onOutletDeactivated = function () {
                            var t = this.contexts;
                            return (this.contexts = new Map()), t;
                        }),
                        (t.prototype.onOutletReAttached = function (t) {
                            this.contexts = t;
                        }),
                        (t.prototype.getOrCreateContext = function (t) {
                            var e = this.getContext(t);
                            return e || ((e = new Tf()), this.contexts.set(t, e)), e;
                        }),
                        (t.prototype.getContext = function (t) {
                            return this.contexts.get(t) || null;
                        }),
                        t
                    );
                })(),
                Af = (function () {
                    function t(t, e, n, r, o) {
                        (this.parentContexts = t),
                            (this.location = e),
                            (this.resolver = n),
                            (this.changeDetector = o),
                            (this.activated = null),
                            (this._activatedRoute = null),
                            (this.activateEvents = new en()),
                            (this.deactivateEvents = new en()),
                            (this.name = r || Lh),
                            t.onChildOutletCreated(this.name, this);
                    }
                    return (
                        (t.prototype.ngOnDestroy = function () {
                            this.parentContexts.onChildOutletDestroyed(this.name);
                        }),
                        (t.prototype.ngOnInit = function () {
                            if (!this.activated) {
                                var t = this.parentContexts.getContext(this.name);
                                t && t.route && (t.attachRef ? this.attach(t.attachRef, t.route) : this.activateWith(t.route, t.resolver || null));
                            }
                        }),
                        Object.defineProperty(t.prototype, "isActivated", {
                            get: function () {
                                return !!this.activated;
                            },
                            enumerable: !0,
                            configurable: !0,
                        }),
                        Object.defineProperty(t.prototype, "component", {
                            get: function () {
                                if (!this.activated) throw new Error("Outlet is not activated");
                                return this.activated.instance;
                            },
                            enumerable: !0,
                            configurable: !0,
                        }),
                        Object.defineProperty(t.prototype, "activatedRoute", {
                            get: function () {
                                if (!this.activated) throw new Error("Outlet is not activated");
                                return this._activatedRoute;
                            },
                            enumerable: !0,
                            configurable: !0,
                        }),
                        Object.defineProperty(t.prototype, "activatedRouteData", {
                            get: function () {
                                return this._activatedRoute ? this._activatedRoute.snapshot.data : {};
                            },
                            enumerable: !0,
                            configurable: !0,
                        }),
                        (t.prototype.detach = function () {
                            if (!this.activated) throw new Error("Outlet is not activated");
                            this.location.detach();
                            var t = this.activated;
                            return (this.activated = null), (this._activatedRoute = null), t;
                        }),
                        (t.prototype.attach = function (t, e) {
                            (this.activated = t), (this._activatedRoute = e), this.location.insert(t.hostView);
                        }),
                        (t.prototype.deactivate = function () {
                            if (this.activated) {
                                var t = this.component;
                                this.activated.destroy(), (this.activated = null), (this._activatedRoute = null), this.deactivateEvents.emit(t);
                            }
                        }),
                        (t.prototype.activateWith = function (t, e) {
                            if (this.isActivated) throw new Error("Cannot activate an already activated outlet");
                            this._activatedRoute = t;
                            var n = (e = e || this.resolver).resolveComponentFactory(t._futureSnapshot.routeConfig.component),
                                r = this.parentContexts.getOrCreateContext(this.name).children,
                                o = new If(t, r, this.location.injector);
                            (this.activated = this.location.createComponent(n, this.location.length, o)), this.changeDetector.markForCheck(), this.activateEvents.emit(this.activated.instance);
                        }),
                        a([s(3, Ct("name"))], t)
                    );
                })(),
                If = (function () {
                    function t(t, e, n) {
                        (this.route = t), (this.childContexts = e), (this.parent = n);
                    }
                    return (
                        (t.prototype.get = function (t, e) {
                            return t === Up ? this.route : t === kf ? this.childContexts : this.parent.get(t, e);
                        }),
                        t
                    );
                })(),
                Pf = function () {},
                Nf = (function () {
                    function t() {}
                    return (
                        (t.prototype.preload = function (t, e) {
                            return e().pipe(
                                $u(function () {
                                    return Nu(null);
                                })
                            );
                        }),
                        t
                    );
                })(),
                Rf = (function () {
                    function t() {}
                    return (
                        (t.prototype.preload = function (t, e) {
                            return Nu(null);
                        }),
                        t
                    );
                })(),
                Df = (function () {
                    function t(t, e, n, r, o) {
                        (this.router = t),
                            (this.injector = r),
                            (this.preloadingStrategy = o),
                            (this.loader = new mf(
                                e,
                                n,
                                function (e) {
                                    return t.triggerEvent(new Nh(e));
                                },
                                function (e) {
                                    return t.triggerEvent(new Rh(e));
                                }
                            ));
                    }
                    return (
                        (t.prototype.setUpPreloading = function () {
                            var t = this;
                            this.subscription = this.router.events
                                .pipe(
                                    Vu(function (t) {
                                        return t instanceof Eh;
                                    }),
                                    Mu(function () {
                                        return t.preload();
                                    })
                                )
                                .subscribe(function () {});
                        }),
                        (t.prototype.preload = function () {
                            var t = this.injector.get(Ye);
                            return this.processRoutes(t, this.router.config);
                        }),
                        (t.prototype.ngOnDestroy = function () {
                            this.subscription.unsubscribe();
                        }),
                        (t.prototype.processRoutes = function (t, e) {
                            var n,
                                r,
                                o = [];
                            try {
                                for (var i = l(e), a = i.next(); !a.done; a = i.next()) {
                                    var s = a.value;
                                    if (s.loadChildren && !s.canLoad && s._loadedConfig) {
                                        var u = s._loadedConfig;
                                        o.push(this.processRoutes(u.module, u.routes));
                                    } else s.loadChildren && !s.canLoad ? o.push(this.preloadConfig(t, s)) : s.children && o.push(this.processRoutes(t, s.children));
                                }
                            } catch (t) {
                                n = { error: t };
                            } finally {
                                try {
                                    a && !a.done && (r = i.return) && r.call(i);
                                } finally {
                                    if (n) throw n.error;
                                }
                            }
                            return $(o).pipe(
                                rt(),
                                Q(function (t) {})
                            );
                        }),
                        (t.prototype.preloadConfig = function (t, e) {
                            var n = this;
                            return this.preloadingStrategy.preload(e, function () {
                                return n.loader.load(t.injector, e).pipe(
                                    J(function (t) {
                                        return (e._loadedConfig = t), n.processRoutes(t.module, t.routes);
                                    })
                                );
                            });
                        }),
                        t
                    );
                })(),
                Of = (function () {
                    function t(t, e, n) {
                        void 0 === n && (n = {}),
                            (this.router = t),
                            (this.viewportScroller = e),
                            (this.options = n),
                            (this.lastId = 0),
                            (this.lastSource = "imperative"),
                            (this.restoredId = 0),
                            (this.store = {}),
                            (n.scrollPositionRestoration = n.scrollPositionRestoration || "disabled"),
                            (n.anchorScrolling = n.anchorScrolling || "disabled");
                    }
                    return (
                        (t.prototype.init = function () {
                            "disabled" !== this.options.scrollPositionRestoration && this.viewportScroller.setHistoryScrollRestoration("manual"),
                                (this.routerEventsSubscription = this.createScrollEvents()),
                                (this.scrollEventsSubscription = this.consumeScrollEvents());
                        }),
                        (t.prototype.createScrollEvents = function () {
                            var t = this;
                            return this.router.events.subscribe(function (e) {
                                e instanceof Ch
                                    ? ((t.store[t.lastId] = t.viewportScroller.getScrollPosition()), (t.lastSource = e.navigationTrigger), (t.restoredId = e.restoredState ? e.restoredState.navigationId : 0))
                                    : e instanceof Eh && ((t.lastId = e.id), t.scheduleScrollEvent(e, t.router.parseUrl(e.urlAfterRedirects).fragment));
                            });
                        }),
                        (t.prototype.consumeScrollEvents = function () {
                            var t = this;
                            return this.router.events.subscribe(function (e) {
                                e instanceof jh &&
                                    (e.position
                                        ? "top" === t.options.scrollPositionRestoration
                                            ? t.viewportScroller.scrollToPosition([0, 0])
                                            : "enabled" === t.options.scrollPositionRestoration && t.viewportScroller.scrollToPosition(e.position)
                                        : e.anchor && "enabled" === t.options.anchorScrolling
                                        ? t.viewportScroller.scrollToAnchor(e.anchor)
                                        : "disabled" !== t.options.scrollPositionRestoration && t.viewportScroller.scrollToPosition([0, 0]));
                            });
                        }),
                        (t.prototype.scheduleScrollEvent = function (t, e) {
                            this.router.triggerEvent(new jh(t, "popstate" === this.lastSource ? this.store[this.restoredId] : null, e));
                        }),
                        (t.prototype.ngOnDestroy = function () {
                            this.routerEventsSubscription && this.routerEventsSubscription.unsubscribe(), this.scrollEventsSubscription && this.scrollEventsSubscription.unsubscribe();
                        }),
                        t
                    );
                })(),
                Mf = new mt("ROUTER_CONFIGURATION"),
                Vf = new mt("ROUTER_FORROOT_GUARD"),
                jf = [
                    vl,
                    { provide: ap, useClass: sp },
                    {
                        provide: Ef,
                        useFactory: function (t, e, n, r, o, i, a, s, u, l, c) {
                            void 0 === u && (u = {});
                            var h = new Ef(null, e, n, r, o, i, a, Yh(s));
                            if (
                                (l && (h.urlHandlingStrategy = l),
                                c && (h.routeReuseStrategy = c),
                                u.errorHandler && (h.errorHandler = u.errorHandler),
                                u.malformedUriErrorHandler && (h.malformedUriErrorHandler = u.malformedUriErrorHandler),
                                u.enableTracing)
                            ) {
                                var p = pc();
                                h.events.subscribe(function (t) {
                                    p.logGroup("Router Event: " + t.constructor.name), p.log(t.toString()), p.log(t), p.logGroupEnd();
                                });
                            }
                            return (
                                u.onSameUrlNavigation && (h.onSameUrlNavigation = u.onSameUrlNavigation),
                                u.paramsInheritanceStrategy && (h.paramsInheritanceStrategy = u.paramsInheritanceStrategy),
                                u.urlUpdateStrategy && (h.urlUpdateStrategy = u.urlUpdateStrategy),
                                u.relativeLinkResolution && (h.relativeLinkResolution = u.relativeLinkResolution),
                                h
                            );
                        },
                        deps: [En, ap, kf, vl, Bt, In, je, gf, Mf, [function () {}, new Mt()], [function () {}, new Mt()]],
                    },
                    kf,
                    {
                        provide: Up,
                        useFactory: function (t) {
                            return t.routerState.root;
                        },
                        deps: [Ef],
                    },
                    { provide: In, useClass: Rn },
                    Df,
                    Rf,
                    Nf,
                    { provide: Mf, useValue: { enableTracing: !1 } },
                ];
            function Uf() {
                return new mn("Router", Ef);
            }
            var Lf = (function () {
                function t(t, e) {}
                var e;
                return (
                    (e = t),
                    (t.forRoot = function (t, n) {
                        return {
                            ngModule: e,
                            providers: [
                                jf,
                                Bf(t),
                                { provide: Vf, useFactory: zf, deps: [[Ef, new Mt(), new jt()]] },
                                { provide: Mf, useValue: n || {} },
                                { provide: fl, useFactory: Ff, deps: [hl, [new Ot(dl), new Mt()], Mf] },
                                { provide: Of, useFactory: Hf, deps: [Ef, lc, Mf] },
                                { provide: Pf, useExisting: n && n.preloadingStrategy ? n.preloadingStrategy : Rf },
                                { provide: mn, multi: !0, useFactory: Uf },
                                [qf, { provide: Ie, multi: !0, useFactory: Gf, deps: [qf] }, { provide: Wf, useFactory: Zf, deps: [qf] }, { provide: Oe, multi: !0, useExisting: Wf }],
                            ],
                        };
                    }),
                    (t.forChild = function (t) {
                        return { ngModule: e, providers: [Bf(t)] };
                    }),
                    (e = a([s(0, Mt()), s(0, Ot(Vf)), s(1, Mt())], t))
                );
            })();
            function Hf(t, e, n) {
                return n.scrollOffset && e.setOffset(n.scrollOffset), new Of(t, e, n);
            }
            function Ff(t, e, n) {
                return void 0 === n && (n = {}), n.useHash ? new gl(t, e) : new ml(t, e);
            }
            function zf(t) {
                if (t) throw new Error("RouterModule.forRoot() called twice. Lazy loaded modules should use RouterModule.forChild() instead.");
                return "guarded";
            }
            function Bf(t) {
                return [
                    { provide: _t, multi: !0, useValue: t },
                    { provide: gf, multi: !0, useValue: t },
                ];
            }
            var qf = (function () {
                function t(t) {
                    (this.injector = t), (this.initNavigation = !1), (this.resultOfPreactivationDone = new ut());
                }
                return (
                    (t.prototype.appInitializer = function () {
                        var t = this;
                        return this.injector.get(pl, Promise.resolve(null)).then(function () {
                            var e = null,
                                n = new Promise(function (t) {
                                    return (e = t);
                                }),
                                r = t.injector.get(Ef),
                                o = t.injector.get(Mf);
                            if (t.isLegacyDisabled(o) || t.isLegacyEnabled(o)) e(!0);
                            else if ("disabled" === o.initialNavigation) r.setUpLocationChangeListener(), e(!0);
                            else {
                                if ("enabled" !== o.initialNavigation) throw new Error("Invalid initialNavigation options: '" + o.initialNavigation + "'");
                                (r.hooks.afterPreactivation = function () {
                                    return t.initNavigation ? Nu(null) : ((t.initNavigation = !0), e(!0), t.resultOfPreactivationDone);
                                }),
                                    r.initialNavigation();
                            }
                            return n;
                        });
                    }),
                    (t.prototype.bootstrapListener = function (t) {
                        var e = this.injector.get(Mf),
                            n = this.injector.get(Df),
                            r = this.injector.get(Of),
                            o = this.injector.get(Ef),
                            i = this.injector.get(En);
                        t === i.components[0] &&
                            (this.isLegacyEnabled(e) ? o.initialNavigation() : this.isLegacyDisabled(e) && o.setUpLocationChangeListener(),
                            n.setUpPreloading(),
                            r.init(),
                            o.resetRootComponentType(i.componentTypes[0]),
                            this.resultOfPreactivationDone.next(null),
                            this.resultOfPreactivationDone.complete());
                    }),
                    (t.prototype.isLegacyEnabled = function (t) {
                        return "legacy_enabled" === t.initialNavigation || !0 === t.initialNavigation || void 0 === t.initialNavigation;
                    }),
                    (t.prototype.isLegacyDisabled = function (t) {
                        return "legacy_disabled" === t.initialNavigation || !1 === t.initialNavigation;
                    }),
                    t
                );
            })();
            function Gf(t) {
                return t.appInitializer.bind(t);
            }
            function Zf(t) {
                return t.bootstrapListener.bind(t);
            }
            var Wf = new mt("Router Initializer"),
                Qf = to({ encapsulation: 2, styles: [], data: {} });
            function Yf(t) {
                return Li(
                    0,
                    [(t()(), Io(0, 16777216, null, null, 1, "router-outlet", [], null, null, null, null, null)), yi(1, 212992, null, 0, Af, [kf, Mn, Ze, [8, null], Vn], null, null)],
                    function (t, e) {
                        t(e, 1, 0);
                    },
                    null
                );
            }
            var Kf = Wo(
                "ng-component",
                Uh,
                function (t) {
                    return Li(0, [(t()(), Io(0, 0, null, null, 1, "ng-component", [], null, null, null, Yf, Qf)), yi(1, 49152, null, 0, Uh, [], null, null)], null, null);
                },
                {},
                {},
                []
            );
            function Xf(t, e) {
                return new O(
                    e
                        ? function (n) {
                              return e.schedule($f, 0, { error: t, subscriber: n });
                          }
                        : function (e) {
                              return e.error(t);
                          }
                );
            }
            function $f(t) {
                t.subscriber.error(t.error);
            }
            var Jf = function () {},
                td = function () {},
                ed = (function () {
                    function t(t) {
                        var e = this;
                        (this.normalizedNames = new Map()),
                            (this.lazyUpdate = null),
                            t
                                ? (this.lazyInit =
                                      "string" == typeof t
                                          ? function () {
                                                (e.headers = new Map()),
                                                    t.split("\n").forEach(function (t) {
                                                        var n = t.indexOf(":");
                                                        if (n > 0) {
                                                            var r = t.slice(0, n),
                                                                o = r.toLowerCase(),
                                                                i = t.slice(n + 1).trim();
                                                            e.maybeSetNormalizedName(r, o), e.headers.has(o) ? e.headers.get(o).push(i) : e.headers.set(o, [i]);
                                                        }
                                                    });
                                            }
                                          : function () {
                                                (e.headers = new Map()),
                                                    Object.keys(t).forEach(function (n) {
                                                        var r = t[n],
                                                            o = n.toLowerCase();
                                                        "string" == typeof r && (r = [r]), r.length > 0 && (e.headers.set(o, r), e.maybeSetNormalizedName(n, o));
                                                    });
                                            })
                                : (this.headers = new Map());
                    }
                    return (
                        (t.prototype.has = function (t) {
                            return this.init(), this.headers.has(t.toLowerCase());
                        }),
                        (t.prototype.get = function (t) {
                            this.init();
                            var e = this.headers.get(t.toLowerCase());
                            return e && e.length > 0 ? e[0] : null;
                        }),
                        (t.prototype.keys = function () {
                            return this.init(), Array.from(this.normalizedNames.values());
                        }),
                        (t.prototype.getAll = function (t) {
                            return this.init(), this.headers.get(t.toLowerCase()) || null;
                        }),
                        (t.prototype.append = function (t, e) {
                            return this.clone({ name: t, value: e, op: "a" });
                        }),
                        (t.prototype.set = function (t, e) {
                            return this.clone({ name: t, value: e, op: "s" });
                        }),
                        (t.prototype.delete = function (t, e) {
                            return this.clone({ name: t, value: e, op: "d" });
                        }),
                        (t.prototype.maybeSetNormalizedName = function (t, e) {
                            this.normalizedNames.has(e) || this.normalizedNames.set(e, t);
                        }),
                        (t.prototype.init = function () {
                            var e = this;
                            this.lazyInit &&
                                (this.lazyInit instanceof t ? this.copyFrom(this.lazyInit) : this.lazyInit(),
                                (this.lazyInit = null),
                                this.lazyUpdate &&
                                    (this.lazyUpdate.forEach(function (t) {
                                        return e.applyUpdate(t);
                                    }),
                                    (this.lazyUpdate = null)));
                        }),
                        (t.prototype.copyFrom = function (t) {
                            var e = this;
                            t.init(),
                                Array.from(t.headers.keys()).forEach(function (n) {
                                    e.headers.set(n, t.headers.get(n)), e.normalizedNames.set(n, t.normalizedNames.get(n));
                                });
                        }),
                        (t.prototype.clone = function (e) {
                            var n = new t();
                            return (n.lazyInit = this.lazyInit && this.lazyInit instanceof t ? this.lazyInit : this), (n.lazyUpdate = (this.lazyUpdate || []).concat([e])), n;
                        }),
                        (t.prototype.applyUpdate = function (t) {
                            var e = t.name.toLowerCase();
                            switch (t.op) {
                                case "a":
                                case "s":
                                    var n = t.value;
                                    if (("string" == typeof n && (n = [n]), 0 === n.length)) return;
                                    this.maybeSetNormalizedName(t.name, e);
                                    var r = ("a" === t.op ? this.headers.get(e) : void 0) || [];
                                    r.push.apply(r, h(n)), this.headers.set(e, r);
                                    break;
                                case "d":
                                    var o = t.value;
                                    if (o) {
                                        var i = this.headers.get(e);
                                        if (!i) return;
                                        0 ===
                                        (i = i.filter(function (t) {
                                            return -1 === o.indexOf(t);
                                        })).length
                                            ? (this.headers.delete(e), this.normalizedNames.delete(e))
                                            : this.headers.set(e, i);
                                    } else this.headers.delete(e), this.normalizedNames.delete(e);
                            }
                        }),
                        (t.prototype.forEach = function (t) {
                            var e = this;
                            this.init(),
                                Array.from(this.normalizedNames.keys()).forEach(function (n) {
                                    return t(e.normalizedNames.get(n), e.headers.get(n));
                                });
                        }),
                        t
                    );
                })(),
                nd = (function () {
                    function t() {}
                    return (
                        (t.prototype.encodeKey = function (t) {
                            return rd(t);
                        }),
                        (t.prototype.encodeValue = function (t) {
                            return rd(t);
                        }),
                        (t.prototype.decodeKey = function (t) {
                            return decodeURIComponent(t);
                        }),
                        (t.prototype.decodeValue = function (t) {
                            return decodeURIComponent(t);
                        }),
                        t
                    );
                })();
            function rd(t) {
                return encodeURIComponent(t)
                    .replace(/%40/gi, "@")
                    .replace(/%3A/gi, ":")
                    .replace(/%24/gi, "$")
                    .replace(/%2C/gi, ",")
                    .replace(/%3B/gi, ";")
                    .replace(/%2B/gi, "+")
                    .replace(/%3D/gi, "=")
                    .replace(/%3F/gi, "?")
                    .replace(/%2F/gi, "/");
            }
            var od = (function () {
                function t(t) {
                    void 0 === t && (t = {});
                    var e,
                        n,
                        r,
                        o = this;
                    if (((this.updates = null), (this.cloneFrom = null), (this.encoder = t.encoder || new nd()), t.fromString)) {
                        if (t.fromObject) throw new Error("Cannot specify both fromString and fromObject.");
                        this.map =
                            ((e = t.fromString),
                            (n = this.encoder),
                            (r = new Map()),
                            e.length > 0 &&
                                e.split("&").forEach(function (t) {
                                    var e = t.indexOf("="),
                                        o = c(-1 == e ? [n.decodeKey(t), ""] : [n.decodeKey(t.slice(0, e)), n.decodeValue(t.slice(e + 1))], 2),
                                        i = o[0],
                                        a = o[1],
                                        s = r.get(i) || [];
                                    s.push(a), r.set(i, s);
                                }),
                            r);
                    } else
                        t.fromObject
                            ? ((this.map = new Map()),
                              Object.keys(t.fromObject).forEach(function (e) {
                                  var n = t.fromObject[e];
                                  o.map.set(e, Array.isArray(n) ? n : [n]);
                              }))
                            : (this.map = null);
                }
                return (
                    (t.prototype.has = function (t) {
                        return this.init(), this.map.has(t);
                    }),
                    (t.prototype.get = function (t) {
                        this.init();
                        var e = this.map.get(t);
                        return e ? e[0] : null;
                    }),
                    (t.prototype.getAll = function (t) {
                        return this.init(), this.map.get(t) || null;
                    }),
                    (t.prototype.keys = function () {
                        return this.init(), Array.from(this.map.keys());
                    }),
                    (t.prototype.append = function (t, e) {
                        return this.clone({ param: t, value: e, op: "a" });
                    }),
                    (t.prototype.set = function (t, e) {
                        return this.clone({ param: t, value: e, op: "s" });
                    }),
                    (t.prototype.delete = function (t, e) {
                        return this.clone({ param: t, value: e, op: "d" });
                    }),
                    (t.prototype.toString = function () {
                        var t = this;
                        return (
                            this.init(),
                            this.keys()
                                .map(function (e) {
                                    var n = t.encoder.encodeKey(e);
                                    return t.map
                                        .get(e)
                                        .map(function (e) {
                                            return n + "=" + t.encoder.encodeValue(e);
                                        })
                                        .join("&");
                                })
                                .join("&")
                        );
                    }),
                    (t.prototype.clone = function (e) {
                        var n = new t({ encoder: this.encoder });
                        return (n.cloneFrom = this.cloneFrom || this), (n.updates = (this.updates || []).concat([e])), n;
                    }),
                    (t.prototype.init = function () {
                        var t = this;
                        null === this.map && (this.map = new Map()),
                            null !== this.cloneFrom &&
                                (this.cloneFrom.init(),
                                this.cloneFrom.keys().forEach(function (e) {
                                    return t.map.set(e, t.cloneFrom.map.get(e));
                                }),
                                this.updates.forEach(function (e) {
                                    switch (e.op) {
                                        case "a":
                                        case "s":
                                            var n = ("a" === e.op ? t.map.get(e.param) : void 0) || [];
                                            n.push(e.value), t.map.set(e.param, n);
                                            break;
                                        case "d":
                                            if (void 0 === e.value) {
                                                t.map.delete(e.param);
                                                break;
                                            }
                                            var r = t.map.get(e.param) || [],
                                                o = r.indexOf(e.value);
                                            -1 !== o && r.splice(o, 1), r.length > 0 ? t.map.set(e.param, r) : t.map.delete(e.param);
                                    }
                                }),
                                (this.cloneFrom = null));
                    }),
                    t
                );
            })();
            function id(t) {
                return "undefined" != typeof ArrayBuffer && t instanceof ArrayBuffer;
            }
            function ad(t) {
                return "undefined" != typeof Blob && t instanceof Blob;
            }
            function sd(t) {
                return "undefined" != typeof FormData && t instanceof FormData;
            }
            var ud = (function () {
                    function t(t, e, n, r) {
                        var o;
                        if (
                            ((this.url = e),
                            (this.body = null),
                            (this.reportProgress = !1),
                            (this.withCredentials = !1),
                            (this.responseType = "json"),
                            (this.method = t.toUpperCase()),
                            (function (t) {
                                switch (t) {
                                    case "DELETE":
                                    case "GET":
                                    case "HEAD":
                                    case "OPTIONS":
                                    case "JSONP":
                                        return !1;
                                    default:
                                        return !0;
                                }
                            })(this.method) || r
                                ? ((this.body = void 0 !== n ? n : null), (o = r))
                                : (o = n),
                            o &&
                                ((this.reportProgress = !!o.reportProgress),
                                (this.withCredentials = !!o.withCredentials),
                                o.responseType && (this.responseType = o.responseType),
                                o.headers && (this.headers = o.headers),
                                o.params && (this.params = o.params)),
                            this.headers || (this.headers = new ed()),
                            this.params)
                        ) {
                            var i = this.params.toString();
                            if (0 === i.length) this.urlWithParams = e;
                            else {
                                var a = e.indexOf("?");
                                this.urlWithParams = e + (-1 === a ? "?" : a < e.length - 1 ? "&" : "") + i;
                            }
                        } else (this.params = new od()), (this.urlWithParams = e);
                    }
                    return (
                        (t.prototype.serializeBody = function () {
                            return null === this.body
                                ? null
                                : id(this.body) || ad(this.body) || sd(this.body) || "string" == typeof this.body
                                ? this.body
                                : this.body instanceof od
                                ? this.body.toString()
                                : "object" == typeof this.body || "boolean" == typeof this.body || Array.isArray(this.body)
                                ? JSON.stringify(this.body)
                                : this.body.toString();
                        }),
                        (t.prototype.detectContentTypeHeader = function () {
                            return null === this.body
                                ? null
                                : sd(this.body)
                                ? null
                                : ad(this.body)
                                ? this.body.type || null
                                : id(this.body)
                                ? null
                                : "string" == typeof this.body
                                ? "text/plain"
                                : this.body instanceof od
                                ? "application/x-www-form-urlencoded;charset=UTF-8"
                                : "object" == typeof this.body || "number" == typeof this.body || Array.isArray(this.body)
                                ? "application/json"
                                : null;
                        }),
                        (t.prototype.clone = function (e) {
                            void 0 === e && (e = {});
                            var n = e.method || this.method,
                                r = e.url || this.url,
                                o = e.responseType || this.responseType,
                                i = void 0 !== e.body ? e.body : this.body,
                                a = void 0 !== e.withCredentials ? e.withCredentials : this.withCredentials,
                                s = void 0 !== e.reportProgress ? e.reportProgress : this.reportProgress,
                                u = e.headers || this.headers,
                                l = e.params || this.params;
                            return (
                                void 0 !== e.setHeaders &&
                                    (u = Object.keys(e.setHeaders).reduce(function (t, n) {
                                        return t.set(n, e.setHeaders[n]);
                                    }, u)),
                                e.setParams &&
                                    (l = Object.keys(e.setParams).reduce(function (t, n) {
                                        return t.set(n, e.setParams[n]);
                                    }, l)),
                                new t(n, r, i, { params: l, headers: u, reportProgress: s, responseType: o, withCredentials: a })
                            );
                        }),
                        t
                    );
                })(),
                ld = (function (t) {
                    return (
                        (t[(t.Sent = 0)] = "Sent"),
                        (t[(t.UploadProgress = 1)] = "UploadProgress"),
                        (t[(t.ResponseHeader = 2)] = "ResponseHeader"),
                        (t[(t.DownloadProgress = 3)] = "DownloadProgress"),
                        (t[(t.Response = 4)] = "Response"),
                        (t[(t.User = 5)] = "User"),
                        t
                    );
                })({}),
                cd = (function () {
                    return function (t, e, n) {
                        void 0 === e && (e = 200),
                            void 0 === n && (n = "OK"),
                            (this.headers = t.headers || new ed()),
                            (this.status = void 0 !== t.status ? t.status : e),
                            (this.statusText = t.statusText || n),
                            (this.url = t.url || null),
                            (this.ok = this.status >= 200 && this.status < 300);
                    };
                })(),
                hd = (function (t) {
                    function e(e) {
                        void 0 === e && (e = {});
                        var n = t.call(this, e) || this;
                        return (n.type = ld.ResponseHeader), n;
                    }
                    return (
                        o(e, t),
                        (e.prototype.clone = function (t) {
                            return void 0 === t && (t = {}), new e({ headers: t.headers || this.headers, status: void 0 !== t.status ? t.status : this.status, statusText: t.statusText || this.statusText, url: t.url || this.url || void 0 });
                        }),
                        e
                    );
                })(cd),
                pd = (function (t) {
                    function e(e) {
                        void 0 === e && (e = {});
                        var n = t.call(this, e) || this;
                        return (n.type = ld.Response), (n.body = void 0 !== e.body ? e.body : null), n;
                    }
                    return (
                        o(e, t),
                        (e.prototype.clone = function (t) {
                            return (
                                void 0 === t && (t = {}),
                                new e({
                                    body: void 0 !== t.body ? t.body : this.body,
                                    headers: t.headers || this.headers,
                                    status: void 0 !== t.status ? t.status : this.status,
                                    statusText: t.statusText || this.statusText,
                                    url: t.url || this.url || void 0,
                                })
                            );
                        }),
                        e
                    );
                })(cd),
                fd = (function (t) {
                    function e(e) {
                        var n = t.call(this, e, 0, "Unknown Error") || this;
                        return (
                            (n.name = "HttpErrorResponse"),
                            (n.ok = !1),
                            (n.message =
                                n.status >= 200 && n.status < 300 ? "Http failure during parsing for " + (e.url || "(unknown url)") : "Http failure response for " + (e.url || "(unknown url)") + ": " + e.status + " " + e.statusText),
                            (n.error = e.error || null),
                            n
                        );
                    }
                    return o(e, t), e;
                })(cd);
            function dd(t, e) {
                return { body: e, headers: t.headers, observe: t.observe, params: t.params, reportProgress: t.reportProgress, responseType: t.responseType, withCredentials: t.withCredentials };
            }
            var vd = (function () {
                    function t(t) {
                        this.handler = t;
                    }
                    return (
                        (t.prototype.request = function (t, e, n) {
                            var r,
                                o = this;
                            if ((void 0 === n && (n = {}), t instanceof ud)) r = t;
                            else {
                                var i;
                                i = n.headers instanceof ed ? n.headers : new ed(n.headers);
                                var a = void 0;
                                n.params && (a = n.params instanceof od ? n.params : new od({ fromObject: n.params })),
                                    (r = new ud(t, e, void 0 !== n.body ? n.body : null, { headers: i, params: a, reportProgress: n.reportProgress, responseType: n.responseType || "json", withCredentials: n.withCredentials }));
                            }
                            var s = Nu(r).pipe(
                                Mu(function (t) {
                                    return o.handler.handle(t);
                                })
                            );
                            if (t instanceof ud || "events" === n.observe) return s;
                            var u = s.pipe(
                                Vu(function (t) {
                                    return t instanceof pd;
                                })
                            );
                            switch (n.observe || "body") {
                                case "body":
                                    switch (r.responseType) {
                                        case "arraybuffer":
                                            return u.pipe(
                                                Q(function (t) {
                                                    if (null !== t.body && !(t.body instanceof ArrayBuffer)) throw new Error("Response is not an ArrayBuffer.");
                                                    return t.body;
                                                })
                                            );
                                        case "blob":
                                            return u.pipe(
                                                Q(function (t) {
                                                    if (null !== t.body && !(t.body instanceof Blob)) throw new Error("Response is not a Blob.");
                                                    return t.body;
                                                })
                                            );
                                        case "text":
                                            return u.pipe(
                                                Q(function (t) {
                                                    if (null !== t.body && "string" != typeof t.body) throw new Error("Response is not a string.");
                                                    return t.body;
                                                })
                                            );
                                        case "json":
                                        default:
                                            return u.pipe(
                                                Q(function (t) {
                                                    return t.body;
                                                })
                                            );
                                    }
                                case "response":
                                    return u;
                                default:
                                    throw new Error("Unreachable: unhandled observe type " + n.observe + "}");
                            }
                        }),
                        (t.prototype.delete = function (t, e) {
                            return void 0 === e && (e = {}), this.request("DELETE", t, e);
                        }),
                        (t.prototype.get = function (t, e) {
                            return void 0 === e && (e = {}), this.request("GET", t, e);
                        }),
                        (t.prototype.head = function (t, e) {
                            return void 0 === e && (e = {}), this.request("HEAD", t, e);
                        }),
                        (t.prototype.jsonp = function (t, e) {
                            return this.request("JSONP", t, { params: new od().append(e, "JSONP_CALLBACK"), observe: "body", responseType: "json" });
                        }),
                        (t.prototype.options = function (t, e) {
                            return void 0 === e && (e = {}), this.request("OPTIONS", t, e);
                        }),
                        (t.prototype.patch = function (t, e, n) {
                            return void 0 === n && (n = {}), this.request("PATCH", t, dd(n, e));
                        }),
                        (t.prototype.post = function (t, e, n) {
                            return void 0 === n && (n = {}), this.request("POST", t, dd(n, e));
                        }),
                        (t.prototype.put = function (t, e, n) {
                            return void 0 === n && (n = {}), this.request("PUT", t, dd(n, e));
                        }),
                        t
                    );
                })(),
                yd = (function () {
                    function t(t, e) {
                        (this.next = t), (this.interceptor = e);
                    }
                    return (
                        (t.prototype.handle = function (t) {
                            return this.interceptor.intercept(t, this.next);
                        }),
                        t
                    );
                })(),
                gd = new mt("HTTP_INTERCEPTORS"),
                md = (function () {
                    function t() {}
                    return (
                        (t.prototype.intercept = function (t, e) {
                            return e.handle(t);
                        }),
                        t
                    );
                })(),
                bd = /^\)\]\}',?\n/,
                wd = function () {},
                _d = (function () {
                    function t() {}
                    return (
                        (t.prototype.build = function () {
                            return new XMLHttpRequest();
                        }),
                        t
                    );
                })(),
                Cd = (function () {
                    function t(t) {
                        this.xhrFactory = t;
                    }
                    return (
                        (t.prototype.handle = function (t) {
                            var e = this;
                            if ("JSONP" === t.method) throw new Error("Attempted to construct Jsonp request without JsonpClientModule installed.");
                            return new O(function (n) {
                                var r = e.xhrFactory.build();
                                if (
                                    (r.open(t.method, t.urlWithParams),
                                    t.withCredentials && (r.withCredentials = !0),
                                    t.headers.forEach(function (t, e) {
                                        return r.setRequestHeader(t, e.join(","));
                                    }),
                                    t.headers.has("Accept") || r.setRequestHeader("Accept", "application/json, text/plain, */*"),
                                    !t.headers.has("Content-Type"))
                                ) {
                                    var o = t.detectContentTypeHeader();
                                    null !== o && r.setRequestHeader("Content-Type", o);
                                }
                                if (t.responseType) {
                                    var i = t.responseType.toLowerCase();
                                    r.responseType = "json" !== i ? i : "text";
                                }
                                var a = t.serializeBody(),
                                    s = null,
                                    u = function () {
                                        if (null !== s) return s;
                                        var e = 1223 === r.status ? 204 : r.status,
                                            n = r.statusText || "OK",
                                            o = new ed(r.getAllResponseHeaders()),
                                            i =
                                                (function (t) {
                                                    return "responseURL" in t && t.responseURL ? t.responseURL : /^X-Request-URL:/m.test(t.getAllResponseHeaders()) ? t.getResponseHeader("X-Request-URL") : null;
                                                })(r) || t.url;
                                        return (s = new hd({ headers: o, status: e, statusText: n, url: i }));
                                    },
                                    l = function () {
                                        var e = u(),
                                            o = e.headers,
                                            i = e.status,
                                            a = e.statusText,
                                            s = e.url,
                                            l = null;
                                        204 !== i && (l = void 0 === r.response ? r.responseText : r.response), 0 === i && (i = l ? 200 : 0);
                                        var c = i >= 200 && i < 300;
                                        if ("json" === t.responseType && "string" == typeof l) {
                                            var h = l;
                                            l = l.replace(bd, "");
                                            try {
                                                l = "" !== l ? JSON.parse(l) : null;
                                            } catch (t) {
                                                (l = h), c && ((c = !1), (l = { error: t, text: l }));
                                            }
                                        }
                                        c ? (n.next(new pd({ body: l, headers: o, status: i, statusText: a, url: s || void 0 })), n.complete()) : n.error(new fd({ error: l, headers: o, status: i, statusText: a, url: s || void 0 }));
                                    },
                                    c = function (t) {
                                        var e = new fd({ error: t, status: r.status || 0, statusText: r.statusText || "Unknown Error" });
                                        n.error(e);
                                    },
                                    h = !1,
                                    p = function (e) {
                                        h || (n.next(u()), (h = !0));
                                        var o = { type: ld.DownloadProgress, loaded: e.loaded };
                                        e.lengthComputable && (o.total = e.total), "text" === t.responseType && r.responseText && (o.partialText = r.responseText), n.next(o);
                                    },
                                    f = function (t) {
                                        var e = { type: ld.UploadProgress, loaded: t.loaded };
                                        t.lengthComputable && (e.total = t.total), n.next(e);
                                    };
                                return (
                                    r.addEventListener("load", l),
                                    r.addEventListener("error", c),
                                    t.reportProgress && (r.addEventListener("progress", p), null !== a && r.upload && r.upload.addEventListener("progress", f)),
                                    r.send(a),
                                    n.next({ type: ld.Sent }),
                                    function () {
                                        r.removeEventListener("error", c),
                                            r.removeEventListener("load", l),
                                            t.reportProgress && (r.removeEventListener("progress", p), null !== a && r.upload && r.upload.removeEventListener("progress", f)),
                                            r.abort();
                                    }
                                );
                            });
                        }),
                        t
                    );
                })(),
                Ed = new mt("XSRF_COOKIE_NAME"),
                Sd = new mt("XSRF_HEADER_NAME"),
                xd = function () {},
                Td = (function () {
                    function t(t, e, n) {
                        (this.doc = t), (this.platform = e), (this.cookieName = n), (this.lastCookieString = ""), (this.lastToken = null), (this.parseCount = 0);
                    }
                    return (
                        (t.prototype.getToken = function () {
                            if ("server" === this.platform) return null;
                            var t = this.doc.cookie || "";
                            return t !== this.lastCookieString && (this.parseCount++, (this.lastToken = ec(t, this.cookieName)), (this.lastCookieString = t)), this.lastToken;
                        }),
                        a([s(0, Ot(sc)), s(1, Ot(De)), s(2, Ot(Ed))], t)
                    );
                })(),
                kd = (function () {
                    function t(t, e) {
                        (this.tokenService = t), (this.headerName = e);
                    }
                    return (
                        (t.prototype.intercept = function (t, e) {
                            var n = t.url.toLowerCase();
                            if ("GET" === t.method || "HEAD" === t.method || n.startsWith("http://") || n.startsWith("https://")) return e.handle(t);
                            var r = this.tokenService.getToken();
                            return null === r || t.headers.has(this.headerName) || (t = t.clone({ headers: t.headers.set(this.headerName, r) })), e.handle(t);
                        }),
                        a([s(1, Ot(Sd))], t)
                    );
                })(),
                Ad = (function () {
                    function t(t, e) {
                        (this.backend = t), (this.injector = e), (this.chain = null);
                    }
                    return (
                        (t.prototype.handle = function (t) {
                            if (null === this.chain) {
                                var e = this.injector.get(gd, []);
                                this.chain = e.reduceRight(function (t, e) {
                                    return new yd(t, e);
                                }, this.backend);
                            }
                            return this.chain.handle(t);
                        }),
                        t
                    );
                })(),
                Id = (function () {
                    function t() {}
                    var e;
                    return (
                        (e = t),
                        (t.disable = function () {
                            return { ngModule: e, providers: [{ provide: kd, useClass: md }] };
                        }),
                        (t.withOptions = function (t) {
                            return void 0 === t && (t = {}), { ngModule: e, providers: [t.cookieName ? { provide: Ed, useValue: t.cookieName } : [], t.headerName ? { provide: Sd, useValue: t.headerName } : []] };
                        }),
                        t
                    );
                })(),
                Pd = function () {},
                Nd = (function () {
                    function t(t) {
                        (this.http = t), (this.apiUrl = "https://randomuser.me/api/");
                    }
                    return (
                        (t.prototype.getUser = function () {
                            return this.http.get(this.apiUrl).pipe(
                                Q(function (t) {
                                    return t.results;
                                }),
                                $u(this.handleError)
                            );
                        }),
                        (t.prototype.handleError = function (t) {
                            return console.error(t), Xf(t.error || "Server error");
                        }),
                        (t.ngInjectableDef = gt({
                            factory: function () {
                                return new t(ie(vd));
                            },
                            token: t,
                            providedIn: "root",
                        })),
                        t
                    );
                })(),
                Rd = (function () {
                    function t(t) {
                        (this.RU = t), (this.currentView = "user"), (this.active = !0);
                    }
                    return (
                        (t.prototype.ngOnInit = function () {
                            this.getUserProfile();
                        }),
                        (t.prototype.getUserProfile = function () {
                            var t = this;
                            this.RU.getUser().subscribe(
                                function (e) {
                                    return (t.randomUser = e[0]);
                                },
                                function (e) {
                                    return (t.error = e);
                                }
                            );
                        }),
                        (t.prototype.updateView = function (t) {
                            (this.active = !1), (this.currentView = t);
                        }),
                        t
                    );
                })(),
                Dd = to({ encapsulation: 0, styles: [[".c-card__header[_ngcontent-%COMP%]{height:85px;margin-bottom:75px}"]], data: {} });
            function Od(t) {
                return Li(
                    0,
                    [
                        (t()(),
                        Io(
                            0,
                            0,
                            null,
                            null,
                            0,
                            "img",
                            [
                                ["alt", ""],
                                ["class", "u-image u-image--150 u-image--rounded"],
                            ],
                            [[8, "src", 4]],
                            null,
                            null,
                            null,
                            null
                        )),
                    ],
                    null,
                    function (t, e) {
                        var n = e.component;
                        t(e, 0, 0, null == n.randomUser ? null : n.randomUser.picture.large);
                    }
                );
            }
            function Md(t) {
                return Li(0, [(t()(), Io(0, 0, null, null, 1, "h2", [["class", "c-card__title u-text--lg"]], null, null, null, null, null)), (t()(), Vi(1, null, ["", "\xa0", ""]))], null, function (t, e) {
                    var n = e.component;
                    t(e, 1, 0, null == n.randomUser ? null : n.randomUser.name.first, null == n.randomUser ? null : n.randomUser.name.first);
                });
            }
            function Vd(t) {
                return Li(
                    0,
                    [
                        (t()(), Io(0, 0, null, null, 4, "div", [], null, null, null, null, null)),
                        (t()(), Io(1, 0, null, null, 1, "h3", [["class", "c-card__subtitle u-margin--none"]], null, null, null, null, null)),
                        (t()(), Vi(-1, null, ["Hi, My name is"])),
                        (t()(), Ao(16777216, null, null, 1, null, Md)),
                        yi(4, 16384, null, 0, nc, [Mn, On], { ngIf: [0, "ngIf"] }, null),
                    ],
                    function (t, e) {
                        var n = e.component;
                        t(e, 4, 0, null == n.randomUser ? null : n.randomUser.email);
                    },
                    null
                );
            }
            function jd(t) {
                return Li(0, [(t()(), Io(0, 0, null, null, 1, "h2", [["class", "c-card__title u-text--lg"]], null, null, null, null, null)), (t()(), Vi(1, null, ["", ""]))], null, function (t, e) {
                    var n = e.component;
                    t(e, 1, 0, null == n.randomUser ? null : n.randomUser.email);
                });
            }
            function Ud(t) {
                return Li(
                    0,
                    [
                        (t()(), Io(0, 0, null, null, 4, "div", [], null, null, null, null, null)),
                        (t()(), Io(1, 0, null, null, 1, "h3", [["class", "c-card__subtitle u-margin--none"]], null, null, null, null, null)),
                        (t()(), Vi(-1, null, ["My email address is"])),
                        (t()(), Ao(16777216, null, null, 1, null, jd)),
                        yi(4, 16384, null, 0, nc, [Mn, On], { ngIf: [0, "ngIf"] }, null),
                    ],
                    function (t, e) {
                        var n = e.component;
                        t(e, 4, 0, null == n.randomUser ? null : n.randomUser.email);
                    },
                    null
                );
            }
            function Ld(t) {
                return Li(
                    0,
                    [
                        (t()(), Io(0, 0, null, null, 2, "h2", [["class", "c-card__title u-text--lg"]], null, null, null, null, null)),
                        (t()(), Vi(1, null, ["", ""])),
                        (function (t, e, n) {
                            for (var r = new Array(n.length), o = 0; o < n.length; o++) {
                                var i = n[o];
                                r[o] = { flags: 8, name: i, ns: null, nonMinifiedName: i, securityContext: null, suffix: null };
                            }
                            return {
                                nodeIndex: -1,
                                parent: null,
                                renderParent: null,
                                bindingIndex: -1,
                                outputIndex: -1,
                                checkIndex: 2,
                                flags: 128,
                                childFlags: 0,
                                directChildFlags: 0,
                                childMatchedQueries: 0,
                                matchedQueries: {},
                                matchedQueryIds: 0,
                                references: {},
                                ngContentIndex: -1,
                                childCount: 0,
                                bindings: r,
                                bindingFlags: ko(r),
                                outputs: [],
                                element: null,
                                provider: null,
                                text: null,
                                query: null,
                                ngContent: null,
                            };
                        })(0, 0, new Array(3)),
                    ],
                    null,
                    function (t, e) {
                        var n = e.component;
                        t(
                            e,
                            1,
                            0,
                            (function (t, e, n, r) {
                                if (Bn.isWrapped(r)) {
                                    r = Bn.unwrap(r);
                                    var o = t.def.nodes[1].bindingIndex + 0,
                                        i = Bn.unwrap(t.oldValues[o]);
                                    t.oldValues[o] = new Bn(i);
                                }
                                return r;
                            })(
                                e,
                                0,
                                0,
                                t(
                                    e,
                                    2,
                                    0,
                                    (function (t, e) {
                                        var n = t.def.nodes[0];
                                        if (1 & n.flags) {
                                            var r = Fr(t, n.nodeIndex);
                                            return n.element.template ? r.template : r.renderElement;
                                        }
                                        if (2 & n.flags) return Hr(t, n.nodeIndex).renderText;
                                        if (20240 & n.flags) return zr(t, n.nodeIndex).instance;
                                        throw new Error("Illegal state: read nodeValue for node index 0");
                                    })(e.parent.parent),
                                    null == n.randomUser ? null : n.randomUser.dob.date,
                                    "dd/MM/yyyy"
                                )
                            )
                        );
                    }
                );
            }
            function Hd(t) {
                return Li(
                    0,
                    [
                        (t()(), Io(0, 0, null, null, 4, "div", [], null, null, null, null, null)),
                        (t()(), Io(1, 0, null, null, 1, "h3", [["class", "c-card__subtitle u-margin--none"]], null, null, null, null, null)),
                        (t()(), Vi(-1, null, ["My birthday is"])),
                        (t()(), Ao(16777216, null, null, 1, null, Ld)),
                        yi(4, 16384, null, 0, nc, [Mn, On], { ngIf: [0, "ngIf"] }, null),
                    ],
                    function (t, e) {
                        var n = e.component;
                        t(e, 4, 0, null == n.randomUser ? null : n.randomUser.dob);
                    },
                    null
                );
            }
            function Fd(t) {
                return Li(0, [(t()(), Io(0, 0, null, null, 1, "h2", [["class", "c-card__title u-text--lg"]], null, null, null, null, null)), (t()(), Vi(1, null, ["", " - ", ""]))], null, function (t, e) {
                    var n = e.component;
                    t(e, 1, 0, null == n.randomUser ? null : n.randomUser.location.postcode, null == n.randomUser ? null : n.randomUser.location.street);
                });
            }
            function zd(t) {
                return Li(
                    0,
                    [
                        (t()(), Io(0, 0, null, null, 4, "div", [], null, null, null, null, null)),
                        (t()(), Io(1, 0, null, null, 1, "h3", [["class", "c-card__subtitle u-margin--none"]], null, null, null, null, null)),
                        (t()(), Vi(-1, null, ["My address is"])),
                        (t()(), Ao(16777216, null, null, 1, null, Fd)),
                        yi(4, 16384, null, 0, nc, [Mn, On], { ngIf: [0, "ngIf"] }, null),
                    ],
                    function (t, e) {
                        var n = e.component;
                        t(e, 4, 0, null == n.randomUser ? null : n.randomUser.location);
                    },
                    null
                );
            }
            function Bd(t) {
                return Li(0, [(t()(), Io(0, 0, null, null, 1, "h2", [["class", "c-card__title u-text--lg"]], null, null, null, null, null)), (t()(), Vi(1, null, ["", ""]))], null, function (t, e) {
                    var n = e.component;
                    t(e, 1, 0, null == n.randomUser ? null : n.randomUser.phone);
                });
            }
            function qd(t) {
                return Li(
                    0,
                    [
                        (t()(), Io(0, 0, null, null, 4, "div", [], null, null, null, null, null)),
                        (t()(), Io(1, 0, null, null, 1, "h3", [["class", "c-card__subtitle u-margin--none"]], null, null, null, null, null)),
                        (t()(), Vi(-1, null, ["My phone number is"])),
                        (t()(), Ao(16777216, null, null, 1, null, Bd)),
                        yi(4, 16384, null, 0, nc, [Mn, On], { ngIf: [0, "ngIf"] }, null),
                    ],
                    function (t, e) {
                        var n = e.component;
                        t(e, 4, 0, null == n.randomUser ? null : n.randomUser.phone);
                    },
                    null
                );
            }
            function Gd(t) {
                return Li(0, [(t()(), Io(0, 0, null, null, 1, "h2", [["class", "c-card__title u-text--lg"]], null, null, null, null, null)), (t()(), Vi(1, null, ["", ""]))], null, function (t, e) {
                    var n = e.component;
                    t(e, 1, 0, null == n.randomUser ? null : n.randomUser.login.password);
                });
            }
            function Zd(t) {
                return Li(
                    0,
                    [
                        (t()(), Io(0, 0, null, null, 4, "div", [], null, null, null, null, null)),
                        (t()(), Io(1, 0, null, null, 1, "h3", [["class", "c-card__subtitle u-margin--none"]], null, null, null, null, null)),
                        (t()(), Vi(-1, null, ["My password is"])),
                        (t()(), Ao(16777216, null, null, 1, null, Gd)),
                        yi(4, 16384, null, 0, nc, [Mn, On], { ngIf: [0, "ngIf"] }, null),
                    ],
                    function (t, e) {
                        var n = e.component;
                        t(e, 4, 0, null == n.randomUser ? null : n.randomUser.login);
                    },
                    null
                );
            }
            function Wd(t) {
                return Li(
                    0,
                    [
                        ((e = 0), (n = ic), (r = [lr]), gi(-1, (e |= 16), null, 0, n, n, r)),
                        (t()(), Io(1, 0, null, null, 38, "div", [["class", "l-container u-padding--none u-margin--tp-sm"]], null, null, null, null, null)),
                        (t()(), Io(2, 0, null, null, 37, "div", [["class", "row"]], null, null, null, null, null)),
                        (t()(), Io(3, 0, null, null, 36, "div", [["class", "u-content--center"]], null, null, null, null, null)),
                        (t()(), Io(4, 0, null, null, 35, "div", [["class", "c-card u-text--centered"]], null, null, null, null, null)),
                        (t()(), Io(5, 0, null, null, 34, "div", [["class", "c-card__content u-padding--none u-border--none"]], null, null, null, null, null)),
                        (t()(), Io(6, 0, null, null, 2, "div", [["class", "c-card__header u-border--bottom"]], null, null, null, null, null)),
                        (t()(), Ao(16777216, null, null, 1, null, Od)),
                        yi(8, 16384, null, 0, nc, [Mn, On], { ngIf: [0, "ngIf"] }, null),
                        (t()(), Ao(16777216, null, null, 1, null, Vd)),
                        yi(10, 16384, null, 0, nc, [Mn, On], { ngIf: [0, "ngIf"] }, null),
                        (t()(), Ao(16777216, null, null, 1, null, Ud)),
                        yi(12, 16384, null, 0, nc, [Mn, On], { ngIf: [0, "ngIf"] }, null),
                        (t()(), Ao(16777216, null, null, 1, null, Hd)),
                        yi(14, 16384, null, 0, nc, [Mn, On], { ngIf: [0, "ngIf"] }, null),
                        (t()(), Ao(16777216, null, null, 1, null, zd)),
                        yi(16, 16384, null, 0, nc, [Mn, On], { ngIf: [0, "ngIf"] }, null),
                        (t()(), Ao(16777216, null, null, 1, null, qd)),
                        yi(18, 16384, null, 0, nc, [Mn, On], { ngIf: [0, "ngIf"] }, null),
                        (t()(), Ao(16777216, null, null, 1, null, Zd)),
                        yi(20, 16384, null, 0, nc, [Mn, On], { ngIf: [0, "ngIf"] }, null),
                        (t()(), Io(21, 0, null, null, 18, "ul", [["class", "c-tabs l-row u-grid-justify--center u-padding--md"]], null, null, null, null, null)),
                        (t()(),
                        Io(
                            22,
                            0,
                            null,
                            null,
                            2,
                            "li",
                            [["class", "c-tabs__list"]],
                            [[2, "active", null]],
                            [[null, "mouseenter"]],
                            function (t, e, n) {
                                var r = !0;
                                return "mouseenter" === e && (r = !1 !== t.component.updateView("user") && r), r;
                            },
                            null,
                            null
                        )),
                        (t()(), Io(23, 0, null, null, 1, "a", [["class", "c-tabs__link u-padding--sm"]], null, null, null, null, null)),
                        (t()(),
                        Io(
                            24,
                            0,
                            null,
                            null,
                            0,
                            "img",
                            [
                                ["class", "u-image--24"],
                                ["src", "./assets/icons/svg/misc/user.svg"],
                            ],
                            null,
                            null,
                            null,
                            null,
                            null
                        )),
                        (t()(),
                        Io(
                            25,
                            0,
                            null,
                            null,
                            2,
                            "li",
                            [["class", "c-tabs__list"]],
                            null,
                            [[null, "mouseenter"]],
                            function (t, e, n) {
                                var r = !0;
                                return "mouseenter" === e && (r = !1 !== t.component.updateView("email") && r), r;
                            },
                            null,
                            null
                        )),
                        (t()(), Io(26, 0, null, null, 1, "a", [["class", "c-tabs__link u-padding--sm"]], null, null, null, null, null)),
                        (t()(),
                        Io(
                            27,
                            0,
                            null,
                            null,
                            0,
                            "img",
                            [
                                ["class", "u-image--24"],
                                ["src", "./assets/icons/svg/misc/email.svg"],
                            ],
                            null,
                            null,
                            null,
                            null,
                            null
                        )),
                        (t()(),
                        Io(
                            28,
                            0,
                            null,
                            null,
                            2,
                            "li",
                            [["class", "c-tabs__list"]],
                            null,
                            [[null, "mouseenter"]],
                            function (t, e, n) {
                                var r = !0;
                                return "mouseenter" === e && (r = !1 !== t.component.updateView("birthday") && r), r;
                            },
                            null,
                            null
                        )),
                        (t()(), Io(29, 0, null, null, 1, "a", [["class", "c-tabs__link u-padding--sm"]], null, null, null, null, null)),
                        (t()(),
                        Io(
                            30,
                            0,
                            null,
                            null,
                            0,
                            "img",
                            [
                                ["class", "u-image--24"],
                                ["src", "./assets/icons/svg/misc/calendar.svg"],
                            ],
                            null,
                            null,
                            null,
                            null,
                            null
                        )),
                        (t()(),
                        Io(
                            31,
                            0,
                            null,
                            null,
                            2,
                            "li",
                            [["class", "c-tabs__list"]],
                            null,
                            [[null, "mouseenter"]],
                            function (t, e, n) {
                                var r = !0;
                                return "mouseenter" === e && (r = !1 !== t.component.updateView("address") && r), r;
                            },
                            null,
                            null
                        )),
                        (t()(), Io(32, 0, null, null, 1, "a", [["class", "c-tabs__link u-padding--sm"]], null, null, null, null, null)),
                        (t()(),
                        Io(
                            33,
                            0,
                            null,
                            null,
                            0,
                            "img",
                            [
                                ["class", "u-image--24"],
                                ["src", "./assets/icons/svg/misc/map-location.svg"],
                            ],
                            null,
                            null,
                            null,
                            null,
                            null
                        )),
                        (t()(),
                        Io(
                            34,
                            0,
                            null,
                            null,
                            2,
                            "li",
                            [["class", "c-tabs__list"]],
                            null,
                            [[null, "mouseenter"]],
                            function (t, e, n) {
                                var r = !0;
                                return "mouseenter" === e && (r = !1 !== t.component.updateView("phone") && r), r;
                            },
                            null,
                            null
                        )),
                        (t()(), Io(35, 0, null, null, 1, "a", [["class", "c-tabs__link u-padding--sm"]], null, null, null, null, null)),
                        (t()(),
                        Io(
                            36,
                            0,
                            null,
                            null,
                            0,
                            "img",
                            [
                                ["class", "u-image--24"],
                                ["src", "./assets/icons/svg/misc/call.svg"],
                            ],
                            null,
                            null,
                            null,
                            null,
                            null
                        )),
                        (t()(),
                        Io(
                            37,
                            0,
                            null,
                            null,
                            2,
                            "li",
                            [["class", "c-tabs__list"]],
                            null,
                            [[null, "mouseenter"]],
                            function (t, e, n) {
                                var r = !0;
                                return "mouseenter" === e && (r = !1 !== t.component.updateView("password") && r), r;
                            },
                            null,
                            null
                        )),
                        (t()(), Io(38, 0, null, null, 1, "a", [["class", "c-tabs__link u-padding--sm"]], null, null, null, null, null)),
                        (t()(),
                        Io(
                            39,
                            0,
                            null,
                            null,
                            0,
                            "img",
                            [
                                ["class", "u-image--24"],
                                ["src", "./assets/icons/svg/misc/locked.svg"],
                            ],
                            null,
                            null,
                            null,
                            null,
                            null
                        )),
                    ],
                    function (t, e) {
                        var n = e.component;
                        t(e, 8, 0, null == n.randomUser ? null : n.randomUser.picture),
                            t(e, 10, 0, "user" === n.currentView),
                            t(e, 12, 0, "email" === n.currentView),
                            t(e, 14, 0, "birthday" === n.currentView),
                            t(e, 16, 0, "address" === n.currentView),
                            t(e, 18, 0, "phone" === n.currentView),
                            t(e, 20, 0, "password" === n.currentView);
                    },
                    function (t, e) {
                        t(e, 22, 0, e.component.active);
                    }
                );
                var e, n, r;
            }
            var Qd = to({ encapsulation: 0, styles: [[""]], data: {} });
            function Yd(t) {
                return Li(
                    0,
                    [
                        (function (t, e, n) {
                            var r = [];
                            for (var o in n) r.push({ propName: o, bindingType: n[o] });
                            return {
                                nodeIndex: -1,
                                parent: null,
                                renderParent: null,
                                bindingIndex: -1,
                                outputIndex: -1,
                                checkIndex: -1,
                                flags: 402653184,
                                childFlags: 0,
                                directChildFlags: 0,
                                childMatchedQueries: 0,
                                ngContentIndex: -1,
                                matchedQueries: {},
                                matchedQueryIds: 0,
                                references: {},
                                childCount: 0,
                                bindings: [],
                                bindingFlags: 0,
                                outputs: [],
                                element: null,
                                provider: null,
                                text: null,
                                query: { id: 1, filterId: fo(1), bindings: r },
                                ngContent: null,
                            };
                        })(0, 0, { elementView: 0 }),
                        (t()(), Io(1, 0, null, null, 1, "theme-user", [], null, null, null, Wd, Dd)),
                        yi(2, 114688, null, 0, Rd, [Nd], null, null),
                    ],
                    function (t, e) {
                        t(e, 2, 0);
                    },
                    null
                );
            }
            var Kd = Wo(
                    "plg-root",
                    Au,
                    function (t) {
                        return Li(0, [(t()(), Io(0, 0, null, null, 1, "plg-root", [], null, null, null, Yd, Qd)), yi(1, 49152, null, 0, Au, [kn], null, null)], null, null);
                    },
                    {},
                    {},
                    []
                ),
                Xd = (function () {
                    function t(t) {
                        (this.http = t), (this.contentSection = 0), (this.resourceStringPack = {});
                    }
                    return (
                        (t.prototype.contentSelect = function (t, e) {
                            return this.getContentSectionByRoute(t, e);
                        }),
                        (t.prototype.getContentSectionByRoute = function (t, e) {
                            var n = t;
                            t.hasOwnProperty("routeConfig") && ("" === (n = t.routeConfig.path) && (n = "Home"), (e = t.data.hostEnt)), 0 !== n.indexOf("/") && (n = "/" + n);
                            var r = t.data.cms + "/gmapi/content/sections/";
                            return (
                                (r += "?host=" + e),
                                this.http.get((r += "&route=" + n)).pipe(
                                    $u(this.handleError),
                                    Q(function (t) {
                                        return t;
                                    })
                                )
                            );
                        }),
                        (t.prototype.handleError = function (t) {
                            return (
                                t.error instanceof ErrorEvent ? console.error("An error occurred:", t.error.message) : console.error("Backend returned code " + t.status + ", body was: " + t.error),
                                Xf("Something bad happened; please try again later.")
                            );
                        }),
                        (t.ngInjectableDef = gt({
                            factory: function () {
                                return new t(ie(vd));
                            },
                            token: t,
                            providedIn: "root",
                        })),
                        t
                    );
                })(),
                $d = (function () {
                    function t(t) {
                        this.content = t;
                    }
                    return (
                        (t.prototype.resolve = function (t) {
                            if (t.routeConfig.data) return t.routeConfig.data.hasOwnProperty("content") ? t.routeConfig.data.content : this.content.contentSelect(t);
                        }),
                        (t.ngInjectableDef = gt({
                            factory: function () {
                                return new t(ie(Xd));
                            },
                            token: t,
                            providedIn: "root",
                        })),
                        t
                    );
                })(),
                Jd = (function () {
                    function t() {
                        this.modals = [];
                    }
                    return (
                        (t.prototype.add = function (t) {
                            this.modals.push(t);
                        }),
                        (t.prototype.remove = function (t) {
                            this.modals = this.modals.filter(function (e) {
                                return e.id !== t;
                            });
                        }),
                        (t.prototype.open = function (t) {
                            this.modals
                                .filter(function (e) {
                                    return e.id === t;
                                })[0]
                                .open();
                        }),
                        (t.prototype.close = function (t) {
                            this.modals
                                .filter(function (e) {
                                    return e.id === t;
                                })[0]
                                .close();
                        }),
                        (t.prototype.clearAll = function () {
                            this.modals.filter(function (t) {
                                return t.close();
                            });
                        }),
                        t
                    );
                })(),
                tv = (function (t) {
                    function e(e, n) {
                        var r = t.call(this, e) || this;
                        (r.sources = n), (r.completed = 0), (r.haveValues = 0);
                        var o = n.length;
                        r.values = new Array(o);
                        for (var i = 0; i < o; i++) {
                            var a = Z(r, n[i], null, i);
                            a && r.add(a);
                        }
                        return r;
                    }
                    return (
                        o(e, t),
                        (e.prototype.notifyNext = function (t, e, n, r, o) {
                            (this.values[n] = e), o._hasValue || ((o._hasValue = !0), this.haveValues++);
                        }),
                        (e.prototype.notifyComplete = function (t) {
                            var e = this.destination,
                                n = this.haveValues,
                                r = this.values,
                                o = r.length;
                            t._hasValue ? (this.completed++, this.completed === o && (n === o && e.next(r), e.complete())) : e.complete();
                        }),
                        e
                    );
                })(W);
            function ev(t) {
                return null == t || 0 === t.length;
            }
            var nv = /^(?=.{1,254}$)(?=.{1,64}@)[-!#$%&'*+/0-9=?A-Z^_`a-z{|}~]+(\.[-!#$%&'*+/0-9=?A-Z^_`a-z{|}~]+)*@[A-Za-z0-9]([A-Za-z0-9-]{0,61}[A-Za-z0-9])?(\.[A-Za-z0-9]([A-Za-z0-9-]{0,61}[A-Za-z0-9])?)*$/,
                rv = (function () {
                    function t() {}
                    return (
                        (t.min = function (t) {
                            return function (e) {
                                if (ev(e.value) || ev(t)) return null;
                                var n = parseFloat(e.value);
                                return !isNaN(n) && n < t ? { min: { min: t, actual: e.value } } : null;
                            };
                        }),
                        (t.max = function (t) {
                            return function (e) {
                                if (ev(e.value) || ev(t)) return null;
                                var n = parseFloat(e.value);
                                return !isNaN(n) && n > t ? { max: { max: t, actual: e.value } } : null;
                            };
                        }),
                        (t.required = function (t) {
                            return ev(t.value) ? { required: !0 } : null;
                        }),
                        (t.requiredTrue = function (t) {
                            return !0 === t.value ? null : { required: !0 };
                        }),
                        (t.email = function (t) {
                            return ev(t.value) ? null : nv.test(t.value) ? null : { email: !0 };
                        }),
                        (t.minLength = function (t) {
                            return function (e) {
                                if (ev(e.value)) return null;
                                var n = e.value ? e.value.length : 0;
                                return n < t ? { minlength: { requiredLength: t, actualLength: n } } : null;
                            };
                        }),
                        (t.maxLength = function (t) {
                            return function (e) {
                                var n = e.value ? e.value.length : 0;
                                return n > t ? { maxlength: { requiredLength: t, actualLength: n } } : null;
                            };
                        }),
                        (t.pattern = function (e) {
                            return e
                                ? ("string" == typeof e ? ((r = ""), "^" !== e.charAt(0) && (r += "^"), (r += e), "$" !== e.charAt(e.length - 1) && (r += "$"), (n = new RegExp(r))) : ((r = e.toString()), (n = e)),
                                  function (t) {
                                      if (ev(t.value)) return null;
                                      var e = t.value;
                                      return n.test(e) ? null : { pattern: { requiredPattern: r, actualValue: e } };
                                  })
                                : t.nullValidator;
                            var n, r;
                        }),
                        (t.nullValidator = function (t) {
                            return null;
                        }),
                        (t.compose = function (t) {
                            if (!t) return null;
                            var e = t.filter(ov);
                            return 0 == e.length
                                ? null
                                : function (t) {
                                      return av(
                                          (function (t, n) {
                                              return e.map(function (e) {
                                                  return e(t);
                                              });
                                          })(t)
                                      );
                                  };
                        }),
                        (t.composeAsync = function (t) {
                            if (!t) return null;
                            var e = t.filter(ov);
                            return 0 == e.length
                                ? null
                                : function (t) {
                                      return (function t() {
                                          for (var e, n = [], r = 0; r < arguments.length; r++) n[r] = arguments[r];
                                          return (
                                              "function" == typeof n[n.length - 1] && (e = n.pop()),
                                              1 === n.length && g(n[0]) && (n = n[0]),
                                              0 === n.length
                                                  ? Iu
                                                  : e
                                                  ? t(n).pipe(
                                                        Q(function (t) {
                                                            return e.apply(void 0, t);
                                                        })
                                                    )
                                                  : new O(function (t) {
                                                        return new tv(t, n);
                                                    })
                                          );
                                      })(
                                          (function (t, n) {
                                              return e.map(function (e) {
                                                  return e(t);
                                              });
                                          })(t).map(iv)
                                      ).pipe(Q(av));
                                  };
                        }),
                        t
                    );
                })();
            function ov(t) {
                return null != t;
            }
            function iv(t) {
                var e = ke(t) ? $(t) : t;
                if (!Ae(e)) throw new Error("Expected validator to return Promise or Observable.");
                return e;
            }
            function av(t) {
                var e = t.reduce(function (t, e) {
                    return null != e ? i({}, t, e) : t;
                }, {});
                return 0 === Object.keys(e).length ? null : e;
            }
            function sv(t) {
                return t.validate
                    ? function (e) {
                          return t.validate(e);
                      }
                    : t;
            }
            function uv(t) {
                return t.validate
                    ? function (e) {
                          return t.validate(e);
                      }
                    : t;
            }
            var lv = (function () {
                function t() {
                    this._accessors = [];
                }
                return (
                    (t.prototype.add = function (t, e) {
                        this._accessors.push([t, e]);
                    }),
                    (t.prototype.remove = function (t) {
                        for (var e = this._accessors.length - 1; e >= 0; --e) if (this._accessors[e][1] === t) return void this._accessors.splice(e, 1);
                    }),
                    (t.prototype.select = function (t) {
                        var e = this;
                        this._accessors.forEach(function (n) {
                            e._isSameGroup(n, t) && n[1] !== t && n[1].fireUncheck(t.value);
                        });
                    }),
                    (t.prototype._isSameGroup = function (t, e) {
                        return !!t[0].control && t[0]._parent === e._control._parent && t[1].name === e.name;
                    }),
                    t
                );
            })();
            function cv(t) {
                var e,
                    n = pv(t) ? t.validators : t;
                return Array.isArray(n) ? (null != (e = n) ? rv.compose(e.map(sv)) : null) : n || null;
            }
            function hv(t, e) {
                var n,
                    r = pv(e) ? e.asyncValidators : t;
                return Array.isArray(r) ? (null != (n = r) ? rv.composeAsync(n.map(uv)) : null) : r || null;
            }
            function pv(t) {
                return null != t && !Array.isArray(t) && "object" == typeof t;
            }
            var fv = (function () {
                    function t(t, e) {
                        (this.validator = t), (this.asyncValidator = e), (this._onCollectionChange = function () {}), (this.pristine = !0), (this.touched = !1), (this._onDisabledChange = []);
                    }
                    return (
                        Object.defineProperty(t.prototype, "parent", {
                            get: function () {
                                return this._parent;
                            },
                            enumerable: !0,
                            configurable: !0,
                        }),
                        Object.defineProperty(t.prototype, "valid", {
                            get: function () {
                                return "VALID" === this.status;
                            },
                            enumerable: !0,
                            configurable: !0,
                        }),
                        Object.defineProperty(t.prototype, "invalid", {
                            get: function () {
                                return "INVALID" === this.status;
                            },
                            enumerable: !0,
                            configurable: !0,
                        }),
                        Object.defineProperty(t.prototype, "pending", {
                            get: function () {
                                return "PENDING" == this.status;
                            },
                            enumerable: !0,
                            configurable: !0,
                        }),
                        Object.defineProperty(t.prototype, "disabled", {
                            get: function () {
                                return "DISABLED" === this.status;
                            },
                            enumerable: !0,
                            configurable: !0,
                        }),
                        Object.defineProperty(t.prototype, "enabled", {
                            get: function () {
                                return "DISABLED" !== this.status;
                            },
                            enumerable: !0,
                            configurable: !0,
                        }),
                        Object.defineProperty(t.prototype, "dirty", {
                            get: function () {
                                return !this.pristine;
                            },
                            enumerable: !0,
                            configurable: !0,
                        }),
                        Object.defineProperty(t.prototype, "untouched", {
                            get: function () {
                                return !this.touched;
                            },
                            enumerable: !0,
                            configurable: !0,
                        }),
                        Object.defineProperty(t.prototype, "updateOn", {
                            get: function () {
                                return this._updateOn ? this._updateOn : this.parent ? this.parent.updateOn : "change";
                            },
                            enumerable: !0,
                            configurable: !0,
                        }),
                        (t.prototype.setValidators = function (t) {
                            this.validator = cv(t);
                        }),
                        (t.prototype.setAsyncValidators = function (t) {
                            this.asyncValidator = hv(t);
                        }),
                        (t.prototype.clearValidators = function () {
                            this.validator = null;
                        }),
                        (t.prototype.clearAsyncValidators = function () {
                            this.asyncValidator = null;
                        }),
                        (t.prototype.markAsTouched = function (t) {
                            void 0 === t && (t = {}), (this.touched = !0), this._parent && !t.onlySelf && this._parent.markAsTouched(t);
                        }),
                        (t.prototype.markAsUntouched = function (t) {
                            void 0 === t && (t = {}),
                                (this.touched = !1),
                                (this._pendingTouched = !1),
                                this._forEachChild(function (t) {
                                    t.markAsUntouched({ onlySelf: !0 });
                                }),
                                this._parent && !t.onlySelf && this._parent._updateTouched(t);
                        }),
                        (t.prototype.markAsDirty = function (t) {
                            void 0 === t && (t = {}), (this.pristine = !1), this._parent && !t.onlySelf && this._parent.markAsDirty(t);
                        }),
                        (t.prototype.markAsPristine = function (t) {
                            void 0 === t && (t = {}),
                                (this.pristine = !0),
                                (this._pendingDirty = !1),
                                this._forEachChild(function (t) {
                                    t.markAsPristine({ onlySelf: !0 });
                                }),
                                this._parent && !t.onlySelf && this._parent._updatePristine(t);
                        }),
                        (t.prototype.markAsPending = function (t) {
                            void 0 === t && (t = {}), (this.status = "PENDING"), !1 !== t.emitEvent && this.statusChanges.emit(this.status), this._parent && !t.onlySelf && this._parent.markAsPending(t);
                        }),
                        (t.prototype.disable = function (t) {
                            void 0 === t && (t = {}),
                                (this.status = "DISABLED"),
                                (this.errors = null),
                                this._forEachChild(function (e) {
                                    e.disable(i({}, t, { onlySelf: !0 }));
                                }),
                                this._updateValue(),
                                !1 !== t.emitEvent && (this.valueChanges.emit(this.value), this.statusChanges.emit(this.status)),
                                this._updateAncestors(t),
                                this._onDisabledChange.forEach(function (t) {
                                    return t(!0);
                                });
                        }),
                        (t.prototype.enable = function (t) {
                            void 0 === t && (t = {}),
                                (this.status = "VALID"),
                                this._forEachChild(function (e) {
                                    e.enable(i({}, t, { onlySelf: !0 }));
                                }),
                                this.updateValueAndValidity({ onlySelf: !0, emitEvent: t.emitEvent }),
                                this._updateAncestors(t),
                                this._onDisabledChange.forEach(function (t) {
                                    return t(!1);
                                });
                        }),
                        (t.prototype._updateAncestors = function (t) {
                            this._parent && !t.onlySelf && (this._parent.updateValueAndValidity(t), this._parent._updatePristine(), this._parent._updateTouched());
                        }),
                        (t.prototype.setParent = function (t) {
                            this._parent = t;
                        }),
                        (t.prototype.updateValueAndValidity = function (t) {
                            void 0 === t && (t = {}),
                                this._setInitialStatus(),
                                this._updateValue(),
                                this.enabled &&
                                    (this._cancelExistingSubscription(),
                                    (this.errors = this._runValidator()),
                                    (this.status = this._calculateStatus()),
                                    ("VALID" !== this.status && "PENDING" !== this.status) || this._runAsyncValidator(t.emitEvent)),
                                !1 !== t.emitEvent && (this.valueChanges.emit(this.value), this.statusChanges.emit(this.status)),
                                this._parent && !t.onlySelf && this._parent.updateValueAndValidity(t);
                        }),
                        (t.prototype._updateTreeValidity = function (t) {
                            void 0 === t && (t = { emitEvent: !0 }),
                                this._forEachChild(function (e) {
                                    return e._updateTreeValidity(t);
                                }),
                                this.updateValueAndValidity({ onlySelf: !0, emitEvent: t.emitEvent });
                        }),
                        (t.prototype._setInitialStatus = function () {
                            this.status = this._allControlsDisabled() ? "DISABLED" : "VALID";
                        }),
                        (t.prototype._runValidator = function () {
                            return this.validator ? this.validator(this) : null;
                        }),
                        (t.prototype._runAsyncValidator = function (t) {
                            var e = this;
                            if (this.asyncValidator) {
                                this.status = "PENDING";
                                var n = iv(this.asyncValidator(this));
                                this._asyncValidationSubscription = n.subscribe(function (n) {
                                    return e.setErrors(n, { emitEvent: t });
                                });
                            }
                        }),
                        (t.prototype._cancelExistingSubscription = function () {
                            this._asyncValidationSubscription && this._asyncValidationSubscription.unsubscribe();
                        }),
                        (t.prototype.setErrors = function (t, e) {
                            void 0 === e && (e = {}), (this.errors = t), this._updateControlsErrors(!1 !== e.emitEvent);
                        }),
                        (t.prototype.get = function (t) {
                            return (function (t, e, n) {
                                return null == e
                                    ? null
                                    : (e instanceof Array || (e = e.split(".")),
                                      e instanceof Array && 0 === e.length
                                          ? null
                                          : e.reduce(function (t, e) {
                                                return t instanceof vv ? (t.controls.hasOwnProperty(e) ? t.controls[e] : null) : (t instanceof yv && t.at(e)) || null;
                                            }, t));
                            })(this, t);
                        }),
                        (t.prototype.getError = function (t, e) {
                            var n = e ? this.get(e) : this;
                            return n && n.errors ? n.errors[t] : null;
                        }),
                        (t.prototype.hasError = function (t, e) {
                            return !!this.getError(t, e);
                        }),
                        Object.defineProperty(t.prototype, "root", {
                            get: function () {
                                for (var t = this; t._parent; ) t = t._parent;
                                return t;
                            },
                            enumerable: !0,
                            configurable: !0,
                        }),
                        (t.prototype._updateControlsErrors = function (t) {
                            (this.status = this._calculateStatus()), t && this.statusChanges.emit(this.status), this._parent && this._parent._updateControlsErrors(t);
                        }),
                        (t.prototype._initObservables = function () {
                            (this.valueChanges = new en()), (this.statusChanges = new en());
                        }),
                        (t.prototype._calculateStatus = function () {
                            return this._allControlsDisabled() ? "DISABLED" : this.errors ? "INVALID" : this._anyControlsHaveStatus("PENDING") ? "PENDING" : this._anyControlsHaveStatus("INVALID") ? "INVALID" : "VALID";
                        }),
                        (t.prototype._anyControlsHaveStatus = function (t) {
                            return this._anyControls(function (e) {
                                return e.status === t;
                            });
                        }),
                        (t.prototype._anyControlsDirty = function () {
                            return this._anyControls(function (t) {
                                return t.dirty;
                            });
                        }),
                        (t.prototype._anyControlsTouched = function () {
                            return this._anyControls(function (t) {
                                return t.touched;
                            });
                        }),
                        (t.prototype._updatePristine = function (t) {
                            void 0 === t && (t = {}), (this.pristine = !this._anyControlsDirty()), this._parent && !t.onlySelf && this._parent._updatePristine(t);
                        }),
                        (t.prototype._updateTouched = function (t) {
                            void 0 === t && (t = {}), (this.touched = this._anyControlsTouched()), this._parent && !t.onlySelf && this._parent._updateTouched(t);
                        }),
                        (t.prototype._isBoxedValue = function (t) {
                            return "object" == typeof t && null !== t && 2 === Object.keys(t).length && "value" in t && "disabled" in t;
                        }),
                        (t.prototype._registerOnCollectionChange = function (t) {
                            this._onCollectionChange = t;
                        }),
                        (t.prototype._setUpdateStrategy = function (t) {
                            pv(t) && null != t.updateOn && (this._updateOn = t.updateOn);
                        }),
                        t
                    );
                })(),
                dv = (function (t) {
                    function e(e, n, r) {
                        void 0 === e && (e = null);
                        var o = t.call(this, cv(n), hv(r, n)) || this;
                        return (o._onChange = []), o._applyFormState(e), o._setUpdateStrategy(n), o.updateValueAndValidity({ onlySelf: !0, emitEvent: !1 }), o._initObservables(), o;
                    }
                    return (
                        o(e, t),
                        (e.prototype.setValue = function (t, e) {
                            var n = this;
                            void 0 === e && (e = {}),
                                (this.value = this._pendingValue = t),
                                this._onChange.length &&
                                    !1 !== e.emitModelToViewChange &&
                                    this._onChange.forEach(function (t) {
                                        return t(n.value, !1 !== e.emitViewToModelChange);
                                    }),
                                this.updateValueAndValidity(e);
                        }),
                        (e.prototype.patchValue = function (t, e) {
                            void 0 === e && (e = {}), this.setValue(t, e);
                        }),
                        (e.prototype.reset = function (t, e) {
                            void 0 === t && (t = null), void 0 === e && (e = {}), this._applyFormState(t), this.markAsPristine(e), this.markAsUntouched(e), this.setValue(this.value, e), (this._pendingChange = !1);
                        }),
                        (e.prototype._updateValue = function () {}),
                        (e.prototype._anyControls = function (t) {
                            return !1;
                        }),
                        (e.prototype._allControlsDisabled = function () {
                            return this.disabled;
                        }),
                        (e.prototype.registerOnChange = function (t) {
                            this._onChange.push(t);
                        }),
                        (e.prototype._clearChangeFns = function () {
                            (this._onChange = []), (this._onDisabledChange = []), (this._onCollectionChange = function () {});
                        }),
                        (e.prototype.registerOnDisabledChange = function (t) {
                            this._onDisabledChange.push(t);
                        }),
                        (e.prototype._forEachChild = function (t) {}),
                        (e.prototype._syncPendingControls = function () {
                            return !(
                                "submit" !== this.updateOn ||
                                (this._pendingDirty && this.markAsDirty(), this._pendingTouched && this.markAsTouched(), !this._pendingChange) ||
                                (this.setValue(this._pendingValue, { onlySelf: !0, emitModelToViewChange: !1 }), 0)
                            );
                        }),
                        (e.prototype._applyFormState = function (t) {
                            this._isBoxedValue(t)
                                ? ((this.value = this._pendingValue = t.value), t.disabled ? this.disable({ onlySelf: !0, emitEvent: !1 }) : this.enable({ onlySelf: !0, emitEvent: !1 }))
                                : (this.value = this._pendingValue = t);
                        }),
                        e
                    );
                })(fv),
                vv = (function (t) {
                    function e(e, n, r) {
                        var o = t.call(this, cv(n), hv(r, n)) || this;
                        return (o.controls = e), o._initObservables(), o._setUpdateStrategy(n), o._setUpControls(), o.updateValueAndValidity({ onlySelf: !0, emitEvent: !1 }), o;
                    }
                    return (
                        o(e, t),
                        (e.prototype.registerControl = function (t, e) {
                            return this.controls[t] ? this.controls[t] : ((this.controls[t] = e), e.setParent(this), e._registerOnCollectionChange(this._onCollectionChange), e);
                        }),
                        (e.prototype.addControl = function (t, e) {
                            this.registerControl(t, e), this.updateValueAndValidity(), this._onCollectionChange();
                        }),
                        (e.prototype.removeControl = function (t) {
                            this.controls[t] && this.controls[t]._registerOnCollectionChange(function () {}), delete this.controls[t], this.updateValueAndValidity(), this._onCollectionChange();
                        }),
                        (e.prototype.setControl = function (t, e) {
                            this.controls[t] && this.controls[t]._registerOnCollectionChange(function () {}), delete this.controls[t], e && this.registerControl(t, e), this.updateValueAndValidity(), this._onCollectionChange();
                        }),
                        (e.prototype.contains = function (t) {
                            return this.controls.hasOwnProperty(t) && this.controls[t].enabled;
                        }),
                        (e.prototype.setValue = function (t, e) {
                            var n = this;
                            void 0 === e && (e = {}),
                                this._checkAllValuesPresent(t),
                                Object.keys(t).forEach(function (r) {
                                    n._throwIfControlMissing(r), n.controls[r].setValue(t[r], { onlySelf: !0, emitEvent: e.emitEvent });
                                }),
                                this.updateValueAndValidity(e);
                        }),
                        (e.prototype.patchValue = function (t, e) {
                            var n = this;
                            void 0 === e && (e = {}),
                                Object.keys(t).forEach(function (r) {
                                    n.controls[r] && n.controls[r].patchValue(t[r], { onlySelf: !0, emitEvent: e.emitEvent });
                                }),
                                this.updateValueAndValidity(e);
                        }),
                        (e.prototype.reset = function (t, e) {
                            void 0 === t && (t = {}),
                                void 0 === e && (e = {}),
                                this._forEachChild(function (n, r) {
                                    n.reset(t[r], { onlySelf: !0, emitEvent: e.emitEvent });
                                }),
                                this.updateValueAndValidity(e),
                                this._updatePristine(e),
                                this._updateTouched(e);
                        }),
                        (e.prototype.getRawValue = function () {
                            return this._reduceChildren({}, function (t, e, n) {
                                return (t[n] = e instanceof dv ? e.value : e.getRawValue()), t;
                            });
                        }),
                        (e.prototype._syncPendingControls = function () {
                            var t = this._reduceChildren(!1, function (t, e) {
                                return !!e._syncPendingControls() || t;
                            });
                            return t && this.updateValueAndValidity({ onlySelf: !0 }), t;
                        }),
                        (e.prototype._throwIfControlMissing = function (t) {
                            if (!Object.keys(this.controls).length)
                                throw new Error("\n        There are no form controls registered with this group yet.  If you're using ngModel,\n        you may want to check next tick (e.g. use setTimeout).\n      ");
                            if (!this.controls[t]) throw new Error("Cannot find form control with name: " + t + ".");
                        }),
                        (e.prototype._forEachChild = function (t) {
                            var e = this;
                            Object.keys(this.controls).forEach(function (n) {
                                return t(e.controls[n], n);
                            });
                        }),
                        (e.prototype._setUpControls = function () {
                            var t = this;
                            this._forEachChild(function (e) {
                                e.setParent(t), e._registerOnCollectionChange(t._onCollectionChange);
                            });
                        }),
                        (e.prototype._updateValue = function () {
                            this.value = this._reduceValue();
                        }),
                        (e.prototype._anyControls = function (t) {
                            var e = this,
                                n = !1;
                            return (
                                this._forEachChild(function (r, o) {
                                    n = n || (e.contains(o) && t(r));
                                }),
                                n
                            );
                        }),
                        (e.prototype._reduceValue = function () {
                            var t = this;
                            return this._reduceChildren({}, function (e, n, r) {
                                return (n.enabled || t.disabled) && (e[r] = n.value), e;
                            });
                        }),
                        (e.prototype._reduceChildren = function (t, e) {
                            var n = t;
                            return (
                                this._forEachChild(function (t, r) {
                                    n = e(n, t, r);
                                }),
                                n
                            );
                        }),
                        (e.prototype._allControlsDisabled = function () {
                            var t, e;
                            try {
                                for (var n = l(Object.keys(this.controls)), r = n.next(); !r.done; r = n.next()) if (this.controls[r.value].enabled) return !1;
                            } catch (e) {
                                t = { error: e };
                            } finally {
                                try {
                                    r && !r.done && (e = n.return) && e.call(n);
                                } finally {
                                    if (t) throw t.error;
                                }
                            }
                            return Object.keys(this.controls).length > 0 || this.disabled;
                        }),
                        (e.prototype._checkAllValuesPresent = function (t) {
                            this._forEachChild(function (e, n) {
                                if (void 0 === t[n]) throw new Error("Must supply a value for form control with name: '" + n + "'.");
                            });
                        }),
                        e
                    );
                })(fv),
                yv = (function (t) {
                    function e(e, n, r) {
                        var o = t.call(this, cv(n), hv(r, n)) || this;
                        return (o.controls = e), o._initObservables(), o._setUpdateStrategy(n), o._setUpControls(), o.updateValueAndValidity({ onlySelf: !0, emitEvent: !1 }), o;
                    }
                    return (
                        o(e, t),
                        (e.prototype.at = function (t) {
                            return this.controls[t];
                        }),
                        (e.prototype.push = function (t) {
                            this.controls.push(t), this._registerControl(t), this.updateValueAndValidity(), this._onCollectionChange();
                        }),
                        (e.prototype.insert = function (t, e) {
                            this.controls.splice(t, 0, e), this._registerControl(e), this.updateValueAndValidity();
                        }),
                        (e.prototype.removeAt = function (t) {
                            this.controls[t] && this.controls[t]._registerOnCollectionChange(function () {}), this.controls.splice(t, 1), this.updateValueAndValidity();
                        }),
                        (e.prototype.setControl = function (t, e) {
                            this.controls[t] && this.controls[t]._registerOnCollectionChange(function () {}),
                                this.controls.splice(t, 1),
                                e && (this.controls.splice(t, 0, e), this._registerControl(e)),
                                this.updateValueAndValidity(),
                                this._onCollectionChange();
                        }),
                        Object.defineProperty(e.prototype, "length", {
                            get: function () {
                                return this.controls.length;
                            },
                            enumerable: !0,
                            configurable: !0,
                        }),
                        (e.prototype.setValue = function (t, e) {
                            var n = this;
                            void 0 === e && (e = {}),
                                this._checkAllValuesPresent(t),
                                t.forEach(function (t, r) {
                                    n._throwIfControlMissing(r), n.at(r).setValue(t, { onlySelf: !0, emitEvent: e.emitEvent });
                                }),
                                this.updateValueAndValidity(e);
                        }),
                        (e.prototype.patchValue = function (t, e) {
                            var n = this;
                            void 0 === e && (e = {}),
                                t.forEach(function (t, r) {
                                    n.at(r) && n.at(r).patchValue(t, { onlySelf: !0, emitEvent: e.emitEvent });
                                }),
                                this.updateValueAndValidity(e);
                        }),
                        (e.prototype.reset = function (t, e) {
                            void 0 === t && (t = []),
                                void 0 === e && (e = {}),
                                this._forEachChild(function (n, r) {
                                    n.reset(t[r], { onlySelf: !0, emitEvent: e.emitEvent });
                                }),
                                this.updateValueAndValidity(e),
                                this._updatePristine(e),
                                this._updateTouched(e);
                        }),
                        (e.prototype.getRawValue = function () {
                            return this.controls.map(function (t) {
                                return t instanceof dv ? t.value : t.getRawValue();
                            });
                        }),
                        (e.prototype._syncPendingControls = function () {
                            var t = this.controls.reduce(function (t, e) {
                                return !!e._syncPendingControls() || t;
                            }, !1);
                            return t && this.updateValueAndValidity({ onlySelf: !0 }), t;
                        }),
                        (e.prototype._throwIfControlMissing = function (t) {
                            if (!this.controls.length)
                                throw new Error("\n        There are no form controls registered with this array yet.  If you're using ngModel,\n        you may want to check next tick (e.g. use setTimeout).\n      ");
                            if (!this.at(t)) throw new Error("Cannot find form control at index " + t);
                        }),
                        (e.prototype._forEachChild = function (t) {
                            this.controls.forEach(function (e, n) {
                                t(e, n);
                            });
                        }),
                        (e.prototype._updateValue = function () {
                            var t = this;
                            this.value = this.controls
                                .filter(function (e) {
                                    return e.enabled || t.disabled;
                                })
                                .map(function (t) {
                                    return t.value;
                                });
                        }),
                        (e.prototype._anyControls = function (t) {
                            return this.controls.some(function (e) {
                                return e.enabled && t(e);
                            });
                        }),
                        (e.prototype._setUpControls = function () {
                            var t = this;
                            this._forEachChild(function (e) {
                                return t._registerControl(e);
                            });
                        }),
                        (e.prototype._checkAllValuesPresent = function (t) {
                            this._forEachChild(function (e, n) {
                                if (void 0 === t[n]) throw new Error("Must supply a value for form control at index: " + n + ".");
                            });
                        }),
                        (e.prototype._allControlsDisabled = function () {
                            var t, e;
                            try {
                                for (var n = l(this.controls), r = n.next(); !r.done; r = n.next()) if (r.value.enabled) return !1;
                            } catch (e) {
                                t = { error: e };
                            } finally {
                                try {
                                    r && !r.done && (e = n.return) && e.call(n);
                                } finally {
                                    if (t) throw t.error;
                                }
                            }
                            return this.controls.length > 0 || this.disabled;
                        }),
                        (e.prototype._registerControl = function (t) {
                            t.setParent(this), t._registerOnCollectionChange(this._onCollectionChange);
                        }),
                        e
                    );
                })(fv),
                gv = new mt("NgModelWithFormControlWarning"),
                mv = (function () {
                    function t() {}
                    return (
                        (t.prototype.group = function (t, e) {
                            void 0 === e && (e = null);
                            var n = this._reduceControls(t);
                            return new vv(n, null != e ? e.validator : null, null != e ? e.asyncValidator : null);
                        }),
                        (t.prototype.control = function (t, e, n) {
                            return new dv(t, e, n);
                        }),
                        (t.prototype.array = function (t, e, n) {
                            var r = this,
                                o = t.map(function (t) {
                                    return r._createControl(t);
                                });
                            return new yv(o, e, n);
                        }),
                        (t.prototype._reduceControls = function (t) {
                            var e = this,
                                n = {};
                            return (
                                Object.keys(t).forEach(function (r) {
                                    n[r] = e._createControl(t[r]);
                                }),
                                n
                            );
                        }),
                        (t.prototype._createControl = function (t) {
                            return t instanceof dv || t instanceof vv || t instanceof yv ? t : Array.isArray(t) ? this.control(t[0], t.length > 1 ? t[1] : null, t.length > 2 ? t[2] : null) : this.control(t);
                        }),
                        t
                    );
                })(),
                bv = function () {},
                wv = (function () {
                    function t() {}
                    var e;
                    return (
                        (e = t),
                        (t.withConfig = function (t) {
                            return { ngModule: e, providers: [{ provide: gv, useValue: t.warnOnNgModelWithFormControl }] };
                        }),
                        t
                    );
                })(),
                _v = function () {},
                Cv = function () {},
                Ev = function () {},
                Sv = function () {},
                xv = function () {},
                Tv = function () {},
                kv = function () {},
                Av = new mt("OPTIONS"),
                Iv = (function () {
                    function t() {}
                    return (
                        (t.forRoot = function (e) {
                            return { ngModule: t, providers: [{ provide: Av, useValue: e }] };
                        }),
                        t
                    );
                })(),
                Pv = function () {},
                Nv = function () {},
                Rv = function () {},
                Dv = function () {},
                Ov = (function (t, e, n) {
                    return new Za(ku, [Au], function (t) {
                        return (function (t) {
                            for (var e = {}, n = [], r = !1, o = 0; o < t.length; o++) {
                                var i = t[o];
                                i.token === ye && !0 === i.value && (r = !0), 1073741824 & i.flags && n.push(i.token), (i.index = o), (e[Xr(i.token)] = i);
                            }
                            return { factory: null, providersByKey: e, providers: t, modules: n, isRoot: r };
                        })([
                            Uo(512, Ze, We, [[8, [Kf, Kd]], [3, Ze], Ye]),
                            Uo(5120, lr, pr, [[3, lr]]),
                            Uo(4608, Jl, tc, [lr, [2, $l]]),
                            Uo(4608, je, je, []),
                            Uo(5120, rr, cr, []),
                            Uo(5120, or, hr, []),
                            Uo(4608, ch, hh, [sc]),
                            Uo(6144, jr, null, [ch]),
                            Uo(4608, rh, ih, []),
                            Uo(
                                5120,
                                Pc,
                                function (t, e, n, r, o, i, a, s) {
                                    return [new eh(t, e, n), new lh(r), new ah(o, i, a, s)];
                                },
                                [sc, nn, De, sc, sc, rh, Me, [2, oh]]
                            ),
                            Uo(4608, Nc, Nc, [Pc, nn]),
                            Uo(135680, Oc, Oc, [sc]),
                            Uo(4608, Fc, Fc, [Nc, Oc]),
                            Uo(6144, xn, null, [Fc]),
                            Uo(6144, Dc, null, [Oc]),
                            Uo(4608, hn, hn, [nn]),
                            Uo(4608, xd, Td, [sc, De, Ed]),
                            Uo(4608, kd, kd, [xd, Sd]),
                            Uo(
                                5120,
                                gd,
                                function (t) {
                                    return [t];
                                },
                                [kd]
                            ),
                            Uo(4608, _d, _d, []),
                            Uo(6144, wd, null, [_d]),
                            Uo(4608, Cd, Cd, [wd]),
                            Uo(6144, td, null, [Cd]),
                            Uo(4608, Jf, Ad, [td, Bt]),
                            Uo(4608, vd, vd, [Jf]),
                            Uo(4608, Xd, Xd, [vd]),
                            Uo(4608, $d, $d, [Xd]),
                            Uo(4608, Jd, Jd, []),
                            Uo(4608, mv, mv, []),
                            Uo(4608, lv, lv, []),
                            Uo(1073742336, ac, ac, []),
                            Uo(1024, ve, bh, []),
                            Uo(256, Ne, "serverApp", []),
                            Uo(2048, Ec, null, [Ne]),
                            Uo(
                                1024,
                                Ie,
                                function (t, e, n, r) {
                                    return [
                                        ((o = t),
                                        kc("probe", Ic),
                                        kc(
                                            "coreTokens",
                                            i(
                                                {},
                                                Ac,
                                                (o || []).reduce(function (t, e) {
                                                    return (t[e.name] = e.token), t;
                                                }, {})
                                            )
                                        ),
                                        function () {
                                            return Ic;
                                        }),
                                        Sc(e, n, r),
                                    ];
                                    var o;
                                },
                                [[2, mn], Ec, sc, Bt]
                            ),
                            Uo(512, Pe, Pe, [[2, Ie]]),
                            Uo(131584, En, En, [nn, Me, Bt, ve, Ze, Pe]),
                            Uo(1073742336, fr, fr, [En]),
                            Uo(1073742336, wh, wh, [[3, wh]]),
                            Uo(1073742336, Id, Id, []),
                            Uo(1073742336, Pd, Pd, []),
                            Uo(1073742336, _v, _v, []),
                            Uo(1073742336, Lf, Lf, [
                                [2, Vf],
                                [2, Ef],
                            ]),
                            Uo(1073742336, Cv, Cv, []),
                            Uo(1073742336, Ev, Ev, []),
                            Uo(1073742336, Sv, Sv, []),
                            Uo(1073742336, xv, xv, []),
                            Uo(1073742336, Tv, Tv, []),
                            Uo(1073742336, kv, kv, []),
                            Uo(1073742336, Iv, Iv, []),
                            Uo(1073742336, Pv, Pv, []),
                            Uo(1073742336, bv, bv, []),
                            Uo(1073742336, wv, wv, []),
                            Uo(1073742336, Nv, Nv, []),
                            Uo(1073742336, Rv, Rv, []),
                            Uo(1073742336, Dv, Dv, []),
                            Uo(1073742336, ku, ku, []),
                            Uo(256, ye, !0, []),
                            Uo(256, Ed, "XSRF-TOKEN", []),
                            Uo(256, Sd, "X-XSRF-TOKEN", []),
                            Uo(256, Av, { theme: "atelier-dune-light" }, []),
                        ]);
                    });
                })();
            (function () {
                if (vn) throw new Error("Cannot enable prod mode after platform setup.");
                dn = !1;
            })(),
                document.addEventListener("DOMContentLoaded", function () {
                    mh()
                        .bootstrapModuleFactory(Ov)
                        .catch(function (t) {
                            return console.log(t);
                        });
                });
        },
    },
    [[2, 0]],
]);
