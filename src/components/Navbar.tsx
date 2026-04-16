"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Menu, X, Truck } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "./ui/Button";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "Services", href: "#services" },
  { name: "Fleet", href: "#fleet" },
  { name: "About", href: "#about" },
  { name: "Contact", href: "#contact" },
];

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <Link href="/" className="flex items-center space-x-2">
          <Truck className="h-8 w-8 text-primary" />
          <span className="text-xl font-bold tracking-tight text-primary">
            A1 AUTOMOTIVE
          </span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex md:items-center md:space-x-6">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-sm font-medium transition-colors hover:text-primary"
            >
              {link.name}
            </Link>
          ))}
          <Button variant="default" size="sm">
            Get a Quote
          </Button>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="inline-flex items-center justify-center rounded-md p-2 text-foreground md:hidden"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <div className="container mx-auto px-4 pb-4 md:hidden">
          <div className="flex flex-col space-y-4 pt-2">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-sm font-medium transition-colors hover:text-primary"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            <Button variant="default" className="w-full">
              Get a Quote
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
};
