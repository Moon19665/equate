'use client';

export default function LocalCurrencySection() {
    const features = [
        {
          title: "Provision spend in the local currency.",
          description:
            "Track spend limits in over 100 currencies and embed localized expense policies to enable spend for entities, individuals, and departments.",
          link: "#",
          linkText: "Explore spend limits →",
        },
        {
          title: "Spend in local currency by card or reimbursement.",
          description:
            "Issue physical and virtual cards in 50+ countries and reimburse employees in their local bank account and currency, without using payroll.",
          link: "#",
          linkText: "Explore global cards →",
        },
        {
          title: "Pay card statements and reimbursements locally.",
          description:
            "With local billing, subsidiaries can pay statements and reimbursements from their local bank account to avoid intercompany transactions and foreign exchange fees.",
          link: "#",
          linkText: "Explore expense management →",
        },
        {
          title: "Reconcile spend with local ERP integrations.",
          description:
            "Automap and export transactions to subsidiary GL accounts in their local ERP using our native ERP integrations and universal CSV syncing capabilities.",
          link: "#",
          linkText: "Explore integrations →",
        },
      ];
    
    
   
  return (
   <>
    <section className="w-full py-16 px-4 bg-white">
      {/* Heading */}
      <div className="max-w-3xl mx-auto text-center mb-12">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-black mb-4 leading-tight">
          Operate in local<br className="sm:hidden" /> currencies — from card<br className="sm:hidden" /> to close.
        </h2>
      </div>
      {/* Content Row */}
   <div className="max-w-3xl mx-auto flex flex-col md:flex-row items-center justify-center gap-12">
  {/* Right: Image */}
  <div className="w-full flex justify-center">
    <div className="w-full">
      <img
        src="/assets/global/spent.png"
        alt="Global currency diagram"
        className="w-full h-auto object-contain"
      />
    </div>
  </div>
</div>

    </section>
     <section className="w-full bg-white py-12 px-3 md:px-12">
     <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
       {features.map((f, idx) => (
         <div
           key={idx}
           className="bg-[#F6F7FB] rounded-2xl p-6 flex flex-col h-full shadow-sm"
         >
           <h3 className="font-bold text-lg md:text-xl text-black mb-3 leading-snug">
             {f.title}
           </h3>
           <p className="text-gray-700 text-base mb-6 flex-1">{f.description}</p>
           <a
             href={f.link}
             className="text-[#033175] font-semibold text-base transition-colors"
           >
             {f.linkText}
           </a>
         </div>
       ))}
     </div>
   </section>
   </>
  );
}
