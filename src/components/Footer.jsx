import { motion } from 'framer-motion'
import { Phone, Mail, MapPin, Clock, Facebook, Instagram, ArrowRight, Heart, Shield } from 'lucide-react'
import { useTranslation } from 'react-i18next'

function TikTokIcon({ className }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V8.69a8.18 8.18 0 004.78 1.52V6.75a4.85 4.85 0 01-1.01-.06z"/>
    </svg>
  )
}

const socials = [
  { icon: Facebook, href: '#', label: 'Facebook', hoverBg: '#1877F2' },
  { icon: Instagram, href: '#', label: 'Instagram', hoverBg: '#E1306C' },
  { custom: TikTokIcon, href: '#', label: 'TikTok', hoverBg: '#000000' },
]

const contactIcons = [Phone, Mail, MapPin, Clock]
const contactHrefs = ['tel:+13852296607', 'mailto:info@avellacleaningservices.com', '#', '#']
const contactKeys = ['phone', 'email', 'location', 'hours']

export default function Footer() {
  const { t } = useTranslation()
  const scrollTo = (href) => document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })
  const quickLinks = t('footer.quickLinks')
  const areas = t('footer.areas')

  return (
    <footer style={{ background: 'linear-gradient(180deg, #0D1B4B 0%, #06102A 100%)' }}>
      <div className="h-0.5 w-full"
        style={{ background: 'linear-gradient(90deg, transparent, #C9A040, #D4B558, #C9A040, transparent)' }} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-14">

          {/* Brand */}
          <div className="lg:col-span-1">
            <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="flex items-center gap-3 mb-5 group">
              <div className="w-12 h-12 rounded-xl overflow-hidden shadow-logo group-hover:scale-105 transition-transform duration-200">
                <img src="/avella-logo.jpeg" alt="Avella Cleaning Services LLC" className="w-full h-full object-cover" />
              </div>
              <div className="leading-none">
                <p className="font-display font-black text-base text-white tracking-tight">AVELLA</p>
                <p className="text-[10px] font-bold uppercase tracking-[0.15em]" style={{ color: '#C9A040' }}>Cleaning Services LLC</p>
              </div>
            </button>

            <p className="text-slate-400 text-sm leading-relaxed mb-5">{t('footer.tagline')}</p>

            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border mb-6 text-xs font-semibold"
              style={{ borderColor: 'rgba(201,160,64,0.3)', background: 'rgba(201,160,64,0.08)', color: '#D4B558' }}>
              <MapPin className="w-3 h-3" />
              {t('footer.utahBadge')}
            </div>

            <div className="flex gap-2">
              {socials.map((s) => (
                <a key={s.label} href={s.href} aria-label={s.label}
                  className="w-9 h-9 rounded-lg flex items-center justify-center text-slate-400 hover:text-white transition-all duration-200"
                  style={{ background: 'rgba(255,255,255,0.07)', border: '1px solid rgba(255,255,255,0.1)' }}
                  onMouseEnter={e => e.currentTarget.style.background = s.hoverBg}
                  onMouseLeave={e => e.currentTarget.style.background = 'rgba(255,255,255,0.07)'}>
                  {s.custom ? <s.custom className="w-4 h-4" /> : <s.icon className="w-4 h-4" />}
                </a>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="font-display font-bold text-white text-sm mb-5 uppercase tracking-wider">{t('footer.nav')}</h4>
            <ul className="space-y-3">
              {Array.isArray(quickLinks) && quickLinks.map((link) => (
                <li key={link.label}>
                  <button onClick={() => scrollTo(link.href)}
                    className="flex items-center gap-2 text-slate-400 text-sm hover:text-white transition-colors duration-200 group">
                    <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all duration-200"
                      style={{ color: '#C9A040' }} />
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-display font-bold text-white text-sm mb-5 uppercase tracking-wider">{t('footer.servicesTitle')}</h4>
            <ul className="space-y-3">
              {t('footer.quickLinks') && t('contact.services').map((s) => (
                <li key={s}>
                  <button onClick={() => scrollTo('#services')}
                    className="flex items-center gap-2 text-slate-400 text-sm hover:text-white transition-colors duration-200 group">
                    <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all duration-200"
                      style={{ color: '#C9A040' }} />
                    {s}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display font-bold text-white text-sm mb-5 uppercase tracking-wider">{t('footer.contactTitle')}</h4>
            <ul className="space-y-4 mb-6">
              {contactKeys.map((key, i) => {
                const info = t(`footer.${key}`)
                const Icon = contactIcons[i]
                return (
                  <li key={key}>
                    <a href={contactHrefs[i]} className="flex items-start gap-3 group">
                      <div className="w-8 h-8 rounded-lg flex items-center justify-center shrink-0"
                        style={{ background: 'rgba(201,160,64,0.12)' }}>
                        <Icon className="w-4 h-4" style={{ color: '#C9A040' }} />
                      </div>
                      <div>
                        <p className="text-xs mb-0.5" style={{ color: 'rgba(255,255,255,0.3)' }}>{info.label}</p>
                        <p className="text-slate-300 text-sm hover:text-white transition-colors">{info.value}</p>
                      </div>
                    </a>
                  </li>
                )
              })}
            </ul>
            <div className="flex items-center gap-2 p-3 rounded-xl border text-xs"
              style={{ background: 'rgba(255,255,255,0.04)', borderColor: 'rgba(255,255,255,0.08)', color: 'rgba(196,205,216,0.6)' }}>
              <Shield className="w-4 h-4 text-brand-blue shrink-0" />
              {t('footer.insuredBadge')}
            </div>
          </div>
        </div>

        {/* Utah areas */}
        <div className="py-6 border-y" style={{ borderColor: 'rgba(255,255,255,0.07)' }}>
          <p className="text-xs text-center mb-3" style={{ color: 'rgba(196,205,216,0.4)' }}>{t('footer.areasTitle')}</p>
          <div className="flex flex-wrap justify-center gap-x-4 gap-y-1">
            {Array.isArray(areas) && areas.map(area => (
              <span key={area} className="text-xs" style={{ color: 'rgba(196,205,216,0.5)' }}>{area}</span>
            ))}
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm" style={{ color: 'rgba(196,205,216,0.4)' }}>
          <p>Â© {new Date().getFullYear()} {t('footer.copyright')}</p>
          <p className="flex items-center gap-1.5">
            {t('footer.madeIn')} <Heart className="w-3.5 h-3.5 fill-rose-400 text-rose-400 mx-0.5" /> {t('footer.madeInLocation')}
          </p>
          <div className="flex gap-4">
            <a href="#" className="hover:text-slate-300 transition-colors">{t('footer.privacy')}</a>
            <a href="#" className="hover:text-slate-300 transition-colors">{t('footer.terms')}</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
