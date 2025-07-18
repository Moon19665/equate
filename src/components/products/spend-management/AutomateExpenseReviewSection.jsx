'use client';

import Image from 'next/image';

export default function AutomateExpenseReviewSection() {
  return (
    <div className="w-full bg-black pt-16 pb-0 px-4">
      <div className="max-w-5xl mx-auto flex flex-col items-center text-center">
        <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
          Automate expense reviews.
        </h2>
        <p className="text-base md:text-lg text-[#c6c9ce] mb-3 max-w-2xl">
          Don’t waste hours reviewing every expense and risk missing ones that actually need a closer look — let Brex AI assist you.
        </p>
        <a
          href="#"
          className="text-[#033175] font-semibold text-base md:text-lg hover:underline mb-8"
        >
          Learn more about Brex AI &rarr;
        </a>
      </div>
      <div className="w-full flex justify-center mt-4 mb-0">
      <div className="relative w-full  aspect-[2000/738] shadow-xl overflow-hidden">
        <Image
          src="/assets/business-banking/reviewsbg.png"
          alt="Automated expense review screenshot"
          fill
          className="object-contain"
          priority
          sizes="(max-width: 1200px) 100vw, 1200px"
        />
      </div>
    </div>
    </div>
  );
}
