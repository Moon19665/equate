import React from "react";

const bgUrl =
  "/assets/startups/cta-bg.webp";
const illustrationUrl =
  "/assets/travel/mobile.png";

export default function StartupSignupSection() {
  return (
    <section
      className="relative w-full min-h-[500px] flex items-center justify-end py-12 md:py-24"
      style={{
        backgroundImage: `url(${bgUrl})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="container mx-auto flex flex-col-reverse md:flex-row items-center justify-between max-w-[1920px] px-3 md:px-12">
        {/* Left Column */}
        <div className="w-full md:w-1/2 flex flex-col items-start justify-center text-white z-10 max-w-xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 leading-tight text-white">
            Sign up in 10<br className="hidden md:block" /> minutes.
          </h2>
          <p className="mb-8 text-base md:text-sm text-gray-200">
            Our team of venture-backed tech experts is ready to support you. Get an operating account, bill pay, and corporate cards with one application today.
          </p>
          <div className="flex flex-wrap  gap-4">
            <button className="bg-[#033175] text-white font-semibold px-6 py-3 text-sm rounded transition">
              Contact sales
            </button>
            <button className="bg-transparent border border-white hover:bg-white hover:text-black text-white text-sm font-semibold px-6 py-3 rounded transition">
              Open an account
            </button>
          </div>
        </div>
        {/* Right Column */}
        <div className="w-full md:w-1/2 flex justify-end items-center mb-10 md:mb-0 z-10">
          <img
            src={illustrationUrl}
            alt="Signup illustration"
            className="max-w-[400px] w-full h-auto object-contain"
            loading="lazy"
          />
        </div>
      </div>
      {/* Overlay for better text contrast on mobile */}
    </section>
  );
}
