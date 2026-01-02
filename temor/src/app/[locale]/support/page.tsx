'use client'
import Link from 'next/link'
import { useTranslation } from '../../../hooks/useTranslation'
import LanguageSelector from '../../../components/LanguageSelector'
import ContactForm from '../../../components/ContactForm'

export default function Support() {
  const { t } = useTranslation();
  
  return (
    <div className="min-h-screen bg-gradient-to-br from-stone-900 via-red-900 to-stone-900">
      {/* Header */}
      <header className="container mx-auto px-4 py-6">
        <nav className="flex justify-between items-center">
          <Link href="/" className="text-2xl font-bold text-white hover:text-red-300 transition">
            Wolves & Whispers
          </Link>
          <div className="flex items-center space-x-6">
            <Link href="../support" className="text-red-300 font-semibold">{t('nav.support')}</Link>
            <LanguageSelector />
          </div>
        </nav>
      </header>

      <main className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl font-bold text-white mb-8 text-center">
            {t('support.title')}
          </h1>
          
          <p className="text-xl text-gray-300 mb-12 text-center">
            {t('support.subtitle')}
          </p>

          {/* Contact Form */}
          <div className="max-w-2xl mx-auto">
            <ContactForm />
          </div>

        </div>
      </main>

      {/* Footer */}
      <footer className="container mx-auto px-4 py-8 mt-16 border-t border-white/20">
        <div className="text-center text-gray-400">
          <p>{t('footer.copyright')}</p>
          <div className="mt-4">
            <Link href="../privacy" className="hover:text-red-300 transition">{t('footer.privacyPolicy')}</Link>
          </div>
        </div>
      </footer>
    </div>
  )
}