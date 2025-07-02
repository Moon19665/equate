 export const drawerNav = (
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
                  className="flex pointer-events-none items-center gap-3 px-3 py-2 rounded hover:bg-gray-50 transition"
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
                  className="flex pointer-events-none items-center gap-3 px-3 py-2 rounded hover:bg-gray-50 transition"
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
                  className="flex pointer-events-none items-center gap-3 px-3 py-2 rounded hover:bg-gray-50 transition"
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
                  className="flex pointer-events-none items-center gap-3 px-3 py-2 rounded hover:bg-gray-50 transition"
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
                  className="flex pointer-events-none items-center gap-3 px-3 py-2 rounded hover:bg-gray-50 transition"
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
                  className="flex pointer-events-none items-center gap-3 px-3 py-2 rounded hover:bg-gray-50 transition"
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
                  className="flex pointer-events-none items-center gap-3 px-3 py-2 rounded hover:bg-gray-50 transition"
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
                  className="flex pointer-events-none items-center gap-3 px-3 py-2 rounded hover:bg-gray-50 transition"
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
                  className="flex pointer-events-none items-center gap-3 px-3 py-2 rounded hover:bg-gray-50 transition"
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
                  className="flex pointer-events-none items-center gap-3 px-3 py-2 rounded hover:bg-gray-50 transition"
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
              <div className="text-xs text-[#033175] font-bold mb-1">
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
                  className="flex pointer-events-none items-center gap-3 px-3 py-2 rounded hover:bg-gray-50 transition"
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
                  className="flex pointer-events-none items-center gap-3 px-3 py-2 rounded hover:bg-gray-50 transition"
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
                  className="flex pointer-events-none items-center gap-3 px-3 py-2 rounded hover:bg-gray-50 transition"
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
                  className="flex pointer-events-none items-center gap-3 px-3 py-2 rounded hover:bg-gray-50 transition"
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
                  className="flex pointer-events-none items-center gap-3 px-3 py-2 rounded hover:bg-gray-50 transition"
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
                  className="flex pointer-events-none items-center gap-3 px-3 py-2 rounded hover:bg-gray-50 transition"
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
                  className="flex pointer-events-none items-center gap-3 px-3 py-2 rounded hover:bg-gray-50 transition"
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
                  className="flex pointer-events-none items-center gap-3 px-3 py-2 rounded hover:bg-gray-50 transition"
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
                  className="flex pointer-events-none items-center gap-3 px-3 py-2 rounded hover:bg-gray-50 transition"
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
                  className="flex pointer-events-none items-center gap-3 px-3 py-2 rounded hover:bg-gray-50 transition"
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
                  className="flex pointer-events-none items-center gap-3 px-3 py-2 rounded hover:bg-gray-50 transition"
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
                  className="flex pointer-events-none items-center gap-3 px-3 py-2 rounded hover:bg-gray-50 transition"
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
                  className="flex pointer-events-none items-center gap-3 px-3 py-2 rounded hover:bg-gray-50 transition"
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
                  className="flex pointer-events-none items-center gap-3 px-3 py-2 rounded hover:bg-gray-50 transition"
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
        className="px-4 py-2 pointer-events-none text-[#111] font-medium hover:bg-gray-100 rounded transition"
      >
        Pricing
      </a>
      <a href="#" className="text-[#111] pointer-events-none font-medium px-3 py-2 hover:underline">
        Sign in
      </a>
      <a
        href="#"
        className="bg-[#033175] pointer-events-none hover:bg-[#033175] text-white font-semibold px-5 py-2 rounded-lg text-base transition-colors duration-200"
      >
        Get started
      </a>
    </div>
  );
