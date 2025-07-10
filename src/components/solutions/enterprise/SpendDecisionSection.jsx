import React from "react";
import Image from "next/image";
import { AiOutlineRobot } from "react-icons/ai";
import { RiShieldCheckLine } from "react-icons/ri";
import { HiOutlineDocumentReport } from "react-icons/hi";

const SpendDecisionSection = () => {
  return (
    <section className="w-full px-4 md:px-12 lg:px-24 py-12 bg-white text-center">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold mb-4">
          Make every spend decision a <span>good one</span>.
        </h2>
        <p className="text-lg text-gray-600 mb-8">
          Run custom, real-time reports to identify risks and opportunities globally.
        </p>
        <div className="relative  w-full aspect-[1000/640] rounded-xl overflow-hidden ">
          <Image
            src="/assets/automation/equate-ss.png"
            alt="Spend decision dashboard"
            layout="fill"
            objectFit="contain rounded-xl"
            priority
          />
        </div>

        {/* Reports Overview Section */}
        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 text-left">
          <div className="text-center">
            <div className="flex justify-center mb-4">
              <AiOutlineRobot className="h-6 w-6 text-[#033175]" />
            </div>
            <h3 className="font-semibold text-lg mb-2">Spend reports</h3>
            <p className="text-gray-600 text-sm">
              Get spend insights in real time by entity, team, and more — with AI-powered alerts on anomalous spend and trends.
            </p>
          </div>

          <div className="text-center">
            <div className="flex justify-center mb-4">
              <RiShieldCheckLine className="h-6 w-6 text-[#033175]" />
            </div>
            <h3 className="font-semibold text-lg mb-2">Compliance reports</h3>
            <p className="text-gray-600 text-sm">
              See a snapshot of your compliance status, including how much spend is out of compliance and who is responsible.
            </p>
          </div>

          <div className="text-center">
            <div className="flex justify-center mb-4">
              <HiOutlineDocumentReport className="h-6 w-6 text-[#033175]" />
            </div>
            <h3 className="font-semibold text-lg mb-2">Transaction reports</h3>
            <p className="text-gray-600 text-sm">
              Run reports across global card expenses and reimbursements, filtering by budgets, users, categories, and more.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SpendDecisionSection;