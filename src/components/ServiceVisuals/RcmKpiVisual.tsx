import React from 'react';
import { Gauge, ArrowUpRight, ArrowDownRight } from 'lucide-react';

export const RcmKpiVisual: React.FC<{ isDark?: boolean }> = ({ isDark = true }) => {
  const kpis = [
    { label: 'Clean Claim Rate', value: '98.4%', target: '&gt; 95%', trend: 'up', note: '+2.4% vs Nat Avg' },
    { label: 'Days in A/R', value: '28.2', target: '&lt; 35 Days', trend: 'down', note: '-8.5 Days Reduced' },
    { label: 'Initial Denial Rate', value: '2.8%', target: '&lt; 5%', trend: 'down', note: 'Top Decile' },
    { label: 'Net Collection Rate', value: '98.9%', target: '&gt; 96%', trend: 'up', note: 'Optimal Cash Flow' },
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
          <Gauge className="w-4 h-4 text-teal-bright" />
          <span className="font-bold tracking-tight text-white">RCM KPI PULSE DASHBOARD</span>
        </div>
        <span className="text-[10px] text-teal-bright font-bold">Executive Suite</span>
      </div>

      <div className="grid grid-cols-2 gap-2.5">
        {kpis.map((k) => (
          <div
            key={k.label}
            className="p-3 rounded-xl bg-white/5 border border-white/10 flex flex-col justify-between"
          >
            <div className="text-[10px] text-slate-300 uppercase tracking-wider">{k.label}</div>
            <div className="text-xl font-bold font-mono text-white mt-1 mb-1">{k.value}</div>
            <div className="flex items-center justify-between text-[10px]">
              <span className="text-slate-400">Target {k.target}</span>
              <span className="text-emerald-400 font-bold flex items-center">
                {k.trend === 'up' ? <ArrowUpRight className="w-3 h-3" /> : <ArrowDownRight className="w-3 h-3" />}
                {k.note}
              </span>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-3 pt-2.5 border-t border-white/10 flex items-center justify-between text-[10px] text-slate-300">
        <span>Continuous Clearinghouse Sync</span>
        <span className="text-teal-bright font-bold">Updated Every 15 Min</span>
      </div>
    </div>
  );
};

