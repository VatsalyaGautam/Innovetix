'use client';

import { useState } from 'react';
import { Menu, X } from 'lucide-react';

const MobileMenuButton = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button
        id="menu-button"
        onClick={() => setIsOpen(!isOpen)}
        className="p-3 ml-2 font-semibold rounded-lg text-white md:hidden bg-purple-600 border-1 hover:bg-gray-100 animate-pulse"
      >
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {isOpen && (
        <div className="fixed z-10 inset-x-0 top-20 bg-white border-b border-gray-200 lg:hidden h-[100vh] animate-slide-down">
          <div className="px-4 py-2 space-y-1 mt-5">
            <a href="#" className="block px-3 py-2 text-black hover:bg-gray-100">
              Home
            </a>
            <a href="#" className="block px-3 py-2 text-black hover:bg-gray-100">
              About
            </a>
            <a href="#" className="block px-3 py-2 text-black hover:bg-gray-100">
              Product
            </a>
            <a href="#" className="block px-3 py-2 text-black hover:bg-gray-100">
              Industries
            </a>
            <a href="#" className="block px-3 py-2 text-black hover:bg-gray-100">
              Services
            </a>
            <a href="#" className="block px-3 py-2 text-black hover:bg-gray-100">
              Solution
            </a>
          </div>
        </div>
      )}
    </>
  );
};

export default MobileMenuButton;
