'use client';

export default function FutureProofTravelSection() {
  return (
    <div className="w-full bg-black py-16 flex flex-col items-center">
      {/* Top Content Section */}
      <div className="w-full max-w-4xl mx-auto text-center mb-16">
        <h1 className="text-white font-semibold mb-4 text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-tight">
          Future-proof your T&E.
        </h1>
        <p className="text-[#bfc6ce] text-base sm:text-lg md:text-xl mb-8 max-w-2xl mx-auto">
          Ready to upgrade your corporate travel and expense management program to the #1 unified platform?
        </p>
        
        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button className="bg-[#033175] text-white font-semibold rounded-lg px-8 py-3 text-base transition-colors duration-200 w-full sm:w-auto">
            Contact sales
          </button>
          <button className="bg-transparent border-2 border-white hover:bg-white hover:text-[#0a1013] text-white font-semibold rounded-lg px-8 py-3 text-base transition-all duration-200 w-full sm:w-auto">
            Open an account
          </button>
        </div>
      </div>

      {/* Travel Interface Mockups */}
      <div className="w-full relative">
        {/* Background Image */}
        <div 
          className="max-w-[1920px] mx-auto h-[300px] sm:h-[400px] md:h-[500px] lg:h-[700px] bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('/assets/travel/offsite.png')"
          }}
        >
        </div>
        
      
      </div>
    </div>
  );
}
