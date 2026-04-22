"use client";

import { motion } from "framer-motion";
import { Warehouse, HardHat, Lock, Eye } from "lucide-react";
import { QuoteForm } from "@/components/QuoteForm";

const storageFeatures = [
  {
    title: "12-Acre Secure Compound",
    desc: "A fully hard-standing, high-security facility engineered for high-volume automotive inventory.",
    icon: Warehouse,
  },
  {
    title: "HMRC Bonded Storage",
    desc: "Authorised HMRC bonded and duty-suspended solutions for manufacturers and importers.",
    icon: Lock,
  },
  {
    title: "24/7 Monitored Security",
    desc: "Perimeter alarms, high-tier CCTV, and on-site security personnel providing round-the-clock protection.",
    icon: Eye,
  },
  {
    title: "In-House PDI Suites",
    desc: "High-capacity Pre-Delivery Inspection bays for rapid dealer network preparation.",
    icon: HardHat,
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 18 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] },
  }),
};

export default function StoragePage() {
  return (
    <div className="bg-white min-h-screen pt-20">

      {/* Hero */}
      <section className="relative h-[60vh] flex items-center bg-black overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=2070&auto=format&fit=crop"
            alt="A1 Automotive vehicle storage facility in Bathgate"
            className="w-full h-full object-cover opacity-35 grayscale"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent" />
        </div>

        <div className="container relative z-10 px-6 mx-auto">
          <motion.div
            className="max-w-4xl"
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] }}
          >
            <span className="text-[10px] font-black text-secondary uppercase tracking-[0.4em] mb-6 block">
              Service Division 02
            </span>
            <h1 className="text-5xl md:text-8xl font-black text-white uppercase tracking-tighter leading-[0.85] mb-6">
              Secure <br />
              <span className="text-secondary italic">Storage.</span>
            </h1>
            <p className="text-lg text-white/50 font-semibold uppercase tracking-[0.15em] max-w-xl leading-snug">
              Strategic vehicle inventory management in Central Scotland.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Infrastructure */}
      <section className="py-28 border-b border-neutral-100">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <motion.div
              className="space-y-7"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-60px" }}
              variants={fadeUp}
            >
              <h2 className="text-4xl font-black uppercase tracking-tighter">
                A Fortress for <br /> Automotive Assets.
              </h2>
              <div className="text-lg text-neutral-500 font-medium leading-relaxed space-y-5">
                <p>
                  A1 Automotive Ltd operates a purpose-built 12-acre storage facility in Bathgate, strategically positioned between Edinburgh and Glasgow. This hub serves as the primary Scottish inventory centre for several major European manufacturers.
                </p>
                <p>
                  Our facility is designed for high-velocity intake and output, enabling us to manage significant fleet movements with surgical precision. Every vehicle is tracked via our digital inventory system from the moment it enters the site.
                </p>
              </div>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {storageFeatures.map((f, i) => (
                <motion.div
                  key={f.title}
                  className="p-8 bg-neutral-50 border-l-4 border-secondary group hover:bg-black transition-colors duration-400"
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-40px" }}
                  variants={fadeUp}
                  custom={i * 0.5}
                >
                  <f.icon
                    className="text-secondary mb-5 transition-transform duration-200 group-hover:scale-110"
                    size={28}
                    strokeWidth={1.75}
                  />
                  <h4 className="text-lg font-black uppercase tracking-tight mb-2.5 text-black group-hover:text-white transition-colors duration-400">
                    {f.title}
                  </h4>
                  <p className="text-[10px] font-semibold text-neutral-400 uppercase tracking-[0.15em] group-hover:text-white/40 transition-colors duration-400 leading-relaxed">
                    {f.desc}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Quote */}
      <section className="py-28 bg-neutral-950 text-white">
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
                Capacity <br />
                <span className="text-secondary italic">Available.</span>
              </h2>
              <p className="text-lg font-medium text-white/40 leading-relaxed mb-10 max-w-md">
                Whether you require short-term bonded storage or long-term inventory management, our Bathgate hub has the scale to accommodate.
              </p>
              <div className="grid grid-cols-2 gap-8">
                <div>
                  <div className="text-4xl font-black tabular-nums mb-1.5">2,000+</div>
                  <div className="text-[10px] font-black uppercase tracking-[0.25em] text-secondary">Unit Capacity</div>
                </div>
                <div>
                  <div className="text-4xl font-black tabular-nums mb-1.5">HMRC</div>
                  <div className="text-[10px] font-black uppercase tracking-[0.25em] text-secondary">Bonded Status</div>
                </div>
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
              <QuoteForm service="VEHICLE STORAGE" dark={true} />
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
