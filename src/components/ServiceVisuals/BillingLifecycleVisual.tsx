import React from 'react';
import { ArrowRight, CheckCircle2, Clock, RefreshCw } from 'lucide-react';

export const BillingLifecycleVisual: React.FC<{ isDark?: boolean }> = ({ isDark = true }) => {
  const steps = [
    { label: 'Charge Capture', status: 'done' },
    { label: 'Rule Scrub', status: 'done' },
    { label: 'Clearinghouse 837', status: 'active' },
    { label: 'Adjudication Paid', status: 'next' },
  ];

  const claimRows = [
    { id: 'CLM-9031', payer: 'BlueCross BlueShield', amount: '$680.00', status: 'Paid', statusClass: 'bg-emerald-500/20 text-emerald-400 border-emerald-500/30' },
    { id: 'CLM-9032', payer: 'UnitedHealthcare', amount: '$1,240.00', status: 'Accepted', statusClass: 'bg-blue-500/20 text-blue-300 border-blue-500/30' },
    { id: 'CLM-9033', payer: 'Medicare Part B', amount: '$435.50', status: 'In Review', statusClass: 'bg-amber-500/20 text-amber-300 border-amber-500/30' },
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
        <span className="font-bold tracking-tight text-teal-bright">CLAIM LIFECYCLE VELOCITY</span>
        <span className="text-[10px] text-slate-300">Live 837/835 Stream</span>
      </div>

      {/* 4-Step Pipeline Flow */}
      <div className="grid grid-cols-4 gap-1.5 mb-4 text-center">
        {steps.map((st, i) => (
          <div
            key={i}
            className={`p-2 rounded-xl border flex flex-col items-center justify-center ${
              st.status === 'done'
                ? 'bg-teal/20 border-teal/50 text-white'
                : st.status === 'active'
                ? 'bg-teal-bright/30 border-teal-bright text-white shadow-glow-teal'
                : 'bg-white/5 border-white/10 text-slate-400'
            }`}
          >
            <span className="text-[9px] uppercase tracking-wider block font-bold leading-tight">
              {st.label}
            </span>
          </div>
        ))}
      </div>

      {/* Claim Batch Rows */}
      <div className="space-y-2">
        {claimRows.map((row) => (
          <div
            key={row.id}
            className="flex items-center justify-between p-2.5 rounded-xl bg-white/5 border border-white/10"
          >
            <div>
              <div className="font-bold text-white text-xs">{row.id}</div>
              <div className="text-[10px] text-slate-300">{row.payer}</div>
            </div>
            <div className="text-right">
              <div className="font-bold text-teal-bright">{row.amount}</div>
              <span className={`inline-block px-2 py-0.5 rounded-full text-[9px] font-bold border mt-0.5 ${row.statusClass}`}>
                {row.status}
              </span>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-3 pt-2 border-t border-white/10 flex justify-between items-center text-[10px] text-slate-400">
        <span>Daily 24h ERA Auto-Post</span>
        <span className="text-teal-bright font-bold">First Pass: 98.4%</span>
      </div>
    </div>
  );
};

