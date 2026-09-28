import SkillSubPageLayout from "@/components/skills/SkillSubPageLayout";
import SkillSectionTitle from "@/components/skills/SkillSectionTitle";
import TechIcon from "@/components/skills/TechIcon";
import { creativeToolGroups, visualSkills, selectedCreations, SK } from "@/data/skills";

export const metadata = {
  title: "Creative & Tools | AZY HE",
  description: "Tools I use to create and communicate.",
};

export default function CreativeToolsPage() {
  return (
    <SkillSubPageLayout
      currentId="creative-tools"
      number="04"
      verb="CREATE"
      title="CREATIVE & TOOLS"
      titleZh="创意与工具"
      description="Tools I use to create and communicate."
      keywords={["AI Tools", "Design", "Video", "Photography"]}
    >
      {/* AI Tools, Design, Video & Content */}
      {creativeToolGroups.map((group) => (
        <section key={group.title} className="animate-reveal">
          <SkillSectionTitle
            title={group.title}
            icon={
              group.title === "AI Tools" ? (
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 2a4 4 0 0 1 4 4c0 2-1 3-2 4l1 7H9l1-7c-1-1-2-2-2-4a4 4 0 0 1 4-4z" />
                  <path d="M8 22h8" />
                </svg>
              ) : group.title === "Design" ? (
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 19l7-7 3 3-7 7-3-3z" />
                  <path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z" />
                  <path d="M2 2l7.586 7.586" />
                  <circle cx="11" cy="11" r="2" />
                </svg>
              ) : (
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="3" width="20" height="14" rx="2" />
                  <line x1="8" y1="21" x2="16" y2="21" />
                  <line x1="12" y1="17" x2="12" y2="21" />
                </svg>
              )
            }
          />
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
            {group.items.map((item) => (
              <div
                key={item.name}
                className="flex items-center gap-2.5 rounded-2xl border border-[#c8d9c4] bg-[#fffdf5] px-4 py-3 transition-all hover:-translate-y-0.5 hover:border-[#a5c9a0] hover:shadow-[0_4px_12px_rgba(70,50,30,0.05)]"
              >
                {item.icon ? (
                  <TechIcon name={item.icon} size={20} />
                ) : (
                  <span className="flex h-5 w-5 items-center justify-center rounded-md" style={{ backgroundColor: SK.tagBg }}>
                    <span className="h-1.5 w-1.5 rounded-full" style={{ backgroundColor: SK.accent }} />
                  </span>
                )}
                <span className="text-sm font-medium text-[#3b3328]">{item.name}</span>
              </div>
            ))}
          </div>
        </section>
      ))}

      {/* Visual Skills */}
      <section className="animate-reveal">
        <SkillSectionTitle
          title="Visual Skills"
          icon={
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
              <path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z" />
              <circle cx="12" cy="13" r="4" />
            </svg>
          }
        />
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
          {visualSkills.map((skill) => (
            <div
              key={skill}
              className="flex items-center gap-3 rounded-2xl border border-[#c8d9c4] bg-[#fffdf5] px-5 py-3.5 transition-all hover:-translate-y-0.5 hover:border-[#a5c9a0] hover:shadow-[0_4px_12px_rgba(70,50,30,0.05)]"
            >
              <span className="flex h-2 w-2 rounded-full" style={{ backgroundColor: SK.accent }} />
              <span className="text-sm font-semibold text-[#3b3328]">{skill}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Selected Creations */}
      <section className="animate-reveal">
        <SkillSectionTitle
          title="Selected Creations"
          icon={
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
              <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
            </svg>
          }
        />
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
          {selectedCreations.map((creation) => (
            <div
              key={creation.title}
              className="group relative flex flex-col rounded-2xl border border-[#c8d9c4] bg-[#fffdf5] p-6 transition-all hover:-translate-y-0.5 hover:border-[#a5c9a0] hover:shadow-[0_4px_12px_rgba(70,50,30,0.05)]"
            >
              {/* Cover placeholder */}
              <div className="flex h-24 items-center justify-center rounded-xl border border-dashed border-[#c8d9c4] bg-[#f5faf4]">
                <span className="text-xs font-medium uppercase tracking-wider" style={{ color: SK.decorateText }}>
                  {creation.type}
                </span>
              </div>
              <h3 className="mt-4 text-lg font-bold text-[#3b3328]">{creation.title}</h3>
              <p className="font-cn mt-1 text-sm text-[#8a7c62]">{creation.description}</p>
              <div className="mt-auto flex items-center justify-between pt-4">
                <span className="rounded-full bg-[#f0ece4] px-3 py-1 text-xs text-[#a09480]">Coming soon</span>
                <span className="text-sm text-[#c8d9c4] transition-colors group-hover:text-[#8FB18B]">View ↗</span>
              </div>
            </div>
          ))}
        </div>
      </section>
    </SkillSubPageLayout>
  );
}
