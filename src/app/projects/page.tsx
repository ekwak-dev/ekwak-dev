import type { Metadata } from "next";
import { ExternalLink, Github } from "lucide-react";

export const metadata: Metadata = {
  title: "프로젝트 - Ekwak Dev",
  description: "Ekwak의 프로젝트 포트폴리오입니다.",
};

const projects = [
  {
    id: 1,
    title: "E-Commerce Platform",
    description: "Next.js와 Stripe를 활용한 풀스택 이커머스 플랫폼",
    image: "/api/placeholder/600/400",
    tech: ["Next.js", "TypeScript", "Prisma", "PostgreSQL", "Stripe"],
    github: "https://github.com",
    demo: "https://example.com",
  },
  {
    id: 2,
    title: "Task Management App",
    description: "실시간 협업이 가능한 태스크 관리 애플리케이션",
    image: "/api/placeholder/600/400",
    tech: ["React", "Node.js", "Socket.io", "MongoDB"],
    github: "https://github.com",
    demo: "https://example.com",
  },
  {
    id: 3,
    title: "AI Chat Assistant",
    description: "OpenAI API를 활용한 지능형 챗봇 서비스",
    image: "/api/placeholder/600/400",
    tech: ["Python", "FastAPI", "React", "OpenAI"],
    github: "https://github.com",
    demo: "https://example.com",
  },
  {
    id: 4,
    title: "Analytics Dashboard",
    description: "실시간 데이터 시각화 대시보드",
    image: "/api/placeholder/600/400",
    tech: ["Vue.js", "D3.js", "Express", "Redis"],
    github: "https://github.com",
    demo: "https://example.com",
  },
  {
    id: 5,
    title: "Mobile Fitness App",
    description: "React Native로 개발한 피트니스 트래킹 앱",
    image: "/api/placeholder/600/400",
    tech: ["React Native", "Firebase", "Redux"],
    github: "https://github.com",
    demo: "https://example.com",
  },
  {
    id: 6,
    title: "Blog Platform",
    description: "MDX 기반 개발자 블로그 플랫폼",
    image: "/api/placeholder/600/400",
    tech: ["Next.js", "MDX", "Tailwind CSS"],
    github: "https://github.com",
    demo: "https://example.com",
  },
];

export default function ProjectsPage() {
  return (
    <div className="container py-20">
      <div className="mx-auto max-w-6xl">
        <h1 className="mb-4 text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
          프로젝트
        </h1>
        <p className="mb-12 text-lg text-foreground-secondary">
          제가 작업한 프로젝트들을 소개합니다.
        </p>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <article
              key={project.id}
              className="group overflow-hidden rounded-lg border border-border bg-background transition-all hover:shadow-lg"
            >
              {/* Project Image */}
              <div className="aspect-video overflow-hidden bg-background-secondary">
                <div className="flex h-full items-center justify-center text-foreground-tertiary">
                  <span className="text-sm">Project Image</span>
                </div>
              </div>

              {/* Project Content */}
              <div className="p-6">
                <h2 className="mb-2 text-xl font-semibold text-foreground group-hover:text-accent transition-colors">
                  {project.title}
                </h2>
                <p className="mb-4 text-sm text-foreground-secondary">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="mb-4 flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-full bg-background-secondary px-3 py-1 text-xs font-medium text-foreground-secondary"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex gap-3">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm text-foreground-secondary transition-colors hover:text-accent"
                    aria-label={`${project.title} GitHub 저장소 보기`}
                  >
                    <Github className="h-4 w-4" />
                    <span>코드</span>
                  </a>
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm text-foreground-secondary transition-colors hover:text-accent"
                    aria-label={`${project.title} 라이브 데모 보기`}
                  >
                    <ExternalLink className="h-4 w-4" />
                    <span>데모</span>
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}

