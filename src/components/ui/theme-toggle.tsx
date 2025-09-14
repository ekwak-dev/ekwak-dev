"use client";

import { useTheme } from "next-themes";
import { Moon, Sun, Monitor } from "lucide-react";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div className="inline-flex h-9 w-9 items-center justify-center rounded-md border border-border bg-background text-foreground-secondary">
        <Sun className="h-4 w-4" />
      </div>
    );
  }

  const cycleTheme = () => {
    if (theme === "light") {
      setTheme("dark");
    } else if (theme === "dark") {
      setTheme("system");
    } else {
      setTheme("light");
    }
  };

  const getIcon = () => {
    switch (theme) {
      case "light":
        return Sun;
      case "dark":
        return Moon;
      default:
        return Monitor;
    }
  };

  const getLabel = () => {
    switch (theme) {
      case "light":
        return "라이트 모드";
      case "dark":
        return "다크 모드";
      default:
        return "시스템 설정";
    }
  };

  const IconComponent = getIcon();

  return (
    <motion.button
      onClick={cycleTheme}
      className="relative inline-flex h-9 w-9 items-center justify-center rounded-md border border-border bg-background text-foreground-secondary transition-colors hover:bg-background-secondary hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background"
      aria-label={`현재 테마: ${getLabel()}. 클릭하여 변경`}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <AnimatePresence mode="wait" initial={false}>
        <motion.div
          key={theme}
          initial={{ opacity: 0, rotate: -90, scale: 0.8 }}
          animate={{ opacity: 1, rotate: 0, scale: 1 }}
          exit={{ opacity: 0, rotate: 90, scale: 0.8 }}
          transition={{ duration: 0.2, ease: "easeInOut" }}
        >
          <IconComponent className="h-4 w-4" />
        </motion.div>
      </AnimatePresence>

      {/* Theme indicator */}
      <motion.div
        className="absolute -bottom-1 -right-1 h-2 w-2 rounded-full"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        style={{
          backgroundColor: theme === "light" ? "#fbbf24" : theme === "dark" ? "#6366f1" : "#10b981"
        }}
      />
    </motion.button>
  );
}

