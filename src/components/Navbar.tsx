"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const navItems = [
  { href: "/", label: "Home", labelCn: "首页" },
  { href: "/internship", label: "Internship", labelCn: "实习" },
  { href: "/research", label: "Research", labelCn: "科研" },
  { href: "/engineering", label: "Engineering", labelCn: "工程" },
  { href: "/skills", label: "Skills", labelCn: "技能" },
  { href: "/honors", label: "Honors", labelCn: "荣誉" },
  { href: "/leveling-up", label: "Leveling Up", labelCn: "升级中" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="relative z-50 mx-auto w-full max-w-7xl px-6 py-4 md:px-10">
      <div className="flex items-center justify-between">
        {/* Logo */}
        <Link
          href="/"
          className="font-[family-name:var(--font-fredoka)] text-2xl font-bold tracking-wide text-[#3b3328]"
        >
          AZY HE
        </Link>

        {/* Desktop Nav */}
        <div className="hidden items-center gap-1 text-base font-semibold lg:flex">
          {navItems.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`
                  group relative rounded-full px-3 py-2 transition-all duration-200
                  ${isActive
                    ? "bg-[#fff1a8] text-[#3b3328]"
                    : "text-[#5c4f3d] hover:bg-[#fff1a8]/60"
                  }
                `}
              >
                <span className="font-[family-name:var(--font-fredoka)]">{item.label}</span>
                <span className="font-cn ml-1 text-sm font-normal text-[#8a7c62]">
                  {item.labelCn}
                </span>
                {/* 手绘下划线 hover 效果 */}
                {!isActive && (
                  <span className="absolute bottom-1 left-3 right-3 h-[2px] origin-left scale-x-0 rounded-full bg-[#d4a843] transition-transform duration-200 group-hover:scale-x-100" />
                )}
              </Link>
            );
          })}
        </div>

        {/* Mobile Hamburger */}
        <button
          className="flex flex-col gap-1.5 lg:hidden"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span
            className={`h-0.5 w-6 rounded-full bg-[#3b3328] transition-all duration-200 ${
              menuOpen ? "translate-y-2 rotate-45" : ""
            }`}
          />
          <span
            className={`h-0.5 w-6 rounded-full bg-[#3b3328] transition-all duration-200 ${
              menuOpen ? "opacity-0" : ""
            }`}
          />
          <span
            className={`h-0.5 w-6 rounded-full bg-[#3b3328] transition-all duration-200 ${
              menuOpen ? "-translate-y-2 -rotate-45" : ""
            }`}
          />
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="mt-4 flex flex-col gap-1 rounded-3xl border border-[#5c4f3d]/20 bg-[#fffdf5] p-4 shadow-lg lg:hidden">
          {navItems.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setMenuOpen(false)}
                className={`
                  rounded-2xl px-4 py-3 text-base font-semibold transition-all
                  ${isActive
                    ? "bg-[#fff1a8] text-[#3b3328]"
                    : "text-[#5c4f3d] hover:bg-[#fff1a8]/50"
                  }
                `}
              >
                <span className="font-[family-name:var(--font-fredoka)]">{item.label}</span>
                <span className="font-cn ml-2 text-sm font-normal text-[#8a7c62]">
                  {item.labelCn}
                </span>
              </Link>
            );
          })}
        </div>
      )}
    </nav>
  );
}
