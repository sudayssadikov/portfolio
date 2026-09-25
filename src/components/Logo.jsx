import React from 'react';

export default function Logo({ size = 20, showText = true, className = "" }) {
  return (
    <a 
      href="#home" 
      className={`inline-flex items-center gap-2 font-bold tracking-tight text-white hover:text-primary transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-primary ${className}`}
      aria-label="Sudays Portfolio Home"
    >
      <svg 
        width={size} 
        height={size} 
        viewBox="0 0 16 16" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
        className="flex-shrink-0"
      >
        {/* Diamond / cube motif */}
        <rect x="0.707107" y="5.36396" width="6.58" height="6.58" transform="rotate(-45 0.707107 5.36396)" stroke="#C778DD" strokeWidth="1.5" />
        <rect x="5.65685" y="10.3137" width="6.58" height="6.58" transform="rotate(-45 5.65685 10.3137)" stroke="#FFFFFF" strokeWidth="1.5" />
        <rect x="5.65685" y="5.36396" width="3" height="3" transform="rotate(-45 5.65685 5.36396)" fill="#C778DD" />
      </svg>
      {showText && <span className="font-semibold text-white tracking-wider text-base">Sudays</span>}
    </a>
  );
}
