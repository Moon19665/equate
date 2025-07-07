export default function EmbeddedCardsYourWay() {
    return (
      <section className="pb-0">
        <div className="max-w-[1920px] mx-auto px-3 md:px-12">
          {/* Heading and Subheading */}
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
              Embed Brex cards your way.
            </h2>
            <p className="text-base md:text-lg ">
              You can tailor Brex Embedded to your unique product and business needs.
            </p>
          </div>
  
          {/* Features Row */}
          <div className="flex flex-col md:flex-row justify-between gap-10 md:gap-6 mb-8 md:mb-10">
            {/* Feature 1 */}
            <div className="flex-1 text-center md:text-left">
              <div className="text-sm font-semibold text-gray-400 mb-2">01</div>
              <div className="font-bold  text-lg md:text-xl mb-1">
                Robust set of APIs to manage cards
              </div>
              <div className="text-sm md:text-base">
                Build rich functionality into your products with easy-to-use APIs for every action across the card management lifecycle.
              </div>
            </div>
            {/* Feature 2 */}
            <div className="flex-1 text-center md:text-left">
              <div className="text-sm font-semibold text-gray-400 mb-2">02</div>
              <div className="font-bold text-lg md:text-xl mb-1">
                No-code embedding
              </div>
              <div className=" text-sm md:text-base">
                Using protocols like Conferma and Mastercard ICCP, you can embed Brex cards into your existing payment workflow in a matter of hours.
              </div>
            </div>
            {/* Feature 3 */}
            <div className="flex-1 text-center md:text-left">
              <div className="text-sm font-semibold text-gray-400 mb-2">03</div>
              <div className="font-bold  text-lg md:text-xl mb-1">
                Rich data to automate reconciliation
              </div>
              <div className=" text-sm md:text-base">
                Easily automate customer workflows with L2 and L3 payment data automatically synced and reconciled with customers’ ERP.
              </div>
            </div>
          </div>
  
     
  
          {/* Responsive Bottom Image */}
          <div className="w-full flex justify-center pt-4">
            <img
              src="/assets/embedded-finance/brand-matrix.png"
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
  