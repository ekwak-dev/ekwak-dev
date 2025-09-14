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

const projectTiles = [
  { id: "crty", title: "Crty", subtitle: "Mobile App", color: "bg-purple-500" },
  { id: "tensto", title: "Tensto", subtitle: "Web Design", color: "bg-lime-400" },
  { id: "senta", title: "Senta", subtitle: "Mobile App & Branding", color: "bg-sky-500" },
  { id: "crnt", title: "Crnt", subtitle: "Mobile App", color: "bg-orange-400" },
];

export function FeaturedProjectsSection() {
  return (
    <section id="projects" className="py-20 sm:py-32" aria-label="주요 프로젝트 섹션">
      <div className="container">
        <div className="mx-auto max-w-6xl">
          {/* Section header */}
          <motion.div
            className="mb-6 flex items-end justify-between"
            initial="initial"
            whileInView="animate"
            viewport={viewportOptions}
            variants={staggerContainer}
          >
            <div>
              <motion.h2
                className="text-2xl font-semibold tracking-tight text-foreground sm:text-3xl"
                variants={fadeInUp}
              >
                Projects
              </motion.h2>
              <motion.p
                className="mt-2 text-sm text-foreground-tertiary"
                variants={fadeInUp}
              >
                A showcase of contemporary, user-friendly web design and digital solutions.
              </motion.p>
            </div>
            <motion.div variants={fadeInUp}>
              <Link href="/projects" className="text-sm text-foreground-tertiary hover:text-foreground transition-colors">
                More →
              </Link>
            </motion.div>
          </motion.div>

          {/* Projects tiles (2x2) */}
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            {projectTiles.map((tile, idx) => (
              <motion.div
                key={tile.id}
                className="group"
                initial="initial"
                whileInView="animate"
                viewport={viewportOptions}
                variants={staggerContainer}
              >
                <motion.div
                  className={`aspect-[4/3] w-full overflow-hidden rounded-xl ${tile.color}`}
                  variants={idx % 2 === 0 ? slideInFromLeft : slideInFromRight}
                  whileHover={{ scale: 1.01 }}
                  transition={{ duration: 0.25 }}
                  aria-hidden
                />
                <div className="mt-2">
                  <h3 className="text-sm font-semibold text-foreground">{tile.title}</h3>
                  <p className="text-xs text-foreground-tertiary">{tile.subtitle}</p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* View all projects link */}
          <motion.div
            className="mt-8 text-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={viewportOptions}
            transition={{ delay: 0.2 }}
          >
            <Link href="/projects" className="inline-flex items-center gap-2 text-sm font-medium text-accent hover:underline">
              View all projects
              <ArrowUpRight className="h-4 w-4" />
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

