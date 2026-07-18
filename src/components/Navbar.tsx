"use client";

import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { cn } from "@/utils/cn";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Pengalaman", href: "#pengalaman" },
    { name: "Ahli", href: "#tim" },
    { name: "Karya", href: "#karya" },
    { name: "Lokasi", href: "#kontak" },
  ];

  return (
    <header 
      className={cn(
        "fixed top-0 z-50 w-full transition-all duration-500",
        scrolled ? "bg-brand-cream/95 backdrop-blur-md border-b border-border-main py-4" : "bg-transparent py-6"
      )}
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <div className="flex-shrink-0">
            <a href="#" className="font-display text-2xl font-bold tracking-wide text-brand-espresso">
              CREWCUT
            </a>
          </div>

          <nav className="hidden md:flex space-x-10">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-brand-muted hover:text-brand-terracotta transition-colors duration-300"
              >
                {link.name}
              </a>
            ))}
          </nav>

          <div className="hidden md:block">
            <Button
              message="Halo CREWCUT Studio, saya ingin booking jadwal potong rambut."
              variant="outline"
              className="px-6 py-2.5 text-xs font-semibold tracking-widest uppercase"
            >
              Atur Jadwal
            </Button>
          </div>

          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              type="button"
              className="inline-flex items-center justify-center p-2 text-brand-espresso focus:outline-none"
              aria-expanded={isOpen}
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? <X className="h-6 w-6" strokeWidth={1.5} /> : <Menu className="h-6 w-6" strokeWidth={1.5} />}
            </button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="md:hidden overflow-hidden bg-brand-cream border-b border-border-main absolute w-full top-full"
          >
            <div className="space-y-1 px-6 py-8">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="block py-4 text-xl font-display text-brand-espresso border-b border-border-main/50"
                >
                  {link.name}
                </a>
              ))}
              <div className="mt-8">
                <Button
                  message="Halo CREWCUT Studio, saya ingin booking jadwal potong rambut."
                  variant="primary"
                  className="w-full py-4 text-sm font-semibold tracking-widest uppercase"
                  onClick={() => setIsOpen(false)}
                >
                  Atur Jadwal Sekarang
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
