"use client";

import { motion } from "framer-motion";
import { Truck, Warehouse, ShieldCheck, ArrowRight, Activity } from "lucide-react";
import { Button } from "@/components/ui/Button";
import Link from "next/link";

const services = [
  {
    title: "Vehicle Transport",
    desc: "National UK & Ireland distribution for manufacturers and fleets.",
    href: "/transport",
    icon: Truck,
    id: "01",
  },
  {
    title: "Vehicle Storage",
    desc: "12-acre high-security hub with 2,000+ unit capacity.",
    href: "/storage",
    icon: Warehouse,
    id: "02",
  },
  {
    title: "PDI & Defleet",
    desc: "Precision technical preparation and end-of-lease management.",
    href: "/pdi",
    icon: ShieldCheck,
    id: "03",
  },
];

const marqueeItems = [...Array(6)].flatMap(() => [
  { label: "Fleet Active: 100%" },
  { label: "Capacity: UK Wide" },
  { label: "27 Years of Reliability" },
  { label: "FORS Gold Accredited" },
]);

export default function Home() {
  return (
    <div className="bg-white overflow-x-hidden">

      {/* HERO */}
      <section className="relative h-screen flex items-center bg-black overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?q=80&w=2070&auto=format&fit=crop"
            alt="A1 Automotive car transporter fleet on UK motorway"
            className="w-full h-full object-cover opacity-35 grayscale"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent" />
        </div>

        <div className="container relative z-10 px-6 mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] }}
          >
            <div className="flex items-center gap-5 mb-10">
              <div className="h-px w-16 bg-secondary" />
              <span className="text-[10px] md:text-xs font-black tracking-[0.4em] text-white/70 uppercase">
                National Vehicle Logistics
              </span>
            </div>

            <h1 className="text-5xl md:text-[9rem] font-black text-white leading-[0.82] tracking-tighter uppercase mb-14">
              Strategic <br />
              <span className="text-secondary italic">Infrastructure.</span>
            </h1>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-end">
              <div className="lg:col-span-7">
                <p className="text-xl md:text-3xl font-black text-white/35 leading-none uppercase tracking-tighter border-l-[6px] border-secondary pl-8">
                  80+ Transporters. <br />
                  12-Acre Secure Hub. <br />
                  27 Years of Reliability.
                </p>
              </div>
              <div className="lg:col-span-5">
                <Link href="/contact">
                  <Button
                    size="lg"
                    variant="secondary"
                    className="rounded-none h-20 px-14 font-black tracking-[0.2em] text-sm group bg-secondary hover:bg-white hover:text-black transition-all duration-400 w-full lg:w-auto"
                  >
                    Request a Proposal
                    <ArrowRight className="ml-3 w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
                  </Button>
                </Link>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Status Marquee */}
        <div className="absolute bottom-0 w-full bg-secondary py-3.5 overflow-hidden">
          <div className="flex whitespace-nowrap animate-marquee gap-0">
            {[...marqueeItems, ...marqueeItems].map((item, i) => (
              <div key={i} className="flex items-center gap-8 px-8">
                <span className="text-[10px] font-black text-black uppercase tracking-[0.25em]">
                  {item.label}
                </span>
                <Activity size={12} className="text-black/50 shrink-0" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="py-36 bg-white">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] }}
            className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8"
          >
            <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tighter text-black leading-none">
              Our <span className="text-secondary italic">Core.</span>
            </h2>
            <p className="text-black/30 font-bold uppercase tracking-[0.2em] text-[10px] max-w-xs text-right leading-relaxed">
              Mission-critical logistical support for the UK automotive economy.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-px bg-border">
            {services.map((s, i) => (
              <motion.div
                key={s.id}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.6, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] }}
              >
                <Link href={s.href} className="group block">
                  <div className="bg-[#f9f9f9] p-14 h-full flex flex-col justify-between hover:bg-black transition-colors duration-500 relative overflow-hidden">
                    <div className="absolute top-0 right-0 p-6 text-5xl font-black text-black/4 group-hover:text-white/4 transition-colors duration-500 select-none">
                      {s.id}
                    </div>
                    <div>
                      <s.icon
                        className="text-secondary mb-10 w-10 h-10 transition-transform duration-300 group-hover:scale-110"
                        strokeWidth={1.5}
                      />
                      <h3 className="text-3xl font-black uppercase tracking-tighter text-black group-hover:text-white transition-colors duration-500 mb-4">
                        {s.title}
                      </h3>
                      <p className="text-black/40 font-semibold uppercase text-[10px] tracking-[0.2em] group-hover:text-white/40 transition-colors duration-500 leading-relaxed">
                        {s.desc}
                      </p>
                    </div>
                    <div className="mt-10 flex items-center gap-3 text-[10px] font-black text-secondary uppercase tracking-[0.3em] opacity-0 group-hover:opacity-100 group-hover:translate-x-2 transition-all duration-300">
                      Explore <ArrowRight size={12} />
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* HUB */}
      <section id="about" className="py-36 bg-black text-white relative overflow-hidden">
        <div className="container mx-auto px-6 relative z-10">
          <div className="flex flex-col lg:flex-row gap-24 items-center">
            <motion.div
              className="lg:w-1/2"
              initial={{ opacity: 0, x: -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] }}
            >
              <span className="text-[10px] font-black text-secondary uppercase tracking-[0.4em] mb-10 block">
                The Hub / Bathgate, Scotland
              </span>
              <h2 className="text-6xl md:text-8xl font-black uppercase tracking-tighter leading-[0.82] mb-12">
                12 Acre <br />
                <span className="text-secondary italic">Fortress.</span>
              </h2>
              <p className="text-xl font-semibold text-white/40 leading-relaxed mb-14 max-w-lg">
                Centrally located between Edinburgh and Glasgow, our hub is the primary distribution terminal for the UK's leading manufacturers.
              </p>
              <div className="grid grid-cols-2 gap-8">
                <div>
                  <div className="text-5xl font-black mb-1.5 tabular-nums">2,000+</div>
                  <div className="text-[10px] font-black uppercase tracking-[0.25em] text-secondary">Unit Capacity</div>
                </div>
                <div>
                  <div className="text-5xl font-black mb-1.5 tabular-nums">24/7</div>
                  <div className="text-[10px] font-black uppercase tracking-[0.25em] text-secondary">Secured Site</div>
                </div>
              </div>
            </motion.div>

            <motion.div
              className="lg:w-1/2"
              initial={{ opacity: 0, x: 24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] }}
            >
              <div className="aspect-square bg-white/5 border border-white/10 flex items-center justify-center p-20 group relative overflow-hidden">
                <div className="absolute inset-0 bg-secondary scale-y-0 origin-bottom group-hover:scale-y-100 transition-transform duration-600 ease-out" />
                <Warehouse
                  size={100}
                  className="text-secondary group-hover:text-white transition-colors duration-400 relative z-10"
                  strokeWidth={0.75}
                />
                <span className="absolute bottom-8 left-8 text-xs font-black uppercase tracking-[0.3em] opacity-20 group-hover:opacity-100 group-hover:text-white transition-all duration-300">
                  Hub Specs
                </span>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-52 bg-[#f5f5f5] text-center">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] }}
          >
            <h2 className="text-6xl md:text-9xl font-black text-black uppercase tracking-tighter leading-[0.8] mb-16">
              Direct <br />
              <span className="text-secondary italic">Access.</span>
            </h2>
            <div className="max-w-3xl mx-auto space-y-12">
              <p className="text-2xl font-semibold text-black/25 uppercase tracking-tight leading-snug">
                Contact our regional operations team to discuss transport and storage contracts.
              </p>
              <div className="flex flex-wrap justify-center items-center gap-8">
                <Link href="/contact">
                  <Button
                    size="lg"
                    className="rounded-none h-20 px-16 bg-black text-white font-black tracking-[0.2em] text-sm hover:bg-secondary transition-all duration-300 hover:scale-[1.01] active:scale-[0.99]"
                  >
                    Open an Enquiry
                  </Button>
                </Link>
                <div className="flex flex-col items-start border-l-2 border-black/10 pl-8 text-left">
                  <span className="text-[10px] font-black text-black/40 uppercase tracking-[0.25em] mb-1">
                    Direct Hotline
                  </span>
                  <a
                    href="tel:+441506631133"
                    className="text-2xl font-black text-black tabular-nums hover:text-secondary transition-colors duration-200"
                  >
                    01506 631133
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
