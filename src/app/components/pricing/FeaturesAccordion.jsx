import { useState } from "react";
import {
  FaRegFileAlt,
  FaRegCalendarCheck,
  FaGlobe,
  FaRegChartBar,
  FaPlug,
  FaShieldAlt,
  FaRegQuestionCircle,
} from "react-icons/fa";
import { MdOutlineBusinessCenter } from "react-icons/md";
import { RiBillLine } from "react-icons/ri";
import { HiOutlineChevronDown } from "react-icons/hi2";

const accordionData = [
  {
    label: "Expense management",
    icon: <FaRegFileAlt className="text-xl mr-3 shrink-0" />,
    content:
      "Manage all your expenses efficiently with real-time tracking, approval workflows, and policy enforcement.",
  },
  {
    label: "Equate business accounts",
    icon: <MdOutlineBusinessCenter className="text-xl mr-3 shrink-0" />,
    content:
      "Open and manage business accounts with seamless integrations and no hidden fees.",
  },
  {
    label: "Automated bill pay",
    icon: <RiBillLine className="text-xl mr-3 shrink-0" />,
    content:
      "Automate bill payments to save time and reduce errors with scheduled and recurring payments.",
  },
  {
    label: "Travel and events",
    icon: <FaRegCalendarCheck className="text-xl mr-3 shrink-0" />,
    content:
      "Book, manage, and track travel and events with built-in compliance and reporting.",
  },
  {
    label: "Local currency and multi-entity",
    icon: <FaGlobe className="text-xl mr-3 shrink-0" />,
    content:
      "Operate globally with support for multiple entities and currencies.",
  },
  {
    label: "Accounting automation",
    icon: <FaRegChartBar className="text-xl mr-3 shrink-0" />,
    content:
      "Automate accounting processes with integrations and real-time data sync.",
  },
  {
    label: "Integrations",
    icon: <FaPlug className="text-xl mr-3 shrink-0" />,
    content: "Connect with your favorite tools for seamless workflows.",
  },
  {
    label: "Security and access",
    icon: <FaShieldAlt className="text-xl mr-3 shrink-0" />,
    content:
      "Advanced security features to protect your business and control access.",
  },
  {
    label: "Best-in-class support",
    icon: <FaRegQuestionCircle className="text-xl mr-3 shrink-0" />,
    content:
      "Get expert help whenever you need it with our dedicated support team.",
  },
];

export default function FeaturesAccordion() {
  const [openIndex, setOpenIndex] = useState(null);

  const handleToggle = (idx) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <div className="bg-gray-100 py-8 px-2 sm:px-6 min-h-screen">
      <div className="max-w-7xl mx-auto">
        {accordionData.map((item, idx) => (
          <div key={item.label} className="border-b border-gray-200">
            <button
              className="w-full flex items-center justify-between py-4 px-2 sm:px-4 focus:outline-none transition-colors hover:bg-gray-200"
              onClick={() => handleToggle(idx)}
              aria-expanded={openIndex === idx}
            >
              <span className="flex items-center text-gray-800 font-medium text-base sm:text-lg">
                {item.icon}
                {item.label}
              </span>
              <HiOutlineChevronDown
                className={`text-2xl text-gray-400 transition-transform duration-300 ${
                  openIndex === idx ? "rotate-180" : ""
                }`}
              />
            </button>
            <div
              className={`overflow-hidden transition-all duration-300 ${
                openIndex === idx
                  ? "max-h-40 opacity-100 py-2 px-2 sm:px-4"
                  : "max-h-0 opacity-0 py-0 px-2 sm:px-4"
              }`}
              style={{
                transitionProperty: "max-height, opacity, padding",
              }}
            >
              <p className="text-gray-600 text-sm sm:text-base">{item.content}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
