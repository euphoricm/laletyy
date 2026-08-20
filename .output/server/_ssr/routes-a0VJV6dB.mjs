import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { h as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as PageShell } from "./PageShell-DqJcqw8a.mjs";
import { t as Confetti } from "./Confetti-BCvEsJkU.mjs";
import { i as Sparkles, m as ArrowRight } from "../_libs/lucide-react.mjs";
import { t as MediaSlot } from "./MediaSlot-CROKDzjG.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-a0VJV6dB.js
var import_jsx_runtime = require_jsx_runtime();
var rooms = [
	{
		to: "/letter",
		title: "The Letter",
		blurb: "A birthday note written only for Laleti."
	},
	{
		to: "/cake",
		title: "Make a Wish",
		blurb: "Blow the candles and send a wish into twenty."
	},
	{
		to: "/code",
		title: "Birthday Code",
		blurb: "Enter the birthday key to unlock a surprise."
	},
	{
		to: "/crossword",
		title: "Word Puzzle",
		blurb: "A playful Laleti crossword."
	},
	{
		to: "/fifty",
		title: "Twenty Reasons",
		blurb: "Twenty little reminders of why she is loved."
	},
	{
		to: "/hero",
		title: "Big Sister",
		blurb: "The things that make her unforgettable."
	},
	{
		to: "/gallery",
		title: "Gallery",
		blurb: "Her photos and videos, ready for every favourite moment."
	},
	{
		to: "/my-reply",
		title: "Memory Reel",
		blurb: "A home for all the birthday videos."
	},
	{
		to: "/prayers",
		title: "Blessings",
		blurb: "Good things for her new year."
	},
	{
		to: "/promises",
		title: "Promises",
		blurb: "What stays true long after the candles."
	},
	{
		to: "/wishes",
		title: "Wishes",
		blurb: "Leave Laleti a birthday message."
	},
	{
		to: "/finale",
		title: "One Last Thing",
		blurb: "A closing letter, always waiting for her."
	}
];
function Home() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(PageShell, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "relative overflow-hidden bg-mint-rich",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Confetti, { count: 18 }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "relative mx-auto grid max-w-7xl gap-12 px-6 pb-20 pt-16 md:grid-cols-2 md:items-center md:pt-24",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
					className: "inline-flex items-center gap-2 rounded-full bg-white/75 px-4 py-1.5 text-xs font-medium uppercase tracking-[0.22em]",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sparkles, { className: "h-3.5 w-3.5" }), "Her twentieth year"]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
					className: "mt-7 font-display text-5xl leading-none sm:text-7xl",
					children: [
						"Happy ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-gold font-semibold",
							children: "20th"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
						"Birthday,",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("i", { children: "Laleti." })
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-8 max-w-xl text-lg leading-relaxed text-foreground/75",
					children: "For the gorgeous, awesome girl who is so close to my heart. You are more than a birthday to celebrate. You are a whole person worth celebrating, today and always."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
					to: "/letter",
					className: "mt-9 inline-flex items-center gap-2 rounded-full bg-foreground px-7 py-3.5 text-sm font-medium text-background shadow-3d",
					children: ["Open your birthday letter ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "h-4 w-4" })]
				})
			] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mx-auto w-full max-w-md overflow-hidden rounded-[2.5rem] shadow-3d",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MediaSlot, {
					src: "/media/laleti-06.jpg",
					alt: "Laleti celebrating her twentieth birthday",
					className: "h-[480px] w-full object-cover"
				})
			})]
		})]
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "mx-auto max-w-6xl px-6 py-20",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "text-center font-hand text-3xl text-foreground/70",
			children: "twelve little rooms, all made for you."
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3",
			children: rooms.map((room, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
				to: room.to,
				className: "card-3d rounded-3xl bg-white/90 p-7 shadow-soft-mint",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-xs uppercase tracking-[.22em] text-foreground/50",
						children: String(i + 1).padStart(2, "0")
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "mt-3 font-display text-2xl",
						children: room.title
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-3 text-sm leading-relaxed text-foreground/70",
						children: room.blurb
					})
				]
			}, room.to))
		})]
	})] });
}
//#endregion
export { Home as component };
