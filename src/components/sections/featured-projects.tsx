"use client";

import Link from "next/link";
import { ArrowUpRight, Github } from "lucide-react";
import { motion } from "framer-motion";
import {
  fadeInUp,
  slideInFromLeft,
  slideInFromRight,
  staggerContainer,
  viewportOptions,
} from "@/lib/motion";

const featuredProjects = [
  {
    id: 1,
    title: "E-Commerce Platform",
    description:
      "대규모 트래픽을 처리하는 이커머스 플랫폼으로, 실시간 재고 관리와 결제 시스템을 구현했습니다.",
    image: "/api/placeholder/800/600",
    tech: ["Next.js", "TypeScript", "PostgreSQL", "Redis"],
    github: "https://github.com",
    demo: "https://example.com",
    featured: true,
  },
  {
    id: 2,
    title: "Real-time Collaboration Tool",
    description:
      "WebSocket을 활용한 실시간 협업 도구로, 동시 편집과 화상 회의 기능을 제공합니다.",
    image: "/api/placeholder/800/600",
    tech: ["React", "Node.js", "Socket.io", "WebRTC"],
    github: "https://github.com",
    demo: "https://example.com",
    featured: true,
  },
  {
    id: 3,
    title: "AI-Powered Analytics",
    description:
      "머신러닝을 활용한 비즈니스 인텔리전스 대시보드로, 예측 분석 기능을 제공합니다.",
    image: "/api/placeholder/800/600",
    tech: ["Python", "TensorFlow", "React", "D3.js"],
    github: "https://github.com",
    demo: "https://example.com",
    featured: true,
  },
];

export function FeaturedProjectsSection() {
  return (
    <section className="py-20 sm:py-32">
      <div className="container">
        <div className="mx-auto max-w-6xl">
          {/* Section header */}
          <motion.div
            className="mb-12 text-center"
            initial="initial"
            whileInView="animate"
            viewport={viewportOptions}
            variants={staggerContainer}
          >
            <motion.h2
              className="mb-4 text-3xl font-bold tracking-tight text-foreground sm:text-4xl"
              variants={fadeInUp}
            >
              주요 프로젝트
            </motion.h2>
            <motion.p
              className="text-lg text-foreground-secondary"
              variants={fadeInUp}
            >
              최근에 작업한 프로젝트들을 소개합니다
            </motion.p>
          </motion.div>

          {/* Projects grid */}
          <div className="grid gap-8 lg:gap-12">
            {featuredProjects.map((project, index) => (
              <motion.article
                key={project.id}
                className={`group grid gap-8 ${
                  index % 2 === 0 ? "lg:grid-cols-2" : "lg:grid-cols-2"
                }`}
                initial="initial"
                whileInView="animate"
                viewport={viewportOptions}
                variants={staggerContainer}
              >
                {/* Project image */}
                <motion.div
                  className={`relative aspect-video overflow-hidden rounded-lg bg-background-secondary ${
                    index % 2 === 1 ? "lg:order-2" : ""
                  }`}
                  variants={
                    index % 2 === 0 ? slideInFromLeft : slideInFromRight
                  }
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-accent/20 to-accent/5" />
                  <div className="flex h-full items-center justify-center text-foreground-tertiary">
                    <span className="text-sm">Project Preview</span>
                  </div>

                  {/* Hover overlay */}
                  <motion.div
                    className="absolute inset-0 flex items-center justify-center bg-background/90"
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="flex gap-4">
                      <motion.a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-accent text-accent-foreground"
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        whileTap={{ scale: 0.95 }}
                        aria-label="라이브 데모 보기"
                      >
                        <ArrowUpRight className="h-5 w-5" />
                      </motion.a>
                      <motion.a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-background border border-border text-foreground"
                        whileHover={{ scale: 1.1, rotate: -5 }}
                        whileTap={{ scale: 0.95 }}
                        aria-label="GitHub 저장소 보기"
                      >
                        <Github className="h-5 w-5" />
                      </motion.a>
                    </div>
                  </motion.div>
                </motion.div>

                {/* Project content */}
                <motion.div
                  className={`flex flex-col justify-center ${
                    index % 2 === 1 ? "lg:order-1" : ""
                  }`}
                  variants={
                    index % 2 === 0 ? slideInFromRight : slideInFromLeft
                  }
                >
                  <div className="space-y-4">
                    <h3 className="text-2xl font-bold text-foreground group-hover:text-accent transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-foreground-secondary">
                      {project.description}
                    </p>

                    {/* Tech stack */}
                    <motion.div
                      className="flex flex-wrap gap-2"
                      variants={staggerContainer}
                      initial="initial"
                      whileInView="animate"
                      viewport={viewportOptions}
                    >
                      {project.tech.map((tech, techIndex) => (
                        <motion.span
                          key={tech}
                          className="rounded-full border border-border bg-background px-3 py-1 text-xs font-medium text-foreground-secondary"
                          variants={fadeInUp}
                          custom={techIndex}
                          whileHover={{ scale: 1.05, y: -2 }}
                        >
                          {tech}
                        </motion.span>
                      ))}
                    </motion.div>

                    {/* Links */}
                    <div className="flex gap-4 pt-4">
                      <motion.a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-sm font-medium text-accent hover:underline"
                        whileHover={{ x: 5 }}
                      >
                        라이브 데모
                        <ArrowUpRight className="h-4 w-4" />
                      </motion.a>
                      <motion.a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-sm font-medium text-foreground-secondary hover:text-accent transition-colors"
                        whileHover={{ x: 5 }}
                      >
                        <Github className="h-4 w-4" />
                        소스 코드
                      </motion.a>
                    </div>
                  </div>
                </motion.div>
              </motion.article>
            ))}
          </div>

          {/* View all projects link */}
          <motion.div
            className="mt-12 text-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={viewportOptions}
            transition={{ delay: 0.3 }}
          >
            <Link
              href="/projects"
              className="inline-flex items-center gap-2 text-sm font-medium text-accent hover:underline"
            >
              모든 프로젝트 보기
              <ArrowUpRight className="h-4 w-4" />
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
