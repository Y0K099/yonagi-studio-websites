'use client'
import Link from 'next/link'
import { useTranslation } from '../hooks/useTranslation'
import LanguageSelector from '../components/LanguageSelector'
import AppScreenshot from '../components/AppScreenshot'

export default function Home() {
  const { t } = useTranslation();
  
  return (
    <div className="min-h-screen bg-gradient-to-br from-stone-900 via-red-900 to-stone-900">
      {/* Header */}
      <header className="container mx-auto px-4 py-6">
        <nav className="flex justify-between items-center">
          <h1 className="text-2xl font-bold text-white">Wolves & Whispers</h1>
          <div className="flex items-center space-x-6">
            <Link href="./support" className="text-white hover:text-red-300 transition">{t('nav.support')}</Link>
            <LanguageSelector />
          </div>
        </nav>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-1">
        <div className="flex flex-col lg:flex-row items-start gap-6 max-w-6xl mx-auto">
          
          {/* App Screenshot */}
          <AppScreenshot />

          {/* Download Section */}
          <div className="flex-1 text-center lg:text-left pt-8">
            <h2 className="text-5xl lg:text-6xl font-bold text-white mb-6">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-orange-400">
                {t('hero.werewolf')}
              </span>
            </h2>
            
            <p className="text-xl text-gray-300 mb-8 leading-relaxed whitespace-pre-line">
              {t('hero.description')}
            </p>

            {/* Download Buttons */}
            <div className="space-y-4">
              <a
                href="https://apps.apple.com/fr/app/wolves-whispers/id6746816109"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center lg:justify-start space-x-3 bg-red-800 text-white px-6 py-3 rounded-lg hover:bg-red-700 transition w-full max-w-xs mx-auto lg:mx-0"
              >
                <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.71 19.5C17.88 20.74 17 21.95 15.66 21.97C14.32 22 13.89 21.18 12.37 21.18C10.84 21.18 10.37 21.95 9.09 22C7.79 22.05 6.8 20.68 5.96 19.47C4.25 17 2.94 12.45 4.7 9.39C5.57 7.87 7.13 6.91 8.82 6.88C10.1 6.86 11.32 7.75 12.11 7.75C12.89 7.75 14.37 6.68 15.92 6.84C16.57 6.87 18.39 7.1 19.56 8.82C19.47 8.88 17.39 10.1 17.41 12.63C17.44 15.65 20.06 16.66 20.09 16.67C20.06 16.74 19.67 18.11 18.71 19.5ZM13 3.5C13.73 2.67 14.94 2.04 15.94 2C16.07 3.17 15.6 4.35 14.9 5.19C14.21 6.04 13.07 6.7 11.95 6.61C11.8 5.46 12.36 4.26 13 3.5Z"/>
                </svg>
                <div className="text-left">
                  <div className="text-xs text-gray-300">{t('download.downloadOn')}</div>
                  <div className="text-sm font-semibold">App Store</div>
                </div>
              </a>
              
              <a
                href="https://play.google.com/store/apps/details?id=com.julesguerin.lgextended&pcampaignid=web_share"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center lg:justify-start space-x-3 bg-red-800 text-white px-6 py-3 rounded-lg hover:bg-red-700 transition w-full max-w-xs mx-auto lg:mx-0"
              >
                <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.92 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z"/>
                </svg>
                <div className="text-left">
                  <div className="text-xs text-gray-300">{t('download.getItOn')}</div>
                  <div className="text-sm font-semibold">Google Play</div>
                </div>
              </a>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="container mx-auto px-4 py-8 mt-16 border-t border-white/20">
        <div className="text-center text-gray-400">
          <p>{t('footer.copyright')}</p>
          <div className="mt-4">
            <Link href="./privacy" className="hover:text-red-300 transition">{t('footer.privacyPolicy')}</Link>
          </div>
        </div>
      </footer>
    </div>
  )
}
