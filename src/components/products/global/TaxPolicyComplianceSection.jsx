export default function TaxPolicyComplianceSection() {
    const features = [
      {
        image: "/assets/integrations/onboarding.png",
        title: "Localized expense policies and compliance.",
        description:
          "Customize policies to local markets, currencies, tax regulations, and team needs — we’ll ensure employees are compliant everywhere.",
      },
      {
        image: "/assets/integrations/wix.png",
        title: "Multi-currency receipt matching.",
        description: (
          <>
            Add receipts in any language and currency, and Brex will use OCR to match them to the right expense.
            <br />
            <span className="text-[#033175] font-medium">Brex auto-collects many receipts &rarr;</span>
          </>
        ),
      },
      {
        image: "/assets/integrations/sage.png",
        title: "VAT tracking to simplify tax reporting.",
        description:
          "Brex collects and stores VAT information across international expenses that you can export to your ERP for recapture and compliance with local tax regulations.",
      },
    ];
  
    return (
      <>
      <section className="w-full bg-white py-16 px-3 md:px-12">
        <div className="max-w-5xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-black mb-2">
            Drive local tax and policy compliance.
          </h2>
          <p className="text-gray-500 text-base md:text-lg">
            Brex flexes to local needs to make compliance easy, anywhere.
          </p>
        </div>
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((f, idx) => (
            <div key={idx} className="bg-[#F6F7FB] rounded-2xl p-6 flex flex-col h-full shadow-sm">
              <div className="w-full h-44 flex items-center justify-center mb-4">
                <img
                  src={f.image}
                  alt={f.title}
                  className=" w-auto rounded-lg object-contain"
                  loading="lazy"
                />
              </div>
              <h3 className="font-bold text-lg text-black mb-3 leading-snug text-left">
                {f.title}
              </h3>
              <p className="text-gray-700 text-base text-left">{f.description}</p>
            </div>
          ))}
        </div>
      </section>  
    <section className="w-full bg-white py-12 px-4">
    <div className="max-w-3xl mx-auto text-center">
      <div className="text-3xl font-[Pacifico, cursive] text-gray-700 mb-4" style={{ fontFamily: "'Pacifico', cursive" }}>
        Lemonade
      </div>
      <blockquote className="text-lg md:text-2xl text-gray-800 font-normal mb-6 leading-relaxed">
        “Consolidating onto Brex’s global cards for our teams around the world allows us to see and analyze spend across our entities in one dashboard — all while operating in local currencies.”
      </blockquote>
      <div className="text-gray-500 text-sm mb-2">
        — <a href="#" className="underline hover:text-gray-700">Mike Duffy</a>, Director, Assistant Controller at Lemonade
      </div>
      <a
        href="#"
        className="text-[#033175] font-semibold text-base transition-colors"
      >
        Read more &rarr;
      </a>
    </div>
  </section>
      </>
    );
  }
  