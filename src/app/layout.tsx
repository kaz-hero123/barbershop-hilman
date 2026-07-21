import type { Metadata } from "next";
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

export const metadata: Metadata = {
  title: "CREWCUT Studio | Momen Grooming Premium di Senopati",
  description: "Lebih dari sekadar potong rambut. CREWCUT Studio menawarkan ritual grooming dengan presisi tinggi di Senopati, Jakarta Selatan.",
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
