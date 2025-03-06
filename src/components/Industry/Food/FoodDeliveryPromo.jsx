import React from "react";
import Image from "next/image";
import ScrollReveal from "@/components/ScrollReveal";

const FoodDeliveryPromo = () => {
  return (
    <div className="bg-white">
      <div className="bg-white px-5 md:max-w-4xl lg:max-w-5xl mx-auto flex flex-col md:flex-row md:items-center md:justify-between py-8">
        {/* Left side - Text content */}
        <div className="flex flex-col md:space-y-6 md:w-1/2 pb-8 sm:pb-0">
          <ScrollReveal
            animation="slightRight"
            duration={600}
            delay={200}
            easing="smooth"
          >
            <h2 className="text-xl md:text-2xl font-medium text-neutral-800">
              Want To Outshine Your Competition?
            </h2>

            <ScrollReveal
              animation="slightRight"
              duration={600}
              delay={200}
              easing="smooth"
            ></ScrollReveal>
            <h3 className="text-3xl leading-snug md:text-4xl font-bold text-gray-900 ">
              Inspired By The Success Of On-demand Food Delivery Businesses Like
              Zomato, UberEats Or Talabat?
            </h3>
          </ScrollReveal>
          {/* Brown/orange callout box with triangle */}
          <ScrollReveal
            animation="slightUp"
            duration={600}
            delay={200}
            easing="smooth"
            className=" bg-[rgb(185,100,27)] text-white py-9 z-[1] rounded-xl !mt-6 md:!mt-16 relative  hidden md:block"
          >
            <p className="text-xl md:text-2xl font-bold text-center italic z-10 relative">
              Forget 'ready-made' apps—
              <br className="hidden md:block" />
              opt for a fully custom food
              <br className="hidden md:block" />
              delivery application instead!
            </p>

            <Image
              className="absolute z-[1] -top-20 -right-24 hidden md:block"
              width={244}
              height={228}
              alt="pointer"
              src="/food/pointer.svg"
            />
          </ScrollReveal>
        </div>

        {/* Right side - Image placeholder */}
        <ScrollReveal
          animation="slightUp"
          duration={600}
          delay={200}
          easing="smooth"
          className="md:w-1/2 h-80 md:h-96 flex items-center justify-center rounded-xl relative sm:mt-10 md:mt-0"
        >
          <Image
            layout="fill"
            objectFit="contain"
            alt="kid"
            src="/food/kidSpeaking.svg"
          />
        </ScrollReveal>
        <div className=" bg-[rgb(185,100,27)] text-white py-4 px-4 rounded-xl !mt-6 !mb-6 md:!mt-16 relative  md:hidden block">
          <p className="text-xl md:text-2xl font-bold text-center italic z-10 relative">
            Forget 'ready-made' apps— opt for a fully custom food delivery
            application instead!
          </p>

          {/* Triangle pointer */}
          <Image
            className="absolute z-[1] -top-20 -right-24 hidden md:block"
            width={244}
            height={228}
            alt="pointer"
            src="/food/pointer.svg"
          />
        </div>
      </div>
    </div>
  );
};

export default FoodDeliveryPromo;
