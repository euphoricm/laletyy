import { n as __toESM } from "../_runtime.mjs";
import { n as require_jsx_runtime, r as require_react } from "../_libs/react+tanstack__react-query.mjs";
import { h as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as PageShell, t as PageHeader } from "./PageShell-DqJcqw8a.mjs";
import { t as Confetti } from "./Confetti-BCvEsJkU.mjs";
import { i as Sparkles, l as Mic, n as Wind } from "../_libs/lucide-react.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/cake-Cu3E6XUT.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function CakePage() {
	const [blown, setBlown] = (0, import_react.useState)(false);
	const [listening, setListening] = (0, import_react.useState)(false);
	const [status, setStatus] = (0, import_react.useState)("Turn on the microphone, then blow toward it to put the candles out.");
	const streamRef = (0, import_react.useRef)(null);
	const frameRef = (0, import_react.useRef)(null);
	const blow = () => {
		if (blown) return;
		setBlown(true);
		setListening(false);
		setStatus("Your wish is sent. Happy 20th, Laleti.");
		streamRef.current?.getTracks().forEach((track) => track.stop());
		if (frameRef.current) cancelAnimationFrame(frameRef.current);
	};
	const listen = async () => {
		try {
			const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
			streamRef.current = stream;
			const context = new AudioContext();
			const analyser = context.createAnalyser();
			context.createMediaStreamSource(stream).connect(analyser);
			analyser.fftSize = 256;
			const data = new Uint8Array(analyser.frequencyBinCount);
			let loudFrames = 0;
			setListening(true);
			setStatus("Listening now. Make a steady blow toward your microphone.");
			const check = () => {
				analyser.getByteFrequencyData(data);
				loudFrames = data.reduce((sum, value) => sum + value, 0) / data.length > 42 ? loudFrames + 1 : 0;
				if (loudFrames > 5) blow();
				else frameRef.current = requestAnimationFrame(check);
			};
			check();
		} catch {
			setStatus("Microphone access is unavailable here. Use the blow button below to make your wish.");
		}
	};
	(0, import_react.useEffect)(() => () => {
		streamRef.current?.getTracks().forEach((track) => track.stop());
		if (frameRef.current) cancelAnimationFrame(frameRef.current);
	}, []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(PageShell, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "relative",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Confetti, { count: 18 }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHeader, {
			eyebrow: "A birthday wish",
			title: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
				"Make a wish,",
				" ",
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "text-gold font-semibold",
					children: "Laleti"
				})
			] }),
			intro: "Close your eyes for one little second, keep the wish to yourself, then blow toward your microphone and watch the candles go out."
		})]
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "mx-auto max-w-2xl px-5 pb-16 text-center",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative mx-auto h-[24rem] w-full max-w-md",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute bottom-0 left-1/2 h-40 w-80 -translate-x-1/2 rounded-t-[3rem] bg-[radial-gradient(circle_at_top,_#f9efe4_0%,_#f3d9c0_24%,_#d4a075_56%,_#a96d4a_100%)] shadow-[0_24px_60px_rgba(118,81,49,0.26)]" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute bottom-14 left-1/2 h-11 w-[20rem] -translate-x-1/2 rounded-t-[2rem] border border-[#f8efe7]/70 bg-[linear-gradient(180deg,#fffaf6_0%,#ffe9c7_100%)] shadow-[inset_0_5px_14px_rgba(255,255,255,0.8)]" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute bottom-[7.6rem] left-1/2 h-6 w-[21rem] -translate-x-1/2 rounded-full border border-[#cb8d5d]/40 bg-[linear-gradient(180deg,#c98a63_0%,#e4b88d_100%)] opacity-80" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute bottom-[8rem] left-1/2 h-6 w-[22rem] -translate-x-1/2 rounded-full bg-[radial-gradient(circle_at_center,_rgba(255,255,255,0.7),_rgba(255,255,255,0)_68%)] opacity-70" }),
					[...Array(20)].map((_, i) => {
						const left = 16 + i % 10 * 7.6;
						const bottom = i < 10 ? 12 : 8;
						return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "absolute h-20 w-3 rounded-full bg-[linear-gradient(180deg,#fff7e3_0%,#f5d17d_28%,#e6a85c_100%)] shadow-[0_8px_16px_rgba(185,134,65,0.4)]",
							style: {
								left: `${left}%`,
								bottom: `${bottom}rem`
							},
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: `absolute -top-8 left-1/2 h-9 w-5 -translate-x-1/2 rounded-[100%] bg-[radial-gradient(circle_at_50%_35%,_#fff3b8_0%,_#f5d273_28%,_#dca24d_100%)] shadow-[0_0_18px_rgba(255,210,122,0.75)] transition-all duration-700 ${blown ? "scale-0 opacity-0" : "animate-pulse"}`,
								style: { clipPath: "polygon(50% 0%, 100% 100%, 0% 100%)" }
							})
						}, i);
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "absolute inset-x-20 bottom-14 flex items-center justify-center",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "h-16 w-16 rounded-full bg-[radial-gradient(circle_at_30%_30%,_#fffdf6_0%,_#efd9b7_28%,_#d4a66e_100%)] shadow-[0_0_18px_rgba(255,214,149,0.8)]" })
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "absolute bottom-8 left-1/2 -translate-x-1/2 font-display text-6xl font-semibold text-white drop-shadow-[0_6px_12px_rgba(120,84,49,0.35)]",
						children: "20"
					})
				]
			}),
			!blown && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-10 flex flex-wrap justify-center gap-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
					onClick: listen,
					disabled: listening,
					className: "inline-flex items-center gap-2 rounded-full bg-foreground px-7 py-3.5 text-sm font-medium text-background shadow-3d disabled:opacity-70",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mic, { className: "h-4 w-4" }), listening ? "Listening for your blow" : "Use microphone"]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
					onClick: blow,
					className: "inline-flex items-center gap-2 rounded-full bg-white px-7 py-3.5 text-sm font-medium text-foreground shadow-soft-mint",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Wind, { className: "h-4 w-4" }), "Blow candles"]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mx-auto mt-5 max-w-md text-sm leading-relaxed text-foreground/65",
				children: status
			}),
			blown && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-8 animate-fade-up",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sparkles, { className: "mx-auto h-7 w-7 text-gold" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-3 font-hand text-3xl",
					children: "May this new year be as beautiful, bright and full of joy as you are."
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
				to: "/code",
				className: "mt-12 inline-block text-sm font-medium text-primary",
				children: "Open the birthday code"
			})
		]
	})] });
}
//#endregion
export { CakePage as component };
