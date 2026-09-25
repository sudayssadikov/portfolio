import React from 'react';

export default function SectionTitle({
  title,
  rightLink,
  rightLinkText,
  className = "",
  lineWidth = "w-24 sm:w-40 md:w-64"
}) {
  return (
    <div className={`flex flex-wrap items-center justify-between gap-4 mb-8 sm:mb-12 ${className}`}>
      <div className="flex items-center gap-3 sm:gap-4">
        <h2 className="text-2xl sm:text-3xl font-medium tracking-tight text-white flex items-center">
          <span className="text-primary mr-1">#</span>
          <span>{title}</span>
        </h2>
        <div className={`h-[1px] bg-primary ${lineWidth}`} aria-hidden="true" />
      </div>

      {rightLink && (
        <a 
          href={rightLink} 
          className="text-xs sm:text-sm font-medium text-white hover:text-primary transition-colors flex items-center gap-1 group focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-primary"
        >
          <span>{rightLinkText}</span>
          <span className="group-hover:translate-x-1 transition-transform">~~&gt;</span>
        </a>
      )}
    </div>
  );
}
