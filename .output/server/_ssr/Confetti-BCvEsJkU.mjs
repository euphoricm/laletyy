import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/Confetti-BCvEsJkU.js
var import_jsx_runtime = require_jsx_runtime();
var EMOJIS = [
	"💗",
	"💕",
	"🌸",
	"🩷",
	"✨",
	"🎀"
];
function Confetti({ count = 18 }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "pointer-events-none absolute inset-0 overflow-hidden",
		"aria-hidden": true,
		children: Array.from({ length: count }, (_, i) => ({
			left: i * 97 % 100,
			delay: i * .7 % 9,
			dur: 8 + i * 1.3 % 6,
			emoji: EMOJIS[i % EMOJIS.length]
		})).map((p, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "animate-rise absolute bottom-0 text-xl drop-shadow-sm",
			style: {
				left: `${p.left}%`,
				animationDelay: `${p.delay}s`,
				animationDuration: `${p.dur}s`
			},
			children: p.emoji
		}, i))
	});
}
//#endregion
export { Confetti as t };
