"use client";

import { motion, useScroll, useTransform, useSpring, useInView, AnimatePresence } from "framer-motion";
import { Truck, Warehouse, ShieldCheck, Award, Map, Phone, Mail, CheckCircle2, ArrowRight, Globe, Shield, Factory, Building2, UserCheck, HardHat, Briefcase, ChevronRight, Activity, Zap, Box, Compass, Scan, Database, MousePointer2 } from "lucide-react";
import { Button } from "@/components/ui/Button";
import Link from "next/link";
import { useRef, useEffect, useState } from "react";

// --- Advanced Components ---

const SmartCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [cursorText, setCursorText] = useState("");

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <motion.div
      className="fixed top-0 left-0 w-8 h-8 rounded-full border-2 border-secondary z-[999] pointer-events-none mix-blend-difference hidden lg:flex items-center justify-center overflow-hidden"
      animate={{
        x: position.x - 16,
        y: position.y - 16,
        scale: isHovering ? 2.5 : 1,
        backgroundColor: isHovering ? "rgba(227, 30, 36, 1)" : "rgba(227, 30, 36, 0)",
      }}
      transition={{ type: "spring", stiffness: 250, damping: 20, mass: 0.5 }}
    >
      {isHovering && (
        <span className="text-[4px] font-black text-white uppercase tracking-tighter uppercase">
          {cursorText}
        </span>
      )}
    </motion.div>
  );
};

const SectionReveal = ({ children, direction = "up" }: any) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-10%" });
  
  const variants = {
    hidden: { 
      opacity: 0, 
      y: direction === "up" ? 100 : 0,
      x: direction === "right" ? -100 : direction === "left" ? 100 : 0,
      clipPath: "inset(100% 0% 0% 0%)" 
    },
    visible: { 
      opacity: 1, 
      y: 0, 
      x: 0,
      clipPath: "inset(0% 0% 0% 0%)",
      transition: { duration: 1, ease: [0.16, 1, 0.3, 1] as any } 
    }
  };

  return (
    <motion.div ref={ref} initial="hidden" animate={isInView ? "visible" : "hidden"} variants={variants}>
      {children}
    </motion.div>
  );
};

// --- Data ---

const dataMarquee = [
  "82 ACTIVE TRANSPORTERS", "12 ACRE HUB", "2000+ SECURE SLOTS", "7 DAYS A WEEK", "UK & IRELAND WIDE", "ESTABLISHED 1998", "FORS GOLD ACCREDITED", "RHA MEMBER", "PDI SPECIALISTS", "GPS TELEMATICS EQUIPPED"
];

// --- Page ---

export default function Home() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const springScroll = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });
  const heroRotate = useTransform(springScroll, [0, 0.2], [0, -5]);
  const heroX = useTransform(springScroll, [0, 0.2], [0, -100]);

  return (
    <div className="bg-[#050505] selection:bg-secondary selection:text-white overflow-x-hidden font-sans" ref={containerRef}>
      <SmartCursor />

      {/* 1. THE UNRIVALLED REVEAL: HERO */}
      <section className="relative h-screen min-h-[900px] flex items-center justify-center overflow-hidden">
        {/* Dynamic Interactive Grid */}
        <div className="absolute inset-0 z-0 pointer-events-none opacity-20">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(227,30,36,0.15)_0%,_transparent_70%)]" />
          <div className="grid grid-cols-12 h-full w-full divide-x divide-white/5 border-x border-white/5">
            {[...Array(12)].map((_, i) => <div key={i} />)}
          </div>
        </div>

        <div className="container relative z-10 px-6 mx-auto">
          <div className="flex flex-col items-center">
            <motion.div 
              style={{ rotate: heroRotate, x: heroX }}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
              className="mb-20"
            >
              <div className="flex items-baseline font-black tracking-[-0.12em] text-[25vw] md:text-[20vw] leading-none select-none">
                <span className="text-white">A</span>
                <span className="text-secondary">1</span>
              </div>
              <div className="mt-[-5vw] flex items-center justify-center gap-10">
                <div className="h-[2px] w-20 bg-secondary" />
                <span className="text-xs md:text-sm font-black uppercase tracking-[1em] text-white/40">Automotive</span>
                <div className="h-[2px] w-20 bg-secondary" />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.5 }}
              className="text-center max-w-4xl"
            >
              <h1 className="text-4xl md:text-7xl font-black text-white uppercase tracking-tighter leading-[0.8] mb-12">
                Unrivalled <br/> <span className="text-secondary italic">Logistics Terminal.</span>
              </h1>
              <p className="text-lg md:text-xl font-bold text-white/30 uppercase tracking-[0.3em] mb-16 leading-relaxed">
                UK & Ireland Fleet Distribution • 12-Acre Secure Hub • Est. 1998
              </p>
              
              <div className="flex flex-col md:flex-row items-center justify-center gap-8">
                 <Link href="#contact">
                    <Button size="lg" variant="secondary" className="rounded-none h-20 px-16 font-black tracking-[0.5em] text-xs hover:bg-white hover:text-black transition-all duration-500">
                       REQUEST PROTOCOL
                    </Button>
                 </Link>
                 <div className="flex flex-col items-start">
                    <span className="text-[10px] font-black text-white/20 uppercase tracking-widest mb-1">System Status</span>
                    <div className="flex items-center gap-2">
                       <div className="h-2 w-2 rounded-full bg-green-500 animate-pulse" />
                       <span className="text-white font-black uppercase text-[10px] tracking-widest">Network Operational</span>
                    </div>
                 </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Vertical Data Marquee (Left) */}
        <div className="absolute left-10 top-0 bottom-0 w-px bg-white/5 flex flex-col items-center justify-center gap-10 hidden xl:flex">
           <div className="rotate-90 whitespace-nowrap text-[8px] font-black text-white/20 uppercase tracking-[1em]">Logistics Excellence Since 1998</div>
           <div className="h-40 w-px bg-secondary" />
           <div className="rotate-90 whitespace-nowrap text-[8px] font-black text-white/20 uppercase tracking-[1em]">Strategic Assets / National Reach</div>
        </div>
      </section>

      {/* 2. THE DATA STREAM: HORIZONTAL MARQUEE */}
      <section className="py-0 bg-secondary overflow-hidden border-y border-black">
        <div className="flex whitespace-nowrap">
           <motion.div 
             animate={{ x: [0, -1000] }}
             transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
             className="flex py-10"
           >
              {[...dataMarquee, ...dataMarquee].map((text, i) => (
                <div key={i} className="flex items-center mx-10">
                   <span className="text-6xl font-black text-black uppercase tracking-tighter">{text}</span>
                   <Activity className="ml-10 text-white w-10 h-10" />
                </div>
              ))}
           </motion.div>
        </div>
      </section>

      {/* 3. ARCHITECTURAL INFRASTRUCTURE: THE FORTRESS */}
      <section id="about" className="py-60 bg-white relative">
        <div className="container mx-auto px-6">
          <SectionReveal>
            <div className="flex flex-col lg:flex-row gap-40 items-center">
               <div className="lg:w-1/2">
                  <span className="text-[10px] font-black text-secondary uppercase tracking-[1em] mb-12 block">The Hub / Nexus</span>
                  <h2 className="text-8xl md:text-[12rem] font-black text-black uppercase tracking-tighter leading-[0.7] mb-20">
                    Mission <br/> <span className="text-secondary italic">Fortress.</span>
                  </h2>
                  <div className="space-y-16">
                     <p className="text-2xl font-black text-black/20 uppercase leading-tight tracking-tight">
                        Our 12-acre Bathgate super-hub is the highest-tier logistical Nexus in Scotland, engineered for manufacturer-level inventory control.
                     </p>
                     <div className="grid grid-cols-2 gap-10">
                        <div className="space-y-2">
                           <div className="text-4xl font-black tabular-nums">2,000+</div>
                           <div className="text-[10px] font-black uppercase tracking-widest text-secondary">Secure Vehicle Slots</div>
                        </div>
                        <div className="space-y-2">
                           <div className="text-4xl font-black tabular-nums">24/7</div>
                           <div className="text-[10px] font-black uppercase tracking-widest text-secondary">Monitored Surveillance</div>
                        </div>
                     </div>
                  </div>
               </div>
               <div className="lg:w-1/2 w-full">
                  <div className="aspect-square bg-black p-1 flex flex-wrap">
                     <div className="w-1/2 h-1/2 bg-white p-12 border border-black/5 flex flex-col justify-end group cursor-pointer hover:bg-secondary transition-colors duration-500">
                        <h4 className="text-2xl font-black uppercase leading-none group-hover:text-white transition-colors">Zone Alpha</h4>
                        <span className="text-[8px] font-bold uppercase tracking-widest mt-4 group-hover:text-white/60">Bulk Compound</span>
                     </div>
                     <div className="w-1/2 h-1/2 bg-white/95 p-12 border border-black/5 flex flex-col justify-end group cursor-pointer hover:bg-black transition-colors duration-500">
                        <h4 className="text-2xl font-black uppercase leading-none group-hover:text-white transition-colors">Tech Suite</h4>
                        <span className="text-[8px] font-bold uppercase tracking-widest mt-4 group-hover:text-white/60">PDI & Preparation</span>
                     </div>
                     <div className="w-1/2 h-1/2 bg-white/90 p-12 border border-black/5 flex flex-col justify-end group cursor-pointer hover:bg-black transition-colors duration-500">
                        <h4 className="text-2xl font-black uppercase leading-none group-hover:text-white transition-colors">Zone Beta</h4>
                        <span className="text-[8px] font-bold uppercase tracking-widest mt-4 group-hover:text-white/60">Secure Storage</span>
                     </div>
                     <div className="w-1/2 h-1/2 bg-secondary p-12 flex flex-col justify-end group cursor-pointer hover:bg-black transition-colors duration-500">
                        <h4 className="text-2xl font-black uppercase leading-none text-white transition-colors">HQ Ops</h4>
                        <span className="text-[8px] font-bold uppercase tracking-widest mt-4 text-white/60">Mission Control</span>
                     </div>
                  </div>
               </div>
            </div>
          </SectionReveal>
        </div>
      </section>

      {/* 4. THE FLEET: SURGICAL HARDWARE */}
      <section id="fleet" className="py-60 bg-black text-white relative overflow-hidden">
        {/* Dynamic Fleet Lines */}
        <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden opacity-5">
           {[...Array(20)].map((_, i) => (
             <div key={i} className="h-px w-full bg-white mb-20" style={{ transform: `rotate(-45deg) translateY(${i * 100}px)` }} />
           ))}
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <SectionReveal direction="left">
            <div className="flex flex-col md:flex-row justify-between items-end mb-40 gap-12">
               <h2 className="text-8xl md:text-[15rem] font-black uppercase tracking-tighter leading-[0.7] text-white">
                  The <br/> <span className="text-secondary italic">Elite.</span>
               </h2>
               <div className="max-w-sm text-right">
                  <p className="text-white/40 font-bold text-sm uppercase tracking-[0.3em] leading-loose">
                    Commanding a fleet of over 80 specialized transporters stationed across the UK mainland.
                  </p>
               </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-1">
               {[
                 { id: "M-12", title: "Bulk Carrier", spec: "12-Car Capacity" },
                 { id: "R-06", title: "Regional Unit", spec: "6-Car Capacity" },
                 { id: "E-02", title: "Enclosed Elite", spec: "2-Car Capacity" },
                 { id: "S-01", title: "Rapid Asset", spec: "1-Car Capacity" }
               ].map((unit, i) => (
                 <div key={i} className="bg-white/5 p-16 group hover:bg-secondary transition-all duration-700 cursor-pointer">
                    <span className="text-[10px] font-black text-secondary group-hover:text-black transition-colors uppercase tracking-[0.5em] mb-20 block">{unit.id}</span>
                    <h4 className="text-4xl font-black uppercase tracking-tighter mb-4">{unit.title}</h4>
                    <p className="text-white/30 group-hover:text-black/40 transition-colors font-bold text-xs uppercase tracking-widest">{unit.spec}</p>
                    <div className="mt-12 h-px w-8 bg-white/20 group-hover:bg-black/20 transition-colors" />
                 </div>
               ))}
            </div>
          </SectionReveal>
        </div>
      </section>

      {/* 5. SERVICE MATRIX: PHASE REVEAL */}
      <section id="services" className="py-60 bg-white">
        <div className="container mx-auto px-6">
           <div className="grid grid-cols-1 lg:grid-cols-2 gap-40">
              <div className="space-y-40">
                 {[
                   { phase: "01", title: "Asset Acquisition", desc: "Surgical collection across national networks using GPS-tracked elite fleets." },
                   { phase: "02", title: "Strategic Storage", phase_id: "Nexus", desc: "Managed inventory control within our 12-acre secure fortress." },
                   { phase: "03", title: "Precision Delivery", desc: "On-time, damage-free asset distribution to the final terminal." }
                 ].map((step, i) => (
                   <SectionReveal key={i}>
                      <div className="group cursor-pointer">
                         <div className="flex items-center gap-6 mb-8">
                            <span className="text-xs font-black text-secondary tabular-nums">PHASE/{step.phase}</span>
                            <div className="h-px flex-1 bg-black/5" />
                         </div>
                         <h3 className="text-6xl md:text-8xl font-black uppercase tracking-tighter mb-8 group-hover:translate-x-4 transition-transform duration-700">{step.title}</h3>
                         <p className="text-xl font-bold text-black/30 uppercase tracking-tight max-w-lg">{step.desc}</p>
                      </div>
                   </SectionReveal>
                 ))}
              </div>
              <div className="relative hidden lg:block">
                 <div className="sticky top-40 aspect-[3/4] bg-black p-20 flex flex-col justify-between overflow-hidden">
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(227,30,36,0.1)_0%,_transparent_70%)]" />
                    <Scan className="text-secondary w-20 h-20" strokeWidth={1} />
                    <div>
                       <h4 className="text-white font-black text-6xl uppercase tracking-tighter leading-none mb-8">Operational <br/> Architecture.</h4>
                       <div className="space-y-4">
                          <div className="flex items-center gap-4">
                             <div className="h-1 w-12 bg-secondary" />
                             <span className="text-[10px] font-black text-white/40 uppercase tracking-widest">Efficiency Optimized</span>
                          </div>
                          <div className="flex items-center gap-4">
                             <div className="h-1 w-4 bg-white/10" />
                             <span className="text-[10px] font-black text-white/40 uppercase tracking-widest">Damage Free Standard</span>
                          </div>
                       </div>
                    </div>
                 </div>
              </div>
           </div>
        </div>
      </section>

      {/* 6. CAREERS: JOIN THE ELITE */}
      <section className="py-60 bg-secondary">
         <div className="container mx-auto px-6 text-center">
            <SectionReveal>
               <span className="text-xs font-black text-black uppercase tracking-[1em] mb-16 block">Operational Expansion</span>
               <h2 className="text-7xl md:text-[15rem] font-black text-white uppercase tracking-tighter leading-[0.7] mb-20 italic">
                  Command <br/> The Fleet.
               </h2>
               <div className="max-w-4xl mx-auto space-y-16">
                  <p className="text-3xl font-black text-black uppercase tracking-tighter leading-none">
                     We are recruiting Class 1 HGV Drivers to represent the UK&apos;s most prestigious logistics brand.
                  </p>
                  <Link href="#">
                    <Button size="lg" className="rounded-none h-28 px-24 bg-black text-white font-black tracking-[0.5em] text-sm hover:scale-105 transition-all">
                       VIEW VACANCIES
                    </Button>
                  </Link>
               </div>
            </SectionReveal>
         </div>
      </section>

      {/* 7. FINAL PROTOCOL: CONTACT */}
      <section id="contact" className="py-0 bg-white">
         <div className="flex flex-col lg:flex-row">
            <div className="lg:w-3/5 p-12 md:p-32 bg-black text-white flex flex-col justify-center relative overflow-hidden">
               <div className="absolute top-0 right-0 text-[40rem] font-black text-white/[0.02] leading-none translate-x-1/2 -translate-y-1/2 select-none pointer-events-none">A1</div>
               <SectionReveal direction="right">
                  <h2 className="text-8xl md:text-[12rem] font-black uppercase tracking-tighter leading-[0.7] mb-20 relative z-10">
                    Terminal <br/> <span className="text-secondary italic">Access.</span>
                  </h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-20 relative z-10">
                     <div className="space-y-8">
                        <div>
                           <span className="text-[10px] font-black text-secondary uppercase tracking-[0.5em] mb-4 block">Central Hotline</span>
                           <div className="text-6xl font-black tabular-nums">01506 631133</div>
                        </div>
                        <div className="h-px w-full bg-white/10" />
                        <div>
                           <span className="text-[10px] font-black text-secondary uppercase tracking-[0.5em] mb-4 block">Strategic Email</span>
                           <div className="text-xl font-bold uppercase tracking-tight">info@a1automotive.co.uk</div>
                        </div>
                     </div>
                     <div className="flex flex-col justify-end">
                        <span className="text-[10px] font-black text-secondary uppercase tracking-[0.5em] mb-4 block">Headquarters</span>
                        <p className="text-xl font-black uppercase leading-tight">
                           12 Blackburn Road<br/>
                           Bathgate, EH48 2EY<br/>
                           Scotland, UK
                        </p>
                     </div>
                  </div>
               </SectionReveal>
            </div>
            <div className="lg:w-2/5 bg-secondary flex flex-col justify-center items-center group cursor-pointer overflow-hidden relative min-h-[700px]">
               <div className="absolute inset-0 bg-white translate-y-full group-hover:translate-y-0 transition-transform duration-1000" />
               <motion.div 
                 whileHover={{ scale: 1.05 }}
                 className="relative z-10 text-center"
               >
                 <h3 className="text-white group-hover:text-black font-black text-[15vw] lg:text-[10vw] uppercase leading-none tracking-tighter mb-16 transition-colors duration-700">
                    INITIATE <br/> QUOTE
                 </h3>
                 <div className="h-40 w-40 rounded-full border-8 border-white group-hover:border-black flex items-center justify-center mx-auto transition-all duration-700">
                    <ArrowRight size={80} className="text-white group-hover:text-black group-hover:translate-x-6 transition-all duration-1000" strokeWidth={5} />
                 </div>
               </motion.div>
            </div>
         </div>
      </section>
    </div>
  );
}
