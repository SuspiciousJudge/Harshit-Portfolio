import { motion } from 'framer-motion'
import { FaGraduationCap, FaCog, FaMapMarkerAlt } from 'react-icons/fa'
import { aboutText } from '../../data/content'
import { useLanguage } from '../../context/LanguageContext'
import AnimatedSection from '../ui/AnimatedSection'

export default function About() {
  const { t, lang } = useLanguage()
  const words = t(aboutText).split(' ')

  return (
    <section id="about" className="bg-cyber-dark py-24">
      <div className="mx-auto grid max-w-[1200px] grid-cols-1 items-center gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
        <AnimatedSection>
          <h2 className="section-heading mb-6">
            {lang === 'de' ? 'Über mich' : 'About Me'}
          </h2>
          <p className="mb-8 text-lg leading-relaxed text-text-secondary text-justify">
            {words.map((word, i) => (
              <motion.span
                key={i}
                className="mr-1 inline-block"
                initial={{ opacity: 0, y: 8 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.015 }}
              >
                {word}
              </motion.span>
            ))}
          </p>
          <div className="flex flex-wrap gap-3">
            {[
              { icon: FaGraduationCap, text: 'MSc Systems Engineering' },
              { icon: FaCog, text: 'CATIA V5 / Siemens NX' },
              { icon: FaMapMarkerAlt, text: 'Magdeburg, Germany' },
            ].map(({ icon: Icon, text }) => (
              <span key={text} className="flex items-center gap-2 rounded-full border border-border-subtle bg-cyber-panel px-3 py-1.5 text-xs text-text-secondary">
                <Icon className="text-cyber-cyan" /> {text}
              </span>
            ))}
          </div>

          {/* Interests removed from About section to avoid duplication (displayed in Languages section) */}
        </AnimatedSection>

        <AnimatedSection delay={0.2} className="flex flex-col items-center">
          <img
            src="/profile.jpg"
            alt="Harshit Shah"
            className="h-[350px] w-[350px] rounded-full border-[3px] border-cyber-cyan object-cover shadow-[0_0_40px_rgba(0,212,255,0.4)]"
          />
        </AnimatedSection>
      </div>
    </section>
  )
}
