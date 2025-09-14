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

  // Prevent FOUC by not rendering theme-dependent content until mounted
  if (!mounted) {
    return (
      <div className="bg-background text-foreground">
        {children}
      </div>
    );
  }

  return (
    <ThemeProviderContent {...props}>
      {children}
    </ThemeProviderContent>
  );
}

