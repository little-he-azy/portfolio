"use client";

import Image from "next/image";
import { SectionTheme } from "./sectionTheme";

interface SectionHeroProps {
  theme: SectionTheme;
  icon: React.ReactNode;
  title: string;
  chineseTitle: string;
  description: string;
  chineseDescription: string;
}

export default function SectionHero({
  theme,
  icon,
  title,
  chineseTitle,
  description,
  chineseDescription,
}: SectionHeroProps) {
  return (
    <section className="relative pt-6 pb-4 md:pt-8 md:pb-6">
      <div className="flex flex-col items-center gap-4 md:flex-row md:items-center md:justify-between">
        {/* 左侧标题 ~55% */}
        <div className="text-center md:text-left md:w-[55%]">
          <div className="flex items-center justify-center gap-3 md:justify-start">
            {icon}
            <h1 className="text-4xl font-bold tracking-tight text-[#3b3328] md:text-5xl">
              {title}
            </h1>
          </div>

          <p className="font-cn mt-2 text-xl font-medium" style={{ color: theme.accent }}>
            {chineseTitle}
          </p>

          <p className="mx-auto mt-3 max-w-md text-base leading-relaxed text-[#6d675d] md:mx-0 md:max-w-sm">
            {description}
          </p>
          <p className="font-cn mx-auto mt-1 max-w-md text-sm leading-relaxed text-[#8a7c62] md:mx-0 md:max-w-sm">
            {chineseDescription}
          </p>
        </div>

        {/* 右侧插画 ~45% */}
        <div className="relative md:w-[45%] flex justify-center md:justify-end bg-transparent border-none shadow-none">
          <div
            className="animate-fade-in-up bg-transparent border-none shadow-none"
            style={{ animationDuration: "600ms" }}
          >
            <Image
              src={theme.heroImage}
              alt={title}
              width={340}
              height={340}
              className="animate-doodle-float-gentle object-contain bg-transparent border-none shadow-none"
              style={{ maxHeight: "340px", width: "auto" }}
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
