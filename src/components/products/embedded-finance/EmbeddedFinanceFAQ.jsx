'use client';

import { useState } from 'react';
import { FaChevronDown } from 'react-icons/fa';

const faqData = [
  {
    question: "What is embedded finance?",
    answer: "Embedded finance is the integration of financial services or tools—like payments, lending, or insurance—directly into the products or services of non-financial companies."
  },
  {
    question: "What are examples of embedded finance?",
    answer: "Examples include ride-sharing apps offering in-app payments, e-commerce sites providing buy-now-pay-later options, or SaaS platforms with integrated expense cards."
  },
  {
    question: "How does embedded finance work?",
    answer: "It works by partnering with financial service providers to offer seamless financial products within a non-financial company's user experience, usually via APIs or SDKs."
  },
  {
    question: "What is the main advantage of embedded finance?",
    answer: "The main advantage is a better, more seamless customer experience—users get financial services right where they need them, without leaving your platform."
  },
  {
    question: "What types of companies use embedded finance?",
    answer: "E-commerce, SaaS, marketplaces, gig platforms, and many other non-financial businesses use embedded finance to add value and new revenue streams."
  },
  {
    question: "What problems does embedded finance solve?",
    answer: "It removes friction in payments, lending, and insurance, creates new business models, and increases customer engagement and retention."
  },
  {
    question: "Does Brex offer embedded finance?",
    answer: "Yes, Brex offers embedded finance solutions so partners can integrate cards and payments directly into their products."
  },
  {
    question: "How do I implement embedded finance with Brex?",
    answer: "You can partner with Brex and use their APIs and developer tools to embed financial services into your platform."
  }
];

export default function EmbeddedFinanceFAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const handleToggle = (idx) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section className="bg-white py-16 px-2 sm:px-4">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-black mb-10 sm:mb-12">
          FAQ
        </h2>
        <div className="divide-y divide-gray-200 border-t border-b border-gray-200">
          {faqData.map((item, idx) => (
            <div key={idx}>
              <button
                className="w-full flex justify-between items-center py-5 text-left text-base sm:text-lg font-medium text-black hover:text-orange-600 focus:outline-none transition-colors"
                onClick={() => handleToggle(idx)}
                aria-expanded={openIndex === idx}
                aria-controls={`faq-answer-${idx}`}
              >
                <span>{item.question}</span>
                <FaChevronDown
                  className={`ml-2 transition-transform duration-300 ${
                    openIndex === idx ? 'rotate-180 text-orange-600' : ''
                  }`}
                  aria-hidden="true"
                />
              </button>
              <div
                id={`faq-answer-${idx}`}
                className={`overflow-hidden transition-all duration-300 text-gray-600 text-base sm:text-lg ${
                  openIndex === idx ? 'max-h-40 py-2' : 'max-h-0'
                }`}
                style={{}}
              >
                <div className="pr-8">{item.answer}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
