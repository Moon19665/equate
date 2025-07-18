import React from "react";

export default function MidSizeSecondSec() {
  return (
    <section className="w-full bg-[#f6f6fa]">
      {/* 1. Unify travel and expense */}
      <div className="max-w-[1920px] px-3 md:px-12 mx-auto text-center pt-10 md:pt-20 pb-8 md:pb-12">
        <h1 className="font-semibold text-gray-900 text-3xl md:text-4xl mb-4 leading-tight">
          Unify your corporate travel and<br className="hidden md:inline" /> expense management.
        </h1>
        <p className="text-gray-500 text-base md:text-lg">
          Easily handle all of your spending, group events, and travel needs in one place.
        </p>
      </div>
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center">
        {/* Left image */}
        <div className="w-full md:w-1/2 flex justify-center mb-8 md:mb-0">
          <div className="bg-[#f9f7f4] p-6 md:p-10 max-w-[420px] w-full flex items-center justify-center">
            <img
              src="/assets/midsize/default.png"
              alt="Equate Cards"
              className="w-full h-auto object-contain"
              loading="lazy"
            />
          </div>
        </div>
        {/* Right content */}
        <div className="w-full md:w-1/2 flex flex-col items-center text-center md:pl-8">
          <h2 className="text-gray-900 font-semibold text-2xl md:text-3xl mb-4 leading-snug">
            Enable spend with<br className="hidden md:inline" /> built-in controls.
          </h2>
          <p className="text-gray-600 text-base md:text-lg">
            Provide physical and virtual cards to your employees for pre-approved spend — T&amp;E, stipends, offsites, and more. And reimburse global employees 3x faster for out of pocket spend.
          </p>
        </div>
      </div>

      {/* 2. Group Events Section */}
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center py-10 md:py-14">
        {/* Left Content */}
        <div className="w-full md:w-1/2 flex flex-col items-center text-center md:pr-8 mb-8 md:mb-0">
          <h2 className="font-semibold text-gray-900 text-2xl md:text-3xl mb-4">
            Plan group events like<br className="hidden md:inline" /> offsites and conferences.
          </h2>
          <p className="text-gray-600 text-base md:text-lg mb-4">
            Invite unlimited attendees and track their RSVPs and bookings in real time. Then, easily communicate and manage event details with built-in itineraries, shared spend limits, and travel reminders.
          </p>
          <a
            href="#"
            className="inline-block text-[#033175] font-medium text-base md:text-lg hover:underline transition"
          >
            Explore group spend controls <span aria-hidden="true">→</span>
          </a>
        </div>
        {/* Right Image */}
        <div className="w-full md:w-1/2 flex justify-center">
          <img
            src="/assets/midsize/guest.png"
            alt="Group Event Planning"
            className="w-full h-auto"
            loading="lazy"
            style={{ borderRadius: 0, boxShadow: "none" }}
          />
        </div>
      </div>

      {/* 3. Book Global Travel Section */}
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center py-10 md:py-14">
        {/* Left Image */}
        <div className="w-full md:w-1/2 flex justify-center mb-8 md:mb-0">
          <img
            src="/assets/travel/offsite.png"
            alt="Book Travel"
            className="w-full h-auto"
            loading="lazy"
            style={{ borderRadius: 0, boxShadow: "none" }}
          />
        </div>
        {/* Right Content */}
        <div className="w-full md:w-1/2 flex flex-col items-center text-center md:pl-8">
          <h2 className="font-semibold text-gray-900 text-2xl md:text-3xl mb-4">
            Book global travel with<br className="hidden md:inline" /> exclusive rates.
          </h2>
          <p className="text-gray-600 text-base md:text-lg mb-4">
            Lower your travel costs with pre-negotiated discounts on flights, hotels, and car rentals. And if an employee ever needs help? Equate offers 24/7 support, anywhere in the world, with unlimited self-serve itinerary changes.
          </p>
          <a
            href="#"
            className="inline-block text-[#033175] font-medium text-base md:text-lg hover:underline transition"
          >
            Explore travel features <span aria-hidden="true">→</span>
          </a>
        </div>
      </div>

      {/* 4. Keep expenses in check */}
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center py-8 md:py-10">
        {/* Left Content */}
        <div className="w-full md:w-1/2 flex flex-col items-center text-center md:pr-8 mb-8 md:mb-0">
          <h2 className="font-semibold text-gray-900 text-2xl md:text-3xl mb-4">
            Keep expenses in<br className="hidden md:inline" /> check every step of<br className="hidden md:inline" /> the way.
          </h2>
          <p className="text-gray-600 text-base md:text-lg mb-4">
            Auto-enforce your expense policy at every swipe and prevent out-of-policy spend. Plus, track spending actuals against budgets in real time, and make adjustments as needed.
          </p>
          <a
            href="#"
            className="inline-block text-[#033175] font-medium text-base md:text-lg hover:underline transition"
          >
            Explore spend management <span aria-hidden="true">→</span>
          </a>
        </div>
        {/* Right Visual */}
        <div className="w-full md:w-1/2 flex justify-center">
          <img
            src="/assets/midsize/spend-limit.png"
            alt="Marketing Spend Visual"
            className="w-full max-w-md bg-white p-2 h-auto"
            loading="lazy"
            style={{ borderRadius: 0, boxShadow: "none" }}
          />
        </div>
      </div>

      {/* 5. AI Automation Section */}
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center py-8 md:py-10">
        {/* Left Visual */}
        <div className="w-full md:w-1/2 flex justify-center mb-8 md:mb-0">
          <img
            src="/assets/midsize/progress.png"
            alt="AI Automation Visual"
            className="w-full max-w-md h-auto"
            loading="lazy"
            style={{ borderRadius: 0, boxShadow: "none" }}
          />
        </div>
        {/* Right Content */}
        <div className="w-full md:w-1/2 flex flex-col items-center text-center md:pl-8">
          <h2 className="font-semibold text-gray-900 text-2xl md:text-3xl mb-4">
            Automate expense<br className="hidden md:inline" /> and accounting<br className="hidden md:inline" /> busywork with AI.
          </h2>
          <p className="text-gray-600 text-base md:text-lg mb-4">
            Equate AI automates receipt capture, expense categorization, and manager approvals so you can close the books faster. And Equate Assistant instantly answers employee questions, like: “How much can I spend on a team dinner?”
          </p>
          <a
            href="#"
            className="inline-block text-[#033175] font-medium text-base md:text-lg hover:underline transition"
          >
            Explore AI-powered automation <span aria-hidden="true">→</span>
          </a>
        </div>
      </div>
    </section>
  );
}
