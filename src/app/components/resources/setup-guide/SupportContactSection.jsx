import { FiMessageSquare, FiPhone, FiShare2 } from 'react-icons/fi';

export default function SupportOptions() {
  return (
    <section className="max-w-7xl mx-auto px-4 py-16 text-center">
      <h2 className="text-2xl md:text-3xl font-bold text-[#111] mb-12">Get 24/7 support</h2>
      <div className="flex flex-col md:flex-row justify-center gap-10">
        {/* Live chat */}
        <div className="flex-1 max-w-xs mx-auto ">
          <FiMessageSquare className="text-2xl text-gray-700 mb-2 flex justify-center w-full items-center" />
          <h3 className="font-semibold text-[#111] text-lg">Live chat</h3>
          <p className="text-xs text-gray-500 mb-1">
            <span className="font-semibold">Recommended option.</span> Get fast answers from Brex Support.
          </p>
          <a href="#" className="text-orange-600 text-sm font-medium hover:underline">
            Start a conversation →
          </a>
        </div>

        {/* Call our team */}
        <div className="flex-1 max-w-xs mx-auto ">
          <FiPhone className="text-2xl text-gray-700 mb-2 flex justify-center w-full items-center" />
          <h3 className="font-semibold text-[#111] text-lg">Call our team</h3>
          <p className="text-xs text-gray-500 mb-1">
            Speak with a support specialist 24/7 from anywhere in the world.
          </p>
          <a href="tel:+18332282044" className="text-orange-600 text-sm font-medium hover:underline">
            +1 (833) 228-2044 →
          </a>
        </div>

        {/* Connect */}
        <div className="flex-1 max-w-xs mx-auto ">
          <FiShare2 className="text-2xl text-gray-700 mb-2 flex justify-center w-full items-center" />
          <h3 className="font-semibold text-[#111] text-lg">Connect</h3>
          <ul className="text-sm text-orange-600 space-y-1">
            <li><a href="#" className="hover:underline">LinkedIn →</a></li>
            <li><a href="#" className="hover:underline">Instagram →</a></li>
            <li><a href="#" className="hover:underline">X →</a></li>
          </ul>
        </div>
      </div>
    </section>
  );
}