"use client";

export function Logo({ className = "" }: { className?: string }) {
  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <svg
        viewBox="0 0 64 64"
        xmlns="http://www.w3.org/2000/svg"
        className="h-9 w-9"
        aria-hidden
      >
        <defs>
          <linearGradient id="petalGrad" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#f5d68b" />
            <stop offset="100%" stopColor="#c89438" />
          </linearGradient>
        </defs>
        {Array.from({ length: 12 }).map((_, i) => {
          const angle = (i * 360) / 12;
          return (
            <ellipse
              key={i}
              cx="32"
              cy="14"
              rx="3"
              ry="9"
              fill="url(#petalGrad)"
              transform={`rotate(${angle} 32 32)`}
              opacity={0.92}
            />
          );
        })}
        <circle cx="32" cy="32" r="6" fill="#7a2f43" />
      </svg>
      <div className="flex flex-col leading-none">
        <span className="font-display text-xl text-plum-900 italic">
          Radieuse
        </span>
        <span className="font-sans text-[0.6rem] tracking-[0.32em] text-rose-600 uppercase">
          Académie
        </span>
      </div>
    </div>
  );
}
