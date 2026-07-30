import { createFileRoute } from "@tanstack/react-router";
import { PageShell, PageHeader } from "@/components/PageShell";
import { NextRoom } from "@/components/NextRoom";
import { Check } from "lucide-react";

export const Route = createFileRoute("/promises")({
  head: () => ({
    meta: [
      { title: "Promises — What I Will Never Stop Doing for My Dad" },
      {
        name: "description",
        content:
          "The promises I'm making to my father on his 50th birthday — the things I will never stop doing for him, as long as I live.",
      },
      { property: "og:title", content: "My Promises to Dad" },
      {
        property: "og:description",
        content: "The things I will never stop doing for you, as long as I live.",
      },
    ],
  }),
  component: PromisesPage,
});

function PromisesPage() {
  return (
    <PageShell>
      <PageHeader
        eyebrow="Chapter 08"
        title={
          <>
            My <span className="text-gold font-semibold">promises</span> to you
          </>
        }
        intro="You've spent fifty years keeping promises to us. Here are mine to you — and I intend to keep every single one."
      />

      <section className="mx-auto max-w-3xl px-5 pb-6 sm:px-10">
        <ol className="space-y-4">
          {promises.map((p, i) => (
            <li
              key={i}
              className="animate-fade-up flex gap-5 rounded-3xl bg-white/90 p-6 shadow-soft-mint backdrop-blur transition hover:-translate-y-1 sm:p-8"
              style={{ animationDelay: `${i * 55}ms` }}
            >
              <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-gold-gradient text-white shadow-soft-gold">
                <Check className="h-5 w-5" />
              </span>
              <p className="leading-[1.9] text-foreground/85">{p}</p>
            </li>
          ))}
        </ol>
      </section>

      <section className="mx-auto max-w-3xl px-6 pt-16 text-center sm:px-10">
        <div className="gold-rule mx-auto w-40" />
        <p className="mt-8 font-hand text-3xl leading-snug text-foreground/80">
          signed, your little princess. witnessed by God, and by fifty years of you.
        </p>
      </section>

      <NextRoom to="/wishes" label="Next: leave Dad a birthday wish" />
    </PageShell>
  );
}

const promises = [
  "I promise to keep telling you the truth, even when it's easier to say the comfortable thing.",
  "I promise to call. Not just when I need something, and not just on birthdays.",
  "I promise to listen to your stories properly — the ones about Grandma, the ones about being fifteen, the ones you've told me before. Especially those.",
  "I promise to be intentional with my choices, to seek God's wisdom, and never to rush the big decisions. Exactly like you taught me.",
  "I promise to look after you the way you looked after all of us, when the time comes and the roles turn around.",
  "I promise to make you proud in the quiet ways too — in how I treat people when there's nothing in it for me.",
  "I promise to remind you of who you are on the days you forget, and to keep telling you that your regrets don't get to write your story.",
  "I promise to carry Grandma's memory with me, so that a woman I never met keeps living in the way I love people.",
  "I promise to celebrate you loudly, not only on the 30th of July.",
  "I promise that no matter how old I get, how far I go, or how full my life becomes — I will always be your little baby girl.",
  "And I promise to keep building you things like this, until you finally believe how much you're loved.",
];
