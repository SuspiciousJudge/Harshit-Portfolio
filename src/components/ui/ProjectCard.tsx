import { useState } from 'react'
import { motion } from 'framer-motion'
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa'
import type { Project } from '../../types'
import { useLanguage } from '../../context/LanguageContext'

export default function ProjectCard({ project }: { project: Project }) {
  const { t } = useLanguage()
  const [tilt, setTilt] = useState({ rx: 0, ry: 0 })

  const handleMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect()
    const x = (e.clientX - rect.left) / rect.width - 0.5
    const y = (e.clientY - rect.top) / rect.height - 0.5
    setTilt({ rx: -y * 12, ry: x * 12 })
  }

  return (
    <motion.div
      className="glass-card hud-border w-full overflow-hidden rounded-2xl shadow-card"
      style={{ transform: `perspective(800px) rotateX(${tilt.rx}deg) rotateY(${tilt.ry}deg)` }}
      onMouseMove={handleMove}
      onMouseLeave={() => setTilt({ rx: 0, ry: 0 })}
    >
      <div className="relative h-[220px] overflow-hidden">
        <img src={project.image} alt={t(project.title)} className="h-full w-full object-contain bg-black/50" />
        <div className="absolute inset-0 bg-gradient-to-t from-cyber-black/90 via-transparent to-transparent" />
        <div className="absolute bottom-0 left-0 p-4">
          <span className="tech-tag border-cyan-400/30 bg-cyan-400/10 text-cyan-300">{t(project.category)}</span>
          {project.period && (
            <span className="ml-2 font-mono text-[0.65rem] text-text-muted">{project.period}</span>
          )}
        </div>
      </div>

      <div className="bg-cyber-panel p-5">
        <h3 className="mb-2 font-display text-base font-semibold text-text-primary">{t(project.title)}</h3>
        <div className="mb-3 flex flex-wrap gap-1">
          {project.tags.map((tag) => (
            <span key={tag} className="tech-tag">{tag}</span>
          ))}
        </div>
        <p className="text-sm text-text-secondary text-justify">{t(project.description)}</p>

        {project.award && (
          <div className="mt-3 overflow-hidden rounded border border-cyber-amber/30 bg-cyber-amber/10 p-3 text-sm text-cyber-amber">
            {t(project.award)}
          </div>
        )}

        <div className="mt-4 flex flex-wrap items-center gap-3">
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 font-mono text-sm text-cyber-teal hover:text-cyber-cyan"
            >
              <FaGithub /> GitHub <FaExternalLinkAlt size={10} />
            </a>
          )}
        </div>
      </div>
    </motion.div>
  )
}
