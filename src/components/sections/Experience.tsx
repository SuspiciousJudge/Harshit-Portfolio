import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { experiences } from '../../data/content'
import { useLanguage } from '../../context/LanguageContext'
import TimelineEntry from '../ui/TimelineEntry'
import AnimatedSection from '../ui/AnimatedSection'

export default function Experience() {
  const { lang } = useLanguage()
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] })
  const scaleY = useTransform(scrollYProgress, [0, 1], [0, 1])

  return (
    <section id="experience" className="bg-cyber-dark py-24">
      <div className="mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8">
        <AnimatedSection>
          <p className="mb-4 font-mono text-sm text-cyan-400/60">
            {lang === 'de' ? '03 — ERFAHRUNG' : '03 — EXPERIENCE'}
          </p>
          <h2 className="section-heading mb-16">
            {lang === 'de' ? 'Berufliche Erfahrung' : 'Professional Experience'}
          </h2>
        </AnimatedSection>

        <div ref={ref} className="relative">
          <div className="absolute left-4 top-0 hidden h-full w-0.5 overflow-hidden md:left-1/2 md:block md:-translate-x-1/2">
            <motion.div
              className="h-full w-full origin-top bg-gradient-to-b from-cyber-cyan via-cyber-violet to-transparent"
              style={{ scaleY }}
            />
          </div>
          {experiences.map((entry, i) => (
            <TimelineEntry key={entry.organization + entry.period} entry={entry} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
