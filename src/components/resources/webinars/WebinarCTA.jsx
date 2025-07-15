'use client';

import Image from 'next/image';

export default function WebinarCTA() {
  return (
    <section className="w-full bg-black text-white">
      <div className="max-w-[1920px] mx-auto px-3 md:px-12 py-20">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          
          {/* Left Column: Text Content */}
          <div className="w-full md:w-1/2">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Ready to become a partner?
            </h2>
            <p className="text-gray-300 text-lg mb-6">
              Sign up today and simplify every month-end close — for you and your clients.
            </p>
            <button className="bg-[#033175] text-white font-semibold px-6 py-3 rounded-md transition">
              Get started
            </button>
          </div>

          {/* Right Column: Image */}
          <div className="w-full flex justify-end md:w-1/2">
            <Image
              src="/assets/travel/mobile.png"
              alt="Become partner visual"
              width={500}
              height={500}
              className="max-w-sm h-auto object-cover rounded-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
