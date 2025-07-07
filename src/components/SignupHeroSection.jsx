import React from "react";

const defaultBgUrl =
  "https://brand.brex.com/transform/b456b630-23dd-444f-8452-eb3b5e35a0bb/Prefooter-Background?io=transform:fit,width:2000,height:758&quality=95";
const defaultIllustrationUrl =
  "https://brand.brex.com/transform/d9ab580b-fa31-40d4-891b-e5e1453c0447/Signup-Illustration?io=transform:fit,width:2000,height:1938&quality=95";

export default function SignupHeroSection({
  title,
  desc,
  bgUrl = defaultBgUrl,
  illustrationUrl = defaultIllustrationUrl,
  primaryCta = "Contact sales",
  secondaryCta = "Open an account",
  onPrimaryClick,
  onSecondaryClick,
}) {
  return (
    <section
      className="relative w-full min-h-[500px] flex items-center justify-center py-12 md:py-24"
      style={{
        backgroundImage: `url(${bgUrl})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="max-w-[1920px] md-3 md:px-12 mx-auto flex flex-col-reverse md:flex-row items-center justify-center ">
        {/* Left Column */}
        <div className="w-full md:w-1/1 flex flex-col items-start justify-center text-white z-10 ">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 leading-tight text-white">
            {title}
          </h2>
          <p className="mb-8 text-base md:text-lg text-gray-200">
            {desc}
          </p>
          <div className="flex flex-wrap gap-4">
            <button
              className="bg-[#033175] text-white font-semibold px-6 py-3 text-sm rounded transition"
              onClick={onPrimaryClick}
            >
              {primaryCta}
            </button>
            <button
              className="bg-transparent border border-white hover:bg-white hover:text-black text-white text-sm font-semibold px-6 py-3 rounded transition"
              onClick={onSecondaryClick}
            >
              {secondaryCta}
            </button>
          </div>
        </div>
        {/* Right Column */}
        <div className="w-full md:w-1/2 flex justify-end items-end mb-10 md:mb-0 z-10">
          <img
            src={illustrationUrl}
            alt="Signup illustration"
            className="max-w-[600px] w-full h-auto object-contain"
            loading="lazy"
          />
        </div>
      </div>
    </section>
  );
}
