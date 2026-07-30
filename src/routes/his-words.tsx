import { createFileRoute } from "@tanstack/react-router";
import { PageShell, PageHeader } from "@/components/PageShell";
import { NextRoom } from "@/components/NextRoom";
import { Tilt3D } from "@/components/Tilt3D";
import { photos } from "@/lib/photos";
import { Quote } from "lucide-react";

export const Route = createFileRoute("/his-words")({
  head: () => ({
    meta: [
      { title: "His Own Words — Sir Martin's Jubilee Reflection" },
      {
        name: "description",
        content:
          "My father's own reflection on turning 50: the struggles, the losses, the gratitude and the grace of a jubilee year.",
      },
      { property: "og:title", content: "His Own Words — Sir Martin at 50" },
      {
        property: "og:description",
        content: "Dad's jubilee reflection, kept exactly as he told it to me.",
      },
    ],
  }),
  component: HisWordsPage,
});

function HisWordsPage() {
  return (
    <PageShell>
      <PageHeader
        eyebrow="Chapter 05"
        title={
          <>
            In his <span className="text-gold font-semibold">own words</span>
          </>
        }
        intro="Dad, you sent me this and I read it about nine times. I'm keeping it here forever, exactly as you said it."
      />

      <section className="mx-auto max-w-3xl px-5 pb-8 sm:px-8">
        <Tilt3D max={5} glare={false}>
          <article className="relative rounded-[2rem] bg-white/92 p-7 shadow-3d backdrop-blur sm:p-14">
            <Quote className="h-8 w-8 text-gold" />
            <div className="mt-6 space-y-6 text-[1.02rem] leading-[1.95] text-foreground/85 sm:text-lg">
              {hisWords.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
            <div className="gold-rule my-12" />
            <p className="font-hand text-3xl text-foreground/80">— Dad, on his jubilee</p>
          </article>
        </Tilt3D>
      </section>

      <section className="mx-auto max-w-5xl px-5 pt-14 sm:px-10">
        <div className="grid gap-6 sm:grid-cols-3">
          {highlights.map((h, i) => (
            <div
              key={i}
              className="card-3d rounded-3xl bg-white/85 p-7 text-center shadow-soft-gold backdrop-blur"
            >
              <p className="font-display text-4xl text-gold">{h.stat}</p>
              <p className="mt-3 text-sm leading-relaxed text-foreground/75">{h.label}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-5 pt-16 sm:px-10">
        <Tilt3D max={8}>
          <figure className="overflow-hidden rounded-[2rem] shadow-3d">
            <img
              src={photos.bus}
              alt="Sir Martin on his way to work"
              className="h-[340px] w-full object-cover sm:h-[520px]"
            />
            <figcaption className="bg-white/90 p-6 font-hand text-2xl text-foreground/75 backdrop-blur">
              “Sometimes I felt like giving up… but here I am today.” Here you are, Dad. Fifty.
            </figcaption>
          </figure>
        </Tilt3D>
      </section>

      <NextRoom to="/my-reply" label="Next: what I said back" />
    </PageShell>
  );
}

const hisWords = [
  "Thank you so much, Precious. I dearly appreciate your message and your loving words, every time. I am so, so proud of you.",
  "This is my 50th birthday — the jubilee year. I am thankful to God for bringing me this far.",
  "It has been an amazing journey, full of ups and downs, the negative and the positive sides. Remembering from the time I was little: the struggles we endured, the hardships we went through with little, and sometimes nothing, on the table. The demise of my mum. The day-to-day hard work to make it in this unforgiving life.",
  "Sometimes I felt like giving up. The cries were too much, in hidden places. But here I am today — a family man, a husband, a Dad, fifty years old. What a journey. What a blessing.",
  "I know along the way I have wronged people. I have done things I truly regret up to today. I have failed to achieve some of what I aspired for. I have not been able to fully carry my responsibility as a family man, and many things have passed unfulfilled.",
  "Despite all that, I must say God has been merciful, loving, faithful and gracious to me. The little or the much I get, I have been able to provide for my family — though not always to my expectation, or theirs.",
  "Secondly, I am so grateful for having you as my daughter. You filled the void left after my mum's demise. Every moment I see you, I see my mum, who left me when I was fifteen years old, and I feel so much joy.",
  "I am so proud seeing the incredible young adult you have become — full of knowledge, wisdom, and ready to face the world. At your age, I had one prayer request to God: to bless me with a daughter. And truly, He answered my prayer with the most beautiful daughter.",
  "Thank you for always remembering me, encouraging me, and giving me words of hope of a better tomorrow. I cherish you, and always know that in my heart, you remain my little princess.",
];

const highlights = [
  { stat: "50", label: "years of showing up, no matter what the day was carrying." },
  { stat: "15", label: "the age you lost your mother, and still chose to stay soft." },
  { stat: "∞", label: "the number of times you chose your family over yourself." },
];
