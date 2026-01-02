import { useParams } from 'next/navigation';
import en from '../../locales/en.json';
import fr from '../../locales/fr.json';

const translations: Record<string, typeof en> = {
  en,
  fr,
};

export function useTranslation() {
  const params = useParams();
  const locale = (params?.locale as string) || 'en';

  const t = (key: string): string => {
    const keys = key.split('.');
    let translation: unknown = translations[locale];
    
    for (const k of keys) {
      if (translation && typeof translation === 'object' && k in translation) {
        translation = (translation as Record<string, unknown>)[k];
      } else {
        return key;
      }
    }
    
    return (typeof translation === 'string' ? translation : key);
  };

  return { t, locale };
}