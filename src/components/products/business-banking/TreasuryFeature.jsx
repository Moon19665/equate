'use client';

export default function TreasuryFeature() {
  return (
    <div className="w-full bg-white py-12 px-4 flex flex-col items-center">
      {/* Centered Heading and Subheading */}
      <div className="w-full max-w-4xl mx-auto flex flex-col items-center text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold text-[#111] mb-3">
          This is banking made powerful.
        </h1>
        <p className="text-base md:text-lg text-[#666]">
          Get industry-leading return plus modern checking and FDIC insurance — all in one account.
        </p>
      </div>

      {/* Main Content */}
      <div className="w-full max-w-7xl flex flex-col md:flex-row items-center gap-10">
        {/* Left: Text Content */}
        <div className="w-full md:w-1/2 flex flex-col items-start mb-10 md:mb-0">
          <div className="uppercase text-xs text-[#888] mb-2 tracking-wider">TREASURY</div>
          <h2 className="text-2xl md:text-3xl font-bold text-[#111] mb-2">
            Maximize earnings, minimize risk.
          </h2>
          <p className="text-[#222] text-base mb-4">
            Earn up to 4.34%<sup>†</sup> in a treasury account with no minimum deposit.
          </p>
          <ul className="list-disc pl-5 space-y-2 text-[#222] text-[15px]">
            <li>
              Keep growing your cash until the moment you need it with same-hour liquidity
            </li>
            <li>
              Minimize risk through government-backed stability, a fixed NAV, and no exposure to credit markets
            </li>
            <li>
              Automatically top up your treasury account to maximize your returns — no extra work needed
            </li>
          </ul>
        </div>

        {/* Right: Video with Card Overlay */}
        <div className="w-full md:w-1/2 flex justify-center">
          <div className="relative w-full max-w-md rounded-2xl overflow-hidden bg-[#eeeff7] flex items-center justify-between min-h-[340px]">
            {/* Video as background */}
            <video
              className="absolute inset-0 w-full h-full object-cover"
              src="https://brand.brex.com/m/27c787e2dc95aab6/original/1_LP_Volley_Treasury_hb.mp4"
              poster="https://brand.brex.com/m/27c787e2dc95aab6/webimage-1_LP_Volley_Treasury_hb.jpg"
              autoPlay
              loop
              muted
              playsInline
              preload="none"
              aria-label="Treasury feature demo"
            />
           
            {/* Overlay for readability (optional, can be removed if not needed) */}
          </div>
        </div>
      </div>
      <div className="w-full max-w-7xl mt-10 flex flex-col-reverse md:flex-row items-center gap-10">
         {/* Right: Video with Card Overlay */}
         <div className="w-full md:w-1/2 flex justify-center">
          <div className="relative w-full max-w-md rounded-2xl overflow-hidden bg-[#eeeff7] flex items-center justify-between min-h-[340px]">
            {/* Video as background */}
            <video
              className="absolute inset-0 w-full h-full object-cover"
              src="https://brand.brex.com/m/61eead04d089f114/original/2_LP_Volley_Checking_hb.mp4"
              poster="https://brand.brex.com/m/61eead04d089f114/webimage-2_LP_Volley_Checking_hb.jpg"
              autoPlay
              loop
              muted
              playsInline
              preload="none"
              aria-label="Treasury feature demo"
            />
           
            {/* Overlay for readability (optional, can be removed if not needed) */}
          </div>
        </div>
        {/* Left: Text Content */}
        <div className="w-full md:w-1/2 flex flex-col items-start mb-10 md:mb-0">
          <div className="uppercase text-xs text-[#888] mb-2 tracking-wider">TREASURY</div>
          <h2 className="text-2xl md:text-3xl font-bold text-[#111] mb-2">
            Maximize earnings, minimize risk.
          </h2>
          <p className="text-[#222] text-base mb-4">
            Earn up to 4.34%<sup>†</sup> in a treasury account with no minimum deposit.
          </p>
          <ul className="list-disc pl-5 space-y-2 text-[#222] text-[15px]">
            <li>
              Keep growing your cash until the moment you need it with same-hour liquidity
            </li>
            <li>
              Minimize risk through government-backed stability, a fixed NAV, and no exposure to credit markets
            </li>
            <li>
              Automatically top up your treasury account to maximize your returns — no extra work needed
            </li>
          </ul>
        </div>

       
      </div>
      <div className="w-full max-w-7xl mt-10 flex flex-col md:flex-row items-center gap-10">
         {/* Left: Text Content */}
         <div className="w-full md:w-1/2 flex flex-col items-start mb-10 md:mb-0">
          <div className="uppercase text-xs text-[#888] mb-2 tracking-wider">TREASURY</div>
          <h2 className="text-2xl md:text-3xl font-bold text-[#111] mb-2">
            Maximize earnings, minimize risk.
          </h2>
          <p className="text-[#222] text-base mb-4">
            Earn up to 4.34%<sup>†</sup> in a treasury account with no minimum deposit.
          </p>
          <ul className="list-disc pl-5 space-y-2 text-[#222] text-[15px]">
            <li>
              Keep growing your cash until the moment you need it with same-hour liquidity
            </li>
            <li>
              Minimize risk through government-backed stability, a fixed NAV, and no exposure to credit markets
            </li>
            <li>
              Automatically top up your treasury account to maximize your returns — no extra work needed
            </li>
          </ul>
        </div>
         {/* Right: Video with Card Overlay */}
         <div className="w-full md:w-1/2 flex justify-center">
          <div className="relative w-full max-w-md rounded-2xl overflow-hidden bg-[#eeeff7] flex items-center justify-between min-h-[340px]">
            {/* Video as background */}
            <video
              className="absolute inset-0 w-full h-full object-cover"
              src="https://brand.brex.com/m/224578af3a248038/original/3_LP_Volley_Vault_hb.mp4"
              poster="https://brand.brex.com/m/224578af3a248038/webimage-3_LP_Volley_Vault_hb.jpg"
              autoPlay
              loop
              muted
              playsInline
              preload="none"
              aria-label="Treasury feature demo"
            />
           
            {/* Overlay for readability (optional, can be removed if not needed) */}
          </div>
        </div>
       

       
      </div>
    </div>
  );
}
