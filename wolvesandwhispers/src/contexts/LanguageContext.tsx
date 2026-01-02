'use client'

import React, { createContext, useContext, useState, useEffect } from 'react'
import en from '../../locales/en.json'
import fr from '../../locales/fr.json'

type Locale = 'en' | 'fr'

type Translations = typeof en

interface LanguageContextType {
  locale: Locale
  setLocale: (locale: Locale) => void
  t: (key: string) => string
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

const translations: Record<Locale, Translations> = {
  en,
  fr,
}

function getNestedTranslation(obj: any, path: string): string {
  return path.split('.').reduce((current, key) => current?.[key], obj) || path
}

export function LanguageProvider({
  children,
  initialLocale
}: {
  children: React.ReactNode
  initialLocale: Locale
}) {
  const [locale, setLocaleState] = useState<Locale>(initialLocale)

  const setLocale = (newLocale: Locale) => {
    setLocaleState(newLocale)
    // Save to cookie
    document.cookie = `NEXT_LOCALE=${newLocale}; path=/; max-age=${60 * 60 * 24 * 30}`
    // Refresh to apply new language
    window.location.reload()
  }

  const t = (key: string): string => {
    return getNestedTranslation(translations[locale], key)
  }

  return (
    <LanguageContext.Provider value={{ locale, setLocale, t }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useTranslation() {
  const context = useContext(LanguageContext)
  if (!context) {
    throw new Error('useTranslation must be used within LanguageProvider')
  }
  return context
}
