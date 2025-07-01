'use client';

export default function PolicyEmbedSection() {
  return (
    <div className="w-full bg-[#0a1013] py-16 px-4">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12">
        {/* Left: Text Content */}
        <div className="w-full lg:w-1/2 flex flex-col items-start">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-5">
            Embed your policy in<br className="hidden md:block" /> every swipe.
          </h2>
          <p className="text-base md:text-lg text-[#bfc6ce] mb-8 max-w-xl">
            You can’t be everywhere, but with Brex your policy can. AI will auto-enforce your custom controls across Brex card, reimbursements, travel platform, and invoices.
          </p>
          <ul className="space-y-6 w-full">
            <li className="flex items-start gap-4">
              {/* Icon 1 */}
              <span className="mt-1">
                <svg width="28" height="28" viewBox="0 0 32 32" fill="none">
                  <rect x="5" y="5" width="22" height="22" rx="4" fill="#B6F0EA" />
                  <rect x="10" y="10" width="12" height="2" rx="1" fill="#181c20" />
                  <rect x="10" y="15" width="8" height="2" rx="1" fill="#181c20" />
                  <rect x="10" y="20" width="6" height="2" rx="1" fill="#181c20" />
                </svg>
              </span>
              <span className="text-white text-base md:text-lg">
                <span className="font-semibold">Customize policies</span> by use case, level, department, non-US entity, or anything else.
              </span>
            </li>
            <li className="flex items-start gap-4">
              {/* Icon 2 */}
              <span className="mt-1">
                <svg width="28" height="28" viewBox="0 0 32 32" fill="none">
                  <circle cx="16" cy="16" r="12" fill="#B6F0EA" />
                  <circle cx="16" cy="13" r="3" fill="#181c20" />
                  <rect x="13" y="19" width="6" height="2" rx="1" fill="#181c20" />
                  <rect x="15" y="15" width="2" height="4" rx="1" fill="#181c20" />
                </svg>
              </span>
              <span className="text-white text-base md:text-lg">
                <span className="font-semibold">Block or require approval</span> to spend on specific categories/merchants.
              </span>
            </li>
            <li className="flex items-start gap-4">
              {/* Icon 3 */}
              <span className="mt-1">
                <svg width="28" height="28" viewBox="0 0 32 32" fill="none">
                  <circle cx="16" cy="16" r="14" fill="#B6F0EA" />
                  <path d="M10 16l4 4 8-8" stroke="#181c20" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </span>
              <span className="text-white text-base md:text-lg">
                <span className="font-semibold">Make easy-to-understand expense rules</span> accessible at the time of purchase.
              </span>
            </li>
          </ul>
        </div>

        {/* Right: Video */}
        <div className="w-full lg:w-1/2 flex justify-center items-center mb-10 lg:mb-0">
          <div className="w-[220px] sm:w-[260px] md:w-[300px] lg:w-[320px] xl:w-[340px] rounded-2xl shadow-2xl overflow-hidden bg-black">
            <video
              autoPlay
              loop
              muted
              playsInline
              preload="none"
              poster="https://brand.brex.com/m/4f64e1f3f6b899e4/webimage-Policy-R4.jpg"
              className="w-full h-full object-cover"
              style={{ aspectRatio: '9/19.5', background: '#111' }}
            >
              
            </video>
          </div>
        </div>
      </div>
    </div>
  );
}
