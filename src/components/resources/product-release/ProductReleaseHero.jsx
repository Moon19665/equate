export default function ProductReleaseHero() {
    return (
      <section className="max-w-7xl mx-auto px-4 py-16 text-center">
        <div className="text-orange-600 font-medium text-sm mb-2 flex items-center justify-center">
          <svg
            className="w-4 h-4 mr-1"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M13 16h-1v-4h-1m1-4h.01M12 20.5C6.753 20.5 2.5 16.247 2.5 11S6.753 1.5 12 1.5 21.5 5.753 21.5 11 17.247 20.5 12 20.5z" />
          </svg>
          Spring Release 2025
        </div>
        <h1 className="text-3xl md:text-5xl font-bold text-[#111] leading-tight mb-4">
          Customize anything.<br />Control everything.
        </h1>
        <p className="text-sm md:text-base text-gray-700 max-w-3xl mx-auto mb-10">
          Introducing custom fields that bring your own data into Brex, custom roles with granular user
          permissions, and a new policy engine that can make any rule a reality. Plus a new admin home page,
          invoicing, and much more.
        </p>
  
        <div className="relative overflow-hidden max-w-4xl mx-auto">
          <video
            controls
            autoPlay
            crossOrigin="anonymous"
            playsInline
            preload="auto"
            poster="https://brand.brex.com/m/b71790ca95c8e10/webimage-Brex-2025_SpringUpdate-G13C4b_hb.jpg"
            className="w-full rounded-md shadow-lg"
          >
            <source
              src="https://brand.brex.com/m/b71790ca95c8e10/original/Brex-2025_SpringUpdate-G13C4b_hb.mp4"
              type="video/mp4"
            />
            <img
              src="https://brand.brex.com/m/b71790ca95c8e10/webimage-Brex-2025_SpringUpdate-G13C4b_hb.jpg"
              alt="Product Release"
            />
          </video>
        </div>
      </section>
    );
  }
  