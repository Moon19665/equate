export default function EmbeddedFinanceInAction() {
    const partners = [
        {
          logoUrl: "/assets/embedded-finance/coupa.png",
          description: "Coupa customers can issue Brex cards directly in their procurement workflows, with more control and visibility and fewer manual errors.",
          learnMoreLink: "#"
        },
        {
          logoUrl: "/assets/embedded-finance/zip.webp", 
          description: "Brex for Zip makes it easy to issue Brex cards right in Zip procurement workflows to streamline business spend from intake to payment, while earning more rewards.",
          learnMoreLink: "#"
        },
        {
          logoUrl: "/assets/embedded-finance/navan.webp",
          description: "With BrexPay for Navan, a new Brex virtual card is created for every Navan booking, so travel reports are reconciled against card statements with 100% accuracy.",
          learnMoreLink: "#"
        },
        {
          logoUrl: "/assets/embedded-finance/sabre.webp",
          description: "Empower customers to book travel with a Brex virtual card and get the richest set of transaction and itinerary data that will automate expenses and reconciliation.",
          learnMoreLink: "#"
        }
      ];
    
  
    return (
      <section className="bg-gray-50 py-16 lg:py-24">
        <div className="max-w-[1920px] mx-auto px-3 md:px-12">
          
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Embedded finance in action.
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Brex virtual cards can be integrated into procurement, travel, ERP, and other products.
            </p>
          </div>
  
          {/* Partner Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {partners.map((partner, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
                {/* Logo/Title */}
                <div className="mb-4 h-16 flex items-center">
                <img
                  src={partner.logoUrl}
                  alt="Partner logo"
                  className="h-6 md:h-6 object-contain "
                  loading="lazy"
                />
              </div>
                
                {/* Description */}
                <p className="text-gray-600 text-sm mb-6 leading-relaxed">
                  {partner.description}
                </p>
                
                {/* Learn More Link */}
                <a 
                  href={partner.learnMoreLink}
                  className="inline-flex items-center text-[#033175] font-semibold text-sm transition-colors"
                >
                  Learn more
                  <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                  </svg>
                </a>
              </div>
            ))}
          </div>
  
          {/* Testimonial Quote */}
          <div className="text-center mb-16">
            <blockquote className="text-2xl md:text-3xl lg:text-4xl font-medium text-gray-800 max-w-4xl mx-auto mb-8 leading-relaxed">
              "Combining Brex's global card with Zip's procurement workflows will eliminate the manual reconciliation that consumes hours of our team's time."
            </blockquote>
            <cite className="text-gray-600 text-base">
              — Adam Dix, Head of Financial Operations, Anthropic
            </cite>
          </div>
  
          {/* Bottom CTA Section */}
          <div className="bg-gray-900 rounded-3xl overflow-hidden">
            <div className="flex flex-col lg:flex-row items-center">
              {/* Left Content */}
              <div className="w-full lg:w-1/2 p-8 lg:p-12">
                <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-6">
                  Learn more about partnering with Equate.
                </h3>
                <button className="bg-[#033175] text-white font-semibold px-8 py-4 rounded-lg text-lg transition-colors duration-200">
                  Partner with Equate
                </button>
              </div>
              
              {/* Right Image */}
              <div className="w-full lg:w-1/2 flex justify-center items-center p-8 lg:p-0">
                <img
                  src="/assets/automation/triplet.png"
                  alt="Equate cards stack"
                  className="w-full max-w-md h-auto object-contain"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
  