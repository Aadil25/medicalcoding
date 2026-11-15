import React from 'react';
import { AlertCircle, CheckCircle, ArrowRight } from 'lucide-react';

export const DenialTriageVisual: React.FC<{ isDark?: boolean }> = ({ isDark = false }) => {
  const denials = [
    { code: 'CO-16', label: 'Missing / Incomplete Info', action: 'Auto-Queried EHR Attachment', pill: 'Resolved', pillColor: 'bg-emerald-100 text-emerald-800' },
    { code: 'CO-97', label: 'Bundled / Inclusive Procedure', action: 'Modifier -59 / -XU Verified', pill: 'Appealed', pillColor: 'bg-teal/20 text-teal-700' },
    { code: 'CO-197', label: 'Pre-certification Absent', action: 'Retro-Auth Package Submitted', pill: 'In Review', pillColor: 'bg-amber-100 text-amber-800' },
    { code: 'CO-11', label: 'Diagnosis Inconsistent w/ CPT', action: 'Medical Necessity Crosswalk', pill: 'Remediated', pillColor: 'bg-blue-100 text-blue-800' },
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
          <AlertCircle className="w-4 h-4 text-teal" />
          <span className="font-bold tracking-tight text-navy">CARC/RARC DENIAL REMEDIATION</span>
        </div>
        <span className="text-[10px] text-muted">Root-Cause Matrix</span>
      </div>

      <div className="space-y-2">
        {denials.map((d) => (
          <div
            key={d.code}
            className="p-2.5 rounded-xl bg-paper border border-line flex items-center justify-between"
          >
            <div>
              <div className="flex items-center gap-1.5">
                <span className="px-1.5 py-0.5 rounded bg-navy text-white text-[10px] font-bold">
                  {d.code}
                </span>
                <span className="font-bold text-navy text-xs">{d.label}</span>
              </div>
              <div className="text-[10px] text-muted mt-0.5">{d.action}</div>
            </div>
            <span className={`px-2 py-0.5 rounded-full text-[10px] font-bold whitespace-nowrap ml-2 ${d.pillColor}`}>
              {d.pill}
            </span>
          </div>
        ))}
      </div>

      <div className="mt-3 pt-2.5 border-t border-line flex items-center justify-between text-[10px] text-muted">
        <span>Average Appeal Turnaround</span>
        <span className="font-bold text-teal">&lt; 48 Hours Recovery</span>
      </div>
    </div>
  );
};

