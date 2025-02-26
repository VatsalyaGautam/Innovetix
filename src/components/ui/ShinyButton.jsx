import React from 'react';

const ShinyButton = () => {
  return (
    <button className="bg-purple-800 text-white  font-medium overflow-hidden relative px-4 py-2 rounded-md hover:brightness-95  active:opacity-75 outline-none duration-300 group">
      {/* Vertical Shadow */}
      <span className="bg-purple-400 shadow-slate-100 absolute right-0 -mt-12 h-32 w-8 translate-x-12 rotate-12 opacity-30 -z-10 duration-1000 ease-out group-hover:-translate-x-24  transition-all" />
      


      <span className="" />


      Get in touch
    </button>
  );
};

export default ShinyButton;
