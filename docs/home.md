# 홈 페이지 (/) 인수인계

- **파일**: `src/app/page.tsx`
- **레이아웃**: `src/app/layout.tsx` 하위로 렌더링
- **관련 섹션 컴포넌트**: `HeroSection`, `FeaturedProjectsSection`, `MarqueeBanner`, `ExpertiseSection`, `TestimonialsSection`, `CTASection`
- **메타데이터**: 전역(`layout.tsx`)에 정의된 `metadata`가 적용

## 스크린샷
![home](/docs/screenshots/home.png)

## 구성 요약
```12:19:src/app/page.tsx
export default function Home() {
  return (
    <>
      <HeroSection />
      <FeaturedProjectsSection />
      <MarqueeBanner />
      <ExpertiseSection />
      <TestimonialsSection />
      <CTASection />
    </>
  );
}
```

## 상호작용/의존성
- 테마: `ThemeProvider`(`next-themes`)가 루트에서 제공
- 스타일: Tailwind CSS v4 유틸리티 클래스 기반
- 애니메이션: 일부 섹션에서 Framer Motion 사용 가능성 (`src/lib/motion.ts` 참조)

## 운영 포인트
- 콘텐츠/카피 변경은 해당 섹션 컴포넌트에서 직접 수정
- 성능 점검 시 이미지/애니메이션 비용 확인

## 관련 문서
- App Router 라우팅: `https://nextjs.org/docs/app/building-your-application/routing`
- 메타데이터 API: `https://nextjs.org/docs/app/api-reference/functions/generate-metadata`

