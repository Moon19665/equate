'use client';

export default function VCTestimonialCTA() {
  return (
    <section className="w-full bg-[#f7f8fa] py-16">
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        {/* Testimonial */}
        <h2 className="text-2xl sm:text-3xl font-bold text-center text-black mb-10">
          Tap into years of industry expertise.
        </h2>
        <div className="flex flex-col md:flex-row items-center gap-10 mb-20">
          <div className="flex-1">
            <img
              src="https://brand.brex.com/m/2f7ea0e0738d761b/webimage-Emily-headshot.jpg?io=transform:fit,width:2000,height:1693&quality=95"
              alt="Emily Manashi"
              className="rounded-xl w-60 h-auto mx-auto md:mx-0 shadow-md"
            />
          </div>
          <div className="flex-1">
            <blockquote className="text-lg text-gray-800 italic leading-relaxed">
              “I used the Brex platform for years at YC. It helped me be way more effective in my day-to-day. I am excited to now be at Brex helping other firms do the same.”
            </blockquote>
            <p className="text-sm text-gray-600 mt-4">
              — <span className="font-medium">Emily Manashi</span>, Relationship Manager, Brex
            </p>
            <a
              href="#"
              className="inline-block mt-4 text-orange-600 font-semibold hover:underline text-sm"
            >
              Get started &rarr;
            </a>
          </div>
        </div>

        {/* CTA Card */}
        <div className="bg-[#111518] text-white rounded-2xl overflow-hidden flex flex-col md:flex-row items-center justify-between p-8 md:p-12">
          <div className="flex-1">
            <h3 className="text-xl sm:text-2xl font-semibold mb-4">
              See how Brex can help your portfolio companies.
            </h3>
            <button className="bg-orange-500 hover:bg-orange-600 text-white font-semibold px-6 py-3 rounded-md transition">
              Learn more
            </button>
          </div>
          <div className="flex-1 mt-6 md:mt-0">
            <img
              src="https://brand.brex.com/transform/070ccccb-f164-470f-a2db-dbb3a750d8f2/Embedded_card?io=transform:fit,width:2000,height:1550&quality=95"
              alt="Brex Cards"
              className="w-full h-auto object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
