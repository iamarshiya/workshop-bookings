import React from 'react';

export const Button = ({ children, variant = 'primary', className = '', ...props }) => {
  const base = "px-6 py-2.5 rounded-full font-medium transition-all duration-300 active:scale-95 text-sm md:text-base";
  const variants = {
    primary: "bg-primary text-white hover:bg-opacity-90",
    outline: "border border-primary text-primary hover:bg-primary hover:text-white",
    ghost: "text-primary hover:bg-muted",
  };
  
  return (
    <button className={`${base} ${variants[variant]} ${className}`} {...props}>
      {children}
    </button>
  );
};

export const Card = ({ children, className = '' }) => (
  <div className={`glass-card p-6 ${className}`}>
    {children}
  </div>
);

export const Section = ({ children, className = '', title, subtitle }) => (
  <section className={`py-16 md:py-24 ${className}`}>
    <div className="container mx-auto px-6">
      {(title || subtitle) && (
        <div className="mb-12 text-center md:text-left">
          {title && <h2 className="section-title">{title}</h2>}
          {subtitle && <p className="text-secondary max-width-2xl">{subtitle}</p>}
        </div>
      )}
      {children}
    </div>
  </section>
);
