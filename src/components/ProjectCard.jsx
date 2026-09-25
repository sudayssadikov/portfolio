import React from 'react';
import { useTranslation } from 'react-i18next';
import { FolderGit2, ExternalLink, Github } from 'lucide-react';
import Button from './Button';

export default function ProjectCard({ project, className = "" }) {
  const { t } = useTranslation();
  
  const localizedTitle = t(`projects.items.${project.id}.title`, { defaultValue: project.title });
  const localizedDesc = t(`projects.items.${project.id}.description`, { defaultValue: project.description });

  return (
    <article 
      className={`border border-borderMuted bg-[#282C33] flex flex-col justify-between transition-all duration-300 hover:border-primary group shadow-md ${className}`}
    >
      <div>
        {/* Terminal / Code Window Header (No image as requested: 'rasmlarni ob tasha') */}
        <div className="border-b border-borderMuted px-4 py-2.5 bg-surfaceDark flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-accent-red/80" />
            <span className="w-2.5 h-2.5 rounded-full bg-accent-yellow/80" />
            <span className="w-2.5 h-2.5 rounded-full bg-accent-green/80" />
            <span className="text-[11px] font-mono text-muted/70 ml-2">git/sudayssadikov/{project.title}</span>
          </div>
          <FolderGit2 className="w-4 h-4 text-primary/70 group-hover:text-primary transition-colors" />
        </div>

        {/* Tech Stack Bar */}
        <div className="border-b border-borderMuted px-4 py-2 text-xs font-mono text-muted flex flex-wrap gap-x-3 gap-y-1 bg-[#282C33]/60">
          {project.tags.map((tag) => (
            <span key={tag} className="hover:text-white transition-colors">{tag}</span>
          ))}
        </div>

        {/* Card Body */}
        <div className="p-5">
          <h3 className="text-xl sm:text-2xl font-semibold text-white mb-2.5 group-hover:text-primary transition-colors flex items-center justify-between">
            <span>{localizedTitle}</span>
          </h3>
          <p className="text-xs sm:text-sm text-muted leading-relaxed font-mono">
            {localizedDesc}
          </p>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="p-5 pt-0 flex flex-wrap items-center gap-3">
        {project.githubUrl && (
          <Button 
            href={project.githubUrl} 
            variant="primary" 
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs sm:text-sm py-1.5 px-3 flex items-center gap-1.5"
          >
            <Github className="w-3.5 h-3.5" />
            <span>{t('projects.github_btn')}</span>
          </Button>
        )}

        {project.liveUrl && project.liveUrl !== project.githubUrl && (
          <Button 
            href={project.liveUrl} 
            variant="muted" 
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs sm:text-sm py-1.5 px-3 flex items-center gap-1.5"
          >
            <ExternalLink className="w-3.5 h-3.5" />
            <span>{t('projects.live_btn')}</span>
          </Button>
        )}
      </div>
    </article>
  );
}
