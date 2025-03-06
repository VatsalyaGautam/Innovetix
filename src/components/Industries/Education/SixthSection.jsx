import React from 'react';
import ScrollReveal from '@/components/ScrollReveal';

const DevelopmentProcess = () => {
  const topRowSteps = [
    {
      number: '01',
      title: 'Match with an Expert',
      description: 'Dedicated education app expert manages everything-kick-off to launch & beyond.'
    },
    {
      number: '02',
      title: 'Plan & Validate',
      description: 'Define your education app with a detailed business plan, get fixed costs and timelines.'
    },
    {
      number: '03',
      title: 'Craft the Experience',
      description: 'Get wireframing, user flow & branding done for a flawless education app experience.'
    },
    {
      number: '04',
      title: 'AI-Powered Efficiency',
      description: 'Save time and cost with AI, helping assemble the chosen features for your education app.'
    }
  ];

  const bottomRowSteps = [
    {
      number: '05',
      title: 'Scale With Funding Expertise',
      description: 'Our R&D team helps secure funding with a compelling pitch deck & effective investor relations.'
    },
    {
      number: '06',
      title: 'Strategic Launch',
      description: 'Help maximize visibility & downloads with pre- & post-launch marketing.'
    },
    {
      number: '07',
      title: 'Your Code, Your App',
      description: 'Get your educational app with complete source code ownership and IP rights.'
    },
    {
      number: '08',
      title: '100% Customization',
      description: 'Want unique features crafted? Get custom-built by our education app developers.'
    }
  ];

  const renderSteps = (steps) => (
    <div className="flex justify-between relative ">
      <svg 
        className="absolute inset-0 w-full h-1/4 md:h-1/3 xl:h-1/2 pointer-events-none z-0" 
        viewBox="0 0 1433 1" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
      >
        <line y1="0.5" x2="1433" y2="0.5" stroke="black" strokeDasharray="8 8"/>
      </svg>
      {steps.map((step) => (
        <div 
          key={step.number} 
          className="w-[calc(25%-15px)] rounded-lg lg:p-6  relative z-10"
        >
          <div className="w-16 h-16 bg-blue-800 text-white rounded-full flex items-center justify-center mb-4 text-2xl font-bold">
            {step.number}
          </div>
          <h3 className="text-xl text-start font-semibold mb-3 leading-tight">{step.title}</h3>
          <p className="text-gray-600 text-start">{step.description}</p>
        </div>
      ))}
    </div>
  );

  return (
    <div className="container max-w-[1024px] px-6 py-12 sm:mt-10 md:mt-16">
      <ScrollReveal animation='slideDown' duration={800} className="text-center mb-12 ">
        <h2 className="text-3xl font-bold mb-4">And Not Just Tech, We Offer A Lot More To Help You Succeed</h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          From research to launch, we utilize a holistic development process that goes beyond just the technology to set your educational app for growth.
        </p>
      </ScrollReveal>
      
      <ScrollReveal animation='fadeIn' duration={800} className="space-y-6 hidden sm:block">
        {renderSteps(topRowSteps)}
        {renderSteps(bottomRowSteps)}
      </ScrollReveal>


 {/* Small screen layout */}
 <div className="sm:hidden">
        <div className="grid grid-cols-2 gap-4">
          {topRowSteps.map((step) => (
            <div 
              key={step.number} 
              className="rounded-lg p-4"
            >
              <div className="w-16 h-16 bg-blue-800 text-white rounded-full flex items-center justify-center mb-4 text-2xl font-bold">
                {step.number}
              </div>
              <h3 className="text-xl text-start font-semibold mb-3 leading-tight">{step.title}</h3>
              <p className="text-gray-600 text-start">{step.description}</p>
            </div>
          ))}
        </div>
      </div>


      <div className="sm:hidden">
        <div className="grid grid-cols-2 gap-4">
          {bottomRowSteps.map((step) => (
            <div 
              key={step.number} 
              className="rounded-lg p-4"
            >
              <div className="w-16 h-16 bg-blue-800 text-white rounded-full flex items-center justify-center mb-4 text-2xl font-bold">
                {step.number}
              </div>
              <h3 className="text-xl text-start font-semibold mb-3 leading-tight">{step.title}</h3>
              <p className="text-gray-600 text-start">{step.description}</p>
            </div>
          ))}
        </div>
      </div>

    </div>


  );
};

export default DevelopmentProcess;