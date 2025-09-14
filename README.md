# ekwak-dev

Figma 디자인을 기반으로 한 모던 포트폴리오 웹사이트입니다. Next.js 15 (App Router) + Tailwind CSS v4 + next-themes로 구현되었습니다.

## 기술 스택

- **프레임워크**: Next.js 15 (App Router), React 19, TypeScript
- **스타일링**: Tailwind CSS v4, next-themes (다크/라이트 테마)
- **UI 컴포넌트**: Radix Primitives, Lucide Icons
- **애니메이션**: Framer Motion
- **유효성 검사**: Zod
- **코드 품질**: ESLint, Prettier

## 시작하기

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
```

## 프로젝트 구조

```
├─ src/
│  ├─ app/                 # Next.js App Router 페이지
│  ├─ components/          # 재사용 가능한 컴포넌트
│  │  ├─ layout/           # 레이아웃 컴포넌트 (Header, Footer, Nav)
│  │  ├─ ui/               # 기본 UI 컴포넌트
│  │  └─ sections/         # 페이지 섹션 컴포넌트
│  ├─ lib/                 # 유틸리티 함수
│  └─ content/             # 정적 콘텐츠 데이터
├─ public/                 # 정적 자산
└─ plan.md                 # 프로젝트 구현 계획
```

## 디자인 시스템

- **접근성**: WCAG 2.1 AA 준수
- **반응형**: 모바일 퍼스트 (320px~)
- **테마**: 다크/라이트 모드 지원
- **타이포그래피**: 시스템 폰트 최적화

## 참고 자료

- 디자인: [Joey Portfolio Figma](https://www.figma.com/design/Ar4Raoh5BGzs57t5xHbeFS/Joey---Portfolio-Website--Community-?node-id=1-4&m=dev)
- 구현 계획: [plan.md](./plan.md)
