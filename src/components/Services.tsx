"use client";

import { motion } from "motion/react";
import { useEffect, useState } from "react";
import { SERVICES } from "@/data";

export default function Services() {
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    setPrefersReducedMotion(mediaQuery.matches);
  }, []);

  return (
    <section id="services" className="py-24 bg-white border-y border-warm-border">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div 
          initial={prefersReducedMotion ? {} : { opacity: 0, y: 20 }}
          whileInView={prefersReducedMotion ? {} : { opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-16 md:mb-20"
        >
          <h2 className="text-3xl md:text-5xl font-display font-semibold text-charcoal mb-4">
            Layanan Kami
          </h2>
          <p className="text-muted-text text-lg max-w-2xl">
            Transparan, tanpa basa-basi, dirancang untuk kebutuhan pria modern.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {SERVICES.map((service, index) => (
            <motion.div
              key={service.id}
              initial={prefersReducedMotion ? {} : { opacity: 0, y: 24 }}
              whileInView={prefersReducedMotion ? {} : { opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: prefersReducedMotion ? 0 : index * 0.1 }}
              className="group relative bg-warm-cream p-8 md:p-10 rounded-2xl border border-warm-border/50 overflow-hidden transition-all duration-300 hover:shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:border-warm-border"
            >
              {/* Accent Left Border */}
              <div className="absolute top-0 left-0 bottom-0 w-1.5 bg-amber-accent/20 group-hover:bg-amber-accent transition-colors duration-300" />
              
              <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 mb-6">
                <div>
                  <h3 className="text-2xl font-display font-semibold text-charcoal mb-2 group-hover:text-amber-accent transition-colors">
                    {service.name}
                  </h3>
                  <span className="inline-block px-3 py-1 bg-white text-muted-text text-sm font-medium rounded-full border border-warm-border">
                    {service.duration}
                  </span>
                </div>
                <div className="text-2xl font-semibold text-charcoal whitespace-nowrap">
                  {service.price}
                </div>
              </div>
              
              <p className="text-muted-text leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
