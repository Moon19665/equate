import React from "react";

export default function BillPayHero() {
  return (
    <section className="w-full bg-[#fff] py-16 ">
      <div className="max-w-[1920px] px-3 md:px-12 mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Left Column: Content */}
        <div className="text-center md:text-left">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight mb-6">
            This is automated<br />bill pay made better.
          </h1>
          <p className=" text-base md:text-lg mb-8 max-w-xl mx-auto md:mx-0">
            Eliminate data entry, automate approvals, and spin up virtual cards in one click to maximize your rewards.
          </p>

          {/* Email Form */}
          <form className="w-full max-w-xl mx-auto md:mx-0">
            <div className="flex flex-col sm:flex-row items-stretch gap-3 bg-white p-2 rounded-xl border border-gray-200">
              <input
                type="email"
                placeholder="Enter your work email"
                className="flex-1 px-4 py-3 text-base bg-transparent border-none outline-none placeholder:text-gray-500"
                autoComplete="email"
                aria-label="Work email"
              />
              <button
                type="submit"
                className="px-6 py-3 bg-[#033175] cursor-pointer text-white text-sm font-medium rounded-md transition-colors duration-200"
              >
                Get started
              </button>
            </div>
          </form>
        </div>

        {/* Right Column: Image */}
        <div className="w-full">
          <img
            src="/assets/bill-pay/bill-hero.png"
            alt="Bill Pay Illustration"
            className="w-full h-76 rounded-xl object-contain"
          />
        </div>
      </div>
    </section>
  );
}
