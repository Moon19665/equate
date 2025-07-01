'use client';

import Image from 'next/image';

const logos = [
  "https://brand.brex.com/transform/3bf04ed7-15aa-443b-b018-49108ddbc664/Lazo?io=transform:fit,width:280,height:140&quality=95",
  "https://brand.brex.com/transform/af377341-1eaf-42e1-80a0-ecc81c66cfd5/Escalon?io=transform:fit,width:372,height:130&quality=95",
  "https://brand.brex.com/transform/8cb32b3b-9bf1-410b-8b91-8e2de7e0528c/1618309117522?io=transform:fit,width:322,height:100&quality=95",
  "https://brand.brex.com/transform/c5a8cfc9-8f1e-4610-8211-4c3b11f4129e/kruze-logo-2x?io=transform:fit,width:346,height:100&quality=95",
  "https://brand.brex.com/transform/46f9deaa-b571-4836-906e-f51a14772d4e/Burkland-Logo?io=transform:fit,width:432,height:90&quality=95",
  "https://brand.brex.com/transform/53b4b29b-fe0f-4baa-8ad3-4a1d88713264/Inkle?io=transform:fit,width:190,height:70&quality=95",
  "https://brand.brex.com/transform/2f867d1c-ac14-48bf-8ba5-eede4a892848/digits-logo?io=transform:fit,width:322,height:90&quality=95",
  "https://brand.brex.com/transform/c0aba9d0-3ba4-49dd-90c2-dcc6af3694e5/trivium-logo?io=transform:fit,width:372,height:90&quality=95",
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
