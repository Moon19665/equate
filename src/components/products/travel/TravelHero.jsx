'use client';

export default function TravelHero() {
  return (
    <div
      className="w-full min-h-[800px] flex flex-col justify-center items-center relative bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage:
          "url('https://brand.brex.com/transform/6756c00e-34b0-4507-a518-2cd046a0afc8/1_Travel-Homehero-desktop?io=transform:fit,width:3000,height:1496&quality=95')",
      }}
    >
      {/* Overlay for text readability */}

      {/* Hero Content */}
      <div className="relative z-10 w-full max-w-4xl mx-auto flex flex-col items-center justify-end  text-center px-4 py-20">
        <h1 className="text-white text-3xl sm:text-4xl   md:text-5xl font-bold my-4 md:my-24   leading-tight ">
          All-in-one travel &amp;<br className="hidden md:block" /> expense management.
        </h1>
        <p className="text-[#bfc6ce] text-base md:text-lg mb-8 max-w-2xl mx-auto">
          Simplify travel with global inventory and auto-enforced expense policies on one platform.
        </p>
        {/* Email form */}
        <form className="mt-8 w-full max-w-xl">
            <div className="flex w-full py-2 rounded-xl border border-gray-200 bg-white overflow-hidden">
              <input
                type="email"
                placeholder="Enter your work email"
                className="flex-1 px-5 py-3 text-base bg-transparent border-none outline-none focus:ring-0 placeholder:text-gray-500"
                
              />
              <button
                type="submit"
                className="px-4 mr-2 bg-[#033175] text-white  text-[14px] transition-colors duration-200  rounded-md"
                
              >
                Get started
              </button>
            </div>
          </form>
      </div>

      {/* Sub-Hero Section */}
      <div className="w-full bg-[#0a1013] py-10 px-4">
        <div className="max-w-5xl mx-auto flex flex-col items-center text-center">
          <h2 className="text-2xl md:text-3xl font-semibold text-white mb-2">
            Connect travel &amp; <span className="italic font-extrabold">everything</span> on Brex.
          </h2>
          <p className="text-[#bfc6ce] text-base md:text-lg max-w-3xl">
            Brex is a complete solution for T&amp;E, with travel booking, event management, expenses, cards, and reimbursements.
          </p>
        </div>
      </div>
    </div>
  );
}
