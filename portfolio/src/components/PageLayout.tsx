'use client'
import Link from 'next/link'
import { useTranslation } from '../hooks/useTranslation'
import LanguageSelector from './LanguageSelector'

interface PageLayoutProps {
  children: React.ReactNode;
}

export default function PageLayout({ children }: PageLayoutProps) {
  const { t } = useTranslation();
  
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Header */}
      <header className="container mx-auto px-4 py-6">
        <nav className="flex justify-between items-center">
          <Link href="/" className="text-2xl font-bold text-white hover:text-purple-300 transition">
            Wolves & Whispers
          </Link>
          <div className="flex items-center space-x-6">
            <Link href="/support" className="text-white hover:text-purple-300 transition">{t('nav.support')}</Link>
            <LanguageSelector />
          </div>
        </nav>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        {children}
      </main>

      {/* Footer */}
      <footer className="container mx-auto px-4 py-8 mt-16 border-t border-white/20">
        <div className="text-center text-gray-400">
          <p>{t('footer.copyright')}</p>
          <div className="mt-4">
            <Link href="/privacy" className="hover:text-white transition">{t('footer.privacyPolicy')}</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}