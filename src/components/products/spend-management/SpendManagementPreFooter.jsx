'use client';

import Image from 'next/image';

export default function SpendManagementHeroBG() {
  return (
    <section className="w-full min-h-[520px] flex items-center bg-[#0a1013] relative">
      <div className="relative z-10 w-full max-w-7xl mx-auto flex flex-col lg:flex-row items-center px-4 py-12 lg:py-24 gap-10">
        {/* Left: Content */}
        <div className="w-full lg:w-1/2 flex flex-col items-start justify-center text-center lg:text-left">
          <h1 className="text-white text-3xl md:text-5xl font-bold mb-6 leading-tight">
            Welcome to the future of<br className="hidden md:block" /> spend management.
          </h1>
          <p className="text-[#bfc6ce] text-base md:text-lg mb-8 max-w-lg mx-auto lg:mx-0">
            Let’s talk about how Brex can help you automate control and compliance, and gain real-time insights to improve ROI.
          </p>
          <button className="bg-[#033175] text-white font-semibold rounded-lg px-7 py-3 text-base transition-colors duration-200">
            Get started
          </button>
        </div>

        {/* Right: Image */}
        <div className="w-full lg:w-1/2 bg-white py-8 rounded-xl flex justify-center">
          <div className="w-[300px] md:w-[360px] lg:w-[440px] xl:w-[500px] h-auto">
            <Image
              src="/assets/homepage-images/homepage-hero.png"
              alt="Hero visual"
              width={500}
              height={500}
              className="w-full h-auto object-contain"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
