'use client';

export default function BrexFeatureSection() {
  return (
    <section
      className="
        w-full bg-white py-12
        px-4
        sm:px-6
        md:px-10
        lg:px-[72px]
        xl:px-[96px]
        font-inter
      "
    >
      {/* Heading */}
      <div className="max-w-4xl mx-auto text-center mb-10">
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-black mb-4 leading-tight">
          The card is just the start.
        </h2>
        <p className="text-gray-700 text-base sm:text-lg md:text-xl font-normal">
          Everything you need to boost spending power and control — and eliminate manual work.
        </p>
      </div>

      {/* Cards */}
      <div className="
        max-w-7xl mx-auto
        grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5
        gap-4
      ">
        {/* Card Template */}
        <div className="bg-[#f7fafc] rounded-2xl shadow-sm px-6 py-6 flex flex-col justify-between min-h-[330px] max-w-[240px] mx-auto w-full transition-all">
          <div>
            <h3 className="font-semibold text-lg text-black mb-2">Corporate cards</h3>
            <p className="text-gray-600 text-[14px] sm:text-[13px] mb-4 leading-snug">
              Spend smart globally with powerful cards and <a className="text-[#6e6e73] underline" href="#">built-in controls</a>.
            </p>
          </div>
          <div className="flex-1 flex items-end">
            <img
              src="https://brand.brex.com/transform/958e43db-605d-416c-a3a7-ac0e07d83db8/HP-Tile-1?io=transform:fit,width:2000,height:1085&quality=95"
              alt="Brex Corporate Cards"
              className=" h-auto object-contain rounded-lg"
              loading="lazy"
            />
          </div>
        </div>

        {/* Expense management */}
        <div className="bg-[#f7fafc] rounded-2xl shadow-sm px-6 py-6 flex flex-col justify-between min-h-[330px] max-w-[240px] mx-auto w-full transition-all">
          <div>
            <h3 className="font-semibold text-lg text-black mb-2">Expense management</h3>
            <p className="text-gray-600 text-[14px] sm:text-[13px] mb-4 leading-snug">
              Use AI to automate approvals and expense reports. Track in real time.
            </p>
          </div>
          <div className="flex flex-col gap-2">
            {/* JetBlue */}
            <div className="flex items-center justify-between bg-white rounded-xl px-2 py-2 border border-gray-100">
              <div className="flex items-center gap-2">
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/4/4a/JetBlue_Airways_logo.svg"
                  alt="JetBlue Airlines"
                  className="w-6 h-6 object-contain"
                />
                <div>
                  <span className="text-[14px] font-medium text-gray-900 block leading-tight">JetBlue Airlines</span>
                  <span className="text-[11px] text-gray-400 leading-tight">TRAVEL</span>
                </div>
              </div>
              <span className="bg-orange-50 text-orange-600 text-[12px] font-semibold px-2 py-0.5 rounded-full border border-orange-100">
                Approved
              </span>
            </div>
            {/* Google Cloud */}
            <div className="flex items-center justify-between bg-white rounded-xl px-2 py-2 border border-gray-100">
              <div className="flex items-center gap-2">
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_Cloud_Logo.svg"
                  alt="Google Cloud"
                  className="w-6 h-6 object-contain"
                />
                <div>
                  <span className="text-[14px] font-medium text-gray-900 block leading-tight">Google Cloud</span>
                  <span className="text-[11px] text-gray-400 leading-tight">SOFTWARE</span>
                </div>
              </div>
              <span className="bg-orange-50 text-orange-600 text-[12px] font-semibold px-2 py-0.5 rounded-full border border-orange-100">
                Approved
              </span>
            </div>
          </div>
        </div>

        {/* Travel */}
        <div className="bg-[#f7fafc] rounded-2xl shadow-sm px-6 py-6 flex flex-col justify-between min-h-[330px] max-w-[240px] mx-auto w-full transition-all">
          <div>
            <h3 className="font-semibold text-lg text-black mb-2">Travel</h3>
            <p className="text-gray-600 text-[14px] sm:text-[13px] mb-4 leading-snug">
              Simplify global travel with in-app booking and management.
            </p>
          </div>
          <div className="bg-white rounded-xl px-3 py-2 border border-gray-100">
            <div className="flex items-center justify-between mb-1">
              <span className="text-[14px] font-medium text-gray-900">Reservation</span>
              <span className="bg-orange-50 text-orange-600 text-[11px] font-semibold px-2 py-0.5 rounded-full border border-orange-100">
                Booked
              </span>
            </div>
            <div className="flex items-center justify-between mt-1">
              <div className="text-center">
                <div className="text-base font-semibold text-gray-900">PHX</div>
                <div className="text-[11px] text-gray-400">PHOENIX</div>
              </div>
              <div className="flex-1 mx-2">
                <div className="h-1 bg-orange-200 rounded-full relative">
                  <div className="absolute left-0 top-0 w-full h-1 flex">
                    <div className="bg-orange-500 h-1 rounded-full w-full"></div>
                  </div>
                </div>
              </div>
              <div className="text-center">
                <div className="text-base font-semibold text-gray-900">AUS</div>
                <div className="text-[11px] text-gray-400">AUSTIN</div>
              </div>
            </div>
          </div>
        </div>

        {/* Bill pay */}
        <div className="bg-[#f7fafc] rounded-2xl shadow-sm px-6 py-6 flex flex-col justify-between min-h-[330px] max-w-[240px] mx-auto w-full transition-all">
          <div>
            <h3 className="font-semibold text-lg text-black mb-2">Bill pay</h3>
            <p className="text-gray-600 text-[14px] sm:text-[13px] mb-4 leading-snug">
              Save time with AI-powered invoice entry and payment automation.
            </p>
          </div>
          <div className="flex flex-col gap-2">
            {/* Invoice scanned */}
            <div className="flex items-center bg-white rounded-xl px-2 py-2 border border-gray-100 mb-1">
              <svg className="w-4 h-4 text-orange-500 mr-2" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4" />
                <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" fill="none" />
              </svg>
              <span className="text-[14px] font-medium text-gray-900">Invoice scanned successfully</span>
            </div>
            {/* Invoice summary */}
            <div className="bg-white rounded-xl px-2 py-2 border border-gray-100">
              <div className="flex items-center justify-between mb-1">
                <span className="text-[11px] text-gray-400">Invoice</span>
                <span className="text-[11px] text-gray-400">BALANCE DUE</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-base font-semibold text-gray-900">$20,512.86</span>
                <div className="w-14 h-2 bg-gray-200 rounded-full ml-2 overflow-hidden">
                  <div className="bg-orange-400 h-2 rounded-full w-3/4"></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Banking and treasury */}
        <div className="bg-[#f7fafc] rounded-2xl shadow-sm px-6 py-6 flex flex-col justify-between min-h-[330px] max-w-[240px] mx-auto w-full transition-all">
          <div>
            <h3 className="font-semibold text-lg text-black mb-2">Banking and treasury</h3>
            <p className="text-gray-600 text-[14px] sm:text-[13px] mb-4 leading-snug">
              Save, spend, and grow your cash with <a className="text-[#6e6e73] underline" href="#">up to 4.34%†</a> — from day one.
            </p>
          </div>
          <div className="relative bg-white rounded-xl px-3 py-2 border border-gray-100 flex flex-col justify-end h-20">
            {/* Graph */}
            <svg
              className="absolute bottom-0 left-0 w-full h-14"
              viewBox="0 0 200 60"
              fill="none"
            >
              <path
                d="M0 50 L30 45 L60 40 L90 25 L120 15 L150 10 L180 5 L200 0 L200 60 L0 60 Z"
                fill="#f97316"
                fillOpacity="0.15"
              />
              <path
                d="M0 50 L30 45 L60 40 L90 25 L120 15 L150 10 L180 5 L200 0"
                stroke="#ea580c"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            {/* Value */}
            <div className="relative z-10">
              <div className="inline-block bg-white rounded-lg px-2 py-1 shadow border border-gray-100 mb-1">
                <div className="text-[1.1rem] font-semibold text-gray-900">$608.90</div>
                <div className="text-[11px] text-gray-400 -mt-1">INTEREST EARNED</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
