import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import Button from '../components/Button';
import DotMatrix from '../components/DotMatrix';
import developerAvatar from '../assets/developer_avatar.jpg';

export default function Hero() {
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

            <Button 
              href="#contacts" 
              variant="primary"
              className="text-sm sm:text-base px-6 py-2.5 shadow-glowSm"
            >
              {t('hero.cta')}
            </Button>
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

            {/* Developer Portrait Container */}
            <div className="relative z-10 w-full max-w-[340px] sm:max-w-[380px]">
              <div className="relative overflow-hidden border border-borderMuted bg-surfaceDark shadow-2xl">
                <img 
                  src={developerAvatar} 
                  alt="Front-End Developer"
                  className="w-full h-[400px] sm:h-[450px] object-cover object-top transition-transform duration-500 hover:scale-[1.02]"
                  loading="eager"
                />

                {/* Overlaid subtle geometric wireframe line */}
                <div className="absolute inset-0 border border-primary/30 pointer-events-none" />
              </div>
            </div>

          </motion.div>
        </div>
      </div>
    </section>
  );
}
