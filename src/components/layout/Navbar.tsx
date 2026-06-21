import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { HiMenuAlt3 } from 'react-icons/hi'
import { navLinks } from '../../data/content'
import { useLanguage } from '../../context/LanguageContext'
import { useScrollSpy } from '../../hooks/useScrollSpy'
import GearIcon from '../ui/GearIcon'

export default function Navbar() {
  const { lang, setLang } = useLanguage()
  const active = useScrollSpy(navLinks.map((l) => l.id))
  const [open, setOpen] = useState(false)

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
    setOpen(false)
  }

  return (
    <nav className="fixed left-0 right-0 top-0 z-50 border-b border-cyan-400/15 bg-cyber-black/85 backdrop-blur-xl">
      <div className="mx-auto flex h-[72px] max-w-[1200px] items-center justify-between px-4 sm:px-6 lg:px-8">
        <button type="button" onClick={() => scrollTo('home')} className="flex items-center gap-2">
          <GearIcon size={24} color="#00D4FF" spinning />
        </button>

        <ul className="hidden items-center gap-6 md:flex">
          {navLinks.map((link) => (
            <li key={link.id}>
              <button
                type="button"
                onClick={() => scrollTo(link.id)}
                className={`nav-link relative pb-1 font-body text-xs font-medium uppercase tracking-wider transition-colors ${
                  active === link.id ? 'text-cyber-cyan' : 'text-text-secondary hover:text-text-primary'
                }`}
              >
                {lang === 'de' ? link.de : link.en}
                <span
                  className={`absolute bottom-0 left-0 h-0.5 bg-cyber-cyan transition-all duration-300 ${
                    active === link.id ? 'w-full' : 'w-0 group-hover:w-full'
                  }`}
                />
              </button>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-3">
          <div className="flex overflow-hidden rounded-full border border-cyan-400/40">
            {(['en', 'de'] as const).map((l) => (
              <button
                key={l}
                type="button"
                onClick={() => setLang(l)}
                className={`px-3 py-1 font-mono text-xs uppercase transition-all ${
                  lang === l ? 'bg-cyber-cyan font-bold text-cyber-black' : 'text-text-secondary'
                }`}
              >
                {l}
              </button>
            ))}
          </div>
          <button type="button" className="text-cyber-cyan md:hidden" onClick={() => setOpen(!open)}>
            <HiMenuAlt3 size={24} />
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden border-t border-cyan-400/10 bg-cyber-black/95 md:hidden"
          >
            <div className="flex flex-col gap-4 p-6">
              {navLinks.map((link) => (
                <button
                  key={link.id}
                  type="button"
                  onClick={() => scrollTo(link.id)}
                  className="text-left font-medium uppercase tracking-wider text-text-secondary"
                >
                  {lang === 'de' ? link.de : link.en}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}
