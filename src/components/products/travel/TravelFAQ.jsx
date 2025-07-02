'use client';

import React, { useState } from 'react';
import { FiChevronDown } from 'react-icons/fi';

const faqs = [
  {
    question: "What is Brex travel?",
    answer: "Brex travel is a unified travel and expense management platform that lets you book, manage, and track business travel with built-in policy controls and real-time visibility."
  },
  {
    question: "How does Brex ensure compliance with corporate travel policies?",
    answer: "Brex enforces travel policies automatically at the time of booking, so employees can only book within approved guidelines. Custom policies, approvals, and spend limits are all built in."
  },
  {
    question: "Can employees and administrators track corporate travel expenses in real-time?",
    answer: "Yes, both employees and admins have real-time visibility into travel bookings and expenses, allowing for better budget tracking and compliance."
  },
  {
    question: "Can Brex be used to book group travel events?",
    answer: "Yes, Brex supports group travel bookings, including offsites and events, with shared budgets, RSVP tracking, and attendee management."
  },
  {
    question: "What kind of customer support does Brex offer for travel?",
    answer: "Brex offers 24/7 live support for travelers and admins by chat, phone, and email, so you’re never stranded."
  },
  {
    question: "How can Brex help save money on corporate travel?",
    answer: "Brex aggregates global inventory for the best rates, enforces policies to prevent out-of-policy spend, and provides insights to optimize travel budgets."
  },
  {
    question: "Does Brex have a corporate travel and expense management app?",
    answer: "Yes, Brex offers a mobile app and web platform for booking, managing, and reconciling all travel and expenses in one place."
  }
];

export default function TravelFAQ() {
  const [openIdx, setOpenIdx] = useState(null);

  const handleToggle = idx => {
    setOpenIdx(idx === openIdx ? null : idx);
  };

  return (
    <div className="w-full bg-black py-14 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-white text-2xl sm:text-3xl md:text-4xl font-bold mb-10">FAQ</h2>
        <div className="divide-y divide-[#23272d]">
          {faqs.map((faq, idx) => (
            <div key={idx}>
              <button
                className="w-full flex justify-between items-center py-5 text-left transition-colors duration-200 hover:bg-[#22262c] focus:outline-none"
                onClick={() => handleToggle(idx)}
                aria-expanded={openIdx === idx}
                aria-controls={`faq-content-${idx}`}
              >
                <span className="text-white text-base sm:text-lg font-medium">{faq.question}</span>
                <FiChevronDown
                  className={`w-5 h-5 text-[#bfc6ce] transition-transform duration-300 ${
                    openIdx === idx ? 'rotate-180' : ''
                  }`}
                />
              </button>
              <div
                id={`faq-content-${idx}`}
                className={`overflow-hidden transition-all duration-300 ease-in-out ${
                  openIdx === idx
                    ? 'max-h-40 opacity-100 py-2'
                    : 'max-h-0 opacity-0 py-0'
                }`}
              >
                <p className="text-[#bfc6ce] text-base sm:text-lg px-2 pb-2">{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
