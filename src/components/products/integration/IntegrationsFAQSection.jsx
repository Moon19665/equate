'use client';

import { useState } from "react";
import { FiChevronDown } from "react-icons/fi";

export default function IntegrationsFAQSection() {
  const [open, setOpen] = useState(null);

  const faqData = [
    {
      question: "What are Brex integrations?",
      answer: "Brex integrations connect your financial workflows with the tools you already use, automating expense management, accounting, and reporting processes to save time and reduce manual work."
    },
    {
      question: "What ERPs does Brex connect to?",
      answer: "Brex integrates with major ERP systems including NetSuite, SAP, Oracle, Microsoft Dynamics, and other enterprise resource planning platforms to streamline your financial operations."
    },
    {
      question: "What accounting solutions does Brex sync with?",
      answer: "Brex syncs with popular accounting software like QuickBooks Online, QuickBooks Desktop, Xero, Sage Intacct, and other accounting platforms to automatically sync transactions and expenses."
    },
    {
      question: "What HRIS systems does Brex integrate with?",
      answer: "Brex integrates with HRIS platforms including BambooHR, Workday, ADP, Gusto, and other human resources systems to streamline employee expense management and reimbursements."
    },
    {
      question: "What other tools does Brex integrate with?",
      answer: "Brex connects with productivity tools like Slack, Microsoft Teams, Zapier, expense management platforms, travel booking systems, and various business applications through our API and webhook integrations."
    },
    {
      question: "Does Brex sync with payroll platforms?",
      answer: "Yes, Brex integrates with major payroll platforms including ADP, Paychex, Gusto, and other payroll systems to automatically sync employee data and streamline expense reimbursements."
    }
  ];

  const handleToggle = (idx) => {
    setOpen(open === idx ? null : idx);
  };

  return (
    <section className="w-full  bg-black py-16 px-4">
      <div className="max-w-[1920px] px-3 md:px-12 mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-12">FAQ</h2>
        <div className="divide-y divide-gray-800 border-t border-b border-gray-800">
          {faqData.map((item, idx) => (
            <div key={idx}>
              <button
                className="w-full flex items-center justify-between py-6 px-2 text-left focus:outline-none"
                onClick={() => handleToggle(idx)}
                aria-expanded={open === idx}
                aria-controls={`faq-answer-${idx}`}
              >
                <span className="text-white text-base md:text-lg">{item.question}</span>
                <FiChevronDown
                  className={`w-6 h-6 text-gray-400 transition-transform duration-200 ${open === idx ? "rotate-180" : ""}`}
                />
              </button>
              <div
                id={`faq-answer-${idx}`}
                className={`overflow-hidden transition-all duration-300 ease-in-out ${
                  open === idx ? "max-h-40 opacity-100 py-2" : "max-h-0 opacity-0 py-0"
                }`}
                style={{ color: "#b3b3b3" }}
              >
                <div className="text-sm md:text-base">{item.answer}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
