import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Sparkles } from "lucide-react";
import { PageShell } from "@/components/PageShell";
import { Confetti } from "@/components/Confetti";
import { MediaSlot } from "@/components/MediaSlot";
export const Route = createFileRoute("/")({ component: Home });
const rooms = [
  {
    to: "/letter",
    title: "The Letter",
    blurb: "A birthday note written only for Laleti.",
  },
  {
    to: "/cake",
    title: "Make a Wish",
    blurb: "Blow the candles and send a wish into twenty.",
  },
  {
    to: "/code",
    title: "Birthday Code",
    blurb: "Enter the birthday key to unlock a surprise.",
  },
  {
    to: "/crossword",
    title: "Word Puzzle",
    blurb: "A playful Laleti crossword.",
  },
  {
    to: "/fifty",
    title: "Twenty Reasons",
    blurb: "Twenty little reminders of why she is loved.",
  },
  {
    to: "/hero",
    title: "Big Sister",
    blurb: "The things that make her unforgettable.",
  },
  {
    to: "/gallery",
    title: "Gallery",
    blurb: "Her photos and videos, ready for every favourite moment.",
  },
  {
    to: "/my-reply",
    title: "Memory Reel",
    blurb: "A home for all the birthday videos.",
  },
  {
    to: "/prayers",
    title: "Blessings",
    blurb: "Good things for her new year.",
  },
  {
    to: "/promises",
    title: "Promises",
    blurb: "What stays true long after the candles.",
  },
  { to: "/wishes", title: "Wishes", blurb: "Leave Laleti a birthday message." },
  {
    to: "/finale",
    title: "One Last Thing",
    blurb: "A closing letter, always waiting for her.",
  },
] as const;
function Home() {
  return (
    <PageShell>
      <section className="relative overflow-hidden bg-mint-rich">
        <Confetti count={18} />
        <div className="relative mx-auto grid max-w-7xl gap-12 px-6 pb-20 pt-16 md:grid-cols-2 md:items-center md:pt-24">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full bg-white/75 px-4 py-1.5 text-xs font-medium uppercase tracking-[0.22em]">
              <Sparkles className="h-3.5 w-3.5" />
              Her twentieth year
            </span>
            <h1 className="mt-7 font-display text-5xl leading-none sm:text-7xl">
              Happy <span className="text-gold font-semibold">20th</span>
              <br />
              Birthday,
              <br />
              <i>Laleti.</i>
            </h1>
            <p className="mt-8 max-w-xl text-lg leading-relaxed text-foreground/75">
              For the gorgeous, awesome girl who is so close to my heart. You
              are more than a birthday to celebrate. You are a whole person
              worth celebrating, today and always.
            </p>
            <Link
              to="/letter"
              className="mt-9 inline-flex items-center gap-2 rounded-full bg-foreground px-7 py-3.5 text-sm font-medium text-background shadow-3d"
            >
              Open your birthday letter <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          <div className="mx-auto w-full max-w-md overflow-hidden rounded-[2.5rem] shadow-3d">
            <MediaSlot
              src="/media/laleti-06.jpg"
              alt="Laleti celebrating her twentieth birthday"
              className="h-[480px] w-full object-cover"
            />
          </div>
        </div>
      </section>
      <section className="mx-auto max-w-6xl px-6 py-20">
        <p className="text-center font-hand text-3xl text-foreground/70">
          twelve little rooms, all made for you.
        </p>
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {rooms.map((room, i) => (
            <Link
              key={room.to}
              to={room.to}
              className="card-3d rounded-3xl bg-white/90 p-7 shadow-soft-mint"
            >
              <span className="text-xs uppercase tracking-[.22em] text-foreground/50">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h2 className="mt-3 font-display text-2xl">{room.title}</h2>
              <p className="mt-3 text-sm leading-relaxed text-foreground/70">
                {room.blurb}
              </p>
            </Link>
          ))}
        </div>
      </section>
    </PageShell>
  );
}
