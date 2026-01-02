'use client'
import { useTranslation } from '../hooks/useTranslation';

export default function LanguageSelector() {
  const { locale, setLocale } = useTranslation();

  return (
    <div className="flex space-x-2">
      <button
        onClick={() => setLocale('en')}
        className={`px-3 py-1 rounded transition ${
          locale === 'en'
            ? 'bg-red-600 text-white'
            : 'text-gray-300 hover:text-white hover:bg-red-600/20'
        }`}
      >
        EN
      </button>
      <button
        onClick={() => setLocale('fr')}
        className={`px-3 py-1 rounded transition ${
          locale === 'fr'
            ? 'bg-red-600 text-white'
            : 'text-gray-300 hover:text-white hover:bg-red-600/20'
        }`}
      >
        FR
      </button>
    </div>
  );
}