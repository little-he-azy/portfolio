"use client";

import { SectionTheme } from "./sectionTheme";

interface ExperienceCardProps {
  theme: SectionTheme;
  company: string;
  position: string;
  positionCn: string;
  period: string;
  description: string;
  descriptionCn: string;
  tags: string[];
  index?: number;
}

export default function ExperienceCard({
  theme,
  company,
  position,
  positionCn,
  period,
  description,
  descriptionCn,
  tags,
  index = 0,
}: ExperienceCardProps) {
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
        {/* 左侧 Logo */}
        <div
          className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border text-lg font-bold"
          style={{
            backgroundColor: theme.bgLight,
            borderColor: `${theme.border}40`,
            color: theme.accent,
          }}
        >
          {company.charAt(0)}
        </div>

        {/* 中间内容 */}
        <div className="flex-1 min-w-0">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1">
            <h3 className="text-lg font-bold text-[#3b3328] md:text-xl">{company}</h3>
            <span className="text-xs font-medium tracking-wide text-[#a09582] uppercase shrink-0">
              {period}
            </span>
          </div>

          <p className="mt-0.5 text-sm font-medium text-[#5c5045]">
            {position}
            <span className="font-cn ml-1.5 text-sm text-[#8a7c62]">· {positionCn}</span>
          </p>

          <p className="mt-3 text-sm leading-relaxed text-[#5c5045] md:text-[15px]">
            {description}
          </p>
          <p className="font-cn mt-1 text-sm leading-relaxed text-[#8a7c62]">
            {descriptionCn}
          </p>

          {/* Tags */}
          <div className="mt-4 flex flex-wrap gap-2">
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
