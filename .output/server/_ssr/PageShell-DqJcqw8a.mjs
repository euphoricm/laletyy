import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { h as Link } from "../_libs/@tanstack/react-router+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/PageShell-DqJcqw8a.js
var import_jsx_runtime = require_jsx_runtime();
function SiteFooter() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("footer", {
		className: "relative mt-24 overflow-hidden bg-mint-gradient",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "pointer-events-none absolute -right-20 -top-20 h-72 w-72 rounded-full bg-gold-gradient opacity-30 blur-3xl" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "relative mx-auto grid max-w-6xl gap-10 px-6 py-16 sm:grid-cols-2 sm:px-10",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h3", {
					className: "font-display text-3xl font-semibold sm:text-4xl",
					children: [
						"Happy 20th, ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-gold",
							children: "Laleti"
						}),
						"."
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-4 max-w-md text-foreground/80",
					children: "Twenty beautiful years of laughter, light and becoming. This little corner of the internet exists for one reason only: so you can see, in one place, how deeply you are loved."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-6 font-hand text-3xl text-foreground/80",
					children: "your little sissy, always. 🫂"
				})
			] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid content-start gap-3 sm:justify-end sm:text-right",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-xs uppercase tracking-[0.25em] text-foreground/60",
						children: "Quick jumps"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "flex flex-wrap gap-3 sm:justify-end",
						children: [
							["/letter", "Letter"],
							["/cake", "Make a Wish"],
							["/prayers", "Blessings"],
							["/wishes", "Wishes"]
						].map(([to, label]) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to,
							className: "rounded-full bg-white/75 px-4 py-2 text-sm font-medium text-foreground shadow-soft-mint transition hover:bg-white",
							children: label
						}, to))
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "gold-rule mt-6 w-full sm:w-64 sm:justify-self-end" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-2 text-xs uppercase tracking-[0.3em] text-foreground/60",
						children: "Laleti's 20th Year"
					})
				]
			})]
		})]
	});
}
var EMOJIS = [
	"💖",
	"🌸",
	"🎀",
	"💗",
	"🌷",
	"💞",
	"💖",
	"🎁",
	"✨",
	"💖"
];
function getFloatConfig(index) {
	return {
		left: (index * 13.7 + 7) % 100,
		size: 18 + index * 7 % 17,
		delay: index * .75 % 9,
		duration: 10 + index % 5 * 2.5,
		opacity: .55 + index % 4 * .12
	};
}
function FloatingEmojis() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "pointer-events-none fixed inset-0 z-0 overflow-hidden",
		"aria-hidden": "true",
		children: Array.from({ length: 28 }, (_, index) => {
			const config = getFloatConfig(index);
			return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "floating-emoji",
				style: {
					left: `${config.left}%`,
					fontSize: `${config.size}px`,
					animationDelay: `${config.delay}s`,
					animationDuration: `${config.duration}s`,
					opacity: config.opacity
				},
				children: EMOJIS[index % EMOJIS.length]
			}, index);
		})
	});
}
function PageShell({ children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "relative min-h-screen overflow-x-hidden",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FloatingEmojis, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("main", {
				className: "relative z-10 pt-20",
				children
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteFooter, {})
		]
	});
}
function PageHeader({ eyebrow, title, intro }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "relative overflow-hidden",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "pointer-events-none absolute -left-24 top-0 h-72 w-72 rounded-full bg-white/50 blur-3xl" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "pointer-events-none absolute -right-24 top-10 h-80 w-80 rounded-full bg-gold-gradient opacity-25 blur-3xl" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative mx-auto max-w-4xl px-6 pb-10 pt-14 text-center sm:px-10 sm:pt-20",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "inline-flex rounded-full bg-white/70 px-4 py-1.5 text-[0.65rem] font-medium uppercase tracking-[0.3em] text-foreground/70 backdrop-blur",
						children: eyebrow
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
						className: "mt-6 animate-fade-up font-display text-4xl font-light leading-[1.06] sm:text-6xl",
						children: title
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "gold-rule mx-auto mt-8 w-40" }),
					intro ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mx-auto mt-8 max-w-2xl text-base leading-relaxed text-foreground/75 sm:text-lg",
						children: intro
					}) : null
				]
			})
		]
	});
}
//#endregion
export { PageShell as n, PageHeader as t };
