import { n as __toESM } from "../_runtime.mjs";
import { n as require_jsx_runtime, r as require_react } from "../_libs/react+tanstack__react-query.mjs";
import { h as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as PageShell, t as PageHeader } from "./PageShell-DqJcqw8a.mjs";
import { t as Confetti } from "./Confetti-BCvEsJkU.mjs";
import { a as Send, m as ArrowRight, p as Heart } from "../_libs/lucide-react.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/wishes-GiGZLVxj.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function NextRoom({ to, label }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "mx-auto max-w-3xl px-6 pb-8 pt-16 text-center sm:px-10",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
			to,
			className: "group inline-flex items-center gap-2 rounded-full bg-foreground px-7 py-3.5 text-center text-sm font-medium text-background shadow-3d transition hover:-translate-y-0.5",
			children: [label, /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "h-4 w-4 shrink-0 transition group-hover:translate-x-1" })]
		})
	});
}
var STORAGE_KEY = "laleti20-wishes";
function WishesPage() {
	const [wishes, setWishes] = (0, import_react.useState)([]);
	const [name, setName] = (0, import_react.useState)("");
	const [message, setMessage] = (0, import_react.useState)("");
	const [sent, setSent] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		try {
			const raw = localStorage.getItem(STORAGE_KEY);
			if (raw) setWishes(JSON.parse(raw));
		} catch {}
	}, []);
	const submit = (e) => {
		e.preventDefault();
		if (!name.trim() || !message.trim()) return;
		const next = [{
			name: name.trim(),
			message: message.trim()
		}, ...wishes];
		setWishes(next);
		try {
			localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
		} catch {}
		setName("");
		setMessage("");
		setSent(true);
		setTimeout(() => setSent(false), 3200);
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(PageShell, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "relative",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Confetti, { count: 16 }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHeader, {
				eyebrow: "Chapter 09",
				title: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
					"The ",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-gold font-semibold",
						children: "wishes"
					}),
					" wall"
				] }),
				intro: "Everyone who loves Laleti gets a square on this wall. Add yours and make her birthday sweeter."
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "mx-auto max-w-3xl px-5 pb-4 sm:px-10",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
				onSubmit: submit,
				className: "rounded-[2rem] bg-white/92 p-7 shadow-3d backdrop-blur sm:p-10",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
						className: "block text-xs uppercase tracking-[0.3em] text-foreground/55",
						children: "Your name"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
						value: name,
						onChange: (e) => setName(e.target.value),
						placeholder: "Your name",
						className: "mt-3 w-full rounded-2xl border border-border bg-secondary px-5 py-3.5 text-foreground outline-none transition focus:border-primary"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
						className: "mt-6 block text-xs uppercase tracking-[0.3em] text-foreground/55",
						children: "Your birthday wish"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
						value: message,
						onChange: (e) => setMessage(e.target.value),
						rows: 4,
						placeholder: "Happy 20th, Laleti...",
						className: "mt-3 w-full resize-none rounded-2xl border border-border bg-secondary px-5 py-3.5 text-foreground outline-none transition focus:border-primary"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						type: "submit",
						className: "mt-6 inline-flex items-center gap-2 rounded-full bg-foreground px-7 py-3.5 text-sm font-medium text-background shadow-3d transition hover:-translate-y-0.5",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Send, { className: "h-4 w-4" }), " Add my wish"]
					}),
					sent ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-4 font-hand text-2xl text-primary",
						children: "added to the wall. thank you 🫶"
					}) : null
				]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "mx-auto max-w-6xl px-5 pt-12 sm:px-10",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "scene-3d grid gap-5 sm:grid-cols-2 lg:grid-cols-3",
				children: [...wishes, ...seedWishes].map((w, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "card-3d relative overflow-hidden rounded-3xl bg-white/90 p-7 shadow-soft-mint backdrop-blur",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Heart, { className: "h-5 w-5 text-gold" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-4 leading-relaxed text-foreground/80",
							children: w.message
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "mt-5 font-hand text-2xl text-foreground/70",
							children: ["— ", w.name]
						})
					]
				}, i))
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-8 text-center text-xs text-foreground/50",
				children: "Wishes you add are saved on this device."
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(NextRoom, {
			to: "/finale",
			label: "One last thing for Laleti"
		})
	] });
}
var seedWishes = [
	{
		name: "Precious",
		message: "Happy 20th Birthday, Laleti. May your new year bring beautiful memories, huge joy and every good thing your heart is hoping for."
	},
	{
		name: "Sissy",
		message: "You are gorgeous, awesome and so deeply loved. Keep shining exactly as you are."
	},
	{
		name: "Makena",
		message: "Cheers to twenty wonderful years and to a future that is even brighter."
	}
];
//#endregion
export { WishesPage as component };
