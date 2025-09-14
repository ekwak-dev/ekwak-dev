"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const marqueeMessages = [
  "창의적인 솔루션으로 비즈니스 가치를 창출합니다",
  "사용자 중심의 경험을 설계하고 구현합니다",
  "최신 기술을 활용한 혁신적인 웹 애플리케이션",
  "성능과 접근성을 모두 만족하는 품질 높은 코드",
  "지속 가능하고 확장 가능한 아키텍처 설계",
];

const MarqueeText = ({ 
  text, 
  reverse = false 
}: { 
  text: string; 
  reverse?: boolean; 
}) => {
  return (
    <motion.div
      className="flex shrink-0 items-center gap-8"
      animate={{
        x: reverse ? ["0%", "-100%"] : ["0%", "100%"],
      }}
      transition={{
        duration: 30,
        repeat: Infinity,
        ease: "linear",
      }}
    >
      {/* Repeat the text multiple times for seamless loop */}
      {Array.from({ length: 3 }).map((_, index) => (
        <div key={index} className="flex shrink-0 items-center gap-8">
          <span className="whitespace-nowrap text-lg font-medium text-foreground-secondary">
            {text}
          </span>
          <div className="h-1 w-1 rounded-full bg-accent" />
        </div>
      ))}
    </motion.div>
  );
};

export function MarqueeBanner() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % marqueeMessages.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative overflow-hidden border-y border-border bg-background-secondary py-6" aria-label="마퀴 배너 섹션">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-accent/5 to-transparent" />
        <motion.div
          className="absolute inset-0"
          animate={{
            backgroundPosition: ["0% 0%", "100% 100%"],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, rgb(var(--color-accent) / 0.1) 1px, transparent 0)`,
            backgroundSize: "20px 20px",
          }}
        />
      </div>

      {/* Marquee content */}
      <div className="relative">
        {/* Primary marquee (left to right) */}
        <div className="flex overflow-hidden">
          <motion.div
            key={`primary-${currentIndex}`}
            className="flex shrink-0"
            initial={{ x: "100%" }}
            animate={{ x: "-100%" }}
            transition={{
              duration: 25,
              ease: "linear",
              repeat: Infinity,
            }}
          >
            <MarqueeText text={marqueeMessages[currentIndex]} />
          </motion.div>
          <motion.div
            key={`primary-duplicate-${currentIndex}`}
            className="flex shrink-0"
            initial={{ x: "100%" }}
            animate={{ x: "-100%" }}
            transition={{
              duration: 25,
              ease: "linear",
              repeat: Infinity,
            }}
          >
            <MarqueeText text={marqueeMessages[currentIndex]} />
          </motion.div>
        </div>

        {/* Secondary marquee (right to left, subtle) */}
        <div className="mt-2 flex overflow-hidden opacity-40">
          <motion.div
            key={`secondary-${currentIndex}`}
            className="flex shrink-0"
            initial={{ x: "-100%" }}
            animate={{ x: "100%" }}
            transition={{
              duration: 35,
              ease: "linear",
              repeat: Infinity,
            }}
          >
            <MarqueeText 
              text={marqueeMessages[(currentIndex + 2) % marqueeMessages.length]} 
              reverse={true} 
            />
          </motion.div>
          <motion.div
            key={`secondary-duplicate-${currentIndex}`}
            className="flex shrink-0"
            initial={{ x: "-100%" }}
            animate={{ x: "100%" }}
            transition={{
              duration: 35,
              ease: "linear",
              repeat: Infinity,
            }}
          >
            <MarqueeText 
              text={marqueeMessages[(currentIndex + 2) % marqueeMessages.length]} 
              reverse={true} 
            />
          </motion.div>
        </div>
      </div>

      {/* Gradient overlays for fade effect */}
      <div className="pointer-events-none absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-background-secondary to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-background-secondary to-transparent" />

      {/* Progress indicators */}
      <div className="absolute bottom-2 left-1/2 flex -translate-x-1/2 gap-1">
        {marqueeMessages.map((_, index) => (
          <motion.div
            key={index}
            className="h-1 w-6 rounded-full bg-foreground-tertiary"
            animate={{
              backgroundColor: index === currentIndex 
                ? "rgb(var(--color-accent))" 
                : "rgb(var(--color-foreground-tertiary))",
            }}
            transition={{ duration: 0.3 }}
          />
        ))}
      </div>
    </section>
  );
}