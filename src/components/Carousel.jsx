'use client';

import { useRef, useState, useEffect } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';



export default function Carousel({ slides, title }) {
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

  const handlePrev = () => current > 0 && scrollToIndex(current - 1);
  const handleNext = () => current < maxIndex && scrollToIndex(current + 1);

  if (!mounted) return null;

  return (
    <section className="w-full bg-white py-10">
      <div className="  max-w-[1920px] mx-auto px-3 md:px-12 ">
        {title && (
          <h2 className="text-3xl md:text-5xl font-bold text-center mb-12 text-black">
            {title}
          </h2>
        )}

        <div className="relative">
          <div
            ref={scrollRef}
            className="flex gap-8 overflow-x-auto scrollbar-hide scroll-smooth pb-4"
            style={{ scrollBehavior: 'smooth' }}
          >
            {slides.map((slide, idx) => (
              <a
                key={idx}
                href={slide.link}
                className="carousel-slide flex-shrink-0 w-[320px] md:w-[340px] xl:w-[360px] group"
                tabIndex={0}
              >
                <div className="rounded-xl overflow-hidden bg-white border border-gray-100">
                  <div className="h-44 w-full bg-gray-100">
                    <img
                      src={slide.image}
                      alt={slide.title}
                      className="w-full h-full object-cover"
                      loading="lazy"
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
                        <span className="text-[#033175] font-semibold text-[14px]">
                          {slide.authorType}
                        </span>
                        <span className="block font-bold text-black text-[14px]">
                          {slide.author}
                        </span>
                      </div>
                    )}
                  </div>
                </div>
              </a>
            ))}
          </div>

          <div className="flex items-center gap-4 absolute left-0 -bottom-8 z-10 w-full px-2">
            <button
              onClick={handlePrev}
              disabled={current === 0}
              className={`w-10 h-10 flex items-center justify-center rounded-full bg-gray-100 border border-gray-200 text-black transition hover:bg-gray-200 disabled:opacity-40 disabled:cursor-not-allowed`}
              aria-label="Previous"
            >
              <FaChevronLeft size={18} />
            </button>
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
