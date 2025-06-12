'use client';

export default function EmbeddedFinanceHero() {
  return (
    <section className="relative min-h-screen overflow-hidden">
      {/* Desktop Video Background */}
      <div className="hidden lg:block absolute inset-0 z-0">
        <video
          name="Hero_1680x692_V2"
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          poster="https://brand.brex.com/m/3398b619d6d411e1/webimage-Hero_1680x692_V2.jpg"
          className="w-full h-full object-cover"
          crossOrigin="anonymous"
        >
          <source 
            src="https://brand.brex.com/m/3398b619d6d411e1/original/Hero_1680x692_V2.mp4" 
            type="video/mp4" 
          />
          <img 
            src="https://brand.brex.com/m/3398b619d6d411e1/webimage-Hero_1680x692_V2.jpg" 
            alt="Embedded Finance Hero"
            className="w-full h-full object-cover"
          />
        </video>
      </div>

      {/* Mobile Layout */}
      <div className="lg:hidden">
        {/* Mobile Content Section */}
        <div className="flex flex-col items-center justify-center min-h-[60vh] bg-gradient-to-br from-gray-100 to-gray-200 px-4 sm:px-8 py-16">
          <div className="max-w-lg w-full text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              Embedded Finance
            </h1>
            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
              Embed virtual cards in your B2B software to unlock global payments with automated reconciliation.
            </p>
            <button className="bg-[#ff6600] hover:bg-[#ff5500] text-white font-semibold px-8 py-4 rounded-lg text-lg transition-colors duration-200 shadow-lg">
              Partner with Us
            </button>
          </div>
        </div>

        {/* Mobile Video Section */}
        <div className="relative">
          <video
            name="Hero_1680x692_V2"
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
            poster="https://brand.brex.com/m/3398b619d6d411e1/webimage-Hero_1680x692_V2.jpg"
            className="w-full h-auto"
            crossOrigin="anonymous"
          >
            <source 
              src="https://brand.brex.com/m/3398b619d6d411e1/original/Hero_1680x692_V2.mp4" 
              type="video/mp4" 
            />
            <img 
              src="https://brand.brex.com/m/3398b619d6d411e1/webimage-Hero_1680x692_V2.jpg" 
              alt="Embedded Finance Hero"
              className="w-full h-auto"
            />
          </video>
        </div>
      </div>

      {/* Desktop Content Overlay */}
      <div className="hidden lg:flex absolute inset-0 z-10 items-center">
        <div className="w-full">
          <div className="max-w-3xl text-start px-4 sm:px-8 md:px-12 lg:px-20 xl:px-32 ml-0 lg:ml-10 xl:ml-20">
            <h1 className="text-4xl xl:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              Embedded Finance
            </h1>
            <p className="text-xl text-gray-700 mb-8 leading-relaxed max-w-lg">
              Embed virtual cards in your B2B software to unlock global payments with automated reconciliation.
            </p>
            <button className="bg-[#ff6600] hover:bg-[#ff5500] text-white font-semibold px-8 py-4 rounded-lg text-lg transition-colors duration-200 shadow-lg">
              Partner with Us
            </button>
          </div>
        </div>
      </div>

      {/* Gradient Overlay for Desktop Text Readability */}
      <div className="hidden lg:block absolute inset-0 bg-gradient-to-r from-white/80 via-white/60 to-transparent pointer-events-none z-5"></div>
    </section>
  );
}
