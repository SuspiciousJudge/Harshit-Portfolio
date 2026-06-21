import { motion } from 'framer-motion'
import { useInView } from '../../hooks/useInView'

interface Props {
  label: string
  level: number
  accentColor?: string
}

export default function ProgressBar({ label, level, accentColor = '#00D4FF' }: Props) {
  const { ref, inView } = useInView(0.3)

  return (
    <div ref={ref} className="mb-3">
      <div className="mb-1 flex justify-between font-mono text-xs text-text-secondary">
        <span>{label}</span>
        <span>{level}%</span>
      </div>
      <div className="h-2 overflow-hidden rounded-full bg-cyber-mid">
        <motion.div
          className="h-full rounded-full"
          style={{ background: `linear-gradient(90deg, ${accentColor}, #00FFC8)` }}
          initial={{ width: 0 }}
          animate={{ width: inView ? `${level}%` : 0 }}
          transition={{ duration: 1, ease: 'easeOut' }}
        />
      </div>
    </div>
  )
}
