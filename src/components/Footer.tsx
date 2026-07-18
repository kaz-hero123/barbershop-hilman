import React from "react";
import { Button } from "@/components/ui/Button";

export default function Footer() {
  return (
    <footer id="kontak" className="bg-brand-espresso text-brand-cream border-t border-brand-espresso">
      <div className="mx-auto max-w-7xl px-6 lg:px-8 py-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          
          <div className="flex flex-col justify-between">
            <div>
              <h2 className="font-display text-5xl sm:text-6xl font-medium leading-tight">
                Siap untuk jeda Anda?
              </h2>
              <p className="mt-8 text-lg font-light text-brand-surface-elevated max-w-md leading-relaxed">
                Pilih waktu yang pas. Kami siapkan kursi, handuk hangat, dan kopi untuk Anda.
              </p>
              
              <div className="mt-12 flex flex-col sm:flex-row gap-6">
                <Button 
                  message="Halo CREWCUT Studio, saya ingin mengatur jadwal kunjungan."
                  className="bg-brand-terracotta text-white hover:bg-brand-terracotta/90 border border-brand-terracotta hover:border-brand-terracotta/90"
                >
                  Atur Jadwal Sekarang
                </Button>
              </div>
            </div>
            
            <div className="mt-20 pt-10 border-t border-brand-muted/30 grid grid-cols-1 sm:grid-cols-2 gap-10">
              <div>
                <h4 className="font-semibold uppercase tracking-widest text-xs text-brand-terracotta mb-4">Lokasi</h4>
                <p className="font-light text-brand-surface-elevated leading-relaxed">
                  Jl. Senopati No. 45<br />
                  Kebayoran Baru, Jakarta Selatan<br />
                  DKI Jakarta 12190
                </p>
              </div>
              <div>
                <h4 className="font-semibold uppercase tracking-widest text-xs text-brand-terracotta mb-4">Jam Operasional</h4>
                <p className="font-light text-brand-surface-elevated leading-relaxed">
                  Senin - Minggu<br />
                  10.00 - 21.00 WIB
                </p>
                <p className="mt-4 font-light text-brand-surface-elevated">
                  WA: +62 812-3456-7890
                </p>
              </div>
            </div>
          </div>

          <div className="h-[400px] lg:h-auto w-full bg-brand-muted/20 overflow-hidden relative">
            <iframe
              width="100%"
              height="100%"
              className="absolute inset-0 w-full h-full border-0 mix-blend-luminosity opacity-80"
              title="CREWCUT Studio Google Map Location"
              src="https://maps.google.com/maps?width=100%&height=100%&hl=en&q=Jl.%20Senopati%20No.%2045,%20Jakarta%20Selatan&t=&z=14&ie=UTF8&iwloc=B&output=embed"
              loading="lazy"
            />
          </div>

        </div>
      </div>

      <div className="border-t border-brand-muted/20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 py-10 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-center md:text-left">
            <span className="font-display text-xl font-bold tracking-widest">
              CREWCUT
            </span>
            <p className="mt-2 text-xs font-light text-brand-surface-elevated max-w-xs">
              Sebuah jeda yang mengubah di tengah sibuknya Jakarta.
            </p>
          </div>

          <div className="flex gap-6">
            <a href="#" className="text-brand-surface-elevated hover:text-brand-terracotta transition-colors" aria-label="Instagram">
              <svg className="h-5 w-5 fill-current" viewBox="0 0 24 24">
                 <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.051.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
              </svg>
            </a>
            <a href="#" className="text-brand-surface-elevated hover:text-brand-terracotta transition-colors" aria-label="TikTok">
               <svg className="h-5 w-5 fill-current" viewBox="0 0 24 24">
                 <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.17-2.86-.74-3.94-1.74-.22-.21-.4-.45-.58-.7-.03 3.75-.02 7.5-.02 11.25-.09 1.54-.62 3.1-1.75 4.19-1.12 1.12-2.7 1.63-4.25 1.79-1.54-.08-3.11-.63-4.19-1.75-1.12-1.12-1.63-2.7-1.79-4.24.08-1.54.63-3.11 1.75-4.19 1.11-1.12 2.69-1.63 4.24-1.79v4.03c-.72.08-1.45.33-1.98.85-.53.53-.78 1.25-.85 1.98.08.72.33 1.45.85 1.98.53.53 1.25.78 1.98.85.73-.08 1.45-.33 1.98-.85.53-.53.78-1.25.85-1.98V.02z" />
               </svg>
            </a>
          </div>

          <div className="text-center md:text-right text-xs font-light text-brand-surface-elevated">
            <p>&copy; {new Date().getFullYear()} CREWCUT Studio. Hak Cipta Dilindungi.</p>
            <p className="mt-1">
              Desain ulang konseptual oleh{" "}
              <a href="https://github.com/kaz-hero123" target="_blank" rel="noopener noreferrer" className="text-brand-terracotta hover:underline font-medium">
                Hilman
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
