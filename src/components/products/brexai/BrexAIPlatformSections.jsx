import { FaEye, FaMagic, FaShieldAlt } from "react-icons/fa";
import { FiGitMerge, FiInfo, FiTrendingUp } from "react-icons/fi";

export default function BrexAIFullPage() {
  return (
    <div className="bg-[#070B12] w-full">
      {/* Section 1: Automate workflows */}
      <section className="w-full border-t border-b border-[#23262B] px-3 md:px-12 py-12">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white text-center mb-2">
            Automate workflows for every type
            <br className="hidden sm:inline" /> of spend.
          </h2>
          <p className="text-base md:text-lg text-gray-300 text-center mb-8">
            Equate AI eliminates manual work by automating tasks across our
            spend platform.
          </p>
          <div className="flex flex-col md:flex-row justify-center items-stretch gap-8">
            <div className="flex-1 flex flex-col items-center px-2">
              <FaEye className="text-2xl md:text-3xl text-[#033175] mb-3" />
              <div className="font-semibold text-white mb-1">
                Get trust and{" "}
                <span className="text-blue-400">transparency</span>
              </div>
              <div className="text-gray-400 text-sm md:text-base text-center md:text-left">
                Equate is transparent in how AI works to automate workflows,
                guide reviews, and provide insights.
              </div>
            </div>
            <div className="flex-1 flex flex-col items-center px-2">
              <FaMagic className="text-2xl md:text-3xl text-[#033175] mb-3" />
              <div className="font-semibold text-white mb-1">
                Stay in <span className="text-blue-400">control</span>
              </div>
              <div className="text-gray-400 text-sm md:text-base text-center md:text-left">
                Equate AI acts as an extension of your own decision making,
                providing the automations and suggestions you want.
              </div>
            </div>
            <div className="flex-1 flex flex-col items-center px-2">
              <FaShieldAlt className="text-2xl md:text-3xl text-[#033175] mb-3" />
              <div className="font-semibold text-white mb-1">
                Ensure complete <span className="text-blue-400">privacy</span>
              </div>
              <div className="text-gray-400 text-sm md:text-base text-center md:text-left">
                Your data is protected by strict security protocols and is never
                used to improve third-party AI models.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: Platform Diagram */}
      <section className="w-full px-2 py-12 flex flex-col items-center bg-[#070B12]">
        <div className="max-w-5xl w-full">
          <img
            src="/assets/equate-ai/product.png"
            alt="Equate Empower Platform"
            className="w-full h-auto rounded-xl shadow-xl object-contain border border-[#23262B] p-2 bg-[#fff]"
            loading="lazy"
          />
        </div>
      </section>

      {/* Section 3: Manage spend smarter with AI */}
      <section className="w-full py-16 bg-[#070B12]">
        <div className="max-w-[1920px] px-3 md:px-12 mx-auto">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white text-center mb-10">
            Manage spend smarter with AI.
          </h2>
          <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
            {/* Left: Text */}
            <div className="w-full lg:w-1/2">
              <div className="mb-4 text-xs font-semibold text-[#6C7A91] tracking-widest uppercase text-center lg:text-left">
                AI FOR EMPLOYEES
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-2 text-center lg:text-left">
                Give every employee their own assistant.
              </h3>
              <p className="text-gray-300 text-base sm:text-lg mb-6 text-center lg:text-left max-w-lg">
                Executives have long enjoyed having someone else do their
                expenses, and Equate AI extends that luxury to every employee
                with Equate Assistant.
              </p>
            </div>
            {/* Right: Responsive Image */}
            <div className="w-full lg:w-1/2 flex justify-end">
              <div className="max-w-xs w-full rounded-2xl overflow-hidden shadow-2xl bg-black">
                <img
                  src="/assets/travel/mobile.png"
                  alt="Equate AI Mobile Demo"
                  className="w-full h-auto object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 4: See Brex AI in action */}
      <section className="w-full py-16 px-3 md:px-12 bg-[#070B12]">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-8">
            See Equate AI <span className="text-blue-400">in action.</span>
          </h2>
          <div className="flex justify-center">
            <div className="w-full max-w-5xl rounded-2xl overflow-hidden shadow-2xl bg-black">
              <video
                name="BrexAi-DemoCombined-R2-Higher"
                loop
                controls
                playsInline
                autoPlay
                className="w-full h-auto object-contain"
                crossOrigin="anonymous"
              >
                <source
                  src="/assets/business-banking/Equate.mp4"
                  type="video/mp4"
                />
              </video>
            </div>
          </div>
        </div>
      </section>

      {/* Section 5: Put expense reports on autopilot */}
      <section className="w-full py-16  bg-[#070B12]">
        <div className="max-w-[1920px] px-3 md:px-12 mx-auto">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
            {/* Left: Image */}
            <div className="w-full lg:w-1/2 flex justify-center">
              <div className="w-full max-w-lg rounded-2xl overflow-hidden shadow-2xl bg-black">
                <img
                  src="/assets/business-banking/eq-assistant.png"
                  alt="Brex AI Web Module"
                  className="w-full h-auto bg-white p-2 object-contain"
                />
              </div>
            </div>

            {/* Right: Text */}
            <div className="w-full lg:w-1/2">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-6 text-center lg:text-left">
                Put expense reports on autopilot.
              </h2>
              <p className="text-gray-300 text-base sm:text-lg text-center lg:text-left max-w-lg">
                Equate auto-generates receipts from L3 payment data and uses
                LLMs and real-time integrations to auto-populate memos,
                attendees, and expense category.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 6: Get instant answers 24/7 (with video) */}
      <section className="bg-black w-full py-16 ">
        <div className="max-w-[1920px] px-3 md:px-12 mx-auto flex flex-col lg:flex-row items-center justify-between gap-12">
          {/* Left: Text Content */}
          <div className="w-full lg:w-1/2 mb-10 lg:mb-0">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Get instant answers 24/7.
            </h2>
            <p className="text-gray-300 text-base md:text-lg max-w-lg">
              Free your finance team from expense policy and reporting
              questions. With Brex, you can give every employee their own
              virtual assistant to get answers in real time and automate tedious
              expense tasks.
            </p>
          </div>
          {/* Right: Video */}
          <div className="w-full lg:w-1/2 flex justify-center">
            <div className="w-full max-w-md rounded-2xl overflow-hidden shadow-2xl bg-black">
              <img
                src="/assets/equate-ai/meals.png"
                alt="Brex AI Instant Answers Demo"
                className="w-full h-auto p-2 bg-white object-contain"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#070B12] w-full py-16 ">
        <div className="max-w-[1920px] px-3 md:px-12 mx-auto flex flex-col lg:flex-row items-center justify-between gap-12">
          {/* Left: Video */}
          <div className="w-full lg:w-1/2 flex justify-center mb-8 lg:mb-0">
            <div className="w-full max-w-md rounded-2xl overflow-hidden shadow-2xl bg-black">
  <img
    src="/assets/equate-ai/help.png"
    alt="Brex AI Offload Expense Tasks Demo"
    className="w-full h-auto p-2 bg-white object-contain"
  />
</div>

          </div>
          {/* Right: Text */}
          <div className="w-full lg:w-1/2 flex flex-col items-center lg:items-start text-center lg:text-left">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4">
              Offload expense tasks to AI.
            </h2>
            <p className="text-gray-300 text-base md:text-lg max-w-lg">
              Delegate tasks like “Assign all DoorDash charges to my WFH
              stipend” or “Add a memo that says ‘September ad campaign’ to all
              my Google Ads expenses in September”, and Brex Assistant will
              follow your command.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-[#070B12] w-full py-16 px-4">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-12">
          {/* Left: Text */}
          <div className="w-full lg:w-1/2 flex flex-col items-start text-left mb-10 lg:mb-0">
            <span className="uppercase tracking-widest text-xs text-gray-400 mb-2">
              AI for{" "}
              <span className="text-blue-400 font-semibold">Managers</span>
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Review only the expenses that need it.
            </h2>
            <p className="text-gray-300 text-base md:text-lg mb-6 max-w-lg">
              Equate AI uses machine learning (ML) models to guide managers to
              expenses worthy of human review and automates the rest.
            </p>
            <a
              href="#"
              className="text-[#fff] font-semibold transition-colors text-base inline-flex items-center"
            >
              Check out Equate expense management &rarr;
            </a>
          </div>
          {/* Right: Image */}
          <div className="w-full lg:w-1/2 flex justify-center">
            <img
              src="/assets/equate-ai/new-york.png"
              alt="Brex AI flagged expense"
              className="w-full max-w-md h-auto rounded-2xl p-2 bg-white object-contain"
              loading="lazy"
            />
          </div>
        </div>
      </section>

      <section className="bg-[#070B12] w-full ">
        {/* Features Row */}
        <div className="max-w-[1920px] px-3 md:px-12 mx-auto flex flex-col md:flex-row justify-between items-center text-center  gap-8 md:gap-0 border-b border-[#23262B] pb-12">
          {/* Feature 1 */}
          <div className="flex-1 flex flex-col items-center justify-center w-full  ">
            {/* Shield Icon */}
            <svg
              className="w-7 h-7 text-white mb-3"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 3l7 4v5c0 5.25-3.5 9.74-7 11-3.5-1.26-7-5.75-7-11V7l7-4z"
              />
            </svg>
            <div className="font-semibold text-white mb-1 text-base md:text-lg">
              Automate expense resolution.
            </div>
            <div className="text-gray-400 text-sm md:text-base max-w-xs">
              Automate in-policy approvals, custom routing, and exception
              detection. Brex AI will even start a conversation to help you
              resolve issues faster.
            </div>
          </div>
          {/* Feature 2 */}
          <div className="flex-1 flex flex-col items-center  justify-center w-full">
            {/* Cloud Icon */}
            <svg
              className="w-7 h-7 text-white mb-3"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3 15a4 4 0 014-4h1a4 4 0 018 0h1a4 4 0 014 4 4 4 0 01-4 4H7a4 4 0 01-4-4z"
              />
            </svg>
            <div className="font-semibold text-white mb-1 text-base md:text-lg">
              Eliminate receipt reviews.
            </div>
            <div className="text-gray-400 text-sm md:text-base max-w-xs">
              Let Equate AI search receipts and data for you using LLMs to
              detect policy violations — like “vodka” when “alcohol” isn’t on
              the receipt.
            </div>
          </div>
          {/* Feature 3 */}
          <div className="flex-1 flex flex-col items-center justify-center w-full ">
            {/* Check Icon */}
            <svg
              className="w-7 h-7 text-white mb-3"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M5 13l4 4L19 7"
              />
            </svg>
            <div className="font-semibold text-white mb-1 text-base md:text-lg">
              Find transactions fast.
            </div>
            <div className="text-gray-400 text-sm md:text-base max-w-xs">
              Get instant insight into spending patterns with natural-language
              search — e.g., “marketing expenses &gt; $200 without receipts last
              month.”
            </div>
          </div>
        </div>

        {/* Analytics Headline Section */}
        <div className="max-w-4xl mx-auto px-3 md:px-12 pt-16 pb-12 text-center">
          <div className="mb-2 text-xs font-mono tracking-widest text-gray-400">
            AI FOR{" "}
            <span className="text-white font-semibold">FINANCE TEAMS</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4 leading-tight">
            Speed up decision making with AI-powered analytics.
          </h2>
          <p className="text-gray-300 text-base md:text-lg">
            Operate faster with Equate AI running analyses and surfacing
            suggestions for you.
          </p>
        </div>
      </section>

      <section className="bg-[#06101B] pb-12">
        <div className="max-w-[1920px] px-3 md:px-12 mx-auto ">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-24">
            {/* Left: Image */}
            <div className="w-full lg:w-1/2 flex justify-center">
              <img
                src="/assets/equate-ai/suggestions.png"
                alt="AI Monthly Close"
                className="w-full max-w-lg rounded-2xl p-2 bg-white object-contain"
                loading="lazy"
              />
            </div>

            {/* Right: Features */}
            <div className="w-full lg:w-1/2 flex flex-col gap-8">
              <div className="flex items-start gap-5">
                <FiGitMerge className="text-2xl text-gray-200 mt-1" />
                <div>
                  <div className="font-semibold text-white text-lg mb-1">
                    Accelerate accounting.
                  </div>
                  <div className="text-gray-400 text-base">
                    Get accounting rule suggestions to further automate GL
                    coding. Shorten the tail end of transactions that need
                    manual attention.
                  </div>
                </div>
              </div>
              <div className="flex items-start gap-5">
                <FiInfo className="text-2xl text-gray-200 mt-1" />
                <div>
                  <div className="font-semibold text-white text-lg mb-1">
                    Get custom spend insights.
                  </div>
                  <div className="text-gray-400 text-base">
                    Customize what you want Equate AI to find for you, such as
                    expensive purchases, anomalies, or expenses that exceed
                    per-diem limits.
                  </div>
                </div>
              </div>
              <div className="flex items-start gap-5">
                <FiTrendingUp className="text-2xl text-gray-200 mt-1" />
                <div>
                  <div className="font-semibold text-white text-lg mb-1">
                    Improve forecasting.
                  </div>
                  <div className="text-gray-400 text-base">
                    Equate AI can help analyze your budgets, spend limits, and
                    utilization patterns to offer insights on spend
                    optimization.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
