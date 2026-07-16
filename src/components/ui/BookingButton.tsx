"use client";

import React from "react";
import { getWhatsAppLink } from "@/utils/whatsapp";
import { cn } from "@/utils/cn";

interface BookingButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  message: string;
  variant?: "primary" | "secondary" | "outline";
  children: React.ReactNode;
}

export function BookingButton({ message, variant = "primary", className, children, ...props }: BookingButtonProps) {
  const handleBooking = () => {
    window.open(getWhatsAppLink(message), "_blank");
  };

  const baseStyles = "inline-flex items-center justify-center rounded-lg font-bold transition-all duration-300 cursor-pointer transform hover:-translate-y-0.5";
  
  const variants = {
    primary: "bg-gold px-8 py-4 text-base text-black hover:bg-gold-light shadow-[0_4px_20px_rgba(200,169,97,0.25)] hover:shadow-[0_4px_30px_rgba(200,169,97,0.4)]",
    secondary: "bg-bg-main border border-border-main px-4 py-2.5 text-sm text-text-primary hover:border-gold hover:bg-gold hover:text-black tracking-wide",
    outline: "border border-gold/50 bg-transparent px-5 py-2 text-sm text-gold hover:bg-gold hover:text-black tracking-wide"
  };

  return (
    <button
      onClick={handleBooking}
      className={cn(baseStyles, variants[variant], className)}
      {...props}
    >
      {children}
    </button>
  );
}
