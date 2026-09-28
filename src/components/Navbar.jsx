import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Menu, X } from 'lucide-react';
import Logo from './Logo';
import LanguageSwitcher from './LanguageSwitcher';
import { socialLinks } from '../data/portfolioData';

export default function Navbar({ onOpenCv }) {
  const { t } = useTranslation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on resize to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const navItems = [
    { key: 'home', href: '#home', label: t('nav.home') },
    { key: 'works', href: '#projects', label: t('nav.works') },
    { key: 'about', href: '#about-me', label: t('nav.about') },
    { key: 'skills', href: '#skills', label: t('nav.skills') },
    { key: 'contacts', href: '#contacts', label: t('nav.contacts') },
  ];

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-[#282C33]/90 backdrop-blur-md border-b border-white/5 py-4 shadow-lg' 
          : 'bg-[#282C33]/60 backdrop-blur-sm py-6'
      }`}
    >
      <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Logo */}
        <Logo size={20} />

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6 lg:gap-8" aria-label="Main Navigation">
          <ul className="flex items-center gap-6 lg:gap-8">
            {navItems.map((item) => (
              <li key={item.key}>
                <a
                  href={item.href}
                  className="text-sm font-medium text-muted hover:text-white transition-colors group flex items-center focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-primary rounded px-1"
                >
                  <span className="text-primary mr-0.5 group-hover:text-primary transition-colors">#</span>
                  <span>{item.label}</span>
                </a>
              </li>
            ))}
            <li>
              <button
                type="button"
                onClick={onOpenCv}
                className="text-xs font-mono font-medium px-2.5 py-1 border border-primary/60 text-primary hover:text-white hover:bg-primary/20 transition-all cursor-pointer rounded-sm"
              >
                #cv
              </button>
            </li>
          </ul>

          {/* Language Switcher */}
          <div className="border-l border-borderMuted/40 pl-4">
            <LanguageSwitcher />
          </div>
        </nav>

        {/* Mobile Action Group */}
        <div className="flex items-center gap-3 md:hidden">
          <button
            type="button"
            onClick={onOpenCv}
            className="text-xs font-mono font-medium px-2 py-0.5 border border-primary/60 text-primary hover:text-white hover:bg-primary/20 transition-colors"
          >
            CV
          </button>
          <LanguageSwitcher />
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-1.5 text-muted hover:text-white transition-colors border border-transparent hover:border-borderMuted focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-primary"
            aria-label={mobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X className="w-6 h-6 text-white" /> : <Menu className="w-6 h-6 text-white" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div 
          className="md:hidden fixed inset-x-0 top-[72px] bottom-0 bg-[#282C33] border-t border-borderMuted/30 px-6 py-8 flex flex-col justify-between overflow-y-auto animate-in slide-in-from-top-4 duration-200"
          id="mobile-navigation"
        >
          <ul className="flex flex-col gap-6 text-xl">
            {navItems.map((item) => (
              <li key={item.key}>
                <a
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="block py-1 text-muted hover:text-white transition-colors text-2xl font-medium"
                >
                  <span className="text-primary mr-1">#</span>
                  <span>{item.label}</span>
                </a>
              </li>
            ))}
            <li>
              <button
                type="button"
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenCv();
                }}
                className="block text-left py-1 text-primary hover:text-white transition-colors text-2xl font-medium"
              >
                <span className="text-primary mr-1">#</span>
                <span>{t('nav.cv')} ⤓</span>
              </button>
            </li>
          </ul>

          {/* Mobile Socials bottom */}
          <div className="pt-8 border-t border-borderMuted/30">
            <p className="text-xs uppercase tracking-widest text-muted mb-4 font-mono">Connect</p>
            <div className="flex gap-6 items-center">
              {socialLinks.map((s) => (
                <a
                  key={s.name}
                  href={s.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted hover:text-primary transition-colors text-sm"
                >
                  {s.name}
                </a>
              ))}
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
