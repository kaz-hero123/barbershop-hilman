"use client";

import React from "react";
import Image from "next/image";
import { getWhatsAppLink } from "@/utils/whatsapp";

export default function Hero() {
  const handleBooking = () => {
    const message = "Halo CREWCUT Studio, saya ingin booking jadwal potong rambut.";
    window.open(getWhatsAppLink(message), "_blank");
  };

  return (
    <section className="relative flex min-h-[calc(100vh-80px)] items-center justify-center overflow-hidden py-20">
      {/* Background Image with Dark Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1503951914875-452162b0f3f1?auto=format&fit=crop&q=80&w=1920"
          alt="CREWCUT Studio Interior"
          fill
          priority
          className="object-cover object-center filter grayscale contrast-125 brightness-[0.35]"
        />
        {/* Gradient overlays for smooth fading */}
        <div className="absolute inset-0 bg-gradient-to-t from-bg-main via-transparent to-bg-main/50" />
        <div className="absolute inset-0 bg-gradient-to-r from-bg-main/90 via-bg-main/40 to-transparent" />
      </div>

      {/* Decorative Blur Element */}
      <div className="absolute top-1/4 left-1/4 -z-10 h-72 w-72 rounded-full bg-gold/10 blur-[100px]" />

      {/* Content Container */}
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full">
        <div className="max-w-3xl text-left">
          {/* Tagline Badge */}
          <div className="inline-flex items-center gap-2 rounded-full border border-gold/30 bg-gold/5 px-3 py-1 text-xs font-semibold tracking-widest text-gold uppercase mb-6 animate-pulse">
            <span className="h-1.5 w-1.5 rounded-full bg-gold" />
            SHARP IN 30 Concept
          </div>

          {/* Headline */}
          <h1 className="font-display text-5xl sm:text-7xl font-bold tracking-tight text-text-primary leading-none uppercase">
            PRESISI.<br />
            CEPAT.<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold to-gold-light">TAJAM.</span>
          </h1>

          {/* Description */}
          <p className="mt-6 text-lg sm:text-xl text-text-secondary leading-relaxed max-w-xl font-light">
            Grooming premium untuk profesional aktif. Tanpa antre lama, selesai dalam <span className="text-text-primary font-medium">30 menit</span> dengan presisi maksimal oleh barber bersertifikasi.
          </p>

          {/* Action Buttons */}
          <div className="mt-10 flex flex-col sm:flex-row gap-4">
            <button
              onClick={handleBooking}
              className="inline-flex items-center justify-center rounded-lg bg-gold px-8 py-4 text-base font-bold text-black hover:bg-gold-light transition-all duration-300 shadow-[0_4px_20px_rgba(200,169,97,0.25)] hover:shadow-[0_4px_30px_rgba(200,169,97,0.4)] transform hover:-translate-y-0.5 cursor-pointer"
            >
              Pesan Sekarang
            </button>
            <a
              href="#layanan"
              className="inline-flex items-center justify-center rounded-lg border border-border-main bg-bg-surface/50 backdrop-blur-sm px-8 py-4 text-base font-bold text-text-primary hover:border-gold/50 hover:bg-bg-surface-elevated transition-all duration-300 transform hover:-translate-y-0.5"
            >
              Lihat Menu Layanan
            </a>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 animate-bounce">
        <span className="text-[10px] tracking-widest text-text-secondary uppercase">Scroll</span>
        <svg className="h-5 w-5 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  );
}
