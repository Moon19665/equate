import { FaEye, FaMagic, FaShieldAlt, } from "react-icons/fa";
import { FiGitMerge, FiInfo, FiTrendingUp } from "react-icons/fi";

export default function BrexAIFullPage() {
  return (
    <div className="bg-[#070B12] w-full">
      {/* Section 1: Automate workflows */}
      <section className="w-full border-t border-b border-[#23262B] px-4 py-12">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white text-center mb-2">
            Automate workflows for every type<br className="hidden sm:inline" /> of spend.
          </h2>
          <p className="text-base md:text-lg text-gray-300 text-center mb-8">
            Brex AI eliminates manual work by automating tasks across our spend platform.
          </p>
          <div className="flex flex-col md:flex-row justify-center items-stretch gap-8">
            <div className="flex-1 flex flex-col items-center px-2">
              <FaEye className="text-2xl md:text-3xl text-gray-100 mb-3" />
              <div className="font-semibold text-white mb-1">
                Get trust and <span className="text-blue-400">transparency</span>
              </div>
              <div className="text-gray-400 text-sm md:text-base text-center md:text-left">
                Brex is transparent in how AI works to automate workflows, guide reviews, and provide insights.
              </div>
            </div>
            <div className="flex-1 flex flex-col items-center px-2">
              <FaMagic className="text-2xl md:text-3xl text-gray-100 mb-3" />
              <div className="font-semibold text-white mb-1">
                Stay in <span className="text-blue-400">control</span>
              </div>
              <div className="text-gray-400 text-sm md:text-base text-center md:text-left">
                Brex AI acts as an extension of your own decision making, providing the automations and suggestions you want.
              </div>
            </div>
            <div className="flex-1 flex flex-col items-center px-2">
              <FaShieldAlt className="text-2xl md:text-3xl text-gray-100 mb-3" />
              <div className="font-semibold text-white mb-1">
                Ensure complete <span className="text-blue-400">privacy</span>
              </div>
              <div className="text-gray-400 text-sm md:text-base text-center md:text-left">
                Your data is protected by strict security protocols and is never used to improve third-party AI models.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: Platform Diagram */}
      <section className="w-full px-2 py-12 flex flex-col items-center bg-[#070B12]">
        <div className="max-w-5xl w-full">
          <img
            src="https://brand.brex.com/transform/58af0a39-f386-4ce0-acba-b1806b844061/Final-Marketecture-AI?io=transform:fit,width:2000,height:1145&quality=95"
            alt="Brex Empower Platform"
            className="w-full h-auto rounded-xl shadow-xl object-contain border border-[#23262B] bg-[#10141C]"
            loading="lazy"
          />
        </div>
      </section>

      {/* Section 3: Manage spend smarter with AI */}
      <section className="w-full py-16 px-4 bg-[#070B12]">
        <div className="max-w-7xl mx-auto">
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
                Executives have long enjoyed having someone else do their expenses, and Brex AI extends that luxury to every employee with Brex Assistant.
              </p>
            </div>
            {/* Right: Mobile Video */}
            <div className="w-full lg:w-1/2 flex justify-center">
              <div className="max-w-xs w-full rounded-2xl overflow-hidden shadow-2xl bg-black">
                <video
                  name="BrexAi-AiScroll-Mobile-R3-OPT (1)"
                  autoPlay
                  muted
                  loop
                  playsInline
                  preload="none"
                  poster="https://brand.brex.com/m/1d39b2944573711e/webimage-BrexAi-AiScroll-Mobile-R3-OPT-1.jpg"
                  className="w-full h-auto object-contain"
                  crossOrigin="anonymous"
                >
                  <source
                    src="https://brand.brex.com/m/1d39b2944573711e/original/BrexAi-AiScroll-Mobile-R3-OPT-1.mp4"
                    type="video/mp4"
                  />
                  <img
                    src="https://brand.brex.com/m/1d39b2944573711e/webimage-BrexAi-AiScroll-Mobile-R3-OPT-1.jpg"
                    alt="Brex AI Mobile Demo"
                    className="w-full h-auto object-contain"
                  />
                </video>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 4: See Brex AI in action */}
      <section className="w-full py-16 px-4 bg-[#070B12]">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-8">
            See Brex AI <span className="text-blue-400">in action.</span>
          </h2>
          <div className="flex justify-center">
            <div className="w-full max-w-2xl rounded-2xl overflow-hidden shadow-2xl bg-black">
              <video
                name="BrexAi-DemoCombined-R2-Higher"
                loop
                controls
                playsInline
                preload="none"
                poster="https://brand.brex.com/transform/71b22dea-dcd9-467d-9489-3f75dd4a1e8b/AI-Video-TitleCard?io=transform:fit,width:2000,height:1125&quality=95"
                className="w-full h-auto object-contain"
                crossOrigin="anonymous"
              >
                <source
                  src="https://brand.brex.com/m/501d7f19b11783d7/original/BrexAi-DemoCombined-R2-Higher.mp4"
                  type="video/mp4"
                />
                <img
                  src="https://brand.brex.com/transform/71b22dea-dcd9-467d-9489-3f75dd4a1e8b/AI-Video-TitleCard?io=transform:fit,width:2000,height:1125&quality=95"
                  alt="Brex AI Demo Video"
                  className="w-full h-auto object-contain"
                />
              </video>
            </div>
          </div>
        </div>
      </section>

      {/* Section 5: Put expense reports on autopilot */}
      <section className="w-full py-16 px-4 bg-[#070B12]">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
            {/* Left: Video */}
            <div className="w-full lg:w-1/2 flex justify-center">
              <div className="w-full max-w-lg rounded-2xl overflow-hidden shadow-2xl bg-black">
                <video
                  name="BrexAi-WebMod1-R2"
                  autoPlay
                  muted
                  loop
                  playsInline
                  preload="none"
                  poster="https://brand.brex.com/m/f145872df706975/webimage-BrexAi-WebMod1-R2.jpg"
                  className="w-full h-auto object-contain"
                  crossOrigin="anonymous"
                >
                  <source
                    src="https://brand.brex.com/m/f145872df706975/original/BrexAi-WebMod1-R2.mp4"
                    type="video/mp4"
                  />
                  <img
                    src="https://brand.brex.com/m/f145872df706975/webimage-BrexAi-WebMod1-R2.jpg"
                    alt="Brex AI Web Module"
                    className="w-full h-auto object-contain"
                  />
                </video>
              </div>
            </div>
            {/* Right: Text */}
            <div className="w-full lg:w-1/2">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-6 text-center lg:text-left">
                Put expense reports on autopilot.
              </h2>
              <p className="text-gray-300 text-base sm:text-lg text-center lg:text-left max-w-lg">
                Brex auto-generates receipts from L3 payment data and uses LLMs and real-time integrations to auto-populate memos, attendees, and expense category.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 6: Get instant answers 24/7 (with video) */}
      <section className="bg-black w-full py-16 px-4">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-12">
          {/* Left: Text Content */}
          <div className="w-full lg:w-1/2 mb-10 lg:mb-0">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Get instant answers 24/7.
            </h2>
            <p className="text-gray-300 text-base md:text-lg max-w-lg">
              Free your finance team from expense policy and reporting questions.
              With Brex, you can give every employee their own virtual assistant to get answers in real time and automate tedious expense tasks.
            </p>
          </div>
          {/* Right: Video */}
          <div className="w-full lg:w-1/2 flex justify-center">
            <div className="w-full max-w-md rounded-2xl overflow-hidden shadow-2xl bg-black">
              <video
                name="BrexAi-WebMod2-R3-OPT (1)"
                autoPlay
                muted
                loop
                playsInline
                preload="none"
                poster="https://brand.brex.com/m/4f09a2f4c4be3db2/webimage-BrexAi-WebMod2-R3-OPT-1.jpg"
                className="w-full h-auto object-contain"
                crossOrigin="anonymous"
              >
                <source
                  src="https://brand.brex.com/m/4f09a2f4c4be3db2/original/BrexAi-WebMod2-R3-OPT-1.mp4"
                  type="video/mp4"
                />
                <img
                  src="https://brand.brex.com/m/4f09a2f4c4be3db2/webimage-BrexAi-WebMod2-R3-OPT-1.jpg"
                  alt="Brex AI Instant Answers Demo"
                  className="w-full h-auto object-contain"
                />
              </video>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-[#070B12] w-full py-16 px-4">
  <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-12">
    {/* Left: Video */}
    <div className="w-full lg:w-1/2 flex justify-center mb-8 lg:mb-0">
      <div className="w-full max-w-md rounded-2xl overflow-hidden shadow-2xl bg-black">
        <video
          name="BrexAi-WebMod3-R1 (1)"
          autoPlay
          muted
          loop
          playsInline
          preload="none"
          poster="https://brand.brex.com/m/3ce795ea06f0d65a/webimage-BrexAi-WebMod3-R1-1.jpg"
          className="w-full h-auto object-contain"
          crossOrigin="anonymous"
        >
          <source
            src="https://brand.brex.com/m/3ce795ea06f0d65a/original/BrexAi-WebMod3-R1-1.mp4"
            type="video/mp4"
          />
          <img
            src="https://brand.brex.com/m/3ce795ea06f0d65a/webimage-BrexAi-WebMod3-R1-1.jpg"
            alt="Brex AI Offload Expense Tasks Demo"
            className="w-full h-auto object-contain"
          />
        </video>
      </div>
    </div>
    {/* Right: Text */}
    <div className="w-full lg:w-1/2 flex flex-col items-center lg:items-start text-center lg:text-left">
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4">
        Offload expense tasks to AI.
      </h2>
      <p className="text-gray-300 text-base md:text-lg max-w-lg">
        Delegate tasks like “Assign all DoorDash charges to my WFH stipend” or
        “Add a memo that says ‘September ad campaign’ to all my Google Ads expenses in September”, and Brex Assistant will follow your command.
      </p>
    </div>
  </div>
</section>
<section className="bg-[#070B12] w-full py-16 px-4">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-12">
        {/* Left: Text */}
        <div className="w-full lg:w-1/2 flex flex-col items-start text-left mb-10 lg:mb-0">
          <span className="uppercase tracking-widest text-xs text-gray-400 mb-2">
            AI for <span className="text-blue-400 font-semibold">Managers</span>
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Review only the expenses that need it.
          </h2>
          <p className="text-gray-300 text-base md:text-lg mb-6 max-w-lg">
            Brex AI uses machine learning (ML) models to guide managers to expenses worthy of human review and automates the rest.
          </p>
          <a
            href="#"
            className="text-orange-500 hover:text-orange-400 font-semibold transition-colors text-base inline-flex items-center"
          >
            Check out Brex expense management &rarr;
          </a>
        </div>
        {/* Right: Image */}
        <div className="w-full lg:w-1/2 flex justify-center">
          <img
            src="https://brand.brex.com/transform/46c5fe52-5ab0-4620-aa56-defb189de211/AI-alcohol-flag?io=transform:fit,width:2000,height:1323&quality=95"
            alt="Brex AI flagged expense"
            className="w-full max-w-md h-auto rounded-2xl shadow-2xl object-contain"
            loading="lazy"
          />
        </div>
      </div>
    </section>
    <section className="bg-[#070B12] w-full py-16 px-4">
      {/* Features Row */}
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-start text-center md:text-left gap-8 md:gap-0 border-b border-[#23262B] pb-12">
        {/* Feature 1 */}
        <div className="flex-1 flex flex-col items-center md:items-start">
          {/* Shield Icon */}
          <svg className="w-7 h-7 text-white mb-3" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 3l7 4v5c0 5.25-3.5 9.74-7 11-3.5-1.26-7-5.75-7-11V7l7-4z" />
          </svg>
          <div className="font-semibold text-white mb-1 text-base md:text-lg">
            Automate expense resolution.
          </div>
          <div className="text-gray-400 text-sm md:text-base max-w-xs">
            Automate in-policy approvals, custom routing, and exception detection. Brex AI will even start a conversation to help you resolve issues faster.
          </div>
        </div>
        {/* Feature 2 */}
        <div className="flex-1 flex flex-col items-center md:items-start">
          {/* Cloud Icon */}
          <svg className="w-7 h-7 text-white mb-3" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M3 15a4 4 0 014-4h1a4 4 0 018 0h1a4 4 0 014 4 4 4 0 01-4 4H7a4 4 0 01-4-4z" />
          </svg>
          <div className="font-semibold text-white mb-1 text-base md:text-lg">
            Eliminate receipt reviews.
          </div>
          <div className="text-gray-400 text-sm md:text-base max-w-xs">
            Let Brex AI search receipts and data for you using LLMs to detect policy violations — like “vodka” when “alcohol” isn’t on the receipt.
          </div>
        </div>
        {/* Feature 3 */}
        <div className="flex-1 flex flex-col items-center md:items-start">
          {/* Check Icon */}
          <svg className="w-7 h-7 text-white mb-3" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
          </svg>
          <div className="font-semibold text-white mb-1 text-base md:text-lg">
            Find transactions fast.
          </div>
          <div className="text-gray-400 text-sm md:text-base max-w-xs">
            Get instant insight into spending patterns with natural-language search — e.g., “marketing expenses &gt; $200 without receipts last month.”
          </div>
        </div>
      </div>

      {/* Analytics Headline Section */}
      <div className="max-w-4xl mx-auto pt-16 pb-12 text-center">
        <div className="mb-2 text-xs font-mono tracking-widest text-gray-400">
          AI FOR <span className="text-white font-semibold">FINANCE TEAMS</span>
        </div>
        <h2 className="text-3xl md:text-5xl font-bold text-white mb-4 leading-tight">
          Speed up decision making with AI-powered analytics.
        </h2>
        <p className="text-gray-300 text-base md:text-lg">
          Operate faster with Brex AI running analyses and surfacing suggestions for you.
        </p>
      </div>
    </section>
    <section className="bg-[#06101B] py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-24">
          {/* Left: Image */}
          <div className="w-full lg:w-1/2 flex justify-center">
            <img
              src="https://brand.brex.com/transform/2ab349d4-abcc-4817-bf5b-f2f2924fcb78/AI-Monthly-close?io=transform:fit,width:2000,height:1405&quality=95"
              alt="AI Monthly Close"
              className="w-full max-w-lg rounded-2xl shadow-xl object-contain"
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
                  Get accounting rule suggestions to further automate GL coding. Shorten the tail end of transactions that need manual attention.
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
                  Customize what you want Brex AI to find for you, such as expensive purchases, anomalies, or expenses that exceed per-diem limits.
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
                  Brex AI can help analyze your budgets, spend limits, and utilization patterns to offer insights on spend optimization.
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
