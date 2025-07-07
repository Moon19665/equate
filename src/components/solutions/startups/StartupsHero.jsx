'use client'
import { useState } from 'react';

export default function StartupsHero() {
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log('Email submitted:', email);
  };

  return (
    <div className="relative min-h-screen w-full">
      {/* Desktop Layout - Background Image */}
      <div className="hidden lg:block relative min-h-screen">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('https://brand.brex.com/transform/e6c65c4c-f249-445b-b114-36a45a550d37/Startups-Header-Desktop?io=transform:fit,width:3000,height:1429&quality=95')`
          }}
        >
          {/* Overlay for better text readability if needed */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/20 to-transparent"></div>
        </div>
        
        {/* Content Overlay */}
        <div className="relative z-10 flex items-center min-h-screen">
          <div className="max-w-[1920px] mx-auto px-3 md:px-12 lg:px-8 w-full">
            <div className="max-w-xl">
              <h1 className="text-4xl lg:text-5xl xl:text-7xl font-semibold text-white leading-tight mb-6">
                The financial stack that scales with you.
              </h1>
              
              <p className="text-lg lg:text-xl text-gray-200 mb-8 leading-relaxed">
                Get business banking, card, bill pay, travel, and reimbursements — all in one scalable solution.
              </p>
              
              <form className="mt-8  max-w-lg">
            <div className="flex w-full py-1 rounded-xl border border-gray-200 bg-white overflow-hidden">
              <input
                type="email"
                placeholder="Enter your work email"
                className="flex-1 px-5 py-3 text-xs bg-transparent border-none outline-none focus:ring-0 placeholder:text-gray-500"
                
              />
              <button
                type="submit"
                className="px-4 mr-2 bg-[#ff6600] hover:bg-[#ff5500] text-white  text-[12px] transition-colors duration-200  rounded-md"
                
              >
                Get started
              </button>
            </div>
          </form>
              
            
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Layout - Split Sections */}
      <div className="lg:hidden">
        {/* Content Section */}
        <div className="bg-gradient-to-br from-emerald-900 via-teal-900 to-gray-900 px-6 py-12">
          <div className="max-w-lg mx-auto">
            <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-6">
              The financial stack that scales with you.
            </h1>
            
            <p className="text-lg text-gray-200 mb-8 leading-relaxed">
              Get business banking, card, bill pay, travel, and reimbursements — all in one scalable solution.
            </p>
            
            <form className="mt-8 w-full max-w-xl">
            <div className="flex w-full py-2 rounded-xl border border-gray-200 bg-white overflow-hidden">
              <input
                type="email"
                placeholder="Enter your work email"
                className="flex-1 px-5 py-3 text-base bg-transparent border-none outline-none focus:ring-0 placeholder:text-gray-500"
                
              />
              <button
                type="submit"
                className="px-4 mr-2 bg-[#ff6600] hover:bg-[#ff5500] text-white  text-[14px] transition-colors duration-200  rounded-md"
                
              >
                Get started
              </button>
            </div>
          </form>
            
            <p className="text-sm text-gray-300 leading-relaxed">
              Brex is a financial technology company, not a bank. Checking and banking services provided by Column N.A., Member FDIC.
            </p>
          </div>
        </div>

        {/* Image Section */}
        <div className="relative h-96 sm:h-[500px]">
          <img
            src="https://brand.brex.com/transform/be06afeb-51c5-4e80-81f2-1268c72d177a/Startups-Header-Mobile?io=transform:fit,width:1000,height:769&quality=95"
            alt="Brex financial platform interface"
            className="w-full h-full object-cover object-center"
          />
        </div>
      </div>
    </div>
  );
}
