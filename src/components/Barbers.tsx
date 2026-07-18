import React from "react";
import Image from "next/image";
import { BARBERS } from "@/data";
import { MotionWrapper } from "@/components/ui/MotionWrapper";
import { BookingButton } from "@/components/ui/BookingButton";

export default function Barbers() {
  return (
    <section id="barber" className="py-24 bg-bg-surface/50 border-t border-b border-border-main scroll-mt-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-16 flex flex-col md:flex-row items-start md:items-end gap-6 max-w-4xl mx-auto">
          <MotionWrapper animation="slideUp" className="flex items-start gap-4 sm:gap-6">
            <span className="font-display text-7xl sm:text-8xl font-bold text-gold/20 leading-none">02</span>
            <div>
              <h2 className="font-display text-3xl sm:text-5xl font-bold uppercase tracking-tight text-text-primary mt-2">
                KREATIF & PRESISI
              </h2>
              <p className="mt-4 text-base text-text-secondary max-w-xl">
                Setiap barber kami adalah seniman berlisensi yang berdedikasi tinggi memberikan potongan paling tajam untuk Anda.
              </p>
            </div>
          </MotionWrapper>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {BARBERS.map((barber, index) => (
            <MotionWrapper
              key={barber.id}
              animation="slideUp"
              delay={index * 0.2}
              className="group relative flex flex-col items-center rounded-xl border border-border-main bg-bg-surface overflow-hidden transition-all duration-300 hover:border-gold/30"
            >
              <div className="relative w-full aspect-[4/5] overflow-hidden">
                <Image
                  src={barber.imageUrl}
                  alt={`Barber ${barber.name}`}
                  fill
                  className="object-cover object-center transition-transform duration-500 group-hover:scale-105 filter grayscale contrast-110 brightness-95"
                  sizes="(max-w-768px) 100vw, 400px"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-bg-surface via-transparent to-transparent opacity-80" />
                <div className="absolute bottom-4 left-4 z-10">
                  <span className="inline-flex items-center rounded-full bg-gold px-3 py-1 text-xs font-bold text-black uppercase tracking-wider">
                    {barber.specialty}
                  </span>
                </div>
              </div>

              <div className="p-8 w-full text-left flex flex-col h-full justify-between">
                <div>
                  <div className="flex items-baseline gap-2">
                    <h3 className="font-display text-2xl font-bold uppercase tracking-wide text-text-primary">
                      {barber.name}
                    </h3>
                    <span className="text-sm font-semibold tracking-widest text-gold uppercase">
                      &ldquo;{barber.nickname}&rdquo;
                    </span>
                  </div>
                  <p className="mt-4 text-sm sm:text-base text-text-secondary font-light leading-relaxed">
                    {barber.bio}
                  </p>
                </div>

                <div className="mt-6">
                  <BookingButton
                    message={`Halo CREWCUT Studio, saya ingin booking jadwal potong rambut dengan Barber ${barber.name} (${barber.nickname}).`}
                    variant="secondary"
                    className="w-full"
                  >
                    Booking Jadwal dengan {barber.name}
                  </BookingButton>
                </div>
              </div>
            </MotionWrapper>
          ))}
        </div>
      </div>
    </section>
  );
}
