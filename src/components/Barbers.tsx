"use client";

import React from "react";
import Image from "next/image";
import { getWhatsAppLink } from "@/utils/whatsapp";

interface BarberItem {
  id: string;
  name: string;
  nickname: string;
  specialty: string;
  bio: string;
  imageUrl: string;
}

export default function Barbers() {
  const barbers: BarberItem[] = [
    {
      id: "rian",
      name: "Rian",
      nickname: "The Clipper",
      specialty: "Skin Fade & Modern Taper",
      bio: "Rian memadukan presisi geometris dengan teknik potong modern untuk menghasilkan fade yang mulus sempurna.",
      imageUrl: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=600&h=800",
    },
    {
      id: "dian",
      name: "Dian",
      nickname: "The Barber",
      specialty: "Classic Cut & Beard Sculpting",
      bio: "Ahli dalam potongan klasik legendaris dan penataan jenggot yang presisi sesuai karakter dan garis rahang Anda.",
      imageUrl: "https://images.unsplash.com/photo-1607990283143-e81e7a2c93ab?auto=format&fit=crop&q=80&w=600&h=800",
    },
  ];

  const handleBarberBooking = (barber: BarberItem) => {
    const message = `Halo CREWCUT Studio, saya ingin booking jadwal potong rambut dengan Barber ${barber.name} (${barber.nickname}).`;
    window.open(getWhatsAppLink(message), "_blank");
  };

  return (
    <section id="barber" className="py-24 bg-bg-surface/50 border-t border-b border-border-main scroll-mt-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="font-display text-sm font-bold uppercase tracking-widest text-gold">
            Tim Barber Kami
          </h2>
          <p className="mt-3 font-display text-3xl sm:text-5xl font-bold uppercase tracking-tight text-text-primary">
            KREATIF & PRESISI
          </p>
          <div className="mt-4 h-1 w-12 bg-gold mx-auto" />
          <p className="mt-4 text-base text-text-secondary">
            Setiap barber kami adalah seniman berlisensi yang berdedikasi tinggi memberikan potongan paling tajam untuk Anda.
          </p>
        </div>

        {/* Barbers Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {barbers.map((barber) => (
            <div
              key={barber.id}
              className="group relative flex flex-col items-center rounded-xl border border-border-main bg-bg-surface overflow-hidden transition-all duration-300 hover:border-gold/30"
            >
              {/* Photo Area */}
              <div className="relative w-full aspect-[4/5] overflow-hidden">
                <Image
                  src={barber.imageUrl}
                  alt={`Barber ${barber.name}`}
                  fill
                  className="object-cover object-center transition-transform duration-500 group-hover:scale-105 filter grayscale contrast-110 brightness-95 group-hover:grayscale-0"
                  sizes="(max-w-768px) 100vw, 400px"
                />
                {/* Dark Vignette Gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-bg-surface via-transparent to-transparent opacity-80" />
                
                {/* Badge Overlay */}
                <div className="absolute bottom-4 left-4 z-10">
                  <span className="inline-flex items-center rounded-full bg-gold px-3 py-1 text-xs font-bold text-black uppercase tracking-wider">
                    {barber.specialty}
                  </span>
                </div>
              </div>

              {/* Bio & Details Area */}
              <div className="p-8 w-full text-left">
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

                {/* Booking button per barber */}
                <div className="mt-6">
                  <button
                    onClick={() => handleBarberBooking(barber)}
                    className="w-full inline-flex items-center justify-center gap-2 rounded-lg bg-bg-main border border-border-main px-4 py-2.5 text-sm font-semibold tracking-wide text-text-primary hover:border-gold hover:bg-gold hover:text-black transition-all duration-300 cursor-pointer"
                  >
                    Booking Jadwal dengan {barber.name}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
