import Image from 'next/image';

export default function WeeklyWebinarForm() {
  return (
    <section className="w-full bg-[#f7f8fa] py-10 px-4">
      <div className="max-w-7xl mx-auto">
        <p className="uppercase text-xs text-gray-500 font-medium mb-1">For Brex Premium Admins</p>
        <h2 className="text-2xl md:text-4xl font-bold mb-6">Attend our weekly webinars.</h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 bg-black rounded-md overflow-hidden mb-10">
          <div className="p-8 text-white">
            <p className="text-xs tracking-wide mb-3">Weekly: Wednesdays, 11 AM PST</p>
            <h3 className="text-3xl font-bold leading-snug mb-4">Hit the ground running with Brex Empower</h3>
            <p className="text-sm mb-6">
              Join our customer success team for an overview of the platform.
            </p>
            <a href="#" className="text-orange-400 text-sm font-medium hover:underline">
              Sign up to watch →
            </a>
          </div>
          <div className="relative h-72 md:h-full w-full">
            <Image
              src="https://brand.brex.com/transform/c3fdd728-e39f-4997-ac6e-045105195702/CH-DailyWebinar-R2?io=transform:fit,width:2000,height:1125&quality=95"
              alt="Webinar visual"
              fill
              className="object-cover"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
          <div>
            <h3 className="text-xl font-semibold mb-2">Can't join live?</h3>
            <p className="text-sm text-gray-600">Register to access a recording.</p>
          </div>

          <div className="bg-white p-6 rounded-md shadow-md">
            <form className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="First name"
                  className="w-full border border-gray-300 px-4 py-2 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-orange-400"
                />
                <input
                  type="text"
                  placeholder="Last name"
                  className="w-full border border-gray-300 px-4 py-2 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-orange-400"
                />
              </div>
              <input
                type="email"
                placeholder="Work email"
                className="w-full border border-gray-300 px-4 py-2 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-orange-400"
              />
              <button
                type="submit"
                className="w-full bg-orange-500 hover:bg-orange-600 text-white font-medium py-2 rounded-md transition-colors"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
