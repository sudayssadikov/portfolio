import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Printer, ExternalLink, Copy, Check, FileText } from 'lucide-react';
import { GitHubIcon, TelegramIcon, InstagramIcon } from './Icons';

export default function CvModal({ isOpen, onClose }) {
  const { t, i18n } = useTranslation();
  const [copied, setCopied] = useState(false);

  // Close on Escape key press
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

  const handleCopyText = () => {
    const resumeText = `
SUDAYS SADIKOV — FRONT-END DEVELOPER (REACT.JS)
Origin: Uzbekistan
GitHub: https://github.com/sudayssadikov
Telegram: https://t.me/sudays700 (@sudays700)
Instagram: https://instagram.com/suudays7 (@suudays7)
Email: sudayssadikov@gmail.com

SUMMARY:
Dedicated Front-End Developer from Uzbekistan specializing exclusively in React ecosystem. Experienced in building responsive, high-performance web applications with clean, maintainable architecture.

CORE SKILLS:
- Languages: JavaScript (ES6+), TypeScript, HTML5, CSS3
- Frameworks & Libraries: React.js, React Router, Vite, Zustand, Redux
- Styling: Tailwind CSS, CSS Modules, SCSS, Framer Motion
- Tools: Git, GitHub, VS Code, Figma, REST API, Axios, Vercel

FEATURED PROJECTS:
1. lab.verce (React, TypeScript, Tailwind CSS, Vite)
   Live: https://lab-verce.vercel.app
   GitHub: https://github.com/sudayssadikov/lab.verce

2. retseptuz (React, JavaScript, Tailwind, Interactive UI)
   Live: https://retseptuz.vercel.app
   GitHub: https://github.com/sudayssadikov/retseptuz

3. dentify clinic (React, Tailwind CSS, Vite, Responsive UI)
   Live: https://dentify-clinic.vercel.app
   GitHub: https://github.com/sudayssadikov/dentify-clinic
`.trim();

    navigator.clipboard.writeText(resumeText);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handlePrint = () => {
    // Open printable HTML page for pristine PDF printing
    const printWindow = window.open('/cv.html', '_blank');
    if (printWindow) {
      printWindow.focus();
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm"
          />

          {/* Modal Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 15 }}
            transition={{ duration: 0.25 }}
            className="relative z-10 w-full max-w-3xl bg-[#1E2227] border border-borderMuted shadow-2xl overflow-hidden my-auto max-h-[90vh] flex flex-col font-mono"
          >
            {/* Modal Header Bar */}
            <div className="border-b border-borderMuted px-4 py-3 bg-[#181A1F] flex items-center justify-between select-none">
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-accent-red cursor-pointer" onClick={onClose} />
                <span className="w-3 h-3 rounded-full bg-accent-yellow" />
                <span className="w-3 h-3 rounded-full bg-accent-green" />
                <div className="flex items-center gap-1.5 ml-2 text-xs text-muted">
                  <FileText className="w-3.5 h-3.5 text-primary" />
                  <span>sudays_sadikov_cv.ts [Preview]</span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex items-center gap-2">
                <button
                  onClick={handlePrint}
                  title={t('cv.print_btn')}
                  className="px-2.5 py-1 text-xs text-white bg-primary/20 hover:bg-primary/30 border border-primary/50 transition-colors flex items-center gap-1.5"
                >
                  <Printer className="w-3.5 h-3.5 text-primary" />
                  <span className="hidden sm:inline">{t('cv.print_btn')}</span>
                </button>

                <a
                  href="/cv.html"
                  target="_blank"
                  rel="noopener noreferrer"
                  title={t('cv.download_btn')}
                  className="px-2.5 py-1 text-xs text-muted hover:text-white border border-borderMuted hover:border-primary transition-colors flex items-center gap-1.5"
                >
                  <ExternalLink className="w-3.5 h-3.5" />
                  <span className="hidden sm:inline">{t('cv.download_btn')}</span>
                </a>

                <button
                  onClick={handleCopyText}
                  title={t('cv.copy_btn')}
                  className="px-2.5 py-1 text-xs text-muted hover:text-white border border-borderMuted hover:border-primary transition-colors flex items-center gap-1.5"
                >
                  {copied ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-accent-green" />
                      <span className="hidden sm:inline text-accent-green">{t('cv.copied')}</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span className="hidden sm:inline">{t('cv.copy_btn')}</span>
                    </>
                  )}
                </button>

                <button
                  onClick={onClose}
                  className="p-1 text-muted hover:text-white transition-colors ml-1"
                  aria-label={t('cv.close')}
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Modal Body / Scrollable Resume */}
            <div className="p-6 sm:p-8 overflow-y-auto space-y-6 text-sm text-[#ABB2BF] leading-relaxed">
              
              {/* Header profile */}
              <div className="border-b border-borderMuted/60 pb-5">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                  <div>
                    <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-wide">
                      Sudays Sadikov
                    </h2>
                    <p className="text-primary font-semibold text-base mt-0.5">
                      {t('cv.role')}
                    </p>
                  </div>
                  <div className="text-xs text-muted font-mono bg-white/[0.03] border border-borderMuted px-3 py-1.5 rounded self-start sm:self-auto">
                    📍 {t('cv.location')} 🇺🇿
                  </div>
                </div>

                {/* Direct Contacts Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2.5 mt-4 text-xs">
                  <a
                    href="https://github.com/sudayssadikov"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 text-muted hover:text-white transition-colors"
                  >
                    <GitHubIcon className="w-3.5 h-3.5 text-primary" />
                    <span>sudayssadikov</span>
                  </a>

                  <a
                    href="https://t.me/sudays700"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 text-muted hover:text-white transition-colors"
                  >
                    <TelegramIcon className="w-3.5 h-3.5 text-primary" />
                    <span>@sudays700</span>
                  </a>

                  <a
                    href="https://instagram.com/suudays7"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 text-muted hover:text-white transition-colors"
                  >
                    <InstagramIcon className="w-3.5 h-3.5 text-primary" />
                    <span>@suudays7</span>
                  </a>

                  <a
                    href="mailto:sudayssadikov@gmail.com"
                    className="flex items-center gap-1.5 text-muted hover:text-white transition-colors"
                  >
                    <span className="text-primary font-bold">@</span>
                    <span className="truncate">sudayssadikov@gmail.com</span>
                  </a>
                </div>
              </div>

              {/* Summary */}
              <div>
                <h3 className="text-xs uppercase tracking-wider text-white font-bold mb-2 flex items-center gap-2">
                  <span className="text-primary">#</span> {t('cv.summary_title')}
                </h3>
                <p className="text-xs sm:text-sm text-muted leading-relaxed font-sans sm:font-mono">
                  {t('cv.summary')}
                </p>
              </div>

              {/* Core Skills */}
              <div>
                <h3 className="text-xs uppercase tracking-wider text-white font-bold mb-3 flex items-center gap-2">
                  <span className="text-primary">#</span> {t('cv.skills_title')}
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                  <div className="border border-borderMuted p-3 bg-white/[0.015]">
                    <div className="text-primary font-semibold mb-1">Languages & Core</div>
                    <div className="text-muted">JavaScript (ES6+), TypeScript, HTML5, Semantic CSS3</div>
                  </div>
                  <div className="border border-borderMuted p-3 bg-white/[0.015]">
                    <div className="text-primary font-semibold mb-1">Frameworks & State</div>
                    <div className="text-muted">React.js, React Router, Vite, Zustand, Redux</div>
                  </div>
                  <div className="border border-borderMuted p-3 bg-white/[0.015]">
                    <div className="text-primary font-semibold mb-1">Styling & UI</div>
                    <div className="text-muted">Tailwind CSS, SCSS, CSS Modules, Framer Motion</div>
                  </div>
                  <div className="border border-borderMuted p-3 bg-white/[0.015]">
                    <div className="text-primary font-semibold mb-1">Tools & APIs</div>
                    <div className="text-muted">Git, GitHub, VS Code, REST API, Axios, Vercel</div>
                  </div>
                </div>
              </div>

              {/* Featured Projects */}
              <div>
                <h3 className="text-xs uppercase tracking-wider text-white font-bold mb-3 flex items-center gap-2">
                  <span className="text-primary">#</span> {t('cv.projects_title')}
                </h3>
                
                <div className="space-y-3">
                  {/* lab.verce */}
                  <div className="border border-borderMuted p-3.5 bg-white/[0.015] hover:border-primary/60 transition-colors">
                    <div className="flex items-center justify-between">
                      <span className="text-white font-bold text-sm">1. lab.verce</span>
                      <div className="flex items-center gap-3 text-xs">
                        <a href="https://lab-verce.vercel.app" target="_blank" rel="noopener noreferrer" className="text-accent-blue hover:underline">
                          Live ↗
                        </a>
                        <a href="https://github.com/sudayssadikov/lab.verce" target="_blank" rel="noopener noreferrer" className="text-muted hover:text-white">
                          GitHub ↗
                        </a>
                      </div>
                    </div>
                    <div className="text-[11px] text-accent-yellow mt-0.5">React · TypeScript · Tailwind CSS · Vite</div>
                    <p className="text-xs text-muted mt-1.5">
                      {i18n.language === 'uz' 
                        ? "Ilg'or, tezkor va modulli arxitekturaga ega zamonaviy veb-platforma." 
                        : "High-performance React & TypeScript web platform with advanced modular architecture."}
                    </p>
                  </div>

                  {/* retseptuz */}
                  <div className="border border-borderMuted p-3.5 bg-white/[0.015] hover:border-primary/60 transition-colors">
                    <div className="flex items-center justify-between">
                      <span className="text-white font-bold text-sm">2. retseptuz</span>
                      <div className="flex items-center gap-3 text-xs">
                        <a href="https://retseptuz.vercel.app" target="_blank" rel="noopener noreferrer" className="text-accent-blue hover:underline">
                          Live ↗
                        </a>
                        <a href="https://github.com/sudayssadikov/retseptuz" target="_blank" rel="noopener noreferrer" className="text-muted hover:text-white">
                          GitHub ↗
                        </a>
                      </div>
                    </div>
                    <div className="text-[11px] text-accent-yellow mt-0.5">React · JavaScript · Tailwind · Interactive UI</div>
                    <p className="text-xs text-muted mt-1.5">
                      {i18n.language === 'uz'
                        ? "Milliy va jahon taomlari retseptlari, toifalar filtri va aqlli qidiruv tizimiga ega portal."
                        : "Interactive culinary recipe discovery platform with ingredient filtering and responsive search."}
                    </p>
                  </div>

                  {/* dentify clinic */}
                  <div className="border border-borderMuted p-3.5 bg-white/[0.015] hover:border-primary/60 transition-colors">
                    <div className="flex items-center justify-between">
                      <span className="text-white font-bold text-sm">3. dentify clinic</span>
                      <div className="flex items-center gap-3 text-xs">
                        <a href="https://dentify-clinic.vercel.app" target="_blank" rel="noopener noreferrer" className="text-accent-blue hover:underline">
                          Live ↗
                        </a>
                        <a href="https://github.com/sudayssadikov/dentify-clinic" target="_blank" rel="noopener noreferrer" className="text-muted hover:text-white">
                          GitHub ↗
                        </a>
                      </div>
                    </div>
                    <div className="text-[11px] text-accent-yellow mt-0.5">React · Tailwind CSS · Vite · Responsive UI</div>
                    <p className="text-xs text-muted mt-1.5">
                      {i18n.language === 'uz'
                        ? "Stomatologiya va tibbiy klinika xizmatlari hamda onlayn bron qilish tizimiga ega veb-ilova."
                        : "Modern dental clinic web application featuring appointment booking and doctor schedules."}
                    </p>
                  </div>
                </div>
              </div>

              {/* Languages */}
              <div className="border-t border-borderMuted/40 pt-4 flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-xs">
                <div>
                  <span className="text-white font-semibold">{t('cv.languages_title')}: </span>
                  <span className="text-muted">{t('cv.languages_val')}</span>
                </div>
                <div className="text-[11px] text-primary/80">
                  ⚡ Ready for Remote / Local Roles
                </div>
              </div>

            </div>

            {/* Modal Bottom Bar */}
            <div className="border-t border-borderMuted px-6 py-3 bg-[#181A1F] flex items-center justify-between text-xs text-muted">
              <span>Press <kbd className="px-1.5 py-0.5 bg-white/10 text-white rounded text-[10px]">ESC</kbd> to exit</span>
              <button
                onClick={onClose}
                className="px-4 py-1.5 bg-primary text-[#282C33] font-bold hover:bg-[#d88fed] transition-colors"
              >
                {t('cv.close')}
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
