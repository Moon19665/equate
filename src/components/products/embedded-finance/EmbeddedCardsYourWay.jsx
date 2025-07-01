export default function EmbeddedCardsYourWay() {
    return (
      <section className="bg-[#0F1113] pt-16 pb-0 px-4">
        <div className="max-w-7xl mx-auto">
          {/* Heading and Subheading */}
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
              Embed Brex cards your way.
            </h2>
            <p className="text-base md:text-lg text-gray-300">
              You can tailor Brex Embedded to your unique product and business needs.
            </p>
          </div>
  
          {/* Features Row */}
          <div className="flex flex-col md:flex-row justify-between gap-10 md:gap-6 mb-8 md:mb-10">
            {/* Feature 1 */}
            <div className="flex-1 text-center md:text-left">
              <div className="text-sm font-semibold text-gray-400 mb-2">01</div>
              <div className="font-bold text-white text-lg md:text-xl mb-1">
                Robust set of APIs to manage cards
              </div>
              <div className="text-gray-300 text-sm md:text-base">
                Build rich functionality into your products with easy-to-use APIs for every action across the card management lifecycle.
              </div>
            </div>
            {/* Feature 2 */}
            <div className="flex-1 text-center md:text-left">
              <div className="text-sm font-semibold text-gray-400 mb-2">02</div>
              <div className="font-bold text-white text-lg md:text-xl mb-1">
                No-code embedding
              </div>
              <div className="text-gray-300 text-sm md:text-base">
                Using protocols like Conferma and Mastercard ICCP, you can embed Brex cards into your existing payment workflow in a matter of hours.
              </div>
            </div>
            {/* Feature 3 */}
            <div className="flex-1 text-center md:text-left">
              <div className="text-sm font-semibold text-gray-400 mb-2">03</div>
              <div className="font-bold text-white text-lg md:text-xl mb-1">
                Rich data to automate reconciliation
              </div>
              <div className="text-gray-300 text-sm md:text-base">
                Easily automate customer workflows with L2 and L3 payment data automatically synced and reconciled with customers’ ERP.
              </div>
            </div>
          </div>
  
          {/* Learn More Link */}
          <div className="border-t border-gray-800 pt-4 pb-8 text-center">
            <a
              href="https://developer.brex.com"
              className="text-orange-500 hover:text-orange-400 font-medium transition-colors text-base inline-flex items-center"
              target="_blank" rel="noopener noreferrer"
            >
              Learn more at developer.brex.com
              <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </a>
          </div>
  
          {/* Responsive Bottom Image */}
          <div className="w-full flex justify-center mt-0">
            <img
              src="https://brand.brex.com/transform/047cf326-0066-44eb-85d8-5d6028d08779/Embedded_footer?io=transform:fit,width:2000,height:938&quality=95"
              alt="Embedded Footer"
              className="w-full max-w-5xl h-auto object-contain"
              style={{ marginTop: '-2rem' }} // Slight overlap for effect, adjust as needed
              loading="lazy"
            />
          </div>
        </div>
      </section>
    );
  }
  