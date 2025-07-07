'use client';

export default function ExpenseAutomationSection() {
  return (
    <>
    <div className="w-full bg-white py-16 px-4">
      {/* First Section */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left: Image/Card */}
        <div className="flex justify-center">
          <div className="relative w-full max-w-md rounded-2xl overflow-hidden shadow-2xl bg-[#0a233b] p-0">
            <img
              src="/assets/business-banking/assistant.png"
              alt="Brex Assistant"
              className="w-full h-auto object-contain"
              draggable={false}
            />
          </div>
        </div>

        {/* Right: Content */}
        <div className="w-full flex flex-col items-start lg:items-start">
          <h2 className="text-3xl md:text-4xl font-bold  mb-4">
            Get expense reports on time, automatically.
          </h2>
          <p className="text-base md:text-lg mb-7 max-w-xl">
            Brex automates document collection, and Brex Assistant helps employees with questions and tasks — so you can close the books faster.
          </p>
          <ul className="space-y-5">
            <li className="flex items-start gap-3">
              {/* Star icon */}
              <span className="mt-1 text-[#ffb800]">
                <svg width="20" height="20" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M10 2.5l2.39 4.843 5.35.779-3.87 3.772.914 5.335L10 14.347l-4.784 2.522.914-5.335-3.87-3.772 5.35-.779L10 2.5z"/>
                </svg>
              </span>
              <span className=" text-base">
                AI-powered automation and personalized assistance.
              </span>
            </li>
            <li className="flex items-start gap-3">
              {/* Shield icon */}
              <span className="mt-1 text-[#6ee7b7]">
                <svg width="20" height="20" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M10 2l7 3v5c0 5-3.8 9.1-7 10-3.2-.9-7-5-7-10V5l7-3z"/>
                </svg>
              </span>
              <span className=" text-base">
                Receipts compliant with IRS or local rules added automatically.
              </span>
            </li>
            <li className="flex items-start gap-3">
              {/* Memo icon */}
              <span className="mt-1 text-[#fbbf24]">
                <svg width="20" height="20" fill="currentColor" viewBox="0 0 20 20">
                  <rect x="4" y="4" width="12" height="12" rx="2"/>
                  <rect x="7" y="8" width="6" height="2" rx="1" fill="#181c20"/>
                  <rect x="7" y="12" width="4" height="2" rx="1" fill="#181c20"/>
                </svg>
              </span>
              <span className="text-base">
                Memos are auto-generated, and fields are intelligently populated.
              </span>
            </li>
            <li className="flex items-start gap-3">
              {/* Sync icon */}
              <span className="mt-1 text-[#38bdf8]">
                <svg width="20" height="20" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M4 10a6 6 0 0112 0h2a8 8 0 10-2.34 5.66l-1.42-1.42A6 6 0 014 10z"/>
                </svg>
              </span>
              <span className=" text-base">
                Departments, projects, and GLs are automatically set.
              </span>
            </li>
            <li className="flex items-start gap-3">
              {/* Dollar/receipt icon */}
              <span className="mt-1 text-[#34d399]">
                <svg width="20" height="20" fill="currentColor" viewBox="0 0 20 20">
                  <rect x="5" y="3" width="10" height="14" rx="2"/>
                  <path d="M8 7h4M8 11h2" stroke="#181c20" strokeWidth="1.2" strokeLinecap="round"/>
                </svg>
              </span>
              <span className="text-base">
                OCR technology matches receipts in any language or currency.
              </span>
            </li>
          </ul>
        </div>
      </div>

      {/* Second Section: Live Budgets */}
      <div className="max-w-[1920px] px-3 md:px-12 mx-auto mt-24 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left: Content */}
        <div className="w-full flex flex-col items-start mb-10 lg:mb-0">
          <h2 className="text-3xl md:text-5xl font-bold  mb-5">
            Increase accountability with Live Budgets.<sup className="text-base align-super">™</sup>
          </h2>
          <p className="text-base md:text-lg  mb-8 max-w-lg">
            Set top-level budgets across departments and assign them to department heads. They can provision spend to individuals or teams, and track usage in real time. Brex AI will even flag anomalous activity to help you keep everyone on budget globally.
          </p>
          <button className="bg-transparent border border-[#bfc6ce] cursor-pointer font-semibold rounded-lg px-6 py-3 text-base transition-colors duration-200">
            Explore spend limits
          </button>
        </div>
        {/* Right: Image and Testimonial */}
        <div className="w-full flex flex-col items-center">
          <img
            src="/assets/business-banking/engineering.png"
            alt="Live Budgets"
            className="w-full object-contain"
            draggable={false}
          />
          
        </div>
      </div>
    </div>
  
    <div className="w-full bg-[#0a1013] py-16 px-4">
      {/* Top testimonial */}
      <div className="max-w-5xl mx-auto flex flex-col items-center text-center mb-12">
        
        <blockquote className="text-2xl md:text-3xl font-light mb-3 text-white leading-snug">
          “P&amp;L owners have a real-time view into their budgets.”
        </blockquote>
        <div className="text-[#bfc6ce] text-base mb-1">
          — <a href="#" className="underline hover:text-[#ff6600]">Teddy Collins</a>, VP Corporate Finance, SeatGeek
        </div>
        <a href="#" className="text-[#033175] font-semibold text-base hover:underline mt-2">
          Read case study &rarr;
        </a>
      </div>

      {/* Main card and content row */}
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-start gap-12 mb-12">
        {/* Left: Card image */}
        <div className="w-full lg:w-1/2 flex flex-col items-center">
          <img
            src="/assets/business-banking/reviewsbg.png"
            alt="Brex accounting automation"
            className="w-full rounded-2xl object-contain"
            draggable={false}
          />
         
        </div>

        {/* Right: Content */}
        <div className="w-full lg:w-1/2 flex flex-col items-start">
          <h2 className="text-2xl text-white md:text-4xl font-bold  mb-4">
            End the month-end hassle.
          </h2>
          <p className="text-[#bfc6ce] font-semibold mb-2">Brex is built for continuous close.</p>
          <p className="text-base md:text-lg text-[#bfc6ce] mb-8">
            Brex integrates with top ERPs like QuickBooks and NetSuite, helping you close your books every day, enabling in-month reporting, and automating workflows. Brex AI helps you further automate GL coding with smart suggestions for accounting rules and mapping.
          </p>
          <button className="bg-transparent text-white cursor-white border border-[#bfc6ce] hover:bg-[#181c20] font-semibold rounded-lg px-6 py-3 text-base transition-colors duration-200">
            Explore accounting automation
          </button>
        </div>
      </div>

     
    </div>
 </>

  );
}
