export default function BlueprintBackground({ className = '' }: { className?: string }) {
  return (
    <div className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`}>
      <svg
        className="h-full w-full animate-blueprint-pulse"
        viewBox="0 0 800 600"
        preserveAspectRatio="xMidYMid slice"
        fill="none"
      >
        <defs>
          <pattern id="bp-grid" width="40" height="40" patternUnits="userSpaceOnUse">
            <path d="M 40 0 L 0 0 0 40" fill="none" stroke="rgba(0,212,255,0.15)" strokeWidth="0.5" />
          </pattern>
        </defs>
        <rect width="800" height="600" fill="url(#bp-grid)" />
        <circle cx="200" cy="150" r="80" stroke="#00D4FF" strokeWidth="0.5" opacity="0.4" />
        <circle cx="200" cy="150" r="120" stroke="#00D4FF" strokeWidth="0.5" strokeDasharray="4 4" opacity="0.3" />
        <line x1="50" y1="300" x2="750" y2="300" stroke="#00D4FF" strokeWidth="0.5" opacity="0.3" />
        <line x1="400" y1="50" x2="400" y2="550" stroke="#00D4FF" strokeWidth="0.5" opacity="0.3" />
        <rect x="500" y="100" width="200" height="150" stroke="#00D4FF" strokeWidth="0.5" opacity="0.3" />
        <text x="520" y="90" fill="#00D4FF" fontSize="10" fontFamily="monospace" opacity="0.5">R120</text>
        <path d="M100 450 Q200 400 300 450 T500 450" stroke="#8B5CF6" strokeWidth="0.5" opacity="0.3" />
      </svg>
    </div>
  )
}
