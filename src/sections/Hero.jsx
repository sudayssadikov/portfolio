import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { FileDown } from 'lucide-react';
import Button from '../components/Button';
import DotMatrix from '../components/DotMatrix';

export default function Hero({ onOpenCv }) {
  const { t } = useTranslation();

  return (
    <section 
      id="home" 
      className="relative pt-32 pb-16 sm:pt-40 sm:pb-24 overflow-hidden"
      aria-label="Introduction Hero"
    >
      <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Intro & Call to Action */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 flex flex-col items-start z-10"
          >
            <h1 className="text-3xl sm:text-4xl lg:text-[2.65rem] font-semibold text-white leading-snug sm:leading-tight mb-6">
              {t('hero.title_start')}
              <span className="text-primary">{t('hero.web_designer')}</span>
              {t('hero.and')}
              <span className="text-primary">{t('hero.frontend_dev')}</span>
            </h1>

            <p className="text-sm sm:text-base text-muted font-mono leading-relaxed mb-8 max-w-xl">
              {t('hero.subtitle')}
            </p>

            <div className="flex flex-wrap items-center gap-3.5">
              <Button 
                href="#contacts" 
                variant="primary"
                className="text-sm sm:text-base px-6 py-2.5 shadow-glowSm"
              >
                {t('hero.cta')}
              </Button>

              <button
                type="button"
                onClick={onOpenCv}
                className="inline-flex items-center gap-2 px-5 py-2.5 border border-primary/70 bg-[#282C33] hover:bg-primary/15 text-white font-mono text-sm sm:text-base transition-all duration-200 group shadow-sm hover:border-primary cursor-pointer"
              >
                <FileDown className="w-4 h-4 text-primary group-hover:translate-y-0.5 transition-transform" />
                <span>{t('hero.cv_btn')}</span>
              </button>
            </div>
          </motion.div>

          {/* Right Column: Visual Portrait & Geometric Design Accents */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="lg:col-span-5 relative flex flex-col items-center select-none"
          >
            {/* Geometric accents in background */}
            {/* Top-left decorative logo outline */}
            <div 
              className="absolute -top-6 -left-6 w-24 h-24 border-2 border-primary/70 z-0 hidden sm:block pointer-events-none" 
              aria-hidden="true" 
            />

            {/* Bottom-right 5x5 Dot Matrix */}
            <div className="absolute -bottom-4 right-2 sm:-right-4 z-10 pointer-events-none">
              <DotMatrix rows={5} cols={5} gap={12} color="#ABB2BF" />
            </div>

            {/* Developer Code Terminal Window (No photo as requested) */}
            <div className="relative z-10 w-full max-w-[360px] sm:max-w-[420px] font-mono">
              <div className="border border-borderMuted bg-surfaceDark shadow-2xl overflow-hidden transition-all duration-300 hover:border-primary">
                {/* Terminal Header */}
                <div className="border-b border-borderMuted px-4 py-2.5 bg-[#1E2127] flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-accent-red" />
                    <span className="w-2.5 h-2.5 rounded-full bg-accent-yellow" />
                    <span className="w-2.5 h-2.5 rounded-full bg-accent-green" />
                    <span className="text-[11px] text-muted ml-2">developer.config.ts</span>
                  </div>
                  <span className="text-[11px] text-primary font-bold">React.js</span>
                </div>

                {/* Code Body */}
                <div className="p-5 text-xs sm:text-sm leading-relaxed space-y-2 bg-[#282C33]/95">
                  <p>
                    <span className="text-primary">const</span>{' '}
                    <span className="text-accent-yellow">developer</span> = &#123;
                  </p>
                  <p className="pl-4">
                    <span className="text-muted">name:</span>{' '}
                    <span className="text-accent-green">'Sudays Sadikov'</span>,
                  </p>
                  <p className="pl-4">
                    <span className="text-muted">role:</span>{' '}
                    <span className="text-accent-green">'Front-End Developer'</span>,
                  </p>
                  <p className="pl-4">
                    <span className="text-muted">specialty:</span>{' '}
                    <span className="text-accent-blue">['React', 'TypeScript', 'Tailwind']</span>,
                  </p>
                  <p className="pl-4">
                    <span className="text-muted">origin:</span>{' '}
                    <span className="text-accent-green">'Uzbekistan 🇺🇿'</span>,
                  </p>
                  <p className="pl-4">
                    <span className="text-muted">philosophy:</span>{' '}
                    <span className="text-accent-yellow">'Clean UI/UX &amp; Fast Web'</span>,
                  </p>
                  <p className="pl-4">
                    <span className="text-muted">available:</span>{' '}
                    <span className="text-primary font-bold">true</span>
                  </p>
                  <p>&#125;;</p>

                  <div className="pt-3 mt-2 border-t border-white/5 flex items-center justify-between text-[11px] text-muted">
                    <span className="flex items-center gap-1.5 text-accent-green font-medium">
                      <span className="w-2 h-2 rounded-full bg-accent-green animate-ping" />
                      Active &amp; Ready
                    </span>
                    <span className="text-muted/70">@sudayssadikov</span>
                  </div>
                </div>
              </div>
            </div>

          </motion.div>
        </div>
      </div>
    </section>
  );
}
