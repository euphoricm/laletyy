import { createFileRoute } from "@tanstack/react-router";
import { PageShell, PageHeader } from "@/components/PageShell";
import { NextRoom } from "@/components/NextRoom";
import { Tilt3D } from "@/components/Tilt3D";

export const Route = createFileRoute("/my-reply")({
  head: () => ({
    meta: [
      { title: "My Reply — What I Said Back to My Father" },
      {
        name: "description",
        content:
          "My reply to my father's jubilee reflection: you made me cry, you see your mother in me, and you have already succeeded beyond measure.",
      },
      { property: "og:title", content: "My Reply to Dad" },
      {
        property: "og:description",
        content: "What I said back, through tears — and what I still mean.",
      },
    ],
  }),
  component: MyReplyPage,
});

function MyReplyPage() {
  return (
    <PageShell>
      <PageHeader
        eyebrow="Chapter 06"
        title={
          <>
            Aww, <span className="text-gold font-semibold">Daddy</span>…
            <br /> you made me cry
          </>
        }
        intro="I was supposed to be the one making you emotional. Not the other way round. 🥹"
      />

      <section className="mx-auto max-w-3xl px-5 pb-8 sm:px-8">
        <div className="space-y-5">
          {bubbles.map((b, i) => (
            <Tilt3D key={i} max={4} glare={false}>
              <div
                className="animate-fade-up rounded-[1.75rem] rounded-tl-md bg-white/92 p-6 shadow-soft-mint backdrop-blur sm:p-9"
                style={{ animationDelay: `${i * 70}ms` }}
              >
                <p className="text-[1.02rem] leading-[1.95] text-foreground/85 sm:text-lg">{b}</p>
              </div>
            </Tilt3D>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-6 pt-14 text-center sm:px-10">
        <div className="rounded-[2rem] bg-gold-gradient p-8 shadow-soft-gold sm:p-12">
          <p className="font-display text-2xl leading-snug text-white sm:text-4xl">
            I'll always be proud to be your daughter, and I'll do my best to make you proud every
            single day.
          </p>
          <p className="mt-6 font-hand text-3xl text-white/90">
            I love you so, so much, Dad. 🫂♥️
          </p>
        </div>
      </section>

      <NextRoom to="/prayers" label="Next: my prayers for your jubilee" />
    </PageShell>
  );
}

const bubbles = [
  "Thank you for your beautiful words. I'll treasure them forever.",
  "Hearing you say that you see Grandma in me touched my heart in a way I can't explain. I never got the chance to meet her — but knowing that when you look at me, you see a part of the woman you loved so dearly, is one of the most beautiful things anyone has ever said to me. I'll carry her name gently, Dad. I promise.",
  "Your words mean more to me than you'll ever know, and I promise to keep them close to my heart.",
  "As I step into this new chapter of my life, I'll remember to be intentional with my choices, to seek God's wisdom, and to never rush important decisions. That's you, living on in how I make my decisions.",
  "Thank you for sharing your story so openly with me. Your experiences — both the joys and the regrets — have become lessons that will guide me for the rest of my life. Do you know how rare it is for a father to be that honest with his child? You gave me a map instead of a mask.",
  "But please, don't let your past mistakes define how you see yourself. To me, you've always been an incredible father. Your strength, your faith, your sacrifices and your unconditional love shaped me into the person I am today. If there's one thing you've succeeded in beyond measure, it's being an amazing dad.",
  "I also want you to know that I believe in you. It's never too late for God to fulfil His promises. I pray that every dream you've carried in your heart comes to pass.",
  "May God direct your every step, open doors no one can shut, restore everything you've lost, bless the work of your hands, and give you more than enough — not just for yourself, but so that you can finally enjoy the fruit of everything you've worked so hard for.",
  "May this jubilee year truly mark the beginning of your greatest season yet.",
  "Thank you for loving me first, for believing in me, for encouraging me, and for always calling me your little princess, your little baby girl. 🐥",
];
