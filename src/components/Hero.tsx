import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { MotionWrapper } from "@/components/ui/MotionWrapper";
import { TRUST_STATS } from "@/legacy/data";

export default function Hero() {
  return (
    <section className="relative min-h-[100svh] flex flex-col justify-center pt-20 overflow-hidden bg-brand-cream">
      {/* Background Image with warm filter */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1599351431202-1e0f0137899a?auto=format&fit=crop&q=80&w=2000"
          alt="CREWCUT Studio Atmosphere"
          fill
          priority
          className="object-cover object-center img-warm-filter opacity-30 mix-blend-multiply"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-brand-cream/80 via-brand-cream/50 to-brand-cream" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8 w-full">
        <div className="max-w-4xl">
          
          <MotionWrapper animation="slideUp" delay={0.1}>
            <span className="text-sm font-medium tracking-widest text-brand-terracotta uppercase mb-6 block">
              Lebih dari sekadar potongan rambut
            </span>
          </MotionWrapper>

          <MotionWrapper animation="reveal" delay={0.2}>
            <h1 className="font-display text-5xl sm:text-6xl md:text-7xl font-medium text-brand-espresso leading-[1.1] tracking-tight">
              Kapan terakhir kali Anda duduk, rileks, dan keluar merasa <span className="italic text-brand-terracotta">siap untuk segalanya?</span>
            </h1>
          </MotionWrapper>

          <MotionWrapper animation="slideUp" delay={0.4}>
            <p className="mt-8 text-lg sm:text-xl text-brand-muted leading-relaxed max-w-2xl font-light">
              Kami menyebutnya jeda yang mengubah. 30 menit yang didedikasikan untuk ketenangan Anda dan keahlian kami. Tanpa antre panjang, tanpa kompromi.
            </p>
          </MotionWrapper>

          <MotionWrapper animation="slideUp" delay={0.6}>
            <div className="mt-12 flex flex-col sm:flex-row items-center gap-6">
              <Button 
                message="Halo CREWCUT Studio, saya ingin mengatur jadwal kunjungan."
                className="w-full sm:w-auto px-10 py-5 text-sm uppercase tracking-widest font-semibold"
              >
                Amankan Kursi Anda
              </Button>
              
              <a href="#pengalaman" className="text-sm font-medium text-brand-espresso hover:text-brand-terracotta transition-colors underline underline-offset-4">
                Jelajahi Menu Kami
              </a>
            </div>
          </MotionWrapper>
        </div>
      </div>

      {/* Integrated Trust Bar */}
      <MotionWrapper 
        animation="fadeIn" 
        delay={0.8}
        className="relative z-10 mt-auto pt-20 pb-8 mx-auto max-w-7xl px-6 lg:px-8 w-full"
      >
        <div className="border-t border-brand-espresso/10 pt-8 flex flex-wrap gap-x-12 gap-y-6 items-center">
          <div className="flex items-center gap-3">
            <div className="flex -space-x-2">
              <div className="w-8 h-8 rounded-full bg-brand-surface border-2 border-brand-cream overflow-hidden">
                <Image src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=100&h=100" alt="Client" width={32} height={32} className="object-cover" />
              </div>
              <div className="w-8 h-8 rounded-full bg-brand-surface border-2 border-brand-cream overflow-hidden">
                <Image src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80&w=100&h=100" alt="Client" width={32} height={32} className="object-cover" />
              </div>
              <div className="w-8 h-8 rounded-full bg-brand-terracotta border-2 border-brand-cream flex items-center justify-center text-[10px] font-bold text-white">
                4.9★
              </div>
            </div>
            <div className="text-sm text-brand-espresso font-medium">
              <span className="font-bold">{TRUST_STATS.rating} dari 5</span> berdasarkan {TRUST_STATS.reviewsCount} ulasan.
            </div>
          </div>
          
          <div className="hidden sm:block w-px h-8 bg-brand-espresso/10"></div>
          
          <div className="text-sm text-brand-espresso font-medium">
            Dipercaya oleh <span className="font-bold">{TRUST_STATS.clientsCount} klien</span> sejak {TRUST_STATS.established}.
          </div>
        </div>
      </MotionWrapper>
    </section>
  );
}
