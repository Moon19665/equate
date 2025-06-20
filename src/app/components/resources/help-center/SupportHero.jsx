import { FiSearch } from 'react-icons/fi';
import Image from 'next/image';

export default function SupportHero() {
  return (
    <>
      <section className="w-full h-[400px] bg-black flex flex-col justify-center items-center text-white px-4">
        <h1 className="text-3xl md:text-5xl font-bold mb-6 text-center">
          Hi, how can we help you?
        </h1>
        <div className="bg-white w-full max-w-2xl rounded-md flex items-center px-4 py-3 shadow-md">
          <FiSearch className="text-gray-500 text-xl mr-2" />
          <input
            type="text"
            placeholder="Find answers and resources."
            className="flex-1 border-none outline-none text-sm text-gray-800 placeholder-gray-400"
          />
        </div>
      </section>

      <section className="w-full py-12 px-4 bg-white grid grid-cols-1 md:grid-cols-2 gap-8 max-w-7xl mx-auto">
        {/* Browse by topic */}
        <div className="bg-gray-50 p-6 rounded-lg flex items-center gap-6">
          <Image
            src="https://brand.brex.com/transform/5186e386-1d6e-4328-9806-67eae6988b9f/SearchDashboard-cropped?io=transform:fit,width:2000,height:2000&quality=95"
            alt="Browse by topic"
            width={300}
            height={300}
            className=" object-contain"
          />
          <div>
            <h3 className="text-lg font-semibold text-gray-900">Browse by topic</h3>
            <p className="text-sm text-gray-600 mb-2">
              Best practices for using all of Brex’s features and offerings.
            </p>
            <a href="#" className="text-orange-600 text-sm font-medium hover:underline">
              See all →
            </a>
          </div>
        </div>

        {/* Getting started */}
        <div className="bg-gray-50 p-6 rounded-lg flex items-center gap-6">
          <Image
            src="https://brand.brex.com/transform/e5b87c1e-80ae-49a1-ba7c-63341e74359e/ClosedLoop-cropped?io=transform:fit,width:2000,height:2000&quality=95"
            alt="Getting started"
            width={300}
            height={300}
            className=" object-contain"
          />
          <div>
            <h3 className="text-lg font-semibold text-gray-900">Getting started</h3>
            <p className="text-sm text-gray-600 mb-2">
              Technical guides and tutorial videos to quickly set up Brex.
            </p>
            <a href="#" className="text-orange-600 text-sm font-medium hover:underline">
              Learn more →
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
