'use client';

import { FiBookOpen } from 'react-icons/fi';
import { HiCheckCircle } from 'react-icons/hi';
import { MdEventAvailable } from 'react-icons/md';

export default function TravelSpendTestimonial() {
  return (
    <>
     <div className="w-full bg-[#0a1013] flex flex-col md:flex-row items-center justify-center py-14 px-4">
      {/* Image/Visual */}
      <div className="w-full md:w-1/2 flex justify-center mb-10 md:mb-0">
        <div className=" p-4 md:p-8 flex items-center justify-center w-full ">
          <img
            src="https://brand.brex.com/transform/bb598d51-6d43-4582-b6a3-6ac107fa80ca/Navan_integrations_callout?io=transform:fit,width:2500,height:1381&quality=95"
            alt="BrexPay for Navan integration"
            className="w-full h-auto object-contain rounded-xl"
            draggable={false}
          />
        </div>
      </div>
      {/* Text Content */}
      <div className="w-full md:w-1/2 flex flex-col items-start md:pl-12">
        <span className="text-[#ff6600] font-semibold mb-2 text-base">
          BrexPay for Navan
        </span>
        <h2 className="text-white text-2xl md:text-3xl lg:text-4xl font-bold mb-4">
          Simplify global <span className="font-extrabold">travel</span> at scale.
        </h2>
        <p className="text-[#bfc6ce] text-base md:text-lg mb-6 max-w-xl">
          Embed Brex cards into Navan’s travel management software to streamline travel payments and unlock 100% reconciliation — all in one solution.
        </p>
        <a
          href="#"
          className="text-[#ff6600] font-semibold text-base hover:underline transition-colors duration-150"
        >
          Explore BrexPay for Navan &rarr;
        </a>
      </div>
    </div>
    </>
  );
}
