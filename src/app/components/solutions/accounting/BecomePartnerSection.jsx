'use client';

import Image from 'next/image';

export default function BecomePartnerSection() {
  return (
    <section className="w-full bg-black text-white">
      {/* Desktop View */}
      <div
        className="hidden md:flex justify-between items-center px-8 lg:px-20 py-24 bg-no-repeat bg-cover bg-center"
        style={{
          backgroundImage:
            'url(https://brand.brex.com/transform/b40ae7c1-2b87-47c6-ab35-8815561922a7/accounting-partners_pre-footer?io=transform:fit,width:3000,height:1121&quality=95)',
        }}
      >
        <div className="max-w-lg">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Ready to become a partner?
          </h2>
          <p className="text-gray-300 text-lg mb-6">
            Sign up today and simplify every month-end close — for you and your clients.
          </p>
          <button className="bg-orange-500 hover:bg-orange-600 text-white font-semibold px-6 py-3 rounded-md transition">
            Get started
          </button>
        </div>
      </div>

      {/* Mobile View */}
      <div className="md:hidden flex flex-col">
        {/* Image Block */}
        <div className="w-full">
          <img
            src="https://brand.brex.com/transform/863cf95e-dc06-4f10-bcd7-89568c6addbb/partner_pre-footer_mobile?io=transform:fit,width:2000,height:1473&quality=95"
            alt="Become partner mobile"
            className="w-full h-auto object-cover"
          />
        </div>
        {/* Content Block */}
        <div className="bg-black text-white px-6 py-10 text-center">
          <h2 className="text-2xl font-bold mb-4">
            Ready to become a partner?
          </h2>
          <p className="text-gray-300 text-base mb-6">
            Sign up today and simplify every month-end close — for you and your clients.
          </p>
          <button className="bg-orange-500 hover:bg-orange-600 text-white font-semibold px-6 py-3 rounded-md transition">
            Get started
          </button>
        </div>
      </div>
    </section>
  );
}
