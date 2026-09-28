import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import SectionTitle from '../components/SectionTitle';
import ProjectCard from '../components/ProjectCard';
import { projectsList } from '../data/portfolioData';

export default function Projects() {
  const { t } = useTranslation();

  return (
    <section id="projects" className="py-16 sm:py-24 scroll-mt-20" aria-label="Projects">
      <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <SectionTitle 
          title={t('projects.title')}
          rightLink="https://github.com/sudayssadikov?tab=repositories"
          rightLinkText={t('projects.view_all')}
          lineWidth="w-28 sm:w-60 md:w-96"
        />

        {/* Projects Grid with Sudays's Top Real Repositories */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projectsList.map((project, idx) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.4, delay: idx * 0.08 }}
            >
              <ProjectCard project={project} />
            </motion.div>
          ))}
        </div>

        {/* GitHub Direct Link Button */}
        <div className="mt-10 flex justify-center">
          <a
            href="https://github.com/sudayssadikov?tab=repositories"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs sm:text-sm font-mono font-medium text-white hover:text-primary transition-colors border border-primary px-6 py-2.5 hover:bg-primary/10 shadow-glowSm flex items-center gap-2"
          >
            <span>GitHub @sudayssadikov</span>
            <span>~~&gt;</span>
          </a>
        </div>
      </div>
    </section>
  );
}
