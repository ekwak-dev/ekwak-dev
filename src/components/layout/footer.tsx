import Link from "next/link";
import { Github, Linkedin, Mail, Twitter } from "lucide-react";

const socialLinks = [
  {
    name: "GitHub",
    href: "https://github.com",
    icon: Github,
    ariaLabel: "GitHub 프로필로 이동",
  },
  {
    name: "LinkedIn",
    href: "https://linkedin.com",
    icon: Linkedin,
    ariaLabel: "LinkedIn 프로필로 이동",
  },
  {
    name: "Twitter",
    href: "https://twitter.com",
    icon: Twitter,
    ariaLabel: "Twitter 프로필로 이동",
  },
  {
    name: "Email",
    href: "mailto:contact@ekwak.dev",
    icon: Mail,
    ariaLabel: "이메일 보내기",
  },
];

const footerLinks = [
  { name: "홈", href: "/" },
  { name: "소개", href: "/about" },
  { name: "프로젝트", href: "/projects" },
  { name: "연락", href: "/contact" },
];

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="mt-auto border-t border-border bg-background">
      <div className="container py-12">
        <div className="grid gap-8 md:grid-cols-3">
          {/* Brand */}
          <div className="space-y-4">
            <Link
              href="/"
              className="inline-block text-xl font-bold text-foreground"
              aria-label="홈으로 이동"
            >
              Ekwak<span className="text-accent">.</span>
            </Link>
            <p className="text-sm text-foreground-secondary">
              모던한 웹 애플리케이션을 만드는
              <br />
              풀스택 개발자입니다.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold text-foreground">빠른 링크</h3>
            <nav aria-label="푸터 네비게이션">
              <ul className="space-y-2">
                {footerLinks.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-sm text-foreground-secondary transition-colors hover:text-accent"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          {/* Social Links */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold text-foreground">소셜</h3>
            <div className="flex gap-3">
              {socialLinks.map((link) => {
                const Icon = link.icon;
                return (
                  <a
                    key={link.name}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex h-9 w-9 items-center justify-center rounded-md border border-border bg-background text-foreground-secondary transition-colors hover:bg-background-secondary hover:text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background"
                    aria-label={link.ariaLabel}
                  >
                    <Icon className="h-4 w-4" />
                  </a>
                );
              })}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-8 flex flex-col items-center justify-between gap-4 border-t border-border pt-8 text-center md:flex-row">
          <p className="text-sm text-foreground-tertiary">
            © {currentYear} Ekwak. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link
              href="/privacy"
              className="text-sm text-foreground-tertiary transition-colors hover:text-accent"
            >
              개인정보처리방침
            </Link>
            <Link
              href="/terms"
              className="text-sm text-foreground-tertiary transition-colors hover:text-accent"
            >
              이용약관
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

