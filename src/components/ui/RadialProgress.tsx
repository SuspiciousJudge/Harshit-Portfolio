import { motion } from 'framer-motion'
import { useInView } from '../../hooks/useInView'

interface Props {
  label: string
  level: number
  accentColor?: string
  size?: number
}

export default function RadialProgress({
  label,
  level,
  accentColor = '#00FFC8',
  size = 70,
}: Props) {
  const { ref, inView } = useInView(0.4)
  const r = (size - 10) / 2
  const circumference = 2 * Math.PI * r
  const offset = circumference - (level / 100) * circumference

  return (
    <div ref={ref} className="text-center">
      <svg width={size} height={size} className="mx-auto mb-1 -rotate-90">
        <circle cx={size / 2} cy={size / 2} r={r} fill="none" stroke="rgba(48,54,61,1)" strokeWidth="4" />
        <motion.circle
          cx={size / 2}
          cy={size / 2}
          r={r}
          fill="none"
          stroke={accentColor}
          strokeWidth="4"
          strokeLinecap="round"
          strokeDasharray={circumference}
          initial={{ strokeDashoffset: circumference }}
          animate={{ strokeDashoffset: inView ? offset : circumference }}
          transition={{ duration: 1.2, ease: 'easeOut' }}
        />
      </svg>
      <div className="text-[0.65rem] text-text-secondary">{label}</div>
    </div>
  )
}
