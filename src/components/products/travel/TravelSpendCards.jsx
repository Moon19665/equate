'use client';

export default function TravelSpendCards() {
  return (
    <>
    <div className="w-full bg-[#0a1013] py-16 px-4">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Card 1 */}
        <div className="flex flex-col h-full bg-[#181c20] rounded-2xl p-8 shadow-lg">
          {/* Icon */}
          <div className="mb-5">
            <svg width="32" height="32" fill="none" viewBox="0 0 32 32">
              <circle cx="16" cy="16" r="16" fill="#bfc6ce" />
              <path d="M16 8v8l6 3" stroke="#181c20" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
          {/* Title */}
          <h3 className="text-white text-xl font-bold mb-2">
            Enable spend anywhere<br />your team travels.
          </h3>
          {/* Description */}
          <p className="text-[#bfc6ce] text-base mb-4 flex-1">
            Enable travel and expenses worldwide with multi-currency support, local and global reimbursements, and traveler visibility to uphold your duty of care.
          </p>
          {/* CTA */}
          <a href="#" className="text-white font-semibold text-base hover:underline mb-6">
            Learn more about global &rarr;
          </a>
          {/* Demo Avatars/Spend */}
          <div className="flex flex-col gap-4 mt-auto bg-white p-2 rounded-xl">
            <div className="w-full max-w-sm md:max-w-md lg:max-w-full">
  <div className="w-full rounded-xl  overflow-hidden ">
    <img
      src="/assets/travel/travel-equate.png"
      alt="Travel Visual"
      className="w-full h-80 object-contain"
      draggable={false}
    />
  </div>
</div>

          </div>
        </div>

        {/* Card 2 */}
        <div className="flex flex-col h-full bg-[#181c20] rounded-2xl p-8 shadow-lg">
          {/* Icon */}
          <div className="mb-5">
            <svg width="32" height="32" fill="none" viewBox="0 0 32 32">
              <rect x="8" y="8" width="16" height="16" rx="4" fill="#bfc6ce" />
              <path d="M16 12v8M12 16h8" stroke="#181c20" strokeWidth="2" strokeLinecap="round" />
            </svg>
          </div>
          {/* Title */}
          <h3 className="text-white text-xl font-bold mb-2">
            Keep travel under budget<br />— and in policy.
          </h3>
          {/* Description */}
          <p className="text-[#bfc6ce] text-base mb-4 flex-1">
            Provision spend limits for travel with embedded policies, track in real time to keep everyone accountable, and automate policy compliance.
          </p>
          {/* CTA */}
          <a href="#" className="text-white font-semibold text-base hover:underline mb-6">
            Explore spend limits &rarr;
          </a>
          {/* Demo Mobile */}
          <div className="flex justify-center bg-white p-2 rounded-xl mt-auto">
            <img
              src="/assets/business-banking/cardup.png"
              alt="Mobile Spend Limit"
              className=" h-80 rounded-xl  object-contain"
              draggable={false}
            />
          </div>
        </div>

        {/* Card 3 */}
        <div className="flex flex-col h-full bg-[#181c20] rounded-2xl p-8 shadow-lg">
          {/* Icon */}
          <div className="mb-5">
            <svg width="32" height="32" fill="none" viewBox="0 0 32 32">
              <rect x="6" y="6" width="20" height="20" rx="4" fill="#bfc6ce" />
              <path d="M10 16h12M16 10v12" stroke="#181c20" strokeWidth="2" strokeLinecap="round" />
            </svg>
          </div>
          {/* Title */}
          <h3 className="text-white text-xl font-bold mb-2">
            Automate receipts and reconciliation.
          </h3>
          {/* Description */}
          <p className="text-[#bfc6ce] text-base mb-4 flex-1">
            Brex automatically adds receipts and pre-populates memos, categories, and other expense fields. No more manual work to do expenses or close the books.
          </p>
          {/* CTA */}
          <a href="#" className="text-white font-semibold text-base hover:underline mb-6">
            Explore expense management &rarr;
          </a>
          {/* Demo Receipt */}
          <div className="flex justify-center bg-white p-2 rounded-xl mt-auto">
            <img
              src="/assets/homepage-images/equate-cards.png"
              alt="Receipt Example"
              className=" h-80 rounded-xl  object-contain"
              draggable={false}
            />
          </div>
        </div>
      </div>
    </div>
     <div
     className="w-full  flex flex-col items-center justify-center relative bg-cover bg-center bg-no-repeat"
   >
     {/* Overlay for text readability */}
     <div className="absolute inset-0 bg-[#0a1013] z-0" />

     {/* Content */}
     <div className="relative z-10 flex flex-col items-center w-full pt-14 pb-8 ">
       <h1 className="text-white text-3xl md:text-5xl font-bold mb-3 text-center">
         Experience corporate travel at its best.
       </h1>
       <p className="text-[#bfc6ce] text-base md:text-lg mb-12 text-center max-w-2xl">
         No one pays us to influence your search results — you see every option at better rates, with no exclusions.
       </p>
       {/* Phones Image */}
       <div className="w-full flex justify-center">
         <img
           src="https://brand.brex.com/transform/9e8e795a-cf95-4b81-b7a7-61024cca93fa/vp-dashboard?io=transform:fit,width:2000,height:570&quality=95"
           alt="Corporate travel dashboard on mobile"
           className="w-full h-auto object-contain"
           draggable={false}
         />
       </div>
     </div>
   </div>
    </>
  );
}
