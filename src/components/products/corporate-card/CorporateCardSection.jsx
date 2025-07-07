"use client";

export default function CorporateCardSection() {
  const cardTypes = [
    {
      title: "T&E cards",
      description:
        "Enable travel expenses and employee spending with smart controls and real-time tracking.",
    },
    {
      title: "Vendor cards",
      description:
        "Issue cards with built-in controls for specific vendors and subscription management.",
    },
    {
      title: "Purchase cards",
      description:
        "Instantly issue purchase cards for one-time or recurring business expenses.",
    },
    {
      title: "Benefits cards",
      description:
        "Set up recurring or one-time benefits payments with automated expense tracking.",
    },
    {
      title: "You name it",
      description:
        "Provision spend limits for any business need with custom card configurations.",
    },
  ];

  return (
    <section className="w-full bg-[#0a1015]">
      {/* Main Content with Background Image */}
      <div className="w-full py-16 px-3 md:px-12 bg-white">
        <div className="max-w-[1920px] mx-auto">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
            {/* Left Column: Text Content */}
            <div className="flex-1 max-w-xl text-center lg:text-left">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight mb-6">
                The only corporate card that does it all.
              </h2>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Enable spend for travel, procurement, and more with worldwide
                card acceptance and local-currency cards in 50+ countries.
              </p>
              <button className="bg-[#033175] hover:bg-[#033175] text-white font-semibold px-8 py-3 rounded-lg transition-colors duration-200">
                Learn more
              </button>
            </div>

            {/* Right Column: Image */}
            <div className="flex-1 w-full">
              <img
                src="/assets/homepage-images/equate-card.png"
                alt="Corporate Card Illustration"
                className="w-full h-auto max-w-full object-contain rounded-lg shadow-md"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Cards Section */}
      <div className="w-full bg-white py-16 ">
        <div className="max-w-[1920px] px-3 md:px-12 mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {cardTypes.map((card, index) => (
              <div
                key={index}
                className="bg-white border border-gray-700 rounded-xl p-6 transition-all duration-300 hover:border-gray-600 hover:scale-105 flex flex-col h-full"
              >
                <h3 className="text-black font-bold text-lg mb-3 leading-tight">
                  {card.title}
                </h3>
                <p className="text-black text-sm leading-relaxed mb-4 flex-1">
                  {card.description}
                </p>

                {/* Learn More Link */}
                <a
                  href="#"
                  className="text-[#033175] font-medium text-sm cursor-pointer transition-colors duration-200 inline-flex items-center group mt-auto"
                >
                  Learn more
                  <svg
                    className="w-4 h-4 ml-2 transition-transform duration-200 group-hover:translate-x-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
