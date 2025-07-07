import React from "react";

export default function BillPayTestimonial() {
  return (
    <div className="w-full bg-[#0f1419] py-16 px-3 md:px-12">
      <div className="max-w-4xl mx-auto flex flex-col items-center text-center">
        {/* Northern Data Logo */}
        <div className="mb-8">
          <svg 
            className="h-12 md:h-16 w-auto" 
            viewBox="0 0 200 60" 
            fill="none"
          >
            {/* Northern Data Logo - simplified representation */}
            <rect x="10" y="15" width="4" height="30" fill="white"/>
            <rect x="16" y="18" width="4" height="27" fill="white"/>
            <rect x="22" y="12" width="4" height="33" fill="white"/>
            <rect x="28" y="20" width="4" height="25" fill="white"/>
            <rect x="34" y="10" width="4" height="35" fill="white"/>
            
            <text x="50" y="32" fill="white" fontSize="18" fontWeight="600" fontFamily="Arial, sans-serif">
              NORTHERN
            </text>
            <text x="50" y="48" fill="white" fontSize="14" fontFamily="Arial, sans-serif">
              DATA
            </text>
          </svg>
        </div>

        {/* Testimonial Quote */}
        <blockquote className="text-white text-2xl md:text-3xl lg:text-4xl font-light mb-6 leading-snug max-w-4xl">
          "With Brex, we have one platform where we can pay bills, manage expenses, and set up cards for our entire team."
        </blockquote>
        
        {/* Attribution */}
        <div className="text-[#bfc6ce] text-base md:text-lg mb-20">
          — <span className="underline hover:text-[#ff6600] transition-colors">Mark Salvioli</span>, Senior Manager US Finance
        </div>

        {/* Section Heading */}
        <h2 className="text-white text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
          Save hours with bill pay automation.
        </h2>
        
        {/* Section Subheading */}
        <p className="text-[#bfc6ce] text-base md:text-lg max-w-2xl">
          Designed with AI to free up your AP team for higher-impact work.
        </p>
      </div>
    </div>
  );
}
