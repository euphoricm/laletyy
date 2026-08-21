import { createFileRoute, Link } from "@tanstack/react-router";
import { PageShell, PageHeader } from "@/components/PageShell";
import { MediaSlot } from "@/components/MediaSlot";

export const Route = createFileRoute("/gallery")({ component: GalleryPage });
const photos = [
  "A little glow",
  "Pretty without trying",
  "Main character energy",
  "Soft smile, big heart",
  "A whole mood",
  "Birthday girl magic",
  "Just Laleti things",
  "A smile that lights up the room",
  "A quiet little sparkle",
];
const galleryImages = [
  "/media/laleti-01.jpg",
  "/media/laleti-02.jpg",
  "/media/laleti-03.jpg",
  "/media/laleti-04.jpg",
  "/media/laleti-05.jpg",
  "/media/laleti-06.jpg",
  "/media/laleti-07.jpg",
];

function GalleryPage() {
  return (
    <PageShell>
      <PageHeader
        eyebrow="Twenty in pictures"
        title={
          <>
            A gallery of <span className="text-gold font-semibold">Laleti</span>
          </>
        }
        intro="A collection of beautiful moments, favourite smiles and the moving memories that make this birthday story feel alive."
      />
      <section className="mx-auto grid max-w-6xl gap-6 px-5 pb-10 sm:grid-cols-2 lg:grid-cols-3">
        {galleryImages.map((src, i) => (
          <figure
            key={`${src}-${i}`}
            className="overflow-hidden rounded-3xl bg-white/90 shadow-soft-mint"
          >
            <MediaSlot
              src={src}
              alt={`Laleti memory ${i + 1}`}
              className="h-80 w-full object-cover"
            />
            <figcaption className="p-5 font-hand text-2xl text-foreground/75">
              {photos[i] ?? "A little sparkle"}
            </figcaption>
          </figure>
        ))}
      </section>
      <div className="pb-16 text-center">
        <Link to="/my-reply" className="text-sm font-medium text-primary">
          Continue to the memory reel
        </Link>
      </div>
    </PageShell>
  );
}
