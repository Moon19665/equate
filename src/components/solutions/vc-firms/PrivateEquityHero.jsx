'use client';

export default function PrivateEquityHero() {
  return (
    <section className="w-full bg-[#f7f8fa] py-16">
      <div className="max-w-[1920px] mx-auto px-3 md:px-12 flex flex-col-reverse lg:flex-row items-center gap-12">
        {/* Left Column: Text */}
        <div className="flex-1">
          <p className="text-xs uppercase tracking-widest text-gray-500 mb-3 font-mono">
            Equate for PE and VC firms
          </p>
          <h1 className="text-3xl sm:text-4xl font-bold text-black mb-6 leading-tight">
            Keep your firm focused <br /> on founders, not expenses.
          </h1>
          <p className="text-gray-600 text-lg mb-6 max-w-xl">
            You didn’t get into finance to chase receipts — and with Equate you don’t have to.
            Save hours every month with expense automation, continuous close, and simplified travel.
          </p>
          <button className="bg-[#033175] hover:bg-orange-600 text-white font-semibold px-6 py-3 rounded-md transition">
            Get started
          </button>
        </div>

        {/* Right Column: Image */}
        <div className="flex-1 max-w-xl w-full">
          <img
            src="/assets/equity/slack.png"
            alt="VC Hero"
            className="w-full h-auto  bg-white p-2 rounded-xl object-cover"
          />
        </div>
      </div>
    </section>
  );
}
