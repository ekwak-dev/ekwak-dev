import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ThemeProvider } from "@/components/providers/theme-provider";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Ekwak Dev - Portfolio",
  description: "Modern portfolio website built with Next.js and Tailwind CSS",
  keywords: ["portfolio", "developer", "web development", "Next.js", "React"],
  authors: [{ name: "Ekwak" }],
  creator: "Ekwak",
  openGraph: {
    type: "website",
    locale: "ko_KR",
    url: "https://ekwak.dev",
    title: "Ekwak Dev - Portfolio",
    description: "Modern portfolio website built with Next.js and Tailwind CSS",
    siteName: "Ekwak Dev",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ekwak Dev - Portfolio",
    description: "Modern portfolio website built with Next.js and Tailwind CSS",
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
      <body className={`${inter.variable} font-sans antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
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
