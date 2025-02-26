import React, { useRef, useEffect } from 'react';

const ANIMATIONS = {
  slideLeft: 'opacity-0 translate-x-64', // Slide from right to left
  slideRight: 'opacity-0 -translate-x-64', // Slide from left to right
  slideDown: 'opacity-0 -translate-y-64', // Slide from top to bottom
  slideUp: 'opacity-0 translate-y-64', // Slide from bottom to top
  fadeSlideLeft: 'opacity-0 -translate-x-64 scale-95'
};

const EASINGS = {
  smooth: 'cubic-bezier(0.4, 0, 0.2, 1)',
  spring: 'cubic-bezier(0.175, 0.885, 0.32, 1.275)',
  bouncy: 'cubic-bezier(0.68, -0.55, 0.265, 1.55)',
  gentle: 'cubic-bezier(0.34, 1.56, 0.64, 1)',
};

const ScrollReveal = ({
  children,
  className = '',
  animation = 'slideLeft',
  duration = 800,
  delay = 0,
  easing = 'smooth',
  index = 0, // Index prop for staggered animations
  stagger = 0, // Stagger prop for controlling delay between items
}) => {
  const elementRef = useRef(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const element = entry.target;
            // Calculate total delay including stagger effect
            const totalDelay = delay + (index * stagger);
            element.style.transitionDelay = `${totalDelay}ms`;
            element.style.opacity = '1';
            element.style.transform = 'translate(0, 0) scale(1)';
            observer.unobserve(element);
          }
        });
      },
      { threshold: 0.1 }
    );
    
    if (elementRef.current) {
      observer.observe(elementRef.current);
    }
    
    return () => observer.disconnect();
  }, [delay, index, stagger]);
  
  const baseStyle = {
    willChange: 'transform, opacity',
    transition: `all ${duration}ms ${EASINGS[easing]}`,
  };
  
  return (
    <div
      ref={elementRef}
      className={`${ANIMATIONS[animation]} ${className}`}
      style={baseStyle}
    >
      {children}
    </div>
  );
};

const StatsSection = () => {
  const stats = [
    {
      title: "Successful Legal Registrations",
      count: "300+"
    },
    {
      title: "Business Plans Developed",
      count: "1000+"
    },
    {
      title: "UI/UX Designs Crafted",
      count: "1500+"
    },
    {
      title: "Full-Scale Marketing Roadmaps",
      count: "1200+"
    },
    {
      title: "Investor-Ready Pitch Decks",
      count: "850+"
    }
  ];

  // Set a higher stagger value to make the one-by-one effect more noticeable
   // 300ms between each card appearance

  return (
    <div className="w-full bg-[#DCD9C4] py-28 px-4 sm:px-6 md:px-8 mb-20">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-6">
          {stats.map((stat, index) => (
            <ScrollReveal 
              key={index}
              animation="slideUp" 
              duration={800} 
              delay={200*index}
              easing="gentle"
              // Add stagger delay between items
            >
              <div 
                className="bg-white p-6 rounded shadow-lg flex flex-col justify-between min-h-[240px]"
                style={{
                  boxShadow: '0 4px 20px rgba(0, 0, 0, 0.6)',
                }}
              >
                <h3 className="text-2xl font-medium text-gray-900 mb-4">
                  {stat.title}
                </h3>
                <p className="text-4xl font-semibold text-gray-900">
                  {stat.count}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </div>
  );
};

export default StatsSection;