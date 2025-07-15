'use client';

export default function BankingFeatures() {
  return (
    <div className="w-full bg-[#f7f7fb] py-16 flex flex-col items-center">
      {/* Heading */}
      <h2 className="text-3xl md:text-5xl font-semibold text-[#111] text-center mb-10">
        Business banking designed for speed, at scale.
      </h2>

      

      {/* Features Grid */}
      <div className="w-full max-w-[1920px] mx-auto px-3 md:px-12 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Feature 1 */}
        <div className="bg-white rounded-xl shadow-sm p-8 flex flex-col items-start">
          <h3 className="text-xl  text-[#111] mb-4">
            Earn returns from day one.
          </h3>
          <ul className="text-[#222] text-base space-y-3">
            <li className="flex items-start">
              <span className="text-[#67c23a] mr-2 mt-1">✓</span>
              <span>Deposit funds and earn returns on your first dollar</span>
            </li>
            <li className="flex items-start">
              <span className="text-[#67c23a] mr-2 mt-1">✓</span>
              <span>Create Equate cards for seamless payments</span>
            </li>
            <li className="flex items-start">
              <span className="text-[#67c23a] mr-2 mt-1">✓</span>
              <span>Connect your payroll, ERP, and HRIS</span>
            </li>
          </ul>
        </div>
        {/* Feature 2 */}
        <div className="bg-white rounded-xl shadow-sm p-8 flex flex-col items-start">
          <h3 className="text-xl font-semibold text-[#111] mb-4">
            Automate banking busywork.
          </h3>
          <ul className="text-[#222] text-base space-y-3">
            <li className="flex items-start">
              <span className="text-[#67c23a] mr-2 mt-1">✓</span>
              <span>Automate AP with integrated bill pay</span>
            </li>
            <li className="flex items-start">
              <span className="text-[#67c23a] mr-2 mt-1">✓</span>
              <span>Send customized, recurring invoices to your customers</span>
            </li>
            <li className="flex items-start">
              <span className="text-[#67c23a] mr-2 mt-1">✓</span>
              <span>Sync transactions directly with your ERP</span>
            </li>
          </ul>
        </div>
        {/* Feature 3 */}
        <div className="bg-white rounded-xl shadow-sm p-8 flex flex-col items-start">
          <h3 className="text-xl font-semibold text-[#111] mb-4">
            Operate globally with ease.
          </h3>
          <ul className="text-[#222] text-base space-y-3">
            <li className="flex items-start">
              <span className="text-[#67c23a] mr-2 mt-1">✓</span>
              <span>Make payments in 60+ local currencies</span>
            </li>
            <li className="flex items-start">
              <span className="text-[#67c23a] mr-2 mt-1">✓</span>
              <span>Fund employee reimbursements in 60+ countries</span>
            </li>
            <li className="flex items-start">
              <span className="text-[#67c23a] mr-2 mt-1">✓</span>
              <span>Automate spend controls and approval flows</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
