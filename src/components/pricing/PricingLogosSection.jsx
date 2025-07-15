// React component using Tailwind CSS for the pricing logos section

export default function PricingLogosSection() {
    return (
      <section className="bg-gray-50 py-12 text-center">
        <div className="max-w-[1920px] mx-auto px-3 md:px-12">
          <h2 className="text-3xl font-semibold text-gray-900 mb-8 sm:text-2xl">
            Everything you need to spend with confidence.
          </h2>
          <div className="flex justify-center">
            <img
              src="/assets/pricing/Pricing-logos.webp"
              alt="Trusted by DoorDash, Airtable, Scale, ServiceTitan, Lemonade"
              className="max-w-full h-auto object-contain filter grayscale opacity-70"
            />
          </div>
        </div>
      </section>
    );
  }
  