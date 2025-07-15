export default function CareersHeroSection() {
    return (
      <section className="w-full bg-[#040A12] text-white py-16 ">
        <div className="max-w-[1920px] px-3 md:px-12 mx-auto flex flex-col-reverse md:flex-row items-center justify-between gap-12">
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
          <div className="md:w-1/2 relative flex justify-end items-center">
            <div className="relative rounded-full overflow-hidden z-10">
              <img
                src="/assets/homepage-images/equate-cards.png"
                alt="Brex team photo"
                className="w-full h-full object-cover rounded-full"
              />
            </div>
          </div>
        </div>
      </section>
    );
  }
  