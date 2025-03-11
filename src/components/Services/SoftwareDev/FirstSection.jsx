"use client"
import { React } from 'react';
import ScrollReveal from '@/components/ScrollReveal';
import ContactForm from '@/components/Industries/Education/Form';
import Image from 'next/image';

const SoftwareDevSection1 = ({ 
  // Feature points props
 
  
  // Form section props
  formProps = {
    formTitle: "Innovation.Transformation.Excellence",
    formPara: "With Custom Software Development Services",
    formSubmitText: "Submit",
    buttonColorClass: "bg-blue-500 hover:bg-blue-600"
  },
  
 
}) => {
  return (
    <div className="w-[90rem] flex flex-col md:flex-row items-center sm:items-start lg:items-center justify-around px-6 sm:px-4 lg:px-6 py-12 mt-16 sm:mt-20 2xl:mt-24 z-10">
      
      {/* Left Section - Matching Screenshot */}
      <ScrollReveal animation='slightRight' duration={800} className=" mb-16 sm:mb-32  flex flex-col justify-evenly md:justify-start pt-4 lg:pt-0 mr-2">
        <div className='mb-8'>
          {/* Leading with bars icon */}
          <div className="flex items-center mb-2">
            <div className="mr-2">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="4" y="14" width="4" height="6" fill="white"/>
                <rect x="10" y="8" width="4" height="12" fill="white"/>
                <rect x="16" y="4" width="4" height="16" fill="white"/>
              </svg>
            </div>
            <p className="text-xl font-medium">Leading</p>
          </div>
          
          {/* Software Development Company text */}
          <h1 className="text-5xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold">
            <span className="text-[#3498db] block">Software</span>
            <span className="block mt-2">Development</span>
            <span className="block mt-2">Company</span>
          </h1>
        </div>
        
        {/* Divider Line */}
        <div className="w-full h-px bg-gray-600 my-8"></div>
        
        {/* Trusted by section */}
        <div>
          <p className="text-base mb-8">Trusted by Unicorns and Industry Brands</p>
          
          {/* Logos Row */}
          <div className="flex flex-wrap items-center gap-8">
            <div className="w-20 h-auto">
               <Image
                    src="/ServiceSoftwareDev/image1.png"
                    alt="E-commerce Website Mockup on Multiple Devices"
                    width={120}
                    height={60}
                    priority
                    className=" w-auto"
                  />
            </div>
            <div className="w-20 h-auto">
            <Image
                    src="/ServiceSoftwareDev/image2.png"
                    alt="E-commerce Website Mockup on Multiple Devices"
                    width={120}
                    height={60}
                    priority
                    className=" w-auto"
                  />
            </div>
            <div className="w-20 h-auto">
            <Image
                    src="/ServiceSoftwareDev/image3.png"
                    alt="E-commerce Website Mockup on Multiple Devices"
                    width={120}
                    height={60}
                    priority
                    className=" w-auto"
                  />
            </div>
            <div className="w-20 h-auto">
            <Image
                    src="/ServiceSoftwareDev/image4.png"
                    alt="E-commerce Website Mockup on Multiple Devices"
                    width={120}
                    height={60}
                    priority
                    className=" w-auto"
                  />
            </div>
          </div>
        </div>
        
        {/* Feature Points - Optional, not visible in the screenshot */}
       
      </ScrollReveal>
      
      {/* Right Section - Form */}
      <ScrollReveal animation='fadeIn' duration={800} className="w-full sm:w-auto xl:w-[35%] 2xl:w-[30%] flex justify-center items-center lg:block">
        <ContactForm {...formProps} />
      </ScrollReveal>
    </div>
  );
};

export default SoftwareDevSection1;