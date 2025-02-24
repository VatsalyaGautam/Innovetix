import React from "react";
import {
  CircleArrowRight,
  ArrowRight,
  Target,
  Settings,
  PiggyBank,
  Magnet,
  DatabaseZap,
} from "lucide-react";
import Image from "next/image";
import CardSec2 from "@/components/Product_Studio/CardSec2";
import { studioCards, steps } from "@/lib/config";
import TechSuite from "@/components/Product_Studio/TechSuite";
import { Users, Building2, DollarSign, ChevronRight } from 'lucide-react';


const BackgroundVector = () => (
  <svg
    className="absolute top-0 left-0 w-full h-full z-0 pointer-events-none"
    viewBox="0 0 1000 600"
    xmlns="http://www.w3.org/2000/svg"
  >
    <defs>
      <pattern id="dotPattern" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
        <circle cx="2" cy="2" r="1" fill="#CBD5E1" />
      </pattern>
    </defs>
    
    {/* Diagonal line with dots */}
    <line
      x1="100"
      y1="0"
      x2="900"
      y2="600"
      stroke="url(#dotPattern)"
      strokeWidth="2"
      strokeDasharray="5,5"
      className="opacity-20"
    />
    
    {/* Small circles along the line */}
    <circle cx="200" cy="120" r="4" fill="#CBD5E1" className="opacity-30" />
    <circle cx="400" cy="240" r="4" fill="#CBD5E1" className="opacity-30" />
    <circle cx="600" cy="360" r="4" fill="#CBD5E1" className="opacity-30" />
    <circle cx="800" cy="480" r="4" fill="#CBD5E1" className="opacity-30" />
  </svg>
);


function page() {
  const Step = ({ number, title, description }) => (
    <div className="bg-[#C59E12] px-6 pt-6 pb-12 rounded-lg flex flex-col relative">
      <p className="absolute text-white font-extrabold text-8xl opacity-10 top-1 right-1">
        {number}
      </p>
      <div className="text-white text-2xl text-center font-bold mb-12">
        Step {number}
      </div>
      <div className="text-white text-2xl text-center font-bold mb-4">
        {title}
      </div>
      <div className="text-white text-xl text-center font-semibold leading-tight">
        {description}
      </div>
    </div>
  );
  const stats = [

      {
        number: "10+",
        text: "Years Of Industry Experience",
        icon: <Users className="w-8 h-8 text-blue-600" />
      },
      {
        number: "2300+",
        text: "Technology Suites Catered",
        icon: <Settings className="w-8 h-8 text-blue-600" />
      },
      {
        number: "550+",
        text: "Custom Mobility Solutions Served",
        icon: <Building2 className="w-8 h-8 text-blue-600" />
      },
      {
        number: "50+",
        text: "Multi-Million Dollar Businesses",
        icon: <DollarSign className="w-8 h-8 text-blue-600" />
      }
  ];

  const features = [
    "In-Depth Industry Expertise & Knowledge",
    "Top Vetted & Highly Skilled Developers",
    "Tested & Exceptional Methodologies",
  ];
  return (
    <>
      <div className="bg-black  bg-[url('/studio/studioMain.svg')] bg-no-repeat bg-cover">
        <div className=" h-[45rem] w-full px-5 md:max-w-5xl lg:max-w-[88rem] mx-auto flex py-16">
          <div className="w-1/2 flex flex-col h-full my-auto justify-center items-center">
            <div className="flex flex-col gap-20">
              <div className="flex flex-col gap-6">
                <h1 className="text-white text-5xl font-bold font-inter leading-tight ">
                  Choose The
                  <br /> Only <span className="text-[#F6BA0D]">Premium</span>
                  &nbsp;App <br /> Development Company
                </h1>
                <p className="text-white text-3xl">
                  To Build Exceptional Technology Solution <br /> For Your
                  Unique Business Ideas
                </p>
              </div>
              <button className="border-2 text-left p-4 text-white text-2xl justify-around w-auto max-w-80 border-white flex">
                Book Free Consulation{" "}
                <CircleArrowRight size={32} fill="white" stroke="black" />
              </button>
            </div>
          </div>
          <div className="w-1/2 h-full flex justify-center relative items-center">
            <Image
              src="/studio/studioRightpng.png"
              layout="fill"
              alt="studioHero"
              objectFit="contain"
            />
          </div>
        </div>
      </div>
      <div className="bg-slate-50">
        <div className="bg-slate-50  h-auto py-28 w-full px-5 md:max-w-5xl lg:max-w-6xl mx-auto flex flex-col gap-24">
          <div className="flex flex-col gap-4">
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
            <p className="font-inter font-normal font-xl text-center px-28">
              At Innovetix, we focus on serving a select group of exceptional
              businesses. Our exclusive screening process ensures that we equip
              your business with cutting-edge enterprise capabilities, driving
              unparalleled success.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 md:gap-y-12">
            {studioCards.map((ele, idx) => {
              return (
                <div className="p-4" key={idx}>
                  {" "}
                  <CardSec2 image={ele.image} title={ele.title} />{" "}
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <div className="bg-black  bg-[url('/studio/studioMain.svg')] bg-no-repeat bg-cover">
        <div className=" h-auto relative w-full px-5 md:max-w-5xl lg:max-w-[88rem] mx-auto flex flex-col py-28">
          <Image
            src="/studio/stars.svg"
            alt="stars"
            width={105}
            height={96}
            className="absolute top-32 right-36"
          />
          <Image
            src="/studio/stars.svg"
            alt="stars"
            width={105}
            height={96}
            className="absolute top-16 left-48"
          />
          {/* Header section */}
          <div className="mb-4">
            <h1 className="text-white text-4xl font-bold text-center mb-3">
              Innovetix&apos;s Application Development Framework
            </h1>
            <p className="text-gray-300 text-center text-xl">
              A proven workflow to serve you with fully customized solutions,
              built to give you the best shot at success.
            </p>
          </div>

          {/* Steps grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8 my-28">
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
          <div className="text-center">
            <h2 className="text-gray-500 text-2xl font-bold mb-4">
              Looking For Custom Mobile App Development To Fuel Your Business
              Growth?
            </h2>
            <p className="text-gray-500 text-xl mb-12">
              Transform Your Business Digitally With Our Advanced Tech Suite,
              Backed By Our Premium Application Development Services
            </p>
            <button className="bg-[#C59E12] hover:bg-yellow-200 transition-all text-white hover:text-black font-bold px-8 py-3 rounded-lg flex items-center gap-2 mx-auto text-lg">
              Let&apos;s Discuss
              <ArrowRight className="ml-2" size={24} />
            </button>
          </div>
        </div>
      </div>

      <div className="bg-slate-50">
        <div className="bg-slate-50 h-[65rem] py-28 w-full px-5 md:max-w-5xl lg:max-w-6xl mx-auto flex flex-col items-center">
          {/* Header Section */}
          <div className="text-center mb-20">
            <h1 className="text-4xl font-bold mb-4">
              <span className="text-[#B8982C]">Not Just Technology</span>, We
              Focus On Everything
              <br />
              That Makes A Difference Your Brand
            </h1>
            <p className="text-xl text-gray-800 max-w-4xl mx-auto">
              Make Extraordinary Happen For Your Businesses & Customers,
              <br />
              With CB Studio&apos;s Exceptional Android & iOS App Development
            </p>
          </div>

          {/* Main Content Section */}
          <div className="w-full flex flex-col lg:flex-row justify-between items-center ">
            {/* Left Content */}
            <div className="lg:w-2/6">
              <h3 className="text-[#B8982C] text-2xl mb-4">Validation</h3>
              <h2 className="text-4xl font-medium mb-6">
                Business Planning With
                <br />
                C-Level Consultation
              </h2>
              <p className="text-lg text-gray-700 mb-8">
                Give your business a rock-solid foundation with a polished plan,
                prepared by our C-level experts.
              </p>
              <button className="bg-[#B8982C] text-white  font-bold px-8 py-4 rounded flex items-center gap-2">
                Get Your Business Plan Ready
                <ArrowRight size={20} />
              </button>
            </div>

            {/* Right Content - Placeholder for images */}
            <div className="lg:w-4/6 h-full flex justify-center p-4 relative">
              <Image
                src="/studio/studioTablet.svg"
                layout="fill"
                alt="studioHero"
                objectFit="contain"
              />
            </div>
          </div>

          {/* Bottom Features */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mt-20">
            <div className="text-center">
              <div className="w-16 h-16 bg-[#B8982C] rounded-full mx-auto mb-6 relative">
                {" "}
                <Image
                  src="/studio/manWithLaptop.svg"
                  alt="man with laptop"
                  className="absolute top-5 right-5"
                  width={50}
                  height={50}
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
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-[#B8982C] rounded-full mx-auto mb-6 relative">
                {" "}
                <Image
                  src="/studio/bulb.svg"
                  alt="blub"
                  className="absolute top-4 right-6"
                  width={45}
                  height={70}
                />
              </div>
              <h3 className="text-xl font-medium mb-4">
                Get Insights That Make Difference
              </h3>
              <p className="text-gray-700">
                Will you meet your revenue goals? How can you scale in the next
                few years? Let experts answer such questions with insightful
                data.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-[#B8982C] rounded-full mx-auto mb-6 relative">
                <Image
                  src="/studio/electron.svg"
                  alt="electron"
                  className="absolute top-4 right-4"
                  width={72}
                  height={83}
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
            </div>
          </div>
        </div>
      </div>
      <div className="bg-black  bg-[url('/studio/studioMain.svg')] bg-no-repeat bg-cover">
        <div className="h-[45rem]  w-full px-5 md:max-w-5xl lg:max-w-6xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-16 ">
          <div className="lg:w-1/2 h-full relative ">
            <Image
              src="/studio/studioBig.png"
              layout="fill"
              alt="studioHero"
              objectFit="contain"
            />
          </div>

          {/* Right side content */}
          <div className="lg:w-1/2 space-y-8 py-28">
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
                    CB Studio keeps your end-users the point upon which product
                    strategy pivots, to delivery intuitive and interactive
                    experiences.
                  </p>
                </div>
              </div>
            </div>

            {/* CTA Button */}
            <div className="w-full px-3">
              <button className="bg-white text-black w-full px-6 py-4 rounded-lg font-medium flex items-center gap-2 hover:bg-gray-100 transition-colors">
                Create Exceptional Experience For Your Brand
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
      <TechSuite />
      <div className="bg-black bg-[url('/studio/studioMain.svg')] bg-no-repeat bg-cover">
        <div className="h-auto py-28 w-full px-5 md:max-w-5xl lg:max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-16">
          <div className="lg:w-1/2 h-[40rem] relative">
            <Image
              src="/studio/studioComingSoon.svg"
              layout="fill"
              objectFit="contain"
              alt="Coming Soon"
            />
          </div>
          <div className="lg:w-1/2 space-y-8">
            {/* Header */}
            <div className="space-y-4">
              <p className="text-blue-400 text-lg font-medium">Launch</p>
              <h2 className="text-3xl md:text-4xl font-bold text-white">
                Need Some Excitement Before Your App Hits The Store?
              </h2>
              <p className="text-gray-300 text-lg">
                Benefit from our pre & post launch marketing services, where we
                strategize to build curiosity for your solution.
              </p>
              <p className="text-gray-300 text-lg">
                Reportedly, 23% of mobile businesses fail due to lack of
                pre-launch marketing strategy.
              </p>
            </div>

            {/* Marketing Features */}
            <div className="space-y-8">
              {/* Pre-launch Marketing */}
              <div className="flex items-start gap-4">
                <div className="bg-blue-900/50 p-3 rounded-full">
                  <Target className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-white text-xl font-semibold mb-2">
                    Pre-launch Marketing
                  </h3>
                  <p className="text-gray-400">
                    For a successful launch, it&apos;s important to start early.
                    After in-depth auditing & researching the target users and
                    competitors, we create the most effective campaigns.
                  </p>
                </div>
              </div>

              {/* Post-launch Marketing */}
              <div className="flex items-start gap-4">
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
                    assure higher engagement to drive revenue growth constantly.
                  </p>
                </div>
              </div>
            </div>

            {/* CTA Button */}
            <button className="bg-white text-black px-6 py-4 rounded-lg font-medium flex items-center gap-2 hover:bg-gray-100 transition-colors">
              Prepare Your App For The &apos;Big&apos; Launch
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>

      <div className="bg-slate-50">
        <div className="bg-slate-50 h-auto py-28 w-full px-5 md:max-w-5xl lg:max-w-[88rem] mx-auto flex flex-col gap-16">
          {/* Header Section */}
          <div className="text-center space-y-4">
            <p className="text-blue-700 font-semibold text-lg">Grow</p>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              Data-driven Insights & Analytics
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Data-driven organizations are 23 times more likely to acquire
              customers, 6 times to retain customers & 19 times to be
              profitable.
            </p>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
            {/* Left Side Features */}
            <div className="space-y-8">
              <div className="bg-gray-200 p-6 rounded-lg text-center">
                <p className="text-gray-800 font-medium">
                  See your data in new ways with help of dedicated analytic
                  branch -Retainlytics
                </p>
              </div>
              <div className="bg-gray-200 p-6 rounded-lg text-center">
                <p className="text-gray-800 font-medium">
                  Explore growth opportunities & accelerate scientific decision
                  making.
                </p>
              </div>
            </div>

            {/* Center Dashboard Image */}
            <div className="w-full bg-gray-200 rounded-lg flex items-center h-[22rem] justify-center relative">
              <Image
                src="/studio/studioAIGenerated.svg"
                layout="fill"
                objectFit="cover"
                alt="Ai Dashboard"
              />
            </div>

            {/* Right Side Features */}
            <div className="space-y-8">
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
            </div>
          </div>

          {/* CTA Button */}
          <div className="flex justify-center">
            <button className="bg-blue-700 text-white px-8 py-4 rounded-lg font-medium flex items-center gap-2 hover:bg-blue-800 transition-colors">
              Uncover Insights For Better Decisions
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
      <div className="bg-black">
        <div className="bg-black h-auto py-28 w-full px-5 md:max-w-5xl lg:max-w-6xl mx-auto flex flex-col lg:flex-row justify-between items-center gap-10">
          {/* Left Content */}
          <div className="flex flex-col gap-8 lg:w-1/2">
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
                      ready to back you with just double the amount you started
                      with.
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
                      persuasive story backed by industry insights & exceptional
                      design to raise more.
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
                      Leveraging from our customized pitch decks, 65+ businesses
                      have raised million-dollar funding for their custom
                      mobility solutions.
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
          </div>

          {/* Right Content - Image */}
          <div className="lg:w-1/2 flex justify-center items-center h-[44rem] relative">
            <Image src="/studio/studioGrowth.svg" layout="fill" alt="growth" />
          </div>
        </div>
      </div>

      <div className="bg-slate-50 relative overflow-hidden">
      <BackgroundVector />
      <div className="bg-slate-50 h-auto py-28 w-full px-5 md:max-w-5xl lg:max-w-6xl mx-auto flex flex-col gap-24 relative z-10">
        {/* Top Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Stats Grid */}
          <div className="grid grid-cols-2 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="flex flex-col items-center text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full mb-4 flex items-center justify-center">
                  {stat.icon}
                </div>
                <h3 className="text-4xl font-bold mb-2">{stat.number}</h3>
                <p className="text-gray-600 text-sm">{stat.text}</p>
              </div>
            ))}
          </div>

          {/* Right side content */}
          <div className="flex flex-col gap-6">
            <h2 className="text-3xl font-bold">
              Choose Top 1% Of Industry Talent To Boost Your Growth & Success Graph Exponentially
            </h2>
            <div className="flex flex-col gap-4">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center gap-2">
                  <ChevronRight className="text-blue-600" />
                  <p>{feature}</p>
                </div>
              ))}
            </div>
            
            {/* Dark Card */}
            <div className="bg-slate-900 text-white p-8 rounded-lg">
              <h3 className="text-2xl font-semibold mb-4">
                Looking For Custom Built Applications To Fuel Your Business Growth?
              </h3>
              <p className="text-gray-300 mb-6">
                Transform Your Business Digitally With Our Advanced Tech Suite, Backed By Our Premium Application Development Services
              </p>
              <button className="bg-white text-black px-6 py-2 rounded-lg flex items-center gap-2">
                Get Started
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="bg-slate-900 text-white p-16 rounded-lg flex flex-col md:flex-row justify-between items-center gap-8">
          <div>
            <h2 className="text-4xl font-bold mb-8">
              Let's Build Your Premium Mobile Apps & Technology Solutions
            </h2>
            <button className="border border-white px-8 py-3 rounded-lg flex items-center gap-2">
              Let's Begin
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
          <div className="w-64 h-64">
            {/* Image placeholder */}
          </div>
        </div>
        </div>
        </div>
        
    </>
  );
}

export default page;
