"use client";

import React from "react";
import { Button } from "./ui/Button";
import { cn } from "@/lib/utils";

interface QuoteFormProps {
  service?: string;
  dark?: boolean;
}

export const QuoteForm = ({ service = "GENERAL LOGISTICS", dark = false }: QuoteFormProps) => {
  return (
    <div className={cn(
      "p-8 md:p-12 shadow-2xl",
      dark ? "bg-slate-900 border-t-8 border-secondary text-white" : "bg-white border-t-8 border-secondary text-black"
    )}>
      <h3 className="text-2xl font-black uppercase mb-2">Request a Quote</h3>
      <p className={cn("text-xs font-bold uppercase tracking-widest mb-10", dark ? "text-white/40" : "text-slate-400")}>
        Operational response within 2 hours
      </p>

      <form className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <label className="text-[10px] font-black uppercase tracking-widest opacity-50">Your Name</label>
            <input 
              type="text" 
              className={cn(
                "w-full p-4 text-xs font-bold tracking-widest focus:outline-none focus:border-secondary transition-colors",
                dark ? "bg-white/5 border border-white/10 text-white" : "bg-slate-50 border border-slate-200 text-black"
              )} 
            />
          </div>
          <div className="space-y-2">
            <label className="text-[10px] font-black uppercase tracking-widest opacity-50">Company Name</label>
            <input 
              type="text" 
              className={cn(
                "w-full p-4 text-xs font-bold tracking-widest focus:outline-none focus:border-secondary transition-colors",
                dark ? "bg-white/5 border border-white/10 text-white" : "bg-slate-50 border border-slate-200 text-black"
              )} 
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <label className="text-[10px] font-black uppercase tracking-widest opacity-50">Work Email</label>
            <input 
              type="email" 
              className={cn(
                "w-full p-4 text-xs font-bold tracking-widest focus:outline-none focus:border-secondary transition-colors",
                dark ? "bg-white/5 border border-white/10 text-white" : "bg-slate-50 border border-slate-200 text-black"
              )} 
            />
          </div>
          <div className="space-y-2">
            <label className="text-[10px] font-black uppercase tracking-widest opacity-50">Service Type</label>
            <select 
              defaultValue={service}
              className={cn(
                "w-full p-4 text-[10px] font-bold tracking-widest focus:outline-none focus:border-secondary transition-colors appearance-none",
                dark ? "bg-white/5 border border-white/10 text-white" : "bg-slate-50 border border-slate-200 text-black"
              )}
            >
              <option value="GENERAL LOGISTICS">GENERAL LOGISTICS</option>
              <option value="VEHICLE TRANSPORT">VEHICLE TRANSPORT</option>
              <option value="VEHICLE STORAGE">VEHICLE STORAGE</option>
              <option value="PDI & DEFLEET">PDI & DEFLEET</option>
            </select>
          </div>
        </div>

        <div className="space-y-2">
          <label className="text-[10px] font-black uppercase tracking-widest opacity-50">Enquiry Details</label>
          <textarea 
            rows={4}
            className={cn(
              "w-full p-4 text-xs font-bold tracking-widest focus:outline-none focus:border-secondary transition-colors",
              dark ? "bg-white/5 border border-white/10 text-white" : "bg-slate-50 border border-slate-200 text-black"
            )}
          ></textarea>
        </div>

        <Button variant="secondary" className="w-full h-20 rounded-none font-black tracking-[0.4em] text-xs">
          INITIATE REQUEST
        </Button>
      </form>
    </div>
  );
};
