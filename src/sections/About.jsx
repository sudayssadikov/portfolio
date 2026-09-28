import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { motion, AnimatePresence } from 'framer-motion';
import { FileText } from 'lucide-react';
import SectionTitle from '../components/SectionTitle';
import Button from '../components/Button';
import DotMatrix from '../components/DotMatrix';

export default function About({ onOpenCv }) {
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

            <div className="flex flex-wrap items-center gap-3">
              <Button 
                variant="primary"
                onClick={() => setExpanded(!expanded)}
                className="text-sm px-5 py-2.5"
              >
                {expanded ? t('about.read_less') : t('about.read_more')}
              </Button>

              <button
                type="button"
                onClick={onOpenCv}
                className="inline-flex items-center gap-2 px-4 py-2 border border-borderMuted hover:border-primary bg-white/[0.02] hover:bg-primary/10 text-white font-mono text-sm transition-all duration-200 group cursor-pointer"
              >
                <FileText className="w-4 h-4 text-primary group-hover:scale-110 transition-transform" />
                <span>{t('about.cv_btn')}</span>
              </button>
            </div>
          </div>

          {/* Right Column: Visual Specs Box with overlapping geometric frame (No photo) */}
          <div className="lg:col-span-5 relative flex justify-center select-none font-mono">
            {/* Dot grid decoration top-left */}
            <div className="absolute -top-4 left-4 sm:left-10 z-0">
              <DotMatrix rows={5} cols={5} gap={10} color="#ABB2BF" />
            </div>

            {/* Dot grid decoration bottom-right */}
            <div className="absolute -bottom-4 right-4 sm:right-10 z-20">
              <DotMatrix rows={4} cols={4} gap={12} color="#C778DD" />
            </div>

            {/* Wireframe border frame behind */}
            <div className="absolute -bottom-6 -left-2 sm:left-4 w-40 h-40 border border-primary/60 z-0" />

            {/* Developer Spec / Highlights Box */}
            <div className="relative z-10 w-full max-w-[340px] border border-borderMuted bg-surfaceDark p-6 shadow-2xl transition-all duration-300 hover:border-primary">
              <div className="border-b border-borderMuted pb-3 mb-4 flex items-center justify-between">
                <span className="text-xs uppercase tracking-wider text-primary font-bold"># developer-profile</span>
                <span className="text-[11px] text-muted">React.js</span>
              </div>

              <div className="space-y-3 text-xs sm:text-sm">
                <div className="flex items-center justify-between p-2.5 border border-white/5 bg-white/[0.02]">
                  <span className="text-muted">Origin</span>
                  <span className="text-white font-medium">Uzbekistan 🇺🇿</span>
                </div>

                <div className="flex items-center justify-between p-2.5 border border-white/5 bg-white/[0.02]">
                  <span className="text-muted">Focus</span>
                  <span className="text-primary font-semibold">Front-End (React)</span>
                </div>

                <div className="flex items-center justify-between p-2.5 border border-white/5 bg-white/[0.02]">
                  <span className="text-muted">Core Stack</span>
                  <span className="text-white font-semibold">React, TS, Tailwind</span>
                </div>

                <div className="flex items-center justify-between p-2.5 border border-white/5 bg-white/[0.02]">
                  <span className="text-muted">GitHub</span>
                  <span className="text-accent-green font-semibold">@sudayssadikov</span>
                </div>

                <div className="flex items-center justify-between p-2.5 border border-white/5 bg-white/[0.02]">
                  <span className="text-muted">Status</span>
                  <span className="text-accent-yellow font-medium">Open to projects</span>
                </div>
              </div>

              <div className="mt-5 pt-3 border-t border-borderMuted/40 text-center">
                <span className="text-xs text-muted">Crafting fast, clean web experiences</span>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
