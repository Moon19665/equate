'use client';

import { useState } from 'react';
import { FaChevronDown } from 'react-icons/fa';

const faqData = [
  {
    question: "What is Equate accounting?",
    answer: "Equate accounting is a modern, automated approach to managing your company's finances, designed to streamline processes and reduce manual work."
  },
  {
    question: "What is accounting automation?",
    answer: "Accounting automation uses software and AI to handle repetitive financial tasks, reducing errors and freeing up your team's time for more strategic work."
  },
  {
    question: "How can accounting automation software benefit my business?",
    answer: "It can save time, reduce errors, improve compliance, and give you real-time insights into your company's financial health."
  },
  {
    question: "What ERPs does Equate connect to?",
    answer: "Equate connects to leading ERPs including NetSuite, QuickBooks, Sage Intacct, Xero, and more."
  },
  {
    question: "How is the Equate accounting process different from a typical close?",
    answer: "Equate automates data collection, categorization, and reconciliation, allowing you to close your books faster and with greater accuracy."
  },
  {
    question: "How can accounting automation speed up a month-end close?",
    answer: "By automating transaction matching, receipt collection, and reporting, month-end close can be reduced from weeks to days or even hours."
  },
  {
    question: "What accounting solutions does Equate sync with?",
    answer: "Equate syncs with a wide range of accounting solutions and ERPs, including NetSuite, QuickBooks, Sage Intacct, and Xero."
  }
];

export default function AutomationFAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const handleToggle = (idx) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section className="bg-black  py-16 px-4">
      <div className="max-w-[1920px] mx-auto px-3 md:px-12">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-12">FAQ</h2>
        <div className="divide-y divide-gray-700">
          {faqData.map((item, idx) => (
            <div key={idx}>
              <button
                className="w-full flex justify-between items-center py-5 text-left text-base md:text-lg font-medium text-gray-100 hover:text-white focus:outline-none transition-colors"
                onClick={() => handleToggle(idx)}
                aria-expanded={openIndex === idx}
                aria-controls={`faq-answer-${idx}`}
              >
                <span>{item.question}</span>
                <FaChevronDown
                  className={`ml-2 transition-transform duration-300 ${
                    openIndex === idx ? 'rotate-180' : ''
                  }`}
                  aria-hidden="true"
                />
              </button>
              <div
                id={`faq-answer-${idx}`}
                className={`overflow-hidden transition-all duration-300 text-gray-400 text-base md:text-lg ${
                  openIndex === idx ? 'max-h-40 py-2' : 'max-h-0'
                }`}
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
