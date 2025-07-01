export default function AccrualsAccountingSection() {
    return (
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          {/* Main Content Row */}
          <div className="flex flex-col items-center gap-12 lg:gap-20">
           
            {/* Content Column */}
            <div className="w-full text-center">
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                Accruals accounting made easy.
              </h2>
              <p className="text-base md:text-lg text-gray-700 mb-6">
                Automate your accruals process with Equate. Book accruals for incomplete transactions and enable continuous close, so your books are always up to date.
              </p>
              <ul className="space-y-4 text-gray-800 text-base">
                <li className="flex items-start justify-center gap-3">
                  <span className="mt-1 text-green-600">
                    <svg width={20} height={20} fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </span>
                  Book accruals automatically for transactions missing receipts or approvals.
                </li>
                <li className="flex items-start justify-center gap-3">
                  <span className="mt-1 text-green-600">
                    <svg width={20} height={20} fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </span>
                  Enable continuous close with real-time accruals and reconciliations.
                </li>
                <li className="flex items-start justify-center gap-3">
                  <span className="mt-1 text-green-600">
                    <svg width={20} height={20} fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </span>
                  Reduce manual work and errors with automated workflows.
                </li>
              </ul>
            </div>
             {/* Image Column */}
             <div className="w-full  flex justify-center items-center mb-10 lg:mb-0">
              <img
                src="https://brand.brex.com/transform/d3da16dc-ba48-416d-9fb3-38b61cd37eb6/accruals-screen_accounting?io=transform:fit,width:2000,height:685&quality=95"
                alt="Accruals accounting screen"
                className="w-full  rounded-2xl object-contain"
                loading="lazy"
              />
            </div>
          </div>
  
          {/* Comparison Cards Row */}
          <div className="mt-12 flex flex-col md:flex-row gap-6 md:gap-8 justify-center">
            {/* Manual Card */}
            <div className="flex-1 bg-gray-100 rounded-2xl p-6 shadow-sm flex flex-col items-start">
              <div className="flex items-center mb-3">
                <span className="inline-flex items-center justify-center w-8 h-8 rounded-full mr-2">
                  <svg width={24} height={24} fill="none" stroke="currentColor" strokeWidth={2.2} viewBox="0 0 24 24">
                    <circle cx="12" cy="12" r="10" stroke="currentColor" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 9l-6 6m0-6l6 6" stroke="currentColor" />
                  </svg>
                </span>
                <span className="text-lg font-semibold text-gray-900">
                  Stop wasting time on a manual month-end close.
                </span>
              </div>
              <ul className="mt-2 text-gray-700 space-y-1 text-base pl-2">
                <li><span className="text-red-600 font-medium">Manually</span> chase receipts</li>
                <li><span className="text-red-600 font-medium">Manually</span> check for accuracy</li>
                <li><span className="text-red-600 font-medium">Manually</span> record entries in GL accounts</li>
                <li><span className="text-red-600 font-medium">Manually</span> track across tech stack</li>
                <li>Close can take weeks</li>
              </ul>
            </div>
            {/* Automated Card */}
            <div className="flex-1 bg-gray-100 rounded-2xl p-6 shadow-sm flex flex-col items-start">
              <div className="flex items-center mb-3">
                <span className="inline-flex items-center justify-center w-8 h-8 rounded-full  mr-2">
                  <svg width={24} height={24} fill="none" stroke="currentColor" strokeWidth={2.2} viewBox="0 0 24 24">
                    <circle cx="12" cy="12" r="10"  />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M8 12l3 3 5-5" stroke="currentColor" />
                  </svg>
                </span>
                <span className="text-lg font-semibold text-gray-900">
                  Start saving up to 250 hours a year with accounting automation*
                </span>
              </div>
              <ul className="mt-2 text-gray-700 space-y-1 text-base pl-2">
                <li>Receipts are auto generated</li>
                <li>AI checks data and flags anomalies</li>
                <li>Customized rules and auto mapping to GL</li>
                <li>Auto-sync everything to ERP</li>
                <li>Close can take minutes</li>
              </ul>
            </div>
          </div>
          {/* Footnote */}
          <div className="mt-4 text-center text-xs text-gray-500">
            *The metrics provided are from July 2023 and for illustrative purposes only. Past performance does not guarantee future results, which may vary.
          </div>
        </div>
      </section>
    );
  }
  