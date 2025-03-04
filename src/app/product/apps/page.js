import BusinessGrowthComponent from "@/components/Product_Apps/BusinessGrowthComponent";
import ServiceCarousel from "@/components/Product_Apps/ServiceCarousel";
import React from "react";
import Link from "next/link";
import { User, Users, UserPlus, Scroll } from "lucide-react";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ListTodo, Settings, FileCode, Headset } from "lucide-react";
import Image from "next/image";
import ScrollReveal from "@/components/ScrollReveal";
function page() {
  return (
    <>
      <div className="bg-[rgb(23,23,23)]">
        <ServiceCarousel />

        <div className=" w-full relative md:mb-20">
          <BusinessGrowthComponent />
        </div>









        <div className="bg-[rgb(23,23,23)] w-full relative h-fit md:h-[400px] mb-6 md:mb-28">
          <div className="max-w-6xl mx-auto h-full">
            <div className="block md:flex md:flex-row items-center h-full relative z-10">
              <div className="text-center mx-auto px-5 md:pr-0 md:mx-0 md:text-left md:max-w-lg lg:max-w-xl md:pl-6 lg:pl-8 pb-16 md:py-20">
                <ScrollReveal animation="slideDown" delay={300} duration={1000} easing="gentle">
                  <p className="text-white text-lg mb-4">
                    Leverage From An All In One Platform To
                  </p>
             

       
                  <h1 className="text-white text-4xl md:text-5xl font-bold mb-4">
                    Outshine Your Business In The On demand Economy
                  </h1>
                </ScrollReveal>

             
                  <div className="flex md:hidden justify-center items-center">
                    <Link href="/demo">
                      <button className="bg-red-500 hover:bg-red-600 text-white font-medium py-2 px-2 rounded transition duration-300">
                        Book Free Demo
                      </button>
                    </Link>
                  </div>
  
              </div>

              <div className="absolute top-0 right-0 h-full max-w-[400px] w-[37.1%] md:flex items-center justify-center hidden">
               
                   <ScrollReveal
                  animation="spinIn"
                  duration={1200}
                  easing="spring"
                 className="relative w-full h-full">
                    <Image
                      src="/apps/design1.svg"
                      alt="geometric pattern"
                      fill
                      style={{
                        objectFit: "contain",
                        objectPosition: "right center",
                      }}
                      priority
                    />
             
                </ScrollReveal>

                {/* Button positioned in the middle of the image */}
       
                  <ScrollReveal animation="slightDown" delay={400} easing="gentle" className="absolute z-20">
                    <Link href="/demo">
                      <button className="bg-red-500 hover:bg-red-600 text-white font-medium py-3 px-2 lg:px-8 rounded transition duration-300">
                        Book Free Demo
                      </button>
                    </Link>
                  </ScrollReveal>
           
              </div>
            </div>
          </div>
        </div>













        <div className="bg-[rgb(23,23,23)] px-5 md:max-w-5xl lg:max-w-6xl mx-auto flex flex-col">
      <div className="w-full bg-[rgb(23,23,23)] text-white py-12 mb-8 px-4">
        {/* Header Section with staggered animations */}
        <div className="max-w-5xl mx-auto text-center mb-16">
          <ScrollReveal animation="slideDown" duration={1000} delay={100}>
            <h1 className="text-3xl md:text-4xl font-bold mb-2 transition-transform duration-300">
              Explore The Limitless Possibilities To
            </h1>
          </ScrollReveal>
          <ScrollReveal animation="fadeIn" duration={1200} delay={400}>
            <p className="text-2xl md:text-3xl font-bold text-red-500 transition-colors duration-300">
              Launch, Run & Grow Your On-Demand Business
            </p>
          </ScrollReveal>
        </div>

        {/* Launch Section */}
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between mb-24 group">
          {/* Image comes from left to right */}
          <ScrollReveal animation="slideRight" duration={1000} delay={200} className="w-full md:w-1/3 flex justify-center mb-8 md:mb-0">
            <div className="relative rounded-full bg-white p-1 w-64 h-64 flex items-center justify-center shadow-[0px_4px_40.1px_15px_#ffffff3d] transition-all duration-500 hover:shadow-[0px_4px_60px_20px_#ffffff50] group-hover:scale-105">
              <div className="absolute inset-0 rounded-full overflow-hidden flex items-center justify-center">
                <div className="w-60 h-60 p-1 rounded-full bg-gray-800 flex items-center justify-center overflow-hidden">
                  <Image
                    src="/apps/launchImage.svg"
                    alt="Launch"
                    width={240}
                    height={240}
                    className="rounded-full transition-transform duration-500 hover:scale-110 group-hover:rotate-3"
                  />
                </div>
              </div>
            </div>
          </ScrollReveal>

          {/* Content comes from right to left */}
          <ScrollReveal animation="slideLeft" duration={1000} delay={400} className="w-full md:w-2/3 md:pl-12 transition-transform duration-300 group-hover:translate-x-2">
            <div className="flex items-center mb-4">
              <h2 className="text-3xl font-bold group-hover:text-red-500 transition-colors duration-300">
                Launch
              </h2>
              <span className="text-4xl font-bold bg-gradient-to-b from-white to-black bg-clip-text text-transparent ml-2 transition-all duration-300 group-hover:ml-4">
                01
              </span>
            </div>
            <h3 className="text-2xl font-bold mb-4 transition-all duration-300">
              Get Market Ready With A Total Power Move
            </h3>
            <p className="mb-6 transition-opacity duration-300 opacity-90 group-hover:opacity-100">
              No more waiting! With CB Apps, you get 80% ready-to-use
              solution. Building your business app & website in just a few
              days turns possible.
            </p>
            <Button className="bg-red-500 hover:bg-red-600 text-white rounded-md px-6 py-3 transition-all duration-300 hover:shadow-[0px_0px_20px_5px_#ff000033] hover:translate-y-[-3px]">
              Book Free Demo
            </Button>
          </ScrollReveal>
        </div>

        {/* Run Section */}
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row-reverse items-center justify-between mb-24 group">
          {/* Image comes from right to left */}
          <ScrollReveal animation="slideLeft" duration={1000} delay={200} className="w-full md:w-1/3 flex justify-center mb-8 md:mb-0">
            <div className="relative rounded-full bg-white p-1 w-64 h-64 flex items-center justify-center shadow-[0px_4px_40.1px_15px_#ffffff3d] transition-all duration-500 hover:shadow-[0px_4px_60px_20px_#ffffff50] group-hover:scale-105">
              <div className="absolute inset-0 rounded-full overflow-hidden flex items-center justify-center">
                <div className="w-60 h-60 p-1 rounded-full bg-gray-800 flex items-center justify-center overflow-hidden">
                  <Image
                    src="/apps/runImage.svg"
                    alt="Run"
                    width={240}
                    height={240}
                    className="rounded-full transition-transform duration-500 hover:scale-110 group-hover:rotate-3"
                  />
                </div>
              </div>
            </div>
          </ScrollReveal>

          {/* Content comes from left to right */}
          <ScrollReveal animation="slideRight" duration={1000} delay={400} className="w-full md:w-2/3 md:pr-12 transition-transform duration-300 group-hover:translate-x-[-2px]">
            <div className="flex items-center mb-4">
              <h2 className="text-3xl font-bold group-hover:text-red-500 transition-colors duration-300">
                Run
              </h2>
              <span className="text-4xl font-bold bg-gradient-to-b from-white bg-clip-text text-transparent ml-2 transition-all duration-300 group-hover:ml-4">
                02
              </span>
            </div>
            <h3 className="text-2xl font-bold mb-4 transition-all duration-300">
              Create Exceptional Experience With Advanced Features
            </h3>
            <p className="mb-6 transition-opacity duration-300 opacity-90 group-hover:opacity-100">
              Say good-bye to one-size-fits-all solutions. Customize it to
              your exact business requirements & deliver an outstanding
              customer experience.
            </p>
            <Button className="bg-red-500 hover:bg-red-600 text-white rounded-md px-6 py-3 transition-all duration-300 hover:shadow-[0px_0px_20px_5px_#ff000033] hover:translate-y-[-3px]">
              Book Free Demo
            </Button>
          </ScrollReveal>
        </div>

        {/* Grow Section */}
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between group">
          {/* Image comes from left to right */}
          <ScrollReveal animation="slideRight" duration={1000} delay={200} className="w-full md:w-1/3 flex justify-center mb-8 md:mb-0">
            <div className="relative rounded-full bg-white p-1 w-64 h-64 flex items-center justify-center shadow-[0px_4px_40.1px_15px_#ffffff3d] transition-all duration-500 hover:shadow-[0px_4px_60px_20px_#ffffff50] group-hover:scale-105">
              <div className="absolute inset-0 rounded-full overflow-hidden flex items-center justify-center">
                <div className="w-60 h-60 p-1 rounded-full bg-gray-800 flex items-center justify-center overflow-hidden">
                  <Image
                    src="/apps/growImage.svg"
                    alt="Grow"
                    width={240}
                    height={240}
                    className="rounded-full transition-transform duration-500 hover:scale-110 group-hover:rotate-3"
                  />
                </div>
              </div>
            </div>
          </ScrollReveal>

          {/* Content comes from right to left */}
          <ScrollReveal animation="slideLeft" duration={1000} delay={400} className="w-full md:w-2/3 md:pl-12 transition-transform duration-300 group-hover:translate-x-2">
            <div className="flex items-center mb-4">
              <h2 className="text-3xl font-bold group-hover:text-red-500 transition-colors duration-300">
                Grow
              </h2>
              <span className="text-4xl font-bold bg-gradient-to-b from-white bg-clip-text text-transparent ml-2 transition-all duration-300 group-hover:ml-4">
                03
              </span>
            </div>
            <h3 className="text-2xl font-bold mb-4 transition-all duration-300">
              Scale Your Business With Powerful Integrations
            </h3>
            <p className="mb-6 transition-opacity duration-300 opacity-90 group-hover:opacity-100">
              Integrate anything to continually grow your ROI. CB Apps is a
              highly robust & scalable solution that serves all your future
              needs.
            </p>
            <Button className="bg-red-500 hover:bg-red-600 text-white rounded-md px-6 py-3 transition-all duration-300 hover:shadow-[0px_0px_20px_5px_#ff000033] hover:translate-y-[-3px]">
              Book Free Demo
            </Button>
          </ScrollReveal>
        </div>
      </div>
    </div>







      </div>



    <div className="bg-[rgb(30,30,30)] w-full">
      <div className="bg-[rgb(30,30,30)] px-5 md:max-w-5xl lg:max-w-6xl mx-auto flex flex-col pt-16 pb-24">
        {/* Heading Section with animation from top to bottom */}
        <ScrollReveal animation="slideDown" duration={1000} delay={100} className="text-center mb-12">
          <h2 className="text-white text-3xl md:text-4xl font-bold mb-2">
            No Matter What Size You Are
          </h2>
          <ScrollReveal animation="fadeIn" duration={1200} delay={300} className="inline-block">
            <p className="text-white text-md md:text-lg">
              Innovetix Is Focused On Building Your Success
            </p>
          </ScrollReveal>
        </ScrollReveal>

        {/* Cards Container */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {/* Card 1 - Startups - Animation from bottom with stagger */}
          <ScrollReveal animation="slideUp" duration={800} delay={200} easing="spring" index={0} stagger={150}>
            <Card className="bg-[rgb(30,30,30)] border border-gray-700 rounded-md overflow-hidden hover:border-gray-500 transition-all duration-300 hover:shadow-lg hover:shadow-[#ff6b6b20]">
              <CardContent className="p-6">
                <div className="flex flex-col items-start">
                  <User size={40} className="text-[#ff6b6b] mb-4" />
                  <h3 className="text-white text-xl font-semibold mb-2">
                    Startups Small Businesses
                  </h3>
                  <p className="text-gray-400 text-sm mb-2">
                    Aim to build one from a ground-up?
                  </p>
                  <p className="text-gray-300 text-sm">
                    Now start small & grow as you go with an advanced tech
                    suite.
                  </p>
                </div>
              </CardContent>
              <CardFooter className="px-6 pb-6 pt-0">
                <Button
                  variant="outline"
                  className="text-white bg-gray-800 border-gray-600 hover:bg-gray-700 hover:text-white text-sm transition-all duration-300 "
                >
                  Book Free Demo
                </Button>
              </CardFooter>
            </Card>
          </ScrollReveal>

          {/* Card 2 - Medium Sized - Animation from bottom with stagger */}
          <ScrollReveal animation="slideUp" duration={800} delay={200} easing="spring" index={1} stagger={150}>
            <Card className="bg-[rgb(30,30,30)] border border-gray-700 rounded-md overflow-hidden hover:border-gray-500 transition-all duration-300 hover:shadow-lg hover:shadow-[#ff6b6b20]">
              <CardContent className="p-6">
                <div className="flex flex-col items-start">
                  <Users size={40} className="text-[#ff6b6b] mb-4" />
                  <h3 className="text-white text-xl font-semibold mb-2">
                    Medium Sized Businesses
                  </h3>
                  <p className="text-gray-400 text-sm mb-2">
                    Growing an existing business?
                  </p>
                  <p className="text-gray-300 text-sm">
                    Upgrade your technology to scale with a perfect all-in-one
                    solution.
                  </p>
                </div>
              </CardContent>
              <CardFooter className="px-6 pb-6 pt-0">
                <Button
                  variant="outline"
                  className="text-white bg-gray-800 border-gray-600 hover:bg-gray-700 hover:text-white text-sm transition-all duration-300 "
                >
                  Book Free Demo
                </Button>
              </CardFooter>
            </Card>
          </ScrollReveal>

          {/* Card 3 - Large Businesses - Animation from bottom with stagger */}
          <ScrollReveal animation="slideUp" duration={800} delay={200} easing="spring" index={2} stagger={150}>
            <Card className="bg-[rgb(30,30,30)] border border-gray-700 rounded-md overflow-hidden hover:border-gray-500 transition-all duration-300 hover:shadow-lg hover:shadow-[#ff6b6b20]">
              <CardContent className="p-6">
                <div className="flex flex-col items-start">
                  <UserPlus size={40} className="text-[#ff6b6b] mb-4" />
                  <h3 className="text-white text-xl font-semibold mb-2">
                    Large Businesses Enterprises
                  </h3>
                  <p className="text-gray-400 text-sm mb-2">
                    Are you a big industry player?
                  </p>
                  <p className="text-gray-300 text-sm">
                    Get customizable solutions, built to your specific business
                    needs.
                  </p>
                </div>
              </CardContent>
              <CardFooter className="px-6 pb-6 pt-0">
                <Button
                  variant="outline"
                  className="text-white bg-gray-800 border-gray-600 hover:bg-gray-700 hover:text-white text-sm transition-all duration-300 "
                >
                  Book Free Demo
                </Button>
              </CardFooter>
            </Card>
          </ScrollReveal>
        </div>
      </div>
    </div>












    <div className="bg-[rgb(23,23,23)]">
      <div className="bg-[rgb(23,23,23)] px-5 md:max-w-5xl lg:max-w-6xl mx-auto flex flex-col pt-24 pb-28">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Left Section - Stats with simple animation from left */}
          <div className="flex flex-col">
            <ScrollReveal animation="slideDown" duration={900} delay={100} className="mb-6">
              <h2 className="text-white text-2xl font-medium">
                Over{" "}
                <span className="text-red-500 text-4xl font-bold block mt-1">
                  5000 Businesses
                </span>{" "}
                Across{" "}
                <span className="text-red-500 text-4xl font-bold block mt-1">
                  150+ Countries
                </span>
              </h2>
            </ScrollReveal>
            <ScrollReveal animation="slightUp" duration={900} delay={100}>
              <p className="text-white text-sm md:text-base">
                Trust CB Apps For Delivering Out-of-the-box Solutions
              </p>
            </ScrollReveal>
          </div>

          {/* Right Section - Features with icons from different directions */}
          <div className="grid grid-cols-2 gap-6">
            {/* Feature 1 - From top */}
            <ScrollReveal animation="slightDown" duration={900} delay={200}>
              <div className="flex flex-col items-center text-center group">
                <div className="bg-white rounded-full p-3 mb-2 transform transition-all duration-500 group-hover:scale-110 group-hover:shadow-lg group-hover:shadow-white/20">
                  <ListTodo size={24} className="text-black transition-transform duration-500 group-hover:rotate-12" />
                </div>
                <p className="text-white text-sm transition-all duration-300 group-hover:text-red-500">
                  Feature Rich
                  <br />
                  Solutions
                </p>
              </div>
            </ScrollReveal>

            {/* Feature 2 - From right */}
            <ScrollReveal animation="slightLeft" duration={900} delay={200}>
              <div className="flex flex-col items-center text-center group">
                <div className="bg-white rounded-full p-3 mb-2 transform transition-all duration-500 group-hover:scale-110 group-hover:shadow-lg group-hover:shadow-white/20">
                  <Settings size={24} className="text-black transition-transform duration-500 group-hover:rotate-90" />
                </div>
                <p className="text-white text-sm transition-all duration-300 group-hover:text-red-500">
                  Flexibility To
                  <br />
                  Customize
                </p>
              </div>
            </ScrollReveal>

            {/* Feature 3 - From left */}
            <ScrollReveal animation="slightRight" duration={900} delay={200}>
              <div className="flex flex-col items-center text-center group">
                <div className="bg-white rounded-full p-3 mb-2 transform transition-all duration-500 group-hover:scale-110 group-hover:shadow-lg group-hover:shadow-white/20">
                  <FileCode size={24} className="text-black transition-transform duration-500 group-hover:scale-110" /> 
                </div>
                <p className="text-white text-sm transition-all duration-300 group-hover:text-red-500">
                  SourceCode &
                  <br />
                  IP rights
                </p>
              </div>
            </ScrollReveal>

            {/* Feature 4 - From bottom */}
            <ScrollReveal animation="slightUp" duration={900} delay={200}>
              <div className="flex flex-col items-center text-center group">
                <div className="bg-white rounded-full p-3 mb-2 transform transition-all duration-500 group-hover:scale-110 group-hover:shadow-lg group-hover:shadow-white/20">
                  <Headset size={24} className="text-black transition-transform duration-500 group-hover:scale-110" />
                </div>
                <p className="text-white text-sm transition-all duration-300 group-hover:text-red-500">
                  Dedicated
                  <br />
                  24/7 Support
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </div>
    </>
  );
}

export default page;
