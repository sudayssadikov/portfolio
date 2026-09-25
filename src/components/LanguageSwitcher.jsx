import React, { useState, useRef, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { ChevronDown, Globe } from 'lucide-react';

export default function LanguageSwitcher({ className = "" }) {
  const { i18n } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  const currentLang = i18n.language ? i18n.language.substring(0, 2).toLowerCase() : 'en';

  const languages = [
    { code: 'en', label: 'EN', fullName: 'English' },
    { code: 'uz', label: 'UZ', fullName: "O'zbekcha" }
  ];

  const handleSelect = (code) => {
    i18n.changeLanguage(code);
    localStorage.setItem('elias_lang', code);
    setIsOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div className={`relative inline-block text-left ${className}`} ref={dropdownRef}>
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-1.5 px-2.5 py-1.5 text-xs sm:text-sm font-semibold tracking-wider text-muted hover:text-white transition-colors border border-transparent hover:border-borderMuted rounded focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-primary"
        aria-haspopup="true"
        aria-expanded={isOpen}
        aria-label="Select Language"
      >
        <span className="text-white uppercase font-mono">{currentLang}</span>
        <ChevronDown 
          className={`w-3.5 h-3.5 text-muted transition-transform duration-200 ${isOpen ? 'rotate-180 text-primary' : ''}`} 
        />
      </button>

      {isOpen && (
        <div 
          className="absolute right-0 mt-1.5 w-28 bg-[#282C33] border border-borderMuted shadow-xl py-1 z-50 animate-in fade-in zoom-in-95 duration-100"
          role="menu"
          aria-orientation="vertical"
        >
          {languages.map((lang) => {
            const isActive = currentLang === lang.code;
            return (
              <button
                key={lang.code}
                type="button"
                onClick={() => handleSelect(lang.code)}
                className={`w-full text-left px-3 py-1.5 text-xs font-mono flex items-center justify-between transition-colors ${
                  isActive 
                    ? 'text-primary bg-white/5 font-bold' 
                    : 'text-muted hover:text-white hover:bg-white/5'
                }`}
                role="menuitem"
              >
                <span>{lang.label}</span>
                <span className="text-[10px] opacity-75">{lang.fullName}</span>
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
}
