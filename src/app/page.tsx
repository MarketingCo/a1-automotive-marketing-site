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
      
      {/* 1. POWER HERO: UK & IRELAND FOCUS */}
      <section className="relative min-h-screen flex items-center bg-slate-950 overflow-hidden py-20">
        <div className="absolute inset-0 z-0">
           <img 
             src="https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?q=80&w=2070&auto=format&fit=crop" 
             alt="Car Transporter" 
             className="absolute inset-0 w-full h-full object-cover opacity-30 grayscale"
           />
           <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/80 to-transparent" />
           <div className="absolute inset-0 bg-grid-white/[0.03] bg-[size:40px_40px]" />
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
                     Established 1998 • UK & Ireland Vehicle Logistics
                   </span>
                </div>

                <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-white leading-[1.05] tracking-tight uppercase mb-8">
                  National <br/> 
                  <span className="text-secondary italic">Logistics Hub.</span>
                </h1>

                <p className="text-xl md:text-2xl font-medium text-slate-400 mb-12 max-w-2xl leading-relaxed">
                  A1 Automotive Ltd provides heavy-duty transport and secure storage for the UK&apos;s leading manufacturers. From our Bathgate hub, we command a fleet of over 80 specialized transporters.
                </p>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12 border-y border-white/10 py-8">
                   <div>
                      <div className="text-3xl font-black text-white tabular-nums">82</div>
                      <div className="text-[10px] font-black uppercase tracking-widest text-secondary">UK Fleet Units</div>
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
                  <p className="text-slate-500 text-sm font-medium mb-8 uppercase tracking-wider">UK & Ireland Response within 2 Hours</p>
                  
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

      {/* 2. THE INFRASTRUCTURE: BATTGATE HUB */}
      <section id="about" className="py-32 bg-white">
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row gap-24 items-start">
             <div className="lg:w-1/2">
                <span className="text-xs font-black text-secondary uppercase tracking-[0.8em] mb-8 block text-center lg:text-left">Central Infrastructure</span>
                <h2 className="text-5xl md:text-7xl font-black text-black uppercase tracking-tighter leading-[0.8] mb-12">
                   The <span className="text-secondary italic">Bathgate</span> Nexus.
                </h2>
                <div className="space-y-8 mb-12">
                   <p className="text-xl font-bold text-slate-600 leading-relaxed border-l-4 border-secondary pl-8 uppercase tracking-tight">
                     Our 12-acre purpose-built storage facility in Central Scotland handles over 2,000 vehicles with 24/7 monitored security.
                   </p>
                   <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      <div className="p-6 bg-slate-50 group hover:bg-black transition-colors duration-500">
                         <div className="flex items-center gap-3 mb-4 text-secondary">
                            <Shield size={24} strokeWidth={3} />
                            <h4 className="font-black uppercase tracking-tighter text-black group-hover:text-white">Security Elite</h4>
                         </div>
                         <p className="text-xs font-bold text-slate-400 uppercase tracking-widest group-hover:text-white/40">DVSA Approved & 24/7 Personnel.</p>
                      </div>
                      <div className="p-6 bg-slate-50 group hover:bg-black transition-colors duration-500">
                         <div className="flex items-center gap-3 mb-4 text-secondary">
                            <HardHat size={24} strokeWidth={3} />
                            <h4 className="font-black uppercase tracking-tighter text-black group-hover:text-white">Technical PDI</h4>
                         </div>
                         <p className="text-xs font-bold text-slate-400 uppercase tracking-widest group-hover:text-white/40">High-capacity prep for UK dealer networks.</p>
                      </div>
                   </div>
                </div>
                <Button variant="outline" className="rounded-none border-2 border-black h-16 px-10 font-black tracking-widest text-xs hover:bg-black hover:text-white transition-all w-full lg:w-auto">
                   VIEW HUB SPECIFICATIONS
                </Button>
             </div>
             <div className="lg:w-1/2 relative">
                <div className="aspect-video bg-slate-900 border-8 border-slate-100 shadow-2xl overflow-hidden group">
                   <img 
                     src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=2070&auto=format&fit=crop" 
                     alt="Vehicle Storage Facility" 
                     className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                   />
                </div>
                <div className="mt-4 grid grid-cols-3 gap-4">
                   <div className="aspect-square bg-slate-100 border border-black/5 overflow-hidden">
                      <img src="https://images.unsplash.com/photo-1590674899484-13da0d1b58f5?q=80&w=2070&auto=format&fit=crop" className="w-full h-full object-cover grayscale" />
                   </div>
                   <div className="aspect-square bg-slate-100 border border-black/5 overflow-hidden">
                      <img src="https://images.unsplash.com/photo-1620055375841-869f88636b69?q=80&w=2070&auto=format&fit=crop" className="w-full h-full object-cover grayscale" />
                   </div>
                   <div className="aspect-square bg-slate-100 border border-black/5 overflow-hidden">
                      <img src="https://images.unsplash.com/photo-1519003722824-192d992a70df?q=80&w=2070&auto=format&fit=crop" className="w-full h-full object-cover grayscale" />
                   </div>
                </div>
             </div>
          </div>
        </div>
      </section>

      {/* 3. TRUST SIGNALS: UK PERFORMANCE */}
      <section className="py-32 bg-slate-950 text-white">
        <div className="container mx-auto px-6">
          <div className="mb-20 text-center">
             <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter mb-4">Proven <span className="text-secondary italic">Reliability.</span></h2>
             <p className="text-xs font-black uppercase tracking-[0.5em] text-white/40">National Performance Metrics</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-1">
             {[
               { title: "OEM Distribution", stat: "5,000+ Units", detail: "Monthly factory-to-hub movements with 99.8% on-time delivery for UK dealer networks." },
               { title: "Fleet Logistics", stat: "7 Days a Week", detail: "Consistent weekend and holiday coverage for the UK&apos;s largest rental and leasing groups." },
               { title: "Damage-Free Delivery", stat: "Zero Defects", detail: "Industry-leading quality control for prototype testing and luxury asset transport." }
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

      {/* 4. THE FLEET: UK & IRELAND COVERAGE */}
      <section id="fleet" className="py-32 bg-white">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
             <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tighter leading-none text-black">
                National <br/> <span className="text-secondary italic">Fleet.</span>
             </h2>
             <p className="text-slate-500 font-bold max-w-xs text-right text-sm uppercase tracking-tight leading-relaxed">
               Modern transporters ranging from 1 to 12-car capacity, stationed throughout the UK.
             </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
             {[
               { t: "12-Car Carrier", d: "High-volume fleet distribution.", img: "https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?q=80&w=800&auto=format&fit=crop" },
               { t: "6-Car Transporter", d: "Regional dealer network support.", img: "https://images.unsplash.com/photo-1580674285054-bed31e145f59?q=80&w=800&auto=format&fit=crop" },
               { t: "Enclosed Secure", d: "High-value and luxury asset transport.", img: "https://images.unsplash.com/photo-1590674899484-13da0d1b58f5?q=80&w=800&auto=format&fit=crop" },
               { t: "Rapid Asset Unit", d: "Single collections and urgent movements.", img: "https://images.unsplash.com/photo-1519003722824-192d992a70df?q=80&w=800&auto=format&fit=crop" }
             ].map((item, i) => (
               <div key={i} className="group border border-slate-100 p-1 bg-white hover:border-black transition-all">
                  <div className="aspect-[4/3] bg-slate-100 mb-6 grayscale group-hover:grayscale-0 transition-all overflow-hidden">
                     <img src={item.img} alt={item.t} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                  </div>
                  <div className="p-6 pt-0">
                    <h4 className="font-black uppercase tracking-tight text-lg mb-2">{item.t}</h4>
                    <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">{item.d}</p>
                  </div>
               </div>
             ))}
          </div>
        </div>
      </section>

      {/* 5. RECRUITMENT: UK DRIVING CAREERS */}
      <section className="py-32 bg-slate-50 border-y border-slate-200">
         <div className="container mx-auto px-6 text-center">
            <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tighter mb-8 text-black">
               Drive for <span className="text-secondary italic">A1.</span>
            </h2>
            <p className="text-xl font-bold text-slate-500 uppercase tracking-tight mb-12 max-w-2xl mx-auto">
               We are recruiting Class 1 HGV Drivers for our Bathgate-based team. Stable national work, modern Scania fleet, and competitive rates.
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

      {/* 6. CONTACT: REGIONAL HQ */}
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
                         <div className="text-5xl font-black tabular-nums hover:text-secondary transition-colors cursor-pointer text-white">01506 631133</div>
                      </div>
                      <div>
                         <span className="text-[10px] font-black text-secondary uppercase tracking-[0.5em] mb-4 block">Strategic Email</span>
                         <div className="text-xl font-bold uppercase tracking-tight hover:text-secondary transition-colors cursor-pointer text-white">info@a1automotive.co.uk</div>
                      </div>
                   </div>
                   <div className="space-y-8">
                      <div>
                         <span className="text-[10px] font-black text-secondary uppercase tracking-[0.5em] mb-4 block">Regional Headquarters</span>
                         <p className="text-lg font-bold uppercase tracking-tight leading-tight text-white/60">
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
             <div className="bg-white p-1">
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
