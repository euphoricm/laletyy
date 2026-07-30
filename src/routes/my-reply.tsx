import { createFileRoute } from "@tanstack/react-router";
import { PageShell, PageHeader } from "@/components/PageShell";
import { NextRoom } from "@/components/NextRoom";
import voiceNote from "./note.ogg";

export const Route = createFileRoute("/my-reply")({
  head: () => ({
    meta: [
      { title: "My Reply — What I Said Back to My Father" },
      {
        name: "description",
        content: "A voice note reply to my father's jubilee reflection.",
      },
      { property: "og:title", content: "My Reply to Dad" },
      {
        property: "og:description",
        content: "What I said back, through tears — a voice note.",
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
            My <span className="text-gold font-semibold">reply</span>, in my own voice
          </>
        }
        intro="I tried to write a reply, but I couldn't find the words. So I recorded one instead. Press play, Dad."
      />

      <section className="mx-auto max-w-2xl px-5 pb-8 sm:px-8">
        <div className="rounded-4xl bg-white/90 p-8 shadow-soft-mint backdrop-blur">
          <audio controls className="w-full">
            <source src={voiceNote} type="audio/ogg" />
            Your browser does not support the audio element.
          </audio>
        </div>
      </section>

      <NextRoom to="/prayers" label="Next: my prayers for your jubilee" />
    </PageShell>
  );
}
