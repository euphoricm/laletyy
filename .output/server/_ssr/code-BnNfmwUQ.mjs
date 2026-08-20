import { n as __toESM } from "../_runtime.mjs";
import { n as require_jsx_runtime, r as require_react } from "../_libs/react+tanstack__react-query.mjs";
import { g as useNavigate } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as PageShell, t as PageHeader } from "./PageShell-DqJcqw8a.mjs";
import { d as LockKeyhole } from "../_libs/lucide-react.mjs";
import { t as PASSCODE_HINT } from "./laleti-DWg3PRhO.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/code-BnNfmwUQ.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function CodePage() {
	const navigate = useNavigate();
	const [digits, setDigits] = (0, import_react.useState)([
		"",
		"",
		"",
		""
	]);
	const [status, setStatus] = (0, import_react.useState)(PASSCODE_HINT);
	const [unlocked, setUnlocked] = (0, import_react.useState)(false);
	const refs = (0, import_react.useRef)([]);
	const unlock = () => {
		if (digits.join("") === "2120") {
			setUnlocked(true);
			setStatus("Access granted, birthday girl. Opening your surprise...");
			window.setTimeout(() => navigate({ to: "/crossword" }), 900);
		} else setStatus("Almost. Try Laleti's birthday key again.");
	};
	const update = (value, index) => {
		const next = [...digits];
		next[index] = value.replace(/\D/g, "").slice(-1);
		setDigits(next);
		if (next[index] && refs.current[index + 1]) refs.current[index + 1]?.focus();
		if (next.every(Boolean) && next.join("") === "2120") {
			setUnlocked(true);
			setStatus("Access granted, birthday girl. Opening your surprise...");
			window.setTimeout(() => navigate({ to: "/crossword" }), 900);
		}
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(PageShell, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHeader, {
		eyebrow: "A small key, a big surprise",
		title: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
			"Unlock",
			" ",
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "text-gold font-semibold",
				children: "Laleti's world"
			})
		] }),
		intro: "Hint: her birthdate plus her new age is the key. Enter the four numbers that celebrate Laleti's twentieth year, then let the next surprise open."
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "mx-auto max-w-xl px-5 pb-16 text-center",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: `rounded-[2rem] bg-white/90 p-8 shadow-3d transition ${unlocked ? "scale-[1.02]" : ""}`,
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "mx-auto grid h-16 w-16 place-items-center rounded-full bg-gold-gradient text-white shadow-soft-gold",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LockKeyhole, { className: "h-7 w-7" })
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-8 flex justify-center gap-3",
					children: digits.map((digit, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
						ref: (element) => {
							refs.current[index] = element;
						},
						value: digit,
						onChange: (event) => update(event.target.value, index),
						onKeyDown: (event) => {
							if (event.key === "Backspace" && !digit) refs.current[index - 1]?.focus();
							if (event.key === "Enter") unlock();
						},
						inputMode: "numeric",
						maxLength: 1,
						"aria-label": `Birthday code digit ${index + 1}`,
						className: "h-14 w-12 rounded-xl border-2 border-lavender bg-lavender-soft/40 text-center font-display text-2xl outline-none focus:border-primary"
					}, index))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					onClick: unlock,
					className: "mt-7 rounded-full bg-foreground px-7 py-3.5 text-sm font-medium text-background shadow-3d",
					children: "Unlock"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: `mt-5 text-sm ${unlocked ? "text-primary" : "text-foreground/65"}`,
					children: status
				})
			]
		})
	})] });
}
//#endregion
export { CodePage as component };
