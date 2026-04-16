import React from "react";
import Link from "next/link";
import { Truck, Mail, Phone, MapPin } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-black text-slate-400 border-t border-white/10">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-4">
          {/* Brand & Mission */}
          <div className="space-y-6">
            <Link href="/" className="flex items-baseline font-black tracking-tighter text-3xl">
              <span className="text-white">A</span>
              <span className="text-secondary">1</span>
            </Link>
            <p className="text-sm leading-relaxed font-medium">
              A1 Automotive Ltd is the UK's leading supplier of vehicle transport and storage solutions.
              Reliable, efficient, and damage-free delivery since 1998.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="mb-6 text-xs font-black uppercase tracking-[0.2em] text-white">
              Services
            </h3>
            <ul className="space-y-3 text-sm font-bold uppercase tracking-tight">
              <li>
                <Link href="#services" className="hover:text-secondary transition-colors">
                  Vehicle Transport
                </Link>
              </li>
              <li>
                <Link href="#services" className="hover:text-secondary transition-colors">
                  Vehicle Storage
                </Link>
              </li>
              <li>
                <Link href="#services" className="hover:text-secondary transition-colors">
                  PDI & Defleet
                </Link>
              </li>
              <li>
                <Link href="#services" className="hover:text-secondary transition-colors">
                  Maintenance
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="mb-6 text-xs font-black uppercase tracking-[0.2em] text-white">
              Head Office
            </h3>
            <ul className="space-y-4 text-sm font-medium">
              <li className="flex items-start space-x-3 text-slate-300">
                <MapPin className="h-5 w-5 shrink-0 text-secondary" />
                <span>
                  A1 Automotive Ltd<br />
                  12 Blackburn Road<br />
                  Bathgate, EH48 2EY
                </span>
              </li>
              <li className="flex items-center space-x-3 text-slate-300">
                <Phone className="h-5 w-5 shrink-0 text-secondary" />
                <span className="font-bold">01506 631133</span>
              </li>
              <li className="flex items-center space-x-3 text-slate-300">
                <Mail className="h-5 w-5 shrink-0 text-secondary" />
                <span>info@a1automotive.co.uk</span>
              </li>
            </ul>
          </div>

          {/* Accreditations */}
          <div>
            <h3 className="mb-6 text-xs font-black uppercase tracking-[0.2em] text-white">
              Accreditation
            </h3>
            <div className="flex flex-wrap gap-4 opacity-50 grayscale transition-all hover:opacity-100 hover:grayscale-0">
              <div className="h-12 w-24 rounded bg-white/5 flex items-center justify-center text-[10px] font-black border border-white/10 text-white uppercase tracking-widest">RHA</div>
              <div className="h-12 w-24 rounded bg-white/5 flex items-center justify-center text-[10px] font-black border border-white/10 text-white uppercase tracking-widest text-center">FORS<br/>GOLD</div>
            </div>
          </div>
        </div>

        <div className="mt-16 border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] font-bold uppercase tracking-widest">
          <p>© {new Date().getFullYear()} A1 Automotive Ltd. All rights reserved. Website by <a href="https://marketing-company.co.uk" className="hover:text-secondary transition-colors">Marketing Company</a></p>
          <div className="flex gap-8">
            <Link href="#" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="#" className="hover:text-white transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
