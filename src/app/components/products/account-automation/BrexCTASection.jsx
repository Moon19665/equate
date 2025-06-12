export default function BrexCTASection() {
    return (
      <section 
        className="relative py-16 lg:py-24 overflow-hidden"
        style={{
          backgroundImage: `url('https://brand.brex.com/transform/b456b630-23dd-444f-8452-eb3b5e35a0bb/Prefooter-Background?io=transform:fit,width:2000,height:758&quality=95')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      >
        {/* Dark overlay for better text readability */}
        <div className="absolute inset-0 bg-black/20"></div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
            
            {/* Left Content Column */}
            <div className="w-full lg:w-1/2 text-center lg:text-left">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                See what Brex can do for you.
              </h1>
              <p className="text-lg md:text-xl text-gray-300 mb-8 leading-relaxed max-w-lg mx-auto lg:mx-0">
                Add accuracy, automation, and efficiency to your accounting — from document collection to journal entries, and everywhere in between.
              </p>
              <button className="bg-[#ff6600] hover:bg-[#ff5500] text-white font-semibold px-8 py-4 rounded-lg text-lg transition-colors duration-200 shadow-lg hover:shadow-xl">
                Get started
              </button>
            </div>
            
            {/* Right Image Column */}
            <div className="w-full lg:w-1/2 flex justify-center items-center">
              <div className="relative max-w-lg w-full">
                <img
                  src="https://brand.brex.com/transform/d2f2341f-92ea-4983-a67d-417a52921900/Closed-loop-dark?io=transform:fit,width:2000,height:1633&quality=95"
                  alt="Brex platform illustration"
                  className="w-full h-auto object-contain"
                  loading="lazy"
                />
              </div>
            </div>
            
          </div>
        </div>
      </section>
    );
  }
  