const COLORS = ["#6dd5c4", "#d4a852", "#b8c0ff", "#ffffff", "#e7d8ff"];

/** Soft floating jubilee sparkles. Purely decorative. */
export function Confetti({ count = 18 }: { count?: number }) {
  const pieces = Array.from({ length: count }, (_, i) => ({
    left: (i * 97) % 100,
    delay: (i * 0.7) % 9,
    size: 5 + ((i * 3) % 8),
    color: COLORS[i % COLORS.length],
    dur: 8 + ((i * 1.3) % 6),
  }));

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden>
      {pieces.map((p, i) => (
        <span
          key={i}
          className="animate-rise absolute bottom-0 rounded-full"
          style={{
            left: `${p.left}%`,
            width: p.size,
            height: p.size,
            background: p.color,
            animationDelay: `${p.delay}s`,
            animationDuration: `${p.dur}s`,
            boxShadow: `0 0 12px ${p.color}`,
          }}
        />
      ))}
    </div>
  );
}
