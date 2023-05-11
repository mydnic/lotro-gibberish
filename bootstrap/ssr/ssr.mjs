import { defineComponent, useSSRContext, mergeProps, resolveComponent, withCtx, renderSlot, onMounted, onUnmounted, createVNode, openBlock, createBlock, createTextVNode, Fragment, renderList, toDisplayString, createCommentVNode, ref, withModifiers, withDirectives, vModelSelect, withKeys, vShow, createSSRApp, h } from "vue";
import { ssrRenderAttrs, ssrRenderStyle, ssrRenderSlot, ssrRenderComponent, ssrRenderTeleport, ssrRenderClass, ssrLooseContain, ssrGetDynamicModelProps, ssrInterpolate, ssrRenderList, ssrRenderAttr } from "vue/server-renderer";
import { Link, Head, createInertiaApp } from "@inertiajs/vue3";
import axios$1 from "axios";
import dayjs from "dayjs";
import useClipboard from "vue-clipboard3";
import createServer from "@inertiajs/vue3/server";
import { renderToString } from "@vue/server-renderer";
const _export_sfc = (sfc, props) => {
  const target = sfc.__vccOpts || sfc;
  for (const [key, val] of props) {
    target[key] = val;
  }
  return target;
};
const _sfc_main$P = defineComponent({
  props: ["on"]
});
function _sfc_ssrRender$P(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><div style="${ssrRenderStyle(_ctx.on ? null : { display: "none" })}" class="text-sm text-gray-600 transform dark:text-gray-300">`);
  ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
  _push(`</div></div>`);
}
const _sfc_setup$P = _sfc_main$P.setup;
_sfc_main$P.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Jetstream/ActionMessage.vue");
  return _sfc_setup$P ? _sfc_setup$P(props, ctx) : void 0;
};
const JetActionMessage = /* @__PURE__ */ _export_sfc(_sfc_main$P, [["ssrRender", _sfc_ssrRender$P]]);
const _sfc_main$O = {};
function _sfc_ssrRender$O(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "flex justify-between md:col-span-1" }, _attrs))}><div class="px-4 sm:px-0"><h3 class="text-lg font-medium text-gray-900 dark:text-gray-100">`);
  ssrRenderSlot(_ctx.$slots, "title", {}, null, _push, _parent);
  _push(`</h3><p class="mt-1 text-sm text-gray-600 dark:text-gray-400">`);
  ssrRenderSlot(_ctx.$slots, "description", {}, null, _push, _parent);
  _push(`</p></div><div class="px-4 sm:px-0">`);
  ssrRenderSlot(_ctx.$slots, "aside", {}, null, _push, _parent);
  _push(`</div></div>`);
}
const _sfc_setup$O = _sfc_main$O.setup;
_sfc_main$O.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Jetstream/SectionTitle.vue");
  return _sfc_setup$O ? _sfc_setup$O(props, ctx) : void 0;
};
const JetSectionTitle = /* @__PURE__ */ _export_sfc(_sfc_main$O, [["ssrRender", _sfc_ssrRender$O]]);
const _sfc_main$N = defineComponent({
  components: {
    JetSectionTitle
  }
});
function _sfc_ssrRender$N(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_jet_section_title = resolveComponent("jet-section-title");
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "md:grid md:grid-cols-3 md:gap-6" }, _attrs))}>`);
  _push(ssrRenderComponent(_component_jet_section_title, null, {
    title: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        ssrRenderSlot(_ctx.$slots, "title", {}, null, _push2, _parent2, _scopeId);
      } else {
        return [
          renderSlot(_ctx.$slots, "title")
        ];
      }
    }),
    description: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        ssrRenderSlot(_ctx.$slots, "description", {}, null, _push2, _parent2, _scopeId);
      } else {
        return [
          renderSlot(_ctx.$slots, "description")
        ];
      }
    }),
    _: 3
  }, _parent));
  _push(`<div class="mt-5 md:mt-0 md:col-span-2"><div class="px-4 py-5 bg-white shadow sm:p-6 dark:bg-slate-500 sm:rounded-lg">`);
  ssrRenderSlot(_ctx.$slots, "content", {}, null, _push, _parent);
  _push(`</div></div></div>`);
}
const _sfc_setup$N = _sfc_main$N.setup;
_sfc_main$N.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Jetstream/ActionSection.vue");
  return _sfc_setup$N ? _sfc_setup$N(props, ctx) : void 0;
};
const JetActionSection = /* @__PURE__ */ _export_sfc(_sfc_main$N, [["ssrRender", _sfc_ssrRender$N]]);
const _sfc_main$M = defineComponent({
  props: {
    type: {
      type: String,
      default: "submit"
    }
  }
});
function _sfc_ssrRender$M(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<button${ssrRenderAttrs(mergeProps({
    type: _ctx.type,
    class: "inline-flex items-center px-4 py-2 bg-gray-800 border border-transparent rounded-md font-semibold text-xs text-white uppercase tracking-widest hover:bg-gray-700 active:bg-gray-900 focus:outline-none focus:border-gray-900 focus:ring focus:ring-gray-300 disabled:opacity-25 transition"
  }, _attrs))}>`);
  ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
  _push(`</button>`);
}
const _sfc_setup$M = _sfc_main$M.setup;
_sfc_main$M.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Jetstream/Button.vue");
  return _sfc_setup$M ? _sfc_setup$M(props, ctx) : void 0;
};
const JetButton = /* @__PURE__ */ _export_sfc(_sfc_main$M, [["ssrRender", _sfc_ssrRender$M]]);
const _sfc_main$L = defineComponent({
  emits: ["close"],
  props: {
    show: {
      default: false
    },
    maxWidth: {
      default: "2xl"
    },
    closeable: {
      default: true
    }
  },
  watch: {
    show: {
      immediate: true,
      handler: (show) => {
        if (show) {
          document.body.style.overflow = "hidden";
        } else {
          document.body.style.overflow = null;
        }
      }
    }
  },
  setup(props, { emit }) {
    const close = () => {
      if (props.closeable) {
        emit("close");
      }
    };
    const closeOnEscape = (e) => {
      if (e.key === "Escape" && props.show) {
        close();
      }
    };
    onMounted(() => document.addEventListener("keydown", closeOnEscape));
    onUnmounted(() => {
      document.removeEventListener("keydown", closeOnEscape);
      document.body.style.overflow = null;
    });
    return {
      close
    };
  },
  computed: {
    maxWidthClass() {
      return {
        "sm": "sm:max-w-sm",
        "md": "sm:max-w-md",
        "lg": "sm:max-w-lg",
        "xl": "sm:max-w-xl",
        "2xl": "sm:max-w-2xl"
      }[this.maxWidth];
    }
  }
});
function _sfc_ssrRender$L(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  ssrRenderTeleport(_push, (_push2) => {
    _push2(`<div style="${ssrRenderStyle(_ctx.show ? null : { display: "none" })}" class="fixed inset-0 overflow-y-auto px-4 py-6 sm:px-0 z-50" scroll-region><div style="${ssrRenderStyle(_ctx.show ? null : { display: "none" })}" class="fixed inset-0 transform transition-all"><div class="absolute inset-0 bg-gray-500 opacity-75"></div></div><div style="${ssrRenderStyle(_ctx.show ? null : { display: "none" })}" class="${ssrRenderClass([_ctx.maxWidthClass, "mb-6 bg-white rounded-lg overflow-hidden shadow-xl transform transition-all sm:w-full sm:mx-auto"])}">`);
    if (_ctx.show) {
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push2, _parent);
    } else {
      _push2(`<!---->`);
    }
    _push2(`</div></div>`);
  }, "body", false, _parent);
}
const _sfc_setup$L = _sfc_main$L.setup;
_sfc_main$L.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Jetstream/Modal.vue");
  return _sfc_setup$L ? _sfc_setup$L(props, ctx) : void 0;
};
const Modal = /* @__PURE__ */ _export_sfc(_sfc_main$L, [["ssrRender", _sfc_ssrRender$L]]);
const _sfc_main$K = defineComponent({
  emits: ["close"],
  components: {
    Modal
  },
  props: {
    show: {
      default: false
    },
    maxWidth: {
      default: "2xl"
    },
    closeable: {
      default: true
    }
  },
  methods: {
    close() {
      this.$emit("close");
    }
  }
});
function _sfc_ssrRender$K(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_modal = resolveComponent("modal");
  _push(ssrRenderComponent(_component_modal, mergeProps({
    show: _ctx.show,
    "max-width": _ctx.maxWidth,
    closeable: _ctx.closeable,
    onClose: _ctx.close
  }, _attrs), {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<div class="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4"${_scopeId}><div class="sm:flex sm:items-start"${_scopeId}><div class="mx-auto shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-red-100 sm:mx-0 sm:h-10 sm:w-10"${_scopeId}><svg class="h-6 w-6 text-red-600" stroke="currentColor" fill="none" viewBox="0 0 24 24"${_scopeId}><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"${_scopeId}></path></svg></div><div class="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left"${_scopeId}><h3 class="text-lg"${_scopeId}>`);
        ssrRenderSlot(_ctx.$slots, "title", {}, null, _push2, _parent2, _scopeId);
        _push2(`</h3><div class="mt-2"${_scopeId}>`);
        ssrRenderSlot(_ctx.$slots, "content", {}, null, _push2, _parent2, _scopeId);
        _push2(`</div></div></div></div><div class="flex flex-row justify-end px-6 py-4 bg-gray-100 text-right"${_scopeId}>`);
        ssrRenderSlot(_ctx.$slots, "footer", {}, null, _push2, _parent2, _scopeId);
        _push2(`</div>`);
      } else {
        return [
          createVNode("div", { class: "bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4" }, [
            createVNode("div", { class: "sm:flex sm:items-start" }, [
              createVNode("div", { class: "mx-auto shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-red-100 sm:mx-0 sm:h-10 sm:w-10" }, [
                (openBlock(), createBlock("svg", {
                  class: "h-6 w-6 text-red-600",
                  stroke: "currentColor",
                  fill: "none",
                  viewBox: "0 0 24 24"
                }, [
                  createVNode("path", {
                    "stroke-linecap": "round",
                    "stroke-linejoin": "round",
                    "stroke-width": "2",
                    d: "M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                  })
                ]))
              ]),
              createVNode("div", { class: "mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left" }, [
                createVNode("h3", { class: "text-lg" }, [
                  renderSlot(_ctx.$slots, "title")
                ]),
                createVNode("div", { class: "mt-2" }, [
                  renderSlot(_ctx.$slots, "content")
                ])
              ])
            ])
          ]),
          createVNode("div", { class: "flex flex-row justify-end px-6 py-4 bg-gray-100 text-right" }, [
            renderSlot(_ctx.$slots, "footer")
          ])
        ];
      }
    }),
    _: 3
  }, _parent));
}
const _sfc_setup$K = _sfc_main$K.setup;
_sfc_main$K.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Jetstream/ConfirmationModal.vue");
  return _sfc_setup$K ? _sfc_setup$K(props, ctx) : void 0;
};
const JetConfirmationModal = /* @__PURE__ */ _export_sfc(_sfc_main$K, [["ssrRender", _sfc_ssrRender$K]]);
const _sfc_main$J = defineComponent({
  props: {
    type: {
      type: String,
      default: "button"
    }
  }
});
function _sfc_ssrRender$J(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<button${ssrRenderAttrs(mergeProps({
    type: _ctx.type,
    class: "inline-flex items-center justify-center px-4 py-2 text-xs font-semibold tracking-widest text-white uppercase transition bg-red-600 border border-transparent rounded-md hover:bg-red-500 focus:outline-none focus:border-red-700 focus:ring focus:ring-red-200 active:bg-red-600 disabled:opacity-25"
  }, _attrs))}>`);
  ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
  _push(`</button>`);
}
const _sfc_setup$J = _sfc_main$J.setup;
_sfc_main$J.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Jetstream/DangerButton.vue");
  return _sfc_setup$J ? _sfc_setup$J(props, ctx) : void 0;
};
const JetDangerButton = /* @__PURE__ */ _export_sfc(_sfc_main$J, [["ssrRender", _sfc_ssrRender$J]]);
const _sfc_main$I = defineComponent({
  emits: ["close"],
  components: {
    Modal
  },
  props: {
    show: {
      default: false
    },
    maxWidth: {
      default: "2xl"
    },
    closeable: {
      default: true
    }
  },
  methods: {
    close() {
      this.$emit("close");
    }
  }
});
function _sfc_ssrRender$I(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_modal = resolveComponent("modal");
  _push(ssrRenderComponent(_component_modal, mergeProps({
    show: _ctx.show,
    "max-width": _ctx.maxWidth,
    closeable: _ctx.closeable,
    onClose: _ctx.close
  }, _attrs), {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<div class="px-6 py-4"${_scopeId}><div class="text-lg"${_scopeId}>`);
        ssrRenderSlot(_ctx.$slots, "title", {}, null, _push2, _parent2, _scopeId);
        _push2(`</div><div class="mt-4"${_scopeId}>`);
        ssrRenderSlot(_ctx.$slots, "content", {}, null, _push2, _parent2, _scopeId);
        _push2(`</div></div><div class="flex flex-row justify-end px-6 py-4 bg-gray-100 text-right"${_scopeId}>`);
        ssrRenderSlot(_ctx.$slots, "footer", {}, null, _push2, _parent2, _scopeId);
        _push2(`</div>`);
      } else {
        return [
          createVNode("div", { class: "px-6 py-4" }, [
            createVNode("div", { class: "text-lg" }, [
              renderSlot(_ctx.$slots, "title")
            ]),
            createVNode("div", { class: "mt-4" }, [
              renderSlot(_ctx.$slots, "content")
            ])
          ]),
          createVNode("div", { class: "flex flex-row justify-end px-6 py-4 bg-gray-100 text-right" }, [
            renderSlot(_ctx.$slots, "footer")
          ])
        ];
      }
    }),
    _: 3
  }, _parent));
}
const _sfc_setup$I = _sfc_main$I.setup;
_sfc_main$I.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Jetstream/DialogModal.vue");
  return _sfc_setup$I ? _sfc_setup$I(props, ctx) : void 0;
};
const JetDialogModal = /* @__PURE__ */ _export_sfc(_sfc_main$I, [["ssrRender", _sfc_ssrRender$I]]);
const _sfc_main$H = defineComponent({
  emits: ["submitted"],
  components: {
    JetSectionTitle
  },
  computed: {
    hasActions() {
      return !!this.$slots.actions;
    }
  }
});
function _sfc_ssrRender$H(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_jet_section_title = resolveComponent("jet-section-title");
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "md:grid md:grid-cols-3 md:gap-6" }, _attrs))}>`);
  _push(ssrRenderComponent(_component_jet_section_title, null, {
    title: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        ssrRenderSlot(_ctx.$slots, "title", {}, null, _push2, _parent2, _scopeId);
      } else {
        return [
          renderSlot(_ctx.$slots, "title")
        ];
      }
    }),
    description: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        ssrRenderSlot(_ctx.$slots, "description", {}, null, _push2, _parent2, _scopeId);
      } else {
        return [
          renderSlot(_ctx.$slots, "description")
        ];
      }
    }),
    _: 3
  }, _parent));
  _push(`<div class="mt-5 md:mt-0 md:col-span-2"><form><div class="${ssrRenderClass([_ctx.hasActions ? "sm:rounded-tl-md sm:rounded-tr-md" : "sm:rounded-md", "px-4 py-5 bg-white shadow dark:bg-slate-500 sm:p-6"])}"><div class="grid grid-cols-6 gap-6">`);
  ssrRenderSlot(_ctx.$slots, "form", {}, null, _push, _parent);
  _push(`</div></div>`);
  if (_ctx.hasActions) {
    _push(`<div class="flex items-center justify-end px-4 py-3 text-right shadow dark:bg-slate-700 bg-gray-50 sm:px-6 sm:rounded-bl-md sm:rounded-br-md">`);
    ssrRenderSlot(_ctx.$slots, "actions", {}, null, _push, _parent);
    _push(`</div>`);
  } else {
    _push(`<!---->`);
  }
  _push(`</form></div></div>`);
}
const _sfc_setup$H = _sfc_main$H.setup;
_sfc_main$H.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Jetstream/FormSection.vue");
  return _sfc_setup$H ? _sfc_setup$H(props, ctx) : void 0;
};
const JetFormSection = /* @__PURE__ */ _export_sfc(_sfc_main$H, [["ssrRender", _sfc_ssrRender$H]]);
const _sfc_main$G = defineComponent({
  props: ["modelValue"],
  emits: ["update:modelValue"],
  methods: {
    focus() {
      this.$refs.input.focus();
    }
  }
});
function _sfc_ssrRender$G(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<input${ssrRenderAttrs(mergeProps({
    class: "border-gray-300 rounded-md shadow-sm dark:placeholder:text-white dark:border-gray-500 dark:bg-slate-400 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50",
    value: _ctx.modelValue,
    ref: "input"
  }, _attrs))}>`);
}
const _sfc_setup$G = _sfc_main$G.setup;
_sfc_main$G.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Jetstream/Input.vue");
  return _sfc_setup$G ? _sfc_setup$G(props, ctx) : void 0;
};
const JetInput = /* @__PURE__ */ _export_sfc(_sfc_main$G, [["ssrRender", _sfc_ssrRender$G]]);
const _sfc_main$F = defineComponent({
  emits: ["update:checked"],
  props: {
    checked: {
      type: [Array, Boolean],
      default: false
    },
    value: {
      default: null
    }
  },
  computed: {
    proxyChecked: {
      get() {
        return this.checked;
      },
      set(val) {
        this.$emit("update:checked", val);
      }
    }
  }
});
function _sfc_ssrRender$F(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  let _temp0;
  _push(`<input${ssrRenderAttrs((_temp0 = mergeProps({
    type: "checkbox",
    value: _ctx.value,
    checked: Array.isArray(_ctx.proxyChecked) ? ssrLooseContain(_ctx.proxyChecked, _ctx.value) : _ctx.proxyChecked,
    class: "rounded border-gray-300 text-indigo-600 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
  }, _attrs), mergeProps(_temp0, ssrGetDynamicModelProps(_temp0, _ctx.proxyChecked))))}>`);
}
const _sfc_setup$F = _sfc_main$F.setup;
_sfc_main$F.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Jetstream/Checkbox.vue");
  return _sfc_setup$F ? _sfc_setup$F(props, ctx) : void 0;
};
const JetCheckbox = /* @__PURE__ */ _export_sfc(_sfc_main$F, [["ssrRender", _sfc_ssrRender$F]]);
const _sfc_main$E = defineComponent({
  props: ["message"]
});
function _sfc_ssrRender$E(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(mergeProps({
    style: _ctx.message ? null : { display: "none" }
  }, _attrs))}><p class="text-sm text-red-600">${ssrInterpolate(_ctx.message)}</p></div>`);
}
const _sfc_setup$E = _sfc_main$E.setup;
_sfc_main$E.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Jetstream/InputError.vue");
  return _sfc_setup$E ? _sfc_setup$E(props, ctx) : void 0;
};
const JetInputError = /* @__PURE__ */ _export_sfc(_sfc_main$E, [["ssrRender", _sfc_ssrRender$E]]);
const _sfc_main$D = defineComponent({
  props: ["value"]
});
function _sfc_ssrRender$D(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<label${ssrRenderAttrs(mergeProps({ class: "block text-sm font-medium text-gray-700 dark:text-gray-100" }, _attrs))}>`);
  if (_ctx.value) {
    _push(`<span>${ssrInterpolate(_ctx.value)}</span>`);
  } else {
    _push(`<span>`);
    ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
    _push(`</span>`);
  }
  _push(`</label>`);
}
const _sfc_setup$D = _sfc_main$D.setup;
_sfc_main$D.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Jetstream/Label.vue");
  return _sfc_setup$D ? _sfc_setup$D(props, ctx) : void 0;
};
const JetLabel = /* @__PURE__ */ _export_sfc(_sfc_main$D, [["ssrRender", _sfc_ssrRender$D]]);
const _sfc_main$C = defineComponent({
  props: {
    type: {
      type: String,
      default: "button"
    }
  }
});
function _sfc_ssrRender$C(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<button${ssrRenderAttrs(mergeProps({
    type: _ctx.type,
    class: "inline-flex items-center px-4 py-2 bg-white border border-gray-300 rounded-md font-semibold text-xs text-gray-700 uppercase tracking-widest shadow-sm hover:text-gray-500 focus:outline-none focus:border-blue-300 focus:ring focus:ring-blue-200 active:text-gray-800 active:bg-gray-50 disabled:opacity-25 transition"
  }, _attrs))}>`);
  ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
  _push(`</button>`);
}
const _sfc_setup$C = _sfc_main$C.setup;
_sfc_main$C.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Jetstream/SecondaryButton.vue");
  return _sfc_setup$C ? _sfc_setup$C(props, ctx) : void 0;
};
const JetSecondaryButton = /* @__PURE__ */ _export_sfc(_sfc_main$C, [["ssrRender", _sfc_ssrRender$C]]);
const _sfc_main$B = {};
function _sfc_ssrRender$B(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "hidden sm:block" }, _attrs))}><div class="py-8"><div class="border-t border-gray-200"></div></div></div>`);
}
const _sfc_setup$B = _sfc_main$B.setup;
_sfc_main$B.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Jetstream/SectionBorder.vue");
  return _sfc_setup$B ? _sfc_setup$B(props, ctx) : void 0;
};
const JetSectionBorder = /* @__PURE__ */ _export_sfc(_sfc_main$B, [["ssrRender", _sfc_ssrRender$B]]);
const _sfc_main$A = defineComponent({
  components: {
    JetActionMessage,
    JetActionSection,
    JetButton,
    JetConfirmationModal,
    JetDangerButton,
    JetDialogModal,
    JetFormSection,
    JetInput,
    JetCheckbox,
    JetInputError,
    JetLabel,
    JetSecondaryButton,
    JetSectionBorder
  },
  props: [
    "tokens",
    "availablePermissions",
    "defaultPermissions"
  ],
  data() {
    return {
      createApiTokenForm: this.$inertia.form({
        name: "",
        permissions: this.defaultPermissions
      }),
      updateApiTokenForm: this.$inertia.form({
        permissions: []
      }),
      deleteApiTokenForm: this.$inertia.form(),
      displayingToken: false,
      managingPermissionsFor: null,
      apiTokenBeingDeleted: null
    };
  },
  methods: {
    createApiToken() {
      this.createApiTokenForm.post(route("api-tokens.store"), {
        preserveScroll: true,
        onSuccess: () => {
          this.displayingToken = true;
          this.createApiTokenForm.reset();
        }
      });
    },
    manageApiTokenPermissions(token) {
      this.updateApiTokenForm.permissions = token.abilities;
      this.managingPermissionsFor = token;
    },
    updateApiToken() {
      this.updateApiTokenForm.put(route("api-tokens.update", this.managingPermissionsFor), {
        preserveScroll: true,
        preserveState: true,
        onSuccess: () => this.managingPermissionsFor = null
      });
    },
    confirmApiTokenDeletion(token) {
      this.apiTokenBeingDeleted = token;
    },
    deleteApiToken() {
      this.deleteApiTokenForm.delete(route("api-tokens.destroy", this.apiTokenBeingDeleted), {
        preserveScroll: true,
        preserveState: true,
        onSuccess: () => this.apiTokenBeingDeleted = null
      });
    }
  }
});
function _sfc_ssrRender$A(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_jet_form_section = resolveComponent("jet-form-section");
  const _component_jet_label = resolveComponent("jet-label");
  const _component_jet_input = resolveComponent("jet-input");
  const _component_jet_input_error = resolveComponent("jet-input-error");
  const _component_jet_checkbox = resolveComponent("jet-checkbox");
  const _component_jet_action_message = resolveComponent("jet-action-message");
  const _component_jet_button = resolveComponent("jet-button");
  const _component_jet_section_border = resolveComponent("jet-section-border");
  const _component_jet_action_section = resolveComponent("jet-action-section");
  const _component_jet_dialog_modal = resolveComponent("jet-dialog-modal");
  const _component_jet_secondary_button = resolveComponent("jet-secondary-button");
  const _component_jet_confirmation_modal = resolveComponent("jet-confirmation-modal");
  const _component_jet_danger_button = resolveComponent("jet-danger-button");
  _push(`<div${ssrRenderAttrs(_attrs)}>`);
  _push(ssrRenderComponent(_component_jet_form_section, { onSubmitted: _ctx.createApiToken }, {
    title: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(` Create API Token `);
      } else {
        return [
          createTextVNode(" Create API Token ")
        ];
      }
    }),
    description: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(` API tokens allow third-party services to authenticate with our application on your behalf. `);
      } else {
        return [
          createTextVNode(" API tokens allow third-party services to authenticate with our application on your behalf. ")
        ];
      }
    }),
    form: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<div class="col-span-6 sm:col-span-4"${_scopeId}>`);
        _push2(ssrRenderComponent(_component_jet_label, {
          for: "name",
          value: "Name"
        }, null, _parent2, _scopeId));
        _push2(ssrRenderComponent(_component_jet_input, {
          id: "name",
          type: "text",
          class: "mt-1 block w-full",
          modelValue: _ctx.createApiTokenForm.name,
          "onUpdate:modelValue": ($event) => _ctx.createApiTokenForm.name = $event,
          autofocus: ""
        }, null, _parent2, _scopeId));
        _push2(ssrRenderComponent(_component_jet_input_error, {
          message: _ctx.createApiTokenForm.errors.name,
          class: "mt-2"
        }, null, _parent2, _scopeId));
        _push2(`</div>`);
        if (_ctx.availablePermissions.length > 0) {
          _push2(`<div class="col-span-6"${_scopeId}>`);
          _push2(ssrRenderComponent(_component_jet_label, {
            for: "permissions",
            value: "Permissions"
          }, null, _parent2, _scopeId));
          _push2(`<div class="mt-2 grid grid-cols-1 md:grid-cols-2 gap-4"${_scopeId}><!--[-->`);
          ssrRenderList(_ctx.availablePermissions, (permission) => {
            _push2(`<div${_scopeId}><label class="flex items-center"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_jet_checkbox, {
              value: permission,
              checked: _ctx.createApiTokenForm.permissions,
              "onUpdate:checked": ($event) => _ctx.createApiTokenForm.permissions = $event
            }, null, _parent2, _scopeId));
            _push2(`<span class="ml-2 text-sm text-gray-600"${_scopeId}>${ssrInterpolate(permission)}</span></label></div>`);
          });
          _push2(`<!--]--></div></div>`);
        } else {
          _push2(`<!---->`);
        }
      } else {
        return [
          createVNode("div", { class: "col-span-6 sm:col-span-4" }, [
            createVNode(_component_jet_label, {
              for: "name",
              value: "Name"
            }),
            createVNode(_component_jet_input, {
              id: "name",
              type: "text",
              class: "mt-1 block w-full",
              modelValue: _ctx.createApiTokenForm.name,
              "onUpdate:modelValue": ($event) => _ctx.createApiTokenForm.name = $event,
              autofocus: ""
            }, null, 8, ["modelValue", "onUpdate:modelValue"]),
            createVNode(_component_jet_input_error, {
              message: _ctx.createApiTokenForm.errors.name,
              class: "mt-2"
            }, null, 8, ["message"])
          ]),
          _ctx.availablePermissions.length > 0 ? (openBlock(), createBlock("div", {
            key: 0,
            class: "col-span-6"
          }, [
            createVNode(_component_jet_label, {
              for: "permissions",
              value: "Permissions"
            }),
            createVNode("div", { class: "mt-2 grid grid-cols-1 md:grid-cols-2 gap-4" }, [
              (openBlock(true), createBlock(Fragment, null, renderList(_ctx.availablePermissions, (permission) => {
                return openBlock(), createBlock("div", { key: permission }, [
                  createVNode("label", { class: "flex items-center" }, [
                    createVNode(_component_jet_checkbox, {
                      value: permission,
                      checked: _ctx.createApiTokenForm.permissions,
                      "onUpdate:checked": ($event) => _ctx.createApiTokenForm.permissions = $event
                    }, null, 8, ["value", "checked", "onUpdate:checked"]),
                    createVNode("span", { class: "ml-2 text-sm text-gray-600" }, toDisplayString(permission), 1)
                  ])
                ]);
              }), 128))
            ])
          ])) : createCommentVNode("", true)
        ];
      }
    }),
    actions: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(_component_jet_action_message, {
          on: _ctx.createApiTokenForm.recentlySuccessful,
          class: "mr-3"
        }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(` Created. `);
            } else {
              return [
                createTextVNode(" Created. ")
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
        _push2(ssrRenderComponent(_component_jet_button, {
          class: { "opacity-25": _ctx.createApiTokenForm.processing },
          disabled: _ctx.createApiTokenForm.processing
        }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(` Create `);
            } else {
              return [
                createTextVNode(" Create ")
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
      } else {
        return [
          createVNode(_component_jet_action_message, {
            on: _ctx.createApiTokenForm.recentlySuccessful,
            class: "mr-3"
          }, {
            default: withCtx(() => [
              createTextVNode(" Created. ")
            ]),
            _: 1
          }, 8, ["on"]),
          createVNode(_component_jet_button, {
            class: { "opacity-25": _ctx.createApiTokenForm.processing },
            disabled: _ctx.createApiTokenForm.processing
          }, {
            default: withCtx(() => [
              createTextVNode(" Create ")
            ]),
            _: 1
          }, 8, ["class", "disabled"])
        ];
      }
    }),
    _: 1
  }, _parent));
  if (_ctx.tokens.length > 0) {
    _push(`<div>`);
    _push(ssrRenderComponent(_component_jet_section_border, null, null, _parent));
    _push(`<div class="mt-10 sm:mt-0">`);
    _push(ssrRenderComponent(_component_jet_action_section, null, {
      title: withCtx((_, _push2, _parent2, _scopeId) => {
        if (_push2) {
          _push2(` Manage API Tokens `);
        } else {
          return [
            createTextVNode(" Manage API Tokens ")
          ];
        }
      }),
      description: withCtx((_, _push2, _parent2, _scopeId) => {
        if (_push2) {
          _push2(` You may delete any of your existing tokens if they are no longer needed. `);
        } else {
          return [
            createTextVNode(" You may delete any of your existing tokens if they are no longer needed. ")
          ];
        }
      }),
      content: withCtx((_, _push2, _parent2, _scopeId) => {
        if (_push2) {
          _push2(`<div class="space-y-6"${_scopeId}><!--[-->`);
          ssrRenderList(_ctx.tokens, (token) => {
            _push2(`<div class="flex items-center justify-between"${_scopeId}><div${_scopeId}>${ssrInterpolate(token.name)}</div><div class="flex items-center"${_scopeId}>`);
            if (token.last_used_ago) {
              _push2(`<div class="text-sm text-gray-400"${_scopeId}> Last used ${ssrInterpolate(token.last_used_ago)}</div>`);
            } else {
              _push2(`<!---->`);
            }
            if (_ctx.availablePermissions.length > 0) {
              _push2(`<button class="cursor-pointer ml-6 text-sm text-gray-400 underline"${_scopeId}> Permissions </button>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`<button class="cursor-pointer ml-6 text-sm text-red-500"${_scopeId}> Delete </button></div></div>`);
          });
          _push2(`<!--]--></div>`);
        } else {
          return [
            createVNode("div", { class: "space-y-6" }, [
              (openBlock(true), createBlock(Fragment, null, renderList(_ctx.tokens, (token) => {
                return openBlock(), createBlock("div", {
                  class: "flex items-center justify-between",
                  key: token.id
                }, [
                  createVNode("div", null, toDisplayString(token.name), 1),
                  createVNode("div", { class: "flex items-center" }, [
                    token.last_used_ago ? (openBlock(), createBlock("div", {
                      key: 0,
                      class: "text-sm text-gray-400"
                    }, " Last used " + toDisplayString(token.last_used_ago), 1)) : createCommentVNode("", true),
                    _ctx.availablePermissions.length > 0 ? (openBlock(), createBlock("button", {
                      key: 1,
                      class: "cursor-pointer ml-6 text-sm text-gray-400 underline",
                      onClick: ($event) => _ctx.manageApiTokenPermissions(token)
                    }, " Permissions ", 8, ["onClick"])) : createCommentVNode("", true),
                    createVNode("button", {
                      class: "cursor-pointer ml-6 text-sm text-red-500",
                      onClick: ($event) => _ctx.confirmApiTokenDeletion(token)
                    }, " Delete ", 8, ["onClick"])
                  ])
                ]);
              }), 128))
            ])
          ];
        }
      }),
      _: 1
    }, _parent));
    _push(`</div></div>`);
  } else {
    _push(`<!---->`);
  }
  _push(ssrRenderComponent(_component_jet_dialog_modal, {
    show: _ctx.displayingToken,
    onClose: ($event) => _ctx.displayingToken = false
  }, {
    title: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(` API Token `);
      } else {
        return [
          createTextVNode(" API Token ")
        ];
      }
    }),
    content: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<div${_scopeId}> Please copy your new API token. For your security, it won&#39;t be shown again. </div>`);
        if (_ctx.$page.props.jetstream.flash.token) {
          _push2(`<div class="mt-4 bg-gray-100 px-4 py-2 rounded font-mono text-sm text-gray-500"${_scopeId}>${ssrInterpolate(_ctx.$page.props.jetstream.flash.token)}</div>`);
        } else {
          _push2(`<!---->`);
        }
      } else {
        return [
          createVNode("div", null, " Please copy your new API token. For your security, it won't be shown again. "),
          _ctx.$page.props.jetstream.flash.token ? (openBlock(), createBlock("div", {
            key: 0,
            class: "mt-4 bg-gray-100 px-4 py-2 rounded font-mono text-sm text-gray-500"
          }, toDisplayString(_ctx.$page.props.jetstream.flash.token), 1)) : createCommentVNode("", true)
        ];
      }
    }),
    footer: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(_component_jet_secondary_button, {
          onClick: ($event) => _ctx.displayingToken = false
        }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(` Close `);
            } else {
              return [
                createTextVNode(" Close ")
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
      } else {
        return [
          createVNode(_component_jet_secondary_button, {
            onClick: ($event) => _ctx.displayingToken = false
          }, {
            default: withCtx(() => [
              createTextVNode(" Close ")
            ]),
            _: 1
          }, 8, ["onClick"])
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_jet_dialog_modal, {
    show: _ctx.managingPermissionsFor,
    onClose: ($event) => _ctx.managingPermissionsFor = null
  }, {
    title: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(` API Token Permissions `);
      } else {
        return [
          createTextVNode(" API Token Permissions ")
        ];
      }
    }),
    content: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<div class="grid grid-cols-1 md:grid-cols-2 gap-4"${_scopeId}><!--[-->`);
        ssrRenderList(_ctx.availablePermissions, (permission) => {
          _push2(`<div${_scopeId}><label class="flex items-center"${_scopeId}>`);
          _push2(ssrRenderComponent(_component_jet_checkbox, {
            value: permission,
            checked: _ctx.updateApiTokenForm.permissions,
            "onUpdate:checked": ($event) => _ctx.updateApiTokenForm.permissions = $event
          }, null, _parent2, _scopeId));
          _push2(`<span class="ml-2 text-sm text-gray-600"${_scopeId}>${ssrInterpolate(permission)}</span></label></div>`);
        });
        _push2(`<!--]--></div>`);
      } else {
        return [
          createVNode("div", { class: "grid grid-cols-1 md:grid-cols-2 gap-4" }, [
            (openBlock(true), createBlock(Fragment, null, renderList(_ctx.availablePermissions, (permission) => {
              return openBlock(), createBlock("div", { key: permission }, [
                createVNode("label", { class: "flex items-center" }, [
                  createVNode(_component_jet_checkbox, {
                    value: permission,
                    checked: _ctx.updateApiTokenForm.permissions,
                    "onUpdate:checked": ($event) => _ctx.updateApiTokenForm.permissions = $event
                  }, null, 8, ["value", "checked", "onUpdate:checked"]),
                  createVNode("span", { class: "ml-2 text-sm text-gray-600" }, toDisplayString(permission), 1)
                ])
              ]);
            }), 128))
          ])
        ];
      }
    }),
    footer: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(_component_jet_secondary_button, {
          onClick: ($event) => _ctx.managingPermissionsFor = null
        }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(` Cancel `);
            } else {
              return [
                createTextVNode(" Cancel ")
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
        _push2(ssrRenderComponent(_component_jet_button, {
          class: ["ml-3", { "opacity-25": _ctx.updateApiTokenForm.processing }],
          onClick: _ctx.updateApiToken,
          disabled: _ctx.updateApiTokenForm.processing
        }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(` Save `);
            } else {
              return [
                createTextVNode(" Save ")
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
      } else {
        return [
          createVNode(_component_jet_secondary_button, {
            onClick: ($event) => _ctx.managingPermissionsFor = null
          }, {
            default: withCtx(() => [
              createTextVNode(" Cancel ")
            ]),
            _: 1
          }, 8, ["onClick"]),
          createVNode(_component_jet_button, {
            class: ["ml-3", { "opacity-25": _ctx.updateApiTokenForm.processing }],
            onClick: _ctx.updateApiToken,
            disabled: _ctx.updateApiTokenForm.processing
          }, {
            default: withCtx(() => [
              createTextVNode(" Save ")
            ]),
            _: 1
          }, 8, ["onClick", "class", "disabled"])
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_jet_confirmation_modal, {
    show: _ctx.apiTokenBeingDeleted,
    onClose: ($event) => _ctx.apiTokenBeingDeleted = null
  }, {
    title: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(` Delete API Token `);
      } else {
        return [
          createTextVNode(" Delete API Token ")
        ];
      }
    }),
    content: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(` Are you sure you would like to delete this API token? `);
      } else {
        return [
          createTextVNode(" Are you sure you would like to delete this API token? ")
        ];
      }
    }),
    footer: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(_component_jet_secondary_button, {
          onClick: ($event) => _ctx.apiTokenBeingDeleted = null
        }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(` Cancel `);
            } else {
              return [
                createTextVNode(" Cancel ")
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
        _push2(ssrRenderComponent(_component_jet_danger_button, {
          class: ["ml-3", { "opacity-25": _ctx.deleteApiTokenForm.processing }],
          onClick: _ctx.deleteApiToken,
          disabled: _ctx.deleteApiTokenForm.processing
        }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(` Delete `);
            } else {
              return [
                createTextVNode(" Delete ")
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
      } else {
        return [
          createVNode(_component_jet_secondary_button, {
            onClick: ($event) => _ctx.apiTokenBeingDeleted = null
          }, {
            default: withCtx(() => [
              createTextVNode(" Cancel ")
            ]),
            _: 1
          }, 8, ["onClick"]),
          createVNode(_component_jet_danger_button, {
            class: ["ml-3", { "opacity-25": _ctx.deleteApiTokenForm.processing }],
            onClick: _ctx.deleteApiToken,
            disabled: _ctx.deleteApiTokenForm.processing
          }, {
            default: withCtx(() => [
              createTextVNode(" Delete ")
            ]),
            _: 1
          }, 8, ["onClick", "class", "disabled"])
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div>`);
}
const _sfc_setup$A = _sfc_main$A.setup;
_sfc_main$A.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/API/Partials/ApiTokenManager.vue");
  return _sfc_setup$A ? _sfc_setup$A(props, ctx) : void 0;
};
const ApiTokenManager = /* @__PURE__ */ _export_sfc(_sfc_main$A, [["ssrRender", _sfc_ssrRender$A]]);
const __vite_glob_0_1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: ApiTokenManager
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$z = {};
function _sfc_ssrRender$z(_ctx, _push, _parent, _attrs) {
  _push(`<!--[--><img${ssrRenderAttr("src", "/logo/logo-large_white.svg")} alt="logo" class="hidden h-20 dark:block"><img${ssrRenderAttr("src", "/logo/logo.png")} alt="logo" class="block h-20 dark:hidden"><!--]-->`);
}
const _sfc_setup$z = _sfc_main$z.setup;
_sfc_main$z.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Jetstream/ApplicationLogo.vue");
  return _sfc_setup$z ? _sfc_setup$z(props, ctx) : void 0;
};
const ApplicationLogo = /* @__PURE__ */ _export_sfc(_sfc_main$z, [["ssrRender", _sfc_ssrRender$z]]);
const _sfc_main$y = defineComponent({
  data() {
    return {
      show: true
    };
  },
  computed: {
    style() {
      var _a;
      return ((_a = this.$page.props.jetstream.flash) == null ? void 0 : _a.bannerStyle) || "success";
    },
    message() {
      var _a;
      return ((_a = this.$page.props.jetstream.flash) == null ? void 0 : _a.banner) || "";
    }
  }
});
function _sfc_ssrRender$y(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}>`);
  if (_ctx.show && _ctx.message) {
    _push(`<div class="${ssrRenderClass({ "bg-indigo-500": _ctx.style == "success", "bg-red-700": _ctx.style == "danger" })}"><div class="max-w-screen-xl mx-auto py-2 px-3 sm:px-6 lg:px-8"><div class="flex items-center justify-between flex-wrap"><div class="w-0 flex-1 flex items-center min-w-0"><span class="${ssrRenderClass([{ "bg-indigo-600": _ctx.style == "success", "bg-red-600": _ctx.style == "danger" }, "flex p-2 rounded-lg"])}">`);
    if (_ctx.style == "success") {
      _push(`<svg class="h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>`);
    } else {
      _push(`<!---->`);
    }
    if (_ctx.style == "danger") {
      _push(`<svg class="h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"></path></svg>`);
    } else {
      _push(`<!---->`);
    }
    _push(`</span><p class="ml-3 font-medium text-sm text-white truncate">${ssrInterpolate(_ctx.message)}</p></div><div class="shrink-0 sm:ml-3"><button type="button" class="${ssrRenderClass([{ "hover:bg-indigo-600 focus:bg-indigo-600": _ctx.style == "success", "hover:bg-red-600 focus:bg-red-600": _ctx.style == "danger" }, "-mr-1 flex p-2 rounded-md focus:outline-none sm:-mr-2 transition"])}" aria-label="Dismiss"><svg class="h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path></svg></button></div></div></div></div>`);
  } else {
    _push(`<!---->`);
  }
  _push(`</div>`);
}
const _sfc_setup$y = _sfc_main$y.setup;
_sfc_main$y.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Jetstream/Banner.vue");
  return _sfc_setup$y ? _sfc_setup$y(props, ctx) : void 0;
};
const JetBanner = /* @__PURE__ */ _export_sfc(_sfc_main$y, [["ssrRender", _sfc_ssrRender$y]]);
const _sfc_main$x = defineComponent({
  props: {
    align: {
      default: "right"
    },
    width: {
      default: "48"
    },
    contentClasses: {
      default: () => ["py-1", "bg-white"]
    }
  },
  setup() {
    let open = ref(false);
    const closeOnEscape = (e) => {
      if (open.value && e.key === "Escape") {
        open.value = false;
      }
    };
    onMounted(() => document.addEventListener("keydown", closeOnEscape));
    onUnmounted(() => document.removeEventListener("keydown", closeOnEscape));
    return {
      open
    };
  },
  computed: {
    widthClass() {
      return {
        "48": "w-48"
      }[this.width.toString()];
    },
    alignmentClasses() {
      if (this.align === "left") {
        return "origin-top-left left-0";
      } else if (this.align === "right") {
        return "origin-top-right right-0";
      } else {
        return "origin-top";
      }
    }
  }
});
function _sfc_ssrRender$x(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "relative" }, _attrs))}><div>`);
  ssrRenderSlot(_ctx.$slots, "trigger", {}, null, _push, _parent);
  _push(`</div><div style="${ssrRenderStyle(_ctx.open ? null : { display: "none" })}" class="fixed inset-0 z-40"></div><div style="${ssrRenderStyle([
    _ctx.open ? null : { display: "none" },
    { "display": "none" }
  ])}" class="${ssrRenderClass([[_ctx.widthClass, _ctx.alignmentClasses], "absolute z-50 mt-2 rounded-md shadow-lg"])}"><div class="${ssrRenderClass([_ctx.contentClasses, "rounded-md ring-1 ring-black ring-opacity-5"])}">`);
  ssrRenderSlot(_ctx.$slots, "content", {}, null, _push, _parent);
  _push(`</div></div></div>`);
}
const _sfc_setup$x = _sfc_main$x.setup;
_sfc_main$x.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Jetstream/Dropdown.vue");
  return _sfc_setup$x ? _sfc_setup$x(props, ctx) : void 0;
};
const JetDropdown = /* @__PURE__ */ _export_sfc(_sfc_main$x, [["ssrRender", _sfc_ssrRender$x]]);
const _sfc_main$w = defineComponent({
  components: {
    Link
  },
  props: ["href", "as"]
});
function _sfc_ssrRender$w(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_Link = resolveComponent("Link");
  _push(`<div${ssrRenderAttrs(_attrs)}>`);
  if (_ctx.as == "button") {
    _push(`<button type="submit" class="block w-full px-4 py-2 text-sm leading-5 text-gray-700 text-left hover:bg-gray-100 focus:outline-none focus:bg-gray-100 transition">`);
    ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
    _push(`</button>`);
  } else if (_ctx.as == "a") {
    _push(`<a${ssrRenderAttr("href", _ctx.href)} class="block px-4 py-2 text-sm leading-5 text-gray-700 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 transition">`);
    ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
    _push(`</a>`);
  } else {
    _push(ssrRenderComponent(_component_Link, {
      href: _ctx.href,
      class: "block px-4 py-2 text-sm leading-5 text-gray-700 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 transition"
    }, {
      default: withCtx((_, _push2, _parent2, _scopeId) => {
        if (_push2) {
          ssrRenderSlot(_ctx.$slots, "default", {}, null, _push2, _parent2, _scopeId);
        } else {
          return [
            renderSlot(_ctx.$slots, "default")
          ];
        }
      }),
      _: 3
    }, _parent));
  }
  _push(`</div>`);
}
const _sfc_setup$w = _sfc_main$w.setup;
_sfc_main$w.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Jetstream/DropdownLink.vue");
  return _sfc_setup$w ? _sfc_setup$w(props, ctx) : void 0;
};
const JetDropdownLink = /* @__PURE__ */ _export_sfc(_sfc_main$w, [["ssrRender", _sfc_ssrRender$w]]);
const _sfc_main$v = defineComponent({
  components: {
    Link
  },
  props: ["href", "active"],
  computed: {
    classes() {
      return this.active ? "inline-flex items-center px-1 pt-1 border-b-2 border-indigo-400 text-sm font-medium leading-5 text-gray-900 dark:text-white focus:outline-none focus:border-indigo-700 transition" : "inline-flex items-center px-1 pt-1 border-b-2 border-transparent text-sm font-medium leading-5 text-gray-500 dark:text-gray-200 hover:text-gray-700 dark:hover:text-gray-400 hover:border-gray-300 focus:outline-none focus:text-gray-700 focus:border-gray-300 transition";
    }
  }
});
function _sfc_ssrRender$v(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_Link = resolveComponent("Link");
  _push(ssrRenderComponent(_component_Link, mergeProps({
    href: _ctx.href,
    class: _ctx.classes
  }, _attrs), {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        ssrRenderSlot(_ctx.$slots, "default", {}, null, _push2, _parent2, _scopeId);
      } else {
        return [
          renderSlot(_ctx.$slots, "default")
        ];
      }
    }),
    _: 3
  }, _parent));
}
const _sfc_setup$v = _sfc_main$v.setup;
_sfc_main$v.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Jetstream/NavLink.vue");
  return _sfc_setup$v ? _sfc_setup$v(props, ctx) : void 0;
};
const JetNavLink = /* @__PURE__ */ _export_sfc(_sfc_main$v, [["ssrRender", _sfc_ssrRender$v]]);
const _sfc_main$u = defineComponent({
  components: {
    Link
  },
  props: ["active", "href", "as"],
  computed: {
    classes() {
      return this.active ? "block pl-3 pr-4 py-2 border-l-4 border-indigo-400 text-base font-medium text-indigo-700 bg-indigo-50 focus:outline-none focus:text-indigo-800 focus:bg-indigo-100 focus:border-indigo-700 transition" : "block pl-3 pr-4 py-2 border-l-4 border-transparent text-base font-medium text-gray-600 hover:text-gray-800 hover:bg-gray-50 hover:border-gray-300 focus:outline-none focus:text-gray-800 focus:bg-gray-50 focus:border-gray-300 transition";
    }
  }
});
function _sfc_ssrRender$u(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_Link = resolveComponent("Link");
  _push(`<div${ssrRenderAttrs(_attrs)}>`);
  if (_ctx.as == "button") {
    _push(`<button class="${ssrRenderClass([_ctx.classes, "w-full text-left"])}">`);
    ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
    _push(`</button>`);
  } else {
    _push(ssrRenderComponent(_component_Link, {
      href: _ctx.href,
      class: _ctx.classes
    }, {
      default: withCtx((_, _push2, _parent2, _scopeId) => {
        if (_push2) {
          ssrRenderSlot(_ctx.$slots, "default", {}, null, _push2, _parent2, _scopeId);
        } else {
          return [
            renderSlot(_ctx.$slots, "default")
          ];
        }
      }),
      _: 3
    }, _parent));
  }
  _push(`</div>`);
}
const _sfc_setup$u = _sfc_main$u.setup;
_sfc_main$u.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Jetstream/ResponsiveNavLink.vue");
  return _sfc_setup$u ? _sfc_setup$u(props, ctx) : void 0;
};
const JetResponsiveNavLink = /* @__PURE__ */ _export_sfc(_sfc_main$u, [["ssrRender", _sfc_ssrRender$u]]);
const _sfc_main$t = {};
function _sfc_ssrRender$t(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<footer${ssrRenderAttrs(mergeProps({
    class: "bg-white dark:bg-slate-800",
    "aria-labelledby": "footer-heading"
  }, _attrs))}><h2 id="footer-heading" class="sr-only">Footer</h2><div class="px-4 py-12 mx-auto max-w-7xl sm:px-6 lg:py-16 lg:px-8"><div class="xl:grid xl:grid-cols-3 xl:gap-8"><div class="xl:col-span-1"><img class="block h-20 dark:hidden"${ssrRenderAttr("src", "/logo/logo.png")} alt="Lotro gibberish config logo"><img class="hidden h-20 dark:block"${ssrRenderAttr("src", "/logo/logo-larger_white.svg")} alt="Lotro gibberish config logo"><p class="mt-8 text-base text-gray-500 dark:text-gray-300"> Config sharing platform for LOTRO&#39;s plugin <a href="https://www.lotrointerface.com/downloads/info1143-Gibberish.html" target="_blank">Gibberish</a></p></div><div class="grid grid-cols-1 gap-8 mt-12 xl:mt-0 xl:col-span-2"><div class="md:grid md:grid-cols-2 md:gap-8"><div><h3 class="text-sm font-semibold tracking-wider text-gray-400 uppercase">Contact (Discord)</h3><ul role="list" class="mt-4 space-y-4"><li class="text-base text-gray-500 dark:text-gray-300"> Gibberish Plugin: <span class="font-semibold">Souru#4258</span></li><li class="text-base text-gray-500 dark:text-gray-300"> Website: <span class="font-semibold">Mydnic#7847</span></li></ul></div><div class="mt-12 md:mt-0"><h3 class="text-sm font-semibold tracking-wider text-gray-400 uppercase">Links</h3><ul role="list" class="mt-4 space-y-4"><li><a href="https://www.lotrointerface.com/downloads/info1143-Gibberish.html" target="_blank" class="text-base text-gray-500 dark:text-gray-300 dark:hover:text-white hover:text-gray-900"> Gibberish Plugin </a></li><li><a href="https://www.youtube.com/watch?v=xwyCDJBlakI" target="_blank" class="text-base text-gray-500 dark:text-gray-300 dark:hover:text-white hover:text-gray-900"> Plugin Tutorial </a></li><li><a href="https://github.com/mydnic/lotro-gibberish" target="_blank" class="text-base text-gray-500 dark:text-gray-300 dark:hover:text-white hover:text-gray-900"> Website&#39;s Github repo </a></li></ul></div></div></div></div></div></footer>`);
}
const _sfc_setup$t = _sfc_main$t.setup;
_sfc_main$t.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Partials/AppFooter.vue");
  return _sfc_setup$t ? _sfc_setup$t(props, ctx) : void 0;
};
const AppFooter = /* @__PURE__ */ _export_sfc(_sfc_main$t, [["ssrRender", _sfc_ssrRender$t]]);
const _sfc_main$s = defineComponent({
  props: {
    title: String
  },
  components: {
    Head,
    JetApplicationLogo: ApplicationLogo,
    JetBanner,
    JetDropdown,
    JetDropdownLink,
    JetNavLink,
    JetResponsiveNavLink,
    Link,
    AppFooter
  },
  data() {
    return {
      showingNavigationDropdown: false
    };
  },
  methods: {
    switchToTeam(team) {
      this.$inertia.put(route("current-team.update"), {
        "team_id": team.id
      }, {
        preserveState: false
      });
    },
    logout() {
      this.$inertia.post(route("logout"));
    }
  }
});
function _sfc_ssrRender$s(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_Head = resolveComponent("Head");
  const _component_jet_banner = resolveComponent("jet-banner");
  const _component_Link = resolveComponent("Link");
  const _component_jet_dropdown = resolveComponent("jet-dropdown");
  const _component_jet_dropdown_link = resolveComponent("jet-dropdown-link");
  const _component_jet_nav_link = resolveComponent("jet-nav-link");
  const _component_jet_responsive_nav_link = resolveComponent("jet-responsive-nav-link");
  const _component_app_footer = resolveComponent("app-footer");
  _push(`<div${ssrRenderAttrs(_attrs)}>`);
  _push(ssrRenderComponent(_component_Head, { title: _ctx.title }, null, _parent));
  _push(ssrRenderComponent(_component_jet_banner, null, null, _parent));
  _push(`<div class="min-h-screen bg-gray-100 dark:bg-slate-900"><nav class="bg-white border-b border-gray-100 dark:border-gray-500 dark:bg-slate-800"><div class="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8"><div class="flex justify-between h-16"><div class="flex"><div class="flex items-center shrink-0">`);
  _push(ssrRenderComponent(_component_Link, {
    href: _ctx.route("home")
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<img${ssrRenderAttr("src", "/logo/logo-large.svg")} alt="logo" class="block w-auto h-10 dark:hidden"${_scopeId}><img${ssrRenderAttr("src", "/logo/logo-larger_white.svg")} alt="logo" class="hidden w-auto h-10 dark:block"${_scopeId}>`);
      } else {
        return [
          createVNode("img", {
            src: "/logo/logo-large.svg",
            alt: "logo",
            class: "block w-auto h-10 dark:hidden"
          }, null, 8, ["src"]),
          createVNode("img", {
            src: "/logo/logo-larger_white.svg",
            alt: "logo",
            class: "hidden w-auto h-10 dark:block"
          }, null, 8, ["src"])
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div><div class="hidden space-x-8 sm:-my-px sm:ml-10 sm:flex"></div></div><div class="hidden sm:flex sm:items-center sm:ml-6"><div class="relative ml-3">`);
  if (_ctx.$page.props.jetstream.hasTeamFeatures) {
    _push(ssrRenderComponent(_component_jet_dropdown, {
      align: "right",
      width: "60"
    }, {
      trigger: withCtx((_, _push2, _parent2, _scopeId) => {
        if (_push2) {
          _push2(`<span class="inline-flex rounded-md"${_scopeId}><button type="button" class="inline-flex items-center px-3 py-2 text-sm font-medium leading-4 text-gray-500 transition bg-white border border-transparent rounded-md dark:text-white dark:bg-gray-600 hover:bg-gray-50 hover:text-gray-700 focus:outline-none focus:bg-gray-50 active:bg-gray-50"${_scopeId}>${ssrInterpolate(_ctx.$page.props.user.current_team.name)} <svg class="ml-2 -mr-0.5 h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"${_scopeId}><path fill-rule="evenodd" d="M10 3a1 1 0 01.707.293l3 3a1 1 0 01-1.414 1.414L10 5.414 7.707 7.707a1 1 0 01-1.414-1.414l3-3A1 1 0 0110 3zm-3.707 9.293a1 1 0 011.414 0L10 14.586l2.293-2.293a1 1 0 011.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clip-rule="evenodd"${_scopeId}></path></svg></button></span>`);
        } else {
          return [
            createVNode("span", { class: "inline-flex rounded-md" }, [
              createVNode("button", {
                type: "button",
                class: "inline-flex items-center px-3 py-2 text-sm font-medium leading-4 text-gray-500 transition bg-white border border-transparent rounded-md dark:text-white dark:bg-gray-600 hover:bg-gray-50 hover:text-gray-700 focus:outline-none focus:bg-gray-50 active:bg-gray-50"
              }, [
                createTextVNode(toDisplayString(_ctx.$page.props.user.current_team.name) + " ", 1),
                (openBlock(), createBlock("svg", {
                  class: "ml-2 -mr-0.5 h-4 w-4",
                  xmlns: "http://www.w3.org/2000/svg",
                  viewBox: "0 0 20 20",
                  fill: "currentColor"
                }, [
                  createVNode("path", {
                    "fill-rule": "evenodd",
                    d: "M10 3a1 1 0 01.707.293l3 3a1 1 0 01-1.414 1.414L10 5.414 7.707 7.707a1 1 0 01-1.414-1.414l3-3A1 1 0 0110 3zm-3.707 9.293a1 1 0 011.414 0L10 14.586l2.293-2.293a1 1 0 011.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z",
                    "clip-rule": "evenodd"
                  })
                ]))
              ])
            ])
          ];
        }
      }),
      content: withCtx((_, _push2, _parent2, _scopeId) => {
        if (_push2) {
          _push2(`<div class="w-60"${_scopeId}>`);
          if (_ctx.$page.props.jetstream.hasTeamFeatures) {
            _push2(`<!--[--><div class="block px-4 py-2 text-xs text-gray-400"${_scopeId}> Manage Team </div>`);
            _push2(ssrRenderComponent(_component_jet_dropdown_link, {
              href: _ctx.route("teams.show", _ctx.$page.props.user.current_team)
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` Team Settings `);
                } else {
                  return [
                    createTextVNode(" Team Settings ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            if (_ctx.$page.props.jetstream.canCreateTeams) {
              _push2(ssrRenderComponent(_component_jet_dropdown_link, {
                href: _ctx.route("teams.create")
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(` Create New Team `);
                  } else {
                    return [
                      createTextVNode(" Create New Team ")
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
            } else {
              _push2(`<!---->`);
            }
            _push2(`<div class="border-t border-gray-100"${_scopeId}></div><div class="block px-4 py-2 text-xs text-gray-400"${_scopeId}> Switch Teams </div><!--[-->`);
            ssrRenderList(_ctx.$page.props.user.all_teams, (team) => {
              _push2(`<form${_scopeId}>`);
              _push2(ssrRenderComponent(_component_jet_dropdown_link, { as: "button" }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`<div class="flex items-center"${_scopeId2}>`);
                    if (team.id == _ctx.$page.props.user.current_team_id) {
                      _push3(`<svg class="w-5 h-5 mr-2 text-green-400" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" stroke="currentColor" viewBox="0 0 24 24"${_scopeId2}><path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"${_scopeId2}></path></svg>`);
                    } else {
                      _push3(`<!---->`);
                    }
                    _push3(`<div${_scopeId2}>${ssrInterpolate(team.name)}</div></div>`);
                  } else {
                    return [
                      createVNode("div", { class: "flex items-center" }, [
                        team.id == _ctx.$page.props.user.current_team_id ? (openBlock(), createBlock("svg", {
                          key: 0,
                          class: "w-5 h-5 mr-2 text-green-400",
                          fill: "none",
                          "stroke-linecap": "round",
                          "stroke-linejoin": "round",
                          "stroke-width": "2",
                          stroke: "currentColor",
                          viewBox: "0 0 24 24"
                        }, [
                          createVNode("path", { d: "M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" })
                        ])) : createCommentVNode("", true),
                        createVNode("div", null, toDisplayString(team.name), 1)
                      ])
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
              _push2(`</form>`);
            });
            _push2(`<!--]--><!--]-->`);
          } else {
            _push2(`<!---->`);
          }
          _push2(`</div>`);
        } else {
          return [
            createVNode("div", { class: "w-60" }, [
              _ctx.$page.props.jetstream.hasTeamFeatures ? (openBlock(), createBlock(Fragment, { key: 0 }, [
                createVNode("div", { class: "block px-4 py-2 text-xs text-gray-400" }, " Manage Team "),
                createVNode(_component_jet_dropdown_link, {
                  href: _ctx.route("teams.show", _ctx.$page.props.user.current_team)
                }, {
                  default: withCtx(() => [
                    createTextVNode(" Team Settings ")
                  ]),
                  _: 1
                }, 8, ["href"]),
                _ctx.$page.props.jetstream.canCreateTeams ? (openBlock(), createBlock(_component_jet_dropdown_link, {
                  key: 0,
                  href: _ctx.route("teams.create")
                }, {
                  default: withCtx(() => [
                    createTextVNode(" Create New Team ")
                  ]),
                  _: 1
                }, 8, ["href"])) : createCommentVNode("", true),
                createVNode("div", { class: "border-t border-gray-100" }),
                createVNode("div", { class: "block px-4 py-2 text-xs text-gray-400" }, " Switch Teams "),
                (openBlock(true), createBlock(Fragment, null, renderList(_ctx.$page.props.user.all_teams, (team) => {
                  return openBlock(), createBlock("form", {
                    key: team.id,
                    onSubmit: withModifiers(($event) => _ctx.switchToTeam(team), ["prevent"])
                  }, [
                    createVNode(_component_jet_dropdown_link, { as: "button" }, {
                      default: withCtx(() => [
                        createVNode("div", { class: "flex items-center" }, [
                          team.id == _ctx.$page.props.user.current_team_id ? (openBlock(), createBlock("svg", {
                            key: 0,
                            class: "w-5 h-5 mr-2 text-green-400",
                            fill: "none",
                            "stroke-linecap": "round",
                            "stroke-linejoin": "round",
                            "stroke-width": "2",
                            stroke: "currentColor",
                            viewBox: "0 0 24 24"
                          }, [
                            createVNode("path", { d: "M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" })
                          ])) : createCommentVNode("", true),
                          createVNode("div", null, toDisplayString(team.name), 1)
                        ])
                      ]),
                      _: 2
                    }, 1024)
                  ], 40, ["onSubmit"]);
                }), 128))
              ], 64)) : createCommentVNode("", true)
            ])
          ];
        }
      }),
      _: 1
    }, _parent));
  } else {
    _push(`<!---->`);
  }
  _push(`</div>`);
  if (_ctx.$page.props.user) {
    _push(`<div class="relative ml-3">`);
    _push(ssrRenderComponent(_component_jet_dropdown, {
      align: "right",
      width: "48"
    }, {
      trigger: withCtx((_, _push2, _parent2, _scopeId) => {
        if (_push2) {
          if (_ctx.$page.props.jetstream.managesProfilePhotos) {
            _push2(`<button class="flex text-sm transition border-2 border-transparent rounded-full focus:outline-none focus:border-gray-300"${_scopeId}><img class="object-cover w-8 h-8 rounded-full"${ssrRenderAttr("src", _ctx.$page.props.user.profile_photo_url)}${ssrRenderAttr("alt", _ctx.$page.props.user.name)}${_scopeId}></button>`);
          } else {
            _push2(`<span class="inline-flex rounded-md"${_scopeId}><button type="button" class="inline-flex items-center px-3 py-2 text-sm font-medium leading-4 text-gray-500 transition bg-white border border-transparent rounded-md dark:text-white dark:bg-gray-700 hover:text-gray-700 focus:outline-none"${_scopeId}>${ssrInterpolate(_ctx.$page.props.user.username)} <svg class="ml-2 -mr-0.5 h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"${_scopeId}><path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"${_scopeId}></path></svg></button></span>`);
          }
        } else {
          return [
            _ctx.$page.props.jetstream.managesProfilePhotos ? (openBlock(), createBlock("button", {
              key: 0,
              class: "flex text-sm transition border-2 border-transparent rounded-full focus:outline-none focus:border-gray-300"
            }, [
              createVNode("img", {
                class: "object-cover w-8 h-8 rounded-full",
                src: _ctx.$page.props.user.profile_photo_url,
                alt: _ctx.$page.props.user.name
              }, null, 8, ["src", "alt"])
            ])) : (openBlock(), createBlock("span", {
              key: 1,
              class: "inline-flex rounded-md"
            }, [
              createVNode("button", {
                type: "button",
                class: "inline-flex items-center px-3 py-2 text-sm font-medium leading-4 text-gray-500 transition bg-white border border-transparent rounded-md dark:text-white dark:bg-gray-700 hover:text-gray-700 focus:outline-none"
              }, [
                createTextVNode(toDisplayString(_ctx.$page.props.user.username) + " ", 1),
                (openBlock(), createBlock("svg", {
                  class: "ml-2 -mr-0.5 h-4 w-4",
                  xmlns: "http://www.w3.org/2000/svg",
                  viewBox: "0 0 20 20",
                  fill: "currentColor"
                }, [
                  createVNode("path", {
                    "fill-rule": "evenodd",
                    d: "M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z",
                    "clip-rule": "evenodd"
                  })
                ]))
              ])
            ]))
          ];
        }
      }),
      content: withCtx((_, _push2, _parent2, _scopeId) => {
        if (_push2) {
          _push2(`<div class="block px-4 py-2 text-xs text-gray-400"${_scopeId}> Manage Account </div>`);
          _push2(ssrRenderComponent(_component_jet_dropdown_link, {
            href: _ctx.route("profile.show")
          }, {
            default: withCtx((_2, _push3, _parent3, _scopeId2) => {
              if (_push3) {
                _push3(` Profile `);
              } else {
                return [
                  createTextVNode(" Profile ")
                ];
              }
            }),
            _: 1
          }, _parent2, _scopeId));
          _push2(`<div class="block px-4 py-2 text-xs text-gray-400"${_scopeId}> Configs </div>`);
          _push2(ssrRenderComponent(_component_jet_dropdown_link, {
            href: _ctx.route("user.configuration.index")
          }, {
            default: withCtx((_2, _push3, _parent3, _scopeId2) => {
              if (_push3) {
                _push3(` My Configs `);
              } else {
                return [
                  createTextVNode(" My Configs ")
                ];
              }
            }),
            _: 1
          }, _parent2, _scopeId));
          _push2(ssrRenderComponent(_component_jet_dropdown_link, {
            href: _ctx.route("user.configuration.create")
          }, {
            default: withCtx((_2, _push3, _parent3, _scopeId2) => {
              if (_push3) {
                _push3(` Post New Config `);
              } else {
                return [
                  createTextVNode(" Post New Config ")
                ];
              }
            }),
            _: 1
          }, _parent2, _scopeId));
          _push2(`<div class="border-t border-gray-100"${_scopeId}></div><form${_scopeId}>`);
          _push2(ssrRenderComponent(_component_jet_dropdown_link, { as: "button" }, {
            default: withCtx((_2, _push3, _parent3, _scopeId2) => {
              if (_push3) {
                _push3(` Log Out `);
              } else {
                return [
                  createTextVNode(" Log Out ")
                ];
              }
            }),
            _: 1
          }, _parent2, _scopeId));
          _push2(`</form>`);
        } else {
          return [
            createVNode("div", { class: "block px-4 py-2 text-xs text-gray-400" }, " Manage Account "),
            createVNode(_component_jet_dropdown_link, {
              href: _ctx.route("profile.show")
            }, {
              default: withCtx(() => [
                createTextVNode(" Profile ")
              ]),
              _: 1
            }, 8, ["href"]),
            createVNode("div", { class: "block px-4 py-2 text-xs text-gray-400" }, " Configs "),
            createVNode(_component_jet_dropdown_link, {
              href: _ctx.route("user.configuration.index")
            }, {
              default: withCtx(() => [
                createTextVNode(" My Configs ")
              ]),
              _: 1
            }, 8, ["href"]),
            createVNode(_component_jet_dropdown_link, {
              href: _ctx.route("user.configuration.create")
            }, {
              default: withCtx(() => [
                createTextVNode(" Post New Config ")
              ]),
              _: 1
            }, 8, ["href"]),
            createVNode("div", { class: "border-t border-gray-100" }),
            createVNode("form", {
              onSubmit: withModifiers(_ctx.logout, ["prevent"])
            }, [
              createVNode(_component_jet_dropdown_link, { as: "button" }, {
                default: withCtx(() => [
                  createTextVNode(" Log Out ")
                ]),
                _: 1
              })
            ], 40, ["onSubmit"])
          ];
        }
      }),
      _: 1
    }, _parent));
    _push(`</div>`);
  } else {
    _push(`<div class="space-x-8">`);
    _push(ssrRenderComponent(_component_jet_nav_link, {
      class: "h-16",
      href: _ctx.route("login"),
      active: _ctx.route().current("login")
    }, {
      default: withCtx((_, _push2, _parent2, _scopeId) => {
        if (_push2) {
          _push2(` Log in `);
        } else {
          return [
            createTextVNode(" Log in ")
          ];
        }
      }),
      _: 1
    }, _parent));
    _push(ssrRenderComponent(_component_jet_nav_link, {
      class: "h-16",
      href: _ctx.route("register"),
      active: _ctx.route().current("register")
    }, {
      default: withCtx((_, _push2, _parent2, _scopeId) => {
        if (_push2) {
          _push2(` Register `);
        } else {
          return [
            createTextVNode(" Register ")
          ];
        }
      }),
      _: 1
    }, _parent));
    _push(`</div>`);
  }
  _push(`</div><div class="flex items-center -mr-2 sm:hidden"><button class="inline-flex items-center justify-center p-2 text-gray-400 transition rounded-md hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-gray-500"><svg class="w-6 h-6" stroke="currentColor" fill="none" viewBox="0 0 24 24"><path class="${ssrRenderClass({ "hidden": _ctx.showingNavigationDropdown, "inline-flex": !_ctx.showingNavigationDropdown })}" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path><path class="${ssrRenderClass({ "hidden": !_ctx.showingNavigationDropdown, "inline-flex": _ctx.showingNavigationDropdown })}" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path></svg></button></div></div></div><div class="${ssrRenderClass([{ "block": _ctx.showingNavigationDropdown, "hidden": !_ctx.showingNavigationDropdown }, "sm:hidden"])}">`);
  if (_ctx.$page.props.user) {
    _push(`<div class="pt-4 pb-1 border-t border-gray-200"><div class="flex items-center px-4">`);
    if (_ctx.$page.props.jetstream.managesProfilePhotos) {
      _push(`<div class="mr-3 shrink-0"><img class="object-cover w-10 h-10 rounded-full"${ssrRenderAttr("src", _ctx.$page.props.user.profile_photo_url)}${ssrRenderAttr("alt", _ctx.$page.props.user.name)}></div>`);
    } else {
      _push(`<!---->`);
    }
    _push(`<div><div class="text-base font-medium text-gray-800">${ssrInterpolate(_ctx.$page.props.user.name)}</div><div class="text-sm font-medium text-gray-500">${ssrInterpolate(_ctx.$page.props.user.email)}</div></div></div><div class="mt-3 space-y-1">`);
    _push(ssrRenderComponent(_component_jet_responsive_nav_link, {
      href: _ctx.route("profile.show"),
      active: _ctx.route().current("profile.show")
    }, {
      default: withCtx((_, _push2, _parent2, _scopeId) => {
        if (_push2) {
          _push2(` Profile `);
        } else {
          return [
            createTextVNode(" Profile ")
          ];
        }
      }),
      _: 1
    }, _parent));
    if (_ctx.$page.props.jetstream.hasApiFeatures) {
      _push(ssrRenderComponent(_component_jet_responsive_nav_link, {
        href: _ctx.route("api-tokens.index"),
        active: _ctx.route().current("api-tokens.index")
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` API Tokens `);
          } else {
            return [
              createTextVNode(" API Tokens ")
            ];
          }
        }),
        _: 1
      }, _parent));
    } else {
      _push(`<!---->`);
    }
    _push(`<form method="POST">`);
    _push(ssrRenderComponent(_component_jet_responsive_nav_link, { as: "button" }, {
      default: withCtx((_, _push2, _parent2, _scopeId) => {
        if (_push2) {
          _push2(` Log Out `);
        } else {
          return [
            createTextVNode(" Log Out ")
          ];
        }
      }),
      _: 1
    }, _parent));
    _push(`</form>`);
    if (_ctx.$page.props.jetstream.hasTeamFeatures) {
      _push(`<!--[--><div class="border-t border-gray-200"></div><div class="block px-4 py-2 text-xs text-gray-400"> Manage Team </div>`);
      _push(ssrRenderComponent(_component_jet_responsive_nav_link, {
        href: _ctx.route("teams.show", _ctx.$page.props.user.current_team),
        active: _ctx.route().current("teams.show")
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Team Settings `);
          } else {
            return [
              createTextVNode(" Team Settings ")
            ];
          }
        }),
        _: 1
      }, _parent));
      if (_ctx.$page.props.jetstream.canCreateTeams) {
        _push(ssrRenderComponent(_component_jet_responsive_nav_link, {
          href: _ctx.route("teams.create"),
          active: _ctx.route().current("teams.create")
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(` Create New Team `);
            } else {
              return [
                createTextVNode(" Create New Team ")
              ];
            }
          }),
          _: 1
        }, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(`<div class="border-t border-gray-200"></div><div class="block px-4 py-2 text-xs text-gray-400"> Switch Teams </div><!--[-->`);
      ssrRenderList(_ctx.$page.props.user.all_teams, (team) => {
        _push(`<form>`);
        _push(ssrRenderComponent(_component_jet_responsive_nav_link, { as: "button" }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<div class="flex items-center"${_scopeId}>`);
              if (team.id == _ctx.$page.props.user.current_team_id) {
                _push2(`<svg class="w-5 h-5 mr-2 text-green-400" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" stroke="currentColor" viewBox="0 0 24 24"${_scopeId}><path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"${_scopeId}></path></svg>`);
              } else {
                _push2(`<!---->`);
              }
              _push2(`<div${_scopeId}>${ssrInterpolate(team.name)}</div></div>`);
            } else {
              return [
                createVNode("div", { class: "flex items-center" }, [
                  team.id == _ctx.$page.props.user.current_team_id ? (openBlock(), createBlock("svg", {
                    key: 0,
                    class: "w-5 h-5 mr-2 text-green-400",
                    fill: "none",
                    "stroke-linecap": "round",
                    "stroke-linejoin": "round",
                    "stroke-width": "2",
                    stroke: "currentColor",
                    viewBox: "0 0 24 24"
                  }, [
                    createVNode("path", { d: "M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" })
                  ])) : createCommentVNode("", true),
                  createVNode("div", null, toDisplayString(team.name), 1)
                ])
              ];
            }
          }),
          _: 2
        }, _parent));
        _push(`</form>`);
      });
      _push(`<!--]--><!--]-->`);
    } else {
      _push(`<!---->`);
    }
    _push(`</div></div>`);
  } else {
    _push(`<div class="pt-4 pb-1 border-t border-gray-200"><div class="space-y-1">`);
    _push(ssrRenderComponent(_component_jet_responsive_nav_link, {
      href: _ctx.route("login"),
      active: _ctx.route().current("login")
    }, {
      default: withCtx((_, _push2, _parent2, _scopeId) => {
        if (_push2) {
          _push2(` Log in `);
        } else {
          return [
            createTextVNode(" Log in ")
          ];
        }
      }),
      _: 1
    }, _parent));
    _push(ssrRenderComponent(_component_jet_responsive_nav_link, {
      href: _ctx.route("register"),
      active: _ctx.route().current("register")
    }, {
      default: withCtx((_, _push2, _parent2, _scopeId) => {
        if (_push2) {
          _push2(` Register `);
        } else {
          return [
            createTextVNode(" Register ")
          ];
        }
      }),
      _: 1
    }, _parent));
    _push(`</div></div>`);
  }
  _push(`</div></nav>`);
  if (_ctx.$slots.header) {
    _push(`<header class="bg-white shadow dark:bg-slate-900 dark:text-white"><div class="px-4 py-6 mx-auto max-w-7xl sm:px-6 lg:px-8">`);
    ssrRenderSlot(_ctx.$slots, "header", {}, null, _push, _parent);
    _push(`</div></header>`);
  } else {
    _push(`<!---->`);
  }
  _push(`<main>`);
  ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
  _push(`</main><footer>`);
  _push(ssrRenderComponent(_component_app_footer, null, null, _parent));
  _push(`</footer></div></div>`);
}
const _sfc_setup$s = _sfc_main$s.setup;
_sfc_main$s.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Layouts/AppLayout.vue");
  return _sfc_setup$s ? _sfc_setup$s(props, ctx) : void 0;
};
const AppLayout = /* @__PURE__ */ _export_sfc(_sfc_main$s, [["ssrRender", _sfc_ssrRender$s]]);
const _sfc_main$r = defineComponent({
  props: [
    "tokens",
    "availablePermissions",
    "defaultPermissions"
  ],
  components: {
    ApiTokenManager,
    AppLayout
  }
});
function _sfc_ssrRender$r(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_app_layout = resolveComponent("app-layout");
  const _component_api_token_manager = resolveComponent("api-token-manager");
  _push(ssrRenderComponent(_component_app_layout, mergeProps({ title: "API Tokens" }, _attrs), {
    header: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<h2 class="text-xl font-semibold leading-tight text-gray-800 dark:text-white"${_scopeId}> API Tokens </h2>`);
      } else {
        return [
          createVNode("h2", { class: "text-xl font-semibold leading-tight text-gray-800 dark:text-white" }, " API Tokens ")
        ];
      }
    }),
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<div${_scopeId}><div class="py-10 mx-auto max-w-7xl sm:px-6 lg:px-8"${_scopeId}>`);
        _push2(ssrRenderComponent(_component_api_token_manager, {
          tokens: _ctx.tokens,
          "available-permissions": _ctx.availablePermissions,
          "default-permissions": _ctx.defaultPermissions
        }, null, _parent2, _scopeId));
        _push2(`</div></div>`);
      } else {
        return [
          createVNode("div", null, [
            createVNode("div", { class: "py-10 mx-auto max-w-7xl sm:px-6 lg:px-8" }, [
              createVNode(_component_api_token_manager, {
                tokens: _ctx.tokens,
                "available-permissions": _ctx.availablePermissions,
                "default-permissions": _ctx.defaultPermissions
              }, null, 8, ["tokens", "available-permissions", "default-permissions"])
            ])
          ])
        ];
      }
    }),
    _: 1
  }, _parent));
}
const _sfc_setup$r = _sfc_main$r.setup;
_sfc_main$r.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/API/Index.vue");
  return _sfc_setup$r ? _sfc_setup$r(props, ctx) : void 0;
};
const Index$2 = /* @__PURE__ */ _export_sfc(_sfc_main$r, [["ssrRender", _sfc_ssrRender$r]]);
const __vite_glob_0_0 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Index$2
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$q = defineComponent({
  props: ["modelValue"],
  emits: ["update:modelValue"],
  methods: {
    focus() {
      this.$refs.input.focus();
    }
  }
});
function _sfc_ssrRender$q(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  let _temp0;
  _push(`<textarea${ssrRenderAttrs(_temp0 = mergeProps({
    class: "border-gray-300 rounded-md shadow-sm dark:placeholder:text-white dark:border-gray-500 dark:bg-slate-400 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50",
    value: _ctx.modelValue,
    ref: "input"
  }, _attrs), "textarea")}>${ssrInterpolate("value" in _temp0 ? _temp0.value : "")}</textarea>`);
}
const _sfc_setup$q = _sfc_main$q.setup;
_sfc_main$q.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Jetstream/Textarea.vue");
  return _sfc_setup$q ? _sfc_setup$q(props, ctx) : void 0;
};
const JetTextarea = /* @__PURE__ */ _export_sfc(_sfc_main$q, [["ssrRender", _sfc_ssrRender$q]]);
const _sfc_main$p = defineComponent({
  computed: {
    errors() {
      return this.$page.props.errors;
    },
    hasErrors() {
      return Object.keys(this.errors).length > 0;
    }
  }
});
function _sfc_ssrRender$p(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  if (_ctx.hasErrors) {
    _push(`<div${ssrRenderAttrs(_attrs)}><div class="font-medium text-red-600">Whoops! Something went wrong.</div><ul class="mt-3 list-disc list-inside text-sm text-red-600"><!--[-->`);
    ssrRenderList(_ctx.errors, (error, key) => {
      _push(`<li>${ssrInterpolate(error)}</li>`);
    });
    _push(`<!--]--></ul></div>`);
  } else {
    _push(`<!---->`);
  }
}
const _sfc_setup$p = _sfc_main$p.setup;
_sfc_main$p.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Jetstream/ValidationErrors.vue");
  return _sfc_setup$p ? _sfc_setup$p(props, ctx) : void 0;
};
const JetValidationErrors = /* @__PURE__ */ _export_sfc(_sfc_main$p, [["ssrRender", _sfc_ssrRender$p]]);
const _sfc_main$o = defineComponent({
  props: ["categories"],
  components: {
    AppLayout,
    Link,
    JetButton,
    JetTextarea,
    JetInput,
    JetCheckbox,
    JetLabel,
    JetValidationErrors
  },
  data() {
    return {
      uploading: false,
      dragging: false,
      form: this.$inertia.form({
        title: "",
        description: "",
        code: "",
        language: "en",
        category_id: null,
        is_public: true
      })
    };
  },
  methods: {
    submit() {
      this.form.post(this.route("user.configuration.store"), {
        // onFinish: () => this.form.reset('password', 'password_confirmation'),
      });
    },
    pasteFunction(pasteEvent, callback) {
      if (pasteEvent.clipboardData == false) {
        if (typeof callback == "function") {
          callback(void 0);
        }
      }
      var items = pasteEvent.clipboardData.items;
      if (items == void 0) {
        if (typeof callback == "function") {
          callback(void 0);
        }
      }
      for (var i = 0; i < items.length; i++) {
        if (items[i].type.indexOf("image") == -1)
          continue;
        var blob = items[i].getAsFile();
        this.addImage(blob);
      }
    },
    onDrop(dropEvent) {
      const items = dropEvent.dataTransfer.files;
      for (var i = 0; i < items.length; i++) {
        if (items[i].type.indexOf("image") == -1)
          continue;
        var blob = items[i];
        this.addImage(blob);
      }
    },
    fileChange(event) {
      const items = event.target.files;
      for (var i = 0; i < items.length; i++) {
        if (items[i].type.indexOf("image") == -1)
          continue;
        var blob = items[i];
        this.addImage(blob);
      }
    },
    addImage(blob) {
      this.uploading = true;
      const formData = new FormData();
      formData.append("image", blob);
      axios$1.post("/auth/upload", formData).then((response) => {
        this.uploading = false;
        this.dragging = false;
        const url = response.data;
        this.form.description += `
`;
        this.form.description += url;
      }).catch((error) => {
        alert("Error, maybe the file is too large.");
      });
    }
  }
});
function _sfc_ssrRender$o(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_app_layout = resolveComponent("app-layout");
  const _component_jet_validation_errors = resolveComponent("jet-validation-errors");
  const _component_jet_label = resolveComponent("jet-label");
  const _component_jet_input = resolveComponent("jet-input");
  const _component_jet_textarea = resolveComponent("jet-textarea");
  const _component_jet_checkbox = resolveComponent("jet-checkbox");
  const _component_jet_button = resolveComponent("jet-button");
  _push(ssrRenderComponent(_component_app_layout, mergeProps({ title: "Publish new Config" }, _attrs), {
    header: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<div class="flex items-center justify-between"${_scopeId}><h2 class="text-xl font-semibold leading-tight text-gray-800 dark:text-white"${_scopeId}> Publish new Config </h2></div>`);
      } else {
        return [
          createVNode("div", { class: "flex items-center justify-between" }, [
            createVNode("h2", { class: "text-xl font-semibold leading-tight text-gray-800 dark:text-white" }, " Publish new Config ")
          ])
        ];
      }
    }),
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<div class="relative py-12"${_scopeId}><div class="mx-auto max-w-7xl sm:px-6 lg:px-8"${_scopeId}>`);
        _push2(ssrRenderComponent(_component_jet_validation_errors, { class: "mb-4" }, null, _parent2, _scopeId));
        _push2(`<form${_scopeId}><div${_scopeId}>`);
        _push2(ssrRenderComponent(_component_jet_label, {
          for: "title",
          value: "Title"
        }, null, _parent2, _scopeId));
        _push2(ssrRenderComponent(_component_jet_input, {
          id: "title",
          type: "text",
          class: "block w-full mt-1",
          modelValue: _ctx.form.title,
          "onUpdate:modelValue": ($event) => _ctx.form.title = $event,
          required: "",
          autofocus: "",
          autocomplete: "name"
        }, null, _parent2, _scopeId));
        _push2(`</div><div class="mt-4"${_scopeId}><div class="flex items-center justify-between"${_scopeId}>`);
        _push2(ssrRenderComponent(_component_jet_label, {
          for: "description",
          value: "Description"
        }, null, _parent2, _scopeId));
        if (_ctx.uploading) {
          _push2(`<span class="flex space-x-2 text-sm text-white itemsc-center"${_scopeId}><svg class="w-4 h-4 text-white animate-spin" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"${_scopeId}><circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"${_scopeId}></circle><path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"${_scopeId}></path></svg><span${_scopeId}>Uploading image...</span></span>`);
        } else {
          _push2(`<label for="image" class="cursor-pointer"${_scopeId}><input multiple accept="image/*" type="file" id="image" class="hidden" name="image"${_scopeId}><svg class="w-5 h-5 text-gray-700 dark:text-gray-300" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true"${_scopeId}><path stroke-linecap="round" stroke-linejoin="round" d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"${_scopeId}></path></svg></label>`);
        }
        _push2(`</div>`);
        _push2(ssrRenderComponent(_component_jet_textarea, {
          onDrop: _ctx.onDrop,
          onDragover: ($event) => _ctx.dragging = true,
          onDragleave: ($event) => _ctx.dragging = false,
          id: "description",
          placeholder: "Write a small description about this gibberish config... what it does, etc. Links are automatically formated.",
          class: ["block w-full mt-1", {
            "bg-gray-100/10": _ctx.dragging
          }],
          modelValue: _ctx.form.description,
          "onUpdate:modelValue": ($event) => _ctx.form.description = $event,
          onPaste: _ctx.pasteFunction,
          required: ""
        }, null, _parent2, _scopeId));
        _push2(`<p class="mt-1 text-xs italic text-gray-500 dark:text-gray-300"${_scopeId}> Links are automatically formated and images (url) are automatically embeded, you can paste an image to upload it. </p></div><div class="mt-4"${_scopeId}>`);
        _push2(ssrRenderComponent(_component_jet_label, {
          for: "code",
          value: "Export Code"
        }, null, _parent2, _scopeId));
        _push2(ssrRenderComponent(_component_jet_textarea, {
          id: "code",
          placeholder: "Paste Code here",
          class: "block w-full mt-1",
          modelValue: _ctx.form.code,
          "onUpdate:modelValue": ($event) => _ctx.form.code = $event,
          required: ""
        }, null, _parent2, _scopeId));
        _push2(`</div><div class="mt-4"${_scopeId}>`);
        _push2(ssrRenderComponent(_component_jet_label, {
          for: "language",
          value: "Language"
        }, null, _parent2, _scopeId));
        _push2(`<div class="flex items-center mt-1 space-x-3"${_scopeId}><button type="button" class="${ssrRenderClass([{
          "bg-indigo-600 border-transparent text-white hover:bg-indigo-700": _ctx.form.language === "en",
          "bg-white border-gray-200 text-gray-900 hover:bg-gray-50": _ctx.form.language !== "en"
        }, "px-5 py-2 text-sm font-medium uppercase border rounded-md focus:outline-none"])}"${_scopeId}>EN</button><button type="button" class="${ssrRenderClass([{
          "bg-indigo-600 border-transparent text-white hover:bg-indigo-700": _ctx.form.language === "fr",
          "bg-white border-gray-200 text-gray-900 hover:bg-gray-50": _ctx.form.language !== "fr"
        }, "px-5 py-2 text-sm font-medium uppercase border rounded-md focus:outline-none"])}"${_scopeId}>FR</button><button type="button" class="${ssrRenderClass([{
          "bg-indigo-600 border-transparent text-white hover:bg-indigo-700": _ctx.form.language === "de",
          "bg-white border-gray-200 text-gray-900 hover:bg-gray-50": _ctx.form.language !== "de"
        }, "px-5 py-2 text-sm font-medium uppercase border rounded-md focus:outline-none"])}"${_scopeId}>DE</button></div></div><div class="mt-4"${_scopeId}>`);
        _push2(ssrRenderComponent(_component_jet_label, {
          for: "category",
          value: "Category"
        }, null, _parent2, _scopeId));
        _push2(`<select name="category_id" id="category" required class="block w-full py-2 pl-3 pr-10 mt-1 text-base border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"${_scopeId}><option${_scopeId}>Chose a category</option><!--[-->`);
        ssrRenderList(_ctx.categories, (category) => {
          _push2(`<option${ssrRenderAttr("value", category.id)}${_scopeId}>${ssrInterpolate(category.title)}</option>`);
        });
        _push2(`<!--]--></select></div><div class="mt-4"${_scopeId}>`);
        _push2(ssrRenderComponent(_component_jet_label, { for: "terms" }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(`<div class="flex items-center"${_scopeId2}>`);
              _push3(ssrRenderComponent(_component_jet_checkbox, {
                name: "public",
                id: "public",
                checked: _ctx.form.is_public,
                "onUpdate:checked": ($event) => _ctx.form.is_public = $event
              }, null, _parent3, _scopeId2));
              _push3(`<div class="ml-2"${_scopeId2}> Everyone can see this Config </div></div>`);
            } else {
              return [
                createVNode("div", { class: "flex items-center" }, [
                  createVNode(_component_jet_checkbox, {
                    name: "public",
                    id: "public",
                    checked: _ctx.form.is_public,
                    "onUpdate:checked": ($event) => _ctx.form.is_public = $event
                  }, null, 8, ["checked", "onUpdate:checked"]),
                  createVNode("div", { class: "ml-2" }, " Everyone can see this Config ")
                ])
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
        _push2(`</div><div class="flex items-center justify-end mt-4"${_scopeId}>`);
        _push2(ssrRenderComponent(_component_jet_button, {
          class: ["ml-4", { "opacity-25": _ctx.form.processing }],
          disabled: _ctx.form.processing
        }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(` Publish `);
            } else {
              return [
                createTextVNode(" Publish ")
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
        _push2(`</div></form></div></div>`);
      } else {
        return [
          createVNode("div", { class: "relative py-12" }, [
            createVNode("div", { class: "mx-auto max-w-7xl sm:px-6 lg:px-8" }, [
              createVNode(_component_jet_validation_errors, { class: "mb-4" }),
              createVNode("form", {
                onSubmit: withModifiers(_ctx.submit, ["prevent"])
              }, [
                createVNode("div", null, [
                  createVNode(_component_jet_label, {
                    for: "title",
                    value: "Title"
                  }),
                  createVNode(_component_jet_input, {
                    id: "title",
                    type: "text",
                    class: "block w-full mt-1",
                    modelValue: _ctx.form.title,
                    "onUpdate:modelValue": ($event) => _ctx.form.title = $event,
                    required: "",
                    autofocus: "",
                    autocomplete: "name"
                  }, null, 8, ["modelValue", "onUpdate:modelValue"])
                ]),
                createVNode("div", { class: "mt-4" }, [
                  createVNode("div", { class: "flex items-center justify-between" }, [
                    createVNode(_component_jet_label, {
                      for: "description",
                      value: "Description"
                    }),
                    _ctx.uploading ? (openBlock(), createBlock("span", {
                      key: 0,
                      class: "flex space-x-2 text-sm text-white itemsc-center"
                    }, [
                      (openBlock(), createBlock("svg", {
                        class: "w-4 h-4 text-white animate-spin",
                        xmlns: "http://www.w3.org/2000/svg",
                        fill: "none",
                        viewBox: "0 0 24 24"
                      }, [
                        createVNode("circle", {
                          class: "opacity-25",
                          cx: "12",
                          cy: "12",
                          r: "10",
                          stroke: "currentColor",
                          "stroke-width": "4"
                        }),
                        createVNode("path", {
                          class: "opacity-75",
                          fill: "currentColor",
                          d: "M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                        })
                      ])),
                      createVNode("span", null, "Uploading image...")
                    ])) : (openBlock(), createBlock("label", {
                      key: 1,
                      for: "image",
                      class: "cursor-pointer"
                    }, [
                      createVNode("input", {
                        multiple: "",
                        accept: "image/*",
                        type: "file",
                        id: "image",
                        class: "hidden",
                        name: "image",
                        onChange: _ctx.fileChange
                      }, null, 40, ["onChange"]),
                      (openBlock(), createBlock("svg", {
                        class: "w-5 h-5 text-gray-700 dark:text-gray-300",
                        xmlns: "http://www.w3.org/2000/svg",
                        fill: "none",
                        viewBox: "0 0 24 24",
                        "stroke-width": "1.5",
                        stroke: "currentColor",
                        "aria-hidden": "true"
                      }, [
                        createVNode("path", {
                          "stroke-linecap": "round",
                          "stroke-linejoin": "round",
                          d: "M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
                        })
                      ]))
                    ]))
                  ]),
                  createVNode(_component_jet_textarea, {
                    onDrop: withModifiers(_ctx.onDrop, ["prevent"]),
                    onDragover: ($event) => _ctx.dragging = true,
                    onDragleave: ($event) => _ctx.dragging = false,
                    id: "description",
                    placeholder: "Write a small description about this gibberish config... what it does, etc. Links are automatically formated.",
                    class: ["block w-full mt-1", {
                      "bg-gray-100/10": _ctx.dragging
                    }],
                    modelValue: _ctx.form.description,
                    "onUpdate:modelValue": ($event) => _ctx.form.description = $event,
                    onPaste: _ctx.pasteFunction,
                    required: ""
                  }, null, 8, ["onDrop", "onDragover", "onDragleave", "class", "modelValue", "onUpdate:modelValue", "onPaste"]),
                  createVNode("p", { class: "mt-1 text-xs italic text-gray-500 dark:text-gray-300" }, " Links are automatically formated and images (url) are automatically embeded, you can paste an image to upload it. ")
                ]),
                createVNode("div", { class: "mt-4" }, [
                  createVNode(_component_jet_label, {
                    for: "code",
                    value: "Export Code"
                  }),
                  createVNode(_component_jet_textarea, {
                    id: "code",
                    placeholder: "Paste Code here",
                    class: "block w-full mt-1",
                    modelValue: _ctx.form.code,
                    "onUpdate:modelValue": ($event) => _ctx.form.code = $event,
                    required: ""
                  }, null, 8, ["modelValue", "onUpdate:modelValue"])
                ]),
                createVNode("div", { class: "mt-4" }, [
                  createVNode(_component_jet_label, {
                    for: "language",
                    value: "Language"
                  }),
                  createVNode("div", { class: "flex items-center mt-1 space-x-3" }, [
                    createVNode("button", {
                      type: "button",
                      onClick: ($event) => _ctx.form.language = "en",
                      class: ["px-5 py-2 text-sm font-medium uppercase border rounded-md focus:outline-none", {
                        "bg-indigo-600 border-transparent text-white hover:bg-indigo-700": _ctx.form.language === "en",
                        "bg-white border-gray-200 text-gray-900 hover:bg-gray-50": _ctx.form.language !== "en"
                      }]
                    }, "EN", 10, ["onClick"]),
                    createVNode("button", {
                      type: "button",
                      onClick: ($event) => _ctx.form.language = "fr",
                      class: ["px-5 py-2 text-sm font-medium uppercase border rounded-md focus:outline-none", {
                        "bg-indigo-600 border-transparent text-white hover:bg-indigo-700": _ctx.form.language === "fr",
                        "bg-white border-gray-200 text-gray-900 hover:bg-gray-50": _ctx.form.language !== "fr"
                      }]
                    }, "FR", 10, ["onClick"]),
                    createVNode("button", {
                      type: "button",
                      onClick: ($event) => _ctx.form.language = "de",
                      class: ["px-5 py-2 text-sm font-medium uppercase border rounded-md focus:outline-none", {
                        "bg-indigo-600 border-transparent text-white hover:bg-indigo-700": _ctx.form.language === "de",
                        "bg-white border-gray-200 text-gray-900 hover:bg-gray-50": _ctx.form.language !== "de"
                      }]
                    }, "DE", 10, ["onClick"])
                  ])
                ]),
                createVNode("div", { class: "mt-4" }, [
                  createVNode(_component_jet_label, {
                    for: "category",
                    value: "Category"
                  }),
                  withDirectives(createVNode("select", {
                    name: "category_id",
                    id: "category",
                    "onUpdate:modelValue": ($event) => _ctx.form.category_id = $event,
                    required: "",
                    class: "block w-full py-2 pl-3 pr-10 mt-1 text-base border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  }, [
                    createVNode("option", null, "Chose a category"),
                    (openBlock(true), createBlock(Fragment, null, renderList(_ctx.categories, (category) => {
                      return openBlock(), createBlock("option", {
                        key: category.id,
                        value: category.id
                      }, toDisplayString(category.title), 9, ["value"]);
                    }), 128))
                  ], 8, ["onUpdate:modelValue"]), [
                    [vModelSelect, _ctx.form.category_id]
                  ])
                ]),
                createVNode("div", { class: "mt-4" }, [
                  createVNode(_component_jet_label, { for: "terms" }, {
                    default: withCtx(() => [
                      createVNode("div", { class: "flex items-center" }, [
                        createVNode(_component_jet_checkbox, {
                          name: "public",
                          id: "public",
                          checked: _ctx.form.is_public,
                          "onUpdate:checked": ($event) => _ctx.form.is_public = $event
                        }, null, 8, ["checked", "onUpdate:checked"]),
                        createVNode("div", { class: "ml-2" }, " Everyone can see this Config ")
                      ])
                    ]),
                    _: 1
                  })
                ]),
                createVNode("div", { class: "flex items-center justify-end mt-4" }, [
                  createVNode(_component_jet_button, {
                    class: ["ml-4", { "opacity-25": _ctx.form.processing }],
                    disabled: _ctx.form.processing
                  }, {
                    default: withCtx(() => [
                      createTextVNode(" Publish ")
                    ]),
                    _: 1
                  }, 8, ["class", "disabled"])
                ])
              ], 40, ["onSubmit"])
            ])
          ])
        ];
      }
    }),
    _: 1
  }, _parent));
}
const _sfc_setup$o = _sfc_main$o.setup;
_sfc_main$o.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Auth/Configuration/Create.vue");
  return _sfc_setup$o ? _sfc_setup$o(props, ctx) : void 0;
};
const Create = /* @__PURE__ */ _export_sfc(_sfc_main$o, [["ssrRender", _sfc_ssrRender$o]]);
const __vite_glob_0_2 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Create
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$n = defineComponent({
  props: ["configuration"],
  components: {
    JetDialogModal,
    JetSecondaryButton,
    JetDangerButton
  },
  data() {
    return {
      showDeleteModal: false,
      form: this.$inertia.form()
    };
  },
  methods: {
    deleteConfig() {
      this.form.delete(route("user.configuration.destroy", this.configuration.uuid));
    }
  }
});
function _sfc_ssrRender$n(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_jet_danger_button = resolveComponent("jet-danger-button");
  const _component_jet_dialog_modal = resolveComponent("jet-dialog-modal");
  const _component_jet_secondary_button = resolveComponent("jet-secondary-button");
  _push(`<!--[-->`);
  _push(ssrRenderComponent(_component_jet_danger_button, {
    onClick: ($event) => _ctx.showDeleteModal = true
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(` Delete `);
      } else {
        return [
          createTextVNode(" Delete ")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_jet_dialog_modal, {
    show: _ctx.showDeleteModal,
    onClose: ($event) => _ctx.showDeleteModal = false
  }, {
    title: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(` Delete Configuration `);
      } else {
        return [
          createTextVNode(" Delete Configuration ")
        ];
      }
    }),
    content: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(` Are you sure you want to delete this configuration? It will be permanently deleted. `);
      } else {
        return [
          createTextVNode(" Are you sure you want to delete this configuration? It will be permanently deleted. ")
        ];
      }
    }),
    footer: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(_component_jet_secondary_button, {
          onClick: ($event) => _ctx.showDeleteModal = false
        }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(` Cancel `);
            } else {
              return [
                createTextVNode(" Cancel ")
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
        _push2(ssrRenderComponent(_component_jet_danger_button, {
          class: ["ml-3", { "opacity-25": _ctx.form.processing }],
          onClick: _ctx.deleteConfig,
          disabled: _ctx.form.processing
        }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(` Delete Configuration `);
            } else {
              return [
                createTextVNode(" Delete Configuration ")
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
      } else {
        return [
          createVNode(_component_jet_secondary_button, {
            onClick: ($event) => _ctx.showDeleteModal = false
          }, {
            default: withCtx(() => [
              createTextVNode(" Cancel ")
            ]),
            _: 1
          }, 8, ["onClick"]),
          createVNode(_component_jet_danger_button, {
            class: ["ml-3", { "opacity-25": _ctx.form.processing }],
            onClick: _ctx.deleteConfig,
            disabled: _ctx.form.processing
          }, {
            default: withCtx(() => [
              createTextVNode(" Delete Configuration ")
            ]),
            _: 1
          }, 8, ["onClick", "class", "disabled"])
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`<!--]-->`);
}
const _sfc_setup$n = _sfc_main$n.setup;
_sfc_main$n.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/DeleteConfigButton.vue");
  return _sfc_setup$n ? _sfc_setup$n(props, ctx) : void 0;
};
const __unplugin_components_0$1 = /* @__PURE__ */ _export_sfc(_sfc_main$n, [["ssrRender", _sfc_ssrRender$n]]);
const _sfc_main$m = defineComponent({
  props: ["categories", "configuration"],
  components: {
    AppLayout,
    DeleteConfigButton: __unplugin_components_0$1,
    Link,
    JetButton,
    JetSecondaryButton,
    JetTextarea,
    JetInput,
    JetCheckbox,
    JetLabel,
    JetValidationErrors
  },
  data() {
    return {
      form: this.$inertia.form({
        title: this.configuration.title,
        description: this.configuration.description,
        code: this.configuration.code,
        language: this.configuration.language,
        category_id: this.configuration.category_id,
        is_public: !!this.configuration.is_public
      })
    };
  },
  methods: {
    submit() {
      this.form.put(this.route("user.configuration.update", this.configuration.uuid), {
        preserveScroll: true
        // onFinish: () => this.form.reset('password', 'password_confirmation'),
      });
    },
    goToPublicPage() {
      this.$inertia.visit(route("configuration.show", this.configuration.uuid));
    }
  }
});
function _sfc_ssrRender$m(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_app_layout = resolveComponent("app-layout");
  const _component_jet_secondary_button = resolveComponent("jet-secondary-button");
  const _component_delete_config_button = __unplugin_components_0$1;
  const _component_jet_validation_errors = resolveComponent("jet-validation-errors");
  const _component_jet_label = resolveComponent("jet-label");
  const _component_jet_input = resolveComponent("jet-input");
  const _component_jet_textarea = resolveComponent("jet-textarea");
  const _component_jet_checkbox = resolveComponent("jet-checkbox");
  const _component_jet_button = resolveComponent("jet-button");
  _push(ssrRenderComponent(_component_app_layout, mergeProps({ title: "Edit Config" }, _attrs), {
    header: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<div class="flex items-center justify-between"${_scopeId}><h2 class="text-xl font-semibold leading-tight text-gray-800 dark:text-white"${_scopeId}> Edit Config </h2><div class="flex items-center space-x-4"${_scopeId}>`);
        _push2(ssrRenderComponent(_component_jet_secondary_button, { onClick: _ctx.goToPublicPage }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(` Get public link `);
            } else {
              return [
                createTextVNode(" Get public link ")
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
        _push2(ssrRenderComponent(_component_delete_config_button, { configuration: _ctx.configuration }, null, _parent2, _scopeId));
        _push2(`</div></div>`);
      } else {
        return [
          createVNode("div", { class: "flex items-center justify-between" }, [
            createVNode("h2", { class: "text-xl font-semibold leading-tight text-gray-800 dark:text-white" }, " Edit Config "),
            createVNode("div", { class: "flex items-center space-x-4" }, [
              createVNode(_component_jet_secondary_button, { onClick: _ctx.goToPublicPage }, {
                default: withCtx(() => [
                  createTextVNode(" Get public link ")
                ]),
                _: 1
              }, 8, ["onClick"]),
              createVNode(_component_delete_config_button, { configuration: _ctx.configuration }, null, 8, ["configuration"])
            ])
          ])
        ];
      }
    }),
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<div class="py-12"${_scopeId}><div class="mx-auto max-w-7xl sm:px-6 lg:px-8"${_scopeId}>`);
        _push2(ssrRenderComponent(_component_jet_validation_errors, { class: "mb-4" }, null, _parent2, _scopeId));
        _push2(`<form${_scopeId}><div${_scopeId}>`);
        _push2(ssrRenderComponent(_component_jet_label, {
          for: "title",
          value: "Title"
        }, null, _parent2, _scopeId));
        _push2(ssrRenderComponent(_component_jet_input, {
          id: "title",
          type: "text",
          class: "block w-full mt-1",
          modelValue: _ctx.form.title,
          "onUpdate:modelValue": ($event) => _ctx.form.title = $event,
          required: "",
          autofocus: "",
          autocomplete: "name"
        }, null, _parent2, _scopeId));
        _push2(`</div><div class="mt-4"${_scopeId}>`);
        _push2(ssrRenderComponent(_component_jet_label, {
          for: "description",
          value: "Description"
        }, null, _parent2, _scopeId));
        _push2(ssrRenderComponent(_component_jet_textarea, {
          id: "description",
          placeholder: "Write a small description about this gibberish config... what it does, etc. Links are automatically formated.",
          class: "block w-full mt-1",
          modelValue: _ctx.form.description,
          "onUpdate:modelValue": ($event) => _ctx.form.description = $event,
          required: ""
        }, null, _parent2, _scopeId));
        _push2(`<p class="mt-1 text-xs italic text-gray-500"${_scopeId}> Links are automatically formated and images (url) are automatically embeded. </p></div><div class="mt-4"${_scopeId}>`);
        _push2(ssrRenderComponent(_component_jet_label, {
          for: "code",
          value: "Export Code"
        }, null, _parent2, _scopeId));
        _push2(ssrRenderComponent(_component_jet_textarea, {
          id: "code",
          placeholder: "Paste Code here",
          class: "block w-full mt-1",
          modelValue: _ctx.form.code,
          "onUpdate:modelValue": ($event) => _ctx.form.code = $event,
          required: ""
        }, null, _parent2, _scopeId));
        _push2(`</div><div class="mt-4"${_scopeId}>`);
        _push2(ssrRenderComponent(_component_jet_label, {
          for: "language",
          value: "Language"
        }, null, _parent2, _scopeId));
        _push2(`<div class="flex items-center mt-1 space-x-3"${_scopeId}><button type="button" class="${ssrRenderClass([{
          "bg-indigo-600 border-transparent text-white hover:bg-indigo-700": _ctx.form.language === "en",
          "bg-white border-gray-200 text-gray-900 hover:bg-gray-50": _ctx.form.language !== "en"
        }, "px-5 py-2 text-sm font-medium uppercase border rounded-md focus:outline-none"])}"${_scopeId}>EN</button><button type="button" class="${ssrRenderClass([{
          "bg-indigo-600 border-transparent text-white hover:bg-indigo-700": _ctx.form.language === "fr",
          "bg-white border-gray-200 text-gray-900 hover:bg-gray-50": _ctx.form.language !== "fr"
        }, "px-5 py-2 text-sm font-medium uppercase border rounded-md focus:outline-none"])}"${_scopeId}>FR</button><button type="button" class="${ssrRenderClass([{
          "bg-indigo-600 border-transparent text-white hover:bg-indigo-700": _ctx.form.language === "de",
          "bg-white border-gray-200 text-gray-900 hover:bg-gray-50": _ctx.form.language !== "de"
        }, "px-5 py-2 text-sm font-medium uppercase border rounded-md focus:outline-none"])}"${_scopeId}>DE</button></div></div><div class="mt-4"${_scopeId}>`);
        _push2(ssrRenderComponent(_component_jet_label, {
          for: "category",
          value: "Category"
        }, null, _parent2, _scopeId));
        _push2(`<select name="category_id" id="category" required class="block w-full py-2 pl-3 pr-10 mt-1 text-base border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"${_scopeId}><option${_scopeId}>Chose a category</option><!--[-->`);
        ssrRenderList(_ctx.categories, (category) => {
          _push2(`<option${ssrRenderAttr("value", category.id)}${_scopeId}>${ssrInterpolate(category.title)}</option>`);
        });
        _push2(`<!--]--></select></div><div class="mt-4"${_scopeId}>`);
        _push2(ssrRenderComponent(_component_jet_label, { for: "terms" }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(`<div class="flex items-center"${_scopeId2}>`);
              _push3(ssrRenderComponent(_component_jet_checkbox, {
                name: "public",
                id: "public",
                checked: _ctx.form.is_public,
                "onUpdate:checked": ($event) => _ctx.form.is_public = $event
              }, null, _parent3, _scopeId2));
              _push3(`<div class="ml-2"${_scopeId2}> Everyone can see this Config </div></div>`);
            } else {
              return [
                createVNode("div", { class: "flex items-center" }, [
                  createVNode(_component_jet_checkbox, {
                    name: "public",
                    id: "public",
                    checked: _ctx.form.is_public,
                    "onUpdate:checked": ($event) => _ctx.form.is_public = $event
                  }, null, 8, ["checked", "onUpdate:checked"]),
                  createVNode("div", { class: "ml-2" }, " Everyone can see this Config ")
                ])
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
        _push2(`</div><div class="flex items-center justify-end mt-4"${_scopeId}>`);
        _push2(ssrRenderComponent(_component_jet_button, {
          class: ["ml-4", { "opacity-25": _ctx.form.processing }],
          disabled: _ctx.form.processing
        }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(` Update `);
            } else {
              return [
                createTextVNode(" Update ")
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
        _push2(`</div></form></div></div>`);
      } else {
        return [
          createVNode("div", { class: "py-12" }, [
            createVNode("div", { class: "mx-auto max-w-7xl sm:px-6 lg:px-8" }, [
              createVNode(_component_jet_validation_errors, { class: "mb-4" }),
              createVNode("form", {
                onSubmit: withModifiers(_ctx.submit, ["prevent"])
              }, [
                createVNode("div", null, [
                  createVNode(_component_jet_label, {
                    for: "title",
                    value: "Title"
                  }),
                  createVNode(_component_jet_input, {
                    id: "title",
                    type: "text",
                    class: "block w-full mt-1",
                    modelValue: _ctx.form.title,
                    "onUpdate:modelValue": ($event) => _ctx.form.title = $event,
                    required: "",
                    autofocus: "",
                    autocomplete: "name"
                  }, null, 8, ["modelValue", "onUpdate:modelValue"])
                ]),
                createVNode("div", { class: "mt-4" }, [
                  createVNode(_component_jet_label, {
                    for: "description",
                    value: "Description"
                  }),
                  createVNode(_component_jet_textarea, {
                    id: "description",
                    placeholder: "Write a small description about this gibberish config... what it does, etc. Links are automatically formated.",
                    class: "block w-full mt-1",
                    modelValue: _ctx.form.description,
                    "onUpdate:modelValue": ($event) => _ctx.form.description = $event,
                    required: ""
                  }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                  createVNode("p", { class: "mt-1 text-xs italic text-gray-500" }, " Links are automatically formated and images (url) are automatically embeded. ")
                ]),
                createVNode("div", { class: "mt-4" }, [
                  createVNode(_component_jet_label, {
                    for: "code",
                    value: "Export Code"
                  }),
                  createVNode(_component_jet_textarea, {
                    id: "code",
                    placeholder: "Paste Code here",
                    class: "block w-full mt-1",
                    modelValue: _ctx.form.code,
                    "onUpdate:modelValue": ($event) => _ctx.form.code = $event,
                    required: ""
                  }, null, 8, ["modelValue", "onUpdate:modelValue"])
                ]),
                createVNode("div", { class: "mt-4" }, [
                  createVNode(_component_jet_label, {
                    for: "language",
                    value: "Language"
                  }),
                  createVNode("div", { class: "flex items-center mt-1 space-x-3" }, [
                    createVNode("button", {
                      type: "button",
                      onClick: ($event) => _ctx.form.language = "en",
                      class: ["px-5 py-2 text-sm font-medium uppercase border rounded-md focus:outline-none", {
                        "bg-indigo-600 border-transparent text-white hover:bg-indigo-700": _ctx.form.language === "en",
                        "bg-white border-gray-200 text-gray-900 hover:bg-gray-50": _ctx.form.language !== "en"
                      }]
                    }, "EN", 10, ["onClick"]),
                    createVNode("button", {
                      type: "button",
                      onClick: ($event) => _ctx.form.language = "fr",
                      class: ["px-5 py-2 text-sm font-medium uppercase border rounded-md focus:outline-none", {
                        "bg-indigo-600 border-transparent text-white hover:bg-indigo-700": _ctx.form.language === "fr",
                        "bg-white border-gray-200 text-gray-900 hover:bg-gray-50": _ctx.form.language !== "fr"
                      }]
                    }, "FR", 10, ["onClick"]),
                    createVNode("button", {
                      type: "button",
                      onClick: ($event) => _ctx.form.language = "de",
                      class: ["px-5 py-2 text-sm font-medium uppercase border rounded-md focus:outline-none", {
                        "bg-indigo-600 border-transparent text-white hover:bg-indigo-700": _ctx.form.language === "de",
                        "bg-white border-gray-200 text-gray-900 hover:bg-gray-50": _ctx.form.language !== "de"
                      }]
                    }, "DE", 10, ["onClick"])
                  ])
                ]),
                createVNode("div", { class: "mt-4" }, [
                  createVNode(_component_jet_label, {
                    for: "category",
                    value: "Category"
                  }),
                  withDirectives(createVNode("select", {
                    name: "category_id",
                    id: "category",
                    "onUpdate:modelValue": ($event) => _ctx.form.category_id = $event,
                    required: "",
                    class: "block w-full py-2 pl-3 pr-10 mt-1 text-base border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  }, [
                    createVNode("option", null, "Chose a category"),
                    (openBlock(true), createBlock(Fragment, null, renderList(_ctx.categories, (category) => {
                      return openBlock(), createBlock("option", {
                        key: category.id,
                        value: category.id
                      }, toDisplayString(category.title), 9, ["value"]);
                    }), 128))
                  ], 8, ["onUpdate:modelValue"]), [
                    [vModelSelect, _ctx.form.category_id]
                  ])
                ]),
                createVNode("div", { class: "mt-4" }, [
                  createVNode(_component_jet_label, { for: "terms" }, {
                    default: withCtx(() => [
                      createVNode("div", { class: "flex items-center" }, [
                        createVNode(_component_jet_checkbox, {
                          name: "public",
                          id: "public",
                          checked: _ctx.form.is_public,
                          "onUpdate:checked": ($event) => _ctx.form.is_public = $event
                        }, null, 8, ["checked", "onUpdate:checked"]),
                        createVNode("div", { class: "ml-2" }, " Everyone can see this Config ")
                      ])
                    ]),
                    _: 1
                  })
                ]),
                createVNode("div", { class: "flex items-center justify-end mt-4" }, [
                  createVNode(_component_jet_button, {
                    class: ["ml-4", { "opacity-25": _ctx.form.processing }],
                    disabled: _ctx.form.processing
                  }, {
                    default: withCtx(() => [
                      createTextVNode(" Update ")
                    ]),
                    _: 1
                  }, 8, ["class", "disabled"])
                ])
              ], 40, ["onSubmit"])
            ])
          ])
        ];
      }
    }),
    _: 1
  }, _parent));
}
const _sfc_setup$m = _sfc_main$m.setup;
_sfc_main$m.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Auth/Configuration/Edit.vue");
  return _sfc_setup$m ? _sfc_setup$m(props, ctx) : void 0;
};
const Edit = /* @__PURE__ */ _export_sfc(_sfc_main$m, [["ssrRender", _sfc_ssrRender$m]]);
const __vite_glob_0_3 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Edit
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$l = defineComponent({
  props: ["configurations"],
  components: {
    AppLayout,
    Link
  },
  methods: {
    formatDate(dateString) {
      return dayjs(dateString).format("DD/MM/YYYY");
    }
  }
});
function _sfc_ssrRender$l(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_app_layout = resolveComponent("app-layout");
  const _component_Link = resolveComponent("Link");
  _push(ssrRenderComponent(_component_app_layout, mergeProps({ title: "My Configs" }, _attrs), {
    header: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<div class="flex items-center justify-between"${_scopeId}><h2 class="text-xl font-semibold leading-tight text-gray-800 dark:text-white"${_scopeId}> My Configs </h2>`);
        _push2(ssrRenderComponent(_component_Link, {
          href: _ctx.route("user.configuration.create"),
          class: "inline-flex items-center px-4 py-2 text-xs font-semibold tracking-widest text-white uppercase transition bg-gray-800 border border-transparent rounded-md hover:bg-gray-700 active:bg-gray-900 focus:outline-none focus:border-gray-900 focus:ring focus:ring-gray-300 disabled:opacity-25"
        }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(` Publish New Config `);
            } else {
              return [
                createTextVNode(" Publish New Config ")
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
        _push2(`</div>`);
      } else {
        return [
          createVNode("div", { class: "flex items-center justify-between" }, [
            createVNode("h2", { class: "text-xl font-semibold leading-tight text-gray-800 dark:text-white" }, " My Configs "),
            createVNode(_component_Link, {
              href: _ctx.route("user.configuration.create"),
              class: "inline-flex items-center px-4 py-2 text-xs font-semibold tracking-widest text-white uppercase transition bg-gray-800 border border-transparent rounded-md hover:bg-gray-700 active:bg-gray-900 focus:outline-none focus:border-gray-900 focus:ring focus:ring-gray-300 disabled:opacity-25"
            }, {
              default: withCtx(() => [
                createTextVNode(" Publish New Config ")
              ]),
              _: 1
            }, 8, ["href"])
          ])
        ];
      }
    }),
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<div class="py-12"${_scopeId}><div class="mx-auto max-w-7xl sm:px-6 lg:px-8"${_scopeId}><div class="overflow-hidden bg-white shadow dark:bg-slate-500 sm:rounded-md"${_scopeId}><ul role="list" class="divide-y divide-gray-200"${_scopeId}><!--[-->`);
        ssrRenderList(_ctx.configurations, (config) => {
          _push2(`<li${_scopeId}>`);
          _push2(ssrRenderComponent(_component_Link, {
            href: _ctx.route("user.configuration.edit", config.uuid),
            class: "block hover:bg-gray-50 hover:bg-slate-600"
          }, {
            default: withCtx((_2, _push3, _parent3, _scopeId2) => {
              if (_push3) {
                _push3(`<div class="px-4 py-4 sm:px-6"${_scopeId2}><div class="flex items-center justify-between"${_scopeId2}><p class="font-medium text-indigo-600 truncate dark:text-indigo-300"${_scopeId2}>${ssrInterpolate(config.title)}</p><div class="flex flex-shrink-0 ml-2"${_scopeId2}>`);
                if (config.is_public) {
                  _push3(`<svg class="w-5 h-5 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"${_scopeId2}><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"${_scopeId2}></path><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"${_scopeId2}></path></svg>`);
                } else {
                  _push3(`<svg class="w-5 h-5 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"${_scopeId2}><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21"${_scopeId2}></path></svg>`);
                }
                _push3(`</div></div><div class="mt-2 sm:flex sm:justify-between"${_scopeId2}><div class="sm:flex"${_scopeId2}><p class="flex items-center text-sm text-gray-500 dark:text-gray-200"${_scopeId2}><img class="flex-shrink-0 mr-1.5 h-6 w-6 text-gray-400"${ssrRenderAttr("src", "/icons/" + config.category.icon_path)}${ssrRenderAttr("alt", config.category.title)}${_scopeId2}> ${ssrInterpolate(config.category.title)}</p></div><div class="flex items-center mt-2 text-sm text-gray-500 dark:text-gray-200 sm:mt-0"${_scopeId2}><svg class="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"${_scopeId2}><path fill-rule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clip-rule="evenodd"${_scopeId2}></path></svg><p${_scopeId2}> Updated on ${ssrInterpolate(_ctx.formatDate(config.updated_at))}</p></div></div></div>`);
              } else {
                return [
                  createVNode("div", { class: "px-4 py-4 sm:px-6" }, [
                    createVNode("div", { class: "flex items-center justify-between" }, [
                      createVNode("p", { class: "font-medium text-indigo-600 truncate dark:text-indigo-300" }, toDisplayString(config.title), 1),
                      createVNode("div", { class: "flex flex-shrink-0 ml-2" }, [
                        config.is_public ? (openBlock(), createBlock("svg", {
                          key: 0,
                          class: "w-5 h-5 text-emerald-400",
                          fill: "none",
                          stroke: "currentColor",
                          viewBox: "0 0 24 24",
                          xmlns: "http://www.w3.org/2000/svg"
                        }, [
                          createVNode("path", {
                            "stroke-linecap": "round",
                            "stroke-linejoin": "round",
                            "stroke-width": "2",
                            d: "M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                          }),
                          createVNode("path", {
                            "stroke-linecap": "round",
                            "stroke-linejoin": "round",
                            "stroke-width": "2",
                            d: "M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                          })
                        ])) : (openBlock(), createBlock("svg", {
                          key: 1,
                          class: "w-5 h-5 text-red-400",
                          fill: "none",
                          stroke: "currentColor",
                          viewBox: "0 0 24 24",
                          xmlns: "http://www.w3.org/2000/svg"
                        }, [
                          createVNode("path", {
                            "stroke-linecap": "round",
                            "stroke-linejoin": "round",
                            "stroke-width": "2",
                            d: "M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21"
                          })
                        ]))
                      ])
                    ]),
                    createVNode("div", { class: "mt-2 sm:flex sm:justify-between" }, [
                      createVNode("div", { class: "sm:flex" }, [
                        createVNode("p", { class: "flex items-center text-sm text-gray-500 dark:text-gray-200" }, [
                          createVNode("img", {
                            class: "flex-shrink-0 mr-1.5 h-6 w-6 text-gray-400",
                            src: "/icons/" + config.category.icon_path,
                            alt: config.category.title
                          }, null, 8, ["src", "alt"]),
                          createTextVNode(" " + toDisplayString(config.category.title), 1)
                        ])
                      ]),
                      createVNode("div", { class: "flex items-center mt-2 text-sm text-gray-500 dark:text-gray-200 sm:mt-0" }, [
                        (openBlock(), createBlock("svg", {
                          class: "flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400",
                          xmlns: "http://www.w3.org/2000/svg",
                          viewBox: "0 0 20 20",
                          fill: "currentColor",
                          "aria-hidden": "true"
                        }, [
                          createVNode("path", {
                            "fill-rule": "evenodd",
                            d: "M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z",
                            "clip-rule": "evenodd"
                          })
                        ])),
                        createVNode("p", null, " Updated on " + toDisplayString(_ctx.formatDate(config.updated_at)), 1)
                      ])
                    ])
                  ])
                ];
              }
            }),
            _: 2
          }, _parent2, _scopeId));
          _push2(`</li>`);
        });
        _push2(`<!--]--></ul></div></div></div>`);
      } else {
        return [
          createVNode("div", { class: "py-12" }, [
            createVNode("div", { class: "mx-auto max-w-7xl sm:px-6 lg:px-8" }, [
              createVNode("div", { class: "overflow-hidden bg-white shadow dark:bg-slate-500 sm:rounded-md" }, [
                createVNode("ul", {
                  role: "list",
                  class: "divide-y divide-gray-200"
                }, [
                  (openBlock(true), createBlock(Fragment, null, renderList(_ctx.configurations, (config) => {
                    return openBlock(), createBlock("li", {
                      key: config.id
                    }, [
                      createVNode(_component_Link, {
                        href: _ctx.route("user.configuration.edit", config.uuid),
                        class: "block hover:bg-gray-50 hover:bg-slate-600"
                      }, {
                        default: withCtx(() => [
                          createVNode("div", { class: "px-4 py-4 sm:px-6" }, [
                            createVNode("div", { class: "flex items-center justify-between" }, [
                              createVNode("p", { class: "font-medium text-indigo-600 truncate dark:text-indigo-300" }, toDisplayString(config.title), 1),
                              createVNode("div", { class: "flex flex-shrink-0 ml-2" }, [
                                config.is_public ? (openBlock(), createBlock("svg", {
                                  key: 0,
                                  class: "w-5 h-5 text-emerald-400",
                                  fill: "none",
                                  stroke: "currentColor",
                                  viewBox: "0 0 24 24",
                                  xmlns: "http://www.w3.org/2000/svg"
                                }, [
                                  createVNode("path", {
                                    "stroke-linecap": "round",
                                    "stroke-linejoin": "round",
                                    "stroke-width": "2",
                                    d: "M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                                  }),
                                  createVNode("path", {
                                    "stroke-linecap": "round",
                                    "stroke-linejoin": "round",
                                    "stroke-width": "2",
                                    d: "M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                                  })
                                ])) : (openBlock(), createBlock("svg", {
                                  key: 1,
                                  class: "w-5 h-5 text-red-400",
                                  fill: "none",
                                  stroke: "currentColor",
                                  viewBox: "0 0 24 24",
                                  xmlns: "http://www.w3.org/2000/svg"
                                }, [
                                  createVNode("path", {
                                    "stroke-linecap": "round",
                                    "stroke-linejoin": "round",
                                    "stroke-width": "2",
                                    d: "M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21"
                                  })
                                ]))
                              ])
                            ]),
                            createVNode("div", { class: "mt-2 sm:flex sm:justify-between" }, [
                              createVNode("div", { class: "sm:flex" }, [
                                createVNode("p", { class: "flex items-center text-sm text-gray-500 dark:text-gray-200" }, [
                                  createVNode("img", {
                                    class: "flex-shrink-0 mr-1.5 h-6 w-6 text-gray-400",
                                    src: "/icons/" + config.category.icon_path,
                                    alt: config.category.title
                                  }, null, 8, ["src", "alt"]),
                                  createTextVNode(" " + toDisplayString(config.category.title), 1)
                                ])
                              ]),
                              createVNode("div", { class: "flex items-center mt-2 text-sm text-gray-500 dark:text-gray-200 sm:mt-0" }, [
                                (openBlock(), createBlock("svg", {
                                  class: "flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400",
                                  xmlns: "http://www.w3.org/2000/svg",
                                  viewBox: "0 0 20 20",
                                  fill: "currentColor",
                                  "aria-hidden": "true"
                                }, [
                                  createVNode("path", {
                                    "fill-rule": "evenodd",
                                    d: "M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z",
                                    "clip-rule": "evenodd"
                                  })
                                ])),
                                createVNode("p", null, " Updated on " + toDisplayString(_ctx.formatDate(config.updated_at)), 1)
                              ])
                            ])
                          ])
                        ]),
                        _: 2
                      }, 1032, ["href"])
                    ]);
                  }), 128))
                ])
              ])
            ])
          ])
        ];
      }
    }),
    _: 1
  }, _parent));
}
const _sfc_setup$l = _sfc_main$l.setup;
_sfc_main$l.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Auth/Configuration/Index.vue");
  return _sfc_setup$l ? _sfc_setup$l(props, ctx) : void 0;
};
const Index$1 = /* @__PURE__ */ _export_sfc(_sfc_main$l, [["ssrRender", _sfc_ssrRender$l]]);
const __vite_glob_0_4 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Index$1
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$k = {};
function _sfc_ssrRender$k(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "flex flex-col items-center min-h-screen pt-6 bg-gray-100 sm:justify-center sm:pt-0 dark:bg-slate-900" }, _attrs))}><div>`);
  ssrRenderSlot(_ctx.$slots, "logo", {}, null, _push, _parent);
  _push(`</div><div class="w-full px-6 py-4 mt-6 overflow-hidden bg-white shadow-md dark:bg-gray-700 sm:max-w-md sm:rounded-lg">`);
  ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
  _push(`</div></div>`);
}
const _sfc_setup$k = _sfc_main$k.setup;
_sfc_main$k.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Jetstream/AuthenticationCard.vue");
  return _sfc_setup$k ? _sfc_setup$k(props, ctx) : void 0;
};
const JetAuthenticationCard = /* @__PURE__ */ _export_sfc(_sfc_main$k, [["ssrRender", _sfc_ssrRender$k]]);
const _sfc_main$j = defineComponent({
  components: {
    Link,
    ApplicationLogo
  }
});
function _sfc_ssrRender$j(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_Link = resolveComponent("Link");
  const _component_application_logo = resolveComponent("application-logo");
  _push(ssrRenderComponent(_component_Link, mergeProps({ href: "/" }, _attrs), {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(_component_application_logo, { class: "h-32" }, null, _parent2, _scopeId));
      } else {
        return [
          createVNode(_component_application_logo, { class: "h-32" })
        ];
      }
    }),
    _: 1
  }, _parent));
}
const _sfc_setup$j = _sfc_main$j.setup;
_sfc_main$j.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Jetstream/AuthenticationCardLogo.vue");
  return _sfc_setup$j ? _sfc_setup$j(props, ctx) : void 0;
};
const JetAuthenticationCardLogo = /* @__PURE__ */ _export_sfc(_sfc_main$j, [["ssrRender", _sfc_ssrRender$j]]);
const _sfc_main$i = defineComponent({
  components: {
    Head,
    JetAuthenticationCard,
    JetAuthenticationCardLogo,
    JetButton,
    JetInput,
    JetLabel,
    JetValidationErrors
  },
  data() {
    return {
      form: this.$inertia.form({
        password: ""
      })
    };
  },
  methods: {
    submit() {
      this.form.post(this.route("password.confirm"), {
        onFinish: () => this.form.reset()
      });
    }
  }
});
function _sfc_ssrRender$i(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_Head = resolveComponent("Head");
  const _component_jet_authentication_card = resolveComponent("jet-authentication-card");
  const _component_jet_authentication_card_logo = resolveComponent("jet-authentication-card-logo");
  const _component_jet_validation_errors = resolveComponent("jet-validation-errors");
  const _component_jet_label = resolveComponent("jet-label");
  const _component_jet_input = resolveComponent("jet-input");
  const _component_jet_button = resolveComponent("jet-button");
  _push(`<!--[-->`);
  _push(ssrRenderComponent(_component_Head, { title: "Secure Area" }, null, _parent));
  _push(ssrRenderComponent(_component_jet_authentication_card, null, {
    logo: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(_component_jet_authentication_card_logo, null, null, _parent2, _scopeId));
      } else {
        return [
          createVNode(_component_jet_authentication_card_logo)
        ];
      }
    }),
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<div class="mb-4 text-sm text-gray-600"${_scopeId}> This is a secure area of the application. Please confirm your password before continuing. </div>`);
        _push2(ssrRenderComponent(_component_jet_validation_errors, { class: "mb-4" }, null, _parent2, _scopeId));
        _push2(`<form${_scopeId}><div${_scopeId}>`);
        _push2(ssrRenderComponent(_component_jet_label, {
          for: "password",
          value: "Password"
        }, null, _parent2, _scopeId));
        _push2(ssrRenderComponent(_component_jet_input, {
          id: "password",
          type: "password",
          class: "mt-1 block w-full",
          modelValue: _ctx.form.password,
          "onUpdate:modelValue": ($event) => _ctx.form.password = $event,
          required: "",
          autocomplete: "current-password",
          autofocus: ""
        }, null, _parent2, _scopeId));
        _push2(`</div><div class="flex justify-end mt-4"${_scopeId}>`);
        _push2(ssrRenderComponent(_component_jet_button, {
          class: ["ml-4", { "opacity-25": _ctx.form.processing }],
          disabled: _ctx.form.processing
        }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(` Confirm `);
            } else {
              return [
                createTextVNode(" Confirm ")
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
        _push2(`</div></form>`);
      } else {
        return [
          createVNode("div", { class: "mb-4 text-sm text-gray-600" }, " This is a secure area of the application. Please confirm your password before continuing. "),
          createVNode(_component_jet_validation_errors, { class: "mb-4" }),
          createVNode("form", {
            onSubmit: withModifiers(_ctx.submit, ["prevent"])
          }, [
            createVNode("div", null, [
              createVNode(_component_jet_label, {
                for: "password",
                value: "Password"
              }),
              createVNode(_component_jet_input, {
                id: "password",
                type: "password",
                class: "mt-1 block w-full",
                modelValue: _ctx.form.password,
                "onUpdate:modelValue": ($event) => _ctx.form.password = $event,
                required: "",
                autocomplete: "current-password",
                autofocus: ""
              }, null, 8, ["modelValue", "onUpdate:modelValue"])
            ]),
            createVNode("div", { class: "flex justify-end mt-4" }, [
              createVNode(_component_jet_button, {
                class: ["ml-4", { "opacity-25": _ctx.form.processing }],
                disabled: _ctx.form.processing
              }, {
                default: withCtx(() => [
                  createTextVNode(" Confirm ")
                ]),
                _: 1
              }, 8, ["class", "disabled"])
            ])
          ], 40, ["onSubmit"])
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`<!--]-->`);
}
const _sfc_setup$i = _sfc_main$i.setup;
_sfc_main$i.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Auth/ConfirmPassword.vue");
  return _sfc_setup$i ? _sfc_setup$i(props, ctx) : void 0;
};
const ConfirmPassword = /* @__PURE__ */ _export_sfc(_sfc_main$i, [["ssrRender", _sfc_ssrRender$i]]);
const __vite_glob_0_5 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: ConfirmPassword
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$h = defineComponent({
  components: {
    Head,
    JetAuthenticationCard,
    JetAuthenticationCardLogo,
    JetButton,
    JetInput,
    JetLabel,
    JetValidationErrors
  },
  props: {
    status: String
  },
  data() {
    return {
      form: this.$inertia.form({
        email: ""
      })
    };
  },
  methods: {
    submit() {
      this.form.post(this.route("password.email"));
    }
  }
});
function _sfc_ssrRender$h(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_Head = resolveComponent("Head");
  const _component_jet_authentication_card = resolveComponent("jet-authentication-card");
  const _component_jet_authentication_card_logo = resolveComponent("jet-authentication-card-logo");
  const _component_jet_validation_errors = resolveComponent("jet-validation-errors");
  const _component_jet_label = resolveComponent("jet-label");
  const _component_jet_input = resolveComponent("jet-input");
  const _component_jet_button = resolveComponent("jet-button");
  _push(`<!--[-->`);
  _push(ssrRenderComponent(_component_Head, { title: "Forgot Password" }, null, _parent));
  _push(ssrRenderComponent(_component_jet_authentication_card, null, {
    logo: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(_component_jet_authentication_card_logo, null, null, _parent2, _scopeId));
      } else {
        return [
          createVNode(_component_jet_authentication_card_logo)
        ];
      }
    }),
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<div class="mb-4 text-sm text-gray-600"${_scopeId}> Forgot your password? No problem. Just let us know your email address and we will email you a password reset link that will allow you to choose a new one. </div>`);
        if (_ctx.status) {
          _push2(`<div class="mb-4 font-medium text-sm text-green-600"${_scopeId}>${ssrInterpolate(_ctx.status)}</div>`);
        } else {
          _push2(`<!---->`);
        }
        _push2(ssrRenderComponent(_component_jet_validation_errors, { class: "mb-4" }, null, _parent2, _scopeId));
        _push2(`<form${_scopeId}><div${_scopeId}>`);
        _push2(ssrRenderComponent(_component_jet_label, {
          for: "email",
          value: "Email"
        }, null, _parent2, _scopeId));
        _push2(ssrRenderComponent(_component_jet_input, {
          id: "email",
          type: "email",
          class: "mt-1 block w-full",
          modelValue: _ctx.form.email,
          "onUpdate:modelValue": ($event) => _ctx.form.email = $event,
          required: "",
          autofocus: ""
        }, null, _parent2, _scopeId));
        _push2(`</div><div class="flex items-center justify-end mt-4"${_scopeId}>`);
        _push2(ssrRenderComponent(_component_jet_button, {
          class: { "opacity-25": _ctx.form.processing },
          disabled: _ctx.form.processing
        }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(` Email Password Reset Link `);
            } else {
              return [
                createTextVNode(" Email Password Reset Link ")
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
        _push2(`</div></form>`);
      } else {
        return [
          createVNode("div", { class: "mb-4 text-sm text-gray-600" }, " Forgot your password? No problem. Just let us know your email address and we will email you a password reset link that will allow you to choose a new one. "),
          _ctx.status ? (openBlock(), createBlock("div", {
            key: 0,
            class: "mb-4 font-medium text-sm text-green-600"
          }, toDisplayString(_ctx.status), 1)) : createCommentVNode("", true),
          createVNode(_component_jet_validation_errors, { class: "mb-4" }),
          createVNode("form", {
            onSubmit: withModifiers(_ctx.submit, ["prevent"])
          }, [
            createVNode("div", null, [
              createVNode(_component_jet_label, {
                for: "email",
                value: "Email"
              }),
              createVNode(_component_jet_input, {
                id: "email",
                type: "email",
                class: "mt-1 block w-full",
                modelValue: _ctx.form.email,
                "onUpdate:modelValue": ($event) => _ctx.form.email = $event,
                required: "",
                autofocus: ""
              }, null, 8, ["modelValue", "onUpdate:modelValue"])
            ]),
            createVNode("div", { class: "flex items-center justify-end mt-4" }, [
              createVNode(_component_jet_button, {
                class: { "opacity-25": _ctx.form.processing },
                disabled: _ctx.form.processing
              }, {
                default: withCtx(() => [
                  createTextVNode(" Email Password Reset Link ")
                ]),
                _: 1
              }, 8, ["class", "disabled"])
            ])
          ], 40, ["onSubmit"])
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`<!--]-->`);
}
const _sfc_setup$h = _sfc_main$h.setup;
_sfc_main$h.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Auth/ForgotPassword.vue");
  return _sfc_setup$h ? _sfc_setup$h(props, ctx) : void 0;
};
const ForgotPassword = /* @__PURE__ */ _export_sfc(_sfc_main$h, [["ssrRender", _sfc_ssrRender$h]]);
const __vite_glob_0_6 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: ForgotPassword
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$g = defineComponent({
  components: {
    Head,
    AppLayout,
    JetAuthenticationCard,
    JetAuthenticationCardLogo,
    JetButton,
    JetInput,
    JetCheckbox,
    JetLabel,
    JetValidationErrors,
    Link
  },
  props: {
    canResetPassword: Boolean,
    status: String
  },
  data() {
    return {
      form: this.$inertia.form({
        email: "",
        password: "",
        remember: false
      })
    };
  },
  methods: {
    submit() {
      this.form.transform((data) => ({
        ...data,
        remember: this.form.remember ? "on" : ""
      })).post(this.route("login"), {
        onFinish: () => this.form.reset("password")
      });
    }
  }
});
function _sfc_ssrRender$g(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_Head = resolveComponent("Head");
  const _component_app_layout = resolveComponent("app-layout");
  const _component_jet_authentication_card = resolveComponent("jet-authentication-card");
  const _component_jet_authentication_card_logo = resolveComponent("jet-authentication-card-logo");
  const _component_jet_validation_errors = resolveComponent("jet-validation-errors");
  const _component_jet_label = resolveComponent("jet-label");
  const _component_jet_input = resolveComponent("jet-input");
  const _component_jet_checkbox = resolveComponent("jet-checkbox");
  const _component_Link = resolveComponent("Link");
  const _component_jet_button = resolveComponent("jet-button");
  _push(`<!--[-->`);
  _push(ssrRenderComponent(_component_Head, { title: "Log in" }, null, _parent));
  _push(ssrRenderComponent(_component_app_layout, { title: "Login" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(_component_jet_authentication_card, null, {
          logo: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(ssrRenderComponent(_component_jet_authentication_card_logo, null, null, _parent3, _scopeId2));
            } else {
              return [
                createVNode(_component_jet_authentication_card_logo)
              ];
            }
          }),
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(ssrRenderComponent(_component_jet_validation_errors, { class: "mb-4" }, null, _parent3, _scopeId2));
              if (_ctx.status) {
                _push3(`<div class="mb-4 text-sm font-medium text-green-600"${_scopeId2}>${ssrInterpolate(_ctx.status)}</div>`);
              } else {
                _push3(`<!---->`);
              }
              _push3(`<form${_scopeId2}><div${_scopeId2}>`);
              _push3(ssrRenderComponent(_component_jet_label, {
                for: "email",
                value: "Email"
              }, null, _parent3, _scopeId2));
              _push3(ssrRenderComponent(_component_jet_input, {
                id: "email",
                type: "email",
                class: "block w-full mt-1",
                modelValue: _ctx.form.email,
                "onUpdate:modelValue": ($event) => _ctx.form.email = $event,
                required: "",
                autofocus: ""
              }, null, _parent3, _scopeId2));
              _push3(`</div><div class="mt-4"${_scopeId2}>`);
              _push3(ssrRenderComponent(_component_jet_label, {
                for: "password",
                value: "Password"
              }, null, _parent3, _scopeId2));
              _push3(ssrRenderComponent(_component_jet_input, {
                id: "password",
                type: "password",
                class: "block w-full mt-1",
                modelValue: _ctx.form.password,
                "onUpdate:modelValue": ($event) => _ctx.form.password = $event,
                required: "",
                autocomplete: "current-password"
              }, null, _parent3, _scopeId2));
              _push3(`</div><div class="block mt-4"${_scopeId2}><label class="flex items-center"${_scopeId2}>`);
              _push3(ssrRenderComponent(_component_jet_checkbox, {
                name: "remember",
                checked: _ctx.form.remember,
                "onUpdate:checked": ($event) => _ctx.form.remember = $event
              }, null, _parent3, _scopeId2));
              _push3(`<span class="ml-2 text-sm text-gray-600 dark:text-gray-100"${_scopeId2}>Remember me</span></label></div><div class="flex items-center justify-end mt-4"${_scopeId2}>`);
              if (_ctx.canResetPassword) {
                _push3(ssrRenderComponent(_component_Link, {
                  href: _ctx.route("password.request"),
                  class: "text-sm text-gray-600 underline dark:text-white hover:text-gray-900"
                }, {
                  default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                    if (_push4) {
                      _push4(` Forgot your password? `);
                    } else {
                      return [
                        createTextVNode(" Forgot your password? ")
                      ];
                    }
                  }),
                  _: 1
                }, _parent3, _scopeId2));
              } else {
                _push3(`<!---->`);
              }
              _push3(ssrRenderComponent(_component_jet_button, {
                class: ["ml-4", { "opacity-25": _ctx.form.processing }],
                disabled: _ctx.form.processing
              }, {
                default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(` Log in `);
                  } else {
                    return [
                      createTextVNode(" Log in ")
                    ];
                  }
                }),
                _: 1
              }, _parent3, _scopeId2));
              _push3(`</div></form>`);
            } else {
              return [
                createVNode(_component_jet_validation_errors, { class: "mb-4" }),
                _ctx.status ? (openBlock(), createBlock("div", {
                  key: 0,
                  class: "mb-4 text-sm font-medium text-green-600"
                }, toDisplayString(_ctx.status), 1)) : createCommentVNode("", true),
                createVNode("form", {
                  onSubmit: withModifiers(_ctx.submit, ["prevent"])
                }, [
                  createVNode("div", null, [
                    createVNode(_component_jet_label, {
                      for: "email",
                      value: "Email"
                    }),
                    createVNode(_component_jet_input, {
                      id: "email",
                      type: "email",
                      class: "block w-full mt-1",
                      modelValue: _ctx.form.email,
                      "onUpdate:modelValue": ($event) => _ctx.form.email = $event,
                      required: "",
                      autofocus: ""
                    }, null, 8, ["modelValue", "onUpdate:modelValue"])
                  ]),
                  createVNode("div", { class: "mt-4" }, [
                    createVNode(_component_jet_label, {
                      for: "password",
                      value: "Password"
                    }),
                    createVNode(_component_jet_input, {
                      id: "password",
                      type: "password",
                      class: "block w-full mt-1",
                      modelValue: _ctx.form.password,
                      "onUpdate:modelValue": ($event) => _ctx.form.password = $event,
                      required: "",
                      autocomplete: "current-password"
                    }, null, 8, ["modelValue", "onUpdate:modelValue"])
                  ]),
                  createVNode("div", { class: "block mt-4" }, [
                    createVNode("label", { class: "flex items-center" }, [
                      createVNode(_component_jet_checkbox, {
                        name: "remember",
                        checked: _ctx.form.remember,
                        "onUpdate:checked": ($event) => _ctx.form.remember = $event
                      }, null, 8, ["checked", "onUpdate:checked"]),
                      createVNode("span", { class: "ml-2 text-sm text-gray-600 dark:text-gray-100" }, "Remember me")
                    ])
                  ]),
                  createVNode("div", { class: "flex items-center justify-end mt-4" }, [
                    _ctx.canResetPassword ? (openBlock(), createBlock(_component_Link, {
                      key: 0,
                      href: _ctx.route("password.request"),
                      class: "text-sm text-gray-600 underline dark:text-white hover:text-gray-900"
                    }, {
                      default: withCtx(() => [
                        createTextVNode(" Forgot your password? ")
                      ]),
                      _: 1
                    }, 8, ["href"])) : createCommentVNode("", true),
                    createVNode(_component_jet_button, {
                      class: ["ml-4", { "opacity-25": _ctx.form.processing }],
                      disabled: _ctx.form.processing
                    }, {
                      default: withCtx(() => [
                        createTextVNode(" Log in ")
                      ]),
                      _: 1
                    }, 8, ["class", "disabled"])
                  ])
                ], 40, ["onSubmit"])
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
      } else {
        return [
          createVNode(_component_jet_authentication_card, null, {
            logo: withCtx(() => [
              createVNode(_component_jet_authentication_card_logo)
            ]),
            default: withCtx(() => [
              createVNode(_component_jet_validation_errors, { class: "mb-4" }),
              _ctx.status ? (openBlock(), createBlock("div", {
                key: 0,
                class: "mb-4 text-sm font-medium text-green-600"
              }, toDisplayString(_ctx.status), 1)) : createCommentVNode("", true),
              createVNode("form", {
                onSubmit: withModifiers(_ctx.submit, ["prevent"])
              }, [
                createVNode("div", null, [
                  createVNode(_component_jet_label, {
                    for: "email",
                    value: "Email"
                  }),
                  createVNode(_component_jet_input, {
                    id: "email",
                    type: "email",
                    class: "block w-full mt-1",
                    modelValue: _ctx.form.email,
                    "onUpdate:modelValue": ($event) => _ctx.form.email = $event,
                    required: "",
                    autofocus: ""
                  }, null, 8, ["modelValue", "onUpdate:modelValue"])
                ]),
                createVNode("div", { class: "mt-4" }, [
                  createVNode(_component_jet_label, {
                    for: "password",
                    value: "Password"
                  }),
                  createVNode(_component_jet_input, {
                    id: "password",
                    type: "password",
                    class: "block w-full mt-1",
                    modelValue: _ctx.form.password,
                    "onUpdate:modelValue": ($event) => _ctx.form.password = $event,
                    required: "",
                    autocomplete: "current-password"
                  }, null, 8, ["modelValue", "onUpdate:modelValue"])
                ]),
                createVNode("div", { class: "block mt-4" }, [
                  createVNode("label", { class: "flex items-center" }, [
                    createVNode(_component_jet_checkbox, {
                      name: "remember",
                      checked: _ctx.form.remember,
                      "onUpdate:checked": ($event) => _ctx.form.remember = $event
                    }, null, 8, ["checked", "onUpdate:checked"]),
                    createVNode("span", { class: "ml-2 text-sm text-gray-600 dark:text-gray-100" }, "Remember me")
                  ])
                ]),
                createVNode("div", { class: "flex items-center justify-end mt-4" }, [
                  _ctx.canResetPassword ? (openBlock(), createBlock(_component_Link, {
                    key: 0,
                    href: _ctx.route("password.request"),
                    class: "text-sm text-gray-600 underline dark:text-white hover:text-gray-900"
                  }, {
                    default: withCtx(() => [
                      createTextVNode(" Forgot your password? ")
                    ]),
                    _: 1
                  }, 8, ["href"])) : createCommentVNode("", true),
                  createVNode(_component_jet_button, {
                    class: ["ml-4", { "opacity-25": _ctx.form.processing }],
                    disabled: _ctx.form.processing
                  }, {
                    default: withCtx(() => [
                      createTextVNode(" Log in ")
                    ]),
                    _: 1
                  }, 8, ["class", "disabled"])
                ])
              ], 40, ["onSubmit"])
            ]),
            _: 1
          })
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`<!--]-->`);
}
const _sfc_setup$g = _sfc_main$g.setup;
_sfc_main$g.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Auth/Login.vue");
  return _sfc_setup$g ? _sfc_setup$g(props, ctx) : void 0;
};
const Login = /* @__PURE__ */ _export_sfc(_sfc_main$g, [["ssrRender", _sfc_ssrRender$g]]);
const __vite_glob_0_7 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Login
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$f = defineComponent({
  components: {
    Head,
    AppLayout,
    JetAuthenticationCard,
    JetAuthenticationCardLogo,
    JetButton,
    JetInput,
    JetCheckbox,
    JetLabel,
    JetValidationErrors,
    Link
  },
  data() {
    return {
      form: this.$inertia.form({
        username: "",
        email: "",
        password: "",
        password_confirmation: "",
        terms: false
      })
    };
  },
  methods: {
    submit() {
      this.form.post(this.route("register"), {
        onFinish: () => this.form.reset("password", "password_confirmation")
      });
    }
  }
});
function _sfc_ssrRender$f(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_Head = resolveComponent("Head");
  const _component_app_layout = resolveComponent("app-layout");
  const _component_jet_authentication_card = resolveComponent("jet-authentication-card");
  const _component_jet_authentication_card_logo = resolveComponent("jet-authentication-card-logo");
  const _component_jet_validation_errors = resolveComponent("jet-validation-errors");
  const _component_jet_label = resolveComponent("jet-label");
  const _component_jet_input = resolveComponent("jet-input");
  const _component_jet_checkbox = resolveComponent("jet-checkbox");
  const _component_Link = resolveComponent("Link");
  const _component_jet_button = resolveComponent("jet-button");
  _push(`<!--[-->`);
  _push(ssrRenderComponent(_component_Head, { title: "Register" }, null, _parent));
  _push(ssrRenderComponent(_component_app_layout, { title: "Create an account" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(_component_jet_authentication_card, null, {
          logo: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(ssrRenderComponent(_component_jet_authentication_card_logo, null, null, _parent3, _scopeId2));
            } else {
              return [
                createVNode(_component_jet_authentication_card_logo)
              ];
            }
          }),
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(ssrRenderComponent(_component_jet_validation_errors, { class: "mb-4" }, null, _parent3, _scopeId2));
              _push3(`<form${_scopeId2}><div${_scopeId2}>`);
              _push3(ssrRenderComponent(_component_jet_label, {
                for: "username",
                value: "Username"
              }, null, _parent3, _scopeId2));
              _push3(ssrRenderComponent(_component_jet_input, {
                id: "username",
                type: "text",
                class: "block w-full mt-1",
                modelValue: _ctx.form.username,
                "onUpdate:modelValue": ($event) => _ctx.form.username = $event,
                required: "",
                autofocus: "",
                autocomplete: "name"
              }, null, _parent3, _scopeId2));
              _push3(`</div><div class="mt-4"${_scopeId2}>`);
              _push3(ssrRenderComponent(_component_jet_label, {
                for: "email",
                value: "Email"
              }, null, _parent3, _scopeId2));
              _push3(ssrRenderComponent(_component_jet_input, {
                id: "email",
                type: "email",
                class: "block w-full mt-1",
                modelValue: _ctx.form.email,
                "onUpdate:modelValue": ($event) => _ctx.form.email = $event,
                required: ""
              }, null, _parent3, _scopeId2));
              _push3(`</div><div class="mt-4"${_scopeId2}>`);
              _push3(ssrRenderComponent(_component_jet_label, {
                for: "password",
                value: "Password"
              }, null, _parent3, _scopeId2));
              _push3(ssrRenderComponent(_component_jet_input, {
                id: "password",
                type: "password",
                class: "block w-full mt-1",
                modelValue: _ctx.form.password,
                "onUpdate:modelValue": ($event) => _ctx.form.password = $event,
                required: "",
                autocomplete: "new-password"
              }, null, _parent3, _scopeId2));
              _push3(`</div><div class="mt-4"${_scopeId2}>`);
              _push3(ssrRenderComponent(_component_jet_label, {
                for: "password_confirmation",
                value: "Confirm Password"
              }, null, _parent3, _scopeId2));
              _push3(ssrRenderComponent(_component_jet_input, {
                id: "password_confirmation",
                type: "password",
                class: "block w-full mt-1",
                modelValue: _ctx.form.password_confirmation,
                "onUpdate:modelValue": ($event) => _ctx.form.password_confirmation = $event,
                required: "",
                autocomplete: "new-password"
              }, null, _parent3, _scopeId2));
              _push3(`</div>`);
              if (_ctx.$page.props.jetstream.hasTermsAndPrivacyPolicyFeature) {
                _push3(`<div class="mt-4"${_scopeId2}>`);
                _push3(ssrRenderComponent(_component_jet_label, { for: "terms" }, {
                  default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                    if (_push4) {
                      _push4(`<div class="flex items-center"${_scopeId3}>`);
                      _push4(ssrRenderComponent(_component_jet_checkbox, {
                        name: "terms",
                        id: "terms",
                        checked: _ctx.form.terms,
                        "onUpdate:checked": ($event) => _ctx.form.terms = $event
                      }, null, _parent4, _scopeId3));
                      _push4(`<div class="ml-2"${_scopeId3}> I agree to the <a target="_blank"${ssrRenderAttr("href", _ctx.route("terms.show"))} class="text-sm text-gray-600 underline hover:text-gray-900"${_scopeId3}>Terms of Service</a> and <a target="_blank"${ssrRenderAttr("href", _ctx.route("policy.show"))} class="text-sm text-gray-600 underline hover:text-gray-900"${_scopeId3}>Privacy Policy</a></div></div>`);
                    } else {
                      return [
                        createVNode("div", { class: "flex items-center" }, [
                          createVNode(_component_jet_checkbox, {
                            name: "terms",
                            id: "terms",
                            checked: _ctx.form.terms,
                            "onUpdate:checked": ($event) => _ctx.form.terms = $event
                          }, null, 8, ["checked", "onUpdate:checked"]),
                          createVNode("div", { class: "ml-2" }, [
                            createTextVNode(" I agree to the "),
                            createVNode("a", {
                              target: "_blank",
                              href: _ctx.route("terms.show"),
                              class: "text-sm text-gray-600 underline hover:text-gray-900"
                            }, "Terms of Service", 8, ["href"]),
                            createTextVNode(" and "),
                            createVNode("a", {
                              target: "_blank",
                              href: _ctx.route("policy.show"),
                              class: "text-sm text-gray-600 underline hover:text-gray-900"
                            }, "Privacy Policy", 8, ["href"])
                          ])
                        ])
                      ];
                    }
                  }),
                  _: 1
                }, _parent3, _scopeId2));
                _push3(`</div>`);
              } else {
                _push3(`<!---->`);
              }
              _push3(`<div class="flex items-center justify-end mt-4"${_scopeId2}>`);
              _push3(ssrRenderComponent(_component_Link, {
                href: _ctx.route("login"),
                class: "text-sm text-gray-600 underline dark:text-white hover:text-gray-900"
              }, {
                default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(` Already registered? `);
                  } else {
                    return [
                      createTextVNode(" Already registered? ")
                    ];
                  }
                }),
                _: 1
              }, _parent3, _scopeId2));
              _push3(ssrRenderComponent(_component_jet_button, {
                class: ["ml-4", { "opacity-25": _ctx.form.processing }],
                disabled: _ctx.form.processing
              }, {
                default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(` Register `);
                  } else {
                    return [
                      createTextVNode(" Register ")
                    ];
                  }
                }),
                _: 1
              }, _parent3, _scopeId2));
              _push3(`</div></form>`);
            } else {
              return [
                createVNode(_component_jet_validation_errors, { class: "mb-4" }),
                createVNode("form", {
                  onSubmit: withModifiers(_ctx.submit, ["prevent"])
                }, [
                  createVNode("div", null, [
                    createVNode(_component_jet_label, {
                      for: "username",
                      value: "Username"
                    }),
                    createVNode(_component_jet_input, {
                      id: "username",
                      type: "text",
                      class: "block w-full mt-1",
                      modelValue: _ctx.form.username,
                      "onUpdate:modelValue": ($event) => _ctx.form.username = $event,
                      required: "",
                      autofocus: "",
                      autocomplete: "name"
                    }, null, 8, ["modelValue", "onUpdate:modelValue"])
                  ]),
                  createVNode("div", { class: "mt-4" }, [
                    createVNode(_component_jet_label, {
                      for: "email",
                      value: "Email"
                    }),
                    createVNode(_component_jet_input, {
                      id: "email",
                      type: "email",
                      class: "block w-full mt-1",
                      modelValue: _ctx.form.email,
                      "onUpdate:modelValue": ($event) => _ctx.form.email = $event,
                      required: ""
                    }, null, 8, ["modelValue", "onUpdate:modelValue"])
                  ]),
                  createVNode("div", { class: "mt-4" }, [
                    createVNode(_component_jet_label, {
                      for: "password",
                      value: "Password"
                    }),
                    createVNode(_component_jet_input, {
                      id: "password",
                      type: "password",
                      class: "block w-full mt-1",
                      modelValue: _ctx.form.password,
                      "onUpdate:modelValue": ($event) => _ctx.form.password = $event,
                      required: "",
                      autocomplete: "new-password"
                    }, null, 8, ["modelValue", "onUpdate:modelValue"])
                  ]),
                  createVNode("div", { class: "mt-4" }, [
                    createVNode(_component_jet_label, {
                      for: "password_confirmation",
                      value: "Confirm Password"
                    }),
                    createVNode(_component_jet_input, {
                      id: "password_confirmation",
                      type: "password",
                      class: "block w-full mt-1",
                      modelValue: _ctx.form.password_confirmation,
                      "onUpdate:modelValue": ($event) => _ctx.form.password_confirmation = $event,
                      required: "",
                      autocomplete: "new-password"
                    }, null, 8, ["modelValue", "onUpdate:modelValue"])
                  ]),
                  _ctx.$page.props.jetstream.hasTermsAndPrivacyPolicyFeature ? (openBlock(), createBlock("div", {
                    key: 0,
                    class: "mt-4"
                  }, [
                    createVNode(_component_jet_label, { for: "terms" }, {
                      default: withCtx(() => [
                        createVNode("div", { class: "flex items-center" }, [
                          createVNode(_component_jet_checkbox, {
                            name: "terms",
                            id: "terms",
                            checked: _ctx.form.terms,
                            "onUpdate:checked": ($event) => _ctx.form.terms = $event
                          }, null, 8, ["checked", "onUpdate:checked"]),
                          createVNode("div", { class: "ml-2" }, [
                            createTextVNode(" I agree to the "),
                            createVNode("a", {
                              target: "_blank",
                              href: _ctx.route("terms.show"),
                              class: "text-sm text-gray-600 underline hover:text-gray-900"
                            }, "Terms of Service", 8, ["href"]),
                            createTextVNode(" and "),
                            createVNode("a", {
                              target: "_blank",
                              href: _ctx.route("policy.show"),
                              class: "text-sm text-gray-600 underline hover:text-gray-900"
                            }, "Privacy Policy", 8, ["href"])
                          ])
                        ])
                      ]),
                      _: 1
                    })
                  ])) : createCommentVNode("", true),
                  createVNode("div", { class: "flex items-center justify-end mt-4" }, [
                    createVNode(_component_Link, {
                      href: _ctx.route("login"),
                      class: "text-sm text-gray-600 underline dark:text-white hover:text-gray-900"
                    }, {
                      default: withCtx(() => [
                        createTextVNode(" Already registered? ")
                      ]),
                      _: 1
                    }, 8, ["href"]),
                    createVNode(_component_jet_button, {
                      class: ["ml-4", { "opacity-25": _ctx.form.processing }],
                      disabled: _ctx.form.processing
                    }, {
                      default: withCtx(() => [
                        createTextVNode(" Register ")
                      ]),
                      _: 1
                    }, 8, ["class", "disabled"])
                  ])
                ], 40, ["onSubmit"])
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
      } else {
        return [
          createVNode(_component_jet_authentication_card, null, {
            logo: withCtx(() => [
              createVNode(_component_jet_authentication_card_logo)
            ]),
            default: withCtx(() => [
              createVNode(_component_jet_validation_errors, { class: "mb-4" }),
              createVNode("form", {
                onSubmit: withModifiers(_ctx.submit, ["prevent"])
              }, [
                createVNode("div", null, [
                  createVNode(_component_jet_label, {
                    for: "username",
                    value: "Username"
                  }),
                  createVNode(_component_jet_input, {
                    id: "username",
                    type: "text",
                    class: "block w-full mt-1",
                    modelValue: _ctx.form.username,
                    "onUpdate:modelValue": ($event) => _ctx.form.username = $event,
                    required: "",
                    autofocus: "",
                    autocomplete: "name"
                  }, null, 8, ["modelValue", "onUpdate:modelValue"])
                ]),
                createVNode("div", { class: "mt-4" }, [
                  createVNode(_component_jet_label, {
                    for: "email",
                    value: "Email"
                  }),
                  createVNode(_component_jet_input, {
                    id: "email",
                    type: "email",
                    class: "block w-full mt-1",
                    modelValue: _ctx.form.email,
                    "onUpdate:modelValue": ($event) => _ctx.form.email = $event,
                    required: ""
                  }, null, 8, ["modelValue", "onUpdate:modelValue"])
                ]),
                createVNode("div", { class: "mt-4" }, [
                  createVNode(_component_jet_label, {
                    for: "password",
                    value: "Password"
                  }),
                  createVNode(_component_jet_input, {
                    id: "password",
                    type: "password",
                    class: "block w-full mt-1",
                    modelValue: _ctx.form.password,
                    "onUpdate:modelValue": ($event) => _ctx.form.password = $event,
                    required: "",
                    autocomplete: "new-password"
                  }, null, 8, ["modelValue", "onUpdate:modelValue"])
                ]),
                createVNode("div", { class: "mt-4" }, [
                  createVNode(_component_jet_label, {
                    for: "password_confirmation",
                    value: "Confirm Password"
                  }),
                  createVNode(_component_jet_input, {
                    id: "password_confirmation",
                    type: "password",
                    class: "block w-full mt-1",
                    modelValue: _ctx.form.password_confirmation,
                    "onUpdate:modelValue": ($event) => _ctx.form.password_confirmation = $event,
                    required: "",
                    autocomplete: "new-password"
                  }, null, 8, ["modelValue", "onUpdate:modelValue"])
                ]),
                _ctx.$page.props.jetstream.hasTermsAndPrivacyPolicyFeature ? (openBlock(), createBlock("div", {
                  key: 0,
                  class: "mt-4"
                }, [
                  createVNode(_component_jet_label, { for: "terms" }, {
                    default: withCtx(() => [
                      createVNode("div", { class: "flex items-center" }, [
                        createVNode(_component_jet_checkbox, {
                          name: "terms",
                          id: "terms",
                          checked: _ctx.form.terms,
                          "onUpdate:checked": ($event) => _ctx.form.terms = $event
                        }, null, 8, ["checked", "onUpdate:checked"]),
                        createVNode("div", { class: "ml-2" }, [
                          createTextVNode(" I agree to the "),
                          createVNode("a", {
                            target: "_blank",
                            href: _ctx.route("terms.show"),
                            class: "text-sm text-gray-600 underline hover:text-gray-900"
                          }, "Terms of Service", 8, ["href"]),
                          createTextVNode(" and "),
                          createVNode("a", {
                            target: "_blank",
                            href: _ctx.route("policy.show"),
                            class: "text-sm text-gray-600 underline hover:text-gray-900"
                          }, "Privacy Policy", 8, ["href"])
                        ])
                      ])
                    ]),
                    _: 1
                  })
                ])) : createCommentVNode("", true),
                createVNode("div", { class: "flex items-center justify-end mt-4" }, [
                  createVNode(_component_Link, {
                    href: _ctx.route("login"),
                    class: "text-sm text-gray-600 underline dark:text-white hover:text-gray-900"
                  }, {
                    default: withCtx(() => [
                      createTextVNode(" Already registered? ")
                    ]),
                    _: 1
                  }, 8, ["href"]),
                  createVNode(_component_jet_button, {
                    class: ["ml-4", { "opacity-25": _ctx.form.processing }],
                    disabled: _ctx.form.processing
                  }, {
                    default: withCtx(() => [
                      createTextVNode(" Register ")
                    ]),
                    _: 1
                  }, 8, ["class", "disabled"])
                ])
              ], 40, ["onSubmit"])
            ]),
            _: 1
          })
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`<!--]-->`);
}
const _sfc_setup$f = _sfc_main$f.setup;
_sfc_main$f.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Auth/Register.vue");
  return _sfc_setup$f ? _sfc_setup$f(props, ctx) : void 0;
};
const Register = /* @__PURE__ */ _export_sfc(_sfc_main$f, [["ssrRender", _sfc_ssrRender$f]]);
const __vite_glob_0_8 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Register
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$e = defineComponent({
  components: {
    Head,
    JetAuthenticationCard,
    JetAuthenticationCardLogo,
    JetButton,
    JetInput,
    JetLabel,
    JetValidationErrors
  },
  props: {
    email: String,
    token: String
  },
  data() {
    return {
      form: this.$inertia.form({
        token: this.token,
        email: this.email,
        password: "",
        password_confirmation: ""
      })
    };
  },
  methods: {
    submit() {
      this.form.post(this.route("password.update"), {
        onFinish: () => this.form.reset("password", "password_confirmation")
      });
    }
  }
});
function _sfc_ssrRender$e(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_Head = resolveComponent("Head");
  const _component_jet_authentication_card = resolveComponent("jet-authentication-card");
  const _component_jet_authentication_card_logo = resolveComponent("jet-authentication-card-logo");
  const _component_jet_validation_errors = resolveComponent("jet-validation-errors");
  const _component_jet_label = resolveComponent("jet-label");
  const _component_jet_input = resolveComponent("jet-input");
  const _component_jet_button = resolveComponent("jet-button");
  _push(`<!--[-->`);
  _push(ssrRenderComponent(_component_Head, { title: "Reset Password" }, null, _parent));
  _push(ssrRenderComponent(_component_jet_authentication_card, null, {
    logo: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(_component_jet_authentication_card_logo, null, null, _parent2, _scopeId));
      } else {
        return [
          createVNode(_component_jet_authentication_card_logo)
        ];
      }
    }),
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(_component_jet_validation_errors, { class: "mb-4" }, null, _parent2, _scopeId));
        _push2(`<form${_scopeId}><div${_scopeId}>`);
        _push2(ssrRenderComponent(_component_jet_label, {
          for: "email",
          value: "Email"
        }, null, _parent2, _scopeId));
        _push2(ssrRenderComponent(_component_jet_input, {
          id: "email",
          type: "email",
          class: "mt-1 block w-full",
          modelValue: _ctx.form.email,
          "onUpdate:modelValue": ($event) => _ctx.form.email = $event,
          required: "",
          autofocus: ""
        }, null, _parent2, _scopeId));
        _push2(`</div><div class="mt-4"${_scopeId}>`);
        _push2(ssrRenderComponent(_component_jet_label, {
          for: "password",
          value: "Password"
        }, null, _parent2, _scopeId));
        _push2(ssrRenderComponent(_component_jet_input, {
          id: "password",
          type: "password",
          class: "mt-1 block w-full",
          modelValue: _ctx.form.password,
          "onUpdate:modelValue": ($event) => _ctx.form.password = $event,
          required: "",
          autocomplete: "new-password"
        }, null, _parent2, _scopeId));
        _push2(`</div><div class="mt-4"${_scopeId}>`);
        _push2(ssrRenderComponent(_component_jet_label, {
          for: "password_confirmation",
          value: "Confirm Password"
        }, null, _parent2, _scopeId));
        _push2(ssrRenderComponent(_component_jet_input, {
          id: "password_confirmation",
          type: "password",
          class: "mt-1 block w-full",
          modelValue: _ctx.form.password_confirmation,
          "onUpdate:modelValue": ($event) => _ctx.form.password_confirmation = $event,
          required: "",
          autocomplete: "new-password"
        }, null, _parent2, _scopeId));
        _push2(`</div><div class="flex items-center justify-end mt-4"${_scopeId}>`);
        _push2(ssrRenderComponent(_component_jet_button, {
          class: { "opacity-25": _ctx.form.processing },
          disabled: _ctx.form.processing
        }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(` Reset Password `);
            } else {
              return [
                createTextVNode(" Reset Password ")
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
        _push2(`</div></form>`);
      } else {
        return [
          createVNode(_component_jet_validation_errors, { class: "mb-4" }),
          createVNode("form", {
            onSubmit: withModifiers(_ctx.submit, ["prevent"])
          }, [
            createVNode("div", null, [
              createVNode(_component_jet_label, {
                for: "email",
                value: "Email"
              }),
              createVNode(_component_jet_input, {
                id: "email",
                type: "email",
                class: "mt-1 block w-full",
                modelValue: _ctx.form.email,
                "onUpdate:modelValue": ($event) => _ctx.form.email = $event,
                required: "",
                autofocus: ""
              }, null, 8, ["modelValue", "onUpdate:modelValue"])
            ]),
            createVNode("div", { class: "mt-4" }, [
              createVNode(_component_jet_label, {
                for: "password",
                value: "Password"
              }),
              createVNode(_component_jet_input, {
                id: "password",
                type: "password",
                class: "mt-1 block w-full",
                modelValue: _ctx.form.password,
                "onUpdate:modelValue": ($event) => _ctx.form.password = $event,
                required: "",
                autocomplete: "new-password"
              }, null, 8, ["modelValue", "onUpdate:modelValue"])
            ]),
            createVNode("div", { class: "mt-4" }, [
              createVNode(_component_jet_label, {
                for: "password_confirmation",
                value: "Confirm Password"
              }),
              createVNode(_component_jet_input, {
                id: "password_confirmation",
                type: "password",
                class: "mt-1 block w-full",
                modelValue: _ctx.form.password_confirmation,
                "onUpdate:modelValue": ($event) => _ctx.form.password_confirmation = $event,
                required: "",
                autocomplete: "new-password"
              }, null, 8, ["modelValue", "onUpdate:modelValue"])
            ]),
            createVNode("div", { class: "flex items-center justify-end mt-4" }, [
              createVNode(_component_jet_button, {
                class: { "opacity-25": _ctx.form.processing },
                disabled: _ctx.form.processing
              }, {
                default: withCtx(() => [
                  createTextVNode(" Reset Password ")
                ]),
                _: 1
              }, 8, ["class", "disabled"])
            ])
          ], 40, ["onSubmit"])
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`<!--]-->`);
}
const _sfc_setup$e = _sfc_main$e.setup;
_sfc_main$e.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Auth/ResetPassword.vue");
  return _sfc_setup$e ? _sfc_setup$e(props, ctx) : void 0;
};
const ResetPassword = /* @__PURE__ */ _export_sfc(_sfc_main$e, [["ssrRender", _sfc_ssrRender$e]]);
const __vite_glob_0_9 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: ResetPassword
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$d = defineComponent({
  components: {
    Head,
    JetAuthenticationCard,
    JetAuthenticationCardLogo,
    JetButton,
    JetInput,
    JetLabel,
    JetValidationErrors
  },
  data() {
    return {
      recovery: false,
      form: this.$inertia.form({
        code: "",
        recovery_code: ""
      })
    };
  },
  methods: {
    toggleRecovery() {
      this.recovery ^= true;
      this.$nextTick(() => {
        if (this.recovery) {
          this.$refs.recovery_code.focus();
          this.form.code = "";
        } else {
          this.$refs.code.focus();
          this.form.recovery_code = "";
        }
      });
    },
    submit() {
      this.form.post(this.route("two-factor.login"));
    }
  }
});
function _sfc_ssrRender$d(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_Head = resolveComponent("Head");
  const _component_jet_authentication_card = resolveComponent("jet-authentication-card");
  const _component_jet_authentication_card_logo = resolveComponent("jet-authentication-card-logo");
  const _component_jet_validation_errors = resolveComponent("jet-validation-errors");
  const _component_jet_label = resolveComponent("jet-label");
  const _component_jet_input = resolveComponent("jet-input");
  const _component_jet_button = resolveComponent("jet-button");
  _push(`<!--[-->`);
  _push(ssrRenderComponent(_component_Head, { title: "Two-factor Confirmation" }, null, _parent));
  _push(ssrRenderComponent(_component_jet_authentication_card, null, {
    logo: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(_component_jet_authentication_card_logo, null, null, _parent2, _scopeId));
      } else {
        return [
          createVNode(_component_jet_authentication_card_logo)
        ];
      }
    }),
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<div class="mb-4 text-sm text-gray-600"${_scopeId}>`);
        if (!_ctx.recovery) {
          _push2(`<!--[--> Please confirm access to your account by entering the authentication code provided by your authenticator application. <!--]-->`);
        } else {
          _push2(`<!--[--> Please confirm access to your account by entering one of your emergency recovery codes. <!--]-->`);
        }
        _push2(`</div>`);
        _push2(ssrRenderComponent(_component_jet_validation_errors, { class: "mb-4" }, null, _parent2, _scopeId));
        _push2(`<form${_scopeId}>`);
        if (!_ctx.recovery) {
          _push2(`<div${_scopeId}>`);
          _push2(ssrRenderComponent(_component_jet_label, {
            for: "code",
            value: "Code"
          }, null, _parent2, _scopeId));
          _push2(ssrRenderComponent(_component_jet_input, {
            ref: "code",
            id: "code",
            type: "text",
            inputmode: "numeric",
            class: "mt-1 block w-full",
            modelValue: _ctx.form.code,
            "onUpdate:modelValue": ($event) => _ctx.form.code = $event,
            autofocus: "",
            autocomplete: "one-time-code"
          }, null, _parent2, _scopeId));
          _push2(`</div>`);
        } else {
          _push2(`<div${_scopeId}>`);
          _push2(ssrRenderComponent(_component_jet_label, {
            for: "recovery_code",
            value: "Recovery Code"
          }, null, _parent2, _scopeId));
          _push2(ssrRenderComponent(_component_jet_input, {
            ref: "recovery_code",
            id: "recovery_code",
            type: "text",
            class: "mt-1 block w-full",
            modelValue: _ctx.form.recovery_code,
            "onUpdate:modelValue": ($event) => _ctx.form.recovery_code = $event,
            autocomplete: "one-time-code"
          }, null, _parent2, _scopeId));
          _push2(`</div>`);
        }
        _push2(`<div class="flex items-center justify-end mt-4"${_scopeId}><button type="button" class="text-sm text-gray-600 hover:text-gray-900 underline cursor-pointer"${_scopeId}>`);
        if (!_ctx.recovery) {
          _push2(`<!--[--> Use a recovery code <!--]-->`);
        } else {
          _push2(`<!--[--> Use an authentication code <!--]-->`);
        }
        _push2(`</button>`);
        _push2(ssrRenderComponent(_component_jet_button, {
          class: ["ml-4", { "opacity-25": _ctx.form.processing }],
          disabled: _ctx.form.processing
        }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(` Log in `);
            } else {
              return [
                createTextVNode(" Log in ")
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
        _push2(`</div></form>`);
      } else {
        return [
          createVNode("div", { class: "mb-4 text-sm text-gray-600" }, [
            !_ctx.recovery ? (openBlock(), createBlock(Fragment, { key: 0 }, [
              createTextVNode(" Please confirm access to your account by entering the authentication code provided by your authenticator application. ")
            ], 64)) : (openBlock(), createBlock(Fragment, { key: 1 }, [
              createTextVNode(" Please confirm access to your account by entering one of your emergency recovery codes. ")
            ], 64))
          ]),
          createVNode(_component_jet_validation_errors, { class: "mb-4" }),
          createVNode("form", {
            onSubmit: withModifiers(_ctx.submit, ["prevent"])
          }, [
            !_ctx.recovery ? (openBlock(), createBlock("div", { key: 0 }, [
              createVNode(_component_jet_label, {
                for: "code",
                value: "Code"
              }),
              createVNode(_component_jet_input, {
                ref: "code",
                id: "code",
                type: "text",
                inputmode: "numeric",
                class: "mt-1 block w-full",
                modelValue: _ctx.form.code,
                "onUpdate:modelValue": ($event) => _ctx.form.code = $event,
                autofocus: "",
                autocomplete: "one-time-code"
              }, null, 8, ["modelValue", "onUpdate:modelValue"])
            ])) : (openBlock(), createBlock("div", { key: 1 }, [
              createVNode(_component_jet_label, {
                for: "recovery_code",
                value: "Recovery Code"
              }),
              createVNode(_component_jet_input, {
                ref: "recovery_code",
                id: "recovery_code",
                type: "text",
                class: "mt-1 block w-full",
                modelValue: _ctx.form.recovery_code,
                "onUpdate:modelValue": ($event) => _ctx.form.recovery_code = $event,
                autocomplete: "one-time-code"
              }, null, 8, ["modelValue", "onUpdate:modelValue"])
            ])),
            createVNode("div", { class: "flex items-center justify-end mt-4" }, [
              createVNode("button", {
                type: "button",
                class: "text-sm text-gray-600 hover:text-gray-900 underline cursor-pointer",
                onClick: withModifiers(_ctx.toggleRecovery, ["prevent"])
              }, [
                !_ctx.recovery ? (openBlock(), createBlock(Fragment, { key: 0 }, [
                  createTextVNode(" Use a recovery code ")
                ], 64)) : (openBlock(), createBlock(Fragment, { key: 1 }, [
                  createTextVNode(" Use an authentication code ")
                ], 64))
              ], 8, ["onClick"]),
              createVNode(_component_jet_button, {
                class: ["ml-4", { "opacity-25": _ctx.form.processing }],
                disabled: _ctx.form.processing
              }, {
                default: withCtx(() => [
                  createTextVNode(" Log in ")
                ]),
                _: 1
              }, 8, ["class", "disabled"])
            ])
          ], 40, ["onSubmit"])
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`<!--]-->`);
}
const _sfc_setup$d = _sfc_main$d.setup;
_sfc_main$d.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Auth/TwoFactorChallenge.vue");
  return _sfc_setup$d ? _sfc_setup$d(props, ctx) : void 0;
};
const TwoFactorChallenge = /* @__PURE__ */ _export_sfc(_sfc_main$d, [["ssrRender", _sfc_ssrRender$d]]);
const __vite_glob_0_10 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: TwoFactorChallenge
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$c = defineComponent({
  components: {
    Head,
    JetAuthenticationCard,
    JetAuthenticationCardLogo,
    JetButton,
    Link
  },
  props: {
    status: String
  },
  data() {
    return {
      form: this.$inertia.form()
    };
  },
  methods: {
    submit() {
      this.form.post(this.route("verification.send"));
    }
  },
  computed: {
    verificationLinkSent() {
      return this.status === "verification-link-sent";
    }
  }
});
function _sfc_ssrRender$c(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_Head = resolveComponent("Head");
  const _component_jet_authentication_card = resolveComponent("jet-authentication-card");
  const _component_jet_authentication_card_logo = resolveComponent("jet-authentication-card-logo");
  const _component_jet_button = resolveComponent("jet-button");
  const _component_Link = resolveComponent("Link");
  _push(`<!--[-->`);
  _push(ssrRenderComponent(_component_Head, { title: "Email Verification" }, null, _parent));
  _push(ssrRenderComponent(_component_jet_authentication_card, null, {
    logo: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(_component_jet_authentication_card_logo, null, null, _parent2, _scopeId));
      } else {
        return [
          createVNode(_component_jet_authentication_card_logo)
        ];
      }
    }),
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<div class="mb-4 text-sm text-gray-600"${_scopeId}> Thanks for signing up! Before getting started, could you verify your email address by clicking on the link we just emailed to you? If you didn&#39;t receive the email, we will gladly send you another. </div>`);
        if (_ctx.verificationLinkSent) {
          _push2(`<div class="mb-4 font-medium text-sm text-green-600"${_scopeId}> A new verification link has been sent to the email address you provided during registration. </div>`);
        } else {
          _push2(`<!---->`);
        }
        _push2(`<form${_scopeId}><div class="mt-4 flex items-center justify-between"${_scopeId}>`);
        _push2(ssrRenderComponent(_component_jet_button, {
          class: { "opacity-25": _ctx.form.processing },
          disabled: _ctx.form.processing
        }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(` Resend Verification Email `);
            } else {
              return [
                createTextVNode(" Resend Verification Email ")
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
        _push2(ssrRenderComponent(_component_Link, {
          href: _ctx.route("logout"),
          method: "post",
          as: "button",
          class: "underline text-sm text-gray-600 hover:text-gray-900"
        }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(`Log Out`);
            } else {
              return [
                createTextVNode("Log Out")
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
        _push2(`</div></form>`);
      } else {
        return [
          createVNode("div", { class: "mb-4 text-sm text-gray-600" }, " Thanks for signing up! Before getting started, could you verify your email address by clicking on the link we just emailed to you? If you didn't receive the email, we will gladly send you another. "),
          _ctx.verificationLinkSent ? (openBlock(), createBlock("div", {
            key: 0,
            class: "mb-4 font-medium text-sm text-green-600"
          }, " A new verification link has been sent to the email address you provided during registration. ")) : createCommentVNode("", true),
          createVNode("form", {
            onSubmit: withModifiers(_ctx.submit, ["prevent"])
          }, [
            createVNode("div", { class: "mt-4 flex items-center justify-between" }, [
              createVNode(_component_jet_button, {
                class: { "opacity-25": _ctx.form.processing },
                disabled: _ctx.form.processing
              }, {
                default: withCtx(() => [
                  createTextVNode(" Resend Verification Email ")
                ]),
                _: 1
              }, 8, ["class", "disabled"]),
              createVNode(_component_Link, {
                href: _ctx.route("logout"),
                method: "post",
                as: "button",
                class: "underline text-sm text-gray-600 hover:text-gray-900"
              }, {
                default: withCtx(() => [
                  createTextVNode("Log Out")
                ]),
                _: 1
              }, 8, ["href"])
            ])
          ], 40, ["onSubmit"])
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`<!--]-->`);
}
const _sfc_setup$c = _sfc_main$c.setup;
_sfc_main$c.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Auth/VerifyEmail.vue");
  return _sfc_setup$c ? _sfc_setup$c(props, ctx) : void 0;
};
const VerifyEmail = /* @__PURE__ */ _export_sfc(_sfc_main$c, [["ssrRender", _sfc_ssrRender$c]]);
const __vite_glob_0_11 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: VerifyEmail
}, Symbol.toStringTag, { value: "Module" }));
const { toClipboard: toClipboard$1 } = useClipboard();
const _sfc_main$b = defineComponent({
  props: ["config"],
  components: {
    Modal,
    JetActionMessage,
    JetSecondaryButton,
    JetButton
  },
  data() {
    return {
      showModal: false,
      copied: false
    };
  },
  methods: {
    goToConfigPage() {
      this.$inertia.visit(route("configuration.show", this.config.uuid));
    },
    closeModal() {
      this.showModal = false;
      this.copied = false;
    },
    formatDate(dateString) {
      return dayjs(dateString).format("DD/MM/YYYY");
    },
    async copy() {
      try {
        await toClipboard$1(this.config.code);
        this.copied = true;
      } catch (e) {
        console.error(e);
      }
    }
  }
});
function _sfc_ssrRender$b(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  var _a;
  const _component_jet_secondary_button = resolveComponent("jet-secondary-button");
  const _component_jet_button = resolveComponent("jet-button");
  const _component_modal = resolveComponent("modal");
  const _component_jet_action_message = resolveComponent("jet-action-message");
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "px-6 py-3 bg-white rounded dark:bg-slate-500" }, _attrs))}><div class="lg:flex lg:items-center lg:justify-between"><div class="flex-1 min-w-0"><h2 class="text-2xl font-bold leading-7 text-gray-900 cursor-pointer dark:text-gray-100 sm:text-3xl sm:truncate">${ssrInterpolate(_ctx.config.title)}</h2><div><p class="mt-1 leading-5 text-gray-500 whitespace-pre dark:text-white line-clamp-1">${_ctx.config.description}</p></div><div class="flex flex-col mt-2 sm:flex-row sm:flex-wrap sm:space-x-6" title="category"><div class="flex items-center mt-2 text-sm text-gray-500 dark:text-gray-300"><img class="flex-shrink-0 mr-1.5 h-6 w-6 text-gray-400 dark:text-gray-200"${ssrRenderAttr("src", "/icons/" + _ctx.config.category.icon_path)}${ssrRenderAttr("alt", _ctx.config.category.title)}> ${ssrInterpolate(_ctx.config.category.title)}</div><div class="flex items-center mt-2 text-sm text-gray-500 dark:text-gray-300" title="author"><svg xmlns="http://www.w3.org/2000/svg" class="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400 dark:text-gray-200" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path></svg> ${ssrInterpolate(_ctx.config.user.username)}</div><div class="flex items-center mt-2 text-sm text-gray-500 uppercase dark:text-gray-300" title="language"><svg xmlns="http://www.w3.org/2000/svg" class="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400 dark:text-gray-200" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129"></path></svg> ${ssrInterpolate(_ctx.config.language)}</div><div class="flex items-center mt-2 text-sm text-gray-500 dark:text-gray-300" title="last updated on:"><svg xmlns="http://www.w3.org/2000/svg" class="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400 dark:text-gray-200" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg> ${ssrInterpolate(_ctx.formatDate(_ctx.config.updated_at))}</div><div class="flex items-center mt-2 text-sm text-gray-500 dark:text-gray-300" title="Likes Count"><svg class="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400 dark:text-gray-200" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"></path></svg> ${ssrInterpolate(((_a = _ctx.config.like_counter) == null ? void 0 : _a.count) || 0)}</div></div></div><div class="flex mt-5 space-x-2 lg:mt-0 lg:ml-4">`);
  _push(ssrRenderComponent(_component_jet_secondary_button, { onClick: _ctx.goToConfigPage }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(` Detail `);
      } else {
        return [
          createTextVNode(" Detail ")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_jet_button, {
    onClick: ($event) => _ctx.showModal = true
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(` Get Config `);
      } else {
        return [
          createTextVNode(" Get Config ")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div></div>`);
  _push(ssrRenderComponent(_component_modal, {
    show: _ctx.showModal,
    onClose: _ctx.closeModal,
    "max-width": "md"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<div class="p-10"${_scopeId}><div class="prose break-words truncate whitespace-normal mb-14"${_scopeId}>${_ctx.config.formatted_description}</div><div class="flex items-center justify-end mb-4"${_scopeId}>`);
        _push2(ssrRenderComponent(_component_jet_action_message, {
          on: _ctx.copied,
          class: "mr-3"
        }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(` Copied ! `);
            } else {
              return [
                createTextVNode(" Copied ! ")
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
        _push2(`<button${_scopeId}><svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"${_scopeId}><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3"${_scopeId}></path></svg></button></div><pre class="p-2 overflow-auto text-sm bg-gray-100 border border-gray-300 rounded-md"${_scopeId}>${ssrInterpolate(_ctx.config.code)}</pre></div>`);
      } else {
        return [
          createVNode("div", { class: "p-10" }, [
            createVNode("div", {
              class: "prose break-words truncate whitespace-normal mb-14",
              innerHTML: _ctx.config.formatted_description
            }, null, 8, ["innerHTML"]),
            createVNode("div", { class: "flex items-center justify-end mb-4" }, [
              createVNode(_component_jet_action_message, {
                on: _ctx.copied,
                class: "mr-3"
              }, {
                default: withCtx(() => [
                  createTextVNode(" Copied ! ")
                ]),
                _: 1
              }, 8, ["on"]),
              createVNode("button", { onClick: _ctx.copy }, [
                (openBlock(), createBlock("svg", {
                  xmlns: "http://www.w3.org/2000/svg",
                  class: "w-5 h-5",
                  fill: "none",
                  viewBox: "0 0 24 24",
                  stroke: "currentColor"
                }, [
                  createVNode("path", {
                    "stroke-linecap": "round",
                    "stroke-linejoin": "round",
                    "stroke-width": "2",
                    d: "M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3"
                  })
                ]))
              ], 8, ["onClick"])
            ]),
            createVNode("pre", {
              class: "p-2 overflow-auto text-sm bg-gray-100 border border-gray-300 rounded-md",
              textContent: toDisplayString(_ctx.config.code)
            }, null, 8, ["textContent"])
          ])
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div>`);
}
const _sfc_setup$b = _sfc_main$b.setup;
_sfc_main$b.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/GibberishConfig.vue");
  return _sfc_setup$b ? _sfc_setup$b(props, ctx) : void 0;
};
const __unplugin_components_0 = /* @__PURE__ */ _export_sfc(_sfc_main$b, [["ssrRender", _sfc_ssrRender$b]]);
const _sfc_main$a = defineComponent({
  props: ["configurations", "categories"],
  components: {
    AppLayout,
    JetInput,
    JetDropdown,
    JetLabel,
    JetCheckbox,
    GibberishConfig: __unplugin_components_0
  },
  computed: {
    selectedCategoryIds() {
      return Object.keys(this.filters.categories).filter((key) => this.filters.categories[key]).map((id) => parseInt(id));
    },
    filteredConfigurations() {
      return this.configurations.filter((config) => {
        if (this.filters.search) {
          return config.title.toLowerCase().includes(this.filters.search.toLowerCase()) || config.description.toLowerCase().includes(this.filters.search.toLowerCase());
        }
        return true;
      }).filter((config) => {
        if (this.filters.languages.fr && config.language === "fr") {
          return true;
        }
        if (this.filters.languages.de && config.language === "de") {
          return true;
        }
        if (this.filters.languages.en && config.language === "en") {
          return true;
        }
        return false;
      }).filter((config) => {
        if (this.selectedCategoryIds.length) {
          return this.selectedCategoryIds.includes(config.category_id);
        }
        return true;
      });
    }
  },
  data() {
    return {
      filters: {
        languages: {
          fr: true,
          de: true,
          en: true
        },
        categories: {}
      }
    };
  }
});
function _sfc_ssrRender$a(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_Head = resolveComponent("Head");
  const _component_app_layout = resolveComponent("app-layout");
  const _component_jet_input = resolveComponent("jet-input");
  const _component_jet_label = resolveComponent("jet-label");
  const _component_jet_checkbox = resolveComponent("jet-checkbox");
  const _component_jet_dropdown = resolveComponent("jet-dropdown");
  const _component_gibberish_config = __unplugin_components_0;
  _push(`<!--[-->`);
  _push(ssrRenderComponent(_component_Head, { title: "Latest Configs" }, null, _parent));
  _push(ssrRenderComponent(_component_app_layout, { title: "All Configs" }, {
    header: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<h2 class="text-xl font-semibold leading-tight text-gray-800 dark:text-white"${_scopeId}> All Configs </h2>`);
      } else {
        return [
          createVNode("h2", { class: "text-xl font-semibold leading-tight text-gray-800 dark:text-white" }, " All Configs ")
        ];
      }
    }),
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<div class="py-12"${_scopeId}><div class="mx-auto max-w-7xl sm:px-6 lg:px-8"${_scopeId}><div class="flex items-center space-x-8"${_scopeId}><div class="relative block grow"${_scopeId}><div class="absolute inset-y-0 left-0 flex items-center px-2"${_scopeId}><svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 text-gray-400 dark:text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"${_scopeId}><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"${_scopeId}></path></svg></div>`);
        _push2(ssrRenderComponent(_component_jet_input, {
          id: "search",
          placeholder: "Search...",
          type: "search",
          class: "block w-full pl-10",
          modelValue: _ctx.filters.search,
          "onUpdate:modelValue": ($event) => _ctx.filters.search = $event,
          autofocus: ""
        }, null, _parent2, _scopeId));
        _push2(`</div><div class="items-center hidden space-x-5 md:flex"${_scopeId}>`);
        _push2(ssrRenderComponent(_component_jet_label, null, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(`Languages:`);
            } else {
              return [
                createTextVNode("Languages:")
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
        _push2(`<label for="lang.fr" class="flex items-center"${_scopeId}>`);
        _push2(ssrRenderComponent(_component_jet_checkbox, {
          name: "lang.fr",
          id: "lang.fr",
          checked: _ctx.filters.languages.fr,
          "onUpdate:checked": ($event) => _ctx.filters.languages.fr = $event
        }, null, _parent2, _scopeId));
        _push2(`<div class="ml-1 uppercase dark:text-white"${_scopeId}> FR </div></label><label for="lang.de" class="flex items-center"${_scopeId}>`);
        _push2(ssrRenderComponent(_component_jet_checkbox, {
          name: "lang.de",
          id: "lang.de",
          checked: _ctx.filters.languages.de,
          "onUpdate:checked": ($event) => _ctx.filters.languages.de = $event
        }, null, _parent2, _scopeId));
        _push2(`<div class="ml-1 uppercase dark:text-white"${_scopeId}> de </div></label><label for="lang.en" class="flex items-center"${_scopeId}>`);
        _push2(ssrRenderComponent(_component_jet_checkbox, {
          name: "lang.en",
          id: "lang.en",
          checked: _ctx.filters.languages.en,
          "onUpdate:checked": ($event) => _ctx.filters.languages.en = $event
        }, null, _parent2, _scopeId));
        _push2(`<div class="ml-1 uppercase dark:text-white"${_scopeId}> en </div></label></div>`);
        _push2(ssrRenderComponent(_component_jet_dropdown, {
          align: "right",
          width: "60"
        }, {
          trigger: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(`<span class="inline-flex rounded-md"${_scopeId2}><button type="button" class="inline-flex items-center px-3 py-2 text-sm font-medium leading-4 text-gray-500 transition bg-white border border-transparent rounded-md hover:bg-gray-50 hover:text-gray-700 focus:outline-none focus:bg-gray-50 active:bg-gray-50"${_scopeId2}> Categories `);
              if (_ctx.selectedCategoryIds.length) {
                _push3(`<span${_scopeId2}> (${ssrInterpolate(_ctx.selectedCategoryIds.length)}) </span>`);
              } else {
                _push3(`<!---->`);
              }
              _push3(`<svg xmlns="http://www.w3.org/2000/svg" class="ml-2 -mr-0.5 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"${_scopeId2}><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"${_scopeId2}></path></svg></button></span>`);
            } else {
              return [
                createVNode("span", { class: "inline-flex rounded-md" }, [
                  createVNode("button", {
                    type: "button",
                    class: "inline-flex items-center px-3 py-2 text-sm font-medium leading-4 text-gray-500 transition bg-white border border-transparent rounded-md hover:bg-gray-50 hover:text-gray-700 focus:outline-none focus:bg-gray-50 active:bg-gray-50"
                  }, [
                    createTextVNode(" Categories "),
                    _ctx.selectedCategoryIds.length ? (openBlock(), createBlock("span", { key: 0 }, " (" + toDisplayString(_ctx.selectedCategoryIds.length) + ") ", 1)) : createCommentVNode("", true),
                    (openBlock(), createBlock("svg", {
                      xmlns: "http://www.w3.org/2000/svg",
                      class: "ml-2 -mr-0.5 h-4 w-4",
                      fill: "none",
                      viewBox: "0 0 24 24",
                      stroke: "currentColor"
                    }, [
                      createVNode("path", {
                        "stroke-linecap": "round",
                        "stroke-linejoin": "round",
                        "stroke-width": "2",
                        d: "M19 9l-7 7-7-7"
                      })
                    ]))
                  ])
                ])
              ];
            }
          }),
          content: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(`<div class="w-56 px-4 py-2 space-y-2 overflow-auto text-sm max-h-96"${_scopeId2}><!--[-->`);
              ssrRenderList(_ctx.categories, (category) => {
                _push3(`<label${ssrRenderAttr("for", category.id)} class="flex items-center"${_scopeId2}>`);
                _push3(ssrRenderComponent(_component_jet_checkbox, {
                  name: category.id,
                  id: category.id,
                  checked: _ctx.filters.categories[category.id],
                  "onUpdate:checked": ($event) => _ctx.filters.categories[category.id] = $event
                }, null, _parent3, _scopeId2));
                _push3(`<div class="ml-2 uppercase"${_scopeId2}>${ssrInterpolate(category.title)}</div></label>`);
              });
              _push3(`<!--]--></div>`);
            } else {
              return [
                createVNode("div", { class: "w-56 px-4 py-2 space-y-2 overflow-auto text-sm max-h-96" }, [
                  (openBlock(true), createBlock(Fragment, null, renderList(_ctx.categories, (category) => {
                    return openBlock(), createBlock("label", {
                      for: category.id,
                      key: category.id,
                      class: "flex items-center"
                    }, [
                      createVNode(_component_jet_checkbox, {
                        name: category.id,
                        id: category.id,
                        checked: _ctx.filters.categories[category.id],
                        "onUpdate:checked": ($event) => _ctx.filters.categories[category.id] = $event
                      }, null, 8, ["name", "id", "checked", "onUpdate:checked"]),
                      createVNode("div", { class: "ml-2 uppercase" }, toDisplayString(category.title), 1)
                    ], 8, ["for"]);
                  }), 128))
                ])
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
        _push2(`</div><div class="grid grid-cols-1 gap-4 mt-8"${_scopeId}><!--[-->`);
        ssrRenderList(_ctx.filteredConfigurations, (config) => {
          _push2(ssrRenderComponent(_component_gibberish_config, {
            key: config.id,
            config
          }, null, _parent2, _scopeId));
        });
        _push2(`<!--]--></div>`);
        if (_ctx.filteredConfigurations.length === 0) {
          _push2(`<div class="text-center"${_scopeId}><svg class="w-12 h-12 mx-auto text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"${_scopeId}><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"${_scopeId}></path></svg><h3 class="mt-2 text-sm font-medium text-gray-900"${_scopeId}>Nothing found.</h3><p class="mt-1 text-sm text-gray-500"${_scopeId}>No luck</p></div>`);
        } else {
          _push2(`<!---->`);
        }
        _push2(`</div></div>`);
      } else {
        return [
          createVNode("div", { class: "py-12" }, [
            createVNode("div", { class: "mx-auto max-w-7xl sm:px-6 lg:px-8" }, [
              createVNode("div", { class: "flex items-center space-x-8" }, [
                createVNode("div", { class: "relative block grow" }, [
                  createVNode("div", { class: "absolute inset-y-0 left-0 flex items-center px-2" }, [
                    (openBlock(), createBlock("svg", {
                      xmlns: "http://www.w3.org/2000/svg",
                      class: "w-5 h-5 text-gray-400 dark:text-white",
                      fill: "none",
                      viewBox: "0 0 24 24",
                      stroke: "currentColor"
                    }, [
                      createVNode("path", {
                        "stroke-linecap": "round",
                        "stroke-linejoin": "round",
                        "stroke-width": "2",
                        d: "M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                      })
                    ]))
                  ]),
                  createVNode(_component_jet_input, {
                    id: "search",
                    placeholder: "Search...",
                    type: "search",
                    class: "block w-full pl-10",
                    modelValue: _ctx.filters.search,
                    "onUpdate:modelValue": ($event) => _ctx.filters.search = $event,
                    autofocus: ""
                  }, null, 8, ["modelValue", "onUpdate:modelValue"])
                ]),
                createVNode("div", { class: "items-center hidden space-x-5 md:flex" }, [
                  createVNode(_component_jet_label, null, {
                    default: withCtx(() => [
                      createTextVNode("Languages:")
                    ]),
                    _: 1
                  }),
                  createVNode("label", {
                    for: "lang.fr",
                    class: "flex items-center"
                  }, [
                    createVNode(_component_jet_checkbox, {
                      name: "lang.fr",
                      id: "lang.fr",
                      checked: _ctx.filters.languages.fr,
                      "onUpdate:checked": ($event) => _ctx.filters.languages.fr = $event
                    }, null, 8, ["checked", "onUpdate:checked"]),
                    createVNode("div", { class: "ml-1 uppercase dark:text-white" }, " FR ")
                  ]),
                  createVNode("label", {
                    for: "lang.de",
                    class: "flex items-center"
                  }, [
                    createVNode(_component_jet_checkbox, {
                      name: "lang.de",
                      id: "lang.de",
                      checked: _ctx.filters.languages.de,
                      "onUpdate:checked": ($event) => _ctx.filters.languages.de = $event
                    }, null, 8, ["checked", "onUpdate:checked"]),
                    createVNode("div", { class: "ml-1 uppercase dark:text-white" }, " de ")
                  ]),
                  createVNode("label", {
                    for: "lang.en",
                    class: "flex items-center"
                  }, [
                    createVNode(_component_jet_checkbox, {
                      name: "lang.en",
                      id: "lang.en",
                      checked: _ctx.filters.languages.en,
                      "onUpdate:checked": ($event) => _ctx.filters.languages.en = $event
                    }, null, 8, ["checked", "onUpdate:checked"]),
                    createVNode("div", { class: "ml-1 uppercase dark:text-white" }, " en ")
                  ])
                ]),
                createVNode(_component_jet_dropdown, {
                  align: "right",
                  width: "60"
                }, {
                  trigger: withCtx(() => [
                    createVNode("span", { class: "inline-flex rounded-md" }, [
                      createVNode("button", {
                        type: "button",
                        class: "inline-flex items-center px-3 py-2 text-sm font-medium leading-4 text-gray-500 transition bg-white border border-transparent rounded-md hover:bg-gray-50 hover:text-gray-700 focus:outline-none focus:bg-gray-50 active:bg-gray-50"
                      }, [
                        createTextVNode(" Categories "),
                        _ctx.selectedCategoryIds.length ? (openBlock(), createBlock("span", { key: 0 }, " (" + toDisplayString(_ctx.selectedCategoryIds.length) + ") ", 1)) : createCommentVNode("", true),
                        (openBlock(), createBlock("svg", {
                          xmlns: "http://www.w3.org/2000/svg",
                          class: "ml-2 -mr-0.5 h-4 w-4",
                          fill: "none",
                          viewBox: "0 0 24 24",
                          stroke: "currentColor"
                        }, [
                          createVNode("path", {
                            "stroke-linecap": "round",
                            "stroke-linejoin": "round",
                            "stroke-width": "2",
                            d: "M19 9l-7 7-7-7"
                          })
                        ]))
                      ])
                    ])
                  ]),
                  content: withCtx(() => [
                    createVNode("div", { class: "w-56 px-4 py-2 space-y-2 overflow-auto text-sm max-h-96" }, [
                      (openBlock(true), createBlock(Fragment, null, renderList(_ctx.categories, (category) => {
                        return openBlock(), createBlock("label", {
                          for: category.id,
                          key: category.id,
                          class: "flex items-center"
                        }, [
                          createVNode(_component_jet_checkbox, {
                            name: category.id,
                            id: category.id,
                            checked: _ctx.filters.categories[category.id],
                            "onUpdate:checked": ($event) => _ctx.filters.categories[category.id] = $event
                          }, null, 8, ["name", "id", "checked", "onUpdate:checked"]),
                          createVNode("div", { class: "ml-2 uppercase" }, toDisplayString(category.title), 1)
                        ], 8, ["for"]);
                      }), 128))
                    ])
                  ]),
                  _: 1
                })
              ]),
              createVNode("div", { class: "grid grid-cols-1 gap-4 mt-8" }, [
                (openBlock(true), createBlock(Fragment, null, renderList(_ctx.filteredConfigurations, (config) => {
                  return openBlock(), createBlock(_component_gibberish_config, {
                    key: config.id,
                    config
                  }, null, 8, ["config"]);
                }), 128))
              ]),
              _ctx.filteredConfigurations.length === 0 ? (openBlock(), createBlock("div", {
                key: 0,
                class: "text-center"
              }, [
                (openBlock(), createBlock("svg", {
                  class: "w-12 h-12 mx-auto text-gray-400",
                  fill: "none",
                  stroke: "currentColor",
                  viewBox: "0 0 24 24",
                  xmlns: "http://www.w3.org/2000/svg"
                }, [
                  createVNode("path", {
                    "stroke-linecap": "round",
                    "stroke-linejoin": "round",
                    "stroke-width": "2",
                    d: "M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  })
                ])),
                createVNode("h3", { class: "mt-2 text-sm font-medium text-gray-900" }, "Nothing found."),
                createVNode("p", { class: "mt-1 text-sm text-gray-500" }, "No luck")
              ])) : createCommentVNode("", true)
            ])
          ])
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`<!--]-->`);
}
const _sfc_setup$a = _sfc_main$a.setup;
_sfc_main$a.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Configuration/Index.vue");
  return _sfc_setup$a ? _sfc_setup$a(props, ctx) : void 0;
};
const Index = /* @__PURE__ */ _export_sfc(_sfc_main$a, [["ssrRender", _sfc_ssrRender$a]]);
const __vite_glob_0_12 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Index
}, Symbol.toStringTag, { value: "Module" }));
const { toClipboard } = useClipboard();
const _sfc_main$9 = defineComponent({
  props: ["configuration", "liked"],
  components: {
    AppLayout,
    Link,
    JetActionMessage,
    JetButton,
    JetSecondaryButton
  },
  data() {
    return {
      copied: false
    };
  },
  methods: {
    formatDate(dateString) {
      return dayjs(dateString).format("DD/MM/YYYY");
    },
    async copy() {
      try {
        await toClipboard(this.configuration.code);
        this.copied = true;
      } catch (e) {
        console.error(e);
      }
    }
  }
});
function _sfc_ssrRender$9(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_app_layout = resolveComponent("app-layout");
  const _component_Link = resolveComponent("Link");
  const _component_jet_action_message = resolveComponent("jet-action-message");
  _push(ssrRenderComponent(_component_app_layout, mergeProps({
    title: _ctx.configuration.title
  }, _attrs), {
    header: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<div class="flex items-center justify-between"${_scopeId}><h1 class="text-xl font-semibold leading-tight text-gray-800 dark:text-white"${_scopeId}>${ssrInterpolate(_ctx.configuration.title)}</h1>`);
        _push2(ssrRenderComponent(_component_Link, {
          as: "button",
          method: "post",
          href: _ctx.route("configuration.like", _ctx.configuration.uuid),
          class: "inline-flex items-center px-3 py-2 text-sm font-medium leading-4 text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            var _a, _b;
            if (_push3) {
              if (_ctx.liked) {
                _push3(`<svg class="w-4 h-4 -ml-0.5 mr-2 text-yellow-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"${_scopeId2}><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"${_scopeId2}></path></svg>`);
              } else {
                _push3(`<svg class="w-4 h-4 -ml-0.5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"${_scopeId2}><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"${_scopeId2}></path></svg>`);
              }
              if (_ctx.liked) {
                _push3(`<span${_scopeId2}>Starred</span>`);
              } else {
                _push3(`<span${_scopeId2}>Stars</span>`);
              }
              _push3(`<span class="inline-flex ml-3 items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800"${_scopeId2}>${ssrInterpolate(((_a = _ctx.configuration.like_counter) == null ? void 0 : _a.count) || 0)}</span>`);
            } else {
              return [
                _ctx.liked ? (openBlock(), createBlock("svg", {
                  key: 0,
                  class: "w-4 h-4 -ml-0.5 mr-2 text-yellow-500",
                  fill: "currentColor",
                  viewBox: "0 0 20 20",
                  xmlns: "http://www.w3.org/2000/svg"
                }, [
                  createVNode("path", { d: "M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" })
                ])) : (openBlock(), createBlock("svg", {
                  key: 1,
                  class: "w-4 h-4 -ml-0.5 mr-2",
                  fill: "none",
                  stroke: "currentColor",
                  viewBox: "0 0 24 24",
                  xmlns: "http://www.w3.org/2000/svg"
                }, [
                  createVNode("path", {
                    "stroke-linecap": "round",
                    "stroke-linejoin": "round",
                    "stroke-width": "2",
                    d: "M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
                  })
                ])),
                _ctx.liked ? (openBlock(), createBlock("span", { key: 2 }, "Starred")) : (openBlock(), createBlock("span", { key: 3 }, "Stars")),
                createVNode("span", { class: "inline-flex ml-3 items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800" }, toDisplayString(((_b = _ctx.configuration.like_counter) == null ? void 0 : _b.count) || 0), 1)
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
        _push2(`</div>`);
      } else {
        return [
          createVNode("div", { class: "flex items-center justify-between" }, [
            createVNode("h1", { class: "text-xl font-semibold leading-tight text-gray-800 dark:text-white" }, toDisplayString(_ctx.configuration.title), 1),
            createVNode(_component_Link, {
              as: "button",
              method: "post",
              href: _ctx.route("configuration.like", _ctx.configuration.uuid),
              class: "inline-flex items-center px-3 py-2 text-sm font-medium leading-4 text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            }, {
              default: withCtx(() => {
                var _a;
                return [
                  _ctx.liked ? (openBlock(), createBlock("svg", {
                    key: 0,
                    class: "w-4 h-4 -ml-0.5 mr-2 text-yellow-500",
                    fill: "currentColor",
                    viewBox: "0 0 20 20",
                    xmlns: "http://www.w3.org/2000/svg"
                  }, [
                    createVNode("path", { d: "M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" })
                  ])) : (openBlock(), createBlock("svg", {
                    key: 1,
                    class: "w-4 h-4 -ml-0.5 mr-2",
                    fill: "none",
                    stroke: "currentColor",
                    viewBox: "0 0 24 24",
                    xmlns: "http://www.w3.org/2000/svg"
                  }, [
                    createVNode("path", {
                      "stroke-linecap": "round",
                      "stroke-linejoin": "round",
                      "stroke-width": "2",
                      d: "M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
                    })
                  ])),
                  _ctx.liked ? (openBlock(), createBlock("span", { key: 2 }, "Starred")) : (openBlock(), createBlock("span", { key: 3 }, "Stars")),
                  createVNode("span", { class: "inline-flex ml-3 items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800" }, toDisplayString(((_a = _ctx.configuration.like_counter) == null ? void 0 : _a.count) || 0), 1)
                ];
              }),
              _: 1
            }, 8, ["href"])
          ])
        ];
      }
    }),
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      var _a, _b;
      if (_push2) {
        _push2(`<div class="py-12"${_scopeId}><div class="mx-auto max-w-7xl sm:px-6 lg:px-8"${_scopeId}><div class="px-6 py-3 bg-white rounded dark:bg-slate-500"${_scopeId}><div class="lg:flex lg:items-center lg:justify-between"${_scopeId}><div class="flex-1 min-w-0"${_scopeId}><div class="flex items-center justify-between"${_scopeId}><h2 class="text-2xl font-bold leading-7 text-gray-900 sm:text-3xl sm:truncate dark:text-white"${_scopeId}>${ssrInterpolate(_ctx.configuration.title)}</h2><div class="text-lg text-gray-600 dark:text-gray-300"${_scopeId}> v${ssrInterpolate(_ctx.configuration.updated_count)}</div></div><div class="flex flex-col mt-2 sm:flex-row sm:flex-wrap sm:space-x-6"${_scopeId}><div class="flex items-center mt-2 text-sm text-gray-500 dark:text-gray-300" title="Category"${_scopeId}><img class="flex-shrink-0 mr-1.5 h-6 w-6"${ssrRenderAttr("src", "/icons/" + _ctx.configuration.category.icon_path)}${ssrRenderAttr("alt", _ctx.configuration.category.title)}${_scopeId}> ${ssrInterpolate(_ctx.configuration.category.title)}</div><div class="flex items-center mt-2 text-sm text-gray-500 dark:text-gray-300" title="Author"${_scopeId}><svg xmlns="http://www.w3.org/2000/svg" class="flex-shrink-0 mr-1.5 h-5 w-5 dark:text-gray-200 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"${_scopeId}><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"${_scopeId}></path></svg> ${ssrInterpolate(_ctx.configuration.user.username)}</div><div class="flex items-center mt-2 text-sm text-gray-500 uppercase dark:text-gray-300 dark:3ext-gray-100" title="Author"${_scopeId}><svg xmlns="http://www.w3.org/2000/svg" class="flex-shrink-0 mr-1.5 h-5 w-5 dark:text-gray-200 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"${_scopeId}><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129"${_scopeId}></path></svg> ${ssrInterpolate(_ctx.configuration.language)}</div><div class="flex items-center mt-2 text-sm text-gray-500 dark:text-gray-300" title="Last updated on"${_scopeId}><svg xmlns="http://www.w3.org/2000/svg" class="flex-shrink-0 mr-1.5 h-5 w-5 dark:text-gray-200 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"${_scopeId}><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"${_scopeId}></path></svg> ${ssrInterpolate(_ctx.formatDate(_ctx.configuration.updated_at))}</div><div class="flex items-center mt-2 text-sm text-gray-500 dark:text-gray-300" title="Likes Count"${_scopeId}><svg class="flex-shrink-0 mr-1.5 h-5 w-5 dark:text-gray-200 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"${_scopeId}><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"${_scopeId}></path></svg> ${ssrInterpolate(((_a = _ctx.configuration.like_counter) == null ? void 0 : _a.count) || 0)}</div></div></div></div><div class="pt-8 prose whitespace-pre dark:prose-invert dark:text-white"${_scopeId}>${_ctx.configuration.formatted_description}</div><div class="p-10"${_scopeId}><div class="flex items-center justify-end mb-4"${_scopeId}>`);
        _push2(ssrRenderComponent(_component_jet_action_message, {
          on: _ctx.copied,
          class: "mr-3"
        }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(` Copied ! `);
            } else {
              return [
                createTextVNode(" Copied ! ")
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
        _push2(`<button${_scopeId}><svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 dark:text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"${_scopeId}><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3"${_scopeId}></path></svg></button></div><pre class="p-2 overflow-auto text-sm bg-gray-100 border border-gray-300 rounded-md"${_scopeId}>${ssrInterpolate(_ctx.configuration.code)}</pre></div></div></div></div>`);
      } else {
        return [
          createVNode("div", { class: "py-12" }, [
            createVNode("div", { class: "mx-auto max-w-7xl sm:px-6 lg:px-8" }, [
              createVNode("div", { class: "px-6 py-3 bg-white rounded dark:bg-slate-500" }, [
                createVNode("div", { class: "lg:flex lg:items-center lg:justify-between" }, [
                  createVNode("div", { class: "flex-1 min-w-0" }, [
                    createVNode("div", { class: "flex items-center justify-between" }, [
                      createVNode("h2", { class: "text-2xl font-bold leading-7 text-gray-900 sm:text-3xl sm:truncate dark:text-white" }, toDisplayString(_ctx.configuration.title), 1),
                      createVNode("div", { class: "text-lg text-gray-600 dark:text-gray-300" }, " v" + toDisplayString(_ctx.configuration.updated_count), 1)
                    ]),
                    createVNode("div", { class: "flex flex-col mt-2 sm:flex-row sm:flex-wrap sm:space-x-6" }, [
                      createVNode("div", {
                        class: "flex items-center mt-2 text-sm text-gray-500 dark:text-gray-300",
                        title: "Category"
                      }, [
                        createVNode("img", {
                          class: "flex-shrink-0 mr-1.5 h-6 w-6",
                          src: "/icons/" + _ctx.configuration.category.icon_path,
                          alt: _ctx.configuration.category.title
                        }, null, 8, ["src", "alt"]),
                        createTextVNode(" " + toDisplayString(_ctx.configuration.category.title), 1)
                      ]),
                      createVNode("div", {
                        class: "flex items-center mt-2 text-sm text-gray-500 dark:text-gray-300",
                        title: "Author"
                      }, [
                        (openBlock(), createBlock("svg", {
                          xmlns: "http://www.w3.org/2000/svg",
                          class: "flex-shrink-0 mr-1.5 h-5 w-5 dark:text-gray-200 text-gray-400",
                          fill: "none",
                          viewBox: "0 0 24 24",
                          stroke: "currentColor"
                        }, [
                          createVNode("path", {
                            "stroke-linecap": "round",
                            "stroke-linejoin": "round",
                            "stroke-width": "2",
                            d: "M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                          })
                        ])),
                        createTextVNode(" " + toDisplayString(_ctx.configuration.user.username), 1)
                      ]),
                      createVNode("div", {
                        class: "flex items-center mt-2 text-sm text-gray-500 uppercase dark:text-gray-300 dark:3ext-gray-100",
                        title: "Author"
                      }, [
                        (openBlock(), createBlock("svg", {
                          xmlns: "http://www.w3.org/2000/svg",
                          class: "flex-shrink-0 mr-1.5 h-5 w-5 dark:text-gray-200 text-gray-400",
                          fill: "none",
                          viewBox: "0 0 24 24",
                          stroke: "currentColor"
                        }, [
                          createVNode("path", {
                            "stroke-linecap": "round",
                            "stroke-linejoin": "round",
                            "stroke-width": "2",
                            d: "M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129"
                          })
                        ])),
                        createTextVNode(" " + toDisplayString(_ctx.configuration.language), 1)
                      ]),
                      createVNode("div", {
                        class: "flex items-center mt-2 text-sm text-gray-500 dark:text-gray-300",
                        title: "Last updated on"
                      }, [
                        (openBlock(), createBlock("svg", {
                          xmlns: "http://www.w3.org/2000/svg",
                          class: "flex-shrink-0 mr-1.5 h-5 w-5 dark:text-gray-200 text-gray-400",
                          fill: "none",
                          viewBox: "0 0 24 24",
                          stroke: "currentColor"
                        }, [
                          createVNode("path", {
                            "stroke-linecap": "round",
                            "stroke-linejoin": "round",
                            "stroke-width": "2",
                            d: "M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                          })
                        ])),
                        createTextVNode(" " + toDisplayString(_ctx.formatDate(_ctx.configuration.updated_at)), 1)
                      ]),
                      createVNode("div", {
                        class: "flex items-center mt-2 text-sm text-gray-500 dark:text-gray-300",
                        title: "Likes Count"
                      }, [
                        (openBlock(), createBlock("svg", {
                          class: "flex-shrink-0 mr-1.5 h-5 w-5 dark:text-gray-200 text-gray-400",
                          fill: "none",
                          stroke: "currentColor",
                          viewBox: "0 0 24 24",
                          xmlns: "http://www.w3.org/2000/svg"
                        }, [
                          createVNode("path", {
                            "stroke-linecap": "round",
                            "stroke-linejoin": "round",
                            "stroke-width": "2",
                            d: "M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
                          })
                        ])),
                        createTextVNode(" " + toDisplayString(((_b = _ctx.configuration.like_counter) == null ? void 0 : _b.count) || 0), 1)
                      ])
                    ])
                  ])
                ]),
                createVNode("div", {
                  class: "pt-8 prose whitespace-pre dark:prose-invert dark:text-white",
                  innerHTML: _ctx.configuration.formatted_description
                }, null, 8, ["innerHTML"]),
                createVNode("div", { class: "p-10" }, [
                  createVNode("div", { class: "flex items-center justify-end mb-4" }, [
                    createVNode(_component_jet_action_message, {
                      on: _ctx.copied,
                      class: "mr-3"
                    }, {
                      default: withCtx(() => [
                        createTextVNode(" Copied ! ")
                      ]),
                      _: 1
                    }, 8, ["on"]),
                    createVNode("button", { onClick: _ctx.copy }, [
                      (openBlock(), createBlock("svg", {
                        xmlns: "http://www.w3.org/2000/svg",
                        class: "w-5 h-5 dark:text-white",
                        fill: "none",
                        viewBox: "0 0 24 24",
                        stroke: "currentColor"
                      }, [
                        createVNode("path", {
                          "stroke-linecap": "round",
                          "stroke-linejoin": "round",
                          "stroke-width": "2",
                          d: "M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3"
                        })
                      ]))
                    ], 8, ["onClick"])
                  ]),
                  createVNode("pre", {
                    class: "p-2 overflow-auto text-sm bg-gray-100 border border-gray-300 rounded-md",
                    textContent: toDisplayString(_ctx.configuration.code)
                  }, null, 8, ["textContent"])
                ])
              ])
            ])
          ])
        ];
      }
    }),
    _: 1
  }, _parent));
}
const _sfc_setup$9 = _sfc_main$9.setup;
_sfc_main$9.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Configuration/Show.vue");
  return _sfc_setup$9 ? _sfc_setup$9(props, ctx) : void 0;
};
const Show$1 = /* @__PURE__ */ _export_sfc(_sfc_main$9, [["ssrRender", _sfc_ssrRender$9]]);
const __vite_glob_0_13 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Show$1
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$8 = defineComponent({
  props: ["policy"],
  components: {
    Head,
    JetAuthenticationCardLogo
  }
});
function _sfc_ssrRender$8(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_Head = resolveComponent("Head");
  const _component_jet_authentication_card_logo = resolveComponent("jet-authentication-card-logo");
  _push(`<!--[-->`);
  _push(ssrRenderComponent(_component_Head, { title: "Privacy Policy" }, null, _parent));
  _push(`<div class="font-sans text-gray-900 antialiased"><div class="pt-4 bg-gray-100"><div class="min-h-screen flex flex-col items-center pt-6 sm:pt-0"><div>`);
  _push(ssrRenderComponent(_component_jet_authentication_card_logo, null, null, _parent));
  _push(`</div><div class="w-full sm:max-w-2xl mt-6 p-6 bg-white shadow-md overflow-hidden sm:rounded-lg prose">${_ctx.policy}</div></div></div></div><!--]-->`);
}
const _sfc_setup$8 = _sfc_main$8.setup;
_sfc_main$8.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/PrivacyPolicy.vue");
  return _sfc_setup$8 ? _sfc_setup$8(props, ctx) : void 0;
};
const PrivacyPolicy = /* @__PURE__ */ _export_sfc(_sfc_main$8, [["ssrRender", _sfc_ssrRender$8]]);
const __vite_glob_0_14 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: PrivacyPolicy
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$7 = defineComponent({
  components: {
    JetActionSection,
    JetDangerButton,
    JetDialogModal,
    JetInput,
    JetInputError,
    JetSecondaryButton
  },
  data() {
    return {
      confirmingUserDeletion: false,
      form: this.$inertia.form({
        password: ""
      })
    };
  },
  methods: {
    confirmUserDeletion() {
      this.confirmingUserDeletion = true;
      setTimeout(() => this.$refs.password.focus(), 250);
    },
    deleteUser() {
      this.form.delete(route("current-user.destroy"), {
        preserveScroll: true,
        onSuccess: () => this.closeModal(),
        onError: () => this.$refs.password.focus(),
        onFinish: () => this.form.reset()
      });
    },
    closeModal() {
      this.confirmingUserDeletion = false;
      this.form.reset();
    }
  }
});
function _sfc_ssrRender$7(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_jet_action_section = resolveComponent("jet-action-section");
  const _component_jet_danger_button = resolveComponent("jet-danger-button");
  const _component_jet_dialog_modal = resolveComponent("jet-dialog-modal");
  const _component_jet_input = resolveComponent("jet-input");
  const _component_jet_input_error = resolveComponent("jet-input-error");
  const _component_jet_secondary_button = resolveComponent("jet-secondary-button");
  _push(ssrRenderComponent(_component_jet_action_section, _attrs, {
    title: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(` Delete Account `);
      } else {
        return [
          createTextVNode(" Delete Account ")
        ];
      }
    }),
    description: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(` Permanently delete your account. `);
      } else {
        return [
          createTextVNode(" Permanently delete your account. ")
        ];
      }
    }),
    content: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<div class="max-w-xl text-sm text-gray-600 dark:text-gray-300"${_scopeId}> Once your account is deleted, all of its resources and data will be permanently deleted. Before deleting your account, please download any data or information that you wish to retain. </div><div class="mt-5"${_scopeId}>`);
        _push2(ssrRenderComponent(_component_jet_danger_button, { onClick: _ctx.confirmUserDeletion }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(` Delete Account `);
            } else {
              return [
                createTextVNode(" Delete Account ")
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
        _push2(`</div>`);
        _push2(ssrRenderComponent(_component_jet_dialog_modal, {
          show: _ctx.confirmingUserDeletion,
          onClose: _ctx.closeModal
        }, {
          title: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(` Delete Account `);
            } else {
              return [
                createTextVNode(" Delete Account ")
              ];
            }
          }),
          content: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(` Are you sure you want to delete your account? Once your account is deleted, all of its resources and data will be permanently deleted. Please enter your password to confirm you would like to permanently delete your account. <div class="mt-4"${_scopeId2}>`);
              _push3(ssrRenderComponent(_component_jet_input, {
                type: "password",
                class: "block w-3/4 mt-1",
                placeholder: "Password",
                ref: "password",
                modelValue: _ctx.form.password,
                "onUpdate:modelValue": ($event) => _ctx.form.password = $event,
                onKeyup: _ctx.deleteUser
              }, null, _parent3, _scopeId2));
              _push3(ssrRenderComponent(_component_jet_input_error, {
                message: _ctx.form.errors.password,
                class: "mt-2"
              }, null, _parent3, _scopeId2));
              _push3(`</div>`);
            } else {
              return [
                createTextVNode(" Are you sure you want to delete your account? Once your account is deleted, all of its resources and data will be permanently deleted. Please enter your password to confirm you would like to permanently delete your account. "),
                createVNode("div", { class: "mt-4" }, [
                  createVNode(_component_jet_input, {
                    type: "password",
                    class: "block w-3/4 mt-1",
                    placeholder: "Password",
                    ref: "password",
                    modelValue: _ctx.form.password,
                    "onUpdate:modelValue": ($event) => _ctx.form.password = $event,
                    onKeyup: withKeys(_ctx.deleteUser, ["enter"])
                  }, null, 8, ["modelValue", "onUpdate:modelValue", "onKeyup"]),
                  createVNode(_component_jet_input_error, {
                    message: _ctx.form.errors.password,
                    class: "mt-2"
                  }, null, 8, ["message"])
                ])
              ];
            }
          }),
          footer: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(ssrRenderComponent(_component_jet_secondary_button, { onClick: _ctx.closeModal }, {
                default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(` Cancel `);
                  } else {
                    return [
                      createTextVNode(" Cancel ")
                    ];
                  }
                }),
                _: 1
              }, _parent3, _scopeId2));
              _push3(ssrRenderComponent(_component_jet_danger_button, {
                class: ["ml-3", { "opacity-25": _ctx.form.processing }],
                onClick: _ctx.deleteUser,
                disabled: _ctx.form.processing
              }, {
                default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(` Delete Account `);
                  } else {
                    return [
                      createTextVNode(" Delete Account ")
                    ];
                  }
                }),
                _: 1
              }, _parent3, _scopeId2));
            } else {
              return [
                createVNode(_component_jet_secondary_button, { onClick: _ctx.closeModal }, {
                  default: withCtx(() => [
                    createTextVNode(" Cancel ")
                  ]),
                  _: 1
                }, 8, ["onClick"]),
                createVNode(_component_jet_danger_button, {
                  class: ["ml-3", { "opacity-25": _ctx.form.processing }],
                  onClick: _ctx.deleteUser,
                  disabled: _ctx.form.processing
                }, {
                  default: withCtx(() => [
                    createTextVNode(" Delete Account ")
                  ]),
                  _: 1
                }, 8, ["onClick", "class", "disabled"])
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
      } else {
        return [
          createVNode("div", { class: "max-w-xl text-sm text-gray-600 dark:text-gray-300" }, " Once your account is deleted, all of its resources and data will be permanently deleted. Before deleting your account, please download any data or information that you wish to retain. "),
          createVNode("div", { class: "mt-5" }, [
            createVNode(_component_jet_danger_button, { onClick: _ctx.confirmUserDeletion }, {
              default: withCtx(() => [
                createTextVNode(" Delete Account ")
              ]),
              _: 1
            }, 8, ["onClick"])
          ]),
          createVNode(_component_jet_dialog_modal, {
            show: _ctx.confirmingUserDeletion,
            onClose: _ctx.closeModal
          }, {
            title: withCtx(() => [
              createTextVNode(" Delete Account ")
            ]),
            content: withCtx(() => [
              createTextVNode(" Are you sure you want to delete your account? Once your account is deleted, all of its resources and data will be permanently deleted. Please enter your password to confirm you would like to permanently delete your account. "),
              createVNode("div", { class: "mt-4" }, [
                createVNode(_component_jet_input, {
                  type: "password",
                  class: "block w-3/4 mt-1",
                  placeholder: "Password",
                  ref: "password",
                  modelValue: _ctx.form.password,
                  "onUpdate:modelValue": ($event) => _ctx.form.password = $event,
                  onKeyup: withKeys(_ctx.deleteUser, ["enter"])
                }, null, 8, ["modelValue", "onUpdate:modelValue", "onKeyup"]),
                createVNode(_component_jet_input_error, {
                  message: _ctx.form.errors.password,
                  class: "mt-2"
                }, null, 8, ["message"])
              ])
            ]),
            footer: withCtx(() => [
              createVNode(_component_jet_secondary_button, { onClick: _ctx.closeModal }, {
                default: withCtx(() => [
                  createTextVNode(" Cancel ")
                ]),
                _: 1
              }, 8, ["onClick"]),
              createVNode(_component_jet_danger_button, {
                class: ["ml-3", { "opacity-25": _ctx.form.processing }],
                onClick: _ctx.deleteUser,
                disabled: _ctx.form.processing
              }, {
                default: withCtx(() => [
                  createTextVNode(" Delete Account ")
                ]),
                _: 1
              }, 8, ["onClick", "class", "disabled"])
            ]),
            _: 1
          }, 8, ["show", "onClose"])
        ];
      }
    }),
    _: 1
  }, _parent));
}
const _sfc_setup$7 = _sfc_main$7.setup;
_sfc_main$7.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Profile/Partials/DeleteUserForm.vue");
  return _sfc_setup$7 ? _sfc_setup$7(props, ctx) : void 0;
};
const DeleteUserForm = /* @__PURE__ */ _export_sfc(_sfc_main$7, [["ssrRender", _sfc_ssrRender$7]]);
const __vite_glob_0_15 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: DeleteUserForm
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$6 = defineComponent({
  props: ["sessions"],
  components: {
    JetActionMessage,
    JetActionSection,
    JetButton,
    JetDialogModal,
    JetInput,
    JetInputError,
    JetSecondaryButton
  },
  data() {
    return {
      confirmingLogout: false,
      form: this.$inertia.form({
        password: ""
      })
    };
  },
  methods: {
    confirmLogout() {
      this.confirmingLogout = true;
      setTimeout(() => this.$refs.password.focus(), 250);
    },
    logoutOtherBrowserSessions() {
      this.form.delete(route("other-browser-sessions.destroy"), {
        preserveScroll: true,
        onSuccess: () => this.closeModal(),
        onError: () => this.$refs.password.focus(),
        onFinish: () => this.form.reset()
      });
    },
    closeModal() {
      this.confirmingLogout = false;
      this.form.reset();
    }
  }
});
function _sfc_ssrRender$6(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_jet_action_section = resolveComponent("jet-action-section");
  const _component_jet_button = resolveComponent("jet-button");
  const _component_jet_action_message = resolveComponent("jet-action-message");
  const _component_jet_dialog_modal = resolveComponent("jet-dialog-modal");
  const _component_jet_input = resolveComponent("jet-input");
  const _component_jet_input_error = resolveComponent("jet-input-error");
  const _component_jet_secondary_button = resolveComponent("jet-secondary-button");
  _push(ssrRenderComponent(_component_jet_action_section, _attrs, {
    title: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(` Browser Sessions `);
      } else {
        return [
          createTextVNode(" Browser Sessions ")
        ];
      }
    }),
    description: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(` Manage and log out your active sessions on other browsers and devices. `);
      } else {
        return [
          createTextVNode(" Manage and log out your active sessions on other browsers and devices. ")
        ];
      }
    }),
    content: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<div class="max-w-xl text-sm text-gray-600 dark:text-gray-300"${_scopeId}> If necessary, you may log out of all of your other browser sessions across all of your devices. Some of your recent sessions are listed below; however, this list may not be exhaustive. If you feel your account has been compromised, you should also update your password. </div>`);
        if (_ctx.sessions.length > 0) {
          _push2(`<div class="mt-5 space-y-6"${_scopeId}><!--[-->`);
          ssrRenderList(_ctx.sessions, (session, i) => {
            _push2(`<div class="flex items-center"${_scopeId}><div${_scopeId}>`);
            if (session.agent.is_desktop) {
              _push2(`<svg fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" stroke="currentColor" class="w-8 h-8 text-gray-500"${_scopeId}><path d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"${_scopeId}></path></svg>`);
            } else {
              _push2(`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round" class="w-8 h-8 text-gray-500"${_scopeId}><path d="M0 0h24v24H0z" stroke="none"${_scopeId}></path><rect x="7" y="4" width="10" height="16" rx="1"${_scopeId}></rect><path d="M11 5h2M12 17v.01"${_scopeId}></path></svg>`);
            }
            _push2(`</div><div class="ml-3"${_scopeId}><div class="text-sm text-gray-600 dark:text-gray-300"${_scopeId}>${ssrInterpolate(session.agent.platform ? session.agent.platform : "Unknown")} - ${ssrInterpolate(session.agent.browser ? session.agent.browser : "Unknown")}</div><div${_scopeId}><div class="text-xs text-gray-500 dark:text-gray-200"${_scopeId}>${ssrInterpolate(session.ip_address)}, `);
            if (session.is_current_device) {
              _push2(`<span class="font-semibold text-green-500"${_scopeId}>This device</span>`);
            } else {
              _push2(`<span${_scopeId}>Last active ${ssrInterpolate(session.last_active)}</span>`);
            }
            _push2(`</div></div></div></div>`);
          });
          _push2(`<!--]--></div>`);
        } else {
          _push2(`<!---->`);
        }
        _push2(`<div class="flex items-center mt-5"${_scopeId}>`);
        _push2(ssrRenderComponent(_component_jet_button, { onClick: _ctx.confirmLogout }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(` Log Out Other Browser Sessions `);
            } else {
              return [
                createTextVNode(" Log Out Other Browser Sessions ")
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
        _push2(ssrRenderComponent(_component_jet_action_message, {
          on: _ctx.form.recentlySuccessful,
          class: "ml-3"
        }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(` Done. `);
            } else {
              return [
                createTextVNode(" Done. ")
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
        _push2(`</div>`);
        _push2(ssrRenderComponent(_component_jet_dialog_modal, {
          show: _ctx.confirmingLogout,
          onClose: _ctx.closeModal
        }, {
          title: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(` Log Out Other Browser Sessions `);
            } else {
              return [
                createTextVNode(" Log Out Other Browser Sessions ")
              ];
            }
          }),
          content: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(` Please enter your password to confirm you would like to log out of your other browser sessions across all of your devices. <div class="mt-4"${_scopeId2}>`);
              _push3(ssrRenderComponent(_component_jet_input, {
                type: "password",
                class: "block w-3/4 mt-1",
                placeholder: "Password",
                ref: "password",
                modelValue: _ctx.form.password,
                "onUpdate:modelValue": ($event) => _ctx.form.password = $event,
                onKeyup: _ctx.logoutOtherBrowserSessions
              }, null, _parent3, _scopeId2));
              _push3(ssrRenderComponent(_component_jet_input_error, {
                message: _ctx.form.errors.password,
                class: "mt-2"
              }, null, _parent3, _scopeId2));
              _push3(`</div>`);
            } else {
              return [
                createTextVNode(" Please enter your password to confirm you would like to log out of your other browser sessions across all of your devices. "),
                createVNode("div", { class: "mt-4" }, [
                  createVNode(_component_jet_input, {
                    type: "password",
                    class: "block w-3/4 mt-1",
                    placeholder: "Password",
                    ref: "password",
                    modelValue: _ctx.form.password,
                    "onUpdate:modelValue": ($event) => _ctx.form.password = $event,
                    onKeyup: withKeys(_ctx.logoutOtherBrowserSessions, ["enter"])
                  }, null, 8, ["modelValue", "onUpdate:modelValue", "onKeyup"]),
                  createVNode(_component_jet_input_error, {
                    message: _ctx.form.errors.password,
                    class: "mt-2"
                  }, null, 8, ["message"])
                ])
              ];
            }
          }),
          footer: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(ssrRenderComponent(_component_jet_secondary_button, { onClick: _ctx.closeModal }, {
                default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(` Cancel `);
                  } else {
                    return [
                      createTextVNode(" Cancel ")
                    ];
                  }
                }),
                _: 1
              }, _parent3, _scopeId2));
              _push3(ssrRenderComponent(_component_jet_button, {
                class: ["ml-3", { "opacity-25": _ctx.form.processing }],
                onClick: _ctx.logoutOtherBrowserSessions,
                disabled: _ctx.form.processing
              }, {
                default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(` Log Out Other Browser Sessions `);
                  } else {
                    return [
                      createTextVNode(" Log Out Other Browser Sessions ")
                    ];
                  }
                }),
                _: 1
              }, _parent3, _scopeId2));
            } else {
              return [
                createVNode(_component_jet_secondary_button, { onClick: _ctx.closeModal }, {
                  default: withCtx(() => [
                    createTextVNode(" Cancel ")
                  ]),
                  _: 1
                }, 8, ["onClick"]),
                createVNode(_component_jet_button, {
                  class: ["ml-3", { "opacity-25": _ctx.form.processing }],
                  onClick: _ctx.logoutOtherBrowserSessions,
                  disabled: _ctx.form.processing
                }, {
                  default: withCtx(() => [
                    createTextVNode(" Log Out Other Browser Sessions ")
                  ]),
                  _: 1
                }, 8, ["onClick", "class", "disabled"])
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
      } else {
        return [
          createVNode("div", { class: "max-w-xl text-sm text-gray-600 dark:text-gray-300" }, " If necessary, you may log out of all of your other browser sessions across all of your devices. Some of your recent sessions are listed below; however, this list may not be exhaustive. If you feel your account has been compromised, you should also update your password. "),
          _ctx.sessions.length > 0 ? (openBlock(), createBlock("div", {
            key: 0,
            class: "mt-5 space-y-6"
          }, [
            (openBlock(true), createBlock(Fragment, null, renderList(_ctx.sessions, (session, i) => {
              return openBlock(), createBlock("div", {
                class: "flex items-center",
                key: i
              }, [
                createVNode("div", null, [
                  session.agent.is_desktop ? (openBlock(), createBlock("svg", {
                    key: 0,
                    fill: "none",
                    "stroke-linecap": "round",
                    "stroke-linejoin": "round",
                    "stroke-width": "2",
                    viewBox: "0 0 24 24",
                    stroke: "currentColor",
                    class: "w-8 h-8 text-gray-500"
                  }, [
                    createVNode("path", { d: "M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" })
                  ])) : (openBlock(), createBlock("svg", {
                    key: 1,
                    xmlns: "http://www.w3.org/2000/svg",
                    viewBox: "0 0 24 24",
                    "stroke-width": "2",
                    stroke: "currentColor",
                    fill: "none",
                    "stroke-linecap": "round",
                    "stroke-linejoin": "round",
                    class: "w-8 h-8 text-gray-500"
                  }, [
                    createVNode("path", {
                      d: "M0 0h24v24H0z",
                      stroke: "none"
                    }),
                    createVNode("rect", {
                      x: "7",
                      y: "4",
                      width: "10",
                      height: "16",
                      rx: "1"
                    }),
                    createVNode("path", { d: "M11 5h2M12 17v.01" })
                  ]))
                ]),
                createVNode("div", { class: "ml-3" }, [
                  createVNode("div", { class: "text-sm text-gray-600 dark:text-gray-300" }, toDisplayString(session.agent.platform ? session.agent.platform : "Unknown") + " - " + toDisplayString(session.agent.browser ? session.agent.browser : "Unknown"), 1),
                  createVNode("div", null, [
                    createVNode("div", { class: "text-xs text-gray-500 dark:text-gray-200" }, [
                      createTextVNode(toDisplayString(session.ip_address) + ", ", 1),
                      session.is_current_device ? (openBlock(), createBlock("span", {
                        key: 0,
                        class: "font-semibold text-green-500"
                      }, "This device")) : (openBlock(), createBlock("span", { key: 1 }, "Last active " + toDisplayString(session.last_active), 1))
                    ])
                  ])
                ])
              ]);
            }), 128))
          ])) : createCommentVNode("", true),
          createVNode("div", { class: "flex items-center mt-5" }, [
            createVNode(_component_jet_button, { onClick: _ctx.confirmLogout }, {
              default: withCtx(() => [
                createTextVNode(" Log Out Other Browser Sessions ")
              ]),
              _: 1
            }, 8, ["onClick"]),
            createVNode(_component_jet_action_message, {
              on: _ctx.form.recentlySuccessful,
              class: "ml-3"
            }, {
              default: withCtx(() => [
                createTextVNode(" Done. ")
              ]),
              _: 1
            }, 8, ["on"])
          ]),
          createVNode(_component_jet_dialog_modal, {
            show: _ctx.confirmingLogout,
            onClose: _ctx.closeModal
          }, {
            title: withCtx(() => [
              createTextVNode(" Log Out Other Browser Sessions ")
            ]),
            content: withCtx(() => [
              createTextVNode(" Please enter your password to confirm you would like to log out of your other browser sessions across all of your devices. "),
              createVNode("div", { class: "mt-4" }, [
                createVNode(_component_jet_input, {
                  type: "password",
                  class: "block w-3/4 mt-1",
                  placeholder: "Password",
                  ref: "password",
                  modelValue: _ctx.form.password,
                  "onUpdate:modelValue": ($event) => _ctx.form.password = $event,
                  onKeyup: withKeys(_ctx.logoutOtherBrowserSessions, ["enter"])
                }, null, 8, ["modelValue", "onUpdate:modelValue", "onKeyup"]),
                createVNode(_component_jet_input_error, {
                  message: _ctx.form.errors.password,
                  class: "mt-2"
                }, null, 8, ["message"])
              ])
            ]),
            footer: withCtx(() => [
              createVNode(_component_jet_secondary_button, { onClick: _ctx.closeModal }, {
                default: withCtx(() => [
                  createTextVNode(" Cancel ")
                ]),
                _: 1
              }, 8, ["onClick"]),
              createVNode(_component_jet_button, {
                class: ["ml-3", { "opacity-25": _ctx.form.processing }],
                onClick: _ctx.logoutOtherBrowserSessions,
                disabled: _ctx.form.processing
              }, {
                default: withCtx(() => [
                  createTextVNode(" Log Out Other Browser Sessions ")
                ]),
                _: 1
              }, 8, ["onClick", "class", "disabled"])
            ]),
            _: 1
          }, 8, ["show", "onClose"])
        ];
      }
    }),
    _: 1
  }, _parent));
}
const _sfc_setup$6 = _sfc_main$6.setup;
_sfc_main$6.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Profile/Partials/LogoutOtherBrowserSessionsForm.vue");
  return _sfc_setup$6 ? _sfc_setup$6(props, ctx) : void 0;
};
const LogoutOtherBrowserSessionsForm = /* @__PURE__ */ _export_sfc(_sfc_main$6, [["ssrRender", _sfc_ssrRender$6]]);
const __vite_glob_0_16 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: LogoutOtherBrowserSessionsForm
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$5 = defineComponent({
  emits: ["confirmed"],
  props: {
    title: {
      default: "Confirm Password"
    },
    content: {
      default: "For your security, please confirm your password to continue."
    },
    button: {
      default: "Confirm"
    }
  },
  components: {
    JetButton,
    JetDialogModal,
    JetInput,
    JetInputError,
    JetSecondaryButton
  },
  data() {
    return {
      confirmingPassword: false,
      form: {
        password: "",
        error: ""
      }
    };
  },
  methods: {
    startConfirmingPassword() {
      axios.get(route("password.confirmation")).then((response) => {
        if (response.data.confirmed) {
          this.$emit("confirmed");
        } else {
          this.confirmingPassword = true;
          setTimeout(() => this.$refs.password.focus(), 250);
        }
      });
    },
    confirmPassword() {
      this.form.processing = true;
      axios.post(route("password.confirm"), {
        password: this.form.password
      }).then(() => {
        this.form.processing = false;
        this.closeModal();
        this.$nextTick(() => this.$emit("confirmed"));
      }).catch((error) => {
        this.form.processing = false;
        this.form.error = error.response.data.errors.password[0];
        this.$refs.password.focus();
      });
    },
    closeModal() {
      this.confirmingPassword = false;
      this.form.password = "";
      this.form.error = "";
    }
  }
});
function _sfc_ssrRender$5(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_jet_dialog_modal = resolveComponent("jet-dialog-modal");
  const _component_jet_input = resolveComponent("jet-input");
  const _component_jet_input_error = resolveComponent("jet-input-error");
  const _component_jet_secondary_button = resolveComponent("jet-secondary-button");
  const _component_jet_button = resolveComponent("jet-button");
  _push(`<span${ssrRenderAttrs(_attrs)}><span>`);
  ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
  _push(`</span>`);
  _push(ssrRenderComponent(_component_jet_dialog_modal, {
    show: _ctx.confirmingPassword,
    onClose: _ctx.closeModal
  }, {
    title: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`${ssrInterpolate(_ctx.title)}`);
      } else {
        return [
          createTextVNode(toDisplayString(_ctx.title), 1)
        ];
      }
    }),
    content: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`${ssrInterpolate(_ctx.content)} <div class="mt-4"${_scopeId}>`);
        _push2(ssrRenderComponent(_component_jet_input, {
          type: "password",
          class: "mt-1 block w-3/4",
          placeholder: "Password",
          ref: "password",
          modelValue: _ctx.form.password,
          "onUpdate:modelValue": ($event) => _ctx.form.password = $event,
          onKeyup: _ctx.confirmPassword
        }, null, _parent2, _scopeId));
        _push2(ssrRenderComponent(_component_jet_input_error, {
          message: _ctx.form.error,
          class: "mt-2"
        }, null, _parent2, _scopeId));
        _push2(`</div>`);
      } else {
        return [
          createTextVNode(toDisplayString(_ctx.content) + " ", 1),
          createVNode("div", { class: "mt-4" }, [
            createVNode(_component_jet_input, {
              type: "password",
              class: "mt-1 block w-3/4",
              placeholder: "Password",
              ref: "password",
              modelValue: _ctx.form.password,
              "onUpdate:modelValue": ($event) => _ctx.form.password = $event,
              onKeyup: withKeys(_ctx.confirmPassword, ["enter"])
            }, null, 8, ["modelValue", "onUpdate:modelValue", "onKeyup"]),
            createVNode(_component_jet_input_error, {
              message: _ctx.form.error,
              class: "mt-2"
            }, null, 8, ["message"])
          ])
        ];
      }
    }),
    footer: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(_component_jet_secondary_button, { onClick: _ctx.closeModal }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(` Cancel `);
            } else {
              return [
                createTextVNode(" Cancel ")
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
        _push2(ssrRenderComponent(_component_jet_button, {
          class: ["ml-3", { "opacity-25": _ctx.form.processing }],
          onClick: _ctx.confirmPassword,
          disabled: _ctx.form.processing
        }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(`${ssrInterpolate(_ctx.button)}`);
            } else {
              return [
                createTextVNode(toDisplayString(_ctx.button), 1)
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
      } else {
        return [
          createVNode(_component_jet_secondary_button, { onClick: _ctx.closeModal }, {
            default: withCtx(() => [
              createTextVNode(" Cancel ")
            ]),
            _: 1
          }, 8, ["onClick"]),
          createVNode(_component_jet_button, {
            class: ["ml-3", { "opacity-25": _ctx.form.processing }],
            onClick: _ctx.confirmPassword,
            disabled: _ctx.form.processing
          }, {
            default: withCtx(() => [
              createTextVNode(toDisplayString(_ctx.button), 1)
            ]),
            _: 1
          }, 8, ["onClick", "class", "disabled"])
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</span>`);
}
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Jetstream/ConfirmsPassword.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
const JetConfirmsPassword = /* @__PURE__ */ _export_sfc(_sfc_main$5, [["ssrRender", _sfc_ssrRender$5]]);
const _sfc_main$4 = defineComponent({
  components: {
    JetActionSection,
    JetButton,
    JetConfirmsPassword,
    JetDangerButton,
    JetSecondaryButton
  },
  data() {
    return {
      enabling: false,
      disabling: false,
      qrCode: null,
      recoveryCodes: []
    };
  },
  methods: {
    enableTwoFactorAuthentication() {
      this.enabling = true;
      this.$inertia.post("/user/two-factor-authentication", {}, {
        preserveScroll: true,
        onSuccess: () => Promise.all([
          this.showQrCode(),
          this.showRecoveryCodes()
        ]),
        onFinish: () => this.enabling = false
      });
    },
    showQrCode() {
      return axios.get("/user/two-factor-qr-code").then((response) => {
        this.qrCode = response.data.svg;
      });
    },
    showRecoveryCodes() {
      return axios.get("/user/two-factor-recovery-codes").then((response) => {
        this.recoveryCodes = response.data;
      });
    },
    regenerateRecoveryCodes() {
      axios.post("/user/two-factor-recovery-codes").then((response) => {
        this.showRecoveryCodes();
      });
    },
    disableTwoFactorAuthentication() {
      this.disabling = true;
      this.$inertia.delete("/user/two-factor-authentication", {
        preserveScroll: true,
        onSuccess: () => this.disabling = false
      });
    }
  },
  computed: {
    twoFactorEnabled() {
      return !this.enabling && this.$page.props.user.two_factor_enabled;
    }
  }
});
function _sfc_ssrRender$4(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_jet_action_section = resolveComponent("jet-action-section");
  const _component_jet_confirms_password = resolveComponent("jet-confirms-password");
  const _component_jet_button = resolveComponent("jet-button");
  const _component_jet_secondary_button = resolveComponent("jet-secondary-button");
  const _component_jet_danger_button = resolveComponent("jet-danger-button");
  _push(ssrRenderComponent(_component_jet_action_section, _attrs, {
    title: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(` Two Factor Authentication `);
      } else {
        return [
          createTextVNode(" Two Factor Authentication ")
        ];
      }
    }),
    description: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(` Add additional security to your account using two factor authentication. `);
      } else {
        return [
          createTextVNode(" Add additional security to your account using two factor authentication. ")
        ];
      }
    }),
    content: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        if (_ctx.twoFactorEnabled) {
          _push2(`<h3 class="text-lg font-medium text-gray-900 dark:text-gray-100"${_scopeId}> You have enabled two factor authentication. </h3>`);
        } else {
          _push2(`<h3 class="text-lg font-medium text-gray-900 dark:text-gray-100"${_scopeId}> You have not enabled two factor authentication. </h3>`);
        }
        _push2(`<div class="max-w-xl mt-3 text-sm text-gray-600 dark:text-gray-300"${_scopeId}><p${_scopeId}> When two factor authentication is enabled, you will be prompted for a secure, random token during authentication. You may retrieve this token from your phone&#39;s Google Authenticator application. </p></div>`);
        if (_ctx.twoFactorEnabled) {
          _push2(`<div${_scopeId}>`);
          if (_ctx.qrCode) {
            _push2(`<div${_scopeId}><div class="max-w-xl mt-4 text-sm text-gray-600 dark:text-gray-300"${_scopeId}><p class="font-semibold"${_scopeId}> Two factor authentication is now enabled. Scan the following QR code using your phone&#39;s authenticator application. </p></div><div class="mt-4"${_scopeId}>${_ctx.qrCode}</div></div>`);
          } else {
            _push2(`<!---->`);
          }
          if (_ctx.recoveryCodes.length > 0) {
            _push2(`<div${_scopeId}><div class="max-w-xl mt-4 text-sm text-gray-600 dark:text-gray-300"${_scopeId}><p class="font-semibold"${_scopeId}> Store these recovery codes in a secure password manager. They can be used to recover access to your account if your two factor authentication device is lost. </p></div><div class="grid max-w-xl gap-1 px-4 py-4 mt-4 font-mono text-sm bg-gray-100 rounded-lg"${_scopeId}><!--[-->`);
            ssrRenderList(_ctx.recoveryCodes, (code) => {
              _push2(`<div${_scopeId}>${ssrInterpolate(code)}</div>`);
            });
            _push2(`<!--]--></div></div>`);
          } else {
            _push2(`<!---->`);
          }
          _push2(`</div>`);
        } else {
          _push2(`<!---->`);
        }
        _push2(`<div class="mt-5"${_scopeId}>`);
        if (!_ctx.twoFactorEnabled) {
          _push2(`<div${_scopeId}>`);
          _push2(ssrRenderComponent(_component_jet_confirms_password, { onConfirmed: _ctx.enableTwoFactorAuthentication }, {
            default: withCtx((_2, _push3, _parent3, _scopeId2) => {
              if (_push3) {
                _push3(ssrRenderComponent(_component_jet_button, {
                  type: "button",
                  class: { "opacity-25": _ctx.enabling },
                  disabled: _ctx.enabling
                }, {
                  default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                    if (_push4) {
                      _push4(` Enable `);
                    } else {
                      return [
                        createTextVNode(" Enable ")
                      ];
                    }
                  }),
                  _: 1
                }, _parent3, _scopeId2));
              } else {
                return [
                  createVNode(_component_jet_button, {
                    type: "button",
                    class: { "opacity-25": _ctx.enabling },
                    disabled: _ctx.enabling
                  }, {
                    default: withCtx(() => [
                      createTextVNode(" Enable ")
                    ]),
                    _: 1
                  }, 8, ["class", "disabled"])
                ];
              }
            }),
            _: 1
          }, _parent2, _scopeId));
          _push2(`</div>`);
        } else {
          _push2(`<div${_scopeId}>`);
          _push2(ssrRenderComponent(_component_jet_confirms_password, { onConfirmed: _ctx.regenerateRecoveryCodes }, {
            default: withCtx((_2, _push3, _parent3, _scopeId2) => {
              if (_push3) {
                if (_ctx.recoveryCodes.length > 0) {
                  _push3(ssrRenderComponent(_component_jet_secondary_button, { class: "mr-3" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(` Regenerate Recovery Codes `);
                      } else {
                        return [
                          createTextVNode(" Regenerate Recovery Codes ")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  _push3(`<!---->`);
                }
              } else {
                return [
                  _ctx.recoveryCodes.length > 0 ? (openBlock(), createBlock(_component_jet_secondary_button, {
                    key: 0,
                    class: "mr-3"
                  }, {
                    default: withCtx(() => [
                      createTextVNode(" Regenerate Recovery Codes ")
                    ]),
                    _: 1
                  })) : createCommentVNode("", true)
                ];
              }
            }),
            _: 1
          }, _parent2, _scopeId));
          _push2(ssrRenderComponent(_component_jet_confirms_password, { onConfirmed: _ctx.showRecoveryCodes }, {
            default: withCtx((_2, _push3, _parent3, _scopeId2) => {
              if (_push3) {
                if (_ctx.recoveryCodes.length === 0) {
                  _push3(ssrRenderComponent(_component_jet_secondary_button, { class: "mr-3" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(` Show Recovery Codes `);
                      } else {
                        return [
                          createTextVNode(" Show Recovery Codes ")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  _push3(`<!---->`);
                }
              } else {
                return [
                  _ctx.recoveryCodes.length === 0 ? (openBlock(), createBlock(_component_jet_secondary_button, {
                    key: 0,
                    class: "mr-3"
                  }, {
                    default: withCtx(() => [
                      createTextVNode(" Show Recovery Codes ")
                    ]),
                    _: 1
                  })) : createCommentVNode("", true)
                ];
              }
            }),
            _: 1
          }, _parent2, _scopeId));
          _push2(ssrRenderComponent(_component_jet_confirms_password, { onConfirmed: _ctx.disableTwoFactorAuthentication }, {
            default: withCtx((_2, _push3, _parent3, _scopeId2) => {
              if (_push3) {
                _push3(ssrRenderComponent(_component_jet_danger_button, {
                  class: { "opacity-25": _ctx.disabling },
                  disabled: _ctx.disabling
                }, {
                  default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                    if (_push4) {
                      _push4(` Disable `);
                    } else {
                      return [
                        createTextVNode(" Disable ")
                      ];
                    }
                  }),
                  _: 1
                }, _parent3, _scopeId2));
              } else {
                return [
                  createVNode(_component_jet_danger_button, {
                    class: { "opacity-25": _ctx.disabling },
                    disabled: _ctx.disabling
                  }, {
                    default: withCtx(() => [
                      createTextVNode(" Disable ")
                    ]),
                    _: 1
                  }, 8, ["class", "disabled"])
                ];
              }
            }),
            _: 1
          }, _parent2, _scopeId));
          _push2(`</div>`);
        }
        _push2(`</div>`);
      } else {
        return [
          _ctx.twoFactorEnabled ? (openBlock(), createBlock("h3", {
            key: 0,
            class: "text-lg font-medium text-gray-900 dark:text-gray-100"
          }, " You have enabled two factor authentication. ")) : (openBlock(), createBlock("h3", {
            key: 1,
            class: "text-lg font-medium text-gray-900 dark:text-gray-100"
          }, " You have not enabled two factor authentication. ")),
          createVNode("div", { class: "max-w-xl mt-3 text-sm text-gray-600 dark:text-gray-300" }, [
            createVNode("p", null, " When two factor authentication is enabled, you will be prompted for a secure, random token during authentication. You may retrieve this token from your phone's Google Authenticator application. ")
          ]),
          _ctx.twoFactorEnabled ? (openBlock(), createBlock("div", { key: 2 }, [
            _ctx.qrCode ? (openBlock(), createBlock("div", { key: 0 }, [
              createVNode("div", { class: "max-w-xl mt-4 text-sm text-gray-600 dark:text-gray-300" }, [
                createVNode("p", { class: "font-semibold" }, " Two factor authentication is now enabled. Scan the following QR code using your phone's authenticator application. ")
              ]),
              createVNode("div", {
                class: "mt-4",
                innerHTML: _ctx.qrCode
              }, null, 8, ["innerHTML"])
            ])) : createCommentVNode("", true),
            _ctx.recoveryCodes.length > 0 ? (openBlock(), createBlock("div", { key: 1 }, [
              createVNode("div", { class: "max-w-xl mt-4 text-sm text-gray-600 dark:text-gray-300" }, [
                createVNode("p", { class: "font-semibold" }, " Store these recovery codes in a secure password manager. They can be used to recover access to your account if your two factor authentication device is lost. ")
              ]),
              createVNode("div", { class: "grid max-w-xl gap-1 px-4 py-4 mt-4 font-mono text-sm bg-gray-100 rounded-lg" }, [
                (openBlock(true), createBlock(Fragment, null, renderList(_ctx.recoveryCodes, (code) => {
                  return openBlock(), createBlock("div", { key: code }, toDisplayString(code), 1);
                }), 128))
              ])
            ])) : createCommentVNode("", true)
          ])) : createCommentVNode("", true),
          createVNode("div", { class: "mt-5" }, [
            !_ctx.twoFactorEnabled ? (openBlock(), createBlock("div", { key: 0 }, [
              createVNode(_component_jet_confirms_password, { onConfirmed: _ctx.enableTwoFactorAuthentication }, {
                default: withCtx(() => [
                  createVNode(_component_jet_button, {
                    type: "button",
                    class: { "opacity-25": _ctx.enabling },
                    disabled: _ctx.enabling
                  }, {
                    default: withCtx(() => [
                      createTextVNode(" Enable ")
                    ]),
                    _: 1
                  }, 8, ["class", "disabled"])
                ]),
                _: 1
              }, 8, ["onConfirmed"])
            ])) : (openBlock(), createBlock("div", { key: 1 }, [
              createVNode(_component_jet_confirms_password, { onConfirmed: _ctx.regenerateRecoveryCodes }, {
                default: withCtx(() => [
                  _ctx.recoveryCodes.length > 0 ? (openBlock(), createBlock(_component_jet_secondary_button, {
                    key: 0,
                    class: "mr-3"
                  }, {
                    default: withCtx(() => [
                      createTextVNode(" Regenerate Recovery Codes ")
                    ]),
                    _: 1
                  })) : createCommentVNode("", true)
                ]),
                _: 1
              }, 8, ["onConfirmed"]),
              createVNode(_component_jet_confirms_password, { onConfirmed: _ctx.showRecoveryCodes }, {
                default: withCtx(() => [
                  _ctx.recoveryCodes.length === 0 ? (openBlock(), createBlock(_component_jet_secondary_button, {
                    key: 0,
                    class: "mr-3"
                  }, {
                    default: withCtx(() => [
                      createTextVNode(" Show Recovery Codes ")
                    ]),
                    _: 1
                  })) : createCommentVNode("", true)
                ]),
                _: 1
              }, 8, ["onConfirmed"]),
              createVNode(_component_jet_confirms_password, { onConfirmed: _ctx.disableTwoFactorAuthentication }, {
                default: withCtx(() => [
                  createVNode(_component_jet_danger_button, {
                    class: { "opacity-25": _ctx.disabling },
                    disabled: _ctx.disabling
                  }, {
                    default: withCtx(() => [
                      createTextVNode(" Disable ")
                    ]),
                    _: 1
                  }, 8, ["class", "disabled"])
                ]),
                _: 1
              }, 8, ["onConfirmed"])
            ]))
          ])
        ];
      }
    }),
    _: 1
  }, _parent));
}
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Profile/Partials/TwoFactorAuthenticationForm.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const TwoFactorAuthenticationForm = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["ssrRender", _sfc_ssrRender$4]]);
const __vite_glob_0_17 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: TwoFactorAuthenticationForm
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$3 = defineComponent({
  components: {
    JetActionMessage,
    JetButton,
    JetFormSection,
    JetInput,
    JetInputError,
    JetLabel
  },
  data() {
    return {
      form: this.$inertia.form({
        current_password: "",
        password: "",
        password_confirmation: ""
      })
    };
  },
  methods: {
    updatePassword() {
      this.form.put(route("user-password.update"), {
        errorBag: "updatePassword",
        preserveScroll: true,
        onSuccess: () => this.form.reset(),
        onError: () => {
          if (this.form.errors.password) {
            this.form.reset("password", "password_confirmation");
            this.$refs.password.focus();
          }
          if (this.form.errors.current_password) {
            this.form.reset("current_password");
            this.$refs.current_password.focus();
          }
        }
      });
    }
  }
});
function _sfc_ssrRender$3(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_jet_form_section = resolveComponent("jet-form-section");
  const _component_jet_label = resolveComponent("jet-label");
  const _component_jet_input = resolveComponent("jet-input");
  const _component_jet_input_error = resolveComponent("jet-input-error");
  const _component_jet_action_message = resolveComponent("jet-action-message");
  const _component_jet_button = resolveComponent("jet-button");
  _push(ssrRenderComponent(_component_jet_form_section, mergeProps({ onSubmitted: _ctx.updatePassword }, _attrs), {
    title: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(` Update Password `);
      } else {
        return [
          createTextVNode(" Update Password ")
        ];
      }
    }),
    description: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(` Ensure your account is using a long, random password to stay secure. `);
      } else {
        return [
          createTextVNode(" Ensure your account is using a long, random password to stay secure. ")
        ];
      }
    }),
    form: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<div class="col-span-6 sm:col-span-4"${_scopeId}>`);
        _push2(ssrRenderComponent(_component_jet_label, {
          for: "current_password",
          value: "Current Password"
        }, null, _parent2, _scopeId));
        _push2(ssrRenderComponent(_component_jet_input, {
          id: "current_password",
          type: "password",
          class: "mt-1 block w-full",
          modelValue: _ctx.form.current_password,
          "onUpdate:modelValue": ($event) => _ctx.form.current_password = $event,
          ref: "current_password",
          autocomplete: "current-password"
        }, null, _parent2, _scopeId));
        _push2(ssrRenderComponent(_component_jet_input_error, {
          message: _ctx.form.errors.current_password,
          class: "mt-2"
        }, null, _parent2, _scopeId));
        _push2(`</div><div class="col-span-6 sm:col-span-4"${_scopeId}>`);
        _push2(ssrRenderComponent(_component_jet_label, {
          for: "password",
          value: "New Password"
        }, null, _parent2, _scopeId));
        _push2(ssrRenderComponent(_component_jet_input, {
          id: "password",
          type: "password",
          class: "mt-1 block w-full",
          modelValue: _ctx.form.password,
          "onUpdate:modelValue": ($event) => _ctx.form.password = $event,
          ref: "password",
          autocomplete: "new-password"
        }, null, _parent2, _scopeId));
        _push2(ssrRenderComponent(_component_jet_input_error, {
          message: _ctx.form.errors.password,
          class: "mt-2"
        }, null, _parent2, _scopeId));
        _push2(`</div><div class="col-span-6 sm:col-span-4"${_scopeId}>`);
        _push2(ssrRenderComponent(_component_jet_label, {
          for: "password_confirmation",
          value: "Confirm Password"
        }, null, _parent2, _scopeId));
        _push2(ssrRenderComponent(_component_jet_input, {
          id: "password_confirmation",
          type: "password",
          class: "mt-1 block w-full",
          modelValue: _ctx.form.password_confirmation,
          "onUpdate:modelValue": ($event) => _ctx.form.password_confirmation = $event,
          autocomplete: "new-password"
        }, null, _parent2, _scopeId));
        _push2(ssrRenderComponent(_component_jet_input_error, {
          message: _ctx.form.errors.password_confirmation,
          class: "mt-2"
        }, null, _parent2, _scopeId));
        _push2(`</div>`);
      } else {
        return [
          createVNode("div", { class: "col-span-6 sm:col-span-4" }, [
            createVNode(_component_jet_label, {
              for: "current_password",
              value: "Current Password"
            }),
            createVNode(_component_jet_input, {
              id: "current_password",
              type: "password",
              class: "mt-1 block w-full",
              modelValue: _ctx.form.current_password,
              "onUpdate:modelValue": ($event) => _ctx.form.current_password = $event,
              ref: "current_password",
              autocomplete: "current-password"
            }, null, 8, ["modelValue", "onUpdate:modelValue"]),
            createVNode(_component_jet_input_error, {
              message: _ctx.form.errors.current_password,
              class: "mt-2"
            }, null, 8, ["message"])
          ]),
          createVNode("div", { class: "col-span-6 sm:col-span-4" }, [
            createVNode(_component_jet_label, {
              for: "password",
              value: "New Password"
            }),
            createVNode(_component_jet_input, {
              id: "password",
              type: "password",
              class: "mt-1 block w-full",
              modelValue: _ctx.form.password,
              "onUpdate:modelValue": ($event) => _ctx.form.password = $event,
              ref: "password",
              autocomplete: "new-password"
            }, null, 8, ["modelValue", "onUpdate:modelValue"]),
            createVNode(_component_jet_input_error, {
              message: _ctx.form.errors.password,
              class: "mt-2"
            }, null, 8, ["message"])
          ]),
          createVNode("div", { class: "col-span-6 sm:col-span-4" }, [
            createVNode(_component_jet_label, {
              for: "password_confirmation",
              value: "Confirm Password"
            }),
            createVNode(_component_jet_input, {
              id: "password_confirmation",
              type: "password",
              class: "mt-1 block w-full",
              modelValue: _ctx.form.password_confirmation,
              "onUpdate:modelValue": ($event) => _ctx.form.password_confirmation = $event,
              autocomplete: "new-password"
            }, null, 8, ["modelValue", "onUpdate:modelValue"]),
            createVNode(_component_jet_input_error, {
              message: _ctx.form.errors.password_confirmation,
              class: "mt-2"
            }, null, 8, ["message"])
          ])
        ];
      }
    }),
    actions: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(_component_jet_action_message, {
          on: _ctx.form.recentlySuccessful,
          class: "mr-3"
        }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(` Saved. `);
            } else {
              return [
                createTextVNode(" Saved. ")
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
        _push2(ssrRenderComponent(_component_jet_button, {
          class: { "opacity-25": _ctx.form.processing },
          disabled: _ctx.form.processing
        }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(` Save `);
            } else {
              return [
                createTextVNode(" Save ")
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
      } else {
        return [
          createVNode(_component_jet_action_message, {
            on: _ctx.form.recentlySuccessful,
            class: "mr-3"
          }, {
            default: withCtx(() => [
              createTextVNode(" Saved. ")
            ]),
            _: 1
          }, 8, ["on"]),
          createVNode(_component_jet_button, {
            class: { "opacity-25": _ctx.form.processing },
            disabled: _ctx.form.processing
          }, {
            default: withCtx(() => [
              createTextVNode(" Save ")
            ]),
            _: 1
          }, 8, ["class", "disabled"])
        ];
      }
    }),
    _: 1
  }, _parent));
}
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Profile/Partials/UpdatePasswordForm.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const UpdatePasswordForm = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["ssrRender", _sfc_ssrRender$3]]);
const __vite_glob_0_18 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: UpdatePasswordForm
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$2 = defineComponent({
  components: {
    JetActionMessage,
    JetButton,
    JetFormSection,
    JetInput,
    JetInputError,
    JetLabel,
    JetSecondaryButton
  },
  props: ["user"],
  data() {
    return {
      form: this.$inertia.form({
        _method: "PUT",
        username: this.user.username,
        email: this.user.email,
        photo: null
      }),
      photoPreview: null
    };
  },
  methods: {
    updateProfileInformation() {
      if (this.$refs.photo) {
        this.form.photo = this.$refs.photo.files[0];
      }
      this.form.post(route("user-profile-information.update"), {
        errorBag: "updateProfileInformation",
        preserveScroll: true,
        onSuccess: () => this.clearPhotoFileInput()
      });
    },
    selectNewPhoto() {
      this.$refs.photo.click();
    },
    updatePhotoPreview() {
      const photo = this.$refs.photo.files[0];
      if (!photo)
        return;
      const reader = new FileReader();
      reader.onload = (e) => {
        this.photoPreview = e.target.result;
      };
      reader.readAsDataURL(photo);
    },
    deletePhoto() {
      this.$inertia.delete(route("current-user-photo.destroy"), {
        preserveScroll: true,
        onSuccess: () => {
          this.photoPreview = null;
          this.clearPhotoFileInput();
        }
      });
    },
    clearPhotoFileInput() {
      var _a;
      if ((_a = this.$refs.photo) == null ? void 0 : _a.value) {
        this.$refs.photo.value = null;
      }
    }
  }
});
function _sfc_ssrRender$2(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_jet_form_section = resolveComponent("jet-form-section");
  const _component_jet_label = resolveComponent("jet-label");
  const _component_jet_secondary_button = resolveComponent("jet-secondary-button");
  const _component_jet_input_error = resolveComponent("jet-input-error");
  const _component_jet_input = resolveComponent("jet-input");
  const _component_jet_action_message = resolveComponent("jet-action-message");
  const _component_jet_button = resolveComponent("jet-button");
  _push(ssrRenderComponent(_component_jet_form_section, mergeProps({ onSubmitted: _ctx.updateProfileInformation }, _attrs), {
    title: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(` Profile Information `);
      } else {
        return [
          createTextVNode(" Profile Information ")
        ];
      }
    }),
    description: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(` Update your account&#39;s profile information and email address. `);
      } else {
        return [
          createTextVNode(" Update your account's profile information and email address. ")
        ];
      }
    }),
    form: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        if (_ctx.$page.props.jetstream.managesProfilePhotos) {
          _push2(`<div class="col-span-6 sm:col-span-4"${_scopeId}><input type="file" class="hidden"${_scopeId}>`);
          _push2(ssrRenderComponent(_component_jet_label, {
            for: "photo",
            value: "Photo"
          }, null, _parent2, _scopeId));
          _push2(`<div class="mt-2" style="${ssrRenderStyle(!_ctx.photoPreview ? null : { display: "none" })}"${_scopeId}><img${ssrRenderAttr("src", _ctx.user.profile_photo_url)}${ssrRenderAttr("alt", _ctx.user.name)} class="object-cover w-20 h-20 rounded-full"${_scopeId}></div><div class="mt-2" style="${ssrRenderStyle(_ctx.photoPreview ? null : { display: "none" })}"${_scopeId}><span class="block w-20 h-20 bg-center bg-no-repeat bg-cover rounded-full" style="${ssrRenderStyle("background-image: url('" + _ctx.photoPreview + "');")}"${_scopeId}></span></div>`);
          _push2(ssrRenderComponent(_component_jet_secondary_button, {
            class: "mt-2 mr-2",
            type: "button",
            onClick: _ctx.selectNewPhoto
          }, {
            default: withCtx((_2, _push3, _parent3, _scopeId2) => {
              if (_push3) {
                _push3(` Select A New Photo `);
              } else {
                return [
                  createTextVNode(" Select A New Photo ")
                ];
              }
            }),
            _: 1
          }, _parent2, _scopeId));
          if (_ctx.user.profile_photo_path) {
            _push2(ssrRenderComponent(_component_jet_secondary_button, {
              type: "button",
              class: "mt-2",
              onClick: _ctx.deletePhoto
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` Remove Photo `);
                } else {
                  return [
                    createTextVNode(" Remove Photo ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            _push2(`<!---->`);
          }
          _push2(ssrRenderComponent(_component_jet_input_error, {
            message: _ctx.form.errors.photo,
            class: "mt-2"
          }, null, _parent2, _scopeId));
          _push2(`</div>`);
        } else {
          _push2(`<!---->`);
        }
        _push2(`<div class="col-span-6 sm:col-span-4"${_scopeId}>`);
        _push2(ssrRenderComponent(_component_jet_label, {
          for: "username",
          value: "Username"
        }, null, _parent2, _scopeId));
        _push2(ssrRenderComponent(_component_jet_input, {
          id: "username",
          type: "text",
          class: "block w-full mt-1",
          modelValue: _ctx.form.username,
          "onUpdate:modelValue": ($event) => _ctx.form.username = $event,
          autocomplete: "username"
        }, null, _parent2, _scopeId));
        _push2(ssrRenderComponent(_component_jet_input_error, {
          message: _ctx.form.errors.username,
          class: "mt-2"
        }, null, _parent2, _scopeId));
        _push2(`</div><div class="col-span-6 sm:col-span-4"${_scopeId}>`);
        _push2(ssrRenderComponent(_component_jet_label, {
          for: "email",
          value: "Email"
        }, null, _parent2, _scopeId));
        _push2(ssrRenderComponent(_component_jet_input, {
          id: "email",
          type: "email",
          class: "block w-full mt-1",
          modelValue: _ctx.form.email,
          "onUpdate:modelValue": ($event) => _ctx.form.email = $event
        }, null, _parent2, _scopeId));
        _push2(ssrRenderComponent(_component_jet_input_error, {
          message: _ctx.form.errors.email,
          class: "mt-2"
        }, null, _parent2, _scopeId));
        _push2(`</div>`);
      } else {
        return [
          _ctx.$page.props.jetstream.managesProfilePhotos ? (openBlock(), createBlock("div", {
            key: 0,
            class: "col-span-6 sm:col-span-4"
          }, [
            createVNode("input", {
              type: "file",
              class: "hidden",
              ref: "photo",
              onChange: _ctx.updatePhotoPreview
            }, null, 40, ["onChange"]),
            createVNode(_component_jet_label, {
              for: "photo",
              value: "Photo"
            }),
            withDirectives(createVNode("div", { class: "mt-2" }, [
              createVNode("img", {
                src: _ctx.user.profile_photo_url,
                alt: _ctx.user.name,
                class: "object-cover w-20 h-20 rounded-full"
              }, null, 8, ["src", "alt"])
            ], 512), [
              [vShow, !_ctx.photoPreview]
            ]),
            withDirectives(createVNode("div", { class: "mt-2" }, [
              createVNode("span", {
                class: "block w-20 h-20 bg-center bg-no-repeat bg-cover rounded-full",
                style: "background-image: url('" + _ctx.photoPreview + "');"
              }, null, 4)
            ], 512), [
              [vShow, _ctx.photoPreview]
            ]),
            createVNode(_component_jet_secondary_button, {
              class: "mt-2 mr-2",
              type: "button",
              onClick: withModifiers(_ctx.selectNewPhoto, ["prevent"])
            }, {
              default: withCtx(() => [
                createTextVNode(" Select A New Photo ")
              ]),
              _: 1
            }, 8, ["onClick"]),
            _ctx.user.profile_photo_path ? (openBlock(), createBlock(_component_jet_secondary_button, {
              key: 0,
              type: "button",
              class: "mt-2",
              onClick: withModifiers(_ctx.deletePhoto, ["prevent"])
            }, {
              default: withCtx(() => [
                createTextVNode(" Remove Photo ")
              ]),
              _: 1
            }, 8, ["onClick"])) : createCommentVNode("", true),
            createVNode(_component_jet_input_error, {
              message: _ctx.form.errors.photo,
              class: "mt-2"
            }, null, 8, ["message"])
          ])) : createCommentVNode("", true),
          createVNode("div", { class: "col-span-6 sm:col-span-4" }, [
            createVNode(_component_jet_label, {
              for: "username",
              value: "Username"
            }),
            createVNode(_component_jet_input, {
              id: "username",
              type: "text",
              class: "block w-full mt-1",
              modelValue: _ctx.form.username,
              "onUpdate:modelValue": ($event) => _ctx.form.username = $event,
              autocomplete: "username"
            }, null, 8, ["modelValue", "onUpdate:modelValue"]),
            createVNode(_component_jet_input_error, {
              message: _ctx.form.errors.username,
              class: "mt-2"
            }, null, 8, ["message"])
          ]),
          createVNode("div", { class: "col-span-6 sm:col-span-4" }, [
            createVNode(_component_jet_label, {
              for: "email",
              value: "Email"
            }),
            createVNode(_component_jet_input, {
              id: "email",
              type: "email",
              class: "block w-full mt-1",
              modelValue: _ctx.form.email,
              "onUpdate:modelValue": ($event) => _ctx.form.email = $event
            }, null, 8, ["modelValue", "onUpdate:modelValue"]),
            createVNode(_component_jet_input_error, {
              message: _ctx.form.errors.email,
              class: "mt-2"
            }, null, 8, ["message"])
          ])
        ];
      }
    }),
    actions: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(_component_jet_action_message, {
          on: _ctx.form.recentlySuccessful,
          class: "mr-3"
        }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(` Saved. `);
            } else {
              return [
                createTextVNode(" Saved. ")
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
        _push2(ssrRenderComponent(_component_jet_button, {
          class: { "opacity-25": _ctx.form.processing },
          disabled: _ctx.form.processing
        }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(` Save `);
            } else {
              return [
                createTextVNode(" Save ")
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
      } else {
        return [
          createVNode(_component_jet_action_message, {
            on: _ctx.form.recentlySuccessful,
            class: "mr-3"
          }, {
            default: withCtx(() => [
              createTextVNode(" Saved. ")
            ]),
            _: 1
          }, 8, ["on"]),
          createVNode(_component_jet_button, {
            class: { "opacity-25": _ctx.form.processing },
            disabled: _ctx.form.processing
          }, {
            default: withCtx(() => [
              createTextVNode(" Save ")
            ]),
            _: 1
          }, 8, ["class", "disabled"])
        ];
      }
    }),
    _: 1
  }, _parent));
}
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Profile/Partials/UpdateProfileInformationForm.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const UpdateProfileInformationForm = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["ssrRender", _sfc_ssrRender$2]]);
const __vite_glob_0_19 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: UpdateProfileInformationForm
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$1 = defineComponent({
  props: ["sessions"],
  components: {
    AppLayout,
    DeleteUserForm,
    JetSectionBorder,
    LogoutOtherBrowserSessionsForm,
    TwoFactorAuthenticationForm,
    UpdatePasswordForm,
    UpdateProfileInformationForm
  }
});
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_app_layout = resolveComponent("app-layout");
  const _component_update_profile_information_form = resolveComponent("update-profile-information-form");
  const _component_jet_section_border = resolveComponent("jet-section-border");
  const _component_update_password_form = resolveComponent("update-password-form");
  const _component_two_factor_authentication_form = resolveComponent("two-factor-authentication-form");
  const _component_logout_other_browser_sessions_form = resolveComponent("logout-other-browser-sessions-form");
  const _component_delete_user_form = resolveComponent("delete-user-form");
  _push(ssrRenderComponent(_component_app_layout, mergeProps({ title: "Profile" }, _attrs), {
    header: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<h2 class="text-xl font-semibold leading-tight text-gray-800 dark:text-white"${_scopeId}> Profile </h2>`);
      } else {
        return [
          createVNode("h2", { class: "text-xl font-semibold leading-tight text-gray-800 dark:text-white" }, " Profile ")
        ];
      }
    }),
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<div${_scopeId}><div class="py-10 mx-auto max-w-7xl sm:px-6 lg:px-8"${_scopeId}>`);
        if (_ctx.$page.props.jetstream.canUpdateProfileInformation) {
          _push2(`<div${_scopeId}>`);
          _push2(ssrRenderComponent(_component_update_profile_information_form, {
            user: _ctx.$page.props.user
          }, null, _parent2, _scopeId));
          _push2(ssrRenderComponent(_component_jet_section_border, null, null, _parent2, _scopeId));
          _push2(`</div>`);
        } else {
          _push2(`<!---->`);
        }
        if (_ctx.$page.props.jetstream.canUpdatePassword) {
          _push2(`<div${_scopeId}>`);
          _push2(ssrRenderComponent(_component_update_password_form, { class: "mt-10 sm:mt-0" }, null, _parent2, _scopeId));
          _push2(ssrRenderComponent(_component_jet_section_border, null, null, _parent2, _scopeId));
          _push2(`</div>`);
        } else {
          _push2(`<!---->`);
        }
        if (_ctx.$page.props.jetstream.canManageTwoFactorAuthentication) {
          _push2(`<div${_scopeId}>`);
          _push2(ssrRenderComponent(_component_two_factor_authentication_form, { class: "mt-10 sm:mt-0" }, null, _parent2, _scopeId));
          _push2(ssrRenderComponent(_component_jet_section_border, null, null, _parent2, _scopeId));
          _push2(`</div>`);
        } else {
          _push2(`<!---->`);
        }
        _push2(ssrRenderComponent(_component_logout_other_browser_sessions_form, {
          sessions: _ctx.sessions,
          class: "mt-10 sm:mt-0"
        }, null, _parent2, _scopeId));
        if (_ctx.$page.props.jetstream.hasAccountDeletionFeatures) {
          _push2(`<!--[-->`);
          _push2(ssrRenderComponent(_component_jet_section_border, null, null, _parent2, _scopeId));
          _push2(ssrRenderComponent(_component_delete_user_form, { class: "mt-10 sm:mt-0" }, null, _parent2, _scopeId));
          _push2(`<!--]-->`);
        } else {
          _push2(`<!---->`);
        }
        _push2(`</div></div>`);
      } else {
        return [
          createVNode("div", null, [
            createVNode("div", { class: "py-10 mx-auto max-w-7xl sm:px-6 lg:px-8" }, [
              _ctx.$page.props.jetstream.canUpdateProfileInformation ? (openBlock(), createBlock("div", { key: 0 }, [
                createVNode(_component_update_profile_information_form, {
                  user: _ctx.$page.props.user
                }, null, 8, ["user"]),
                createVNode(_component_jet_section_border)
              ])) : createCommentVNode("", true),
              _ctx.$page.props.jetstream.canUpdatePassword ? (openBlock(), createBlock("div", { key: 1 }, [
                createVNode(_component_update_password_form, { class: "mt-10 sm:mt-0" }),
                createVNode(_component_jet_section_border)
              ])) : createCommentVNode("", true),
              _ctx.$page.props.jetstream.canManageTwoFactorAuthentication ? (openBlock(), createBlock("div", { key: 2 }, [
                createVNode(_component_two_factor_authentication_form, { class: "mt-10 sm:mt-0" }),
                createVNode(_component_jet_section_border)
              ])) : createCommentVNode("", true),
              createVNode(_component_logout_other_browser_sessions_form, {
                sessions: _ctx.sessions,
                class: "mt-10 sm:mt-0"
              }, null, 8, ["sessions"]),
              _ctx.$page.props.jetstream.hasAccountDeletionFeatures ? (openBlock(), createBlock(Fragment, { key: 3 }, [
                createVNode(_component_jet_section_border),
                createVNode(_component_delete_user_form, { class: "mt-10 sm:mt-0" })
              ], 64)) : createCommentVNode("", true)
            ])
          ])
        ];
      }
    }),
    _: 1
  }, _parent));
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Profile/Show.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const Show = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender$1]]);
const __vite_glob_0_20 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Show
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main = defineComponent({
  props: ["terms"],
  components: {
    Head,
    JetAuthenticationCardLogo
  }
});
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_Head = resolveComponent("Head");
  const _component_jet_authentication_card_logo = resolveComponent("jet-authentication-card-logo");
  _push(`<!--[-->`);
  _push(ssrRenderComponent(_component_Head, { title: "Terms of Service" }, null, _parent));
  _push(`<div class="font-sans text-gray-900 antialiased"><div class="pt-4 bg-gray-100"><div class="min-h-screen flex flex-col items-center pt-6 sm:pt-0"><div>`);
  _push(ssrRenderComponent(_component_jet_authentication_card_logo, null, null, _parent));
  _push(`</div><div class="w-full sm:max-w-2xl mt-6 p-6 bg-white shadow-md overflow-hidden sm:rounded-lg prose">${_ctx.terms}</div></div></div></div><!--]-->`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/TermsOfService.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const TermsOfService = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
const __vite_glob_0_21 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: TermsOfService
}, Symbol.toStringTag, { value: "Module" }));
createServer(
  (page) => createInertiaApp({
    page,
    render: renderToString,
    title: (title) => `${title} - Lotro Gibberish Config`,
    resolve: (name) => {
      const pages = /* @__PURE__ */ Object.assign({ "./Pages/API/Index.vue": __vite_glob_0_0, "./Pages/API/Partials/ApiTokenManager.vue": __vite_glob_0_1, "./Pages/Auth/Configuration/Create.vue": __vite_glob_0_2, "./Pages/Auth/Configuration/Edit.vue": __vite_glob_0_3, "./Pages/Auth/Configuration/Index.vue": __vite_glob_0_4, "./Pages/Auth/ConfirmPassword.vue": __vite_glob_0_5, "./Pages/Auth/ForgotPassword.vue": __vite_glob_0_6, "./Pages/Auth/Login.vue": __vite_glob_0_7, "./Pages/Auth/Register.vue": __vite_glob_0_8, "./Pages/Auth/ResetPassword.vue": __vite_glob_0_9, "./Pages/Auth/TwoFactorChallenge.vue": __vite_glob_0_10, "./Pages/Auth/VerifyEmail.vue": __vite_glob_0_11, "./Pages/Configuration/Index.vue": __vite_glob_0_12, "./Pages/Configuration/Show.vue": __vite_glob_0_13, "./Pages/PrivacyPolicy.vue": __vite_glob_0_14, "./Pages/Profile/Partials/DeleteUserForm.vue": __vite_glob_0_15, "./Pages/Profile/Partials/LogoutOtherBrowserSessionsForm.vue": __vite_glob_0_16, "./Pages/Profile/Partials/TwoFactorAuthenticationForm.vue": __vite_glob_0_17, "./Pages/Profile/Partials/UpdatePasswordForm.vue": __vite_glob_0_18, "./Pages/Profile/Partials/UpdateProfileInformationForm.vue": __vite_glob_0_19, "./Pages/Profile/Show.vue": __vite_glob_0_20, "./Pages/TermsOfService.vue": __vite_glob_0_21 });
      let page2 = pages[`./Pages/${name}.vue`];
      return page2;
    },
    setup({ App, props, plugin }) {
      const vueApp = createSSRApp({ render: () => h(App, props) });
      vueApp.use(plugin).mixin({ methods: { route } }).component("Link", Link).component("Head", Head).mount(el);
    }
  })
);
