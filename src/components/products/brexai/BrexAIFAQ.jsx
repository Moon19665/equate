'use client';

import { useState } from 'react';
import { FaChevronDown } from 'react-icons/fa';

const faqData = [
  {
    question: "What is Brex AI?",
    answer: "Brex AI is an artificial intelligence system designed to automate and streamline financial processes, from expense management to accounting tasks. It helps businesses reduce manual work while increasing accuracy and compliance."
  },
  {
    question: "How is Brex using AI in finance?",
    answer: "Brex uses AI to automate expense categorization, receipt matching, policy compliance checking, anomaly detection, and to provide intelligent insights for financial decision-making. Our AI also powers features like automatic memo generation and smart expense routing."
  },
  {
    question: "Who is Brex AI designed for?",
    answer: "Brex AI is designed for finance teams, employees, and managers at growing businesses. It helps finance professionals automate routine tasks, enables employees to manage expenses effortlessly, and gives managers better visibility and control over spending."
  },
  {
    question: "Why use artificial intelligence in finance?",
    answer: "AI in finance reduces manual errors, speeds up processes, ensures compliance, and provides real-time insights. It allows finance teams to focus on strategic work instead of repetitive tasks, while improving accuracy and reducing costs."
  },
  {
    question: "Will AI replace accountants?",
    answer: "No, AI won't replace accountants but will augment their capabilities. AI handles routine tasks like data entry and categorization, freeing accountants to focus on analysis, strategy, and advisory work that requires human judgment and expertise."
  },
  {
    question: "How does Brex AI protect your privacy and data?",
    answer: "Brex AI follows strict security protocols and compliance standards. Your data is encrypted, never used to train third-party models, and processed according to enterprise-grade security practices. We maintain transparency about how AI works while protecting your sensitive information."
  }
];

export default function BrexAIFAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const handleToggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-[#0A0E14]  py-16 ">
      <div className="max-w-[1920px] px-3 md:px-12 mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-12">FAQ</h2>
        
        <div className="space-y-0">
          {faqData.map((item, index) => (
            <div key={index} className="border-b border-gray-700">
              <button
                className="w-full flex justify-between items-center py-6 text-left hover:bg-gray-800/30 transition-colors duration-200 px-2"
                onClick={() => handleToggle(index)}
                aria-expanded={openIndex === index}
                aria-controls={`faq-answer-${index}`}
              >
                <span className="text-white text-base md:text-lg font-medium pr-4">
                  {item.question}
                </span>
                <FaChevronDown
                  className={`text-white transition-transform duration-300 flex-shrink-0 ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                  size={16}
                  aria-hidden="true"
                />
              </button>
              
              <div
                id={`faq-answer-${index}`}
                className={`overflow-hidden transition-all duration-300 ease-in-out ${
                  openIndex === index 
                    ? 'max-h-96 opacity-100 pb-6' 
                    : 'max-h-0 opacity-0'
                }`}
              >
                <div className="px-2 text-gray-300 text-base md:text-lg leading-relaxed">
                  {item.answer}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
