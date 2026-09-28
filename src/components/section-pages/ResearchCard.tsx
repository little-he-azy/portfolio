"use client";

import { SectionTheme } from "./sectionTheme";

interface ResearchCardProps {
  theme: SectionTheme;
  title: string;
  authors: string;
  tags: string[];
  status: string;
  year: string;
  index?: number;
}

export default function ResearchCard({
  theme,
  title,
  authors,
  tags,
  status,
  year,
  index = 0,
}: ResearchCardProps) {
  return (
    <div
      className="group relative overflow-hidden rounded-[22px] border-[1.5px] p-5 md:p-6 transition-all duration-200 hover:-translate-y-0.5"
      style={{
        backgroundColor: theme.cardBg,
        borderColor: `${theme.border}50`,
        boxShadow: "0 5px 15px rgba(70,50,30,0.04)",
        animationDelay: `${index * 80}ms`,
      }}
    >
      <div className="flex items-start gap-4 md:gap-5">
        {/* 左侧 document icon */}
        <div
          className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border"
          style={{
            backgroundColor: theme.bgLight,
            borderColor: `${theme.border}40`,
          }}
        >
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke={theme.accent} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
            <polyline points="14 2 14 8 20 8" />
            <line x1="16" y1="13" x2="8" y2="13" />
            <line x1="16" y1="17" x2="8" y2="17" />
            <line x1="10" y1="9" x2="8" y2="9" />
          </svg>
        </div>

        {/* 中间内容 */}
        <div className="flex-1 min-w-0">
          <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1">
            <h3 className="text-base font-bold text-[#3b3328] md:text-lg leading-snug">
              {title}
            </h3>
            <span className="text-xs font-medium tracking-wide text-[#a09582] shrink-0 whitespace-nowrap">
              {status} · {year}
            </span>
          </div>

          <p className="mt-1.5 text-sm text-[#8a7c62]">
            {authors}
          </p>

          {/* Tags */}
          <div className="mt-3 flex flex-wrap gap-2">
            {tags.map((tag) => (
              <span
                key={tag}
                className="inline-flex rounded-full px-3 py-1 text-xs font-medium"
                style={{
                  backgroundColor: theme.filterActiveBg,
                  color: "#5c4f3d",
                }}
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
