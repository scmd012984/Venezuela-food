export function VenezuelaFlagBackground() {
  const stars = [
    { x: 160, y: 170 },
    { x: 245, y: 132 },
    { x: 335, y: 112 },
    { x: 430, y: 104 },
    { x: 525, y: 112 },
    { x: 615, y: 132 },
    { x: 700, y: 170 },
  ] as const;

  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      <div className="absolute inset-0 opacity-[0.38]">
        <div className="h-1/3 bg-linear-to-b from-[#ffdd33] via-[#f7cb18] to-[#e5b700]" />
        <div className="h-1/3 bg-linear-to-b from-[#0a3db4] via-[#0033a0] to-[#00297f]" />
        <div className="h-1/3 bg-linear-to-b from-[#d22a2a] via-[#ba1a1a] to-[#971010]" />
      </div>

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_25%_20%,rgba(255,255,255,0.12),transparent_42%),radial-gradient(circle_at_78%_72%,rgba(255,255,255,0.08),transparent_40%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_35%,rgba(0,0,0,0.08)_100%)]" />

      <svg
        viewBox="0 0 860 300"
        className="absolute left-1/2 top-1/2 w-[min(88vw,920px)] max-w-[920px] -translate-x-1/2 -translate-y-[44%] opacity-[0.22]"
        aria-hidden="true"
      >
        {stars.map((star) => (
          <text
            key={`${star.x}-${star.y}`}
            x={star.x}
            y={star.y}
            fill="#ffffff"
            fontSize="34"
            textAnchor="middle"
            dominantBaseline="middle"
            style={{
              filter: "drop-shadow(0 1px 1px rgba(0, 0, 0, 0.2))",
            }}
          >
            ★
          </text>
        ))}
      </svg>

      <div className="absolute inset-0 bg-background/88 backdrop-blur-[3px] saturate-[1.02]" />
      <div className="absolute inset-0 bg-linear-to-b from-vanilla-bright/50 via-transparent to-vanilla-deep/45" />
    </div>
  );
}
