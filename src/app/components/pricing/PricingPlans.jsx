import { useState } from "react";

export default function PricingPlans() {
  // State to track selected plan: 'essentials', 'premium', or 'enterprise'
  const [selectedPlan, setSelectedPlan] = useState("premium");

  // Helper function to generate card border classes based on selection
  const cardBorderClass = (plan) =>
    plan === selectedPlan
      ? "border-4 border-orange-500"
      : "border border-gray-200";

  return (
    <section className="bg-gray-50 py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col gap-8 md:flex-row md:gap-6 justify-center">
          {/* Essentials Plan */}
          <div
            onClick={() => setSelectedPlan("essentials")}
            className={`flex-1 bg-white rounded-xl shadow-md p-8 flex flex-col cursor-pointer transition-transform hover:scale-[1.02] ${cardBorderClass(
              "essentials"
            )}`}
          >
            <h3 className="text-2xl font-semibold text-gray-900 mb-1">
              Essentials
            </h3>
            <p className="text-gray-500 mb-6">
              For startups and growing companies
            </p>
            <div className="text-3xl font-bold text-gray-900 mb-2">
              $0 <span className="text-base font-normal">user/month</span>
            </div>
            <button className="w-full bg-orange-500 hover:bg-orange-600 text-white font-semibold rounded-md py-2 mb-6 transition">
              Get started for free
            </button>
            <ul className="text-gray-700 space-y-3 text-left flex-1">
              <li>✔ Global card acceptance and 1 local card program</li>
              <li>✔ AI-powered custom rules</li>
              <li>✔ Up to two entities (1 global entity)</li>
              <li>✔ Accounting integrations</li>
              <li>✔ Local currency wires</li>
              <li>✔ Travel booking (free on Essentials)</li>
              <li>✔ Real-time reporting</li>
              <li>✔ Brex API access</li>
              <li>✔ Bill pay</li>
              <li>✔ Reimbursements</li>
            </ul>
          </div>

          {/* Premium Plan */}
          <div
            onClick={() => setSelectedPlan("premium")}
            className={`flex-1 bg-white rounded-xl shadow-md p-8 flex flex-col cursor-pointer transition-transform hover:scale-[1.02] ${cardBorderClass(
              "premium"
            )}`}
          >
            <h3 className="text-2xl font-semibold text-gray-900 mb-1">
              Premium
            </h3>
            <p className="text-gray-500 mb-6">
              For mid-sized companies looking to scale
            </p>
            <div className="text-3xl font-bold text-gray-900 mb-2">
              $12 <span className="text-base font-normal">user/month</span>
            </div>
            <button className="w-full bg-orange-500 hover:bg-orange-600 text-white font-semibold rounded-md py-2 mb-6 transition">
              Open an account
            </button>
            <ul className="text-gray-700 space-y-3 text-left flex-1">
              <li>✔ Everything in Essentials plus:</li>
              <li>✔ Multiple, customizable expense policies</li>
              <li>✔ Dynamic expense review chains</li>
              <li>✔ AI-powered compliance audit detection and insights</li>
              <li>✔ Advanced approvals with dynamic Spend Limit approval chains</li>
              <li>✔ Multi-entity (US & International)</li>
              <li>✔ Customizable ERP integrations and HRIS integrations</li>
              <li>✔ VAT documentation</li>
              <li>✔ Group travel and advanced travel rules</li>
              <li>✔ Live budgets</li>
            </ul>
          </div>

          {/* Enterprise Plan */}
          <div
            onClick={() => setSelectedPlan("enterprise")}
            className={`flex-1 bg-white rounded-xl shadow-md p-8 flex flex-col cursor-pointer transition-transform hover:scale-[1.02] ${cardBorderClass(
              "enterprise"
            )}`}
          >
            <h3 className="text-2xl font-semibold text-gray-900 mb-1">
              Enterprise
            </h3>
            <p className="text-gray-500 mb-6">
              For global enterprises with custom needs
            </p>
            <div className="text-3xl font-bold text-gray-900 mb-2">
              Custom pricing
            </div>
            <button className="w-full bg-orange-500 hover:bg-orange-600 text-white font-semibold rounded-md py-2 mb-6 transition">
              Contact sales
            </button>
            <ul className="text-gray-700 space-y-3 text-left flex-1">
              <li>✔ Everything in Premium plus:</li>
              <li>✔ Unlimited US or global entities</li>
              <li>✔ Local card issuance, collections, reimbursements, and policies</li>
              <li>✔ Named account manager for personalized support</li>
              <li>✔ Admin center</li>
              <li>✔ Fully customizable implementation services</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
    