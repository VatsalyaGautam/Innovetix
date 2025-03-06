'use client';
import React, { useEffect, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import StatsSection from "./StartupUI/SimpleBoox";
import PricingSection from "./StartupUI/TickSection";
import StartupJourney from "./StartupUI/StartupJourney";
import MultipleItems from "./StartupUI/Testimonial";
import ScrollReveal from '@/components/ScrollReveal';

const FeatureCard = ({ icon, title, description, bgColor, index }) => (
  <ScrollReveal 
    animation="slideLeft" 
    delay={200} 
    index={index} 
    stagger={150} 
    easing="gentle"
  >
    <div className={`rounded-xl p-6 sm:p-2 lg:p-6 flex gap-4 min-h-[11rem] h-auto sm:h-[11rem] flex-col sm:flex-row ${bgColor}`}>
      <div className="flex-shrink-0">
        <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center relative">
          {icon}
          <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-gray-800 rounded-full flex items-center justify-center">
            <div className="w-2 h-2 bg-green-500 rounded-full"></div>
          </div>
        </div>
      </div>
      <div className="space-y-2">
        <h3 className="text-sm md:text-xl font-semibold text-white">{title}</h3>
        <p className="text-xs sm:text-sm text-white/90 leading-relaxed">{description}</p>
      </div>
    </div>
  </ScrollReveal>
);

const StartupLanding = () => {
  return (
    <div className="bg-white min-h-screen">
      <div className="sm:w-[100%] 2xl:w-[80%] max-w-7xl p-6 mx-auto mt-20  xl:mt-36 2xl:mt-40">
        <div className="grid lg:grid-cols-2 gap-2 items-center sm:mb-[10rem]">
          {/* Left Section */}
          <div className="space-y-4 xl:space-y-20 h-full p-0 sm:p-5 md:p-20 lg:p-5">
            <ScrollReveal animation="slideRight" duration={1000} easing="spring">
              <div className='space-y-8'>
                <h1 className="text-5xl xl:text-6xl font-bold text-gray-800">
                  Launch Your Startup from{' '}
                  <span className="text-emerald-600">Zero to 1</span>
                </h1>
                <p className="text-lg md:text-xl text-gray-600 max-w-xl">
                  Starting from scratch or need help in specific areas? We've the tools and
                  resources to set your startup up for success.
                </p>
              </div>
            </ScrollReveal>
            
            <ScrollReveal animation="slideUp" delay={400} duration={800} easing="bouncy">
              <Link 
                href="#"
                className="inline-flex items-center px-6 py-3 bg-emerald-600 text-white rounded-md hover:bg-emerald-700 transition-colors duration-200"
              >
                Start Your Startup Journey
                <svg
                  className="ml-2 w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </Link>
            </ScrollReveal>
          </div>

          {/* Right Section - Grid of Images */}
       
            <div className="w-full flex flex-col gap-4 md:gap-6 px-0 sm:px-20 md:px-20 lg:px-6 mt-5 sm:mt-0">
              {/* Top Row */}
              <div className="flex gap-4 xl:gap-4 justify-between">
              
              <ScrollReveal animation="slideDown" duration={1200} easing="smooth" className="bg-black rounded-2xl w-full md:w-[80%] lg:w-[24rem] xl:w-[29vw] aspect-[2/1]">
                  <div className="relative h-full w-full">
                    <Image
                      src="/Startup/Image1.png"
                      alt="Comparison Donut Chart"
                      className="object-cover rounded-2xl"
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 65vw, 28vw"
                    />
                  </div>
              
                </ScrollReveal>
                <ScrollReveal animation="slightLeft" duration={1200} easing="smooth" className="bg-black rounded-2xl w-1/3 md:w-[25%] lg:w-[12vw] aspect-square lg:h-auto">
                  <div className="relative h-full w-full">
                    <Image
                      src="/Startup/Image2.png"
                      alt="Growth Chart"
                      className="object-cover rounded-2xl"
                      fill
                      sizes="(max-width: 768px) 33vw, (max-width: 1024px) 33vw, 12vw"
                    />
                  </div>
                  </ScrollReveal>
              </div>

              {/* Bottom Row */}
              <div className="flex gap-4 justify-between">
              <ScrollReveal animation="slightRight" duration={1200} easing="smooth"  className="bg-black rounded-2xl w-1/3 md:w-[35%] lg:w-[13vw] aspect-square">
                  <div className="relative h-full w-full">
                    <Image
                      src="/Startup/Image3.png"
                      alt="Team Meeting"
                      className="object-cover rounded-2xl"
                      fill
                      sizes="(max-width: 768px) 33vw, (max-width: 1024px) 30vw, 13vw"
                    />
                  </div>
                  </ScrollReveal>

                  <ScrollReveal animation="slightUp" duration={1200} easing="smooth"  className="bg-black rounded-2xl w-2/3 md:w-[80%] xl:w-[29vw] aspect-[2/1]">
                  <div className="relative h-full w-full">
                    <Image
                      src="/Startup/Image4.png"
                      alt="Analytics Graph"
                      className="object-cover rounded-2xl"
                      fill
                      sizes="(max-width: 768px) 66vw, (max-width: 1024px) 65vw, 28vw"
                    />
                  </div>
                  </ScrollReveal>
              </div>
            </div>
         
        </div>
      </div>

      
        <StatsSection />
      

     
        <PricingSection />
      

      <ScrollReveal animation="slideUp" duration={1000} delay={300} easing="gentle">
        <StartupJourney />
      </ScrollReveal>

      <ScrollReveal animation="slideUp" duration={900} easing="bouncy" className='flex items-center justify-center'>
        <div className="bg-emerald-800 rounded-2xl max-w-7xl  overflow-hidden p-6 mx-[16vw] sm:mx-40 md:mx-20 lg:mx-32 2xl:mx-[20rem] mb-20 flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Left side with image */}
          <div className="relative w-full sm:h-[16rem] md:w-[20rem] lg:h-auto lg:w-[30rem] aspect-video rounded-lg overflow-hidden">
            <div className="flex items-center justify-center md:justify-start rounded-2xl md:p-2 w-full h-full">
              <img 
                src="/Startup/Image8.png"
                alt="Hands assembling lightbulb puzzle"
                className="h-[12rem] sm:h-[14rem] xl:h-[17rem] rounded-2xl"
              />
            </div>
          </div>

          {/* Right side with text content */}
          <div className="w-full md:w-1/2 text-white">
            <h2 className="text-xl sm:text-2xl xl:text-4xl font-bold mb-4">
              Start Your Startup Journey – Choose, Share, and Build Today!
            </h2>
            <a 
              href="#" 
              className="inline-block bg-white text-emerald-800 px-6 py-3 rounded-md font-semibold text-sm sm:text-base lg:text-lg transition-all hover:bg-gray-100 hover:shadow-lg"
            >
              Let's Build Your Startup Success →
            </a>
          </div>
        </div>
      </ScrollReveal>

      <div className="w-full bg-[#131313] px-10 xl:px-4 py-16">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <ScrollReveal animation="slideDown" duration={800} easing="smooth">
            <div className="mb-12 text-center md:text-left">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Why Choose Us for Your Startup Journey?
              </h2>
              <p className="text-xl text-white/80">
                We offer more than just services – we provide the expertise, support, and flexibility to help you succeed.
              </p>
            </div>
          </ScrollReveal>

          {/* Features Grid */}
          <div className="flex flex-col md:flex-row gap-6">
            {/* Left Column - Features */}
            <div className="space-y-6">
              <FeatureCard
                icon={<span className="text-2xl">💰</span>}
                title="Affordable & Flexible"
                description="Select the services you need for $249 each, or grab the full package for $999. Scale at your own pace without overspending!"
                bgColor="bg-emerald-800"
                index={0}
              />
              
              <FeatureCard
                icon={<span className="text-2xl">👑</span>}
                title="Proven Experience You Can Trust"
                description="With experience across diverse industries, we understand startup challenges and how to overcome them!"
                bgColor="bg-stone-400"
                index={1}
              />
              
              <FeatureCard
                icon={<span className="text-2xl">📞</span>}
                title="Dedicated Support"
                description="We don't just deliver services; we become your partners. From initial planning to launch, we're committed to guiding you through every stage of your startup journey."
                bgColor="bg-gray-700"
                index={2}
              />
            </div>

            {/* Right Column - Image */}
            <ScrollReveal animation="slideLeft" duration={1000} delay={400} easing="spring">
              <div className="relative rounded-xl overflow-hidden mt-6 md:mt-0">
                <div className="absolute top-4 right-2 bg-[#123F28] text-white p-2 sm:p-4 rounded-xl z-10 flex flex-col items-center gap-6 ">
                <div className="relative bg-[#2A754F80] p-6 rounded-2xl w-16 sm:w-24 h-10 sm:h-16 flex flex-col justify-center items-center shadow-lg">
        <div className="w-2/3 h-1.5 bg-[#DCD9C4] rounded-md mb-2"></div>
        <div className="w-3/4 h-1.5 bg-[#DCD9C4] rounded-md"></div>
        <div className="absolute -bottom-4    rounded-full shadow-md">
          <img className='w-6 sm:w-8 h-6 sm:h-8' src="/Startup/check.png" alt="" />
        </div>
      </div>
                  <span className='text-sm sm:text-base'>VERIFIED DATA</span>
                </div>
                <img 
                  src="/Startup/Image9.png" 
                  alt="Team collaboration" 
                  className="w-[60rem] lg:w-[40rem] h-full md:h-[36rem] object-cover"
                />
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>

      <ScrollReveal animation="fadeSlideLeft" duration={1000} delay={200} easing="gentle">
        <MultipleItems />
      </ScrollReveal>
    </div>
  );
};

export default StartupLanding;