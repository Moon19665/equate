export default function HRISSyncVideoSection() {
    return (
      <section className="bg-[#f4f5fa] py-16 px-4 text-center">
        <div className="max-w-4xl mx-auto">
          {/* Section 1 Header */}
          <p className="uppercase text-xs text-gray-600 mb-2 tracking-wide">Custom Fields</p>
          <h2 className="text-3xl md:text-4xl font-bold text-[#111] mb-4">
            Unify all your data in Brex — now including HRIS fields.
          </h2>
          <p className="text-sm md:text-base text-gray-700 mb-8">
            Now the data from your business systems syncs natively with Brex. Use any field from your ERP or HRIS to
            automatically provision cards, change your policy, or automate accounting.
          </p>
  
          {/* First Video */}
          <div className="rounded-xl overflow-hidden shadow-lg mb-16">
            <video
              controls
              autoPlay
              crossOrigin="anonymous"
              playsInline
              preload="auto"
              poster="https://brand.brex.com/transform/8e0158f0-314a-4841-9d3d-3376bfc3ea48/LP02_Use-your-fields-to-automate-your-work-in-Brex?io=transform:fit,width:2000,height:1125&quality=95"
              className="w-full h-auto rounded-xl"
            >
              <source
                src="https://brand.brex.com/m/48a456325227f101/original/LP-02_Use-your-fields-to-automate-your-work-in-Brex_hb.mp4"
                type="video/mp4"
              />
              <img
                src="https://brand.brex.com/transform/8e0158f0-314a-4841-9d3d-3376bfc3ea48/LP02_Use-your-fields-to-automate-your-work-in-Brex?io=transform:fit,width:2000,height:1125&quality=95"
                alt="HRIS syncing demo"
                className="w-full"
              />
            </video>
          </div>
  
          {/* Between Video Content */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16 text-left">
            <div>
              <h3 className="text-lg font-semibold text-[#111] mb-2">
                Keep user info up to date automatically.
              </h3>
              <p className="text-sm text-gray-700">
                Integrate your custom and default fields like employee name, job code, and division from Workday, Paycor,
                ADP, Gusto, and other HRIS systems into Brex.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-[#111] mb-2">
                Use your fields to automate your work in Brex.
              </h3>
              <p className="text-sm text-gray-700">
                Use your HRIS fields anywhere in Brex to compose rules for assigning cards and limits, managing policies,
                automating accounting, reporting, and more.
              </p>
            </div>
          </div>
  
          {/* Second Video */}
          <div className="rounded-xl overflow-hidden shadow-lg">
            <video
              controls
              autoPlay
              crossOrigin="anonymous"
              playsInline
              preload="auto"
              poster="https://brand.brex.com/transform/bd649c8c-5c68-4783-b08a-69d9bea7d415/LP03-_Set-rules-to-ensure-expenses-are-coded-accurately?io=transform:fit,width:2000,height:1125&quality=95"
              className="w-full h-auto rounded-xl"
            >
              <source
                src="https://brand.brex.com/m/6fde388ddf0593f7/original/LP-03-_Set-rules-to-ensure-expenses-are-coded-accurately_hb.mp4"
                type="video/mp4"
              />
              <img
                src="https://brand.brex.com/transform/bd649c8c-5c68-4783-b08a-69d9bea7d415/LP03-_Set-rules-to-ensure-expenses-are-coded-accurately?io=transform:fit,width:2000,height:1125&quality=95"
                alt="Set rules to ensure expenses are coded"
                className="w-full"
              />
            </video>
          </div>
        </div>
      </section>
    );
  }
  