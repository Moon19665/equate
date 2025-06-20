import { FiMessageCircle, FiPhoneCall, FiShare2 } from 'react-icons/fi';

export default function SupportContactOptions() {
  return (
    <section className="max-w-7xl mx-auto px-4 py-16">
      <h2 className="text-3xl font-bold text-center mb-10">Get 24/7 support</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Live Chat */}
        <div className="bg-[#f7f8fa] p-6 rounded-md">
          <div className="flex items-center gap-3 mb-4">
            <FiMessageCircle className="text-2xl text-black" />
            <h3 className="text-lg font-semibold text-black">Live chat</h3>
          </div>
          <p className="text-sm text-gray-600 mb-4">
            Recommended option. Get fast answers from Brex Support.
          </p>
          <a
            href="#"
            className="text-orange-600 text-sm font-medium hover:underline"
          >
            Start a conversation &rarr;
          </a>
        </div>

        {/* Call our team */}
        <div className="bg-[#f7f8fa] p-6 rounded-md">
          <div className="flex items-center gap-3 mb-4">
            <FiPhoneCall className="text-2xl text-black" />
            <h3 className="text-lg font-semibold text-black">Call our team</h3>
          </div>
          <p className="text-sm text-gray-600 mb-4">
            Speak with a support specialist 24/7 from anywhere in the world.
          </p>
          <a
            href="tel:+18332282044"
            className="text-orange-600 text-sm font-medium hover:underline"
          >
            +1 (833) 228-2044
          </a>
        </div>

        {/* Connect */}
        <div className="bg-[#f7f8fa] p-6 rounded-md">
          <div className="flex items-center gap-3 mb-4">
            <FiShare2 className="text-2xl text-black" />
            <h3 className="text-lg font-semibold text-black">Connect</h3>
          </div>
          <ul className="space-y-1 text-orange-600 text-sm font-medium">
            <li><a href="#" className="hover:underline">LinkedIn</a></li>
            <li><a href="#" className="hover:underline">Instagram</a></li>
            <li><a href="#" className="hover:underline">X</a></li>
          </ul>
        </div>
      </div>
    </section>
  );
}