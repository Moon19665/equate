'use client';

import React,{ useState, useEffect, useRef } from 'react';

const contentSections = [
  {
    id: 1,
    title: "Onboard vendors with ease.",
    description: "Enter your vendor's email address and Brex will send a secure link where they can upload their payment details. Say goodbye to manual data entry and the risk of human error.",
    image: "https://brand.brex.com/transform/eae6d1c9-74c9-410c-8563-e056c2aa0f63/Bill-Pay-Onboard-Vendors?io=transform:fit,width:1200,height:794&quality=95"
  },
  {
    id: 2,
    title: "Automate approval workflows.",
    description: "Set up custom approval rules and let Brex handle the routing. Your team can focus on what matters while bills get approved automatically according to your policies.",
    image: "https://brand.brex.com/transform/f1bd7493-181a-40b1-babf-2f9d02bbd62f/Capture-invoice_bp?io=transform:fit,width:1200,height:1188&quality=95"
  },
  {
    id: 3,
    title: "Pay bills instantly.",
    description: "Generate virtual cards for vendors instantly and pay bills with maximum rewards. Track every payment in real-time with full visibility and control.",
    image: "https://brand.brex.com/transform/8ad38a1b-d454-44d6-8d22-ad6a54ef952f/Bill-Pay-Scroll-2?io=transform:fit,width:1200,height:1188&quality=95"
  },
  {
    id: 4,
    title: "Get detailed insights.",
    description: "Monitor spending patterns, track vendor relationships, and get AI-powered insights to optimize your bill payment process and save money.",
    image: "https://brand.brex.com/transform/0eab396f-366a-47b9-8a4f-f19a0dd76a55/Group-1073715921?io=transform:fit,width:1200,height:1065&quality=95"
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
        className={`sticky top-0 w-full h-screen flex items-center bg-[#0a1013] ${
          isScrollingNormally ? 'relative' : 'fixed'
        }`}
        style={{ zIndex: 10 }}
      >
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center px-4 py-12 gap-12 w-full">
          
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
                  <h2 className="text-white text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight">
                    {section.title}
                  </h2>
                  <p className="text-white/80 text-base md:text-lg max-w-lg leading-relaxed">
                    {section.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Image */}
          <div className="w-full lg:w-1/2 flex justify-center items-center">
            <div className="relative w-full max-w-md h-[400px] md:h-[500px] lg:h-[600px]">
              {contentSections.map((section, index) => (
                <img
                  key={section.id}
                  src={section.image}
                  alt={section.title}
                  className={`absolute inset-0 w-full h-full object-contain rounded-2xl shadow-xl transition-opacity duration-700 ease-in-out ${
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
