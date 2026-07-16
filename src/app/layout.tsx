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
  description: "Grooming premium untuk profesional aktif. Tanpa antre lama, selesai dalam 30 menit dengan presisi maksimal.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="id"
      className={`${oswald.variable} ${inter.variable} h-full antialiased`}
    >
      <body className="min-h-full bg-bg-main text-text-primary antialiased selection:bg-gold selection:text-black">
        {children}
      </body>
    </html>
  );
}

