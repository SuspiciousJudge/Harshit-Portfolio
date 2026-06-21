import { motion } from 'framer-motion'
import { education } from '../../data/content'
import { useLanguage } from '../../context/LanguageContext'
import AnimatedSection from '../ui/AnimatedSection'
import { useInView } from '../../hooks/useInView'

export default function Education() {
  const { t, lang } = useLanguage()
  const { ref, inView } = useInView(0.3)
  const circumference = 2 * Math.PI * 36
  const offset = circumference - 0.8 * circumference

  return (
    <section id="education" className="bg-cyber-black py-24">
      <div className="mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8">
        <AnimatedSection>
          <p className="mb-4 font-mono text-sm text-cyan-400/60">
            {lang === 'de' ? '// 04 — AUSBILDUNG' : '// 04 — EDUCATION'}
          </p>
          <h2 className="section-heading mb-12">{lang === 'de' ? 'Ausbildung' : 'Education'}</h2>
        </AnimatedSection>

        <AnimatedSection>
          <div ref={ref} className="glass-card hud-border mx-auto flex max-w-4xl flex-col gap-8 rounded-2xl p-8 lg:flex-row">
            <div className="lg:w-2/5">
              <div className="font-display text-5xl font-black text-gradient-cyan">MSc</div>
              <h3 className="mt-2 font-display text-xl font-semibold text-text-primary">{t(education.degree)}</h3>
              <p className="mt-2 font-medium text-cyber-teal">{education.institution}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                <span className="rounded border border-cyan-400/30 bg-cyber-panel px-3 py-1 font-mono text-xs text-cyber-cyan">
                  {education.period}
                </span>
                <span className="rounded border border-cyan-400/30 bg-cyber-panel px-3 py-1 font-mono text-xs text-cyber-cyan">
                  {education.location}
                </span>
                <span className="rounded bg-cyber-amber/20 px-3 py-1 font-mono text-xs text-cyber-amber">
                  {lang === 'de' ? 'IN BEARBEITUNG' : 'IN PROGRESS'}
                </span>
              </div>
            </div>

            <div className="lg:w-3/5">
              <p className="mb-4 font-mono text-xs text-cyan-400/60">
                {lang === 'de' ? 'Relevante Module' : 'Relevant Modules'}
              </p>
              <ul className="space-y-3">
                {education.modules.map((mod, i) => (
                  <motion.li
                    key={i}
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="flex gap-2 font-medium text-text-primary"
                  >
                    <span className="font-mono text-cyber-cyan">&gt;</span>
                    {t(mod)}
                  </motion.li>
                ))}
              </ul>
              <p className="mt-6 font-mono text-xs text-text-muted">
                GPA: In Progress · University: OvGU · Credits: 120 ECTS
              </p>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  )
}
