import React from 'react';

export default function Button({
  children,
  variant = 'primary',
  href,
  onClick,
  type = 'button',
  className = '',
  target,
  rel,
  ...props
}) {
  const baseClasses = "inline-flex items-center justify-center gap-2 px-4 py-2 text-sm font-medium font-mono transition-all duration-200 cursor-pointer select-none focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-primary";
  
  const variants = {
    primary: "border border-primary text-white hover:bg-primary/15 hover:shadow-glowSm active:translate-y-[1px]",
    muted: "border border-borderMuted text-muted hover:border-white hover:text-white hover:bg-white/5 active:translate-y-[1px]",
    ghost: "text-muted hover:text-white hover:bg-surfaceDark active:translate-y-[1px]"
  };

  const combinedClass = `${baseClasses} ${variants[variant] || variants.primary} ${className}`;

  if (href) {
    return (
      <a 
        href={href} 
        className={combinedClass} 
        target={target} 
        rel={target === '_blank' ? 'noopener noreferrer' : rel}
        {...props}
      >
        {children}
      </a>
    );
  }

  return (
    <button 
      type={type} 
      onClick={onClick} 
      className={combinedClass} 
      {...props}
    >
      {children}
    </button>
  );
}
