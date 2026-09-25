import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Mail, MessageSquare, Copy, Check } from 'lucide-react';
import SectionTitle from '../components/SectionTitle';
import Button from '../components/Button';
import DotMatrix from '../components/DotMatrix';

// Discord SVG Icon
function DiscordIcon({ className }) {
  return (
    <svg className={className} width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
      <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028c.462-.63.874-1.295 1.226-1.994.021-.041.001-.09-.041-.106a13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.929 1.793 8.18 1.793 12.061 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.893.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.028zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z"/>
    </svg>
  );
}

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
          
          {/* Left Column: Freelance prompt + Interactive contact form */}
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
                  className="text-sm px-6 py-2.5"
                >
                  {t('contacts.send_btn')}
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

          {/* Right Column: "Message me here" Card */}
          <div className="lg:col-span-5 relative flex flex-col items-start lg:items-end">
            
            {/* Dot Grid visual in background */}
            <div className="hidden lg:block absolute -top-10 -left-6 z-0">
              <DotMatrix rows={5} cols={5} gap={10} color="#ABB2BF" />
            </div>

            {/* Direct Message Card */}
            <div className="border border-borderMuted p-5 bg-[#282C33] w-full max-w-sm z-10 font-mono shadow-lg">
              <h3 className="text-sm font-semibold text-white mb-4">
                {t('contacts.box_title')}
              </h3>

              <div className="flex flex-col gap-3">
                {/* Discord Link */}
                <div className="flex items-center justify-between p-2 border border-white/5 hover:border-primary/40 bg-white/[0.02] transition-colors group">
                  <div className="flex items-center gap-2.5 text-muted group-hover:text-white">
                    <DiscordIcon className="w-5 h-5 text-muted group-hover:text-primary transition-colors flex-shrink-0" />
                    <span className="text-xs sm:text-sm">{t('contacts.discord')}</span>
                  </div>
                  <button
                    type="button"
                    onClick={() => handleCopy('!Elias#3519', 'discord')}
                    className="text-muted hover:text-white p-1 text-xs focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-primary rounded"
                    title="Copy Discord handle"
                    aria-label="Copy Discord handle"
                  >
                    {copiedItem === 'discord' ? (
                      <Check className="w-4 h-4 text-accent-green" />
                    ) : (
                      <Copy className="w-4 h-4" />
                    )}
                  </button>
                </div>

                {/* Email Link */}
                <div className="flex items-center justify-between p-2 border border-white/5 hover:border-primary/40 bg-white/[0.02] transition-colors group">
                  <a 
                    href="mailto:elias@elias-dev.ml" 
                    className="flex items-center gap-2.5 text-muted group-hover:text-white focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-primary rounded"
                  >
                    <Mail className="w-5 h-5 text-muted group-hover:text-primary transition-colors flex-shrink-0" />
                    <span className="text-xs sm:text-sm">{t('contacts.email')}</span>
                  </a>
                  <button
                    type="button"
                    onClick={() => handleCopy('elias@elias-dev.ml', 'email')}
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
