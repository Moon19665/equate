import React from "react";
import Image from "next/image";
import { AiOutlineRobot } from "react-icons/ai";
import { RiShieldCheckLine } from "react-icons/ri";
import { HiOutlineDocumentReport } from "react-icons/hi";

const PurchaseCardCTASection = () => {
 
      
  return (
    <>

      {/* Section: Purchase Cards CTA */}
      <section
        className="w-full  py-20 bg-cover bg-center text-white"
        // style={{
        //   backgroundImage:
        //     "url('/assets/enterprise/cta-bg.webp')",
        // }}
      >
        <div className="max-w-[1920px] px-3 md:px-12 mx-auto flex flex-col lg:flex-row items-center justify-between bg-black ">
          <div className="lg:w-1/2 mb-10 lg:mb-0 text-left">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Looking for purchase cards?
            </h2>
            <p className="text-gray-300 mb-6">
              We have you covered. Issue smart purchase cards anytime to enable operational spend with custom controls and PO-like approvals.
            </p>
            <button className="px-5 py-2 border border-white rounded-md text-sm hover:bg-white hover:text-black transition-all">
              Explore Equate p-cards
            </button>
          </div>
          <div className="lg:w-1/2 flex justify-end rounded-xl ">
            <Image
              src="/assets/enterprise/apple.png"
              alt="P-card UI preview"
              width={500}
              height={600}
              className="p-2 bg-white"
            />
          </div>
        </div>
      </section>


    </>
  );
};

export default PurchaseCardCTASection;
