"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "./ui/Button";
import { usePathname } from "next/navigation";

const navLinks = [
  { name: "Home", href: "/" },
  { 
    name: "Services", 
    href: "#",
    dropdown: [
      { name: "Vehicle Transport", href: "/transport" },
      { name: "Vehicle Storage", href: "/storage" },
      { name: "PDI & Defleet", href: "/pdi" },
    ]
  },
  { name: "Careers", href: "/careers" },
  { name: "Contact", href: "/contact" },
];

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={cn(
      "fixed top-0 z-50 w-full transition-all duration-300",
      scrolled ? "bg-white shadow-sm py-4" : "bg-white lg:bg-transparent py-6"
    )}>
      <div className="container mx-auto flex items-center justify-between px-6">
        <Link href="/" className="flex items-baseline font-black tracking-tighter text-3xl group">
          <span className={cn(scrolled ? "text-black" : "text-black lg:text-white transition-colors duration-300")}>A</span>
          <span className="text-secondary">1</span>
          <span className={cn(
            "ml-3 text-[10px] font-black uppercase tracking-[0.3em] hidden sm:inline",
            scrolled ? "text-black/40" : "text-black/40 lg:text-white/40"
          )}>Automotive Ltd</span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden lg:flex lg:items-center lg:space-x-10">
          {navLinks.map((link) => (
            <div key={link.name} className="relative group/item">
              <Link
                href={link.href}
                className={cn(
                  "text-[11px] font-black uppercase tracking-[0.2em] transition-all flex items-center gap-2",
                  scrolled ? "text-black hover:text-secondary" : "text-white hover:text-secondary"
                )}
              >
                {link.name}
                {link.dropdown && <ChevronDown size={12} />}
              </Link>

              {link.dropdown && (
                <div className="absolute top-full left-0 pt-6 opacity-0 translate-y-4 pointer-events-none group-hover/item:opacity-100 group-hover/item:translate-y-0 group-hover/item:pointer-events-auto transition-all duration-300">
                  <div className="bg-black p-8 w-64 shadow-2xl">
                    <div className="flex flex-col space-y-6">
                      {link.dropdown.map((sub) => (
                        <Link 
                          key={sub.name} 
                          href={sub.href}
                          className="text-[10px] font-black text-white/60 hover:text-secondary uppercase tracking-[0.2em] transition-colors"
                        >
                          {sub.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))}
          <Link href="/contact">
            <Button variant="secondary" size="sm" className="rounded-none px-8 font-black tracking-widest text-[10px]">
              GET A QUOTE
            </Button>
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button
          className={cn("p-2 lg:hidden", scrolled ? "text-black" : "text-black lg:text-white")}
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={cn(
        "fixed inset-0 z-40 bg-white transition-transform duration-500 lg:hidden",
        isOpen ? "translate-x-0" : "translate-x-full"
      )}>
        <div className="flex flex-col h-full justify-center px-12 space-y-10">
          {navLinks.map((link) => (
            <div key={link.name} className="space-y-6">
              <Link
                href={link.href}
                className="text-4xl font-black uppercase tracking-tighter text-black"
                onClick={() => !link.dropdown && setIsOpen(false)}
              >
                {link.name}
              </Link>
              {link.dropdown && (
                <div className="flex flex-col space-y-4 pl-6 border-l-2 border-secondary">
                  {link.dropdown.map((sub) => (
                    <Link 
                      key={sub.name} 
                      href={sub.href}
                      className="text-xl font-bold uppercase tracking-tight text-black/40"
                      onClick={() => setIsOpen(false)}
                    >
                      {sub.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
          <Link href="/contact" onClick={() => setIsOpen(false)}>
            <Button variant="secondary" className="w-full h-20 rounded-none font-black text-lg tracking-widest">
              GET A QUOTE
            </Button>
          </Link>
        </div>
      </div>
    </nav>
  );
};
