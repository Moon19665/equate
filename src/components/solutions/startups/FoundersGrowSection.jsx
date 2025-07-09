export default function FoundersGrowSection() {
  return (
    <section className="w-full bg-[#f7f8fa] py-16 max-w-[1920px] px-3 md:px-12 mx-auto">
      <div className="flex flex-col items-center justify-center text-center gap-10">
        {/* Text Content */}
        <div className="w-full max-w-xl">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Let's grow together.
          </h2>
          <p className="text-base text-gray-700 mb-6">
            We love supporting founders by sharing our content, community, and connections.
          </p>
          <ul className="list-disc list-inside text-base text-gray-900 mb-8 space-y-2">
            <li>Attend founder events and webinars</li>
            <li>Meet industry experts, VCs, and accelerators</li>
            <li>Hire accountants and other service professionals</li>
          </ul>
          <a
            href="#"
            className="text-[#033175] font-medium text-base hover:underline transition"
          >
            Get our founder newsletter &rarr;
          </a>
        </div>
      </div>
    </section>
  );
}
