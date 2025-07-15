export default function CommunitiesSection() {
  return (
    <section className="bg-[#f4f5fa] py-16 ">
      <div className="max-w-[1920px] mx-auto px-3 md:px-12 flex flex-col lg:flex-row items-center gap-10">
        {/* Text Column */}
        <div className="w-full lg:w-1/2">
          <h2 className="text-3xl md:text-4xl font-bold text-[#0f1113] mb-6">
            Communities
          </h2>
          <p className="text-gray-700 text-base leading-relaxed">
            We have 9 employee-led community groups focused on supporting an
            inclusive and collaborative culture. Our communities foster an
            inclusive workplace by empowering employees to connect, collaborate,
            and drive meaningful connection.
            <br />
            <br />
            With a shared mission, our communities align with company values,
            promote cross-group collaboration, and advocate for initiatives that
            enhance workplace culture and business success.
          </p>
        </div>

        {/* Video Column */}
        <div className="w-full lg:w-1/2 rounded-xl overflow-hidden ">
          <img
            src="/assets/career/social.png"
            alt="Diversity Module"
            className="w-full h-auto rounded-xl object-cover"
          />
        </div>
      </div>
    </section>
  );
}
