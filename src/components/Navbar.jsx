"use client";
import { useState } from "react";
import { Menu, X, LogIn } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import ShinyButton from "./ui/ShinyButton"
const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  // const [showSearch, setShowSearch] = useState(false);

  const menuItems = [
    "Home",
    "About",
    "Product",
    "Industries",
    "Services",
    "Solution",
  ];

  const navigationItems = [
    { title: "Home", link: "/" },
    { title: "About", link: "#" },
    { title: "Product", link: "#" },
    { title: "Industries", link: "#" },
    { title: "Services", link: "#" },
    { title: "Solution", link: "#" },
  ];

  return (
    <nav className="w-full bg-white border-b border-gray-200">
      <div className="w-full  px-2 lg:px-4">
        <div className="flex h-20 items-center justify-between lg:justify-around">
          {/* Left section */}
          <div className="flex items-center h-full w-[200px] sm:w-[180px] lg:w-[200px] xl:w-[250px]">
            <div className="flex items-center gap-2 w-full h-full xl:p-3">
              <div className="w-full h-full relative flex items-center justify-center">
               <Link href='#'>
               <Image
                  alt="Careertronic company logo"
                  src="/Innovetixlogo.png"
                  width={226}
                  height={58}
                  className="w-full h-auto "
                />
               </Link>
              </div>
            </div>
          </div>

          {/* Center section - Desktop Navigation */}
          <div className="hidden md:flex items-center justify-center gap-2 lg:gap-7">
            {navigationItems.map((item) => (
              <Link
                key={item.title}
                href={item.link}
                className="relative p-1 text-sm lg:text-base font-medium text-black hover:bg-slate-100 hover:scale-105 transition-transform duration-300 ease-in-out rounded-md py-3 px-3"
              >
                {item.title}
              </Link>
            ))}
          </div>

          {/* Right section */}
          <div className="flex items-center ">
            <div className="relative flex items-center">
              {/* Search button and input */}

             

              {/* Collapsible search input */}
            </div>

            {/* Login button */}
           < ShinyButton/>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-3 ml-2 font-semibold rounded-lg text-white  md:hidden bg-purple-600 border-1 hover:bg-gray-100"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`fixed z-10 inset-x-0 top-20 bg-white border-b border-gray-200 lg:hidden transition-all duration-300 ease-in-out h-[100vh] ${
            isMenuOpen ? "opacity-100 visible" : "opacity-0 invisible"
          }`}
          style={{ maxHeight: isMenuOpen ? "100vh" : "0" }}
        >
          <div className="px-4 py-2 space-y-1 mt-5">
            {menuItems.map((item, index) => (
              <Link
                key={`${item}-${index}`}
                href="#"
                className={`block px-3 py-2 rounded-lg text-base font-medium transition-colors w-[5rem] text-center ${
                  index === 2
                    ? "text-black hover:bg-gray-100"
                    : index === menuItems.length - 1
                    ? "text-black hover:bg-gray-100"
                    : "text-black hover:bg-gray-100"
                }`}
              >
                {item}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
