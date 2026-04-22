"use client";

import { motion } from "framer-motion";
import { FileText } from "lucide-react";
import { QuoteForm } from "@/components/QuoteForm";

const pdiSteps = [
  {
    t: "Technical Inspection",
    d: "Multi-point safety and cosmetic auditing to manufacturer standards.",
  },
  {
    t: "Fluid & Level Checks",
    d: "Comprehensive mechanical preparation before dealer delivery.",
  },
  {
    t: "Software Updates",
    d: "Integration and activation of vehicle technical systems.",
  },
  {
    t: "Valeting & Detailing",
    d: "Showroom-standard cosmetic preparation for immediate resale.",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 18 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] },
  }),
};

export default function PDIPage() {
  return (
    <div className="bg-white min-h-screen pt-20">

      {/* Hero */}
      <section className="relative h-[60vh] flex items-center bg-black overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1620055375841-869f88636b69?q=80&w=2070&auto=format&fit=crop"
            alt="A1 Automotive PDI technical suites"
            className="w-full h-full object-cover opacity-35 grayscale"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent" />
        </div>

        <div className="container relative z-10 px-6 mx-auto">
          <motion.div
            className="max-w-4xl"
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          >
            <span className="text-[10px] font-black text-secondary uppercase tracking-[0.4em] mb-6 block">
              Service Division 03
            </span>
            <h1 className="text-5xl md:text-8xl font-black text-white uppercase tracking-tighter leading-[0.85] mb-6">
              PDI &amp; <br />
              <span className="text-secondary italic">Defleet.</span>
            </h1>
            <p className="text-lg text-white/50 font-semibold uppercase tracking-[0.15em] max-w-xl leading-snug">
              Precision technical preparation &amp; end-of-lease management.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Narrative */}
      <section className="py-28 border-b border-neutral-100">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
            <motion.div
              className="space-y-7"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-60px" }}
              variants={fadeUp}
            >
              <h2 className="text-4xl font-black uppercase tracking-tighter">
                Manufacturer-Standard <br /> Technical Preparation.
              </h2>
              <div className="text-lg text-neutral-500 font-medium leading-relaxed space-y-5">
                <p>
                  A1 Automotive Ltd provides a seamless transition from storage to showroom. Our in-house technical suites are equipped to handle high-volume Pre-Delivery Inspections (PDI) with precision and speed.
                </p>
                <p>
                  For leasing groups and fleet operators, our 'Inspect and Collect' defleet service ensures end-of-contract assets are audited, prepared, and ready for redistribution within compressed timeframes.
                </p>
              </div>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              {pdiSteps.map((s, i) => (
                <motion.div
                  key={s.t}
                  className="group"
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-40px" }}
                  variants={fadeUp}
                  custom={i * 0.5}
                >
                  <div className="flex items-center gap-4 mb-3">
                    <span className="text-[10px] font-black text-secondary tabular-nums">0{i + 1}</span>
                    <div className="h-px flex-1 bg-neutral-100 group-hover:bg-secondary transition-colors duration-300" />
                  </div>
                  <h4 className="text-lg font-black uppercase tracking-tight mb-2">{s.t}</h4>
                  <p className="text-[10px] font-semibold text-neutral-400 uppercase tracking-[0.15em] leading-relaxed">{s.d}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Quote */}
      <section className="py-28 bg-white">
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            <motion.div
              className="lg:w-1/2"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
            >
              <h2 className="text-4xl font-black uppercase tracking-tighter mb-6">
                Rapid <br />
                <span className="text-secondary italic">Turnaround.</span>
              </h2>
              <p className="text-lg font-medium text-neutral-400 leading-relaxed mb-10 max-w-md">
                Our technical PDI suites can process hundreds of units weekly. Submit your defleet requirements for a bespoke proposal.
              </p>
              <div className="flex items-center gap-5">
                <FileText className="text-secondary shrink-0" size={28} strokeWidth={1.5} />
                <span className="font-black uppercase tracking-[0.15em] text-xs">Full Digital Inspection Reports</span>
              </div>
            </motion.div>
            <motion.div
              className="lg:w-1/2 w-full"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              custom={1}
            >
              <QuoteForm service="PDI & DEFLEET" />
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
