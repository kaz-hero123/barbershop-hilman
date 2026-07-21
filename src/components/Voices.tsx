"use client";

import { motion } from "motion/react";
import { useEffect, useState } from "react";
import { TESTIMONIALS, BUSINESS_INFO } from "@/data";

export default function Voices() {
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    setPrefersReducedMotion(mediaQuery.matches);
  }, []);

  const t1 = TESTIMONIALS.find(t => t.type === "long-form");
  const t2 = TESTIMONIALS.find(t => t.type === "metric");
  const t3 = TESTIMONIALS.find(t => t.type === "micro");

  return (
    <section id="voices" className="py-24 md:py-32 bg-white border-y border-warm-border">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Stat Bar */}
        <motion.div 
          initial={prefersReducedMotion ? {} : { opacity: 0, y: 20 }}
          whileInView={prefersReducedMotion ? {} : { opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center justify-center mb-20 md:mb-32"
        >
          <div className="text-5xl md:text-7xl font-display font-bold text-charcoal mb-4">
            {BUSINESS_INFO.completedRituals}
          </div>
          <div className="text-lg md:text-xl text-muted-text font-medium tracking-wide uppercase">
            Ritual selesai tahun ini
          </div>
        </motion.div>

        {/* Varied Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12">
          
          {/* Long Form - Takes up more space on desktop */}
          {t1 && (
            <motion.div 
              initial={prefersReducedMotion ? {} : { opacity: 0, x: -20 }}
              whileInView={prefersReducedMotion ? {} : { opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
              className="md:col-span-7 bg-warm-cream p-10 md:p-14 rounded-3xl"
            >
              <div className="text-6xl text-amber-accent/40 font-display leading-none mb-6">"</div>
              <p className="text-2xl md:text-3xl text-charcoal font-display leading-relaxed mb-10">
                {t1.content}
              </p>
              <div>
                <div className="font-bold text-charcoal text-lg">{t1.name}</div>
                <div className="text-muted-text">{t1.context}</div>
              </div>
            </motion.div>
          )}

          {/* Right column for the other two */}
          <div className="md:col-span-5 flex flex-col gap-8 md:gap-12 justify-center">
            
            {/* Metric Testimonial */}
            {t2 && (
              <motion.div
                initial={prefersReducedMotion ? {} : { opacity: 0, x: 20 }}
                whileInView={prefersReducedMotion ? {} : { opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="pl-6 border-l-4 border-charcoal"
              >
                <div className="text-3xl font-display font-bold text-charcoal mb-4">
                  {t2.metric}
                </div>
                <p className="text-lg text-muted-text leading-relaxed mb-6">
                  "{t2.content}"
                </p>
                <div>
                  <span className="font-semibold text-charcoal mr-2">{t2.name},</span>
                  <span className="text-muted-text text-sm">{t2.context}</span>
                </div>
              </motion.div>
            )}

            {/* Micro Testimonial */}
            {t3 && (
              <motion.div
                initial={prefersReducedMotion ? {} : { opacity: 0, x: 20 }}
                whileInView={prefersReducedMotion ? {} : { opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="pl-6 border-l-4 border-amber-accent"
              >
                <p className="text-xl md:text-2xl font-display text-charcoal italic leading-relaxed mb-6">
                  "{t3.content}"
                </p>
                <div>
                  <span className="font-semibold text-charcoal mr-2">{t3.name},</span>
                  <span className="text-muted-text text-sm">{t3.context}</span>
                </div>
              </motion.div>
            )}

          </div>
        </div>

      </div>
    </section>
  );
}
