'use client';
import { useState } from 'react';

export default function StartupsHero() {
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Email submitted:', email);
  };

  return (
    <section className="relative max-w-[1920px] mx-auto px-3 md:px-12 ">
      <div className="flex flex-col lg:flex-row items-center justify-between  py-12 gap-8">
        {/* Left: Content */}
        <div className="w-full lg:w-1/2 flex flex-col justify-start">
          <h1 className="text-4xl sm:text-5xl xl:text-6xl font-semibold leading-tight mb-6">
            The financial stack that scales with you.
          </h1>

          <p className="text-lg sm:text-xl  mb-8 leading-relaxed">
            Get business banking, card, bill pay, travel, and reimbursements — all in one scalable solution.
          </p>

          <form onSubmit={handleSubmit} className="w-full ">
            <div className="flex w-full py-2 rounded-xl border border-gray-200 bg-white overflow-hidden">
              <input
                type="email"
                placeholder="Enter your work email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-1 px-5 py-3 text-sm sm:text-base text-black bg-transparent border-none outline-none focus:ring-0 placeholder:text-gray-500"
              />
              <button
                type="submit"
                className="px-4 mr-2 bg-[#033175] text-white text-sm sm:text-[14px] transition-colors duration-200 rounded-md"
              >
                Get started
              </button>
            </div>
          </form>

          <p className="text-sm text-gray-400 mt-4">
            Brex is a financial technology company, not a bank. Checking and banking services provided by Column N.A., Member FDIC.
          </p>
        </div>

        {/* Right: Image */}
        <div className="w-full lg:w-1/2">
          <div className="rounded-2xl overflow-hidden ">
            <img
              src="/assets/startups/hero-bg.png"
              alt="Brex financial platform interface"
              className="w-full h-full object-cover object-center"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
