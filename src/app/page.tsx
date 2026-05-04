'use client'

import { useEffect, useRef, useState, useCallback } from 'react'
import { motion, useScroll, useTransform, useInView, AnimatePresence } from 'framer-motion'
import {
  Shield, Eye, Lock, Database, ArrowUp, ChevronRight,
  Monitor, BarChart3, Bug, Megaphone, WifiOff,
  CreditCard, Baby, RefreshCw, Mail, BookOpen, Sparkles,
} from 'lucide-react'
import { translations, languages, type LangCode, type Translations as T } from '@/lib/translations'
import LanguageSwitcher from '@/components/LanguageSwitcher'

/* ─── Icon map ──────────────────────────────────────────── */

const iconMap: Record<string, React.ReactNode> = {
  eye: <Eye className="w-5 h-5" />,
  database: <Database className="w-5 h-5" />,
  'wifi-off': <WifiOff className="w-5 h-5" />,
  'credit-card': <CreditCard className="w-5 h-5" />,
  baby: <Baby className="w-5 h-5" />,
  'refresh-cw': <RefreshCw className="w-5 h-5" />,
  mail: <Mail className="w-5 h-5" />,
  monitor: <Monitor className="w-4 h-4" />,
  'bar-chart': <BarChart3 className="w-4 h-4" />,
  bug: <Bug className="w-4 h-4" />,
  megaphone: <Megaphone className="w-4 h-4" />,
  lock: <Lock className="w-4 h-4" />,
}

/* ─── Floating Particles ──────────────────────────────── */

function Particles() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  useEffect(() => {
    const canvas = canvasRef.current; if (!canvas) return
    const ctx = canvas.getContext('2d'); if (!ctx) return
    let animationId: number
    const pts: { x: number; y: number; r: number; dx: number; dy: number; o: number; ph: number }[] = []
    const resize = () => { canvas.width = window.innerWidth; canvas.height = window.innerHeight }
    resize(); window.addEventListener('resize', resize)
    for (let i = 0; i < 50; i++) pts.push({ x: Math.random() * canvas.width, y: Math.random() * canvas.height, r: Math.random() * 2 + 0.5, dx: (Math.random() - 0.5) * 0.3, dy: (Math.random() - 0.5) * 0.3, o: Math.random() * 0.4 + 0.1, ph: Math.random() * Math.PI * 2 })
    const animate = () => { ctx.clearRect(0, 0, canvas.width, canvas.height); const t = Date.now() * 0.001; pts.forEach(p => { p.x += p.dx; p.y += p.dy; if (p.x < 0) p.x = canvas.width; if (p.x > canvas.width) p.x = 0; if (p.y < 0) p.y = canvas.height; if (p.y > canvas.height) p.y = 0; ctx.beginPath(); ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2); ctx.fillStyle = `rgba(16,185,129,${p.o * (0.5 + 0.5 * Math.sin(t + p.ph))})`; ctx.fill() }); animationId = requestAnimationFrame(animate) }
    animate()
    return () => { window.removeEventListener('resize', resize); cancelAnimationFrame(animationId) }
  }, [])
  return <canvas ref={canvasRef} className="fixed inset-0 pointer-events-none z-0" style={{ opacity: 0.6 }} />
}

/* ─── Geometric Pattern ────────────────────────────────── */

function GeometricPattern() {
  return (
    <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
      <svg className="absolute w-full h-full opacity-[0.03] dark:opacity-[0.05]" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id="islamicPattern" x="0" y="0" width="80" height="80" patternUnits="userSpaceOnUse">
            <path d="M40 0 L80 40 L40 80 L0 40 Z" fill="none" stroke="currentColor" strokeWidth="0.5" />
            <path d="M0 0 L40 0 L80 0 M0 40 L40 40 L80 40 M0 80 L40 80 L80 80 M0 0 L0 40 L0 80 M40 0 L40 40 L40 80 M80 0 L80 40 L80 80" fill="none" stroke="currentColor" strokeWidth="0.3" />
            <circle cx="40" cy="40" r="20" fill="none" stroke="currentColor" strokeWidth="0.3" />
            <circle cx="0" cy="0" r="12" fill="none" stroke="currentColor" strokeWidth="0.2" />
            <circle cx="80" cy="0" r="12" fill="none" stroke="currentColor" strokeWidth="0.2" />
            <circle cx="0" cy="80" r="12" fill="none" stroke="currentColor" strokeWidth="0.2" />
            <circle cx="80" cy="80" r="12" fill="none" stroke="currentColor" strokeWidth="0.2" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#islamicPattern)" />
      </svg>
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-emerald-500/10 rounded-full blur-[120px]" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-amber-500/8 rounded-full blur-[100px]" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-emerald-600/5 rounded-full blur-[150px]" />
    </div>
  )
}

/* ─── Section Card ──────────────────────────────────────── */

function SectionCard({ section, index }: { section: T['sections'][number]; index: number }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })
  const lang = languages.find(l => l.code === useLang()) ?? languages[0]
  const isRTL = lang.rtl

  return (
    <motion.section id={section.id} ref={ref} className="relative"
      initial={{ opacity: 0, y: 60 }} animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay: 0.1, ease: [0.25, 0.46, 0.45, 0.94] }}>
      <div className="group relative rounded-2xl border border-emerald-200/50 dark:border-emerald-800/40 bg-white/60 dark:bg-emerald-950/30 backdrop-blur-xl shadow-lg shadow-emerald-900/5 dark:shadow-emerald-950/20 hover:shadow-xl hover:shadow-emerald-900/10 transition-all duration-500 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/0 via-transparent to-amber-500/0 group-hover:from-emerald-500/5 group-hover:to-amber-500/5 transition-all duration-700" />
        <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-emerald-500 to-transparent opacity-60" />
        <div className="relative p-6 sm:p-8 lg:p-10">
          <div className={`flex items-start gap-4 sm:gap-5 mb-6 ${isRTL ? 'flex-row-reverse' : ''}`}>
            <motion.div className="flex-shrink-0 w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-gradient-to-br from-emerald-500 to-emerald-700 flex items-center justify-center text-white shadow-lg shadow-emerald-500/25"
              initial={{ scale: 0, rotate: -180 }} animate={isInView ? { scale: 1, rotate: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2, type: 'spring', stiffness: 200 }}>
              {iconMap[section.icon]}
            </motion.div>
            <div className="flex-1 min-w-0">
              <div className={`flex items-center gap-3 mb-1 ${isRTL ? 'flex-row-reverse' : ''}`}>
                <span className="text-xs font-mono font-bold text-emerald-600/70 dark:text-emerald-400/60 tracking-widest uppercase">
                  {section.number}
                </span>
              </div>
              <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 dark:text-white leading-tight text-right rtl:text-right">
                {section.title}
              </h2>
            </div>
          </div>
          <p className={`text-gray-600 dark:text-gray-300 leading-relaxed text-sm sm:text-base mb-6 ${isRTL ? 'text-right' : ''}`}>
            {section.description}
          </p>
          {section.items && section.items.length > 0 && (
            <div className="space-y-4 mb-6">
              {section.items.map((item, i) => (
                <motion.div key={i} className={`flex gap-4 p-4 rounded-xl bg-gray-50/80 dark:bg-emerald-950/20 border border-gray-100/60 dark:border-emerald-800/20 hover:border-emerald-300/60 dark:hover:border-emerald-700/40 transition-all duration-300 group/item ${isRTL ? 'flex-row-reverse' : ''}`}
                  initial={{ opacity: 0, x: isRTL ? 30 : -30 }} animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.3 + i * 0.1 }}>
                  <div className="flex-shrink-0 w-9 h-9 rounded-lg bg-emerald-100 dark:bg-emerald-900/40 flex items-center justify-center text-emerald-600 dark:text-emerald-400 group-hover/item:bg-emerald-200 dark:group-hover/item:bg-emerald-800/50 transition-colors">
                    {iconMap[item.icon]}
                  </div>
                  <div className={isRTL ? 'text-right' : ''}>
                    <h3 className="font-semibold text-gray-800 dark:text-white text-sm sm:text-base mb-1">{item.title}</h3>
                    <p className="text-gray-500 dark:text-gray-400 text-xs sm:text-sm leading-relaxed">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          )}
          {section.note && (
            <motion.div className="p-4 rounded-xl bg-amber-50/80 dark:bg-amber-950/20 border border-amber-200/50 dark:border-amber-800/30"
              initial={{ opacity: 0 }} animate={isInView ? { opacity: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.5 }}>
              <div className={`flex items-center gap-2 mb-1 ${isRTL ? 'flex-row-reverse' : ''}`}>
                <Sparkles className="w-4 h-4 text-amber-500" />
                <span className="text-xs font-semibold text-amber-700 dark:text-amber-400 uppercase tracking-wide">
                  {section.noteType === 'contact' ? (isRTL ? 'اتصل' : 'Email') : (isRTL ? 'ملاحظة' : 'Note')}
                </span>
              </div>
              <p className={`text-amber-800 dark:text-amber-300 font-medium text-sm ${isRTL ? 'text-right' : ''}`}>{section.note}</p>
            </motion.div>
          )}
          {section.links && section.links.length > 0 && (
            <div className="mt-6">
              <div className={`flex flex-wrap gap-2 ${isRTL ? 'justify-end' : ''}`}>
                {section.links.map((link, i) => (
                  <motion.a key={i} href={link.href} target="_blank" rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg bg-emerald-50 dark:bg-emerald-900/30 border border-emerald-200/60 dark:border-emerald-700/30 text-emerald-700 dark:text-emerald-300 text-xs sm:text-sm font-medium hover:bg-emerald-100 dark:hover:bg-emerald-800/40 hover:border-emerald-300 dark:hover:border-emerald-600/50 transition-all duration-300 group/link"
                    initial={{ opacity: 0, y: 10 }} animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.4, delay: 0.5 + i * 0.08 }}
                    whileHover={{ y: -2 }} whileTap={{ scale: 0.97 }}>
                    {isRTL ? <ChevronRight className="w-3 h-3 rotate-180 group-hover/link:-translate-x-0.5 transition-transform" /> : <ChevronRight className="w-3 h-3 group-hover/link:translate-x-0.5 transition-transform" />}
                    {link.label}
                  </motion.a>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </motion.section>
  )
}

/* ─── Shared lang state (avoid prop drilling) ──────────── */

const langCtx = { current: 'en' as LangCode, set: (_l: LangCode) => {} }
export function useLang() { return langCtx.current }

/* ─── Table of Contents ────────────────────────────────── */

function TableOfContents({ t }: { t: T }) {
  const [activeId, setActiveId] = useState('')
  const { scrollYProgress } = useScroll()
  const [visible, setVisible] = useState(false)
  const isRTL = languages.find(l => l.code === useLang())?.rtl ?? false

  useEffect(() => {
    const h = () => setVisible(window.scrollY > 500)
    window.addEventListener('scroll', h, { passive: true })
    return () => window.removeEventListener('scroll', h)
  }, [])
  useEffect(() => {
    const obs = new IntersectionObserver(e => e.forEach(en => { if (en.isIntersecting) setActiveId(en.target.id) }), { rootMargin: '-20% 0px -60% 0px' })
    t.sections.forEach(s => { const el = document.getElementById(s.id); if (el) obs.observe(el) })
    return () => obs.disconnect()
  }, [t])
  const scrollTo = useCallback((id: string) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' }), [])

  return (
    <AnimatePresence>
      {visible && (
        <motion.nav className={`fixed top-1/2 -translate-y-1/2 z-50 hidden lg:block ${isRTL ? 'left-4 sm:left-6' : 'right-4 sm:right-6'}`}
          initial={{ opacity: 0, x: isRTL ? -40 : 40 }} animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: isRTL ? -40 : 40 }} transition={{ duration: 0.4 }}>
          <div className="rounded-2xl border border-emerald-200/40 dark:border-emerald-800/30 bg-white/70 dark:bg-emerald-950/50 backdrop-blur-xl p-3 shadow-xl shadow-black/5">
            <div className="relative mb-3">
              <div className="h-0.5 w-full bg-gray-100 dark:bg-emerald-900/40 rounded-full overflow-hidden">
                <motion.div className="h-full bg-gradient-to-r from-emerald-500 to-emerald-400 rounded-full" style={{ scaleX: scrollYProgress }} />
              </div>
            </div>
            <ul className="space-y-1">
              {t.sections.map(s => (
                <li key={s.id}>
                  <button onClick={() => scrollTo(s.id)}
                    className={`flex items-center gap-2 px-3 py-1.5 rounded-lg text-[11px] font-medium transition-all duration-300 w-full ${isRTL ? 'flex-row-reverse text-right' : 'text-left'} ${activeId === s.id ? 'bg-emerald-100 dark:bg-emerald-800/40 text-emerald-700 dark:text-emerald-300 shadow-sm' : 'text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300 hover:bg-gray-50 dark:hover:bg-emerald-900/20'}`}>
                    <span className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${activeId === s.id ? 'bg-emerald-500 shadow-sm shadow-emerald-500/50' : 'bg-gray-300 dark:bg-gray-600'}`} />
                    <span className="truncate max-w-[120px]">{s.title}</span>
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </motion.nav>
      )}
    </AnimatePresence>
  )
}

/* ─── Back to Top ──────────────────────────────────────── */

function BackToTop() {
  const [show, setShow] = useState(false)
  const isRTL = languages.find(l => l.code === useLang())?.rtl ?? false
  useEffect(() => { const h = () => setShow(window.scrollY > 600); window.addEventListener('scroll', h, { passive: true }); return () => window.removeEventListener('scroll', h) }, [])
  return (
    <AnimatePresence>
      {show && (
        <motion.button className={`fixed bottom-6 z-50 w-12 h-12 rounded-full bg-gradient-to-br from-emerald-500 to-emerald-700 text-white shadow-lg shadow-emerald-500/30 flex items-center justify-center hover:shadow-xl hover:shadow-emerald-500/40 transition-shadow ${isRTL ? 'left-6' : 'right-6'}`}
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          initial={{ opacity: 0, scale: 0, y: 20 }} animate={{ opacity: 1, scale: 1, y: 0 }} exit={{ opacity: 0, scale: 0, y: 20 }}
          whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
          <ArrowUp className="w-5 h-5" />
        </motion.button>
      )}
    </AnimatePresence>
  )
}

/* ─── Main Page ───────────────────────────────────────── */

export default function Home() {
  const [lang, setLang] = useState<LangCode>('en')
  const t = translations[lang]
  const langInfo = languages.find(l => l.code === lang)!
  const isRTL = langInfo.rtl
  const heroRef = useRef(null)
  const { scrollYProgress } = useScroll()
  const basePath = '/quran/'
  const heroY = useTransform(scrollYProgress, [0, 0.2], [0, -100])
  const heroOpacity = useTransform(scrollYProgress, [0, 0.15], [1, 0])

  // Update shared context
  langCtx.current = lang
  langCtx.set = setLang

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 via-white to-gray-50 dark:from-gray-950 dark:via-gray-900 dark:to-gray-950 text-gray-900 dark:text-white overflow-x-hidden" dir={isRTL ? 'rtl' : 'ltr'}>
      <GeometricPattern />
      <Particles />

      {/* Reading Progress Bar */}
      <motion.div className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-emerald-400 via-emerald-500 to-amber-500 z-[100] origin-left" style={{ scaleX: scrollYProgress }} />

      {/* Language Switcher */}
      <div className="fixed top-4 right-4 sm:top-6 sm:right-6 z-[150]">
        <LanguageSwitcher currentLang={lang} onChange={setLang} />
      </div>

      <main className="relative z-10">
        {/* Hero Section */}
        <motion.section ref={heroRef} className="relative min-h-[85vh] flex flex-col items-center justify-center px-4 sm:px-6" style={{ y: heroY, opacity: heroOpacity }}>
          {/* Decorative star */}
          <motion.div className="absolute top-20 sm:top-32 left-1/2 -translate-x-1/2 w-16 h-16 sm:w-20 sm:h-20 text-emerald-500/20 dark:text-emerald-400/10"
            animate={{ rotate: 360 }} transition={{ duration: 60, repeat: Infinity, ease: 'linear' }}>
            <svg viewBox="0 0 100 100" className="w-full h-full">
              {[...Array(8)].map((_, i) => (
                <polygon key={i} points="50,5 61,35 95,35 68,57 79,90 50,70 21,90 32,57 5,35 39,35" fill="none" stroke="currentColor" strokeWidth="1" transform={`rotate(${i * 45} 50 50)`} />
              ))}
            </svg>
          </motion.div>

          {/* Logo */}
          <motion.div className="mb-6 sm:mb-8" initial={{ opacity: 0, scale: 0.5 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8, type: 'spring', stiffness: 200 }}>
            <div className="relative">
              <div className="absolute inset-0 bg-emerald-500/20 rounded-full blur-2xl scale-150" />
              <div className="relative w-20 h-20 sm:w-24 sm:h-24 rounded-2xl bg-gradient-to-br from-emerald-500 to-emerald-700 shadow-2xl shadow-emerald-500/30 flex items-center justify-center overflow-hidden">
                <img src={`${basePath}quran-logo.png`} alt="Quran Daily" className="w-full h-full object-cover" />
              </div>
            </div>
          </motion.div>

          {/* Title */}
          <motion.div className="text-center max-w-3xl" initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.2 }}>
            <motion.div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-100 dark:bg-emerald-900/40 border border-emerald-200/60 dark:border-emerald-700/30 text-emerald-700 dark:text-emerald-300 text-xs font-medium mb-6"
              initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.3 }}>
              <Shield className="w-3.5 h-3.5" />
              {t.hero.badge}
            </motion.div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black tracking-tight mb-4 sm:mb-6">
              <span className="bg-gradient-to-r from-emerald-600 via-emerald-500 to-emerald-400 dark:from-emerald-400 dark:via-emerald-300 dark:to-emerald-500 bg-clip-text text-transparent">
                {t.hero.title}
              </span>
            </h1>

            <p className="text-lg sm:text-xl text-emerald-700/80 dark:text-emerald-300/70 font-semibold mb-2">
              {t.hero.subtitle}
            </p>

            <motion.div className={`flex items-center justify-center gap-2 text-sm text-gray-400 dark:text-gray-500 ${isRTL ? 'flex-row-reverse' : ''}`}
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.6 }}>
              <BookOpen className="w-4 h-4" />
              <span>{t.hero.date}</span>
            </motion.div>
          </motion.div>

          {/* Intro text */}
          <motion.div className="mt-10 sm:mt-12 max-w-2xl text-center" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.5 }}>
            <p className={`text-gray-600 dark:text-gray-300 leading-relaxed text-sm sm:text-base ${isRTL ? 'text-right' : ''}`}>
              {t.hero.intro}{' '}
              <strong className="text-emerald-700 dark:text-emerald-300">{t.hero.introHighlight}</strong>.
            </p>
          </motion.div>

          {/* Scroll indicator */}
          <motion.div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-gray-400 dark:text-gray-500"
            animate={{ y: [0, 8, 0] }} transition={{ duration: 2, repeat: Infinity }}>
            <span className="text-[10px] font-medium uppercase tracking-widest">{t.hero.scrollText}</span>
            <ChevronRight className={`w-4 h-4 ${isRTL ? 'rotate-[-90deg]' : 'rotate-90'}`} />
          </motion.div>
        </motion.section>

        {/* Sections */}
        <div className="max-w-3xl mx-auto px-4 sm:px-6 pb-24 space-y-8 sm:space-y-10">
          <AnimatePresence mode="wait">
            {t.sections.map((section, index) => (
              <SectionCard key={`${lang}-${section.id}`} section={section} index={index} />
            ))}
          </AnimatePresence>
        </div>

        {/* Footer */}
        <footer className="relative border-t border-emerald-200/40 dark:border-emerald-800/30 bg-white/40 dark:bg-emerald-950/20 backdrop-blur-sm">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 py-10 sm:py-14 text-center">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
              <div className={`flex items-center justify-center gap-2 mb-4 ${isRTL ? 'flex-row-reverse' : ''}`}>
                <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-emerald-500 to-emerald-700 flex items-center justify-center overflow-hidden">
                  <img src={`${basePath}quran-logo.png`} alt="Quran Daily" className="w-full h-full object-cover" />
                </div>
                <span className="font-bold text-gray-800 dark:text-white">{t.footer.company}</span>
              </div>
              <p className={`text-sm text-gray-500 dark:text-gray-400 ${isRTL ? 'text-right' : ''}`}>{t.footer.description}</p>
              <p className={`text-xs text-gray-400 dark:text-gray-500 mt-4 ${isRTL ? 'text-right' : ''}`}>
                &copy; {new Date().getFullYear()} {t.footer.copyright}
              </p>
            </motion.div>
          </div>
        </footer>
      </main>

      <TableOfContents t={t} />
      <BackToTop />
    </div>
  )
}
