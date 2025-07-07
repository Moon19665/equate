"use client";

export default function ControlsSection() {
  return (
    <section className="w-full bg-black">
      {/* Desktop Layout */}
      <div className="hidden md:block w-full">
        <div className="max-w-6xl mx-auto py-20 px-4">
          <div className="flex flex-col items-center text-center mb-14">
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-3">
              With controls at every swipe.
            </h2>
            <p className="text-lg text-[#b2b8be] mb-6 max-w-2xl">
              Equate cards have expense management built in — because a card
              without controls is, well, out of control.
            </p>
            <button className="bg-[#033175] cursor-pointer text-white font-semibold px-6 py-2 rounded-lg transition">
              Explore expense management
            </button>
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
            {/* Compliance Card */}
            <div className="bg-white rounded-2xl p-8 flex flex-col lg:flex-row items-center gap-8">
              <div className="flex-1">
                <h3 className="text-2xl font-bold  mb-3">
                  Automate employee compliance.
                </h3>
                <p className="text-black">
                  Equate cards automatically collect itemized receipts compliant
                  with IRS or local tax laws, generate memos, and categorize to
                  the right GL and/or project.
                </p>
              </div>
              <img
                src="/assets/corporate-card-ass/automate.png"
                alt="Compliance features"
                className="w-52 mt-8 lg:mt-0"
              />
            </div>

            {/* Controls Column */}
            <div className="flex flex-col gap-8">
              <div className="bg-[#181c20] rounded-2xl p-8">
                <h3 className="text-2xl font-bold text-white mb-3">
                  Customize limits and controls.
                </h3>
                <p className="text-[#b2b8be] mb-4">
                  Issue spend limits with embedded controls for category,
                  merchant, and more.
                </p>
                <img
                  src="/assets/corporate-card-ass/control.png"
                  alt="Spend controls"
                  className="w-40 rounded-lg"
                />
              </div>

              <div className="bg-[#181c20] rounded-2xl p-8">
                <h3 className="text-2xl font-bold text-white mb-3">
                  Track expenses in real time.
                </h3>
                <p className="text-[#b2b8be] mb-4">
                  Monitor card limits and expenses by team, individual, and
                  global subsidiary.
                </p>
                <img
                  src="/assets/corporate-card-ass/expense.png"
                  alt="Expense tracking"
                  className="w-40 rounded-lg"
                />
              </div>
            </div>
          </div>

          {/* Testimonial */}
          <div className="flex flex-col items-center text-center">
            {/* <img
              src="https://brand.brex.com/m/7e1c9f7c0b0e4e7d/webimage-goody-logo.png"
              alt="Goody logo"
              className="h-8 mb-4"
            /> */}
            <blockquote className="text-2xl text-white font-medium mb-3 max-w-2xl">
              “We’ve used our Brex rewards for a team offsite — and got a Times
              Square billboard.”
            </blockquote>
            <div className="text-[#b2b8be] mb-2">
              — <span className="underline">Katy Caricari</span>, CEO, Goody
            </div>
            <a href="#" className="text-[#033175] font-medium hover:underline">
              Read the case study &rarr;
            </a>
          </div>
        </div>
      </div>

      {/* Mobile Layout */}
      <div className="md:hidden w-full p-4">
        <div className="flex flex-col items-center text-center mb-8">
          <h2 className="text-3xl font-bold text-white mb-3">
            With controls at every swipe.
          </h2>
          <p className="text-[#b2b8be] text-[15px] mb-6">
            Equate cards have expense management built in — because a card
            without controls is, well, out of control.
          </p>
          <button className="bg-[#033175] text-white font-semibold px-6 py-2 rounded-lg transition">
            Explore expense management
          </button>
        </div>

        {/* Mobile Cards */}
        <div className="flex flex-col gap-6 mb-8">
          {[
            {
              title: "Automate employee compliance",
              content:
                "Equate cards automatically collect itemized receipts compliant with tax laws.",
              img: "/assets/corporate-card-ass/automate.png",
            },
            {
              title: "Customize limits and controls",
              content:
                "Issue spend limits with embedded controls for various categories.",
              img: "/assets/corporate-card-ass/control.png",
            },
            {
              title: "Track expenses in real time",
              content:
                "Monitor card limits and expenses across teams and subsidiaries.",
              img: "/assets/corporate-card-ass/expense.png",
            },
          ].map((card, index) => (
            <div
              key={index}
              className={`rounded-2xl p-6 ${
                index === 0 ? "bg-white" : "bg-[#181c20]"
              }`}
            >
              <h3
                className={`text-lg font-bold mb-2 ${
                  index === 0 ? "text-black" : "text-white"
                }`}
              >
                {card.title}.
              </h3>
              <p
                className={`text-[15px] mb-4 ${
                  index === 0 ? "text-black" : "text-[#b2b8be]"
                }`}
              >
                {card.content}
              </p>
              <img src={card.img} alt={card.title} className="w-36 mx-auto" />
            </div>
          ))}
        </div>

        {/* Mobile Testimonial */}
        <div className="flex flex-col items-center text-center">
          {/* <img
            src="/assets/corporate-card-ass/expense.png"
            alt="Goody logo"
            className="h-6 mb-3"
          /> */}
          <blockquote className="text-lg text-white font-medium mb-2">
            “We’ve used our Brex rewards for a team offsite — and got a Times
            Square billboard.”
          </blockquote>
          <div className="text-[#b2b8be] text-[15px] mb-2">
            — <span className="underline">Katy Caricari</span>, CEO, Goody
          </div>
          <a
            href="#"
            className="text-[#033175] text-[15px] font-medium hover:underline"
          >
            Read the case study &rarr;
          </a>
        </div>
      </div>

      <section className="w-full flex justify-center  bg-white">
        <div className="w-full max-w-[1920px] mx-auto flex flex-col items-center text-center md:text-start py-4 md:py-0 md:flex-row overflow-hidden ">
          {/* Left Column: Content */}
          <div className="flex-1 flex flex-col justify-center items-start px-3 md:px-12 ">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-black mb-4 leading-tight">
              Local cards in 50+
              <br className="hidden md:block" /> countries and growing.
            </h2>
            <p className="text-black text-base md:text-lg mb-6 max-w-md">
              Equate cards can be issued in more countries and currencies than
              any other, enabling local operations anywhere.
            </p>
            <button className="bg-[#033175] cursor-pointer text-white font-semibold px-6 py-2 rounded-lg transition">
              Explore more global features
            </button>
          </div>

          {/* Right Column: Image */}
          <div className="flex-1 w-full h-64 md:h-auto">
            <img
              src="/assets/corporate-card-ass/card-group.png"
              alt="Local cards illustration"
              className="w-full h-full object-contain"
            />
          </div>
        </div>
      </section>
      <section className="w-full bg-black py-16 px-4 flex flex-col items-center">
        {/* Features Row */}
        <div className="w-full max-w-7xl flex flex-col md:flex-row justify-center items-start gap-12 md:gap-8 mb-20">
          {/* Feature 1 */}
          <div className="flex-1 flex flex-col items-center text-center px-2">
            <div className="mb-4">
              {/* Icon */}
              <svg width="40" height="32" viewBox="0 0 40 32" fill="none">
                <rect
                  x="6"
                  y="8"
                  width="28"
                  height="16"
                  rx="4"
                  fill="#033175"
                />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-white mb-2">
              One global card program.
            </h3>
            <p className="text-[#b2b8be] text-base">
              Equate makes it easy to see your company’s total credit limit and
              subsidiary-specific limits, expenses, and billing in one console
              to reduce risk and increase control.
            </p>
          </div>
          {/* Feature 2 */}
          <div className="flex-1 flex flex-col items-center text-center px-2">
            <div className="mb-4">
              {/* Icon */}
              <svg width="40" height="32" viewBox="0 0 40 32" fill="none">
                <ellipse cx="20" cy="16" rx="14" ry="14" fill="#033175" />
                <ellipse cx="20" cy="16" rx="8" ry="8" fill="#0a1018" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-white mb-2">
              Local currency cards and statements.
            </h3>
            <p className="text-[#b2b8be] text-base">
              Avoid intercompany transactions and foreign exchange fees by
              issuing cards in employees’ local currency and allowing
              subsidiaries to pay statements from their local bank.
            </p>
          </div>
          {/* Feature 3 */}
          <div className="flex-1 flex flex-col items-center text-center px-2">
            <div className="mb-4">
              {/* Icon */}
              <svg width="40" height="32" viewBox="0 0 40 32" fill="#033175">
                <path
                  d="M20 4c8.837 0 16 7.163 16 16"
                  stroke="#033175"
                  strokeWidth="4"
                  strokeLinecap="round"
                />
                <circle cx="32" cy="24" r="4" fill="#033175" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-white mb-2">
              Local card limits and controls.
            </h3>
            <p className="text-[#b2b8be] text-base">
              Customize spend limits to local markets with embedded policies
              tailored to local reporting rules and regulations — we’ll
              auto-enforce the right policy everywhere spend happens.
            </p>
          </div>
        </div>

        {/* CTA Section */}
        <div className="w-full max-w-2xl flex flex-col items-center text-center mt-8">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            See what Equate can do for you.
          </h2>
          <p className="text-[#b2b8be] text-lg mb-8">
            Get the spending power you want and the controls you need today.
          </p>
          <button className="bg-[#033175] text-white font-semibold px-8 py-3 rounded-lg transition">
            Get started
          </button>
        </div>
      </section>
    </section>
  );
}
