import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ZoomIn, X, ChevronLeft, ChevronRight, Eye } from 'lucide-react'
import { useTranslation } from 'react-i18next'

const emojis = ['🏢', '🏠', '🏪', '🔨', '🏗️', '🏥']
const beforeColors = ['from-gray-400 to-gray-600','from-amber-300 to-yellow-500','from-orange-400 to-red-500','from-stone-400 to-gray-600','from-zinc-400 to-slate-600','from-red-400 to-rose-600']
const afterColors  = ['from-sky-100 to-blue-200','from-emerald-100 to-green-200','from-violet-100 to-purple-200','from-cyan-100 to-teal-200','from-rose-100 to-pink-200','from-indigo-100 to-blue-200']

function GalleryCard({ item, emoji, beforeColor, afterColor, onClick }) {
  const { t } = useTranslation()
  const [hovered, setHovered] = useState(false)

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, margin: '-60px' }} transition={{ duration: 0.4 }}
      onHoverStart={() => setHovered(true)} onHoverEnd={() => setHovered(false)}
      onClick={onClick}
      className="group relative rounded-2xl overflow-hidden cursor-pointer shadow-card hover:shadow-card-hover transition-shadow duration-300"
      style={{ aspectRatio: '4/3' }}>
      <div className={`absolute inset-0 bg-gradient-to-br ${beforeColor} flex items-center justify-center`}>
        <div className="text-center text-white/60">
          <p className="text-5xl mb-2">🧹</p>
          <p className="text-xs uppercase tracking-widest font-medium">{t('gallery.beforeLabel')}</p>
        </div>
      </div>

      <motion.div className={`absolute inset-0 bg-gradient-to-br ${afterColor} flex items-center justify-center`}
        initial={{ clipPath: 'inset(0 100% 0 0)' }}
        animate={{ clipPath: hovered ? 'inset(0 0% 0 0)' : 'inset(0 50% 0 0)' }}
        transition={{ duration: 0.5, ease: 'easeInOut' }}>
        <div className="text-center text-slate-600/60">
          <p className="text-5xl mb-2">{emoji}</p>
          <p className="text-xs uppercase tracking-widest font-medium">{t('gallery.afterLabel')}</p>
        </div>
      </motion.div>

      <motion.div className="absolute top-0 bottom-0 w-0.5 bg-white shadow-lg z-10"
        animate={{ left: hovered ? '100%' : '50%' }}
        transition={{ duration: 0.5, ease: 'easeInOut' }} />

      {!hovered && (
        <>
          <div className="absolute top-3 left-3 bg-black/40 backdrop-blur-sm text-white text-[10px] font-bold px-2 py-1 rounded-full z-20">{t('gallery.beforeLabel')}</div>
          <div className="absolute top-3 right-3 bg-white/40 backdrop-blur-sm text-slate-800 text-[10px] font-bold px-2 py-1 rounded-full z-20">{t('gallery.afterLabel')}</div>
        </>
      )}

      <motion.div initial={{ opacity: 0 }} animate={{ opacity: hovered ? 1 : 0 }}
        transition={{ duration: 0.2 }}
        className="absolute inset-0 backdrop-blur-[2px] z-20 flex flex-col items-center justify-center gap-3"
        style={{ background: 'rgba(13,27,75,0.5)' }}>
        <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center border border-white/30">
          <ZoomIn className="w-6 h-6 text-white" />
        </div>
        <div className="text-center">
          <p className="text-white font-bold text-sm">{item.label}</p>
          <p className="text-white/60 text-xs mt-0.5">{item.category}</p>
        </div>
      </motion.div>

      <div className="absolute bottom-3 left-3 z-10">
        <span className="text-[10px] font-bold px-2.5 py-1 rounded-full shadow-lg"
          style={{ background: 'linear-gradient(135deg, #D4B558, #C9A040)', color: '#06102A' }}>
          {item.category}
        </span>
      </div>
    </motion.div>
  )
}

function Lightbox({ item, emoji, afterColor, onClose, onPrev, onNext }) {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 bg-black/92 backdrop-blur-sm flex items-center justify-center p-4"
      onClick={onClose}>
      <motion.div initial={{ scale: 0.85, opacity: 0 }} animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.85, opacity: 0 }} transition={{ duration: 0.3 }}
        className="relative max-w-3xl w-full" onClick={(e) => e.stopPropagation()}>
        <div className={`w-full h-80 rounded-2xl bg-gradient-to-br ${afterColor} flex items-center justify-center`}>
          <span className="text-8xl">{emoji}</span>
        </div>
        <div className="mt-4 text-center text-white">
          <h3 className="font-display font-bold text-xl">{item.label}</h3>
          <p className="text-white/50 text-sm mt-1">{item.category}</p>
        </div>
        <button onClick={onClose} className="absolute -top-4 -right-4 w-10 h-10 bg-white/10 rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-colors"><X className="w-5 h-5" /></button>
        <button onClick={onPrev} className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-14 w-10 h-10 bg-white/10 rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-colors"><ChevronLeft className="w-5 h-5" /></button>
        <button onClick={onNext} className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-14 w-10 h-10 bg-white/10 rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-colors"><ChevronRight className="w-5 h-5" /></button>
      </motion.div>
    </motion.div>
  )
}

export default function Gallery() {
  const { t } = useTranslation()
  const items = t('gallery.items')
  const [selectedIdx, setSelectedIdx] = useState(null)

  if (!Array.isArray(items)) return null

  const prev = () => setSelectedIdx((i) => (i - 1 + items.length) % items.length)
  const next = () => setSelectedIdx((i) => (i + 1) % items.length)

  return (
    <section id="gallery" className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-center mb-16">
          <span className="section-tag"><Eye className="w-3.5 h-3.5" />{t('gallery.tag')}</span>
          <h2 className="section-title text-4xl md:text-5xl mb-5">
            {t('gallery.title')}<br />
            <span className="gradient-text">{t('gallery.titleHighlight')}</span>
          </h2>
          <p className="text-slate-500 text-lg max-w-2xl mx-auto">{t('gallery.subtitle')}</p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {items.map((item, i) => (
            <GalleryCard key={i} item={item} emoji={emojis[i]} beforeColor={beforeColors[i]}
              afterColor={afterColors[i]} onClick={() => setSelectedIdx(i)} />
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selectedIdx !== null && (
          <Lightbox item={items[selectedIdx]} emoji={emojis[selectedIdx]}
            afterColor={afterColors[selectedIdx]}
            onClose={() => setSelectedIdx(null)} onPrev={prev} onNext={next} />
        )}
      </AnimatePresence>
    </section>
  )
}
