'use client';

export default function InsightsAndReimburseSection() {
  return (
    <>
    <div className="w-full bg-[#0a1013] py-16 px-4">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-12">
        {/* Left Column: Insights */}
        <div className="w-full lg:w-1/2 flex flex-col justify-between">
        
          {/* Top-right floating compliance cards */}
          <div className="relative w-full h-40 md:h-48 lg:h-64">
            <img
              src="/assets/business-banking/taxi.png"
              alt="Compliance breakdown"
              className="  rounded-xl "
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
                  <circle cx="12" cy="12" r="10" fill="#033175" />
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
                  <rect x="4" y="4" width="16" height="16" rx="4" fill="#033175" />
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
                  <circle cx="12" cy="12" r="10" fill="#033175" />
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
     <div className="w-full bg-white py-16  px-4">
     <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12">
       {/* Left: Content */}
       <div className="w-full lg:w-1/2 flex flex-col items-start mb-10 lg:mb-0">
         <h2 className="text-3xl md:text-5xl font-bold mb-6">
           Manage spend globally, operate locally.
         </h2>
         <p className="text-base md:text-lg  mb-8 max-w-lg">
           Brex makes it easy to manage global spend across locations and operate in virtually any currency.
         </p>
         <button className="bg-transparent border border-[#033175]  text-[#033175] font-semibold rounded-lg px-6 py-3 text-base transition-colors duration-200">
           Explore global capabilities
         </button>
       </div>
       {/* Right: Image */}
       <div className="w-full lg:w-1/2 flex justify-center items-center">
         <img
           src="/assets/business-banking/acme.png"
           alt="Manage spend globally"
           className="w-full   object-contain"
           draggable={false}
         />
       </div>
     </div>
   </div>
    </>
  );
}
