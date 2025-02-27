"use client";
import React, { useState, useEffect, useRef } from 'react';

const ServiceCarousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const carouselRef = useRef(null);
  
  // Service data
  const services = [
    {
      name: "LAUNDRY SERVICE",
      image: "/apps/laundryService.svg",
      pageNum: 1,
      subtitle: "Fresh & Clean",
      price: "$20"
    },
    {
      name: "DRY CLEANING",
      image: "/api/placeholder/400/320",
      pageNum: 2,
      subtitle: "Dress & Shine",
      price: "$25"
    },
    {
      name: "WASH & FOLD",
      image: "/api/placeholder/400/320",
      pageNum: 3,
      subtitle: "Fresh Laundry",
      price: "$15"
    },
    {
      name: "IRONING SERVICE",
      image: "/api/placeholder/400/320",
      pageNum: 4,
      subtitle: "Crisp & Clean",
      price: "$18"
    },
    {
      name: "STAIN REMOVAL",
      image: "/api/placeholder/400/320",
      pageNum: 5,
      subtitle: "Special Treatment",
      price: "$20"
    },
    {
      name: "ALTERATIONS",
      image: "/api/placeholder/400/320",
      pageNum: 6,
      subtitle: "Perfect Fit",
      price: "$30"
    },
    {
      name: "EXPRESS SERVICE",
      image: "/api/placeholder/400/320",
      pageNum: 7,
      subtitle: "Ready in 2 hours",
      price: "$35"
    },
  ];

  // Initialize left carousel slides based on active index
  const getInitialSlides = (index) => {
    // Calculate the indices for the 3 visible slides
    const indices = [
      (index + 2) % services.length,
      (index + 1) % services.length,
      index
    ];
    
    return indices.map((idx) => ({
      id: idx + 1,
      title: services[idx].name,
      subtitle: services[idx].subtitle,
      price: services[idx].price
    }));
  };

  // State for the left side carousel
  const [slides, setSlides] = useState(() => getInitialSlides(activeIndex));
  const [isAnimating, setIsAnimating] = useState(false);
  const timerRef = useRef(null);
  const mainTimerRef = useRef(null);

  // Initialize scroll position
  useEffect(() => {
    if (carouselRef.current) {
      // Start at the beginning
      carouselRef.current.scrollLeft = 0;
    }
  }, []);

  // Function to update everything simultaneously
  const updateEverything = () => {
    // Calculate the next active index (moving right to left)
    const nextIndex = (activeIndex - 1 + services.length) % services.length;
    
    // Update active index
    setActiveIndex(nextIndex);
    
    // Update left carousel
    if (!isAnimating) {
      setIsAnimating(true);
      const nextVisibleIndex = (activeIndex + 0) % services.length; // Show the current activeIndex in the 3rd position
      
      // Create a new slide that will enter from the left
      const newSlide = {
        id: Date.now(), // Unique ID
        title: services[nextVisibleIndex].name,
        subtitle: services[nextVisibleIndex].subtitle,
        price: services[nextVisibleIndex].price
      };
      
      // Add the new slide to the beginning and remove the last one
      setSlides(prevSlides => {
        const newSlides = [newSlide, ...prevSlides.slice(0, 2)];
        return newSlides;
      });
      
      setTimeout(() => {
        setIsAnimating(false);
      }, 500);
    }
    
    // Update main carousel scrolling
    if (carouselRef.current) {
      const itemWidth = carouselRef.current.offsetWidth / 3; // Since we're showing 3 items at once
      const nextScrollIndex = (Math.round(carouselRef.current.scrollLeft / itemWidth) + 1) % services.length;
      carouselRef.current.scrollTo({
        left: nextScrollIndex * itemWidth,
        behavior: 'smooth'
      });
    }
  };

  // Auto-rotate everything together
  useEffect(() => {
    mainTimerRef.current = setInterval(updateEverything, 3000);
    return () => clearInterval(mainTimerRef.current);
  }, [activeIndex, isAnimating, services.length]);

  // Clear individual timers to prevent conflicts
  useEffect(() => {
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, []);

  // Left carousel manual advance (also updates everything)
  const advance = () => {
    // Clear the automatic timer to prevent conflicts
    if (mainTimerRef.current) {
      clearInterval(mainTimerRef.current);
    }
    
    // Update everything at once
    updateEverything();
    
    // Restart the automatic timer
    mainTimerRef.current = setInterval(updateEverything, 3000);
  };


  return (
    <div className="bg-black pt-20">
      <div className="w-full px-5 md:max-w-5xl lg:max-w-[88rem] mx-auto flex flex-col sm:flex-row py-16">
        {/* Left section - Carousel */}
        <div className="w-full sm:w-1/2 mb-8 sm:mb-0">
          <div className="w-full max-w-2xl mx-auto bg-black rounded-lg">
            <h2 className="text-2xl font-bold mb-4 ml-2 text-white">Services</h2>
            
            <div className="relative overflow-hidden">
              <div className={`flex transition-all duration-500 ease-in-out`}>
                {slides.map((slide, index) => (
                  <div 
                    key={slide.id} 
                    className={`flex-none w-1/3 p-2 transition-opacity duration-300 ${
                      index === 2 ? 'opacity-100' : 'opacity-60'
                    }`}
                    style={{
                      transform: isAnimating && index === 0 ? 'translateX(-100%)' : 'translateX(0)',
                      opacity: isAnimating && index === 0 ? 0 : index === 2 ? 1 : 0.6,
                      transition: 'transform 500ms ease-in-out, opacity 500ms ease-in-out'
                    }}
                  >
                    <div className="bg-gray-800 text-white rounded-lg overflow-hidden shadow-lg h-64 relative">
                      <div className="p-6 h-full flex flex-col justify-between">
                        <div>
                          <h3 className="text-xl font-bold">{slide.title}</h3>
                          <p className="text-gray-400 mt-2">{slide.subtitle}</p>
                        </div>
                        
                        <div className="absolute bottom-4 right-4 bg-black bg-opacity-50 px-3 py-1 rounded-md">
                          <span className="text-xs text-gray-400">min.</span>
                          <p className="text-xl font-bold">{slide.price}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              
              <button 
                onClick={advance} 
                className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-md z-10"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="9 18 15 12 9 6"></polyline>
                </svg>
              </button>
            </div>
            
            <div className="flex justify-center mt-4 space-x-1">
              {services.map((_, i) => (
                <div 
                  key={i} 
                  className={`h-2 w-2 rounded-full ${i === activeIndex ? 'bg-red-500' : 'bg-gray-400'}`} 
                />
              ))}
            </div>
          </div>
        </div>
        
        {/* Right section - Content exactly as in the image */}
        <div className="text-left md:ml-8 w-full sm:w-1/2">
          <h2 className="text-3xl mb-4 font-bold tracking-wide text-white">
            Creating Strong <br />
            Solutions to Drive{" "}
            <span className="text-red-500">
              Your <br />
              Digital Transformation
            </span>
          </h2>
          <div className="h-32 relative overflow-hidden mt-8">
            {services.map((service, idx) => (
              <h1
                key={idx}
                className={`text-6xl font-bold absolute transition-all duration-700 w-full text-white ${
                  idx === activeIndex
                    ? "opacity-100 transform translate-y-0"
                    : idx === (activeIndex + 1) % services.length
                    ? "opacity-0 transform translate-y-full"
                    : "opacity-0 transform -translate-y-full"
                }`}
              >
                {service.name}
              </h1>
            ))}
          </div>
          <button className="bg-red-500 hover:bg-red-600 text-white px-8 py-4 rounded-lg mb-12 flex items-center text-xl">
            Live Demo <span className="ml-3 text-2xl">→</span>
          </button>
          <div className="flex items-center">
            <div className="relative h-24 w-32 overflow-hidden">
              {services.map((service, idx) => (
                <div
                  key={idx}
                  className={`absolute text-6xl font-bold transition-all duration-700 w-auto bg-gradient-to-b from-white to-[#171717] bg-clip-text text-transparent ${
                    idx === activeIndex
                      ? "opacity-100 transform translate-y-0"
                      : idx === (activeIndex + 1) % services.length
                      ? "opacity-0 transform translate-y-full"
                      : "opacity-0 transform -translate-y-full"
                  }`}
                >
                  <span>{service.pageNum}</span>
                </div>
              ))}
              <span className="ml-10 text-6xl font-bold bg-gradient-to-b from-white to-[#171717] bg-clip-text text-transparent">
                /7
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceCarousel;