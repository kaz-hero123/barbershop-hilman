import type { Metadata } from "next";
import { Oswald, Inter } from "next/font/google";
import "./globals.css";

const oswald = Oswald({
  variable: "--font-oswald",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "CREWCUT Studio - Presisi. Cepat. Tajam.",
  description: "Grooming premium untuk profesional aktif. Tanpa antre lama, selesai dalam 30 menit dengan presisi maksimal oleh barber bersertifikasi.",
  keywords: ["barbershop", "potong rambut", "crewcut", "barbershop jakarta", "potong rambut pria premium", "grooming", "barbershop tanpa antre"],
  openGraph: {
    title: "CREWCUT Studio | Barbershop Premium",
    description: "Grooming premium untuk profesional aktif. Tanpa antre lama, selesai dalam 30 menit dengan presisi maksimal.",
    url: "https://crewcutstudio.com",
    siteName: "CREWCUT Studio",
    locale: "id_ID",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "CREWCUT Studio - Presisi. Cepat. Tajam.",
    description: "Grooming premium untuk profesional aktif.",
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="id"
      className={`${oswald.variable} ${inter.variable} h-full antialiased scroll-smooth`}
    >
      <body className="min-h-full bg-bg-main text-text-primary antialiased selection:bg-gold selection:text-black">
        {children}
      </body>
    </html>
  );
}
