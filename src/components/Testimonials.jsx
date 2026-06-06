import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Star, ChevronLeft, ChevronRight, Quote, MapPin } from 'lucide-react'
import { useTranslation } from 'react-i18next'

const avatarColors = [
  'from-pink-400 to-rose-500',
  'from-brand-blue to-blue-400',
  'from-violet-400 to-purple-500',
  'from-emerald-400 to-teal-500',
  'from-brand-gold to-amber-500',
]

function Stars() {
  return (
    <div className="flex gap-0.5">
      {[1,2,3,4,5].map(i => <Star key={i} className="w-4 h-4 text-amber-400 fill-amber-400" />)}
    </div>
  )
}

export default function Testimonials() {
  const { t } = useTranslation()
  const [current, setCurrent] = useState(0)
  const [direction, setDirection] = useState(1)
  const items = t('testimonials.items')

  if (!Array.isArray(items) || items.length === 0) return null

  const next = () => { setDirection(1); setCurrent((c) => (c + 1) % items.length) }
  const prev = () => { setDirection(-1); setCurrent((c) => (c - 1 + items.length) % items.length) }

  useEffect(() => {
    const interval = setInterval(next, 5500)
    return () => clearInterval(interval)
  }, [items.length])

  const visible = [0, 1, 2].map(offset => ({
    item: items[(current + offset) % items.length],
    colorIdx: (current + offset) % avatarColors.length,
  }))

  const getInitials = (name) => name.split(' ').map(n => n[0]).join('').slice(0, 2).toUpperCase()

  return (
    <section id="testimonials" className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-center mb-16">
          <span className="section-tag"><Star className="w-3.5 h-3.5 fill-current" />{t('testimonials.tag')}</span>
          <h2 className="section-title text-4xl md:text-5xl mb-5">
            {t('testimonials.title')}<br />
            <span className="gradient-text">{t('testimonials.titleHighlight')}</span>
          </h2>
          <p className="text-slate-500 text-lg max-w-2xl mx-auto">{t('testimonials.subtitle')}</p>

          <div className="inline-flex items-center gap-3 mt-6 bg-amber-50 border border-amber-100 rounded-2xl px-5 py-3">
            <div className="flex gap-0.5">{[1,2,3,4,5].map(i => <Star key={i} className="w-5 h-5 text-amber-400 fill-amber-400" />)}</div>
            <span className="font-display font-black text-navy-900">{t('testimonials.aggregateRating')}</span>
            <span className="text-slate-500 text-sm">{t('testimonials.aggregateFrom')}</span>
          </div>
        </motion.div>

        <div className="relative">
          {/* Desktop: 3 cards */}
          <div className="hidden md:grid grid-cols-3 gap-6">
            <AnimatePresence mode="popLayout" custom={direction}>
              {visible.map(({ item, colorIdx }, i) => (
                <motion.div key={item.name + current}
                  custom={direction}
                  initial={{ opacity: 0, x: direction * 60 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -direction * 60 }}
                  transition={{ duration: 0.4, delay: i * 0.05 }}
                  className={`relative bg-white rounded-2xl p-7 shadow-card border border-gray-100 hover:shadow-card-hover transition-all duration-300 ${i === 1 ? 'ring-2 ring-brand-blue/20 scale-[1.03]' : ''}`}>
                  <Quote className="w-8 h-8 mb-4 opacity-20" style={{ color: '#C9A040' }} />
                  <Stars />
                  <p className="text-slate-600 text-sm leading-relaxed mt-4 mb-6 text-balance">"{item.text}"</p>
                  <div className="flex items-center gap-3">
                    <div className={`w-11 h-11 rounded-xl bg-gradient-to-br ${avatarColors[colorIdx]} flex items-center justify-center text-white font-bold text-sm shadow-lg`}>
                      {getInitials(item.name)}
                    </div>
                    <div>
                      <p className="font-semibold text-navy-900 text-sm">{item.name}</p>
                      <div className="flex items-center gap-1 text-slate-400 text-xs mt-0.5">
                        <MapPin className="w-3 h-3" />
                        <span>{item.role} · {item.company}</span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>

          {/* Mobile */}
          <div className="md:hidden">
            <AnimatePresence mode="wait" custom={direction}>
              <motion.div key={current}
                custom={direction}
                initial={{ opacity: 0, x: direction * 80 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -direction * 80 }}
                transition={{ duration: 0.35 }}
                className="bg-white rounded-2xl p-7 shadow-card border border-gray-100">
                <Quote className="w-8 h-8 mb-4 opacity-20" style={{ color: '#C9A040' }} />
                <Stars />
                <p className="text-slate-600 text-sm leading-relaxed mt-4 mb-6">"{items[current].text}"</p>
                <div className="flex items-center gap-3">
                  <div className={`w-11 h-11 rounded-xl bg-gradient-to-br ${avatarColors[current % avatarColors.length]} flex items-center justify-center text-white font-bold text-sm`}>
                    {getInitials(items[current].name)}
                  </div>
                  <div>
                    <p className="font-semibold text-navy-900 text-sm">{items[current].name}</p>
                    <div className="flex items-center gap-1 text-slate-400 text-xs">
                      <MapPin className="w-3 h-3" />
                      <span>{items[current].role} · {items[current].company}</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <button onClick={prev} className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center text-slate-400 hover:border-brand-blue hover:text-brand-blue hover:bg-brand-blue/5 transition-all duration-200">
              <ChevronLeft className="w-5 h-5" />
            </button>
            <div className="flex gap-2">
              {items.map((_, i) => (
                <button key={i} onClick={() => { setDirection(i > current ? 1 : -1); setCurrent(i) }}
                  className="rounded-full transition-all duration-300"
                  style={i === current ? { width: 24, height: 8, background: '#C9A040' } : { width: 8, height: 8, background: '#E2E8F0' }} />
              ))}
            </div>
            <button onClick={next} className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center text-slate-400 hover:border-brand-blue hover:text-brand-blue hover:bg-brand-blue/5 transition-all duration-200">
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
