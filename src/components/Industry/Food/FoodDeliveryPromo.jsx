import React from 'react';
import Image from 'next/image';
const FoodDeliveryPromo = () => {
  return (
    <div className="bg-white">
      <div className="bg-white px-5 md:max-w-4xl lg:max-w-5xl mx-auto flex flex-col md:flex-row md:items-center md:justify-between py-8">
        {/* Left side - Text content */}
        <div className="flex flex-col space-y-6 md:w-1/2">
          <h2 className="text-xl md:text-2xl font-medium text-neutral-800">
            Want To Outshine Your Competition?
          </h2>
          
          <h3 className="text-3xl md:text-4xl font-bold text-gray-900">
            Inspired By The Success Of On-demand Food Delivery Businesses Like Zomato, UberEats Or Talabat?
          </h3>

          {/* Brown/orange callout box with triangle */}
          <div className=" bg-[rgb(185,100,27)] text-white py-9 rounded-xl !mt-16 relative">
            <p className="text-xl md:text-2xl font-bold text-center italic z-10 relative">
              Forget 'ready-made' apps—
              <br className="hidden md:block"/>
              opt for a fully custom food
              <br className="hidden md:block"/>
              delivery application instead!
            </p>
            
            {/* Triangle pointer */}
          <img className="absolute z-[1] -top-20 -right-24"  src="/food/pointer.svg"></img>
          </div>
        </div>

        {/* Right side - Image placeholder */}
        <div className="md:w-1/2 h-80 md:h-96 flex items-center justify-center rounded-xl relative">
          <Image layout="fill"  objectFit="contain" alt="kid" src="/food/kidSpeaking.svg"/>
        </div>
      </div>
    </div>
  );
};

export default FoodDeliveryPromo;