import React from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
function page() {
  return (
    <>
      {/* sec 1 */}
      <div className="bg-gradient-to-b from-[#040404] to-[#201F37]">
        <div className=" px-5 md:max-w-5xl lg:max-w-6xl mx-auto flex flex-col pb-20 pt-32">
          <div className="flex flex-col lg:flex-row gap-10 items-center">
            <div className="flex-1 space-y-6">
              <h2
                className="text-6xl md:text-7xl lg:text-8xl font-bold   tracking-wide text-black "
                style={{
                  textShadow:
                    "-1px 0 #7e7e7e, 0 1px #7e7e7e, 1px 0 #7e7e7e, 0 -1px #7e7e7e",
                }}
              >
                ABOUT US
              </h2>
              <h3 className="text-4xl md:text-5xl font-bold text-white leading-tight">
                We're Your Digital Technological Partners
              </h3>
              <p className="text-gray-300 text-lg">
                At Innovetix Global Pvt. Ltd., we are a forward-thinking,
                results-driven company that strives to create impactful
                solutions for businesses and individuals.
              </p>
              <div className="pt-4">
                <Button className="bg-white text-black hover:bg-gray-200 px-8 py-6 rounded-md text-lg font-medium transition-all">
                  Get Started
                </Button>
              </div>
            </div>

            <div className="flex-1 relative h-[30rem]">
                {/* Image placeholders with proper positioning */}
                <div className="absolute   justify-start -translate-y-1/2 top-1/3 w-72">
                    <img src="/about/hero1.svg"></img>
                </div>
       
                 <div className="absolute justify-start left-40 bottom-0 w-72">
                    <img src="/about/hero2.svg"></img>
                </div>
              </div>
            </div>
          </div>
        </div>
      {/* sec 1 end */}
    </>
  );
}

export default page;
