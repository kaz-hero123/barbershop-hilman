"use client";

import { useEffect } from "react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Optionally log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-warm-cream text-charcoal px-6 text-center">
      <h2 className="text-3xl md:text-5xl font-display font-bold mb-4">
        Ada yang tidak beres.
      </h2>
      <p className="text-muted-text mb-8">
        Maaf, kami mengalami kendala teknis saat memuat halaman ini.
      </p>
      <button
        onClick={() => reset()}
        className="px-6 py-3 bg-charcoal text-warm-cream rounded-full hover:bg-charcoal/90 transition-colors"
      >
        Coba Lagi
      </button>
    </div>
  );
}
