import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';

function QuoteIcon({ className }) {
  return (
    <svg 
      className={className} 
      width="24" 
      height="20" 
      viewBox="0 0 24 20" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Quotation mark geometry from Elias Figma spec */}
      <path d="M0 20V11.4286L4.57143 0H9.14286L5.71429 10H9.14286V20H0ZM14.8571 20V11.4286L19.4286 0H24L20.5714 10H24V20H14.8571Z" fill="#ABB2BF"/>
    </svg>
  );
}

export default function Quote() {
  const { t } = useTranslation();

  return (
    <section className="py-12 sm:py-16 overflow-hidden" aria-label="Quote of inspiration">
      <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-8 flex justify-center">
        <motion.div 
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative inline-block max-w-2xl w-full"
        >
          {/* Main Quote Card */}
          <div className="relative border border-borderMuted p-6 sm:p-8 text-center bg-[#282C33]">
            {/* Top-left quotation mark badge */}
            <div className="absolute -top-3.5 left-4 px-2 bg-[#282C33]" aria-hidden="true">
              <QuoteIcon className="text-borderMuted" />
            </div>

            <p className="text-lg sm:text-2xl font-medium text-white tracking-wide leading-relaxed font-mono">
              {t('quote.text')}
            </p>

            {/* Bottom-right quotation mark badge */}
            <div className="absolute -bottom-3 right-4 px-2 bg-[#282C33]" aria-hidden="true">
              <QuoteIcon className="text-borderMuted rotate-180" />
            </div>
          </div>

          {/* Author Badge attached to bottom right border */}
          <div className="flex justify-end">
            <div className="border border-t-0 border-borderMuted px-4 py-2 bg-[#282C33] text-sm sm:text-base text-muted font-mono">
              - {t('quote.author')}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
