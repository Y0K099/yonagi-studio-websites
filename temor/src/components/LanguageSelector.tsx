'use client'
import Link from 'next/link';
import { useParams, usePathname } from 'next/navigation';

export default function LanguageSelector() {
  const params = useParams();
  const pathname = usePathname();
  const currentLocale = params?.locale as string || 'en';
  
  // Extract the path after the locale
  const pathParts = pathname.split('/').filter(Boolean);
  const pathAfterLocale = pathParts.slice(1).join('/');
  const cleanPath = pathAfterLocale ? `/${pathAfterLocale}` : '';
  
  return (
    <div className="flex space-x-2">
      <Link 
        href={`/en${cleanPath}`}
        className={`px-3 py-1 rounded transition ${
          currentLocale === 'en' 
            ? 'bg-red-600 text-white' 
            : 'text-gray-300 hover:text-white hover:bg-red-600/20'
        }`}
      >
        EN
      </Link>
      <Link 
        href={`/fr${cleanPath}`}
        className={`px-3 py-1 rounded transition ${
          currentLocale === 'fr' 
            ? 'bg-red-600 text-white' 
            : 'text-gray-300 hover:text-white hover:bg-red-600/20'
        }`}
      >
        FR
      </Link>
    </div>
  );
}