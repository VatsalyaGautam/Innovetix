"use client"
import React, { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const TestimonialCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const slideContainerRef = useRef(null);

  const testimonials = [
    {
      id: 1,
      name: "David S.",
      text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
      image: "/Startup/testimonial.png"
    },
    {
      id: 2,
      name: "Sarah M.",
      text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
       image: "/Startup/testimonial.png"
    },
    {
      id: 3,
      name: "Michael R.",
      text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
       image: "/Startup/testimonial.png"
    }
  ];

  // Create an array with cloned items for infinite looping
  const allSlides = [...testimonials, ...testimonials, ...testimonials];
  
  // Function to handle next slide with transition
  const nextSlide = () => {
    if (isTransitioning) return;
    
    setIsTransitioning(true);
    setCurrentSlide((prev) => {
      const next = prev + 1;
      // Check if we need to jump back to the original position
      if (next >= testimonials.length * 2) {
        setTimeout(() => {
          if (slideContainerRef.current) {
            slideContainerRef.current.style.transition = 'none';
            setCurrentSlide(testimonials.length);
            setTimeout(() => {
              if (slideContainerRef.current) {
                slideContainerRef.current.style.transition = 'transform 500ms ease-in-out';
              }
            }, 50);
          }
        }, 500);
      }
      return next;
    });
    
    setTimeout(() => {
      setIsTransitioning(false);
    }, 500);
  };

  // Function to handle previous slide with transition
  const prevSlide = () => {
    if (isTransitioning) return;
    
    setIsTransitioning(true);
    setCurrentSlide((prev) => {
      const next = prev - 1;
      // Check if we need to jump to the cloned position
      if (next < 0) {
        setTimeout(() => {
          if (slideContainerRef.current) {
            slideContainerRef.current.style.transition = 'none';
            setCurrentSlide(testimonials.length - 1);
            setTimeout(() => {
              if (slideContainerRef.current) {
                slideContainerRef.current.style.transition = 'transform 500ms ease-in-out';
              }
            }, 50);
          }
        }, 500);
      }
      return next;
    });
    
    setTimeout(() => {
      setIsTransitioning(false);
    }, 500);
  };

  // Initialize the currentSlide to the middle set of items for infinite looping
  useEffect(() => {
    setCurrentSlide(testimonials.length);
  }, []);

  // Auto-advance slides for looping effect
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000); // Change slide every 5 seconds
    
    return () => clearInterval(interval);
  }, [currentSlide, isTransitioning]);

  // Calculate current displayed slide index for indicators
  const displayedSlideIndex = () => {
    if (currentSlide < testimonials.length) {
      return currentSlide;
    } else if (currentSlide >= testimonials.length * 2) {
      return currentSlide - testimonials.length * 2;
    } else {
      return currentSlide - testimonials.length;
    }
  };

  return (
    <div className="w-full bg-stone-50 py-16 px-4">
      <div className="md:w-[90%] mx-auto">
        {/* Header */}
        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Success Stories from Our Startup Partners
          </h2>
          <p className="text-xl text-gray-600">
            Hear from the founders and entrepreneurs we've helped launch and grow their startups.
          </p>
        </div>

        {/* Carousel Container */}
        <div className="relative">
          <div className="overflow-hidden">
            {/* Slides */}
            <div 
              ref={slideContainerRef}
              className="flex justify-between gap-4 lg:gap-8 transition-transform duration-500 ease-in-out"
              style={{
                transform: `translateX(-${(currentSlide * (100 / 3))}%)`,
              }}
            >
              {allSlides.map((testimonial, index) => (
                <div 
                  key={`${testimonial.id}-${index}`}
                  className="w-full md:w-1/3 flex-shrink-0"
                >
                  <div className="bg-[#E9E7D9] rounded-md p-4 xl:p-8 h-full border-[#123F2880] border-l-8  lg:w-auto">
                    <div className="flex flex-col xl:flex-row items-start gap-4">
                      <img
                        src={testimonial.image}
                        alt={testimonial.name}
                        className="w-16 h-16 rounded-full object-cover"
                      />
                      <div>
                        <h3 className="text-xl font-semibold text-gray-900 mb-2">
                          {testimonial.name}
                        </h3>
                        <p className="text-gray-600 leading-relaxed">
                          {testimonial.text}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Buttons */}
          <div className="flex gap-4 mt-8 ">
            <button
              onClick={prevSlide}
              className="w-12 h-12 rounded-full border-2 border-gray-300 flex items-center justify-center hover:border-gray-400 transition-colors"
              aria-label="Previous slide"
              disabled={isTransitioning}
            >
              <ChevronLeft className="w-6 h-6 text-gray-600" />
            </button>
            <button
              onClick={nextSlide}
              className="w-12 h-12 rounded-full border-2 border-gray-300 flex items-center justify-center hover:border-gray-400 transition-colors"
              aria-label="Next slide"
              disabled={isTransitioning}
            >
              <ChevronRight className="w-6 h-6 text-gray-600" />
            </button>
          </div>
          
          {/* Indicator Dots */}
        
        </div>
      </div>
    </div>
  );
};

export default TestimonialCarousel;