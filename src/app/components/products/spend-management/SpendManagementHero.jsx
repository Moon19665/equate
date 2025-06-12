"use client";

export default function SpendManagementHero() {
  return (
    <section className="w-full">
      {/* Desktop: Video as background with centered content */}
      <div
        className="hidden md:flex relative w-full items-center justify-center"
        style={{
          height: "min(1200px, calc(100vh - 60px))",
        }}
      >
        {/* Desktop Video BG */}
        <video
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          poster="https://brand.brex.com/m/4f3c9e01e346500d/webimage-EmpowerHero-R2.jpg"
          className="absolute inset-0 w-full h-full object-cover z-0"
        >
          <source
            src="https://brand.brex.com/m/4f3c9e01e346500d/original/EmpowerHero-R2.mp4"
            type="video/mp4"
          />
        </video>
        {/* Overlay */}
        <div className="absolute inset-0  z-10" />
        {/* Content */}
        <div className="relative z-20 flex flex-col items-start justify-center text-left h-full w-full max-w-2xl mr-auto px-4">
          <h1 className="text-white text-3xl md:text-5xl lg:text-6xl font-bold mb-4 leading-tight">
            The future of spend management.
          </h1>
          <h2 className="text-[#e0e0e0] text-lg md:text-2xl mb-8 font-medium">
            Manage global spend and close the books in real time — with
            unmatched automation of manual expense work.
          </h2>
          <form className="mt-8 max-w-xl w-full">
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

      {/* Mobile: Video above, content below, left-aligned */}
      <div className="block md:hidden w-full">
        {/* Mobile Video */}
        <div
          className="w-full"
          style={{ aspectRatio: "16/9", minHeight: 220, maxHeight: 340 }}
        >
          <video
            autoPlay
            loop
            muted
            playsInline
            preload="auto"
            poster="https://brand.brex.com/m/39964d7631b3554e/webimage-EmpowerHero-Mobile-R2.jpg"
            className="w-full h-full object-cover"
          >
            <source
              src="https://brand.brex.com/m/4f64e1f3f6b899e4/original/Policy-R4.mp4"
              type="video/mp4"
            />
          </video>
        </div>
        {/* Content section */}
        <div className="w-full bg-[#0a1217] px-4 py-8 flex flex-col items-start">
          <h1 className="text-white text-2xl sm:text-3xl font-bold mb-4 leading-tight">
            The future of spend management.
          </h1>
          <h2 className="text-[#e0e0e0] text-[15px] mb-8 font-medium">
            Manage global spend and close the books in real time — with
            unmatched automation of manual expense work.
          </h2>
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
    </section>
  );
}
