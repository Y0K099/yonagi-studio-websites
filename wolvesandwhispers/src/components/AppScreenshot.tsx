'use client'
import Image from 'next/image';
import { useTranslation } from '../hooks/useTranslation';

export default function AppScreenshot() {
  const { t, locale } = useTranslation();
  
  return (
    <div className="flex justify-center">
      <div className="relative">
        <Image
          src={`/images/app-screenshot-${locale}.png`}
          alt={t('hero.appScreenshot')}
          width={400}
          height={800}
          priority
        />
      </div>
    </div>
  );
}