import { themes } from "@/components/section-pages/sectionTheme";
import SectionHero from "@/components/section-pages/SectionHero";
import DoodleIcon from "@/components/DoodleIcon";
import SkillCategoryCard from "@/components/skills/SkillCategoryCard";
import { skillCategories } from "@/data/skills";

const theme = themes.skills;

export default function SkillsPage() {
  return (
    <main className="relative mx-auto w-full max-w-[1200px] px-6 pb-16 md:px-8">
      {/* Hero */}
      <SectionHero
        theme={theme}
        icon={
          <DoodleIcon name="pencil" size={36} stroke="#322B25" fill="#8FB18B" accent="#F7C948" />
        }
        title="Skills"
        chineseTitle="个人技能"
        description="Tools, knowledge and superpowers."
        chineseDescription="持续学习，把想法变成自己的能力栈。"
      />

      {/* 4 Skill Category Cards */}
      <div className="mt-2 flex flex-col gap-5 md:gap-6">
        {skillCategories.map((cat, i) => (
          <SkillCategoryCard
            key={cat.id}
            number={cat.number}
            verb={cat.verb}
            title={cat.title}
            titleZh={cat.titleZh}
            description={cat.description}
            keywords={cat.keywords}
            href={cat.href}
            doodle={cat.doodle}
            index={i}
          />
        ))}
      </div>
    </main>
  );
}
