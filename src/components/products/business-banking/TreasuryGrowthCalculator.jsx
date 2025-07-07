'use client';

import { useState } from 'react';

export default function TreasuryGrowthCalculator() {
  // Slider state: $5,000,000 default, range $100,000 - $20,000,000
  const [balance, setBalance] = useState(5000000);
  // Treasury percent state
  const [treasuryPercent, setTreasuryPercent] = useState(90);

  // Determine rate by balance
  const getRate = (bal) => {
    if (bal >= 20000000) return 0.0434;
    if (bal >= 5000000) return 0.0424;
    if (bal >= 2000000) return 0.0419;
    if (bal >= 500000) return 0.0409;
    return 0.0399;
  };
  const rate = getRate(balance);

  // Calculate estimated return
  const estimatedReturn = Math.round(balance * (treasuryPercent / 100) * rate);

  // Format currency
  const formatCurrency = (num) =>
    num.toLocaleString('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 0 });

  return (
    <div className="w-full flex flex-col items-center py-12 px-4 bg-white">
      {/* Heading */}
      <h2 className="text-2xl md:text-4xl font-bold text-center mb-2">
        Don't just store your cash. Grow it.
      </h2>
      <p className="text-[#666] text-base md:text-lg text-center mb-8">
        Earn up to <span className="font-semibold">4.34%†</span> from your first dollar — with no minimum required and same-hour liquidity.
      </p>

      {/* Estimated Return */}
      <div className="text-[48px] md:text-[80px] font-bold text-[#111] text-center leading-none mb-2">
        {formatCurrency(estimatedReturn)}
        <span className="text-2xl md:text-3xl font-normal text-[#111] align-top">/yr</span>
      </div>

      {/* Slider */}
      <div className="w-full max-w-xl flex flex-col items-center mb-2">
        {/* Range input */}
        <div className="relative w-full flex items-center mb-1">
          <input
            type="range"
            min={100000}
            max={20000000}
            step={100000}
            value={balance}
            onChange={e => setBalance(Number(e.target.value))}
            className="w-full h-2 accent-[#033175] bg-[#033175] rounded-full outline-none"
            style={{
              background: `linear-gradient(to right, #033175 0%, #033175 ${((balance - 100000) / (20000000 - 100000)) * 100}%, #e5e5e5 ${((balance - 100000) / (20000000 - 100000)) * 100}%, #e5e5e5 100%)`
            }}
          />
        </div>
        <div className="flex justify-between w-full text-xs text-[#888] font-medium px-1">
          <span>$100K</span>
          <span>$20M+</span>
        </div>
        <div className="w-full text-center font-semibold text-sm mt-2 mb-1 text-[#222]">
          Total balance
        </div>
      </div>

      {/* Treasury % input and description */}
      <div className="flex flex-col md:flex-row items-center justify-center gap-2 mb-8">
        <span className="text-[#888] text-sm">
          Displaying estimated return of <span className="font-semibold">{(rate * 100).toFixed(2)}%</span> assuming funds held
        </span>
        <input
          type="number"
          min={0}
          max={100}
          value={treasuryPercent}
          onChange={e => {
            let val = Number(e.target.value);
            if (val > 100) val = 100;
            if (val < 0) val = 0;
            setTreasuryPercent(val);
          }}
          className="mx-2 w-14 text-center border border-gray-300 rounded-md px-2 py-1 text-sm font-semibold"
        />
        <span className="text-[#888] text-sm">% in treasury.</span>
      </div>

      {/* Centered Table */}
      <div className="w-full flex justify-center mt-8">
        <div className="w-full max-w-md">
          <table className="w-full border-separate border-spacing-y-3">
            <thead>
              <tr>
                <th className="text-center text-base md:text-lg font-semibold text-[#111] pb-4">Total balance</th>
                <th className="text-center text-base md:text-lg font-semibold text-[#111] pb-4">Total treasury return</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="text-[#111] text-base font-medium py-2 text-center">$20M+</td>
                <td className="text-[#111] text-base font-medium py-2 text-center">4.34%†</td>
              </tr>
              <tr>
                <td className="text-[#111] text-base font-medium py-2 text-center">$5M–$20M</td>
                <td className="text-[#111] text-base font-medium py-2 text-center">4.24%</td>
              </tr>
              <tr>
                <td className="text-[#111] text-base font-medium py-2 text-center">$2M–$5M</td>
                <td className="text-[#111] text-base font-medium py-2 text-center">4.19%</td>
              </tr>
              <tr>
                <td className="text-[#111] text-base font-medium py-2 text-center">$500K–$2M</td>
                <td className="text-[#111] text-base font-medium py-2 text-center">4.09%</td>
              </tr>
              <tr>
                <td className="text-[#111] text-base font-medium py-2 text-center">$0–$500K</td>
                <td className="text-[#111] text-base font-medium py-2 text-center">3.99%</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* Disclaimer */}
      <div className="w-full max-w-md mt-6">
        <p className="text-xs text-[#888] text-center leading-relaxed">
          Yield is 3.99%† for funds invested in OD/XXX.† Additional return ranging from 0.00% to 0.35% may apply based on your total balance. 
          The new yield structure is live for new Brex business account customers as of June 4, 2025, and will become available to existing 
          customers starting July 1, 2025.
        </p>
      </div>
    </div>
  );
}
