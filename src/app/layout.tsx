import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import { ThemeProvider } from "@/components/providers/theme-provider";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
});

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
