"use client";

import React, { useState } from "react";
import { getWhatsAppLink } from "@/utils/whatsapp";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const navLinks = [
    { name: "Layanan", href: "#layanan" },
    { name: "Barber", href: "#barber" },
    { name: "Galeri", href: "#galeri" },
    { name: "Kontak", href: "#kontak" },
  ];

  const handleBooking = () => {
    const message = "Halo CREWCUT Studio, saya ingin booking jadwal potong rambut.";
    window.open(getWhatsAppLink(message), "_blank");
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border-main bg-bg-main/80 backdrop-blur-md">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          {/* Logo */}
          <div className="flex-shrink-0">
            <a href="#" className="font-display text-2xl font-bold tracking-wider text-text-primary">
              CREW<span className="text-gold">CUT</span>
              <span className="text-[10px] tracking-normal text-text-secondary ml-1 block sm:inline">STUDIO</span>
            </a>
          </div>

          {/* Desktop Navigation */}
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

          {/* Desktop CTA */}
          <div className="hidden md:block">
            <button
              onClick={handleBooking}
              className="inline-flex items-center justify-center rounded-lg border border-gold/50 bg-transparent px-5 py-2 text-sm font-semibold tracking-wide text-gold hover:bg-gold hover:text-black transition-all duration-300 cursor-pointer"
            >
              Booking Sekarang
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              type="button"
              className="inline-flex items-center justify-center rounded-md p-2 text-text-secondary hover:text-text-primary focus:outline-none"
              aria-controls="mobile-menu"
              aria-expanded={isOpen}
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? (
                // Close Icon
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                // Hamburger Icon
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? "max-h-80 border-b border-border-main bg-bg-surface" : "max-h-0"
        }`}
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
            <button
              onClick={() => {
                setIsOpen(false);
                handleBooking();
              }}
              className="w-full inline-flex items-center justify-center rounded-lg bg-gold py-3 text-base font-bold text-black hover:bg-gold-light transition-all duration-300"
            >
              Booking Sekarang
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
