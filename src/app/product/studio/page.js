import React from "react";
import {
  CircleArrowRight,
  ArrowRight,
  Target,
  Settings,
  PiggyBank,
  Magnet,
  DatabaseZap,
  Scroll,
} from "lucide-react";
import Image from "next/legacy/image";
import CardSec2 from "@/components/Product_Studio/CardSec2";
import { studioCards, steps } from "@/lib/config";
import TechSuite from "@/components/Product_Studio/TechSuite";
import {
  Users,
  Building2,
  DollarSign,
  ChevronRight,
  ChevronsRight,
} from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";

const DiagonalLinePattern = () => (
  <svg
    className="absolute inset-0 w-full h-full"
    style={{
      backgroundSize: "100% 100%",
      pointerEvents: "none",
    }}
  >
    <pattern
      id="diagonal-lines"
      width="40"
      height="40"
      patternUnits="userSpaceOnUse"
      patternTransform="rotate(45)"
    >
      <line
        x1="0"
        y1="0"
        x2="0"
        y2="40"
        stroke="rgba(255,255,255,0.1)"
        strokeWidth="1"
      />
    </pattern>
    <rect width="100%" height="100%" fill="url(#diagonal-lines)" />
  </svg>
);

function page() {
  const Step = ({ number, title, description, index = number - 1 }) => {
    const getAnimation = (index) => {
      if (index === 0) {
        return "slightRight";
      } else if (index === 5) {
        return "slightLeft";
      } else if (index <= 2) {
        return "slideRight";
      }
      return "slideLeft";
    };
    const getDelay = (index) => {
      if (index === 0) {
        return 0;
      } else if (index === 5) {
        return 0;
      } else if (index <= 2) {
        return index * 200;
      } else if (index === 3) {
        return 400;
      }
      return 200;
    };
    return (
      <ScrollReveal
        animation={getAnimation(index)}
        delay={getDelay(index)}
        duration={800}
        easing="smooth"
        className="bg-[#C59E12] px-6 pt-6 pb-12 rounded-lg flex flex-col relative md:p-10 md:pb-16"
      >
        <p className="absolute text-white font-extrabold text-8xl opacity-10 top-1 right-1 md:text-9xl">
          {number}
        </p>
        <div className="text-white text-2xl text-center font-bold md:mb-2 lg:mb-12">
          Step {number}
        </div>
        <div className="text-white text-xl text-center font-bold mb-3 md:text-2xl md:mb-4">
          {title}
        </div>
        <div className="text-white text-lg text-center font-semibold leading-snug md:text-xl md:leading-tight">
          {description}
        </div>
      </ScrollReveal>
    );
  };
  const stats = [
    {
      number: "10+",
      text: "Years Of Industry Experience",
      icon: <Users className="w-8 h-8 text-blue-600" />,
    },
    {
      number: "2300+",
      text: "Technology Suites Catered",
      icon: <Settings className="w-8 h-8 text-blue-600" />,
    },
    {
      number: "550+",
      text: "Custom Mobility Solutions Served",
      icon: <Building2 className="w-8 h-8 text-blue-600" />,
    },
    {
      number: "50+",
      text: "Multi-Million Dollar Businesses",
      icon: <DollarSign className="w-8 h-8 text-blue-600" />,
    },
  ];

  const features = [
    "In-Depth Industry Expertise & Knowledge",
    "Top Vetted & Highly Skilled Developers",
    "Tested & Exceptional Methodologies",
  ];
  return (
    <>
      <div className="bg-black bg-[url('/studio/studioMain.svg')] bg-no-repeat bg-cover pt-20">
        <div className="w-full px-5 md:max-w-5xl lg:max-w-[88rem] mx-auto flex flex-col sm:flex-row py-16">
          {/* Left Content Column */}
          <div className="w-full mb-4 sm:mb-0 sm:w-1/2 flex flex-col h-full my-auto justify-center items-center">
            <div className="flex flex-col gap-4 sm:gap-20">
              <div className="flex flex-col gap-6">
                {/* Heading with character-by-character staggering effect */}
                <ScrollReveal
                  animation="slideRight"
                  duration={800}
                  easing="spring"
                >
                  <h1 className="text-white text-5xl font-bold font-inter leading-tight">
                    Choose The
                    <br /> Only <span className="text-[#F6BA0D]">Premium</span>
                    &nbsp;App <br /> Development Company
                  </h1>
                </ScrollReveal>

                {/* Subheading with different animation */}
                <ScrollReveal
                  animation="slideRight"
                  duration={800}
                  delay={100}
                  easing="gentle"
                >
                  <p className="text-white text-3xl leading-snug md:leading-normal">
                    To Build Exceptional Technology Solution For Your Unique
                    Business Ideas
                  </p>
                </ScrollReveal>
              </div>

              {/* Button with bouncy animation */}
              <ScrollReveal
                animation="slideUp"
                duration={800}
                delay={300}
                easing="bouncy"
              >
                <button className="border-2 text-left px-2 md:px-4 py-1 md:py-2 text-white text-2xl rounded-md justify-around w-fit sm:w-auto gap-4 max-w-90 border-white flex hover:bg-white hover:text-black transition-colors duration-300">
                  <p>Book Free Consultation</p>
                  <ScrollReveal
                    animation="slideLeft"
                    duration={700}
                    delay={500}
                    easing="spring"
                  >
                    <CircleArrowRight size={32} fill="white" stroke="black" />
                  </ScrollReveal>
                </button>
              </ScrollReveal>
            </div>
          </div>

          {/* Right Image Column */}
          <div className="w-full sm:w-1/2 h-[20rem] md:h-[30rem] flex justify-center relative items-center">
            <ScrollReveal
              animation="scaleUp"
              duration={900}
              delay={300}
              easing="gentle"
              className="w-full h-auto"
            >
              <div className="relative w-full h-[20rem] md:h-[30rem]">
                <Image
                  src="/studio/studioRightpng.png"
                  layout="fill"
                  alt="studioHero"
                  objectFit="contain"
                />
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
      <div className="bg-slate-50">
        <div className="bg-slate-50  h-auto py-16 md:py-28 w-full px-5 md:max-w-5xl lg:max-w-6xl mx-auto flex flex-col gap-6 md:gap-24">
          <div className="flex flex-col justify-center items-center md:gap-4">
            <ScrollReveal
              animation="slideDown"
              duration={800}
              easing="spring"
              delay={200}
            >
              <h2
                className="text-4xl font-bold font-inter text-center bg-clip-text text-transparent"
                style={{
                  backgroundImage:
                    "linear-gradient(90deg, #000000 0%, rgba(0, 0, 0, 0.6) 8.15%, #000000 14.43%, rgba(0, 0, 0, 0.6) 20.89%, #000000 27.32%, rgba(0, 0, 0, 0.6) 33.3%, #000000 38.52%, rgba(0, 0, 0, 0.6) 43.42%, #000000 51.98%, rgba(0, 0, 0, 0.6) 61.5%, #000000 73.62%, rgba(0, 0, 0, 0.6) 91.06%, #000000 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                Your Doorway To Premium App Development Services
              </h2>
            </ScrollReveal>
            <div className="flex justify-center items-center">
              <ScrollReveal
                animation="slideDown"
                duration={800}
                easing="spring"
              >
                <p className="font-inter font-normal font-xl text-center max-w-2xl lg:max-w-[88rem] p-5">
                  At Innovetix, we focus on serving a select group of
                  exceptional businesses. Our exclusive screening process
                  ensures that we equip your business with cutting-edge
                  enterprise capabilities, driving unparalleled success.
                </p>
              </ScrollReveal>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 md:gap-y-12">
            {studioCards.map((ele, idx) => {
              return (
                <ScrollReveal
                  key={idx}
                  animation={idx / 2 <= 1 ? `slideRight` : `slideLeft`}
                  duration={1000}
                  easing="bouncy"
                >
                  <div className="p-4">
                    {" "}
                    <CardSec2 image={ele.image} title={ele.title} />{" "}
                  </div>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </div>

      <div className="bg-black  bg-[url('/studio/studioMain.svg')] bg-no-repeat bg-cover">
        <div className=" h-auto relative w-full px-10 xl:px-5 md:max-w-5xl lg:max-w-[88rem] mx-auto flex flex-col py-16 md:py-28 ">
          <ScrollReveal
            animation="slightLeft"
            duration={800}
            easing="gentle"
            className="hidden xl:block absolute top-32 right-36 w-auto h-auto opacity-50"
          >
            <Image
              src="/studio/stars.svg"
              alt="stars"
              width={105}
              height={96}
            />
          </ScrollReveal>
          <ScrollReveal
            animation="slideRight"
            duration={800}
            easing="gentle"
            className="hidden xl:block  absolute top-16 left-48 w-auto h-auto opacity-50"
          >
            <Image
              src="/studio/stars.svg"
              alt="stars"
              width={105}
              height={96}
              className="absolute top-16 left-48"
            />
          </ScrollReveal>
          {/* Header section */}
          <div className="mb-4">
            <ScrollReveal
              animation="slideDown"
              duration={800}
              delay={200}
              easing="spring"
            >
              <h1 className="text-white text-4xl font-bold text-center mb-3">
                Innovetix&apos;s Application Development Framework
              </h1>
            </ScrollReveal>
            <ScrollReveal animation="slideDown" duration={800} easing="spring">
              <p className="text-gray-300 text-center text-xl">
                A proven workflow to serve you with fully customized solutions,
                built to give you the best shot at success.
              </p>
            </ScrollReveal>
          </div>

          {/* Steps grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-8 mt-12 mb-12 md:mt-28 md:mb-24">
            {steps.map((step, index) => (
              <Step
                key={index}
                number={index + 1}
                title={step.title}
                description={step.description}
              />
            ))}
          </div>

          {/* Bottom CTA section */}
          <ScrollReveal
            animation="slideUp"
            duration={800}
            easing="gentle"
            className="text-center"
          >
            <h2 className="text-gray-500 text-2xl font-bold mb-4">
              Looking For Custom Mobile App Development To Fuel Your Business
              Growth?
            </h2>
            <p className="text-gray-500 text-xl mb-12">
              Transform Your Business Digitally With Our Advanced Tech Suite,
              Backed By Our Premium Application Development Services
            </p>
            <button className="group relative bg-gradient-to-r from-[#C59E12] to-[#FFD700] overflow-hidden transition-all duration-500 text-white font-bold px-8 py-3 rounded-lg flex items-center gap-2 mx-auto text-lg shadow-lg hover:shadow-xl hover:scale-105">
              {/* Hover effect element */}
              <span className="absolute inset-0 w-full h-full bg-white transform scale-x-0 origin-left transition-transform duration-500 ease-in-out group-hover:scale-x-100 -z-10"></span>

              {/* Dynamic background change on hover */}
              <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-[#FFD700] to-[#C59E12] opacity-0 transition-opacity duration-500 group-hover:opacity-100 -z-10"></span>

              {/* Unified Text & Arrow for Color Sync */}
              <span className="relative z-10 flex items-center gap-2 transition-colors duration-300 ease-in-out group-hover:text-black">
                Let&apos;s Discuss
                <ArrowRight
                  className="transform transition-transform duration-500 group-hover:translate-x-2 scale-100 group-hover:scale-110"
                  size={24}
                />
              </span>
            </button>
          </ScrollReveal>
        </div>
      </div>

      <div className="bg-slate-50">
        <div className="bg-slate-50 h-auto py-16 md:py-28  w-full px-5 md:max-w-5xl lg:max-w-6xl mx-auto flex flex-col items-center">
          {/* Header Section */}
          <ScrollReveal
            animation="slideDown"
            duration={800}
            easing="smooth"
            className="text-center mb-8 md:mb-20"
          >
            <h1 className="text-4xl font-bold mb-4">
              <span className="text-[#B8982C]">Not Just Technology</span>, We
              Focus On Everything
              <br />
              That Makes A Difference Your Brand
            </h1>
            <p className="text-xl text-gray-800 max-w-4xl mx-auto leading-snug md:leading-normal">
              Make Extraordinary Happen For Your Businesses & Customers,
              <br />
              With CB Studio&apos;s Exceptional Android & iOS App Development
            </p>
          </ScrollReveal>

          {/* Main Content Section */}
          <div className="w-full flex flex-col lg:flex-row justify-between items-center ">
            {/* Left Content */}
            <ScrollReveal
              animation="slideRight"
              duration={800}
              easing="smooth"
              className="lg:w-2/6 mb-10"
            >
              <h3 className="text-[#B8982C] text-2xl mb-4">Validation</h3>
              <h2 className="text-4xl font-medium mb-6">
                Business Planning With
                <br />
                C-Level Consultation
              </h2>
              <p className="text-lg leading-snug md:leading-normal text-gray-700 mb-8">
                Give your business a rock-solid foundation with a polished plan,
                prepared by our C-level experts.
              </p>
              <button className="bg-[#B8982C] text-white  font-bold px-8 py-4 rounded flex items-center gap-2">
                Get Your Business Plan Ready
                <ArrowRight size={20} />
              </button>
            </ScrollReveal>

            {/* Right Content - Placeholder for images */}
            <ScrollReveal
              animation="slideLeft"
              duration={800}
              easing="smooth"
              className="w-full lg:w-4/6 h-[22rem] flex justify-center p-4 relative"
            >
              <Image
                src="/studio/studioTablet.svg"
                layout="fill"
                alt="studioHero"
                objectFit="contain"
              />
            </ScrollReveal>
          </div>

          {/* Bottom Features */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mt-10">
            <ScrollReveal
              animation="slideRight"
              duration={800}
              easing="smooth"
              className="text-center"
            >
            
              <div
                id="outOfContextImageDiv"
                className="w-16 h-16 bg-[#C59E12] rounded-full mx-auto mb-6 relative flex items-center justify-center"
              >
                <Image
                  src="/studio/manWithLaptop.svg"
                  alt="Man with laptop"
                  width={50}
                  height={70}
                  className="absolute !top-9 !-left-6"
                />
              </div>
              <h3 className="text-xl font-medium mb-4">
                Leverage Consultation With C-Suite
              </h3>
              <p className="text-gray-700">
                Get in touch with our CEO, CTO, CMO, & department leads, who
                will be examining the technical & financial feasibility of your
                idea.
              </p>
            </ScrollReveal>

            <div className="text-center">
              <ScrollReveal animation="slideUp" duration={800} easing="smooth">
                <div
                  id="outOfContextImageDiv"
                  className="w-16 h-16 bg-[#C59E12] rounded-full mx-auto mb-6 relative flex items-center justify-center"
                >
                  <Image
                    src="/studio/bulb.svg"
                    alt="Light bulb"
                    width={50}
                    height={60}
                    className="absolute !top-9 !-left-8"
                  />
                </div>
                <h3 className="text-xl font-medium mb-4">
                  Get Insights That Make Difference
                </h3>
                <p className="text-gray-700">
                  Will you meet your revenue goals? How can you scale in the
                  next few years? Let experts answer such questions with
                  insightful data.
                </p>
              </ScrollReveal>
            </div>

            <div className="text-center">
              <ScrollReveal
                animation="slideLeft"
                duration={800}
                easing="smooth"
              >
                <div
                  id="outOfContextImageDiv"
                  className="w-16 h-16 bg-[#C59E12] rounded-full mx-auto mb-6 relative flex items-center justify-center"
                >
                  <Image
                    src="/studio/electron.svg"
                    alt="Network diagram"
                    width={60}
                    height={70}
                    className="absolute !top-8 !-left-8"
                  />
                </div>
                <h3 className="text-xl font-medium mb-4">
                  Drive Competitive Advantage
                </h3>
                <p className="text-gray-700">
                  Find out how you can efficiently stack up against competitors
                  with a strategic business plan, which roadmaps your success
                  journey.
                </p>
              </ScrollReveal>
            </div>
          </div>
        </div>
        <div className="bg-black  bg-[url('/studio/studioMain.svg')] bg-no-repeat bg-cover">
          <div className=" h-auto lg:h-[45rem]  w-full px-5 md:max-w-5xl lg:max-w-6xl mx-auto flex flex-col lg:flex-row items-center lg:justify-between gap-16 ">
            <ScrollReveal
              animation="slideRight"
              duration={800}
              easing="smooth"
              className="lg:w-1/2 h-full relative "
            >
              <Image
                src="/studio/studioBig.png"
                layout="fill"
                alt="studioHero"
                objectFit="contain"
              />
            </ScrollReveal>

            {/* Right side content */}

            <ScrollReveal
              animation="slideLeft"
              duration={800}
              easing="smooth"
              className="lg:w-1/2 space-y-8 pb-16 lg:pb-28 lg:pt-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-yellow-500">
                Product Strategy With Our In-House Design Studio
              </h2>

              <p className="text-gray-300 text-lg">
                Having an exclusive team of top-class designers by our side, we
                design UI/UX that elevates experiences for your custom mobility
                solutions.
              </p>

              {/* Features */}
              <div className="space-y-6">
                {/* Feature 1 */}
                <div className="flex items-start gap-4">
                  <div className="bg-yellow-500/20 p-3 rounded-full">
                    <div className="w-8 h-8 bg-yellow-500 rounded-full flex items-center justify-center">
                      👑
                    </div>
                  </div>
                  <div>
                    <h3 className="text-white text-xl font-semibold mb-2">
                      Lead By The Leaders
                    </h3>
                    <p className="text-gray-400">
                      Get our Chief Design Officer & top UI/UX professionals at
                      work to enhance customer experience, increase retention &
                      drive success.
                    </p>
                  </div>
                </div>

                {/* Feature 2 */}
                <div className="flex items-start gap-4">
                  <div className="bg-yellow-500/20 p-3 rounded-full">
                    <div className="w-8 h-8 bg-yellow-500 rounded-full flex items-center justify-center">
                      🎯
                    </div>
                  </div>
                  <div>
                    <h3 className="text-white text-xl font-semibold mb-2">
                      Crafted With Customer-Centric Approach
                    </h3>
                    <p className="text-gray-400">
                      CB Studio keeps your end-users the point upon which
                      product strategy pivots, to delivery intuitive and
                      interactive experiences.
                    </p>
                  </div>
                </div>
              </div>

              {/* CTA Button */}
              <div className="w-full sm:w-[80%] md:w-[65%] lg:w-full px-3">
                <button className="bg-white text-black w-full px-6 py-4 rounded-lg font-medium flex items-center gap-2 hover:bg-gray-100 transition-colors">
                  Create Exceptional Experience For Your Brand
                  <ArrowRight className="w-5 h-5" />
                </button>
              </div>
            </ScrollReveal>
          </div>
        </div>
        <TechSuite />

        <div className="bg-black bg-[url('/studio/studioMain.svg')] bg-no-repeat bg-cover">
          <div className="h-auto py-16 md:py-28  w-full px-5 md:max-w-5xl lg:max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-16">
            <ScrollReveal
              animation="slideRight"
              duration={800}
              easing="smooth"
              className="hidden lg:block w-full lg:w-1/2 h-[40rem] relative"
            >
              <Image
                src="/studio/studioComingSoon.svg"
                layout="fill"
                objectFit="contain"
                alt="Coming Soon"
              />
            </ScrollReveal>
            <ScrollReveal
              animation="slideLeft"
              duration={800}
              easing="smooth"
              className="lg:w-1/2 space-y-8"
            >
              {/* Header */}
              <div className="space-y-4">
                <p className="text-blue-400 text-lg font-medium">Launch</p>
                <h2 className="text-3xl md:text-4xl font-bold text-white">
                  Need Some Excitement Before Your App Hits The Store?
                </h2>
                <p className="text-gray-300 text-lg leading-snug lg:leading-normal">
                  Benefit from our pre & post launch marketing services, where
                  we strategize to build curiosity for your solution.
                </p>
                <p className="text-gray-300 text-lg leading-snug lg:leading-normal">
                  Reportedly, 23% of mobile businesses fail due to lack of
                  pre-launch marketing strategy.
                </p>
              </div>

              {/* Marketing Features */}
              <div className="space-y-8">
                {/* Pre-launch Marketing */}
                <div className="flex flex-col sm:flex-row items-start gap-4">
                  <div className="bg-blue-900/50 p-3 rounded-full">
                    <Target className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-white text-xl font-semibold mb-2">
                      Pre-launch Marketing
                    </h3>
                    <p className="text-gray-400">
                      For a successful launch, it&apos;s important to start
                      early. After in-depth auditing & researching the target
                      users and competitors, we create the most effective
                      campaigns.
                    </p>
                  </div>
                </div>

                {/* Post-launch Marketing */}
                <div className="flex  flex-col sm:flex-row items-start gap-4">
                  <div className="bg-blue-900/50 p-3 rounded-full">
                    <Settings className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-white text-xl font-semibold mb-2">
                      Post-launch Marketing
                    </h3>
                    <p className="text-gray-400">
                      Not just before launch, but also later we help boost your
                      app visibility. With the finest & tested ASO practices, we
                      assure higher engagement to drive revenue growth
                      constantly.
                    </p>
                  </div>
                </div>
              </div>

              {/* CTA Button */}
              <button className="bg-white text-black px-6 py-4 rounded-lg font-medium flex items-center gap-2 hover:bg-gray-100 transition-colors">
                Prepare Your App For The &apos;Big&apos; Launch
                <ArrowRight className="w-5 h-5" />
              </button>
            </ScrollReveal>
          </div>
        </div>

        <div className="bg-slate-50">
          <div className="bg-slate-50 h-auto py-12 md:py-24 w-full px-5 md:max-w-5xl lg:max-w-[88rem] mx-auto flex flex-col gap-16">
            {/* Header Section */}
            <ScrollReveal
              animation="slideDown"
              duration={800}
              easing="smooth"
              className="text-center space-y-4"
            >
              <p className="text-blue-700 font-semibold text-lg">Grow</p>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                Data-driven Insights & Analytics
              </h2>
              <p className="text-xl text-gray-700 max-w-3xl mx-auto">
                Data-driven organizations are 23 times more likely to acquire
                customers, 6 times to retain customers & 19 times to be
                profitable.
              </p>
            </ScrollReveal>

            {/* Features Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
              {/* Left Side Features */}
              <ScrollReveal
                animation="slideRight"
                duration={800}
                easing="smooth"
                className="space-y-8"
              >
                <div className="bg-gray-200 p-6 rounded-lg text-center">
                  <p className="text-gray-800 font-medium">
                    See your data in new ways with help of dedicated analytic
                    branch -Retainlytics
                  </p>
                </div>
                <div className="bg-gray-200 p-6 rounded-lg text-center">
                  <p className="text-gray-800 font-medium">
                    Explore growth opportunities & accelerate scientific
                    decision making.
                  </p>
                </div>
              </ScrollReveal>

              {/* Center Dashboard Image */}
              <ScrollReveal
                animation="slideUp"
                duration={800}
                easing="smooth"
                className="w-full bg-gray-200 rounded-lg flex items-center h-[22rem] justify-center relative"
              >
                <Image
                  src="/studio/studioAIGenerated.svg"
                  layout="fill"
                  objectFit="cover"
                  alt="Ai Dashboard"
                />
              </ScrollReveal>

              {/* Right Side Features */}
              <ScrollReveal
                animation="slideLeft"
                duration={800}
                easing="smooth"
                className="space-y-8"
              >
                <div className="bg-gray-200 p-6 rounded-lg text-center">
                  <p className="text-gray-800 font-medium">
                    Get AI-Driven insights to help you navigate your next &
                    future-proof your business.
                  </p>
                </div>
                <div className="bg-gray-200 p-6 rounded-lg text-center">
                  <p className="text-gray-800 font-medium">
                    Export, share, & publish important data across various
                    platform.
                  </p>
                </div>
              </ScrollReveal>
            </div>

            {/* CTA Button */}
            <ScrollReveal
              animation="slideUp"
              duration={800}
              easing="smooth"
              className="flex justify-center"
            >
              <button className="bg-blue-700 text-white px-8 py-4 rounded-lg font-medium flex items-center gap-2 hover:bg-blue-800 transition-colors">
                Uncover Insights For Better Decisions
                <ArrowRight className="w-5 h-5" />
              </button>
            </ScrollReveal>
          </div>
        </div>
        <div className="bg-black">
          <div className="bg-black h-auto py-16 md:py-28 w-full px-5 md:max-w-5xl lg:max-w-6xl mx-auto flex flex-col lg:flex-row justify-between items-center gap-10">
            {/* Left Content */}
            <ScrollReveal
              animation="slideRight"
              duration={800}
              easing="smooth"
              className="flex flex-col gap-8 lg:w-1/2"
            >
              <div className="text-blue-400 text-lg font-medium">Funding</div>
              <h2 className="text-white text-4xl font-bold leading-tight">
                Assured Funding & Powerful Investor Pitch Deck To Help You Scale
              </h2>

              {/* Features List */}
              <div className="flex flex-col gap-6">
                <div className="space-y-8">
                  <div className="flex items-start gap-4">
                    <div className="bg-blue-900/50 p-3 rounded-full">
                      <PiggyBank className="w-9 h-9 text-white" />
                    </div>
                    <div>
                      <h3 className="text-white text-xl font-semibold mb-2">
                        Guaranteed Funding
                      </h3>
                      <p className="text-gray-400">
                        Business ideas crossing 5M+ downloads withstand the
                        opportunity to get funded by Code Brew. Yes, we&apos;re
                        ready to back you with just double the amount you
                        started with.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="bg-blue-900/50 p-3 rounded-full">
                      <Magnet className="w-9 h-9 text-white" />
                    </div>
                    <div>
                      <h3 className="text-white text-xl font-semibold mb-2">
                        Compelling Pitch
                      </h3>
                      <p className="text-gray-400">
                        Seeking more funds to escalate your growth? We craft a
                        persuasive story backed by industry insights &
                        exceptional design to raise more.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="bg-blue-900/50 p-3 rounded-full">
                      <DatabaseZap className="w-9 h-9 text-white" />
                    </div>
                    <div>
                      <h3 className="text-white text-xl font-semibold mb-2">
                        Proven Results
                      </h3>
                      <p className="text-gray-400">
                        Leveraging from our customized pitch decks, 65+
                        businesses have raised million-dollar funding for their
                        custom mobility solutions.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* CTA Button */}
              <button className="bg-white text-black px-6 py-3 rounded-lg w-fit flex items-center gap-2 mt-4">
                Leverage From Assured Funding
                <span className="text-xl">→</span>
              </button>
            </ScrollReveal>

            {/* Right Content - Image */}
            <ScrollReveal
              animation="slideLeft"
              duration={800}
              easing="smooth"
              className="w-3/4 lg:w-1/2 flex justify-center items-center h-[20rem] md:h-[30rem] lg:h-[44rem] relative"
            >
              <Image
                src="/studio/studioGrowth.svg"
                layout="fill"
                alt="growth"
              />
            </ScrollReveal>
          </div>
        </div>

        <div className="bg-slate-50 relative overflow-hidden">
          <Image
            layout="fill"
            objectFit="contain"
            alt="vector-graphic"
            className="pointer-events-none absolute !-top-[66rem] lg:!-top-[35rem] z-20 opacity-25 xl:opacity-15"
            src="/studio/vector.svg"
          />
          <div className="bg-slate-50 h-auto py-16 md:py-28 w-full px-5 md:max-w-5xl lg:max-w-6xl mx-auto flex flex-col gap-14 lg:gap-24 relative z-10">
            {/* Top Section */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Stats Grid */}
              <div className="grid grid-cols-2 gap-8">
                {stats.map((stat, index) => (
                  <ScrollReveal
                    key={index}
                    animation="scaleUp"
                    delay={200}
                    stagger={100}
                    index={index}
                    easing="spring"
                    duration={800}
                  >
                    <div className="flex flex-col items-center text-center">
                      <div className="w-16 h-16 bg-blue-100 rounded-full mb-4 flex items-center justify-center">
                        {stat.icon}
                      </div>
                      <h3 className="text-4xl font-bold mb-2">{stat.number}</h3>
                      <p className="text-gray-600 text-sm">{stat.text}</p>
                    </div>
                  </ScrollReveal>
                ))}
              </div>

              {/* Right side content */}
              <div className="flex flex-col gap-6">
                <ScrollReveal
                  animation="slideRight"
                  delay={300}
                  duration={900}
                  easing="gentle"
                >
                  <h2 className="text-3xl font-bold">
                    Choose Top 1% Of Industry Talent To Boost Your Growth &
                    Success Graph Exponentially
                  </h2>
                </ScrollReveal>

                <div className="flex flex-col gap-4">
                  {features.map((feature, index) => (
                    <ScrollReveal
                      key={index}
                      animation="slideRight"
                      delay={500}
                      stagger={100}
                      index={index}
                      easing="smooth"
                      duration={700}
                    >
                      <div className="flex items-center gap-2">
                        <ChevronsRight className="text-blue-600" />
                        <p>{feature}</p>
                      </div>
                    </ScrollReveal>
                  ))}
                </div>

                {/* Dark Card */}
                <ScrollReveal
                  animation="fadeIn"
                  delay={800}
                  duration={1200}
                  easing="bouncy"
                >
                  <div className="relative bg-slate-900 max-w-xl text-white p-8 rounded-lg overflow-hidden z-40">
                    <DiagonalLinePattern />
                    <div className="relative z-10">
                      <h3 className="text-2xl font-semibold leading-tight mb-3">
                        Looking For Custom Built Applications To Fuel Your
                        Business Growth?
                      </h3>
                      <p className="text-gray-300 text-lg mb-4 max-w-2xl">
                        Transform Your Business Digitally With Our Advanced Tech
                        Suite, Backed By Our Premium Application Development
                        Services
                      </p>
                      <button className="bg-white text-black px-8 py-3 rounded-lg flex items-center gap-2 text-lg font-medium hover:bg-gray-100 transition-colors">
                        Get Started
                        <div className="bg-black rounded-full p-1">
                          <ChevronRight className="w-5 h-5 text-white" />
                        </div>
                      </button>
                    </div>
                  </div>
                </ScrollReveal>
              </div>
            </div>

            {/* Bottom Section */}
            <ScrollReveal
              animation="slideUp"
              delay={400}
              duration={1000}
              easing="gentle"
            >
              <div className="bg-gradient-to-r from-[#224064] to-[#14242C] text-white p-16 rounded-lg flex flex-col md:flex-row justify-between items-center gap-8">
                <div>
                  <ScrollReveal
                    animation="fadeSlideRight"
                    delay={600}
                    duration={800}
                  >
                    <h2 className="text-4xl font-bold mb-8">
                      Let&apos;s Build Your Premium Mobile Apps & Technology
                      Solutions
                    </h2>
                  </ScrollReveal>
                  <ScrollReveal animation="fadeIn" delay={900} duration={800}>
                    <button className="border border-white px-8 py-3 font-bold text-2xl rounded-lg flex items-center gap-2 hover:bg-white hover:text-[#224064] transition-colors duration-300">
                      Let&apos;s Begin
                      <ChevronRight className="w-4 h-4" />
                    </button>
                  </ScrollReveal>
                </div>
                <ScrollReveal
                  animation="scaleUp"
                  delay={800}
                  duration={1100}
                  easing="spring"
                >
                  <div className="w-64 hidden lg:block h-64 rounded-full bg-white/10 backdrop-blur-sm"></div>
                </ScrollReveal>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </>
  );
}

export default page;
