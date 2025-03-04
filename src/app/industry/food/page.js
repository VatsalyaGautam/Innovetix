import React from "react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import ScrollReveal from "@/components/ScrollReveal";
import FoodDeliveryPromo from "@/components/Industry/Food/FoodDeliveryPromo";
import FoodOrderingFeatures from "@/components/Industry/Food/FoodOrderingFeatures";
import FoodDeliveryService from "@/components/Industry/Food/FoodDeliveryService";
import { ArrowRight } from 'lucide-react';
export default function page() {
  return (
    <>
      {/* Hero - Section 1 */}
      <div className="bg-[rgb(13,13,13)] text-white relative overflow-hidden mt-40 py-6 w-full h-auto">
        <div className="px-5 md:max-w-8xl lg:max-w-[101rem] mx-auto flex flex-col">
          {/* Main content container with food images on both sides */}
          <div className="relative py-16 md:py-20 flex flex-col items-center">
            <Image
              src="/food/leftFood.png"
              width={335}
              height={335}
              alt="Pasta"
              className="absolute top-1/2 -ml-[11%] 2xl:ml-0 left-0 -translate-y-1/2"
            />
            <Image
              src="/food/rightFood.png"
              width={335}
              height={332.73}
              alt="Paneer"
              className="absolute top-1/2 -mr-[11%] 2xl:mr-0  right-0 -translate-y-1/2"
            />
            {/* Center content section */}
            <div className="z-10 text-center max-w-5xl mx-auto flex flex-col items-center">
              {/* Main heading */}
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
                Fuel Your Food Business With
                <br />A Complete Technology Solution
              </h1>

              {/* Tech categories */}
              <div className="flex flex-col md:flex-row justify-center gap-4 md:gap-8 my-8">
                <div className="flex items-center justify-center gap-2">
                  <span className="text-orange-400 text-xl">📱</span>
                  <span className="font-medium">Ordering Tech</span>
                </div>

                <div className="flex items-center justify-center gap-2">
                  <span className="text-orange-400 text-xl">🚚</span>
                  <span className="font-medium">Delivery Tech</span>
                </div>

                <div className="flex items-center justify-center gap-2">
                  <span className="text-orange-400 text-xl">💻</span>
                  <span className="font-medium">Management Tech</span>
                </div>
              </div>

              {/* CTA Button */}
              <Button className="bg-orange-500 hover:bg-orange-600 text-white font-medium px-8 py-6 text-xl rounded-md my-4">
                Book Your Demo
              </Button>

              {/* Bottom text */}
              <p className="text-center text-sm md:text-base mt-6 max-w-3xl opacity-90">
                From Planning To Promoting, Leverage From The Most Advance Food
                Delivery App Development
                <br />
                Services Backed By Top Industry Expert Consultation At Every
                Step
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* Section 1 Ends */}
      {/* Sec 2 */}
      <div className="bg-white w-full flex flex-col pb-16 -mt-10 overflow-hidden">
        <div className="relative w-full h-[500px] md:h-[550px] lg:h-[600px] z-0 px-5 max-w-[25rem] sm:max-w-[38rem] md:max-w-[42rem] lg:max-w-6xl mx-auto">
          {/* Calendar App - comes from bottom up */}
          <div className="absolute left-1/2 top-0 transform -translate-x-1/2 z-20 h-[18rem] sm:h-auto w-[18rem] sm:w-[28rem] md:w-[30rem] lg:w-[45rem] rounded-lg overflow-hidden">
            <ScrollReveal
              animation="slideUp"
              duration={1000}
              delay={200}
              easing="smooth"
              disableBelow="md"
            >
              <Image
                src="/food/foodDashboard.png"
                alt="Dashboard"
                width={720}
                height={494.63}
                className="w-full h-auto"
              />
            </ScrollReveal>
          </div>

          {/* Food Delivery App - comes from bottom left */}
          <div className="absolute left-0 pl-5 top-[15%] transform z-30 sm:h-auto w-[6rem] sm:w-[9rem] md:w-[10rem] lg:w-[15rem] md:rounded-2xl overflow-hidden">
            <ScrollReveal
              animation="slideBottomRight" // Bottom left to top right
              duration={1200}
              delay={300}
              easing="smooth"
              disableBelow="md"
            >
              <Image
                src="/apps/food-app.svg"
                alt="Food Delivery App"
                width={240}
                height={511.3}
                className="w-full h-auto"
              />
            </ScrollReveal>
          </div>

          {/* Map App - comes from bottom right */}
          <div className="absolute right-0 top-[15%] pr-5 transform z-30 sm:h-auto w-[6rem] sm:w-[9rem] md:w-[10rem] lg:w-[15rem] md:rounded-2xl overflow-hidden">
            <ScrollReveal
              animation="slideBottomLeft" // Bottom right to top left
              duration={1200}
              delay={300}
              easing="smooth"
              disableBelow="md"
            >
              <Image
                src="/apps/map-app.svg"
                alt="Map App"
                width={240}
                height={518.76}
                className="w-full h-auto"
              />
            </ScrollReveal>
          </div>
        </div>
      </div>
      {/* Sec 2 end */}

      <div className="bg-white">
        <div className="bg-white px-5 md:max-w-5xl lg:max-w-6xl mx-auto flex flex-col">
          {/* Sec 3 start */}
          <div className="w-full bg-white py-6 md:py-10">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
              {/* Heading Section */}
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-16 max-w-5xl mx-auto leading-tight">
                We've Helped Over 9 Multi-Million Dollar Food Startups In The
                Last Six Years And The Numbers Speak Themselves
              </h2>

              {/* Stats Cards */}
              <div className="flex flex-col md:flex-row gap-4 md:gap-6 mb-20 justify-center">
                {/* Stat Card 1 */}
                <div className="flex-1 border border-orange-200 rounded-lg p-6 bg-orange-50 flex items-center gap-4">
                  <div className="w-16 h-16 flex-shrink-0">
                    {/* Placeholder for bag/order icon */}
                    <img src="/food/ordersProcessed.svg"></img>
                  </div>
                  <div>
                    <h3 className="text-4xl font-bold">1.5M</h3>
                    <p className="text-lg text-gray-700">Orders Processed</p>
                  </div>
                </div>

                {/* Stat Card 2 */}
                <div className="flex-1 border border-orange-200 rounded-lg p-6 bg-orange-50 flex items-center gap-4">
                  <div className="w-16 h-16 flex-shrink-0">
                    {/* Placeholder for customer review icon */}
                    <img src="/food/customerReviews.svg"></img>
                  </div>
                  <div>
                    <h3 className="text-4xl font-bold">60K</h3>
                    <p className="text-lg text-gray-700">Customer Reviews</p>
                  </div>
                </div>

                {/* Stat Card 3 */}
                <div className="flex-1 border border-orange-200 rounded-lg p-6 bg-orange-50 flex items-center gap-4">
                  <div className="w-16 h-16 flex-shrink-0">
                    {/* Placeholder for transaction/money icon */}
                    <img src="/food/monthlyTransactions.svg"></img>
                  </div>
                  <div>
                    <h3 className="text-4xl font-bold">230K</h3>
                    <p className="text-lg text-gray-700">
                      Monthly Transactions
                    </p>
                  </div>
                </div>
              </div>

              {/* App Showcase Section */}
              <div className="w-full bg-black text-white rounded-xl overflow-hidden">
                <div className="flex flex-col md:flex-row">
                  <div className="md:w-1/3 relative">
                    {/* This will be a placeholder for the app screenshots */}
                    <Image
                      width={349.33}
                      height={348.53}
                      alt="apps screenshots"
                      src="/food/sec3img.svg"
                    />
                  </div>
                  {/* Text Content */}
                  <div className="p-8 md:p-12 lg:p-16 md:w-2/3 flex flex-col justify-center">
                    <h3 className="text-3xl md:text-4xl font-bold mb-4">
                      We've Created Some Of{" "}
                      <span className="text-blue-400">
                        'The Most Downloaded'
                      </span>{" "}
                      Apps In The Region
                    </h3>
                    <p className="text-xl text-gray-300 mt-4">
                      Explore Their Journey To Success With Innovetix
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* sec 3 end */}
          <FoodDeliveryPromo/>
          <FoodOrderingFeatures/>
          <FoodDeliveryService/>
        </div>
      </div>

      <div className="bg-red-600">
      <div className="bg-red-600 px-5 md:max-w-7xl lg:max-w-[88rem] mx-auto flex flex-col">
      <div className=" text-white py-16 px-4 sm:px-6 lg:px-8 rounded-lg">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between space-y-8 lg:space-y-0 lg:space-x-12">
        {/* Left Side - Tablet Mockup Placeholder */}
        <div className="w-full h-full lg:w-1/2 flex justify-left relative">
        <Image width={448} height={578.7} src="/food/foodIndustry.svg" className="-mb-48 w-[28rem]  z-[1]" alt="dish"/>
        <img src="/food/pizza.svg" className="absolute z-0 top-[2.7rem] right-[3.5rem]"></img>
        </div>

        {/* Right Side - Content */}
        <div className="w-full lg:w-1/2 text-center lg:text-left">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 leading-tight">
            Your Chance To Standout In The Online Food Industry Are Higher
          </h1>
          <p className="text-base sm:text-lg mb-8 opacity-90 leading-relaxed">
            Food delivery may not be new, but with the right technology solution, you can rise to become a leading player in the market. Innovetix's tested and scalable tech solutions are designed to help you lead the industry.
          </p>
          
          <Button 
            variant="default" 
            className="bg-black text-white hover:bg-red-200  hover:text-black px-6 py-3 rounded-lg text-base font-semibold group"
          >
            Get Complete Industry Report
            <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </div>

  </div>
    </div>
      </div>
    </>
  );
}
