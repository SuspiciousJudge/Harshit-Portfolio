import { motion } from 'framer-motion'
import { useInView } from '../../hooks/useInView'
import type { LanguageItem } from '../../types'
import { useLanguage } from '../../context/LanguageContext'

export default function LanguageRing({ item }: { item: LanguageItem }) {
  const { t } = useLanguage()

  return (
    <div className="rounded-xl border border-border-subtle bg-cyber-panel p-6 text-center shadow-card">
      <div className="mx-auto mb-3 flex h-20 w-20 items-center justify-center overflow-hidden rounded-full bg-cyber-black">
        <span className="text-4xl">{item.flag}</span>
      </div>
      <div className="font-display text-base font-semibold">{t(item.language)}</div>
      <div className="font-mono text-xs text-cyber-cyan">{t(item.level)}</div>
    </div>
  )
}
