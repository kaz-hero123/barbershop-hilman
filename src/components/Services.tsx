"use client";

import React from "react";
import { getWhatsAppLink } from "@/utils/whatsapp";

interface ServiceItem {
  id: string;
  name: string;
  price: string;
  duration: string;
  description: string;
}

export default function Services() {
  const services: ServiceItem[] = [
    {
      id: "classic-cut",
      name: "Classic Cut",
      price: "Rp 70.000",
      duration: "30 Menit",
      description: "Potong rambut klasik disesuaikan dengan bentuk wajah Anda + styling pomade premium.",
    },
    {
      id: "precision-fade",
      name: "Precision Fade",
      price: "Rp 85.000",
      duration: "45 Menit",
      description: "Potongan fade super halus (skin fade, taper, atau undercut) menggunakan clipper presisi tinggi.",
    },
    {
      id: "beard-grooming",
      name: "Beard Grooming",
      price: "Rp 50.000",
      duration: "25 Menit",
      description: "Cukur, rapikan, dan bentuk jenggot/kumis disertai aplikasi handuk hangat dan massage wajah rileks.",
    },
    {
      id: "the-crew-special",
      name: "The Crew Special",
      price: "Rp 120.000",
      duration: "50 Menit",
      description: "Paket lengkap: Potong rambut presisi, cuci rambut penyegar, pijat kepala rileks, dan styling akhir.",
    },
  ];

  const handleServiceBooking = (service: ServiceItem) => {
    const message = `Halo CREWCUT Studio, saya ingin booking layanan ${service.name} (${service.price} - ${service.duration}).`;
    window.open(getWhatsAppLink(message), "_blank");
  };

  return (
    <section id="layanan" className="py-24 bg-bg-main relative scroll-mt-20">
      {/* Decorative backdrop glow */}
      <div className="absolute top-1/2 right-1/4 -z-10 h-96 w-96 rounded-full bg-gold/5 blur-[120px]" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="font-display text-sm font-bold uppercase tracking-widest text-gold">
            Menu Layanan & Harga
          </h2>
          <p className="mt-3 font-display text-3xl sm:text-5xl font-bold uppercase tracking-tight text-text-primary">
            PILIH GAYA TAJAM ANDA
          </p>
          <div className="mt-4 h-1 w-12 bg-gold mx-auto" />
          <p className="mt-4 text-base text-text-secondary">
            Semua layanan dikerjakan secara presisi dengan estimasi durasi transparan agar waktu berharga Anda tidak terbuang sia-sia.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {services.map((service) => (
            <div
              key={service.id}
              className="group flex flex-col justify-between rounded-xl border border-border-main bg-bg-surface p-8 transition-all duration-300 hover:border-gold/30 hover:bg-bg-surface-elevated hover:shadow-[0_10px_30px_rgba(200,169,97,0.05)]"
            >
              <div>
                {/* Header Card: Name, Duration & Price */}
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h3 className="font-display text-xl sm:text-2xl font-bold uppercase tracking-wide text-text-primary group-hover:text-gold transition-colors duration-300">
                      {service.name}
                    </h3>
                    <div className="mt-1 inline-flex items-center gap-1.5 rounded-full bg-bg-main border border-border-main px-2.5 py-0.5 text-xs text-text-secondary">
                      <svg className="h-3.5 w-3.5 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      {service.duration}
                    </div>
                  </div>
                  <span className="font-display text-xl sm:text-2xl font-bold text-gold">
                    {service.price}
                  </span>
                </div>

                {/* Description */}
                <p className="mt-6 text-sm sm:text-base text-text-secondary leading-relaxed font-light">
                  {service.description}
                </p>
              </div>

              {/* CTA Booking Button */}
              <div className="mt-8">
                <button
                  onClick={() => handleServiceBooking(service)}
                  className="w-full inline-flex items-center justify-center gap-2 rounded-lg bg-bg-main border border-border-main px-5 py-3 text-sm font-semibold tracking-wide text-text-primary hover:border-gold hover:bg-gold hover:text-black transition-all duration-300 cursor-pointer"
                >
                  Booking Jadwal ini
                  <svg
                    className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2.5}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                  </svg>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
