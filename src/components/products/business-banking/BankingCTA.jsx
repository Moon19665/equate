export default function BankingCTA() {
    return (
      <section className="w-full">
        <div className="flex flex-col md:flex-row h-auto md:h-[420px]">
          {/* Left: CTA */}
          <div className="bg-[#040b11] flex flex-col justify-center items-start px-6 md:px-16 py-12 md:py-0 w-full md:w-1/2">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight">
              Banking built for<br />modern business.
            </h2>
            <p className="text-lg text-[#e0e0e0] mb-8 max-w-lg">
              Discover how Brex business banking helps you move faster, earn more, and manage your company’s finances with ease.
            </p>
            <button className="bg-[#ff6f28] hover:bg-[#ff8c53] text-white font-semibold rounded-lg px-7 py-3 text-base transition-colors duration-200">
              Open your account
            </button>
          </div>
  
          {/* Right: Image */}
          <div className="w-full md:w-1/2 h-64 md:h-auto relative">
            <img
              src="https://brand.brex.com/transform/3a1d12e1-b601-4e96-a66f-011cba1f33c3/BRX-Cusion-01-2?io=transform:fit,width:2000,height:1468&quality=95"
              alt="Brex business banking illustration"
              className="w-full h-full object-cover"
              draggable={false}
            />
          </div>
        </div>
      </section>
    );
  }
  