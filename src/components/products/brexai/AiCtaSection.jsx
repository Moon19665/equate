export default function AiCtaSection() {
    return (
      <section
        className="relative w-full py-20 md:py-32"
        style={{
          backgroundImage:
            "url('https://brand.brex.com/transform/27154a50-bd40-4abf-90b3-a842cbf6776d/AI-Footer-desktop-bg?io=transform:fit,width:2000,height:760&quality=95')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="relative z-10 max-w-[1920px] px-3 md:px-12 mx-auto flex flex-col md:flex-row items-center justify-between ">
          {/* Left: Text Content */}
          <div className="w-full md:w-1/2 mb-12 md:mb-0">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight">
              Unlock the power of automation.
            </h2>
            <p className="text-white text-base md:text-lg mb-8 max-w-lg">
              The time is now to increase efficiency, compliance, and control with AI-powered spend management. Let’s talk.
            </p>
            <button className="bg-[#033175] text-white font-semibold px-8 py-4 rounded-lg text-lg transition-colors duration-200 shadow-lg">
              Get started
            </button>
          </div>
          {/* Right: Brex ai logo */}
          <div className="w-full md:w-1/2 flex justify-center md:justify-end">
            <div className="flex items-center">
              <span className="text-5xl md:text-6xl font-bold text-white">Brex</span>
              <span className="ml-2 inline-flex items-center px-3 py-1 rounded border border-white text-white text-xl font-mono font-semibold bg-black/40 shadow">
                ai
              </span>
            </div>
          </div>
        </div>
      </section>
    );
  }
  