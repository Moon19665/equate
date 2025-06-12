'use client';

export default function SpendManagementHeroBG() {
  return (
    <section
      className="w-full min-h-[520px] flex items-center bg-[#0a1013] relative"
      style={{
        backgroundImage: "url('https://brand.brex.com/transform/734a3d9b-1d1f-41e7-8829-db8801599d4e/Pre-Footer-BG-V3?io=transform:fit,width:2000,height:1003&quality=95')",
        backgroundSize: 'cover',
        backgroundPosition: 'right center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      {/* Overlay for contrast */}
      <div className="absolute  z-0"></div>
      <div className="relative z-10 w-full max-w-7xl mx-auto flex flex-col lg:flex-row items-center px-4 py-12 lg:py-24 gap-10">
        {/* Left: Content */}
        <div className="w-full lg:w-1/2 flex flex-col items-start justify-center">
          <h1 className="text-white text-3xl md:text-5xl font-bold mb-6 leading-tight">
            Welcome to the future of<br className="hidden md:block" /> spend management.
          </h1>
          <p className="text-[#bfc6ce] text-base md:text-lg mb-8 max-w-lg">
            Let’s talk about how Brex can help you automate control and compliance, and gain real-time insights to improve ROI.
          </p>
          <button className="bg-[#ff6600] hover:bg-[#ff5500] text-white font-semibold rounded-lg px-7 py-3 text-base transition-colors duration-200">
            Get started
          </button>
        </div>
        {/* Right: Spacer for layout on desktop, no extra image needed since bg is used */}
        <div className="w-full lg:w-1/2 h-[320px] lg:h-[440px] xl:h-[480px]"></div>
      </div>
    </section>
  );
}
