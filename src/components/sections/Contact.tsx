import { motion } from 'framer-motion'
import { HiOutlineMail, HiOutlinePhone, HiOutlineLocationMarker } from 'react-icons/hi'
import { FaLinkedin, FaGithub } from 'react-icons/fa'
import { contact, spaceQuote } from '../../data/content'
import { useLanguage } from '../../context/LanguageContext'
import VideoBackground from '../ui/VideoBackground'
import ContactForm from '../ui/ContactForm'
import { showToast } from '../ui/Toast'

const stars = [
  { top: '10%', left: '15%', delay: 0 },
  { top: '25%', left: '80%', delay: 0.5 },
  { top: '60%', left: '30%', delay: 1 },
  { top: '75%', left: '70%', delay: 1.5 },
  { top: '40%', left: '50%', delay: 0.8 },
]

export default function Contact() {
  const { t, lang } = useLanguage()

  const copyEmail = () => {
    navigator.clipboard.writeText(contact.email)
    showToast(lang === 'de' ? 'E-Mail kopiert!' : 'Email copied to clipboard!')
  }

  return (
    <section id="contact" className="relative overflow-hidden">
      <VideoBackground
        src="/clip2.mp4"
        poster="/posters/space-poster.svg"
        brightness={0.65}
        overlayClassName="bg-cyber-black/40"
      />

      {stars.map((s, i) => (
        <div
          key={i}
          className="absolute z-[2] h-0.5 w-0.5 animate-pulse rounded-full bg-white"
          style={{ top: s.top, left: s.left, opacity: 0.5, animationDelay: `${s.delay}s` }}
        />
      ))}

      <div className="relative z-20 px-4 py-16 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mx-auto max-w-3xl text-center"
        >
          <div className="font-display text-8xl text-cyan-400/20">&ldquo;</div>
          <blockquote className="whitespace-pre-line font-display text-[clamp(1rem,2.5vw,1.5rem)] leading-relaxed text-text-primary">
            {t(spaceQuote)}
          </blockquote>
          <div className="mx-auto mt-8 h-px w-[200px] bg-cyan-400/20" />
        </motion.div>

        <div className="mx-auto mt-10 flex max-w-4xl flex-wrap justify-center gap-4">
          <button
            type="button"
            onClick={copyEmail}
            className="glass-card hud-border flex items-center gap-3 rounded-xl px-5 py-3 transition hover:shadow-glow-cyan"
          >
            <HiOutlineMail className="text-cyber-cyan" size={22} />
            <span className="text-sm text-text-secondary">{contact.email}</span>
          </button>
          <div className="glass-card hud-border flex items-center gap-3 rounded-xl px-5 py-3">
            <HiOutlinePhone className="text-cyber-cyan" size={22} />
            <span className="text-sm text-text-secondary">{contact.phone}</span>
          </div>
          <div className="glass-card hud-border flex items-center gap-3 rounded-xl px-5 py-3">
            <HiOutlineLocationMarker className="text-cyber-cyan" size={22} />
            <span className="text-sm text-text-secondary">{contact.location}</span>
          </div>
        </div>

        <div className="mt-6 flex justify-center gap-4">
          <a href={contact.linkedin} target="_blank" rel="noopener noreferrer" className="rounded-lg border border-border-subtle px-4 py-2 text-sm transition hover:border-cyber-cyan hover:shadow-glow-cyan">
            <FaLinkedin className="inline mr-2" /> LinkedIn
          </a>
          <a href={contact.github} target="_blank" rel="noopener noreferrer" className="rounded-lg border border-border-subtle px-4 py-2 text-sm transition hover:border-cyber-cyan hover:shadow-glow-cyan">
            <FaGithub className="inline mr-2" /> GitHub
          </a>
        </div>

        <div className="mx-auto mb-16 mt-12 max-w-2xl">
          <h2 className="section-heading mb-8 text-center w-full justify-center">
            {lang === 'de' ? 'Kontakt' : 'Get in Touch'}
          </h2>
          <ContactForm />
        </div>
      </div>
    </section>
  )
}
