!(function (n, e) {
  "object" == typeof exports && "object" == typeof module
    ? (module.exports = e())
    : "function" == typeof define && define.amd
    ? define("Donation", [], e)
    : "object" == typeof exports
    ? (exports.Donation = e())
    : (n.Donation = e());
})("undefined" != typeof self ? self : this, function () {
  return (function (n) {
    var e = {};
    function t(r) {
      if (e[r]) return e[r].exports;
      var o = (e[r] = { i: r, l: !1, exports: {} });
      return n[r].call(o.exports, o, o.exports, t), (o.l = !0), o.exports;
    }
    return (
      (t.m = n),
      (t.c = e),
      (t.d = function (n, e, r) {
        t.o(n, e) || Object.defineProperty(n, e, { enumerable: !0, get: r });
      }),
      (t.r = function (n) {
        "undefined" != typeof Symbol &&
          Symbol.toStringTag &&
          Object.defineProperty(n, Symbol.toStringTag, { value: "Module" }),
          Object.defineProperty(n, "__esModule", { value: !0 });
      }),
      (t.t = function (n, e) {
        if ((1 & e && (n = t(n)), 8 & e)) return n;
        if (4 & e && "object" == typeof n && n && n.__esModule) return n;
        var r = Object.create(null);
        if (
          (t.r(r),
          Object.defineProperty(r, "default", { enumerable: !0, value: n }),
          2 & e && "string" != typeof n)
        )
          for (var o in n)
            t.d(
              r,
              o,
              function (e) {
                return n[e];
              }.bind(null, o)
            );
        return r;
      }),
      (t.n = function (n) {
        var e =
          n && n.__esModule
            ? function () {
                return n.default;
              }
            : function () {
                return n;
              };
        return t.d(e, "a", e), e;
      }),
      (t.o = function (n, e) {
        return {}.hasOwnProperty.call(n, e);
      }),
      (t.p = ""),
      t((t.s = 0))
    );
  })([
    function (n, e, t) {
      "use strict";
      function r(n, e) {
        if (null == n) return {};
        var t,
          r,
          o = {},
          i = Object.keys(n);
        for (r = 0; r < i.length; r++)
          e.indexOf((t = i[r])) >= 0 || (o[t] = n[t]);
        return o;
      }
      function o() {
        return window.navigator.mockUserAgent || window.navigator.userAgent;
      }
      function i(n) {
        return void 0 === n && (n = o()), n.indexOf("Opera Mini") > -1;
      }
      function a(n) {
        return void 0 === n && (n = o()), /iPhone|iPod|iPad/.test(n);
      }
      function u(n) {
        return (
          void 0 === n && (n = o()),
          !(
            (function (n) {
              return (
                void 0 === n && (n = o()),
                !!a(n) &&
                  (!!(function (n) {
                    return void 0 === n && (n = o()), /\bGSA\b/.test(n);
                  })(n) ||
                    /.+AppleWebKit(?!.*Safari)/.test(n))
              );
            })(n) ||
            (function (n) {
              return (
                void 0 === n && (n = o()),
                !!(function (n) {
                  return void 0 === n && (n = o()), /Android/.test(n);
                })(n) &&
                  /Version\/[\d.]+/.test(n) &&
                  !i(n)
              );
            })(n) ||
            i(n) ||
            (function (n) {
              return void 0 === n && (n = o()), /FxiOS/i.test(n);
            })(n) ||
            (function (n) {
              return void 0 === n && (n = o()), /EdgiOS/i.test(n);
            })(n) ||
            (function (n) {
              return (
                void 0 === n && (n = o()),
                -1 !== n.indexOf("FBAN") || -1 !== n.indexOf("FBAV")
              );
            })(n) ||
            (function (n) {
              return void 0 === n && (n = o()), /QQBrowser/.test(n);
            })(n) ||
            ("undefined" != typeof process &&
              process.versions &&
              process.versions.electron) ||
            ((e = o()), /Macintosh.*AppleWebKit(?!.*Safari)/i.test(e)) ||
            !0 === window.navigator.standalone ||
            window.matchMedia("(display-mode: standalone)").matches
          )
        );
        var e;
      }
      function c(n, e) {
        (n.prototype = Object.create(e.prototype)),
          (n.prototype.constructor = n),
          (n.__proto__ = e);
      }
      function s() {
        return (s =
          Object.assign ||
          function (n) {
            for (var e = 1; e < arguments.length; e++) {
              var t = arguments[e];
              for (var r in t) ({}.hasOwnProperty.call(t, r) && (n[r] = t[r]));
            }
            return n;
          }).apply(this, arguments);
      }
      function d(n) {
        try {
          if (!n) return !1;
          if ("undefined" != typeof Promise && n instanceof Promise) return !0;
          if (
            "undefined" != typeof window &&
            "function" == typeof window.Window &&
            n instanceof window.Window
          )
            return !1;
          if (
            "undefined" != typeof window &&
            "function" == typeof window.constructor &&
            n instanceof window.constructor
          )
            return !1;
          var e = {}.toString;
          if (e) {
            var t = e.call(n);
            if (
              "[object Window]" === t ||
              "[object global]" === t ||
              "[object DOMWindow]" === t
            )
              return !1;
          }
          if ("function" == typeof n.then) return !0;
        } catch (n) {
          return !1;
        }
        return !1;
      }
      t.r(e),
        t.d(e, "Checkout", function () {
          return no;
        }),
        t.d(e, "Button", function () {
          return eo;
        });
      var f,
        l = [],
        p = [],
        h = 0;
      function w() {
        if (!h && f) {
          var n = f;
          (f = null), n.resolve();
        }
      }
      function y() {
        h += 1;
      }
      function m() {
        (h -= 1), w();
      }
      var v = (function () {
        function n(n) {
          var e = this;
          if (
            ((this.resolved = void 0),
            (this.rejected = void 0),
            (this.errorHandled = void 0),
            (this.value = void 0),
            (this.error = void 0),
            (this.handlers = void 0),
            (this.dispatching = void 0),
            (this.stack = void 0),
            (this.resolved = !1),
            (this.rejected = !1),
            (this.errorHandled = !1),
            (this.handlers = []),
            n)
          ) {
            var t,
              r,
              o = !1,
              i = !1,
              a = !1;
            y();
            try {
              n(
                function (n) {
                  a ? e.resolve(n) : ((o = !0), (t = n));
                },
                function (n) {
                  a ? e.reject(n) : ((i = !0), (r = n));
                }
              );
            } catch (n) {
              return m(), void this.reject(n);
            }
            m(), (a = !0), o ? this.resolve(t) : i && this.reject(r);
          }
        }
        var e = n.prototype;
        return (
          (e.resolve = function (n) {
            if (this.resolved || this.rejected) return this;
            if (d(n))
              throw new Error("Can not resolve promise with another promise");
            return (
              (this.resolved = !0), (this.value = n), this.dispatch(), this
            );
          }),
          (e.reject = function (n) {
            var e = this;
            if (this.resolved || this.rejected) return this;
            if (d(n))
              throw new Error("Can not reject promise with another promise");
            if (!n) {
              var t =
                n && "function" == typeof n.toString
                  ? n.toString()
                  : {}.toString.call(n);
              n = new Error(
                "Expected reject to be called with Error, got " + t
              );
            }
            return (
              (this.rejected = !0),
              (this.error = n),
              this.errorHandled ||
                setTimeout(function () {
                  e.errorHandled ||
                    (function (n, e) {
                      if (-1 === l.indexOf(n)) {
                        l.push(n),
                          setTimeout(function () {
                            throw n;
                          }, 1);
                        for (var t = 0; t < p.length; t++) p[t](n, e);
                      }
                    })(n, e);
                }, 1),
              this.dispatch(),
              this
            );
          }),
          (e.asyncReject = function (n) {
            return (this.errorHandled = !0), this.reject(n), this;
          }),
          (e.dispatch = function () {
            var e = this.resolved,
              t = this.rejected,
              r = this.handlers;
            if (!this.dispatching && (e || t)) {
              (this.dispatching = !0), y();
              for (
                var o = function (n, e) {
                    return n.then(
                      function (n) {
                        e.resolve(n);
                      },
                      function (n) {
                        e.reject(n);
                      }
                    );
                  },
                  i = 0;
                i < r.length;
                i++
              ) {
                var a = r[i],
                  u = a.onSuccess,
                  c = a.onError,
                  s = a.promise,
                  f = void 0;
                if (e)
                  try {
                    f = u ? u(this.value) : this.value;
                  } catch (n) {
                    s.reject(n);
                    continue;
                  }
                else if (t) {
                  if (!c) {
                    s.reject(this.error);
                    continue;
                  }
                  try {
                    f = c(this.error);
                  } catch (n) {
                    s.reject(n);
                    continue;
                  }
                }
                f instanceof n && (f.resolved || f.rejected)
                  ? (f.resolved ? s.resolve(f.value) : s.reject(f.error),
                    (f.errorHandled = !0))
                  : d(f)
                  ? f instanceof n && (f.resolved || f.rejected)
                    ? f.resolved
                      ? s.resolve(f.value)
                      : s.reject(f.error)
                    : o(f, s)
                  : s.resolve(f);
              }
              (r.length = 0), (this.dispatching = !1), m();
            }
          }),
          (e.then = function (e, t) {
            if (e && "function" != typeof e && !e.call)
              throw new Error(
                "Promise.then expected a function for success handler"
              );
            if (t && "function" != typeof t && !t.call)
              throw new Error(
                "Promise.then expected a function for error handler"
              );
            var r = new n();
            return (
              this.handlers.push({ promise: r, onSuccess: e, onError: t }),
              (this.errorHandled = !0),
              this.dispatch(),
              r
            );
          }),
          (e.catch = function (n) {
            return this.then(void 0, n);
          }),
          (e.finally = function (e) {
            if (e && "function" != typeof e && !e.call)
              throw new Error("Promise.finally expected a function");
            return this.then(
              function (t) {
                return n.try(e).then(function () {
                  return t;
                });
              },
              function (t) {
                return n.try(e).then(function () {
                  throw t;
                });
              }
            );
          }),
          (e.timeout = function (n, e) {
            var t = this;
            if (this.resolved || this.rejected) return this;
            var r = setTimeout(function () {
              t.resolved ||
                t.rejected ||
                t.reject(e || new Error("Promise timed out after " + n + "ms"));
            }, n);
            return this.then(function (n) {
              return clearTimeout(r), n;
            });
          }),
          (e.toPromise = function () {
            if ("undefined" == typeof Promise)
              throw new TypeError("Could not find Promise");
            return Promise.resolve(this);
          }),
          (n.resolve = function (e) {
            return e instanceof n
              ? e
              : d(e)
              ? new n(function (n, t) {
                  return e.then(n, t);
                })
              : new n().resolve(e);
          }),
          (n.reject = function (e) {
            return new n().reject(e);
          }),
          (n.asyncReject = function (e) {
            return new n().asyncReject(e);
          }),
          (n.all = function (e) {
            var t = new n(),
              r = e.length,
              o = [];
            if (!r) return t.resolve(o), t;
            for (
              var i = function (n, e, i) {
                  return e.then(
                    function (e) {
                      (o[n] = e), 0 == (r -= 1) && t.resolve(o);
                    },
                    function (n) {
                      i.reject(n);
                    }
                  );
                },
                a = 0;
              a < e.length;
              a++
            ) {
              var u = e[a];
              if (u instanceof n) {
                if (u.resolved) {
                  (o[a] = u.value), (r -= 1);
                  continue;
                }
              } else if (!d(u)) {
                (o[a] = u), (r -= 1);
                continue;
              }
              i(a, n.resolve(u), t);
            }
            return 0 === r && t.resolve(o), t;
          }),
          (n.hash = function (e) {
            var t = {},
              r = [],
              o = function (n) {
                if (e.hasOwnProperty(n)) {
                  var o = e[n];
                  d(o)
                    ? r.push(
                        o.then(function (e) {
                          t[n] = e;
                        })
                      )
                    : (t[n] = o);
                }
              };
            for (var i in e) o(i);
            return n.all(r).then(function () {
              return t;
            });
          }),
          (n.map = function (e, t) {
            return n.all(e.map(t));
          }),
          (n.onPossiblyUnhandledException = function (n) {
            return (function (n) {
              return (
                p.push(n),
                {
                  cancel: function () {
                    p.splice(p.indexOf(n), 1);
                  },
                }
              );
            })(n);
          }),
          (n.try = function (e, t, r) {
            if (e && "function" != typeof e && !e.call)
              throw new Error("Promise.try expected a function");
            var o;
            y();
            try {
              o = e.apply(t, r || []);
            } catch (e) {
              return m(), n.reject(e);
            }
            return m(), n.resolve(o);
          }),
          (n.delay = function (e) {
            return new n(function (n) {
              setTimeout(n, e);
            });
          }),
          (n.isPromise = function (e) {
            return !!(e && e instanceof n) || d(e);
          }),
          (n.flush = function () {
            return (e = f = f || new n()), w(), e;
            var e;
          }),
          n
        );
      })();
      function g(n) {
        return "[object RegExp]" === {}.toString.call(n);
      }
      var b = { IFRAME: "iframe", POPUP: "popup" },
        P = "Call was rejected by callee.\r\n";
      function x(n) {
        return void 0 === n && (n = window), "about:" === n.location.protocol;
      }
      function _(n) {
        if ((void 0 === n && (n = window), n))
          try {
            if (n.parent && n.parent !== n) return n.parent;
          } catch (n) {}
      }
      function E(n) {
        if ((void 0 === n && (n = window), n && !_(n)))
          try {
            return n.opener;
          } catch (n) {}
      }
      function k(n) {
        try {
          return !0;
        } catch (n) {}
        return !1;
      }
      function F(n) {
        void 0 === n && (n = window);
        var e = n.location;
        if (!e) throw new Error("Can not read window location");
        var t = e.protocol;
        if (!t) throw new Error("Can not read window protocol");
        if ("file:" === t) return "file://";
        if ("about:" === t) {
          var r = _(n);
          return r && k() ? F(r) : "about://";
        }
        var o = e.host;
        if (!o) throw new Error("Can not read window host");
        return t + "//" + o;
      }
      function C(n) {
        void 0 === n && (n = window);
        var e = F(n);
        return e && n.mockDomain && 0 === n.mockDomain.indexOf("mock:")
          ? n.mockDomain
          : e;
      }
      function M(n) {
        if (
          !(function (n) {
            try {
              if (n === window) return !0;
            } catch (n) {}
            try {
              var e = Object.getOwnPropertyDescriptor(n, "location");
              if (e && !1 === e.enumerable) return !1;
            } catch (n) {}
            try {
              if (x(n) && k()) return !0;
            } catch (n) {}
            try {
              if (F(n) === F(window)) return !0;
            } catch (n) {}
            return !1;
          })(n)
        )
          return !1;
        try {
          if (n === window) return !0;
          if (x(n) && k()) return !0;
          if (C(window) === C(n)) return !0;
        } catch (n) {}
        return !1;
      }
      function O(n) {
        if (!M(n)) throw new Error("Expected window to be same domain");
        return n;
      }
      function A(n, e) {
        if (!n || !e) return !1;
        var t = _(e);
        return t
          ? t === n
          : -1 !==
              (function (n) {
                var e = [];
                try {
                  for (; n.parent !== n; ) e.push(n.parent), (n = n.parent);
                } catch (n) {}
                return e;
              })(e).indexOf(n);
      }
      function j(n) {
        var e,
          t,
          r = [];
        try {
          e = n.frames;
        } catch (t) {
          e = n;
        }
        try {
          t = e.length;
        } catch (n) {}
        if (0 === t) return r;
        if (t) {
          for (var o = 0; o < t; o++) {
            var i = void 0;
            try {
              i = e[o];
            } catch (n) {
              continue;
            }
            r.push(i);
          }
          return r;
        }
        for (var a = 0; a < 100; a++) {
          var u = void 0;
          try {
            u = e[a];
          } catch (n) {
            return r;
          }
          if (!u) return r;
          r.push(u);
        }
        return r;
      }
      function z(n) {
        for (var e = [], t = 0, r = j(n); t < r.length; t++) {
          var o = r[t];
          e.push(o);
          for (var i = 0, a = z(o); i < a.length; i++) e.push(a[i]);
        }
        return e;
      }
      function q(n) {
        void 0 === n && (n = window);
        try {
          if (n.top) return n.top;
        } catch (n) {}
        if (_(n) === n) return n;
        try {
          if (A(window, n) && window.top) return window.top;
        } catch (n) {}
        try {
          if (A(n, window) && window.top) return window.top;
        } catch (n) {}
        for (var e = 0, t = z(n); e < t.length; e++) {
          var r = t[e];
          try {
            if (r.top) return r.top;
          } catch (n) {}
          if (_(r) === r) return r;
        }
      }
      function D(n) {
        var e = q(n);
        if (!e) throw new Error("Can not determine top window");
        var t = [].concat(z(e), [e]);
        return -1 === t.indexOf(n) && (t = [].concat(t, [n], z(n))), t;
      }
      var W = [],
        S = [];
      function L(n, e) {
        void 0 === e && (e = !0);
        try {
          if (n === window) return !1;
        } catch (n) {
          return !0;
        }
        try {
          if (!n) return !0;
        } catch (n) {
          return !0;
        }
        try {
          if (n.closed) return !0;
        } catch (n) {
          return !n || n.message !== P;
        }
        if (e && M(n))
          try {
            if (n.mockclosed) return !0;
          } catch (n) {}
        try {
          if (!n.parent || !n.top) return !0;
        } catch (n) {}
        var t = (function (n, e) {
          for (var t = 0; t < n.length; t++)
            try {
              if (n[t] === e) return t;
            } catch (n) {}
          return -1;
        })(W, n);
        if (-1 !== t) {
          var r = S[t];
          if (
            r &&
            (function (n) {
              if (!n.contentWindow) return !0;
              if (!n.parentNode) return !0;
              var e = n.ownerDocument;
              if (e && e.documentElement && !e.documentElement.contains(n)) {
                for (var t = n; t.parentNode && t.parentNode !== t; )
                  t = t.parentNode;
                if (!t.host || !e.documentElement.contains(t.host)) return !0;
              }
              return !1;
            })(r)
          )
            return !0;
        }
        return !1;
      }
      function T(n) {
        return (
          void 0 === n && (n = window), E((n = n || window)) || _(n) || void 0
        );
      }
      function R(n, e) {
        for (var t = 0; t < n.length; t++)
          for (var r = n[t], o = 0; o < e.length; o++)
            if (r === e[o]) return !0;
        return !1;
      }
      function N(n) {
        void 0 === n && (n = window);
        for (var e = 0, t = n; t; ) (t = _(t)) && (e += 1);
        return e;
      }
      function I(n, e) {
        var t = q(n) || n,
          r = q(e) || e;
        try {
          if (t && r) return t === r;
        } catch (n) {}
        var o = D(n),
          i = D(e);
        if (R(o, i)) return !0;
        var a = E(t),
          u = E(r);
        return (a && R(D(a), i)) || (u && R(D(u), o)), !1;
      }
      function B(n, e) {
        if ("string" == typeof n) {
          if ("string" == typeof e) return "*" === n || e === n;
          if (g(e)) return !1;
          if (Array.isArray(e)) return !1;
        }
        return g(n)
          ? g(e)
            ? n.toString() === e.toString()
            : !Array.isArray(e) && Boolean(e.match(n))
          : !!Array.isArray(n) &&
              (Array.isArray(e)
                ? JSON.stringify(n) === JSON.stringify(e)
                : !g(e) &&
                  n.some(function (n) {
                    return B(n, e);
                  }));
      }
      function U(n) {
        return n.match(/^(https?|mock|file):\/\//)
          ? n.split("/").slice(0, 3).join("/")
          : C();
      }
      function H(n, e, t, r) {
        var o;
        return (
          void 0 === t && (t = 1e3),
          void 0 === r && (r = 1 / 0),
          (function i() {
            if (L(n)) return o && clearTimeout(o), e();
            r <= 0 ? clearTimeout(o) : ((r -= t), (o = setTimeout(i, t)));
          })(),
          {
            cancel: function () {
              o && clearTimeout(o);
            },
          }
        );
      }
      function J(n) {
        try {
          if (n === window) return !0;
        } catch (n) {
          if (n && n.message === P) return !0;
        }
        try {
          if ("[object Window]" === {}.toString.call(n)) return !0;
        } catch (n) {
          if (n && n.message === P) return !0;
        }
        try {
          if (window.Window && n instanceof window.Window) return !0;
        } catch (n) {
          if (n && n.message === P) return !0;
        }
        try {
          if (n && n.self === n) return !0;
        } catch (n) {
          if (n && n.message === P) return !0;
        }
        try {
          if (n && n.parent === n) return !0;
        } catch (n) {
          if (n && n.message === P) return !0;
        }
        try {
          if (n && n.top === n) return !0;
        } catch (n) {
          if (n && n.message === P) return !0;
        }
        try {
          if (
            n &&
            "__unlikely_value__" === n.__cross_domain_utils_window_check__
          )
            return !1;
        } catch (n) {
          return !0;
        }
        try {
          if ("postMessage" in n && "self" in n && "location" in n) return !0;
        } catch (n) {}
        return !1;
      }
      function $(n) {
        try {
          n.close();
        } catch (n) {}
      }
      function K(n, e) {
        for (var t = 0; t < n.length; t++)
          try {
            if (n[t] === e) return t;
          } catch (n) {}
        return -1;
      }
      var V,
        Z = (function () {
          function n() {
            if (
              ((this.name = void 0),
              (this.weakmap = void 0),
              (this.keys = void 0),
              (this.values = void 0),
              (this.name = "__weakmap_" + ((1e9 * Math.random()) >>> 0) + "__"),
              (function () {
                if ("undefined" == typeof WeakMap) return !1;
                if (void 0 === Object.freeze) return !1;
                try {
                  var n = new WeakMap(),
                    e = {};
                  return (
                    Object.freeze(e),
                    n.set(e, "__testvalue__"),
                    "__testvalue__" === n.get(e)
                  );
                } catch (n) {
                  return !1;
                }
              })())
            )
              try {
                this.weakmap = new WeakMap();
              } catch (n) {}
            (this.keys = []), (this.values = []);
          }
          var e = n.prototype;
          return (
            (e._cleanupClosedWindows = function () {
              for (
                var n = this.weakmap, e = this.keys, t = 0;
                t < e.length;
                t++
              ) {
                var r = e[t];
                if (J(r) && L(r)) {
                  if (n)
                    try {
                      n.delete(r);
                    } catch (n) {}
                  e.splice(t, 1), this.values.splice(t, 1), (t -= 1);
                }
              }
            }),
            (e.isSafeToReadWrite = function (n) {
              return !J(n);
            }),
            (e.set = function (n, e) {
              if (!n) throw new Error("WeakMap expected key");
              var t = this.weakmap;
              if (t)
                try {
                  t.set(n, e);
                } catch (n) {
                  delete this.weakmap;
                }
              if (this.isSafeToReadWrite(n))
                try {
                  var r = this.name,
                    o = n[r];
                  return void (o && o[0] === n
                    ? (o[1] = e)
                    : Object.defineProperty(n, r, {
                        value: [n, e],
                        writable: !0,
                      }));
                } catch (n) {}
              this._cleanupClosedWindows();
              var i = this.keys,
                a = this.values,
                u = K(i, n);
              -1 === u ? (i.push(n), a.push(e)) : (a[u] = e);
            }),
            (e.get = function (n) {
              if (!n) throw new Error("WeakMap expected key");
              var e = this.weakmap;
              if (e)
                try {
                  if (e.has(n)) return e.get(n);
                } catch (n) {
                  delete this.weakmap;
                }
              if (this.isSafeToReadWrite(n))
                try {
                  var t = n[this.name];
                  return t && t[0] === n ? t[1] : void 0;
                } catch (n) {}
              this._cleanupClosedWindows();
              var r = K(this.keys, n);
              if (-1 !== r) return this.values[r];
            }),
            (e.delete = function (n) {
              if (!n) throw new Error("WeakMap expected key");
              var e = this.weakmap;
              if (e)
                try {
                  e.delete(n);
                } catch (n) {
                  delete this.weakmap;
                }
              if (this.isSafeToReadWrite(n))
                try {
                  var t = n[this.name];
                  t && t[0] === n && (t[0] = t[1] = void 0);
                } catch (n) {}
              this._cleanupClosedWindows();
              var r = this.keys,
                o = K(r, n);
              -1 !== o && (r.splice(o, 1), this.values.splice(o, 1));
            }),
            (e.has = function (n) {
              if (!n) throw new Error("WeakMap expected key");
              var e = this.weakmap;
              if (e)
                try {
                  if (e.has(n)) return !0;
                } catch (n) {
                  delete this.weakmap;
                }
              if (this.isSafeToReadWrite(n))
                try {
                  var t = n[this.name];
                  return !(!t || t[0] !== n);
                } catch (n) {}
              return this._cleanupClosedWindows(), -1 !== K(this.keys, n);
            }),
            (e.getOrSet = function (n, e) {
              if (this.has(n)) return this.get(n);
              var t = e();
              return this.set(n, t), t;
            }),
            n
          );
        })();
      function G(n) {
        return (G = Object.setPrototypeOf
          ? Object.getPrototypeOf
          : function (n) {
              return n.__proto__ || Object.getPrototypeOf(n);
            })(n);
      }
      function X(n, e) {
        return (X =
          Object.setPrototypeOf ||
          function (n, e) {
            return (n.__proto__ = e), n;
          })(n, e);
      }
      function Y() {
        if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
        if (Reflect.construct.sham) return !1;
        if ("function" == typeof Proxy) return !0;
        try {
          return (
            Date.prototype.toString.call(
              Reflect.construct(Date, [], function () {})
            ),
            !0
          );
        } catch (n) {
          return !1;
        }
      }
      function Q(n, e, t) {
        return (Q = Y()
          ? Reflect.construct
          : function (n, e, t) {
              var r = [null];
              r.push.apply(r, e);
              var o = new (Function.bind.apply(n, r))();
              return t && X(o, t.prototype), o;
            }).apply(null, arguments);
      }
      function nn(n) {
        var e = "function" == typeof Map ? new Map() : void 0;
        return (nn = function (n) {
          if (
            null === n ||
            -1 === Function.toString.call(n).indexOf("[native code]")
          )
            return n;
          if ("function" != typeof n)
            throw new TypeError(
              "Super expression must either be null or a function"
            );
          if (void 0 !== e) {
            if (e.has(n)) return e.get(n);
            e.set(n, t);
          }
          function t() {
            return Q(n, arguments, G(this).constructor);
          }
          return (
            (t.prototype = Object.create(n.prototype, {
              constructor: {
                value: t,
                enumerable: !1,
                writable: !0,
                configurable: !0,
              },
            })),
            X(t, n)
          );
        })(n);
      }
      function en(n) {
        return n.name || n.__name__ || n.displayName || "anonymous";
      }
      function tn(n, e) {
        try {
          delete n.name, (n.name = e);
        } catch (n) {}
        return (n.__name__ = n.displayName = e), n;
      }
      function rn(n) {
        if ("function" == typeof btoa)
          return btoa(
            encodeURIComponent(n).replace(/%([0-9A-F]{2})/g, function (n, e) {
              return String.fromCharCode(parseInt(e, 16));
            })
          );
        if ("undefined" != typeof Buffer)
          return Buffer.from(n, "utf8").toString("base64");
        throw new Error("Can not find window.btoa or Buffer");
      }
      function on() {
        var n = "0123456789abcdef";
        return (
          "xxxxxxxxxx".replace(/./g, function () {
            return n.charAt(Math.floor(Math.random() * n.length));
          }) +
          "_" +
          rn(new Date().toISOString().slice(11, 19).replace("T", "."))
            .replace(/[^a-zA-Z0-9]/g, "")
            .toLowerCase()
        );
      }
      function an(n) {
        try {
          return JSON.stringify([].slice.call(n), function (n, e) {
            return "function" == typeof e
              ? "memoize[" +
                  (function (n) {
                    if (
                      ((V = V || new Z()),
                      null == n ||
                        ("object" != typeof n && "function" != typeof n))
                    )
                      throw new Error("Invalid object");
                    var e = V.get(n);
                    return e || ((e = typeof n + ":" + on()), V.set(n, e)), e;
                  })(e) +
                  "]"
              : e;
          });
        } catch (n) {
          throw new Error(
            "Arguments not serializable -- can not be used to memoize"
          );
        }
      }
      function un() {
        return {};
      }
      var cn = 0,
        sn = 0;
      function dn(n, e) {
        void 0 === e && (e = {});
        var t,
          r,
          o = e.thisNamespace,
          i = void 0 !== o && o,
          a = e.time,
          u = cn;
        cn += 1;
        var c = function () {
          for (var e = arguments.length, o = new Array(e), c = 0; c < e; c++)
            o[c] = arguments[c];
          var s;
          u < sn && ((t = null), (r = null), (u = cn), (cn += 1)),
            (s = i ? (r = r || new Z()).getOrSet(this, un) : (t = t || {}));
          var d = an(o),
            f = s[d];
          if (
            (f && a && Date.now() - f.time < a && (delete s[d], (f = null)), f)
          )
            return f.value;
          var l = Date.now(),
            p = n.apply(this, arguments);
          return (s[d] = { time: l, value: p }), p;
        };
        return (
          (c.reset = function () {
            (t = null), (r = null);
          }),
          tn(c, (e.name || en(n)) + "::memoized")
        );
      }
      function fn(n) {
        var e = {};
        function t() {
          for (
            var t = arguments,
              r = this,
              o = arguments.length,
              i = new Array(o),
              a = 0;
            a < o;
            a++
          )
            i[a] = arguments[a];
          var u = an(i);
          return (
            e.hasOwnProperty(u) ||
              (e[u] = v
                .try(function () {
                  return n.apply(r, t);
                })
                .finally(function () {
                  delete e[u];
                })),
            e[u]
          );
        }
        return (
          (t.reset = function () {
            e = {};
          }),
          tn(t, en(n) + "::promiseMemoized")
        );
      }
      function ln(n, e, t) {
        void 0 === t && (t = []);
        var r = (n.__inline_memoize_cache__ = n.__inline_memoize_cache__ || {}),
          o = an(t);
        return r.hasOwnProperty(o) ? r[o] : (r[o] = e.apply(void 0, t));
      }
      function pn() {}
      function hn(n) {
        var e = !1;
        return tn(function () {
          if (!e) return (e = !0), n.apply(this, arguments);
        }, en(n) + "::once");
      }
      function wn(n, e) {
        if ((void 0 === e && (e = 1), e >= 3))
          return "stringifyError stack overflow";
        try {
          if (!n) return "<unknown error: " + {}.toString.call(n) + ">";
          if ("string" == typeof n) return n;
          if (n instanceof Error) {
            var t = n && n.stack,
              r = n && n.message;
            if (t && r) return -1 !== t.indexOf(r) ? t : r + "\n" + t;
            if (t) return t;
            if (r) return r;
          }
          return n && n.toString && "function" == typeof n.toString
            ? n.toString()
            : {}.toString.call(n);
        } catch (n) {
          return "Error while stringifying error: " + wn(n, e + 1);
        }
      }
      function yn(n) {
        return "string" == typeof n
          ? n
          : n && n.toString && "function" == typeof n.toString
          ? n.toString()
          : {}.toString.call(n);
      }
      function mn(n, e) {
        if (!e) return n;
        if (Object.assign) return Object.assign(n, e);
        for (var t in e) e.hasOwnProperty(t) && (n[t] = e[t]);
        return n;
      }
      function vn(n) {
        return "data:image/svg+xml;base64," + rn(n);
      }
      function gn(n, e) {
        void 0 === e && (e = Boolean);
        var t = {};
        for (var r in n) n.hasOwnProperty(r) && e(n[r], r) && (t[r] = n[r]);
        return t;
      }
      function bn(n) {
        return n;
      }
      function Pn(n, e) {
        var t;
        return (
          (function r() {
            t = setTimeout(function () {
              n(), r();
            }, e);
          })(),
          {
            cancel: function () {
              clearTimeout(t);
            },
          }
        );
      }
      function xn() {
        var n = {},
          e = {};
        return {
          on: function (n, t) {
            var r = (e[n] = e[n] || []);
            r.push(t);
            var o = !1;
            return {
              cancel: function () {
                o || ((o = !0), r.splice(r.indexOf(t), 1));
              },
            };
          },
          once: function (n, e) {
            var t = this.on(n, function () {
              t.cancel(), e();
            });
            return t;
          },
          trigger: function (n) {
            for (
              var t = arguments.length, r = new Array(t > 1 ? t - 1 : 0), o = 1;
              o < t;
              o++
            )
              r[o - 1] = arguments[o];
            var i = e[n],
              a = [];
            if (i)
              for (
                var u = function (n) {
                    var e = i[n];
                    a.push(
                      v.try(function () {
                        return e.apply(void 0, r);
                      })
                    );
                  },
                  c = 0;
                c < i.length;
                c++
              )
                u(c);
            return v.all(a).then(pn);
          },
          triggerOnce: function (e) {
            if (n[e]) return v.resolve();
            n[e] = !0;
            for (
              var t = arguments.length, r = new Array(t > 1 ? t - 1 : 0), o = 1;
              o < t;
              o++
            )
              r[o - 1] = arguments[o];
            return this.trigger.apply(this, [e].concat(r));
          },
          reset: function () {
            e = {};
          },
        };
      }
      function _n(n, e, t) {
        if (Array.isArray(n)) {
          if ("number" != typeof e)
            throw new TypeError("Array key must be number");
        } else if ("object" == typeof n && null !== n && "string" != typeof e)
          throw new TypeError("Object key must be string");
        Object.defineProperty(n, e, {
          configurable: !0,
          enumerable: !0,
          get: function () {
            delete n[e];
            var r = t();
            return (n[e] = r), r;
          },
          set: function (t) {
            delete n[e], (n[e] = t);
          },
        });
      }
      function En(n) {
        return [].slice.call(n);
      }
      function kn(n) {
        return (
          "object" == typeof (e = n) &&
          null !== e &&
          "[object Object]" === {}.toString.call(n)
        );
        var e;
      }
      function Fn(n) {
        if (!kn(n)) return !1;
        var e = n.constructor;
        if ("function" != typeof e) return !1;
        var t = e.prototype;
        return !!kn(t) && !!t.hasOwnProperty("isPrototypeOf");
      }
      function Cn(n, e, t) {
        if ((void 0 === t && (t = ""), Array.isArray(n))) {
          for (
            var r = n.length,
              o = [],
              i = function (r) {
                _n(o, r, function () {
                  var o = t ? t + "." + r : "" + r,
                    i = e(n[r], r, o);
                  return (Fn(i) || Array.isArray(i)) && (i = Cn(i, e, o)), i;
                });
              },
              a = 0;
            a < r;
            a++
          )
            i(a);
          return o;
        }
        if (Fn(n)) {
          var u = {},
            c = function (r) {
              if (!n.hasOwnProperty(r)) return "continue";
              _n(u, r, function () {
                var o = t ? t + "." + r : "" + r,
                  i = e(n[r], r, o);
                return (Fn(i) || Array.isArray(i)) && (i = Cn(i, e, o)), i;
              });
            };
          for (var s in n) c(s);
          return u;
        }
        throw new Error("Pass an object or array");
      }
      function Mn(n) {
        return null != n;
      }
      function On(n) {
        return "[object RegExp]" === {}.toString.call(n);
      }
      function An(n, e, t) {
        if (n.hasOwnProperty(e)) return n[e];
        var r = t();
        return (n[e] = r), r;
      }
      function jn(n) {
        var e = [],
          t = !1;
        return {
          set: function (e, r) {
            return (
              t ||
                ((n[e] = r),
                this.register(function () {
                  delete n[e];
                })),
              r
            );
          },
          register: function (n) {
            t ? n() : e.push(hn(n));
          },
          all: function () {
            var n = [];
            for (t = !0; e.length; ) {
              var r = e.shift();
              n.push(r());
            }
            return v.all(n).then(pn);
          },
        };
      }
      function zn(n, e) {
        if (null == e) throw new Error("Expected " + n + " to be present");
        return e;
      }
      (dn.clear = function () {
        sn = cn;
      }),
        dn(function (n) {
          if (Object.values) return Object.values(n);
          var e = [];
          for (var t in n) n.hasOwnProperty(t) && e.push(n[t]);
          return e;
        });
      var qn = (function (n) {
        function e(e) {
          var t;
          return (
            ((t = n.call(this, e) || this).name = t.constructor.name),
            "function" == typeof Error.captureStackTrace
              ? Error.captureStackTrace(
                  (function (n) {
                    if (void 0 === n)
                      throw new ReferenceError(
                        "this hasn't been initialised - super() hasn't been called"
                      );
                    return n;
                  })(t),
                  t.constructor
                )
              : (t.stack = new Error(e).stack),
            t
          );
        }
        return c(e, n), e;
      })(nn(Error));
      function Dn() {
        return Boolean(document.body) && "complete" === document.readyState;
      }
      function Wn() {
        return Boolean(document.body) && "interactive" === document.readyState;
      }
      function Sn(n) {
        return n
          .replace(/\?/g, "%3F")
          .replace(/&/g, "%26")
          .replace(/#/g, "%23")
          .replace(/\+/g, "%2B");
      }
      function Ln(n) {
        return ln(
          Ln,
          function () {
            var e = {};
            if (!n) return e;
            if (-1 === n.indexOf("=")) return e;
            for (var t = 0, r = n.split("&"); t < r.length; t++) {
              var o = r[t];
              (o = o.split("="))[0] &&
                o[1] &&
                (e[decodeURIComponent(o[0])] = decodeURIComponent(o[1]));
            }
            return e;
          },
          [n]
        );
      }
      function Tn(n, e) {
        return (
          void 0 === e && (e = {}),
          e && Object.keys(e).length
            ? (void 0 === (t = s({}, Ln(n), e)) && (t = {}),
              Object.keys(t)
                .filter(function (n) {
                  return "string" == typeof t[n];
                })
                .map(function (n) {
                  return Sn(n) + "=" + Sn(t[n]);
                })
                .join("&"))
            : n
        );
        var t;
      }
      function Rn(n, e) {
        var t,
          r,
          o = e.query || {},
          i = e.hash || {},
          a = n.split("#");
        r = a[1];
        var u = (t = a[0]).split("?");
        t = u[0];
        var c = Tn(u[1], o),
          s = Tn(r, i);
        return c && (t = t + "?" + c), s && (t = t + "#" + s), t;
      }
      function Nn() {
        return "undefined" != typeof window && void 0 !== window.location;
      }
      function In(n, e) {
        n.appendChild(e);
      }
      function Bn(n) {
        return (
          n instanceof window.Element ||
          (null !== n &&
            "object" == typeof n &&
            1 === n.nodeType &&
            "object" == typeof n.style &&
            "object" == typeof n.ownerDocument)
        );
      }
      function Un(n, e) {
        return (
          void 0 === e && (e = document),
          Bn(n) ? n : "string" == typeof n ? e.querySelector(n) : void 0
        );
      }
      function Hn(n, e) {
        void 0 === e && (e = document);
        var t = Un(n, e);
        if (t) return t;
        throw new Error("Can not find element: " + yn(n));
      }
      function Jn(n) {
        return new v(function (e, t) {
          var r = yn(n),
            o = Un(n);
          if (o) return e(o);
          if (Dn())
            return t(
              new Error(
                "Document is ready and element " + r + " does not exist"
              )
            );
          var i = setInterval(function () {
            return (o = Un(n))
              ? (clearInterval(i), e(o))
              : Dn()
              ? (clearInterval(i),
                t(
                  new Error(
                    "Document is ready and element " + r + " does not exist"
                  )
                ))
              : void 0;
          }, 10);
        });
      }
      dn(function () {
        return new v(function (n) {
          if (Dn() || Wn()) return n();
          var e = setInterval(function () {
            if (Dn() || Wn()) return clearInterval(e), n();
          }, 10);
        });
      });
      var $n,
        Kn = (function (n) {
          function e() {
            return n.apply(this, arguments) || this;
          }
          return c(e, n), e;
        })(qn);
      function Vn(n, e) {
        var t = (e = e || {}).width,
          r = e.height,
          o = 0,
          i = 0;
        t &&
          (window.outerWidth
            ? (i = Math.round((window.outerWidth - t) / 2) + window.screenX)
            : window.screen.width &&
              (i = Math.round((window.screen.width - t) / 2))),
          r &&
            (window.outerHeight
              ? (o = Math.round((window.outerHeight - r) / 2) + window.screenY)
              : window.screen.height &&
                (o = Math.round((window.screen.height - r) / 2))),
          t &&
            r &&
            (e = s(
              {
                top: o,
                left: i,
                width: t,
                height: r,
                status: 1,
                toolbar: 0,
                menubar: 0,
                resizable: 1,
                scrollbars: 1,
              },
              e
            ));
        var a = e.name || "";
        delete e.name;
        var u,
          c,
          d = Object.keys(e)
            .map(function (n) {
              if (null != e[n]) return n + "=" + yn(e[n]);
            })
            .filter(Boolean)
            .join(",");
        try {
          u = window.open(n, a, d, !0);
        } catch (c) {
          throw new Kn("Can not open popup window - " + (c.stack || c.message));
        }
        if (L(u)) throw new Kn("Can not open popup window - blocked");
        return (
          window.addEventListener("unload", function () {
            return u.close();
          }),
          u
        );
      }
      function Zn(n, e) {
        var t = e.tagName.toLowerCase();
        if ("html" !== t)
          throw new Error("Expected element to be html, got " + t);
        for (
          var r = n.document.documentElement, o = 0, i = En(r.children);
          o < i.length;
          o++
        )
          r.removeChild(i[o]);
        for (var a = 0, u = En(e.children); a < u.length; a++)
          r.appendChild(u[a]);
      }
      function Gn(n) {
        if (($n = $n || new Z()).has(n)) {
          var e = $n.get(n);
          if (e) return e;
        }
        var t = new v(function (e, t) {
          n.addEventListener("load", function () {
            (function (n) {
              if (
                ((function () {
                  for (var n = 0; n < W.length; n++) {
                    var e = !1;
                    try {
                      e = W[n].closed;
                    } catch (n) {}
                    e && (S.splice(n, 1), W.splice(n, 1));
                  }
                })(),
                n && n.contentWindow)
              )
                try {
                  W.push(n.contentWindow), S.push(n);
                } catch (n) {}
            })(n),
              e(n);
          }),
            n.addEventListener("error", function (r) {
              n.contentWindow ? e(n) : t(r);
            });
        });
        return $n.set(n, t), t;
      }
      function Xn(n) {
        return Gn(n).then(function (n) {
          if (!n.contentWindow)
            throw new Error("Could not find window in iframe");
          return n.contentWindow;
        });
      }
      function Yn(n, e) {
        void 0 === n && (n = {});
        var t = n.style || {},
          r = (function (n, e, t) {
            void 0 === n && (n = "div"),
              void 0 === e && (e = {}),
              (n = n.toLowerCase());
            var r,
              o,
              i,
              a = document.createElement(n);
            if (
              (e.style && mn(a.style, e.style),
              e.class && (a.className = e.class.join(" ")),
              e.id && a.setAttribute("id", e.id),
              e.attributes)
            )
              for (
                var u = 0, c = Object.keys(e.attributes);
                u < c.length;
                u++
              ) {
                var s = c[u];
                a.setAttribute(s, e.attributes[s]);
              }
            if (
              (e.styleSheet &&
                ((r = a),
                (o = e.styleSheet),
                void 0 === i && (i = window.document),
                r.styleSheet
                  ? (r.styleSheet.cssText = o)
                  : r.appendChild(i.createTextNode(o))),
              e.html)
            ) {
              if ("iframe" === n)
                throw new Error(
                  "Iframe html can not be written unless container provided and iframe in DOM"
                );
              a.innerHTML = e.html;
            }
            return a;
          })("iframe", {
            attributes: s({ allowTransparency: "true" }, n.attributes || {}),
            style: s({ backgroundColor: "transparent", border: "none" }, t),
            html: n.html,
            class: n.class,
          }),
          o = window.navigator.userAgent.match(/MSIE|Edge/i);
        return (
          r.hasAttribute("id") || r.setAttribute("id", on()),
          Gn(r),
          e && Hn(e).appendChild(r),
          (n.url || o) && r.setAttribute("src", n.url || "about:blank"),
          r
        );
      }
      function Qn(n, e, t) {
        return (
          n.addEventListener(e, t),
          {
            cancel: function () {
              n.removeEventListener(e, t);
            },
          }
        );
      }
      function ne(n, e, t) {
        t = hn(t);
        for (var r = 0; r < e.length; r++) n.addEventListener(e[r], t);
        return {
          cancel: hn(function () {
            for (var r = 0; r < e.length; r++) n.removeEventListener(e[r], t);
          }),
        };
      }
      var ee = ["webkit", "moz", "ms", "o"],
        te = [
          "animationstart",
          "webkitAnimationStart",
          "oAnimationStart",
          "MSAnimationStart",
        ],
        re = [
          "animationend",
          "webkitAnimationEnd",
          "oAnimationEnd",
          "MSAnimationEnd",
        ];
      function oe(n, e, t, r) {
        return (
          void 0 === r && (r = 1e3),
          new v(function (o, i) {
            var a = Hn(n);
            if (!a) return o();
            var u,
              c,
              s,
              d,
              f = !1;
            function l() {
              clearTimeout(u), clearTimeout(c), s.cancel(), d.cancel();
            }
            (s = ne(a, te, function (n) {
              n.target === a &&
                n.animationName === e &&
                (clearTimeout(u),
                n.stopPropagation(),
                s.cancel(),
                (f = !0),
                (c = setTimeout(function () {
                  l(), o();
                }, r)));
            })),
              (d = ne(a, re, function (n) {
                if (n.target === a && n.animationName === e)
                  return (
                    l(),
                    "string" == typeof n.animationName && n.animationName !== e
                      ? i(
                          "Expected animation name to be " +
                            e +
                            ", found " +
                            n.animationName
                        )
                      : o()
                  );
              })),
              (function (n, e, t) {
                n.style[e] = t;
                for (
                  var r =
                      (i = e).charAt(0).toUpperCase() +
                      i.slice(1).toLowerCase(),
                    o = 0;
                  o < ee.length;
                  o++
                )
                  n.style["" + ee[o] + r] = t;
                var i;
              })(a, "animationName", e),
              (u = setTimeout(function () {
                if (!f) return l(), o();
              }, 200)),
              t && t(l);
          })
        );
      }
      function ie(n) {
        n.style.setProperty("display", "");
      }
      function ae(n) {
        n.style.setProperty("display", "none", "important");
      }
      function ue(n) {
        n && n.parentNode && n.parentNode.removeChild(n);
      }
      function ce(n) {
        return !n || !n.parentNode;
      }
      function se(n, e, t) {
        var r = void 0 === t ? {} : t,
          o = r.width,
          i = void 0 === o || o,
          a = r.height,
          u = void 0 === a || a,
          c = r.interval,
          s = void 0 === c ? 100 : c,
          d = r.win,
          f = void 0 === d ? window : d,
          l = n.offsetWidth,
          p = n.offsetHeight,
          h = !1;
        e({ width: l, height: p });
        var w,
          y,
          m = function () {
            if (
              !h &&
              (function (n) {
                return Boolean(
                  n.offsetWidth || n.offsetHeight || n.getClientRects().length
                );
              })(n)
            ) {
              var t = n.offsetWidth,
                r = n.offsetHeight;
              ((i && t !== l) || (u && r !== p)) && e({ width: t, height: r }),
                (l = t),
                (p = r);
            }
          };
        return (
          f.addEventListener("resize", m),
          void 0 !== f.ResizeObserver
            ? ((w = new f.ResizeObserver(m)).observe(n), (y = Pn(m, 10 * s)))
            : void 0 !== f.MutationObserver
            ? ((w = new f.MutationObserver(m)).observe(n, {
                attributes: !0,
                childList: !0,
                subtree: !0,
                characterData: !1,
              }),
              (y = Pn(m, 10 * s)))
            : (y = Pn(m, s)),
          {
            cancel: function () {
              (h = !0),
                w.disconnect(),
                window.removeEventListener("resize", m),
                y.cancel();
            },
          }
        );
      }
      function de(n) {
        for (; n.parentNode; ) n = n.parentNode;
        return "[object ShadowRoot]" === n.toString();
      }
      var fe = "undefined" != typeof document ? document.currentScript : null,
        le = dn(function () {
          if (fe) return fe;
          if (
            (fe = (function () {
              try {
                var n = (function () {
                    try {
                      throw new Error("_");
                    } catch (n) {
                      return n.stack || "";
                    }
                  })(),
                  e = /.*at [^(]*\((.*):(.+):(.+)\)$/gi.exec(n),
                  t = e && e[1];
                if (!t) return;
                for (
                  var r = 0,
                    o = [].slice
                      .call(document.getElementsByTagName("script"))
                      .reverse();
                  r < o.length;
                  r++
                ) {
                  var i = o[r];
                  if (i.src && i.src === t) return i;
                }
              } catch (n) {}
            })())
          )
            return fe;
          throw new Error("Can not determine current script");
        }),
        pe = on(),
        he = dn(function () {
          var n;
          try {
            n = le();
          } catch (n) {
            return pe;
          }
          var e = n.getAttribute("data-uid");
          return (
            (e && "string" == typeof e) ||
              ((e = n.getAttribute("data-uid-auto")) && "string" == typeof e) ||
              ((e = on()), n.setAttribute("data-uid-auto", e)),
            e
          );
        }),
        we = [];
      function ye(n) {
        var e = n.url,
          t = n.method,
          r = void 0 === t ? "get" : t,
          o = n.headers,
          i = void 0 === o ? {} : o,
          a = n.json,
          u = n.data,
          c = n.body,
          s = n.win,
          d = void 0 === s ? window : s,
          f = n.timeout,
          l = void 0 === f ? 0 : f;
        return new v(function (n, t) {
          if ((a && u) || (a && c) || (u && a))
            throw new Error(
              "Only options.json or options.data or options.body should be passed"
            );
          for (var o = {}, s = 0, f = Object.keys(i); s < f.length; s++) {
            var p = f[s];
            o[p.toLowerCase()] = i[p];
          }
          a
            ? (o["content-type"] = o["content-type"] || "application/json")
            : (u || c) &&
              (o["content-type"] =
                o["content-type"] ||
                "application/x-www-form-urlencoded; charset=utf-8"),
            (o.accept = o.accept || "application/json");
          for (var h = 0; h < we.length; h++)
            for (
              var w = (0, we[h])(), y = 0, m = Object.keys(w);
              y < m.length;
              y++
            ) {
              var v = m[y];
              o[v.toLowerCase()] = w[v];
            }
          var g = new d.XMLHttpRequest();
          for (var b in (g.addEventListener(
            "load",
            function () {
              var o = (function (n) {
                void 0 === n && (n = "");
                for (
                  var e = {}, t = 0, r = n.trim().split("\n");
                  t < r.length;
                  t++
                ) {
                  var o = r[t].split(":"),
                    i = o[0],
                    a = o.slice(1);
                  e[i.toLowerCase()] = a.join(":").trim();
                }
                return e;
              })(this.getAllResponseHeaders());
              if (!this.status)
                return t(
                  new Error(
                    "Request to " +
                      r.toLowerCase() +
                      " " +
                      e +
                      " failed: no response status code."
                  )
                );
              var i = o["content-type"],
                a =
                  i &&
                  (0 === i.indexOf("application/json") ||
                    0 === i.indexOf("text/json")),
                u = this.responseText;
              try {
                u = JSON.parse(u);
              } catch (n) {
                if (a)
                  return t(
                    new Error("Invalid json: " + this.responseText + ".")
                  );
              }
              return n({ status: this.status, headers: o, body: u });
            },
            !1
          ),
          g.addEventListener(
            "error",
            function (n) {
              t(
                new Error(
                  "Request to " +
                    r.toLowerCase() +
                    " " +
                    e +
                    " failed: " +
                    n.toString() +
                    "."
                )
              );
            },
            !1
          ),
          g.open(r, e, !0),
          o))
            o.hasOwnProperty(b) && g.setRequestHeader(b, o[b]);
          a
            ? (c = JSON.stringify(a))
            : u &&
              (c = Object.keys(u)
                .map(function (n) {
                  return (
                    encodeURIComponent(n) +
                    "=" +
                    (u ? encodeURIComponent(u[n]) : "")
                  );
                })
                .join("&")),
            (g.timeout = l),
            (g.ontimeout = function () {
              t(
                new Error(
                  "Request to " + r.toLowerCase() + " " + e + " has timed out"
                )
              );
            }),
            g.send(c);
        });
      }
      function me(n) {
        return "string" == typeof n && /^[0-9]+%$/.test(n);
      }
      function ve(n) {
        if ("number" == typeof n) return n;
        var e = n.match(/^([0-9]+)(px|%)$/);
        if (!e) throw new Error("Could not match css value from " + n);
        return parseInt(e[1], 10);
      }
      function ge(n) {
        return ve(n) + "px";
      }
      function be(n) {
        return "number" == typeof n ? ge(n) : me(n) ? n : ge(n);
      }
      function Pe(n, e) {
        if ("number" == typeof n) return n;
        if (me(n)) return parseInt((e * ve(n)) / 100, 10);
        var t;
        if ("string" == typeof (t = n) && /^[0-9]+px$/.test(t)) return ve(n);
        throw new Error("Can not normalize dimension: " + n);
      }
      function xe() {
        return "undefined" != typeof __PROTOCOL__ ? __PROTOCOL__ : "https";
      }
      var _e = dn(function () {
          try {
            return le();
          } catch (n) {
            throw new Error(
              'PayPal Payments SDK script not fiund on page! Expected to find <script src="https://' +
                __SDK_HOST__ +
                __PATH__ +
                '">\n\n' +
                wn(n)
            );
          }
        }),
        Ee = dn(function () {
          for (var n = {}, e = 0, t = _e().attributes; e < t.length; e++) {
            var r = t[e];
            0 === r.name.indexOf("data-") && (n[r.name] = r.value);
          }
          return (n["data-uid"] = he()), n;
        });
      function ke() {
        return "data-csp-nonce", Ee()["data-csp-nonce"] || void 0;
      }
      var Fe = ["warn", "error"],
        Ce = ["error", "warn", "info", "debug"];
      function Me(n) {
        var e = n.url,
          t = n.method,
          r = n.headers,
          o = n.json,
          i = n.enableSendBeacon,
          a = void 0 !== i && i,
          u = r && Object.keys(r).length;
        return window && window.navigator.sendBeacon && !u && a && window.Blob
          ? new v(function (n) {
              var t = new Blob([JSON.stringify(o)], {
                type: "application/json",
              });
              n(window.navigator.sendBeacon(e, t));
            })
          : ye({ url: e, method: t, headers: r, json: o }).then(pn);
      }
      function Oe(n, e) {
        for (var t in e) e.hasOwnProperty(t) && e[t] && !n[t] && (n[t] = e[t]);
      }
      function Ae() {
        return xe() + "://www.paypal.com";
      }
      function je(n) {
        return (
          void 0 === n && (n = ""),
          "" +
            ((e = Ae()),
            "undefined" != typeof window &&
            void 0 !== window.location &&
            C() === e
              ? Ae()
              : xe() + "://cors.api.paypal.com") +
            n
        );
        var e;
      }
      var ze = dn(function () {
          return (function (n) {
            var e = n.url,
              t = n.prefix,
              r = n.logLevel,
              o = void 0 === r ? "warn" : r,
              i = n.transport,
              a = void 0 === i ? Me : i,
              u = n.flushInterval,
              c = void 0 === u ? 6e4 : u,
              d = n.enableSendBeacon,
              f = void 0 !== d && d,
              l = [],
              p = [],
              h = [],
              w = [],
              y = [],
              m = [];
            function g(n, e, t) {
              if (
                Nn() &&
                window.console &&
                window.console.log &&
                !(Ce.indexOf(n) > Ce.indexOf(o))
              ) {
                var r = [e];
                r.push(t),
                  (t.error || t.warning) &&
                    r.push("\n\n", t.error || t.warning);
                try {
                  window.console[n] && window.console[n].apply
                    ? window.console[n].apply(window.console, r)
                    : window.console.log &&
                      window.console.log.apply &&
                      window.console.log.apply(window.console, r);
                } catch (n) {}
              }
            }
            function b() {
              return v.try(function () {
                if (
                  Nn() &&
                  "file:" !== window.location.protocol &&
                  (l.length || p.length)
                ) {
                  for (var n = {}, t = 0; t < w.length; t++)
                    Oe(n, (0, w[t])(n));
                  for (var r = {}, o = 0; o < m.length; o++)
                    Oe(r, (0, m[o])(r));
                  var i = a({
                    method: "POST",
                    url: e,
                    headers: r,
                    json: { events: l, meta: n, tracking: p },
                    enableSendBeacon: f,
                  });
                  return (l = []), (p = []), i.then(pn);
                }
              });
            }
            var P,
              x,
              _,
              E,
              k =
                (void 0 === x && (x = 50),
                tn(function () {
                  E && clearTimeout(E);
                  var n = (_ = _ || new v());
                  return (
                    (E = setTimeout(function () {
                      (_ = null),
                        (E = null),
                        v.try(P).then(
                          function (e) {
                            n.resolve(e);
                          },
                          function (e) {
                            n.reject(e);
                          }
                        );
                    }, x)),
                    n
                  );
                }, en((P = b)) + "::promiseDebounced"));
            function F(n, e, r) {
              if ((void 0 === r && (r = {}), !Nn())) return M;
              t && (e = t + "_" + e);
              for (
                var o = s({}, gn(r), { timestamp: Date.now().toString() }),
                  i = 0;
                i < h.length;
                i++
              )
                Oe(o, (0, h[i])(o));
              return (
                (function (n, e, t) {
                  l.push({ level: n, event: e, payload: t }),
                    -1 !== Fe.indexOf(n) && k();
                })(n, e, o),
                g(n, e, o),
                M
              );
            }
            function C(n, e) {
              return n.push(e), M;
            }
            Nn() && Pn(k, c),
              "object" == typeof window &&
                (window.addEventListener("beforeunload", function () {
                  b();
                }),
                window.addEventListener("unload", function () {
                  b();
                }));
            var M = {
              debug: function (n, e) {
                return F("debug", n, e);
              },
              info: function (n, e) {
                return F("info", n, e);
              },
              warn: function (n, e) {
                return F("warn", n, e);
              },
              error: function (n, e) {
                return F("error", n, e);
              },
              track: function (n) {
                if ((void 0 === n && (n = {}), !Nn())) return M;
                for (var e = gn(n), t = 0; t < y.length; t++)
                  Oe(e, (0, y[t])(e));
                return g("debug", "track", e), p.push(e), M;
              },
              flush: k,
              immediateFlush: b,
              addPayloadBuilder: function (n) {
                return C(h, n);
              },
              addMetaBuilder: function (n) {
                return C(w, n);
              },
              addTrackingBuilder: function (n) {
                return C(y, n);
              },
              addHeaderBuilder: function (n) {
                return C(m, n);
              },
              setTransport: function (n) {
                return (a = n), M;
              },
            };
            return M;
          })({
            url:
              ((n = "/xoplatform/logger/api/logger"),
              void 0 === n && (n = ""),
              "" + Ae() + n),
          });
          var n;
        }),
        qe = [
          "data-amount",
          "data-client-token",
          "data-merchant-id",
          "data-partner-attribution-id",
          "data-enable-3ds",
          "data-sdk-integration-source",
          "data-client-metadata-id",
          "data-uid",
        ];
      function De() {
        for (
          var n = (function () {
              var n = _e().getAttribute("src");
              if (!n) throw new Error("Can not find src for sdk script");
              return n;
            })(),
            e = Ee(),
            t = {},
            r = 0,
            o = Object.keys(e);
          r < o.length;
          r++
        ) {
          var i = o[r];
          -1 !== qe.indexOf(i) && (t[i] = e[i]);
        }
        return rn(JSON.stringify({ url: n, attrs: t })).replace(/\=+$/, "");
      }
      function We(n) {
        void 0 === n && (n = window);
        var e = "__post_robot_10_0_41__";
        return n !== window ? n[e] : (n[e] = n[e] || {});
      }
      dn(function (n) {
        ze().info("rest_api_create_access_token");
        var e = rn(n + ":");
        return ye({
          method: "post",
          url: je("/v1/oauth2/token"),
          headers: { Authorization: "Basic " + e },
          data: { grant_type: "client_credentials" },
        }).then(function (e) {
          var t = e.body;
          if (t && "invalid_client" === t.error)
            throw new Error(
              "Auth Api invalid client id: " +
                n +
                ":\n\n" +
                JSON.stringify(t, null, 4)
            );
          if (!t || !t.access_token)
            throw new Error(
              "Auth Api response error:\n\n" + JSON.stringify(t, null, 4)
            );
          return t.access_token;
        });
      }),
        dn(xn);
      var Se = function () {
        return {};
      };
      function Le(n, e) {
        return (
          void 0 === n && (n = "store"),
          void 0 === e && (e = Se),
          An(We(), n, function () {
            var n = e();
            return {
              has: function (e) {
                return n.hasOwnProperty(e);
              },
              get: function (e, t) {
                return n.hasOwnProperty(e) ? n[e] : t;
              },
              set: function (e, t) {
                return (n[e] = t), t;
              },
              del: function (e) {
                delete n[e];
              },
              getOrSet: function (e, t) {
                return An(n, e, t);
              },
              reset: function () {
                n = e();
              },
              keys: function () {
                return Object.keys(n);
              },
            };
          })
        );
      }
      var Te,
        Re = function () {};
      function Ne() {
        var n = We();
        return (
          (n.WINDOW_WILDCARD = n.WINDOW_WILDCARD || new Re()), n.WINDOW_WILDCARD
        );
      }
      function Ie(n, e) {
        return (
          void 0 === n && (n = "store"),
          void 0 === e && (e = Se),
          Le("windowStore").getOrSet(n, function () {
            var t = new Z(),
              r = function (n) {
                return t.getOrSet(n, e);
              };
            return {
              has: function (e) {
                return r(e).hasOwnProperty(n);
              },
              get: function (e, t) {
                var o = r(e);
                return o.hasOwnProperty(n) ? o[n] : t;
              },
              set: function (e, t) {
                return (r(e)[n] = t), t;
              },
              del: function (e) {
                delete r(e)[n];
              },
              getOrSet: function (e, t) {
                return An(r(e), n, t);
              },
            };
          })
        );
      }
      function Be() {
        return Le("instance").getOrSet("instanceID", on);
      }
      function Ue(n, e) {
        var t = e.domain,
          r = Ie("helloPromises"),
          o = r.get(n);
        o && o.resolve({ domain: t });
        var i = v.resolve({ domain: t });
        return r.set(n, i), i;
      }
      function He(n, e) {
        return (0, e.send)(
          n,
          "postrobot_hello",
          { instanceID: Be() },
          { domain: "*", timeout: -1 }
        ).then(function (e) {
          var t = e.origin,
            r = e.data.instanceID;
          return Ue(n, { domain: t }), { win: n, domain: t, instanceID: r };
        });
      }
      function Je(n, e) {
        var t = e.send;
        return Ie("windowInstanceIDPromises").getOrSet(n, function () {
          return He(n, { send: t }).then(function (n) {
            return n.instanceID;
          });
        });
      }
      function $e(n) {
        Ie("knownWindows").set(n, !0);
      }
      function Ke(n) {
        return (
          "object" == typeof n && null !== n && "string" == typeof n.__type__
        );
      }
      function Ve(n) {
        return void 0 === n
          ? "undefined"
          : null === n
          ? "null"
          : Array.isArray(n)
          ? "array"
          : "function" == typeof n
          ? "function"
          : "object" == typeof n
          ? n instanceof Error
            ? "error"
            : "function" == typeof n.then
            ? "promise"
            : "[object RegExp]" === {}.toString.call(n)
            ? "regex"
            : "[object Date]" === {}.toString.call(n)
            ? "date"
            : "object"
          : "string" == typeof n
          ? "string"
          : "number" == typeof n
          ? "number"
          : "boolean" == typeof n
          ? "boolean"
          : void 0;
      }
      function Ze(n, e) {
        return { __type__: n, __val__: e };
      }
      var Ge,
        Xe =
          (((Te = {}).function = function () {}),
          (Te.error = function (n) {
            return Ze("error", {
              message: n.message,
              stack: n.stack,
              code: n.code,
              data: n.data,
            });
          }),
          (Te.promise = function () {}),
          (Te.regex = function (n) {
            return Ze("regex", n.source);
          }),
          (Te.date = function (n) {
            return Ze("date", n.toJSON());
          }),
          (Te.array = function (n) {
            return n;
          }),
          (Te.object = function (n) {
            return n;
          }),
          (Te.string = function (n) {
            return n;
          }),
          (Te.number = function (n) {
            return n;
          }),
          (Te.boolean = function (n) {
            return n;
          }),
          (Te.null = function (n) {
            return n;
          }),
          Te),
        Ye = {},
        Qe =
          (((Ge = {}).function = function () {
            throw new Error(
              "Function serialization is not implemented; nothing to deserialize"
            );
          }),
          (Ge.error = function (n) {
            var e = n.stack,
              t = n.code,
              r = n.data,
              o = new Error(n.message);
            return (
              (o.code = t),
              r && (o.data = r),
              (o.stack = e + "\n\n" + o.stack),
              o
            );
          }),
          (Ge.promise = function () {
            throw new Error(
              "Promise serialization is not implemented; nothing to deserialize"
            );
          }),
          (Ge.regex = function (n) {
            return new RegExp(n);
          }),
          (Ge.date = function (n) {
            return new Date(n);
          }),
          (Ge.array = function (n) {
            return n;
          }),
          (Ge.object = function (n) {
            return n;
          }),
          (Ge.string = function (n) {
            return n;
          }),
          (Ge.number = function (n) {
            return n;
          }),
          (Ge.boolean = function (n) {
            return n;
          }),
          (Ge.null = function (n) {
            return n;
          }),
          Ge),
        nt = {};
      function et() {
        for (
          var n = Le("idToProxyWindow"), e = 0, t = n.keys();
          e < t.length;
          e++
        ) {
          var r = t[e];
          n.get(r).shouldClean() && n.del(r);
        }
      }
      function tt(n, e) {
        var t = e.send,
          r = e.id,
          o = void 0 === r ? on() : r,
          i = n.then(function (n) {
            if (M(n)) return O(n).name;
          }),
          a = n.then(function (n) {
            if (L(n))
              throw new Error("Window is closed, can not determine type");
            return E(n) ? b.POPUP : b.IFRAME;
          });
        return (
          i.catch(pn),
          a.catch(pn),
          {
            id: o,
            getType: function () {
              return a;
            },
            getInstanceID: fn(function () {
              return n.then(function (n) {
                return Je(n, { send: t });
              });
            }),
            close: function () {
              return n.then($);
            },
            getName: function () {
              return n.then(function (n) {
                if (!L(n)) return M(n) ? O(n).name : i;
              });
            },
            focus: function () {
              return n.then(function (n) {
                n.focus();
              });
            },
            isClosed: function () {
              return n.then(function (n) {
                return L(n);
              });
            },
            setLocation: function (e) {
              return n.then(function (n) {
                var t = window.location.protocol + "//" + window.location.host;
                if (0 === e.indexOf("/")) e = "" + t + e;
                else if (!e.match(/^https?:\/\//) && 0 !== e.indexOf(t))
                  throw new Error(
                    "Expected url to be http or https url, or absolute path, got " +
                      JSON.stringify(e)
                  );
                if (M(n))
                  try {
                    if (n.location && "function" == typeof n.location.replace)
                      return void n.location.replace(e);
                  } catch (n) {}
                n.location = e;
              });
            },
            setName: function (e) {
              return n.then(function (n) {
                var t = M(n),
                  r = (function (n) {
                    if (M(n)) return O(n).frameElement;
                    for (
                      var e = 0, t = document.querySelectorAll("iframe");
                      e < t.length;
                      e++
                    ) {
                      var r = t[e];
                      if (r && r.contentWindow && r.contentWindow === n)
                        return r;
                    }
                  })(n);
                if (!t)
                  throw new Error(
                    "Can not set name for cross-domain window: " + e
                  );
                (O(n).name = e),
                  r && r.setAttribute("name", e),
                  (i = v.resolve(e));
              });
            },
          }
        );
      }
      new v(function (n) {
        if (window.document && window.document.body)
          return n(window.document.body);
        var e = setInterval(function () {
          if (window.document && window.document.body)
            return clearInterval(e), n(window.document.body);
        }, 10);
      });
      var rt = (function () {
        function n(n) {
          var e = n.send,
            t = n.win,
            r = n.serializedWindow;
          (this.id = void 0),
            (this.isProxyWindow = !0),
            (this.serializedWindow = void 0),
            (this.actualWindow = void 0),
            (this.actualWindowPromise = void 0),
            (this.send = void 0),
            (this.name = void 0),
            (this.actualWindowPromise = new v()),
            (this.serializedWindow =
              r || tt(this.actualWindowPromise, { send: e })),
            Le("idToProxyWindow").set(this.getID(), this),
            t && this.setWindow(t, { send: e });
        }
        var e = n.prototype;
        return (
          (e.getID = function () {
            return this.serializedWindow.id;
          }),
          (e.getType = function () {
            return this.serializedWindow.getType();
          }),
          (e.isPopup = function () {
            return this.getType().then(function (n) {
              return n === b.POPUP;
            });
          }),
          (e.setLocation = function (n) {
            var e = this;
            return this.serializedWindow.setLocation(n).then(function () {
              return e;
            });
          }),
          (e.getName = function () {
            return this.serializedWindow.getName();
          }),
          (e.setName = function (n) {
            var e = this;
            return this.serializedWindow.setName(n).then(function () {
              return e;
            });
          }),
          (e.close = function () {
            var n = this;
            return this.serializedWindow.close().then(function () {
              return n;
            });
          }),
          (e.focus = function () {
            var n = this,
              e = this.isPopup(),
              t = this.getName(),
              r = v.hash({ isPopup: e, name: t }).then(function (n) {
                var e = n.name;
                n.isPopup && e && window.open("", e);
              }),
              o = this.serializedWindow.focus();
            return v.all([r, o]).then(function () {
              return n;
            });
          }),
          (e.isClosed = function () {
            return this.serializedWindow.isClosed();
          }),
          (e.getWindow = function () {
            return this.actualWindow;
          }),
          (e.setWindow = function (n, e) {
            var t = e.send;
            (this.actualWindow = n),
              this.actualWindowPromise.resolve(this.actualWindow),
              (this.serializedWindow = tt(this.actualWindowPromise, {
                send: t,
                id: this.getID(),
              })),
              Ie("winToProxyWindow").set(n, this);
          }),
          (e.awaitWindow = function () {
            return this.actualWindowPromise;
          }),
          (e.matchWindow = function (n, e) {
            var t = this,
              r = e.send;
            return v.try(function () {
              return t.actualWindow
                ? n === t.actualWindow
                : v
                    .hash({
                      proxyInstanceID: t.getInstanceID(),
                      knownWindowInstanceID: Je(n, { send: r }),
                    })
                    .then(function (e) {
                      var o = e.proxyInstanceID === e.knownWindowInstanceID;
                      return o && t.setWindow(n, { send: r }), o;
                    });
            });
          }),
          (e.unwrap = function () {
            return this.actualWindow || this;
          }),
          (e.getInstanceID = function () {
            return this.serializedWindow.getInstanceID();
          }),
          (e.shouldClean = function () {
            return Boolean(this.actualWindow && L(this.actualWindow));
          }),
          (e.serialize = function () {
            return this.serializedWindow;
          }),
          (n.unwrap = function (e) {
            return n.isProxyWindow(e) ? e.unwrap() : e;
          }),
          (n.serialize = function (e, t) {
            var r = t.send;
            return et(), n.toProxyWindow(e, { send: r }).serialize();
          }),
          (n.deserialize = function (e, t) {
            var r = t.send;
            return (
              et(),
              Le("idToProxyWindow").get(e.id) ||
                new n({ serializedWindow: e, send: r })
            );
          }),
          (n.isProxyWindow = function (n) {
            return Boolean(n && !J(n) && n.isProxyWindow);
          }),
          (n.toProxyWindow = function (e, t) {
            var r = t.send;
            if ((et(), n.isProxyWindow(e))) return e;
            var o = e;
            return Ie("winToProxyWindow").get(o) || new n({ win: o, send: r });
          }),
          n
        );
      })();
      function ot(n, e, t, r, o) {
        var i = Ie("methodStore"),
          a = Le("proxyWindowMethods");
        rt.isProxyWindow(r)
          ? a.set(n, { val: e, name: t, domain: o, source: r })
          : (a.del(n),
            (i.getOrSet(r, function () {
              return {};
            })[n] = { domain: o, name: t, val: e, source: r }));
      }
      function it(n, e) {
        var t = Ie("methodStore"),
          r = Le("proxyWindowMethods");
        return (
          t.getOrSet(n, function () {
            return {};
          })[e] || r.get(e)
        );
      }
      function at(n, e, t, r, o) {
        var i, a, u;
        (a = (i = { on: o.on, send: o.send }).on),
          (u = i.send),
          Le("builtinListeners").getOrSet("functionCalls", function () {
            return a("postrobot_method", { domain: "*" }, function (n) {
              var e = n.source,
                t = n.origin,
                r = n.data,
                o = r.id,
                i = r.name,
                a = it(e, o);
              if (!a)
                throw new Error(
                  "Could not find method '" +
                    i +
                    "' with id: " +
                    r.id +
                    " in " +
                    C(window)
                );
              var c = a.source,
                s = a.domain,
                d = a.val;
              return v
                .try(function () {
                  if (!B(s, t))
                    throw new Error(
                      "Method '" +
                        r.name +
                        "' domain " +
                        JSON.stringify(
                          On(a.domain) ? a.domain.source : a.domain
                        ) +
                        " does not match origin " +
                        t +
                        " in " +
                        C(window)
                    );
                  if (rt.isProxyWindow(c))
                    return c.matchWindow(e, { send: u }).then(function (n) {
                      if (!n)
                        throw new Error(
                          "Method call '" +
                            r.name +
                            "' failed - proxy window does not match source in " +
                            C(window)
                        );
                    });
                })
                .then(
                  function () {
                    return d.apply({ source: e, origin: t }, r.args);
                  },
                  function (n) {
                    return v
                      .try(function () {
                        if (d.onError) return d.onError(n);
                      })
                      .then(function () {
                        var e;
                        throw (
                          (n.stack &&
                            (n.stack =
                              "Remote call to " +
                              i +
                              "(" +
                              (void 0 === (e = r.args) && (e = []),
                              En(e)
                                .map(function (n) {
                                  return "string" == typeof n
                                    ? "'" + n + "'"
                                    : void 0 === n
                                    ? "undefined"
                                    : null === n
                                    ? "null"
                                    : "boolean" == typeof n
                                    ? n.toString()
                                    : Array.isArray(n)
                                    ? "[ ... ]"
                                    : "object" == typeof n
                                    ? "{ ... }"
                                    : "function" == typeof n
                                    ? "() => { ... }"
                                    : "<" + typeof n + ">";
                                })
                                .join(", ") + ") failed\n\n") +
                              n.stack),
                          n)
                        );
                      });
                  }
                )
                .then(function (n) {
                  return { result: n, id: o, name: i };
                });
            });
          });
        var c = t.__id__ || on();
        n = rt.unwrap(n);
        var s = t.__name__ || t.name || r;
        return (
          "string" == typeof s &&
            "function" == typeof s.indexOf &&
            0 === s.indexOf("anonymous::") &&
            (s = s.replace("anonymous::", r + "::")),
          rt.isProxyWindow(n)
            ? (ot(c, t, s, n, e),
              n.awaitWindow().then(function (n) {
                ot(c, t, s, n, e);
              }))
            : ot(c, t, s, n, e),
          Ze("cross_domain_function", { id: c, name: s })
        );
      }
      function ut(n, e, t, r) {
        var o,
          i = r.on,
          a = r.send;
        return (function (n, e) {
          void 0 === e && (e = Ye);
          var t = JSON.stringify(n, function (n) {
            var t = this[n];
            if (Ke(this)) return t;
            var r = Ve(t);
            if (!r) return t;
            var o = e[r] || Xe[r];
            return o ? o(t, n) : t;
          });
          return void 0 === t ? "undefined" : t;
        })(
          t,
          (((o = {}).promise = function (t, r) {
            return (function (n, e, t, r, o) {
              return Ze("cross_domain_zalgo_promise", {
                then: at(
                  n,
                  e,
                  function (n, e) {
                    return t.then(n, e);
                  },
                  r,
                  { on: o.on, send: o.send }
                ),
              });
            })(n, e, t, r, { on: i, send: a });
          }),
          (o.function = function (t, r) {
            return at(n, e, t, r, { on: i, send: a });
          }),
          (o.object = function (n) {
            return J(n) || rt.isProxyWindow(n)
              ? Ze("cross_domain_window", rt.serialize(n, { send: a }))
              : n;
          }),
          o)
        );
      }
      function ct(n, e, t, r) {
        var o,
          i = r.send;
        return (function (n, e) {
          if ((void 0 === e && (e = nt), "undefined" !== n))
            return JSON.parse(n, function (n, t) {
              if (Ke(this)) return t;
              var r, o;
              if (
                (Ke(t)
                  ? ((r = t.__type__), (o = t.__val__))
                  : ((r = Ve(t)), (o = t)),
                !r)
              )
                return o;
              var i = e[r] || Qe[r];
              return i ? i(o, n) : o;
            });
        })(
          t,
          (((o = {}).cross_domain_zalgo_promise = function (n) {
            return (function (n, e, t) {
              return new v(t.then);
            })(0, 0, n);
          }),
          (o.cross_domain_function = function (t) {
            return (function (n, e, t, r) {
              var o = t.id,
                i = t.name,
                a = r.send,
                u = function (t) {
                  function r() {
                    var u = arguments;
                    return rt
                      .toProxyWindow(n, { send: a })
                      .awaitWindow()
                      .then(function (n) {
                        var c = it(n, o);
                        if (c && c.val !== r)
                          return c.val.apply(
                            { source: window, origin: C() },
                            u
                          );
                        var s = [].slice.call(u);
                        return t.fireAndForget
                          ? a(
                              n,
                              "postrobot_method",
                              { id: o, name: i, args: s },
                              { domain: e, fireAndForget: !0 }
                            )
                          : a(
                              n,
                              "postrobot_method",
                              { id: o, name: i, args: s },
                              { domain: e, fireAndForget: !1 }
                            ).then(function (n) {
                              return n.data.result;
                            });
                      })
                      .catch(function (n) {
                        throw n;
                      });
                  }
                  return (
                    void 0 === t && (t = {}),
                    (r.__name__ = i),
                    (r.__origin__ = e),
                    (r.__source__ = n),
                    (r.__id__ = o),
                    (r.origin = e),
                    r
                  );
                },
                c = u();
              return (c.fireAndForget = u({ fireAndForget: !0 })), c;
            })(n, e, t, { send: i });
          }),
          (o.cross_domain_window = function (n) {
            return rt.deserialize(n, { send: i });
          }),
          o)
        );
      }
      var st = {};
      function dt(n, e, t, r) {
        var o = r.on,
          i = r.send;
        return v
          .try(function () {
            var r = Ie().getOrSet(n, function () {
              return {};
            });
            return (
              (r.buffer = r.buffer || []),
              r.buffer.push(t),
              (r.flush =
                r.flush ||
                v.flush().then(function () {
                  if (L(n)) throw new Error("Window is closed");
                  var t,
                    a = ut(
                      n,
                      e,
                      (((t = {}).__post_robot_10_0_41__ = r.buffer || []), t),
                      { on: o, send: i }
                    );
                  delete r.buffer;
                  for (
                    var u = Object.keys(st), c = [], s = 0;
                    s < u.length;
                    s++
                  ) {
                    var d = u[s];
                    try {
                      st[d](n, a, e);
                    } catch (n) {
                      c.push(n);
                    }
                  }
                  if (c.length === u.length)
                    throw new Error(
                      "All post-robot messaging strategies failed:\n\n" +
                        c
                          .map(function (n, e) {
                            return e + ". " + wn(n);
                          })
                          .join("\n\n")
                    );
                })),
              r.flush.then(function () {
                delete r.flush;
              })
            );
          })
          .then(pn);
      }
      function ft(n) {
        return Le("responseListeners").get(n);
      }
      function lt(n) {
        Le("responseListeners").del(n);
      }
      function pt(n) {
        return Le("erroredResponseListeners").has(n);
      }
      function ht(n) {
        var e = n.name,
          t = n.win,
          r = n.domain,
          o = Ie("requestListeners");
        if (("*" === t && (t = null), "*" === r && (r = null), !e))
          throw new Error("Name required to get request listener");
        for (var i = 0, a = [t, Ne()]; i < a.length; i++) {
          var u = a[i];
          if (u) {
            var c = o.get(u);
            if (c) {
              var s = c[e];
              if (s) {
                if (r && "string" == typeof r) {
                  if (s[r]) return s[r];
                  if (s.__domain_regex__)
                    for (var d = 0, f = s.__domain_regex__; d < f.length; d++) {
                      var l = f[d],
                        p = l.listener;
                      if (B(l.regex, r)) return p;
                    }
                }
                if (s["*"]) return s["*"];
              }
            }
          }
        }
      }
      function wt(n, e, t, r) {
        var o = r.on,
          i = r.send,
          a = ht({ name: t.name, win: n, domain: e }),
          u =
            "postrobot_method" === t.name &&
            t.data &&
            "string" == typeof t.data.name
              ? t.data.name + "()"
              : t.name;
        function c(r, a, c) {
          return v.flush().then(function () {
            if (!t.fireAndForget && !L(n))
              try {
                return dt(
                  n,
                  e,
                  {
                    id: on(),
                    origin: C(window),
                    type: "postrobot_message_response",
                    hash: t.hash,
                    name: t.name,
                    ack: r,
                    data: a,
                    error: c,
                  },
                  { on: o, send: i }
                );
              } catch (n) {
                throw new Error(
                  "Send response message failed for " +
                    u +
                    " in " +
                    C() +
                    "\n\n" +
                    wn(n)
                );
              }
          });
        }
        return v
          .all([
            v.flush().then(function () {
              if (!t.fireAndForget && !L(n))
                try {
                  return dt(
                    n,
                    e,
                    {
                      id: on(),
                      origin: C(window),
                      type: "postrobot_message_ack",
                      hash: t.hash,
                      name: t.name,
                    },
                    { on: o, send: i }
                  );
                } catch (n) {
                  throw new Error(
                    "Send ack message failed for " +
                      u +
                      " in " +
                      C() +
                      "\n\n" +
                      wn(n)
                  );
                }
            }),
            v
              .try(function () {
                if (!a)
                  throw new Error(
                    "No handler found for post message: " +
                      t.name +
                      " from " +
                      e +
                      " in " +
                      window.location.protocol +
                      "//" +
                      window.location.host +
                      window.location.pathname
                  );
                if (!B(a.domain, e))
                  throw new Error(
                    "Request origin " +
                      e +
                      " does not match domain " +
                      a.domain.toString()
                  );
                return a.handler({ source: n, origin: e, data: t.data });
              })
              .then(
                function (n) {
                  return c("success", n);
                },
                function (n) {
                  return c("error", null, n);
                }
              ),
          ])
          .then(pn)
          .catch(function (n) {
            if (a && a.handleError) return a.handleError(n);
            throw n;
          });
      }
      function yt(n, e, t) {
        if (!pt(t.hash)) {
          var r = ft(t.hash);
          if (!r)
            throw new Error(
              "No handler found for post message ack for message: " +
                t.name +
                " from " +
                e +
                " in " +
                window.location.protocol +
                "//" +
                window.location.host +
                window.location.pathname
            );
          try {
            if (!B(r.domain, e))
              throw new Error(
                "Ack origin " +
                  e +
                  " does not match domain " +
                  r.domain.toString()
              );
            if (n !== r.win)
              throw new Error("Ack source does not match registered window");
          } catch (n) {
            r.promise.reject(n);
          }
          r.ack = !0;
        }
      }
      function mt(n, e, t) {
        if (!pt(t.hash)) {
          var r,
            o = ft(t.hash);
          if (!o)
            throw new Error(
              "No handler found for post message response for message: " +
                t.name +
                " from " +
                e +
                " in " +
                window.location.protocol +
                "//" +
                window.location.host +
                window.location.pathname
            );
          if (!B(o.domain, e))
            throw new Error(
              "Response origin " +
                e +
                " does not match domain " +
                ((r = o.domain),
                Array.isArray(r)
                  ? "(" + r.join(" | ") + ")"
                  : g(r)
                  ? "RegExp(" + r.toString()
                  : r.toString())
            );
          if (n !== o.win)
            throw new Error("Response source does not match registered window");
          lt(t.hash),
            "error" === t.ack
              ? o.promise.reject(t.error)
              : "success" === t.ack &&
                o.promise.resolve({ source: n, origin: e, data: t.data });
        }
      }
      function vt(n, e) {
        var t = e.on,
          r = e.send,
          o = Le("receivedMessages");
        try {
          if (!window || window.closed || !n.source) return;
        } catch (n) {
          return;
        }
        var i = n.source,
          a = n.origin,
          u = (function (n, e, t, r) {
            var o,
              i = r.on,
              a = r.send;
            try {
              o = ct(e, t, n, { on: i, send: a });
            } catch (n) {
              return;
            }
            if (o && "object" == typeof o && null !== o) {
              var u = o.__post_robot_10_0_41__;
              if (Array.isArray(u)) return u;
            }
          })(n.data, i, a, { on: t, send: r });
        if (u) {
          $e(i);
          for (var c = 0; c < u.length; c++) {
            var s = u[c];
            if (o.has(s.id)) return;
            if ((o.set(s.id, !0), L(i) && !s.fireAndForget)) return;
            0 === s.origin.indexOf("file:") && (a = "file://");
            try {
              "postrobot_message_request" === s.type
                ? wt(i, a, s, { on: t, send: r })
                : "postrobot_message_response" === s.type
                ? mt(i, a, s)
                : "postrobot_message_ack" === s.type && yt(i, a, s);
            } catch (n) {
              setTimeout(function () {
                throw n;
              }, 0);
            }
          }
        }
      }
      function gt(n, e, t) {
        if (!n) throw new Error("Expected name");
        if (("function" == typeof (e = e || {}) && ((t = e), (e = {})), !t))
          throw new Error("Expected handler");
        ((e = e || {}).name = n), (e.handler = t || e.handler);
        var r = e.window,
          o = e.domain,
          i = (function n(e, t) {
            var r = e.name,
              o = e.win,
              i = e.domain,
              a = Ie("requestListeners");
            if (!r || "string" != typeof r)
              throw new Error("Name required to add request listener");
            if (Array.isArray(o)) {
              for (var u = [], c = 0, s = o; c < s.length; c++)
                u.push(n({ name: r, domain: i, win: s[c] }, t));
              return {
                cancel: function () {
                  for (var n = 0; n < u.length; n++) u[n].cancel();
                },
              };
            }
            if (Array.isArray(i)) {
              for (var d = [], f = 0, l = i; f < l.length; f++)
                d.push(n({ name: r, win: o, domain: l[f] }, t));
              return {
                cancel: function () {
                  for (var n = 0; n < d.length; n++) d[n].cancel();
                },
              };
            }
            var p = ht({ name: r, win: o, domain: i });
            if (((o && "*" !== o) || (o = Ne()), (i = i || "*"), p))
              throw o && i
                ? new Error(
                    "Request listener already exists for " +
                      r +
                      " on domain " +
                      i.toString() +
                      " for " +
                      (o === Ne() ? "wildcard" : "specified") +
                      " window"
                  )
                : o
                ? new Error(
                    "Request listener already exists for " +
                      r +
                      " for " +
                      (o === Ne() ? "wildcard" : "specified") +
                      " window"
                  )
                : i
                ? new Error(
                    "Request listener already exists for " +
                      r +
                      " on domain " +
                      i.toString()
                  )
                : new Error("Request listener already exists for " + r);
            var h,
              w,
              y = a.getOrSet(o, function () {
                return {};
              }),
              m = An(y, r, function () {
                return {};
              }),
              v = i.toString();
            return (
              On(i)
                ? (h = An(m, "__domain_regex__", function () {
                    return [];
                  })).push((w = { regex: i, listener: t }))
                : (m[v] = t),
              {
                cancel: function () {
                  delete m[v],
                    w &&
                      (h.splice(h.indexOf(w, 1)),
                      h.length || delete m.__domain_regex__),
                    Object.keys(m).length || delete y[r],
                    o && !Object.keys(y).length && a.del(o);
                },
              }
            );
          })(
            { name: n, win: r, domain: o },
            {
              handler: e.handler,
              handleError:
                e.errorHandler ||
                function (n) {
                  throw n;
                },
              window: r,
              domain: o || "*",
              name: n,
            }
          );
        return {
          cancel: function () {
            i.cancel();
          },
        };
      }
      (st.postrobot_post_message = function (n, e, t) {
        0 === t.indexOf("file:") && (t = "*"), n.postMessage(e, t);
      }),
        (st.postrobot_global = function (n, e) {
          if (
            !(function (n) {
              return (
                (n = n || window).navigator.mockUserAgent ||
                n.navigator.userAgent
              );
            })(window).match(/MSIE|rv:11|trident|edge\/12|edge\/13/i)
          )
            throw new Error("Global messaging not needed for browser");
          if (!M(n))
            throw new Error(
              "Post message through global disabled between different domain windows"
            );
          if (!1 !== I(window, n))
            throw new Error(
              "Can only use global to communicate between two different windows, not between frames"
            );
          var t = We(n);
          if (!t)
            throw new Error("Can not find postRobot global on foreign window");
          t.receiveMessage({ source: window, origin: C(), data: e });
        });
      var bt = function n(e, t, r, o) {
        var i = (o = o || {}).domain || "*",
          a = o.timeout || -1,
          u = o.timeout || 5e3,
          c = o.fireAndForget || !1;
        return v
          .try(function () {
            if (
              ((function (n, e, t) {
                if (!n) throw new Error("Expected name");
                if (t && "string" != typeof t && !Array.isArray(t) && !On(t))
                  throw new TypeError(
                    "Can not send " +
                      n +
                      ". Expected domain " +
                      JSON.stringify(t) +
                      " to be a string, array, or regex"
                  );
                if (L(e))
                  throw new Error(
                    "Can not send " + n + ". Target window is closed"
                  );
              })(t, e, i),
              (function (n, e) {
                var t = T(e);
                if (t) return t === n;
                if (e === n) return !1;
                if (q(e) === e) return !1;
                for (var r = 0, o = j(n); r < o.length; r++)
                  if (o[r] === e) return !0;
                return !1;
              })(window, e))
            )
              return (function (n, e, t) {
                void 0 === e && (e = 5e3), void 0 === t && (t = "Window");
                var r = (function (n) {
                  return Ie("helloPromises").getOrSet(n, function () {
                    return new v();
                  });
                })(n);
                return (
                  -1 !== e &&
                    (r = r.timeout(
                      e,
                      new Error(t + " did not load after " + e + "ms")
                    )),
                  r
                );
              })(e, u);
          })
          .then(function (t) {
            return (function (n, e, t, r) {
              var o = r.send;
              return v.try(function () {
                return "string" == typeof e
                  ? e
                  : v
                      .try(function () {
                        return (
                          t ||
                          He(n, { send: o }).then(function (n) {
                            return n.domain;
                          })
                        );
                      })
                      .then(function (n) {
                        if (!B(e, e))
                          throw new Error(
                            "Domain " + yn(e) + " does not match " + yn(e)
                          );
                        return n;
                      });
              });
            })(e, i, (void 0 === t ? {} : t).domain, { send: n });
          })
          .then(function (o) {
            var i = o,
              u =
                "postrobot_method" === t && r && "string" == typeof r.name
                  ? r.name + "()"
                  : t,
              s = new v(),
              d = t + "_" + on();
            if (!c) {
              var f = { name: t, win: e, domain: i, promise: s };
              !(function (n, e) {
                Le("responseListeners").set(n, e);
              })(d, f);
              var l = Ie("requestPromises").getOrSet(e, function () {
                return [];
              });
              l.push(s),
                s.catch(function () {
                  !(function (n) {
                    Le("erroredResponseListeners").set(n, !0);
                  })(d),
                    lt(d);
                });
              var p = (function (n) {
                  return Ie("knownWindows").get(n, !1);
                })(e)
                  ? 1e4
                  : 2e3,
                h = a,
                w = p,
                y = h,
                m = Pn(function () {
                  return L(e)
                    ? s.reject(
                        new Error(
                          "Window closed for " +
                            t +
                            " before " +
                            (f.ack ? "response" : "ack")
                        )
                      )
                    : f.cancelled
                    ? s.reject(
                        new Error("Response listener was cancelled for " + t)
                      )
                    : ((w = Math.max(w - 500, 0)),
                      -1 !== y && (y = Math.max(y - 500, 0)),
                      f.ack || 0 !== w
                        ? 0 === y
                          ? s.reject(
                              new Error(
                                "No response for postMessage " +
                                  u +
                                  " in " +
                                  C() +
                                  " in " +
                                  h +
                                  "ms"
                              )
                            )
                          : void 0
                        : s.reject(
                            new Error(
                              "No ack for postMessage " +
                                u +
                                " in " +
                                C() +
                                " in " +
                                p +
                                "ms"
                            )
                          ));
                }, 500);
              s.finally(function () {
                m.cancel(), l.splice(l.indexOf(s, 1));
              }).catch(pn);
            }
            return dt(
              e,
              i,
              {
                id: on(),
                origin: C(window),
                type: "postrobot_message_request",
                hash: d,
                name: t,
                data: r,
                fireAndForget: c,
              },
              { on: gt, send: n }
            ).then(
              function () {
                return c ? s.resolve() : s;
              },
              function (n) {
                throw new Error(
                  "Send request message failed for " +
                    u +
                    " in " +
                    C() +
                    "\n\n" +
                    wn(n)
                );
              }
            );
          });
      };
      function Pt(n, e, t) {
        return ut(n, e, t, { on: gt, send: bt });
      }
      function xt(n, e, t) {
        return ct(n, e, t, { on: gt, send: bt });
      }
      function _t(n) {
        return rt.toProxyWindow(n, { send: bt });
      }
      function Et() {
        var n, e, t, r;
        We().initialized ||
          ((We().initialized = !0),
          (e = (n = { on: gt, send: bt }).on),
          (t = n.send),
          ((r = We()).receiveMessage =
            r.receiveMessage ||
            function (n) {
              return vt(n, { on: e, send: t });
            }),
          (function (n) {
            var e = n.on,
              t = n.send;
            Le().getOrSet("postMessageListener", function () {
              return Qn(window, "message", function (n) {
                !(function (n, e) {
                  var t = e.on,
                    r = e.send;
                  v.try(function () {
                    var e = n.source || n.sourceElement,
                      o =
                        n.origin || (n.originalEvent && n.originalEvent.origin),
                      i = n.data;
                    if (("null" === o && (o = "file://"), e)) {
                      if (!o)
                        throw new Error(
                          "Post message did not have origin domain"
                        );
                      vt({ source: e, origin: o, data: i }, { on: t, send: r });
                    }
                  });
                })(n, { on: e, send: t });
              });
            });
          })({ on: gt, send: bt }),
          (function (n) {
            var e = n.on,
              t = n.send;
            Le("builtinListeners").getOrSet("helloListener", function () {
              var n = e("postrobot_hello", { domain: "*" }, function (n) {
                  return (
                    Ue(n.source, { domain: n.origin }), { instanceID: Be() }
                  );
                }),
                r = T();
              return r && He(r, { send: t }).catch(function (n) {}), n;
            });
          })({ on: gt, send: bt }));
      }
      function kt(n) {
        for (var e = 0, t = Ie("requestPromises").get(n, []); e < t.length; e++)
          t[e]
            .reject(
              new Error(
                "Window " +
                  (L(n) ? "closed" : "cleaned up") +
                  " before response"
              )
            )
            .catch(pn);
      }
      function Ft(n) {
        if ((void 0 === n && (n = window), !M(n)))
          throw new Error("Can not get global for window on different domain");
        return n.__zoid_9_0_58__ || (n.__zoid_9_0_58__ = {}), n.__zoid_9_0_58__;
      }
      function Ct(n) {
        return {
          get: function () {
            var e = this;
            return v.try(function () {
              if (e.source && e.source !== window)
                throw new Error(
                  "Can not call get on proxy object from a remote window"
                );
              return n;
            });
          },
        };
      }
      Et();
      var Mt = b;
      function Ot(n, e, t, r, o) {
        if (!n.hasOwnProperty(t)) return r;
        var i = n[t];
        return "function" == typeof i.childDecorate
          ? i.childDecorate({
              value: r,
              uid: o.uid,
              close: o.close,
              focus: o.focus,
              onError: o.onError,
              onProps: o.onProps,
              resize: o.resize,
              getParent: o.getParent,
              getParentDomain: o.getParentDomain,
              show: o.show,
              hide: o.hide,
            })
          : r;
      }
      function At(n) {
        return ln(
          At,
          function () {
            if (!n) throw new Error("No window name");
            var e = n.split("__"),
              t = e[1],
              r = e[2],
              o = e[3];
            if ("zoid" !== t)
              throw new Error("Window not rendered by zoid - got " + t);
            if (!r) throw new Error("Expected component name");
            if (!o) throw new Error("Expected encoded payload");
            try {
              return JSON.parse(
                (function (n) {
                  if ("function" == typeof atob)
                    return decodeURIComponent(
                      [].map
                        .call(atob(n), function (n) {
                          return (
                            "%" +
                            ("00" + n.charCodeAt(0).toString(16)).slice(-2)
                          );
                        })
                        .join("")
                    );
                  if ("undefined" != typeof Buffer)
                    return Buffer.from(n, "base64").toString("utf8");
                  throw new Error("Can not find window.atob or Buffer");
                })(o)
              );
            } catch (n) {
              throw new Error(
                "Can not decode window name payload: " + o + ": " + wn(n)
              );
            }
          },
          [n]
        );
      }
      function jt() {
        try {
          return At(window.name);
        } catch (n) {}
      }
      function zt() {
        return v.try(function () {
          window.focus();
        });
      }
      function qt() {
        return v.try(function () {
          window.close();
        });
      }
      function Dt(n, e, t) {
        return v.try(function () {
          return "function" == typeof n.queryParam
            ? n.queryParam({ value: t })
            : "string" == typeof n.queryParam
            ? n.queryParam
            : e;
        });
      }
      function Wt(n, e, t) {
        return v.try(function () {
          return "function" == typeof n.queryValue && Mn(t)
            ? n.queryValue({ value: t })
            : t;
        });
      }
      function St(n, e, t) {
        void 0 === e && (e = {}), void 0 === t && (t = window);
        var r,
          o,
          i,
          a = n.propsDef,
          u = n.containerTemplate,
          c = n.prerenderTemplate,
          d = n.tag,
          f = n.name,
          l = n.attributes,
          p = n.dimensions,
          h = n.autoResize,
          w = n.url,
          y = n.domain,
          m = new v(),
          g = [],
          b = jn(),
          P = {},
          x = { visible: !0 },
          _ = e.event ? e.event : xn(),
          E = e.props ? e.props : {},
          k = e.onError,
          F = e.getProxyContainer,
          A = e.show,
          j = e.hide,
          z = e.close,
          q = e.renderContainer,
          D = e.getProxyWindow,
          W = e.setProxyWin,
          S = e.openFrame,
          T = e.openPrerenderFrame,
          R = e.prerender,
          J = e.open,
          K = e.openPrerender,
          V = e.watchForUnload,
          Z = e.getInternalState,
          G = e.setInternalState,
          X = function (n) {
            for (var e = {}, t = 0, r = Object.keys(E); t < r.length; t++) {
              var o = r[t],
                i = a[o];
              (i && !1 === i.sendToChild) ||
                (i && i.sameDomain && !B(n, C(window))) ||
                (e[o] = E[o]);
            }
            return v.hash(e);
          },
          Y = function () {
            return v.try(function () {
              return Z ? Z() : x;
            });
          },
          Q = function (n) {
            return v.try(function () {
              return G ? G(n) : (x = s({}, x, n));
            });
          },
          nn = function () {
            return D
              ? D()
              : v.try(function () {
                  var n = E.window;
                  if (n) {
                    var e = _t(n);
                    return (
                      b.register(function () {
                        return n.close();
                      }),
                      e
                    );
                  }
                  return new rt({ send: bt });
                });
          },
          en = function (n) {
            return F
              ? F(n)
              : v
                  .try(function () {
                    return Jn(n);
                  })
                  .then(function (n) {
                    return (
                      de(n) &&
                        (n = (function (n) {
                          var e = (function (n) {
                            var e = (function (n) {
                              for (; n.parentNode; ) n = n.parentNode;
                              if (de(n)) return n;
                            })(n);
                            if (e.host) return e.host;
                          })(n);
                          if (!e)
                            throw new Error("Element is not in shadow dom");
                          if (de(e))
                            throw new Error(
                              "Host element is also in shadow dom"
                            );
                          var t = "shadow-slot-" + on(),
                            r = document.createElement("slot");
                          r.setAttribute("name", t), n.appendChild(r);
                          var o = document.createElement("div");
                          return o.setAttribute("slot", t), e.appendChild(o), o;
                        })(n)),
                      Ct(n)
                    );
                  });
          },
          tn = function (n) {
            return W
              ? W(n)
              : v.try(function () {
                  r = n;
                });
          },
          an = function () {
            return A
              ? A()
              : v
                  .hash({
                    setState: Q({ visible: !0 }),
                    showElement: o ? o.get().then(ie) : null,
                  })
                  .then(pn);
          },
          un = function () {
            return j
              ? j()
              : v
                  .hash({
                    setState: Q({ visible: !1 }),
                    showElement: o ? o.get().then(ae) : null,
                  })
                  .then(pn);
          },
          cn = function () {
            return "function" == typeof w ? w({ props: E }) : w;
          },
          sn = function () {
            return "function" == typeof l ? l({ props: E }) : l;
          },
          dn = function () {
            return y && "string" == typeof y ? y : U(cn());
          },
          fn = function () {
            return y && On(y) ? y : dn();
          },
          ln = function (n, e) {
            var t = e.windowName;
            return S
              ? S(n, { windowName: t })
              : v.try(function () {
                  if (n === Mt.IFRAME)
                    return Ct(
                      Yn({ attributes: s({ name: t, title: f }, sn().iframe) })
                    );
                });
          },
          yn = function (n) {
            return T
              ? T(n)
              : v.try(function () {
                  if (n === Mt.IFRAME)
                    return Ct(
                      Yn({
                        attributes: s(
                          {
                            name:
                              "__zoid_prerender_frame__" +
                              f +
                              "_" +
                              on() +
                              "__",
                            title: "prerender__" + f,
                          },
                          sn().iframe
                        ),
                      })
                    );
                });
          },
          vn = function (n, e, t) {
            return K
              ? K(n, e, t)
              : v.try(function () {
                  if (n === Mt.IFRAME) {
                    if (!t)
                      throw new Error("Expected proxy frame to be passed");
                    return t.get().then(function (n) {
                      return (
                        b.register(function () {
                          return ue(n);
                        }),
                        Xn(n)
                          .then(function (n) {
                            return O(n);
                          })
                          .then(function (n) {
                            return _t(n);
                          })
                      );
                    });
                  }
                  if (n === Mt.POPUP) return e;
                  throw new Error("No render context available for " + n);
                });
          },
          gn = function () {
            return v.try(function () {
              if (r)
                return v.all([_.trigger("zoid-focus"), r.focus()]).then(pn);
            });
          },
          bn = function (n, e, t, r) {
            if (e === C(window)) {
              var o = Ft(window);
              return (
                (o.windows = o.windows || {}),
                (o.windows[t] = window),
                b.register(function () {
                  delete o.windows[t];
                }),
                { type: "global", uid: t }
              );
            }
            return r === Mt.POPUP
              ? { type: "opener" }
              : { type: "parent", distance: N(window) };
          },
          _n = function (n) {
            return v.try(function () {
              (i = n),
                m.resolve(),
                b.register(function () {
                  return n.close.fireAndForget().catch(pn);
                });
            });
          },
          En = function (n) {
            var e = n.width,
              t = n.height;
            return v.try(function () {
              _.trigger("zoid-resize", { width: e, height: t });
            });
          },
          kn = function (n) {
            return v
              .try(function () {
                return _.trigger("zoid-destroy");
              })
              .catch(pn)
              .then(function () {
                return b.all();
              })
              .then(function () {
                m.asyncReject(n || new Error("Component destroyed"));
              });
          },
          Fn = function () {
            return z
              ? z()
              : v
                  .try(function () {
                    return _.trigger("zoid-close");
                  })
                  .then(function () {
                    return kn(new Error("Window closed"));
                  });
          },
          Cn = function (n, e) {
            var t = e.proxyWin,
              r = e.proxyFrame,
              o = e.windowName;
            return J
              ? J(n, { proxyWin: t, proxyFrame: r, windowName: o })
              : v
                  .try(function () {
                    if (n === Mt.IFRAME) {
                      if (!r)
                        throw new Error("Expected proxy frame to be passed");
                      return r.get().then(function (n) {
                        return Xn(n).then(function (e) {
                          var t,
                            r,
                            o,
                            i =
                              ((t = n),
                              (r = hn((r = Fn))),
                              ce(t)
                                ? r()
                                : (o = Pn(function () {
                                    ce(t) && (o.cancel(), r());
                                  }, 50)),
                              {
                                cancel: function () {
                                  o && o.cancel();
                                },
                              });
                          return (
                            b.register(function () {
                              return i.cancel();
                            }),
                            b.register(function () {
                              return ue(n);
                            }),
                            b.register(function () {
                              return kt(e);
                            }),
                            e
                          );
                        });
                      });
                    }
                    if (n === Mt.POPUP) {
                      var e = p.width,
                        t = p.height;
                      (e = Pe(e, window.outerWidth)),
                        (t = Pe(t, window.outerWidth));
                      var i = Vn(
                        "",
                        s({ name: o, width: e, height: t }, sn().popup)
                      );
                      return (
                        b.register(function () {
                          return $(i);
                        }),
                        b.register(function () {
                          return kt(i);
                        }),
                        i
                      );
                    }
                    throw new Error("No render context available for " + n);
                  })
                  .then(function (n) {
                    return t.setWindow(n, { send: bt }), t;
                  });
          },
          An = function () {
            return v.try(function () {
              var n = Qn(
                  window,
                  "unload",
                  hn(function () {
                    kn(new Error("Window navigated away"));
                  })
                ),
                e = H(t, kn, 3e3);
              if ((b.register(e.cancel), b.register(n.cancel), V)) return V();
            });
          },
          zn = function (n) {
            var e = !1;
            return n
              .isClosed()
              .then(function (t) {
                return t
                  ? ((e = !0), Fn())
                  : v
                      .delay(200)
                      .then(function () {
                        return n.isClosed();
                      })
                      .then(function (n) {
                        if (n) return (e = !0), Fn();
                      });
              })
              .then(function () {
                return e;
              });
          },
          qn = function (n) {
            return k
              ? k(n)
              : v.try(function () {
                  if (-1 === g.indexOf(n))
                    return (
                      g.push(n), m.asyncReject(n), _.trigger("zoid-error", n)
                    );
                });
          };
        _n.onError = qn;
        var Dn = function (n, e) {
            return n({
              container: e.container,
              context: e.context,
              uid: e.uid,
              doc: e.doc,
              frame: e.frame,
              prerenderFrame: e.prerenderFrame,
              focus: gn,
              close: Fn,
              state: P,
              props: E,
              tag: d,
              dimensions: p,
              event: _,
            });
          },
          Wn = function (n, e) {
            var t = e.context,
              r = e.uid;
            return R
              ? R(n, { context: t, uid: r })
              : v.try(function () {
                  if (c) {
                    var e = n.getWindow();
                    if (
                      e &&
                      M(e) &&
                      (function (n) {
                        try {
                          if (!n.location.href) return !0;
                          if ("about:blank" === n.location.href) return !0;
                        } catch (n) {}
                        return !1;
                      })(e)
                    ) {
                      var o = (e = O(e)).document,
                        i = Dn(c, { context: t, uid: r, doc: o });
                      if (i) {
                        if (i.ownerDocument !== o)
                          throw new Error(
                            "Expected prerender template to have been created with document from child window"
                          );
                        Zn(e, i);
                        var a = h.width,
                          u = void 0 !== a && a,
                          s = h.height,
                          d = void 0 !== s && s,
                          f = h.element,
                          l = void 0 === f ? "body" : f;
                        if ((l = Un(l, o)) && (u || d)) {
                          var p = se(
                            l,
                            function (n) {
                              En({
                                width: u ? n.width : void 0,
                                height: d ? n.height : void 0,
                              });
                            },
                            { width: u, height: d, win: e }
                          );
                          _.on("zoid-rendered", p.cancel);
                        }
                      }
                    }
                  }
                });
          },
          Sn = function (n, e) {
            var t = e.proxyFrame,
              r = e.proxyPrerenderFrame,
              i = e.context,
              a = e.uid;
            return q
              ? q(n, {
                  proxyFrame: t,
                  proxyPrerenderFrame: r,
                  context: i,
                  uid: a,
                })
              : v
                  .hash({
                    container: n.get(),
                    frame: t ? t.get() : null,
                    prerenderFrame: r ? r.get() : null,
                    internalState: Y(),
                  })
                  .then(function (n) {
                    var e = n.container,
                      t = n.internalState.visible,
                      r = Dn(u, {
                        context: i,
                        uid: a,
                        container: e,
                        frame: n.frame,
                        prerenderFrame: n.prerenderFrame,
                        doc: document,
                      });
                    if (r)
                      return (
                        t || ae(r),
                        In(e, r),
                        b.register(function () {
                          return ue(r);
                        }),
                        (o = Ct(r))
                      );
                  });
          },
          Ln = function () {
            return {
              state: P,
              event: _,
              close: Fn,
              focus: gn,
              resize: En,
              onError: qn,
              updateProps: Nn,
              show: an,
              hide: un,
            };
          },
          Tn = function (n, e) {
            void 0 === e && (e = !1);
            var t = Ln();
            !(function (n, e, t, r, o) {
              void 0 === o && (o = !1), mn(e, (t = t || {}));
              for (
                var i = o ? [] : [].concat(Object.keys(n)),
                  a = 0,
                  u = Object.keys(t);
                a < u.length;
                a++
              ) {
                var c = u[a];
                -1 === i.indexOf(c) && i.push(c);
              }
              for (
                var s = [],
                  d = r.state,
                  f = r.close,
                  l = r.focus,
                  p = r.event,
                  h = r.onError,
                  w = 0;
                w < i.length;
                w++
              ) {
                var y = i[w],
                  m = n[y],
                  v = t[y];
                if (m) {
                  var g = m.alias;
                  if (
                    (g && (!Mn(v) && Mn(t[g]) && (v = t[g]), s.push(g)),
                    m.value &&
                      (v = m.value({
                        props: e,
                        state: d,
                        close: f,
                        focus: l,
                        event: p,
                        onError: h,
                      })),
                    !Mn(v) &&
                      m.default &&
                      (v = m.default({
                        props: e,
                        state: d,
                        close: f,
                        focus: l,
                        event: p,
                        onError: h,
                      })),
                    Mn(v) &&
                      ("array" === m.type
                        ? !Array.isArray(v)
                        : typeof v !== m.type))
                  )
                    throw new TypeError(
                      "Prop is not of type " + m.type + ": " + y
                    );
                  e[y] = v;
                }
              }
              for (var b = 0; b < s.length; b++) delete e[s[b]];
              for (var P = 0, x = Object.keys(e); P < x.length; P++) {
                var _ = x[P],
                  E = n[_],
                  k = e[_];
                E &&
                  Mn(k) &&
                  E.decorate &&
                  (e[_] = E.decorate({
                    value: k,
                    props: e,
                    state: d,
                    close: f,
                    focus: l,
                    event: p,
                    onError: h,
                  }));
              }
              for (var F = 0, C = Object.keys(n); F < C.length; F++) {
                var M = C[F];
                if (!1 !== n[M].required && !Mn(e[M]))
                  throw new Error('Expected prop "' + M + '" to be defined');
              }
            })(a, E, n, t, e);
          },
          Nn = function (n) {
            return (
              Tn(n, !0),
              m.then(function () {
                var n = i,
                  e = r;
                if (n && e)
                  return X(fn()).then(function (t) {
                    return n.updateProps(t).catch(function (n) {
                      return zn(e).then(function (e) {
                        if (!e) throw n;
                      });
                    });
                  });
              })
            );
          };
        return {
          init: function () {
            _.on("zoid-render", function () {
              return E.onRender();
            }),
              _.on("zoid-display", function () {
                return E.onDisplay();
              }),
              _.on("zoid-rendered", function () {
                return E.onRendered();
              }),
              _.on("zoid-close", function () {
                return E.onClose();
              }),
              _.on("zoid-destroy", function () {
                return E.onDestroy();
              }),
              _.on("zoid-resize", function () {
                return E.onResize();
              }),
              _.on("zoid-focus", function () {
                return E.onFocus();
              }),
              _.on("zoid-props", function (n) {
                return E.onProps(n);
              }),
              _.on("zoid-error", function (n) {
                return E && E.onError
                  ? E.onError(n)
                  : m.reject(n).then(function () {
                      setTimeout(function () {
                        throw n;
                      }, 1);
                    });
              }),
              b.register(_.reset);
          },
          render: function (n, e, t) {
            return v
              .try(function () {
                var o = "zoid-" + d + "-" + on(),
                  i = fn(),
                  u = dn();
                !(function (n, e, t) {
                  if (n !== window) {
                    if (!I(window, n))
                      throw new Error("Can only renderTo an adjacent frame");
                    var r = C();
                    if (!B(e, r) && !M(n))
                      throw new Error(
                        "Can not render remotely to " +
                          e.toString() +
                          " - can only render to " +
                          r
                      );
                    if (t && "string" != typeof t)
                      throw new Error(
                        "Container passed to renderTo must be a string selector, got " +
                          typeof t +
                          " }"
                      );
                  }
                })(n, i, e);
                var c = v.try(function () {
                    if (n !== window)
                      return (function (n, e) {
                        for (
                          var t = {}, r = 0, o = Object.keys(E);
                          r < o.length;
                          r++
                        ) {
                          var i = o[r],
                            u = a[i];
                          u && u.allowDelegate && (t[i] = E[i]);
                        }
                        var c = bt(e, "zoid_delegate_" + f, {
                          overrides: {
                            props: t,
                            event: _,
                            close: Fn,
                            onError: qn,
                            getInternalState: Y,
                            setInternalState: Q,
                          },
                        })
                          .then(function (n) {
                            var t = n.data.parent;
                            return (
                              b.register(function () {
                                if (!L(e)) return t.destroy();
                              }),
                              t.getDelegateOverrides()
                            );
                          })
                          .catch(function (n) {
                            throw new Error(
                              "Unable to delegate rendering. Possibly the component is not loaded in the target window.\n\n" +
                                wn(n)
                            );
                          });
                        return (
                          (F = function () {
                            for (
                              var n = arguments.length, e = new Array(n), t = 0;
                              t < n;
                              t++
                            )
                              e[t] = arguments[t];
                            return c.then(function (n) {
                              return n.getProxyContainer.apply(n, e);
                            });
                          }),
                          (q = function () {
                            for (
                              var n = arguments.length, e = new Array(n), t = 0;
                              t < n;
                              t++
                            )
                              e[t] = arguments[t];
                            return c.then(function (n) {
                              return n.renderContainer.apply(n, e);
                            });
                          }),
                          (A = function () {
                            for (
                              var n = arguments.length, e = new Array(n), t = 0;
                              t < n;
                              t++
                            )
                              e[t] = arguments[t];
                            return c.then(function (n) {
                              return n.show.apply(n, e);
                            });
                          }),
                          (j = function () {
                            for (
                              var n = arguments.length, e = new Array(n), t = 0;
                              t < n;
                              t++
                            )
                              e[t] = arguments[t];
                            return c.then(function (n) {
                              return n.hide.apply(n, e);
                            });
                          }),
                          (V = function () {
                            for (
                              var n = arguments.length, e = new Array(n), t = 0;
                              t < n;
                              t++
                            )
                              e[t] = arguments[t];
                            return c.then(function (n) {
                              return n.watchForUnload.apply(n, e);
                            });
                          }),
                          n === Mt.IFRAME
                            ? ((D = function () {
                                for (
                                  var n = arguments.length,
                                    e = new Array(n),
                                    t = 0;
                                  t < n;
                                  t++
                                )
                                  e[t] = arguments[t];
                                return c.then(function (n) {
                                  return n.getProxyWindow.apply(n, e);
                                });
                              }),
                              (S = function () {
                                for (
                                  var n = arguments.length,
                                    e = new Array(n),
                                    t = 0;
                                  t < n;
                                  t++
                                )
                                  e[t] = arguments[t];
                                return c.then(function (n) {
                                  return n.openFrame.apply(n, e);
                                });
                              }),
                              (T = function () {
                                for (
                                  var n = arguments.length,
                                    e = new Array(n),
                                    t = 0;
                                  t < n;
                                  t++
                                )
                                  e[t] = arguments[t];
                                return c.then(function (n) {
                                  return n.openPrerenderFrame.apply(n, e);
                                });
                              }),
                              (R = function () {
                                for (
                                  var n = arguments.length,
                                    e = new Array(n),
                                    t = 0;
                                  t < n;
                                  t++
                                )
                                  e[t] = arguments[t];
                                return c.then(function (n) {
                                  return n.prerender.apply(n, e);
                                });
                              }),
                              (J = function () {
                                for (
                                  var n = arguments.length,
                                    e = new Array(n),
                                    t = 0;
                                  t < n;
                                  t++
                                )
                                  e[t] = arguments[t];
                                return c.then(function (n) {
                                  return n.open.apply(n, e);
                                });
                              }),
                              (K = function () {
                                for (
                                  var n = arguments.length,
                                    e = new Array(n),
                                    t = 0;
                                  t < n;
                                  t++
                                )
                                  e[t] = arguments[t];
                                return c.then(function (n) {
                                  return n.openPrerender.apply(n, e);
                                });
                              }))
                            : n === Mt.POPUP &&
                              (W = function () {
                                for (
                                  var n = arguments.length,
                                    e = new Array(n),
                                    t = 0;
                                  t < n;
                                  t++
                                )
                                  e[t] = arguments[t];
                                return c.then(function (n) {
                                  return n.setProxyWin.apply(n, e);
                                });
                              }),
                          c
                        );
                      })(t, n);
                  }),
                  s = E.window,
                  l = An(),
                  p = (function (n, e) {
                    var t = {},
                      r = Object.keys(e);
                    return v
                      .all(
                        r.map(function (r) {
                          var o = n[r];
                          if (o)
                            return v
                              .resolve()
                              .then(function () {
                                var n = e[r];
                                if (n && o.queryParam) return n;
                              })
                              .then(function (n) {
                                if (null != n)
                                  return v
                                    .all([Dt(o, r, n), Wt(o, 0, n)])
                                    .then(function (n) {
                                      var e,
                                        i = n[0],
                                        a = n[1];
                                      if ("boolean" == typeof a)
                                        e = a.toString();
                                      else if ("string" == typeof a)
                                        e = a.toString();
                                      else if (
                                        "object" == typeof a &&
                                        null !== a
                                      ) {
                                        if ("json" === o.serialization)
                                          e = JSON.stringify(a);
                                        else if ("base64" === o.serialization)
                                          e = btoa(JSON.stringify(a));
                                        else if (
                                          "dotify" === o.serialization ||
                                          !o.serialization
                                        ) {
                                          e = (function n(e, t, r) {
                                            for (var o in (void 0 === t &&
                                              (t = ""),
                                            void 0 === r && (r = {}),
                                            (t = t ? t + "." : t),
                                            e))
                                              e.hasOwnProperty(o) &&
                                                null != e[o] &&
                                                "function" != typeof e[o] &&
                                                (e[o] &&
                                                Array.isArray(e[o]) &&
                                                e[o].length &&
                                                e[o].every(function (n) {
                                                  return "object" != typeof n;
                                                })
                                                  ? (r["" + t + o + "[]"] =
                                                      e[o].join(","))
                                                  : e[o] &&
                                                    "object" == typeof e[o]
                                                  ? (r = n(e[o], "" + t + o, r))
                                                  : (r["" + t + o] =
                                                      e[o].toString()));
                                            return r;
                                          })(a, r);
                                          for (
                                            var u = 0, c = Object.keys(e);
                                            u < c.length;
                                            u++
                                          ) {
                                            var s = c[u];
                                            t[s] = e[s];
                                          }
                                          return;
                                        }
                                      } else
                                        "number" == typeof a &&
                                          (e = a.toString());
                                      t[i] = e;
                                    });
                              });
                        })
                      )
                      .then(function () {
                        return t;
                      });
                  })(a, E).then(function (n) {
                    return Rn(
                      (function (n) {
                        if (0 !== U(n).indexOf("mock:")) return n;
                        throw new Error(
                          "Mock urls not supported out of test mode"
                        );
                      })(cn()),
                      { query: n }
                    );
                  }),
                  h = _.trigger("zoid-render"),
                  w = en(e),
                  y = nn(),
                  g = y.then(function (e) {
                    return (function (n) {
                      var e = void 0 === n ? {} : n,
                        t = e.proxyWin,
                        r = e.childDomain,
                        o = e.domain,
                        i = (void 0 === e.target && window, e.context),
                        a = e.uid;
                      return (function (n, e, t, r) {
                        return X(t).then(function (o) {
                          var i = Pt(n, t, o),
                            a =
                              e === C()
                                ? { type: "uid", uid: r }
                                : { type: "raw", value: i };
                          if ("uid" === a.type) {
                            var u = Ft(window);
                            (u.props = u.props || {}),
                              (u.props[r] = i),
                              b.register(function () {
                                delete u.props[r];
                              });
                          }
                          return a;
                        });
                      })(t, r, o, a).then(function (n) {
                        return {
                          uid: a,
                          context: i,
                          tag: d,
                          version: "9_0_58",
                          childDomain: r,
                          parentDomain: C(window),
                          parent: bn(0, r, a, i),
                          props: n,
                          exports: Pt(
                            t,
                            o,
                            ((e = t),
                            {
                              init: _n,
                              close: Fn,
                              checkClose: function () {
                                return zn(e);
                              },
                              resize: En,
                              onError: qn,
                              show: an,
                              hide: un,
                            })
                          ),
                        };
                        var e;
                      });
                    })({
                      proxyWin: (r = {
                        proxyWin: e,
                        childDomain: u,
                        domain: i,
                        target: n,
                        context: t,
                        uid: o,
                      }).proxyWin,
                      childDomain: r.childDomain,
                      domain: r.domain,
                      target: r.target,
                      context: r.context,
                      uid: r.uid,
                    }).then(function (n) {
                      return (
                        "__zoid__" + f + "__" + rn(JSON.stringify(n)) + "__"
                      );
                    });
                    var r;
                  }),
                  P = g.then(function (n) {
                    return ln(t, { windowName: n });
                  }),
                  x = yn(t),
                  k = v
                    .hash({
                      proxyContainer: w,
                      proxyFrame: P,
                      proxyPrerenderFrame: x,
                    })
                    .then(function (n) {
                      return Sn(n.proxyContainer, {
                        context: t,
                        uid: o,
                        proxyFrame: n.proxyFrame,
                        proxyPrerenderFrame: n.proxyPrerenderFrame,
                      });
                    })
                    .then(function (n) {
                      return n;
                    }),
                  O = v
                    .hash({ windowName: g, proxyFrame: P, proxyWin: y })
                    .then(function (n) {
                      var e = n.proxyWin;
                      return s
                        ? e
                        : Cn(t, {
                            windowName: n.windowName,
                            proxyWin: e,
                            proxyFrame: n.proxyFrame,
                          });
                    }),
                  z = v
                    .hash({ proxyWin: O, proxyPrerenderFrame: x })
                    .then(function (n) {
                      return vn(t, n.proxyWin, n.proxyPrerenderFrame);
                    }),
                  N = O.then(function (n) {
                    return (r = n), tn(n);
                  }),
                  H = v
                    .hash({ proxyPrerenderWin: z, state: N })
                    .then(function (n) {
                      return Wn(n.proxyPrerenderWin, { context: t, uid: o });
                    }),
                  $ = v.hash({ proxyWin: O, windowName: g }).then(function (n) {
                    if (s) return n.proxyWin.setName(n.windowName);
                  }),
                  Z = v
                    .hash({
                      proxyWin: O,
                      builtUrl: p,
                      windowName: $,
                      prerender: H,
                    })
                    .then(function (n) {
                      return n.proxyWin.setLocation(n.builtUrl);
                    }),
                  G = O.then(function (n) {
                    !(function n(e) {
                      var t = !1;
                      return (
                        b.register(function () {
                          t = !0;
                        }),
                        v
                          .delay(2e3)
                          .then(function () {
                            return e.isClosed();
                          })
                          .then(function (r) {
                            return r ? Fn() : t ? void 0 : n(e);
                          })
                      );
                    })(n);
                  }),
                  sn = v.hash({ container: k, prerender: H }).then(function () {
                    return _.trigger("zoid-display");
                  }),
                  pn = O.then(function (n) {}),
                  hn = Z.then(function () {
                    return v.try(function () {
                      var n = E.timeout;
                      if (n)
                        return m.timeout(
                          n,
                          new Error(
                            "Loading component timed out after " +
                              n +
                              " milliseconds"
                          )
                        );
                    });
                  }),
                  mn = m.then(function () {
                    return _.trigger("zoid-rendered");
                  });
                return v.hash({
                  initPromise: m,
                  buildUrlPromise: p,
                  onRenderPromise: h,
                  getProxyContainerPromise: w,
                  openFramePromise: P,
                  openPrerenderFramePromise: x,
                  renderContainerPromise: k,
                  openPromise: O,
                  openPrerenderPromise: z,
                  setStatePromise: N,
                  prerenderPromise: H,
                  loadUrlPromise: Z,
                  buildWindowNamePromise: g,
                  setWindowNamePromise: $,
                  watchForClosePromise: G,
                  onDisplayPromise: sn,
                  openBridgePromise: pn,
                  runTimeoutPromise: hn,
                  onRenderedPromise: mn,
                  delegatePromise: c,
                  watchForUnloadPromise: l,
                });
              })
              .catch(function (n) {
                return v.all([qn(n), kn(n)]).then(
                  function () {
                    throw n;
                  },
                  function () {
                    throw n;
                  }
                );
              })
              .then(pn);
          },
          destroy: kn,
          setProps: Tn,
          getHelpers: Ln,
          getDelegateOverrides: function () {
            return v.try(function () {
              return {
                getProxyContainer: en,
                show: an,
                hide: un,
                renderContainer: Sn,
                getProxyWindow: nn,
                watchForUnload: An,
                openFrame: ln,
                openPrerenderFrame: yn,
                prerender: Wn,
                open: Cn,
                openPrerender: vn,
                setProxyWin: tn,
              };
            });
          },
        };
      }
      var Lt = {
          register: function (n, e, t, r) {
            var o = r.React,
              i = r.ReactDOM;
            return (function (n) {
              function e() {
                return n.apply(this, arguments) || this;
              }
              c(e, n);
              var r = e.prototype;
              return (
                (r.render = function () {
                  return o.createElement("div", null);
                }),
                (r.componentDidMount = function () {
                  var n = i.findDOMNode(this),
                    e = t(mn({}, this.props));
                  e.render(n, Mt.IFRAME), this.setState({ parent: e });
                }),
                (r.componentDidUpdate = function () {
                  this.state &&
                    this.state.parent &&
                    this.state.parent.updateProps(mn({}, this.props)).catch(pn);
                }),
                e
              );
            })(o.Component);
          },
        },
        Tt = {
          register: function (n, e, t, r) {
            return r.component(n, {
              render: function (n) {
                return n("div");
              },
              inheritAttrs: !1,
              mounted: function () {
                var n = this.$el;
                (this.parent = t(s({}, this.$attrs))),
                  this.parent.render(n, Mt.IFRAME);
              },
              watch: {
                $attrs: {
                  handler: function () {
                    this.parent &&
                      this.$attrs &&
                      this.parent.updateProps(s({}, this.$attrs)).catch(pn);
                  },
                  deep: !0,
                },
              },
            });
          },
        },
        Rt = {
          register: function (n, e, t, r) {
            return r.module(n, []).directive(
              n.replace(/-([a-z])/g, function (n) {
                return n[1].toUpperCase();
              }),
              function () {
                for (var n = {}, r = 0, o = Object.keys(e); r < o.length; r++)
                  n[o[r]] = "=";
                return (
                  (n.props = "="),
                  {
                    scope: n,
                    restrict: "E",
                    controller: [
                      "$scope",
                      "$element",
                      function (n, e) {
                        function r() {
                          if (
                            "$apply" !== n.$root.$$phase &&
                            "$digest" !== n.$root.$$phase
                          )
                            try {
                              n.$apply();
                            } catch (n) {}
                        }
                        var o = function () {
                            return Cn(n.props, function (n) {
                              return "function" == typeof n
                                ? function () {
                                    var e = n.apply(this, arguments);
                                    return r(), e;
                                  }
                                : n;
                            });
                          },
                          i = t(o());
                        i.render(e[0], Mt.IFRAME),
                          n.$watch(function () {
                            i.updateProps(o()).catch(pn);
                          });
                      },
                    ],
                  }
                );
              }
            );
          },
        },
        Nt = {
          register: function (n, e, t, r) {
            var o = r.NgModule,
              i = r.ElementRef,
              a = r.NgZone,
              u = function (n) {
                return Cn(s({}, n.internalProps, n.props), function (e) {
                  return "function" == typeof e
                    ? function () {
                        var t = arguments,
                          r = this;
                        return n.zone.run(function () {
                          return e.apply(r, t);
                        });
                      }
                    : e;
                });
              },
              c = (0, r.Component)({
                selector: n,
                template: "<div></div>",
                inputs: ["props"],
              }).Class({
                constructor: [
                  i,
                  a,
                  function (n, e) {
                    (this._props = {}), (this.elementRef = n), (this.zone = e);
                  },
                ],
                ngOnInit: function () {
                  var n = this.elementRef.nativeElement;
                  (this.parent = t(u(this))), this.parent.render(n, Mt.IFRAME);
                },
                ngDoCheck: function () {
                  this.parent &&
                    !(function (n, e) {
                      var t = {};
                      for (var r in n)
                        if (n.hasOwnProperty(r) && ((t[r] = !0), n[r] !== e[r]))
                          return !1;
                      for (var o in e) if (!t[o]) return !1;
                      return !0;
                    })(this._props, this.props) &&
                    ((this._props = s({}, this.props)),
                    this.parent.updateProps(u(this)));
                },
              });
            return o({ declarations: [c], exports: [c] }).Class({
              constructor: function () {},
            });
          },
        };
      function It(n) {
        var e = n.uid,
          t = n.frame,
          r = n.prerenderFrame,
          o = n.doc,
          i = n.props,
          a = n.event,
          u = n.dimensions,
          c = u.width,
          s = u.height;
        if (t && r) {
          var d = o.createElement("div");
          d.setAttribute("id", e);
          var f = o.createElement("style");
          return (
            i.cspNonce && f.setAttribute("nonce", i.cspNonce),
            f.appendChild(
              o.createTextNode(
                "\n            #" +
                  e +
                  " {\n                display: inline-block;\n                position: relative;\n                width: " +
                  c +
                  ";\n                height: " +
                  s +
                  ";\n            }\n\n            #" +
                  e +
                  " > iframe {\n                display: inline-block;\n                position: absolute;\n                width: 100%;\n                height: 100%;\n                top: 0;\n                left: 0;\n                transition: opacity .2s ease-in-out;\n            }\n\n            #" +
                  e +
                  " > iframe.zoid-invisible {\n                opacity: 0;\n            }\n\n            #" +
                  e +
                  " > iframe.zoid-visible {\n                opacity: 1;\n        }\n        "
              )
            ),
            d.appendChild(t),
            d.appendChild(r),
            d.appendChild(f),
            r.classList.add("zoid-visible"),
            t.classList.add("zoid-invisible"),
            a.on("zoid-rendered", function () {
              r.classList.remove("zoid-visible"),
                r.classList.add("zoid-invisible"),
                t.classList.remove("zoid-invisible"),
                t.classList.add("zoid-visible"),
                setTimeout(function () {
                  ue(r);
                }, 1);
            }),
            a.on("zoid-resize", function (n) {
              var e = n.width,
                t = n.height;
              "number" == typeof e && (d.style.width = be(e)),
                "number" == typeof t && (d.style.height = be(t));
            }),
            d
          );
        }
      }
      function Bt(n) {
        var e = n.doc,
          t = n.props,
          r = e.createElement("html"),
          o = e.createElement("body"),
          i = e.createElement("style"),
          a = e.createElement("div");
        return (
          a.classList.add("spinner"),
          t.cspNonce && i.setAttribute("nonce", t.cspNonce),
          r.appendChild(o),
          o.appendChild(a),
          o.appendChild(i),
          i.appendChild(
            e.createTextNode(
              "\n            html, body {\n                width: 100%;\n                height: 100%;\n            }\n\n            .spinner {\n                position: fixed;\n                max-height: 60vmin;\n                max-width: 60vmin;\n                height: 40px;\n                width: 40px;\n                top: 50%;\n                left: 50%;\n                box-sizing: border-box;\n                border: 3px solid rgba(0, 0, 0, .2);\n                border-top-color: rgba(33, 128, 192, 0.8);\n                border-radius: 100%;\n                animation: rotation .7s infinite linear;\n            }\n\n            @keyframes rotation {\n                from {\n                    transform: translateX(-50%) translateY(-50%) rotate(0deg);\n                }\n                to {\n                    transform: translateX(-50%) translateY(-50%) rotate(359deg);\n                }\n            }\n        "
            )
          ),
          r
        );
      }
      var Ut = function () {
          return pn;
        },
        Ht = function (n) {
          return hn(n.value);
        },
        Jt = jn();
      function $t(n) {
        var e = (function (n) {
            var e = n.tag,
              t = n.url,
              r = n.domain,
              o = n.bridgeUrl,
              i = n.props,
              a = void 0 === i ? {} : i,
              u = n.dimensions,
              c = void 0 === u ? {} : u,
              d = n.autoResize,
              f = void 0 === d ? {} : d,
              l = n.allowedParentDomains,
              p = void 0 === l ? "*" : l,
              h = n.attributes,
              w = void 0 === h ? {} : h,
              y = n.defaultContext,
              m = void 0 === y ? Mt.IFRAME : y,
              v = n.containerTemplate,
              g = void 0 === v ? It : v,
              b = n.prerenderTemplate,
              P = void 0 === b ? Bt : b,
              x = n.validate,
              _ = n.eligible,
              E =
                void 0 === _
                  ? function () {
                      return { eligible: !0 };
                    }
                  : _,
              k = n.logger,
              F = void 0 === k ? { info: pn } : k,
              C = e.replace(/-/g, "_"),
              O = c.width,
              A = void 0 === O ? "300px" : O,
              j = c.height,
              z = void 0 === j ? "150px" : j;
            if (
              ((a = s(
                {},
                {
                  window: {
                    type: "object",
                    sendToChild: !1,
                    required: !1,
                    allowDelegate: !0,
                    validate: function (n) {
                      var e = n.value;
                      if (!J(e) && !rt.isProxyWindow(e))
                        throw new Error("Expected Window or ProxyWindow");
                      if (J(e)) {
                        if (L(e)) throw new Error("Window is closed");
                        if (!M(e)) throw new Error("Window is not same domain");
                      }
                    },
                    decorate: function (n) {
                      return _t(n.value);
                    },
                  },
                  timeout: { type: "number", required: !1, sendToChild: !1 },
                  close: {
                    type: "function",
                    required: !1,
                    sendToChild: !1,
                    childDecorate: function (n) {
                      return n.close;
                    },
                  },
                  focus: {
                    type: "function",
                    required: !1,
                    sendToChild: !1,
                    childDecorate: function (n) {
                      return n.focus;
                    },
                  },
                  resize: {
                    type: "function",
                    required: !1,
                    sendToChild: !1,
                    childDecorate: function (n) {
                      return n.resize;
                    },
                  },
                  uid: {
                    type: "string",
                    required: !1,
                    sendToChild: !1,
                    childDecorate: function (n) {
                      return n.uid;
                    },
                  },
                  cspNonce: { type: "string", required: !1 },
                  getParent: {
                    type: "function",
                    required: !1,
                    sendToChild: !1,
                    childDecorate: function (n) {
                      return n.getParent;
                    },
                  },
                  getParentDomain: {
                    type: "function",
                    required: !1,
                    sendToChild: !1,
                    childDecorate: function (n) {
                      return n.getParentDomain;
                    },
                  },
                  show: {
                    type: "function",
                    required: !1,
                    sendToChild: !1,
                    childDecorate: function (n) {
                      return n.show;
                    },
                  },
                  hide: {
                    type: "function",
                    required: !1,
                    sendToChild: !1,
                    childDecorate: function (n) {
                      return n.hide;
                    },
                  },
                  onDisplay: {
                    type: "function",
                    required: !1,
                    sendToChild: !1,
                    allowDelegate: !0,
                    default: Ut,
                    decorate: Ht,
                  },
                  onRendered: {
                    type: "function",
                    required: !1,
                    sendToChild: !1,
                    default: Ut,
                    decorate: Ht,
                  },
                  onRender: {
                    type: "function",
                    required: !1,
                    sendToChild: !1,
                    default: Ut,
                    decorate: Ht,
                  },
                  onClose: {
                    type: "function",
                    required: !1,
                    sendToChild: !1,
                    allowDelegate: !0,
                    default: Ut,
                    decorate: Ht,
                  },
                  onDestroy: {
                    type: "function",
                    required: !1,
                    sendToChild: !1,
                    allowDelegate: !0,
                    default: Ut,
                    decorate: Ht,
                  },
                  onResize: {
                    type: "function",
                    required: !1,
                    sendToChild: !1,
                    allowDelegate: !0,
                    default: Ut,
                  },
                  onFocus: {
                    type: "function",
                    required: !1,
                    sendToChild: !1,
                    allowDelegate: !0,
                    default: Ut,
                  },
                  onError: {
                    type: "function",
                    required: !1,
                    sendToChild: !1,
                    childDecorate: function (n) {
                      return n.onError;
                    },
                  },
                  onProps: {
                    type: "function",
                    required: !1,
                    sendToChild: !1,
                    default: Ut,
                    childDecorate: function (n) {
                      return n.onProps;
                    },
                  },
                },
                a
              )),
              !g)
            )
              throw new Error("Container template required");
            return {
              name: C,
              tag: e,
              url: t,
              domain: r,
              bridgeUrl: o,
              propsDef: a,
              dimensions: { width: A, height: z },
              autoResize: f,
              allowedParentDomains: p,
              attributes: w,
              defaultContext: m,
              containerTemplate: g,
              prerenderTemplate: P,
              validate: x,
              logger: F,
              eligible: E,
            };
          })(n),
          t = e.name,
          r = e.tag,
          o = e.defaultContext,
          i = e.propsDef,
          a = e.eligible,
          u = Ft(),
          c = {},
          d = [],
          f = function () {
            var n = jt();
            return Boolean(n && n.tag === r && n.childDomain === C());
          },
          l = dn(function () {
            if (f()) {
              if (window.xprops)
                throw (
                  (delete u.components[r],
                  new Error(
                    "Can not register " +
                      t +
                      " as child - child already registered"
                  ))
                );
              var n = (function (n) {
                var e,
                  t = n.propsDef,
                  r = n.autoResize,
                  o = n.allowedParentDomains,
                  i = [],
                  a = jt();
                if (!a) throw new Error("No child payload found");
                if ("9_0_58" !== a.version)
                  throw new Error(
                    "Parent window has zoid version " +
                      a.version +
                      ", child window has version 9_0_58"
                  );
                var u = a.uid,
                  c = a.parentDomain,
                  s = a.exports,
                  d = a.context,
                  f = a.props,
                  l = (function (n) {
                    var e,
                      t,
                      r = n.type;
                    if ("opener" === r) return zn("opener", E(window));
                    if ("parent" === r && "number" == typeof n.distance)
                      return zn(
                        "parent",
                        ((e = window),
                        void 0 === (t = n.distance) && (t = 1),
                        (function (n, e) {
                          void 0 === e && (e = 1);
                          for (var t = n, r = 0; r < e; r++) {
                            if (!t) return;
                            t = _(t);
                          }
                          return t;
                        })(e, N(e) - t))
                      );
                    if ("global" === r && n.uid && "string" == typeof n.uid) {
                      var o = n.uid,
                        i = T(window);
                      if (!i) throw new Error("Can not find ancestor window");
                      for (var a = 0, u = D(i); a < u.length; a++) {
                        var c = u[a];
                        if (M(c)) {
                          var s = Ft(c);
                          if (s && s.windows && s.windows[o])
                            return s.windows[o];
                        }
                      }
                    }
                    throw new Error(
                      "Unable to find " + r + " parent component window"
                    );
                  })(a.parent),
                  p = xt(l, c, s),
                  h = p.show,
                  w = p.hide,
                  y = p.close,
                  m = function () {
                    return l;
                  },
                  g = function () {
                    return c;
                  },
                  b = function (n) {
                    i.push(n);
                  },
                  P = function (n) {
                    return v.try(function () {
                      if (p && p.onError) return p.onError(n);
                      throw n;
                    });
                  },
                  x = function (n) {
                    return p.resize.fireAndForget({
                      width: n.width,
                      height: n.height,
                    });
                  },
                  k = function (n, r, o) {
                    void 0 === o && (o = !1);
                    var a = (function (n, e, t, r, o, i) {
                      void 0 === i && (i = !1);
                      for (
                        var a = {}, u = 0, c = Object.keys(t);
                        u < c.length;
                        u++
                      ) {
                        var s = c[u],
                          d = e[s];
                        if (!d || !d.sameDomain || (r === C(window) && M(n))) {
                          var f = Ot(e, 0, s, t[s], o);
                          (a[s] = f),
                            d && d.alias && !a[d.alias] && (a[d.alias] = f);
                        }
                      }
                      if (!i)
                        for (var l = 0, p = Object.keys(e); l < p.length; l++) {
                          var h = p[l];
                          t.hasOwnProperty(h) ||
                            (a[h] = Ot(e, 0, h, void 0, o));
                        }
                      return a;
                    })(
                      l,
                      t,
                      n,
                      r,
                      {
                        show: h,
                        hide: w,
                        close: y,
                        focus: zt,
                        onError: P,
                        resize: x,
                        onProps: b,
                        getParent: m,
                        getParentDomain: g,
                        uid: u,
                      },
                      o
                    );
                    e ? mn(e, a) : (e = a);
                    for (var c = 0; c < i.length; c++) (0, i[c])(e);
                  },
                  F = function (n) {
                    return v.try(function () {
                      return k(n, c, !0);
                    });
                  };
                return {
                  init: function () {
                    return v
                      .try(function () {
                        return (
                          (function (n, e) {
                            if (!B(n, e))
                              throw new Error(
                                "Can not be rendered by domain: " + e
                              );
                          })(o, c),
                          $e(l),
                          window.addEventListener("beforeunload", function () {
                            p.checkClose.fireAndForget();
                          }),
                          window.addEventListener("unload", function () {
                            p.checkClose.fireAndForget();
                          }),
                          H(l, function () {
                            qt();
                          }),
                          p.init({ updateProps: F, close: qt })
                        );
                      })
                      .then(function () {
                        return ((n = r.width),
                        (e = void 0 !== n && n),
                        (t = r.height),
                        (o = void 0 !== t && t),
                        (i = r.element),
                        Jn(void 0 === i ? "body" : i)
                          .catch(pn)
                          .then(function (n) {
                            return { width: e, height: o, element: n };
                          })).then(function (n) {
                          var e = n.width,
                            t = n.height,
                            r = n.element;
                          r &&
                            (e || t) &&
                            d !== Mt.POPUP &&
                            se(
                              r,
                              function (n) {
                                x({
                                  width: e ? n.width : void 0,
                                  height: t ? n.height : void 0,
                                });
                              },
                              { width: e, height: t }
                            );
                        });
                        var n, e, t, o, i;
                      })
                      .catch(function (n) {
                        P(n);
                      });
                  },
                  getProps: function () {
                    return (
                      e ||
                      (k(
                        (function (n, e, t) {
                          var r,
                            o = t.type,
                            i = t.uid;
                          if ("raw" === o) r = t.value;
                          else if ("uid" === o) {
                            if (!M(n))
                              throw new Error(
                                "Parent component window is on a different domain - expected " +
                                  C() +
                                  " - can not retrieve props"
                              );
                            var a = Ft(n);
                            r = zn("props", a && a.props[i]);
                          }
                          if (!r) throw new Error("Could not find props");
                          return xt(n, e, r);
                        })(l, c, f),
                        c
                      ),
                      e)
                    );
                  },
                };
              })(e);
              return n.init(), n;
            }
          }),
          p = function n(r) {
            var i,
              u = a({ props: (r = r || {}) }),
              c = u.eligible,
              f = u.reason,
              l = r.onDestroy;
            r.onDestroy = function () {
              if ((i && c && d.splice(d.indexOf(i), 1), l))
                return l.apply(void 0, arguments);
            };
            var p = St(e);
            p.init(),
              c ? p.setProps(r) : r.onDestroy && r.onDestroy(),
              Jt.register(function () {
                p.destroy(new Error("zoid destroyed all components"));
              });
            var h = function (n, e, i) {
              return v
                .try(function () {
                  if (!c)
                    return p.destroy().then(function () {
                      throw new Error(f || t + " component is not eligible");
                    });
                  if (!J(n)) throw new Error("Must pass window to renderTo");
                  return (function (n, e) {
                    return v.try(function () {
                      if (n.window) return _t(n.window).getType();
                      if (e) {
                        if (e !== Mt.IFRAME && e !== Mt.POPUP)
                          throw new Error("Unrecognized context: " + e);
                        return e;
                      }
                      return o;
                    });
                  })(r, i);
                })
                .then(function (t) {
                  return (
                    (e = (function (n, e) {
                      if (e) {
                        if ("string" != typeof e && !Bn(e))
                          throw new TypeError(
                            "Expected string or element selector to be passed"
                          );
                        return e;
                      }
                      if (n === Mt.POPUP) return "body";
                      throw new Error(
                        "Expected element to be passed to render iframe"
                      );
                    })(t, e)),
                    p.render(n, e, t)
                  );
                })
                .catch(function (n) {
                  return p.destroy(n).then(function () {
                    throw n;
                  });
                });
            };
            return (
              (i = s({}, p.getHelpers(), {
                isEligible: function () {
                  return c;
                },
                clone: function (e) {
                  var t = (void 0 === e ? {} : e).decorate;
                  return n((void 0 === t ? bn : t)(r));
                },
                render: function (n, e) {
                  return h(window, n, e);
                },
                renderTo: function (n, e, t) {
                  return h(n, e, t);
                },
              })),
              c && d.push(i),
              i
            );
          };
        if (
          (l(),
          gt("zoid_allow_delegate_" + t, function () {
            return !0;
          }),
          gt("zoid_delegate_" + t, function (n) {
            return { parent: St(e, n.data.overrides, n.source) };
          }),
          (u.components = u.components || {}),
          u.components[r])
        )
          throw new Error(
            "Can not register multiple components with the same tag: " + r
          );
        return (
          (u.components[r] = !0),
          {
            init: p,
            instances: d,
            driver: function (n, e) {
              var t = { react: Lt, angular: Rt, vue: Tt, angular2: Nt };
              if (!t[n])
                throw new Error("Could not find driver for framework: " + n);
              return c[n] || (c[n] = t[n].register(r, i, p, e)), c[n];
            },
            isChild: f,
            canRenderTo: function (n) {
              return bt(n, "zoid_allow_delegate_" + t)
                .then(function (n) {
                  return n.data;
                })
                .catch(function () {
                  return !1;
                });
            },
            registerChild: l,
          }
        );
      }
      function Kt(n) {
        Et();
        var e = $t(n),
          t = function (n) {
            return e.init(n);
          };
        (t.driver = function (n, t) {
          return e.driver(n, t);
        }),
          (t.isChild = function () {
            return e.isChild();
          }),
          (t.canRenderTo = function (n) {
            return e.canRenderTo(n);
          }),
          (t.instances = e.instances);
        var r = e.registerChild();
        return r && (window.xprops = t.xprops = r.getProps()), t;
      }
      function Vt(n, e) {
        for (var t = [], r = 0; r < n.length; r++) {
          var o = n[r].render(e);
          if (o)
            if (Array.isArray(o))
              for (var i = 0; i < o.length; i++) {
                var a = o[i];
                a && t.push(a);
              }
            else t.push(o);
        }
        return t;
      }
      var Zt = (function () {
          function n(n, e, t) {
            (this.type = "element"),
              (this.name = void 0),
              (this.props = void 0),
              (this.children = void 0),
              (this.onRender = void 0),
              (this.name = n),
              (this.props = e || {}),
              (this.children = t);
            var r = this.props.onRender;
            "function" == typeof r && ((this.onRender = r), delete e.onRender);
          }
          var e = n.prototype;
          return (
            (e.render = function (n) {
              var e = n(this);
              return this.onRender && this.onRender(e), e;
            }),
            (e.renderChildren = function (n) {
              return Vt(this.children, n);
            }),
            n
          );
        })(),
        Gt = (function () {
          function n(n) {
            (this.type = "fragment"),
              (this.children = void 0),
              (this.children = n);
          }
          return (
            (n.prototype.render = function (n) {
              return Vt(this.children, n);
            }),
            n
          );
        })(),
        Xt = (function () {
          function n(n) {
            (this.type = "text"), (this.text = void 0), (this.text = n);
          }
          return (
            (n.prototype.render = function (n) {
              return n(this);
            }),
            n
          );
        })(),
        Yt = (function () {
          function n(n, e, t) {
            (this.type = "component"),
              (this.component = void 0),
              (this.props = void 0),
              (this.children = void 0),
              (this.component = n),
              (this.props = e || {}),
              (this.children = t),
              (this.props.children = t);
          }
          var e = n.prototype;
          return (
            (e.renderComponent = function (n) {
              var e = (function (n) {
                var e = Qt(Array.isArray(n) ? n : [n]);
                return 1 === e.length
                  ? e[0]
                  : e.length > 1
                  ? new Gt(e)
                  : void 0;
              })(this.component(this.props, this.children));
              if (e) return e.render(n);
            }),
            (e.render = function (n) {
              return n(this);
            }),
            (e.renderChildren = function (n) {
              return Vt(this.children, n);
            }),
            n
          );
        })();
      function Qt(n) {
        for (var e = [], t = 0; t < n.length; t++) {
          var r = n[t];
          if (r)
            if ("string" == typeof r || "number" == typeof r)
              e.push(new Xt(r.toString()));
            else {
              if ("boolean" == typeof r) continue;
              if (Array.isArray(r))
                for (var o = 0, i = Qt(r); o < i.length; o++) e.push(i[o]);
              else {
                if (
                  !r ||
                  ("element" !== r.type &&
                    "text" !== r.type &&
                    "component" !== r.type)
                )
                  throw new TypeError("Unrecognized node type: " + typeof r);
                e.push(r);
              }
            }
        }
        return e;
      }
      var nr,
        er = function (n, e) {
          for (
            var t = arguments.length, r = new Array(t > 2 ? t - 2 : 0), o = 2;
            o < t;
            o++
          )
            r[o - 2] = arguments[o];
          if (((r = Qt(r)), "string" == typeof n)) return new Zt(n, e, r);
          if ("function" == typeof n) return new Yt(n, e, r);
          throw new TypeError(
            "Expected jsx element to be a string or a function"
          );
        },
        tr =
          (((nr = {}).iframe = function (n, e) {
            var t = e.children[0];
            if (
              1 !== e.children.length ||
              !t ||
              "element" !== t.type ||
              "html" !== t.name
            )
              throw new Error(
                "Expected only single html element node as child of iframe element"
              );
            n.addEventListener("load", function () {
              var e = n.contentWindow;
              if (!e) throw new Error("Expected frame to have contentWindow");
              for (
                var r = e.document, o = r.documentElement;
                o.children && o.children.length;

              )
                o.removeChild(o.children[0]);
              for (var i = t.render(rr({ doc: r })); i.children.length; )
                o.appendChild(i.children[0]);
            });
          }),
          (nr.script = function (n, e) {
            var t = e.children[0];
            if (1 !== e.children.length || !t || "text" !== t.type)
              throw new Error(
                "Expected only single text node as child of script element"
              );
            n.text = t.text;
          }),
          (nr.default = function (n, e, t) {
            for (var r = 0, o = e.renderChildren(t); r < o.length; r++)
              n.appendChild(o[r]);
          }),
          nr);
      function rr(n) {
        void 0 === n && (n = {});
        var e = n.doc,
          t = void 0 === e ? document : e;
        return function n(e) {
          if ("component" === e.type) return e.renderComponent(n);
          if ("text" === e.type)
            return (function (n, e) {
              return n.createTextNode(e.text);
            })(t, e);
          if ("element" === e.type) {
            var r = (function (n, e) {
              return e.props.el ? e.props.el : n.createElement(e.name);
            })(t, e);
            return (
              (function (n, e) {
                for (
                  var t = e.props, r = 0, o = Object.keys(t);
                  r < o.length;
                  r++
                ) {
                  var i = o[r],
                    a = t[i];
                  null != a &&
                    "el" !== i &&
                    "innerHTML" !== i &&
                    (i.match(/^on[A-Z][a-z]/) && "function" == typeof a
                      ? n.addEventListener(i.slice(2).toLowerCase(), a)
                      : "string" == typeof a || "number" == typeof a
                      ? n.setAttribute(i, a.toString())
                      : "boolean" == typeof a &&
                        !0 === a &&
                        n.setAttribute(i, ""));
                }
                "iframe" !== n.tagName.toLowerCase() ||
                  t.id ||
                  n.setAttribute(
                    "id",
                    "jsx-iframe-" +
                      "xxxxxxxxxx".replace(/./g, function () {
                        return "0123456789abcdef".charAt(
                          Math.floor(Math.random() * "0123456789abcdef".length)
                        );
                      })
                  );
              })(r, e),
              (function (n, e, t, r) {
                if (e.props.hasOwnProperty("innerHTML")) {
                  if (e.children.length)
                    throw new Error(
                      "Expected no children to be passed when innerHTML prop is set"
                    );
                  var o = e.props.innerHTML;
                  if ("string" != typeof o)
                    throw new TypeError("innerHTML prop must be string");
                  "script" === e.name
                    ? (n.text = o)
                    : ((n.innerHTML = o),
                      (function (n, e) {
                        void 0 === e && (e = window.document);
                        for (
                          var t = 0, r = n.querySelectorAll("script");
                          t < r.length;
                          t++
                        ) {
                          var o = r[t],
                            i = o.parentNode;
                          if (i) {
                            var a = e.createElement("script");
                            (a.text = o.textContent), i.replaceChild(a, o);
                          }
                        }
                      })(n, t));
                } else (tr[e.name] || tr.default)(n, e, r);
              })(r, e, t, n),
              r
            );
          }
          throw new TypeError("Unhandleable node");
        };
      }
      var or,
        ir,
        ar,
        ur,
        cr,
        sr,
        dr,
        fr,
        lr,
        pr,
        hr,
        wr = { br: !0 };
      function yr(n) {
        return n
          .replace(/&/g, "&amp;")
          .replace(/</g, "&lt;")
          .replace(/>/g, "&gt;")
          .replace(/"/g, "&quot;")
          .replace(/'/g, "&#39;")
          .replace(/\//g, "&#x2F;");
      }
      function mr(n) {
        var e = n.svg,
          t = r(n, ["svg"]);
        if (!e) throw new TypeError("Expected svg prop");
        if (
          "string" !=
          typeof (e = e.render(function n(e) {
            if ("component" === e.type)
              return [].concat(e.renderComponent(n)).join("");
            if ("element" === e.type) {
              var t =
                ((o = e.props),
                (i = Object.keys(o).filter(function (n) {
                  var e = o[n];
                  return (
                    "innerHTML" !== n &&
                    ("string" == typeof e || "number" == typeof e || !0 === e)
                  );
                })).length
                  ? " " +
                    i
                      .map(function (n) {
                        var e = o[n];
                        if (!0 === e) return "" + yr(n);
                        if ("string" != typeof e && "number" != typeof e)
                          throw new TypeError(
                            "Unexpected prop type: " + typeof e
                          );
                        return "" === e
                          ? yr(n)
                          : yr(n) + '="' + yr(e.toString()) + '"';
                      })
                      .join(" ")
                  : "");
              if (wr[e.name]) return "<" + e.name + t + " />";
              var r =
                "string" == typeof e.props.innerHTML
                  ? e.props.innerHTML
                  : e.renderChildren(n).join("");
              return "<" + e.name + t + ">" + r + "</" + e.name + ">";
            }
            var o, i;
            if ("text" === e.type) return yr(e.text);
            throw new TypeError("Unhandleable node: " + e.type);
          }))
        )
          throw new TypeError("Expected svg prop to be a string or jsx node");
        var o = s({ src: vn(e) }, t);
        return er("img", o);
      }
      function vr(n) {
        var e = n.render,
          t = n.name,
          o = n.logoColor,
          i = r(n, ["render", "name", "logoColor"]);
        return er(
          mr,
          s({}, i, {
            svg: e(),
            alt: "",
            class:
              "paypal-logo paypal-logo-" +
              t +
              " " +
              (o ? "paypal-logo-color-" + o : ""),
          })
        );
      }
      function gr(n, e, t) {
        var r;
        if ((t && (r = e[t]), r || (r = e.default), !r))
          throw new Error(
            "No " + (t || "default") + " logo available for " + n
          );
        return r;
      }
      ((or = {}).default = { primary: "#005498", secondary: "#FFD800" }),
        (or.white = { primary: "#ffffff", secondary: "#ffffff" }),
        (or.black = { primary: "#005498", secondary: "#FFD800" }),
        ((ir = {}).default = { primary: "#333030" }),
        (ir.white = { primary: "#ffffff" }),
        (ir.black = { primary: "#333030" }),
        ((ar = {}).default = { primary: "#333030" }),
        (ar.white = { primary: "#ffffff" }),
        (ar.black = { primary: "#333030" }),
        ((ur = {}).default = { primary: "#003087" }),
        (ur.blue = { primary: "#003087" }),
        (ur.white = { primary: "#ffffff" }),
        (ur.black = { primary: "#333030" }),
        ((cr = {}).default = { primary: "#c8036f", secondary: "#71706f" }),
        (cr.white = { primary: "#ffffff", secondary: "#ffffff" }),
        (cr.black = { primary: "#71706F", secondary: "#C8036F" }),
        ((sr = {}).default = {
          primary: "#ED1C24",
          secondary: "#ffffff",
          tertiary: "#003a7d",
          quaternary: "#FFFFFF",
        }),
        (sr.white = {
          primary: "#FFFFFF",
          secondary: "#000000",
          tertiary: "#FFFFFF",
          quaternary: "#FFFFFF",
        }),
        (sr.black = {
          primary: "#ED1C24",
          secondary: "#FFFFFF",
          tertiary: "#003a7d",
          quaternary: "#FFFFFF",
        }),
        ((dr = {}).default = {
          primary: "#000000",
          secondary: "#cd0067",
          tertiary: "#ffffff",
        }),
        (dr.white = {
          primary: "#ffffff",
          secondary: "#ffffff",
          tertiary: "#ffffff",
        }),
        (dr.black = {
          primary: "#000000",
          secondary: "#FFFFFF",
          tertiary: "#CD0067",
        }),
        ((fr = {}).default = { primary: "#00C0EE", secondary: "#1a4b67" }),
        (fr.white = { primary: "#ffffff", secondary: "#ffffff" }),
        (fr.black = { primary: "#1A4B67", secondary: "#00C0EE" }),
        ((lr = {}).default = { primary: "#d03238", secondary: "#b3b1b1" }),
        (lr.white = { primary: "#ffffff", secondary: "#ffffff" }),
        (lr.black = { primary: "#d03238", secondary: "#b3b1b1" });
      var br =
        (((pr = {}).default = { primary: "#003087", secondary: "#009cde" }),
        (pr.blue = { primary: "#003087", secondary: "#009cde" }),
        (pr.white = { primary: "#ffffff", secondary: "#ffffff" }),
        (pr.black = { primary: "#333030", secondary: "#636363" }),
        (pr.monochrome = { primary: "#000000", secondary: "#000000" }),
        pr);
      function Pr(n) {
        var e = n.logoColor,
          t = void 0 === e ? "default" : e,
          o = r(n, ["logoColor"]),
          i = gr("paypal", br, t),
          a = i.primary,
          u = i.secondary;
        return er(
          vr,
          s({}, o, o, {
            name: "paypal",
            alt: "PayPal",
            "aria-label": "PayPal",
            logoColor: t,
            render: function () {
              return er(
                "svg",
                {
                  width: "101px",
                  height: "32",
                  viewBox: "0 0 101 32",
                  preserveAspectRatio: "xMinYMin meet",
                  xmlns: "http://www.w3.org/2000/svg",
                },
                er("path", {
                  fill: a,
                  d: "M 12.237 2.8 L 4.437 2.8 C 3.937 2.8 3.437 3.2 3.337 3.7 L 0.237 23.7 C 0.137 24.1 0.437 24.4 0.837 24.4 L 4.537 24.4 C 5.037 24.4 5.537 24 5.637 23.5 L 6.437 18.1 C 6.537 17.6 6.937 17.2 7.537 17.2 L 10.037 17.2 C 15.137 17.2 18.137 14.7 18.937 9.8 C 19.237 7.7 18.937 6 17.937 4.8 C 16.837 3.5 14.837 2.8 12.237 2.8 Z M 13.137 10.1 C 12.737 12.9 10.537 12.9 8.537 12.9 L 7.337 12.9 L 8.137 7.7 C 8.137 7.4 8.437 7.2 8.737 7.2 L 9.237 7.2 C 10.637 7.2 11.937 7.2 12.637 8 C 13.137 8.4 13.337 9.1 13.137 10.1 Z",
                }),
                er("path", {
                  fill: a,
                  d: "M 35.437 10 L 31.737 10 C 31.437 10 31.137 10.2 31.137 10.5 L 30.937 11.5 L 30.637 11.1 C 29.837 9.9 28.037 9.5 26.237 9.5 C 22.137 9.5 18.637 12.6 17.937 17 C 17.537 19.2 18.037 21.3 19.337 22.7 C 20.437 24 22.137 24.6 24.037 24.6 C 27.337 24.6 29.237 22.5 29.237 22.5 L 29.037 23.5 C 28.937 23.9 29.237 24.3 29.637 24.3 L 33.037 24.3 C 33.537 24.3 34.037 23.9 34.137 23.4 L 36.137 10.6 C 36.237 10.4 35.837 10 35.437 10 Z M 30.337 17.2 C 29.937 19.3 28.337 20.8 26.137 20.8 C 25.037 20.8 24.237 20.5 23.637 19.8 C 23.037 19.1 22.837 18.2 23.037 17.2 C 23.337 15.1 25.137 13.6 27.237 13.6 C 28.337 13.6 29.137 14 29.737 14.6 C 30.237 15.3 30.437 16.2 30.337 17.2 Z",
                }),
                er("path", {
                  fill: a,
                  d: "M 55.337 10 L 51.637 10 C 51.237 10 50.937 10.2 50.737 10.5 L 45.537 18.1 L 43.337 10.8 C 43.237 10.3 42.737 10 42.337 10 L 38.637 10 C 38.237 10 37.837 10.4 38.037 10.9 L 42.137 23 L 38.237 28.4 C 37.937 28.8 38.237 29.4 38.737 29.4 L 42.437 29.4 C 42.837 29.4 43.137 29.2 43.337 28.9 L 55.837 10.9 C 56.137 10.6 55.837 10 55.337 10 Z",
                }),
                er("path", {
                  fill: u,
                  d: "M 67.737 2.8 L 59.937 2.8 C 59.437 2.8 58.937 3.2 58.837 3.7 L 55.737 23.6 C 55.637 24 55.937 24.3 56.337 24.3 L 60.337 24.3 C 60.737 24.3 61.037 24 61.037 23.7 L 61.937 18 C 62.037 17.5 62.437 17.1 63.037 17.1 L 65.537 17.1 C 70.637 17.1 73.637 14.6 74.437 9.7 C 74.737 7.6 74.437 5.9 73.437 4.7 C 72.237 3.5 70.337 2.8 67.737 2.8 Z M 68.637 10.1 C 68.237 12.9 66.037 12.9 64.037 12.9 L 62.837 12.9 L 63.637 7.7 C 63.637 7.4 63.937 7.2 64.237 7.2 L 64.737 7.2 C 66.137 7.2 67.437 7.2 68.137 8 C 68.637 8.4 68.737 9.1 68.637 10.1 Z",
                }),
                er("path", {
                  fill: u,
                  d: "M 90.937 10 L 87.237 10 C 86.937 10 86.637 10.2 86.637 10.5 L 86.437 11.5 L 86.137 11.1 C 85.337 9.9 83.537 9.5 81.737 9.5 C 77.637 9.5 74.137 12.6 73.437 17 C 73.037 19.2 73.537 21.3 74.837 22.7 C 75.937 24 77.637 24.6 79.537 24.6 C 82.837 24.6 84.737 22.5 84.737 22.5 L 84.537 23.5 C 84.437 23.9 84.737 24.3 85.137 24.3 L 88.537 24.3 C 89.037 24.3 89.537 23.9 89.637 23.4 L 91.637 10.6 C 91.637 10.4 91.337 10 90.937 10 Z M 85.737 17.2 C 85.337 19.3 83.737 20.8 81.537 20.8 C 80.437 20.8 79.637 20.5 79.037 19.8 C 78.437 19.1 78.237 18.2 78.437 17.2 C 78.737 15.1 80.537 13.6 82.637 13.6 C 83.737 13.6 84.537 14 85.137 14.6 C 85.737 15.3 85.937 16.2 85.737 17.2 Z",
                }),
                er("path", {
                  fill: u,
                  d: "M 95.337 3.3 L 92.137 23.6 C 92.037 24 92.337 24.3 92.737 24.3 L 95.937 24.3 C 96.437 24.3 96.937 23.9 97.037 23.4 L 100.237 3.5 C 100.337 3.1 100.037 2.8 99.637 2.8 L 96.037 2.8 C 95.637 2.8 95.437 3 95.337 3.3 Z",
                })
              );
            },
          })
        );
      }
      var xr,
        _r,
        Er,
        kr,
        Fr,
        Cr,
        Mr,
        Or,
        Ar,
        jr,
        zr,
        qr,
        Dr,
        Wr,
        Sr =
          (((hr = {}).default = {
            primary: "#009cde",
            secondary: "#012169",
            tertiary: "#003087",
          }),
          (hr.blue = {
            primary: "#009cde",
            secondary: "#012169",
            tertiary: "#003087",
          }),
          (hr.white = {
            primary: "#ffffff",
            primaryOpacity: "0.7",
            secondary: "#ffffff",
            secondaryOpacity: "0.7",
            tertiary: "#ffffff",
          }),
          (hr.black = {
            primary: "#808080",
            secondary: "#000000",
            tertiary: "#1a1a1a",
          }),
          hr);
      function Lr(n) {
        var e = n.logoColor,
          t = void 0 === e ? "default" : e,
          o = r(n, ["logoColor"]),
          i = gr("pp", Sr, t),
          a = i.primary,
          u = i.secondary,
          c = i.tertiary,
          d = i.primaryOpacity,
          f = void 0 === d ? "1" : d,
          l = i.secondaryOpacity,
          p = void 0 === l ? "1" : l,
          h = i.tertiaryOpacity,
          w = void 0 === h ? "1" : h;
        return er(
          vr,
          s({}, o, o, {
            name: "pp",
            alt: "PP",
            "aria-label": "PP",
            logoColor: t,
            render: function () {
              return er(
                "svg",
                {
                  width: "24",
                  height: "32",
                  viewBox: "0 0 24 32",
                  preserveAspectRatio: "xMinYMin meet",
                  xmlns: "http://www.w3.org/2000/svg",
                },
                er("path", {
                  fill: a,
                  opacity: f,
                  d: "M 20.924 7.157 C 21.204 5.057 20.924 3.657 19.801 2.357 C 18.583 0.957 16.43 0.257 13.716 0.257 L 5.758 0.257 C 5.29 0.257 4.729 0.757 4.634 1.257 L 1.358 23.457 C 1.358 23.857 1.639 24.357 2.107 24.357 L 6.975 24.357 L 6.694 26.557 C 6.6 26.957 6.881 27.257 7.255 27.257 L 11.375 27.257 C 11.844 27.257 12.311 26.957 12.405 26.457 L 12.405 26.157 L 13.247 20.957 L 13.247 20.757 C 13.341 20.257 13.809 19.857 14.277 19.857 L 14.84 19.857 C 18.864 19.857 21.954 18.157 22.89 13.157 C 23.358 11.057 23.172 9.357 22.048 8.157 C 21.767 7.757 21.298 7.457 20.924 7.157 L 20.924 7.157",
                }),
                er("path", {
                  fill: u,
                  opacity: p,
                  d: "M 20.924 7.157 C 21.204 5.057 20.924 3.657 19.801 2.357 C 18.583 0.957 16.43 0.257 13.716 0.257 L 5.758 0.257 C 5.29 0.257 4.729 0.757 4.634 1.257 L 1.358 23.457 C 1.358 23.857 1.639 24.357 2.107 24.357 L 6.975 24.357 L 8.286 16.057 L 8.192 16.357 C 8.286 15.757 8.754 15.357 9.315 15.357 L 11.655 15.357 C 16.243 15.357 19.801 13.357 20.924 7.757 C 20.831 7.457 20.924 7.357 20.924 7.157",
                }),
                er("path", {
                  fill: c,
                  opacity: w,
                  d: "M 9.504 7.157 C 9.596 6.857 9.784 6.557 10.065 6.357 C 10.251 6.357 10.345 6.257 10.532 6.257 L 16.711 6.257 C 17.461 6.257 18.208 6.357 18.772 6.457 C 18.958 6.457 19.146 6.457 19.333 6.557 C 19.52 6.657 19.707 6.657 19.801 6.757 C 19.894 6.757 19.987 6.757 20.082 6.757 C 20.362 6.857 20.643 7.057 20.924 7.157 C 21.204 5.057 20.924 3.657 19.801 2.257 C 18.677 0.857 16.525 0.257 13.809 0.257 L 5.758 0.257 C 5.29 0.257 4.729 0.657 4.634 1.257 L 1.358 23.457 C 1.358 23.857 1.639 24.357 2.107 24.357 L 6.975 24.357 L 8.286 16.057 L 9.504 7.157 Z",
                })
              );
            },
          })
        );
      }
      function Tr(n) {
        var e,
          t = n.context,
          r = n.close,
          o = n.focus,
          i = n.event,
          c = n.frame,
          s = n.prerenderFrame,
          d = n.content,
          f = void 0 === d ? {} : d,
          l = n.autoResize,
          p = n.hideCloseButton,
          h = "paypal-overlay-" + on(),
          w = function (n) {
            return function (e) {
              i.on("zoid-display", function () {
                return oe(e, "show-" + n, pn);
              }),
                i.on("zoid-close", function () {
                  return oe(e, "hide-" + n, pn);
                });
            };
          };
        return (
          c &&
            s &&
            (c.classList.add("component-frame"),
            s.classList.add("prerender-frame"),
            s.classList.add("visible"),
            c.classList.add("invisible"),
            i.on("zoid-rendered", function () {
              s.classList.remove("visible"),
                s.classList.add("invisible"),
                c.classList.remove("invisible"),
                c.classList.add("visible"),
                setTimeout(function () {
                  ue(s);
                }, 1);
            }),
            (e = er(
              "div",
              {
                class: "outlet",
                onRender: function (n) {
                  w("component")(n),
                    l &&
                      (function (n) {
                        i.on("zoid-resize", function (e) {
                          var t = e.width,
                            r = e.height;
                          "number" == typeof t && (n.style.width = be(t)),
                            "number" == typeof r && (n.style.height = be(r));
                        });
                      })(n);
                },
              },
              er("node", { el: c }),
              er("node", { el: s })
            ))),
          er(
            "div",
            {
              id: h,
              onRender: w("container"),
              class: "paypal-checkout-sandbox",
            },
            er(
              "style",
              null,
              (function (n) {
                var e = n.uid;
                return (
                  "\n        #" +
                  e +
                  ".paypal-checkout-sandbox {\n            display: block;\n            position: fixed;\n            top: 0;\n            left: 0;\n\n            width: 100%;\n            height: 100%;\n            width: 100vw;\n            height: 100vh;\n            max-width: 100%;\n            max-height: 100%;\n            min-width: 100%;\n            min-height: 100%;\n\n            z-index: 2147483647;\n\n            animation-duration: 0.3s;\n            animation-iteration-count: 1;\n            animation-fill-mode: forwards !important;\n            opacity: 0;\n        }\n\n        #" +
                  e +
                  ".paypal-checkout-sandbox .paypal-checkout-sandbox-iframe {\n            display: block;\n            position: absolute;\n            top: 0;\n            left: 0;\n            width: 100%;\n            height: 100%;\n        }\n\n        @keyframes show-container {\n            from {\n                opacity: 0;\n            }\n\n            to {\n                opacity: 1;\n            }\n        }\n\n        @keyframes hide-container {\n            from {\n                opacity: 1;\n            }\n\n            50% {\n                opacity: 1;\n            }\n\n            to {\n                opacity: 0;\n            }\n        }\n    "
                );
              })({ uid: h })
            ),
            er(
              "iframe",
              {
                title: "PayPal Checkout Overlay",
                name: "__paypal_checkout_sandbox_" + h + "__",
                scrolling: "no",
                class: "paypal-checkout-sandbox-iframe",
              },
              er(
                "html",
                null,
                er(
                  "body",
                  null,
                  er(
                    "div",
                    {
                      id: h,
                      onClick: function (n) {
                        n.preventDefault(),
                          n.stopPropagation(),
                          u() &&
                            (a()
                              ? window.alert(
                                  "Please switch tabs to reactivate the PayPal window"
                                )
                              : o());
                      },
                      class:
                        "paypal-overlay-context-" +
                        t +
                        " paypal-checkout-overlay",
                    },
                    !p &&
                      er("a", {
                        href: "#",
                        class: "paypal-checkout-close",
                        onClick: function (n) {
                          n.preventDefault(), n.stopPropagation(), r();
                        },
                        "aria-label": "close",
                        role: "button",
                      }),
                    er(
                      "div",
                      { class: "paypal-checkout-modal" },
                      er(
                        "div",
                        { class: "paypal-checkout-logo" },
                        er(Lr, { logoColor: "white" }),
                        er(Pr, { logoColor: "white" })
                      ),
                      f.windowMessage &&
                        er(
                          "div",
                          { class: "paypal-checkout-message" },
                          f.windowMessage
                        ),
                      f.continueMessage &&
                        er(
                          "div",
                          { class: "paypal-checkout-continue" },
                          er("a", { onClick: o, href: "#" }, f.continueMessage)
                        ),
                      er(
                        "div",
                        { class: "paypal-checkout-loader" },
                        er("div", { class: "paypal-spinner" })
                      )
                    ),
                    er("div", { class: "paypal-checkout-iframe-container" }, e),
                    er(
                      "style",
                      null,
                      (function (n) {
                        var e = n.uid;
                        return (
                          "\n        #" +
                          e +
                          " {\n            position: absolute;\n            z-index: 2147483647;\n            top: 0;\n            left: 0;\n            width: 100%;\n            height: 100%;\n\n            transform: translate3d(0, 0, 0);\n\n            background-color: black;\n            background-color: rgba(0, 0, 0, 0.8);\n            background: radial-gradient(50% 50%, ellipse closest-corner, rgba(0,0,0,0.6) 1%, rgba(0,0,0,0.8) 100%);\n\n            color: #fff;\n        }\n\n        #" +
                          e +
                          " a {\n            color: #fff;\n        }\n\n        #" +
                          e +
                          " .paypal-checkout-close:before,\n        #" +
                          e +
                          " .paypal-checkout-close:after {\n            background-color: #fff;\n        }\n\n        #" +
                          e +
                          ".paypal-overlay-context-" +
                          Mt.POPUP +
                          " {\n            cursor: pointer;\n        }\n\n        #" +
                          e +
                          " a {\n            text-decoration: none;\n        }\n\n        #" +
                          e +
                          ' .paypal-checkout-modal {\n            font-family: "HelveticaNeue", "HelveticaNeue-Light", "Helvetica Neue Light", helvetica, arial, sans-serif;\n            font-size: 14px;\n            text-align: center;\n\n            box-sizing: border-box;\n            max-width: 350px;\n            top: 50%;\n            left: 50%;\n            position: absolute;\n            transform: translateX(-50%) translateY(-50%);\n            cursor: pointer;\n            text-align: center;\n        }\n\n        #' +
                          e +
                          ".paypal-overlay-loading .paypal-checkout-message, #" +
                          e +
                          ".paypal-overlay-loading .paypal-checkout-continue {\n            display: none;\n        }\n\n        .paypal-checkout-loader {\n            display: none;\n        }\n\n        #" +
                          e +
                          ".paypal-overlay-loading .paypal-checkout-loader {\n            display: block;\n        }\n\n        #" +
                          e +
                          " .paypal-checkout-modal .paypal-checkout-logo {\n            cursor: pointer;\n            margin-bottom: 30px;\n            display: inline-block;\n        }\n\n        #" +
                          e +
                          " .paypal-checkout-modal .paypal-checkout-logo img {\n            height: 36px;\n        }\n\n        #" +
                          e +
                          " .paypal-checkout-modal .paypal-checkout-logo img.paypal-checkout-logo-pp {\n            margin-right: 10px;\n        }\n\n        #" +
                          e +
                          " .paypal-checkout-modal .paypal-checkout-message {\n            font-size: 15px;\n            line-height: 1.5;\n            padding: 10px 0;\n        }\n\n        #" +
                          e +
                          ".paypal-overlay-context-" +
                          Mt.IFRAME +
                          " .paypal-checkout-message, #" +
                          e +
                          ".paypal-overlay-context-" +
                          Mt.IFRAME +
                          " .paypal-checkout-continue {\n            display: none;\n        }\n\n        #" +
                          e +
                          " .paypal-checkout-modal .paypal-checkout-continue {\n            font-size: 15px;\n            line-height: 1.35;\n            padding: 10px 0;\n            font-weight: bold;\n        }\n\n        #" +
                          e +
                          " .paypal-checkout-modal .paypal-checkout-continue a {\n            border-bottom: 1px solid white;\n        }\n\n        #" +
                          e +
                          " .paypal-checkout-close {\n            position: absolute;\n            right: 16px;\n            top: 16px;\n            width: 16px;\n            height: 16px;\n            opacity: 0.6;\n        }\n\n        #" +
                          e +
                          ".paypal-overlay-loading .paypal-checkout-close {\n            display: none;\n        }\n\n        #" +
                          e +
                          " .paypal-checkout-close:hover {\n            opacity: 1;\n        }\n\n        #" +
                          e +
                          " .paypal-checkout-close:before, .paypal-checkout-close:after {\n            position: absolute;\n            left: 8px;\n            content: ' ';\n            height: 16px;\n            width: 2px;\n        }\n\n        #" +
                          e +
                          " .paypal-checkout-close:before {\n            transform: rotate(45deg);\n        }\n\n        #" +
                          e +
                          " .paypal-checkout-close:after {\n            transform: rotate(-45deg);\n        }\n\n        #" +
                          e +
                          " .paypal-checkout-iframe-container {\n            display: none;\n        }\n\n        #" +
                          e +
                          ".paypal-overlay-context-" +
                          Mt.IFRAME +
                          " .paypal-checkout-iframe-container,\n        #" +
                          e +
                          ".paypal-overlay-context-" +
                          Mt.IFRAME +
                          " .paypal-checkout-iframe-container > .outlet,\n        #" +
                          e +
                          ".paypal-overlay-context-" +
                          Mt.IFRAME +
                          " .paypal-checkout-iframe-container > .outlet > iframe {\n            max-height: 95vh;\n            max-width: 95vw;\n        }\n\n        #" +
                          e +
                          ".paypal-overlay-context-" +
                          Mt.IFRAME +
                          " .paypal-checkout-iframe-container {\n\n            display: block;\n\n            position: absolute;\n\n            top: 50%;\n            left: 50%;\n\n            min-width: 450px;\n\n            transform: translate(-50%, -50%);\n            transform: translate3d(-50%, -50%, 0);\n\n            border-radius: 10px;\n            overflow: hidden;\n        }\n\n        #" +
                          e +
                          ".paypal-overlay-context-" +
                          Mt.IFRAME +
                          " .outlet {\n\n            position: relative;\n\n            transition: all 0.3s ease;\n            animation-duration: 0.3s;\n            animation-fill-mode: forwards !important;\n\n            min-width: 450px;\n            max-width: 450px;\n            width: 450px;\n            height: 535px;\n\n            background-color: white;\n\n            overflow: auto;\n\n            opacity: 0;\n            transform: scale3d(.3, .3, .3);\n\n            -webkit-overflow-scrolling: touch;\n        }\n\n        #" +
                          e +
                          ".paypal-overlay-context-" +
                          Mt.IFRAME +
                          " .outlet > iframe {\n            position: absolute;\n            top: 0;\n            left: 0;\n            transition: opacity .4s ease-in-out;\n        }\n\n        #" +
                          e +
                          ".paypal-overlay-context-" +
                          Mt.IFRAME +
                          " .outlet > iframe.component-frame {\n            z-index: 100;\n        }\n\n        #" +
                          e +
                          ".paypal-overlay-context-" +
                          Mt.IFRAME +
                          " .outlet > iframe.prerender-frame {\n            z-index: 200;\n        }\n\n        #" +
                          e +
                          ".paypal-overlay-context-" +
                          Mt.IFRAME +
                          " .outlet > iframe.visible {\n            opacity: 1;\n            z-index: 200;\n        }\n\n        #" +
                          e +
                          ".paypal-overlay-context-" +
                          Mt.IFRAME +
                          " .outlet > iframe.invisible {\n            opacity: 0;\n            z-index: 100;\n        }\n\n        @media screen and (max-width: 470px) {\n\n            #" +
                          e +
                          ".paypal-overlay-context-" +
                          Mt.IFRAME +
                          " .paypal-checkout-iframe-container,\n            #" +
                          e +
                          ".paypal-overlay-context-" +
                          Mt.IFRAME +
                          " .outlet {\n                min-width: 100%;\n                min-width: calc(100% - 20px);\n\n                max-width: 100%;\n                max-width: calc(100% - 20px);\n            }\n        }\n\n        #" +
                          e +
                          ".paypal-overlay-context-" +
                          Mt.IFRAME +
                          " .outlet iframe {\n            width: 1px;\n            min-width: 100%;\n            height: 100%;\n        }\n\n        @keyframes show-component {\n            from {\n                opacity: 0;\n                transform: scale3d(.3, .3, .3);\n            }\n\n            to {\n                opacity: 1;\n                transform: scale3d(1, 1, 1);\n            }\n        }\n\n        @keyframes hide-component {\n            from {\n                opacity: 1;\n                transform: scale3d(1, 1, 1);\n            }\n\n            to {\n                opacity: 0;\n                transform: scale3d(.3, .3, .3);\n            }\n        }\n\n        .paypal-spinner {\n            height: 30px;\n            width: 30px;\n            display: inline-block;\n            box-sizing: content-box;\n            opacity: 1;\n            filter: alpha(opacity=100);\n            animation: rotation .7s infinite linear;\n            border-left: 8px solid rgba(0, 0, 0, .2);\n            border-right: 8px solid rgba(0, 0, 0, .2);\n            border-bottom: 8px solid rgba(0, 0, 0, .2);\n            border-top: 8px solid #fff;\n            border-radius: 100%\n        }\n\n        @keyframes rotation {\n            from {\n                transform: rotate(0deg)\n            }\n            to {\n                transform: rotate(359deg)\n            }\n        }\n    "
                        );
                      })({ uid: h })
                    )
                  )
                )
              )
            )
          )
        );
      }
      function Rr(n, e) {
        var t = n.nonce;
        return er(
          "html",
          null,
          er(
            "head",
            null,
            er("title", null, "PayPal"),
            er("meta", {
              name: "viewport",
              content: "width=device-width, initial-scale=1",
            })
          ),
          er(
            "body",
            null,
            er(
              "div",
              { class: "preloader spinner" },
              er("style", {
                nonce: t,
                innerHTML:
                  "\n\n    body {\n        width: 100%;\n        height: 100%;\n        overflow: hidden;\n        position: fixed;\n        top: 0;\n        left: 0;\n        margin: 0;\n    }\n\n    .spinner {\n        height: 100%;\n        width: 100%;\n        position: absolute;\n        z-index: 10\n    }\n\n    .spinner .spinWrap {\n        width: 200px;\n        height: 100px;\n        position: absolute;\n        top: 50%;\n        left: 50%;\n        margin-left: -100px;\n        margin-top: -50px\n    }\n\n    .spinner .loader,\n    .spinner .spinnerImage {\n        height: 100px;\n        width: 100px;\n        position: absolute;\n        top: 0;\n        left: 50%;\n        opacity: 1;\n        filter: alpha(opacity=100)\n    }\n\n    .spinner .spinnerImage {\n        margin: 28px 0 0 -25px;\n        background: url(https://www.paypalobjects.com/images/checkout/hermes/icon_ot_spin_lock_skinny.png) no-repeat\n    }\n\n    .spinner .loader {\n        margin: 0 0 0 -55px;\n        background-color: transparent;\n        animation: rotation .7s infinite linear;\n        border-left: 5px solid #cbcbca;\n        border-right: 5px solid #cbcbca;\n        border-bottom: 5px solid #cbcbca;\n        border-top: 5px solid #2380be;\n        border-radius: 100%\n    }\n\n    @keyframes rotation {\n        from {\n            transform: rotate(0deg)\n        }\n        to {\n            transform: rotate(359deg)\n        }\n    }\n",
              }),
              er(
                "div",
                { class: "spinWrap" },
                er("p", { class: "spinnerImage" }),
                er("p", { class: "loader" })
              )
            ),
            e
          )
        );
      }
      ((xr = {}).default = { main: "#005DA0", card: "#AEB1BC" }),
        (xr.white = { main: "#FFFFFF", card: "#FFFFFF" }),
        (xr.black = { main: "#333030", card: "#333030" }),
        ((_r = {}).default = { primary: "#FFFFFF", secondary: "#EB6F93" }),
        (_r.white = { primary: "#FFFFFF", secondary: "#2C2E2F" }),
        (_r.black = { primary: "#FFFFFF", secondary: "#EB6F93" }),
        ((Er = {}).default = { primary: "#3D93CE" }),
        (Er.blue = { primary: "#3D93CE" }),
        (Er.white = { primary: "#ffffff" }),
        (Er.black = { primary: "#333030" }),
        ((kr = {}).default = { primary: "#ffffff" }),
        (kr.blue = { primary: "#003087" }),
        (kr.white = { primary: "#ffffff" }),
        (kr.black = { primary: "#333030" }),
        ((Fr = {}).default = { primary: "#1AAD19", secondary: "#4D4D4D" }),
        (Fr.white = { primary: "#FFFFFF", secondary: "#FFFFFF" }),
        (Fr.black = { primary: "#333030", secondary: "#333030" }),
        ((Cr = {}).default = { primary: "#00A599" }),
        (Cr.white = { primary: "#FFFFFF" }),
        (Cr.black = { primary: "#00A599" }),
        ((Mr = {}).default = {
          primary: "#A6d71c",
          secondary: "#3C932A",
          tertiary: "#6CC62E",
          quaternary: "#278D30",
        }),
        (Mr.white = {
          primary: "#FFFFFF",
          secondary: "#FFFFFF",
          tertiary: "#000000",
          quaternary: "#FFFFFF",
        }),
        (Mr.black = {
          primary: "#333030",
          secondary: "#333030",
          tertiary: "#ffffff",
          quaternary: "#333030",
        }),
        ((Or = {}).default = {
          primary: "#FFFFFF",
          secondary: "#CACCC8",
          tertiary: "#2D59A1",
          quaternary: "#1F3364",
          quinary: "#4E4E4E",
          senary: "#1B4482",
        }),
        (Or.white = {
          primary: "#FFFFFF",
          secondary: "#CACCC8",
          tertiary: "#2D59A1",
          quaternary: "#1F3364",
          quinary: "#4E4E4E",
          senary: "#1B4482",
        }),
        (Or.black = {
          primary: "#000000",
          secondary: "#000000",
          tertiary: "#FFFFFF",
          quaternary: "#FFFFFF",
          quinary: "#000000",
          senary: "#000000",
        }),
        ((Ar = {}).default = {
          primary: "#4D4D4F",
          secondary: "#000000",
          tertiary: "#FF0000",
          quaternary: "#E83E49",
          quinary: "#FF00FF",
          senary: "#FFFFFF",
        }),
        (Ar.white = {
          primary: "#FFFFFF",
          secondary: "#FFFFFF",
          tertiary: "#000000",
          quaternary: "#000000",
          quinary: "#000000",
          senary: "#000000",
        }),
        (Ar.black = {
          primary: "#4D4D4F",
          secondary: "#000000",
          tertiary: "#FF0000",
          quaternary: "#E83E49",
          quinary: "#FF00FF",
          senary: "#FFFFFF",
        }),
        ((jr = {}).default = { primary: "#020202", secondary: "#64CC07" }),
        (jr.white = { primary: "#FFFFFF", secondary: "#FFFFFF" }),
        (jr.black = { primary: "#000000", secondary: "#000000" }),
        ((zr = {}).default = {
          primary: "#EC1D24",
          secondary: "#EDA42D",
          tertiary: "#FEFEFE",
        }),
        (zr.white = {
          primary: "#EC1D24",
          secondary: "#EDA42D",
          tertiary: "#FEFEFE",
        }),
        (zr.black = {
          primary: "#EC1D24",
          secondary: "#EDA42D",
          tertiary: "#FEFEFE",
        }),
        ((qr = {}).default = { primary: "#1A1919", secondary: "#FFFFFE" }),
        (qr.white = { primary: "#1A1919", secondary: "#FFFFFE" }),
        (qr.black = { primary: "#1A1919", secondary: "#FFFFFE" }),
        ((Dr = {}).default = { primary: "#004A91", secondary: "#ED1921" }),
        (Dr.white = { primary: "#004A91", secondary: "#ED1921" }),
        (Dr.black = { primary: "#004A91", secondary: "#ED1921" }),
        ((Wr = {}).default = {
          primary: "#2D3277",
          secondary: "#FFFFFF",
          tertiary: "#009EE3",
          quaternary: "#009EE3",
        }),
        (Wr.white = {
          primary: "#FFFFFF",
          secondary: "#000000",
          tertiary: "#FFFFFF",
          quaternary: "#000000",
        }),
        (Wr.black = {
          primary: "#2D3277",
          secondary: "#FFFFFF",
          tertiary: "#009EE3",
          quaternary: "#009EE3",
        });
      var Nr,
        Ir,
        Br = {
          ar: [
            {
              countries: [],
              content: {
                windowMessage:
                  "Ù‡Ù„ ØªÙˆØ§Ø¬Ù‡ ØµØ¹ÙˆØ¨Ø© ÙÙŠ Ù…Ø´Ø§Ù‡Ø¯Ø© Ù…ØªØµÙØ­ PayPal Ø§Ù„Ø¢Ù…Ù†ØŸ Ø³Ù†Ø³Ø§Ø¹Ø¯Ùƒ ÙÙŠ Ø¥Ø¹Ø§Ø¯Ø© ÙØªØ­ Ø§Ù„Ù†Ø§ÙØ°Ø© Ù„Ø§Ø³ØªÙƒÙ…Ø§Ù„ ØªØ¨Ø±Ø¹Ùƒ.",
                continueMessage: "Ø§Ù†Ù‚Ø± Ù„Ù„Ù…ØªØ§Ø¨Ø¹Ø©",
              },
            },
          ],
          bg: [
            {
              countries: [],
              content: {
                continueMessage:
                  "Ð©Ñ€Ð°ÐºÐ½ÐµÑ‚Ðµ, Ð·Ð° Ð´Ð° Ð¿Ñ€Ð¾Ð´ÑŠÐ»Ð¶Ð¸Ñ‚Ðµ",
                windowMessage:
                  "ÐÐµ Ð²Ð¸Ð¶Ð´Ð°Ñ‚Ðµ Ð»Ð¸ Ð·Ð°Ñ‰Ð¸Ñ‚ÐµÐ½Ð¸Ñ Ð±Ñ€Ð°ÑƒÐ·ÑŠÑ€ Ð½Ð° PayPal? Ð©Ðµ Ð²Ð¸ Ð¿Ð¾Ð¼Ð¾Ð³Ð½ÐµÐ¼ Ð´Ð° Ð¾Ñ‚Ð²Ð¾Ñ€Ð¸Ñ‚Ðµ Ð¾Ñ‚Ð½Ð¾Ð²Ð¾ Ð¿Ñ€Ð¾Ð·Ð¾Ñ€ÐµÑ†Ð°, Ð·Ð° Ð´Ð° Ð·Ð°Ð²ÑŠÑ€ÑˆÐ¸Ñ‚Ðµ Ð´Ð°Ñ€ÐµÐ½Ð¸ÐµÑ‚Ð¾ ÑÐ¸.",
              },
            },
          ],
          cs: [
            {
              countries: [],
              content: {
                windowMessage:
                  "Nezobrazuje se vÃ¡m bezpeÄnÃ½ prohlÃ­Å¾eÄ PayPal? PomÅ¯Å¾eme vÃ¡m okno znovu otevÅ™Ã­t, abyste mohli pÅ™Ã­spÄ›vek dokonÄit.",
                continueMessage: "KliknutÃ­m pokraÄujte",
              },
            },
          ],
          da: [
            {
              countries: [],
              content: {
                windowMessage:
                  "Kan du ikke se PayPals sikre browser? Vi hjÃ¦lper dig med at genÃ¥bne vinduet, sÃ¥ du kan betale.",
                continueMessage: "Klik for at fortsÃ¦tte",
              },
            },
          ],
          de: [
            {
              countries: [],
              content: {
                windowMessage:
                  "Das PayPal-Fenster wird nicht angezeigt? Wir helfen Ihnen, das Fenster erneut zu Ã¶ffnen, um Ihre Spende abzuschlieÃŸen.",
                continueMessage: "Weiter",
              },
            },
          ],
          el: [
            {
              countries: [],
              content: {
                windowMessage:
                  "Î”ÎµÎ½ Î²Î»Î­Ï€ÎµÏ„Îµ Ï„Î¿ Î±ÏƒÏ†Î±Î»Î­Ï‚ Ï€ÏÏŒÎ³ÏÎ±Î¼Î¼Î± Ï€ÎµÏÎ¹Î®Î³Î·ÏƒÎ·Ï‚ PayPal; Î˜Î± ÏƒÎ±Ï‚ Î²Î¿Î·Î¸Î®ÏƒÎ¿Ï…Î¼Îµ Î½Î± ÎµÏ€Î±Î½ÎµÎºÎºÎ¹Î½Î®ÏƒÎµÏ„Îµ Ï„Î¿ Ï€Î±ÏÎ¬Î¸Ï…ÏÎ¿ Î³Î¹Î± Î½Î± Î¿Î»Î¿ÎºÎ»Î·ÏÏŽÏƒÎµÏ„Îµ Ï„Î· Î´Ï‰ÏÎµÎ¬ ÏƒÎ±Ï‚.",
                continueMessage:
                  "Î Î±Ï„Î®ÏƒÏ„Îµ Î³Î¹Î± Î½Î± ÏƒÏ…Î½ÎµÏ‡Î¯ÏƒÎµÏ„Îµ",
              },
            },
          ],
          en: [
            {
              countries: [],
              content: {
                windowMessage:
                  "Donâ€™t see the secure PayPal browser? Weâ€™ll help you re-launch the window to complete your donation.",
                continueMessage: "Click to Continue",
              },
            },
            {
              countries: ["AU", "GB", "IN", "SG"],
              content: {
                continueMessage: "Click to Continue",
                windowMessage:
                  "Canâ€™t see the secure PayPal browser? Weâ€™ll help you re-launch the window to complete your donation.",
              },
            },
          ],
          es: [
            {
              countries: [],
              content: {
                windowMessage:
                  "Â¿No ve el sÃ­mbolo de navegaciÃ³n segura de PayPal? Le ayudaremos a abrir de nuevo la ventana para completar su donaciÃ³n.",
                continueMessage: "Haga clic para continuar",
              },
            },
            {
              countries: ["ES"],
              content: {
                continueMessage: "Haz clic para continuar",
                windowMessage:
                  "Â¿No ves el sÃ­mbolo de navegaciÃ³n segura de PayPal? Te ayudaremos a abrir de nuevo la ventana para completar el donativo.",
              },
            },
            {
              countries: ["MX"],
              content: {
                continueMessage: "Haga clic para continuar",
                windowMessage:
                  "Â¿No ve el navegador seguro de PayPal? Le ayudaremos a abrir de nuevo la ventana para completar su donaciÃ³n.",
              },
            },
          ],
          et: [
            {
              countries: [],
              content: {
                continueMessage: "JÃ¤tkamiseks klÃµpsake",
                windowMessage:
                  "Kas te ei nÃ¤e turvalist PayPali brauserit? Aitame teil annetuse lÃµpuleviimiseks akna uuesti avada.",
              },
            },
          ],
          fi: [
            {
              countries: [],
              content: {
                windowMessage:
                  "EtkÃ¶ nÃ¤e suojattua PayPal-selainta? Autamme avaamaan ikkunan uudelleen lahjoituksen viimeistelyÃ¤ varten.",
                continueMessage: "Jatka klikkaamalla",
              },
            },
          ],
          fr: [
            {
              countries: [],
              content: {
                continueMessage: "Cliquer pour continuer",
                windowMessage:
                  "Vous ne voyez pas le navigateur sÃ©curisÃ© PayPalÂ ? Nous allons vous aider Ã  relancer la fenÃªtre pour effectuer votre don.",
              },
            },
            {
              countries: ["CA"],
              content: {
                continueMessage: "Cliquer pour continuer",
                windowMessage:
                  "Vous ne voyez pas le navigateur PayPal sÃ©curisÃ©Â ? Nous vous aiderons Ã  relancer la fenÃªtre pour effectuer votre don.",
              },
            },
          ],
          he: [
            {
              countries: [],
              content: {
                windowMessage:
                  "××™× ×š ×¨×•××” ××ª ×“×¤×“×¤×Ÿ PayPal ×”×ž××•×‘×˜×—? ×× ×• × ×¢×–×•×¨ ×œ×š ×œ×¤×ª×•×— ×ž×—×“×© ××ª ×”×—×œ×•×Ÿ ×›×“×™ ×œ×”×©×œ×™× ××ª ×”×ª×¨×•×ž×” ×©×œ×š.",
                continueMessage: "×™×© ×œ×œ×—×•×¥ ×›×“×™ ×œ×”×ž×©×™×š",
              },
            },
          ],
          hu: [
            {
              countries: [],
              content: {
                windowMessage:
                  "Nem lÃ¡tja a biztonsÃ¡gos PayPal-bÃ¶ngÃ©szÅ‘t? SegÃ­tÃ¼nk Ãºjra betÃ¶lteni az ablakot, hogy befejezhesse az adomÃ¡nyozÃ¡st.",
                continueMessage: "A folytatÃ¡shoz kattintson ide",
              },
            },
          ],
          id: [
            {
              countries: [],
              content: {
                windowMessage:
                  "Peramban PayPal yang aman tidak terlihat? Kami akan membantu menampilkan ulang jendelanya untuk menyelesaikan donasi Anda.",
                continueMessage: "Klik untuk Melanjutkan",
              },
            },
          ],
          it: [
            {
              countries: [],
              content: {
                windowMessage:
                  "Non vedi il browser sicuro di PayPal? Ti aiuteremo a riavviare la pagina per completare la donazione.",
                continueMessage: "Clicca per continuare",
              },
            },
          ],
          ja: [
            {
              countries: [],
              content: {
                windowMessage:
                  "ã‚»ã‚­ãƒ¥ã‚¢ãªPayPalãƒ–ãƒ©ã‚¦ã‚¶ãŒè¡¨ç¤ºã•ã‚Œãªã„å ´åˆã¯ã€ã‚¦ã‚£ãƒ³ãƒ‰ã‚¦ã‚’å†èµ·å‹•ã—ã¦ã€å¯„ä»˜ã‚’å®Œäº†ã§ãã‚‹ã‚ˆã†ãŠæ‰‹ä¼ã„ã„ãŸã—ã¾ã™ã€‚",
                continueMessage: "ã‚¯ãƒªãƒƒã‚¯ã—ã¦ç¶šè¡Œ",
              },
            },
          ],
          ko: [
            {
              countries: [],
              content: {
                windowMessage:
                  "ë³´ì•ˆ PayPal ë¸Œë¼ìš°ì €ê°€ ë³´ì´ì§€ ì•Šìœ¼ì„¸ìš”? ì°½ì„ ë‹¤ì‹œ ì‹¤í–‰í•˜ì—¬ ê¸°ë¶€ë¥¼ ì™„ë£Œí•  ìˆ˜ ìžˆë„ë¡ ë„ì™€ë“œë¦¬ê² ìŠµë‹ˆë‹¤.",
                continueMessage: "í´ë¦­í•˜ì—¬ ê³„ì†",
              },
            },
          ],
          lt: [
            {
              countries: [],
              content: {
                continueMessage: "Spauskite, jei norite tÄ™sti",
                windowMessage:
                  "Nematote saugios â€žPayPalâ€œ narÅ¡yklÄ—s? PadÄ—sime iÅ¡ naujo paleisti langÄ…, kad uÅ¾baigtumÄ—te aukojimo veiksmÄ….",
              },
            },
          ],
          lv: [
            {
              countries: [],
              content: {
                continueMessage: "NoklikÅ¡Ä·iniet, lai turpinÄtu",
                windowMessage:
                  "Vai neredzat droÅ¡o PayPal pÄrlÅ«kprogrammu? MÄ“s palÄ«dzÄ“sim jums atkÄrtoti palaist logu, lai pabeigtu pirkumu.",
              },
            },
          ],
          ms: [
            {
              countries: [],
              content: {
                continueMessage: "Klik untuk Meneruskan",
                windowMessage:
                  "Tidak melihat pelayar PayPal selamat? Kami akan membantu anda melancarkan semula tetingkap untuk melengkapkan derma anda.",
              },
            },
          ],
          no: [
            {
              countries: [],
              content: {
                windowMessage:
                  "Ser du ikke den sikre PayPal-nettleseren? Vi Ã¥pner vinduet pÃ¥ nytt sÃ¥ du kan fullfÃ¸re donasjonen.",
                continueMessage: "Klikk for Ã¥ fortsette",
              },
            },
          ],
          nl: [
            {
              countries: [],
              content: {
                windowMessage:
                  "Zie je de beveiligde PayPal-browser niet? We helpen je het venster opnieuw te openen om je donatie te voltooien.",
                continueMessage: "Klik op Doorgaan",
              },
            },
          ],
          pl: [
            {
              countries: [],
              content: {
                windowMessage:
                  "Nie widzisz bezpiecznej przeglÄ…darki PayPal? PomoÅ¼emy Ci ponownie otworzyÄ‡ to okno, aby dokoÅ„czyÄ‡ przekazywanie darowizny.",
                continueMessage: "Kliknij, aby kontynuowaÄ‡",
              },
            },
          ],
          pt: [
            {
              countries: [],
              content: {
                windowMessage:
                  "NÃ£o vÃª a indicaÃ§Ã£o de navegador seguro PayPal? Vamos ajudar a reabrir a janela para poder concluir o seu donativo.",
                continueMessage: "Clicar para continuar",
              },
            },
            {
              countries: ["BR"],
              content: {
                continueMessage: "Clique para Continuar",
                windowMessage:
                  "NÃ£o estÃ¡ vendo o navegador seguro do PayPal? Ajudaremos vocÃª a abrir a janela novamente para concluir a doaÃ§Ã£o.",
              },
            },
          ],
          ro: [
            {
              countries: [],
              content: {
                windowMessage:
                  "Nu vezi browser-ul securizat PayPal? Te vom ajuta sÄƒ lansezi din nou fereastra pentru a finaliza donaÈ›ia.",
                continueMessage: "DÄƒ clic pentru a continua",
              },
            },
          ],
          ru: [
            {
              countries: [],
              content: {
                windowMessage:
                  "ÐÐµ Ð¾Ñ‚Ð¾Ð±Ñ€Ð°Ð¶Ð°ÐµÑ‚ÑÑ Ð±ÐµÐ·Ð¾Ð¿Ð°ÑÐ½Ð°Ñ ÑÑ‚Ñ€Ð°Ð½Ð¸Ñ†Ð° PayPal Ð² Ð±Ñ€Ð°ÑƒÐ·ÐµÑ€Ðµ? ÐœÑ‹ Ð¿Ð¾Ð¼Ð¾Ð¶ÐµÐ¼ Ð²Ð°Ð¼ Ð¿Ð¾Ð²Ñ‚Ð¾Ñ€Ð½Ð¾ Ð·Ð°Ð³Ñ€ÑƒÐ·Ð¸Ñ‚ÑŒ Ð¾ÐºÐ½Ð¾, Ñ‡Ñ‚Ð¾Ð±Ñ‹ Ð¾Ñ‚Ð¿Ñ€Ð°Ð²Ð¸Ñ‚ÑŒ Ð²Ð°ÑˆÐµ Ð¿Ð¾Ð¶ÐµÑ€Ñ‚Ð²Ð¾Ð²Ð°Ð½Ð¸Ðµ.",
                continueMessage:
                  "ÐÐ°Ð¶Ð¼Ð¸Ñ‚Ðµ ÑÑŽÐ´Ð°, Ñ‡Ñ‚Ð¾Ð±Ñ‹ Ð¿Ñ€Ð¾Ð´Ð¾Ð»Ð¶Ð¸Ñ‚ÑŒ",
              },
            },
          ],
          sk: [
            {
              countries: [],
              content: {
                windowMessage:
                  "Nezobrazuje sa vÃ¡m zabezpeÄenÃ½ prehliadaÄ PayPal? PomÃ´Å¾eme vÃ¡m znova otvoriÅ¥ okno, aby ste mohli dokonÄiÅ¥ prÃ­spevok.",
                continueMessage: "PokraÄujte kliknutÃ­m",
              },
            },
          ],
          sl: [
            {
              countries: [],
              content: {
                continueMessage: "Kliknite za nadaljevanje",
                windowMessage:
                  "Ne vidite PayPalovega varnega brskalnika? Pomagali vam bomo znova zagnati okno za dokonÄanje donacije.",
              },
            },
          ],
          sv: [
            {
              countries: [],
              content: {
                windowMessage:
                  "Ser du inte den sÃ¤kra PayPal-webblÃ¤saren? Vi hjÃ¤lper dig att starta om fÃ¶nstret fÃ¶r att slutfÃ¶ra din donation.",
                continueMessage: "Klicka fÃ¶r att fortsÃ¤tta",
              },
            },
          ],
          th: [
            {
              countries: [],
              content: {
                windowMessage:
                  "à¸–à¹‰à¸²à¸„à¸¸à¸“à¹„à¸¡à¹ˆà¹€à¸«à¹‡à¸™à¹€à¸šà¸£à¸²à¸§à¹Œà¹€à¸‹à¸­à¸£à¹Œà¸—à¸µà¹ˆà¸¡à¸µà¸£à¸°à¸šà¸šà¸„à¸§à¸²à¸¡à¸›à¸¥à¸­à¸”à¸ à¸±à¸¢à¸‚à¸­à¸‡ PayPal à¹€à¸£à¸²à¸ˆà¸°à¸Šà¹ˆà¸§à¸¢à¸„à¸¸à¸“à¹€à¸›à¸´à¸”à¸«à¸™à¹‰à¸²à¸•à¹ˆà¸²à¸‡à¸­à¸µà¸à¸„à¸£à¸±à¹‰à¸‡à¹€à¸žà¸·à¹ˆà¸­à¸šà¸£à¸ˆà¸²à¸„à¹€à¸‡à¸´à¸™à¹ƒà¸«à¹‰à¹€à¸£à¸µà¸¢à¸šà¸£à¹‰à¸­à¸¢",
                continueMessage:
                  "à¸„à¸¥à¸´à¸à¹€à¸žà¸·à¹ˆà¸­à¸”à¸³à¹€à¸™à¸´à¸™à¸à¸²à¸£à¸•à¹ˆà¸­",
              },
            },
          ],
          tl: [
            {
              countries: [],
              content: {
                continueMessage: "I-click para Magpatuloy",
                windowMessage:
                  "Hindi nakikita ang secure na PayPal browser? Tutulungan ka naming i-launch ulit ang window para makumpleto ang donasyon mo.",
              },
            },
          ],
          vi: [
            {
              countries: [],
              content: {
                windowMessage:
                  "Báº¡n khÃ´ng tháº¥y trÃ¬nh duyá»‡t PayPal báº£o máº­t? ChÃºng tÃ´i sáº½ giÃºp báº¡n má»Ÿ láº¡i cá»­a sá»• Ä‘á»ƒ hoÃ n táº¥t khoaÌ‰n quyÃªn goÌp cuÌ‰a baÌ£n.",
                continueMessage: "Nháº¥p vÃ o Ä‘á»ƒ tiáº¿p tá»¥c",
              },
            },
          ],
          zh: [
            {
              countries: [],
              content: {
                windowMessage:
                  "æ²¡æœ‰æ‰¾åˆ°PayPalå®‰å…¨æµè§ˆå™¨ï¼Ÿæˆ‘ä»¬å°†å¸®åŠ©æ‚¨é‡å¯çª—å£ä»¥å®Œæˆææ¬¾ã€‚",
                continueMessage: "ç‚¹å‡»ä»¥ç»§ç»­",
              },
            },
            {
              countries: ["C2"],
              content: {
                continueMessage: "ç‚¹å‡»ä»¥ç»§ç»­",
                windowMessage:
                  "æ²¡æœ‰æ‰¾åˆ°å®‰å…¨çš„PayPalæµè§ˆå™¨ï¼Ÿæˆ‘ä»¬å°†å¸®åŠ©æ‚¨é‡å¯çª—å£ä»¥å®Œæˆææ¬¾ã€‚",
              },
            },
            {
              countries: ["HK"],
              content: {
                continueMessage: "æŒ‰ä¸€ä¸‹ç¹¼çºŒ",
                windowMessage:
                  "çœ‹ä¸åˆ°å®‰å…¨çš„ PayPal ç€è¦½å™¨è¦–çª—ï¼Ÿæˆ‘å€‘æœƒåŠ©ä½ é‡æ–°é–‹å•Ÿè¦–çª—ä»¥å®Œæˆææ¬¾ã€‚",
              },
            },
            {
              countries: ["TW"],
              content: {
                continueMessage: "æŒ‰ä¸€ä¸‹ä¸¦ç¹¼çºŒ",
                windowMessage:
                  "çœ‹ä¸åˆ°å®‰å…¨é€£ç·šçš„ PayPal ç€è¦½å™¨ï¼Ÿæˆ‘å€‘å°‡å”åŠ©é‡æ–°å•Ÿå‹•è¦–çª—ä»¥å®Œæˆä½ çš„ææ¬¾ã€‚",
              },
            },
          ],
        },
        Ur = [
          "hosted_button_id",
          "business",
          "amount",
          "currency_code",
          "no_recurring",
          "no_shipping",
          "no_note",
          "cn",
          "item_name",
          "item_number",
          "cancel_return",
          "notify_url",
          "return",
          "cpp_header_image",
          "image_url",
          "invoice",
          "custom",
          "rm",
          "night_phone_a",
          "night_phone_b",
          "night_phone_c",
          "first_name",
          "last_name",
          "email",
          "address1",
          "address2",
          "city",
          "state",
          "zip",
          "country",
          "button_source",
          "bn",
          "on0",
          "os0",
          "on1",
          "os1",
        ];
      function Hr() {
        return window.btoa(
          JSON.stringify({
            zoidVersion: "9_0_58",
            target: "DONATE",
            sdkVersion: "0.8.0",
          })
        );
      }
      function Jr(n, e) {
        var t = n.baseUrl;
        if ((void 0 === e && (e = ""), t)) return "" + t + e;
        switch (n.env) {
          case "production":
            t = "https://www.paypal.com" + e;
            break;
          case "sandbox":
            t = "https://www.sandbox.paypal.com" + e;
            break;
          case "stage":
            t = "https://www.msmaster.qa.paypal.com" + e;
            break;
          default:
            (t = Ae() + "/donate/"), console.log("donateCheckoutUrl ", t);
        }
        return t;
      }
      function $r(n) {
        n && (n.popupOpened = void 0);
      }
      function Kr(n) {
        return n && n.popupOpened;
      }
      function Vr() {
        var n = Ir.getRedirectionUrl();
        if (($r(Ir), document.documentMode)) window.location.href = n;
        else
          try {
            var e = Ir.originalRenderTo.apply(null, arguments);
            if (
              (e.then(function (n, e) {
                console.log(
                  "Popup opened successfully and Donate has fully loaded."
                );
              }),
              e && e.error && "PopupOpenError" === e.error.name)
            )
              return (
                console.log("zalgoPromise.error ", e.error),
                void (window.location.href = n)
              );
            if (e && e.error && e.error.name)
              return (
                console.log("zalgoPromise.error ", e.error),
                void (window.location.href = n)
              );
            setTimeout(function () {
              Kr(Ir) || (window.location.href = n);
            }, 500);
          } catch (n) {
            console.log("error ", n);
          }
      }
      var Zr = function () {
        return (
          Nr ||
            (Nr = Kt({
              tag: "donate-checkout",
              url: function (n) {
                return Jr(n.props, "/donate/");
              },
              defaultContext: u() ? Mt.POPUP : Mt.IFRAME,
              logger: ze(),
              prerenderTemplate: function (n) {
                var e,
                  t = n.doc,
                  r = n.props;
                return (
                  (e = Ir) && (e.popupOpened = !0),
                  er(Rr, { nonce: r.nonce }).render(rr({ doc: t }))
                );
              },
              dimensions:
                (void 0 === e && (e = o()),
                e.match(
                  /Android|webOS|iPhone|iPad|iPod|bada|Symbian|Palm|CriOS|BlackBerry|IEMobile|WindowsMobile|Opera Mini/i
                )
                  ? { width: "100%", height: "760px" }
                  : { width: "612px", height: "760px" }),
              props:
                ((n = {
                  env: { type: "string", required: !1 },
                  baseUrl: { type: "string", required: !1 },
                  sdkMeta: { type: "string", queryParam: !0, value: De },
                  getPopupBridge: {
                    type: "function",
                    required: !1,
                    value: function () {
                      return function () {
                        if (window.popupBridge)
                          return {
                            nativeUrl: window.popupBridge.getReturnUrlPrefix(),
                            start: function (n) {
                              return new v(function (e, t) {
                                (window.popupBridge.onComplete = function (
                                  n,
                                  r
                                ) {
                                  return n ? t(n) : e(r.queryItems);
                                }),
                                  window.popupBridge.open(n);
                              });
                            },
                          };
                      };
                    },
                  },
                  nonce: { type: "string", required: !1, value: ke },
                  onComplete: { type: "function", required: !1 },
                }),
                (n.env = { type: "string", required: !1 }),
                (n.targetMeta = {
                  type: "string",
                  value: Hr,
                  queryParam: "targetMeta",
                }),
                (n.redirectParentWindow = {
                  type: "function",
                  required: !1,
                  value: function () {
                    return function (n) {
                      window.parent.location.href = n;
                    };
                  },
                }),
                (n.token = {
                  type: "string",
                  required: !1,
                  queryParam: "token",
                }),
                (n.business = {
                  type: "string",
                  required: !1,
                  queryParam: "business",
                }),
                (n.hosted_button_id = {
                  type: "string",
                  required: !1,
                  queryParam: "hosted_button_id",
                }),
                (n.amount = {
                  type: "string",
                  required: !1,
                  queryParam: "amount",
                }),
                (n.currency_code = {
                  type: "string",
                  required: !1,
                  queryParam: "currency_code",
                }),
                (n.no_recurring = {
                  type: "string",
                  required: !1,
                  queryParam: "no_recurring",
                }),
                (n.no_shipping = {
                  type: "string",
                  required: !1,
                  queryParam: "no_shipping",
                }),
                (n.no_note = {
                  type: "string",
                  required: !1,
                  queryParam: "no_note",
                }),
                (n.cn = { type: "string", required: !1, queryParam: "cn" }),
                (n.item_name = {
                  type: "string",
                  required: !1,
                  queryParam: "item_name",
                }),
                (n.item_number = {
                  type: "string",
                  required: !1,
                  queryParam: "item_number",
                }),
                (n.cancel_return = {
                  type: "string",
                  required: !1,
                  queryParam: "cancel_return",
                }),
                (n.notify_url = {
                  type: "string",
                  required: !1,
                  queryParam: "notify_url",
                }),
                (n.return = {
                  type: "string",
                  required: !1,
                  queryParam: "return",
                }),
                (n.cpp_header_image = {
                  type: "string",
                  required: !1,
                  queryParam: "cpp_header_image",
                }),
                (n.image_url = {
                  type: "string",
                  required: !1,
                  queryParam: "image_url",
                }),
                (n.invoice = {
                  type: "string",
                  required: !1,
                  queryParam: "invoice",
                }),
                (n.custom = {
                  type: "string",
                  required: !1,
                  queryParam: "custom",
                }),
                (n.rm = { type: "string", required: !1, queryParam: "rm" }),
                (n.night_phone_a = {
                  type: "string",
                  required: !1,
                  queryParam: "night_phone_a",
                }),
                (n.night_phone_b = {
                  type: "string",
                  required: !1,
                  queryParam: "night_phone_b",
                }),
                (n.night_phone_c = {
                  type: "string",
                  required: !1,
                  queryParam: "night_phone_c",
                }),
                (n.first_name = {
                  type: "string",
                  required: !1,
                  queryParam: "first_name",
                }),
                (n.last_name = {
                  type: "string",
                  required: !1,
                  queryParam: "last_name",
                }),
                (n.email = {
                  type: "string",
                  required: !1,
                  queryParam: "email",
                }),
                (n.address1 = {
                  type: "string",
                  required: !1,
                  queryParam: "address1",
                }),
                (n.address2 = {
                  type: "string",
                  required: !1,
                  queryParam: "address2",
                }),
                (n.city = { type: "string", required: !1, queryParam: "city" }),
                (n.state = {
                  type: "string",
                  required: !1,
                  queryParam: "state",
                }),
                (n.zip = { type: "string", required: !1, queryParam: "zip" }),
                (n.country = {
                  type: "string",
                  required: !1,
                  queryParam: "country",
                }),
                (n.button_source = {
                  type: "string",
                  required: !1,
                  queryParam: "button_source",
                }),
                (n.bn = { type: "string", required: !1, queryParam: "bn" }),
                (n.on0 = { type: "string", required: !1, queryParam: "on0" }),
                (n.os0 = { type: "string", required: !1, queryParam: "os0" }),
                (n.on1 = { type: "string", required: !1, queryParam: "on1" }),
                (n.os1 = { type: "string", required: !1, queryParam: "os1" }),
                n),
              containerTemplate: function (n) {
                var e = n.context,
                  t = n.close,
                  r = n.focus,
                  o = n.doc,
                  i = n.event,
                  a = n.frame,
                  u = n.prerenderFrame,
                  c = (navigator && navigator.language) || "",
                  s = c.split("-")[1] || "US";
                s = s.toUpperCase();
                var d = c.split("-")[0] || "en",
                  f = (function (n, e) {
                    for (var t = Br[e] || Br.en, r = 1; r < t.length; r++)
                      if (t[r].countries.indexOf(n) >= 0) return t[r].content;
                    return t[0].content;
                  })(s, (d = d.toLowerCase()));
                return er(Tr, {
                  context: e,
                  close: t,
                  focus: r,
                  event: i,
                  frame: a,
                  prerenderFrame: u,
                  content: f,
                }).render(rr({ doc: o }));
              },
            }))(),
          function (n) {
            return (
              ((Ir = Nr(n)).getRedirectionUrl = (function (n) {
                return function () {
                  var e, t;
                  return Rn(Jr(n, "/donate/"), {
                    query:
                      ((e = n),
                      (t = Object.keys(e)
                        .filter(function (n) {
                          return null != e[n] && Ur.includes(n);
                        })
                        .reduce(function (n, t) {
                          return (n[t] = e[t]), n;
                        }, {})),
                      e.token && (t.token = e.token),
                      (t.targetMeta = Hr()),
                      (t.sdkMeta = De()),
                      t),
                  });
                };
              })(n)),
              (Ir.originalRenderTo = Ir.renderTo),
              (Ir.renderTo = Vr),
              (Ir.showCheckout = Vr),
              Ir.event.on("zoid-destroy", function () {
                console.log("zoid-destroy: EVENT_RECEIVED ");
              }),
              Ir.event.on("zoid-close", function () {
                console.log("zoid-close: EVENT_RECEIVED ");
              }),
              Ir
            );
          }
        );
        var n, e;
      };
      (window.PayPal = window.PayPal || {}),
        (window.PayPal.Donation = window.PayPal.Donation || {}),
        (window.PayPal.Donation.Checkout = Zr()),
        (window.Donation = window.Donation || {}),
        (window.Donation.Checkout = Zr());
      var Gr = function (n) {
        return (function (n) {
          return {
            init: function () {
              return {
                render: function (e) {
                  var t,
                    r,
                    o,
                    i = document.querySelector(e);
                  if (i) {
                    var a =
                        (null == n || null == (t = n.image) ? void 0 : t.src) ||
                        "https://www.paypalobjects.com/en_US/i/btn/btn_donateCC_LG.gif",
                      u =
                        (null == n || null == (r = n.image)
                          ? void 0
                          : r.title) || "",
                      c =
                        (null == n || null == (o = n.image) ? void 0 : o.alt) ||
                        "",
                      d = document.createElement("IMG");
                    d.setAttribute("src", a),
                      d.setAttribute("id", "donate-button"),
                      d.setAttribute("style", "cursor: pointer;"),
                      d.setAttribute("title", u),
                      d.setAttribute("alt", c);
                    var f = (function () {
                      var e = {};
                      for (var t in n)
                        Ur.includes(t) && (e[t] = n[t].toString());
                      return e;
                    })();
                    d.addEventListener("click", function (e) {
                      PayPal.Donation.Checkout(
                        s(
                          {
                            env: n.env,
                            baseUrl: n.baseUrl,
                            token: n.token,
                            onComplete: n.onComplete,
                          },
                          f
                        )
                      ).renderTo(window.parent);
                    }),
                      i.appendChild(d);
                  } else
                    console.log("Donate Button Container not found for ", e);
                },
              };
            },
          };
        })(n).init();
      };
      function Xr(n) {
        var e = n.onRenderCheckout;
        return er(
          "html",
          null,
          er(
            "body",
            { style: "margin: 0;" },
            er(
              "div",
              null,
              er("input", {
                onClick: function () {
                  if (u()) {
                    var n = O(Vn("", { width: "200px", height: "100px" })),
                      t = window.document;
                    Zn(
                      n,
                      er(
                        "div",
                        null,
                        "PrerenderedDonateButton: This is from handleClick. TODO: Show SpinnerPage component"
                      ).render(rr({ doc: t }))
                    ),
                      e({ win: n });
                  } else e({});
                },
                id: "donate-button",
                type: "image",
                src: "https://www.paypal.com/en_US/i/btn/btn_donateCC_LG.gif",
              })
            )
          )
        );
      }
      var Yr = Kt({
          tag: "donate-button",
          url: function (n) {
            var e = n.props;
            if (e.baseUrl) return e.baseUrl + "/donate/smart/buttons";
            var t = Ae() + "/donate/smart/buttons";
            return console.log("donateButtonUrl ", t), t;
          },
          getPageUrl: {
            type: "function",
            value: function () {
              return function () {
                return window.location.href;
              };
            },
          },
          dimensions: { width: "150px", height: "50px" },
          autoResize: { width: !1, height: !0 },
          logger: ze(),
          prerenderTemplate: function (n) {
            var e = n.state,
              t = n.props,
              r = n.doc;
            return er(Xr, {
              nonce: t.nonce,
              props: t,
              onRenderCheckout: function (n) {
                e.prerenderDetails = { win: n.win };
              },
            }).render(rr({ doc: r }));
          },
          props: {
            sdkMeta: { type: "string", queryParam: !0, value: De },
            getPopupBridge: {
              type: "function",
              required: !1,
              value: function () {
                return function () {
                  if (window.popupBridge)
                    return {
                      nativeUrl: window.popupBridge.getReturnUrlPrefix(),
                      start: function (n) {
                        return new v(function (e, t) {
                          (window.popupBridge.onComplete = function (n, r) {
                            return n ? t(n) : e(r.queryItems);
                          }),
                            window.popupBridge.open(n);
                        });
                      },
                    };
                };
              },
            },
            onComplete: { type: "function", required: !1 },
            env: { type: "string", required: !1 },
            baseUrl: { type: "string", required: !1 },
            targetMeta: { type: "string", value: Hr, queryParam: "targetMeta" },
            hostedButtonId: {
              type: "string",
              required: !1,
              queryParam: "hosted_button_id",
            },
            token: { type: "string", required: !1, queryParam: "token" },
          },
        }),
        Qr = function () {
          return function (n) {
            return (
              console.log("DonateButtonManager props ", n),
              n.type && "remote" === n.type
                ? Yr.apply(this, arguments)
                : Gr.apply(this, arguments)
            );
          };
        };
      (window.PayPal = window.PayPal || {}),
        (window.PayPal.Donation = window.PayPal.Donation || {}),
        (window.PayPal.Donation.Button = Qr()),
        (window.Donation = window.Donation || {}),
        (window.Donation.Button = Qr());
      var no = Zr(),
        eo = Qr();
    },
  ]);
});
