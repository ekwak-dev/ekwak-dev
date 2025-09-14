## EKW-6: Implementing portfolio website with Figma — 구현 계획

### 요약

- Figma 디자인을 기준으로 Next.js 15(App Router) + Tailwind CSS v4 + next-themes 조합으로 반응형/접근성(AA)/다크-라이트 테마 포트폴리오 웹사이트를 구현합니다.
- 본 문서는 아키텍처, 디렉터리 구조, 디자인 토큰/테마, 페이지/컴포넌트 매핑, 애니메이션, SEO/성능, 테스트/CI, 마일스톤, 위험요소, DOD를 정의합니다.
- 현재 이슈(EKW-6) 범위: 프로젝트 초기화(Next.js 15 + Tailwind v4 + next-themes) 환경 구성

### 참고 자료

- 디자인: Joey Portfolio Figma ([링크](https://www.figma.com/design/Ar4Raoh5BGzs57t5xHbeFS/Joey---Portfolio-Website--Community-?node-id=1-4&m=dev))
- 전역 규칙: `README.md`, 접근성/SEO/성능 원칙(AA, 메타/OG, 이미지 최적화 등)
- 워크스페이스 규칙: 10-typescript-react, 20-tailwind-theme 준수

## 1) 범위 & 목표

- **범위**: 퍼스널 포트폴리오 웹 전체(홈/프로젝트/소개/연락 + 공통 레이아웃/테마/컴포넌트)
- **목표**:
  - 모바일 퍼스트, 320px~ 대형 데스크톱까지 반응형
  - 명확한 헤딩 계층과 시맨틱 레이아웃(`header/main/section/nav/footer`)
  - 다크/라이트 테마 토글 및 토큰 기반 색상 시스템
  - 기본 SEO/OG/트위터 카드 설정 및 성능 최적화
  - 간결하고 재사용 가능한 컴포넌트 구조

## 2) 산출물(Deliverables)

- Next.js TypeScript 앱 스캐폴딩과 기본 레이아웃/네비게이션
- Tailwind CSS v4 기반 디자인 토큰(색상/타이포/간격) 및 다크/라이트 테마
- 공통 UI 컴포넌트(헤더/푸터/네비/버튼/카드/토글/배지)
- 페이지: 홈, 프로젝트 목록/상세(옵션), 소개, 연락, 404
- SEO/메타, OG 이미지 템플릿, `next/image` 최적화
- ESLint/Prettier/Type-checked CI, 기본 테스트(컴포넌트 스냅샷/접근성 스모크)

## 3) 기술 스택

- **런타임/프레임워크**: Next.js 15(App Router), React 18, TypeScript
- **스타일/테마**: Tailwind CSS v4, next-themes
- **UI/아이콘**: Radix Primitives, Lucide Icons
- **유효성 검사**: Zod
- **애니메이션**: Framer Motion(Motion)
- **테스트**: Playwright(E2E), Testing Library + Vitest(또는 Jest)
- **품질/CI**: ESLint, Prettier, GitHub Actions

## 4) 아키텍처 & 디렉터리 구조

- **App Router 레이아웃**
  - `app/layout.tsx`: 전역 레이아웃, 폰트, 테마 Provider, 메타데이터
  - `app/page.tsx`: 홈
  - `app/(site)/about/page.tsx`, `app/(site)/projects/page.tsx`, `app/(site)/contact/page.tsx`
  - `app/not-found.tsx`: 404
- **권장 디렉터리**

```
/ (repo root)
├─ app/
│  ├─ (site)/
│  │  ├─ about/
│  │  ├─ projects/
│  │  └─ contact/
│  ├─ api/ (옵션)
│  ├─ fonts/
│  ├─ opengraph-image.tsx (옵션)
│  ├─ icon.png, apple-icon.png (파비콘)
│  └─ globals.css
├─ src/
│  ├─ components/
│  │  ├─ layout/ (Header, Footer, Nav, ThemeToggle)
│  │  ├─ ui/ (Button, Badge, Card, Tooltip 등)
│  │  └─ sections/ (Hero, About, ProjectsGrid, ContactCTA)
│  ├─ styles/ (tokens.css, themes.css)
│  ├─ lib/ (seo.ts, analytics.ts, utils.ts)
│  └─ content/ (projects.ts, experience.ts, socials.ts)
├─ public/ (정적 이미지/아이콘)
├─ .github/workflows/
├─ eslint, prettier, tsconfig, tailwind 설정
└─ README.md, plan.md
```

## 5) 디자인 토큰 & 테마(다크/라이트)

- **색상 토큰**: `--color-bg`, `--color-fg`, `--color-accent`, `--color-muted`, `--color-border`
  - 라이트/다크 테마에서 토큰 값을 다르게 매핑
  - 대비(텍스트 4.5:1 이상) 보장
- **타이포 토큰**: `--font-sans`, `--font-mono`, 스케일(12/14/16/18/20/24/32/40/48/60)
- **간격 토큰**: `--space-1..8`(4px 스텝 권장), 컨테이너 폭(`--container-max: 1200px` 등)
- Tailwind v4에서 CSS 변수와 프리셋을 활용하여 유틸리티로 노출
- `next-themes`로 `html`에 `class="dark"` 토글, 시스템 선호도 연동 옵션

## 6) 레이아웃 & 내비게이션

- 고정 헤더(스크롤 시 배경 블러/엷은 보더), 스킵 링크 제공
- 섹션 구획: Hero / About / Projects / Contact
- 푸터: 저작권, 소셜 링크, 테마 토글 보조 배치
- 모바일 내비: 햄버거 + 모션 메뉴, 포커스 트랩 주의(트랩 금지)

## 7) 페이지 매핑(Figma → 구현)

- **Home**: Hero(이름/역할/CTA), Featured Projects, About Preview, Contact CTA
- **Projects**: 그리드/필터(옵션), 카드 hover 모션, 상세(옵션)
- **About**: 소개/스킬 배지/타임라인(경력)
- **Contact**: 이메일 링크, 소셜 링크, 폼(옵션: Formspree 등)
- **404**: 가벼운 일러스트/복귀 링크

## 8) UI 컴포넌트(예시)

- 레이아웃: `Header`, `Footer`, `Navigation`, `ThemeToggle`
- Section Wrappers: `Section`, `SectionHeader`, `SectionBody`
- UI: `Button`, `Badge`, `Card`, `Tooltip`(Radix), `Icon`(Lucide)
- 콘텐츠: `ProjectCard`, `ExperienceItem`, `SocialLinks`
- 접근성 유틸: `VisuallyHidden`, SkipLink

## 9) 애니메이션/인터랙션

- 최초 로드 페이드/슬라이드, in-view 시 섹션 리빌
- 카드 hover 엘리베이션/그라데이션, 내비 오픈/클로즈 모션
- 모션 선호도(`prefers-reduced-motion`) 존중

## 10) SEO/메타/OG

- `app/metadata` 설정: `title`, `description(<=160)`, `openGraph`, `twitter`
- 의미 있는 링크 앵커 텍스트, 외부 링크 `rel="noopener"`
- 정적 OG 이미지 또는 동적 `opengraph-image.tsx`

## 11) 성능 가이드

- 폰트: 서브셋 + `display: swap`, `next/font` 사용
- 이미지: `next/image`로 사이즈/`sizes` 지정, critical만 `priority`
- 스크롤 관찰 최적화, 불필요한 재렌더 방지(메모/분리)

## 12) 데이터 모델(정적 콘텐츠)

- `Project`: `id`, `title`, `summary`, `tech`, `links`, `cover`, `year`
- `Experience`: `id`, `company`, `role`, `period`, `highlights`
- `Social`: `id`, `name`, `url`, `icon`
- Zod 스키마로 정적 데이터 검증

## 13) 테스트/품질/CI

- Lint: ESLint(접근성 플러그인 포함), Prettier
- 단위/스냅샷: Testing Library + Vitest
- E2E: Playwright(헤더 내비, 테마 토글, 기본 라우팅)
- CI: GitHub Actions(install → lint → typecheck → test → build)

## 14) 마일스톤 & 일정(초안)

- M1. 스캐폴딩/CI(0.5d)
- M2. 토큰/테마/글로벌 스타일(0.5d)
- M3. 레이아웃/내비/푸터(0.5d)
- M4. 홈 섹션(1.0d)
- M5. 프로젝트/소개/연락(1.0~1.5d)
- M6. 애니메이션/미세조정(0.5d)
- M7. 접근성/SEO/성능 점검(0.5d)

## 15) 리스크 & 대응

- Tailwind v4 마이그레이션 이슈: 필요시 v3 프리셋 임시 사용 → v4 규칙 반영 후 상향
- Figma 명명/컴포넌트 매핑 불일치: Code Connect/토큰 정의로 정렬, 변수 테이블 동기화
- 이미지/라이선스: 오픈 라이선스 자산만 사용, 대체텍스트 준비

## 16) Definition of Done — EKW-6

- 본 계획 문서(`plan.md`)가 합의/머지됨
- 디자인 토큰/테마 전략, 디렉터리 구조, 컴포넌트/페이지 목록이 확정됨
- 초기 스캐폴딩과 기본 레이아웃 계획이 승인됨(코드 작업은 후속 이슈로 분할 가능)

## 17) 작업 목록 & PR 계획(체크리스트)

- [ ] 스캐폴딩: Next.js TS 앱, Tailwind v4, next-themes, Radix, Lucide, Motion, Zod
- [ ] 전역 설정: ESLint/Prettier/tsconfig, CI 워크플로
- [ ] 토큰/테마: 색상/타이포/간격 변수, 다크/라이트 매핑, 접근성 대비 확인
- [ ] 레이아웃/내비/푸터: 스킵 링크, 포커스 순서/링 유지, 모바일 내비
- [ ] 페이지: 홈/프로젝트/소개/연락/404 뼈대 및 섹션 컴포넌트 배치
- [ ] SEO/OG: `metadata` 설정, OG 이미지 템플릿, 외부 링크 정책
- [ ] 성능: 폰트 서브셋/스왑, 이미지 사이즈/priority, 코드 스플리팅 점검
- [ ] 테스트: 핵심 경로 E2E, 접근성 스모크, 컴포넌트 스냅샷
- [ ] 문서화: `README.md` 사용법/스크립트, 디자인 결정 기록

## 18) 실행 커맨드(참고용)

> 실제 실행은 구현 이슈에서 진행합니다. 아래는 비대화형 플래그 예시입니다.

```bash
# (옵션) 리포지토리 루트로 이동
cd /Users/ekwak/cursor_figma_mcp_test/ekwak-dev

# Next.js 앱 스캐폴딩(현재 디렉터리)
npm create next-app@latest . --yes --ts --eslint --tailwind --app --src-dir --import-alias "@/*" --use-npm

# 필수 라이브러리 설치
npm install next-themes @radix-ui/react-tooltip lucide-react zod framer-motion

# 품질 도구
npm install -D @types/node @types/react @types/react-dom eslint-config-next prettier

# E2E/유닛 테스트(옵션)
npm install -D playwright @playwright/test vitest @testing-library/react @testing-library/jest-dom jsdom

# 첫 빌드 검증
npm run lint && npm run build && npm run start
```

## 19) Figma 연동 전략(옵션)

- Code Connect로 컴포넌트 소스 매핑, 레이어 네이밍 → 컴포넌트 Prop 정렬
- 변수(컬러/그리드/스페이싱) 테이블을 코드 토큰과 일치화
- 주요 프레임의 스크린샷을 스토리북/드록 디렉터리에 참고 아트팩트로 보관(스토리북은 후속)

## 20) 후속 이슈 분할(예시)

- EKW-7: 스캐폴딩/CI 세팅
- EKW-8: 토큰/테마 구현(Tailwind v4)
- EKW-9: 레이아웃/헤더/푸터/내비
- EKW-10: 홈 섹션(히어로/피처드 프로젝트/CTA)
- EKW-11: 프로젝트/소개/연락 페이지
- EKW-12: 애니메이션/폴리싱
- EKW-13: 접근성/SEO/성능 점검, 문서화
