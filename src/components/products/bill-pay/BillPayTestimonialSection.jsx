import React from "react";

export default function BillPayTestimonialSection() {
  return (
    <div className="w-full bg-[#0a1013] flex flex-col items-center px-4  relative"
      // style={{
      //   backgroundImage:
      //     "url('https://brand.brex.com/transform/83e8dafe-a571-4ba5-8ed3-36a22f00976a/Payment-BG-Video?io=transform:fit,width:2000,height:850&quality=95')",
      //   backgroundSize: 'cover',
      //   backgroundPosition: 'center',
      //   backgroundRepeat: 'no-repeat',
      // }}
    >
      {/* Overlay for readability */}
      <div className="absolute inset-0 bg-[#0a1013]/80 pointer-events-none" />

      <div className="relative z-10 flex flex-col items-center w-full">
       

        {/* Testimonial */}
        <blockquote className="text-white text-xl md:text-2xl lg:text-3xl font-light mb-6 leading-snug max-w-3xl text-center">
          “Before Brex, we had Bill.com for invoicing and corporate cards through Bank of America, and we used our payroll provider for reimbursements. Now having a unified approach to all of this with Brex has really streamlined the process.”
        </blockquote>
        <div className="text-[#bfc6ce] text-base mb-12 text-center">
          — <a href="#" className="underline hover:text-[#ff6600] transition-colors">Sean Soper</a>, Head of Accounting and Financial Operations, Alchemy
        </div>

        {/* Main Heading */}
        <h2 className="text-white text-3xl md:text-5xl font-bold mb-2 text-center">
          Manage all your bills in one place.
        </h2>
        <p className="text-[#bfc6ce] text-base md:text-lg mb-10 text-center">
          View all invoices, payables, and payments for any period, anytime.
        </p>

        {/* Dashboard Image */}
        <div className="w-full max-w-4xl mx-auto">
          <img
            src="/assets/business-banking/reviewsbg.png"
            alt="Bill Pay Dashboard"
            className="w-full h-auto rounded-2xl shadow-xl object-contain"
            draggable={false}
          />
        </div>
      </div>
    </div>
  );
}
