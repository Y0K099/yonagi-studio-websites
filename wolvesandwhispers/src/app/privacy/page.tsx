'use client'
import Link from 'next/link'
import { useTranslation } from '../../hooks/useTranslation'
import LanguageSelector from '../../components/LanguageSelector'
import en from '../../../locales/en.json'
import fr from '../../../locales/fr.json'

export default function Privacy() {
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
            {t('privacy.title')}
          </h1>
          
          <p className="text-center text-gray-300 mb-8 text-sm">
            {t('privacy.lastUpdated')}
          </p>

          <div className="space-y-6">
            {/* Introduction */}
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <p className="text-gray-300 leading-relaxed">
                {t('privacy.introduction')}
              </p>
            </div>

            {/* Data Collection */}
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <h2 className="text-2xl font-bold text-white mb-4">{t('privacy.dataCollection.title')}</h2>
              
              <div className="mb-4">
                <h3 className="text-lg font-semibold text-red-300 mb-2">
                  {t('privacy.dataCollection.userProvided.title')}
                </h3>
                <ul className="text-gray-300 space-y-1">
                  {translations.privacy.dataCollection.userProvided.items.map((item: string, index: number) => (
                    <li key={index} className="flex items-start">
                      <span className="text-red-400 mr-2">•</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-red-300 mb-2">
                  {t('privacy.dataCollection.automatic.title')}
                </h3>
                <ul className="text-gray-300 space-y-1">
                  {translations.privacy.dataCollection.automatic.items.map((item: string, index: number) => (
                    <li key={index} className="flex items-start">
                      <span className="text-red-400 mr-2">•</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Data Usage */}
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <h2 className="text-2xl font-bold text-white mb-4">{t('privacy.dataUsage.title')}</h2>
              <ul className="text-gray-300 space-y-1">
                {translations.privacy.dataUsage.items.map((item: string, index: number) => (
                  <li key={index} className="flex items-start">
                    <span className="text-purple-400 mr-2">•</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Data Storage */}
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <h2 className="text-2xl font-bold text-white mb-4">{t('privacy.dataStorage.title')}</h2>
              <ul className="text-gray-300 space-y-1">
                {translations.privacy.dataStorage.items.map((item: string, index: number) => (
                  <li key={index} className="flex items-start">
                    <span className="text-purple-400 mr-2">•</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* User Rights */}
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <h2 className="text-2xl font-bold text-white mb-4">{t('privacy.userRights.title')}</h2>
              <ul className="text-gray-300 space-y-1">
                {translations.privacy.userRights.items.map((item: string, index: number) => (
                  <li key={index} className="flex items-start">
                    <span className="text-purple-400 mr-2">•</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Unique Features */}
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <h2 className="text-2xl font-bold text-white mb-4">{t('privacy.uniqueFeatures.title')}</h2>
              <ul className="text-gray-300 space-y-1">
                {translations.privacy.uniqueFeatures.items.map((item: string, index: number) => (
                  <li key={index} className="flex items-start">
                    <span className="text-orange-400 mr-2">✓</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Changes */}
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <h2 className="text-2xl font-bold text-white mb-4">{t('privacy.changes.title')}</h2>
              <p className="text-gray-300 leading-relaxed">
                {t('privacy.changes.description')}
              </p>
            </div>

            {/* Contact */}
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <h2 className="text-2xl font-bold text-white mb-4">{t('privacy.contact')}</h2>
              <p className="text-gray-300 mb-4">
                {t('privacy.contactDescription')}
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
          <div className="mt-4">
            <Link href="../privacy" className="text-red-300 font-semibold">{t('footer.privacyPolicy')}</Link>
          </div>
        </div>
      </footer>
    </div>
  )
}