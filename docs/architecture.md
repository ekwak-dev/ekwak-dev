# 아키텍처 개요

- **전역 레이아웃**: `src/app/layout.tsx`
- **전역 메타데이터**: `export const metadata` 사용
- **테마/레이아웃 컴포넌트**: `ThemeProvider`, `Header`, `Footer`

## 레이아웃 핵심 코드
```49:75:src/app/layout.tsx
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" suppressHydrationWarning>
      <body className={`${spaceGrotesk.variable} font-sans antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
          storageKey="ekwak-dev-theme"
        >
          <div className="flex min-h-screen flex-col">
            <Header />
            <main id="main-content" className="flex-1">
              {children}
            </main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
```

## 메타데이터 정의
```13:47:src/app/layout.tsx
export const metadata: Metadata = {
  title: "Ekwak Dev - Portfolio",
  description:
    "Next.js와 Tailwind CSS로 제작한 Ekwak의 포트폴리오. 모던 프론트엔드/풀스택 프로젝트, 전문 분야, 연락처 정보를 한 곳에서 확인하세요.",
  keywords: ["portfolio", "developer", "web development", "Next.js", "React"],
  authors: [{ name: "Ekwak" }],
  creator: "Ekwak",
  openGraph: {
    type: "website",
    locale: "ko_KR",
    url: "https://ekwak.dev",
    title: "Ekwak Dev - Portfolio",
    description:
      "Next.js와 Tailwind CSS로 제작한 Ekwak의 포트폴리오. 모던 프론트엔드/풀스택 프로젝트, 전문 분야, 연락처 정보를 한 곳에서 확인하세요.",
    siteName: "Ekwak Dev",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ekwak Dev - Portfolio",
    description:
      "Next.js와 Tailwind CSS로 제작한 Ekwak의 포트폴리오. 모던 프론트엔드/풀스택 프로젝트, 전문 분야, 연락처 정보를 한 곳에서 확인하세요.",
    creator: "@ekwak",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};
```

## 운영 포인트
- 폰트: `next/font/google`(`Space_Grotesk`)로 로드, `--font-space-grotesk` CSS 변수 사용
- 테마: `next-themes`를 통한 다크/라이트 토글(`components/ui/theme-toggle.tsx`)
- SEO: 페이지별 추가 메타데이터는 각 `page.tsx` 파일에서 `metadata`로 보강

## 관련 문서
- 레이아웃/페이지: `https://nextjs.org/docs/app/building-your-application/routing/pages-and-layouts`
- 메타데이터 API: `https://nextjs.org/docs/app/api-reference/functions/generate-metadata`
- 폰트 최적화: `https://nextjs.org/docs/app/building-your-application/optimizing/fonts`

