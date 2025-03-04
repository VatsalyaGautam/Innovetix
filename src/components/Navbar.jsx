"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import ShinyButton from "./ui/ShinyButton";
import MobileMenuButton from "./ui/NavButton";

const Navbar = () => {
  const [lastScrollY, setLastScrollY] = useState(0);
  const [shouldHide, setShouldHide] = useState(false);
  
  useEffect(() => {
    // Initialize lastScrollY on mount
    setLastScrollY(window.scrollY);
    
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        // Scrolling down and past 100px - hide navbar
        setShouldHide(true);
      } else if (currentScrollY < lastScrollY) {
        // Scrolling up - show navbar
        setShouldHide(false);
      }
      
      setLastScrollY(currentScrollY);
    };
    
    window.addEventListener('scroll', handleScroll, { passive: true });
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [lastScrollY]);
  
  const navigationItems = [
    { title: "Home", link: "/" },
    { title: "About", link: "#" },
    { 
      title: "Product", 
      link: "#",
      hasDropdown: true,
      dropdownItems: [
        {
          title: "Intelligence",
          description: "Transforming Businesses with Custom AI Solutions",
          icon: "/icons/intelligence-icon.png",
          link: "/product/intelligence"
        },
        {
          title: "Studio",
          description: "Crafting Premium Digital Experiences",
          icon: "/icons/studio-icon.png",
          link: "/product/studio"
        },
        {
          title: "Startup",
          description: "Taking Startups from Zero to One",
          icon: "/icons/startup-icon.png",
          link: "/product/startup"
        },
        {
          title: "Apps",
          description: "AI-Powered App Builder Platform",
          icon: "/icons/apps-icon.png",
          link: "/product/apps"
        }
      ]
    },
    { 
      title: "Industries", 
      link: "#",
      hasDropdown: true,
      dropdownItems: [
        {
          title: "Healthcare",
          description: "Digital solutions for modern healthcare",
          icon: "/icons/healthcare-icon.png",
          link: "/industries/healthcare"
        },
        {
          title: "Ecommerce",
          description: "Innovative fintech platforms",
          icon: "/industries/ecommerce",
          link: "/industries/ecommerce"
        },
        {
          title: "Education",
          description: "EdTech solutions for learning",
          icon: "/icons/education-icon.png",
          link: "/industries/education"
        },
        {
          title: "Dating and Social Media",
          description: "Dating",
          icon: "/icons/manufacturing-icon.png",
          link: "/industry/dating"
        }
      ]
    },
    { title: "Services", link: "#" },
    { title: "Solutions", link: "#" },
  ];

  return (
    <nav 
      className={`
        navbar fixed top-0 left-0 right-0 z-50 w-full bg-black border-b border-gray-800 
        transition-all duration-300 animate-slideInTop
        ${shouldHide ? 'transform -translate-y-full' : 'transform translate-y-0'}
      `}
    >
      <div className="w-full px-2 lg:px-4">
        <div className="flex h-20 items-center justify-between lg:justify-around">
          {/* Left section - Logo */}
          <div className="flex items-center h-full w-[200px] sm:w-[180px] lg:w-[200px] xl:w-[250px]">
            <div className="flex items-center gap-2 w-full h-full xl:p-6">
              <div className="w-full h-full relative flex items-center justify-center">
                <Link href='#'>
                  <Image
                    alt="Innovetix company logo"
                    src="/Innovetixlogo.png"
                    width={226}
                    height={58}
                    className="w-full h-auto"
                    priority
                  />
                </Link>
              </div>
            </div>
          </div>

          {/* Center section - Desktop Navigation */}
          <div className="hidden md:flex items-center justify-center gap-2 lg:gap-7">
            {navigationItems.map((item, index) => (
              <div key={item.title} className="relative group">
                <Link
                  href={item.link}
                  className={`relative p-1 text-sm lg:text-base font-medium text-white hover:bg-slate-900 hover:scale-105 transition-transform duration-300 ease-in-out rounded-md lg:py-3 lg:px-3 ${item.hasDropdown ? 'group' : ''}`}
                >
                  {item.title}
                  {item.hasDropdown && (
                    <span className="inline-block ml-1">
                      <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="m6 9 6 6 6-6"/>
                      </svg>
                    </span>
                  )}
                </Link>
                
                {/* Dropdown Menu */}
                {item.hasDropdown && (
                  <div className="absolute left-1/2 transform -translate-x-1/2 mt-5 w-auto min-w-[650px] bg-white rounded-lg shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 ease-in-out z-50">
                    <div className="relative">
                      {/* Triangle Pointer */}
                      <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 w-4 h-4 bg-white rotate-45"></div>
                      
                      {/* Dropdown Content */}
                      <div className="relative bg-white rounded-lg p-4 grid grid-cols-2 gap-4">
                        {item.dropdownItems.map((dropdownItem, idx) => (
                          <Link href={dropdownItem.link} key={idx} className="flex items-start space-x-4 p-3 rounded-lg hover:bg-gray-100 transition-colors">
                            <div className="flex-shrink-0 w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                              <Image 
                                src={dropdownItem.icon} 
                                alt={`${dropdownItem.title} icon`}
                                width={36}
                                height={36}
                                className="w-9 h-9"
                              />
                            </div>
                            <div>
                              <div className="flex items-center">
                                <h3 className="text-base font-medium text-gray-900">{dropdownItem.title}</h3>
                                <svg className="w-4 h-4 ml-1 text-purple-600" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                  <path d="M5 12h14M12 5l7 7-7 7"/>
                                </svg>
                              </div>
                              <p className="mt-1 text-sm text-gray-600">{dropdownItem.description}</p>
                            </div>
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Right section - Shiny Button + Mobile Menu */}
          <div className="flex items-center ">
            <div>
              <ShinyButton />
            </div>

            {/* Mobile Menu Button (Client Component) */}
            <MobileMenuButton />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
