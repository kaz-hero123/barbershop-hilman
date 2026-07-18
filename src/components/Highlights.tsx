import React from "react";
import { Clock, Crosshair, CalendarCheck, Star, Users, Calendar } from "lucide-react";
import { TRUST_STATS } from "@/data";
import { MotionWrapper } from "@/components/ui/MotionWrapper";

export default function Highlights() {
  const points = [
    {
      title: "30 Menit Selesai",
      description: "Layanan efisien tanpa membuang waktu berharga Anda.",
      icon: <Clock className="h-6 w-6 text-gold" />,
    },
    {
      title: "Presisi Tinggi",
      description: "Setiap potongan diukur detail dengan spesifikasi fade & taper tajam.",
      icon: <Crosshair className="h-6 w-6 text-gold" />,
    },
    {
      title: "Tanpa Antre",
      description: "Sistem booking WhatsApp instan, datang langsung potong.",
      icon: <CalendarCheck className="h-6 w-6 text-gold" />,
    },
  ];

  return (
    <section className="relative z-20 -mt-16 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div className="rounded-2xl border border-border-main bg-bg-surface/80 backdrop-blur-xl p-8 shadow-2xl">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 divide-y md:divide-y-0 md:divide-x divide-border-main">
          {points.map((point, index) => (
            <MotionWrapper
              key={point.title}
              animation="slideUp"
              delay={index * 0.15}
              className={`flex items-start gap-4 ${
                index > 0 ? "pt-6 md:pt-0 md:pl-8" : ""
              }`}
            >
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gold/10 transition-transform duration-300 hover:scale-110">
                {point.icon}
              </div>
              <div>
                <h3 className="font-display text-lg font-bold uppercase tracking-wider text-text-primary">
                  {point.title}
                </h3>
                <p className="mt-2 text-sm text-text-secondary leading-relaxed">
                  {point.description}
                </p>
              </div>
            </MotionWrapper>
          ))}
        </div>

        <div className="mt-8 pt-8 border-t border-border-main">
          <div className="flex flex-wrap justify-center sm:justify-between items-center gap-6 px-2 sm:px-4">
            <MotionWrapper animation="fadeIn" delay={0.4} className="flex items-center gap-2">
              <Star className="h-5 w-5 text-gold fill-current" />
              <span className="font-display text-xl font-bold text-text-primary">{TRUST_STATS.rating}</span>
              <span className="text-sm text-text-secondary uppercase tracking-widest ml-1">{TRUST_STATS.reviewsCount} Google Reviews</span>
            </MotionWrapper>
            
            <div className="hidden sm:block h-1.5 w-1.5 bg-border-main rounded-full" />
            
            <MotionWrapper animation="fadeIn" delay={0.5} className="flex items-center gap-2">
              <Users className="h-5 w-5 text-gold" />
              <span className="font-display text-xl font-bold text-text-primary">{TRUST_STATS.clientsCount}</span>
              <span className="text-sm text-text-secondary uppercase tracking-widest ml-1">Klien Puas</span>
            </MotionWrapper>

            <div className="hidden sm:block h-1.5 w-1.5 bg-border-main rounded-full" />
            
            <MotionWrapper animation="fadeIn" delay={0.6} className="flex items-center gap-2">
              <Calendar className="h-5 w-5 text-gold" />
              <span className="font-display text-xl font-bold text-text-primary">EST.</span>
              <span className="text-sm text-text-secondary uppercase tracking-widest ml-1">{TRUST_STATS.established}</span>
            </MotionWrapper>
          </div>
        </div>
      </div>
    </section>
  );
}
