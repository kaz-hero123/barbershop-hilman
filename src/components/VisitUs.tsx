"use client";

import { motion } from "motion/react";
import { BUSINESS_INFO } from "@/data";
import { MapPin, Clock } from "lucide-react";
import Image from "next/image";

export default function VisitUs() {
  return (
    <section className="bg-charcoal text-warm-cream py-24 md:py-32 relative overflow-hidden">
      {/* Background subtle texture/gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-charcoal via-charcoal to-[#292524] z-0"></div>
      
      <div className="max-w-7xl mx-auto px-6 relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
        
        {/* Left: CTA & Info */}
        <div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-6xl font-display font-bold mb-8"
          >
            Kursimu menunggu.
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-lg text-warm-cream/70 mb-12 max-w-md leading-relaxed"
          >
            Pesan waktu Anda sekarang. Kami pastikan setiap menit yang Anda habiskan di sini sepadan dengan hasil yang Anda dapatkan.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col gap-6 mb-12"
          >
            <div className="flex items-start gap-4">
              <MapPin className="w-6 h-6 text-amber-accent shrink-0 mt-1" />
              <div>
                <h4 className="font-semibold text-lg mb-1">Lokasi</h4>
                <p className="text-warm-cream/70">{BUSINESS_INFO.address}</p>
              </div>
            </div>
            
            <div className="flex items-start gap-4">
              <Clock className="w-6 h-6 text-amber-accent shrink-0 mt-1" />
              <div>
                <h4 className="font-semibold text-lg mb-1">Jam Operasional</h4>
                <p className="text-warm-cream/70">{BUSINESS_INFO.hours}</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <a
              href={BUSINESS_INFO.whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-10 py-5 bg-amber-accent text-warm-white font-medium text-lg rounded-full transition-all hover:bg-amber-accent/90 hover:-translate-y-1 hover:shadow-[0_8px_30px_rgba(180,83,9,0.3)] focus-visible:outline-warm-cream w-full sm:w-auto"
            >
              Reservasi via WhatsApp
            </a>
          </motion.div>
        </div>

        {/* Right: Map / Visual */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative aspect-square md:aspect-[4/3] rounded-3xl overflow-hidden border border-warm-cream/10 shadow-2xl bg-warm-cream/5 flex items-center justify-center"
        >
          {/* Placeholder for actual Google Maps iframe. Using an aesthetic map placeholder for the demo to maintain premium look without an API key */}
          <Image
            src="https://images.unsplash.com/photo-1524661135-423995f22d0b?q=80&w=1000&auto=format&fit=crop" 
            alt="Peta Lokasi" 
            fill
            className="object-cover opacity-50 grayscale mix-blend-overlay"
          />
          <div className="relative z-10 text-center p-8 bg-charcoal/80 backdrop-blur-md rounded-2xl border border-warm-cream/10">
            <MapPin className="w-10 h-10 text-amber-accent mx-auto mb-4" />
            <h3 className="text-xl font-display font-semibold mb-2">{BUSINESS_INFO.name}</h3>
            <p className="text-sm text-warm-cream/70 max-w-[250px]">
              Pusat Senopati.<br/>Parkir tersedia untuk pelanggan.
            </p>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
