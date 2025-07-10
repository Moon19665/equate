'use client';

import Image from 'next/image';

const logos = [
  "/assets/accounting/Lazo.webp",
  "/assets/accounting/Escalon.webp",
  "/assets/accounting/1618309117522.webp",
  "/assets/accounting/kruze-logo.webp",
  "/assets/accounting/Burkland-Logo.webp",
  "/assets/accounting/Inkle.webp",
  "/assets/accounting/digits-logo.webp",
  "/assets/accounting/trivium-logo.webp",
];

// Duplicate list for seamless infinite scroll
const allLogos = [...logos, ...logos];

export default function AccountingLogoSlider() {
  return (
    <section className="w-full py-12 bg-white overflow-hidden">
      <div className=" mx-auto ">
        <p className="text-center text-sm font-mono tracking-wider text-gray-500 mb-6">
          JOIN TOP ACCOUNTING FIRMS
        </p>

        <div className="relative w-full overflow-hidden">
          <div className="flex w-max animate-scroll whitespace-nowrap gap-12">
            {allLogos.map((src, idx) => (
              <div key={idx} className="flex-shrink-0">
                <img
                  src={src}
                  alt={`logo-${idx}`}
                  className="h-10 w-auto sm:h-12 object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Tailwind custom keyframes */}
      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        .animate-scroll {
          animation: scroll 30s linear infinite;
        }
      `}</style>
    </section>
  );
}
