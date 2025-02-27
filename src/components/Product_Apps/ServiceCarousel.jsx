"use client";
import React, { useState, useEffect } from 'react';
import Image from 'next/image';

const ServiceCarousel = () => {
  const [services, setServices] = useState([
    {
      id: 1,
      name: "GROCERY DELIVERY",
      image: "/apps/groceryDelivery.svg",
      pageNum: 1,
      position: 2// left
    },
    {
      id: 2,
      name: "LAUNDRY SERVICE",
      image: "/apps/laundryService.svg",
      pageNum: 2,
      position: 1 // middle
    },
    {
      id: 3,
      name: "E-COMMERCE DELIVERY",
      image: "/apps/eCommerceDelivery.svg",
      pageNum: 3,
      position: 0// right (highlighted)
    },
    {
      id: 4,
      name: "FOOD DELIVERY",
      image: "/apps/grocery.svg",
      pageNum: 7,
      position: 3 // off-screen
    },
    {
      id: 5,
      name: "LAUNDRY SERVICE",
      image: "/apps/Taxi.svg",
      pageNum: 6,
      position: 4
    },
    {
      id: 6,
      name: "ONLINE CONSULTANT",
      image: "/apps/onlineConsultant.svg",
      pageNum: 5,
      position: 5
    },
    {
      id: 7,
      name: "HOME SERVICES",
      image: "/apps/homeServices.svg",
      pageNum: 4,
      position: 6
    },
  ]);
  
  // Get the currently active service (position 2)
  const activeService = services.find(service => service.position === 2) || services[2];
  
  // State to track screen size
  const [screenSize, setScreenSize] = useState('lg');
  
  // Auto slide effect
  useEffect(() => {
    const interval = setInterval(() => {
      // Move slides one position to the right
      setServices(prevServices => {
        return prevServices.map(service => {
          // Advance each slide one position
          const newPosition = (service.position + 1) % prevServices.length;
          return { ...service, position: newPosition };
        });
      });
    }, 3000);
    
    // Handle screen resize
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setScreenSize('sm');
      } else if (window.innerWidth < 768) {
        setScreenSize('md');
      } else {
        setScreenSize('lg');
      }
    };
    
    // Set initial size
    handleResize();
    
    // Add resize listener
    window.addEventListener('resize', handleResize);
    
    return () => {
      clearInterval(interval);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  // Calculate exact position for each slide
  const getXPosition = (position) => {
    switch(position) {
      case 0: return '-110%'; // Far left
      case 1: return '-40%';  // Left
      case 2: return '30%';   // Center/active
      case 3: return '100%';  // Right
      case 4: return '170%';  // Far right
      case 5: return '240%';  // Off-screen
      case 6: return '310%';  // Off-screen
      default: return '0%';
    }
  };
  
  // Set visible slides based on screen size
  const getVisibleSlides = () => {
    if (screenSize === 'sm') {
      // Show only 1 slide on small screens
      return services.filter(service => service.position === 2);
    } else if (screenSize === 'md') {
      // Show 2 slides on medium screens
      return services.filter(service => service.position >= 1 && service.position <= 2);
    } else {
      // Show 3 slides on large screens (default behavior)
      return services.filter(service => service.position >= 0 && service.position < 3);
    }
  };
  
  const visibleSlides = getVisibleSlides();

  return (
    <div className="bg-black pt-20">
      <div className="w-full px-5 md:max-w-5xl lg:max-w-[88rem] gap-8 mx-auto flex flex-col sm:flex-row pt-6 pb-4">
        {/* Left section - Carousel */}
        <div className="w-full sm:w-1/2 mb-8 sm:mb-0">
          <div className="w-full h-full max-w-2xl mx-auto bg-black rounded-lg">
            <div className="relative overflow-hidden h-full pr-8">
              <div className="absolute inset-0 flex items-center justify-center xl:w-[50rem] xl:h-[34rem] 2xl:w-[54rem] 2xl:h-full">
                {visibleSlides.map(service => (
                  <div
                    key={service.id}
                    className="absolute transition-all duration-700 ease-in-out rounded-2xl overflow-hidden h-full"
                    style={{
                      opacity: service.position === 2 ? 1 : 
                              service.position === 1 ? 0.6 : 
                              service.position === 3 ? 0.4 : 0.2, // Make position 3 (rightmost) more visible
                      transform: `translateX(${getXPosition(service.position)}) scale(${service.position === 2 ? 1.05 : 0.9})`,
                      width: service.position === 2 ? '40%' : '30%',
                      height: service.position === 2 ? '80%' : '70%',
                      zIndex: 30 - service.position * 10,
                    }}
                  >
                    <div className="bg-transparent text-white rounded-2xl overflow-hidden shadow-lg h-full relative">
                      <div className="relative w-full h-full">
                        <Image 
                          src={service.image}
                          alt={`${service.name} image`}
                          fill
                          className="object-contain"
                        />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        
        {/* Right section - Content */}
        <div className="text-left w-full sm:w-1/2 mb-12">
          <h2 className="text-3xl mb-4 mt-12 font-bold tracking-wide text-white">
            Creating Strong <br />
            Solutions to Drive{" "}
            <span className="text-red-500">
              Your <br />
              Digital Transformation
            </span>
          </h2>
          <div className="h-32 relative overflow-hidden my-8">
            {services.map((service) => (
              <h1
                key={service.id}
                className={`text-6xl font-bold bg-gradient-to-b from-neutral-50 from-40% to-[#171717]  bg-clip-text text-transparent absolute transition-all duration-500 w-full  ${
                  service.position === 2
                    ? "opacity-100 transform translate-y-0"
                    : "opacity-0 transform -translate-y-full"
                }`}
              >
                {service.name}
              </h1>
            ))}
          </div>
          <button className="bg-red-500 hover:bg-red-600 text-white px-6 py-2 rounded-lg mb-5 flex items-center text-xl transition-all duration-300 transform hover:scale-105">
            Live Demo <span className="ml-3 text-2xl">→</span>
          </button>
          <div className="flex items-center">
            <div className="relative h-24 w-32 overflow-hidden">
              {services.map((service) => (
                <div
                  key={service.id}
                  className={`absolute text-6xl font-bold transition-all duration-500 w-auto bg-gradient-to-b from-white to-[#171717] bg-clip-text text-transparent ${
                    service.position === 2
                      ? "opacity-100 transform translate-y-0"
                      : "opacity-0 transform -translate-y-full"
                  }`}
                >
                  <span>{service.pageNum}</span>
                </div>
              ))}
              <span className="ml-10 text-6xl font-bold bg-gradient-to-b from-white to-[#171717] bg-clip-text text-transparent tracking-widest">
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