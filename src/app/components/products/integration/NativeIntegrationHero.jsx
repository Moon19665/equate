'use client';

import { useState } from 'react';

export default function NativeIntegrationHero() {
  const [email, setEmail] = useState('');

  return (
    <section className="w-full bg-[#fafbfc] py-16 px-4">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
        {/* Left: Content */}
        <div className="w-full md:w-1/2 flex flex-col items-start justify-center mb-10 md:mb-0">
          <h1 className="text-3xl md:text-5xl font-bold text-black mb-6 leading-tight">
            Simplify your<br className="hidden md:block" />
            workflow with<br className="hidden md:block" />
            Brex integrations.
          </h1>
          <p className="text-gray-700 text-base md:text-lg mb-8 max-w-lg">
            Free up your team with an unparalleled set of automatic classifications, customizations, and export options to fit your accounting needs, as well as top HRIS integrations.
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
        </div>
        {/* Right: Image */}
        <div className="w-full md:w-1/2 flex justify-center items-center">
          <img
            src="https://brand.brex.com/transform/c56c68d8-f1ef-4c5f-bb9a-c74a8ca5c39c/dif-eco-hero-image-v2?io=transform:fit,width:2000,height:1653&quality=95"
            alt="Brex Integrations Illustration"
            className="w-full max-w-md h-auto object-contain"
            loading="lazy"
          />
        </div>
      </div>
    </section>
  );
}
