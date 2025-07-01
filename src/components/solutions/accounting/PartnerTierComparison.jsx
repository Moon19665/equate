'use client';

import { FaCheckCircle, FaTimesCircle } from 'react-icons/fa';

const tiers = ['Gold', 'Platinum', 'Diamond'];
const data = [
  { feature: 'Number of referrals', values: ['1-9', '10-29', '30+'] },
  { feature: 'Revenue share', values: [true, true, true] },
  { feature: 'Brex Pro Access', values: [true, true, true] },
  { feature: 'Dedicated partner success manager', values: [true, true, true] },
  { feature: 'Premium support & implementation services', values: [true, true, true] },
  { feature: 'Inclusion in Find-An-Accountant Directory', values: [true, true, true] },
  { feature: 'Partner level badges', values: [true, true, true] },
  { feature: 'Featured listing', values: [false, true, true] },
  { feature: 'Brex.com branded webpage', values: [false, true, true] },
  { feature: 'Co-marketing opportunities', values: [false, true, true] },
  { feature: 'Co-hosted events & webinars', values: [false, false, true] },
  { feature: 'Strategic Advisory Council eligibility', values: [false, false, true] },
  { feature: 'CPE session and credits', values: [false, false, true] },
];

export default function PartnerTierComparison() {
  return (
    <section className="w-full py-20 bg-white overflow-x-auto">
      <div className="max-w-7xl mx-auto px-4">
        <table className="w-full table-auto border-collapse text-sm md:text-base">
          <thead>
            <tr className="text-left">
              <th className="w-1/3 px-4 py-4 text-gray-700 font-semibold"> </th>
              {tiers.map((tier, i) => (
                <th key={i} className="text-center px-4 py-4 font-semibold text-gray-900">
                  {tier}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {data.map((row, idx) => (
              <tr
                key={idx}
                className={`${idx % 2 === 0 ? 'bg-[#f5f5fa]' : 'bg-white'} border-b border-gray-200`}
              >
                <td className="px-4 py-4 font-medium text-gray-700">
                  {row.feature}
                </td>
                {row.values.map((val, i) => (
                  <td key={i} className="text-center px-4 py-4">
                    {typeof val === 'boolean' ? (
                      val ? (
                        <FaCheckCircle className="text-green-500 mx-auto text-lg" />
                      ) : (
                        <FaTimesCircle className="text-gray-400 mx-auto text-lg" />
                      )
                    ) : (
                      <span className="text-gray-800">{val}</span>
                    )}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}
