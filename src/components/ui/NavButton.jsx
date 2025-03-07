'use client';

import { useState, useEffect, useRef } from 'react';
import { Menu, X, ChevronDown, ChevronUp } from 'lucide-react';
import Link from "next/link";
import ScrollReveal from '@/components/ScrollReveal'; // Adjust the import path as needed

const MobileMenuButton = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [dropdowns, setDropdowns] = useState({
    products: false,
    industries: false,
    services: false
  });
  const menuRef = useRef(null);

  // Handle menu open/close with animation
  useEffect(() => {
    if (isOpen) {
      setIsVisible(true);
    } else {
      // When closing, wait for animation to complete before hiding
      const timer = setTimeout(() => {
        setIsVisible(false);
      }, 300); // Match this to your animation duration
      return () => clearTimeout(timer);
    }
  }, [isOpen]);

  const toggleDropdown = (dropdown) => {
    setDropdowns({
      ...dropdowns,
      [dropdown]: !dropdowns[dropdown]
    });
  };
  
  // Close menu when a link is clicked
  const handleLinkClick = () => {
    setIsOpen(false);
  };

  return (
    <>
      <button
        id="menu-button"
        onClick={() => setIsOpen(!isOpen)}
        className="p-2 ml-2 font-semibold rounded-lg text-white md:hidden bg-purple-800 border-1 hover:bg-purple-800"
      >
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {isVisible && (
        <div 
          ref={menuRef}
          className={`fixed z-10 inset-x-0 top-20 bg-white border-b border-gray-200 lg:hidden h-[100vh] overflow-y-auto transition-all duration-300 transform ${
            isOpen ? "translate-y-0 opacity-100" : "-translate-y-10 opacity-0"
          }`}
        >
          <div className="px-4 py-2 space-y-1 mt-5">
            <ScrollReveal animation="slightRight" duration={400} easing="spring">
              <Link href="/" onClick={handleLinkClick} 
                  className="block px-3 py-2 text-black hover:bg-gray-100">
                Home
              </Link>
            </ScrollReveal>
            
            <ScrollReveal animation="slightRight" duration={400} delay={50} easing="spring">
              <Link href="/about" onClick={handleLinkClick}
                  className="block px-3 py-2 text-black hover:bg-gray-100">
                About
              </Link>
            </ScrollReveal>

            {/* Products Dropdown */}
            <ScrollReveal animation="slightRight" duration={400} delay={100} easing="spring">
              <div className="border-b border-gray-100">
                <button 
                  onClick={() => toggleDropdown('products')}
                  className="flex justify-between items-center w-full px-3 py-2 text-black hover:bg-gray-100"
                >
                  Products
                  {dropdowns.products ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                </button>
                {dropdowns.products && (
                  <div className="pl-6 py-1 bg-gray-50 transition-all duration-200 ease-in-out">
                    <ScrollReveal animation="fadeIn" duration={300} easing="gentle">
                      <Link href="/product/intelligence" onClick={handleLinkClick} className="block px-3 py-2 text-gray-800 hover:bg-gray-100">
                        Intelligence
                      </Link>
                      <Link href="/product/studio" onClick={handleLinkClick} className="block px-3 py-2 text-gray-800 hover:bg-gray-100">
                        Studio
                      </Link>
                      <Link href="/product/startup" onClick={handleLinkClick} className="block px-3 py-2 text-gray-800 hover:bg-gray-100">
                        Startup
                      </Link>
                      <Link href="/product/apps" onClick={handleLinkClick} className="block px-3 py-2 text-gray-800 hover:bg-gray-100">
                        Apps
                      </Link>
                    </ScrollReveal>
                  </div>
                )}
              </div>
            </ScrollReveal>

            {/* Industries Dropdown */}
            <ScrollReveal animation="slightRight" duration={400} delay={150} easing="spring">
              <div className="border-b border-gray-100">
                <button 
                  onClick={() => toggleDropdown('industries')}
                  className="flex justify-between items-center w-full px-3 py-2 text-black hover:bg-gray-100"
                >
                  Industries
                  {dropdowns.industries ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                </button>
                {dropdowns.industries && (
                  <div className="pl-6 py-1 bg-gray-50 transition-all duration-200 ease-in-out">
                    <ScrollReveal animation="fadeIn" duration={300} easing="gentle">
                      <Link href="/industy/food" onClick={handleLinkClick} className="block px-3 py-2 text-gray-800 hover:bg-gray-100">
                        Food & Beverages
                      </Link>
                      <Link href="/industries/ecommerce" onClick={handleLinkClick} className="block px-3 py-2 text-gray-800 hover:bg-gray-100">
                        Ecommerce
                      </Link>
                      <Link href="/industry/dating" onClick={handleLinkClick} className="block px-3 py-2 text-gray-800 hover:bg-gray-100">
                        Dating & Social Media
                      </Link>
                      <Link href="/industries/education" onClick={handleLinkClick} className="block px-3 py-2 text-gray-800 hover:bg-gray-100">
                        Education
                      </Link>
                      <Link href="/industries/healthcare" onClick={handleLinkClick} className="block px-3 py-2 text-gray-800 hover:bg-gray-100">
                        Health & Care
                      </Link>
                    </ScrollReveal>
                  </div>
                )}
              </div>
            </ScrollReveal>

            {/* Services Dropdown */}
            <ScrollReveal animation="slightRight" duration={400} delay={200} easing="spring">
              <div className="border-b border-gray-100">
                <button 
                  onClick={() => toggleDropdown('services')}
                  className="flex justify-between items-center w-full px-3 py-2 text-black hover:bg-gray-100"
                >
                  Services
                  {dropdowns.services ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                </button>
                {dropdowns.services && (
                  <div className="pl-6 py-1 bg-gray-50 transition-all duration-200 ease-in-out">
                    <ScrollReveal animation="fadeIn" duration={300} easing="gentle">
                      <Link href="#" onClick={handleLinkClick} className="block px-3 py-2 text-gray-800 hover:bg-gray-100">
                        Service 1
                      </Link>
                      <Link href="#" onClick={handleLinkClick} className="block px-3 py-2 text-gray-800 hover:bg-gray-100">
                        Service 2
                      </Link>
                      <Link href="#" onClick={handleLinkClick} className="block px-3 py-2 text-gray-800 hover:bg-gray-100">
                        Service 3
                      </Link>
                    </ScrollReveal>
                  </div>
                )}
              </div>
            </ScrollReveal>

            <ScrollReveal animation="slightRight" duration={400} delay={250} easing="spring">
              <Link href="#" onClick={handleLinkClick}
                  className="block px-3 py-2 text-black hover:bg-gray-100">
                Solution
              </Link>
            </ScrollReveal>
          </div>
        </div>
      )}
    </>
  );
};

export default MobileMenuButton;