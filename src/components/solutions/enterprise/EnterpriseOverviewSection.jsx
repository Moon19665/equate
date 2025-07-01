import React from "react";
import Image from "next/image";
import { AiOutlineRobot } from "react-icons/ai";
import { RiShieldCheckLine } from "react-icons/ri";
import { HiOutlineDocumentReport } from "react-icons/hi";

const EnterpriseOverviewSection = () => {
  return (
    <>
    

      {/* Section: Implement Brex in Weeks */}
      <section className="w-full bg-[#f8f9fb] px-4 md:px-12 lg:px-24 py-16">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-10">
          <div className="lg:w-1/2 text-left">
            <h2 className="text-3xl font-semibold mb-4">Implement Brex in weeks.</h2>
            <p className="text-gray-600 mb-4">
              Brex provides comprehensive professional services, change management, and ongoing support to help you go live in as little as 6 to 8 weeks. No matter your unique challenge, we’ll solve it.
            </p>
            <a href="#" className="text-orange-600 font-medium inline-flex items-center hover:underline">
              See our implementation process →
            </a>
          </div>
          <div className="lg:w-1/2">
            <Image
              src="https://brand.brex.com/transform/92780014-0b3b-4116-94bd-6c1120f650fc/Enterprise-Services-hero?io=transform:fit,width:2000,height:1803&quality=95"
              alt="Implementation timeline"
              width={1000}
              height={800}
              className=""
            />
          </div>
        </div>
      </section>

      {/* Section: Brex Global is Enterprise Ready */}
      <section
        className="w-full px-4 md:px-12 lg:px-24 py-16 text-black bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://brand.brex.com/transform/1a6e3aad-a8b9-4b32-a35c-2945c15bd9d1/Global-Enterprise-Ready-BG?io=transform:fit,width:2000,height:1165&quality=95')",
        }}
      >
        <div className=" rounded-xl p-8 max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-10 ">
          <div className="lg:w-1/2">
            <Image
              src="https://brand.brex.com/transform/abbbb54e-66b5-470d-bed9-cc11730c4610/Global-Enterprise-Ready?io=transform:fit,width:2000,height:1915&quality=95"
              alt="Enterprise ready phone"
              width={300}
              height={900}
              className=""
            />
          </div>
          <div className="lg:w-1/2 text-left">
            <h2 className="text-3xl font-semibold mb-4">Brex global is enterprise-ready.</h2>
            <p className="text-gray-700 mb-4">
              Get the highest levels of customization and security — from account co-branding to fraud monitoring.
            </p>
            <a href="#" className="text-orange-600 font-medium inline-flex items-center hover:underline mb-4">
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
