"use client";

import { motion } from "framer-motion";
import { Truck, Map, Shield, Clock, CheckCircle2, ArrowRight, Gauge, Activity } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { QuoteForm } from "@/components/QuoteForm";
import Link from "next/link";

const transporterTypes = [
  { 
    id: "TYPE-12", 
    name: "11/12-Car Transporter", 
    capacity: "Maximum Payload", 
    use: "Manufacturer Trunking & Large Fleet Distribution",
    features: ["Transporter Engineering Build", "High-Volume Capacity", "National Network Optimized"]
  },
  { 
    id: "TYPE-06", 
    name: "6-Car Regional Carrier", 
    capacity: "Medium Payload", 
    use: "Dealership Network Support & Regional Deliveries",
    features: ["Increased Maneuverability", "Dealer-Friendly Footprint", "Multi-Drop Optimized"]
  },
  { 
    id: "TYPE-ENC", 
    name: "Enclosed Secure Unit", 
    capacity: "Luxury Payload", 
    use: "High-Value, Prototype & Classic Asset Movement",
    features: ["Total Privacy", "Climate Protection", "Zero-Defect Guaranteed"]
  },
];

export default function TransportPage() {
  return (
    <div className="bg-white min-h-screen pt-20">
      {/* Service Hero */}
      <section className="relative h-[60vh] flex items-center bg-black overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-40">
           <img 
             src="https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?q=80&w=2070&auto=format&fit=crop" 
             alt="A1 Transporter Fleet" 
             className="w-full h-full object-cover grayscale"
           />
           <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent" />
        </div>
        
        <div className="container relative z-10 px-6 mx-auto">
          <div className="max-w-4xl">
            <span className="text-xs font-black text-secondary uppercase tracking-[0.5em] mb-8 block">Service Division 01</span>
            <h1 className="text-6xl md:text-8xl font-black text-white uppercase tracking-tighter leading-none mb-8">
               National <br/> <span className="text-secondary italic">Transport.</span>
            </h1>
            <p className="text-xl text-white/60 font-bold uppercase tracking-widest max-w-2xl">
               High-Capacity Vehicle Distribution Across the UK & Ireland.
            </p>
          </div>
        </div>
      </section>

      {/* Narrative & Stats */}
      <section className="py-32 border-b border-slate-100">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24">
            <div className="space-y-8">
              <h2 className="text-4xl font-black uppercase tracking-tighter">Commanding the <br/> UK&apos;s Road Networks.</h2>
              <div className="text-lg text-slate-600 font-medium leading-relaxed space-y-6">
                <p>
                  A1 Automotive Ltd operates one of the most sophisticated car transporter fleets in the UK. From single-unit high-value collections to massive multi-thousand unit manufacturer distributions, our operations are engineered for reliability.
                </p>
                <p>
                  Every vehicle in our 80+ unit fleet is equipped with real-time GPS telematics, providing our HQ Mission Control in Bathgate with absolute transparency over every asset in transit.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-slate-50 p-10 flex flex-col justify-center border-t-4 border-black">
                <div className="text-5xl font-black mb-2 tabular-nums">82</div>
                <div className="text-[10px] font-black uppercase tracking-widest text-secondary">Active Units</div>
              </div>
              <div className="bg-slate-50 p-10 flex flex-col justify-center border-t-4 border-black">
                <div className="text-5xl font-black mb-2 tabular-nums">100%</div>
                <div className="text-[10px] font-black uppercase tracking-widest text-secondary">GPS Tracked</div>
              </div>
              <div className="bg-slate-50 p-10 flex flex-col justify-center border-t-4 border-black">
                <div className="text-5xl font-black mb-2 tabular-nums">24/7</div>
                <div className="text-[10px] font-black uppercase tracking-widest text-secondary">Operational</div>
              </div>
              <div className="bg-slate-50 p-10 flex flex-col justify-center border-t-4 border-black">
                <div className="text-5xl font-black mb-2 tabular-nums">0%</div>
                <div className="text-[10px] font-black uppercase tracking-widest text-secondary">Defect Target</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Fleet Depth - Technical Table */}
      <section className="py-32 bg-slate-50">
        <div className="container mx-auto px-6">
          <div className="mb-20">
            <h2 className="text-4xl font-black uppercase tracking-tighter mb-4 text-center">Fleet Specifications</h2>
            <div className="h-1 w-20 bg-secondary mx-auto" />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {transporterTypes.map((type) => (
              <div key={type.id} className="bg-white border border-slate-200 p-12 hover:shadow-xl transition-all group">
                <div className="text-[10px] font-black text-secondary mb-12 uppercase tracking-widest">{type.id}</div>
                <h3 className="text-3xl font-black uppercase tracking-tight mb-4">{type.name}</h3>
                <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-10">{type.capacity}</p>
                <ul className="space-y-4 mb-16">
                  {type.features.map((f, i) => (
                    <li key={i} className="flex items-center gap-3 text-xs font-bold uppercase tracking-tight text-slate-600">
                      <div className="h-1 w-4 bg-secondary" />
                      {f}
                    </li>
                  ))}
                </ul>
                <div className="text-[10px] font-black uppercase tracking-widest text-black/20 group-hover:text-black transition-colors italic">
                  Usage: {type.use}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Integration: Quote Form */}
      <section className="py-32 bg-white">
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row gap-20 items-center">
            <div className="lg:w-1/2">
              <h2 className="text-5xl font-black uppercase tracking-tighter mb-8">Secure your <br/> <span className="text-secondary italic">Transport Slot.</span></h2>
              <p className="text-xl font-bold text-slate-400 uppercase tracking-tight leading-snug mb-12">
                Our national network manages over 100,000 movements annually. Initiate a formal logistics proposal today.
              </p>
              <div className="space-y-6">
                <div className="flex items-center gap-6 group">
                   <div className="h-12 w-12 rounded-full border border-slate-200 flex items-center justify-center text-secondary group-hover:bg-secondary group-hover:text-white transition-all">
                      <Clock size={20} />
                   </div>
                   <span className="font-black uppercase tracking-widest text-sm">2-Hour Lead Response</span>
                </div>
                <div className="flex items-center gap-6 group">
                   <div className="h-12 w-12 rounded-full border border-slate-200 flex items-center justify-center text-secondary group-hover:bg-secondary group-hover:text-white transition-all">
                      <Map size={20} />
                   </div>
                   <span className="font-black uppercase tracking-widest text-sm">Full UK & Ireland Coverage</span>
                </div>
              </div>
            </div>
            <div className="lg:w-1/2 w-full">
               <QuoteForm service="VEHICLE TRANSPORT" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
