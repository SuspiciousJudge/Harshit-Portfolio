import { languages, interests } from '../../data/content'
import { useLanguage } from '../../context/LanguageContext'
import LanguageRing from '../ui/LanguageRing'
import AnimatedSection from '../ui/AnimatedSection'
import { motion } from 'framer-motion'

export default function Languages() {
  const { lang } = useLanguage()

  return (
    <section id="languages" className="bg-cyber-dark py-20">
      <div className="mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8">
        <AnimatedSection>
          <p className="mb-4 font-mono text-sm text-cyan-400/60">
            {lang === 'de' ? '07 — SPRACHEN & INTERESSEN' : '07 — LANGUAGES & INTERESTS'}
          </p>
          <h2 className="section-heading mb-12">{lang === 'de' ? 'Sprachen' : 'Languages'}</h2>
        </AnimatedSection>

        <div className="mb-16 flex flex-wrap justify-center gap-12">
          {languages.map((item) => (
            <LanguageRing key={item.language.en} item={item} />
          ))}
        </div>

        <AnimatedSection>
          <h3 className="section-heading mb-8">{lang === 'de' ? 'Interessen' : 'Interests'}</h3>
          <div className="flex flex-wrap justify-center gap-8">
            {interests.map((item, i) => (
              <motion.div
                key={item.en}
                className="glass-card hud-border rounded-2xl px-12 py-8 text-center"
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity, delay: i * 1 }}
                whileHover={{ scale: 1.04, boxShadow: '0 0 20px rgba(139,92,246,0.4)' }}
              >
                <div className="mb-3 text-5xl">{item.icon}</div>
                <p className="font-display text-cyber-teal">{lang === 'de' ? item.de : item.en}</p>
              </motion.div>
            ))}
          </div>
        </AnimatedSection>
      </div>
    </section>
  )
}
