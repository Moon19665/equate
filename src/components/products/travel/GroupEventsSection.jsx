"use client";

export default function GroupEventsSection() {
  return (
   <>
    <div className="w-full bg-[#0a1013] px-3 md:12 py-16 flex flex-col items-center">
      <div className="w-full max-w-3xl mx-auto text-center mb-10">
        <h1 className="text-white font-semibold mb-3 text-3xl sm:text-4xl md:text-5xl leading-tight">
          Manage everything from business trips to offsites.
        </h1>
        <p className="text-[#bfc6ce] text-base sm:text-lg md:text-xl">
          Brex is as easy to use as your favorite travel apps — with 24/7
          support on call, worldwide.
        </p>
      </div>
      {/* Top: Group Events Card */}
      <div className="w-full max-w-[1920px] rounded-2xl bg-[#181c20] flex flex-col md:flex-row items-center p-8 mb-10 shadow-lg">
        {/* Left: Text */}
        <div className="flex-1 mb-8 md:mb-0 md:mr-8">
          <h2 className="text-white text-2xl md:text-3xl font-bold mb-2">
            Group events of any size.
          </h2>
          <p className="text-[#bfc6ce] text-base md:text-lg mb-4">
            Invite unlimited attendees to book their own travel for group events
            using a shared spend limit, which covers external guests too. Track
            RSVPs and bookings, collect dietary preferences, and monitor
            travelers.
          </p>
          <a
            href="#"
            className="text-[#033175] font-semibold text-base hover:underline transition-colors duration-150"
          >
            Explore group spend controls &rarr;
          </a>
        </div>
        {/* Right: Event Image Card */}
        <div className="flex-1 flex flex-col items-center">
          <div className="bg-gradient-to-br from-[#232a33] to-[#58615d] rounded-2xl p-4 shadow-lg w-full max-w-xs">
            <img
              src="https://brand.brex.com/transform/165ff5ff-1384-4df2-9af9-a15c49d0ba0f/Group-event-attendees?io=transform:fit,width:2000,height:1613&quality=95"
              alt="Austin Offsite 2023"
              className="rounded-xl w-full h-32 object-cover mb-4"
              draggable={false}
            />
            <div className="text-white text-sm mb-2">
              July 29, 9AM – July 31, 6PM
            </div>
            <div className="text-white text-base font-semibold mb-1">
              Austin Offsite 2023
            </div>
            <div className="flex justify-between text-[#bfc6ce] text-xs mb-3">
              <span>
                Invited
                <br />
                <span className="font-bold text-white text-lg">350</span>
              </span>
              <span>
                Attending
                <br />
                <span className="font-bold text-white text-lg">325</span>
              </span>
              <span>
                Pending
                <br />
                <span className="font-bold text-white text-lg">25</span>
              </span>
            </div>
            {/* Action Buttons */}
            <div className="flex flex-col gap-2">
              <button className="w-full bg-[#232a33] hover:bg-[#2d3640] text-white py-1 rounded-lg text-xs font-semibold border border-[#323a43] transition">
                Invite guests
              </button>
              <button className="w-full bg-[#232a33] hover:bg-[#2d3640] text-white py-1 rounded-lg text-xs font-semibold border border-[#323a43] transition">
                Track RSVPs
              </button>
              <button className="w-full bg-[#232a33] hover:bg-[#2d3640] text-white py-1 rounded-lg text-xs font-semibold border border-[#323a43] transition">
                Send reminders
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom: Three Feature Cards */}
      <div className="w-full max-w-[1920px] grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Card 1: Fast, personalized booking */}
        <div className="bg-[#181c20] rounded-2xl p-7 flex flex-col items-center shadow-md h-full">
          <h3 className="text-white text-lg font-semibold mb-2 text-center">
            Fast, personalized booking.
          </h3>
          <p className="text-[#bfc6ce] text-sm text-center mb-4">
            Search and book preferred airlines and hotels within the guardrails
            of preset travel policies and spend limits.
          </p>
          <img
            src="https://brand.brex.com/transform/182fe95d-74e4-451a-a811-e785616e53a7/Group-events-Booking?io=transform:fit,width:2000,height:1408&quality=95"
            alt="Personalized booking"
            className="rounded-xl w-full h-36 object-contain"
            draggable={false}
          />
        </div>
        {/* Card 2: Unlimited itinerary changes */}
        <div className="bg-[#181c20] rounded-2xl p-7 flex flex-col items-center shadow-md h-full">
          <h3 className="text-white text-lg font-semibold mb-2 text-center">
            Unlimited itinerary changes.
          </h3>
          <p className="text-[#bfc6ce] text-sm text-center mb-4">
            Make unlimited itinerary changes and manage your card,
            reimbursements, and expenses all in the Brex app.
          </p>
          <img
            src="https://brand.brex.com/transform/4f55cb70-1de4-4987-96ce-a3dd7d455a0a/Group-events-Itinerary?io=transform:fit,width:2000,height:1408&quality=95"
            alt="Itinerary changes"
            className="rounded-xl w-full h-36 object-contain"
            draggable={false}
          />
        </div>
        {/* Card 3: 24/7 live support */}
        <div className="bg-[#181c20] rounded-2xl p-7 flex flex-col items-center shadow-md h-full">
          <h3 className="text-white text-lg font-semibold mb-2 text-center">
            24/7 live support, anywhere.
          </h3>
          <p className="text-[#bfc6ce] text-sm text-center mb-4">
            Talk to experienced travel agents whenever you need by email, phone,
            or live chat — with no hidden fees.
          </p>
          <img
            src="https://brand.brex.com/transform/007d7295-7cab-4cff-9970-a1810bd37453/Group-events-Support?io=transform:fit,width:2000,height:1408&quality=95"
            alt="24/7 support"
            className="rounded-xl w-full h-36 object-contain"
            draggable={false}
          />
        </div>
      </div>
    </div>
    <div className="w-full flex bg-black items-center justify-center px-2">
    <div className="w-full max-w-7xl  overflow-hidden bg-black flex items-center justify-center aspect-video">
      <video
        className="w-full h-full object-cover"
        src="https://brand.brex.com/m/4c4ffd800de90d2a/original/Brex-Empower2-0-TravelFullEdit-NoAudio-720p-LQ-opt-26.mp4"
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
        poster="https://pplx-res.cloudinary.com/image/private/user_uploads/44520532/150cb20b-ef19-4b49-bc0e-8cafc8fd5503/image.jpg"
        aria-label="Brex built-in spend controls video"
      />
    </div>
  </div>
   </>
  );
}
