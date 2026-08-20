import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { h as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as PageShell, t as PageHeader } from "./PageShell-DqJcqw8a.mjs";
import { p as Heart } from "../_libs/lucide-react.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/TributeRoom-TJfmjBYP.js
var import_jsx_runtime = require_jsx_runtime();
function TributeRoom({ room }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(PageShell, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHeader, {
		eyebrow: room.eyebrow,
		title: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
			room.title.split(" ").slice(0, -1).join(" "),
			" ",
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "text-gold font-semibold",
				children: room.title.split(" ").at(-1)
			})
		] }),
		intro: room.intro
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "mx-auto max-w-3xl px-5 pb-10",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "space-y-4",
			children: room.lines.map((line, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
				className: "animate-fade-up rounded-3xl bg-white/90 p-7 shadow-soft-mint backdrop-blur",
				style: { animationDelay: `${i * 70}ms` },
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Heart, { className: "h-5 w-5 text-gold" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-4 leading-[1.85] text-foreground/85",
					children: line
				})]
			}, line))
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mt-12 text-center",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
				to: room.next,
				className: "inline-flex rounded-full bg-foreground px-7 py-3.5 text-sm font-medium text-background shadow-3d",
				children: room.nextLabel
			})
		})]
	})] });
}
//#endregion
export { TributeRoom as t };
