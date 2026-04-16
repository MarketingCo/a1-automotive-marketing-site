"use client";

import { motion } from "framer-motion";
import { ShieldCheck, ClipboardCheck, Timer, CheckCircle2, ArrowRight, Gauge, FileText, Settings } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { QuoteForm } from "@/components/QuoteForm";

const pdiSteps = [
  { t: "Technical Inspection", d: "Multi-point safety and cosmetic auditing to manufacturer standards." },
  { t: "Fluid & Level Checks", d: "Comprehensive mechanical preparation before dealer delivery." },
  { t: "Software Updates", d: "Integration and activation of vehicle technical systems." },
  { t: "Valeting & Detailing", d: "Showroom-standard cosmetic preparation for immediate resale." }
];

export default function PDIPage() {
  return (
    <div className="bg-white min-h-screen pt-20">
      {/* Hero */}
      <section className="relative h-[60vh] flex items-center bg-black overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-40">
           <img 
             src="https://images.unsplash.com/photo-1620055375841-869f88636b69?q=80&w=2070&auto=format&fit=crop" 
             alt="A1 Technical Suites" 
             className="w-full h-full object-cover grayscale"
           />
           <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent" />
        </div>
        
        <div className="container relative z-10 px-6 mx-auto">
          <div className="max-w-4xl">
            <span className="text-xs font-black text-secondary uppercase tracking-[0.5em] mb-8 block">Service Division 03</span>
            <h1 className="text-6xl md:text-8xl font-black text-white uppercase tracking-tighter leading-none mb-8">
               PDI & <br/> <span className="text-secondary italic">Defleet.</span>
            </h1>
            <p className="text-xl text-white/60 font-bold uppercase tracking-widest max-w-2xl">
               Precision Technical Preparation & End-of-Lease Management.
            </p>
          </div>
        </div>
      </section>

      {/* Narrative */}
      <section className="py-32 border-b border-slate-100">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-start">
            <div className="space-y-8">
              <h2 className="text-4xl font-black uppercase tracking-tighter">Manufacturer Standard <br/> Technical Prep.</h2>
              <div className="text-lg text-slate-600 font-medium leading-relaxed space-y-6">
                <p>
                  A1 Automotive Ltd provides a seamless transition from storage to showroom. Our in-house technical suites are equipped to handle high-volume Pre-Delivery Inspections (PDI) with precision and speed.
                </p>
                <p>
                  For leasing groups and fleet operators, our &apos;Inspect and Collect&apos; defleet service ensures end-of-contract assets are audited, prepared, and ready for redistribution within compressed timeframes.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
               {pdiSteps.map((s, i) => (
                 <div key={i} className="group">
                    <div className="flex items-center gap-4 mb-4">
                       <span className="text-xs font-black text-secondary tabular-nums">0{i+1}</span>
                       <div className="h-px flex-1 bg-slate-100 group-hover:bg-secondary transition-all" />
                    </div>
                    <h4 className="text-xl font-black uppercase tracking-tight mb-2">{s.t}</h4>
                    <p className="text-xs font-bold text-slate-400 uppercase tracking-widest leading-relaxed">{s.d}</p>
                 </div>
               ))}
            </div>
          </div>
        </div>
      </section>

      {/* Quote */}
      <section className="py-32 bg-white">
        <div className="container mx-auto px-6 text-center lg:text-left">
           <div className="flex flex-col lg:flex-row gap-20 items-center">
              <div className="lg:w-1/2">
                 <h2 className="text-5xl font-black uppercase tracking-tighter mb-8">Rapid <br/> <span className="text-secondary italic">Turnaround.</span></h2>
                 <p className="text-xl font-bold text-slate-400 uppercase tracking-tight leading-snug mb-12">
                    Our technical PDI suites can process hundreds of units weekly. Submit your defleet requirements for a bespoke proposal.
                 </p>
                 <div className="flex items-center gap-6 group justify-center lg:justify-start">
                    <FileText className="text-secondary" size={32} />
                    <span className="font-black uppercase tracking-widest text-sm">Full Digital Inspection Reports</span>
                 </div>
              </div>
              <div className="lg:w-1/2 w-full text-left">
                 <QuoteForm service="PDI & DEFLEET" />
              </div>
           </div>
        </div>
      </section>
    </div>
  );
}
