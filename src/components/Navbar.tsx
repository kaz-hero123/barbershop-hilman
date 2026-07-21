"use client";

import { useState, useEffect } from "react";
import { BUSINESS_INFO } from "@/data";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { cn } from "@/utils/cn";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Layanan", href: "#services" },
    { name: "Tim Kami", href: "#crew" },
    { name: "Cerita", href: "#voices" },
  ];

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-colors duration-300",
        isScrolled ? "bg-warm-cream/90 backdrop-blur-md shadow-sm" : "bg-transparent"
      )}
    >
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="text-2xl font-bold font-display tracking-tight text-charcoal">
          CREWCUT<span className="text-amber-accent">.</span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-muted-text hover:text-charcoal transition-colors focus-visible:outline-amber-accent"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Desktop CTA */}
        <div className="hidden md:block">
          <motion.a
            href={BUSINESS_INFO.whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ y: -2, boxShadow: "0 8px 24px rgba(180,83,9,0.3)" }}
            whileTap={{ scale: 0.98 }}
            className="inline-flex items-center justify-center px-6 py-2.5 bg-amber-accent text-warm-white font-medium text-sm rounded-full transition-colors hover:bg-amber-accent/90 focus-visible:outline-charcoal"
          >
            Reservasi Kursi
          </motion.a>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden p-2 -mr-2 text-charcoal focus-visible:outline-amber-accent"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
          aria-expanded={isMobileMenuOpen}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-warm-cream border-t border-warm-border overflow-hidden"
          >
            <div className="px-6 py-8 flex flex-col gap-6">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-lg font-medium text-charcoal hover:text-amber-accent"
                >
                  {link.name}
                </a>
              ))}
              <a
                href={BUSINESS_INFO.whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setIsMobileMenuOpen(false)}
                className="inline-flex items-center justify-center w-full px-6 py-3 mt-4 bg-amber-accent text-warm-white font-medium rounded-full"
              >
                Reservasi Kursi
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
