"use client";

import React from "react";
import Image from "next/image";

interface GalleryItem {
  id: number;
  alt: string;
  imageUrl: string;
  category: string;
}

export default function Gallery() {
  const photos: GalleryItem[] = [
    {
      id: 1,
      alt: "Precision Skin Fade",
      imageUrl: "https://images.unsplash.com/photo-1621605815971-fbc98d665033?auto=format&fit=crop&q=80&w=600&h=600",
      category: "Fade Work",
    },
    {
      id: 2,
      alt: "Hair Styling Process",
      imageUrl: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&q=80&w=600&h=600",
      category: "Styling",
    },
    {
      id: 3,
      alt: "Premium Clipper and Tools",
      imageUrl: "https://images.unsplash.com/photo-1599351431202-1e0f0137899a?auto=format&fit=crop&q=80&w=600&h=600",
      category: "Tools & Vibe",
    },
    {
      id: 4,
      alt: "Razor Beard Shaping Detail",
      imageUrl: "https://images.unsplash.com/photo-1503951914875-452162b0f3f1?auto=format&fit=crop&q=80&w=600&h=600",
      category: "Beard Work",
    },
    {
      id: 5,
      alt: "Taper Fade Sharp Outline",
      imageUrl: "https://images.unsplash.com/photo-1593702295094-aec22597af65?auto=format&fit=crop&q=80&w=600&h=600",
      category: "Haircut",
    },
    {
      id: 6,
      alt: "CREWCUT Studio Interior Vibe",
      imageUrl: "https://images.unsplash.com/photo-1585747860715-2ba37e788b70?auto=format&fit=crop&q=80&w=600&h=600",
      category: "Interior",
    },
  ];

  return (
    <section id="galeri" className="py-24 bg-bg-main scroll-mt-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="font-display text-sm font-bold uppercase tracking-widest text-gold">
            Galeri Potongan & Studio
          </h2>
          <p className="mt-3 font-display text-3xl sm:text-5xl font-bold uppercase tracking-tight text-text-primary">
            KARYA TERBAIK KAMI
          </p>
          <div className="mt-4 h-1 w-12 bg-gold mx-auto" />
          <p className="mt-4 text-base text-text-secondary">
            Setiap garis rambut dan sudut potong dikerjakan dengan standar akurasi tinggi. Kami bangga dengan hasil kerja kami.
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
          {photos.map((photo) => (
            <div
              key={photo.id}
              className="group relative overflow-hidden rounded-xl border border-border-main bg-bg-surface aspect-square"
            >
              {/* Image */}
              <Image
                src={photo.imageUrl}
                alt={photo.alt}
                fill
                sizes="(max-w-768px) 50vw, (max-w-1024px) 33vw, 400px"
                className="object-cover transition-transform duration-500 group-hover:scale-110 filter grayscale brightness-90 group-hover:grayscale-0 group-hover:brightness-100"
              />

              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4 sm:p-6">
                <span className="text-[10px] sm:text-xs font-bold tracking-widest text-gold uppercase mb-1">
                  {photo.category}
                </span>
                <h3 className="font-display text-sm sm:text-lg font-bold text-text-primary uppercase tracking-wide">
                  {photo.alt}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
