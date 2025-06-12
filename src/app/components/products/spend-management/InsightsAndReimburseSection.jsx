'use client';

export default function InsightsAndReimburseSection() {
  return (
    <>
    <div className="w-full bg-[#0a1013]  px-4">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-12">
        {/* Left Column: Insights */}
        <div className="w-full lg:w-1/2 flex flex-col justify-between">
          <div>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-3">
              Insights you can act on.
            </h2>
            <p className="text-[#bfc6ce] text-base md:text-lg mb-10 max-w-xl">
              Run real-time spend and budget reports across cards, reimbursements, travel, and payments to find ways to save and improve ROI. Customize AI-powered insights, such as for spikes in spending, that help improve decision making.
            </p>
          </div>
          {/* Top-right floating compliance cards */}
          <div className="relative w-full h-40 md:h-48 lg:h-64">
            <img
              src="https://brand.brex.com/transform/a1d86d83-e1c6-4cd0-b49f-5284535eb9e3/Insights?io=transform:fit,width:2000,height:1875&quality=95"
              alt="Compliance breakdown"
              className="absolute right-0 top-0 w-60 md:w-72 lg:w-96 max-w-full rounded-xl shadow-lg"
              style={{ zIndex: 2 }}
              draggable={false}
            />
          </div>
          {/* Bottom-left floating expense cards (mobile: below, desktop: left) */}
          <div className="relative w-full h-40 md:h-48 lg:h-52 mt-20 md:mt-0">
            <img
              src="https://brand.brex.com/transform/077d8e97-9278-438b-98e4-9ad54282fa87/Spend-Management-Reimburse?io=transform:fit,width:2000,height:1875&quality=95"
              alt="Expense cards"
              className="absolute left-0 bottom-0 w-80 md:w-96 max-w-full rounded-xl shadow-lg"
              style={{ zIndex: 2 }}
              draggable={false}
            />
          </div>
        </div>

        {/* Right Column: Reimburse Employees */}
        <div className="w-full lg:w-1/2 flex flex-col justify-center">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-3">
            Reimburse employees anywhere, fast.
          </h2>
          <p className="text-[#bfc6ce] text-base md:text-lg mb-6 max-w-xl">
            US and international employees can get reimbursed in three days or less — and your policy will be auto-applied.
          </p>
          <ul className="space-y-5">
            <li className="flex items-start gap-3">
              <span className="mt-1">
                <svg width="22" height="22" fill="none" viewBox="0 0 24 24">
                  <circle cx="12" cy="12" r="10" fill="#B6F0EA" />
                  <path d="M12 7v5l4 2" stroke="#181c20" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </span>
              <span className="text-[#bfc6ce] text-base">
                Reimburse employees in their local currency and bank account — in 70 countries and counting.
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="mt-1">
                <svg width="22" height="22" fill="none" viewBox="0 0 24 24">
                  <rect x="4" y="4" width="16" height="16" rx="4" fill="#B6F0EA" />
                  <rect x="8" y="10" width="8" height="2" rx="1" fill="#181c20" />
                </svg>
              </span>
              <span className="text-[#bfc6ce] text-base">
                Subsidiaries can issue reimbursements from their local bank account to simplify accounting.
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="mt-1">
                <svg width="22" height="22" fill="none" viewBox="0 0 24 24">
                  <circle cx="12" cy="12" r="10" fill="#B6F0EA" />
                  <text x="6" y="17" fontSize="14" fill="#181c20" fontWeight="bold">$0</text>
                </svg>
              </span>
              <span className="text-[#bfc6ce] text-base">
                Unlimited reimbursements with no per-transaction fees.
              </span>
            </li>
          </ul>
        </div>
      </div>
    </div>
     <div className="w-full bg-[#0a1013]  px-4">
     <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12">
       {/* Left: Content */}
       <div className="w-full lg:w-1/2 flex flex-col items-start mb-10 lg:mb-0">
         <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
           Manage spend globally, operate locally.
         </h2>
         <p className="text-base md:text-lg text-[#bfc6ce] mb-8 max-w-lg">
           Brex makes it easy to manage global spend across locations and operate in virtually any currency.
         </p>
         <button className="bg-transparent border border-[#bfc6ce] hover:bg-[#181c20] text-white font-semibold rounded-lg px-6 py-3 text-base transition-colors duration-200">
           Explore global capabilities
         </button>
       </div>
       {/* Right: Image */}
       <div className="w-full lg:w-1/2 flex justify-center items-center">
         <img
           src="https://brand.brex.com/transform/2e7ce40d-eab4-4d00-97d3-7e2e17e74ea9/Spend-Management-Global?io=transform:fit,width:2000,height:2000&quality=95"
           alt="Manage spend globally"
           className="w-full max-w-xl rounded-2xl shadow-xl object-contain"
           draggable={false}
         />
       </div>
     </div>
   </div>
    </>
  );
}
