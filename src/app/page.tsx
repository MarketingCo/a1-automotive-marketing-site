"use client";

import { motion, useScroll, useTransform, useSpring, useInView } from "framer-motion";
import { Truck, Warehouse, ShieldCheck, Award, Map, Phone, Mail, CheckCircle2, ArrowRight, Globe, Shield, Factory, Building2, UserCheck, HardHat, Briefcase, ChevronRight, Activity, Zap, Box, Compass } from "lucide-react";
import { Button } from "@/components/ui/Button";
import Link from "next/link";
import { useRef, useEffect, useState } from "react";

// --- Components ---

const MagneticButton = ({ children, variant = "default", className = "", size = "lg" }: any) => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const ref = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!ref.current) return;
    const { clientX, clientY } = e;
    const { width, height, left, top } = ref.current.getBoundingClientRect();
    const x = clientX - (left + width / 2);
    const y = clientY - (top + height / 2);
    setPosition({ x: x * 0.3, y: y * 0.3 });
  };

  const handleMouseLeave = () => {
    setPosition({ x: 0, y: 0 });
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      animate={{ x: position.x, y: position.y }}
      transition={{ type: "spring", stiffness: 150, damping: 15, mass: 0.1 }}
    >
      <Button variant={variant} size={size} className={className}>
        {children}
      </Button>
    </motion.div>
  );
};

const StatCounter = ({ value, label, suffix = "" }: { value: number; label: string; suffix?: string }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (isInView) {
      let start = 0;
      const end = value;
      const duration = 2000;
      const increment = end / (duration / 16);
      
      const timer = setInterval(() => {
        start += increment;
        if (start >= end) {
          setCount(end);
          clearInterval(timer);
        } else {
          setCount(Math.floor(start));
        }
      }, 16);
      return () => clearInterval(timer);
    }
  }, [isInView, value]);

  return (
    <div ref={ref} className="text-center">
      <div className="text-7xl font-black text-black tabular-nums tracking-tighter mb-2">
        {count}{suffix}
      </div>
      <div className="text-[10px] font-black uppercase tracking-[0.4em] text-secondary">
        {label}
      </div>
    </div>
  );
};

// --- Data ---

const fleetUnits = [
  { id: "FLEET-01", name: "Multi-Unit Carrier", capacity: "12-Car Capacity", detail: "Scania / Volvo Power" },
  { id: "FLEET-02", name: "Regional Transporter", capacity: "6-Car Capacity", detail: "Optimized Distribution" },
  { id: "FLEET-03", name: "Enclosed Secure", capacity: "2-Car Capacity", detail: "Climate Controlled" },
  { id: "FLEET-04", name: "Rapid Response", capacity: "1-Car Capacity", detail: "Single Collection" },
];

const hubSpecs = [
  { label: "Land Area", value: "12 Acres", icon: Map },
  { label: "Unit Capacity", value: "2,000+", icon: Warehouse },
  { label: "Security Tier", value: "Elite", icon: Shield },
  { label: "PDI Suites", value: "08 Bays", icon: HardHat },
];

// --- Main Page ---

export default function Home() {
  const containerRef = useRef(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const springScroll = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });
  const heroScale = useTransform(springScroll, [0, 0.2], [1, 0.8]);
  const heroOpacity = useTransform(springScroll, [0, 0.2], [1, 0]);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <div className="bg-white selection:bg-secondary selection:text-white" ref={containerRef}>
      
      {/* 1. INITIAL REVEAL LOADER (SUBTLE) */}
      {!isLoaded && (
        <div className="fixed inset-0 z-[100] bg-black flex items-center justify-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            className="flex items-baseline font-black tracking-[-0.08em] text-[15vw]"
          >
            <span className="text-white">A</span>
            <span className="text-secondary">1</span>
          </motion.div>
        </div>
      )}

      {/* 2. CINEMATIC HERO: THE SOVEREIGN REVEAL */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden bg-white">
        <motion.div style={{ scale: heroScale, opacity: heroOpacity }} className="container relative z-10 px-6 mx-auto">
          <div className="flex flex-col items-center">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
              className="mb-16 flex items-baseline font-black tracking-[-0.1em] text-[20vw] md:text-[15vw] leading-none"
            >
              <span className="text-black">A</span>
              <span className="text-secondary">1</span>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="text-center"
            >
              <h1 className="text-5xl md:text-8xl font-black uppercase tracking-[-0.05em] text-black leading-[0.9] mb-10">
                Architectural <br/> 
                <span className="text-secondary">Logistics.</span>
              </h1>
              <div className="flex items-center justify-center gap-12 mb-16">
                 <div className="flex items-center gap-3">
                    <div className="h-2 w-2 rounded-full bg-secondary animate-pulse" />
                    <span className="text-[10px] font-black uppercase tracking-[0.4em] text-black/30">Network Active</span>
                 </div>
                 <div className="h-px w-20 bg-black/5" />
                 <span className="text-[10px] font-black uppercase tracking-[0.4em] text-black/30">UK & Ireland Coverage</span>
              </div>
              <MagneticButton className="rounded-none h-24 px-20 font-black tracking-[0.4em] text-sm group" variant="secondary">
                EXPLORE THE NEXUS <ArrowRight className="ml-4 group-hover:translate-x-4 transition-transform" />
              </MagneticButton>
            </motion.div>
          </div>
        </motion.div>

        {/* Minimal Grid Background */}
        <div className="absolute inset-0 z-0 bg-[radial-gradient(circle_at_center,_rgba(227,30,36,0.02)_0%,_transparent_70%)]" />
        <div className="absolute inset-0 z-0 bg-[linear-gradient(to_right,#f5f5f5_1px,transparent_1px),linear-gradient(to_bottom,#f5f5f5_1px,transparent_1px)] bg-[size:60px_60px]" />
      </section>

      {/* 3. PERFORMANCE METRICS: IN NUMBERS */}
      <section className="py-40 bg-black text-white relative z-10">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-24">
             <div className="flex flex-col items-center">
                <div className="text-8xl md:text-9xl font-black tabular-nums tracking-tighter mb-4 text-white">82</div>
                <span className="text-[10px] font-black uppercase tracking-[0.5em] text-secondary">Operational Fleet Units</span>
             </div>
             <div className="flex flex-col items-center">
                <div className="text-8xl md:text-9xl font-black tabular-nums tracking-tighter mb-4 text-white">12</div>
                <span className="text-[10px] font-black uppercase tracking-[0.5em] text-secondary">Acre High-Security Hub</span>
             </div>
             <div className="flex flex-col items-center">
                <div className="text-8xl md:text-9xl font-black tabular-nums tracking-tighter mb-4 text-white">27</div>
                <span className="text-[10px] font-black uppercase tracking-[0.5em] text-secondary">Years Market Authority</span>
             </div>
          </div>
        </div>
      </section>

      {/* 4. THE NEXUS: ARCHITECTURAL HUB */}
      <section id="about" className="py-60 bg-white relative overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="flex flex-col xl:flex-row gap-40 items-center">
            <div className="xl:w-1/2">
              <span className="text-xs font-black text-secondary uppercase tracking-[1em] mb-12 block">The Hub / Bathgate</span>
              <h2 className="text-8xl md:text-[10rem] font-black text-black uppercase tracking-tighter leading-[0.8] mb-20">
                Logistical <br/> <span className="text-secondary">Fortress.</span>
              </h2>
              <div className="grid grid-cols-2 gap-x-12 gap-y-20">
                {hubSpecs.map((spec, i) => (
                  <div key={i} className="group border-l-2 border-black/5 pl-8 hover:border-secondary transition-colors">
                    <spec.icon className="text-secondary mb-6 w-8 h-8" strokeWidth={2} />
                    <div className="text-3xl font-black text-black mb-2">{spec.value}</div>
                    <div className="text-[10px] font-black uppercase tracking-widest text-black/30">{spec.label}</div>
                  </div>
                ))}
              </div>
            </div>
            <div className="xl:w-1/2 relative">
               <div className="aspect-[4/5] bg-[#fafafa] border border-black/5 p-20 flex flex-col justify-between relative overflow-hidden group">
                  <div className="absolute top-0 right-0 p-12 text-[15rem] font-black text-black/[0.02] leading-none select-none group-hover:scale-110 transition-transform duration-1000">
                    A1
                  </div>
                  <div className="relative z-10 space-y-12">
                     <div className="h-[2px] w-20 bg-secondary" />
                     <p className="text-3xl font-black uppercase tracking-tighter leading-tight text-black">
                       ENGINEERED FOR <br/> HIGH-VOLUME <br/> MANUFACTURERS.
                     </p>
                  </div>
                  <div className="relative z-10 grid grid-cols-2 gap-8">
                     <div>
                        <div className="text-xs font-black text-black mb-2 uppercase tracking-widest">Bonded Storage</div>
                        <p className="text-[10px] font-bold text-black/40 leading-relaxed uppercase tracking-widest">Duty-suspended inventory management.</p>
                     </div>
                     <div>
                        <div className="text-xs font-black text-black mb-2 uppercase tracking-widest">Technical PDI</div>
                        <p className="text-[10px] font-bold text-black/40 leading-relaxed uppercase tracking-widest">Multi-bay inspection and preparation.</p>
                     </div>
                  </div>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. THE FLEET: PRODUCT-LEVEL PRECISION */}
      <section id="fleet" className="py-60 bg-[#0a0a0a] text-white">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-end mb-40 gap-12">
            <h2 className="text-8xl md:text-[10rem] font-black uppercase tracking-tighter text-white leading-none">
              THE <br/> <span className="text-secondary">ELITE.</span>
            </h2>
            <div className="text-right max-w-sm space-y-8">
               <p className="text-white/40 font-bold uppercase tracking-[0.2em] text-xs leading-loose italic">
                 "Our fleet is a surgical instrument for national asset distribution, optimized for absolute zero-defect delivery."
               </p>
               <div className="h-px w-full bg-white/10" />
               <div className="flex justify-end gap-4">
                  <div className="h-1 w-12 bg-secondary" />
                  <div className="h-1 w-4 bg-white/10" />
                  <div className="h-1 w-4 bg-white/10" />
               </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4">
            {fleetUnits.map((unit, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="group p-12 bg-white/5 border border-white/5 hover:bg-white transition-all duration-700 cursor-pointer"
              >
                <div className="text-[10px] font-black text-secondary mb-20 uppercase tracking-[0.5em]">{unit.id}</div>
                <h4 className="text-3xl font-black uppercase tracking-tight text-white group-hover:text-black transition-colors mb-4">{unit.name}</h4>
                <div className="h-px w-8 bg-white/20 group-hover:bg-black/20 mb-8 transition-colors" />
                <p className="text-white/40 group-hover:text-black/40 font-bold text-sm uppercase tracking-widest mb-12">{unit.capacity}</p>
                <div className="flex items-center gap-4 text-[10px] font-black text-white/20 group-hover:text-black transition-colors uppercase tracking-widest">
                  Specifications <ArrowRight size={14} />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. THE JOURNEY: MISSION CRITICAL */}
      <section className="py-60 bg-white">
        <div className="container mx-auto px-6">
           <div className="flex flex-col lg:flex-row gap-32">
              <div className="lg:w-1/3">
                 <span className="text-[10px] font-black text-secondary uppercase tracking-[0.5em] mb-12 block">Service Architecture</span>
                 <div className="space-y-24">
                    {[
                      { t: "Asset Intake", d: "Secured collection across UK & Ireland networks." },
                      { t: "Storage Ops", d: "Strategic inventory management within the Nexus." },
                      { t: "Final Delivery", d: "Precision distribution to the end destination." }
                    ].map((step, i) => (
                      <div key={i} className="group cursor-pointer">
                         <div className="text-xs font-black text-black/20 group-hover:text-secondary transition-colors mb-4 tabular-nums">0{i+1}</div>
                         <h4 className="text-3xl font-black uppercase tracking-tight mb-4 group-hover:translate-x-4 transition-transform">{step.t}</h4>
                         <p className="text-black/40 font-bold uppercase text-[10px] tracking-widest">{step.d}</p>
                      </div>
                    ))}
                 </div>
              </div>
              <div className="lg:w-2/3">
                 <div className="aspect-video bg-black flex flex-col items-center justify-center p-20 relative overflow-hidden group">
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(227,30,36,0.2)_0%,_transparent_70%)] opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
                    <h2 className="text-6xl md:text-[12rem] font-black text-white uppercase tracking-tighter leading-none relative z-10 group-hover:scale-105 transition-transform duration-1000">
                       MISSION <br/> <span className="text-secondary italic">READY.</span>
                    </h2>
                 </div>
              </div>
           </div>
        </div>
      </section>

      {/* 7. CAREERS: JOIN THE VANGUARD */}
      <section className="py-60 bg-[#f4f4f4]">
        <div className="container mx-auto px-6 text-center">
           <span className="text-xs font-black text-secondary uppercase tracking-[1em] mb-16 block">Operational Expansion</span>
           <h2 className="text-7xl md:text-[10rem] font-black text-black uppercase tracking-tighter leading-[0.8] mb-20">
              DRIVE THE <br/> <span className="text-secondary underline underline-offset-[20px] decoration-8">FUTURE.</span>
           </h2>
           <div className="max-w-3xl mx-auto space-y-16">
              <p className="text-2xl font-black text-black/30 uppercase tracking-tight leading-tight">
                WE ARE ACTIVELY RECRUITING CLASS 1 HGV DRIVERS TO COMMAND THE UK&apos;S MOST SOPHISTICATED TRANSPORTER FLEET.
              </p>
              <div className="flex justify-center">
                 <MagneticButton className="rounded-none h-24 px-20 bg-black text-white font-black tracking-[0.5em] text-sm hover:bg-secondary transition-all">
                    VIEW VACANCIES
                 </MagneticButton>
              </div>
           </div>
        </div>
      </section>

      {/* 8. THE FINAL PROTOCOL: CONTACT */}
      <section id="contact" className="py-0">
         <div className="flex flex-col lg:flex-row">
            <div className="lg:w-1/2 p-20 md:p-40 bg-black text-white flex flex-col justify-center relative overflow-hidden">
               <div className="absolute top-0 right-0 text-[35rem] font-black text-white/[0.02] leading-none translate-x-1/2 -translate-y-1/2 select-none pointer-events-none">A1</div>
               <h2 className="text-8xl md:text-[12rem] font-black uppercase tracking-tighter leading-[0.7] mb-20 relative z-10">
                 Initiate <br/> <span className="text-secondary italic">Now.</span>
               </h2>
               <div className="space-y-12 relative z-10">
                  <div>
                     <span className="text-[10px] font-black text-secondary uppercase tracking-[0.6em] mb-4 block">Central Terminal</span>
                     <div className="text-6xl font-black tabular-nums">01506 631133</div>
                  </div>
                  <div className="h-px w-20 bg-white/10" />
                  <div>
                     <span className="text-[10px] font-black text-secondary uppercase tracking-[0.6em] mb-4 block">Corporate HQ</span>
                     <div className="text-xl font-bold uppercase tracking-tight">12 Blackburn Road, Bathgate, EH48 2EY</div>
                  </div>
               </div>
            </div>
            <div className="lg:w-1/2 bg-secondary p-20 md:p-40 flex flex-col justify-center items-center group cursor-pointer overflow-hidden relative">
               <div className="absolute inset-0 bg-white -translate-x-full group-hover:translate-x-0 transition-transform duration-1000" />
               <motion.div 
                 whileHover={{ scale: 1.05 }}
                 className="relative z-10 text-center"
               >
                 <span className="text-xs font-black text-white group-hover:text-black uppercase tracking-[1em] mb-12 block transition-colors">Secure Quote System</span>
                 <h3 className="text-white group-hover:text-black font-black text-[12vw] lg:text-[8vw] uppercase leading-none tracking-tighter mb-16 transition-colors">
                   GET <br/> QUOTE
                 </h3>
                 <div className="h-32 w-32 rounded-full border-4 border-white group-hover:border-black flex items-center justify-center mx-auto transition-all duration-700">
                   <ArrowRight size={64} className="text-white group-hover:text-black group-hover:translate-x-4 transition-all duration-700" strokeWidth={4} />
                 </div>
               </motion.div>
            </div>
         </div>
      </section>
    </div>
  );
}
