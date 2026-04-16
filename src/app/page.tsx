"use client";

import { motion, useScroll, useTransform, useSpring, useInView } from "framer-motion";
import { Truck, Warehouse, ShieldCheck, Award, Map, Phone, Mail, CheckCircle2, ArrowRight, Globe, Shield, Factory, Building2, UserCheck, HardHat, Briefcase, ChevronRight, Activity, Zap, Box, Compass, Scan, Database, FileText, Timer, Target } from "lucide-react";
import { Button } from "@/components/ui/Button";
import Link from "next/link";
import { useRef, useEffect, useState } from "react";

// --- Components ---

const SectionReveal = ({ children }: any) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-10%" });
  
  return (
    <motion.div 
      ref={ref} 
      initial={{ opacity: 0, y: 30 }} 
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }} 
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
    >
      {children}
    </motion.div>
  );
};

// --- Page ---

export default function Home() {
  const containerRef = useRef(null);
  
  return (
    <div className="bg-white selection:bg-secondary selection:text-white overflow-x-hidden font-sans text-black" ref={containerRef}>
      
      {/* 1. POWER HERO: DIRECT & BENEFIT-DRIVEN */}
      <section className="relative min-h-screen flex items-center bg-slate-950 overflow-hidden py-20">
        <div className="absolute inset-0 z-0 opacity-20">
           <div className="absolute inset-0 bg-grid-white/[0.05] bg-[size:40px_40px]" />
           <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,_rgba(227,30,36,0.15)_0%,_transparent_60%)]" />
        </div>

        <div className="container relative z-10 px-6 mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-20 items-center">
            <div className="lg:col-span-7">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
              >
                <div className="flex items-center gap-4 mb-8">
                   <div className="h-px w-12 bg-secondary" />
                   <span className="text-xs font-bold tracking-[0.3em] text-white/60 uppercase">
                     Established 1998 • UK & Ireland Coverage
                   </span>
                </div>

                <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-white leading-[1.05] tracking-tight uppercase mb-8">
                  Engineered <br/> 
                  <span className="text-secondary italic">Vehicle Logistics.</span>
                </h1>

                <p className="text-xl md:text-2xl font-medium text-slate-400 mb-12 max-w-2xl leading-relaxed">
                  A1 Automotive Ltd provides high-capacity transport and secure storage for the UK&apos;s leading manufacturers. We reduce lead times and guarantee zero-defect delivery.
                </p>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12 border-y border-white/10 py-8">
                   <div>
                      <div className="text-3xl font-black text-white tabular-nums">82</div>
                      <div className="text-[10px] font-black uppercase tracking-widest text-secondary">Fleet Units</div>
                   </div>
                   <div>
                      <div className="text-3xl font-black text-white tabular-nums">12</div>
                      <div className="text-[10px] font-black uppercase tracking-widest text-secondary">Acre Hub</div>
                   </div>
                   <div>
                      <div className="text-3xl font-black text-white tabular-nums">2,000+</div>
                      <div className="text-[10px] font-black uppercase tracking-widest text-secondary">Secure Slots</div>
                   </div>
                   <div>
                      <div className="text-3xl font-black text-white tabular-nums">27</div>
                      <div className="text-[10px] font-black uppercase tracking-widest text-secondary">Years Exp.</div>
                   </div>
                </div>
              </motion.div>
            </div>

            {/* Embedded Conversion Form */}
            <div className="lg:col-span-5">
               <motion.div 
                 initial={{ opacity: 0, scale: 0.95 }}
                 animate={{ opacity: 1, scale: 1 }}
                 transition={{ duration: 0.8, delay: 0.2 }}
                 className="bg-white p-8 md:p-12 shadow-2xl border-t-8 border-secondary"
               >
                  <h3 className="text-2xl font-black uppercase mb-2">Get a Rapid Quote</h3>
                  <p className="text-slate-500 text-sm font-medium mb-8 uppercase tracking-wider">Operational Response within 2 Hours</p>
                  
                  <form className="space-y-4">
                     <div className="grid grid-cols-2 gap-4">
                        <input type="text" placeholder="NAME" className="w-full bg-slate-50 border border-slate-200 p-4 text-[10px] font-bold tracking-widest focus:outline-none focus:border-secondary transition-colors" />
                        <input type="text" placeholder="COMPANY" className="w-full bg-slate-50 border border-slate-200 p-4 text-[10px] font-bold tracking-widest focus:outline-none focus:border-secondary transition-colors" />
                     </div>
                     <input type="email" placeholder="WORK EMAIL" className="w-full bg-slate-50 border border-slate-200 p-4 text-[10px] font-bold tracking-widest focus:outline-none focus:border-secondary transition-colors" />
                     <select className="w-full bg-slate-50 border border-slate-200 p-4 text-[10px] font-bold tracking-widest focus:outline-none focus:border-secondary transition-colors appearance-none">
                        <option>TRANSPORT ENQUIRY</option>
                        <option>STORAGE SOLUTIONS</option>
                        <option>PDI & TECHNICAL</option>
                        <option>OTHER</option>
                     </select>
                     <textarea placeholder="LOGISTICAL REQUIREMENTS" rows={3} className="w-full bg-slate-50 border border-slate-200 p-4 text-[10px] font-bold tracking-widest focus:outline-none focus:border-secondary transition-colors"></textarea>
                     <Button variant="secondary" className="w-full h-16 rounded-none font-black tracking-[0.3em] text-xs">INITIATE REQUEST</Button>
                  </form>
               </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. THE INFRASTRUCTURE: REAL-WORLD SCALE */}
      <section id="about" className="py-32 bg-white">
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row gap-24 items-start">
             <div className="lg:w-1/2">
                <span className="text-xs font-black text-secondary uppercase tracking-[0.8em] mb-8 block text-center lg:text-left">Strategic Infrastructure</span>
                <h2 className="text-5xl md:text-7xl font-black text-black uppercase tracking-tighter leading-[0.8] mb-12">
                   The <span className="text-secondary italic">Bathgate</span> Super-Hub.
                </h2>
                <div className="space-y-8 mb-12">
                   <p className="text-xl font-bold text-slate-600 leading-relaxed border-l-4 border-secondary pl-8 uppercase tracking-tight">
                     Centrally located for Scotland and the North of England, our 12-acre facility is the logistical engine for the UK&apos;s premier automotive brands.
                   </p>
                   <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      <div className="p-6 bg-slate-50 group hover:bg-black transition-colors duration-500">
                         <div className="flex items-center gap-3 mb-4 text-secondary">
                            <Shield size={24} strokeWidth={3} />
                            <h4 className="font-black uppercase tracking-tighter text-black group-hover:text-white">Security Elite</h4>
                         </div>
                         <p className="text-xs font-bold text-slate-400 uppercase tracking-widest group-hover:text-white/40">24/7 CCTV, Perimeter Alarms & On-Site Personnel.</p>
                      </div>
                      <div className="p-6 bg-slate-50 group hover:bg-black transition-colors duration-500">
                         <div className="flex items-center gap-3 mb-4 text-secondary">
                            <HardHat size={24} strokeWidth={3} />
                            <h4 className="font-black uppercase tracking-tighter text-black group-hover:text-white">Technical PDI</h4>
                         </div>
                         <p className="text-xs font-bold text-slate-400 uppercase tracking-widest group-hover:text-white/40">In-house multi-bay suites for manufacturer prep.</p>
                      </div>
                   </div>
                </div>
                <Button variant="outline" className="rounded-none border-2 border-black h-16 px-10 font-black tracking-widest text-xs hover:bg-black hover:text-white transition-all w-full lg:w-auto">
                   VIEW FACILITY SPECIFICATIONS
                </Button>
             </div>
             <div className="lg:w-1/2 relative">
                <div className="aspect-video bg-slate-100 border border-slate-200 flex items-center justify-center grayscale">
                   {/* This is where the aerial hub photo goes */}
                   <span className="text-slate-300 font-black uppercase tracking-[0.3em] text-sm text-center px-10">
                     [ High-Resolution Aerial View of 12-Acre Bathgate Hub ]
                   </span>
                </div>
                <div className="mt-4 grid grid-cols-3 gap-4">
                   <div className="aspect-square bg-slate-100 grayscale hover:grayscale-0 transition-all cursor-pointer border border-black/5" />
                   <div className="aspect-square bg-slate-100 grayscale hover:grayscale-0 transition-all cursor-pointer border border-black/5" />
                   <div className="aspect-square bg-slate-100 grayscale hover:grayscale-0 transition-all cursor-pointer border border-black/5" />
                </div>
             </div>
          </div>
        </div>
      </section>

      {/* 3. TRUST SIGNALS: CASE STUDIES & ACCREDITATIONS */}
      <section className="py-32 bg-slate-950 text-white">
        <div className="container mx-auto px-6">
          <div className="mb-20 text-center">
             <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter mb-4">Proven <span className="text-secondary italic">Results.</span></h2>
             <p className="text-xs font-black uppercase tracking-[0.5em] text-white/40">Market Performance & Trust Signals</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-1">
             {[
               { title: "OEM Distribution", stat: "5,000+ Units", detail: "Monthly factory-to-hub movements with 99.8% on-time delivery for a major European manufacturer." },
               { title: "De-Fleet Logistics", stat: "24Hr Turnaround", detail: "Rapid inspection and collection cycles for UK&apos;s largest leasing groups, reducing idle inventory costs." },
               { title: "Classic & Prototype", stat: "Total Security", detail: "Zero-defect enclosed transport for prototype testing and high-value private collections across Europe." }
             ].map((caseStudy, i) => (
               <div key={i} className="bg-white/5 p-12 hover:bg-secondary transition-all duration-700 group cursor-default">
                  <div className="text-xs font-black text-secondary group-hover:text-black mb-8 uppercase tracking-widest">{caseStudy.title}</div>
                  <div className="text-4xl font-black mb-6 uppercase tracking-tighter group-hover:text-white tabular-nums">{caseStudy.stat}</div>
                  <p className="text-white/40 font-medium leading-relaxed group-hover:text-white/80 transition-colors uppercase text-[10px] tracking-widest">{caseStudy.detail}</p>
               </div>
             ))}
          </div>

          <div className="mt-20 flex flex-wrap justify-center items-center gap-12 grayscale opacity-40">
             <div className="h-12 w-32 bg-white/10 flex items-center justify-center font-black text-[10px] tracking-widest uppercase border border-white/5">FORS GOLD</div>
             <div className="h-12 w-32 bg-white/10 flex items-center justify-center font-black text-[10px] tracking-widest uppercase border border-white/5">RHA MEMBER</div>
             <div className="h-12 w-32 bg-white/10 flex items-center justify-center font-black text-[10px] tracking-widest uppercase border border-white/5">DVSA APPR.</div>
          </div>
        </div>
      </section>

      {/* 4. THE FLEET: ELITE HARDWARE */}
      <section id="fleet" className="py-32 bg-white">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
             <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tighter leading-none text-black">
                National <br/> <span className="text-secondary italic">Fleet.</span>
             </h2>
             <p className="text-slate-500 font-bold max-w-xs text-right text-sm uppercase tracking-tight leading-relaxed">
               A high-performance transporter fleet stationed from the North East to the South West.
             </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
             {[
               { t: "12-Car Transporter", d: "High-volume manufacturer trunking." },
               { t: "6-Car Carrier", d: "Efficient regional dealership distribution." },
               { t: "Enclosed Unit", d: "High-security transport for luxury assets." },
               { t: "Single Carrier", d: "Rapid response and private collection." }
             ].map((item, i) => (
               <div key={i} className="group border border-slate-100 p-10 hover:border-black transition-all">
                  <div className="aspect-[4/3] bg-slate-100 mb-8 grayscale group-hover:grayscale-0 transition-all flex items-center justify-center">
                     <Truck className="text-slate-200 group-hover:text-secondary transition-colors" size={40} />
                  </div>
                  <h4 className="font-black uppercase tracking-tight text-xl mb-2">{item.t}</h4>
                  <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">{item.d}</p>
               </div>
             ))}
          </div>
        </div>
      </section>

      {/* 5. RECRUITMENT: DRIVING CAREERS */}
      <section className="py-32 bg-slate-50 border-y border-slate-200">
         <div className="container mx-auto px-6 text-center">
            <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tighter mb-8 text-black">
               Drive for <span className="text-secondary italic">A1.</span>
            </h2>
            <p className="text-xl font-bold text-slate-500 uppercase tracking-tight mb-12 max-w-2xl mx-auto">
               We are recruiting Class 1 HGV Drivers for our national operations. Modern fleet, regional stability, and competitive rates.
            </p>
            <div className="flex flex-wrap justify-center gap-6">
               <Button size="lg" className="rounded-none h-16 px-12 bg-black text-white font-black tracking-widest text-xs hover:bg-secondary">
                  VIEW OPEN POSITIONS
               </Button>
               <div className="flex flex-col items-center justify-center border-l-2 border-slate-200 pl-8 text-left">
                  <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">Recruitment Hotline</span>
                  <span className="text-xl font-black text-black uppercase">careers@a1automotive.co.uk</span>
               </div>
            </div>
         </div>
      </section>

      {/* 6. FOOTER/CONTACT: MISSION COMMAND */}
      <section id="contact" className="py-32 bg-black text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 text-[30rem] font-black text-white/[0.02] leading-none translate-x-1/2 -translate-y-1/2 select-none pointer-events-none">A1</div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-32">
             <div>
                <h2 className="text-6xl md:text-8xl font-black uppercase tracking-tighter leading-[0.8] mb-20">
                   Contact <br/> <span className="text-secondary italic">A1 Ops.</span>
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-20">
                   <div className="space-y-8">
                      <div>
                         <span className="text-[10px] font-black text-secondary uppercase tracking-[0.5em] mb-4 block">Central Terminal</span>
                         <div className="text-5xl font-black tabular-nums hover:text-secondary transition-colors cursor-pointer">01506 631133</div>
                      </div>
                      <div>
                         <span className="text-[10px] font-black text-secondary uppercase tracking-[0.5em] mb-4 block">Strategic Email</span>
                         <div className="text-xl font-bold uppercase tracking-tight hover:text-secondary transition-colors cursor-pointer">info@a1automotive.co.uk</div>
                      </div>
                   </div>
                   <div className="space-y-8">
                      <div>
                         <span className="text-[10px] font-black text-secondary uppercase tracking-[0.5em] mb-4 block">Regional Headquarters</span>
                         <p className="text-lg font-bold uppercase tracking-tight leading-tight">
                            A1 Automotive Ltd<br/>
                            12 Blackburn Road, Bathgate<br/>
                            EH48 2EY, Scotland
                         </p>
                      </div>
                      <Link href="https://marketing-company.co.uk" className="text-[10px] font-black text-white/20 uppercase tracking-[0.5em] block pt-12 hover:text-white transition-colors">
                         MADE BY MARKETING COMPANY
                      </Link>
                   </div>
                </div>
             </div>
             <div className="bg-white p-1 md:p-1">
                <div className="h-full w-full bg-slate-900 flex flex-col items-center justify-center p-20 text-center group cursor-pointer overflow-hidden relative">
                   <div className="absolute inset-0 bg-secondary translate-x-full group-hover:translate-x-0 transition-transform duration-700" />
                   <h3 className="text-white font-black text-4xl md:text-6xl uppercase tracking-tighter leading-none mb-12 relative z-10">INITIATE <br/> PROPOSAL</h3>
                   <div className="h-20 w-20 rounded-full border-4 border-white flex items-center justify-center mx-auto group-hover:scale-125 transition-transform duration-500 relative z-10">
                      <ArrowRight size={32} className="text-white group-hover:translate-x-2 transition-transform duration-500" strokeWidth={4} />
                   </div>
                </div>
             </div>
          </div>
        </div>
      </section>
    </div>
  );
}
