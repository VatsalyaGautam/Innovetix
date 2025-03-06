"use client"
import { React,  useState } from 'react';
import PhoneInputWithCountrySelector from '@/components/Industries/Healthcare/FlagInput'
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

  <div className=" max-w-[100%] mx-auto flex flex-col md:flex-row items-center sm:items-start lg:items-center justify-around px-6 sm:px-3 lg:px-6 py-12 mt-16 sm:mt-20 2xl:mt-24 z-10">
        
  {/* Left Section - Text Content */}
  <ScrollReveal animation='slightRight' duration={800} className="md:w-1/2 mb-12 md:mb-0 flex flex-col justify-evenly md:justify-start lg:h-[35rem] lg:space-y-10 pt-4 lg:pt-0">
   <div className='lg:mt-10 xl:mt-0'>
   <h1 className="text-4xl sm:text-3xl  xl:text-5xl font-bold mb-6 2xl:mt-6">
      Looking For An Education App Development Company?
    </h1>
    <p className="text-xl lg:mb-10">
      We build next-level educational apps that empower educators and learners, both.
    </p>
   </div>
    
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
  </ScrollReveal>
  
  {/* Right Section - Form */}
  <ScrollReveal animation='fadeIn' duration={800} className=" w-[100%] sm:w-auto xl:w-[35%] 2xl:w-[30%] flex justify-center items-center lg:block">
    <div className="bg-white p-4 xl:p-6 rounded-lg shadow-lg text-gray-800 w-full sm:w-auto">
      <h2 className="text-2xl font-bold mb-2 lg:mb-6 text-gray-900">Launch Your Dream EdTech App</h2>
      
      <form onSubmit={handleSubmit}>
        <div className="mb-2 xl:mb-4">
          <label className="block text-gray-700 text-sm font-medium mb-1">Name</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="abc"
            className="w-full p-2 border border-gray-300 rounded-md"
            required
          />
        </div>
        
        <div className="mb-2 xl:mb-4">
          <label className="block text-gray-700 text-sm font-medium mb-1">Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="example@gmail.com"
            className="w-full p-2 border border-gray-300 rounded-md"
            required
          />
        </div>
        
        <div className="mb-2 xl:mb-4">
          <label className="block text-gray-700 text-sm font-medium mb-1">Phone</label>
         <PhoneInputWithCountrySelector/>
        </div>
        
        <div className="mb-2 xl:mb-6">
          <label className="block text-gray-700 text-sm font-medium mb-1">What's your project about?</label>
          <textarea
            name="projectDetails"
            value={formData.projectDetails}
            onChange={handleChange}
            placeholder="Enter here"
            rows="4"
            className="w-full p-2 border border-gray-300 rounded-md "
            required
          ></textarea>
        </div>
        
        <button
          type="submit"
          className="w-full bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-4 rounded-md flex items-center justify-center"
        >
          Submit
          <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
          </svg>
        </button>
      </form>
    </div>
  </ScrollReveal>
</div>

  )
}

export default EdTechLandingPage;