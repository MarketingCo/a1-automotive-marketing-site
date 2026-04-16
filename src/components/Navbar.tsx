"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "./ui/Button";

const navLinks = [
  { name: "Solutions", href: "#services" },
  { name: "Infrastructure", href: "#about" },
  { name: "Fleet", href: "#fleet" },
  { name: "Global Reach", href: "#global" },
];

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={cn(
      "fixed top-0 z-50 w-full transition-all duration-500",
      scrolled ? "bg-black/90 backdrop-blur-md py-4 border-b border-white/10" : "bg-transparent py-8"
    )}>
      <div className="container mx-auto flex items-center justify-between px-6">
        <Link href="/" className="flex items-baseline font-black tracking-tighter text-4xl group">
          <span className="text-white">A</span>
          <span className="text-secondary transition-transform group-hover:scale-110">1</span>
          <span className="ml-4 text-[10px] font-black tracking-[0.4em] text-white/40 uppercase hidden lg:inline-flex items-center">
            Automotive Ltd <div className="ml-2 h-1 w-1 bg-secondary rounded-full" />
          </span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden lg:flex lg:items-center lg:space-x-12">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-[10px] font-black uppercase tracking-[0.3em] text-white/70 transition-all hover:text-secondary hover:tracking-[0.4em]"
            >
              {link.name}
            </Link>
          ))}
          <Button variant="secondary" size="sm" className="font-black rounded-none px-8 py-6 tracking-widest text-xs">
            CONTACT PARTNERSHIP
          </Button>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="inline-flex items-center justify-center p-2 text-white lg:hidden"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X className="h-8 w-8" /> : <Menu className="h-8 w-8" />}
        </button>
      </div>

      {/* Mobile Nav Overlay */}
      <div className={cn(
        "fixed inset-0 z-40 bg-black transition-transform duration-500 ease-in-out lg:hidden",
        isOpen ? "translate-x-0" : "translate-x-full"
      )}>
        <div className="flex flex-col h-full justify-center px-12 space-y-12">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-4xl font-black uppercase tracking-tighter text-white hover:text-secondary transition-colors"
              onClick={() => setIsOpen(false)}
            >
              {link.name}
            </Link>
          ))}
          <Button variant="secondary" className="w-full font-black rounded-none h-20 text-lg tracking-widest">
            CONTACT PARTNERSHIP
          </Button>
        </div>
      </div>
    </nav>
  );
};
