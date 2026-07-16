"use client";

import { motion, HTMLMotionProps } from "framer-motion";
import { ReactNode } from "react";

interface MotionWrapperProps extends HTMLMotionProps<"div"> {
  children: ReactNode;
  animation?: "fadeIn" | "slideUp" | "stagger" | "scale";
  delay?: number;
}

export function MotionWrapper({ children, animation = "fadeIn", delay = 0, className, ...props }: MotionWrapperProps) {
  const animations = {
    fadeIn: {
      initial: { opacity: 0 },
      whileInView: { opacity: 1 },
      viewport: { once: true, margin: "-50px" },
      transition: { duration: 0.6, delay },
    },
    slideUp: {
      initial: { opacity: 0, y: 30 },
      whileInView: { opacity: 1, y: 0 },
      viewport: { once: true, margin: "-50px" },
      transition: { duration: 0.6, delay, ease: "easeOut" },
    },
    scale: {
      initial: { opacity: 0, scale: 0.95 },
      whileInView: { opacity: 1, scale: 1 },
      viewport: { once: true, margin: "-50px" },
      transition: { duration: 0.6, delay, ease: "easeOut" },
    },
    stagger: {
      initial: { opacity: 0, y: 20 },
      whileInView: { opacity: 1, y: 0 },
      viewport: { once: true, margin: "-50px" },
      transition: { duration: 0.5, delay, ease: "easeOut" },
    }
  };

  return (
    <motion.div className={className} {...animations[animation]} {...props}>
      {children}
    </motion.div>
  );
}
