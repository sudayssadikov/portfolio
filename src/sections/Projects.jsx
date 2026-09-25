import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import SectionTitle from '../components/SectionTitle';
import ProjectCard from '../components/ProjectCard';
import { projectsList } from '../data/portfolioData';

export default function Projects() {
  const { t } = useTranslation();
  const [showAll, setShowAll] = useState(false);

  // Show top 3 by default (matching the 3-column layout on desktop in the Figma node-id=230-1442)
  const displayedProjects = showAll ? projectsList : projectsList.slice(0, 3);

  return (
    <section id="projects" className="py-16 sm:py-24 scroll-mt-20" aria-label="Projects">
      <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <SectionTitle 
          title={t('projects.title')}
          rightLink="#projects"
          rightLinkText={showAll ? t('about.read_less') : t('projects.view_all')}
          lineWidth="w-28 sm:w-60 md:w-96"
        />

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {displayedProjects.map((project, idx) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
            >
              <ProjectCard project={project} />
            </motion.div>
          ))}
        </div>

        {/* Toggle button if not all shown */}
        <div className="mt-8 flex justify-center sm:hidden">
          <button
            type="button"
            onClick={() => setShowAll(!showAll)}
            className="text-xs font-mono font-medium text-primary hover:text-white transition-colors border border-primary px-4 py-2"
          >
            {showAll ? t('about.read_less') : t('projects.view_all')}
          </button>
        </div>
      </div>
    </section>
  );
}
