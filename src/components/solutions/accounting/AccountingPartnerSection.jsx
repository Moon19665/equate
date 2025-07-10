'use client';

export default function AccountingPartnerSection() {
  return (
    <section className="w-full  py-16">
      <div className="max-w-[1920px] mx-auto px-3 md:px-12 flex flex-col lg:flex-row items-center gap-12">
        {/* Left Column */}
        <div className="flex-1 max-w-full">
          <h2 className="text-4xl sm:text-5xl font-bold text-black mb-4">
            Equate for <br className="hidden sm:block" /> accounting firms.
          </h2>
          <p className="text-gray-700 text-[17px] mb-8 max-w-xl">
            Close your clients’ books faster, earn rewards for referrals, and attract new customers — all on Equate.
          </p>
          <div className="w-full">
            <img
              src="/assets/accounting/hero-img.png"
              alt="Equate for accounting firms"
              className="w-full h-auto rounded-xl max-w-xl"
            />
          </div>
        </div>

        {/* Right Column (Form) */}
        <div className="flex-1 w-full bg-white  rounded-xl  max-w-xl">
          <h3 className="text-xl font-semibold text-black mb-6">
            Talk to a dedicated partner manager.
          </h3>
          <form className="space-y-4">
            <div className="flex flex-col sm:flex-row gap-4">
              <input
                type="text"
                placeholder="First name"
                className="w-full border border-gray-300 px-4 py-3 rounded-md focus:outline-none focus:ring-2 focus:ring-[#033175]"
              />
              <input
                type="text"
                placeholder="Last name"
                className="w-full border border-gray-300 px-4 py-3 rounded-md focus:outline-none focus:ring-2 focus:ring-[#033175]"
              />
            </div>
            <input
              type="text"
              placeholder="Company name"
              className="w-full border border-gray-300 px-4 py-3 rounded-md focus:outline-none focus:ring-2 focus:ring-[#033175]"
            />
            <input
              type="email"
              placeholder="Work email"
              className="w-full border border-gray-300 px-4 py-3 rounded-md focus:outline-none focus:ring-2 focus:ring-[#033175]"
            />
            <div className="flex gap-2">
              <select className="border border-gray-300 px-3 py-3 rounded-md focus:outline-none focus:ring-2 focus:ring-[#033175]">
                <option>US</option>
                <option>UK</option>
                <option>CA</option>
              </select>
              <input
                type="tel"
                placeholder="Phone number"
                className="w-full border border-gray-300 px-4 py-3 rounded-md focus:outline-none focus:ring-2 focus:ring-[#033175]"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-[#033175] text-white font-semibold py-3 rounded-md hover:bg-orange-600 transition"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
