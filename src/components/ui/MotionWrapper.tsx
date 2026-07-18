"use client";

import { motion, HTMLMotionProps } from "framer-motion";
import { ReactNode } from "react";
import { cn } from "@/utils/cn";

interface MotionWrapperProps extends HTMLMotionProps<"div"> {
  children: ReactNode;
  animation?: "fadeIn" | "slideUp" | "stagger" | "scale" | "reveal";
  delay?: number;
}

export function MotionWrapper({ children, animation = "fadeIn", delay = 0, className, ...props }: MotionWrapperProps) {
  const animations: Record<string, any> = {
    fadeIn: {
      initial: { opacity: 0 },
      whileInView: { opacity: 1 },
      viewport: { once: true, margin: "-50px" },
      transition: { duration: 0.8, delay },
    },
    slideUp: {
      initial: { opacity: 0, y: 40 },
      whileInView: { opacity: 1, y: 0 },
      viewport: { once: true, margin: "-50px" },
      transition: { duration: 0.8, delay, ease: [0.22, 1, 0.36, 1] }, // Editorial ease out
    },
    scale: {
      initial: { opacity: 0, scale: 0.97 },
      whileInView: { opacity: 1, scale: 1 },
      viewport: { once: true, margin: "-50px" },
      transition: { duration: 0.8, delay, ease: [0.22, 1, 0.36, 1] },
    },
    reveal: {
      initial: { opacity: 0, clipPath: "inset(10% 0 0 0)" },
      whileInView: { opacity: 1, clipPath: "inset(0 0 0 0)" },
      viewport: { once: true, margin: "-50px" },
      transition: { duration: 1, delay, ease: [0.22, 1, 0.36, 1] },
    },
    stagger: {
      initial: { opacity: 0, y: 20 },
      whileInView: { opacity: 1, y: 0 },
      viewport: { once: true, margin: "-50px" },
      transition: { duration: 0.5, delay, ease: "easeOut" },
    }
  };

  return (
    <motion.div className={cn(className)} {...animations[animation]} {...props}>
      {children}
    </motion.div>
  );
}
