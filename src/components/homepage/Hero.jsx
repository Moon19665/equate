'use client';

export default function Hero() {
  return (
    <section className="relative bg-[#fafbfc] min-h-[480px] flex items-center justify-center px-0">
      <div className="w-full flex flex-col md:flex-row items-center justify-between gap-12">
        {/* Left: Text & CTA */}
        <div className="flex-1 pl-2 md:pl-32 ">
          <h1 className="text-4xl md:text-6xl font-bold text-black leading-tight md:leading-[1.1]">
            Spend smarter.<br />
            Move faster.
          </h1>
          <p className="mt-6 text-lg md:text-xl text-gray-700 max-w-md">
            Gain control <span className="italic font-medium">and</span> speed with modern cards, banking, expenses, accounting, and more — in 120+ countries.
          </p>
          {/* Updated form */}
          <form className="mt-8 w-full max-w-xl">
            <div className="flex w-full py-2 rounded-xl border border-gray-200 bg-white overflow-hidden">
              <input
                type="email"
                placeholder="Enter your work email"
                className="flex-1 px-5 py-3 text-base bg-transparent border-none outline-none focus:ring-0 placeholder:text-gray-500"
                
              />
              <button
                type="submit"
                className="px-4 mr-2 bg-[#033175]   cursor-pointer text-white  text-[14px] transition-colors duration-200  rounded-md"
                
              >
                Get started
              </button>
            </div>
          </form>
          <div className="mt-6 flex items-center gap-2">
            <span className="text-[#033175] text-lg">⦿</span>
            <a href="#" className="text-[#033175] font-medium hover:underline text-base">See Equate in action</a>
          </div>
          <p className="mt-6 text-xs text-gray-400 max-w-xs">
            Equate is a financial technology company, not a bank. Checking and banking services provided by Column N.A., Member FDIC.
          </p>
        </div>
        {/* Right: Image */}
        <div className="flex-1 flex items-end justify-end w-full">
          <img
            src="/assets/homepage-images/homepage-hero.png  "
            alt="Brex card and app"
            className="w-full max-w-xl object-contain "
            loading="lazy"
          />
        </div>
      </div>
    </section>
  );
}
