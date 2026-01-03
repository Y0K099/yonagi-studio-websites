'use client';

import PageLayout from '@/components/PageLayout';
import { useTranslation } from '@/hooks/useTranslation';

export default function TemorPage() {
  const { t } = useTranslation();

  return (
    <PageLayout basePath="/temor" brandName="Temor">
      <div className="container mx-auto px-6 py-12">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl font-bold mb-6 text-white">Temor</h1>
          <p className="text-xl text-gray-300 mb-8">
            {t('temor.description')}
          </p>
          <div className="bg-white/10 p-8 rounded-lg">
            <p className="text-gray-400">
              {t('temor.comingSoon')}
            </p>
          </div>
        </div>
      </div>
    </PageLayout>
  );
}
