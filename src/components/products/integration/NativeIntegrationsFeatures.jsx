'use client';

const features = [
  {
    title: "Close your books even faster.",
    description:
      "Save hours preparing, reviewing, and exporting expenses with accounting integrations that help you speed up your monthly close.",
    cta: { text: "Explore accounting automation →", href: "#" },
    image: "/assets/integrations/calender.png",
    alt: "Continuous Reconciliation",
    imageFirst: true,
    highlight: "94% transactions automatically synced",
  },
  {
    title: "Sync with any ERP for a real-time view.",
    description:
      "Increase accountability with the most accurate view of data you can trust. Import and export your accounting data with our direct ERP integrations or Universal ERP CSV transfer.",
    cta: { text: "Explore our award-winning NetSuite integration →", href: "#" },
    image: "/assets/integrations/partner.png",
    alt: "ERP Integrations",
    imageFirst: false,
  },
  {
    title: "Unify all your data in Brex with custom fields.",
    description:
      "Sync data from business systems natively with Brex, and use HRIS and ERP fields to automate work.",
    bullets: [
      "Keep user information up to date with custom fields",
      "Use fields to create rules that automate work in Brex",
      "Set rules to ensure expenses are coded accurately",
      "Manage your HRIS and ERP fields in a central place",
    ],
    image: "/assets/integrations/sync.png",
    alt: "Integrations Custom Fields",
    imageFirst: true,
  },
  {
    title: (
      <>
        <span className="text-[#033175] font-semibold">Brex Embedded</span>
        <br />
        Get the power of Brex cards in other platforms
      </>
    ),
    description:
      "Issue Brex virtual cards with built-in controls directly in third-party procurement, travel, and ERP platforms to save time, control costs, and automate reconciliation across every type of spend.",
    cta: { text: "Explore Brex Embedded solutions →", href: "#" },
    image: "/assets/integrations/logo-card.png",
    alt: "Brex Embedded",
    imageFirst: false,
  },
];

export default function NativeIntegrationsFeatures() {
  return (
    <>
    <section className="w-full bg-white py-16 ">
      <div className="max-w-[1920px] px-3 md:px-12 mx-auto flex flex-col gap-24">
        {features.map((f, idx) => (
          <div
            key={idx}
            className={`flex flex-col-reverse md:flex-row items-center md:items-stretch gap-8 md:gap-12 ${
              (idx % 2 === 1) ? "md:flex-row-reverse" : ""
            }`}
          >
            {/* Left: Content */}
            <div className="w-full md:w-1/2 flex flex-col justify-center">
              <h2 className="text-2xl md:text-3xl font-bold text-black mb-4">
                {f.title}
              </h2>
              <p className="text-gray-700 text-base md:text-lg mb-4">{f.description}</p>
              {f.bullets && (
                <ul className="text-gray-700 text-base md:text-lg mb-4 list-disc pl-5 space-y-1">
                  {f.bullets.map((b, i) => (
                    <li key={i}>{b}</li>
                  ))}
                </ul>
              )}
              {f.cta && (
                <a
                  href={f.cta.href}
                  className="text-[#033175] font-semibold text-base transition-colors"
                >
                  {f.cta.text}
                </a>
              )}
            </div>
            {/* Right: Image */}
            <div className="w-full md:w-1/2 flex items-center justify-center">
              <div className="w-full bg-[#f6f7fb] rounded-2xl p-6 flex flex-col items-center shadow-sm">
                <img
                  src={f.image}
                  alt={f.alt}
                  className="w-full max-w-md h-auto object-contain mb-0"
                  loading="lazy"
                />
                {/* Optional: Highlight box for first card */}
                {f.highlight && (
                  <div className="mt-6 bg-white rounded-lg shadow flex items-center px-4 py-3 border border-green-600 max-w-xs mx-auto">
                    <span className="w-6 h-6 bg-green-600 rounded-full flex items-center justify-center mr-3">
                      <svg viewBox="0 0 20 20" fill="none" className="w-4 h-4 text-white">
                        <path d="M5 10l4 4 6-6" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </span>
                    <span className="text-gray-900 text-base font-medium">{f.highlight}</span>
                  </div>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
    <section className="w-full bg-white py-16 ">
    
    <div className="max-w-[1920px] px-3 md:px-12 mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
      {/* Video 1 */}
       <div className="w-full flex flex-col items-center">
        <img
          src="/assets/integrations/onboarding.png"
          alt="Brex Sage Integration"
          className="w-full h-auto rounded-xl object-contain"
          loading="lazy"
        />
      </div>
      {/* Video 2 */}
      <div className="w-full flex flex-col items-center">
        <img
          src="https://brand.brex.com/transform/049dd2d3-c19b-45e3-a01b-9d508eafebbe/Brex_Sage-1?io=transform:fit,width:2000,height:1500&quality=95"
          alt="Brex Sage Integration"
          className="w-full h-auto rounded-xl shadow object-contain"
          loading="lazy"
        />
      </div>
      {/* Image */}
      <div className="w-full flex flex-col items-center">
        <img
          src="https://brand.brex.com/transform/049dd2d3-c19b-45e3-a01b-9d508eafebbe/Brex_Sage-1?io=transform:fit,width:2000,height:1500&quality=95"
          alt="Brex Sage Integration"
          className="w-full h-auto rounded-xl shadow object-contain"
          loading="lazy"
        />
      </div>
    </div>
  </section>
    </>
  );
}
