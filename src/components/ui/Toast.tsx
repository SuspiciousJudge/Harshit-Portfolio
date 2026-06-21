import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'

let toastHandler: ((msg: string) => void) | null = null

export const showToast = (message: string) => {
  toastHandler?.(message)
}

export default function Toast() {
  const [message, setMessage] = useState<string | null>(null)

  useEffect(() => {
    toastHandler = setMessage
    return () => { toastHandler = null }
  }, [])

  useEffect(() => {
    if (!message) return
    const t = setTimeout(() => setMessage(null), 2500)
    return () => clearTimeout(t)
  }, [message])

  return (
    <AnimatePresence>
      {message && (
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 40 }}
          className="fixed bottom-8 left-1/2 z-[10000] -translate-x-1/2 rounded-lg bg-cyber-cyan px-6 py-3 font-bold text-cyber-black shadow-glow-cyan"
        >
          {message}
        </motion.div>
      )}
    </AnimatePresence>
  )
}
