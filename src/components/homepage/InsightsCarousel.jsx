'use client';

import { useRef, useState, useEffect } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const slides = [
  {
    image: 'https://brand.brex.com/transform/36d253e4-28a1-463f-be25-71b90ff2ca47/BB_navan_announcement_preview?io=transform:fit,width:2500,height:1313&quality=95',
    title: 'Reimagining global cards and travel management for the enterprise',
    description:
      'The CEOs of Equate and Navan discuss how their partnership unlocks 100% travel payment reconciliation for enterprise companies.',
    link: '#',
  },
  {
    image: 'https://brand.brex.com/transform/68331046-69a0-4ff3-9216-12bba5b2eb74/Article-Archive-Image?io=transform:fit,width:2500,height:1313&quality=95',
    title: '5 ways AI can accelerate expense management',
    description:
      'See how an AI expense assistant can make compliance effortless for employees and drive unprecedented efficiency across your org.',
    link: '#',
  },
  {
    image: 'https://brand.brex.com/transform/07e96561-a585-477b-b8cb-cf821f769013/WBR-preview?io=transform:fit,width:2500,height:1313&quality=95',
    title: 'The future of procurement is automated and integrated',
    description:
      'How modern companies approach procurement as part of a unified spend management system.',
    link: '#',
  },
  {
    image: 'https://brand.brex.com/transform/9f056b79-6503-48d2-9e73-9b8bda87c8f1/AI-Powered-Spend-Management?io=transform:fit,width:2500,height:1313&quality=95',
    title: 'Why finance leaders are embracing AI-powered spend management',
    description:
      'Some firms are using AI to increase control and ward off problems in finance and accounting. Are you?',
    link: '#',
    author: 'OnlyCFO',
    authorType: 'Guest Writer',
  },
  {
    image: 'https://brand.brex.com/transform/e27b96b7-efbd-45c6-ba37-652ab052920b/kurtis-hanni-previewimage?io=transform:fit,width:2500,height:1313&quality=95',
    title: 'AI, automation, and the future of accounting',
    description:
      'Will AI replace my accountants? Probably not, says this CFO, but look for accounting roles to become more specialized as AI and automation go into hyperdrive.',
    link: '#',
    author: 'Kurtis Hanni',
    authorType: 'Guest Writer',
  },
  {
    image: 'https://brand.brex.com/transform/f66f1df8-7c5f-4463-be7f-5cb3b37c8575/Respaid-webinar-preview?io=transform:fit,width:2500,height:1406&quality=95',
    title: 'How AI Can Increase Working Capital: Practical Tips and Strategies',
    description:
      'Top finance leaders from Equate, Respaid (YC), Redis, and Grammarly explore how GenAI is transforming working capital management.',
    link: '#',
  },
  {
    image: 'https://brand.brex.com/transform/c8391f4c-4b79-4b41-b8c2-3340ec225561/Controllers-Council-Webinar-Metadata-1?io=transform:fit,width:2500,height:1406&quality=95',
    title: 'Controller’s Council Webinar',
    description:
      'Equate Chief Accounting Officer explores how AI can automate manual tasks, deliver outputs for contract reviews and flux analysis, and free up time for growth.',
    link: '#',
    author: 'Erik Zhou',
    authorType: 'CAO, Equate',
  },
  {
    image: 'https://brand.brex.com/transform/ee86f106-0742-41a0-9f62-ab04632569e3/Cash-flow-article-preview?io=transform:fit,width:2500,height:1313&quality=95',
    title: 'Improve cash flow with Equate',
    description:
      'Want to improve your cash flow processes? Discover the Equate advantage and automate cash forecasting, fraud detection, and reporting today.',
    link: '#',
  },
  {
    image: 'https://brand.brex.com/transform/24a5eae0-f3d9-48c3-a166-96d4276439de/Grow-or-No-CFO-article-preview?io=transform:fit,width:2500,height:1313&quality=95',
    title: 'How top CFOs balance financial spend controls and growth',
    description:
      'Missing growth goals? Learn why your approach to financial spend controls might be the problem — and what to do about it.',
    link: '#',
  },
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
                        <span className="text-[#033175] font-semibold text-[14px]">{slide.authorType}</span>
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
