! function(e, t) {
    "object" == typeof exports && "object" == typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define("Draggable", [], t) : "object" == typeof exports ? exports.Draggable = t() : e.Draggable = t()
}(window, (function() {
    return function(e) {
        var t = {};

        function r(n) {
            if (t[n]) return t[n].exports;
            var o = t[n] = {
                i: n,
                l: !1,
                exports: {}
            };
            return e[n].call(o.exports, o, o.exports, r), o.l = !0, o.exports
        }
        return r.m = e, r.c = t, r.d = function(e, t, n) {
            r.o(e, t) || Object.defineProperty(e, t, {
                enumerable: !0,
                get: n
            })
        }, r.r = function(e) {
            "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
                value: "Module"
            }), Object.defineProperty(e, "__esModule", {
                value: !0
            })
        }, r.t = function(e, t) {
            if (1 & t && (e = r(e)), 8 & t) return e;
            if (4 & t && "object" == typeof e && e && e.__esModule) return e;
            var n = Object.create(null);
            if (r.r(n), Object.defineProperty(n, "default", {
                    enumerable: !0,
                    value: e
                }), 2 & t && "string" != typeof e)
                for (var o in e) r.d(n, o, function(t) {
                    return e[t]
                }.bind(null, o));
            return n
        }, r.n = function(e) {
            var t = e && e.__esModule ? function() {
                return e.default
            } : function() {
                return e
            };
            return r.d(t, "a", t), t
        }, r.o = function(e, t) {
            return Object.prototype.hasOwnProperty.call(e, t)
        }, r.p = "", r(r.s = 66)
    }([function(e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var n, o = r(64),
            i = (n = o) && n.__esModule ? n : {
                default: n
            };
        t.default = i.default
    }, function(e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var n, o = r(60),
            i = (n = o) && n.__esModule ? n : {
                default: n
            };
        t.default = i.default
    }, function(e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var n = r(51);
        Object.defineProperty(t, "closest", {
            enumerable: !0,
            get: function() {
                return i(n).default
            }
        });
        var o = r(49);

        function i(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        Object.defineProperty(t, "requestNextAnimationFrame", {
            enumerable: !0,
            get: function() {
                return i(o).default
            }
        })
    }, function(e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var n = r(44);
        Object.keys(n).forEach((function(e) {
            "default" !== e && "__esModule" !== e && Object.defineProperty(t, e, {
                enumerable: !0,
                get: function() {
                    return n[e]
                }
            })
        }))
    }, function(e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var n, o = r(47),
            i = (n = o) && n.__esModule ? n : {
                default: n
            };
        t.default = i.default
    }, function(e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var n = r(14);
        Object.keys(n).forEach((function(e) {
            "default" !== e && "__esModule" !== e && Object.defineProperty(t, e, {
                enumerable: !0,
                get: function() {
                    return n[e]
                }
            })
        }));
        var o = r(13);
        Object.keys(o).forEach((function(e) {
            "default" !== e && "__esModule" !== e && Object.defineProperty(t, e, {
                enumerable: !0,
                get: function() {
                    return o[e]
                }
            })
        }));
        var i = r(12);
        Object.keys(i).forEach((function(e) {
            "default" !== e && "__esModule" !== e && Object.defineProperty(t, e, {
                enumerable: !0,
                get: function() {
                    return i[e]
                }
            })
        }));
        var s = r(6);
        Object.keys(s).forEach((function(e) {
            "default" !== e && "__esModule" !== e && Object.defineProperty(t, e, {
                enumerable: !0,
                get: function() {
                    return s[e]
                }
            })
        }));
        var a, l = r(37),
            c = (a = l) && a.__esModule ? a : {
                default: a
            };
        t.default = c.default
    }, function(e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var n = r(4);
        Object.defineProperty(t, "Sensor", {
            enumerable: !0,
            get: function() {
                return c(n).default
            }
        });
        var o = r(46);
        Object.defineProperty(t, "MouseSensor", {
            enumerable: !0,
            get: function() {
                return c(o).default
            }
        });
        var i = r(43);
        Object.defineProperty(t, "TouchSensor", {
            enumerable: !0,
            get: function() {
                return c(i).default
            }
        });
        var s = r(41);
        Object.defineProperty(t, "DragSensor", {
            enumerable: !0,
            get: function() {
                return c(s).default
            }
        });
        var a = r(39);
        Object.defineProperty(t, "ForceTouchSensor", {
            enumerable: !0,
            get: function() {
                return c(a).default
            }
        });
        var l = r(3);

        function c(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        Object.keys(l).forEach((function(e) {
            "default" !== e && "__esModule" !== e && Object.defineProperty(t, e, {
                enumerable: !0,
                get: function() {
                    return l[e]
                }
            })
        }))
    }, function(e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var n = r(18);
        Object.keys(n).forEach((function(e) {
            "default" !== e && "__esModule" !== e && Object.defineProperty(t, e, {
                enumerable: !0,
                get: function() {
                    return n[e]
                }
            })
        }))
    }, function(e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var n = r(23);
        Object.keys(n).forEach((function(e) {
            "default" !== e && "__esModule" !== e && Object.defineProperty(t, e, {
                enumerable: !0,
                get: function() {
                    return n[e]
                }
            })
        }))
    }, function(e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var n = r(27);
        Object.keys(n).forEach((function(e) {
            "default" !== e && "__esModule" !== e && Object.defineProperty(t, e, {
                enumerable: !0,
                get: function() {
                    return n[e]
                }
            })
        }))
    }, function(e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var n = r(30);
        Object.keys(n).forEach((function(e) {
            "default" !== e && "__esModule" !== e && Object.defineProperty(t, e, {
                enumerable: !0,
                get: function() {
                    return n[e]
                }
            })
        }))
    }, function(e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var n = r(33);
        Object.keys(n).forEach((function(e) {
            "default" !== e && "__esModule" !== e && Object.defineProperty(t, e, {
                enumerable: !0,
                get: function() {
                    return n[e]
                }
            })
        }))
    }, function(e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var n = r(62);
        Object.defineProperty(t, "Announcement", {
            enumerable: !0,
            get: function() {
                return a(n).default
            }
        }), Object.defineProperty(t, "defaultAnnouncementOptions", {
            enumerable: !0,
            get: function() {
                return n.defaultOptions
            }
        });
        var o = r(59);
        Object.defineProperty(t, "Focusable", {
            enumerable: !0,
            get: function() {
                return a(o).default
            }
        });
        var i = r(57);
        Object.defineProperty(t, "Mirror", {
            enumerable: !0,
            get: function() {
                return a(i).default
            }
        }), Object.defineProperty(t, "defaultMirrorOptions", {
            enumerable: !0,
            get: function() {
                return i.defaultOptions
            }
        });
        var s = r(53);

        function a(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        Object.defineProperty(t, "Scrollable", {
            enumerable: !0,
            get: function() {
                return a(s).default
            }
        }), Object.defineProperty(t, "defaultScrollableOptions", {
            enumerable: !0,
            get: function() {
                return s.defaultOptions
            }
        })
    }, function(e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var n = r(63);
        Object.keys(n).forEach((function(e) {
            "default" !== e && "__esModule" !== e && Object.defineProperty(t, e, {
                enumerable: !0,
                get: function() {
                    return n[e]
                }
            })
        }))
    }, function(e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var n = r(65);
        Object.keys(n).forEach((function(e) {
            "default" !== e && "__esModule" !== e && Object.defineProperty(t, e, {
                enumerable: !0,
                get: function() {
                    return n[e]
                }
            })
        }))
    }, function(e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.defaultOptions = void 0;
        var n, o = Object.assign || function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var r = arguments[t];
                    for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
                }
                return e
            },
            i = r(1),
            s = (n = i) && n.__esModule ? n : {
                default: n
            };
        const a = Symbol("onSortableSorted"),
            l = t.defaultOptions = {
                duration: 150,
                easingFunction: "ease-in-out",
                horizontal: !1
            };
        class c extends s.default {
            constructor(e) {
                super(e), this.options = o({}, l, this.getOptions()), this.lastAnimationFrame = null, this[a] = this[a].bind(this)
            }
            attach() {
                this.draggable.on("sortable:sorted", this[a])
            }
            detach() {
                this.draggable.off("sortable:sorted", this[a])
            }
            getOptions() {
                return this.draggable.options.swapAnimation || {}
            }[a]({
                oldIndex: e,
                newIndex: t,
                dragEvent: r
            }) {
                const {
                    source: n,
                    over: o
                } = r;
                cancelAnimationFrame(this.lastAnimationFrame), this.lastAnimationFrame = requestAnimationFrame((() => {
                    e >= t ? u(n, o, this.options) : u(o, n, this.options)
                }))
            }
        }

        function u(e, t, {
            duration: r,
            easingFunction: n,
            horizontal: o
        }) {
            for (const r of [e, t]) r.style.pointerEvents = "none";
            if (o) {
                const r = e.offsetWidth;
                e.style.transform = `translate3d(${r}px, 0, 0)`, t.style.transform = `translate3d(-${r}px, 0, 0)`
            } else {
                const r = e.offsetHeight;
                e.style.transform = `translate3d(0, ${r}px, 0)`, t.style.transform = `translate3d(0, -${r}px, 0)`
            }
            requestAnimationFrame((() => {
                for (const o of [e, t]) o.addEventListener("transitionend", d), o.style.transition = `transform ${r}ms ${n}`, o.style.transform = ""
            }))
        }

        function d(e) {
            e.target.style.transition = "", e.target.style.pointerEvents = "", e.target.removeEventListener("transitionend", d)
        }
        t.default = c
    }, function(e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.defaultOptions = void 0;
        var n, o = r(15),
            i = (n = o) && n.__esModule ? n : {
                default: n
            };
        t.default = i.default, t.defaultOptions = o.defaultOptions
    }, function(e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var n, o = r(1),
            i = (n = o) && n.__esModule ? n : {
                default: n
            },
            s = r(7);
        const a = Symbol("onDragStart"),
            l = Symbol("onDragStop"),
            c = Symbol("onDragOver"),
            u = Symbol("onDragOut"),
            d = Symbol("onMirrorCreated"),
            h = Symbol("onMirrorDestroy");
        class g extends i.default {
            constructor(e) {
                super(e), this.firstSource = null, this.mirror = null, this[a] = this[a].bind(this), this[l] = this[l].bind(this), this[c] = this[c].bind(this), this[u] = this[u].bind(this), this[d] = this[d].bind(this), this[h] = this[h].bind(this)
            }
            attach() {
                this.draggable.on("drag:start", this[a]).on("drag:stop", this[l]).on("drag:over", this[c]).on("drag:out", this[u]).on("droppable:over", this[c]).on("droppable:out", this[u]).on("mirror:created", this[d]).on("mirror:destroy", this[h])
            }
            detach() {
                this.draggable.off("drag:start", this[a]).off("drag:stop", this[l]).off("drag:over", this[c]).off("drag:out", this[u]).off("droppable:over", this[c]).off("droppable:out", this[u]).off("mirror:created", this[d]).off("mirror:destroy", this[h])
            }[a](e) {
                e.canceled() || (this.firstSource = e.source)
            }[l]() {
                this.firstSource = null
            }[c](e) {
                if (e.canceled()) return;
                const t = e.source || e.dragEvent.source;
                if (t === this.firstSource) return void(this.firstSource = null);
                const r = new s.SnapInEvent({
                    dragEvent: e,
                    snappable: e.over || e.droppable
                });
                this.draggable.trigger(r), r.canceled() || (this.mirror && (this.mirror.style.display = "none"), t.classList.remove(this.draggable.getClassNameFor("source:dragging")), t.classList.add(this.draggable.getClassNameFor("source:placed")), setTimeout((() => {
                    t.classList.remove(this.draggable.getClassNameFor("source:placed"))
                }), this.draggable.options.placedTimeout))
            }[u](e) {
                if (e.canceled()) return;
                const t = e.source || e.dragEvent.source,
                    r = new s.SnapOutEvent({
                        dragEvent: e,
                        snappable: e.over || e.droppable
                    });
                this.draggable.trigger(r), r.canceled() || (this.mirror && (this.mirror.style.display = ""), t.classList.add(this.draggable.getClassNameFor("source:dragging")))
            }[d]({
                mirror: e
            }) {
                this.mirror = e
            }[h]() {
                this.mirror = null
            }
        }
        t.default = g
    }, function(e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.SnapOutEvent = t.SnapInEvent = t.SnapEvent = void 0;
        var n, o = r(0),
            i = (n = o) && n.__esModule ? n : {
                default: n
            };
        class s extends i.default {
            get dragEvent() {
                return this.data.dragEvent
            }
            get snappable() {
                return this.data.snappable
            }
        }
        t.SnapEvent = s, s.type = "snap";
        class a extends s {}
        t.SnapInEvent = a, a.type = "snap:in", a.cancelable = !0;
        class l extends s {}
        t.SnapOutEvent = l, l.type = "snap:out", l.cancelable = !0
    }, function(e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var n = r(7);
        Object.keys(n).forEach((function(e) {
            "default" !== e && "__esModule" !== e && Object.defineProperty(t, e, {
                enumerable: !0,
                get: function() {
                    return n[e]
                }
            })
        }));
        var o, i = r(17),
            s = (o = i) && o.__esModule ? o : {
                default: o
            };
        t.default = s.default
    }, function(e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.defaultOptions = void 0;
        var n, o = Object.assign || function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var r = arguments[t];
                    for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
                }
                return e
            },
            i = r(1),
            s = (n = i) && n.__esModule ? n : {
                default: n
            },
            a = r(2);
        const l = Symbol("onMirrorCreated"),
            c = Symbol("onMirrorDestroy"),
            u = Symbol("onDragOver"),
            d = Symbol("resize"),
            h = t.defaultOptions = {};
        class g extends s.default {
            constructor(e) {
                super(e), this.options = o({}, h, this.getOptions()), this.lastWidth = 0, this.lastHeight = 0, this.mirror = null, this[l] = this[l].bind(this), this[c] = this[c].bind(this), this[u] = this[u].bind(this)
            }
            attach() {
                this.draggable.on("mirror:created", this[l]).on("drag:over", this[u]).on("drag:over:container", this[u])
            }
            detach() {
                this.draggable.off("mirror:created", this[l]).off("mirror:destroy", this[c]).off("drag:over", this[u]).off("drag:over:container", this[u])
            }
            getOptions() {
                return this.draggable.options.resizeMirror || {}
            }[l]({
                mirror: e
            }) {
                this.mirror = e
            }[c]() {
                this.mirror = null
            }[u](e) {
                this[d](e)
            }[d]({
                overContainer: e,
                over: t
            }) {
                requestAnimationFrame((() => {
                    this.mirror.parentNode !== e && e.appendChild(this.mirror);
                    const r = t || this.draggable.getDraggableElementsForContainer(e)[0];
                    r && (0, a.requestNextAnimationFrame)((() => {
                        const e = r.getBoundingClientRect();
                        this.lastHeight === e.height && this.lastWidth === e.width || (this.mirror.style.width = `${e.width}px`, this.mirror.style.height = `${e.height}px`, this.lastWidth = e.width, this.lastHeight = e.height)
                    }))
                }))
            }
        }
        t.default = g
    }, function(e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.defaultOptions = void 0;
        var n, o = r(20),
            i = (n = o) && n.__esModule ? n : {
                default: n
            };
        t.default = i.default, t.defaultOptions = o.defaultOptions
    }, function(e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var n, o = r(1),
            i = (n = o) && n.__esModule ? n : {
                default: n
            },
            s = r(2),
            a = r(8);
        const l = Symbol("onDragMove"),
            c = Symbol("onDragStop"),
            u = Symbol("onRequestAnimationFrame");
        class d extends i.default {
            constructor(e) {
                super(e), this.currentlyCollidingElement = null, this.lastCollidingElement = null, this.currentAnimationFrame = null, this[l] = this[l].bind(this), this[c] = this[c].bind(this), this[u] = this[u].bind(this)
            }
            attach() {
                this.draggable.on("drag:move", this[l]).on("drag:stop", this[c])
            }
            detach() {
                this.draggable.off("drag:move", this[l]).off("drag:stop", this[c])
            }
            getCollidables() {
                const e = this.draggable.options.collidables;
                return "string" == typeof e ? Array.prototype.slice.call(document.querySelectorAll(e)) : e instanceof NodeList || e instanceof Array ? Array.prototype.slice.call(e) : e instanceof HTMLElement ? [e] : "function" == typeof e ? e() : []
            }[l](e) {
                const t = e.sensorEvent.target;
                this.currentAnimationFrame = requestAnimationFrame(this[u](t)), this.currentlyCollidingElement && e.cancel();
                const r = new a.CollidableInEvent({
                        dragEvent: e,
                        collidingElement: this.currentlyCollidingElement
                    }),
                    n = new a.CollidableOutEvent({
                        dragEvent: e,
                        collidingElement: this.lastCollidingElement
                    }),
                    o = Boolean(this.currentlyCollidingElement && this.lastCollidingElement !== this.currentlyCollidingElement),
                    i = Boolean(!this.currentlyCollidingElement && this.lastCollidingElement);
                o ? (this.lastCollidingElement && this.draggable.trigger(n), this.draggable.trigger(r)) : i && this.draggable.trigger(n), this.lastCollidingElement = this.currentlyCollidingElement
            }[c](e) {
                const t = this.currentlyCollidingElement || this.lastCollidingElement,
                    r = new a.CollidableOutEvent({
                        dragEvent: e,
                        collidingElement: t
                    });
                t && this.draggable.trigger(r), this.lastCollidingElement = null, this.currentlyCollidingElement = null
            }[u](e) {
                return () => {
                    const t = this.getCollidables();
                    this.currentlyCollidingElement = (0, s.closest)(e, (e => t.includes(e)))
                }
            }
        }
        t.default = d
    }, function(e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.CollidableOutEvent = t.CollidableInEvent = t.CollidableEvent = void 0;
        var n, o = r(0),
            i = (n = o) && n.__esModule ? n : {
                default: n
            };
        class s extends i.default {
            get dragEvent() {
                return this.data.dragEvent
            }
        }
        t.CollidableEvent = s, s.type = "collidable";
        class a extends s {
            get collidingElement() {
                return this.data.collidingElement
            }
        }
        t.CollidableInEvent = a, a.type = "collidable:in";
        class l extends s {
            get collidingElement() {
                return this.data.collidingElement
            }
        }
        t.CollidableOutEvent = l, l.type = "collidable:out"
    }, function(e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var n = r(8);
        Object.keys(n).forEach((function(e) {
            "default" !== e && "__esModule" !== e && Object.defineProperty(t, e, {
                enumerable: !0,
                get: function() {
                    return n[e]
                }
            })
        }));
        var o, i = r(22),
            s = (o = i) && o.__esModule ? o : {
                default: o
            };
        t.default = s.default
    }, function(e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var n = r(24);
        Object.defineProperty(t, "Collidable", {
            enumerable: !0,
            get: function() {
                return a(n).default
            }
        });
        var o = r(21);
        Object.defineProperty(t, "ResizeMirror", {
            enumerable: !0,
            get: function() {
                return a(o).default
            }
        }), Object.defineProperty(t, "defaultResizeMirrorOptions", {
            enumerable: !0,
            get: function() {
                return o.defaultOptions
            }
        });
        var i = r(19);
        Object.defineProperty(t, "Snappable", {
            enumerable: !0,
            get: function() {
                return a(i).default
            }
        });
        var s = r(16);

        function a(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        Object.defineProperty(t, "SwapAnimation", {
            enumerable: !0,
            get: function() {
                return a(s).default
            }
        }), Object.defineProperty(t, "defaultSwapAnimationOptions", {
            enumerable: !0,
            get: function() {
                return s.defaultOptions
            }
        })
    }, function(e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var n, o = Object.assign || function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var r = arguments[t];
                    for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
                }
                return e
            },
            i = r(5),
            s = (n = i) && n.__esModule ? n : {
                default: n
            },
            a = r(9);
        const l = Symbol("onDragStart"),
            c = Symbol("onDragOverContainer"),
            u = Symbol("onDragOver"),
            d = Symbol("onDragStop");
        const h = {
            "sortable:sorted": function({
                dragEvent: e
            }) {
                const t = e.source.textContent.trim() || e.source.id || "sortable element";
                if (e.over) {
                    const r = e.over.textContent.trim() || e.over.id || "sortable element";
                    return e.source.compareDocumentPosition(e.over) & Node.DOCUMENT_POSITION_FOLLOWING ? `Placed ${t} after ${r}` : `Placed ${t} before ${r}`
                }
                return `Placed ${t} into a different container`
            }
        };
        class g extends s.default {
            constructor(e = [], t = {}) {
                super(e, o({}, t, {
                    announcements: o({}, h, t.announcements || {})
                })), this.startIndex = null, this.startContainer = null, this[l] = this[l].bind(this), this[c] = this[c].bind(this), this[u] = this[u].bind(this), this[d] = this[d].bind(this), this.on("drag:start", this[l]).on("drag:over:container", this[c]).on("drag:over", this[u]).on("drag:stop", this[d])
            }
            destroy() {
                super.destroy(), this.off("drag:start", this[l]).off("drag:over:container", this[c]).off("drag:over", this[u]).off("drag:stop", this[d])
            }
            index(e) {
                return this.getDraggableElementsForContainer(e.parentNode).indexOf(e)
            }[l](e) {
                this.startContainer = e.source.parentNode, this.startIndex = this.index(e.source);
                const t = new a.SortableStartEvent({
                    dragEvent: e,
                    startIndex: this.startIndex,
                    startContainer: this.startContainer
                });
                this.trigger(t), t.canceled() && e.cancel()
            }[c](e) {
                if (e.canceled()) return;
                const {
                    source: t,
                    over: r,
                    overContainer: n
                } = e, o = this.index(t), i = new a.SortableSortEvent({
                    dragEvent: e,
                    currentIndex: o,
                    source: t,
                    over: r
                });
                if (this.trigger(i), i.canceled()) return;
                const s = p({
                    source: t,
                    over: r,
                    overContainer: n,
                    children: this.getDraggableElementsForContainer(n)
                });
                if (!s) return;
                const {
                    oldContainer: l,
                    newContainer: c
                } = s, u = this.index(e.source), d = new a.SortableSortedEvent({
                    dragEvent: e,
                    oldIndex: o,
                    newIndex: u,
                    oldContainer: l,
                    newContainer: c
                });
                this.trigger(d)
            }[u](e) {
                if (e.over === e.originalSource || e.over === e.source) return;
                const {
                    source: t,
                    over: r,
                    overContainer: n
                } = e, o = this.index(t), i = new a.SortableSortEvent({
                    dragEvent: e,
                    currentIndex: o,
                    source: t,
                    over: r
                });
                if (this.trigger(i), i.canceled()) return;
                const s = p({
                    source: t,
                    over: r,
                    overContainer: n,
                    children: this.getDraggableElementsForContainer(n)
                });
                if (!s) return;
                const {
                    oldContainer: l,
                    newContainer: c
                } = s, u = this.index(t), d = new a.SortableSortedEvent({
                    dragEvent: e,
                    oldIndex: o,
                    newIndex: u,
                    oldContainer: l,
                    newContainer: c
                });
                this.trigger(d)
            }[d](e) {
                const t = new a.SortableStopEvent({
                    dragEvent: e,
                    oldIndex: this.startIndex,
                    newIndex: this.index(e.source),
                    oldContainer: this.startContainer,
                    newContainer: e.source.parentNode
                });
                this.trigger(t), this.startIndex = null, this.startContainer = null
            }
        }

        function f(e) {
            return Array.prototype.indexOf.call(e.parentNode.children, e)
        }

        function p({
            source: e,
            over: t,
            overContainer: r,
            children: n
        }) {
            const o = !n.length,
                i = e.parentNode !== r,
                s = t && !i;
            return o ? function(e, t) {
                const r = e.parentNode;
                return t.appendChild(e), {
                    oldContainer: r,
                    newContainer: t
                }
            }(e, r) : s ? function(e, t) {
                const r = f(e),
                    n = f(t);
                r < n ? e.parentNode.insertBefore(e, t.nextElementSibling) : e.parentNode.insertBefore(e, t);
                return {
                    oldContainer: e.parentNode,
                    newContainer: e.parentNode
                }
            }(e, t) : i ? function(e, t, r) {
                const n = e.parentNode;
                t ? t.parentNode.insertBefore(e, t) : r.appendChild(e);
                return {
                    oldContainer: n,
                    newContainer: e.parentNode
                }
            }(e, t, r) : null
        }
        t.default = g
    }, function(e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.SortableStopEvent = t.SortableSortedEvent = t.SortableSortEvent = t.SortableStartEvent = t.SortableEvent = void 0;
        var n, o = r(0),
            i = (n = o) && n.__esModule ? n : {
                default: n
            };
        class s extends i.default {
            get dragEvent() {
                return this.data.dragEvent
            }
        }
        t.SortableEvent = s, s.type = "sortable";
        class a extends s {
            get startIndex() {
                return this.data.startIndex
            }
            get startContainer() {
                return this.data.startContainer
            }
        }
        t.SortableStartEvent = a, a.type = "sortable:start", a.cancelable = !0;
        class l extends s {
            get currentIndex() {
                return this.data.currentIndex
            }
            get over() {
                return this.data.oldIndex
            }
            get overContainer() {
                return this.data.newIndex
            }
        }
        t.SortableSortEvent = l, l.type = "sortable:sort", l.cancelable = !0;
        class c extends s {
            get oldIndex() {
                return this.data.oldIndex
            }
            get newIndex() {
                return this.data.newIndex
            }
            get oldContainer() {
                return this.data.oldContainer
            }
            get newContainer() {
                return this.data.newContainer
            }
        }
        t.SortableSortedEvent = c, c.type = "sortable:sorted";
        class u extends s {
            get oldIndex() {
                return this.data.oldIndex
            }
            get newIndex() {
                return this.data.newIndex
            }
            get oldContainer() {
                return this.data.oldContainer
            }
            get newContainer() {
                return this.data.newContainer
            }
        }
        t.SortableStopEvent = u, u.type = "sortable:stop"
    }, function(e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var n = r(9);
        Object.keys(n).forEach((function(e) {
            "default" !== e && "__esModule" !== e && Object.defineProperty(t, e, {
                enumerable: !0,
                get: function() {
                    return n[e]
                }
            })
        }));
        var o, i = r(26),
            s = (o = i) && o.__esModule ? o : {
                default: o
            };
        t.default = s.default
    }, function(e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var n, o = Object.assign || function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var r = arguments[t];
                    for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
                }
                return e
            },
            i = r(5),
            s = (n = i) && n.__esModule ? n : {
                default: n
            },
            a = r(10);
        const l = Symbol("onDragStart"),
            c = Symbol("onDragOver"),
            u = Symbol("onDragStop");
        const d = {
            "swappabled:swapped": function({
                dragEvent: e,
                swappedElement: t
            }) {
                return `Swapped ${e.source.textContent.trim()||e.source.id||"swappable element"} with ${t.textContent.trim()||t.id||"swappable element"}`
            }
        };
        class h extends s.default {
            constructor(e = [], t = {}) {
                super(e, o({}, t, {
                    announcements: o({}, d, t.announcements || {})
                })), this.lastOver = null, this[l] = this[l].bind(this), this[c] = this[c].bind(this), this[u] = this[u].bind(this), this.on("drag:start", this[l]).on("drag:over", this[c]).on("drag:stop", this[u])
            }
            destroy() {
                super.destroy(), this.off("drag:start", this._onDragStart).off("drag:over", this._onDragOver).off("drag:stop", this._onDragStop)
            }[l](e) {
                const t = new a.SwappableStartEvent({
                    dragEvent: e
                });
                this.trigger(t), t.canceled() && e.cancel()
            }[c](e) {
                if (e.over === e.originalSource || e.over === e.source || e.canceled()) return;
                const t = new a.SwappableSwapEvent({
                    dragEvent: e,
                    over: e.over,
                    overContainer: e.overContainer
                });
                if (this.trigger(t), t.canceled()) return;
                this.lastOver && this.lastOver !== e.over && g(this.lastOver, e.source), this.lastOver === e.over ? this.lastOver = null : this.lastOver = e.over, g(e.source, e.over);
                const r = new a.SwappableSwappedEvent({
                    dragEvent: e,
                    swappedElement: e.over
                });
                this.trigger(r)
            }[u](e) {
                const t = new a.SwappableStopEvent({
                    dragEvent: e
                });
                this.trigger(t), this.lastOver = null
            }
        }

        function g(e, t) {
            const r = t.parentNode,
                n = e.parentNode;
            ! function(e) {
                const t = document.createElement("div");
                e(t), t.parentNode.removeChild(t)
            }((o => {
                n.insertBefore(o, e), r.insertBefore(e, t), n.insertBefore(t, o)
            }))
        }
        t.default = h
    }, function(e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.SwappableStopEvent = t.SwappableSwappedEvent = t.SwappableSwapEvent = t.SwappableStartEvent = t.SwappableEvent = void 0;
        var n, o = r(0),
            i = (n = o) && n.__esModule ? n : {
                default: n
            };
        class s extends i.default {
            get dragEvent() {
                return this.data.dragEvent
            }
        }
        t.SwappableEvent = s, s.type = "swappable";
        class a extends s {}
        t.SwappableStartEvent = a, a.type = "swappable:start", a.cancelable = !0;
        class l extends s {
            get over() {
                return this.data.over
            }
            get overContainer() {
                return this.data.overContainer
            }
        }
        t.SwappableSwapEvent = l, l.type = "swappable:swap", l.cancelable = !0;
        class c extends s {
            get swappedElement() {
                return this.data.swappedElement
            }
        }
        t.SwappableSwappedEvent = c, c.type = "swappable:swapped";
        class u extends s {}
        t.SwappableStopEvent = u, u.type = "swappable:stop"
    }, function(e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var n = r(10);
        Object.keys(n).forEach((function(e) {
            "default" !== e && "__esModule" !== e && Object.defineProperty(t, e, {
                enumerable: !0,
                get: function() {
                    return n[e]
                }
            })
        }));
        var o, i = r(29),
            s = (o = i) && o.__esModule ? o : {
                default: o
            };
        t.default = s.default
    }, function(e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var n, o = Object.assign || function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var r = arguments[t];
                    for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
                }
                return e
            },
            i = r(2),
            s = r(5),
            a = (n = s) && n.__esModule ? n : {
                default: n
            },
            l = r(11);
        const c = Symbol("onDragStart"),
            u = Symbol("onDragMove"),
            d = Symbol("onDragStop"),
            h = Symbol("dropInDropZone"),
            g = Symbol("returnToOriginalDropzone"),
            f = Symbol("closestDropzone"),
            p = Symbol("getDropzones");
        const v = {
                "droppable:dropped": function({
                    dragEvent: e,
                    dropzone: t
                }) {
                    return `Dropped ${e.source.textContent.trim()||e.source.id||"draggable element"} into ${t.textContent.trim()||t.id||"droppable element"}`
                },
                "droppable:returned": function({
                    dragEvent: e,
                    dropzone: t
                }) {
                    return `Returned ${e.source.textContent.trim()||e.source.id||"draggable element"} from ${t.textContent.trim()||t.id||"droppable element"}`
                }
            },
            m = {
                "droppable:active": "draggable-dropzone--active",
                "droppable:occupied": "draggable-dropzone--occupied"
            },
            b = {
                dropzone: ".draggable-droppable"
            };
        class y extends a.default {
            constructor(e = [], t = {}) {
                super(e, o({}, b, t, {
                    classes: o({}, m, t.classes || {}),
                    announcements: o({}, v, t.announcements || {})
                })), this.dropzones = null, this.lastDropzone = null, this.initialDropzone = null, this[c] = this[c].bind(this), this[u] = this[u].bind(this), this[d] = this[d].bind(this), this.on("drag:start", this[c]).on("drag:move", this[u]).on("drag:stop", this[d])
            }
            destroy() {
                super.destroy(), this.off("drag:start", this[c]).off("drag:move", this[u]).off("drag:stop", this[d])
            }[c](e) {
                if (e.canceled()) return;
                this.dropzones = [...this[p]()];
                const t = (0, i.closest)(e.sensorEvent.target, this.options.dropzone);
                if (!t) return void e.cancel();
                const r = new l.DroppableStartEvent({
                    dragEvent: e,
                    dropzone: t
                });
                if (this.trigger(r), r.canceled()) e.cancel();
                else {
                    this.initialDropzone = t;
                    for (const e of this.dropzones) e.classList.contains(this.getClassNameFor("droppable:occupied")) || e.classList.add(this.getClassNameFor("droppable:active"))
                }
            }[u](e) {
                if (e.canceled()) return;
                const t = this[f](e.sensorEvent.target);
                t && !t.classList.contains(this.getClassNameFor("droppable:occupied")) && this[h](e, t) ? this.lastDropzone = t : t && t !== this.initialDropzone || !this.lastDropzone || (this[g](e), this.lastDropzone = null)
            }[d](e) {
                const t = new l.DroppableStopEvent({
                    dragEvent: e,
                    dropzone: this.lastDropzone || this.initialDropzone
                });
                this.trigger(t);
                const r = this.getClassNameFor("droppable:occupied");
                for (const e of this.dropzones) e.classList.remove(this.getClassNameFor("droppable:active"));
                this.lastDropzone && this.lastDropzone !== this.initialDropzone && this.initialDropzone.classList.remove(r), this.dropzones = null, this.lastDropzone = null, this.initialDropzone = null
            }[h](e, t) {
                const r = new l.DroppableDroppedEvent({
                    dragEvent: e,
                    dropzone: t
                });
                if (this.trigger(r), r.canceled()) return !1;
                const n = this.getClassNameFor("droppable:occupied");
                return this.lastDropzone && this.lastDropzone.classList.remove(n), t.appendChild(e.source), t.classList.add(n), !0
            }[g](e) {
                const t = new l.DroppableReturnedEvent({
                    dragEvent: e,
                    dropzone: this.lastDropzone
                });
                this.trigger(t), t.canceled() || (this.initialDropzone.appendChild(e.source), this.lastDropzone.classList.remove(this.getClassNameFor("droppable:occupied")))
            }[f](e) {
                return this.dropzones ? (0, i.closest)(e, this.dropzones) : null
            }[p]() {
                const e = this.options.dropzone;
                return "string" == typeof e ? document.querySelectorAll(e) : e instanceof NodeList || e instanceof Array ? e : "function" == typeof e ? e() : []
            }
        }
        t.default = y
    }, function(e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.DroppableStopEvent = t.DroppableReturnedEvent = t.DroppableDroppedEvent = t.DroppableStartEvent = t.DroppableEvent = void 0;
        var n, o = r(0),
            i = (n = o) && n.__esModule ? n : {
                default: n
            };
        class s extends i.default {
            get dragEvent() {
                return this.data.dragEvent
            }
        }
        t.DroppableEvent = s, s.type = "droppable";
        class a extends s {
            get dropzone() {
                return this.data.dropzone
            }
        }
        t.DroppableStartEvent = a, a.type = "droppable:start", a.cancelable = !0;
        class l extends s {
            get dropzone() {
                return this.data.dropzone
            }
        }
        t.DroppableDroppedEvent = l, l.type = "droppable:dropped", l.cancelable = !0;
        class c extends s {
            get dropzone() {
                return this.data.dropzone
            }
        }
        t.DroppableReturnedEvent = c, c.type = "droppable:returned", c.cancelable = !0;
        class u extends s {
            get dropzone() {
                return this.data.dropzone
            }
        }
        t.DroppableStopEvent = u, u.type = "droppable:stop", u.cancelable = !0
    }, function(e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var n = r(11);
        Object.keys(n).forEach((function(e) {
            "default" !== e && "__esModule" !== e && Object.defineProperty(t, e, {
                enumerable: !0,
                get: function() {
                    return n[e]
                }
            })
        }));
        var o, i = r(32),
            s = (o = i) && o.__esModule ? o : {
                default: o
            };
        t.default = s.default
    }, function(e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        t.default = class {
            constructor() {
                this.callbacks = {}
            }
            on(e, ...t) {
                return this.callbacks[e] || (this.callbacks[e] = []), this.callbacks[e].push(...t), this
            }
            off(e, t) {
                if (!this.callbacks[e]) return null;
                const r = this.callbacks[e].slice(0);
                for (let n = 0; n < r.length; n++) t === r[n] && this.callbacks[e].splice(n, 1);
                return this
            }
            trigger(e) {
                if (!this.callbacks[e.type]) return null;
                const t = [...this.callbacks[e.type]],
                    r = [];
                for (let n = t.length - 1; n >= 0; n--) {
                    const o = t[n];
                    try {
                        o(e)
                    } catch (e) {
                        r.push(e)
                    }
                }
                return r.length && console.error(`Draggable caught errors while triggering '${e.type}'`, r), this
            }
        }
    }, function(e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var n, o = r(35),
            i = (n = o) && n.__esModule ? n : {
                default: n
            };
        t.default = i.default
    }, function(e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.defaultOptions = void 0;
        var n, o = Object.assign || function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var r = arguments[t];
                    for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
                }
                return e
            },
            i = r(2),
            s = r(12),
            a = r(36),
            l = (n = a) && n.__esModule ? n : {
                default: n
            },
            c = r(6),
            u = r(13),
            d = r(14);
        const h = Symbol("onDragStart"),
            g = Symbol("onDragMove"),
            f = Symbol("onDragStop"),
            p = Symbol("onDragPressure"),
            v = {
                "drag:start": e => `Picked up ${e.source.textContent.trim()||e.source.id||"draggable element"}`,
                "drag:stop": e => `Released ${e.source.textContent.trim()||e.source.id||"draggable element"}`
            },
            m = {
                "container:dragging": "draggable-container--is-dragging",
                "source:dragging": "draggable-source--is-dragging",
                "source:placed": "draggable-source--placed",
                "container:placed": "draggable-container--placed",
                "body:dragging": "draggable--is-dragging",
                "draggable:over": "draggable--over",
                "container:over": "draggable-container--over",
                "source:original": "draggable--original",
                mirror: "draggable-mirror"
            },
            b = t.defaultOptions = {
                draggable: ".draggable-source",
                handle: null,
                delay: 100,
                placedTimeout: 800,
                plugins: [],
                sensors: []
            };
        class y {
            constructor(e = [document.body], t = {}) {
                if (e instanceof NodeList || e instanceof Array) this.containers = [...e];
                else {
                    if (!(e instanceof HTMLElement)) throw new Error("Draggable containers are expected to be of type `NodeList`, `HTMLElement[]` or `HTMLElement`");
                    this.containers = [e]
                }
                this.options = o({}, b, t, {
                    classes: o({}, m, t.classes || {}),
                    announcements: o({}, v, t.announcements || {})
                }), this.emitter = new l.default, this.dragging = !1, this.plugins = [], this.sensors = [], this[h] = this[h].bind(this), this[g] = this[g].bind(this), this[f] = this[f].bind(this), this[p] = this[p].bind(this), document.addEventListener("drag:start", this[h], !0), document.addEventListener("drag:move", this[g], !0), document.addEventListener("drag:stop", this[f], !0), document.addEventListener("drag:pressure", this[p], !0);
                const r = Object.values(y.Plugins).map((e => e)),
                    n = [c.MouseSensor, c.TouchSensor];
                this.addPlugin(...r, ...this.options.plugins), this.addSensor(...n, ...this.options.sensors);
                const i = new u.DraggableInitializedEvent({
                    draggable: this
                });
                this.on("mirror:created", (({
                    mirror: e
                }) => this.mirror = e)), this.on("mirror:destroy", (() => this.mirror = null)), this.trigger(i)
            }
            destroy() {
                document.removeEventListener("drag:start", this[h], !0), document.removeEventListener("drag:move", this[g], !0), document.removeEventListener("drag:stop", this[f], !0), document.removeEventListener("drag:pressure", this[p], !0);
                const e = new u.DraggableDestroyEvent({
                    draggable: this
                });
                this.trigger(e), this.removePlugin(...this.plugins.map((e => e.constructor))), this.removeSensor(...this.sensors.map((e => e.constructor)))
            }
            addPlugin(...e) {
                const t = e.map((e => new e(this)));
                return t.forEach((e => e.attach())), this.plugins = [...this.plugins, ...t], this
            }
            removePlugin(...e) {
                return this.plugins.filter((t => e.includes(t.constructor))).forEach((e => e.detach())), this.plugins = this.plugins.filter((t => !e.includes(t.constructor))), this
            }
            addSensor(...e) {
                const t = e.map((e => new e(this.containers, this.options)));
                return t.forEach((e => e.attach())), this.sensors = [...this.sensors, ...t], this
            }
            removeSensor(...e) {
                return this.sensors.filter((t => e.includes(t.constructor))).forEach((e => e.detach())), this.sensors = this.sensors.filter((t => !e.includes(t.constructor))), this
            }
            addContainer(...e) {
                return this.containers = [...this.containers, ...e], this.sensors.forEach((t => t.addContainer(...e))), this
            }
            removeContainer(...e) {
                return this.containers = this.containers.filter((t => !e.includes(t))), this.sensors.forEach((t => t.removeContainer(...e))), this
            }
            on(e, ...t) {
                return this.emitter.on(e, ...t), this
            }
            off(e, t) {
                return this.emitter.off(e, t), this
            }
            trigger(e) {
                return this.emitter.trigger(e), this
            }
            getClassNameFor(e) {
                return this.options.classes[e]
            }
            isDragging() {
                return Boolean(this.dragging)
            }
            getDraggableElements() {
                return this.containers.reduce(((e, t) => [...e, ...this.getDraggableElementsForContainer(t)]), [])
            }
            getDraggableElementsForContainer(e) {
                return [...e.querySelectorAll(this.options.draggable)].filter((e => e !== this.originalSource && e !== this.mirror))
            }[h](e) {
                const t = E(e),
                    {
                        target: r,
                        container: n
                    } = t;
                if (!this.containers.includes(n)) return;
                if (this.options.handle && r && !(0, i.closest)(r, this.options.handle)) return void t.cancel();
                if (this.originalSource = (0, i.closest)(r, this.options.draggable), this.sourceContainer = n, !this.originalSource) return void t.cancel();
                this.lastPlacedSource && this.lastPlacedContainer && (clearTimeout(this.placedTimeoutID), this.lastPlacedSource.classList.remove(this.getClassNameFor("source:placed")), this.lastPlacedContainer.classList.remove(this.getClassNameFor("container:placed"))), this.source = this.originalSource.cloneNode(!0), this.originalSource.parentNode.insertBefore(this.source, this.originalSource), this.originalSource.style.display = "none";
                const s = new d.DragStartEvent({
                    source: this.source,
                    originalSource: this.originalSource,
                    sourceContainer: n,
                    sensorEvent: t
                });
                if (this.trigger(s), this.dragging = !s.canceled(), s.canceled()) return this.source.parentNode.removeChild(this.source), void(this.originalSource.style.display = null);
                this.originalSource.classList.add(this.getClassNameFor("source:original")), this.source.classList.add(this.getClassNameFor("source:dragging")), this.sourceContainer.classList.add(this.getClassNameFor("container:dragging")), document.body.classList.add(this.getClassNameFor("body:dragging")), O(document.body, "none"), requestAnimationFrame((() => {
                    const t = E(e).clone({
                        target: this.source
                    });
                    this[g](o({}, e, {
                        detail: t
                    }))
                }))
            }[g](e) {
                if (!this.dragging) return;
                const t = E(e),
                    {
                        container: r
                    } = t;
                let n = t.target;
                const o = new d.DragMoveEvent({
                    source: this.source,
                    originalSource: this.originalSource,
                    sourceContainer: r,
                    sensorEvent: t
                });
                this.trigger(o), o.canceled() && t.cancel(), n = (0, i.closest)(n, this.options.draggable);
                const s = (0, i.closest)(t.target, this.containers),
                    a = t.overContainer || s,
                    l = this.currentOverContainer && a !== this.currentOverContainer,
                    c = this.currentOver && n !== this.currentOver,
                    u = a && this.currentOverContainer !== a,
                    h = s && n && this.currentOver !== n;
                if (c) {
                    const e = new d.DragOutEvent({
                        source: this.source,
                        originalSource: this.originalSource,
                        sourceContainer: r,
                        sensorEvent: t,
                        over: this.currentOver
                    });
                    this.currentOver.classList.remove(this.getClassNameFor("draggable:over")), this.currentOver = null, this.trigger(e)
                }
                if (l) {
                    const e = new d.DragOutContainerEvent({
                        source: this.source,
                        originalSource: this.originalSource,
                        sourceContainer: r,
                        sensorEvent: t,
                        overContainer: this.currentOverContainer
                    });
                    this.currentOverContainer.classList.remove(this.getClassNameFor("container:over")), this.currentOverContainer = null, this.trigger(e)
                }
                if (u) {
                    a.classList.add(this.getClassNameFor("container:over"));
                    const e = new d.DragOverContainerEvent({
                        source: this.source,
                        originalSource: this.originalSource,
                        sourceContainer: r,
                        sensorEvent: t,
                        overContainer: a
                    });
                    this.currentOverContainer = a, this.trigger(e)
                }
                if (h) {
                    n.classList.add(this.getClassNameFor("draggable:over"));
                    const e = new d.DragOverEvent({
                        source: this.source,
                        originalSource: this.originalSource,
                        sourceContainer: r,
                        sensorEvent: t,
                        overContainer: a,
                        over: n
                    });
                    this.currentOver = n, this.trigger(e)
                }
            }[f](e) {
                if (!this.dragging) return;
                this.dragging = !1;
                const t = new d.DragStopEvent({
                    source: this.source,
                    originalSource: this.originalSource,
                    sensorEvent: e.sensorEvent,
                    sourceContainer: this.sourceContainer
                });
                this.trigger(t), this.source.parentNode.insertBefore(this.originalSource, this.source), this.source.parentNode.removeChild(this.source), this.originalSource.style.display = "", this.source.classList.remove(this.getClassNameFor("source:dragging")), this.originalSource.classList.remove(this.getClassNameFor("source:original")), this.originalSource.classList.add(this.getClassNameFor("source:placed")), this.sourceContainer.classList.add(this.getClassNameFor("container:placed")), this.sourceContainer.classList.remove(this.getClassNameFor("container:dragging")), document.body.classList.remove(this.getClassNameFor("body:dragging")), O(document.body, ""), this.currentOver && this.currentOver.classList.remove(this.getClassNameFor("draggable:over")), this.currentOverContainer && this.currentOverContainer.classList.remove(this.getClassNameFor("container:over")), this.lastPlacedSource = this.originalSource, this.lastPlacedContainer = this.sourceContainer, this.placedTimeoutID = setTimeout((() => {
                    this.lastPlacedSource && this.lastPlacedSource.classList.remove(this.getClassNameFor("source:placed")), this.lastPlacedContainer && this.lastPlacedContainer.classList.remove(this.getClassNameFor("container:placed")), this.lastPlacedSource = null, this.lastPlacedContainer = null
                }), this.options.placedTimeout), this.source = null, this.originalSource = null, this.currentOverContainer = null, this.currentOver = null, this.sourceContainer = null
            }[p](e) {
                if (!this.dragging) return;
                const t = E(e),
                    r = this.source || (0, i.closest)(t.originalEvent.target, this.options.draggable),
                    n = new d.DragPressureEvent({
                        sensorEvent: t,
                        source: r,
                        pressure: t.pressure
                    });
                this.trigger(n)
            }
        }

        function E(e) {
            return e.detail
        }

        function O(e, t) {
            e.style.webkitUserSelect = t, e.style.mozUserSelect = t, e.style.msUserSelect = t, e.style.oUserSelect = t, e.style.userSelect = t
        }
        t.default = y, y.Plugins = {
            Announcement: s.Announcement,
            Focusable: s.Focusable,
            Mirror: s.Mirror,
            Scrollable: s.Scrollable
        }
    }, function(e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var n, o = r(4),
            i = (n = o) && n.__esModule ? n : {
                default: n
            },
            s = r(3);
        const a = Symbol("onMouseForceWillBegin"),
            l = Symbol("onMouseForceDown"),
            c = Symbol("onMouseDown"),
            u = Symbol("onMouseForceChange"),
            d = Symbol("onMouseMove"),
            h = Symbol("onMouseUp"),
            g = Symbol("onMouseForceGlobalChange");
        class f extends i.default {
            constructor(e = [], t = {}) {
                super(e, t), this.mightDrag = !1, this[a] = this[a].bind(this), this[l] = this[l].bind(this), this[c] = this[c].bind(this), this[u] = this[u].bind(this), this[d] = this[d].bind(this), this[h] = this[h].bind(this)
            }
            attach() {
                for (const e of this.containers) e.addEventListener("webkitmouseforcewillbegin", this[a], !1), e.addEventListener("webkitmouseforcedown", this[l], !1), e.addEventListener("mousedown", this[c], !0), e.addEventListener("webkitmouseforcechanged", this[u], !1);
                document.addEventListener("mousemove", this[d]), document.addEventListener("mouseup", this[h])
            }
            detach() {
                for (const e of this.containers) e.removeEventListener("webkitmouseforcewillbegin", this[a], !1), e.removeEventListener("webkitmouseforcedown", this[l], !1), e.removeEventListener("mousedown", this[c], !0), e.removeEventListener("webkitmouseforcechanged", this[u], !1);
                document.removeEventListener("mousemove", this[d]), document.removeEventListener("mouseup", this[h])
            }[a](e) {
                e.preventDefault(), this.mightDrag = !0
            }[l](e) {
                if (this.dragging) return;
                const t = document.elementFromPoint(e.clientX, e.clientY),
                    r = e.currentTarget,
                    n = new s.DragStartSensorEvent({
                        clientX: e.clientX,
                        clientY: e.clientY,
                        target: t,
                        container: r,
                        originalEvent: e
                    });
                this.trigger(r, n), this.currentContainer = r, this.dragging = !n.canceled(), this.mightDrag = !1
            }[h](e) {
                if (!this.dragging) return;
                const t = new s.DragStopSensorEvent({
                    clientX: e.clientX,
                    clientY: e.clientY,
                    target: null,
                    container: this.currentContainer,
                    originalEvent: e
                });
                this.trigger(this.currentContainer, t), this.currentContainer = null, this.dragging = !1, this.mightDrag = !1
            }[c](e) {
                this.mightDrag && (e.stopPropagation(), e.stopImmediatePropagation(), e.preventDefault())
            }[d](e) {
                if (!this.dragging) return;
                const t = document.elementFromPoint(e.clientX, e.clientY),
                    r = new s.DragMoveSensorEvent({
                        clientX: e.clientX,
                        clientY: e.clientY,
                        target: t,
                        container: this.currentContainer,
                        originalEvent: e
                    });
                this.trigger(this.currentContainer, r)
            }[u](e) {
                if (this.dragging) return;
                const t = e.target,
                    r = e.currentTarget,
                    n = new s.DragPressureSensorEvent({
                        pressure: e.webkitForce,
                        clientX: e.clientX,
                        clientY: e.clientY,
                        target: t,
                        container: r,
                        originalEvent: e
                    });
                this.trigger(r, n)
            }[g](e) {
                if (!this.dragging) return;
                const t = e.target,
                    r = new s.DragPressureSensorEvent({
                        pressure: e.webkitForce,
                        clientX: e.clientX,
                        clientY: e.clientY,
                        target: t,
                        container: this.currentContainer,
                        originalEvent: e
                    });
                this.trigger(this.currentContainer, r)
            }
        }
        t.default = f
    }, function(e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var n, o = r(38),
            i = (n = o) && n.__esModule ? n : {
                default: n
            };
        t.default = i.default
    }, function(e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var n, o = r(2),
            i = r(4),
            s = (n = i) && n.__esModule ? n : {
                default: n
            },
            a = r(3);
        const l = Symbol("onMouseDown"),
            c = Symbol("onMouseUp"),
            u = Symbol("onDragStart"),
            d = Symbol("onDragOver"),
            h = Symbol("onDragEnd"),
            g = Symbol("onDrop"),
            f = Symbol("reset");
        class p extends s.default {
            constructor(e = [], t = {}) {
                super(e, t), this.mouseDownTimeout = null, this.draggableElement = null, this.nativeDraggableElement = null, this[l] = this[l].bind(this), this[c] = this[c].bind(this), this[u] = this[u].bind(this), this[d] = this[d].bind(this), this[h] = this[h].bind(this), this[g] = this[g].bind(this)
            }
            attach() {
                document.addEventListener("mousedown", this[l], !0)
            }
            detach() {
                document.removeEventListener("mousedown", this[l], !0)
            }[u](e) {
                e.dataTransfer.setData("text", ""), e.dataTransfer.effectAllowed = this.options.type;
                const t = document.elementFromPoint(e.clientX, e.clientY);
                if (this.currentContainer = (0, o.closest)(e.target, this.containers), !this.currentContainer) return;
                const r = new a.DragStartSensorEvent({
                    clientX: e.clientX,
                    clientY: e.clientY,
                    target: t,
                    container: this.currentContainer,
                    originalEvent: e
                });
                setTimeout((() => {
                    this.trigger(this.currentContainer, r), r.canceled() ? this.dragging = !1 : this.dragging = !0
                }), 0)
            }[d](e) {
                if (!this.dragging) return;
                const t = document.elementFromPoint(e.clientX, e.clientY),
                    r = this.currentContainer,
                    n = new a.DragMoveSensorEvent({
                        clientX: e.clientX,
                        clientY: e.clientY,
                        target: t,
                        container: r,
                        originalEvent: e
                    });
                this.trigger(r, n), n.canceled() || (e.preventDefault(), e.dataTransfer.dropEffect = this.options.type)
            }[h](e) {
                if (!this.dragging) return;
                document.removeEventListener("mouseup", this[c], !0);
                const t = document.elementFromPoint(e.clientX, e.clientY),
                    r = this.currentContainer,
                    n = new a.DragStopSensorEvent({
                        clientX: e.clientX,
                        clientY: e.clientY,
                        target: t,
                        container: r,
                        originalEvent: e
                    });
                this.trigger(r, n), this.dragging = !1, this[f]()
            }[g](e) {
                e.preventDefault()
            }[l](e) {
                if (e.target && (e.target.form || e.target.contenteditable)) return;
                const t = (0, o.closest)(e.target, (e => e.draggable));
                t && (t.draggable = !1, this.nativeDraggableElement = t), document.addEventListener("mouseup", this[c], !0), document.addEventListener("dragstart", this[u], !1), document.addEventListener("dragover", this[d], !1), document.addEventListener("dragend", this[h], !1), document.addEventListener("drop", this[g], !1);
                const r = (0, o.closest)(e.target, this.options.draggable);
                r && (this.mouseDownTimeout = setTimeout((() => {
                    r.draggable = !0, this.draggableElement = r
                }), this.options.delay))
            }[c]() {
                this[f]()
            }[f]() {
                clearTimeout(this.mouseDownTimeout), document.removeEventListener("mouseup", this[c], !0), document.removeEventListener("dragstart", this[u], !1), document.removeEventListener("dragover", this[d], !1), document.removeEventListener("dragend", this[h], !1), document.removeEventListener("drop", this[g], !1), this.nativeDraggableElement && (this.nativeDraggableElement.draggable = !0, this.nativeDraggableElement = null), this.draggableElement && (this.draggableElement.draggable = !1, this.draggableElement = null)
            }
        }
        t.default = p
    }, function(e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var n, o = r(40),
            i = (n = o) && n.__esModule ? n : {
                default: n
            };
        t.default = i.default
    }, function(e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var n, o = r(2),
            i = r(4),
            s = (n = i) && n.__esModule ? n : {
                default: n
            },
            a = r(3);
        const l = Symbol("onTouchStart"),
            c = Symbol("onTouchHold"),
            u = Symbol("onTouchEnd"),
            d = Symbol("onTouchMove");
        let h = !1;
        window.addEventListener("touchmove", (e => {
            h && e.preventDefault()
        }), {
            passive: !1
        });
        class g extends s.default {
            constructor(e = [], t = {}) {
                super(e, t), this.currentScrollableParent = null, this.tapTimeout = null, this.touchMoved = !1, this[l] = this[l].bind(this), this[c] = this[c].bind(this), this[u] = this[u].bind(this), this[d] = this[d].bind(this)
            }
            attach() {
                document.addEventListener("touchstart", this[l])
            }
            detach() {
                document.removeEventListener("touchstart", this[l])
            }[l](e) {
                const t = (0, o.closest)(e.target, this.containers);
                t && (document.addEventListener("touchmove", this[d]), document.addEventListener("touchend", this[u]), document.addEventListener("touchcancel", this[u]), t.addEventListener("contextmenu", f), this.currentContainer = t, this.tapTimeout = setTimeout(this[c](e, t), this.options.delay))
            }[c](e, t) {
                return () => {
                    if (this.touchMoved) return;
                    const r = e.touches[0] || e.changedTouches[0],
                        n = e.target,
                        o = new a.DragStartSensorEvent({
                            clientX: r.pageX,
                            clientY: r.pageY,
                            target: n,
                            container: t,
                            originalEvent: e
                        });
                    this.trigger(t, o), this.dragging = !o.canceled(), h = this.dragging
                }
            }[d](e) {
                if (this.touchMoved = !0, !this.dragging) return;
                const t = e.touches[0] || e.changedTouches[0],
                    r = document.elementFromPoint(t.pageX - window.scrollX, t.pageY - window.scrollY),
                    n = new a.DragMoveSensorEvent({
                        clientX: t.pageX,
                        clientY: t.pageY,
                        target: r,
                        container: this.currentContainer,
                        originalEvent: e
                    });
                this.trigger(this.currentContainer, n)
            }[u](e) {
                if (this.touchMoved = !1, h = !1, document.removeEventListener("touchend", this[u]), document.removeEventListener("touchcancel", this[u]), document.removeEventListener("touchmove", this[d]), this.currentContainer && this.currentContainer.removeEventListener("contextmenu", f), clearTimeout(this.tapTimeout), !this.dragging) return;
                const t = e.touches[0] || e.changedTouches[0],
                    r = document.elementFromPoint(t.pageX - window.scrollX, t.pageY - window.scrollY);
                e.preventDefault();
                const n = new a.DragStopSensorEvent({
                    clientX: t.pageX,
                    clientY: t.pageY,
                    target: r,
                    container: this.currentContainer,
                    originalEvent: e
                });
                this.trigger(this.currentContainer, n), this.currentContainer = null, this.dragging = !1
            }
        }

        function f(e) {
            e.preventDefault(), e.stopPropagation()
        }
        t.default = g
    }, function(e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var n, o = r(42),
            i = (n = o) && n.__esModule ? n : {
                default: n
            };
        t.default = i.default
    }, function(e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.DragPressureSensorEvent = t.DragStopSensorEvent = t.DragMoveSensorEvent = t.DragStartSensorEvent = t.SensorEvent = void 0;
        var n, o = r(0),
            i = (n = o) && n.__esModule ? n : {
                default: n
            };
        class s extends i.default {
            get originalEvent() {
                return this.data.originalEvent
            }
            get clientX() {
                return this.data.clientX
            }
            get clientY() {
                return this.data.clientY
            }
            get target() {
                return this.data.target
            }
            get container() {
                return this.data.container
            }
            get pressure() {
                return this.data.pressure
            }
        }
        t.SensorEvent = s;
        class a extends s {}
        t.DragStartSensorEvent = a, a.type = "drag:start";
        class l extends s {}
        t.DragMoveSensorEvent = l, l.type = "drag:move";
        class c extends s {}
        t.DragStopSensorEvent = c, c.type = "drag:stop";
        class u extends s {}
        t.DragPressureSensorEvent = u, u.type = "drag:pressure"
    }, function(e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var n, o = r(2),
            i = r(4),
            s = (n = i) && n.__esModule ? n : {
                default: n
            },
            a = r(3);
        const l = Symbol("onContextMenuWhileDragging"),
            c = Symbol("onMouseDown"),
            u = Symbol("onMouseMove"),
            d = Symbol("onMouseUp");
        class h extends s.default {
            constructor(e = [], t = {}) {
                super(e, t), this.mouseDown = !1, this.mouseDownTimeout = null, this.openedContextMenu = !1, this[l] = this[l].bind(this), this[c] = this[c].bind(this), this[u] = this[u].bind(this), this[d] = this[d].bind(this)
            }
            attach() {
                document.addEventListener("mousedown", this[c], !0)
            }
            detach() {
                document.removeEventListener("mousedown", this[c], !0)
            }[c](e) {
                if (0 !== e.button || e.ctrlKey || e.metaKey) return;
                document.addEventListener("mouseup", this[d]);
                const t = document.elementFromPoint(e.clientX, e.clientY),
                    r = (0, o.closest)(t, this.containers);
                r && (document.addEventListener("dragstart", g), this.mouseDown = !0, clearTimeout(this.mouseDownTimeout), this.mouseDownTimeout = setTimeout((() => {
                    if (!this.mouseDown) return;
                    const n = new a.DragStartSensorEvent({
                        clientX: e.clientX,
                        clientY: e.clientY,
                        target: t,
                        container: r,
                        originalEvent: e
                    });
                    this.trigger(r, n), this.currentContainer = r, this.dragging = !n.canceled(), this.dragging && (document.addEventListener("contextmenu", this[l]), document.addEventListener("mousemove", this[u]))
                }), this.options.delay))
            }[u](e) {
                if (!this.dragging) return;
                const t = document.elementFromPoint(e.clientX, e.clientY),
                    r = new a.DragMoveSensorEvent({
                        clientX: e.clientX,
                        clientY: e.clientY,
                        target: t,
                        container: this.currentContainer,
                        originalEvent: e
                    });
                this.trigger(this.currentContainer, r)
            }[d](e) {
                if (this.mouseDown = Boolean(this.openedContextMenu), this.openedContextMenu) return void(this.openedContextMenu = !1);
                if (document.removeEventListener("mouseup", this[d]), document.removeEventListener("dragstart", g), !this.dragging) return;
                const t = document.elementFromPoint(e.clientX, e.clientY),
                    r = new a.DragStopSensorEvent({
                        clientX: e.clientX,
                        clientY: e.clientY,
                        target: t,
                        container: this.currentContainer,
                        originalEvent: e
                    });
                this.trigger(this.currentContainer, r), document.removeEventListener("contextmenu", this[l]), document.removeEventListener("mousemove", this[u]), this.currentContainer = null, this.dragging = !1
            }[l](e) {
                e.preventDefault(), this.openedContextMenu = !0
            }
        }

        function g(e) {
            e.preventDefault()
        }
        t.default = h
    }, function(e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var n, o = r(45),
            i = (n = o) && n.__esModule ? n : {
                default: n
            };
        t.default = i.default
    }, function(e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var n = Object.assign || function(e) {
            for (var t = 1; t < arguments.length; t++) {
                var r = arguments[t];
                for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
            }
            return e
        };
        t.default = class {
            constructor(e = [], t = {}) {
                this.containers = [...e], this.options = n({}, t), this.dragging = !1, this.currentContainer = null
            }
            attach() {
                return this
            }
            detach() {
                return this
            }
            addContainer(...e) {
                this.containers = [...this.containers, ...e]
            }
            removeContainer(...e) {
                this.containers = this.containers.filter((t => !e.includes(t)))
            }
            trigger(e, t) {
                const r = document.createEvent("Event");
                return r.detail = t, r.initEvent(t.type, !0, !0), e.dispatchEvent(r), this.lastEvent = t, t
            }
        }
    }, function(e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.default = function(e) {
            return requestAnimationFrame((() => {
                requestAnimationFrame(e)
            }))
        }
    }, function(e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var n, o = r(48),
            i = (n = o) && n.__esModule ? n : {
                default: n
            };
        t.default = i.default
    }, function(e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.default = function(e, t) {
            if (!e) return null;
            const r = t,
                o = t,
                i = t,
                s = t,
                a = Boolean("string" == typeof t),
                l = Boolean("function" == typeof t),
                c = Boolean(t instanceof NodeList || t instanceof Array),
                u = Boolean(t instanceof HTMLElement);
            let d = e;
            do {
                if (d = d.correspondingUseElement || d.correspondingElement || d, (h = d) ? a ? n.call(h, r) : c ? [...i].includes(h) : u ? s === h : l && o(h) : h) return d;
                d = d.parentNode
            } while (d && d !== document.body && d !== document);
            var h;
            return null
        };
        const n = Element.prototype.matches || Element.prototype.webkitMatchesSelector || Element.prototype.mozMatchesSelector || Element.prototype.msMatchesSelector
    }, function(e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var n, o = r(50),
            i = (n = o) && n.__esModule ? n : {
                default: n
            };
        t.default = i.default
    }, function(e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.defaultOptions = t.scroll = t.onDragStop = t.onDragMove = t.onDragStart = void 0;
        var n, o = Object.assign || function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var r = arguments[t];
                    for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
                }
                return e
            },
            i = r(1),
            s = (n = i) && n.__esModule ? n : {
                default: n
            },
            a = r(2);
        const l = t.onDragStart = Symbol("onDragStart"),
            c = t.onDragMove = Symbol("onDragMove"),
            u = t.onDragStop = Symbol("onDragStop"),
            d = t.scroll = Symbol("scroll"),
            h = t.defaultOptions = {
                speed: 6,
                sensitivity: 50,
                scrollableElements: []
            };
        class g extends s.default {
            constructor(e) {
                super(e), this.options = o({}, h, this.getOptions()), this.currentMousePosition = null, this.scrollAnimationFrame = null, this.scrollableElement = null, this.findScrollableElementFrame = null, this[l] = this[l].bind(this), this[c] = this[c].bind(this), this[u] = this[u].bind(this), this[d] = this[d].bind(this)
            }
            attach() {
                this.draggable.on("drag:start", this[l]).on("drag:move", this[c]).on("drag:stop", this[u])
            }
            detach() {
                this.draggable.off("drag:start", this[l]).off("drag:move", this[c]).off("drag:stop", this[u])
            }
            getOptions() {
                return this.draggable.options.scrollable || {}
            }
            getScrollableElement(e) {
                return this.hasDefinedScrollableElements() ? (0, a.closest)(e, this.options.scrollableElements) || document.documentElement : function(e) {
                    if (!e) return f();
                    const t = getComputedStyle(e).getPropertyValue("position"),
                        r = "absolute" === t,
                        n = (0, a.closest)(e, (e => (!r || ! function(e) {
                            return "static" === getComputedStyle(e).getPropertyValue("position")
                        }(e)) && function(e) {
                            const t = /(auto|scroll)/,
                                r = getComputedStyle(e, null),
                                n = r.getPropertyValue("overflow") + r.getPropertyValue("overflow-y") + r.getPropertyValue("overflow-x");
                            return t.test(n)
                        }(e)));
                    return "fixed" !== t && n ? n : f()
                }(e)
            }
            hasDefinedScrollableElements() {
                return Boolean(0 !== this.options.scrollableElements.length)
            }[l](e) {
                this.findScrollableElementFrame = requestAnimationFrame((() => {
                    this.scrollableElement = this.getScrollableElement(e.source)
                }))
            }[c](e) {
                if (this.findScrollableElementFrame = requestAnimationFrame((() => {
                        this.scrollableElement = this.getScrollableElement(e.sensorEvent.target)
                    })), !this.scrollableElement) return;
                const t = e.sensorEvent,
                    r = {
                        x: 0,
                        y: 0
                    };
                "ontouchstart" in window && (r.y = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0, r.x = window.pageXOffset || document.documentElement.scrollLeft || document.body.scrollLeft || 0), this.currentMousePosition = {
                    clientX: t.clientX - r.x,
                    clientY: t.clientY - r.y
                }, this.scrollAnimationFrame = requestAnimationFrame(this[d])
            }[u]() {
                cancelAnimationFrame(this.scrollAnimationFrame), cancelAnimationFrame(this.findScrollableElementFrame), this.scrollableElement = null, this.scrollAnimationFrame = null, this.findScrollableElementFrame = null, this.currentMousePosition = null
            }[d]() {
                if (!this.scrollableElement || !this.currentMousePosition) return;
                cancelAnimationFrame(this.scrollAnimationFrame);
                const {
                    speed: e,
                    sensitivity: t
                } = this.options, r = this.scrollableElement.getBoundingClientRect(), n = r.bottom > window.innerHeight, o = r.top < 0 || n, i = f(), s = this.scrollableElement, a = this.currentMousePosition.clientX, l = this.currentMousePosition.clientY;
                if (s === document.body || s === document.documentElement || o) {
                    const {
                        innerHeight: r,
                        innerWidth: n
                    } = window;
                    l < t ? i.scrollTop -= e : r - l < t && (i.scrollTop += e), a < t ? i.scrollLeft -= e : n - a < t && (i.scrollLeft += e)
                } else {
                    const {
                        offsetHeight: n,
                        offsetWidth: o
                    } = s;
                    r.top + n - l < t ? s.scrollTop += e : l - r.top < t && (s.scrollTop -= e), r.left + o - a < t ? s.scrollLeft += e : a - r.left < t && (s.scrollLeft -= e)
                }
                this.scrollAnimationFrame = requestAnimationFrame(this[d])
            }
        }

        function f() {
            return document.scrollingElement || document.documentElement
        }
        t.default = g
    }, function(e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.defaultOptions = void 0;
        var n, o = r(52),
            i = (n = o) && n.__esModule ? n : {
                default: n
            };
        t.default = i.default, t.defaultOptions = o.defaultOptions
    }, function(e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.MirrorDestroyEvent = t.MirrorMoveEvent = t.MirrorAttachedEvent = t.MirrorCreatedEvent = t.MirrorCreateEvent = t.MirrorEvent = void 0;
        var n, o = r(0),
            i = (n = o) && n.__esModule ? n : {
                default: n
            };
        class s extends i.default {
            get source() {
                return this.data.source
            }
            get originalSource() {
                return this.data.originalSource
            }
            get sourceContainer() {
                return this.data.sourceContainer
            }
            get sensorEvent() {
                return this.data.sensorEvent
            }
            get dragEvent() {
                return this.data.dragEvent
            }
            get originalEvent() {
                return this.sensorEvent ? this.sensorEvent.originalEvent : null
            }
        }
        t.MirrorEvent = s;
        class a extends s {}
        t.MirrorCreateEvent = a, a.type = "mirror:create";
        class l extends s {
            get mirror() {
                return this.data.mirror
            }
        }
        t.MirrorCreatedEvent = l, l.type = "mirror:created";
        class c extends s {
            get mirror() {
                return this.data.mirror
            }
        }
        t.MirrorAttachedEvent = c, c.type = "mirror:attached";
        class u extends s {
            get mirror() {
                return this.data.mirror
            }
        }
        t.MirrorMoveEvent = u, u.type = "mirror:move", u.cancelable = !0;
        class d extends s {
            get mirror() {
                return this.data.mirror
            }
        }
        t.MirrorDestroyEvent = d, d.type = "mirror:destroy", d.cancelable = !0
    }, function(e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var n = r(54);
        Object.keys(n).forEach((function(e) {
            "default" !== e && "__esModule" !== e && Object.defineProperty(t, e, {
                enumerable: !0,
                get: function() {
                    return n[e]
                }
            })
        }))
    }, function(e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.defaultOptions = t.getAppendableContainer = t.onScroll = t.onMirrorMove = t.onMirrorCreated = t.onDragStop = t.onDragMove = t.onDragStart = void 0;
        var n, o = Object.assign || function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var r = arguments[t];
                    for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
                }
                return e
            },
            i = r(1),
            s = (n = i) && n.__esModule ? n : {
                default: n
            },
            a = r(55);

        function l(e, t) {
            var r = {};
            for (var n in e) t.indexOf(n) >= 0 || Object.prototype.hasOwnProperty.call(e, n) && (r[n] = e[n]);
            return r
        }
        const c = t.onDragStart = Symbol("onDragStart"),
            u = t.onDragMove = Symbol("onDragMove"),
            d = t.onDragStop = Symbol("onDragStop"),
            h = t.onMirrorCreated = Symbol("onMirrorCreated"),
            g = t.onMirrorMove = Symbol("onMirrorMove"),
            f = t.onScroll = Symbol("onScroll"),
            p = t.getAppendableContainer = Symbol("getAppendableContainer"),
            v = t.defaultOptions = {
                constrainDimensions: !1,
                xAxis: !0,
                yAxis: !0,
                cursorOffsetX: null,
                cursorOffsetY: null
            };
        class m extends s.default {
            constructor(e) {
                super(e), this.options = o({}, v, this.getOptions()), this.scrollOffset = {
                    x: 0,
                    y: 0
                }, this.initialScrollOffset = {
                    x: window.scrollX,
                    y: window.scrollY
                }, this[c] = this[c].bind(this), this[u] = this[u].bind(this), this[d] = this[d].bind(this), this[h] = this[h].bind(this), this[g] = this[g].bind(this), this[f] = this[f].bind(this)
            }
            attach() {
                this.draggable.on("drag:start", this[c]).on("drag:move", this[u]).on("drag:stop", this[d]).on("mirror:created", this[h]).on("mirror:move", this[g])
            }
            detach() {
                this.draggable.off("drag:start", this[c]).off("drag:move", this[u]).off("drag:stop", this[d]).off("mirror:created", this[h]).off("mirror:move", this[g])
            }
            getOptions() {
                return this.draggable.options.mirror || {}
            }[c](e) {
                if (e.canceled()) return;
                "ontouchstart" in window && document.addEventListener("scroll", this[f], !0), this.initialScrollOffset = {
                    x: window.scrollX,
                    y: window.scrollY
                };
                const {
                    source: t,
                    originalSource: r,
                    sourceContainer: n,
                    sensorEvent: o
                } = e, i = new a.MirrorCreateEvent({
                    source: t,
                    originalSource: r,
                    sourceContainer: n,
                    sensorEvent: o,
                    dragEvent: e
                });
                if (this.draggable.trigger(i), function(e) {
                        return /^drag/.test(e.originalEvent.type)
                    }(o) || i.canceled()) return;
                const s = this[p](t) || n;
                this.mirror = t.cloneNode(!0);
                const l = new a.MirrorCreatedEvent({
                        source: t,
                        originalSource: r,
                        sourceContainer: n,
                        sensorEvent: o,
                        dragEvent: e,
                        mirror: this.mirror
                    }),
                    c = new a.MirrorAttachedEvent({
                        source: t,
                        originalSource: r,
                        sourceContainer: n,
                        sensorEvent: o,
                        dragEvent: e,
                        mirror: this.mirror
                    });
                this.draggable.trigger(l), s.appendChild(this.mirror), this.draggable.trigger(c)
            }[u](e) {
                if (!this.mirror || e.canceled()) return;
                const {
                    source: t,
                    originalSource: r,
                    sourceContainer: n,
                    sensorEvent: o
                } = e, i = new a.MirrorMoveEvent({
                    source: t,
                    originalSource: r,
                    sourceContainer: n,
                    sensorEvent: o,
                    dragEvent: e,
                    mirror: this.mirror
                });
                this.draggable.trigger(i)
            }[d](e) {
                if ("ontouchstart" in window && document.removeEventListener("scroll", this[f], !0), this.initialScrollOffset = {
                        x: 0,
                        y: 0
                    }, this.scrollOffset = {
                        x: 0,
                        y: 0
                    }, !this.mirror) return;
                const {
                    source: t,
                    sourceContainer: r,
                    sensorEvent: n
                } = e, o = new a.MirrorDestroyEvent({
                    source: t,
                    mirror: this.mirror,
                    sourceContainer: r,
                    sensorEvent: n,
                    dragEvent: e
                });
                this.draggable.trigger(o), o.canceled() || this.mirror.parentNode.removeChild(this.mirror)
            }[f]() {
                this.scrollOffset = {
                    x: window.scrollX - this.initialScrollOffset.x,
                    y: window.scrollY - this.initialScrollOffset.y
                }
            }[h]({
                mirror: e,
                source: t,
                sensorEvent: r
            }) {
                const n = {
                    mirror: e,
                    source: t,
                    sensorEvent: r,
                    mirrorClass: this.draggable.getClassNameFor("mirror"),
                    scrollOffset: this.scrollOffset,
                    options: this.options
                };
                return Promise.resolve(n).then(b).then(y).then(E).then(O).then(_({
                    initial: !0
                })).then(S).then((e => {
                    let {
                        mirrorOffset: t,
                        initialX: r,
                        initialY: n
                    } = e, i = l(e, ["mirrorOffset", "initialX", "initialY"]);
                    return this.mirrorOffset = t, this.initialX = r, this.initialY = n, o({
                        mirrorOffset: t,
                        initialX: r,
                        initialY: n
                    }, i)
                }))
            }[g](e) {
                if (e.canceled()) return null;
                const t = {
                    mirror: e.mirror,
                    sensorEvent: e.sensorEvent,
                    mirrorOffset: this.mirrorOffset,
                    options: this.options,
                    initialX: this.initialX,
                    initialY: this.initialY,
                    scrollOffset: this.scrollOffset
                };
                return Promise.resolve(t).then(_({
                    raf: !0
                }))
            }[p](e) {
                const t = this.options.appendTo;
                return "string" == typeof t ? document.querySelector(t) : t instanceof HTMLElement ? t : "function" == typeof t ? t(e) : e.parentNode
            }
        }

        function b(e) {
            let {
                source: t
            } = e, r = l(e, ["source"]);
            return M((e => {
                const n = t.getBoundingClientRect();
                e(o({
                    source: t,
                    sourceRect: n
                }, r))
            }))
        }

        function y(e) {
            let {
                sensorEvent: t,
                sourceRect: r,
                options: n
            } = e, i = l(e, ["sensorEvent", "sourceRect", "options"]);
            return M((e => {
                const s = null === n.cursorOffsetY ? t.clientY - r.top : n.cursorOffsetY,
                    a = null === n.cursorOffsetX ? t.clientX - r.left : n.cursorOffsetX;
                e(o({
                    sensorEvent: t,
                    sourceRect: r,
                    mirrorOffset: {
                        top: s,
                        left: a
                    },
                    options: n
                }, i))
            }))
        }

        function E(e) {
            let {
                mirror: t,
                source: r,
                options: n
            } = e, i = l(e, ["mirror", "source", "options"]);
            return M((e => {
                let s, a;
                if (n.constrainDimensions) {
                    const e = getComputedStyle(r);
                    s = e.getPropertyValue("height"), a = e.getPropertyValue("width")
                }
                t.style.position = "fixed", t.style.pointerEvents = "none", t.style.top = 0, t.style.left = 0, t.style.margin = 0, n.constrainDimensions && (t.style.height = s, t.style.width = a), e(o({
                    mirror: t,
                    source: r,
                    options: n
                }, i))
            }))
        }

        function O(e) {
            let {
                mirror: t,
                mirrorClass: r
            } = e, n = l(e, ["mirror", "mirrorClass"]);
            return M((e => {
                t.classList.add(r), e(o({
                    mirror: t,
                    mirrorClass: r
                }, n))
            }))
        }

        function S(e) {
            let {
                mirror: t
            } = e, r = l(e, ["mirror"]);
            return M((e => {
                t.removeAttribute("id"), delete t.id, e(o({
                    mirror: t
                }, r))
            }))
        }

        function _({
            withFrame: e = !1,
            initial: t = !1
        } = {}) {
            return r => {
                let {
                    mirror: n,
                    sensorEvent: i,
                    mirrorOffset: s,
                    initialY: a,
                    initialX: c,
                    scrollOffset: u,
                    options: d
                } = r, h = l(r, ["mirror", "sensorEvent", "mirrorOffset", "initialY", "initialX", "scrollOffset", "options"]);
                return M((e => {
                    const r = o({
                        mirror: n,
                        sensorEvent: i,
                        mirrorOffset: s,
                        options: d
                    }, h);
                    if (s) {
                        const e = i.clientX - s.left - u.x,
                            o = i.clientY - s.top - u.y;
                        d.xAxis && d.yAxis || t ? n.style.transform = `translate3d(${e}px, ${o}px, 0)` : d.xAxis && !d.yAxis ? n.style.transform = `translate3d(${e}px, ${a}px, 0)` : d.yAxis && !d.xAxis && (n.style.transform = `translate3d(${c}px, ${o}px, 0)`), t && (r.initialX = e, r.initialY = o)
                    }
                    e(r)
                }), {
                    frame: e
                })
            }
        }

        function M(e, {
            raf: t = !1
        } = {}) {
            return new Promise(((r, n) => {
                t ? requestAnimationFrame((() => {
                    e(r, n)
                })) : e(r, n)
            }))
        }
        t.default = m
    }, function(e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.defaultOptions = void 0;
        var n, o = r(56),
            i = (n = o) && n.__esModule ? n : {
                default: n
            };
        t.default = i.default, t.defaultOptions = o.defaultOptions
    }, function(e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var n, o = Object.assign || function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var r = arguments[t];
                    for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
                }
                return e
            },
            i = r(1),
            s = (n = i) && n.__esModule ? n : {
                default: n
            };
        const a = Symbol("onInitialize"),
            l = Symbol("onDestroy"),
            c = {};
        class u extends s.default {
            constructor(e) {
                super(e), this.options = o({}, c, this.getOptions()), this[a] = this[a].bind(this), this[l] = this[l].bind(this)
            }
            attach() {
                this.draggable.on("draggable:initialize", this[a]).on("draggable:destroy", this[l])
            }
            detach() {
                this.draggable.off("draggable:initialize", this[a]).off("draggable:destroy", this[l])
            }
            getOptions() {
                return this.draggable.options.focusable || {}
            }
            getElements() {
                return [...this.draggable.containers, ...this.draggable.getDraggableElements()]
            }[a]() {
                requestAnimationFrame((() => {
                    this.getElements().forEach((e => function(e) {
                        Boolean(!e.getAttribute("tabindex") && -1 === e.tabIndex) && (d.push(e), e.tabIndex = 0)
                    }(e)))
                }))
            }[l]() {
                requestAnimationFrame((() => {
                    this.getElements().forEach((e => function(e) {
                        const t = d.indexOf(e); - 1 !== t && (e.tabIndex = -1, d.splice(t, 1))
                    }(e)))
                }))
            }
        }
        t.default = u;
        const d = []
    }, function(e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var n, o = r(58),
            i = (n = o) && n.__esModule ? n : {
                default: n
            };
        t.default = i.default
    }, function(e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        t.default = class {
            constructor(e) {
                this.draggable = e
            }
            attach() {
                throw new Error("Not Implemented")
            }
            detach() {
                throw new Error("Not Implemented")
            }
        }
    }, function(e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.defaultOptions = void 0;
        var n, o = Object.assign || function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var r = arguments[t];
                    for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
                }
                return e
            },
            i = r(1),
            s = (n = i) && n.__esModule ? n : {
                default: n
            };
        const a = Symbol("onInitialize"),
            l = Symbol("onDestroy"),
            c = Symbol("announceEvent"),
            u = Symbol("announceMessage"),
            d = t.defaultOptions = {
                expire: 7e3
            };
        class h extends s.default {
            constructor(e) {
                super(e), this.options = o({}, d, this.getOptions()), this.originalTriggerMethod = this.draggable.trigger, this[a] = this[a].bind(this), this[l] = this[l].bind(this)
            }
            attach() {
                this.draggable.on("draggable:initialize", this[a])
            }
            detach() {
                this.draggable.off("draggable:destroy", this[l])
            }
            getOptions() {
                return this.draggable.options.announcements || {}
            }[c](e) {
                const t = this.options[e.type];
                t && "string" == typeof t && this[u](t), t && "function" == typeof t && this[u](t(e))
            }[u](e) {
                ! function(e, {
                    expire: t
                }) {
                    const r = document.createElement("div");
                    r.textContent = e, g.appendChild(r), setTimeout((() => {
                        g.removeChild(r)
                    }), t)
                }(e, {
                    expire: this.options.expire
                })
            }[a]() {
                this.draggable.trigger = e => {
                    try {
                        this[c](e)
                    } finally {
                        this.originalTriggerMethod.call(this.draggable, e)
                    }
                }
            }[l]() {
                this.draggable.trigger = this.originalTriggerMethod
            }
        }
        t.default = h;
        const g = function() {
            const e = document.createElement("div");
            return e.setAttribute("id", "draggable-live-region"), e.setAttribute("aria-relevant", "additions"), e.setAttribute("aria-atomic", "true"), e.setAttribute("aria-live", "assertive"), e.setAttribute("role", "log"), e.style.position = "fixed", e.style.width = "1px", e.style.height = "1px", e.style.top = "-1px", e.style.overflow = "hidden", e
        }();
        document.addEventListener("DOMContentLoaded", (() => {
            document.body.appendChild(g)
        }))
    }, function(e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.defaultOptions = void 0;
        var n, o = r(61),
            i = (n = o) && n.__esModule ? n : {
                default: n
            };
        t.default = i.default, t.defaultOptions = o.defaultOptions
    }, function(e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.DraggableDestroyEvent = t.DraggableInitializedEvent = t.DraggableEvent = void 0;
        var n, o = r(0),
            i = (n = o) && n.__esModule ? n : {
                default: n
            };
        class s extends i.default {
            get draggable() {
                return this.data.draggable
            }
        }
        t.DraggableEvent = s, s.type = "draggable";
        class a extends s {}
        t.DraggableInitializedEvent = a, a.type = "draggable:initialize";
        class l extends s {}
        t.DraggableDestroyEvent = l, l.type = "draggable:destroy"
    }, function(e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var n = Object.assign || function(e) {
            for (var t = 1; t < arguments.length; t++) {
                var r = arguments[t];
                for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
            }
            return e
        };
        const o = Symbol("canceled");
        class i {
            constructor(e) {
                this[o] = !1, this.data = e
            }
            get type() {
                return this.constructor.type
            }
            get cancelable() {
                return this.constructor.cancelable
            }
            cancel() {
                this[o] = !0
            }
            canceled() {
                return Boolean(this[o])
            }
            clone(e) {
                return new this.constructor(n({}, this.data, e))
            }
        }
        t.default = i, i.type = "event", i.cancelable = !1
    }, function(e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.DragStopEvent = t.DragPressureEvent = t.DragOutContainerEvent = t.DragOverContainerEvent = t.DragOutEvent = t.DragOverEvent = t.DragMoveEvent = t.DragStartEvent = t.DragEvent = void 0;
        var n, o = r(0),
            i = (n = o) && n.__esModule ? n : {
                default: n
            };
        class s extends i.default {
            get source() {
                return this.data.source
            }
            get originalSource() {
                return this.data.originalSource
            }
            get mirror() {
                return this.data.mirror
            }
            get sourceContainer() {
                return this.data.sourceContainer
            }
            get sensorEvent() {
                return this.data.sensorEvent
            }
            get originalEvent() {
                return this.sensorEvent ? this.sensorEvent.originalEvent : null
            }
        }
        t.DragEvent = s, s.type = "drag";
        class a extends s {}
        t.DragStartEvent = a, a.type = "drag:start", a.cancelable = !0;
        class l extends s {}
        t.DragMoveEvent = l, l.type = "drag:move";
        class c extends s {
            get overContainer() {
                return this.data.overContainer
            }
            get over() {
                return this.data.over
            }
        }
        t.DragOverEvent = c, c.type = "drag:over", c.cancelable = !0;
        class u extends s {
            get overContainer() {
                return this.data.overContainer
            }
            get over() {
                return this.data.over
            }
        }
        t.DragOutEvent = u, u.type = "drag:out";
        class d extends s {
            get overContainer() {
                return this.data.overContainer
            }
        }
        t.DragOverContainerEvent = d, d.type = "drag:over:container";
        class h extends s {
            get overContainer() {
                return this.data.overContainer
            }
        }
        t.DragOutContainerEvent = h, h.type = "drag:out:container";
        class g extends s {
            get pressure() {
                return this.data.pressure
            }
        }
        t.DragPressureEvent = g, g.type = "drag:pressure";
        class f extends s {}
        t.DragStopEvent = f, f.type = "drag:stop"
    }, function(e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.Plugins = t.Sensors = t.Sortable = t.Swappable = t.Droppable = t.Draggable = t.BasePlugin = t.BaseEvent = void 0;
        var n = r(5);
        Object.defineProperty(t, "Draggable", {
            enumerable: !0,
            get: function() {
                return h(n).default
            }
        });
        var o = r(34);
        Object.defineProperty(t, "Droppable", {
            enumerable: !0,
            get: function() {
                return h(o).default
            }
        });
        var i = r(31);
        Object.defineProperty(t, "Swappable", {
            enumerable: !0,
            get: function() {
                return h(i).default
            }
        });
        var s = r(28);
        Object.defineProperty(t, "Sortable", {
            enumerable: !0,
            get: function() {
                return h(s).default
            }
        });
        var a = h(r(0)),
            l = h(r(1)),
            c = d(r(6)),
            u = d(r(25));

        function d(e) {
            if (e && e.__esModule) return e;
            var t = {};
            if (null != e)
                for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && (t[r] = e[r]);
            return t.default = e, t
        }

        function h(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        t.BaseEvent = a.default, t.BasePlugin = l.default, t.Sensors = c, t.Plugins = u
    }])
})),
function(e, t) {
    "object" == typeof exports && "object" == typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define("Draggable", [], t) : "object" == typeof exports ? exports.Draggable = t() : e.Draggable = t()
}(window, (function() {
    return function(e) {
        var t = {};

        function r(n) {
            if (t[n]) return t[n].exports;
            var o = t[n] = {
                i: n,
                l: !1,
                exports: {}
            };
            return e[n].call(o.exports, o, o.exports, r), o.l = !0, o.exports
        }
        return r.m = e, r.c = t, r.d = function(e, t, n) {
            r.o(e, t) || Object.defineProperty(e, t, {
                enumerable: !0,
                get: n
            })
        }, r.r = function(e) {
            "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
                value: "Module"
            }), Object.defineProperty(e, "__esModule", {
                value: !0
            })
        }, r.t = function(e, t) {
            if (1 & t && (e = r(e)), 8 & t) return e;
            if (4 & t && "object" == typeof e && e && e.__esModule) return e;
            var n = Object.create(null);
            if (r.r(n), Object.defineProperty(n, "default", {
                    enumerable: !0,
                    value: e
                }), 2 & t && "string" != typeof e)
                for (var o in e) r.d(n, o, function(t) {
                    return e[t]
                }.bind(null, o));
            return n
        }, r.n = function(e) {
            var t = e && e.__esModule ? function() {
                return e.default
            } : function() {
                return e
            };
            return r.d(t, "a", t), t
        }, r.o = function(e, t) {
            return Object.prototype.hasOwnProperty.call(e, t)
        }, r.p = "", r(r.s = 154)
    }([function(e, t, r) {
        var n = r(36)("wks"),
            o = r(22),
            i = r(1).Symbol,
            s = "function" == typeof i;
        (e.exports = function(e) {
            return n[e] || (n[e] = s && i[e] || (s ? i : o)("Symbol." + e))
        }).store = n
    }, function(e, t) {
        var r = e.exports = "undefined" != typeof window && window.Math == Math ? window : "undefined" != typeof self && self.Math == Math ? self : Function("return this")();
        "number" == typeof __g && (__g = r)
    }, function(e, t) {
        var r = e.exports = {
            version: "2.5.7"
        };
        "number" == typeof __e && (__e = r)
    }, function(e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var n, o = r(112),
            i = (n = o) && n.__esModule ? n : {
                default: n
            };
        t.default = i.default
    }, function(e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var n, o = r(111),
            i = (n = o) && n.__esModule ? n : {
                default: n
            };
        t.default = i.default
    }, function(e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var n = r(107);
        Object.defineProperty(t, "closest", {
            enumerable: !0,
            get: function() {
                return i(n).default
            }
        });
        var o = r(105);

        function i(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        Object.defineProperty(t, "requestNextAnimationFrame", {
            enumerable: !0,
            get: function() {
                return i(o).default
            }
        })
    }, function(e, t, r) {
        var n = r(8);
        e.exports = function(e) {
            if (!n(e)) throw TypeError(e + " is not an object!");
            return e
        }
    }, function(e, t, r) {
        var n = r(58),
            o = r(35);
        e.exports = function(e) {
            return n(o(e))
        }
    }, function(e, t) {
        e.exports = function(e) {
            return "object" == typeof e ? null !== e : "function" == typeof e
        }
    }, function(e, t, r) {
        var n = r(6),
            o = r(61),
            i = r(37),
            s = Object.defineProperty;
        t.f = r(11) ? Object.defineProperty : function(e, t, r) {
            if (n(e), t = i(t, !0), n(r), o) try {
                return s(e, t, r)
            } catch (e) {}
            if ("get" in r || "set" in r) throw TypeError("Accessors not supported!");
            return "value" in r && (e[t] = r.value), e
        }
    }, function(e, t, r) {
        var n = r(9),
            o = r(28);
        e.exports = r(11) ? function(e, t, r) {
            return n.f(e, t, o(1, r))
        } : function(e, t, r) {
            return e[t] = r, e
        }
    }, function(e, t, r) {
        e.exports = !r(23)((function() {
            return 7 != Object.defineProperty({}, "a", {
                get: function() {
                    return 7
                }
            }).a
        }))
    }, function(e, t) {
        var r = {}.hasOwnProperty;
        e.exports = function(e, t) {
            return r.call(e, t)
        }
    }, function(e, t, r) {
        var n = r(59),
            o = r(32);
        e.exports = Object.keys || function(e) {
            return n(e, o)
        }
    }, function(e, t, r) {
        var n = r(1),
            o = r(10),
            i = r(12),
            s = r(22)("src"),
            a = "toString",
            l = Function.toString,
            c = ("" + l).split(a);
        r(2).inspectSource = function(e) {
            return l.call(e)
        }, (e.exports = function(e, t, r, a) {
            var l = "function" == typeof r;
            l && (i(r, "name") || o(r, "name", t)), e[t] !== r && (l && (i(r, s) || o(r, s, e[t] ? "" + e[t] : c.join(String(t)))), e === n ? e[t] = r : a ? e[t] ? e[t] = r : o(e, t, r) : (delete e[t], o(e, t, r)))
        })(Function.prototype, a, (function() {
            return "function" == typeof this && this[s] || l.call(this)
        }))
    }, function(e, t, r) {
        var n = r(1),
            o = r(2),
            i = r(10),
            s = r(14),
            a = r(27),
            l = function(e, t, r) {
                var c, u, d, h, g = e & l.F,
                    f = e & l.G,
                    p = e & l.S,
                    v = e & l.P,
                    m = e & l.B,
                    b = f ? n : p ? n[t] || (n[t] = {}) : (n[t] || {}).prototype,
                    y = f ? o : o[t] || (o[t] = {}),
                    E = y.prototype || (y.prototype = {});
                for (c in f && (r = t), r) d = ((u = !g && b && void 0 !== b[c]) ? b : r)[c], h = m && u ? a(d, n) : v && "function" == typeof d ? a(Function.call, d) : d, b && s(b, c, d, e & l.U), y[c] != d && i(y, c, h), v && E[c] != d && (E[c] = d)
            };
        n.core = o, l.F = 1, l.G = 2, l.S = 4, l.P = 8, l.B = 16, l.W = 32, l.U = 64, l.R = 128, e.exports = l
    }, function(e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var n = r(103);
        Object.keys(n).forEach((function(e) {
            "default" !== e && "__esModule" !== e && Object.defineProperty(t, e, {
                enumerable: !0,
                get: function() {
                    return n[e]
                }
            })
        }))
    }, function(e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var n, o = r(110),
            i = (n = o) && n.__esModule ? n : {
                default: n
            };
        t.default = i.default
    }, function(e, t) {
        e.exports = {}
    }, function(e, t) {
        t.f = {}.propertyIsEnumerable
    }, function(e, t) {
        var r = {}.toString;
        e.exports = function(e) {
            return r.call(e).slice(8, -1)
        }
    }, function(e, t) {
        e.exports = !1
    }, function(e, t) {
        var r = 0,
            n = Math.random();
        e.exports = function(e) {
            return "Symbol(".concat(void 0 === e ? "" : e, ")_", (++r + n).toString(36))
        }
    }, function(e, t) {
        e.exports = function(e) {
            try {
                return !!e()
            } catch (e) {
                return !0
            }
        }
    }, function(e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var n = r(44);
        Object.keys(n).forEach((function(e) {
            "default" !== e && "__esModule" !== e && Object.defineProperty(t, e, {
                enumerable: !0,
                get: function() {
                    return n[e]
                }
            })
        }));
        var o = r(43);
        Object.keys(o).forEach((function(e) {
            "default" !== e && "__esModule" !== e && Object.defineProperty(t, e, {
                enumerable: !0,
                get: function() {
                    return o[e]
                }
            })
        }));
        var i = r(42);
        Object.keys(i).forEach((function(e) {
            "default" !== e && "__esModule" !== e && Object.defineProperty(t, e, {
                enumerable: !0,
                get: function() {
                    return i[e]
                }
            })
        }));
        var s = r(29);
        Object.keys(s).forEach((function(e) {
            "default" !== e && "__esModule" !== e && Object.defineProperty(t, e, {
                enumerable: !0,
                get: function() {
                    return s[e]
                }
            })
        }));
        var a, l = r(73),
            c = (a = l) && a.__esModule ? a : {
                default: a
            };
        t.default = c.default
    }, function(e, t, r) {
        var n = r(9).f,
            o = r(12),
            i = r(0)("toStringTag");
        e.exports = function(e, t, r) {
            e && !o(e = r ? e : e.prototype, i) && n(e, i, {
                configurable: !0,
                value: t
            })
        }
    }, function(e, t) {
        e.exports = function(e) {
            if ("function" != typeof e) throw TypeError(e + " is not a function!");
            return e
        }
    }, function(e, t, r) {
        var n = r(26);
        e.exports = function(e, t, r) {
            if (n(e), void 0 === t) return e;
            switch (r) {
                case 1:
                    return function(r) {
                        return e.call(t, r)
                    };
                case 2:
                    return function(r, n) {
                        return e.call(t, r, n)
                    };
                case 3:
                    return function(r, n, o) {
                        return e.call(t, r, n, o)
                    }
            }
            return function() {
                return e.apply(t, arguments)
            }
        }
    }, function(e, t) {
        e.exports = function(e, t) {
            return {
                enumerable: !(1 & e),
                configurable: !(2 & e),
                writable: !(4 & e),
                value: t
            }
        }
    }, function(e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var n = r(17);
        Object.defineProperty(t, "Sensor", {
            enumerable: !0,
            get: function() {
                return c(n).default
            }
        });
        var o = r(109);
        Object.defineProperty(t, "MouseSensor", {
            enumerable: !0,
            get: function() {
                return c(o).default
            }
        });
        var i = r(102);
        Object.defineProperty(t, "TouchSensor", {
            enumerable: !0,
            get: function() {
                return c(i).default
            }
        });
        var s = r(100);
        Object.defineProperty(t, "DragSensor", {
            enumerable: !0,
            get: function() {
                return c(s).default
            }
        });
        var a = r(98);
        Object.defineProperty(t, "ForceTouchSensor", {
            enumerable: !0,
            get: function() {
                return c(a).default
            }
        });
        var l = r(16);

        function c(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        Object.keys(l).forEach((function(e) {
            "default" !== e && "__esModule" !== e && Object.defineProperty(t, e, {
                enumerable: !0,
                get: function() {
                    return l[e]
                }
            })
        }))
    }, function(e, t, r) {
        var n = r(20),
            o = r(0)("toStringTag"),
            i = "Arguments" == n(function() {
                return arguments
            }());
        e.exports = function(e) {
            var t, r, s;
            return void 0 === e ? "Undefined" : null === e ? "Null" : "string" == typeof(r = function(e, t) {
                try {
                    return e[t]
                } catch (e) {}
            }(t = Object(e), o)) ? r : i ? n(t) : "Object" == (s = n(t)) && "function" == typeof t.callee ? "Arguments" : s
        }
    }, function(e, t) {
        t.f = Object.getOwnPropertySymbols
    }, function(e, t) {
        e.exports = "constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",")
    }, function(e, t, r) {
        var n = r(36)("keys"),
            o = r(22);
        e.exports = function(e) {
            return n[e] || (n[e] = o(e))
        }
    }, function(e, t) {
        var r = Math.ceil,
            n = Math.floor;
        e.exports = function(e) {
            return isNaN(e = +e) ? 0 : (e > 0 ? n : r)(e)
        }
    }, function(e, t) {
        e.exports = function(e) {
            if (null == e) throw TypeError("Can't call method on  " + e);
            return e
        }
    }, function(e, t, r) {
        var n = r(2),
            o = r(1),
            i = "__core-js_shared__",
            s = o[i] || (o[i] = {});
        (e.exports = function(e, t) {
            return s[e] || (s[e] = void 0 !== t ? t : {})
        })("versions", []).push({
            version: n.version,
            mode: r(21) ? "pure" : "global",
            copyright: "Â© 2018 Denis Pushkarev (zloirock.ru)"
        })
    }, function(e, t, r) {
        var n = r(8);
        e.exports = function(e, t) {
            if (!n(e)) return e;
            var r, o;
            if (t && "function" == typeof(r = e.toString) && !n(o = r.call(e))) return o;
            if ("function" == typeof(r = e.valueOf) && !n(o = r.call(e))) return o;
            if (!t && "function" == typeof(r = e.toString) && !n(o = r.call(e))) return o;
            throw TypeError("Can't convert object to primitive value")
        }
    }, function(e, t, r) {
        var n = r(8),
            o = r(1).document,
            i = n(o) && n(o.createElement);
        e.exports = function(e) {
            return i ? o.createElement(e) : {}
        }
    }, function(e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var n = r(63);
        Object.keys(n).forEach((function(e) {
            "default" !== e && "__esModule" !== e && Object.defineProperty(t, e, {
                enumerable: !0,
                get: function() {
                    return n[e]
                }
            })
        }))
    }, function(e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var n = r(66);
        Object.keys(n).forEach((function(e) {
            "default" !== e && "__esModule" !== e && Object.defineProperty(t, e, {
                enumerable: !0,
                get: function() {
                    return n[e]
                }
            })
        }))
    }, function(e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var n = r(69);
        Object.keys(n).forEach((function(e) {
            "default" !== e && "__esModule" !== e && Object.defineProperty(t, e, {
                enumerable: !0,
                get: function() {
                    return n[e]
                }
            })
        }))
    }, function(e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var n = r(83);
        Object.defineProperty(t, "Announcement", {
            enumerable: !0,
            get: function() {
                return a(n).default
            }
        }), Object.defineProperty(t, "defaultAnnouncementOptions", {
            enumerable: !0,
            get: function() {
                return n.defaultOptions
            }
        });
        var o = r(81);
        Object.defineProperty(t, "Focusable", {
            enumerable: !0,
            get: function() {
                return a(o).default
            }
        });
        var i = r(79);
        Object.defineProperty(t, "Mirror", {
            enumerable: !0,
            get: function() {
                return a(i).default
            }
        }), Object.defineProperty(t, "defaultMirrorOptions", {
            enumerable: !0,
            get: function() {
                return i.defaultOptions
            }
        });
        var s = r(75);

        function a(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        Object.defineProperty(t, "Scrollable", {
            enumerable: !0,
            get: function() {
                return a(s).default
            }
        }), Object.defineProperty(t, "defaultScrollableOptions", {
            enumerable: !0,
            get: function() {
                return s.defaultOptions
            }
        })
    }, function(e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var n = r(84);
        Object.keys(n).forEach((function(e) {
            "default" !== e && "__esModule" !== e && Object.defineProperty(t, e, {
                enumerable: !0,
                get: function() {
                    return n[e]
                }
            })
        }))
    }, function(e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var n = r(85);
        Object.keys(n).forEach((function(e) {
            "default" !== e && "__esModule" !== e && Object.defineProperty(t, e, {
                enumerable: !0,
                get: function() {
                    return n[e]
                }
            })
        }))
    }, function(e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var n = r(89);
        Object.keys(n).forEach((function(e) {
            "default" !== e && "__esModule" !== e && Object.defineProperty(t, e, {
                enumerable: !0,
                get: function() {
                    return n[e]
                }
            })
        }))
    }, function(e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var n = r(94);
        Object.keys(n).forEach((function(e) {
            "default" !== e && "__esModule" !== e && Object.defineProperty(t, e, {
                enumerable: !0,
                get: function() {
                    return n[e]
                }
            })
        }))
    }, function(e, t, r) {
        "use strict";
        var n = r(26);

        function o(e) {
            var t, r;
            this.promise = new e((function(e, n) {
                if (void 0 !== t || void 0 !== r) throw TypeError("Bad Promise constructor");
                t = e, r = n
            })), this.resolve = n(t), this.reject = n(r)
        }
        e.exports.f = function(e) {
            return new o(e)
        }
    }, function(e, t, r) {
        var n, o, i, s = r(27),
            a = r(128),
            l = r(54),
            c = r(38),
            u = r(1),
            d = u.process,
            h = u.setImmediate,
            g = u.clearImmediate,
            f = u.MessageChannel,
            p = u.Dispatch,
            v = 0,
            m = {},
            b = "onreadystatechange",
            y = function() {
                var e = +this;
                if (m.hasOwnProperty(e)) {
                    var t = m[e];
                    delete m[e], t()
                }
            },
            E = function(e) {
                y.call(e.data)
            };
        h && g || (h = function(e) {
            for (var t = [], r = 1; arguments.length > r;) t.push(arguments[r++]);
            return m[++v] = function() {
                a("function" == typeof e ? e : Function(e), t)
            }, n(v), v
        }, g = function(e) {
            delete m[e]
        }, "process" == r(20)(d) ? n = function(e) {
            d.nextTick(s(y, e, 1))
        } : p && p.now ? n = function(e) {
            p.now(s(y, e, 1))
        } : f ? (i = (o = new f).port2, o.port1.onmessage = E, n = s(i.postMessage, i, 1)) : u.addEventListener && "function" == typeof postMessage && !u.importScripts ? (n = function(e) {
            u.postMessage(e + "", "*")
        }, u.addEventListener("message", E, !1)) : n = b in c("script") ? function(e) {
            l.appendChild(c("script")).onreadystatechange = function() {
                l.removeChild(this), y.call(e)
            }
        } : function(e) {
            setTimeout(s(y, e, 1), 0)
        }), e.exports = {
            set: h,
            clear: g
        }
    }, function(e, t, r) {
        var n = r(0)("unscopables"),
            o = Array.prototype;
        null == o[n] && r(10)(o, n, {}), e.exports = function(e) {
            o[n][e] = !0
        }
    }, function(e, t, r) {
        var n = r(35);
        e.exports = function(e) {
            return Object(n(e))
        }
    }, function(e, t, r) {
        "use strict";
        var n = r(21),
            o = r(15),
            i = r(14),
            s = r(10),
            a = r(18),
            l = r(140),
            c = r(25),
            u = r(139),
            d = r(0)("iterator"),
            h = !([].keys && "next" in [].keys()),
            g = "keys",
            f = "values",
            p = function() {
                return this
            };
        e.exports = function(e, t, r, v, m, b, y) {
            l(r, t, v);
            var E, O, S, _ = function(e) {
                    if (!h && e in P) return P[e];
                    switch (e) {
                        case g:
                        case f:
                            return function() {
                                return new r(this, e)
                            }
                    }
                    return function() {
                        return new r(this, e)
                    }
                },
                M = t + " Iterator",
                C = m == f,
                w = !1,
                P = e.prototype,
                D = P[d] || P["@@iterator"] || m && P[m],
                x = D || _(m),
                j = m ? C ? _("entries") : x : void 0,
                L = "Array" == t && P.entries || D;
            if (L && (S = u(L.call(new e))) !== Object.prototype && S.next && (c(S, M, !0), n || "function" == typeof S[d] || s(S, d, p)), C && D && D.name !== f && (w = !0, x = function() {
                    return D.call(this)
                }), n && !y || !h && !w && P[d] || s(P, d, x), a[t] = x, a[M] = p, m)
                if (E = {
                        values: C ? x : _(f),
                        keys: b ? x : _(g),
                        entries: j
                    }, y)
                    for (O in E) O in P || i(P, O, E[O]);
                else o(o.P + o.F * (h || w), t, E);
            return E
        }
    }, function(e, t, r) {
        "use strict";
        var n = r(30),
            o = {};
        o[r(0)("toStringTag")] = "z", o + "" != "[object z]" && r(14)(Object.prototype, "toString", (function() {
            return "[object " + n(this) + "]"
        }), !0)
    }, function(e, t, r) {
        var n = r(59),
            o = r(32).concat("length", "prototype");
        t.f = Object.getOwnPropertyNames || function(e) {
            return n(e, o)
        }
    }, function(e, t, r) {
        var n = r(1).document;
        e.exports = n && n.documentElement
    }, function(e, t, r) {
        var n = r(6),
            o = r(146),
            i = r(32),
            s = r(33)("IE_PROTO"),
            a = function() {},
            l = function() {
                var e, t = r(38)("iframe"),
                    n = i.length;
                for (t.style.display = "none", r(54).appendChild(t), t.src = "javascript:", (e = t.contentWindow.document).open(), e.write("<script>document.F=Object<\/script>"), e.close(), l = e.F; n--;) delete l.prototype[i[n]];
                return l()
            };
        e.exports = Object.create || function(e, t) {
            var r;
            return null !== e ? (a.prototype = n(e), r = new a, a.prototype = null, r[s] = e) : r = l(), void 0 === t ? r : o(r, t)
        }
    }, function(e, t, r) {
        var n = r(34),
            o = Math.min;
        e.exports = function(e) {
            return e > 0 ? o(n(e), 9007199254740991) : 0
        }
    }, function(e, t, r) {
        var n = r(7),
            o = r(56),
            i = r(148);
        e.exports = function(e) {
            return function(t, r, s) {
                var a, l = n(t),
                    c = o(l.length),
                    u = i(s, c);
                if (e && r != r) {
                    for (; c > u;)
                        if ((a = l[u++]) != a) return !0
                } else
                    for (; c > u; u++)
                        if ((e || u in l) && l[u] === r) return e || u || 0;
                return !e && -1
            }
        }
    }, function(e, t, r) {
        var n = r(20);
        e.exports = Object("z").propertyIsEnumerable(0) ? Object : function(e) {
            return "String" == n(e) ? e.split("") : Object(e)
        }
    }, function(e, t, r) {
        var n = r(12),
            o = r(7),
            i = r(57)(!1),
            s = r(33)("IE_PROTO");
        e.exports = function(e, t) {
            var r, a = o(e),
                l = 0,
                c = [];
            for (r in a) r != s && n(a, r) && c.push(r);
            for (; t.length > l;) n(a, r = t[l++]) && (~i(c, r) || c.push(r));
            return c
        }
    }, function(e, t, r) {
        t.f = r(0)
    }, function(e, t, r) {
        e.exports = !r(11) && !r(23)((function() {
            return 7 != Object.defineProperty(r(38)("div"), "a", {
                get: function() {
                    return 7
                }
            }).a
        }))
    }, function(e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var n, o = Object.assign || function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var r = arguments[t];
                    for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
                }
                return e
            },
            i = r(24),
            s = (n = i) && n.__esModule ? n : {
                default: n
            },
            a = r(39);
        const l = Symbol("onDragStart"),
            c = Symbol("onDragOverContainer"),
            u = Symbol("onDragOver"),
            d = Symbol("onDragStop");
        const h = {
            "sortable:sorted": function({
                dragEvent: e
            }) {
                const t = e.source.textContent.trim() || e.source.id || "sortable element";
                if (e.over) {
                    const r = e.over.textContent.trim() || e.over.id || "sortable element";
                    return e.source.compareDocumentPosition(e.over) & Node.DOCUMENT_POSITION_FOLLOWING ? `Placed ${t} after ${r}` : `Placed ${t} before ${r}`
                }
                return `Placed ${t} into a different container`
            }
        };
        class g extends s.default {
            constructor(e = [], t = {}) {
                super(e, o({}, t, {
                    announcements: o({}, h, t.announcements || {})
                })), this.startIndex = null, this.startContainer = null, this[l] = this[l].bind(this), this[c] = this[c].bind(this), this[u] = this[u].bind(this), this[d] = this[d].bind(this), this.on("drag:start", this[l]).on("drag:over:container", this[c]).on("drag:over", this[u]).on("drag:stop", this[d])
            }
            destroy() {
                super.destroy(), this.off("drag:start", this[l]).off("drag:over:container", this[c]).off("drag:over", this[u]).off("drag:stop", this[d])
            }
            index(e) {
                return this.getDraggableElementsForContainer(e.parentNode).indexOf(e)
            }[l](e) {
                this.startContainer = e.source.parentNode, this.startIndex = this.index(e.source);
                const t = new a.SortableStartEvent({
                    dragEvent: e,
                    startIndex: this.startIndex,
                    startContainer: this.startContainer
                });
                this.trigger(t), t.canceled() && e.cancel()
            }[c](e) {
                if (e.canceled()) return;
                const {
                    source: t,
                    over: r,
                    overContainer: n
                } = e, o = this.index(t), i = new a.SortableSortEvent({
                    dragEvent: e,
                    currentIndex: o,
                    source: t,
                    over: r
                });
                if (this.trigger(i), i.canceled()) return;
                const s = p({
                    source: t,
                    over: r,
                    overContainer: n,
                    children: this.getDraggableElementsForContainer(n)
                });
                if (!s) return;
                const {
                    oldContainer: l,
                    newContainer: c
                } = s, u = this.index(e.source), d = new a.SortableSortedEvent({
                    dragEvent: e,
                    oldIndex: o,
                    newIndex: u,
                    oldContainer: l,
                    newContainer: c
                });
                this.trigger(d)
            }[u](e) {
                if (e.over === e.originalSource || e.over === e.source) return;
                const {
                    source: t,
                    over: r,
                    overContainer: n
                } = e, o = this.index(t), i = new a.SortableSortEvent({
                    dragEvent: e,
                    currentIndex: o,
                    source: t,
                    over: r
                });
                if (this.trigger(i), i.canceled()) return;
                const s = p({
                    source: t,
                    over: r,
                    overContainer: n,
                    children: this.getDraggableElementsForContainer(n)
                });
                if (!s) return;
                const {
                    oldContainer: l,
                    newContainer: c
                } = s, u = this.index(t), d = new a.SortableSortedEvent({
                    dragEvent: e,
                    oldIndex: o,
                    newIndex: u,
                    oldContainer: l,
                    newContainer: c
                });
                this.trigger(d)
            }[d](e) {
                const t = new a.SortableStopEvent({
                    dragEvent: e,
                    oldIndex: this.startIndex,
                    newIndex: this.index(e.source),
                    oldContainer: this.startContainer,
                    newContainer: e.source.parentNode
                });
                this.trigger(t), this.startIndex = null, this.startContainer = null
            }
        }

        function f(e) {
            return Array.prototype.indexOf.call(e.parentNode.children, e)
        }

        function p({
            source: e,
            over: t,
            overContainer: r,
            children: n
        }) {
            const o = !n.length,
                i = e.parentNode !== r,
                s = t && !i;
            return o ? function(e, t) {
                const r = e.parentNode;
                return t.appendChild(e), {
                    oldContainer: r,
                    newContainer: t
                }
            }(e, r) : s ? function(e, t) {
                const r = f(e),
                    n = f(t);
                r < n ? e.parentNode.insertBefore(e, t.nextElementSibling) : e.parentNode.insertBefore(e, t);
                return {
                    oldContainer: e.parentNode,
                    newContainer: e.parentNode
                }
            }(e, t) : i ? function(e, t, r) {
                const n = e.parentNode;
                t ? t.parentNode.insertBefore(e, t) : r.appendChild(e);
                return {
                    oldContainer: n,
                    newContainer: e.parentNode
                }
            }(e, t, r) : null
        }
        t.default = g
    }, function(e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.SortableStopEvent = t.SortableSortedEvent = t.SortableSortEvent = t.SortableStartEvent = t.SortableEvent = void 0;
        var n, o = r(3),
            i = (n = o) && n.__esModule ? n : {
                default: n
            };
        class s extends i.default {
            get dragEvent() {
                return this.data.dragEvent
            }
        }
        t.SortableEvent = s, s.type = "sortable";
        class a extends s {
            get startIndex() {
                return this.data.startIndex
            }
            get startContainer() {
                return this.data.startContainer
            }
        }
        t.SortableStartEvent = a, a.type = "sortable:start", a.cancelable = !0;
        class l extends s {
            get currentIndex() {
                return this.data.currentIndex
            }
            get over() {
                return this.data.oldIndex
            }
            get overContainer() {
                return this.data.newIndex
            }
        }
        t.SortableSortEvent = l, l.type = "sortable:sort", l.cancelable = !0;
        class c extends s {
            get oldIndex() {
                return this.data.oldIndex
            }
            get newIndex() {
                return this.data.newIndex
            }
            get oldContainer() {
                return this.data.oldContainer
            }
            get newContainer() {
                return this.data.newContainer
            }
        }
        t.SortableSortedEvent = c, c.type = "sortable:sorted";
        class u extends s {
            get oldIndex() {
                return this.data.oldIndex
            }
            get newIndex() {
                return this.data.newIndex
            }
            get oldContainer() {
                return this.data.oldContainer
            }
            get newContainer() {
                return this.data.newContainer
            }
        }
        t.SortableStopEvent = u, u.type = "sortable:stop"
    }, function(e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var n = r(39);
        Object.keys(n).forEach((function(e) {
            "default" !== e && "__esModule" !== e && Object.defineProperty(t, e, {
                enumerable: !0,
                get: function() {
                    return n[e]
                }
            })
        }));
        var o, i = r(62),
            s = (o = i) && o.__esModule ? o : {
                default: o
            };
        t.default = s.default
    }, function(e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var n, o = Object.assign || function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var r = arguments[t];
                    for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
                }
                return e
            },
            i = r(24),
            s = (n = i) && n.__esModule ? n : {
                default: n
            },
            a = r(40);
        const l = Symbol("onDragStart"),
            c = Symbol("onDragOver"),
            u = Symbol("onDragStop");
        const d = {
            "swappabled:swapped": function({
                dragEvent: e,
                swappedElement: t
            }) {
                return `Swapped ${e.source.textContent.trim()||e.source.id||"swappable element"} with ${t.textContent.trim()||t.id||"swappable element"}`
            }
        };
        class h extends s.default {
            constructor(e = [], t = {}) {
                super(e, o({}, t, {
                    announcements: o({}, d, t.announcements || {})
                })), this.lastOver = null, this[l] = this[l].bind(this), this[c] = this[c].bind(this), this[u] = this[u].bind(this), this.on("drag:start", this[l]).on("drag:over", this[c]).on("drag:stop", this[u])
            }
            destroy() {
                super.destroy(), this.off("drag:start", this._onDragStart).off("drag:over", this._onDragOver).off("drag:stop", this._onDragStop)
            }[l](e) {
                const t = new a.SwappableStartEvent({
                    dragEvent: e
                });
                this.trigger(t), t.canceled() && e.cancel()
            }[c](e) {
                if (e.over === e.originalSource || e.over === e.source || e.canceled()) return;
                const t = new a.SwappableSwapEvent({
                    dragEvent: e,
                    over: e.over,
                    overContainer: e.overContainer
                });
                if (this.trigger(t), t.canceled()) return;
                this.lastOver && this.lastOver !== e.over && g(this.lastOver, e.source), this.lastOver === e.over ? this.lastOver = null : this.lastOver = e.over, g(e.source, e.over);
                const r = new a.SwappableSwappedEvent({
                    dragEvent: e,
                    swappedElement: e.over
                });
                this.trigger(r)
            }[u](e) {
                const t = new a.SwappableStopEvent({
                    dragEvent: e
                });
                this.trigger(t), this.lastOver = null
            }
        }

        function g(e, t) {
            const r = t.parentNode,
                n = e.parentNode;
            ! function(e) {
                const t = document.createElement("div");
                e(t), t.parentNode.removeChild(t)
            }((o => {
                n.insertBefore(o, e), r.insertBefore(e, t), n.insertBefore(t, o)
            }))
        }
        t.default = h
    }, function(e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.SwappableStopEvent = t.SwappableSwappedEvent = t.SwappableSwapEvent = t.SwappableStartEvent = t.SwappableEvent = void 0;
        var n, o = r(3),
            i = (n = o) && n.__esModule ? n : {
                default: n
            };
        class s extends i.default {
            get dragEvent() {
                return this.data.dragEvent
            }
        }
        t.SwappableEvent = s, s.type = "swappable";
        class a extends s {}
        t.SwappableStartEvent = a, a.type = "swappable:start", a.cancelable = !0;
        class l extends s {
            get over() {
                return this.data.over
            }
            get overContainer() {
                return this.data.overContainer
            }
        }
        t.SwappableSwapEvent = l, l.type = "swappable:swap", l.cancelable = !0;
        class c extends s {
            get swappedElement() {
                return this.data.swappedElement
            }
        }
        t.SwappableSwappedEvent = c, c.type = "swappable:swapped";
        class u extends s {}
        t.SwappableStopEvent = u, u.type = "swappable:stop"
    }, function(e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var n = r(40);
        Object.keys(n).forEach((function(e) {
            "default" !== e && "__esModule" !== e && Object.defineProperty(t, e, {
                enumerable: !0,
                get: function() {
                    return n[e]
                }
            })
        }));
        var o, i = r(65),
            s = (o = i) && o.__esModule ? o : {
                default: o
            };
        t.default = s.default
    }, function(e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var n, o = Object.assign || function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var r = arguments[t];
                    for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
                }
                return e
            },
            i = r(5),
            s = r(24),
            a = (n = s) && n.__esModule ? n : {
                default: n
            },
            l = r(41);
        const c = Symbol("onDragStart"),
            u = Symbol("onDragMove"),
            d = Symbol("onDragStop"),
            h = Symbol("dropInDropZone"),
            g = Symbol("returnToOriginalDropzone"),
            f = Symbol("closestDropzone"),
            p = Symbol("getDropzones");
        const v = {
                "droppable:dropped": function({
                    dragEvent: e,
                    dropzone: t
                }) {
                    return `Dropped ${e.source.textContent.trim()||e.source.id||"draggable element"} into ${t.textContent.trim()||t.id||"droppable element"}`
                },
                "droppable:returned": function({
                    dragEvent: e,
                    dropzone: t
                }) {
                    return `Returned ${e.source.textContent.trim()||e.source.id||"draggable element"} from ${t.textContent.trim()||t.id||"droppable element"}`
                }
            },
            m = {
                "droppable:active": "draggable-dropzone--active",
                "droppable:occupied": "draggable-dropzone--occupied"
            },
            b = {
                dropzone: ".draggable-droppable"
            };
        class y extends a.default {
            constructor(e = [], t = {}) {
                super(e, o({}, b, t, {
                    classes: o({}, m, t.classes || {}),
                    announcements: o({}, v, t.announcements || {})
                })), this.dropzones = null, this.lastDropzone = null, this.initialDropzone = null, this[c] = this[c].bind(this), this[u] = this[u].bind(this), this[d] = this[d].bind(this), this.on("drag:start", this[c]).on("drag:move", this[u]).on("drag:stop", this[d])
            }
            destroy() {
                super.destroy(), this.off("drag:start", this[c]).off("drag:move", this[u]).off("drag:stop", this[d])
            }[c](e) {
                if (e.canceled()) return;
                this.dropzones = [...this[p]()];
                const t = (0, i.closest)(e.sensorEvent.target, this.options.dropzone);
                if (!t) return void e.cancel();
                const r = new l.DroppableStartEvent({
                    dragEvent: e,
                    dropzone: t
                });
                if (this.trigger(r), r.canceled()) e.cancel();
                else {
                    this.initialDropzone = t;
                    for (const e of this.dropzones) e.classList.contains(this.getClassNameFor("droppable:occupied")) || e.classList.add(this.getClassNameFor("droppable:active"))
                }
            }[u](e) {
                if (e.canceled()) return;
                const t = this[f](e.sensorEvent.target);
                t && !t.classList.contains(this.getClassNameFor("droppable:occupied")) && this[h](e, t) ? this.lastDropzone = t : t && t !== this.initialDropzone || !this.lastDropzone || (this[g](e), this.lastDropzone = null)
            }[d](e) {
                const t = new l.DroppableStopEvent({
                    dragEvent: e,
                    dropzone: this.lastDropzone || this.initialDropzone
                });
                this.trigger(t);
                const r = this.getClassNameFor("droppable:occupied");
                for (const e of this.dropzones) e.classList.remove(this.getClassNameFor("droppable:active"));
                this.lastDropzone && this.lastDropzone !== this.initialDropzone && this.initialDropzone.classList.remove(r), this.dropzones = null, this.lastDropzone = null, this.initialDropzone = null
            }[h](e, t) {
                const r = new l.DroppableDroppedEvent({
                    dragEvent: e,
                    dropzone: t
                });
                if (this.trigger(r), r.canceled()) return !1;
                const n = this.getClassNameFor("droppable:occupied");
                return this.lastDropzone && this.lastDropzone.classList.remove(n), t.appendChild(e.source), t.classList.add(n), !0
            }[g](e) {
                const t = new l.DroppableReturnedEvent({
                    dragEvent: e,
                    dropzone: this.lastDropzone
                });
                this.trigger(t), t.canceled() || (this.initialDropzone.appendChild(e.source), this.lastDropzone.classList.remove(this.getClassNameFor("droppable:occupied")))
            }[f](e) {
                return this.dropzones ? (0, i.closest)(e, this.dropzones) : null
            }[p]() {
                const e = this.options.dropzone;
                return "string" == typeof e ? document.querySelectorAll(e) : e instanceof NodeList || e instanceof Array ? e : "function" == typeof e ? e() : []
            }
        }
        t.default = y
    }, function(e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.DroppableStopEvent = t.DroppableReturnedEvent = t.DroppableDroppedEvent = t.DroppableStartEvent = t.DroppableEvent = void 0;
        var n, o = r(3),
            i = (n = o) && n.__esModule ? n : {
                default: n
            };
        class s extends i.default {
            get dragEvent() {
                return this.data.dragEvent
            }
        }
        t.DroppableEvent = s, s.type = "droppable";
        class a extends s {
            get dropzone() {
                return this.data.dropzone
            }
        }
        t.DroppableStartEvent = a, a.type = "droppable:start", a.cancelable = !0;
        class l extends s {
            get dropzone() {
                return this.data.dropzone
            }
        }
        t.DroppableDroppedEvent = l, l.type = "droppable:dropped", l.cancelable = !0;
        class c extends s {
            get dropzone() {
                return this.data.dropzone
            }
        }
        t.DroppableReturnedEvent = c, c.type = "droppable:returned", c.cancelable = !0;
        class u extends s {
            get dropzone() {
                return this.data.dropzone
            }
        }
        t.DroppableStopEvent = u, u.type = "droppable:stop", u.cancelable = !0
    }, function(e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var n = r(41);
        Object.keys(n).forEach((function(e) {
            "default" !== e && "__esModule" !== e && Object.defineProperty(t, e, {
                enumerable: !0,
                get: function() {
                    return n[e]
                }
            })
        }));
        var o, i = r(68),
            s = (o = i) && o.__esModule ? o : {
                default: o
            };
        t.default = s.default
    }, function(e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        t.default = class {
            constructor() {
                this.callbacks = {}
            }
            on(e, ...t) {
                return this.callbacks[e] || (this.callbacks[e] = []), this.callbacks[e].push(...t), this
            }
            off(e, t) {
                if (!this.callbacks[e]) return null;
                const r = this.callbacks[e].slice(0);
                for (let n = 0; n < r.length; n++) t === r[n] && this.callbacks[e].splice(n, 1);
                return this
            }
            trigger(e) {
                if (!this.callbacks[e.type]) return null;
                const t = [...this.callbacks[e.type]],
                    r = [];
                for (let n = t.length - 1; n >= 0; n--) {
                    const o = t[n];
                    try {
                        o(e)
                    } catch (e) {
                        r.push(e)
                    }
                }
                return r.length && console.error(`Draggable caught errors while triggering '${e.type}'`, r), this
            }
        }
    }, function(e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var n, o = r(71),
            i = (n = o) && n.__esModule ? n : {
                default: n
            };
        t.default = i.default
    }, function(e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.defaultOptions = void 0;
        var n, o = Object.assign || function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var r = arguments[t];
                    for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
                }
                return e
            },
            i = r(5),
            s = r(42),
            a = r(72),
            l = (n = a) && n.__esModule ? n : {
                default: n
            },
            c = r(29),
            u = r(43),
            d = r(44);
        const h = Symbol("onDragStart"),
            g = Symbol("onDragMove"),
            f = Symbol("onDragStop"),
            p = Symbol("onDragPressure"),
            v = {
                "drag:start": e => `Picked up ${e.source.textContent.trim()||e.source.id||"draggable element"}`,
                "drag:stop": e => `Released ${e.source.textContent.trim()||e.source.id||"draggable element"}`
            },
            m = {
                "container:dragging": "draggable-container--is-dragging",
                "source:dragging": "draggable-source--is-dragging",
                "source:placed": "draggable-source--placed",
                "container:placed": "draggable-container--placed",
                "body:dragging": "draggable--is-dragging",
                "draggable:over": "draggable--over",
                "container:over": "draggable-container--over",
                "source:original": "draggable--original",
                mirror: "draggable-mirror"
            },
            b = t.defaultOptions = {
                draggable: ".draggable-source",
                handle: null,
                delay: 100,
                placedTimeout: 800,
                plugins: [],
                sensors: []
            };
        class y {
            constructor(e = [document.body], t = {}) {
                if (e instanceof NodeList || e instanceof Array) this.containers = [...e];
                else {
                    if (!(e instanceof HTMLElement)) throw new Error("Draggable containers are expected to be of type `NodeList`, `HTMLElement[]` or `HTMLElement`");
                    this.containers = [e]
                }
                this.options = o({}, b, t, {
                    classes: o({}, m, t.classes || {}),
                    announcements: o({}, v, t.announcements || {})
                }), this.emitter = new l.default, this.dragging = !1, this.plugins = [], this.sensors = [], this[h] = this[h].bind(this), this[g] = this[g].bind(this), this[f] = this[f].bind(this), this[p] = this[p].bind(this), document.addEventListener("drag:start", this[h], !0), document.addEventListener("drag:move", this[g], !0), document.addEventListener("drag:stop", this[f], !0), document.addEventListener("drag:pressure", this[p], !0);
                const r = Object.values(y.Plugins).map((e => e)),
                    n = [c.MouseSensor, c.TouchSensor];
                this.addPlugin(...r, ...this.options.plugins), this.addSensor(...n, ...this.options.sensors);
                const i = new u.DraggableInitializedEvent({
                    draggable: this
                });
                this.on("mirror:created", (({
                    mirror: e
                }) => this.mirror = e)), this.on("mirror:destroy", (() => this.mirror = null)), this.trigger(i)
            }
            destroy() {
                document.removeEventListener("drag:start", this[h], !0), document.removeEventListener("drag:move", this[g], !0), document.removeEventListener("drag:stop", this[f], !0), document.removeEventListener("drag:pressure", this[p], !0);
                const e = new u.DraggableDestroyEvent({
                    draggable: this
                });
                this.trigger(e), this.removePlugin(...this.plugins.map((e => e.constructor))), this.removeSensor(...this.sensors.map((e => e.constructor)))
            }
            addPlugin(...e) {
                const t = e.map((e => new e(this)));
                return t.forEach((e => e.attach())), this.plugins = [...this.plugins, ...t], this
            }
            removePlugin(...e) {
                return this.plugins.filter((t => e.includes(t.constructor))).forEach((e => e.detach())), this.plugins = this.plugins.filter((t => !e.includes(t.constructor))), this
            }
            addSensor(...e) {
                const t = e.map((e => new e(this.containers, this.options)));
                return t.forEach((e => e.attach())), this.sensors = [...this.sensors, ...t], this
            }
            removeSensor(...e) {
                return this.sensors.filter((t => e.includes(t.constructor))).forEach((e => e.detach())), this.sensors = this.sensors.filter((t => !e.includes(t.constructor))), this
            }
            addContainer(...e) {
                return this.containers = [...this.containers, ...e], this.sensors.forEach((t => t.addContainer(...e))), this
            }
            removeContainer(...e) {
                return this.containers = this.containers.filter((t => !e.includes(t))), this.sensors.forEach((t => t.removeContainer(...e))), this
            }
            on(e, ...t) {
                return this.emitter.on(e, ...t), this
            }
            off(e, t) {
                return this.emitter.off(e, t), this
            }
            trigger(e) {
                return this.emitter.trigger(e), this
            }
            getClassNameFor(e) {
                return this.options.classes[e]
            }
            isDragging() {
                return Boolean(this.dragging)
            }
            getDraggableElements() {
                return this.containers.reduce(((e, t) => [...e, ...this.getDraggableElementsForContainer(t)]), [])
            }
            getDraggableElementsForContainer(e) {
                return [...e.querySelectorAll(this.options.draggable)].filter((e => e !== this.originalSource && e !== this.mirror))
            }[h](e) {
                const t = E(e),
                    {
                        target: r,
                        container: n
                    } = t;
                if (!this.containers.includes(n)) return;
                if (this.options.handle && r && !(0, i.closest)(r, this.options.handle)) return void t.cancel();
                if (this.originalSource = (0, i.closest)(r, this.options.draggable), this.sourceContainer = n, !this.originalSource) return void t.cancel();
                this.lastPlacedSource && this.lastPlacedContainer && (clearTimeout(this.placedTimeoutID), this.lastPlacedSource.classList.remove(this.getClassNameFor("source:placed")), this.lastPlacedContainer.classList.remove(this.getClassNameFor("container:placed"))), this.source = this.originalSource.cloneNode(!0), this.originalSource.parentNode.insertBefore(this.source, this.originalSource), this.originalSource.style.display = "none";
                const s = new d.DragStartEvent({
                    source: this.source,
                    originalSource: this.originalSource,
                    sourceContainer: n,
                    sensorEvent: t
                });
                if (this.trigger(s), this.dragging = !s.canceled(), s.canceled()) return this.source.parentNode.removeChild(this.source), void(this.originalSource.style.display = null);
                this.originalSource.classList.add(this.getClassNameFor("source:original")), this.source.classList.add(this.getClassNameFor("source:dragging")), this.sourceContainer.classList.add(this.getClassNameFor("container:dragging")), document.body.classList.add(this.getClassNameFor("body:dragging")), O(document.body, "none"), requestAnimationFrame((() => {
                    const t = E(e).clone({
                        target: this.source
                    });
                    this[g](o({}, e, {
                        detail: t
                    }))
                }))
            }[g](e) {
                if (!this.dragging) return;
                const t = E(e),
                    {
                        container: r
                    } = t;
                let n = t.target;
                const o = new d.DragMoveEvent({
                    source: this.source,
                    originalSource: this.originalSource,
                    sourceContainer: r,
                    sensorEvent: t
                });
                this.trigger(o), o.canceled() && t.cancel(), n = (0, i.closest)(n, this.options.draggable);
                const s = (0, i.closest)(t.target, this.containers),
                    a = t.overContainer || s,
                    l = this.currentOverContainer && a !== this.currentOverContainer,
                    c = this.currentOver && n !== this.currentOver,
                    u = a && this.currentOverContainer !== a,
                    h = s && n && this.currentOver !== n;
                if (c) {
                    const e = new d.DragOutEvent({
                        source: this.source,
                        originalSource: this.originalSource,
                        sourceContainer: r,
                        sensorEvent: t,
                        over: this.currentOver
                    });
                    this.currentOver.classList.remove(this.getClassNameFor("draggable:over")), this.currentOver = null, this.trigger(e)
                }
                if (l) {
                    const e = new d.DragOutContainerEvent({
                        source: this.source,
                        originalSource: this.originalSource,
                        sourceContainer: r,
                        sensorEvent: t,
                        overContainer: this.currentOverContainer
                    });
                    this.currentOverContainer.classList.remove(this.getClassNameFor("container:over")), this.currentOverContainer = null, this.trigger(e)
                }
                if (u) {
                    a.classList.add(this.getClassNameFor("container:over"));
                    const e = new d.DragOverContainerEvent({
                        source: this.source,
                        originalSource: this.originalSource,
                        sourceContainer: r,
                        sensorEvent: t,
                        overContainer: a
                    });
                    this.currentOverContainer = a, this.trigger(e)
                }
                if (h) {
                    n.classList.add(this.getClassNameFor("draggable:over"));
                    const e = new d.DragOverEvent({
                        source: this.source,
                        originalSource: this.originalSource,
                        sourceContainer: r,
                        sensorEvent: t,
                        overContainer: a,
                        over: n
                    });
                    this.currentOver = n, this.trigger(e)
                }
            }[f](e) {
                if (!this.dragging) return;
                this.dragging = !1;
                const t = new d.DragStopEvent({
                    source: this.source,
                    originalSource: this.originalSource,
                    sensorEvent: e.sensorEvent,
                    sourceContainer: this.sourceContainer
                });
                this.trigger(t), this.source.parentNode.insertBefore(this.originalSource, this.source), this.source.parentNode.removeChild(this.source), this.originalSource.style.display = "", this.source.classList.remove(this.getClassNameFor("source:dragging")), this.originalSource.classList.remove(this.getClassNameFor("source:original")), this.originalSource.classList.add(this.getClassNameFor("source:placed")), this.sourceContainer.classList.add(this.getClassNameFor("container:placed")), this.sourceContainer.classList.remove(this.getClassNameFor("container:dragging")), document.body.classList.remove(this.getClassNameFor("body:dragging")), O(document.body, ""), this.currentOver && this.currentOver.classList.remove(this.getClassNameFor("draggable:over")), this.currentOverContainer && this.currentOverContainer.classList.remove(this.getClassNameFor("container:over")), this.lastPlacedSource = this.originalSource, this.lastPlacedContainer = this.sourceContainer, this.placedTimeoutID = setTimeout((() => {
                    this.lastPlacedSource && this.lastPlacedSource.classList.remove(this.getClassNameFor("source:placed")), this.lastPlacedContainer && this.lastPlacedContainer.classList.remove(this.getClassNameFor("container:placed")), this.lastPlacedSource = null, this.lastPlacedContainer = null
                }), this.options.placedTimeout), this.source = null, this.originalSource = null, this.currentOverContainer = null, this.currentOver = null, this.sourceContainer = null
            }[p](e) {
                if (!this.dragging) return;
                const t = E(e),
                    r = this.source || (0, i.closest)(t.originalEvent.target, this.options.draggable),
                    n = new d.DragPressureEvent({
                        sensorEvent: t,
                        source: r,
                        pressure: t.pressure
                    });
                this.trigger(n)
            }
        }

        function E(e) {
            return e.detail
        }

        function O(e, t) {
            e.style.webkitUserSelect = t, e.style.mozUserSelect = t, e.style.msUserSelect = t, e.style.oUserSelect = t, e.style.userSelect = t
        }
        t.default = y, y.Plugins = {
            Announcement: s.Announcement,
            Focusable: s.Focusable,
            Mirror: s.Mirror,
            Scrollable: s.Scrollable
        }
    }, function(e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.defaultOptions = t.scroll = t.onDragStop = t.onDragMove = t.onDragStart = void 0;
        var n, o = Object.assign || function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var r = arguments[t];
                    for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
                }
                return e
            },
            i = r(4),
            s = (n = i) && n.__esModule ? n : {
                default: n
            },
            a = r(5);
        const l = t.onDragStart = Symbol("onDragStart"),
            c = t.onDragMove = Symbol("onDragMove"),
            u = t.onDragStop = Symbol("onDragStop"),
            d = t.scroll = Symbol("scroll"),
            h = t.defaultOptions = {
                speed: 6,
                sensitivity: 50,
                scrollableElements: []
            };
        class g extends s.default {
            constructor(e) {
                super(e), this.options = o({}, h, this.getOptions()), this.currentMousePosition = null, this.scrollAnimationFrame = null, this.scrollableElement = null, this.findScrollableElementFrame = null, this[l] = this[l].bind(this), this[c] = this[c].bind(this), this[u] = this[u].bind(this), this[d] = this[d].bind(this)
            }
            attach() {
                this.draggable.on("drag:start", this[l]).on("drag:move", this[c]).on("drag:stop", this[u])
            }
            detach() {
                this.draggable.off("drag:start", this[l]).off("drag:move", this[c]).off("drag:stop", this[u])
            }
            getOptions() {
                return this.draggable.options.scrollable || {}
            }
            getScrollableElement(e) {
                return this.hasDefinedScrollableElements() ? (0, a.closest)(e, this.options.scrollableElements) || document.documentElement : function(e) {
                    if (!e) return f();
                    const t = getComputedStyle(e).getPropertyValue("position"),
                        r = "absolute" === t,
                        n = (0, a.closest)(e, (e => (!r || ! function(e) {
                            return "static" === getComputedStyle(e).getPropertyValue("position")
                        }(e)) && function(e) {
                            const t = /(auto|scroll)/,
                                r = getComputedStyle(e, null),
                                n = r.getPropertyValue("overflow") + r.getPropertyValue("overflow-y") + r.getPropertyValue("overflow-x");
                            return t.test(n)
                        }(e)));
                    return "fixed" !== t && n ? n : f()
                }(e)
            }
            hasDefinedScrollableElements() {
                return Boolean(0 !== this.options.scrollableElements.length)
            }[l](e) {
                this.findScrollableElementFrame = requestAnimationFrame((() => {
                    this.scrollableElement = this.getScrollableElement(e.source)
                }))
            }[c](e) {
                if (this.findScrollableElementFrame = requestAnimationFrame((() => {
                        this.scrollableElement = this.getScrollableElement(e.sensorEvent.target)
                    })), !this.scrollableElement) return;
                const t = e.sensorEvent,
                    r = {
                        x: 0,
                        y: 0
                    };
                "ontouchstart" in window && (r.y = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0, r.x = window.pageXOffset || document.documentElement.scrollLeft || document.body.scrollLeft || 0), this.currentMousePosition = {
                    clientX: t.clientX - r.x,
                    clientY: t.clientY - r.y
                }, this.scrollAnimationFrame = requestAnimationFrame(this[d])
            }[u]() {
                cancelAnimationFrame(this.scrollAnimationFrame), cancelAnimationFrame(this.findScrollableElementFrame), this.scrollableElement = null, this.scrollAnimationFrame = null, this.findScrollableElementFrame = null, this.currentMousePosition = null
            }[d]() {
                if (!this.scrollableElement || !this.currentMousePosition) return;
                cancelAnimationFrame(this.scrollAnimationFrame);
                const {
                    speed: e,
                    sensitivity: t
                } = this.options, r = this.scrollableElement.getBoundingClientRect(), n = r.bottom > window.innerHeight, o = r.top < 0 || n, i = f(), s = this.scrollableElement, a = this.currentMousePosition.clientX, l = this.currentMousePosition.clientY;
                if (s === document.body || s === document.documentElement || o) {
                    const {
                        innerHeight: r,
                        innerWidth: n
                    } = window;
                    l < t ? i.scrollTop -= e : r - l < t && (i.scrollTop += e), a < t ? i.scrollLeft -= e : n - a < t && (i.scrollLeft += e)
                } else {
                    const {
                        offsetHeight: n,
                        offsetWidth: o
                    } = s;
                    r.top + n - l < t ? s.scrollTop += e : l - r.top < t && (s.scrollTop -= e), r.left + o - a < t ? s.scrollLeft += e : a - r.left < t && (s.scrollLeft -= e)
                }
                this.scrollAnimationFrame = requestAnimationFrame(this[d])
            }
        }

        function f() {
            return document.scrollingElement || document.documentElement
        }
        t.default = g
    }, function(e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.defaultOptions = void 0;
        var n, o = r(74),
            i = (n = o) && n.__esModule ? n : {
                default: n
            };
        t.default = i.default, t.defaultOptions = o.defaultOptions
    }, function(e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.MirrorDestroyEvent = t.MirrorMoveEvent = t.MirrorAttachedEvent = t.MirrorCreatedEvent = t.MirrorCreateEvent = t.MirrorEvent = void 0;
        var n, o = r(3),
            i = (n = o) && n.__esModule ? n : {
                default: n
            };
        class s extends i.default {
            get source() {
                return this.data.source
            }
            get originalSource() {
                return this.data.originalSource
            }
            get sourceContainer() {
                return this.data.sourceContainer
            }
            get sensorEvent() {
                return this.data.sensorEvent
            }
            get dragEvent() {
                return this.data.dragEvent
            }
            get originalEvent() {
                return this.sensorEvent ? this.sensorEvent.originalEvent : null
            }
        }
        t.MirrorEvent = s;
        class a extends s {}
        t.MirrorCreateEvent = a, a.type = "mirror:create";
        class l extends s {
            get mirror() {
                return this.data.mirror
            }
        }
        t.MirrorCreatedEvent = l, l.type = "mirror:created";
        class c extends s {
            get mirror() {
                return this.data.mirror
            }
        }
        t.MirrorAttachedEvent = c, c.type = "mirror:attached";
        class u extends s {
            get mirror() {
                return this.data.mirror
            }
        }
        t.MirrorMoveEvent = u, u.type = "mirror:move", u.cancelable = !0;
        class d extends s {
            get mirror() {
                return this.data.mirror
            }
        }
        t.MirrorDestroyEvent = d, d.type = "mirror:destroy", d.cancelable = !0
    }, function(e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var n = r(76);
        Object.keys(n).forEach((function(e) {
            "default" !== e && "__esModule" !== e && Object.defineProperty(t, e, {
                enumerable: !0,
                get: function() {
                    return n[e]
                }
            })
        }))
    }, function(e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.defaultOptions = t.getAppendableContainer = t.onScroll = t.onMirrorMove = t.onMirrorCreated = t.onDragStop = t.onDragMove = t.onDragStart = void 0;
        var n, o = Object.assign || function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var r = arguments[t];
                    for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
                }
                return e
            },
            i = r(4),
            s = (n = i) && n.__esModule ? n : {
                default: n
            },
            a = r(77);

        function l(e, t) {
            var r = {};
            for (var n in e) t.indexOf(n) >= 0 || Object.prototype.hasOwnProperty.call(e, n) && (r[n] = e[n]);
            return r
        }
        const c = t.onDragStart = Symbol("onDragStart"),
            u = t.onDragMove = Symbol("onDragMove"),
            d = t.onDragStop = Symbol("onDragStop"),
            h = t.onMirrorCreated = Symbol("onMirrorCreated"),
            g = t.onMirrorMove = Symbol("onMirrorMove"),
            f = t.onScroll = Symbol("onScroll"),
            p = t.getAppendableContainer = Symbol("getAppendableContainer"),
            v = t.defaultOptions = {
                constrainDimensions: !1,
                xAxis: !0,
                yAxis: !0,
                cursorOffsetX: null,
                cursorOffsetY: null
            };
        class m extends s.default {
            constructor(e) {
                super(e), this.options = o({}, v, this.getOptions()), this.scrollOffset = {
                    x: 0,
                    y: 0
                }, this.initialScrollOffset = {
                    x: window.scrollX,
                    y: window.scrollY
                }, this[c] = this[c].bind(this), this[u] = this[u].bind(this), this[d] = this[d].bind(this), this[h] = this[h].bind(this), this[g] = this[g].bind(this), this[f] = this[f].bind(this)
            }
            attach() {
                this.draggable.on("drag:start", this[c]).on("drag:move", this[u]).on("drag:stop", this[d]).on("mirror:created", this[h]).on("mirror:move", this[g])
            }
            detach() {
                this.draggable.off("drag:start", this[c]).off("drag:move", this[u]).off("drag:stop", this[d]).off("mirror:created", this[h]).off("mirror:move", this[g])
            }
            getOptions() {
                return this.draggable.options.mirror || {}
            }[c](e) {
                if (e.canceled()) return;
                "ontouchstart" in window && document.addEventListener("scroll", this[f], !0), this.initialScrollOffset = {
                    x: window.scrollX,
                    y: window.scrollY
                };
                const {
                    source: t,
                    originalSource: r,
                    sourceContainer: n,
                    sensorEvent: o
                } = e, i = new a.MirrorCreateEvent({
                    source: t,
                    originalSource: r,
                    sourceContainer: n,
                    sensorEvent: o,
                    dragEvent: e
                });
                if (this.draggable.trigger(i), function(e) {
                        return /^drag/.test(e.originalEvent.type)
                    }(o) || i.canceled()) return;
                const s = this[p](t) || n;
                this.mirror = t.cloneNode(!0);
                const l = new a.MirrorCreatedEvent({
                        source: t,
                        originalSource: r,
                        sourceContainer: n,
                        sensorEvent: o,
                        dragEvent: e,
                        mirror: this.mirror
                    }),
                    c = new a.MirrorAttachedEvent({
                        source: t,
                        originalSource: r,
                        sourceContainer: n,
                        sensorEvent: o,
                        dragEvent: e,
                        mirror: this.mirror
                    });
                this.draggable.trigger(l), s.appendChild(this.mirror), this.draggable.trigger(c)
            }[u](e) {
                if (!this.mirror || e.canceled()) return;
                const {
                    source: t,
                    originalSource: r,
                    sourceContainer: n,
                    sensorEvent: o
                } = e, i = new a.MirrorMoveEvent({
                    source: t,
                    originalSource: r,
                    sourceContainer: n,
                    sensorEvent: o,
                    dragEvent: e,
                    mirror: this.mirror
                });
                this.draggable.trigger(i)
            }[d](e) {
                if ("ontouchstart" in window && document.removeEventListener("scroll", this[f], !0), this.initialScrollOffset = {
                        x: 0,
                        y: 0
                    }, this.scrollOffset = {
                        x: 0,
                        y: 0
                    }, !this.mirror) return;
                const {
                    source: t,
                    sourceContainer: r,
                    sensorEvent: n
                } = e, o = new a.MirrorDestroyEvent({
                    source: t,
                    mirror: this.mirror,
                    sourceContainer: r,
                    sensorEvent: n,
                    dragEvent: e
                });
                this.draggable.trigger(o), o.canceled() || this.mirror.parentNode.removeChild(this.mirror)
            }[f]() {
                this.scrollOffset = {
                    x: window.scrollX - this.initialScrollOffset.x,
                    y: window.scrollY - this.initialScrollOffset.y
                }
            }[h]({
                mirror: e,
                source: t,
                sensorEvent: r
            }) {
                const n = {
                    mirror: e,
                    source: t,
                    sensorEvent: r,
                    mirrorClass: this.draggable.getClassNameFor("mirror"),
                    scrollOffset: this.scrollOffset,
                    options: this.options
                };
                return Promise.resolve(n).then(b).then(y).then(E).then(O).then(_({
                    initial: !0
                })).then(S).then((e => {
                    let {
                        mirrorOffset: t,
                        initialX: r,
                        initialY: n
                    } = e, i = l(e, ["mirrorOffset", "initialX", "initialY"]);
                    return this.mirrorOffset = t, this.initialX = r, this.initialY = n, o({
                        mirrorOffset: t,
                        initialX: r,
                        initialY: n
                    }, i)
                }))
            }[g](e) {
                if (e.canceled()) return null;
                const t = {
                    mirror: e.mirror,
                    sensorEvent: e.sensorEvent,
                    mirrorOffset: this.mirrorOffset,
                    options: this.options,
                    initialX: this.initialX,
                    initialY: this.initialY,
                    scrollOffset: this.scrollOffset
                };
                return Promise.resolve(t).then(_({
                    raf: !0
                }))
            }[p](e) {
                const t = this.options.appendTo;
                return "string" == typeof t ? document.querySelector(t) : t instanceof HTMLElement ? t : "function" == typeof t ? t(e) : e.parentNode
            }
        }

        function b(e) {
            let {
                source: t
            } = e, r = l(e, ["source"]);
            return M((e => {
                const n = t.getBoundingClientRect();
                e(o({
                    source: t,
                    sourceRect: n
                }, r))
            }))
        }

        function y(e) {
            let {
                sensorEvent: t,
                sourceRect: r,
                options: n
            } = e, i = l(e, ["sensorEvent", "sourceRect", "options"]);
            return M((e => {
                const s = null === n.cursorOffsetY ? t.clientY - r.top : n.cursorOffsetY,
                    a = null === n.cursorOffsetX ? t.clientX - r.left : n.cursorOffsetX;
                e(o({
                    sensorEvent: t,
                    sourceRect: r,
                    mirrorOffset: {
                        top: s,
                        left: a
                    },
                    options: n
                }, i))
            }))
        }

        function E(e) {
            let {
                mirror: t,
                source: r,
                options: n
            } = e, i = l(e, ["mirror", "source", "options"]);
            return M((e => {
                let s, a;
                if (n.constrainDimensions) {
                    const e = getComputedStyle(r);
                    s = e.getPropertyValue("height"), a = e.getPropertyValue("width")
                }
                t.style.position = "fixed", t.style.pointerEvents = "none", t.style.top = 0, t.style.left = 0, t.style.margin = 0, n.constrainDimensions && (t.style.height = s, t.style.width = a), e(o({
                    mirror: t,
                    source: r,
                    options: n
                }, i))
            }))
        }

        function O(e) {
            let {
                mirror: t,
                mirrorClass: r
            } = e, n = l(e, ["mirror", "mirrorClass"]);
            return M((e => {
                t.classList.add(r), e(o({
                    mirror: t,
                    mirrorClass: r
                }, n))
            }))
        }

        function S(e) {
            let {
                mirror: t
            } = e, r = l(e, ["mirror"]);
            return M((e => {
                t.removeAttribute("id"), delete t.id, e(o({
                    mirror: t
                }, r))
            }))
        }

        function _({
            withFrame: e = !1,
            initial: t = !1
        } = {}) {
            return r => {
                let {
                    mirror: n,
                    sensorEvent: i,
                    mirrorOffset: s,
                    initialY: a,
                    initialX: c,
                    scrollOffset: u,
                    options: d
                } = r, h = l(r, ["mirror", "sensorEvent", "mirrorOffset", "initialY", "initialX", "scrollOffset", "options"]);
                return M((e => {
                    const r = o({
                        mirror: n,
                        sensorEvent: i,
                        mirrorOffset: s,
                        options: d
                    }, h);
                    if (s) {
                        const e = i.clientX - s.left - u.x,
                            o = i.clientY - s.top - u.y;
                        d.xAxis && d.yAxis || t ? n.style.transform = `translate3d(${e}px, ${o}px, 0)` : d.xAxis && !d.yAxis ? n.style.transform = `translate3d(${e}px, ${a}px, 0)` : d.yAxis && !d.xAxis && (n.style.transform = `translate3d(${c}px, ${o}px, 0)`), t && (r.initialX = e, r.initialY = o)
                    }
                    e(r)
                }), {
                    frame: e
                })
            }
        }

        function M(e, {
            raf: t = !1
        } = {}) {
            return new Promise(((r, n) => {
                t ? requestAnimationFrame((() => {
                    e(r, n)
                })) : e(r, n)
            }))
        }
        t.default = m
    }, function(e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.defaultOptions = void 0;
        var n, o = r(78),
            i = (n = o) && n.__esModule ? n : {
                default: n
            };
        t.default = i.default, t.defaultOptions = o.defaultOptions
    }, function(e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var n, o = Object.assign || function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var r = arguments[t];
                    for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
                }
                return e
            },
            i = r(4),
            s = (n = i) && n.__esModule ? n : {
                default: n
            };
        const a = Symbol("onInitialize"),
            l = Symbol("onDestroy"),
            c = {};
        class u extends s.default {
            constructor(e) {
                super(e), this.options = o({}, c, this.getOptions()), this[a] = this[a].bind(this), this[l] = this[l].bind(this)
            }
            attach() {
                this.draggable.on("draggable:initialize", this[a]).on("draggable:destroy", this[l])
            }
            detach() {
                this.draggable.off("draggable:initialize", this[a]).off("draggable:destroy", this[l])
            }
            getOptions() {
                return this.draggable.options.focusable || {}
            }
            getElements() {
                return [...this.draggable.containers, ...this.draggable.getDraggableElements()]
            }[a]() {
                requestAnimationFrame((() => {
                    this.getElements().forEach((e => function(e) {
                        Boolean(!e.getAttribute("tabindex") && -1 === e.tabIndex) && (d.push(e), e.tabIndex = 0)
                    }(e)))
                }))
            }[l]() {
                requestAnimationFrame((() => {
                    this.getElements().forEach((e => function(e) {
                        const t = d.indexOf(e); - 1 !== t && (e.tabIndex = -1, d.splice(t, 1))
                    }(e)))
                }))
            }
        }
        t.default = u;
        const d = []
    }, function(e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var n, o = r(80),
            i = (n = o) && n.__esModule ? n : {
                default: n
            };
        t.default = i.default
    }, function(e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.defaultOptions = void 0;
        var n, o = Object.assign || function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var r = arguments[t];
                    for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
                }
                return e
            },
            i = r(4),
            s = (n = i) && n.__esModule ? n : {
                default: n
            };
        const a = Symbol("onInitialize"),
            l = Symbol("onDestroy"),
            c = Symbol("announceEvent"),
            u = Symbol("announceMessage"),
            d = t.defaultOptions = {
                expire: 7e3
            };
        class h extends s.default {
            constructor(e) {
                super(e), this.options = o({}, d, this.getOptions()), this.originalTriggerMethod = this.draggable.trigger, this[a] = this[a].bind(this), this[l] = this[l].bind(this)
            }
            attach() {
                this.draggable.on("draggable:initialize", this[a])
            }
            detach() {
                this.draggable.off("draggable:destroy", this[l])
            }
            getOptions() {
                return this.draggable.options.announcements || {}
            }[c](e) {
                const t = this.options[e.type];
                t && "string" == typeof t && this[u](t), t && "function" == typeof t && this[u](t(e))
            }[u](e) {
                ! function(e, {
                    expire: t
                }) {
                    const r = document.createElement("div");
                    r.textContent = e, g.appendChild(r), setTimeout((() => {
                        g.removeChild(r)
                    }), t)
                }(e, {
                    expire: this.options.expire
                })
            }[a]() {
                this.draggable.trigger = e => {
                    try {
                        this[c](e)
                    } finally {
                        this.originalTriggerMethod.call(this.draggable, e)
                    }
                }
            }[l]() {
                this.draggable.trigger = this.originalTriggerMethod
            }
        }
        t.default = h;
        const g = function() {
            const e = document.createElement("div");
            return e.setAttribute("id", "draggable-live-region"), e.setAttribute("aria-relevant", "additions"), e.setAttribute("aria-atomic", "true"), e.setAttribute("aria-live", "assertive"), e.setAttribute("role", "log"), e.style.position = "fixed", e.style.width = "1px", e.style.height = "1px", e.style.top = "-1px", e.style.overflow = "hidden", e
        }();
        document.addEventListener("DOMContentLoaded", (() => {
            document.body.appendChild(g)
        }))
    }, function(e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.defaultOptions = void 0;
        var n, o = r(82),
            i = (n = o) && n.__esModule ? n : {
                default: n
            };
        t.default = i.default, t.defaultOptions = o.defaultOptions
    }, function(e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.DraggableDestroyEvent = t.DraggableInitializedEvent = t.DraggableEvent = void 0;
        var n, o = r(3),
            i = (n = o) && n.__esModule ? n : {
                default: n
            };
        class s extends i.default {
            get draggable() {
                return this.data.draggable
            }
        }
        t.DraggableEvent = s, s.type = "draggable";
        class a extends s {}
        t.DraggableInitializedEvent = a, a.type = "draggable:initialize";
        class l extends s {}
        t.DraggableDestroyEvent = l, l.type = "draggable:destroy"
    }, function(e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.DragStopEvent = t.DragPressureEvent = t.DragOutContainerEvent = t.DragOverContainerEvent = t.DragOutEvent = t.DragOverEvent = t.DragMoveEvent = t.DragStartEvent = t.DragEvent = void 0;
        var n, o = r(3),
            i = (n = o) && n.__esModule ? n : {
                default: n
            };
        class s extends i.default {
            get source() {
                return this.data.source
            }
            get originalSource() {
                return this.data.originalSource
            }
            get mirror() {
                return this.data.mirror
            }
            get sourceContainer() {
                return this.data.sourceContainer
            }
            get sensorEvent() {
                return this.data.sensorEvent
            }
            get originalEvent() {
                return this.sensorEvent ? this.sensorEvent.originalEvent : null
            }
        }
        t.DragEvent = s, s.type = "drag";
        class a extends s {}
        t.DragStartEvent = a, a.type = "drag:start", a.cancelable = !0;
        class l extends s {}
        t.DragMoveEvent = l, l.type = "drag:move";
        class c extends s {
            get overContainer() {
                return this.data.overContainer
            }
            get over() {
                return this.data.over
            }
        }
        t.DragOverEvent = c, c.type = "drag:over", c.cancelable = !0;
        class u extends s {
            get overContainer() {
                return this.data.overContainer
            }
            get over() {
                return this.data.over
            }
        }
        t.DragOutEvent = u, u.type = "drag:out";
        class d extends s {
            get overContainer() {
                return this.data.overContainer
            }
        }
        t.DragOverContainerEvent = d, d.type = "drag:over:container";
        class h extends s {
            get overContainer() {
                return this.data.overContainer
            }
        }
        t.DragOutContainerEvent = h, h.type = "drag:out:container";
        class g extends s {
            get pressure() {
                return this.data.pressure
            }
        }
        t.DragPressureEvent = g, g.type = "drag:pressure";
        class f extends s {}
        t.DragStopEvent = f, f.type = "drag:stop"
    }, function(e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.defaultOptions = void 0;
        var n, o = Object.assign || function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var r = arguments[t];
                    for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
                }
                return e
            },
            i = r(4),
            s = (n = i) && n.__esModule ? n : {
                default: n
            };
        const a = Symbol("onSortableSorted"),
            l = t.defaultOptions = {
                duration: 150,
                easingFunction: "ease-in-out",
                horizontal: !1
            };
        class c extends s.default {
            constructor(e) {
                super(e), this.options = o({}, l, this.getOptions()), this.lastAnimationFrame = null, this[a] = this[a].bind(this)
            }
            attach() {
                this.draggable.on("sortable:sorted", this[a])
            }
            detach() {
                this.draggable.off("sortable:sorted", this[a])
            }
            getOptions() {
                return this.draggable.options.swapAnimation || {}
            }[a]({
                oldIndex: e,
                newIndex: t,
                dragEvent: r
            }) {
                const {
                    source: n,
                    over: o
                } = r;
                cancelAnimationFrame(this.lastAnimationFrame), this.lastAnimationFrame = requestAnimationFrame((() => {
                    e >= t ? u(n, o, this.options) : u(o, n, this.options)
                }))
            }
        }

        function u(e, t, {
            duration: r,
            easingFunction: n,
            horizontal: o
        }) {
            for (const r of [e, t]) r.style.pointerEvents = "none";
            if (o) {
                const r = e.offsetWidth;
                e.style.transform = `translate3d(${r}px, 0, 0)`, t.style.transform = `translate3d(-${r}px, 0, 0)`
            } else {
                const r = e.offsetHeight;
                e.style.transform = `translate3d(0, ${r}px, 0)`, t.style.transform = `translate3d(0, -${r}px, 0)`
            }
            requestAnimationFrame((() => {
                for (const o of [e, t]) o.addEventListener("transitionend", d), o.style.transition = `transform ${r}ms ${n}`, o.style.transform = ""
            }))
        }

        function d(e) {
            e.target.style.transition = "", e.target.style.pointerEvents = "", e.target.removeEventListener("transitionend", d)
        }
        t.default = c
    }, function(e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.defaultOptions = void 0;
        var n, o = r(86),
            i = (n = o) && n.__esModule ? n : {
                default: n
            };
        t.default = i.default, t.defaultOptions = o.defaultOptions
    }, function(e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var n, o = r(4),
            i = (n = o) && n.__esModule ? n : {
                default: n
            },
            s = r(45);
        const a = Symbol("onDragStart"),
            l = Symbol("onDragStop"),
            c = Symbol("onDragOver"),
            u = Symbol("onDragOut"),
            d = Symbol("onMirrorCreated"),
            h = Symbol("onMirrorDestroy");
        class g extends i.default {
            constructor(e) {
                super(e), this.firstSource = null, this.mirror = null, this[a] = this[a].bind(this), this[l] = this[l].bind(this), this[c] = this[c].bind(this), this[u] = this[u].bind(this), this[d] = this[d].bind(this), this[h] = this[h].bind(this)
            }
            attach() {
                this.draggable.on("drag:start", this[a]).on("drag:stop", this[l]).on("drag:over", this[c]).on("drag:out", this[u]).on("droppable:over", this[c]).on("droppable:out", this[u]).on("mirror:created", this[d]).on("mirror:destroy", this[h])
            }
            detach() {
                this.draggable.off("drag:start", this[a]).off("drag:stop", this[l]).off("drag:over", this[c]).off("drag:out", this[u]).off("droppable:over", this[c]).off("droppable:out", this[u]).off("mirror:created", this[d]).off("mirror:destroy", this[h])
            }[a](e) {
                e.canceled() || (this.firstSource = e.source)
            }[l]() {
                this.firstSource = null
            }[c](e) {
                if (e.canceled()) return;
                const t = e.source || e.dragEvent.source;
                if (t === this.firstSource) return void(this.firstSource = null);
                const r = new s.SnapInEvent({
                    dragEvent: e,
                    snappable: e.over || e.droppable
                });
                this.draggable.trigger(r), r.canceled() || (this.mirror && (this.mirror.style.display = "none"), t.classList.remove(this.draggable.getClassNameFor("source:dragging")), t.classList.add(this.draggable.getClassNameFor("source:placed")), setTimeout((() => {
                    t.classList.remove(this.draggable.getClassNameFor("source:placed"))
                }), this.draggable.options.placedTimeout))
            }[u](e) {
                if (e.canceled()) return;
                const t = e.source || e.dragEvent.source,
                    r = new s.SnapOutEvent({
                        dragEvent: e,
                        snappable: e.over || e.droppable
                    });
                this.draggable.trigger(r), r.canceled() || (this.mirror && (this.mirror.style.display = ""), t.classList.add(this.draggable.getClassNameFor("source:dragging")))
            }[d]({
                mirror: e
            }) {
                this.mirror = e
            }[h]() {
                this.mirror = null
            }
        }
        t.default = g
    }, function(e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.SnapOutEvent = t.SnapInEvent = t.SnapEvent = void 0;
        var n, o = r(3),
            i = (n = o) && n.__esModule ? n : {
                default: n
            };
        class s extends i.default {
            get dragEvent() {
                return this.data.dragEvent
            }
            get snappable() {
                return this.data.snappable
            }
        }
        t.SnapEvent = s, s.type = "snap";
        class a extends s {}
        t.SnapInEvent = a, a.type = "snap:in", a.cancelable = !0;
        class l extends s {}
        t.SnapOutEvent = l, l.type = "snap:out", l.cancelable = !0
    }, function(e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var n = r(45);
        Object.keys(n).forEach((function(e) {
            "default" !== e && "__esModule" !== e && Object.defineProperty(t, e, {
                enumerable: !0,
                get: function() {
                    return n[e]
                }
            })
        }));
        var o, i = r(88),
            s = (o = i) && o.__esModule ? o : {
                default: o
            };
        t.default = s.default
    }, function(e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.defaultOptions = void 0;
        var n, o = Object.assign || function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var r = arguments[t];
                    for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
                }
                return e
            },
            i = r(4),
            s = (n = i) && n.__esModule ? n : {
                default: n
            },
            a = r(5);
        const l = Symbol("onMirrorCreated"),
            c = Symbol("onMirrorDestroy"),
            u = Symbol("onDragOver"),
            d = Symbol("resize"),
            h = t.defaultOptions = {};
        class g extends s.default {
            constructor(e) {
                super(e), this.options = o({}, h, this.getOptions()), this.lastWidth = 0, this.lastHeight = 0, this.mirror = null, this[l] = this[l].bind(this), this[c] = this[c].bind(this), this[u] = this[u].bind(this)
            }
            attach() {
                this.draggable.on("mirror:created", this[l]).on("drag:over", this[u]).on("drag:over:container", this[u])
            }
            detach() {
                this.draggable.off("mirror:created", this[l]).off("mirror:destroy", this[c]).off("drag:over", this[u]).off("drag:over:container", this[u])
            }
            getOptions() {
                return this.draggable.options.resizeMirror || {}
            }[l]({
                mirror: e
            }) {
                this.mirror = e
            }[c]() {
                this.mirror = null
            }[u](e) {
                this[d](e)
            }[d]({
                overContainer: e,
                over: t
            }) {
                requestAnimationFrame((() => {
                    this.mirror.parentNode !== e && e.appendChild(this.mirror);
                    const r = t || this.draggable.getDraggableElementsForContainer(e)[0];
                    r && (0, a.requestNextAnimationFrame)((() => {
                        const e = r.getBoundingClientRect();
                        this.lastHeight === e.height && this.lastWidth === e.width || (this.mirror.style.width = `${e.width}px`, this.mirror.style.height = `${e.height}px`, this.lastWidth = e.width, this.lastHeight = e.height)
                    }))
                }))
            }
        }
        t.default = g
    }, function(e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.defaultOptions = void 0;
        var n, o = r(91),
            i = (n = o) && n.__esModule ? n : {
                default: n
            };
        t.default = i.default, t.defaultOptions = o.defaultOptions
    }, function(e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var n, o = r(4),
            i = (n = o) && n.__esModule ? n : {
                default: n
            },
            s = r(5),
            a = r(46);
        const l = Symbol("onDragMove"),
            c = Symbol("onDragStop"),
            u = Symbol("onRequestAnimationFrame");
        class d extends i.default {
            constructor(e) {
                super(e), this.currentlyCollidingElement = null, this.lastCollidingElement = null, this.currentAnimationFrame = null, this[l] = this[l].bind(this), this[c] = this[c].bind(this), this[u] = this[u].bind(this)
            }
            attach() {
                this.draggable.on("drag:move", this[l]).on("drag:stop", this[c])
            }
            detach() {
                this.draggable.off("drag:move", this[l]).off("drag:stop", this[c])
            }
            getCollidables() {
                const e = this.draggable.options.collidables;
                return "string" == typeof e ? Array.prototype.slice.call(document.querySelectorAll(e)) : e instanceof NodeList || e instanceof Array ? Array.prototype.slice.call(e) : e instanceof HTMLElement ? [e] : "function" == typeof e ? e() : []
            }[l](e) {
                const t = e.sensorEvent.target;
                this.currentAnimationFrame = requestAnimationFrame(this[u](t)), this.currentlyCollidingElement && e.cancel();
                const r = new a.CollidableInEvent({
                        dragEvent: e,
                        collidingElement: this.currentlyCollidingElement
                    }),
                    n = new a.CollidableOutEvent({
                        dragEvent: e,
                        collidingElement: this.lastCollidingElement
                    }),
                    o = Boolean(this.currentlyCollidingElement && this.lastCollidingElement !== this.currentlyCollidingElement),
                    i = Boolean(!this.currentlyCollidingElement && this.lastCollidingElement);
                o ? (this.lastCollidingElement && this.draggable.trigger(n), this.draggable.trigger(r)) : i && this.draggable.trigger(n), this.lastCollidingElement = this.currentlyCollidingElement
            }[c](e) {
                const t = this.currentlyCollidingElement || this.lastCollidingElement,
                    r = new a.CollidableOutEvent({
                        dragEvent: e,
                        collidingElement: t
                    });
                t && this.draggable.trigger(r), this.lastCollidingElement = null, this.currentlyCollidingElement = null
            }[u](e) {
                return () => {
                    const t = this.getCollidables();
                    this.currentlyCollidingElement = (0, s.closest)(e, (e => t.includes(e)))
                }
            }
        }
        t.default = d
    }, function(e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.CollidableOutEvent = t.CollidableInEvent = t.CollidableEvent = void 0;
        var n, o = r(3),
            i = (n = o) && n.__esModule ? n : {
                default: n
            };
        class s extends i.default {
            get dragEvent() {
                return this.data.dragEvent
            }
        }
        t.CollidableEvent = s, s.type = "collidable";
        class a extends s {
            get collidingElement() {
                return this.data.collidingElement
            }
        }
        t.CollidableInEvent = a, a.type = "collidable:in";
        class l extends s {
            get collidingElement() {
                return this.data.collidingElement
            }
        }
        t.CollidableOutEvent = l, l.type = "collidable:out"
    }, function(e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var n = r(46);
        Object.keys(n).forEach((function(e) {
            "default" !== e && "__esModule" !== e && Object.defineProperty(t, e, {
                enumerable: !0,
                get: function() {
                    return n[e]
                }
            })
        }));
        var o, i = r(93),
            s = (o = i) && o.__esModule ? o : {
                default: o
            };
        t.default = s.default
    }, function(e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var n = r(95);
        Object.defineProperty(t, "Collidable", {
            enumerable: !0,
            get: function() {
                return a(n).default
            }
        });
        var o = r(92);
        Object.defineProperty(t, "ResizeMirror", {
            enumerable: !0,
            get: function() {
                return a(o).default
            }
        }), Object.defineProperty(t, "defaultResizeMirrorOptions", {
            enumerable: !0,
            get: function() {
                return o.defaultOptions
            }
        });
        var i = r(90);
        Object.defineProperty(t, "Snappable", {
            enumerable: !0,
            get: function() {
                return a(i).default
            }
        });
        var s = r(87);

        function a(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        Object.defineProperty(t, "SwapAnimation", {
            enumerable: !0,
            get: function() {
                return a(s).default
            }
        }), Object.defineProperty(t, "defaultSwapAnimationOptions", {
            enumerable: !0,
            get: function() {
                return s.defaultOptions
            }
        })
    }, function(e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var n, o = r(17),
            i = (n = o) && n.__esModule ? n : {
                default: n
            },
            s = r(16);
        const a = Symbol("onMouseForceWillBegin"),
            l = Symbol("onMouseForceDown"),
            c = Symbol("onMouseDown"),
            u = Symbol("onMouseForceChange"),
            d = Symbol("onMouseMove"),
            h = Symbol("onMouseUp"),
            g = Symbol("onMouseForceGlobalChange");
        class f extends i.default {
            constructor(e = [], t = {}) {
                super(e, t), this.mightDrag = !1, this[a] = this[a].bind(this), this[l] = this[l].bind(this), this[c] = this[c].bind(this), this[u] = this[u].bind(this), this[d] = this[d].bind(this), this[h] = this[h].bind(this)
            }
            attach() {
                for (const e of this.containers) e.addEventListener("webkitmouseforcewillbegin", this[a], !1), e.addEventListener("webkitmouseforcedown", this[l], !1), e.addEventListener("mousedown", this[c], !0), e.addEventListener("webkitmouseforcechanged", this[u], !1);
                document.addEventListener("mousemove", this[d]), document.addEventListener("mouseup", this[h])
            }
            detach() {
                for (const e of this.containers) e.removeEventListener("webkitmouseforcewillbegin", this[a], !1), e.removeEventListener("webkitmouseforcedown", this[l], !1), e.removeEventListener("mousedown", this[c], !0), e.removeEventListener("webkitmouseforcechanged", this[u], !1);
                document.removeEventListener("mousemove", this[d]), document.removeEventListener("mouseup", this[h])
            }[a](e) {
                e.preventDefault(), this.mightDrag = !0
            }[l](e) {
                if (this.dragging) return;
                const t = document.elementFromPoint(e.clientX, e.clientY),
                    r = e.currentTarget,
                    n = new s.DragStartSensorEvent({
                        clientX: e.clientX,
                        clientY: e.clientY,
                        target: t,
                        container: r,
                        originalEvent: e
                    });
                this.trigger(r, n), this.currentContainer = r, this.dragging = !n.canceled(), this.mightDrag = !1
            }[h](e) {
                if (!this.dragging) return;
                const t = new s.DragStopSensorEvent({
                    clientX: e.clientX,
                    clientY: e.clientY,
                    target: null,
                    container: this.currentContainer,
                    originalEvent: e
                });
                this.trigger(this.currentContainer, t), this.currentContainer = null, this.dragging = !1, this.mightDrag = !1
            }[c](e) {
                this.mightDrag && (e.stopPropagation(), e.stopImmediatePropagation(), e.preventDefault())
            }[d](e) {
                if (!this.dragging) return;
                const t = document.elementFromPoint(e.clientX, e.clientY),
                    r = new s.DragMoveSensorEvent({
                        clientX: e.clientX,
                        clientY: e.clientY,
                        target: t,
                        container: this.currentContainer,
                        originalEvent: e
                    });
                this.trigger(this.currentContainer, r)
            }[u](e) {
                if (this.dragging) return;
                const t = e.target,
                    r = e.currentTarget,
                    n = new s.DragPressureSensorEvent({
                        pressure: e.webkitForce,
                        clientX: e.clientX,
                        clientY: e.clientY,
                        target: t,
                        container: r,
                        originalEvent: e
                    });
                this.trigger(r, n)
            }[g](e) {
                if (!this.dragging) return;
                const t = e.target,
                    r = new s.DragPressureSensorEvent({
                        pressure: e.webkitForce,
                        clientX: e.clientX,
                        clientY: e.clientY,
                        target: t,
                        container: this.currentContainer,
                        originalEvent: e
                    });
                this.trigger(this.currentContainer, r)
            }
        }
        t.default = f
    }, function(e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var n, o = r(97),
            i = (n = o) && n.__esModule ? n : {
                default: n
            };
        t.default = i.default
    }, function(e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var n, o = r(5),
            i = r(17),
            s = (n = i) && n.__esModule ? n : {
                default: n
            },
            a = r(16);
        const l = Symbol("onMouseDown"),
            c = Symbol("onMouseUp"),
            u = Symbol("onDragStart"),
            d = Symbol("onDragOver"),
            h = Symbol("onDragEnd"),
            g = Symbol("onDrop"),
            f = Symbol("reset");
        class p extends s.default {
            constructor(e = [], t = {}) {
                super(e, t), this.mouseDownTimeout = null, this.draggableElement = null, this.nativeDraggableElement = null, this[l] = this[l].bind(this), this[c] = this[c].bind(this), this[u] = this[u].bind(this), this[d] = this[d].bind(this), this[h] = this[h].bind(this), this[g] = this[g].bind(this)
            }
            attach() {
                document.addEventListener("mousedown", this[l], !0)
            }
            detach() {
                document.removeEventListener("mousedown", this[l], !0)
            }[u](e) {
                e.dataTransfer.setData("text", ""), e.dataTransfer.effectAllowed = this.options.type;
                const t = document.elementFromPoint(e.clientX, e.clientY);
                if (this.currentContainer = (0, o.closest)(e.target, this.containers), !this.currentContainer) return;
                const r = new a.DragStartSensorEvent({
                    clientX: e.clientX,
                    clientY: e.clientY,
                    target: t,
                    container: this.currentContainer,
                    originalEvent: e
                });
                setTimeout((() => {
                    this.trigger(this.currentContainer, r), r.canceled() ? this.dragging = !1 : this.dragging = !0
                }), 0)
            }[d](e) {
                if (!this.dragging) return;
                const t = document.elementFromPoint(e.clientX, e.clientY),
                    r = this.currentContainer,
                    n = new a.DragMoveSensorEvent({
                        clientX: e.clientX,
                        clientY: e.clientY,
                        target: t,
                        container: r,
                        originalEvent: e
                    });
                this.trigger(r, n), n.canceled() || (e.preventDefault(), e.dataTransfer.dropEffect = this.options.type)
            }[h](e) {
                if (!this.dragging) return;
                document.removeEventListener("mouseup", this[c], !0);
                const t = document.elementFromPoint(e.clientX, e.clientY),
                    r = this.currentContainer,
                    n = new a.DragStopSensorEvent({
                        clientX: e.clientX,
                        clientY: e.clientY,
                        target: t,
                        container: r,
                        originalEvent: e
                    });
                this.trigger(r, n), this.dragging = !1, this[f]()
            }[g](e) {
                e.preventDefault()
            }[l](e) {
                if (e.target && (e.target.form || e.target.contenteditable)) return;
                const t = (0, o.closest)(e.target, (e => e.draggable));
                t && (t.draggable = !1, this.nativeDraggableElement = t), document.addEventListener("mouseup", this[c], !0), document.addEventListener("dragstart", this[u], !1), document.addEventListener("dragover", this[d], !1), document.addEventListener("dragend", this[h], !1), document.addEventListener("drop", this[g], !1);
                const r = (0, o.closest)(e.target, this.options.draggable);
                r && (this.mouseDownTimeout = setTimeout((() => {
                    r.draggable = !0, this.draggableElement = r
                }), this.options.delay))
            }[c]() {
                this[f]()
            }[f]() {
                clearTimeout(this.mouseDownTimeout), document.removeEventListener("mouseup", this[c], !0), document.removeEventListener("dragstart", this[u], !1), document.removeEventListener("dragover", this[d], !1), document.removeEventListener("dragend", this[h], !1), document.removeEventListener("drop", this[g], !1), this.nativeDraggableElement && (this.nativeDraggableElement.draggable = !0, this.nativeDraggableElement = null), this.draggableElement && (this.draggableElement.draggable = !1, this.draggableElement = null)
            }
        }
        t.default = p
    }, function(e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var n, o = r(99),
            i = (n = o) && n.__esModule ? n : {
                default: n
            };
        t.default = i.default
    }, function(e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var n, o = r(5),
            i = r(17),
            s = (n = i) && n.__esModule ? n : {
                default: n
            },
            a = r(16);
        const l = Symbol("onTouchStart"),
            c = Symbol("onTouchHold"),
            u = Symbol("onTouchEnd"),
            d = Symbol("onTouchMove");
        let h = !1;
        window.addEventListener("touchmove", (e => {
            h && e.preventDefault()
        }), {
            passive: !1
        });
        class g extends s.default {
            constructor(e = [], t = {}) {
                super(e, t), this.currentScrollableParent = null, this.tapTimeout = null, this.touchMoved = !1, this[l] = this[l].bind(this), this[c] = this[c].bind(this), this[u] = this[u].bind(this), this[d] = this[d].bind(this)
            }
            attach() {
                document.addEventListener("touchstart", this[l])
            }
            detach() {
                document.removeEventListener("touchstart", this[l])
            }[l](e) {
                const t = (0, o.closest)(e.target, this.containers);
                t && (document.addEventListener("touchmove", this[d]), document.addEventListener("touchend", this[u]), document.addEventListener("touchcancel", this[u]), t.addEventListener("contextmenu", f), this.currentContainer = t, this.tapTimeout = setTimeout(this[c](e, t), this.options.delay))
            }[c](e, t) {
                return () => {
                    if (this.touchMoved) return;
                    const r = e.touches[0] || e.changedTouches[0],
                        n = e.target,
                        o = new a.DragStartSensorEvent({
                            clientX: r.pageX,
                            clientY: r.pageY,
                            target: n,
                            container: t,
                            originalEvent: e
                        });
                    this.trigger(t, o), this.dragging = !o.canceled(), h = this.dragging
                }
            }[d](e) {
                if (this.touchMoved = !0, !this.dragging) return;
                const t = e.touches[0] || e.changedTouches[0],
                    r = document.elementFromPoint(t.pageX - window.scrollX, t.pageY - window.scrollY),
                    n = new a.DragMoveSensorEvent({
                        clientX: t.pageX,
                        clientY: t.pageY,
                        target: r,
                        container: this.currentContainer,
                        originalEvent: e
                    });
                this.trigger(this.currentContainer, n)
            }[u](e) {
                if (this.touchMoved = !1, h = !1, document.removeEventListener("touchend", this[u]), document.removeEventListener("touchcancel", this[u]), document.removeEventListener("touchmove", this[d]), this.currentContainer && this.currentContainer.removeEventListener("contextmenu", f), clearTimeout(this.tapTimeout), !this.dragging) return;
                const t = e.touches[0] || e.changedTouches[0],
                    r = document.elementFromPoint(t.pageX - window.scrollX, t.pageY - window.scrollY);
                e.preventDefault();
                const n = new a.DragStopSensorEvent({
                    clientX: t.pageX,
                    clientY: t.pageY,
                    target: r,
                    container: this.currentContainer,
                    originalEvent: e
                });
                this.trigger(this.currentContainer, n), this.currentContainer = null, this.dragging = !1
            }
        }

        function f(e) {
            e.preventDefault(), e.stopPropagation()
        }
        t.default = g
    }, function(e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var n, o = r(101),
            i = (n = o) && n.__esModule ? n : {
                default: n
            };
        t.default = i.default
    }, function(e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.DragPressureSensorEvent = t.DragStopSensorEvent = t.DragMoveSensorEvent = t.DragStartSensorEvent = t.SensorEvent = void 0;
        var n, o = r(3),
            i = (n = o) && n.__esModule ? n : {
                default: n
            };
        class s extends i.default {
            get originalEvent() {
                return this.data.originalEvent
            }
            get clientX() {
                return this.data.clientX
            }
            get clientY() {
                return this.data.clientY
            }
            get target() {
                return this.data.target
            }
            get container() {
                return this.data.container
            }
            get pressure() {
                return this.data.pressure
            }
        }
        t.SensorEvent = s;
        class a extends s {}
        t.DragStartSensorEvent = a, a.type = "drag:start";
        class l extends s {}
        t.DragMoveSensorEvent = l, l.type = "drag:move";
        class c extends s {}
        t.DragStopSensorEvent = c, c.type = "drag:stop";
        class u extends s {}
        t.DragPressureSensorEvent = u, u.type = "drag:pressure"
    }, function(e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.default = function(e) {
            return requestAnimationFrame((() => {
                requestAnimationFrame(e)
            }))
        }
    }, function(e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var n, o = r(104),
            i = (n = o) && n.__esModule ? n : {
                default: n
            };
        t.default = i.default
    }, function(e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.default = function(e, t) {
            if (!e) return null;
            const r = t,
                o = t,
                i = t,
                s = t,
                a = Boolean("string" == typeof t),
                l = Boolean("function" == typeof t),
                c = Boolean(t instanceof NodeList || t instanceof Array),
                u = Boolean(t instanceof HTMLElement);
            let d = e;
            do {
                if (d = d.correspondingUseElement || d.correspondingElement || d, (h = d) ? a ? n.call(h, r) : c ? [...i].includes(h) : u ? s === h : l && o(h) : h) return d;
                d = d.parentNode
            } while (d && d !== document.body && d !== document);
            var h;
            return null
        };
        const n = Element.prototype.matches || Element.prototype.webkitMatchesSelector || Element.prototype.mozMatchesSelector || Element.prototype.msMatchesSelector
    }, function(e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var n, o = r(106),
            i = (n = o) && n.__esModule ? n : {
                default: n
            };
        t.default = i.default
    }, function(e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var n, o = r(5),
            i = r(17),
            s = (n = i) && n.__esModule ? n : {
                default: n
            },
            a = r(16);
        const l = Symbol("onContextMenuWhileDragging"),
            c = Symbol("onMouseDown"),
            u = Symbol("onMouseMove"),
            d = Symbol("onMouseUp");
        class h extends s.default {
            constructor(e = [], t = {}) {
                super(e, t), this.mouseDown = !1, this.mouseDownTimeout = null, this.openedContextMenu = !1, this[l] = this[l].bind(this), this[c] = this[c].bind(this), this[u] = this[u].bind(this), this[d] = this[d].bind(this)
            }
            attach() {
                document.addEventListener("mousedown", this[c], !0)
            }
            detach() {
                document.removeEventListener("mousedown", this[c], !0)
            }[c](e) {
                if (0 !== e.button || e.ctrlKey || e.metaKey) return;
                document.addEventListener("mouseup", this[d]);
                const t = document.elementFromPoint(e.clientX, e.clientY),
                    r = (0, o.closest)(t, this.containers);
                r && (document.addEventListener("dragstart", g), this.mouseDown = !0, clearTimeout(this.mouseDownTimeout), this.mouseDownTimeout = setTimeout((() => {
                    if (!this.mouseDown) return;
                    const n = new a.DragStartSensorEvent({
                        clientX: e.clientX,
                        clientY: e.clientY,
                        target: t,
                        container: r,
                        originalEvent: e
                    });
                    this.trigger(r, n), this.currentContainer = r, this.dragging = !n.canceled(), this.dragging && (document.addEventListener("contextmenu", this[l]), document.addEventListener("mousemove", this[u]))
                }), this.options.delay))
            }[u](e) {
                if (!this.dragging) return;
                const t = document.elementFromPoint(e.clientX, e.clientY),
                    r = new a.DragMoveSensorEvent({
                        clientX: e.clientX,
                        clientY: e.clientY,
                        target: t,
                        container: this.currentContainer,
                        originalEvent: e
                    });
                this.trigger(this.currentContainer, r)
            }[d](e) {
                if (this.mouseDown = Boolean(this.openedContextMenu), this.openedContextMenu) return void(this.openedContextMenu = !1);
                if (document.removeEventListener("mouseup", this[d]), document.removeEventListener("dragstart", g), !this.dragging) return;
                const t = document.elementFromPoint(e.clientX, e.clientY),
                    r = new a.DragStopSensorEvent({
                        clientX: e.clientX,
                        clientY: e.clientY,
                        target: t,
                        container: this.currentContainer,
                        originalEvent: e
                    });
                this.trigger(this.currentContainer, r), document.removeEventListener("contextmenu", this[l]), document.removeEventListener("mousemove", this[u]), this.currentContainer = null, this.dragging = !1
            }[l](e) {
                e.preventDefault(), this.openedContextMenu = !0
            }
        }

        function g(e) {
            e.preventDefault()
        }
        t.default = h
    }, function(e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var n, o = r(108),
            i = (n = o) && n.__esModule ? n : {
                default: n
            };
        t.default = i.default
    }, function(e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var n = Object.assign || function(e) {
            for (var t = 1; t < arguments.length; t++) {
                var r = arguments[t];
                for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
            }
            return e
        };
        t.default = class {
            constructor(e = [], t = {}) {
                this.containers = [...e], this.options = n({}, t), this.dragging = !1, this.currentContainer = null
            }
            attach() {
                return this
            }
            detach() {
                return this
            }
            addContainer(...e) {
                this.containers = [...this.containers, ...e]
            }
            removeContainer(...e) {
                this.containers = this.containers.filter((t => !e.includes(t)))
            }
            trigger(e, t) {
                const r = document.createEvent("Event");
                return r.detail = t, r.initEvent(t.type, !0, !0), e.dispatchEvent(r), this.lastEvent = t, t
            }
        }
    }, function(e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        t.default = class {
            constructor(e) {
                this.draggable = e
            }
            attach() {
                throw new Error("Not Implemented")
            }
            detach() {
                throw new Error("Not Implemented")
            }
        }
    }, function(e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var n = Object.assign || function(e) {
            for (var t = 1; t < arguments.length; t++) {
                var r = arguments[t];
                for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
            }
            return e
        };
        const o = Symbol("canceled");
        class i {
            constructor(e) {
                this[o] = !1, this.data = e
            }
            get type() {
                return this.constructor.type
            }
            get cancelable() {
                return this.constructor.cancelable
            }
            cancel() {
                this[o] = !0
            }
            canceled() {
                return Boolean(this[o])
            }
            clone(e) {
                return new this.constructor(n({}, this.data, e))
            }
        }
        t.default = i, i.type = "event", i.cancelable = !1
    }, function(e, t, r) {
        "use strict";
        var n = r(15),
            o = r(57)(!0);
        n(n.P, "Array", {
            includes: function(e) {
                return o(this, e, arguments.length > 1 ? arguments[1] : void 0)
            }
        }), r(49)("includes")
    }, function(e, t, r) {
        r(113), e.exports = r(2).Array.includes
    }, function(e, t, r) {
        var n = r(13),
            o = r(7),
            i = r(19).f;
        e.exports = function(e) {
            return function(t) {
                for (var r, s = o(t), a = n(s), l = a.length, c = 0, u = []; l > c;) i.call(s, r = a[c++]) && u.push(e ? [r, s[r]] : s[r]);
                return u
            }
        }
    }, function(e, t, r) {
        var n = r(15),
            o = r(115)(!1);
        n(n.S, "Object", {
            values: function(e) {
                return o(e)
            }
        })
    }, function(e, t, r) {
        r(116), e.exports = r(2).Object.values
    }, function(e, t, r) {
        "use strict";
        var n = r(13),
            o = r(31),
            i = r(19),
            s = r(50),
            a = r(58),
            l = Object.assign;
        e.exports = !l || r(23)((function() {
            var e = {},
                t = {},
                r = Symbol(),
                n = "abcdefghijklmnopqrst";
            return e[r] = 7, n.split("").forEach((function(e) {
                t[e] = e
            })), 7 != l({}, e)[r] || Object.keys(l({}, t)).join("") != n
        })) ? function(e, t) {
            for (var r = s(e), l = arguments.length, c = 1, u = o.f, d = i.f; l > c;)
                for (var h, g = a(arguments[c++]), f = u ? n(g).concat(u(g)) : n(g), p = f.length, v = 0; p > v;) d.call(g, h = f[v++]) && (r[h] = g[h]);
            return r
        } : l
    }, function(e, t, r) {
        var n = r(15);
        n(n.S + n.F, "Object", {
            assign: r(118)
        })
    }, function(e, t, r) {
        r(119), e.exports = r(2).Object.assign
    }, function(e, t, r) {
        var n = r(0)("iterator"),
            o = !1;
        try {
            var i = [7][n]();
            i.return = function() {
                o = !0
            }, Array.from(i, (function() {
                throw 2
            }))
        } catch (e) {}
        e.exports = function(e, t) {
            if (!t && !o) return !1;
            var r = !1;
            try {
                var i = [7],
                    s = i[n]();
                s.next = function() {
                    return {
                        done: r = !0
                    }
                }, i[n] = function() {
                    return s
                }, e(i)
            } catch (e) {}
            return r
        }
    }, function(e, t, r) {
        "use strict";
        var n = r(1),
            o = r(9),
            i = r(11),
            s = r(0)("species");
        e.exports = function(e) {
            var t = n[e];
            i && t && !t[s] && o.f(t, s, {
                configurable: !0,
                get: function() {
                    return this
                }
            })
        }
    }, function(e, t, r) {
        var n = r(14);
        e.exports = function(e, t, r) {
            for (var o in t) n(e, o, t[o], r);
            return e
        }
    }, function(e, t, r) {
        var n = r(6),
            o = r(8),
            i = r(47);
        e.exports = function(e, t) {
            if (n(e), o(t) && t.constructor === e) return t;
            var r = i.f(e);
            return (0, r.resolve)(t), r.promise
        }
    }, function(e, t, r) {
        var n = r(1).navigator;
        e.exports = n && n.userAgent || ""
    }, function(e, t) {
        e.exports = function(e) {
            try {
                return {
                    e: !1,
                    v: e()
                }
            } catch (e) {
                return {
                    e: !0,
                    v: e
                }
            }
        }
    }, function(e, t, r) {
        var n = r(1),
            o = r(48).set,
            i = n.MutationObserver || n.WebKitMutationObserver,
            s = n.process,
            a = n.Promise,
            l = "process" == r(20)(s);
        e.exports = function() {
            var e, t, r, c = function() {
                var n, o;
                for (l && (n = s.domain) && n.exit(); e;) {
                    o = e.fn, e = e.next;
                    try {
                        o()
                    } catch (n) {
                        throw e ? r() : t = void 0, n
                    }
                }
                t = void 0, n && n.enter()
            };
            if (l) r = function() {
                s.nextTick(c)
            };
            else if (!i || n.navigator && n.navigator.standalone)
                if (a && a.resolve) {
                    var u = a.resolve(void 0);
                    r = function() {
                        u.then(c)
                    }
                } else r = function() {
                    o.call(n, c)
                };
            else {
                var d = !0,
                    h = document.createTextNode("");
                new i(c).observe(h, {
                    characterData: !0
                }), r = function() {
                    h.data = d = !d
                }
            }
            return function(n) {
                var o = {
                    fn: n,
                    next: void 0
                };
                t && (t.next = o), e || (e = o, r()), t = o
            }
        }
    }, function(e, t) {
        e.exports = function(e, t, r) {
            var n = void 0 === r;
            switch (t.length) {
                case 0:
                    return n ? e() : e.call(r);
                case 1:
                    return n ? e(t[0]) : e.call(r, t[0]);
                case 2:
                    return n ? e(t[0], t[1]) : e.call(r, t[0], t[1]);
                case 3:
                    return n ? e(t[0], t[1], t[2]) : e.call(r, t[0], t[1], t[2]);
                case 4:
                    return n ? e(t[0], t[1], t[2], t[3]) : e.call(r, t[0], t[1], t[2], t[3])
            }
            return e.apply(r, t)
        }
    }, function(e, t, r) {
        var n = r(6),
            o = r(26),
            i = r(0)("species");
        e.exports = function(e, t) {
            var r, s = n(e).constructor;
            return void 0 === s || null == (r = n(s)[i]) ? t : o(r)
        }
    }, function(e, t, r) {
        var n = r(30),
            o = r(0)("iterator"),
            i = r(18);
        e.exports = r(2).getIteratorMethod = function(e) {
            if (null != e) return e[o] || e["@@iterator"] || i[n(e)]
        }
    }, function(e, t, r) {
        var n = r(18),
            o = r(0)("iterator"),
            i = Array.prototype;
        e.exports = function(e) {
            return void 0 !== e && (n.Array === e || i[o] === e)
        }
    }, function(e, t, r) {
        var n = r(6);
        e.exports = function(e, t, r, o) {
            try {
                return o ? t(n(r)[0], r[1]) : t(r)
            } catch (t) {
                var i = e.return;
                throw void 0 !== i && n(i.call(e)), t
            }
        }
    }, function(e, t, r) {
        var n = r(27),
            o = r(132),
            i = r(131),
            s = r(6),
            a = r(56),
            l = r(130),
            c = {},
            u = {};
        (t = e.exports = function(e, t, r, d, h) {
            var g, f, p, v, m = h ? function() {
                    return e
                } : l(e),
                b = n(r, d, t ? 2 : 1),
                y = 0;
            if ("function" != typeof m) throw TypeError(e + " is not iterable!");
            if (i(m)) {
                for (g = a(e.length); g > y; y++)
                    if ((v = t ? b(s(f = e[y])[0], f[1]) : b(e[y])) === c || v === u) return v
            } else
                for (p = m.call(e); !(f = p.next()).done;)
                    if ((v = o(p, b, f.value, t)) === c || v === u) return v
        }).BREAK = c, t.RETURN = u
    }, function(e, t) {
        e.exports = function(e, t, r, n) {
            if (!(e instanceof t) || void 0 !== n && n in e) throw TypeError(r + ": incorrect invocation!");
            return e
        }
    }, function(e, t, r) {
        "use strict";
        var n, o, i, s, a = r(21),
            l = r(1),
            c = r(27),
            u = r(30),
            d = r(15),
            h = r(8),
            g = r(26),
            f = r(134),
            p = r(133),
            v = r(129),
            m = r(48).set,
            b = r(127)(),
            y = r(47),
            E = r(126),
            O = r(125),
            S = r(124),
            _ = "Promise",
            M = l.TypeError,
            C = l.process,
            w = C && C.versions,
            P = w && w.v8 || "",
            D = l.Promise,
            x = "process" == u(C),
            j = function() {},
            L = o = y.f,
            F = !! function() {
                try {
                    var e = D.resolve(1),
                        t = (e.constructor = {})[r(0)("species")] = function(e) {
                            e(j, j)
                        };
                    return (x || "function" == typeof PromiseRejectionEvent) && e.then(j) instanceof t && 0 !== P.indexOf("6.6") && -1 === O.indexOf("Chrome/66")
                } catch (e) {}
            }(),
            A = function(e) {
                var t;
                return !(!h(e) || "function" != typeof(t = e.then)) && t
            },
            T = function(e, t) {
                if (!e._n) {
                    e._n = !0;
                    var r = e._c;
                    b((function() {
                        for (var n = e._v, o = 1 == e._s, i = 0, s = function(t) {
                                var r, i, s, a = o ? t.ok : t.fail,
                                    l = t.resolve,
                                    c = t.reject,
                                    u = t.domain;
                                try {
                                    a ? (o || (2 == e._h && N(e), e._h = 1), !0 === a ? r = n : (u && u.enter(), r = a(n), u && (u.exit(), s = !0)), r === t.promise ? c(M("Promise-chain cycle")) : (i = A(r)) ? i.call(r, l, c) : l(r)) : c(n)
                                } catch (e) {
                                    u && !s && u.exit(), c(e)
                                }
                            }; r.length > i;) s(r[i++]);
                        e._c = [], e._n = !1, t && !e._h && Y(e)
                    }))
                }
            },
            Y = function(e) {
                m.call(l, (function() {
                    var t, r, n, o = e._v,
                        i = X(e);
                    if (i && (t = E((function() {
                            x ? C.emit("unhandledRejection", o, e) : (r = l.onunhandledrejection) ? r({
                                promise: e,
                                reason: o
                            }) : (n = l.console) && n.error && n.error("Unhandled promise rejection", o)
                        })), e._h = x || X(e) ? 2 : 1), e._a = void 0, i && t.e) throw t.v
                }))
            },
            X = function(e) {
                return 1 !== e._h && 0 === (e._a || e._c).length
            },
            N = function(e) {
                m.call(l, (function() {
                    var t;
                    x ? C.emit("rejectionHandled", e) : (t = l.onrejectionhandled) && t({
                        promise: e,
                        reason: e._v
                    })
                }))
            },
            z = function(e) {
                var t = this;
                t._d || (t._d = !0, (t = t._w || t)._v = e, t._s = 2, t._a || (t._a = t._c.slice()), T(t, !0))
            },
            k = function(e) {
                var t, r = this;
                if (!r._d) {
                    r._d = !0, r = r._w || r;
                    try {
                        if (r === e) throw M("Promise can't be resolved itself");
                        (t = A(e)) ? b((function() {
                            var n = {
                                _w: r,
                                _d: !1
                            };
                            try {
                                t.call(e, c(k, n, 1), c(z, n, 1))
                            } catch (e) {
                                z.call(n, e)
                            }
                        })): (r._v = e, r._s = 1, T(r, !1))
                    } catch (e) {
                        z.call({
                            _w: r,
                            _d: !1
                        }, e)
                    }
                }
            };
        F || (D = function(e) {
            f(this, D, _, "_h"), g(e), n.call(this);
            try {
                e(c(k, this, 1), c(z, this, 1))
            } catch (e) {
                z.call(this, e)
            }
        }, (n = function(e) {
            this._c = [], this._a = void 0, this._s = 0, this._d = !1, this._v = void 0, this._h = 0, this._n = !1
        }).prototype = r(123)(D.prototype, {
            then: function(e, t) {
                var r = L(v(this, D));
                return r.ok = "function" != typeof e || e, r.fail = "function" == typeof t && t, r.domain = x ? C.domain : void 0, this._c.push(r), this._a && this._a.push(r), this._s && T(this, !1), r.promise
            },
            catch: function(e) {
                return this.then(void 0, e)
            }
        }), i = function() {
            var e = new n;
            this.promise = e, this.resolve = c(k, e, 1), this.reject = c(z, e, 1)
        }, y.f = L = function(e) {
            return e === D || e === s ? new i(e) : o(e)
        }), d(d.G + d.W + d.F * !F, {
            Promise: D
        }), r(25)(D, _), r(122)(_), s = r(2).Promise, d(d.S + d.F * !F, _, {
            reject: function(e) {
                var t = L(this);
                return (0, t.reject)(e), t.promise
            }
        }), d(d.S + d.F * (a || !F), _, {
            resolve: function(e) {
                return S(a && this === s ? D : this, e)
            }
        }), d(d.S + d.F * !(F && r(121)((function(e) {
            D.all(e).catch(j)
        }))), _, {
            all: function(e) {
                var t = this,
                    r = L(t),
                    n = r.resolve,
                    o = r.reject,
                    i = E((function() {
                        var r = [],
                            i = 0,
                            s = 1;
                        p(e, !1, (function(e) {
                            var a = i++,
                                l = !1;
                            r.push(void 0), s++, t.resolve(e).then((function(e) {
                                l || (l = !0, r[a] = e, --s || n(r))
                            }), o)
                        })), --s || n(r)
                    }));
                return i.e && o(i.v), r.promise
            },
            race: function(e) {
                var t = this,
                    r = L(t),
                    n = r.reject,
                    o = E((function() {
                        p(e, !1, (function(e) {
                            t.resolve(e).then(r.resolve, n)
                        }))
                    }));
                return o.e && n(o.v), r.promise
            }
        })
    }, function(e, t) {
        e.exports = function(e, t) {
            return {
                value: t,
                done: !!e
            }
        }
    }, function(e, t, r) {
        "use strict";
        var n = r(49),
            o = r(136),
            i = r(18),
            s = r(7);
        e.exports = r(51)(Array, "Array", (function(e, t) {
            this._t = s(e), this._i = 0, this._k = t
        }), (function() {
            var e = this._t,
                t = this._k,
                r = this._i++;
            return !e || r >= e.length ? (this._t = void 0, o(1)) : o(0, "keys" == t ? r : "values" == t ? e[r] : [r, e[r]])
        }), "values"), i.Arguments = i.Array, n("keys"), n("values"), n("entries")
    }, function(e, t, r) {
        for (var n = r(137), o = r(13), i = r(14), s = r(1), a = r(10), l = r(18), c = r(0), u = c("iterator"), d = c("toStringTag"), h = l.Array, g = {
                CSSRuleList: !0,
                CSSStyleDeclaration: !1,
                CSSValueList: !1,
                ClientRectList: !1,
                DOMRectList: !1,
                DOMStringList: !1,
                DOMTokenList: !0,
                DataTransferItemList: !1,
                FileList: !1,
                HTMLAllCollection: !1,
                HTMLCollection: !1,
                HTMLFormElement: !1,
                HTMLSelectElement: !1,
                MediaList: !0,
                MimeTypeArray: !1,
                NamedNodeMap: !1,
                NodeList: !0,
                PaintRequestList: !1,
                Plugin: !1,
                PluginArray: !1,
                SVGLengthList: !1,
                SVGNumberList: !1,
                SVGPathSegList: !1,
                SVGPointList: !1,
                SVGStringList: !1,
                SVGTransformList: !1,
                SourceBufferList: !1,
                StyleSheetList: !0,
                TextTrackCueList: !1,
                TextTrackList: !1,
                TouchList: !1
            }, f = o(g), p = 0; p < f.length; p++) {
            var v, m = f[p],
                b = g[m],
                y = s[m],
                E = y && y.prototype;
            if (E && (E[u] || a(E, u, h), E[d] || a(E, d, m), l[m] = h, b))
                for (v in n) E[v] || i(E, v, n[v], !0)
        }
    }, function(e, t, r) {
        var n = r(12),
            o = r(50),
            i = r(33)("IE_PROTO"),
            s = Object.prototype;
        e.exports = Object.getPrototypeOf || function(e) {
            return e = o(e), n(e, i) ? e[i] : "function" == typeof e.constructor && e instanceof e.constructor ? e.constructor.prototype : e instanceof Object ? s : null
        }
    }, function(e, t, r) {
        "use strict";
        var n = r(55),
            o = r(28),
            i = r(25),
            s = {};
        r(10)(s, r(0)("iterator"), (function() {
            return this
        })), e.exports = function(e, t, r) {
            e.prototype = n(s, {
                next: o(1, r)
            }), i(e, t + " Iterator")
        }
    }, function(e, t, r) {
        var n = r(34),
            o = r(35);
        e.exports = function(e) {
            return function(t, r) {
                var i, s, a = String(o(t)),
                    l = n(r),
                    c = a.length;
                return l < 0 || l >= c ? e ? "" : void 0 : (i = a.charCodeAt(l)) < 55296 || i > 56319 || l + 1 === c || (s = a.charCodeAt(l + 1)) < 56320 || s > 57343 ? e ? a.charAt(l) : i : e ? a.slice(l, l + 2) : s - 56320 + (i - 55296 << 10) + 65536
            }
        }
    }, function(e, t, r) {
        "use strict";
        var n = r(141)(!0);
        r(51)(String, "String", (function(e) {
            this._t = String(e), this._i = 0
        }), (function() {
            var e, t = this._t,
                r = this._i;
            return r >= t.length ? {
                value: void 0,
                done: !0
            } : (e = n(t, r), this._i += e.length, {
                value: e,
                done: !1
            })
        }))
    }, function(e, t, r) {
        r(52), r(142), r(138), r(135), e.exports = r(2).Promise
    }, function(e, t, r) {
        var n = r(19),
            o = r(28),
            i = r(7),
            s = r(37),
            a = r(12),
            l = r(61),
            c = Object.getOwnPropertyDescriptor;
        t.f = r(11) ? c : function(e, t) {
            if (e = i(e), t = s(t, !0), l) try {
                return c(e, t)
            } catch (e) {}
            if (a(e, t)) return o(!n.f.call(e, t), e[t])
        }
    }, function(e, t, r) {
        var n = r(7),
            o = r(53).f,
            i = {}.toString,
            s = "object" == typeof window && window && Object.getOwnPropertyNames ? Object.getOwnPropertyNames(window) : [];
        e.exports.f = function(e) {
            return s && "[object Window]" == i.call(e) ? function(e) {
                try {
                    return o(e)
                } catch (e) {
                    return s.slice()
                }
            }(e) : o(n(e))
        }
    }, function(e, t, r) {
        var n = r(9),
            o = r(6),
            i = r(13);
        e.exports = r(11) ? Object.defineProperties : function(e, t) {
            o(e);
            for (var r, s = i(t), a = s.length, l = 0; a > l;) n.f(e, r = s[l++], t[r]);
            return e
        }
    }, function(e, t, r) {
        var n = r(20);
        e.exports = Array.isArray || function(e) {
            return "Array" == n(e)
        }
    }, function(e, t, r) {
        var n = r(34),
            o = Math.max,
            i = Math.min;
        e.exports = function(e, t) {
            return (e = n(e)) < 0 ? o(e + t, 0) : i(e, t)
        }
    }, function(e, t, r) {
        var n = r(13),
            o = r(31),
            i = r(19);
        e.exports = function(e) {
            var t = n(e),
                r = o.f;
            if (r)
                for (var s, a = r(e), l = i.f, c = 0; a.length > c;) l.call(e, s = a[c++]) && t.push(s);
            return t
        }
    }, function(e, t, r) {
        var n = r(1),
            o = r(2),
            i = r(21),
            s = r(60),
            a = r(9).f;
        e.exports = function(e) {
            var t = o.Symbol || (o.Symbol = i ? {} : n.Symbol || {});
            "_" == e.charAt(0) || e in t || a(t, e, {
                value: s.f(e)
            })
        }
    }, function(e, t, r) {
        var n = r(22)("meta"),
            o = r(8),
            i = r(12),
            s = r(9).f,
            a = 0,
            l = Object.isExtensible || function() {
                return !0
            },
            c = !r(23)((function() {
                return l(Object.preventExtensions({}))
            })),
            u = function(e) {
                s(e, n, {
                    value: {
                        i: "O" + ++a,
                        w: {}
                    }
                })
            },
            d = e.exports = {
                KEY: n,
                NEED: !1,
                fastKey: function(e, t) {
                    if (!o(e)) return "symbol" == typeof e ? e : ("string" == typeof e ? "S" : "P") + e;
                    if (!i(e, n)) {
                        if (!l(e)) return "F";
                        if (!t) return "E";
                        u(e)
                    }
                    return e[n].i
                },
                getWeak: function(e, t) {
                    if (!i(e, n)) {
                        if (!l(e)) return !0;
                        if (!t) return !1;
                        u(e)
                    }
                    return e[n].w
                },
                onFreeze: function(e) {
                    return c && d.NEED && l(e) && !i(e, n) && u(e), e
                }
            }
    }, function(e, t, r) {
        "use strict";
        var n = r(1),
            o = r(12),
            i = r(11),
            s = r(15),
            a = r(14),
            l = r(151).KEY,
            c = r(23),
            u = r(36),
            d = r(25),
            h = r(22),
            g = r(0),
            f = r(60),
            p = r(150),
            v = r(149),
            m = r(147),
            b = r(6),
            y = r(8),
            E = r(7),
            O = r(37),
            S = r(28),
            _ = r(55),
            M = r(145),
            C = r(144),
            w = r(9),
            P = r(13),
            D = C.f,
            x = w.f,
            j = M.f,
            L = n.Symbol,
            F = n.JSON,
            A = F && F.stringify,
            T = g("_hidden"),
            Y = g("toPrimitive"),
            X = {}.propertyIsEnumerable,
            N = u("symbol-registry"),
            z = u("symbols"),
            k = u("op-symbols"),
            I = Object.prototype,
            B = "function" == typeof L,
            q = n.QObject,
            $ = !q || !q.prototype || !q.prototype.findChild,
            R = i && c((function() {
                return 7 != _(x({}, "a", {
                    get: function() {
                        return x(this, "a", {
                            value: 7
                        }).a
                    }
                })).a
            })) ? function(e, t, r) {
                var n = D(I, t);
                n && delete I[t], x(e, t, r), n && e !== I && x(I, t, n)
            } : x,
            H = function(e) {
                var t = z[e] = _(L.prototype);
                return t._k = e, t
            },
            U = B && "symbol" == typeof L.iterator ? function(e) {
                return "symbol" == typeof e
            } : function(e) {
                return e instanceof L
            },
            W = function(e, t, r) {
                return e === I && W(k, t, r), b(e), t = O(t, !0), b(r), o(z, t) ? (r.enumerable ? (o(e, T) && e[T][t] && (e[T][t] = !1), r = _(r, {
                    enumerable: S(0, !1)
                })) : (o(e, T) || x(e, T, S(1, {})), e[T][t] = !0), R(e, t, r)) : x(e, t, r)
            },
            V = function(e, t) {
                b(e);
                for (var r, n = v(t = E(t)), o = 0, i = n.length; i > o;) W(e, r = n[o++], t[r]);
                return e
            },
            G = function(e) {
                var t = X.call(this, e = O(e, !0));
                return !(this === I && o(z, e) && !o(k, e)) && (!(t || !o(this, e) || !o(z, e) || o(this, T) && this[T][e]) || t)
            },
            K = function(e, t) {
                if (e = E(e), t = O(t, !0), e !== I || !o(z, t) || o(k, t)) {
                    var r = D(e, t);
                    return !r || !o(z, t) || o(e, T) && e[T][t] || (r.enumerable = !0), r
                }
            },
            J = function(e) {
                for (var t, r = j(E(e)), n = [], i = 0; r.length > i;) o(z, t = r[i++]) || t == T || t == l || n.push(t);
                return n
            },
            Z = function(e) {
                for (var t, r = e === I, n = j(r ? k : E(e)), i = [], s = 0; n.length > s;) !o(z, t = n[s++]) || r && !o(I, t) || i.push(z[t]);
                return i
            };
        B || (a((L = function() {
            if (this instanceof L) throw TypeError("Symbol is not a constructor!");
            var e = h(arguments.length > 0 ? arguments[0] : void 0),
                t = function(r) {
                    this === I && t.call(k, r), o(this, T) && o(this[T], e) && (this[T][e] = !1), R(this, e, S(1, r))
                };
            return i && $ && R(I, e, {
                configurable: !0,
                set: t
            }), H(e)
        }).prototype, "toString", (function() {
            return this._k
        })), C.f = K, w.f = W, r(53).f = M.f = J, r(19).f = G, r(31).f = Z, i && !r(21) && a(I, "propertyIsEnumerable", G, !0), f.f = function(e) {
            return H(g(e))
        }), s(s.G + s.W + s.F * !B, {
            Symbol: L
        });
        for (var Q = "hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables".split(","), ee = 0; Q.length > ee;) g(Q[ee++]);
        for (var te = P(g.store), re = 0; te.length > re;) p(te[re++]);
        s(s.S + s.F * !B, "Symbol", {
            for: function(e) {
                return o(N, e += "") ? N[e] : N[e] = L(e)
            },
            keyFor: function(e) {
                if (!U(e)) throw TypeError(e + " is not a symbol!");
                for (var t in N)
                    if (N[t] === e) return t
            },
            useSetter: function() {
                $ = !0
            },
            useSimple: function() {
                $ = !1
            }
        }), s(s.S + s.F * !B, "Object", {
            create: function(e, t) {
                return void 0 === t ? _(e) : V(_(e), t)
            },
            defineProperty: W,
            defineProperties: V,
            getOwnPropertyDescriptor: K,
            getOwnPropertyNames: J,
            getOwnPropertySymbols: Z
        }), F && s(s.S + s.F * (!B || c((function() {
            var e = L();
            return "[null]" != A([e]) || "{}" != A({
                a: e
            }) || "{}" != A(Object(e))
        }))), "JSON", {
            stringify: function(e) {
                for (var t, r, n = [e], o = 1; arguments.length > o;) n.push(arguments[o++]);
                if (r = t = n[1], (y(t) || void 0 !== e) && !U(e)) return m(t) || (t = function(e, t) {
                    if ("function" == typeof r && (t = r.call(this, e, t)), !U(t)) return t
                }), n[1] = t, A.apply(F, n)
            }
        }), L.prototype[Y] || r(10)(L.prototype, Y, L.prototype.valueOf), d(L, "Symbol"), d(Math, "Math", !0), d(n.JSON, "JSON", !0)
    }, function(e, t, r) {
        r(152), r(52), e.exports = r(2).Symbol
    }, function(e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.Plugins = t.Sensors = t.Sortable = t.Swappable = t.Droppable = t.Draggable = t.BasePlugin = t.BaseEvent = void 0, r(153), r(143), r(120), r(117), r(114);
        var n = h(r(3)),
            o = h(r(4)),
            i = d(r(29)),
            s = d(r(96)),
            a = h(r(24)),
            l = h(r(70)),
            c = h(r(67)),
            u = h(r(64));

        function d(e) {
            if (e && e.__esModule) return e;
            var t = {};
            if (null != e)
                for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && (t[r] = e[r]);
            return t.default = e, t
        }

        function h(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        t.BaseEvent = n.default, t.BasePlugin = o.default, t.Draggable = a.default, t.Droppable = l.default, t.Swappable = c.default, t.Sortable = u.default, t.Sensors = i, t.Plugins = s
    }])
})),
function(e, t) {
    "object" == typeof exports && "object" == typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define("Draggable", [], t) : "object" == typeof exports ? exports.Draggable = t() : e.Draggable = t()
}(window, (function() {
    return function(e) {
        var t = {};

        function r(n) {
            if (t[n]) return t[n].exports;
            var o = t[n] = {
                i: n,
                l: !1,
                exports: {}
            };
            return e[n].call(o.exports, o, o.exports, r), o.l = !0, o.exports
        }
        return r.m = e, r.c = t, r.d = function(e, t, n) {
            r.o(e, t) || Object.defineProperty(e, t, {
                enumerable: !0,
                get: n
            })
        }, r.r = function(e) {
            "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
                value: "Module"
            }), Object.defineProperty(e, "__esModule", {
                value: !0
            })
        }, r.t = function(e, t) {
            if (1 & t && (e = r(e)), 8 & t) return e;
            if (4 & t && "object" == typeof e && e && e.__esModule) return e;
            var n = Object.create(null);
            if (r.r(n), Object.defineProperty(n, "default", {
                    enumerable: !0,
                    value: e
                }), 2 & t && "string" != typeof e)
                for (var o in e) r.d(n, o, function(t) {
                    return e[t]
                }.bind(null, o));
            return n
        }, r.n = function(e) {
            var t = e && e.__esModule ? function() {
                return e.default
            } : function() {
                return e
            };
            return r.d(t, "a", t), t
        }, r.o = function(e, t) {
            return Object.prototype.hasOwnProperty.call(e, t)
        }, r.p = "", r(r.s = 40)
    }([function(e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var n = r(18);
        Object.keys(n).forEach((function(e) {
            "default" !== e && "__esModule" !== e && Object.defineProperty(t, e, {
                enumerable: !0,
                get: function() {
                    return n[e]
                }
            })
        }))
    }, function(e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var n, o = r(21),
            i = (n = o) && n.__esModule ? n : {
                default: n
            };
        t.default = i.default
    }, function(e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var n = r(25);
        Object.defineProperty(t, "closest", {
            enumerable: !0,
            get: function() {
                return i(n).default
            }
        });
        var o = r(23);

        function i(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        Object.defineProperty(t, "requestNextAnimationFrame", {
            enumerable: !0,
            get: function() {
                return i(o).default
            }
        })
    }, function(e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var n, o = r(34),
            i = (n = o) && n.__esModule ? n : {
                default: n
            };
        t.default = i.default
    }, function(e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var n, o = r(38),
            i = (n = o) && n.__esModule ? n : {
                default: n
            };
        t.default = i.default
    }, function(e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var n = r(1);
        Object.defineProperty(t, "Sensor", {
            enumerable: !0,
            get: function() {
                return c(n).default
            }
        });
        var o = r(20);
        Object.defineProperty(t, "MouseSensor", {
            enumerable: !0,
            get: function() {
                return c(o).default
            }
        });
        var i = r(17);
        Object.defineProperty(t, "TouchSensor", {
            enumerable: !0,
            get: function() {
                return c(i).default
            }
        });
        var s = r(15);
        Object.defineProperty(t, "DragSensor", {
            enumerable: !0,
            get: function() {
                return c(s).default
            }
        });
        var a = r(13);
        Object.defineProperty(t, "ForceTouchSensor", {
            enumerable: !0,
            get: function() {
                return c(a).default
            }
        });
        var l = r(0);

        function c(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        Object.keys(l).forEach((function(e) {
            "default" !== e && "__esModule" !== e && Object.defineProperty(t, e, {
                enumerable: !0,
                get: function() {
                    return l[e]
                }
            })
        }))
    }, function(e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var n = r(36);
        Object.defineProperty(t, "Announcement", {
            enumerable: !0,
            get: function() {
                return a(n).default
            }
        }), Object.defineProperty(t, "defaultAnnouncementOptions", {
            enumerable: !0,
            get: function() {
                return n.defaultOptions
            }
        });
        var o = r(33);
        Object.defineProperty(t, "Focusable", {
            enumerable: !0,
            get: function() {
                return a(o).default
            }
        });
        var i = r(31);
        Object.defineProperty(t, "Mirror", {
            enumerable: !0,
            get: function() {
                return a(i).default
            }
        }), Object.defineProperty(t, "defaultMirrorOptions", {
            enumerable: !0,
            get: function() {
                return i.defaultOptions
            }
        });
        var s = r(27);

        function a(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        Object.defineProperty(t, "Scrollable", {
            enumerable: !0,
            get: function() {
                return a(s).default
            }
        }), Object.defineProperty(t, "defaultScrollableOptions", {
            enumerable: !0,
            get: function() {
                return s.defaultOptions
            }
        })
    }, function(e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var n = r(37);
        Object.keys(n).forEach((function(e) {
            "default" !== e && "__esModule" !== e && Object.defineProperty(t, e, {
                enumerable: !0,
                get: function() {
                    return n[e]
                }
            })
        }))
    }, function(e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var n = r(39);
        Object.keys(n).forEach((function(e) {
            "default" !== e && "__esModule" !== e && Object.defineProperty(t, e, {
                enumerable: !0,
                get: function() {
                    return n[e]
                }
            })
        }))
    }, function(e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        t.default = class {
            constructor() {
                this.callbacks = {}
            }
            on(e, ...t) {
                return this.callbacks[e] || (this.callbacks[e] = []), this.callbacks[e].push(...t), this
            }
            off(e, t) {
                if (!this.callbacks[e]) return null;
                const r = this.callbacks[e].slice(0);
                for (let n = 0; n < r.length; n++) t === r[n] && this.callbacks[e].splice(n, 1);
                return this
            }
            trigger(e) {
                if (!this.callbacks[e.type]) return null;
                const t = [...this.callbacks[e.type]],
                    r = [];
                for (let n = t.length - 1; n >= 0; n--) {
                    const o = t[n];
                    try {
                        o(e)
                    } catch (e) {
                        r.push(e)
                    }
                }
                return r.length && console.error(`Draggable caught errors while triggering '${e.type}'`, r), this
            }
        }
    }, function(e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var n, o = r(9),
            i = (n = o) && n.__esModule ? n : {
                default: n
            };
        t.default = i.default
    }, function(e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.defaultOptions = void 0;
        var n, o = Object.assign || function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var r = arguments[t];
                    for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
                }
                return e
            },
            i = r(2),
            s = r(6),
            a = r(10),
            l = (n = a) && n.__esModule ? n : {
                default: n
            },
            c = r(5),
            u = r(7),
            d = r(8);
        const h = Symbol("onDragStart"),
            g = Symbol("onDragMove"),
            f = Symbol("onDragStop"),
            p = Symbol("onDragPressure"),
            v = {
                "drag:start": e => `Picked up ${e.source.textContent.trim()||e.source.id||"draggable element"}`,
                "drag:stop": e => `Released ${e.source.textContent.trim()||e.source.id||"draggable element"}`
            },
            m = {
                "container:dragging": "draggable-container--is-dragging",
                "source:dragging": "draggable-source--is-dragging",
                "source:placed": "draggable-source--placed",
                "container:placed": "draggable-container--placed",
                "body:dragging": "draggable--is-dragging",
                "draggable:over": "draggable--over",
                "container:over": "draggable-container--over",
                "source:original": "draggable--original",
                mirror: "draggable-mirror"
            },
            b = t.defaultOptions = {
                draggable: ".draggable-source",
                handle: null,
                delay: 100,
                placedTimeout: 800,
                plugins: [],
                sensors: []
            };
        class y {
            constructor(e = [document.body], t = {}) {
                if (e instanceof NodeList || e instanceof Array) this.containers = [...e];
                else {
                    if (!(e instanceof HTMLElement)) throw new Error("Draggable containers are expected to be of type `NodeList`, `HTMLElement[]` or `HTMLElement`");
                    this.containers = [e]
                }
                this.options = o({}, b, t, {
                    classes: o({}, m, t.classes || {}),
                    announcements: o({}, v, t.announcements || {})
                }), this.emitter = new l.default, this.dragging = !1, this.plugins = [], this.sensors = [], this[h] = this[h].bind(this), this[g] = this[g].bind(this), this[f] = this[f].bind(this), this[p] = this[p].bind(this), document.addEventListener("drag:start", this[h], !0), document.addEventListener("drag:move", this[g], !0), document.addEventListener("drag:stop", this[f], !0), document.addEventListener("drag:pressure", this[p], !0);
                const r = Object.values(y.Plugins).map((e => e)),
                    n = [c.MouseSensor, c.TouchSensor];
                this.addPlugin(...r, ...this.options.plugins), this.addSensor(...n, ...this.options.sensors);
                const i = new u.DraggableInitializedEvent({
                    draggable: this
                });
                this.on("mirror:created", (({
                    mirror: e
                }) => this.mirror = e)), this.on("mirror:destroy", (() => this.mirror = null)), this.trigger(i)
            }
            destroy() {
                document.removeEventListener("drag:start", this[h], !0), document.removeEventListener("drag:move", this[g], !0), document.removeEventListener("drag:stop", this[f], !0), document.removeEventListener("drag:pressure", this[p], !0);
                const e = new u.DraggableDestroyEvent({
                    draggable: this
                });
                this.trigger(e), this.removePlugin(...this.plugins.map((e => e.constructor))), this.removeSensor(...this.sensors.map((e => e.constructor)))
            }
            addPlugin(...e) {
                const t = e.map((e => new e(this)));
                return t.forEach((e => e.attach())), this.plugins = [...this.plugins, ...t], this
            }
            removePlugin(...e) {
                return this.plugins.filter((t => e.includes(t.constructor))).forEach((e => e.detach())), this.plugins = this.plugins.filter((t => !e.includes(t.constructor))), this
            }
            addSensor(...e) {
                const t = e.map((e => new e(this.containers, this.options)));
                return t.forEach((e => e.attach())), this.sensors = [...this.sensors, ...t], this
            }
            removeSensor(...e) {
                return this.sensors.filter((t => e.includes(t.constructor))).forEach((e => e.detach())), this.sensors = this.sensors.filter((t => !e.includes(t.constructor))), this
            }
            addContainer(...e) {
                return this.containers = [...this.containers, ...e], this.sensors.forEach((t => t.addContainer(...e))), this
            }
            removeContainer(...e) {
                return this.containers = this.containers.filter((t => !e.includes(t))), this.sensors.forEach((t => t.removeContainer(...e))), this
            }
            on(e, ...t) {
                return this.emitter.on(e, ...t), this
            }
            off(e, t) {
                return this.emitter.off(e, t), this
            }
            trigger(e) {
                return this.emitter.trigger(e), this
            }
            getClassNameFor(e) {
                return this.options.classes[e]
            }
            isDragging() {
                return Boolean(this.dragging)
            }
            getDraggableElements() {
                return this.containers.reduce(((e, t) => [...e, ...this.getDraggableElementsForContainer(t)]), [])
            }
            getDraggableElementsForContainer(e) {
                return [...e.querySelectorAll(this.options.draggable)].filter((e => e !== this.originalSource && e !== this.mirror))
            }[h](e) {
                const t = E(e),
                    {
                        target: r,
                        container: n
                    } = t;
                if (!this.containers.includes(n)) return;
                if (this.options.handle && r && !(0, i.closest)(r, this.options.handle)) return void t.cancel();
                if (this.originalSource = (0, i.closest)(r, this.options.draggable), this.sourceContainer = n, !this.originalSource) return void t.cancel();
                this.lastPlacedSource && this.lastPlacedContainer && (clearTimeout(this.placedTimeoutID), this.lastPlacedSource.classList.remove(this.getClassNameFor("source:placed")), this.lastPlacedContainer.classList.remove(this.getClassNameFor("container:placed"))), this.source = this.originalSource.cloneNode(!0), this.originalSource.parentNode.insertBefore(this.source, this.originalSource), this.originalSource.style.display = "none";
                const s = new d.DragStartEvent({
                    source: this.source,
                    originalSource: this.originalSource,
                    sourceContainer: n,
                    sensorEvent: t
                });
                if (this.trigger(s), this.dragging = !s.canceled(), s.canceled()) return this.source.parentNode.removeChild(this.source), void(this.originalSource.style.display = null);
                this.originalSource.classList.add(this.getClassNameFor("source:original")), this.source.classList.add(this.getClassNameFor("source:dragging")), this.sourceContainer.classList.add(this.getClassNameFor("container:dragging")), document.body.classList.add(this.getClassNameFor("body:dragging")), O(document.body, "none"), requestAnimationFrame((() => {
                    const t = E(e).clone({
                        target: this.source
                    });
                    this[g](o({}, e, {
                        detail: t
                    }))
                }))
            }[g](e) {
                if (!this.dragging) return;
                const t = E(e),
                    {
                        container: r
                    } = t;
                let n = t.target;
                const o = new d.DragMoveEvent({
                    source: this.source,
                    originalSource: this.originalSource,
                    sourceContainer: r,
                    sensorEvent: t
                });
                this.trigger(o), o.canceled() && t.cancel(), n = (0, i.closest)(n, this.options.draggable);
                const s = (0, i.closest)(t.target, this.containers),
                    a = t.overContainer || s,
                    l = this.currentOverContainer && a !== this.currentOverContainer,
                    c = this.currentOver && n !== this.currentOver,
                    u = a && this.currentOverContainer !== a,
                    h = s && n && this.currentOver !== n;
                if (c) {
                    const e = new d.DragOutEvent({
                        source: this.source,
                        originalSource: this.originalSource,
                        sourceContainer: r,
                        sensorEvent: t,
                        over: this.currentOver
                    });
                    this.currentOver.classList.remove(this.getClassNameFor("draggable:over")), this.currentOver = null, this.trigger(e)
                }
                if (l) {
                    const e = new d.DragOutContainerEvent({
                        source: this.source,
                        originalSource: this.originalSource,
                        sourceContainer: r,
                        sensorEvent: t,
                        overContainer: this.currentOverContainer
                    });
                    this.currentOverContainer.classList.remove(this.getClassNameFor("container:over")), this.currentOverContainer = null, this.trigger(e)
                }
                if (u) {
                    a.classList.add(this.getClassNameFor("container:over"));
                    const e = new d.DragOverContainerEvent({
                        source: this.source,
                        originalSource: this.originalSource,
                        sourceContainer: r,
                        sensorEvent: t,
                        overContainer: a
                    });
                    this.currentOverContainer = a, this.trigger(e)
                }
                if (h) {
                    n.classList.add(this.getClassNameFor("draggable:over"));
                    const e = new d.DragOverEvent({
                        source: this.source,
                        originalSource: this.originalSource,
                        sourceContainer: r,
                        sensorEvent: t,
                        overContainer: a,
                        over: n
                    });
                    this.currentOver = n, this.trigger(e)
                }
            }[f](e) {
                if (!this.dragging) return;
                this.dragging = !1;
                const t = new d.DragStopEvent({
                    source: this.source,
                    originalSource: this.originalSource,
                    sensorEvent: e.sensorEvent,
                    sourceContainer: this.sourceContainer
                });
                this.trigger(t), this.source.parentNode.insertBefore(this.originalSource, this.source), this.source.parentNode.removeChild(this.source), this.originalSource.style.display = "", this.source.classList.remove(this.getClassNameFor("source:dragging")), this.originalSource.classList.remove(this.getClassNameFor("source:original")), this.originalSource.classList.add(this.getClassNameFor("source:placed")), this.sourceContainer.classList.add(this.getClassNameFor("container:placed")), this.sourceContainer.classList.remove(this.getClassNameFor("container:dragging")), document.body.classList.remove(this.getClassNameFor("body:dragging")), O(document.body, ""), this.currentOver && this.currentOver.classList.remove(this.getClassNameFor("draggable:over")), this.currentOverContainer && this.currentOverContainer.classList.remove(this.getClassNameFor("container:over")), this.lastPlacedSource = this.originalSource, this.lastPlacedContainer = this.sourceContainer, this.placedTimeoutID = setTimeout((() => {
                    this.lastPlacedSource && this.lastPlacedSource.classList.remove(this.getClassNameFor("source:placed")), this.lastPlacedContainer && this.lastPlacedContainer.classList.remove(this.getClassNameFor("container:placed")), this.lastPlacedSource = null, this.lastPlacedContainer = null
                }), this.options.placedTimeout), this.source = null, this.originalSource = null, this.currentOverContainer = null, this.currentOver = null, this.sourceContainer = null
            }[p](e) {
                if (!this.dragging) return;
                const t = E(e),
                    r = this.source || (0, i.closest)(t.originalEvent.target, this.options.draggable),
                    n = new d.DragPressureEvent({
                        sensorEvent: t,
                        source: r,
                        pressure: t.pressure
                    });
                this.trigger(n)
            }
        }

        function E(e) {
            return e.detail
        }

        function O(e, t) {
            e.style.webkitUserSelect = t, e.style.mozUserSelect = t, e.style.msUserSelect = t, e.style.oUserSelect = t, e.style.userSelect = t
        }
        t.default = y, y.Plugins = {
            Announcement: s.Announcement,
            Focusable: s.Focusable,
            Mirror: s.Mirror,
            Scrollable: s.Scrollable
        }
    }, function(e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var n, o = r(1),
            i = (n = o) && n.__esModule ? n : {
                default: n
            },
            s = r(0);
        const a = Symbol("onMouseForceWillBegin"),
            l = Symbol("onMouseForceDown"),
            c = Symbol("onMouseDown"),
            u = Symbol("onMouseForceChange"),
            d = Symbol("onMouseMove"),
            h = Symbol("onMouseUp"),
            g = Symbol("onMouseForceGlobalChange");
        class f extends i.default {
            constructor(e = [], t = {}) {
                super(e, t), this.mightDrag = !1, this[a] = this[a].bind(this), this[l] = this[l].bind(this), this[c] = this[c].bind(this), this[u] = this[u].bind(this), this[d] = this[d].bind(this), this[h] = this[h].bind(this)
            }
            attach() {
                for (const e of this.containers) e.addEventListener("webkitmouseforcewillbegin", this[a], !1), e.addEventListener("webkitmouseforcedown", this[l], !1), e.addEventListener("mousedown", this[c], !0), e.addEventListener("webkitmouseforcechanged", this[u], !1);
                document.addEventListener("mousemove", this[d]), document.addEventListener("mouseup", this[h])
            }
            detach() {
                for (const e of this.containers) e.removeEventListener("webkitmouseforcewillbegin", this[a], !1), e.removeEventListener("webkitmouseforcedown", this[l], !1), e.removeEventListener("mousedown", this[c], !0), e.removeEventListener("webkitmouseforcechanged", this[u], !1);
                document.removeEventListener("mousemove", this[d]), document.removeEventListener("mouseup", this[h])
            }[a](e) {
                e.preventDefault(), this.mightDrag = !0
            }[l](e) {
                if (this.dragging) return;
                const t = document.elementFromPoint(e.clientX, e.clientY),
                    r = e.currentTarget,
                    n = new s.DragStartSensorEvent({
                        clientX: e.clientX,
                        clientY: e.clientY,
                        target: t,
                        container: r,
                        originalEvent: e
                    });
                this.trigger(r, n), this.currentContainer = r, this.dragging = !n.canceled(), this.mightDrag = !1
            }[h](e) {
                if (!this.dragging) return;
                const t = new s.DragStopSensorEvent({
                    clientX: e.clientX,
                    clientY: e.clientY,
                    target: null,
                    container: this.currentContainer,
                    originalEvent: e
                });
                this.trigger(this.currentContainer, t), this.currentContainer = null, this.dragging = !1, this.mightDrag = !1
            }[c](e) {
                this.mightDrag && (e.stopPropagation(), e.stopImmediatePropagation(), e.preventDefault())
            }[d](e) {
                if (!this.dragging) return;
                const t = document.elementFromPoint(e.clientX, e.clientY),
                    r = new s.DragMoveSensorEvent({
                        clientX: e.clientX,
                        clientY: e.clientY,
                        target: t,
                        container: this.currentContainer,
                        originalEvent: e
                    });
                this.trigger(this.currentContainer, r)
            }[u](e) {
                if (this.dragging) return;
                const t = e.target,
                    r = e.currentTarget,
                    n = new s.DragPressureSensorEvent({
                        pressure: e.webkitForce,
                        clientX: e.clientX,
                        clientY: e.clientY,
                        target: t,
                        container: r,
                        originalEvent: e
                    });
                this.trigger(r, n)
            }[g](e) {
                if (!this.dragging) return;
                const t = e.target,
                    r = new s.DragPressureSensorEvent({
                        pressure: e.webkitForce,
                        clientX: e.clientX,
                        clientY: e.clientY,
                        target: t,
                        container: this.currentContainer,
                        originalEvent: e
                    });
                this.trigger(this.currentContainer, r)
            }
        }
        t.default = f
    }, function(e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var n, o = r(12),
            i = (n = o) && n.__esModule ? n : {
                default: n
            };
        t.default = i.default
    }, function(e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var n, o = r(2),
            i = r(1),
            s = (n = i) && n.__esModule ? n : {
                default: n
            },
            a = r(0);
        const l = Symbol("onMouseDown"),
            c = Symbol("onMouseUp"),
            u = Symbol("onDragStart"),
            d = Symbol("onDragOver"),
            h = Symbol("onDragEnd"),
            g = Symbol("onDrop"),
            f = Symbol("reset");
        class p extends s.default {
            constructor(e = [], t = {}) {
                super(e, t), this.mouseDownTimeout = null, this.draggableElement = null, this.nativeDraggableElement = null, this[l] = this[l].bind(this), this[c] = this[c].bind(this), this[u] = this[u].bind(this), this[d] = this[d].bind(this), this[h] = this[h].bind(this), this[g] = this[g].bind(this)
            }
            attach() {
                document.addEventListener("mousedown", this[l], !0)
            }
            detach() {
                document.removeEventListener("mousedown", this[l], !0)
            }[u](e) {
                e.dataTransfer.setData("text", ""), e.dataTransfer.effectAllowed = this.options.type;
                const t = document.elementFromPoint(e.clientX, e.clientY);
                if (this.currentContainer = (0, o.closest)(e.target, this.containers), !this.currentContainer) return;
                const r = new a.DragStartSensorEvent({
                    clientX: e.clientX,
                    clientY: e.clientY,
                    target: t,
                    container: this.currentContainer,
                    originalEvent: e
                });
                setTimeout((() => {
                    this.trigger(this.currentContainer, r), r.canceled() ? this.dragging = !1 : this.dragging = !0
                }), 0)
            }[d](e) {
                if (!this.dragging) return;
                const t = document.elementFromPoint(e.clientX, e.clientY),
                    r = this.currentContainer,
                    n = new a.DragMoveSensorEvent({
                        clientX: e.clientX,
                        clientY: e.clientY,
                        target: t,
                        container: r,
                        originalEvent: e
                    });
                this.trigger(r, n), n.canceled() || (e.preventDefault(), e.dataTransfer.dropEffect = this.options.type)
            }[h](e) {
                if (!this.dragging) return;
                document.removeEventListener("mouseup", this[c], !0);
                const t = document.elementFromPoint(e.clientX, e.clientY),
                    r = this.currentContainer,
                    n = new a.DragStopSensorEvent({
                        clientX: e.clientX,
                        clientY: e.clientY,
                        target: t,
                        container: r,
                        originalEvent: e
                    });
                this.trigger(r, n), this.dragging = !1, this[f]()
            }[g](e) {
                e.preventDefault()
            }[l](e) {
                if (e.target && (e.target.form || e.target.contenteditable)) return;
                const t = (0, o.closest)(e.target, (e => e.draggable));
                t && (t.draggable = !1, this.nativeDraggableElement = t), document.addEventListener("mouseup", this[c], !0), document.addEventListener("dragstart", this[u], !1), document.addEventListener("dragover", this[d], !1), document.addEventListener("dragend", this[h], !1), document.addEventListener("drop", this[g], !1);
                const r = (0, o.closest)(e.target, this.options.draggable);
                r && (this.mouseDownTimeout = setTimeout((() => {
                    r.draggable = !0, this.draggableElement = r
                }), this.options.delay))
            }[c]() {
                this[f]()
            }[f]() {
                clearTimeout(this.mouseDownTimeout), document.removeEventListener("mouseup", this[c], !0), document.removeEventListener("dragstart", this[u], !1), document.removeEventListener("dragover", this[d], !1), document.removeEventListener("dragend", this[h], !1), document.removeEventListener("drop", this[g], !1), this.nativeDraggableElement && (this.nativeDraggableElement.draggable = !0, this.nativeDraggableElement = null), this.draggableElement && (this.draggableElement.draggable = !1, this.draggableElement = null)
            }
        }
        t.default = p
    }, function(e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var n, o = r(14),
            i = (n = o) && n.__esModule ? n : {
                default: n
            };
        t.default = i.default
    }, function(e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var n, o = r(2),
            i = r(1),
            s = (n = i) && n.__esModule ? n : {
                default: n
            },
            a = r(0);
        const l = Symbol("onTouchStart"),
            c = Symbol("onTouchHold"),
            u = Symbol("onTouchEnd"),
            d = Symbol("onTouchMove");
        let h = !1;
        window.addEventListener("touchmove", (e => {
            h && e.preventDefault()
        }), {
            passive: !1
        });
        class g extends s.default {
            constructor(e = [], t = {}) {
                super(e, t), this.currentScrollableParent = null, this.tapTimeout = null, this.touchMoved = !1, this[l] = this[l].bind(this), this[c] = this[c].bind(this), this[u] = this[u].bind(this), this[d] = this[d].bind(this)
            }
            attach() {
                document.addEventListener("touchstart", this[l])
            }
            detach() {
                document.removeEventListener("touchstart", this[l])
            }[l](e) {
                const t = (0, o.closest)(e.target, this.containers);
                t && (document.addEventListener("touchmove", this[d]), document.addEventListener("touchend", this[u]), document.addEventListener("touchcancel", this[u]), t.addEventListener("contextmenu", f), this.currentContainer = t, this.tapTimeout = setTimeout(this[c](e, t), this.options.delay))
            }[c](e, t) {
                return () => {
                    if (this.touchMoved) return;
                    const r = e.touches[0] || e.changedTouches[0],
                        n = e.target,
                        o = new a.DragStartSensorEvent({
                            clientX: r.pageX,
                            clientY: r.pageY,
                            target: n,
                            container: t,
                            originalEvent: e
                        });
                    this.trigger(t, o), this.dragging = !o.canceled(), h = this.dragging
                }
            }[d](e) {
                if (this.touchMoved = !0, !this.dragging) return;
                const t = e.touches[0] || e.changedTouches[0],
                    r = document.elementFromPoint(t.pageX - window.scrollX, t.pageY - window.scrollY),
                    n = new a.DragMoveSensorEvent({
                        clientX: t.pageX,
                        clientY: t.pageY,
                        target: r,
                        container: this.currentContainer,
                        originalEvent: e
                    });
                this.trigger(this.currentContainer, n)
            }[u](e) {
                if (this.touchMoved = !1, h = !1, document.removeEventListener("touchend", this[u]), document.removeEventListener("touchcancel", this[u]), document.removeEventListener("touchmove", this[d]), this.currentContainer && this.currentContainer.removeEventListener("contextmenu", f), clearTimeout(this.tapTimeout), !this.dragging) return;
                const t = e.touches[0] || e.changedTouches[0],
                    r = document.elementFromPoint(t.pageX - window.scrollX, t.pageY - window.scrollY);
                e.preventDefault();
                const n = new a.DragStopSensorEvent({
                    clientX: t.pageX,
                    clientY: t.pageY,
                    target: r,
                    container: this.currentContainer,
                    originalEvent: e
                });
                this.trigger(this.currentContainer, n), this.currentContainer = null, this.dragging = !1
            }
        }

        function f(e) {
            e.preventDefault(), e.stopPropagation()
        }
        t.default = g
    }, function(e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var n, o = r(16),
            i = (n = o) && n.__esModule ? n : {
                default: n
            };
        t.default = i.default
    }, function(e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.DragPressureSensorEvent = t.DragStopSensorEvent = t.DragMoveSensorEvent = t.DragStartSensorEvent = t.SensorEvent = void 0;
        var n, o = r(4),
            i = (n = o) && n.__esModule ? n : {
                default: n
            };
        class s extends i.default {
            get originalEvent() {
                return this.data.originalEvent
            }
            get clientX() {
                return this.data.clientX
            }
            get clientY() {
                return this.data.clientY
            }
            get target() {
                return this.data.target
            }
            get container() {
                return this.data.container
            }
            get pressure() {
                return this.data.pressure
            }
        }
        t.SensorEvent = s;
        class a extends s {}
        t.DragStartSensorEvent = a, a.type = "drag:start";
        class l extends s {}
        t.DragMoveSensorEvent = l, l.type = "drag:move";
        class c extends s {}
        t.DragStopSensorEvent = c, c.type = "drag:stop";
        class u extends s {}
        t.DragPressureSensorEvent = u, u.type = "drag:pressure"
    }, function(e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var n, o = r(2),
            i = r(1),
            s = (n = i) && n.__esModule ? n : {
                default: n
            },
            a = r(0);
        const l = Symbol("onContextMenuWhileDragging"),
            c = Symbol("onMouseDown"),
            u = Symbol("onMouseMove"),
            d = Symbol("onMouseUp");
        class h extends s.default {
            constructor(e = [], t = {}) {
                super(e, t), this.mouseDown = !1, this.mouseDownTimeout = null, this.openedContextMenu = !1, this[l] = this[l].bind(this), this[c] = this[c].bind(this), this[u] = this[u].bind(this), this[d] = this[d].bind(this)
            }
            attach() {
                document.addEventListener("mousedown", this[c], !0)
            }
            detach() {
                document.removeEventListener("mousedown", this[c], !0)
            }[c](e) {
                if (0 !== e.button || e.ctrlKey || e.metaKey) return;
                document.addEventListener("mouseup", this[d]);
                const t = document.elementFromPoint(e.clientX, e.clientY),
                    r = (0, o.closest)(t, this.containers);
                r && (document.addEventListener("dragstart", g), this.mouseDown = !0, clearTimeout(this.mouseDownTimeout), this.mouseDownTimeout = setTimeout((() => {
                    if (!this.mouseDown) return;
                    const n = new a.DragStartSensorEvent({
                        clientX: e.clientX,
                        clientY: e.clientY,
                        target: t,
                        container: r,
                        originalEvent: e
                    });
                    this.trigger(r, n), this.currentContainer = r, this.dragging = !n.canceled(), this.dragging && (document.addEventListener("contextmenu", this[l]), document.addEventListener("mousemove", this[u]))
                }), this.options.delay))
            }[u](e) {
                if (!this.dragging) return;
                const t = document.elementFromPoint(e.clientX, e.clientY),
                    r = new a.DragMoveSensorEvent({
                        clientX: e.clientX,
                        clientY: e.clientY,
                        target: t,
                        container: this.currentContainer,
                        originalEvent: e
                    });
                this.trigger(this.currentContainer, r)
            }[d](e) {
                if (this.mouseDown = Boolean(this.openedContextMenu), this.openedContextMenu) return void(this.openedContextMenu = !1);
                if (document.removeEventListener("mouseup", this[d]), document.removeEventListener("dragstart", g), !this.dragging) return;
                const t = document.elementFromPoint(e.clientX, e.clientY),
                    r = new a.DragStopSensorEvent({
                        clientX: e.clientX,
                        clientY: e.clientY,
                        target: t,
                        container: this.currentContainer,
                        originalEvent: e
                    });
                this.trigger(this.currentContainer, r), document.removeEventListener("contextmenu", this[l]), document.removeEventListener("mousemove", this[u]), this.currentContainer = null, this.dragging = !1
            }[l](e) {
                e.preventDefault(), this.openedContextMenu = !0
            }
        }

        function g(e) {
            e.preventDefault()
        }
        t.default = h
    }, function(e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var n, o = r(19),
            i = (n = o) && n.__esModule ? n : {
                default: n
            };
        t.default = i.default
    }, function(e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var n = Object.assign || function(e) {
            for (var t = 1; t < arguments.length; t++) {
                var r = arguments[t];
                for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
            }
            return e
        };
        t.default = class {
            constructor(e = [], t = {}) {
                this.containers = [...e], this.options = n({}, t), this.dragging = !1, this.currentContainer = null
            }
            attach() {
                return this
            }
            detach() {
                return this
            }
            addContainer(...e) {
                this.containers = [...this.containers, ...e]
            }
            removeContainer(...e) {
                this.containers = this.containers.filter((t => !e.includes(t)))
            }
            trigger(e, t) {
                const r = document.createEvent("Event");
                return r.detail = t, r.initEvent(t.type, !0, !0), e.dispatchEvent(r), this.lastEvent = t, t
            }
        }
    }, function(e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.default = function(e) {
            return requestAnimationFrame((() => {
                requestAnimationFrame(e)
            }))
        }
    }, function(e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var n, o = r(22),
            i = (n = o) && n.__esModule ? n : {
                default: n
            };
        t.default = i.default
    }, function(e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.default = function(e, t) {
            if (!e) return null;
            const r = t,
                o = t,
                i = t,
                s = t,
                a = Boolean("string" == typeof t),
                l = Boolean("function" == typeof t),
                c = Boolean(t instanceof NodeList || t instanceof Array),
                u = Boolean(t instanceof HTMLElement);
            let d = e;
            do {
                if (d = d.correspondingUseElement || d.correspondingElement || d, (h = d) ? a ? n.call(h, r) : c ? [...i].includes(h) : u ? s === h : l && o(h) : h) return d;
                d = d.parentNode
            } while (d && d !== document.body && d !== document);
            var h;
            return null
        };
        const n = Element.prototype.matches || Element.prototype.webkitMatchesSelector || Element.prototype.mozMatchesSelector || Element.prototype.msMatchesSelector
    }, function(e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var n, o = r(24),
            i = (n = o) && n.__esModule ? n : {
                default: n
            };
        t.default = i.default
    }, function(e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.defaultOptions = t.scroll = t.onDragStop = t.onDragMove = t.onDragStart = void 0;
        var n, o = Object.assign || function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var r = arguments[t];
                    for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
                }
                return e
            },
            i = r(3),
            s = (n = i) && n.__esModule ? n : {
                default: n
            },
            a = r(2);
        const l = t.onDragStart = Symbol("onDragStart"),
            c = t.onDragMove = Symbol("onDragMove"),
            u = t.onDragStop = Symbol("onDragStop"),
            d = t.scroll = Symbol("scroll"),
            h = t.defaultOptions = {
                speed: 6,
                sensitivity: 50,
                scrollableElements: []
            };
        class g extends s.default {
            constructor(e) {
                super(e), this.options = o({}, h, this.getOptions()), this.currentMousePosition = null, this.scrollAnimationFrame = null, this.scrollableElement = null, this.findScrollableElementFrame = null, this[l] = this[l].bind(this), this[c] = this[c].bind(this), this[u] = this[u].bind(this), this[d] = this[d].bind(this)
            }
            attach() {
                this.draggable.on("drag:start", this[l]).on("drag:move", this[c]).on("drag:stop", this[u])
            }
            detach() {
                this.draggable.off("drag:start", this[l]).off("drag:move", this[c]).off("drag:stop", this[u])
            }
            getOptions() {
                return this.draggable.options.scrollable || {}
            }
            getScrollableElement(e) {
                return this.hasDefinedScrollableElements() ? (0, a.closest)(e, this.options.scrollableElements) || document.documentElement : function(e) {
                    if (!e) return f();
                    const t = getComputedStyle(e).getPropertyValue("position"),
                        r = "absolute" === t,
                        n = (0, a.closest)(e, (e => (!r || ! function(e) {
                            return "static" === getComputedStyle(e).getPropertyValue("position")
                        }(e)) && function(e) {
                            const t = /(auto|scroll)/,
                                r = getComputedStyle(e, null),
                                n = r.getPropertyValue("overflow") + r.getPropertyValue("overflow-y") + r.getPropertyValue("overflow-x");
                            return t.test(n)
                        }(e)));
                    return "fixed" !== t && n ? n : f()
                }(e)
            }
            hasDefinedScrollableElements() {
                return Boolean(0 !== this.options.scrollableElements.length)
            }[l](e) {
                this.findScrollableElementFrame = requestAnimationFrame((() => {
                    this.scrollableElement = this.getScrollableElement(e.source)
                }))
            }[c](e) {
                if (this.findScrollableElementFrame = requestAnimationFrame((() => {
                        this.scrollableElement = this.getScrollableElement(e.sensorEvent.target)
                    })), !this.scrollableElement) return;
                const t = e.sensorEvent,
                    r = {
                        x: 0,
                        y: 0
                    };
                "ontouchstart" in window && (r.y = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0, r.x = window.pageXOffset || document.documentElement.scrollLeft || document.body.scrollLeft || 0), this.currentMousePosition = {
                    clientX: t.clientX - r.x,
                    clientY: t.clientY - r.y
                }, this.scrollAnimationFrame = requestAnimationFrame(this[d])
            }[u]() {
                cancelAnimationFrame(this.scrollAnimationFrame), cancelAnimationFrame(this.findScrollableElementFrame), this.scrollableElement = null, this.scrollAnimationFrame = null, this.findScrollableElementFrame = null, this.currentMousePosition = null
            }[d]() {
                if (!this.scrollableElement || !this.currentMousePosition) return;
                cancelAnimationFrame(this.scrollAnimationFrame);
                const {
                    speed: e,
                    sensitivity: t
                } = this.options, r = this.scrollableElement.getBoundingClientRect(), n = r.bottom > window.innerHeight, o = r.top < 0 || n, i = f(), s = this.scrollableElement, a = this.currentMousePosition.clientX, l = this.currentMousePosition.clientY;
                if (s === document.body || s === document.documentElement || o) {
                    const {
                        innerHeight: r,
                        innerWidth: n
                    } = window;
                    l < t ? i.scrollTop -= e : r - l < t && (i.scrollTop += e), a < t ? i.scrollLeft -= e : n - a < t && (i.scrollLeft += e)
                } else {
                    const {
                        offsetHeight: n,
                        offsetWidth: o
                    } = s;
                    r.top + n - l < t ? s.scrollTop += e : l - r.top < t && (s.scrollTop -= e), r.left + o - a < t ? s.scrollLeft += e : a - r.left < t && (s.scrollLeft -= e)
                }
                this.scrollAnimationFrame = requestAnimationFrame(this[d])
            }
        }

        function f() {
            return document.scrollingElement || document.documentElement
        }
        t.default = g
    }, function(e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.defaultOptions = void 0;
        var n, o = r(26),
            i = (n = o) && n.__esModule ? n : {
                default: n
            };
        t.default = i.default, t.defaultOptions = o.defaultOptions
    }, function(e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.MirrorDestroyEvent = t.MirrorMoveEvent = t.MirrorAttachedEvent = t.MirrorCreatedEvent = t.MirrorCreateEvent = t.MirrorEvent = void 0;
        var n, o = r(4),
            i = (n = o) && n.__esModule ? n : {
                default: n
            };
        class s extends i.default {
            get source() {
                return this.data.source
            }
            get originalSource() {
                return this.data.originalSource
            }
            get sourceContainer() {
                return this.data.sourceContainer
            }
            get sensorEvent() {
                return this.data.sensorEvent
            }
            get dragEvent() {
                return this.data.dragEvent
            }
            get originalEvent() {
                return this.sensorEvent ? this.sensorEvent.originalEvent : null
            }
        }
        t.MirrorEvent = s;
        class a extends s {}
        t.MirrorCreateEvent = a, a.type = "mirror:create";
        class l extends s {
            get mirror() {
                return this.data.mirror
            }
        }
        t.MirrorCreatedEvent = l, l.type = "mirror:created";
        class c extends s {
            get mirror() {
                return this.data.mirror
            }
        }
        t.MirrorAttachedEvent = c, c.type = "mirror:attached";
        class u extends s {
            get mirror() {
                return this.data.mirror
            }
        }
        t.MirrorMoveEvent = u, u.type = "mirror:move", u.cancelable = !0;
        class d extends s {
            get mirror() {
                return this.data.mirror
            }
        }
        t.MirrorDestroyEvent = d, d.type = "mirror:destroy", d.cancelable = !0
    }, function(e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var n = r(28);
        Object.keys(n).forEach((function(e) {
            "default" !== e && "__esModule" !== e && Object.defineProperty(t, e, {
                enumerable: !0,
                get: function() {
                    return n[e]
                }
            })
        }))
    }, function(e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.defaultOptions = t.getAppendableContainer = t.onScroll = t.onMirrorMove = t.onMirrorCreated = t.onDragStop = t.onDragMove = t.onDragStart = void 0;
        var n, o = Object.assign || function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var r = arguments[t];
                    for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
                }
                return e
            },
            i = r(3),
            s = (n = i) && n.__esModule ? n : {
                default: n
            },
            a = r(29);

        function l(e, t) {
            var r = {};
            for (var n in e) t.indexOf(n) >= 0 || Object.prototype.hasOwnProperty.call(e, n) && (r[n] = e[n]);
            return r
        }
        const c = t.onDragStart = Symbol("onDragStart"),
            u = t.onDragMove = Symbol("onDragMove"),
            d = t.onDragStop = Symbol("onDragStop"),
            h = t.onMirrorCreated = Symbol("onMirrorCreated"),
            g = t.onMirrorMove = Symbol("onMirrorMove"),
            f = t.onScroll = Symbol("onScroll"),
            p = t.getAppendableContainer = Symbol("getAppendableContainer"),
            v = t.defaultOptions = {
                constrainDimensions: !1,
                xAxis: !0,
                yAxis: !0,
                cursorOffsetX: null,
                cursorOffsetY: null
            };
        class m extends s.default {
            constructor(e) {
                super(e), this.options = o({}, v, this.getOptions()), this.scrollOffset = {
                    x: 0,
                    y: 0
                }, this.initialScrollOffset = {
                    x: window.scrollX,
                    y: window.scrollY
                }, this[c] = this[c].bind(this), this[u] = this[u].bind(this), this[d] = this[d].bind(this), this[h] = this[h].bind(this), this[g] = this[g].bind(this), this[f] = this[f].bind(this)
            }
            attach() {
                this.draggable.on("drag:start", this[c]).on("drag:move", this[u]).on("drag:stop", this[d]).on("mirror:created", this[h]).on("mirror:move", this[g])
            }
            detach() {
                this.draggable.off("drag:start", this[c]).off("drag:move", this[u]).off("drag:stop", this[d]).off("mirror:created", this[h]).off("mirror:move", this[g])
            }
            getOptions() {
                return this.draggable.options.mirror || {}
            }[c](e) {
                if (e.canceled()) return;
                "ontouchstart" in window && document.addEventListener("scroll", this[f], !0), this.initialScrollOffset = {
                    x: window.scrollX,
                    y: window.scrollY
                };
                const {
                    source: t,
                    originalSource: r,
                    sourceContainer: n,
                    sensorEvent: o
                } = e, i = new a.MirrorCreateEvent({
                    source: t,
                    originalSource: r,
                    sourceContainer: n,
                    sensorEvent: o,
                    dragEvent: e
                });
                if (this.draggable.trigger(i), function(e) {
                        return /^drag/.test(e.originalEvent.type)
                    }(o) || i.canceled()) return;
                const s = this[p](t) || n;
                this.mirror = t.cloneNode(!0);
                const l = new a.MirrorCreatedEvent({
                        source: t,
                        originalSource: r,
                        sourceContainer: n,
                        sensorEvent: o,
                        dragEvent: e,
                        mirror: this.mirror
                    }),
                    c = new a.MirrorAttachedEvent({
                        source: t,
                        originalSource: r,
                        sourceContainer: n,
                        sensorEvent: o,
                        dragEvent: e,
                        mirror: this.mirror
                    });
                this.draggable.trigger(l), s.appendChild(this.mirror), this.draggable.trigger(c)
            }[u](e) {
                if (!this.mirror || e.canceled()) return;
                const {
                    source: t,
                    originalSource: r,
                    sourceContainer: n,
                    sensorEvent: o
                } = e, i = new a.MirrorMoveEvent({
                    source: t,
                    originalSource: r,
                    sourceContainer: n,
                    sensorEvent: o,
                    dragEvent: e,
                    mirror: this.mirror
                });
                this.draggable.trigger(i)
            }[d](e) {
                if ("ontouchstart" in window && document.removeEventListener("scroll", this[f], !0), this.initialScrollOffset = {
                        x: 0,
                        y: 0
                    }, this.scrollOffset = {
                        x: 0,
                        y: 0
                    }, !this.mirror) return;
                const {
                    source: t,
                    sourceContainer: r,
                    sensorEvent: n
                } = e, o = new a.MirrorDestroyEvent({
                    source: t,
                    mirror: this.mirror,
                    sourceContainer: r,
                    sensorEvent: n,
                    dragEvent: e
                });
                this.draggable.trigger(o), o.canceled() || this.mirror.parentNode.removeChild(this.mirror)
            }[f]() {
                this.scrollOffset = {
                    x: window.scrollX - this.initialScrollOffset.x,
                    y: window.scrollY - this.initialScrollOffset.y
                }
            }[h]({
                mirror: e,
                source: t,
                sensorEvent: r
            }) {
                const n = {
                    mirror: e,
                    source: t,
                    sensorEvent: r,
                    mirrorClass: this.draggable.getClassNameFor("mirror"),
                    scrollOffset: this.scrollOffset,
                    options: this.options
                };
                return Promise.resolve(n).then(b).then(y).then(E).then(O).then(_({
                    initial: !0
                })).then(S).then((e => {
                    let {
                        mirrorOffset: t,
                        initialX: r,
                        initialY: n
                    } = e, i = l(e, ["mirrorOffset", "initialX", "initialY"]);
                    return this.mirrorOffset = t, this.initialX = r, this.initialY = n, o({
                        mirrorOffset: t,
                        initialX: r,
                        initialY: n
                    }, i)
                }))
            }[g](e) {
                if (e.canceled()) return null;
                const t = {
                    mirror: e.mirror,
                    sensorEvent: e.sensorEvent,
                    mirrorOffset: this.mirrorOffset,
                    options: this.options,
                    initialX: this.initialX,
                    initialY: this.initialY,
                    scrollOffset: this.scrollOffset
                };
                return Promise.resolve(t).then(_({
                    raf: !0
                }))
            }[p](e) {
                const t = this.options.appendTo;
                return "string" == typeof t ? document.querySelector(t) : t instanceof HTMLElement ? t : "function" == typeof t ? t(e) : e.parentNode
            }
        }

        function b(e) {
            let {
                source: t
            } = e, r = l(e, ["source"]);
            return M((e => {
                const n = t.getBoundingClientRect();
                e(o({
                    source: t,
                    sourceRect: n
                }, r))
            }))
        }

        function y(e) {
            let {
                sensorEvent: t,
                sourceRect: r,
                options: n
            } = e, i = l(e, ["sensorEvent", "sourceRect", "options"]);
            return M((e => {
                const s = null === n.cursorOffsetY ? t.clientY - r.top : n.cursorOffsetY,
                    a = null === n.cursorOffsetX ? t.clientX - r.left : n.cursorOffsetX;
                e(o({
                    sensorEvent: t,
                    sourceRect: r,
                    mirrorOffset: {
                        top: s,
                        left: a
                    },
                    options: n
                }, i))
            }))
        }

        function E(e) {
            let {
                mirror: t,
                source: r,
                options: n
            } = e, i = l(e, ["mirror", "source", "options"]);
            return M((e => {
                let s, a;
                if (n.constrainDimensions) {
                    const e = getComputedStyle(r);
                    s = e.getPropertyValue("height"), a = e.getPropertyValue("width")
                }
                t.style.position = "fixed", t.style.pointerEvents = "none", t.style.top = 0, t.style.left = 0, t.style.margin = 0, n.constrainDimensions && (t.style.height = s, t.style.width = a), e(o({
                    mirror: t,
                    source: r,
                    options: n
                }, i))
            }))
        }

        function O(e) {
            let {
                mirror: t,
                mirrorClass: r
            } = e, n = l(e, ["mirror", "mirrorClass"]);
            return M((e => {
                t.classList.add(r), e(o({
                    mirror: t,
                    mirrorClass: r
                }, n))
            }))
        }

        function S(e) {
            let {
                mirror: t
            } = e, r = l(e, ["mirror"]);
            return M((e => {
                t.removeAttribute("id"), delete t.id, e(o({
                    mirror: t
                }, r))
            }))
        }

        function _({
            withFrame: e = !1,
            initial: t = !1
        } = {}) {
            return r => {
                let {
                    mirror: n,
                    sensorEvent: i,
                    mirrorOffset: s,
                    initialY: a,
                    initialX: c,
                    scrollOffset: u,
                    options: d
                } = r, h = l(r, ["mirror", "sensorEvent", "mirrorOffset", "initialY", "initialX", "scrollOffset", "options"]);
                return M((e => {
                    const r = o({
                        mirror: n,
                        sensorEvent: i,
                        mirrorOffset: s,
                        options: d
                    }, h);
                    if (s) {
                        const e = i.clientX - s.left - u.x,
                            o = i.clientY - s.top - u.y;
                        d.xAxis && d.yAxis || t ? n.style.transform = `translate3d(${e}px, ${o}px, 0)` : d.xAxis && !d.yAxis ? n.style.transform = `translate3d(${e}px, ${a}px, 0)` : d.yAxis && !d.xAxis && (n.style.transform = `translate3d(${c}px, ${o}px, 0)`), t && (r.initialX = e, r.initialY = o)
                    }
                    e(r)
                }), {
                    frame: e
                })
            }
        }

        function M(e, {
            raf: t = !1
        } = {}) {
            return new Promise(((r, n) => {
                t ? requestAnimationFrame((() => {
                    e(r, n)
                })) : e(r, n)
            }))
        }
        t.default = m
    }, function(e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.defaultOptions = void 0;
        var n, o = r(30),
            i = (n = o) && n.__esModule ? n : {
                default: n
            };
        t.default = i.default, t.defaultOptions = o.defaultOptions
    }, function(e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var n, o = Object.assign || function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var r = arguments[t];
                    for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
                }
                return e
            },
            i = r(3),
            s = (n = i) && n.__esModule ? n : {
                default: n
            };
        const a = Symbol("onInitialize"),
            l = Symbol("onDestroy"),
            c = {};
        class u extends s.default {
            constructor(e) {
                super(e), this.options = o({}, c, this.getOptions()), this[a] = this[a].bind(this), this[l] = this[l].bind(this)
            }
            attach() {
                this.draggable.on("draggable:initialize", this[a]).on("draggable:destroy", this[l])
            }
            detach() {
                this.draggable.off("draggable:initialize", this[a]).off("draggable:destroy", this[l])
            }
            getOptions() {
                return this.draggable.options.focusable || {}
            }
            getElements() {
                return [...this.draggable.containers, ...this.draggable.getDraggableElements()]
            }[a]() {
                requestAnimationFrame((() => {
                    this.getElements().forEach((e => function(e) {
                        Boolean(!e.getAttribute("tabindex") && -1 === e.tabIndex) && (d.push(e), e.tabIndex = 0)
                    }(e)))
                }))
            }[l]() {
                requestAnimationFrame((() => {
                    this.getElements().forEach((e => function(e) {
                        const t = d.indexOf(e); - 1 !== t && (e.tabIndex = -1, d.splice(t, 1))
                    }(e)))
                }))
            }
        }
        t.default = u;
        const d = []
    }, function(e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var n, o = r(32),
            i = (n = o) && n.__esModule ? n : {
                default: n
            };
        t.default = i.default
    }, function(e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        t.default = class {
            constructor(e) {
                this.draggable = e
            }
            attach() {
                throw new Error("Not Implemented")
            }
            detach() {
                throw new Error("Not Implemented")
            }
        }
    }, function(e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.defaultOptions = void 0;
        var n, o = Object.assign || function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var r = arguments[t];
                    for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
                }
                return e
            },
            i = r(3),
            s = (n = i) && n.__esModule ? n : {
                default: n
            };
        const a = Symbol("onInitialize"),
            l = Symbol("onDestroy"),
            c = Symbol("announceEvent"),
            u = Symbol("announceMessage"),
            d = t.defaultOptions = {
                expire: 7e3
            };
        class h extends s.default {
            constructor(e) {
                super(e), this.options = o({}, d, this.getOptions()), this.originalTriggerMethod = this.draggable.trigger, this[a] = this[a].bind(this), this[l] = this[l].bind(this)
            }
            attach() {
                this.draggable.on("draggable:initialize", this[a])
            }
            detach() {
                this.draggable.off("draggable:destroy", this[l])
            }
            getOptions() {
                return this.draggable.options.announcements || {}
            }[c](e) {
                const t = this.options[e.type];
                t && "string" == typeof t && this[u](t), t && "function" == typeof t && this[u](t(e))
            }[u](e) {
                ! function(e, {
                    expire: t
                }) {
                    const r = document.createElement("div");
                    r.textContent = e, g.appendChild(r), setTimeout((() => {
                        g.removeChild(r)
                    }), t)
                }(e, {
                    expire: this.options.expire
                })
            }[a]() {
                this.draggable.trigger = e => {
                    try {
                        this[c](e)
                    } finally {
                        this.originalTriggerMethod.call(this.draggable, e)
                    }
                }
            }[l]() {
                this.draggable.trigger = this.originalTriggerMethod
            }
        }
        t.default = h;
        const g = function() {
            const e = document.createElement("div");
            return e.setAttribute("id", "draggable-live-region"), e.setAttribute("aria-relevant", "additions"), e.setAttribute("aria-atomic", "true"), e.setAttribute("aria-live", "assertive"), e.setAttribute("role", "log"), e.style.position = "fixed", e.style.width = "1px", e.style.height = "1px", e.style.top = "-1px", e.style.overflow = "hidden", e
        }();
        document.addEventListener("DOMContentLoaded", (() => {
            document.body.appendChild(g)
        }))
    }, function(e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.defaultOptions = void 0;
        var n, o = r(35),
            i = (n = o) && n.__esModule ? n : {
                default: n
            };
        t.default = i.default, t.defaultOptions = o.defaultOptions
    }, function(e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.DraggableDestroyEvent = t.DraggableInitializedEvent = t.DraggableEvent = void 0;
        var n, o = r(4),
            i = (n = o) && n.__esModule ? n : {
                default: n
            };
        class s extends i.default {
            get draggable() {
                return this.data.draggable
            }
        }
        t.DraggableEvent = s, s.type = "draggable";
        class a extends s {}
        t.DraggableInitializedEvent = a, a.type = "draggable:initialize";
        class l extends s {}
        t.DraggableDestroyEvent = l, l.type = "draggable:destroy"
    }, function(e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var n = Object.assign || function(e) {
            for (var t = 1; t < arguments.length; t++) {
                var r = arguments[t];
                for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
            }
            return e
        };
        const o = Symbol("canceled");
        class i {
            constructor(e) {
                this[o] = !1, this.data = e
            }
            get type() {
                return this.constructor.type
            }
            get cancelable() {
                return this.constructor.cancelable
            }
            cancel() {
                this[o] = !0
            }
            canceled() {
                return Boolean(this[o])
            }
            clone(e) {
                return new this.constructor(n({}, this.data, e))
            }
        }
        t.default = i, i.type = "event", i.cancelable = !1
    }, function(e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.DragStopEvent = t.DragPressureEvent = t.DragOutContainerEvent = t.DragOverContainerEvent = t.DragOutEvent = t.DragOverEvent = t.DragMoveEvent = t.DragStartEvent = t.DragEvent = void 0;
        var n, o = r(4),
            i = (n = o) && n.__esModule ? n : {
                default: n
            };
        class s extends i.default {
            get source() {
                return this.data.source
            }
            get originalSource() {
                return this.data.originalSource
            }
            get mirror() {
                return this.data.mirror
            }
            get sourceContainer() {
                return this.data.sourceContainer
            }
            get sensorEvent() {
                return this.data.sensorEvent
            }
            get originalEvent() {
                return this.sensorEvent ? this.sensorEvent.originalEvent : null
            }
        }
        t.DragEvent = s, s.type = "drag";
        class a extends s {}
        t.DragStartEvent = a, a.type = "drag:start", a.cancelable = !0;
        class l extends s {}
        t.DragMoveEvent = l, l.type = "drag:move";
        class c extends s {
            get overContainer() {
                return this.data.overContainer
            }
            get over() {
                return this.data.over
            }
        }
        t.DragOverEvent = c, c.type = "drag:over", c.cancelable = !0;
        class u extends s {
            get overContainer() {
                return this.data.overContainer
            }
            get over() {
                return this.data.over
            }
        }
        t.DragOutEvent = u, u.type = "drag:out";
        class d extends s {
            get overContainer() {
                return this.data.overContainer
            }
        }
        t.DragOverContainerEvent = d, d.type = "drag:over:container";
        class h extends s {
            get overContainer() {
                return this.data.overContainer
            }
        }
        t.DragOutContainerEvent = h, h.type = "drag:out:container";
        class g extends s {
            get pressure() {
                return this.data.pressure
            }
        }
        t.DragPressureEvent = g, g.type = "drag:pressure";
        class f extends s {}
        t.DragStopEvent = f, f.type = "drag:stop"
    }, function(e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var n = r(8);
        Object.keys(n).forEach((function(e) {
            "default" !== e && "__esModule" !== e && Object.defineProperty(t, e, {
                enumerable: !0,
                get: function() {
                    return n[e]
                }
            })
        }));
        var o = r(7);
        Object.keys(o).forEach((function(e) {
            "default" !== e && "__esModule" !== e && Object.defineProperty(t, e, {
                enumerable: !0,
                get: function() {
                    return o[e]
                }
            })
        }));
        var i = r(6);
        Object.keys(i).forEach((function(e) {
            "default" !== e && "__esModule" !== e && Object.defineProperty(t, e, {
                enumerable: !0,
                get: function() {
                    return i[e]
                }
            })
        }));
        var s = r(5);
        Object.keys(s).forEach((function(e) {
            "default" !== e && "__esModule" !== e && Object.defineProperty(t, e, {
                enumerable: !0,
                get: function() {
                    return s[e]
                }
            })
        }));
        var a, l = r(11),
            c = (a = l) && a.__esModule ? a : {
                default: a
            };
        t.default = c.default
    }])
})),
function(e, t) {
    "object" == typeof exports && "object" == typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define("Sortable", [], t) : "object" == typeof exports ? exports.Sortable = t() : e.Sortable = t()
}(window, (function() {
    return function(e) {
        var t = {};

        function r(n) {
            if (t[n]) return t[n].exports;
            var o = t[n] = {
                i: n,
                l: !1,
                exports: {}
            };
            return e[n].call(o.exports, o, o.exports, r), o.l = !0, o.exports
        }
        return r.m = e, r.c = t, r.d = function(e, t, n) {
            r.o(e, t) || Object.defineProperty(e, t, {
                enumerable: !0,
                get: n
            })
        }, r.r = function(e) {
            "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
                value: "Module"
            }), Object.defineProperty(e, "__esModule", {
                value: !0
            })
        }, r.t = function(e, t) {
            if (1 & t && (e = r(e)), 8 & t) return e;
            if (4 & t && "object" == typeof e && e && e.__esModule) return e;
            var n = Object.create(null);
            if (r.r(n), Object.defineProperty(n, "default", {
                    enumerable: !0,
                    value: e
                }), 2 & t && "string" != typeof e)
                for (var o in e) r.d(n, o, function(t) {
                    return e[t]
                }.bind(null, o));
            return n
        }, r.n = function(e) {
            var t = e && e.__esModule ? function() {
                return e.default
            } : function() {
                return e
            };
            return r.d(t, "a", t), t
        }, r.o = function(e, t) {
            return Object.prototype.hasOwnProperty.call(e, t)
        }, r.p = "", r(r.s = 44)
    }([function(e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var n = r(19);
        Object.keys(n).forEach((function(e) {
            "default" !== e && "__esModule" !== e && Object.defineProperty(t, e, {
                enumerable: !0,
                get: function() {
                    return n[e]
                }
            })
        }))
    }, function(e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var n, o = r(22),
            i = (n = o) && n.__esModule ? n : {
                default: n
            };
        t.default = i.default
    }, function(e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var n = r(26);
        Object.defineProperty(t, "closest", {
            enumerable: !0,
            get: function() {
                return i(n).default
            }
        });
        var o = r(24);

        function i(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        Object.defineProperty(t, "requestNextAnimationFrame", {
            enumerable: !0,
            get: function() {
                return i(o).default
            }
        })
    }, function(e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var n, o = r(42),
            i = (n = o) && n.__esModule ? n : {
                default: n
            };
        t.default = i.default
    }, function(e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var n, o = r(35),
            i = (n = o) && n.__esModule ? n : {
                default: n
            };
        t.default = i.default
    }, function(e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var n = r(1);
        Object.defineProperty(t, "Sensor", {
            enumerable: !0,
            get: function() {
                return c(n).default
            }
        });
        var o = r(21);
        Object.defineProperty(t, "MouseSensor", {
            enumerable: !0,
            get: function() {
                return c(o).default
            }
        });
        var i = r(18);
        Object.defineProperty(t, "TouchSensor", {
            enumerable: !0,
            get: function() {
                return c(i).default
            }
        });
        var s = r(16);
        Object.defineProperty(t, "DragSensor", {
            enumerable: !0,
            get: function() {
                return c(s).default
            }
        });
        var a = r(14);
        Object.defineProperty(t, "ForceTouchSensor", {
            enumerable: !0,
            get: function() {
                return c(a).default
            }
        });
        var l = r(0);

        function c(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        Object.keys(l).forEach((function(e) {
            "default" !== e && "__esModule" !== e && Object.defineProperty(t, e, {
                enumerable: !0,
                get: function() {
                    return l[e]
                }
            })
        }))
    }, function(e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var n = r(37);
        Object.defineProperty(t, "Announcement", {
            enumerable: !0,
            get: function() {
                return a(n).default
            }
        }), Object.defineProperty(t, "defaultAnnouncementOptions", {
            enumerable: !0,
            get: function() {
                return n.defaultOptions
            }
        });
        var o = r(34);
        Object.defineProperty(t, "Focusable", {
            enumerable: !0,
            get: function() {
                return a(o).default
            }
        });
        var i = r(32);
        Object.defineProperty(t, "Mirror", {
            enumerable: !0,
            get: function() {
                return a(i).default
            }
        }), Object.defineProperty(t, "defaultMirrorOptions", {
            enumerable: !0,
            get: function() {
                return i.defaultOptions
            }
        });
        var s = r(28);

        function a(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        Object.defineProperty(t, "Scrollable", {
            enumerable: !0,
            get: function() {
                return a(s).default
            }
        }), Object.defineProperty(t, "defaultScrollableOptions", {
            enumerable: !0,
            get: function() {
                return s.defaultOptions
            }
        })
    }, function(e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var n = r(38);
        Object.keys(n).forEach((function(e) {
            "default" !== e && "__esModule" !== e && Object.defineProperty(t, e, {
                enumerable: !0,
                get: function() {
                    return n[e]
                }
            })
        }))
    }, function(e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var n = r(39);
        Object.keys(n).forEach((function(e) {
            "default" !== e && "__esModule" !== e && Object.defineProperty(t, e, {
                enumerable: !0,
                get: function() {
                    return n[e]
                }
            })
        }))
    }, function(e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var n = r(43);
        Object.keys(n).forEach((function(e) {
            "default" !== e && "__esModule" !== e && Object.defineProperty(t, e, {
                enumerable: !0,
                get: function() {
                    return n[e]
                }
            })
        }))
    }, function(e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        t.default = class {
            constructor() {
                this.callbacks = {}
            }
            on(e, ...t) {
                return this.callbacks[e] || (this.callbacks[e] = []), this.callbacks[e].push(...t), this
            }
            off(e, t) {
                if (!this.callbacks[e]) return null;
                const r = this.callbacks[e].slice(0);
                for (let n = 0; n < r.length; n++) t === r[n] && this.callbacks[e].splice(n, 1);
                return this
            }
            trigger(e) {
                if (!this.callbacks[e.type]) return null;
                const t = [...this.callbacks[e.type]],
                    r = [];
                for (let n = t.length - 1; n >= 0; n--) {
                    const o = t[n];
                    try {
                        o(e)
                    } catch (e) {
                        r.push(e)
                    }
                }
                return r.length && console.error(`Draggable caught errors while triggering '${e.type}'`, r), this
            }
        }
    }, function(e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var n, o = r(10),
            i = (n = o) && n.__esModule ? n : {
                default: n
            };
        t.default = i.default
    }, function(e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.defaultOptions = void 0;
        var n, o = Object.assign || function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var r = arguments[t];
                    for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
                }
                return e
            },
            i = r(2),
            s = r(6),
            a = r(11),
            l = (n = a) && n.__esModule ? n : {
                default: n
            },
            c = r(5),
            u = r(7),
            d = r(8);
        const h = Symbol("onDragStart"),
            g = Symbol("onDragMove"),
            f = Symbol("onDragStop"),
            p = Symbol("onDragPressure"),
            v = {
                "drag:start": e => `Picked up ${e.source.textContent.trim()||e.source.id||"draggable element"}`,
                "drag:stop": e => `Released ${e.source.textContent.trim()||e.source.id||"draggable element"}`
            },
            m = {
                "container:dragging": "draggable-container--is-dragging",
                "source:dragging": "draggable-source--is-dragging",
                "source:placed": "draggable-source--placed",
                "container:placed": "draggable-container--placed",
                "body:dragging": "draggable--is-dragging",
                "draggable:over": "draggable--over",
                "container:over": "draggable-container--over",
                "source:original": "draggable--original",
                mirror: "draggable-mirror"
            },
            b = t.defaultOptions = {
                draggable: ".draggable-source",
                handle: null,
                delay: 100,
                placedTimeout: 800,
                plugins: [],
                sensors: []
            };
        class y {
            constructor(e = [document.body], t = {}) {
                if (e instanceof NodeList || e instanceof Array) this.containers = [...e];
                else {
                    if (!(e instanceof HTMLElement)) throw new Error("Draggable containers are expected to be of type `NodeList`, `HTMLElement[]` or `HTMLElement`");
                    this.containers = [e]
                }
                this.options = o({}, b, t, {
                    classes: o({}, m, t.classes || {}),
                    announcements: o({}, v, t.announcements || {})
                }), this.emitter = new l.default, this.dragging = !1, this.plugins = [], this.sensors = [], this[h] = this[h].bind(this), this[g] = this[g].bind(this), this[f] = this[f].bind(this), this[p] = this[p].bind(this), document.addEventListener("drag:start", this[h], !0), document.addEventListener("drag:move", this[g], !0), document.addEventListener("drag:stop", this[f], !0), document.addEventListener("drag:pressure", this[p], !0);
                const r = Object.values(y.Plugins).map((e => e)),
                    n = [c.MouseSensor, c.TouchSensor];
                this.addPlugin(...r, ...this.options.plugins), this.addSensor(...n, ...this.options.sensors);
                const i = new u.DraggableInitializedEvent({
                    draggable: this
                });
                this.on("mirror:created", (({
                    mirror: e
                }) => this.mirror = e)), this.on("mirror:destroy", (() => this.mirror = null)), this.trigger(i)
            }
            destroy() {
                document.removeEventListener("drag:start", this[h], !0), document.removeEventListener("drag:move", this[g], !0), document.removeEventListener("drag:stop", this[f], !0), document.removeEventListener("drag:pressure", this[p], !0);
                const e = new u.DraggableDestroyEvent({
                    draggable: this
                });
                this.trigger(e), this.removePlugin(...this.plugins.map((e => e.constructor))), this.removeSensor(...this.sensors.map((e => e.constructor)))
            }
            addPlugin(...e) {
                const t = e.map((e => new e(this)));
                return t.forEach((e => e.attach())), this.plugins = [...this.plugins, ...t], this
            }
            removePlugin(...e) {
                return this.plugins.filter((t => e.includes(t.constructor))).forEach((e => e.detach())), this.plugins = this.plugins.filter((t => !e.includes(t.constructor))), this
            }
            addSensor(...e) {
                const t = e.map((e => new e(this.containers, this.options)));
                return t.forEach((e => e.attach())), this.sensors = [...this.sensors, ...t], this
            }
            removeSensor(...e) {
                return this.sensors.filter((t => e.includes(t.constructor))).forEach((e => e.detach())), this.sensors = this.sensors.filter((t => !e.includes(t.constructor))), this
            }
            addContainer(...e) {
                return this.containers = [...this.containers, ...e], this.sensors.forEach((t => t.addContainer(...e))), this
            }
            removeContainer(...e) {
                return this.containers = this.containers.filter((t => !e.includes(t))), this.sensors.forEach((t => t.removeContainer(...e))), this
            }
            on(e, ...t) {
                return this.emitter.on(e, ...t), this
            }
            off(e, t) {
                return this.emitter.off(e, t), this
            }
            trigger(e) {
                return this.emitter.trigger(e), this
            }
            getClassNameFor(e) {
                return this.options.classes[e]
            }
            isDragging() {
                return Boolean(this.dragging)
            }
            getDraggableElements() {
                return this.containers.reduce(((e, t) => [...e, ...this.getDraggableElementsForContainer(t)]), [])
            }
            getDraggableElementsForContainer(e) {
                return [...e.querySelectorAll(this.options.draggable)].filter((e => e !== this.originalSource && e !== this.mirror))
            }[h](e) {
                const t = E(e),
                    {
                        target: r,
                        container: n
                    } = t;
                if (!this.containers.includes(n)) return;
                if (this.options.handle && r && !(0, i.closest)(r, this.options.handle)) return void t.cancel();
                if (this.originalSource = (0, i.closest)(r, this.options.draggable), this.sourceContainer = n, !this.originalSource) return void t.cancel();
                this.lastPlacedSource && this.lastPlacedContainer && (clearTimeout(this.placedTimeoutID), this.lastPlacedSource.classList.remove(this.getClassNameFor("source:placed")), this.lastPlacedContainer.classList.remove(this.getClassNameFor("container:placed"))), this.source = this.originalSource.cloneNode(!0), this.originalSource.parentNode.insertBefore(this.source, this.originalSource), this.originalSource.style.display = "none";
                const s = new d.DragStartEvent({
                    source: this.source,
                    originalSource: this.originalSource,
                    sourceContainer: n,
                    sensorEvent: t
                });
                if (this.trigger(s), this.dragging = !s.canceled(), s.canceled()) return this.source.parentNode.removeChild(this.source), void(this.originalSource.style.display = null);
                this.originalSource.classList.add(this.getClassNameFor("source:original")), this.source.classList.add(this.getClassNameFor("source:dragging")), this.sourceContainer.classList.add(this.getClassNameFor("container:dragging")), document.body.classList.add(this.getClassNameFor("body:dragging")), O(document.body, "none"), requestAnimationFrame((() => {
                    const t = E(e).clone({
                        target: this.source
                    });
                    this[g](o({}, e, {
                        detail: t
                    }))
                }))
            }[g](e) {
                if (!this.dragging) return;
                const t = E(e),
                    {
                        container: r
                    } = t;
                let n = t.target;
                const o = new d.DragMoveEvent({
                    source: this.source,
                    originalSource: this.originalSource,
                    sourceContainer: r,
                    sensorEvent: t
                });
                this.trigger(o), o.canceled() && t.cancel(), n = (0, i.closest)(n, this.options.draggable);
                const s = (0, i.closest)(t.target, this.containers),
                    a = t.overContainer || s,
                    l = this.currentOverContainer && a !== this.currentOverContainer,
                    c = this.currentOver && n !== this.currentOver,
                    u = a && this.currentOverContainer !== a,
                    h = s && n && this.currentOver !== n;
                if (c) {
                    const e = new d.DragOutEvent({
                        source: this.source,
                        originalSource: this.originalSource,
                        sourceContainer: r,
                        sensorEvent: t,
                        over: this.currentOver
                    });
                    this.currentOver.classList.remove(this.getClassNameFor("draggable:over")), this.currentOver = null, this.trigger(e)
                }
                if (l) {
                    const e = new d.DragOutContainerEvent({
                        source: this.source,
                        originalSource: this.originalSource,
                        sourceContainer: r,
                        sensorEvent: t,
                        overContainer: this.currentOverContainer
                    });
                    this.currentOverContainer.classList.remove(this.getClassNameFor("container:over")), this.currentOverContainer = null, this.trigger(e)
                }
                if (u) {
                    a.classList.add(this.getClassNameFor("container:over"));
                    const e = new d.DragOverContainerEvent({
                        source: this.source,
                        originalSource: this.originalSource,
                        sourceContainer: r,
                        sensorEvent: t,
                        overContainer: a
                    });
                    this.currentOverContainer = a, this.trigger(e)
                }
                if (h) {
                    n.classList.add(this.getClassNameFor("draggable:over"));
                    const e = new d.DragOverEvent({
                        source: this.source,
                        originalSource: this.originalSource,
                        sourceContainer: r,
                        sensorEvent: t,
                        overContainer: a,
                        over: n
                    });
                    this.currentOver = n, this.trigger(e)
                }
            }[f](e) {
                if (!this.dragging) return;
                this.dragging = !1;
                const t = new d.DragStopEvent({
                    source: this.source,
                    originalSource: this.originalSource,
                    sensorEvent: e.sensorEvent,
                    sourceContainer: this.sourceContainer
                });
                this.trigger(t), this.source.parentNode.insertBefore(this.originalSource, this.source), this.source.parentNode.removeChild(this.source), this.originalSource.style.display = "", this.source.classList.remove(this.getClassNameFor("source:dragging")), this.originalSource.classList.remove(this.getClassNameFor("source:original")), this.originalSource.classList.add(this.getClassNameFor("source:placed")), this.sourceContainer.classList.add(this.getClassNameFor("container:placed")), this.sourceContainer.classList.remove(this.getClassNameFor("container:dragging")), document.body.classList.remove(this.getClassNameFor("body:dragging")), O(document.body, ""), this.currentOver && this.currentOver.classList.remove(this.getClassNameFor("draggable:over")), this.currentOverContainer && this.currentOverContainer.classList.remove(this.getClassNameFor("container:over")), this.lastPlacedSource = this.originalSource, this.lastPlacedContainer = this.sourceContainer, this.placedTimeoutID = setTimeout((() => {
                    this.lastPlacedSource && this.lastPlacedSource.classList.remove(this.getClassNameFor("source:placed")), this.lastPlacedContainer && this.lastPlacedContainer.classList.remove(this.getClassNameFor("container:placed")), this.lastPlacedSource = null, this.lastPlacedContainer = null
                }), this.options.placedTimeout), this.source = null, this.originalSource = null, this.currentOverContainer = null, this.currentOver = null, this.sourceContainer = null
            }[p](e) {
                if (!this.dragging) return;
                const t = E(e),
                    r = this.source || (0, i.closest)(t.originalEvent.target, this.options.draggable),
                    n = new d.DragPressureEvent({
                        sensorEvent: t,
                        source: r,
                        pressure: t.pressure
                    });
                this.trigger(n)
            }
        }

        function E(e) {
            return e.detail
        }

        function O(e, t) {
            e.style.webkitUserSelect = t, e.style.mozUserSelect = t, e.style.msUserSelect = t, e.style.oUserSelect = t, e.style.userSelect = t
        }
        t.default = y, y.Plugins = {
            Announcement: s.Announcement,
            Focusable: s.Focusable,
            Mirror: s.Mirror,
            Scrollable: s.Scrollable
        }
    }, function(e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var n, o = r(1),
            i = (n = o) && n.__esModule ? n : {
                default: n
            },
            s = r(0);
        const a = Symbol("onMouseForceWillBegin"),
            l = Symbol("onMouseForceDown"),
            c = Symbol("onMouseDown"),
            u = Symbol("onMouseForceChange"),
            d = Symbol("onMouseMove"),
            h = Symbol("onMouseUp"),
            g = Symbol("onMouseForceGlobalChange");
        class f extends i.default {
            constructor(e = [], t = {}) {
                super(e, t), this.mightDrag = !1, this[a] = this[a].bind(this), this[l] = this[l].bind(this), this[c] = this[c].bind(this), this[u] = this[u].bind(this), this[d] = this[d].bind(this), this[h] = this[h].bind(this)
            }
            attach() {
                for (const e of this.containers) e.addEventListener("webkitmouseforcewillbegin", this[a], !1), e.addEventListener("webkitmouseforcedown", this[l], !1), e.addEventListener("mousedown", this[c], !0), e.addEventListener("webkitmouseforcechanged", this[u], !1);
                document.addEventListener("mousemove", this[d]), document.addEventListener("mouseup", this[h])
            }
            detach() {
                for (const e of this.containers) e.removeEventListener("webkitmouseforcewillbegin", this[a], !1), e.removeEventListener("webkitmouseforcedown", this[l], !1), e.removeEventListener("mousedown", this[c], !0), e.removeEventListener("webkitmouseforcechanged", this[u], !1);
                document.removeEventListener("mousemove", this[d]), document.removeEventListener("mouseup", this[h])
            }[a](e) {
                e.preventDefault(), this.mightDrag = !0
            }[l](e) {
                if (this.dragging) return;
                const t = document.elementFromPoint(e.clientX, e.clientY),
                    r = e.currentTarget,
                    n = new s.DragStartSensorEvent({
                        clientX: e.clientX,
                        clientY: e.clientY,
                        target: t,
                        container: r,
                        originalEvent: e
                    });
                this.trigger(r, n), this.currentContainer = r, this.dragging = !n.canceled(), this.mightDrag = !1
            }[h](e) {
                if (!this.dragging) return;
                const t = new s.DragStopSensorEvent({
                    clientX: e.clientX,
                    clientY: e.clientY,
                    target: null,
                    container: this.currentContainer,
                    originalEvent: e
                });
                this.trigger(this.currentContainer, t), this.currentContainer = null, this.dragging = !1, this.mightDrag = !1
            }[c](e) {
                this.mightDrag && (e.stopPropagation(), e.stopImmediatePropagation(), e.preventDefault())
            }[d](e) {
                if (!this.dragging) return;
                const t = document.elementFromPoint(e.clientX, e.clientY),
                    r = new s.DragMoveSensorEvent({
                        clientX: e.clientX,
                        clientY: e.clientY,
                        target: t,
                        container: this.currentContainer,
                        originalEvent: e
                    });
                this.trigger(this.currentContainer, r)
            }[u](e) {
                if (this.dragging) return;
                const t = e.target,
                    r = e.currentTarget,
                    n = new s.DragPressureSensorEvent({
                        pressure: e.webkitForce,
                        clientX: e.clientX,
                        clientY: e.clientY,
                        target: t,
                        container: r,
                        originalEvent: e
                    });
                this.trigger(r, n)
            }[g](e) {
                if (!this.dragging) return;
                const t = e.target,
                    r = new s.DragPressureSensorEvent({
                        pressure: e.webkitForce,
                        clientX: e.clientX,
                        clientY: e.clientY,
                        target: t,
                        container: this.currentContainer,
                        originalEvent: e
                    });
                this.trigger(this.currentContainer, r)
            }
        }
        t.default = f
    }, function(e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var n, o = r(13),
            i = (n = o) && n.__esModule ? n : {
                default: n
            };
        t.default = i.default
    }, function(e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var n, o = r(2),
            i = r(1),
            s = (n = i) && n.__esModule ? n : {
                default: n
            },
            a = r(0);
        const l = Symbol("onMouseDown"),
            c = Symbol("onMouseUp"),
            u = Symbol("onDragStart"),
            d = Symbol("onDragOver"),
            h = Symbol("onDragEnd"),
            g = Symbol("onDrop"),
            f = Symbol("reset");
        class p extends s.default {
            constructor(e = [], t = {}) {
                super(e, t), this.mouseDownTimeout = null, this.draggableElement = null, this.nativeDraggableElement = null, this[l] = this[l].bind(this), this[c] = this[c].bind(this), this[u] = this[u].bind(this), this[d] = this[d].bind(this), this[h] = this[h].bind(this), this[g] = this[g].bind(this)
            }
            attach() {
                document.addEventListener("mousedown", this[l], !0)
            }
            detach() {
                document.removeEventListener("mousedown", this[l], !0)
            }[u](e) {
                e.dataTransfer.setData("text", ""), e.dataTransfer.effectAllowed = this.options.type;
                const t = document.elementFromPoint(e.clientX, e.clientY);
                if (this.currentContainer = (0, o.closest)(e.target, this.containers), !this.currentContainer) return;
                const r = new a.DragStartSensorEvent({
                    clientX: e.clientX,
                    clientY: e.clientY,
                    target: t,
                    container: this.currentContainer,
                    originalEvent: e
                });
                setTimeout((() => {
                    this.trigger(this.currentContainer, r), r.canceled() ? this.dragging = !1 : this.dragging = !0
                }), 0)
            }[d](e) {
                if (!this.dragging) return;
                const t = document.elementFromPoint(e.clientX, e.clientY),
                    r = this.currentContainer,
                    n = new a.DragMoveSensorEvent({
                        clientX: e.clientX,
                        clientY: e.clientY,
                        target: t,
                        container: r,
                        originalEvent: e
                    });
                this.trigger(r, n), n.canceled() || (e.preventDefault(), e.dataTransfer.dropEffect = this.options.type)
            }[h](e) {
                if (!this.dragging) return;
                document.removeEventListener("mouseup", this[c], !0);
                const t = document.elementFromPoint(e.clientX, e.clientY),
                    r = this.currentContainer,
                    n = new a.DragStopSensorEvent({
                        clientX: e.clientX,
                        clientY: e.clientY,
                        target: t,
                        container: r,
                        originalEvent: e
                    });
                this.trigger(r, n), this.dragging = !1, this[f]()
            }[g](e) {
                e.preventDefault()
            }[l](e) {
                if (e.target && (e.target.form || e.target.contenteditable)) return;
                const t = (0, o.closest)(e.target, (e => e.draggable));
                t && (t.draggable = !1, this.nativeDraggableElement = t), document.addEventListener("mouseup", this[c], !0), document.addEventListener("dragstart", this[u], !1), document.addEventListener("dragover", this[d], !1), document.addEventListener("dragend", this[h], !1), document.addEventListener("drop", this[g], !1);
                const r = (0, o.closest)(e.target, this.options.draggable);
                r && (this.mouseDownTimeout = setTimeout((() => {
                    r.draggable = !0, this.draggableElement = r
                }), this.options.delay))
            }[c]() {
                this[f]()
            }[f]() {
                clearTimeout(this.mouseDownTimeout), document.removeEventListener("mouseup", this[c], !0), document.removeEventListener("dragstart", this[u], !1), document.removeEventListener("dragover", this[d], !1), document.removeEventListener("dragend", this[h], !1), document.removeEventListener("drop", this[g], !1), this.nativeDraggableElement && (this.nativeDraggableElement.draggable = !0, this.nativeDraggableElement = null), this.draggableElement && (this.draggableElement.draggable = !1, this.draggableElement = null)
            }
        }
        t.default = p
    }, function(e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var n, o = r(15),
            i = (n = o) && n.__esModule ? n : {
                default: n
            };
        t.default = i.default
    }, function(e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var n, o = r(2),
            i = r(1),
            s = (n = i) && n.__esModule ? n : {
                default: n
            },
            a = r(0);
        const l = Symbol("onTouchStart"),
            c = Symbol("onTouchHold"),
            u = Symbol("onTouchEnd"),
            d = Symbol("onTouchMove");
        let h = !1;
        window.addEventListener("touchmove", (e => {
            h && e.preventDefault()
        }), {
            passive: !1
        });
        class g extends s.default {
            constructor(e = [], t = {}) {
                super(e, t), this.currentScrollableParent = null, this.tapTimeout = null, this.touchMoved = !1, this[l] = this[l].bind(this), this[c] = this[c].bind(this), this[u] = this[u].bind(this), this[d] = this[d].bind(this)
            }
            attach() {
                document.addEventListener("touchstart", this[l])
            }
            detach() {
                document.removeEventListener("touchstart", this[l])
            }[l](e) {
                const t = (0, o.closest)(e.target, this.containers);
                t && (document.addEventListener("touchmove", this[d]), document.addEventListener("touchend", this[u]), document.addEventListener("touchcancel", this[u]), t.addEventListener("contextmenu", f), this.currentContainer = t, this.tapTimeout = setTimeout(this[c](e, t), this.options.delay))
            }[c](e, t) {
                return () => {
                    if (this.touchMoved) return;
                    const r = e.touches[0] || e.changedTouches[0],
                        n = e.target,
                        o = new a.DragStartSensorEvent({
                            clientX: r.pageX,
                            clientY: r.pageY,
                            target: n,
                            container: t,
                            originalEvent: e
                        });
                    this.trigger(t, o), this.dragging = !o.canceled(), h = this.dragging
                }
            }[d](e) {
                if (this.touchMoved = !0, !this.dragging) return;
                const t = e.touches[0] || e.changedTouches[0],
                    r = document.elementFromPoint(t.pageX - window.scrollX, t.pageY - window.scrollY),
                    n = new a.DragMoveSensorEvent({
                        clientX: t.pageX,
                        clientY: t.pageY,
                        target: r,
                        container: this.currentContainer,
                        originalEvent: e
                    });
                this.trigger(this.currentContainer, n)
            }[u](e) {
                if (this.touchMoved = !1, h = !1, document.removeEventListener("touchend", this[u]), document.removeEventListener("touchcancel", this[u]), document.removeEventListener("touchmove", this[d]), this.currentContainer && this.currentContainer.removeEventListener("contextmenu", f), clearTimeout(this.tapTimeout), !this.dragging) return;
                const t = e.touches[0] || e.changedTouches[0],
                    r = document.elementFromPoint(t.pageX - window.scrollX, t.pageY - window.scrollY);
                e.preventDefault();
                const n = new a.DragStopSensorEvent({
                    clientX: t.pageX,
                    clientY: t.pageY,
                    target: r,
                    container: this.currentContainer,
                    originalEvent: e
                });
                this.trigger(this.currentContainer, n), this.currentContainer = null, this.dragging = !1
            }
        }

        function f(e) {
            e.preventDefault(), e.stopPropagation()
        }
        t.default = g
    }, function(e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var n, o = r(17),
            i = (n = o) && n.__esModule ? n : {
                default: n
            };
        t.default = i.default
    }, function(e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.DragPressureSensorEvent = t.DragStopSensorEvent = t.DragMoveSensorEvent = t.DragStartSensorEvent = t.SensorEvent = void 0;
        var n, o = r(3),
            i = (n = o) && n.__esModule ? n : {
                default: n
            };
        class s extends i.default {
            get originalEvent() {
                return this.data.originalEvent
            }
            get clientX() {
                return this.data.clientX
            }
            get clientY() {
                return this.data.clientY
            }
            get target() {
                return this.data.target
            }
            get container() {
                return this.data.container
            }
            get pressure() {
                return this.data.pressure
            }
        }
        t.SensorEvent = s;
        class a extends s {}
        t.DragStartSensorEvent = a, a.type = "drag:start";
        class l extends s {}
        t.DragMoveSensorEvent = l, l.type = "drag:move";
        class c extends s {}
        t.DragStopSensorEvent = c, c.type = "drag:stop";
        class u extends s {}
        t.DragPressureSensorEvent = u, u.type = "drag:pressure"
    }, function(e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var n, o = r(2),
            i = r(1),
            s = (n = i) && n.__esModule ? n : {
                default: n
            },
            a = r(0);
        const l = Symbol("onContextMenuWhileDragging"),
            c = Symbol("onMouseDown"),
            u = Symbol("onMouseMove"),
            d = Symbol("onMouseUp");
        class h extends s.default {
            constructor(e = [], t = {}) {
                super(e, t), this.mouseDown = !1, this.mouseDownTimeout = null, this.openedContextMenu = !1, this[l] = this[l].bind(this), this[c] = this[c].bind(this), this[u] = this[u].bind(this), this[d] = this[d].bind(this)
            }
            attach() {
                document.addEventListener("mousedown", this[c], !0)
            }
            detach() {
                document.removeEventListener("mousedown", this[c], !0)
            }[c](e) {
                if (0 !== e.button || e.ctrlKey || e.metaKey) return;
                document.addEventListener("mouseup", this[d]);
                const t = document.elementFromPoint(e.clientX, e.clientY),
                    r = (0, o.closest)(t, this.containers);
                r && (document.addEventListener("dragstart", g), this.mouseDown = !0, clearTimeout(this.mouseDownTimeout), this.mouseDownTimeout = setTimeout((() => {
                    if (!this.mouseDown) return;
                    const n = new a.DragStartSensorEvent({
                        clientX: e.clientX,
                        clientY: e.clientY,
                        target: t,
                        container: r,
                        originalEvent: e
                    });
                    this.trigger(r, n), this.currentContainer = r, this.dragging = !n.canceled(), this.dragging && (document.addEventListener("contextmenu", this[l]), document.addEventListener("mousemove", this[u]))
                }), this.options.delay))
            }[u](e) {
                if (!this.dragging) return;
                const t = document.elementFromPoint(e.clientX, e.clientY),
                    r = new a.DragMoveSensorEvent({
                        clientX: e.clientX,
                        clientY: e.clientY,
                        target: t,
                        container: this.currentContainer,
                        originalEvent: e
                    });
                this.trigger(this.currentContainer, r)
            }[d](e) {
                if (this.mouseDown = Boolean(this.openedContextMenu), this.openedContextMenu) return void(this.openedContextMenu = !1);
                if (document.removeEventListener("mouseup", this[d]), document.removeEventListener("dragstart", g), !this.dragging) return;
                const t = document.elementFromPoint(e.clientX, e.clientY),
                    r = new a.DragStopSensorEvent({
                        clientX: e.clientX,
                        clientY: e.clientY,
                        target: t,
                        container: this.currentContainer,
                        originalEvent: e
                    });
                this.trigger(this.currentContainer, r), document.removeEventListener("contextmenu", this[l]), document.removeEventListener("mousemove", this[u]), this.currentContainer = null, this.dragging = !1
            }[l](e) {
                e.preventDefault(), this.openedContextMenu = !0
            }
        }

        function g(e) {
            e.preventDefault()
        }
        t.default = h
    }, function(e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var n, o = r(20),
            i = (n = o) && n.__esModule ? n : {
                default: n
            };
        t.default = i.default
    }, function(e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var n = Object.assign || function(e) {
            for (var t = 1; t < arguments.length; t++) {
                var r = arguments[t];
                for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
            }
            return e
        };
        t.default = class {
            constructor(e = [], t = {}) {
                this.containers = [...e], this.options = n({}, t), this.dragging = !1, this.currentContainer = null
            }
            attach() {
                return this
            }
            detach() {
                return this
            }
            addContainer(...e) {
                this.containers = [...this.containers, ...e]
            }
            removeContainer(...e) {
                this.containers = this.containers.filter((t => !e.includes(t)))
            }
            trigger(e, t) {
                const r = document.createEvent("Event");
                return r.detail = t, r.initEvent(t.type, !0, !0), e.dispatchEvent(r), this.lastEvent = t, t
            }
        }
    }, function(e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.default = function(e) {
            return requestAnimationFrame((() => {
                requestAnimationFrame(e)
            }))
        }
    }, function(e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var n, o = r(23),
            i = (n = o) && n.__esModule ? n : {
                default: n
            };
        t.default = i.default
    }, function(e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.default = function(e, t) {
            if (!e) return null;
            const r = t,
                o = t,
                i = t,
                s = t,
                a = Boolean("string" == typeof t),
                l = Boolean("function" == typeof t),
                c = Boolean(t instanceof NodeList || t instanceof Array),
                u = Boolean(t instanceof HTMLElement);
            let d = e;
            do {
                if (d = d.correspondingUseElement || d.correspondingElement || d, (h = d) ? a ? n.call(h, r) : c ? [...i].includes(h) : u ? s === h : l && o(h) : h) return d;
                d = d.parentNode
            } while (d && d !== document.body && d !== document);
            var h;
            return null
        };
        const n = Element.prototype.matches || Element.prototype.webkitMatchesSelector || Element.prototype.mozMatchesSelector || Element.prototype.msMatchesSelector
    }, function(e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var n, o = r(25),
            i = (n = o) && n.__esModule ? n : {
                default: n
            };
        t.default = i.default
    }, function(e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.defaultOptions = t.scroll = t.onDragStop = t.onDragMove = t.onDragStart = void 0;
        var n, o = Object.assign || function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var r = arguments[t];
                    for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
                }
                return e
            },
            i = r(4),
            s = (n = i) && n.__esModule ? n : {
                default: n
            },
            a = r(2);
        const l = t.onDragStart = Symbol("onDragStart"),
            c = t.onDragMove = Symbol("onDragMove"),
            u = t.onDragStop = Symbol("onDragStop"),
            d = t.scroll = Symbol("scroll"),
            h = t.defaultOptions = {
                speed: 6,
                sensitivity: 50,
                scrollableElements: []
            };
        class g extends s.default {
            constructor(e) {
                super(e), this.options = o({}, h, this.getOptions()), this.currentMousePosition = null, this.scrollAnimationFrame = null, this.scrollableElement = null, this.findScrollableElementFrame = null, this[l] = this[l].bind(this), this[c] = this[c].bind(this), this[u] = this[u].bind(this), this[d] = this[d].bind(this)
            }
            attach() {
                this.draggable.on("drag:start", this[l]).on("drag:move", this[c]).on("drag:stop", this[u])
            }
            detach() {
                this.draggable.off("drag:start", this[l]).off("drag:move", this[c]).off("drag:stop", this[u])
            }
            getOptions() {
                return this.draggable.options.scrollable || {}
            }
            getScrollableElement(e) {
                return this.hasDefinedScrollableElements() ? (0, a.closest)(e, this.options.scrollableElements) || document.documentElement : function(e) {
                    if (!e) return f();
                    const t = getComputedStyle(e).getPropertyValue("position"),
                        r = "absolute" === t,
                        n = (0, a.closest)(e, (e => (!r || ! function(e) {
                            return "static" === getComputedStyle(e).getPropertyValue("position")
                        }(e)) && function(e) {
                            const t = /(auto|scroll)/,
                                r = getComputedStyle(e, null),
                                n = r.getPropertyValue("overflow") + r.getPropertyValue("overflow-y") + r.getPropertyValue("overflow-x");
                            return t.test(n)
                        }(e)));
                    return "fixed" !== t && n ? n : f()
                }(e)
            }
            hasDefinedScrollableElements() {
                return Boolean(0 !== this.options.scrollableElements.length)
            }[l](e) {
                this.findScrollableElementFrame = requestAnimationFrame((() => {
                    this.scrollableElement = this.getScrollableElement(e.source)
                }))
            }[c](e) {
                if (this.findScrollableElementFrame = requestAnimationFrame((() => {
                        this.scrollableElement = this.getScrollableElement(e.sensorEvent.target)
                    })), !this.scrollableElement) return;
                const t = e.sensorEvent,
                    r = {
                        x: 0,
                        y: 0
                    };
                "ontouchstart" in window && (r.y = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0, r.x = window.pageXOffset || document.documentElement.scrollLeft || document.body.scrollLeft || 0), this.currentMousePosition = {
                    clientX: t.clientX - r.x,
                    clientY: t.clientY - r.y
                }, this.scrollAnimationFrame = requestAnimationFrame(this[d])
            }[u]() {
                cancelAnimationFrame(this.scrollAnimationFrame), cancelAnimationFrame(this.findScrollableElementFrame), this.scrollableElement = null, this.scrollAnimationFrame = null, this.findScrollableElementFrame = null, this.currentMousePosition = null
            }[d]() {
                if (!this.scrollableElement || !this.currentMousePosition) return;
                cancelAnimationFrame(this.scrollAnimationFrame);
                const {
                    speed: e,
                    sensitivity: t
                } = this.options, r = this.scrollableElement.getBoundingClientRect(), n = r.bottom > window.innerHeight, o = r.top < 0 || n, i = f(), s = this.scrollableElement, a = this.currentMousePosition.clientX, l = this.currentMousePosition.clientY;
                if (s === document.body || s === document.documentElement || o) {
                    const {
                        innerHeight: r,
                        innerWidth: n
                    } = window;
                    l < t ? i.scrollTop -= e : r - l < t && (i.scrollTop += e), a < t ? i.scrollLeft -= e : n - a < t && (i.scrollLeft += e)
                } else {
                    const {
                        offsetHeight: n,
                        offsetWidth: o
                    } = s;
                    r.top + n - l < t ? s.scrollTop += e : l - r.top < t && (s.scrollTop -= e), r.left + o - a < t ? s.scrollLeft += e : a - r.left < t && (s.scrollLeft -= e)
                }
                this.scrollAnimationFrame = requestAnimationFrame(this[d])
            }
        }

        function f() {
            return document.scrollingElement || document.documentElement
        }
        t.default = g
    }, function(e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.defaultOptions = void 0;
        var n, o = r(27),
            i = (n = o) && n.__esModule ? n : {
                default: n
            };
        t.default = i.default, t.defaultOptions = o.defaultOptions
    }, function(e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.MirrorDestroyEvent = t.MirrorMoveEvent = t.MirrorAttachedEvent = t.MirrorCreatedEvent = t.MirrorCreateEvent = t.MirrorEvent = void 0;
        var n, o = r(3),
            i = (n = o) && n.__esModule ? n : {
                default: n
            };
        class s extends i.default {
            get source() {
                return this.data.source
            }
            get originalSource() {
                return this.data.originalSource
            }
            get sourceContainer() {
                return this.data.sourceContainer
            }
            get sensorEvent() {
                return this.data.sensorEvent
            }
            get dragEvent() {
                return this.data.dragEvent
            }
            get originalEvent() {
                return this.sensorEvent ? this.sensorEvent.originalEvent : null
            }
        }
        t.MirrorEvent = s;
        class a extends s {}
        t.MirrorCreateEvent = a, a.type = "mirror:create";
        class l extends s {
            get mirror() {
                return this.data.mirror
            }
        }
        t.MirrorCreatedEvent = l, l.type = "mirror:created";
        class c extends s {
            get mirror() {
                return this.data.mirror
            }
        }
        t.MirrorAttachedEvent = c, c.type = "mirror:attached";
        class u extends s {
            get mirror() {
                return this.data.mirror
            }
        }
        t.MirrorMoveEvent = u, u.type = "mirror:move", u.cancelable = !0;
        class d extends s {
            get mirror() {
                return this.data.mirror
            }
        }
        t.MirrorDestroyEvent = d, d.type = "mirror:destroy", d.cancelable = !0
    }, function(e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var n = r(29);
        Object.keys(n).forEach((function(e) {
            "default" !== e && "__esModule" !== e && Object.defineProperty(t, e, {
                enumerable: !0,
                get: function() {
                    return n[e]
                }
            })
        }))
    }, function(e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.defaultOptions = t.getAppendableContainer = t.onScroll = t.onMirrorMove = t.onMirrorCreated = t.onDragStop = t.onDragMove = t.onDragStart = void 0;
        var n, o = Object.assign || function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var r = arguments[t];
                    for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
                }
                return e
            },
            i = r(4),
            s = (n = i) && n.__esModule ? n : {
                default: n
            },
            a = r(30);

        function l(e, t) {
            var r = {};
            for (var n in e) t.indexOf(n) >= 0 || Object.prototype.hasOwnProperty.call(e, n) && (r[n] = e[n]);
            return r
        }
        const c = t.onDragStart = Symbol("onDragStart"),
            u = t.onDragMove = Symbol("onDragMove"),
            d = t.onDragStop = Symbol("onDragStop"),
            h = t.onMirrorCreated = Symbol("onMirrorCreated"),
            g = t.onMirrorMove = Symbol("onMirrorMove"),
            f = t.onScroll = Symbol("onScroll"),
            p = t.getAppendableContainer = Symbol("getAppendableContainer"),
            v = t.defaultOptions = {
                constrainDimensions: !1,
                xAxis: !0,
                yAxis: !0,
                cursorOffsetX: null,
                cursorOffsetY: null
            };
        class m extends s.default {
            constructor(e) {
                super(e), this.options = o({}, v, this.getOptions()), this.scrollOffset = {
                    x: 0,
                    y: 0
                }, this.initialScrollOffset = {
                    x: window.scrollX,
                    y: window.scrollY
                }, this[c] = this[c].bind(this), this[u] = this[u].bind(this), this[d] = this[d].bind(this), this[h] = this[h].bind(this), this[g] = this[g].bind(this), this[f] = this[f].bind(this)
            }
            attach() {
                this.draggable.on("drag:start", this[c]).on("drag:move", this[u]).on("drag:stop", this[d]).on("mirror:created", this[h]).on("mirror:move", this[g])
            }
            detach() {
                this.draggable.off("drag:start", this[c]).off("drag:move", this[u]).off("drag:stop", this[d]).off("mirror:created", this[h]).off("mirror:move", this[g])
            }
            getOptions() {
                return this.draggable.options.mirror || {}
            }[c](e) {
                if (e.canceled()) return;
                "ontouchstart" in window && document.addEventListener("scroll", this[f], !0), this.initialScrollOffset = {
                    x: window.scrollX,
                    y: window.scrollY
                };
                const {
                    source: t,
                    originalSource: r,
                    sourceContainer: n,
                    sensorEvent: o
                } = e, i = new a.MirrorCreateEvent({
                    source: t,
                    originalSource: r,
                    sourceContainer: n,
                    sensorEvent: o,
                    dragEvent: e
                });
                if (this.draggable.trigger(i), function(e) {
                        return /^drag/.test(e.originalEvent.type)
                    }(o) || i.canceled()) return;
                const s = this[p](t) || n;
                this.mirror = t.cloneNode(!0);
                const l = new a.MirrorCreatedEvent({
                        source: t,
                        originalSource: r,
                        sourceContainer: n,
                        sensorEvent: o,
                        dragEvent: e,
                        mirror: this.mirror
                    }),
                    c = new a.MirrorAttachedEvent({
                        source: t,
                        originalSource: r,
                        sourceContainer: n,
                        sensorEvent: o,
                        dragEvent: e,
                        mirror: this.mirror
                    });
                this.draggable.trigger(l), s.appendChild(this.mirror), this.draggable.trigger(c)
            }[u](e) {
                if (!this.mirror || e.canceled()) return;
                const {
                    source: t,
                    originalSource: r,
                    sourceContainer: n,
                    sensorEvent: o
                } = e, i = new a.MirrorMoveEvent({
                    source: t,
                    originalSource: r,
                    sourceContainer: n,
                    sensorEvent: o,
                    dragEvent: e,
                    mirror: this.mirror
                });
                this.draggable.trigger(i)
            }[d](e) {
                if ("ontouchstart" in window && document.removeEventListener("scroll", this[f], !0), this.initialScrollOffset = {
                        x: 0,
                        y: 0
                    }, this.scrollOffset = {
                        x: 0,
                        y: 0
                    }, !this.mirror) return;
                const {
                    source: t,
                    sourceContainer: r,
                    sensorEvent: n
                } = e, o = new a.MirrorDestroyEvent({
                    source: t,
                    mirror: this.mirror,
                    sourceContainer: r,
                    sensorEvent: n,
                    dragEvent: e
                });
                this.draggable.trigger(o), o.canceled() || this.mirror.parentNode.removeChild(this.mirror)
            }[f]() {
                this.scrollOffset = {
                    x: window.scrollX - this.initialScrollOffset.x,
                    y: window.scrollY - this.initialScrollOffset.y
                }
            }[h]({
                mirror: e,
                source: t,
                sensorEvent: r
            }) {
                const n = {
                    mirror: e,
                    source: t,
                    sensorEvent: r,
                    mirrorClass: this.draggable.getClassNameFor("mirror"),
                    scrollOffset: this.scrollOffset,
                    options: this.options
                };
                return Promise.resolve(n).then(b).then(y).then(E).then(O).then(_({
                    initial: !0
                })).then(S).then((e => {
                    let {
                        mirrorOffset: t,
                        initialX: r,
                        initialY: n
                    } = e, i = l(e, ["mirrorOffset", "initialX", "initialY"]);
                    return this.mirrorOffset = t, this.initialX = r, this.initialY = n, o({
                        mirrorOffset: t,
                        initialX: r,
                        initialY: n
                    }, i)
                }))
            }[g](e) {
                if (e.canceled()) return null;
                const t = {
                    mirror: e.mirror,
                    sensorEvent: e.sensorEvent,
                    mirrorOffset: this.mirrorOffset,
                    options: this.options,
                    initialX: this.initialX,
                    initialY: this.initialY,
                    scrollOffset: this.scrollOffset
                };
                return Promise.resolve(t).then(_({
                    raf: !0
                }))
            }[p](e) {
                const t = this.options.appendTo;
                return "string" == typeof t ? document.querySelector(t) : t instanceof HTMLElement ? t : "function" == typeof t ? t(e) : e.parentNode
            }
        }

        function b(e) {
            let {
                source: t
            } = e, r = l(e, ["source"]);
            return M((e => {
                const n = t.getBoundingClientRect();
                e(o({
                    source: t,
                    sourceRect: n
                }, r))
            }))
        }

        function y(e) {
            let {
                sensorEvent: t,
                sourceRect: r,
                options: n
            } = e, i = l(e, ["sensorEvent", "sourceRect", "options"]);
            return M((e => {
                const s = null === n.cursorOffsetY ? t.clientY - r.top : n.cursorOffsetY,
                    a = null === n.cursorOffsetX ? t.clientX - r.left : n.cursorOffsetX;
                e(o({
                    sensorEvent: t,
                    sourceRect: r,
                    mirrorOffset: {
                        top: s,
                        left: a
                    },
                    options: n
                }, i))
            }))
        }

        function E(e) {
            let {
                mirror: t,
                source: r,
                options: n
            } = e, i = l(e, ["mirror", "source", "options"]);
            return M((e => {
                let s, a;
                if (n.constrainDimensions) {
                    const e = getComputedStyle(r);
                    s = e.getPropertyValue("height"), a = e.getPropertyValue("width")
                }
                t.style.position = "fixed", t.style.pointerEvents = "none", t.style.top = 0, t.style.left = 0, t.style.margin = 0, n.constrainDimensions && (t.style.height = s, t.style.width = a), e(o({
                    mirror: t,
                    source: r,
                    options: n
                }, i))
            }))
        }

        function O(e) {
            let {
                mirror: t,
                mirrorClass: r
            } = e, n = l(e, ["mirror", "mirrorClass"]);
            return M((e => {
                t.classList.add(r), e(o({
                    mirror: t,
                    mirrorClass: r
                }, n))
            }))
        }

        function S(e) {
            let {
                mirror: t
            } = e, r = l(e, ["mirror"]);
            return M((e => {
                t.removeAttribute("id"), delete t.id, e(o({
                    mirror: t
                }, r))
            }))
        }

        function _({
            withFrame: e = !1,
            initial: t = !1
        } = {}) {
            return r => {
                let {
                    mirror: n,
                    sensorEvent: i,
                    mirrorOffset: s,
                    initialY: a,
                    initialX: c,
                    scrollOffset: u,
                    options: d
                } = r, h = l(r, ["mirror", "sensorEvent", "mirrorOffset", "initialY", "initialX", "scrollOffset", "options"]);
                return M((e => {
                    const r = o({
                        mirror: n,
                        sensorEvent: i,
                        mirrorOffset: s,
                        options: d
                    }, h);
                    if (s) {
                        const e = i.clientX - s.left - u.x,
                            o = i.clientY - s.top - u.y;
                        d.xAxis && d.yAxis || t ? n.style.transform = `translate3d(${e}px, ${o}px, 0)` : d.xAxis && !d.yAxis ? n.style.transform = `translate3d(${e}px, ${a}px, 0)` : d.yAxis && !d.xAxis && (n.style.transform = `translate3d(${c}px, ${o}px, 0)`), t && (r.initialX = e, r.initialY = o)
                    }
                    e(r)
                }), {
                    frame: e
                })
            }
        }

        function M(e, {
            raf: t = !1
        } = {}) {
            return new Promise(((r, n) => {
                t ? requestAnimationFrame((() => {
                    e(r, n)
                })) : e(r, n)
            }))
        }
        t.default = m
    }, function(e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.defaultOptions = void 0;
        var n, o = r(31),
            i = (n = o) && n.__esModule ? n : {
                default: n
            };
        t.default = i.default, t.defaultOptions = o.defaultOptions
    }, function(e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var n, o = Object.assign || function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var r = arguments[t];
                    for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
                }
                return e
            },
            i = r(4),
            s = (n = i) && n.__esModule ? n : {
                default: n
            };
        const a = Symbol("onInitialize"),
            l = Symbol("onDestroy"),
            c = {};
        class u extends s.default {
            constructor(e) {
                super(e), this.options = o({}, c, this.getOptions()), this[a] = this[a].bind(this), this[l] = this[l].bind(this)
            }
            attach() {
                this.draggable.on("draggable:initialize", this[a]).on("draggable:destroy", this[l])
            }
            detach() {
                this.draggable.off("draggable:initialize", this[a]).off("draggable:destroy", this[l])
            }
            getOptions() {
                return this.draggable.options.focusable || {}
            }
            getElements() {
                return [...this.draggable.containers, ...this.draggable.getDraggableElements()]
            }[a]() {
                requestAnimationFrame((() => {
                    this.getElements().forEach((e => function(e) {
                        Boolean(!e.getAttribute("tabindex") && -1 === e.tabIndex) && (d.push(e), e.tabIndex = 0)
                    }(e)))
                }))
            }[l]() {
                requestAnimationFrame((() => {
                    this.getElements().forEach((e => function(e) {
                        const t = d.indexOf(e); - 1 !== t && (e.tabIndex = -1, d.splice(t, 1))
                    }(e)))
                }))
            }
        }
        t.default = u;
        const d = []
    }, function(e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var n, o = r(33),
            i = (n = o) && n.__esModule ? n : {
                default: n
            };
        t.default = i.default
    }, function(e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        t.default = class {
            constructor(e) {
                this.draggable = e
            }
            attach() {
                throw new Error("Not Implemented")
            }
            detach() {
                throw new Error("Not Implemented")
            }
        }
    }, function(e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.defaultOptions = void 0;
        var n, o = Object.assign || function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var r = arguments[t];
                    for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
                }
                return e
            },
            i = r(4),
            s = (n = i) && n.__esModule ? n : {
                default: n
            };
        const a = Symbol("onInitialize"),
            l = Symbol("onDestroy"),
            c = Symbol("announceEvent"),
            u = Symbol("announceMessage"),
            d = t.defaultOptions = {
                expire: 7e3
            };
        class h extends s.default {
            constructor(e) {
                super(e), this.options = o({}, d, this.getOptions()), this.originalTriggerMethod = this.draggable.trigger, this[a] = this[a].bind(this), this[l] = this[l].bind(this)
            }
            attach() {
                this.draggable.on("draggable:initialize", this[a])
            }
            detach() {
                this.draggable.off("draggable:destroy", this[l])
            }
            getOptions() {
                return this.draggable.options.announcements || {}
            }[c](e) {
                const t = this.options[e.type];
                t && "string" == typeof t && this[u](t), t && "function" == typeof t && this[u](t(e))
            }[u](e) {
                ! function(e, {
                    expire: t
                }) {
                    const r = document.createElement("div");
                    r.textContent = e, g.appendChild(r), setTimeout((() => {
                        g.removeChild(r)
                    }), t)
                }(e, {
                    expire: this.options.expire
                })
            }[a]() {
                this.draggable.trigger = e => {
                    try {
                        this[c](e)
                    } finally {
                        this.originalTriggerMethod.call(this.draggable, e)
                    }
                }
            }[l]() {
                this.draggable.trigger = this.originalTriggerMethod
            }
        }
        t.default = h;
        const g = function() {
            const e = document.createElement("div");
            return e.setAttribute("id", "draggable-live-region"), e.setAttribute("aria-relevant", "additions"), e.setAttribute("aria-atomic", "true"), e.setAttribute("aria-live", "assertive"), e.setAttribute("role", "log"), e.style.position = "fixed", e.style.width = "1px", e.style.height = "1px", e.style.top = "-1px", e.style.overflow = "hidden", e
        }();
        document.addEventListener("DOMContentLoaded", (() => {
            document.body.appendChild(g)
        }))
    }, function(e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.defaultOptions = void 0;
        var n, o = r(36),
            i = (n = o) && n.__esModule ? n : {
                default: n
            };
        t.default = i.default, t.defaultOptions = o.defaultOptions
    }, function(e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.DraggableDestroyEvent = t.DraggableInitializedEvent = t.DraggableEvent = void 0;
        var n, o = r(3),
            i = (n = o) && n.__esModule ? n : {
                default: n
            };
        class s extends i.default {
            get draggable() {
                return this.data.draggable
            }
        }
        t.DraggableEvent = s, s.type = "draggable";
        class a extends s {}
        t.DraggableInitializedEvent = a, a.type = "draggable:initialize";
        class l extends s {}
        t.DraggableDestroyEvent = l, l.type = "draggable:destroy"
    }, function(e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.DragStopEvent = t.DragPressureEvent = t.DragOutContainerEvent = t.DragOverContainerEvent = t.DragOutEvent = t.DragOverEvent = t.DragMoveEvent = t.DragStartEvent = t.DragEvent = void 0;
        var n, o = r(3),
            i = (n = o) && n.__esModule ? n : {
                default: n
            };
        class s extends i.default {
            get source() {
                return this.data.source
            }
            get originalSource() {
                return this.data.originalSource
            }
            get mirror() {
                return this.data.mirror
            }
            get sourceContainer() {
                return this.data.sourceContainer
            }
            get sensorEvent() {
                return this.data.sensorEvent
            }
            get originalEvent() {
                return this.sensorEvent ? this.sensorEvent.originalEvent : null
            }
        }
        t.DragEvent = s, s.type = "drag";
        class a extends s {}
        t.DragStartEvent = a, a.type = "drag:start", a.cancelable = !0;
        class l extends s {}
        t.DragMoveEvent = l, l.type = "drag:move";
        class c extends s {
            get overContainer() {
                return this.data.overContainer
            }
            get over() {
                return this.data.over
            }
        }
        t.DragOverEvent = c, c.type = "drag:over", c.cancelable = !0;
        class u extends s {
            get overContainer() {
                return this.data.overContainer
            }
            get over() {
                return this.data.over
            }
        }
        t.DragOutEvent = u, u.type = "drag:out";
        class d extends s {
            get overContainer() {
                return this.data.overContainer
            }
        }
        t.DragOverContainerEvent = d, d.type = "drag:over:container";
        class h extends s {
            get overContainer() {
                return this.data.overContainer
            }
        }
        t.DragOutContainerEvent = h, h.type = "drag:out:container";
        class g extends s {
            get pressure() {
                return this.data.pressure
            }
        }
        t.DragPressureEvent = g, g.type = "drag:pressure";
        class f extends s {}
        t.DragStopEvent = f, f.type = "drag:stop"
    }, function(e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var n = r(8);
        Object.keys(n).forEach((function(e) {
            "default" !== e && "__esModule" !== e && Object.defineProperty(t, e, {
                enumerable: !0,
                get: function() {
                    return n[e]
                }
            })
        }));
        var o = r(7);
        Object.keys(o).forEach((function(e) {
            "default" !== e && "__esModule" !== e && Object.defineProperty(t, e, {
                enumerable: !0,
                get: function() {
                    return o[e]
                }
            })
        }));
        var i = r(6);
        Object.keys(i).forEach((function(e) {
            "default" !== e && "__esModule" !== e && Object.defineProperty(t, e, {
                enumerable: !0,
                get: function() {
                    return i[e]
                }
            })
        }));
        var s = r(5);
        Object.keys(s).forEach((function(e) {
            "default" !== e && "__esModule" !== e && Object.defineProperty(t, e, {
                enumerable: !0,
                get: function() {
                    return s[e]
                }
            })
        }));
        var a, l = r(12),
            c = (a = l) && a.__esModule ? a : {
                default: a
            };
        t.default = c.default
    }, function(e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var n, o = Object.assign || function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var r = arguments[t];
                    for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
                }
                return e
            },
            i = r(40),
            s = (n = i) && n.__esModule ? n : {
                default: n
            },
            a = r(9);
        const l = Symbol("onDragStart"),
            c = Symbol("onDragOverContainer"),
            u = Symbol("onDragOver"),
            d = Symbol("onDragStop");
        const h = {
            "sortable:sorted": function({
                dragEvent: e
            }) {
                const t = e.source.textContent.trim() || e.source.id || "sortable element";
                if (e.over) {
                    const r = e.over.textContent.trim() || e.over.id || "sortable element";
                    return e.source.compareDocumentPosition(e.over) & Node.DOCUMENT_POSITION_FOLLOWING ? `Placed ${t} after ${r}` : `Placed ${t} before ${r}`
                }
                return `Placed ${t} into a different container`
            }
        };
        class g extends s.default {
            constructor(e = [], t = {}) {
                super(e, o({}, t, {
                    announcements: o({}, h, t.announcements || {})
                })), this.startIndex = null, this.startContainer = null, this[l] = this[l].bind(this), this[c] = this[c].bind(this), this[u] = this[u].bind(this), this[d] = this[d].bind(this), this.on("drag:start", this[l]).on("drag:over:container", this[c]).on("drag:over", this[u]).on("drag:stop", this[d])
            }
            destroy() {
                super.destroy(), this.off("drag:start", this[l]).off("drag:over:container", this[c]).off("drag:over", this[u]).off("drag:stop", this[d])
            }
            index(e) {
                return this.getDraggableElementsForContainer(e.parentNode).indexOf(e)
            }[l](e) {
                this.startContainer = e.source.parentNode, this.startIndex = this.index(e.source);
                const t = new a.SortableStartEvent({
                    dragEvent: e,
                    startIndex: this.startIndex,
                    startContainer: this.startContainer
                });
                this.trigger(t), t.canceled() && e.cancel()
            }[c](e) {
                if (e.canceled()) return;
                const {
                    source: t,
                    over: r,
                    overContainer: n
                } = e, o = this.index(t), i = new a.SortableSortEvent({
                    dragEvent: e,
                    currentIndex: o,
                    source: t,
                    over: r
                });
                if (this.trigger(i), i.canceled()) return;
                const s = p({
                    source: t,
                    over: r,
                    overContainer: n,
                    children: this.getDraggableElementsForContainer(n)
                });
                if (!s) return;
                const {
                    oldContainer: l,
                    newContainer: c
                } = s, u = this.index(e.source), d = new a.SortableSortedEvent({
                    dragEvent: e,
                    oldIndex: o,
                    newIndex: u,
                    oldContainer: l,
                    newContainer: c
                });
                this.trigger(d)
            }[u](e) {
                if (e.over === e.originalSource || e.over === e.source) return;
                const {
                    source: t,
                    over: r,
                    overContainer: n
                } = e, o = this.index(t), i = new a.SortableSortEvent({
                    dragEvent: e,
                    currentIndex: o,
                    source: t,
                    over: r
                });
                if (this.trigger(i), i.canceled()) return;
                const s = p({
                    source: t,
                    over: r,
                    overContainer: n,
                    children: this.getDraggableElementsForContainer(n)
                });
                if (!s) return;
                const {
                    oldContainer: l,
                    newContainer: c
                } = s, u = this.index(t), d = new a.SortableSortedEvent({
                    dragEvent: e,
                    oldIndex: o,
                    newIndex: u,
                    oldContainer: l,
                    newContainer: c
                });
                this.trigger(d)
            }[d](e) {
                const t = new a.SortableStopEvent({
                    dragEvent: e,
                    oldIndex: this.startIndex,
                    newIndex: this.index(e.source),
                    oldContainer: this.startContainer,
                    newContainer: e.source.parentNode
                });
                this.trigger(t), this.startIndex = null, this.startContainer = null
            }
        }

        function f(e) {
            return Array.prototype.indexOf.call(e.parentNode.children, e)
        }

        function p({
            source: e,
            over: t,
            overContainer: r,
            children: n
        }) {
            const o = !n.length,
                i = e.parentNode !== r,
                s = t && !i;
            return o ? function(e, t) {
                const r = e.parentNode;
                return t.appendChild(e), {
                    oldContainer: r,
                    newContainer: t
                }
            }(e, r) : s ? function(e, t) {
                const r = f(e),
                    n = f(t);
                r < n ? e.parentNode.insertBefore(e, t.nextElementSibling) : e.parentNode.insertBefore(e, t);
                return {
                    oldContainer: e.parentNode,
                    newContainer: e.parentNode
                }
            }(e, t) : i ? function(e, t, r) {
                const n = e.parentNode;
                t ? t.parentNode.insertBefore(e, t) : r.appendChild(e);
                return {
                    oldContainer: n,
                    newContainer: e.parentNode
                }
            }(e, t, r) : null
        }
        t.default = g
    }, function(e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var n = Object.assign || function(e) {
            for (var t = 1; t < arguments.length; t++) {
                var r = arguments[t];
                for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
            }
            return e
        };
        const o = Symbol("canceled");
        class i {
            constructor(e) {
                this[o] = !1, this.data = e
            }
            get type() {
                return this.constructor.type
            }
            get cancelable() {
                return this.constructor.cancelable
            }
            cancel() {
                this[o] = !0
            }
            canceled() {
                return Boolean(this[o])
            }
            clone(e) {
                return new this.constructor(n({}, this.data, e))
            }
        }
        t.default = i, i.type = "event", i.cancelable = !1
    }, function(e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.SortableStopEvent = t.SortableSortedEvent = t.SortableSortEvent = t.SortableStartEvent = t.SortableEvent = void 0;
        var n, o = r(3),
            i = (n = o) && n.__esModule ? n : {
                default: n
            };
        class s extends i.default {
            get dragEvent() {
                return this.data.dragEvent
            }
        }
        t.SortableEvent = s, s.type = "sortable";
        class a extends s {
            get startIndex() {
                return this.data.startIndex
            }
            get startContainer() {
                return this.data.startContainer
            }
        }
        t.SortableStartEvent = a, a.type = "sortable:start", a.cancelable = !0;
        class l extends s {
            get currentIndex() {
                return this.data.currentIndex
            }
            get over() {
                return this.data.oldIndex
            }
            get overContainer() {
                return this.data.newIndex
            }
        }
        t.SortableSortEvent = l, l.type = "sortable:sort", l.cancelable = !0;
        class c extends s {
            get oldIndex() {
                return this.data.oldIndex
            }
            get newIndex() {
                return this.data.newIndex
            }
            get oldContainer() {
                return this.data.oldContainer
            }
            get newContainer() {
                return this.data.newContainer
            }
        }
        t.SortableSortedEvent = c, c.type = "sortable:sorted";
        class u extends s {
            get oldIndex() {
                return this.data.oldIndex
            }
            get newIndex() {
                return this.data.newIndex
            }
            get oldContainer() {
                return this.data.oldContainer
            }
            get newContainer() {
                return this.data.newContainer
            }
        }
        t.SortableStopEvent = u, u.type = "sortable:stop"
    }, function(e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var n = r(9);
        Object.keys(n).forEach((function(e) {
            "default" !== e && "__esModule" !== e && Object.defineProperty(t, e, {
                enumerable: !0,
                get: function() {
                    return n[e]
                }
            })
        }));
        var o, i = r(41),
            s = (o = i) && o.__esModule ? o : {
                default: o
            };
        t.default = s.default
    }])
})),
function(e, t) {
    "object" == typeof exports && "object" == typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define("Droppable", [], t) : "object" == typeof exports ? exports.Droppable = t() : e.Droppable = t()
}(window, (function() {
    return function(e) {
        var t = {};

        function r(n) {
            if (t[n]) return t[n].exports;
            var o = t[n] = {
                i: n,
                l: !1,
                exports: {}
            };
            return e[n].call(o.exports, o, o.exports, r), o.l = !0, o.exports
        }
        return r.m = e, r.c = t, r.d = function(e, t, n) {
            r.o(e, t) || Object.defineProperty(e, t, {
                enumerable: !0,
                get: n
            })
        }, r.r = function(e) {
            "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
                value: "Module"
            }), Object.defineProperty(e, "__esModule", {
                value: !0
            })
        }, r.t = function(e, t) {
            if (1 & t && (e = r(e)), 8 & t) return e;
            if (4 & t && "object" == typeof e && e && e.__esModule) return e;
            var n = Object.create(null);
            if (r.r(n), Object.defineProperty(n, "default", {
                    enumerable: !0,
                    value: e
                }), 2 & t && "string" != typeof e)
                for (var o in e) r.d(n, o, function(t) {
                    return e[t]
                }.bind(null, o));
            return n
        }, r.n = function(e) {
            var t = e && e.__esModule ? function() {
                return e.default
            } : function() {
                return e
            };
            return r.d(t, "a", t), t
        }, r.o = function(e, t) {
            return Object.prototype.hasOwnProperty.call(e, t)
        }, r.p = "", r(r.s = 44)
    }([function(e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var n = r(40);
        Object.defineProperty(t, "closest", {
            enumerable: !0,
            get: function() {
                return i(n).default
            }
        });
        var o = r(38);

        function i(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        Object.defineProperty(t, "requestNextAnimationFrame", {
            enumerable: !0,
            get: function() {
                return i(o).default
            }
        })
    }, function(e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var n = r(19);
        Object.keys(n).forEach((function(e) {
            "default" !== e && "__esModule" !== e && Object.defineProperty(t, e, {
                enumerable: !0,
                get: function() {
                    return n[e]
                }
            })
        }))
    }, function(e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var n, o = r(22),
            i = (n = o) && n.__esModule ? n : {
                default: n
            };
        t.default = i.default
    }, function(e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var n, o = r(42),
            i = (n = o) && n.__esModule ? n : {
                default: n
            };
        t.default = i.default
    }, function(e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var n, o = r(31),
            i = (n = o) && n.__esModule ? n : {
                default: n
            };
        t.default = i.default
    }, function(e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var n = r(2);
        Object.defineProperty(t, "Sensor", {
            enumerable: !0,
            get: function() {
                return c(n).default
            }
        });
        var o = r(21);
        Object.defineProperty(t, "MouseSensor", {
            enumerable: !0,
            get: function() {
                return c(o).default
            }
        });
        var i = r(18);
        Object.defineProperty(t, "TouchSensor", {
            enumerable: !0,
            get: function() {
                return c(i).default
            }
        });
        var s = r(16);
        Object.defineProperty(t, "DragSensor", {
            enumerable: !0,
            get: function() {
                return c(s).default
            }
        });
        var a = r(14);
        Object.defineProperty(t, "ForceTouchSensor", {
            enumerable: !0,
            get: function() {
                return c(a).default
            }
        });
        var l = r(1);

        function c(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        Object.keys(l).forEach((function(e) {
            "default" !== e && "__esModule" !== e && Object.defineProperty(t, e, {
                enumerable: !0,
                get: function() {
                    return l[e]
                }
            })
        }))
    }, function(e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var n = r(33);
        Object.defineProperty(t, "Announcement", {
            enumerable: !0,
            get: function() {
                return a(n).default
            }
        }), Object.defineProperty(t, "defaultAnnouncementOptions", {
            enumerable: !0,
            get: function() {
                return n.defaultOptions
            }
        });
        var o = r(30);
        Object.defineProperty(t, "Focusable", {
            enumerable: !0,
            get: function() {
                return a(o).default
            }
        });
        var i = r(28);
        Object.defineProperty(t, "Mirror", {
            enumerable: !0,
            get: function() {
                return a(i).default
            }
        }), Object.defineProperty(t, "defaultMirrorOptions", {
            enumerable: !0,
            get: function() {
                return i.defaultOptions
            }
        });
        var s = r(24);

        function a(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        Object.defineProperty(t, "Scrollable", {
            enumerable: !0,
            get: function() {
                return a(s).default
            }
        }), Object.defineProperty(t, "defaultScrollableOptions", {
            enumerable: !0,
            get: function() {
                return s.defaultOptions
            }
        })
    }, function(e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var n = r(34);
        Object.keys(n).forEach((function(e) {
            "default" !== e && "__esModule" !== e && Object.defineProperty(t, e, {
                enumerable: !0,
                get: function() {
                    return n[e]
                }
            })
        }))
    }, function(e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var n = r(35);
        Object.keys(n).forEach((function(e) {
            "default" !== e && "__esModule" !== e && Object.defineProperty(t, e, {
                enumerable: !0,
                get: function() {
                    return n[e]
                }
            })
        }))
    }, function(e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var n = r(43);
        Object.keys(n).forEach((function(e) {
            "default" !== e && "__esModule" !== e && Object.defineProperty(t, e, {
                enumerable: !0,
                get: function() {
                    return n[e]
                }
            })
        }))
    }, function(e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        t.default = class {
            constructor() {
                this.callbacks = {}
            }
            on(e, ...t) {
                return this.callbacks[e] || (this.callbacks[e] = []), this.callbacks[e].push(...t), this
            }
            off(e, t) {
                if (!this.callbacks[e]) return null;
                const r = this.callbacks[e].slice(0);
                for (let n = 0; n < r.length; n++) t === r[n] && this.callbacks[e].splice(n, 1);
                return this
            }
            trigger(e) {
                if (!this.callbacks[e.type]) return null;
                const t = [...this.callbacks[e.type]],
                    r = [];
                for (let n = t.length - 1; n >= 0; n--) {
                    const o = t[n];
                    try {
                        o(e)
                    } catch (e) {
                        r.push(e)
                    }
                }
                return r.length && console.error(`Draggable caught errors while triggering '${e.type}'`, r), this
            }
        }
    }, function(e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var n, o = r(10),
            i = (n = o) && n.__esModule ? n : {
                default: n
            };
        t.default = i.default
    }, function(e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.defaultOptions = void 0;
        var n, o = Object.assign || function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var r = arguments[t];
                    for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
                }
                return e
            },
            i = r(0),
            s = r(6),
            a = r(11),
            l = (n = a) && n.__esModule ? n : {
                default: n
            },
            c = r(5),
            u = r(7),
            d = r(8);
        const h = Symbol("onDragStart"),
            g = Symbol("onDragMove"),
            f = Symbol("onDragStop"),
            p = Symbol("onDragPressure"),
            v = {
                "drag:start": e => `Picked up ${e.source.textContent.trim()||e.source.id||"draggable element"}`,
                "drag:stop": e => `Released ${e.source.textContent.trim()||e.source.id||"draggable element"}`
            },
            m = {
                "container:dragging": "draggable-container--is-dragging",
                "source:dragging": "draggable-source--is-dragging",
                "source:placed": "draggable-source--placed",
                "container:placed": "draggable-container--placed",
                "body:dragging": "draggable--is-dragging",
                "draggable:over": "draggable--over",
                "container:over": "draggable-container--over",
                "source:original": "draggable--original",
                mirror: "draggable-mirror"
            },
            b = t.defaultOptions = {
                draggable: ".draggable-source",
                handle: null,
                delay: 100,
                placedTimeout: 800,
                plugins: [],
                sensors: []
            };
        class y {
            constructor(e = [document.body], t = {}) {
                if (e instanceof NodeList || e instanceof Array) this.containers = [...e];
                else {
                    if (!(e instanceof HTMLElement)) throw new Error("Draggable containers are expected to be of type `NodeList`, `HTMLElement[]` or `HTMLElement`");
                    this.containers = [e]
                }
                this.options = o({}, b, t, {
                    classes: o({}, m, t.classes || {}),
                    announcements: o({}, v, t.announcements || {})
                }), this.emitter = new l.default, this.dragging = !1, this.plugins = [], this.sensors = [], this[h] = this[h].bind(this), this[g] = this[g].bind(this), this[f] = this[f].bind(this), this[p] = this[p].bind(this), document.addEventListener("drag:start", this[h], !0), document.addEventListener("drag:move", this[g], !0), document.addEventListener("drag:stop", this[f], !0), document.addEventListener("drag:pressure", this[p], !0);
                const r = Object.values(y.Plugins).map((e => e)),
                    n = [c.MouseSensor, c.TouchSensor];
                this.addPlugin(...r, ...this.options.plugins), this.addSensor(...n, ...this.options.sensors);
                const i = new u.DraggableInitializedEvent({
                    draggable: this
                });
                this.on("mirror:created", (({
                    mirror: e
                }) => this.mirror = e)), this.on("mirror:destroy", (() => this.mirror = null)), this.trigger(i)
            }
            destroy() {
                document.removeEventListener("drag:start", this[h], !0), document.removeEventListener("drag:move", this[g], !0), document.removeEventListener("drag:stop", this[f], !0), document.removeEventListener("drag:pressure", this[p], !0);
                const e = new u.DraggableDestroyEvent({
                    draggable: this
                });
                this.trigger(e), this.removePlugin(...this.plugins.map((e => e.constructor))), this.removeSensor(...this.sensors.map((e => e.constructor)))
            }
            addPlugin(...e) {
                const t = e.map((e => new e(this)));
                return t.forEach((e => e.attach())), this.plugins = [...this.plugins, ...t], this
            }
            removePlugin(...e) {
                return this.plugins.filter((t => e.includes(t.constructor))).forEach((e => e.detach())), this.plugins = this.plugins.filter((t => !e.includes(t.constructor))), this
            }
            addSensor(...e) {
                const t = e.map((e => new e(this.containers, this.options)));
                return t.forEach((e => e.attach())), this.sensors = [...this.sensors, ...t], this
            }
            removeSensor(...e) {
                return this.sensors.filter((t => e.includes(t.constructor))).forEach((e => e.detach())), this.sensors = this.sensors.filter((t => !e.includes(t.constructor))), this
            }
            addContainer(...e) {
                return this.containers = [...this.containers, ...e], this.sensors.forEach((t => t.addContainer(...e))), this
            }
            removeContainer(...e) {
                return this.containers = this.containers.filter((t => !e.includes(t))), this.sensors.forEach((t => t.removeContainer(...e))), this
            }
            on(e, ...t) {
                return this.emitter.on(e, ...t), this
            }
            off(e, t) {
                return this.emitter.off(e, t), this
            }
            trigger(e) {
                return this.emitter.trigger(e), this
            }
            getClassNameFor(e) {
                return this.options.classes[e]
            }
            isDragging() {
                return Boolean(this.dragging)
            }
            getDraggableElements() {
                return this.containers.reduce(((e, t) => [...e, ...this.getDraggableElementsForContainer(t)]), [])
            }
            getDraggableElementsForContainer(e) {
                return [...e.querySelectorAll(this.options.draggable)].filter((e => e !== this.originalSource && e !== this.mirror))
            }[h](e) {
                const t = E(e),
                    {
                        target: r,
                        container: n
                    } = t;
                if (!this.containers.includes(n)) return;
                if (this.options.handle && r && !(0, i.closest)(r, this.options.handle)) return void t.cancel();
                if (this.originalSource = (0, i.closest)(r, this.options.draggable), this.sourceContainer = n, !this.originalSource) return void t.cancel();
                this.lastPlacedSource && this.lastPlacedContainer && (clearTimeout(this.placedTimeoutID), this.lastPlacedSource.classList.remove(this.getClassNameFor("source:placed")), this.lastPlacedContainer.classList.remove(this.getClassNameFor("container:placed"))), this.source = this.originalSource.cloneNode(!0), this.originalSource.parentNode.insertBefore(this.source, this.originalSource), this.originalSource.style.display = "none";
                const s = new d.DragStartEvent({
                    source: this.source,
                    originalSource: this.originalSource,
                    sourceContainer: n,
                    sensorEvent: t
                });
                if (this.trigger(s), this.dragging = !s.canceled(), s.canceled()) return this.source.parentNode.removeChild(this.source), void(this.originalSource.style.display = null);
                this.originalSource.classList.add(this.getClassNameFor("source:original")), this.source.classList.add(this.getClassNameFor("source:dragging")), this.sourceContainer.classList.add(this.getClassNameFor("container:dragging")), document.body.classList.add(this.getClassNameFor("body:dragging")), O(document.body, "none"), requestAnimationFrame((() => {
                    const t = E(e).clone({
                        target: this.source
                    });
                    this[g](o({}, e, {
                        detail: t
                    }))
                }))
            }[g](e) {
                if (!this.dragging) return;
                const t = E(e),
                    {
                        container: r
                    } = t;
                let n = t.target;
                const o = new d.DragMoveEvent({
                    source: this.source,
                    originalSource: this.originalSource,
                    sourceContainer: r,
                    sensorEvent: t
                });
                this.trigger(o), o.canceled() && t.cancel(), n = (0, i.closest)(n, this.options.draggable);
                const s = (0, i.closest)(t.target, this.containers),
                    a = t.overContainer || s,
                    l = this.currentOverContainer && a !== this.currentOverContainer,
                    c = this.currentOver && n !== this.currentOver,
                    u = a && this.currentOverContainer !== a,
                    h = s && n && this.currentOver !== n;
                if (c) {
                    const e = new d.DragOutEvent({
                        source: this.source,
                        originalSource: this.originalSource,
                        sourceContainer: r,
                        sensorEvent: t,
                        over: this.currentOver
                    });
                    this.currentOver.classList.remove(this.getClassNameFor("draggable:over")), this.currentOver = null, this.trigger(e)
                }
                if (l) {
                    const e = new d.DragOutContainerEvent({
                        source: this.source,
                        originalSource: this.originalSource,
                        sourceContainer: r,
                        sensorEvent: t,
                        overContainer: this.currentOverContainer
                    });
                    this.currentOverContainer.classList.remove(this.getClassNameFor("container:over")), this.currentOverContainer = null, this.trigger(e)
                }
                if (u) {
                    a.classList.add(this.getClassNameFor("container:over"));
                    const e = new d.DragOverContainerEvent({
                        source: this.source,
                        originalSource: this.originalSource,
                        sourceContainer: r,
                        sensorEvent: t,
                        overContainer: a
                    });
                    this.currentOverContainer = a, this.trigger(e)
                }
                if (h) {
                    n.classList.add(this.getClassNameFor("draggable:over"));
                    const e = new d.DragOverEvent({
                        source: this.source,
                        originalSource: this.originalSource,
                        sourceContainer: r,
                        sensorEvent: t,
                        overContainer: a,
                        over: n
                    });
                    this.currentOver = n, this.trigger(e)
                }
            }[f](e) {
                if (!this.dragging) return;
                this.dragging = !1;
                const t = new d.DragStopEvent({
                    source: this.source,
                    originalSource: this.originalSource,
                    sensorEvent: e.sensorEvent,
                    sourceContainer: this.sourceContainer
                });
                this.trigger(t), this.source.parentNode.insertBefore(this.originalSource, this.source), this.source.parentNode.removeChild(this.source), this.originalSource.style.display = "", this.source.classList.remove(this.getClassNameFor("source:dragging")), this.originalSource.classList.remove(this.getClassNameFor("source:original")), this.originalSource.classList.add(this.getClassNameFor("source:placed")), this.sourceContainer.classList.add(this.getClassNameFor("container:placed")), this.sourceContainer.classList.remove(this.getClassNameFor("container:dragging")), document.body.classList.remove(this.getClassNameFor("body:dragging")), O(document.body, ""), this.currentOver && this.currentOver.classList.remove(this.getClassNameFor("draggable:over")), this.currentOverContainer && this.currentOverContainer.classList.remove(this.getClassNameFor("container:over")), this.lastPlacedSource = this.originalSource, this.lastPlacedContainer = this.sourceContainer, this.placedTimeoutID = setTimeout((() => {
                    this.lastPlacedSource && this.lastPlacedSource.classList.remove(this.getClassNameFor("source:placed")), this.lastPlacedContainer && this.lastPlacedContainer.classList.remove(this.getClassNameFor("container:placed")), this.lastPlacedSource = null, this.lastPlacedContainer = null
                }), this.options.placedTimeout), this.source = null, this.originalSource = null, this.currentOverContainer = null, this.currentOver = null, this.sourceContainer = null
            }[p](e) {
                if (!this.dragging) return;
                const t = E(e),
                    r = this.source || (0, i.closest)(t.originalEvent.target, this.options.draggable),
                    n = new d.DragPressureEvent({
                        sensorEvent: t,
                        source: r,
                        pressure: t.pressure
                    });
                this.trigger(n)
            }
        }

        function E(e) {
            return e.detail
        }

        function O(e, t) {
            e.style.webkitUserSelect = t, e.style.mozUserSelect = t, e.style.msUserSelect = t, e.style.oUserSelect = t, e.style.userSelect = t
        }
        t.default = y, y.Plugins = {
            Announcement: s.Announcement,
            Focusable: s.Focusable,
            Mirror: s.Mirror,
            Scrollable: s.Scrollable
        }
    }, function(e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var n, o = r(2),
            i = (n = o) && n.__esModule ? n : {
                default: n
            },
            s = r(1);
        const a = Symbol("onMouseForceWillBegin"),
            l = Symbol("onMouseForceDown"),
            c = Symbol("onMouseDown"),
            u = Symbol("onMouseForceChange"),
            d = Symbol("onMouseMove"),
            h = Symbol("onMouseUp"),
            g = Symbol("onMouseForceGlobalChange");
        class f extends i.default {
            constructor(e = [], t = {}) {
                super(e, t), this.mightDrag = !1, this[a] = this[a].bind(this), this[l] = this[l].bind(this), this[c] = this[c].bind(this), this[u] = this[u].bind(this), this[d] = this[d].bind(this), this[h] = this[h].bind(this)
            }
            attach() {
                for (const e of this.containers) e.addEventListener("webkitmouseforcewillbegin", this[a], !1), e.addEventListener("webkitmouseforcedown", this[l], !1), e.addEventListener("mousedown", this[c], !0), e.addEventListener("webkitmouseforcechanged", this[u], !1);
                document.addEventListener("mousemove", this[d]), document.addEventListener("mouseup", this[h])
            }
            detach() {
                for (const e of this.containers) e.removeEventListener("webkitmouseforcewillbegin", this[a], !1), e.removeEventListener("webkitmouseforcedown", this[l], !1), e.removeEventListener("mousedown", this[c], !0), e.removeEventListener("webkitmouseforcechanged", this[u], !1);
                document.removeEventListener("mousemove", this[d]), document.removeEventListener("mouseup", this[h])
            }[a](e) {
                e.preventDefault(), this.mightDrag = !0
            }[l](e) {
                if (this.dragging) return;
                const t = document.elementFromPoint(e.clientX, e.clientY),
                    r = e.currentTarget,
                    n = new s.DragStartSensorEvent({
                        clientX: e.clientX,
                        clientY: e.clientY,
                        target: t,
                        container: r,
                        originalEvent: e
                    });
                this.trigger(r, n), this.currentContainer = r, this.dragging = !n.canceled(), this.mightDrag = !1
            }[h](e) {
                if (!this.dragging) return;
                const t = new s.DragStopSensorEvent({
                    clientX: e.clientX,
                    clientY: e.clientY,
                    target: null,
                    container: this.currentContainer,
                    originalEvent: e
                });
                this.trigger(this.currentContainer, t), this.currentContainer = null, this.dragging = !1, this.mightDrag = !1
            }[c](e) {
                this.mightDrag && (e.stopPropagation(), e.stopImmediatePropagation(), e.preventDefault())
            }[d](e) {
                if (!this.dragging) return;
                const t = document.elementFromPoint(e.clientX, e.clientY),
                    r = new s.DragMoveSensorEvent({
                        clientX: e.clientX,
                        clientY: e.clientY,
                        target: t,
                        container: this.currentContainer,
                        originalEvent: e
                    });
                this.trigger(this.currentContainer, r)
            }[u](e) {
                if (this.dragging) return;
                const t = e.target,
                    r = e.currentTarget,
                    n = new s.DragPressureSensorEvent({
                        pressure: e.webkitForce,
                        clientX: e.clientX,
                        clientY: e.clientY,
                        target: t,
                        container: r,
                        originalEvent: e
                    });
                this.trigger(r, n)
            }[g](e) {
                if (!this.dragging) return;
                const t = e.target,
                    r = new s.DragPressureSensorEvent({
                        pressure: e.webkitForce,
                        clientX: e.clientX,
                        clientY: e.clientY,
                        target: t,
                        container: this.currentContainer,
                        originalEvent: e
                    });
                this.trigger(this.currentContainer, r)
            }
        }
        t.default = f
    }, function(e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var n, o = r(13),
            i = (n = o) && n.__esModule ? n : {
                default: n
            };
        t.default = i.default
    }, function(e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var n, o = r(0),
            i = r(2),
            s = (n = i) && n.__esModule ? n : {
                default: n
            },
            a = r(1);
        const l = Symbol("onMouseDown"),
            c = Symbol("onMouseUp"),
            u = Symbol("onDragStart"),
            d = Symbol("onDragOver"),
            h = Symbol("onDragEnd"),
            g = Symbol("onDrop"),
            f = Symbol("reset");
        class p extends s.default {
            constructor(e = [], t = {}) {
                super(e, t), this.mouseDownTimeout = null, this.draggableElement = null, this.nativeDraggableElement = null, this[l] = this[l].bind(this), this[c] = this[c].bind(this), this[u] = this[u].bind(this), this[d] = this[d].bind(this), this[h] = this[h].bind(this), this[g] = this[g].bind(this)
            }
            attach() {
                document.addEventListener("mousedown", this[l], !0)
            }
            detach() {
                document.removeEventListener("mousedown", this[l], !0)
            }[u](e) {
                e.dataTransfer.setData("text", ""), e.dataTransfer.effectAllowed = this.options.type;
                const t = document.elementFromPoint(e.clientX, e.clientY);
                if (this.currentContainer = (0, o.closest)(e.target, this.containers), !this.currentContainer) return;
                const r = new a.DragStartSensorEvent({
                    clientX: e.clientX,
                    clientY: e.clientY,
                    target: t,
                    container: this.currentContainer,
                    originalEvent: e
                });
                setTimeout((() => {
                    this.trigger(this.currentContainer, r), r.canceled() ? this.dragging = !1 : this.dragging = !0
                }), 0)
            }[d](e) {
                if (!this.dragging) return;
                const t = document.elementFromPoint(e.clientX, e.clientY),
                    r = this.currentContainer,
                    n = new a.DragMoveSensorEvent({
                        clientX: e.clientX,
                        clientY: e.clientY,
                        target: t,
                        container: r,
                        originalEvent: e
                    });
                this.trigger(r, n), n.canceled() || (e.preventDefault(), e.dataTransfer.dropEffect = this.options.type)
            }[h](e) {
                if (!this.dragging) return;
                document.removeEventListener("mouseup", this[c], !0);
                const t = document.elementFromPoint(e.clientX, e.clientY),
                    r = this.currentContainer,
                    n = new a.DragStopSensorEvent({
                        clientX: e.clientX,
                        clientY: e.clientY,
                        target: t,
                        container: r,
                        originalEvent: e
                    });
                this.trigger(r, n), this.dragging = !1, this[f]()
            }[g](e) {
                e.preventDefault()
            }[l](e) {
                if (e.target && (e.target.form || e.target.contenteditable)) return;
                const t = (0, o.closest)(e.target, (e => e.draggable));
                t && (t.draggable = !1, this.nativeDraggableElement = t), document.addEventListener("mouseup", this[c], !0), document.addEventListener("dragstart", this[u], !1), document.addEventListener("dragover", this[d], !1), document.addEventListener("dragend", this[h], !1), document.addEventListener("drop", this[g], !1);
                const r = (0, o.closest)(e.target, this.options.draggable);
                r && (this.mouseDownTimeout = setTimeout((() => {
                    r.draggable = !0, this.draggableElement = r
                }), this.options.delay))
            }[c]() {
                this[f]()
            }[f]() {
                clearTimeout(this.mouseDownTimeout), document.removeEventListener("mouseup", this[c], !0), document.removeEventListener("dragstart", this[u], !1), document.removeEventListener("dragover", this[d], !1), document.removeEventListener("dragend", this[h], !1), document.removeEventListener("drop", this[g], !1), this.nativeDraggableElement && (this.nativeDraggableElement.draggable = !0, this.nativeDraggableElement = null), this.draggableElement && (this.draggableElement.draggable = !1, this.draggableElement = null)
            }
        }
        t.default = p
    }, function(e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var n, o = r(15),
            i = (n = o) && n.__esModule ? n : {
                default: n
            };
        t.default = i.default
    }, function(e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var n, o = r(0),
            i = r(2),
            s = (n = i) && n.__esModule ? n : {
                default: n
            },
            a = r(1);
        const l = Symbol("onTouchStart"),
            c = Symbol("onTouchHold"),
            u = Symbol("onTouchEnd"),
            d = Symbol("onTouchMove");
        let h = !1;
        window.addEventListener("touchmove", (e => {
            h && e.preventDefault()
        }), {
            passive: !1
        });
        class g extends s.default {
            constructor(e = [], t = {}) {
                super(e, t), this.currentScrollableParent = null, this.tapTimeout = null, this.touchMoved = !1, this[l] = this[l].bind(this), this[c] = this[c].bind(this), this[u] = this[u].bind(this), this[d] = this[d].bind(this)
            }
            attach() {
                document.addEventListener("touchstart", this[l])
            }
            detach() {
                document.removeEventListener("touchstart", this[l])
            }[l](e) {
                const t = (0, o.closest)(e.target, this.containers);
                t && (document.addEventListener("touchmove", this[d]), document.addEventListener("touchend", this[u]), document.addEventListener("touchcancel", this[u]), t.addEventListener("contextmenu", f), this.currentContainer = t, this.tapTimeout = setTimeout(this[c](e, t), this.options.delay))
            }[c](e, t) {
                return () => {
                    if (this.touchMoved) return;
                    const r = e.touches[0] || e.changedTouches[0],
                        n = e.target,
                        o = new a.DragStartSensorEvent({
                            clientX: r.pageX,
                            clientY: r.pageY,
                            target: n,
                            container: t,
                            originalEvent: e
                        });
                    this.trigger(t, o), this.dragging = !o.canceled(), h = this.dragging
                }
            }[d](e) {
                if (this.touchMoved = !0, !this.dragging) return;
                const t = e.touches[0] || e.changedTouches[0],
                    r = document.elementFromPoint(t.pageX - window.scrollX, t.pageY - window.scrollY),
                    n = new a.DragMoveSensorEvent({
                        clientX: t.pageX,
                        clientY: t.pageY,
                        target: r,
                        container: this.currentContainer,
                        originalEvent: e
                    });
                this.trigger(this.currentContainer, n)
            }[u](e) {
                if (this.touchMoved = !1, h = !1, document.removeEventListener("touchend", this[u]), document.removeEventListener("touchcancel", this[u]), document.removeEventListener("touchmove", this[d]), this.currentContainer && this.currentContainer.removeEventListener("contextmenu", f), clearTimeout(this.tapTimeout), !this.dragging) return;
                const t = e.touches[0] || e.changedTouches[0],
                    r = document.elementFromPoint(t.pageX - window.scrollX, t.pageY - window.scrollY);
                e.preventDefault();
                const n = new a.DragStopSensorEvent({
                    clientX: t.pageX,
                    clientY: t.pageY,
                    target: r,
                    container: this.currentContainer,
                    originalEvent: e
                });
                this.trigger(this.currentContainer, n), this.currentContainer = null, this.dragging = !1
            }
        }

        function f(e) {
            e.preventDefault(), e.stopPropagation()
        }
        t.default = g
    }, function(e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var n, o = r(17),
            i = (n = o) && n.__esModule ? n : {
                default: n
            };
        t.default = i.default
    }, function(e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.DragPressureSensorEvent = t.DragStopSensorEvent = t.DragMoveSensorEvent = t.DragStartSensorEvent = t.SensorEvent = void 0;
        var n, o = r(3),
            i = (n = o) && n.__esModule ? n : {
                default: n
            };
        class s extends i.default {
            get originalEvent() {
                return this.data.originalEvent
            }
            get clientX() {
                return this.data.clientX
            }
            get clientY() {
                return this.data.clientY
            }
            get target() {
                return this.data.target
            }
            get container() {
                return this.data.container
            }
            get pressure() {
                return this.data.pressure
            }
        }
        t.SensorEvent = s;
        class a extends s {}
        t.DragStartSensorEvent = a, a.type = "drag:start";
        class l extends s {}
        t.DragMoveSensorEvent = l, l.type = "drag:move";
        class c extends s {}
        t.DragStopSensorEvent = c, c.type = "drag:stop";
        class u extends s {}
        t.DragPressureSensorEvent = u, u.type = "drag:pressure"
    }, function(e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var n, o = r(0),
            i = r(2),
            s = (n = i) && n.__esModule ? n : {
                default: n
            },
            a = r(1);
        const l = Symbol("onContextMenuWhileDragging"),
            c = Symbol("onMouseDown"),
            u = Symbol("onMouseMove"),
            d = Symbol("onMouseUp");
        class h extends s.default {
            constructor(e = [], t = {}) {
                super(e, t), this.mouseDown = !1, this.mouseDownTimeout = null, this.openedContextMenu = !1, this[l] = this[l].bind(this), this[c] = this[c].bind(this), this[u] = this[u].bind(this), this[d] = this[d].bind(this)
            }
            attach() {
                document.addEventListener("mousedown", this[c], !0)
            }
            detach() {
                document.removeEventListener("mousedown", this[c], !0)
            }[c](e) {
                if (0 !== e.button || e.ctrlKey || e.metaKey) return;
                document.addEventListener("mouseup", this[d]);
                const t = document.elementFromPoint(e.clientX, e.clientY),
                    r = (0, o.closest)(t, this.containers);
                r && (document.addEventListener("dragstart", g), this.mouseDown = !0, clearTimeout(this.mouseDownTimeout), this.mouseDownTimeout = setTimeout((() => {
                    if (!this.mouseDown) return;
                    const n = new a.DragStartSensorEvent({
                        clientX: e.clientX,
                        clientY: e.clientY,
                        target: t,
                        container: r,
                        originalEvent: e
                    });
                    this.trigger(r, n), this.currentContainer = r, this.dragging = !n.canceled(), this.dragging && (document.addEventListener("contextmenu", this[l]), document.addEventListener("mousemove", this[u]))
                }), this.options.delay))
            }[u](e) {
                if (!this.dragging) return;
                const t = document.elementFromPoint(e.clientX, e.clientY),
                    r = new a.DragMoveSensorEvent({
                        clientX: e.clientX,
                        clientY: e.clientY,
                        target: t,
                        container: this.currentContainer,
                        originalEvent: e
                    });
                this.trigger(this.currentContainer, r)
            }[d](e) {
                if (this.mouseDown = Boolean(this.openedContextMenu), this.openedContextMenu) return void(this.openedContextMenu = !1);
                if (document.removeEventListener("mouseup", this[d]), document.removeEventListener("dragstart", g), !this.dragging) return;
                const t = document.elementFromPoint(e.clientX, e.clientY),
                    r = new a.DragStopSensorEvent({
                        clientX: e.clientX,
                        clientY: e.clientY,
                        target: t,
                        container: this.currentContainer,
                        originalEvent: e
                    });
                this.trigger(this.currentContainer, r), document.removeEventListener("contextmenu", this[l]), document.removeEventListener("mousemove", this[u]), this.currentContainer = null, this.dragging = !1
            }[l](e) {
                e.preventDefault(), this.openedContextMenu = !0
            }
        }

        function g(e) {
            e.preventDefault()
        }
        t.default = h
    }, function(e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var n, o = r(20),
            i = (n = o) && n.__esModule ? n : {
                default: n
            };
        t.default = i.default
    }, function(e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var n = Object.assign || function(e) {
            for (var t = 1; t < arguments.length; t++) {
                var r = arguments[t];
                for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
            }
            return e
        };
        t.default = class {
            constructor(e = [], t = {}) {
                this.containers = [...e], this.options = n({}, t), this.dragging = !1, this.currentContainer = null
            }
            attach() {
                return this
            }
            detach() {
                return this
            }
            addContainer(...e) {
                this.containers = [...this.containers, ...e]
            }
            removeContainer(...e) {
                this.containers = this.containers.filter((t => !e.includes(t)))
            }
            trigger(e, t) {
                const r = document.createEvent("Event");
                return r.detail = t, r.initEvent(t.type, !0, !0), e.dispatchEvent(r), this.lastEvent = t, t
            }
        }
    }, function(e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.defaultOptions = t.scroll = t.onDragStop = t.onDragMove = t.onDragStart = void 0;
        var n, o = Object.assign || function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var r = arguments[t];
                    for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
                }
                return e
            },
            i = r(4),
            s = (n = i) && n.__esModule ? n : {
                default: n
            },
            a = r(0);
        const l = t.onDragStart = Symbol("onDragStart"),
            c = t.onDragMove = Symbol("onDragMove"),
            u = t.onDragStop = Symbol("onDragStop"),
            d = t.scroll = Symbol("scroll"),
            h = t.defaultOptions = {
                speed: 6,
                sensitivity: 50,
                scrollableElements: []
            };
        class g extends s.default {
            constructor(e) {
                super(e), this.options = o({}, h, this.getOptions()), this.currentMousePosition = null, this.scrollAnimationFrame = null, this.scrollableElement = null, this.findScrollableElementFrame = null, this[l] = this[l].bind(this), this[c] = this[c].bind(this), this[u] = this[u].bind(this), this[d] = this[d].bind(this)
            }
            attach() {
                this.draggable.on("drag:start", this[l]).on("drag:move", this[c]).on("drag:stop", this[u])
            }
            detach() {
                this.draggable.off("drag:start", this[l]).off("drag:move", this[c]).off("drag:stop", this[u])
            }
            getOptions() {
                return this.draggable.options.scrollable || {}
            }
            getScrollableElement(e) {
                return this.hasDefinedScrollableElements() ? (0, a.closest)(e, this.options.scrollableElements) || document.documentElement : function(e) {
                    if (!e) return f();
                    const t = getComputedStyle(e).getPropertyValue("position"),
                        r = "absolute" === t,
                        n = (0, a.closest)(e, (e => (!r || ! function(e) {
                            return "static" === getComputedStyle(e).getPropertyValue("position")
                        }(e)) && function(e) {
                            const t = /(auto|scroll)/,
                                r = getComputedStyle(e, null),
                                n = r.getPropertyValue("overflow") + r.getPropertyValue("overflow-y") + r.getPropertyValue("overflow-x");
                            return t.test(n)
                        }(e)));
                    return "fixed" !== t && n ? n : f()
                }(e)
            }
            hasDefinedScrollableElements() {
                return Boolean(0 !== this.options.scrollableElements.length)
            }[l](e) {
                this.findScrollableElementFrame = requestAnimationFrame((() => {
                    this.scrollableElement = this.getScrollableElement(e.source)
                }))
            }[c](e) {
                if (this.findScrollableElementFrame = requestAnimationFrame((() => {
                        this.scrollableElement = this.getScrollableElement(e.sensorEvent.target)
                    })), !this.scrollableElement) return;
                const t = e.sensorEvent,
                    r = {
                        x: 0,
                        y: 0
                    };
                "ontouchstart" in window && (r.y = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0, r.x = window.pageXOffset || document.documentElement.scrollLeft || document.body.scrollLeft || 0), this.currentMousePosition = {
                    clientX: t.clientX - r.x,
                    clientY: t.clientY - r.y
                }, this.scrollAnimationFrame = requestAnimationFrame(this[d])
            }[u]() {
                cancelAnimationFrame(this.scrollAnimationFrame), cancelAnimationFrame(this.findScrollableElementFrame), this.scrollableElement = null, this.scrollAnimationFrame = null, this.findScrollableElementFrame = null, this.currentMousePosition = null
            }[d]() {
                if (!this.scrollableElement || !this.currentMousePosition) return;
                cancelAnimationFrame(this.scrollAnimationFrame);
                const {
                    speed: e,
                    sensitivity: t
                } = this.options, r = this.scrollableElement.getBoundingClientRect(), n = r.bottom > window.innerHeight, o = r.top < 0 || n, i = f(), s = this.scrollableElement, a = this.currentMousePosition.clientX, l = this.currentMousePosition.clientY;
                if (s === document.body || s === document.documentElement || o) {
                    const {
                        innerHeight: r,
                        innerWidth: n
                    } = window;
                    l < t ? i.scrollTop -= e : r - l < t && (i.scrollTop += e), a < t ? i.scrollLeft -= e : n - a < t && (i.scrollLeft += e)
                } else {
                    const {
                        offsetHeight: n,
                        offsetWidth: o
                    } = s;
                    r.top + n - l < t ? s.scrollTop += e : l - r.top < t && (s.scrollTop -= e), r.left + o - a < t ? s.scrollLeft += e : a - r.left < t && (s.scrollLeft -= e)
                }
                this.scrollAnimationFrame = requestAnimationFrame(this[d])
            }
        }

        function f() {
            return document.scrollingElement || document.documentElement
        }
        t.default = g
    }, function(e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.defaultOptions = void 0;
        var n, o = r(23),
            i = (n = o) && n.__esModule ? n : {
                default: n
            };
        t.default = i.default, t.defaultOptions = o.defaultOptions
    }, function(e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.MirrorDestroyEvent = t.MirrorMoveEvent = t.MirrorAttachedEvent = t.MirrorCreatedEvent = t.MirrorCreateEvent = t.MirrorEvent = void 0;
        var n, o = r(3),
            i = (n = o) && n.__esModule ? n : {
                default: n
            };
        class s extends i.default {
            get source() {
                return this.data.source
            }
            get originalSource() {
                return this.data.originalSource
            }
            get sourceContainer() {
                return this.data.sourceContainer
            }
            get sensorEvent() {
                return this.data.sensorEvent
            }
            get dragEvent() {
                return this.data.dragEvent
            }
            get originalEvent() {
                return this.sensorEvent ? this.sensorEvent.originalEvent : null
            }
        }
        t.MirrorEvent = s;
        class a extends s {}
        t.MirrorCreateEvent = a, a.type = "mirror:create";
        class l extends s {
            get mirror() {
                return this.data.mirror
            }
        }
        t.MirrorCreatedEvent = l, l.type = "mirror:created";
        class c extends s {
            get mirror() {
                return this.data.mirror
            }
        }
        t.MirrorAttachedEvent = c, c.type = "mirror:attached";
        class u extends s {
            get mirror() {
                return this.data.mirror
            }
        }
        t.MirrorMoveEvent = u, u.type = "mirror:move", u.cancelable = !0;
        class d extends s {
            get mirror() {
                return this.data.mirror
            }
        }
        t.MirrorDestroyEvent = d, d.type = "mirror:destroy", d.cancelable = !0
    }, function(e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var n = r(25);
        Object.keys(n).forEach((function(e) {
            "default" !== e && "__esModule" !== e && Object.defineProperty(t, e, {
                enumerable: !0,
                get: function() {
                    return n[e]
                }
            })
        }))
    }, function(e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.defaultOptions = t.getAppendableContainer = t.onScroll = t.onMirrorMove = t.onMirrorCreated = t.onDragStop = t.onDragMove = t.onDragStart = void 0;
        var n, o = Object.assign || function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var r = arguments[t];
                    for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
                }
                return e
            },
            i = r(4),
            s = (n = i) && n.__esModule ? n : {
                default: n
            },
            a = r(26);

        function l(e, t) {
            var r = {};
            for (var n in e) t.indexOf(n) >= 0 || Object.prototype.hasOwnProperty.call(e, n) && (r[n] = e[n]);
            return r
        }
        const c = t.onDragStart = Symbol("onDragStart"),
            u = t.onDragMove = Symbol("onDragMove"),
            d = t.onDragStop = Symbol("onDragStop"),
            h = t.onMirrorCreated = Symbol("onMirrorCreated"),
            g = t.onMirrorMove = Symbol("onMirrorMove"),
            f = t.onScroll = Symbol("onScroll"),
            p = t.getAppendableContainer = Symbol("getAppendableContainer"),
            v = t.defaultOptions = {
                constrainDimensions: !1,
                xAxis: !0,
                yAxis: !0,
                cursorOffsetX: null,
                cursorOffsetY: null
            };
        class m extends s.default {
            constructor(e) {
                super(e), this.options = o({}, v, this.getOptions()), this.scrollOffset = {
                    x: 0,
                    y: 0
                }, this.initialScrollOffset = {
                    x: window.scrollX,
                    y: window.scrollY
                }, this[c] = this[c].bind(this), this[u] = this[u].bind(this), this[d] = this[d].bind(this), this[h] = this[h].bind(this), this[g] = this[g].bind(this), this[f] = this[f].bind(this)
            }
            attach() {
                this.draggable.on("drag:start", this[c]).on("drag:move", this[u]).on("drag:stop", this[d]).on("mirror:created", this[h]).on("mirror:move", this[g])
            }
            detach() {
                this.draggable.off("drag:start", this[c]).off("drag:move", this[u]).off("drag:stop", this[d]).off("mirror:created", this[h]).off("mirror:move", this[g])
            }
            getOptions() {
                return this.draggable.options.mirror || {}
            }[c](e) {
                if (e.canceled()) return;
                "ontouchstart" in window && document.addEventListener("scroll", this[f], !0), this.initialScrollOffset = {
                    x: window.scrollX,
                    y: window.scrollY
                };
                const {
                    source: t,
                    originalSource: r,
                    sourceContainer: n,
                    sensorEvent: o
                } = e, i = new a.MirrorCreateEvent({
                    source: t,
                    originalSource: r,
                    sourceContainer: n,
                    sensorEvent: o,
                    dragEvent: e
                });
                if (this.draggable.trigger(i), function(e) {
                        return /^drag/.test(e.originalEvent.type)
                    }(o) || i.canceled()) return;
                const s = this[p](t) || n;
                this.mirror = t.cloneNode(!0);
                const l = new a.MirrorCreatedEvent({
                        source: t,
                        originalSource: r,
                        sourceContainer: n,
                        sensorEvent: o,
                        dragEvent: e,
                        mirror: this.mirror
                    }),
                    c = new a.MirrorAttachedEvent({
                        source: t,
                        originalSource: r,
                        sourceContainer: n,
                        sensorEvent: o,
                        dragEvent: e,
                        mirror: this.mirror
                    });
                this.draggable.trigger(l), s.appendChild(this.mirror), this.draggable.trigger(c)
            }[u](e) {
                if (!this.mirror || e.canceled()) return;
                const {
                    source: t,
                    originalSource: r,
                    sourceContainer: n,
                    sensorEvent: o
                } = e, i = new a.MirrorMoveEvent({
                    source: t,
                    originalSource: r,
                    sourceContainer: n,
                    sensorEvent: o,
                    dragEvent: e,
                    mirror: this.mirror
                });
                this.draggable.trigger(i)
            }[d](e) {
                if ("ontouchstart" in window && document.removeEventListener("scroll", this[f], !0), this.initialScrollOffset = {
                        x: 0,
                        y: 0
                    }, this.scrollOffset = {
                        x: 0,
                        y: 0
                    }, !this.mirror) return;
                const {
                    source: t,
                    sourceContainer: r,
                    sensorEvent: n
                } = e, o = new a.MirrorDestroyEvent({
                    source: t,
                    mirror: this.mirror,
                    sourceContainer: r,
                    sensorEvent: n,
                    dragEvent: e
                });
                this.draggable.trigger(o), o.canceled() || this.mirror.parentNode.removeChild(this.mirror)
            }[f]() {
                this.scrollOffset = {
                    x: window.scrollX - this.initialScrollOffset.x,
                    y: window.scrollY - this.initialScrollOffset.y
                }
            }[h]({
                mirror: e,
                source: t,
                sensorEvent: r
            }) {
                const n = {
                    mirror: e,
                    source: t,
                    sensorEvent: r,
                    mirrorClass: this.draggable.getClassNameFor("mirror"),
                    scrollOffset: this.scrollOffset,
                    options: this.options
                };
                return Promise.resolve(n).then(b).then(y).then(E).then(O).then(_({
                    initial: !0
                })).then(S).then((e => {
                    let {
                        mirrorOffset: t,
                        initialX: r,
                        initialY: n
                    } = e, i = l(e, ["mirrorOffset", "initialX", "initialY"]);
                    return this.mirrorOffset = t, this.initialX = r, this.initialY = n, o({
                        mirrorOffset: t,
                        initialX: r,
                        initialY: n
                    }, i)
                }))
            }[g](e) {
                if (e.canceled()) return null;
                const t = {
                    mirror: e.mirror,
                    sensorEvent: e.sensorEvent,
                    mirrorOffset: this.mirrorOffset,
                    options: this.options,
                    initialX: this.initialX,
                    initialY: this.initialY,
                    scrollOffset: this.scrollOffset
                };
                return Promise.resolve(t).then(_({
                    raf: !0
                }))
            }[p](e) {
                const t = this.options.appendTo;
                return "string" == typeof t ? document.querySelector(t) : t instanceof HTMLElement ? t : "function" == typeof t ? t(e) : e.parentNode
            }
        }

        function b(e) {
            let {
                source: t
            } = e, r = l(e, ["source"]);
            return M((e => {
                const n = t.getBoundingClientRect();
                e(o({
                    source: t,
                    sourceRect: n
                }, r))
            }))
        }

        function y(e) {
            let {
                sensorEvent: t,
                sourceRect: r,
                options: n
            } = e, i = l(e, ["sensorEvent", "sourceRect", "options"]);
            return M((e => {
                const s = null === n.cursorOffsetY ? t.clientY - r.top : n.cursorOffsetY,
                    a = null === n.cursorOffsetX ? t.clientX - r.left : n.cursorOffsetX;
                e(o({
                    sensorEvent: t,
                    sourceRect: r,
                    mirrorOffset: {
                        top: s,
                        left: a
                    },
                    options: n
                }, i))
            }))
        }

        function E(e) {
            let {
                mirror: t,
                source: r,
                options: n
            } = e, i = l(e, ["mirror", "source", "options"]);
            return M((e => {
                let s, a;
                if (n.constrainDimensions) {
                    const e = getComputedStyle(r);
                    s = e.getPropertyValue("height"), a = e.getPropertyValue("width")
                }
                t.style.position = "fixed", t.style.pointerEvents = "none", t.style.top = 0, t.style.left = 0, t.style.margin = 0, n.constrainDimensions && (t.style.height = s, t.style.width = a), e(o({
                    mirror: t,
                    source: r,
                    options: n
                }, i))
            }))
        }

        function O(e) {
            let {
                mirror: t,
                mirrorClass: r
            } = e, n = l(e, ["mirror", "mirrorClass"]);
            return M((e => {
                t.classList.add(r), e(o({
                    mirror: t,
                    mirrorClass: r
                }, n))
            }))
        }

        function S(e) {
            let {
                mirror: t
            } = e, r = l(e, ["mirror"]);
            return M((e => {
                t.removeAttribute("id"), delete t.id, e(o({
                    mirror: t
                }, r))
            }))
        }

        function _({
            withFrame: e = !1,
            initial: t = !1
        } = {}) {
            return r => {
                let {
                    mirror: n,
                    sensorEvent: i,
                    mirrorOffset: s,
                    initialY: a,
                    initialX: c,
                    scrollOffset: u,
                    options: d
                } = r, h = l(r, ["mirror", "sensorEvent", "mirrorOffset", "initialY", "initialX", "scrollOffset", "options"]);
                return M((e => {
                    const r = o({
                        mirror: n,
                        sensorEvent: i,
                        mirrorOffset: s,
                        options: d
                    }, h);
                    if (s) {
                        const e = i.clientX - s.left - u.x,
                            o = i.clientY - s.top - u.y;
                        d.xAxis && d.yAxis || t ? n.style.transform = `translate3d(${e}px, ${o}px, 0)` : d.xAxis && !d.yAxis ? n.style.transform = `translate3d(${e}px, ${a}px, 0)` : d.yAxis && !d.xAxis && (n.style.transform = `translate3d(${c}px, ${o}px, 0)`), t && (r.initialX = e, r.initialY = o)
                    }
                    e(r)
                }), {
                    frame: e
                })
            }
        }

        function M(e, {
            raf: t = !1
        } = {}) {
            return new Promise(((r, n) => {
                t ? requestAnimationFrame((() => {
                    e(r, n)
                })) : e(r, n)
            }))
        }
        t.default = m
    }, function(e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.defaultOptions = void 0;
        var n, o = r(27),
            i = (n = o) && n.__esModule ? n : {
                default: n
            };
        t.default = i.default, t.defaultOptions = o.defaultOptions
    }, function(e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var n, o = Object.assign || function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var r = arguments[t];
                    for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
                }
                return e
            },
            i = r(4),
            s = (n = i) && n.__esModule ? n : {
                default: n
            };
        const a = Symbol("onInitialize"),
            l = Symbol("onDestroy"),
            c = {};
        class u extends s.default {
            constructor(e) {
                super(e), this.options = o({}, c, this.getOptions()), this[a] = this[a].bind(this), this[l] = this[l].bind(this)
            }
            attach() {
                this.draggable.on("draggable:initialize", this[a]).on("draggable:destroy", this[l])
            }
            detach() {
                this.draggable.off("draggable:initialize", this[a]).off("draggable:destroy", this[l])
            }
            getOptions() {
                return this.draggable.options.focusable || {}
            }
            getElements() {
                return [...this.draggable.containers, ...this.draggable.getDraggableElements()]
            }[a]() {
                requestAnimationFrame((() => {
                    this.getElements().forEach((e => function(e) {
                        Boolean(!e.getAttribute("tabindex") && -1 === e.tabIndex) && (d.push(e), e.tabIndex = 0)
                    }(e)))
                }))
            }[l]() {
                requestAnimationFrame((() => {
                    this.getElements().forEach((e => function(e) {
                        const t = d.indexOf(e); - 1 !== t && (e.tabIndex = -1, d.splice(t, 1))
                    }(e)))
                }))
            }
        }
        t.default = u;
        const d = []
    }, function(e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var n, o = r(29),
            i = (n = o) && n.__esModule ? n : {
                default: n
            };
        t.default = i.default
    }, function(e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        t.default = class {
            constructor(e) {
                this.draggable = e
            }
            attach() {
                throw new Error("Not Implemented")
            }
            detach() {
                throw new Error("Not Implemented")
            }
        }
    }, function(e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.defaultOptions = void 0;
        var n, o = Object.assign || function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var r = arguments[t];
                    for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
                }
                return e
            },
            i = r(4),
            s = (n = i) && n.__esModule ? n : {
                default: n
            };
        const a = Symbol("onInitialize"),
            l = Symbol("onDestroy"),
            c = Symbol("announceEvent"),
            u = Symbol("announceMessage"),
            d = t.defaultOptions = {
                expire: 7e3
            };
        class h extends s.default {
            constructor(e) {
                super(e), this.options = o({}, d, this.getOptions()), this.originalTriggerMethod = this.draggable.trigger, this[a] = this[a].bind(this), this[l] = this[l].bind(this)
            }
            attach() {
                this.draggable.on("draggable:initialize", this[a])
            }
            detach() {
                this.draggable.off("draggable:destroy", this[l])
            }
            getOptions() {
                return this.draggable.options.announcements || {}
            }[c](e) {
                const t = this.options[e.type];
                t && "string" == typeof t && this[u](t), t && "function" == typeof t && this[u](t(e))
            }[u](e) {
                ! function(e, {
                    expire: t
                }) {
                    const r = document.createElement("div");
                    r.textContent = e, g.appendChild(r), setTimeout((() => {
                        g.removeChild(r)
                    }), t)
                }(e, {
                    expire: this.options.expire
                })
            }[a]() {
                this.draggable.trigger = e => {
                    try {
                        this[c](e)
                    } finally {
                        this.originalTriggerMethod.call(this.draggable, e)
                    }
                }
            }[l]() {
                this.draggable.trigger = this.originalTriggerMethod
            }
        }
        t.default = h;
        const g = function() {
            const e = document.createElement("div");
            return e.setAttribute("id", "draggable-live-region"), e.setAttribute("aria-relevant", "additions"), e.setAttribute("aria-atomic", "true"), e.setAttribute("aria-live", "assertive"), e.setAttribute("role", "log"), e.style.position = "fixed", e.style.width = "1px", e.style.height = "1px", e.style.top = "-1px", e.style.overflow = "hidden", e
        }();
        document.addEventListener("DOMContentLoaded", (() => {
            document.body.appendChild(g)
        }))
    }, function(e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.defaultOptions = void 0;
        var n, o = r(32),
            i = (n = o) && n.__esModule ? n : {
                default: n
            };
        t.default = i.default, t.defaultOptions = o.defaultOptions
    }, function(e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.DraggableDestroyEvent = t.DraggableInitializedEvent = t.DraggableEvent = void 0;
        var n, o = r(3),
            i = (n = o) && n.__esModule ? n : {
                default: n
            };
        class s extends i.default {
            get draggable() {
                return this.data.draggable
            }
        }
        t.DraggableEvent = s, s.type = "draggable";
        class a extends s {}
        t.DraggableInitializedEvent = a, a.type = "draggable:initialize";
        class l extends s {}
        t.DraggableDestroyEvent = l, l.type = "draggable:destroy"
    }, function(e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.DragStopEvent = t.DragPressureEvent = t.DragOutContainerEvent = t.DragOverContainerEvent = t.DragOutEvent = t.DragOverEvent = t.DragMoveEvent = t.DragStartEvent = t.DragEvent = void 0;
        var n, o = r(3),
            i = (n = o) && n.__esModule ? n : {
                default: n
            };
        class s extends i.default {
            get source() {
                return this.data.source
            }
            get originalSource() {
                return this.data.originalSource
            }
            get mirror() {
                return this.data.mirror
            }
            get sourceContainer() {
                return this.data.sourceContainer
            }
            get sensorEvent() {
                return this.data.sensorEvent
            }
            get originalEvent() {
                return this.sensorEvent ? this.sensorEvent.originalEvent : null
            }
        }
        t.DragEvent = s, s.type = "drag";
        class a extends s {}
        t.DragStartEvent = a, a.type = "drag:start", a.cancelable = !0;
        class l extends s {}
        t.DragMoveEvent = l, l.type = "drag:move";
        class c extends s {
            get overContainer() {
                return this.data.overContainer
            }
            get over() {
                return this.data.over
            }
        }
        t.DragOverEvent = c, c.type = "drag:over", c.cancelable = !0;
        class u extends s {
            get overContainer() {
                return this.data.overContainer
            }
            get over() {
                return this.data.over
            }
        }
        t.DragOutEvent = u, u.type = "drag:out";
        class d extends s {
            get overContainer() {
                return this.data.overContainer
            }
        }
        t.DragOverContainerEvent = d, d.type = "drag:over:container";
        class h extends s {
            get overContainer() {
                return this.data.overContainer
            }
        }
        t.DragOutContainerEvent = h, h.type = "drag:out:container";
        class g extends s {
            get pressure() {
                return this.data.pressure
            }
        }
        t.DragPressureEvent = g, g.type = "drag:pressure";
        class f extends s {}
        t.DragStopEvent = f, f.type = "drag:stop"
    }, function(e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var n = r(8);
        Object.keys(n).forEach((function(e) {
            "default" !== e && "__esModule" !== e && Object.defineProperty(t, e, {
                enumerable: !0,
                get: function() {
                    return n[e]
                }
            })
        }));
        var o = r(7);
        Object.keys(o).forEach((function(e) {
            "default" !== e && "__esModule" !== e && Object.defineProperty(t, e, {
                enumerable: !0,
                get: function() {
                    return o[e]
                }
            })
        }));
        var i = r(6);
        Object.keys(i).forEach((function(e) {
            "default" !== e && "__esModule" !== e && Object.defineProperty(t, e, {
                enumerable: !0,
                get: function() {
                    return i[e]
                }
            })
        }));
        var s = r(5);
        Object.keys(s).forEach((function(e) {
            "default" !== e && "__esModule" !== e && Object.defineProperty(t, e, {
                enumerable: !0,
                get: function() {
                    return s[e]
                }
            })
        }));
        var a, l = r(12),
            c = (a = l) && a.__esModule ? a : {
                default: a
            };
        t.default = c.default
    }, function(e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.default = function(e) {
            return requestAnimationFrame((() => {
                requestAnimationFrame(e)
            }))
        }
    }, function(e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var n, o = r(37),
            i = (n = o) && n.__esModule ? n : {
                default: n
            };
        t.default = i.default
    }, function(e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.default = function(e, t) {
            if (!e) return null;
            const r = t,
                o = t,
                i = t,
                s = t,
                a = Boolean("string" == typeof t),
                l = Boolean("function" == typeof t),
                c = Boolean(t instanceof NodeList || t instanceof Array),
                u = Boolean(t instanceof HTMLElement);
            let d = e;
            do {
                if (d = d.correspondingUseElement || d.correspondingElement || d, (h = d) ? a ? n.call(h, r) : c ? [...i].includes(h) : u ? s === h : l && o(h) : h) return d;
                d = d.parentNode
            } while (d && d !== document.body && d !== document);
            var h;
            return null
        };
        const n = Element.prototype.matches || Element.prototype.webkitMatchesSelector || Element.prototype.mozMatchesSelector || Element.prototype.msMatchesSelector
    }, function(e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var n, o = r(39),
            i = (n = o) && n.__esModule ? n : {
                default: n
            };
        t.default = i.default
    }, function(e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var n, o = Object.assign || function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var r = arguments[t];
                    for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
                }
                return e
            },
            i = r(0),
            s = r(36),
            a = (n = s) && n.__esModule ? n : {
                default: n
            },
            l = r(9);
        const c = Symbol("onDragStart"),
            u = Symbol("onDragMove"),
            d = Symbol("onDragStop"),
            h = Symbol("dropInDropZone"),
            g = Symbol("returnToOriginalDropzone"),
            f = Symbol("closestDropzone"),
            p = Symbol("getDropzones");
        const v = {
                "droppable:dropped": function({
                    dragEvent: e,
                    dropzone: t
                }) {
                    return `Dropped ${e.source.textContent.trim()||e.source.id||"draggable element"} into ${t.textContent.trim()||t.id||"droppable element"}`
                },
                "droppable:returned": function({
                    dragEvent: e,
                    dropzone: t
                }) {
                    return `Returned ${e.source.textContent.trim()||e.source.id||"draggable element"} from ${t.textContent.trim()||t.id||"droppable element"}`
                }
            },
            m = {
                "droppable:active": "draggable-dropzone--active",
                "droppable:occupied": "draggable-dropzone--occupied"
            },
            b = {
                dropzone: ".draggable-droppable"
            };
        class y extends a.default {
            constructor(e = [], t = {}) {
                super(e, o({}, b, t, {
                    classes: o({}, m, t.classes || {}),
                    announcements: o({}, v, t.announcements || {})
                })), this.dropzones = null, this.lastDropzone = null, this.initialDropzone = null, this[c] = this[c].bind(this), this[u] = this[u].bind(this), this[d] = this[d].bind(this), this.on("drag:start", this[c]).on("drag:move", this[u]).on("drag:stop", this[d])
            }
            destroy() {
                super.destroy(), this.off("drag:start", this[c]).off("drag:move", this[u]).off("drag:stop", this[d])
            }[c](e) {
                if (e.canceled()) return;
                this.dropzones = [...this[p]()];
                const t = (0, i.closest)(e.sensorEvent.target, this.options.dropzone);
                if (!t) return void e.cancel();
                const r = new l.DroppableStartEvent({
                    dragEvent: e,
                    dropzone: t
                });
                if (this.trigger(r), r.canceled()) e.cancel();
                else {
                    this.initialDropzone = t;
                    for (const e of this.dropzones) e.classList.contains(this.getClassNameFor("droppable:occupied")) || e.classList.add(this.getClassNameFor("droppable:active"))
                }
            }[u](e) {
                if (e.canceled()) return;
                const t = this[f](e.sensorEvent.target);
                t && !t.classList.contains(this.getClassNameFor("droppable:occupied")) && this[h](e, t) ? this.lastDropzone = t : t && t !== this.initialDropzone || !this.lastDropzone || (this[g](e), this.lastDropzone = null)
            }[d](e) {
                const t = new l.DroppableStopEvent({
                    dragEvent: e,
                    dropzone: this.lastDropzone || this.initialDropzone
                });
                this.trigger(t);
                const r = this.getClassNameFor("droppable:occupied");
                for (const e of this.dropzones) e.classList.remove(this.getClassNameFor("droppable:active"));
                this.lastDropzone && this.lastDropzone !== this.initialDropzone && this.initialDropzone.classList.remove(r), this.dropzones = null, this.lastDropzone = null, this.initialDropzone = null
            }[h](e, t) {
                const r = new l.DroppableDroppedEvent({
                    dragEvent: e,
                    dropzone: t
                });
                if (this.trigger(r), r.canceled()) return !1;
                const n = this.getClassNameFor("droppable:occupied");
                return this.lastDropzone && this.lastDropzone.classList.remove(n), t.appendChild(e.source), t.classList.add(n), !0
            }[g](e) {
                const t = new l.DroppableReturnedEvent({
                    dragEvent: e,
                    dropzone: this.lastDropzone
                });
                this.trigger(t), t.canceled() || (this.initialDropzone.appendChild(e.source), this.lastDropzone.classList.remove(this.getClassNameFor("droppable:occupied")))
            }[f](e) {
                return this.dropzones ? (0, i.closest)(e, this.dropzones) : null
            }[p]() {
                const e = this.options.dropzone;
                return "string" == typeof e ? document.querySelectorAll(e) : e instanceof NodeList || e instanceof Array ? e : "function" == typeof e ? e() : []
            }
        }
        t.default = y
    }, function(e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var n = Object.assign || function(e) {
            for (var t = 1; t < arguments.length; t++) {
                var r = arguments[t];
                for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
            }
            return e
        };
        const o = Symbol("canceled");
        class i {
            constructor(e) {
                this[o] = !1, this.data = e
            }
            get type() {
                return this.constructor.type
            }
            get cancelable() {
                return this.constructor.cancelable
            }
            cancel() {
                this[o] = !0
            }
            canceled() {
                return Boolean(this[o])
            }
            clone(e) {
                return new this.constructor(n({}, this.data, e))
            }
        }
        t.default = i, i.type = "event", i.cancelable = !1
    }, function(e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.DroppableStopEvent = t.DroppableReturnedEvent = t.DroppableDroppedEvent = t.DroppableStartEvent = t.DroppableEvent = void 0;
        var n, o = r(3),
            i = (n = o) && n.__esModule ? n : {
                default: n
            };
        class s extends i.default {
            get dragEvent() {
                return this.data.dragEvent
            }
        }
        t.DroppableEvent = s, s.type = "droppable";
        class a extends s {
            get dropzone() {
                return this.data.dropzone
            }
        }
        t.DroppableStartEvent = a, a.type = "droppable:start", a.cancelable = !0;
        class l extends s {
            get dropzone() {
                return this.data.dropzone
            }
        }
        t.DroppableDroppedEvent = l, l.type = "droppable:dropped", l.cancelable = !0;
        class c extends s {
            get dropzone() {
                return this.data.dropzone
            }
        }
        t.DroppableReturnedEvent = c, c.type = "droppable:returned", c.cancelable = !0;
        class u extends s {
            get dropzone() {
                return this.data.dropzone
            }
        }
        t.DroppableStopEvent = u, u.type = "droppable:stop", u.cancelable = !0
    }, function(e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var n = r(9);
        Object.keys(n).forEach((function(e) {
            "default" !== e && "__esModule" !== e && Object.defineProperty(t, e, {
                enumerable: !0,
                get: function() {
                    return n[e]
                }
            })
        }));
        var o, i = r(41),
            s = (o = i) && o.__esModule ? o : {
                default: o
            };
        t.default = s.default
    }])
})),
function(e, t) {
    "object" == typeof exports && "object" == typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define("Swappable", [], t) : "object" == typeof exports ? exports.Swappable = t() : e.Swappable = t()
}(window, (function() {
    return function(e) {
        var t = {};

        function r(n) {
            if (t[n]) return t[n].exports;
            var o = t[n] = {
                i: n,
                l: !1,
                exports: {}
            };
            return e[n].call(o.exports, o, o.exports, r), o.l = !0, o.exports
        }
        return r.m = e, r.c = t, r.d = function(e, t, n) {
            r.o(e, t) || Object.defineProperty(e, t, {
                enumerable: !0,
                get: n
            })
        }, r.r = function(e) {
            "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
                value: "Module"
            }), Object.defineProperty(e, "__esModule", {
                value: !0
            })
        }, r.t = function(e, t) {
            if (1 & t && (e = r(e)), 8 & t) return e;
            if (4 & t && "object" == typeof e && e && e.__esModule) return e;
            var n = Object.create(null);
            if (r.r(n), Object.defineProperty(n, "default", {
                    enumerable: !0,
                    value: e
                }), 2 & t && "string" != typeof e)
                for (var o in e) r.d(n, o, function(t) {
                    return e[t]
                }.bind(null, o));
            return n
        }, r.n = function(e) {
            var t = e && e.__esModule ? function() {
                return e.default
            } : function() {
                return e
            };
            return r.d(t, "a", t), t
        }, r.o = function(e, t) {
            return Object.prototype.hasOwnProperty.call(e, t)
        }, r.p = "", r(r.s = 44)
    }([function(e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var n = r(19);
        Object.keys(n).forEach((function(e) {
            "default" !== e && "__esModule" !== e && Object.defineProperty(t, e, {
                enumerable: !0,
                get: function() {
                    return n[e]
                }
            })
        }))
    }, function(e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var n, o = r(22),
            i = (n = o) && n.__esModule ? n : {
                default: n
            };
        t.default = i.default
    }, function(e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var n = r(26);
        Object.defineProperty(t, "closest", {
            enumerable: !0,
            get: function() {
                return i(n).default
            }
        });
        var o = r(24);

        function i(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        Object.defineProperty(t, "requestNextAnimationFrame", {
            enumerable: !0,
            get: function() {
                return i(o).default
            }
        })
    }, function(e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var n, o = r(42),
            i = (n = o) && n.__esModule ? n : {
                default: n
            };
        t.default = i.default
    }, function(e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var n, o = r(35),
            i = (n = o) && n.__esModule ? n : {
                default: n
            };
        t.default = i.default
    }, function(e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var n = r(1);
        Object.defineProperty(t, "Sensor", {
            enumerable: !0,
            get: function() {
                return c(n).default
            }
        });
        var o = r(21);
        Object.defineProperty(t, "MouseSensor", {
            enumerable: !0,
            get: function() {
                return c(o).default
            }
        });
        var i = r(18);
        Object.defineProperty(t, "TouchSensor", {
            enumerable: !0,
            get: function() {
                return c(i).default
            }
        });
        var s = r(16);
        Object.defineProperty(t, "DragSensor", {
            enumerable: !0,
            get: function() {
                return c(s).default
            }
        });
        var a = r(14);
        Object.defineProperty(t, "ForceTouchSensor", {
            enumerable: !0,
            get: function() {
                return c(a).default
            }
        });
        var l = r(0);

        function c(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        Object.keys(l).forEach((function(e) {
            "default" !== e && "__esModule" !== e && Object.defineProperty(t, e, {
                enumerable: !0,
                get: function() {
                    return l[e]
                }
            })
        }))
    }, function(e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var n = r(37);
        Object.defineProperty(t, "Announcement", {
            enumerable: !0,
            get: function() {
                return a(n).default
            }
        }), Object.defineProperty(t, "defaultAnnouncementOptions", {
            enumerable: !0,
            get: function() {
                return n.defaultOptions
            }
        });
        var o = r(34);
        Object.defineProperty(t, "Focusable", {
            enumerable: !0,
            get: function() {
                return a(o).default
            }
        });
        var i = r(32);
        Object.defineProperty(t, "Mirror", {
            enumerable: !0,
            get: function() {
                return a(i).default
            }
        }), Object.defineProperty(t, "defaultMirrorOptions", {
            enumerable: !0,
            get: function() {
                return i.defaultOptions
            }
        });
        var s = r(28);

        function a(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        Object.defineProperty(t, "Scrollable", {
            enumerable: !0,
            get: function() {
                return a(s).default
            }
        }), Object.defineProperty(t, "defaultScrollableOptions", {
            enumerable: !0,
            get: function() {
                return s.defaultOptions
            }
        })
    }, function(e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var n = r(38);
        Object.keys(n).forEach((function(e) {
            "default" !== e && "__esModule" !== e && Object.defineProperty(t, e, {
                enumerable: !0,
                get: function() {
                    return n[e]
                }
            })
        }))
    }, function(e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var n = r(39);
        Object.keys(n).forEach((function(e) {
            "default" !== e && "__esModule" !== e && Object.defineProperty(t, e, {
                enumerable: !0,
                get: function() {
                    return n[e]
                }
            })
        }))
    }, function(e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var n = r(43);
        Object.keys(n).forEach((function(e) {
            "default" !== e && "__esModule" !== e && Object.defineProperty(t, e, {
                enumerable: !0,
                get: function() {
                    return n[e]
                }
            })
        }))
    }, function(e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        t.default = class {
            constructor() {
                this.callbacks = {}
            }
            on(e, ...t) {
                return this.callbacks[e] || (this.callbacks[e] = []), this.callbacks[e].push(...t), this
            }
            off(e, t) {
                if (!this.callbacks[e]) return null;
                const r = this.callbacks[e].slice(0);
                for (let n = 0; n < r.length; n++) t === r[n] && this.callbacks[e].splice(n, 1);
                return this
            }
            trigger(e) {
                if (!this.callbacks[e.type]) return null;
                const t = [...this.callbacks[e.type]],
                    r = [];
                for (let n = t.length - 1; n >= 0; n--) {
                    const o = t[n];
                    try {
                        o(e)
                    } catch (e) {
                        r.push(e)
                    }
                }
                return r.length && console.error(`Draggable caught errors while triggering '${e.type}'`, r), this
            }
        }
    }, function(e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var n, o = r(10),
            i = (n = o) && n.__esModule ? n : {
                default: n
            };
        t.default = i.default
    }, function(e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.defaultOptions = void 0;
        var n, o = Object.assign || function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var r = arguments[t];
                    for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
                }
                return e
            },
            i = r(2),
            s = r(6),
            a = r(11),
            l = (n = a) && n.__esModule ? n : {
                default: n
            },
            c = r(5),
            u = r(7),
            d = r(8);
        const h = Symbol("onDragStart"),
            g = Symbol("onDragMove"),
            f = Symbol("onDragStop"),
            p = Symbol("onDragPressure"),
            v = {
                "drag:start": e => `Picked up ${e.source.textContent.trim()||e.source.id||"draggable element"}`,
                "drag:stop": e => `Released ${e.source.textContent.trim()||e.source.id||"draggable element"}`
            },
            m = {
                "container:dragging": "draggable-container--is-dragging",
                "source:dragging": "draggable-source--is-dragging",
                "source:placed": "draggable-source--placed",
                "container:placed": "draggable-container--placed",
                "body:dragging": "draggable--is-dragging",
                "draggable:over": "draggable--over",
                "container:over": "draggable-container--over",
                "source:original": "draggable--original",
                mirror: "draggable-mirror"
            },
            b = t.defaultOptions = {
                draggable: ".draggable-source",
                handle: null,
                delay: 100,
                placedTimeout: 800,
                plugins: [],
                sensors: []
            };
        class y {
            constructor(e = [document.body], t = {}) {
                if (e instanceof NodeList || e instanceof Array) this.containers = [...e];
                else {
                    if (!(e instanceof HTMLElement)) throw new Error("Draggable containers are expected to be of type `NodeList`, `HTMLElement[]` or `HTMLElement`");
                    this.containers = [e]
                }
                this.options = o({}, b, t, {
                    classes: o({}, m, t.classes || {}),
                    announcements: o({}, v, t.announcements || {})
                }), this.emitter = new l.default, this.dragging = !1, this.plugins = [], this.sensors = [], this[h] = this[h].bind(this), this[g] = this[g].bind(this), this[f] = this[f].bind(this), this[p] = this[p].bind(this), document.addEventListener("drag:start", this[h], !0), document.addEventListener("drag:move", this[g], !0), document.addEventListener("drag:stop", this[f], !0), document.addEventListener("drag:pressure", this[p], !0);
                const r = Object.values(y.Plugins).map((e => e)),
                    n = [c.MouseSensor, c.TouchSensor];
                this.addPlugin(...r, ...this.options.plugins), this.addSensor(...n, ...this.options.sensors);
                const i = new u.DraggableInitializedEvent({
                    draggable: this
                });
                this.on("mirror:created", (({
                    mirror: e
                }) => this.mirror = e)), this.on("mirror:destroy", (() => this.mirror = null)), this.trigger(i)
            }
            destroy() {
                document.removeEventListener("drag:start", this[h], !0), document.removeEventListener("drag:move", this[g], !0), document.removeEventListener("drag:stop", this[f], !0), document.removeEventListener("drag:pressure", this[p], !0);
                const e = new u.DraggableDestroyEvent({
                    draggable: this
                });
                this.trigger(e), this.removePlugin(...this.plugins.map((e => e.constructor))), this.removeSensor(...this.sensors.map((e => e.constructor)))
            }
            addPlugin(...e) {
                const t = e.map((e => new e(this)));
                return t.forEach((e => e.attach())), this.plugins = [...this.plugins, ...t], this
            }
            removePlugin(...e) {
                return this.plugins.filter((t => e.includes(t.constructor))).forEach((e => e.detach())), this.plugins = this.plugins.filter((t => !e.includes(t.constructor))), this
            }
            addSensor(...e) {
                const t = e.map((e => new e(this.containers, this.options)));
                return t.forEach((e => e.attach())), this.sensors = [...this.sensors, ...t], this
            }
            removeSensor(...e) {
                return this.sensors.filter((t => e.includes(t.constructor))).forEach((e => e.detach())), this.sensors = this.sensors.filter((t => !e.includes(t.constructor))), this
            }
            addContainer(...e) {
                return this.containers = [...this.containers, ...e], this.sensors.forEach((t => t.addContainer(...e))), this
            }
            removeContainer(...e) {
                return this.containers = this.containers.filter((t => !e.includes(t))), this.sensors.forEach((t => t.removeContainer(...e))), this
            }
            on(e, ...t) {
                return this.emitter.on(e, ...t), this
            }
            off(e, t) {
                return this.emitter.off(e, t), this
            }
            trigger(e) {
                return this.emitter.trigger(e), this
            }
            getClassNameFor(e) {
                return this.options.classes[e]
            }
            isDragging() {
                return Boolean(this.dragging)
            }
            getDraggableElements() {
                return this.containers.reduce(((e, t) => [...e, ...this.getDraggableElementsForContainer(t)]), [])
            }
            getDraggableElementsForContainer(e) {
                return [...e.querySelectorAll(this.options.draggable)].filter((e => e !== this.originalSource && e !== this.mirror))
            }[h](e) {
                const t = E(e),
                    {
                        target: r,
                        container: n
                    } = t;
                if (!this.containers.includes(n)) return;
                if (this.options.handle && r && !(0, i.closest)(r, this.options.handle)) return void t.cancel();
                if (this.originalSource = (0, i.closest)(r, this.options.draggable), this.sourceContainer = n, !this.originalSource) return void t.cancel();
                this.lastPlacedSource && this.lastPlacedContainer && (clearTimeout(this.placedTimeoutID), this.lastPlacedSource.classList.remove(this.getClassNameFor("source:placed")), this.lastPlacedContainer.classList.remove(this.getClassNameFor("container:placed"))), this.source = this.originalSource.cloneNode(!0), this.originalSource.parentNode.insertBefore(this.source, this.originalSource), this.originalSource.style.display = "none";
                const s = new d.DragStartEvent({
                    source: this.source,
                    originalSource: this.originalSource,
                    sourceContainer: n,
                    sensorEvent: t
                });
                if (this.trigger(s), this.dragging = !s.canceled(), s.canceled()) return this.source.parentNode.removeChild(this.source), void(this.originalSource.style.display = null);
                this.originalSource.classList.add(this.getClassNameFor("source:original")), this.source.classList.add(this.getClassNameFor("source:dragging")), this.sourceContainer.classList.add(this.getClassNameFor("container:dragging")), document.body.classList.add(this.getClassNameFor("body:dragging")), O(document.body, "none"), requestAnimationFrame((() => {
                    const t = E(e).clone({
                        target: this.source
                    });
                    this[g](o({}, e, {
                        detail: t
                    }))
                }))
            }[g](e) {
                if (!this.dragging) return;
                const t = E(e),
                    {
                        container: r
                    } = t;
                let n = t.target;
                const o = new d.DragMoveEvent({
                    source: this.source,
                    originalSource: this.originalSource,
                    sourceContainer: r,
                    sensorEvent: t
                });
                this.trigger(o), o.canceled() && t.cancel(), n = (0, i.closest)(n, this.options.draggable);
                const s = (0, i.closest)(t.target, this.containers),
                    a = t.overContainer || s,
                    l = this.currentOverContainer && a !== this.currentOverContainer,
                    c = this.currentOver && n !== this.currentOver,
                    u = a && this.currentOverContainer !== a,
                    h = s && n && this.currentOver !== n;
                if (c) {
                    const e = new d.DragOutEvent({
                        source: this.source,
                        originalSource: this.originalSource,
                        sourceContainer: r,
                        sensorEvent: t,
                        over: this.currentOver
                    });
                    this.currentOver.classList.remove(this.getClassNameFor("draggable:over")), this.currentOver = null, this.trigger(e)
                }
                if (l) {
                    const e = new d.DragOutContainerEvent({
                        source: this.source,
                        originalSource: this.originalSource,
                        sourceContainer: r,
                        sensorEvent: t,
                        overContainer: this.currentOverContainer
                    });
                    this.currentOverContainer.classList.remove(this.getClassNameFor("container:over")), this.currentOverContainer = null, this.trigger(e)
                }
                if (u) {
                    a.classList.add(this.getClassNameFor("container:over"));
                    const e = new d.DragOverContainerEvent({
                        source: this.source,
                        originalSource: this.originalSource,
                        sourceContainer: r,
                        sensorEvent: t,
                        overContainer: a
                    });
                    this.currentOverContainer = a, this.trigger(e)
                }
                if (h) {
                    n.classList.add(this.getClassNameFor("draggable:over"));
                    const e = new d.DragOverEvent({
                        source: this.source,
                        originalSource: this.originalSource,
                        sourceContainer: r,
                        sensorEvent: t,
                        overContainer: a,
                        over: n
                    });
                    this.currentOver = n, this.trigger(e)
                }
            }[f](e) {
                if (!this.dragging) return;
                this.dragging = !1;
                const t = new d.DragStopEvent({
                    source: this.source,
                    originalSource: this.originalSource,
                    sensorEvent: e.sensorEvent,
                    sourceContainer: this.sourceContainer
                });
                this.trigger(t), this.source.parentNode.insertBefore(this.originalSource, this.source), this.source.parentNode.removeChild(this.source), this.originalSource.style.display = "", this.source.classList.remove(this.getClassNameFor("source:dragging")), this.originalSource.classList.remove(this.getClassNameFor("source:original")), this.originalSource.classList.add(this.getClassNameFor("source:placed")), this.sourceContainer.classList.add(this.getClassNameFor("container:placed")), this.sourceContainer.classList.remove(this.getClassNameFor("container:dragging")), document.body.classList.remove(this.getClassNameFor("body:dragging")), O(document.body, ""), this.currentOver && this.currentOver.classList.remove(this.getClassNameFor("draggable:over")), this.currentOverContainer && this.currentOverContainer.classList.remove(this.getClassNameFor("container:over")), this.lastPlacedSource = this.originalSource, this.lastPlacedContainer = this.sourceContainer, this.placedTimeoutID = setTimeout((() => {
                    this.lastPlacedSource && this.lastPlacedSource.classList.remove(this.getClassNameFor("source:placed")), this.lastPlacedContainer && this.lastPlacedContainer.classList.remove(this.getClassNameFor("container:placed")), this.lastPlacedSource = null, this.lastPlacedContainer = null
                }), this.options.placedTimeout), this.source = null, this.originalSource = null, this.currentOverContainer = null, this.currentOver = null, this.sourceContainer = null
            }[p](e) {
                if (!this.dragging) return;
                const t = E(e),
                    r = this.source || (0, i.closest)(t.originalEvent.target, this.options.draggable),
                    n = new d.DragPressureEvent({
                        sensorEvent: t,
                        source: r,
                        pressure: t.pressure
                    });
                this.trigger(n)
            }
        }

        function E(e) {
            return e.detail
        }

        function O(e, t) {
            e.style.webkitUserSelect = t, e.style.mozUserSelect = t, e.style.msUserSelect = t, e.style.oUserSelect = t, e.style.userSelect = t
        }
        t.default = y, y.Plugins = {
            Announcement: s.Announcement,
            Focusable: s.Focusable,
            Mirror: s.Mirror,
            Scrollable: s.Scrollable
        }
    }, function(e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var n, o = r(1),
            i = (n = o) && n.__esModule ? n : {
                default: n
            },
            s = r(0);
        const a = Symbol("onMouseForceWillBegin"),
            l = Symbol("onMouseForceDown"),
            c = Symbol("onMouseDown"),
            u = Symbol("onMouseForceChange"),
            d = Symbol("onMouseMove"),
            h = Symbol("onMouseUp"),
            g = Symbol("onMouseForceGlobalChange");
        class f extends i.default {
            constructor(e = [], t = {}) {
                super(e, t), this.mightDrag = !1, this[a] = this[a].bind(this), this[l] = this[l].bind(this), this[c] = this[c].bind(this), this[u] = this[u].bind(this), this[d] = this[d].bind(this), this[h] = this[h].bind(this)
            }
            attach() {
                for (const e of this.containers) e.addEventListener("webkitmouseforcewillbegin", this[a], !1), e.addEventListener("webkitmouseforcedown", this[l], !1), e.addEventListener("mousedown", this[c], !0), e.addEventListener("webkitmouseforcechanged", this[u], !1);
                document.addEventListener("mousemove", this[d]), document.addEventListener("mouseup", this[h])
            }
            detach() {
                for (const e of this.containers) e.removeEventListener("webkitmouseforcewillbegin", this[a], !1), e.removeEventListener("webkitmouseforcedown", this[l], !1), e.removeEventListener("mousedown", this[c], !0), e.removeEventListener("webkitmouseforcechanged", this[u], !1);
                document.removeEventListener("mousemove", this[d]), document.removeEventListener("mouseup", this[h])
            }[a](e) {
                e.preventDefault(), this.mightDrag = !0
            }[l](e) {
                if (this.dragging) return;
                const t = document.elementFromPoint(e.clientX, e.clientY),
                    r = e.currentTarget,
                    n = new s.DragStartSensorEvent({
                        clientX: e.clientX,
                        clientY: e.clientY,
                        target: t,
                        container: r,
                        originalEvent: e
                    });
                this.trigger(r, n), this.currentContainer = r, this.dragging = !n.canceled(), this.mightDrag = !1
            }[h](e) {
                if (!this.dragging) return;
                const t = new s.DragStopSensorEvent({
                    clientX: e.clientX,
                    clientY: e.clientY,
                    target: null,
                    container: this.currentContainer,
                    originalEvent: e
                });
                this.trigger(this.currentContainer, t), this.currentContainer = null, this.dragging = !1, this.mightDrag = !1
            }[c](e) {
                this.mightDrag && (e.stopPropagation(), e.stopImmediatePropagation(), e.preventDefault())
            }[d](e) {
                if (!this.dragging) return;
                const t = document.elementFromPoint(e.clientX, e.clientY),
                    r = new s.DragMoveSensorEvent({
                        clientX: e.clientX,
                        clientY: e.clientY,
                        target: t,
                        container: this.currentContainer,
                        originalEvent: e
                    });
                this.trigger(this.currentContainer, r)
            }[u](e) {
                if (this.dragging) return;
                const t = e.target,
                    r = e.currentTarget,
                    n = new s.DragPressureSensorEvent({
                        pressure: e.webkitForce,
                        clientX: e.clientX,
                        clientY: e.clientY,
                        target: t,
                        container: r,
                        originalEvent: e
                    });
                this.trigger(r, n)
            }[g](e) {
                if (!this.dragging) return;
                const t = e.target,
                    r = new s.DragPressureSensorEvent({
                        pressure: e.webkitForce,
                        clientX: e.clientX,
                        clientY: e.clientY,
                        target: t,
                        container: this.currentContainer,
                        originalEvent: e
                    });
                this.trigger(this.currentContainer, r)
            }
        }
        t.default = f
    }, function(e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var n, o = r(13),
            i = (n = o) && n.__esModule ? n : {
                default: n
            };
        t.default = i.default
    }, function(e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var n, o = r(2),
            i = r(1),
            s = (n = i) && n.__esModule ? n : {
                default: n
            },
            a = r(0);
        const l = Symbol("onMouseDown"),
            c = Symbol("onMouseUp"),
            u = Symbol("onDragStart"),
            d = Symbol("onDragOver"),
            h = Symbol("onDragEnd"),
            g = Symbol("onDrop"),
            f = Symbol("reset");
        class p extends s.default {
            constructor(e = [], t = {}) {
                super(e, t), this.mouseDownTimeout = null, this.draggableElement = null, this.nativeDraggableElement = null, this[l] = this[l].bind(this), this[c] = this[c].bind(this), this[u] = this[u].bind(this), this[d] = this[d].bind(this), this[h] = this[h].bind(this), this[g] = this[g].bind(this)
            }
            attach() {
                document.addEventListener("mousedown", this[l], !0)
            }
            detach() {
                document.removeEventListener("mousedown", this[l], !0)
            }[u](e) {
                e.dataTransfer.setData("text", ""), e.dataTransfer.effectAllowed = this.options.type;
                const t = document.elementFromPoint(e.clientX, e.clientY);
                if (this.currentContainer = (0, o.closest)(e.target, this.containers), !this.currentContainer) return;
                const r = new a.DragStartSensorEvent({
                    clientX: e.clientX,
                    clientY: e.clientY,
                    target: t,
                    container: this.currentContainer,
                    originalEvent: e
                });
                setTimeout((() => {
                    this.trigger(this.currentContainer, r), r.canceled() ? this.dragging = !1 : this.dragging = !0
                }), 0)
            }[d](e) {
                if (!this.dragging) return;
                const t = document.elementFromPoint(e.clientX, e.clientY),
                    r = this.currentContainer,
                    n = new a.DragMoveSensorEvent({
                        clientX: e.clientX,
                        clientY: e.clientY,
                        target: t,
                        container: r,
                        originalEvent: e
                    });
                this.trigger(r, n), n.canceled() || (e.preventDefault(), e.dataTransfer.dropEffect = this.options.type)
            }[h](e) {
                if (!this.dragging) return;
                document.removeEventListener("mouseup", this[c], !0);
                const t = document.elementFromPoint(e.clientX, e.clientY),
                    r = this.currentContainer,
                    n = new a.DragStopSensorEvent({
                        clientX: e.clientX,
                        clientY: e.clientY,
                        target: t,
                        container: r,
                        originalEvent: e
                    });
                this.trigger(r, n), this.dragging = !1, this[f]()
            }[g](e) {
                e.preventDefault()
            }[l](e) {
                if (e.target && (e.target.form || e.target.contenteditable)) return;
                const t = (0, o.closest)(e.target, (e => e.draggable));
                t && (t.draggable = !1, this.nativeDraggableElement = t), document.addEventListener("mouseup", this[c], !0), document.addEventListener("dragstart", this[u], !1), document.addEventListener("dragover", this[d], !1), document.addEventListener("dragend", this[h], !1), document.addEventListener("drop", this[g], !1);
                const r = (0, o.closest)(e.target, this.options.draggable);
                r && (this.mouseDownTimeout = setTimeout((() => {
                    r.draggable = !0, this.draggableElement = r
                }), this.options.delay))
            }[c]() {
                this[f]()
            }[f]() {
                clearTimeout(this.mouseDownTimeout), document.removeEventListener("mouseup", this[c], !0), document.removeEventListener("dragstart", this[u], !1), document.removeEventListener("dragover", this[d], !1), document.removeEventListener("dragend", this[h], !1), document.removeEventListener("drop", this[g], !1), this.nativeDraggableElement && (this.nativeDraggableElement.draggable = !0, this.nativeDraggableElement = null), this.draggableElement && (this.draggableElement.draggable = !1, this.draggableElement = null)
            }
        }
        t.default = p
    }, function(e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var n, o = r(15),
            i = (n = o) && n.__esModule ? n : {
                default: n
            };
        t.default = i.default
    }, function(e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var n, o = r(2),
            i = r(1),
            s = (n = i) && n.__esModule ? n : {
                default: n
            },
            a = r(0);
        const l = Symbol("onTouchStart"),
            c = Symbol("onTouchHold"),
            u = Symbol("onTouchEnd"),
            d = Symbol("onTouchMove");
        let h = !1;
        window.addEventListener("touchmove", (e => {
            h && e.preventDefault()
        }), {
            passive: !1
        });
        class g extends s.default {
            constructor(e = [], t = {}) {
                super(e, t), this.currentScrollableParent = null, this.tapTimeout = null, this.touchMoved = !1, this[l] = this[l].bind(this), this[c] = this[c].bind(this), this[u] = this[u].bind(this), this[d] = this[d].bind(this)
            }
            attach() {
                document.addEventListener("touchstart", this[l])
            }
            detach() {
                document.removeEventListener("touchstart", this[l])
            }[l](e) {
                const t = (0, o.closest)(e.target, this.containers);
                t && (document.addEventListener("touchmove", this[d]), document.addEventListener("touchend", this[u]), document.addEventListener("touchcancel", this[u]), t.addEventListener("contextmenu", f), this.currentContainer = t, this.tapTimeout = setTimeout(this[c](e, t), this.options.delay))
            }[c](e, t) {
                return () => {
                    if (this.touchMoved) return;
                    const r = e.touches[0] || e.changedTouches[0],
                        n = e.target,
                        o = new a.DragStartSensorEvent({
                            clientX: r.pageX,
                            clientY: r.pageY,
                            target: n,
                            container: t,
                            originalEvent: e
                        });
                    this.trigger(t, o), this.dragging = !o.canceled(), h = this.dragging
                }
            }[d](e) {
                if (this.touchMoved = !0, !this.dragging) return;
                const t = e.touches[0] || e.changedTouches[0],
                    r = document.elementFromPoint(t.pageX - window.scrollX, t.pageY - window.scrollY),
                    n = new a.DragMoveSensorEvent({
                        clientX: t.pageX,
                        clientY: t.pageY,
                        target: r,
                        container: this.currentContainer,
                        originalEvent: e
                    });
                this.trigger(this.currentContainer, n)
            }[u](e) {
                if (this.touchMoved = !1, h = !1, document.removeEventListener("touchend", this[u]), document.removeEventListener("touchcancel", this[u]), document.removeEventListener("touchmove", this[d]), this.currentContainer && this.currentContainer.removeEventListener("contextmenu", f), clearTimeout(this.tapTimeout), !this.dragging) return;
                const t = e.touches[0] || e.changedTouches[0],
                    r = document.elementFromPoint(t.pageX - window.scrollX, t.pageY - window.scrollY);
                e.preventDefault();
                const n = new a.DragStopSensorEvent({
                    clientX: t.pageX,
                    clientY: t.pageY,
                    target: r,
                    container: this.currentContainer,
                    originalEvent: e
                });
                this.trigger(this.currentContainer, n), this.currentContainer = null, this.dragging = !1
            }
        }

        function f(e) {
            e.preventDefault(), e.stopPropagation()
        }
        t.default = g
    }, function(e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var n, o = r(17),
            i = (n = o) && n.__esModule ? n : {
                default: n
            };
        t.default = i.default
    }, function(e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.DragPressureSensorEvent = t.DragStopSensorEvent = t.DragMoveSensorEvent = t.DragStartSensorEvent = t.SensorEvent = void 0;
        var n, o = r(3),
            i = (n = o) && n.__esModule ? n : {
                default: n
            };
        class s extends i.default {
            get originalEvent() {
                return this.data.originalEvent
            }
            get clientX() {
                return this.data.clientX
            }
            get clientY() {
                return this.data.clientY
            }
            get target() {
                return this.data.target
            }
            get container() {
                return this.data.container
            }
            get pressure() {
                return this.data.pressure
            }
        }
        t.SensorEvent = s;
        class a extends s {}
        t.DragStartSensorEvent = a, a.type = "drag:start";
        class l extends s {}
        t.DragMoveSensorEvent = l, l.type = "drag:move";
        class c extends s {}
        t.DragStopSensorEvent = c, c.type = "drag:stop";
        class u extends s {}
        t.DragPressureSensorEvent = u, u.type = "drag:pressure"
    }, function(e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var n, o = r(2),
            i = r(1),
            s = (n = i) && n.__esModule ? n : {
                default: n
            },
            a = r(0);
        const l = Symbol("onContextMenuWhileDragging"),
            c = Symbol("onMouseDown"),
            u = Symbol("onMouseMove"),
            d = Symbol("onMouseUp");
        class h extends s.default {
            constructor(e = [], t = {}) {
                super(e, t), this.mouseDown = !1, this.mouseDownTimeout = null, this.openedContextMenu = !1, this[l] = this[l].bind(this), this[c] = this[c].bind(this), this[u] = this[u].bind(this), this[d] = this[d].bind(this)
            }
            attach() {
                document.addEventListener("mousedown", this[c], !0)
            }
            detach() {
                document.removeEventListener("mousedown", this[c], !0)
            }[c](e) {
                if (0 !== e.button || e.ctrlKey || e.metaKey) return;
                document.addEventListener("mouseup", this[d]);
                const t = document.elementFromPoint(e.clientX, e.clientY),
                    r = (0, o.closest)(t, this.containers);
                r && (document.addEventListener("dragstart", g), this.mouseDown = !0, clearTimeout(this.mouseDownTimeout), this.mouseDownTimeout = setTimeout((() => {
                    if (!this.mouseDown) return;
                    const n = new a.DragStartSensorEvent({
                        clientX: e.clientX,
                        clientY: e.clientY,
                        target: t,
                        container: r,
                        originalEvent: e
                    });
                    this.trigger(r, n), this.currentContainer = r, this.dragging = !n.canceled(), this.dragging && (document.addEventListener("contextmenu", this[l]), document.addEventListener("mousemove", this[u]))
                }), this.options.delay))
            }[u](e) {
                if (!this.dragging) return;
                const t = document.elementFromPoint(e.clientX, e.clientY),
                    r = new a.DragMoveSensorEvent({
                        clientX: e.clientX,
                        clientY: e.clientY,
                        target: t,
                        container: this.currentContainer,
                        originalEvent: e
                    });
                this.trigger(this.currentContainer, r)
            }[d](e) {
                if (this.mouseDown = Boolean(this.openedContextMenu), this.openedContextMenu) return void(this.openedContextMenu = !1);
                if (document.removeEventListener("mouseup", this[d]), document.removeEventListener("dragstart", g), !this.dragging) return;
                const t = document.elementFromPoint(e.clientX, e.clientY),
                    r = new a.DragStopSensorEvent({
                        clientX: e.clientX,
                        clientY: e.clientY,
                        target: t,
                        container: this.currentContainer,
                        originalEvent: e
                    });
                this.trigger(this.currentContainer, r), document.removeEventListener("contextmenu", this[l]), document.removeEventListener("mousemove", this[u]), this.currentContainer = null, this.dragging = !1
            }[l](e) {
                e.preventDefault(), this.openedContextMenu = !0
            }
        }

        function g(e) {
            e.preventDefault()
        }
        t.default = h
    }, function(e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var n, o = r(20),
            i = (n = o) && n.__esModule ? n : {
                default: n
            };
        t.default = i.default
    }, function(e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var n = Object.assign || function(e) {
            for (var t = 1; t < arguments.length; t++) {
                var r = arguments[t];
                for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
            }
            return e
        };
        t.default = class {
            constructor(e = [], t = {}) {
                this.containers = [...e], this.options = n({}, t), this.dragging = !1, this.currentContainer = null
            }
            attach() {
                return this
            }
            detach() {
                return this
            }
            addContainer(...e) {
                this.containers = [...this.containers, ...e]
            }
            removeContainer(...e) {
                this.containers = this.containers.filter((t => !e.includes(t)))
            }
            trigger(e, t) {
                const r = document.createEvent("Event");
                return r.detail = t, r.initEvent(t.type, !0, !0), e.dispatchEvent(r), this.lastEvent = t, t
            }
        }
    }, function(e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.default = function(e) {
            return requestAnimationFrame((() => {
                requestAnimationFrame(e)
            }))
        }
    }, function(e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var n, o = r(23),
            i = (n = o) && n.__esModule ? n : {
                default: n
            };
        t.default = i.default
    }, function(e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.default = function(e, t) {
            if (!e) return null;
            const r = t,
                o = t,
                i = t,
                s = t,
                a = Boolean("string" == typeof t),
                l = Boolean("function" == typeof t),
                c = Boolean(t instanceof NodeList || t instanceof Array),
                u = Boolean(t instanceof HTMLElement);
            let d = e;
            do {
                if (d = d.correspondingUseElement || d.correspondingElement || d, (h = d) ? a ? n.call(h, r) : c ? [...i].includes(h) : u ? s === h : l && o(h) : h) return d;
                d = d.parentNode
            } while (d && d !== document.body && d !== document);
            var h;
            return null
        };
        const n = Element.prototype.matches || Element.prototype.webkitMatchesSelector || Element.prototype.mozMatchesSelector || Element.prototype.msMatchesSelector
    }, function(e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var n, o = r(25),
            i = (n = o) && n.__esModule ? n : {
                default: n
            };
        t.default = i.default
    }, function(e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.defaultOptions = t.scroll = t.onDragStop = t.onDragMove = t.onDragStart = void 0;
        var n, o = Object.assign || function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var r = arguments[t];
                    for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
                }
                return e
            },
            i = r(4),
            s = (n = i) && n.__esModule ? n : {
                default: n
            },
            a = r(2);
        const l = t.onDragStart = Symbol("onDragStart"),
            c = t.onDragMove = Symbol("onDragMove"),
            u = t.onDragStop = Symbol("onDragStop"),
            d = t.scroll = Symbol("scroll"),
            h = t.defaultOptions = {
                speed: 6,
                sensitivity: 50,
                scrollableElements: []
            };
        class g extends s.default {
            constructor(e) {
                super(e), this.options = o({}, h, this.getOptions()), this.currentMousePosition = null, this.scrollAnimationFrame = null, this.scrollableElement = null, this.findScrollableElementFrame = null, this[l] = this[l].bind(this), this[c] = this[c].bind(this), this[u] = this[u].bind(this), this[d] = this[d].bind(this)
            }
            attach() {
                this.draggable.on("drag:start", this[l]).on("drag:move", this[c]).on("drag:stop", this[u])
            }
            detach() {
                this.draggable.off("drag:start", this[l]).off("drag:move", this[c]).off("drag:stop", this[u])
            }
            getOptions() {
                return this.draggable.options.scrollable || {}
            }
            getScrollableElement(e) {
                return this.hasDefinedScrollableElements() ? (0, a.closest)(e, this.options.scrollableElements) || document.documentElement : function(e) {
                    if (!e) return f();
                    const t = getComputedStyle(e).getPropertyValue("position"),
                        r = "absolute" === t,
                        n = (0, a.closest)(e, (e => (!r || ! function(e) {
                            return "static" === getComputedStyle(e).getPropertyValue("position")
                        }(e)) && function(e) {
                            const t = /(auto|scroll)/,
                                r = getComputedStyle(e, null),
                                n = r.getPropertyValue("overflow") + r.getPropertyValue("overflow-y") + r.getPropertyValue("overflow-x");
                            return t.test(n)
                        }(e)));
                    return "fixed" !== t && n ? n : f()
                }(e)
            }
            hasDefinedScrollableElements() {
                return Boolean(0 !== this.options.scrollableElements.length)
            }[l](e) {
                this.findScrollableElementFrame = requestAnimationFrame((() => {
                    this.scrollableElement = this.getScrollableElement(e.source)
                }))
            }[c](e) {
                if (this.findScrollableElementFrame = requestAnimationFrame((() => {
                        this.scrollableElement = this.getScrollableElement(e.sensorEvent.target)
                    })), !this.scrollableElement) return;
                const t = e.sensorEvent,
                    r = {
                        x: 0,
                        y: 0
                    };
                "ontouchstart" in window && (r.y = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0, r.x = window.pageXOffset || document.documentElement.scrollLeft || document.body.scrollLeft || 0), this.currentMousePosition = {
                    clientX: t.clientX - r.x,
                    clientY: t.clientY - r.y
                }, this.scrollAnimationFrame = requestAnimationFrame(this[d])
            }[u]() {
                cancelAnimationFrame(this.scrollAnimationFrame), cancelAnimationFrame(this.findScrollableElementFrame), this.scrollableElement = null, this.scrollAnimationFrame = null, this.findScrollableElementFrame = null, this.currentMousePosition = null
            }[d]() {
                if (!this.scrollableElement || !this.currentMousePosition) return;
                cancelAnimationFrame(this.scrollAnimationFrame);
                const {
                    speed: e,
                    sensitivity: t
                } = this.options, r = this.scrollableElement.getBoundingClientRect(), n = r.bottom > window.innerHeight, o = r.top < 0 || n, i = f(), s = this.scrollableElement, a = this.currentMousePosition.clientX, l = this.currentMousePosition.clientY;
                if (s === document.body || s === document.documentElement || o) {
                    const {
                        innerHeight: r,
                        innerWidth: n
                    } = window;
                    l < t ? i.scrollTop -= e : r - l < t && (i.scrollTop += e), a < t ? i.scrollLeft -= e : n - a < t && (i.scrollLeft += e)
                } else {
                    const {
                        offsetHeight: n,
                        offsetWidth: o
                    } = s;
                    r.top + n - l < t ? s.scrollTop += e : l - r.top < t && (s.scrollTop -= e), r.left + o - a < t ? s.scrollLeft += e : a - r.left < t && (s.scrollLeft -= e)
                }
                this.scrollAnimationFrame = requestAnimationFrame(this[d])
            }
        }

        function f() {
            return document.scrollingElement || document.documentElement
        }
        t.default = g
    }, function(e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.defaultOptions = void 0;
        var n, o = r(27),
            i = (n = o) && n.__esModule ? n : {
                default: n
            };
        t.default = i.default, t.defaultOptions = o.defaultOptions
    }, function(e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.MirrorDestroyEvent = t.MirrorMoveEvent = t.MirrorAttachedEvent = t.MirrorCreatedEvent = t.MirrorCreateEvent = t.MirrorEvent = void 0;
        var n, o = r(3),
            i = (n = o) && n.__esModule ? n : {
                default: n
            };
        class s extends i.default {
            get source() {
                return this.data.source
            }
            get originalSource() {
                return this.data.originalSource
            }
            get sourceContainer() {
                return this.data.sourceContainer
            }
            get sensorEvent() {
                return this.data.sensorEvent
            }
            get dragEvent() {
                return this.data.dragEvent
            }
            get originalEvent() {
                return this.sensorEvent ? this.sensorEvent.originalEvent : null
            }
        }
        t.MirrorEvent = s;
        class a extends s {}
        t.MirrorCreateEvent = a, a.type = "mirror:create";
        class l extends s {
            get mirror() {
                return this.data.mirror
            }
        }
        t.MirrorCreatedEvent = l, l.type = "mirror:created";
        class c extends s {
            get mirror() {
                return this.data.mirror
            }
        }
        t.MirrorAttachedEvent = c, c.type = "mirror:attached";
        class u extends s {
            get mirror() {
                return this.data.mirror
            }
        }
        t.MirrorMoveEvent = u, u.type = "mirror:move", u.cancelable = !0;
        class d extends s {
            get mirror() {
                return this.data.mirror
            }
        }
        t.MirrorDestroyEvent = d, d.type = "mirror:destroy", d.cancelable = !0
    }, function(e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var n = r(29);
        Object.keys(n).forEach((function(e) {
            "default" !== e && "__esModule" !== e && Object.defineProperty(t, e, {
                enumerable: !0,
                get: function() {
                    return n[e]
                }
            })
        }))
    }, function(e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.defaultOptions = t.getAppendableContainer = t.onScroll = t.onMirrorMove = t.onMirrorCreated = t.onDragStop = t.onDragMove = t.onDragStart = void 0;
        var n, o = Object.assign || function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var r = arguments[t];
                    for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
                }
                return e
            },
            i = r(4),
            s = (n = i) && n.__esModule ? n : {
                default: n
            },
            a = r(30);

        function l(e, t) {
            var r = {};
            for (var n in e) t.indexOf(n) >= 0 || Object.prototype.hasOwnProperty.call(e, n) && (r[n] = e[n]);
            return r
        }
        const c = t.onDragStart = Symbol("onDragStart"),
            u = t.onDragMove = Symbol("onDragMove"),
            d = t.onDragStop = Symbol("onDragStop"),
            h = t.onMirrorCreated = Symbol("onMirrorCreated"),
            g = t.onMirrorMove = Symbol("onMirrorMove"),
            f = t.onScroll = Symbol("onScroll"),
            p = t.getAppendableContainer = Symbol("getAppendableContainer"),
            v = t.defaultOptions = {
                constrainDimensions: !1,
                xAxis: !0,
                yAxis: !0,
                cursorOffsetX: null,
                cursorOffsetY: null
            };
        class m extends s.default {
            constructor(e) {
                super(e), this.options = o({}, v, this.getOptions()), this.scrollOffset = {
                    x: 0,
                    y: 0
                }, this.initialScrollOffset = {
                    x: window.scrollX,
                    y: window.scrollY
                }, this[c] = this[c].bind(this), this[u] = this[u].bind(this), this[d] = this[d].bind(this), this[h] = this[h].bind(this), this[g] = this[g].bind(this), this[f] = this[f].bind(this)
            }
            attach() {
                this.draggable.on("drag:start", this[c]).on("drag:move", this[u]).on("drag:stop", this[d]).on("mirror:created", this[h]).on("mirror:move", this[g])
            }
            detach() {
                this.draggable.off("drag:start", this[c]).off("drag:move", this[u]).off("drag:stop", this[d]).off("mirror:created", this[h]).off("mirror:move", this[g])
            }
            getOptions() {
                return this.draggable.options.mirror || {}
            }[c](e) {
                if (e.canceled()) return;
                "ontouchstart" in window && document.addEventListener("scroll", this[f], !0), this.initialScrollOffset = {
                    x: window.scrollX,
                    y: window.scrollY
                };
                const {
                    source: t,
                    originalSource: r,
                    sourceContainer: n,
                    sensorEvent: o
                } = e, i = new a.MirrorCreateEvent({
                    source: t,
                    originalSource: r,
                    sourceContainer: n,
                    sensorEvent: o,
                    dragEvent: e
                });
                if (this.draggable.trigger(i), function(e) {
                        return /^drag/.test(e.originalEvent.type)
                    }(o) || i.canceled()) return;
                const s = this[p](t) || n;
                this.mirror = t.cloneNode(!0);
                const l = new a.MirrorCreatedEvent({
                        source: t,
                        originalSource: r,
                        sourceContainer: n,
                        sensorEvent: o,
                        dragEvent: e,
                        mirror: this.mirror
                    }),
                    c = new a.MirrorAttachedEvent({
                        source: t,
                        originalSource: r,
                        sourceContainer: n,
                        sensorEvent: o,
                        dragEvent: e,
                        mirror: this.mirror
                    });
                this.draggable.trigger(l), s.appendChild(this.mirror), this.draggable.trigger(c)
            }[u](e) {
                if (!this.mirror || e.canceled()) return;
                const {
                    source: t,
                    originalSource: r,
                    sourceContainer: n,
                    sensorEvent: o
                } = e, i = new a.MirrorMoveEvent({
                    source: t,
                    originalSource: r,
                    sourceContainer: n,
                    sensorEvent: o,
                    dragEvent: e,
                    mirror: this.mirror
                });
                this.draggable.trigger(i)
            }[d](e) {
                if ("ontouchstart" in window && document.removeEventListener("scroll", this[f], !0), this.initialScrollOffset = {
                        x: 0,
                        y: 0
                    }, this.scrollOffset = {
                        x: 0,
                        y: 0
                    }, !this.mirror) return;
                const {
                    source: t,
                    sourceContainer: r,
                    sensorEvent: n
                } = e, o = new a.MirrorDestroyEvent({
                    source: t,
                    mirror: this.mirror,
                    sourceContainer: r,
                    sensorEvent: n,
                    dragEvent: e
                });
                this.draggable.trigger(o), o.canceled() || this.mirror.parentNode.removeChild(this.mirror)
            }[f]() {
                this.scrollOffset = {
                    x: window.scrollX - this.initialScrollOffset.x,
                    y: window.scrollY - this.initialScrollOffset.y
                }
            }[h]({
                mirror: e,
                source: t,
                sensorEvent: r
            }) {
                const n = {
                    mirror: e,
                    source: t,
                    sensorEvent: r,
                    mirrorClass: this.draggable.getClassNameFor("mirror"),
                    scrollOffset: this.scrollOffset,
                    options: this.options
                };
                return Promise.resolve(n).then(b).then(y).then(E).then(O).then(_({
                    initial: !0
                })).then(S).then((e => {
                    let {
                        mirrorOffset: t,
                        initialX: r,
                        initialY: n
                    } = e, i = l(e, ["mirrorOffset", "initialX", "initialY"]);
                    return this.mirrorOffset = t, this.initialX = r, this.initialY = n, o({
                        mirrorOffset: t,
                        initialX: r,
                        initialY: n
                    }, i)
                }))
            }[g](e) {
                if (e.canceled()) return null;
                const t = {
                    mirror: e.mirror,
                    sensorEvent: e.sensorEvent,
                    mirrorOffset: this.mirrorOffset,
                    options: this.options,
                    initialX: this.initialX,
                    initialY: this.initialY,
                    scrollOffset: this.scrollOffset
                };
                return Promise.resolve(t).then(_({
                    raf: !0
                }))
            }[p](e) {
                const t = this.options.appendTo;
                return "string" == typeof t ? document.querySelector(t) : t instanceof HTMLElement ? t : "function" == typeof t ? t(e) : e.parentNode
            }
        }

        function b(e) {
            let {
                source: t
            } = e, r = l(e, ["source"]);
            return M((e => {
                const n = t.getBoundingClientRect();
                e(o({
                    source: t,
                    sourceRect: n
                }, r))
            }))
        }

        function y(e) {
            let {
                sensorEvent: t,
                sourceRect: r,
                options: n
            } = e, i = l(e, ["sensorEvent", "sourceRect", "options"]);
            return M((e => {
                const s = null === n.cursorOffsetY ? t.clientY - r.top : n.cursorOffsetY,
                    a = null === n.cursorOffsetX ? t.clientX - r.left : n.cursorOffsetX;
                e(o({
                    sensorEvent: t,
                    sourceRect: r,
                    mirrorOffset: {
                        top: s,
                        left: a
                    },
                    options: n
                }, i))
            }))
        }

        function E(e) {
            let {
                mirror: t,
                source: r,
                options: n
            } = e, i = l(e, ["mirror", "source", "options"]);
            return M((e => {
                let s, a;
                if (n.constrainDimensions) {
                    const e = getComputedStyle(r);
                    s = e.getPropertyValue("height"), a = e.getPropertyValue("width")
                }
                t.style.position = "fixed", t.style.pointerEvents = "none", t.style.top = 0, t.style.left = 0, t.style.margin = 0, n.constrainDimensions && (t.style.height = s, t.style.width = a), e(o({
                    mirror: t,
                    source: r,
                    options: n
                }, i))
            }))
        }

        function O(e) {
            let {
                mirror: t,
                mirrorClass: r
            } = e, n = l(e, ["mirror", "mirrorClass"]);
            return M((e => {
                t.classList.add(r), e(o({
                    mirror: t,
                    mirrorClass: r
                }, n))
            }))
        }

        function S(e) {
            let {
                mirror: t
            } = e, r = l(e, ["mirror"]);
            return M((e => {
                t.removeAttribute("id"), delete t.id, e(o({
                    mirror: t
                }, r))
            }))
        }

        function _({
            withFrame: e = !1,
            initial: t = !1
        } = {}) {
            return r => {
                let {
                    mirror: n,
                    sensorEvent: i,
                    mirrorOffset: s,
                    initialY: a,
                    initialX: c,
                    scrollOffset: u,
                    options: d
                } = r, h = l(r, ["mirror", "sensorEvent", "mirrorOffset", "initialY", "initialX", "scrollOffset", "options"]);
                return M((e => {
                    const r = o({
                        mirror: n,
                        sensorEvent: i,
                        mirrorOffset: s,
                        options: d
                    }, h);
                    if (s) {
                        const e = i.clientX - s.left - u.x,
                            o = i.clientY - s.top - u.y;
                        d.xAxis && d.yAxis || t ? n.style.transform = `translate3d(${e}px, ${o}px, 0)` : d.xAxis && !d.yAxis ? n.style.transform = `translate3d(${e}px, ${a}px, 0)` : d.yAxis && !d.xAxis && (n.style.transform = `translate3d(${c}px, ${o}px, 0)`), t && (r.initialX = e, r.initialY = o)
                    }
                    e(r)
                }), {
                    frame: e
                })
            }
        }

        function M(e, {
            raf: t = !1
        } = {}) {
            return new Promise(((r, n) => {
                t ? requestAnimationFrame((() => {
                    e(r, n)
                })) : e(r, n)
            }))
        }
        t.default = m
    }, function(e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.defaultOptions = void 0;
        var n, o = r(31),
            i = (n = o) && n.__esModule ? n : {
                default: n
            };
        t.default = i.default, t.defaultOptions = o.defaultOptions
    }, function(e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var n, o = Object.assign || function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var r = arguments[t];
                    for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
                }
                return e
            },
            i = r(4),
            s = (n = i) && n.__esModule ? n : {
                default: n
            };
        const a = Symbol("onInitialize"),
            l = Symbol("onDestroy"),
            c = {};
        class u extends s.default {
            constructor(e) {
                super(e), this.options = o({}, c, this.getOptions()), this[a] = this[a].bind(this), this[l] = this[l].bind(this)
            }
            attach() {
                this.draggable.on("draggable:initialize", this[a]).on("draggable:destroy", this[l])
            }
            detach() {
                this.draggable.off("draggable:initialize", this[a]).off("draggable:destroy", this[l])
            }
            getOptions() {
                return this.draggable.options.focusable || {}
            }
            getElements() {
                return [...this.draggable.containers, ...this.draggable.getDraggableElements()]
            }[a]() {
                requestAnimationFrame((() => {
                    this.getElements().forEach((e => function(e) {
                        Boolean(!e.getAttribute("tabindex") && -1 === e.tabIndex) && (d.push(e), e.tabIndex = 0)
                    }(e)))
                }))
            }[l]() {
                requestAnimationFrame((() => {
                    this.getElements().forEach((e => function(e) {
                        const t = d.indexOf(e); - 1 !== t && (e.tabIndex = -1, d.splice(t, 1))
                    }(e)))
                }))
            }
        }
        t.default = u;
        const d = []
    }, function(e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var n, o = r(33),
            i = (n = o) && n.__esModule ? n : {
                default: n
            };
        t.default = i.default
    }, function(e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        t.default = class {
            constructor(e) {
                this.draggable = e
            }
            attach() {
                throw new Error("Not Implemented")
            }
            detach() {
                throw new Error("Not Implemented")
            }
        }
    }, function(e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.defaultOptions = void 0;
        var n, o = Object.assign || function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var r = arguments[t];
                    for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
                }
                return e
            },
            i = r(4),
            s = (n = i) && n.__esModule ? n : {
                default: n
            };
        const a = Symbol("onInitialize"),
            l = Symbol("onDestroy"),
            c = Symbol("announceEvent"),
            u = Symbol("announceMessage"),
            d = t.defaultOptions = {
                expire: 7e3
            };
        class h extends s.default {
            constructor(e) {
                super(e), this.options = o({}, d, this.getOptions()), this.originalTriggerMethod = this.draggable.trigger, this[a] = this[a].bind(this), this[l] = this[l].bind(this)
            }
            attach() {
                this.draggable.on("draggable:initialize", this[a])
            }
            detach() {
                this.draggable.off("draggable:destroy", this[l])
            }
            getOptions() {
                return this.draggable.options.announcements || {}
            }[c](e) {
                const t = this.options[e.type];
                t && "string" == typeof t && this[u](t), t && "function" == typeof t && this[u](t(e))
            }[u](e) {
                ! function(e, {
                    expire: t
                }) {
                    const r = document.createElement("div");
                    r.textContent = e, g.appendChild(r), setTimeout((() => {
                        g.removeChild(r)
                    }), t)
                }(e, {
                    expire: this.options.expire
                })
            }[a]() {
                this.draggable.trigger = e => {
                    try {
                        this[c](e)
                    } finally {
                        this.originalTriggerMethod.call(this.draggable, e)
                    }
                }
            }[l]() {
                this.draggable.trigger = this.originalTriggerMethod
            }
        }
        t.default = h;
        const g = function() {
            const e = document.createElement("div");
            return e.setAttribute("id", "draggable-live-region"), e.setAttribute("aria-relevant", "additions"), e.setAttribute("aria-atomic", "true"), e.setAttribute("aria-live", "assertive"), e.setAttribute("role", "log"), e.style.position = "fixed", e.style.width = "1px", e.style.height = "1px", e.style.top = "-1px", e.style.overflow = "hidden", e
        }();
        document.addEventListener("DOMContentLoaded", (() => {
            document.body.appendChild(g)
        }))
    }, function(e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.defaultOptions = void 0;
        var n, o = r(36),
            i = (n = o) && n.__esModule ? n : {
                default: n
            };
        t.default = i.default, t.defaultOptions = o.defaultOptions
    }, function(e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.DraggableDestroyEvent = t.DraggableInitializedEvent = t.DraggableEvent = void 0;
        var n, o = r(3),
            i = (n = o) && n.__esModule ? n : {
                default: n
            };
        class s extends i.default {
            get draggable() {
                return this.data.draggable
            }
        }
        t.DraggableEvent = s, s.type = "draggable";
        class a extends s {}
        t.DraggableInitializedEvent = a, a.type = "draggable:initialize";
        class l extends s {}
        t.DraggableDestroyEvent = l, l.type = "draggable:destroy"
    }, function(e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.DragStopEvent = t.DragPressureEvent = t.DragOutContainerEvent = t.DragOverContainerEvent = t.DragOutEvent = t.DragOverEvent = t.DragMoveEvent = t.DragStartEvent = t.DragEvent = void 0;
        var n, o = r(3),
            i = (n = o) && n.__esModule ? n : {
                default: n
            };
        class s extends i.default {
            get source() {
                return this.data.source
            }
            get originalSource() {
                return this.data.originalSource
            }
            get mirror() {
                return this.data.mirror
            }
            get sourceContainer() {
                return this.data.sourceContainer
            }
            get sensorEvent() {
                return this.data.sensorEvent
            }
            get originalEvent() {
                return this.sensorEvent ? this.sensorEvent.originalEvent : null
            }
        }
        t.DragEvent = s, s.type = "drag";
        class a extends s {}
        t.DragStartEvent = a, a.type = "drag:start", a.cancelable = !0;
        class l extends s {}
        t.DragMoveEvent = l, l.type = "drag:move";
        class c extends s {
            get overContainer() {
                return this.data.overContainer
            }
            get over() {
                return this.data.over
            }
        }
        t.DragOverEvent = c, c.type = "drag:over", c.cancelable = !0;
        class u extends s {
            get overContainer() {
                return this.data.overContainer
            }
            get over() {
                return this.data.over
            }
        }
        t.DragOutEvent = u, u.type = "drag:out";
        class d extends s {
            get overContainer() {
                return this.data.overContainer
            }
        }
        t.DragOverContainerEvent = d, d.type = "drag:over:container";
        class h extends s {
            get overContainer() {
                return this.data.overContainer
            }
        }
        t.DragOutContainerEvent = h, h.type = "drag:out:container";
        class g extends s {
            get pressure() {
                return this.data.pressure
            }
        }
        t.DragPressureEvent = g, g.type = "drag:pressure";
        class f extends s {}
        t.DragStopEvent = f, f.type = "drag:stop"
    }, function(e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var n = r(8);
        Object.keys(n).forEach((function(e) {
            "default" !== e && "__esModule" !== e && Object.defineProperty(t, e, {
                enumerable: !0,
                get: function() {
                    return n[e]
                }
            })
        }));
        var o = r(7);
        Object.keys(o).forEach((function(e) {
            "default" !== e && "__esModule" !== e && Object.defineProperty(t, e, {
                enumerable: !0,
                get: function() {
                    return o[e]
                }
            })
        }));
        var i = r(6);
        Object.keys(i).forEach((function(e) {
            "default" !== e && "__esModule" !== e && Object.defineProperty(t, e, {
                enumerable: !0,
                get: function() {
                    return i[e]
                }
            })
        }));
        var s = r(5);
        Object.keys(s).forEach((function(e) {
            "default" !== e && "__esModule" !== e && Object.defineProperty(t, e, {
                enumerable: !0,
                get: function() {
                    return s[e]
                }
            })
        }));
        var a, l = r(12),
            c = (a = l) && a.__esModule ? a : {
                default: a
            };
        t.default = c.default
    }, function(e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var n, o = Object.assign || function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var r = arguments[t];
                    for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
                }
                return e
            },
            i = r(40),
            s = (n = i) && n.__esModule ? n : {
                default: n
            },
            a = r(9);
        const l = Symbol("onDragStart"),
            c = Symbol("onDragOver"),
            u = Symbol("onDragStop");
        const d = {
            "swappabled:swapped": function({
                dragEvent: e,
                swappedElement: t
            }) {
                return `Swapped ${e.source.textContent.trim()||e.source.id||"swappable element"} with ${t.textContent.trim()||t.id||"swappable element"}`
            }
        };
        class h extends s.default {
            constructor(e = [], t = {}) {
                super(e, o({}, t, {
                    announcements: o({}, d, t.announcements || {})
                })), this.lastOver = null, this[l] = this[l].bind(this), this[c] = this[c].bind(this), this[u] = this[u].bind(this), this.on("drag:start", this[l]).on("drag:over", this[c]).on("drag:stop", this[u])
            }
            destroy() {
                super.destroy(), this.off("drag:start", this._onDragStart).off("drag:over", this._onDragOver).off("drag:stop", this._onDragStop)
            }[l](e) {
                const t = new a.SwappableStartEvent({
                    dragEvent: e
                });
                this.trigger(t), t.canceled() && e.cancel()
            }[c](e) {
                if (e.over === e.originalSource || e.over === e.source || e.canceled()) return;
                const t = new a.SwappableSwapEvent({
                    dragEvent: e,
                    over: e.over,
                    overContainer: e.overContainer
                });
                if (this.trigger(t), t.canceled()) return;
                this.lastOver && this.lastOver !== e.over && g(this.lastOver, e.source), this.lastOver === e.over ? this.lastOver = null : this.lastOver = e.over, g(e.source, e.over);
                const r = new a.SwappableSwappedEvent({
                    dragEvent: e,
                    swappedElement: e.over
                });
                this.trigger(r)
            }[u](e) {
                const t = new a.SwappableStopEvent({
                    dragEvent: e
                });
                this.trigger(t), this.lastOver = null
            }
        }

        function g(e, t) {
            const r = t.parentNode,
                n = e.parentNode;
            ! function(e) {
                const t = document.createElement("div");
                e(t), t.parentNode.removeChild(t)
            }((o => {
                n.insertBefore(o, e), r.insertBefore(e, t), n.insertBefore(t, o)
            }))
        }
        t.default = h
    }, function(e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var n = Object.assign || function(e) {
            for (var t = 1; t < arguments.length; t++) {
                var r = arguments[t];
                for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
            }
            return e
        };
        const o = Symbol("canceled");
        class i {
            constructor(e) {
                this[o] = !1, this.data = e
            }
            get type() {
                return this.constructor.type
            }
            get cancelable() {
                return this.constructor.cancelable
            }
            cancel() {
                this[o] = !0
            }
            canceled() {
                return Boolean(this[o])
            }
            clone(e) {
                return new this.constructor(n({}, this.data, e))
            }
        }
        t.default = i, i.type = "event", i.cancelable = !1
    }, function(e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.SwappableStopEvent = t.SwappableSwappedEvent = t.SwappableSwapEvent = t.SwappableStartEvent = t.SwappableEvent = void 0;
        var n, o = r(3),
            i = (n = o) && n.__esModule ? n : {
                default: n
            };
        class s extends i.default {
            get dragEvent() {
                return this.data.dragEvent
            }
        }
        t.SwappableEvent = s, s.type = "swappable";
        class a extends s {}
        t.SwappableStartEvent = a, a.type = "swappable:start", a.cancelable = !0;
        class l extends s {
            get over() {
                return this.data.over
            }
            get overContainer() {
                return this.data.overContainer
            }
        }
        t.SwappableSwapEvent = l, l.type = "swappable:swap", l.cancelable = !0;
        class c extends s {
            get swappedElement() {
                return this.data.swappedElement
            }
        }
        t.SwappableSwappedEvent = c, c.type = "swappable:swapped";
        class u extends s {}
        t.SwappableStopEvent = u, u.type = "swappable:stop"
    }, function(e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var n = r(9);
        Object.keys(n).forEach((function(e) {
            "default" !== e && "__esModule" !== e && Object.defineProperty(t, e, {
                enumerable: !0,
                get: function() {
                    return n[e]
                }
            })
        }));
        var o, i = r(41),
            s = (o = i) && o.__esModule ? o : {
                default: o
            };
        t.default = s.default
    }])
})),
function(e, t) {
    "object" == typeof exports && "object" == typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define("Plugins", [], t) : "object" == typeof exports ? exports.Plugins = t() : e.Plugins = t()
}(window, (function() {
    return function(e) {
        var t = {};

        function r(n) {
            if (t[n]) return t[n].exports;
            var o = t[n] = {
                i: n,
                l: !1,
                exports: {}
            };
            return e[n].call(o.exports, o, o.exports, r), o.l = !0, o.exports
        }
        return r.m = e, r.c = t, r.d = function(e, t, n) {
            r.o(e, t) || Object.defineProperty(e, t, {
                enumerable: !0,
                get: n
            })
        }, r.r = function(e) {
            "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
                value: "Module"
            }), Object.defineProperty(e, "__esModule", {
                value: !0
            })
        }, r.t = function(e, t) {
            if (1 & t && (e = r(e)), 8 & t) return e;
            if (4 & t && "object" == typeof e && e && e.__esModule) return e;
            var n = Object.create(null);
            if (r.r(n), Object.defineProperty(n, "default", {
                    enumerable: !0,
                    value: e
                }), 2 & t && "string" != typeof e)
                for (var o in e) r.d(n, o, function(t) {
                    return e[t]
                }.bind(null, o));
            return n
        }, r.n = function(e) {
            var t = e && e.__esModule ? function() {
                return e.default
            } : function() {
                return e
            };
            return r.d(t, "a", t), t
        }, r.o = function(e, t) {
            return Object.prototype.hasOwnProperty.call(e, t)
        }, r.p = "", r(r.s = 21)
    }([function(e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var n, o = r(16),
            i = (n = o) && n.__esModule ? n : {
                default: n
            };
        t.default = i.default
    }, function(e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var n = r(8);
        Object.keys(n).forEach((function(e) {
            "default" !== e && "__esModule" !== e && Object.defineProperty(t, e, {
                enumerable: !0,
                get: function() {
                    return n[e]
                }
            })
        }))
    }, function(e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var n = r(15);
        Object.defineProperty(t, "closest", {
            enumerable: !0,
            get: function() {
                return i(n).default
            }
        });
        var o = r(13);

        function i(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        Object.defineProperty(t, "requestNextAnimationFrame", {
            enumerable: !0,
            get: function() {
                return i(o).default
            }
        })
    }, function(e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var n, o = r(18),
            i = (n = o) && n.__esModule ? n : {
                default: n
            };
        t.default = i.default
    }, function(e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var n = r(19);
        Object.keys(n).forEach((function(e) {
            "default" !== e && "__esModule" !== e && Object.defineProperty(t, e, {
                enumerable: !0,
                get: function() {
                    return n[e]
                }
            })
        }))
    }, function(e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.defaultOptions = void 0;
        var n, o = Object.assign || function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var r = arguments[t];
                    for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
                }
                return e
            },
            i = r(0),
            s = (n = i) && n.__esModule ? n : {
                default: n
            };
        const a = Symbol("onSortableSorted"),
            l = t.defaultOptions = {
                duration: 150,
                easingFunction: "ease-in-out",
                horizontal: !1
            };
        class c extends s.default {
            constructor(e) {
                super(e), this.options = o({}, l, this.getOptions()), this.lastAnimationFrame = null, this[a] = this[a].bind(this)
            }
            attach() {
                this.draggable.on("sortable:sorted", this[a])
            }
            detach() {
                this.draggable.off("sortable:sorted", this[a])
            }
            getOptions() {
                return this.draggable.options.swapAnimation || {}
            }[a]({
                oldIndex: e,
                newIndex: t,
                dragEvent: r
            }) {
                const {
                    source: n,
                    over: o
                } = r;
                cancelAnimationFrame(this.lastAnimationFrame), this.lastAnimationFrame = requestAnimationFrame((() => {
                    e >= t ? u(n, o, this.options) : u(o, n, this.options)
                }))
            }
        }

        function u(e, t, {
            duration: r,
            easingFunction: n,
            horizontal: o
        }) {
            for (const r of [e, t]) r.style.pointerEvents = "none";
            if (o) {
                const r = e.offsetWidth;
                e.style.transform = `translate3d(${r}px, 0, 0)`, t.style.transform = `translate3d(-${r}px, 0, 0)`
            } else {
                const r = e.offsetHeight;
                e.style.transform = `translate3d(0, ${r}px, 0)`, t.style.transform = `translate3d(0, -${r}px, 0)`
            }
            requestAnimationFrame((() => {
                for (const o of [e, t]) o.addEventListener("transitionend", d), o.style.transition = `transform ${r}ms ${n}`, o.style.transform = ""
            }))
        }

        function d(e) {
            e.target.style.transition = "", e.target.style.pointerEvents = "", e.target.removeEventListener("transitionend", d)
        }
        t.default = c
    }, function(e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.defaultOptions = void 0;
        var n, o = r(5),
            i = (n = o) && n.__esModule ? n : {
                default: n
            };
        t.default = i.default, t.defaultOptions = o.defaultOptions
    }, function(e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var n, o = r(0),
            i = (n = o) && n.__esModule ? n : {
                default: n
            },
            s = r(1);
        const a = Symbol("onDragStart"),
            l = Symbol("onDragStop"),
            c = Symbol("onDragOver"),
            u = Symbol("onDragOut"),
            d = Symbol("onMirrorCreated"),
            h = Symbol("onMirrorDestroy");
        class g extends i.default {
            constructor(e) {
                super(e), this.firstSource = null, this.mirror = null, this[a] = this[a].bind(this), this[l] = this[l].bind(this), this[c] = this[c].bind(this), this[u] = this[u].bind(this), this[d] = this[d].bind(this), this[h] = this[h].bind(this)
            }
            attach() {
                this.draggable.on("drag:start", this[a]).on("drag:stop", this[l]).on("drag:over", this[c]).on("drag:out", this[u]).on("droppable:over", this[c]).on("droppable:out", this[u]).on("mirror:created", this[d]).on("mirror:destroy", this[h])
            }
            detach() {
                this.draggable.off("drag:start", this[a]).off("drag:stop", this[l]).off("drag:over", this[c]).off("drag:out", this[u]).off("droppable:over", this[c]).off("droppable:out", this[u]).off("mirror:created", this[d]).off("mirror:destroy", this[h])
            }[a](e) {
                e.canceled() || (this.firstSource = e.source)
            }[l]() {
                this.firstSource = null
            }[c](e) {
                if (e.canceled()) return;
                const t = e.source || e.dragEvent.source;
                if (t === this.firstSource) return void(this.firstSource = null);
                const r = new s.SnapInEvent({
                    dragEvent: e,
                    snappable: e.over || e.droppable
                });
                this.draggable.trigger(r), r.canceled() || (this.mirror && (this.mirror.style.display = "none"), t.classList.remove(this.draggable.getClassNameFor("source:dragging")), t.classList.add(this.draggable.getClassNameFor("source:placed")), setTimeout((() => {
                    t.classList.remove(this.draggable.getClassNameFor("source:placed"))
                }), this.draggable.options.placedTimeout))
            }[u](e) {
                if (e.canceled()) return;
                const t = e.source || e.dragEvent.source,
                    r = new s.SnapOutEvent({
                        dragEvent: e,
                        snappable: e.over || e.droppable
                    });
                this.draggable.trigger(r), r.canceled() || (this.mirror && (this.mirror.style.display = ""), t.classList.add(this.draggable.getClassNameFor("source:dragging")))
            }[d]({
                mirror: e
            }) {
                this.mirror = e
            }[h]() {
                this.mirror = null
            }
        }
        t.default = g
    }, function(e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.SnapOutEvent = t.SnapInEvent = t.SnapEvent = void 0;
        var n, o = r(3),
            i = (n = o) && n.__esModule ? n : {
                default: n
            };
        class s extends i.default {
            get dragEvent() {
                return this.data.dragEvent
            }
            get snappable() {
                return this.data.snappable
            }
        }
        t.SnapEvent = s, s.type = "snap";
        class a extends s {}
        t.SnapInEvent = a, a.type = "snap:in", a.cancelable = !0;
        class l extends s {}
        t.SnapOutEvent = l, l.type = "snap:out", l.cancelable = !0
    }, function(e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var n = r(1);
        Object.keys(n).forEach((function(e) {
            "default" !== e && "__esModule" !== e && Object.defineProperty(t, e, {
                enumerable: !0,
                get: function() {
                    return n[e]
                }
            })
        }));
        var o, i = r(7),
            s = (o = i) && o.__esModule ? o : {
                default: o
            };
        t.default = s.default
    }, function(e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.defaultOptions = void 0;
        var n, o = Object.assign || function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var r = arguments[t];
                    for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
                }
                return e
            },
            i = r(0),
            s = (n = i) && n.__esModule ? n : {
                default: n
            },
            a = r(2);
        const l = Symbol("onMirrorCreated"),
            c = Symbol("onMirrorDestroy"),
            u = Symbol("onDragOver"),
            d = Symbol("resize"),
            h = t.defaultOptions = {};
        class g extends s.default {
            constructor(e) {
                super(e), this.options = o({}, h, this.getOptions()), this.lastWidth = 0, this.lastHeight = 0, this.mirror = null, this[l] = this[l].bind(this), this[c] = this[c].bind(this), this[u] = this[u].bind(this)
            }
            attach() {
                this.draggable.on("mirror:created", this[l]).on("drag:over", this[u]).on("drag:over:container", this[u])
            }
            detach() {
                this.draggable.off("mirror:created", this[l]).off("mirror:destroy", this[c]).off("drag:over", this[u]).off("drag:over:container", this[u])
            }
            getOptions() {
                return this.draggable.options.resizeMirror || {}
            }[l]({
                mirror: e
            }) {
                this.mirror = e
            }[c]() {
                this.mirror = null
            }[u](e) {
                this[d](e)
            }[d]({
                overContainer: e,
                over: t
            }) {
                requestAnimationFrame((() => {
                    this.mirror.parentNode !== e && e.appendChild(this.mirror);
                    const r = t || this.draggable.getDraggableElementsForContainer(e)[0];
                    r && (0, a.requestNextAnimationFrame)((() => {
                        const e = r.getBoundingClientRect();
                        this.lastHeight === e.height && this.lastWidth === e.width || (this.mirror.style.width = `${e.width}px`, this.mirror.style.height = `${e.height}px`, this.lastWidth = e.width, this.lastHeight = e.height)
                    }))
                }))
            }
        }
        t.default = g
    }, function(e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.defaultOptions = void 0;
        var n, o = r(10),
            i = (n = o) && n.__esModule ? n : {
                default: n
            };
        t.default = i.default, t.defaultOptions = o.defaultOptions
    }, function(e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.default = function(e) {
            return requestAnimationFrame((() => {
                requestAnimationFrame(e)
            }))
        }
    }, function(e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var n, o = r(12),
            i = (n = o) && n.__esModule ? n : {
                default: n
            };
        t.default = i.default
    }, function(e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.default = function(e, t) {
            if (!e) return null;
            const r = t,
                o = t,
                i = t,
                s = t,
                a = Boolean("string" == typeof t),
                l = Boolean("function" == typeof t),
                c = Boolean(t instanceof NodeList || t instanceof Array),
                u = Boolean(t instanceof HTMLElement);
            let d = e;
            do {
                if (d = d.correspondingUseElement || d.correspondingElement || d, (h = d) ? a ? n.call(h, r) : c ? [...i].includes(h) : u ? s === h : l && o(h) : h) return d;
                d = d.parentNode
            } while (d && d !== document.body && d !== document);
            var h;
            return null
        };
        const n = Element.prototype.matches || Element.prototype.webkitMatchesSelector || Element.prototype.mozMatchesSelector || Element.prototype.msMatchesSelector
    }, function(e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var n, o = r(14),
            i = (n = o) && n.__esModule ? n : {
                default: n
            };
        t.default = i.default
    }, function(e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        t.default = class {
            constructor(e) {
                this.draggable = e
            }
            attach() {
                throw new Error("Not Implemented")
            }
            detach() {
                throw new Error("Not Implemented")
            }
        }
    }, function(e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var n, o = r(0),
            i = (n = o) && n.__esModule ? n : {
                default: n
            },
            s = r(2),
            a = r(4);
        const l = Symbol("onDragMove"),
            c = Symbol("onDragStop"),
            u = Symbol("onRequestAnimationFrame");
        class d extends i.default {
            constructor(e) {
                super(e), this.currentlyCollidingElement = null, this.lastCollidingElement = null, this.currentAnimationFrame = null, this[l] = this[l].bind(this), this[c] = this[c].bind(this), this[u] = this[u].bind(this)
            }
            attach() {
                this.draggable.on("drag:move", this[l]).on("drag:stop", this[c])
            }
            detach() {
                this.draggable.off("drag:move", this[l]).off("drag:stop", this[c])
            }
            getCollidables() {
                const e = this.draggable.options.collidables;
                return "string" == typeof e ? Array.prototype.slice.call(document.querySelectorAll(e)) : e instanceof NodeList || e instanceof Array ? Array.prototype.slice.call(e) : e instanceof HTMLElement ? [e] : "function" == typeof e ? e() : []
            }[l](e) {
                const t = e.sensorEvent.target;
                this.currentAnimationFrame = requestAnimationFrame(this[u](t)), this.currentlyCollidingElement && e.cancel();
                const r = new a.CollidableInEvent({
                        dragEvent: e,
                        collidingElement: this.currentlyCollidingElement
                    }),
                    n = new a.CollidableOutEvent({
                        dragEvent: e,
                        collidingElement: this.lastCollidingElement
                    }),
                    o = Boolean(this.currentlyCollidingElement && this.lastCollidingElement !== this.currentlyCollidingElement),
                    i = Boolean(!this.currentlyCollidingElement && this.lastCollidingElement);
                o ? (this.lastCollidingElement && this.draggable.trigger(n), this.draggable.trigger(r)) : i && this.draggable.trigger(n), this.lastCollidingElement = this.currentlyCollidingElement
            }[c](e) {
                const t = this.currentlyCollidingElement || this.lastCollidingElement,
                    r = new a.CollidableOutEvent({
                        dragEvent: e,
                        collidingElement: t
                    });
                t && this.draggable.trigger(r), this.lastCollidingElement = null, this.currentlyCollidingElement = null
            }[u](e) {
                return () => {
                    const t = this.getCollidables();
                    this.currentlyCollidingElement = (0, s.closest)(e, (e => t.includes(e)))
                }
            }
        }
        t.default = d
    }, function(e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var n = Object.assign || function(e) {
            for (var t = 1; t < arguments.length; t++) {
                var r = arguments[t];
                for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
            }
            return e
        };
        const o = Symbol("canceled");
        class i {
            constructor(e) {
                this[o] = !1, this.data = e
            }
            get type() {
                return this.constructor.type
            }
            get cancelable() {
                return this.constructor.cancelable
            }
            cancel() {
                this[o] = !0
            }
            canceled() {
                return Boolean(this[o])
            }
            clone(e) {
                return new this.constructor(n({}, this.data, e))
            }
        }
        t.default = i, i.type = "event", i.cancelable = !1
    }, function(e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.CollidableOutEvent = t.CollidableInEvent = t.CollidableEvent = void 0;
        var n, o = r(3),
            i = (n = o) && n.__esModule ? n : {
                default: n
            };
        class s extends i.default {
            get dragEvent() {
                return this.data.dragEvent
            }
        }
        t.CollidableEvent = s, s.type = "collidable";
        class a extends s {
            get collidingElement() {
                return this.data.collidingElement
            }
        }
        t.CollidableInEvent = a, a.type = "collidable:in";
        class l extends s {
            get collidingElement() {
                return this.data.collidingElement
            }
        }
        t.CollidableOutEvent = l, l.type = "collidable:out"
    }, function(e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var n = r(4);
        Object.keys(n).forEach((function(e) {
            "default" !== e && "__esModule" !== e && Object.defineProperty(t, e, {
                enumerable: !0,
                get: function() {
                    return n[e]
                }
            })
        }));
        var o, i = r(17),
            s = (o = i) && o.__esModule ? o : {
                default: o
            };
        t.default = s.default
    }, function(e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var n = r(20);
        Object.defineProperty(t, "Collidable", {
            enumerable: !0,
            get: function() {
                return a(n).default
            }
        });
        var o = r(11);
        Object.defineProperty(t, "ResizeMirror", {
            enumerable: !0,
            get: function() {
                return a(o).default
            }
        }), Object.defineProperty(t, "defaultResizeMirrorOptions", {
            enumerable: !0,
            get: function() {
                return o.defaultOptions
            }
        });
        var i = r(9);
        Object.defineProperty(t, "Snappable", {
            enumerable: !0,
            get: function() {
                return a(i).default
            }
        });
        var s = r(6);

        function a(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        Object.defineProperty(t, "SwapAnimation", {
            enumerable: !0,
            get: function() {
                return a(s).default
            }
        }), Object.defineProperty(t, "defaultSwapAnimationOptions", {
            enumerable: !0,
            get: function() {
                return s.defaultOptions
            }
        })
    }])
})),
function(e, t) {
    "object" == typeof exports && "object" == typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define("Collidable", [], t) : "object" == typeof exports ? exports.Collidable = t() : e.Collidable = t()
}(window, (function() {
    return function(e) {
        var t = {};

        function r(n) {
            if (t[n]) return t[n].exports;
            var o = t[n] = {
                i: n,
                l: !1,
                exports: {}
            };
            return e[n].call(o.exports, o, o.exports, r), o.l = !0, o.exports
        }
        return r.m = e, r.c = t, r.d = function(e, t, n) {
            r.o(e, t) || Object.defineProperty(e, t, {
                enumerable: !0,
                get: n
            })
        }, r.r = function(e) {
            "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
                value: "Module"
            }), Object.defineProperty(e, "__esModule", {
                value: !0
            })
        }, r.t = function(e, t) {
            if (1 & t && (e = r(e)), 8 & t) return e;
            if (4 & t && "object" == typeof e && e && e.__esModule) return e;
            var n = Object.create(null);
            if (r.r(n), Object.defineProperty(n, "default", {
                    enumerable: !0,
                    value: e
                }), 2 & t && "string" != typeof e)
                for (var o in e) r.d(n, o, function(t) {
                    return e[t]
                }.bind(null, o));
            return n
        }, r.n = function(e) {
            var t = e && e.__esModule ? function() {
                return e.default
            } : function() {
                return e
            };
            return r.d(t, "a", t), t
        }, r.o = function(e, t) {
            return Object.prototype.hasOwnProperty.call(e, t)
        }, r.p = "", r(r.s = 12)
    }([function(e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var n = r(11);
        Object.keys(n).forEach((function(e) {
            "default" !== e && "__esModule" !== e && Object.defineProperty(t, e, {
                enumerable: !0,
                get: function() {
                    return n[e]
                }
            })
        }))
    }, function(e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.default = function(e) {
            return requestAnimationFrame((() => {
                requestAnimationFrame(e)
            }))
        }
    }, function(e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var n, o = r(1),
            i = (n = o) && n.__esModule ? n : {
                default: n
            };
        t.default = i.default
    }, function(e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.default = function(e, t) {
            if (!e) return null;
            const r = t,
                o = t,
                i = t,
                s = t,
                a = Boolean("string" == typeof t),
                l = Boolean("function" == typeof t),
                c = Boolean(t instanceof NodeList || t instanceof Array),
                u = Boolean(t instanceof HTMLElement);
            let d = e;
            do {
                if (d = d.correspondingUseElement || d.correspondingElement || d, (h = d) ? a ? n.call(h, r) : c ? [...i].includes(h) : u ? s === h : l && o(h) : h) return d;
                d = d.parentNode
            } while (d && d !== document.body && d !== document);
            var h;
            return null
        };
        const n = Element.prototype.matches || Element.prototype.webkitMatchesSelector || Element.prototype.mozMatchesSelector || Element.prototype.msMatchesSelector
    }, function(e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var n, o = r(3),
            i = (n = o) && n.__esModule ? n : {
                default: n
            };
        t.default = i.default
    }, function(e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var n = r(4);
        Object.defineProperty(t, "closest", {
            enumerable: !0,
            get: function() {
                return i(n).default
            }
        });
        var o = r(2);

        function i(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        Object.defineProperty(t, "requestNextAnimationFrame", {
            enumerable: !0,
            get: function() {
                return i(o).default
            }
        })
    }, function(e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        t.default = class {
            constructor(e) {
                this.draggable = e
            }
            attach() {
                throw new Error("Not Implemented")
            }
            detach() {
                throw new Error("Not Implemented")
            }
        }
    }, function(e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var n, o = r(6),
            i = (n = o) && n.__esModule ? n : {
                default: n
            };
        t.default = i.default
    }, function(e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var n, o = r(7),
            i = (n = o) && n.__esModule ? n : {
                default: n
            },
            s = r(5),
            a = r(0);
        const l = Symbol("onDragMove"),
            c = Symbol("onDragStop"),
            u = Symbol("onRequestAnimationFrame");
        class d extends i.default {
            constructor(e) {
                super(e), this.currentlyCollidingElement = null, this.lastCollidingElement = null, this.currentAnimationFrame = null, this[l] = this[l].bind(this), this[c] = this[c].bind(this), this[u] = this[u].bind(this)
            }
            attach() {
                this.draggable.on("drag:move", this[l]).on("drag:stop", this[c])
            }
            detach() {
                this.draggable.off("drag:move", this[l]).off("drag:stop", this[c])
            }
            getCollidables() {
                const e = this.draggable.options.collidables;
                return "string" == typeof e ? Array.prototype.slice.call(document.querySelectorAll(e)) : e instanceof NodeList || e instanceof Array ? Array.prototype.slice.call(e) : e instanceof HTMLElement ? [e] : "function" == typeof e ? e() : []
            }[l](e) {
                const t = e.sensorEvent.target;
                this.currentAnimationFrame = requestAnimationFrame(this[u](t)), this.currentlyCollidingElement && e.cancel();
                const r = new a.CollidableInEvent({
                        dragEvent: e,
                        collidingElement: this.currentlyCollidingElement
                    }),
                    n = new a.CollidableOutEvent({
                        dragEvent: e,
                        collidingElement: this.lastCollidingElement
                    }),
                    o = Boolean(this.currentlyCollidingElement && this.lastCollidingElement !== this.currentlyCollidingElement),
                    i = Boolean(!this.currentlyCollidingElement && this.lastCollidingElement);
                o ? (this.lastCollidingElement && this.draggable.trigger(n), this.draggable.trigger(r)) : i && this.draggable.trigger(n), this.lastCollidingElement = this.currentlyCollidingElement
            }[c](e) {
                const t = this.currentlyCollidingElement || this.lastCollidingElement,
                    r = new a.CollidableOutEvent({
                        dragEvent: e,
                        collidingElement: t
                    });
                t && this.draggable.trigger(r), this.lastCollidingElement = null, this.currentlyCollidingElement = null
            }[u](e) {
                return () => {
                    const t = this.getCollidables();
                    this.currentlyCollidingElement = (0, s.closest)(e, (e => t.includes(e)))
                }
            }
        }
        t.default = d
    }, function(e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var n = Object.assign || function(e) {
            for (var t = 1; t < arguments.length; t++) {
                var r = arguments[t];
                for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
            }
            return e
        };
        const o = Symbol("canceled");
        class i {
            constructor(e) {
                this[o] = !1, this.data = e
            }
            get type() {
                return this.constructor.type
            }
            get cancelable() {
                return this.constructor.cancelable
            }
            cancel() {
                this[o] = !0
            }
            canceled() {
                return Boolean(this[o])
            }
            clone(e) {
                return new this.constructor(n({}, this.data, e))
            }
        }
        t.default = i, i.type = "event", i.cancelable = !1
    }, function(e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var n, o = r(9),
            i = (n = o) && n.__esModule ? n : {
                default: n
            };
        t.default = i.default
    }, function(e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.CollidableOutEvent = t.CollidableInEvent = t.CollidableEvent = void 0;
        var n, o = r(10),
            i = (n = o) && n.__esModule ? n : {
                default: n
            };
        class s extends i.default {
            get dragEvent() {
                return this.data.dragEvent
            }
        }
        t.CollidableEvent = s, s.type = "collidable";
        class a extends s {
            get collidingElement() {
                return this.data.collidingElement
            }
        }
        t.CollidableInEvent = a, a.type = "collidable:in";
        class l extends s {
            get collidingElement() {
                return this.data.collidingElement
            }
        }
        t.CollidableOutEvent = l, l.type = "collidable:out"
    }, function(e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var n = r(0);
        Object.keys(n).forEach((function(e) {
            "default" !== e && "__esModule" !== e && Object.defineProperty(t, e, {
                enumerable: !0,
                get: function() {
                    return n[e]
                }
            })
        }));
        var o, i = r(8),
            s = (o = i) && o.__esModule ? o : {
                default: o
            };
        t.default = s.default
    }])
})),
function(e, t) {
    "object" == typeof exports && "object" == typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define("ResizeMirror", [], t) : "object" == typeof exports ? exports.ResizeMirror = t() : e.ResizeMirror = t()
}(window, (function() {
    return function(e) {
        var t = {};

        function r(n) {
            if (t[n]) return t[n].exports;
            var o = t[n] = {
                i: n,
                l: !1,
                exports: {}
            };
            return e[n].call(o.exports, o, o.exports, r), o.l = !0, o.exports
        }
        return r.m = e, r.c = t, r.d = function(e, t, n) {
            r.o(e, t) || Object.defineProperty(e, t, {
                enumerable: !0,
                get: n
            })
        }, r.r = function(e) {
            "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
                value: "Module"
            }), Object.defineProperty(e, "__esModule", {
                value: !0
            })
        }, r.t = function(e, t) {
            if (1 & t && (e = r(e)), 8 & t) return e;
            if (4 & t && "object" == typeof e && e && e.__esModule) return e;
            var n = Object.create(null);
            if (r.r(n), Object.defineProperty(n, "default", {
                    enumerable: !0,
                    value: e
                }), 2 & t && "string" != typeof e)
                for (var o in e) r.d(n, o, function(t) {
                    return e[t]
                }.bind(null, o));
            return n
        }, r.n = function(e) {
            var t = e && e.__esModule ? function() {
                return e.default
            } : function() {
                return e
            };
            return r.d(t, "a", t), t
        }, r.o = function(e, t) {
            return Object.prototype.hasOwnProperty.call(e, t)
        }, r.p = "", r(r.s = 8)
    }([function(e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.default = function(e) {
            return requestAnimationFrame((() => {
                requestAnimationFrame(e)
            }))
        }
    }, function(e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var n, o = r(0),
            i = (n = o) && n.__esModule ? n : {
                default: n
            };
        t.default = i.default
    }, function(e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.default = function(e, t) {
            if (!e) return null;
            const r = t,
                o = t,
                i = t,
                s = t,
                a = Boolean("string" == typeof t),
                l = Boolean("function" == typeof t),
                c = Boolean(t instanceof NodeList || t instanceof Array),
                u = Boolean(t instanceof HTMLElement);
            let d = e;
            do {
                if (d = d.correspondingUseElement || d.correspondingElement || d, (h = d) ? a ? n.call(h, r) : c ? [...i].includes(h) : u ? s === h : l && o(h) : h) return d;
                d = d.parentNode
            } while (d && d !== document.body && d !== document);
            var h;
            return null
        };
        const n = Element.prototype.matches || Element.prototype.webkitMatchesSelector || Element.prototype.mozMatchesSelector || Element.prototype.msMatchesSelector
    }, function(e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var n, o = r(2),
            i = (n = o) && n.__esModule ? n : {
                default: n
            };
        t.default = i.default
    }, function(e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var n = r(3);
        Object.defineProperty(t, "closest", {
            enumerable: !0,
            get: function() {
                return i(n).default
            }
        });
        var o = r(1);

        function i(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        Object.defineProperty(t, "requestNextAnimationFrame", {
            enumerable: !0,
            get: function() {
                return i(o).default
            }
        })
    }, function(e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        t.default = class {
            constructor(e) {
                this.draggable = e
            }
            attach() {
                throw new Error("Not Implemented")
            }
            detach() {
                throw new Error("Not Implemented")
            }
        }
    }, function(e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var n, o = r(5),
            i = (n = o) && n.__esModule ? n : {
                default: n
            };
        t.default = i.default
    }, function(e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.defaultOptions = void 0;
        var n, o = Object.assign || function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var r = arguments[t];
                    for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
                }
                return e
            },
            i = r(6),
            s = (n = i) && n.__esModule ? n : {
                default: n
            },
            a = r(4);
        const l = Symbol("onMirrorCreated"),
            c = Symbol("onMirrorDestroy"),
            u = Symbol("onDragOver"),
            d = Symbol("resize"),
            h = t.defaultOptions = {};
        class g extends s.default {
            constructor(e) {
                super(e), this.options = o({}, h, this.getOptions()), this.lastWidth = 0, this.lastHeight = 0, this.mirror = null, this[l] = this[l].bind(this), this[c] = this[c].bind(this), this[u] = this[u].bind(this)
            }
            attach() {
                this.draggable.on("mirror:created", this[l]).on("drag:over", this[u]).on("drag:over:container", this[u])
            }
            detach() {
                this.draggable.off("mirror:created", this[l]).off("mirror:destroy", this[c]).off("drag:over", this[u]).off("drag:over:container", this[u])
            }
            getOptions() {
                return this.draggable.options.resizeMirror || {}
            }[l]({
                mirror: e
            }) {
                this.mirror = e
            }[c]() {
                this.mirror = null
            }[u](e) {
                this[d](e)
            }[d]({
                overContainer: e,
                over: t
            }) {
                requestAnimationFrame((() => {
                    this.mirror.parentNode !== e && e.appendChild(this.mirror);
                    const r = t || this.draggable.getDraggableElementsForContainer(e)[0];
                    r && (0, a.requestNextAnimationFrame)((() => {
                        const e = r.getBoundingClientRect();
                        this.lastHeight === e.height && this.lastWidth === e.width || (this.mirror.style.width = `${e.width}px`, this.mirror.style.height = `${e.height}px`, this.lastWidth = e.width, this.lastHeight = e.height)
                    }))
                }))
            }
        }
        t.default = g
    }, function(e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.defaultOptions = void 0;
        var n, o = r(7),
            i = (n = o) && n.__esModule ? n : {
                default: n
            };
        t.default = i.default, t.defaultOptions = o.defaultOptions
    }])
})),
function(e, t) {
    "object" == typeof exports && "object" == typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define("Snappable", [], t) : "object" == typeof exports ? exports.Snappable = t() : e.Snappable = t()
}(window, (function() {
    return function(e) {
        var t = {};

        function r(n) {
            if (t[n]) return t[n].exports;
            var o = t[n] = {
                i: n,
                l: !1,
                exports: {}
            };
            return e[n].call(o.exports, o, o.exports, r), o.l = !0, o.exports
        }
        return r.m = e, r.c = t, r.d = function(e, t, n) {
            r.o(e, t) || Object.defineProperty(e, t, {
                enumerable: !0,
                get: n
            })
        }, r.r = function(e) {
            "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
                value: "Module"
            }), Object.defineProperty(e, "__esModule", {
                value: !0
            })
        }, r.t = function(e, t) {
            if (1 & t && (e = r(e)), 8 & t) return e;
            if (4 & t && "object" == typeof e && e && e.__esModule) return e;
            var n = Object.create(null);
            if (r.r(n), Object.defineProperty(n, "default", {
                    enumerable: !0,
                    value: e
                }), 2 & t && "string" != typeof e)
                for (var o in e) r.d(n, o, function(t) {
                    return e[t]
                }.bind(null, o));
            return n
        }, r.n = function(e) {
            var t = e && e.__esModule ? function() {
                return e.default
            } : function() {
                return e
            };
            return r.d(t, "a", t), t
        }, r.o = function(e, t) {
            return Object.prototype.hasOwnProperty.call(e, t)
        }, r.p = "", r(r.s = 7)
    }([function(e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var n = r(6);
        Object.keys(n).forEach((function(e) {
            "default" !== e && "__esModule" !== e && Object.defineProperty(t, e, {
                enumerable: !0,
                get: function() {
                    return n[e]
                }
            })
        }))
    }, function(e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        t.default = class {
            constructor(e) {
                this.draggable = e
            }
            attach() {
                throw new Error("Not Implemented")
            }
            detach() {
                throw new Error("Not Implemented")
            }
        }
    }, function(e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var n, o = r(1),
            i = (n = o) && n.__esModule ? n : {
                default: n
            };
        t.default = i.default
    }, function(e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var n, o = r(2),
            i = (n = o) && n.__esModule ? n : {
                default: n
            },
            s = r(0);
        const a = Symbol("onDragStart"),
            l = Symbol("onDragStop"),
            c = Symbol("onDragOver"),
            u = Symbol("onDragOut"),
            d = Symbol("onMirrorCreated"),
            h = Symbol("onMirrorDestroy");
        class g extends i.default {
            constructor(e) {
                super(e), this.firstSource = null, this.mirror = null, this[a] = this[a].bind(this), this[l] = this[l].bind(this), this[c] = this[c].bind(this), this[u] = this[u].bind(this), this[d] = this[d].bind(this), this[h] = this[h].bind(this)
            }
            attach() {
                this.draggable.on("drag:start", this[a]).on("drag:stop", this[l]).on("drag:over", this[c]).on("drag:out", this[u]).on("droppable:over", this[c]).on("droppable:out", this[u]).on("mirror:created", this[d]).on("mirror:destroy", this[h])
            }
            detach() {
                this.draggable.off("drag:start", this[a]).off("drag:stop", this[l]).off("drag:over", this[c]).off("drag:out", this[u]).off("droppable:over", this[c]).off("droppable:out", this[u]).off("mirror:created", this[d]).off("mirror:destroy", this[h])
            }[a](e) {
                e.canceled() || (this.firstSource = e.source)
            }[l]() {
                this.firstSource = null
            }[c](e) {
                if (e.canceled()) return;
                const t = e.source || e.dragEvent.source;
                if (t === this.firstSource) return void(this.firstSource = null);
                const r = new s.SnapInEvent({
                    dragEvent: e,
                    snappable: e.over || e.droppable
                });
                this.draggable.trigger(r), r.canceled() || (this.mirror && (this.mirror.style.display = "none"), t.classList.remove(this.draggable.getClassNameFor("source:dragging")), t.classList.add(this.draggable.getClassNameFor("source:placed")), setTimeout((() => {
                    t.classList.remove(this.draggable.getClassNameFor("source:placed"))
                }), this.draggable.options.placedTimeout))
            }[u](e) {
                if (e.canceled()) return;
                const t = e.source || e.dragEvent.source,
                    r = new s.SnapOutEvent({
                        dragEvent: e,
                        snappable: e.over || e.droppable
                    });
                this.draggable.trigger(r), r.canceled() || (this.mirror && (this.mirror.style.display = ""), t.classList.add(this.draggable.getClassNameFor("source:dragging")))
            }[d]({
                mirror: e
            }) {
                this.mirror = e
            }[h]() {
                this.mirror = null
            }
        }
        t.default = g
    }, function(e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var n = Object.assign || function(e) {
            for (var t = 1; t < arguments.length; t++) {
                var r = arguments[t];
                for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
            }
            return e
        };
        const o = Symbol("canceled");
        class i {
            constructor(e) {
                this[o] = !1, this.data = e
            }
            get type() {
                return this.constructor.type
            }
            get cancelable() {
                return this.constructor.cancelable
            }
            cancel() {
                this[o] = !0
            }
            canceled() {
                return Boolean(this[o])
            }
            clone(e) {
                return new this.constructor(n({}, this.data, e))
            }
        }
        t.default = i, i.type = "event", i.cancelable = !1
    }, function(e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var n, o = r(4),
            i = (n = o) && n.__esModule ? n : {
                default: n
            };
        t.default = i.default
    }, function(e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.SnapOutEvent = t.SnapInEvent = t.SnapEvent = void 0;
        var n, o = r(5),
            i = (n = o) && n.__esModule ? n : {
                default: n
            };
        class s extends i.default {
            get dragEvent() {
                return this.data.dragEvent
            }
            get snappable() {
                return this.data.snappable
            }
        }
        t.SnapEvent = s, s.type = "snap";
        class a extends s {}
        t.SnapInEvent = a, a.type = "snap:in", a.cancelable = !0;
        class l extends s {}
        t.SnapOutEvent = l, l.type = "snap:out", l.cancelable = !0
    }, function(e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var n = r(0);
        Object.keys(n).forEach((function(e) {
            "default" !== e && "__esModule" !== e && Object.defineProperty(t, e, {
                enumerable: !0,
                get: function() {
                    return n[e]
                }
            })
        }));
        var o, i = r(3),
            s = (o = i) && o.__esModule ? o : {
                default: o
            };
        t.default = s.default
    }])
})),
function(e, t) {
    "object" == typeof exports && "object" == typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define("SwapAnimation", [], t) : "object" == typeof exports ? exports.SwapAnimation = t() : e.SwapAnimation = t()
}(window, (function() {
    return function(e) {
        var t = {};

        function r(n) {
            if (t[n]) return t[n].exports;
            var o = t[n] = {
                i: n,
                l: !1,
                exports: {}
            };
            return e[n].call(o.exports, o, o.exports, r), o.l = !0, o.exports
        }
        return r.m = e, r.c = t, r.d = function(e, t, n) {
            r.o(e, t) || Object.defineProperty(e, t, {
                enumerable: !0,
                get: n
            })
        }, r.r = function(e) {
            "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
                value: "Module"
            }), Object.defineProperty(e, "__esModule", {
                value: !0
            })
        }, r.t = function(e, t) {
            if (1 & t && (e = r(e)), 8 & t) return e;
            if (4 & t && "object" == typeof e && e && e.__esModule) return e;
            var n = Object.create(null);
            if (r.r(n), Object.defineProperty(n, "default", {
                    enumerable: !0,
                    value: e
                }), 2 & t && "string" != typeof e)
                for (var o in e) r.d(n, o, function(t) {
                    return e[t]
                }.bind(null, o));
            return n
        }, r.n = function(e) {
            var t = e && e.__esModule ? function() {
                return e.default
            } : function() {
                return e
            };
            return r.d(t, "a", t), t
        }, r.o = function(e, t) {
            return Object.prototype.hasOwnProperty.call(e, t)
        }, r.p = "", r(r.s = 3)
    }([function(e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        t.default = class {
            constructor(e) {
                this.draggable = e
            }
            attach() {
                throw new Error("Not Implemented")
            }
            detach() {
                throw new Error("Not Implemented")
            }
        }
    }, function(e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var n, o = r(0),
            i = (n = o) && n.__esModule ? n : {
                default: n
            };
        t.default = i.default
    }, function(e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.defaultOptions = void 0;
        var n, o = Object.assign || function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var r = arguments[t];
                    for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
                }
                return e
            },
            i = r(1),
            s = (n = i) && n.__esModule ? n : {
                default: n
            };
        const a = Symbol("onSortableSorted"),
            l = t.defaultOptions = {
                duration: 150,
                easingFunction: "ease-in-out",
                horizontal: !1
            };
        class c extends s.default {
            constructor(e) {
                super(e), this.options = o({}, l, this.getOptions()), this.lastAnimationFrame = null, this[a] = this[a].bind(this)
            }
            attach() {
                this.draggable.on("sortable:sorted", this[a])
            }
            detach() {
                this.draggable.off("sortable:sorted", this[a])
            }
            getOptions() {
                return this.draggable.options.swapAnimation || {}
            }[a]({
                oldIndex: e,
                newIndex: t,
                dragEvent: r
            }) {
                const {
                    source: n,
                    over: o
                } = r;
                cancelAnimationFrame(this.lastAnimationFrame), this.lastAnimationFrame = requestAnimationFrame((() => {
                    e >= t ? u(n, o, this.options) : u(o, n, this.options)
                }))
            }
        }

        function u(e, t, {
            duration: r,
            easingFunction: n,
            horizontal: o
        }) {
            for (const r of [e, t]) r.style.pointerEvents = "none";
            if (o) {
                const r = e.offsetWidth;
                e.style.transform = `translate3d(${r}px, 0, 0)`, t.style.transform = `translate3d(-${r}px, 0, 0)`
            } else {
                const r = e.offsetHeight;
                e.style.transform = `translate3d(0, ${r}px, 0)`, t.style.transform = `translate3d(0, -${r}px, 0)`
            }
            requestAnimationFrame((() => {
                for (const o of [e, t]) o.addEventListener("transitionend", d), o.style.transition = `transform ${r}ms ${n}`, o.style.transform = ""
            }))
        }

        function d(e) {
            e.target.style.transition = "", e.target.style.pointerEvents = "", e.target.removeEventListener("transitionend", d)
        }
        t.default = c
    }, function(e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.defaultOptions = void 0;
        var n, o = r(2),
            i = (n = o) && n.__esModule ? n : {
                default: n
            };
        t.default = i.default, t.defaultOptions = o.defaultOptions
    }])
}));