import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import SectionTitle from '../components/SectionTitle';
import SkillBox from '../components/SkillBox';
import DotMatrix from '../components/DotMatrix';
import { skillsData } from '../data/portfolioData';

export default function Skills() {
  const { t } = useTranslation();

  const languages = skillsData.find(s => s.categoryKey === 'languages');
  const databases = skillsData.find(s => s.categoryKey === 'databases');
  const tools = skillsData.find(s => s.categoryKey === 'tools');
  const other = skillsData.find(s => s.categoryKey === 'other');
  const frameworks = skillsData.find(s => s.categoryKey === 'frameworks');

  return (
    <section id="skills" className="py-16 sm:py-24 scroll-mt-20" aria-label="Skills">
      <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <SectionTitle 
          title={t('skills.title')} 
          lineWidth="w-24 sm:w-48 md:w-60"
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-start">
          
          {/* Left Column: Geometric Figures from Figma Spec */}
          <div className="lg:col-span-4 relative hidden lg:block select-none py-4">
            {/* Top-left dot matrix */}
            <div className="absolute top-2 left-6">
              <DotMatrix rows={5} cols={5} gap={10} color="#ABB2BF" />
            </div>

            {/* Overlapping Wireframe Squares */}
            <div className="relative mt-8 ml-16 w-32 h-32 border border-primary/70">
              <div className="absolute -bottom-10 -right-8 w-24 h-24 border border-borderMuted" />
              <div className="absolute top-4 -right-12">
                <DotMatrix rows={4} cols={4} gap={10} color="#ABB2BF" />
              </div>
            </div>

            {/* Lower decorative box with small logo mark */}
            <div className="relative mt-24 ml-8 w-20 h-20 border border-primary/40 flex items-center justify-center">
              <div className="w-8 h-8 border border-borderMuted/60" />
            </div>
          </div>

          {/* Right Column: Bento Grid of Skills */}
          <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 items-start">
            
            {/* Col 1 */}
            <motion.div 
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
              className="flex flex-col gap-4"
            >
              {languages && (
                <SkillBox categoryKey={languages.categoryKey} skills={languages.skills} />
              )}
            </motion.div>

            {/* Col 2 */}
            <motion.div 
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.1 }}
              className="flex flex-col gap-4"
            >
              {databases && (
                <SkillBox categoryKey={databases.categoryKey} skills={databases.skills} />
              )}
              {other && (
                <SkillBox categoryKey={other.categoryKey} skills={other.skills} />
              )}
            </motion.div>

            {/* Col 3 */}
            <motion.div 
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.2 }}
              className="flex flex-col gap-4"
            >
              {tools && (
                <SkillBox categoryKey={tools.categoryKey} skills={tools.skills} />
              )}
              {frameworks && (
                <SkillBox categoryKey={frameworks.categoryKey} skills={frameworks.skills} />
              )}
            </motion.div>

          </div>

        </div>
      </div>
    </section>
  );
}
