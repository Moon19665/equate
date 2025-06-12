'use client';

export default function BillPayHero() {
  return (
    <section className="w-full">
      {/* Desktop/Large screens: Video as background with overlaid content */}
      <div
        className="hidden md:flex relative w-full items-center justify-start min-h-[70vh] overflow-hidden"
        style={{
          height: 'min(900px, calc(100vh - 60px))',
        }}
      >
        {/* Video BG */}
        <video
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          poster="https://pplx-res.cloudinary.com/image/private/user_uploads/44520532/b70fc661-7afe-4bd1-97b6-eea2ceacd4e8/image.jpg"
          className="absolute inset-0 w-full h-full object-cover z-0"
        >
          <source src="https://brand.brex.com/m/5aa2c200fd2a5b3c/original/Payables-WebHeader.mp4" type="video/mp4" />
        </video>
        {/* Overlay for readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#0a1013ee] via-[#0a1013cc] to-[#0a101300] z-10" />
        {/* Content */}
        <div className="relative z-20 w-full max-w-2xl px-4 md:px-12 py-12 flex flex-col items-start">
          <h1 className="text-white text-3xl md:text-5xl font-bold mb-4 leading-tight">
            This is automated<br />bill pay made better.
          </h1>
          <p className="text-[#e0e0e0] text-base md:text-lg mb-8 max-w-lg">
            Eliminate data entry, automate approvals, and spin up virtual cards in one click to maximize your rewards.
          </p>
          <form className="mt-8 w-full max-w-xl">
            <div className="flex w-full py-2 rounded-xl border border-gray-200 bg-white overflow-hidden">
              <input
                type="email"
                placeholder="Enter your work email"
                className="flex-1 px-5 py-3 text-base bg-transparent border-none outline-none focus:ring-0 placeholder:text-gray-500"
                autoComplete="email"
                aria-label="Work email"
              />
              <button
                type="submit"
                className="px-4 mr-2 bg-[#ff6600] hover:bg-[#ff5500] text-white text-[14px] transition-colors duration-200 rounded-md"
              >
                Get started
              </button>
            </div>
          </form>
        </div>
      </div>

      {/* Mobile/Small screens: Content above, video below */}
      <div className="block md:hidden w-full bg-[#0a1013]">
        {/* Content */}
        <div className="w-full flex flex-col items-center pt-10 pb-8 px-4 text-center">
          <h1 className="text-3xl font-bold text-white mb-4 leading-tight">
            This is automated<br />bill pay made better.
          </h1>
          <p className="text-base text-[#e0e0e0] mb-6">
            Eliminate data entry, automate approvals, and spin up virtual cards in one click to maximize your rewards.
          </p>
          <form className="mt-2 w-full max-w-xl">
            <div className="flex w-full py-2 rounded-xl border border-gray-200 bg-white overflow-hidden">
              <input
                type="email"
                placeholder="Enter your work email"
                className="flex-1 px-5 py-3 text-base bg-transparent border-none outline-none focus:ring-0 placeholder:text-gray-500"
                autoComplete="email"
                aria-label="Work email"
              />
              <button
                type="submit"
                className="px-4 mr-2 bg-[#ff6600] hover:bg-[#ff5500] text-white text-[14px] transition-colors duration-200 rounded-md"
              >
                Get started
              </button>
            </div>
          </form>
        </div>
        {/* Video */}
        <div className="w-full mt-4 rounded-2xl overflow-hidden shadow-lg">
          <div className="relative aspect-video bg-[#222]">
            <video
              className="absolute top-0 left-0 w-full h-full object-cover"
              src="https://brand.brex.com/m/7535f3837c8d9df8/original/Payables-WebHeader-Mobile-080123.mp4"
              poster="https://pplx-res.cloudinary.com/image/private/user_uploads/44520532/b70fc661-7afe-4bd1-97b6-eea2ceacd4e8/image.jpg"
              autoPlay
              loop
              muted
              playsInline
              preload="auto"
              aria-label="Automated bill pay demo video"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
