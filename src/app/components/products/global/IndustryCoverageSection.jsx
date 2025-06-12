export default function IndustryCoverageSection() {
    return (
      <section className="w-full bg-white py-12 px-4">
        {/* Heading and Subheading */}
        <div className="max-w-3xl mx-auto text-center mb-6">
          <h2 className="text-3xl md:text-4xl font-bold text-black mb-2 leading-tight">
            Get industry-leading<br />coverage.
          </h2>
          <p className="text-gray-700 text-base md:text-lg mb-4">
            Explore our unrivaled local-currency cards and reimbursements.
          </p>
        </div>
        {/* Dropdown */}
        <div className="max-w-7xl mx-auto mb-8">
          <select
            className="w-full rounded-lg border border-gray-300 px-4 py-3 text-base bg-white text-gray-800 focus:outline-none focus:ring-2 focus:ring-orange-400"
            defaultValue="Overview"
          >
            <option>Overview</option>
            {/* Add more options as needed */}
          </select>
        </div>
        {/* Map Image */}
        <div className="max-w-7xl mx-auto">
          <img
            src="/_next/image?url=https%3A%2F%2Fbrand.brex.com%2Ftransform%2F219a91a6-553b-4c1d-aeb1-8814cd9fcbd7%2FGlobal-Map-mobile&w=3840&q=100"
            alt="Global Map Coverage"
            className="w-full h-auto rounded-2xl  object-contain"
            loading="lazy"
          />
        </div>
      </section>
    );
  }
  