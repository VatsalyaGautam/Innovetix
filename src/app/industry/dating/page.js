import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Paintbrush, ShieldCheck, Headphones, ArrowRight } from "lucide-react";
import Image from "next/image";
import DatingModelsShowcase from "@/components/Industry/Dating/DatingModelsShowcase";
import BottomAccordion from "@/components/BottomAccordion";
import ScrollReveal from "@/components/ScrollReveal";
import { foodfaqItems } from "@/lib/config";
const page = () => {
  return (
    <>
      {/* HERO / Section 1 */}
      <div className="relative w-full pt-20 h-[25rem] md:h-[40rem] lg:h-[50rem] overflow-x-hidden">
        {/* Background Image Div */}
        <div className="absolute inset-0 z-0 bg-cover bg-center bg-[url('/dating/heroImage.svg')]">
          {/* Overlay gradient for better text visibility */}
          <div className="w-full h-full bg-gradient-to-r from-black/60 to-black/90 pointer-events-none"></div>
        </div>

        {/* Content Container */}
        <div className="relative z-10 flex flex-col items-center justify-center h-full w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          {/* Main Heading */}
          <ScrollReveal
            easing="smooth"
            animation="slightDown"
            duration={800}
            delay={100}
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
              Have a Killer Idea for a Dating App
            </h1>

            {/* Subheading */}
            <p className="text-lg md:text-xl lg:text-2xl text-white mb-8 max-w-3xl">
              Turn your niche dating concept into the next big thing in online
              dating with our Dating App Development Services.
            </p>
          </ScrollReveal>
          <ScrollReveal
            easing="smooth"
            animation="slightUp"
            duration={800}
            delay={100}
          >
            {/* CTA Button */}
            <Button className="bg-pink-500 hover:bg-pink-600 text-white px-8 py-6 rounded-md text-lg font-medium transition-all duration-200 flex items-center gap-2">
              Get Insight From Our Expert
              <ArrowRight className="h-5 w-5" />
            </Button>
          </ScrollReveal>
        </div>
      </div>
      {/* HERO END */}

      {/* Section 2 */}
      <div className="bg-slate-50 ">
        <div className="bg-slate-50   px-5 md:max-w-5xl lg:max-w-6xl mx-auto flex flex-col ">
          <div className="w-full py-16 bg-slate-50">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
              {/* Heading Section */}
              <ScrollReveal
                animation="slightDown"
                easing="smooth"
                duration={800}
                delay={100}
                className="text-center mb-12"
              >
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-black mb-4">
                  The 'Blueprint' for Crafting
                  <br className="sm:block hidden"/>
                  Outstanding Dating App Success
                </h2>
                <p className="text-lg text-center max-w-4xl mx-auto">
                  Big ideas deserve outstanding execution! At Code Brew, we
                  combine innovation with excellence to build Dating apps that
                  wow investors and users.
                </p>
              </ScrollReveal>

              {/* Three Column Features */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
                {/* Feature 1 */}
                <ScrollReveal
                  animation="slideRight"
                  easing="spring"
                  duration={1000}
                  delay={300}
                  className="flex flex-col items-center text-center"
                >
                  <div className="w-32 h-32 bg-pink-500 rounded-md flex items-center justify-center mb-4">
                    {/* Placeholder for icon */}
                    <div className="w-20 h-20">
                      <Image
                        src="/dating/sec2icon1.svg"
                        alt="Feature 1"
                        width={80}
                        height={78.52}
                      />
                    </div>
                  </div>
                  <h3 className="text-xl font-bold mb-2">
                    Captivating Investor
                    <br />
                    Attention
                  </h3>
                  <p className="text-sm">
                    We harness the power of advanced tech like AI and AR/VR to
                    help you capture the attention of investors.
                  </p>
                </ScrollReveal>

                {/* Feature 2 */}
                <ScrollReveal
                  animation="slideUp"
                  easing="spring"
                  duration={1000}
                  delay={300}
                  className="flex flex-col items-center text-center"
                >
                  <div className="w-32 h-32 bg-pink-500 rounded-md flex items-center justify-center mb-4">
                    {/* Placeholder for icon */}
                    <div className="w-20 h-20">
                      <Image
                        src="/dating/sec2icon2.svg"
                        alt="Feature 1"
                        width={80}
                        height={80}
                      />
                    </div>
                  </div>
                  <h3 className="text-xl font-bold mb-2">
                    User-Centric
                    <br />
                    Design
                  </h3>
                  <p className="text-sm">
                    We craft seamless experiences, user-centric journeys,
                    prioritizing emotional resonance and satisfaction.
                  </p>
                </ScrollReveal>

                {/* Feature 3 */}
                <ScrollReveal
                  animation="slideLeft"
                  easing="spring"
                  duration={1000}
                  delay={300}
                  className="flex flex-col items-center text-center"
                >
                  <div className="w-32 h-32 bg-pink-500 rounded-md flex items-center justify-center mb-4">
                    {/* Placeholder for icon */}
                    <div className="w-20 h-20">
                      <Image
                        src="/dating/sec2icon3.svg"
                        alt="Feature 1"
                        width={80}
                        height={80}
                      />
                    </div>
                  </div>
                  <h3 className="text-xl font-bold mb-2">
                    Robust, Scalable
                    <br />
                    Architecture
                  </h3>
                  <p className="text-sm">
                    We build a strong foundation that ensures smooth expansion &
                    seamless addition of new features.
                  </p>
                </ScrollReveal>
              </div>

              {/* CTA Button */}
              <div className="flex justify-center">
                <Button className="bg-pink-500 hover:bg-pink-600 text-white px-6 py-5 rounded-md text-lg font-medium transition-all duration-200 flex items-center gap-2">
                  Kick Start My Success
                  <ArrowRight className="h-5 w-5" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Section 2 End */}

      {/* Section  3 */}
      <div className="w-full py-12 md:py-16 bg-black">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          {/* Heading with color highlight */}
          <ScrollReveal
            animation="slightDown"
            easing="smooth"
            duration={800}
            delay={100}
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-8">
              Ready to{" "}
              <span className="text-pink-500">Transform Statistics</span>
              <br />
              into Success?
            </h2>
          </ScrollReveal>

          {/* CTA Button */}
          <ScrollReveal
            animation="slightUp"
            easing="smooth"
            duration={800}
            delay={100}
            className="flex justify-center"
          >
            <Button className="bg-pink-500 hover:bg-pink-600 text-white px-6 py-5 rounded-md text-lg font-medium transition-all duration-200 flex items-center gap-2">
              Start Building My App
              <ArrowRight className="h-5 w-5" />
            </Button>
          </ScrollReveal>
        </div>
      </div>
      {/* Section 3 End */}

      {/* Section 4 */}
      <div className="w-full max-w-6xl mx-auto px-4 py-8">
        {/* Main Stats Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
        <div className="flex justify-center w-full">
          <ScrollReveal
            animation="slightRight"
            easing="smooth"
            duration={800}
            delay={100}
            className="bg-black text-white  rounded-lg relative overflow-hidden shadow-lg max-w-lg  md:max-w-full"
          >
            {/* World Map Background */}
        
            <div className="absolute inset-0 opacity-30">
              {/* This would be where your world map image goes */}
              <div className="h-full w-full bg-gradient-to-b from-gray-800 to-black"></div>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-x-8 gap-y-16 relative z-10 mx-10 mt-10">
              {/* 10,000 Stats */}
              <div>
                <h2 className="text-5xl md:text-5xl lg:text-6xl font-bold mb-2">10,000</h2>
                <p className="text-sm leading-tight">
                  Customized Solutions
                  <br />
                  Delivered
                </p>
              </div>

              {/* 30+ Stats */}
              <div>
                <h2 className="text-5xl md:text-5xl lg:text-6xl font-bold mb-2">30+</h2>
                <p className="text-sm leading-tight">
                  Initial Business
                  <br />
                  Consultants
                </p>
              </div>

              {/* 120+ Stats */}
              <div>
                <h2 className="text-5xl md:text-5xl lg:text-6xl font-bold mb-2">120+</h2>
                <p className="text-sm leading-tight">
                  Million of Dollars worth
                  <br />
                  Businesses Empowered
                </p>
              </div>

              {/* 4.8/5 Stats */}
              <div>
                <h2 className="text-5xl md:text-5xl lg:text-6xl font-bold mb-2">4.8/5</h2>
                <p className="text-sm leading-tight">
                  Avg. Rating on
                  <br />
                  Top Platforms
                </p>
              </div>
            </div>
            <div className="w-full">
              <Image
                src="/dating/connectionGlobe.svg"
                width={436}
                height={248.58}
                className="w-full object-contain"
                alt="connections-globe"
              />
            </div>
          
          </ScrollReveal>
          </div>
          {/* Services Section */}
          <ScrollReveal
            animation="slightLeft"
            easing="smooth"
            duration={800}
            delay={100}
            className="flex justify-center items-center"
          >
            <div className="flex flex-col gap-8 py-2">
              {/* Unique Solutions */}
              <div className="flex items-start gap-5">
                <div className="min-w-14 h-14 flex items-center justify-center rounded-full ">
                  <Image
                    src="/dating/sec4icon1.svg"
                    width={56}
                    height={56}
                    alt="Unique"
                    className="h-14 w-14"
                  />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-1">
                    Unique (Ideas+Process) = Unique Solutions
                  </h3>
                  <p className="text-sm text-gray-700 leading-relaxed">
                    Industry Research || Exceptional UI/UX || Custom Development
                    <br />
                    || Pre & Post Marketing
                  </p>
                </div>
              </div>

              {/* Your App, Your Rights */}
              <div className="flex items-start gap-5">
                <div className="min-w-14 h-14 flex items-center justify-center rounded-full ">
                  <Image
                    src="/dating/sec4icon2.svg"
                    width={56}
                    height={56}
                    alt="Privacy"
                    className="h-14 w-14"
                  />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-1">
                    Your App, Your Rights- We Just Build It
                  </h3>
                  <p className="text-sm text-gray-700 leading-relaxed">
                    Complete Source Code || Own IP Rights || Database Security
                    <br />
                    || Host Anywhere
                  </p>
                </div>
              </div>

              {/* AI-Powered */}
              <div className="flex items-start gap-5">
                <div className="min-w-14 h-14 flex items-center justify-center rounded-full ">
                  <Image
                    src="/dating/sec4icon3.svg"
                    width={56}
                    height={56}
                    alt="AI-Powered"
                    className="h-14 w-14"
                  />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-1">
                    AI-Powered & Cost-Efficient
                  </h3>
                  <p className="text-sm text-gray-700 leading-relaxed">
                    Automated Development Process || Pay 20% Less ||
                    <br />
                    Market Ready-10X Faster || Robust & Tested
                  </p>
                </div>
              </div>

              {/* Hire Top Mobile App Developers */}
              <div className="flex items-start gap-5">
                <div className="min-w-14 h-14 flex items-center justify-center rounded-full ">
                  <Image
                    src="/dating/sec4icon4.svg"
                    width={56}
                    height={56}
                    alt="Hire devs"
                    className="h-14 w-14"
                  />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-1">
                    Hire Top Mobile App Developers
                  </h3>
                  <p className="text-sm text-gray-700 leading-relaxed">
                    Top 5% Vetted Experts || 500+ Developers || 350+
                    <br />
                    Designers || 10+ Years Experience
                  </p>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>

        {/* Bottom Cards */}
<div className="flex justify-center flex-col items-center">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-lg md:max-w-full">
          {/* 100% Customized */}
          <ScrollReveal
            animation="slideLeft"
            duration={700}
            delay={100}
            easing="spring"
            index={0}
            stagger={150}
            disableBelow="md"
          >
            <Card className="bg-gradient-to-br from-yellow-50 to-pink-100 border-0 shadow-md overflow-hidden">
              <CardContent className="p-6 md:max-h-[142.5px]">
                <div className="flex justify-between flex-col">
                <div className="flex items-center gap-3 mb-3">
                  <Paintbrush className="h-6 w-6 text-pink-600" />
                  <h3 className="text-xl font-bold md:!leading-[1.1rem]">100% Customized</h3>
                </div>
                <p className="text-sm text-gray-700 leading-relaxed">
                  Fully Custom Code || Bespoke Features || Tailored Design ||
                  <br />
                  Your Own IP Rights
                </p>
                </div>
              </CardContent>
            </Card>
          </ScrollReveal>

          {/* Zero Data Leaks */}
          <ScrollReveal
            animation="fadeSlideUp"
            duration={700}
            delay={400}
            easing="spring"
            disableBelow="md"
          >
            <Card className="bg-gradient-to-br from-yellow-50 to-pink-100 border-0 shadow-md overflow-hidden">
              <CardContent className="p-6 md:max-h-[142.5px]">
              <div className="flex justify-between flex-col">
                <div className="flex items-center gap-3 mb-3">
                  <ShieldCheck className="h-6 w-6 text-pink-600" />
                  <h3 className="text-xl font-bold md:!leading-[1.1rem]">Zero Data Leaks</h3>
                </div>
                <p className="text-sm text-gray-700 leading-relaxed">
                  End-to-End Encryption || Audit Compliant Architecture || Zero
                  <br />
                  Data Leaks
                </p>
                </div>
              </CardContent>
            </Card>
          </ScrollReveal>

          {/* Dedicated Support */}
          <ScrollReveal
            animation="slideRight"
            duration={700}
            delay={100}
            easing="spring"
            disableBelow="md"
          >
            <Card className="bg-gradient-to-br from-yellow-50 to-pink-100 border-0 shadow-md overflow-hidden">
              <CardContent className="p-6 md:max-h-[142.5px]">
              <div className="flex justify-between flex-col">
                <div className="flex items-center gap-3 mb-3">
                  
                  <Headphones className="h-6 w-6 text-pink-600" />
                  <h3 className="text-xl font-bold md:!leading-[1.1rem]">Dedicated Support</h3>
                </div>
                <p className="text-sm text-gray-700 leading-relaxed">
                  24/7 Technical Support || Seamless Updates || Expert
                  <br />
                  Maintenance
                </p>
                </div>
              </CardContent>
            </Card>
          </ScrollReveal>
        </div>
        </div>
      </div>
      {/* Section 4 End */}

      {/* Section 5 */}
      <div className="w-full bg-black text-white overflow-hidden">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8  relative">
          <div className="grid grid-cols-1 sm:grid-cols-2 sm:gap-8 items-center">
            {/* Left Content */}
            <ScrollReveal easing="smooth" animation="slightRight" duration={800} delay={100} className="z-10  pt-8 pb-8 sm:py-16 md:py-20">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-8 leading-tight hidden sm:block">
                Beyond dating apps,
                <br className=" sm:block hidden"/>
                we&apos;re committed to Tailoring
                <br className="sm:block hidden"/>
                Connections to Your Business Goals.
              </h1>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-8 leading-tight sm:hidden block">
                Beyond dating apps, we&apos;re committed to Tailoring Connections to Your Business Goals.
              </h1>

              <Button className="bg-pink-500 hover:bg-pink-600 text-white  p-1 sm:p-2 md:px-4 md:py-4 h-auto rounded-md text-lg font-medium flex items-center">
                <span>Build your Unique Dating App</span>
                <ArrowRight className="h-5 w-10" />
              </Button>
            </ScrollReveal>

            {/* Right Content - Image Placeholder */}
            <ScrollReveal easing="smooth" animation="slightLeft" duration={800} delay={100} className="flex justify-center items-end  h-full w-full">
              {/* Simple placeholder div for your image */}
              <Image
                src="/dating/sec5Hero.svg"
                width={332.8}
                height={280.83}
                className="object-contain w-full max-w-60 sm:max-w-full "
                alt="dating"
              />
              {/* You'll add your image here */}
            </ScrollReveal>
          </div>
        </div>
      </div>

      {/* Section 5 end */}
      <DatingModelsShowcase />

      {/* Section 7 start */}
      <div className="w-full bg-black text-white overflow-hidden">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8  relative">
          <div className="grid grid-cols-1 sm:grid-cols-2 sm:gap-8 items-center">
            {/* Left Content */}
            <ScrollReveal easing="smooth" animation="slightRight" duration={800} delay={100} className="z-10  pt-8 pb-8 sm:py-16 md:py-20">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-8 leading-tight">
                Have an Interesting&nbsp;
                <br className="sm:block hidden"/>
                <span className="text-[#F02963]">
                   Feature Integration in Mind?
                </span>
              </h1>
            

              <Button className="bg-gradient-to-r from-[#FF0000] to-[#FF5F59] text-white  p-1 sm:p-2 md:px-4 md:py-4 h-auto rounded-md text-lg font-medium flex items-center">
                <span>Build your Unique Dating App</span>
                <ArrowRight className="h-5 w-10" />
              </Button>
            </ScrollReveal>

            {/* Right Content - Image Placeholder */}
            <ScrollReveal easing="smooth" animation="slightLeft" duration={800} delay={100} className="flex justify-center items-end  h-full w-full">
              {/* Simple placeholder div for your image */}
              <Image
                src="/dating/mobiles.svg"
                width={528}
                height={387.61}
                className="object-contain w-full max-w-60 sm:max-w-full sm:pt-8"
                alt="mobiles"
              />
              {/* You'll add your image here */}
            </ScrollReveal>
          </div>
        </div>
      </div>
      {/* Section 7 end */}

      {/* Section 8 start */}
      <BottomAccordion faqItems={foodfaqItems} />
      {/* Section 8 end */}
    </>
  );
};

export default page;
