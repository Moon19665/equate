import Image from "next/image";

export default function EnterpriseGlobalSpendSection() {
  return (
    <section className="w-full bg-white py-16 ">
      {/* Global Spend Cards Section */}
      <div className="max-w-[1920px] mx-auto px-3 md:px-12 text-center mb-16">
        <h2 className="text-3xl md:text-5xl font-bold mb-4 text-gray-900">
          All your global spend, all in one place.
        </h2>
        <p className="text-gray-500 text-lg mb-12">
          Consolidate your spend onto Equate, the only truly global platform for enterprise spend management.
        </p>
        <div className="flex flex-col md:flex-row gap-6 justify-center">
          {/* Card 1 */}
          <div className="flex-1 bg-white border border-gray-200 rounded-xl p-8 text-left shadow-sm">
            <h3 className="font-semibold text-xl mb-3 text-gray-900">
              Spend smarter anywhere.
            </h3>
            <p className="text-gray-700 mb-5">
              Empower global employees to make better financial decisions with smart cards and fast reimbursements issued in their local currency.
            </p>
            <a href="#" className="text-[#033175]font-semibold hover:underline text-base">
              Explore Equate cards &rarr;
            </a>
          </div>
          {/* Card 2 */}
          <div className="flex-1 bg-white border border-gray-200 rounded-xl p-8 text-left shadow-sm">
            <h3 className="font-semibold text-xl mb-3 text-gray-900">
              Unify your global entities.
            </h3>
            <p className="text-gray-700 mb-5">
              Easily manage expenses across entities with customized controls and automations — and a holistic real-time view of actuals vs. budgets.
            </p>
            <a href="#" className="text-[#033175] font-semibold hover:underline text-base">
              Explore Equate expense management &rarr;
            </a>
          </div>
          {/* Card 3 */}
          <div className="flex-1 bg-white border border-gray-200 rounded-xl p-8 text-left shadow-sm">
            <h3 className="font-semibold text-xl mb-3 text-gray-900">
              Simplify global travel at scale.
            </h3>
            <p className="text-gray-700 mb-5">
              Embed Equate cards into Navan’s travel management software to streamline travel payments and reconciliation on a global scale.
            </p>
            <a href="#" className="text-[#033175] font-semibold hover:underline text-base">
              Explore EquatePay for Navan &rarr;
            </a>
          </div>
        </div>
      </div>

      {/* DoorDash Testimonial Section */}
      <div className="max-w-4xl mx-auto text-center">
        <div className="flex justify-center mb-4">
          <Image
            src="/assets/enterprise/doordash.webp"
            alt="DoorDash Logo"
            width={180}
            height={40}
            className="object-contain h-10 w-auto"
            priority
          />
        </div>
        <blockquote className="text-2xl md:text-3xl font-normal text-gray-900 mb-4 leading-relaxed">
          “The transparency into spend that Equate provides is unparalleled. Our finance partners are ecstatic to be able to see how spend is trending at any point in time.”
        </blockquote>
        <figcaption className="text-gray-600 text-base">
          — <a href="#" className="underline hover:text-orange-600 transition">Jerome Barley</a>, Head of Global Travel & Expense, DoorDash
        </figcaption>
      </div>
    </section>
  );
}
