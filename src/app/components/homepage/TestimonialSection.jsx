'use client'
import { useState } from 'react';

export default function TestimonialSection() {
  const [activeTab, setActiveTab] = useState('DoorDash');

  const testimonials = {
    DoorDash: {
      logo: (
        <svg className="h-8 w-auto" viewBox="0 0 1000 240" fill="none" aria-label="DoorDash logo">
          <path d="M200 120c0 66.274-53.726 120-120 120S-40 186.274-40 120s53.726-120 120-120 120 53.726 120 120z" fill="#FF3008"/>
          <path d="M300 60h80c44.183 0 80 35.817 80 80s-35.817 80-80 80h-80V60zm80 120c22.091 0 40-17.909 40-40s-17.909-40-40-40h-40v80h40z" fill="#FF3008"/>
          <path d="M500 60c44.183 0 80 35.817 80 80s-35.817 80-80 80-80-35.817-80-80 35.817-80 80-80zm0 120c22.091 0 40-17.909 40-40s-17.909-40-40-40-40 17.909-40 40 17.909 40 40 40z" fill="#FF3008"/>
          <path d="M620 60c44.183 0 80 35.817 80 80s-35.817 80-80 80-80-35.817-80-80 35.817-80 80-80zm0 120c22.091 0 40-17.909 40-40s-17.909-40-40-40-40 17.909-40 40 17.909 40 40 40z" fill="#FF3008"/>
          <path d="M740 60h40c44.183 0 80 35.817 80 80 0 17.673-5.726 33.974-15.404 47.081L880 220h-48l-30.596-32.919C785.726 193.974 770 200 740 200c-44.183 0-80-35.817-80-80s35.817-80 80-80zm0 120c22.091 0 40-17.909 40-40s-17.909-40-40-40-40 17.909-40 40 17.909 40 40 40z" fill="#FF3008"/>
        </svg>
      ),
      quote: "Brex has been a major gain for us in efficiency for T&E. It's easy for employees to understand where and how to spend.",
      author: "Mike Kim",
      title: "Vice President of Finance, DoorDash",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
    },
    SeatGeek: {
      logo: (
        <div className="text-2xl font-bold text-blue-600" aria-label="SeatGeek logo">SeatGeek</div>
      ),
      quote: "Brex has been a major gain for us in efficiency for T&E. It's easy for employees to understand where and how to spend.",
      author: "Mike Kim",
      title: "Vice President of Finance, SeatGeek",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
    },
    Lemonade: {
      logo: (
        <div className="text-2xl font-bold text-pink-500" aria-label="Lemonade logo">Lemonade</div>
      ),
      quote: "Brex has been a major gain for us in efficiency for T&E. It's easy for employees to understand where and how to spend.",
      author: "Mike Kim",
      title: "Vice President of Finance, Lemonade",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
    },
  };

  const currentTestimonial = testimonials[activeTab];

  return (
    <section className="w-full bg-gray-50 py-16 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Tabs */}
        <div className="flex justify-center mb-12 border-b border-gray-200">
            <div className="flex space-x-0 md:space-x-8">
                {Object.keys(testimonials).map((tab) => (
                <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className={`relative px-3 md:px-6 pb-3 text-lg font-medium transition-colors duration-200 ${
                    activeTab === tab
                        ? 'text-gray-900'
                        : 'text-gray-500 hover:text-gray-700'
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
              className="w-full h-64 lg:h-full object-cover rounded-xl"
              loading="lazy"
            />
          </div>

          {/* Text Content */}
          <div className="w-full lg:w-1/2 flex flex-col justify-center space-y-6 text-center lg:text-left">
            <div>{currentTestimonial.logo}</div>
            <blockquote className="text-xl text-gray-900 font-medium leading-relaxed">
              "{currentTestimonial.quote}"
            </blockquote>
            <p className="text-gray-600 font-medium">
              — <span className="underline">{currentTestimonial.author}</span>, {currentTestimonial.title}
            </p>
            <a
              href="#"
              className="text-orange-600 font-medium hover:text-orange-700 transition-colors duration-200 inline-flex items-center justify-center lg:justify-start"
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
