"use client";

import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { Truck, Warehouse, ShieldCheck, Clock, CheckCircle2, ChevronRight, ArrowRight, Gauge, Globe, Award, Activity, Zap } from "lucide-react";
import { Button } from "@/components/ui/Button";
import Link from "next/link";
import { useRef } from "react";

const stats = [
  { label: "Active Fleet", value: "82", suffix: "Units", icon: Truck },
  { label: "Strategic Storage", value: "2,000", suffix: "Slots", icon: Warehouse },
  { label: "UK Hubs", value: "National", suffix: "Coverage", icon: Globe },
  { label: "Industry Tenure", value: "27", suffix: "Years", icon: Award },
];

const services = [
  {
    id: "01",
    title: "National Vehicle Transport",
    description: "High-capacity logistics network engineered for rapid manufacturer-scale distribution and high-value enclosed movements.",
    features: ["Enclosed Transport", "GPS Telematics", "Fleet Distribution"],
    icon: Truck,
  },
  {
    id: "02",
    title: "Strategic Vehicle Storage",
    description: "Our 12-acre Bathgate super-hub provides mission-critical storage, inventory management, and technical support.",
    features: ["Bonded Storage", "24/7 High-Security", "Inventory Portals"],
    icon: Warehouse,
  },
  {
    id: "03",
    title: "Technical PDI & Defleet",
    description: "Precision-grade inspections and preparation services ensuring every vehicle meets exacting manufacturer standards.",
    features: ["Digital Auditing", "Rapid Turnaround", "Repair Services"],
    icon: ShieldCheck,
  },
];

const revealVariants = {
  hidden: { opacity: 0, y: 100, skewY: 2 },
  visible: { 
    opacity: 1, 
    y: 0, 
    skewY: 0,
    transition: { duration: 1, ease: [0.16, 1, 0.3, 1] as any } 
  }
};

export default function Home() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const scaleProgress = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });
  const heroOpacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);
  const heroScale = useTransform(scrollYProgress, [0, 0.2], [1, 0.9]);

  return (
    <div className="bg-white selection:bg-secondary selection:text-white overflow-x-hidden" ref={containerRef}>
      
      {/* Cinematic Hero Section - High Intensity */}
      <section className="relative h-screen min-h-[900px] flex items-center overflow-hidden bg-black">
        <motion.div style={{ opacity: heroOpacity, scale: heroScale }} className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,_rgba(227,30,36,0.15)_0%,_transparent_50%)]" />
          <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:100px_100px]" />
        </motion.div>

        {/* Massive Background Ghost Text */}
        <div className="absolute left-0 bottom-0 text-[35vw] font-black text-white/[0.03] leading-[0.7] select-none pointer-events-none tracking-tighter">
          TITAN
        </div>

        <div className="container relative z-10 px-6 mx-auto">
          <div className="max-w-6xl">
            <motion.div
              initial="hidden"
              animate="visible"
              variants={{ visible: { transition: { staggerChildren: 0.15 } } }}
            >
              <motion.div variants={revealVariants} className="flex items-center gap-6 mb-12">
                <div className="h-0.5 w-24 bg-secondary" />
                <span className="text-sm font-black tracking-[0.6em] text-white uppercase">
                  Logistics Mastered.
                </span>
              </motion.div>

              <motion.h1 
                variants={revealVariants}
                className="text-[12vw] md:text-[10vw] font-black text-white leading-[0.75] tracking-tighter uppercase mb-16"
              >
                Heavy <br/> 
                <span className="text-secondary">Impact.</span>
              </motion.h1>

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-end">
                <motion.div variants={revealVariants} className="lg:col-span-7">
                  <p className="text-2xl md:text-3xl font-bold text-white/40 leading-tight border-l-8 border-secondary pl-10">
                    A1 Automotive Ltd defines the benchmark for large-scale vehicle logistics in the UK & Ireland. We don&apos;t just move vehicles; we move markets.
                  </p>
                </motion.div>

                <motion.div variants={revealVariants} className="lg:col-span-5 flex flex-wrap gap-6">
                  <Button size="lg" variant="secondary" className="rounded-none h-24 px-16 text-xl font-black tracking-widest group bg-secondary hover:bg-white hover:text-black transition-all duration-500 w-full sm:w-auto">
                    INITIATE PARTNERSHIP
                    <ArrowRight className="ml-4 group-hover:translate-x-4 transition-transform" />
                  </Button>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Data Pulse Visual */}
        <div className="absolute right-10 bottom-10 hidden xl:flex flex-col items-end gap-2">
           <div className="flex gap-1">
              {[...Array(20)].map((_, i) => (
                <motion.div 
                  key={i}
                  animate={{ height: [10, Math.random() * 40 + 10, 10] }}
                  transition={{ repeat: Infinity, duration: 2, delay: i * 0.1 }}
                  className="w-1 bg-secondary/40"
                />
              ))}
           </div>
           <span className="text-[10px] font-black text-white/30 uppercase tracking-[0.5em]">Network Load: Optimal</span>
        </div>
      </section>

      {/* Operational Pulse / Stats - High Contrast */}
      <section className="py-0 relative z-20">
        <div className="container mx-auto px-0">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 bg-black">
            {stats.map((stat, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.1 }}
                className="p-16 border-r border-white/5 hover:bg-secondary transition-colors duration-500 group"
              >
                <div className="flex items-center gap-4 mb-8">
                  <stat.icon className="text-secondary group-hover:text-white transition-colors" size={24} strokeWidth={3} />
                  <div className="h-px flex-1 bg-white/10 group-hover:bg-white/30" />
                </div>
                <div className="text-7xl font-black text-white mb-2 tabular-nums">
                  {stat.value}
                </div>
                <div className="text-xs font-black uppercase tracking-[0.3em] text-white/40 group-hover:text-white transition-colors">
                  {stat.label} <span className="text-secondary group-hover:text-black ml-2">{stat.suffix}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* The Infrastructure - Full Width Narrative */}
      <section id="about" className="py-40 bg-white">
        <div className="container px-6 mx-auto">
          <div className="flex flex-col lg:flex-row gap-32 items-center">
             <div className="lg:w-1/2">
                <motion.span 
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  className="text-sm font-black text-secondary uppercase tracking-[0.6em] mb-10 block"
                >
                  Regional Super-Hub
                </motion.span>
                <motion.h2 
                   initial={{ opacity: 0, y: 30 }}
                   whileInView={{ opacity: 1, y: 0 }}
                   className="text-7xl md:text-9xl font-black text-black uppercase tracking-tighter leading-[0.8] mb-16"
                >
                  12 Acre <br/>
                  <span className="text-secondary">Nexus.</span>
                </motion.h2>
                <p className="text-2xl text-black font-bold leading-relaxed mb-12 border-l-4 border-black pl-10">
                  Strategic infrastructure is the backbone of our operations. Our Bathgate facility isn&apos;t just a yard—it&apos;s a precision-engineered logistics hub managing over 2,000 vehicles for the UK&apos;s elite manufacturers.
                </p>
                <Button variant="outline" className="rounded-none border-2 border-black h-20 px-12 font-black tracking-widest hover:bg-black hover:text-white transition-all">
                  EXPLORE THE FACILITY
                </Button>
             </div>

             <div className="lg:w-1/2 grid grid-cols-2 gap-4">
                <div className="space-y-4">
                   <div className="aspect-[4/5] bg-slate-900 flex items-center justify-center p-12 group overflow-hidden relative">
                      <div className="text-white/10 font-black text-9xl absolute -bottom-10 -right-10 group-hover:scale-110 transition-transform">01</div>
                      <Zap className="text-secondary w-16 h-16 relative z-10" />
                   </div>
                   <div className="aspect-square bg-slate-100 flex items-center justify-center font-black text-black/20 text-xs tracking-widest uppercase">High Res Imagery</div>
                </div>
                <div className="space-y-4 pt-12">
                   <div className="aspect-square bg-slate-100 flex items-center justify-center font-black text-black/20 text-xs tracking-widest uppercase">Unit Tracking</div>
                   <div className="aspect-[4/5] bg-secondary flex flex-col justify-end p-10">
                      <div className="text-white font-black text-3xl uppercase leading-none">Real-Time <br/> Logistics</div>
                   </div>
                </div>
             </div>
          </div>
        </div>
      </section>

      {/* Advanced Capabilities - Modern Grid */}
      <section id="services" className="py-40 bg-black text-white">
        <div className="container px-6 mx-auto">
          <div className="flex flex-col lg:flex-row justify-between items-end mb-32 gap-12">
            <div className="max-w-4xl">
              <h2 className="text-7xl md:text-9xl font-black uppercase tracking-tighter leading-[0.8]">
                Mission <br/> <span className="text-secondary">Critical.</span>
              </h2>
            </div>
            <p className="text-white/40 font-bold text-xl max-w-sm border-r-4 border-secondary pr-10 text-right">
              Delivering high-volume distribution and high-security storage for the UK&apos;s primary automotive sector.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3">
            {services.map((service, i) => (
              <motion.div
                key={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={revealVariants}
                className="group p-16 border border-white/5 hover:bg-white transition-all duration-700"
              >
                <div className="flex justify-between items-start mb-16">
                   <service.icon className="text-secondary group-hover:text-black w-16 h-16 transition-colors" strokeWidth={1.5} />
                   <div className="text-5xl font-black text-white/10 group-hover:text-black/10">{service.id}</div>
                </div>
                <h3 className="text-3xl font-black uppercase tracking-tight mb-8 text-white group-hover:text-black transition-colors">
                  {service.title}
                </h3>
                <p className="text-white/40 font-bold leading-relaxed mb-12 group-hover:text-black/60 transition-colors text-lg">
                  {service.description}
                </p>
                <div className="flex flex-wrap gap-3 mb-16">
                  {service.features.map((f, j) => (
                    <span key={j} className="text-[10px] font-black uppercase tracking-widest bg-white/5 group-hover:bg-black/5 px-4 py-2 text-white/60 group-hover:text-black transition-all">
                      {f}
                    </span>
                  ))}
                </div>
                <Link href="#" className="flex items-center gap-4 text-xs font-black uppercase tracking-[0.4em] text-secondary group-hover:text-black transition-colors">
                  Specifications <ArrowRight size={16} />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* The Closer - Massive Contact Block */}
      <section id="contact" className="py-0 bg-white">
        <div className="grid grid-cols-1 lg:grid-cols-2">
           <div className="p-20 md:p-40 bg-black text-white flex flex-col justify-center relative overflow-hidden">
              <div className="absolute top-0 right-0 text-[30rem] font-black text-white/5 leading-none translate-x-1/2 -translate-y-1/2 pointer-events-none">A1</div>
              <h2 className="text-7xl md:text-9xl font-black uppercase tracking-tighter leading-[0.8] mb-12 relative z-10">
                Initiate <br/> <span className="text-secondary">Now.</span>
              </h2>
              <div className="flex flex-col gap-10 relative z-10">
                 <div className="space-y-2">
                    <div className="text-[10px] font-black text-secondary uppercase tracking-[0.6em]">Corporate Head Office</div>
                    <div className="text-2xl font-bold">12 Blackburn Road, Bathgate, EH48 2EY</div>
                 </div>
                 <div className="space-y-2">
                    <div className="text-[10px] font-black text-secondary uppercase tracking-[0.6em]">Partnership Hotline</div>
                    <div className="text-5xl font-black tabular-nums">01506 631133</div>
                 </div>
              </div>
           </div>
           <div className="p-20 md:p-40 bg-secondary flex flex-col justify-center items-start group cursor-pointer overflow-hidden relative">
              <motion.div 
                whileHover={{ scale: 1.1 }}
                className="text-white font-black text-[12vw] leading-none uppercase tracking-tighter relative z-10"
              >
                REQUEST <br/> QUOTE <br/> <ArrowRight size={120} className="mt-8 group-hover:translate-x-10 transition-transform duration-700" strokeWidth={4} />
              </motion.div>
              <div className="absolute inset-0 bg-black translate-y-full group-hover:translate-y-0 transition-transform duration-700" />
           </div>
        </div>
      </section>
    </div>
  );
}
