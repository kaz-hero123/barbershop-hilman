"use client";

import React from "react";
import { getWhatsAppLink } from "@/utils/whatsapp";
import { cn } from "@/utils/cn";

interface ButtonProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  message: string;
  variant?: "primary" | "secondary" | "outline" | "ghost";
  children: React.ReactNode;
}

export function Button({ message, variant = "primary", className, children, ...props }: ButtonProps) {
  const baseStyles = "inline-flex items-center justify-center font-sans transition-all duration-300 cursor-pointer";
  
  const variants = {
    primary: "bg-brand-terracotta text-white px-8 py-4 text-base hover:bg-brand-terracotta/90 shadow-md hover:shadow-lg rounded-none",
    secondary: "bg-brand-espresso text-brand-cream px-6 py-3 text-sm hover:bg-brand-espresso/90 rounded-none",
    outline: "border border-brand-espresso text-brand-espresso px-6 py-3 text-sm hover:bg-brand-espresso hover:text-brand-cream rounded-none",
    ghost: "text-brand-espresso hover:text-brand-terracotta px-4 py-2 text-sm underline underline-offset-4 decoration-1 decoration-transparent hover:decoration-brand-terracotta"
  };

  return (
    <a
      href={getWhatsAppLink(message)}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`Pesan melalui WhatsApp: ${message}`}
      className={cn(baseStyles, variants[variant], className)}
      {...props}
    >
      {children}
    </a>
  );
}
