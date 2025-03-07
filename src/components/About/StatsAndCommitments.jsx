import React from "react";
import { Card } from "@/components/ui/card";
import Image from "next/image";
const StatsAndCommitments = () => {
  return (
    <div className="w-full max-w-6xl mx-auto">
      {/* Top Section with Stats */}
      <div className="flex flex-col lg:flex-row gap-12 mb-12">
        {/* Left side - World Map with Stats */}
        <div className="lg:w-3/5 bg-black rounded-lg pt-8 text-white relative overflow-hidden h-[25rem]">
          <h2 className="text-3xl md:text-4xl px-8 font-bold mb-6">
            We've Empowered
          </h2>

          <div className="flex flex-col md:flex-row justify-start relative z-10 px-8">
            <div className="mb-6 md:mb-0 md:pr-6">
              <div className="text-3xl md:text-4xl font-bold">10,000+</div>
              <div className="text-xl">Businesses</div>
            </div>

            <div className="md:border-l md:border-gray-600 md:pl-6">
              <div className="text-3xl md:text-4xl font-bold">150+</div>
              <div className="text-xl">Countries</div>
            </div>
          </div>

          {/* This would be where the map image goes */}
          <div className="w-full absolute -bottom-4 overflow-y-clip">
            <Image
              src="/dating/connectionGlobe.svg"
              width={436}
              height={248.58}
              className="w-full object-contain"
              alt="connections-globe"
            />
          </div>
        </div>

        {/* Right side - Stats with Icons */}
        <div className="lg:w-2/5 flex flex-col justify-between gap-6">
          {/* Enterprise Solutions */}
          <div className="border-b pb-6">
            <div className="flex items-center gap-4">
              <div className="bg-blue-950 p-3 rounded">
                <div className="w-8 h-8 flex items-center justify-center">
                  <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    width="24" 
                    height="24" 
                    viewBox="0 0 24 24" 
                    fill="none" 
                    stroke="white" 
                    strokeWidth="2" 
                    strokeLinecap="round" 
                    strokeLinejoin="round"
                  >
                    <rect x="4" y="2" width="16" height="20" rx="2" ry="2"></rect>
                    <path d="M9 22v-4h6v4"></path>
                    <path d="M8 6h.01"></path>
                    <path d="M16 6h.01"></path>
                    <path d="M12 6h.01"></path>
                    <path d="M8 10h.01"></path>
                    <path d="M16 10h.01"></path>
                    <path d="M12 10h.01"></path>
                    <path d="M8 14h.01"></path>
                    <path d="M16 14h.01"></path>
                    <path d="M12 14h.01"></path>
                  </svg>
                </div>
              </div>
              <div>
                <div className="text-4xl md:text-5xl font-bold">2000+</div>
                <div className="text-lg font-medium">Enterprise Solutions Delivered</div>
              </div>
            </div>
          </div>
          
          {/* Startups Empowered */}
          <div className="border-b pb-6">
            <div className="flex items-center gap-4">
              <div className="bg-blue-950 p-3 rounded">
                <div className="w-8 h-8 flex items-center justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z"></path>
                    <path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z"></path>
                    <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0"></path>
                    <path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5"></path>
                  </svg>
                </div>
              </div>
              <div>
                <div className="text-4xl md:text-5xl font-bold">6000+</div>
                <div className="text-lg font-medium">Startups Empowered</div>
              </div>
            </div>
          </div>
          
          {/* Million-Funded Startups */}
          <div className="pb-6">
            <div className="flex items-center gap-4">
              <div className="bg-blue-950 p-3 rounded">
                <div className="w-8 h-8 flex items-center justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <circle cx="12" cy="12" r="10"></circle>
                    <path d="M16 8h-6a2 2 0 1 0 0 4h4a2 2 0 1 1 0 4H8"></path>
                    <path d="M12 18V6"></path>
                  </svg>
                </div>
              </div>
              <div>
                <div className="text-4xl md:text-5xl font-bold">120+</div>
                <div className="text-lg font-medium">Million-Funded Startups</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Bottom Section - Commitments */}
      <div className="mt-16">
        <h3 className="text-2xl font-bold text-blue-700 border-b border-gray-300 pb-2 mb-8 inline-block">Our Commitments</h3>
        
        <div className="mb-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Partner with Innovetix to Drive Meaningful Change</h2>
          <p className="text-lg">
            We are committed to helping organizations navigate today's challenges and unlock new opportunities for growth. 
            Let us work together to drive transformation that benefits your business, society, and the environment.
          </p>
        </div>
        
        {/* 3 Pillars */}
        <div className="flex flex-col md:flex-row gap-16 relative mt-10">
  <img className="absolute top-1/2 -translate-y-1/2 left-80" src="/about/dashedLine.svg"/>
  
  <Card className="flex-1 p-6 border relative transition-all duration-300 hover:shadow-xl hover:border-blue-500 hover:-translate-y-2 cursor-pointer group">
    <div className="flex items-center mb-4">
      <div className="text-5xl font-bold text-blue-700 group-hover:text-blue-500 transition-colors duration-300">01</div>
    </div>
    <h3 className="text-xl font-bold group-hover:text-blue-700 transition-colors duration-300">Diversity, Equity & Inclusion</h3>
  </Card>
  
  <Card className="flex-1 p-6 border relative transition-all duration-300 hover:shadow-xl hover:border-blue-500 hover:-translate-y-2 cursor-pointer group">
    <div className="flex items-center mb-4">
      <div className="text-5xl font-bold text-blue-700 group-hover:text-blue-500 transition-colors duration-300">02</div>
    </div>
    <h3 className="text-xl font-bold group-hover:text-blue-700 transition-colors duration-300">Social Responsibility</h3>
  </Card>
  
  <Card className="flex-1 p-6 border relative transition-all duration-300 hover:shadow-xl hover:border-blue-500 hover:-translate-y-2 cursor-pointer group">
    <div className="flex items-center mb-4">
      <div className="text-5xl font-bold text-blue-700 group-hover:text-blue-500 transition-colors duration-300">03</div>
    </div>
    <h3 className="text-xl font-bold group-hover:text-blue-700 transition-colors duration-300">Environmental Sustainability</h3>
  </Card>
</div>
      
      </div>

      
    </div>
  );
};

export default StatsAndCommitments;
