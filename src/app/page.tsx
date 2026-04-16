"use client";

import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { Truck, Warehouse, ShieldCheck, Award, Map, Phone, Mail, CheckCircle2, ArrowRight, Gauge, Globe, Shield, Factory, Building2, UserCheck, HardHat, Briefcase, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/Button";
import Link from "next/link";
import { useRef, useEffect, useState } from "react";

const fleet = [
  { id: "01", name: "The Multi-Car Titan", capacity: "11-12 Vehicles", use: "Manufacturer Trunking" },
  { id: "02", name: "The Regional Fleet", capacity: "6 Vehicles", use: "Dealership Distribution" },
  { id: "03", name: "The Enclosed Elite", capacity: "2 Vehicles", use: "High-Value & Classic" },
  { id: "04", name: "The Rapid Response", capacity: "1-2 Vehicles", use: "Private Collection" },
];

const serviceNarrative = [
  {
    step: "01",
    title: "Collection",
    desc: "National UK & Ireland reach. Every unit GPS-tracked and handled by elite-trained specialists.",
    icon: Truck
  },
  {
    step: "02",
    title: "Storage",
    desc: "2,000+ unit capacity at our 12-acre Bathgate hub. 24/7 high-security bonded facility.",
    icon: Warehouse
  },
  {
    step: "03",
    title: "PDI & Prep",
    desc: "Technical inspection suites ensuring manufacturer-standard preparation for every asset.",
    icon: ShieldCheck
  },
  {
    step: "04",
    title: "Delivery",
    desc: "Surgical precision in final distribution, providing damage-free, on-time asset arrival.",
    icon: Map
  }
];

const revealVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } 
  }
};

export default function Home() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const springScroll = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });
  const bgScale = useTransform(springScroll, [0, 0.2], [1.1, 1]);
  const heroOpacity = useTransform(springScroll, [0, 0.2], [1, 0]);

  return (
    <div className="bg-white selection:bg-secondary selection:text-white" ref={containerRef}>
      
      {/* 1. CINEMATIC HERO: THE BRAND REVEAL */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden bg-[#fafafa]">
        <motion.div style={{ scale: bgScale }} className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(227,30,36,0.03)_0%,_transparent_70%)]" />
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#eeeeee_1px,transparent_1px),linear-gradient(to_bottom,#eeeeee_1px,transparent_1px)] bg-[size:100px_100px]" />
        </motion.div>

        <div className="container relative z-10 px-6 mx-auto text-center">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={{ visible: { transition: { staggerChildren: 0.15 } } }}
            className="flex flex-col items-center"
          >
            <motion.div variants={revealVariants} className="mb-12 flex items-baseline font-black tracking-[-0.08em] text-[15vw] md:text-[10vw] leading-none">
              <span className="text-black">A</span>
              <span className="text-secondary">1</span>
            </motion.div>

            <motion.div variants={revealVariants} className="max-w-4xl">
              <h1 className="text-4xl md:text-6xl font-black uppercase tracking-tighter text-black leading-tight mb-8">
                The Architecture of <br/> 
                <span className="text-secondary">Precision Logistics.</span>
              </h1>
              <p className="text-xl md:text-2xl font-bold text-black/30 uppercase tracking-[0.2em] mb-12">
                UK & Ireland • Est. 1998 • Bathgate Hub
              </p>
            </motion.div>

            <motion.div variants={revealVariants} className="flex gap-4">
              <Button size="lg" variant="secondary" className="rounded-none h-20 px-16 font-black tracking-widest text-sm hover:scale-105 transition-transform active:scale-95">
                DISCOVER THE FLEET
              </Button>
            </motion.div>
          </motion.div>
        </div>

        {/* Minimal Scroll Line */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4">
          <motion.div 
            animate={{ height: [0, 60, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
            className="w-[2px] bg-secondary"
          />
          <span className="text-[10px] font-black uppercase tracking-[0.5em] text-black/20">Scroll</span>
        </div>
      </section>

      {/* 2. THE JOURNEY: FOUR PILLARS OF EXCELLENCE */}
      <section className="py-40 bg-white border-y border-black/5">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-0 divide-x divide-black/5 border border-black/5">
            {serviceNarrative.map((item, i) => (
              <motion.div 
                key={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={revealVariants}
                className="p-16 group hover:bg-black transition-colors duration-700 relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 p-8 text-8xl font-black text-black/[0.03] group-hover:text-white/[0.03] transition-colors leading-none">
                  {item.step}
                </div>
                <div className="relative z-10">
                   <item.icon className="text-secondary mb-12 w-12 h-12" strokeWidth={1.5} />
                   <h3 className="text-3xl font-black uppercase tracking-tighter mb-6 text-black group-hover:text-white transition-colors">
                     {item.title}
                   </h3>
                   <p className="text-black/50 font-medium leading-relaxed group-hover:text-white/50 transition-colors">
                     {item.desc}
                   </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. THE HUB: 12-ACRE BLUEPRINT */}
      <section id="about" className="py-40 bg-[#f4f4f4] relative overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row gap-32 items-center">
            <div className="lg:w-1/2">
              <span className="text-xs font-black text-secondary uppercase tracking-[0.6em] mb-10 block">Mission Control / Bathgate</span>
              <h2 className="text-7xl md:text-9xl font-black text-black uppercase tracking-tighter leading-[0.8] mb-16">
                THE <br/> <span className="text-secondary">Nexus.</span>
              </h2>
              <div className="space-y-12">
                <div className="flex gap-8 group">
                  <div className="text-5xl font-black text-black group-hover:text-secondary transition-colors tabular-nums">12</div>
                  <div>
                    <h4 className="text-lg font-black uppercase tracking-tight text-black">Acres of High-Security Compound</h4>
                    <p className="text-black/40 font-medium">Capable of managing 2,000+ vehicle assets with surgical organization.</p>
                  </div>
                </div>
                <div className="flex gap-8 group">
                  <div className="text-5xl font-black text-black group-hover:text-secondary transition-colors tabular-nums">80</div>
                  <div>
                    <h4 className="text-lg font-black uppercase tracking-tight text-black">Specialized Transporter Units</h4>
                    <p className="text-black/40 font-medium">A diverse national fleet optimized for every automotive logistical requirement.</p>
                  </div>
                </div>
                <div className="flex gap-8 group">
                  <div className="text-5xl font-black text-black group-hover:text-secondary transition-colors tabular-nums">27</div>
                  <div>
                    <h4 className="text-lg font-black uppercase tracking-tight text-black">Years of Market Authority</h4>
                    <p className="text-black/40 font-medium">Founded in 1998, A1 is the backbone of UK vehicle asset management.</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="lg:w-1/2 relative">
               <div className="aspect-square bg-white shadow-2xl p-12 flex flex-col justify-center border border-black/5">
                  <div className="flex-1 border-b border-black/5 flex flex-col justify-center">
                    <span className="text-[10px] font-black text-secondary uppercase tracking-[0.4em] mb-4">Compound Overview</span>
                    <div className="flex items-end justify-between">
                       <h4 className="text-5xl font-black uppercase tracking-tighter">Secure Storage</h4>
                       <span className="text-4xl font-black tabular-nums text-black/5">2000+</span>
                    </div>
                  </div>
                  <div className="flex-1 border-b border-black/5 flex flex-col justify-center">
                    <span className="text-[10px] font-black text-secondary uppercase tracking-[0.4em] mb-4">Technical Facility</span>
                    <div className="flex items-end justify-between">
                       <h4 className="text-5xl font-black uppercase tracking-tighter">PDI Suites</h4>
                       <span className="text-4xl font-black tabular-nums text-black/5">08 Bays</span>
                    </div>
                  </div>
                  <div className="flex-1 flex flex-col justify-center">
                    <span className="text-[10px] font-black text-secondary uppercase tracking-[0.4em] mb-4">Global Ops Center</span>
                    <div className="flex items-end justify-between">
                       <h4 className="text-5xl font-black uppercase tracking-tighter">HQ Control</h4>
                       <span className="text-4xl font-black tabular-nums text-black/5">24/7</span>
                    </div>
                  </div>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. THE FLEET: PRODUCT SHOWCASE STYLE */}
      <section id="fleet" className="py-40 bg-white">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-end mb-32 gap-12">
            <h2 className="text-6xl md:text-8xl font-black uppercase tracking-tighter text-black leading-none">
              THE <br/> <span className="text-secondary">FLEET.</span>
            </h2>
            <p className="text-black/40 font-bold uppercase tracking-[0.2em] text-right">Precision Hardware for National Distribution</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {fleet.map((unit, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="group relative"
              >
                <div className="aspect-[4/5] bg-[#f9f9f9] border border-black/5 flex flex-col justify-end p-12 transition-all group-hover:bg-black group-hover:border-black duration-700">
                   <div className="text-[10vw] font-black text-black/5 absolute top-0 left-0 p-8 leading-none transition-colors group-hover:text-white/5">{unit.id}</div>
                   <div className="relative z-10">
                      <div className="text-xs font-black text-secondary uppercase tracking-widest mb-4">{unit.capacity}</div>
                      <h4 className="text-3xl font-black uppercase tracking-tighter text-black group-hover:text-white transition-colors mb-4">{unit.name}</h4>
                      <p className="text-black/40 font-medium group-hover:text-white/40 transition-colors uppercase text-[10px] tracking-widest leading-relaxed">
                        Optimized for {unit.use}
                      </p>
                   </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. THE CLOSER: MODERN MINIMAL CONTACT */}
      <section id="contact" className="py-40 bg-black text-white relative overflow-hidden">
        <div className="container mx-auto px-6 text-center relative z-10">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={revealVariants}
          >
            <h2 className="text-6xl md:text-[12rem] font-black uppercase tracking-tighter leading-[0.8] mb-20">
              Initiate <br/> <span className="text-secondary">Protocol.</span>
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-20 mb-32">
              <div className="flex flex-col items-center">
                 <div className="h-20 w-20 rounded-full border border-white/10 flex items-center justify-center mb-8 hover:bg-secondary hover:border-secondary transition-all cursor-pointer">
                    <Phone className="w-8 h-8" />
                 </div>
                 <span className="text-[10px] font-black uppercase tracking-[0.5em] text-white/40 mb-2">Direct Terminal</span>
                 <span className="text-3xl font-black tabular-nums">01506 631133</span>
              </div>
              <div className="flex flex-col items-center">
                 <div className="h-20 w-20 rounded-full border border-white/10 flex items-center justify-center mb-8 hover:bg-secondary hover:border-secondary transition-all cursor-pointer">
                    <Mail className="w-8 h-8" />
                 </div>
                 <span className="text-[10px] font-black uppercase tracking-[0.5em] text-white/40 mb-2">Secure Email</span>
                 <span className="text-xl font-black uppercase">info@a1automotive.co.uk</span>
              </div>
              <div className="flex flex-col items-center">
                 <div className="h-20 w-20 rounded-full border border-white/10 flex items-center justify-center mb-8 hover:bg-secondary hover:border-secondary transition-all cursor-pointer">
                    <Map className="w-8 h-8" />
                 </div>
                 <span className="text-[10px] font-black uppercase tracking-[0.5em] text-white/40 mb-2">Regional HQ</span>
                 <span className="text-sm font-black uppercase tracking-widest leading-relaxed">
                    12 Blackburn Road<br/>Bathgate, EH48 2EY
                 </span>
              </div>
            </div>

            <Button size="lg" variant="secondary" className="rounded-none h-24 px-20 font-black tracking-[0.4em] text-lg hover:bg-white hover:text-black transition-all">
               REQUEST BESPOKE QUOTE
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
