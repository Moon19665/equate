import React from "react";

export default function BillPayBenefits() {
  return (
    <>
      <div className="w-full bg-[#0a1013] py-14 px-4 flex flex-col items-center">
        {/* Heading */}
        <h2 className="text-3xl md:text-5xl font-bold text-white text-center mb-2">
          Bill pay is better with Equate.
        </h2>
        <p className="text-[#bfc6ce] text-base md:text-lg text-center mb-12 max-w-2xl">
          Bill pay, cards, reimbursements, expense management, and travel. All
          in one place.
        </p>
        {/* Features */}
        <div className="w-full max-w-7xl grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {/* Easy onboarding */}
          <div className="flex flex-col items-center text-center">
            {/* Icon */}
            <svg
              width="36"
              height="36"
              fill="#033175"
              viewBox="0 0 36 36"
              className="mb-3"
            >
              <path
                d="M18 4v6M18 26v6M32 18h-6M10 18H4M27.899 8.101l-4.243 4.243M8.101 27.899l4.243-4.243M27.899 27.899l-4.243-4.243M8.101 8.101l4.243 4.243"
                stroke="#033175"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
            <h3 className="text-white text-lg font-semibold mb-2">
              Easy onboarding
            </h3>
            <p className="text-[#bfc6ce] text-sm">
              Stop moonlighting as IT support. Employees get up and running
              fast, as bill pay is part of our consumer-grade{" "}
              <a
                href="#"
                className="underline text-[#7dd3fc] hover:text-[#38bdf8]"
              >
                spend platform
              </a>
              .
            </p>
          </div>
          {/* Total spend visibility */}
          <div className="flex flex-col items-center text-center">
            <svg
              width="36"
              height="36"
              fill="#033175"
              viewBox="0 0 36 36"
              className="mb-3"
            >
              <rect
                x="8"
                y="8"
                width="20"
                height="20"
                rx="4"
                stroke="#033175"
                strokeWidth="2"
              />
              <rect x="14" y="14" width="8" height="2" rx="1" fill="#bfc6ce" />
              <rect x="14" y="18" width="8" height="2" rx="1" fill="#bfc6ce" />
              <rect x="14" y="22" width="5" height="2" rx="1" fill="#bfc6ce" />
            </svg>
            <h3 className="text-white text-lg font-semibold mb-2">
              Total spend visibility
            </h3>
            <p className="text-[#bfc6ce] text-sm">
              Manage and control all your T&amp;E and AP spend in one place, in
              real time — from laptops to SaaS to break room snacks and business
              trips.
            </p>
          </div>
          {/* Empowered employees */}
          <div className="flex flex-col items-center text-center">
            <svg
              width="36"
              height="36"
              fill="#033175"
              viewBox="0 0 36 36"
              className="mb-3"
            >
              <circle cx="18" cy="18" r="16" stroke="#bfc6ce" strokeWidth="2" />
              <path
                d="M18 12v8M18 28h0"
                stroke="#bfc6ce"
                strokeWidth="2"
                strokeLinecap="round"
              />
              <circle cx="18" cy="10" r="2" fill="#bfc6ce" />
            </svg>
            <h3 className="text-white text-lg font-semibold mb-2">
              Empowered employees
            </h3>
            <p className="text-[#bfc6ce] text-sm">
              Enable in-policy spend for vendors, events, recurring SaaS,{" "}
              <a
                href="#"
                className="underline text-[#7dd3fc] hover:text-[#38bdf8]"
              >
                travel
              </a>
              , expenses, stipends, anything — using a single system, app, and
              card.
            </p>
          </div>
          {/* Consolidated SaaS spend */}
          <div className="flex flex-col items-center text-center">
            <svg
              width="36"
              height="36"
              fill="#033175"
              viewBox="0 0 36 36"
              className="mb-3"
            >
              <rect
                x="8"
                y="14"
                width="20"
                height="10"
                rx="3"
                stroke="#033175"
                strokeWidth="2"
              />
              <rect x="13" y="10" width="10" height="4" rx="2" fill="#bfc6ce" />
            </svg>
            <h3 className="text-white text-lg font-semibold mb-2">
              Consolidated SaaS spend
            </h3>
            <p className="text-[#bfc6ce] text-sm">
              Save money by using one SaaS platform for bill pay,{" "}
              <a
                href="#"
                className="underline text-[#7dd3fc] hover:text-[#38bdf8]"
              >
                corporate cards
              </a>
              ,{" "}
              <a
                href="#"
                className="underline text-[#7dd3fc] hover:text-[#38bdf8]"
              >
                purchase cards
              </a>
              ,{" "}
              <a
                href="#"
                className="underline text-[#7dd3fc] hover:text-[#38bdf8]"
              >
                reimbursements, and expense management
              </a>
              .
            </p>
          </div>
        </div>
      </div>
      <div className="w-full bg-[#fff] py-20 ">
        <div className="max-w-[1920px] px-3 md:px-12 mx-auto flex flex-col lg:flex-row items-center gap-12">
          {/* Left: Text Content */}
          <div className="w-full lg:w-1/2 flex flex-col items-start mb-10 lg:mb-0">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4">
              Control all spend, invoiced or otherwise, with Equate.
            </h2>
            <p className=" text-base md:text-lg mb-8 max-w-md">
              Along with purchase cards, Brex also offers AI-backed bill pay
              software to streamline your invoices as part of Brex payables.
            </p>
            <a
              href="#"
              className="text-[#033175] font-semibold text-base hover:underline transition-colors duration-150"
            >
              Explore Brex payables &rarr;
            </a>
          </div>
          {/* Right: Video */}
          <div className="w-full lg:w-1/2 flex justify-center items-center">
            <div className="w-full max-w-md rounded-2xl overflow-hidden shadow-xl">
              <img
                src="/assets/bill-pay/verizon.png"
                alt="Brex payables demo"
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="w-full min-h-[520px] flex items-center relative overflow-hidden">
        {/* Background image */}
        <div
          className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat z-0"
          style={{
            backgroundImage:
              "url('https://brand.brex.com/transform/b456b630-23dd-444f-8452-eb3b5e35a0bb/Prefooter-Background?io=transform:fit,width:2000,height:758&quality=95')",
          }}
          aria-hidden="true"
        />
        {/* Overlay for readability */}
        <div className="absolute inset-0 bg-black/70 z-10" />

        {/* Content */}
        <div className="relative z-20 max-w-[1920px] mx-auto flex flex-col lg:flex-row items-center w-full px-3 md:px-12 py-16 gap-8">
          {/* Left: Content */}
          <div className="w-full lg:w-1/2 flex flex-col items-start justify-center mb-10 lg:mb-0">
            <h1 className="text-white text-3xl md:text-5xl font-bold mb-4 leading-tight">
              Bill pay built for scale.
            </h1>
            <p className="text-[#bfc6ce] text-base md:text-lg mb-6 max-w-lg">
              Automate payables, approvals, and payments with advanced controls
              at any stage of growth. Ready to shorten your to-do list?
            </p>
            <button className="bg-[#033175] text-white font-semibold rounded-md px-7 py-3 text-base transition-colors duration-200">
              Get started
            </button>
          </div>
          {/* Right: Image */}
          <div className="w-full lg:w-1/2 flex justify-center items-center">
            <img
              src="/assets/bill-pay/graph.png"
              alt="Bill pay illustration"
              className="max-w-[420px] w-full h-auto object-contain rounded-xl shadow-2xl"
              draggable={false}
            />
          </div>
        </div>
      </div>
    </>
  );
}
