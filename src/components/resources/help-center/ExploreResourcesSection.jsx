export default function ExploreResourcesSection() {
    return (
      <section className="max-w-7xl mx-auto px-4 py-12">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-10">
          Explore other resources
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-[#f7f8fa] rounded-md overflow-hidden">
            <img
              src="https://brand.brex.com/transform/0b693de5-f3e5-43d0-a4e1-d73d2688444c/AccountSetup?io=transform:fit,width:2000,height:1125&quality=95"
              alt="Implementation guides"
              className="w-full h-64 object-cover"
            />
            <div className="p-6">
              <h3 className="text-lg font-semibold text-[#111] mb-1">
                Implementation guides
              </h3>
              <p className="text-sm text-gray-600 mb-3">
                Technical guides and tutorial videos to quickly set up features like Brex travel and multi-entity billing.
              </p>
              <a
                href="#"
                className="text-orange-600 text-sm font-medium hover:underline"
              >
                Browse guides →
              </a>
            </div>
          </div>
  
          <div className="bg-[#f7f8fa] rounded-md overflow-hidden">
            <img
              src="https://brand.brex.com/transform/8afa1e19-35ff-48b7-a640-4e19ed075105/2FA?io=transform:fit,width:2000,height:1125&quality=95"
              alt="Product updates"
              className="w-full h-64 object-cover"
            />
            <div className="p-6">
              <h3 className="text-lg font-semibold text-[#111] mb-1">
                Product updates
              </h3>
              <p className="text-sm text-gray-600 mb-3">
                See what’s new at Brex with details on feature launches and product improvements.
              </p>
              <a
                href="#"
                className="text-orange-600 text-sm font-medium hover:underline"
              >
                See updates →
              </a>
            </div>
          </div>
        </div>
      </section>
    );
  }