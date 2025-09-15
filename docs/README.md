# Ekwak Dev 인수인계 문서

이 문서는 Next.js App Router 기반 포트폴리오 코드베이스의 인수인계를 위한 개요와 페이지 단위 설명을 제공합니다. 각 페이지 문서에는 구성, 메타데이터, 스크린샷, 운영 포인트가 포함됩니다.

## 목차
- [홈](/docs/home.md)
- [소개](/docs/about.md)
- [프로젝트](/docs/projects.md)
- [연락](/docs/contact.md)

## 기술 스택 및 구조 개요
- **프레임워크**: Next.js 15 (App Router), React 19, TypeScript
- **스타일**: Tailwind CSS v4
- **상태/테마**: `next-themes` 기반 다크모드 (`ThemeProvider`)
- **애니메이션**: Framer Motion
- **아이콘**: `lucide-react`

### 디렉터리 구조 요약
- `src/app`:
  - `layout.tsx`: 전역 레이아웃 및 공통 메타데이터
  - `page.tsx`: 홈 페이지
  - `about/page.tsx`, `projects/page.tsx`, `contact/page.tsx`: 서브 페이지
- `src/components`: 레이아웃/섹션/UI 컴포넌트
- `public`: 정적 자산

## 운영 가이드
- **개발 서버**: `npm run dev` 후 `http://localhost:3000`
- **빌드/실행**: `npm run build` → `npm start`
- **문서 스크린샷**: `/docs/screenshots/*.png` (Playwright MCP로 촬영)

## 관련 Next.js 레퍼런스(요약)
- **App Router 라우팅**: 폴더 = 라우트, `page.tsx`는 엔드포인트, 동적 세그먼트는 `[slug]`
- **메타데이터 API**: 각 라우트 또는 레이아웃 파일에서 `export const metadata` 사용
```tsx
import type { Metadata } from 'next'
export const metadata: Metadata = {
  title: 'Page Title',
  description: '...',
}
```
- **Route Handler(API)**: `app/**/route.ts` 내 `export async function GET()` 등으로 정의
```ts
export async function GET(request: Request) { /* ... */ }
```
- **데이터 패칭**: App Router에서는 `fetch()` 옵션으로 캐시/리밸리데이트 제어
```tsx
await fetch('https://...', { next: { revalidate: 10 } })
```

필요 시 각 페이지 문서의 "관련 문서" 섹션에서 공식 문서 링크를 참고하세요.

