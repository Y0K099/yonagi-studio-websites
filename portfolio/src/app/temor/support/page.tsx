'use client';

import PageLayout from '@/components/PageLayout';
import ContactForm from '@/components/ContactForm';
import { useTranslation } from '@/hooks/useTranslation';

export default function TemorSupportPage() {
  const { t } = useTranslation();

  return (
    <PageLayout basePath="/temor" brandName="Temor">
      <div className="container mx-auto px-6 py-12">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl font-bold text-white mb-8 text-center">
            {t('support.title')}
          </h1>

          <p className="text-xl text-gray-300 mb-12 text-center">
            {t('support.subtitle')}
          </p>

          {/* Contact Form */}
          <div className="max-w-2xl mx-auto">
            <ContactForm
              serviceId="service_v7p3r6b"
              templateId="template_so9o53z"
              appName="Temor"
            />
          </div>
        </div>
      </div>
    </PageLayout>
  );
}
