import SkillSubPageLayout from "@/components/skills/SkillSubPageLayout";
import SkillSectionTitle from "@/components/skills/SkillSectionTitle";
import { aiKnowledgeMap, learningLabItems, currentlyExploring, SK } from "@/data/skills";

export const metadata = {
  title: "AI Technology | AZY HE",
  description: "Understanding how AI systems work, from models to agents.",
};

export default function AiTechnologyPage() {
  return (
    <SkillSubPageLayout
      currentId="ai-technology"
      number="02"
      verb="UNDERSTAND"
      title="AI TECHNOLOGY"
      titleZh="AI 技术"
      description="Understanding how AI systems work, from models to agents."
      keywords={["LLM", "VLM", "Agent", "RAG", "Multimodal"]}
    >
      {/* AI Knowledge Map */}
      <section className="animate-reveal">
        <SkillSectionTitle
          title="AI Knowledge Map"
          icon={
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="12" r="10" />
              <line x1="2" y1="12" x2="22" y2="12" />
              <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
            </svg>
          }
        />
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          {aiKnowledgeMap.map((mod) => (
            <div
              key={mod.number}
              className="rounded-2xl border border-[#c8d9c4] bg-[#fffdf5] p-5 transition-all hover:-translate-y-0.5 hover:border-[#a5c9a0] hover:shadow-[0_4px_12px_rgba(70,50,30,0.05)]"
            >
              <div className="flex items-center gap-2">
                <span className="text-xs font-bold" style={{ color: SK.accent }}>{mod.number}</span>
                <h3 className="text-base font-bold text-[#3b3328]">{mod.title}</h3>
              </div>
              <ul className="mt-3 space-y-1.5">
                {mod.items.map((item) => (
                  <li key={item} className="flex items-center gap-2 text-sm text-[#5c5045]">
                    <span className="h-1.5 w-1.5 rounded-full" style={{ backgroundColor: SK.accent }} />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Learning Lab */}
      <section className="animate-reveal">
        <SkillSectionTitle
          title="Learning Lab"
          icon={
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
              <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
              <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
            </svg>
          }
        />
        <div className="flex flex-col gap-4">
          {learningLabItems.map((item) => (
            <div
              key={item.title}
              className="group rounded-2xl border border-[#c8d9c4] bg-[#fffdf5] p-5 transition-all hover:-translate-y-0.5 hover:border-[#a5c9a0] hover:shadow-[0_4px_12px_rgba(70,50,30,0.05)]"
            >
              <div className="flex flex-col gap-3 md:flex-row md:items-start md:justify-between">
                <div className="flex-1">
                  <div className="flex items-center gap-2">
                    <h3 className="text-base font-bold text-[#3b3328]">{item.title}</h3>
                    {item.status === "coming-soon" && (
                      <span className="rounded-full bg-[#f0ece4] px-2 py-0.5 text-[10px] font-semibold text-[#a09480]">
                        Coming soon
                      </span>
                    )}
                  </div>
                  <p className="mt-1 text-sm text-[#6d675d]">{item.description}</p>
                  <div className="mt-2 flex flex-wrap gap-2">
                    {item.points.map((pt) => (
                      <span
                        key={pt}
                        className="rounded-full border border-[#d4e4d0] bg-[#f0f7ee] px-2.5 py-0.5 text-xs text-[#5a7a55]"
                      >
                        {pt}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="flex gap-2 md:pt-1">
                  <span className="inline-flex items-center rounded-lg border border-[#c8d9c4] bg-[#fffdf5] px-3 py-1.5 text-xs font-medium text-[#8a7c62]">
                    Learning Notes
                  </span>
                  {item.githubLink ? (
                    <a
                      href={item.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center rounded-lg border border-[#c8d9c4] bg-[#fffdf5] px-3 py-1.5 text-xs font-medium text-[#5c4f3d] transition-colors hover:bg-[#f5faf4]"
                    >
                      GitHub ↗
                    </a>
                  ) : (
                    <span className="inline-flex items-center rounded-lg border bg-[#faf8f3] px-3 py-1.5 text-xs font-medium text-[#b0a58f]" style={{ borderColor: `${SK.border}60` }}>
                      GitHub ↗
                    </span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Currently Exploring */}
      <section className="animate-reveal">
        <SkillSectionTitle
          title="Currently Exploring"
          icon={
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="12" r="3" />
              <path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" />
            </svg>
          }
        />
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
          {currentlyExploring.map((item) => (
            <div
              key={item.name}
              className="flex items-center justify-between rounded-2xl border border-[#c8d9c4] bg-[#fffdf5] px-5 py-4"
            >
              <div>
                <h3 className="text-base font-bold text-[#3b3328]">{item.name}</h3>
                <p className="mt-0.5 text-xs text-[#8a7c62]">{item.subtitle}</p>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full opacity-75" style={{ backgroundColor: SK.accent }} />
                  <span className="relative inline-flex h-2 w-2 rounded-full" style={{ backgroundColor: SK.accent }} />
                </span>
                <span className="text-xs font-medium text-[#7a6d52]">{item.status}</span>
              </div>
            </div>
          ))}
        </div>
      </section>
    </SkillSubPageLayout>
  );
}
