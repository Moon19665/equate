import React from "react";

export default function TravelExpenseSection() {
  return (
    <section className="w-full px-3 md:px-12 py-10 md:py-16 bg-white">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="font-semibold text-gray-900 text-2xl md:text-3xl mb-3">
          Travel + expense = better on Equate.
        </h2>
        <p className="text-gray-500 text-base md:text-lg mb-10">
          Fully automate expense reports and give employees a travel booking experience they <span className="text-gray-700">will love.</span>
        </p>
      </div>
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-start justify-center gap-8 md:gap-0">
        {/* Easy to use */}
        <div className="flex-1 flex flex-col items-center px-4 mb-8 md:mb-0">
          {/* ai icon */}
          <span className="mb-3 text-[#033175] text-xl font-mono">a<span className="text-[#033175]">i</span></span>
          <h3 className="font-semibold text-gray-900 text-lg mb-2">Easy to use.</h3>
          <p className="text-gray-600 text-sm text-center">
            Make expenses a breeze for every employee with a beautiful mobile app powered by Equate AI.
          </p>
        </div>
        {/* Greater control */}
        <div className="flex-1 flex flex-col items-center px-4 mb-8 md:mb-0">
          {/* control icon */}
          <span className="mb-3">
            <svg width="32" height="32" fill="#033175" viewBox="0 0 32 32">
              <circle cx="16" cy="16" r="12" stroke="#033175" strokeWidth="2" fill="none"/>
              <circle cx="16" cy="16" r="6" fill="#033175"/>
            </svg>
          </span>
          <h3 className="font-semibold text-gray-900 text-lg mb-2">Greater control.</h3>
          <p className="text-gray-600 text-sm text-center">
            Keep spend in policy and keep everyone on budget automatically, at every swipe.
          </p>
        </div>
        {/* One platform */}
        <div className="flex-1 flex flex-col items-center px-4">
          {/* platform icon */}
          <span className="mb-3">
            <svg width="28" height="32" fill="none" viewBox="0 0 28 32">
              <rect x="4" y="2" width="20" height="28" rx="4" stroke="#033175" strokeWidth="2"/>
              <rect x="10" y="26" width="8" height="2" rx="1" fill="#033175"/>
            </svg>
          </span>
          <h3 className="font-semibold text-gray-900 text-lg mb-2">One platform.</h3>
          <p className="text-gray-600 text-sm text-center">
            Book business travel, submit reimbursements, and track all spend from one dashboard in real time.
          </p>
        </div>
      </div>

      {/* Testimonial Section */}
      <div className="max-w-3xl mx-auto mt-14 md:mt-20 text-center">
        <div className="mb-5 flex justify-center">
          <img
            src="/assets/midsize/superhuman-logo.webp"
            alt="Superhuman Logo"
            className="h-8 md:h-10 w-auto object-contain"
            loading="lazy"
          />
        </div>
        <blockquote className="text-gray-900 italic text-lg md:text-xl font-normal leading-relaxed mb-4">
          Equate is both a really flexible budgeting and card provisioning management tool and our expense report tool. It’s a clean setup.”
        </blockquote>
        <figcaption className="text-gray-700 text-sm md:text-base mt-2">
          — Andrew Maher, Head of Finance, Superhuman
        </figcaption>
      </div>
    </section>
  );
}
