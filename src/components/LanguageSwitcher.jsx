import { useState, useRef, useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown, Check } from 'lucide-react'
import { STORAGE_KEY } from '../i18n/config.js'

const languages = [
  { code: 'es', flag: '🇪🇸', name: 'Español', short: 'ES' },
  { code: 'en', flag: '🇺🇸', name: 'English', short: 'EN' },
]

export default function LanguageSwitcher({ scrolled = false }) {
  const { i18n } = useTranslation()
  const [open, setOpen] = useState(false)
  const ref = useRef(null)
  const current = languages.find(l => l.code === i18n.language) || languages[0]

  // Close on outside click
  useEffect(() => {
    const handler = (e) => { if (ref.current && !ref.current.contains(e.target)) setOpen(false) }
    document.addEventListener('mousedown', handler)
    return () => document.removeEventListener('mousedown', handler)
  }, [])

  const handleChange = (code) => {
    i18n.changeLanguage(code)
    localStorage.setItem(STORAGE_KEY, code)
    setOpen(false)
  }

  return (
    <div ref={ref} className="relative">
      {/* Trigger button */}
      <motion.button
        onClick={() => setOpen(!open)}
        whileHover={{ scale: 1.03 }}
        whileTap={{ scale: 0.97 }}
        className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl border text-sm font-semibold transition-all duration-200 select-none ${
          scrolled
            ? 'border-gray-200 text-slate-700 hover:border-brand-blue/40 hover:text-brand-blue bg-white'
            : 'border-white/20 text-white hover:bg-white/10 bg-white/5 backdrop-blur-sm'
        }`}
        aria-label="Change language"
        aria-expanded={open}
      >
        <span className="text-base leading-none">{current.flag}</span>
        <span className="hidden sm:block">{current.short}</span>
        <motion.div
          animate={{ rotate: open ? 180 : 0 }}
          transition={{ duration: 0.2 }}
        >
          <ChevronDown className="w-3.5 h-3.5 opacity-70" />
        </motion.div>
      </motion.button>

      {/* Dropdown */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -8, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -8, scale: 0.95 }}
            transition={{ duration: 0.18, ease: 'easeOut' }}
            className="absolute right-0 top-full mt-2 w-40 bg-white rounded-2xl shadow-card-hover border border-gray-100 overflow-hidden z-50"
            style={{ boxShadow: '0 20px 40px rgba(13,27,75,0.15), 0 0 0 1px rgba(13,27,75,0.06)' }}
          >
            {languages.map((lang, i) => (
              <motion.button
                key={lang.code}
                onClick={() => handleChange(lang.code)}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.05 }}
                className={`w-full flex items-center gap-3 px-4 py-3 text-sm transition-all duration-150 group ${
                  lang.code === current.code
                    ? 'bg-brand-blue/8 text-brand-blue font-semibold'
                    : 'text-slate-700 hover:bg-slate-50 hover:text-navy-900'
                }`}
              >
                <span className="text-lg leading-none">{lang.flag}</span>
                <span className="flex-1 text-left font-medium">{lang.name}</span>
                {lang.code === current.code && (
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: 'spring', stiffness: 400, damping: 20 }}
                  >
                    <Check className="w-3.5 h-3.5 text-brand-blue" />
                  </motion.div>
                )}
              </motion.button>
            ))}

            {/* Bottom label */}
            <div className="px-4 py-2 border-t border-gray-50 bg-slate-50/50">
              <p className="text-[10px] text-slate-400 font-medium uppercase tracking-wider text-center">
                {current.code === 'es' ? 'Idioma del sitio' : 'Site language'}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
