import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";

export function NextRoom({ to, label }: { to: string; label: string }) {
  return (
    <section className="mx-auto max-w-3xl px-6 pb-8 pt-16 text-center sm:px-10">
      <Link
        to={to}
        className="group inline-flex items-center gap-2 rounded-full bg-foreground px-7 py-3.5 text-center text-sm font-medium text-background shadow-3d transition hover:-translate-y-0.5"
      >
        {label}
        <ArrowRight className="h-4 w-4 shrink-0 transition group-hover:translate-x-1" />
      </Link>
    </section>
  );
}
