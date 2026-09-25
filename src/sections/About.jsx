import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { motion, AnimatePresence } from 'framer-motion';
import SectionTitle from '../components/SectionTitle';
import Button from '../components/Button';
import DotMatrix from '../components/DotMatrix';
import developerAvatar from '../assets/developer_avatar.jpg';

export default function About() {
  const { t } = useTranslation();
  const [expanded, setExpanded] = useState(false);

  return (
    <section id="about-me" className="py-16 sm:py-24 scroll-mt-20" aria-label="About Me">
      <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <SectionTitle 
          title={t('about.title')} 
          lineWidth="w-28 sm:w-60 md:w-80"
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Bio copy */}
          <div className="lg:col-span-7 flex flex-col items-start font-mono">
            <p className="text-muted text-base sm:text-lg mb-6 leading-relaxed">
              {t('about.greeting')}
            </p>

            <p className="text-muted text-sm sm:text-base mb-6 leading-relaxed">
              {t('about.p1')}
            </p>

            <p className="text-muted text-sm sm:text-base mb-8 leading-relaxed">
              {t('about.p2')}
            </p>

            <AnimatePresence>
              {expanded && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden mb-6"
                >
                  <p className="text-muted text-sm sm:text-base leading-relaxed border-l-2 border-primary pl-4 py-1 bg-white/[0.02]">
                    {t('about.more_info')}
                  </p>
                </motion.div>
              )}
            </AnimatePresence>

            <Button 
              variant="primary"
              onClick={() => setExpanded(!expanded)}
              className="text-sm px-5 py-2.5"
            >
              {expanded ? t('about.read_less') : t('about.read_more')}
            </Button>
          </div>

          {/* Right Column: Visual Portrait with overlapping geometric frame */}
          <div className="lg:col-span-5 relative flex justify-center select-none">
            {/* Dot grid decoration top-left */}
            <div className="absolute top-4 left-4 sm:left-10 z-0">
              <DotMatrix rows={5} cols={5} gap={10} color="#ABB2BF" />
            </div>

            {/* Dot grid decoration bottom-right */}
            <div className="absolute -bottom-4 right-4 sm:right-10 z-20">
              <DotMatrix rows={4} cols={4} gap={12} color="#C778DD" />
            </div>

            {/* Wireframe border frame behind */}
            <div className="absolute -bottom-6 -left-2 sm:left-4 w-40 h-40 border border-primary/60 z-0" />

            {/* Portrait Image Box */}
            <div className="relative z-10 w-full max-w-[320px] border border-borderMuted bg-surfaceDark overflow-hidden shadow-xl">
              <img 
                src={developerAvatar} 
                alt="Developer Portrait" 
                className="w-full h-[360px] object-cover object-top transition-transform duration-500 hover:scale-105"
                loading="lazy"
              />
              <div className="border-t border-primary/40 p-2.5 text-center bg-[#282C33]/90">
                <span className="text-xs text-muted font-mono">Tashkent, Uzbekistan 🇺🇿</span>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
