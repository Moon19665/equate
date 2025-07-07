'use client';

import React,{ useState, useEffect, useRef } from 'react';

const contentSections = [
  {
    id: 1,
    title: "Onboard vendors with ease.",
    description: "Enter your vendor's email address and Brex will send a secure link where they can upload their payment details. Say goodbye to manual data entry and the risk of human error.",
    image: "/assets/bill-pay/bill-hero.png"
  },
  {
    id: 2,
    title: "Automate approval workflows.",
    description: "Set up custom approval rules and let Brex handle the routing. Your team can focus on what matters while bills get approved automatically according to your policies.",
    image: "/assets/bill-pay/amazon.png"
  },
  {
    id: 3,
    title: "Pay bills instantly.",
    description: "Generate virtual cards for vendors instantly and pay bills with maximum rewards. Track every payment in real-time with full visibility and control.",
    image: "/assets/bill-pay/policy.png"
  },
  {
    id: 4,
    title: "Get detailed insights.",
    description: "Monitor spending patterns, track vendor relationships, and get AI-powered insights to optimize your bill payment process and save money.",
    image: "/assets/bill-pay/payment.png"
  }
];

export default function ScrollFadeSection() {
  const [currentSection, setCurrentSection] = useState(0);
  const [isScrollingNormally, setIsScrollingNormally] = useState(false);
  const containerRef = useRef(null);
  const contentRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current || !contentRef.current) return;

      const containerRect = containerRef.current.getBoundingClientRect();
      const contentHeight = contentRef.current.scrollHeight;
      const viewportHeight = window.innerHeight;
      
      // Calculate scroll progress within the sticky section
      const scrollProgress = Math.max(0, -containerRect.top) / (contentHeight - viewportHeight);
      
      // Determine which section should be active based on scroll progress
      const sectionIndex = Math.min(
        Math.floor(scrollProgress * contentSections.length),
        contentSections.length - 1
      );

      setCurrentSection(sectionIndex);
      
      // Check if we should start normal scrolling (when we've seen all sections)
      const shouldScrollNormally = scrollProgress >= 0.95;
      setIsScrollingNormally(shouldScrollNormally);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial call

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div 
      ref={containerRef}
      className="relative"
      style={{ 
        height: `${contentSections.length * 100 + 100}vh`,
        background: '#0a1013'
      }}
    >
      {/* Sticky container */}
      <div 
        className={`sticky top-0 w-full h-screen flex items-center bg-[#fff] ${
          isScrollingNormally ? 'relative' : 'fixed'
        }`}
        style={{ zIndex: 10 }}
      >
        <div className="max-w-[1920px] mx-auto flex flex-col lg:flex-row items-center px-3 md:px-12 py-12  w-full">
          
          {/* Left: Content */}
          <div className="w-full lg:w-1/2 flex flex-col items-start">
            <div className="relative overflow-hidden min-h-[300px] w-full">
              {contentSections.map((section, index) => (
                <div
                  key={section.id}
                  className={`absolute inset-0 transition-all duration-700 ease-in-out transform ${
                    index === currentSection
                      ? 'opacity-100 translate-y-0'
                      : index < currentSection
                      ? 'opacity-0 -translate-y-8'
                      : 'opacity-0 translate-y-8'
                  }`}
                >
                  <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight">
                    {section.title}
                  </h2>
                  <p className="text-base md:text-lg max-w-lg leading-relaxed">
                    {section.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Image */}
          <div className="w-full lg:w-1/2 flex justify-center items-center ">
            <div className="relative w-full max-w-md h-[350px] rounded-xl   ">
              {contentSections.map((section, index) => (
                <img
                  key={section.id}
                  src={section.image}
                  alt={section.title}
                  className={`absolute inset-0 w-full h-full object-contain rounded-2xl transition-opacity duration-700 ease-in-out ${
                    index === currentSection ? 'opacity-100' : 'opacity-0'
                  }`}
                  draggable={false}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Hidden content ref for height calculation */}
      <div 
        ref={contentRef}
        className="absolute top-0 w-full pointer-events-none opacity-0"
        style={{ height: `${contentSections.length * 100}vh` }}
      />
    </div>
  );
}
