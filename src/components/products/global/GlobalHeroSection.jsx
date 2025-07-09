'use client';

import { useState } from 'react';

export default function GlobalHeroSection() {
  const [email, setEmail] = useState('');

  return (
    <section className="relative  w-full overflow-hidden">
      {/* Desktop Background Image */}
      <div className="hidden md:block absolute inset-0 z-0">
        <img
          src="/assets/global/global-bg.png"
          alt="Global Hero Desktop"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/30 to-transparent"></div>
      </div>

      {/* Mobile Background Image */}
      <div className="md:hidden absolute inset-0 z-0">
        <img
          src="/assets/global/global-bg.png"
          alt="Global Hero Mobile"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50"></div>
      </div>

     

      {/* Desktop Content */}
      <div className="hidden md:flex relative z-10 flex-col justify-center min-h-screen pl-24">
        <div className="max-w-xl pt-32 md:pt-0">
          <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold text-white mb-4 leading-tight drop-shadow-lg">
            Spend globally.<br />Operate locally.
          </h1>
          <p className="text-base md:text-lg text-white mb-8 max-w-lg drop-shadow-lg">
            Local is the new global. Operate anywhere with local-currency cards, reimbursements, and billing — in Canadian Dollar, Euro, Pound, Real, Shekel, Rupee, Yen, and more.
          </p>
          <form className="mt-8 w-full max-w-xl">
            <div className="flex w-full py-2 rounded-xl border border-gray-200 bg-white overflow-hidden">
              <input
                type="email"
                placeholder="Enter your work email"
                className="flex-1 px-5 py-3 text-base bg-transparent border-none outline-none focus:ring-0 placeholder:text-gray-500"
                value={email}
                onChange={e => setEmail(e.target.value)}
              />
              <button
                type="submit"
                className="px-4 mr-2 bg-[#033175] text-white text-[14px] transition-colors duration-200 rounded-md"
              >
                Get started
              </button>
            </div>
          </form>
        </div>
      </div>

      {/* Mobile Content */}
      <div className="md:hidden relative z-10 bg-transparent py-16 px-4 flex flex-col justify-center">
        <div className="max-w-xl mx-auto">
          <h1 className="text-white text-4xl font-bold mb-4">
            Spend globally.<br />Operate locally.
          </h1>
          <p className="text-white text-base mb-8">
            Local is the new global. Operate anywhere with local-currency cards, reimbursements, and billing — in Canadian Dollar, Euro, Pound, Real, Shekel, Rupee, Yen, and more.
          </p>
          <form className="mt-8 w-full max-w-xl">
            <div className="flex w-full py-2 rounded-xl border border-gray-200 bg-white overflow-hidden">
              <input
                type="email"
                placeholder="Enter your work email"
                className="flex-1 px-5 py-3 text-base bg-transparent border-none outline-none focus:ring-0 placeholder:text-gray-500 text-black"
                value={email}
                onChange={e => setEmail(e.target.value)}
              />
              <button
                type="submit"
                className="px-4 mr-2 bg-[#ff6600] hover:bg-[#ff5500] text-white text-[14px] transition-colors duration-200 rounded-md"
              >
                Get started
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
