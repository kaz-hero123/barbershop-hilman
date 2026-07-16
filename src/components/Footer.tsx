import React from "react";
import { Clock, MapPin, Phone } from "lucide-react";
import { BookingButton } from "@/components/ui/BookingButton";

export default function Footer() {
  return (
    <footer id="kontak" className="bg-bg-main border-t border-border-main scroll-mt-20">
      <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-stretch">
          
          <div className="flex flex-col justify-between">
            <div>
              <h2 className="font-display text-sm font-bold uppercase tracking-widest text-gold">
                Hubungi & Kunjungi
              </h2>
              <p className="mt-3 font-display text-3xl sm:text-5xl font-bold uppercase tracking-tight text-text-primary">
                LOKASI & JAM OPERASIONAL
              </p>
              <div className="mt-4 h-1 w-12 bg-gold" />
              
              <div className="mt-10 space-y-8">
                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-gold/10 text-gold">
                    <Clock className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="font-display text-sm font-bold uppercase tracking-wider text-text-primary">
                      Jam Kerja
                    </h4>
                    <p className="mt-1 text-sm sm:text-base text-text-secondary font-light">
                      Senin - Minggu: 10.00 - 21.00 WIB
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-gold/10 text-gold">
                    <MapPin className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="font-display text-sm font-bold uppercase tracking-wider text-text-primary">
                      Alamat Studio
                    </h4>
                    <p className="mt-1 text-sm sm:text-base text-text-secondary font-light leading-relaxed">
                      Jl. Senopati No. 45, Kebayoran Baru,<br />
                      Jakarta Selatan, DKI Jakarta 12190
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-gold/10 text-gold">
                    <Phone className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="font-display text-sm font-bold uppercase tracking-wider text-text-primary">
                      Telepon & WhatsApp
                    </h4>
                    <p className="mt-1 text-sm sm:text-base text-text-secondary font-light">
                      +62 812-3456-7890
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-10 pt-6 border-t border-border-main">
              <BookingButton
                message="Halo CREWCUT Studio, saya ingin booking jadwal instan."
                variant="primary"
                className="px-6 py-3 text-sm"
              >
                Booking Instan Sekarang
              </BookingButton>
            </div>
          </div>

          <div className="relative min-h-[300px] h-full w-full rounded-2xl overflow-hidden border border-border-main bg-bg-surface shadow-md">
            <iframe
              width="100%"
              height="100%"
              className="absolute inset-0 w-full h-full border-0"
              style={{ filter: "grayscale(1) contrast(1.2) opacity(0.85)" }}
              title="CREWCUT Studio Google Map Location"
              src="https://maps.google.com/maps?width=100%&height=100%&hl=en&q=Jl.%20Senopati%20No.%2045,%20Jakarta%20Selatan&t=&z=14&ie=UTF8&iwloc=B&output=embed"
              loading="lazy"
            />
          </div>

        </div>
      </div>

      <div className="border-t border-border-main bg-[#060606]">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-center md:text-left">
            <a href="#" className="font-display text-xl font-bold tracking-wider text-text-primary">
              CREW<span className="text-gold">CUT</span> STUDIO
            </a>
            <p className="mt-2 text-xs text-text-secondary font-light max-w-xs leading-relaxed">
              Gaya rambut premium dengan presisi tinggi dan efisiensi waktu maksimal. Presisi. Cepat. Tajam.
            </p>
          </div>

          <div className="flex gap-4">
            <a href="#" className="text-text-secondary hover:text-gold transition-colors duration-200" aria-label="Instagram">
              <svg className="h-5 w-5 fill-current" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.051.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
              </svg>
            </a>
            <a href="#" className="text-text-secondary hover:text-gold transition-colors duration-200" aria-label="TikTok">
              <svg className="h-5 w-5 fill-current" viewBox="0 0 24 24">
                <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.17-2.86-.74-3.94-1.74-.22-.21-.4-.45-.58-.7-.03 3.75-.02 7.5-.02 11.25-.09 1.54-.62 3.1-1.75 4.19-1.12 1.12-2.7 1.63-4.25 1.79-1.54-.08-3.11-.63-4.19-1.75-1.12-1.12-1.63-2.7-1.79-4.24.08-1.54.63-3.11 1.75-4.19 1.11-1.12 2.69-1.63 4.24-1.79v4.03c-.72.08-1.45.33-1.98.85-.53.53-.78 1.25-.85 1.98.08.72.33 1.45.85 1.98.53.53 1.25.78 1.98.85.73-.08 1.45-.33 1.98-.85.53-.53.78-1.25.85-1.98V.02z" />
              </svg>
            </a>
            <a href="#" className="text-text-secondary hover:text-gold transition-colors duration-200" aria-label="YouTube">
              <svg className="h-5 w-5 fill-current" viewBox="0 0 24 24">
                <path d="M23.498 6.163a3.003 3.003 0 00-2.11-2.11C19.517 3.545 12 3.545 12 3.545s-7.517 0-9.388.508a3.003 3.003 0 00-2.11 2.11C0 8.033 0 12 0 12s0 3.967.502 5.837a3.003 3.003 0 002.11 2.11c1.871.508 9.388.508 9.388.508s7.517 0 9.388-.508a3.003 3.003 0 002.11-2.11C24 15.967 24 12 24 12s0-3.967-.502-5.837zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
              </svg>
            </a>
          </div>

          <div className="text-center md:text-right text-xs text-text-secondary font-light">
            <p>&copy; {new Date().getFullYear()} CREWCUT Studio. All rights reserved.</p>
            <p className="mt-1">
              Developed as a Portofolio Template by{" "}
              <a href="https://github.com/kaz-hero123" target="_blank" rel="noopener noreferrer" className="text-gold font-medium hover:underline">
                Hilman
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
