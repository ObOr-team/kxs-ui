import { defineComponent as O, toRef as I, computed as k, openBlock as a, createElementBlock as i, normalizeClass as B, unref as e, normalizeStyle as p, createElementVNode as s, renderSlot as Y, ref as g, resolveComponent as Z, toDisplayString as L, createBlock as j, createCommentVNode as x, withCtx as q, createTextVNode as G, pushScopeId as U, popScopeId as K, useSlots as ee, Fragment as M, renderList as z, onBeforeUnmount as Q, withDirectives as P, vShow as J, onMounted as te } from "vue";
const le = ["disabled"], ne = {
  name: "kButton"
}, oe = /* @__PURE__ */ O({
  ...ne,
  props: {
    type: {
      type: String,
      default: ""
    },
    plain: {
      type: Boolean,
      default: !1
    },
    round: {
      type: Boolean,
      default: !1
    },
    disabled: {
      type: Boolean,
      default: !1
    },
    size: {
      type: String,
      default: "default"
    },
    block: {
      type: Boolean,
      default: !1
    },
    postIcon: {
      type: String,
      default: ""
    },
    icon: {
      type: String,
      default: ""
    },
    loading: {
      type: Boolean,
      default: !1
    }
  },
  setup(l) {
    const t = l, d = I(t, "round"), c = k(() => t.block ? { display: "block", width: "100%" } : ""), v = k(() => t.postIcon ? `${t.postIcon}` : ""), n = k(() => t.icon ? `${t.icon}` : ""), _ = k(() => [
      "btn",
      `${t.type}`,
      t.plain ? "isPlain" : "",
      d.value ? "isRound" : "",
      t.disabled ? "isDisabled" : "",
      t.loading ? "isLoading" : "",
      `${t.size}`
    ]);
    return (f, u) => (a(), i("button", {
      disabled: l.disabled,
      class: B(e(_)),
      style: p([e(c)])
    }, [
      s("div", {
        class: B(e(n))
      }, null, 2),
      Y(f.$slots, "default", {}, void 0, !0),
      s("i", {
        class: B(e(v))
      }, null, 2)
    ], 14, le));
  }
});
const V = (l, t) => {
  const d = l.__vccOpts || l;
  for (const [c, v] of t)
    d[c] = v;
  return d;
}, ae = /* @__PURE__ */ V(oe, [["__scopeId", "data-v-dd934f58"]]), se = { class: "dialog-inner" }, ue = { class: "base" }, ie = { class: "content" }, ce = {
  key: 0,
  class: "icon-box"
}, re = {
  key: 0,
  class: "footerBox"
}, de = {
  name: "kDialog"
}, ve = /* @__PURE__ */ O({
  ...de,
  props: {
    type: {
      // 提示框类型：info（默认）、confirm、warning、error
      type: String,
      default: "info"
    },
    themeColor: {
      // 主题颜色：头部背景颜色、图标颜色、确认按钮颜色
      type: String,
      default: ""
    },
    titleColor: {
      // 标题文字颜色
      type: String,
      default: "white"
    },
    contentColor: {
      // 提示框内容文字颜色
      type: String,
      default: "black"
    },
    titleText: {
      // 标题文本
      type: String,
      default: ""
    },
    contentText: {
      // 提示框内容文本
      type: String,
      default: ""
    },
    confirmBtnText: {
      // 确认按钮文本
      type: String,
      default: "确认"
    },
    cancelBtnText: {
      // 取消按钮文本
      type: String,
      default: "取消"
    },
    closable: {
      // 是否显示右上角的关闭按钮
      type: Boolean,
      default: !0
    },
    footerBtn: {
      // 底部按钮：both、confirm、cancel、null
      type: String,
      default: "both"
    },
    confirmLoading: {
      // 确定按钮loading（异步确认关闭）
      type: Boolean,
      default: !1
    },
    width: {
      // 对话框整体宽度
      type: String,
      default: "500px"
    },
    height: {
      // 对话框整体高度
      type: String,
      default: "200px"
    },
    location: {
      // 位置：top、center
      type: String,
      default: "top"
    },
    confirmClick: {
      // 确定按钮点击事件
      type: Function,
      default: function() {
      }
    },
    cancelClick: {
      // 取消按钮点击事件
      type: Function,
      default: function() {
      }
    }
  },
  setup(l) {
    const t = l, d = {
      confirm: "#2ECC71",
      warning: "#F39C12",
      error: "#E74C3C",
      info: "#3498DB"
    }, c = k(() => {
      if (t.themeColor === "")
        switch (t.type) {
          case "confirm":
            return d.confirm;
          case "warning":
            return d.warning;
          case "error":
            return d.error;
          case "info":
            return d.info;
        }
      return t.themeColor;
    }), v = k(() => ({ background: c.value })), n = k(() => ({ color: t.titleColor })), _ = k(() => ({ color: t.contentColor })), f = k(() => {
      switch (t.type) {
        case "confirm":
          return "k-icon-check_circle_line";
        case "warning":
          return "k-icon-zhuyi";
        case "error":
          return "k-icon-guanbi";
        case "info":
          return "";
      }
    }), u = k(() => t.closable === !0), h = k(() => t.footerBtn === "both" || t.footerBtn === "confirm"), r = k(() => t.footerBtn === "both" || t.footerBtn === "cancel"), D = k(() => ({ width: t.width, height: t.height })), m = k(() => t.location === "top" ? { top: "25%" } : { top: "50%" });
    let H = g(""), y = g(!1), o = g(!0), T = () => {
      t.confirmLoading ? (y.value = !0, H.value = "k-icon-jiazai") : o.value = !1, t.confirmClick();
    }, N = () => {
      t.cancelClick(), o.value = !1;
    }, $ = () => o.value = !1;
    return (w, C) => {
      const b = Z("k-button");
      return e(o) ? (a(), i("div", {
        key: 0,
        class: "dialog",
        style: p([Object.assign(e(D), e(m))])
      }, [
        s("div", se, [
          s("div", {
            class: "title",
            style: p([e(v)])
          }, [
            s("span", {
              style: p([e(n)])
            }, L(t.titleText), 5),
            e(u) ? (a(), j(b, {
              key: 0,
              class: "closeBtn",
              type: "default",
              onclick: e($),
              icon: "k-icon-xianxingguanbi",
              style: p([e(v), e(n)])
            }, null, 8, ["onclick", "style"])) : x("", !0)
          ], 4),
          s("div", ue, [
            s("div", ie, [
              t.type !== "info" ? (a(), i("div", ce, [
                s("i", {
                  class: B(e(f)),
                  style: p({ color: e(c) })
                }, null, 6)
              ])) : x("", !0),
              s("div", {
                class: "info",
                style: p([e(_)])
              }, L(t.contentText), 5)
            ]),
            t.footerBtn !== "null" ? (a(), i("div", re, [
              e(h) ? (a(), j(b, {
                key: 0,
                class: "footerBtn confirmBtn",
                style: p([e(v)]),
                onclick: e(T),
                icon: e(H),
                loading: e(y)
              }, {
                default: q(() => [
                  G(L(t.confirmBtnText), 1)
                ]),
                _: 1
              }, 8, ["style", "onclick", "icon", "loading"])) : x("", !0),
              e(r) ? (a(), j(b, {
                key: 1,
                class: "footerBtn cancelBtn",
                onclick: e(N)
              }, {
                default: q(() => [
                  G(L(t.cancelBtnText), 1)
                ]),
                _: 1
              }, 8, ["onclick"])) : x("", !0)
            ])) : x("", !0)
          ])
        ])
      ], 4)) : x("", !0);
    };
  }
});
const fe = /* @__PURE__ */ V(ve, [["__scopeId", "data-v-fed85b3d"]]), W = (l) => (U("data-v-4c2c7cd1"), l = l(), K(), l), pe = { class: "k-input" }, he = {
  key: 0,
  class: "icon-right"
}, _e = ["type", "placeholder", "name", "disabled"], ye = {
  key: 0,
  t: "1676271826305",
  class: "icon",
  viewBox: "0 0 1024 1024",
  version: "1.1",
  xmlns: "http://www.w3.org/2000/svg",
  "p-id": "3704",
  width: "16",
  height: "16"
}, ge = /* @__PURE__ */ W(() => /* @__PURE__ */ s("path", {
  d: "M512 637.207273c-171.752727 0-343.272727-52.363636-465.454545-156.858182a34.909091 34.909091 0 1 1 46.545454-53.061818c215.505455 186.181818 623.243636 186.181818 837.818182 0a34.909091 34.909091 0 0 1 46.545454 53.061818c-122.181818 104.494545-293.701818 156.858182-465.454545 156.858182z",
  fill: "#666666",
  "p-id": "3705"
}, null, -1)), me = /* @__PURE__ */ W(() => /* @__PURE__ */ s("path", {
  d: "M384.465455 791.272727a28.625455 28.625455 0 0 1-6.283637 0A34.676364 34.676364 0 0 1 349.090909 749.149091l23.272727-137.309091a34.909091 34.909091 0 1 1 69.818182 12.101818l-23.272727 137.309091A34.909091 34.909091 0 0 1 384.465455 791.272727zM907.636364 721.454545a34.443636 34.443636 0 0 1-24.669091-10.472727l-114.734546-116.363636a34.909091 34.909091 0 1 1 49.570909-48.872727l114.734546 116.363636a34.909091 34.909091 0 0 1 0 49.338182A36.305455 36.305455 0 0 1 907.636364 721.454545zM116.363636 721.454545a36.305455 36.305455 0 0 1-23.272727-10.007272 34.909091 34.909091 0 0 1 0-49.338182l114.734546-116.363636a34.909091 34.909091 0 1 1 48.174545 48.872727l-114.734545 116.363636A34.443636 34.443636 0 0 1 116.363636 721.454545zM641.163636 791.272727a34.909091 34.909091 0 0 1-34.210909-28.858182l-23.272727-137.30909a34.909091 34.909091 0 1 1 67.956364-13.265455l23.272727 137.309091a34.676364 34.676364 0 0 1-28.16 40.494545 28.625455 28.625455 0 0 1-5.585455 1.629091z",
  fill: "#666666",
  "p-id": "3706"
}, null, -1)), we = [
  ge,
  me
], xe = {
  key: 1,
  t: "1676272038724",
  class: "icon",
  viewBox: "0 0 1024 1024",
  version: "1.1",
  xmlns: "http://www.w3.org/2000/svg",
  "p-id": "3909",
  width: "16",
  height: "16"
}, ke = /* @__PURE__ */ W(() => /* @__PURE__ */ s("path", {
  d: "M512 279.272727c171.985455 0 328.610909 162.909091 388.421818 232.727273-59.810909 69.818182-216.436364 232.727273-388.421818 232.727273S183.389091 581.818182 123.578182 512c59.810909-69.818182 216.436364-232.727273 388.421818-232.727273m0-69.818182C298.589091 209.454545 117.76 407.970909 56.785455 483.374545a44.916364 44.916364 0 0 0 0 57.25091C117.76 616.029091 298.589091 814.545455 512 814.545455s394.24-198.516364 455.214545-273.92a44.916364 44.916364 0 0 0 0-57.25091C906.24 407.970909 725.410909 209.454545 512 209.454545z",
  fill: "#666666",
  "p-id": "3910"
}, null, -1)), be = /* @__PURE__ */ W(() => /* @__PURE__ */ s("path", {
  d: "M512 442.181818a69.818182 69.818182 0 1 1-69.818182 69.818182 69.818182 69.818182 0 0 1 69.818182-69.818182m0-69.818182a139.636364 139.636364 0 1 0 139.636364 139.636364 139.636364 139.636364 0 0 0-139.636364-139.636364z",
  fill: "#666666",
  "p-id": "3911"
}, null, -1)), Be = [
  ke,
  be
], Ce = { key: 2 }, $e = {
  name: "kInput"
}, Se = /* @__PURE__ */ O({
  ...$e,
  props: {
    placeholder: {
      type: String,
      default: ""
    },
    type: {
      type: String,
      default: "text"
    },
    name: {
      type: String,
      default: ""
    },
    disabled: {
      type: Boolean,
      default: !1
    },
    leftIcon: {
      type: String,
      default: ""
    },
    rightIcon: {
      type: String,
      default: ""
    },
    modelValue: [String, Number]
    // articleId: {
    //   type: [Number, String, Object],
    //   required: true
    // }
    // defaultValue:{
    //   type:String,
    //   default:'abcdef'
    // }
  },
  emits: ["update:modelValue", "clear", "focus", "blur", "input", "change"],
  setup(l, { emit: t }) {
    const d = g(null);
    let c = g(!0);
    const v = () => {
      d.value.type = d.value.type === "password" ? "text" : "password", c.value = !c.value;
    }, n = (_) => {
      t("update:modelValue", _.target.value);
    };
    return (_, f) => (a(), i("div", pe, [
      l.rightIcon ? (a(), i("span", he, [
        s("i", {
          class: B(l.rightIcon)
        }, null, 2)
      ])) : x("", !0),
      s("input", {
        class: B(["k-input__inner", { "is-disabled": l.disabled }]),
        type: l.type,
        placeholder: l.placeholder,
        name: l.name,
        disabled: l.disabled,
        ref_key: "inputBox",
        ref: d,
        onInput: n
      }, null, 42, _e),
      l.type == "password" ? (a(), i("span", {
        key: 1,
        class: "icon-left",
        onClick: v
      }, [
        e(c) ? (a(), i("svg", ye, we)) : x("", !0),
        e(c) ? x("", !0) : (a(), i("svg", xe, Be))
      ])) : x("", !0),
      l.leftIcon ? (a(), i("span", Ce, [
        s("i", {
          class: B(l.leftIcon)
        }, null, 2)
      ])) : x("", !0)
    ]));
  }
});
const Ie = /* @__PURE__ */ V(Se, [["__scopeId", "data-v-4c2c7cd1"]]), Te = {
  name: "KTable"
}, Me = /* @__PURE__ */ O({
  ...Te,
  props: {
    options: {
      type: Object,
      default: () => ({
        fileds: [],
        datas: []
      })
    },
    size: {
      type: String,
      default: "default"
    },
    showHeader: {
      type: Boolean,
      default: !0
    },
    headStyle: {
      type: Object,
      default: () => ({})
    },
    rowStyle: {
      type: Object,
      default: () => ({})
    },
    customClass: String
  },
  setup(l) {
    return ee(), (t, d) => (a(), i("div", {
      class: B([`k-table-${l.size}`, l.customClass])
    }, [
      s("table", null, [
        s("tr", null, [
          (a(!0), i(M, null, z(l.options.fileds, (c, v) => (a(), i("th", {
            key: v,
            style: p([l.headStyle, { "text-align": c.align }])
          }, [
            s("div", null, L(c.title), 1)
          ], 4))), 128))
        ]),
        (a(!0), i(M, null, z(l.options.datas, (c, v) => (a(), i("tr", { key: v }, [
          (a(!0), i(M, null, z(l.options.fileds, (n, _) => (a(), i("td", {
            key: _,
            style: p([l.rowStyle, { width: l.options.fileds[_].width ? l.options.fileds[_].width : "", "text-align": l.options.fileds[_].align }])
          }, [
            s("div", null, L(l.options.datas[v][l.options.fileds[_].field]), 1)
          ], 4))), 128))
        ]))), 128))
      ])
    ], 2));
  }
});
const ze = /* @__PURE__ */ V(Me, [["__scopeId", "data-v-9bdfd16a"]]), A = (l) => (U("data-v-3f399843"), l = l(), K(), l), Le = {
  key: 0,
  t: "1675488886083",
  class: "icon",
  viewBox: "0 0 1024 1024",
  version: "1.1",
  xmlns: "http://www.w3.org/2000/svg",
  "p-id": "1875",
  width: "30",
  height: "30"
}, Ne = /* @__PURE__ */ A(() => /* @__PURE__ */ s("path", {
  d: "M731.6992 909.131776c8.660992 7.86432 8.660992 21.25824 0 29.12256-7.878656 8.6528-21.245952 8.6528-29.126656 0L290.922496 526.600192c-7.878656-7.86432-7.878656-21.260288 0-29.124608L702.57664 85.819392c7.880704-7.86432 21.248-7.86432 29.126656 0 8.660992 7.86432 8.660992 21.260288 0 29.124608L334.999552 512.444416 731.6992 909.131776z",
  "p-id": "1876"
}, null, -1)), Oe = [
  Ne
], Ve = {
  key: 1,
  t: "1675488740890",
  class: "icon",
  viewBox: "0 0 1024 1024",
  version: "1.1",
  xmlns: "http://www.w3.org/2000/svg",
  "p-id": "1608",
  width: "30",
  height: "30"
}, De = /* @__PURE__ */ A(() => /* @__PURE__ */ s("path", {
  d: "M908.406784 732.42624c7.86432 8.66304 21.25824 8.66304 29.12256 0 8.650752-7.876608 8.650752-21.245952 0-29.124608L525.873152 291.647488c-7.86432-7.878656-21.260288-7.878656-29.124608 0L85.0944 703.301632c-7.86432 7.878656-7.86432 21.248 0 29.124608 7.86432 8.66304 21.260288 8.66304 29.124608 0l397.500416-396.699648L908.406784 732.42624z",
  "p-id": "1609"
}, null, -1)), He = [
  De
], Ee = ["src"], Pe = ["src"], Je = {
  key: 0,
  t: "1675488923875",
  class: "icon",
  viewBox: "0 0 1024 1024",
  version: "1.1",
  xmlns: "http://www.w3.org/2000/svg",
  "p-id": "2046",
  width: "30",
  height: "30"
}, We = /* @__PURE__ */ A(() => /* @__PURE__ */ s("path", {
  d: "M688.211968 512.444416 291.510272 114.944c-8.660992-7.86432-8.660992-21.260288 0-29.124608 7.878656-7.86432 21.245952-7.86432 29.126656 0l411.654144 411.656192c7.878656 7.86432 7.878656 21.260288 0 29.124608L320.638976 938.254336c-7.880704 8.6528-21.248 8.6528-29.126656 0-8.660992-7.86432-8.660992-21.25824 0-29.12256L688.211968 512.444416z",
  "p-id": "2047"
}, null, -1)), Ae = [
  We
], Fe = {
  key: 1,
  t: "1675488945436",
  class: "icon",
  viewBox: "0 0 1024 1024",
  version: "1.1",
  xmlns: "http://www.w3.org/2000/svg",
  "p-id": "2217",
  width: "30",
  height: "30"
}, je = /* @__PURE__ */ A(() => /* @__PURE__ */ s("path", {
  d: "M908.406784 292.237312c7.86432-8.66304 21.25824-8.66304 29.12256 0 8.650752 7.876608 8.650752 21.245952 0 29.124608L525.873152 733.016064c-7.86432 7.878656-21.260288 7.878656-29.124608 0L85.0944 321.36192c-7.86432-7.878656-7.86432-21.248 0-29.124608 7.86432-8.66304 21.260288-8.66304 29.124608 0l397.500416 396.699648L908.406784 292.237312z",
  "p-id": "2218"
}, null, -1)), Ue = [
  je
], Ke = ["onClick"], Re = ["onClick"], qe = {
  name: "kCarousel"
}, Ge = /* @__PURE__ */ O({
  ...qe,
  props: {
    carouselW: {
      type: Number,
      default: 671
    },
    carouselH: {
      type: Number,
      default: 300
    },
    autoplay: {
      type: Number,
      default: 2e3
    },
    imgData: {
      type: Object,
      default: []
    },
    showPointer: {
      type: Boolean,
      default: "true"
    },
    isHorizontal: {
      type: Boolean,
      default: "true"
    }
  },
  setup(l) {
    const t = l, d = I(t, "carouselW"), c = I(t, "carouselH"), v = I(t, "autoplay");
    let n = g(JSON.parse(JSON.stringify(t.imgData)));
    n.value.push(JSON.parse(JSON.stringify(n.value[0]))), n.value[n.value.length - 1].id = n.value.length - 1;
    const _ = I(t, "showPointer"), f = I(t, "isHorizontal");
    let u = !0, h = g(null), r = g(null), D = g(n.value.length * d.value), m = g(1), H = g(n.value.length * c.value), y = g(1), o = g(0), T = g(0);
    T.value = (10 + 10) * (n.value.length - 1);
    const N = function() {
      u && (u = !1, h.value.style.transition = "left 1s", r.value.style.transition = "top 1s", o.value++, m.value = -o.value * d.value, y.value = -o.value * c.value, o.value == n.value.length - 1 && (m.value = -o.value * d.value, y.value = -o.value * c.value, o.value = 0, setTimeout(function() {
        h.value.style.transition = "none", r.value.style.transition = "none", m.value = 0, y.value = 0;
      }, 1e3)), clearTimeout(C), setTimeout(function() {
        u = !0;
      }, 1e3));
    }, $ = function() {
      u && (u = !1, o.value > 0 ? (h.value.style.transition = "left 1s", r.value.style.transition = "top 1s", o.value--, m.value = -o.value * d.value, y.value = -o.value * c.value) : (h.value.style.transition = "none", r.value.style.transition = "none", m.value = -(n.value.length - 1) * d.value, y.value = -(n.value.length - 1) * c.value, setTimeout(function() {
        h.value.style.transition = "left 1s", r.value.style.transition = "top 1s", o.value = n.value.length - 2, m.value = -(n.value.length - 2) * d.value, y.value = -(n.value.length - 2) * c.value;
      }, 0)), clearTimeout(C), setTimeout(function() {
        u = !0;
      }, 0));
    }, w = function(R) {
      o.value = R, m.value = -o.value * d.value, y.value = -o.value * c.value, clearTimeout(C);
    };
    let C = setInterval(() => {
      h.value.style.transition = "left 1s", r.value.style.transition = "top 1s", o.value++, m.value = -o.value * d.value, y.value = -o.value * c.value, o.value == n.value.length - 1 && (m.value = -o.value * d.value, y.value = -o.value * c.value, o.value = 0, setTimeout(function() {
        h.value.style.transition = "none", r.value.style.transition = "none", m.value = 0, y.value = 0;
      }, 1e3));
    }, v.value);
    Q(() => {
      clearTimeout(C);
    });
    const b = function() {
      clearTimeout(C);
    }, E = function() {
      C = setInterval(() => {
        h.value.style.transition = "left 1s", r.value.style.transition = "top 1s", o.value++, m.value = -o.value * d.value, y.value = -o.value * c.value, o.value == 5 && (m.value = -o.value * d.value, y.value = -o.value * c.value, o.value = 0, setTimeout(function() {
          h.value.style.transition = "none", r.value.style.transition = "none", m.value = 0, y.value = 0;
        }, 1e3));
      }, v.value);
    };
    return (R, pt) => (a(), i("div", {
      class: "carousel",
      style: p({
        width: e(d) + "px",
        height: e(c) + "px"
      })
    }, [
      s("label", {
        class: B(e(f) === !0 ? "label_left" : "label_up"),
        onClick: $,
        onMousemove: b,
        onMouseout: E
      }, [
        e(f) === !0 ? (a(), i("svg", Le, Oe)) : x("", !0),
        e(f) === !1 ? (a(), i("svg", Ve, He)) : x("", !0)
      ], 34),
      P(s("ul", {
        style: p({
          width: e(D) + "px",
          left: e(m) + "px"
        }),
        ref_key: "carouselUl",
        ref: h
      }, [
        (a(!0), i(M, null, z(e(n), (S, F) => (a(), i("li", {
          style: p({
            width: e(d) + "px",
            height: e(c) + "px"
          })
        }, [
          s("img", {
            src: S.url,
            style: p({
              width: e(d) + "px",
              height: e(c) + "px"
            })
          }, null, 12, Ee)
        ], 4))), 256))
      ], 4), [
        [J, e(f) === !0]
      ]),
      P(s("ul", {
        style: p({
          height: e(H) + "px",
          top: e(y) + "px"
        }),
        class: "ulVertical",
        ref_key: "ulVertical",
        ref: r
      }, [
        (a(!0), i(M, null, z(e(n), (S, F) => (a(), i("li", {
          style: p({
            width: e(d) + "px",
            height: e(c) + "px"
          })
        }, [
          s("img", {
            src: S.url,
            style: p({
              width: e(d) + "px",
              height: e(c) + "px"
            })
          }, null, 12, Pe)
        ], 4))), 256))
      ], 4), [
        [J, e(f) !== !0]
      ]),
      s("label", {
        class: B(e(f) === !0 ? "label_right" : "label_down"),
        onClick: N,
        onMousemove: b,
        onMouseout: E
      }, [
        e(f) === !0 ? (a(), i("svg", Je, Ae)) : x("", !0),
        e(f) === !1 ? (a(), i("svg", Fe, Ue)) : x("", !0)
      ], 34),
      e(f) === !0 ? P((a(), i("div", {
        key: 0,
        class: "pointerBtnHorizontal",
        onMousemove: b,
        onMouseout: E,
        style: p({
          width: e(T) + "px"
        })
      }, [
        (a(!0), i(M, null, z(e(n), (S) => (a(), i("p", {
          key: S.id,
          class: B(S.id === e(o) ? "p_class" : ""),
          onClick: (F) => w(S.id)
        }, null, 10, Ke))), 128))
      ], 36)), [
        [J, e(_)]
      ]) : x("", !0),
      e(f) === !1 ? P((a(), i("div", {
        key: 1,
        class: "pointerBtnVertical",
        onMousemove: b,
        onMouseout: E,
        style: p({
          height: e(T) + "px"
        })
      }, [
        (a(!0), i(M, null, z(e(n), (S) => (a(), i("p", {
          key: S.id,
          class: B(S.id === e(o) ? "p_class" : ""),
          onClick: (F) => w(S.id)
        }, null, 10, Re))), 128))
      ], 36)), [
        [J, e(_)]
      ]) : x("", !0)
    ], 4));
  }
});
const Qe = /* @__PURE__ */ V(Ge, [["__scopeId", "data-v-3f399843"]]), X = (l) => (U("data-v-da9d8c22"), l = l(), K(), l), Xe = { class: "out" }, Ye = /* @__PURE__ */ X(() => /* @__PURE__ */ s("svg", {
  t: "1675488886083",
  class: "icon",
  viewBox: "0 0 1024 1024",
  version: "1.1",
  xmlns: "http://www.w3.org/2000/svg",
  "p-id": "1875",
  width: "30",
  height: "30"
}, [
  /* @__PURE__ */ s("path", {
    d: "M731.6992 909.131776c8.660992 7.86432 8.660992 21.25824 0 29.12256-7.878656 8.6528-21.245952 8.6528-29.126656 0L290.922496 526.600192c-7.878656-7.86432-7.878656-21.260288 0-29.124608L702.57664 85.819392c7.880704-7.86432 21.248-7.86432 29.126656 0 8.660992 7.86432 8.660992 21.260288 0 29.124608L334.999552 512.444416 731.6992 909.131776z",
    "p-id": "1876"
  })
], -1)), Ze = [
  Ye
], et = { class: "inner" }, tt = ["src"], lt = /* @__PURE__ */ X(() => /* @__PURE__ */ s("svg", {
  t: "1675488923875",
  class: "icon",
  viewBox: "0 0 1024 1024",
  version: "1.1",
  xmlns: "http://www.w3.org/2000/svg",
  "p-id": "2046",
  width: "30",
  height: "30"
}, [
  /* @__PURE__ */ s("path", {
    d: "M688.211968 512.444416 291.510272 114.944c-8.660992-7.86432-8.660992-21.260288 0-29.124608 7.878656-7.86432 21.245952-7.86432 29.126656 0l411.654144 411.656192c7.878656 7.86432 7.878656 21.260288 0 29.124608L320.638976 938.254336c-7.880704 8.6528-21.248 8.6528-29.126656 0-8.660992-7.86432-8.660992-21.25824 0-29.12256L688.211968 512.444416z",
    "p-id": "2047"
  })
], -1)), nt = [
  lt
], ot = ["onClick"], at = {
  name: "kCarouselcard"
}, st = /* @__PURE__ */ O({
  ...at,
  props: {
    carouselW: {
      type: Number,
      default: 400
    },
    carouselH: {
      type: Number,
      default: 200
    },
    autoplay: {
      type: Number,
      default: 2e3
    },
    imgData: {
      type: Object,
      default: []
    },
    showPointer: {
      type: Boolean,
      default: "true"
    }
  },
  setup(l) {
    const t = l, d = I(t, "carouselW"), c = I(t, "carouselH"), v = I(t, "autoplay"), n = g(JSON.parse(JSON.stringify(t.imgData))), _ = I(t, "showPointer");
    let f = g(null), u = [];
    if (n.value.length >= 5) {
      u[0] = "first", u[1] = "second", u[2] = "right";
      for (let w = 3; w < n.value.length - 2; w++)
        u[w] = "left";
      u[n.value.length - 1] = "last";
    } else
      n.value.length == 3 && (u = ["first", "second", "last"]), n.value.length == 4 && (u = ["first", "second", "right", "last"]);
    te(() => {
      $();
    });
    let h = !0, r = g(0), D = g(0);
    D.value = (10 + 10) * n.value.length;
    const m = function() {
      h && (h = !1, u.unshift(u.pop()), $(), r.value === n.value.length - 1 ? r.value = 0 : r.value++, clearTimeout(o), setTimeout(function() {
        h = !0;
      }, 700));
    }, H = function() {
      h && (h = !1, u.push(u.shift()), $(), r.value === 0 ? r.value = n.value.length - 1 : r.value--, clearTimeout(o), setTimeout(function() {
        h = !0;
      }, 700));
    }, y = function(w) {
      if (r.value > w) {
        let C = r.value - w;
        for (; C--; )
          u.push(u.shift()), $(), r.value === 0 ? r.value = n.value.length - 1 : r.value--, console.log("x");
      } else if (r.value < w) {
        let C = w - r.value;
        for (; C--; )
          u.unshift(u.pop()), $(), r.value === n.value.length - 1 ? r.value = 0 : r.value++;
      }
    };
    let o = setInterval(() => {
      u.unshift(u.pop()), $(), r.value === n.value.length - 1 ? r.value = 0 : r.value++;
    }, v.value);
    Q(() => {
      clearTimeout(o);
    });
    const T = function() {
      clearTimeout(o);
    }, N = function() {
      o = setInterval(() => {
        u.unshift(u.pop()), $(), r.value === n.value.length - 1 ? r.value = 0 : r.value++;
      }, v.value);
    };
    function $() {
      for (let w = 0; w < f.value.length; w++)
        f.value[w].id = u[w];
    }
    return (w, C) => (a(), i("div", Xe, [
      s("label", {
        class: "leftBtn",
        onClick: H,
        onMousemove: T,
        onMouseout: N
      }, Ze, 32),
      s("div", et, [
        (a(!0), i(M, null, z(n.value, (b, E) => (a(), i("div", {
          class: "img",
          ref_for: !0,
          ref_key: "imgdom",
          ref: f
        }, [
          s("img", {
            src: b.url,
            style: p({
              width: e(d) + "px",
              height: e(c) + "px"
            })
          }, null, 12, tt)
        ], 512))), 256))
      ]),
      s("label", {
        class: "rightBtn",
        onClick: m,
        onMousemove: T,
        onMouseout: N
      }, nt, 32),
      P(s("div", {
        class: "pointerBtn",
        onMousemove: T,
        onMouseout: N,
        style: p({
          width: e(D) + "px"
        })
      }, [
        (a(!0), i(M, null, z(n.value, (b) => (a(), i("p", {
          key: b.id,
          class: B(b.id === e(r) ? "p_class" : ""),
          onClick: (E) => y(b.id)
        }, null, 10, ot))), 128))
      ], 36), [
        [J, e(_)]
      ])
    ]));
  }
});
const ut = /* @__PURE__ */ V(st, [["__scopeId", "data-v-da9d8c22"]]), it = ["cols", "rows", "disabled", "readonly", "placeholder", "value", "maxlength"], ct = { class: "max-length-inline" }, rt = {
  name: "kTextarea"
}, dt = /* @__PURE__ */ O({
  ...rt,
  props: {
    modelValue: String,
    disabled: Boolean,
    readonly: Boolean,
    placeholder: String,
    maxlength: Number,
    resize: {
      type: Boolean,
      default: !0
    },
    rows: {
      type: Number,
      default: 5
    },
    cols: {
      type: Number,
      default: 60
    }
  },
  emits: ["update:modelValue", "focus", "blur"],
  setup(l, { emit: t }) {
    const d = l, c = g(0), v = (u) => {
      c.value = u.target.value.length, t("update:modelValue", u.target.value);
    }, n = (u) => {
      t("focus", u);
    }, _ = (u) => {
      t("blur", u);
    }, f = k(() => ({
      "k-textarea": !0,
      "k-textarea-disabled": d.disabled
    }));
    return (u, h) => (a(), i("div", {
      class: B(e(f))
    }, [
      s("textarea", {
        name: "",
        id: "",
        cols: l.cols,
        rows: l.rows,
        disabled: l.disabled,
        readonly: l.readonly,
        placeholder: l.placeholder,
        value: l.modelValue,
        maxlength: l.maxlength,
        onInput: v,
        onFocus: n,
        onBlur: _
      }, `\r
    `, 40, it),
      s("div", ct, L(c.value) + "/" + L(l.maxlength), 1)
    ], 2));
  }
});
const vt = /* @__PURE__ */ V(dt, [["__scopeId", "data-v-2e243b25"]]), ft = [ae, fe, Ie, ze, Qe, vt, ut], _t = {
  install(l) {
    ft.forEach((t) => {
      l.component(t.name, t);
    });
  }
};
export {
  _t as default,
  ae as kButton,
  Qe as kCarousel,
  ut as kCarouselcard,
  fe as kDialog,
  Ie as kInput,
  ze as kTable,
  vt as kTextarea
};
