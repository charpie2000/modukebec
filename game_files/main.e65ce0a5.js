this.wordle = this.wordle || {},
this.wordle.bundle = function(e) {
    "use strict";
    var solutionArray = 'La'
    var solutionLookupFn = 'Ga'
    var solutionLookupByDate = 'Da'

    function setRandomizeLocalStorage(current = null, index = null) {
        var randomize = JSON.parse(window.localStorage.getItem('randomize')) || {current, indices: []}
        if (!randomize.indices || !randomize.indices.length) {
            randomize.indices = new Array(2309).fill(0,0,2309)
        }

        if (randomize.indices.length === 2315) {
            randomize.indices.splice(241,1)
            randomize.indices.splice(245,1)
            randomize.indices.splice(274,1)
            randomize.indices.splice(295,1)
            randomize.indices.splice(305,1)
            randomize.indices.splice(395,1)
        }

        if (!randomize.migrate) {
            //1647552630028
            if (randomize.indices.indexOf(1) > -1) {
                let wordsMoved = [
                    [ 405, 2293 ], [ 466, 2294 ],
                    [ 317, 2295 ], [ 382, 2296 ],
                    [ 284, 2297 ], [ 315, 2298 ],
                    [ 388, 2299 ], [ 476, 2300 ],
                    [ 442, 2301 ], [ 524, 2302 ],
                    [ 360, 2303 ], [ 473, 2304 ],
                    [ 498, 2305 ], [ 438, 2306 ],
                    [ 523, 2307 ], [ 525, 2308 ]
                ]
                wordsMoved.forEach(w => {
                    let val
                    val = randomize.indices.splice(w[0],1)
                    randomize.indices.push(val[0])
                })
            }

            randomize.migrate = 1
        }

        if (current || current === 0) randomize.current = current
        if (index || index === 0) randomize.indices[index] = 1
        
        if (!randomize.current && randomize.current !== 0) {
            randomize.current = eval(solutionLookupFn)(new Date)
        }

        window.localStorage.setItem('randomize', JSON.stringify(randomize))
        return randomize
    }
    function endCallback(solution) {
        var index = eval(solutionArray).indexOf(solution)
        setRandomizeLocalStorage(null, index)
    }
    function endGameComplete() {
        dataLayer.push("event", "game_complete")
        window.alert('Game Complete!\n\nWow! You finished all 2,309 Wordles. Thanks for playing!')
    }
    function randomWord() {
        var currentRandom = setRandomizeLocalStorage()
        var wordsLeft = eval(solutionArray).filter((val, i) => currentRandom.indices[i] === 0)
        if (!wordsLeft.length) {
            return endGameComplete()
        }
        var item = wordsLeft[Math.floor(Math.random()*wordsLeft.length)]
        var randomIndex = eval(solutionArray).indexOf(item)
        
        // remove gamestate for past words
        var todayIndex = eval(solutionLookupFn)(new Date)
        if (randomIndex < todayIndex) {
            window.localStorage.removeItem('gameState')
        }

        setRandomizeLocalStorage(randomIndex, null)
        window.location.reload()
    }
    function specificWord(index) {
        if (!index && index !== 0) index = eval(solutionLookupFn)(new Date)
        
        setRandomizeLocalStorage(index, null)
        
        window.localStorage.removeItem('gameState')
        window.location.reload()
    }
    window.todaysWord = specificWord
    window.randomWord = randomWord
    function a(e) {
        return (a = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
            return typeof e
        }
        : function(e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        }
        )(e)
    }
    function s(e, a) {
        if (!(e instanceof a))
            throw new TypeError("Cannot call a class as a function")
    }
    function t(e, a) {
        for (var s = 0; s < a.length; s++) {
            var t = a[s];
            t.enumerable = t.enumerable || !1,
            t.configurable = !0,
            "value"in t && (t.writable = !0),
            Object.defineProperty(e, t.key, t)
        }
    }
    function o(e, a, s) {
        return a && t(e.prototype, a),
        s && t(e, s),
        e
    }
    function n(e, a, s) {
        return a in e ? Object.defineProperty(e, a, {
            value: s,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[a] = s,
        e
    }
    function r(e, a) {
        if ("function" != typeof a && null !== a)
            throw new TypeError("Super expression must either be null or a function");
        e.prototype = Object.create(a && a.prototype, {
            constructor: {
                value: e,
                writable: !0,
                configurable: !0
            }
        }),
        a && l(e, a)
    }
    function i(e) {
        return (i = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
            return e.__proto__ || Object.getPrototypeOf(e)
        }
        )(e)
    }
    function l(e, a) {
        return (l = Object.setPrototypeOf || function(e, a) {
            return e.__proto__ = a,
            e
        }
        )(e, a)
    }
    function d() {
        if ("undefined" == typeof Reflect || !Reflect.construct)
            return !1;
        if (Reflect.construct.sham)
            return !1;
        if ("function" == typeof Proxy)
            return !0;
        try {
            return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}
            ))),
            !0
        } catch (e) {
            return !1
        }
    }
    function u(e, a, s) {
        return (u = d() ? Reflect.construct : function(e, a, s) {
            var t = [null];
            t.push.apply(t, a);
            var o = new (Function.bind.apply(e, t));
            return s && l(o, s.prototype),
            o
        }
        ).apply(null, arguments)
    }
    function c(e) {
        var a = "function" == typeof Map ? new Map : void 0;
        return (c = function(e) {
            if (null === e || (s = e,
            -1 === Function.toString.call(s).indexOf("[native code]")))
                return e;
            var s;
            if ("function" != typeof e)
                throw new TypeError("Super expression must either be null or a function");
            if (void 0 !== a) {
                if (a.has(e))
                    return a.get(e);
                a.set(e, t)
            }
            function t() {
                return u(e, arguments, i(this).constructor)
            }
            return t.prototype = Object.create(e.prototype, {
                constructor: {
                    value: t,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }),
            l(t, e)
        }
        )(e)
    }
    function p(e) {
        if (void 0 === e)
            throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return e
    }
    function m(e, a) {
        return !a || "object" != typeof a && "function" != typeof a ? p(e) : a
    }
    function h(e) {
        var a = d();
        return function() {
            var s, t = i(e);
            if (a) {
                var o = i(this).constructor;
                s = Reflect.construct(t, arguments, o)
            } else
                s = t.apply(this, arguments);
            return m(this, s)
        }
    }
    function y(e, a) {
        return function(e) {
            if (Array.isArray(e))
                return e
        }(e) || function(e, a) {
            var s = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
            if (null == s)
                return;
            var t, o, n = [], r = !0, i = !1;
            try {
                for (s = s.call(e); !(r = (t = s.next()).done) && (n.push(t.value),
                !a || n.length !== a); r = !0)
                    ;
            } catch (e) {
                i = !0,
                o = e
            } finally {
                try {
                    r || null == s.return || s.return()
                } finally {
                    if (i)
                        throw o
                }
            }
            return n
        }(e, a) || b(e, a) || function() {
            throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
        }()
    }
    function g(e) {
        return function(e) {
            if (Array.isArray(e))
                return f(e)
        }(e) || function(e) {
            if ("undefined" != typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"])
                return Array.from(e)
        }(e) || b(e) || function() {
            throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
        }()
    }
    function b(e, a) {
        if (e) {
            if ("string" == typeof e)
                return f(e, a);
            var s = Object.prototype.toString.call(e).slice(8, -1);
            return "Object" === s && e.constructor && (s = e.constructor.name),
            "Map" === s || "Set" === s ? Array.from(e) : "Arguments" === s || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(s) ? f(e, a) : void 0
        }
    }
    function f(e, a) {
        (null == a || a > e.length) && (a = e.length);
        for (var s = 0, t = new Array(a); s < a; s++)
            t[s] = e[s];
        return t
    }
    var k = document.createElement("template");
    k.innerHTML = "\n<style>\n  :host {\n    display: inline-block;\n  }\n  .tile {\n    width: 100%;\n    display: inline-flex;\n    justify-content: center;\n    align-items: center;\n    font-size: 2rem;\n    line-height: 2rem;\n    font-weight: bold;\n    vertical-align: middle;\n    box-sizing: border-box;\n    color: var(--tile-text-color);\n    text-transform: uppercase;\n    user-select: none;\n  }\n  .tile::before {\n    content: '';\n    display: inline-block;\n    padding-bottom: 100%;\n  }\n\n  /* Allow tiles to be smaller on small screens */\n  @media (max-height: 600px) {\n    .tile {\n      font-size: 1em;\n      line-height: 1em;\n    }\n  }\n\n  .tile[data-state='empty'] {\n    border: 2px solid var(--color-tone-4);\n  }\n  .tile[data-state='tbd'] {\n    background-color: var(--color-tone-7);\n    border: 2px solid var(--color-tone-3);\n    color: var(--color-tone-1);\n  }\n  .tile[data-state='correct'] {\n    background-color: var(--color-correct);\n  }\n  .tile[data-state='present'] {\n    background-color: var(--color-present);\n  }\n  .tile[data-state='absent'] {\n    background-color: var(--color-absent);\n  }\n\n  .tile[data-animation='pop'] {\n    animation-name: PopIn;\n    animation-duration: 100ms;\n  }\n\n  @keyframes PopIn {\n    from {\n      transform: scale(0.8);\n      opacity: 0;\n    }\n\n    40% {\n      transform: scale(1.1);\n      opacity: 1;\n    }\n  }\n  .tile[data-animation='flip-in'] {\n    animation-name: FlipIn;\n    animation-duration: 250ms;\n    animation-timing-function: ease-in;\n  }\n  @keyframes FlipIn {\n    0% {\n      transform: rotateX(0);\n    }\n    100% {\n      transform: rotateX(-90deg);\n    }\n  }\n  .tile[data-animation='flip-out'] {\n    animation-name: FlipOut;\n    animation-duration: 250ms;\n    animation-timing-function: ease-in;\n  }\n  @keyframes FlipOut {\n    0% {\n      transform: rotateX(-90deg);\n    }\n    100% {\n      transform: rotateX(0);\n    }\n  }\n</style>\n<div class=\"tile\" data-state=\"empty\" data-animation=\"idle\"></div>\n";
    var v = function(e) {
        r(t, e);
        var a = h(t);
        function t() {
            var e;
            return s(this, t),
            n(p(e = a.call(this)), "_letter", ""),
            n(p(e), "_state", "empty"),
            n(p(e), "_animation", "idle"),
            n(p(e), "_last", !1),
            n(p(e), "_reveal", !1),
            e.attachShadow({
                mode: "open"
            }),
            e
        }
        return o(t, [{
            key: "last",
            set: function(e) {
                this._last = e
            }
        }, {
            key: "connectedCallback",
            value: function() {
                var e = this;
                this.shadowRoot.appendChild(k.content.cloneNode(!0)),
                this.$tile = this.shadowRoot.querySelector(".tile"),
                this.$tile.addEventListener("animationend", (function(a) {
                    "PopIn" === a.animationName && (e._animation = "idle"),
                    "FlipIn" === a.animationName && (e.$tile.dataset.state = e._state,
                    e._animation = "flip-out"),
                    "FlipOut" === a.animationName && (e._animation = "idle",
                    e._last && e.dispatchEvent(new CustomEvent("game-last-tile-revealed-in-row",{
                        bubbles: !0,
                        composed: !0
                    }))),
                    e._render()
                }
                )),
                this._render()
            }
        }, {
            key: "attributeChangedCallback",
            value: function(e, a, s) {
                switch (e) {
                case "letter":
                    if (s === a)
                        break;
                    var t = "null" === s ? "" : s;
                    this._letter = t,
                    this._state = t ? "tbd" : "empty",
                    this._animation = t ? "pop" : "idle";
                    break;
                case "evaluation":
                    if (!s)
                        break;
                    this._state = s;
                    break;
                case "reveal":
                    this._animation = "flip-in",
                    this._reveal = !0
                }
                this._render()
            }
        }, {
            key: "_render",
            value: function() {
                this.$tile && (this.$tile.textContent = this._letter,
                ["empty", "tbd"].includes(this._state) && (this.$tile.dataset.state = this._state),
                (["empty", "tbd"].includes(this._state) || this._reveal) && this.$tile.dataset.animation != this._animation && (this.$tile.dataset.animation = this._animation))
            }
        }], [{
            key: "observedAttributes",
            get: function() {
                return ["letter", "evaluation", "reveal"]
            }
        }]),
        t
    }(c(HTMLElement));
    customElements.define("game-tile", v);
    var w = document.createElement("template");
    w.innerHTML = '\n  <style>\n    :host {\n      display: block;\n    }\n    :host([invalid]){\n      animation-name: Shake;\n      animation-duration: 600ms;\n    }\n    .row {\n      display: grid;\n      grid-template-columns: repeat(5, 1fr);\n      grid-gap: 5px;\n    }\n    .win {\n      animation-name: Bounce;\n      animation-duration: 1000ms;\n    }\n\n    @keyframes Bounce {\n      0%, 20% {\n        transform: translateY(0);\n      }\n      40% {\n        transform: translateY(-30px);\n      }\n      50% {\n        transform: translateY(5px);\n      }\n      60% {\n        transform: translateY(-15px);\n      }\n      80% {\n        transform: translateY(2px);\n      }\n      100% {\n        transform: translateY(0);\n      }\n    }\n\n    @keyframes Shake {\n      10%,\n      90% {\n        transform: translateX(-1px);\n      }\n\n      20%,\n      80% {\n        transform: translateX(2px);\n      }\n\n      30%,\n      50%,\n      70% {\n        transform: translateX(-4px);\n      }\n\n      40%,\n      60% {\n        transform: translateX(4px);\n      }\n    }\n  </style>\n  <div class="row"></div>\n';
    var x = function(e) {
        r(t, e);
        var a = h(t);
        function t() {
            var e;
            return s(this, t),
            (e = a.call(this)).attachShadow({
                mode: "open"
            }),
            e._letters = "",
            e._evaluation = [],
            e._length,
            e
        }
        return o(t, [{
            key: "evaluation",
            get: function() {
                return this._evaluation
            },
            set: function(e) {
                var a = this;
                this._evaluation = e,
                this.$tiles && this.$tiles.forEach((function(e, s) {
                    e.setAttribute("evaluation", a._evaluation[s]),
                    setTimeout((function() {
                        e.setAttribute("reveal", "")
                    }
                    ), 300 * s)
                }
                ))
            }
        }, {
            key: "connectedCallback",
            value: function() {
                var e = this;
                this.shadowRoot.appendChild(w.content.cloneNode(!0)),
                this.$row = this.shadowRoot.querySelector(".row");
                for (var a = function(a) {
                    var s = document.createElement("game-tile")
                      , t = e._letters[a];
                    (t && s.setAttribute("letter", t),
                    e._evaluation[a]) && (s.setAttribute("evaluation", e._evaluation[a]),
                    setTimeout((function() {
                        s.setAttribute("reveal", "")
                    }
                    ), 100 * a));
                    a === e._length - 1 && (s.last = !0),
                    e.$row.appendChild(s)
                }, s = 0; s < this._length; s++)
                    a(s);
                this.$tiles = this.shadowRoot.querySelectorAll("game-tile"),
                this.addEventListener("animationend", (function(a) {
                    "Shake" === a.animationName && e.removeAttribute("invalid")
                }
                ))
            }
        }, {
            key: "attributeChangedCallback",
            value: function(e, a, s) {
                switch (e) {
                case "letters":
                    this._letters = s || "";
                    break;
                case "length":
                    this._length = parseInt(s, 10);
                    break;
                case "win":
                    if (null === s) {
                        this.$tiles.forEach((function(e) {
                            e.classList.remove("win")
                        }
                        ));
                        break
                    }
                    this.$tiles.forEach((function(e, a) {
                        e.classList.add("win"),
                        e.style.animationDelay = "".concat(100 * a, "ms")
                    }
                    ))
                }
                this._render()
            }
        }, {
            key: "_render",
            value: function() {
                var e = this;
                this.$row && this.$tiles.forEach((function(a, s) {
                    var t = e._letters[s];
                    t ? a.setAttribute("letter", t) : a.removeAttribute("letter")
                }
                ))
            }
        }], [{
            key: "observedAttributes",
            get: function() {
                return ["letters", "length", "invalid", "win"]
            }
        }]),
        t
    }(c(HTMLElement));
    customElements.define("game-row", x);
    var z = document.createElement("template");
    z.innerHTML = "\n  <slot></slot>\n";
    var j = "darkTheme"
      , S = "colorBlindTheme"
      , _ = function(e) {
        r(t, e);
        var a = h(t);
        function t() {
            var e;
            s(this, t),
            n(p(e = a.call(this)), "isDarkTheme", !1),
            n(p(e), "isColorBlindTheme", !1),
            e.attachShadow({
                mode: "open"
            });
            var o = JSON.parse(window.localStorage.getItem(j))
              , r = window.matchMedia("(prefers-color-scheme: dark)").matches
              , i = JSON.parse(window.localStorage.getItem(S));
            return !0 === o || !1 === o ? e.setDarkTheme(o) : r && e.setDarkTheme(!0),
            !0 !== i && !1 !== i || e.setColorBlindTheme(i),
            e
        }
        return o(t, [{
            key: "setDarkTheme",
            value: function(e) {
                var a = document.querySelector("body");
                e && !a.classList.contains("nightmode") ? a.classList.add("nightmode") : a.classList.remove("nightmode"),
                this.isDarkTheme = e,
                window.localStorage.setItem(j, JSON.stringify(e))
            }
        }, {
            key: "setColorBlindTheme",
            value: function(e) {
                var a = document.querySelector("body");
                e && !a.classList.contains("colorblind") ? a.classList.add("colorblind") : a.classList.remove("colorblind"),
                this.isColorBlindTheme = e,
                window.localStorage.setItem(S, JSON.stringify(e))
            }
        }, {
            key: "connectedCallback",
            value: function() {
                var e = this;
                this.shadowRoot.appendChild(z.content.cloneNode(!0)),
                this.shadowRoot.addEventListener("game-setting-change", (function(a) {
                    var s = a.detail
                      , t = s.name
                      , o = s.checked;
                    switch (t) {
                    case "dark-theme":
                        return void e.setDarkTheme(o);
                    case "color-blind-theme":
                        return void e.setColorBlindTheme(o)
                    }
                }
                ))
            }
        }]),
        t
    }(c(HTMLElement));
    function q(e, a) {
        return e === a || e != e && a != a
    }
    function E(e, a) {
        for (var s = e.length; s--; )
            if (q(e[s][0], a))
                return s;
        return -1
    }
    customElements.define("game-theme-manager", _);
    var A = Array.prototype.splice;
    function C(e) {
        var a = -1
          , s = null == e ? 0 : e.length;
        for (this.clear(); ++a < s; ) {
            var t = e[a];
            this.set(t[0], t[1])
        }
    }
    C.prototype.clear = function() {
        this.__data__ = [],
        this.size = 0
    }
    ,
    C.prototype.delete = function(e) {
        var a = this.__data__
          , s = E(a, e);
        return !(s < 0) && (s == a.length - 1 ? a.pop() : A.call(a, s, 1),
        --this.size,
        !0)
    }
    ,
    C.prototype.get = function(e) {
        var a = this.__data__
          , s = E(a, e);
        return s < 0 ? void 0 : a[s][1]
    }
    ,
    C.prototype.has = function(e) {
        return E(this.__data__, e) > -1
    }
    ,
    C.prototype.set = function(e, a) {
        var s = this.__data__
          , t = E(s, e);
        return t < 0 ? (++this.size,
        s.push([e, a])) : s[t][1] = a,
        this
    }
    ;
    var L = "object" == ("undefined" == typeof global ? "undefined" : a(global)) && global && global.Object === Object && global
      , T = "object" == ("undefined" == typeof self ? "undefined" : a(self)) && self && self.Object === Object && self
      , I = L || T || Function("return this")()
      , M = I.Symbol
      , O = Object.prototype
      , R = O.hasOwnProperty
      , $ = O.toString
      , P = M ? M.toStringTag : void 0;
    var H = Object.prototype.toString;
    var N = M ? M.toStringTag : void 0;
    function D(e) {
        return null == e ? void 0 === e ? "[object Undefined]" : "[object Null]" : N && N in Object(e) ? function(e) {
            var a = R.call(e, P)
              , s = e[P];
            try {
                e[P] = void 0;
                var t = !0
            } catch (e) {}
            var o = $.call(e);
            return t && (a ? e[P] = s : delete e[P]),
            o
        }(e) : function(e) {
            return H.call(e)
        }(e)
    }
    function G(e) {
        var s = a(e);
        return null != e && ("object" == s || "function" == s)
    }
    function B(e) {
        if (!G(e))
            return !1;
        var a = D(e);
        return "[object Function]" == a || "[object GeneratorFunction]" == a || "[object AsyncFunction]" == a || "[object Proxy]" == a
    }
    var F, W = I["__core-js_shared__"], Y = (F = /[^.]+$/.exec(W && W.keys && W.keys.IE_PROTO || "")) ? "Symbol(src)_1." + F : "";
    var J = Function.prototype.toString;
    var U = /^\[object .+?Constructor\]$/
      , X = Function.prototype
      , V = Object.prototype
      , K = X.toString
      , Q = V.hasOwnProperty
      , Z = RegExp("^" + K.call(Q).replace(/[\\^$.*+?()[\]{}|]/g, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$");
    function ee(e) {
        return !(!G(e) || (a = e,
        Y && Y in a)) && (B(e) ? Z : U).test(function(e) {
            if (null != e) {
                try {
                    return J.call(e)
                } catch (e) {}
                try {
                    return e + ""
                } catch (e) {}
            }
            return ""
        }(e));
        var a
    }
    function ae(e, a) {
        var s = function(e, a) {
            return null == e ? void 0 : e[a]
        }(e, a);
        return ee(s) ? s : void 0
    }
    var se = ae(I, "Map")
      , te = ae(Object, "create");
    var oe = Object.prototype.hasOwnProperty;
    var ne = Object.prototype.hasOwnProperty;
    function re(e) {
        var a = -1
          , s = null == e ? 0 : e.length;
        for (this.clear(); ++a < s; ) {
            var t = e[a];
            this.set(t[0], t[1])
        }
    }
    function ie(e, s) {
        var t, o, n = e.__data__;
        return ("string" == (o = a(t = s)) || "number" == o || "symbol" == o || "boolean" == o ? "__proto__" !== t : null === t) ? n["string" == typeof s ? "string" : "hash"] : n.map
    }
    function le(e) {
        var a = -1
          , s = null == e ? 0 : e.length;
        for (this.clear(); ++a < s; ) {
            var t = e[a];
            this.set(t[0], t[1])
        }
    }
    re.prototype.clear = function() {
        this.__data__ = te ? te(null) : {},
        this.size = 0
    }
    ,
    re.prototype.delete = function(e) {
        var a = this.has(e) && delete this.__data__[e];
        return this.size -= a ? 1 : 0,
        a
    }
    ,
    re.prototype.get = function(e) {
        var a = this.__data__;
        if (te) {
            var s = a[e];
            return "__lodash_hash_undefined__" === s ? void 0 : s
        }
        return oe.call(a, e) ? a[e] : void 0
    }
    ,
    re.prototype.has = function(e) {
        var a = this.__data__;
        return te ? void 0 !== a[e] : ne.call(a, e)
    }
    ,
    re.prototype.set = function(e, a) {
        var s = this.__data__;
        return this.size += this.has(e) ? 0 : 1,
        s[e] = te && void 0 === a ? "__lodash_hash_undefined__" : a,
        this
    }
    ,
    le.prototype.clear = function() {
        this.size = 0,
        this.__data__ = {
            hash: new re,
            map: new (se || C),
            string: new re
        }
    }
    ,
    le.prototype.delete = function(e) {
        var a = ie(this, e).delete(e);
        return this.size -= a ? 1 : 0,
        a
    }
    ,
    le.prototype.get = function(e) {
        return ie(this, e).get(e)
    }
    ,
    le.prototype.has = function(e) {
        return ie(this, e).has(e)
    }
    ,
    le.prototype.set = function(e, a) {
        var s = ie(this, e)
          , t = s.size;
        return s.set(e, a),
        this.size += s.size == t ? 0 : 1,
        this
    }
    ;
    function de(e) {
        var a = this.__data__ = new C(e);
        this.size = a.size
    }
    de.prototype.clear = function() {
        this.__data__ = new C,
        this.size = 0
    }
    ,
    de.prototype.delete = function(e) {
        var a = this.__data__
          , s = a.delete(e);
        return this.size = a.size,
        s
    }
    ,
    de.prototype.get = function(e) {
        return this.__data__.get(e)
    }
    ,
    de.prototype.has = function(e) {
        return this.__data__.has(e)
    }
    ,
    de.prototype.set = function(e, a) {
        var s = this.__data__;
        if (s instanceof C) {
            var t = s.__data__;
            if (!se || t.length < 199)
                return t.push([e, a]),
                this.size = ++s.size,
                this;
            s = this.__data__ = new le(t)
        }
        return s.set(e, a),
        this.size = s.size,
        this
    }
    ;
    var ue = function() {
        try {
            var e = ae(Object, "defineProperty");
            return e({}, "", {}),
            e
        } catch (e) {}
    }();
    function ce(e, a, s) {
        "__proto__" == a && ue ? ue(e, a, {
            configurable: !0,
            enumerable: !0,
            value: s,
            writable: !0
        }) : e[a] = s
    }
    function pe(e, a, s) {
        (void 0 !== s && !q(e[a], s) || void 0 === s && !(a in e)) && ce(e, a, s)
    }
    var me, he = function(e, a, s) {
        for (var t = -1, o = Object(e), n = s(e), r = n.length; r--; ) {
            var i = n[me ? r : ++t];
            if (!1 === a(o[i], i, o))
                break
        }
        return e
    }, ye = "object" == (void 0 === e ? "undefined" : a(e)) && e && !e.nodeType && e, ge = ye && "object" == ("undefined" == typeof module ? "undefined" : a(module)) && module && !module.nodeType && module, be = ge && ge.exports === ye ? I.Buffer : void 0, fe = be ? be.allocUnsafe : void 0;
    var ke = I.Uint8Array;
    function ve(e, a) {
        var s, t, o = a ? (s = e.buffer,
        t = new s.constructor(s.byteLength),
        new ke(t).set(new ke(s)),
        t) : e.buffer;
        return new e.constructor(o,e.byteOffset,e.length)
    }
    var we = Object.create
      , xe = function() {
        function e() {}
        return function(a) {
            if (!G(a))
                return {};
            if (we)
                return we(a);
            e.prototype = a;
            var s = new e;
            return e.prototype = void 0,
            s
        }
    }();
    var ze, je, Se = (ze = Object.getPrototypeOf,
    je = Object,
    function(e) {
        return ze(je(e))
    }
    ), _e = Object.prototype;
    function qe(e) {
        var a = e && e.constructor;
        return e === ("function" == typeof a && a.prototype || _e)
    }
    function Ee(e) {
        return null != e && "object" == a(e)
    }
    function Ae(e) {
        return Ee(e) && "[object Arguments]" == D(e)
    }
    var Ce = Object.prototype
      , Le = Ce.hasOwnProperty
      , Te = Ce.propertyIsEnumerable
      , Ie = Ae(function() {
        return arguments
    }()) ? Ae : function(e) {
        return Ee(e) && Le.call(e, "callee") && !Te.call(e, "callee")
    }
      , Me = Array.isArray;
    function Oe(e) {
        return "number" == typeof e && e > -1 && e % 1 == 0 && e <= 9007199254740991
    }
    function Re(e) {
        return null != e && Oe(e.length) && !B(e)
    }
    var $e = "object" == (void 0 === e ? "undefined" : a(e)) && e && !e.nodeType && e
      , Pe = $e && "object" == ("undefined" == typeof module ? "undefined" : a(module)) && module && !module.nodeType && module
      , He = Pe && Pe.exports === $e ? I.Buffer : void 0
      , Ne = (He ? He.isBuffer : void 0) || function() {
        return !1
    }
      , De = Function.prototype
      , Ge = Object.prototype
      , Be = De.toString
      , Fe = Ge.hasOwnProperty
      , We = Be.call(Object);
    var Ye = {};
    Ye["[object Float32Array]"] = Ye["[object Float64Array]"] = Ye["[object Int8Array]"] = Ye["[object Int16Array]"] = Ye["[object Int32Array]"] = Ye["[object Uint8Array]"] = Ye["[object Uint8ClampedArray]"] = Ye["[object Uint16Array]"] = Ye["[object Uint32Array]"] = !0,
    Ye["[object Arguments]"] = Ye["[object Array]"] = Ye["[object ArrayBuffer]"] = Ye["[object Boolean]"] = Ye["[object DataView]"] = Ye["[object Date]"] = Ye["[object Error]"] = Ye["[object Function]"] = Ye["[object Map]"] = Ye["[object Number]"] = Ye["[object Object]"] = Ye["[object RegExp]"] = Ye["[object Set]"] = Ye["[object String]"] = Ye["[object WeakMap]"] = !1;
    var Je = "object" == (void 0 === e ? "undefined" : a(e)) && e && !e.nodeType && e
      , Ue = Je && "object" == ("undefined" == typeof module ? "undefined" : a(module)) && module && !module.nodeType && module
      , Xe = Ue && Ue.exports === Je && L.process
      , Ve = function() {
        try {
            var e = Ue && Ue.require && Ue.require("util").types;
            return e || Xe && Xe.binding && Xe.binding("util")
        } catch (e) {}
    }()
      , Ke = Ve && Ve.isTypedArray
      , Qe = Ke ? function(e) {
        return function(a) {
            return e(a)
        }
    }(Ke) : function(e) {
        return Ee(e) && Oe(e.length) && !!Ye[D(e)]
    }
    ;
    function Ze(e, a) {
        if (("constructor" !== a || "function" != typeof e[a]) && "__proto__" != a)
            return e[a]
    }
    var ea = Object.prototype.hasOwnProperty;
    function aa(e, a, s) {
        var t = e[a];
        ea.call(e, a) && q(t, s) && (void 0 !== s || a in e) || ce(e, a, s)
    }
    var sa = /^(?:0|[1-9]\d*)$/;
    function ta(e, s) {
        var t = a(e);
        return !!(s = null == s ? 9007199254740991 : s) && ("number" == t || "symbol" != t && sa.test(e)) && e > -1 && e % 1 == 0 && e < s
    }
    var oa = Object.prototype.hasOwnProperty;
    function na(e, a) {
        var s = Me(e)
          , t = !s && Ie(e)
          , o = !s && !t && Ne(e)
          , n = !s && !t && !o && Qe(e)
          , r = s || t || o || n
          , i = r ? function(e, a) {
            for (var s = -1, t = Array(e); ++s < e; )
                t[s] = a(s);
            return t
        }(e.length, String) : []
          , l = i.length;
        for (var d in e)
            !a && !oa.call(e, d) || r && ("length" == d || o && ("offset" == d || "parent" == d) || n && ("buffer" == d || "byteLength" == d || "byteOffset" == d) || ta(d, l)) || i.push(d);
        return i
    }
    var ra = Object.prototype.hasOwnProperty;
    function ia(e) {
        if (!G(e))
            return function(e) {
                var a = [];
                if (null != e)
                    for (var s in Object(e))
                        a.push(s);
                return a
            }(e);
        var a = qe(e)
          , s = [];
        for (var t in e)
            ("constructor" != t || !a && ra.call(e, t)) && s.push(t);
        return s
    }
    function la(e) {
        return Re(e) ? na(e, !0) : ia(e)
    }
    function da(e) {
        return function(e, a, s, t) {
            var o = !s;
            s || (s = {});
            for (var n = -1, r = a.length; ++n < r; ) {
                var i = a[n]
                  , l = t ? t(s[i], e[i], i, s, e) : void 0;
                void 0 === l && (l = e[i]),
                o ? ce(s, i, l) : aa(s, i, l)
            }
            return s
        }(e, la(e))
    }
    function ua(e, a, s, t, o, n, r) {
        var i = Ze(e, s)
          , l = Ze(a, s)
          , d = r.get(l);
        if (d)
            pe(e, s, d);
        else {
            var u, c = n ? n(i, l, s + "", e, a, r) : void 0, p = void 0 === c;
            if (p) {
                var m = Me(l)
                  , h = !m && Ne(l)
                  , y = !m && !h && Qe(l);
                c = l,
                m || h || y ? Me(i) ? c = i : Ee(u = i) && Re(u) ? c = function(e, a) {
                    var s = -1
                      , t = e.length;
                    for (a || (a = Array(t)); ++s < t; )
                        a[s] = e[s];
                    return a
                }(i) : h ? (p = !1,
                c = function(e, a) {
                    if (a)
                        return e.slice();
                    var s = e.length
                      , t = fe ? fe(s) : new e.constructor(s);
                    return e.copy(t),
                    t
                }(l, !0)) : y ? (p = !1,
                c = ve(l, !0)) : c = [] : function(e) {
                    if (!Ee(e) || "[object Object]" != D(e))
                        return !1;
                    var a = Se(e);
                    if (null === a)
                        return !0;
                    var s = Fe.call(a, "constructor") && a.constructor;
                    return "function" == typeof s && s instanceof s && Be.call(s) == We
                }(l) || Ie(l) ? (c = i,
                Ie(i) ? c = da(i) : G(i) && !B(i) || (c = function(e) {
                    return "function" != typeof e.constructor || qe(e) ? {} : xe(Se(e))
                }(l))) : p = !1
            }
            p && (r.set(l, c),
            o(c, l, t, n, r),
            r.delete(l)),
            pe(e, s, c)
        }
    }
    function ca(e, a, s, t, o) {
        e !== a && he(a, (function(n, r) {
            if (o || (o = new de),
            G(n))
                ua(e, a, r, s, ca, t, o);
            else {
                var i = t ? t(Ze(e, r), n, r + "", e, a, o) : void 0;
                void 0 === i && (i = n),
                pe(e, r, i)
            }
        }
        ), la)
    }
    function pa(e) {
        return e
    }
    function ma(e, a, s) {
        switch (s.length) {
        case 0:
            return e.call(a);
        case 1:
            return e.call(a, s[0]);
        case 2:
            return e.call(a, s[0], s[1]);
        case 3:
            return e.call(a, s[0], s[1], s[2])
        }
        return e.apply(a, s)
    }
    var ha = Math.max;
    var ya = ue ? function(e, a) {
        return ue(e, "toString", {
            configurable: !0,
            enumerable: !1,
            value: (s = a,
            function() {
                return s
            }
            ),
            writable: !0
        });
        var s
    }
    : pa
      , ga = Date.now;
    var ba = function(e) {
        var a = 0
          , s = 0;
        return function() {
            var t = ga()
              , o = 16 - (t - s);
            if (s = t,
            o > 0) {
                if (++a >= 800)
                    return arguments[0]
            } else
                a = 0;
            return e.apply(void 0, arguments)
        }
    }(ya);
    function fa(e, a) {
        return ba(function(e, a, s) {
            return a = ha(void 0 === a ? e.length - 1 : a, 0),
            function() {
                for (var t = arguments, o = -1, n = ha(t.length - a, 0), r = Array(n); ++o < n; )
                    r[o] = t[a + o];
                o = -1;
                for (var i = Array(a + 1); ++o < a; )
                    i[o] = t[o];
                return i[a] = s(r),
                ma(e, this, i)
            }
        }(e, a, pa), e + "")
    }
    var ka, va = (ka = function(e, a, s) {
        ca(e, a, s)
    }
    ,
    fa((function(e, s) {
        var t = -1
          , o = s.length
          , n = o > 1 ? s[o - 1] : void 0
          , r = o > 2 ? s[2] : void 0;
        for (n = ka.length > 3 && "function" == typeof n ? (o--,
        n) : void 0,
        r && function(e, s, t) {
            if (!G(t))
                return !1;
            var o = a(s);
            return !!("number" == o ? Re(t) && ta(s, t.length) : "string" == o && s in t) && q(t[s], e)
        }(s[0], s[1], r) && (n = o < 3 ? void 0 : n,
        o = 1),
        e = Object(e); ++t < o; ) {
            var i = s[t];
            i && ka(e, i, t, n)
        }
        return e
    }
    ))), wa = "gameState", xa = {
        boardState: null,
        evaluations: null,
        rowIndex: null,
        solution: null,
        gameStatus: null,
        lastPlayedTs: null,
        lastCompletedTs: null,
        restoringFromLocalStorage: null,
        hardMode: !1
    };
    function za() {
        var e = window.localStorage.getItem(wa) || JSON.stringify(xa);
        return JSON.parse(e)
    }
    function ja(e) {
        var a = za();
        !function(e) {
            window.localStorage.setItem(wa, JSON.stringify(e))
        }(va(a, e))
    }
    var statsHtml = `
    <style>
    button.save {
        background-color: var(--key-bg-correct);
        color: var(--key-evaluated-text-color);
        font-family: inherit;
        font-weight: bold;
        border-radius: 4px;
        cursor: pointer;
        border: none;
        user-select: none;
        display: flex;
        justify-content: center;
        align-items: center;
        text-transform: uppercase;
        -webkit-tap-highlight-color: rgba(0, 0, 0, 0.3);
        width: 80%;
        font-size: 20px;
        height: 52px;
        -webkit-filter: brightness(100%);
    }
    
    .container {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        padding: 16px 0;
    }
    
    h1 {
        font-weight: 700;
        font-size: 16px;
        letter-spacing: 0.5px;
        text-transform: uppercase;
        text-align: center;
        margin-bottom: 10px;
    }
    
    #statistics {
        display: flex;
    }
    
    .statistic-container {
        flex: 1;
    }
    
    .statistic-container .statistic {
        font-size: 36px;
        font-weight: 400;
        display: flex;
        align-items: center;
        justify-content: center;
        text-align: center;
        letter-spacing: 0.05em;
        font-variant-numeric: proportional-nums;
    }
    
    .statistic.timer {
        font-variant-numeric: initial;
    }
    
    .statistic-container .label {
        font-size: 12px;
        display: flex;
        align-items: center;
        justify-content: center;
        text-align: center;
    }
    
    #guess-distribution {
        width: 80%;
    }
    
    .graph-container {
        width: 100%;
        display: flex;
        align-items: center;
        padding-bottom: 4px;
        font-size: 24px;
        line-height: 20px;
    }
    
    .graph-container .graph {
        width: 100%;
        height: 100%;
        padding-left: 10px;
    }
    
    .graph-container .graph .graph-bar {
        height: 100%;
        position: relative;
        background-color: var(--color-absent);
        display: flex;
        justify-content: left;
    }
    
    .graph-container .graph .graph-bar.highlight {
        background-color: var(--color-correct);
    }
    
    .graph-container .graph .graph-bar.align-right {
        justify-content: left;
        padding-right: 8px;
    }
    
    .graph-container .graph .num-guesses {
        font-weight: bold;
        color: var(--tile-text-color);
    }
    
    #statistics,
    #guess-distribution {
        padding-bottom: 10px;
    }
    
    .footer {
        display: flex;
        width: 100%;
    }
    
    .countdown {
        border-right: 1px solid var(--color-tone-1);
        padding-right: 12px;
        width: 50%;
    }
    
    .share {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        padding-left: 12px;
        width: 50%;
    }
    
    .no-data {
        text-align: center;
    }
    
    button.share-button {
        background-color: var(--key-bg-correct);
        color: var(--key-evaluated-text-color);
        font-family: inherit;
        font-weight: bold;
        border-radius: 4px;
        cursor: pointer;
        border: none;
        user-select: none;
        display: flex;
        justify-content: center;
        align-items: center;
        text-transform: uppercase;
        -webkit-tap-highlight-color: rgba(0, 0, 0, 0.3);
        width: 80%;
        font-size: 20px;
        height: 52px;
        -webkit-filter: brightness(100%);
    }
    
    button.share-button:hover {
        opacity: 0.9;
    }
    
    button.share-button game-icon {
        width: 24px;
        height: 24px;
        padding-left: 8px;
    }
    
    .statistic input,
    .num-guesses input {
        font-size: 25px;
        font-weight: 400;
        display: flex;
        align-items: center;
        justify-content: center;
        text-align: center;
        letter-spacing: 0.05em;
        font-variant-numeric: proportional-nums;
        width: 60px;
    }
    
    .statistic input::-webkit-outer-spin-button,
    .num-guesses input::-webkit-outer-spin-button,
    .num-guesses input::-webkit-inner-spin-button,
    .statistic input::-webkit-inner-spin-button {
        /* display: none; <- Crashes Chrome on hover */
        -webkit-appearance: none;
        margin: 0;
        /* <-- Apparently some margin are still there even though it's hidden */
    }
    
    .statistic input[type=number],
    .num-guesses input[type=number] {
        -moz-appearance: textfield;
        /* Firefox */
    }
    </style>
    <div class="container">
    <h1>Statistiques</h1>
    <div id="statistics">
        <div class="statistic-container">
        <div class="statistic">
            <input disabled id="games-played" type="number" value="0" min="0" max="2315" step="1" pattern="[0-9]*"
            onchange="this.value = Math.max(0, Math.min(2315, parseInt(this.value)||0));"></input>
            <input style="display:none;" disabled id="games-won" type="number" value="0" min="0" max="2315" step="1" pattern="[0-9]*"
            onchange="this.value = Math.max(0, Math.min(2315, parseInt(this.value)||0));"></input>
        </div>
        <div class="label">Played</div>
        </div>
    
        <div class="statistic-container">
        <div class="statistic">
            <input disabled id="win-percentage" type="number" value="0" min="0" max="100" step="1" pattern="[0-9]*"
            onchange="this.value = Math.max(0, Math.min(100, parseInt(this.value)||0));"></input>
        </div>
        <div class="label">Win %</div>
        </div>
    
        <div class="statistic-container">
        <div class="statistic">
            <input id="current-streak" type="number" value="0" min="0" max="2315" step="1" pattern="[0-9]*"
            onchange="this.value = Math.max(0, Math.min(2315, parseInt(this.value)||0));"></input>
        </div>
        <div class="label">Current Streak</div>
        </div>
    
        <div class="statistic-container">
        <div class="statistic">
            <input id="max-streak" type="number" value="0" min="0" max="2315" step="1" pattern="[0-9]*"
            onchange="this.value = Math.max(0, Math.min(2315, parseInt(this.value)||0));"></input>
        </div>
        <div class="label">Max Streak</div>
        </div>
    </div>
    <h1>Performances</h1>
    <div id="guess-distribution">
        <div class="graph-container">
        <div class="guess">1</div>
        <div class="graph">
            <div class="graph-bar align-right highlight">
            <div class="num-guesses">
                <input class="guess-input" id="guess-1" type="number" value="0" min="0" max="2315" step="1" pattern="[0-9]*"
                onchange="this.value = Math.max(0, Math.min(2315, parseInt(this.value)||0));"></input>
            </div>
            </div>
        </div>
        </div>
    
        <div class="graph-container">
        <div class="guess">2</div>
        <div class="graph">
            <div class="graph-bar align-right">
            <div class="num-guesses">
                <input class="guess-input" id="guess-2" type="number" value="0" min="0" max="2315" step="1" pattern="[0-9]*"
                onchange="this.value = Math.max(0, Math.min(2315, parseInt(this.value)||0));"></input>
            </div>
            </div>
        </div>
        </div>
    
        <div class="graph-container">
        <div class="guess">3</div>
        <div class="graph">
            <div class="graph-bar">
            <div class="num-guesses">
                <input class="guess-input" id="guess-3" type="number" value="0" min="0" max="2315" step="1" pattern="[0-9]*"
                onchange="this.value = Math.max(0, Math.min(2315, parseInt(this.value)||0));"></input>
            </div>
            </div>
        </div>
        </div>
    
        <div class="graph-container">
        <div class="guess">4</div>
        <div class="graph">
            <div class="graph-bar">
            <div class="num-guesses">
                <input class="guess-input" id="guess-4" type="number" value="0" min="0" max="2315" step="1" pattern="[0-9]*"
                onchange="this.value = Math.max(0, Math.min(2315, parseInt(this.value)||0));"></input>
            </div>
            </div>
        </div>
        </div>
    
        <div class="graph-container">
        <div class="guess">5</div>
        <div class="graph">
            <div class="graph-bar align-right">
            <div class="num-guesses">
                <input class="guess-input" id="guess-5" type="number" value="0" min="0" max="2315" step="1" pattern="[0-9]*"
                onchange="this.value = Math.max(0, Math.min(2315, parseInt(this.value)||0));"></input>
            </div>
            </div>
        </div>
        </div>
    
        <div class="graph-container">
        <div class="guess">6</div>
        <div class="graph">
            <div class="graph-bar">
            <div class="num-guesses">
                <input class="guess-input" id="guess-6" type="number" value="0" min="0" max="2315" step="1" pattern="[0-9]*"
                onchange="this.value = Math.max(0, Math.min(2315, parseInt(this.value)||0));"></input>
            </div>
            </div>
        </div>
        </div>

        <div class="graph-container">
        <div class="guess">Failed</div>
        <div class="graph">
            <div class="graph-bar">
            <div class="num-guesses">
                <input class="guess-input" id="guess-fail" type="number" value="0" min="0" max="2315" step="1" pattern="[0-9]*"
                onchange="this.value = Math.max(0, Math.min(2315, parseInt(this.value)||0));"></input>
            </div>
            </div>
        </div>
        </div>
    </div>
    
    <button id="save-button" class="save">
        <game-icon icon="save" style="margin-right:5px;"></game-icon>
        Save
    </button>
    <div class="spacer" style="height:40px;"></div>
    </div>
    `;

    var Sa = document.createElement("template");
    Sa.innerHTML = `\n  <style>\n  #copyright {text-align: left;}\n.setting {\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    border-bottom: 1px solid var(--color-tone-4);\n    padding: 16px 0;\n  }\n\n  a, a:visited {\n    color: var(--color-tone-2);\n  }\n\n  .title {\n    font-size: 18px;\n  }\n  .text {\n    padding-right: 8px;\n  }\n  .description {\n    font-size: 12px;\n    color: var(--color-tone-2);\n  }\n\n  #footnote {\n    position: absolute;\n    bottom: 0;\n    left: 0;\n    right: 0;\n    padding: 16px;\n    color: var(--color-tone-2);\n    font-size: 12px;\n    text-align: right;\n    display: flex;\n    justify-content: space-between;\n    align-items: flex-end;\n  }\n\n  @media only screen and (min-device-width : 320px) and (max-device-width : 480px) {\n    .setting {\n      padding: 16px;\n    }\n  }\n\n  </style>\n  <div class="sections">\n    <section>\n      <div class="setting">\n        <div class="text">\n          <div class="title">Mode difficile</div>\n          <div class="description">Les indices doivent être utilisés dans chaque essai qui suit</div>\n        </div>\n        <div class="control">\n          <game-switch id="hard-mode" name="hard-mode"></game-switch>\n        </div>\n      </div>\n      <div class="setting">\n        <div class="text">\n          <div class="title">Couleurs sombres</div>\n        </div>\n        <div class="control">\n          <game-switch id="dark-theme" name="dark-theme"></game-switch>\n        </div>\n      </div>\n      <div class="setting">\n        <div class="text">\n          <div class="title">Mode fédéraliste :)</div>\n          <div class="description">Couleurs canadiennes</div>\n        </div>\n        <div class="control">\n          <game-switch id="color-blind-theme" name="color-blind-theme"></game-switch>\n        </div>\n      </div>\n    <div class="setting">\n        <div class="text">\n          <div class="title">Éditer les statistiques</div>\n        </div>\n        <div class="control">\n          <game-icon id="edit-button" icon="edit" style="cursor:pointer;"></game-icon>\n        </div>\n      </div></section>\n\n    <section>\n      <div class="setting">\n        <div class="text">\n          <div class="title">Commentaires</div>\n        </div>\n        <div class="control">\n          <a href="mailto:sunray9@icloud.com?subject=Commentaires" title="sunray9@icloud.com">Courriel</a>\n          |\n          <a href="https://twitter.com/MODUKEBEC" target="blank" title="@MODUKEBEC">Twitter</a>\n        </div>\n      </div>\n    </section>
    <section id="edit-stats-section" style="display:none;">
        ${statsHtml}
    </section>
    \n  </div>\n  <div id="footnote">\n    <div>\n      <div id="copyright">Powered by the original <a href="https://www.powerlanguage.co.uk/wordle/" target="_blank">Wordle</a></div>\n    </div>\n    <div>\n      <div id="puzzle-number"></div>\n      <div id="hash"></div>\n    </div>\n  </div>\n`;
    //`
    var _a = function(e) {
        r(t, e);
        var a = h(t);
        function t() {
            var e;
            return s(this, t),
            n(p(e = a.call(this)), "gameApp", void 0),
            e.attachShadow({
                mode: "open"
            }),
            e
        }
        return o(t, [{
            key: "connectedCallback",
            value: function() {
                var e, a = this;
                this.shadowRoot.appendChild(Sa.content.cloneNode(!0)),
                this.shadowRoot.querySelector("#hash").textContent = null === (e = window.wordle) || void 0 === e ? void 0 : e.hash,
                this.shadowRoot.querySelector("#puzzle-number").textContent = "#".concat(this.gameApp.dayOffset),
                this.shadowRoot.querySelector("#edit-button").addEventListener("click", (function(ev) {
                    var editSection = a.shadowRoot.querySelector("#edit-stats-section")
                    if (editSection.style['display'] === 'none') editSection.style['display'] = 'unset'
                    else editSection.style['display'] = 'none'
                })),
                this.shadowRoot.querySelectorAll(".guess-input").forEach(el => el.addEventListener("change", (function(ev) {
                    var gamesPlayedEl = a.shadowRoot.querySelector("#games-played");
                    var gamesWonEl = a.shadowRoot.querySelector("#games-won");
                    var winPercentageEl = a.shadowRoot.querySelector("#win-percentage");
                    var guess1 = parseInt(a.shadowRoot.querySelector("#guess-1").value) || 0;
                    var guess2 = parseInt(a.shadowRoot.querySelector("#guess-2").value) || 0;
                    var guess3 = parseInt(a.shadowRoot.querySelector("#guess-3").value) || 0;
                    var guess4 = parseInt(a.shadowRoot.querySelector("#guess-4").value) || 0;
                    var guess5 = parseInt(a.shadowRoot.querySelector("#guess-5").value) || 0;
                    var guess6 = parseInt(a.shadowRoot.querySelector("#guess-6").value) || 0;
                    var guessFail = parseInt(a.shadowRoot.querySelector("#guess-fail").value) || 0;


                    var numPlays = Math.floor(guess1+guess2+guess3+guess4+guess5+guess6+guessFail)
                    var gamesWon = Math.floor(numPlays - guessFail)
                    var winPerc = Math.round(gamesWon / numPlays * 100) || 0

                    gamesPlayedEl.value = numPlays
                    gamesWonEl.value = gamesWon
                    winPercentageEl.value = winPerc
                }))),
                this.shadowRoot.querySelector("#save-button").addEventListener("click", (function(ev) {
                    var gamesPlayedEl = a.shadowRoot.querySelector("#games-played");
                    var gamesWonEl = a.shadowRoot.querySelector("#games-won");
                    var winPercentageEl = a.shadowRoot.querySelector("#win-percentage");
                    var currentStreakEl = a.shadowRoot.querySelector("#current-streak");
                    var maxStreakEl = a.shadowRoot.querySelector("#max-streak");
                    var guess1El = a.shadowRoot.querySelector("#guess-1");
                    var guess2El = a.shadowRoot.querySelector("#guess-2");
                    var guess3El = a.shadowRoot.querySelector("#guess-3");
                    var guess4El = a.shadowRoot.querySelector("#guess-4");
                    var guess5El = a.shadowRoot.querySelector("#guess-5");
                    var guess6El = a.shadowRoot.querySelector("#guess-6");
                    var guessFailEl = a.shadowRoot.querySelector("#guess-fail");

                    var statistics = JSON.parse(window.localStorage.getItem('statistics') || "{}");

                    var newStats = {
                        ...statistics,
                        gamesPlayed: parseInt(gamesPlayedEl.value) || 0,
                        gamesWon: parseInt(gamesWonEl.value) || 0,
                        winPercentage: parseInt(winPercentageEl.value) || 0,
                        currentStreak: parseInt(currentStreakEl.value) || 0,
                        maxStreak: parseInt(maxStreakEl.value) || 0,
                        guesses: {
                            1: parseInt(guess1El.value) || 0,
                            2: parseInt(guess2El.value) || 0,
                            3: parseInt(guess3El.value) || 0,
                            4: parseInt(guess4El.value) || 0,
                            5: parseInt(guess5El.value) || 0,
                            6: parseInt(guess6El.value) || 0,
                            fail: parseInt(guessFailEl.value) || 0
                        }
                    }

                    window.localStorage.setItem('statistics', JSON.stringify(newStats))

                    a.shadowRoot.querySelector("#edit-stats-section").style['display'] = 'none'
                })),
                (function(){
                    var gamesPlayedEl = a.shadowRoot.querySelector("#games-played");
                    var gamesWonEl = a.shadowRoot.querySelector("#games-won");
                    var winPercentageEl = a.shadowRoot.querySelector("#win-percentage");
                    var currentStreakEl = a.shadowRoot.querySelector("#current-streak");
                    var maxStreakEl = a.shadowRoot.querySelector("#max-streak");
                    var guess1El = a.shadowRoot.querySelector("#guess-1");
                    var guess2El = a.shadowRoot.querySelector("#guess-2");
                    var guess3El = a.shadowRoot.querySelector("#guess-3");
                    var guess4El = a.shadowRoot.querySelector("#guess-4");
                    var guess5El = a.shadowRoot.querySelector("#guess-5");
                    var guess6El = a.shadowRoot.querySelector("#guess-6");
                    var guessFailEl = a.shadowRoot.querySelector("#guess-fail");

                    var {
                        gamesPlayed=0
                        , gamesWon=0
                        , winPercentage=0
                        , currentStreak=0
                        , maxStreak=0
                        , guesses={1: 0, 2: 0, 3: 0, 4: 0, 5: 0, 6: 0, fail: 0}
                    } = JSON.parse(window.localStorage.getItem('statistics') || "{}");

                    gamesPlayedEl.value = gamesPlayed
                    gamesWonEl.value = gamesWon
                    winPercentageEl.value = winPercentage
                    currentStreakEl.value = currentStreak
                    maxStreakEl.value = maxStreak
                    guess1El.value = guesses['1']
                    guess2El.value = guesses['2']
                    guess3El.value = guesses['3']
                    guess4El.value = guesses['4']
                    guess5El.value = guesses['5']
                    guess6El.value = guesses['6']
                    guessFailEl.value = guesses['fail']
                })(),
                this.shadowRoot.addEventListener("game-switch-change", (function(e) {
                    e.stopPropagation();
                    var s = e.detail
                      , t = s.name
                      , o = s.checked
                      , n = s.disabled;
                    a.dispatchEvent(new CustomEvent("game-setting-change",{
                        bubbles: !0,
                        composed: !0,
                        detail: {
                            name: t,
                            checked: o,
                            disabled: n
                        }
                    })),
                    a.render()
                }
                )),
                this.render()
            }
        }, {
            key: "render",
            value: function() {
                var e = document.querySelector("body");
                e.classList.contains("nightmode") && this.shadowRoot.querySelector("#dark-theme").setAttribute("checked", ""),
                e.classList.contains("colorblind") && this.shadowRoot.querySelector("#color-blind-theme").setAttribute("checked", "");
                var a = za();
                a.hardMode && this.shadowRoot.querySelector("#hard-mode").setAttribute("checked", ""),
                a.hardMode || "IN_PROGRESS" !== a.gameStatus || 0 === a.rowIndex || (this.shadowRoot.querySelector("#hard-mode").removeAttribute("checked"),
                this.shadowRoot.querySelector("#hard-mode").setAttribute("disabled", ""))
            }
        }]),
        t
    }(c(HTMLElement));
    customElements.define("game-settings", _a);
    var qa = document.createElement("template");
    qa.innerHTML = '\n  <style>\n    .toast {\n      position: relative;\n      margin: 16px;\n      background-color: var(--color-tone-1);\n      color: var(--color-tone-7);\n      padding: 16px;\n      border: none;\n      border-radius: 4px;\n      opacity: 1;\n      transition: opacity 300ms cubic-bezier(0.645, 0.045, 0.355, 1);\n      font-weight: 700;\n    }\n    .win {\n      background-color: var(--color-correct);\n      color: var(--tile-text-color);\n    }\n    .fade {\n      opacity: 0;\n    }\n  </style>\n  <div class="toast"></div>\n';
    var Ea, Aa = function(e) {
        r(t, e);
        var a = h(t);
        function t() {
            var e;
            return s(this, t),
            n(p(e = a.call(this)), "_duration", void 0),
            e.attachShadow({
                mode: "open"
            }),
            e
        }
        return o(t, [{
            key: "connectedCallback",
            value: function() {
                var e = this;
                this.shadowRoot.appendChild(qa.content.cloneNode(!0));
                var a = this.shadowRoot.querySelector(".toast");
                a.textContent = this.getAttribute("text"),
                this._duration = this.getAttribute("duration") || 1e3,
                "Infinity" !== this._duration && setTimeout((function() {
                    a.classList.add("fade")
                }
                ), this._duration),
                a.addEventListener("transitionend", (function(a) {
                    e.parentNode.removeChild(e)
                }
                ))
            }
        }]),
        t
    }(c(HTMLElement));
    function Ca() {
        dataLayer.push(arguments)
    }
    customElements.define("game-toast", Aa),
    window.dataLayer = window.dataLayer || [],
    Ca("js", new Date);
    Ca("config", "G-FVWPJS69NG", {
        app_version: null === (Ea = window.wordle) || void 0 === Ea ? void 0 : Ea.hash,
        debug_mode: !1
    });
    var La = ["comme","cette","aussi","autre","faire","entre","temps","quand","apres","leurs","alors","moins","toute","homme","elles","grand","ainsi","avoir","avant","monde","notre","trois","celui","celle","petit","chose","porte","point","parce","place","femme","enfin","passe","corps","assez","jours","donne","terre","etais","mieux","reste","forme","heure","doute","effet","votre","cours","saint","seule","coeur","jeune","mains","droit","abord","amour","vieux","peine","facon","ordre","memes","fille","suite","sorte","aller","bonne","ville","etats","force","matin","voila","aucun","table","parle","selon","vingt","parmi","pense","telle","cause","ayant","ecole","juste","route","rouge","belle","annee","objet","moyen","train","etant","plein","livre","grace","etude","marie","pieds","garde","blanc","debut","bruit","vivre","envie","louis","image","piece","cesse","salle","venir","mille","sujet","ombre","libre","genre","paris","coups","voulu","signe","verre","parti","faits","froid","quant","ecrit","ferme","outre","guere","tenir","idees","soeur","champ","geste","ligne","perdu","frere","titre","large","eleve","armee","haute","jouer","voici","front","masse","noire","assis","poids","allez","tombe","connu","scene","odeur","terme","unite","faite","desir","prise","seuls","choix","hotel","somme","types","maman","sinon","clair","serie","egard","tirer","tiens","calme","tache","court","frais","cadre","usage","armes","monte","foret","duree","regle","dents","cotes","faute","hiver","morts","pluie","chien","coupe","dites","foule","grave","degre","forte","noirs","comte","appel","oncle","arbre","ouvre","glace","jaune","sable","chaud","boite","poste","cents","chair","poche","basse","vraie","croix","texte","croit","lutte","boire","style","peche","merci","poser","tante","vaste","total","roman","aimer","etres","herbe","tente","vague","drole","pages","morte","gorge","danse","venue","carte","leger","beaux","fonds","union","venus","sante","radio","merde","rares","diner","offre","salon","rendu","toile","chefs","ouest","neige","lieux","genie","honte","souci","siege","salut","douce","longs","doigt","repas","joual","trace","cache","lever","crise","riche","decor","etage","fallu","angle","lourd","aider","bande","douze","suivi","nulle","creer","plans","russe","serre","lampe","gagne","joues","plage","betes","jadis","prete","finir","creux","poete","nomme","voies","nuits","tetes","tapis","lance","quart","metal","exige","eclat","vertu","actes","jeter","payer","arret","trait","mince","prive","sorti","reine","roses","ondes","quels","amene","songe","liste","utile","fumee","depit","heros","chute","seuil","jambe","repos","folie","reves","plait","mange","folle","casse","tenue","sacre","biens","acide","pitie","avion","notes","crane","tiers","musee","huile","bleue","usine","vides","allee","fleur","prevu","dieux","grise","jette","acces","drame","queue","balle","vieil","acier","egale","haine","rayon","fixes","sueur","ecart","dames","regne","zones","seche","stade","bouge","resta","agent","japon","sucre","recit","chant","servi","barbe","tours","fixer","admis","tissu","voire","avril","senti","photo","jolie","perte","opera","crime","roues","revue","carre","quasi","virus","helas","cycle","appui","bases","brise","ailes","plume","ideal","voile","seins","posee","lueur","lycee","lache","veste","exces","remis","hauts","crier","phase","canal","ronde","amant","barre","verte","cesar","soins","brule","linge","roule","pente","situe","prets","pomme","chere","poing","juger","fruit","nuque","saute","vente","tabac","enfer","epais","foyer","riant","echec","moral","bains","bleus","colle","refus","mises","delai","mines","juifs","noyau","debat","guide","vitre","adieu","tendu","boule","futur","trous","ennui","oeufs","mener","liens","poeme","lente","issue","fonde","latin","biere","rires","piste","culte","avoue","fusil","toits","sauve","seize","aille","corde","firme","marin","varie","amuse","noter","greve","vrais","draps","hippo","fuite","pique","bords","major","brume","local","chats","nerfs","metro","royal","civil","lecon","subir","flics","meres","digne","fosse","etape","canon","citer","ports","ecran","piano","fetes","neuve","sport","robes","soirs","noble","veuve","essai","oubli","coins","aimes","index","coule","arabe","orage","proie","soupe","sonne","messe","tiede","flanc","taire","rever","saisi","beton","these","theme","verts","ocean","ouais","nuage","nette","grain","poses","coude","films","puits","paire","franc","filet","ponts","vichy","modes","coton","maire","poils","exact","reins","coute","voute","vache","encre","brune","siens","grecs","peint","sache","trucs","essor","pouce","mythe","indes","laver","plats","idiot","creme","lisse","opere","plomb","tasse","suede","gosse","levee","isole","raide","grade","forts","juges","plate","marge","canne","bombe","neant","reels","villa","breve","alpes","ruine","sales","gants","paume","couts","demie","anges","fixee","creve","recul","conge","metre","chine","tronc","pompe","brave","peres","borne","maree","kilos","achat","fines","atome","durer","voler","globe","tires","abime","deuil","marre","motif","blond","auras","ceder","divin","depot","boeuf","anime","sourd","rites","paroi","subit","aimee","fonce","actif","baton","tubes","copie","chene","races","genou","rangs","cheri","teint","piege","creee","agite","rampe","camps","magie","liees","vents","bouts","gouts","genes","concu","roche","corse","dormi","geant","final","guise","bancs","cafes","raies","bible","roles","fiche","chaux","nappe","trame","foutu","prime","prier","quete","tigre","ronds","super","vives","seine","molle","baron","lundi","aigue","solde","azote","battu","weber","impot","verse","rural","patte","jeudi","buste","hurle","islam","etale","quais","frein","dates","parts","crete","bonte","sitot","marne","ecume","torse","finie","cites","gamin","remue","sieur","epoux","gamme","rides","talus","melee","evite","stage","robin","tests","faces","biais","moine","chars","jetee","outil","suffi","serge","logis","joies","filer","divan","momes","range","meler","ruban","joint","extra","adore","wagon","gauss","jouir","tribu","regis","vigne","bilan","obeir","levre","lames","pacte","malin","miens","vendu","doree","recus","volee","blocs","lasse","crees","pates","pires","tenus","peser","jesus","pince","clous","sauce","noeud","poule","selle","forge","usure","loups","manie","peril","ultra","fumer","foire","amies","mixte","singe","rives","gaffe","trone","havre","couru","neufs","chers","meche","lapin","finis","salue","fouet","pneus","fonte","juive","bourg","fiere","flots","pales","debit","menee","brute","echos","taper","poele","close","savon","micro","avale","poles","samba","noces","veine","haies","autel","rails","conte","aires","vetue","morne","jenny","rompu","grele","aides","sages","unies","caves","mardi","meles","verbe","diane","vider","egare","alles","lents","elite","dense","banal","dures","belge","coque","dalle","perce","cruel","allie","chocs","demon","asile","bague","menus","tiree","sabre","deces","chaos","baise","moque","dunes","jupes","peaux","moule","aigle","fatal","piles","relie","voeux","fauve","chier","engin","perle","milan","neveu","hache","plaie","vogue","clefs","corne","valet","bravo","codes","galop","talon","habit","noyer","halte","faune","autos","curie","vaine","damas","paves","gifle","vetus","moche","batir","recue","senat","phare","leves","cuire","plier","fondu","amere","mauve","laine","tarde","germe","avise","avide","panne","jetes","fente","tiges","sceau","envoi","balai","egaux","bosse","imite","vecue","males","exclu","dores","gilet","loges","litre","feras","voyou","treve","brefs","repit","harem","gomme","ecrie","payes","ovale","moise","plane","album","ether","sapin","fache","potes","tuyau","cogne","fumes","bruns","match","eveil","ample","botte","doyen","gener","rosee","pures","gaule","agace","menti","piges","pieux","cible","bebes","taxes","choux","email","bijou","goute","beret","bidon","hotes","turcs","vital","taule","souri","vases","houle","pacha","clubs","cuite","bride","osier","tarif","bille","pause","craie","pelle","sexes","bleme","stock","larme","poire","socio","prose","flute","flore","piete","inter","muets","doses","fichu","accru","gelee","etire","laure","malle","peste","trahi","clans","etang","gares","naive","ainee","loupe","jules","semis","astre","sonna","evier","lande","farce","monts","hoche","parcs","dette","loger","niece","colis","cerne","mefie","ongle","affut","aigre","saine","laide","ciree","cures","percu","vomir","cieux","terne","doues","cubes","jouet","borde","hante","enjeu","valse","frise","liege","perse","pisse","basee","ronge","legal","longe","aisee","munis","ancre","jolis","bache","fusee","stylo","punir","gerbe","parie","gueri","lions","lilas","nager","pendu","socle","fibre","aines","louer","tarte","frele","soude","ruses","garni","abces","surgi","seaux","ravin","avare","fours","fiers","delit","reuni","golfe","votes","epars","amont","voter","rudes","rejet","ferry","nuees","natal","digue","norme","tonne","pouls","puces","figee","volet","avere","aveux","satan","rubis","crabe","rival","etain","parer","aigus","megot","fable","berge","urine","oxyde","exode","files","moite","verdi","porto","atlas","saoul","tordu","humus","satin","brode","orale","tempe","parte","elans","nacre","barbu","biche","leche","duvet","niche","hardi","cadet","hymne","jugee","dotes","hater","cases","baies","cargo","chale","cable","cloue","sente","sirop","boyau","orgue","clerc","gemir","nuire","meure","blame","puree","renee","ornee","arche","cense","macro","ligue","rende","clown","bulle","gache","jurer","regie","eloge","capot","butte","frime","aptes","rugby","olive","beige","cages","rames","repli","oasis","antan","ambre","gazon","noyes","munie","nylon","silex","mordu","brins","macon","girls","gains","decue","jouee","maris","cimes","batie","idole","meute","pekin","hutte","feter","zanzi","sauts","tulle","envol","garce","jures","pipes","polie","inoui","raser","errer","dater","epris","pogne","abris","gnose","abuse","genee","puise","rabat","gaite","ebene","arete","ahuri","fugue","crocs","bonds","viser","nouer","salee","mufle","canot","oscar","ivres","proue","alibi","colon","cohue","caste","opium","taxis","morue","laque","bahut","porcs","short","bazar","crepe","buter","radar","vodka","berce","blues","pairs","emeut","tueur","mater","dogme","virer","polka","loyer","toque","renes","perir","sites","ravie","dotee","cygne","vices","sympa","frigo","egout","butin","feint","menes","hisse","bruts","china","epees","visee","sabot","meule","givre","vante","noyee","douee","conne","epave","papes","sotte","gaine","choir","frole","vouee","melon","plain","ilots","piton","sures","fesse","naifs","figes","culot","serve","dicte","sobre","aride","epine","rater","cacha","menue","coran","pliee","pains","nains","vizir","flair","emane","cerfs","penal","tango","boche","putes","aises","vibre","couve","evade","usees","secte","salir","pardi","jauge","aidee","furie","puant","arene","cales","mures","payee","rente","noues","yacht","miche","exile","gerer","crues","verni","vanne","lacet","beche","hetre","verge","ouate","enfle","tater","verve","totem","reche","bocal","miles","harpe","roder","vises","osant","semer","empli","troue","nouee","ornes","tyran","suave","pater","grues","joncs","nanas","plies","vains","liant","layon","loyal","graal","tisse","renie","doter","tares","moisi","verne","rhume","radis","floue","rance","emise","trier","juche","tabou","appat","faste","magma","reagi","ledit","gages","fleau","squaw","sonde","jante","buche","venge","toles","blase","cabas","gemme","drape","fendu","renom","niais","ponte","combe","obeis","sahel","surin","mules","bossu","bagne","flash","motte","grief","bonus","capte","peter","canif","antre","phono","laves","lavee","decus","myope","phage","peurs","agees","ravis","serum","patch","bacon","pivot","argot","navre","cuits","trapu","sedan","hosto","green","clore","pores","volte","defie","tweed","panse","judas","heurt","viril","palir","elise","vecus","retro","bouee","aieul","parme","lunes","epure","natte","sucer","profs","fades","videe","rates","thune","elire","veaux","semee","preta","poupe","pesee","obese","hertz","luire","armer","khans","laids","aboli","usuel","gueux","degel","cidre","durci","legue","citee","scier","torts","velos","polis","medoc","salve","paien","tamis","poker","rases","solex","ribot","tomes","aleas","rougi","mache","impur","horde","dilue","nique","leste","ravir","patio","merle","limon","egide","baume","epate","promu","usant","paree","batis","jupon","store","etuve","benit","brame","masai","pavee","motos","voues","rafle","sains","piper","credo","agile","erige","ciels","punis","vimes","godet","palme","alias","athee","river","dedie","docks","cuirs","voles","volts","rieur","metis","enfui","subis","baver","stars","fermi","lepre","dandy","rebut","ferre","butee","matou","slave","vouer","louee","dires","rince","loque","serpe","jeton","coche","calot","bosco","louve","delta","cones","tapie","venin","odeon","mulet","galon","zebre","saxon","supra","cames","berne","vetir","murir","epier","caser","cousu","rales","javel","cires","jauni","rasee","mares","onces","natif","gigot","cocon","ruche","gonze","foies","pions","tuile","pilon","larve","atout","amers","agree","maths","primo","dupes","subie","benir","duite","mitan","viree","revee","preau","fumet","robot","omega","soles","delie","rotin","harde","happe","arome","tapes","taupe","visse","doser","bondi","silos","ecrin","crepi","beant","forum","abois","ecrou","bulbe","bouse","dechu","tanks","flous","campe","pulpe","patre","momie","magot","hamac","alpha","galet","scies","rayes","defis","revus","lacis","cedre","scout","gland","codex","emaux","tondu","joule","gater","tapin","neons","cuves","aubes","apero","ourse","obtus","boute","algue","philo","palpe","semes","garee","eboue","figer","garer","bicot","gonds","gites","fards","geles","gitan","orvet","tempo","hotte","raidi","jurys","benis","tabes","purge","punch","valve","nurse","verso","edite","chope","jacte","mimer","colas","rable","pepin","damne","preux","strie","guepe","carpe","otage","juron","demis","suive","votee","cirer","broye","clins","logos","carie","ceint","datee","bonde","anima","notee","encor","saule","minet","devin","stand","barde","lobes","chape","rogne","genet","otant","farci","ridee","moult","tuant","tenor","minus","raton","fiole","tetue","banni","devie","sioux","maton","ebats","piafs","rayee","muret","fissa","poilu","fagot","burin","round","blaze","diete","cacao","gallo","fripe","prout","pizza","vexer","orner","frire","caler","malus","meson","anses","soies","naval","mitre","cumul","prune","clebs","foins","redit","sinus","regal","racle","orgie","bidet","halle","parus","infra","suant","purin","ponce","opale","flirt","jarre","bique","hibou","gamma","penis","halls","kepis","capes","gatee","sangs","minou","zombi","bluff","bovin","rivet","strip","mafia","giron","mamie","rimes","radin","deplu","opter","laics","mages","ormes","benie","tende","pares","mande","raler","patee","benin","bison","moire","gicle","tract","orges","vagin","zeros","fanee","turbo","stele","spire","cheik","fanal","slips","tonus","exigu","ovule","tarin","denue","fanes","epice","petri","rayer","magne","toise","timon","patin","lotus","lieue","innee","gotha","nabis","niant","boude","frene","crins","calva","hatif","devis","cotte","carne","icone","velue","civet","clope","rotir","jatte","cabot","emois","gaies","punie","canoe","vison","nimbe","morse","heron","docte","haras","trust","gravi","aerer","elues","rotis","sevre","terni","truie","nonne","filon","rogue","video","ovins","urnes","moyeu","adage","campo","glass","elude","mites","clame","bauge","teste","telex","imper","serfs","sapes","vexee","ratee","moles","vocal","renne","joyau","cross","colin","pille","mimes","herse","tinte","teter","geler","value","tommy","bales","toast","risee","pitre","shoot","plant","mollo","folio","hampe","brome","beate","rebus","prone","geres","gober","steno","domes","logee","cabre","tarot","retif","gypse","break","group","mural","dinde","cossu","cornu","breme","bigot","alpin","legat","farde","geree","salis","ruser","flane","caoua","etals","rades","raids","ailee","paria","maint","impie","butor","ardue","gates","pries","clodo","tsars","ondee","lippe","party","fange","figue","liane","jabot","latte","sigle","opine","polir","moulu","tchao","huees","goure","calee","druze","recre","watts","torve","bazin","recto","bemol","naine","boues","eloxe","vasee","mugie","gogee","basis","bavee","agies","abale","duque","fuses","fohne","goger","jumpe","basir","geeke","amuir","skiee","skies","cicle","fitte","baque","buzze","alper","grale","bomee","slame","toler","likee","likes","liker","nifes","buque","etige","tague","rotee","sodee","sodes","looke","replu","valus","lyrer","tagge","rebue","mofle","moyee","moyes","camer","slice","lysee","lyses","sauri","rondi","nordi","megir","cotis","cotie","cotir","tarti","suble","tunee","tomee","tomer","tippe","tipee","tipes","tiper","taude","tubee","zouke","suife","mazee","mazes","siler","mazer","kifee","kifes","havee","kifer","snife","robee","rober","ralle","pucee","pucer","pifee","pifes","pifer","novee","nover","grese","tises","abrie","tiser","cheve","jerke","zoome","hacke","guipe","gluee","glues","gluer","miter","ruile","coxee","coxes","coxer","fluxe","yodle","jodle","ioule","enoue","emiee","emies","emier","elegi","eliee","elier","cante","azore","echer","jazze","terri","rugie","rouis","matie","henni","havis","havie","glati","fouis","clapi","catie","bruie","layee","pedze","crole","sexee","sexer","houee","froue","nuant","eluee","zonee","toree","tilte","terse","tatee","supee","saune","rupee","rupes","ripee","ripes","riote","reant","pises","pigee","pacse","lutee","lutes","occis","moyer","lapes","kiffe","jogge","jarte","ixant","ixees","ruper","hable","hiant","hiees","gueee","guees","grute","godee","fiees","faxee","epuce","entee","enlie","ecure","dolee","doles","redue","cules","cubee","crene","faxer","celes","capee","cambe","boxee","blute","bitee","bisee","bilee","badee","bades","axant","arise","abute","adire","ocrer","typer","acter","ioder","biler","bruir","lober","doper","elies","logue","luxee","faxes","moiti","dopee","mutee","deale","bipes","bipee","surfe","topes","aluni","vampe","zappe","zippe","bruis","biter","piger","eluer","bader","touer","tarer","seoir","rouir","rader","matir","luxer","lofer","houer","havir","gueer","culer","cuber","catir","biser","airer","haver","koter","tiger","agoni","caper","nocer","fluer","doler","liter","lobee","buser","akita","cezig","stuut","hutia","guars","veles","jeses","tayra","gouro","ankhs","bebop","doner","anoli","alois","dalit","chuts","sudra","deugs","ewees","infox","cashs","djeun","melas","astes","eduen","jacos","peves","alyas","velds","tabun","stemm","sosot","saron","riffe","rikio","repro","rbati","rayia","rachi","peuhl","pajot","onlay","oidie","nuton","nibar","mulla","morce","mamet","lysat","kenaf","ixage","hihan","gwoka","golee","diwan","chipo","blaff","bizou","bitue","bitis","benji","vracs","tosas","teves","tains","sufis","sates","ryals","ryads","praos","peufs","penes","omras","okras","misos","grafs","fiqhs","duses","doxas","couvs","clims","chebs","cebes","regur","bonif","dobok","perif","brans","riyal","pilaw","sarod","tagme","mamee","tufte","uvale","uvaux","plocs","obels","kefta","kavas","joice","ikats","dauws","dabas","alevi","bodys","sonie","potue","lehms","hutus","anjou","bicol","ubris","ribat","ineat","taxum","dolly","gwerz","hocas","loofa","chans","kylix","sprue","amoks","tolba","cenes","tatis","anniv","recup","jajas","meloe","bekee","bekes","chvas","wales","walis","tolus","nemes","nagas","mezes","lomos","hajes","hadjs","enols","fuero","coefs","ttoro","givry","ormet","mames","botos","bodhi","axoas","tical","yapok","barza","resas","yukos","sipos","manul","mikve","begus","recez","oumma","soman","segas","clark","morge","kabye","dogat","cetol","proxo","yamba","skuns","sames","lambi","molys","redif","canee","lerch","gaita","skons","anels","scoot","guibs","rabla","louma","pipos","edams","betee","cyons","onsen","marae","ozene","maset","zamus","kefie","tchan","oromo","pegot","fjeld","wifis","judds","plint","hogan","boide","bletz","nazca","salol","argas","cloup","tonie","brols","herve","pudus","feale","rioja","ndole","tokaj","xalam","bilie","sinoc","dhikr","peket","nakfa","aguis","maqam","ostos","eject","junky","osmie","pible","thete","tupie","imide","gothe","fitou","sueve","richi","rishi","moore","tutsi","saola","pepon","briks","bowal","silat","coirs","guete","jazzy","goral","dugon","vanda","kohol","bizet","raags","mneme","tamil","kenas","ramin","copla","gusse","talet","miler","angus","glial","glies","thiof","binon","noucs","bamba","gamer","doums","glams","biaxe","emyde","frake","hovas","dibis","dayak","bitus","ogams","diene","pekoe","axene","vireo","cueva","fedes","cakta","ixias","halon","jains","jaine","tonca","tonka","capet","cubis","atoca","apide","monel","mammo","loase","asana","luzin","graux","wenze","quado","lakhs","naias","kabig","kabic","vacoa","nashi","tobys","dache","azobe","duaux","diots","chiro","skeet","moais","sakti","boiar","enema","mezig","shiba","cajet","daira","bayle","potto","fixie","stamm","ileal","kreml","kales","hopak","gopak","osteo","asram","calos","gonio","trins","danio","cakti","veldt","eyras","insti","arhat","ursin","afars","afare","jumar","nebka","yakas","kache","mudra","moere","manas","tupis","nable","dorin","dixie","expat","felle","niolu","niolo","thali","banon","ovees","wenge","zoide","flenu","tiffe","watte","broum","shana","nizam","carva","ligie","donut","bittu","choco","gabie","noris","kiefs","gueze","lepte","flein","deust","khoin","tepui","takas","setar","cayon","sikhe","alems","velie","penty","scuta","didot","eleis","kyats","latif","fusel","intis","innue","monoi","bobun","birrs","ippon","gloup","amuie","amuis","kayac","plion","boete","dentu","beryx","behai","atemi","kivas","xieme","anite","adjar","hypne","raver","napee","visou","bisoc","ovide","dails","lapie","tsuba","goglu","botes","varve","decis","tifos","delot","mylar","shido","oxers","samos","samus","samis","bigor","kouba","adnee","adnes","socca","bibli","inlay","podal","fetas","lamba","dakin","altea","nemis","mafes","torys","soums","aisys","craux","craus","hokis","raias","maias","narse","soyas","jales","guyot","gilde","sonal","untel","degue","goron","maohi","dhoti","samie","gadje","palox","reiki","pieze","pinup","hocco","pakol","peule","maffe","rheto","manou","widia","pilet","riads","murol","maury","mique","myome","merls","sarts","zanis","jards","viets","vairs","urees","unifs","trics","taros","skifs","siums","seres","saies","rushs","peans","oings","nells","nafes","mocos","mayes","matus","majes","lones","kraks","khols","kawis","kadis","innus","imans","ilets","gords","gojis","fohns","etocs","emous","ejets","ecots","docus","dabes","cucus","crets","cobes","chtis","cedis","boges","beuhs","aspes","aracs","aculs","acais","tofus","buscs","ubacs","nonos","corbs","brous","ordos","aluns","velas","hasts","skats","araks","pians","yangs","gones","lests","astis","ajuts","tamas","adons","feujs","cobza","biwas","spets","manta","eluat","noese","noeme","reais","husky","gazou","physe","pedum","karen","zende","fassi","ovate","yuzus","fudge","agreg","orees","shogi","luffa","tween","assos","munda","plexi","lapse","junco","padel","diola","botox","vibro","hyphe","apiol","raita","softs","polje","ponor","wushu","nives","thiol","fados","triol","catas","taxol","donas","dolos","jasse","awele","awale","varon","vlogs","koras","rakis","waqfs","gleys","sylis","zikrs","polys","tacts","pogos","kinas","vatus","yasse","ragas","kelps","puros","tians","koans","erine","swags","kolas","obits","lepta","floes","pujas","iwans","neems","riels","sones","somas","teffs","fiscs","mooks","lidos","naans","gades","lassi","rajas","karts","gaurs","nerds","chums","maars","tines","umbos","gigas","sumos","goyim","phyla","glome","smogs","zouks","silts","taser","treks","nixes","slims","brens","lazes","scats","kerns","yorks","recks","slams","rifts","mulls","soaps","foots","stots","grips","swaps","jihad","prods","bomes","umami","ramen","gyros","prepa","abots","cobea","cobee","yassa","zazen","genal","epair","hoirs","hards","cirse","acheb","kotos","adrar","cycas","arols","arole","epite","boudi","diffa","quena","fonio","trabe","zumba","modif","kawai","panax","tauds","scone","gyrin","tchin","emoji","aldol","gaura","redox","ulnas","divis","famas","malis","ranis","tutos","baine","jubes","zorse","minis","nitro","dewar","bagel","swazi","narco","uvula","slurp","loris","bravi","fadet","pisco","lobis","nabla","toman","obele","penos","hutue","pites","doula","gasps","rumex","decas","yogas","sojas","loufs","bobby","khats","darce","cufat","zends","redac","kines","petre","oxime","detox","nival","potus","pives","biges","agnis","sanza","leges","xiang","marte","sambo","ideel","popah","skuas","punas","pikas","nomas","digon","mokos","lumas","kombu","hakas","tonfa","gluis","fluos","faros","tagua","lauze","addax","fieux","actus","erses","rebot","teufs","doufe","gyoza","aouts","lemur","torii","solea","irone","oleum","dinka","lompe","alule","reduc","velux","dojos","neres","waouh","viele","acmes","tuage","lyras","talcs","urdus","cajun","chile","velar","seran","tabar","zamak","goutu","nacho","shits","roufs","arecs","megas","conso","misse","tejus","decos","sakis","skais","tweet","rosti","rando","chahs","avals","octas","myase","cocas","bogey","ponch","qibla","qanun","burka","ratte","pechu","argan","perfs","chino","horas","demos","sotho","boost","sicav","fuels","drops","loses","satay","twins","tells","jerks","pitou","studs","chops","batch","buggy","soues","asple","univs","eland","thane","redie","boure","bours","reale","stats","jotas","stent","items","melia","norde","revif","quads","tjale","takin","prame","putti","dhole","yodel","padou","podia","epoxy","imine","scato","ables","yawls","caget","tacks","surfs","putts","opens","teddy","druse","hosts","farts","algal","cools","girly","unaux","unaus","haida","sexys","riste","ecsta","gnete","gasba","kafir","taleb","tenge","yeble","bento","fiote","gaspi","ketje","sadhu","durum","hijab","niqab","burqa","kyudo","stupa","farsi","niole","epart","graff","ponot","noyat","boudu","mayen","speos","spart","projo","radja","hakka","rumen","abdos","artel","sotch","amish","foxee","foxes","sirex","tolar","naira","salse","rapia","lumps","coyer","smolt","picon","cruor","besas","musli","nyala","halal","yeyes","elemi","halbi","pesse","jaina","cayes","muscs","serte","ocule","evohe","senau","sebka","sheol","esker","saite","tatie","saiga","saros","mungo","tchat","megis","appli","vibor","novae","fugus","gobie","strix","sarin","pelta","cameo","sedum","sedon","cerce","salpe","capas","alyte","cayeu","knack","raban","remix","joual","haram","podie","koppa","gugus","shama","kikis","ksars","kanas","matos","cagee","ksour","kanak","typon","ilien","ajour","burle","asins","blaps","dispo","padan","condo","garat","bugge","sphex","edito","jusee","irien","coxas","suber","iodle","kilim","syrah","fonge","donau","taraf","suris","brede","harle","riser","briee","banat","bacul","borin","assec","mauls","dials","cants","flows","posts","necks","mixes","lacks","scans","gores","stems","decks","whips","calls","rafts","fates","dunks","asses","purot","shots","stilb","pinne","palle","cocci","clays","acyle","wikis","wraps","spams","rands","racks","pucks","musts","kites","geeks","gurus","fangs","fakes","funks","exons","diols","doits","doucs","drams","clues","claps","cribs","cades","bores","borts","anils","aulas","acini","ecote","cagou","winch","berot","eches","echee","anees","loure","bibus","gadji","catis","djain","rayas","layes","bauds","crias","draft","durit","acore","gavot","houes","flues","voise","vinas","dosse","dolic","sitar","bards","taffe","kongo","xipho","sassa","morio","rappe","rague","radee","puche","petas","pegue","zarbs","crade","ogham","lapee","jutes","jonce","gyres","frita","pagre","futon","beuse","abers","pouet","natel","caion","bobet","esses","pager","kaons","entes","codon","biker","redus","flags","crema","codas","clave","chopa","chias","laris","graus","denar","kunas","cavas","busee","brase","blese","litas","pulas","bipas","bines","beles","badas","bokit","clito","actee","taino","elbot","murge","raval","ferle","taxon","pipit","zains","uvees","arobe","perms","binee","rucks","arsis","risse","welsh","abees","nucal","filao","iglou","oriel","suppo","coloc","dzeta","caria","flyer","nagee","burat","kekes","enfeu","mulch","osque","cacou","zarma","aiche","muons","huons","sirli","patas","oculi","macre","lette","indri","herpe","ganga","erbue","draye","accon","usnee","velet","velot","velte","venet","ligot","garis","belee","rabab","chore","recap","titus","kamis","pekan","vomer","issas","atele","anone","arzel","trike","tavel","bulot","tilla","jumel","avoye","suage","manon","gayal","tagal","ecoin","ecang","piers","fario","vagal","kagou","oeils","jayet","ulema","kerma","guili","combi","combo","carbo","groie","conde","gruon","bayou","cenne","buvee","tauon","zeine","zanni","dahir","fovea","algie","arsin","trapp","jaque","zloty","archi","gloss","aldin","atipa","bongo","hures","infos","jacks","katas","goals","keufs","keums","kicks","kilts","gifts","ladys","gents","lands","legos","gales","lieds","lifts","linos","lofts","lords","folks","flops","mamys","maxis","memos","exams","meufs","euros","mimis","nards","novas","dongs","papys","deals","dahus","pitas","procs","colts","rapts","rials","riens","rotos","capos","bytes","skins","brais","sonos","spics","books","bedes","tacos","taels","tempi","bahts","axels","tongs","touts","trips","yoyos","yuans","jojos","issus","hopis","pacas","sises","anaux","broue","julie","bluet","fuies","login","mimas","rotes","boxes","traie","tabla","rasas","tapas","proxy","bazou","toner","thyms","skate","safou","suide","canar","butos","bachi","maras","acons","bolus","feuil","semai","glosa","bolos","sabar","manat","rakus","blogs","juins","zarbi","gogol","shona","rital","sexto","dudit","kondo","trash","velle","zabre","hyper","bahai","debye","borie","codec","torrs","brion","sural","psoas","yetis","ataca","bimbo","impro","coyau","panga","kalis","ragga","ugnis","labri","nille","tanga","cheni","ladin","tondo","biper","uvule","kawas","rheme","kriss","chapo","mezze","zakat","tamia","mosan","light","baggy","inuit","halde","patou","rover","ratel","kriek","flets","xhosa","blini","mytho","perso","filmo","bindi","agada","rebeu","blast","bidou","limba","ordis","chili","fouge","bagad","rhino","zoile","xyste","vinee","vesou","urate","tutie","trole","trans","tourd","touee","tmese","tique","tetin","tette","targe","tapon","taled","tacet","suros","sucon","stras","sorbe","solin","sexte","sevir","serac","seime","saure","sanve","sajou","samit","salep","rosse","robre","rhumb","repic","rebec","ramie","quint","bemba","prele","pouah","pilau","petun","penil","pelte","palee","pagel","orobe","obier","nouet","neume","necro","napel","morve","mense","megie","looch","liure","levis","leude","labie","jugal","jocko","jarde","jacee","jalap","inule","ichor","huhau","grebe","gluau","gesse","gelif","gecko","funin","falot","eteuf","epois","ephod","elyme","elave","dulie","douci","dotal","dalot","crase","couvi","coxal","copal","cirre","cippe","chyme","cerat","caieu","biset","bacha","aunee","auget","augee","feral","chiac","feues","lahar","cyans","liman","pitta","joran","thais","thaie","armon","arack","apyre","aphte","annal","amome","alleu","airee","accot","accul","acare","athle","prase","patro","cheba","steps","incus","clamp","vigil","scope","ethos","lyric","shift","trend","topic","scare","fancy","panic","wedge","smurf","gluon","squat","corgi","lodge","claim","click","ninja","speck","schwa","shelf","vegan","navel","slash","pilot","pitch","crown","space","house","cloud","slide","trail","qubit","black","digit","salar","ramat","grana","embut","beure","venda","trigo","selva","mecha","dobra","casta","casco","achar","potet","morna","fjell","banne","spare","salat","lager","tilde","varna","hosta","check","vista","scopa","corpo","assai","glide","falle","alter","litra","lause","lapsi","yucca","blind","beset","afros","kanat","ixode","acras","tipis","kurus","bantu","kemia","wiski","sushi","proba","harka","frase","dashi","baile","antes","pombe","ndama","mamba","zamia","vapos","larix","fossa","focus","fanum","canna","arena","bigos","muscu","tacca","denti","panca","gamet","cipre","taxie","sango","pesto","belga","schah","fuste","vulgo","circa","xerus","kendo","intro","cupro","alien","carvi","aieux","amict","geole","gatte","ganja","drege","criss","crave","colee","coati","bassa","affin","adent","relai","sorgo","cegep","exema","fioul","ergol","amigo","drone","divot","pixel","mappe","lidar","relou","smalt","niets","hourd","brief","dirlo","daman","modal","iambe","turne","quick","after","leone","cadis","malon","oeuve","tanne","psore","parse","laite","oufti","dance","biome","degun","dreve","accro","nefle","padre","eagle","cedex","sweat","glume","exine","drupe","linga","corme","akene","dogon","prion","sheds","foils","guede","spume","choke","bulge","oriya","queer","tetra","mazot","farad","azeri","spitz","modem","quipo","wolof","stone","abaca","fatwa","kanji","manga","taxer","ramer","dorer","negus","rotor","chics","ebahi","doges","sorts","tunes","aeree","vigie","ronce","filin","calin","catch","hyene","glebe","etole","deche","dague","benne","fraye","huppe","muree","regir","impec","hebdo","snobs","copte","marks","oraux","pelee","pondu","rapee","maure","veule","seant","pavot","ogive","groom","badin","groin","ozone","snack","pampa","nanti","aigri","criee","boise","acres","galbe","loues","geint","munir","humer","julot","vroum","osons","feves","pulls","abats","boers","sense","pagne","ouste","navet","latex","duper","lupin","radon","muses","bruni","salie","parue","malte","tarir","ouche","marle","cocos","spins","tries","barda","paons","roide","renal","potin","nocif","lubie","cotre","beryl","label","emeri","camus","bribe","batte","carat","caduc","peses","tiare","etaye","egaye","cuver","miner","nicol","incas","skiff","porno","crans","senne","ocres","visas","prolo","abbes","dingo","zeste","steak","boxer","hello","meteo","massa","focal","fluet","catin","cagna","ferte","ruant","priee","fuser","gaver","mossi","fremi","maser","punks","manif","sabin","zazou","gnons","frets","raves","rusee","felee","relus","tarie","fiefs","banco","pegre","manne","cahot","benet","appas","lunch","tapir","basta","imago","grege","filme","saper","tatar","avive","plouf","blair","mambo","ogres","poufs","ourle","bacle","soute","chais","baffe","maori","vulve","pavie","peage","nabot","lange","bigre","baril","thons","tripe","laser","papas","emule","kraft","lapis","gnole","curee","resto","felin","axone","sapee","gibus","elime","arque","lires","cocus","veufs","frits","crame","chiot","serin","rapin","pubis","etron","broie","tutti","crawl","clash","wharf","speed","hydre","gigue","derme","fluor","anion","serti","cries","rivee","patir","murer","algol","bogie","caddy","minot","embue","liage","soule","mates","prote","corso","tison","spath","picot","obole","nasse","gibet","agres","laits","anode","kayak","ouies","iodee","ferir","compo","pagus","cador","motel","duels","dards","plots","seves","boucs","spots","rages","minee","viral","basal","boxon","suint","rabot","mucus","lucre","kyste","jalon","fonts","fifre","caban","bonze","gnome","diese","tibia","limes","miaou","duche","argus","gaves","galle","hales","faner","bayer","lebel","croco","rodez","pilee","micas","popes","souks","indus","prima","calle","taris","trime","audio","ardus","lusin","tetee","tapee","sosie","seing","ruolz","rouet","ortie","oisif","marli","lopin","filou","femur","media","score","aviso","frite","joute","celte","aloes","vicie","dodue","acere","agate","tesla","becte","gante","vires","peles","biffe","leses","sikhs","perme","kodak","boots","honni","laius","etuis","rixes","caids","bites","futes","darde","codee","tuees","titan","rotie","motus","alize","stick","lupus","glane","atone","aorte","begue","beauf","sepia","sauge","amine","butes","miser","peler","couic","veces","papou","cange","marcs","elfes","stase","recta","potee","krach","camee","tetus","surge","roque","garou","devot","lasso","griot","scoop","eclos","evase","reelu","lovee","cedes","boume","heler","rugir","reglo","murie","plouc","jeeps","moues","nenes","edits","cepes","suees","ferus","ploye","polar","lobby","sinue","ruade","ricin","paque","myrte","manes","irise","drive","banjo","halos","henne","bevue","pieta","ester","bitte","gavee","cedee","brime","mirer","lover","jerez","naves","crado","fetus","whigs","repus","saufs","paies","tonte","salin","pleur","noria","ceans","faims","aspic","arcon","prude","jeans","fucus","dolce","scalp","claie","cella","belon","agora","cigue","nonce","anale","grenu","denie","vexes","glose","halee","jaspe","fiant","jaser","curer","mugir","pyrex","uzbek","evide","rupin","gangs","brocs","sofas","reaux","zeles","avili","raque","dimes","vomis","emues","gnouf","gruau","venal","velin","tanin","shako","recel","recif","plaid","pilou","palan","otite","lutin","loche","goret","ecope","dogue","couac","aulne","ranch","relax","staff","block","herbu","guano","about","serbe","pinte","clape","rimer","palie","ninas","paseo","fatma","rodeo","cucul","duras","fritz","sebum","nodal","gongs","frocs","noels","bises","tonal","sabir","chips","pipis","mulot","lavis","ferie","mutin","fakir","colza","twist","macho","disco","grive","gouge","flint","dedit","cumin","croup","chenu","liard","gazes","chome","chipe","bigle","alese","coite","rapes","daube","carde","dosee","coder","roter","limer","hasch","mayas","pence","loess","gogos","loirs","caris","buses","teles","yards","velus","jappe","filee","furax","nabab","usite","tenon","patis","nasal","penny","cobra","lumen","mamma","rider","ducal","braye","axial","gable","balte","ecrue","juree","daron","tacot","pulse","echue","baser","saler","pamer","forer","bordj","torah","nouba","pentu","isbas","geais","galas","boums","bobos","bleds","zincs","innes","saurs","dodus","aeres","biote","aunes","lagon","clone","loden","trias","toton","sixte","poney","babil","gourd","badge","rifle","smash","ovine","lazzi","rabbi","midis","testa","hymen","brout","borax","amibe","crack","expie","gemis","rodee","sciee","brade","aboye","forci","muter","rosir","fader","haler","bitos","thora","maous","hadal","choye","smala","avine","etame","bleui","packs","paras","pesos","clips","taies","tutus","typos","vapes","repue","drues","liras","haves","diode","fraie","dixit","thuya","plebe","palis","nanan","narre","luron","linon","encan","sylve","taiga","coach","clean","swing","turco","atoll","ictus","fjord","cuvee","arroi","amble","coron","racee","epile","lesee","omise","mimee","decru","pamee","cille","triee","laper","lacer","fouir","benef","melba","pinot","dring","abeti","xeres","daims","dadas","solos","bibis","cotee","adule","rondo","trope","tolle","tenia","spore","sanie","audit","bafre","avenu","creek","trial","sauna","nervi","darse","crepu","aneth","nadir","whist","imbue","texto","aleph","maque","feles","rodes","petes","caque","epiee","osees","veler","piler","juter","goder","mogol","malts","kyrie","polio","sahib","gaize","gadin","rumba","futal","lopes","faons","pines","cacas","soifs","babas","trams","arums","accus","imbus","brava","pissa","rouee","ruees","avent","amphi","anier","teton","scion","rouan","recru","ragot","mante","lotte","canin","aubin","aryen","fatum","ratio","isard","huche","douve","barge","anche","vespa","licol","licou","banda","raout","basic","limbe","blemi","ficha","zoner","syrte","hatee","liner","finns","helio","tanka","ampli","mataf","hippy","merlu","hevea","luger","indic","grees","beurk","zigue","zaire","quota","lyres","etaux","coits","cines","buees","sodas","stucs","auges","zizis","beats","lotie","lotis","loves","proto","texan","alite","youpi","sarde","catho","tarse","ptose","perot","palot","motet","liron","lacte","ergot","bolet","shunt","locus","aster","puine","sonar","bisou","drill","bette","argol","furet","menon","zelee","ignee","autan","feces","probe","ahane","hates","frete","fores","dupee","muris","mutes","axees","rouer","leser","caner","raper","douro","hutin","huart","anars","macha","goths","adonc","tonic","fouta","ecolo","amide","garum","sulky","chiee","paddy","giton","limbo","muant","grils","locos","exils","mouts","orbes","rings","bocks","bomba","lises","nages","taons","fayot","toril","spahi","quine","phlox","pepie","ilion","futee","douar","debet","capon","cabri","ajonc","smart","secco","gente","velum","varia","fames","goulu","brize","amyle","links","panel","lotos","coing","ilote","mires","ganse","erode","fasce","madre","vaque","laces","obeie","glapi","casee","tance","vomie","coter","biner","skier","riper","jacot","vroom","lexis","atman","derny","houla","perre","mahdi","invar","lotta","litho","barye","monos","livet","neper","horst","creat","bures","pouic","desks","delco","dines","varus","parka","elide","mazet","dyade","lagan","kapok","salop","hotus","heres","guets","javas","kapos","lamas","lices","fifis","melos","diams","crics","rocks","biefs","tores","zozos","epies","larde","oints","relue","taree","amati","venta","houri","stere","agnel","atres","tille","ramas","pansu","nenni","menin","marri","laize","ileon","grime","gerce","felon","degat","sniff","noise","grill","largo","lippu","gille","cyclo","stout","estoc","fecal","exeat","epieu","deite","cosse","chyle","carex","bugle","betel","avers","angon","amure","famee","bogue","drink","palet","obvie","azyme","vines","terce","huant","cafte","lotir","douer","celer","molli","paner","roneo","laird","avens","hecto","bouif","aioli","karst","sisal","favus","hanse","fadas","barjo","itere","ranci","sexue","birbe","ripou","ajout","homes","heurs","grogs","luths","mokas","neves","oyats","czars","sires","slows","bonis","bills","titis","trios","yacks","zebus","lares","feaux","viles","ocree","ourdi","marra","mitee","canes","bisse","taxee","candi","urane","tatou","radie","queux","nones","ladre","fenil","fanon","dente","cagot","baste","alise","stuka","promo","azure","lento","haste","salam","spray","golem","gamay","drift","cepee","alene","tacle","hobby","argon","indue","sigma","datte","penne","liber","grume","kurde","roser","calte","tales","fetee","matee","medit","rimee","sucee","giter","viner","rager","gazer","feler","beler","tuber","perco","verif","flocs","orlon","alpax","renon","tokai","cauri","blitz","homos","kacha","devon","alios","amans","papet","turbe","furia","flush","ipeca","sprat","manse","mucor","varan","racer","asine","amman","dives","altos","gagas","obere","feria","clive","arase","pante","liche","vouge","imams","kakis","gnous","labos","lards","luxes","estes","edens","dynes","drags","denis","pumas","comas","sagas","cakes","blots","stops","suies","talas","tatas","bangs","toges","trocs","laies","surie","cocue","petee","etaie","ointe","panee","snobe","baves","curry","ognon","troll","karma","mixer","yeuse","voyer","tiret","sumac","ramee","rajah","ponge","pilaf","pigne","papal","nitre","murex","lemme","julep","junte","cague","lorry","mores","bloom","input","bingo","joker","redan","galla","molto","mezzo","manda","drain","infus","fessu","ecale","drave","boldo","begum","bagou","apnee","alvin","votif","haire","hadji","ferue","safre","khmer","hapax","vivat","bezef","gobes","dopes","lumes","noves","gaudi","niees","misee","feule","otees","epele","greee","pames","tiedi","vagir","gager","auner","layer","jodel","trona","jumbo","stups","kores","meats","hiles","twill","tokay","gyrus","ulves","taret","pepee","psitt","doris","aplat","craps","labre","cafre","indou","murin","boree","oflag","bolee","tacon","funes","fanas","apure","soyer","kefir","reces","huron","haiks","jades","gours","fracs","flips","flans","miels","muids","oueds","demes","peons","pepes","clics","saxes","saxos","bulls","booms","bides","totos","arias","tubas","vamps","ahans","rebat","pinta","emeus","panes","boula","bolas","bugne","lapon","pareo","ecule","suret","surah","sunna","supin","runes","rosat","raine","oyant","orpin","ondin","oille","nopal","mufti","liais","knout","hanap","flapi","djinn","datif","bedon","falun","adret","rough","carry","rasta","salto","regel","satis","ficus","cavum","abies","dinar","freux","fagne","cluse","cavee","bigue","basin","alose","peson","cilie","kappa","brick","octet","gruge","migre","nippe","saque","ronin","lyser","vaser","gonde","farte","surir","typee","toure","iodes","anise","limee","lacee","gobee","foree","echus","minci","drope","chies","roidi","rosis","rugis","calmi","talee","muser","luter","greer","damer","caver","bater","enter","rumbs","iftar","palas","medes","lycra","scull","loran","peuls","pisan","aryle","hazan","iroko","suifs","gombo","lurex","nomes","xylol","cipal","volis","angor","culex","intox","guppy","vetos","tatin","drums","baths","canut","mesas","asque","egeen","rhums","faena","gerle","saupe","becot","ibere","carme","muche","koine","escot","encas","fares","toura","derby","sutra","copra","gouda","maerl","grole","tsuga","cajou","clade","burne","cedat","harki","buron","kebab","andin","octal","merou","ecrus","bries","ignes","hunes","hases","harts","jougs","golfs","fulls","looks","luges","lulus","maies","muges","emirs","ovnis","colos","cokes","clams","sanas","saris","sidis","thugs","azurs","topos","toues","tracs","alfas","aedes","liges","flats","fadee","reacs","betas","argue","viola","etete","poile","gagee","fions","mouds","suces","acnes","nanar","halva","musse","esche","tramp","anons","vesse","uhlan","trema","tortu","spica","pools","sbire","sayon","pipee","pilum","penon","orant","oison","oblat","minon","macis","litee","ileus","gaude","ducat","chott","bubon","braie","atour","verin","agame","smack","mammy","freak","blush","panda","cheap","quiet","agave","rolle","salsa","gamba","selfs","batik","koala","scrub","payse","hoyau","goton","foene","empan","decan","darne","daine","culee","berme","batee","abyme","armet","almee","agape","xenon","toron","grene","ukase","comma","lives","putte","lifte","urger","rouie","rassi","ulule","supes","rible","lites","helee","ecime","humes","humee","piffe","heles","gemie","fouie","mixee","muees","mugis","damee","relui","pagee","chues","celee","brait","tosse","miree","toper","raire","paver","matis","poter","gesir","alpee","otons","sados","racho","ossus","guais","rashs","orins","bunas","makis","duals","tikis","vaire","palud","hemes","paxon","jezes","iboga","donax","igame","dural","avien","balan","fouee","ketch","freon","indol","niebe","cappa","miton","orles","vedas","tecks","pupes","cracs","cores","masos","duits","fiels","duale","iceux","apion","lochs","punts","kippa","conga","typha","tolee","epige","aprem","agglo","miros","lotes","tabor","efrit","pecan","besef","manip","remiz","putto","roofs","houka","slush","raphe","nieme","muron","yoles","jurat","sagum","oside","loser","krill","lamer","taler","calla","barns","sores","skips","douma","calao","venes","caude","tates","rotas","abras","radia","soufi","foehn","coppa","immun","roumi","aoute","kitch","letal","axile","bizut","labbe","igloo","rebab","haiku","cairn","urubu","fumat","trine","diapo","boson","igues","iules","goums","kiwis","lolos","frics","mails","expos","najas","embus","nepes","dykes","duces","ouzos","dodos","divas","papis","cymes","polos","cosys","rabes","ramis","cives","riffs","sakes","senes","shahs","shows","sidas","biles","teams","babys","turfs","tzars","viocs","agios","aghas","aches","yogis","zonas","zooms","nases","nazes","perie","souls","pluma","barri","oigne","poque","godes","gazee","moula","rosie","bates","tuner","sabra","vites","tuque","dicos","lieus","brook","blets","grays","okapi","quark","seide","picte","hayon","balsa","gadjo","alune","selve","lexie","provo","denim","vesce","tridi","torte","tolet","taure","taque","talle","tafia","stipe","sotie","sloop","sicle","seton","sasse","sagou","rocou","peton","pattu","paton","parsi","orque","opiat","omble","nolis","mulon","matte","lerot","lamie","jable","huard","event","etier","epode","endos","eider","edile","drome","defet","decri","ciron","cavet","cabus","buire","solen","rhodo","arien","apode","panty","funky","mound","trick","truck","flood","phone","panka","tomme","trots","kraal","ciste","sampi","sopor","palus","cutis","aspis","gaiac","fiord","crash","zonal","poise","ithos","hydne","helix","haret","guzla","goura","goule","gouet","glene","girie","gaupe","gambe","faine","espar","equin","duodi","ceste","caret","capre","calus","cagne","astic","aspre","ambon","aleze","agnat","agami","lieur","adobe","beurs","mango","volve","ossue","lunee","lamee","erres","ansee","brele","macle","geode","theta","ainou","quipu","hindi","slang","henry"]
      , Ta = ["comme","cette","aussi","autre","faire","entre","temps","quand","apres","leurs","alors","moins","toute","homme","elles","grand","ainsi","avoir","avant","monde","notre","trois","celui","celle","petit","chose","porte","point","parce","place","femme","enfin","passe","corps","assez","jours","donne","terre","etais","mieux","reste","forme","heure","doute","effet","votre","cours","saint","seule","coeur","jeune","mains","droit","abord","amour","vieux","peine","facon","ordre","memes","fille","suite","sorte","aller","bonne","ville","etats","force","matin","voila","aucun","table","parle","selon","vingt","parmi","pense","telle","cause","ayant","ecole","juste","route","rouge","belle","annee","objet","moyen","train","etant","plein","livre","grace","etude","marie","pieds","garde","blanc","debut","bruit","vivre","envie","louis","image","piece","cesse","salle","venir","mille","sujet","ombre","libre","genre","paris","coups","voulu","signe","verre","parti","faits","froid","quant","ecrit","ferme","outre","guere","tenir","idees","soeur","champ","geste","ligne","perdu","frere","titre","large","eleve","armee","haute","jouer","voici","front","masse","noire","assis","poids","allez","tombe","connu","scene","odeur","terme","unite","faite","desir","prise","seuls","choix","hotel","somme","types","maman","sinon","clair","serie","egard","tirer","tiens","calme","tache","court","frais","cadre","usage","armes","monte","foret","duree","regle","dents","cotes","faute","hiver","morts","pluie","chien","coupe","dites","foule","grave","degre","forte","noirs","comte","appel","oncle","arbre","ouvre","glace","jaune","sable","chaud","boite","poste","cents","chair","poche","basse","vraie","croix","texte","croit","lutte","boire","style","peche","merci","poser","tante","vaste","total","roman","aimer","etres","herbe","tente","vague","drole","pages","morte","gorge","danse","venue","carte","leger","beaux","fonds","union","venus","sante","radio","merde","rares","diner","offre","salon","rendu","toile","chefs","ouest","neige","lieux","genie","honte","souci","siege","salut","douce","longs","doigt","repas","joual","trace","cache","lever","crise","riche","decor","etage","fallu","angle","lourd","aider","bande","douze","suivi","nulle","creer","plans","russe","serre","lampe","gagne","joues","plage","betes","jadis","prete","finir","creux","poete","nomme","voies","nuits","tetes","tapis","lance","quart","metal","exige","eclat","vertu","actes","jeter","payer","arret","trait","mince","prive","sorti","reine","roses","ondes","quels","amene","songe","liste","utile","fumee","depit","heros","chute","seuil","jambe","repos","folie","reves","plait","mange","folle","casse","tenue","sacre","biens","acide","pitie","avion","notes","crane","tiers","musee","huile","bleue","usine","vides","allee","fleur","prevu","dieux","grise","jette","acces","drame","queue","balle","vieil","acier","egale","haine","rayon","fixes","sueur","ecart","dames","regne","zones","seche","stade","bouge","resta","agent","japon","sucre","recit","chant","servi","barbe","tours","fixer","admis","tissu","voire","avril","senti","photo","jolie","perte","opera","crime","roues","revue","carre","quasi","virus","helas","cycle","appui","bases","brise","ailes","plume","ideal","voile","seins","posee","lueur","lycee","lache","veste","exces","remis","hauts","crier","phase","canal","ronde","amant","barre","verte","cesar","soins","brule","linge","roule","pente","situe","prets","pomme","chere","poing","juger","fruit","nuque","saute","vente","tabac","enfer","epais","foyer","riant","echec","moral","bains","bleus","colle","refus","mises","delai","mines","juifs","noyau","debat","guide","vitre","adieu","tendu","boule","futur","trous","ennui","oeufs","mener","liens","poeme","lente","issue","fonde","latin","biere","rires","piste","culte","avoue","fusil","toits","sauve","seize","aille","corde","firme","marin","varie","amuse","noter","greve","vrais","draps","hippo","fuite","pique","bords","major","brume","local","chats","nerfs","metro","royal","civil","lecon","subir","flics","meres","digne","fosse","etape","canon","citer","ports","ecran","piano","fetes","neuve","sport","robes","soirs","noble","veuve","essai","oubli","coins","aimes","index","coule","arabe","orage","proie","soupe","sonne","messe","tiede","flanc","taire","rever","saisi","beton","these","theme","verts","ocean","ouais","nuage","nette","grain","poses","coude","films","puits","paire","franc","filet","ponts","vichy","modes","coton","maire","poils","exact","reins","coute","voute","vache","encre","brune","siens","grecs","peint","sache","trucs","essor","pouce","mythe","indes","laver","plats","idiot","creme","lisse","opere","plomb","tasse","suede","gosse","levee","isole","raide","grade","forts","juges","plate","marge","canne","bombe","neant","reels","villa","breve","alpes","ruine","sales","gants","paume","couts","demie","anges","fixee","creve","recul","conge","metre","chine","tronc","pompe","brave","peres","borne","maree","kilos","achat","fines","atome","durer","voler","globe","tires","abime","deuil","marre","motif","blond","auras","ceder","divin","depot","boeuf","anime","sourd","rites","paroi","subit","aimee","fonce","actif","baton","tubes","copie","chene","races","genou","rangs","cheri","teint","piege","creee","agite","rampe","camps","magie","liees","vents","bouts","gouts","genes","concu","roche","corse","dormi","geant","final","guise","bancs","cafes","raies","bible","roles","fiche","chaux","nappe","trame","foutu","prime","prier","quete","tigre","ronds","super","vives","seine","molle","baron","lundi","aigue","solde","azote","battu","weber","impot","verse","rural","patte","jeudi","buste","hurle","islam","etale","quais","frein","dates","parts","crete","bonte","sitot","marne","ecume","torse","finie","cites","gamin","remue","sieur","epoux","gamme","rides","talus","melee","evite","stage","robin","tests","faces","biais","moine","chars","jetee","outil","suffi","serge","logis","joies","filer","divan","momes","range","meler","ruban","joint","extra","adore","wagon","gauss","jouir","tribu","regis","vigne","bilan","obeir","levre","lames","pacte","malin","miens","vendu","doree","recus","volee","blocs","lasse","crees","pates","pires","tenus","peser","jesus","pince","clous","sauce","noeud","poule","selle","forge","usure","loups","manie","peril","ultra","fumer","foire","amies","mixte","singe","rives","gaffe","trone","havre","couru","neufs","chers","meche","lapin","finis","salue","fouet","pneus","fonte","juive","bourg","fiere","flots","pales","debit","menee","brute","echos","taper","poele","close","savon","micro","avale","poles","samba","noces","veine","haies","autel","rails","conte","aires","vetue","morne","jenny","rompu","grele","aides","sages","unies","caves","mardi","meles","verbe","diane","vider","egare","alles","lents","elite","dense","banal","dures","belge","coque","dalle","perce","cruel","allie","chocs","demon","asile","bague","menus","tiree","sabre","deces","chaos","baise","moque","dunes","jupes","peaux","moule","aigle","fatal","piles","relie","voeux","fauve","chier","engin","perle","milan","neveu","hache","plaie","vogue","clefs","corne","valet","bravo","codes","galop","talon","habit","noyer","halte","faune","autos","curie","vaine","damas","paves","gifle","vetus","moche","batir","recue","senat","phare","leves","cuire","plier","fondu","amere","mauve","laine","tarde","germe","avise","avide","panne","jetes","fente","tiges","sceau","envoi","balai","egaux","bosse","imite","vecue","males","exclu","dores","gilet","loges","litre","feras","voyou","treve","brefs","repit","harem","gomme","ecrie","payes","ovale","moise","plane","album","ether","sapin","fache","potes","tuyau","cogne","fumes","bruns","match","eveil","ample","botte","doyen","gener","rosee","pures","gaule","agace","menti","piges","pieux","cible","bebes","taxes","choux","email","bijou","goute","beret","bidon","hotes","turcs","vital","taule","souri","vases","houle","pacha","clubs","cuite","bride","osier","tarif","bille","pause","craie","pelle","sexes","bleme","stock","larme","poire","socio","prose","flute","flore","piete","inter","muets","doses","fichu","accru","gelee","etire","laure","malle","peste","trahi","clans","etang","gares","naive","ainee","loupe","jules","semis","astre","sonna","evier","lande","farce","monts","hoche","parcs","dette","loger","niece","colis","cerne","mefie","ongle","affut","aigre","saine","laide","ciree","cures","percu","vomir","cieux","terne","doues","cubes","jouet","borde","hante","enjeu","valse","frise","liege","perse","pisse","basee","ronge","legal","longe","aisee","munis","ancre","jolis","bache","fusee","stylo","punir","gerbe","parie","gueri","lions","lilas","nager","pendu","socle","fibre","aines","louer","tarte","frele","soude","ruses","garni","abces","surgi","seaux","ravin","avare","fours","fiers","delit","reuni","golfe","votes","epars","amont","voter","rudes","rejet","ferry","nuees","natal","digue","norme","tonne","pouls","puces","figee","volet","avere","aveux","satan","rubis","crabe","rival","etain","parer","aigus","megot","fable","berge","urine","oxyde","exode","files","moite","verdi","porto","atlas","saoul","tordu","humus","satin","brode","orale","tempe","parte","elans","nacre","barbu","biche","leche","duvet","niche","hardi","cadet","hymne","jugee","dotes","hater","cases","baies","cargo","chale","cable","cloue","sente","sirop","boyau","orgue","clerc","gemir","nuire","meure","blame","puree","renee","ornee","arche","cense","macro","ligue","rende","clown","bulle","gache","jurer","regie","eloge","capot","butte","frime","aptes","rugby","olive","beige","cages","rames","repli","oasis","antan","ambre","gazon","noyes","munie","nylon","silex","mordu","brins","macon","girls","gains","decue","jouee","maris","cimes","batie","idole","meute","pekin","hutte","feter","zanzi","sauts","tulle","envol","garce","jures","pipes","polie","inoui","raser","errer","dater","epris","pogne","abris","gnose","abuse","genee","puise","rabat","gaite","ebene","arete","ahuri","fugue","crocs","bonds","viser","nouer","salee","mufle","canot","oscar","ivres","proue","alibi","colon","cohue","caste","opium","taxis","morue","laque","bahut","porcs","short","bazar","crepe","buter","radar","vodka","berce","blues","pairs","emeut","tueur","mater","dogme","virer","polka","loyer","toque","renes","perir","sites","ravie","dotee","cygne","vices","sympa","frigo","egout","butin","feint","menes","hisse","bruts","china","epees","visee","sabot","meule","givre","vante","noyee","douee","conne","epave","papes","sotte","gaine","choir","frole","vouee","melon","plain","ilots","piton","sures","fesse","naifs","figes","culot","serve","dicte","sobre","aride","epine","rater","cacha","menue","coran","pliee","pains","nains","vizir","flair","emane","cerfs","penal","tango","boche","putes","aises","vibre","couve","evade","usees","secte","salir","pardi","jauge","aidee","furie","puant","arene","cales","mures","payee","rente","noues","yacht","miche","exile","gerer","crues","verni","vanne","lacet","beche","hetre","verge","ouate","enfle","tater","verve","totem","reche","bocal","miles","harpe","roder","vises","osant","semer","empli","troue","nouee","ornes","tyran","suave","pater","grues","joncs","nanas","plies","vains","liant","layon","loyal","graal","tisse","renie","doter","tares","moisi","verne","rhume","radis","floue","rance","emise","trier","juche","tabou","appat","faste","magma","reagi","ledit","gages","fleau","squaw","sonde","jante","buche","venge","toles","blase","cabas","gemme","drape","fendu","renom","niais","ponte","combe","obeis","sahel","surin","mules","bossu","bagne","flash","motte","grief","bonus","capte","peter","canif","antre","phono","laves","lavee","decus","myope","phage","peurs","agees","ravis","serum","patch","bacon","pivot","argot","navre","cuits","trapu","sedan","hosto","green","clore","pores","volte","defie","tweed","panse","judas","heurt","viril","palir","elise","vecus","retro","bouee","aieul","parme","lunes","epure","natte","sucer","profs","fades","videe","rates","thune","elire","veaux","semee","preta","poupe","pesee","obese","hertz","luire","armer","khans","laids","aboli","usuel","gueux","degel","cidre","durci","legue","citee","scier","torts","velos","polis","medoc","salve","paien","tamis","poker","rases","solex","ribot","tomes","aleas","rougi","mache","impur","horde","dilue","nique","leste","ravir","patio","merle","limon","egide","baume","epate","promu","usant","paree","batis","jupon","store","etuve","benit","brame","masai","pavee","motos","voues","rafle","sains","piper","credo","agile","erige","ciels","punis","vimes","godet","palme","alias","athee","river","dedie","docks","cuirs","voles","volts","rieur","metis","enfui","subis","baver","stars","fermi","lepre","dandy","rebut","ferre","butee","matou","slave","vouer","louee","dires","rince","loque","serpe","jeton","coche","calot","bosco","louve","delta","cones","tapie","venin","odeon","mulet","galon","zebre","saxon","supra","cames","berne","vetir","murir","epier","caser","cousu","rales","javel","cires","jauni","rasee","mares","onces","natif","gigot","cocon","ruche","gonze","foies","pions","tuile","pilon","larve","atout","amers","agree","maths","primo","dupes","subie","benir","duite","mitan","viree","revee","preau","fumet","robot","omega","soles","delie","rotin","harde","happe","arome","tapes","taupe","visse","doser","bondi","silos","ecrin","crepi","beant","forum","abois","ecrou","bulbe","bouse","dechu","tanks","flous","campe","pulpe","patre","momie","magot","hamac","alpha","galet","scies","rayes","defis","revus","lacis","cedre","scout","gland","codex","emaux","tondu","joule","gater","tapin","neons","cuves","aubes","apero","ourse","obtus","boute","algue","philo","palpe","semes","garee","eboue","figer","garer","bicot","gonds","gites","fards","geles","gitan","orvet","tempo","hotte","raidi","jurys","benis","tabes","purge","punch","valve","nurse","verso","edite","chope","jacte","mimer","colas","rable","pepin","damne","preux","strie","guepe","carpe","otage","juron","demis","suive","votee","cirer","broye","clins","logos","carie","ceint","datee","bonde","anima","notee","encor","saule","minet","devin","stand","barde","lobes","chape","rogne","genet","otant","farci","ridee","moult","tuant","tenor","minus","raton","fiole","tetue","banni","devie","sioux","maton","ebats","piafs","rayee","muret","fissa","poilu","fagot","burin","round","blaze","diete","cacao","gallo","fripe","prout","pizza","vexer","orner","frire","caler","malus","meson","anses","soies","naval","mitre","cumul","prune","clebs","foins","redit","sinus","regal","racle","orgie","bidet","halle","parus","infra","suant","purin","ponce","opale","flirt","jarre","bique","hibou","gamma","penis","halls","kepis","capes","gatee","sangs","minou","zombi","bluff","bovin","rivet","strip","mafia","giron","mamie","rimes","radin","deplu","opter","laics","mages","ormes","benie","tende","pares","mande","raler","patee","benin","bison","moire","gicle","tract","orges","vagin","zeros","fanee","turbo","stele","spire","cheik","fanal","slips","tonus","exigu","ovule","tarin","denue","fanes","epice","petri","rayer","magne","toise","timon","patin","lotus","lieue","innee","gotha","nabis","niant","boude","frene","crins","calva","hatif","devis","cotte","carne","icone","velue","civet","clope","rotir","jatte","cabot","emois","gaies","punie","canoe","vison","nimbe","morse","heron","docte","haras","trust","gravi","aerer","elues","rotis","sevre","terni","truie","nonne","filon","rogue","video","ovins","urnes","moyeu","adage","campo","glass","elude","mites","clame","bauge","teste","telex","imper","serfs","sapes","vexee","ratee","moles","vocal","renne","joyau","cross","colin","pille","mimes","herse","tinte","teter","geler","value","tommy","bales","toast","risee","pitre","shoot","plant","mollo","folio","hampe","brome","beate","rebus","prone","geres","gober","steno","domes","logee","cabre","tarot","retif","gypse","break","group","mural","dinde","cossu","cornu","breme","bigot","alpin","legat","farde","geree","salis","ruser","flane","caoua","etals","rades","raids","ailee","paria","maint","impie","butor","ardue","gates","pries","clodo","tsars","ondee","lippe","party","fange","figue","liane","jabot","latte","sigle","opine","polir","moulu","tchao","huees","goure","calee","druze","recre","watts","torve","bazin","recto","bemol","naine","boues","eloxe","vasee","mugie","gogee","basis","bavee","agies","abale","duque","fuses","fohne","goger","jumpe","basir","geeke","amuir","skiee","skies","cicle","fitte","baque","buzze","alper","grale","bomee","slame","toler","likee","likes","liker","nifes","buque","etige","tague","rotee","sodee","sodes","looke","replu","valus","lyrer","tagge","rebue","mofle","moyee","moyes","camer","slice","lysee","lyses","sauri","rondi","nordi","megir","cotis","cotie","cotir","tarti","suble","tunee","tomee","tomer","tippe","tipee","tipes","tiper","taude","tubee","zouke","suife","mazee","mazes","siler","mazer","kifee","kifes","havee","kifer","snife","robee","rober","ralle","pucee","pucer","pifee","pifes","pifer","novee","nover","grese","tises","abrie","tiser","cheve","jerke","zoome","hacke","guipe","gluee","glues","gluer","miter","ruile","coxee","coxes","coxer","fluxe","yodle","jodle","ioule","enoue","emiee","emies","emier","elegi","eliee","elier","cante","azore","echer","jazze","terri","rugie","rouis","matie","henni","havis","havie","glati","fouis","clapi","catie","bruie","layee","pedze","crole","sexee","sexer","houee","froue","nuant","eluee","zonee","toree","tilte","terse","tatee","supee","saune","rupee","rupes","ripee","ripes","riote","reant","pises","pigee","pacse","lutee","lutes","occis","moyer","lapes","kiffe","jogge","jarte","ixant","ixees","ruper","hable","hiant","hiees","gueee","guees","grute","godee","fiees","faxee","epuce","entee","enlie","ecure","dolee","doles","redue","cules","cubee","crene","faxer","celes","capee","cambe","boxee","blute","bitee","bisee","bilee","badee","bades","axant","arise","abute","adire","ocrer","typer","acter","ioder","biler","bruir","lober","doper","elies","logue","luxee","faxes","moiti","dopee","mutee","deale","bipes","bipee","surfe","topes","aluni","vampe","zappe","zippe","bruis","biter","piger","eluer","bader","touer","tarer","seoir","rouir","rader","matir","luxer","lofer","houer","havir","gueer","culer","cuber","catir","biser","airer","haver","koter","tiger","agoni","caper","nocer","fluer","doler","liter","lobee","buser","akita","cezig","stuut","hutia","guars","veles","jeses","tayra","gouro","ankhs","bebop","doner","anoli","alois","dalit","chuts","sudra","deugs","ewees","infox","cashs","djeun","melas","astes","eduen","jacos","peves","alyas","velds","tabun","stemm","sosot","saron","riffe","rikio","repro","rbati","rayia","rachi","peuhl","pajot","onlay","oidie","nuton","nibar","mulla","morce","mamet","lysat","kenaf","ixage","hihan","gwoka","golee","diwan","chipo","blaff","bizou","bitue","bitis","benji","vracs","tosas","teves","tains","sufis","sates","ryals","ryads","praos","peufs","penes","omras","okras","misos","grafs","fiqhs","duses","doxas","couvs","clims","chebs","cebes","regur","bonif","dobok","perif","brans","riyal","pilaw","sarod","tagme","mamee","tufte","uvale","uvaux","plocs","obels","kefta","kavas","joice","ikats","dauws","dabas","alevi","bodys","sonie","potue","lehms","hutus","anjou","bicol","ubris","ribat","ineat","taxum","dolly","gwerz","hocas","loofa","chans","kylix","sprue","amoks","tolba","cenes","tatis","anniv","recup","jajas","meloe","bekee","bekes","chvas","wales","walis","tolus","nemes","nagas","mezes","lomos","hajes","hadjs","enols","fuero","coefs","ttoro","givry","ormet","mames","botos","bodhi","axoas","tical","yapok","barza","resas","yukos","sipos","manul","mikve","begus","recez","oumma","soman","segas","clark","morge","kabye","dogat","cetol","proxo","yamba","skuns","sames","lambi","molys","redif","canee","lerch","gaita","skons","anels","scoot","guibs","rabla","louma","pipos","edams","betee","cyons","onsen","marae","ozene","maset","zamus","kefie","tchan","oromo","pegot","fjeld","wifis","judds","plint","hogan","boide","bletz","nazca","salol","argas","cloup","tonie","brols","herve","pudus","feale","rioja","ndole","tokaj","xalam","bilie","sinoc","dhikr","peket","nakfa","aguis","maqam","ostos","eject","junky","osmie","pible","thete","tupie","imide","gothe","fitou","sueve","richi","rishi","moore","tutsi","saola","pepon","briks","bowal","silat","coirs","guete","jazzy","goral","dugon","vanda","kohol","bizet","raags","mneme","tamil","kenas","ramin","copla","gusse","talet","miler","angus","glial","glies","thiof","binon","noucs","bamba","gamer","doums","glams","biaxe","emyde","frake","hovas","dibis","dayak","bitus","ogams","diene","pekoe","axene","vireo","cueva","fedes","cakta","ixias","halon","jains","jaine","tonca","tonka","capet","cubis","atoca","apide","monel","mammo","loase","asana","luzin","graux","wenze","quado","lakhs","naias","kabig","kabic","vacoa","nashi","tobys","dache","azobe","duaux","diots","chiro","skeet","moais","sakti","boiar","enema","mezig","shiba","cajet","daira","bayle","potto","fixie","stamm","ileal","kreml","kales","hopak","gopak","osteo","asram","calos","gonio","trins","danio","cakti","veldt","eyras","insti","arhat","ursin","afars","afare","jumar","nebka","yakas","kache","mudra","moere","manas","tupis","nable","dorin","dixie","expat","felle","niolu","niolo","thali","banon","ovees","wenge","zoide","flenu","tiffe","watte","broum","shana","nizam","carva","ligie","donut","bittu","choco","gabie","noris","kiefs","gueze","lepte","flein","deust","khoin","tepui","takas","setar","cayon","sikhe","alems","velie","penty","scuta","didot","eleis","kyats","latif","fusel","intis","innue","monoi","bobun","birrs","ippon","gloup","amuie","amuis","kayac","plion","boete","dentu","beryx","behai","atemi","kivas","xieme","anite","adjar","hypne","raver","napee","visou","bisoc","ovide","dails","lapie","tsuba","goglu","botes","varve","decis","tifos","delot","mylar","shido","oxers","samos","samus","samis","bigor","kouba","adnee","adnes","socca","bibli","inlay","podal","fetas","lamba","dakin","altea","nemis","mafes","torys","soums","aisys","craux","craus","hokis","raias","maias","narse","soyas","jales","guyot","gilde","sonal","untel","degue","goron","maohi","dhoti","samie","gadje","palox","reiki","pieze","pinup","hocco","pakol","peule","maffe","rheto","manou","widia","pilet","riads","murol","maury","mique","myome","merls","sarts","zanis","jards","viets","vairs","urees","unifs","trics","taros","skifs","siums","seres","saies","rushs","peans","oings","nells","nafes","mocos","mayes","matus","majes","lones","kraks","khols","kawis","kadis","innus","imans","ilets","gords","gojis","fohns","etocs","emous","ejets","ecots","docus","dabes","cucus","crets","cobes","chtis","cedis","boges","beuhs","aspes","aracs","aculs","acais","tofus","buscs","ubacs","nonos","corbs","brous","ordos","aluns","velas","hasts","skats","araks","pians","yangs","gones","lests","astis","ajuts","tamas","adons","feujs","cobza","biwas","spets","manta","eluat","noese","noeme","reais","husky","gazou","physe","pedum","karen","zende","fassi","ovate","yuzus","fudge","agreg","orees","shogi","luffa","tween","assos","munda","plexi","lapse","junco","padel","diola","botox","vibro","hyphe","apiol","raita","softs","polje","ponor","wushu","nives","thiol","fados","triol","catas","taxol","donas","dolos","jasse","awele","awale","varon","vlogs","koras","rakis","waqfs","gleys","sylis","zikrs","polys","tacts","pogos","kinas","vatus","yasse","ragas","kelps","puros","tians","koans","erine","swags","kolas","obits","lepta","floes","pujas","iwans","neems","riels","sones","somas","teffs","fiscs","mooks","lidos","naans","gades","lassi","rajas","karts","gaurs","nerds","chums","maars","tines","umbos","gigas","sumos","goyim","phyla","glome","smogs","zouks","silts","taser","treks","nixes","slims","brens","lazes","scats","kerns","yorks","recks","slams","rifts","mulls","soaps","foots","stots","grips","swaps","jihad","prods","bomes","umami","ramen","gyros","prepa","abots","cobea","cobee","yassa","zazen","genal","epair","hoirs","hards","cirse","acheb","kotos","adrar","cycas","arols","arole","epite","boudi","diffa","quena","fonio","trabe","zumba","modif","kawai","panax","tauds","scone","gyrin","tchin","emoji","aldol","gaura","redox","ulnas","divis","famas","malis","ranis","tutos","baine","jubes","zorse","minis","nitro","dewar","bagel","swazi","narco","uvula","slurp","loris","bravi","fadet","pisco","lobis","nabla","toman","obele","penos","hutue","pites","doula","gasps","rumex","decas","yogas","sojas","loufs","bobby","khats","darce","cufat","zends","redac","kines","petre","oxime","detox","nival","potus","pives","biges","agnis","sanza","leges","xiang","marte","sambo","ideel","popah","skuas","punas","pikas","nomas","digon","mokos","lumas","kombu","hakas","tonfa","gluis","fluos","faros","tagua","lauze","addax","fieux","actus","erses","rebot","teufs","doufe","gyoza","aouts","lemur","torii","solea","irone","oleum","dinka","lompe","alule","reduc","velux","dojos","neres","waouh","viele","acmes","tuage","lyras","talcs","urdus","cajun","chile","velar","seran","tabar","zamak","goutu","nacho","shits","roufs","arecs","megas","conso","misse","tejus","decos","sakis","skais","tweet","rosti","rando","chahs","avals","octas","myase","cocas","bogey","ponch","qibla","qanun","burka","ratte","pechu","argan","perfs","chino","horas","demos","sotho","boost","sicav","fuels","drops","loses","satay","twins","tells","jerks","pitou","studs","chops","batch","buggy","soues","asple","univs","eland","thane","redie","boure","bours","reale","stats","jotas","stent","items","melia","norde","revif","quads","tjale","takin","prame","putti","dhole","yodel","padou","podia","epoxy","imine","scato","ables","yawls","caget","tacks","surfs","putts","opens","teddy","druse","hosts","farts","algal","cools","girly","unaux","unaus","haida","sexys","riste","ecsta","gnete","gasba","kafir","taleb","tenge","yeble","bento","fiote","gaspi","ketje","sadhu","durum","hijab","niqab","burqa","kyudo","stupa","farsi","niole","epart","graff","ponot","noyat","boudu","mayen","speos","spart","projo","radja","hakka","rumen","abdos","artel","sotch","amish","foxee","foxes","sirex","tolar","naira","salse","rapia","lumps","coyer","smolt","picon","cruor","besas","musli","nyala","halal","yeyes","elemi","halbi","pesse","jaina","cayes","muscs","serte","ocule","evohe","senau","sebka","sheol","esker","saite","tatie","saiga","saros","mungo","tchat","megis","appli","vibor","novae","fugus","gobie","strix","sarin","pelta","cameo","sedum","sedon","cerce","salpe","capas","alyte","cayeu","knack","raban","remix","joual","haram","podie","koppa","gugus","shama","kikis","ksars","kanas","matos","cagee","ksour","kanak","typon","ilien","ajour","burle","asins","blaps","dispo","padan","condo","garat","bugge","sphex","edito","jusee","irien","coxas","suber","iodle","kilim","syrah","fonge","donau","taraf","suris","brede","harle","riser","briee","banat","bacul","borin","assec","mauls","dials","cants","flows","posts","necks","mixes","lacks","scans","gores","stems","decks","whips","calls","rafts","fates","dunks","asses","purot","shots","stilb","pinne","palle","cocci","clays","acyle","wikis","wraps","spams","rands","racks","pucks","musts","kites","geeks","gurus","fangs","fakes","funks","exons","diols","doits","doucs","drams","clues","claps","cribs","cades","bores","borts","anils","aulas","acini","ecote","cagou","winch","berot","eches","echee","anees","loure","bibus","gadji","catis","djain","rayas","layes","bauds","crias","draft","durit","acore","gavot","houes","flues","voise","vinas","dosse","dolic","sitar","bards","taffe","kongo","xipho","sassa","morio","rappe","rague","radee","puche","petas","pegue","zarbs","crade","ogham","lapee","jutes","jonce","gyres","frita","pagre","futon","beuse","abers","pouet","natel","caion","bobet","esses","pager","kaons","entes","codon","biker","redus","flags","crema","codas","clave","chopa","chias","laris","graus","denar","kunas","cavas","busee","brase","blese","litas","pulas","bipas","bines","beles","badas","bokit","clito","actee","taino","elbot","murge","raval","ferle","taxon","pipit","zains","uvees","arobe","perms","binee","rucks","arsis","risse","welsh","abees","nucal","filao","iglou","oriel","suppo","coloc","dzeta","caria","flyer","nagee","burat","kekes","enfeu","mulch","osque","cacou","zarma","aiche","muons","huons","sirli","patas","oculi","macre","lette","indri","herpe","ganga","erbue","draye","accon","usnee","velet","velot","velte","venet","ligot","garis","belee","rabab","chore","recap","titus","kamis","pekan","vomer","issas","atele","anone","arzel","trike","tavel","bulot","tilla","jumel","avoye","suage","manon","gayal","tagal","ecoin","ecang","piers","fario","vagal","kagou","oeils","jayet","ulema","kerma","guili","combi","combo","carbo","groie","conde","gruon","bayou","cenne","buvee","tauon","zeine","zanni","dahir","fovea","algie","arsin","trapp","jaque","zloty","archi","gloss","aldin","atipa","bongo","hures","infos","jacks","katas","goals","keufs","keums","kicks","kilts","gifts","ladys","gents","lands","legos","gales","lieds","lifts","linos","lofts","lords","folks","flops","mamys","maxis","memos","exams","meufs","euros","mimis","nards","novas","dongs","papys","deals","dahus","pitas","procs","colts","rapts","rials","riens","rotos","capos","bytes","skins","brais","sonos","spics","books","bedes","tacos","taels","tempi","bahts","axels","tongs","touts","trips","yoyos","yuans","jojos","issus","hopis","pacas","sises","anaux","broue","julie","bluet","fuies","login","mimas","rotes","boxes","traie","tabla","rasas","tapas","proxy","bazou","toner","thyms","skate","safou","suide","canar","butos","bachi","maras","acons","bolus","feuil","semai","glosa","bolos","sabar","manat","rakus","blogs","juins","zarbi","gogol","shona","rital","sexto","dudit","kondo","trash","velle","zabre","hyper","bahai","debye","borie","codec","torrs","brion","sural","psoas","yetis","ataca","bimbo","impro","coyau","panga","kalis","ragga","ugnis","labri","nille","tanga","cheni","ladin","tondo","biper","uvule","kawas","rheme","kriss","chapo","mezze","zakat","tamia","mosan","light","baggy","inuit","halde","patou","rover","ratel","kriek","flets","xhosa","blini","mytho","perso","filmo","bindi","agada","rebeu","blast","bidou","limba","ordis","chili","fouge","bagad","rhino","zoile","xyste","vinee","vesou","urate","tutie","trole","trans","tourd","touee","tmese","tique","tetin","tette","targe","tapon","taled","tacet","suros","sucon","stras","sorbe","solin","sexte","sevir","serac","seime","saure","sanve","sajou","samit","salep","rosse","robre","rhumb","repic","rebec","ramie","quint","bemba","prele","pouah","pilau","petun","penil","pelte","palee","pagel","orobe","obier","nouet","neume","necro","napel","morve","mense","megie","looch","liure","levis","leude","labie","jugal","jocko","jarde","jacee","jalap","inule","ichor","huhau","grebe","gluau","gesse","gelif","gecko","funin","falot","eteuf","epois","ephod","elyme","elave","dulie","douci","dotal","dalot","crase","couvi","coxal","copal","cirre","cippe","chyme","cerat","caieu","biset","bacha","aunee","auget","augee","feral","chiac","feues","lahar","cyans","liman","pitta","joran","thais","thaie","armon","arack","apyre","aphte","annal","amome","alleu","airee","accot","accul","acare","athle","prase","patro","cheba","steps","incus","clamp","vigil","scope","ethos","lyric","shift","trend","topic","scare","fancy","panic","wedge","smurf","gluon","squat","corgi","lodge","claim","click","ninja","speck","schwa","shelf","vegan","navel","slash","pilot","pitch","crown","space","house","cloud","slide","trail","qubit","black","digit","salar","ramat","grana","embut","beure","venda","trigo","selva","mecha","dobra","casta","casco","achar","potet","morna","fjell","banne","spare","salat","lager","tilde","varna","hosta","check","vista","scopa","corpo","assai","glide","falle","alter","litra","lause","lapsi","yucca","blind","beset","afros","kanat","ixode","acras","tipis","kurus","bantu","kemia","wiski","sushi","proba","harka","frase","dashi","baile","antes","pombe","ndama","mamba","zamia","vapos","larix","fossa","focus","fanum","canna","arena","bigos","muscu","tacca","denti","panca","gamet","cipre","taxie","sango","pesto","belga","schah","fuste","vulgo","circa","xerus","kendo","intro","cupro","alien","carvi","aieux","amict","geole","gatte","ganja","drege","criss","crave","colee","coati","bassa","affin","adent","relai","sorgo","cegep","exema","fioul","ergol","amigo","drone","divot","pixel","mappe","lidar","relou","smalt","niets","hourd","brief","dirlo","daman","modal","iambe","turne","quick","after","leone","cadis","malon","oeuve","tanne","psore","parse","laite","oufti","dance","biome","degun","dreve","accro","nefle","padre","eagle","cedex","sweat","glume","exine","drupe","linga","corme","akene","dogon","prion","sheds","foils","guede","spume","choke","bulge","oriya","queer","tetra","mazot","farad","azeri","spitz","modem","quipo","wolof","stone","abaca","fatwa","kanji","manga","taxer","ramer","dorer","negus","rotor","chics","ebahi","doges","sorts","tunes","aeree","vigie","ronce","filin","calin","catch","hyene","glebe","etole","deche","dague","benne","fraye","huppe","muree","regir","impec","hebdo","snobs","copte","marks","oraux","pelee","pondu","rapee","maure","veule","seant","pavot","ogive","groom","badin","groin","ozone","snack","pampa","nanti","aigri","criee","boise","acres","galbe","loues","geint","munir","humer","julot","vroum","osons","feves","pulls","abats","boers","sense","pagne","ouste","navet","latex","duper","lupin","radon","muses","bruni","salie","parue","malte","tarir","ouche","marle","cocos","spins","tries","barda","paons","roide","renal","potin","nocif","lubie","cotre","beryl","label","emeri","camus","bribe","batte","carat","caduc","peses","tiare","etaye","egaye","cuver","miner","nicol","incas","skiff","porno","crans","senne","ocres","visas","prolo","abbes","dingo","zeste","steak","boxer","hello","meteo","massa","focal","fluet","catin","cagna","ferte","ruant","priee","fuser","gaver","mossi","fremi","maser","punks","manif","sabin","zazou","gnons","frets","raves","rusee","felee","relus","tarie","fiefs","banco","pegre","manne","cahot","benet","appas","lunch","tapir","basta","imago","grege","filme","saper","tatar","avive","plouf","blair","mambo","ogres","poufs","ourle","bacle","soute","chais","baffe","maori","vulve","pavie","peage","nabot","lange","bigre","baril","thons","tripe","laser","papas","emule","kraft","lapis","gnole","curee","resto","felin","axone","sapee","gibus","elime","arque","lires","cocus","veufs","frits","crame","chiot","serin","rapin","pubis","etron","broie","tutti","crawl","clash","wharf","speed","hydre","gigue","derme","fluor","anion","serti","cries","rivee","patir","murer","algol","bogie","caddy","minot","embue","liage","soule","mates","prote","corso","tison","spath","picot","obole","nasse","gibet","agres","laits","anode","kayak","ouies","iodee","ferir","compo","pagus","cador","motel","duels","dards","plots","seves","boucs","spots","rages","minee","viral","basal","boxon","suint","rabot","mucus","lucre","kyste","jalon","fonts","fifre","caban","bonze","gnome","diese","tibia","limes","miaou","duche","argus","gaves","galle","hales","faner","bayer","lebel","croco","rodez","pilee","micas","popes","souks","indus","prima","calle","taris","trime","audio","ardus","lusin","tetee","tapee","sosie","seing","ruolz","rouet","ortie","oisif","marli","lopin","filou","femur","media","score","aviso","frite","joute","celte","aloes","vicie","dodue","acere","agate","tesla","becte","gante","vires","peles","biffe","leses","sikhs","perme","kodak","boots","honni","laius","etuis","rixes","caids","bites","futes","darde","codee","tuees","titan","rotie","motus","alize","stick","lupus","glane","atone","aorte","begue","beauf","sepia","sauge","amine","butes","miser","peler","couic","veces","papou","cange","marcs","elfes","stase","recta","potee","krach","camee","tetus","surge","roque","garou","devot","lasso","griot","scoop","eclos","evase","reelu","lovee","cedes","boume","heler","rugir","reglo","murie","plouc","jeeps","moues","nenes","edits","cepes","suees","ferus","ploye","polar","lobby","sinue","ruade","ricin","paque","myrte","manes","irise","drive","banjo","halos","henne","bevue","pieta","ester","bitte","gavee","cedee","brime","mirer","lover","jerez","naves","crado","fetus","whigs","repus","saufs","paies","tonte","salin","pleur","noria","ceans","faims","aspic","arcon","prude","jeans","fucus","dolce","scalp","claie","cella","belon","agora","cigue","nonce","anale","grenu","denie","vexes","glose","halee","jaspe","fiant","jaser","curer","mugir","pyrex","uzbek","evide","rupin","gangs","brocs","sofas","reaux","zeles","avili","raque","dimes","vomis","emues","gnouf","gruau","venal","velin","tanin","shako","recel","recif","plaid","pilou","palan","otite","lutin","loche","goret","ecope","dogue","couac","aulne","ranch","relax","staff","block","herbu","guano","about","serbe","pinte","clape","rimer","palie","ninas","paseo","fatma","rodeo","cucul","duras","fritz","sebum","nodal","gongs","frocs","noels","bises","tonal","sabir","chips","pipis","mulot","lavis","ferie","mutin","fakir","colza","twist","macho","disco","grive","gouge","flint","dedit","cumin","croup","chenu","liard","gazes","chome","chipe","bigle","alese","coite","rapes","daube","carde","dosee","coder","roter","limer","hasch","mayas","pence","loess","gogos","loirs","caris","buses","teles","yards","velus","jappe","filee","furax","nabab","usite","tenon","patis","nasal","penny","cobra","lumen","mamma","rider","ducal","braye","axial","gable","balte","ecrue","juree","daron","tacot","pulse","echue","baser","saler","pamer","forer","bordj","torah","nouba","pentu","isbas","geais","galas","boums","bobos","bleds","zincs","innes","saurs","dodus","aeres","biote","aunes","lagon","clone","loden","trias","toton","sixte","poney","babil","gourd","badge","rifle","smash","ovine","lazzi","rabbi","midis","testa","hymen","brout","borax","amibe","crack","expie","gemis","rodee","sciee","brade","aboye","forci","muter","rosir","fader","haler","bitos","thora","maous","hadal","choye","smala","avine","etame","bleui","packs","paras","pesos","clips","taies","tutus","typos","vapes","repue","drues","liras","haves","diode","fraie","dixit","thuya","plebe","palis","nanan","narre","luron","linon","encan","sylve","taiga","coach","clean","swing","turco","atoll","ictus","fjord","cuvee","arroi","amble","coron","racee","epile","lesee","omise","mimee","decru","pamee","cille","triee","laper","lacer","fouir","benef","melba","pinot","dring","abeti","xeres","daims","dadas","solos","bibis","cotee","adule","rondo","trope","tolle","tenia","spore","sanie","audit","bafre","avenu","creek","trial","sauna","nervi","darse","crepu","aneth","nadir","whist","imbue","texto","aleph","maque","feles","rodes","petes","caque","epiee","osees","veler","piler","juter","goder","mogol","malts","kyrie","polio","sahib","gaize","gadin","rumba","futal","lopes","faons","pines","cacas","soifs","babas","trams","arums","accus","imbus","brava","pissa","rouee","ruees","avent","amphi","anier","teton","scion","rouan","recru","ragot","mante","lotte","canin","aubin","aryen","fatum","ratio","isard","huche","douve","barge","anche","vespa","licol","licou","banda","raout","basic","limbe","blemi","ficha","zoner","syrte","hatee","liner","finns","helio","tanka","ampli","mataf","hippy","merlu","hevea","luger","indic","grees","beurk","zigue","zaire","quota","lyres","etaux","coits","cines","buees","sodas","stucs","auges","zizis","beats","lotie","lotis","loves","proto","texan","alite","youpi","sarde","catho","tarse","ptose","perot","palot","motet","liron","lacte","ergot","bolet","shunt","locus","aster","puine","sonar","bisou","drill","bette","argol","furet","menon","zelee","ignee","autan","feces","probe","ahane","hates","frete","fores","dupee","muris","mutes","axees","rouer","leser","caner","raper","douro","hutin","huart","anars","macha","goths","adonc","tonic","fouta","ecolo","amide","garum","sulky","chiee","paddy","giton","limbo","muant","grils","locos","exils","mouts","orbes","rings","bocks","bomba","lises","nages","taons","fayot","toril","spahi","quine","phlox","pepie","ilion","futee","douar","debet","capon","cabri","ajonc","smart","secco","gente","velum","varia","fames","goulu","brize","amyle","links","panel","lotos","coing","ilote","mires","ganse","erode","fasce","madre","vaque","laces","obeie","glapi","casee","tance","vomie","coter","biner","skier","riper","jacot","vroom","lexis","atman","derny","houla","perre","mahdi","invar","lotta","litho","barye","monos","livet","neper","horst","creat","bures","pouic","desks","delco","dines","varus","parka","elide","mazet","dyade","lagan","kapok","salop","hotus","heres","guets","javas","kapos","lamas","lices","fifis","melos","diams","crics","rocks","biefs","tores","zozos","epies","larde","oints","relue","taree","amati","venta","houri","stere","agnel","atres","tille","ramas","pansu","nenni","menin","marri","laize","ileon","grime","gerce","felon","degat","sniff","noise","grill","largo","lippu","gille","cyclo","stout","estoc","fecal","exeat","epieu","deite","cosse","chyle","carex","bugle","betel","avers","angon","amure","famee","bogue","drink","palet","obvie","azyme","vines","terce","huant","cafte","lotir","douer","celer","molli","paner","roneo","laird","avens","hecto","bouif","aioli","karst","sisal","favus","hanse","fadas","barjo","itere","ranci","sexue","birbe","ripou","ajout","homes","heurs","grogs","luths","mokas","neves","oyats","czars","sires","slows","bonis","bills","titis","trios","yacks","zebus","lares","feaux","viles","ocree","ourdi","marra","mitee","canes","bisse","taxee","candi","urane","tatou","radie","queux","nones","ladre","fenil","fanon","dente","cagot","baste","alise","stuka","promo","azure","lento","haste","salam","spray","golem","gamay","drift","cepee","alene","tacle","hobby","argon","indue","sigma","datte","penne","liber","grume","kurde","roser","calte","tales","fetee","matee","medit","rimee","sucee","giter","viner","rager","gazer","feler","beler","tuber","perco","verif","flocs","orlon","alpax","renon","tokai","cauri","blitz","homos","kacha","devon","alios","amans","papet","turbe","furia","flush","ipeca","sprat","manse","mucor","varan","racer","asine","amman","dives","altos","gagas","obere","feria","clive","arase","pante","liche","vouge","imams","kakis","gnous","labos","lards","luxes","estes","edens","dynes","drags","denis","pumas","comas","sagas","cakes","blots","stops","suies","talas","tatas","bangs","toges","trocs","laies","surie","cocue","petee","etaie","ointe","panee","snobe","baves","curry","ognon","troll","karma","mixer","yeuse","voyer","tiret","sumac","ramee","rajah","ponge","pilaf","pigne","papal","nitre","murex","lemme","julep","junte","cague","lorry","mores","bloom","input","bingo","joker","redan","galla","molto","mezzo","manda","drain","infus","fessu","ecale","drave","boldo","begum","bagou","apnee","alvin","votif","haire","hadji","ferue","safre","khmer","hapax","vivat","bezef","gobes","dopes","lumes","noves","gaudi","niees","misee","feule","otees","epele","greee","pames","tiedi","vagir","gager","auner","layer","jodel","trona","jumbo","stups","kores","meats","hiles","twill","tokay","gyrus","ulves","taret","pepee","psitt","doris","aplat","craps","labre","cafre","indou","murin","boree","oflag","bolee","tacon","funes","fanas","apure","soyer","kefir","reces","huron","haiks","jades","gours","fracs","flips","flans","miels","muids","oueds","demes","peons","pepes","clics","saxes","saxos","bulls","booms","bides","totos","arias","tubas","vamps","ahans","rebat","pinta","emeus","panes","boula","bolas","bugne","lapon","pareo","ecule","suret","surah","sunna","supin","runes","rosat","raine","oyant","orpin","ondin","oille","nopal","mufti","liais","knout","hanap","flapi","djinn","datif","bedon","falun","adret","rough","carry","rasta","salto","regel","satis","ficus","cavum","abies","dinar","freux","fagne","cluse","cavee","bigue","basin","alose","peson","cilie","kappa","brick","octet","gruge","migre","nippe","saque","ronin","lyser","vaser","gonde","farte","surir","typee","toure","iodes","anise","limee","lacee","gobee","foree","echus","minci","drope","chies","roidi","rosis","rugis","calmi","talee","muser","luter","greer","damer","caver","bater","enter","rumbs","iftar","palas","medes","lycra","scull","loran","peuls","pisan","aryle","hazan","iroko","suifs","gombo","lurex","nomes","xylol","cipal","volis","angor","culex","intox","guppy","vetos","tatin","drums","baths","canut","mesas","asque","egeen","rhums","faena","gerle","saupe","becot","ibere","carme","muche","koine","escot","encas","fares","toura","derby","sutra","copra","gouda","maerl","grole","tsuga","cajou","clade","burne","cedat","harki","buron","kebab","andin","octal","merou","ecrus","bries","ignes","hunes","hases","harts","jougs","golfs","fulls","looks","luges","lulus","maies","muges","emirs","ovnis","colos","cokes","clams","sanas","saris","sidis","thugs","azurs","topos","toues","tracs","alfas","aedes","liges","flats","fadee","reacs","betas","argue","viola","etete","poile","gagee","fions","mouds","suces","acnes","nanar","halva","musse","esche","tramp","anons","vesse","uhlan","trema","tortu","spica","pools","sbire","sayon","pipee","pilum","penon","orant","oison","oblat","minon","macis","litee","ileus","gaude","ducat","chott","bubon","braie","atour","verin","agame","smack","mammy","freak","blush","panda","cheap","quiet","agave","rolle","salsa","gamba","selfs","batik","koala","scrub","payse","hoyau","goton","foene","empan","decan","darne","daine","culee","berme","batee","abyme","armet","almee","agape","xenon","toron","grene","ukase","comma","lives","putte","lifte","urger","rouie","rassi","ulule","supes","rible","lites","helee","ecime","humes","humee","piffe","heles","gemie","fouie","mixee","muees","mugis","damee","relui","pagee","chues","celee","brait","tosse","miree","toper","raire","paver","matis","poter","gesir","alpee","otons","sados","racho","ossus","guais","rashs","orins","bunas","makis","duals","tikis","vaire","palud","hemes","paxon","jezes","iboga","donax","igame","dural","avien","balan","fouee","ketch","freon","indol","niebe","cappa","miton","orles","vedas","tecks","pupes","cracs","cores","masos","duits","fiels","duale","iceux","apion","lochs","punts","kippa","conga","typha","tolee","epige","aprem","agglo","miros","lotes","tabor","efrit","pecan","besef","manip","remiz","putto","roofs","houka","slush","raphe","nieme","muron","yoles","jurat","sagum","oside","loser","krill","lamer","taler","calla","barns","sores","skips","douma","calao","venes","caude","tates","rotas","abras","radia","soufi","foehn","coppa","immun","roumi","aoute","kitch","letal","axile","bizut","labbe","igloo","rebab","haiku","cairn","urubu","fumat","trine","diapo","boson","igues","iules","goums","kiwis","lolos","frics","mails","expos","najas","embus","nepes","dykes","duces","ouzos","dodos","divas","papis","cymes","polos","cosys","rabes","ramis","cives","riffs","sakes","senes","shahs","shows","sidas","biles","teams","babys","turfs","tzars","viocs","agios","aghas","aches","yogis","zonas","zooms","nases","nazes","perie","souls","pluma","barri","oigne","poque","godes","gazee","moula","rosie","bates","tuner","sabra","vites","tuque","dicos","lieus","brook","blets","grays","okapi","quark","seide","picte","hayon","balsa","gadjo","alune","selve","lexie","provo","denim","vesce","tridi","torte","tolet","taure","taque","talle","tafia","stipe","sotie","sloop","sicle","seton","sasse","sagou","rocou","peton","pattu","paton","parsi","orque","opiat","omble","nolis","mulon","matte","lerot","lamie","jable","huard","event","etier","epode","endos","eider","edile","drome","defet","decri","ciron","cavet","cabus","buire","solen","rhodo","arien","apode","panty","funky","mound","trick","truck","flood","phone","panka","tomme","trots","kraal","ciste","sampi","sopor","palus","cutis","aspis","gaiac","fiord","crash","zonal","poise","ithos","hydne","helix","haret","guzla","goura","goule","gouet","glene","girie","gaupe","gambe","faine","espar","equin","duodi","ceste","caret","capre","calus","cagne","astic","aspre","ambon","aleze","agnat","agami","lieur","adobe","beurs","mango","volve","ossue","lunee","lamee","erres","ansee","brele","macle","geode","theta","ainou","quipu","hindi","slang","henry"]
      , Ia = "present"
      , Ma = "correct"
      , Oa = "absent";
    var Ra = {
        unknown: 0,
        absent: 1,
        present: 2,
        correct: 3
    };
    function $a(e, a) {
        var s = {};
        return e.forEach((function(e, t) {
            if (a[t])
                for (var o = 0; o < e.length; o++) {
                    var n = e[o]
                      , r = a[t][o]
                      , i = s[n] || "unknown";
                    Ra[r] > Ra[i] && (s[n] = r)
                }
        }
        )),
        s
    }
    function Pa(e) {
        var a = ["th", "st", "nd", "rd"]
          , s = e % 100;
        return e + (a[(s - 20) % 10] || a[s] || a[0])
    }
    var Ha = new Date(2021,5,19,0,0,0,0);
    function Na(e, a) {
        var s = new Date(e)
          , t = new Date(a).setHours(0, 0, 0, 0) - s.setHours(0, 0, 0, 0);
        return Math.round(t / 864e5)
    }
    function Da(e) {
        var a, s = Ga(e);
        return a = s % La.length,
        La[a]
    }
    function Ga(e) {
        return Na(Ha, e)
    }
    var Ba = "abcdefghijklmnopqrstuvwxyz"
      , Fa = [].concat(g(Ba.split("").slice(13)), g(Ba.split("").slice(0, 13)));
    function Wa(e) {
        for (var a = "", s = 0; s < e.length; s++) {
            var t = Ba.indexOf(e[s]);
            a += t >= 0 ? Fa[t] : "_"
        }
        return a
    }
    var Ya = "statistics"
      , Ja = "fail"
      , Ua = {
        currentStreak: 0,
        maxStreak: 0,
        guesses: n({
            1: 0,
            2: 0,
            3: 0,
            4: 0,
            5: 0,
            6: 0
        }, Ja, 0),
        winPercentage: 0,
        gamesPlayed: 0,
        gamesWon: 0,
        averageGuesses: 0
    };
    function Xa() {
        var e = window.localStorage.getItem(Ya) || JSON.stringify(Ua);
        return JSON.parse(e)
    }
    function Va(e) {
        var a = e.isWin
          , s = e.isStreak
          , t = e.numGuesses
          , o = Xa();
        a ? (o.guesses[t] += 1,
        s ? o.currentStreak += 1 : o.currentStreak = 1) : (o.currentStreak = 0,
        o.guesses.fail += 1),
        o.maxStreak = Math.max(o.currentStreak, o.maxStreak),
        o.gamesPlayed += 1,
        o.gamesWon += a ? 1 : 0,
        o.winPercentage = Math.round(o.gamesWon / o.gamesPlayed * 100),
        o.averageGuesses = Math.round(Object.entries(o.guesses).reduce((function(e, a) {
            var s = y(a, 2)
              , t = s[0]
              , o = s[1];
            return t !== Ja ? e += t * o : e
        }
        ), 0) / o.gamesWon),
        function(e) {
            window.localStorage.setItem(Ya, JSON.stringify(e))
        }(o)
    }
    var Ka = document.createElement("template");
    Ka.innerHTML = "\n  <style>\n  .toaster {\n    position: absolute;\n    top: 10%;\n    left: 50%;\n    transform: translate(-50%, 0);\n    pointer-events: none;\n    width: fit-content;\n  }\n  #game-toaster {\n    z-index: ".concat(1e3, ";\n  }\n  #system-toaster {\n    z-index: ").concat(4e3, ';\n  }\n\n  #game {\n    width: 100%;\n    max-width: var(--game-max-width);\n    margin: 0 auto;\n    height: 100%;\n    display: flex;\n    flex-direction: column;\n  }\n  header {\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    height: var(--header-height);\n    color: var(--color-tone-1);\n    border-bottom: 1px solid var(--color-tone-4);\n  }\n  header .title {\n    font-weight: 700;\n    font-size: 36px;\n    letter-spacing: 0.2rem;\n    text-transform: uppercase;\n    text-align: center;\n    position: absolute;\n    left: 0;\n    right: 0;\n    pointer-events: none;\n  }\n\n  @media (max-width: 360px) {\n    header .title {\n      font-size: 22px;\n      letter-spacing: 0.1rem;\n    }\n  }\n\n  #board-container {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    flex-grow: 1;\n    overflow: hidden;\n  }\n  #board {\n    display: grid;\n    grid-template-rows: repeat(6, 1fr);\n    grid-gap: 5px;\n    padding:10px;\n    box-sizing: border-box;\n  }\n  button.icon {\n    background: none;\n    border: none;\n    cursor: pointer;\n    padding: 0 4px;\n  }\n\n  #debug-tools {\n    position: absolute;\n    bottom: 0;\n  }\n\n  </style>\n  <game-theme-manager>\n    <div id="game">\n      <header>\n        <div class="menu">\n          <button id="help-button" class="icon" aria-label="help">\n            <game-icon icon="help"></game-icon>\n          </button>\n        <button id="archive-button" class="icon" aria-label="archive">\n            <game-icon icon="archive"></game-icon>\n          </button>\n        </div>\n        <div class="title">\n         MODUKEBEC\n        </div>\n        <div class="menu">\n          <button id="statistics-button" class="icon" aria-label="statistics">\n            <game-icon icon="statistics"></game-icon>\n          </button>\n          <button id="settings-button" class="icon" aria-label="settings">\n            <game-icon icon="settings"></game-icon>\n          </button>\n        </div>\n      </header>\n        <div style="display: flex;justify-content: space-evenly;align-items: center;padding: 10px 0;"><button id="today" onclick="window.todaysWord()">Mot du jour</button><div id="puzzle-number-title" style="color: var(--color-tone-1);"></div><button id="randomize" onclick="window.randomWord()">Mot aléatoire</button></div>\n     <div id="board-container">\n          <div id="board"></div>\n        </div>\n        <game-keyboard></game-keyboard>\n        <game-modal></game-modal>\n        <game-page></game-page>\n        <div class="toaster" id="game-toaster"></div>\n        <div class="toaster" id="system-toaster"></div>\n    </div>\n  </game-theme-manager>\n  <div id="debug-tools"></div>\n');
    var Qa = document.createElement("template");
    Qa.innerHTML = '\n<button id="reveal">reveal</button>\n<button id="shake">shake</button>\n<button id="bounce">bounce</button>\n<button id="toast">toast</button>\n<button id="modal">modal</button>\n';
    var Za = "IN_PROGRESS"
      , es = "WIN"
      , as = "FAIL"
      , ss = [
        "Un coup de chance",
        "Fantastique",
        "Bravo",
        "Bien deviné",
        "Pas si pire",
        "Passé proche"
      ]
      , ts = function(e) {
        r(t, e);
        var a = h(t);
        function t() {
            var e;
            s(this, t),
            n(p(e = a.call(this)), "tileIndex", 0),
            n(p(e), "rowIndex", 0),
            n(p(e), "solution", void 0),
            n(p(e), "boardState", void 0),
            n(p(e), "evaluations", void 0),
            n(p(e), "canInput", !0),
            n(p(e), "gameStatus", Za),
            n(p(e), "letterEvaluations", {}),
            n(p(e), "$board", void 0),
            n(p(e), "$keyboard", void 0),
            n(p(e), "$game", void 0),
            n(p(e), "today", void 0),
            n(p(e), "lastPlayedTs", void 0),
            n(p(e), "lastCompletedTs", void 0),
            n(p(e), "hardMode", void 0),
            n(p(e), "dayOffset", void 0),
            e.attachShadow({
                mode: "open"
            }),
            e.today = new Date;
            var currIndex = eval(solutionLookupFn)(e.today)
            var randomize = setRandomizeLocalStorage()
            e.today.setDate(e.today.getDate() + randomize.current - currIndex)
            var o = za();
            return e.lastPlayedTs = o.lastPlayedTs,
            !e.lastPlayedTs || (Na(new Date(e.lastPlayedTs), e.today) >= 1 && o.solution !== eval(solutionLookupByDate)(e.today)) ? (e.boardState = new Array(6).fill(""),
            e.evaluations = new Array(6).fill(null),
            e.solution = Da(e.today),
            e.dayOffset = Ga(e.today),
            e.lastCompletedTs = o.lastCompletedTs,
            e.hardMode = o.hardMode,
            e.restoringFromLocalStorage = !1,
            ja({
                rowIndex: e.rowIndex,
                boardState: e.boardState,
                evaluations: e.evaluations,
                solution: e.solution,
                gameStatus: e.gameStatus
            }),
            Ca("event", "level_start", {
                level_name: Wa(e.solution)
            })) : (e.boardState = o.boardState,
            e.evaluations = o.evaluations,
            e.rowIndex = o.rowIndex,
            e.solution = o.solution,
            e.dayOffset = Ga(e.today),
            e.letterEvaluations = $a(e.boardState, e.evaluations),
            e.gameStatus = o.gameStatus,
            e.lastCompletedTs = o.lastCompletedTs,
            e.hardMode = o.hardMode,
            e.gameStatus !== Za && (e.canInput = !1),
            e.restoringFromLocalStorage = !0),
            e
        }
        return o(t, [{
            key: "evaluateRow",
            value: function() {
                if (5 === this.tileIndex && !(this.rowIndex >= 6)) {
                    var e, a = this.$board.querySelectorAll("game-row")[this.rowIndex], s = this.boardState[this.rowIndex];
                    if (e = s,
                    !Ta.includes(e) && !La.includes(e))
                        return a.setAttribute("invalid", ""),
                        void this.addToast("Not in word list");
                    if (this.hardMode) {
                        var t = function(e, a, s) {
                            if (!e || !a || !s)
                                return {
                                    validGuess: !0
                                };
                            for (var t = 0; t < s.length; t++)
                                if (s[t] === Ma && e[t] !== a[t])
                                    return {
                                        validGuess: !1,
                                        errorMessage: "".concat(Pa(t + 1), " letter must be ").concat(a[t].toUpperCase())
                                    };
                            for (var o = {}, n = 0; n < s.length; n++)
                                [Ma, Ia].includes(s[n]) && (o[a[n]] ? o[a[n]] += 1 : o[a[n]] = 1);
                            var r = e.split("").reduce((function(e, a) {
                                return e[a] ? e[a] += 1 : e[a] = 1,
                                e
                            }
                            ), {});
                            for (var i in o)
                                if ((r[i] || 0) < o[i])
                                    return {
                                        validGuess: !1,
                                        errorMessage: "Guess must contain ".concat(i.toUpperCase())
                                    };
                            return {
                                validGuess: !0
                            }
                        }(s, this.boardState[this.rowIndex - 1], this.evaluations[this.rowIndex - 1])
                          , o = t.validGuess
                          , n = t.errorMessage;
                        if (!o)
                            return a.setAttribute("invalid", ""),
                            void this.addToast(n || "Not valid in hard mode")
                    }
                    var r = function(e, a) {
                        for (var s = Array(a.length).fill(Oa), t = Array(a.length).fill(!0), o = Array(a.length).fill(!0), n = 0; n < e.length; n++)
                            e[n] === a[n] && o[n] && (s[n] = Ma,
                            t[n] = !1,
                            o[n] = !1);
                        for (var r = 0; r < e.length; r++) {
                            var i = e[r];
                            if (t[r])
                                for (var l = 0; l < a.length; l++) {
                                    var d = a[l];
                                    if (o[l] && i === d) {
                                        s[r] = Ia,
                                        o[l] = !1;
                                        break
                                    }
                                }
                        }
                        return s
                    }(s, this.solution);
                    this.evaluations[this.rowIndex] = r,
                    this.letterEvaluations = $a(this.boardState, this.evaluations),
                    a.evaluation = this.evaluations[this.rowIndex],
                    this.rowIndex += 1;
                    var i = this.rowIndex >= 6
                      , l = r.every((function(e) {
                        return "correct" === e
                    }
                    ));
                    if (i || l)
                        Va({
                            isWin: l,
                            isStreak: !!(l && setRandomizeLocalStorage().indices[eval(solutionArray).indexOf(this.solution)] !== 1),
                            numGuesses: this.rowIndex
                        }),
                        ja({
                            lastCompletedTs: Date.now()
                        }),
                        this.gameStatus = l ? es : as,
                        Ca("event", "level_end", {
                            level_name: Wa(this.solution),
                            num_guesses: this.rowIndex,
                            success: l
                        }),
                        endCallback(this.solution);
                    this.tileIndex = 0,
                    this.canInput = !1,
                    ja({
                        rowIndex: this.rowIndex,
                        boardState: this.boardState,
                        evaluations: this.evaluations,
                        solution: this.solution,
                        gameStatus: this.gameStatus,
                        lastPlayedTs: Date.now()
                    })
                }
            }
        }, {
            key: "addLetter",
            value: function(e) {
                this.gameStatus === Za && (this.canInput && (this.tileIndex >= 5 || (this.boardState[this.rowIndex] += e,
                this.$board.querySelectorAll("game-row")[this.rowIndex].setAttribute("letters", this.boardState[this.rowIndex]),
                this.tileIndex += 1)))
            }
        }, {
            key: "removeLetter",
            value: function() {
                if (this.gameStatus === Za && this.canInput && !(this.tileIndex <= 0)) {
                    this.boardState[this.rowIndex] = this.boardState[this.rowIndex].slice(0, this.boardState[this.rowIndex].length - 1);
                    var e = this.$board.querySelectorAll("game-row")[this.rowIndex];
                    this.boardState[this.rowIndex] ? e.setAttribute("letters", this.boardState[this.rowIndex]) : e.removeAttribute("letters"),
                    e.removeAttribute("invalid"),
                    this.tileIndex -= 1
                }
            }
        }, {
            key: "submitGuess",
            value: function() {
                if (this.gameStatus === Za && this.canInput) {
                    if (5 !== this.tileIndex)
                        return this.$board.querySelectorAll("game-row")[this.rowIndex].setAttribute("invalid", ""),
                        void this.addToast("Not enough letters");
                    this.evaluateRow()
                }
            }
        }, {
            key: "addToast",
            value: function(e, a) {
                var s = arguments.length > 2 && void 0 !== arguments[2] && arguments[2]
                  , t = document.createElement("game-toast");
                t.setAttribute("text", e),
                a && t.setAttribute("duration", a),
                s ? this.shadowRoot.querySelector("#system-toaster").prepend(t) : this.shadowRoot.querySelector("#game-toaster").prepend(t)
            }
        }, {
            key: "sizeBoard",
            value: function() {
                var e = this.shadowRoot.querySelector("#board-container")
                  , a = Math.min(Math.floor(e.clientHeight * (5 / 6)), 350)
                  , s = 6 * Math.floor(a / 5);
                this.$board.style.width = "".concat(a, "px"),
                this.$board.style.height = "".concat(s, "px")
            }
        }, {
            key: "showStatsModal",
            value: function() {
                var e = this.$game.querySelector("game-modal")
                  , a = document.createElement("game-stats");
                this.gameStatus === es && this.rowIndex <= 6 && a.setAttribute("highlight-guess", this.rowIndex),
                a.gameApp = this,
                e.appendChild(a),
                e.setAttribute("open", "")
            }
        }, {
            key: "showHelpModal",
            value: function() {
                var e = this.$game.querySelector("game-modal");
                e.appendChild(document.createElement("game-help")),
                e.setAttribute("open", "")
            }
        }, {
            key: "connectedCallback",
            value: function() {
                var e = this;
                this.shadowRoot.appendChild(Ka.content.cloneNode(!0)),
                this.$game = this.shadowRoot.querySelector("#game"),
                this.$board = this.shadowRoot.querySelector("#board"),
                this.$keyboard = this.shadowRoot.querySelector("game-keyboard"),
                this.sizeBoard(),
                this.lastPlayedTs || setTimeout((function() {
                    return e.showHelpModal()
                }
                ), 100);
                for (var a = 0; a < 6; a++) {
                    var s = document.createElement("game-row");
                    s.setAttribute("letters", this.boardState[a]),
                    s.setAttribute("length", 5),
                    this.evaluations[a] && (s.evaluation = this.evaluations[a]),
                    this.$board.appendChild(s)
                }
                this.$game.addEventListener("game-key-press", (function(a) {
                    var s = a.detail.key;
                    "←" === s || "Backspace" === s ? e.removeLetter() : "↵" === s || "Enter" === s ? e.submitGuess() : Ba.includes(s.toLowerCase()) && e.addLetter(s.toLowerCase())
                }
                )),
                this.$game.addEventListener("game-last-tile-revealed-in-row", (function(a) {
                    e.$keyboard.letterEvaluations = e.letterEvaluations,
                    e.rowIndex < 6 && (e.canInput = !0);
                    var s = e.$board.querySelectorAll("game-row")[e.rowIndex - 1];
                    (a.path || a.composedPath && a.composedPath()).includes(s) && ([es, as].includes(e.gameStatus) && (e.restoringFromLocalStorage ? e.showStatsModal() : (e.gameStatus === es && (s.setAttribute("win", ""),
                    e.addToast(ss[e.rowIndex - 1], 2e3)),
                    e.gameStatus === as && e.addToast(e.solution.toUpperCase(), 1 / 0),
                    setTimeout((function() {
                        e.showStatsModal()
                    }
                    ), 2500))),
                    e.restoringFromLocalStorage = !1)
                }
                )),
                this.shadowRoot.addEventListener("game-setting-change", (function(a) {
                    var s = a.detail
                      , t = s.name
                      , o = s.checked
                      , n = s.disabled;
                    switch (t) {
                    case "hard-mode":
                        return void (n ? e.addToast("Hard mode can only be enabled at the start of a round", 1500, !0) : (e.hardMode = o,
                        ja({
                            hardMode: o
                        })))
                    }
                }
                )),
                this.shadowRoot.getElementById("settings-button").addEventListener("click", (function(a) {
                    var s = e.$game.querySelector("game-page")
                      , t = document.createTextNode("Paramètres");
                    s.appendChild(t);
                    var o = document.createElement("game-settings");
                    o.setAttribute("slot", "content"),
                    o.gameApp = e,
                    s.appendChild(o),
                    s.setAttribute("open", "")
                }
                )),
                this.shadowRoot.getElementById("help-button").addEventListener("click", (function(a) {
                    var s = e.$game.querySelector("game-page")
                      , t = document.createTextNode("Instructions");
                    s.appendChild(t);
                    var o = document.createElement("game-help");
                    o.setAttribute("page", ""),
                    o.setAttribute("slot", "content"),
                    s.appendChild(o),
                    s.setAttribute("open", "")
                }
                )),
                this.shadowRoot.getElementById("statistics-button").addEventListener("click", (function(a) {
                    e.showStatsModal()
                }
                )),
                this.shadowRoot.querySelector("#puzzle-number-title").textContent = "#".concat(eval(solutionLookupFn)(e.today)),
                this.shadowRoot.getElementById("archive-button").addEventListener("click", (function(a) {
                    var today = new Date
                    var randomize = setRandomizeLocalStorage()
                    var todaysPuzzle = eval(solutionLookupFn)(today)
                    var s = e.$game.querySelector("game-page")
                      , t = document.createTextNode("MODUKEBEC passé");
                    s.appendChild(t);
                    var o = document.createElement("div");
                    o.setAttribute("id", "archive-list")
                    o.setAttribute("page", "")
                    o.setAttribute("slot", "content")
                    o.setAttribute("style", "padding:0 5px;");
                    
                    var p = document.createElement("div")
                    p.innerHTML = `
                    <style>
                    p {
                        font-size: 14px;
                        color: var(--color-tone-1);
                    }
                    </style>
                        <p>Rejouer un <strong>MODUKEBEC</strong> passé.</p>
                        <p>Les mots complétés seront marqués d'un ✅.</p>
                    `
                    o.appendChild(p)

                    var ul = document.createElement("ul")
                    ul.style = `
                        list-style: none;
                        text-align: center;
                        padding: 0;
                    `
                    var innerListHtml = `<style>
                        li:hover, li:active{
                            background-color: var(--color-tone-5)
                        }
                    </style>`
                    for (var i=todaysPuzzle-1; i>=0; i--) {
                        var successEmoji = randomize.indices[i] === 1 ? '✅' : ' '
                        var puzzleDate = new Date(today)
                        puzzleDate.setDate(puzzleDate.getDate() - todaysPuzzle + i)

                        innerListHtml += `
                            <li
                                style="display:flex; justify-content:space-evenly; align-items:center; padding:15px 0; cursor:pointer; border-bottom:1px grey solid;"
                                onclick="window.todaysWord(${i})"
                            >
                            <div style="width:30px;">${i}</div><div style="flex-grow:1;">${puzzleDate.toLocaleDateString('fr-FR', { weekday:"short", year:"numeric", month:"short", day:"numeric"})}</div><div style="width:27px;">${successEmoji}</div>
                            </li>
                        `
                    }
                    ul.innerHTML = innerListHtml

                    o.appendChild(ul),
                    s.appendChild(o),
                    s.setAttribute("open", "")
                }
                )),
                window.addEventListener("resize", this.sizeBoard.bind(this))
            }
        }, {
            key: "disconnectedCallback",
            value: function() {}
        }, {
            key: "debugTools",
            value: function() {
                var e = this;
                this.shadowRoot.getElementById("debug-tools").appendChild(Qa.content.cloneNode(!0)),
                this.shadowRoot.getElementById("toast").addEventListener("click", (function(a) {
                    e.addToast("hello world")
                }
                )),
                this.shadowRoot.getElementById("modal").addEventListener("click", (function(a) {
                    var s = e.$game.querySelector("game-modal");
                    s.textContent = "hello plz",
                    s.setAttribute("open", "")
                }
                )),
                this.shadowRoot.getElementById("reveal").addEventListener("click", (function() {
                    e.evaluateRow()
                }
                )),
                this.shadowRoot.getElementById("shake").addEventListener("click", (function() {
                    e.$board.querySelectorAll("game-row")[e.rowIndex].setAttribute("invalid", "")
                }
                )),
                this.shadowRoot.getElementById("bounce").addEventListener("click", (function() {
                    var a = e.$board.querySelectorAll("game-row")[e.rowIndex - 1];
                    "" === a.getAttribute("win") ? a.removeAttribute("win") : a.setAttribute("win", "")
                }
                ))
            }
        }]),
        t
    }(c(HTMLElement));
    customElements.define("game-app", ts);
    var os = document.createElement("template");
    os.innerHTML = "\n  <style>\n    .overlay {\n      display: none;\n      position: absolute;\n      width: 100%;\n      height: 100%;\n      top: 0;\n      left: 0;\n      justify-content: center;\n      align-items: center;\n      background-color: var(--opacity-50);\n      z-index: ".concat(3e3, ';\n    }\n\n    :host([open]) .overlay {\n      display: flex;\n    }\n\n    .content {\n      position: relative;\n      border-radius: 8px;\n      border: 1px solid var(--color-tone-6);\n      background-color: var(--modal-content-bg);\n      color: var(--color-tone-1);\n      box-shadow: 0 4px 23px 0 rgba(0, 0, 0, 0.2);\n      width: 90%;\n      max-height: 90%;\n      overflow-y: auto;\n      animation: SlideIn 200ms;\n      max-width: var(--game-max-width);\n      padding: 16px;\n      box-sizing: border-box;\n    }\n\n    .content.closing {\n      animation: SlideOut 200ms;\n    }\n\n    .close-icon {\n      width: 24px;\n      height: 24px;\n      position: absolute;\n      top: 16px;\n      right: 16px;\n    }\n\n    game-icon {\n      position: fixed;\n      user-select: none;\n      cursor: pointer;\n    }\n\n    @keyframes SlideIn {\n      0% {\n        transform: translateY(30px);\n        opacity: 0;\n      }\n      100% {\n        transform: translateY(0px);\n        opacity: 1;\n      }\n    }\n    @keyframes SlideOut {\n      0% {\n        transform: translateY(0px);\n        opacity: 1;\n      }\n      90% {\n        opacity: 0;\n      }\n      100% {\n        opacity: 0;\n        transform: translateY(60px);\n      }\n    }\n  </style>\n  <div class="overlay">\n    <div class="content">\n      <slot></slot>\n      <div class="close-icon">\n        <game-icon icon="close"></game-icon>\n      </div>\n    </div>\n  </div>\n');
    var ns = function(e) {
        r(t, e);
        var a = h(t);
        function t() {
            var e;
            return s(this, t),
            (e = a.call(this)).attachShadow({
                mode: "open"
            }),
            e
        }
        return o(t, [{
            key: "connectedCallback",
            value: function() {
                var e = this;
                this.shadowRoot.appendChild(os.content.cloneNode(!0)),
                this.addEventListener("click", (function(a) {
                    e.shadowRoot.querySelector(".content").classList.add("closing")
                }
                )),
                this.shadowRoot.addEventListener("animationend", (function(a) {
                    "SlideOut" === a.animationName && (e.shadowRoot.querySelector(".content").classList.remove("closing"),
                    e.removeChild(e.firstChild),
                    e.removeAttribute("open"))
                }
                ))
            }
        }]),
        t
    }(c(HTMLElement));
    customElements.define("game-modal", ns);
    var rs = document.createElement("template");
    rs.innerHTML = "\n  <style>\n  :host {\n    height: var(--keyboard-height);\n  }\n  #keyboard {\n    margin: 0 8px;\n    user-select: none;\n  }\n  \n  .row {\n    display: flex;\n    width: 100%;\n    margin: 0 auto 8px;\n    /* https://stackoverflow.com/questions/46167604/ios-html-disable-double-tap-to-zoom */\n    touch-action: manipulation;\n  }\n  \n  button {\n    font-family: inherit;\n    font-weight: bold;\n    border: 0;\n    padding: 0;\n    margin: 0 6px 0 0;\n    height: 58px;\n    border-radius: 4px;\n    cursor: pointer;\n    user-select: none;\n    background-color: var(--key-bg);\n    color: var(--key-text-color);\n    flex: 1;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    text-transform: uppercase;\n    -webkit-tap-highlight-color: rgba(0,0,0,0.3);\n  }\n\n  button:focus {\n    outline: none;\n  }\n\n  button.fade {\n    transition: background-color 0.1s ease, color 0.1s ease;\n  }\n  \n  button:last-of-type {\n    margin: 0;\n  }\n  \n  .half {\n    flex: 0.5;\n  }\n  \n  .one {\n    flex: 1;\n  }\n\n  .one-and-a-half {\n    flex: 1.5;\n    font-size: 12px;\n  }\n  \n  .two {\n    flex: 2;\n  }\n\n  button[data-state='correct'] {\n    background-color: var(--key-bg-correct);\n    color: var(--key-evaluated-text-color);\n  }\n\n  button[data-state='present'] {\n    background-color: var(--key-bg-present);\n    color: var(--key-evaluated-text-color);\n  }\n\n  button[data-state='absent'] {\n    background-color: var(--key-bg-absent);\n    color: var(--key-evaluated-text-color);\n  }\n\n  </style>\n  <div id=\"keyboard\"></div>\n";
    var is = document.createElement("template");
    is.innerHTML = "\n  <button>key</button>\n";
    var ls = document.createElement("template");
    ls.innerHTML = '\n  <div class="spacer"></div>\n';
    var ds = [["q", "w", "e", "r", "t", "y", "u", "i", "o", "p"], ["-", "a", "s", "d", "f", "g", "h", "j", "k", "l", "-"], ["↵", "z", "x", "c", "v", "b", "n", "m", "←"]]
      , us = function(e) {
        r(t, e);
        var a = h(t);
        function t() {
            var e;
            return s(this, t),
            n(p(e = a.call(this)), "_letterEvaluations", {}),
            e.attachShadow({
                mode: "open"
            }),
            e
        }
        return o(t, [{
            key: "letterEvaluations",
            set: function(e) {
                this._letterEvaluations = e,
                this._render()
            }
        }, {
            key: "dispatchKeyPressEvent",
            value: function(e) {
                this.dispatchEvent(new CustomEvent("game-key-press",{
                    bubbles: !0,
                    composed: !0,
                    detail: {
                        key: e
                    }
                }))
            }
        }, {
            key: "connectedCallback",
            value: function() {
                var e = this;
                this.shadowRoot.appendChild(rs.content.cloneNode(!0)),
                this.$keyboard = this.shadowRoot.getElementById("keyboard"),
                this.$keyboard.addEventListener("click", (function(a) {
                    var s = a.target.closest("button");
                    s && e.$keyboard.contains(s) && e.dispatchKeyPressEvent(s.dataset.key)
                }
                )),
                window.addEventListener("keydown", (function(a) {
                    if (!0 !== a.repeat) {
                        var s = a.key
                          , t = a.metaKey
                          , o = a.ctrlKey;
                        t || o || (Ba.includes(s.toLowerCase()) || "Backspace" === s || "Enter" === s) && e.dispatchKeyPressEvent(s)
                    }
                }
                )),
                this.$keyboard.addEventListener("transitionend", (function(a) {
                    var s = a.target.closest("button");
                    s && e.$keyboard.contains(s) && s.classList.remove("fade")
                }
                )),
                ds.forEach((function(a) {
                    var s = document.createElement("div");
                    s.classList.add("row"),
                    a.forEach((function(e) {
                        var a;
                        if (e >= "a" && e <= "z" || "←" === e || "↵" === e) {
                            if ((a = is.content.cloneNode(!0).firstElementChild).dataset.key = e,
                            a.textContent = e,
                            "←" === e) {
                                var t = document.createElement("game-icon");
                                t.setAttribute("icon", "backspace"),
                                a.textContent = "",
                                a.appendChild(t),
                                a.classList.add("one-and-a-half")
                            }
                            "↵" == e && (a.textContent = "entrée",
                            a.classList.add("one-and-a-half"))
                        } else
                            (a = ls.content.cloneNode(!0).firstElementChild).classList.add(1 === e.length ? "half" : "one");
                        s.appendChild(a)
                    }
                    )),
                    e.$keyboard.appendChild(s)
                }
                )),
                this._render()
            }
        }, {
            key: "_render",
            value: function() {
                for (var e in this._letterEvaluations) {
                    var a = this.$keyboard.querySelector('[data-key="'.concat(e, '"]'));
                    a.dataset.state = this._letterEvaluations[e],
                    a.classList.add("fade")
                }
            }
        }]),
        t
    }(c(HTMLElement));
    /*! *****************************************************************************
  Copyright (c) Microsoft Corporation.

  Permission to use, copy, modify, and/or distribute this software for any
  purpose with or without fee is hereby granted.

  THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
  REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
  AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
  INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
  LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
  OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
  PERFORMANCE OF THIS SOFTWARE.
  ***************************************************************************** */
    function cs(e, a, s, t) {
        return new (s || (s = Promise))((function(o, n) {
            function r(e) {
                try {
                    l(t.next(e))
                } catch (e) {
                    n(e)
                }
            }
            function i(e) {
                try {
                    l(t.throw(e))
                } catch (e) {
                    n(e)
                }
            }
            function l(e) {
                var a;
                e.done ? o(e.value) : (a = e.value,
                a instanceof s ? a : new s((function(e) {
                    e(a)
                }
                ))).then(r, i)
            }
            l((t = t.apply(e, a || [])).next())
        }
        ))
    }
    function ps(e, a) {
        var s, t, o, n, r = {
            label: 0,
            sent: function() {
                if (1 & o[0])
                    throw o[1];
                return o[1]
            },
            trys: [],
            ops: []
        };
        return n = {
            next: i(0),
            throw: i(1),
            return: i(2)
        },
        "function" == typeof Symbol && (n[Symbol.iterator] = function() {
            return this
        }
        ),
        n;
        function i(n) {
            return function(i) {
                return function(n) {
                    if (s)
                        throw new TypeError("Generator is already executing.");
                    for (; r; )
                        try {
                            if (s = 1,
                            t && (o = 2 & n[0] ? t.return : n[0] ? t.throw || ((o = t.return) && o.call(t),
                            0) : t.next) && !(o = o.call(t, n[1])).done)
                                return o;
                            switch (t = 0,
                            o && (n = [2 & n[0], o.value]),
                            n[0]) {
                            case 0:
                            case 1:
                                o = n;
                                break;
                            case 4:
                                return r.label++,
                                {
                                    value: n[1],
                                    done: !1
                                };
                            case 5:
                                r.label++,
                                t = n[1],
                                n = [0];
                                continue;
                            case 7:
                                n = r.ops.pop(),
                                r.trys.pop();
                                continue;
                            default:
                                if (!((o = (o = r.trys).length > 0 && o[o.length - 1]) || 6 !== n[0] && 2 !== n[0])) {
                                    r = 0;
                                    continue
                                }
                                if (3 === n[0] && (!o || n[1] > o[0] && n[1] < o[3])) {
                                    r.label = n[1];
                                    break
                                }
                                if (6 === n[0] && r.label < o[1]) {
                                    r.label = o[1],
                                    o = n;
                                    break
                                }
                                if (o && r.label < o[2]) {
                                    r.label = o[2],
                                    r.ops.push(n);
                                    break
                                }
                                o[2] && r.ops.pop(),
                                r.trys.pop();
                                continue
                            }
                            n = a.call(e, r)
                        } catch (e) {
                            n = [6, e],
                            t = 0
                        } finally {
                            s = o = 0
                        }
                    if (5 & n[0])
                        throw n[1];
                    return {
                        value: n[0] ? n[1] : void 0,
                        done: !0
                    }
                }([n, i])
            }
        }
    }
    customElements.define("game-keyboard", us),
    function() {
        (console.warn || console.log).apply(console, arguments)
    }
    .bind("[clipboard-polyfill]");
    var ms, hs, ys, gs, bs = "undefined" == typeof navigator ? void 0 : navigator, fs = null == bs ? void 0 : bs.clipboard;
    null === (ms = null == fs ? void 0 : fs.read) || void 0 === ms || ms.bind(fs),
    null === (hs = null == fs ? void 0 : fs.readText) || void 0 === hs || hs.bind(fs);
    var ks = (null === (ys = null == fs ? void 0 : fs.write) || void 0 === ys || ys.bind(fs),
    null === (gs = null == fs ? void 0 : fs.writeText) || void 0 === gs ? void 0 : gs.bind(fs))
      , vs = "undefined" == typeof window ? void 0 : window
      , ws = (null == vs || vs.ClipboardItem,
    vs);
    var xs = function() {
        this.success = !1
    };
    function zs(e, a, s) {
        for (var t in e.success = !0,
        a) {
            var o = a[t]
              , n = s.clipboardData;
            n.setData(t, o),
            "text/plain" === t && n.getData(t) !== o && (e.success = !1)
        }
        s.preventDefault()
    }
    function js(e) {
        var a = new xs
          , s = zs.bind(this, a, e);
        document.addEventListener("copy", s);
        try {
            document.execCommand("copy")
        } finally {
            document.removeEventListener("copy", s)
        }
        return a.success
    }
    function Ss(e, a) {
        _s(e);
        var s = js(a);
        return qs(),
        s
    }
    function _s(e) {
        var a = document.getSelection();
        if (a) {
            var s = document.createRange();
            s.selectNodeContents(e),
            a.removeAllRanges(),
            a.addRange(s)
        }
    }
    function qs() {
        var e = document.getSelection();
        e && e.removeAllRanges()
    }
    function Es(e) {
        return cs(this, void 0, void 0, (function() {
            var a;
            return ps(this, (function(s) {
                if (a = "text/plain"in e,
                "undefined" == typeof ClipboardEvent && void 0 !== ws.clipboardData && void 0 !== ws.clipboardData.setData) {
                    if (!a)
                        throw new Error("No `text/plain` value was specified.");
                    if (t = e["text/plain"],
                    ws.clipboardData.setData("Text", t))
                        return [2, !0];
                    throw new Error("Copying failed, possibly because the user rejected it.")
                }
                var t;
                return js(e) || navigator.userAgent.indexOf("Edge") > -1 || Ss(document.body, e) || function(e) {
                    var a = document.createElement("div");
                    a.setAttribute("style", "-webkit-user-select: text !important"),
                    a.textContent = "temporary element",
                    document.body.appendChild(a);
                    var s = Ss(a, e);
                    return document.body.removeChild(a),
                    s
                }(e) || function(e) {
                    var a = document.createElement("div");
                    a.setAttribute("style", "-webkit-user-select: text !important");
                    var s = a;
                    a.attachShadow && (s = a.attachShadow({
                        mode: "open"
                    }));
                    var t = document.createElement("span");
                    t.innerText = e,
                    s.appendChild(t),
                    document.body.appendChild(a),
                    _s(t);
                    var o = document.execCommand("copy");
                    return qs(),
                    document.body.removeChild(a),
                    o
                }(e["text/plain"]) ? [2, !0] : [2, !1]
            }
            ))
        }
        ))
    }
    function As(e, a, s) {
        try {
            t = navigator.userAgent || navigator.vendor || window.opera,
            !/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(t) && !/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(t.substr(0, 4)) || navigator.userAgent.toLowerCase().indexOf("firefox") > -1 || void 0 === navigator.share || !navigator.canShare || !navigator.canShare(e) ? function(e) {
                return cs(this, void 0, void 0, (function() {
                    return ps(this, (function(a) {
                        if (ks)
                            return [2, ks(e)];
                        if (!Es(function(e) {
                            var a = {};
                            return a["text/plain"] = e,
                            a
                        }(e)))
                            throw new Error("writeText() failed");
                        return [2]
                    }
                    ))
                }
                ))
            }(e.text).then(a, s) : navigator.share(e)
        } catch (e) {
            s()
        }
        var t
    }
    var Cs = document.createElement("template");
    Cs.innerHTML = '\n  <style>\n    .container {\n      display: flex;\n      flex-direction: column;\n      align-items: center;\n      justify-content: center;\n      padding: 16px 0; \n    }\n    h1 {\n      font-weight: 700;\n      font-size: 16px;\n      letter-spacing: 0.5px;\n      text-transform: uppercase;\n      text-align: center;\n      margin-bottom: 10px;\n    }\n  \n    #statistics {\n      display: flex;\n      margin-bottom: \n    }\n\n    .statistic-container {\n      flex: 1;\n    }\n\n    .statistic-container .statistic {\n      font-size: 36px;\n      font-weight: 400;\n      display: flex;\n      align-items: center;\n      justify-content: center;\n      text-align: center;\n      letter-spacing: 0.05em;\n      font-variant-numeric: proportional-nums;\n    }\n\n    .statistic.timer {\n      font-variant-numeric: initial;\n    }\n\n    .statistic-container .label {\n      font-size: 12px;\n      display: flex;\n      align-items: center;\n      justify-content: center;\n      text-align: center;\n    }\n\n    #guess-distribution {\n      width: 80%;\n    }\n\n    .graph-container {\n      width: 100%;\n      height: 20px;\n      display: flex;\n      align-items: center;\n      padding-bottom: 4px;\n      font-size: 14px;\n      line-height: 20px;\n    }\n\n    .graph-container .graph {\n      width: 100%;\n      height: 100%;\n      padding-left: 4px;\n    }\n\n    .graph-container .graph .graph-bar {\n      height: 100%;\n      /* Assume no wins */\n      width: 0%;\n      position: relative;\n      background-color: var(--color-absent);\n      display: flex;\n      justify-content: center;\n    }\n\n    .graph-container .graph .graph-bar.highlight {\n      background-color: var(--color-correct);\n    }\n\n    .graph-container .graph .graph-bar.align-right {\n      justify-content: flex-end;\n      padding-right: 8px;\n    }\n\n    .graph-container .graph .num-guesses {\n      font-weight: bold;\n      color: var(--tile-text-color);\n    }\n\n    #statistics,\n    #guess-distribution {\n      padding-bottom: 10px;\n    }\n\n    .footer {\n      display: flex;\n      width: 100%;\n    }\n\n    .countdown {\n      border-right: 1px solid var(--color-tone-1);\n      padding-right: 12px;\n      width: 50%;\n    }\n\n    .share {\n      display: flex;\n      flex-direction: column;\n   justify-content: center;\n      align-items: center;\n      padding-left: 12px;\n      width: 50%;\n    }\n\n    .no-data {\n      text-align: center;\n    }\n\n    button.share-button {\n      background-color: var(--key-bg-correct);\n      color: var(--key-evaluated-text-color);\n      font-family: inherit;\n      font-weight: bold;\n      border-radius: 4px;\n      cursor: pointer;\n      border: none;\n      user-select: none;\n      display: flex;\n      justify-content: center;\n      align-items: center;\n      text-transform: uppercase;\n      -webkit-tap-highlight-color: rgba(0,0,0,0.3);\n      width: 80%;\n      font-size: 20px;\n      height: 52px;\n      -webkit-filter: brightness(100%);\n    }\n    button.share-button:hover {\n      opacity: 0.9;\n    }\n    button.share-button game-icon {\n      width: 24px;\n      height: 24px;\n      padding-left: 8px;\n    }\n  </style>\n\n  <div class="container">\n    <h1>Statistiques</h1>\n    <div id="statistics"></div>\n    <h1>Performances</h1>\n    <div id="guess-distribution"></div>\n    <div class="footer"></div>\n  </div>\n';
    var Ls = document.createElement("template");
    Ls.innerHTML = '\n  <div class="statistic-container">\n    <div class="statistic"></div>\n    <div class="label"></div>\n  </div>\n';
    var Ts = document.createElement("template");
    Ts.innerHTML = '\n    <div class="graph-container">\n      <div class="guess"></div>\n      <div class="graph">\n        <div class="graph-bar">\n          <div class="num-guesses">\n        </div>\n      </div>\n      </div>\n    </div>\n';
    var Is = document.createElement("template");
    Is.innerHTML = '\n  <div class="countdown">\n    <h1>Jeu du jour</h1>\n    <div id="timer">\n      <div class="statistic-container">\n        <div class="statistic timer">\n          <countdown-timer></countdown-timer>\n        </div>\n      </div>\n    </div>\n  </div>\n    </div>\n  <div class="share">\n    <button id="random-button" class="share-button" onclick="window.randomWord()">\n      Aléatoire\n    </button><br>\n  <button id="share-button" class="share-button">\n      Copié <game-icon icon="share"></game-icon>\n    </button>\n  </div>\n';
    var Ms = {
        currentStreak: "Gains consécutifs",
        maxStreak: "Meilleure série",
        winPercentage: "Gagnées %",
        gamesPlayed: "Jouées",
        gamesWon: "Gagnées",
        averageGuesses: "#coup moyen"
    }
      , Os = function(e) {
        r(t, e);
        var a = h(t);
        function t() {
            var e;
            return s(this, t),
            n(p(e = a.call(this)), "stats", {}),
            n(p(e), "gameApp", void 0),
            e.attachShadow({
                mode: "open"
            }),
            e.stats = Xa(),
            e
        }
        return o(t, [{
            key: "connectedCallback",
            value: function() {
                var e = this;
                this.shadowRoot.appendChild(Cs.content.cloneNode(!0));
                var a = this.shadowRoot.getElementById("statistics")
                  , s = this.shadowRoot.getElementById("guess-distribution")
                  , t = Math.max.apply(Math, g(Object.values(this.stats.guesses)));
                if (Object.values(this.stats.guesses).every((function(e) {
                    return 0 === e
                }
                ))) {
                    var o = document.createElement("div");
                    o.classList.add("no-data"),
                    o.innerText = "No Data",
                    s.appendChild(o)
                } else
                    for (var n = 1; n < Object.keys(this.stats.guesses).length; n++) {
                        var r = n
                          , i = this.stats.guesses[n]
                          , l = Ts.content.cloneNode(!0)
                          , d = Math.max(7, Math.round(i / t * 100));
                        l.querySelector(".guess").textContent = r;
                        var u = l.querySelector(".graph-bar");
                        if (u.style.width = "".concat(d, "%"),
                        "number" == typeof i) {
                            l.querySelector(".num-guesses").textContent = i,
                            i > 0 && u.classList.add("align-right");
                            var c = parseInt(this.getAttribute("highlight-guess"), 10);
                            c && n === c && u.classList.add("highlight")
                        }
                        s.appendChild(l)
                    }
                if (["gamesPlayed", "gamesWon", "averageGuesses"].forEach((function(s) {
                    var t = Ms[s]
                      , o = e.stats[s]
                      , n = Ls.content.cloneNode(!0);
                    n.querySelector(".label").textContent = t,
                    n.querySelector(".statistic").textContent = o,
                    a.appendChild(n)
                }
                )),
                this.gameApp.gameStatus !== Za) {
                    var p = this.shadowRoot.querySelector(".footer")
                      , m = Is.content.cloneNode(!0);
                    p.appendChild(m),
                    this.shadowRoot.querySelector("button#share-button").addEventListener("click", (function(a) {
                        a.preventDefault(),
                        a.stopPropagation();
                        As(function(e) {
                            var a = e.evaluations
                              , s = e.dayOffset
                              , t = e.rowIndex
                              , o = e.isHardMode
                              , n = e.isWin
                              , r = JSON.parse(window.localStorage.getItem(j))
                              , i = JSON.parse(window.localStorage.getItem(S))
                              , l = "modukebec ".concat(s);
                            l += " ".concat(n ? t : "X", "/").concat(6),
                            o && (l += "*");
                            var d = "";
                            return a.forEach((function(e) {
                                e && (e.forEach((function(e) {
                                    if (e) {
                                        var a = "";
                                        switch (e) {
                                        case Ma:
                                            a = function(e) {
                                                return e ? "🟥" : "🟦"
                                            }(i);
                                            break;
                                        case Ia:
                                            a = function(e) {
                                                return e ? "🟧" : "🟨"
                                            }(i);
                                            break;
                                        case Oa:
                                            a = function(e) {
                                                return e ? "⬛" : "⬜"
                                            }(r)
                                        }
                                        d += a
                                    }
                                }
                                )),
                                d += "\n")
                            }
                            )),
                            {
                                text: "".concat(l, "\n\n").concat(d.trimEnd())
                            }
                        }({
                            evaluations: e.gameApp.evaluations,
                            dayOffset: e.gameApp.dayOffset,
                            rowIndex: e.gameApp.rowIndex,
                            isHardMode: e.gameApp.hardMode,
                            isWin: e.gameApp.gameStatus === es
                        }), (function() {
                            e.gameApp.addToast("Copié en mémoire", 2e3, !0)
                        }
                        ), (function() {
                            e.gameApp.addToast("Share failed", 2e3, !0)
                        }
                        ))
                    }
                    ))
                }
            }
        }]),
        t
    }(c(HTMLElement));
    customElements.define("game-stats", Os);
    var Rs = document.createElement("template");
    Rs.innerHTML = '\n  <style>\n    :host {\n    }\n    .container {\n      display: flex;\n      justify-content: space-between;\n    }\n    .switch {\n      height: 20px;\n      width: 32px;\n      vertical-align: middle;\n      /* not quite right */\n      background: var(--color-tone-3);\n      border-radius: 999px;\n      display: block;\n      position: relative;\n    }\n    .knob {\n      display: block;\n      position: absolute;\n      left: 2px;\n      top: 2px;\n      height: calc(100% - 4px);\n      width: 50%;\n      border-radius: 8px;\n      background: var(--white);\n      transform: translateX(0);\n      transition: transform 0.3s;\n    }\n    :host([checked]) .switch {\n      background: var(--color-correct);\n    }\n    :host([checked]) .knob {\n      transform: translateX(calc(100% - 4px));\n    }\n    :host([disabled]) .switch {\n      opacity: 0.5;\n    }\n  </style>\n  <div class="container">\n    <label><slot></slot></label>\n    <div class="switch">\n      <span class="knob"></div>\n    </div>\n  </div>\n';
    var $s = function(e) {
        r(t, e);
        var a = h(t);
        function t() {
            var e;
            return s(this, t),
            (e = a.call(this)).attachShadow({
                mode: "open"
            }),
            e
        }
        return o(t, [{
            key: "connectedCallback",
            value: function() {
                var e = this;
                this.shadowRoot.appendChild(Rs.content.cloneNode(!0)),
                this.shadowRoot.querySelector(".container").addEventListener("click", (function(a) {
                    a.stopPropagation(),
                    e.hasAttribute("checked") ? e.removeAttribute("checked") : e.setAttribute("checked", ""),
                    e.dispatchEvent(new CustomEvent("game-switch-change",{
                        bubbles: !0,
                        composed: !0,
                        detail: {
                            name: e.getAttribute("name"),
                            checked: e.hasAttribute("checked"),
                            disabled: e.hasAttribute("disabled")
                        }
                    }))
                }
                ))
            }
        }], [{
            key: "observedAttributes",
            get: function() {
                return ["checked"]
            }
        }]),
        t
    }(c(HTMLElement));
    customElements.define("game-switch", $s);
    var Ps = document.createElement("template");
    Ps.innerHTML = 
        '\n  <style>\n  .instructions {\n    font-size: 14px;\n    color: var(--color-tone-1)\n  }\n\n  .s {\n    border-bottom: 1px solid var(--color-tone-4);\n    border-top: 1px solid var(--color-tone-4);\n  }\n\n  . {\n    margin-top: 24px;\n    margin-bottom: 24px;\n  }\n\n  game-tile {\n    width: 40px;\n    height: 40px;\n  }\n\n  :host([page]) section {\n    padding: 16px;\n    padding-top: 0px;\n  }\n\n  </style>\n  <section>\n    <div class="instructions">\n      <p>Devinez le <strong>MODUKEBEC</strong> en 6 coups.</p>\n      <p>Chaque essai doit être un mot de 5 lettres utilisés au Québec. Appuyez sur entrée pour soumettre votre choix.</p>\n      <p>Après chaque essai, la couleur de la tuile va changer et fournir un indice.</p>\n      <div class="s">\n        <p><strong>Exemples</strong></p>\n        <div class="">\n          <div class="row">\n            <game-tile letter="s" evaluation="correct" reveal></game-tile>\n            <game-tile letter="u"></game-tile>\n            <game-tile letter="b"></game-tile>\n            <game-tile letter="i"></game-tile>\n            <game-tile letter="r"></game-tile>\n          </div>\n          <p>La lettre <strong>S</strong> est dans le mot à la bonne place.</p>\n        </div>\n        <div class="">\n          <div class="row">\n            <game-tile letter="c"></game-tile>\n            <game-tile letter="a" evaluation="present" reveal></game-tile>\n            <game-tile letter="n"></game-tile>\n            <game-tile letter="o"></game-tile>\n            <game-tile letter="t"></game-tile>\n          </div>\n          <p>La lettre <strong>A</strong> est dans le mot à la mauvaise place.</p>\n        </div>\n        <div class="">\n          <div class="row">\n            <game-tile letter="m"></game-tile>\n            <game-tile letter="a"></game-tile>\n            <game-tile letter="l"></game-tile>\n            <game-tile letter="l" evaluation="absent" reveal></game-tile>\n            <game-tile letter="e"></game-tile>\n          </div>\n          <p>La lettre <strong>L</strong> n est pas dans le mot.</p>\n        </div>\n      </div>\n      <p><strong>Le <a href="https://www.twitter.com/modukebec" target="_blank">@modukebec</a> est sur Twitter!<strong></p>\n <p>Powered by the original <a href="https://www.powerlanguage.co.uk/wordle/" target="_blank">WORDLE</a></p>    </div>\n  </section>\n';
    var Hs = function(e) {
        r(t, e);
        var a = h(t);
        function t() {
            var e;
            return s(this, t),
            (e = a.call(this)).attachShadow({
                mode: "open"
            }),
            e
        }
        return o(t, [{
            key: "connectedCallback",
            value: function() {
                this.shadowRoot.appendChild(Ps.content.cloneNode(!0))
            }
        }]),
        t
    }(c(HTMLElement));
    customElements.define("game-help", Hs);
    var Ns = document.createElement("template");
    Ns.innerHTML = "\n  <style>\n    .content-container{overflow-y:auto;}\n     .overlay {\n      display: none;\n      position: absolute;\n      width: 100%;\n      height: 100%;\n      top: 0;\n      left: 0;\n      justify-content: center;\n      background-color: var(--color-background);\n      animation: SlideIn 100ms linear;\n      z-index: ".concat(2e3, ';\n    }\n\n    :host([open]) .overlay {\n      display: flex;\n    }\n\n    .content {\n      position: relative;\n      color: var(--color-tone-1);\n      padding: 0 32px;\n      max-width: var(--game-max-width);\n      width: 100%;\n      height: 100%;\n      display: flex;\n      flex-direction: column;\n    }\n\n    .content-container {\n      height: 100%;\n    }\n\n    .overlay.closing {\n      animation: SlideOut 150ms linear;\n    }\n\n    header {\n      display: flex;\n      justify-content: center;\n      align-items: center;\n      position: relative;\n    }\n\n    h1 {\n      font-weight: 700;\n      font-size: 16px;\n      letter-spacing: 0.5px;\n      text-transform: uppercase;\n      text-align: center;\n      margin-bottom: 10px;\n    }\n\n    game-icon {\n      position: absolute;\n      right: 0;\n      user-select: none;\n      cursor: pointer;\n    }\n\n    @media only screen and (min-device-width : 320px) and (max-device-width : 480px) {\n      .content {\n        max-width: 100%;\n        padding: 0;\n      }\n      game-icon {\n        padding: 0 16px;\n      }\n    }\n\n    @keyframes SlideIn {\n      0% {\n        transform: translateY(30px);\n        opacity: 0;\n      }\n      100% {\n        transform: translateY(0px);\n        opacity: 1;\n      }\n    }\n    @keyframes SlideOut {\n      0% {\n        transform: translateY(0px);\n        opacity: 1;\n      }\n      90% {\n        opacity: 0;\n      }\n      100% {\n        opacity: 0;\n        transform: translateY(60px);\n      }\n    }\n  </style>\n  <div class="overlay">\n    <div class="content">\n      <header>\n        <h1><slot></slot></h1>\n        <game-icon icon="close"></game-icon>\n      </header>\n      <div class="content-container">\n        <slot name="content"></slot>\n      </div>\n    </div>\n  </div>\n');
    var Ds = function(e) {
        r(t, e);
        var a = h(t);
        function t() {
            var e;
            return s(this, t),
            (e = a.call(this)).attachShadow({
                mode: "open"
            }),
            e
        }
        return o(t, [{
            key: "connectedCallback",
            value: function() {
                var e = this;
                this.shadowRoot.appendChild(Ns.content.cloneNode(!0)),
                this.shadowRoot.querySelector("game-icon").addEventListener("click", (function(a) {
                    e.shadowRoot.querySelector(".overlay").classList.add("closing")
                }
                )),
                this.shadowRoot.addEventListener("animationend", (function(a) {
                    "SlideOut" === a.animationName && (e.shadowRoot.querySelector(".overlay").classList.remove("closing"),
                    Array.from(e.childNodes).forEach((function(a) {
                        e.removeChild(a)
                    }
                    )),
                    e.removeAttribute("open"))
                }
                ))
            }
        }]),
        t
    }(c(HTMLElement));
    customElements.define("game-page", Ds);
    var Gs = document.createElement("template");
    Gs.innerHTML = '\n  <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24">\n    <path fill=var(--color-tone-3) />\n  </svg>\n';
    var Bs = {
        help: "M11 18h2v-2h-2v2zm1-16C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm0-14c-2.21 0-4 1.79-4 4h2c0-1.1.9-2 2-2s2 .9 2 2c0 2-3 1.75-3 5h2c0-2.25 3-2.5 3-5 0-2.21-1.79-4-4-4z",
        settings: "M19.14,12.94c0.04-0.3,0.06-0.61,0.06-0.94c0-0.32-0.02-0.64-0.07-0.94l2.03-1.58c0.18-0.14,0.23-0.41,0.12-0.61 l-1.92-3.32c-0.12-0.22-0.37-0.29-0.59-0.22l-2.39,0.96c-0.5-0.38-1.03-0.7-1.62-0.94L14.4,2.81c-0.04-0.24-0.24-0.41-0.48-0.41 h-3.84c-0.24,0-0.43,0.17-0.47,0.41L9.25,5.35C8.66,5.59,8.12,5.92,7.63,6.29L5.24,5.33c-0.22-0.08-0.47,0-0.59,0.22L2.74,8.87 C2.62,9.08,2.66,9.34,2.86,9.48l2.03,1.58C4.84,11.36,4.8,11.69,4.8,12s0.02,0.64,0.07,0.94l-2.03,1.58 c-0.18,0.14-0.23,0.41-0.12,0.61l1.92,3.32c0.12,0.22,0.37,0.29,0.59,0.22l2.39-0.96c0.5,0.38,1.03,0.7,1.62,0.94l0.36,2.54 c0.05,0.24,0.24,0.41,0.48,0.41h3.84c0.24,0,0.44-0.17,0.47-0.41l0.36-2.54c0.59-0.24,1.13-0.56,1.62-0.94l2.39,0.96 c0.22,0.08,0.47,0,0.59-0.22l1.92-3.32c0.12-0.22,0.07-0.47-0.12-0.61L19.14,12.94z M12,15.6c-1.98,0-3.6-1.62-3.6-3.6 s1.62-3.6,3.6-3.6s3.6,1.62,3.6,3.6S13.98,15.6,12,15.6z",
        backspace: "M22 3H7c-.69 0-1.23.35-1.59.88L0 12l5.41 8.11c.36.53.9.89 1.59.89h15c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H7.07L2.4 12l4.66-7H22v14zm-11.59-2L14 13.41 17.59 17 19 15.59 15.41 12 19 8.41 17.59 7 14 10.59 10.41 7 9 8.41 12.59 12 9 15.59z",
        close: "M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z",
        share: "M18 16.08c-.76 0-1.44.3-1.96.77L8.91 12.7c.05-.23.09-.46.09-.7s-.04-.47-.09-.7l7.05-4.11c.54.5 1.25.81 2.04.81 1.66 0 3-1.34 3-3s-1.34-3-3-3-3 1.34-3 3c0 .24.04.47.09.7L8.04 9.81C7.5 9.31 6.79 9 6 9c-1.66 0-3 1.34-3 3s1.34 3 3 3c.79 0 1.5-.31 2.04-.81l7.12 4.16c-.05.21-.08.43-.08.65 0 1.61 1.31 2.92 2.92 2.92s2.92-1.31 2.92-2.92c0-1.61-1.31-2.92-2.92-2.92zM18 4c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zM6 13c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1zm12 7.02c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1z",
        statistics: "M16,11V3H8v6H2v12h20V11H16z M10,5h4v14h-4V5z M4,11h4v8H4V11z M20,19h-4v-6h4V19z",
        archive: "M 2.8363443,10.777457 A 10.651007,10.651007 0 0 1 4.4223735,5.0075927 10.283798,10.283798 0 0 1 9.1316304,0.94681101 11.729193,11.729193 0 0 1 11.299724,0.25341154 10.307237,10.307237 0 0 1 23.087515,6.3475139 a 11.590514,11.590514 0 0 1 0.683633,2.1622344 10.270125,10.270125 0 0 1 -0.255874,5.2737417 10.387319,10.387319 0 0 1 -2.863446,4.467055 11.254557,11.254557 0 0 1 -4.439711,2.589994 9.5142218,9.5142218 0 0 1 -4.883094,0.14454 9.2798333,9.2798333 0 0 1 -1.541105,-0.503935 9.6548554,9.6548554 0 0 1 -1.4766478,-0.781296 0.74629117,0.74629117 0 0 1 0.8125472,-1.252026 7.9672576,7.9672576 0 0 0 1.2500716,0.668008 7.8129518,7.8129518 0 0 0 1.293044,0.421899 8.0219482,8.0219482 0 0 0 4.125239,-0.123053 9.750564,9.750564 0 0 0 3.853738,-2.242317 8.9145779,8.9145779 0 0 0 2.453266,-3.830301 A 8.7622253,8.7622253 0 0 0 22.314033,8.8281261 10.250593,10.250593 0 0 0 21.728062,6.939345 8.8091031,8.8091031 0 0 0 11.608336,1.7163868 10.248639,10.248639 0 0 0 9.7176012,2.3199373 8.7895707,8.7895707 0 0 0 5.6919781,5.7908411 9.1802183,9.1802183 0 0 0 4.3247116,10.86926 L 6.0337948,8.9707122 A 0.75037976,0.75037976 0 1 1 7.1510469,9.9727236 L 4.2758807,13.170174 a 0.74809013,0.74809013 0 0 1 -1.0547485,0.05469 L 0.22877168,10.336025 A 0.74665123,0.74665123 0 0 1 1.2639878,9.2597915 Z M 12.248997,6.4354096 a 0.74809051,0.74809051 0 1 1 1.496181,0 V 10.713 l 3.373242,1.873156 a 0.74613689,0.74613689 0 0 1 -0.724652,1.302809 l -3.697479,-2.056759 a 0.74809013,0.74809013 0 0 1 -0.447292,-0.68754 z",
        edit: "M 20.152344 0.84570312 C 19.345708 0.79825377 18.469745 1.1161922 17.792969 1.7929688 L 8.2929688 11.292969 A 1.0001 1.0001 0 0 0 8.0292969 11.757812 L 7.0292969 15.757812 A 1.0001 1.0001 0 0 0 8.2421875 16.970703 L 12.242188 15.970703 A 1.0001 1.0001 0 0 0 12.707031 15.707031 L 22.207031 6.2070312 C 22.883808 5.5302547 23.201746 4.6542922 23.154297 3.8476562 C 23.106848 3.0410203 22.739166 2.3251035 22.207031 1.7929688 C 21.674896 1.260834 20.95898 0.89315248 20.152344 0.84570312 z M 20.035156 2.8417969 C 20.29102 2.8568477 20.575104 2.989166 20.792969 3.2070312 C 21.010834 3.4248965 21.143152 3.7089799 21.158203 3.9648438 C 21.173254 4.2207076 21.116192 4.4697457 20.792969 4.7929688 L 11.488281 14.097656 L 9.375 14.625 L 9.9023438 12.511719 L 19.207031 3.2070312 C 19.530254 2.8838082 19.779292 2.826746 20.035156 2.8417969 z M 4 3 C 2.3549904 3 1 4.3549904 1 6 L 1 20 C 1 21.64501 2.3549904 23 4 23 L 18 23 C 19.64501 23 21 21.64501 21 20 L 21 13 A 1 1 0 0 0 20 12 A 1 1 0 0 0 19 13 L 19 20 C 19 20.564129 18.564129 21 18 21 L 4 21 C 3.4358706 21 3 20.564129 3 20 L 3 6 C 3 5.4358706 3.4358706 5 4 5 L 11 5 A 1 1 0 0 0 12 4 A 1 1 0 0 0 11 3 L 4 3 z ",
        save: "M 5 2 C 3.3549904 2 2 3.3549904 2 5 L 2 19 C 2 20.64501 3.3549904 22 5 22 L 7 22 L 17 22 L 19 22 C 20.64501 22 22 20.64501 22 19 L 22 8 A 1.0001 1.0001 0 0 0 21.707031 7.2929688 L 16.707031 2.2929688 A 1.0001 1.0001 0 0 0 16 2 L 7 2 L 5 2 z M 5 4 L 6 4 L 6 8 A 1.0001 1.0001 0 0 0 7 9 L 15 9 A 1 1 0 0 0 16 8 A 1 1 0 0 0 15 7 L 8 7 L 8 4 L 15.585938 4 L 20 8.4140625 L 20 19 C 20 19.564129 19.564129 20 19 20 L 18 20 L 18 13 A 1.0001 1.0001 0 0 0 17 12 L 7 12 A 1.0001 1.0001 0 0 0 6 13 L 6 20 L 5 20 C 4.4358706 20 4 19.564129 4 19 L 4 5 C 4 4.4358706 4.4358706 4 5 4 z M 8 14 L 16 14 L 16 20 L 8 20 L 8 14 z "
    }
      , Fs = function(e) {
        r(t, e);
        var a = h(t);
        function t() {
            var e;
            return s(this, t),
            (e = a.call(this)).attachShadow({
                mode: "open"
            }),
            e
        }
        return o(t, [{
            key: "connectedCallback",
            value: function() {
                this.shadowRoot.appendChild(Gs.content.cloneNode(!0));
                var e = this.getAttribute("icon");
                this.shadowRoot.querySelector("path").setAttribute("d", Bs[e]),
                "backspace" === e && this.shadowRoot.querySelector("path").setAttribute("fill", "var(--color-tone-1)"),
                "share" === e && this.shadowRoot.querySelector("path").setAttribute("fill", "var(--white)")
            }
        }]),
        t
    }(c(HTMLElement));
    customElements.define("game-icon", Fs);
    var Ws = document.createElement("template");
    Ws.innerHTML = '\n  <div id="timer"></div>\n';
    var Ys = 6e4
      , Js = 36e5
      , Us = function(e) {
        r(t, e);
        var a = h(t);
        function t() {
            var e;
            s(this, t),
            n(p(e = a.call(this)), "targetEpochMS", void 0),
            n(p(e), "intervalId", void 0),
            n(p(e), "$timer", void 0),
            e.attachShadow({
                mode: "open"
            });
            var o = new Date;
            return o.setDate(o.getDate() + 1),
            o.setHours(0, 0, 0, 0),
            e.targetEpochMS = o.getTime(),
            e
        }
        return o(t, [{
            key: "padDigit",
            value: function(e) {
                return e.toString().padStart(2, "0")
            }
        }, {
            key: "updateTimer",
            value: function() {
                var e, a = (new Date).getTime(), s = Math.floor(this.targetEpochMS - a);
                if (s <= 0)
                    e = "00:00:00";
                else {
                    var t = Math.floor(s % 864e5 / Js)
                      , o = Math.floor(s % Js / Ys)
                      , n = Math.floor(s % Ys / 1e3);
                    e = "".concat(this.padDigit(t), ":").concat(this.padDigit(o), ":").concat(this.padDigit(n))
                }
                this.$timer.textContent = e
            }
        }, {
            key: "connectedCallback",
            value: function() {
                var e = this;
                this.shadowRoot.appendChild(Ws.content.cloneNode(!0)),
                this.$timer = this.shadowRoot.querySelector("#timer"),
                this.intervalId = setInterval((function() {
                    e.updateTimer()
                }
                ), 200)
            }
        }, {
            key: "disconnectedCallback",
            value: function() {
                clearInterval(this.intervalId)
            }
        }]),
        t
    }(c(HTMLElement));
    return customElements.define("countdown-timer", Us),
    e.CountdownTimer = Us,
    e.GameApp = ts,
    e.GameHelp = Hs,
    e.GameIcon = Fs,
    e.GameKeyboard = us,
    e.GameModal = ns,
    e.GamePage = Ds,
    e.GameRow = x,
    e.GameSettings = _a,
    e.GameStats = Os,
    e.GameSwitch = $s,
    e.GameThemeManager = _,
    e.GameTile = v,
    e.GameToast = Aa,
    Object.defineProperty(e, "__esModule", {
        value: !0
    }),
    e
}({});
