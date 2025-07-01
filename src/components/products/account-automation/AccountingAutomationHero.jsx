'use client';

import { useState } from 'react';

export default function AccountingAutomationHero() {
  const [email, setEmail] = useState('');

  return (
    <section className="relative min-h-screen overflow-hidden">
      {/* Desktop Background Image */}
      <div 
        className="hidden lg:block absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('https://brand.brex.com/transform/4746bcbb-713e-441a-b9ea-dbef8078ebe3/accounting-hero_june2024?io=transform:fit,width:3000,height:2033&quality=95')`
        }}
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
                className="px-4 mr-2 bg-[#ff6600] hover:bg-[#ff5500] text-white  text-[14px] transition-colors duration-200  rounded-md"
                
              >
                Get started
              </button>
            </div>
          </form>
          </div>
        </div>
        
        {/* Mobile Image Section */}
        <div 
          className="h-96 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('https://brand.brex.com/transform/60fc41a5-0e69-44ad-9b30-dfb4ccdf57b9/accounting-hero-mobile-june-2024?io=transform:fit,width:1000,height:874&quality=95')`
          }}
        />
      </div>

      {/* Desktop Layout */}
      <div className="hidden lg:block relative z-10 h-screen">
        <div className="max-w-7xl mx-auto px-6 h-full flex items-center">
          <div className="w-1/2">
            <h1 className="text-4xl xl:text-5xl font-bold text-white leading-tight mb-6">
              Stop taking weeks to close your books when you can take minutes.
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-lg">
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
                className="px-4 mr-2 bg-[#ff6600] hover:bg-[#ff5500] text-white  text-[14px] transition-colors duration-200  rounded-md"
                
              >
                Get started
              </button>
            </div>
          </form>
          </div>
          
          {/* Desktop Visual Elements (Right Side) */}
          <div className="w-1/2 relative flex items-center justify-center">
            {/* Accruals Notification */}
            <div className="absolute top-1/4 right-1/4 bg-black/80 text-white px-4 py-2 rounded-lg border border-gray-600 flex items-center gap-2">
              <svg className="w-4 h-4 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              <span className="text-sm font-medium">210 prepared as accruals</span>
            </div>
            
            {/* Circular Elements with Logos */}
            <div className="flex items-center gap-8">
              {/* Left Logo Circle */}
              <div className="w-20 h-20 bg-black rounded-full flex items-center justify-center border-2 border-gray-600">
                <div className="w-8 h-8 bg-white rounded flex items-center justify-center">
                  <span className="text-black font-bold text-lg">P</span>
                </div>
              </div>
              
              {/* Connecting Arrow */}
              <div className="flex items-center">
                <svg className="w-8 h-4 text-gray-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path d="M7 17l9.2-9.2M17 17H7V7" />
                </svg>
              </div>
              
              {/* Right Logo Circle (NetSuite) */}
              <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center border-2 border-gray-300">
                <div className="text-center">
                  <div className="text-xs font-bold text-gray-800">ORACLE</div>
                  <div className="text-sm font-bold text-gray-800">NetSuite</div>
                </div>
              </div>
            </div>
            
            {/* Background Circular Elements */}
            <div className="absolute inset-0 pointer-events-none">
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 border border-gray-600/30 rounded-full"></div>
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 border border-gray-600/20 rounded-full"></div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Gradient Overlay for better text readability */}
      <div className="hidden lg:block absolute inset-0 bg-gradient-to-r from-black/60 via-transparent to-transparent pointer-events-none" />
    </section>
  );
}
