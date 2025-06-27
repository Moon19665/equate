'use client';

import { useState, useEffect, useRef } from 'react';

export default function AccountingAutomationSlider() {
  const testimonials = [
    {
      logo: "https://logo.clearbit.com/signifyd.com",
      company: "Signifyd",
      quote: "With Equate, the accounting team is saving 5 hours per month on receipt tracking and 10 hours on month-end reconciliation.",
      author: "Ty Barton",
      position: "Accounting Manager, Signifyd",
      readMoreLink: "#"
    },
    {
      logo: "https://logo.clearbit.com/stripe.com",
      company: "Stripe",
      quote: "Equate has transformed our expense management process. We've reduced our monthly close time by 60% and eliminated manual receipt chasing entirely.",
      author: "Sarah Chen",
      position: "Senior Controller, Stripe",
      readMoreLink: "#"
    },
    {
      logo: "https://logo.clearbit.com/airbnb.com",
      company: "Airbnb",
      quote: "The AI-powered categorization and real-time expense tracking have given us unprecedented visibility into our spending across all departments.",
      author: "Michael Rodriguez",
      position: "VP of Finance, Airbnb",
      readMoreLink: "#"
    },
    {
      logo: "https://logo.clearbit.com/shopify.com",
      company: "Shopify",
      quote: "Implementing Equate reduced our accounting overhead by 40%. The automated workflows and integrations are game-changing for scaling businesses.",
      author: "Emily Watson",
      position: "CFO, Shopify",
      readMoreLink: "#"
    },
    {
      logo: "https://logo.clearbit.com/slack.com",
      company: "Slack",
      quote: "Our team loves how Equate simplifies expense reporting. What used to take hours now takes minutes, and accuracy has improved dramatically.",
      author: "David Kim",
      position: "Finance Director, Slack",
      readMoreLink: "#"
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const timeoutRef = useRef(null);

  // Auto advance every 5 seconds
  useEffect(() => {
    resetTimeout();
    timeoutRef.current = setTimeout(() => {
      goToNext();
    }, 5000);

    return () => {
      resetTimeout();
    };
  }, [currentIndex]);

  const resetTimeout = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const goToPrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
    resetTimeout();
  };

  return (
    <section className="bg-[#F3F3F7] py-12 md:py-16 lg:py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Heading */}
        <h2 className="text-center text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-10 md:mb-12 max-w-4xl mx-auto">
          Trusted by controllers and accounting professionals.
        </h2>

        {/* Slider */}
        <div className="relative">
          {/* Slides */}
          <div className="relative h-72 sm:h-80 md:h-96 lg:h-96 overflow-hidden">
            {testimonials.map((item, idx) => (
              <div
                key={idx}
                className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                  idx === currentIndex ? 'opacity-100 z-10' : 'opacity-0 z-0 pointer-events-none'
                } flex flex-col items-center justify-center px-2 sm:px-6 text-center`}
              >
                {item.logo && (
                  <img
                    src={item.logo}
                    alt={`${item.company} logo`}
                    className="h-10 sm:h-12 md:h-16 mb-4 sm:mb-6 object-contain"
                    onError={(e) => {
                      e.target.style.display = 'none';
                    }}
                  />
                )}
                <blockquote className="text-base sm:text-lg md:text-xl lg:text-2xl font-semibold text-gray-800 max-w-2xl md:max-w-3xl mb-4 sm:mb-6 leading-relaxed">
                  “{item.quote}”
                </blockquote>
                <cite className="block text-gray-600 text-sm sm:text-base md:text-lg mb-2">
                  <strong>{item.author}</strong>, {item.position}
                </cite>
                <a
                  href={item.readMoreLink}
                  className="mt-2 inline-flex items-center text-orange-500 hover:text-orange-600 font-semibold transition-colors"
                >
                  Read more
                  <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                  </svg>
                </a>
              </div>
            ))}
          </div>
        </div>

        {/* Dots Navigation */}
        <div className="flex justify-center mt-8 space-x-3">
          {testimonials.map((_, idx) => (
            <button
              key={idx}
              onClick={() => goToSlide(idx)}
              aria-label={`Go to testimonial ${idx + 1}`}
              className={`w-3 h-3 rounded-full transition-transform duration-300 ${
                idx === currentIndex ? 'bg-orange-500 scale-125' : 'bg-gray-300 hover:bg-gray-400'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
