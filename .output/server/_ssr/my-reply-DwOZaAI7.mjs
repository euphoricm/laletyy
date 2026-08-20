import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { h as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as PageShell, t as PageHeader } from "./PageShell-DqJcqw8a.mjs";
import { r as Video } from "../_libs/lucide-react.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/my-reply-DwOZaAI7.js
var import_jsx_runtime = require_jsx_runtime();
function ReelPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(PageShell, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHeader, {
			eyebrow: "Press play",
			title: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: ["A little ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "text-gold font-semibold",
				children: "memory reel"
			})] }),
			intro: "Your videos will live here: the laughter, the movement, the moments a photo cannot keep."
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "mx-auto grid max-w-5xl gap-6 px-5 pb-16 md:grid-cols-3",
			children: [
				1,
				2,
				3,
				4,
				5
			].map((n) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "overflow-hidden rounded-3xl bg-white/90 shadow-soft-mint",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("video", {
					controls: true,
					className: "h-80 w-full bg-lavender-gradient object-cover",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("source", {
						src: `/video${n}.mp4`,
						type: "video/mp4"
					})
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-2 p-4 font-hand text-xl",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Video, { className: "h-4 w-4 text-primary" }), "Laleti on film"]
				})]
			}, n))
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "pb-16 text-center",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
				to: "/prayers",
				className: "text-sm font-medium text-primary",
				children: "Continue to birthday blessings"
			})
		})
	] });
}
//#endregion
export { ReelPage as component };
