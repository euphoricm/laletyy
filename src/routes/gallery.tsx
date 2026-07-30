import { createFileRoute } from "@tanstack/react-router";
import { PageShell, PageHeader } from "@/components/PageShell";
import { NextRoom } from "@/components/NextRoom";
import { Tilt3D } from "@/components/Tilt3D";
import { gallery } from "@/lib/photos";

export const Route = createFileRoute("/gallery")({
  head: () => ({
    meta: [
      { title: "Gallery — Fifty Years of Sir Martin" },
      {
        name: "description",
        content:
          "A photo gallery of my father, Sir Martin, in the places his hard work took him — a jubilee birthday tribute.",
      },
      { property: "og:title", content: "Gallery — Fifty Years of Sir Martin" },
      {
        property: "og:description",
        content: "Your face, in all the places your hard work took you.",
      },
    ],
  }),
  component: GalleryPage,
});

function GalleryPage() {
  return (
    <PageShell>
      <PageHeader
        eyebrow="Chapter 04"
        title={
          <>
            A gallery of <span className="text-gold font-semibold">you</span>
          </>
        }
        intro="Photographs of a man who kept showing up. Tilt them, hold them, look at them the way I look at them."
      />

      <section className="mx-auto max-w-6xl px-5 pb-6 sm:px-10">
        <div className="grid gap-8 sm:grid-cols-2">
          {gallery.map((g, i) => (
            <Tilt3D key={i} max={10} className={i % 3 === 0 ? "sm:col-span-2" : ""}>
              <figure
                className="animate-fade-up overflow-hidden rounded-4xl bg-white/90 shadow-3d"
                style={{ animationDelay: `${i * 80}ms` }}
              >
                <img
                  src={g.src}
                  alt={g.caption}
                  loading="lazy"
                  className={`w-full object-cover ${i % 3 === 0 ? "h-95 sm:h-155" : "h-[360px] sm:h-[480px]"}`}
                />
                <figcaption className="p-6 sm:p-8">
                  <p className="font-display text-xl sm:text-2xl">{g.caption}</p>
                  <p className="mt-3 font-hand text-2xl text-foreground/70">{g.note}</p>
                </figcaption>
              </figure>
            </Tilt3D>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-6 pt-16 text-center sm:px-10">
        <div className="gold-rule mx-auto w-40" />
        <p className="mt-8 text-lg leading-relaxed text-foreground/75">
          In every one of these pictures, you are away from home, working. That's the part that
          undoes me. Fifty years old and there is barely a photograph of you resting. Dad, this year
          — please rest. You've earned it a hundred times over.
        </p>
      </section>

      <NextRoom to="/his-words" label="Next: Dad's own words" />
    </PageShell>
  );
}
