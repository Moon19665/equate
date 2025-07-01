export default function WebinarGridSection() {
    const webinars = [
      {
        title: "How AI Can Increase Working Capital: Practical Tips and Strategies",
        date: "March 2025",
        desc: "Top finance leaders from Brex, Respaid (YC), Redis, and Grammarly explore how GenAI is transforming working capital management.",
        image: "https://brand.brex.com/transform/f66f1df8-7c5f-4463-be7f-5cb3b37c8575/Respaid-webinar-preview?io=transform:fit,width:2500,height:1406&quality=95"
      },
      {
        title: "Product demo webinar: How controlling spend can help drive growth",
        date: "January 2025",
        desc: "Watch an interactive demo walkthrough of our latest features that can help you maximize growth and optimize spend.",
        image: "https://brand.brex.com/transform/41b49994-31e4-4bbd-bb5d-0b8be0ef418c/December-Product-demo-webinar_Metadata?io=transform:fit,width:2500,height:1406&quality=95"
      },
      {
        title: "Webinar: Reimagining global travel payments for the enterprise",
        date: "November 2024",
        desc: "Art Levy from Brex and Michael Sindicich from Navan showcase BrexPay for Navan and discuss how it solves the biggest pains in enterprise travel.",
        image: "https://brand.brex.com/m/5a2d71585ed26895/webimage-Navan-Webinar-Metadata-1.png?io=transform:fit,width:2500,height:1406&quality=95"
      },
      {
        title: "Controller's Council Webinar",
        date: "June 2024",
        desc: "Brex’s Chief Accounting Officer explores how AI can automate manual tasks, deliver outputs for contract reviews and flux analysis, and free up time for growth.",
        image: "https://brand.brex.com/transform/c8391f4c-4b79-4b41-b8c2-3340ec225561/Controllers-Council-Webinar-Metadata-1?io=transform:fit,width:2500,height:1406&quality=95"
      },
      {
        title: "How to manage spend on a global scale",
        date: "September 2023",
        desc: "Learn how Brex’s unified spend platform drives efficiency across all of Signify’s global entities.",
        image: "https://brand.brex.com/transform/5c8dea01-d56b-4da1-813d-dfaaa5fa6ed7/Sept-Upsell-Webinar-Video-Cover-16x9-Navy?io=transform:fit,width:2500,height:1406&quality=95"
      },
      {
        title: "The State of U.S. Early-Stage Venture & Startups: 2Q23",
        date: "August 2023",
        desc: "This webinar offers timely insight into how capital flowed into and out of startups in Q2 ‘23 - and how that compares to trends in prior quarters.",
        image: "https://brand.brex.com/transform/2f0cb615-3341-465a-9f14-411c2373252e/state-of-startups-webinar-preview?io=transform:fit,width:2500,height:1406&quality=95"
      }
      // More can be appended here
    ];
  
    return (
      <section className="px-4 py-20 max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-[#111] mb-4">On-demand webinars</h2>
        <p className="text-gray-600 mb-10">Watch webinar replays when it works for you.</p>
  
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {webinars.map((webinar, idx) => (
            <div key={idx} className="rounded-lg overflow-hidden  hover:shadow-xl transition-shadow duration-300 bg-white">
              <img src={webinar.image} alt={webinar.title} className="w-full h-52 object-cover" />
              <div className="p-4">
                <p className="text-sm text-gray-500 mb-1">{webinar.date}</p>
                <h3 className="font-semibold text-[#111] text-lg leading-snug mb-2">{webinar.title}</h3>
                <p className="text-sm text-gray-600">{webinar.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    );
  }