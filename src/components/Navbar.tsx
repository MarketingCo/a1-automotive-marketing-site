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
    ],
  },
  { name: "Careers", href: "/careers" },
  { name: "Contact", href: "/contact" },
];

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  return (
    <nav
      className={cn(
        "fixed top-0 z-50 w-full transition-all duration-300 ease-in-out",
        scrolled
          ? "bg-white/95 backdrop-blur-sm shadow-[0_1px_0_0_rgba(0,0,0,0.06)] py-3"
          : "bg-white lg:bg-transparent py-5"
      )}
    >
      <div className="container mx-auto flex items-center justify-between px-6">
        {/* Logo */}
        <Link
          href="/"
          className="flex items-baseline font-black tracking-tighter text-3xl group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 rounded-sm"
        >
          <span
            className={cn(
              "transition-colors duration-300",
              scrolled ? "text-black" : "text-black lg:text-white"
            )}
          >
            A
          </span>
          <span className="text-secondary">1</span>
          <span
            className={cn(
              "ml-3 text-[10px] font-black uppercase tracking-[0.3em] hidden sm:inline transition-colors duration-300",
              scrolled ? "text-black/40" : "text-black/40 lg:text-white/40"
            )}
          >
            Automotive Ltd
          </span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden lg:flex lg:items-center lg:gap-8">
          {navLinks.map((link) => (
            <div key={link.name} className="relative group/item">
              <Link
                href={link.href}
                className={cn(
                  "text-[11px] font-black uppercase tracking-[0.15em] transition-colors duration-200 flex items-center gap-1.5 py-1",
                  scrolled
                    ? "text-black hover:text-secondary"
                    : "text-white hover:text-secondary"
                )}
              >
                {link.name}
                {link.dropdown && (
                  <ChevronDown
                    size={11}
                    className="transition-transform duration-200 group-hover/item:rotate-180"
                  />
                )}
              </Link>

              {link.dropdown && (
                <div className="absolute top-full left-0 pt-4 opacity-0 translate-y-2 pointer-events-none group-hover/item:opacity-100 group-hover/item:translate-y-0 group-hover/item:pointer-events-auto transition-all duration-200 ease-out">
                  <div className="bg-black p-6 w-56 shadow-2xl rounded-sm">
                    <div className="flex flex-col gap-4">
                      {link.dropdown.map((sub) => (
                        <Link
                          key={sub.name}
                          href={sub.href}
                          className="text-[10px] font-black text-white/50 hover:text-secondary uppercase tracking-[0.15em] transition-colors duration-150"
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
            <Button
              variant="secondary"
              size="sm"
              className="rounded-none px-7 font-black tracking-[0.15em] text-[10px] h-9 transition-all duration-200 hover:scale-[1.02] active:scale-[0.98]"
            >
              Get a Quote
            </Button>
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button
          className={cn(
            "p-2 lg:hidden rounded-sm transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
            scrolled ? "text-black" : "text-black lg:text-white"
          )}
          onClick={() => setIsOpen(!isOpen)}
          aria-label={isOpen ? "Close menu" : "Open menu"}
          aria-expanded={isOpen}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={cn(
          "fixed inset-0 z-40 bg-white transition-transform duration-500 ease-in-out lg:hidden",
          isOpen ? "translate-x-0" : "translate-x-full"
        )}
      >
        <div className="flex flex-col h-full justify-center px-10 gap-8">
          {navLinks.map((link) => (
            <div key={link.name} className="space-y-5">
              <Link
                href={link.href}
                className="text-4xl font-black uppercase tracking-tighter text-black hover:text-secondary transition-colors duration-200 block"
                onClick={() => !link.dropdown && setIsOpen(false)}
              >
                {link.name}
              </Link>
              {link.dropdown && (
                <div className="flex flex-col gap-4 pl-6 border-l-2 border-secondary">
                  {link.dropdown.map((sub) => (
                    <Link
                      key={sub.name}
                      href={sub.href}
                      className="text-lg font-bold uppercase tracking-tight text-black/40 hover:text-secondary transition-colors duration-200"
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
            <Button
              variant="secondary"
              className="w-full h-16 rounded-none font-black text-base tracking-[0.15em] transition-all duration-200 hover:scale-[1.01] active:scale-[0.99]"
            >
              Get a Quote
            </Button>
          </Link>
        </div>
      </div>
    </nav>
  );
};
