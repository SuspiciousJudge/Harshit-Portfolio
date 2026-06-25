import type { LanguageItem } from '../../types'
import { useLanguage } from '../../context/LanguageContext'

const chakraSpokes = Array.from({ length: 24 }, (_, index) => index * 15)

function AshokaChakra() {
  return (
    <span className="absolute left-1/2 top-1/2 h-3.5 w-3.5 -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#000080]">
      {chakraSpokes.map((angle) => (
        <span
          key={angle}
          className="absolute left-1/2 top-1/2 h-[1px] w-[6px] origin-left bg-[#000080]"
          style={{ transform: `rotate(${angle}deg)` }}
        />
      ))}
      <span className="absolute left-1/2 top-1/2 h-1 w-1 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#000080]" />
    </span>
  )
}

function CountryFlag({ language }: { language: LanguageItem['language']['en'] }) {
  if (language === 'German') {
    return (
      <span className="relative block h-10 w-14 overflow-hidden rounded-sm shadow-[0_0_0_1px_rgba(255,255,255,0.25)]" aria-hidden="true">
        <span className="block h-1/3 bg-black" />
        <span className="block h-1/3 bg-[#dd0000]" />
        <span className="block h-1/3 bg-[#ffce00]" />
      </span>
    )
  }

  if (language === 'English') {
    return (
      <span className="relative block h-10 w-14 overflow-hidden rounded-sm bg-[#012169] shadow-[0_0_0_1px_rgba(255,255,255,0.25)]" aria-hidden="true">
        <span className="absolute left-1/2 top-1/2 h-[170%] w-2 -translate-x-1/2 -translate-y-1/2 rotate-[54deg] bg-white" />
        <span className="absolute left-1/2 top-1/2 h-[170%] w-2 -translate-x-1/2 -translate-y-1/2 -rotate-[54deg] bg-white" />
        <span className="absolute left-1/2 top-1/2 h-[170%] w-1 -translate-x-1/2 -translate-y-1/2 rotate-[54deg] bg-[#c8102e]" />
        <span className="absolute left-1/2 top-1/2 h-[170%] w-1 -translate-x-1/2 -translate-y-1/2 -rotate-[54deg] bg-[#c8102e]" />
        <span className="absolute left-1/2 top-0 h-full w-3 -translate-x-1/2 bg-white" />
        <span className="absolute left-0 top-1/2 h-3 w-full -translate-y-1/2 bg-white" />
        <span className="absolute left-1/2 top-0 h-full w-1.5 -translate-x-1/2 bg-[#c8102e]" />
        <span className="absolute left-0 top-1/2 h-1.5 w-full -translate-y-1/2 bg-[#c8102e]" />
      </span>
    )
  }

  return (
    <span className="relative block h-10 w-14 overflow-hidden rounded-sm shadow-[0_0_0_1px_rgba(255,255,255,0.25)]" aria-hidden="true">
      <span className="block h-1/3 bg-[#ff9933]" />
      <span className="relative block h-1/3 bg-white">
        <AshokaChakra />
      </span>
      <span className="block h-1/3 bg-[#138808]" />
    </span>
  )
}

export default function LanguageRing({ item }: { item: LanguageItem }) {
  const { t } = useLanguage()

  return (
    <div className="rounded-xl border border-border-subtle bg-cyber-panel p-6 text-center shadow-card" aria-label={t(item.language)}>
      <div className="mx-auto mb-3 flex h-20 w-20 items-center justify-center overflow-hidden rounded-full bg-cyber-black">
        <CountryFlag language={item.language.en} />
      </div>
      <div className="sr-only">{t(item.language)}</div>
      <div className="font-mono text-xs text-cyber-cyan">{t(item.level)}</div>
    </div>
  )
}
