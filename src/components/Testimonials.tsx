import React from "react";
import { MotionWrapper } from "@/components/ui/MotionWrapper";
import { TESTIMONIALS } from "@/legacy/data";
import { Quote } from "lucide-react";

export default function Testimonials() {
  const mainTestimonial = TESTIMONIALS[0];
  const supportingTestimonials = TESTIMONIALS.slice(1);

  return (
    <section className="py-32 bg-brand-cream overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        
        <div className="flex justify-center mb-16">
          <MotionWrapper animation="slideUp">
            <h2 className="font-display text-4xl sm:text-5xl font-medium text-brand-espresso text-center">
              Kata Mereka.
            </h2>
          </MotionWrapper>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-start">
          
          {/* Main Testimonial - Featured */}
          <MotionWrapper 
            animation="slideUp" 
            delay={0.1}
            className="lg:col-span-7 bg-brand-surface p-10 sm:p-14 relative"
          >
            <div className="absolute top-10 left-10 text-brand-terracotta/20">
              <Quote className="w-24 h-24 rotate-180" />
            </div>
            
            <div className="relative z-10">
              <div className="flex gap-1 mb-8">
                {[...Array(mainTestimonial.rating)].map((_, i) => (
                  <span key={i} className="text-brand-terracotta text-lg">★</span>
                ))}
              </div>
              
              <p className="font-display text-2xl sm:text-3xl lg:text-4xl leading-snug text-brand-espresso mb-10">
                &ldquo;{mainTestimonial.text}&rdquo;
              </p>
              
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-brand-cream rounded-full border border-border-main flex items-center justify-center font-display text-xl text-brand-terracotta">
                  {mainTestimonial.author.charAt(0)}
                </div>
                <div>
                  <h4 className="font-semibold text-brand-espresso uppercase tracking-wider text-sm">
                    {mainTestimonial.author}
                  </h4>
                  <p className="text-brand-muted text-sm mt-1">
                    {mainTestimonial.role}
                  </p>
                </div>
              </div>
            </div>
          </MotionWrapper>

          {/* Supporting Testimonials */}
          <div className="lg:col-span-5 flex flex-col gap-8">
            {supportingTestimonials.map((review, index) => (
              <MotionWrapper 
                key={review.id}
                animation="slideUp"
                delay={0.2 + (index * 0.1)}
                className="bg-brand-cream border border-border-main p-8 sm:p-10"
              >
                <div className="flex gap-1 mb-6">
                  {[...Array(review.rating)].map((_, i) => (
                    <span key={i} className="text-brand-terracotta text-sm">★</span>
                  ))}
                </div>
                
                <p className="text-lg text-brand-muted font-light leading-relaxed mb-8 italic">
                  &ldquo;{review.text}&rdquo;
                </p>
                
                <div>
                  <h4 className="font-semibold text-brand-espresso uppercase tracking-wider text-xs">
                    {review.author}
                  </h4>
                  <p className="text-brand-muted text-xs mt-1">
                    {review.role}
                  </p>
                </div>
              </MotionWrapper>
            ))}
            
            <MotionWrapper animation="fadeIn" delay={0.5} className="p-8 flex items-center gap-4 border border-transparent">
              <div className="w-12 h-12 flex-shrink-0 flex items-center justify-center bg-white rounded-full shadow-sm">
                <svg className="w-6 h-6" viewBox="0 0 24 24">
                  <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                  <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                  <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
                  <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
                </svg>
              </div>
              <p className="text-sm text-brand-espresso font-medium leading-tight">
                Lihat 230+ ulasan lainnya<br/>di <a href="#" className="text-brand-terracotta underline">Google Business</a>
              </p>
            </MotionWrapper>
          </div>

        </div>
      </div>
    </section>
  );
}
