'use client';

import { FiBookOpen } from 'react-icons/fi';
import { HiCheckCircle } from 'react-icons/hi';
import { MdEventAvailable } from 'react-icons/md';

export default function TravelSpendTestimonial() {
  return (
    <>
     <div className="max-w-[1920px] px-3 md:px-12 mx-auto bg-[#fff] flex flex-col md:flex-row items-center justify-between py-8 ">
      {/* Image/Visual */}
      <div className="w-full md:w-1/2 flex justify-center mb-10 md:mb-0">
        <div className=" flex items-center justify-center w-full ">
          <img
            src="/assets/travel/mobile-trip.png"
            alt="equatePay for Navan integration"
            className="object-contain "
            draggable={false}
          />
        </div>
      </div>
      {/* Text Content */}
      <div className="w-full md:w-1/2 flex flex-col items-center text-center md:pl-12">
        <span className=" font-semibold mb-2 text-base">
          BrexPay for Navan
        </span>
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4">
          Simplify global <span className="font-extrabold">travel</span> at scale.
        </h2>
        <p className="text-base md:text-lg mb-6 max-w-xl">
          Embed Brex cards into Navan’s travel management software to streamline travel payments and unlock 100% reconciliation — all in one solution.
        </p>
        <a
          href="#"
          className="text-[#033175] font-semibold text-base hover:underline transition-colors duration-150"
        >
          Explore BrexPay for Navan &rarr;
        </a>
      </div>
    </div>
    </>
  );
}
