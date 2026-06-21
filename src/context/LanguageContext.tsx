import { createContext, useContext, useState, useEffect, type ReactNode } from 'react'
import type { Language } from '../types'

interface Ctx {
  lang: Language
  toggle: () => void
  setLang: (lang: Language) => void
  t: (text: { en: string; de: string }) => string
}

const LanguageContext = createContext<Ctx | null>(null)

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [lang, setLangState] = useState<Language>(
    () => (localStorage.getItem('hs-lang') as Language) ?? 'en',
  )

  useEffect(() => {
    localStorage.setItem('hs-lang', lang)
    document.documentElement.lang = lang
  }, [lang])

  const toggle = () => setLangState((p) => (p === 'en' ? 'de' : 'en'))
  const setLang = (l: Language) => setLangState(l)
  const t = (text: { en: string; de: string }) => text[lang]

  return (
    <LanguageContext.Provider value={{ lang, toggle, setLang, t }}>
      {children}
    </LanguageContext.Provider>
  )
}

export const useLanguage = () => {
  const ctx = useContext(LanguageContext)
  if (!ctx) throw new Error('useLanguage must be inside LanguageProvider')
  return ctx
}
