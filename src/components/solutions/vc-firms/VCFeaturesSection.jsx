'use client';

export default function VCFeaturesSection() {
  const logos = [
    '/assets/equity/Benchmark.webp',
    '/assets/equity/Greenoaks.webp',
    '/assets/equity/Ribbit.webp',
    '/assets/equity/Human-Capital.webp',
    '/assets/equity/ycombinator.webp',
    '/assets/equity/SPC_Lockup1_Hue.webp',
  ];

  const sections = [
    {
      title: 'Get a card that gives you more control.',
      points: [
        'Unlock up to 20x higher credit limits',
        'Auto-generate receipts for in-policy transactions',
        'Issue virtual and physical cards in 30+ currencies',
        'Earn rewards with up to 7x points, and redeem for travel, cash back, and more'
      ],
      cta: 'Discover the Equate card',
      link: '#',
      image: '/assets/equity/control.png'
    },
    {
      title: 'Automate every expense.',
      points: [
        'Auto-generate receipts for 1000s of merchants, like Uber and Amazon',
        'Collect and match receipts in any language or currency',
        'Comment on expenses to notify an employee it needs attention'
      ],
      cta: 'Explore spend management',
      link: '#',
      image: '/assets/equity/receipt.png'
    },
    {
      title: 'End the month-end hassle.',
      points: [
        'Map Equate to your ERP and auto-categorize spend in real time',
        'Book accruals even for incomplete transactions',
        'Integrate with Slack to speed up approvals and reviews'
      ],
      cta: 'Discover accounting automation',
      link: '#',
      image: '/assets/equity/account.png'
    },
    {
      title: 'Simplify your business travel.',
      points: [
        'Access an unbiased global inventory of flights, hotels, and car rentals',
        'Make unlimited itinerary changes to stay flexible for founders',
        'Provision spend limits for travel with embedded policies',
        'Get 24/7 live support any time, anywhere in the world'
      ],
      cta: 'See all our travel features',
      link: '#',
      image: '/assets/equity/cdg.png'
    }
  ];

  return (
    <section className="w-full bg-white py-16">
      <div className="max-w-[1920px] mx-auto px-3 md:px-12">
        <p className="text-center text-xs uppercase tracking-widest font-mono text-gray-500 mb-6">
          Trusted by leading firms
        </p>
        <div className="flex flex-wrap justify-center items-center gap-6 mb-12">
          {logos.map((src, i) => (
            <img key={i} src={src} alt={`logo-${i}`} className="h-6 object-contain" />
          ))}
        </div>

        {sections.map((section, i) => (
          <div key={i} className={`flex flex-col lg:flex-row ${i % 2 === 1 ? 'lg:flex-row-reverse' : ''} gap-10 mb-20 items-center `}>
            <div className="flex-1 flex justify-end">
              <img src={section.image} alt={section.title} className="rounded-xl object-contain max-w-xs md:max-w-lg" />
            </div>
            <div className="flex-1">
              <h3 className="text-2xl font-bold text-black mb-4">{section.title}</h3>
              <ul className="list-disc pl-5 space-y-2 text-gray-700 mb-4">
                {section.points.map((point, j) => (
                  <li key={j}>{point}</li>
                ))}
              </ul>
              <a href={section.link} className="text-[#033175] font-semibold hover:underline">
                {section.cta} &rarr;
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
