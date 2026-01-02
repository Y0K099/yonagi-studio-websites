'use client'
import { useState } from 'react'
import { useTranslation } from '../hooks/useTranslation'
import emailjs from '@emailjs/browser'

export default function ContactForm() {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
    inGame: '',
    gameId: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError('');
    
    try {
      // Configuration EmailJS
      const PUBLIC_KEY = 'OB6PSqeaIQIcdMA5-';
      const SERVICE_ID = 'service_pariz0j';
      const TEMPLATE_ID = 'template_205hz04';
      
      // Préparer les données pour EmailJS
      const templateParams = {
        from_name: formData.name,
        reply_to: formData.email,
        subject: formData.subject,
        message: formData.message,
        in_game: formData.inGame === 'yes' ? 'Oui' : formData.inGame === 'no' ? 'Non' : 'Non spécifié',
        game_id: formData.inGame === 'yes' ? formData.gameId : ''
      };
      
      // Envoyer l'email avec EmailJS
      await emailjs.send(SERVICE_ID, TEMPLATE_ID, templateParams, PUBLIC_KEY);
      
      // Succès
      setIsSubmitted(true);
      setFormData({ name: '', email: '', subject: '', message: '', inGame: '', gameId: '' });
      setTimeout(() => setIsSubmitted(false), 5000);
      
    } catch (error) {
      console.error('Erreur envoi email:', error);
      setError('Erreur lors de l\'envoi. Veuillez réessayer.');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSubmitted) {
    return (
      <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8">
        <div className="text-center">
          <div className="text-6xl mb-4">✅</div>
          <h2 className="text-2xl font-bold text-white mb-4">{t('contact.success.title')}</h2>
          <p className="text-gray-300 mb-4">
            {t('contact.success.message')}
          </p>
          <p className="text-sm text-gray-400">
            {t('contact.success.note')}
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8">
      <h2 className="text-2xl font-bold text-white mb-6">{t('contact.form.title')}</h2>
      
      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Message d'erreur */}
        {error && (
          <div className="bg-red-500/20 border border-red-500/50 rounded-lg p-4">
            <p className="text-red-300 text-sm">{error}</p>
          </div>
        )}
        
        {/* Nom */}
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
            {t('contact.form.name')} *
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 bg-white/5 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
            placeholder={t('contact.form.namePlaceholder')}
          />
        </div>

        {/* Email */}
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
            {t('contact.form.email')} *
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 bg-white/5 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
            placeholder={t('contact.form.emailPlaceholder')}
          />
        </div>

        {/* En partie ? */}
        <div>
          <label htmlFor="inGame" className="block text-sm font-medium text-gray-300 mb-2">
            {t('contact.form.inGame')} *
          </label>
          <select
            id="inGame"
            name="inGame"
            value={formData.inGame}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 bg-white/5 border border-white/20 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
          >
            <option value="" className="bg-gray-800">-- Sélectionnez --</option>
            <option value="yes" className="bg-gray-800">{t('contact.form.inGameYes')}</option>
            <option value="no" className="bg-gray-800">{t('contact.form.inGameNo')}</option>
          </select>
        </div>

        {/* ID de partie (conditionnel) */}
        {formData.inGame === 'yes' && (
          <div>
            <label htmlFor="gameId" className="block text-sm font-medium text-gray-300 mb-2">
              {t('contact.form.gameId')} *
            </label>
            <input
              type="text"
              id="gameId"
              name="gameId"
              value={formData.gameId}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 bg-white/5 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
              placeholder={t('contact.form.gameIdPlaceholder')}
            />
          </div>
        )}

        {/* Sujet */}
        <div>
          <label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-2">
            {t('contact.form.subject')} *
          </label>
          <input
            type="text"
            id="subject"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 bg-white/5 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
            placeholder={t('contact.form.subjectPlaceholder')}
          />
        </div>

        {/* Message */}
        <div>
          <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
            {t('contact.form.message')} *
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            rows={6}
            className="w-full px-4 py-2 bg-white/5 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent resize-vertical"
            placeholder={t('contact.form.messagePlaceholder')}
          />
        </div>

        {/* Bouton d'envoi */}
        <div className="flex justify-end">
          <button
            type="submit"
            disabled={isSubmitting}
            className="bg-gradient-to-r from-red-600 to-red-700 text-white px-8 py-3 rounded-lg font-semibold hover:scale-105 transition transform disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
          >
            {isSubmitting ? t('contact.form.sending') : t('contact.form.send')}
          </button>
        </div>
      </form>

      <div className="mt-6 pt-6 border-t border-white/20">
        <p className="text-sm text-gray-400 text-center">
          {t('contact.form.directEmail')}
          <a href="mailto:support@yonagistudio.com" className="text-red-300 hover:text-red-200 transition ml-1">
            support@yonagistudio.com
          </a>
        </p>
      </div>
    </div>
  );
}