import React from 'react';
import Image from 'next/image';
import Link from "next/link";

const Footer = () => {
  return (
<>
 
    <footer className="bg-gradient-to-br from-blue-50 to-blue-100 py-8 border-t border-black">
      
      <div className="container mx-auto px-4">
        {/* Logo */}
        <div className="mb-12 flex items-center md:items-start justify-center md:justify-start">
         <Link href="#">
         <Image 
            src="/Innovetixlogo.png" 
            alt="Innovetix Logo" 
            width={200} 
            height={60} 
            className="h-12 w-auto"
          />
         </Link>
        </div>

        {/* Main Navigation Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-10">
          {/* Company Section */}
          <div className="flex flex-col space-y-3  items-center md:items-start ">
            <h3 className="text-xl font-semibold mb-4">Company</h3>
            <Link href="#" className="hover:text-blue-600 transition-colors">About us</Link>
            <Link href="#" className="hover:text-blue-600 transition-colors">Contact us</Link>
            <Link href="#" className="hover:text-blue-600 transition-colors">Partnership</Link>
          </div>

          {/* Product Section */}
          <div className="flex flex-col space-y-3 items-center md:items-start ">
            <h3 className="text-xl font-semibold mb-4">Product</h3>
            <Link href="#" className="hover:text-blue-600 transition-colors">Intelligence</Link>
            <Link href="#" className="hover:text-blue-600 transition-colors">Studio</Link>
            <Link href="#" className="hover:text-blue-600 transition-colors">Start up</Link>
            <Link href="#" className="hover:text-blue-600 transition-colors">Apps</Link>
          </div>

          {/* Services Section */}
          <div className="flex flex-col space-y-3 items-center md:items-start ">
            <h3 className="text-xl font-semibold mb-4">Services</h3>
            <Link href="#" className="hover:text-blue-600 transition-colors">Ideation & Design</Link>
            <Link href="#" className="hover:text-blue-600 transition-colors">Mobile App Development</Link>
            <Link href="#" className="hover:text-blue-600 transition-colors">Web Development</Link>
            <Link href="#" className="hover:text-blue-600 transition-colors">AI Development</Link>
            <Link href="#" className="hover:text-blue-600 transition-colors">Data science</Link>
            <Link href="#" className="hover:text-blue-600 transition-colors">Business Analytics</Link>
          </div>

          {/* Industries Section */}
          <div className="flex flex-col space-y-3 items-center md:items-start ">
            <h3 className="text-xl font-semibold mb-4">Industries</h3>
            <Link href="#" className="hover:text-blue-600 transition-colors">Food & Beverage</Link>
            <Link href="#" className="hover:text-blue-600 transition-colors">E-commerce</Link>
            <Link href="#" className="hover:text-blue-600 transition-colors">Education</Link>
            <Link href="#" className="hover:text-blue-600 transition-colors">Healthcare</Link>
            <Link href="#" className="hover:text-blue-600 transition-colors">Dating & Social Media</Link>
          </div>

          {/* Resources Section */}
          <div className="flex flex-col space-y-3 items-center md:items-start ">
            <h3 className="text-xl font-semibold mb-4">Resources</h3>
            <Link href="#" className="hover:text-blue-600 transition-colors">Blog</Link>
            <Link href="#" className="hover:text-blue-600 transition-colors">Case Studies</Link>
            <Link href="#" className="hover:text-blue-600 transition-colors">Videos</Link>
            <Link href="#" className="hover:text-blue-600 transition-colors">Industry Report</Link>
            <Link href="#" className="hover:text-blue-600 transition-colors">Info Graphic</Link>
            <Link href="#" className="hover:text-blue-600 transition-colors">Features Book</Link>
          </div>
        </div>

        {/* Social Media and Copyright Section */}
        <div className="border-t border-[#2E3F9899] pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex flex-col space-y-4">
              <h3 className="text-xl font-semibold flex items-center md:items-start justify-center">Get Connected</h3>
              <div className="flex space-x-4">
               
              
               <Link href="#" className="w-[3rem] flex items-center justify-center  border border-white/40 shadow-lg p-1 rounded-lg text-white">
               <Image 
            src="/FB.svg" 
            alt="Innovetix Logo" 
            width={40} 
            height={30} 
            className=" w-auto hover:scale-110 transition-transform duration-300 ease-in-out"
          />
                </Link>
              

                <Link href="#" className="w-[3rem] flex items-center justify-center border border-white/40 shadow-lg p-1 rounded-lg text-white">
                <Image 
            src="/Tweet.svg" 
            alt="Innovetix Logo" 
            width={40} 
            height={30} 
            className=" w-auto hover:scale-110 transition-transform duration-300 ease-in-out"
          />
                </Link>
              
                <Link href="#" className="w-[3rem] flex items-center justify-center border border-white/40 shadow-lg p-1 rounded-lg text-white">
              
               <Image 
            src="/Pintu.svg" 
            alt="Innovetix Logo" 
            width={40} 
            height={30} 
            className=" w-auto hover:scale-110 transition-transform duration-300 ease-in-out"
          />

                 
                </Link>
              
                <Link href="#" className=" w-[3rem] flex items-center justify-center border border-white/40 shadow-lg p-1 rounded-lg text-blue-600">
              
               <Image 
            src="/Insta.svg" 
            alt="Innovetix Logo" 
            width={25} 
            height={30} 
            className="hover:scale-110 transition-transform duration-300 ease-in-out "
          />

                </Link>
              
                <Link href="#" className=" w-[3rem] flex items-center justify-center border border-white/40 shadow-lg p-1 rounded-lg text-blue-600">
                <div className="absolute  bg-blue-600 opacity-70"></div>
               <Image 
            src="/YT.svg" 
            alt="Innovetix Logo" 
            width={35} 
            height={30} 
            className=" hover:scale-110 transition-transform duration-300 ease-in-out"
          />

                 
                </Link>
              
              </div>
            </div>
            
            <div className="flex flex-wrap justify-center md:justify-end items-center px-8 gap-4 text-xl font-semibold text-blue-600">
              <span>© Copyright 2025 Innovetix Global Pvt Ltd</span>
              <Link href="#" className="hover:text-blue-600 transition-colors">Cookies Policy</Link>
              <Link href="#" className="hover:text-blue-600 transition-colors">Terms & Conditions</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
    </>
  );
};

export default Footer;