import { openBlock as o, createElementBlock as t } from "vue";
const r = (c, n) => {
  const e = c.__vccOpts || c;
  for (const [_, s] of n)
    e[_] = s;
  return e;
}, f = {};
function m(c, n) {
  return o(), t("div", null, "Comp A");
}
const i = /* @__PURE__ */ r(f, [["render", m]]), p = {};
function l(c, n) {
  return o(), t("div", null, "Comp B");
}
const u = /* @__PURE__ */ r(p, [["render", l]]);
export {
  i as CompA,
  u as CompB
};
