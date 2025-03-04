'use client';
import { useState } from 'react';
import Image from "next/image";

const StatsCard = ({ icon, number, description, image, index, activeIndex, setActiveIndex }) => {
  const isActive = activeIndex === index;
  
  // Handle hover events
  const handleMouseEnter = () => {
    setActiveIndex(index);
  };

  // Determine image position and visibility
  const getImageStyle = () => {
    // Default position - image is to the right of its card
    const defaultPosition = {
      transform: 'translateX(85%)',
      opacity: 0,
      left: 0,
      zIndex: 0
    };
    
    // If this is the active card, show the image
    if (isActive) {
      return {
        ...defaultPosition,
        opacity: 1
      };
    }
    
    // If this card was previously active and now a new card is active,
    // slide this card's image to the left
    if (index < activeIndex) {
      return {
        transform: 'translateX(0%)',
       
        left: 0,
        zIndex: 0
      };
    }
    
    return defaultPosition;
  };

  return (
    <div className="relative">
      {/* Image container */}
      <div 
        className="absolute top-0 transition-all duration-500 ease-in-out"
        style={getImageStyle()}
      >
        <Image 
          src={image} 
          alt={`${description} illustration`} 
          className="object-cover h-72 shadow-lg"
          width={150}
          height={150}
        />
      </div>
    
      {/* The card itself */}
      <div 
        className={`relative w-44 h-72 bg-indigo-900 text-white overflow-hidden shadow-md transition-all duration-500 ease-in-out ${isActive ? 'transform -translate-x-12' : ''}`}
        style={{ zIndex: 10 }}
        onMouseEnter={handleMouseEnter}
      >
        {/* Background gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-indigo-900 to-indigo-800"></div>
        
        {/* Card content */}
        <div className="relative z-20 h-full p-5 flex flex-col justify-around">
          <div className="text-2xl">{icon}</div>
          <div>
            <div className="text-3xl font-bold">{number}</div>
            <div className="text-sm mt-1 leading-tight">{description}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

const StatisticsSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const stats = [
    {
      icon: '💼',
      number: '100+',
      description: 'AI Experts and Thought Leaders',
      image: '/IndusEcommerce/Image1000.png'
    },
    {
      icon: '📦',
      number: '50+',
      description: 'Successful AI Projects Delivered',
      image: '/IndusEcommerce/Image1000.png'
    },
    {
      icon: '🏆',
      number: '5+',
      description: 'Years of AI Industry Experience',
      image: '/IndusEcommerce/Image1000.png'
    },
    {
      icon: '🏢',
      number: '35+',
      description: 'Industries Served With AI Solution',
      image: '/IndusEcommerce/Image1000.png'
    }
  ];

  return (
    <div className="flex flex-wrap justify-center gap-28 p-10 w-[90%] mx-auto">
      {stats.map((stat, index) => (
        <StatsCard 
          key={index}
          icon={stat.icon}
          number={stat.number}
          description={stat.description}
          image={stat.image}
          index={index}
          activeIndex={activeIndex}
          setActiveIndex={setActiveIndex}
        />
      ))}
    </div>
  );
};

export default StatisticsSection;