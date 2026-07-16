"use client";

import React from "react";

interface TestimonialItem {
  id: number;
  text: string;
  author: string;
  role: string;
  rating: number;
}

export default function Testimonials() {
  const reviews: TestimonialItem[] = [
    {
      id: 1,
      text: "Biasanya malas ke barbershop karena antre berjam-jam. Di CREWCUT booking-nya sangat mudah lewat WA, pas datang langsung ditangani. Presisi skin fade-nya luar biasa rapi!",
      author: "Budi Santoso",
      role: "Klien Tetap / Executive",
      rating: 5,
    },
    {
      id: 2,
      text: "Rian benar-benar teliti sewaktu merapikan jenggot saya. Beard sculpting-nya pas sekali dengan garis rahang dan bentuk wajah. Proses kerjanya cepat tapi detailnya tetap terjaga.",
      author: "Adrian Wijaya",
      role: "Klien Tetap / Creative Director",
      rating: 5,
    },
    {
      id: 3,
      text: "Atmosfer tempatnya sangat clean dan minimalis urban. Layanan Classic Cut dari Dian sangat memuaskan, potongannya rapi dan awet tumbuhnya. Rekomendasi utama untuk yang sibuk.",
      author: "Yusuf Pratama",
      role: "Klien Tetap / Software Engineer",
      rating: 5,
    },
  ];

  return (
    <section className="py-24 bg-bg-surface/30 border-t border-b border-border-main">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="font-display text-sm font-bold uppercase tracking-widest text-gold">
            Testimonial Klien
          </h2>
          <p className="mt-3 font-display text-3xl sm:text-5xl font-bold uppercase tracking-tight text-text-primary">
            APA KATA MEREKA
          </p>
          <div className="mt-4 h-1 w-12 bg-gold mx-auto" />
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((review) => (
            <div
              key={review.id}
              className="flex flex-col justify-between rounded-xl border border-border-main bg-bg-surface p-8 shadow-md relative"
            >
              {/* Quote Decorative Icon */}
              <div className="absolute top-6 right-8 text-gold/10">
                <svg className="h-10 w-10 fill-current" viewBox="0 0 24 24">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
              </div>

              <div>
                {/* Rating Stars */}
                <div className="flex items-center gap-1 mb-6">
                  {[...Array(review.rating)].map((_, i) => (
                    <svg
                      key={i}
                      className="h-4.5 w-4.5 text-gold fill-current"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>

                {/* Review Text */}
                <p className="text-sm sm:text-base text-text-secondary italic leading-relaxed font-light">
                  &ldquo;{review.text}&rdquo;
                </p>
              </div>

              {/* Author Info */}
              <div className="mt-8 border-t border-border-main pt-6">
                <h4 className="font-display text-base font-bold text-text-primary uppercase tracking-wide">
                  {review.author}
                </h4>
                <p className="text-xs text-gold uppercase tracking-wider mt-1">
                  {review.role}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
