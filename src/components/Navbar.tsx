"use client";

import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { BookingButton } from "@/components/ui/BookingButton";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const navLinks = [
    { name: "Layanan", href: "#layanan" },
    { name: "Barber", href: "#barber" },
    { name: "Galeri", href: "#galeri" },
    { name: "Kontak", href: "#kontak" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border-main bg-bg-main/80 backdrop-blur-md">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          <div className="flex-shrink-0">
            <a href="#" className="font-display text-2xl font-bold tracking-wider text-text-primary">
              CREW<span className="text-gold">CUT</span>
              <span className="text-[10px] tracking-normal text-text-secondary ml-1 block sm:inline">STUDIO</span>
            </a>
          </div>

          <nav className="hidden md:flex space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-medium tracking-wide text-text-secondary hover:text-gold transition-colors duration-200"
              >
                {link.name}
              </a>
            ))}
          </nav>

          <div className="hidden md:block">
            <BookingButton
              message="Halo CREWCUT Studio, saya ingin booking jadwal potong rambut."
              variant="outline"
            >
              Booking Sekarang
            </BookingButton>
          </div>

          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              type="button"
              className="inline-flex items-center justify-center rounded-md p-2 text-text-secondary hover:text-text-primary focus:outline-none"
              aria-controls="mobile-menu"
              aria-expanded={isOpen}
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
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
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="md:hidden overflow-hidden border-b border-border-main bg-bg-surface"
            id="mobile-menu"
          >
            <div className="space-y-1 px-4 py-4 sm:px-6">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="block rounded-md px-3 py-2 text-base font-medium text-text-secondary hover:bg-bg-surface-elevated hover:text-gold transition-all duration-200"
                >
                  {link.name}
                </a>
              ))}
              <div className="mt-4 px-3">
                <BookingButton
                  message="Halo CREWCUT Studio, saya ingin booking jadwal potong rambut."
                  variant="primary"
                  className="w-full py-3"
                  onClick={() => setIsOpen(false)}
                >
                  Booking Sekarang
                </BookingButton>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
