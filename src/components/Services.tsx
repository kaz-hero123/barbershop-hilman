import React from "react";
import { Clock, ArrowRight } from "lucide-react";
import { SERVICES } from "@/data";
import { MotionWrapper } from "@/components/ui/MotionWrapper";
import { BookingButton } from "@/components/ui/BookingButton";

export default function Services() {
  return (
    <section id="layanan" className="py-24 bg-bg-main relative scroll-mt-20">


      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-16">
          <MotionWrapper animation="slideUp" className="max-w-2xl">
            <h2 className="font-display text-4xl sm:text-5xl font-bold uppercase tracking-tight text-text-primary">
              PILIH GAYA TAJAM ANDA
            </h2>
            <div className="mt-6 h-1 w-12 bg-gold" />
            <p className="mt-6 text-base text-text-secondary">
              Semua layanan dikerjakan secara presisi dengan estimasi durasi transparan agar waktu berharga Anda tidak terbuang sia-sia.
            </p>
          </MotionWrapper>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {SERVICES.map((service, index) => (
            <MotionWrapper
              key={service.id}
              animation="slideUp"
              delay={index * 0.1}
              className="group flex flex-col justify-between rounded-xl border border-border-main bg-bg-surface p-8 transition-all duration-300 hover:border-gold/30"
            >
              <div>
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h3 className="font-display text-xl sm:text-2xl font-bold uppercase tracking-wide text-text-primary group-hover:text-gold transition-colors duration-300">
                      {service.name}
                    </h3>
                    <div className="mt-1 inline-flex items-center gap-1.5 rounded-full bg-bg-main border border-border-main px-2.5 py-0.5 text-xs text-text-secondary">
                      <Clock className="h-3.5 w-3.5 text-gold" />
                      {service.duration}
                    </div>
                  </div>
                  <span className="font-display text-xl sm:text-2xl font-bold text-gold">
                    {service.price}
                  </span>
                </div>
                <p className="mt-6 text-sm sm:text-base text-text-secondary leading-relaxed font-light">
                  {service.description}
                </p>
              </div>

              <div className="mt-8">
                <BookingButton
                  message={`Halo CREWCUT Studio, saya ingin booking layanan ${service.name} (${service.price} - ${service.duration}).`}
                  variant="secondary"
                  className="w-full flex items-center justify-center gap-2 group/btn"
                >
                  Booking Jadwal ini
                  <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover/btn:translate-x-1" />
                </BookingButton>
              </div>
            </MotionWrapper>
          ))}
        </div>
      </div>
    </section>
  );
}
