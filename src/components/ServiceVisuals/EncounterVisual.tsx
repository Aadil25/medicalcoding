import React from 'react';
import { ShieldCheck, Stethoscope } from 'lucide-react';

export const EncounterVisual: React.FC<{ isDark?: boolean }> = ({ isDark = false }) => {
  return (
    <div
      className={`rounded-20 p-5 border text-xs font-mono shadow-lg ${
        isDark
          ? 'bg-navy-deep/90 border-teal/30 text-white'
          : 'bg-white border-line text-text'
      }`}
    >
      <div className="flex items-center justify-between pb-3 border-b border-line/30 mb-3">
        <div className="flex items-center gap-2">
          <Stethoscope className="w-4 h-4 text-teal" />
          <span className="font-bold tracking-tight">ENCOUNTER #ENC-84920</span>
        </div>
        <span className="px-2 py-0.5 rounded-full bg-emerald-500/15 text-emerald-600 text-[10px] font-bold">
          Coded · QA passed · 98.5%
        </span>
      </div>

      <div className="space-y-2.5">
        <div className="p-2.5 rounded-xl bg-mist/60 border border-teal/20 flex items-center justify-between">
          <div>
            <div className="text-[10px] text-muted font-bold">PRIMARY DIAGNOSIS</div>
            <div className="font-bold text-navy text-xs">E11.22 · T2DM with Diabetic CKD</div>
          </div>
          <span className="px-1.5 py-0.5 rounded bg-teal text-white text-[10px]">HCC 37</span>
        </div>

        <div className="p-2.5 rounded-xl bg-mist/60 border border-teal/20 flex items-center justify-between">
          <div>
            <div className="text-[10px] text-muted font-bold">SECONDARY STAGING</div>
            <div className="font-bold text-navy text-xs">N18.31 · Chronic Kidney Disease, Stage 3a</div>
          </div>
          <span className="px-1.5 py-0.5 rounded bg-teal text-white text-[10px]">HCC 329</span>
        </div>

        <div className="p-2.5 rounded-xl bg-mist/60 border border-teal/20 flex items-center justify-between">
          <div>
            <div className="text-[10px] text-muted font-bold">CAUSAL HYPERTENSION LINK</div>
            <div className="font-bold text-navy text-xs">I12.9 · Hypertensive CKD, Unspecified</div>
          </div>
          <span className="px-1.5 py-0.5 rounded bg-slate-200 text-text text-[10px]">Guideline</span>
        </div>

        <div className="p-2.5 rounded-xl bg-teal/10 border border-teal/40 flex items-center justify-between">
          <div>
            <div className="text-[10px] text-teal font-bold">E/M 2027 LEVEL DETERMINATION</div>
            <div className="font-bold text-teal-bright text-xs">99214 · Office Visit (Moderate MDM)</div>
          </div>
          <ShieldCheck className="w-4 h-4 text-teal" />
        </div>
      </div>

      <div className="mt-3 pt-2.5 border-t border-line/40 flex items-center justify-between text-[10px] text-muted">
        <span>Auditor: CPC/CRC Senior Lead</span>
        <span className="text-teal font-semibold">100% Coder Signed</span>
      </div>
    </div>
  );
};
