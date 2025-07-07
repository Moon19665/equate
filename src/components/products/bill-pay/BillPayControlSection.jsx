import React from "react";

export default function BillPayHeroFullBG() {
  return (
    <>
   <section
  className="relative w-full min-h-[420px] flex items-center py-12 px-4"
  // style={{
  //   backgroundImage:
  //     "url('https://brand.brex.com/transform/83e8dafe-a571-4ba5-8ed3-36a22f00976a/Payment-BG-Video?io=transform:fit,width:2000,height:850&quality=95')",
  //   backgroundSize: 'cover',
  //   backgroundPosition: 'center',
  //   backgroundRepeat: 'no-repeat',
  // }}
>
  {/* Optional Overlay */}
  <div className="absolute inset-0 bg-[#0a1013]/80 pointer-events-none" />

  <div className="relative z-10 w-full max-w-[1920px] px-3 md:px-12 mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
    {/* Left Column: Content */}
    <div className="text-center lg:text-left px-4 md:px-8">
      <h1 className="text-white text-3xl md:text-5xl font-bold mb-4 leading-tight drop-shadow-lg">
        Control payments proactively.
      </h1>
      <p className="text-white text-base md:text-lg max-w-md mx-auto lg:mx-0 drop-shadow-md">
        Brex makes it easy to enable vendor spend and ensure payments are in policy — before they happen.
      </p>
    </div>

    {/* Right Column: Image */}
    <div className="w-full flex justify-center px-4 md:px-8">
      <img
        src="/assets/bill-pay/merchant.png"
        alt="Bill Pay UI Preview"
        className="w-full max-w-lg rounded-2xl  object-contain"
      />
    </div>
  </div>
</section>

    <div className="w-full bg-[#0a1013] py-10">
    <div className="max-w-[1920px] px-3 md:px-12 mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
      {/* Feature 1 */}
      <div className="bg-[#181c20] rounded-xl p-6 md:p-7 shadow-md">
        <h3 className="text-white text-lg md:text-xl font-bold mb-2">
          Enable procurement spend
        </h3>
        <p className="text-[#bfc6ce] text-sm md:text-base">
          Issue a <a href="#" className="text-[#7dd3fc] underline hover:text-[#38bdf8] transition">spend limit</a> for a PO, vendor, or contract to enable ACH, check, or wire payments. Never send more than the contracted amount again.
        </p>
      </div>
      {/* Feature 2 */}
      <div className="bg-[#181c20] rounded-xl p-6 md:p-7 shadow-md">
        <h3 className="text-white text-lg md:text-xl font-bold mb-2">
          Embed custom controls
        </h3>
        <p className="text-[#bfc6ce] text-sm md:text-base">
          Require an invoice and enforce categories, vendors, limits, and more automatically — ensuring every payment is in-policy.
        </p>
      </div>
      {/* Feature 3 */}
      <div className="bg-[#181c20] rounded-xl p-6 md:p-7 shadow-md">
        <h3 className="text-white text-lg md:text-xl font-bold mb-2">
          Track actuals vs. budget
        </h3>
        <p className="text-[#bfc6ce] text-sm md:text-base">
          View payables and payments in real time to keep AP teams accountable and on budget. Run custom AP reports on demand.
        </p>
      </div>
    </div>
  </div>
    </>
  );
}
