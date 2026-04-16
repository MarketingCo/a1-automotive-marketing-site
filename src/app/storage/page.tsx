"use client";

import { motion } from "framer-motion";
import { Warehouse, Shield, HardHat, CheckCircle2, ArrowRight, Lock, Eye, Building } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { QuoteForm } from "@/components/QuoteForm";

const storageFeatures = [
  { 
    title: "12-Acre Secure Compound", 
    desc: "A fully hard-standing, high-security facility engineered for high-volume automotive inventory.",
    icon: Warehouse
  },
  { 
    title: "Bonded / Duty Suspended", 
    desc: "Authorized HMRC bonded storage solutions for manufacturers and importers.",
    icon: Lock
  },
  { 
    title: "24/7 Monitored Security", 
    desc: "Perimeter alarms, high-tier CCTV, and on-site security personnel provide round-the-clock protection.",
    icon: Eye
  },
  { 
    title: "High-Capacity PDI", 
    desc: "In-house Pre-Delivery Inspection suites for rapid dealer network preparation.",
    icon: HardHat
  },
];

export default function StoragePage() {
  return (
    <div className="bg-white min-h-screen pt-20">
      {/* Service Hero */}
      <section className="relative h-[60vh] flex items-center bg-black overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-40">
           <img 
             src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=2070&auto=format&fit=crop" 
             alt="A1 Storage Facility" 
             className="w-full h-full object-cover grayscale"
           />
           <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent" />
        </div>
        
        <div className="container relative z-10 px-6 mx-auto text-center lg:text-left">
          <div className="max-w-4xl">
            <span className="text-xs font-black text-secondary uppercase tracking-[0.5em] mb-8 block">Service Division 02</span>
            <h1 className="text-6xl md:text-8xl font-black text-white uppercase tracking-tighter leading-none mb-8">
               Secure <br/> <span className="text-secondary italic">Storage.</span>
            </h1>
            <p className="text-xl text-white/60 font-bold uppercase tracking-widest max-w-2xl">
               Strategic Vehicle Inventory Management in Central Scotland.
            </p>
          </div>
        </div>
      </section>

      {/* Infrastructure Deep-Dive */}
      <section className="py-32 border-b border-slate-100">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
            <div className="space-y-8">
              <h2 className="text-4xl font-black uppercase tracking-tighter">A Fortress for <br/> Automotive Assets.</h2>
              <div className="text-lg text-slate-600 font-medium leading-relaxed space-y-6">
                <p>
                  A1 Automotive Ltd operates a purpose-built 12-acre storage facility in Bathgate, strategically positioned between Edinburgh and Glasgow. This hub serves as the primary Scottish inventory center for several major European manufacturers.
                </p>
                <p>
                  Our facility is designed for high-velocity intake and output, allowing us to manage massive fleet movements with surgical organization. Every vehicle is tracked via our digital inventory system from the moment it enters Zone Alpha.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
               {storageFeatures.map((f, i) => (
                 <div key={i} className="p-10 bg-slate-50 border-l-4 border-secondary group hover:bg-black transition-colors duration-500">
                    <f.icon className="text-secondary mb-6" size={32} strokeWidth={2.5} />
                    <h4 className="text-xl font-black uppercase tracking-tight mb-4 text-black group-hover:text-white transition-colors">{f.title}</h4>
                    <p className="text-xs font-bold text-slate-400 uppercase tracking-widest group-hover:text-white/40 transition-colors">{f.desc}</p>
                 </div>
               ))}
            </div>
          </div>
        </div>
      </section>

      {/* Quote Hub */}
      <section className="py-32 bg-slate-950 text-white">
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row gap-20 items-center">
            <div className="lg:w-1/2">
              <h2 className="text-5xl font-black uppercase tracking-tighter mb-8">Capacity <br/> <span className="text-secondary italic">Available.</span></h2>
              <p className="text-xl font-bold text-white/40 uppercase tracking-tight leading-snug mb-12">
                Whether you require short-term bonded storage or long-term inventory management, our Bathgate hub has the scale to accommodate.
              </p>
              <div className="grid grid-cols-2 gap-8">
                <div className="space-y-2">
                   <div className="text-4xl font-black tabular-nums">2,000+</div>
                   <div className="text-[10px] font-black uppercase tracking-widest text-secondary">Unit Capacity</div>
                </div>
                <div className="space-y-2">
                   <div className="text-4xl font-black tabular-nums">HMRC</div>
                   <div className="text-[10px] font-black uppercase tracking-widest text-secondary">Bonded Status</div>
                </div>
              </div>
            </div>
            <div className="lg:w-1/2 w-full">
               <QuoteForm service="VEHICLE STORAGE" dark={true} />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
