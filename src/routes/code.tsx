import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { useRef, useState } from "react";
import { LockKeyhole } from "lucide-react";
import { PageShell, PageHeader } from "@/components/PageShell";
import { PASSCODE, PASSCODE_HINT } from "@/lib/laleti";

export const Route = createFileRoute("/code")({ component: CodePage });

function CodePage() {
  const navigate = useNavigate();
  const [digits, setDigits] = useState(["", "", "", ""]);
  const [status, setStatus] = useState(PASSCODE_HINT);
  const [unlocked, setUnlocked] = useState(false);
  const refs = useRef<Array<HTMLInputElement | null>>([]);
  const unlock = () => {
    if (digits.join("") === PASSCODE) {
      setUnlocked(true);
      setStatus("Access granted, birthday girl. Opening your surprise...");
      window.setTimeout(() => navigate({ to: "/crossword" }), 900);
    } else setStatus("Almost. Try Laleti's birthday key again.");
  };
  const update = (value: string, index: number) => {
    const next = [...digits];
    next[index] = value.replace(/\D/g, "").slice(-1);
    setDigits(next);
    if (next[index] && refs.current[index + 1])
      refs.current[index + 1]?.focus();
    if (next.every(Boolean) && next.join("") === PASSCODE) {
      setUnlocked(true);
      setStatus("Access granted, birthday girl. Opening your surprise...");
      window.setTimeout(() => navigate({ to: "/crossword" }), 900);
    }
  };
  return (
    <PageShell>
      <PageHeader
        eyebrow="A small key, a big surprise"
        title={
          <>
            Unlock{" "}
            <span className="text-gold font-semibold">Laleti's world</span>
          </>
        }
        intro="Hint: her birthdate plus her new age is the key. Enter the four numbers that celebrate Laleti's twentieth year, then let the next surprise open."
      />
      <section className="mx-auto max-w-xl px-5 pb-16 text-center">
        <div
          className={`rounded-[2rem] bg-white/90 p-8 shadow-3d transition ${unlocked ? "scale-[1.02]" : ""}`}
        >
          <span className="mx-auto grid h-16 w-16 place-items-center rounded-full bg-gold-gradient text-white shadow-soft-gold">
            <LockKeyhole className="h-7 w-7" />
          </span>
          <div className="mt-8 flex justify-center gap-3">
            {digits.map((digit, index) => (
              <input
                key={index}
                ref={(element) => {
                  refs.current[index] = element;
                }}
                value={digit}
                onChange={(event) => update(event.target.value, index)}
                onKeyDown={(event) => {
                  if (event.key === "Backspace" && !digit)
                    refs.current[index - 1]?.focus();
                  if (event.key === "Enter") unlock();
                }}
                inputMode="numeric"
                maxLength={1}
                aria-label={`Birthday code digit ${index + 1}`}
                className="h-14 w-12 rounded-xl border-2 border-lavender bg-lavender-soft/40 text-center font-display text-2xl outline-none focus:border-primary"
              />
            ))}
          </div>
          <button
            onClick={unlock}
            className="mt-7 rounded-full bg-foreground px-7 py-3.5 text-sm font-medium text-background shadow-3d"
          >
            Unlock
          </button>
          <p
            className={`mt-5 text-sm ${unlocked ? "text-primary" : "text-foreground/65"}`}
          >
            {status}
          </p>
        </div>
      </section>
    </PageShell>
  );
}
