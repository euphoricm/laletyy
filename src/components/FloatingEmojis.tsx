const EMOJIS = ["💖", "🌸", "🎀", "💗", "🌷", "💞", "💖", "🎁", "✨", "💖"];

function getFloatConfig(index: number) {
  return {
    left: (index * 13.7 + 7) % 100,
    size: 18 + (index * 7) % 17,
    delay: (index * 0.75) % 9,
    duration: 10 + (index % 5) * 2.5,
    opacity: 0.55 + (index % 4) * 0.12,
  };
}

export function FloatingEmojis() {
  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden" aria-hidden="true">
      {Array.from({ length: 28 }, (_, index) => {
        const config = getFloatConfig(index);

        return (
          <span
            key={index}
            className="floating-emoji"
            style={{
              left: `${config.left}%`,
              fontSize: `${config.size}px`,
              animationDelay: `${config.delay}s`,
              animationDuration: `${config.duration}s`,
              opacity: config.opacity,
            }}
          >
            {EMOJIS[index % EMOJIS.length]}
          </span>
        );
      })}
    </div>
  );
}
