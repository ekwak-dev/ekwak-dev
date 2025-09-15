# 프로젝트 페이지 (/projects) 인수인계

- **파일**: `src/app/projects/page.tsx`
- **메타데이터**: 페이지 로컬 `metadata` 정의(title/description)
- **콘텐츠**: 하드코딩된 `projects` 배열을 매핑하여 카드 그리드 렌더링

## 스크린샷
![projects](/docs/screenshots/projects.png)

## 구성 요약
```64:83:src/app/projects/page.tsx
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
```

- 링크: `github`, `demo`는 외부 링크로 새창(`target=_blank`) 처리
- 이미지: 현재 placeholder, 실제 자산 연결 시 최적화 고려

## 운영 포인트
- 프로젝트 데이터는 코드 내 `projects` 배열에서 관리 → CMS/MDX로의 이전 고려 가능
- 접근성: 카드의 heading 레벨과 링크 `aria-label` 일관성 유지

## 관련 문서
- 그리드/반응형 레이아웃: Tailwind Docs `https://tailwindcss.com/docs/grid-template-columns`
- 외부 링크 접근성: `rel="noopener noreferrer"` 유지

