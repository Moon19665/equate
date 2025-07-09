'use client';
import { useState } from 'react';

export default function MidSizeHero() {
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Email submitted:', email);
  };

  return (
    <section className="w-full bg-black text-white">
      <div className="max-w-[1920px] mx-auto px-3 md:px-12 py-16 lg:py-24">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          
          {/* Left Column: Text + Form */}
          <div className="w-full lg:w-1/2">
            <h1 className="text-4xl lg:text-5xl xl:text-6xl font-semibold leading-tight mb-6">
              Optimize your spend on a global scale.
            </h1>
            <p className="text-lg lg:text-xl text-gray-300 mb-8 leading-relaxed">
              Global travel and spend management for unmatched efficiency and control in any market.
            </p>

            <form onSubmit={handleSubmit} className="w-full max-w-md">
              <div className="flex w-full py-2 rounded-xl border border-gray-200 bg-white overflow-hidden">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your work email"
                  className="flex-1 px-5 py-3 text-sm text-black bg-transparent border-none outline-none focus:ring-0 placeholder:text-gray-500"
                  required
                />
                <button
                  type="submit"
                  className="px-4 mr-2 bg-[#033175] text-white text-sm transition-colors duration-200 rounded-md"
                >
                  Get started
                </button>
              </div>
            </form>

            <p className="text-sm text-gray-400 mt-4">
              Equate is a financial technology company, not a bank. Checking and banking services provided by Column N.A., Member FDIC.
            </p>
          </div>

          {/* Right Column: Image */}
          <div className="w-full lg:w-1/2">
            <div className="rounded-2xl overflow-hidden shadow-lg">
              <img
                src="https://brand.brex.com/transform/d9e28e22-e1ee-4f0a-ae37-efd6cce9c857/Enterprise-Header-Mobile?io=transform:fit,width:2000,height:1538&quality=95"
                alt="Equate financial platform interface"
                className="w-full h-full object-cover object-center"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
