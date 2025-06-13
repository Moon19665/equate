export default function FoundersGrowSection() {
    return (
      <section className="w-full bg-[#f7f8fa] py-16 px-4 md:px-16 max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-center md:items-end justify-center gap-10">
          {/* Left: Text Content */}
          <div className="w-full md:w-1/2 mb-10 md:mb-0">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Let's grow together.
            </h2>
            <p className="text-base text-gray-700 mb-6">
              We love supporting founders by sharing our content, community, and connections.
            </p>
            <ul className="list-disc pl-5 text-base text-gray-900 mb-8 space-y-2">
              <li>Attend founder events and webinars</li>
              <li>Meet industry experts, VCs, and accelerators</li>
              <li>Hire accountants and other service professionals</li>
            </ul>
            <a
              href="#"
              className="text-orange-600 font-medium text-base hover:underline transition"
            >
              Get our founder newsletter &rarr;
            </a>
          </div>
          {/* Right: Image */}
          <div className="w-full md:w-1/2 flex flex-col items-end gap-4">
            <img
              src="https://brand.brex.com/transform/f6819779-d942-41e2-be87-2a66b20c7b49/Founders-Events?io=transform:fit,width:600,height:400&quality=95"
              alt="Founder Event"
              className="w-72 h-64 rounded-xl object-cover"
            />
          </div>
        </div>
      </section>
    );
  }
  