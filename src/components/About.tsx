"use client";

import { motion } from "motion/react";
import { useEffect, useState } from "react";

export default function About() {
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    setPrefersReducedMotion(mediaQuery.matches);
  }, []);

  return (
    <section id="about" className="py-24 md:py-32 bg-warm-cream">
      <div className="max-w-7xl mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center">
          <motion.h2 
            initial={prefersReducedMotion ? {} : { opacity: 0, y: 20 }}
            whileInView={prefersReducedMotion ? {} : { opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-5xl font-display font-semibold text-charcoal mb-8"
          >
            Kenapa kami menyebutnya ritual?
          </motion.h2>
          
          <motion.div
            initial={prefersReducedMotion ? {} : { opacity: 0, y: 20 }}
            whileInView={prefersReducedMotion ? {} : { opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="w-16 h-1 bg-amber-accent mx-auto mb-8 rounded-full"
          />

          <motion.p 
            initial={prefersReducedMotion ? {} : { opacity: 0, y: 20 }}
            whileInView={prefersReducedMotion ? {} : { opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-lg md:text-xl text-muted-text leading-relaxed"
          >
            Bagi kami, kursi pangkas bukan sekadar tempat singgah. Ini adalah ruang transisi. Momen di mana Anda meletakkan beban hari ini, dan bangkit dengan ketajaman baru. Kami memadukan teknik klasik dan presisi modern untuk memastikan setiap detail mencerminkan karakter terbaik Anda.
          </motion.p>
        </div>
      </div>
    </section>
  );
}
