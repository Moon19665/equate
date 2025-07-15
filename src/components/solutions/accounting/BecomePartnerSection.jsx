'use client';

import Image from 'next/image';

export default function BecomePartnerSection() {
  return (
    <section className="w-full max-w-[1920px] mx-auto py-16 px-6 md:px-12 bg-black text-white">
      <div className="flex flex-col md:flex-row items-center justify-between gap-12">
        
        {/* Left Column: Content */}
        <div className="w-full md:w-1/2">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Ready to become a partner?
          </h2>
          <p className="text-gray-300 text-lg mb-6">
            Sign up today and simplify every month-end close — for you and your clients.
          </p>
          <button className="bg-[#033175] text-white font-semibold px-6 py-3 rounded-md transition hover:bg-[#02245a]">
            Get started
          </button>
        </div>

        {/* Right Column: Image */}
        <div className="w-full md:w-1/2">
          <Image
            src="/assets/accounting/people.png"
            alt="Become partner visual"
            width={1000}
            height={800}
            className="w-full h-auto object-contain rounded-xl bg-white p-2"
          />
        </div>
      </div>
    </section>
  );
}
