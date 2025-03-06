
import React from 'react';

import Image from 'next/image';
import ScrollReveal from '@/components/ScrollReveal';
import EduModelsShowcase from "@/components/Industries/Education/Section";
import DevelopmentProcess from '@/components/Industries/Education/SixthSection'
import TechStack from  '@/components/Industries/Education/EighthSection'
import EdTechLandingPage from "@/components/Industries/Education/Getsatrted"

const EduPage = () => {




  return (
    <div className='flex flex-col justify-center items-center'>
    <div className="flex w-full xl:h-screen 2xl:h-auto bg-[url('/IndusEdu/Image1.png')] 2xl:bg-no-repeat 2xl:bg-cover text-white relative overflow-hidden">

    <div className="absolute inset-0 bg-black opacity-40 z-0"></div>

      {/* Content */}
     
<EdTechLandingPage/>

    </div>



{/* second section */}

<section className="px-6 md:px-16 py-10  flex items-center justify-center w-full sm:mt-10">
      {/* Heading */}
      <div className='w-[70rem]'>
      <ScrollReveal animation='slightRight' duration={800} className="text-center sm:text-start text-3xl lg:text-4xl font-semibold text-blue-600 ">
        #1 <span className="text-blue-500">Education App Development Company</span>
      </ScrollReveal >
      <ScrollReveal animation='slightRight' duration={800} className="text-center sm:text-start text-xl md:text-2xl font-medium mt-2">
        Impacting <span className="font-bold">20+ Million</span> Students and Trainers Worldwide
      </ScrollReveal>

      {/* Main Content */}
      <div className="mt-8 flex flex-col sm:flex-row items-center gap-6">
     

        {/* Left Image Card */}
        <div className="w-full md:w-1/2 flex items-center justify-center sm:block ">

      
<ScrollReveal animation='fadeIn' duration={800} className="w-[20rem] lg:w-[25rem] h-[14rem] lg:h-[18rem] bg-[url('/IndusEdu/Image2.svg')] bg-cover rounded-lg ">


</ScrollReveal>

          
        </div>

        {/* Right Statistics Cards */}
        <div className="grid grid-cols-2 gap-4 w-full md:w-1/2 px-[5%] sm:px-0">
          <ScrollReveal animation='slightLeft' delay={200} duration={800} className="bg-gray-100 px-2 md:px-4 py-4  md:py-6 lg:py-10 rounded-lg text-center shadow">
            <p className="text-xl font-bold">20+</p>
            <p className="text-sm">Education Startups</p>
          </ScrollReveal>
          <ScrollReveal animation='slightLeft' delay={300} duration={800} className="bg-gray-100 px-2 md:px-4 py-4  md:py-6 lg:py-10 rounded-lg text-center shadow">
            <p className="text-xl font-bold">60+</p>
            <p className="text-sm">Education Consultation Apps</p>
          </ScrollReveal>
          <ScrollReveal animation='slightLeft' delay={400} duration={800} className="bg-gray-100 px-2 md:px-4 py-4 md:py-6  lg:py-10 rounded-lg text-center shadow">
            <p className="text-xl font-bold">120 Mn</p>
            <p className="text-sm">Funding Raised For Startups</p>
          </ScrollReveal>
          <ScrollReveal animation='slightLeft' delay={500} duration={800} className="bg-gray-100 px-2 md:px-4 py-4 md:py-6 lg:py-10 rounded-lg text-center shadow">
            <p className="text-xl font-bold">10+</p>
            <p className="text-sm">Years of Industry Experience</p>
          </ScrollReveal>
        </div>
      </div>
      </div>
    </section>



    {/* Third Section */}

<div className='flex flex-col justify-center items-center gap-10 sm:gap-20 py-10 sm:mt-10'>

<ScrollReveal animation='slideDown'  duration={800} className='flex flex-col justify-center sm:items-center px-4'>
<h2 className="text-2xl  md:text-3xl font-bold  ">
         <span className="font-bold">Watch A Live Demo To Discover</span>
      </h2>
      <p className="text-lg md:text-xl font-medium mt-2">
      How Our Education App Development Services Empower Learners And Educators.
      </p>

</ScrollReveal>

  <ScrollReveal animation='slideUp'  duration={800} className=" left-0 right-0   w-full flex justify-center">
    <Image
      src="/IndusEdu/Image3.png"
      alt="E-commerce Website Mockup on Multiple Devices"
      width={1200}
      height={600}
      priority
      className=" w-[30rem] px-5 sm:w-[35rem] md:w-[45rem] lg:w-[55rem] 2xl:w-[1200px]"
    />
  </ScrollReveal>

</div>





{/*Fourth Section */}


<div className="flex flex-col sm:flex-row  items-center justify-between gap-8 sm:px-10 bg-gradient-to-r from-[#0A132B] to-[#224091] rounded-xl text-white max-w-6xl p-5 mt-2 sm:mt-12 mx-5">
        {/* Left content */}
        <ScrollReveal animation='slightRight' duration={800} className="w-full md:w-[60%] space-y-4 ">
          
          <h3 className="text-3xl lg:text-4xl font-bold">Want To Build An Educational App For A Unique Idea?</h3>
          <p className="text-lg">
          No more one-size-fits-all solutions! We understand your specific needs and develop an education app that perfectly align with your vision
          </p>
          
         
        </ScrollReveal>
        
        {/* Right image */}
<ScrollReveal animation='slightLeft' duration={800}>
        <Image
           src="/IndusEdu/Image4.png"
            alt="Calendar App"
            width={320}
            height={300}
           
            className="lg:p-1 w-[250px] md:w-[200px] lg:w-[320px]"
          />
          </ScrollReveal>
        </div>


{/* Fifth Section */}


        <EduModelsShowcase />




{/* Sixth Section */}


<div className="flex flex-col sm:flex-row items-center justify-between gap-8 mt-2 md:mt-5 sm:pl-10 bg-gradient-to-r from-[#0A132B] to-[#224091] rounded-xl text-white max-w-6xl p-5 sm:p-0 mx-5">
        {/* Left content */}
        <ScrollReveal animation='slightRight' duration={800} className="w-full md:w-[60%] space-y-4   2xl:ml-[3rem]">
          
          <h3 className="sm:text-2xl md:text-4xl font-bold">Want To Build An Educational App For A Unique Idea?</h3>
          <p className="text-base md:text-lg">
          No more one-size-fits-all solutions! We understand your specific needs and develop an education app that perfectly align with your vision
          </p>
          
         
        </ScrollReveal>
        
        {/* Right image */}
<ScrollReveal animation='slightLeft' duration={800}>
        <Image
           src="/IndusEdu/hello.svg"
            alt="Calendar App"
            width={320}
            height={300}
           
            className=" rounded-r-xl w-[250px] md:w-[200px] lg:w-[320px] hidden sm:block"
          />
          </ScrollReveal>
        </div>



{/* Seven Section */}


<DevelopmentProcess/>


{/* Eigth Section */}

<TechStack/>

    </div>
  );
};

export default EduPage;