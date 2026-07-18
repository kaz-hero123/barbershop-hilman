import React from "react";
import Image from "next/image";
import { GALLERY_PHOTOS } from "@/data";
import { MotionWrapper } from "@/components/ui/MotionWrapper";

export default function Gallery() {
  return (
    <section id="galeri" className="py-24 bg-bg-main scroll-mt-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <MotionWrapper animation="slideUp" className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="font-display text-sm font-bold uppercase tracking-widest text-gold">
            Galeri Potongan & Studio
          </h2>
          <p className="mt-3 font-display text-3xl sm:text-5xl font-bold uppercase tracking-tight text-text-primary">
            KARYA TERBAIK KAMI
          </p>
          <p className="mt-6 text-base text-text-secondary">
            Setiap garis rambut dan sudut potong dikerjakan dengan standar akurasi tinggi. Kami bangga dengan hasil kerja kami.
          </p>
        </MotionWrapper>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
          {GALLERY_PHOTOS.map((photo, index) => (
            <MotionWrapper
              key={photo.id}
              animation="scale"
              delay={index * 0.1}
              className="group relative overflow-hidden rounded-xl border border-border-main bg-bg-surface aspect-square"
            >
              <Image
                src={photo.imageUrl}
                alt={photo.alt}
                fill
                sizes="(max-w-768px) 50vw, (max-w-1024px) 33vw, 400px"
                className="object-cover transition-transform duration-500 group-hover:scale-110 filter grayscale brightness-90 group-hover:grayscale-0 group-hover:brightness-100"
              />

              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4 sm:p-6">
                <span className="text-[10px] sm:text-xs font-bold tracking-widest text-gold uppercase mb-1">
                  {photo.category}
                </span>
                <h3 className="font-display text-sm sm:text-lg font-bold text-text-primary uppercase tracking-wide">
                  {photo.alt}
                </h3>
              </div>
            </MotionWrapper>
          ))}
        </div>
      </div>
    </section>
  );
}
