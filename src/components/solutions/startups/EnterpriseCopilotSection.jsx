export default function EnterpriseCopilotSection() {
    return (
      <section className="w-full bg-white py-16  flex justify-center">
        <div className="max-w-[1920px] px-3 md:px-12 flex flex-col md:flex-row items-center justify-between">
          {/* Left: Text Content */}
          <div className="  md:pr-10 mb-10 md:mb-0">
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
              className="text-orange-600 text-sm font-medium hover:underline transition inline-flex items-center"
            >
              Get started <span className="ml-1">&rarr;</span>
            </a>
          </div>
          {/* Right: Product Image */}
          <div className=" flex justify-center">
            <img
              src="https://brand.brex.com/transform/6a749a54-dfca-4be0-84fd-6d0810af51ba/Enterprise-Product?io=transform:fit,width:2000,height:1758&quality=95"
              alt="Brex Enterprise Product"
              className="w-full max-w-xs md:max-w-lg rounded-xl object-contain"
              style={{ boxShadow: "none" }}
            />
          </div>
        </div>
      </section>
    );
  }
  