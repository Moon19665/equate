export default function WebinarHeroSection() {
    return (
      <section className="bg-[#f4f5fa] py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <p className="text-orange-600 font-medium text-sm mb-1">Webinars</p>
          <h1 className="text-3xl md:text-5xl font-bold text-[#111] leading-tight mb-10">
            Timely conversations and actionable <br className="hidden md:block" /> insights.
          </h1>
  
          <div className="grid md:grid-cols-2 gap-6 bg-white p-6 md:p-10 rounded-xl ">
            {/* Text Section */}
            <div className="flex flex-col justify-between">
              <div>
                <div className="w-9 h-9 bg-black rounded-full flex items-center justify-center mb-6">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={2}
                    stroke="white"
                    className="w-5 h-5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                    />
                  </svg>
                </div>
                <h2 className="text-xl md:text-2xl font-semibold text-[#111] mb-3">
                  Hear expert strategies for increasing your working capital using AI
                </h2>
                <p className="text-sm text-gray-600">
                  Top enterprise finance leaders explore how GenAI is transforming working capital
                  management — from A/R to A/P.
                </p>
              </div>
            </div>
  
            {/* Image Section */}
            <div>
              <img
                src="https://brand.brex.com/transform/f66f1df8-7c5f-4463-be7f-5cb3b37c8575/Respaid-webinar-preview?io=transform:fit,width:2000,height:1125&quality=95"
                alt="Webinar preview"
                className="w-full h-full object-cover rounded-xl"
              />
            </div>
          </div>
        </div>
      </section>
    );
  }