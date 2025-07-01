import React from 'react';

export default function HelpCenterResources() {
  return (
    <section className="max-w-7xl mx-auto px-4 py-12">
      <h2 className="text-2xl md:text-3xl font-semibold text-center mb-10">
        Explore other resources
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Help Center */}
        <div className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300">
          <img
            src="https://brand.brex.com/transform/534c2e43-61c1-4a2e-bf9d-564bd23cdb5d/HC-CoverImage?io=transform:fit,width:2000,height:915&quality=95"
            alt="Help Center"
            className="w-full h-64 object-cover"
          />
          <div className="p-6 text-center">
            <h3 className="text-lg font-semibold mb-2">Help Center</h3>
            <p className="text-sm text-gray-600 mb-4">
              Reference step-by-step instructions for using all parts of Brex and get answers to common questions.
            </p>
            <a
              href="#"
              className="text-orange-600 text-sm font-medium hover:underline"
            >
              Search FAQs →
            </a>
          </div>
        </div>

        {/* Product Updates */}
        <div className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300">
          <img
            src="https://brand.brex.com/transform/8afa1e19-35ff-48b7-a640-4e19ed075105/2FA?io=transform:fit,width:2000,height:1125&quality=95"
            alt="Product Updates"
            className="w-full h-64 object-cover"
          />
          <div className="p-6 text-center">
            <h3 className="text-lg font-semibold mb-2">Product updates</h3>
            <p className="text-sm text-gray-600 mb-4">
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
