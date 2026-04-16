"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { Truck, Warehouse, ShieldCheck, Clock, CheckCircle2, ChevronRight, ArrowRight, Gauge, Globe, Award } from "lucide-react";
import { Button } from "@/components/ui/Button";
import Link from "next/link";
import { useRef } from "react";

const stats = [
  { label: "Fleet Vehicles", value: "80+", icon: Truck },
  { label: "Storage Capacity", value: "2,000+", icon: Warehouse },
  { label: "Regional Hubs", value: "UK & Ireland", icon: Globe },
  { label: "Industry Experience", value: "27 Years", icon: Award },
];

const services = [
  {
    id: "01",
    title: "National Vehicle Transport",
    description: "Specialized logistics ranging from high-value single vehicle movements to massive manufacturer fleet distribution across the UK and Ireland.",
    features: ["Enclosed Transport Available", "Real-time Tracking", "Fully Insured"],
    icon: Truck,
  },
  {
    id: "02",
    title: "Secure Vehicle Storage",
    description: "A 12-acre high-security hub in Central Scotland, purpose-built for manufacturer-standard storage and inventory management.",
    features: ["24/7 Monitoring", "De-Fleet Ready", "Bonded Facility"],
    icon: Warehouse,
  },
  {
    id: "03",
    title: "Technical PDI & Defleet",
    description: "Comprehensive technical inspections, vehicle preparation, and end-of-lease management with precision reporting.",
    features: ["Manufacturer Standards", "Rapid Turnaround", "Digital Reporting"],
    icon: ShieldCheck,
  },
];

const revealVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as any } 
  }
};

export default function Home() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  return (
    <div className="bg-white selection:bg-secondary selection:text-white overflow-x-hidden" ref={containerRef}>
      
      {/* Cinematic Hero Section */}
      <section className="relative h-screen min-h-[800px] flex items-center justify-center overflow-hidden bg-black">
        {/* Abstract Architectural Background Elements */}
        <div className="absolute inset-0 z-0">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_20%_30%,_rgba(227,30,36,0.1)_0%,_transparent_50%)]" />
          <div className="absolute inset-0 bg-grid-white/[0.03] bg-[length:60px_60px]" />
          <div className="absolute bottom-0 right-0 w-full h-full bg-[radial-gradient(circle_at_80%_70%,_rgba(255,255,255,0.05)_0%,_transparent_50%)]" />
        </div>

        {/* Floating Decorative Elements */}
        <motion.div 
          style={{ y: useTransform(scrollYProgress, [0, 1], [0, 200]) }}
          className="absolute -right-20 top-1/4 text-[25rem] font-black text-white/[0.02] leading-none select-none"
        >
          A1
        </motion.div>

        <div className="container relative z-10 px-4">
          <div className="max-w-5xl">
            <motion.div
              initial="hidden"
              animate="visible"
              variants={{
                visible: { transition: { staggerChildren: 0.2 } }
              }}
            >
              <motion.div variants={revealVariants} className="flex items-center gap-4 mb-8">
                <span className="h-px w-16 bg-secondary" />
                <span className="text-sm font-black tracking-[0.4em] text-white/60 uppercase">
                  Logistics Excellence Since 1998
                </span>
              </motion.div>

              <motion.h1 
                variants={revealVariants}
                className="text-7xl md:text-9xl font-black text-white leading-[0.85] tracking-tighter uppercase mb-12"
              >
                Precision <br/>
                <span className="text-secondary">In Motion.</span>
              </motion.h1>

              <motion.p 
                variants={revealVariants}
                className="max-w-2xl text-xl md:text-2xl font-medium text-white/50 mb-12 border-l-4 border-secondary pl-8 leading-relaxed"
              >
                A1 Automotive Ltd orchestrates large-scale vehicle logistics for the world&apos;s premier automotive brands. Reliability is our only standard.
              </motion.p>

              <motion.div variants={revealVariants} className="flex flex-wrap gap-6">
                <Button size="lg" variant="secondary" className="rounded-none h-20 px-12 text-lg font-black tracking-widest group">
                  EXPLORE SOLUTIONS
                  <ArrowRight className="ml-3 group-hover:translate-x-2 transition-transform" />
                </Button>
                <Button size="lg" variant="outline" className="rounded-none h-20 px-12 text-lg font-black tracking-widest text-white border-white/20 hover:bg-white/10">
                  OUR FLEET
                </Button>
              </motion.div>
            </motion.div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4"
        >
          <div className="w-px h-16 bg-gradient-to-b from-transparent via-white/20 to-white/60" />
          <span className="text-[10px] font-black uppercase tracking-[0.5em] text-white/40">Scroll</span>
        </motion.div>
      </section>

      {/* Corporate Identity & Scale */}
      <section className="py-32 bg-white relative">
        <div className="container px-4 mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={revealVariants}
              className="relative"
            >
              <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tighter leading-none mb-10 text-black">
                Strategic <br/> <span className="text-secondary">Infrastructure</span>
              </h2>
              <p className="text-xl text-black font-medium leading-relaxed mb-10">
                Based in Bathgate, Central Scotland, we operate a 12-acre purpose-built facility that functions as the critical link in the UK&apos;s automotive supply chain.
              </p>
              
              <div className="grid grid-cols-2 gap-10">
                {stats.map((stat, i) => (
                  <div key={i} className="group">
                    <div className="text-4xl font-black text-black mb-2 flex items-center gap-3">
                      {stat.value}
                    </div>
                    <div className="text-xs font-black uppercase tracking-widest text-slate-400 group-hover:text-secondary transition-colors">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={revealVariants}
              className="relative aspect-square"
            >
              <div className="absolute inset-0 bg-slate-100 border-8 border-slate-50 overflow-hidden">
                <div className="w-full h-full flex items-center justify-center bg-slate-900 text-white/5 uppercase font-black text-9xl -rotate-12 select-none">
                  A1 LOGISTICS
                </div>
              </div>
              <div className="absolute -top-12 -right-12 w-64 h-64 bg-secondary p-10 flex flex-col justify-end hidden xl:flex">
                <p className="text-white font-black text-2xl leading-tight uppercase">
                  UK Wide <br/> Distribution <br/> Network
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Advanced Service Architecture */}
      <section id="services" className="py-32 bg-slate-50">
        <div className="container px-4 mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
            <div className="max-w-2xl">
              <span className="text-xs font-black text-secondary uppercase tracking-[0.4em] mb-4 block">Core Capabilities</span>
              <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tighter leading-none">
                Integrated <span className="text-secondary">Solutions</span>
              </h2>
            </div>
            <p className="text-black font-bold max-w-sm mb-2 uppercase tracking-tight">
              Bespoke automotive logistics tailored for high-volume manufacturer requirements and high-value individual transport.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-0 border-t border-black">
            {services.map((service, i) => (
              <motion.div
                key={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={revealVariants}
                className="group relative p-12 bg-white border-r border-b border-black/10 hover:bg-black transition-colors duration-500"
              >
                <div className="text-7xl font-black text-black/5 group-hover:text-white/5 transition-colors mb-8">
                  {service.id}
                </div>
                <h3 className="text-2xl font-black uppercase tracking-tight mb-6 text-black group-hover:text-white transition-colors">
                  {service.title}
                </h3>
                <p className="text-black/80 font-bold leading-relaxed mb-8 group-hover:text-white/60 transition-colors">
                  {service.description}
                </p>
                <ul className="space-y-3 mb-12">
                  {service.features.map((f, j) => (
                    <li key={j} className="flex items-center gap-3 text-sm font-black uppercase tracking-tight text-black group-hover:text-white/80 transition-colors">
                      <div className="h-1.5 w-1.5 bg-secondary" />
                      {f}
                    </li>
                  ))}
                </ul>
                <Link href="#" className="inline-flex items-center text-xs font-black uppercase tracking-[0.3em] text-secondary hover:translate-x-4 transition-transform">
                  View Specifications <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Industrial Scale CTA */}
      <section id="contact" className="py-40 bg-white overflow-hidden">
        <div className="container px-4 mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={revealVariants}
            className="bg-black p-16 md:p-32 relative text-center"
          >
            <div className="absolute inset-0 z-0 overflow-hidden">
               <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[30rem] font-black text-white/[0.02] uppercase leading-none select-none">
                 Contact
               </div>
            </div>

            <div className="relative z-10">
              <h2 className="text-6xl md:text-8xl font-black text-white uppercase tracking-tighter leading-none mb-12">
                Initiate <br/> <span className="text-secondary">Partnership</span>
              </h2>
              <p className="text-xl text-white/50 font-medium max-w-2xl mx-auto mb-16 uppercase tracking-widest leading-relaxed">
                Experience the precision of the UK's most reliable automotive logistics network.
              </p>
              
              <div className="flex flex-col md:flex-row items-center justify-center gap-12">
                <Button size="lg" variant="secondary" className="rounded-none h-20 px-16 text-lg font-black tracking-[0.2em] w-full md:w-auto">
                  REQUEST PROPOSAL
                </Button>
                <div className="text-left">
                  <div className="text-[10px] font-black uppercase tracking-[0.5em] text-secondary mb-2">Corporate Line</div>
                  <div className="text-3xl font-black text-white tabular-nums">01506 631133</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
