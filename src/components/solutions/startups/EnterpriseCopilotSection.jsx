export default function EnterpriseCopilotSection() {
    return (
      <section className="w-full bg-white py-16 ">
        <div className="max-w-[1920px] mx-auto px-3 md:px-12 flex flex-col md:flex-row items-center justify-between">
          {/* Left: Text Content */}
          <div className="  mb-10 md:mb-0">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              Your copilot at every stage.
            </h2>
            <p className="text-sm text-gray-700 mb-4">
              We serve founders as well as global companies with 10,000+ employees. Everything you need is here, whenever you’re ready.
            </p>
            <ul className="list-disc pl-5 text-sm text-gray-800 mb-6 space-y-2">
              <li>
                Enable your team to{" "}
                <a href="#" className="underline text-sm text-gray-900 hover:text-orange-600 transition">
                  book their own travel
                </a>{" "}
                right in Brex
              </li>
              <li>
                Use Brex{" "}
                <a href="#" className="underline text-sm text-gray-900 hover:text-orange-600 transition">
                  APIs
                </a>{" "}
                to build custom tools and workflows
              </li>
              <li>
                Go{" "}
                <a href="#" className="underline text-sm text-gray-900 hover:text-orange-600 transition">
                  global
                </a>{" "}
                and operate in nearly any country and currency.
              </li>
              <li>
                Upgrade to advanced enterprise{" "}
                <a href="#" className="underline text-sm text-gray-900 hover:text-orange-600 transition">
                  expense management
                </a>
              </li>
            </ul>
            <a
              href="#"
              className="text-[#033175] text-sm font-medium hover:underline transition inline-flex items-center"
            >
              Get started <span className="ml-1">&rarr;</span>
            </a>
          </div>
          {/* Right: Product Image */}
          <div className=" flex justify-center">
            <img
              src="/assets/startups/mobile.png"
              alt="Brex Enterprise Product"
              className="w-full max-w-xs md:max-w-2xl rounded-xl object-contain"
              style={{ boxShadow: "none" }}
            />
          </div>
        </div>
      </section>
    );
  }
  