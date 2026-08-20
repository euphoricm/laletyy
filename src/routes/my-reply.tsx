import { createFileRoute, Link } from "@tanstack/react-router";
import { PageShell, PageHeader } from "@/components/PageShell";
import { Video } from "lucide-react";

export const Route = createFileRoute("/my-reply")({ component: ReelPage });

function ReelPage() {
  return (
    <PageShell>
      <PageHeader
        eyebrow="Press play"
        title={
          <>
            A little <span className="text-gold font-semibold">memory reel</span>
          </>
        }
        intro="Your videos will live here: the laughter, the movement, the moments a photo cannot keep."
      />
      <section className="mx-auto grid max-w-5xl gap-6 px-5 pb-16 md:grid-cols-3">
        {[1, 2, 3, 4, 5].map((n) => (
          <div key={n} className="overflow-hidden rounded-3xl bg-white/90 shadow-soft-mint">
            <video controls className="h-80 w-full bg-lavender-gradient object-cover">
              <source src={`/media/video${n}.mp4`} type="video/mp4" />
            </video>
            <div className="flex items-center gap-2 p-4 font-hand text-xl">
              <Video className="h-4 w-4 text-primary" />
              Laleti on film
            </div>
          </div>
        ))}
      </section>
      <div className="pb-16 text-center">
        <Link to="/prayers" className="text-sm font-medium text-primary">
          Continue to birthday blessings
        </Link>
      </div>
    </PageShell>
  );
}
