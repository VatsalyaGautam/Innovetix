import React from 'react';
import Image from 'next/image';
import PhoneInputWithCountrySelector from "@/components/Industries/Healthcare/FlagInput"
import StatisticsSection from '@/components/Industries/Healthcare/Card'
const HealthcareAppSection = () => {
  return (
    <div className="relative w-full pb-28 bg-[#BDDAEF]">
      {/* Main content container */}
      <div className="container mx-auto px-4 lg:mt-20">
        <div className="flex flex-col lg:flex-row items-center justify-between">
          
          {/* Left content - Text and form */}
          <div className="w-full lg:w-1/2 mb-12 lg:mb-0">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Healthcare App<br />Development Company?
            </h1>
            <p className="text-gray-800 text-lg mb-10 max-w-lg">
              Our healthcare app development services assure secure, 
              scalable, and fully compliant solutions that adapt to your 
              evolving needs.
            </p>
            
            {/* Phone input and button */}
        <PhoneInputWithCountrySelector/>
          </div>
          
          {/* Right content - Doctor image with callouts */}
          <div className="w-full lg:w-1/2 relative">
            <div className=" rounded-lg overflow-hidden">
              <div className="relative flex items-center justify-center">
                < Image
                  src="/IndusHealth/Image1.png" 
                  alt="Doctor with stethoscope" 
                  className="w-1/2"
                  width={600}
                     height={300}
                />
                
                {/* Callout boxes */}
                <div className="absolute top-[45%] -right-2 md:right-10 2xl:right-40 z-10">
                  <div className="bg-white bg-opacity-80 px-6 py-2 rounded-lg border-2 border-dashed border-gray-500 text-center">
                    <span className="font-medium text-lg">Medical Facility</span>
                  </div>
                </div>
                
                <div className="absolute top-[60%] -left-2 md:left-3 2xl:left-24 z-10">
                  <div className="bg-white bg-opacity-80 px-6 py-2 rounded-lg border-2 border-dashed border-gray-500 text-center">
                    <span className="font-medium text-lg">Book Appointment</span>
                  </div>
                </div>
                
                <div className="absolute bottom-[10%] -right-2 md:right-20 2xl:right-36 z-10">
                  <div className="bg-white bg-opacity-80 px-6 py-2 rounded-lg border-2 border-dashed border-gray-500 text-center">
                    <span className="font-medium text-lg">Top Doctors</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Feature boxes at bottom */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8 max-w-4xl mx-auto">
          <div className="bg-gray-900 text-white rounded-full py-3 px-8 flex items-center">
            <div className="bg-blue-500 rounded-full p-1 mr-3">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
            </div>
            <span className="font-medium">HIPAA, FDA & Regulatory Compliant</span>
          </div>
          
          <div className="bg-gray-900 text-white rounded-full py-3 px-8 flex items-center">
            <div className="bg-blue-500 rounded-full p-1 mr-3">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
            </div>
            <span className="font-medium">Custom EHR/EMR Integration</span>
          </div>
          
          <div className="bg-gray-900 text-white rounded-full py-3 px-8 flex items-center">
            <div className="bg-blue-500 rounded-full p-1 mr-3">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
            </div>
            <span className="font-medium">Dedicated Healthcare Tech Experts</span>
          </div>
          
          <div className="bg-gray-900 text-white rounded-full py-3 px-8 flex items-center">
            <div className="bg-blue-500 rounded-full p-1 mr-3">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
            </div>
            <span className="font-medium">Proven Healthcare Industry Expertise</span>
          </div>
        </div>
      </div>
      
      {/* Wave at the bottom */}
      <div className="absolute bottom-0 left-0 right-0 w-full overflow-hidden">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 120" fill="white" className="w-full">
          <path d="M0,64L80,69.3C160,75,320,85,480,80C640,75,800,53,960,48C1120,43,1280,53,1360,58.7L1440,64L1440,120L1360,120C1280,120,1120,120,960,120C800,120,640,120,480,120C320,120,160,120,80,120L0,120Z"></path>
        </svg>
      </div>
   

<StatisticsSection/>

    </div>
  );
};

export default HealthcareAppSection;