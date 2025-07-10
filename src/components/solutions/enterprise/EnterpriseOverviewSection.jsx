import React from "react";
import Image from "next/image";
import { AiOutlineRobot } from "react-icons/ai";
import { RiShieldCheckLine } from "react-icons/ri";
import { HiOutlineDocumentReport } from "react-icons/hi";

const EnterpriseOverviewSection = () => {
  return (
    <>
    

      {/* Section: Implement Equate in Weeks */}
      <section className="w-full bg-[#f8f9fb]  py-16">
        <div className="max-w-[1920px] px-3 md:px-12 mx-auto flex flex-col lg:flex-row items-center justify-between gap-10">
          <div className="lg:w-1/2 text-left">
            <h2 className="text-3xl font-semibold mb-4">Implement Equate in weeks.</h2>
            <p className="text-gray-600 mb-4">
              Equate provides comprehensive professional services, change management, and ongoing support to help you go live in as little as 6 to 8 weeks. No matter your unique challenge, we’ll solve it.
            </p>
            <a href="#" className="text-[#033175] font-medium inline-flex items-center hover:underline">
              See our implementation process →
            </a>
          </div>
          <div className="lg:w-1/2 flex justify-end">
            <Image
              src="/assets/enterprise/team.png"
              alt="Implementation timeline"
              width={400}
              height={400}
              className=""
            />
          </div>
        </div>
      </section>

      {/* Section: Equate Global is Enterprise Ready */}
      <section
        className="w-full py-16 text-black bg-cover bg-center"
        style={{
          backgroundImage:
            "url('/assets/enterprise/overlay.webp')",
        }}
      >
        <div className=" rounded-xl max-w-[1920px] px-3 md:px-12 mx-auto flex flex-col lg:flex-row items-center justify-between gap-10 ">
          <div className="lg:w-1/2">
            <Image
              src="/assets/enterprise/code.png"
              alt="Enterprise ready phone"
              width={1000}
              height={900}
              className="mix-blend-multiply"
            />
          </div>
          <div className="lg:w-1/2 text-left xl:text-right">
            <h2 className="text-3xl font-semibold mb-4">Equate global is enterprise-ready.</h2>
            <p className="text-gray-700 mb-4">
              Get the highest levels of customization and security — from account co-branding to fraud monitoring.
            </p>
            <a href="#" className="text-[#033175] font-medium inline-flex items-center hover:underline mb-4">
              See how we protect you →
            </a>
            <ul className="text-sm text-gray-800 space-y-2">
              <li>✔ SOC 1 Type I and SOC 2 Certified</li>
              <li>✔ PCI DSS Compliant</li>
              <li>✔ Self-serve Security & Privacy Center</li>
              <li>✔ Security and dedicated SSO</li>
              <li>✔ SSO for Enterprise IdP</li>
              <li>✔ Audit log and sandbox</li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
};

export default EnterpriseOverviewSection;
