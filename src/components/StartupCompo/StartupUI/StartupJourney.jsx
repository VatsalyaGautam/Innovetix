"use client"
import {React,useRef,useEffect} from 'react';
import Image from 'next/image';

// Animation Component
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
  index = 0, // Add index prop for staggered animations
  stagger = 0, // Add stagger prop for controlling delay between items
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
            element.style.transform = 'translate(0, 0)';
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

const StartupJourney = () => {
  const steps = [
    {
      number: "1",
      title: "Choose Your Service(s)",
      description: "Whether you need a single service or want to bundle all six for maximum impact, we've got you covered. Each service is available for $249, or you can get the complete package for just $999.",
      image: "/Startup/Image5.png", // Replace with actual image path
    },
    {
      number: "2",
      title: "Tell Us About Your Startup",
      description: "We customize everything to your startup's unique needs. Fill out our quick form to give us insight into your business, your stage, and your goals.",
      image: "/Startup/Image6.png", // Replace with actual image path
    },
    {
      number: "3",
      title: "Pay & Let's Make It Happen",
      description: "Complete your purchase through our secure Stripe payment system. Once confirmed, we'll jump into action to help you bring your startup to life.",
      image: "/Startup/Image7.png", // Replace with actual image path
    }
  ];

  return (
    <div className="w-full bg-white py-16 px-4 sm:px-6 md:px-8 lg:px-16">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}

        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-[#3B3534] mb-4">
            Your Startup Journey Gets As Easy As 1-2-3
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
            We've simplified the process so you can focus on what matters – building your business.
          </p>
        </div>
       
        {/* Steps Section */}
        <ScrollReveal animation="slideUp" duration={1000} delay={300} easing="gentle">

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 md:gap-12 lg:gap-16">
          {steps.map((step, index) => (
            <div key={index} className="flex flex-col items-center text-center">
              {/* Image Container */}
              <div className="relative w-48 h-48 mb-8">
                <Image
                  src={step.image}
                  alt={step.title}
                  fill
                  className="object-contain"
                  sizes="(max-width: 768px) 192px, 192px"
                />
              </div>

              {/* Step Number */}
              <div className="w-16 h-16 rounded-full bg-[#0B3829] flex items-center justify-center mb-6">
                <span className="text-2xl font-bold text-white">{step.number}</span>
              </div>

              {/* Content */}
              <h3 className="text-2xl font-bold text-gray-800 mb-4">
                {step.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>
        </ScrollReveal>
      </div>
    </div>
  );
};

export default StartupJourney;