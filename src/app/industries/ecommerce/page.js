import React from 'react';
import Image from 'next/image';
import FeaturesSection from '@/components/Industries/Ecommerce/Click'

export default function EcommerceLanding() {
  return (
    <>
    <div className="relative w-full sm:mb-20 bg-white">
      {/* Main Section with Background */}
      <div className="relative w-full bg-slate-950 pt-16 h-[40rem] sm:h-[50rem]  mt-10">
  {/* Background Image with Overlay */}
  <div className="absolute inset-0 z-0 hidden sm:block">
    <Image
      src="/IndusEcommerce/Image110.jpg"
      alt="Background"
      layout="fill"
      objectFit="cover"
      className="opacity-50"
    />
    
    {/* SVG Wave positioned at the bottom of the background */}
    <div className="absolute bottom-0 left-0 right-0 w-full">
      <svg width="100%" height="151" viewBox="0 0 1728 331" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
        <path d="M0 54.8013L423.5 0L901 54.8013L1339 131.523L1751 54.8013V331H0V54.8013Z" fill="white"/>
      </svg>
    </div>
  </div>

  {/* Content Container */}
  <div className="relative z-10 w-full max-w-6xl mx-auto px-4 text-center text-white mt-12 2xl:mt-20">
    {/* Main Heading */}
    <h1 className="text-4xl md:text-5xl font-bold mb-4">
      Kick-Start Your E-commerce Marketplace Now
    </h1>
    
    {/* Subtitle with Pipe Separators */}
    <div className="flex flex-col md:flex-row justify-center items-center text-xl mb-12">
      <span>Single Vendor E-commerce Store</span>
      <span className="hidden md:inline mx-2">|</span>
      <span>Multi-Vendor E-commerce Store</span>
      <span className="hidden md:inline mx-2">|</span>
      <span>E-commerce Marketplace Clone</span>
    </div>
    
    {/* CTA Button */}
    <button className="bg-[#F02963] hover:scale-105 text-white font-semibold py-4 px-12 rounded-md text-2xl transition duration-300 mb-16">
      Get Started
    </button>
  </div>
</div>

{/* Device Mockup Image - Positioned to overlap with background section */}
<div className="relative z-20 max-w-6xl mx-auto">
  <div className="absolute left-0 right-0 -top-52 sm:-top-80 w-full flex justify-center">
    <Image
      src="/IndusEcommerce/Image2.png"
      alt="E-commerce Website Mockup on Multiple Devices"
      width={1200}
      height={600}
      priority
      className=" w-[30rem] px-5 sm:w-[35rem] md:w-[45rem] lg:w-[55rem] 2xl:w-[1200px]"
    />
  </div>
</div>

{/* Removed duplicate standalone SVG as it's now integrated in the background */}

{/* Spacer for content below the mockup */}


</div>


{/* second section  */}


<div className='flex items-center justify-center'>
<div className="bg-black text-white max-w-7xl p-1 sm:p-5 rounded-lg flex  justify-center gap-1 sm:gap-8 md:gap-4 lg:gap-12 items-center mx-1 sm:mx-10 lg:mx-20 2xl:mx-40 my-10">
  {/* Easy To Use */}
  <div className="flex items-center gap-2">
    <Image
      src="/IndusEcommerce/Image3.png"
      alt="Calendar App"
      width={30}
      height={30}
      className="p-1 w-[20px] md:w-[30px]"
    />
    <span className="text-[6px] sm:text-[10px] md:text-base">Easy To Use</span>
  </div>

  {/* Fully Customized */}
  <div className="flex items-center gap-2">
  <Image
      src="/IndusEcommerce/Image4.png"
      alt="Calendar App"
      width={30}
      height={30}
       className="p-1 w-[20px] md:w-[30px]"
    />
     <span className="text-[6px] sm:text-[10px] md:text-base">Fully Customized</span>
  </div>

  {/* Feature Rich */}
  <div className="flex items-center gap-2">
  <Image
      src="/IndusEcommerce/Image5.png"
      alt="Calendar App"
      width={30}
      height={30}
       className="p-1 w-[20px] md:w-[30px]"
    />
     <span className="text-[6px] sm:text-[10px] md:text-base">Feature Rich</span>
  </div>

  {/* Highly Secured */}
  <div className="flex items-center gap-2">
  <Image
      src="/IndusEcommerce/Image6.png"
      alt="Calendar App"
      width={30}
      height={30}
      className="p-1 w-[20px] md:w-[30px]"
    />
     <span className="text-[6px] sm:text-[10px] md:text-base">Highly Secured</span>
  </div>

  {/* Extremely Affordable */}
  <div className="flex items-center gap-2">
  <Image
      src="/IndusEcommerce/Image7.png"
      alt="Calendar App"
      width={30}
      height={30}
      className="p-1 w-[20px] md:w-[30px]"
    />
     <span className="text-[6px] sm:text-[10px] md:text-base">Extremely Affordable</span>
  </div>
</div>
</div>
 

 {/* third section */}

    <div className="w-full max-w-6xl 2xl:max-w-[90rem] mx-auto   sm:py-16">
      {/* Main headline */}
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Take Your Business Online In No Time
        </h1>
        <h2 className="text-2xl md:text-3xl font-semibold">
          With Our Unique E-commerce Tech Suite
        </h2>
      </div>
      
      {/* Content section with image and text */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-8 mt-16">
        {/* Left content */}
        <div className="w-full md:w-1/2 space-y-4 ">
          <p className="text-xl font-medium text-gray-700">Dynamic</p>
          <h3 className="text-3xl md:text-4xl font-bold">E-commerce Website</h3>
          <p className="text-lg ">
            Get feature-loaded & user-friendly e-commerce website for selling multiple products across the globe
          </p>
          
          <div className="pt-6">
            <button className="bg-pink-500 hover:bg-pink-600 text-white font-medium py-3 px-8 rounded-md text-lg">
              Get Started
            </button>
          </div>
        </div>
        
        {/* Right image */}

        <Image
           src="/IndusEcommerce/Image8.png"
            alt="Calendar App"
            width={600}
            height={600}
           
            className="p-1 w-[350px] md:w-[400px] lg:w-[600px]"
          />

        </div>

{/* Fourth section  */}


<div className="w-full bg-white py-16 mt-2 md:mt-20">
      <div className="max-w-[90rem]  flex flex-col sm:flex-row items-center gap-8">
        {/* Left Side - Mobile App Mockup */}
        <Image
           src="/IndusEcommerce/Image9.png"
            alt="Calendar App"
            width={600}
            height={600}
           
            className=" w-[350px] md:w-[400px] lg:w-[600px]"
          />
        
        {/* Right Side - Text Content */}
        <div className="w-full md:w-1/2 pt-12 md:pt-0">
          <h2 className="text-2xl md:text-3xl font-normal">Intuitive</h2>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Mobile Apps</h1>
          <p className="text-lg mb-6">
            Launch complete white labeled & advance e-commerce mobile apps- iOS & Android, to boost your e-commerce business profits
          </p>
          <button className="bg-pink-500 hover:bg-pink-600 text-white font-medium py-3 px-12 rounded-md text-xl">
            Get Started
          </button>
        </div>
      </div>
    </div>

{/* Fifth Section */}


<div className="flex flex-col sm:flex-row items-center justify-between gap-8 mt-2 md:mt-16">
        {/* Left content */}
        <div className="w-full md:w-1/2 space-y-4">
          <p className="text-xl font-medium text-gray-700">Advance</p>
          <h3 className="text-3xl md:text-4xl font-bold">Vendor Panel</h3>
          <p className="text-lg">
          Empower your vendors with an easy-to-operate merchant panel, allowing them to manage customer interactions, track orders, view transaction details, and more. Give them the tools they need to thrive in a digital-first world.
          </p>
          
          <div className="pt-6">
            <button className="bg-pink-500 hover:bg-pink-600 text-white font-medium py-3 px-8 rounded-md text-lg">
              Get Started
            </button>
          </div>
        </div>
        
        {/* Right image */}

        <Image
           src="/IndusEcommerce/Image10.png"
            alt="Calendar App"
            width={600}
            height={600}
           
            className="p-1 w-[350px] md:w-[400px] lg:w-[600px]"
          />
        </div>


{/* Sixth section  */}


<div className="w-full bg-white py-16 mt-2 md:mt-20">
      <div className="max-w-[90rem] mx-auto  flex flex-col md:flex-row items-center gap-8">
        {/* Left Side - Mobile App Mockup */}
        <Image
           src="/IndusEcommerce/Image11.png"
            alt="Calendar App"
            width={600}
            height={600}
           
            className="p-1 w-[350px] md:w-[350px] lg:w-[600px]"
          />
        
        {/* Right Side - Text Content */}
        <div className="w-full md:w-1/2 pt-12 md:pt-0">
          <h2 className="text-2xl md:text-3xl font-normal">Powerfull</h2>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Admin Dashboard</h1>
          <p className="text-lg mb-6">
          Turn your business coronavirus-proof with a robust admin panel. Monitor and control every aspect of your business from a bird’s-eye view, ensuring smooth operations even in challenging times.
          </p>
          <button className="bg-pink-500 hover:bg-pink-600 text-white font-medium py-3 px-12 rounded-md text-xl">
            Get Started
          </button>
        </div>
      </div>
    </div>


      </div>

{/* Seventh Section */}

<div className="w-full max-w-[85rem] mx-auto my-8 px-4 ">
      <div className="bg-blue-50 rounded-lg p-8 relative overflow-hidden flex flex-col md:flex-row">
        <div className="relative z-10 max-w-full">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
            Setup Your E-commerce Marketplace
          </h2>
          <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
            In A Few Clicks
          </h3>
          <button className="bg-pink-500 hover:bg-pink-600 text-white font-medium py-3 px-6 rounded-md transition-colors duration-200">
            Get Started
          </button>
        </div>
        
        {/* Blue circle decoration */}
        <div className="absolute right-0 top-0 h-full w-1/3 md:w-1/2 flex items-center justify-center">
          <div className="absolute right-0 top-0 bottom-0 w-full h-full flex items-center justify-center ">
            <div className="absolute right-0  bg-blue-200/50 rounded-[60rem] w-[25rem] h-64 md:w-[30rem] md:h-96 -mr-20 flex items-center justify-center">
            <Image
           src="/IndusEcommerce/Image11.png"
            alt="Calendar App"
            width={300}
            height={300}
           
            className="p-1"
          />
        
            </div>
            
          </div>
        </div>
      </div>
    </div>


{/* Eigth section  */}


    <div className="w-full max-w-7xl mx-auto my-20  mt-40 mb-40">
      <div className="flex flex-col lg:flex-row justify-between">
        {/* Left Side - Features */}
        <div className="w-full lg:w-full pr-0 lg:pr-8">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">Integration Partners</h2>
          
          <p className="text-lg text-gray-800 mb-8">
            100+ Payment Gateways | Easy Global Payment | 60+ Languages | 120+ Integrations
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            {/* Feature 1 */}
            <div className="flex items-start">
              <div className="flex-shrink-0 w-14 h-14 bg-pink-500 rounded-full flex items-center justify-center text-white font-bold text-2xl mr-4">
                1
              </div>
              <div>
                <h3 className="text-xl font-bold">Fully Hosted & Unlimited Bandwidth</h3>
              </div>
            </div>
            
            {/* Feature 2 */}
            <div className="flex items-start">
              <div className="flex-shrink-0 w-14 h-14 bg-pink-500 rounded-full flex items-center justify-center text-white font-bold text-2xl mr-4">
                2
              </div>
              <div>
                <h3 className="text-xl font-bold">Highly Secured with 256-bit SSL certificate</h3>
              </div>
            </div>
            
            {/* Feature 3 */}
            <div className="flex items-start">
              <div className="flex-shrink-0 w-14 h-14 bg-pink-500 rounded-full flex items-center justify-center text-white font-bold text-2xl mr-4">
                3
              </div>
              <div>
                <h3 className="text-xl font-bold">Sell Globally with Multiple Currencies</h3>
              </div>
            </div>
            
            {/* Feature 4 */}
            <div className="flex items-start">
              <div className="flex-shrink-0 w-14 h-14 bg-pink-500 rounded-full flex items-center justify-center text-white font-bold text-2xl mr-4">
                4
              </div>
              <div>
                <h3 className="text-xl font-bold">Enhanced Customization Options</h3>
              </div>
            </div>
            
            {/* Feature 5 */}
            <div className="flex items-start">
              <div className="flex-shrink-0 w-14 h-14 bg-pink-500 rounded-full flex items-center justify-center text-white font-bold text-2xl mr-4">
                5
              </div>
              <div>
                <h3 className="text-xl font-bold">Easy Platform Migration Process</h3>
              </div>
            </div>
            
            {/* Feature 6 */}
            <div className="flex items-start">
              <div className="flex-shrink-0 w-14 h-14 bg-pink-500 rounded-full flex items-center justify-center text-white font-bold text-2xl mr-4">
                6
              </div>
              <div>
                <h3 className="text-xl font-bold">Robust 24×7 Phone Support</h3>
              </div>
            </div>
          </div>
        </div>
        
        {/* Right Side - Company Logos Image */}
        <div className="w-full lg:w-[50%] mt-8 lg:mt-0">
          {/* Since you mentioned the company logos are a single image, I'm including it as one image */}
          <div className="w-full h-full flex items-end justify-center">
            <Image
              src="/IndusEcommerce/Image12.png"
             
              width={500}
              height={500}
              alt="Integration Partners Logos including PayPal, Stripe, Twilio, Razorpay and more" 
              className=""
            />
          </div>
        </div>
      </div>
    </div>





{/* Nineth Section */}

<div className="w-full max-w-[85rem] mx-auto my-8 px-4 mb-40">
      <div className="bg-blue-50 rounded-lg p-8 relative overflow-hidden flex flex-col md:flex-row">
        <div className="relative z-10 max-w-full">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
            Setup Your E-commerce Marketplace
          </h2>
          <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
            In A Few Clicks
          </h3>
          <button className="bg-pink-500 hover:bg-pink-600 text-white font-medium py-3 px-6 rounded-md transition-colors duration-200">
            Get Started
          </button>
        </div>
        
        {/* Blue circle decoration */}
        <div className="absolute right-0 top-0 h-full w-1/3 md:w-1/2 flex items-center justify-center">
          <div className="absolute right-0 top-0 bottom-0 w-full h-full flex items-center justify-center ">
            <div className="absolute right-0  bg-blue-200/50 rounded-[60rem] w-[25rem] h-64 md:w-[30rem] md:h-96 -mr-20 flex items-center justify-center">
            <Image
           src="/IndusEcommerce/Image11.png"
            alt="Calendar App"
            width={300}
            height={300}
           
            className="p-1"
          />
        
            </div>
            
          </div>
        </div>
      </div>
    </div>


{/* 10th section */}

<FeaturesSection/>


{/* 11th section */}

<div className="w-full bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
  <div className="max-w-6xl mx-auto ">
    {/* Main Heading */}
    <h1 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 mb-6">
      Turn Shoppers Into Buyers With Your
      <br />
      <span className="">Own Branded E-commerce Apps & Websites</span>
    </h1>

    {/* Get Started Button */}
    <button className="bg-pink-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-lg transition-colors duration-200 mb-12">
      Get Started With Us
    </button>

   
  </div>
</div>

{/* 12th section */}

<div className="w-full bg-blue-100 py-12 px-4 flex flex-col items-center justify-center text-center">
      {/* Icon */}
      <div className="mb-4">
      <Image
      src="/IndusEcommerce/Image14.png"
      alt="Calendar App"
      width={40}
      height={40}
       className="p-1 w-[20px] md:w-[40px]"
    />
      </div>

      {/* Text content */}
      <h3 className="text-base font-medium mb-2">Join, Sell & Earn</h3>
      <h2 className="text-xl md:text-2xl font-bold mb-1">Explore Our Partnership Program to Sell</h2>
      <p className="text-xl md:text-2xl font-bold mb-6">Our Fully Customized Tech Solution To Your Clients.</p>

      {/* Button */}
      <button className="bg-blue-300 hover:bg-blue-400 text-blue-900 font-semibold py-2 px-6 rounded transition-colors duration-300">
        Partner With Us
      </button>
    </div>





    </>
  );
}
