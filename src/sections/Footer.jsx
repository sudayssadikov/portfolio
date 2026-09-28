import React from 'react';
import { useTranslation } from 'react-i18next';
import { Mail } from 'lucide-react';
import Logo from '../components/Logo';
import { GitHubIcon, TelegramIcon, InstagramIcon } from '../components/Icons';

export default function Footer() {
  const { t } = useTranslation();

  return (
    <footer className="border-t border-borderMuted/30 pt-12 pb-8 mt-12 bg-[#282C33]" aria-label="Footer">
      <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Upper Row: Brand & Media */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6 pb-8">
          
          {/* Brand Info */}
          <div className="flex flex-col gap-2 font-mono">
            <div className="flex flex-wrap items-center gap-4">
              <Logo size={20} />
              <a 
                href="mailto:sudayssadikov@gmail.com" 
                className="text-xs sm:text-sm text-muted hover:text-white transition-colors"
              >
                sudayssadikov@gmail.com
              </a>
            </div>
            <p className="text-xs sm:text-sm text-muted">
              {t('footer.desc')}
            </p>
          </div>

          {/* Social Media - Only GitHub, Telegram, Instagram, Mail */}
          <div className="flex flex-col sm:items-end gap-2 font-mono">
            <h4 className="text-sm font-semibold text-white tracking-wider">
              {t('footer.media')}
            </h4>
            <div className="flex items-center gap-4 text-muted">
              <a 
                href="https://github.com/sudayssadikov" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="hover:text-primary transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-primary rounded p-1"
                aria-label="GitHub"
                title="GitHub"
              >
                <GitHubIcon className="w-5 h-5" />
              </a>
              <a 
                href="https://t.me/sudays700" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="hover:text-primary transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-primary rounded p-1"
                aria-label="Telegram"
                title="Telegram"
              >
                <TelegramIcon className="w-5 h-5" />
              </a>
              <a 
                href="https://instagram.com/suudays7" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="hover:text-primary transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-primary rounded p-1"
                aria-label="Instagram"
                title="Instagram"
              >
                <InstagramIcon className="w-5 h-5" />
              </a>
              <a 
                href="mailto:sudayssadikov@gmail.com" 
                className="hover:text-primary transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-primary rounded p-1"
                aria-label="Email"
                title="Email"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>

        </div>

        {/* Lower Row: Copyright */}
        <div className="border-t border-white/5 pt-6 text-center font-mono">
          <p className="text-xs text-muted">
            {t('footer.copyright')}
          </p>
        </div>

      </div>
    </footer>
  );
}
