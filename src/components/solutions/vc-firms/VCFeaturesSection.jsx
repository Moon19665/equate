'use client';

export default function VCFeaturesSection() {
  const logos = [
    'https://brand.brex.com/transform/6b33ece2-01b3-4a10-9781-899118dc6d6d/Benchmark',
    'https://brand.brex.com/transform/6a0d6dac-9995-41bb-85c1-efe45899bd94/Greenoaks',
    'https://brand.brex.com/transform/7ca0f11b-c588-422f-b442-90eea3a94bc6/Ribbit',
    'https://brand.brex.com/transform/3bca43b1-9d52-4b6f-8e50-4ca70403a9ab/Human-capital',
    'https://brand.brex.com/transform/b9e84267-da80-4adf-a495-004834216963/ycombinator_logo_color',
    'https://brand.brex.com/transform/34b61b2b-8208-40e7-a7cc-40060e8fb47f/SPC_Lockup1_Hue',
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
      cta: 'Discover the Brex card',
      link: '#',
      image: 'https://brand.brex.com/transform/08268eaf-9297-4687-b64f-78fff150cc91/VC-card-controls?io=transform:fit,width:2000,height:1325&quality=95'
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
      image: 'https://brand.brex.com/transform/2566d20e-3b30-4cb0-b80d-da838d3cfe94/VC-automate?io=transform:fit,width:2000,height:1325&quality=95'
    },
    {
      title: 'End the month-end hassle.',
      points: [
        'Map Brex to your ERP and auto-categorize spend in real time',
        'Book accruals even for incomplete transactions',
        'Integrate with Slack to speed up approvals and reviews'
      ],
      cta: 'Discover accounting automation',
      link: '#',
      image: 'https://brand.brex.com/transform/e30eb3b5-a741-4e62-9d96-5d3405b0c159/VC-accounting?io=transform:fit,width:2000,height:1325&quality=95'
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
      image: 'https://brand.brex.com/transform/0a7d2f7e-6736-4d00-b2ab-b9cdb6afa123/VC-travel?io=transform:fit,width:2000,height:1325&quality=95'
    }
  ];

  return (
    <section className="w-full bg-white py-16">
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        <p className="text-center text-xs uppercase tracking-widest font-mono text-gray-500 mb-6">
          Trusted by leading firms
        </p>
        <div className="flex flex-wrap justify-center items-center gap-6 mb-12">
          {logos.map((src, i) => (
            <img key={i} src={src} alt={`logo-${i}`} className="h-6 object-contain" />
          ))}
        </div>

        {sections.map((section, i) => (
          <div key={i} className={`flex flex-col lg:flex-row ${i % 2 === 1 ? 'lg:flex-row-reverse' : ''} gap-10 mb-20 items-center`}>
            <div className="flex-1">
              <img src={section.image} alt={section.title} className="rounded-xl w-full shadow-md" />
            </div>
            <div className="flex-1">
              <h3 className="text-2xl font-bold text-black mb-4">{section.title}</h3>
              <ul className="list-disc pl-5 space-y-2 text-gray-700 mb-4">
                {section.points.map((point, j) => (
                  <li key={j}>{point}</li>
                ))}
              </ul>
              <a href={section.link} className="text-orange-600 font-semibold hover:underline">
                {section.cta} &rarr;
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
