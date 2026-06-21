import type { ComponentType } from 'react'
import { motion } from 'framer-motion'
import { FaDraftingCompass } from 'react-icons/fa'
import { VscGraph } from 'react-icons/vsc'
import { MdDeveloperBoard } from 'react-icons/md'
import type { SkillCategory } from '../../types'
import { useLanguage } from '../../context/LanguageContext'
import ProgressBar from './ProgressBar'
import RadialProgress from './RadialProgress'

const icons: Record<string, ComponentType<{ size?: number; color?: string }>> = {
  FaDraftingCompass,
  VscGraph,
  MdDeveloperBoard,
}

export default function SkillCard({ category }: { category: SkillCategory }) {
  const { lang } = useLanguage()
  const title = lang === 'de' ? category.titleDE : category.titleEN
  const Icon = icons[category.iconName] ?? FaDraftingCompass

  return (
    <motion.div
      className="glass-card hud-border rounded-xl p-6"
      whileHover={{ y: -8, boxShadow: `0 0 30px ${category.accentColor}33` }}
      transition={{ type: 'spring', stiffness: 300 }}
    >
      <div className="mb-4 flex items-center gap-3">
        <Icon size={28} color={category.accentColor} />
        <h3 className="font-display text-base font-semibold text-text-primary">{title}</h3>
      </div>
      <div
        className="mb-4 h-0.5 w-full"
        style={{ background: `linear-gradient(90deg, ${category.accentColor}, transparent)` }}
      />

      <div className="flex flex-wrap gap-2">
        {category.skills.map((s) => (
          <span
            key={s.name}
            className="tech-tag transition-colors hover:border-current"
            style={{ ['--hover-color' as string]: category.accentColor }}
          >
            {s.name}
          </span>
        ))}
      </div>
    </motion.div>
  )
}
