// React component using Tailwind CSS for the pricing logos section

export default function PricingLogosSection() {
    return (
      <section className="bg-gray-50 py-12 px-4 text-center">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-semibold text-gray-900 mb-8 sm:text-2xl">
            Everything you need to spend with confidence.
          </h2>
          <div className="flex justify-center">
            <img
              src="https://brand.brex.com/transform/b25d237e-ebab-450d-8783-2261c7e96432/Pricing-logos-desktop?io=transform:fit,width:2000,height:75&quality=95"
              alt="Trusted by DoorDash, Airtable, Scale, ServiceTitan, Lemonade"
              className="max-w-full h-auto object-contain filter grayscale opacity-70"
            />
          </div>
        </div>
      </section>
    );
  }
  