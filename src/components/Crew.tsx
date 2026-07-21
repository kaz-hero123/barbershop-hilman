"use client";

import { motion } from "motion/react";
import { useEffect, useState } from "react";
import { TEAM } from "@/data";

export default function Crew() {
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    setPrefersReducedMotion(mediaQuery.matches);
  }, []);

  return (
    <section id="crew" className="py-24 md:py-32 bg-warm-cream">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div 
          initial={prefersReducedMotion ? {} : { opacity: 0, y: 20 }}
          whileInView={prefersReducedMotion ? {} : { opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-16 md:mb-24 text-center md:text-left"
        >
          <h2 className="text-3xl md:text-5xl font-display font-semibold text-charcoal mb-4">
            Yang memegang gunting
          </h2>
          <p className="text-muted-text text-lg max-w-2xl mx-auto md:mx-0">
            Dua karakter berbeda, satu standar presisi yang sama.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20">
          {TEAM.map((member, index) => (
            <motion.div
              key={member.id}
              initial={prefersReducedMotion ? {} : { opacity: 0, scale: 0.95 }}
              whileInView={prefersReducedMotion ? {} : { opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: prefersReducedMotion ? 0 : index * 0.15, ease: "easeOut" }}
              className="flex flex-col group"
            >
              <div className="relative aspect-[4/5] md:aspect-square overflow-hidden rounded-2xl mb-8 bg-charcoal/5">
                <img
                  src={member.image}
                  alt={`Potret ${member.name}`}
                  className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105 img-warm-filter"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-charcoal/10 group-hover:bg-transparent transition-colors duration-500" />
              </div>
              
              <div className="flex items-baseline gap-3 mb-4">
                <h3 className="text-3xl font-display font-bold text-charcoal">
                  {member.name}
                </h3>
                <span className="text-amber-accent font-medium tracking-wide">
                  — {member.title}
                </span>
              </div>
              
              <p className="text-muted-text text-lg leading-relaxed">
                {member.specialty}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
