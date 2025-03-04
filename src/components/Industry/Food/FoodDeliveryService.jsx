import React from "react";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
const FoodDeliveryService = () => {
  return (
    <div className="w-full bg-white py-12 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-12">
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-center mx-auto">
            No matter you need a Food Restaurant App or Want to start{" "}
            <br className="hidden md:block" />
            your Food Marketplace Like Uber Eats,
            <span className="text-amber-600"> We've Got You Covered!</span>
          </h1>
        </div>

        {/* Three cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Card 1 - Single Restaurants */}
          <div className="rounded-lg overflow-hidden bg-gradient-to-b from-[rgba(185,100,26,0.3)] to-[rgba(185,100,26,0.6)] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] relative">
            <div className="px-6 py-5 h-full">
              <p className="text-lg font-bold text-black mb-2">
                Single Restaurants
              </p>
              <div className="mb-8 flex flex-col  justify-between">
              <h2 className="text-xl font-bold text-black pb-4">
              Build Food Delivery App For Your Restaurant
              </h2>
              <p className="text-base text-black ">
              Simplify the ordering process and let your customers order directly through your mobile app
              </p>
              </div>

              <div className="flex justify-between items-start mb-4 ">
                <button className="flex items-center space-x-2 font-bold text-black">
                  <span>Let's Go</span>
                  <div className="bg-black rounded-full p-1">
                    <ArrowRight className="h-4 w-4 text-white" />
                  </div>
                </button>
                <div className="h-28 invisible"></div>
                <div className="absolute right-0 bottom-4 w-2/3">
              
                <Image width={229.33} height={167.25} alt="restaurant" src="/food/restaurant.svg"/>
                </div>
              </div>
            </div>
          </div>

          {/* Card 2 - Food Chain Stores */}
          <div className="rounded-lg overflow-hidden bg-gradient-to-b from-[rgba(185,100,26,0.3)] to-[rgba(185,100,26,0.6)] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] relative">
            <div className="px-6 py-5 h-full">
              <p className="text-lg font-bold text-black mb-2">
              Food Chain Stores
              </p>
              <div className="mb-8 flex flex-col justify-between">
              <h2 className="text-xl font-bold text-black pb-4">
              Food Ordering & Delivery App For Restaurant Chains
              </h2>
              <p className="text-base text-black ">
              Boost ROI for your multi-store food business with a tailor-made food delivery app solution
              </p>
              </div>

              <div className="flex justify-between items-start mb-4 ">
                <button className="flex items-center space-x-2 font-bold text-black">
                  <span>Let's Go</span>
                  <div className="bg-black rounded-full p-1">
                    <ArrowRight className="h-4 w-4 text-white" />
                  </div>
                </button>
                <div className="h-28 invisible"></div>
                <div className="absolute right-0 bottom-0 w-2/3">
                
                <Image src="/food/restaurantChain.svg" width={229.33} height={171.46} alt="Restaurant Chain"/>
                </div>
              </div>
            </div>
          </div>

          {/* Card 3 - Food Delivery Aggregators */}
          <div className="rounded-lg overflow-hidden bg-gradient-to-b from-[rgba(185,100,26,0.3)] to-[rgba(185,100,26,0.6)] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] relative">
            <div className="px-6 py-5 h-full">
              <p className="text-lg font-bold text-black mb-2">
              Food Chain Stores
              </p>
              <div className="mb-8 flex flex-col justify-between">
              <h2 className="text-xl font-bold text-black pb-4">
              Build App Like Uber Eats For Your Region
              </h2>
              <p className="text-base text-black ">
              Start your own revenue-generating platform like Uber Eats or Zomato with a custom-built app that scales to your region’s needs
              </p>
              </div>

              <div className="flex justify-between items-start mb-4 ">
                <button className="flex items-center space-x-2 font-bold text-black">
                  <span>Let's Go</span>
                  <div className="bg-black rounded-full p-1">
                    <ArrowRight className="h-4 w-4 text-white" />
                  </div>
                </button>
                <div className="h-24 invisible"></div>
                <div className="absolute right-0 bottom-0 w-2/3">
           
                <Image src="/food/restaurantChain.svg" width={229.33} height={171.46} alt="Restaurant Chains"/>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FoodDeliveryService;
