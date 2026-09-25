import React from 'react';
import Navbar from './components/Navbar';
import SocialRail from './components/SocialRail';
import Hero from './sections/Hero';
import Quote from './sections/Quote';
import Projects from './sections/Projects';
import Skills from './sections/Skills';
import About from './sections/About';
import Contacts from './sections/Contacts';
import Footer from './sections/Footer';

export default function App() {
  return (
    <div className="relative min-h-screen bg-[#282C33] text-[#ABB2BF] selection:bg-[#C778DD] selection:text-white">
      {/* Fixed Left Social Rail on desktop */}
      <SocialRail />

      {/* Main Top Header Navigation */}
      <Navbar />

      {/* Main Content Sections */}
      <main className="relative z-10">
        <Hero />
        <Quote />
        <Projects />
        <Skills />
        <About />
        <Contacts />
      </main>

      {/* Site Footer */}
      <Footer />
    </div>
  );
}
