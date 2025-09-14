"use client";

import { ThemeProvider as NextThemesProvider } from "next-themes";
import { type ThemeProviderProps } from "next-themes";
import { useEffect, useState } from "react";

interface EnhancedThemeProviderProps extends ThemeProviderProps {
  children: React.ReactNode;
}

function ThemeProviderContent({ children, ...props }: EnhancedThemeProviderProps) {
  return <NextThemesProvider {...props}>{children}</NextThemesProvider>;
}

export function ThemeProvider({ children, ...props }: EnhancedThemeProviderProps) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // 마운트 전엔 children을 렌더하지 않아 테마 FOUC를 방지
  if (!mounted) return null;

  return (
    <ThemeProviderContent {...props}>
      {children}
    </ThemeProviderContent>
  );
}

