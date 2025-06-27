"use client";
import Link from "next/link";
import { useState } from "react";
import {
  FiCreditCard,
  FiBriefcase,
  FiBarChart2,
  FiGlobe,
  FiUsers,
  FiLayers,
  FiHelpCircle,
  FiInfo,
  FiPackage,
  FiVideo,
  FiCalendar,
  FiEdit,
  FiFileText,
  FiUser,
} from "react-icons/fi";
import {
  MdOutlinePayment,
  MdOutlineTravelExplore,
  MdOutlineIntegrationInstructions,
  MdOutlineAutoAwesome,
  MdOutlineAccountBalance,
  MdOutlineBusinessCenter,
} from "react-icons/md";
import { FaRobot } from "react-icons/fa";

export default function Navbar() {
  const [productsOpen, setProductsOpen] = useState(false);
  const [solutionsOpen, setSolutionsOpen] = useState(false);
  const [ResourcesOpen, setResourcesOpen] = useState(false);

  const [drawerOpen, setDrawerOpen] = useState(false);
  const [drawerProductsOpen, setDrawerProductsOpen] = useState(false);
  const [drawerSolutionsOpen, setDrawerSolutionsOpen] = useState(false);
  const [drawerResourcesOpen, setDrawerResourcesOpen] = useState(false);

  // Drawer content for mobile/tablet
  const drawerNav = (
    <div className="flex flex-col gap-2 mt-8">
      {/* Products Dropdown */}
      <div>
        <button
          className="flex items-center w-full px-4 py-2 font-medium text-[#111] hover:bg-gray-100 rounded transition"
          onClick={() => setDrawerProductsOpen(!drawerProductsOpen)}
        >
          Products
          <svg
            className={`ml-1 w-4 h-4 transition-transform ${
              drawerProductsOpen ? "rotate-180" : ""
            }`}
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <path d="M19 9l-7 7-7-7" />
          </svg>
        </button>
        {drawerProductsOpen && (
          <div className="pl-6 pt-2 pb-4">
            <div className="mb-2 text-xs text-gray-400 font-semibold uppercase tracking-widest">
              Products
            </div>
            <ul className="space-y-2">
              <li>
                <a
                  href="/corporate-card"
                  className="flex items-center gap-3 px-3 py-2 rounded hover:bg-gray-50 transition"
                >
                  <FiCreditCard className="text-xl text-[#222]" />
                  <div>
                    <div className="text-[#111] font-medium">
                      Corporate card
                    </div>
                    <div className="text-xs text-gray-500">
                      Get up to 10-20x higher limits
                    </div>
                  </div>
                </a>
              </li>
              <li>
                <a
                  href="/bill-pay"
                  className="flex items-center gap-3 px-3 py-2 rounded hover:bg-gray-50 transition"
                >
                  <MdOutlinePayment className="text-xl text-[#222]" />
                  <div>
                    <div className="text-[#111] font-medium">Bill pay</div>
                    <div className="text-xs text-gray-500">
                      Pay vendors faster and easier
                    </div>
                  </div>
                </a>
              </li>
              <li>
                <a
                  href="/business-banking"
                  className="flex items-center gap-3 px-3 py-2 rounded hover:bg-gray-50 transition"
                >
                  <FiBriefcase className="text-xl text-[#222]" />
                  <div>
                    <div className="text-[#111] font-medium">
                      Business banking
                    </div>
                    <div className="text-xs text-gray-500">
                      Bank smarter with up to 4.34%*
                    </div>
                  </div>
                </a>
              </li>
              <li>
                <a
                  href="/spend-management"
                  className="flex items-center gap-3 px-3 py-2 rounded hover:bg-gray-50 transition"
                >
                  <FiBarChart2 className="text-xl text-[#222]" />
                  <div>
                    <div className="text-[#111] font-medium">
                      Spend management
                    </div>
                    <div className="text-xs text-gray-500">
                      Eliminate manual expense work
                    </div>
                  </div>
                </a>
              </li>
              <li>
                <a
                  href="/travel"
                  className="flex items-center gap-3 px-3 py-2 rounded hover:bg-gray-50 transition"
                >
                  <MdOutlineTravelExplore className="text-xl text-[#222]" />
                  <div>
                    <div className="text-[#111] font-medium">Travel</div>
                    <div className="text-xs text-gray-500">
                      Book and manage global travel
                    </div>
                  </div>
                </a>
              </li>
              <li>
                <a
                  href="/account-automation"
                  className="flex items-center gap-3 px-3 py-2 rounded hover:bg-gray-50 transition"
                >
                  <MdOutlineAutoAwesome className="text-xl text-[#222]" />
                  <div>
                    <div className="text-[#111] font-medium">
                      Accounting automation
                    </div>
                    <div className="text-xs text-gray-500">
                      Close your books in minutes
                    </div>
                  </div>
                </a>
              </li>
            </ul>
            <div className="mt-6 mb-2 text-xs text-gray-400 font-semibold uppercase tracking-widest">
              Platform
            </div>
            <ul className="space-y-2">
              <li>
                <a
                  href="/embedded-finance"
                  className="flex items-center gap-3 px-3 py-2 rounded hover:bg-gray-50 transition"
                >
                  <FiGlobe className="text-xl text-[#222]" />
                  <div>
                    <div className="text-[#111] font-medium">
                      Equate Embedded
                    </div>
                    <div className="text-xs text-gray-500">
                      API-driven global payments
                    </div>
                  </div>
                </a>
              </li>
              <li>
                <a
                  href="/integrations"
                  className="flex items-center gap-3 px-3 py-2 rounded hover:bg-gray-50 transition"
                >
                  <MdOutlineIntegrationInstructions className="text-xl text-[#222]" />
                  <div>
                    <div className="text-[#111] font-medium">
                      Native integrations
                    </div>
                    <div className="text-xs text-gray-500">
                      ERP, HRIS, productivity, security
                    </div>
                  </div>
                </a>
              </li>
              <li>
                <a
                  href="/equate-ai"
                  className="flex items-center gap-3 px-3 py-2 rounded hover:bg-gray-50 transition"
                >
                  <FaRobot className="text-xl text-[#222]" />
                  <div>
                    <div className="text-[#111] font-medium">Equate AI</div>
                    <div className="text-xs text-gray-500">
                      AI-powered assistant & analytics
                    </div>
                  </div>
                </a>
              </li>
              <li>
                <a
                  href="/global"
                  className="flex items-center gap-3 px-3 py-2 rounded hover:bg-gray-50 transition"
                >
                  <MdOutlineAccountBalance className="text-xl text-[#222]" />
                  <div>
                    <div className="text-[#111] font-medium">Global ready</div>
                    <div className="text-xs text-gray-500">
                      Multi-currency and multi-entity
                    </div>
                  </div>
                </a>
              </li>
            </ul>
            {/* New Release Card */}
            <div className="mt-6 bg-[#f8f9fa] border border-[#ececec] rounded-2xl p-5 flex flex-col items-start">
              <img
                src="https://brand.brex.com/transform/ae0c5b71-0d4a-4a0e-bc6d-4b2d7f1f5c0b/Grow-Your-Cash?io=transform:fit,width:400,height:200&quality=95"
                alt="Grow Your Cash"
                className="w-28 h-16 object-contain mb-4"
                draggable={false}
              />
              <div className="text-xs text-[#ff6600] font-bold mb-1">
                New release
              </div>
              <div className="font-semibold text-[#111] mb-2">
                Introducing higher returns &rarr;
              </div>
              <div className="text-xs text-gray-700 mb-2">
                Equate now offers the highest-returning, lowest-risk treasury
                product: earn up to 4.37%* with same-hour liquidity.
              </div>
            </div>
          </div>
        )}
      </div>
      <div>
        <button
          className="flex items-center w-full px-4 py-2 font-medium text-[#111] hover:bg-gray-100 rounded transition"
          onClick={() => setDrawerSolutionsOpen(!drawerSolutionsOpen)}
        >
          Solutions
          <svg
            className={`ml-1 w-4 h-4 transition-transform ${
              drawerSolutionsOpen ? "rotate-180" : ""
            }`}
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <path d="M19 9l-7 7-7-7" />
          </svg>
        </button>
        {drawerSolutionsOpen && (
          <div className="pl-6 pt-2 pb-4">
            <div className="mb-2 text-xs text-gray-400 font-semibold uppercase tracking-widest">
              By company size
            </div>
            <ul className="space-y-2">
              <li>
                <a
                  href="/startups"
                  className="flex items-center gap-3 px-3 py-2 rounded hover:bg-gray-50 transition"
                >
                  <FiUsers className="text-xl text-[#222]" />
                  <div>
                    <div className="text-[#111] font-medium">Startups</div>
                    <div className="text-xs text-gray-500">
                      Get the #1 financial stack for startups
                    </div>
                  </div>
                </a>
              </li>
              <li>
                <a
                  href="/mid-size-companies"
                  className="flex items-center gap-3 px-3 py-2 rounded hover:bg-gray-50 transition"
                >
                  <FiBriefcase className="text-xl text-[#222]" />
                  <div>
                    <div className="text-[#111] font-medium">
                      Mid-sized companies
                    </div>
                    <div className="text-xs text-gray-500">
                      Scale faster with smart cards & controls
                    </div>
                  </div>
                </a>
              </li>
              <li>
                <a
                  href="/enterprise"
                  className="flex items-center gap-3 px-3 py-2 rounded hover:bg-gray-50 transition"
                >
                  <FiGlobe className="text-xl text-[#222]" />
                  <div>
                    <div className="text-[#111] font-medium">Enterprise</div>
                    <div className="text-xs text-gray-500">
                      Spend smart across entities, currencies
                    </div>
                  </div>
                </a>
              </li>
            </ul>
            <div className="mt-6 mb-2 text-xs text-gray-400 font-semibold uppercase tracking-widest">
              For partners
            </div>
            <ul className="space-y-2">
              <li>
                <a
                  href="/accounting"
                  className="flex items-center gap-3 px-3 py-2 rounded hover:bg-gray-50 transition"
                >
                  <MdOutlineAccountBalance className="text-xl text-[#222]" />
                  <div>
                    <div className="text-[#111] font-medium">
                      Accounting firms
                    </div>
                    <div className="text-xs text-gray-500">
                      Simplify close and earn rewards
                    </div>
                  </div>
                </a>
              </li>
              <li>
                <a
                  href="/embedded-finance"
                  className="flex items-center gap-3 px-3 py-2 rounded hover:bg-gray-50 transition"
                >
                  <FiLayers className="text-xl text-[#222]" />
                  <div>
                    <div className="text-[#111] font-medium">B2B software</div>
                    <div className="text-xs text-gray-500">
                      Embed Equate cards in your products
                    </div>
                  </div>
                </a>
              </li>
              <li>
                <a
                  href="/private-equity"
                  className="flex items-center gap-3 px-3 py-2 rounded hover:bg-gray-50 transition"
                >
                  <MdOutlineBusinessCenter className="text-xl text-[#222]" />
                  <div>
                    <div className="text-[#111] font-medium">
                      PE and VC Firms
                    </div>
                    <div className="text-xs text-gray-500">
                      Manage spend for your firm & portfolio
                    </div>
                  </div>
                </a>
              </li>
            </ul>
          </div>
        )}
      </div>

      <div>
        <button
          className="flex items-center w-full px-4 py-2 font-medium text-[#111] hover:bg-gray-100 rounded transition"
          onClick={() => setDrawerResourcesOpen(!drawerResourcesOpen)}
        >
          Resources
          <svg
            className={`ml-1 w-4 h-4 transition-transform ${
              drawerSolutionsOpen ? "rotate-180" : ""
            }`}
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <path d="M19 9l-7 7-7-7" />
          </svg>
        </button>
        {drawerResourcesOpen && (
          <div className="pl-6 pt-2 pb-4">
            {/* Customer Hub */}
            <div className="mb-2 text-xs text-gray-400 font-semibold uppercase tracking-widest">
              Customer Hub
            </div>
            <ul className="space-y-2">
              <li>
                <a
                  href="/support"
                  className="flex items-center gap-3 px-3 py-2 rounded hover:bg-gray-50 transition"
                >
                  <FiHelpCircle className="text-xl text-[#222]" />
                  <div>
                    <div className="text-[#111] font-medium">Help Center</div>
                    <div className="text-xs text-gray-500">
                      Find answers fast
                    </div>
                  </div>
                </a>
              </li>
              <li>
                <a
                  href="/implementation"
                  className="flex items-center gap-3 px-3 py-2 rounded hover:bg-gray-50 transition"
                >
                  <FiInfo className="text-xl text-[#222]" />
                  <div>
                    <div className="text-[#111] font-medium">Setup guides</div>
                    <div className="text-xs text-gray-500">
                      Set up Equate features
                    </div>
                  </div>
                </a>
              </li>
              <li>
                <a
                  href="/spring-2025"
                  className="flex items-center gap-3 px-3 py-2 rounded hover:bg-gray-50 transition"
                >
                  <FiPackage className="text-xl text-[#222]" />
                  <div>
                    <div className="text-[#111] font-medium">
                      Product releases
                    </div>
                    <div className="text-xs text-gray-500">See what’s new</div>
                  </div>
                </a>
              </li>
            </ul>

            {/* Connect with Brex */}
            <div className="mt-6 mb-2 text-xs text-gray-400 font-semibold uppercase tracking-widest">
              Connect with Equate
            </div>
            <ul className="space-y-2">
              <li>
                <a
                  href="/webinar"
                  className="flex items-center gap-3 px-3 py-2 rounded hover:bg-gray-50 transition"
                >
                  <FiVideo className="text-xl text-[#222]" />
                  <div>
                    <div className="text-[#111] font-medium">Webinars</div>
                    <div className="text-xs text-gray-500">Watch and learn</div>
                  </div>
                </a>
              </li>
             
              <li>
                <a
                  href="/careers"
                  className="flex items-center gap-3 px-3 py-2 rounded hover:bg-gray-50 transition"
                >
                  <FiBriefcase className="text-xl text-[#222]" />
                  <div>
                    <div className="text-[#111] font-medium">Careers</div>
                    <div className="text-xs text-gray-500">
                      Join us – we’re hiring
                    </div>
                  </div>
                </a>
              </li>
            </ul>

            {/* Resource Center */}
           
            <ul className="space-y-2">
              <li>
                <a
                  href="#"
                  className="flex items-center gap-3 px-3 py-2 rounded hover:bg-gray-50 transition"
                >
                  <FiEdit className="text-xl text-[#222]" />
                  <div>
                    <div className="text-[#111] font-medium">Blog</div>
                    <div className="text-xs text-gray-500">
                      Get news and insights
                    </div>
                  </div>
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="flex items-center gap-3 px-3 py-2 rounded hover:bg-gray-50 transition"
                >
                  <FiFileText className="text-xl text-[#222]" />
                  <div>
                    <div className="text-[#111] font-medium">
                      Exclusive reports
                    </div>
                    <div className="text-xs text-gray-500">
                      Unlock research and guides
                    </div>
                  </div>
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="flex items-center gap-3 px-3 py-2 rounded hover:bg-gray-50 transition"
                >
                  <FiUser className="text-xl text-[#222]" />
                  <div>
                    <div className="text-[#111] font-medium">
                      Customer stories
                    </div>
                    <div className="text-xs text-gray-500">
                      Learn from the best
                    </div>
                  </div>
                </a>
              </li>
            </ul>

            {/* The latest */}
            <div className="mt-6 mb-2 text-xs text-gray-400 font-semibold uppercase tracking-widest">
              The latest
            </div>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <img
                  src="https://placehold.co/40x40?text=Zip"
                  alt="Zip"
                  className="w-8 h-8 rounded object-cover"
                />
                <div className="text-sm font-medium text-[#111]">
                  From competitors to co-creators: Introducing Equate for Zip
                </div>
              </li>
              <li className="flex items-start gap-3">
                <img
                  src="https://placehold.co/40x40?text=Acct"
                  alt="Accounting"
                  className="w-8 h-8 rounded object-cover"
                />
                <div className="text-sm font-medium text-[#111]">
                  Engineered for finance: How Equate accelerates accounting
                </div>
              </li>
              <li className="flex items-start gap-3">
                <img
                  src="https://placehold.co/40x40?text=CFO"
                  alt="CFO"
                  className="w-8 h-8 rounded object-cover"
                />
                <div className="text-sm font-medium text-[#111]">
                  The CFO Imperative: New survey on CFO sentiment
                </div>
              </li>
            </ul>
          </div>
        )}
      </div>
      <a
        href="#"
        className="px-4 py-2 text-[#111] font-medium hover:bg-gray-100 rounded transition"
      >
        Customers
      </a>
      <a
        href="/pricing"
        className="px-4 py-2 text-[#111] font-medium hover:bg-gray-100 rounded transition"
      >
        Pricing
      </a>
      <a href="#" className="text-[#111] font-medium px-3 py-2 hover:underline">
        Sign in
      </a>
      <a
        href="#"
        className="bg-[#ff6600] hover:bg-[#ff5500] text-white font-semibold px-5 py-2 rounded-lg text-base transition-colors duration-200"
      >
        Get started
      </a>
    </div>
  );

  return (
    <nav className="w-full bg-white border-b border-gray-100 z-50 relative">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-3">
        <Link href="/" className="flex items-center gap-2">
          <img
            src="/logo.png"
            alt="Brex Logo"
            className="h-8 w-auto"
            style={{ maxWidth: "120px" }}
          />
        </Link>

        {/* Hamburger for mobile/tablet */}
        <button
          className="lg:hidden p-2"
          aria-label="Open menu"
          onClick={() => setDrawerOpen(true)}
        >
          <svg
            width="28"
            height="28"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path d="M4 7h20M4 14h20M4 21h20" />
          </svg>
        </button>

        {/* Desktop Nav Links */}
        <div className="hidden lg:flex items-center gap-2 ">
          {/* Products Dropdown */}
          <div
            onMouseEnter={() => setProductsOpen(true)}
            onMouseLeave={() => setProductsOpen(false)}
          >
            <button
              className="flex items-center px-4 py-2 font-medium text-[#111] hover:bg-gray-100 rounded transition"
              aria-haspopup="true"
              aria-expanded={productsOpen}
            >
              Products
              <svg
                className="ml-1 w-4 h-4"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            {/* Mega Dropdown */}
            {productsOpen && (
              <div
                className="absolute top-full left-0 w-screen  bg-white border-t border-gray-200 shadow-2xl py-10 px-2 z-40"
                style={{ left: 0 }}
              >
                {" "}
                <div className="max-w-7xl mx-auto flex gap-8">
                  {/* Products Column */}
                  <div className="flex-1 min-w-[220px]">
                    <div className="mb-4 text-xs text-gray-400 font-semibold uppercase tracking-widest">
                      Products
                    </div>
                    <ul className="space-y-2">
                      <li>
                        <a
                          href="/corporate-card"
                          className="flex items-center gap-3 px-3 py-2 rounded hover:bg-gray-50 transition"
                        >
                          <FiCreditCard className="text-xl text-[#222]" />
                          <div>
                            <div className="text-[#111] font-medium">
                              Corporate card
                            </div>
                            <div className="text-xs text-gray-500">
                              Get up to 10-20x higher limits
                            </div>
                          </div>
                        </a>
                      </li>

                      <li>
                        <a
                          href="/business-banking"
                          className="flex items-center gap-3 px-3 py-2 rounded hover:bg-gray-50 transition"
                        >
                          <FiBriefcase className="text-xl text-[#222]" />
                          <div>
                            <div className="text-[#111] font-medium">
                              Business banking
                            </div>
                            <div className="text-xs text-gray-500">
                              Bank smarter with up to 4.34%*
                            </div>
                          </div>
                        </a>
                      </li>
                      <li>
                        <a
                          href="/spend-management"
                          className="flex items-center gap-3 px-3 py-2 rounded hover:bg-gray-50 transition"
                        >
                          <FiBarChart2 className="text-xl text-[#222]" />
                          <div>
                            <div className="text-[#111] font-medium">
                              Spend management
                            </div>
                            <div className="text-xs text-gray-500">
                              Eliminate manual expense work
                            </div>
                          </div>
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className="flex-1 min-w-[220px]">
                    <div className="mb-4 text-xs text-gray-400 font-semibold uppercase tracking-widest"></div>
                    <ul className="space-y-2">
                      <li>
                        <a
                          href="/travel"
                          className="flex items-center gap-3 px-3 py-2 rounded hover:bg-gray-50 transition"
                        >
                          <MdOutlineTravelExplore className="text-xl text-[#222]" />
                          <div>
                            <div className="text-[#111] font-medium">
                              Travel
                            </div>
                            <div className="text-xs text-gray-500">
                              Book and manage global travel
                            </div>
                          </div>
                        </a>
                      </li>
                      <li>
                        <a
                          href="/bill-pay"
                          className="flex items-center gap-3 px-3 py-2 rounded hover:bg-gray-50 transition"
                        >
                          <MdOutlinePayment className="text-xl text-[#222]" />
                          <div>
                            <div className="text-[#111] font-medium">
                              Bill pay
                            </div>
                            <div className="text-xs text-gray-500">
                              Pay vendors faster and easier
                            </div>
                          </div>
                        </a>
                      </li>
                      <li>
                        <a
                          href="/account-automation"
                          className="flex items-center gap-3 px-3 py-2 rounded hover:bg-gray-50 transition"
                        >
                          <MdOutlineAutoAwesome className="text-xl text-[#222]" />
                          <div>
                            <div className="text-[#111] font-medium">
                              Accounting automation
                            </div>
                            <div className="text-xs text-gray-500">
                              Close your books in minutes
                            </div>
                          </div>
                        </a>
                      </li>
                    </ul>
                  </div>
                  {/* Platform Column */}
                  <div className="flex-1 min-w-[220px]">
                    <div className="mb-4 text-xs text-gray-400 font-semibold uppercase tracking-widest">
                      Platform
                    </div>
                    <ul className="space-y-2">
                      <li>
                        <a
                          href="/embedded-finance"
                          className="flex items-center gap-3 px-3 py-2 rounded hover:bg-gray-50 transition"
                        >
                          <FiGlobe className="text-xl text-[#222]" />
                          <div>
                            <div className="text-[#111] font-medium">
                              Equate Embedded
                            </div>
                            <div className="text-xs text-gray-500">
                              API-driven global payments
                            </div>
                          </div>
                        </a>
                      </li>
                      <li>
                        <a
                          href="/integrations"
                          className="flex items-center gap-3 px-3 py-2 rounded hover:bg-gray-50 transition"
                        >
                          <MdOutlineIntegrationInstructions className="text-xl text-[#222]" />
                          <div>
                            <div className="text-[#111] font-medium">
                              Native integrations
                            </div>
                            <div className="text-xs text-gray-500">
                              ERP, HRIS, productivity, security
                            </div>
                          </div>
                        </a>
                      </li>
                      <li>
                        <a
                          href="/equate-ai"
                          className="flex items-center gap-3 px-3 py-2 rounded hover:bg-gray-50 transition"
                        >
                          <FaRobot className="text-xl text-[#222]" />
                          <div>
                            <div className="text-[#111] font-medium">
                              Equate AI
                            </div>
                            <div className="text-xs text-gray-500">
                              AI-powered assistant & analytics
                            </div>
                          </div>
                        </a>
                      </li>
                      <li>
                        <a
                          href="/global"
                          className="flex items-center gap-3 px-3 py-2 rounded hover:bg-gray-50 transition"
                        >
                          <MdOutlineAccountBalance className="text-xl text-[#222]" />
                          <div>
                            <div className="text-[#111] font-medium">
                              Global ready
                            </div>
                            <div className="text-xs text-gray-500">
                              Multi-currency and multi-entity
                            </div>
                          </div>
                        </a>
                      </li>
                    </ul>
                  </div>
                  {/* New Release Card */}
                  <div className="flex-1 min-w-[260px] flex flex-col justify-between">
                    <div className="bg-[#f8f9fa] border border-[#ececec] rounded-2xl p-5 flex flex-col items-start h-full">
                      <img
                        src="https://brand.brex.com/transform/0743d79a-f7df-4ba7-944c-0a9817bab214/Banking-Preview-Nav-Thumbnail-2?io=transform:fit,width:2000,height:1178&quality=95"
                        alt="Grow Your Cash"
                        className=" object-contain mb-4"
                        draggable={false}
                      />
                      <div className="text-xs text-[#ff6600] font-bold mb-1">
                        New release
                      </div>
                      <div className="font-semibold text-[#111] mb-2">
                        Introducing higher returns &rarr;
                      </div>
                      <div className="text-xs text-gray-700 mb-2">
                        Equate now offers the highest-returning, lowest-risk
                        treasury product: earn up to 4.37%* with same-hour
                        liquidity.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
          {/* Other nav links */}
          <div
            onMouseEnter={() => setSolutionsOpen(true)}
            onMouseLeave={() => setSolutionsOpen(false)}
          >
            <button
              className="flex items-center px-4 py-2 font-medium text-[#111] hover:bg-gray-100 rounded transition"
              aria-haspopup="true"
              aria-expanded={solutionsOpen}
            >
              Solutions
              <svg
                className="ml-1 w-4 h-4"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            {solutionsOpen && (
              <div className="absolute top-full left-0 w-screen bg-white border-t border-gray-200 shadow-2xl py-10 px-2 z-40">
                <div className="max-w-7xl mx-auto flex gap-12">
                  {/* By company size */}
                  <div className=" min-w-[220px]">
                    <div className="mb-4 text-xs text-gray-400 font-semibold uppercase tracking-widest">
                      By company size
                    </div>
                    <ul className="space-y-2">
                      <li>
                        <a
                          href="/startups"
                          className="flex items-center gap-3 px-3 py-2 rounded hover:bg-gray-50 transition"
                        >
                          <FiUsers className="text-xl text-[#222]" />
                          <div>
                            <div className="text-[#111] font-medium">
                              Startups
                            </div>
                            <div className="text-xs text-gray-500">
                              Get the #1 financial stack for startups
                            </div>
                          </div>
                        </a>
                      </li>
                      <li>
                        <a
                          href="/mid-size-companies"
                          className="flex items-center gap-3 px-3 py-2 rounded hover:bg-gray-50 transition"
                        >
                          <FiBriefcase className="text-xl text-[#222]" />
                          <div>
                            <div className="text-[#111] font-medium">
                              Mid-sized companies
                            </div>
                            <div className="text-xs text-gray-500">
                              Scale faster with smart cards & controls
                            </div>
                          </div>
                        </a>
                      </li>
                      <li>
                        <a
                          href="/enterprise"
                          className="flex items-center gap-3 px-3 py-2 rounded hover:bg-gray-50 transition"
                        >
                          <FiGlobe className="text-xl text-[#222]" />
                          <div>
                            <div className="text-[#111] font-medium">
                              Enterprise
                            </div>
                            <div className="text-xs text-gray-500">
                              Spend smart across entities, currencies
                            </div>
                          </div>
                        </a>
                      </li>
                    </ul>
                  </div>
                  {/* For partners */}
                  <div className="flex-1 min-w-[220px]">
                    <div className="mb-4 text-xs text-gray-400 font-semibold uppercase tracking-widest">
                      For partners
                    </div>
                    <ul className="space-y-2">
                      <li>
                        <a
                          href="/accounting"
                          className="flex items-center gap-3 px-3 py-2 rounded hover:bg-gray-50 transition"
                        >
                          <MdOutlineAccountBalance className="text-xl text-[#222]" />
                          <div>
                            <div className="text-[#111] font-medium">
                              Accounting firms
                            </div>
                            <div className="text-xs text-gray-500">
                              Simplify close and earn rewards
                            </div>
                          </div>
                        </a>
                      </li>
                      <li>
                        <a
                          href="/embedded-finance"
                          className="flex items-center gap-3 px-3 py-2 rounded hover:bg-gray-50 transition"
                        >
                          <FiLayers className="text-xl text-[#222]" />
                          <div>
                            <div className="text-[#111] font-medium">
                              B2B software
                            </div>
                            <div className="text-xs text-gray-500">
                              Embed Equate cards in your products
                            </div>
                          </div>
                        </a>
                      </li>
                      <li>
                        <a
                          href="/private-equity"
                          className="flex items-center gap-3 px-3 py-2 rounded hover:bg-gray-50 transition"
                        >
                          <MdOutlineBusinessCenter className="text-xl text-[#222]" />
                          <div>
                            <div className="text-[#111] font-medium">
                              PE and VC Firms
                            </div>
                            <div className="text-xs text-gray-500">
                              Manage spend for your firm & portfolio
                            </div>
                          </div>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            )}
          </div>
          <div
            onMouseEnter={() => setResourcesOpen(true)}
            onMouseLeave={() => setResourcesOpen(false)}
          >
            <button
              className="flex items-center px-4 py-2 font-medium text-[#111] hover:bg-gray-100 rounded transition"
              aria-haspopup="true"
              aria-expanded={solutionsOpen}
            >
              Resources
              <svg
                className="ml-1 w-4 h-4"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path d="M19 9l-7 7-7-7" />
              </svg>
            </button>

            {ResourcesOpen && (
              <div className="absolute top-full left-0 w-screen bg-white border-t border-gray-200 shadow-2xl py-10 px-2 z-40">
                <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
                  {/* Customer Hub */}
                  <div>
                    <div className="flex justify-between items-center mb-4">
                      <span className="text-sm font-semibold text-[#111]">
                        Customer Hub
                      </span>
                      <a
                        href="#"
                        className="text-xs text-orange-600 font-medium hover:underline"
                      >
                        View all →
                      </a>
                    </div>
                    <ul className="space-y-4">
                      <li className="flex items-start gap-3">
                        <FiHelpCircle className="text-xl text-[#222]" />
                        <div>
                          <a href="/support" className="font-medium text-[#111]">
                            Help Center
                          </a>
                          <div className="text-xs text-gray-500">
                            Find answers fast
                          </div>
                        </div>
                      </li>
                      <li className="flex items-start gap-3">
                        <FiInfo className="text-xl text-[#222]" />
                        <div>
                          <a href="/implementation" className="font-medium text-[#111]">
                            Setup guides
                          </a>
                          <div className="text-xs text-gray-500">
                            Set up Equate features
                          </div>
                        </div>
                      </li>
                      <li className="flex items-start gap-3">
                        <FiPackage className="text-xl text-[#222]" />
                        <div>
                          <a href="/spring-2025" className="font-medium text-[#111]">
                            Product releases
                          </a>
                          <div className="text-xs text-gray-500">
                            See what’s new
                          </div>
                        </div>
                      </li>
                    </ul>
                  </div>

                  {/* Connect with Brex */}
                  <div>
                    <div className="mb-4 text-sm font-semibold text-[#111]">
                      Connect with Equate
                    </div>
                    <ul className="space-y-4">
                      <li className="flex items-start gap-3">
                        <FiVideo className="text-xl text-[#222]" />
                        <div>
                          <a href="/webinar" className="font-medium text-[#111]">
                            Webinars
                          </a>
                          <div className="text-xs text-gray-500">
                            Watch and learn
                          </div>
                        </div>
                      </li>
                     
                      <li className="flex items-start gap-3">
                        <FiBriefcase className="text-xl text-[#222]" />
                        <div>
                          <a href="/careers" className="font-medium text-[#111]">
                            Careers
                          </a>
                          <div className="text-xs text-gray-500">
                            Join us – we’re hiring
                          </div>
                        </div>
                      </li>
                    </ul>
                  </div>

                  {/* Resource Center */}
                 

                 
                </div>
              </div>
            )}
          </div>
          
          <a
            href="/pricing"
            className="px-4 py-2 text-[#111] font-medium hover:bg-gray-100 rounded transition"
          >
            Pricing
          </a>
        </div>
        {/* Right Side */}
        <div className="hidden lg:flex items-center gap-2">
          <a
            href="#"
            className="text-[#111] font-medium px-3 py-2 hover:underline"
          >
            Sign in
          </a>
          <a
            href="#"
            className="bg-[#ff6600] hover:bg-[#ff5500] text-white font-semibold px-5 py-2 rounded-lg text-base transition-colors duration-200"
          >
            Get started
          </a>
        </div>
      </div>
      {/* Drawer for mobile/tablet */}
      {drawerOpen && (
        <>
          {/* Overlay */}
          <div
            className="fixed inset-0 bg-black bg-opacity-40 z-40"
            onClick={() => setDrawerOpen(false)}
          />
          {/* Drawer */}
          <div
            className={`fixed top-0 left-0 h-full w-80 max-w-full bg-white z-50 shadow-lg transform transition-transform duration-300 ${
              drawerOpen ? "translate-x-0" : "-translate-x-full"
            }`}
          >
            <button
              className="absolute top-4 right-4"
              aria-label="Close menu"
              onClick={() => setDrawerOpen(false)}
            >
              <svg
                width="28"
                height="28"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M6 6l16 16M6 22L22 6" />
              </svg>
            </button>
            {drawerNav}
          </div>
        </>
      )}
    </nav>
  );
}
