"use client";

import { motion, useScroll, useTransform, useSpring, useInView } from "framer-motion";
import { Truck, Warehouse, ShieldCheck, Clock, CheckCircle2, ChevronRight, ArrowRight, Gauge, Globe, Award, Activity, Zap, Shield, BarChart3, Users, Map, Briefcase, Info } from "lucide-react";
import { Button } from "@/components/ui/Button";
import Link from "next/link";
import { useRef, useState, useEffect } from "react";

const stats = [
  { label: "Active Fleet", value: "82", suffix: "Units", icon: Truck },
  { label: "Strategic Storage", value: "2,000", suffix: "Slots", icon: Warehouse },
  { label: "Regional Hubs", value: "National", suffix: "Coverage", icon: Globe },
  { label: "Industry Tenure", value: "27", suffix: "Years", icon: Award },
];

const mainServices = [
  {
    id: "01",
    title: "National Vehicle Transport",
    description: "High-capacity logistics network engineered for rapid manufacturer-scale distribution and high-value enclosed movements across the UK & Ireland.",
    features: ["Enclosed Transport", "GPS Telematics", "Fleet Distribution", "Real-time Tracking"],
    icon: Truck,
  },
  {
    id: "02",
    title: "Strategic Vehicle Storage",
    description: "Our 12-acre Bathgate super-hub provides mission-critical storage, inventory management, and technical support for top-tier manufacturers.",
    features: ["Bonded Storage", "24/7 High-Security", "Inventory Portals", "Climate Controlled Options"],
    icon: Warehouse,
  },
  {
    id: "03",
    title: "Technical PDI & Defleet",
    description: "Precision-grade inspections and preparation services ensuring every vehicle meets exacting manufacturer standards before delivery or resale.",
    features: ["Digital Auditing", "Rapid Turnaround", "Repair Services", "Detailing & Prep"],
    icon: ShieldCheck,
  },
];

const specializedSolutions = [
  {
    title: "Fleet Management",
    desc: "End-to-end management for corporate and rental fleets.",
    icon: BarChart3
  },
  {
    title: "Classic & Luxury",
    desc: "Bespoke enclosed transport for high-value assets.",
    icon: Shield
  },
  {
    title: "Dealer Support",
    desc: "Rapid response inventory movements for UK dealerships.",
    icon: Users
  },
  {
    title: "Bulk Relocation",
    desc: "Large scale movements of 100+ units in compressed timeframes.",
    icon: Map
  }
];

const historyMilestones = [
  { year: "1998", event: "A1 Automotive Founded" },
  { year: "2005", event: "Fleet Expansion to 20+ Transporters" },
  { year: "2012", event: "Relocation to 12-Acre Bathgate Hub" },
  { year: "2018", event: "Fleet Milestone: 80+ Specialized Units" },
  { year: "2024", event: "Next-Gen Logistics Tech Integration" }
];

const revealVariants = {
  hidden: { opacity: 0, y: 100, skewY: 2 },
  visible: { 
    opacity: 1, 
    y: 0, 
    skewY: 0,
    transition: { duration: 1, ease: [0.16, 1, 0.3, 1] } 
  }
};

export default function Home() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const heroOpacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);
  const heroScale = useTransform(scrollYProgress, [0, 0.2], [1, 0.9]);
  const bgTextX = useTransform(scrollYProgress, [0, 1], ["0%", "-50%"]);

  return (
    <div className="bg-white selection:bg-secondary selection:text-white overflow-x-hidden" ref={containerRef}>
      
      {/* Cinematic Hero Section - Titan 2.0 */}
      <section className="relative h-screen min-h-[950px] flex items-center overflow-hidden bg-black">
        <motion.div style={{ opacity: heroOpacity, scale: heroScale }} className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,_rgba(227,30,36,0.2)_0%,_transparent_60%)]" />
          <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:80px_80px]" />
        </motion.div>

        {/* Dynamic Massive Background Text */}
        <motion.div 
          style={{ x: bgTextX }}
          className="absolute left-0 bottom-10 text-[45vw] font-black text-white/[0.02] leading-[0.5] select-none pointer-events-none tracking-[20vw] whitespace-nowrap"
        >
          A1AUTOMOTIVE
        </motion.div>

        <div className="container relative z-10 px-6 mx-auto">
          <div className="max-w-7xl">
            <motion.div
              initial="hidden"
              animate="visible"
              variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
            >
              <motion.div variants={revealVariants} className="flex items-center gap-8 mb-16">
                <div className="h-[2px] w-32 bg-secondary" />
                <span className="text-sm font-black tracking-[0.8em] text-white uppercase opacity-80">
                  Market Dominance Since 1998
                </span>
              </motion.div>

              <motion.h1 
                variants={revealVariants}
                className="text-[14vw] md:text-[11vw] font-black text-white leading-[0.7] tracking-tighter uppercase mb-20"
              >
                UNSTOPPABLE <br/> 
                <span className="text-secondary">VELOCITY.</span>
              </motion.h1>

              <div className="grid grid-cols-1 xl:grid-cols-12 gap-16 items-end">
                <motion.div variants={revealVariants} className="xl:col-span-6">
                  <div className="relative">
                    <div className="absolute -left-10 top-0 bottom-0 w-2 bg-secondary" />
                    <p className="text-3xl md:text-4xl font-bold text-white/50 leading-[1.1] tracking-tight">
                      A1 Automotive Ltd is the high-performance engine behind the UK&apos;s most complex vehicle logistics challenges. We operate at the intersection of brute force and surgical precision.
                    </p>
                  </div>
                </motion.div>

                <motion.div variants={revealVariants} className="xl:col-span-6 flex flex-col sm:flex-row gap-8">
                  <Button size="lg" variant="secondary" className="rounded-none h-28 px-20 text-xl font-black tracking-widest group bg-secondary hover:bg-white hover:text-black transition-all duration-700">
                    REQUEST PROPOSAL
                    <ArrowRight className="ml-6 group-hover:translate-x-6 transition-transform" strokeWidth={3} />
                  </Button>
                  <div className="flex flex-col justify-center">
                    <span className="text-[10px] font-black text-white/30 uppercase tracking-[0.5em] mb-2">Network Status</span>
                    <div className="flex items-center gap-3">
                      <div className="h-3 w-3 rounded-full bg-green-500 animate-pulse" />
                      <span className="text-white font-black uppercase text-xs tracking-widest">Global Ops: 100%</span>
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats - Brutalist Design */}
      <section className="bg-black py-0 border-y border-white/10 relative z-20">
        <div className="grid grid-cols-2 lg:grid-cols-4">
          {stats.map((stat, i) => (
            <div key={i} className="p-12 md:p-20 border-r border-white/5 group hover:bg-white transition-all duration-700 relative overflow-hidden">
              <div className="absolute top-0 left-0 w-1 h-full bg-secondary scale-y-0 group-hover:scale-y-100 transition-transform origin-top duration-500" />
              <div className="text-8xl md:text-9xl font-black text-white group-hover:text-black transition-colors tabular-nums tracking-tighter mb-4">
                {stat.value}
              </div>
              <div className="text-xs font-black uppercase tracking-[0.4em] text-secondary group-hover:text-black transition-colors">
                {stat.label} <span className="opacity-40 group-hover:opacity-100">{stat.suffix}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Mission Narrative */}
      <section className="py-40 bg-white">
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row gap-24">
            <div className="lg:w-1/3">
              <h3 className="text-sm font-black text-secondary uppercase tracking-[0.6em] mb-8">Executive Summary</h3>
              <p className="text-xl font-bold text-black leading-snug mb-12">
                We are more than a transport company. We are a mission-critical infrastructure partner for the UK&apos;s £82bn automotive industry.
              </p>
              <div className="space-y-6">
                {historyMilestones.map((m, i) => (
                  <div key={i} className="flex items-center gap-6 group">
                    <span className="text-xs font-black text-black/20 group-hover:text-secondary transition-colors">{m.year}</span>
                    <div className="h-px flex-1 bg-black/5" />
                    <span className="text-[10px] font-black uppercase tracking-widest text-black/40 group-hover:text-black transition-colors">{m.event}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="lg:w-2/3">
              <h2 className="text-8xl md:text-[10rem] font-black text-black leading-[0.8] tracking-tighter uppercase mb-16">
                NATIONAL <br/> <span className="text-secondary">SOVEREIGNTY.</span>
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
                <p className="text-lg font-medium text-black/60 leading-relaxed">
                  Headquartered in Bathgate, A1 Automotive Ltd commands a 12-acre logistical fortress. From this strategic nexus, we project power across the UK and Ireland, ensuring the seamless transition of billions of pounds worth of vehicle assets annually.
                </p>
                <p className="text-lg font-medium text-black/60 leading-relaxed">
                  Our 80-strong transporter fleet is the elite vanguard of UK vehicle movements. Every unit is GPS-tracked, telematics-optimized, and operated by a highly trained team committed to damage-free delivery and absolute punctuality.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Infrastructure - The Nexus */}
      <section id="about" className="py-0 overflow-hidden bg-black text-white">
        <div className="flex flex-col xl:flex-row min-h-[800px]">
          <div className="xl:w-1/2 p-12 md:p-32 flex flex-col justify-center relative">
            <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_20%_20%,_rgba(227,30,36,0.1)_0%,_transparent_50%)]" />
            <motion.span 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              className="text-xs font-black text-secondary uppercase tracking-[1em] mb-12 block"
            >
              The Hub / Bathgate
            </motion.span>
            <h2 className="text-7xl md:text-9xl font-black uppercase tracking-tighter leading-[0.8] mb-16 relative z-10">
              12 ACRE <br/> SUPER <br/> <span className="text-secondary">HUB.</span>
            </h2>
            <div className="space-y-8 relative z-10 max-w-xl">
              <p className="text-2xl font-bold leading-tight">
                Purpose-built to handle 2,000+ units, our facility is the highest-tier automotive hub in Central Scotland.
              </p>
              <div className="grid grid-cols-2 gap-8">
                <div>
                  <div className="text-3xl font-black mb-1 tabular-nums">2,000+</div>
                  <div className="text-[10px] font-black uppercase tracking-widest text-white/40">Secure Slots</div>
                </div>
                <div>
                  <div className="text-3xl font-black mb-1 tabular-nums">24/7</div>
                  <div className="text-[10px] font-black uppercase tracking-widest text-white/40">Armed Response Sec</div>
                </div>
              </div>
              <Button size="lg" variant="outline" className="rounded-none border-white/20 hover:bg-white hover:text-black font-black tracking-widest h-20 px-12 transition-all">
                SITE SPECIFICATIONS
              </Button>
            </div>
          </div>
          <div className="xl:w-1/2 bg-slate-900 grid grid-cols-2 gap-1 p-1">
             <div className="bg-slate-800 flex items-center justify-center font-black text-white/5 uppercase tracking-[2em] -rotate-90">STORAGE</div>
             <div className="bg-secondary flex flex-col justify-end p-12 group cursor-pointer overflow-hidden relative">
                <div className="absolute inset-0 bg-black translate-y-full group-hover:translate-y-0 transition-transform duration-700" />
                <h4 className="text-4xl font-black text-white uppercase leading-none mb-4 relative z-10">PDI <br/> CENTER</h4>
                <p className="text-xs font-bold text-white/60 relative z-10">High-capacity technical prep suites.</p>
             </div>
             <div className="bg-slate-700 aspect-square flex items-center justify-center font-black text-white/5 uppercase tracking-[2em] rotate-90">LOGISTICS</div>
             <div className="bg-white flex flex-col justify-end p-12 group cursor-pointer overflow-hidden relative">
                <div className="absolute inset-0 bg-secondary translate-x-full group-hover:translate-x-0 transition-transform duration-700" />
                <h4 className="text-4xl font-black text-black group-hover:text-white uppercase leading-none mb-4 relative z-10">HQ <br/> OPS</h4>
                <p className="text-xs font-bold text-black/40 group-hover:text-white/60 relative z-10">Mission control center.</p>
             </div>
          </div>
        </div>
      </section>

      {/* Services Grid - Industrial Performance */}
      <section id="services" className="py-40 bg-white">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-end mb-32 gap-12">
            <div className="max-w-5xl">
              <h2 className="text-8xl md:text-[10rem] font-black uppercase tracking-tighter leading-[0.8] text-black">
                CORE <br/> <span className="text-secondary">POWER.</span>
              </h2>
            </div>
            <div className="text-right">
              <div className="text-[10px] font-black text-black uppercase tracking-[0.5em] mb-4">Service Matrix 2024</div>
              <p className="text-black/40 font-bold text-xl max-w-xs ml-auto">
                Scalable logistics solutions for manufacturers, fleets, and dealerships.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {mainServices.map((s, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="group border-t-8 border-black p-12 hover:bg-black transition-all duration-700"
              >
                <div className="text-sm font-black text-secondary mb-12 tabular-nums">ID/{s.id}</div>
                <h3 className="text-4xl font-black uppercase tracking-tight mb-8 text-black group-hover:text-white transition-colors">
                  {s.title}
                </h3>
                <p className="text-black/60 font-bold leading-snug mb-12 group-hover:text-white/60 transition-colors text-lg">
                  {s.description}
                </p>
                <ul className="space-y-4 mb-16">
                  {s.features.map((f, j) => (
                    <li key={j} className="flex items-center gap-4 text-xs font-black uppercase tracking-widest text-black/40 group-hover:text-white/80 transition-colors">
                      <div className="h-1 w-6 bg-secondary" />
                      {f}
                    </li>
                  ))}
                </ul>
                <Link href="#" className="inline-flex items-center gap-6 text-xs font-black uppercase tracking-[0.5em] text-secondary">
                  READ SPECS <ArrowRight size={16} strokeWidth={3} />
                </Link>
              </motion.div>
            ))}
          </div>

          {/* Specialized Sub-Grid */}
          <div className="mt-32 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {specializedSolutions.map((sol, i) => (
              <div key={i} className="bg-black/5 p-10 group hover:bg-secondary transition-colors duration-500">
                <sol.icon className="text-secondary group-hover:text-black mb-8 w-10 h-10 transition-colors" />
                <h5 className="text-xl font-black uppercase mb-4 group-hover:text-white transition-colors">{sol.title}</h5>
                <p className="text-xs font-bold text-black/40 group-hover:text-white/60 transition-colors">{sol.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Recruitment / Careers Section */}
      <section className="py-40 bg-black relative overflow-hidden">
        <div className="container mx-auto px-6 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-24">
            <div className="lg:w-1/2">
              <span className="text-xs font-black text-secondary uppercase tracking-[0.5em] mb-10 block">Join the Vanguard</span>
              <h2 className="text-7xl md:text-9xl font-black text-white uppercase tracking-tighter leading-[0.8] mb-12">
                WORK <br/> <span className="text-secondary">HERE.</span>
              </h2>
              <p className="text-2xl font-bold text-white/40 mb-12 leading-tight">
                We are continually expanding and looking for professional drivers and logistical experts to join our Bathgate-based elite team.
              </p>
              <div className="flex flex-wrap gap-8">
                <Button size="lg" className="rounded-none h-20 px-16 bg-white text-black font-black hover:bg-secondary hover:text-white transition-all">
                  VIEW VACANCIES
                </Button>
                <div className="flex flex-col justify-center">
                  <span className="text-[10px] font-black text-white/40 uppercase tracking-widest">Driver Hotline</span>
                  <span className="text-xl font-black text-white tracking-widest uppercase">Careers@A1</span>
                </div>
              </div>
            </div>
            <div className="lg:w-1/2 relative">
               <div className="aspect-video bg-white/5 border border-white/10 flex items-center justify-center font-black text-white/5 text-9xl tracking-[0.2em]">JOIN</div>
               <div className="absolute -bottom-10 -left-10 bg-secondary p-12 text-white">
                 <div className="text-5xl font-black">27+</div>
                 <div className="text-[10px] font-black uppercase tracking-widest opacity-80">Years Excellence</div>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* Massive Final CTA Terminal */}
      <section id="contact" className="py-0 bg-white">
        <div className="flex flex-col lg:flex-row">
           <div className="lg:w-3/5 p-12 md:p-32 bg-white text-black flex flex-col justify-center border-b lg:border-b-0 lg:border-r border-black">
              <h2 className="text-8xl md:text-[12rem] font-black uppercase tracking-tighter leading-[0.7] mb-20">
                INITIATE <br/> <span className="text-secondary">SYSTEM.</span>
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
                 <div>
                    <div className="text-[10px] font-black text-secondary uppercase tracking-[0.6em] mb-6">Contact Matrix</div>
                    <div className="space-y-4">
                       <div className="flex items-center gap-6 group">
                          <Phone className="text-secondary" />
                          <span className="text-3xl font-black tabular-nums">01506 631133</span>
                       </div>
                       <div className="flex items-center gap-6 group">
                          <Mail className="text-secondary" />
                          <span className="text-xl font-bold uppercase tracking-tight">info@a1automotive.co.uk</span>
                       </div>
                    </div>
                 </div>
                 <div>
                    <div className="text-[10px] font-black text-secondary uppercase tracking-[0.6em] mb-6">Headquarters</div>
                    <p className="text-xl font-black leading-tight uppercase">
                       12 Blackburn Road<br/>
                       Bathgate, EH48 2EY<br/>
                       Central Scotland
                    </p>
                 </div>
              </div>
           </div>
           <div className="lg:w-2/5 bg-secondary flex flex-col justify-center items-center group cursor-pointer overflow-hidden relative min-h-[600px]">
              <div className="absolute inset-0 bg-black -translate-y-full group-hover:translate-y-0 transition-transform duration-700" />
              <div className="text-center relative z-10 px-12">
                <span className="text-xs font-black text-white uppercase tracking-[1em] mb-12 block">Secure Terminal</span>
                <h4 className="text-white font-black text-[10vw] lg:text-[6vw] uppercase leading-none tracking-tighter mb-12">
                  SECURE <br/> QUOTE
                </h4>
                <div className="h-24 w-24 rounded-full border-4 border-white flex items-center justify-center mx-auto group-hover:scale-125 transition-transform duration-500">
                  <ArrowRight size={48} className="text-white group-hover:translate-x-4 transition-transform duration-500" strokeWidth={4} />
                </div>
              </div>
           </div>
        </div>
      </section>
    </div>
  );
}
