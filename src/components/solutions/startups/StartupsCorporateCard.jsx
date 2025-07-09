export default function StartupsCorporateCard() {
    return (
      <>
        {/* Main Card Section */}
        <section className="w-full max-w-[1920px] mx-auto bg-white py-12 px-3 md:px-12  flex flex-col-reverse lg:flex-row items-center justify-between">
          {/* Left: Text content */}
          <div className="w-full max-w-xl mt-10 lg:mt-0 lg:mr-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Give corporate cards to<br className="hidden md:inline" /> your crew.
            </h2>
            <p className="text-gray-700 text-base md:text-lg mb-5">
              Unlock credit based on your business, not your credit score.<br />
              And easily issue cards and reimbursements.
            </p>
            <ul className="list-disc pl-5 text-gray-800 mb-6 space-y-2">
              <li>No personal guarantee required</li>
              <li>Unlimited virtual and physical cards</li>
              <li>
                <a
                  href="#"
                  className="text-[#033175] hover:underline font-medium"
                >
                  Rewards
                </a>{" "}
                that grow your business
              </li>
              <li>24/7 fraud monitoring and protection</li>
              <li>Apple Pay and mobile wallet</li>
            </ul>
            <a
              href="#"
              className="text-[#033175] font-medium hover:underline transition text-base"
            >
              Discover everything that Brex cards offer as you scale &rarr;
            </a>
          </div>
          {/* Right: Card image and overlays */}
          <div className="w-full max-w-lg flex items-center justify-center relative">
            {/* Card image */}
            <div className="relative w-full">
              <img
                src="/assets/startups/spent.png"
                alt="Brex Corporate Card"
                className="w-full"
              />
             
            </div>
          </div>
        </section>
  
        {/* Expenses Feature Section */}
        <section className="w-full bg-white py-16">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
            The card that manages expenses too.
          </h2>
          <div className="max-w-[1920px] px-3 md:px-12 mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Card 1 */}
            <div className="rounded-2xl bg-[#f5f6fa] p-6 text-left">
              <h3 className="font-semibold text-lg mb-2">Built-in controls</h3>
              <p className="text-gray-700 text-base">
                Create spend limits (for employees, teams, even vendors) with auto-enforced rules to enable and control spending.
              </p>
            </div>
            {/* Card 2 */}
            <div className="rounded-2xl bg-[#f5f6fa] p-6 text-left">
              <h3 className="font-semibold text-lg mb-2">Easy integrations</h3>
              <p className="text-gray-700 text-base">
                Automatically sync card expenses with the software you already use for{' '}
                <a
                  href="#"
                  className="underline text-gray-900 hover:text-orange-600 transition"
                >
                  accounting, payroll, and benefits.
                </a>
              </p>
            </div>
            {/* Card 3 */}
            <div className="rounded-2xl bg-[#f5f6fa] p-6 text-left">
              <h3 className="font-semibold text-lg mb-2">AI-driven automation</h3>
              <p className="text-gray-700 text-base">
                Simplify expenses with real-time tracking and reporting, and auto-generated receipts and memos.
              </p>
            </div>
            {/* Card 4 */}
            <div className="rounded-2xl bg-[#f5f6fa] p-6 text-left">
              <h3 className="font-semibold text-lg mb-2">Reimbursements</h3>
              <p className="text-gray-700 text-base">
                Don’t want to give ‘em a card? That’s okay. Issue hassle-free reimbursements for anyone on the team.
              </p>
            </div>
          </div>
        </section>
      </>
    );
  }
  