"use client";

import { motion } from "framer-motion";
import { Truck, Warehouse, ShieldCheck, Award, Map, ArrowRight, Shield, HardHat, CheckCircle2, ChevronRight, Activity } from "lucide-react";
import { Button } from "@/components/ui/Button";
import Link from "next/link";
import { useRef } from "react";

const services = [
  {
    title: "Vehicle Transport",
    desc: "National UK & Ireland distribution for manufacturers and fleets.",
    href: "/transport",
    icon: Truck,
    id: "01"
  },
  {
    title: "Vehicle Storage",
    desc: "12-acre high-security hub with 2,000+ unit capacity.",
    href: "/storage",
    icon: Warehouse,
    id: "02"
  },
  {
    title: "PDI & Defleet",
    desc: "Precision technical preparation and end-of-lease management.",
    href: "/pdi",
    icon: ShieldCheck,
    id: "03"
  }
];

export default function Home() {
  return (
    <div className="bg-white selection:bg-secondary selection:text-white overflow-x-hidden">
      
      {/* 1. CINEMATIC HERO: THE POWER ANCHOR */}
      <section className="relative h-screen flex items-center bg-black overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-40">
           <img 
             src="https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?q=80&w=2070&auto=format&fit=crop" 
             alt="Car Transporter" 
             className="w-full h-full object-cover grayscale"
           />
           <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
        </div>

        <div className="container relative z-10 px-6 mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="flex items-center gap-6 mb-12">
               <div className="h-px w-20 bg-secondary" />
               <span className="text-xs md:text-sm font-black tracking-[0.5em] text-white/80 uppercase">
                 National Vehicle Logistics
               </span>
            </div>

            <h1 className="text-6xl md:text-[10rem] font-black text-white leading-[0.8] tracking-tighter uppercase mb-16">
              Strategic <br/> <span className="text-secondary italic">Infrastructure.</span>
            </h1>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-end">
               <div className="lg:col-span-7">
                  <p className="text-2xl md:text-4xl font-black text-white/40 leading-none uppercase tracking-tighter border-l-8 border-secondary pl-10">
                    80+ Transporters. <br/> 12-Acre Secure Hub. <br/> 27 Years of Reliability.
                  </p>
               </div>
               <div className="lg:col-span-5">
                  <Link href="/contact">
                    <Button size="lg" variant="secondary" className="rounded-none h-24 px-16 font-black tracking-widest text-lg group bg-secondary hover:bg-white hover:text-black transition-all duration-500 w-full lg:w-auto">
                      INITIATE PROPOSAL <ArrowRight className="ml-4 group-hover:translate-x-4 transition-transform" />
                    </Button>
                  </Link>
               </div>
            </div>
          </motion.div>
        </div>

        {/* Status Marquee */}
        <div className="absolute bottom-0 w-full bg-secondary py-4 overflow-hidden border-y border-black">
           <motion.div 
             animate={{ x: [0, -1000] }}
             transition={{ repeat: Infinity, duration: 30, ease: "linear" }}
             className="flex whitespace-nowrap gap-20 items-center"
           >
              {[...Array(10)].map((_, i) => (
                <div key={i} className="flex items-center gap-8">
                   <span className="text-sm font-black text-black uppercase tracking-widest">Fleet Active: 100%</span>
                   <Activity size={16} className="text-white" />
                   <span className="text-sm font-black text-black uppercase tracking-widest">Capacity: UK Wide</span>
                   <Activity size={16} className="text-white" />
                </div>
              ))}
           </motion.div>
        </div>
      </section>

      {/* 2. THE SERVICES: GATEWAY GRID */}
      <section id="services" className="py-40 bg-white">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-end mb-24 gap-8">
             <h2 className="text-6xl md:text-8xl font-black uppercase tracking-tighter text-black leading-none">
                Our <span className="text-secondary italic">Core.</span>
             </h2>
             <p className="text-black/30 font-bold uppercase tracking-[0.2em] text-xs max-w-xs text-right italic">
               Providing mission-critical logistical support for the UK automotive economy.
             </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-1">
             {services.map((s, i) => (
               <Link href={s.href} key={i} className="group">
                 <div className="bg-[#f9f9f9] p-16 h-full flex flex-col justify-between border border-black/5 hover:bg-black transition-all duration-700 relative overflow-hidden">
                    <div className="absolute top-0 right-0 p-8 text-6xl font-black text-black/5 group-hover:text-white/5 transition-colors">{s.id}</div>
                    <div>
                       <s.icon className="text-secondary mb-12 w-12 h-12" strokeWidth={1.5} />
                       <h3 className="text-4xl font-black uppercase tracking-tighter text-black group-hover:text-white transition-colors mb-6">{s.title}</h3>
                       <p className="text-black/40 font-bold uppercase text-[10px] tracking-widest group-hover:text-white/40 transition-colors leading-relaxed">
                          {s.desc}
                       </p>
                    </div>
                    <div className="mt-12 flex items-center gap-4 text-xs font-black text-secondary uppercase tracking-[0.4em] opacity-0 group-hover:opacity-100 transition-all group-hover:translate-x-4">
                       Explore <ArrowRight size={14} />
                    </div>
                 </div>
               </Link>
             ))}
          </div>
        </div>
      </section>

      {/* 3. THE HUB: SCALE SECTION */}
      <section id="about" className="py-40 bg-black text-white relative overflow-hidden">
        <div className="container mx-auto px-6 relative z-10">
          <div className="flex flex-col lg:flex-row gap-32 items-center">
             <div className="lg:w-1/2">
                <span className="text-xs font-black text-secondary uppercase tracking-[0.5em] mb-12 block">The Nexus / Bathgate</span>
                <h2 className="text-7xl md:text-9xl font-black uppercase tracking-tighter leading-[0.8] mb-16">
                   12 ACRE <br/> <span className="text-secondary italic">Fortress.</span>
                </h2>
                <p className="text-2xl font-bold text-white/40 uppercase leading-tight mb-16 max-w-xl">
                   Centrally located in Scotland, our hub is the primary distribution terminal for the UK&apos;s leading manufacturers.
                </p>
                <div className="grid grid-cols-2 gap-10">
                   <div>
                      <div className="text-5xl font-black mb-2 tabular-nums">2,000+</div>
                      <div className="text-[10px] font-black uppercase tracking-widest text-secondary">Unit Capacity</div>
                   </div>
                   <div>
                      <div className="text-5xl font-black mb-2 tabular-nums">24/7</div>
                      <div className="text-[10px] font-black uppercase tracking-widest text-secondary">Secured Site</div>
                   </div>
                </div>
             </div>
             <div className="lg:w-1/2">
                <div className="aspect-square bg-white/5 border border-white/10 flex items-center justify-center p-20 group relative overflow-hidden">
                   <div className="absolute inset-0 bg-secondary translate-y-full group-hover:translate-y-0 transition-transform duration-700" />
                   <Warehouse size={120} className="text-secondary group-hover:text-white transition-all relative z-10" strokeWidth={1} />
                   <h4 className="absolute bottom-10 left-10 text-xl font-black uppercase tracking-[0.4em] opacity-20 group-hover:opacity-100 group-hover:text-white transition-all">Hub Specs</h4>
                </div>
             </div>
          </div>
        </div>
      </section>

      {/* 4. THE CLOSER: INSTITUTIONAL CTA */}
      <section className="py-60 bg-[#f4f4f4] text-center">
         <div className="container mx-auto px-6">
            <h2 className="text-7xl md:text-[10rem] font-black text-black uppercase tracking-tighter leading-[0.7] mb-20">
               Direct <br/> <span className="text-secondary italic">Access.</span>
            </h2>
            <div className="max-w-4xl mx-auto space-y-16">
               <p className="text-3xl font-black text-black/20 uppercase tracking-tight leading-none">
                 Contact our regional operations team to discuss large-scale transport and storage contracts.
               </p>
               <div className="flex flex-wrap justify-center gap-10">
                  <Link href="/contact">
                    <Button size="lg" className="rounded-none h-24 px-20 bg-black text-white font-black tracking-[0.5em] text-sm hover:bg-secondary transition-all">
                       OPEN ENQUIRY
                    </Button>
                  </Link>
                  <div className="flex flex-col items-center justify-center border-l-2 border-black/10 pl-10 text-left">
                     <span className="text-[10px] font-black text-black/40 uppercase tracking-widest mb-1">Central Hotline</span>
                     <span className="text-2xl font-black text-black tabular-nums">01506 631133</span>
                  </div>
               </div>
            </div>
         </div>
      </section>
    </div>
  );
}
