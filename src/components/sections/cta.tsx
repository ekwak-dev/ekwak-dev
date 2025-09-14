"use client";

import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";
import { motion } from "framer-motion";
import {
  fadeInUp,
  scaleIn,
  staggerContainer,
  viewportOptions,
} from "@/lib/motion";

export function CTASection() {
  return (
    <section className="relative overflow-hidden py-20 sm:py-32" aria-label="대화 요청 섹션">
      {/* Background decoration */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-accent/5 via-transparent to-accent/5" />

      <div className="container">
        <motion.div
          className="relative mx-auto max-w-3xl rounded-2xl border border-border bg-background/50 p-8 text-center backdrop-blur-sm sm:p-12"
          initial="initial"
          whileInView="animate"
          viewport={viewportOptions}
          variants={staggerContainer}
        >
          {/* Sparkle icon */}
          <motion.div
            className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-full bg-accent/10"
            variants={scaleIn}
            whileHover={{ rotate: 360 }}
            transition={{ duration: 0.5 }}
          >
            <Sparkles className="h-6 w-6 text-accent" />
          </motion.div>

          {/* Heading */}
          <motion.h2
            className="mb-4 text-3xl font-bold tracking-tight text-foreground sm:text-4xl"
            variants={fadeInUp}
          >
            함께 멋진 프로젝트를 만들어요
          </motion.h2>

          {/* Description */}
          <motion.p
            className="mb-8 text-lg text-foreground-secondary"
            variants={fadeInUp}
          >
            새로운 프로젝트를 시작하시거나 기존 프로젝트에 도움이 필요하신가요?
            <br />
            언제든 연락주세요. 함께 해결책을 찾아드리겠습니다.
          </motion.p>

          {/* CTA buttons */}
          <motion.div
            className="flex flex-col gap-4 sm:flex-row sm:justify-center"
            variants={fadeInUp}
          >
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link
                href="/contact"
                className="group inline-flex items-center justify-center gap-2 rounded-md bg-accent px-8 py-3 text-sm font-medium text-accent-foreground transition-all hover:bg-accent-hover hover:gap-3 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background"
              >
                프로젝트 문의하기
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <a
                href="mailto:contact@ekwak.dev"
                className="inline-flex items-center justify-center rounded-md border border-border bg-background px-8 py-3 text-sm font-medium text-foreground transition-colors hover:bg-background-secondary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background"
              >
                이메일 보내기
              </a>
            </motion.div>
          </motion.div>

          {/* Trust indicators */}
          <motion.div
            className="mt-12 flex flex-col items-center justify-center gap-6 border-t border-border pt-8 sm:flex-row"
            variants={staggerContainer}
          >
            {[
              "평균 응답 시간: 24시간 이내",
              "무료 상담 제공",
              "NDA 체결 가능",
            ].map((text, index) => (
              <motion.div
                key={index}
                className="flex items-center gap-2"
                variants={fadeInUp}
                custom={index}
              >
                <motion.div
                  className="h-2 w-2 rounded-full bg-success"
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    delay: index * 0.2,
                  }}
                />
                <span className="text-sm text-foreground-secondary">
                  {text}
                </span>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

