'use client';

export default function GlobalCtaSection() {
  return (
    <section
      className="w-full min-h-[480px] flex items-center justify-center"
      style={{
        backgroundImage:
          "url('https://brand.brex.com/transform/b456b630-23dd-444f-8452-eb3b5e35a0bb/Prefooter-Background?io=transform:fit,width:2000,height:758&quality=95')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <div className="max-w-[1920px] w-full mx-auto flex flex-col-reverse md:flex-row items-center justify-between px-3 md:px-12 py-16 md:py-24">
        {/* Left: Content */}
        <div className="w-full md:w-1/2 flex flex-col items-start md:items-start md:justify-center mb-10 md:mb-0">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 leading-tight">
            See what Brex can do<br className="hidden md:block" /> for you.
          </h2>
          <p className="text-white text-base md:text-lg mb-8 max-w-md">
            Learn how our unified spend platform can increase your visibility and control over all spend, wherever it happens.
          </p>
          <button className="bg-[#033175] text-white font-semibold px-8 py-4 rounded-lg text-base md:text-lg transition-colors duration-200 shadow-lg">
            Get started
          </button>
        </div>
        {/* Right: Illustration */}
        <div className="w-full md:w-1/2 flex justify-end items-center">
          <img
            src="https://brand.brex.com/transform/d9ab580b-fa31-40d4-891b-e5e1453c0447/Signup-Illustration?io=transform:fit,width:2000,height:1938&quality=95"
            alt="Brex Illustration"
            className="w-full max-w-md h-auto object-contain"
            loading="lazy"
          />
        </div>
      </div>
    </section>
  );
}
