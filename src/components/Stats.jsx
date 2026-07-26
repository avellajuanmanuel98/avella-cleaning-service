import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { BadgeCheck, DollarSign, Star, Leaf } from 'lucide-react'
import { useTranslation } from 'react-i18next'

const statIcons = [BadgeCheck, DollarSign, Star, Leaf]

export default function Stats() {
  const { t } = useTranslation()
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })
  const items = t('stats.items')

  return (
    <section className="relative py-24 overflow-hidden"
      style={{ background: 'linear-gradient(135deg, #06102A 0%, #0D1B4B 50%, #152260 100%)' }}>
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-px" style={{ background: 'linear-gradient(90deg, transparent, rgba(201,160,64,0.4), transparent)' }} />
        <div className="absolute bottom-0 left-0 w-full h-px" style={{ background: 'linear-gradient(90deg, transparent, rgba(201,160,64,0.4), transparent)' }} />
        <div className="absolute top-1/2 left-1/4 w-96 h-96 rounded-full opacity-10 blur-[100px]" style={{ background: '#1A6FE0' }} />
        <div className="absolute top-1/2 right-1/4 w-80 h-80 rounded-full opacity-8 blur-[100px]" style={{ background: '#C9A040' }} />
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: `radial-gradient(circle, rgba(196,205,216,0.8) 1px, transparent 1px)`, backgroundSize: '40px 40px' }} />
      </div>

      <div ref={ref} className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }} className="text-center mb-16">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 border rounded-full text-xs font-bold uppercase tracking-widest mb-5"
            style={{ background: 'rgba(201,160,64,0.12)', borderColor: 'rgba(201,160,64,0.25)', color: '#D4B558' }}>
            {t('stats.tag')}
          </span>
          <h2 className="font-display font-black text-4xl md:text-5xl text-white mb-4">
            {t('stats.title')}<br />
            <span style={{ background: 'linear-gradient(135deg, #D4B558 0%, #C9A040 50%, #A8832E 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
              {t('stats.titleHighlight')}
            </span>
          </h2>
          <p className="text-slate-400 text-lg max-w-xl mx-auto">{t('stats.subtitle')}</p>
        </motion.div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {Array.isArray(items) && items.map((item, i) => (
            <motion.div key={i}
              initial={{ opacity: 0, y: 40, scale: 0.95 }} animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group relative rounded-2xl p-7 text-center overflow-hidden border hover:border-white/20 transition-all duration-300"
              style={{ background: 'rgba(255,255,255,0.05)', borderColor: 'rgba(255,255,255,0.1)' }}>
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl"
                style={{ background: 'linear-gradient(135deg, rgba(26,111,224,0.1) 0%, rgba(201,160,64,0.05) 100%)' }} />
              <div className="relative">
                <div className="w-12 h-12 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300"
                  style={{ background: 'rgba(201,160,64,0.12)' }}>
                  {(() => { const Icon = statIcons[i]; return <Icon className="w-6 h-6" style={{ color: '#C9A040' }} strokeWidth={1.75} /> })()}
                </div>
                <p className="font-display font-black text-4xl md:text-5xl text-white mb-2" style={{ textShadow: '0 0 20px rgba(201,160,64,0.3)' }}>
                  {item.displayValue}
                </p>
                <p className="font-semibold text-sm mb-1" style={{ color: '#D4B558' }}>{item.label}</p>
                <p className="text-slate-500 text-xs">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
