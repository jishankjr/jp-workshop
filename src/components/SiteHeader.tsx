
"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useLanguage } from "./LanguageProvider";

const navItems = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "Contact", href: "/contact" },
];

export default function SiteHeader() {
  const { language, setLanguage } = useLanguage();
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-40 border-b border-[#D8E8FA] bg-[#F5F9FF]/95 backdrop-blur-md">
      <div className="mx-auto flex h-[68px] w-full max-w-7xl items-center justify-between gap-4 px-3 sm:px-5 lg:px-8">
        {/* Logo */}
        <Link
          href="/"
          aria-label="JP Workshop homepage"
          className="flex min-w-0 shrink-0 items-center"
        >
          <Image
            src="/jp-workshop-logo.png"
            alt="JP Workshop"
            width={400}
            height={120}
            priority
            className="h-auto w-[155px] object-contain sm:w-[190px]"
          />
        </Link>

        {/* Desktop navigation */}
        <nav
          aria-label="Desktop navigation"
          className="hidden items-center gap-2 md:flex"
        >
          {navItems.map((item) => {
            const active =
              item.href === "/"
                ? pathname === "/"
                : pathname === item.href ||
                  pathname.startsWith(`${item.href}/`);

            return (
              <Link
                key={item.href}
                href={item.href}
                aria-current={active ? "page" : undefined}
                className={`rounded-xl px-4 py-2.5 text-sm transition-colors ${
                  active
                    ? "bg-[#E4F0FF] font-bold text-[#2878E5]"
                    : "font-semibold text-[#526D89] hover:bg-[#EAF3FF] hover:text-[#173B63]"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        {/* Language switcher */}
        <div
          className="flex shrink-0 items-center rounded-full border border-[#D5E5FA] bg-[#E6F1FF] p-1"
          aria-label="Choose website language"
        >
          <button
            type="button"
            onClick={() => setLanguage("en")}
            aria-pressed={language === "en"}
            className={`min-h-8 min-w-9 rounded-full px-2.5 text-xs font-bold transition-all duration-200 ${
              language === "en"
                ? "bg-[#2878E5] text-white shadow-sm"
                : "text-[#173B63] hover:bg-white/80"
            }`}
          >
            EN
          </button>

          <button
            type="button"
            onClick={() => setLanguage("np")}
            aria-pressed={language === "np"}
            className={`min-h-8 min-w-9 rounded-full px-2.5 text-xs font-bold transition-all duration-200 ${
              language === "np"
                ? "bg-[#2878E5] text-white shadow-sm"
                : "text-[#173B63] hover:bg-white/80"
            }`}
          >
            NP
          </button>
        </div>
      </div>
    </header>
  );
}
