"use client";

export default function SpendManagementHero() {
  return (
    <section className="w-full bg-white">
      <div className="max-w-[1920px] mx-auto flex flex-col md:flex-row items-stretch py-12 px-4 md:py-20 px-3 md:px-12 gap-8">
        
        {/* Left Column: Content */}
        <div className="w-full md:w-1/2 flex flex-col justify-center ">
          <h1 className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-bold mb-4 leading-tight">
            The future of spend management.
          </h1>
          <h2 className="text-base sm:text-lg md:text-2xl mb-8 font-medium">
            Manage global spend and close the books in real time — with unmatched automation of manual expense work.
          </h2>
          <form className="w-full max-w-xl">
            <div className="flex flex-col sm:flex-row w-full gap-3 sm:gap-0 py-2 rounded-xl border border-gray-200 bg-white overflow-hidden">
              <input
                type="email"
                placeholder="Enter your work email"
                className="flex-1 px-5 py-3 text-base bg-transparent border-none outline-none focus:ring-0 placeholder:text-gray-500"
                autoComplete="email"
                aria-label="Work email"
              />
              <button
                type="submit"
                className="px-5 py-3 bg-[#033175] text-white text-sm sm:text-[14px] transition-colors duration-200 rounded-lg cursor-pointer sm:mr-2"
              >
                Get started
              </button>
            </div>
          </form>
        </div>

        {/* Right Column: Full-size Image */}
        <div className="w-full md:w-1/2 h-64 md:h-auto relative">
          <img
            src="/assets/homepage-images/homepage-hero.png"
            alt="Spend management visual"
            className="absolute inset-0 w-full h-full object-contain rounded-2xl"
          />
        </div>
      </div>
    </section>
  );
}
