import { motion } from 'framer-motion'
import { TypeAnimation } from 'react-type-animation'
import { HiOutlineMail, HiOutlinePhone, HiOutlineLocationMarker, HiChevronDown } from 'react-icons/hi'
import { heroTitles, heroStats, contact } from '../../data/content'
import { useLanguage } from '../../context/LanguageContext'
import VideoBackground from '../ui/VideoBackground'
import BlueprintBackground from '../ui/BlueprintBackground'

export default function Hero() {
  const { lang } = useLanguage()
  const titles = heroTitles[lang]

  return (
    <section id="home" className="relative min-h-screen overflow-hidden pt-[72px]">
      <VideoBackground
        src="/clip1.mp4"
        poster="/posters/hero-poster.svg"
        brightness={0.65}
        overlayClassName="bg-cyber-black/40"
      />
      <div className="absolute inset-0 z-[2] bg-grid-pattern bg-grid opacity-40" />
      <BlueprintBackground className="z-[3]" />
      <div className="scan-overlay z-[4]" />

      <div className="relative z-20 mx-auto grid max-w-[1200px] grid-cols-1 items-center gap-12 px-4 py-16 sm:px-6 lg:grid-cols-5 lg:px-8 lg:py-24">
        <div className="lg:col-span-3">
          <p className="mb-4 font-mono text-sm text-cyan-400/60">
            // SYSTEMS ENGINEER · MAGDEBURG, DE
          </p>
          <h1 className="font-display text-[clamp(3rem,8vw,6rem)] font-black leading-none">
            <motion.span
              className="block text-text-primary"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              {'HARSHIT'.split('').map((c, i) => (
                <motion.span
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.04 }}
                >
                  {c}
                </motion.span>
              ))}
            </motion.span>
            <motion.span
              className="block text-gradient-cyan"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              {'SHAH'.split('').map((c, i) => (
                <motion.span
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 + i * 0.04 }}
                >
                  {c}
                </motion.span>
              ))}
            </motion.span>
          </h1>

          <div className="mt-6 font-mono text-lg text-cyber-teal">
            <span className="text-cyan-400/60">&gt; </span>
            <TypeAnimation
              sequence={titles.flatMap((t) => [t, 2000])}
              wrapper="span"
              speed={50}
              deletionSpeed={65}
              repeat={Infinity}
            />
          </div>

          <div className="my-6 h-0.5 w-[120px] bg-gradient-to-r from-cyber-cyan to-cyber-violet" />

          <div className="flex flex-wrap gap-6 text-sm text-text-secondary">
            <a href={`mailto:${contact.email}`} className="flex items-center gap-2 transition hover:text-cyber-cyan">
              <HiOutlineMail /> {contact.email}
            </a>
            <span className="flex items-center gap-2"><HiOutlinePhone /> {contact.phone}</span>
            <span className="flex items-center gap-2"><HiOutlineLocationMarker /> Magdeburg, DE</span>
          </div>

          <div className="mt-8 flex flex-wrap gap-4">
            <motion.a
              href={`/cv-${lang}.pdf`}
              download
              whileHover={{ scale: 1.02 }}
              className="rounded bg-cyber-cyan px-6 py-3 font-bold text-cyber-black shadow-glow-cyan"
            >
              {lang === 'de' ? 'Lebenslauf herunterladen' : 'Download CV'}
            </motion.a>
            <motion.a
              href="#projects"
              whileHover={{ scale: 1.02 }}
              className="rounded border-2 border-cyber-cyan px-6 py-3 font-semibold text-cyber-cyan hover:bg-cyber-cyan/10"
            >
              {lang === 'de' ? 'Projekte ansehen' : 'View Projects'}
            </motion.a>
          </div>
        </div>

        <div className="relative lg:col-span-2">
          <div className="grid grid-cols-2 gap-4">
            {heroStats.map((stat, i) => (
              <motion.div
                key={stat.value}
                className="glass-card hud-border p-5"
                animate={{ y: [0, -12, 0] }}
                transition={{ duration: 4, repeat: Infinity, delay: i * 0.4 }}
              >
                <div className="font-display text-3xl font-bold text-gradient-cyan">{stat.value}</div>
                <div className="mt-1 text-xs text-text-secondary">
                  {lang === 'de' ? stat.label.de : stat.label.en}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 z-20 flex -translate-x-1/2 flex-col items-center animate-bounce">
        <HiChevronDown className="text-cyan-400/60" size={28} />
        <span className="font-mono text-[10px] text-text-muted">SCROLL</span>
      </div>
    </section>
  )
}
