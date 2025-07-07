"use client";

export default function EmbeddedFinanceHero() {
  return (
    <section className="relative max-w-[1920px] mx-auto px-3 md:px-12  overflow-hidden flex flex-col lg:flex-row items-center justify-between">
      {/* Gradient Overlay for Desktop Text Readability */}
      <div className="hidden lg:block absolute inset-0 bg-gradient-to-r from-white/80 via-white/60 to-transparent pointer-events-none z-10"></div>

      {/* Left Column - Background Image (formerly video) */}
      <div className="relative w-full lg:w-1/2 z-20 flex items-center justify-start py-12 lg:py-0">
        <div className="max-w-lg w-full text-center lg:text-left">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            Embedded Finance
          </h1>
          <p className="text-lg md:text-xl text-gray-700 mb-8 leading-relaxed">
            Embed virtual cards in your B2B software to unlock global payments
            with automated reconciliation.
          </p>
          <button className="bg-[#033175] text-white font-semibold px-8 py-4 rounded-lg text-lg transition-colors duration-200 shadow-lg">
            Partner with Us
          </button>
        </div>
      </div>

      {/* Right Column - Graphic/Image */}
      <div className="relative w-full lg:w-1/2  h-auto overflow-hidden z-0">
        <img
          src="/assets/automation/triplet.png"
          alt="Embedded Finance Hero Background"
          className=" object-contain"
        />
      </div>
    </section>
  );
}
