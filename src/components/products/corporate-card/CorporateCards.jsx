'use client';

export default function CorporateCards() {
  const cards = [
    {
      id: 1,
      icon: (
        <div className="w-full h-32 mb-4 flex items-center justify-center">
          <svg className="w-24 h-24 text-gray-400" viewBox="0 0 100 100" fill="none">
            <circle cx="20" cy="20" r="2" fill="currentColor" />
            <circle cx="50" cy="30" r="2" fill="currentColor" />
            <circle cx="80" cy="25" r="2" fill="currentColor" />
            <circle cx="30" cy="60" r="2" fill="currentColor" />
            <circle cx="70" cy="70" r="2" fill="currentColor" />
            <path d="M20 20L50 30M50 30L80 25M50 30L30 60M30 60L70 70M80 25L70 70" stroke="currentColor" strokeWidth="0.5" opacity="0.6" />
          </svg>
        </div>
      ),
      title: "Worldwide card acceptance.",
      description: "Physical and virtual cards issued on the leading worldwide network, Mastercard.",
    },
    {
      id: 2,
      icon: (
        <div className="w-full h-32 mb-4 flex items-center justify-center">
          <div className="flex space-x-1">
            {[...Array(5)].map((_, i) => (
              <svg key={i} className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            ))}
          </div>
        </div>
      ),
      title: "5-star app on iOS and Android.",
      description: "Manage your card from your phone. Pay with Apple Pay, cancel your card, and view your spend all in one app.",
    },
    {
      id: 3,
      icon: (
        <div className="w-full h-32 mb-4 flex items-center justify-center">
          <div className="text-6xl font-bold text-gray-400">7x</div>
        </div>
      ),
      title: "Get rewarded for spending.",
      description: "Earn up to 7x back, redeem for cash back, credits, or even billboards.",
    },
    {
      id: 4,
      icon: (
        <div className="w-full h-32 mb-4 flex items-center justify-center">
          <svg className="w-24 h-24 text-gray-400" viewBox="0 0 100 100" fill="none">
            <rect x="20" y="30" width="60" height="40" rx="4" stroke="currentColor" strokeWidth="2" fill="none" />
            <rect x="25" y="35" width="50" height="4" fill="currentColor" opacity="0.6" />
            <rect x="25" y="45" width="30" height="3" fill="currentColor" opacity="0.4" />
            <rect x="25" y="55" width="40" height="3" fill="currentColor" opacity="0.4" />
          </svg>
        </div>
      ),
      title: "Real-time expense tracking.",
      description: "Track every transaction in real-time with automated categorization and instant notifications.",
    },
    {
      id: 5,
      icon: (
        <div className="w-full h-32 mb-4 flex items-center justify-center">
          <svg className="w-24 h-24 text-gray-400" viewBox="0 0 100 100" fill="none">
            <path d="M50 20L60 40H40L50 20Z" fill="currentColor" opacity="0.6" />
            <circle cx="50" cy="60" r="15" stroke="currentColor" strokeWidth="2" fill="none" />
            <path d="M45 60L48 63L55 56" stroke="currentColor" strokeWidth="2" />
          </svg>
        </div>
      ),
      title: "Advanced security features.",
      description: "Multi-layer security with fraud protection, spending controls, and instant card freezing capabilities.",
    },
    {
      id: 6,
      icon: (
        <div className="w-full h-32 mb-4 flex items-center justify-center">
          <svg className="w-24 h-24 text-gray-400" viewBox="0 0 100 100" fill="none">
            <rect x="15" y="25" width="70" height="50" rx="6" stroke="currentColor" strokeWidth="2" fill="none" />
            <rect x="25" y="35" width="50" height="8" fill="currentColor" opacity="0.6" />
            <rect x="25" y="50" width="30" height="4" fill="currentColor" opacity="0.4" />
            <rect x="25" y="60" width="40" height="4" fill="currentColor" opacity="0.4" />
          </svg>
        </div>
      ),
      title: "Seamless integrations.",
      description: "Connect with your favorite accounting software, expense tools, and business applications effortlessly.",
    },
  ];

  return (
    <section className="w-full bg-[#0a0f14] py-16 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-white text-center mb-16 leading-tight">
          Corporate credit cards for startups and<br />enterprises.
        </h2>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {cards.map((card) => (
            <div
              key={card.id}
              className="bg-[#1a1f26] rounded-2xl p-6 flex flex-col h-full transition-transform duration-300 hover:scale-105 hover:bg-[#1e252d]"
            >
              {/* Icon */}
              {card.icon}

              {/* Content */}
              <div className="flex-1 flex flex-col">
                <h3 className="text-xl font-bold text-white mb-3 leading-snug">
                  {card.title}
                </h3>
                <p className="text-gray-300 text-[15px] leading-relaxed mb-6 flex-1">
                  {card.description}
                </p>

                {/* Learn More Link */}
                <a
                  href="#"
                  className="text-[#ff6600] font-medium text-[15px] hover:text-[#ff8533] transition-colors duration-200 inline-flex items-center group"
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
