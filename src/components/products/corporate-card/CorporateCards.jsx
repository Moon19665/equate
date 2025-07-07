'use client';

export default function CorporateCards() {
  const cards = [
    {
  id: 1,
  icon: (
    <div className="w-full h-32 mb-4 flex items-center justify-center">
      <img
        src="/assets/corporate-card-ass/links.png" // Replace with actual icon URL
        alt="Worldwide card acceptance"
        className=" object-contain"
      />
    </div>
  ),
  title: "Worldwide card acceptance.",
  description: "Physical and virtual cards issued on the leading worldwide network, Mastercard.",
}
,
   {
    id: 2,
    icon: (
      <div className="w-full h-32 mb-4 flex items-center justify-center">
        <img
          src="/assets/corporate-card-ass/stars.png"
          alt="5-star rating icon"
          className=" object-contain"
        />
      </div>
    ),
    title: "5-star app on iOS and Android.",
    description: "Manage your card from your phone. Pay with Apple Pay, cancel your card, and view your spend all in one app.",
  },
  {
    id: 3,
    icon: (
      <div className="w-full h-32 mb-4 flex items-center justify-center">
        <img
          src="/assets/corporate-card-ass/7x.png"
          alt="7x reward icon"
          className=" object-contain"
        />
      </div>
    ),
    title: "Get rewarded for spending.",
    description: "Earn up to 7x back, redeem for cash back, credits, or even billboards.",
  },
  {
    id: 4,
    icon: (
      <div className="w-full h-32 mb-4 flex items-center justify-center">
        <img
          src="/assets/corporate-card-ass/tracking.png"
          alt="Expense tracking icon"
          className=" object-contain"
        />
      </div>
    ),
    title: "Real-time expense tracking.",
    description: "Track every transaction in real-time with automated categorization and instant notifications.",
  },
  {
    id: 5,
    icon: (
      <div className="w-full h-32 mb-4 flex items-center justify-center">
        <img
          src="/assets/corporate-card-ass/feature.png"
          alt="Security features icon"
          className=" object-contain"
        />
      </div>
    ),
    title: "Advanced security features.",
    description: "Multi-layer security with fraud protection, spending controls, and instant card freezing capabilities.",
  },
  {
    id: 6,
    icon: (
      <div className="w-full h-32 mb-4 flex items-center justify-center">
        <img
          src="/assets/corporate-card-ass/tracking.png"
          alt="Integrations icon"
          className="object-contain"
        />
      </div>
    ),
    title: "Seamless integrations.",
    description: "Connect with your favorite accounting software, expense tools, and business applications effortlessly.",
  },
  ];

  return (
    <section className="w-full bg-black py-16 px-12">
      <div className="max-w-[1920px] mx-auto">
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-white text-center mb-16 leading-tight">
          Corporate credit cards for startups and<br />enterprises.
        </h2>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {cards.map((card) => (
            <div
              key={card.id}
              className="bg-black rounded-2xl py-6 flex flex-col h-full transition-transform duration-300 hover:scale-105 "
            >
              {/* Icon */}
              {card.icon}

              {/* Content */}
              <div className="flex-1 flex justify-center items-center text-center flex-col">
                <h3 className="text-xl font-bold text-white mb-3 leading-snug">
                  {card.title}
                </h3>
                <p className="text-gray-300 text-[15px] leading-relaxed mb-6 flex-1">
                  {card.description}
                </p>

                {/* Learn More Link */}
                <a
                  href="#"
                  className="text-white font-medium text-[15px] hover:text-[#ff8533] transition-colors duration-200 inline-flex items-center group"
                >
                  Learn more
                  <svg
                    className="w-4 h-4 ml-2 transition-transform duration-200 group-hover:translate-x-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
