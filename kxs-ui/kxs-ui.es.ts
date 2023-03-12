import { defineComponent as V, toRef as N, computed as $, openBlock as a, createElementBlock as i, normalizeClass as m, unref as l, normalizeStyle as b, createElementVNode as s, renderSlot as fe, ref as g, toDisplayString as C, useCssVars as pe, Fragment as S, renderList as B, createTextVNode as J, withDirectives as H, createVNode as ie, Transition as ue, withCtx as R, createCommentVNode as k, reactive as he, onMounted as ce, resolveComponent as re, createBlock as W, vShow as A, pushScopeId as P, popScopeId as K, onBeforeUnmount as de, useSlots as _e } from "vue";
const ge = ["disabled"], ye = {
  name: "kButton"
}, me = /* @__PURE__ */ V({
  ...ye,
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
  setup(e) {
    const t = e, o = N(t, "round"), u = $(() => t.block ? { display: "block", width: "100%" } : ""), f = $(() => t.postIcon ? `${t.postIcon}` : ""), n = $(() => t.icon ? `${t.icon}` : ""), p = $(() => [
      "btn",
      `${t.type}`,
      t.plain ? "isPlain" : "",
      o.value ? "isRound" : "",
      t.disabled ? "isDisabled" : "",
      t.loading ? "isLoading" : "",
      `${t.size}`
    ]);
    return (h, c) => (a(), i("button", {
      disabled: e.disabled,
      class: m(l(p)),
      style: b([l(u)])
    }, [
      s("div", {
        class: m(l(n))
      }, null, 2),
      fe(h.$slots, "default", {}, void 0, !0),
      s("i", {
        class: m(l(f))
      }, null, 2)
    ], 14, ge));
  }
});
const O = (e, t) => {
  const o = e.__vccOpts || e;
  for (const [u, f] of t)
    o[u] = f;
  return o;
}, j = /* @__PURE__ */ O(me, [["__scopeId", "data-v-5dc04319"]]);
j.install = (e) => {
  e.component(j.name, j);
};
const be = ["cols", "rows", "disabled", "readonly", "placeholder", "maxlength"], ke = { class: "max-length-inline" }, xe = {
  name: "kTextarea"
}, we = /* @__PURE__ */ V({
  ...xe,
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
  setup(e, { emit: t }) {
    const o = e, u = g(0), f = (c) => {
      u.value = c.target.value.length, t("update:modelValue", c.target.value);
    }, n = (c) => {
      t("focus", c);
    }, p = (c) => {
      t("blur", c);
    }, h = $(() => ({
      "k-textarea": !0,
      "k-textarea-disabled": o.disabled
    }));
    return (c, v) => (a(), i("div", {
      class: m(l(h))
    }, [
      s("textarea", {
        name: "",
        id: "",
        cols: e.cols,
        rows: e.rows,
        disabled: e.disabled,
        readonly: e.readonly,
        placeholder: e.placeholder,
        maxlength: e.maxlength,
        onInput: f,
        onFocus: n,
        onBlur: p
      }, `\r
    `, 40, be),
      s("div", ke, C(u.value) + "/" + C(e.maxlength), 1)
    ], 2));
  }
});
const U = /* @__PURE__ */ O(we, [["__scopeId", "data-v-7c2ae4d1"]]);
U.install = (e) => {
  e.component(U.name, U);
};
const $e = { class: "k-radio" }, Ce = ["onClick"], Se = {
  name: "kRadio"
}, Be = /* @__PURE__ */ V({
  ...Se,
  props: {
    options: {
      type: Array,
      default: () => []
    },
    column: {
      type: Boolean,
      default: !1
    },
    customColor: {
      type: String,
      default: "#8b8c8d"
    },
    filedLabel: {
      type: String,
      default: "label"
    },
    filedValue: {
      type: String,
      default: "value"
    }
  },
  emits: ["change"],
  setup(e, { emit: t }) {
    const o = e;
    pe((p) => ({
      b56cd220: n.value,
      "5014fb04": o.customColor
    }));
    const u = g(0), f = (p, h) => {
      p.disabled || (u.value = h, t("change", p));
    }, n = g("inline-flex");
    return o.column ? n.value = "flex" : n.value = "inline-flex", (p, h) => (a(), i("div", $e, [
      (a(!0), i(S, null, B(e.options, (c, v) => (a(), i("div", {
        class: m(["k-item-radio", { "k-item-disabled-radio": c.disabled }]),
        key: v,
        onClick: (r) => f(c, v)
      }, [
        s("span", {
          class: m({ active: u.value == v })
        }, null, 2),
        J(" " + C(c[e.filedLabel]), 1)
      ], 10, Ce))), 128))
    ]));
  }
});
const q = /* @__PURE__ */ O(Be, [["__scopeId", "data-v-fb7f101a"]]);
q.install = (e) => {
  e.component(q.name, q);
};
const Te = { class: "k-select" }, Le = ["disabled"], Ie = ["value", "disabled", "placeholder"], Me = {
  key: 0,
  class: "k-position-box"
}, ze = ["onClick"], Ne = {
  name: "kSelect"
}, Ve = /* @__PURE__ */ V({
  ...Ne,
  props: {
    options: {
      type: Array,
      default: () => []
    },
    disabled: Boolean,
    placeholder: String,
    modelValue: String,
    filedLabel: {
      type: String,
      default: "label"
    },
    filedValue: {
      type: String,
      default: "value"
    }
  },
  emits: ["change", "update:modelValue"],
  setup(e, { emit: t }) {
    const o = e, u = g(-1), f = g(!1), n = g(o.modelValue), p = g("rotate(0deg)");
    o.options.forEach((v, r) => {
      v[o.filedValue] == o.modelValue && (n.value = v[o.filedLabel]);
    });
    const h = {
      beforeMount(v) {
        let r = (y) => {
          o.disabled || (v.contains(y.target) && y.target.className.indexOf("item-li") == -1 ? (f.value = !f.value, f.value ? p.value = "rotate(180deg)" : p.value = "rotate(0deg)") : y.target.className.indexOf("disabled-input-li") && (f.value = !1, f.value ? p.value = "rotate(180deg)" : p.value = "rotate(0deg)"));
        };
        document.addEventListener("click", r);
      }
    }, c = (v, r) => {
      v.disabled || (u.value = r, n.value = v[o.filedLabel], f.value = !1, t("change", v), t("update:modelValue", v[o.filedLabel]));
    };
    return (v, r) => H((a(), i("div", Te, [
      s("div", {
        class: m(["div-input-div", { "disabled-input-li": e.disabled }]),
        disabled: e.disabled
      }, [
        s("input", {
          type: "text",
          readonly: "",
          value: n.value,
          disabled: e.disabled,
          class: m({ "disabled-input-li": e.disabled }),
          placeholder: e.placeholder
        }, null, 10, Ie),
        s("i", {
          class: m(["k-icon-xia", "input-icon"]),
          style: b([{ transform: p.value }])
        }, null, 4)
      ], 10, Le),
      ie(ue, { name: "slide-fade" }, {
        default: R(() => [
          f.value ? (a(), i("div", Me, [
            (a(!0), i(S, null, B(e.options, (y, _) => (a(), i("li", {
              key: _,
              onClick: (E) => c(y, _),
              class: m([{ "disabled-input-li": y.disabled, "item-active-li": u.value == _ }, "item-li"])
            }, C(y[e.filedLabel]), 11, ze))), 128))
          ])) : k("", !0)
        ]),
        _: 1
      })
    ])), [
      [h]
    ]);
  }
});
const G = /* @__PURE__ */ O(Ve, [["__scopeId", "data-v-454df9a4"]]);
G.install = (e) => {
  e.component(G.name, G);
};
const Oe = (e) => (P("data-v-ae905315"), e = e(), K(), e), De = ["multiple"], Ee = /* @__PURE__ */ Oe(() => /* @__PURE__ */ s("i", { class: "k-icon-upload_clound_line" }, null, -1)), He = { key: 0 }, Fe = {
  key: 1,
  class: "fileList-box"
}, Ae = ["onClick"], Je = {
  name: "kOptfile"
}, Re = /* @__PURE__ */ V({
  ...Je,
  props: {
    multiple: Boolean,
    label: {
      type: String,
      default: "选择文件"
    },
    btnType: {
      type: String,
      default: "default"
    },
    targetType: {
      type: String,
      default: "button"
    },
    showFileList: Boolean,
    drop: Boolean
  },
  emits: ["change", "update:fileList"],
  setup(e, { emit: t }) {
    const o = e, u = g(null), f = g(null), n = g(!1), p = g(o.label), h = he([]), c = (y) => {
      h.splice(y, 1), t("update:fileList", h);
    }, v = () => {
      var y;
      (y = u.value) == null || y.click();
    }, r = (y) => {
      h.unshift(...y.target.files), t("change", h);
    };
    return ce(() => {
      if (o.drop && o.targetType == "box") {
        let y = f.value;
        y == null || y.addEventListener("drop", (_) => {
          _.preventDefault(), h.unshift(..._.dataTransfer.files), console.log(_.dataTransfer.files), t("change", h), n.value = !1;
        }), y.addEventListener("dragleave", (_) => {
          _.preventDefault(), n.value = !1, p.value = "将文件拖拽到此处或点击选择文件";
        }), y.addEventListener("dragenter", (_) => {
          _.preventDefault(), n.value = !0, p.value = "松开鼠标完成";
        }), y.addEventListener("dragover", (_) => {
          _.preventDefault(), n.value = !0, p.value = "松开鼠标完成";
        });
      }
    }), (y, _) => {
      const E = re("k-button");
      return a(), i("div", null, [
        s("input", {
          type: "file",
          class: "file-input",
          ref_key: "inpRef",
          ref: u,
          onChange: r,
          multiple: e.multiple
        }, null, 40, De),
        e.targetType == "button" ? (a(), W(E, {
          key: 0,
          onClick: v,
          type: e.btnType
        }, {
          default: R(() => [
            J(C(e.label), 1)
          ]),
          _: 1
        }, 8, ["type"])) : k("", !0),
        H(s("div", {
          class: m(["area-box", { "k-opfile-area-active": n.value }]),
          onClick: v,
          ref_key: "areaRef",
          ref: f,
          id: "title"
        }, [
          Ee,
          e.label != "" ? (a(), i("p", He, C(p.value), 1)) : k("", !0)
        ], 2), [
          [A, e.targetType == "box"]
        ]),
        e.showFileList ? (a(), i("div", Fe, [
          (a(!0), i(S, null, B(h, (x, d) => (a(), i("li", { key: d }, [
            s("span", null, C(x.name), 1),
            s("span", {
              class: "delete-span",
              onClick: (L) => c(d)
            }, "删除", 8, Ae)
          ]))), 128))
        ])) : k("", !0)
      ]);
    };
  }
});
const Q = /* @__PURE__ */ O(Re, [["__scopeId", "data-v-ae905315"]]);
Q.install = (e) => {
  e.component(Q.name, Q);
};
const ne = (e) => (P("data-v-4c2c7cd1"), e = e(), K(), e), Pe = { class: "k-input" }, Ke = {
  key: 0,
  class: "icon-right"
}, We = ["type", "placeholder", "name", "disabled"], je = {
  key: 0,
  t: "1676271826305",
  class: "icon",
  viewBox: "0 0 1024 1024",
  version: "1.1",
  xmlns: "http://www.w3.org/2000/svg",
  "p-id": "3704",
  width: "16",
  height: "16"
}, Ue = /* @__PURE__ */ ne(() => /* @__PURE__ */ s("path", {
  d: "M512 637.207273c-171.752727 0-343.272727-52.363636-465.454545-156.858182a34.909091 34.909091 0 1 1 46.545454-53.061818c215.505455 186.181818 623.243636 186.181818 837.818182 0a34.909091 34.909091 0 0 1 46.545454 53.061818c-122.181818 104.494545-293.701818 156.858182-465.454545 156.858182z",
  fill: "#666666",
  "p-id": "3705"
}, null, -1)), qe = /* @__PURE__ */ ne(() => /* @__PURE__ */ s("path", {
  d: "M384.465455 791.272727a28.625455 28.625455 0 0 1-6.283637 0A34.676364 34.676364 0 0 1 349.090909 749.149091l23.272727-137.309091a34.909091 34.909091 0 1 1 69.818182 12.101818l-23.272727 137.309091A34.909091 34.909091 0 0 1 384.465455 791.272727zM907.636364 721.454545a34.443636 34.443636 0 0 1-24.669091-10.472727l-114.734546-116.363636a34.909091 34.909091 0 1 1 49.570909-48.872727l114.734546 116.363636a34.909091 34.909091 0 0 1 0 49.338182A36.305455 36.305455 0 0 1 907.636364 721.454545zM116.363636 721.454545a36.305455 36.305455 0 0 1-23.272727-10.007272 34.909091 34.909091 0 0 1 0-49.338182l114.734546-116.363636a34.909091 34.909091 0 1 1 48.174545 48.872727l-114.734545 116.363636A34.443636 34.443636 0 0 1 116.363636 721.454545zM641.163636 791.272727a34.909091 34.909091 0 0 1-34.210909-28.858182l-23.272727-137.30909a34.909091 34.909091 0 1 1 67.956364-13.265455l23.272727 137.309091a34.676364 34.676364 0 0 1-28.16 40.494545 28.625455 28.625455 0 0 1-5.585455 1.629091z",
  fill: "#666666",
  "p-id": "3706"
}, null, -1)), Ge = [
  Ue,
  qe
], Qe = {
  key: 1,
  t: "1676272038724",
  class: "icon",
  viewBox: "0 0 1024 1024",
  version: "1.1",
  xmlns: "http://www.w3.org/2000/svg",
  "p-id": "3909",
  width: "16",
  height: "16"
}, Xe = /* @__PURE__ */ ne(() => /* @__PURE__ */ s("path", {
  d: "M512 279.272727c171.985455 0 328.610909 162.909091 388.421818 232.727273-59.810909 69.818182-216.436364 232.727273-388.421818 232.727273S183.389091 581.818182 123.578182 512c59.810909-69.818182 216.436364-232.727273 388.421818-232.727273m0-69.818182C298.589091 209.454545 117.76 407.970909 56.785455 483.374545a44.916364 44.916364 0 0 0 0 57.25091C117.76 616.029091 298.589091 814.545455 512 814.545455s394.24-198.516364 455.214545-273.92a44.916364 44.916364 0 0 0 0-57.25091C906.24 407.970909 725.410909 209.454545 512 209.454545z",
  fill: "#666666",
  "p-id": "3910"
}, null, -1)), Ye = /* @__PURE__ */ ne(() => /* @__PURE__ */ s("path", {
  d: "M512 442.181818a69.818182 69.818182 0 1 1-69.818182 69.818182 69.818182 69.818182 0 0 1 69.818182-69.818182m0-69.818182a139.636364 139.636364 0 1 0 139.636364 139.636364 139.636364 139.636364 0 0 0-139.636364-139.636364z",
  fill: "#666666",
  "p-id": "3911"
}, null, -1)), Ze = [
  Xe,
  Ye
], et = { key: 2 }, tt = {
  name: "kInput"
}, lt = /* @__PURE__ */ V({
  ...tt,
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
  setup(e, { emit: t }) {
    const o = g(null);
    let u = g(!0);
    const f = () => {
      o.value.type = o.value.type === "password" ? "text" : "password", u.value = !u.value;
    }, n = (p) => {
      t("update:modelValue", p.target.value);
    };
    return (p, h) => (a(), i("div", Pe, [
      e.rightIcon ? (a(), i("span", Ke, [
        s("i", {
          class: m(e.rightIcon)
        }, null, 2)
      ])) : k("", !0),
      s("input", {
        class: m(["k-input__inner", { "is-disabled": e.disabled }]),
        type: e.type,
        placeholder: e.placeholder,
        name: e.name,
        disabled: e.disabled,
        ref_key: "inputBox",
        ref: o,
        onInput: n
      }, null, 42, We),
      e.type == "password" ? (a(), i("span", {
        key: 1,
        class: "icon-left",
        onClick: f
      }, [
        l(u) ? (a(), i("svg", je, Ge)) : k("", !0),
        l(u) ? k("", !0) : (a(), i("svg", Qe, Ze))
      ])) : k("", !0),
      e.leftIcon ? (a(), i("span", et, [
        s("i", {
          class: m(e.leftIcon)
        }, null, 2)
      ])) : k("", !0)
    ]));
  }
});
const X = /* @__PURE__ */ O(lt, [["__scopeId", "data-v-4c2c7cd1"]]);
X.install = (e) => {
  e.component(X.name, X);
};
const nt = { class: "dialog-inner" }, at = { class: "base" }, ot = { class: "content" }, st = {
  key: 0,
  class: "icon-box"
}, it = {
  key: 0,
  class: "footerBox"
}, ut = {
  name: "kDialog"
}, ct = /* @__PURE__ */ V({
  ...ut,
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
    },
    isShow: {
      type: Array,
      default: []
    },
    index: {
      type: Number,
      default: -1
    }
  },
  setup(e) {
    const t = e;
    let o = g(JSON.parse(JSON.stringify(t.type))), u = N(t, "isShow");
    const f = {
      confirm: "#2ECC71",
      warning: "#F39C12",
      error: "#E74C3C",
      info: "#3498DB"
    }, n = $(() => {
      if (t.themeColor === "")
        switch (o.value) {
          case "confirm":
            return f.confirm;
          case "warning":
            return f.warning;
          case "error":
            return f.error;
          case "info":
            return f.info;
        }
      return t.themeColor;
    }), p = $(() => ({ background: n.value })), h = $(() => ({ color: t.titleColor })), c = $(() => ({ color: t.contentColor })), v = $(() => {
      switch (o.value) {
        case "confirm":
          return "k-icon-check_circle_line";
        case "warning":
          return "k-icon-zhuyi";
        case "error":
          return "k-icon-guanbi";
        case "info":
          return "";
      }
    }), r = $(() => t.closable === !0), y = $(() => t.footerBtn === "both" || t.footerBtn === "confirm"), _ = $(() => t.footerBtn === "both" || t.footerBtn === "cancel"), E = $(() => ({ width: t.width, height: t.height })), x = $(() => t.location === "top" ? { top: "25%" } : { top: "50%" });
    let d = g(""), L = g(!1), F = () => {
      t.confirmLoading ? (L.value = !0, d.value = "k-icon-jiazai") : u.value[t.index] = !1, t.confirmClick();
    }, I = () => {
      t.cancelClick(), u.value[t.index] = !1;
    }, w = () => {
      u.value[t.index] = !1;
    };
    return (T, M) => {
      const D = re("k-button");
      return H((a(), i("div", {
        class: "dialog",
        style: b([Object.assign(l(E), l(x))])
      }, [
        s("div", nt, [
          s("div", {
            class: "title",
            style: b([l(p)])
          }, [
            s("span", {
              style: b([l(h)])
            }, C(t.titleText), 5),
            l(r) ? (a(), W(D, {
              key: 0,
              class: "closeBtn",
              type: "default",
              onclick: l(w),
              icon: "k-icon-xianxingguanbi",
              style: b([l(p), l(h)])
            }, null, 8, ["onclick", "style"])) : k("", !0)
          ], 4),
          s("div", at, [
            s("div", ot, [
              l(o) !== "info" ? (a(), i("div", st, [
                s("i", {
                  class: m(l(v)),
                  style: b({ color: l(n) })
                }, null, 6)
              ])) : k("", !0),
              s("div", {
                class: "info",
                style: b([l(c)])
              }, C(t.contentText), 5)
            ]),
            t.footerBtn !== "null" ? (a(), i("div", it, [
              l(y) ? (a(), W(D, {
                key: 0,
                class: "footerBtn confirmBtn",
                style: b([l(p)]),
                onclick: l(F),
                icon: l(d),
                loading: l(L)
              }, {
                default: R(() => [
                  J(C(t.confirmBtnText), 1)
                ]),
                _: 1
              }, 8, ["style", "onclick", "icon", "loading"])) : k("", !0),
              l(_) ? (a(), W(D, {
                key: 1,
                class: "footerBtn cancelBtn",
                onclick: l(I)
              }, {
                default: R(() => [
                  J(C(t.cancelBtnText), 1)
                ]),
                _: 1
              }, 8, ["onclick"])) : k("", !0)
            ])) : k("", !0)
          ])
        ])
      ], 4)), [
        [A, l(u)[t.index]]
      ]);
    };
  }
});
const Y = /* @__PURE__ */ O(ct, [["__scopeId", "data-v-7c68922e"]]);
Y.install = (e) => {
  e.component(Y.name, Y);
};
const ae = (e) => (P("data-v-a04d96bb"), e = e(), K(), e), rt = {
  key: 0,
  t: "1675488886083",
  class: "icon",
  viewBox: "0 0 1024 1024",
  version: "1.1",
  xmlns: "http://www.w3.org/2000/svg",
  "p-id": "1875",
  width: "30",
  height: "30"
}, dt = /* @__PURE__ */ ae(() => /* @__PURE__ */ s("path", {
  d: "M731.6992 909.131776c8.660992 7.86432 8.660992 21.25824 0 29.12256-7.878656 8.6528-21.245952 8.6528-29.126656 0L290.922496 526.600192c-7.878656-7.86432-7.878656-21.260288 0-29.124608L702.57664 85.819392c7.880704-7.86432 21.248-7.86432 29.126656 0 8.660992 7.86432 8.660992 21.260288 0 29.124608L334.999552 512.444416 731.6992 909.131776z",
  "p-id": "1876"
}, null, -1)), vt = [
  dt
], ft = {
  key: 1,
  t: "1675488740890",
  class: "icon",
  viewBox: "0 0 1024 1024",
  version: "1.1",
  xmlns: "http://www.w3.org/2000/svg",
  "p-id": "1608",
  width: "30",
  height: "30"
}, pt = /* @__PURE__ */ ae(() => /* @__PURE__ */ s("path", {
  d: "M908.406784 732.42624c7.86432 8.66304 21.25824 8.66304 29.12256 0 8.650752-7.876608 8.650752-21.245952 0-29.124608L525.873152 291.647488c-7.86432-7.878656-21.260288-7.878656-29.124608 0L85.0944 703.301632c-7.86432 7.878656-7.86432 21.248 0 29.124608 7.86432 8.66304 21.260288 8.66304 29.124608 0l397.500416-396.699648L908.406784 732.42624z",
  "p-id": "1609"
}, null, -1)), ht = [
  pt
], _t = ["src"], gt = ["src"], yt = {
  key: 0,
  t: "1675488923875",
  class: "icon",
  viewBox: "0 0 1024 1024",
  version: "1.1",
  xmlns: "http://www.w3.org/2000/svg",
  "p-id": "2046",
  width: "30",
  height: "30"
}, mt = /* @__PURE__ */ ae(() => /* @__PURE__ */ s("path", {
  d: "M688.211968 512.444416 291.510272 114.944c-8.660992-7.86432-8.660992-21.260288 0-29.124608 7.878656-7.86432 21.245952-7.86432 29.126656 0l411.654144 411.656192c7.878656 7.86432 7.878656 21.260288 0 29.124608L320.638976 938.254336c-7.880704 8.6528-21.248 8.6528-29.126656 0-8.660992-7.86432-8.660992-21.25824 0-29.12256L688.211968 512.444416z",
  "p-id": "2047"
}, null, -1)), bt = [
  mt
], kt = {
  key: 1,
  t: "1675488945436",
  class: "icon",
  viewBox: "0 0 1024 1024",
  version: "1.1",
  xmlns: "http://www.w3.org/2000/svg",
  "p-id": "2217",
  width: "30",
  height: "30"
}, xt = /* @__PURE__ */ ae(() => /* @__PURE__ */ s("path", {
  d: "M908.406784 292.237312c7.86432-8.66304 21.25824-8.66304 29.12256 0 8.650752 7.876608 8.650752 21.245952 0 29.124608L525.873152 733.016064c-7.86432 7.878656-21.260288 7.878656-29.124608 0L85.0944 321.36192c-7.86432-7.878656-7.86432-21.248 0-29.124608 7.86432-8.66304 21.260288-8.66304 29.124608 0l397.500416 396.699648L908.406784 292.237312z",
  "p-id": "2218"
}, null, -1)), wt = [
  xt
], $t = ["onClick"], Ct = ["onClick"], St = {
  name: "kCarousel"
}, Bt = /* @__PURE__ */ V({
  ...St,
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
  setup(e) {
    const t = e, o = N(t, "carouselW"), u = N(t, "carouselH"), f = N(t, "autoplay");
    let n = g(JSON.parse(JSON.stringify(t.imgData)));
    n.value.push(JSON.parse(JSON.stringify(n.value[0]))), n.value[n.value.length - 1].id = n.value.length - 1;
    const p = N(t, "showPointer"), h = N(t, "isHorizontal");
    let c = !0, v = g(null), r = g(null), y = g(n.value.length * o.value), _ = g(1), E = g(n.value.length * u.value), x = g(1), d = g(0), L = g(0);
    L.value = (10 + 10) * (n.value.length - 1);
    const F = function() {
      c && (c = !1, v.value.style.transition = "left 1s", r.value.style.transition = "top 1s", d.value++, _.value = -d.value * o.value, x.value = -d.value * u.value, d.value == n.value.length - 1 && (_.value = -d.value * o.value, x.value = -d.value * u.value, d.value = 0, setTimeout(function() {
        v.value.style.transition = "none", r.value.style.transition = "none", _.value = 0, x.value = 0;
      }, 1e3)), clearTimeout(T), setTimeout(function() {
        c = !0;
      }, 1e3));
    }, I = function() {
      c && (c = !1, d.value > 0 ? (v.value.style.transition = "left 1s", r.value.style.transition = "top 1s", d.value--, _.value = -d.value * o.value, x.value = -d.value * u.value) : (v.value.style.transition = "none", r.value.style.transition = "none", _.value = -(n.value.length - 1) * o.value, x.value = -(n.value.length - 1) * u.value, setTimeout(function() {
        v.value.style.transition = "left 1s", r.value.style.transition = "top 1s", d.value = n.value.length - 2, _.value = -(n.value.length - 2) * o.value, x.value = -(n.value.length - 2) * u.value;
      }, 0)), clearTimeout(T), setTimeout(function() {
        c = !0;
      }, 0));
    }, w = function(se) {
      d.value = se, _.value = -d.value * o.value, x.value = -d.value * u.value, clearTimeout(T);
    };
    let T = setInterval(() => {
      v.value.style.transition = "left 1s", r.value.style.transition = "top 1s", d.value++, _.value = -d.value * o.value, x.value = -d.value * u.value, d.value == n.value.length - 1 && (_.value = -d.value * o.value, x.value = -d.value * u.value, d.value = 0, setTimeout(function() {
        v.value.style.transition = "none", r.value.style.transition = "none", _.value = 0, x.value = 0;
      }, 1e3));
    }, f.value);
    de(() => {
      clearTimeout(T);
    });
    const M = function() {
      clearTimeout(T);
    }, D = function() {
      T = setInterval(() => {
        v.value.style.transition = "left 1s", r.value.style.transition = "top 1s", d.value++, _.value = -d.value * o.value, x.value = -d.value * u.value, d.value == 5 && (_.value = -d.value * o.value, x.value = -d.value * u.value, d.value = 0, setTimeout(function() {
          v.value.style.transition = "none", r.value.style.transition = "none", _.value = 0, x.value = 0;
        }, 1e3));
      }, f.value);
    };
    return (se, qt) => (a(), i("div", {
      class: "carousel",
      style: b({
        width: l(o) + "px",
        height: l(u) + "px"
      })
    }, [
      s("label", {
        class: m(l(h) === !0 ? "label_left" : "label_up"),
        onClick: I,
        onMousemove: M,
        onMouseout: D
      }, [
        l(h) === !0 ? (a(), i("svg", rt, vt)) : k("", !0),
        l(h) === !1 ? (a(), i("svg", ft, ht)) : k("", !0)
      ], 34),
      H(s("ul", {
        style: b({
          width: l(y) + "px",
          left: l(_) + "px"
        }),
        ref_key: "carouselUl",
        ref: v
      }, [
        (a(!0), i(S, null, B(l(n), (z, oe) => (a(), i("li", {
          style: b({
            width: l(o) + "px",
            height: l(u) + "px"
          })
        }, [
          s("img", {
            src: z.url,
            style: b({
              width: l(o) + "px",
              height: l(u) + "px"
            })
          }, null, 12, _t)
        ], 4))), 256))
      ], 4), [
        [A, l(h) === !0]
      ]),
      H(s("ul", {
        style: b({
          height: l(E) + "px",
          top: l(x) + "px"
        }),
        class: "ulVertical",
        ref_key: "ulVertical",
        ref: r
      }, [
        (a(!0), i(S, null, B(l(n), (z, oe) => (a(), i("li", {
          style: b({
            width: l(o) + "px",
            height: l(u) + "px"
          })
        }, [
          s("img", {
            src: z.url,
            style: b({
              width: l(o) + "px",
              height: l(u) + "px"
            })
          }, null, 12, gt)
        ], 4))), 256))
      ], 4), [
        [A, l(h) !== !0]
      ]),
      s("label", {
        class: m(l(h) === !0 ? "label_right" : "label_down"),
        onClick: F,
        onMousemove: M,
        onMouseout: D
      }, [
        l(h) === !0 ? (a(), i("svg", yt, bt)) : k("", !0),
        l(h) === !1 ? (a(), i("svg", kt, wt)) : k("", !0)
      ], 34),
      l(h) === !0 ? H((a(), i("div", {
        key: 0,
        class: "pointerBtnHorizontal",
        onMousemove: M,
        onMouseout: D,
        style: b({
          width: l(L) + "px"
        })
      }, [
        (a(!0), i(S, null, B(l(n), (z) => (a(), i("p", {
          key: z.id,
          class: m(z.id === l(d) ? "p_class" : ""),
          onClick: (oe) => w(z.id)
        }, null, 10, $t))), 128))
      ], 36)), [
        [A, l(p)]
      ]) : k("", !0),
      l(h) === !1 ? H((a(), i("div", {
        key: 1,
        class: "pointerBtnVertical",
        onMousemove: M,
        onMouseout: D,
        style: b({
          height: l(L) + "px"
        })
      }, [
        (a(!0), i(S, null, B(l(n), (z) => (a(), i("p", {
          key: z.id,
          class: m(z.id === l(d) ? "p_class" : ""),
          onClick: (oe) => w(z.id)
        }, null, 10, Ct))), 128))
      ], 36)), [
        [A, l(p)]
      ]) : k("", !0)
    ], 4));
  }
});
const Z = /* @__PURE__ */ O(Bt, [["__scopeId", "data-v-a04d96bb"]]);
Z.install = (e) => {
  e.component(Z.name, Z);
};
const ve = (e) => (P("data-v-b1844987"), e = e(), K(), e), Tt = { class: "out" }, Lt = /* @__PURE__ */ ve(() => /* @__PURE__ */ s("svg", {
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
], -1)), It = [
  Lt
], Mt = { class: "inner" }, zt = ["src"], Nt = /* @__PURE__ */ ve(() => /* @__PURE__ */ s("svg", {
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
], -1)), Vt = [
  Nt
], Ot = ["onClick"], Dt = {
  name: "kCarouselcard"
}, Et = /* @__PURE__ */ V({
  ...Dt,
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
  setup(e) {
    const t = e, o = N(t, "carouselW"), u = N(t, "carouselH"), f = N(t, "autoplay"), n = g(JSON.parse(JSON.stringify(t.imgData))), p = N(t, "showPointer");
    let h = g(null), c = [];
    if (n.value.length >= 5) {
      c[0] = "first", c[1] = "second", c[2] = "right";
      for (let w = 3; w < n.value.length - 2; w++)
        c[w] = "left";
      c[n.value.length - 1] = "last";
    } else
      n.value.length == 3 && (c = ["first", "second", "last"]), n.value.length == 4 && (c = ["first", "second", "right", "last"]);
    ce(() => {
      I();
    });
    let v = !0, r = g(0), y = g(0);
    y.value = (10 + 10) * n.value.length;
    const _ = function() {
      v && (v = !1, c.unshift(c.pop()), I(), r.value === n.value.length - 1 ? r.value = 0 : r.value++, clearTimeout(d), setTimeout(function() {
        v = !0;
      }, 700));
    }, E = function() {
      v && (v = !1, c.push(c.shift()), I(), r.value === 0 ? r.value = n.value.length - 1 : r.value--, clearTimeout(d), setTimeout(function() {
        v = !0;
      }, 700));
    }, x = function(w) {
      if (r.value > w) {
        let T = r.value - w;
        for (; T--; )
          c.push(c.shift()), I(), r.value === 0 ? r.value = n.value.length - 1 : r.value--, console.log("x");
      } else if (r.value < w) {
        let T = w - r.value;
        for (; T--; )
          c.unshift(c.pop()), I(), r.value === n.value.length - 1 ? r.value = 0 : r.value++;
      }
    };
    let d = setInterval(() => {
      c.unshift(c.pop()), I(), r.value === n.value.length - 1 ? r.value = 0 : r.value++;
    }, f.value);
    de(() => {
      clearTimeout(d);
    });
    const L = function() {
      clearTimeout(d);
    }, F = function() {
      d = setInterval(() => {
        c.unshift(c.pop()), I(), r.value === n.value.length - 1 ? r.value = 0 : r.value++;
      }, f.value);
    };
    function I() {
      for (let w = 0; w < h.value.length; w++)
        h.value[w].id = c[w];
    }
    return (w, T) => (a(), i("div", Tt, [
      s("label", {
        class: "leftBtn",
        onClick: E,
        onMousemove: L,
        onMouseout: F
      }, It, 32),
      s("div", Mt, [
        (a(!0), i(S, null, B(n.value, (M, D) => (a(), i("div", {
          class: "img",
          ref_for: !0,
          ref_key: "imgdom",
          ref: h
        }, [
          s("img", {
            src: M.url,
            style: b({
              width: l(o) + "px",
              height: l(u) + "px"
            })
          }, null, 12, zt)
        ], 512))), 256))
      ]),
      s("label", {
        class: "rightBtn",
        onClick: _,
        onMousemove: L,
        onMouseout: F
      }, Vt, 32),
      H(s("div", {
        class: "pointerBtn",
        onMousemove: L,
        onMouseout: F,
        style: b({
          width: l(y) + "px"
        })
      }, [
        (a(!0), i(S, null, B(n.value, (M) => (a(), i("p", {
          key: M.id,
          class: m(M.id === l(r) ? "p_class" : ""),
          onClick: (D) => x(M.id)
        }, null, 10, Ot))), 128))
      ], 36), [
        [A, l(p)]
      ])
    ]));
  }
});
const ee = /* @__PURE__ */ O(Et, [["__scopeId", "data-v-b1844987"]]);
ee.install = (e) => {
  e.component(ee.name, ee);
};
const Ht = {
  name: "KTable"
}, Ft = /* @__PURE__ */ V({
  ...Ht,
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
  setup(e) {
    return _e(), (t, o) => (a(), i("div", {
      class: m([`k-table-${e.size}`, e.customClass])
    }, [
      s("table", null, [
        s("tr", null, [
          (a(!0), i(S, null, B(e.options.fileds, (u, f) => (a(), i("th", {
            key: f,
            style: b([e.headStyle, { "text-align": u.align }])
          }, [
            s("div", null, C(u.title), 1)
          ], 4))), 128))
        ]),
        (a(!0), i(S, null, B(e.options.datas, (u, f) => (a(), i("tr", { key: f }, [
          (a(!0), i(S, null, B(e.options.fileds, (n, p) => (a(), i("td", {
            key: p,
            style: b([e.rowStyle, { width: e.options.fileds[p].width ? e.options.fileds[p].width : "", "text-align": e.options.fileds[p].align }])
          }, [
            s("div", null, C(e.options.datas[f][e.options.fileds[p].field]), 1)
          ], 4))), 128))
        ]))), 128))
      ])
    ], 2));
  }
});
const te = /* @__PURE__ */ O(Ft, [["__scopeId", "data-v-9bdfd16a"]]);
te.install = (e) => {
  e.component(te.name, te);
};
const At = (e) => (P("data-v-2600d8e4"), e = e(), K(), e), Jt = { class: "k-dropdown-menu" }, Rt = /* @__PURE__ */ At(() => /* @__PURE__ */ s("i", { class: "k-icon-down_line" }, null, -1)), Pt = {
  key: 0,
  class: "k-dropdown-item"
}, Kt = {
  name: "kDropdown"
}, Wt = /* @__PURE__ */ V({
  ...Kt,
  props: {
    title: String,
    options: {
      type: Array,
      default: () => []
    },
    size: {
      type: String,
      default: "default"
    },
    trigger: {
      type: String,
      default: "hover"
    }
  },
  setup(e) {
    const t = e, o = g(!1), u = () => {
      t.trigger == "hover" && (o.value = !0);
    }, f = () => {
      o.value = !1;
    }, n = () => {
      t.trigger == "click" && (o.value = !o.value);
    };
    return (p, h) => (a(), i("div", {
      class: m([`k-dropdown-${e.size}`]),
      onClick: n,
      onMouseover: u,
      onMouseleave: f
    }, [
      s("div", Jt, [
        s("span", null, C(e.title), 1),
        Rt
      ]),
      ie(ue, { name: "slide-fade" }, {
        default: R(() => [
          o.value ? (a(), i("div", Pt, [
            s("ul", null, [
              (a(!0), i(S, null, B(e.options, (c, v) => (a(), i("li", { key: v }, [
                s("i", {
                  class: m(c.icon)
                }, null, 2),
                J(" " + C(c.label), 1)
              ]))), 128))
            ])
          ])) : k("", !0)
        ]),
        _: 1
      })
    ], 34));
  }
});
const le = /* @__PURE__ */ O(Wt, [["__scopeId", "data-v-2600d8e4"]]);
le.install = (e) => {
  e.component(le.name, le);
};
const jt = [
  j,
  U,
  q,
  G,
  Q,
  te,
  Z,
  ee,
  X,
  Y,
  le
], Ut = (e) => {
  jt.forEach((t) => {
    e.use(t);
  });
}, Qt = {
  install: Ut
};
export {
  G as KSelect,
  Qt as default,
  j as kButton,
  Z as kCarousel,
  ee as kCarouselcard,
  Y as kDialog,
  le as kDropdown,
  X as kInput,
  Q as kOptfile,
  q as kRadio,
  te as kTable,
  U as kTextarea
};
