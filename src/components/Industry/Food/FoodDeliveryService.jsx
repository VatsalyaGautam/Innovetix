import React from "react";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import ScrollReveal from "@/components/ScrollReveal";
const FoodDeliveryService = () => {
  return (
    <div className="w-full bg-white pb-8 lg:py-12 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <ScrollReveal
          animation="slightRight"
          duration={600}
          delay={200}
          easing="smooth"
          className="text-center mb-12"
        >
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-center mx-auto">
            No matter you need a Food Restaurant App or Want to start{" "}
            <br className="hidden xl:block" />
            your Food Marketplace Like Uber Eats,
            <span className="text-amber-600"> We've Got You Covered!</span>
          </h1>
        </ScrollReveal>

        {/* Three cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Card 1 - Single Restaurants */}
          <ScrollReveal
          animation="slightRight"
          duration={600}
          delay={200}
          easing="smooth" className="rounded-lg overflow-hidden bg-gradient-to-b from-[rgba(185,100,26,0.3)] to-[rgba(185,100,26,0.6)] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] relative">
            <div className="px-6 py-5 h-full">
              <p className="text-lg font-bold text-black mb-2 ">
                Single Restaurants
              </p>
              <div className="mb-2 lg:mb-8 flex flex-col  justify-between max-w-[28rem]">
                <h2 className="text-xl font-bold text-black sm:pb-4">
                  Build Food Delivery App For Your Restaurant
                </h2>
                <p className="text-base text-black block md:hidden lg:block">
                  Simplify the ordering process and let your customers order
                  directly through your mobile app
                </p>
              </div>

              <div className="flex justify-between items-start mb-4 ">
                <button className="flex items-center space-x-2 font-bold text-black">
                  <span>Let's Go</span>
                  <div className="bg-black rounded-full p-1">
                    <ArrowRight className="h-4 w-4 text-white" />
                  </div>
                </button>
                <div className="h-28 invisible hideBelow453"></div>
                <div className="absolute right-0 md:w-2/3 bottom-0 hideBelow453">
                  <Image
                    width={229.33}
                    height={167.25}
                    alt="restaurant"
                    src="/food/restaurant.svg"
                  />
                </div>
              </div>
            </div>
          </ScrollReveal>

          {/* Card 2 - Food Chain Stores */}
            <ScrollReveal
          animation="slightRight"
          duration={600}
          delay={400}
          easing="smooth" className="rounded-lg overflow-hidden bg-gradient-to-b from-[rgba(185,100,26,0.3)] to-[rgba(185,100,26,0.6)] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] relative">
            <div className="px-6 py-5 h-full">
              <p className="text-lg font-bold text-black mb-2">
                Food Chain Stores
              </p>
              <div className="mb-2 lg:mb-8 lex flex-col justify-between max-w-[28rem]">
                <h2 className="text-xl font-bold text-black sm:pb-4">
                  Food Ordering & Delivery App For Restaurant Chains
                </h2>
                <p className="text-base text-black block md:hidden lg:block">
                  Boost ROI for your multi-store food business with a
                  tailor-made food delivery app solution
                </p>
              </div>

              <div className="flex justify-between items-start mb-4 ">
                <button className="flex items-center space-x-2 font-bold text-black">
                  <span>Let's Go</span>
                  <div className="bg-black rounded-full p-1">
                    <ArrowRight className="h-4 w-4 text-white" />
                  </div>
                </button>
                <div className="h-28 invisible hideBelow453"></div>
                <div className="absolute right-0 bottom-0 md:w-2/3 hideBelow453">
                  <Image
                    src="/food/restaurantChain.svg"
                    width={229.33}
                    height={171.46}
                    alt="Restaurant Chain"
                  />
                </div>
              </div>
            </div>
          </ScrollReveal>

          {/* Card 3 - Food Delivery Aggregators */}
          <ScrollReveal
          animation="slightRight"
          duration={600}
          delay={600}
          easing="smooth"  className="rounded-lg overflow-hidden bg-gradient-to-b from-[rgba(185,100,26,0.3)] to-[rgba(185,100,26,0.6)] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] relative">
            <div className="px-6 py-5 h-full">
              <p className="text-lg font-bold text-black mb-2">
                Food Chain Stores
              </p>
              <div className="mb-2 lg:mb-8 flex flex-col justify-between max-w-[28rem]">
                <h2 className="text-xl font-bold text-black sm:pb-4">
                  Build App Like Uber Eats For Your Region
                </h2>
                <p className="text-base text-black block md:hidden lg:block">
                  Start your own revenue-generating platform like Uber Eats or
                  Zomato with a custom-built app that scales to your region’s
                  needs
                </p>
              </div>

              <div className="flex justify-between items-start mb-4 ">
                <button className="flex items-center space-x-2 font-bold text-black">
                  <span>Let's Go</span>
                  <div className="bg-black rounded-full p-1">
                    <ArrowRight className="h-4 w-4 text-white" />
                  </div>
                </button>
                <div className="h-24 invisible hideBelow453"></div>
                <div className="absolute right-0 bottom-0 md:w-2/3 hideBelow453">
                  <Image
                    src="/food/restaurantChain.svg"
                    width={229.33}
                    height={171.46}
                    alt="Restaurant Chains"
                  />
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </div>
  );
};

export default FoodDeliveryService;
