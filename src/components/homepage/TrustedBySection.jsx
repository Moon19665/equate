'use client';

const logos = [
  { name: 'Substack', src: 'https://brand.brex.com/transform/70ef0941-ff1d-4df9-b892-97c159d9b74d/HP-Substack-grey' },
  { name: 'ServiceTitan', src: 'https://brand.brex.com/transform/7d3caf0e-3457-41e0-aa97-4f01a952b4d1/HP-ServiceTitan-grey' },
  { name: 'SeatGeek', src: 'https://brand.brex.com/transform/174493ba-d4a4-4c1e-b6a4-0e2e51cedea9/HP-Seatgeek-grey' },
  { name: 'Lulu and Georgia', src: 'https://brand.brex.com/transform/0983812b-c016-47b8-8142-fe7b98931524/HP-Lulu-grey' },
  { name: 'Tecovas', src: 'https://brand.brex.com/transform/c166f777-3db8-4163-96a2-623f03574b7e/HP-Tecovas-grey' },
  { name: 'Anthropic', src: 'https://brand.brex.com/transform/8a7a63af-7662-4387-abb6-8f108ab1f225/HP-Anthropic-grey' },
  { name: 'DispatchHealth', src: 'https://brand.brex.com/transform/c56a148e-0c80-47ed-8734-633367500803/HP-dispatchhealth-grey' },
  { name: 'Cursor', src: 'https://brand.brex.com/transform/90572c10-6525-432b-8fc2-7d78b45edc30/HP-Cursor-grey' },
  { name: 'Plaid', src: 'https://brand.brex.com/transform/c8d2427a-dc08-40b8-af06-0c4c47bdcf07/HP-Plaid-grey' },
  { name: 'DoorDash', src: 'https://brand.brex.com/transform/d67e88a8-59ba-48bc-9353-81f9730d6b02/HP-Doordash-grey' },
  { name: 'Gong', src: '/_next/image?url=https%3A%2F%2Fbrand.brex.com%2Ftransform%2Ffa8ed1bc-63e8-4897-b906-ad8fb1f0c58b%2FHP-gong-grey&w=3840&q=100' },
  
  { name: 'Sonos', src: 'https://brand.brex.com/transform/9f0e4b9d-3fad-407d-8c83-e6d01b399ce5/HP-Sonos-grey' },
];

  


export default function TrustedBySection() {
  return (
    <section className="bg-[#f7f7fa] py-10  max-w-[1920px] mt-3 mx-auto">
      <div className="max-w-8xl mx-auto flex flex-col items-center">
        <h2
          className="font-inter font-bold text-[1.4rem] xs:text-[1.7rem] sm:text-[2rem] md:text-[2.25rem] lg:text-[2.5rem] text-[#111] text-center mb-8 tracking-tight"
          style={{ fontWeight: 700, lineHeight: 1.15 }}
        >
          Trusted by 30,000+ top companies.
        </h2>
        <div className="w-full grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-y-8 gap-x-8 md:gap-x-10 items-center justify-items-center">
          {logos.map((logo) => (
            <div
              key={logo.name}
              className="flex items-center justify-center h-8 md:h-10 grayscale opacity-90"
            >
              <img
                src={logo.src}
                alt={logo.name + ' logo'}
                className="max-h-8 md:max-h-10 w-auto object-contain"
                style={{ maxWidth: 120 }}
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
