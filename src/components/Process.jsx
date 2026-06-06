import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { MessageSquare, Search, Hammer, CheckCircle, ArrowRight } from 'lucide-react'
import { useTranslation } from 'react-i18next'

const stepIcons = [MessageSquare, Search, Hammer, CheckCircle]
const stepColors = [
  'from-brand-blue to-blue-500',
  'from-violet-500 to-purple-500',
  'from-brand-gold to-amber-500',
  'from-emerald-500 to-green-500',
]

export default function Process() {
  const { t } = useTranslation()
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })
  const steps = t('process.steps')

  return (
    <section id="process" className="py-24 bg-slate-50/60 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div ref={ref} initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }} className="text-center mb-16">
          <span className="section-tag"><ArrowRight className="w-3.5 h-3.5" />{t('process.tag')}</span>
          <h2 className="section-title text-4xl md:text-5xl mb-5">
            {t('process.title')}<br />
            <span className="gradient-text">{t('process.titleHighlight')}</span>
          </h2>
          <p className="text-slate-500 text-lg max-w-2xl mx-auto">{t('process.subtitle')}</p>
        </motion.div>

        {/* Desktop */}
        <div className="hidden md:grid grid-cols-4 gap-0 relative mb-12">
          <div className="absolute top-10 left-[12.5%] right-[12.5%] h-0.5 z-0"
            style={{ background: 'linear-gradient(90deg, #1A6FE0, #8B5CF6, #C9A040, #10B981)' }}>
            <motion.div initial={{ scaleX: 0 }} whileInView={{ scaleX: 1 }} viewport={{ once: true }}
              transition={{ duration: 1.2, ease: 'easeInOut', delay: 0.3 }}
              className="absolute inset-0 origin-left"
              style={{ background: 'linear-gradient(90deg, #1A6FE0, #8B5CF6, #C9A040, #10B981)' }} />
          </div>

          {Array.isArray(steps) && steps.map((step, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.15 }}
              className="relative z-10 flex flex-col items-center px-4">
              <div className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${stepColors[i]} flex items-center justify-center shadow-xl mb-6 hover:scale-110 transition-transform duration-300`}>
                {(() => { const Icon = stepIcons[i]; return <Icon className="w-9 h-9 text-white" strokeWidth={1.75} /> })()}
              </div>
              <span className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-2">{step.number}</span>
              <h3 className="font-display font-bold text-lg text-navy-900 mb-3 text-center">{step.title}</h3>
              <p className="text-slate-500 text-sm leading-relaxed text-center mb-3">{step.description}</p>
              <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold"
                style={{ background: 'rgba(201,160,64,0.1)', color: '#A8832E' }}>
                {step.detail}
              </span>
            </motion.div>
          ))}
        </div>

        {/* Mobile */}
        <div className="md:hidden space-y-4">
          {Array.isArray(steps) && steps.map((step, i) => (
            <motion.div key={i} initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }} transition={{ duration: 0.4, delay: i * 0.1 }}
              className="flex gap-5 bg-white rounded-2xl p-5 shadow-card border border-gray-100">
              <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${stepColors[i]} flex items-center justify-center shadow-lg shrink-0`}>
                {(() => { const Icon = stepIcons[i]; return <Icon className="w-7 h-7 text-white" strokeWidth={1.75} /> })()}
              </div>
              <div>
                <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">{step.number}</span>
                <h3 className="font-display font-bold text-base text-navy-900 mb-1">{step.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">{step.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.5 }} className="mt-12 text-center">
          <button onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="btn-primary">
            {t('process.ctaBtn')}
            <ArrowRight className="w-4 h-4" />
          </button>
        </motion.div>
      </div>
    </section>
  )
}
