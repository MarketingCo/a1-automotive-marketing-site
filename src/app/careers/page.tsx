"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";

const benefits = [
  { t: "Regional Stability", d: "Consistent work based out of our central Bathgate hub." },
  { t: "Modern Fleet", d: "Operate high-specification Scania and DAF transporter units." },
  { t: "Elite Training", d: "Full training provided for specialised multi-car operations." },
  { t: "Competitive Rates", d: "Leading industry pay with reliable seven-day rotas." },
];

const fadeUp = {
  hidden: { opacity: 0, y: 18 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] },
  }),
};

export default function CareersPage() {
  return (
    <div className="bg-white min-h-screen pt-20">

      {/* Hero */}
      <section className="relative h-[65vh] flex items-center bg-black overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1590674899484-13da0d1b58f5?q=80&w=2070&auto=format&fit=crop"
            alt="A1 Automotive professional HGV drivers"
            className="w-full h-full object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/60 to-transparent" />
        </div>

        <div className="container relative z-10 px-6 mx-auto">
          <motion.div
            className="max-w-4xl"
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] }}
          >
            <span className="text-[10px] font-black text-secondary uppercase tracking-[0.4em] mb-6 block">
              Operational Growth
            </span>
            <h1 className="text-5xl md:text-9xl font-black text-white uppercase tracking-tighter leading-[0.82] mb-10">
              Command <br />
              <span className="text-secondary italic">The Fleet.</span>
            </h1>
            <p className="text-lg text-white/50 font-semibold uppercase tracking-[0.15em] max-w-xl leading-snug">
              Actively recruiting Class 1 HGV drivers for national operations.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Why A1 */}
      <section className="py-28 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-60px" }}
              variants={fadeUp}
            >
              <h2 className="text-4xl font-black uppercase tracking-tighter mb-7">
                Professional Excellence <br /> Behind the Wheel.
              </h2>
              <p className="text-lg text-neutral-500 font-medium leading-relaxed mb-10 max-w-xl">
                At A1 Automotive Ltd, our drivers are the vanguard of our business. We invest in exceptional people and provide them with the best equipment in the industry. As we expand our national footprint, we are seeking dedicated professionals to join our Bathgate-based team.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-7">
                {benefits.map((b, i) => (
                  <motion.div
                    key={b.t}
                    className="group border-l-2 border-neutral-100 pl-5 hover:border-secondary transition-colors duration-200"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={fadeUp}
                    custom={i * 0.5}
                  >
                    <h4 className="font-black uppercase tracking-tight text-black mb-1.5">{b.t}</h4>
                    <p className="text-[10px] font-semibold text-neutral-400 uppercase tracking-[0.15em] leading-relaxed">{b.d}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              className="bg-neutral-950 p-10 md:p-16 text-white border-t-4 border-secondary"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-60px" }}
              variants={fadeUp}
              custom={1}
            >
              <h3 className="text-2xl font-black uppercase tracking-tight mb-7">Express Interest</h3>
              <form className="space-y-5">
                <input
                  type="text"
                  placeholder="Full Name"
                  autoComplete="name"
                  className="w-full bg-white/5 border border-white/10 px-4 py-3 text-xs font-semibold tracking-wide text-white placeholder:text-white/30 focus:outline-none focus:border-secondary transition-colors duration-150"
                />
                <input
                  type="text"
                  placeholder="Licence Category (e.g. Class 1 HGV)"
                  className="w-full bg-white/5 border border-white/10 px-4 py-3 text-xs font-semibold tracking-wide text-white placeholder:text-white/30 focus:outline-none focus:border-secondary transition-colors duration-150"
                />
                <input
                  type="email"
                  placeholder="Email Address"
                  autoComplete="email"
                  className="w-full bg-white/5 border border-white/10 px-4 py-3 text-xs font-semibold tracking-wide text-white placeholder:text-white/30 focus:outline-none focus:border-secondary transition-colors duration-150"
                />
                <textarea
                  placeholder="Experience Summary"
                  rows={3}
                  className="w-full bg-white/5 border border-white/10 px-4 py-3 text-xs font-semibold tracking-wide text-white placeholder:text-white/30 focus:outline-none focus:border-secondary transition-colors duration-150 resize-none"
                />
                <Button
                  variant="secondary"
                  className="w-full h-14 rounded-none font-black tracking-[0.2em] text-xs transition-all duration-200 hover:opacity-90 active:scale-[0.99]"
                >
                  Submit Application
                </Button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Direct line */}
      <section className="py-16 bg-neutral-50 border-y border-neutral-200">
        <div className="container mx-auto px-6 text-center">
          <span className="text-[10px] font-black text-neutral-400 uppercase tracking-[0.35em] mb-3 block">
            Direct Career Enquiries
          </span>
          <a
            href="mailto:careers@a1automotive.co.uk"
            className="text-2xl font-black text-black uppercase tabular-nums hover:text-secondary transition-colors duration-200"
          >
            careers@a1automotive.co.uk
          </a>
        </div>
      </section>
    </div>
  );
}
