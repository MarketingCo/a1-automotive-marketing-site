"use client";

import { motion } from "framer-motion";
import { Truck, Map, Shield, Clock, CheckCircle2, ArrowRight, Award, Users, Briefcase } from "lucide-react";
import { Button } from "@/components/ui/Button";

const benefits = [
  { t: "Regional Stability", d: "Consistent work based out of our central Bathgate hub." },
  { t: "Modern Fleet", d: "Operate high-spec Scania and DAF transporter units." },
  { t: "Elite Training", d: "Full training provided for specialized multi-car operations." },
  { t: "Competitive Rates", d: "Leading industry pay with reliable 7-day-a-week rotas." }
];

export default function CareersPage() {
  return (
    <div className="bg-white min-h-screen pt-20">
      {/* Hero */}
      <section className="relative h-[70vh] flex items-center bg-black overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-40">
           <img 
             src="https://images.unsplash.com/photo-1590674899484-13da0d1b58f5?q=80&w=2070&auto=format&fit=crop" 
             alt="A1 Driving Team" 
             className="w-full h-full object-cover"
           />
           <div className="absolute inset-0 bg-gradient-to-r from-black via-black/60 to-transparent" />
        </div>
        
        <div className="container relative z-10 px-6 mx-auto">
          <div className="max-w-4xl">
            <span className="text-xs font-black text-secondary uppercase tracking-[0.5em] mb-8 block">Operational Growth</span>
            <h1 className="text-6xl md:text-[10rem] font-black text-white uppercase tracking-tighter leading-[0.8] mb-12">
               Command <br/> <span className="text-secondary italic">The Fleet.</span>
            </h1>
            <p className="text-xl text-white/60 font-bold uppercase tracking-widest max-w-2xl">
               Actively Recruiting Class 1 HGV Drivers for National Operations.
            </p>
          </div>
        </div>
      </section>

      {/* Why A1 */}
      <section className="py-32 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
             <div>
                <h2 className="text-4xl font-black uppercase tracking-tighter mb-8">Professional Excellence <br/> Behind the Wheel.</h2>
                <p className="text-lg text-slate-600 font-medium leading-relaxed mb-12 max-w-xl">
                  At A1 Automotive Ltd, our drivers are the elite vanguard of our business. We invest in the best people and provide them with the best equipment in the industry. As we expand our national footprint, we are looking for dedicated professionals to join our Bathgate-based team.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                   {benefits.map((b, i) => (
                     <div key={i} className="group border-l-2 border-slate-100 pl-6 hover:border-secondary transition-all">
                        <h4 className="font-black uppercase tracking-tight text-black mb-2">{b.t}</h4>
                        <p className="text-xs font-bold text-slate-400 uppercase tracking-widest leading-relaxed">{b.d}</p>
                     </div>
                   ))}
                </div>
             </div>
             <div className="bg-slate-950 p-12 md:p-20 text-white flex flex-col justify-center border-t-8 border-secondary">
                <h3 className="text-3xl font-black uppercase mb-8">Express Interest</h3>
                <form className="space-y-6">
                   <input type="text" placeholder="FULL NAME" className="w-full bg-white/5 border border-white/10 p-4 text-[10px] font-bold tracking-widest focus:outline-none focus:border-secondary" />
                   <input type="text" placeholder="LICENSE CATEGORY" className="w-full bg-white/5 border border-white/10 p-4 text-[10px] font-bold tracking-widest focus:outline-none focus:border-secondary" />
                   <input type="email" placeholder="EMAIL ADDRESS" className="w-full bg-white/5 border border-white/10 p-4 text-[10px] font-bold tracking-widest focus:outline-none focus:border-secondary" />
                   <textarea placeholder="EXPERIENCE SUMMARY" rows={3} className="w-full bg-white/5 border border-white/10 p-4 text-[10px] font-bold tracking-widest focus:outline-none focus:border-secondary"></textarea>
                   <Button variant="secondary" className="w-full h-20 rounded-none font-black tracking-widest text-xs">SUBMIT APPLICATION</Button>
                </form>
             </div>
          </div>
        </div>
      </section>

      {/* Recruitment Terminal */}
      <section className="py-20 bg-slate-50 border-y border-slate-200">
         <div className="container mx-auto px-6 text-center">
            <span className="text-[10px] font-black text-slate-400 uppercase tracking-[0.4em] mb-4 block">Direct Career Line</span>
            <div className="text-3xl font-black text-black uppercase tabular-nums">careers@a1automotive.co.uk</div>
         </div>
      </section>
    </div>
  );
}
