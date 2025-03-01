"use client"
import React, { useState, useRef, useEffect } from 'react';
import ScrollReveal from '@/components/ScrollReveal';


const PricingSection = () => {
  const [selectedServices, setSelectedServices] = useState([]);

  const services = [
    {
      id: 1,
      title: "Actionable Market Research",
      features: [
        "Market size and growth potential",
        "Competitor analysis and positioning"
      ]
    },
    {
      id: 2,
      title: "Strategic Business Plans",
      features: [
        "Business & Revenue Model",
        "Market and competition analysis"
      ]
    },
    {
      id: 3,
      title: "Startup Legal Support",
      features: [
        "Legal compliance and risk mitigation",
        "Business and IP protection"
      ]
    },
    {
      id: 4,
      title: "Interactive UI/UX Designs",
      features: [
        "Intuitive user journey mapping",
        "Prototyping & Wireframing"
      ]
    },
    {
      id: 5,
      title: "Impactful Marketing Roadmaps",
      features: [
        "12-month marketing execution plan",
        "Pre and Post launch strategies"
      ]
    },
    {
      id: 6,
      title: "Investor Pitch Decks",
      features: [
        "Business model and market fit",
        "Financials and growth projections"
      ]
    }
  ];

  const handleServiceSelect = (id) => {
    setSelectedServices(prev => {
      if (prev.includes(id)) {
        return prev.filter(serviceId => serviceId !== id);
      } else {
        return [...prev, id];
      }
    });
  };

  const calculateTotal = () => {
    if (selectedServices.length === 0) return 0;
    return selectedServices.length * 249;
  };

  const selectFullBundle = () => {
    if (selectedServices.length === services.length) {
      setSelectedServices([]);
    } else {
      setSelectedServices(services.map(service => service.id));
    }
  };

  return (
    <div className="bg-[#121212] min-h-screen flex items-center justify-center p-8 md:p-12 lg:p-16">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <ScrollReveal 
          animation="slideDown" 
          duration={1000} 
          delay={200} 
          easing="gentle"
        >
          <h2 className="text-2xl md:text-4xl lg:text-5xl mb-12 text-white">
            Select <span className="text-emerald-500">any service</span> for just $249,{' '}
            <span className="text-gray-400">or opt for the</span>{' '}
            <span className="text-emerald-500">Full Startup Bundle</span> of all six services for only $999
          </h2>
        </ScrollReveal>

        {/* Services Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Service Cards */}
          <div className="col-span-1 lg:col-span-10 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {services.map((service, index) => (
              <ScrollReveal
                key={service.id}
                animation="scaleUp"
                duration={700}
                delay={200}
                easing="spring"
                index={index}
                stagger={150}
              >
                <div
                  className={`bg-[#1A1A1A] rounded-xl p-6 cursor-pointer transition-all duration-200 ${
                    selectedServices.includes(service.id) ? 'ring-2 ring-emerald-500' : ''
                  }`}
                  onClick={() => handleServiceSelect(service.id)}
                >
                  <div className="flex items-center gap-4 mb-4">
                    <div className={`w-6 h-6 rounded border ${
                      selectedServices.includes(service.id)
                        ? 'border-emerald-500 bg-emerald-500'
                        : 'border-gray-600'
                    }`}>
                      {selectedServices.includes(service.id) && (
                        <svg viewBox="0 0 24 24" fill="white" className="w-6 h-6">
                          <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" />
                        </svg>
                      )}
                    </div>
                    <h3 className="text-base xl:text-xl text-white font-medium">{service.title}</h3>
                  </div>
                  <div className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-gray-300">
                        <svg className="w-5 h-5 text-emerald-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span className='text-base'>{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>

          {/* Summary Card */}
          <div className="sm:flex lg:flex-col gap-8 lg:col-span-2">
            {/* Bundle Card */}
            <ScrollReveal
              animation="slightLeft"
              duration={800}
              delay={700}
              easing="gentle"
            >
              <div 
                className="bg-[#E8E6DD] flex flex-col justify-around py-6 px-6 lg:px-3 xl:px-6 pb-10 pt-10 rounded-xl cursor-pointer"
                onClick={selectFullBundle}
              >
                <div className="flex items-center justify-between lg:gap-1 xl:gap-5 mb-4">
                  <div className={`w-6 h-6 rounded border ${
                    selectedServices.length === services.length
                      ? 'border-emerald-500 bg-emerald-500'
                      : 'border-gray-600'
                  }`}>
                    {selectedServices.length === services.length && (
                      <svg viewBox="0 0 24 24" fill="white" className="w-6 h-6">
                        <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" />
                      </svg>
                    )}
                  </div>
                  <span className="bg-red-600 text-white px-3 py-1 rounded-full text-sm">
                    50% off
                  </span>
                </div>
                <h3 className="text-2xl lg:text-xl xl:text-2xl font-bold text-black">Full Startup Bundle</h3>
              </div>
            </ScrollReveal>

            {/* Price Summary */}
            <ScrollReveal
              animation="slightLeft"
              duration={800}
              delay={900}
              easing="smooth"
            >
              <div className="bg-[#123F28] p-4 h-full lg:h-[30vh] 2xl:h-[18rem] rounded-xl mt-8 sm:mt-0 flex flex-col justify-center">
                <div className="text-gray-300 lg:mb-4">
                  {selectedServices.length}/6 Selected
                </div>
                <div className="lg:mb-6">
                  <div className="text-gray-300">Amount</div>
                  <div className="text-4xl font-bold text-white">
                    ${selectedServices.length === services.length ? 999 : calculateTotal()}
                  </div>
                </div>
                <div className='w-full h-0.5 bg-[#F9F8F180] mb-1 lg:mb-4'></div>

                <button className="w-full bg-[#E8E6DD] text-sm text-[#123F28] py-1 lg:py-3 px-2 rounded-lg font-medium flex items-center justify-center gap-2">
                  Make Payment
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </button>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PricingSection;