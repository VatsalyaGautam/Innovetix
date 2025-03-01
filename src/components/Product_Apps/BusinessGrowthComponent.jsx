import React from "react";
import Image from "next/image";
import ScrollReveal from "@/components/ScrollReveal";

const BusinessGrowthComponent = () => {
  return (
    <>
      <div className="bg-[rgb(23,23,23)]  w-full flex flex-col pb-16 pt-28  overflow-hidden">
        {/* Heading Section */}
        <ScrollReveal
          animation="slightDown"
          duration={800}
          easing="gentle"
          className="text-center mb-12 z-10 px-5 md:max-w-5xl lg:max-w-6xl mx-auto "
        >
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-2">
            Fuel Your Business Growth With
          </h1>
          <h2 className="text-2xl md:text-3xl lg:text-4xl  font-bold text-red-500 mb-6">
            Complete Technology
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto text-sm md:text-base">
            Get a full suite of 'ready-to-use' base products that can be easily
            customized to fit in your on-demand business needs.
          </p>
        </ScrollReveal>

        {/* App Screenshots Section */}

        {/* Calendar App */}
        <div className="absolute inset-0 w-full h-full">
          <svg
            className="absolute w-full top-4 2xl:top-12 translate-y-1/2 h-1/2 "
            preserveAspectRatio="none"
            viewBox="0 0 1729 610"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M-38.1953 177.713C-27.0218 157.651 -17.2916 138.217 4.33792 127.788C27.2659 116.734 61.0911 114.144 83.6987 126.88C116.051 145.107 140.889 182.083 157.094 214.281C183.968 267.674 191.145 326.981 200.276 385.192C206.79 426.72 212.922 478.164 237.752 513.57C264.72 552.024 309.462 581.341 354.459 593.709C407.147 608.19 465.673 610.215 514.477 582.816C607.515 530.584 666.909 434.965 712.62 341.881C735.902 294.47 752.17 245.45 755.153 192.496C756.477 169.002 738.578 161.319 715.992 162.152C665.944 163.998 629.079 210.261 612.771 253.572C594.155 303.011 589.37 363.87 615.883 411.386C677.296 521.451 819.997 536.529 930.084 505.53C1019.42 480.373 1104.52 436.276 1166.22 365.481C1226.49 296.333 1271.07 200.848 1277.74 108.467C1280 77.1992 1259.9 47.6332 1239.1 25.4749C1216.2 1.0844 1171.8 -3.46028 1147.42 22.4924C1121.43 50.1525 1115.18 88.6609 1111.76 125.065C1108.03 164.729 1112.86 201.119 1123.17 239.438C1134.03 279.83 1149.25 313.43 1174 347.327C1194.65 375.613 1220.61 406.1 1254.92 417.611C1301.71 433.31 1374.16 443.67 1420.9 422.02C1505.36 382.901 1550.24 287.871 1594.15 210.909C1625.72 155.571 1656.26 110.548 1715.26 83.4394C1732.35 75.5887 1750.01 77.3447 1768.43 77.3447"
              stroke="#FC4343"
              strokeWidth="10"
              strokeLinecap="round"
            />
          </svg>
        </div>
        <div className="relative w-full h-[500px] md:h-[550px] lg:h-[600px] z-0 px-5 max-w-[25rem] sm:max-w-[38rem] md:max-w-[42rem] lg:max-w-6xl mx-auto">
          {/* Calendar App - comes from bottom up */}
          <div className="absolute left-1/2 top-0 transform -translate-x-1/2 z-20 h-[18rem] sm:h-auto w-[18rem] sm:w-[28rem] md:w-[30rem]  lg:w-[45rem] shadow-xl rounded-lg overflow-hidden">
            <ScrollReveal
              animation="slideUp"
              duration={1000}
              delay={200}
              easing="smooth"
            >
              <Image
                src="/apps/calendar-app.svg"
                alt="Calendar App"
                width={720}
                height={478.83}
                className="w-full h-auto"
              />
            </ScrollReveal>
          </div>

          {/* Food Delivery App - comes from bottom left */}
          <div className="absolute left-0 pl-5 top-[15%] transform z-30 sm:h-auto w-[6rem] sm:w-[9rem]  md:w-[10rem] lg:w-[15rem] shadow-xl md:rounded-2xl overflow-hidden">
            <ScrollReveal
              animation="slideBottomRight" // Bottom left to top right
              duration={1200}
              delay={300}
              easing="smooth"
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
          <div className="absolute right-0 top-[15%] pr-5 transform z-30 sm:h-auto w-[6rem] sm:w-[9rem] md:w-[10rem] lg:w-[15rem] shadow-xl md:rounded-2xl overflow-hidden">
            <ScrollReveal
              animation="slideBottomLeft" // Bottom right to top left
              duration={1200}
              delay={300}
              easing="smooth"
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
    </>
  );
};

export default BusinessGrowthComponent;
