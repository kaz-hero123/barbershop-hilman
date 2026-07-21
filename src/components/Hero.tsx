"use client";

import { motion } from "motion/react";
import { BUSINESS_INFO } from "@/data";
import { useEffect, useState } from "react";

export default function Hero() {
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    setPrefersReducedMotion(mediaQuery.matches);
  }, []);

  const headline = "Setiap potongan adalah ritual.";
  const words = headline.split(" ");

  const containerVariants: any = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.2,
      },
    },
  };

  const wordVariants: any = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
    },
  };

  return (
    <section className="relative min-h-[90vh] flex items-center pt-20 overflow-hidden bg-charcoal">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1599351431202-1e0f0137899a?q=80&w=2000&auto=format&fit=crop"
          alt="CREWCUT Studio Atmosphere"
          className="w-full h-full object-cover object-center opacity-40 img-warm-filter"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/50 to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-charcoal/80 to-transparent"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
        <div className="max-w-3xl">
          <motion.h1
            className="text-5xl md:text-7xl font-display font-bold text-warm-cream leading-[1.1] mb-6 flex flex-wrap gap-x-4 gap-y-2"
            variants={prefersReducedMotion ? {} : containerVariants}
            initial="hidden"
            animate="visible"
          >
            {words.map((word, idx) => (
              <motion.span
                key={idx}
                variants={prefersReducedMotion ? {} : wordVariants}
                className="inline-block"
              >
                {word}
              </motion.span>
            ))}
          </motion.h1>

          <motion.p
            initial={prefersReducedMotion ? {} : { opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8, ease: "easeOut" }}
            className="text-lg md:text-xl text-warm-cream/80 max-w-xl mb-10 leading-relaxed"
          >
            Lebih dari sekadar merapikan rambut. Kami merancang pengalaman grooming presisi yang mengembalikan rasa percaya diri Anda, langsung di pusat Senopati.
          </motion.p>

          <motion.div
            initial={prefersReducedMotion ? {} : { opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1, ease: "easeOut" }}
            className="flex flex-wrap items-center gap-4"
          >
            <motion.a
              href={BUSINESS_INFO.whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={prefersReducedMotion ? {} : { y: -2, boxShadow: "0 8px 24px rgba(180,83,9,0.4)" }}
              whileTap={prefersReducedMotion ? {} : { scale: 0.98 }}
              className="inline-flex items-center justify-center px-8 py-4 bg-amber-accent text-warm-white font-medium text-lg rounded-full transition-colors hover:bg-amber-accent/90 focus-visible:outline-warm-cream"
            >
              Mulai Ritualmu
            </motion.a>
            <a
              href="#services"
              className="inline-flex items-center justify-center px-8 py-4 bg-transparent text-warm-cream font-medium text-lg rounded-full transition-colors hover:bg-white/10 focus-visible:outline-warm-cream"
            >
              Lihat Layanan
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
