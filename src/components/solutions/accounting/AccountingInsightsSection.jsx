'use client';

export default function AccountingInsightsSection() {
  const insights = [
    {
      image: 'https://brand.brex.com/transform/4bb27b68-7c86-4925-93b9-27b88a447d92/accounting-partner_content-marketing-2?io=transform:fit,width:2000,height:1128&quality=95',
      title: 'Elevate your client services.',
      description: 'Equate is reaffirming our commitment to the backbone of financial operational excellence: accounting firms.',
      linkText: 'Read the full post',
      link: '#',
    },
    {
      image: 'https://brand.brex.com/transform/742b3c02-bfc4-41f4-b364-9efdcfab1880/accounting-partner_content-marketing?io=transform:fit,width:2000,height:1128&quality=95',
      title: 'Make every dollar count.',
      description: 'Maximize the value you get from Equate with our Impact Dashboard, smart search, global bill pay, and much more.',
      linkText: 'See what’s new at Equate',
      link: '#',
    },
    {
      image: 'https://brand.brex.com/transform/6ba8853f-5139-4260-96a5-3941f43c0a55/accounting-partner_content-marketing-3?io=transform:fit,width:2000,height:1165&quality=95',
      title: 'Use AI to drive accuracy.',
      description: 'See how AI-powered automation can supercharge compliance while unburdening your team.',
      linkText: 'Get the e-book',
      link: '#',
    },
  ];

  return (
    <section className="w-full py-16 bg-[#f7f8fa]">
      <div className="max-w-[1920px] mx-auto px-3 md:px-12 ">
        <h2 className="text-2xl sm:text-3xl font-bold text-center text-black mb-12">
          The latest insights for accounting firms.
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {insights.map((item, idx) => (
            <div key={idx} className=" overflow-hidden ">
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-lg font-semibold text-black mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-600 text-sm mb-4">
                  {item.description}
                </p>
                <a
                  href={item.link}
                  className="text-orange-600 font-semibold text-sm hover:underline"
                >
                  {item.linkText} →
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
