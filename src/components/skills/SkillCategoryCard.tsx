"use client";

import React from "react";
import SkillDoodle, { type SkillDoodleName } from "./SkillDoodles";
import { SK } from "@/data/skills";

interface SkillCategoryCardProps {
  number: string;
  verb: string;
  title: string;
  titleZh: string;
  description: string;
  keywords: string[];
  href: string;
  doodle: SkillDoodleName;
  index?: number;
}

export default function SkillCategoryCard({
  number,
  verb,
  title,
  titleZh,
  description,
  keywords,
  href,
  doodle,
  index = 0,
}: SkillCategoryCardProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="group relative block w-full overflow-hidden rounded-[22px] border bg-[#fffdf5] p-5 shadow-[0_3px_10px_rgba(70,50,30,0.03)] transition-all duration-200 hover:-translate-y-[4px] hover:bg-[#f5faf4] hover:shadow-[0_6px_20px_rgba(70,50,30,0.06)] md:rounded-[24px] md:p-6 animate-fade-in-up"
      style={{
        borderColor: SK.border,
        animationDelay: `${index * 120}ms`,
        opacity: 0,
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.borderColor = SK.borderHover;
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.borderColor = SK.border;
      }}
    >
      <div className="flex items-start justify-between gap-4">
        {/* Left content */}
        <div className="flex-1 min-w-0">
          {/* Number + Verb + Title row */}
          <div className="flex items-baseline gap-2">
            <span
              className="font-[family-name:var(--font-fredoka)] text-xl font-bold md:text-2xl"
              style={{ color: SK.accent }}
            >
              {number}
            </span>
            <div className="flex flex-col">
              <div className="flex items-baseline gap-1.5">
                <span
                  className="text-[10px] font-bold tracking-widest"
                  style={{ color: SK.decorateText }}
                >
                  {verb}
                </span>
                <h2 className="text-lg font-bold tracking-tight text-[#3b3328] md:text-xl">
                  {title}
                </h2>
              </div>
              <span className="font-cn text-sm font-medium text-[#8a7c62]">
                {titleZh}
              </span>
            </div>
          </div>

          {/* Description */}
          <p className="mt-2 text-sm leading-relaxed text-[#6d675d]">
            {description}
          </p>

          {/* Keywords */}
          <div className="mt-2.5 flex flex-wrap gap-1.5">
            {keywords.map((kw) => (
              <span
                key={kw}
                className="rounded-full border px-2 py-0.5 text-[11px] font-medium md:text-xs"
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

        {/* Right: Doodle + Explore */}
        <div className="flex shrink-0 flex-col items-end gap-3">
          <div className="transition-transform duration-200 group-hover:rotate-[-3deg] group-hover:scale-105">
            <SkillDoodle name={doodle} size={44} />
          </div>

          <span
            className="inline-flex items-center gap-0.5 text-sm font-semibold transition-colors duration-200"
            style={{ color: SK.arrow }}
          >
            <span>Explore</span>
            <span className="transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
              ↗
            </span>
          </span>
        </div>
      </div>
    </a>
  );
}
