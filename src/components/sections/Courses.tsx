import { motion } from 'framer-motion'
import { courses } from '../../data/content'
import { useLanguage } from '../../context/LanguageContext'
import AnimatedSection from '../ui/AnimatedSection'

export default function Courses() {
  const { t, lang } = useLanguage()

  return (
    <section id="courses" className="bg-cyber-black py-20">
      <div className="mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8">
        <AnimatedSection>
          <h2 className="section-heading mb-12">
            {lang === 'de' ? 'Kurse & Zertifikate' : 'Courses & Certifications'}
          </h2>
        </AnimatedSection>

        {courses.filter((c) => c.certificate).length > 0 && (
          <AnimatedSection>
            <h3 className="mb-4 font-display text-sm font-semibold text-text-primary">{lang === 'de' ? 'Zertifikate' : 'Certificates'}</h3>
            <div className="mb-6 flex flex-col gap-3">
              {courses
                .filter((c) => c.certificate)
                .map((c) => (
                  <div
                    key={c.title.en}
                    className="rounded border border-border-subtle bg-cyber-panel px-4 py-3 font-display text-sm text-cyber-cyan"
                  >
                    {t(c.title)}
                  </div>
                ))}
            </div>
          </AnimatedSection>
        )}

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {courses
            .filter((c) => !c.certificate)
            .map((course, ci) => (
              <AnimatedSection key={course.title.en} delay={ci * 0.1}>
                <motion.div
                  whileHover={{ boxShadow: '0 0 20px rgba(0,212,255,0.2)' }}
                  className="glass-card hud-border rounded-xl p-6"
                >
                  <div className="mb-4 flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-orange-500/20 font-bold text-orange-400">
                      MW
                    </div>
                    <div>
                      <h3 className="font-display text-sm font-semibold text-text-primary">{t(course.title)}</h3>
                      <p className="font-mono text-xs text-cyan-400/70">
                        {course.issuer} · {course.year}
                      </p>
                    </div>
                  </div>
                  <ul className="space-y-2">
                    {course.bullets.map((b, i) => (
                      <motion.li
                        key={i}
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.08 }}
                        className="text-sm text-text-secondary text-justify"
                      >
                        <span className="text-cyber-teal">▸ </span>
                        {t(b)}
                      </motion.li>
                    ))}
                  </ul>
                </motion.div>
              </AnimatedSection>
            ))}
        </div>
      </div>
    </section>
  )
}
