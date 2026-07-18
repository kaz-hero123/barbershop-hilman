import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "CREWCUT Studio | Sebuah Jeda yang Mengubah",
  description: "Bukan sekadar potong rambut. Rasakan pengalaman grooming premium di Jakarta Selatan. Duduk, rileks, dan serahkan pada ahlinya.",
  keywords: ["barbershop premium", "potong rambut jakarta selatan", "grooming pria", "crewcut studio"],
  openGraph: {
    title: "CREWCUT Studio | Jeda yang Mengubah",
    description: "Bukan sekadar potong rambut. Rasakan pengalaman grooming premium di Jakarta Selatan.",
    url: "https://barbershop-hilman.vercel.app",
    siteName: "CREWCUT Studio",
    locale: "id_ID",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "CREWCUT Studio | Sebuah Jeda yang Mengubah",
    description: "Grooming premium di Jakarta Selatan.",
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
      className={`${playfair.variable} ${inter.variable} h-full antialiased scroll-smooth`}
    >
      <body className="min-h-full bg-brand-cream text-brand-espresso antialiased selection:bg-brand-terracotta/30 selection:text-brand-espresso">
        {children}
      </body>
    </html>
  );
}
