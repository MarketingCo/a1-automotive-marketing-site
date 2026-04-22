"use client";

import { motion } from "framer-motion";
import { Phone, Mail, MapPin, ShieldCheck } from "lucide-react";
import { QuoteForm } from "@/components/QuoteForm";

const fadeUp = {
  hidden: { opacity: 0, y: 18 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] },
  }),
};

export default function ContactPage() {
  return (
    <div className="bg-white min-h-screen pt-20">

      {/* Hero */}
      <section className="relative h-[40vh] flex items-center bg-black overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=2070&auto=format&fit=crop"
            alt="A1 Automotive operations centre"
            className="w-full h-full object-cover opacity-20 grayscale"
          />
        </div>
        <div className="container relative z-10 px-6 mx-auto">
          <motion.h1
            className="text-5xl md:text-8xl font-black text-white uppercase tracking-tighter leading-[0.85]"
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] }}
          >
            Contact <br />
            <span className="text-secondary italic">A1 Ops.</span>
          </motion.h1>
        </div>
      </section>

      {/* Main Grid */}
      <section className="py-28 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">

            {/* Info */}
            <motion.div
              className="space-y-14"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-60px" }}
              variants={fadeUp}
            >
              <div>
                <h2 className="text-4xl font-black uppercase tracking-tighter mb-6 text-black">
                  Central Logistics Terminal
                </h2>
                <p className="text-lg text-neutral-500 font-medium leading-relaxed max-w-md">
                  Our management team is available seven days a week to discuss large-scale transport contracts, manufacturer storage solutions, and technical preparation requirements.
                </p>
              </div>

              <div className="space-y-8">
                <div className="flex items-start gap-6">
                  <div className="h-14 w-14 bg-neutral-50 flex items-center justify-center text-secondary border border-neutral-100 shrink-0 rounded-sm">
                    <Phone size={24} strokeWidth={1.5} />
                  </div>
                  <div>
                    <span className="text-[10px] font-black text-neutral-400 uppercase tracking-[0.2em] mb-1.5 block">
                      Direct Hotline
                    </span>
                    <a
                      href="tel:+441506631133"
                      className="text-3xl font-black text-black tabular-nums hover:text-secondary transition-colors duration-200"
                    >
                      01506 631133
                    </a>
                    <p className="text-[10px] font-bold text-secondary uppercase tracking-tight mt-1.5">
                      2-Hour Enquiry Response
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-6">
                  <div className="h-14 w-14 bg-neutral-50 flex items-center justify-center text-secondary border border-neutral-100 shrink-0 rounded-sm">
                    <Mail size={24} strokeWidth={1.5} />
                  </div>
                  <div>
                    <span className="text-[10px] font-black text-neutral-400 uppercase tracking-[0.2em] mb-1.5 block">
                      Enquiry Inbox
                    </span>
                    <a
                      href="mailto:info@a1automotive.co.uk"
                      className="text-xl font-black text-black hover:text-secondary transition-colors duration-200"
                    >
                      info@a1automotive.co.uk
                    </a>
                    <p className="text-[10px] font-bold text-neutral-400 uppercase tracking-tight mt-1.5">
                      Corporate &amp; Fleet Enquiries
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-6">
                  <div className="h-14 w-14 bg-neutral-50 flex items-center justify-center text-secondary border border-neutral-100 shrink-0 rounded-sm">
                    <MapPin size={24} strokeWidth={1.5} />
                  </div>
                  <div>
                    <span className="text-[10px] font-black text-neutral-400 uppercase tracking-[0.2em] mb-1.5 block">
                      Headquarters
                    </span>
                    <address className="text-lg font-bold text-black not-italic leading-snug">
                      12 Blackburn Road<br />
                      Bathgate, EH48 2EY<br />
                      West Lothian, Scotland
                    </address>
                  </div>
                </div>
              </div>

              <div className="pt-8 border-t border-neutral-100 flex items-center gap-8 opacity-30">
                <ShieldCheck size={36} strokeWidth={1.5} />
                <div className="text-[10px] font-black uppercase tracking-[0.2em] leading-snug">
                  FORS Gold<br />Accredited
                </div>
                <div className="text-[10px] font-black uppercase tracking-[0.2em] leading-snug">
                  RHA<br />Member
                </div>
                <div className="text-[10px] font-black uppercase tracking-[0.2em] leading-snug">
                  Established<br />1998
                </div>
              </div>
            </motion.div>

            {/* Form */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-60px" }}
              variants={fadeUp}
              custom={1}
            >
              <QuoteForm service="GENERAL LOGISTICS" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Map Placeholder */}
      <section className="h-80 bg-neutral-100 flex items-center justify-center border-t border-neutral-200">
        <div className="text-center px-10">
          <MapPin className="text-secondary mx-auto mb-4" size={40} strokeWidth={1.5} />
          <h4 className="text-xl font-black uppercase tracking-tighter mb-1.5 text-black">
            Find Us in Bathgate
          </h4>
          <p className="text-[10px] font-bold text-neutral-400 uppercase tracking-[0.35em]">
            Strategically positioned for UK-wide logistics
          </p>
        </div>
      </section>
    </div>
  );
}
