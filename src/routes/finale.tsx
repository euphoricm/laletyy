import { createFileRoute, Link } from "@tanstack/react-router";
import { Heart } from "lucide-react";
import { PageShell, PageHeader } from "@/components/PageShell";

export const Route = createFileRoute("/finale")({ component: FinalePage });
function FinalePage() {
  return (
    <PageShell>
      <PageHeader
        eyebrow="One last thing"
        title={
          <>
            The honest <span className="text-gold font-semibold">closing</span>
          </>
        }
        intro="For Laleti, with all the love this little birthday world can hold."
      />
      <section className="mx-auto max-w-3xl px-5 pb-16">
        <article className="rounded-[2rem] bg-white/90 p-7 shadow-3d sm:p-12">
          <Heart className="h-7 w-7 text-gold" />
          <div className="mt-7 space-y-7 text-[1.02rem] leading-[1.95] text-foreground/85 sm:text-lg">
            <p>
              If you have made it this far, you have read every word, played
              every game and blown out every candle, which is exactly the kind
              of patient, generous thing you would do. So here is the honest
              closing: you are one of the best people I have ever been given,
              and I do not say that from a distance. I say it as someone who has
              watched you be tired and still be kind, be hurt and still be
              gentle, be busy and still make room. That is not a personality
              trait, that is a whole character, and you built it yourself.
            </p>
            <p>
              You are a big sister to me in the way that has nothing to do with
              paperwork. You are the person I want to tell things to first. You
              are the one whose approval makes something feel real. You have
              loved me with a steadiness that made me expect better from the
              world, and I hope you understand what a gift that is to hand
              someone. If I ever turn out okay, a large percentage of the credit
              is quietly yours.
            </p>
            <p>
              So go be twenty loudly. Be gorgeous on purpose. Be awesome without
              apologising for it. Ask for more, rest more, dream in an
              unreasonable size, and let the people who love you carry something
              for once. And on the days when the year is hard and you feel like
              nobody notices how much you hold - come back to this page. It will
              still be here, and so will I.
            </p>
          </div>
        </article>
        <div className="mt-12 text-center">
          <Link
            to="/"
            className="inline-flex rounded-full bg-foreground px-7 py-3.5 text-sm font-medium text-background shadow-3d"
          >
            Back to the beginning
          </Link>
        </div>
      </section>
    </PageShell>
  );
}
