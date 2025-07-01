import { FaSmile, FaMoneyBillWave, FaMapMarkerAlt } from "react-icons/fa";
import { MdFreeBreakfast } from "react-icons/md";

export default function BrexBenefits() {
  return (
    <section className="bg-[#050b11] text-white py-16 px-6">
      <div className="max-w-6xl mx-auto">
        <h3 className="text-gray-300 text-sm mb-2 font-semibold">
          Benefits of Brex
        </h3>
        <h2 className="text-3xl md:text-4xl font-bold mb-10">
          Live your best life
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Self-care */}
          <div className="flex flex-col items-start space-y-4">
            <FaSmile size={28} className="text-white" />
            <h4 className="font-bold text-lg">Self-care</h4>
            <p className="text-sm text-gray-300 leading-relaxed">
              Medical, dental, and vision; One Medical; Spring Health mental wellbeing; Calm Membership.
            </p>
          </div>

          {/* Money */}
          <div className="flex flex-col items-start space-y-4">
            <FaMoneyBillWave size={28} className="text-white" />
            <h4 className="font-bold text-lg">Money</h4>
            <p className="text-sm text-gray-300 leading-relaxed">
              Competitive compensation with an annual comp cycle, equity, 401(k) plan, and more.
            </p>
          </div>

          {/* Rest */}
          <div className="flex flex-col items-start space-y-4">
            <MdFreeBreakfast size={28} className="text-white" />
            <h4 className="font-bold text-lg">Rest</h4>
            <p className="text-sm text-gray-300 leading-relaxed">
              Generous PTO if full time, paid holidays, company weeks off, and parental leave.
            </p>
          </div>

          {/* Hybrid */}
          <div className="flex flex-col items-start space-y-4">
            <FaMapMarkerAlt size={28} className="text-white" />
            <h4 className="font-bold text-lg">Hybrid</h4>
            <p className="text-sm text-gray-300 leading-relaxed">
              Designated in-office collaboration days, lunches and events, offsites, remote weeks, commuter benefits, and monthly stipend.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
