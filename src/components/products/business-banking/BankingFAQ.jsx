'use client';

import { useState } from 'react';

const faqData = [
  {
    question: 'How is the Equate Business Account set up?',
    answer: 'Equate Business Accounts are set up online in minutes. You provide your business details, verify your identity, and connect your business bank account to get started.',
  },
  {
    question: 'How is the Equate business account different from a bank account?',
    answer: 'Equate is a financial technology company, not a bank. While you get many features of a traditional bank account, Equate offers modern tools, integrations, and automations for businesses.',
  },
  {
    question: 'Where is my cash actually stored?',
    answer: 'Your cash is stored with Equate’s partner banks and is FDIC-insured up to the applicable limits.',
  },
  {
    question: 'What are the benefits of expense management software?',
    answer: 'Expense management software automates expense tracking, improves compliance, and gives you real-time visibility and control over company spending.',
  },
  {
    question: 'Are my deposits FDIC-insured?',
    answer: 'Yes, deposits are FDIC-insured up to the standard limits through Equate’s partner banks.',
  },
  {
    question: 'What is required to open a business bank account?',
    answer: 'You’ll need basic business information, identification documents, and sometimes proof of address or incorporation documents.',
  },
  {
    question: "Can I apply for an account if I'm not physically in the United States or a United States resident?",
    answer: 'Equate primarily serves U.S.-based businesses, but eligibility may vary. Check Equate’s website for the most up-to-date requirements.',
  },
  {
    question: 'How much does a Equate business account cost?',
    answer: 'Equate business accounts have no monthly fees, no minimum balances, and no transaction fees for most standard activities.',
  },
  {
    question: "What makes Equate's approach to startup business bank accounts innovative?",
    answer: 'Equate combines banking, cards, and expense management in a single platform, with modern APIs and automation for startups.',
  },
  {
    question: 'What are the key factors to consider when choosing a startup bank?',
    answer: 'Consider fees, integrations, automation, support, and whether the bank offers features tailored for startups.',
  },
  {
    question: "How does Equate's startup bank account solution help maximize your cash flow?",
    answer: 'Equate offers high-yield treasury, fast payments, and spend controls to help you manage and optimize cash flow.',
  },
  {
    question: 'Why is Equate considered the best business banking solution for startups?',
    answer: 'Equate is built for startups, offering no personal guarantees, modern software, and seamless integrations.',
  },
  {
    question: 'How can you open a Equate business account in just minutes?',
    answer: 'Apply online, provide your business details, and get approved quickly with minimal paperwork.',
  },
  {
    question: 'Does Equate offer invoicing?',
    answer: 'Yes, Equate offers invoicing tools as part of its business banking platform.',
  },
];

export default function BankingFAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const handleToggle = (idx) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <div className="w-full max-w-[1920px] mx-auto py-16 px-3 md:px-12">
      <h2 className="text-3xl md:text-4xl font-bold mb-8">FAQ</h2>
      <div className="border-t border-gray-200">
        {faqData.map((item, idx) => (
          <div key={idx} className="border-b border-gray-200">
            <button
              className="w-full flex justify-between items-center py-5 text-left focus:outline-none"
              onClick={() => handleToggle(idx)}
              aria-expanded={openIndex === idx}
              aria-controls={`faq-desc-${idx}`}
            >
              <span className="text-base md:text-lg font-medium text-[#111]">{item.question}</span>
              <svg
                className={`w-5 h-5 text-gray-400 transition-transform duration-200 ${openIndex === idx ? 'rotate-180' : ''}`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            <div
              id={`faq-desc-${idx}`}
              className={`overflow-hidden transition-all duration-300 ease-in-out ${
                openIndex === idx ? 'max-h-40 opacity-100 pb-4' : 'max-h-0 opacity-0'
              }`}
            >
              <p className="text-[14px] text-[#444] pr-8">{item.answer}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
