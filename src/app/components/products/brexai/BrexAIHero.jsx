'use client';

export default function BrexAIHero() {
  return (
    <section className="relative  overflow-hidden bg-black">
      {/* Desktop Video Background */}
      <div className="hidden lg:block absolute inset-0 z-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          poster="https://brand.brex.com/m/2d46d26b1081abee/webimage-BrexAi-Hero-R9-1.jpg"
          className="w-full h-full object-cover"
          crossOrigin="anonymous"
        >
          <source src="https://brand.brex.com/m/2d46d26b1081abee/original/BrexAi-Hero-R9-1.mp4" type="video/mp4" />
          <img
            src="https://brand.brex.com/m/2d46d26b1081abee/webimage-BrexAi-Hero-R9-1.jpg"
            alt="Brex AI Hero"
            className="w-full h-full object-cover"
          />
        </video>
      </div>

      {/* Mobile Video */}
      <div className="lg:hidden w-full">
        <video
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          poster="https://brand.brex.com/m/2d46d26b1081abee/webimage-BrexAi-Hero-R9-1.jpg"
          className="w-full h-auto object-cover"
          crossOrigin="anonymous"
        >
          <source src="https://brand.brex.com/m/2d46d26b1081abee/original/BrexAi-Hero-R9-1.mp4" type="video/mp4" />
          <img
            src="https://brand.brex.com/m/2d46d26b1081abee/webimage-BrexAi-Hero-R9-1.jpg"
            alt="Brex AI Hero"
            className="w-full h-auto object-cover"
          />
        </video>
      </div>

      {/* Desktop Content */}
      <div className="hidden lg:flex relative z-10 min-h-screen items-center">
        <div className="w-1/2 flex flex-col justify-center pl-24">
          <div>
            <div className="flex items-center mb-2">
              <span className="text-6xl font-bold text-white">Brex</span>
              <span className="ml-2 inline-flex items-center px-3 py-1 rounded border border-white text-white text-xl font-mono font-semibold bg-black/50 shadow">
                ai
              </span>
            </div>
            <p className="text-white text-lg mb-8">
              Reduce expense busywork by 10x while increasing compliance and accuracy.
            </p>
            <button className="bg-[#ff6600] hover:bg-[#ff5500] text-white font-semibold px-8 py-3 rounded-lg text-lg transition-colors duration-200 shadow-lg">
              Get started
            </button>
          </div>
        </div>
       
      </div>

      {/* Mobile Content */}
      <div className="lg:hidden bg-black w-full px-4 py-12 flex flex-col items-center">
        <div className="w-full max-w-lg mx-auto flex flex-col items-center">
          <div className="flex items-center mb-2">
            <span className="text-4xl font-bold text-white">Brex</span>
            <span className="ml-2 inline-flex items-center px-2 py-1 rounded border border-white text-white text-base font-mono font-semibold bg-black/50 shadow">
              ai
            </span>
          </div>
          <p className="text-white text-base mb-6 text-center">
            Reduce expense busywork by 10x while increasing compliance and accuracy.
          </p>
          <button className="bg-[#ff6600] hover:bg-[#ff5500] text-white font-semibold px-6 py-3 rounded-lg text-base transition-colors duration-200 shadow-lg mb-8">
            Get started
          </button>

          
        </div>
      </div>
    </section>
  );
}
