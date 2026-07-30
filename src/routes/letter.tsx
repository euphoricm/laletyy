import { createFileRoute } from "@tanstack/react-router";
import { PageShell, PageHeader } from "@/components/PageShell";
import { Tilt3D } from "@/components/Tilt3D";
import { photos } from "@/lib/photos";
import { NextRoom } from "@/components/NextRoom";

export const Route = createFileRoute("/letter")({
  head: () => ({
    meta: [
      { title: "The Letter — For My Father, Sir Martin, at 50" },
      {
        name: "description",
        content:
          "A long, honest letter to my father on his 50th birthday: thank you for every sacrifice, every early morning, and for choosing us every single day.",
      },
      { property: "og:title", content: "The Letter — For Sir Martin at 50" },
      {
        property: "og:description",
        content: "The long letter I've been writing in my heart for years.",
      },
    ],
  }),
  component: LetterPage,
});

function LetterPage() {
  return (
    <PageShell>
      <PageHeader
        eyebrow="Letter no. 01"
        title={
          <>
            To the man I call <span className="text-gold font-semibold">Dad</span>
          </>
        }
        intro="Read it slowly. I wrote it slowly."
      />

      <section className="relative mx-auto max-w-3xl px-5 pb-8 sm:px-8">
        <Tilt3D max={5} glare={false}>
          <article className="rounded-[2rem] bg-white/92 p-7 shadow-3d backdrop-blur sm:p-14">
            <p className="font-hand text-3xl text-foreground/80">Dear Daddy,</p>

            <div className="mt-8 space-y-6 text-[1.02rem] leading-[1.9] text-foreground/85 sm:text-lg">
              {paragraphs.map((p, i) => (
                <p key={i} className={i === 0 ? "first-letter:float-left first-letter:mr-3 first-letter:font-display first-letter:text-6xl first-letter:leading-[0.8] first-letter:text-gold" : ""}>
                  {p}
                </p>
              ))}
            </div>

            <div className="gold-rule my-12" />

            <p className="font-hand text-3xl leading-snug text-foreground/80">
              Happy 50th Birthday, Dad.
              <br />I love you more than words will ever be able to say.
            </p>
            <p className="mt-6 text-sm uppercase tracking-[0.3em] text-foreground/55">
              — your little princess
            </p>
          </article>
        </Tilt3D>
      </section>

      <section className="mx-auto max-w-4xl px-6 pb-4 sm:px-10">
        <Tilt3D max={8}>
          <figure className="overflow-hidden rounded-[2rem] shadow-3d">
            <img
              src={photos.stadium}
              alt="Sir Martin standing outside a stadium in Doha"
              className="h-[320px] w-full object-cover sm:h-[520px]"
            />
            <figcaption className="bg-white/90 p-6 font-hand text-2xl text-foreground/75 backdrop-blur">
              You crossed oceans so that we would never have to cross anything alone.
            </figcaption>
          </figure>
        </Tilt3D>
      </section>

      <NextRoom to="/fifty" label="Next: fifty thank-yous, one for every year" />
    </PageShell>
  );
}

const paragraphs = [
  "As I sit here trying to find the right words, I realise that no message could ever truly capture how grateful I am to have you as my father. Fifty years. Fifty whole years of a life that has quietly shaped mine in ways I am still discovering.",
  "You've given so much of yourself for our family — your time, your strength, your dreams, your comfort — often without asking for anything in return. Some of the things you've done for us probably went unnoticed at the time. They will never be forgotten. I noticed. I still notice.",
  "Thank you for every sacrifice you made so that I could have opportunities you may never have had. Thank you for working hard even when you were tired, even when your body begged you to rest, even when nobody was watching and there was no applause waiting at the end of the day.",
  "Thank you for the mornings you left before the sun did. Thank you for the buses, the long shifts, the hot afternoons far away from home. Thank you for the phone calls where you sounded strong for me when I know now you were exhausted. Thank you for choosing us — every single day, without hesitation, without complaint.",
  "Everything you've done has been an expression of love. Not the loud kind that asks to be seen, but the steady kind that just keeps showing up. That's the kind of love I learned from you, and it's the kind of love I try to give the world.",
  "Dad, if I become even half the person you are, I'll consider my life a success. You've taught me that real strength isn't about never falling — it's about getting back up, carrying the people you love with you, and never giving up on them. You taught me that with your life, not with a lecture.",
  "I hope you know how deeply you are loved. I hope you know that your life has made a difference. That your kindness has shaped me. That your presence has been one of the greatest blessings I have ever been given. There is no version of me that exists without you in it.",
  "And I want you to hear this clearly, because I think you sometimes forget it: please don't let your past mistakes define how you see yourself. To me, you have always been an incredible father. Your strength, your faith, your sacrifices and your unconditional love shaped me into the person I am today. If there's one thing you've succeeded in beyond measure, it's being an amazing dad.",
  "I also want you to know that I believe in you. It's never too late for God to fulfil His promises. I pray that every dream you've carried quietly in your heart comes to pass — that doors open that no one can shut, that everything you've lost is restored, and that you finally get to enjoy the fruit of everything you've worked so hard for.",
  "As you turn 50 today, my prayer is that God blesses you with the same love, peace and happiness you've spent your whole life giving to others. May He give you many more healthy years so we can keep making memories together — the ordinary ones, the loud ones, the quiet Sunday ones.",
  "Thank you for being my first hero, my greatest teacher, and the safest place I have ever known. To fifty amazing years, and to many, many more.",
];
