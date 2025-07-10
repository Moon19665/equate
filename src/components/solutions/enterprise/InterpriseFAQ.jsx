'use client';

import { useState } from 'react';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';

const faqs = [
  {
    question: 'What is Equate global?',
    answer: 'Equate Global is a comprehensive financial platform that helps international teams manage spend, accounting, and compliance in one place.',
  },
  {
    question: 'What makes Equate global different?',
    answer: 'Equate Global provides centralized control, local currency support, and compliance-ready infrastructure across countries and entities.',
  },
  {
    question: 'Does Equate allow for multi entity accounting?',
    answer: 'Yes, Equate supports multi-entity and multi-currency accounting with integrated controls for each division or location.',
  },
  {
    question: 'How can Equate help with global travel and expense management?',
    answer: 'Equate helps manage travel and expenses globally with real-time tracking, automatic reconciliation, and integration with major travel partners.',
  },
];

export default function InterpriseFAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="w-full py-16 bg-white">
      <div className="max-w-[1920] mx-auto px-3 md:px-12">
        <h2 className="text-3xl font-bold text-black mb-10">FAQ</h2>
        <div className="divide-y divide-gray-200  ">
          {faqs.map((faq, index) => (
            <div key={index} className="group">
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full text-left py-5 flex items-center justify-between hover:bg-gray-50 transition"
              >
                <span className="text-black font-medium text-[16px]">
                  {faq.question}
                </span>
                <span className="text-gray-500">
                  {openIndex === index ? <FaChevronUp /> : <FaChevronDown />}
                </span>
              </button>
              {openIndex === index && (
                <div className="px-2 pb-6 text-gray-700 text-[15px] leading-relaxed">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
