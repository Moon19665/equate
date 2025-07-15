'use client';

const logos = [
  { name: 'Substack', src: '/assets/homepage-images/subtrack.webp' },
  { name: 'ServiceTitan', src: '/assets/homepage-images/service.webp' },
  { name: 'SeatGeek', src: '/assets/homepage-images/seat.webp' },
  { name: 'Lulu and Georgia', src: '/assets/homepage-images/lulu.webp' },
  { name: 'Tecovas', src: '/assets/homepage-images/teco.webp' },
  { name: 'Anthropic', src: '/assets/homepage-images/anthro.webp' },
  { name: 'DispatchHealth', src: '/assets/homepage-images/disp.webp' },
  { name: 'Cursor', src: '/assets/homepage-images/cursor.webp' },
  { name: 'Plaid', src: '/assets/homepage-images/plaid.webp' },
  { name: 'DoorDash', src: '/assets/homepage-images/doordash.webp' },
  { name: 'Gong', src: '/assets/homepage-images/gong.webp' },
  
  { name: 'Sonos', src: '/assets/homepage-images/sono.webp' },
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
