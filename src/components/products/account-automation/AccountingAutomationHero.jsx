'use client';

import { useState } from 'react';

export default function AccountingAutomationHero() {
  const [email, setEmail] = useState('');

  return (
    <section className="relative overflow-hidden">
      {/* Desktop Background Image */}
      <div 
        // className="hidden lg:block absolute inset-0 bg-cover bg-center bg-no-repeat"
        // style={{
        //   backgroundImage: `url('https://brand.brex.com/transform/4746bcbb-713e-441a-b9ea-dbef8078ebe3/accounting-hero_june2024?io=transform:fit,width:3000,height:2033&quality=95')`
        // }}
      />
      
      {/* Mobile: Split Layout */}
      <div className="lg:hidden">
        {/* Mobile Content Section */}
        <div className="bg-gradient-to-br from-[#1a4b3a] via-[#2d5a47] to-[#0f1419] px-6 py-12">
          <div className="max-w-md mx-auto">
            <h1 className="text-3xl md:text-4xl font-bold text-white leading-tight mb-6">
              Stop taking weeks to close your books when you can take minutes.
            </h1>
            <p className="text-lg text-gray-300 mb-8">
              Save hours with AI-generated suggestions and close your books every day with native support for accruals — even across multiple entities.
            </p>
            
            {/* Email Form */}
            <form className="mt-8 w-full max-w-xl">
            <div className="flex w-full py-2 rounded-xl border border-gray-200 bg-white overflow-hidden">
              <input
                type="email"
                placeholder="Enter your work email"
                className="flex-1 px-5 py-3 text-base bg-transparent border-none outline-none focus:ring-0 placeholder:text-gray-500"
                
              />
              <button
                type="submit"
                className="px-4 mr-2 bg-[#033175] text-white  text-[14px] transition-colors duration-200  rounded-md"
                
              >
                Get started
              </button>
            </div>
          </form>
          </div>
        </div>
        
        {/* Mobile Image Section */}
        <div 
          className="h-96 bg-contain bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('/assets/automation/accural.png')`
          }}
        />
      </div>

      {/* Desktop Layout */}
      <div className="hidden lg:block relative z-10 ">
        <div className="max-w-7xl mx-auto px-6 h-full flex items-center">
          <div className="w-1/2">
            <h1 className="text-4xl xl:text-5xl font-bold text-white leading-tight mb-6">
              Stop taking weeks to close your books when you can take minutes.
            </h1>
            <p className="text-xl text-gray-500 mb-8 max-w-lg">
              Save hours with AI-generated suggestions and close your books every day with native support for accruals — even across multiple entities.
            </p>
            
            {/* Email Form */}
            <form className="mt-8 w-full max-w-xl">
            <div className="flex w-full py-2 rounded-xl border border-gray-200 bg-white overflow-hidden">
              <input
                type="email"
                placeholder="Enter your work email"
                className="flex-1 px-5 py-3 text-base bg-transparent border-none outline-none focus:ring-0 placeholder:text-gray-500"
                
              />
              <button
                type="submit"
                className="px-4 mr-2 bg-[#033175] text-white  text-[14px] transition-colors duration-200  rounded-md"
                
              >
                Get started
              </button>
            </div>
          </form>
          </div>
          
        {/* Right Side: Replace visuals with image */}
<div className="w-full lg:w-1/2 flex justify-center items-center px-4">
  <img
    src="/assets/automation/accural.png"
    alt="Bill Pay UI"
    className="w-full max-w-md rounded-2xl  object-contain"
  />
</div>

        </div>
      </div>
      
      {/* Gradient Overlay for better text readability */}
      <div className="hidden lg:block absolute inset-0 bg-gradient-to-r from-black/60 via-transparent to-transparent pointer-events-none" />
    </section>
  );
}
