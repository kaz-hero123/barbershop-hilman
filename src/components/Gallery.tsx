import React from "react";
import Image from "next/image";
import { MotionWrapper } from "@/components/ui/MotionWrapper";
import { GALLERY_PHOTOS } from "@/legacy/data";

export default function Gallery() {
  // We'll create a simple masonry-like grid
  // Photo 1 & 4 large, others smaller for visual interest
  
  return (
    <section id="karya" className="py-32 bg-brand-surface border-t border-b border-border-main">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-20">
          <MotionWrapper animation="slideUp" className="max-w-2xl">
            <h2 className="font-display text-4xl sm:text-5xl font-medium text-brand-espresso leading-tight">
              Sebelum & Sesudah Duduk.
            </h2>
            <p className="mt-6 text-lg text-brand-muted font-light leading-relaxed">
              Bukti lebih keras dari janji. Lihat bagaimana kami menerjemahkan karakter menjadi garis yang presisi.
            </p>
          </MotionWrapper>
          
          <MotionWrapper animation="fadeIn" delay={0.3} className="hidden md:block">
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-sm font-semibold tracking-widest uppercase text-brand-terracotta hover:text-brand-espresso transition-colors">
              Lihat di Instagram →
            </a>
          </MotionWrapper>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {GALLERY_PHOTOS.map((photo, index) => {
            // Make the first and fourth images span 2 rows on large screens
            const isLarge = index === 0 || index === 3;
            
            return (
              <MotionWrapper
                key={photo.id}
                animation="scale"
                delay={index * 0.1}
                className={`group relative overflow-hidden bg-brand-cream ${
                  isLarge ? "md:col-span-2 lg:col-span-2 aspect-[16/9] lg:aspect-[4/3]" : "aspect-square"
                }`}
              >
                <Image
                  src={photo.imageUrl}
                  alt={photo.alt}
                  fill
                  sizes={isLarge ? "(max-w-1024px) 100vw, 66vw" : "(max-w-768px) 100vw, (max-w-1024px) 50vw, 33vw"}
                  className="object-cover transition-transform duration-700 group-hover:scale-105 img-warm-filter"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-brand-espresso/80 via-brand-espresso/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-6 sm:p-8">
                  <span className="text-xs font-semibold tracking-widest text-brand-cream uppercase mb-2">
                    {photo.category}
                  </span>
                  <h3 className="font-display text-xl sm:text-2xl font-medium text-white">
                    {photo.alt}
                  </h3>
                </div>
              </MotionWrapper>
            );
          })}
        </div>
        
        <div className="mt-12 md:hidden">
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="inline-block text-sm font-semibold tracking-widest uppercase text-brand-terracotta hover:text-brand-espresso transition-colors">
            Lihat di Instagram →
          </a>
        </div>
        
      </div>
    </section>
  );
}
