'use client';

export default function EmbeddedProductSection() {
  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        {/* Headline and description */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">
            Embed cards into your product.
          </h2>
          <p className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto">
            Building payments requires a ton of work, from creating a credit model to fighting fraud 24/7. So skip it — and let embedded finance take care of everything.
          </p>
        </div>

        {/* Main Content Row */}
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-24">
          {/* Left: Video */}
          <div className="w-full lg:w-1/2 flex justify-center">
            <div className="w-full max-w-md">
              <video
                name="Stack_V1"
                autoPlay
                muted
                loop
                playsInline
                preload="none"
                poster="https://brand.brex.com/m/166da2ea4ac07f9a/webimage-Stack_V1.jpg"
                className="w-full h-auto rounded-xl  object-contain"
                crossOrigin="anonymous"
              >
                <source src="https://brand.brex.com/m/166da2ea4ac07f9a/original/Stack_V1.mp4" type="video/mp4" />
                <img
                  src="https://brand.brex.com/m/166da2ea4ac07f9a/webimage-Stack_V1.jpg"
                  alt="Product Card Stack"
                  className="w-full h-auto object-contain"
                />
              </video>
            </div>
          </div>

          {/* Right: Features */}
          <div className="w-full lg:w-1/2 flex flex-col gap-8">
            {/* Feature 1 */}
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0">
                <span className="text-xl font-bold text-gray-400">01</span>
              </div>
              <div>
                <h3 className="font-semibold text-lg md:text-xl text-gray-900 mb-1">
                  Unlock new revenue globally
                </h3>
                <p className="text-gray-600 text-base">
                  Create new revenue streams by leveraging a global corporate card platform for local-currency payments in 50+ countries with no FX markups.
                </p>
              </div>
            </div>
            {/* Feature 2 */}
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0">
                <span className="text-xl font-bold text-gray-400">02</span>
              </div>
              <div>
                <h3 className="font-semibold text-lg md:text-xl text-gray-900 mb-1">
                  Deliver best-in-class payment workflows
                </h3>
                <p className="text-gray-600 text-base">
                  Automate core workflows across expenses, payments, and accounting. Give your customers peace of mind with complete reconciliation.
                </p>
              </div>
            </div>
            {/* Feature 3 */}
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0">
                <span className="text-xl font-bold text-gray-400">03</span>
              </div>
              <div>
                <h3 className="font-semibold text-lg md:text-xl text-gray-900 mb-1">
                  Credit and capital risk managed for you
                </h3>
                <p className="text-gray-600 text-base">
                  Deliver a great customer experience in days, not months, without the overhead of underwriting, capital markets, fraud and credit risk.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
