import { n as __toESM } from "../_runtime.mjs";
import { n as require_jsx_runtime, r as require_react } from "../_libs/react+tanstack__react-query.mjs";
import { h as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as PageShell, t as PageHeader } from "./PageShell-DqJcqw8a.mjs";
import { n as WORDS } from "./laleti-DWg3PRhO.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/crossword-DbXet9FH.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var SIZE = 14;
var LETTERS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var DIRECTIONS = [
	[0, 1],
	[1, 0],
	[1, 1],
	[-1, 1],
	[0, -1],
	[-1, 0],
	[-1, -1],
	[1, -1]
];
function buildGrid(seed) {
	let state = seed;
	const random = () => {
		state = (state * 1103515245 + 12345) % 2147483648;
		return state / 2147483648;
	};
	const grid = Array.from({ length: SIZE * SIZE }, () => null);
	const placements = [];
	for (const word of WORDS) for (let attempt = 0; attempt < 1e3; attempt++) {
		const [dr, dc] = DIRECTIONS[Math.floor(random() * DIRECTIONS.length)];
		const row = Math.floor(random() * SIZE);
		const col = Math.floor(random() * SIZE);
		const cells = [];
		for (let i = 0; i < word.length; i++) {
			const r = row + dr * i;
			const c = col + dc * i;
			const index = r * SIZE + c;
			if (r < 0 || r >= SIZE || c < 0 || c >= SIZE || grid[index] && grid[index] !== word[i]) {
				cells.length = 0;
				break;
			}
			cells.push(index);
		}
		if (!cells.length) continue;
		cells.forEach((index, i) => {
			grid[index] = word[i];
		});
		placements.push({
			word,
			cells
		});
		break;
	}
	return {
		letters: grid.map((letter) => letter ?? LETTERS[Math.floor(random() * 26)]),
		placements
	};
}
function WordSearch() {
	const seed = (0, import_react.useMemo)(() => Math.floor(Math.random() * 2147483647), []);
	const { letters, placements } = (0, import_react.useMemo)(() => buildGrid(seed), [seed]);
	const [found, setFound] = (0, import_react.useState)([]);
	const [selection, setSelection] = (0, import_react.useState)([]);
	const [dragging, setDragging] = (0, import_react.useState)(false);
	const [hintCells, setHintCells] = (0, import_react.useState)([]);
	const [status, setStatus] = (0, import_react.useState)("Start with LALETI. She deserves to be found first.");
	const foundCells = (0, import_react.useMemo)(() => new Set(placements.filter((p) => found.includes(p.word)).flatMap((p) => p.cells)), [found, placements]);
	const lineFrom = (start, end) => {
		const r1 = Math.floor(start / SIZE), c1 = start % SIZE, r2 = Math.floor(end / SIZE), c2 = end % SIZE;
		const rowDistance = Math.abs(r2 - r1), colDistance = Math.abs(c2 - c1);
		if (rowDistance && colDistance && rowDistance !== colDistance) return null;
		const dr = Math.sign(r2 - r1), dc = Math.sign(c2 - c1), steps = Math.max(rowDistance, colDistance);
		return Array.from({ length: steps + 1 }, (_, i) => (r1 + dr * i) * SIZE + c1 + dc * i);
	};
	const commit = (cells) => {
		const word = cells.map((index) => letters[index]).join(""), reversed = [...word].reverse().join("");
		const hit = placements.find((p) => !found.includes(p.word) && (p.word === word || p.word === reversed) && p.cells.length === cells.length);
		if (hit) {
			setFound((prev) => [...prev, hit.word]);
			setStatus(`${hit.word} found - that is ${found.length + 1} of ${WORDS.length}.`);
		} else if (cells.length > 1) setStatus("Not this one. Try another straight line, forwards or backwards.");
		setSelection([]);
	};
	const hint = () => {
		const missing = placements.find((p) => !found.includes(p.word));
		if (!missing) return;
		setHintCells([missing.cells[0]]);
		setStatus(`Hint: ${missing.word} starts on the glowing letter.`);
		window.setTimeout(() => setHintCells([]), 3200);
	};
	const complete = found.length === WORDS.length;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(PageShell, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHeader, {
			eyebrow: "A tiny game, a big fuss",
			title: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
				"Laleti's sweet",
				" ",
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "text-gold font-semibold",
					children: "word search"
				})
			] }),
			intro: `There are ${WORDS.length} words hidden in here, and every one is about you. Drag across a word in a straight line, forwards or backwards.`
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "mx-auto grid max-w-6xl gap-8 px-5 pb-8 lg:grid-cols-[minmax(0,1fr)_260px]",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "select-none rounded-3xl bg-white/90 p-3 shadow-soft-mint sm:p-5",
				onPointerUp: () => {
					setDragging(false);
					if (selection.length) commit(selection);
				},
				onPointerLeave: () => {
					setDragging(false);
					setSelection([]);
				},
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "grid gap-0.5",
					style: { gridTemplateColumns: `repeat(${SIZE}, minmax(0, 1fr))` },
					children: letters.map((letter, index) => {
						const selected = selection.includes(index), isFound = foundCells.has(index), isHint = hintCells.includes(index);
						return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							onPointerDown: () => {
								setDragging(true);
								setSelection([index]);
							},
							onPointerEnter: () => {
								if (!dragging || !selection.length) return;
								const line = lineFrom(selection[0], index);
								if (line) setSelection(line);
							},
							className: "aspect-square rounded-md text-[0.62rem] font-bold uppercase transition sm:text-sm",
							style: {
								background: isFound ? "linear-gradient(120deg,#b8c0ff,#e7d8ff)" : selected ? "#ffd5e7" : "rgba(255,255,255,.62)",
								color: isFound || selected ? "#3c2f66" : void 0,
								boxShadow: isHint ? "0 0 0 3px #f084b4" : void 0
							},
							children: letter
						}, index);
					})
				})
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("aside", {
				className: "rounded-3xl bg-white/90 px-5 py-6 shadow-soft-mint",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
						className: "font-display text-xl",
						children: [
							"Found ",
							found.length,
							"/",
							WORDS.length
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
						className: "mt-4 grid grid-cols-2 gap-1.5 text-sm",
						children: WORDS.map((word) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
							className: found.includes(word) ? "font-semibold text-primary line-through" : "text-foreground/60",
							children: word
						}, word))
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						onClick: hint,
						className: "mt-6 w-full rounded-full border border-primary/25 bg-white px-5 py-3 text-sm font-medium text-primary",
						children: "Hint"
					})
				]
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "mx-auto max-w-2xl px-5 pb-8 text-center text-sm text-foreground/70",
			children: complete ? "Every word found. Twenty out of twenty, just like your year." : status
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "pb-16 text-center",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
				to: "/gallery",
				className: "inline-flex rounded-full bg-foreground px-7 py-3.5 text-sm font-medium text-background shadow-3d",
				children: "Continue to the gallery"
			})
		})
	] });
}
//#endregion
export { WordSearch as component };
