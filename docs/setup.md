## 환경 설정 및 실행

### 요구사항
- Node.js 18+
- pnpm 9+ (또는 npm/yarn)
- Git

### 설치
```bash
pnpm install
```

### 개발 서버
```bash
pnpm dev
```

### 환경 변수
```bash
# .env.local 예시
NEXT_PUBLIC_SITE_URL="http://localhost:3000"
NEXT_PUBLIC_ANALYTICS_ID=""
DATABASE_URL=""
```

### 로컬 개발 흐름
```mermaid
flowchart LR
  Dev[Developer] -->|pnpm dev| App[Next.js Dev Server]
  App --> Browser[http://localhost:3000]
  App -. HMR .-> Browser
```

### 빌드 & 프리뷰
```bash
pnpm build
pnpm start
```

### CI 파이프라인(예시)
```mermaid
sequenceDiagram
  participant GH as Git Host
  participant CI as CI Runner
  participant Host as Hosting
  GH->>CI: push PR/main
  CI->>CI: install → lint → typecheck → test → build
  CI-->>Host: upload artifacts/deploy
  Host-->>GH: Preview URL / Deployment
```

### 권장 VSCode 확장
- ESLint, Prettier, Tailwind CSS IntelliSense