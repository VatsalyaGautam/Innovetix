import React from "react";
import { ArrowRight, Star, Shield, Code } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Image from "next/legacy/image";
const TechSuite = () => {
  return (
    <div className="bg-slate-50">
      <div className="bg-slate-50 h-auto py-9 md:py-16 w-full px-5 md:max-w-5xl lg:max-w-6xl mx-auto flex flex-col gap-16">
        {/* Header Section */}
        <div className="text-center space-y-4">
          <p className="text-blue-700 font-semibold text-lg">Build</p>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Advanced Technology Suite
          </h2>
          <div>
            <p className="text-gray-700 text-lg">
              Custom Mobile App Development | Software Development | Product
              Development |
            </p>
            <p className="text-gray-700 text-lg">
              Custom-built Mobility Solutions
            </p>
          </div>
          <p className="text-xl text-gray-800 mt-4">
            "Our 100+ custom-built mobile apps have been featured on the popular
            app store"
          </p>
        </div>

        {/* Main Content */}
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Left side with accordion */}
          <div className="lg:w-1/2 w-full space-y-4">
            <Accordion
              type="single"
              collapsible
              defaultValue="item-1"
              className="w-full flex flex-col gap-6"
            >
              <AccordionItem
                value="item-1"
                className="bg-[#2E3F981A] border-1 border-solid  border-[#00000080] shadow-sm border"
              >
                <AccordionTrigger className="px-4 py-4 hover:no-underline">
                  <div className="flex items-center gap-3">
                    <Star className="w-6 h-6" />
                    <span className="text-lg font-semibold">
                      Custom App Development
                    </span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="px-4 pb-4">
                  Standout from the competition with results-driven &
                  industry-leading custom application development solutions that
                  keeps you ahead of the curve.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem
                value="item-2"
                className="bg-[#2E3F981A] border-1 border-solid  border-[#00000080] shadow-sm border"
              >
                <AccordionTrigger className="px-4 py-4 hover:no-underline">
                  <div className="flex items-center gap-3">
                    <Shield className="w-6 h-6" />
                    <span className="text-lg font-semibold">
                      Robust & Scalable Solution
                    </span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="px-4 pb-4">
                  Our solutions are built with scalability and robustness in
                  mind, ensuring your application can grow with your business
                  needs.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem
                value="item-3"
                className="bg-[#2E3F981A] border-1 border-solid  border-[#00000080]  shadow-sm border"
              >
                <AccordionTrigger className="px-4 py-4 hover:no-underline">
                  <div className="flex items-center gap-3">
                    <Code className="w-6 h-6" />
                    <span className="text-lg font-semibold">
                      Own Source Code & IP Rights
                    </span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="px-4 pb-4">
                  You retain full ownership of your source code and intellectual
                  property rights, ensuring complete control over your
                  application.
                </AccordionContent>
              </AccordionItem>
            </Accordion>

            {/* CTA Button */}
            <button className="w-full bg-[#C59E12] text-white px-6 py-4 rounded-sm font-medium flex items-center justify-center gap-2 hover:bg-yellow-800 !mt-10 transition-colors">
              Get Your Complete Tech Suite
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>

          {/* Right side image placeholder */}
          <div className="lg:w-1/2 w-full h-[15rem] md:h-[20rem] lg:h-[25rem] relative">
            <Image
              src="/studio/studioDigital.svg"
              layout="fill"
              alt="studioHero"
              objectFit="contain"
            />
          </div>
        </div>
      </div>
    </div>

    
  );
};

export default TechSuite;
