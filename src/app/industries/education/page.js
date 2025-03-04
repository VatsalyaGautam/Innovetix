"use client"
import React, { useState } from 'react';
import PhoneInputWithCountrySelector from '@/components/Industries/Healthcare/FlagInput'
import Image from 'next/image';
import ScrollReveal from '@/components/ScrollReveal';

const EdTechLandingPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    projectDetails: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Thank you for your submission! We will contact you soon.');
    setFormData({
      name: '',
      email: '',
      phone: '',
      projectDetails: ''
    });
  };

  return (
    <div className='flex flex-col justify-center items-center'>
    <div className="flex w-full md:h-screen  bg-[url('/IndusEdu/Image1.png')] text-white relative overflow-hidden">
    

      {/* Content */}
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between px-6 py-12 mt-20 z-10">
        
        {/* Left Section - Text Content */}
        <div className="md:w-1/2 mb-12 md:mb-0 flex flex-col justify-around">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Looking For An Education App Development Company?
          </h1>
          <p className="text-xl mb-10">
            We build next-level educational apps that empower educators and learners, both.
          </p>
          
          <div className="space-y-4">
            <div className="flex items-start">
              <div className="bg-blue-400 rounded-full p-1 mr-3 mt-1">
                <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              </div>
              <p className="text-lg">Your Vision, Your App, Your Code- We Just build it.</p>
            </div>
            
            <div className="flex items-start">
              <div className="bg-blue-400 rounded-full p-1 mr-3 mt-1">
                <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              </div>
              <p className="text-lg">Build your education app with Advanced AI capabilities</p>
            </div>
            
            <div className="flex items-start">
              <div className="bg-blue-400 rounded-full p-1 mr-3 mt-1">
                <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              </div>
              <p className="text-lg">End-to-End Data Encryption With Blockchain-Based Architecture</p>
            </div>
          </div>
        </div>
        
        {/* Right Section - Form */}
        <div className=" xl:w-[35%] 2xl:w-[30%] ">
          <div className="bg-white p-6 rounded-lg shadow-lg text-gray-800">
            <h2 className="text-2xl font-bold mb-6 text-gray-900">Launch Your Dream EdTech App</h2>
            
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-medium mb-1">Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="abc"
                  className="w-full p-2 border border-gray-300 rounded"
                  required
                />
              </div>
              
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-medium mb-1">Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="example@gmail.com"
                  className="w-full p-2 border border-gray-300 rounded"
                  required
                />
              </div>
              
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-medium mb-1">Phone</label>
               <PhoneInputWithCountrySelector/>
              </div>
              
              <div className="mb-6">
                <label className="block text-gray-700 text-sm font-medium mb-1">What's your project about?</label>
                <textarea
                  name="projectDetails"
                  value={formData.projectDetails}
                  onChange={handleChange}
                  placeholder="Enter here"
                  rows="4"
                  className="w-full p-2 border border-gray-300 rounded"
                  required
                ></textarea>
              </div>
              
              <button
                type="submit"
                className="w-full bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-4 rounded flex items-center justify-center"
              >
                Submit
                <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                </svg>
              </button>
            </form>
          </div>
        </div>
      </div>


    </div>



{/* second section */}

<section className="px-6 md:px-16 py-10  flex items-center justify-center w-full">
      {/* Heading */}
      <div className='w-[70rem]'>
      <h2 className="text-xl md:text-4xl font-semibold text-blue-600 ">
        #1 <span className="text-blue-500">Education App Development Company</span>
      </h2>
      <p className="text-lg md:text-2xl font-medium mt-2">
        Impacting <span className="font-bold">20+ Million</span> Students and Trainers Worldwide
      </p>

      {/* Main Content */}
      <div className="mt-8 flex flex-col md:flex-row items-center gap-6">
     

        {/* Left Image Card */}
        <div className="w-full md:w-1/2  ">

      
<div className="w-[25rem] h-[18rem] bg-[url('/IndusEdu/Image2.svg')] bg-cover rounded-lg ">


</div>

          
        </div>

        {/* Right Statistics Cards */}
        <div className="grid grid-cols-2 gap-4 w-full md:w-1/2">
          <div className="bg-gray-100 p-4 rounded-lg text-center shadow">
            <p className="text-xl font-bold">20+</p>
            <p className="text-sm">Education Startups</p>
          </div>
          <div className="bg-gray-100 p-4 rounded-lg text-center shadow">
            <p className="text-xl font-bold">60+</p>
            <p className="text-sm">Education Consultation Apps</p>
          </div>
          <div className="bg-gray-100 p-4 rounded-lg text-center shadow">
            <p className="text-xl font-bold">120 Mn</p>
            <p className="text-sm">Funding Raised For Startups</p>
          </div>
          <div className="bg-gray-100 p-4 rounded-lg text-center shadow">
            <p className="text-xl font-bold">10+</p>
            <p className="text-sm">Years of Industry Experience</p>
          </div>
        </div>
      </div>
      </div>
    </section>



    {/* Third Section */}

<div className='flex flex-col justify-center items-center gap-20 py-10 '>

<div className='flex flex-col justify-center items-center'>
<h2 className="text-xl md:text-2xl font-semibold text-blue-600 underline">
        #1 <span className="text-blue-500">Education App Development Company</span>
      </h2>
      <p className="text-lg md:text-xl font-medium mt-2">
        Impacting <span className="font-bold">20+ Million</span> Students and Trainers Worldwide
      </p>

</div>

  <div className=" left-0 right-0   w-full flex justify-center">
    <Image
      src="/IndusEdu/Image3.png"
      alt="E-commerce Website Mockup on Multiple Devices"
      width={1200}
      height={600}
      priority
      className=" w-[30rem] px-5 sm:w-[35rem] md:w-[45rem] lg:w-[55rem] 2xl:w-[1200px]"
    />
  </div>

</div>





{/* Third Section */}


<div className="flex flex-col sm:flex-row items-center justify-between gap-8 mt-2 md:mt-5 sm:px-10 bg-gradient-to-r from-[#0A132B] to-[#224091] rounded-xl text-white max-w-6xl p-5">
        {/* Left content */}
        <ScrollReveal animation='slightRight' duration={800} className="w-full md:w-[60%] space-y-4 ">
          
          <h3 className="text-3xl md:text-4xl font-bold">Vendor Panel</h3>
          <p className="text-lg">
          Empower your vendors with an easy-to-operate merchant panel, allowing them to manage customer interactions, track orders, view transaction details, and more. Give them the tools they need to thrive in a digital-first world.
          </p>
          
         
        </ScrollReveal>
        
        {/* Right image */}
<ScrollReveal animation='slightLeft' duration={800}>
        <Image
           src="/IndusEdu/Image4.png"
            alt="Calendar App"
            width={320}
            height={300}
           
            className="p-1 w-[250px] md:w-[200px] lg:w-[320px]"
          />
          </ScrollReveal>
        </div>


    </div>
  );
};

export default EdTechLandingPage;