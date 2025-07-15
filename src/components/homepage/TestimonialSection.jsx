"use client";
import { useState } from "react";

export default function TestimonialSection() {
  const [activeTab, setActiveTab] = useState("DoorDash");

  const testimonials = {
    DoorDash: {
      logo: (
        <img
          className="h-16 w-auto"
          src="/assets/homepage-images/odoor.webp"
          alt="DoorDash logo"
        />
      ),
      quote:
        "Equate has been a major gain for us in efficiency for T&E. It's easy for employees to understand where and how to spend.",
      author: "Mike Kim",
      title: "Vice President of Finance, DoorDash",
      image:
        "/assets/homepage-images/door.webp",
    },

    SeatGeek: {
      logo: (
        <img
          className="h-16 w-auto"
          src="/assets/homepage-images/osea.webp"
          alt="SeekGate logo"
        />
      ),
      quote:
        "Equate has been a major gain for us in efficiency for T&E. It's easy for employees to understand where and how to spend.",
      author: "Mike Kim",
      title: "Vice President of Finance, SeatGeek",
      image:
        "/assets/homepage-images/sea.webp",
    },
    Lemonade: {
      logo: (
        <img
          className="h-16 w-auto"
          src="/assets/homepage-images/olemon.webp"
          alt="Lemonade"
        />
      ),
      quote:
        "Equate has been a major gain for us in efficiency for T&E. It's easy for employees to understand where and how to spend.",
      author: "Mike Kim",
      title: "Vice President of Finance, Lemonade",
      image:
        "/assets/homepage-images/lemon.webp",
    },
  };

  const currentTestimonial = testimonials[activeTab];

  return (
    <section className="max-w-[1920px] mx-auto bg-gray-50 py-16 px-3 md:px-12">
      <div className="max-w-8xl mx-auto">
        {/* Tabs */}
        <div className="flex justify-center mb-12 ">
          <div className="flex w-5xl items-center justify-between ">
            {Object.keys(testimonials).map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`relative px-3 md:px-6 pb-3 text-sm font-medium transition-colors duration-200 ${
                  activeTab === tab
                    ? "text-gray-900"
                    : "text-gray-500 hover:text-gray-700"
                }`}
                aria-selected={activeTab === tab}
                role="tab"
                type="button"
              >
                {tab}
                {activeTab === tab && (
                  <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-gray-900 rounded"></span>
                )}
              </button>
            ))}
          </div>
        </div>

        {/* Content */}
        <div className="flex flex-col lg:flex-row items-center gap-10">
          {/* Image */}
          <div className="w-full lg:w-1/2">
            <img
              src={currentTestimonial.image}
              alt={currentTestimonial.author}
              className="w-full h-64 lg:h-full object-contain rounded-xl"
              loading="lazy"
            />
          </div>

          {/* Text Content */}
          <div className="w-full lg:w-1/2 flex flex-col justify-center space-y-6 text-center lg:text-left">
            <div className="flex justify-center lg:justify-start">{currentTestimonial.logo}</div>
            <blockquote className="text-xl text-gray-900 font-medium leading-relaxed">
              "{currentTestimonial.quote}"
            </blockquote>
            <p className="text-gray-600 font-medium">
              — <span className="underline">{currentTestimonial.author}</span>,{" "}
              {currentTestimonial.title}
            </p>
            <a
              href="#"
              className="text-[#033175] font-medium hover:text-[#033175] transition-colors duration-200 inline-flex items-center justify-center lg:justify-start"
            >
              Read the case study
              <svg
                className="ml-2 w-4 h-4"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path d="M9 5l7 7-7 7" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
