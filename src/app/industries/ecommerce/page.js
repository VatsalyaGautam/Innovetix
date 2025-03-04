import React from 'react';
import Image from 'next/image';
import FeaturesSection from '@/components/Industries/Ecommerce/Click'
import ScrollReveal from '@/components/ScrollReveal';

export default function EcommerceLanding() {
  return (
    <>
    <div className="relative w-full sm:mb-20 bg-white">
      {/* Main Section with Background */}
      <div className="relative w-full bg-slate-950 h-[40rem] sm:h-[50rem] bg-[url('/IndusEcommerce/Image110.jpg')] bg-no-repeat bg-cover mt-10">

      <div className='w-full h-full bg-black/65 pointer-events-none'></div>
  {/* Background Image with Overlay */}
  <div className="absolute inset-0 z-0 ">
   

    {/* Content Container */}
  <ScrollReveal animation='slideDown' duration={400} className="relative w-full max-w-6xl mx-auto px-4 z-30 text-center text-white top-28 sm:top-40">
    {/* Main Heading */}
    <h1 className="text-4xl md:text-5xl font-bold mb-4">
      Kick-Start Your E-commerce Marketplace Now
    </h1>
    
    {/* Subtitle with Pipe Separators */}
    <div className="flex flex-row justify-center items-center text-base sm:text-xl mb-12">
      <span>Single Vendor E-commerce Store</span>
      <span className="inline mx-2">|</span>
      <span>Multi-Vendor E-commerce Store</span>
      <span className="inline mx-2">|</span>
      <span>E-commerce Marketplace Clone</span>
    </div>
    
    {/* CTA Button */}
    <button className="bg-[#F02963] hover:scale-105 text-white font-semibold py-2 sm:py-4 px-8 sm:px-12 rounded-md text-2xl transition duration-300 sm:mb-16">
      Get Started
    </button>
  </ScrollReveal>
    
    {/* SVG Wave positioned at the bottom of the background */}
    <div className="absolute bottom-0 left-0 right-0 w-full hidden sm:block">
      <svg width="100%" height="151" viewBox="0 0 1728 331" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
        <path d="M0 54.8013L423.5 0L901 54.8013L1339 131.523L1751 54.8013V331H0V54.8013Z" fill="white"/>
      </svg>
    </div>
  </div>
 
</div>

{/* Device Mockup Image - Positioned to overlap with background section */}
<ScrollReveal animation='scaleUp' duration={400}  className="relative z-20 max-w-6xl mx-auto"

disableBelow='sm'>
  <div className="absolute left-0 right-0 -top-60 sm:-top-[20rem] lg:-top-[20rem] w-full flex justify-center">
    <Image
      src="/IndusEcommerce/Image2.png"
      alt="E-commerce Website Mockup on Multiple Devices"
      width={1200}
      height={600}
      priority
      className=" w-[30rem] px-5 sm:w-[35rem] md:w-[45rem] lg:w-[55rem] 2xl:w-[1200px]"
    />
  </div>
</ScrollReveal>




</div>


{/* second section  */}


 <ScrollReveal animation="fadeIn" duration={800} delay={200}>
      <div className='flex items-center justify-center 2xl:mt-60'>
        <div className="bg-black text-white max-w-7xl p-1 sm:p-5 rounded-lg flex justify-center gap-1 sm:gap-8 md:gap-4 lg:gap-12 items-center mx-1 sm:mx-10 lg:mx-20 2xl:mx-40 my-10">
          {/* Easy To Use */}
          <ScrollReveal animation="slightRight" duration={600} delay={200} index={0} stagger={100}>
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
          </ScrollReveal>

          {/* Fully Customized */}
          <ScrollReveal animation="slightRight" duration={600} delay={200} index={1} stagger={100}>
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
          </ScrollReveal>

          {/* Feature Rich */}
          <ScrollReveal animation="slightRight" duration={600} delay={200} index={2} stagger={100}>
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
          </ScrollReveal>

          {/* Highly Secured */}
          <ScrollReveal animation="slightRight" duration={600} delay={200} index={3} stagger={100}>
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
          </ScrollReveal>

          {/* Extremely Affordable */}
          <ScrollReveal animation="slightRight" duration={600} delay={200} index={4} stagger={100}>
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
          </ScrollReveal>
        </div>
      </div>
    </ScrollReveal>
 

 {/* third section */}

    <div className="w-full max-w-6xl 2xl:max-w-[90rem] mx-auto px-5 xl:px-0  sm:py-16">
      {/* Main headline */}
      <ScrollReveal animation='slideDown' duration={800} className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Take Your Business Online In No Time
        </h1>
        <h2 className="text-2xl md:text-3xl font-semibold">
          With Our Unique E-commerce Tech Suite
        </h2>
      </ScrollReveal>
      
      {/* Content section with image and text */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-8 mt-16 sm:px-10">
        {/* Left content */}
        <ScrollReveal animation='slightRight' duration={800} className="w-full md:w-1/2 space-y-4 ">
          <p className="text-xl font-medium text-gray-700">Dynamic</p>
          <h3 className="text-3xl md:text-4xl font-bold">E-commerce Website</h3>
          <p className="text-lg">
            Get feature-loaded & user-friendly e-commerce website for selling multiple products across the globe
          </p>
          
          <div className="pt-6">
            <button className="bg-pink-500 hover:bg-pink-600 text-white font-medium py-3 px-8 rounded-md text-lg">
              Get Started
            </button>
          </div>
        </ScrollReveal>
        
        {/* Right image */}
<ScrollReveal animation='slightLeft' duration={800}>
        <Image
           src="/IndusEcommerce/Image8.png"
            alt="Calendar App"
            width={600}
            height={600}
           
            className="p-1 w-[350px] md:w-[400px] lg:w-[600px]"
          />
</ScrollReveal>
        </div>

{/* Fourth section  */}


<div className="w-full bg-white  mt-2 md:mt-20 sm:px-10">
      <div className="max-w-[90rem]  flex flex-col sm:flex-row items-center gap-8">
        {/* Left Side - Mobile App Mockup */}
        <ScrollReveal animation='slightRight' duration={800}>
        <Image
           src="/IndusEcommerce/Image9.png"
            alt="Calendar App"
            width={600}
            height={600}
           
            className=" w-[350px] md:w-[400px] lg:w-[600px]"
          />
        
        </ScrollReveal>
       
        {/* Right Side - Text Content */}
        <ScrollReveal animation='slightLeft' duration={800} className="w-full md:w-1/2 pt-12 md:pt-0">
          <h2 className="text-2xl md:text-3xl font-normal">Intuitive</h2>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Mobile Apps</h1>
          <p className="text-lg mb-6">
            Launch complete white labeled & advance e-commerce mobile apps- iOS & Android, to boost your e-commerce business profits
          </p>
          <button className="bg-pink-500 hover:bg-pink-600 text-white font-medium py-3 px-12 rounded-md text-xl">
            Get Started
          </button>
        </ScrollReveal>
      </div>
    </div>

{/* Fifth Section */}


<div className="flex flex-col sm:flex-row items-center justify-between gap-8 mt-2 md:mt-5 sm:px-10">
        {/* Left content */}
        <ScrollReveal animation='slightRight' duration={800} className="w-full md:w-1/2 space-y-4">
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
        </ScrollReveal>
        
        {/* Right image */}
<ScrollReveal animation='slightLeft' duration={800}>
        <Image
           src="/IndusEcommerce/Image10.png"
            alt="Calendar App"
            width={600}
            height={600}
           
            className="p-1 w-[350px] md:w-[400px] lg:w-[600px]"
          />
          </ScrollReveal>
        </div>


{/* Sixth section  */}


<div className="w-full bg-white  mt-2 md:mt-20 sm:px-10">
      <div className="max-w-[90rem] mx-auto  flex flex-col md:flex-row items-center gap-8">
        {/* Left Side - Mobile App Mockup */}
       <ScrollReveal animation='slightRight' duration={800}>

       <Image
           src="/IndusEcommerce/Image11.png"
            alt="Calendar App"
            width={600}
            height={600}
           
            className="p-1 w-[350px] md:w-[350px] lg:w-[600px]"
          />
        

       </ScrollReveal>

        {/* Right Side - Text Content */}
        <ScrollReveal animation='slightLeft' duration={800} className="w-full md:w-1/2 pt-12 md:pt-0">
          <h2 className="text-2xl md:text-3xl font-normal">Powerfull</h2>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Admin Dashboard</h1>
          <p className="text-lg mb-6">
          Turn your business coronavirus-proof with a robust admin panel. Monitor and control every aspect of your business from a bird’s-eye view, ensuring smooth operations even in challenging times.
          </p>
          <button className="bg-pink-500 hover:bg-pink-600 text-white font-medium py-3 px-12 rounded-md text-xl">
            Get Started
          </button>
        </ScrollReveal>
      </div>
    </div>


      </div>

{/* Seventh Section */}

<ScrollReveal animation="fadeIn" duration={800}>
      <div className="w-full max-w-[85rem] mx-auto my-8 px-4 lg:px-20">
        <div className="bg-[#E3ECF4] rounded-lg overflow-hidden flex flex-col sm:flex-row justify-between sm:items-center relative p-5 sm:p-0">
          <ScrollReveal animation="slideRight" duration={800}>
            <div className="z-10 max-w-full sm:ml-5 md:ml-14 xl:ml-20">
              <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-2">
                Setup Your E-commerce Marketplace
              </h2>
              <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-6">
                In A Few Clicks
              </h3>
              <button className="bg-pink-500 hover:bg-pink-600 text-white font-medium py-3 px-6 rounded-md transition-colors duration-200">
                Get Started
              </button>
            </div>
          </ScrollReveal>

          {/* Blue SVG Background */}
          <div className="relative right-0 h-full top-0 flex items-center justify-center">
            <svg
              width="477"
              height="352"
              viewBox="0 0 477 352"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="absolute right-0 top-0 w-[20rem] h-[15rem] md:w-[25rem] md:h-[16rem] -mr-7 hidden sm:block"
            >
              <path
                d="M444.927 0C473.096 -0.000866069 478.04 1.05499 476.574 24.5609C475.109 48.0668 476.574 335.332 476.574 335.332C476.575 354.552 462.306 351.873 444.927 351.873H81.4638C-7.45282 273.238 -50.2882 185.455 100.025 0C100.025 0 416.758 0.000867132 444.927 0Z"
                fill="#BCD6ED"
              />
            </svg>

            <ScrollReveal animation="fadeIn" duration={1000} delay={400}>
              <div className="relative w-full h-56 md:w-[20rem] md:h-60 flex items-center justify-center">
                <Image
                  src="/IndusEcommerce/Image11.png"
                  alt="Calendar App"
                  width={300}
                  height={300}
                  className="p-1 relative z-10 sm:w-[250px] md:w-[300px]"
                />
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </ScrollReveal>



{/* Eigth section  */}
<div className="w-full max-w-7xl mx-auto my-20 sm:mt-40 mb-6 sm:mb-40 px-3 sm:px-10">
      <div className="flex flex-col lg:flex-row justify-between">
        {/* Left Side - Features */}
        <ScrollReveal animation="fadeIn" duration={800}>
          <div className="w-full lg:w-full pr-0 lg:pr-8">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">Integration Partners</h2>
            
            <p className="text-lg text-gray-800 mb-8">
              100+ Payment Gateways | Easy Global Payment | 60+ Languages | 120+ Integrations
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
              {/* Feature 1-6 with staggered animations */}
              {[1, 2, 3, 4, 5, 6].map((num, index) => (
                <ScrollReveal 
                  key={num} 
                  animation="slightRight" 
                  duration={600} 
                  delay={200} 
                  index={index} 
                  stagger={150}
                >
                  <div className="flex items-start">
                    <div className="flex-shrink-0 w-14 h-14 bg-pink-500 rounded-full flex items-center justify-center text-white font-bold text-2xl mr-4">
                      {num}
                    </div>
                    <div>
                      <h3 className="text-xl font-bold">
                        {num === 1 && "Fully Hosted & Unlimited Bandwidth"}
                        {num === 2 && "Highly Secured with 256-bit SSL certificate"}
                        {num === 3 && "Sell Globally with Multiple Currencies"}
                        {num === 4 && "Enhanced Customization Options"}
                        {num === 5 && "Easy Platform Migration Process"}
                        {num === 6 && "Robust 24×7 Phone Support"}
                      </h3>
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </ScrollReveal>
        
        {/* Right Side - Company Logos Image */}
        
          <ScrollReveal animation="fadeIn" duration={1000} delay={400} className="w-full lg:w-[50%] mt-8 lg:mt-0">
            <div className="w-full h-full flex items-end justify-center">
              <Image
                src="/IndusEcommerce/Image12.png"
                width={500}
                height={500}
                alt="Integration Partners Logos including PayPal, Stripe, Twilio, Razorpay and more" 
                className=""
              />
            </div>
          </ScrollReveal>
        
      </div>
    </div>


{/* Nineth Section */}
<ScrollReveal animation="fadeIn" duration={800}>
      <div className="w-full max-w-[85rem] mx-auto my-8 px-4 lg:px-20">
        <div className="bg-[#E3ECF4] rounded-lg overflow-hidden flex flex-col sm:flex-row sm:gap-20 relative">
          
          {/* SVG Background Positioned to the Right */}
          <div className="relative flex items-center justify-center">
            <svg
              width="474"
              height="351"
              viewBox="0 0 474 351"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="absolute right-0 top-0 w-[20rem] h-[15rem] md:h-[15rem] hidden sm:block"
            >
              <path
                d="M32.4816 0C4.4903 -0.000863609 -0.422388 1.05199 1.03379 24.4911C2.48996 47.9302 1.03379 334.379 1.03379 334.379C1.03329 353.545 15.2122 350.873 32.4816 350.873H393.654C482.01 272.462 524.576 184.929 375.21 0C375.21 0 60.4729 0.000864669 32.4816 0Z"
                fill="#BCD6ED"
              />
            </svg>

            <ScrollReveal animation="fadeIn" duration={1000} delay={200}>
              <div className="relative w-full h-64 md:w-[20rem] md:h-60 flex items-center justify-center z-10">
                <Image
                  src="/IndusEcommerce/Image11.png"
                  alt="Calendar App"
                  width={300}
                  height={300}
                  className="p-1 relative z-10 sm:w-[250px] md:w-[300px]"
                />
              </div>
            </ScrollReveal>
          </div>

          <ScrollReveal animation="slideLeft" duration={800}>
            <div className="z-10 max-w-full p-4">
              <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-2">
                Setup Your E-commerce Marketplace
              </h2>
              <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-6">
                In A Few Clicks
              </h3>
              <button className="bg-pink-500 hover:bg-pink-600 text-white font-medium py-3 px-6 rounded-md transition-colors duration-200">
                Get Started
              </button>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </ScrollReveal>



{/* 10th section */}
<ScrollReveal animation="fadeIn" duration={800}>
<FeaturesSection/>
</ScrollReveal>

{/* 11th section */}

<ScrollReveal animation="fadeIn" duration={800}>
      <div className="w-full bg-gray-100 pt-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto flex flex-col justify-center items-center sm:items-start sm:justify-start">
          {/* Main Heading */}
          <ScrollReveal animation="slideUp" duration={800}>
            <h1 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 mb-6">
              Turn Shoppers Into Buyers With Your
              <br />
              <span className="">Own Branded E-commerce Apps & Websites</span>
            </h1>
          </ScrollReveal>

          {/* Get Started Button */}
          <ScrollReveal animation="scaleUp" duration={800} delay={200}>
            <button className="bg-pink-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-lg transition-colors duration-200 mb-12">
              Get Started With Us
            </button>
          </ScrollReveal>
        </div>
      </div>
    </ScrollReveal>

{/* 12th section */}

<ScrollReveal animation="fadeIn" duration={800}>
      <div className="w-full bg-blue-100 py-12 px-4 flex flex-col items-center justify-center text-center">
        {/* Icon */}
        <ScrollReveal animation="scaleUp" duration={600}>
          <div className="mb-4">
            <Image
              src="/IndusEcommerce/Image14.png"
              alt="Calendar App"
              width={40}
              height={40}
              className="p-1 w-[40px]"
            />
          </div>
        </ScrollReveal>

        {/* Text content */}
        <ScrollReveal animation="fadeIn" duration={800} delay={200}>
          <h3 className="text-base font-medium mb-2">Join, Sell & Earn</h3>
          <h2 className="text-xl md:text-2xl font-bold mb-1">Explore Our Partnership Program to Sell</h2>
          <p className="text-xl md:text-2xl font-bold mb-6">Our Fully Customized Tech Solution To Your Clients.</p>
        </ScrollReveal>

        {/* Button */}
        <ScrollReveal animation="scaleUp" duration={600} delay={400}>
          <button className="bg-blue-300 hover:bg-blue-400 text-blue-900 font-semibold py-2 px-6 rounded transition-colors duration-300">
            Partner With Us
          </button>
        </ScrollReveal>
      </div>
    </ScrollReveal>


    </>
  );
}