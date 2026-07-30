import { createFileRoute } from "@tanstack/react-router";
import { PageShell, PageHeader } from "@/components/PageShell";
import { NextRoom } from "@/components/NextRoom";
import { Confetti } from "@/components/Confetti";

export const Route = createFileRoute("/fifty")({
  head: () => ({
    meta: [
      { title: "Fifty Thank-Yous — Sir Martin's Jubilee Year" },
      {
        name: "description",
        content:
          "Fifty thank-yous for fifty years: one gratitude for every year of my father's life, written for his golden jubilee birthday.",
      },
      { property: "og:title", content: "Fifty Thank-Yous for Fifty Years" },
      {
        property: "og:description",
        content: "One thank-you for every year of my father's remarkable life.",
      },
    ],
  }),
  component: FiftyPage,
});

function FiftyPage() {
  return (
    <PageShell>
      <div className="relative">
        <Confetti count={14} />
        <PageHeader
          eyebrow="The Jubilee Count"
          title={
            <>
              <span className="text-gold font-semibold">Fifty</span> thank-yous,
              <br /> one for every year
            </>
          }
          intro="I couldn't give you fifty gifts, Dad. So I counted fifty of the things you've done that I will never stop being grateful for."
        />
      </div>

      <section className="mx-auto max-w-6xl px-5 pb-10 sm:px-10">
        <div className="scene-3d grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {thanks.map((t, i) => (
            <div
              key={i}
              className="card-3d relative overflow-hidden rounded-3xl bg-white/90 p-6 shadow-soft-mint backdrop-blur"
            >
              <span className="font-display text-4xl font-light text-gold">
                {String(i + 1).padStart(2, "0")}
              </span>
              <p className="mt-3 text-[0.97rem] leading-relaxed text-foreground/80">{t}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-6 pt-16 text-center sm:px-10">
        <div className="gold-rule mx-auto w-40" />
        <p className="mt-8 font-hand text-3xl leading-snug text-foreground/80">
          fifty years. fifty thank-yous. and still not enough.
        </p>
      </section>

      <NextRoom to="/hero" label="Next: everything you taught me" />
    </PageShell>
  );
}

const thanks = [
  "Thank you for being born. The whole world got kinder that day, it just didn't know it yet.",
  "Thank you for surviving a childhood that asked too much of a boy far too young.",
  "Thank you for carrying the loss of your mother at fifteen and still growing up gentle.",
  "Thank you for the days there was little on the table, and you made sure I never felt the lack.",
  "Thank you for every hidden cry you never let us see, so that our nights could be peaceful.",
  "Thank you for refusing to give up, even in the seasons when giving up would have been easier.",
  "Thank you for choosing to become a family man when nobody had shown you how.",
  "Thank you for praying for a daughter — and for loving me exactly as answered prayer should be loved.",
  "Thank you for calling me Precious like it was a title and not just a name.",
  "Thank you for the early mornings. All of them. Every single one.",
  "Thank you for the long bus rides to work that nobody ever clapped for.",
  "Thank you for the shifts far away from home in countries that didn't know your name.",
  "Thank you for the money you sent instead of the things you wanted.",
  "Thank you for shoes that were worn thin so mine could be new.",
  "Thank you for never making me feel like I was expensive.",
  "Thank you for school fees. For every last one of them.",
  "Thank you for showing up to the moments that mattered, even when you were exhausted.",
  "Thank you for laughing at my terrible jokes like they were genuinely funny.",
  "Thank you for teaching me how to greet people properly and mean it.",
  "Thank you for teaching me that character is what you do when nothing is at stake.",
  "Thank you for your faith — for showing me a God you actually talk to.",
  "Thank you for praying over me when you thought I was already asleep.",
  "Thank you for apologizing when you were wrong. Not every father learns that.",
  "Thank you for being honest about your regrets instead of pretending to be perfect.",
  "Thank you for letting me see you cry once, and teaching me that strength has tears in it.",
  "Thank you for holding your temper on the days life had already pushed you too far.",
  "Thank you for defending me before you even knew the full story.",
  "Thank you for making me feel safe in a world that isn't always safe.",
  "Thank you for the way you say my name when you're proud of me.",
  "Thank you for telling me you see your mother in me. I will carry her too.",
  "Thank you for loving my mother, and for showing me what patience looks like up close.",
  "Thank you for the discipline that felt unfair then and makes sense now.",
  "Thank you for teaching me to be intentional, to seek wisdom, and to never rush a big decision.",
  "Thank you for never letting bitterness take root in you, no matter what you were handed.",
  "Thank you for keeping your word, even the small promises.",
  "Thank you for the way you help people who can never pay you back.",
  "Thank you for being kind to strangers when nobody was watching.",
  "Thank you for teaching me that hard work is a form of dignity.",
  "Thank you for encouraging me to dream bigger than the room I was standing in.",
  "Thank you for believing in me before I had any evidence to offer you.",
  "Thank you for not giving up on your own dreams even when they got delayed.",
  "Thank you for the quiet Sundays. Those are some of my favourite memories.",
  "Thank you for every meal you gave up so someone else could eat.",
  "Thank you for still asking how I'm doing — and waiting for the real answer.",
  "Thank you for making home a place I run towards, not away from.",
  "Thank you for growing older with grace instead of fear.",
  "Thank you for turning your pain into lessons instead of walls.",
  "Thank you for fifty years of getting back up.",
  "Thank you for being my first hero, and staying my hero even after I grew up.",
  "And thank you, most of all, for being my Dad. Of all the lives I could have been given, I got yours. I won.",
];
