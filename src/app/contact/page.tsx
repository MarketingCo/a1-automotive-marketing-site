"use client";

import { Phone, Mail, MapPin, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { QuoteForm } from "@/components/QuoteForm";

export default function ContactPage() {
  return (
    <div className="bg-white min-h-screen pt-20">
      {/* Hero */}
      <section className="relative h-[40vh] flex items-center bg-black overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-20">
           <img 
             src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=2070&auto=format&fit=crop" 
             alt="Office Operations" 
             className="w-full h-full object-cover grayscale"
           />
        </div>
        <div className="container relative z-10 px-6 mx-auto">
          <h1 className="text-6xl md:text-8xl font-black text-white uppercase tracking-tighter leading-none">
             Contact <br/> <span className="text-secondary italic">A1 Ops.</span>
          </h1>
        </div>
      </section>

      {/* Main Grid */}
      <section className="py-32 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24">
             {/* Left: Info */}
             <div className="space-y-16">
                <div>
                   <h2 className="text-4xl font-black uppercase tracking-tighter mb-8 text-black">Central Logistics Terminal</h2>
                   <p className="text-lg text-slate-600 font-medium leading-relaxed max-w-xl">
                      Our management team is available 7 days a week to discuss large-scale transport contracts, manufacturer storage solutions, and technical preparation requirements.
                   </p>
                </div>

                <div className="space-y-10">
                   <div className="flex items-start gap-8">
                      <div className="h-16 w-16 bg-slate-50 flex items-center justify-center text-secondary border border-black/5 shrink-0">
                         <Phone size={32} />
                      </div>
                      <div>
                         <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-2 block">Direct Hotline</span>
                         <div className="text-4xl font-black text-black tabular-nums">01506 631133</div>
                         <p className="text-xs font-bold text-secondary uppercase tracking-tight mt-2">2-Hour Enquiry Response</p>
                      </div>
                   </div>

                   <div className="flex items-start gap-8">
                      <div className="h-16 w-16 bg-slate-50 flex items-center justify-center text-secondary border border-black/5 shrink-0">
                         <Mail size={32} />
                      </div>
                      <div>
                         <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-2 block">Enquiry Inbox</span>
                         <div className="text-2xl font-black text-black uppercase">info@a1automotive.co.uk</div>
                         <p className="text-xs font-bold text-slate-400 uppercase tracking-tight mt-2">Corporate & Fleet Enquiries</p>
                      </div>
                   </div>

                   <div className="flex items-start gap-8">
                      <div className="h-16 w-16 bg-slate-50 flex items-center justify-center text-secondary border border-black/5 shrink-0">
                         <MapPin size={32} />
                      </div>
                      <div>
                         <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-2 block">Headquarters</span>
                         <p className="text-xl font-bold text-black uppercase leading-tight">
                            12 Blackburn Road, Bathgate<br/>
                            EH48 2EY, West Lothian<br/>
                            Scotland, UK
                         </p>
                      </div>
                   </div>
                </div>

                <div className="pt-10 border-t border-slate-100 flex items-center gap-10 grayscale opacity-40">
                   <ShieldCheck size={40} />
                   <Award size={40} />
                   <div className="text-[10px] font-black uppercase tracking-widest leading-none">Established<br/>1998</div>
                </div>
             </div>

             {/* Right: Form */}
             <div>
                <QuoteForm service="GENERAL LOGISTICS" />
             </div>
          </div>
        </div>
      </section>

      {/* Map Placeholder */}
      <section className="h-[500px] bg-slate-100 flex items-center justify-center border-t border-slate-200">
         <div className="text-center px-10">
            <MapPin className="text-secondary mx-auto mb-6" size={48} />
            <h4 className="text-2xl font-black uppercase tracking-tighter mb-2 text-black">Find Us in Bathgate</h4>
            <p className="text-xs font-bold text-slate-400 uppercase tracking-[0.4em]">Strategically positioned for UK-Wide logistics</p>
         </div>
      </section>
    </div>
  );
}
