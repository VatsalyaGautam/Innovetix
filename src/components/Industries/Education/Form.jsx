"use client"
import { React, useState } from 'react';
import PhoneInputWithCountrySelector from '@/components/Industries/Healthcare/FlagInput';

const ContactForm = ({ 
  // Form customization props
  formTitle = "Launch Your Dream EdTech App",
  formPara = '',
  formSubmitText = "Submit",
  buttonColorClass = "bg-blue-500 hover:bg-blue-600",
  formSubmitCallback = null,
  placeholders = {
    name: "abc",
    email: "example@gmail.com",
    projectDetails: "Enter here"
  }
}) => {
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
    
    // Use custom callback if provided, otherwise use default behavior
    if (formSubmitCallback && typeof formSubmitCallback === 'function') {
      formSubmitCallback(formData);
    } else {
      alert('Thank you for your submission! We will contact you soon.');
    }
    
    setFormData({
      name: '',
      email: '',
      phone: '',
      projectDetails: ''
    });
  };

  return (
    <div className="bg-white p-4 xl:p-6 rounded-lg shadow-lg text-gray-800 w-full  sm:w-auto  xl:w-[29rem] ">
      <h2 className="text-2xl sm:text-xl lg:text-2xl font-bold  text-gray-900">{formTitle}</h2>
      <h4 className="text-sm mt-2 text-gray-900 mb-2 lg:mb-6">{formPara}</h4>
      
      <form onSubmit={handleSubmit}>
        <div className="mb-2 xl:mb-4">
          <label className="block text-gray-700 text-sm font-medium mb-1">Name</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder={placeholders.name}
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
            placeholder={placeholders.email}
            className="w-full p-2 border border-gray-300 rounded-md"
            required
          />
        </div>
        
        <div className="mb-2 xl:mb-4">
          <label className="block text-gray-700 text-sm font-medium mb-1">Phone</label>
          <PhoneInputWithCountrySelector />
        </div>
        
        <div className="mb-2 xl:mb-6">
          <label className="block text-gray-700 text-sm font-medium mb-1">What's your project about?</label>
          <textarea
            name="projectDetails"
            value={formData.projectDetails}
            onChange={handleChange}
            placeholder={placeholders.projectDetails}
            rows="4"
            className="w-full p-2 border border-gray-300 rounded-md"
            required
          ></textarea>
        </div>
        
        <button
          type="submit"
          className={`w-full ${buttonColorClass} text-white font-medium py-2 px-4 rounded-md flex items-center justify-center`}
        >
          {formSubmitText}
          <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
          </svg>
        </button>
      </form>
    </div>
  );
};

export default ContactForm;