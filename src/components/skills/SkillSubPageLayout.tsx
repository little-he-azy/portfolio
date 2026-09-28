"use client";

import Link from "next/link";
import Image from "next/image";
import { skillCategories, SK } from "@/data/skills";

interface SkillSubPageLayoutProps {
  currentId: string;
  number: string;
  verb: string;
  title: string;
  titleZh: string;
  description: string;
  keywords: string[];
  children: React.ReactNode;
}

export default function SkillSubPageLayout({
  currentId,
  number,
  verb,
  title,
  titleZh,
  description,
  keywords,
  children,
}: SkillSubPageLayoutProps) {
  const otherCategories = skillCategories.filter((c) => c.id !== currentId);

  return (
    <main className="relative mx-auto w-full max-w-[1100px] px-6 pb-16 md:px-8">
      {/* Breadcrumb */}
      <div className="pt-6 md:pt-8">
        <Link
          href="/skills"
          className="inline-flex items-center gap-1.5 text-sm font-medium transition-colors hover:text-[#5c4f3d]"
          style={{ color: SK.decorateText }}
        >
          <span>←</span>
          <span className="font-[family-name:var(--font-fredoka)]">Skills</span>
          <span className="font-cn text-xs">/ {titleZh}</span>
        </Link>
      </div>

      {/* Hero with character */}
      <section className="pt-5 pb-3 md:pt-6 md:pb-5">
        <div className="flex flex-col items-center gap-5 md:flex-row md:items-center md:justify-between">
          {/* Left: text */}
          <div className="text-center md:text-left md:w-[60%]">
            {/* Number + verb */}
            <div className="animate-fade-in-up" style={{ animationDelay: "0ms", opacity: 0 }}>
              <div className="flex items-baseline gap-2.5">
                <span
                  className="font-[family-name:var(--font-fredoka)] text-3xl font-bold md:text-4xl"
                  style={{ color: SK.accent }}
                >
                  {number} /
                </span>
                <span
                  className="text-[11px] font-bold tracking-widest uppercase md:text-xs"
                  style={{ color: SK.decorateText }}
                >
                  {verb}
                </span>
              </div>
            </div>

            <h1
              className="mt-1 text-3xl font-bold tracking-tight text-[#3b3328] md:text-4xl animate-fade-in-up"
              style={{ animationDelay: "80ms", opacity: 0 }}
            >
              {title}
            </h1>

            <p
              className="font-cn mt-1 text-xl font-medium text-[#8a7c62] animate-fade-in-up"
              style={{ animationDelay: "160ms", opacity: 0 }}
            >
              {titleZh}
            </p>

            <p
              className="mx-auto mt-2.5 max-w-md text-base leading-relaxed text-[#6d675d] md:mx-0 animate-fade-in-up"
              style={{ animationDelay: "240ms", opacity: 0 }}
            >
              {description}
            </p>

            <div
              className="mt-3 flex flex-wrap justify-center gap-2 md:justify-start animate-fade-in-up"
              style={{ animationDelay: "320ms", opacity: 0 }}
            >
              {keywords.map((kw) => (
                <span
                  key={kw}
                  className="rounded-full border px-3 py-1 text-sm font-medium"
                  style={{
                    borderColor: SK.tagBorder,
                    backgroundColor: SK.tagBg,
                    color: SK.tagText,
                  }}
                >
                  {kw}
                </span>
              ))}
            </div>
          </div>

          {/* Right: character illustration */}
          <div className="relative flex justify-center md:w-[38%] md:justify-end">
            {/* Very faint green blob behind character */}
            <div
              className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-[60%_40%_55%_45%/55%_45%_60%_40%] opacity-25 md:left-auto md:right-2 md:translate-x-0"
              style={{
                width: "230px",
                height: "190px",
                backgroundColor: "#e2ede0",
              }}
            />
            {/* Small sparkle decorations */}
            <div
              className="absolute -right-1 top-1 animate-twinkle opacity-50 md:right-0"
              style={{ animationDelay: "0.6s" }}
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 2v6M12 16v6M2 12h6M16 12h6" stroke={SK.accent} strokeWidth="1.8" />
              </svg>
            </div>
            <div
              className="absolute bottom-6 left-0 animate-twinkle opacity-40 md:left-2"
              style={{ animationDelay: "1.2s" }}
            >
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="2" fill={SK.accent} stroke="#302A23" strokeWidth="1.2" />
              </svg>
            </div>
            {/* Character image */}
            <div
              className="relative animate-fade-in-up"
              style={{ animationDelay: "150ms", animationDuration: "700ms", opacity: 0 }}
            >
              <Image
                src="/images/transparent/skills.png"
                alt={title}
                width={240}
                height={240}
                className="object-contain animate-doodle-float-gentle"
                style={{ maxHeight: "240px", width: "auto" }}
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Content */}
      <div className="space-y-14 md:space-y-16">
        {children}
      </div>

      {/* Explore another skill */}
      <section className="mt-16 md:mt-20">
        <div className="flex items-center gap-3 mb-6">
          <div className="h-[1.5px] flex-1" style={{ backgroundColor: SK.decorateLine }} />
          <span className="font-cn text-sm font-medium" style={{ color: SK.decorateText }}>
            Explore another skill
          </span>
          <div className="h-[1.5px] flex-1" style={{ backgroundColor: SK.decorateLine }} />
        </div>

        <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
          {otherCategories.map((cat) => (
            <Link
              key={cat.id}
              href={cat.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-between rounded-2xl border bg-[#fffdf5] px-5 py-4 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_4px_12px_rgba(70,50,30,0.06)]"
              style={{ borderColor: SK.border }}
              onMouseEnter={(e) => { e.currentTarget.style.borderColor = SK.borderHover; }}
              onMouseLeave={(e) => { e.currentTarget.style.borderColor = SK.border; }}
            >
              <div>
                <span className="text-xs font-bold" style={{ color: SK.accent }}>
                  {cat.number}
                </span>
                <p className="mt-0.5 text-sm font-bold text-[#3b3328]">
                  {cat.title}
                </p>
                <p className="font-cn text-xs text-[#8a7c62]">
                  {cat.titleZh}
                </p>
              </div>
              <span
                className="text-lg transition-transform duration-200 group-hover:translate-x-1"
                style={{ color: SK.arrow }}
              >
                →
              </span>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}
