import { Link } from "@tanstack/react-router";
import { Heart } from "lucide-react";
import { PageShell, PageHeader } from "@/components/PageShell";

type Room = {
  eyebrow: string;
  title: string;
  intro: string;
  lines: string[];
  next: string;
  nextLabel: string;
};

export function TributeRoom({ room }: { room: Room }) {
  return (
    <PageShell>
      <PageHeader
        eyebrow={room.eyebrow}
        title={
          <>
            {room.title.split(" ").slice(0, -1).join(" ")}{" "}
            <span className="text-gold font-semibold">
              {room.title.split(" ").at(-1)}
            </span>
          </>
        }
        intro={room.intro}
      />
      <section className="mx-auto max-w-3xl px-5 pb-10">
        <div className="space-y-4">
          {room.lines.map((line, i) => (
            <article
              key={line}
              className="animate-fade-up rounded-3xl bg-white/90 p-7 shadow-soft-mint backdrop-blur"
              style={{ animationDelay: `${i * 70}ms` }}
            >
              <Heart className="h-5 w-5 text-gold" />
              <p className="mt-4 leading-[1.85] text-foreground/85">{line}</p>
            </article>
          ))}
        </div>
        <div className="mt-12 text-center">
          <Link
            to={room.next}
            className="inline-flex rounded-full bg-foreground px-7 py-3.5 text-sm font-medium text-background shadow-3d"
          >
            {room.nextLabel}
          </Link>
        </div>
      </section>
    </PageShell>
  );
}
