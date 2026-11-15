import React from 'react';
import { TrendingDown } from 'lucide-react';

export const ArAgingVisual: React.FC<{ isDark?: boolean }> = ({ isDark = true }) => {
  const buckets = [
    { label: '0–30 Days', amount: '$420K', pct: 68, color: 'bg-teal-bright' },
    { label: '31–60 Days', amount: '$115K', pct: 19, color: 'bg-teal' },
    { label: '61–90 Days', amount: '$48K', pct: 8, color: 'bg-amber-400' },
    { label: '91–120 Days', amount: '$22K', pct: 3.5, color: 'bg-orange-400' },
    { label: '120+ Days', amount: '$9K', pct: 1.5, color: 'bg-rose-400' },
  ];

  return (
    <div
      className={`rounded-20 p-5 border text-xs font-mono shadow-lg ${
        isDark
          ? 'bg-navy-deep/95 border-white/15 text-white'
          : 'bg-white border-line text-text'
      }`}
    >
      <div className="flex items-center justify-between pb-3 border-b border-white/10 mb-3">
        <div className="flex items-center gap-2">
          <TrendingDown className="w-4 h-4 text-teal-bright" />
          <span className="font-bold tracking-tight text-white">A/R AGING DISTRIBUTION</span>
        </div>
        <span className="text-[10px] text-teal-bright font-bold">DNFB 28.2 Days</span>
      </div>

      <div className="space-y-2.5">
        {buckets.map((b) => (
          <div key={b.label} className="space-y-1">
            <div className="flex justify-between text-[11px]">
              <span className="text-slate-300">{b.label}</span>
              <span className="font-bold text-white">
                {b.amount} <span className="text-slate-400 font-normal">({b.pct}%)</span>
              </span>
            </div>
            <div className="w-full h-2.5 rounded-full bg-white/10 overflow-hidden">
              <div
                className={`h-full rounded-full ${b.color} transition-all duration-500`}
                style={{ width: `${b.pct}%` }}
              />
            </div>
          </div>
        ))}
      </div>

      <div className="mt-4 pt-3 border-t border-white/10 flex items-center justify-between text-[10px] text-slate-300">
        <span>Target: &gt; 85% in &lt; 60 Days</span>
        <span className="text-emerald-400 font-bold">Current: 87.0% ✓ Target Met</span>
      </div>
    </div>
  );
};

