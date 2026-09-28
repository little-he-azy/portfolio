"use client";

import Image from "next/image";
import { SectionTheme } from "./sectionTheme";

interface ProjectCardProps {
  theme: SectionTheme;
  name: string;
  description: string;
  descriptionCn: string;
  tags: string[];
  image?: string;
  status?: string;
  index?: number;
}

export default function ProjectCard({
  theme,
  name,
  description,
  descriptionCn,
  tags,
  image,
  status,
  index = 0,
}: ProjectCardProps) {
  return (
    <div
      className="group relative overflow-hidden rounded-[22px] border-[1.5px] transition-all duration-200 hover:-translate-y-0.5"
      style={{
        backgroundColor: theme.cardBg,
        borderColor: `${theme.border}50`,
        boxShadow: "0 5px 15px rgba(70,50,30,0.04)",
        animationDelay: `${index * 80}ms`,
      }}
    >
      <div className="flex flex-col sm:flex-row items-start gap-4 md:gap-5 p-5 md:p-6">
        {/* 左侧 thumbnail */}
        <div
          className="flex h-20 w-20 shrink-0 items-center justify-center rounded-xl border overflow-hidden"
          style={{
            backgroundColor: theme.bgLight,
            borderColor: `${theme.border}40`,
          }}
        >
          {image ? (
            <Image
              src={image}
              alt={name}
              width={80}
              height={80}
              className="h-full w-full object-cover"
            />
          ) : (
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke={theme.accent} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
              <rect x="2" y="3" width="20" height="14" rx="2" />
              <line x1="8" y1="21" x2="16" y2="21" />
              <line x1="12" y1="17" x2="12" y2="21" />
            </svg>
          )}
        </div>

        {/* 中间内容 */}
        <div className="flex-1 min-w-0">
          <div className="flex items-center justify-between gap-2">
            <h3 className="text-lg font-bold text-[#3b3328] md:text-xl">
              {name}
            </h3>
            {status && (
              <span className="text-xs font-medium text-[#a09582] shrink-0">
                {status}
              </span>
            )}
          </div>

          <p className="mt-1.5 text-sm leading-relaxed text-[#5c5045] md:text-[15px]">
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
