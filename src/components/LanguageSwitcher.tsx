'use client'

import { useState, useRef, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Globe, ChevronDown, Check } from 'lucide-react'
import { languages, type LangCode } from '@/lib/translations'

interface LanguageSwitcherProps {
  currentLang: LangCode
  onChange: (lang: LangCode) => void
}

export default function LanguageSwitcher({ currentLang, onChange }: LanguageSwitcherProps) {
  const [open, setOpen] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  const current = languages.find((l) => l.code === currentLang)!

  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClick)
    return () => document.removeEventListener('mousedown', handleClick)
  }, [])

  return (
    <div ref={ref} className="relative">
      <motion.button
        onClick={() => setOpen(!open)}
        className="flex items-center gap-2 px-3 py-2 rounded-xl bg-white/70 dark:bg-emerald-950/50 backdrop-blur-xl border border-emerald-200/50 dark:border-emerald-800/30 shadow-lg shadow-black/5 hover:shadow-xl hover:border-emerald-300/60 dark:hover:border-emerald-700/40 transition-all duration-300 cursor-pointer"
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
      >
        <Globe className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
        <span className="text-sm font-medium text-gray-700 dark:text-gray-200">
          {current.flag} {current.nativeName}
        </span>
        <motion.div animate={{ rotate: open ? 180 : 0 }} transition={{ duration: 0.2 }}>
          <ChevronDown className="w-3.5 h-3.5 text-gray-400" />
        </motion.div>
      </motion.button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -8, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -8, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="absolute right-0 mt-2 w-56 sm:w-64 rounded-xl bg-white/90 dark:bg-gray-900/90 backdrop-blur-xl border border-emerald-200/50 dark:border-emerald-800/30 shadow-2xl shadow-black/10 overflow-hidden z-[200]"
          >
            <div className="p-1.5 max-h-[70vh] overflow-y-auto">
              {languages.map((lang, i) => {
                const isActive = lang.code === currentLang
                const checkEl = isActive ? (
                  <motion.div
                    key="check"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: 'spring', stiffness: 300 }}
                  >
                    <Check className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                  </motion.div>
                ) : null

                return (
                  <motion.button
                    key={lang.code}
                    onClick={() => {
                      onChange(lang.code)
                      setOpen(false)
                    }}
                    className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm transition-all duration-200 cursor-pointer ${
                      isActive
                        ? 'bg-emerald-100 dark:bg-emerald-900/40 text-emerald-700 dark:text-emerald-300'
                        : 'text-gray-600 dark:text-gray-300 hover:bg-gray-100/80 dark:hover:bg-emerald-900/20'
                    }`}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.03 }}
                    whileHover={{ x: 4 }}
                  >
                    <span className="text-lg leading-none">{lang.flag}</span>
                    <div className="flex-1 text-left min-w-0">
                      <div className="font-medium truncate">{lang.nativeName}</div>
                      <div className={`text-[10px] truncate ${isActive ? 'text-emerald-500/70 dark:text-emerald-400/60' : 'text-gray-400 dark:text-gray-500'}`}>
                        {lang.name}
                      </div>
                    </div>
                    {checkEl}
                  </motion.button>
                )
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
