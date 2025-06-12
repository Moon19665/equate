'use client';

import { useRef, useState, useEffect } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const slides = [
  {
    image: 'https://images.ctfassets.net/gkyt4bl1j2fs/6I4Z7l9Zb5X7wWwQj8uU9e/4c7a7e9c5d7e5e8d6f7a8b9c0d1e2f3a/ai-expense-management.png',
    title: '5 ways AI can accelerate expense management',
    description:
      'See how an AI expense assistant can make compliance effortless for employees and drive unprecedented efficiency across your org.',
    link: '#',
  },
  {
    image: 'https://images.ctfassets.net/gkyt4bl1j2fs/1Zp8l9Zb5X7wWwQj8uU9e/4c7a7e9c5d7e5e8d6f7a8b9c0d1e2f3a/procurement-automation.png',
    title: 'The future of procurement is automated and integrated',
    description:
      'How modern companies approach procurement as part of a unified spend management system.',
    link: '#',
  },
  {
    image: 'https://images.ctfassets.net/gkyt4bl1j2fs/2Zp8l9Zb5X7wWwQj8uU9e/4c7a7e9c5d7e5e8d6f7a8b9c0d1e2f3a/onlycfo.png',
    title: 'Why finance leaders are embracing AI-powered spend management',
    description:
      'Some firms are using AI to increase control and ward off problems in finance and accounting. Are you?',
    link: '#',
    author: 'OnlyCFO',
    authorType: 'Guest Writer',
  },
  {
    image: 'https://images.ctfassets.net/gkyt4bl1j2fs/3Zp8l9Zb5X7wWwQj8uU9e/4c7a7e9c5d7e5e8d6f7a8b9c0d1e2f3a/kurtis-hanni.png',
    title: 'AI, automation, and the future of accounting',
    description:
      'Will AI replace my accountants? Probably not, says this CFO, but look for accounting roles to become more specialized as AI and automation go into hyperdrive.',
    link: '#',
    author: 'Kurtis Hanni',
    authorType: 'Guest Writer',
  },
  {
    image: 'https://images.ctfassets.net/gkyt4bl1j2fs/3Zp8l9Zb5X7wWwQj8uU9e/4c7a7e9c5d7e5e8d6f7a8b9c0d1e2f3a/kurtis-hanni.png',
    title: 'AI, automation, and the future of accounting',
    description:
      'Will AI replace my accountants? Probably not, says this CFO, but look for accounting roles to become more specialized as AI and automation go into hyperdrive.',
    link: '#',
    author: 'Kurtis Hanni',
    authorType: 'Guest Writer',
  },
  // Add more slides as needed...
];

export default function InsightsCarousel() {
  const scrollRef = useRef(null);
  const [current, setCurrent] = useState(0);
  const [slidesPerView, setSlidesPerView] = useState(1);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    function handleResize() {
      const width = window.innerWidth;
      setSlidesPerView(width >= 1280 ? 4 : width >= 768 ? 2 : 1);
    }
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Prevent hydration errors
  if (!mounted) return null;

  const maxIndex = Math.max(0, slides.length - slidesPerView);

  const scrollToIndex = (idx) => {
    setCurrent(idx);
    if (scrollRef.current) {
      const slide = scrollRef.current.querySelectorAll('.carousel-slide')[idx];
      if (slide) {
        scrollRef.current.scrollTo({
          left: slide.offsetLeft,
          behavior: 'smooth',
        });
      }
    }
  };

  const handlePrev = () => {
    if (current > 0) scrollToIndex(current - 1);
  };

  const handleNext = () => {
    if (current < maxIndex) scrollToIndex(current + 1);
  };

  return (
    <section className="w-full bg-white py-10">
      <div className="max-w-7xl mx-auto px-4">
        {/* Heading */}
        <h2 className="text-3xl md:text-5xl font-bold text-center mb-12 text-black">
          Insights on AI-powered spend management.
        </h2>

        {/* Carousel */}
        <div className="relative">
          {/* Slides */}
          <div
            ref={scrollRef}
            className="flex gap-8 overflow-x-auto scrollbar-hide scroll-smooth pb-4 "
            style={{ scrollBehavior: 'smooth' }}
          >
            {slides.map((slide, idx) => (
              <a
                key={idx}
                href={slide.link}
                className="carousel-slide flex-shrink-0 w-[320px] md:w-[340px] xl:w-[360px] group"
                tabIndex={0}
                style={{ outline: 'none' }}
              >
                <div className="rounded-xl overflow-hidden bg-white border border-gray-100">
                  <div className="h-44 w-full bg-gray-100">
                    <img
                      src={slide.image}
                      alt={slide.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="pt-5 px-2 pb-2">
                    <h3 className="font-semibold text-black mb-2 leading-snug text-[14px]">
                      {slide.title}
                    </h3>
                    <p className="text-gray-700 mb-2 leading-normal text-[14px]">
                      {slide.description}
                    </p>
                    {slide.author && (
                      <div className="mt-3">
                        <span className="text-orange-600 font-semibold text-[14px]">{slide.authorType}</span>
                        <span className="block font-bold text-black text-[14px]">{slide.author}</span>
                      </div>
                    )}
                  </div>
                </div>
              </a>
            ))}
          </div>

          {/* Navigation & Progress */}
          <div className="flex items-center  gap-4 absolute left-0 -bottom-8 z-10 w-full px-2">
            {/* Left Arrow */}
            <button
              onClick={handlePrev}
              disabled={current === 0}
              className={`w-10 h-10 flex items-center justify-center rounded-full bg-gray-100 border border-gray-200 text-black transition hover:bg-gray-200 disabled:opacity-40 disabled:cursor-not-allowed`}
              aria-label="Previous"
            >
              <FaChevronLeft size={18} />
            </button>
            {/* Right Arrow */}
            <button
              onClick={handleNext}
              disabled={current >= maxIndex}
              className={`w-10 h-10 flex items-center justify-center rounded-full bg-gray-100 border border-gray-200 text-black transition hover:bg-gray-200 disabled:opacity-40 disabled:cursor-not-allowed`}
              aria-label="Next"
            >
              <FaChevronRight size={18} />
            </button>
           
          </div>
        </div>
      </div>
    </section>
  );
}
