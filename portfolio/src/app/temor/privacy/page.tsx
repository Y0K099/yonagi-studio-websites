'use client';

import PageLayout from '@/components/PageLayout';
import { useTranslation } from '@/hooks/useTranslation';

export default function TemorPrivacyPage() {
  const { t } = useTranslation();

  return (
    <PageLayout>
      <div className="container mx-auto px-6 py-12">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-8 text-white">Temor - {t('privacy.title')}</h1>
          <p className="text-gray-300">
            {t('temor.comingSoon')}
          </p>
        </div>
      </div>
    </PageLayout>
  );
}
