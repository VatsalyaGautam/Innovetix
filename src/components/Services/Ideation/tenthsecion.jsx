'use client';

import { useEffect, useRef, useState } from 'react';

const ProcessPath = () => {
  const [windowWidth, setWindowWidth] = useState(0);
  
  // Update window width on resize
  useEffect(() => {
    // Set initial width
    setWindowWidth(window.innerWidth);
    
    // Add resize listener
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };
    
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  
  // Calculate position adjustments based on screen width
  const getPositionAdjustments = () => {
    // These values can be fine-tuned based on testing
    if (windowWidth >= 2000) { // 2xl screens
      return {
        define: 'mt-6',
        design: 'mt-24',
        simple: 'mt-28',
        beauty: 'mt-44'
      };
    } else if (windowWidth >= 1536) { // xl screens
      return {
        define: 'mt-6',
        design: 'mt-20',
        simple: 'mt-24',
        beauty: 'mt-36'
      };
    } else if (windowWidth >= 1280) { // lg screens
      return {
        define: 'mt-5',
        design: 'mt-16',
        simple: 'mt-20',
        beauty: 'mt-32'
      };
    } else if (windowWidth >= 1024) { // md screens
      return {
        define: 'mt-4',
        design: 'mt-14',
        simple: 'mt-16',
        beauty: 'mt-28'
      };
    } else if (windowWidth >= 768) { // sm screens
      return {
        define: 'mt-3',
        design: 'mt-12',
        simple: 'mt-14',
        beauty: 'mt-24'
      };
    } else { // xs screens
      return {
        define: 'mt-2',
        design: 'mt-10',
        simple: 'mt-12',
        beauty: 'mt-20'
      };
    }
  };
  
  const positions = getPositionAdjustments();

  return (
    <div className="h-[23rem] w-full bg-[url('/Serviceideation/Thirdlastsection.svg')] bg-contain bg-no-repeat relative">
      <div className="flex justify-around items-start h-full absolute inset-0">
        {/* Define */}
        <div className="flex flex-col items-center">
          <div className={`w-16 h-16 bg-[#C03773] ${positions.define} text-white rounded-full flex items-center justify-center mb-4`}></div>
          <div className="text-center">
            <h3 className="text-3xl md:text-4xl font-semibold mb-1 md:mb-2 leading-tight opacity-50">Define</h3>
            <p className="text-gray-600 text-sm md:text-base">Define Purpose</p>
          </div>
        </div>
        
        {/* Design */}
        <div className="flex flex-col items-center">
          <div className={`w-16 h-16 bg-[#C03773] ${positions.design} text-white rounded-full flex items-center justify-center mb-4`}></div>
          <div className="text-center">
            <h3 className="text-3xl md:text-4xl font-semibold mb-1 md:mb-2 leading-tight opacity-50">Design</h3>
            <p className="text-gray-600 text-sm md:text-base">User-centric Design</p>
          </div>
        </div>
        
        {/* Simple */}
        <div className="flex flex-col items-center">
          <div className={`w-16 h-16 bg-[#C03773] ${positions.simple} text-white rounded-full flex items-center justify-center mb-4`}></div>
          <div className="text-center">
            <h3 className="text-3xl md:text-4xl font-semibold mb-1 md:mb-2 leading-tight opacity-50">Simple</h3>
            <p className="text-gray-600 text-sm md:text-base">Keeping it Simple</p>
          </div>
        </div>
        
        {/* Beauty */}
        <div className="flex flex-col items-center">
          <div className={`w-16 h-16 bg-[#C03773] ${positions.beauty} text-white rounded-full flex items-center justify-center mb-4`}></div>
          <div className="text-center">
            <h3 className="text-3xl md:text-4xl font-semibold mb-1 md:mb-2 leading-tight opacity-50">Beauty</h3>
            <p className="text-gray-600 text-sm md:text-base">Functional Beauty</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProcessPath;