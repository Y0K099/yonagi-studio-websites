'use client'
import Link from 'next/link'
import { useTranslation } from '../../hooks/useTranslation'
import LanguageSelector from '../../components/LanguageSelector'
import AppScreenshot from '../../components/AppScreenshot'

export default function Home() {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
      {/* Header */}
      <header className="container mx-auto px-4 py-6">
        <nav className="flex justify-between items-center">
          <h1 className="text-2xl font-bold text-white">Témor</h1>
          <div className="flex items-center space-x-6">
            <Link href="./support" className="text-white hover:text-blue-300 transition">{t('nav.support')}</Link>
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
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
                {t('hero.title')}
              </span>
            </h2>

            <p className="text-xl text-gray-300 mb-8 leading-relaxed whitespace-pre-line">
              {t('hero.description')}
            </p>

            {/* Coming Soon */}
            <div className="bg-blue-800/30 border border-blue-600/50 rounded-lg p-6 text-center max-w-xs mx-auto lg:mx-0">
              <p className="text-blue-300 font-semibold">{t('download.comingSoon')}</p>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="container mx-auto px-4 py-8 mt-16 border-t border-white/20">
        <div className="text-center text-gray-400">
          <p>{t('footer.copyright')}</p>
          <div className="mt-4">
            <Link href="./privacy" className="hover:text-blue-300 transition">{t('footer.privacyPolicy')}</Link>
          </div>
        </div>
      </footer>
    </div>
  )
}
