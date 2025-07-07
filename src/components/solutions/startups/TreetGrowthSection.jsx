export default function TreetGrowthSection() {
    return (
      <div className="w-full bg-[#f5f6fa]">
        {/* Testimonial Section */}
        <section className="w-full py-16 px-3 md:px-12 flex flex-col items-center text-center bg-[#f5f6fa]">
          {/* Treet Logo */}
          <img
            src="https://brand.brex.com/transform/a7f04a2d-72e2-4a3c-b87e-3242ca6c91c7/treet-logo?io=transform:fit,width:2000,height:523&quality=95"
            alt="Treet Logo"
            className="h-8 md:h-10 mb-8 mx-auto"
            style={{ objectFit: "contain" }}
          />
          {/* Quote */}
          <blockquote className="max-w-3xl mx-auto">
            <p className="text-xl md:text-2xl font-serif text-gray-900 leading-snug md:leading-normal mb-8">
              “Seeing Treet on a billboard was surreal and unexpected. We didn't think we'd be featured like that until we had a larger marketing budget, but Brex made it happen.”
            </p>
            <footer className="text-gray-500 text-base md:text-lg">
              <a
                href="https://www.linkedin.com/in/jakedisraeli/"
                className="underline hover:text-gray-700 transition"
                target="_blank"
                rel="noopener noreferrer"
              >
                Jake Disraeli
              </a>
              , Co-Founder &amp; CEO, Treet
            </footer>
          </blockquote>
        </section>
  
        {/* Growth Section */}
        <section className="w-full py-16 px-4 flex flex-col md:flex-row items-center justify-center bg-[#f5f6fa]">
          {/* Left: Growth Image */}
          <div className="w-full md:w-1/2 flex justify-end mb-10 md:mb-0">
            <img
              src="https://brand.brex.com/transform/aed0fcd8-8e0d-4278-80ad-40df65c3748d/Growth?io=transform:fit,width:2000,height:1503&quality=95"
              alt="Growth UI"
              className="w-full max-w-md rounded-2xl object-contain"
              style={{ boxShadow: "none" }}
            />
          </div>
          {/* Right: Content */}
          <div className="w-full md:w-1/2 md:pl-12 flex flex-col items-start">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 text-left">
              Get more runway for the ride.
            </h2>
            <p className="text-gray-700 text-base md:text-sm mb-6 text-left">
              You’re going places, and Brex has all the financial tools you need to reach your exit.
            </p>
            <ul className="list-disc pl-5 text-gray-800 mb-6 text-sm space-y-2 text-left">
              <li>Automated tax and policy compliance</li>
              <li>Cards and reimbursements in local currency</li>
              <li>Enterprise-grade security &amp; support</li>
              <li>Custom policies and expense approval chains</li>
              <li>Over $400K in discounts on AI and SaaS tools</li>
            </ul>
            <a
              href="#"
              className="text-orange-600 font-medium hover:underline transition text-sm"
            >
              Learn more about expense management &rarr;
            </a>
          </div>
        </section>
      </div>
    );
  }
  