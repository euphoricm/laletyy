const EMOJIS = ["💗", "💕", "🌸", "🩷", "✨", "🎀"];

export function Confetti({ count = 18 }: { count?: number }) {
  const pieces = Array.from({ length: count }, (_, i) => ({
    left: (i * 97) % 100,
    delay: (i * 0.7) % 9,
    dur: 8 + ((i * 1.3) % 6),
    emoji: EMOJIS[i % EMOJIS.length],
  }));
  return (
    <div
      className="pointer-events-none absolute inset-0 overflow-hidden"
      aria-hidden
    >
      {pieces.map((p, i) => (
        <span
          key={i}
          className="animate-rise absolute bottom-0 text-xl drop-shadow-sm"
          style={{
            left: `${p.left}%`,
            animationDelay: `${p.delay}s`,
            animationDuration: `${p.dur}s`,
          }}
        >
          {p.emoji}
        </span>
      ))}
    </div>
  );
}
