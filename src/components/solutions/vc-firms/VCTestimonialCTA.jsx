'use client';

export default function VCTestimonialCTA() {
  return (
    <section className="w-full bg-[#f7f8fa] py-16">
      <div className="max-w-[1920px] mx-auto px-3 md:px-12">
        

        {/* CTA Card */}
        <div className="bg-black text-white rounded-2xl overflow-hidden flex flex-col md:flex-row items-center justify-between p-8 md:p-12">
          <div className="flex-1">
            <h3 className="text-xl sm:text-2xl font-semibold mb-4">
              See how Equate can help your portfolio companies.
            </h3>
            <button className="bg-[#033175] text-white font-semibold px-6 py-3 rounded-md transition">
              Learn more
            </button>
          </div>
          <div className="flex-1 mt-6 md:mt-0 flex justify-end">
            <img
              src="/assets/homepage-images/equate-cards.png"
              alt="Equate Cards"
              className="max-w-xs object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
