import React from "react";
import { Button } from "@/components/ui/button";
import Image from "next/image";

const WhyChooseInnovetix = () => {
  const stats = [
    {
      title: "DESIGNERS",
      count: "300+",
      description: "UI/UX Designers",
      profiles: [
        "https://placehold.co/40x40/4F46E5/FFFFFF?text=D1",
        "https://placehold.co/40x40/4F46E5/FFFFFF?text=D2",
        "https://placehold.co/40x40/4F46E5/FFFFFF?text=D3",
        "https://placehold.co/40x40/4F46E5/FFFFFF?text=D4",
      ],
    },
    {
      title: "DEVELOPER",
      count: "300+",
      description: "Full stack Developer",
      profiles: [
        "https://placehold.co/40x40/4F46E5/FFFFFF?text=F1",
        "https://placehold.co/40x40/4F46E5/FFFFFF?text=F2",
        "https://placehold.co/40x40/4F46E5/FFFFFF?text=F3",
        "https://placehold.co/40x40/4F46E5/FFFFFF?text=F4",
      ],
    },
    {
      title: "DEVELOPER",
      count: "300+",
      description: "Mobile App Developer",
      profiles: [
        "https://placehold.co/40x40/4F46E5/FFFFFF?text=M1",
        "https://placehold.co/40x40/4F46E5/FFFFFF?text=M2",
        "https://placehold.co/40x40/4F46E5/FFFFFF?text=M3",
        "https://placehold.co/40x40/4F46E5/FFFFFF?text=M4",
      ],
    },
    {
      title: "BUILDER",
      count: "300+",
      description: "UI/UX Designers",
      profiles: [
        "https://placehold.co/40x40/4F46E5/FFFFFF?text=B1",
        "https://placehold.co/40x40/4F46E5/FFFFFF?text=B2",
        "https://placehold.co/40x40/4F46E5/FFFFFF?text=B3",
        "https://placehold.co/40x40/4F46E5/FFFFFF?text=B4",
      ],
    },
  ];

  return (
    <div className="w-full">
      {/* Why Choose Innovetix Section */}
      <div className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-3">Why Choose Innovetix?</h2>
          <p className="max-w-3xl mx-auto text-gray-600">
            With a deep passion for technology and a strong track record in
            delivering cutting-edge IT solutions, we have successfully worked
            with individuals and businesses across a broad range of industries.
          </p>
        </div>

        {/* Features with wavy line */}
        <div className="relative mt-20 mb-32 xl:max-w-7xl mx-auto">
          {/* Wavy dotted line */}
          <div className="absolute w-full top-0 pointer-events-none">
            <img src="/about/wave.svg"></img>
          </div>

          {/* Features as direct HTML */}
          <div className="flex flex-wrap justify-between items-center gap-y-24 relative z-10 h-48">
            <div
              className="flex flex-col absolute items-center w-full sm:w-1/2 md:w-1/3 lg:w-1/5 px-4 left-0
            
            
             xl:-top-8"
            >
              <div className="bg-[#273264] border-8 border-[rgba(39, 50, 100, 0.8)] w-20 h-20 rounded-full flex items-center justify-center mb-4 text-white text-2xl">
                <Image
                  src="/about/dev.svg"
                  width={40}
                  height={40}
                  alt="Highly Experienced Developers icon"
                />
              </div>
              <h3 className="text-gray-400 font-semibold text-xl text-center">
                Highly Experienced
              </h3>
              <p className="text-gray-950 font-medium text-lg text-center -mt-1">
                Developers
              </p>
            </div>

            <div className="flex flex-col absolute items-center w-full sm:w-1/2 md:w-1/3 lg:w-1/5 px-4 left-[20%]
            
             xl:top-20">
              <div className="bg-[#273264] border-8 border-[rgba(39, 50, 100, 0.8)] w-20 h-20 rounded-full flex items-center justify-center mb-4 text-white text-2xl">
                <Image
                  src="/about/hiring.svg"
                  width={40}
                  height={40}
                  alt="Seamless Hiring icon"
                />
              </div>
              <h3 className="text-gray-400 font-semibold text-xl text-center">
                Seamless
              </h3>
              <p className="text-gray-950 font-medium text-lg text-center -mt-1">
                Hiring
              </p>
            </div>

            <div className="flex flex-col absolute items-center w-full sm:w-1/2 md:w-1/3 lg:w-1/5 px-4 left-[40%]
            
            xl:top-8">
              <div className="bg-[#273264] border-8 border-[rgba(39, 50, 100, 0.8)] w-20 h-20 rounded-full flex items-center justify-center mb-4 text-white text-2xl">
                <Image
                  src="/about/scaling.svg"
                  width={40}
                  height={40}
                  alt="Quick Team Scaling icon"
                />
              </div>
              <h3 className="text-gray-400 font-semibold text-xl text-center">
                Quick Team
              </h3>
              <p className="text-gray-950 font-medium text-lg text-center -mt-1">
                Scaling
              </p>
            </div>

            <div className="flex flex-col absolute items-center w-full sm:w-1/2 md:w-1/3 lg:w-1/5 px-4 left-[60%]
            
            xl:top-[8.6rem]">
              <div className="bg-[#273264] border-8 border-[rgba(39, 50, 100, 0.8)] w-20 h-20 rounded-full flex items-center justify-center mb-4 text-white text-2xl">
                <Image
                  src="/about/agile.svg"
                  width={40}
                  height={40}
                  alt="Agile Methodology icon"
                />
              </div>
              <h3 className="text-gray-400 font-semibold text-xl text-center">
                Agile
              </h3>
              <p className="text-gray-950 font-medium text-lg text-center -mt-1">
                Methodology
              </p>
            </div>

            <div className="flex flex-col absolute items-center w-full sm:w-1/2 md:w-1/3 lg:w-1/5 px-4 left-[80%]
            
            xl:top-32">
              <div className="bg-[#273264] border-8 border-[rgba(39, 50, 100, 0.8)] w-20 h-20 rounded-full flex items-center justify-center mb-4 text-white text-2xl relative">
                <Image
                  src="/about/reliable.svg"
                  width={40}
                  height={40}
                  alt="Reliable Solutions icon"
                />
                <Image
                  src="/about/toggle.svg"
                  width={20}
                  height={22.3}
                  alt="toggle"
                  className="absolute"
                />
              </div>
              <h3 className="text-gray-400 font-semibold text-xl text-center">
                Reliable
              </h3>
              <p className="text-gray-950 font-medium text-lg text-center -mt-1">
                Solutions & Security
              </p>
            </div>
          </div>
        </div>

        {/* Horizontal line */}
        <div className="border-t border-gray-200 w-full my-12"></div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
          {stats.map((stat, index) => (
            <div key={index} className="bg-slate-900 text-white p-8 rounded-md">
              <h3 className="text-indigo-400  text-xl font-bold mb-2">
                {stat.title}
              </h3>
              <p className="text-4xl font-bold text-white mb-1">{stat.count}</p>
              <p className="text-sm text-gray-300">{stat.description}</p>

              {/* Profile images row with plus button */}
              <div className="flex items-center mt-6">
                {stat.profiles.map((profile, i) => (
                  <div
                    key={i}
                    className={`w-8 h-8 rounded-full border-2 border-slate-900 -ml-2 first:ml-0 overflow-hidden`}
                  >
                    <img
                      src={profile}
                      alt={`Team member ${i + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                ))}
                <div className="w-8 h-8 rounded-full bg-indigo-600 flex items-center justify-center -ml-2">
                  <span className="text-xs">+</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-slate-900 text-white py-16 px-4 text-center">
        <h2 className="text-3xl  mb-2 font-light">
          We Work Together To Build Success For You.
        </h2>
        <p className="text-4xl font-semibold mb-8 ">
          Have An Amazing Idea? Let's Transform It Now.
        </p>
        <Button className="bg-white text-slate-900 hover:bg-gray-200 px-8 py-2 rounded">
          Get Started
        </Button>
      </div>
    </div>
  );
};

export default WhyChooseInnovetix;
