import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import GearIcon from '../ui/GearIcon'

interface Props {
  onComplete: () => void
}

export default function Preloader({ onComplete }: Props) {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const start = Date.now()
    const interval = setInterval(() => {
      const elapsed = Date.now() - start
      setProgress(Math.min(100, (elapsed / 1200) * 100))
    }, 30)
    const timeout = setTimeout(onComplete, 1400)
    return () => {
      clearInterval(interval)
      clearTimeout(timeout)
    }
  }, [onComplete])

  return (
    <motion.div
      exit={{ opacity: 0, scale: 0.98 }}
      transition={{ duration: 0.5 }}
      className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-cyber-black"
    >
      <div className="scan-overlay absolute inset-0" />
      <div className="relative mb-8">
        <GearIcon size={80} color="#00D4FF" spinning />
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
          <GearIcon size={40} color="#8B5CF6" spinning reverse />
        </div>
      </div>
      <p className="mb-4 font-mono text-sm text-cyber-cyan">INITIALIZING...</p>
      <div className="h-1 w-48 overflow-hidden rounded-full bg-cyber-panel">
        <motion.div
          className="h-full bg-cyber-teal"
          style={{ width: `${progress}%` }}
        />
      </div>
    </motion.div>
  )
}
