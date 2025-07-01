export default function SetupGuideHero() {
    return (
    <>
      <section className="w-full bg-[#f7f8fa] grid grid-cols-1 lg:grid-cols-2 items-center px-6 md:px-12 py-16 gap-8">
        {/* Text Content */}
        <div className="max-w-xl mx-auto text-center lg:text-left">
          <h1 className="text-4xl md:text-5xl font-bold text-[#111] mb-4">
            Get comfortable<br /> with Brex.
          </h1>
          <p className="text-base text-gray-600">
            Get the most out of Brex with technical guides, tutorials, and webinars to set up key features.
          </p>
        </div>
  
        {/* Image */}
        <div className="w-full h-full flex justify-center items-center">
          <img
            src="https://brand.brex.com/transform/a4fcd09c-1fc8-4e9f-834f-fa217b86d2c8/Account-Setup?io=transform:fit,width:2000,height:1125&quality=95"
            alt="Account setup illustration"
            className="w-full h-auto object-contain rounded-md"
          />
        </div>
      </section>
        <section className="max-w-7xl mx-auto px-4 pb-16">
        <h2 className="text-3xl font-bold text-center mb-10">Admin getting started guide</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <a href="#" className="bg-[#f7f8fa] p-6 rounded-md hover:shadow-lg transition">
            <h3 className="text-lg font-semibold text-[#111] mb-1">Brex Essentials</h3>
            <p className="text-sm text-gray-600">
              Follow this guide if you have Brex Essentials
            </p>
          </a>
          <a href="#" className="bg-[#f7f8fa] p-6 rounded-md hover:shadow-lg transition">
            <h3 className="text-lg font-semibold text-[#111] mb-1">Brex Premium</h3>
            <p className="text-sm text-gray-600">
              Follow this guide if you have Brex Premium
            </p>
          </a>
        </div>
      </section>
    </>
    );
  }
  