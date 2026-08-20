import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { navLinks as links } from "@/lib/nav-links";

export function SiteNav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
  }, [open]);

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-40 transition-all ${
          scrolled ? "border-b border-white/50 bg-white/60 backdrop-blur-xl" : "bg-transparent"
        }`}
      >
        <div className="mx-auto grid max-w-7xl grid-cols-[minmax(0,1fr)_auto] items-center gap-4 px-5 py-4 sm:px-8">
          <Link to="/" className="flex min-w-0 items-center gap-3">
            <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-gold-gradient shadow-soft-gold">
              <span className="font-display text-base font-bold text-white">20</span>
            </span>
            <span className="min-w-0 truncate font-display text-lg font-semibold tracking-tight">
              Laleti
            </span>
          </Link>
          <nav className="hidden items-center gap-1 xl:flex">
            {links.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                activeOptions={{ exact: l.to === "/" }}
                className="rounded-full px-3 py-1.5 text-sm text-foreground/70 transition-colors hover:bg-white/60 hover:text-foreground"
                activeProps={{ className: "bg-white text-foreground shadow-soft-mint" }}
              >
                {l.label}
              </Link>
            ))}
          </nav>
          <button
            aria-label="Open menu"
            className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-white/80 text-foreground shadow-soft-mint backdrop-blur xl:hidden"
            onClick={() => setOpen(true)}
          >
            <Menu className="h-5 w-5" />
          </button>
        </div>
      </header>

      <div
        className={`fixed inset-0 z-50 transition ${open ? "pointer-events-auto" : "pointer-events-none"}`}
        aria-hidden={!open}
      >
        <div
          className={`absolute inset-0 transition-opacity ${open ? "opacity-100" : "opacity-0"}`}
          style={{ background: "rgba(20,60,55,0.45)", backdropFilter: "blur(4px)" }}
          onClick={() => setOpen(false)}
        />
        <aside
          className={`absolute right-0 top-0 h-full w-[86%] max-w-sm overflow-y-auto bg-mint-rich p-6 shadow-2xl transition-transform ${
            open ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="flex items-center justify-between">
            <span className="font-display text-xl font-semibold">Navigate</span>
            <button
              aria-label="Close menu"
              onClick={() => setOpen(false)}
              className="grid h-10 w-10 place-items-center rounded-full bg-white/70"
            >
              <X className="h-5 w-5" />
            </button>
          </div>
          <nav className="mt-8 flex flex-col gap-1">
            {links.map((l, i) => (
              <Link
                key={l.to}
                to={l.to}
                activeOptions={{ exact: l.to === "/" }}
                onClick={() => setOpen(false)}
                className="animate-fade-up rounded-2xl px-4 py-3 text-lg font-medium text-foreground/80 transition-colors hover:bg-white/60"
                activeProps={{ className: "bg-white text-foreground shadow-soft-mint" }}
                style={{ animationDelay: `${i * 40}ms` }}
              >
                {l.label}
              </Link>
            ))}
          </nav>
          <p className="mt-10 font-hand text-2xl text-foreground/70">
            twenty years, and every page is made with love.
          </p>
        </aside>
      </div>
    </>
  );
}
