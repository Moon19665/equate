'use client';

export default function GlobalDiagramSection() {
  return (
    <section className="w-full bg-white py-16 px-3 md:px-12">
      {/* Heading and Subheading */}
      <div className="max-w-3xl mx-auto text-center mb-10">
        <h2 className="text-3xl md:text-4xl font-bold text-black mb-3">
          Manage global spend in one platform.
        </h2>
        <p className="text-gray-700 text-base md:text-lg">
          Control cards, reimbursements, and billing for every entity, country, and currency — all in one dashboard.
        </p>
      </div>
      {/* Responsive Video Diagram */}
      <div className="max-w-7xl mx-auto">
       <div className="w-full rounded-2xl overflow-hidden bg-gray-100">
  <img
    src="/assets/automation/equate-ss.png"
    alt="Global Platform Diagram"
    className="w-full h-auto object-contain"
  />
</div>

      </div>
    </section>
  );
}
