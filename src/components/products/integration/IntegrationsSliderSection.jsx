'use client';

import React, { useRef, useEffect, useState } from "react";

export default function IntegrationsSliderSection() {
  const topRowLogos = [
    { name: "QuickBooks", logo: "https://logo.clearbit.com/quickbooks.intuit.com" },
    { name: "Zapier", logo: "https://logo.clearbit.com/zapier.com" },
    { name: "Slack", logo: "https://logo.clearbit.com/slack.com" },
    { name: "1Password", logo: "https://logo.clearbit.com/1password.com" },
    { name: "Dash", logo: "assets/integrations/plotly.com" },
    { name: "Sage", logo: "https://logo.clearbit.com/sage.com" },
    { name: "Xero", logo: "https://logo.clearbit.com/xero.com" },
    { name: "BambooHR", logo: "https://logo.clearbit.com/bamboohr.com" },
  ];

  const bottomRowLogos = [
    { name: "UKG", logo: "https://logo.clearbit.com/ukg.com" },
    { name: "Uber", logo: "https://logo.clearbit.com/uber.com" },
    { name: "VDI", logo: "https://logo.clearbit.com/vmware.com" },
    { name: "Gusto", logo: "https://logo.clearbit.com/gusto.com" },
    { name: "TriNet", logo: "https://logo.clearbit.com/trinet.com" },
    { name: "Workato", logo: "https://logo.clearbit.com/workato.com" },
    { name: "CoupaPay", logo: "https://logo.clearbit.com/coupa.com" },
    { name: "WhatsApp", logo: "https://logo.clearbit.com/whatsapp.com" },
  ];

  // Dynamic calculation for seamless animation
  const topRowRef = useRef(null);
  const bottomRowRef = useRef(null);
  const [topRowWidth, setTopRowWidth] = useState(0);
  const [bottomRowWidth, setBottomRowWidth] = useState(0);

  useEffect(() => {
    if (topRowRef.current) {
      setTopRowWidth(topRowRef.current.scrollWidth / 2); // since logos are duplicated
    }
    if (bottomRowRef.current) {
      setBottomRowWidth(bottomRowRef.current.scrollWidth / 2);
    }
  }, []);

  return (
    <section className="w-full bg-[#fafbfc] py-16  overflow-hidden">
      {/* Header */}
      <div className="max-w-4xl mx-auto text-center mb-12">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
          Automate manual work with 1,000s of integrations.
        </h2>
        <p className="text-base md:text-lg text-gray-600 max-w-3xl mx-auto">
          Equate integrates with all your software so you can manage your business with ease — from one place.
          Boost efficiency with auto-categorized expense data, smoother payroll, and built-in alerts.
        </p>
      </div>

      {/* Logo Sliders */}
      <div className="max-w-[1920px] px-3 md:px-12 mx-auto">
        {/* Top Row - Moving Right */}
        <div className="flex mb-8 overflow-hidden">
          <div
            ref={topRowRef}
            className="flex slider-row"
            style={{
              width: topRowWidth ? `${topRowWidth * 2}px` : "auto",
              animation: topRowWidth
                ? `scroll-right ${topRowWidth / 40}s linear infinite`
                : "none",
            }}
            onMouseEnter={e => (e.currentTarget.style.animationPlayState = "paused")}
            onMouseLeave={e => (e.currentTarget.style.animationPlayState = "running")}
          >
            {[...topRowLogos, ...topRowLogos].map((logo, index) => (
              <div
                key={`top-${index}`}
                className="flex-shrink-0 w-20 h-20 md:w-24 md:h-24 mx-0 bg-white rounded-full shadow-sm border border-gray-100 flex items-center justify-center hover:shadow-md transition-shadow duration-300"
                style={{ marginRight: "100px" }} // No gap!
              >
                <img
                  src={logo.logo}
                  alt={logo.name}
                  className="w-10 h-10 md:w-12 md:h-12 object-contain"
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Row - Moving Left */}
        <div className="flex overflow-hidden">
          <div
            ref={bottomRowRef}
            className="flex slider-row"
            style={{
              width: bottomRowWidth ? `${bottomRowWidth * 2}px` : "auto",
              animation: bottomRowWidth
                ? `scroll-left ${bottomRowWidth / 40}s linear infinite`
                : "none",
            }}
            onMouseEnter={e => (e.currentTarget.style.animationPlayState = "paused")}
            onMouseLeave={e => (e.currentTarget.style.animationPlayState = "running")}
          >
            {[...bottomRowLogos, ...bottomRowLogos].map((logo, index) => (
              <div
                key={`bottom-${index}`}
                className="flex-shrink-0 w-20 h-20 md:w-24 md:h-24 mx-0 bg-white rounded-full shadow-sm border border-gray-100 flex items-center justify-center hover:shadow-md transition-shadow duration-300"
                style={{ marginRight: "100px" }} // No gap!
              >
                <img
                  src={logo.logo}
                  alt={logo.name}
                  className="w-10 h-10 md:w-12 md:h-12 object-contain"
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes scroll-right {
          0% {
            transform: translateX(-50%);
          }
          100% {
            transform: translateX(0%);
          }
        }
        @keyframes scroll-left {
          0% {
            transform: translateX(0%);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .slider-row:hover {
          animation-play-state: paused !important;
        }
      `}</style>
    </section>
  );
}
