/** Siete estrellas (arco tipo bandera) con giro suave — blanco brillante. */
const STAR_ARC = [
  { x: 6, y: 22, s: 6.5 },
  { x: 13, y: 12, s: 7 },
  { x: 20, y: 7, s: 7.5 },
  { x: 28, y: 5.5, s: 8 },
  { x: 36, y: 7, s: 7.5 },
  { x: 43, y: 12, s: 7 },
  { x: 50, y: 22, s: 6.5 },
] as const;

export function LogoBrandStars() {
  return (
    <span
      className="relative ml-0.5 inline-flex size-8 shrink-0 items-center justify-center sm:ml-1 sm:size-9"
      aria-hidden
    >
      <span className="animate-brand-stars-spin flex size-full items-center justify-center">
      <svg viewBox="0 0 56 28" className="size-full">
        <g
          fill="#ffffff"
          style={{
            filter:
              "drop-shadow(0 0 3px rgba(255,255,255,0.95)) drop-shadow(0 0 8px rgba(255,252,245,0.75))",
          }}
        >
          {STAR_ARC.map((star) => (
            <text
              key={`${star.x}-${star.y}`}
              x={star.x}
              y={star.y}
              fontSize={star.s}
              textAnchor="middle"
              dominantBaseline="middle"
            >
              ★
            </text>
          ))}
        </g>
      </svg>
      </span>
    </span>
  );
}
