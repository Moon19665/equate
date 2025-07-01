export default function StartupsBillboardSection() {
    return (
      <section className="w-full bg-[#f5f6fa] py-10 px-2 flex justify-center">
        <div className="w-full max-w-6xl bg-[#f7f7fb] rounded-3xl flex flex-col md:flex-row items-center justify-between p-6 md:p-12">
          {/* Left: Text content */}
          <div className="w-full md:w-1/2 flex flex-col items-start justify-center mb-8 md:mb-0 md:pr-8">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-4 leading-tight">
              The only financial stack that puts<br className="hidden md:inline" /> your name in lights.
            </h2>
            <p className="text-gray-700 text-base md:text-sm mb-6">
              Earn points on your Brex card and redeem for billboards in places like Times Square and at prominent startup events.
            </p>
            <a
              href="#"
              className="text-orange-600 font-semibold text-base md:text-sm hover:underline transition"
            >
              Open an account &rarr;
            </a>
          </div>
          {/* Right: Billboard image */}
          <div className="w-full md:w-1/2 flex justify-center">
            <img
              src="https://brand.brex.com/transform/6ef24fc3-baaa-468c-9b93-c34bbb96c514/Startups-OOH?io=transform:fit,width:2000,height:1525&quality=95"
              alt="Brex Billboard"
              className="w-full max-w-md rounded-2xl md:rounded-3xl object-cover"
              style={{ boxShadow: 'none' }}
            />
          </div>
        </div>
      </section>
    );
  }
  