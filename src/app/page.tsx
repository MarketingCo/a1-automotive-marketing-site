"use client";

import { motion } from "framer-motion";
import { Truck, Warehouse, ShieldCheck, Award, Map, Phone, Mail, CheckCircle2, ArrowRight, Gauge, Layers, Shield, Tool, Factory, Building2, UserCheck, HardHat } from "lucide-react";
import { Button } from "@/components/ui/Button";
import Link from "next/link";
import { useRef } from "react";

const fleetSpecs = [
  { type: "Single/Twin Carriers", use: "Private & Classic Collections" },
  { type: "6-Car Transporters", use: "Regional Dealership Distribution" },
  { type: "11/12-Car Carriers", use: "Manufacturer Trunking & Bulk Movements" },
  { type: "Enclosed Units", use: "High-Value & Prototype Transport" },
];

const hubZones = [
  { name: "Zone Alpha", detail: "6-Acre Secure Compound (1,000+ Units)" },
  { name: "Technical Suite", detail: "Multi-Bay PDI & Technical Prep" },
  { name: "Zone Beta", detail: "Bonded Storage & Long-Term Inventory" },
  { name: "Maintenance", detail: "In-House Transporter Service Center" },
];

const sectors = [
  { title: "OEM & Manufacturers", icon: Factory, desc: "Factory-to-hub and dealer network distribution." },
  { title: "Rental & Leasing", icon: Building2, desc: "High-volume de-fleet and inspection services." },
  { title: "Dealership Groups", icon: UserCheck, desc: "Inter-site transfers and customer deliveries." },
  { title: "Corporate Fleets", icon: Briefcase, desc: "End-to-end management of business assets." },
];

const revealVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } 
  }
};

export default function Home() {
  return (
    <div className="bg-white selection:bg-secondary selection:text-white overflow-x-hidden">
      
      {/* Heavy-Duty Hero Section */}
      <section className="relative h-[90vh] min-h-[800px] flex items-center bg-black overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-40">
           <div className="absolute inset-0 bg-grid-white/[0.05] bg-[size:40px_40px]" />
           <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_70%_30%,_rgba(227,30,36,0.15)_0%,_transparent_60%)]" />
        </div>

        <div className="container relative z-10 px-6 mx-auto">
          <div className="max-w-6xl">
            <motion.div
              initial="hidden"
              animate="visible"
              variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
            >
              <motion.div variants={revealVariants} className="flex items-center gap-6 mb-12">
                <div className="h-1 w-20 bg-secondary" />
                <span className="text-sm font-black tracking-[0.4em] text-white uppercase">
                  National Infrastructure Partner
                </span>
              </motion.div>

              <motion.h1 
                variants={revealVariants}
                className="text-6xl md:text-[10rem] font-black text-white leading-[0.8] tracking-tighter uppercase mb-12"
              >
                HEAVY <br/> 
                <span className="text-secondary">LOGISTICS.</span>
              </motion.h1>

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-end">
                <motion.div variants={revealVariants} className="lg:col-span-7">
                  <p className="text-2xl md:text-3xl font-bold text-white/50 leading-tight border-l-8 border-secondary pl-10">
                    A1 Automotive Ltd orchestrates the movement and management of 100,000+ vehicle assets annually across the UK and Ireland. 
                  </p>
                </motion.div>
                <motion.div variants={revealVariants} className="lg:col-span-5 flex flex-wrap gap-6">
                  <Button size="lg" variant="secondary" className="rounded-none h-20 px-12 font-black tracking-widest text-lg group">
                    OPEN SPECIFICATIONS
                    <ArrowRight className="ml-4 group-hover:translate-x-4 transition-transform" />
                  </Button>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Fleet & Hardware - The Physical Scale */}
      <section id="fleet" className="py-32 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-start">
             <div>
                <span className="text-xs font-black text-secondary uppercase tracking-[0.4em] mb-6 block">Assets & Hardware</span>
                <h2 className="text-5xl md:text-7xl font-black text-black uppercase tracking-tighter leading-none mb-12">
                  80+ Unit <br/> <span className="text-secondary">Fleet Depth.</span>
                </h2>
                <div className="space-y-4">
                   {fleetSpecs.map((spec, i) => (
                     <div key={i} className="flex items-center justify-between p-6 border-b-2 border-slate-100 group hover:border-secondary transition-colors">
                        <span className="font-black uppercase tracking-tight text-xl">{spec.type}</span>
                        <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">{spec.use}</span>
                     </div>
                   ))}
                </div>
                <p className="mt-12 text-lg font-medium text-slate-600 leading-relaxed italic">
                  "Every unit in our fleet is integrated into our real-time GPS network, providing absolute transparency for high-volume manufacturer movements."
                </p>
             </div>
             <div className="relative pt-12">
                <div className="aspect-[4/5] bg-slate-900 overflow-hidden border-[20px] border-slate-50 flex items-center justify-center grayscale transition-all hover:grayscale-0">
                   <div className="text-white/10 font-black text-[15rem] leading-none select-none">A1</div>
                </div>
                <div className="absolute -bottom-10 -left-10 bg-secondary p-12 text-white">
                   <div className="text-5xl font-black mb-2">100k+</div>
                   <div className="text-xs font-black uppercase tracking-[0.3em]">Units Moved / Year</div>
                </div>
             </div>
          </div>
        </div>
      </section>

      {/* The Hub Nexus - 12 Acre Breakdown */}
      <section id="about" className="py-32 bg-slate-50 relative overflow-hidden">
        <div className="container mx-auto px-6 relative z-10">
          <div className="flex flex-col lg:flex-row justify-between items-end mb-24 gap-12">
             <div className="max-w-2xl">
                <span className="text-xs font-black text-secondary uppercase tracking-[0.4em] mb-6 block">Strategic Infrastructure</span>
                <h2 className="text-5xl md:text-8xl font-black text-black uppercase tracking-tighter leading-none">
                  Central <br/> <span className="text-secondary">Fortress.</span>
                </h2>
             </div>
             <div className="text-right border-r-8 border-black pr-10">
                <div className="text-4xl font-black tabular-nums">12 ACRES</div>
                <div className="text-xs font-black uppercase tracking-widest text-slate-400">Bathgate, Scotland HQ</div>
             </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
             {hubZones.map((zone, i) => (
               <div key={i} className="bg-white p-10 border-t-8 border-black group hover:bg-black transition-all duration-500">
                  <div className="text-xs font-black text-secondary uppercase tracking-[0.3em] mb-4">Zone/{i+1}</div>
                  <h4 className="text-2xl font-black uppercase tracking-tight mb-4 group-hover:text-white transition-colors">{zone.name}</h4>
                  <p className="text-slate-500 font-bold group-hover:text-white/60 transition-colors">{zone.detail}</p>
               </div>
             ))}
          </div>
          
          <div className="mt-20 bg-white p-12 border-2 border-slate-200 flex flex-col md:flex-row items-center gap-12">
             <div className="flex-1 space-y-4">
                <div className="flex items-center gap-3 text-secondary">
                   <Shield size={32} strokeWidth={3} />
                   <h5 className="font-black text-2xl uppercase tracking-tighter text-black">High-Security Bonded Facility</h5>
                </div>
                <p className="text-slate-600 font-medium">Our compound is engineered for manufacturer inventory management, featuring 24/7 monitored CCTV and rapid-access logistical gates for massive fleet intakes.</p>
             </div>
             <div className="h-px w-full md:h-20 md:w-px bg-slate-200" />
             <div className="flex-1 space-y-4">
                <div className="flex items-center gap-3 text-secondary">
                   <HardHat size={32} strokeWidth={3} />
                   <h5 className="font-black text-2xl uppercase tracking-tighter text-black">Technical Preparation</h5>
                </div>
                <p className="text-slate-600 font-medium">In-house PDI suites allow us to inspect, prep, and distribute vehicles directly from the hub, reducing manufacturer lead times by up to 40%.</p>
             </div>
          </div>
        </div>
      </section>

      {/* Sector Specialization - Who We Serve */}
      <section className="py-32 bg-black text-white">
        <div className="container mx-auto px-6">
          <div className="mb-24 text-center">
             <h2 className="text-4xl md:text-7xl font-black uppercase tracking-tighter leading-none mb-6">
               Industry <span className="text-secondary">Sectors.</span>
             </h2>
             <p className="text-xl text-white/40 font-bold uppercase tracking-widest">Serving the Pillars of the UK Automotive Economy</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
             {sectors.map((sector, i) => (
               <div key={i} className="group cursor-pointer">
                  <div className="mb-8 inline-flex h-20 w-20 items-center justify-center bg-white/5 text-secondary group-hover:bg-secondary group-hover:text-white transition-all">
                     <sector.icon size={40} strokeWidth={1.5} />
                  </div>
                  <h4 className="text-2xl font-black uppercase tracking-tight mb-4">{sector.title}</h4>
                  <p className="text-white/40 font-medium leading-relaxed">{sector.desc}</p>
                  <div className="mt-8 h-1 w-0 bg-secondary group-hover:w-full transition-all duration-500" />
               </div>
             ))}
          </div>
        </div>
      </section>

      {/* The Closing Force - Recruitment & Contact */}
      <section id="contact" className="py-0 bg-white border-t-8 border-black">
        <div className="flex flex-col xl:flex-row">
           <div className="xl:w-1/2 p-12 md:p-32 border-r-4 border-black">
              <span className="text-xs font-black text-secondary uppercase tracking-[0.4em] mb-10 block">Operational Intake</span>
              <h2 className="text-7xl md:text-9xl font-black text-black uppercase tracking-tighter leading-[0.8] mb-16">
                Direct <br/> <span className="text-secondary">Line.</span>
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-12">
                 <div className="space-y-4">
                    <div className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Main Logistics Terminal</div>
                    <div className="text-4xl font-black tabular-nums">01506 631133</div>
                    <div className="text-xs font-bold uppercase tracking-tight text-slate-500">7 Days / 24 Hour Ops</div>
                 </div>
                 <div className="space-y-4">
                    <div className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Executive Enquiries</div>
                    <div className="text-xl font-black text-black uppercase break-all">info@a1automotive.co.uk</div>
                 </div>
              </div>
           </div>
           <div className="xl:w-1/2 bg-black text-white p-12 md:p-32 flex flex-col justify-center relative overflow-hidden">
              <div className="absolute top-0 right-0 text-[30rem] font-black text-white/[0.03] leading-none translate-x-1/2 -translate-y-1/2">A1</div>
              <h3 className="text-4xl font-black uppercase mb-12 relative z-10">Recruitment Terminal</h3>
              <p className="text-xl text-white/50 font-bold mb-12 leading-relaxed relative z-10">
                We are actively seeking Class 1 HGV Drivers for our national transporter fleet. Established team, modern equipment, and regional stability.
              </p>
              <Button variant="secondary" className="rounded-none h-20 px-12 font-black tracking-widest text-lg relative z-10 hover:bg-white hover:text-black transition-all">
                APPLY FOR POSITION
              </Button>
           </div>
        </div>
      </section>
    </div>
  );
}
