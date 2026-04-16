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
      <section className="relative h-[90vh] min-h-[600px] w-full overflow-hidden bg-white flex items-center">
        {/* Background Overlay Pattern */}
        <div className="absolute inset-0 z-0 opacity-5 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-secondary/20 via-transparent to-transparent" />
        <div className="absolute inset-0 z-0 bg-grid-black/[0.02] bg-[length:50px_50px]" />

        <div className="container relative z-10 mx-auto px-4">
          <div className="max-w-4xl space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="flex items-center gap-3 mb-6">
                 <div className="h-[2px] w-12 bg-secondary" />
                 <span className="text-sm font-bold tracking-[0.2em] text-black uppercase">
                   Established 1998
                 </span>
              </div>
              <h1 className="text-6xl font-black tracking-tighter text-black md:text-8xl lg:text-9xl leading-[0.8] uppercase">
                A<span className="text-secondary">1</span> <br/>
                <span className="text-4xl md:text-6xl lg:text-7xl">Automotive</span>
              </h1>
              <p className="mt-8 text-xl font-bold tracking-tight text-black uppercase border-l-4 border-secondary pl-6">
                Leading UK Vehicle <br/> Transport & Storage
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-wrap gap-4"
            >
              <Button size="lg" variant="secondary" className="rounded-none px-10 font-bold h-14 text-base">
                GET A QUOTE
              </Button>
              <Button size="lg" variant="outline" className="rounded-none px-10 font-bold h-14 text-base border-black hover:bg-black hover:text-white">
                OUR SERVICES
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section id="services" className="container mx-auto px-4">
        <div className="mb-16">
          <h2 className="text-4xl font-black tracking-tighter uppercase md:text-6xl">
            Core <span className="text-secondary">Services</span>
          </h2>
          <div className="mt-4 h-1 w-24 bg-black" />
        </div>

        <div className="grid grid-cols-1 gap-12 md:grid-cols-3">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative border-l-2 border-slate-100 pl-8 transition-all hover:border-secondary"
            >
              <div className="mb-6 inline-flex h-12 w-12 items-center justify-center text-secondary">
                <service.icon className="h-10 w-10" strokeWidth={1.5} />
              </div>
              <h3 className="mb-4 text-2xl font-black uppercase tracking-tight">{service.title}</h3>
              <p className="text-slate-500 leading-relaxed font-medium">{service.description}</p>
              <Link href="#" className="mt-8 inline-flex items-center text-xs font-black uppercase tracking-widest text-secondary hover:translate-x-2 transition-transform">
                Read More <ChevronRight className="ml-1 h-4 w-4" />
              </Link>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Stats Section with Bold Branding */}
      <section id="about" className="bg-black py-24 text-white overflow-hidden relative">
        <div className="absolute top-0 right-0 text-[20rem] font-black text-white/[0.03] leading-none select-none pointer-events-none -translate-y-1/4 translate-x-1/4">
          A1
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="flex flex-col gap-16 lg:flex-row lg:items-center">
            <div className="lg:w-1/2">
              <h2 className="text-4xl font-black tracking-tighter uppercase md:text-6xl">
                Unrivalled <span className="text-secondary">Reach</span>
              </h2>
              <p className="mt-8 text-lg text-slate-400 leading-relaxed font-medium">
                Based in Bathgate, Central Scotland, our 12-acre purpose-built facility 
                serves as the beating heart of our UK-wide logistics operation. 
                With over 80 transporters on the road, we move thousands of vehicles 
                every week for the UK's biggest manufacturers and rental companies.
              </p>
              
              <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2">
                {features.map((feature) => (
                  <div key={feature} className="flex items-center gap-4 group">
                    <div className="h-2 w-2 bg-secondary transition-all group-hover:w-4" />
                    <span className="font-bold text-sm uppercase tracking-wider">{feature}</span>
                  </div>
                ))}
              </div>

              <Button size="lg" variant="secondary" className="mt-12 rounded-none font-bold px-10">
                VIEW OUR FLEET
              </Button>
            </div>
            
            <div className="lg:w-1/2 relative">
              <div className="relative aspect-video overflow-hidden bg-slate-800 shadow-2xl grayscale transition-all hover:grayscale-0 duration-700">
                 <div className="flex h-full w-full items-center justify-center text-white/20 uppercase tracking-widest text-sm italic font-bold border-4 border-white/5">
                    [ Fleet Photography ]
                 </div>
              </div>
              <div className="absolute -bottom-6 -left-6 bg-secondary p-8 hidden md:block">
                 <div className="text-4xl font-black">27+</div>
                 <div className="text-xs font-bold uppercase tracking-widest opacity-80">Years Experience</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="contact" className="container mx-auto px-4">
        <div className="relative overflow-hidden bg-white border-4 border-black px-8 py-16 text-center text-black md:px-16 md:py-24">
          <div className="absolute top-0 left-0 h-2 w-full bg-secondary" />
          <h2 className="text-4xl font-black md:text-7xl uppercase tracking-tighter">
            Get a <span className="text-secondary">Custom</span> Quote
          </h2>
          <p className="mx-auto mt-8 max-w-2xl text-lg font-bold text-slate-600 uppercase tracking-tight">
            Whether it's a single vehicle or an entire fleet, A1 Automotive 
            has the capacity to respond within hours.
          </p>
          <div className="mt-12 flex flex-wrap justify-center gap-6">
            <Button size="lg" variant="secondary" className="rounded-none px-12 font-bold h-16 text-lg">
              CONTACT US
            </Button>
            <div className="flex flex-col items-center justify-center">
               <span className="text-xs font-black text-secondary uppercase tracking-[0.3em] mb-1">Direct Line</span>
               <span className="text-2xl font-black">01506 633333</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
