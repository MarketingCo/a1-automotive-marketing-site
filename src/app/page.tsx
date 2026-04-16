"use client";

import { motion } from "framer-motion";
import { Truck, Warehouse, ShieldCheck, Clock, CheckCircle2, ChevronRight, MapPin } from "lucide-react";
import { Button } from "@/components/ui/Button";
import Link from "next/link";

const services = [
  {
    title: "Vehicle Transport",
    description: "National coverage with a fleet of 80+ transporters. From single collections to large-scale fleet movements.",
    icon: Truck,
  },
  {
    title: "Vehicle Storage",
    description: "12-acre purpose-built facility in Bathgate with capacity for over 2,000 vehicles.",
    icon: Warehouse,
  },
  {
    title: "PDI & Defleet",
    description: "Comprehensive Pre-Delivery Inspections and efficient defleet collection services.",
    icon: ShieldCheck,
  },
];

const features = [
  "National UK Coverage",
  "80+ Modern Transporters",
  "2,000+ Vehicle Storage Capacity",
  "Proven Reliability Since 1998",
  "PDI & Defleet Expertise",
  "7 Days a Week Operation",
];

export default function Home() {
  return (
    <div className="flex flex-col gap-20 pb-20">
      {/* Hero Section */}
      <section className="relative h-[90vh] min-h-[600px] w-full overflow-hidden bg-slate-950 flex items-center">
        {/* Background Overlay Pattern */}
        <div className="absolute inset-0 z-0 opacity-20 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-primary/40 via-transparent to-transparent" />
        <div className="absolute inset-0 z-0 bg-grid-white/[0.02] bg-[length:50px_50px]" />

        <div className="container relative z-10 mx-auto px-4">
          <div className="max-w-3xl space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-block rounded-full bg-primary/10 px-3 py-1 text-sm font-semibold tracking-wider text-primary uppercase">
                Leading UK Automotive Logistics
              </span>
              <h1 className="mt-4 text-5xl font-extrabold tracking-tight text-white md:text-7xl lg:text-8xl">
                Reliable <span className="text-primary">Transport</span> & Storage Solutions
              </h1>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg text-slate-400 md:text-xl"
            >
              A1 Automotive provides unrivalled vehicle logistics services across the UK. 
              Efficiency, reliability, and scale you can trust.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-wrap gap-4"
            >
              <Button size="lg" className="rounded-full px-8">
                Request a Quote
              </Button>
              <Button size="lg" variant="outline" className="rounded-full px-8 border-slate-700 text-white hover:bg-slate-800">
                Our Services
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section id="services" className="container mx-auto px-4">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold tracking-tight md:text-5xl">Our Core Services</h2>
          <p className="mt-4 text-slate-500">Comprehensive logistics solutions for the automotive industry.</p>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative rounded-2xl border bg-white p-8 shadow-sm transition-all hover:shadow-md"
            >
              <div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                <service.icon className="h-6 w-6" />
              </div>
              <h3 className="mb-3 text-xl font-bold">{service.title}</h3>
              <p className="text-slate-500 leading-relaxed">{service.description}</p>
              <Link href="#" className="mt-6 inline-flex items-center text-sm font-semibold text-primary">
                Learn more <ChevronRight className="ml-1 h-4 w-4" />
              </Link>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Stats/Proof Section */}
      <section id="about" className="bg-slate-50 py-24">
        <div className="container mx-auto px-4">
          <div className="flex flex-col gap-16 lg:flex-row lg:items-center">
            <div className="lg:w-1/2">
              <h2 className="text-3xl font-bold tracking-tight md:text-5xl">Unrivalled Scale & Expertise</h2>
              <p className="mt-6 text-lg text-slate-600 leading-relaxed">
                Established in 1998, A1 Automotive has grown into one of the UK's premier 
                automotive logistics providers. Based in Bathgate, our central hub allows 
                unrivalled reach across Scotland and the entire UK mainland.
              </p>
              
              <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2">
                {features.map((feature) => (
                  <div key={feature} className="flex items-center gap-3">
                    <CheckCircle2 className="h-5 w-5 text-primary" />
                    <span className="font-medium text-slate-700">{feature}</span>
                  </div>
                ))}
              </div>

              <Button size="lg" className="mt-12 rounded-full">
                Learn About Our Fleet
              </Button>
            </div>
            
            <div className="lg:w-1/2">
              <div className="relative aspect-video overflow-hidden rounded-3xl bg-slate-200 shadow-2xl">
                 {/* Placeholder for a high-quality image of the fleet */}
                 <div className="flex h-full w-full items-center justify-center bg-slate-900 text-slate-700 uppercase tracking-widest text-sm italic font-bold">
                    [ Fleet Showcase Image ]
                 </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="contact" className="container mx-auto px-4">
        <div className="rounded-3xl bg-primary px-8 py-16 text-center text-white md:px-16 md:py-24">
          <h2 className="text-3xl font-bold md:text-5xl">Ready to move?</h2>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-primary-foreground/80">
            Contact us today for a bespoke quote or to discuss your large-scale transport 
            and storage requirements.
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <Button size="lg" variant="secondary" className="rounded-full px-8">
              Contact Us Now
            </Button>
            <Button size="lg" variant="outline" className="rounded-full px-8 border-white/20 text-white hover:bg-white/10">
              Call 01506 633333
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
