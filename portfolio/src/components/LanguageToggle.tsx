'use client'
import { useTranslation } from '../hooks/useTranslation'

export default function LanguageToggle() {
  const { locale, setLocale } = useTranslation()

  const toggleLanguage = () => {
    setLocale(locale === 'en' ? 'fr' : 'en')
  }

  return (
    <button
      onClick={toggleLanguage}
      className="flex items-center gap-2 px-4 py-2 rounded-full bg-slate-200 hover:bg-slate-300 transition-colors"
      aria-label="Change language"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="w-5 h-5"
      >
        <circle cx="12" cy="12" r="10" />
        <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
        <path d="M2 12h20" />
      </svg>
      <span className="font-semibold text-sm uppercase">{locale}</span>
    </button>
  )
}
