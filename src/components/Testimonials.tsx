import React from "react";
import { Star, Quote } from "lucide-react";
import { TESTIMONIALS } from "@/data";
import { MotionWrapper } from "@/components/ui/MotionWrapper";

export default function Testimonials() {
  return (
    <section className="py-24 bg-bg-surface/30 border-t border-b border-border-main">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <MotionWrapper animation="slideUp" className="flex flex-col items-center text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center justify-center gap-2 rounded-full border border-border-main bg-bg-main px-4 py-1.5 mb-6">
            <Star className="h-4 w-4 text-gold fill-current" />
            <span className="text-sm font-bold text-text-primary">4.9/5 Average Rating</span>
          </div>
          <h2 className="font-display text-4xl sm:text-5xl font-bold uppercase tracking-tight text-text-primary">
            DARI MEREKA YANG PERNAH DUDUK DI KURSI KAMI
          </h2>
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
