'use client'
import Image from 'next/image'
import Link from 'next/link'
import { useTranslation } from '../hooks/useTranslation'
import LanguageToggle from '../components/LanguageToggle'
import TabCard from '../components/TabCard'

export default function Home() {
  const { t, locale } = useTranslation()

  return (
    <div className="h-screen bg-black flex flex-col overflow-hidden">
      <header className="w-full px-8 pt-2 flex justify-between items-center relative z-20 shrink-0">
        <h1 className="text-2xl font-bold text-white leading-none">Yonagi Studio</h1>
        <LanguageToggle />
      </header>

      <main className="w-full px-4 -mt-9 relative z-10 flex-grow pb-0">
        <div className="grid md:grid-cols-2 gap-2 w-full h-full max-w-[1800px] mx-auto">
          
          <TabCard title="Wolves & Whispers" gradient={{ from: '#dc2626', to: '#7f1d1d' }} tabPosition="right">
            <div className="grid md:grid-cols-2 gap-8 h-full">
              <div className="rounded-2xl p-4 flex items-center justify-center h-full overflow-hidden">
                <div className="relative w-full h-full min-h-[200px]">
                  <Image
                    src={`/images/app-screenshot-${locale}.png`}
                    alt="Wolves & Whispers"
                    fill
                    className="object-contain"
                  />
                </div>
              </div>
              
              <div className="flex flex-col justify-between py-2 text-white overflow-hidden">
                <p className="text-lg leading-relaxed text-justify overflow-y-auto pr-2">
                  {t('homepage.wolves.description')}
                </p>
                <Link href="/wolvesandwhispers" className="mt-4">
                  <button className="bg-white text-red-600 px-8 py-3 rounded-xl font-bold text-xl hover:scale-105 transition-transform shadow-md">
                    {t('homepage.wolves.discoverButton')} →
                  </button>
                </Link>
              </div>
            </div>
          </TabCard>

          <TabCard title="Témor" gradient={{ from: '#5a25ebff', to: '#581c87' }} tabPosition="left">
            <div className="grid md:grid-cols-2 gap-8 h-full">
              <div className="rounded-2xl p-4 flex items-center justify-center h-full overflow-hidden">
                <div className="relative w-full h-full min-h-[200px] flex items-center justify-center">
                  <img src="/temor-logo.png" alt="Témor" className="max-w-full max-h-[85%] object-contain" />
                </div>
              </div>
              
              <div className="flex flex-col justify-between py-2 text-white overflow-hidden">
                <p className="text-lg leading-relaxed text-justify overflow-y-auto pr-2">
                  {t('homepage.temor.description')}
                </p>
                <Link href="/temor" className="mt-4">
                  <button className="bg-white text-blue-600 px-8 py-3 rounded-xl font-bold text-xl hover:scale-105 transition-transform shadow-md">
                    {t('homepage.temor.discoverButton')} →
                  </button>
                </Link>
              </div>
            </div>
          </TabCard>

        </div>
      </main>

      <footer className="py-2 text-center text-slate-500 text-xs shrink-0">
        <p>© 2026 Yonagi Studio. All rights reserved.</p>
      </footer>
    </div>
  )
}