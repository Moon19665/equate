'use client';
import { useState } from 'react';

export default function MidSizeHero() {
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Email submitted:', email);
  };

  return (
    <section className="w-full ">
      <div className="max-w-[1920px] mx-auto px-3 md:px-12 py-16 lg:py-24">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Left Column: Text + Form */}
          <div className="w-full lg:w-1/2">
            <h1 className="text-4xl lg:text-5xl xl:text-6xl font-semibold leading-tight mb-6">
              Keep spend in control for your next stage of growth.
            </h1>

            <p className="text-lg lg:text-xl  mb-8 leading-relaxed">
              Equate is a complete T&E solution with cards, travel, expense management, and reimbursements.
            </p>

            <form onSubmit={handleSubmit} className="w-full max-w-lg">
              <div className="flex w-full py-2 rounded-xl border border-gray-200 bg-white overflow-hidden">
                <input
                  type="email"
                  placeholder="Enter your work email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="flex-1 px-5 py-3 text-sm text-black bg-transparent border-none outline-none focus:ring-0 placeholder:text-gray-500"
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
            <div className="rounded-2xl overflow-hidden ">
              <img
                src="/assets/midsize/bg-hero.png"
                alt="Equate financial platform interface"
                className="w-full h-full object-contain bg-white p-2 object-center"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
