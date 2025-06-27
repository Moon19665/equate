'use client';

import { useState } from 'react';

export default function FAQSection() {
  const [openItems, setOpenItems] = useState([]);

  const faqData = [
    {
      question: "What is a corporate credit card?",
      answer: "A corporate credit card is a payment card issued to a business that allows employees to make purchases on behalf of the company. It helps businesses manage expenses, track spending, and separate personal and business transactions."
    },
    {
      question: "Who is eligible for a Equate corporate credit card?",
      answer: "Equate corporate credit cards are available to startups, growing businesses, and established companies. Eligibility is based on your business profile, revenue, and other factors rather than personal credit scores."
    },
    {
      question: "Does the Brex corporate credit card have rewards?",
      answer: "Yes, Brex cards offer rewards and points that can be redeemed for various benefits including travel, office supplies, and other business expenses. The rewards are designed specifically for business spending categories."
    },
    {
      question: "Does the Brex corporate credit card have any fees?",
      answer: "Brex corporate credit cards have no annual fees, foreign transaction fees, or hidden charges. You only pay interest if you carry a balance, and there are no fees for employee cards or expense management features."
    },
    {
      question: "What currencies does the Brex corporate credit card support?",
      answer: "Brex corporate credit cards support multiple currencies and can be issued in local currencies for international operations. This helps businesses avoid foreign exchange fees and simplify global expense management."
    },
    {
      question: "How do I apply for a Brex corporate credit card?",
      answer: "You can apply online through the Brex website. The application process is streamlined and typically requires basic business information, bank account details, and verification of your business operations."
    },
    {
      question: "How long does it take to get approved for a Brex corporate credit card?",
      answer: "Brex offers fast approval times, often within minutes to a few hours. Once approved, physical cards are typically shipped within 1-2 business days, while virtual cards can be used immediately."
    },
    {
      question: "Is Brex the best corporate credit card for startups and growing businesses?",
      answer: "Brex is designed specifically for startups and growing businesses, offering features like no personal guarantees, higher credit limits based on cash flow, and built-in expense management tools that traditional banks often don't provide."
    },
    {
      question: "Are Brex cards good business credit cards for an LLC?",
      answer: "Yes, Brex cards work well for LLCs and other business structures. They don't require personal guarantees and offer business-focused features like automated expense categorization and integration with accounting software."
    },
    {
      question: "How do Brex corporate credit cards stand out from the competition?",
      answer: "Brex stands out with no personal guarantees, higher credit limits for startups, built-in expense management, real-time spending controls, automated receipt collection, and rewards optimized for business spending."
    },
    {
      question: "How does the Brex corporate card streamline spend management for businesses?",
      answer: "Brex cards include built-in expense management with automatic receipt collection, real-time categorization, spending controls, approval workflows, and integration with popular accounting software, eliminating manual expense reporting."
    }
  ];

  const toggleItem = (index) => {
    setOpenItems(prev => 
      prev.includes(index) 
        ? prev.filter(item => item !== index)
        : [...prev, index]
    );
  };

  return (
    <div className="w-full bg-[#0a1018] py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-white mb-12">FAQ</h2>
        
        <div className="space-y-0">
          {faqData.map((faq, index) => (
            <div key={index} className="border-b border-gray-700">
              <button
                onClick={() => toggleItem(index)}
                className="w-full flex justify-between items-center py-6 text-left hover:bg-gray-800/30 transition-colors duration-200"
              >
                <span className="text-lg font-medium text-white pr-4">
                  {faq.question}
                </span>
                <svg
                  className={`w-5 h-5 text-gray-400 transform transition-transform duration-200 flex-shrink-0 ${
                    openItems.includes(index) ? 'rotate-180' : ''
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
                className={`overflow-hidden transition-all duration-300 ease-in-out ${
                  openItems.includes(index) 
                    ? 'max-h-96 opacity-100 pb-6' 
                    : 'max-h-0 opacity-0'
                }`}
              >
                <p className="text-[#b2b8be] text-sm leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
