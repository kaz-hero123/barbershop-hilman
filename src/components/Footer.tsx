import { BUSINESS_INFO } from "@/data";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-charcoal text-warm-cream/50 py-8 border-t border-warm-cream/10">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
        
        <div className="text-2xl font-bold font-display tracking-tight text-warm-cream opacity-80">
          CREWCUT<span className="text-amber-accent">.</span>
        </div>
        
        <div className="text-sm">
          &copy; {currentYear} {BUSINESS_INFO.name}. Hak Cipta Dilindungi.
        </div>
        
        <div className="flex gap-6 text-sm">
          <a href="#" className="hover:text-warm-cream transition-colors focus-visible:outline-amber-accent">Instagram</a>
          <a href="#" className="hover:text-warm-cream transition-colors focus-visible:outline-amber-accent">Tiktok</a>
        </div>
        
      </div>
    </footer>
  );
}
