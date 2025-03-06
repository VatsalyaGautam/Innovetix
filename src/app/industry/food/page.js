import React from "react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import ScrollReveal from "@/components/ScrollReveal";
import FoodDeliveryPromo from "@/components/Industry/Food/FoodDeliveryPromo";
import FoodOrderingFeatures from "@/components/Industry/Food/FoodOrderingFeatures";
import FoodDeliveryService from "@/components/Industry/Food/FoodDeliveryService";
import { foodfaqItems } from "@/lib/config";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight, Router, Truck } from "lucide-react";
import BottomAccordion from "@/components/BottomAccordion";
export default function page() {
  const features = [
    {
      icon: <Router className="w-6 h-6 text-primary" />,
      title: "Simplify Food Ordering",
      description:
        "Give your customers a branded food ordering app & website to place orders, pay for them and track the delivery agent in real-time.",
    },
    {
      icon: <Card className="w-6 h-6 text-primary" />,
      title: "Manage Your Food Business",
      description:
        "A powerful dashboard allows you to manage your menu, track discounts, payments, ratings & reviews, and much more—all from a single platform.",
    },
    {
      icon: <Truck className="w-6 h-6 text-primary" />,
      title: "Ensure Timely Deliveries",
      description:
        "Empower your delivery team with an easy-to-use app that provides optimized routes, order notifications, and daily earning records.",
    },
  ];
  return (
    <>
      {/* Hero - Section 1 */}
      <div className="bg-[rgb(13,13,13)] text-white relative overflow-hidden mt-40 py-6 w-full h-auto min-w-[552px]">
        <div className="px-8 md:max-w-8xl lg:max-w-[120rem] mx-auto flex flex-col">
          {/* Main content container with food images on both sides */}
          <div className="relative pb-6 sm:py-20 md:py-20 flex flex-col items-center">
            <div className="hidden sm:block absolute top-1/2 -translate-y-1/2 -ml-48 xl:-ml-40 left-0 pointer-events-none overflow-visible">
              <Image
                src="/food/leftFood.png"
                width={335}
                height={335}
                alt="Pasta"
                className="animate-rollInFromLeftCustom duration-1000  ease-out"
              />
            </div>

            {/* Right Food Image */}
            <div className="absolute top-1/2 -translate-y-1/2  -mr-24 sm:-mr-48 xl:-mr-40 right-0 pointer-events-none overflow-visible">
              <Image
                src="/food/rightFood.png"
                width={335}
                height={332.73}
                alt="Paneer"
                className="animate-rollInFromRightCustom duration-1000  ease-out"
              />
            </div>

            {/* Center content section */}
            <div className="z-10 text-center max-w-5xl mr-auto sm:mx-auto flex flex-col items-start sm:items-center">
              {/* Main heading */}

              <h1 className="animate-slideInTop ease-out duration-500 leading-snug text-4xl md:text-5xl  xl:text-6xl font-bold mt-8 sm:mb-4 sm:mt-0 text-left sm:text-center">
                Fuel Your Food Business With
                <br />A Complete Technology Solution
              </h1>

              {/* Tech categories */}
              <div className="flex flex-col md:flex-row justify-center gap-1 md:gap-4 lg:gap-8 my-8  ">
                <ScrollReveal
                  animation="slightDown"
                  duration={600}
                  delay={100}
                  index={0}
                  stagger={150}
                  easing="spring"
                >
                  <div className="flex items-center justify-start sm:justify-center gap-2">
                    <span className="text-orange-400 text-xl">📱</span>
                    <span className="font-medium">Ordering Tech</span>
                  </div>
                </ScrollReveal>

                <ScrollReveal
                  animation="slightDown"
                  duration={600}
                  delay={100}
                  index={1}
                  stagger={150}
                  easing="spring"
                >
                  <div className="flex items-center justify-start sm:justify-center gap-2">
                    <span className="text-orange-400 text-xl">🚚</span>
                    <span className="font-medium">Delivery Tech</span>
                  </div>
                </ScrollReveal>

                <ScrollReveal
                  animation="slightDown"
                  duration={600}
                  delay={100}
                  index={2}
                  stagger={150}
                  easing="spring"
                >
                  <div className="flex items-center justify-start sm:justify-center gap-2">
                    <span className="text-orange-400 text-xl">💻</span>
                    <span className="font-medium">Management Tech</span>
                  </div>
                </ScrollReveal>
              </div>

              <ScrollReveal
                animation="slightUp"
                duration={600}
                delay={400}
                easing="spring"
              >
                <Button className="bg-orange-500 hover:bg-orange-600 text-white font-medium px-8 py-6 text-xl rounded-md my-4">
                  Book Your Demo
                </Button>
              </ScrollReveal>

              {/* Bottom text */}
              <ScrollReveal
                animation="slightUp"
                duration={600}
                delay={500}
                easing="spring"
                className="flex justify-center"
              >
                <p className="  text-left sm:text-center text-sm md:text-base mt-6 mb-6 md:mb-0 max-w-[21rem] sm:max-w-sm md:max-w-md lg:max-w-2xl opacity-90">
                  From Planning To Promoting, Leverage From The Most Advance
                  Food Delivery App Development Services Backed By Top Industry
                  Expert Consultation At Every Step
                </p>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </div>
      {/* Section 1 Ends */}
      {/* Sec 2 */}
      <div className="bg-white w-full flex flex-col  -mt-10 overflow-hidden">
        <div className="relative w-full h-[300px] md:h-[370px] lg:h-[600px] z-0 px-5 max-w-[25rem] sm:max-w-[38rem] md:max-w-[42rem] lg:max-w-6xl mx-auto">
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
        <div className="bg-white px-5 md:max-w-5xl lg:max-w-6xl mx-auto flex flex-col gap-4 mb-16">
          {/* Sec 3 start */}
          <div className="w-full bg-white pt-1 sm:pt-10 md:py-16">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
              {/* Heading Section */}
              <ScrollReveal
                animation="slightDown"
                duration={600}
                delay={200}
                easing="smooth"
              >
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-center mb-10 md:mb-16 max-w-5xl mx-auto leading-tight">
                  We've Helped Over 9 Multi-Million Dollar Food Startups In The
                  Last Six Years And The Numbers Speak Themselves
                </h2>
              </ScrollReveal>
              {/* Stats Cards */}
              <ScrollReveal
                animation="slideRight"
                duration={600}
                delay={200}
                easing="smooth"
                className="flex flex-col md:flex-row gap-4 md:gap-6 mb-12 md:mb-20 justify-center"
              >
                {/* Stat Card 1 */}
                <div className="flex-1 border border-orange-200 rounded-lg p-6 bg-orange-50 flex items-center gap-4">
                  <div className="w-16 h-16 flex-shrink-0">
                    {/* Placeholder for bag/order icon */}
                    <Image
                      src="/food/ordersProcessed.svg"
                      width={64}
                      height={52.36}
                      alt="orders"
                    />
                  </div>
                  <div>
                    <h3 className="text-4xl font-bold">1.5M</h3>
                    <p className="text-lg text-gray-700 !leading-tight">
                      Orders Processed
                    </p>
                  </div>
                </div>

                {/* Stat Card 2 */}
                <div className="flex-1 border border-orange-200 rounded-lg p-6 bg-orange-50 flex items-center gap-4">
                  <div className="w-16 h-16 flex-shrink-0">
                    {/* Placeholder for customer review icon */}
                    <Image
                      src="/food/customerReviews.svg"
                      width={64}
                      height={63.47}
                      alt="Customer Reviews"
                    />
                  </div>
                  <div>
                    <h3 className="text-4xl font-bold">60K</h3>
                    <p className="text-lg text-gray-700 !leading-tight">
                      Customer Reviews
                    </p>
                  </div>
                </div>

                {/* Stat Card 3 */}
                <div className="flex-1 border border-orange-200 rounded-lg p-6 bg-orange-50 flex items-center gap-4">
                  <div className="w-16 h-16 flex-shrink-0">
                    {/* Placeholder for transaction/money icon */}
                    <Image
                      src="/food/monthlyTransactions.svg"
                      width={64}
                      height={63.41}
                      alt="monthly transactions"
                    />
                  </div>
                  <div>
                    <h3 className="text-4xl font-bold">230K</h3>
                    <p className="text-lg text-gray-700 !leading-tight">
                      Monthly Transactions
                    </p>
                  </div>
                </div>
              </ScrollReveal>

              {/* App Showcase Section */}
              <div className="w-full bg-black text-white rounded-xl overflow-hidden">
                <div className="flex flex-col md:flex-row">
                  <ScrollReveal
                    animation="slideBottomRight"
                    duration={600}
                    delay={200}
                    easing="smooth"
                    className="hidden md:flex flex-col md:w-1/3 relative justify-end"
                  >
                    {/* This will be a placeholder for the app screenshots */}
                    <Image
                      width={349.33}
                      height={348.53}
                      alt="apps screenshots"
                      src="/food/sec3img.svg"
                    />
                  </ScrollReveal>
                  {/* Text Content */}
                  <ScrollReveal
                    animation="slightDown"
                    duration={600}
                    delay={200}
                    easing="smooth"
                    className="p-8 md:p-12 lg:p-16 md:w-2/3 flex flex-col justify-center"
                  >
                    <h3 className=" font-bold mb-4 text-3xl  leading-snug md:text-4xl">
                      We've Created Some Of{" "}
                      <span className="text-blue-400">
                        'The Most Downloaded'
                      </span>{" "}
                      Apps In The Region
                    </h3>
                    <p className="text-xl text-gray-300 mt-4">
                      Explore Their Journey To Success With Innovetix
                    </p>
                  </ScrollReveal>
                </div>
              </div>
            </div>
          </div>
          {/* sec 3 end */}
          <FoodDeliveryPromo />
          <FoodOrderingFeatures />
          <FoodDeliveryService />
        </div>
      </div>
      {/* sec start */}
      <div className="bg-[#E03032]">
        <div className="bg-[#E03032] px-5 md:max-w-7xl lg:max-w-[88rem] mx-auto flex flex-col">
          <div
            className=" text-white py-16 px-4 
            sm:pb-6 sm:pt-3 
            md:pt-6 md:pb-16
            lg:pb-6
            rounded-lg"
          >
            <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between space-y-8 lg:space-y-0 lg:space-x-12">
              {/* Left Side - Tablet Mockup Placeholder */}
              <ScrollReveal
                animation="slightRight"
                duration={600}
                delay={200}
                easing="smooth"
                className="w-full h-full lg:w-1/2 flex justify-center lg:justify-left relative min-w-[569px]
              sm:max-w-[569px]
              md:max-w-[696px]
              lg:max-w-[452px]
              xl:max-w-[580px]
              "
              >
                <Image
                  width={368}
                  height={475.36}
                  src="/food/foodIndustry.svg"
                  className=" lg:-mb-32 xl:-mb-28 w-[23rem]  z-[1]"
                  alt="dish"
                />
                <Image
                  width={410.66}
                  height={360.99}
                  src="/food/pizza.svg"
                  className="absolute z-0 w-[47%] top-8 right-12
                  md:right-20 
                  lg:right-8 lg:w-3/5
                  xl:right-12"
                  alt="pizza"
                />
              </ScrollReveal>

              {/* Right Side - Content */}
              <ScrollReveal
                animation="slightDown"
                duration={600}
                delay={200}
                easing="smooth"
                className="w-full lg:w-1/2 text-center lg:text-left"
              >
                <h1 className="text-3xl sm:text-3xl md:text-4xl  xl:text-5xl font-bold mb-6 leading-tight">
                  Your Chance To Standout In The Online Food Industry Are Higher
                </h1>
                <p className="text-base sm:text-lg mb-8 opacity-90 leading-relaxed">
                  Food delivery may not be new, but with the right technology
                  solution, you can rise to become a leading player in the
                  market. Innovetix's tested and scalable tech solutions are
                  designed to help you lead the industry.
                </p>

                <Button
                  variant="default"
                  className="bg-black text-white hover:bg-red-200  hover:text-black px-6 py-6 rounded-lg text-base font-semibold group"
                >
                  Get Complete Industry Report
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </div>
      {/* sec end */}

      <div className="bg-white">
        <div className="bg-white px-5 md:max-w-5xl lg:max-w-6xl mx-auto flex flex-col">
          <div>
            <ScrollReveal
              animation="slightDown"
              duration={600}
              delay={200}
              easing="smooth"
            >
              <h1 className="text-5xl font-bold text-center mb-8 mt-16 lg:mt-24">
                Advance Tech Suite To Escalate Your Food Business Growth
              </h1>
            </ScrollReveal>
            <div className="flex gap-10 lg:gap-4 pb-16 lg:pb-24 flex-col-reverse lg:flex-row items-center">
              <div className="grid md:grid-cols-1 gap-6 w-full lg:w-1/2 max-w-xl">
                {features.map((feature, index) => (
                  <ScrollReveal
                    key={index}
                    delay={index * 200 + 200}
                    animation="slightRight"
                    duration={600}
                    easing="smooth"
                  >
                    <Card className="bg-[#E5D5C0] border-none shadow-md hover:shadow-lg transition-shadow duration-300">
                      <CardContent className="p-6 relative">
                        <div className="space-y-4">
                          <h2 className="text-xl font-semibold">
                            {feature.title}
                          </h2>
                          <p className="text-gray-700 md:!mt-1">
                            {feature.description}
                          </p>
                        </div>
                        <div className="absolute bottom-4 right-4">
                          <ArrowRight
                            className="text-black hover:translate-x-1 transition-transform"
                            size={24}
                          />
                        </div>
                      </CardContent>
                    </Card>
                  </ScrollReveal>
                ))}
              </div>

              <div className="flex justify-center relative  w-full lg:w-1/2">
                <div className="w-full max-w-4xl">
                  {/* Placeholder for screenshots/UI mockup */}
                  <ScrollReveal
                    animation="slightLeft"
                    duration={600}
                    delay={200}
                    easing="smooth"
                    className="h-auto sm:h-[450px] rounded-lg flex items-center justify-center"
                  >
                    <Image
                      src="/food/thirdLast.svg"
                      width={548}
                      height={400}
                      alt="laptop and mobile"
                      className="h-full"
                    />
                  </ScrollReveal>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full bg-[#EEF0FF] text-white overflow-hidden mb-6">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8  relative">
          <div className="grid grid-cols-1 sm:grid-cols-2 sm:gap-8 items-center">
            {/* Left Content */}
            <ScrollReveal
              animation="slightRight"
              duration={600}
              delay={200}
              easing="smooth"
              className="flex justify-center items-end  h-full w-full"
            >
              <Image
                src="/food/secLast.svg"
                width={528}
                height={365.41}
                alt="restro"
              />
            </ScrollReveal>

            {/* Right Content - Image Placeholder */}
            <ScrollReveal
              easing="smooth"
              animation="slightLeft"
              duration={800}
              delay={100}
              className="z-10  pt-8 pb-8 sm:py-16 md:py-20  "
            >
              {/* Simple placeholder div for your image */}
              <h1 className="text-xl sm:text-2xl lg:text-3xl font-bold mb-8 leading-tight text-black">
                Prepare Your Online Restaurant
                <br className="sm:block hidden" />
                For The&nbsp;
                <span className="text-blue-500">‘Next Normal’&nbsp;</span>
                With A <br className="sm:block hidden" />
                Tech Suite That Has All Features{" "}
                <br className="sm:block hidden" />
                To Combat COVID Adversity
              </h1>

              <Button className="bg-[#B9641A] hover:bg-[#B9801E] text-white  p-1 sm:p-2 md:px-4 md:py-4 h-auto rounded-md text-lg font-medium flex items-center">
                <span>Build your Unique Dating App</span>
                <ArrowRight className="h-5 w-10" />
              </Button>
              {/* You'll add your image here */}
            </ScrollReveal>
          </div>
        </div>
      </div>
      <BottomAccordion faqItems={foodfaqItems} buttonColor="bg-blue-400" />
    </>
  );
}
