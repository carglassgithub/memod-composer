!(function (e, t) {
  'object' == typeof exports && 'object' == typeof module
    ? (module.exports = t(require('quill')))
    : 'function' == typeof define && define.amd
    ? define(['quill'], t)
    : 'object' == typeof exports
    ? (exports.QuillAutoformat = t(require('quill')))
    : (e.QuillAutoformat = t(e.Quill))
})(window, function (e) {
  return (function (e) {
    var t = {}
    function r(n) {
      if (t[n]) return t[n].exports
      var o = (t[n] = { i: n, l: !1, exports: {} })
      return e[n].call(o.exports, o, o.exports, r), (o.l = !0), o.exports
    }
    return (
      (r.m = e),
      (r.c = t),
      (r.d = function (e, t, n) {
        r.o(e, t) || Object.defineProperty(e, t, { enumerable: !0, get: n })
      }),
      (r.r = function (e) {
        'undefined' != typeof Symbol &&
          Symbol.toStringTag &&
          Object.defineProperty(e, Symbol.toStringTag, { value: 'Module' }),
          Object.defineProperty(e, '__esModule', { value: !0 })
      }),
      (r.t = function (e, t) {
        if ((1 & t && (e = r(e)), 8 & t)) return e
        if (4 & t && 'object' == typeof e && e && e.__esModule) return e
        var n = Object.create(null)
        if (
          (r.r(n),
          Object.defineProperty(n, 'default', { enumerable: !0, value: e }),
          2 & t && 'string' != typeof e)
        )
          for (var o in e)
            r.d(
              n,
              o,
              function (t) {
                return e[t]
              }.bind(null, o)
            )
        return n
      }),
      (r.n = function (e) {
        var t =
          e && e.__esModule
            ? function () {
                return e.default
              }
            : function () {
                return e
              }
        return r.d(t, 'a', t), t
      }),
      (r.o = function (e, t) {
        return Object.prototype.hasOwnProperty.call(e, t)
      }),
      (r.p = ''),
      r((r.s = 1))
    )
  })([
    function (t, r) {
      t.exports = e
    },
    function (e, t, r) {
      'use strict'
      r.r(t)
      var n = r(0),
        o = r.n(n)
      const i = o.a.import('blots/embed'),
        s = o.a.import('blots/inline'),
        l = o.a.import('blots/text'),
        a = o.a.import('blots/cursor')
      class u extends i {
        static create(e) {
          let t = super.create(e)
          return (
            t.setAttribute('href', this.BASE_URL + e),
            t.setAttribute('spellcheck', !1),
            (t.textContent = '#' + e),
            t
          )
        }
        static formats(e) {
          return e.getAttribute('href').substr(this.BASE_URL.length)
        }
        format(e, t) {
          this.domNode.setAttribute('href', this.BASE_URL + t)
        }
        static value(e) {
          return e.textContent.substr(1)
        }
      }
      ;(u.blotName = 'hashtag'),
        (u.className = 'ql-hashtag'),
        (u.tagName = 'A'),
        (u.BASE_URL = '#')
      class f extends s {
        static create(e) {
          let t = super.create(e)
          return (
            t.setAttribute('href', this.BASE_URL + e),
            t.setAttribute('spellcheck', !1),
            t
          )
        }
        static formats(e) {
          return e.getAttribute('href').substr(this.BASE_URL.length)
        }
        format(e, t) {
          this.domNode.setAttribute('href', this.BASE_URL + t)
        }
      }
      ;(f.blotName = 'hashtag'),
        (f.className = 'ql-hashtag'),
        (f.tagName = 'A'),
        (f.allowedChildren = [l, a]),
        (f.BASE_URL = '#')
      const c = o.a.import('blots/embed')
      class h extends c {
        static create(e) {
          const t = super.create(e)
          return (
            t.setAttribute('title', e),
            t.setAttribute('href', this.BASE_URL + e),
            (t.textContent = '@' + e),
            t
          )
        }
        static value(e) {
          return e.textContent.substr(1)
        }
      }
      ;(h.blotName = 'mention'),
        (h.className = 'ql-mention'),
        (h.tagName = 'A'),
        (h.BASE_URL = '/')
      var p = h
      function d(e, t) {
        return (
          (function (e) {
            if (Array.isArray(e)) return e
          })(e) ||
          (function (e, t) {
            var r = [],
              n = !0,
              o = !1,
              i = void 0
            try {
              for (
                var s, l = e[Symbol.iterator]();
                !(n = (s = l.next()).done) &&
                (r.push(s.value), !t || r.length !== t);
                n = !0
              );
            } catch (e) {
              ;(o = !0), (i = e)
            } finally {
              try {
                n || null == l.return || l.return()
              } finally {
                if (o) throw i
              }
            }
            return r
          })(e, t) ||
          (function () {
            throw new TypeError(
              'Invalid attempt to destructure non-iterable instance'
            )
          })()
        )
      }
      const m = o.a.import('core/module'),
        g = o.a.import('delta'),
        b = o.a.import('parchment'),
        y = b.Attributor,
        x = b.Scope
      class w extends m {
        constructor(e, t) {
          super(e, t),
            (this.transforms = t),
            this.registerTypeListener(),
            this.registerPasteListener()
        }
        registerPasteListener() {
          for (const e in this.transforms) {
            const t = this.transforms[e]
            this.quill.clipboard.addMatcher(Node.TEXT_NODE, (e, r) => {
              if ('string' == typeof e.data)
                return (
                  r.ops.forEach((e, r, n) => {
                    if ('string' == typeof e.insert) {
                      let o = A(t, e.insert),
                        i = new g([e]).compose(o)
                      n.splice(r, 1, ...i.ops)
                    }
                  }),
                  r
                )
            })
          }
        }
        registerTypeListener() {
          this.quill.keyboard.addBinding(
            { key: 38, collapsed: !0, format: ['autoformat-helper'] },
            this.forwardKeyboardUp.bind(this)
          ),
            this.quill.keyboard.addBinding(
              { key: 40, collapsed: !0, format: ['autoformat-helper'] },
              this.forwardKeyboardDown.bind(this)
            ),
            this.quill.on(o.a.events.TEXT_CHANGE, (e, t, r) => {
              let n = e.ops
              if ('user' !== r || !n || n.length < 1) return
              let i = n.length - 1,
                s = n[i]
              for (; !s.insert && i > 0; ) s = n[--i]
              if (!s.insert || 'string' != typeof s.insert) return
              let l = '\n' === s.insert,
                a = this.quill.getSelection()
              if (!a) return
              let u = this.quill.getLength() - a.index - (l ? 1 : 0),
                f = a.index,
                c = d(this.quill.getLeaf(f), 1)[0]
              if (!c || !c.text) return
              let h = c.offset(c.scroll),
                p = f - h,
                m = !1
              for (const e in this.transforms) {
                const t = this.transforms[e]
                if (
                  t.helper &&
                  t.helper.trigger &&
                  s.insert.match(t.helper.trigger)
                )
                  this.quill.formatText(
                    f,
                    1,
                    'autoformat-helper',
                    e,
                    o.a.sources.API
                  ),
                    this.openHelper(t, f)
                else if (s.insert.match(t.trigger || /./)) {
                  this.closeHelper(t)
                  let e = new g().retain(h),
                    r = A(t, c.text, p)
                  r && (e = e.concat(r)),
                    this.quill.updateContents(e, 'api'),
                    (m = !0)
                }
              }
              m &&
                setTimeout(() => {
                  this.quill.setSelection(this.quill.getLength() - u, 'api')
                }, 0)
            })
        }
        forwardKeyboard(e, t) {
          if (this.currentHelper && this.currentHelper.container) {
            let e = this.currentHelper.container.querySelector('.dropdown-menu')
            e.dispatchEvent(t.event)
          }
        }
        forwardKeyboardUp(e, t) {
          var r = new KeyboardEvent('keydown', {
            key: 'ArrowUp',
            keyCode: 38,
            which: 38,
            bubbles: !0,
            cancelable: !0
          })
          ;(t.event = r), this.forwardKeyboard(e, t)
        }
        forwardKeyboardDown(e, t) {
          var r = new KeyboardEvent('keydown', {
            key: 'ArrowDown',
            keyCode: 40,
            which: 40,
            bubbles: !0,
            cancelable: !0
          })
          ;(t.event = r), this.forwardKeyboard(e, t)
        }
        openHelper(e, t) {
          if (
            e.helper &&
            ((this.currentHelper = e.helper),
            'function' == typeof e.helper.open)
          ) {
            console.log('openHelper', t, this.quill.getFormat(t))
            let r = this.quill.getBounds(t),
              n = this.quill.addContainer('ql-helper')
            ;(n.style.position = 'absolute'),
              (n.style.top = r.top + 'px'),
              (n.style.left = r.left + 'px'),
              (n.style.width = r.width + 'px'),
              (n.style.height = r.height + 'px'),
              console.log('openHelper', r, n),
              (e.helper.container = n),
              e.helper.open(n)
          }
        }
        closeHelper(e) {
          e.helper &&
            'function' == typeof e.helper.close &&
            e.helper.close(e.helper.container)
        }
      }
      function A(e, t, r) {
        e.find.global || (e.find = new RegExp(e.find, e.find.flags + 'g')),
          (e.find.lastIndex = 0)
        let n = new g(),
          o = null
        if (null != r)
          for (o = e.find.exec(t); o && o.length && o.index < r; ) {
            if (o.index < r && o.index + o[0].length + 1 >= r) {
              n = n.concat(v(e, o).ops)
              break
            }
            o = e.find.exec(t)
          }
        else
          for (; null !== (o = e.find.exec(t)); ) {
            let r = v(e, o)
            ;(n = n.concat(r.ops)),
              (t = t.substr(r.rightIndex)),
              (e.find.lastIndex = 0)
          }
        return n
      }
      function v(e, t) {
        let r = (t = (function (e, t) {
            if (e.extract) {
              let r = new RegExp(e.extract).exec(t[0])
              return r && r.length ? ((r.index += t.index), r) : t
            }
            return t
          })(e, t)).index,
          n = (function (e, t) {
            let r = new RegExp(e.extract || e.find)
            return e.transform ? t.replace(r, e.transform) : t
          })(e, t[0]),
          o = n
        e.insert && ((o = {})[e.insert] = n)
        let i = (function (e, t) {
          let r = {}
          return (
            'string' == typeof e.format
              ? (r[e.format] = t)
              : 'object' == typeof e.format && (r = e.format),
            r
          )
        })(e, n)
        const s = new g()
        return (
          s.retain(r).delete(t[0].length).insert(o, i),
          { ops: s, rightIndex: r + t[0].length }
        )
      }
      w.DEFAULTS = {
        hashtag: {
          trigger: /[\s.,;:!?]/,
          find: /(?:^|\s)#[^\s.,;:!?]+/i,
          extract: /#([^\s.,;:!?]+)/i,
          transform: '$1',
          insert: 'hashtag'
        },
        mention: {
          trigger: /[\s.,;:!?]/,
          find: /(?:^|\s)@[^\s.,;:!?]+/i,
          extract: /@([^\s.,;:!?]+)/i,
          transform: '$1',
          insert: 'mention'
        },
        link: {
          trigger: /[\s]/,
          find: /https?:\/\/[\S]+|(www\.[\S]+)/gi,
          transform: function (e, t) {
            return t ? 'http://' + e : e
          },
          format: 'link'
        }
      }
      const q = new y('autoformat-helper', 'data-helper', { scope: x.INLINE })
      r.d(t, 'default', function () {
        return w
      }),
        r.d(t, 'Hashtag', function () {
          return u
        }),
        r.d(t, 'Mention', function () {
          return p
        }),
        r.d(t, 'AutoformatHelperAttribute', function () {
          return q
        }),
        o.a.version &&
          parseInt(o.a.version[0]) < 2 &&
          console.warn(
            'quill-autoformat requires Quill 2.0 or higher to work properly'
          ),
        o.a.register({
          'modules/autoformat': w,
          'formats/hashtag': u,
          'formats/mention': p,
          'formats/autoformat-helper': q
        })
    }
  ])
})
