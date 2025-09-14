# ekwak-dev

Figma 디자인을 기반으로 한 모던 포트폴리오 웹사이트입니다. Next.js 15 (App Router) + Tailwind CSS v4 + next-themes로 구현되었습니다.

## 🚀 기술 스택

- **프레임워크**: Next.js 15 (App Router), React 19, TypeScript
- **스타일링**: Tailwind CSS v4, next-themes (다크/라이트 테마)
- **UI 컴포넌트**: Radix Primitives, Lucide Icons
- **애니메이션**: Framer Motion
- **유효성 검사**: Zod
- **코드 품질**: ESLint, Prettier
- **CI/CD**: GitHub Actions

## 📁 프로젝트 구조

```
├─ .github/workflows/      # GitHub Actions CI 워크플로
├─ src/
│  ├─ app/                 # Next.js App Router 페이지
│  │  ├─ about/            # 소개 페이지
│  │  ├─ projects/         # 프로젝트 페이지
│  │  ├─ contact/          # 연락 페이지
│  │  └─ ...               # 레이아웃, 메타데이터 등
│  ├─ components/          # 재사용 가능한 컴포넌트
│  │  ├─ layout/           # 레이아웃 컴포넌트 (Header, Footer)
│  │  ├─ ui/               # 기본 UI 컴포넌트
│  │  ├─ sections/         # 페이지 섹션 컴포넌트
│  │  └─ providers/        # Context Providers
│  ├─ lib/                 # 유틸리티 함수
│  ├─ styles/              # 글로벌 스타일 및 토큰
│  └─ content/             # 정적 콘텐츠 데이터
├─ public/                 # 정적 자산
└─ plan.md                 # 프로젝트 구현 계획
```

## 🛠️ 시작하기

### 필수 요구사항

- Node.js 20.x 이상
- npm 10.x 이상

### 설치

```bash
# 의존성 설치
npm install
```

### 개발 서버 실행

```bash
npm run dev
```

[http://localhost:3000](http://localhost:3000)에서 결과를 확인하세요.

### 빌드 및 배포

```bash
# 프로덕션 빌드
npm run build

# 프로덕션 서버 시작
npm run start

# 린팅 검사
npm run lint

# 코드 포맷팅
npm run format

# 타입 체크
npm run typecheck

# CI 파이프라인 실행 (lint + format:check + typecheck + build)
npm run ci
```

## 🎨 디자인 시스템

### 색상 토큰

- **Background**: 주요 배경색 (라이트/다크 모드 대응)
- **Foreground**: 텍스트 색상 (primary, secondary, tertiary)
- **Accent**: 강조 색상 (indigo 계열)
- **Border**: 테두리 색상
- **Success/Warning/Error**: 상태 표시 색상

### 타이포그래피

- **Font**: Inter (시스템 폰트 폴백)
- **Sizes**: xs(12px) ~ 6xl(60px)
- **Line Heights**: tight(1.25) ~ loose(2)

### 간격 시스템

- 4px 기반 스케일 (space-1 ~ space-32)
- 컨테이너 최대 너비: 1200px

## ✨ 주요 기능

- ✅ **다크/라이트 테마**: 시스템 설정 연동 및 수동 전환
- ✅ **반응형 디자인**: 모바일 퍼스트 접근
- ✅ **접근성**: WCAG 2.1 AA 준수
- ✅ **SEO 최적화**: 메타데이터, sitemap, robots.txt
- ✅ **성능 최적화**: 이미지 최적화, 코드 스플리팅, 캐싱
- ✅ **애니메이션**: Framer Motion 기반 인터랙션
- ✅ **CI/CD**: GitHub Actions 자동화

## 🔒 보안

- Strict-Transport-Security (HSTS)
- X-Content-Type-Options
- X-Frame-Options
- X-XSS-Protection
- Referrer-Policy
- Permissions-Policy

## 📊 성능 지표

- **Lighthouse Score**: 95+ (Performance, Accessibility, Best Practices, SEO)
- **First Contentful Paint**: < 1.0s
- **Time to Interactive**: < 2.5s
- **Cumulative Layout Shift**: < 0.1

## 🤝 기여하기

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 라이선스

이 프로젝트는 MIT 라이선스 하에 있습니다.

## 📞 연락처

- 이메일: contact@ekwak.dev
- GitHub: [https://github.com/ekwak](https://github.com/ekwak)

## 🙏 감사의 말

<<<<<<< Current (Your changes)
- 디자인: [Joey Portfolio Figma](https://www.figma.com/design/Ar4Raoh5BGzs57t5xHbeFS/Joey---Portfolio-Website--Community-?node-id=1-4&m=dev)
- 구현 계획: [plan.md](./plan.md)
=======
- 디자인 참조: [Joey Portfolio Figma](https://www.figma.com/design/Ar4Raoh5BGzs57t5xHbeFS/Joey---Portfolio-Website--Community-?node-id=1-4&m=dev)
- Next.js 팀과 오픈소스 커뮤니티에 감사드립니다.
>>>>>>> Incoming (Background Agent changes)
