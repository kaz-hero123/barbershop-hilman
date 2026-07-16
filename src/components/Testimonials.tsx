import React from "react";
import { Star, Quote } from "lucide-react";
import { TESTIMONIALS } from "@/data";
import { MotionWrapper } from "@/components/ui/MotionWrapper";

export default function Testimonials() {
  return (
    <section className="py-24 bg-bg-surface/30 border-t border-b border-border-main">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <MotionWrapper animation="slideUp" className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="font-display text-sm font-bold uppercase tracking-widest text-gold">
            Testimonial Klien
          </h2>
          <p className="mt-3 font-display text-3xl sm:text-5xl font-bold uppercase tracking-tight text-text-primary">
            APA KATA MEREKA
          </p>
          <div className="mt-4 h-1 w-12 bg-gold mx-auto" />
        </MotionWrapper>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((review, index) => (
            <MotionWrapper
              key={review.id}
              animation="slideUp"
              delay={index * 0.15}
              className="flex flex-col justify-between rounded-xl border border-border-main bg-bg-surface p-8 shadow-md relative"
            >
              <div className="absolute top-6 right-8 text-gold/10">
                <Quote className="h-10 w-10 fill-current" />
              </div>

              <div>
                <div className="flex items-center gap-1 mb-6">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} className="h-4.5 w-4.5 text-gold fill-current" />
                  ))}
                </div>

                <p className="text-sm sm:text-base text-text-secondary italic leading-relaxed font-light">
                  &ldquo;{review.text}&rdquo;
                </p>
              </div>

              <div className="mt-8 border-t border-border-main pt-6">
                <h4 className="font-display text-base font-bold text-text-primary uppercase tracking-wide">
                  {review.author}
                </h4>
                <p className="text-xs text-gold uppercase tracking-wider mt-1">
                  {review.role}
                </p>
              </div>
            </MotionWrapper>
          ))}
        </div>
      </div>
    </section>
  );
}
