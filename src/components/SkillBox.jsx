import React from 'react';
import { useTranslation } from 'react-i18next';

export default function SkillBox({ categoryKey, skills, className = "" }) {
  const { t } = useTranslation();
  const categoryTitle = t(`skills.categories.${categoryKey}`, { defaultValue: categoryKey });

  return (
    <div className={`border border-borderMuted bg-[#282C33] h-fit transition-all duration-200 hover:border-primary/70 ${className}`}>
      {/* Category Header */}
      <div className="border-b border-borderMuted px-3 py-2">
        <h3 className="text-sm font-semibold text-white font-mono">
          {categoryTitle}
        </h3>
      </div>

      {/* Skill Tags */}
      <div className="p-3 flex flex-wrap gap-2 text-xs sm:text-sm text-muted font-mono leading-relaxed">
        {skills.map((skill) => (
          <span 
            key={skill} 
            className="hover:text-white transition-colors cursor-default"
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
}
