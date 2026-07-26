import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ZoomIn, X, ChevronLeft, ChevronRight, Eye } from 'lucide-react'
import { useTranslation } from 'react-i18next'

const galleryImages = [
  { before: '/gallery/office-after.png',        after: '/gallery/office-before.png' },
  { before: '/gallery/home-after.png',          after: '/gallery/home-before.png' },
  { before: '/gallery/retail-after.png',        after: '/gallery/retail-before.png' },
  { before: '/gallery/construction-after.png',  after: '/gallery/construction-before.png' },
  { before: '/gallery/hallway-after.png',       after: '/gallery/hallway-before.png' },
  { before: '/gallery/medical-after.png',       after: '/gallery/medical-before.png' },
]

/* ── Gallery Card ── */
function GalleryCard({ item, images, onClick }) {
  const { t } = useTranslation()
  const [hovered, setHovered] = useState(false)

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.4 }}
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => setHovered(false)}
      onClick={onClick}
      className="group relative rounded-2xl overflow-hidden cursor-pointer shadow-card hover:shadow-card-hover transition-shadow duration-300"
      style={{ aspectRatio: '4/3' }}>

      {/* Before image */}
      <img
        src={images.before}
        alt={`${item.label} - antes`}
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* After image — slides in from right */}
      <motion.div
        className="absolute inset-0"
        initial={{ clipPath: 'inset(0 100% 0 0)' }}
        animate={{ clipPath: hovered ? 'inset(0 0% 0 0)' : 'inset(0 50% 0 0)' }}
        transition={{ duration: 0.5, ease: 'easeInOut' }}>
        <img
          src={images.after}
          alt={`${item.label} - después`}
          className="w-full h-full object-cover"
        />
      </motion.div>

      {/* Divider line */}
      <motion.div
        className="absolute top-0 bottom-0 w-0.5 bg-white shadow-lg z-10"
        animate={{ left: hovered ? '100%' : '50%' }}
        transition={{ duration: 0.5, ease: 'easeInOut' }}
      />

      {/* Before / After labels */}
      {!hovered && (
        <>
          <div className="absolute top-3 left-3 bg-black/50 backdrop-blur-sm text-white text-[10px] font-bold px-2 py-1 rounded-full z-20">
            {t('gallery.beforeLabel')}
          </div>
          <div className="absolute top-3 right-3 bg-white/60 backdrop-blur-sm text-slate-800 text-[10px] font-bold px-2 py-1 rounded-full z-20">
            {t('gallery.afterLabel')}
          </div>
        </>
      )}

      {/* Hover overlay */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: hovered ? 1 : 0 }}
        transition={{ duration: 0.2 }}
        className="absolute inset-0 z-20 flex flex-col items-center justify-center gap-3"
        style={{ background: 'rgba(13,27,75,0.5)', backdropFilter: 'blur(2px)' }}>
        <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center border border-white/30">
          <ZoomIn className="w-6 h-6 text-white" />
        </div>
        <div className="text-center">
          <p className="text-white font-bold text-sm">{item.label}</p>
          <p className="text-white/60 text-xs mt-0.5">{item.category}</p>
        </div>
      </motion.div>

      {/* Category badge */}
      <div className="absolute bottom-3 left-3 z-10">
        <span
          className="text-[10px] font-bold px-2.5 py-1 rounded-full shadow-lg"
          style={{ background: 'linear-gradient(135deg, #D4B558, #C9A040)', color: '#06102A' }}>
          {item.category}
        </span>
      </div>
    </motion.div>
  )
}

/* ── Lightbox ── */
function Lightbox({ item, images, onClose, onPrev, onNext }) {
  return (
    <motion.div
      initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 bg-black/92 backdrop-blur-sm flex items-center justify-center p-4"
      onClick={onClose}>
      <motion.div
        initial={{ scale: 0.85, opacity: 0 }} animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.85, opacity: 0 }} transition={{ duration: 0.3 }}
        className="relative max-w-3xl w-full"
        onClick={(e) => e.stopPropagation()}>
        <img
          src={images.after}
          alt={`${item.label} - después`}
          className="w-full rounded-2xl object-cover max-h-[70vh]"
        />
        <div className="mt-4 text-center text-white">
          <h3 className="font-display font-bold text-xl">{item.label}</h3>
          <p className="text-white/50 text-sm mt-1">{item.category}</p>
        </div>
        <button onClick={onClose} className="absolute -top-4 -right-4 w-10 h-10 bg-white/10 rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-colors">
          <X className="w-5 h-5" />
        </button>
        <button onClick={onPrev} className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-14 w-10 h-10 bg-white/10 rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-colors">
          <ChevronLeft className="w-5 h-5" />
        </button>
        <button onClick={onNext} className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-14 w-10 h-10 bg-white/10 rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-colors">
          <ChevronRight className="w-5 h-5" />
        </button>
      </motion.div>
    </motion.div>
  )
}

/* ── Gallery Section ── */
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
        <motion.div
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.6 }}
          className="text-center mb-16">
          <span className="section-tag"><Eye className="w-3.5 h-3.5" />{t('gallery.tag')}</span>
          <h2 className="section-title text-4xl md:text-5xl mb-5">
            {t('gallery.title')}<br />
            <span className="gradient-text">{t('gallery.titleHighlight')}</span>
          </h2>
          <p className="text-slate-500 text-lg max-w-2xl mx-auto">{t('gallery.subtitle')}</p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {items.map((item, i) => (
            <GalleryCard
              key={i}
              item={item}
              images={galleryImages[i]}
              onClick={() => setSelectedIdx(i)}
            />
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selectedIdx !== null && (
          <Lightbox
            item={items[selectedIdx]}
            images={galleryImages[selectedIdx]}
            onClose={() => setSelectedIdx(null)}
            onPrev={prev}
            onNext={next}
          />
        )}
      </AnimatePresence>
    </section>
  )
}
