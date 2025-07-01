export default function CareersHeroSection() {
    return (
      <section className="w-full bg-[#040A12] text-white py-16 px-6">
        <div className="max-w-7xl mx-auto flex flex-col-reverse md:flex-row items-center justify-between gap-12">
          {/* Left Column */}
          <div className="md:w-1/2 text-left">
            <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
              We dream big, in life and at work
            </h1>
            <p className="text-lg mb-6">
              Helping our customers reach their full potential starts with helping our team reach theirs.
            </p>
            <button className="bg-orange-500 text-white font-semibold py-3 px-6 rounded hover:bg-orange-600 transition">
              View openings
            </button>
          </div>
  
          {/* Right Column with Image & Grid Background */}
          <div className="md:w-1/2 relative flex justify-center items-center">
            <div className="relative w-[320px] h-[320px] md:w-[400px] md:h-[400px] rounded-full overflow-hidden z-10">
              <img
                src="https://brand.brex.com/transform/3361abf9-5050-4da4-b088-bfaabb2a58e1/Careers-Header-Desktop?io=transform:fit,width:2000,height:2000&quality=95"
                alt="Brex team photo"
                className="w-full h-full object-cover rounded-full"
              />
            </div>
            <div className="absolute inset-0 w-full h-full bg-[url('https://uploads-ssl.webflow.com/605c72e70b935c2c0ab4c274/6475e3d43d7d35f052cb3b8d_grid-white.svg')] bg-cover bg-center opacity-10"></div>
          </div>
        </div>
      </section>
    );
  }
  