import React from "react";
import Link from "next/link";
import { MapPin, Phone, Mail } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-black text-neutral-400 border-t border-white/10">
      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-4">

          {/* Brand */}
          <div className="space-y-5">
            <Link href="/" className="flex items-baseline font-black tracking-tighter text-3xl">
              <span className="text-white">A</span>
              <span className="text-secondary">1</span>
            </Link>
            <p className="text-sm leading-relaxed font-medium">
              A1 Automotive Ltd — the UK's trusted partner for vehicle
              transport, storage, and technical preparation. Reliable,
              efficient, and damage-free since 1998.
            </p>
          </div>

          {/* Services */}
          <div>
            <h3 className="mb-6 text-xs font-black uppercase tracking-[0.2em] text-white">
              Services
            </h3>
            <ul className="space-y-3 text-sm font-bold uppercase tracking-tight">
              <li>
                <Link href="/transport" className="hover:text-secondary transition-colors duration-200">
                  Vehicle Transport
                </Link>
              </li>
              <li>
                <Link href="/storage" className="hover:text-secondary transition-colors duration-200">
                  Vehicle Storage
                </Link>
              </li>
              <li>
                <Link href="/pdi" className="hover:text-secondary transition-colors duration-200">
                  PDI &amp; Defleet
                </Link>
              </li>
              <li>
                <Link href="/careers" className="hover:text-secondary transition-colors duration-200">
                  Careers
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="mb-6 text-xs font-black uppercase tracking-[0.2em] text-white">
              Head Office
            </h3>
            <ul className="space-y-4 text-sm font-medium">
              <li className="flex items-start gap-3 text-neutral-300">
                <MapPin className="h-4 w-4 shrink-0 text-secondary mt-0.5" />
                <span className="leading-snug">
                  A1 Automotive Ltd<br />
                  12 Blackburn Road<br />
                  Bathgate, EH48 2EY
                </span>
              </li>
              <li className="flex items-center gap-3 text-neutral-300">
                <Phone className="h-4 w-4 shrink-0 text-secondary" />
                <a href="tel:+441506631133" className="font-bold hover:text-secondary transition-colors duration-200">
                  01506 631133
                </a>
              </li>
              <li className="flex items-center gap-3 text-neutral-300">
                <Mail className="h-4 w-4 shrink-0 text-secondary" />
                <a href="mailto:info@a1automotive.co.uk" className="hover:text-secondary transition-colors duration-200">
                  info@a1automotive.co.uk
                </a>
              </li>
            </ul>
          </div>

          {/* Accreditations */}
          <div>
            <h3 className="mb-6 text-xs font-black uppercase tracking-[0.2em] text-white">
              Accreditation
            </h3>
            <div className="flex flex-wrap gap-3">
              <div className="h-12 w-20 rounded-sm bg-white/5 flex items-center justify-center text-[10px] font-black border border-white/10 text-white uppercase tracking-widest hover:border-secondary/50 transition-colors duration-300">
                RHA
              </div>
              <div className="h-12 w-20 rounded-sm bg-white/5 flex items-center justify-center text-[10px] font-black border border-white/10 text-white uppercase tracking-widest text-center leading-tight hover:border-secondary/50 transition-colors duration-300">
                FORS<br />GOLD
              </div>
            </div>
          </div>
        </div>

        <div className="mt-14 border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-5 text-[10px] font-bold uppercase tracking-[0.25em]">
          <p>© {new Date().getFullYear()} A1 Automotive Ltd. All rights reserved.</p>
          <div className="flex items-center gap-6 flex-wrap justify-center">
            <a
              href="https://marketing-company.co.uk"
              className="text-neutral-500 hover:text-white transition-colors duration-200"
              target="_blank"
              rel="noopener noreferrer"
            >
              Website by Marketing Company
            </a>
            <span className="h-3 w-px bg-white/10 hidden md:block" />
            <Link href="#" className="hover:text-white transition-colors duration-200">Privacy Policy</Link>
            <Link href="#" className="hover:text-white transition-colors duration-200">Terms</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
