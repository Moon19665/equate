import React from "react";

export default function GoLiveWithBrex() {
  return (
    <section className="w-full bg-white py-10 md:py-16 flex justify-center">
      <div className=" rounded-3xl w-full max-w-[1920px] mx-auto  flex flex-col md:flex-row items-center px-3 md:px-12 md:px-12 py-10 md:py-16 shadow-none">
        {/* Left Column */}
        <div className="w-full md:w-1/2 flex flex-col justify-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Go live with Equate in<br />weeks.
          </h2>
          <p className="text-gray-700 text-base md:text-lg mb-6 max-w-md">
            Get up and running in as little as 6 weeks with comprehensive professional services, change management, and ongoing support. Our team will help ensure your success from day one.
          </p>
          <a
            href="#"
            className="text-[#033175] font-semibold text-base md:text-lg hover:underline transition"
          >
            See our implementation process &rarr;
          </a>
        </div>
        {/* Right Column */}
        <div className="w-full md:w-1/2 flex flex-col md:flex-row items-center justify-end mt-10 md:mt-0 gap-8 md:gap-0">
          
          {/* Brex Card Image */}
          <div className="flex items-center">
            <img
              src="/assets/midsize/live.png"
              alt="Equate Card"
              className=" h-auto object-contain"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
