import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { GraduationCap, Zap, Leaf, MapPin, BadgeCheck, DollarSign, Award, TrendingUp } from 'lucide-react'
import { useTranslation, Trans } from 'react-i18next'

const advIcons = [GraduationCap, Zap, Leaf, MapPin, BadgeCheck, DollarSign]
const advColors = [
  { text: 'text-brand-blue', bg: 'bg-blue-50' },
  { text: 'text-amber-500', bg: 'bg-amber-50' },
  { text: 'text-emerald-500', bg: 'bg-emerald-50' },
  { text: 'text-rose-500', bg: 'bg-rose-50' },
  { text: 'text-violet-500', bg: 'bg-violet-50' },
  { text: 'text-cyan-500', bg: 'bg-cyan-50' },
]

export default function WhyChooseUs() {
  const { t } = useTranslation()
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })
  const advantages = t('whyUs.advantages')

  return (
    <section id="why-us" className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Left */}
          <motion.div ref={ref} initial={{ opacity: 0, x: -40 }} animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7 }}>
            <span className="section-tag"><BadgeCheck className="w-3.5 h-3.5" />{t('whyUs.tag')}</span>
            <h2 className="section-title text-4xl md:text-5xl mb-6">
              {t('whyUs.title')}<br />
              <span className="gradient-text">{t('whyUs.titleHighlight')}</span>
            </h2>
            <p className="text-slate-500 text-lg leading-relaxed mb-8">{t('whyUs.subtitle')}</p>

            {/* Utah note */}
            <div className="flex items-center gap-3 p-4 rounded-2xl border mb-8"
              style={{ background: 'rgba(13,27,75,0.04)', borderColor: 'rgba(13,27,75,0.08)' }}>
              <div className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0"
                style={{ background: 'rgba(26,111,224,0.1)' }}>
                <MapPin className="w-5 h-5 text-brand-blue" />
              </div>
              <p className="text-sm text-slate-600">
                <Trans i18nKey="whyUs.utahNote"
                  components={[<strong className="text-navy-900" />]} />
              </p>
            </div>

            <button onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="btn-primary">
              {t('whyUs.ctaBtn')}
              <Award className="w-4 h-4" />
            </button>
          </motion.div>

          {/* Right grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {Array.isArray(advantages) && advantages.map((adv, i) => (
              <motion.div key={i}
                initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                whileHover={{ y: -4 }}
                className="group p-5 rounded-2xl border border-gray-100 hover:border-transparent hover:shadow-card-hover bg-white transition-all duration-300 cursor-default">
                <div className={`w-11 h-11 ${advColors[i].bg} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  {(() => { const Icon = advIcons[i]; return <Icon className={`w-5 h-5 ${advColors[i].text}`} strokeWidth={2} /> })()}
                </div>
                <h3 className="font-display font-semibold text-base text-navy-900 mb-2">{adv.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">{adv.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
