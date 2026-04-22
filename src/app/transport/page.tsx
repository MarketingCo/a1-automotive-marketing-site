"use client";

import { motion } from "framer-motion";
import { Map, Clock } from "lucide-react";
import { QuoteForm } from "@/components/QuoteForm";
import Link from "next/link";

const transporterTypes = [
  {
    id: "TYPE-12",
    name: "11/12-Car Transporter",
    capacity: "Maximum Payload",
    use: "Manufacturer trunking and large-scale fleet distribution.",
    features: [
      "High-volume capacity",
      "National network optimised",
      "Real-time GPS telematics",
    ],
  },
  {
    id: "TYPE-06",
    name: "6-Car Regional Carrier",
    capacity: "Medium Payload",
    use: "Dealership network support and regional multi-drop deliveries.",
    features: [
      "Enhanced manoeuvrability",
      "Dealer-friendly footprint",
      "Multi-drop optimised",
    ],
  },
  {
    id: "TYPE-ENC",
    name: "Enclosed Secure Unit",
    capacity: "Premium Payload",
    use: "High-value, prototype, and classic asset movement.",
    features: [
      "Total weather protection",
      "Full privacy screening",
      "Zero-defect guaranteed",
    ],
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

export default function TransportPage() {
  return (
    <div className="bg-white min-h-screen pt-20">

      {/* Hero */}
      <section className="relative h-[60vh] flex items-center bg-black overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?q=80&w=2070&auto=format&fit=crop"
            alt="A1 Automotive transporter fleet in operation"
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
              Service Division 01
            </span>
            <h1 className="text-5xl md:text-8xl font-black text-white uppercase tracking-tighter leading-[0.85] mb-6">
              National <br />
              <span className="text-secondary italic">Transport.</span>
            </h1>
            <p className="text-lg text-white/50 font-semibold uppercase tracking-[0.15em] max-w-xl leading-snug">
              High-capacity vehicle distribution across the UK &amp; Ireland.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Narrative & Stats */}
      <section className="py-28 border-b border-neutral-100">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
            <motion.div
              className="space-y-7"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-60px" }}
              variants={fadeUp}
            >
              <h2 className="text-4xl font-black uppercase tracking-tighter">
                Commanding the <br /> UK's Road Networks.
              </h2>
              <div className="text-lg text-neutral-500 font-medium leading-relaxed space-y-5">
                <p>
                  A1 Automotive Ltd operates one of the most sophisticated car transporter fleets in the UK. From single-unit high-value collections to large-scale manufacturer distributions, our operations are engineered for reliability.
                </p>
                <p>
                  Every vehicle in our 80+ unit fleet is equipped with real-time GPS telematics, providing our Bathgate mission control with complete transparency over every asset in transit.
                </p>
              </div>
            </motion.div>

            <motion.div
              className="grid grid-cols-2 gap-3"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-60px" }}
              variants={fadeUp}
              custom={1}
            >
              {[
                { stat: "82", label: "Active Units" },
                { stat: "100%", label: "GPS Tracked" },
                { stat: "24/7", label: "Operational" },
                { stat: "0%", label: "Defect Target" },
              ].map((item) => (
                <div
                  key={item.label}
                  className="bg-neutral-50 p-10 flex flex-col justify-center border-t-4 border-black hover:border-secondary transition-colors duration-300"
                >
                  <div className="text-5xl font-black mb-2 tabular-nums">{item.stat}</div>
                  <div className="text-[10px] font-black uppercase tracking-[0.25em] text-secondary">
                    {item.label}
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Fleet Specifications */}
      <section className="py-28 bg-neutral-50">
        <div className="container mx-auto px-6">
          <motion.div
            className="mb-16 text-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
          >
            <h2 className="text-4xl font-black uppercase tracking-tighter mb-3">Fleet Specifications</h2>
            <div className="h-1 w-16 bg-secondary mx-auto" />
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {transporterTypes.map((type, i) => (
              <motion.div
                key={type.id}
                className="bg-white border border-neutral-200 p-10 hover:shadow-lg transition-shadow duration-300 group"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-40px" }}
                variants={fadeUp}
                custom={i}
              >
                <div className="text-[10px] font-black text-secondary mb-10 uppercase tracking-[0.25em]">
                  {type.id}
                </div>
                <h3 className="text-2xl font-black uppercase tracking-tight mb-2">{type.name}</h3>
                <p className="text-[10px] font-black text-neutral-400 uppercase tracking-[0.2em] mb-8">
                  {type.capacity}
                </p>
                <ul className="space-y-3 mb-12">
                  {type.features.map((f) => (
                    <li key={f} className="flex items-center gap-3 text-xs font-semibold uppercase tracking-tight text-neutral-500">
                      <div className="h-px w-4 bg-secondary shrink-0" />
                      {f}
                    </li>
                  ))}
                </ul>
                <p className="text-[10px] font-semibold uppercase tracking-[0.1em] text-neutral-300 group-hover:text-neutral-500 transition-colors duration-300 italic leading-relaxed">
                  {type.use}
                </p>
              </motion.div>
            ))}
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
                Secure your <br />
                <span className="text-secondary italic">Transport Slot.</span>
              </h2>
              <p className="text-lg font-medium text-neutral-400 leading-relaxed mb-10 max-w-md">
                Our national network manages over 100,000 movements annually. Submit a logistics proposal today.
              </p>
              <div className="space-y-5">
                <div className="flex items-center gap-5 group">
                  <div className="h-11 w-11 rounded-full border border-neutral-200 flex items-center justify-center text-secondary group-hover:bg-secondary group-hover:text-white group-hover:border-secondary transition-all duration-200">
                    <Clock size={18} />
                  </div>
                  <span className="font-black uppercase tracking-[0.15em] text-xs">2-Hour Lead Response</span>
                </div>
                <div className="flex items-center gap-5 group">
                  <div className="h-11 w-11 rounded-full border border-neutral-200 flex items-center justify-center text-secondary group-hover:bg-secondary group-hover:text-white group-hover:border-secondary transition-all duration-200">
                    <Map size={18} />
                  </div>
                  <span className="font-black uppercase tracking-[0.15em] text-xs">Full UK &amp; Ireland Coverage</span>
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
              <QuoteForm service="VEHICLE TRANSPORT" />
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
