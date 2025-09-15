# 소개 페이지 (/about) 인수인계

- **파일**: `src/app/about/page.tsx`
- **메타데이터**: 페이지 로컬 `metadata` 정의(title/description)
- **레이아웃**: 전역 `layout.tsx` 하위

## 스크린샷
![about](/docs/screenshots/about.png)

## 구성 요약
```1:8:src/app/about/page.tsx
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "소개 - Ekwak Dev",
  description: "풀스택 개발자 Ekwak의 소개 페이지입니다.",
};

export default function AboutPage() {
```

- 기술 스택/경험 섹션이 카드/리스트 형태로 정리되어 있음
- Tailwind 클래스 기반 UI, 다크모드 대응(전역)

## 운영 포인트
- 카피/리스트 변경은 해당 JSX 내 텍스트/배열 수정
- SEO 키워드 추가가 필요하면 전역 `layout.tsx` 또는 본 파일 `metadata`에 반영

## 관련 문서
- 메타데이터 API: `https://nextjs.org/docs/app/api-reference/functions/generate-metadata`
- 레이아웃/페이지: `https://nextjs.org/docs/app/building-your-application/routing/pages-and-layouts`

