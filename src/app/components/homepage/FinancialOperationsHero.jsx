import { FiEdit2 } from "react-icons/fi";
import { FaCheck } from "react-icons/fa";

export default function FinancialOperationsHero() {
  return (
    <section className="w-full px-4 py-10 flex flex-col items-center bg-white">
      {/* Headings */}
      <div className="max-w-3xl w-full text-center mb-12">
        <h1 className="text-2xl md:text-4xl font-bold text-gray-900 mb-3">
          Supercharge your financial operations.
        </h1>
        <p className="text-lg md:text-xl text-gray-600">
          Maximize every resource with AI-powered controls, payments, and accounting.
        </p>
      </div>
      {/* Main Content */}
      <div className="relative flex flex-col md:flex-row items-center justify-center gap-12 w-full max-w-5xl">
      
        {/* Left: Card */}
        <div className="bg-[#e8ecf3] rounded-2xl p-6 md:p-12 flex items-center justify-center w-full max-w-md min-w-[300px] md:min-w-[350px]">
          <div className="bg-white rounded-xl p-6 shadow flex flex-col gap-5 w-full">
            {/* Card Header */}
            <div className="flex items-center justify-between mb-2">
              <span className="text-base font-medium text-gray-900">Marketing offsite</span>
              <button className="p-1.5 rounded hover:bg-gray-100 transition">
                <FiEdit2 className="text-gray-500" size={18} />
              </button>
            </div>
            {/* Slider */}
            <div>
              <div className="flex items-center justify-between text-xs text-gray-500 mb-1">
                <span>$150k</span>
                <span>$500k</span>
              </div>
              <div className="w-full h-1.5 bg-gray-200 rounded-full relative">
                <div className="h-1.5 bg-blue-500 rounded-full" style={{ width: "30%" }} />
              </div>
            </div>
            {/* Footer */}
            <div className="flex flex-row gap-2 mt-2">
              {/* In Policy */}
              <div className="flex items-center bg-green-100 text-green-700 px-3 py-1 rounded-lg text-xs font-medium">
                <FaCheck className="mr-1" size={14} />
                In policy
              </div>
              {/* Avatars */}
              <div className="flex items-center ml-2 space-x-[-10px]">
                <img
                  className="w-7 h-7 rounded-full border-2 border-white shadow"
                  src="https://randomuser.me/api/portraits/women/68.jpg"
                  alt="User 1"
                />
                <img
                  className="w-7 h-7 rounded-full border-2 border-white shadow"
                  src="https://randomuser.me/api/portraits/men/32.jpg"
                  alt="User 2"
                />
                <div className="w-7 h-7 rounded-full border-2 border-white bg-gray-200 flex items-center justify-center text-gray-600 font-semibold shadow">
                  <FaCheck size={14} />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right: Text */}
        <div className="flex-1 flex flex-col items-center md:items-start text-center md:text-left">
          <h2 className="text-2xl md:text-3xl font-semibold text-gray-900 mb-3">
            Control spend before it happens.
          </h2>
          <p className="text-base md:text-lg text-gray-600 mb-4 max-w-lg">
            Set budgets and allocate spend limits with auto-enforced controls that empower employees to spend wisely. Track and adjust in real time to keep everyone on budget and maximize impact.
          </p>
          <a
            href="#"
            className="text-orange-600 font-medium hover:underline transition text-base"
          >
            Explore Equate cards &rarr;
          </a>
        </div>
      </div>
      <div className="relative mt-32 flex flex-col md:flex-row items-center justify-center gap-12 w-full max-w-5xl">
      {/* Left: Text */}
      <div className="flex-1 flex flex-col items-center md:items-start text-center  md:text-left">
        <h2 className="text-2xl md:text-3xl font-semibold text-gray-900 mb-3">
          Control spend before it happens.
        </h2>
        <p className="text-base md:text-lg text-gray-600 mb-4 max-w-lg">
          Set budgets and allocate spend limits with auto-enforced controls that empower employees to spend wisely. Track and adjust in real time to keep everyone on budget and maximize impact.
        </p>
        <a
          href="#"
          className="text-orange-600 font-medium hover:underline transition text-base"
        >
          Explore Equate cards &rarr;
        </a>
      </div>
      {/* Right: Card */}
      <div className="bg-[#e8ecf3] rounded-2xl p-6 md:p-12 flex items-center justify-center w-full max-w-md min-w-[300px] md:min-w-[350px]">
        <div className="bg-white rounded-xl p-6 shadow flex flex-col gap-5 w-full">
          {/* Card Header */}
          <div className="flex items-center justify-between mb-2">
            <span className="text-base font-medium text-gray-900">Marketing offsite</span>
            <button className="p-1.5 rounded hover:bg-gray-100 transition">
              <FiEdit2 className="text-gray-500" size={18} />
            </button>
          </div>
          {/* Slider */}
          <div>
            <div className="flex items-center justify-between text-xs text-gray-500 mb-1">
              <span>$150k</span>
              <span>$500k</span>
            </div>
            <div className="w-full h-1.5 bg-gray-200 rounded-full relative">
              <div className="h-1.5 bg-blue-500 rounded-full" style={{ width: "30%" }} />
            </div>
          </div>
          {/* Footer */}
          <div className="flex flex-row gap-2 mt-2">
            {/* In Policy */}
            <div className="flex items-center bg-green-100 text-green-700 px-3 py-1 rounded-lg text-xs font-medium">
              <FaCheck className="mr-1" size={14} />
              In policy
            </div>
            {/* Avatars */}
            <div className="flex items-center ml-2 space-x-[-10px]">
              <img
                className="w-7 h-7 rounded-full border-2 border-white shadow"
                src="https://randomuser.me/api/portraits/women/68.jpg"
                alt="User 1"
              />
              <img
                className="w-7 h-7 rounded-full border-2 border-white shadow"
                src="https://randomuser.me/api/portraits/men/32.jpg"
                alt="User 2"
              />
              <div className="w-7 h-7 rounded-full border-2 border-white bg-gray-200 flex items-center justify-center text-gray-600 font-semibold shadow">
                <FaCheck size={14} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
     <div className="relative mt-32 flex flex-col md:flex-row items-center justify-center gap-12 w-full max-w-5xl">
     
      {/* Left: Card */}
      <div className="bg-[#e8ecf3] rounded-2xl p-6 md:p-12 flex items-center justify-center w-full max-w-md min-w-[300px] md:min-w-[350px]">
        <div className="bg-white rounded-xl p-6 shadow flex flex-col gap-5 w-full">
          {/* Card Header */}
          <div className="flex items-center justify-between mb-2">
            <span className="text-base font-medium text-gray-900">Marketing offsite</span>
            <button className="p-1.5 rounded hover:bg-gray-100 transition">
              <FiEdit2 className="text-gray-500" size={18} />
            </button>
          </div>
          {/* Slider */}
          <div>
            <div className="flex items-center justify-between text-xs text-gray-500 mb-1">
              <span>$150k</span>
              <span>$500k</span>
            </div>
            <div className="w-full h-1.5 bg-gray-200 rounded-full relative">
              <div className="h-1.5 bg-blue-500 rounded-full" style={{ width: "30%" }} />
            </div>
          </div>
          {/* Footer */}
          <div className="flex flex-row gap-2 mt-2">
            {/* In Policy */}
            <div className="flex items-center bg-green-100 text-green-700 px-3 py-1 rounded-lg text-xs font-medium">
              <FaCheck className="mr-1" size={14} />
              In policy
            </div>
            {/* Avatars */}
            <div className="flex items-center ml-2 space-x-[-10px]">
              <img
                className="w-7 h-7 rounded-full border-2 border-white shadow"
                src="https://randomuser.me/api/portraits/women/68.jpg"
                alt="User 1"
              />
              <img
                className="w-7 h-7 rounded-full border-2 border-white shadow"
                src="https://randomuser.me/api/portraits/men/32.jpg"
                alt="User 2"
              />
              <div className="w-7 h-7 rounded-full border-2 border-white bg-gray-200 flex items-center justify-center text-gray-600 font-semibold shadow">
                <FaCheck size={14} />
              </div>
            </div>
          </div>
        </div>
      </div>
       {/* Right: Text */}
       <div className="flex-1 flex flex-col items-center md:items-start text-center  md:text-left">
        <h2 className="text-2xl md:text-3xl font-semibold text-gray-900 mb-3">
          Control spend before it happens.
        </h2>
        <p className="text-base md:text-lg text-gray-600 mb-4 max-w-lg">
          Set budgets and allocate spend limits with auto-enforced controls that empower employees to spend wisely. Track and adjust in real time to keep everyone on budget and maximize impact.
        </p>
        <a
          href="#"
          className="text-orange-600 font-medium hover:underline transition text-base"
        >
          Explore Equate cards &rarr;
        </a>
      </div>
     </div>
     <div className="relative mt-32 flex flex-col md:flex-row items-center justify-center gap-12 w-full max-w-5xl">
     
   
      {/* Right: Text */}
      <div className="flex-1 flex flex-col items-center md:items-start text-center  md:text-left">
       <h2 className="text-2xl md:text-3xl font-semibold text-gray-900 mb-3">
         Control spend before it happens.
       </h2>
       <p className="text-base md:text-lg text-gray-600 mb-4 max-w-lg">
         Set budgets and allocate spend limits with auto-enforced controls that empower employees to spend wisely. Track and adjust in real time to keep everyone on budget and maximize impact.
       </p>
       <a
         href="#"
         className="text-orange-600 font-medium hover:underline transition text-base"
       >
         Explore Equate cards &rarr;
       </a>
     </div>
       {/* Left: Card */}
       <div className="bg-[#e8ecf3] rounded-2xl p-6 md:p-12 flex items-center justify-center w-full max-w-md min-w-[300px] md:min-w-[350px]">
       <div className="bg-white rounded-xl p-6 shadow flex flex-col gap-5 w-full">
         {/* Card Header */}
         <div className="flex items-center justify-between mb-2">
           <span className="text-base font-medium text-gray-900">Marketing offsite</span>
           <button className="p-1.5 rounded hover:bg-gray-100 transition">
             <FiEdit2 className="text-gray-500" size={18} />
           </button>
         </div>
         {/* Slider */}
         <div>
           <div className="flex items-center justify-between text-xs text-gray-500 mb-1">
             <span>$150k</span>
             <span>$500k</span>
           </div>
           <div className="w-full h-1.5 bg-gray-200 rounded-full relative">
             <div className="h-1.5 bg-blue-500 rounded-full" style={{ width: "30%" }} />
           </div>
         </div>
         {/* Footer */}
         <div className="flex flex-row gap-2 mt-2">
           {/* In Policy */}
           <div className="flex items-center bg-green-100 text-green-700 px-3 py-1 rounded-lg text-xs font-medium">
             <FaCheck className="mr-1" size={14} />
             In policy
           </div>
           {/* Avatars */}
           <div className="flex items-center ml-2 space-x-[-10px]">
             <img
               className="w-7 h-7 rounded-full border-2 border-white shadow"
               src="https://randomuser.me/api/portraits/women/68.jpg"
               alt="User 1"
             />
             <img
               className="w-7 h-7 rounded-full border-2 border-white shadow"
               src="https://randomuser.me/api/portraits/men/32.jpg"
               alt="User 2"
             />
             <div className="w-7 h-7 rounded-full border-2 border-white bg-gray-200 flex items-center justify-center text-gray-600 font-semibold shadow">
               <FaCheck size={14} />
             </div>
           </div>
         </div>
       </div>
     </div>
    </div>
    <div className="relative mt-32 flex flex-col md:flex-row items-center justify-center gap-12 w-full max-w-5xl">
     
      {/* Left: Card */}
      <div className="bg-[#e8ecf3] rounded-2xl p-6 md:p-12 flex items-center justify-center w-full max-w-md min-w-[300px] md:min-w-[350px]">
      <div className="bg-white rounded-xl p-6 shadow flex flex-col gap-5 w-full">
        {/* Card Header */}
        <div className="flex items-center justify-between mb-2">
          <span className="text-base font-medium text-gray-900">Marketing offsite</span>
          <button className="p-1.5 rounded hover:bg-gray-100 transition">
            <FiEdit2 className="text-gray-500" size={18} />
          </button>
        </div>
        {/* Slider */}
        <div>
          <div className="flex items-center justify-between text-xs text-gray-500 mb-1">
            <span>$150k</span>
            <span>$500k</span>
          </div>
          <div className="w-full h-1.5 bg-gray-200 rounded-full relative">
            <div className="h-1.5 bg-blue-500 rounded-full" style={{ width: "30%" }} />
          </div>
        </div>
        {/* Footer */}
        <div className="flex flex-row gap-2 mt-2">
          {/* In Policy */}
          <div className="flex items-center bg-green-100 text-green-700 px-3 py-1 rounded-lg text-xs font-medium">
            <FaCheck className="mr-1" size={14} />
            In policy
          </div>
          {/* Avatars */}
          <div className="flex items-center ml-2 space-x-[-10px]">
            <img
              className="w-7 h-7 rounded-full border-2 border-white shadow"
              src="https://randomuser.me/api/portraits/women/68.jpg"
              alt="User 1"
            />
            <img
              className="w-7 h-7 rounded-full border-2 border-white shadow"
              src="https://randomuser.me/api/portraits/men/32.jpg"
              alt="User 2"
            />
            <div className="w-7 h-7 rounded-full border-2 border-white bg-gray-200 flex items-center justify-center text-gray-600 font-semibold shadow">
              <FaCheck size={14} />
            </div>
          </div>
        </div>
      </div>
    </div>
     {/* Right: Text */}
     <div className="flex-1 flex flex-col items-center md:items-start text-center  md:text-left">
      <h2 className="text-2xl md:text-3xl font-semibold text-gray-900 mb-3">
        Control spend before it happens.
      </h2>
      <p className="text-base md:text-lg text-gray-600 mb-4 max-w-lg">
        Set budgets and allocate spend limits with auto-enforced controls that empower employees to spend wisely. Track and adjust in real time to keep everyone on budget and maximize impact.
      </p>
      <a
        href="#"
        className="text-orange-600 font-medium hover:underline transition text-base"
      >
        Explore Equate cards &rarr;
      </a>
    </div>
   </div>
   <div className="w-full bg-white py-24 px-4 flex flex-col items-center">
  <h2 className="text-2xl md:text-4xl font-bold text-center mb-10">
    Save and earn more, only with Equate.
  </h2>
  <div className="flex flex-col md:flex-row justify-center gap-10 md:gap-16 w-full max-w-5xl mb-8">
    {/* Metric 1 */}
    <div className="flex-1 text-center">
      <h3 className="text-lg font-semibold mb-2">AI-powered automation</h3>
      <div className="text-3xl md:text-4xl font-bold text-orange-600 mb-1">4,250 hours</div>
      <p className="text-gray-700 text-sm md:text-base">
        Average time saved per year with Equate's expense and accounting automation.
      </p>
    </div>
    {/* Metric 2 */}
    <div className="flex-1 text-center">
      <h3 className="text-lg font-semibold mb-2">Best-in-class treasury</h3>
      <div className="text-3xl md:text-4xl font-bold text-orange-600 mb-1">Up to 4.34%<sup>+</sup></div>
      <p className="text-gray-700 text-sm md:text-base">
        Same-hour liquidity and built-in treasury that makes you money.
      </p>
    </div>
    {/* Metric 3 */}
    <div className="flex-1 text-center">
      <h3 className="text-lg font-semibold mb-2">Superior policy compliance</h3>
      <div className="text-3xl md:text-4xl font-bold text-orange-600 mb-1">99%</div>
      <p className="text-gray-700 text-sm md:text-base">
        Average rate of expense policy compliance by employees on Equate.
      </p>
    </div>
  </div>
  <p className="text-xs text-gray-500 max-w-3xl text-center">
    Time and compliance metrics are from enterprise customers in July 2023 and for illustrative purposes only. The 99% compliance rate takes into account a cohort of top customers that follow our best-in-practice guidelines and recommendations. Yield is as of 5/1/25. Past performance does not guarantee future results, which may vary.
  </p>
</div>

    </section>
  );
}
