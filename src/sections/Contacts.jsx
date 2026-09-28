import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Mail, Copy, Check, Send } from 'lucide-react';
import { GitHubIcon, TelegramIcon, InstagramIcon } from '../components/Icons';
import SectionTitle from '../components/SectionTitle';
import Button from '../components/Button';
import DotMatrix from '../components/DotMatrix';

export default function Contacts() {
  const { t } = useTranslation();

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    title: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [copiedItem, setCopiedItem] = useState(null);

  const handleCopy = (text, item) => {
    navigator.clipboard.writeText(text);
    setCopiedItem(item);
    setTimeout(() => setCopiedItem(null), 2000);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', email: '', title: '', message: '' });
    }, 4000);
  };

  return (
    <section id="contacts" className="py-16 sm:py-24 scroll-mt-20" aria-label="Contact Section">
      <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <SectionTitle 
          title={t('contacts.title')} 
          lineWidth="w-24 sm:w-48 md:w-60"
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-12 items-start">
          
          {/* Left Column: Direct contact copy + interactive form */}
          <div className="lg:col-span-7 flex flex-col font-mono">
            <p className="text-muted text-sm sm:text-base leading-relaxed mb-8">
              {t('contacts.text')}
            </p>

            {/* Transmission Form */}
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Name */}
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="contact-name" className="text-xs text-muted">
                    {t('contacts.form_name')}
                  </label>
                  <input
                    id="contact-name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder={t('contacts.form_name_placeholder')}
                    className="border border-borderMuted bg-transparent px-3 py-2 text-sm text-white placeholder-muted/50 focus:border-primary focus:outline-none transition-colors"
                  />
                </div>

                {/* Email */}
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="contact-email" className="text-xs text-muted">
                    {t('contacts.form_email')}
                  </label>
                  <input
                    id="contact-email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder={t('contacts.form_email_placeholder')}
                    className="border border-borderMuted bg-transparent px-3 py-2 text-sm text-white placeholder-muted/50 focus:border-primary focus:outline-none transition-colors"
                  />
                </div>
              </div>

              {/* Title / Subject */}
              <div className="flex flex-col gap-1.5">
                <label htmlFor="contact-title" className="text-xs text-muted">
                  {t('contacts.form_title')}
                </label>
                <input
                  id="contact-title"
                  type="text"
                  value={formData.title}
                  onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                  placeholder={t('contacts.form_title_placeholder')}
                  className="border border-borderMuted bg-transparent px-3 py-2 text-sm text-white placeholder-muted/50 focus:border-primary focus:outline-none transition-colors"
                />
              </div>

              {/* Message */}
              <div className="flex flex-col gap-1.5">
                <label htmlFor="contact-message" className="text-xs text-muted">
                  {t('contacts.form_message')}
                </label>
                <textarea
                  id="contact-message"
                  required
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder={t('contacts.form_message_placeholder')}
                  className="border border-borderMuted bg-transparent px-3 py-2 text-sm text-white placeholder-muted/50 focus:border-primary focus:outline-none transition-colors resize-y min-h-[100px]"
                />
              </div>

              {/* Submit Button & Status */}
              <div className="flex items-center gap-4 mt-2">
                <Button 
                  type="submit" 
                  variant="primary"
                  className="text-sm px-6 py-2.5 flex items-center gap-2"
                >
                  <Send className="w-4 h-4" />
                  <span>{t('contacts.send_btn')}</span>
                </Button>

                {submitted && (
                  <span className="text-xs text-accent-green font-mono flex items-center gap-1.5 animate-in fade-in">
                    <Check className="w-4 h-4 text-accent-green" />
                    {t('contacts.success_msg')}
                  </span>
                )}
              </div>
            </form>
          </div>

          {/* Right Column: "Message me here" Card - Only Telegram, Instagram, GitHub, Email */}
          <div className="lg:col-span-5 relative flex flex-col items-start lg:items-end">
            
            {/* Dot Grid visual */}
            <div className="hidden lg:block absolute -top-10 -left-6 z-0">
              <DotMatrix rows={5} cols={5} gap={10} color="#ABB2BF" />
            </div>

            {/* Direct Contact Card */}
            <div className="border border-borderMuted p-5 bg-[#282C33] w-full max-w-sm z-10 font-mono shadow-lg">
              <h3 className="text-sm font-semibold text-white mb-4">
                {t('contacts.box_title')}
              </h3>

              <div className="flex flex-col gap-3">
                {/* Telegram Link */}
                <div className="flex items-center justify-between p-2.5 border border-white/5 hover:border-primary/40 bg-white/[0.02] transition-colors group">
                  <a 
                    href="https://t.me/sudays700" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center gap-2.5 text-muted group-hover:text-white"
                  >
                    <TelegramIcon className="w-5 h-5 text-primary flex-shrink-0" />
                    <span className="text-xs sm:text-sm">{t('contacts.telegram')}</span>
                  </a>
                  <button
                    type="button"
                    onClick={() => handleCopy('@sudays700', 'telegram')}
                    className="text-muted hover:text-white p-1 text-xs focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-primary rounded"
                    title="Copy Telegram username"
                    aria-label="Copy Telegram username"
                  >
                    {copiedItem === 'telegram' ? (
                      <Check className="w-4 h-4 text-accent-green" />
                    ) : (
                      <Copy className="w-4 h-4" />
                    )}
                  </button>
                </div>

                {/* Instagram Link */}
                <div className="flex items-center justify-between p-2.5 border border-white/5 hover:border-primary/40 bg-white/[0.02] transition-colors group">
                  <a 
                    href="https://instagram.com/suudays7" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center gap-2.5 text-muted group-hover:text-white"
                  >
                    <InstagramIcon className="w-5 h-5 text-primary flex-shrink-0" />
                    <span className="text-xs sm:text-sm">{t('contacts.instagram')}</span>
                  </a>
                  <button
                    type="button"
                    onClick={() => handleCopy('@suudays7', 'instagram')}
                    className="text-muted hover:text-white p-1 text-xs focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-primary rounded"
                    title="Copy Instagram username"
                    aria-label="Copy Instagram username"
                  >
                    {copiedItem === 'instagram' ? (
                      <Check className="w-4 h-4 text-accent-green" />
                    ) : (
                      <Copy className="w-4 h-4" />
                    )}
                  </button>
                </div>

                {/* GitHub Link */}
                <div className="flex items-center justify-between p-2.5 border border-white/5 hover:border-primary/40 bg-white/[0.02] transition-colors group">
                  <a 
                    href="https://github.com/sudayssadikov" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center gap-2.5 text-muted group-hover:text-white"
                  >
                    <GitHubIcon className="w-5 h-5 text-primary flex-shrink-0" />
                    <span className="text-xs sm:text-sm">{t('contacts.github')}</span>
                  </a>
                  <button
                    type="button"
                    onClick={() => handleCopy('sudayssadikov', 'github')}
                    className="text-muted hover:text-white p-1 text-xs focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-primary rounded"
                    title="Copy GitHub username"
                    aria-label="Copy GitHub username"
                  >
                    {copiedItem === 'github' ? (
                      <Check className="w-4 h-4 text-accent-green" />
                    ) : (
                      <Copy className="w-4 h-4" />
                    )}
                  </button>
                </div>

                {/* Email Link */}
                <div className="flex items-center justify-between p-2.5 border border-white/5 hover:border-primary/40 bg-white/[0.02] transition-colors group">
                  <a 
                    href="mailto:sudayssadikov@gmail.com" 
                    className="flex items-center gap-2.5 text-muted group-hover:text-white"
                  >
                    <Mail className="w-5 h-5 text-primary flex-shrink-0" />
                    <span className="text-xs sm:text-sm">{t('contacts.email')}</span>
                  </a>
                  <button
                    type="button"
                    onClick={() => handleCopy('sudayssadikov@gmail.com', 'email')}
                    className="text-muted hover:text-white p-1 text-xs focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-primary rounded"
                    title="Copy Email address"
                    aria-label="Copy Email address"
                  >
                    {copiedItem === 'email' ? (
                      <Check className="w-4 h-4 text-accent-green" />
                    ) : (
                      <Copy className="w-4 h-4" />
                    )}
                  </button>
                </div>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
