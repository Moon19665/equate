import React from "react";

export default function EnterpriseImgCards() {
  return (
    <section className="w-full  px-4">
      {/* 1. Unify travel and expense */}
      <div className="max-w-3xl mx-auto text-center pt-10 md:pt-20 pb-8 md:pb-12">
        <h1 className="font-semibold text-gray-900 text-3xl md:text-4xl mb-4 leading-tight">
        Automate global financial management.
        </h1>
        <p className="text-gray-500 text-base md:text-lg">
        Eliminate manual work in every spend workflow, from provisioning to approvals to VAT tracking.
        </p>
      </div>
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center">
        {/* Left image */}
        <div className="w-full md:w-1/2 flex justify-center mb-8 md:mb-0">
          <div className="bg-white p-3 rounded-xl max-w-[420px] w-full flex items-center justify-center">
            <img
              src="/assets/enterprise/team.png"
              alt="Equate Cards"
              className="w-full h-auto object-contain"
              loading="lazy"
            />
          </div>
        </div>
        {/* Right content */}
        <div className="w-full md:w-1/2 flex flex-col items-center text-center md:pl-8">
          <h2 className="text-gray-900 font-semibold text-2xl md:text-3xl mb-4 leading-snug">
          Enable and control <br className="hidden md:inline" /> spend efficiently, locally.
          </h2>
          <p className="text-gray-600 text-base md:text-lg">
          Provision spend limits with built-in policies in 100+ currencies. Track actuals against planned spend in real time with Live Budgets™. Automate approvals to save time and focus on expenses that matter.          </p>
        </div>
      </div>

      {/* 2. Group Events Section */}
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center py-10 md:py-14">
        {/* Left Content */}
        <div className="w-full md:w-1/2 flex flex-col items-center text-center md:pr-8 mb-8 md:mb-0">
          <h2 className="font-semibold text-gray-900 text-2xl md:text-3xl mb-4">
          Easily adapt to foreign markets <br className="hidden md:inline" />and regulations.
          </h2>
          <p className="text-gray-600 text-base md:text-lg mb-4">
          Personalize spend limits and policies to each entity’s customs and currency. The right policy will be intelligently applied to expenses and reimbursements, and expense reports will be auto-filled to boost compliance.          </p>
          <a
            href="#"
            className="inline-block text-[#033175] font-medium text-base md:text-lg hover:underline transition"
          >
           Explore Equate expense management <span aria-hidden="true">→</span>
          </a>
        </div>
        {/* Right Image */}
        <div className="w-full md:w-1/2 flex bg-white p-2 rounded-xl justify-center">
          <img
            src="/assets/enterprise/q1.png"
            alt="Group Event Planning"
            className="w-full p-2  h-auto"
            loading="lazy"
            style={{ borderRadius: 0, boxShadow: "none" }}
          />
        </div>
      </div>

      {/* 3. Book Global Travel Section */}
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center py-10 md:py-14">
        {/* Left Image */}
        <div className="w-full md:w-1/2 bg-white p-2 rounded-xl flex justify-center mb-8 md:mb-0">
          <img
            src="/assets/enterprise/q2.png"
            alt="Book Travel"
            className="w-full h-auto"
            loading="lazy"
            style={{ borderRadius: 0, boxShadow: "none" }}
          />
        </div>
        {/* Right Content */}
        <div className="w-full md:w-1/2 flex flex-col items-center text-center md:pl-8">
          <h2 className="font-semibold text-gray-900 text-2xl md:text-3xl mb-4">
          Easily adapt to foreign markets <br className="hidden md:inline" />and regulations.
          </h2>
          <p className="text-gray-600 text-base md:text-lg mb-4">
          Personalize spend limits and policies to each entity’s customs and currency. The right policy will be intelligently applied to expenses and reimbursements, and expense reports will be auto-filled to boost compliance.          </p>
          <a
            href="#"
            className="inline-block text-[#033175] font-medium text-base md:text-lg hover:underline transition"
          >
           Explore Equate expense management <span aria-hidden="true">→</span>
          </a>
        </div>
      </div>

      {/* 4. Keep expenses in check */}
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center py-8 md:py-10">
        {/* Left Content */}
        <div className="w-full md:w-1/2 flex flex-col items-center text-center md:pr-8 mb-8 md:mb-0">
          <h2 className="font-semibold text-gray-900 text-2xl md:text-3xl mb-4">
          Save time with multi-entity <br className="hidden md:inline" /> accounting automation.<br className="hidden md:inline" /> the way.
          </h2>
          <p className="text-gray-600 text-base md:text-lg mb-4">
          Ensure accuracy and close the books faster. Track VAT and export it to your ERP automatically to comply with local tax rules. Automatically classify and export transactions to the correct subsidiary with entity-level ERP mapping.          </p>
          <a
            href="#"
            className="inline-block text-[#033175] font-medium text-base md:text-lg hover:underline transition"
          >
            Explore accounting automations<span aria-hidden="true">→</span>
          </a>
        </div>
        {/* Right Visual */}
        <div className="w-full md:w-1/2 p-2 bg-white rounded-xl flex justify-center">
          <img
            src="/assets/enterprise/usa.png"
            alt="Marketing Spend Visual"
            className="w-full max-w-md h-auto"
            loading="lazy"
            style={{ borderRadius: 0, boxShadow: "none" }}
          />
        </div>
      </div>

      {/* 5. AI Automation Section */}
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center py-8 md:py-10">
        {/* Left Visual */}
        <div className="w-full md:w-1/2 bg-white p-2 rounded-xl flex justify-center mb-8 md:mb-0">
          <img
            src="/assets/enterprise/role.png"
            alt="AI Automation Visual"
            className="w-full max-w-md h-auto"
            loading="lazy"
            style={{ borderRadius: 0, boxShadow: "none" }}
          />
        </div>
        {/* Right Content */}
        <div className="w-full md:w-1/2 flex flex-col items-center text-center md:pl-8">
          <h2 className="font-semibold text-gray-900 text-2xl md:text-3xl mb-4">
          Customize user roles to match <br className="hidden md:inline" /> how you operate.<br className="hidden md:inline" /> busywork with AI.
          </h2>
          <p className="text-gray-600 text-base md:text-lg mb-4">
          Give your team exactly the permissions they need — and none they don’t. Equate allows you to create, define, and provision custom roles with fine-grained permissions, which can be managed and audited in one place.          </p>
          
        </div>
      </div>
       {/* 4. Keep expenses in check */}
       <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center py-8 md:py-10">
        {/* Left Content */}
        <div className="w-full md:w-1/2 flex flex-col items-center text-center md:pr-8 mb-8 md:mb-0">
          <h2 className="font-semibold text-gray-900 text-2xl md:text-3xl mb-4">
          Get the power of Equate cards in <br className="hidden md:inline" />other platforms<br className="hidden md:inline" /> the way.
          </h2>
          <p className="text-gray-600 text-base md:text-lg mb-4">
          Issue Equate virtual cards with built-in controls directly in third-party procurement, travel, and ERP platforms to save time, control costs, and automate reconciliation across every type of spend.</p>
          <a
            href="#"
            className="inline-block text-[#033175] font-medium text-base md:text-lg hover:underline transition"
          >
          Explore Equate Embedded solutions <span aria-hidden="true">→</span>
          </a>
        </div>
        {/* Right Visual */}
        <div className="w-full md:w-1/2 bg-white p-2 rounded-xl flex justify-center">
          <img
            src="/assets/enterprise/brand-card.png"
            alt="Marketing Spend Visual"
            className="w-full max-w-md h-auto"
            loading="lazy"
            style={{ borderRadius: 0, boxShadow: "none" }}
          />
        </div>
      </div>
    </section>
  );
}
