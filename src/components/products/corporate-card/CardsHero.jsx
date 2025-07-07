'use client';

export default function CardsHero() {
  return (
    <section className="w-full">
  {/* Desktop: Image as background with overlay and centered content */}
  <div
    className="hidden md:flex relative w-full items-center justify-center bg-center  my-16 bg-contain bg-no-repeat"
    style={{
      backgroundImage: `url('/assets/homepage-images/equate-card.png')`,
      height: 'min(1200px, calc(100vh - 60px))',
    }}
  >
    {/* Overlay */}
    <div className="absolute inset-0 bg-black opacity-0 z-10 " />

    {/* Content */}
    <div className="relative z-20 flex flex-col items-center justify-center text-center h-full w-full max-w-2xl mx-auto px-4">
      <h1 className="text-white text-3xl md:text-4xl lg:text-5xl font-bold mb-4 leading-tight">
        Finally, a corporate card<br />companies can trust.
      </h1>
      <p className="text-gray-200 text-base md:text-lg mb-8">
        Where higher spending power meets smarter controls — and expense reports do themselves.
      </p>
      <form className="mt-8 max-w-xl w-full">
        <div className="flex w-full py-2 rounded-xl border border-gray-200 bg-white overflow-hidden">
          <input
            type="email"
            placeholder="Enter your work email"
            className="flex-1 px-5 py-3 text-base bg-transparent border-none outline-none focus:ring-0 placeholder:text-gray-500"
          />
          <button
            type="submit"
            className="px-4 mr-2 bg-[#033175] cursor-pointer hover:bg-[#033175] text-white text-sm transition-colors duration-200 rounded-md"
          >
            Get started
          </button>
        </div>
      </form>
    </div>
  </div>

  {/* Mobile: Image above, content below, left-aligned */}
  <div className="block md:hidden w-full ">
    {/* Image section */}
    <div
      className="w-full bg-contain bg-center bg-no-repeat my-4 px-3 "
      style={{
        backgroundImage: `url('/assets/homepage-images/equate-card.png')`,
        aspectRatio: '16/9',
        minHeight: 220,
        maxHeight: 340,
        position: 'relative',
      }}
    >
      <div className="absolute inset-0 bg-black/0" />
    </div>

    {/* Content section */}
    <div className="w-full bg-[#0b1013] px-3  py-8 flex flex-col items-start">
      <h1 className="text-white text-2xl sm:text-3xl font-bold mb-4 leading-tight">
        Finally, a corporate card<br />companies can trust.
      </h1>
      <p className="text-gray-200 text-[15px] mb-8">
        Where higher spending power meets smarter controls — and expense reports do themselves.
      </p>
      <form className="mt-8 w-full max-w-xl">
        <div className="flex w-full py-2 rounded-xl border border-gray-200 bg-white overflow-hidden">
          <input
            type="email"
            placeholder="Enter your work email"
            className="flex-1 px-5 py-3 text-base bg-transparent border-none outline-none focus:ring-0 placeholder:text-gray-500"
          />
          <button
            type="submit"
            className="px-4 mr-2 bg-[#ff6600] hover:bg-[#ff5500] text-white text-sm transition-colors duration-200 rounded-md"
          >
            Get started
          </button>
        </div>
      </form>
    </div>
  </div>
</section>

  );
}
