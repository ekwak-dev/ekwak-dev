"use client";

import Link from "next/link";
import { ArrowRight, Download } from "lucide-react";
import { motion } from "framer-motion";
import { fadeInUp, staggerContainer, textReveal, scaleIn } from "@/lib/motion";

export function HeroSection() {
  return (
    <motion.section
      className="relative overflow-hidden py-20 sm:py-32"
      initial="initial"
      animate="animate"
      variants={staggerContainer}
      aria-label="소개 섹션"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 -z-10">
        <motion.div
          className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2 h-[600px] w-[600px] rounded-full bg-accent/20 blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute right-0 bottom-0 translate-x-1/2 translate-y-1/2 h-[400px] w-[400px] rounded-full bg-accent/10 blur-3xl"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          }}
        />
      </div>

      <div className="container">
        <div className="mx-auto max-w-3xl text-left">
          {/* Badge */}
          <motion.div
            className="mb-8 inline-flex items-center rounded-full border border-border bg-background/50 px-4 py-1.5 text-sm backdrop-blur-sm"
            variants={scaleIn}
          >
            <span className="mr-2 h-2 w-2 rounded-full bg-success animate-pulse" />
            <span className="text-foreground-secondary">
              현재 프로젝트 진행 가능
            </span>
          </motion.div>

          {/* Main heading */}
          <motion.h1
            className="mb-4 text-5xl font-bold leading-[1.1] tracking-tight text-foreground sm:text-6xl lg:text-7xl"
            variants={textReveal}
          >
            Websites&
            <br />
            Branding
          </motion.h1>

          {/* Description */}
          <motion.p
            className="mb-8 max-w-prose text-base text-foreground-tertiary sm:text-lg"
            variants={fadeInUp}
          >
            As a passionate product designer specializing in branding, marketing,
            and end-to-end tools, I help elevate the essence of your brand.
          </motion.p>

          {/* CTA buttons */}
          <motion.div
            className="flex flex-col gap-3 sm:flex-row"
            variants={fadeInUp}
          >
            <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}>
              <Link
                href="#projects"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-foreground px-5 py-2.5 text-sm font-medium text-background transition-colors hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background"
              >
                Scroll Down
                <ArrowRight className="h-4 w-4" />
              </Link>
            </motion.div>
          </motion.div>

          {/* Stats */}
          <motion.div
            className="mt-16 grid grid-cols-3 gap-8 border-t border-border pt-8"
            variants={staggerContainer}
          >
            {[
              { value: "5+", label: "년 경력" },
              { value: "50+", label: "완료 프로젝트" },
              { value: "98%", label: "고객 만족도" },
            ].map((stat, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                whileHover={{ y: -5 }}
              >
                <motion.div
                  className="text-3xl font-bold text-accent"
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.5 + index * 0.1, duration: 0.5 }}
                >
                  {stat.value}
                </motion.div>
                <div className="mt-1 text-sm text-foreground-secondary">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}

