
"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Home, Wrench, MapPin } from "lucide-react";

const items = [
  {
    label: "Home",
    href: "/",
    icon: Home,
  },
  {
    label: "Services",
    href: "/services",
    icon: Wrench,
  },
  {
    label: "Contact",
    href: "/contact",
    icon: MapPin,
  },
];

export default function BottomNav() {
  const pathname = usePathname();

  return (
    <nav
      aria-label="Main navigation"
      className="fixed inset-x-0 bottom-0 z-50 border-t border-white/10 bg-[#EAF3FF]/80 px-3 pb-[max(8px,env(safe-area-inset-bottom))] pt-2 backdrop-blur-md md:hidden"
    >
      <div className="mx-auto grid h-[66px] max-w-[420px] grid-cols-3 overflow-hidden rounded-[24px] border border-white/20 bg-gradient-to-b from-[#0868CB] to-[#06458E] shadow-[0_8px_24px_rgba(14,75,145,0.28)]">
        {items.map((item) => {
          const Icon = item.icon;

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
              className={`relative flex flex-col items-center justify-center gap-1 transition-colors duration-200 ${
                active
                  ? "font-bold text-white"
                  : "font-medium text-[#A8D0F8] hover:text-white"
              }`}
            >
              <Icon
                size={23}
                strokeWidth={active ? 2.7 : 2}
                className="transition-transform duration-200"
              />

              <span className="text-[11px]">{item.label}</span>

              {active && (
                <span className="absolute bottom-1 h-[3px] w-7 rounded-full bg-white" />
              )}
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
