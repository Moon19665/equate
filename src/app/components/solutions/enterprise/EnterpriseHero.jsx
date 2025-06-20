import { useState } from 'react';

export default function MidSizeHero() {
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log('Email submitted:', email);
  };

  return (
    <div className="relative min-h-screen w-full">
      {/* Desktop Layout - Background Image */}
      <div className="hidden lg:block relative min-h-screen">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('https://brand.brex.com/transform/78998ed9-1c65-4cf5-941d-f1294f820353/Enterprise-Header-Desktop-Noise?io=transform:fit,width:3000,height:1429&quality=95')`
          }}
        >
          {/* Overlay for better text readability */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/20 to-transparent"></div>
        </div>
        
        {/* Content Overlay */}
        <div className="relative z-10 flex items-center min-h-screen">
          <div className="max-w-7xl mx-auto px-6 lg:px-8 w-full">
            <div className="max-w-lg">
              <h1 className="text-4xl lg:text-5xl xl:text-6xl font-semibold text-white leading-tight mb-6">
                Optimize your spend on a global scale.
              </h1>
              <p className="text-lg lg:text-xl text-gray-200 mb-8 leading-relaxed">
                Global travel and spend management for unmatched efficiency and control in any market.
              </p>
              <form className="mt-8 max-w-sm" onSubmit={handleSubmit}>
                <div className="flex w-full py-1 rounded-xl border border-gray-200 bg-white overflow-hidden">
                  <input
                    type="email"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                    placeholder="Enter your work email"
                    className="flex-1 px-5 py-3 text-xs bg-transparent border-none outline-none focus:ring-0 placeholder:text-gray-500"
                    required
                  />
                  <button
                    type="submit"
                    className="px-4 mr-2 bg-[#ff6600] hover:bg-[#ff5500] text-white text-[12px] transition-colors duration-200 rounded-md"
                  >
                    Get started
                  </button>
                </div>
              </form>
              <p className="text-xs text-gray-300 mt-4">
                Brex is a financial technology company, not a bank. Checking and banking services provided by Column N.A., Member FDIC.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Layout - Split Sections */}
      <div className="lg:hidden">
        {/* Content Section */}
        <div className="bg-gradient-to-br from-emerald-900 via-teal-900 to-gray-900 px-6 py-12">
          <div className="max-w-lg mx-auto">
            <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-6">
              Optimize your spend on a global scale.
            </h1>
            <p className="text-lg text-gray-200 mb-8 leading-relaxed">
              Global travel and spend management for unmatched efficiency and control in any market.
            </p>
            <form className="mt-8 w-full max-w-xl" onSubmit={handleSubmit}>
              <div className="flex w-full py-2 rounded-xl border border-gray-200 bg-white overflow-hidden">
                <input
                  type="email"
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                  placeholder="Enter your work email"
                  className="flex-1 px-5 py-3 text-base bg-transparent border-none outline-none focus:ring-0 placeholder:text-gray-500"
                  required
                />
                <button
                  type="submit"
                  className="px-4 mr-2 bg-[#ff6600] hover:bg-[#ff5500] text-white text-[14px] transition-colors duration-200 rounded-md"
                >
                  Get started
                </button>
              </div>
            </form>
            <p className="text-sm text-gray-300 leading-relaxed mt-4">
              Equate is a financial technology company, not a bank. Checking and banking services provided by Column N.A., Member FDIC.
            </p>
          </div>
        </div>

        {/* Image Section */}
        <div className="relative h-96 sm:h-[500px]">
          <img
            src="https://brand.brex.com/transform/d9e28e22-e1ee-4f0a-ae37-efd6cce9c857/Enterprise-Header-Mobile?io=transform:fit,width:2000,height:1538&quality=95"
            alt="Brex financial platform interface"
            className="w-full h-full object-cover object-center"
          />
        </div>
      </div>
    </div>
  );
}
