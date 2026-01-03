import { cookies, headers } from 'next/headers';

type Locale = 'en' | 'fr';

/**
 * Detects the user's preferred locale from:
 * 1. Cookie (if user has manually selected a language)
 * 2. Accept-Language header (browser language)
 * 3. Default to 'en'
 */
export async function detectLocale(): Promise<Locale> {
  // First, check if user has already selected a language (saved in cookie)
  const cookieStore = await cookies();
  const cookieLocale = cookieStore.get('NEXT_LOCALE')?.value;

  if (cookieLocale === 'fr' || cookieLocale === 'en') {
    return cookieLocale;
  }

  // If no cookie, detect from browser's Accept-Language header
  const headersList = await headers();
  const acceptLanguage = headersList.get('accept-language');

  if (acceptLanguage) {
    // Accept-Language format: "fr-FR,fr;q=0.9,en-US;q=0.8,en;q=0.7"
    // Check if French is preferred
    const languages = acceptLanguage.toLowerCase().split(',');
    for (const lang of languages) {
      const code = lang.split(';')[0].trim().split('-')[0];
      if (code === 'fr') {
        return 'fr';
      }
      // If we find English first, use it
      if (code === 'en') {
        return 'en';
      }
    }
  }

  // Default to English
  return 'en';
}
