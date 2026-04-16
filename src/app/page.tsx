"use client";

import { motion, useScroll, useTransform, useSpring, useInView } from "framer-motion";
import { Truck, Warehouse, ShieldCheck, Award, Map, Phone, Mail, CheckCircle2, ArrowRight, Globe, Shield, Factory, Building2, UserCheck, HardHat, Briefcase, ChevronRight, Activity, Zap, Box, Compass, Scan, Database } from "lucide-react";
import { Button } from "@/components/ui/Button";
import Link from "next/link";
import { useRef, useEffect, useState } from "react";

// --- Components ---

const SectionReveal = ({ children, direction = "up" }: any) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-10%" });
  
  const variants = {
    hidden: { 
      opacity: 0, 
      y: direction === "up" ? 50 : 0,
      clipPath: "inset(100% 0% 0% 0%)" 
    },
    visible: { 
      opacity: 1, 
      y: 0, 
      clipPath: "inset(0% 0% 0% 0%)",
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } 
    }
  };

  return (
    <motion.div ref={ref} initial="hidden" animate={isInView ? "visible" : "hidden"} variants={variants}>
      {children}
    </motion.div>
  );
};

// --- Page ---

export default function Home() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const springScroll = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });
  const heroScale = useTransform(springScroll, [0, 0.2], [1, 0.9]);

  return (
    <div className="bg-white selection:bg-secondary selection:text-white overflow-x-hidden font-sans" ref={containerRef}>
      
      {/* 1. THE POWER REVEAL: HERO */}
      <section className="relative h-screen min-h-[850px] flex items-center bg-black overflow-hidden">
        {/* Industrial Grid Overlay */}
        <div className="absolute inset-0 z-0 opacity-20 pointer-events-none">
           <div className="absolute inset-0 bg-grid-white/[0.05] bg-[size:50px_50px]" />
           <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,_rgba(227,30,36,0.1)_0%,_transparent_60%)]" />
        </div>

        <div className="container relative z-10 px-6 mx-auto">
          <motion.div 
            style={{ scale: heroScale }}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="flex items-center gap-6 mb-12">
               <div className="h-px w-20 bg-secondary" />
               <span className="text-sm font-black tracking-[0.6em] text-white uppercase opacity-80">
                 UK & Ireland Vehicle Logistics
               </span>
            </div>

            <h1 className="text-6xl md:text-[10rem] font-black text-white leading-[0.8] tracking-tighter uppercase mb-16">
              National <br/> <span className="text-secondary italic">Power.</span>
            </h1>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-end">
               <div className="lg:col-span-7">
                  <p className="text-2xl md:text-4xl font-bold text-white/40 leading-tight border-l-8 border-secondary pl-10">
                    A1 Automotive Ltd is the high-capacity infrastructure partner for the UK&apos;s leading manufacturers and fleet operators. 
                  </p>
               </div>
               <div className="lg:col-span-5">
                  <div className="flex flex-col sm:flex-row gap-8">
                    <Button size="lg" variant="secondary" className="rounded-none h-24 px-16 font-black tracking-widest text-lg group bg-secondary hover:bg-white hover:text-black transition-all duration-500">
                      REQUEST QUOTE
                      <ArrowRight className="ml-4 group-hover:translate-x-4 transition-transform" />
                    </Button>
                  </div>
               </div>
            </div>
          </motion.div>
        </div>

        {/* Technical Data Sidebar */}
        <div className="absolute right-10 top-0 bottom-0 w-px bg-white/10 hidden xl:flex flex-col items-center justify-center gap-20">
           <div className="rotate-90 whitespace-nowrap text-[10px] font-black text-white/20 uppercase tracking-[0.5em]">Fleet Capacity: 82 Units</div>
           <div className="h-20 w-px bg-secondary" />
           <div className="rotate-90 whitespace-nowrap text-[10px] font-black text-white/20 uppercase tracking-[0.5em]">Storage: 12 Acres</div>
        </div>
      </section>

      {/* 2. THE STATS: HARD DATA */}
      <section className="bg-black py-0 border-y border-white/10 relative z-20">
        <div className="grid grid-cols-2 lg:grid-cols-4">
           {[
             { label: "Active Fleet", value: "80+", detail: "Specialized Units" },
             { label: "Storage Hub", value: "12", detail: "Acre Facility" },
             { label: "Market Tenure", value: "27", detail: "Years Operating" },
             { label: "Security Tier", value: "Elite", detail: "Bonded Storage" }
           ].map((stat, i) => (
             <div key={i} className="p-16 border-r border-white/5 group hover:bg-white transition-all duration-700">
                <div className="text-6xl md:text-8xl font-black text-white group-hover:text-black transition-colors tabular-nums tracking-tighter mb-4">{stat.value}</div>
                <div className="text-[10px] font-black uppercase tracking-[0.4em] text-secondary group-hover:text-black transition-colors">{stat.label}</div>
                <div className="text-[10px] font-bold text-white/20 uppercase tracking-widest mt-2 group-hover:text-black/40 transition-colors">{stat.detail}</div>
             </div>
           ))}
        </div>
      </section>

      {/* 3. THE HUB: STRATEGIC INFRASTRUCTURE */}
      <section id="about" className="py-40 bg-white relative">
        <div className="container mx-auto px-6">
          <SectionReveal>
            <div className="flex flex-col lg:flex-row gap-32 items-center">
               <div className="lg:w-1/2">
                  <span className="text-xs font-black text-secondary uppercase tracking-[0.8em] mb-12 block">Mission Control • Bathgate</span>
                  <h2 className="text-7xl md:text-[9rem] font-black text-black uppercase tracking-tighter leading-[0.8] mb-16">
                    Logistical <br/> <span className="text-secondary italic">Fortress.</span>
                  </h2>
                  <p className="text-2xl font-bold text-black/40 uppercase leading-tight mb-16 max-w-xl">
                    Our 12-acre primary hub is a high-security, purpose-built facility engineered to manage over 2,000 vehicle assets with surgical precision.
                  </p>
                  <Button variant="outline" className="rounded-none border-2 border-black h-20 px-12 font-black tracking-[0.4em] text-xs hover:bg-black hover:text-white transition-all">
                    SITE SPECIFICATIONS
                  </Button>
               </div>
               <div className="lg:w-1/2 w-full grid grid-cols-2 gap-4">
                  <div className="aspect-[4/5] bg-slate-900 flex flex-col justify-end p-10 group relative overflow-hidden">
                     <div className="absolute top-0 right-0 p-8 text-6xl font-black text-white/5">01</div>
                     <h4 className="text-2xl font-black text-white uppercase leading-none mb-4 relative z-10">Secure <br/> Storage</h4>
                     <p className="text-[10px] font-bold text-white/40 uppercase tracking-widest relative z-10">Bonded & Monitored</p>
                  </div>
                  <div className="aspect-[4/5] bg-slate-100 flex flex-col justify-end p-10 group relative overflow-hidden pt-20">
                     <div className="absolute top-0 right-0 p-8 text-6xl font-black text-black/5">02</div>
                     <h4 className="text-2xl font-black text-black uppercase leading-none mb-4 relative z-10">PDI <br/> Suites</h4>
                     <p className="text-[10px] font-bold text-black/40 uppercase tracking-widest relative z-10">Technical Prep</p>
                  </div>
                  <div className="aspect-square bg-slate-50 col-span-2 flex items-center justify-center border border-black/5">
                     <span className="text-[10px] font-black uppercase tracking-[1em] text-black/10">Facility Overview Map</span>
                  </div>
               </div>
            </div>
          </SectionReveal>
        </div>
      </section>

      {/* 4. THE FLEET: HIGH-CAPACITY ASSETS */}
      <section id="fleet" className="py-40 bg-black text-white relative">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-end mb-32 gap-12">
            <h2 className="text-7xl md:text-[10rem] font-black uppercase tracking-tighter leading-[0.8]">
              The <br/> <span className="text-secondary italic">Fleet.</span>
            </h2>
            <div className="text-right max-w-sm">
               <div className="h-1 w-20 bg-secondary ml-auto mb-8" />
               <p className="text-white/40 font-bold uppercase tracking-[0.2em] text-xs leading-loose italic">
                 "Our modern fleet of 80+ transporters is the backbone of national distribution, engineered for zero-defect delivery."
               </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { id: "M-12", title: "Bulk Multi-Car", spec: "12-Car Capacity" },
              { id: "R-06", title: "Regional Units", spec: "6-Car Capacity" },
              { id: "E-02", title: "Enclosed Elite", spec: "Bespoke Transport" },
              { id: "S-01", title: "Rapid Asset", spec: "Single Collection" }
            ].map((unit, i) => (
              <motion.div 
                key={i}
                whileHover={{ y: -20 }}
                className="p-12 border border-white/10 hover:border-secondary transition-all group cursor-pointer"
              >
                <div className="text-[10px] font-black text-secondary mb-16 uppercase tracking-[0.5em]">{unit.id}</div>
                <h4 className="text-3xl font-black uppercase tracking-tight mb-4">{unit.title}</h4>
                <p className="text-white/30 font-bold text-[10px] uppercase tracking-widest">{unit.spec}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. SERVICES: THE MISSION JOURNEY */}
      <section id="services" className="py-40 bg-white">
        <div className="container mx-auto px-6">
           <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
              {[
                { phase: "01", t: "Collection", d: "National UK & Ireland reach with GPS-tracked elite fleets." },
                { phase: "02", t: "Logistics Hub", d: "Strategic storage and technical prep at our Scottish Nexus." },
                { phase: "03", t: "Final Delivery", d: "Precision distribution to dealerships and end-users." }
              ].map((service, i) => (
                <div key={i} className="group cursor-pointer">
                   <div className="flex items-center gap-4 mb-10">
                      <span className="text-xs font-black text-secondary tabular-nums">PHASE/{service.phase}</span>
                      <div className="h-px flex-1 bg-black/5" />
                   </div>
                   <h3 className="text-4xl font-black uppercase tracking-tighter mb-6 group-hover:text-secondary transition-colors">{service.t}</h3>
                   <p className="text-lg font-bold text-black/30 uppercase leading-snug">{service.d}</p>
                </div>
              ))}
           </div>
        </div>
      </section>

      {/* 6. CAREERS: JOIN THE ELITE */}
      <section className="py-60 bg-[#f8f8f8] text-center overflow-hidden relative">
         <div className="absolute inset-0 z-0 text-[30vw] font-black text-black/[0.02] leading-none select-none pointer-events-none">DRIVE</div>
         <div className="container mx-auto px-6 relative z-10">
            <h2 className="text-7xl md:text-[10rem] font-black text-black uppercase tracking-tighter leading-[0.7] mb-12">
               Command <br/> <span className="text-secondary italic">The Fleet.</span>
            </h2>
            <div className="max-w-3xl mx-auto">
               <p className="text-2xl font-black text-black/30 uppercase tracking-tight mb-16 leading-none">
                 We are actively recruiting Class 1 HGV Drivers for our national transporter network.
               </p>
               <Button size="lg" className="rounded-none h-24 px-20 bg-black text-white font-black tracking-[0.5em] text-xs hover:bg-secondary transition-all">
                  VIEW VACANCIES
               </Button>
            </div>
         </div>
      </section>

      {/* 7. CONTACT: THE TERMINAL */}
      <section id="contact" className="py-0 bg-black text-white">
         <div className="flex flex-col lg:flex-row min-h-[600px]">
            <div className="lg:w-3/5 p-12 md:p-32 flex flex-col justify-center border-r border-white/5">
               <h2 className="text-7xl md:text-[10rem] font-black uppercase tracking-tighter leading-[0.7] mb-20">
                  Initiate <br/> <span className="text-secondary italic">Now.</span>
               </h2>
               <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
                  <div>
                     <span className="text-[10px] font-black text-secondary uppercase tracking-[0.6em] mb-4 block">Central Terminal</span>
                     <div className="text-5xl font-black tabular-nums">01506 631133</div>
                  </div>
                  <div>
                     <span className="text-[10px] font-black text-secondary uppercase tracking-[0.6em] mb-4 block">Corporate HQ</span>
                     <div className="text-lg font-bold uppercase tracking-tight">12 Blackburn Road, Bathgate, EH48 2EY</div>
                  </div>
               </div>
            </div>
            <div className="lg:w-2/5 bg-secondary flex flex-col justify-center items-center group cursor-pointer overflow-hidden relative">
               <div className="absolute inset-0 bg-white -translate-y-full group-hover:translate-y-0 transition-transform duration-1000" />
               <div className="relative z-10 text-center">
                  <h3 className="text-white group-hover:text-black font-black text-[12vw] lg:text-[8vw] uppercase leading-none tracking-tighter mb-12 transition-colors duration-700">
                    GET <br/> QUOTE
                  </h3>
                  <div className="h-32 w-32 rounded-full border-4 border-white group-hover:border-black flex items-center justify-center mx-auto transition-all duration-700">
                    <ArrowRight size={64} className="text-white group-hover:text-black group-hover:translate-x-4 transition-all duration-700" strokeWidth={4} />
                  </div>
               </div>
            </div>
         </div>
      </section>
    </div>
  );
}
