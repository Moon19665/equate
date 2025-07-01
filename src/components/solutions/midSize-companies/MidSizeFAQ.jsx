'use client'
import React, { useState } from "react";
import { FaChevronDown } from "react-icons/fa";

const faqs = [
  {
    question: "What does T&E mean?",
    answer:
      "T&E stands for Travel and Expense. It refers to the costs and processes associated with business travel and related expenses.",
  },
  {
    question: "What is T&E on Brex?",
    answer:
      "T&E on Brex refers to Brex's integrated solution for managing travel bookings and expense reporting in one unified platform.",
  },
  {
    question: "How does Brex compare to other travel management solutions?",
    answer:
      "Brex offers a modern, unified platform for travel and expense management, with automated policy enforcement, real-time tracking, and seamless user experience.",
  },
  {
    question: "Does Brex have a business travel management app?",
    answer:
      "Yes, Brex provides a mobile app for business travel management, allowing employees to book travel, manage expenses, and stay in policy on the go.",
  },
];

export default function MidSizeFAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const handleToggle = (idx) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section className="w-full max-w-6xl mx-auto px-4 py-16">
      <h2 className="text-3xl font-bold text-black mb-10">FAQ</h2>
      <div className="divide-y divide-gray-200 border-t border-b border-gray-200">
        {faqs.map((faq, idx) => (
          <div key={idx}>
            <button
              className="w-full flex justify-between items-center py-6 px-2 text-left focus:outline-none"
              onClick={() => handleToggle(idx)}
              aria-expanded={openIndex === idx}
              aria-controls={`faq-panel-${idx}`}
            >
              <span className="text-base md:text-lg text-black">{faq.question}</span>
              <FaChevronDown
                className={`ml-2 text-gray-500 transition-transform duration-200 ${
                  openIndex === idx ? "rotate-180" : ""
                }`}
                size={18}
              />
            </button>
            <div
              id={`faq-panel-${idx}`}
              className={`overflow-hidden transition-all duration-200 ${
                openIndex === idx ? "max-h-40 py-2 px-2" : "max-h-0"
              }`}
              aria-hidden={openIndex !== idx}
            >
              <p className="text-gray-700 text-base">{faq.answer}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
