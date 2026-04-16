import React from "react";
import Link from "next/link";
import { Truck, Mail, Phone, MapPin } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-slate-900 text-slate-300">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          {/* Brand & Mission */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2 text-white">
              <Truck className="h-6 w-6 text-primary" />
              <span className="text-lg font-bold">A1 AUTOMOTIVE</span>
            </div>
            <p className="text-sm leading-relaxed">
              UK leading supplier of vehicle transport and storage solutions.
              Reliable, efficient, and damage-free delivery since 1998.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-white">
              Services
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="#services" className="hover:text-primary">
                  Vehicle Transport
                </Link>
              </li>
              <li>
                <Link href="#services" className="hover:text-primary">
                  Vehicle Storage
                </Link>
              </li>
              <li>
                <Link href="#services" className="hover:text-primary">
                  PDI & Defleet
                </Link>
              </li>
              <li>
                <Link href="#services" className="hover:text-primary">
                  Transporter Maintenance
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-white">
              Contact Us
            </h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 shrink-0 text-primary" />
                <span>Bathgate, Central Scotland, UK</span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="h-5 w-5 shrink-0 text-primary" />
                <span>01506 633333</span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="h-5 w-5 shrink-0 text-primary" />
                <span>info@a1automotive.co.uk</span>
              </li>
            </ul>
          </div>

          {/* Accreditations */}
          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-white">
              Accreditation
            </h3>
            <div className="flex flex-wrap gap-4 opacity-70 grayscale transition-all hover:grayscale-0">
              {/* Placeholders for logos */}
              <div className="h-10 w-20 rounded bg-slate-800 flex items-center justify-center text-[10px] border border-slate-700">RHA</div>
              <div className="h-10 w-20 rounded bg-slate-800 flex items-center justify-center text-[10px] border border-slate-700">FORS Gold</div>
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-slate-800 pt-8 text-center text-xs">
          <p>© {new Date().getFullYear()} A1 Automotive. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};
