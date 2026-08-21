globalThis.__nitro_main__ = import.meta.url;
import { n as HTTPError, r as defineLazyEventHandler, t as H3Core } from "./_libs/h3+rou3+srvx.mjs";
import { t as HookableCore } from "./_libs/hookable.mjs";
import { r as FastResponse } from "./_libs/h3-v2+rou3+srvx.mjs";
//#region #nitro-vite-setup
function lazyService(loader) {
	let promise, mod;
	return { fetch(req) {
		if (mod) return mod.fetch(req);
		if (!promise) promise = loader().then((_mod) => mod = _mod.default || _mod);
		return promise.then((mod) => mod.fetch(req));
	} };
}
var services = { ["ssr"]: lazyService(() => import("./_ssr/ssr.mjs")) };
globalThis.__nitro_vite_envs__ = services;
//#endregion
//#region #nitro/virtual/public-assets-data
var public_assets_data_default = {
	"/favicon.ico": {
		"type": "image/vnd.microsoft.icon",
		"etag": "\"4f95-3RXc3p2mhEAs1WBwaIvE0Y0uu0Y\"",
		"mtime": "2026-07-30T00:38:56.556Z",
		"size": 20373,
		"path": "../public/favicon.ico"
	},
	"/robots.txt": {
		"type": "text/plain; charset=utf-8",
		"etag": "\"ae-hLVBrSrDdpIw3Xl0dJPRkupPepQ\"",
		"mtime": "2026-07-30T00:38:56.558Z",
		"size": 174,
		"path": "../public/robots.txt"
	},
	"/assets/arrow-right-Dvneyune.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"9a-DEBXBgjMAVTLA1xT3pG4cdAai7Y\"",
		"mtime": "2026-08-21T00:04:54.083Z",
		"size": 154,
		"path": "../public/assets/arrow-right-Dvneyune.js"
	},
	"/assets/code-DDNbYrIL.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"990-oAskboVv1ifnoY+EqjAmju2LPtk\"",
		"mtime": "2026-08-21T00:04:54.084Z",
		"size": 2448,
		"path": "../public/assets/code-DDNbYrIL.js"
	},
	"/assets/cake-BFRsVopp.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"146b-xZ3nr+rR3l5qe0LD7EbBjlNRp4M\"",
		"mtime": "2026-08-21T00:04:54.083Z",
		"size": 5227,
		"path": "../public/assets/cake-BFRsVopp.js"
	},
	"/assets/Confetti-Cd6XPSGl.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"224-DIhDIV/pDet7X+KtR6iePy5SYzY\"",
		"mtime": "2026-08-21T00:04:54.079Z",
		"size": 548,
		"path": "../public/assets/Confetti-Cd6XPSGl.js"
	},
	"/assets/crossword-CkQ_GhTR.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"102a-CjPUfA20QJLy7+sYfw0+x2iZM5o\"",
		"mtime": "2026-08-21T00:04:54.085Z",
		"size": 4138,
		"path": "../public/assets/crossword-CkQ_GhTR.js"
	},
	"/assets/heart-CqE8cquc.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"f7-QwhtitXzM2QYhGX11Sg7UqPMLHU\"",
		"mtime": "2026-08-21T00:04:54.086Z",
		"size": 247,
		"path": "../public/assets/heart-CqE8cquc.js"
	},
	"/assets/fifty-vYjl6jUi.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"e0d-CKFnHXycw2keeJzyOztU/5JCe3c\"",
		"mtime": "2026-08-21T00:04:54.085Z",
		"size": 3597,
		"path": "../public/assets/fifty-vYjl6jUi.js"
	},
	"/assets/finale-D0DjFYE0.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"93c-/xu/xKge1XB9ULS1+qwBBQECYJM\"",
		"mtime": "2026-08-21T00:04:54.086Z",
		"size": 2364,
		"path": "../public/assets/finale-D0DjFYE0.js"
	},
	"/assets/hero-t0ZxeMtj.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"6b3-Rp4XYIv9bSG4uW10Rzp/95Nui5Y\"",
		"mtime": "2026-08-21T00:04:54.088Z",
		"size": 1715,
		"path": "../public/assets/hero-t0ZxeMtj.js"
	},
	"/assets/gallery-D_gIMQ19.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"5e2-t5tncrr6tFhELxeokKmEjiMiY98\"",
		"mtime": "2026-08-21T00:04:54.086Z",
		"size": 1506,
		"path": "../public/assets/gallery-D_gIMQ19.js"
	},
	"/assets/letter-0BoOdPnZ.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"d39-GS6u12oWiP28j4yGpVwQArn4uxc\"",
		"mtime": "2026-08-21T00:04:54.090Z",
		"size": 3385,
		"path": "../public/assets/letter-0BoOdPnZ.js"
	},
	"/assets/MediaSlot-Y1Nm-L_m.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"349-1tliVK1vFjKXTR/2Q/0pgpim1XE\"",
		"mtime": "2026-08-21T00:04:54.080Z",
		"size": 841,
		"path": "../public/assets/MediaSlot-Y1Nm-L_m.js"
	},
	"/assets/laleti-BLZkUBUP.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"126-xm0DFwP+OeIUzdMSiaEHOP2vBS8\"",
		"mtime": "2026-08-21T00:04:54.089Z",
		"size": 294,
		"path": "../public/assets/laleti-BLZkUBUP.js"
	},
	"/assets/PageShell-BuZCoam2.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"dbf-lWBDX2Q0/xJuCFyoQGmrB3MQHVI\"",
		"mtime": "2026-08-21T00:04:54.082Z",
		"size": 3519,
		"path": "../public/assets/PageShell-BuZCoam2.js"
	},
	"/assets/my-reply-Dx6NZeFh.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"544-NfMmUomC/GxXZ6T/JtTjYKSUdRE\"",
		"mtime": "2026-08-21T00:04:54.091Z",
		"size": 1348,
		"path": "../public/assets/my-reply-Dx6NZeFh.js"
	},
	"/assets/prayers-BuU_y22U.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"633-dZBtVxw7Jd5u5TyoeoZJj1XgM/A\"",
		"mtime": "2026-08-21T00:04:54.092Z",
		"size": 1587,
		"path": "../public/assets/prayers-BuU_y22U.js"
	},
	"/assets/promises-CW88QMpw.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"561-lInG/DXvIl+qmLj7wEZotYDbYtI\"",
		"mtime": "2026-08-21T00:04:54.092Z",
		"size": 1377,
		"path": "../public/assets/promises-CW88QMpw.js"
	},
	"/assets/sparkles-Bx1xW0-S.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"1e3-Bc4fn3Uw5lmKR0Piay4n9ztwsF8\"",
		"mtime": "2026-08-21T00:04:54.093Z",
		"size": 483,
		"path": "../public/assets/sparkles-Bx1xW0-S.js"
	},
	"/assets/TributeRoom-D91FuRh3.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"437-5LDg9GEH0CWpR7ILhEex8BetUuU\"",
		"mtime": "2026-08-21T00:04:54.082Z",
		"size": 1079,
		"path": "../public/assets/TributeRoom-D91FuRh3.js"
	},
	"/assets/routes-DIKjwmcv.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"dd0-JNP29nDaU2LPG8J4P2ag7PrNQj8\"",
		"mtime": "2026-08-21T00:04:54.093Z",
		"size": 3536,
		"path": "../public/assets/routes-DIKjwmcv.js"
	},
	"/assets/index-DVhSCvUs.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"56e01-n7SafmblXz2mJlIlc7UZHAodfw4\"",
		"mtime": "2026-08-21T00:04:54.079Z",
		"size": 355841,
		"path": "../public/assets/index-DVhSCvUs.js"
	},
	"/assets/his-words-BBPws6y1.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"655-ZMEax8XkDDna1fSHVzikXdXW3tg\"",
		"mtime": "2026-08-21T00:04:54.089Z",
		"size": 1621,
		"path": "../public/assets/his-words-BBPws6y1.js"
	},
	"/assets/styles-DDOEkAqg.css": {
		"type": "text/css; charset=utf-8",
		"etag": "\"1590e-m7v/rQh1ca5jxGTyXLBcJzJPn58\"",
		"mtime": "2026-08-21T00:04:54.095Z",
		"size": 88334,
		"path": "../public/assets/styles-DDOEkAqg.css"
	},
	"/assets/wishes-CwWAm-sa.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"1052-vWY/78Zc3//c86rwIzLhE10JUP0\"",
		"mtime": "2026-08-21T00:04:54.095Z",
		"size": 4178,
		"path": "../public/assets/wishes-CwWAm-sa.js"
	},
	"/media/laleti-05.jpg": {
		"type": "image/jpeg",
		"etag": "\"4ac2-e+M/496tKgYsdYi4PxRcbtCRG0c\"",
		"mtime": "2026-08-20T18:41:40.329Z",
		"size": 19138,
		"path": "../public/media/laleti-05.jpg"
	},
	"/media/laleti-02.jpg": {
		"type": "image/jpeg",
		"etag": "\"15426-QPldoA/y6128cpsNiGwzfSIL0WQ\"",
		"mtime": "2026-08-20T18:40:28.486Z",
		"size": 87078,
		"path": "../public/media/laleti-02.jpg"
	},
	"/media/laleti-04.jpg": {
		"type": "image/jpeg",
		"etag": "\"fc1a-Tc3X6OHtr1RkULX1ezvjBsTKbAk\"",
		"mtime": "2026-08-20T18:41:32.265Z",
		"size": 64538,
		"path": "../public/media/laleti-04.jpg"
	},
	"/media/laleti-03.jpg": {
		"type": "image/jpeg",
		"etag": "\"1d9bd-lPXRWctltkO/TggGkmzk/EFh4Pw\"",
		"mtime": "2026-08-20T18:40:49.891Z",
		"size": 121277,
		"path": "../public/media/laleti-03.jpg"
	},
	"/media/laleti-01.jpg": {
		"type": "image/jpeg",
		"etag": "\"21fa4-g8F4QFm4/4/oefH4BXd/wcRrlJM\"",
		"mtime": "2026-08-20T18:40:10.708Z",
		"size": 139172,
		"path": "../public/media/laleti-01.jpg"
	},
	"/media/laleti-06.jpg": {
		"type": "image/jpeg",
		"etag": "\"17491-oIiMlrD8dCv9qEdoezusc/XqvpA\"",
		"mtime": "2026-08-20T18:49:41.875Z",
		"size": 95377,
		"path": "../public/media/laleti-06.jpg"
	},
	"/media/laleti-07.jpg": {
		"type": "image/jpeg",
		"etag": "\"13756-gk7C4MvYqn/DweXN1EXLsYWL4c0\"",
		"mtime": "2026-08-20T18:50:08.336Z",
		"size": 79702,
		"path": "../public/media/laleti-07.jpg"
	},
	"/media/laleti4.jpeg": {
		"type": "image/jpeg",
		"etag": "\"fc1a-Tc3X6OHtr1RkULX1ezvjBsTKbAk\"",
		"mtime": "2026-08-20T18:41:32.265Z",
		"size": 64538,
		"path": "../public/media/laleti4.jpeg"
	},
	"/media/laleti2.jpeg": {
		"type": "image/jpeg",
		"etag": "\"15426-QPldoA/y6128cpsNiGwzfSIL0WQ\"",
		"mtime": "2026-08-20T18:40:28.486Z",
		"size": 87078,
		"path": "../public/media/laleti2.jpeg"
	},
	"/media/laleti7.jpeg": {
		"type": "image/jpeg",
		"etag": "\"13756-gk7C4MvYqn/DweXN1EXLsYWL4c0\"",
		"mtime": "2026-08-20T18:50:08.336Z",
		"size": 79702,
		"path": "../public/media/laleti7.jpeg"
	},
	"/media/laleti1.jpeg": {
		"type": "image/jpeg",
		"etag": "\"21fa4-g8F4QFm4/4/oefH4BXd/wcRrlJM\"",
		"mtime": "2026-08-20T18:40:10.708Z",
		"size": 139172,
		"path": "../public/media/laleti1.jpeg"
	},
	"/media/laleti6.jpeg": {
		"type": "image/jpeg",
		"etag": "\"17491-oIiMlrD8dCv9qEdoezusc/XqvpA\"",
		"mtime": "2026-08-20T18:49:41.875Z",
		"size": 95377,
		"path": "../public/media/laleti6.jpeg"
	},
	"/media/laleti5.jpeg": {
		"type": "image/jpeg",
		"etag": "\"4ac2-e+M/496tKgYsdYi4PxRcbtCRG0c\"",
		"mtime": "2026-08-20T18:41:40.329Z",
		"size": 19138,
		"path": "../public/media/laleti5.jpeg"
	},
	"/media/README.md": {
		"type": "text/markdown; charset=utf-8",
		"etag": "\"129-P67cxaUmoglakaNWPeCi4jEXxGE\"",
		"mtime": "2026-08-20T16:51:47.807Z",
		"size": 297,
		"path": "../public/media/README.md"
	},
	"/media/laleti3.jpeg": {
		"type": "image/jpeg",
		"etag": "\"1d9bd-lPXRWctltkO/TggGkmzk/EFh4Pw\"",
		"mtime": "2026-08-20T18:40:49.891Z",
		"size": 121277,
		"path": "../public/media/laleti3.jpeg"
	},
	"/media/instagram/instagram-01.jpg": {
		"type": "image/jpeg",
		"etag": "\"1cb6-izQi4+5WRiEY1eOQay9oKg9zpTM\"",
		"mtime": "2026-08-20T18:49:41.004Z",
		"size": 7350,
		"path": "../public/media/instagram/instagram-01.jpg"
	},
	"/media/instagram/instagram-02.jpg": {
		"type": "image/jpeg",
		"etag": "\"1718-UzCIcA7OZd4EnoqBkRBW5Uh59j4\"",
		"mtime": "2026-08-20T18:49:40.808Z",
		"size": 5912,
		"path": "../public/media/instagram/instagram-02.jpg"
	},
	"/media/instagram/instagram-03.jpg": {
		"type": "image/jpeg",
		"etag": "\"29657-kSKkt8Vu94t+un2kmslfuxzuvyw\"",
		"mtime": "2026-08-20T18:52:29.935Z",
		"size": 169559,
		"path": "../public/media/instagram/instagram-03.jpg"
	},
	"/media/video2.mp4": {
		"type": "video/mp4",
		"etag": "\"10cea6-zeXYsBF/jtvIXJHDbSnUHjA2+88\"",
		"mtime": "2026-08-20T18:42:54.264Z",
		"size": 1101478,
		"path": "../public/media/video2.mp4"
	},
	"/media/video3.mp4": {
		"type": "video/mp4",
		"etag": "\"128e25-FotfYCN5E+XT1fHTTzuGFbZPOOw\"",
		"mtime": "2026-08-20T19:45:42.123Z",
		"size": 1216037,
		"path": "../public/media/video3.mp4"
	},
	"/media/video1.mp4": {
		"type": "video/mp4",
		"etag": "\"127445-LnRDKcDZac3i7sTHX8Z2/FODMEM\"",
		"mtime": "2026-08-20T18:41:14.145Z",
		"size": 1209413,
		"path": "../public/media/video1.mp4"
	},
	"/media/instagram/instagram-04.jpg": {
		"type": "image/jpeg",
		"etag": "\"39e29-ajsRZmyFefNrup3jigJPaKlxs/4\"",
		"mtime": "2026-08-20T18:52:40.382Z",
		"size": 237097,
		"path": "../public/media/instagram/instagram-04.jpg"
	},
	"/media/instagram/instagram-05.jpg": {
		"type": "image/jpeg",
		"etag": "\"1005d-FpnNbp2fFv8oSLh7ZXKU3udWQdI\"",
		"mtime": "2026-08-20T18:49:39.863Z",
		"size": 65629,
		"path": "../public/media/instagram/instagram-05.jpg"
	},
	"/media/instagram/instagram-07.jpg": {
		"type": "image/jpeg",
		"etag": "\"146e-ZUnIbgwW0TBbFJEH6l793u0hsB4\"",
		"mtime": "2026-08-20T18:49:47.375Z",
		"size": 5230,
		"path": "../public/media/instagram/instagram-07.jpg"
	},
	"/media/instagram/instagram-06.jpg": {
		"type": "image/jpeg",
		"etag": "\"470fc-8ZopEXxZXGj/dYlSBpCW/i2uY1o\"",
		"mtime": "2026-08-20T18:53:00.279Z",
		"size": 291068,
		"path": "../public/media/instagram/instagram-06.jpg"
	},
	"/media/video5.mp4": {
		"type": "video/mp4",
		"etag": "\"1fa93f-St6j9r2SlPBebMOBQlHKlSCla+E\"",
		"mtime": "2026-08-20T19:56:19.453Z",
		"size": 2074943,
		"path": "../public/media/video5.mp4"
	},
	"/media/instagram/instagram-08.jpg": {
		"type": "image/jpeg",
		"etag": "\"f40-jI2JzmrU4mYmF6emx03aZIxU5AM\"",
		"mtime": "2026-08-20T18:49:27.755Z",
		"size": 3904,
		"path": "../public/media/instagram/instagram-08.jpg"
	},
	"/media/instagram/instagram-10.jpg": {
		"type": "image/jpeg",
		"etag": "\"17fa-BPUHDD6kw19YR00ew5U6Jf2NvIA\"",
		"mtime": "2026-08-20T18:49:33.290Z",
		"size": 6138,
		"path": "../public/media/instagram/instagram-10.jpg"
	},
	"/media/instagram/instagram-12.jpg": {
		"type": "image/jpeg",
		"etag": "\"721e-K9W+fGK+Ti8jAYrr2c0mrNhMZk4\"",
		"mtime": "2026-08-20T18:49:34.628Z",
		"size": 29214,
		"path": "../public/media/instagram/instagram-12.jpg"
	},
	"/media/instagram/instagram-11.jpg": {
		"type": "image/jpeg",
		"etag": "\"25ba7-npz86WlZreUbYy42Wj+ddUjIMSM\"",
		"mtime": "2026-08-20T18:49:43.251Z",
		"size": 154535,
		"path": "../public/media/instagram/instagram-11.jpg"
	},
	"/media/instagram/instagram-09.jpg": {
		"type": "image/jpeg",
		"etag": "\"5cf86-dIiGVyMFz5LTxRWJALs+Fnx5fUI\"",
		"mtime": "2026-08-20T18:49:38.903Z",
		"size": 380806,
		"path": "../public/media/instagram/instagram-09.jpg"
	},
	"/media/instagram/instagram-13.jpg": {
		"type": "image/jpeg",
		"etag": "\"15d68-cEALlwuQheui8pQouOIXVkxdsoA\"",
		"mtime": "2026-08-20T18:51:21.600Z",
		"size": 89448,
		"path": "../public/media/instagram/instagram-13.jpg"
	},
	"/media/instagram/instagram-14.jpg": {
		"type": "image/jpeg",
		"etag": "\"1e69f-K2OyIL51LjzFHLjSBCFIL8fk/5s\"",
		"mtime": "2026-08-20T18:51:22.472Z",
		"size": 124575,
		"path": "../public/media/instagram/instagram-14.jpg"
	},
	"/media/instagram/instagram-17.jpg": {
		"type": "image/jpeg",
		"etag": "\"142f-VzU6nzguRuuNY7vthdIYwbNIwj8\"",
		"mtime": "2026-08-20T18:49:47.896Z",
		"size": 5167,
		"path": "../public/media/instagram/instagram-17.jpg"
	},
	"/media/instagram/instagram-18.jpg": {
		"type": "image/jpeg",
		"etag": "\"1149-yez+cD4mQVIzkrAmPgmGrhyI+lg\"",
		"mtime": "2026-08-20T18:49:46.828Z",
		"size": 4425,
		"path": "../public/media/instagram/instagram-18.jpg"
	},
	"/media/instagram/instagram-15.jpg": {
		"type": "image/jpeg",
		"etag": "\"1f396-7IFb8BXK8SduhAYcxe/AvTq6FpU\"",
		"mtime": "2026-08-20T18:49:44.637Z",
		"size": 127894,
		"path": "../public/media/instagram/instagram-15.jpg"
	},
	"/media/instagram/instagram-16.jpg": {
		"type": "image/jpeg",
		"etag": "\"147ae-tSeiuvOOGItnBPYTgZFIFvQSej8\"",
		"mtime": "2026-08-20T18:49:46.537Z",
		"size": 83886,
		"path": "../public/media/instagram/instagram-16.jpg"
	},
	"/media/instagram/instagram-19.jpg": {
		"type": "image/jpeg",
		"etag": "\"dda4-ZBIMLOSdyxanp6CDAOfXWAMq9eM\"",
		"mtime": "2026-08-20T18:49:32.941Z",
		"size": 56740,
		"path": "../public/media/instagram/instagram-19.jpg"
	},
	"/media/instagram/instagram-20.jpg": {
		"type": "image/jpeg",
		"etag": "\"fa9-/ZktNtRxPBAQj7VTeGF4Mp2hexE\"",
		"mtime": "2026-08-20T18:49:47.649Z",
		"size": 4009,
		"path": "../public/media/instagram/instagram-20.jpg"
	},
	"/media/video4.mp4": {
		"type": "video/mp4",
		"etag": "\"22693e-7q/dcUlqN4gHW0ZnB2lOKn/Bev4\"",
		"mtime": "2026-08-20T19:56:01.758Z",
		"size": 2255166,
		"path": "../public/media/video4.mp4"
	},
	"/media/instagram/instagram-21.jpg": {
		"type": "image/jpeg",
		"etag": "\"ed9-RJ1vRR+48t5ujyzDZ99PYgcGbz8\"",
		"mtime": "2026-08-20T18:53:03.885Z",
		"size": 3801,
		"path": "../public/media/instagram/instagram-21.jpg"
	},
	"/media/instagram/instagram-22.jpg": {
		"type": "image/jpeg",
		"etag": "\"1775-msDceagZ40XtZFlHKoN0OM0MxBg\"",
		"mtime": "2026-08-20T18:49:48.283Z",
		"size": 6005,
		"path": "../public/media/instagram/instagram-22.jpg"
	},
	"/media/mimi1.mp3": {
		"type": "audio/mpeg",
		"etag": "\"38810d-JoxXIP7my07f5Ow9BWbxcC1j5uU\"",
		"mtime": "2026-07-28T05:26:55.813Z",
		"size": 3703053,
		"path": "../public/media/mimi1.mp3"
	}
};
//#endregion
//#region #nitro/virtual/public-assets
var publicAssetBases = {};
function isPublicAssetURL(id = "") {
	if (public_assets_data_default[id]) return true;
	for (const base in publicAssetBases) if (id.startsWith(base)) return true;
	return false;
}
//#endregion
//#region node_modules/nitro/dist/runtime/internal/route-rules.mjs
var headers = ((m) => function headersRouteRule(event) {
	for (const [key, value] of Object.entries(m.options || {})) event.res.headers.set(key, value);
});
//#endregion
//#region #nitro/virtual/routing
var findRouteRules = /* @__PURE__ */ (() => {
	const $0 = [{
		name: "headers",
		route: "/assets/**",
		handler: headers,
		options: { "cache-control": "public, max-age=31536000, immutable" }
	}];
	return (m, p) => {
		let r = [];
		if (p.charCodeAt(p.length - 1) === 47) p = p.slice(0, -1) || "/";
		let s = p.split("/");
		if (s.length > 1) {
			if (s[1] === "assets") r.unshift({
				data: $0,
				params: { "_": s.slice(2).join("/") }
			});
		}
		return r;
	};
})();
var _lazy_dWrdKy = defineLazyEventHandler(() => import("./_chunks/ssr-renderer.mjs"));
var findRoute = /* @__PURE__ */ (() => {
	const data = {
		route: "/**",
		handler: _lazy_dWrdKy
	};
	return ((_m, p) => {
		return {
			data,
			params: { "_": p.slice(1) }
		};
	});
})();
[].filter(Boolean);
//#endregion
//#region node_modules/nitro/dist/runtime/internal/error/prod.mjs
var errorHandler = (error, event) => {
	const res = defaultHandler(error, event);
	return new FastResponse(typeof res.body === "string" ? res.body : JSON.stringify(res.body, null, 2), res);
};
function defaultHandler(error, event) {
	const unhandled = error.unhandled ?? !HTTPError.isError(error);
	const { status = 500, statusText = "" } = unhandled ? {} : error;
	if (status === 404) {
		const url = event.url || new URL(event.req.url);
		const baseURL = "/";
		if (/^\/[^/]/.test(baseURL) && !url.pathname.startsWith(baseURL)) return {
			status: 302,
			headers: new Headers({ location: `${baseURL}${url.pathname.slice(1)}${url.search}` })
		};
	}
	const headers = new Headers(unhandled ? {} : error.headers);
	headers.set("content-type", "application/json; charset=utf-8");
	return {
		status,
		statusText,
		headers,
		body: {
			error: true,
			...unhandled ? {
				status,
				unhandled: true
			} : typeof error.toJSON === "function" ? error.toJSON() : {
				status,
				statusText,
				message: error.message
			}
		}
	};
}
//#endregion
//#region #nitro/virtual/error-handler
var errorHandlers = [errorHandler];
async function error_handler_default(error, event) {
	for (const handler of errorHandlers) try {
		const response = await handler(error, event, { defaultHandler });
		if (response) return response;
	} catch (error) {
		console.error(error);
	}
}
//#endregion
//#region #nitro/virtual/app
function createNitroApp() {
	const captureError = (error, errorCtx) => {
		if (errorCtx?.event) {
			const errors = errorCtx.event.req.context?.nitro?.errors;
			if (errors) errors.push({
				error,
				context: errorCtx
			});
		}
	};
	const h3App = createH3App({ onError(error, event) {
		return error_handler_default(error, event);
	} });
	let appHandler = (req) => {
		req.context ||= {};
		req.context.nitro = req.context.nitro || { errors: [] };
		return h3App.fetch(req);
	};
	return {
		fetch: appHandler,
		h3: h3App,
		hooks: void 0,
		captureError
	};
}
function createH3App(config) {
	const h3App = new H3Core(config);
	h3App["~findRoute"] = (event) => findRoute(event.req.method, event.url.pathname);
	h3App["~getMiddleware"] = (event, route) => {
		const pathname = event.url.pathname;
		const method = event.req.method;
		const middleware = [];
		const routeRules = getRouteRules(method, pathname);
		event.context.routeRules = routeRules?.routeRules;
		if (routeRules?.routeRuleMiddleware.length) middleware.push(...routeRules.routeRuleMiddleware);
		if (route?.data?.middleware?.length) middleware.push(...route.data.middleware);
		return middleware;
	};
	return h3App;
}
//#endregion
//#region node_modules/nitro/dist/runtime/internal/app.mjs
var APP_ID = "default";
function useNitroApp() {
	let instance = useNitroApp._instance;
	if (instance) return instance;
	instance = useNitroApp._instance = createNitroApp();
	globalThis.__nitro__ = globalThis.__nitro__ || {};
	globalThis.__nitro__[APP_ID] = instance;
	return instance;
}
function useNitroHooks() {
	const nitroApp = useNitroApp();
	const hooks = nitroApp.hooks;
	if (hooks) return hooks;
	return nitroApp.hooks = new HookableCore();
}
function getRouteRules(method, pathname) {
	const m = findRouteRules(method, pathname);
	if (!m?.length) return { routeRuleMiddleware: [] };
	const routeRules = {};
	for (const layer of m) for (const rule of layer.data) {
		const currentRule = routeRules[rule.name];
		if (currentRule) {
			if (rule.options === false) {
				delete routeRules[rule.name];
				continue;
			}
			if (typeof currentRule.options === "object" && typeof rule.options === "object") currentRule.options = {
				...currentRule.options,
				...rule.options
			};
			else currentRule.options = rule.options;
			currentRule.route = rule.route;
			currentRule.params = {
				...currentRule.params,
				...layer.params
			};
		} else if (rule.options !== false) routeRules[rule.name] = {
			...rule,
			params: layer.params
		};
	}
	const middleware = [];
	const orderedRules = Object.values(routeRules).sort((a, b) => (a.handler?.order || 0) - (b.handler?.order || 0));
	for (const rule of orderedRules) {
		if (rule.options === false || !rule.handler) continue;
		middleware.push(rule.handler(rule));
	}
	return {
		routeRules,
		routeRuleMiddleware: middleware
	};
}
//#endregion
//#region node_modules/nitro/dist/presets/cloudflare/runtime/_module-handler.mjs
function createHandler(hooks) {
	const nitroApp = useNitroApp();
	const nitroHooks = useNitroHooks();
	return {
		async fetch(request, env, context) {
			globalThis.__env__ = env;
			augmentReq(request, {
				env,
				context
			});
			const ctxExt = {};
			const url = new URL(request.url);
			if (hooks.fetch) {
				const res = await hooks.fetch(request, env, context, url, ctxExt);
				if (res) return res;
			}
			return await nitroApp.fetch(request);
		},
		scheduled(controller, env, context) {
			globalThis.__env__ = env;
			context.waitUntil(nitroHooks.callHook("cloudflare:scheduled", {
				controller,
				env,
				context
			}) || Promise.resolve());
		},
		email(message, env, context) {
			globalThis.__env__ = env;
			context.waitUntil(nitroHooks.callHook("cloudflare:email", {
				message,
				event: message,
				env,
				context
			}) || Promise.resolve());
		},
		queue(batch, env, context) {
			globalThis.__env__ = env;
			context.waitUntil(nitroHooks.callHook("cloudflare:queue", {
				batch,
				event: batch,
				env,
				context
			}) || Promise.resolve());
		},
		tail(traces, env, context) {
			globalThis.__env__ = env;
			context.waitUntil(nitroHooks.callHook("cloudflare:tail", {
				traces,
				env,
				context
			}) || Promise.resolve());
		},
		trace(traces, env, context) {
			globalThis.__env__ = env;
			context.waitUntil(nitroHooks.callHook("cloudflare:trace", {
				traces,
				env,
				context
			}) || Promise.resolve());
		}
	};
}
function augmentReq(cfReq, ctx) {
	const req = cfReq;
	req.ip = cfReq.headers.get("cf-connecting-ip") || void 0;
	req.runtime ??= { name: "cloudflare" };
	req.runtime.cloudflare = {
		...req.runtime.cloudflare,
		...ctx
	};
	req.waitUntil = ctx.context?.waitUntil.bind(ctx.context);
}
//#endregion
//#region node_modules/nitro/dist/presets/cloudflare/runtime/cloudflare-module.mjs
var cloudflare_module_default = createHandler({ fetch(cfRequest, env, context, url) {
	if (env.ASSETS && isPublicAssetURL(url.pathname)) return env.ASSETS.fetch(cfRequest);
} });
//#endregion
export { cloudflare_module_default as default };
