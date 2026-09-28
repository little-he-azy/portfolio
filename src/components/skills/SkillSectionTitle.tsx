"use client";

import { SK } from "@/data/skills";

interface SkillSectionTitleProps {
  title: string;
  icon?: React.ReactNode;
}

export default function SkillSectionTitle({ title, icon }: SkillSectionTitleProps) {
  return (
    <div className="flex items-center gap-2.5 mb-5 md:mb-6">
      {icon && (
        <span style={{ color: SK.accent }}>
          {icon}
        </span>
      )}
      <h2 className="text-xl font-bold text-[#3b3328] md:text-2xl">
        {title}
      </h2>
      <div className="ml-2 h-[1.5px] flex-1 max-w-[60px] rounded-full" style={{ backgroundColor: SK.decorateLine }} />
    </div>
  );
}
