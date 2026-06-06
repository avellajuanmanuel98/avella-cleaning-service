import { motion } from 'framer-motion'
import { ArrowRight, MessageCircle, Phone, MapPin } from 'lucide-react'
import { useTranslation } from 'react-i18next'

export default function CTA() {
  const { t } = useTranslation()
  const trust = t('cta.trust')

  return (
    <section className="relative py-28 overflow-hidden"
      style={{ background: 'linear-gradient(135deg, #06102A 0%, #0D1B4B 40%, #152260 100%)' }}>
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] opacity-15 rounded-full blur-[120px]" style={{ background: '#1A6FE0' }} />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] opacity-10 rounded-full blur-[100px]" style={{ background: '#C9A040' }} />
        <div className="absolute top-0 left-0 w-full h-px" style={{ background: 'linear-gradient(90deg, transparent, rgba(201,160,64,0.5), transparent)' }} />
        <div className="absolute bottom-0 left-0 w-full h-px" style={{ background: 'linear-gradient(90deg, transparent, rgba(201,160,64,0.5), transparent)' }} />
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: `linear-gradient(rgba(196,205,216,1) 1px, transparent 1px), linear-gradient(90deg, rgba(196,205,216,1) 1px, transparent 1px)`, backgroundSize: '50px 50px' }} />
      </div>

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.7 }}>

          <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full border mb-8"
            style={{ background: 'rgba(201,160,64,0.1)', borderColor: 'rgba(201,160,64,0.25)' }}>
            <span className="w-2 h-2 rounded-full animate-pulse" style={{ background: '#C9A040' }} />
            <MapPin className="w-3.5 h-3.5" style={{ color: '#C9A040' }} />
            <span className="text-sm font-semibold" style={{ color: '#D4B558' }}>{t('cta.badge')}</span>
          </div>

          <h2 className="font-display font-black leading-tight mb-6"
            style={{ fontSize: 'clamp(2.4rem, 5vw, 4.2rem)' }}>
            <span className="text-white">{t('cta.title')}</span>
            <br />
            <span style={{ background: 'linear-gradient(135deg, #D4B558 0%, #C9A040 50%, #A8832E 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
              {t('cta.titleHighlight')}
            </span>
          </h2>

          <p className="text-xl leading-relaxed max-w-2xl mx-auto mb-10" style={{ color: 'rgba(196,205,216,0.8)' }}>
            {t('cta.subtitle')}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-10">
            <motion.button whileHover={{ scale: 1.03, y: -2 }} whileTap={{ scale: 0.98 }}
              onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="px-10 py-4 font-black text-base rounded-2xl flex items-center gap-3 shadow-2xl"
              style={{ background: 'linear-gradient(135deg, #D4B558 0%, #C9A040 50%, #A8832E 100%)', color: '#06102A', boxShadow: '0 8px 32px rgba(201,160,64,0.45)' }}>
              {t('cta.primaryBtn')}
              <ArrowRight className="w-5 h-5" />
            </motion.button>

            <motion.a whileHover={{ scale: 1.03, y: -2 }} whileTap={{ scale: 0.98 }}
              href="https://wa.me/18015551234?text=Hola%2C%20me%20interesa%20una%20cotización%20de%20limpieza%20en%20Utah."
              target="_blank" rel="noopener noreferrer"
              className="px-10 py-4 font-bold text-base rounded-2xl border backdrop-blur-sm flex items-center gap-3 transition-all duration-200 hover:bg-white/20"
              style={{ background: 'rgba(255,255,255,0.08)', color: 'white', borderColor: 'rgba(255,255,255,0.2)' }}>
              <MessageCircle className="w-5 h-5 text-green-400" />
              {t('cta.secondaryBtn')}
            </motion.a>
          </div>

          <div className="flex flex-wrap justify-center gap-x-8 gap-y-2" style={{ color: 'rgba(196,205,216,0.55)' }}>
            {Array.isArray(trust) && trust.map(text => <span key={text} className="text-sm">{text}</span>)}
          </div>

          <motion.a initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} href="tel:+18015551234"
            className="inline-flex items-center gap-2 mt-8 text-sm font-medium transition-colors duration-200"
            style={{ color: 'rgba(196,205,216,0.6)' }}>
            <Phone className="w-4 h-4" style={{ color: '#C9A040' }} />
            {t('cta.phoneLabel')} <strong className="ml-1" style={{ color: '#D4B558' }}>{t('nav.phone')}</strong>
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
}
