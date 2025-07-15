export default function equateSplitHero() {
    return (
      <section className="max-w-[1920px] mx-auto">
        <div className="flex flex-col md:flex-row h-auto md:h-[420px]">
          {/* Left: CTA */}
          <div className="bg-[#040b11] flex flex-col justify-center items-center  md:items-start px-3 md:px-12 py-12 md:py-0 w-full md:w-1/2">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 text-center md:text-start leading-tight">
              See what Equate can<br />do for you.
            </h2>
            <p className="text-lg text-[#e0e0e0] text-center md:text-start mb-8 max-w-lg">
              Learn how our modern finance platform can help your company spend smarter and move faster.
            </p>
            <button className="bg-[#033175] hover:bg-[#033175] text-white font-semibold rounded-lg px-7 py-3 text-base transition-colors duration-200">
              Get started
            </button>
          </div>
  
          {/* Right: Image */}
          <div className="w-full md:w-1/2 h-64 md:h-auto relative">
            <img
              src="/assets/homepage-images/cta.png"
              alt="Equate app on mobile"
              className="w-full h-full object-cover"
              draggable={false}
            />
          </div>
        </div>
      </section>
    );
  }
  