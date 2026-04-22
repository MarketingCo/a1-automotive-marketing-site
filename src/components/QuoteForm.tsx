"use client";

import React from "react";
import { Button } from "./ui/Button";
import { cn } from "@/lib/utils";

interface QuoteFormProps {
  service?: string;
  dark?: boolean;
}

export const QuoteForm = ({ service = "GENERAL LOGISTICS", dark = false }: QuoteFormProps) => {
  const inputClass = cn(
    "w-full px-4 py-3 text-xs font-semibold tracking-wide focus:outline-none transition-colors duration-150 border",
    dark
      ? "bg-white/5 border-white/10 text-white placeholder:text-white/30 focus:border-secondary"
      : "bg-neutral-50 border-neutral-200 text-black placeholder:text-neutral-400 focus:border-secondary"
  );

  const labelClass =
    "block text-[10px] font-black uppercase tracking-[0.2em] mb-1.5 " +
    (dark ? "text-white/40" : "text-neutral-400");

  return (
    <div
      className={cn(
        "p-8 md:p-10 shadow-xl border-t-4 border-secondary",
        dark ? "bg-neutral-900 text-white" : "bg-white text-black"
      )}
    >
      <h3 className="text-xl font-black uppercase tracking-tight mb-1">Request a Quote</h3>
      <p className={cn("text-[10px] font-bold uppercase tracking-[0.2em] mb-8", dark ? "text-white/30" : "text-neutral-400")}>
        Response within 2 business hours
      </p>

      <form className="space-y-5">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <div>
            <label className={labelClass}>Your Name</label>
            <input type="text" autoComplete="name" className={inputClass} />
          </div>
          <div>
            <label className={labelClass}>Company Name</label>
            <input type="text" autoComplete="organization" className={inputClass} />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <div>
            <label className={labelClass}>Work Email</label>
            <input type="email" autoComplete="email" className={inputClass} />
          </div>
          <div>
            <label className={labelClass}>Service Required</label>
            <select
              defaultValue={service}
              className={cn(inputClass, "appearance-none cursor-pointer")}
            >
              <option value="GENERAL LOGISTICS">General Logistics</option>
              <option value="VEHICLE TRANSPORT">Vehicle Transport</option>
              <option value="VEHICLE STORAGE">Vehicle Storage</option>
              <option value="PDI & DEFLEET">PDI &amp; Defleet</option>
            </select>
          </div>
        </div>

        <div>
          <label className={labelClass}>Enquiry Details</label>
          <textarea
            rows={4}
            className={cn(inputClass, "resize-none")}
          />
        </div>

        <Button
          variant="secondary"
          className="w-full h-14 rounded-none font-black tracking-[0.2em] text-xs transition-all duration-200 hover:opacity-90 active:scale-[0.99]"
        >
          Submit Enquiry
        </Button>
      </form>
    </div>
  );
};
