"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { Truck, Warehouse, ShieldCheck, Award, Globe, ArrowRight, Zap, Shield, BarChart3, Users, Map, Phone, Mail, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/Button";
import Link from "next/link";
import { useRef } from "react";

const stats = [
  { label: "Transporter Fleet", value: "80+", suffix: "Units", icon: Truck },
  { label: "Storage Capacity", value: "2,000", suffix: "Vehicles", icon: Warehouse },
  { label: "Regional Focus", value: "UK & ROI", suffix: "Coverage", icon: Map },
  { label: "Years Operating", value: "27", suffix: "Est. 1998", icon: Award },
];

const mainServices = [
  {
    id: "01",
    title: "National Vehicle Transport",
    description: "Full UK and Ireland coverage for everything from single-car private collections to large-scale manufacturer and rental fleet movements.",
    features: ["Enclosed Car Transport", "Fleet Delivery Specialists", "GPS Tracked Fleet"],
    icon: Truck,
  },
  {
    id: "02",
    title: "Vehicle Storage Solutions",
    description: "A secure, 12-acre purpose-built facility in Bathgate, Central Scotland, providing high-capacity storage for manufacturers and corporate fleets.",
    features: ["2,000+ Vehicle Capacity", "24/7 Monitored Security", "Inventory Management"],
    icon: Warehouse,
  },
  {
    id: "03",
    title: "Technical PDI & Defleet",
    description: "Comprehensive Pre-Delivery Inspections and 'inspect and collect' services for end-of-lease or defleet vehicles to manufacturer standards.",
    features: ["Inspection Reporting", "Vehicle Preparation", "Rapid Turnaround"],
    icon: ShieldCheck,
  },
];

const revealVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] as any } 
  }
};

export default function Home() {
  const containerRef = useRef(null);

  return (
    <div className="bg-white selection:bg-secondary selection:text-white overflow-x-hidden" ref={containerRef}>
      
      {/* Professional Hero Section - Grounded & Authoritative */}
      <section className="relative h-[85vh] min-h-[700px] flex items-center bg-slate-950 overflow-hidden">
        {/* Subtle Industrial Background */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,_rgba(227,30,36,0.08)_0%,_transparent_50%)]" />
          <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:60px_60px]" />
        </div>

        <div className="container relative z-10 px-6 mx-auto">
          <div className="max-w-4xl">
            <motion.div
              initial="hidden"
              animate="visible"
              variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
            >
              <motion.div variants={revealVariants} className="flex items-center gap-4 mb-8">
                <div className="h-px w-12 bg-secondary" />
                <span className="text-xs font-bold tracking-[0.3em] text-white/60 uppercase">
                  Established 1998 • Bathgate, Scotland
                </span>
              </motion.div>

              <motion.h1 
                variants={revealVariants}
                className="text-5xl md:text-7xl lg:text-8xl font-black text-white leading-[1.1] tracking-tight uppercase mb-10"
              >
                UK & Ireland <br/> 
                <span className="text-secondary">Vehicle Logistics.</span>
              </motion.h1>

              <motion.p 
                variants={revealVariants}
                className="text-xl md:text-2xl font-medium text-slate-400 mb-12 max-w-2xl leading-relaxed"
              >
                A1 Automotive Ltd is a leading supplier of vehicle transport and storage solutions, operating a modern fleet of over 80 transporters across the UK mainland.
              </motion.p>

              <motion.div variants={revealVariants} className="flex flex-wrap gap-6">
                <Button size="lg" variant="secondary" className="rounded-none h-16 px-10 font-bold tracking-wider text-base">
                  REQUEST A QUOTE
                </Button>
                <Button size="lg" variant="outline" className="rounded-none h-16 px-10 font-bold tracking-wider text-base text-white border-white/20 hover:bg-white/10">
                  OUR SERVICES
                </Button>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Bar - Clear Value Props */}
      <section className="bg-black py-0 border-y border-white/10">
        <div className="grid grid-cols-2 lg:grid-cols-4">
          {stats.map((stat, i) => (
            <div key={i} className="p-10 md:p-16 border-r border-white/5 flex flex-col items-center text-center group transition-colors hover:bg-white/[0.02]">
              <div className="text-5xl font-black text-white mb-2 tabular-nums tracking-tight">
                {stat.value}
              </div>
              <div className="text-[10px] font-black uppercase tracking-[0.2em] text-secondary">
                {stat.label}
              </div>
              <div className="mt-2 text-[10px] font-bold text-white/40 uppercase tracking-widest">
                {stat.suffix}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* About Section - Grounded Story */}
      <section id="about" className="py-32 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={revealVariants}
            >
              <h2 className="text-4xl md:text-6xl font-black text-black uppercase tracking-tighter mb-8">
                National Coverage, <br/> <span className="text-secondary">Proven Reliability.</span>
              </h2>
              <div className="space-y-6 text-lg text-slate-600 font-medium leading-relaxed">
                <p>
                  With transporters stationed from the North East to the South West, A1 Automotive Ltd provides unrivalled coverage across the UK and Ireland. Our modern fleet ranges from 2-car carriers to full 12-car transporters, allowing us to respond to any requirement within hours.
                </p>
                <p>
                  Our 12-acre purpose-built storage facility in Bathgate, Central Scotland, serves as our primary hub, capable of handling over 2,000 vehicles with 24/7 monitored security.
                </p>
              </div>
              <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 gap-6">
                {["FORS Gold Accredited", "7 Days a Week Operation", "RHA Member", "Established 1998"].map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <CheckCircle2 className="h-5 w-5 text-secondary" />
                    <span className="font-bold text-sm uppercase tracking-tight">{item}</span>
                  </div>
                ))}
              </div>
            </motion.div>
            
            <div className="relative aspect-video bg-slate-100 border border-slate-200 overflow-hidden grayscale">
               {/* Placeholder for real fleet photo */}
               <div className="flex h-full w-full items-center justify-center text-slate-300 font-black uppercase tracking-[0.2em] text-sm">
                 [ A1 Transporter Fleet Photo ]
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid - Clear & Practical */}
      <section id="services" className="py-32 bg-slate-50">
        <div className="container mx-auto px-6">
          <div className="mb-20">
            <h2 className="text-4xl md:text-6xl font-black text-black uppercase tracking-tighter">
              Our <span className="text-secondary">Core Services</span>
            </h2>
            <div className="h-1.5 w-24 bg-secondary mt-4" />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {mainServices.map((service, i) => (
              <motion.div
                key={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={revealVariants}
                className="bg-white p-10 border border-slate-200 group hover:border-secondary transition-all"
              >
                <div className="mb-8 text-secondary">
                  <service.icon size={48} strokeWidth={1.5} />
                </div>
                <h3 className="text-2xl font-black uppercase tracking-tight mb-4 text-black">
                  {service.title}
                </h3>
                <p className="text-slate-600 font-medium leading-relaxed mb-8">
                  {service.description}
                </p>
                <ul className="space-y-3 mb-10">
                  {service.features.map((f, j) => (
                    <li key={j} className="flex items-center gap-3 text-xs font-bold uppercase tracking-widest text-slate-400">
                      <div className="h-1 w-1 bg-secondary rounded-full" />
                      {f}
                    </li>
                  ))}
                </ul>
                <Link href="#" className="inline-flex items-center gap-2 text-xs font-black uppercase tracking-widest text-secondary group-hover:gap-4 transition-all">
                  Read More <ArrowRight size={14} />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Recruitment Section - Practical Anchor */}
      <section className="py-32 bg-black text-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl">
            <span className="text-xs font-bold text-secondary uppercase tracking-[0.3em] mb-6 block">Careers at A1 Automotive</span>
            <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter mb-8">
              Join our <span className="text-secondary">Driving Team</span>
            </h2>
            <p className="text-xl text-slate-400 font-medium mb-12 leading-relaxed">
              As we continue to expand our national operations, we are always looking for professional, experienced HGV drivers to join our team in Bathgate. We offer competitive rates and a modern fleet.
            </p>
            <Button size="lg" variant="secondary" className="rounded-none h-16 px-10 font-bold tracking-wider">
              VIEW OPEN POSITIONS
            </Button>
          </div>
        </div>
      </section>

      {/* Contact Section - Grounded & Real */}
      <section id="contact" className="py-32 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
            <div>
              <h2 className="text-4xl md:text-6xl font-black text-black uppercase tracking-tighter mb-8">
                Get in <span className="text-secondary">Touch</span>
              </h2>
              <p className="text-lg text-slate-600 font-medium mb-12 leading-relaxed">
                Contact our management team today to discuss your vehicle transport or storage requirements. No job is too big or too small.
              </p>
              
              <div className="space-y-8">
                <div className="flex items-start gap-6">
                  <div className="h-12 w-12 bg-slate-100 flex items-center justify-center text-secondary">
                    <Phone size={24} />
                  </div>
                  <div>
                    <div className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">Call Us</div>
                    <div className="text-2xl font-black text-black">01506 631133</div>
                  </div>
                </div>

                <div className="flex items-start gap-6">
                  <div className="h-12 w-12 bg-slate-100 flex items-center justify-center text-secondary">
                    <Mail size={24} />
                  </div>
                  <div>
                    <div className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">Email Us</div>
                    <div className="text-xl font-bold text-black uppercase">info@a1automotive.co.uk</div>
                  </div>
                </div>

                <div className="flex items-start gap-6">
                  <div className="h-12 w-12 bg-slate-100 flex items-center justify-center text-secondary">
                    <Map size={24} />
                  </div>
                  <div>
                    <div className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">Head Office</div>
                    <div className="text-lg font-bold text-black uppercase leading-tight">
                      12 Blackburn Road, Bathgate,<br/>
                      Central Scotland, EH48 2EY
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-slate-950 p-10 md:p-16 text-white flex flex-col justify-center border-t-8 border-secondary">
              <h3 className="text-3xl font-black uppercase mb-6">Request a Quote</h3>
              <p className="text-slate-400 mb-10 font-medium">
                Submit your details and our team will get back to you with a bespoke logistics proposal.
              </p>
              <form className="space-y-4">
                <input type="text" placeholder="YOUR NAME" className="w-full bg-white/5 border border-white/10 p-4 text-xs font-bold tracking-widest focus:outline-none focus:border-secondary" />
                <input type="email" placeholder="EMAIL ADDRESS" className="w-full bg-white/5 border border-white/10 p-4 text-xs font-bold tracking-widest focus:outline-none focus:border-secondary" />
                <textarea placeholder="REQUIREMENTS" rows={4} className="w-full bg-white/5 border border-white/10 p-4 text-xs font-bold tracking-widest focus:outline-none focus:border-secondary"></textarea>
                <Button variant="secondary" className="w-full h-16 rounded-none font-bold tracking-widest">SUBMIT ENQUIRY</Button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
