
import React from 'react';
import Image from 'next/image'
import ScrollReveal from '@/components/ScrollReveal';
import {  SquarePen,CircleUserRound,SwatchBook,Layers2 } from 'lucide-react';


const IdeationPage = () => {
 


// Fourth section's content


const stats = [
 
  {
    title: "Projects Delivered",
    count: "2k+",
    icon: '/Serviceideation/Image10.png'
  },
  {
    title: "Clients Worldwide",
    count: "3k",
    icon: '/Serviceideation/Image11.png'
  },
  {
    title: "Designers",
    count: "80+",
    icon: '/Serviceideation/Image12.png'
  },
  {
    title: "Years of experience",
    count: "6+",
    icon: '/Serviceideation/Image13.png'
  }
];


const Eleventh = [
  
  {
    title: "User Feedback Is Taken At Every Step Of Designing Process",
   
    icon: '/Serviceideation/Image19.svg',
  },
  {
    title: "We Analyze The Feedback To Understand The Problem",
    
    icon: '/Serviceideation/Image20.svg',
  },
  {
    title: "Solution Is Provided At The Earliest To Improve Design & Usability",
    
    icon: '/Serviceideation/Image21.svg',
  },
 
];


  return (

<>

  <div className=" max-w-[100%] bg-gradient-to-t to-[#0E0C44] from-[#D83D79] mx-auto flex flex-col md:flex-row items-center sm:items-start lg:items-center justify-around px-6 sm:px-10 md:px-14 xl:px-6 py-10 lg:py-0  mt-16 sm:mt-20 lg:mt-0 2xl:mt-20 z-10">
        

        <div className='flex max-w-7xl justify-between'>
  {/* Left Section - Text Content */}
  <ScrollReveal animation='slightRight' duration={800} className="md:w-1/2 mb-12 md:mb-0 flex flex-col justify-evenly  md:justify-center 2xl:justify-start   lg:h-[35rem] lg:space-y-10 pt-4 xl:pt-[3rem] 2xl:pt-20">
   <div className='lg:mt-10 xl:mt-0 text-white'>
   <h1 className="text-4xl sm:text-3xl md:text-4xl  xl:text-5xl font-bold mb-6 2xl:mt-16">
   A Complete Design Studio
    </h1>
    <p className="text-xl lg:mb-10">
    A creative in-house design agency crafting outstanding customer experiences
    </p>
   </div>
    
   <div className="pt-6">
            <button className="bg-[#C03773] flex gap-2 border border-white hover:bg-pink-600 text-white font-medium py-3 px-6 rounded-md text-lg">
              Get Started
              <Image
             src="/Serviceideation/Image2.png"
              alt="Calendar App"
              width={50}
              height={50}
             
              className=" w-[28px] "
            />
            </button>
          </div>
  </ScrollReveal>
  
  {/* Right Section - Form */}
  <ScrollReveal animation='slightLeft' duration={800} className=" w-[80%]  sm:w-[50%] md:w-[44%] 2xl:w-[38%] hidden sm:flex justify-center items-center  lg:mt-10">
   <Image
             src="/Serviceideation/Image1.png"
              alt="Calendar App"
              width={650}
              height={650}
             
              className="p-1 w-[350px] md:w-[400px] lg:w-[450px] 2xl:w-[650px]"
            />
  </ScrollReveal>

  </div>

</div>




{/* Second Section */}



<div className="w-full max-w-7xl mx-auto px-4 py-8 mt-10">
      <div className="text-center mb-12">
        <h2 className=" md:text-3xl  2xl:text-4xl font-bold text-blue-900">
          A team of <span className="bg-pink-600 text-white px-2 py-1 rounded-md">80+</span> creative designers creating unique digital experiences, your customers will love
        </h2>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* First Team Member */}
        <div className="flex flex-col items-center">
          <div className="w-full max-w-xs mb-4 p-5 sm:p-0">
          <Image
             src="/Serviceideation/Image3.png"
              alt="Calendar App"
              width={200}
              height={200}
             
            
              className="w-full h-auto"
            />
          </div>
          <h3 className="text-xl font-bold text-center">Highly</h3>
          <h3 className="text-xl font-bold text-center">Experienced</h3>
        </div>
        
        {/* Second Team Member */}
        <div className="flex flex-col items-center">
          <div className="w-full max-w-xs mb-4 p-5 sm:p-0">
          <Image
             src="/Serviceideation/Image4.png"
              alt="Calendar App"
              width={200}
              height={200}
             
              className="w-full h-auto "
            />
          </div>
          <h3 className="text-xl font-bold text-center">Creative</h3>
          <h3 className="text-xl font-bold text-center">Minds</h3>
        </div>
        
        {/* Third Team Member */}
        <div className="flex flex-col items-center">
          <div className="w-full max-w-xs mb-4 p-5 sm:p-0">
          <Image
             src="/Serviceideation/Image5.png"
              alt="Calendar App"
              width={200}
              height={200}
             
              className="w-full h-auto"
            />
          </div>
          <h3 className="text-xl font-bold text-center">Well Qualified &</h3>
          <h3 className="text-xl font-bold text-center">Certified</h3>
        </div>
      </div>
    </div>


{/* Section Three */}


<div className="w-full max-w-7xl mx-auto  py-8 mt-10">
      <div className="flex flex-col md:flex-row items-center gap-6">
        {/* Left side - Rocket and Space Background */}
        <div className="relative w-full md:w-2/5 mb-6 md:mb-0 p-8">
          <div className="rounded-tl-[6rem] rounded-br-[6rem] overflow-hidden bg-indigo-950">
            {/* Space background */}
            <Image
             src="/Serviceideation/Image6.png"
              alt="Calendar App"
              width={180}
              height={180}
              className="w-full h-auto"
            />
          </div>
          {/* Rocket overlaid on top */}
          <div className="absolute left-20 -top-12  h-full">
          <Image
             src="/Serviceideation/Image7.png"
              alt="Calendar App"
              width={320}
              height={320}
              className=" h-auto object-contain"
            />
          </div>
        </div>
        
        {/* Right side - Text content */}
        <div className="w-full md:w-3/5 h-[26rem] space-y-16">
          <h2 className="text-2xl md:text-3xl font-semibold mb-6">
            Do You Know Your Business Success Depends Majorly On Two Factors:
          </h2>
          
          <div className="flex flex-col md:flex-row gap-6 mb-8">
            {/* Customer Experience */}
            <div className="flex items-center gap-3">
              <div className="flex items-center relative">
              <Image
             src="/Serviceideation/Image8.png"
              alt="Calendar App"
              width={60}
              height={60}
              className=" h-auto object-contain"
            />
                <div className="absolute -top-1 right-0">
                  <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                </div>
              </div>
              <span className="font-bold">Customer Experience</span>
            </div>
            
            {/* Customer Satisfaction */}
            <div className="flex items-center gap-3">
              <div className="flex items-center relative">
              <Image
             src="/Serviceideation/Image9.png"
              alt="Calendar App"
              width={60}
              height={60}
              className=" h-auto object-contain"
            />
                <div className="absolute -top-1 right-0">
                  <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                </div>
              </div>
              <span className="font-bold">Customer Satisfaction</span>
            </div>
          </div>
          
          <h3 className="text-xl md:text-2xl font-bold mb-8">
            We Craft An Optimal Experience For Your Customers, Leading To Increase In Customer Satisfaction By 2X
          </h3>
          
          <a href="#" className="inline-flex items-center gap-2 bg-pink-600 text-white px-4 py-2 rounded-md hover:bg-pink-700 transition-colors">
            Get Started
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M10 3.33334L8.83334 4.50001L13.6667 9.33334H3.33334V11H13.6667L8.83334 15.8333L10 17L17 10L10 3.33334Z" fill="white"/>
            </svg>
          </a>
        </div>
      </div>
    </div>




    {/* Fourth Section */}

    


  
    <div className="w-full bg-black py-10 px-6 md:px-8 ">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4  sm:gap-6 justify-center">
          {stats.map((stat, index) => (
            <ScrollReveal 
              key={index}
              animation="slideUp" 
              duration={800} 
              delay={200*index}
              easing="gentle"
            >
              <div 
                className=" px-3 sm:px-2 rounded-tl-[2rem] rounded-br-[2rem]  py-2  border-2 border-white/20 flex justify-around min-h-[180px] sm:min-h-[150px] max-w-[17rem]"
              >
              <div className='p-1 flex items-center justify-center'>
                <Image
                  src= {stat.icon}
                  alt="Calendar App"
                  width={55}
                  height={55}
                  className=''
                  />
</div>
                <div className="flex items-cente flex-col justify-center w-[50%]">
                  <p className="text-5xl font-semibold text-white">
                    {stat.count}
                  </p>
                  <h3 className="text-sm   text-white mb-4">
                  {stat.title}
                </h3>
                 
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </div>




    {/* Fifth Section */}


    


 <div className="w-full max-w-6xl 2xl:max-w-[90rem] mx-auto px-5 xl:px-0  sm:py-16">
      {/* Main headline */}
      <ScrollReveal animation='slideDown' duration={800} className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
        We Just Don’t Design,We Build Customer Experience
        </h1>
        <h2 className="text-xl md:text-2xl font-semibold">
        Get human-centric designs that forge strong customer relationships & help your businesses thrive
        </h2>
      </ScrollReveal>
      
      {/* Content section with image and text */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-8 mt-16 sm:px-10">
        {/* Left content */}
        <ScrollReveal animation='slightRight' duration={800} className="w-full md:w-1/2 space-y-4 ">
          
          <h3 className="text-3xl md:text-4xl font-bold">Wireframing & Prototyping</h3>
          <div className="text-lg flex gap-2">
          <div className='py-2'>
          <Image
             src="/Serviceideation/Image15.svg"
              alt="Calendar App"
              width={30}
              height={30}
             
              className=" w-[20px] "
            />
          </div>
          Our UX experts define the user flow & layout of your digital interface with wireframing
          </div>
          <div className="text-lg flex gap-2">
         <div className='py-2'>
         <Image
             src="/Serviceideation/Image15.svg"
              alt="Calendar App"
              width={30}
              height={30}
             
              className=" w-[20px] "
            />
         </div>
          We create low & high fidelity prototypes to test usability & map user journeys accurately
          </div>
          
          <div className="pt-6">
            <button className="bg-pink-500 hover:bg-pink-600 text-white font-medium py-3 px-8 rounded-md text-lg flex gap-2">
              Get Started
              <Image
             src="/Serviceideation/Image2.png"
              alt="Calendar App"
              width={50}
              height={50}
             
              className=" w-[28px] "
            />
            </button>
          </div>
        </ScrollReveal>
        
        {/* Right image */}
<ScrollReveal animation='slightLeft' duration={800}>
        <Image
           src="/Serviceideation/Image14.png"
            alt="Calendar App"
            width={600}
            height={600}
           
            className="p-1 w-[350px] md:w-[400px] lg:w-[600px]"
          />
</ScrollReveal>
        </div>

{/* Sixth Section  */}


<div className="w-full bg-white  mt-2 md:mt-20 sm:px-10">
      <div className="max-w-[90rem]  flex flex-col sm:flex-row items-center gap-8">
        {/* Left Side - Mobile App Mockup */}
        <ScrollReveal animation='slightRight' duration={800}>
        <Image
           src="/Serviceideation/Image16.png"
            alt="Calendar App"
            width={500}
            height={500}
           
            className=" w-[350px] md:w-[400px] lg:w-[500px]"
          />
        
        </ScrollReveal>
       
        {/* Right Side - Text Content */}
       
        {/* Left content */}
        <ScrollReveal animation='slightRight' duration={800} className="w-full md:w-1/2 space-y-4 ">
          
          <h3 className="text-3xl md:text-4xl font-bold">Wireframing & Prototyping</h3>
          <div className="text-lg flex gap-2">
          <div className='py-2'>
          <Image
             src="/Serviceideation/Image15.svg"
              alt="Calendar App"
              width={30}
              height={30}
             
              className=" w-[20px] "
            />
          </div>
          Our UX experts define the user flow & layout of your digital interface with wireframing
          </div>
          <div className="text-lg flex gap-2">
         <div className='py-2'>
         <Image
             src="/Serviceideation/Image15.svg"
              alt="Calendar App"
              width={30}
              height={30}
             
              className=" w-[20px] "
            />
         </div>
          We create low & high fidelity prototypes to test usability & map user journeys accurately
          </div>
          
          <div className="pt-6">
            <button className="bg-pink-500 hover:bg-pink-600 text-white font-medium py-3 px-8 rounded-md text-lg flex gap-2">
              Get Started
              <Image
             src="/Serviceideation/Image2.png"
              alt="Calendar App"
              width={50}
              height={50}
             
              className=" w-[28px] "
            />
            </button>
          </div>
        </ScrollReveal>
        
      </div>
    </div>



    </div>



{/* Seventh Section */}


    <div className='bg-[#101742] p-5 sm:mt-10'>
<div className="flex flex-col text-white sm:flex-row  items-center justify-between gap-8 mt-12 sm:px-10">
        {/* Left content */}
        <ScrollReveal animation='slightRight' duration={800} className="w-full md:w-1/2 space-y-4 ">
          
          <h3 className="text-3xl md:text-4xl font-bold">Wireframing & Prototyping</h3>
          <div className="text-lg flex gap-2">
          <div className='py-2'>
          <Image
             src="/Serviceideation/Image15.svg"
              alt="Calendar App"
              width={30}
              height={30}
             
              className=" w-[20px] "
            />
          </div>
          Our UX experts define the user flow & layout of your digital interface with wireframing
          </div>
          <div className="text-lg flex gap-2">
         <div className='py-2'>
         <Image
             src="/Serviceideation/Image15.svg"
              alt="Calendar App"
              width={30}
              height={30}
             
              className=" w-[20px] "
            />
         </div>
          We create low & high fidelity prototypes to test usability & map user journeys accurately
          </div>
          
          <div className="pt-6">
            <button className="bg-pink-500 hover:bg-pink-600 text-white font-medium py-3 px-8 rounded-md text-lg flex gap-2">
              Get Started
              <Image
             src="/Serviceideation/Image2.png"
              alt="Calendar App"
              width={50}
              height={50}
             
              className=" w-[28px] "
            />
            </button>
          </div>
        </ScrollReveal>
        
        {/* Right image */}
<ScrollReveal animation='slightLeft' duration={800}>
        <Image
           src="/Serviceideation/Image17.png"
            alt="Calendar App"
            width={450}
            height={450}
           
            className="p-1 w-[250px] md:w-[300px] lg:w-[450px]"
          />
</ScrollReveal>
        </div>
        </div>




{/* Eigth Section */}



<div className="w-full bg-white flex justify-center mt-2 md:mt-20 sm:px-10">
      <div className="max-w-[90rem]  flex flex-col sm:flex-row justify-center items-center gap-8">
        {/* Left Side - Mobile App Mockup */}
        <ScrollReveal animation='slightRight' duration={800}>
        <div className="relative w-full  mb-6 md:mb-0 p-8">
          <div className="overflow-hidden rotate-12">
            {/* Space background */}
            <Image
             src="/Serviceideation/Image18.png"
              alt="Calendar App"
              width={380}
              height={380}
              className="w-full h-auto"
            />
          </div>
          {/* Rocket overlaid on top */}
          <div className="absolute left-[2rem] -top-8 rotate-12  h-full">
          <Image
             src="/Serviceideation/Image18.png"
              alt="Calendar App"
              width={380}
              height={380}
              className=" h-auto object-contain"
            />
          </div>
          <div className="absolute -left-10 -top-12  h-full ">
            {/* Space background */}
            <Image
             src="/Serviceideation/Image18.png"
              alt="Calendar App"
              width={380}
              height={380}
              className="w-full h-auto"
            />
          </div>
        </div>
        
        </ScrollReveal>
       
        {/* Right Side - Text Content */}
       
        {/* Left content */}
        <ScrollReveal animation='slightRight' duration={800} className="w-full md:w-1/2 space-y-4 ">
          
          <h3 className="text-3xl md:text-4xl font-bold">Wireframing & Prototyping</h3>
          <div className="text-lg flex gap-2">
          <div className='py-2'>
          <Image
             src="/Serviceideation/Image15.svg"
              alt="Calendar App"
              width={30}
              height={30}
             
              className=" w-[20px] "
            />
          </div>
          Our UX experts define the user flow & layout of your digital interface with wireframing
          </div>
          <div className="text-lg flex gap-2">
         <div className='py-2'>
         <Image
             src="/Serviceideation/Image15.svg"
              alt="Calendar App"
              width={30}
              height={30}
             
              className=" w-[20px] "
            />
         </div>
          We create low & high fidelity prototypes to test usability & map user journeys accurately
          </div>
          
          <div className="pt-6">
            <button className="bg-pink-500 hover:bg-pink-600 text-white font-medium py-3 px-8 rounded-md text-lg flex gap-2">
              Get Started
              <Image
             src="/Serviceideation/Image2.png"
              alt="Calendar App"
              width={50}
              height={50}
             
              className=" w-[28px] "
            />
            </button>
          </div>
        </ScrollReveal>
        
      </div>
    </div>



{/* Nineth Section */}


<ScrollReveal animation='slideDown' duration={800} className="text-center mb-12 mt-20">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
        We Just Don’t Design,We Build Customer Experience
        </h1>
        <h2 className="text-xl md:text-2xl font-semibold">
        Get human-centric designs that forge strong customer relationships & help your businesses thrive
        </h2>
        <div className="pt-6 flex justify-center">
            <button className="bg-pink-500 hover:bg-pink-600 text-white font-medium py-3 px-8 rounded-md text-lg flex gap-2">
              Get Started
              <Image
             src="/Serviceideation/Image2.png"
              alt="Calendar App"
              width={50}
              height={50}
             
              className=" w-[28px] "
            />
            </button>
          </div>
      </ScrollReveal>




{/* 10th Second */}

<div className='bg-[#101742] '>

<div className="flex justify-center flex-col mx-auto  sm:max-w-xl md:max-w-3xl lg:max-w-5xl xl:max-w-7xl text-white items-center   p-8 relative ">



<ScrollReveal animation='slideDown' duration={800} className="text-center mb-12 ">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
        Approach We Follow
        </h1>
        <h2 className="text-xl md:text-2xl font-semibold">
        Our designs are an outcome of in-depth research & market analysis for achieving your business goals
        </h2>
       
      </ScrollReveal>



      
        <div 
          
          className=" w-full sm:bg-[url('/Serviceideation/Thirdlastsection.svg')] bg-contain  bg-no-repeat pb-10 sm:pb-0 mt-2 sm:mt-10"
        >
         


         <div className='flex flex-col sm:flex-row gap-8 sm:gap-0 justify-center sm:justify-around items-center h-[35rem] sm:h-[23rem]'>



         <div className='h-full flex sm:block flex-col justify-center items-center'>
         <div className="w-12 lg:w-16 h-12 lg:h-16 bg-[#C03773] sm:-mt-8 md:-mt-6 lg:-mt-8 text-white rounded-full flex items-center  justify-center mb-4 text-2xl font-bold">
         

            <SquarePen size='35' />
            </div>
            <h3 className="text-4xl text-start font-semibold mb-3 leading-tight opacity-50">  Define </h3>
            <p className="text-gray-600 text-start">  Define Purpose</p>
         </div>


         <div className='h-full flex flex-col md:justify-center items-center'>
         <div className="w-12 lg:w-16 h-12 lg:h-16 bg-[#C03773] sm:mt-9 md:-mt-28 lg:-mt-10 xl:mt-5 text-white rounded-full flex items-center  justify-center mb-4 text-2xl font-bold">
         <CircleUserRound size='35' />
            </div>
            <h3 className="text-4xl text-start font-semibold mb-3 leading-tight opacity-50"> Design </h3>
            <p className="text-gray-600 text-start">  User-centric Design</p>
         </div>





         <div className='h-full flex flex-col justify-start md:justify-center items-center'>
         <div className="w-12 lg:w-16 h-12 lg:h-16 bg-[#C03773] sm:mt-10 md:-mt-24 lg:-mt-7  xl:mt-6 text-white rounded-full flex items-center  justify-center mb-4 text-2xl font-bold ">
         <SwatchBook size='35' />
            </div>
            <h3 className="text-4xl text-start font-semibold mb-3 leading-tight opacity-50">  Simple </h3>
            <p className="text-gray-600 text-start"> Keeping it Simple</p>
         </div>




         <div className='h-full flex flex-col justify-center  xl:justify-end items-center'>
         <div className="w-12 lg:w-16 h-12 lg:h-16 bg-[#C03773] sm:-mt-20 md:mt-0 lg:mt-32 xl:mt-0 text-white rounded-full flex items-center  justify-center mb-4 text-2xl font-bold">
         <Layers2 size='35' />
            </div>
            <h3 className="text-4xl text-start font-semibold mb-3 leading-tight  opacity-50"> Beauty </h3>
            <p className=" text-start">  Functional Beauty</p>
         </div>



         </div>


        </div>


    </div>

    </div>



{/* Eleventh Section */}

<div className="w-full  py-28 px-6 md:px-8 ">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 sm:gap-6">
          {Eleventh.map((Eleventh, index) => (
            <ScrollReveal 
              key={index}
              animation="slideUp" 
              duration={800} 
              delay={200*index}
              easing="gentle"
            >
              <div 
                className=" px-3 sm:px-4 py-6  border-2 border-black/60 flex flex-col justify-between min-h-[180px] sm:min-h-[200px] lg:w-[20rem]"
              >
              
              <Image
             src={Eleventh.icon}
              alt="Calendar App"
              width={50}
              height={50}
              className="flex items-center justify-between w-16">
                 
                  
                </Image>
               <div className='sm:h-[5rem] '>
               <h3 className="text-xl 2xl:text-2xl leading-tight font-medium text-gray-900 mb-4">
                  {Eleventh.title}
                </h3>
               </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </div>




{/* 12th Section */}

<ScrollReveal animation="fadeIn" duration={800}>
      <div className="w-full text-white bg-[#101742] py-12 px-4 flex flex-col items-center justify-center text-center">
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
          <button className="bg-[#C03773] hover:bg-pink-400 text-white font-semibold py-2 px-6 rounded transition-colors duration-300">
            Partner With Us
          </button>
        </ScrollReveal>
      </div>
    </ScrollReveal>




</>

  )
}

export default IdeationPage;