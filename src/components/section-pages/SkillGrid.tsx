"use client";

import { SectionTheme } from "./sectionTheme";

interface SkillItem {
  name: string;
  icon?: React.ReactNode;
}

interface SkillCategory {
  title: string;
  titleCn: string;
  skills: SkillItem[];
}

interface SkillGridProps {
  theme: SectionTheme;
  categories: SkillCategory[];
}

export default function SkillGrid({ theme, categories }: SkillGridProps) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 md:gap-6">
      {categories.map((cat, ci) => (
        <div
          key={cat.title}
          className="rounded-[22px] border-[1.5px] p-5 md:p-6 transition-all duration-200 hover:-translate-y-0.5"
          style={{
            backgroundColor: theme.cardBg,
            borderColor: `${theme.border}50`,
            boxShadow: "0 5px 15px rgba(70,50,30,0.04)",
            animationDelay: `${ci * 100}ms`,
          }}
        >
          <div className="flex items-center gap-2 mb-4">
            <div
              className="h-2 w-2 rounded-full"
              style={{ backgroundColor: theme.accent }}
            />
            <h3 className="text-base font-bold text-[#3b3328]">
              {cat.title}
            </h3>
            <span className="font-cn text-sm text-[#8a7c62]">
              {cat.titleCn}
            </span>
          </div>

          <div className="space-y-3">
            {cat.skills.map((skill) => (
              <div
                key={skill.name}
                className="flex items-center gap-3 rounded-xl px-3 py-2.5 transition-colors duration-150"
                style={{ backgroundColor: `${theme.bgLight}60` }}
              >
                {skill.icon ? (
                  <div className="flex h-7 w-7 shrink-0 items-center justify-center">
                    {skill.icon}
                  </div>
                ) : (
                  <div
                    className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg"
                    style={{ backgroundColor: theme.filterActiveBg }}
                  >
                    <div
                      className="h-2 w-2 rounded-full"
                      style={{ backgroundColor: theme.accent }}
                    />
                  </div>
                )}
                <span className="text-sm font-medium text-[#5c5045]">
                  {skill.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
