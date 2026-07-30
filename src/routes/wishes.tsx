import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { PageShell, PageHeader } from "@/components/PageShell";
import { NextRoom } from "@/components/NextRoom";
import { Confetti } from "@/components/Confetti";
import { Heart, Send } from "lucide-react";

export const Route = createFileRoute("/wishes")({
  head: () => ({
    meta: [
      { title: "Birthday Wishes for Sir Martin's 50th" },
      {
        name: "description",
        content:
          "A wall of 50th birthday wishes for Sir Martin — read the messages, and leave one of your own.",
      },
      { property: "og:title", content: "Birthday Wishes for Sir Martin" },
      {
        property: "og:description",
        content: "Read the wishes for Dad's jubilee, and leave one of your own.",
      },
    ],
  }),
  component: WishesPage,
});

type Wish = { name: string; message: string };

const STORAGE_KEY = "martin50-wishes";

function WishesPage() {
  const [wishes, setWishes] = useState<Wish[]>([]);
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [sent, setSent] = useState(false);

  useEffect(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (raw) setWishes(JSON.parse(raw) as Wish[]);
    } catch {
      /* ignore */
    }
  }, []);

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !message.trim()) return;
    const next = [{ name: name.trim(), message: message.trim() }, ...wishes];
    setWishes(next);
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
    } catch {
      /* ignore */
    }
    setName("");
    setMessage("");
    setSent(true);
    setTimeout(() => setSent(false), 3200);
  };

  return (
    <PageShell>
      <div className="relative">
        <Confetti count={16} />
        <PageHeader
          eyebrow="Chapter 09"
          title={
            <>
              The <span className="text-gold font-semibold">wishes</span> wall
            </>
          }
          intro="Everyone who loves you gets a square on this wall. Add yours — Dad will read every single one."
        />
      </div>

      <section className="mx-auto max-w-3xl px-5 pb-4 sm:px-10">
        <form
          onSubmit={submit}
          className="rounded-[2rem] bg-white/92 p-7 shadow-3d backdrop-blur sm:p-10"
        >
          <label className="block text-xs uppercase tracking-[0.3em] text-foreground/55">
            Your name
          </label>
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="e.g. Precious"
            className="mt-3 w-full rounded-2xl border border-border bg-secondary px-5 py-3.5 text-foreground outline-none transition focus:border-primary"
          />
          <label className="mt-6 block text-xs uppercase tracking-[0.3em] text-foreground/55">
            Your birthday wish
          </label>
          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            rows={4}
            placeholder="Happy 50th, Sir Martin…"
            className="mt-3 w-full resize-none rounded-2xl border border-border bg-secondary px-5 py-3.5 text-foreground outline-none transition focus:border-primary"
          />
          <button
            type="submit"
            className="mt-6 inline-flex items-center gap-2 rounded-full bg-foreground px-7 py-3.5 text-sm font-medium text-background shadow-3d transition hover:-translate-y-0.5"
          >
            <Send className="h-4 w-4" /> Add my wish
          </button>
          {sent ? (
            <p className="mt-4 font-hand text-2xl text-primary">
              added to the wall. thank you 🫶
            </p>
          ) : null}
        </form>
      </section>

      <section className="mx-auto max-w-6xl px-5 pt-12 sm:px-10">
        <div className="scene-3d grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {[...wishes, ...seedWishes].map((w, i) => (
            <div
              key={i}
              className="card-3d relative overflow-hidden rounded-3xl bg-white/90 p-7 shadow-soft-mint backdrop-blur"
            >
              <Heart className="h-5 w-5 text-gold" />
              <p className="mt-4 leading-relaxed text-foreground/80">{w.message}</p>
              <p className="mt-5 font-hand text-2xl text-foreground/70">— {w.name}</p>
            </div>
          ))}
        </div>
        <p className="mt-8 text-center text-xs text-foreground/50">
          Wishes you add are saved on this device.
        </p>
      </section>

      <NextRoom to="/" label="Back to the beginning" />
    </PageShell>
  );
}

const seedWishes: Wish[] = [
  {
    name: "Precious",
    message:
      "Happy 50th Birthday, Dad. Thank you for being my first hero, my greatest teacher, and the safest place I've ever known. To fifty amazing years, and to many, many more.",
  },
  {
    name: "Your family",
    message:
      "Fifty years of quiet strength. Thank you for carrying us all this way. Enjoy your jubilee, Sir Martin.",
  },
  {
    name: "Everyone you've helped",
    message:
      "You've helped people who could never pay you back. Today, may all of it come back to you multiplied.",
  },
];
