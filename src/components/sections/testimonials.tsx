"use client";

import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";
import {
  fadeInUp,
  staggerContainer,
  viewportOptions,
  scaleIn,
} from "@/lib/motion";

const testimonials = [
  {
    id: 1,
    name: "김민수",
    role: "CTO",
    company: "테크스타트업",
    content: "Ekwak님과 함께 작업한 프로젝트는 기대를 훨씬 뛰어넘는 결과물이었습니다. 기술적 전문성뿐만 아니라 비즈니스 관점에서의 통찰력도 뛰어났습니다.",
    rating: 5,
    avatar: "/api/placeholder/80/80",
    featured: true,
  },
  {
    id: 2,
    name: "박지영",
    role: "Product Manager",
    company: "글로벌 IT 기업",
    content: "복잡한 요구사항을 명확히 이해하고, 사용자 경험을 최우선으로 고려한 솔루션을 제안해주셨습니다. 커뮤니케이션도 매우 원활했습니다.",
    rating: 5,
    avatar: "/api/placeholder/80/80",
    featured: true,
  },
  {
    id: 3,
    name: "이성호",
    role: "CEO",
    company: "이커머스 플랫폼",
    content: "단순히 개발만 하는 것이 아니라, 비즈니스 성장을 위한 전략적 조언까지 받을 수 있어서 매우 만족스러웠습니다. 적극 추천합니다.",
    rating: 5,
    avatar: "/api/placeholder/80/80",
    featured: true,
  },
];

const TestimonialCard = ({ 
  testimonial, 
  index 
}: { 
  testimonial: typeof testimonials[0]; 
  index: number; 
}) => {
  return (
    <motion.div
      className="group relative overflow-hidden rounded-2xl border border-border bg-background p-8 transition-all hover:border-border-hover hover:shadow-lg"
      variants={scaleIn}
      custom={index}
      whileHover={{ y: -5 }}
      transition={{ duration: 0.3 }}
    >
      {/* Quote decoration */}
      <motion.div
        className="absolute -right-4 -top-4 h-16 w-16 text-accent/10"
        initial={{ rotate: 0 }}
        whileHover={{ rotate: 15, scale: 1.1 }}
        transition={{ duration: 0.3 }}
      >
        <Quote className="h-full w-full" />
      </motion.div>

      {/* Rating */}
      <motion.div 
        className="mb-4 flex gap-1"
        variants={staggerContainer}
        initial="initial"
        whileInView="animate"
        viewport={viewportOptions}
      >
        {Array.from({ length: testimonial.rating }).map((_, starIndex) => (
          <motion.div
            key={starIndex}
            variants={fadeInUp}
            custom={starIndex}
            whileHover={{ scale: 1.2, rotate: 15 }}
          >
            <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
          </motion.div>
        ))}
      </motion.div>

      {/* Content */}
      <blockquote className="mb-6 text-foreground-secondary leading-relaxed">
        &ldquo;{testimonial.content}&rdquo;
      </blockquote>

      {/* Author */}
      <div className="flex items-center gap-4">
        {/* Avatar */}
        <motion.div
          className="relative h-12 w-12 overflow-hidden rounded-full bg-background-secondary"
          whileHover={{ scale: 1.05 }}
        >
          <div className="flex h-full w-full items-center justify-center text-foreground-tertiary">
            <span className="text-sm font-medium">
              {testimonial.name.charAt(0)}
            </span>
          </div>
          {/* Hover effect */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-br from-accent/20 to-accent/5"
            initial={{ opacity: 0 }}
            whileHover={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
          />
        </motion.div>

        {/* Author info */}
        <div>
          <div className="font-semibold text-foreground">
            {testimonial.name}
          </div>
          <div className="text-sm text-foreground-secondary">
            {testimonial.role} · {testimonial.company}
          </div>
        </div>
      </div>

      {/* Background gradient on hover */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        initial={false}
      />
    </motion.div>
  );
};

export function TestimonialsSection() {
  return (
    <section className="py-20 sm:py-32" aria-label="고객 후기 섹션">
      <div className="container">
        <div className="mx-auto max-w-6xl">
          {/* Section header */}
          <motion.div
            className="mb-16 text-center"
            initial="initial"
            whileInView="animate"
            viewport={viewportOptions}
            variants={staggerContainer}
          >
            <motion.h2
              className="mb-4 text-3xl font-bold tracking-tight text-foreground sm:text-4xl"
              variants={fadeInUp}
            >
              고객 후기
            </motion.h2>
            <motion.p
              className="mx-auto max-w-2xl text-lg text-foreground-secondary"
              variants={fadeInUp}
            >
              함께 작업한 고객들의 소중한 피드백을 소개합니다
            </motion.p>
          </motion.div>

          {/* Testimonials grid */}
          <motion.div
            className="grid gap-8 md:grid-cols-2 lg:grid-cols-3"
            initial="initial"
            whileInView="animate"
            viewport={viewportOptions}
            variants={staggerContainer}
          >
            {testimonials.map((testimonial, index) => (
              <TestimonialCard
                key={testimonial.id}
                testimonial={testimonial}
                index={index}
              />
            ))}
          </motion.div>

          {/* Stats section */}
          <motion.div
            className="mt-16 grid grid-cols-2 gap-8 border-t border-border pt-16 md:grid-cols-4"
            initial="initial"
            whileInView="animate"
            viewport={viewportOptions}
            variants={staggerContainer}
          >
            {[
              { value: "50+", label: "만족한 고객" },
              { value: "98%", label: "프로젝트 성공률" },
              { value: "4.9/5", label: "평균 평점" },
              { value: "100%", label: "재의뢰율" },
            ].map((stat, index) => (
              <motion.div
                key={index}
                className="text-center"
                variants={fadeInUp}
                custom={index}
                whileHover={{ y: -5 }}
              >
                <motion.div
                  className="mb-2 text-3xl font-bold text-accent"
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={viewportOptions}
                  transition={{ delay: 0.2 + index * 0.1, duration: 0.5 }}
                >
                  {stat.value}
                </motion.div>
                <div className="text-sm text-foreground-secondary">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* CTA */}
          <motion.div
            className="mt-16 text-center"
            initial="initial"
            whileInView="animate"
            viewport={viewportOptions}
            variants={fadeInUp}
          >
            <motion.p
              className="mb-6 text-lg text-foreground-secondary"
              variants={fadeInUp}
            >
              다음 성공 사례의 주인공이 되어보세요
            </motion.p>
            <motion.a
              href="/contact"
              className="inline-flex items-center gap-2 rounded-md bg-accent px-8 py-3 font-medium text-accent-foreground transition-all hover:bg-accent-hover focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              프로젝트 상담받기
            </motion.a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}