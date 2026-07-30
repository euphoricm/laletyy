import { createFileRoute } from "@tanstack/react-router";
import { PageShell, PageHeader } from "@/components/PageShell";
import { NextRoom } from "@/components/NextRoom";
import { Tilt3D } from "@/components/Tilt3D";
import { photos } from "@/lib/photos";

export const Route = createFileRoute("/hero")({
  head: () => ({
    meta: [
      { title: "My First Hero — The Lessons My Father Taught Me" },
      {
        name: "description",
        content:
          "Everything my father taught me without ever sitting me down to teach it — the quiet lessons of Sir Martin, told on his 50th birthday.",
      },
      { property: "og:title", content: "My First Hero — Sir Martin" },
      {
        property: "og:description",
        content: "The lessons my father taught me simply by living his life in front of me.",
      },
    ],
  }),
  component: HeroPage,
});

function HeroPage() {
  return (
    <PageShell>
      <PageHeader
        eyebrow="Chapter 03"
        title={
          <>
            My first <span className="text-gold font-semibold">hero</span>
          </>
        }
        intro="You never sat me down to teach me any of this. You just lived it in front of me until it became mine."
      />

      <section className="mx-auto max-w-5xl px-5 pb-6 sm:px-10">
        <div className="space-y-6">
          {lessons.map((l, i) => (
            <Tilt3D key={i} max={6}>
              <article
                className={`animate-fade-up grid gap-6 rounded-[2rem] bg-white/90 p-7 shadow-soft-mint backdrop-blur sm:grid-cols-[auto_1fr] sm:p-10`}
                style={{ animationDelay: `${i * 60}ms` }}
              >
                <div className="grid h-16 w-16 shrink-0 place-items-center rounded-2xl bg-gold-gradient font-display text-2xl font-semibold text-white shadow-soft-gold">
                  {i + 1}
                </div>
                <div>
                  <h2 className="font-display text-2xl sm:text-3xl">{l.title}</h2>
                  <p className="mt-4 leading-[1.9] text-foreground/80">{l.body}</p>
                </div>
              </article>
            </Tilt3D>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-5 pt-16 sm:px-10">
        <Tilt3D max={9}>
          <div className="relative overflow-hidden rounded-[2.5rem] shadow-3d">
            <img
              src={photos.rail}
              alt="Sir Martin standing in the sun"
              className="h-[340px] w-full object-cover sm:h-[560px]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-foreground/70 via-foreground/10 to-transparent" />
            <p className="absolute bottom-8 left-6 right-6 font-display text-2xl leading-snug text-white sm:text-4xl">
              “Real strength isn't never falling. It's getting back up, carrying the people you
              love, and never giving up on them.”
            </p>
          </div>
        </Tilt3D>
      </section>

      <NextRoom to="/gallery" label="Next: a gallery of you" />
    </PageShell>
  );
}

const lessons = [
  {
    title: "You taught me that love is mostly logistics",
    body: "Not flowers. Not speeches. Love, in your language, looked like waking up at four in the morning, standing in a queue nobody thanked you for, and sending the money home before you spent anything on yourself. I grew up thinking that was normal. It isn't. It's rare, and it's holy.",
  },
  {
    title: "You taught me how to keep going",
    body: "There were seasons when there was little on the table, and sometimes nothing. You never let that be my problem. You carried it quietly and let me keep being a child. I only understand now what it cost you — and I understand now that you did it fifty times over.",
  },
  {
    title: "You taught me that grief doesn't have to make you cruel",
    body: "You lost your mother at fifteen. That kind of loss can harden a person forever. Instead, you became the gentlest man I know. You turned an absence into tenderness. That's not luck, Dad. That's a decision you made every day for thirty-five years.",
  },
  {
    title: "You taught me honesty, even about yourself",
    body: "You've told me openly about your regrets, the things you'd do differently, the promises you couldn't keep. Most fathers hide that. You handed it to me as a lesson so that I'd walk with more wisdom. That took a courage I hope to inherit.",
  },
  {
    title: "You taught me faith that actually holds",
    body: "Not a Sunday performance — a real, working faith. You thank God for the little and for the much. You call Him merciful when things are hard. Watching you pray taught me more about God than any sermon ever has.",
  },
  {
    title: "You taught me my own worth",
    body: "You prayed for a daughter, and then you spent your whole life treating me like the answer to a prayer. Every time you called me Precious, you were building something in me that no one will ever be able to take out.",
  },
  {
    title: "You taught me to be intentional",
    body: "Seek wisdom. Don't rush important decisions. Watch a person's character before you trust their words. I'm carrying all of it into this next chapter of my life, and I'll carry it into every room you'll never get to walk into with me.",
  },
  {
    title: "You taught me what home means",
    body: "Home was never a building. Home is the sound of you coming through the door. Fifty years in, you are still the safest place I've ever known.",
  },
];
