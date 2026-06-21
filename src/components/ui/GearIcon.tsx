import clsx from 'clsx'

interface GearIconProps {
  size?: number
  color?: string
  className?: string
  spinning?: boolean
  reverse?: boolean
}

export default function GearIcon({
  size = 24,
  color = '#00D4FF',
  className,
  spinning = false,
  reverse = false,
}: GearIconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      fill="none"
      className={clsx(
        spinning && (reverse ? 'animate-spin-reverse' : 'animate-spin-slow'),
        className,
      )}
    >
      <path
        d="M50 10 L54 20 L64 18 L66 28 L76 30 L74 40 L84 44 L74 48 L76 58 L66 60 L64 70 L54 68 L50 78 L46 68 L36 70 L34 60 L24 58 L26 48 L16 44 L26 40 L24 30 L34 28 L36 18 L46 20 Z"
        stroke={color}
        strokeWidth="2"
        fill="#161B22"
      />
      <circle cx="50" cy="44" r="12" fill="none" stroke={color} strokeWidth="2" />
    </svg>
  )
}
