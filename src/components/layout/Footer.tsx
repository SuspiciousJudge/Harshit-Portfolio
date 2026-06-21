import { FaLinkedin, FaGithub } from 'react-icons/fa'
import { contact } from '../../data/content'
import { useLanguage } from '../../context/LanguageContext'
import GearIcon from '../ui/GearIcon'
import DataTicker from '../ui/DataTicker'

export default function Footer() {
  const { lang, setLang } = useLanguage()

  return (
    <footer className="border-t border-cyan-400/10 bg-cyber-black">
      <div className="mx-auto max-w-[1200px] px-4 py-8 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-6 md:grid-cols-3">
          <div className="flex items-center justify-center gap-2 font-mono text-sm text-text-secondary md:justify-start">
            <GearIcon size={16} color="#00D4FF" />
            © 2026 Harshit Shah
          </div>
          <div className="flex justify-center gap-4">
            <a href={contact.linkedin} target="_blank" rel="noopener noreferrer" className="text-text-secondary transition hover:text-cyber-cyan hover:shadow-glow-cyan">
              <FaLinkedin size={22} />
            </a>
            <a href={contact.github} target="_blank" rel="noopener noreferrer" className="text-text-secondary transition hover:text-cyber-cyan hover:shadow-glow-cyan">
              <FaGithub size={22} />
            </a>
          </div>
          <div className="flex justify-center md:justify-end">
            <div className="flex overflow-hidden rounded-full border border-cyan-400/40">
              {(['en', 'de'] as const).map((l) => (
                <button
                  key={l}
                  type="button"
                  onClick={() => setLang(l)}
                  className={`px-3 py-1 font-mono text-xs uppercase ${
                    lang === l ? 'bg-cyber-cyan font-bold text-cyber-black' : 'text-text-secondary'
                  }`}
                >
                  {l}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
      <DataTicker />
    </footer>
  )
}
