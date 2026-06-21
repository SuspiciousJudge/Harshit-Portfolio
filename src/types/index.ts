export type Language = 'en' | 'de'

export interface BilingualText {
  en: string
  de: string
}

export interface SkillItem {
  name: string
  level?: number
}

export interface SkillCategory {
  titleEN: string
  titleDE: string
  iconName: string
  variant: 'bar' | 'radial' | 'tags'
  accentColor: string
  skills: SkillItem[]
}

export interface ExperienceEntry {
  role: BilingualText
  organization: string
  location: string
  period: string
  current: boolean
  topic?: BilingualText
  bullets: BilingualText[]
  image?: string
}

export interface Project {
  title: BilingualText
  category: BilingualText
  period?: string
  tags: string[]
  description: BilingualText
  bullets?: BilingualText[]
  award?: BilingualText
  image: string
  github?: string
}

export interface CourseItem {
  title: BilingualText
  issuer: string
  year?: string
  certificate?: string
  bullets: BilingualText[]
}

export interface LanguageItem {
  language: BilingualText
  level: BilingualText
  percent: number
  flag: string
}

export interface ContactFormData {
  name: string
  email: string
  subject: string
  message: string
}
