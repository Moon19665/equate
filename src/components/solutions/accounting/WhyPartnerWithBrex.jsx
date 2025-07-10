'use client';

export default function WhyPartnerWithBrex() {
  return (
    <>
    <section className="w-full bg-white">
    {/* Section: Why Partner */}
    <div className="max-w-7xl mx-auto px-4 lg:px-8 py-16">
      <div className="text-center max-w-3xl mx-auto mb-14">
        <h2 className="text-3xl sm:text-4xl font-bold text-black mb-4">
          Why partner with Equate?
        </h2>
        <p className="text-gray-600 text-lg leading-relaxed">
          Manage all of your clients in one platform — with accounting automation, real-time spend insights, <br className="hidden sm:inline-block" /> and AP workflows that save you time and your clients money.
        </p>
      </div>

      <div className="bg-[#f6f7fa] rounded-xl p-6 lg:p-12 flex flex-col lg:flex-row items-center gap-10">
        <div className="flex-1 max-w-xl">
          <h3 className="text-2xl font-semibold text-black mb-4">
            Manage multiple clients with one login.
          </h3>
          <p className="text-gray-700 text-[16px] mb-6">
            Equate ProAccess lets you sign into your dashboard and toggle between all of your client accounts. Your clients grant you access once, and you're good to go.
          </p>
          <a
            href="#"
            className="text-[#033175] font-semibold text-[15px] hover:underline inline-flex items-center"
          >
            Explore Equate ProAccess &rarr;
          </a>
        </div>
        <div className="flex-1 w-full max-w-md">
          <img
            src="/assets/accounting/client.png"
            alt="Switch client"
            className="w-full h-auto rounded-lg shadow-md"
          />
        </div>
      </div>
    </div>

    {/* Appended Benefits Section */}
    <div className="max-w-7xl mx-auto px-4 lg:px-8 pb-16">
      <div className="grid md:grid-cols-2 gap-10">
        {/* Left Box: Boost Productivity */}
        <div className="bg-[#f9f9f9] rounded-xl p-6 md:p-10">
          <img
            src="https://brand.brex.com/transform/4dfd311d-feb7-42dc-9100-e5051fdca030/Accounting-partners-volley-2?io=transform:fit,width:2000,height:1338&quality=95"
            alt="ERP sync"
            className="w-full h-auto mb-6 rounded-lg"
          />
          <h3 className="text-2xl font-semibold text-black mb-4">
            Boost productivity. Save time.
          </h3>
          <p className="text-gray-700 text-[16px] mb-4">
            Simplify your accounting tasks by managing all your clients’ info in one place.
          </p>
          <ul className="list-disc pl-5 text-gray-700 text-[16px] space-y-2 mb-6">
            <li>Sync with any ERP for automated GL coding.</li>
            <li>Manage global clients in 100+ countries.</li>
            <li>Support multi-entity clients with localized capabilities.</li>
          </ul>
          <a
            href="#"
            className="text-orange-600 font-semibold text-[15px] hover:underline inline-flex items-center"
          >
            Explore Equate accounting automation &rarr;
          </a>
        </div>

        {/* Right Box: Attract Clients */}
        <div className="bg-[#f6f7fa] rounded-xl p-6 md:p-10">
          <img
            src="/assets/accounting/trust.png"
            alt="Accountant directory"
            className="w-full h-auto mb-6 rounded-lg"
          />
          <h3 className="text-2xl font-semibold text-black mb-4">
            Attract new clients and earn rewards.
          </h3>
          <p className="text-gray-700 text-[16px] mb-4">
            Earn rewards for every qualified client you refer to Equate, and increase your firm’s reach within our directory.
          </p>
          <ul className="list-disc pl-5 text-gray-700 text-[16px] space-y-2 mb-6">
            <li>Earn revenue share and tiered rewards that scale.</li>
            <li>Grow your practice with an accountant directory listing.</li>
            <li>Reach clients via co-branded events and social media shoutouts.</li>
          </ul>
          <a
            href="#"
            className="text-orange-600 font-semibold text-[15px] hover:underline inline-flex items-center"
          >
            Explore Equate accountant directory &rarr;
          </a>
        </div>
      </div>
    </div>
  </section>
   <section className="w-full py-20 bg-white">
   <div className="max-w-4xl mx-auto px-4 text-center">
     {/* Inkle Logo */}
     <img
       src="/assets/accounting/Inkle-Logo.webp"
       alt="Inkle Logo"
       className="mx-auto h-10 mb-6 object-contain"
     />

     {/* Quote */}
     <blockquote className="text-2xl sm:text-3xl font-light text-black leading-relaxed mb-6">
       “We love being a Equate accounting partner. I’ve been a fan of Equate since day zero, and even more since the integration and partnership.”
     </blockquote>

     {/* Author */}
     <figcaption className="text-sm text-gray-500">
       — <a href="#" className="text-blue-600 underline">Anand Krishna</a>, Co-founder and CEO, Inkle
     </figcaption>
   </div>
 </section>
    </>
  );
}
