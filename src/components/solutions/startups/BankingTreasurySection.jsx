export default function BankingTreasurySection() {
    return (
      <>
        {/* First Section: Image + Content */}
        <section className="w-full bg-[#f5f6fa] py-12 px-4 flex flex-col lg:flex-row items-center justify-center">
          {/* Left: Image Card */}
          <div className="w-full max-w-md mb-10 lg:mb-0 lg:mr-12 flex-shrink-0">
            <div className="rounded-2xl overflow-hidden ">
              <img
                src="https://brand.brex.com/transform/bd99b7f7-1588-420c-878b-89cd512d8bbd/startups-launch-banking?io=transform:fit,width:2000,height:1968&quality=95"
                alt="Brex banking and treasury"
                className="w-full h-80 object-cover object-center md:h-96"
              />
            </div>
          </div>
          {/* Right: Text content */}
          <div className="w-full max-w-xl">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
              Make your money work harder with banking and treasury.
            </h2>
            <p className="text-gray-700 text-sm mb-6">
              Trusted by 1 in 3 venture-backed US startups, the Brex business account gives you access to checking, treasury, and FDIC insurance all in one account.
            </p>
            <ul className="list-disc pl-5 text-gray-800 text-sm mb-6 space-y-2">
              <li>Send fast ACH, checks, and wires in 41 currencies</li>
              <li>Earn up to 4.34%† return on all of your operational cash</li>
              <li>Get up to $6M FDIC insurance through program banks*</li>
              <li>Sign up all online in just 10 minutes</li>
            </ul>
            <a
              href="#"
              className="text-orange-600 text-sm font-medium hover:underline transition"
            >
              Learn more about Brex business accounts &rarr;
            </a>
          </div>
        </section>
  
        {/* Second Section: Cards Grid */}
        <section className="w-full bg-[#f5f6fa] py-12">
          <div className="max-w-[1920px] px-3 md:px-12 mx-auto">
            <h2 className="text-2xl md:text-4xl font-bold text-center text-gray-900 mb-10">
              The operating account for founders, by founders.
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {/* Card 1 */}
              <div className="bg-white rounded-2xl shadow-sm p-6 flex flex-col items-start text-left">
                <h3 className="font-semibold text-lg md:text-xl mb-2">Increase your spending power</h3>
                <p className="text-gray-700 text-sm">
                  Extend your runway with instant Brex card payments and up to 20x higher limits with a Brex business account.
                </p>
              </div>
              {/* Card 2 */}
              <div className="bg-white rounded-2xl shadow-sm p-6 flex flex-col items-start text-left">
                <h3 className="font-semibold text-lg md:text-xl mb-2">Earn yield, stay liquid</h3>
                <p className="text-gray-700 text-sm">
                  Earn high yield on your operational cash with a fully integrated treasury account. No minimums or hidden fees, automated transfers, and 100% liquidity.
                </p>
              </div>
              {/* Card 3 */}
              <div className="bg-white rounded-2xl shadow-sm p-6 flex flex-col items-start text-left">
                <h3 className="font-semibold text-lg md:text-xl mb-2">Secure your capital</h3>
                <p className="text-gray-700 text-sm">
                  Safeguard your funds with customizable approval flows, 24/7 support, and up to $6M in FDIC insurance (20x the standard protection) through our program banks*.
                </p>
              </div>
              {/* Card 4 */}
              <div className="bg-white rounded-2xl shadow-sm p-6 flex flex-col items-start text-left">
                <h3 className="font-semibold text-lg md:text-xl mb-2">Automate bill pay</h3>
                <p className="text-gray-700 text-sm">
                  Keep more cash on hand with a business account that allows you to settle bills up to 5 days sooner with integrated bill pay.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full bg-[#f5f6fa] py-16 px-4 flex flex-col items-center">
      {/* Logo */}
      <img
        src="https://brand.brex.com/transform/67a44632-d234-49fe-936c-3753b428cebd/Standard-Metrics-Logo?io=transform:fit,width:2000,height:643&quality=95"
        alt="Standard Metrics Logo"
        className="h-10 md:h-14 mb-8"
        style={{ objectFit: "contain" }}
      />

      {/* Quote */}
      <blockquote className="max-w-3xl text-center">
        <p className="text-xl md:text-2xl font-serif text-gray-900 leading-snug md:leading-normal mb-8">
          “Brex allows us to generate yield on our cash through a money market fund while seamlessly processing wires and ACH.”
        </p>
        <footer className="text-gray-500 text-base md:text-lg">
          <a
            href="https://www.linkedin.com/in/johnmelas/"
            className="underline hover:text-gray-700 transition"
            target="_blank"
            rel="noopener noreferrer"
          >
            John Melas-Kyriazi
          </a>
          , Co-founder &amp; CEO, Standard Metrics
        </footer>
      </blockquote>
    </section>
      </>
    );
  }
  