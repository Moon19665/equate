'use client';

import React,{ useState } from 'react';

const faqData = [
  {
    question: 'What is spend management?',
    answer: 'Spend management is the process of controlling and optimizing how your company spends money. It includes tracking expenses, setting budgets, managing approvals, and ensuring compliance with company policies across all types of business spending.'
  },
  {
    question: 'How to manage expenses?',
    answer: 'Effective expense management involves setting clear policies, using automated tools for tracking, requiring receipts and documentation, implementing approval workflows, and regularly reviewing spending patterns to identify areas for optimization.'
  },
  {
    question: 'What types of expenses does a business need to manage?',
    answer: 'Businesses need to manage various expense types including travel and entertainment, office supplies, software subscriptions, contractor payments, marketing expenses, equipment purchases, and employee reimbursements.'
  },
  {
    question: 'What merchants does Brex automate receipt collection for?',
    answer: 'Brex automatically collects receipts from thousands of merchants including major retailers, restaurants, gas stations, hotels, airlines, and online services. The system captures itemized receipts that are compliant with IRS and local tax requirements.'
  },
  {
    question: "What are Brex's enterprise spend management features?",
    answer: 'Brex offers comprehensive enterprise features including automated expense reporting, real-time spending controls, budget management, multi-level approval workflows, integration with major ERPs, global card programs, and AI-powered expense categorization.'
  },
  {
    question: "How can I improve my company's spend management process with Brex?",
    answer: 'Brex improves spend management through automation of manual processes, real-time visibility into spending, customizable approval workflows, automated receipt collection, intelligent expense categorization, and seamless integration with your existing accounting systems.'
  },
  {
    question: 'How can I set budgets and spending limits for employees with Brex cards?',
    answer: 'With Brex, you can set custom spending limits by employee, department, or card type. You can also create category-specific limits, merchant restrictions, and time-based controls. All limits are enforced in real-time to prevent overspending.'
  },
  {
    question: 'Does Brex integrate with my existing accounting software?',
    answer: 'Yes, Brex integrates with popular accounting software including QuickBooks, NetSuite, Sage Intacct, Xero, and many others. The integration automatically syncs transactions, expenses, and receipts to streamline your accounting processes.'
  }
];

export default function SpendManagementFAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="w-full bg-[#0f1419] py-16 ">
      <div className="max-w-7xl mx-auto px-3 md:px-12">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-12">FAQ</h2>
        
        <div className="space-y-0">
          {faqData.map((faq, index) => (
            <div
              key={index}
              className="border-b border-gray-700 last:border-b-0"
            >
              <button
                className="w-full flex justify-between items-center py-6 text-left group hover:bg-gray-800/30 transition-colors duration-200 px-4 rounded-lg"
                onClick={() => toggleFAQ(index)}
                aria-expanded={openIndex === index}
                aria-controls={`faq-answer-${index}`}
              >
                <span className="text-lg md:text-xl text-white font-medium pr-8 leading-tight">
                  {faq.question}
                </span>
                <svg
                  className={`w-6 h-6 text-gray-400 transform transition-transform duration-300 flex-shrink-0 ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
              
              <div
                id={`faq-answer-${index}`}
                className={`overflow-hidden transition-all duration-300 ease-in-out ${
                  openIndex === index 
                    ? 'max-h-96 opacity-100 pb-6' 
                    : 'max-h-0 opacity-0'
                }`}
              >
                <div className="px-4">
                  <p className="text-gray-300 text-base md:text-lg leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
