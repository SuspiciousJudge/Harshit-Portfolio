import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import emailjs from '@emailjs/browser'
import { motion } from 'framer-motion'
import { useLanguage } from '../../context/LanguageContext'
import type { ContactFormData } from '../../types'

const schema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  subject: z.string().min(3),
  message: z.string().min(10),
})

type Status = 'idle' | 'loading' | 'success' | 'error'

export default function ContactForm() {
  const { lang } = useLanguage()
  const [status, setStatus] = useState<Status>('idle')
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormData>({ resolver: zodResolver(schema) })

  const labels = {
    name: lang === 'de' ? 'Vollständiger Name' : 'Full Name',
    email: lang === 'de' ? 'E-Mail-Adresse' : 'Email Address',
    subject: lang === 'de' ? 'Betreff' : 'Subject',
    message: lang === 'de' ? 'Nachricht' : 'Message',
  }

  const onSubmit = async (data: ContactFormData) => {
    setStatus('loading')
    try {
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        {
          from_name: data.name,
          from_email: data.email,
          subject: data.subject,
          message: data.message,
        },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
      )
      setStatus('success')
      reset()
    } catch {
      setStatus('error')
    }
  }

  const inputClass =
    'w-full rounded-lg border border-border-subtle/80 bg-cyber-panel/80 px-4 py-3 font-body text-text-primary backdrop-blur-sm placeholder:text-text-muted focus:border-cyber-cyan focus:outline-none focus:ring-[3px] focus:ring-cyan-400/10'

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
      {(['name', 'email', 'subject'] as const).map((field) => (
        <div key={field}>
          <label className="mb-1.5 block font-mono text-xs uppercase tracking-widest text-cyan-400/70">
            {labels[field]}
          </label>
          <input type={field === 'email' ? 'email' : 'text'} className={inputClass} {...register(field)} />
          {errors[field] && (
            <p className="mt-1 font-mono text-xs text-red-400">{errors[field]?.message}</p>
          )}
        </div>
      ))}
      <div>
        <label className="mb-1.5 block font-mono text-xs uppercase tracking-widest text-cyan-400/70">
          {labels.message}
        </label>
        <textarea rows={5} className={inputClass} {...register('message')} />
        {errors.message && (
          <p className="mt-1 font-mono text-xs text-red-400">{errors.message.message}</p>
        )}
      </div>
      <motion.button
        type="submit"
        disabled={status === 'loading'}
        whileHover={{ y: -2 }}
        whileTap={{ scale: 0.98 }}
        className="h-[52px] w-full rounded-lg bg-cyber-cyan font-display font-bold text-cyber-black shadow-glow-cyan disabled:opacity-60"
      >
        {status === 'loading' && (lang === 'de' ? 'SENDEN...' : 'SENDING...')}
        {status === 'success' && (lang === 'de' ? 'NACHRICHT GESENDET!' : 'MESSAGE SENT!')}
        {status === 'error' && (lang === 'de' ? 'FEHLGESCHLAGEN — ERNEUT VERSUCHEN' : 'FAILED — TRY AGAIN')}
        {status === 'idle' && (lang === 'de' ? 'NACHRICHT SENDEN' : 'SEND MESSAGE')}
      </motion.button>
    </form>
  )
}
