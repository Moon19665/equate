'use client';

import { useState } from 'react';

export default function GlobalHeroSection() {
  const [email, setEmail] = useState('');

  return (
    <section className="relative min-h-screen w-full overflow-hidden">
      {/* Desktop Video Background */}
      <div className="hidden md:block absolute inset-0 z-0">
        <video
          name="Global-Hero-Desktop-R13-opt"
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          poster="https://brand.brex.com/m/5fd5f034d1741bf4/webimage-Global-Hero-Desktop-R13-opt.jpg"
          className="w-full h-full object-cover"
          crossOrigin="anonymous"
        >
          <source
            src="https://brand.brex.com/m/5fd5f034d1741bf4/original/Global-Hero-Desktop-R13-opt.mp4"
            type="video/mp4"
          />
          <img
            src="https://brand.brex.com/m/5fd5f034d1741bf4/webimage-Global-Hero-Desktop-R13-opt.jpg"
            alt="Global Hero"
            className="w-full h-full object-cover"
          />
        </video>
      </div>
      {/* Mobile Video */}
      <div className="md:hidden w-full">
        <video
          name="Global-Hero-Mobile-R13_Compressed"
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          poster="https://brand.brex.com/m/1f639e949186e05f/webimage-Global-Hero-Mobile-R13_Compressed.jpg"
          className="w-full h-auto object-cover"
          crossOrigin="anonymous"
        >
          <source
            src="https://brand.brex.com/m/1f639e949186e05f/original/Global-Hero-Mobile-R13_Compressed.mp4"
            type="video/mp4"
          />
          <img
            src="https://brand.brex.com/m/1f639e949186e05f/webimage-Global-Hero-Mobile-R13_Compressed.jpg"
            alt="Global Hero"
            className="w-full h-auto object-cover"
          />
        </video>
      </div>

      {/* Overlay for readability (desktop only) */}
      <div className="hidden md:block absolute inset-0 bg-gradient-to-b from-black/60 via-black/30 to-transparent z-0"></div>

      {/* Currency Selector (visible on all screens, adjust as needed) */}
      <div className="absolute top-8 right-8 z-20">
        <div className="bg-white/80 backdrop-blur-md border border-gray-300 rounded-full flex items-center px-4 py-2 shadow-md">
          <img
            src="https://upload.wikimedia.org/wikipedia/en/a/ae/Flag_of_the_United_Kingdom.svg"
            alt="UK Flag"
            className="w-6 h-6 rounded-full mr-2"
          />
          <span className="font-medium text-gray-800 mr-2">GBP</span>
          <span className="text-gray-500 font-semibold">£</span>
        </div>
      </div>

      {/* Desktop Content Overlay */}
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
                className="px-4 mr-2 bg-[#ff6600] hover:bg-[#ff5500] text-white text-[14px] transition-colors duration-200 rounded-md"
              >
                Get started
              </button>
            </div>
          </form>
        </div>
      </div>

      {/* Mobile Content Overlay (black background, white text) */}
      <div className="md:hidden relative z-10 bg-black py-16 px-4 flex flex-col justify-center">
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
