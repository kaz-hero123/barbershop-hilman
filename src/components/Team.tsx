import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { MotionWrapper } from "@/components/ui/MotionWrapper";
import { BARBERS } from "@/legacy/data";

export default function Team() {
  return (
    <section id="tim" className="py-32 bg-brand-cream">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        
        <MotionWrapper animation="slideUp" className="max-w-3xl mb-20">
          <h2 className="font-display text-4xl sm:text-5xl font-medium text-brand-espresso leading-tight">
            Dua Orang di Balik Kursi.
          </h2>
          <p className="mt-6 text-lg text-brand-muted font-light leading-relaxed">
            Tidak ada karyawan acak di sini. Hanya seniman berlisensi yang mengenal lekuk kepala Anda sebaik mereka mengenal alat mereka sendiri.
          </p>
        </MotionWrapper>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          {BARBERS.map((barber, index) => (
            <MotionWrapper 
              key={barber.id} 
              animation="slideUp" 
              delay={index * 0.2}
              className="flex flex-col gap-8"
            >
              <div className="relative w-full aspect-[4/5] bg-brand-surface group overflow-hidden">
                <Image
                  src={barber.imageUrl}
                  alt={`Potret Barber ${barber.name}`}
                  fill
                  className="object-cover object-center img-warm-filter transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-w-1024px) 100vw, 50vw"
                />
                {/* Subtle vignette/gradient for text legibility if needed, but we keep text below */}
                <div className="absolute inset-0 bg-gradient-to-t from-brand-espresso/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>

              <div className="flex flex-col">
                <div className="flex flex-wrap items-baseline gap-x-4 gap-y-2 border-b border-border-main pb-4">
                  <h3 className="font-display text-3xl font-medium text-brand-espresso">
                    {barber.name}
                  </h3>
                  <span className="text-sm tracking-widest text-brand-terracotta uppercase font-semibold">
                    &ldquo;{barber.nickname}&rdquo;
                  </span>
                </div>
                
                <div className="mt-4 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-brand-sage" />
                  <span className="text-sm font-medium text-brand-muted uppercase tracking-wider">
                    {barber.specialty}
                  </span>
                </div>

                <p className="mt-6 text-brand-muted font-light leading-relaxed text-lg">
                  {barber.bio}
                </p>

                <div className="mt-8">
                  <Button 
                    message={`Halo CREWCUT, saya ingin memastikan ketersediaan Barber ${barber.name} untuk jadwal saya.`}
                    variant="outline"
                  >
                    Duduk di Kursi {barber.name}
                  </Button>
                </div>
              </div>
            </MotionWrapper>
          ))}
        </div>
      </div>
    </section>
  );
}
