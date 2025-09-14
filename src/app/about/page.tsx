import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "소개 - Ekwak Dev",
  description: "풀스택 개발자 Ekwak의 소개 페이지입니다.",
};

export default function AboutPage() {
  return (
    <div className="container py-20">
      <div className="mx-auto max-w-3xl">
        <h1 className="mb-8 text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
          소개
        </h1>

        <div className="prose prose-gray max-w-none dark:prose-invert">
          <p className="text-lg text-foreground-secondary">
            안녕하세요! 저는 사용자 경험을 중시하는 풀스택 개발자입니다.
            깔끔하고 효율적인 코드를 작성하는 것을 좋아하며, 새로운 기술을
            배우고 적용하는 것에 열정을 가지고 있습니다.
          </p>

          <h2 className="mt-12 text-2xl font-bold text-foreground">
            기술 스택
          </h2>

          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            <div className="rounded-lg border border-border bg-background-secondary p-6">
              <h3 className="mb-3 text-lg font-semibold text-foreground">
                Frontend
              </h3>
              <ul className="space-y-2 text-sm text-foreground-secondary">
                <li>React / Next.js</li>
                <li>TypeScript / JavaScript</li>
                <li>Tailwind CSS / CSS-in-JS</li>
                <li>Redux / Zustand</li>
              </ul>
            </div>

            <div className="rounded-lg border border-border bg-background-secondary p-6">
              <h3 className="mb-3 text-lg font-semibold text-foreground">
                Backend
              </h3>
              <ul className="space-y-2 text-sm text-foreground-secondary">
                <li>Node.js / Express</li>
                <li>Python / FastAPI</li>
                <li>PostgreSQL / MongoDB</li>
                <li>GraphQL / REST API</li>
              </ul>
            </div>
          </div>

          <h2 className="mt-12 text-2xl font-bold text-foreground">경험</h2>

          <div className="mt-6 space-y-6">
            <div className="rounded-lg border border-border bg-background p-6">
              <h3 className="text-lg font-semibold text-foreground">
                시니어 개발자
              </h3>
              <p className="mt-1 text-sm text-foreground-tertiary">
                테크 컴퍼니 • 2022 - 현재
              </p>
              <ul className="mt-3 space-y-1 text-sm text-foreground-secondary">
                <li>• 대규모 웹 애플리케이션 개발 및 유지보수</li>
                <li>• 팀 리드 및 주니어 개발자 멘토링</li>
                <li>• 성능 최적화 및 아키텍처 개선</li>
              </ul>
            </div>

            <div className="rounded-lg border border-border bg-background p-6">
              <h3 className="text-lg font-semibold text-foreground">
                풀스택 개발자
              </h3>
              <p className="mt-1 text-sm text-foreground-tertiary">
                스타트업 • 2020 - 2022
              </p>
              <ul className="mt-3 space-y-1 text-sm text-foreground-secondary">
                <li>• MVP 제품 개발 및 출시</li>
                <li>• CI/CD 파이프라인 구축</li>
                <li>• 클라우드 인프라 관리</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

