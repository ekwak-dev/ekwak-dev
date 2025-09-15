# 연락 페이지 (/contact) 인수인계

- **파일**: `src/app/contact/page.tsx`
- **메타데이터**: 페이지 로컬 `metadata` 정의(title/description)
- **특징**: 연락처 카드 + 단순 폼(UI)

## 스크린샷
![contact](/docs/screenshots/contact.png)

## 구성 요약
```9:19:src/app/contact/page.tsx
export default function ContactPage() {
  return (
    <div className="container py-20">
      <div className="mx-auto max-w-4xl">
        <h1 className="mb-4 text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
          연락하기
        </h1>
        <p className="mb-12 text-lg text-foreground-secondary">
          프로젝트 협업이나 문의사항이 있으시면 언제든 연락주세요.
        </p>
```

- 폼은 클라이언트 전송 로직 미포함(서버 액션/리퀘스트 핸들러 연동 여지)
- 연락처 링크: `mailto:`, `tel:` 사용

## 운영 포인트
- 폼 전송을 도입하려면 App Router Route Handler(`app/contact/route.ts`) 또는 외부 폼 백엔드 사용 고려
- 스팸 방지: reCAPTCHA, rate limit 등 추가 가능

## 관련 문서
- Route Handlers(API): `https://nextjs.org/docs/app/building-your-application/routing/route-handlers`
- 폼 처리 패턴(Server Actions): `https://nextjs.org/docs/app/building-your-application/data-fetching/server-actions-and-mutations`

