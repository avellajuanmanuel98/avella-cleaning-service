import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Phone, MapPin } from 'lucide-react'
import { useTranslation } from 'react-i18next'
import LanguageSwitcher from './LanguageSwitcher'

export default function Navbar() {
  const { t } = useTranslation()
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  const links = [
    { label: t('nav.services'),  href: '#services' },
    { label: t('nav.whyUs'),    href: '#why-us' },
    { label: t('nav.process'),  href: '#process' },
    { label: t('nav.gallery'),  href: '#gallery' },
    { label: t('nav.contact'),  href: '#contact' },
  ]

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const handleLink = (href) => {
    setOpen(false)
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <>
      <motion.header
        initial={{ y: -80 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-white/95 backdrop-blur-xl shadow-lg shadow-navy-900/8 border-b border-gray-100'
            : 'bg-transparent'
        }`}
      >
        {/* Top info strip */}
        <AnimatePresence>
          {!scrolled && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="overflow-hidden"
              style={{ background: 'rgba(6,16,42,0.8)', borderBottom: '1px solid rgba(255,255,255,0.05)' }}
            >
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-1.5 flex items-center justify-between text-xs" style={{ color: 'rgba(255,255,255,0.5)' }}>
                <div className="flex items-center gap-1.5">
                  <MapPin className="w-3 h-3" style={{ color: '#C9A040' }} />
                  <span>{t('nav.topStrip')}</span>
                </div>
                <a href={`tel:+1${t('nav.phone').replace(/\D/g,'')}`}
                  className="flex items-center gap-1.5 transition-colors hover:text-white/80">
                  <Phone className="w-3 h-3" />
                  <span>{t('nav.phone')}</span>
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 md:h-20">

            {/* Logo */}
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="flex items-center gap-3 group"
              aria-label="Avella Cleaning Services LLC"
            >
              <div className={`relative overflow-hidden rounded-xl transition-all duration-300 group-hover:scale-105 ${scrolled ? 'shadow-logo' : 'shadow-glow-blue'}`}>
                <img src="/avella-logo.jpeg" alt="Avella Cleaning Services LLC"
                  className="w-10 h-10 md:w-12 md:h-12 object-cover rounded-xl" />
              </div>
              <div className="hidden sm:block leading-none">
                <p className={`font-display font-black text-base tracking-tight transition-colors duration-300 ${scrolled ? 'text-navy-900' : 'text-white'}`}>
                  AVELLA
                </p>
                <p className="text-[10px] font-bold uppercase tracking-[0.15em]" style={{ color: '#C9A040' }}>
                  Cleaning Services LLC
                </p>
              </div>
            </button>

            {/* Desktop nav */}
            <nav className="hidden md:flex items-center gap-0.5">
              {links.map((link) => (
                <button key={link.href} onClick={() => handleLink(link.href)}
                  className={`px-3.5 py-2 rounded-lg text-sm font-medium transition-all duration-200 hover:text-brand-blue ${
                    scrolled ? 'text-slate-600 hover:bg-brand-blue/8' : 'text-white/80 hover:text-white hover:bg-white/10'
                  }`}>
                  {link.label}
                </button>
              ))}
            </nav>

            {/* Right controls */}
            <div className="hidden md:flex items-center gap-3">
              <LanguageSwitcher scrolled={scrolled} />
              <a href={`tel:+1${t('nav.phone').replace(/\D/g,'')}`}
                className={`flex items-center gap-1.5 text-sm font-medium transition-colors duration-200 ${
                  scrolled ? 'text-slate-600 hover:text-brand-blue' : 'text-white/70 hover:text-white'
                }`}>
                <Phone className="w-4 h-4" />
                <span className="hidden lg:block">{t('nav.phone')}</span>
              </a>
              <button onClick={() => handleLink('#contact')}
                className="px-5 py-2.5 font-bold text-sm rounded-xl text-navy-950 hover:-translate-y-0.5 transition-all duration-200 shadow-lg"
                style={{ background: 'linear-gradient(135deg, #D4B558 0%, #C9A040 50%, #A8832E 100%)', boxShadow: '0 4px 16px rgba(201,160,64,0.35)' }}>
                {t('nav.getQuote')}
              </button>
            </div>

            {/* Mobile: lang + hamburger */}
            <div className="md:hidden flex items-center gap-2">
              <LanguageSwitcher scrolled={scrolled} />
              <button onClick={() => setOpen(!open)}
                className={`p-2 rounded-lg transition-colors duration-200 ${scrolled ? 'text-navy-900 hover:bg-gray-100' : 'text-white hover:bg-white/10'}`}
                aria-label="Toggle menu">
                {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>
      </motion.header>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className={`fixed left-0 right-0 z-40 bg-white border-b border-gray-100 shadow-xl md:hidden ${scrolled ? 'top-16' : 'top-[95px]'}`}
          >
            <nav className="max-w-7xl mx-auto px-4 py-4 flex flex-col gap-1">
              {links.map((link) => (
                <button key={link.href} onClick={() => handleLink(link.href)}
                  className="text-left px-4 py-3 rounded-xl text-sm font-medium text-slate-700 hover:bg-brand-blue/8 hover:text-brand-blue transition-all duration-150">
                  {link.label}
                </button>
              ))}
              <div className="mt-3 pt-3 border-t border-gray-100 flex flex-col gap-2">
                <a href={`tel:+1${t('nav.phone').replace(/\D/g,'')}`}
                  className="flex items-center gap-2 px-4 py-3 text-sm text-slate-600">
                  <Phone className="w-4 h-4 text-brand-blue" />
                  {t('nav.phone')}
                </a>
                <button onClick={() => handleLink('#contact')}
                  className="mx-4 py-3 text-navy-950 text-sm font-bold rounded-xl text-center"
                  style={{ background: 'linear-gradient(135deg, #D4B558 0%, #C9A040 50%, #A8832E 100%)' }}>
                  {t('nav.getQuote')}
                </button>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
