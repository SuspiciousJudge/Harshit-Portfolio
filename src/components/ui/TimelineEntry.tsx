import { motion } from 'framer-motion'
import type { ExperienceEntry } from '../../types'
import { useLanguage } from '../../context/LanguageContext'

interface Props {
  entry: ExperienceEntry
  index: number
}

export default function TimelineEntry({ entry, index }: Props) {
  const { t, lang } = useLanguage()
  const isLeft = index % 2 === 0

  return (
    <motion.div
      className={`relative mb-12 flex w-full ${isLeft ? 'md:justify-start' : 'md:justify-end'}`}
      initial={{ x: isLeft ? -60 : 60, opacity: 0 }}
      whileInView={{ x: 0, opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
    >
      <div
        className={`absolute left-4 top-6 h-3.5 w-3.5 -translate-x-1/2 rounded-full border-[3px] border-cyber-black md:left-1/2 ${
          entry.current ? 'animate-pulse-glow bg-cyber-amber shadow-glow-amber' : 'bg-cyber-cyan/60'
        }`}
      />
      <div
        className={`glass-card ml-8 max-w-md rounded-xl p-6 md:ml-0 ${
          entry.current ? 'border-l-[3px] border-l-cyber-amber hover:shadow-glow-amber' : 'border-l-[3px] border-l-cyber-cyan hover:shadow-glow-cyan'
        } transition-shadow hover:-translate-y-1`}
      >
        <div className="flex flex-wrap items-center gap-2">
          <h3 className="font-display text-base font-semibold text-text-primary">{t(entry.role)}</h3>
          {entry.current && (
            <span className="rounded-full bg-cyber-amber/20 px-2 py-0.5 font-mono text-xs text-cyber-amber">
              {lang === 'de' ? 'AKTUELL' : 'CURRENT'}
            </span>
          )}
        </div>
        <div className="mt-1 font-medium text-cyber-cyan">{entry.organization}</div>
        <div className="font-mono text-xs text-text-secondary">
          {entry.location} · {entry.period}
        </div>
        <div className="my-3 h-px bg-border-subtle" />
        {entry.topic && <p className="mb-3 text-sm italic text-text-secondary text-justify">{t(entry.topic)}</p>}
        {entry.image && (
          <img
            src={entry.image}
            alt={entry.organization}
            className="my-4 max-h-48 w-full rounded-lg object-contain bg-black/20 border border-border-subtle shadow-glow-cyan"
          />
        )}
        <ul className="space-y-2">
          {entry.bullets.map((b, i) => (
            <motion.li
              key={i}
              className="flex gap-2 text-sm text-text-secondary text-justify"
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
            >
              <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-cyber-cyan" />
              {t(b)}
            </motion.li>
          ))}
        </ul>
      </div>
    </motion.div>
  )
}
