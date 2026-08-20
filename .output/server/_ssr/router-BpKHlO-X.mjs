import { n as __toESM } from "../_runtime.mjs";
import { n as require_jsx_runtime, r as require_react, t as QueryClientProvider } from "../_libs/react+tanstack__react-query.mjs";
import { _ as useRouter, c as HeadContent, d as Outlet, f as lazyRouteComponent, h as Link, m as createRootRouteWithContext, p as createFileRoute, s as Scripts, u as createRouter } from "../_libs/@tanstack/react-router+[...].mjs";
import { c as Music, o as Play, s as Pause, t as X, u as Menu } from "../_libs/lucide-react.mjs";
import { t as QueryClient } from "../_libs/tanstack__query-core.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/router-BpKHlO-X.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var styles_default = "/assets/styles-DDOEkAqg.css";
function reportLovableError(error, context = {}) {
	if (typeof window === "undefined") return;
	window.__lovableEvents?.captureException?.(error, {
		source: "react_error_boundary",
		route: window.location.pathname,
		...context
	}, {
		mechanism: "react_error_boundary",
		handled: false,
		severity: "error"
	});
	const message = error instanceof Response ? `Response ${error.status}${error.url ? ` at ${error.url}` : ""}` : error instanceof Error ? error.message : String(error);
	window.__lovableReportRuntimeError?.({
		message,
		stack: error instanceof Error ? error.stack : void 0,
		filename: window.location.pathname
	});
}
var navLinks = [
	{
		to: "/",
		label: "Home"
	},
	{
		to: "/letter",
		label: "Letter"
	},
	{
		to: "/cake",
		label: "Make a Wish"
	},
	{
		to: "/code",
		label: "Birthday Code"
	},
	{
		to: "/crossword",
		label: "Puzzle"
	},
	{
		to: "/fifty",
		label: "20 Reasons"
	},
	{
		to: "/hero",
		label: "Big Sister"
	},
	{
		to: "/gallery",
		label: "Gallery"
	},
	{
		to: "/his-words",
		label: "A Note"
	},
	{
		to: "/my-reply",
		label: "Memory Reel"
	},
	{
		to: "/prayers",
		label: "Blessings"
	},
	{
		to: "/promises",
		label: "Promises"
	},
	{
		to: "/wishes",
		label: "Wishes"
	},
	{
		to: "/finale",
		label: "Closing Letter"
	}
];
function SiteNav() {
	const [open, setOpen] = (0, import_react.useState)(false);
	const [scrolled, setScrolled] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		const onScroll = () => setScrolled(window.scrollY > 8);
		onScroll();
		window.addEventListener("scroll", onScroll);
		return () => window.removeEventListener("scroll", onScroll);
	}, []);
	(0, import_react.useEffect)(() => {
		document.body.style.overflow = open ? "hidden" : "";
	}, [open]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("header", {
		className: `fixed inset-x-0 top-0 z-40 transition-all ${scrolled ? "border-b border-white/50 bg-white/60 backdrop-blur-xl" : "bg-transparent"}`,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto grid max-w-7xl grid-cols-[minmax(0,1fr)_auto] items-center gap-4 px-5 py-4 sm:px-8",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
					to: "/",
					className: "flex min-w-0 items-center gap-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "grid h-10 w-10 shrink-0 place-items-center rounded-full bg-gold-gradient shadow-soft-gold",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "font-display text-base font-bold text-white",
							children: "20"
						})
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "min-w-0 truncate font-display text-lg font-semibold tracking-tight",
						children: "Laleti"
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
					className: "hidden items-center gap-1 xl:flex",
					children: navLinks.map((l) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: l.to,
						activeOptions: { exact: l.to === "/" },
						className: "rounded-full px-3 py-1.5 text-sm text-foreground/70 transition-colors hover:bg-white/60 hover:text-foreground",
						activeProps: { className: "bg-white text-foreground shadow-soft-mint" },
						children: l.label
					}, l.to))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					"aria-label": "Open menu",
					className: "grid h-11 w-11 shrink-0 place-items-center rounded-full bg-white/80 text-foreground shadow-soft-mint backdrop-blur xl:hidden",
					onClick: () => setOpen(true),
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Menu, { className: "h-5 w-5" })
				})
			]
		})
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: `fixed inset-0 z-50 transition ${open ? "pointer-events-auto" : "pointer-events-none"}`,
		"aria-hidden": !open,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: `absolute inset-0 transition-opacity ${open ? "opacity-100" : "opacity-0"}`,
			style: {
				background: "rgba(20,60,55,0.45)",
				backdropFilter: "blur(4px)"
			},
			onClick: () => setOpen(false)
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("aside", {
			className: `absolute right-0 top-0 h-full w-[86%] max-w-sm overflow-y-auto bg-mint-rich p-6 shadow-2xl transition-transform ${open ? "translate-x-0" : "translate-x-full"}`,
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center justify-between",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "font-display text-xl font-semibold",
						children: "Navigate"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						"aria-label": "Close menu",
						onClick: () => setOpen(false),
						className: "grid h-10 w-10 place-items-center rounded-full bg-white/70",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "h-5 w-5" })
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
					className: "mt-8 flex flex-col gap-1",
					children: navLinks.map((l, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: l.to,
						activeOptions: { exact: l.to === "/" },
						onClick: () => setOpen(false),
						className: "animate-fade-up rounded-2xl px-4 py-3 text-lg font-medium text-foreground/80 transition-colors hover:bg-white/60",
						activeProps: { className: "bg-white text-foreground shadow-soft-mint" },
						style: { animationDelay: `${i * 40}ms` },
						children: l.label
					}, l.to))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-10 font-hand text-2xl text-foreground/70",
					children: "twenty years, and every page is made with love."
				})
			]
		})]
	})] });
}
var BASE_VOLUME = .18;
function MusicPlayer() {
	const audioRef = (0, import_react.useRef)(null);
	const [playing, setPlaying] = (0, import_react.useState)(false);
	const [mounted, setMounted] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		setMounted(true);
		const a = audioRef.current;
		if (!a) return;
		const start = async () => {
			try {
				a.volume = BASE_VOLUME;
				a.muted = false;
				await a.play();
				setPlaying(true);
			} catch {
				setPlaying(false);
			}
		};
		start();
	}, []);
	const toggle = async () => {
		const a = audioRef.current;
		if (!a) return;
		if (playing) {
			a.pause();
			setPlaying(false);
		} else try {
			a.volume = BASE_VOLUME;
			a.muted = false;
			await a.play();
			setPlaying(true);
		} catch {
			setPlaying(false);
		}
	};
	if (!mounted) return null;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "fixed bottom-5 left-5 z-30",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
			onClick: toggle,
			className: "flex items-center gap-3 rounded-full bg-white/85 py-2 pl-2 pr-4 shadow-soft-gold backdrop-blur transition hover:bg-white",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "grid h-9 w-9 place-items-center rounded-full bg-gold-gradient text-white",
				children: playing ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Pause, { className: "h-4 w-4" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Play, { className: "h-4 w-4" })
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
				className: "flex items-center gap-1.5 text-sm font-medium text-foreground",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Music, { className: "h-3.5 w-3.5" }), playing ? "playing for Laleti" : "play Laleti's song"]
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("audio", {
			ref: audioRef,
			src: "/media/mimi1.mp3",
			loop: true,
			autoPlay: true,
			preload: "auto",
			className: "hidden"
		})]
	});
}
function NotFoundComponent() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex min-h-screen items-center justify-center bg-mint-gradient px-4",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "max-w-md text-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "font-display text-7xl font-bold",
					children: "404"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-4 font-hand text-2xl",
					children: "this page wandered off. the love didn't."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
					href: "/",
					className: "mt-6 inline-flex rounded-full bg-white px-5 py-2 font-medium shadow-soft-mint",
					children: "Go home"
				})
			]
		})
	});
}
function ErrorComponent({ error, reset }) {
	const router = useRouter();
	(0, import_react.useEffect)(() => {
		reportLovableError(error, { boundary: "tanstack_root_error_component" });
	}, [error]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex min-h-screen items-center justify-center bg-mint-gradient px-4",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "max-w-md text-center",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "font-display text-2xl",
				children: "Something hiccuped."
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				onClick: () => {
					router.invalidate();
					reset();
				},
				className: "mt-6 rounded-full bg-white px-5 py-2 shadow-soft-mint",
				children: "Try again"
			})]
		})
	});
}
var Route$14 = createRootRouteWithContext()({
	head: () => ({
		meta: [
			{ charSet: "utf-8" },
			{
				name: "viewport",
				content: "width=device-width, initial-scale=1"
			},
			{ title: "Happy 20th Birthday, Laleti" },
			{
				name: "description",
				content: "A birthday tribute website for Laleti, celebrating her twentieth year."
			},
			{
				name: "author",
				content: "Someone who loves Laleti dearly"
			},
			{
				property: "og:type",
				content: "website"
			},
			{
				name: "twitter:card",
				content: "summary_large_image"
			}
		],
		links: [
			{
				rel: "stylesheet",
				href: styles_default
			},
			{
				rel: "icon",
				href: "/favicon.ico",
				type: "image/x-icon"
			},
			{
				rel: "preconnect",
				href: "https://fonts.googleapis.com"
			},
			{
				rel: "preconnect",
				href: "https://fonts.gstatic.com",
				crossOrigin: "anonymous"
			},
			{
				rel: "stylesheet",
				href: "https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,300..800;1,9..144,300..800&family=Inter:wght@300..700&family=Caveat:wght@400..700&display=swap"
			}
		]
	}),
	shellComponent: RootShell,
	component: RootComponent,
	notFoundComponent: NotFoundComponent,
	errorComponent: ErrorComponent
});
function RootShell({ children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("html", {
		lang: "en",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("head", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(HeadContent, {}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("body", { children: [children, /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Scripts, {})] })]
	});
}
function RootComponent() {
	const { queryClient } = Route$14.useRouteContext();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(QueryClientProvider, {
		client: queryClient,
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteNav, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Outlet, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MusicPlayer, {})
		]
	});
}
var $$splitComponentImporter$13 = () => import("./routes-a0VJV6dB.mjs");
var Route$13 = createFileRoute("/")({ component: lazyRouteComponent($$splitComponentImporter$13, "component") });
var $$splitComponentImporter$12 = () => import("./cake-Cu3E6XUT.mjs");
var Route$12 = createFileRoute("/cake")({ component: lazyRouteComponent($$splitComponentImporter$12, "component") });
var $$splitComponentImporter$11 = () => import("./code-BnNfmwUQ.mjs");
var Route$11 = createFileRoute("/code")({ component: lazyRouteComponent($$splitComponentImporter$11, "component") });
var $$splitComponentImporter$10 = () => import("./crossword-DbXet9FH.mjs");
var Route$10 = createFileRoute("/crossword")({ component: lazyRouteComponent($$splitComponentImporter$10, "component") });
var $$splitComponentImporter$9 = () => import("./fifty-DOMTrmDr.mjs");
var Route$9 = createFileRoute("/fifty")({ component: lazyRouteComponent($$splitComponentImporter$9, "component") });
var $$splitComponentImporter$8 = () => import("./finale-YRhZ0F07.mjs");
var Route$8 = createFileRoute("/finale")({ component: lazyRouteComponent($$splitComponentImporter$8, "component") });
var $$splitComponentImporter$7 = () => import("./gallery-FsNDANqj.mjs");
var Route$7 = createFileRoute("/gallery")({ component: lazyRouteComponent($$splitComponentImporter$7, "component") });
var $$splitComponentImporter$6 = () => import("./hero-Cpby-hRG.mjs");
var Route$6 = createFileRoute("/hero")({ component: lazyRouteComponent($$splitComponentImporter$6, "component") });
var $$splitComponentImporter$5 = () => import("./his-words-cPZorvHV.mjs");
var Route$5 = createFileRoute("/his-words")({ component: lazyRouteComponent($$splitComponentImporter$5, "component") });
var $$splitComponentImporter$4 = () => import("./letter-CnmIqIOH.mjs");
var Route$4 = createFileRoute("/letter")({ component: lazyRouteComponent($$splitComponentImporter$4, "component") });
var $$splitComponentImporter$3 = () => import("./my-reply-DwOZaAI7.mjs");
var Route$3 = createFileRoute("/my-reply")({ component: lazyRouteComponent($$splitComponentImporter$3, "component") });
var $$splitComponentImporter$2 = () => import("./prayers-BLjecsgt.mjs");
var Route$2 = createFileRoute("/prayers")({ component: lazyRouteComponent($$splitComponentImporter$2, "component") });
var $$splitComponentImporter$1 = () => import("./promises-8BB6XZUk.mjs");
var Route$1 = createFileRoute("/promises")({ component: lazyRouteComponent($$splitComponentImporter$1, "component") });
var $$splitComponentImporter = () => import("./wishes-GiGZLVxj.mjs");
var Route = createFileRoute("/wishes")({
	head: () => ({ meta: [
		{ title: "Birthday Wishes for Laleti's 20th" },
		{
			name: "description",
			content: "A wall of birthday wishes for Laleti — read the messages and leave one of your own."
		},
		{
			property: "og:title",
			content: "Birthday Wishes for Laleti"
		},
		{
			property: "og:description",
			content: "Read the wishes for Laleti and leave one of your own."
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter, "component")
});
var rootRouteChildren = {
	IndexRoute: Route$13.update({
		id: "/",
		path: "/",
		getParentRoute: () => Route$14
	}),
	CakeRoute: Route$12.update({
		id: "/cake",
		path: "/cake",
		getParentRoute: () => Route$14
	}),
	CodeRoute: Route$11.update({
		id: "/code",
		path: "/code",
		getParentRoute: () => Route$14
	}),
	CrosswordRoute: Route$10.update({
		id: "/crossword",
		path: "/crossword",
		getParentRoute: () => Route$14
	}),
	FiftyRoute: Route$9.update({
		id: "/fifty",
		path: "/fifty",
		getParentRoute: () => Route$14
	}),
	FinaleRoute: Route$8.update({
		id: "/finale",
		path: "/finale",
		getParentRoute: () => Route$14
	}),
	GalleryRoute: Route$7.update({
		id: "/gallery",
		path: "/gallery",
		getParentRoute: () => Route$14
	}),
	HeroRoute: Route$6.update({
		id: "/hero",
		path: "/hero",
		getParentRoute: () => Route$14
	}),
	HisWordsRoute: Route$5.update({
		id: "/his-words",
		path: "/his-words",
		getParentRoute: () => Route$14
	}),
	LetterRoute: Route$4.update({
		id: "/letter",
		path: "/letter",
		getParentRoute: () => Route$14
	}),
	MyReplyRoute: Route$3.update({
		id: "/my-reply",
		path: "/my-reply",
		getParentRoute: () => Route$14
	}),
	PrayersRoute: Route$2.update({
		id: "/prayers",
		path: "/prayers",
		getParentRoute: () => Route$14
	}),
	PromisesRoute: Route$1.update({
		id: "/promises",
		path: "/promises",
		getParentRoute: () => Route$14
	}),
	WishesRoute: Route.update({
		id: "/wishes",
		path: "/wishes",
		getParentRoute: () => Route$14
	})
};
var routeTree = Route$14._addFileChildren(rootRouteChildren)._addFileTypes();
var getRouter = () => {
	return createRouter({
		routeTree,
		context: { queryClient: new QueryClient() },
		scrollRestoration: true,
		defaultPreloadStaleTime: 0
	});
};
//#endregion
export { getRouter };
