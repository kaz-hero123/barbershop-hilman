import React from "react";
import { Button } from "@/components/ui/Button";
import { MotionWrapper } from "@/components/ui/MotionWrapper";
import { SERVICES } from "@/legacy/data";
import { Clock } from "lucide-react";

export default function Experience() {
  return (
    <section id="pengalaman" className="py-32 bg-brand-surface relative border-t border-border-main">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          
          <div className="lg:col-span-5">
            <div className="sticky top-32">
              <MotionWrapper animation="slideUp">
                <h2 className="font-display text-4xl sm:text-5xl font-medium text-brand-espresso leading-tight">
                  Menu Pengalaman Kami.
                </h2>
                <div className="mt-8 h-px w-24 bg-brand-terracotta" />
                <p className="mt-8 text-lg text-brand-muted font-light leading-relaxed">
                  Kami tidak sekadar memotong rambut. Kami menyajikan ritual kecil yang mengembalikan ketajaman fisik dan mental Anda. Waktu Anda berharga, maka setiap menit dirancang agar berarti.
                </p>
                <div className="mt-10">
                  <Button 
                    message="Halo CREWCUT, saya butuh rekomendasi layanan yang cocok untuk saya."
                    variant="outline"
                  >
                    Konsultasi Gaya
                  </Button>
                </div>
              </MotionWrapper>
            </div>
          </div>

          <div className="lg:col-span-7">
            <div className="flex flex-col gap-8">
              {SERVICES.map((service, index) => (
                <MotionWrapper 
                  key={service.id} 
                  animation="slideUp" 
                  delay={index * 0.1}
                  className="group relative bg-brand-cream border border-border-main p-8 sm:p-10 transition-all duration-500 hover:border-brand-terracotta/50"
                >
                  <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4">
                    <div>
                      <h3 className="font-display text-2xl font-medium text-brand-espresso group-hover:text-brand-terracotta transition-colors duration-300">
                        {service.name}
                      </h3>
                      <div className="mt-3 flex items-center gap-2 text-sm text-brand-muted">
                        <Clock className="w-4 h-4 text-brand-sage" />
                        <span>{service.duration}</span>
                        <span className="text-border-main">•</span>
                        <span className="font-medium text-brand-espresso">{service.price}</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="mt-6 border-t border-border-main/50 pt-6">
                    <p className="text-brand-muted font-light leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                  
                  <div className="mt-8">
                    <Button 
                      message={`Halo CREWCUT Studio, saya ingin memesan layanan ${service.name} (${service.price}).`}
                      variant="ghost"
                      className="px-0"
                    >
                      Pilih Pengalaman Ini
                    </Button>
                  </div>
                </MotionWrapper>
              ))}
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
}
