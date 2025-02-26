import React from 'react';
import Image from 'next/image';

const StartupJourney = () => {
  const steps = [
    {
      number: "1",
      title: "Choose Your Service(s)",
      description: "Whether you need a single service or want to bundle all six for maximum impact, we've got you covered. Each service is available for $249, or you can get the complete package for just $999.",
      image: "/Startup/Image5.png", // Replace with actual image path
    },
    {
      number: "2",
      title: "Tell Us About Your Startup",
      description: "We customize everything to your startup's unique needs. Fill out our quick form to give us insight into your business, your stage, and your goals.",
      image: "/Startup/Image6.png", // Replace with actual image path
    },
    {
      number: "3",
      title: "Pay & Let's Make It Happen",
      description: "Complete your purchase through our secure Stripe payment system. Once confirmed, we'll jump into action to help you bring your startup to life.",
      image: "/Startup/Image7.png", // Replace with actual image path
    }
  ];

  return (
    <div className="w-full bg-white py-16 px-4 sm:px-6 md:px-8 lg:px-16">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-[#3B3534] mb-4">
            Your Startup Journey Gets As Easy As 1-2-3
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
            We've simplified the process so you can focus on what matters – building your business.
          </p>
        </div>

        {/* Steps Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 lg:gap-16">
          {steps.map((step, index) => (
            <div key={index} className="flex flex-col items-center text-center">
              {/* Image Container */}
              <div className="relative w-48 h-48 mb-8">
                <Image
                  src={step.image}
                  alt={step.title}
                  fill
                  className="object-contain"
                  sizes="(max-width: 768px) 192px, 192px"
                />
              </div>

              {/* Step Number */}
              <div className="w-16 h-16 rounded-full bg-[#0B3829] flex items-center justify-center mb-6">
                <span className="text-2xl font-bold text-white">{step.number}</span>
              </div>

              {/* Content */}
              <h3 className="text-2xl font-bold text-gray-800 mb-4">
                {step.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default StartupJourney;