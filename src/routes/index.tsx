import { createFileRoute, Link } from "@tanstack/react-router";
import { PageShell } from "@/components/PageShell";
import { Tilt3D } from "@/components/Tilt3D";
import { Confetti } from "@/components/Confetti";
import { photos } from "@/lib/photos";
import { ArrowRight, Crown, Heart, Sparkles } from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Happy 50th Birthday, Sir Martin — A Jubilee Tribute" },
      {
        name: "description",
        content:
          "Fifty years of love, sacrifice and quiet strength. A jubilee tribute website built for my father, Sir Martin, on his 50th birthday.",
      },
      { property: "og:title", content: "Happy 50th Birthday, Sir Martin" },
      {
        property: "og:description",
        content:
          "A jubilee tribute to my father — fifty years of love, sacrifice and quiet strength.",
      },
    ],
  }),
  component: Home,
});

function Home() {
  return (
    <PageShell>
      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="pointer-events-none absolute inset-0 bg-mint-rich" />
        <Confetti />
        <div className="pointer-events-none absolute -left-24 top-24 h-80 w-80 rounded-full bg-white/50 blur-3xl" />
        <div className="pointer-events-none absolute -right-24 bottom-0 h-96 w-96 rounded-full bg-gold-gradient opacity-40 blur-3xl" />

        <div className="relative mx-auto grid max-w-7xl gap-12 px-6 pb-24 pt-16 sm:px-10 md:grid-cols-[1.05fr_0.95fr] md:items-center md:pt-24">
          <div className="animate-fade-up">
            <span className="inline-flex items-center gap-2 rounded-full bg-white/75 px-4 py-1.5 text-[0.65rem] font-medium uppercase tracking-[0.3em] text-foreground/70 backdrop-blur">
              <Crown className="h-3.5 w-3.5" /> The Jubilee Year
            </span>
            <h1 className="mt-7 font-display text-[2.7rem] font-light leading-[1.02] sm:text-7xl md:text-[5.2rem]">
              Happy <span className="text-gold font-semibold">50th</span>
              <br />
              Birthday,
              <br />
              <span className="text-shimmer italic">Sir Martin</span>.
            </h1>
            <div className="gold-rule mt-8 w-52" />
            <p className="mt-8 max-w-xl text-lg leading-relaxed text-foreground/75">
              Today isn't just another birthday. It's fifty years of a life that has touched so many
              people — but especially mine. I couldn't fit what I feel into one message, so I built
              you a whole world instead. Take your time in it, Dad. Every room here was made for
              you.
            </p>
            <div className="mt-10 flex flex-wrap gap-3">
              <Link
                to="/letter"
                className="group inline-flex items-center gap-2 rounded-full bg-foreground px-7 py-3.5 text-sm font-medium text-background shadow-3d transition hover:-translate-y-0.5 hover:opacity-95"
              >
                Read my letter to you
                <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
              </Link>
              <Link
                to="/fifty"
                className="inline-flex items-center gap-2 rounded-full bg-white/85 px-7 py-3.5 text-sm font-medium text-foreground shadow-soft-gold backdrop-blur transition hover:-translate-y-0.5 hover:bg-white"
              >
                <Sparkles className="h-4 w-4" /> Fifty years, fifty thank-yous
              </Link>
            </div>
            <p className="mt-10 font-hand text-3xl text-foreground/70">
              hi Daddy. sit down. I made you something. ❤️
            </p>
          </div>

          {/* 3D portrait stack */}
          <div className="relative mx-auto w-full max-w-sm md:max-w-md">
            <div className="pointer-events-none absolute -inset-8 rounded-[3rem] bg-white/40 blur-3xl" />
            <Tilt3D max={11}>
              <div className="animate-float-slow">
                <div className="relative overflow-hidden rounded-[2.5rem] shadow-3d ring-1 ring-white/60">
                  <img
                    src={photos.portrait}
                    alt="Sir Martin, celebrating his 50th birthday"
                    className="h-[480px] w-full object-cover sm:h-[560px]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-foreground/55 via-transparent to-transparent" />
                  <div className="absolute bottom-5 left-5 right-5 rounded-2xl bg-white/85 p-4 text-center backdrop-blur">
                    <p className="font-hand text-2xl leading-tight">
                      my first hero. my greatest teacher.
                    </p>
                  </div>
                </div>
                <div
                  className="absolute -right-4 -top-5 rotate-6 rounded-2xl bg-gold-gradient px-5 py-2.5 shadow-soft-gold"
                  style={{ transform: "translateZ(60px) rotate(6deg)" }}
                >
                  <span className="font-display text-lg font-semibold text-white">1976 — 2026</span>
                </div>
                <div
                  className="absolute -bottom-7 -left-5 -rotate-6 rounded-2xl bg-white px-5 py-2.5 shadow-soft-mint"
                  style={{ transform: "translateZ(45px) rotate(-6deg)" }}
                >
                  <span className="font-hand text-2xl">50 & still my safest place</span>
                </div>
              </div>
            </Tilt3D>
          </div>
        </div>
      </section>

      {/* Golden statement */}
      <section className="relative mx-auto max-w-5xl px-6 py-24 text-center sm:px-10">
        <Heart className="mx-auto h-6 w-6 text-foreground/40" />
        <p className="mt-8 font-display text-3xl font-light leading-snug sm:text-5xl">
          “If I become even half the person you are,
          <br className="hidden sm:block" /> I'll consider my life{" "}
          <span className="text-gold font-semibold">a success</span>.”
        </p>
        <div className="gold-rule mx-auto mt-10 w-48" />
      </section>

      {/* Rooms */}
      <section className="mx-auto max-w-6xl px-6 pb-24 sm:px-10">
        <div className="mb-12 flex flex-wrap items-end justify-between gap-6">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-foreground/60">
              take your time, Dad
            </p>
            <h2 className="mt-3 font-display text-4xl sm:text-5xl">Nine rooms. All of them yours.</h2>
          </div>
          <p className="max-w-md text-foreground/70">
            I split everything I wanted to say into different rooms, so you can open one, breathe,
            wipe your eyes, and come back to another later. There's no order. There's no rush.
          </p>
        </div>

        <div className="scene-3d grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {rooms.map((r, i) => (
            <Link
              key={r.to}
              to={r.to}
              className="card-3d group relative overflow-hidden rounded-3xl bg-white/90 p-7 shadow-soft-mint backdrop-blur"
            >
              <div className="absolute -right-10 -top-10 h-28 w-28 rounded-full bg-gold-gradient opacity-30 transition group-hover:scale-125" />
              <span className="relative text-xs font-medium uppercase tracking-[0.3em] text-foreground/45">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="relative mt-4 font-display text-2xl">{r.title}</h3>
              <p className="relative mt-3 text-sm leading-relaxed text-foreground/70">{r.blurb}</p>
              <span className="relative mt-7 inline-flex items-center gap-1 text-sm font-medium text-primary">
                open <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
              </span>
            </Link>
          ))}
        </div>
      </section>
    </PageShell>
  );
}

const rooms = [
  {
    to: "/letter",
    title: "The Letter",
    blurb: "The long one. The one I've been writing in my heart for years.",
  },
  {
    to: "/fifty",
    title: "50 Years",
    blurb: "Fifty thank-yous — one for every year you've walked this earth.",
  },
  {
    to: "/hero",
    title: "My First Hero",
    blurb: "Everything you taught me without ever sitting me down to teach it.",
  },
  {
    to: "/gallery",
    title: "Gallery",
    blurb: "Your face, in the places your hard work took you.",
  },
  {
    to: "/his-words",
    title: "His Own Words",
    blurb: "Dad's jubilee reflection, kept exactly as he wrote it.",
  },
  {
    to: "/my-reply",
    title: "My Reply",
    blurb: "What I said back, through tears, and what I still mean.",
  },
  {
    to: "/prayers",
    title: "Jubilee Prayers",
    blurb: "Every blessing I'm asking God to pour over your next chapter.",
  },
  {
    to: "/promises",
    title: "Promises",
    blurb: "The things I will never stop doing for you, as long as I live.",
  },
  {
    to: "/wishes",
    title: "Wishes",
    blurb: "A wall of birthday wishes — leave one for Dad yourself.",
  },
] as const;
