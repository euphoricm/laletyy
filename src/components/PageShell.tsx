import type { ReactNode } from "react";
import { SiteFooter } from "./SiteFooter";

import { FloatingEmojis } from "./FloatingEmojis";

export function PageShell({ children }: { children: ReactNode }) {
  return (
    <div className="relative min-h-screen overflow-x-hidden">
      <FloatingEmojis />
      <main className="relative z-10 pt-20">{children}</main>
      <SiteFooter />
    </div>
  );
}

export function PageHeader({
  eyebrow,
  title,
  intro,
}: {
  eyebrow: string;
  title: ReactNode;
  intro?: string;
}) {
  return (
    <section className="relative overflow-hidden">
      <div className="pointer-events-none absolute -left-24 top-0 h-72 w-72 rounded-full bg-white/50 blur-3xl" />
      <div className="pointer-events-none absolute -right-24 top-10 h-80 w-80 rounded-full bg-gold-gradient opacity-25 blur-3xl" />
      <div className="relative mx-auto max-w-4xl px-6 pb-10 pt-14 text-center sm:px-10 sm:pt-20">
        <span className="inline-flex rounded-full bg-white/70 px-4 py-1.5 text-[0.65rem] font-medium uppercase tracking-[0.3em] text-foreground/70 backdrop-blur">
          {eyebrow}
        </span>
        <h1 className="mt-6 animate-fade-up font-display text-4xl font-light leading-[1.06] sm:text-6xl">
          {title}
        </h1>
        <div className="gold-rule mx-auto mt-8 w-40" />
        {intro ? (
          <p className="mx-auto mt-8 max-w-2xl text-base leading-relaxed text-foreground/75 sm:text-lg">
            {intro}
          </p>
        ) : null}
      </div>
    </section>
  );
}
