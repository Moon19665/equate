export default function HRISSyncVideoSection() {
    return (
      <section className="bg-[#f4f5fa] py-16 px-4 text-center">
        <div className="max-w-4xl mx-auto">
          {/* Section 1 Header */}
          <p className="uppercase text-xs text-gray-600 mb-2 tracking-wide">Custom Fields</p>
          <h2 className="text-3xl md:text-4xl font-bold text-[#111] mb-4">
            Unify all your data in Equate — now including HRIS fields.
          </h2>
          <p className="text-sm md:text-base text-gray-700 mb-8">
            Now the data from your business systems syncs natively with Equate. Use any field from your ERP or HRIS to
            automatically provision cards, change your policy, or automate accounting.
          </p>
  
         
  
          {/* Between Video Content */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16 text-left">
            <div>
              <h3 className="text-lg font-semibold text-[#111] mb-2">
                Keep user info up to date automatically.
              </h3>
              <p className="text-sm text-gray-700">
                Integrate your custom and default fields like employee name, job code, and division from Workday, Paycor,
                ADP, Gusto, and other HRIS systems into Equate.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-[#111] mb-2">
                Use your fields to automate your work in Equate.
              </h3>
              <p className="text-sm text-gray-700">
                Use your HRIS fields anywhere in Equate to compose rules for assigning cards and limits, managing policies,
                automating accounting, reporting, and more.
              </p>
            </div>
          </div>
  
        
        </div>
      </section>
    );
  }
  