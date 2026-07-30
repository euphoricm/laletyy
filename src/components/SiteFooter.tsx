import { Link } from "@tanstack/react-router";

export function SiteFooter() {
  return (
    <footer className="relative mt-24 overflow-hidden bg-mint-gradient">
      <div className="pointer-events-none absolute -right-20 -top-20 h-72 w-72 rounded-full bg-gold-gradient opacity-30 blur-3xl" />
      <div className="relative mx-auto grid max-w-6xl gap-10 px-6 py-16 sm:grid-cols-2 sm:px-10">
        <div>
          <h3 className="font-display text-3xl font-semibold sm:text-4xl">
            Happy 50th, <span className="text-gold">Sir Martin</span>.
          </h3>
          <p className="mt-4 max-w-md text-foreground/80">
            Fifty years of quiet strength, of choosing your family every single day, of carrying
            what was heavy so that we would never have to. This little corner of the internet exists
            for one reason only: so you can see, in one place, how deeply you are loved.
          </p>
          <p className="mt-6 font-hand text-3xl text-foreground/80">
            your little princess, always. 🫂
          </p>
        </div>
        <div className="grid content-start gap-3 sm:justify-end sm:text-right">
          <span className="text-xs uppercase tracking-[0.25em] text-foreground/60">Quick jumps</span>
          <div className="flex flex-wrap gap-3 sm:justify-end">
            {[
              ["/letter", "The Letter"],
              ["/fifty", "50 Years"],
              ["/prayers", "Prayers"],
              ["/wishes", "Wishes"],
            ].map(([to, label]) => (
              <Link
                key={to}
                to={to}
                className="rounded-full bg-white/75 px-4 py-2 text-sm font-medium text-foreground shadow-soft-mint transition hover:bg-white"
              >
                {label}
              </Link>
            ))}
          </div>
          <div className="gold-rule mt-6 w-full sm:w-64 sm:justify-self-end" />
          <p className="mt-2 text-xs uppercase tracking-[0.3em] text-foreground/60">
            Jubilee Year · MMXXVI
          </p>
        </div>
      </div>
    </footer>
  );
}
