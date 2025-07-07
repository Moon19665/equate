export default function GlobalFeaturesAndTestimonial() {
    const features = [
      {
        icon: (
          <span className="inline-block w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center mb-4">
            <svg width="20" height="20" fill="#033175" stroke="currentColor" strokeWidth={2} className="text-gray-700">
              <circle cx="10" cy="10" r="8" />
              <rect x="7" y="7" width="6" height="6" rx="1.5" fill="#033175" className="text-gray-500" />
            </svg>
          </span>
        ),
        title: "One global card program.",
        description:
          "Get one global credit limit and unify your locations on a single card with worldwide acceptance. Monitor your credit limit, statements, and payments across currencies and subsidiaries in one place.",
        link: { href: "#", text: "Explore global corporate card →" },
      },
      {
        icon: (
          <span className="inline-block w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center mb-4">
            <svg width="20" height="20" fill="none" stroke="#033175" strokeWidth={2} className="text-gray-700">
              <circle cx="10" cy="10" r="8" />
              <path d="M6 10h8M10 6v8" stroke="currentColor" strokeWidth={2} strokeLinecap="round" />
            </svg>
          </span>
        ),
        title: "Real-time, multi-entity controls.",
        description:
          "Track your HQ and subsidiaries’ card expenses, reimbursements, and travel across currencies in one place — and make adjustments in real time to increase accountability enterprise-wide.",
        link: { href: "#", text: "Explore expense management →" },
      },
      {
        icon: (
          <span className="inline-block w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center mb-4">
            <svg width="20" height="20" fill="none" stroke="#033175" strokeWidth={2} className="text-gray-700">
              <circle cx="10" cy="10" r="8" />
              <path d="M7 13l3-3 3 3" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </span>
        ),
        title: "Travel booking and management.",
        description:
          "Book and manage travel right in Brex, with access to unbiased global inventory, including low-cost carriers, and 24/7 support. Real-time traveler visibility makes it easy to uphold your duty of care.",
        link: { href: "#", text: "Explore Brex travel →" },
      },
    ];
  
    return (
      <section className="w-full bg-[#fafbfc] py-12 px-3 md:px-12">
        {/* Features Row */}
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {features.map((f, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl p-6 flex flex-col h-full items-start shadow-sm border border-gray-100"
            >
              {f.icon}
              <h3 className="font-bold text-lg md:text-xl text-black mb-2">{f.title}</h3>
              <p className="text-gray-700 text-base mb-4 flex-1">{f.description}</p>
              <a
                href={f.link.href}
                className="text-[#033175] font-semibold text-base transition-colors"
              >
                {f.link.text}
              </a>
            </div>
          ))}
        </div>
  
        {/* Testimonial Section */}
        <div className="max-w-3xl mx-auto text-center">
          <div className="text-3xl font-bold text-gray-800 mb-2">incode</div>
          <blockquote className="text-lg md:text-2xl text-gray-900 font-normal mb-6 leading-relaxed">
            “Now, we're able to manage all our global subsidiaries from one dashboard with every transaction auto-mapped to our ERP. Brex has been an absolute game-changer for us.”
          </blockquote>
          <div className="text-gray-700 text-sm mb-2">
            — <a href="#" className="underline hover:text-gray-900">Victor Mendoza</a>, Controlling Analyst at Incode
          </div>
        </div>
      </section>
    );
  }
  