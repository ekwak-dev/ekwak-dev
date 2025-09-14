"use client";

import { motion } from "framer-motion";
import {
  Code2,
  Smartphone,
  Database,
  Zap,
  Globe,
  Shield,
  Palette,
  Users,
} from "lucide-react";
import {
  fadeInUp,
  staggerContainer,
  viewportOptions,
  scaleIn,
} from "@/lib/motion";

const expertiseAreas = [
  {
    id: 1,
    title: "Frontend Development",
    description: "React, Next.js, TypeScript를 활용한 모던 웹 애플리케이션 개발",
    icon: Code2,
    technologies: ["React", "Next.js", "TypeScript", "Tailwind CSS"],
    color: "from-blue-500/20 to-cyan-500/20",
    iconColor: "text-blue-500",
  },
  {
    id: 2,
    title: "Mobile Development",
    description: "React Native와 Flutter를 이용한 크로스 플랫폼 모바일 앱 개발",
    icon: Smartphone,
    technologies: ["React Native", "Flutter", "iOS", "Android"],
    color: "from-green-500/20 to-emerald-500/20",
    iconColor: "text-green-500",
  },
  {
    id: 3,
    title: "Backend & Database",
    description: "Node.js, Python을 활용한 확장 가능한 서버 아키텍처 설계",
    icon: Database,
    technologies: ["Node.js", "Python", "PostgreSQL", "MongoDB"],
    color: "from-purple-500/20 to-pink-500/20",
    iconColor: "text-purple-500",
  },
  {
    id: 4,
    title: "Performance Optimization",
    description: "웹 성능 최적화와 사용자 경험 개선을 위한 전문적인 접근",
    icon: Zap,
    technologies: ["Lighthouse", "Web Vitals", "CDN", "Caching"],
    color: "from-orange-500/20 to-yellow-500/20",
    iconColor: "text-orange-500",
  },
];

export function ExpertiseSection() {
  return (
    <section className="py-20 sm:py-32" aria-label="전문 분야 섹션">
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
              전문 분야
            </motion.h2>
            <motion.p
              className="mx-auto max-w-2xl text-lg text-foreground-secondary"
              variants={fadeInUp}
            >
              다양한 기술 스택과 플랫폼에서의 경험을 바탕으로
              <br />
              최적의 솔루션을 제공합니다
            </motion.p>
          </motion.div>

          {/* Expertise grid */}
          <motion.div
            className="grid gap-6 sm:grid-cols-2 lg:gap-8"
            initial="initial"
            whileInView="animate"
            viewport={viewportOptions}
            variants={staggerContainer}
          >
            {expertiseAreas.map((area, index) => {
              const IconComponent = area.icon;
              return (
                <motion.div
                  key={area.id}
                  className="group relative overflow-hidden rounded-2xl border border-border bg-background p-8 transition-all hover:border-border-hover"
                  variants={scaleIn}
                  custom={index}
                  whileHover={{ y: -5 }}
                  transition={{ duration: 0.3 }}
                >
                  {/* Background gradient */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${area.color} opacity-0 transition-opacity duration-300 group-hover:opacity-100`}
                  />

                  {/* Content */}
                  <div className="relative">
                    {/* Icon */}
                    <motion.div
                      className={`mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl border border-border bg-background-secondary ${area.iconColor}`}
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      transition={{ duration: 0.2 }}
                    >
                      <IconComponent className="h-6 w-6" />
                    </motion.div>

                    {/* Title and description */}
                    <h3 className="mb-3 text-xl font-semibold text-foreground group-hover:text-accent transition-colors">
                      {area.title}
                    </h3>
                    <p className="mb-6 text-foreground-secondary leading-relaxed">
                      {area.description}
                    </p>

                    {/* Technologies */}
                    <div className="flex flex-wrap gap-2">
                      {area.technologies.map((tech, techIndex) => (
                        <motion.span
                          key={tech}
                          className="rounded-full border border-border bg-background-secondary px-3 py-1 text-xs font-medium text-foreground-secondary group-hover:border-accent/30 group-hover:bg-accent/10 transition-all"
                          initial={{ opacity: 0, scale: 0.8 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          viewport={viewportOptions}
                          transition={{ delay: 0.1 + techIndex * 0.05 }}
                          whileHover={{ scale: 1.05 }}
                        >
                          {tech}
                        </motion.span>
                      ))}
                    </div>
                  </div>

                  {/* Hover effect */}
                  <motion.div
                    className="absolute -right-4 -top-4 h-24 w-24 rounded-full bg-accent/10 blur-xl"
                    initial={{ scale: 0, opacity: 0 }}
                    whileHover={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.3 }}
                  />
                </motion.div>
              );
            })}
          </motion.div>

          {/* Additional skills section */}
          <motion.div
            className="mt-16 text-center"
            initial="initial"
            whileInView="animate"
            viewport={viewportOptions}
            variants={staggerContainer}
          >
            <motion.h3
              className="mb-8 text-xl font-semibold text-foreground"
              variants={fadeInUp}
            >
              추가 기술 스택
            </motion.h3>
            <motion.div
              className="flex flex-wrap justify-center gap-3"
              variants={staggerContainer}
            >
              {[
                { name: "AWS", icon: Globe },
                { name: "Docker", icon: Database },
                { name: "GraphQL", icon: Code2 },
                { name: "Security", icon: Shield },
                { name: "UI/UX", icon: Palette },
                { name: "Team Lead", icon: Users },
              ].map((skill, index) => {
                const SkillIcon = skill.icon;
                return (
                  <motion.div
                    key={skill.name}
                    className="group inline-flex items-center gap-2 rounded-full border border-border bg-background px-4 py-2 text-sm font-medium text-foreground-secondary transition-all hover:border-accent hover:bg-accent/5 hover:text-accent"
                    variants={fadeInUp}
                    custom={index}
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <SkillIcon className="h-4 w-4" />
                    {skill.name}
                  </motion.div>
                );
              })}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}