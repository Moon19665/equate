import React from "react";

export default function GoLiveWithBrex() {
  return (
    <section className="w-full bg-[#f7f7fb] py-10 md:py-16 flex justify-center">
      <div className="bg-white rounded-3xl w-full max-w-6xl mx-4 md:mx-8 flex flex-col md:flex-row items-center px-6 md:px-12 py-10 md:py-16 shadow-none">
        {/* Left Column */}
        <div className="w-full md:w-1/2 flex flex-col justify-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Go live with Brex in<br />weeks.
          </h2>
          <p className="text-gray-700 text-base md:text-lg mb-6 max-w-md">
            Get up and running in as little as 6 weeks with comprehensive professional services, change management, and ongoing support. Our team will help ensure your success from day one.
          </p>
          <a
            href="#"
            className="text-orange-600 font-semibold text-base md:text-lg hover:underline transition"
          >
            See our implementation process &rarr;
          </a>
        </div>
        {/* Right Column */}
        <div className="w-full md:w-1/2 flex flex-col md:flex-row items-center justify-center mt-10 md:mt-0 gap-8 md:gap-0">
          
          {/* Brex Card Image */}
          <div className="flex items-center">
            <img
              src="https://brand.brex.com/transform/c3226d39-537c-4342-95e3-85c4705d47a6/Enterprise-services-Footer?io=transform:fit,width:2000,height:1550&quality=95"
              alt="Brex Card"
              className=" h-auto object-contain"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
