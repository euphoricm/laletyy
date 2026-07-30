import { createFileRoute } from "@tanstack/react-router";
import { PageShell, PageHeader } from "@/components/PageShell";
import { NextRoom } from "@/components/NextRoom";
import { Tilt3D } from "@/components/Tilt3D";
import { photos } from "@/lib/photos";

export const Route = createFileRoute("/prayers")({
  head: () => ({
    meta: [
      { title: "Jubilee Prayers — Blessings for My Father's 50th" },
      {
        name: "description",
        content:
          "Twelve prayers and blessings for my father's jubilee year: open doors, restored years, health, rest and more than enough.",
      },
      { property: "og:title", content: "Jubilee Prayers for Sir Martin" },
      {
        property: "og:description",
        content: "Every blessing I'm asking God to pour over my father's next chapter.",
      },
    ],
  }),
  component: PrayersPage,
});

function PrayersPage() {
  return (
    <PageShell>
      <PageHeader
        eyebrow="Chapter 07"
        title={
          <>
            A <span className="text-gold font-semibold">jubilee</span> of blessings
          </>
        }
        intro="In Scripture, the fiftieth year is the year of jubilee — the year debts are cancelled, what was lost is returned, and everyone goes home. Dad, that's what I'm praying over you."
      />

      <section className="mx-auto max-w-6xl px-5 pb-6 sm:px-10">
        <div className="scene-3d grid gap-5 sm:grid-cols-2">
          {prayers.map((p, i) => (
            <div
              key={i}
              className="card-3d animate-fade-up relative overflow-hidden rounded-3xl bg-white/90 p-7 shadow-soft-mint backdrop-blur sm:p-9"
              style={{ animationDelay: `${i * 50}ms` }}
            >
              <div className="absolute -right-8 -top-8 h-24 w-24 rounded-full bg-gold-gradient opacity-25" />
              <p className="relative text-xs uppercase tracking-[0.3em] text-foreground/45">
                Prayer {String(i + 1).padStart(2, "0")}
              </p>
              <h2 className="relative mt-4 font-display text-2xl">{p.title}</h2>
              <p className="relative mt-3 leading-[1.85] text-foreground/80">{p.body}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-5 pt-16 sm:px-10">
        <Tilt3D max={8}>
          <div className="relative overflow-hidden rounded-[2.5rem] shadow-3d">
            <img
              src={photos.mall}
              alt="Sir Martin smiling on an evening out"
              className="h-[360px] w-full object-cover sm:h-[560px]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-foreground/75 via-foreground/10 to-transparent" />
            <p className="absolute bottom-8 left-6 right-6 font-display text-xl leading-snug text-white sm:text-3xl">
              “May He give you many more healthy years, so we can keep making memories together.”
            </p>
          </div>
        </Tilt3D>
      </section>

      <NextRoom to="/promises" label="Next: my promises to you" />
    </PageShell>
  );
}

const prayers = [
  {
    title: "For peace that stays",
    body: "May God give you the same peace you have spent fifty years handing out to everyone else. May your mind rest at night. May you stop carrying things that were never yours to carry.",
  },
  {
    title: "For health and long life",
    body: "May your body be strong, your steps steady, and your years many. I want decades more of your voice, your laugh, and your bad jokes at family gatherings.",
  },
  {
    title: "For open doors",
    body: "May doors open for you that no man can shut, and may every door that was unfairly closed be reopened with interest.",
  },
  {
    title: "For restoration",
    body: "May God restore the years the locusts ate — the lean seasons, the losses, the opportunities that slipped past. Nothing you went through was wasted.",
  },
  {
    title: "For your dreams",
    body: "Every dream you quietly folded up and put away because life needed the money instead — may God unfold them again in this season, and let you live to enjoy them.",
  },
  {
    title: "For more than enough",
    body: "Not just enough to survive. More than enough — so that for once, the provider gets provided for.",
  },
  {
    title: "For rest",
    body: "May this be the year you learn how to rest without guilt. You have earned every quiet morning coming to you.",
  },
  {
    title: "For your heart",
    body: "May the regrets you named stop having a vote in how you see yourself. May you look in the mirror and finally see the man we all see.",
  },
  {
    title: "For your marriage and your home",
    body: "May your home be full of laughter, patience and warmth, and may love keep choosing you back.",
  },
  {
    title: "For your mother's memory",
    body: "May Grandma's memory rest gently in you instead of aching. She would be so proud of the man her boy became.",
  },
  {
    title: "For the work of your hands",
    body: "May everything you touch prosper, and may your labour finally come back to you multiplied.",
  },
  {
    title: "For the greatest season yet",
    body: "May this jubilee year be the beginning of your best chapter — not the winding down of the story, but the turn where everything gets good.",
  },
];
