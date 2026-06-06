import { motion } from 'framer-motion'
import { ArrowRight, CheckCircle2, MapPin, Star, Shield, Clock } from 'lucide-react'
import { useTranslation, Trans } from 'react-i18next'

const badgeIcons = [Star, Shield, Clock]
const badgeColors = ['from-amber-400 to-orange-400', 'from-brand-blue to-blue-400', 'from-brand-gold to-amber-500']

export default function Hero() {
  const { t } = useTranslation()
  const scrollTo = (id) => document.querySelector(id)?.scrollIntoView({ behavior: 'smooth' })
  const badges = t('hero.badges')
  const trust = t('hero.trust')

  const statsValues = [
    { value: '500+', key: 'clients' },
    { value: '1,200+', key: 'jobs' },
    { value: '8+', key: 'years' },
    { value: '99%', key: 'satisfaction' },
  ]

  return (
    <section className="relative min-h-screen flex flex-col justify-center overflow-hidden"
      style={{ background: 'linear-gradient(135deg, #06102A 0%, #0D1B4B 45%, #152260 100%)' }}>

      {/* Background blobs */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-1/3 w-[700px] h-[700px] rounded-full opacity-20 animate-blob"
          style={{ background: 'radial-gradient(circle, #1A6FE0 0%, transparent 70%)' }} />
        <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] rounded-full opacity-15 animate-blob animation-delay-2000"
          style={{ background: 'radial-gradient(circle, #C9A040 0%, transparent 70%)' }} />
        <div className="absolute top-1/2 left-0 w-[400px] h-[400px] rounded-full opacity-10 animate-blob animation-delay-4000"
          style={{ background: 'radial-gradient(circle, #C4CDD8 0%, transparent 70%)' }} />
        <div className="absolute inset-0 opacity-[0.035]"
          style={{ backgroundImage: `linear-gradient(rgba(196,205,216,1) 1px, transparent 1px), linear-gradient(90deg, rgba(196,205,216,1) 1px, transparent 1px)`, backgroundSize: '60px 60px' }} />
        <div className="absolute top-0 right-0 w-1/2 h-full opacity-5"
          style={{ background: 'linear-gradient(225deg, #C4CDD8 0%, transparent 60%)' }} />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* Left */}
          <div>
            {/* Location badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/15 backdrop-blur-sm mb-6"
              style={{ background: 'rgba(201,160,64,0.12)' }}>
              <MapPin className="w-4 h-4" style={{ color: '#C9A040' }} />
              <span className="text-sm font-semibold" style={{ color: '#C9A040' }}>{t('hero.locationBadge')}</span>
              <span className="flex w-2 h-2 rounded-full animate-pulse" style={{ background: '#C9A040' }} />
            </motion.div>

            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="font-display font-black leading-[1.06] tracking-tight mb-6"
              style={{ fontSize: 'clamp(2.6rem, 5.5vw, 4.5rem)' }}>
              <span className="text-white">{t('hero.title.line1')}</span>
              <br />
              <span style={{ background: 'linear-gradient(135deg, #E2E8F0 0%, #C4CDD8 40%, #8E9BAD 70%, #DDE4EC 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
                {t('hero.title.line2')}
              </span>
              <br />
              <span className="text-white">{t('hero.title.preLocation')}</span>
              <span style={{ background: 'linear-gradient(135deg, #D4B558 0%, #C9A040 50%, #A8832E 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
                {t('hero.title.location')}
              </span>
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.25 }}
              className="text-slate-300 text-lg leading-relaxed mb-8 max-w-xl">
              <Trans i18nKey="hero.subtitle" components={[<strong className="text-white font-semibold" />]} />
            </motion.p>

            {/* Trust checklist */}
            <motion.div
              initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.38 }}
              className="flex flex-wrap gap-x-6 gap-y-3 mb-10">
              {Array.isArray(trust) && trust.map((item) => (
                <div key={item} className="flex items-center gap-2 text-slate-300 text-sm">
                  <CheckCircle2 className="w-4 h-4 shrink-0" style={{ color: '#C9A040' }} />
                  <span>{item}</span>
                </div>
              ))}
            </motion.div>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="flex flex-wrap gap-4">
              <button onClick={() => scrollTo('#contact')}
                className="inline-flex items-center gap-2.5 px-8 py-4 font-bold text-base rounded-xl text-navy-950 hover:-translate-y-0.5 transition-all duration-200"
                style={{ background: 'linear-gradient(135deg, #D4B558 0%, #C9A040 50%, #A8832E 100%)', boxShadow: '0 8px 24px rgba(201,160,64,0.45)' }}>
                {t('hero.ctaPrimary')}
                <ArrowRight className="w-5 h-5" />
              </button>
              <button onClick={() => scrollTo('#services')} className="btn-secondary text-base px-8 py-4">
                {t('hero.ctaSecondary')}
              </button>
            </motion.div>
          </div>

          {/* Right — Logo + floating badges */}
          <div className="hidden lg:flex justify-center items-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.85 }} animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.9, delay: 0.2 }} className="relative">
              <div className="absolute inset-0 rounded-full scale-125 opacity-20 animate-pulse-slow"
                style={{ background: 'radial-gradient(circle, #1A6FE0 0%, transparent 70%)' }} />
              <div className="absolute inset-0 rounded-full scale-150 opacity-10 animate-pulse-slow animation-delay-2000"
                style={{ background: 'radial-gradient(circle, #C9A040 0%, transparent 70%)' }} />

              <motion.div animate={{ y: [0, -10, 0] }} transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }} className="relative z-10">
                <img src="/avella-logo.jpeg" alt="Avella Cleaning Services LLC"
                  className="w-72 h-72 rounded-3xl object-cover"
                  style={{ boxShadow: '0 20px 80px rgba(26,111,224,0.4), 0 0 0 1px rgba(196,205,216,0.15)' }} />
              </motion.div>

              {Array.isArray(badges) && badges.map((b, i) => (
                <motion.div key={i}
                  initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.7 + i * 0.15 }}
                  className={`absolute ${i === 0 ? '-left-24 top-10' : i === 1 ? '-right-20 top-16' : '-left-16 bottom-8'}`}>
                  <motion.div animate={{ y: [0, -6, 0] }}
                    transition={{ duration: 3 + i * 0.7, repeat: Infinity, ease: 'easeInOut', delay: i * 0.4 }}
                    className="bg-navy-900/80 backdrop-blur-md border border-white/15 rounded-2xl px-4 py-3 flex items-center gap-3 shadow-xl min-w-max">
                    <div className={`w-9 h-9 rounded-xl bg-gradient-to-br ${badgeColors[i]} flex items-center justify-center shrink-0 shadow-lg`}>
                      {(() => { const Icon = badgeIcons[i]; return <Icon className="w-4 h-4 text-white" strokeWidth={2.5} /> })()}
                    </div>
                    <div>
                      <p className="text-white text-xs font-bold">{b.label}</p>
                      <p className="text-[10px]" style={{ color: 'rgba(255,255,255,0.45)' }}>{b.sub}</p>
                    </div>
                  </motion.div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>

        {/* Stats bar */}
        <motion.div
          initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.75 }}
          className="mt-20 grid grid-cols-2 md:grid-cols-4 rounded-2xl overflow-hidden border border-white/10"
          style={{ background: 'rgba(255,255,255,0.05)' }}>
          {statsValues.map((s, i) => (
            <div key={i} className="px-6 py-5 text-center border-r border-white/10 last:border-0 hover:bg-white/8 transition-colors duration-200">
              <p className="font-display font-black text-3xl text-white mb-1" style={{ textShadow: '0 0 20px rgba(201,160,64,0.4)' }}>
                {s.value}
              </p>
              <p className="text-slate-400 text-sm">{t(`hero.stats.${s.key}`)}</p>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.6 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
        <span className="text-[10px] uppercase tracking-[0.2em]" style={{ color: 'rgba(255,255,255,0.25)' }}>
          {t('hero.scrollHint')}
        </span>
        <motion.div animate={{ y: [0, 6, 0] }} transition={{ duration: 1.5, repeat: Infinity }}
          className="w-5 h-8 border border-white/20 rounded-full flex justify-center pt-1.5">
          <div className="w-1 h-1.5 rounded-full" style={{ background: 'rgba(201,160,64,0.6)' }} />
        </motion.div>
      </motion.div>
    </section>
  )
}
