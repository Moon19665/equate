import React from "react";

const bgUrl =
  "https://brand.brex.com/transform/b456b630-23dd-444f-8452-eb3b5e35a0bb/Prefooter-Background?io=transform:fit,width:2000,height:758&quality=95";
const illustrationUrl =
  "https://brand.brex.com/transform/d9ab580b-fa31-40d4-891b-e5e1453c0447/Signup-Illustration?io=transform:fit,width:2000,height:1938&quality=95";

export default function StartupSignupSection() {
  return (
    <section
      className="relative w-full min-h-[500px] flex items-center justify-center py-12 md:py-24"
      style={{
        backgroundImage: `url(${bgUrl})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="container mx-auto flex flex-col-reverse md:flex-row items-center justify-between px-4 md:px-16 md:px-8">
        {/* Left Column */}
        <div className="w-full md:w-1/2 flex flex-col items-start justify-center text-white z-10 max-w-xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 leading-tight text-white">
            Sign up in 10<br className="hidden md:block" /> minutes.
          </h2>
          <p className="mb-8 text-base md:text-sm text-gray-200">
            Our team of venture-backed tech experts is ready to support you. Get an operating account, bill pay, and corporate cards with one application today.
          </p>
          <div className="flex flex-wrap  gap-4">
            <button className="bg-orange-500 hover:bg-orange-600 text-white font-semibold px-6 py-3 text-sm rounded transition">
              Contact sales
            </button>
            <button className="bg-transparent border border-white hover:bg-white hover:text-black text-white text-sm font-semibold px-6 py-3 rounded transition">
              Open an account
            </button>
          </div>
        </div>
        {/* Right Column */}
        <div className="w-full md:w-1/2 flex justify-center items-center mb-10 md:mb-0 z-10">
          <img
            src={illustrationUrl}
            alt="Signup illustration"
            className="max-w-[500px] w-full h-auto object-contain"
            loading="lazy"
          />
        </div>
      </div>
      {/* Overlay for better text contrast on mobile */}
    </section>
  );
}
