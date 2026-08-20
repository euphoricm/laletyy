import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { h as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as PageShell, t as PageHeader } from "./PageShell-DqJcqw8a.mjs";
import { t as MediaSlot } from "./MediaSlot-CROKDzjG.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/gallery-FsNDANqj.js
var import_jsx_runtime = require_jsx_runtime();
var photos = [
	"A little glow",
	"Pretty without trying",
	"Main character energy",
	"Soft smile, big heart",
	"A whole mood",
	"Birthday girl magic",
	"Just Laleti things",
	"A smile that lights up the room",
	"A quiet little sparkle"
];
var galleryImages = [
	"/media/laleti-01.jpg",
	"/media/laleti-02.jpg",
	"/media/laleti-03.jpg",
	"/media/laleti-04.jpg",
	"/media/laleti-05.jpg",
	"/media/laleti-06.jpg",
	"/media/laleti-07.jpg"
];
function GalleryPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(PageShell, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHeader, {
			eyebrow: "Twenty in pictures",
			title: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: ["A gallery of ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "text-gold font-semibold",
				children: "Laleti"
			})] }),
			intro: "A collection of beautiful moments, favourite smiles and the moving memories that make this birthday story feel alive."
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "mx-auto grid max-w-6xl gap-6 px-5 pb-10 sm:grid-cols-2 lg:grid-cols-3",
			children: galleryImages.map((src, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("figure", {
				className: "overflow-hidden rounded-3xl bg-white/90 shadow-soft-mint",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MediaSlot, {
					src,
					alt: `Laleti memory ${i + 1}`,
					className: "h-80 w-full object-cover"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("figcaption", {
					className: "p-5 font-hand text-2xl text-foreground/75",
					children: photos[i] ?? "A little sparkle"
				})]
			}, `${src}-${i}`))
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "mx-auto grid max-w-6xl gap-6 px-5 pb-10 sm:grid-cols-2 lg:grid-cols-3",
			children: [
				1,
				2,
				3
			].map((n) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("figure", {
				className: "overflow-hidden rounded-3xl bg-white/90 shadow-soft-mint",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("video", {
					controls: true,
					preload: "metadata",
					className: "h-80 w-full bg-lavender-gradient object-cover",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("source", {
						src: `/media/laleti-video-0${n}.mp4`,
						type: "video/mp4"
					})
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("figcaption", {
					className: "p-5 font-hand text-2xl text-foreground/75",
					children: "A moment in motion"
				})]
			}, n))
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "pb-16 text-center",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
				to: "/my-reply",
				className: "text-sm font-medium text-primary",
				children: "Continue to the memory reel"
			})
		})
	] });
}
//#endregion
export { GalleryPage as component };
