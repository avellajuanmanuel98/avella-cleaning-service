import { useState } from 'react'
import { motion } from 'framer-motion'
import { Phone, Mail, MapPin, Clock, Send, CheckCircle2, MessageCircle } from 'lucide-react'
import { useTranslation } from 'react-i18next'

const contactIcons = [Phone, Mail, MapPin, Clock]
const contactColors = [
  { text: 'text-brand-blue', bg: 'bg-blue-50' },
  { text: 'text-violet-500', bg: 'bg-violet-50' },
  { text: 'text-rose-500', bg: 'bg-rose-50' },
  { text: 'text-brand-gold', bg: 'bg-amber-50' },
]

export default function Contact() {
  const { t } = useTranslation()
  const [form, setForm] = useState({ name: '', email: '', phone: '', service: '', area: '', message: '' })
  const [sent, setSent] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value })
  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    await new Promise(r => setTimeout(r, 1500))
    setLoading(false)
    setSent(true)
  }

  const infoKeys = ['phone', 'email', 'location', 'hours']

  return (
    <section id="contact" className="py-24 bg-slate-50/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-center mb-16">
          <span className="section-tag"><MessageCircle className="w-3.5 h-3.5" />{t('contact.tag')}</span>
          <h2 className="section-title text-4xl md:text-5xl mb-5">
            {t('contact.title')}<br />
            <span className="gradient-text">{t('contact.titleHighlight')}</span>
          </h2>
          <p className="text-slate-500 text-lg max-w-2xl mx-auto">{t('contact.subtitle')}</p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-10">
          {/* Info column */}
          <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.6 }} className="lg:col-span-2 space-y-4">

            {infoKeys.map((key, i) => {
              const info = t(`contact.info.${key}`)
              const Icon = contactIcons[i]
              const c = contactColors[i]
              return (
                <div key={key} className="group flex items-center gap-4 p-5 bg-white rounded-2xl border border-gray-100 hover:border-brand-blue/30 hover:shadow-card transition-all duration-300">
                  <div className={`w-12 h-12 ${c.bg} rounded-xl flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className={`w-5 h-5 ${c.text}`} strokeWidth={1.75} />
                  </div>
                  <div>
                    <p className="text-xs text-slate-400 font-medium uppercase tracking-wider mb-0.5">{info.label}</p>
                    <p className="font-semibold text-navy-900 text-sm">{info.value}</p>
                  </div>
                </div>
              )
            })}

            {/* WhatsApp */}
            <a href="https://wa.me/18015551234" target="_blank" rel="noopener noreferrer"
              className="flex items-center gap-4 p-5 rounded-2xl text-white hover:-translate-y-0.5 transition-all duration-300"
              style={{ background: 'linear-gradient(135deg, #22c55e, #16a34a)', boxShadow: '0 8px 24px rgba(34,197,94,0.3)' }}>
              <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center shrink-0">
                <MessageCircle className="w-6 h-6" strokeWidth={1.75} />
              </div>
              <div>
                <p className="text-xs text-white/70 font-medium uppercase tracking-wider mb-0.5">{t('contact.info.whatsappLabel')}</p>
                <p className="font-bold text-sm">{t('contact.info.whatsappValue')}</p>
              </div>
            </a>

            {/* Service area */}
            <div className="p-5 bg-white rounded-2xl border border-gray-100">
              <div className="flex items-center gap-2 mb-3">
                <MapPin className="w-4 h-4" style={{ color: '#C9A040' }} />
                <p className="font-semibold text-navy-900 text-sm">{t('contact.info.serviceAreaTitle')}</p>
              </div>
              <p className="text-xs text-slate-500 leading-relaxed">{t('contact.info.serviceAreaDesc')}</p>
            </div>
          </motion.div>

          {/* Form */}
          <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.6 }} className="lg:col-span-3">

            {sent ? (
              <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }}
                className="h-full flex flex-col items-center justify-center text-center py-16 bg-white rounded-3xl border border-gray-100 shadow-card">
                <div className="w-20 h-20 rounded-2xl flex items-center justify-center mb-6" style={{ background: 'rgba(201,160,64,0.1)' }}>
                  <CheckCircle2 className="w-10 h-10" style={{ color: '#C9A040' }} />
                </div>
                <h3 className="font-display font-bold text-2xl text-navy-900 mb-3">{t('contact.success.title')}</h3>
                <p className="text-slate-500 max-w-xs leading-relaxed">{t('contact.success.message')}</p>
                <button onClick={() => setSent(false)}
                  className="mt-6 px-6 py-2.5 font-semibold text-sm border rounded-xl hover:bg-brand-blue/5 transition-colors duration-200"
                  style={{ color: '#1A6FE0', borderColor: 'rgba(26,111,224,0.3)' }}>
                  {t('contact.success.resetBtn')}
                </button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="bg-white rounded-3xl p-8 border border-gray-100 shadow-card space-y-5">
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-2">{t('contact.form.nameLabel')} *</label>
                    <input type="text" name="name" required value={form.name} onChange={handleChange}
                      placeholder={t('contact.form.namePlaceholder')}
                      className="w-full px-4 py-3 bg-slate-50 border border-gray-200 rounded-xl text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:border-brand-blue transition-all duration-200" />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-2">{t('contact.form.phoneLabel')} *</label>
                    <input type="tel" name="phone" required value={form.phone} onChange={handleChange}
                      placeholder={t('contact.form.phonePlaceholder')}
                      className="w-full px-4 py-3 bg-slate-50 border border-gray-200 rounded-xl text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:border-brand-blue transition-all duration-200" />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2">{t('contact.form.emailLabel')} *</label>
                  <input type="email" name="email" required value={form.email} onChange={handleChange}
                    placeholder={t('contact.form.emailPlaceholder')}
                    className="w-full px-4 py-3 bg-slate-50 border border-gray-200 rounded-xl text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:border-brand-blue transition-all duration-200" />
                </div>

                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-2">{t('contact.form.serviceLabel')} *</label>
                    <select name="service" required value={form.service} onChange={handleChange}
                      className="w-full px-4 py-3 bg-slate-50 border border-gray-200 rounded-xl text-sm text-slate-800 focus:outline-none focus:ring-2 focus:border-brand-blue transition-all duration-200">
                      <option value="">{t('contact.form.servicePlaceholder')}</option>
                      {t('contact.services').map(s => <option key={s} value={s}>{s}</option>)}
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-2">{t('contact.form.areaLabel')} *</label>
                    <select name="area" required value={form.area} onChange={handleChange}
                      className="w-full px-4 py-3 bg-slate-50 border border-gray-200 rounded-xl text-sm text-slate-800 focus:outline-none focus:ring-2 focus:border-brand-blue transition-all duration-200">
                      <option value="">{t('contact.form.areaPlaceholder')}</option>
                      {t('contact.areas').map(a => <option key={a} value={a}>{a}</option>)}
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2">{t('contact.form.messageLabel')}</label>
                  <textarea name="message" rows={4} value={form.message} onChange={handleChange}
                    placeholder={t('contact.form.messagePlaceholder')}
                    className="w-full px-4 py-3 bg-slate-50 border border-gray-200 rounded-xl text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:border-brand-blue transition-all duration-200 resize-none" />
                </div>

                <button type="submit" disabled={loading}
                  className="w-full py-4 font-black text-base rounded-xl flex items-center justify-center gap-3 transition-all duration-200 hover:-translate-y-0.5 disabled:opacity-70 disabled:cursor-not-allowed disabled:translate-y-0"
                  style={{ background: 'linear-gradient(135deg, #D4B558 0%, #C9A040 50%, #A8832E 100%)', color: '#06102A', boxShadow: '0 8px 24px rgba(201,160,64,0.35)' }}>
                  {loading
                    ? <><div className="w-5 h-5 border-2 border-navy-900/30 border-t-navy-900 rounded-full animate-spin" />{t('contact.form.submitting')}</>
                    : <><Send className="w-5 h-5" />{t('contact.form.submitBtn')}</>
                  }
                </button>

                <p className="text-center text-xs text-slate-400">{t('contact.form.privacyNote')}</p>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
