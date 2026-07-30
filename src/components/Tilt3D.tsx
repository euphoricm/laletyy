import { useRef, useState, type ReactNode } from "react";

/** A luxury 3D tilt surface that follows the pointer and settles gracefully. */
export function Tilt3D({
  children,
  className = "",
  max = 12,
  glare = true,
}: {
  children: ReactNode;
  className?: string;
  max?: number;
  glare?: boolean;
}) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [style, setStyle] = useState<React.CSSProperties>({});
  const [glarePos, setGlarePos] = useState({ x: 50, y: 50, o: 0 });

  const onMove = (e: React.PointerEvent) => {
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    const px = (e.clientX - r.left) / r.width;
    const py = (e.clientY - r.top) / r.height;
    setStyle({
      transform: `rotateY(${(px - 0.5) * max * 2}deg) rotateX(${(0.5 - py) * max * 2}deg) translateZ(24px)`,
      transition: "transform 120ms ease-out",
    });
    setGlarePos({ x: px * 100, y: py * 100, o: 0.35 });
  };

  const reset = () => {
    setStyle({ transform: "rotateY(0deg) rotateX(0deg) translateZ(0)", transition: "transform 700ms cubic-bezier(0.22,1,0.36,1)" });
    setGlarePos((g) => ({ ...g, o: 0 }));
  };

  return (
    <div className="scene-3d">
      <div
        ref={ref}
        onPointerMove={onMove}
        onPointerLeave={reset}
        style={style}
        className={`preserve-3d relative ${className}`}
      >
        {children}
        {glare ? (
          <div
            className="pointer-events-none absolute inset-0 rounded-[inherit] transition-opacity duration-300"
            style={{
              opacity: glarePos.o,
              background: `radial-gradient(circle at ${glarePos.x}% ${glarePos.y}%, rgba(255,255,255,0.85), transparent 55%)`,
              mixBlendMode: "soft-light",
            }}
          />
        ) : null}
      </div>
    </div>
  );
}
