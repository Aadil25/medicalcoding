import React from 'react';
import { Award, CheckCircle2, HelpCircle } from 'lucide-react';

export const AuditScorecardVisual: React.FC<{ isDark?: boolean }> = ({ isDark = false }) => {
  const metrics = [
    { label: 'Diagnosis Accuracy (ICD-10-CM)', value: '97.2%', status: 'Superior', color: 'text-emerald-700 bg-emerald-100' },
    { label: 'Procedure Coding (CPT / HCPCS)', value: '96.8%', status: 'Superior', color: 'text-emerald-700 bg-emerald-100' },
    { label: 'E/M Level Agreement Rate', value: '95.4%', status: 'Compliant', color: 'text-teal-800 bg-teal/20' },
    { label: 'CDI Physician Queries Raised', value: '14 Charts', status: 'Clarified', color: 'text-blue-800 bg-blue-100' },
  ];

  return (
    <div
      className={`rounded-20 p-5 border text-xs font-mono shadow-lg ${
        isDark
          ? 'bg-navy-deep/95 border-white/15 text-white'
          : 'bg-white border-line text-text'
      }`}
    >
      <div className="flex items-center justify-between pb-3 border-b border-line mb-3">
        <div className="flex items-center gap-2">
          <Award className="w-4 h-4 text-teal" />
          <span className="font-bold tracking-tight text-navy">QA AUDIT SCORECARD</span>
        </div>
        <span className="px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-800 text-[10px] font-bold">
          Score: 96.5% Overall
        </span>
      </div>

      <div className="space-y-2.5">
        {metrics.map((m) => (
          <div
            key={m.label}
            className="p-2.5 rounded-xl bg-paper border border-line flex items-center justify-between"
          >
            <div>
              <div className="text-[11px] font-bold text-navy">{m.label}</div>
              <div className="text-[10px] text-muted">Statistically validated sample</div>
            </div>
            <div className="text-right">
              <div className="text-sm font-bold text-navy">{m.value}</div>
              <span className={`px-1.5 py-0.2 rounded text-[9px] font-bold ${m.color}`}>
                {m.status}
              </span>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-3 pt-2.5 border-t border-line flex items-center justify-between text-[10px] text-muted">
        <span>Sampling: OIG RAT-STATS Compliant</span>
        <span className="text-teal font-semibold">Zero Clawback Exposure</span>
      </div>
    </div>
  );
};

