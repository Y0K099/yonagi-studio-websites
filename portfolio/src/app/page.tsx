'use client'
import AppCard from '../components/AppCard'

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-gray-900 to-slate-900">
      <header className="container mx-auto px-4 py-12 text-center">
        <h1 className="text-6xl font-bold text-white mb-4">
          Yonagi Studio
        </h1>
        <p className="text-xl text-gray-400">
          Multiplayer Games Studio
        </p>
      </header>

      <main className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <AppCard
            title="Wolves & Whispers"
            description="Social deduction werewolf game with mini-games"
            logo="/wolves-logo.png"
            link="/wolvesandwhispers/"
            gradient="from-red-600 to-orange-500"
          />

          <AppCard
            title="Témor"
            description="Real-time multiplayer assassination game"
            logo="/temor-logo.png"
            link="/temor/"
            gradient="from-blue-600 to-cyan-500"
          />
        </div>
      </main>

      <footer className="container mx-auto px-4 py-8 mt-16 text-center text-gray-500">
        <p>© 2026 Yonagi Studio. All rights reserved.</p>
      </footer>
    </div>
  );
}
