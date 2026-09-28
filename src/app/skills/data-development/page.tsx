import SkillSubPageLayout from "@/components/skills/SkillSubPageLayout";
import SkillSectionTitle from "@/components/skills/SkillSectionTitle";
import TechIcon from "@/components/skills/TechIcon";
import { programmingItems, dataItems, backendItems, workflowItems, devNotes, SK } from "@/data/skills";

export const metadata = {
  title: "Data & Development | AZY HE",
  description: "Building with data and code.",
};

export default function DataDevelopmentPage() {
  return (
    <SkillSubPageLayout
      currentId="data-development"
      number="03"
      verb="BUILD"
      title="DATA & DEVELOPMENT"
      titleZh="数据与开发"
      description="Building with data and code."
      keywords={["Python", "Data", "API", "Engineering"]}
    >
      {/* Programming */}
      <section className="animate-reveal">
        <SkillSectionTitle
          title="Programming"
          icon={
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="16 18 22 12 16 6" />
              <polyline points="8 6 2 12 8 18" />
            </svg>
          }
        />
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
          {programmingItems.map((item) => (
            <div
              key={item.name}
              className="flex items-center gap-2.5 rounded-2xl border border-[#c8d9c4] bg-[#fffdf5] px-4 py-3.5 transition-all hover:-translate-y-0.5 hover:border-[#a5c9a0] hover:shadow-[0_4px_12px_rgba(70,50,30,0.05)]"
            >
              {item.icon ? (
                <TechIcon name={item.icon} size={22} />
              ) : (
                <span className="flex h-[22px] w-[22px] items-center justify-center rounded-md" style={{ backgroundColor: `${SK.tagBg}` }}>
                  <span className="h-1.5 w-1.5 rounded-full" style={{ backgroundColor: SK.accent }} />
                </span>
              )}
              <span className="text-sm font-semibold text-[#3b3328]">{item.name}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Data */}
      <section className="animate-reveal">
        <SkillSectionTitle
          title="Data"
          icon={
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
              <ellipse cx="12" cy="5" rx="9" ry="3" />
              <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" />
              <path d="M3 12c0 1.66 4 3 9 3s9-1.34 9-3" />
            </svg>
          }
        />
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
          {dataItems.map((item) => (
            <div
              key={item.name}
              className="flex items-center gap-2.5 rounded-2xl border border-[#c8d9c4] bg-[#fffdf5] px-4 py-3.5 transition-all hover:-translate-y-0.5 hover:border-[#a5c9a0] hover:shadow-[0_4px_12px_rgba(70,50,30,0.05)]"
            >
              {item.icon ? (
                <TechIcon name={item.icon} size={22} />
              ) : (
                <span className="flex h-[22px] w-[22px] items-center justify-center rounded-md" style={{ backgroundColor: SK.tagBg }}>
                  <span className="h-1.5 w-1.5 rounded-full" style={{ backgroundColor: SK.accent }} />
                </span>
              )}
              <span className="text-sm font-semibold text-[#3b3328]">{item.name}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Backend */}
      <section className="animate-reveal">
        <SkillSectionTitle
          title="Backend"
          icon={
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
              <rect x="2" y="2" width="20" height="8" rx="2" />
              <rect x="2" y="14" width="20" height="8" rx="2" />
              <line x1="6" y1="6" x2="6.01" y2="6" />
              <line x1="6" y1="18" x2="6.01" y2="18" />
            </svg>
          }
        />
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5">
          {backendItems.map((item) => (
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

      {/* Development Workflow */}
      <section className="animate-reveal">
        <SkillSectionTitle
          title="Development Workflow"
          icon={
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 2a10 10 0 1 0 10 10H12V2z" />
              <path d="M12 2a10 10 0 0 1 10 10" />
            </svg>
          }
        />
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5">
          {workflowItems.map((item) => (
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

      {/* Technical Notes */}
      <section className="animate-reveal">
        <SkillSectionTitle
          title="Technical Notes"
          icon={
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
              <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
              <polyline points="14 2 14 8 20 8" />
              <line x1="16" y1="13" x2="8" y2="13" />
              <line x1="16" y1="17" x2="8" y2="17" />
              <polyline points="10 9 9 9 8 9" />
            </svg>
          }
        />
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {devNotes.map((note) => (
            <div
              key={note.title}
              className="group relative rounded-2xl border border-[#c8d9c4] bg-[#fffdf5] p-5 transition-all hover:-translate-y-0.5 hover:border-[#a5c9a0] hover:shadow-[0_4px_12px_rgba(70,50,30,0.05)]"
            >
              <div className="flex items-start justify-between">
                <div>
                  <h3 className="text-base font-bold text-[#3b3328]">{note.title}</h3>
                  <p className="font-cn mt-1 text-sm text-[#8a7c62]">{note.description}</p>
                </div>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="shrink-0 text-[#c8d9c4] transition-colors group-hover:text-[#8FB18B]">
                  <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                  <polyline points="14 2 14 8 20 8" />
                </svg>
              </div>
              <div className="mt-3 flex items-center justify-between">
                <div className="flex flex-wrap gap-1.5">
                  {note.tags?.map((tag) => (
                    <span key={tag} className="rounded-full border px-2 py-0.5 text-[10px] font-medium" style={{ borderColor: SK.tagBorder, backgroundColor: SK.tagBg, color: SK.tagText }}>
                      {tag}
                    </span>
                  ))}
                </div>
                <span className="text-xs text-[#a09480]">Coming soon</span>
              </div>
            </div>
          ))}
        </div>
      </section>
    </SkillSubPageLayout>
  );
}
