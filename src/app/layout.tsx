import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
});

import type { Metadata, Viewport } from "next";

export const viewport: Viewport = {
  themeColor: "#FAF7F2", // warm-cream
};

export const metadata: Metadata = {
  title: "CREWCUT Studio | Momen Grooming Premium di Senopati",
  description: "Lebih dari sekadar potong rambut. CREWCUT Studio menawarkan ritual grooming dengan presisi tinggi di Senopati, Jakarta Selatan.",
  openGraph: {
    title: "CREWCUT Studio | Momen Grooming Premium",
    description: "Ritual grooming presisi di Senopati.",
    url: "https://crewcut-studio.id",
    siteName: "CREWCUT Studio",
    locale: "id_ID",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "CREWCUT Studio | Momen Grooming Premium",
    description: "Ritual grooming presisi di Senopati.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id">
      <body
        className={`${inter.variable} ${playfair.variable} antialiased bg-warm-cream text-charcoal`}
      >
        {children}
      </body>
    </html>
  );
}
