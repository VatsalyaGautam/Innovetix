"use client"
import { React } from 'react';
import ScrollReveal from '@/components/ScrollReveal';
import ContactForm from '@/components/Industries/Education/Form';

const LandingPage = ({ 
  // Heading section props
  mainHeading = "Looking For An Education App Development Company?",
  subHeading = "We build next-level educational apps that empower educators and learners, both.",
  
  // Feature points props
  featurePoints = [
    "Your Vision, Your App, Your Code- We Just build it.",
    "Build your education app with Advanced AI capabilities",
    "End-to-End Data Encryption With Blockchain-Based Architecture"
  ],
  
  // Form section props
  formProps = {
    formTitle: "Launch Your Dream EdTech App",
    formSubmitText: "Submit",
    buttonColorClass: "bg-blue-500 hover:bg-blue-600"
  },
  
  // Color customization
  bgColorClass = "bg-blue-400"
}) => {
  return (
    <div className="max-w-[100%] mx-auto flex flex-col md:flex-row items-center sm:items-start lg:items-center justify-around px-6 sm:px-3 lg:px-6 py-12 mt-16 sm:mt-20 2xl:mt-24 z-10">
      
      {/* Left Section - Text Content */}
      <ScrollReveal animation='slightRight' duration={800} className="md:w-1/2 mb-12 md:mb-0 flex flex-col justify-evenly md:justify-start lg:h-[35rem] lg:space-y-10 pt-4 lg:pt-0">
        <div className='lg:mt-10 xl:mt-0'>
          <h1 className="text-4xl sm:text-3xl xl:text-5xl font-bold mb-6 2xl:mt-6">
            {mainHeading}
          </h1>
          <p className="text-xl lg:mb-10">
            {subHeading}
          </p>
        </div>
        
        <div className="space-y-4">
          {featurePoints.map((point, index) => (
            <div key={index} className="flex items-start">
              <div className={`${bgColorClass} rounded-full p-1 mr-3 mt-1`}>
                <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              </div>
              <p className="text-lg">{point}</p>
            </div>
          ))}
        </div>
      </ScrollReveal>
      
      {/* Right Section - Form */}
      <ScrollReveal animation='fadeIn' duration={800} className="w-[100%] sm:w-auto xl:w-[35%] 2xl:w-[30%] flex justify-center items-center lg:block">
        <ContactForm {...formProps} />
      </ScrollReveal>
    </div>
  );
};

export default LandingPage;