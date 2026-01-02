'use client'
import Link from 'next/link'
import { useTranslation } from '../../../../hooks/useTranslation'
import LanguageSelector from '../../../../components/LanguageSelector'
import en from '../../../../../locales/en.json'
import fr from '../../../../../locales/fr.json'

export default function Terms() {
  const { t, locale } = useTranslation();
  const translations = locale === 'fr' ? fr : en;

  return (
    <div className="min-h-screen bg-gradient-to-br from-stone-900 via-red-900 to-stone-900">
      {/* Header */}
      <header className="container mx-auto px-4 py-6">
        <nav className="flex justify-between items-center">
          <Link href="/" className="text-2xl font-bold text-white hover:text-red-300 transition">
            Wolves & Whispers
          </Link>
          <div className="flex items-center space-x-6">
            <Link href="../support" className="text-white hover:text-red-300 transition">{t('nav.support')}</Link>
            <LanguageSelector />
          </div>
        </nav>
      </header>

      <main className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl font-bold text-white mb-4 text-center">
            {t('terms.title')}
          </h1>

          <p className="text-center text-gray-300 mb-8 text-sm">
            {t('terms.lastUpdated')}
          </p>

          <div className="space-y-6">
            {/* Introduction */}
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <p className="text-gray-300 leading-relaxed">
                {t('terms.introduction')}
              </p>
            </div>

            {/* In-App Purchases */}
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <h2 className="text-2xl font-bold text-white mb-4">{t('terms.purchases.title')}</h2>
              <ul className="text-gray-300 space-y-1">
                {translations.terms.purchases.items.map((item: string, index: number) => (
                  <li key={index} className="flex items-start">
                    <span className="text-red-400 mr-2">•</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Premium Content */}
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <h2 className="text-2xl font-bold text-white mb-4">{t('terms.content.title')}</h2>
              <ul className="text-gray-300 space-y-1">
                {translations.terms.content.items.map((item: string, index: number) => (
                  <li key={index} className="flex items-start">
                    <span className="text-purple-400 mr-2">•</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Refunds */}
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <h2 className="text-2xl font-bold text-white mb-4">{t('terms.refunds.title')}</h2>
              <ul className="text-gray-300 space-y-1">
                {translations.terms.refunds.items.map((item: string, index: number) => (
                  <li key={index} className="flex items-start">
                    <span className="text-purple-400 mr-2">•</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Terms of Use */}
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <h2 className="text-2xl font-bold text-white mb-4">{t('terms.usage.title')}</h2>
              <ul className="text-gray-300 space-y-1">
                {translations.terms.usage.items.map((item: string, index: number) => (
                  <li key={index} className="flex items-start">
                    <span className="text-purple-400 mr-2">•</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Limitation of Liability */}
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <h2 className="text-2xl font-bold text-white mb-4">{t('terms.liability.title')}</h2>
              <ul className="text-gray-300 space-y-1">
                {translations.terms.liability.items.map((item: string, index: number) => (
                  <li key={index} className="flex items-start">
                    <span className="text-orange-400 mr-2">•</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Changes */}
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <h2 className="text-2xl font-bold text-white mb-4">{t('terms.changes.title')}</h2>
              <p className="text-gray-300 leading-relaxed">
                {t('terms.changes.description')}
              </p>
            </div>

            {/* Contact */}
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <h2 className="text-2xl font-bold text-white mb-4">{t('terms.contact')}</h2>
              <p className="text-gray-300 mb-4">
                {t('terms.contactDescription')}
              </p>
              <Link
                href="../support"
                className="bg-gradient-to-r from-red-600 to-red-700 text-beige-200 px-6 py-3 rounded-lg font-semibold hover:scale-105 transition transform inline-block"
              >
                {t('nav.support')}
              </Link>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="container mx-auto px-4 py-8 mt-16 border-t border-white/20">
        <div className="text-center text-gray-400">
          <p>{t('footer.copyright')}</p>
          <div className="mt-4 space-x-4">
            <Link href="../privacy" className="text-red-300 hover:text-red-200 transition">{t('footer.privacyPolicy')}</Link>
            <span className="text-gray-500">|</span>
            <Link href="../terms" className="text-red-300 font-semibold">{t('footer.termsOfService')}</Link>
          </div>
        </div>
      </footer>
    </div>
  )
}
