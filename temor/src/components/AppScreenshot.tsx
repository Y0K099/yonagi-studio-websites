'use client'
import Image from 'next/image';
import { useTranslation } from '../hooks/useTranslation';

export default function AppScreenshot() {
  const { t } = useTranslation();

  return (
    <div className="flex justify-center items-center p-8">
      <Image
        src="/images/temor-logo.png"
        alt={t('hero.appScreenshot')}
        width={256}
        height={256}
        priority
        className="rounded-3xl shadow-2xl"
      />
    </div>
  );
}