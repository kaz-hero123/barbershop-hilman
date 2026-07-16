# CREWCUT Studio - Landing Page Barbershop (Project #3)

Landing page untuk **CREWCUT Studio**, sebuah barbershop berkonsep *modern minimalist* & *urban* dengan fokus pada kecepatan, ketepatan, dan kepuasan pelanggan (*"SHARP IN 30"*). Project ini dibangun sebagai bagian dari portofolio personal developer (Project #3 dari 5 pada tier landing page).

## 🚀 Tech Stack
- **Framework:** Next.js (App Router)
- **Library:** React + TypeScript (TSX)
- **Styling:** Tailwind CSS (v4)
- **Deploy:** Vercel

## ✨ Fitur Utama
1. **Desain Urban Monochrome:** Memanfaatkan palet warna hitam arang (*warm black*), abu-abu, dan aksen *muted gold* untuk memberikan kesan premium, maskulin, dan profesional.
2. **Konsep Hook "SHARP IN 30":** Narrative kuat yang menyasar profesional sibuk yang menginginkan potongan presisi tinggi dalam 30 menit.
3. **Mekanisme WhatsApp CTA Dinamis:** Semua tombol *booking* terintegrasi langsung dengan WhatsApp secara instan menggunakan format URL encoding yang disesuaikan per-layanan secara otomatis (tanpa form submit/database/auth).
4. **Desain Mobile-First & Responsive:** Optimal diakses dari berbagai ukuran layar, terutama perangkat mobile tempat di mana sebagian besar pelanggan melakukan pencarian lokal.
5. **Interactive Map dengan Vibe Monokrom:** Integrasi Google Maps yang disesuaikan dengan filter CSS grayscale agar senada dengan visual aesthetics website.
6. **Optimasi Gambar (`next/image`):** Menggunakan native image optimization untuk performa loading maksimal tanpa layout shift.

## 🛠️ Cara Menjalankan Lokal

1. Clone repositori ini:
   ```bash
   git clone https://github.com/kaz-hero123/barbershop-hilman.git
   cd barbershop-hilman
   ```

2. Instal dependensi:
   ```bash
   npm install
   ```

3. Jalankan server development:
   ```bash
   npm run dev
   ```

4. Buka [http://localhost:3000](http://localhost:3000) di browser Anda.

## ⚙️ Penyesuaian Produksi
Untuk menggunakan template ini secara nyata, silakan sesuaikan file berikut:
- **Nomor WhatsApp:** Edit nomor tujuan pada `src/utils/whatsapp.ts` (menggunakan format kode negara tanpa awalan `+` atau `0`, contoh: `6281234567890`).
- **Alamat & Jam Operasional:** Edit teks informasi di file `src/components/Footer.tsx`.
- **Foto Portofolio/Barber:** Ganti tautan gambar di `src/components/Barbers.tsx` dan `src/components/Gallery.tsx` dengan aset gambar asli Anda.

## 🌐 Live Demo & Deployment
- **Link Live Demo:** [CREWCUT Studio on Vercel](https://barbershop-hilman.vercel.app)
- **Repository:** [GitHub Repository](https://github.com/kaz-hero123/barbershop-hilman)
