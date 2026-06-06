import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Home, Building2, MonitorCheck, HardHat, Wrench, ShieldCheck, ArrowRight, Sparkles } from 'lucide-react'
import { useTranslation } from 'react-i18next'

const icons = [Home, Building2, MonitorCheck, HardHat, Wrench, ShieldCheck]
const colors = [
  { grad: 'from-brand-blue to-blue-500', shadow: 'shadow-brand-blue/20' },
  { grad: 'from-violet-500 to-purple-600', shadow: 'shadow-violet-500/20' },
  { grad: 'from-cyan-500 to-sky-600', shadow: 'shadow-cyan-500/20' },
  { grad: 'from-orange-500 to-amber-600', shadow: 'shadow-orange-500/20' },
  { grad: 'from-emerald-500 to-green-600', shadow: 'shadow-emerald-500/20' },
  { grad: 'from-teal-500 to-emerald-500', shadow: 'shadow-teal-500/20' },
]

function ServiceCard({ item, icon: Icon, color, index }) {
  const { t } = useTranslation()
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <motion.div ref={ref}
      initial={{ opacity: 0, y: 40 }} animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: (index % 3) * 0.1 }}
      className="gradient-border group relative">
      <div className="bg-white rounded-2xl p-7 h-full flex flex-col hover:shadow-card-hover hover:-translate-y-1 transition-all duration-300">
        {item.tag && (
          <span className="absolute -top-3 right-5 px-3 py-1 text-xs font-bold rounded-full shadow-lg"
            style={{ background: 'linear-gradient(135deg, #D4B558 0%, #C9A040 50%, #A8832E 100%)', color: '#06102A' }}>
            {item.tag}
          </span>
        )}

        <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${color.grad} flex items-center justify-center mb-5 shadow-lg ${color.shadow} group-hover:scale-110 transition-transform duration-300`}>
          <Icon className="w-7 h-7 text-white" strokeWidth={1.75} />
        </div>

        <h3 className="font-display font-semibold text-xl text-navy-900 mb-3 group-hover:text-brand-blue transition-colors duration-200">
          {item.title}
        </h3>
        <p className="text-slate-500 text-sm leading-relaxed mb-5 flex-1">{item.description}</p>

        <ul className="space-y-2 mb-6">
          {item.features?.map((f) => (
            <li key={f} className="flex items-center gap-2 text-sm text-slate-600">
              <div className={`w-1.5 h-1.5 rounded-full bg-gradient-to-br ${color.grad} shrink-0`} />
              {f}
            </li>
          ))}
        </ul>

        <button onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
          className="flex items-center gap-2 text-sm font-semibold text-brand-blue group/btn">
          {t('services.requestBtn')}
          <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform duration-200" />
        </button>
      </div>
    </motion.div>
  )
}

export default function Services() {
  const { t } = useTranslation()
  const ref = useRef(null)
  const inView = useInView(ref, { once: true })
  const items = t('services.items')

  return (
    <section id="services" className="py-24 bg-slate-50/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div ref={ref}
          initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }} className="text-center mb-16">
          <span className="section-tag"><Sparkles className="w-3.5 h-3.5" />{t('services.tag')}</span>
          <h2 className="section-title text-4xl md:text-5xl mb-5">
            {t('services.title')}<br />
            <span className="gradient-text">{t('services.titleHighlight')}</span>
          </h2>
          <p className="text-slate-500 text-lg max-w-2xl mx-auto leading-relaxed">{t('services.subtitle')}</p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {Array.isArray(items) && items.map((item, i) => (
            <ServiceCard key={i} item={item} icon={icons[i]} color={colors[i]} index={i} />
          ))}
        </div>

        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-12 text-center">
          <p className="text-slate-400 text-sm mb-4">{t('services.ctaNote')}</p>
          <button onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="btn-outline">
            {t('services.ctaBtn')}
            <ArrowRight className="w-4 h-4" />
          </button>
        </motion.div>
      </div>
    </section>
  )
}
