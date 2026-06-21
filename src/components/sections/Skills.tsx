import { motion } from 'framer-motion'
import { skillCategories, additionalBadges } from '../../data/content'
import { useLanguage } from '../../context/LanguageContext'
import SkillCard from '../ui/SkillCard'
import BlueprintBackground from '../ui/BlueprintBackground'
import AnimatedSection from '../ui/AnimatedSection'

export default function Skills() {
  const { lang } = useLanguage()

  return (
    <section id="skills" className="relative bg-cyber-black py-24">
      <BlueprintBackground />
      <div className="relative z-10 mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8">
        <AnimatedSection>
          <h2 className="section-heading mb-12">
            {lang === 'de' ? 'Technische Fertigkeiten' : 'Technical Skills'}
          </h2>
        </AnimatedSection>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {skillCategories.map((cat, i) => (
            <AnimatedSection key={cat.titleEN} delay={i * 0.1}>
              <SkillCard category={cat} />
            </AnimatedSection>
          ))}
        </div>

        <AnimatedSection className="mt-12">
          <h3 className="mb-4 font-mono text-sm text-text-secondary">
            {lang === 'de' ? 'Auch versiert in:' : 'Also proficient in:'}
          </h3>
          <div className="flex flex-wrap gap-2">
            {additionalBadges.map((badge, i) => (
              <motion.span
                key={badge}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.04 }}
                className="rounded-full border border-border-subtle bg-cyber-panel px-3 py-1 font-mono text-xs text-text-secondary transition hover:border-cyber-cyan hover:text-cyber-cyan"
              >
                {badge}
              </motion.span>
            ))}
          </div>
        </AnimatedSection>
      </div>
    </section>
  )
}
